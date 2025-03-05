import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { List } from "react-virtualized";
import { startUpload } from "@/store/upload/uploadSlice";
import "./index.scss";

const FileUploader = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.fileUpload.chunks);

    const onDrop = useCallback((files) => {
        return dispatch(startUpload(files?.[0]));
    }, []);

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
    });

    const rowRenderer = ({ index, key, style }) => (
        <div key={key} style={style}>
            {JSON.stringify(data[index])}
        </div>
    );

    return (
        <>
            <div className="upload-container">
                <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p>拖拽CSV文件到此处或点击上传</p>
                </div>
                {data.length > 0 && (
                    <List
                        width={400}
                        maxWidth={800}
                        height={600}
                        rowCount={data.length}
                        rowHeight={30}
                        rowRenderer={rowRenderer}
                    />
                )}
            </div>
            <ProgressDisplay />
        </>
    );
};

const ProgressDisplay = () => {
    const { progress, status } = useSelector((state) => state.fileUpload);

    return (
        <div className="progress-container">
            <div className="status">状态：{status}</div>
            <div className="chunk-progress">
                {Object.entries(progress).map(([index, percent]) => (
                    <div key={index} className="chunk">
                        <div className="index">分片{index}</div>
                        <div className="bar">
                            <div className="fill" style={{ width: `${percent}%` }} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FileUploader;
