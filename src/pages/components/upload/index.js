import { jsx as _jsx } from "react/jsx-runtime";
import { Row, Col } from "antd";
import Card from "@/components/card";
import { FileUploader } from "@/components/upload";
export default function UploadPage() {
    return (_jsx(Card, { style: { justifyContent: "center" }, children: _jsx(Row, { children: _jsx(Col, { children: _jsx(FileUploader, {}) }) }) }));
}
