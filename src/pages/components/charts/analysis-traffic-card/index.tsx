import type { ReactNode } from "react";
import "./index.scss";

type Props = {
    icon: ReactNode;
    title: string;
    subtitle: string;
};

export default function AnalysisTrafficCard({ icon, title, subtitle }: Props) {
    return (
        <div
            className="div1"
            style={{
                border: "1px solid gray, .2)",
            }}
        >
            <div>{icon}</div>
            <span className="title">{title}</span>
            <span className="subTitle">{subtitle}</span>
        </div>
    );
}
