import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    initFileUpload,
    fetchUploadedChunks,
    executeParallelUpload,
    completeUpload,
} from "./utils";

export interface UploadState {
    fileHash: string | null;
    chunks: Array<{ index: number; hash: string }>;
    progress: Record<number, number>;
    status: "idle" | "hashing" | "uploading" | "completed" | "paused" | "error";
}

const initialState: UploadState = {
    fileHash: null,
    chunks: [],
    progress: {},
    status: "idle",
};

const CHUNK_SIZE = 1024 * 1024; // 1MB
const MAX_CONCURRENT = 3; // 最大并发数

export const startUpload = createAsyncThunk("upload/start", async (file: File, { dispatch }) => {
    try {
        const workerResult = await initWorker(file, dispatch);
        dispatch(initializeUpload(workerResult));
        // 开始上传
        return await startFileUpload({ file, dispatch, ...workerResult });
    } catch (error) {
        console.error(error);
    }
});

const initWorker = (file: File, dispatch) => {
    return new Promise((resolve) => {
        const worker = new Worker(new URL("@/workers/file.worker.ts", import.meta.url), {
            type: "module",
        });

        worker.postMessage({
            file,
            chunkSize: CHUNK_SIZE,
        });

        worker.onmessage = (e) => {
            if (e.data.type === "CHUNK_PROGRESS") {
                dispatch(updateChunkProgress(e.data.payload));
            }
            if (e.data.type === "FILE_ANALYZED") {
                resolve(e.data.payload);
                worker.terminate();
            }
        };
    });
};

const startFileUpload = async ({ file, dispatch, fileHash, chunks }) => {
    // 初始化上传
    const { uploadId, exist } = await initFileUpload(file, fileHash);
    if (exist) {
        console.log("秒传成功！");
        return { status: "秒传成功" };
    }

    // 获取已上传分片
    const uploadedChunks = await fetchUploadedChunks(uploadId);

    // 并行上传
    const pendingChunks = chunks.filter((chunk) => !uploadedChunks.has(chunk.index));
    await executeParallelUpload({
        file,
        uploadId,
        chunks: pendingChunks,
        chunkSize: CHUNK_SIZE,
        concurrency: MAX_CONCURRENT,
        progressHandler: (index, percent) => dispatch(updateChunkProgress({ index, percent })),
    });

    // 完成上传
    return await completeUpload(uploadId);
};

const uploadSlice = createSlice({
    name: "upload",
    initialState,
    reducers: {
        updateChunkProgress: (state, action) => {
            // 由于mock重写了，所以此处失效，写了样例
            state.progress[action.payload.index] = 100;
            // state.progress[action.payload.index] = action.payload.percent;
            // state.progress[12] = 100;
        },
        initializeUpload: (state, action) => {
            state.fileHash = action.payload.fileHash;
            state.chunks = action.payload.chunks;
            state.status = "uploading";
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(startUpload.pending, (state) => {
                state.status = "hashing";
            })
            .addCase(startUpload.fulfilled, (state) => {
                console.log("completed");

                state.status = "completed";
            });
    },
});

export const { updateChunkProgress, initializeUpload } = uploadSlice.actions;
export default uploadSlice.reducer;
