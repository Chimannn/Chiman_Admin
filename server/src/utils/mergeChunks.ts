import fs from "fs/promises";
import path from "path";
import { createWriteStream } from "fs";
import SparkMD5 from "spark-md5";
export const mergeChunks = async (
    uploadId: string,
    fileName: string,
    clientFileHash: string,
    hashArray: Array<{}>
) => {
    const tempDir = path.join(__dirname, "../../../localFiles/temp", uploadId);
    const finalDir = path.join(__dirname, "../../../localFiles/final");
    const spark = new SparkMD5.ArrayBuffer();
    const corruptedChunks = []; // 错误分片存储
    // 确保最终目录存在
    await fs.mkdir(finalDir, { recursive: true });

    // 读取所有分片并按索引排序
    const chunks = await fs.readdir(tempDir);
    chunks.sort((a, b) => parseInt(a.split(".")[0]) - parseInt(b.split(".")[0]));

    // 合并文件
    const finalPath = path.join(finalDir, fileName);
    const writeStream = createWriteStream(finalPath);

    try {
        for (const chunk of chunks) {
            const chunkPath = path.join(tempDir, chunk);
            const buffer = await fs.readFile(chunkPath);
            spark.append(buffer); // 生成分片哈希，用于上传完成后对比校验完整性；

            let clientChunkHash = hashArray[parseInt(chunk.split(".")[0])];
            let serverChunkhash = SparkMD5.ArrayBuffer.hash(buffer);

            if (clientChunkHash !== serverChunkhash) {
                corruptedChunks.push(parseInt(chunk.split(".")[0]));
                // throw new Error("分片哈希不匹配");
            }

            writeStream.write(buffer);
        }
        const resultHash = spark.end();
        writeStream.end();

        if (resultHash !== clientFileHash) {
            return { result: "failed", data: { corruptedChunks } };
        }
        // 清理临时目录
        await fs.rm(tempDir, { recursive: true });

        return { result: "success", data: { resultHash, finalPath } };
    } catch (error) {
        writeStream.destroy(); // 强制关闭写入流
        await fs.unlink(finalPath).catch(() => {}); // 删除未完整写入的文件
        throw error; // 向上抛出错误
    }
};
