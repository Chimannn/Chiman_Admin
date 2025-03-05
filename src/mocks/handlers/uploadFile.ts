import { http, HttpResponse } from "msw";

const uploads = new Map();

const handlers = [
    // 初始化上传
    http.post("/api/upload/init", ({ request }) => {
        const { fileName, fileHash } = request.json();

        // 秒传验证
        if (uploads.has(fileHash)) {
            return HttpResponse.json({
                exist: true,
                url: `/files/${fileHash}/${fileName}`,
            });
        }

        const uploadId = crypto.randomUUID();
        uploads.set(uploadId, {
            fileName,
            chunks: new Set(),
        });
        return HttpResponse.json({
            exist: false,
            uploadId,
        });
    }),

    // 上传分片
    http.post("/api/upload/:uploadId", async ({ params, request }) => {
        const { uploadId } = params;
        const formData = await request.formData();
        const index = parseInt(formData.get("index"));

        // 模拟50%失败率
        // if (Math.random() < 0.5) {
        //     return new HttpResponse(null, { status: 500 });
        // }

        const upload = uploads.get(uploadId);
        if (!upload) return new HttpResponse(null, { status: 404 });

        upload.chunks.add(index);
        return new HttpResponse(null, { status: 200 });
    }),

    // 查询已上传分片
    http.get("/api/upload/chunks/:uploadId", ({ params }) => {
        const { uploadId } = params;
        const upload = uploads.get(uploadId);
        return HttpResponse.json(Array.from(upload.chunks));
    }),

    // 完成上传
    http.post("/api/upload/complete/:uploadId", ({ params }) => {
        const { uploadId } = params;
        return HttpResponse.json({
            url: `/files/${uploadId}`,
        });
    }),
];

export default [...handlers];
