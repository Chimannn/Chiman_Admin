import SparkMD5 from "spark-md5";

// 分片处理逻辑
const processChunks = async (file: File, chunkSize: number) => {
    const spark = new SparkMD5.ArrayBuffer();
    const chunks = Math.ceil(file.size / chunkSize);
    const chunkHashes: string[] = [];

    for (let i = 0; i < chunks; i++) {
        const start = i * chunkSize;
        const end = Math.min(file.size, start + chunkSize);
        const chunk = file.slice(start, end);
        const buffer = await chunk.arrayBuffer(); // 转换为ArrayBuffer

        spark.append(buffer);
        chunkHashes.push(SparkMD5.ArrayBuffer.hash(buffer));

        self.postMessage({
            type: "CHUNK_PROGRESS",
            payload: {
                index: i,
                percent: ((i + 1) / chunks) * 100,
            },
        });
    }

    return {
        fileHash: spark.end(),
        chunkHashes,
        chunks: Array.from({ length: chunks }, (_, i) => ({
            index: i,
            hash: chunkHashes[i],
        })),
    };
};

self.onmessage = async (event) => {
    const { file, chunkSize } = event.data;
    const result = await processChunks(file, chunkSize);
    self.postMessage({
        type: "FILE_ANALYZED",
        payload: result,
    });
};
