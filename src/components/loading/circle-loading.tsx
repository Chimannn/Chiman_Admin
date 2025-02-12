import { Spin } from "antd";
import "./circle-loading.scss";

export function CircleLoading() {
    return (
        <div className="circle-loading">
            <Spin size="large" />
        </div>
    );
}
