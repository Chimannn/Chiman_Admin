import express from "express";
import multer from "multer";
import cors from "cors";
import uploadRouter from "./controllers/upload";
const app = express();
app.use(
    cors({
        origin: "http://localhost:5173", // Vite默认端口
        credentials: true,
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", uploadRouter);

app.use("files", express.static("uploads"));

const PORT = 8888;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
