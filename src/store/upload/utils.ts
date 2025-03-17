import axios from "axios";

interface UploadConfig {
    file: File;
    uploadId: string;
    chunks: ChunkMeta[];
    chunkSize: number;
    concurrency: number;
    progressHandler: (index: number, percent: number) => void;
}
const initFileUpload = async (file: File, fileHash) => {
    const { data } = await axios.post("/api/upload/init", {
        // const { data } = await axios.post("/api/upload?type=init", {
        fileName: file.name,
        fileSize: file.size,
        fileHash: fileHash,
    });

    return data;
};

const fetchUploadedChunks = async (uploadId: string) => {
    const { data } = await axios.get<number[]>(`/api/upload/chunks/${uploadId}`);
    // const { data } = await axios.get<number[]>(`/api/upload?type=chunks&uploadId=${uploadId}`);
    return new Set(data);
};

const executeParallelUpload = async (config: UploadConfig) => {
    const queue: Promise<void>[] = [];

    for (const chunk of config.chunks) {
        const task = uploadChunkWithRetry({
            ...config,
            chunk,
            retries: 3, // 最大重试次数
        });

        queue.push(task);

        if (queue.length >= config.concurrency) {
            await Promise.all(queue);
            queue.length = 0; // 清空已完成队列
        }
    }

    await Promise.all(queue); // 处理剩余任务
};

// 带重试机制的分片上传
const uploadChunkWithRetry = async (config): Promise<void> => {
    try {
        await uploadSingleChunk(config);
    } catch (error) {
        if (config.retries > 0) {
            return uploadChunkWithRetry({
                ...config,
                retries: config.retries - 1,
            });
        }
        throw error;
    }
};

// 单个分片上传
const uploadSingleChunk = async ({ file, uploadId, chunk, chunkSize, progressHandler }) => {
    const formData = createChunkFormData(file, chunk, chunkSize);

    await axios.post(`/api/upload/${uploadId}`, formData, {
        // await axios.post(`/api/upload?type=upload&uploadId=${uploadId}`, formData, {
        onUploadProgress: (progress) => {
            const percent = Math.round((progress.loaded / progress.total) * 100);
            progressHandler(chunk.index, percent);
        },
    });
};

// 构建分片数据包
const createChunkFormData = (file: File, chunk: ChunkMeta, chunkSize: number): FormData => {
    const formData = new FormData();
    const blob = file.slice(chunk.index * chunkSize, (chunk.index + 1) * chunkSize);

    formData.append("file", blob, `${file.name}.part${chunk.index}`);
    formData.append("hash", chunk.hash);
    formData.append("index", chunk.index.toString());

    return formData;
};

const completeUpload = async (uploadId: string) => {
    try {
        const res = await axios.post(`/api/upload/complete/${uploadId}`);
        return {
            status: "上传完成",
            url: res.data.url,
        };
    } catch (error) {
        if (error.response?.data?.error === "分片传递不完整") {
            return {
                status: "retry" as const,
                corruptedChunks: error.response.data.corruptedChunks as number[],
            };
        } else {
            return {
                status: "上传失败",
                url: null,
            };
        }
        throw error;
    }
};

export { initFileUpload, fetchUploadedChunks, executeParallelUpload, completeUpload };
