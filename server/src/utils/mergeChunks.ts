import fs from "fs/promises";
import path from "path";
import { createWriteStream } from "fs";
export const mergeChunks = async (uploadId: string, fileName: string) => {
    const tempDir = path.join(__dirname, "../../../localFiles/temp", uploadId);
    const finalDir = path.join(__dirname, "../../../localFiles/final");

    // 确保最终目录存在
    await fs.mkdir(finalDir, { recursive: true });

    // 读取所有分片并按索引排序
    const chunks = await fs.readdir(tempDir);
    chunks.sort((a, b) => parseInt(a.split(".")[0]) - parseInt(b.split(".")[0]));

    // 合并文件
    const finalPath = path.join(finalDir, fileName);
    const writeStream = createWriteStream(finalPath);

    for (const chunk of chunks) {
        const chunkPath = path.join(tempDir, chunk);
        const buffer = await fs.readFile(chunkPath);
        writeStream.write(buffer);
    }

    writeStream.end();

    // 清理临时目录
    await fs.rm(tempDir, { recursive: true });

    return finalPath;
};
