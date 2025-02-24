import React from "react";
import Card from "@/components/card";
import "../styles/analysis-card.scss";

interface Props {
    style?: React.CSSProperties;
    cover: string;
    title: string;
    subtitle: string;
}

const AnalysisCard = ({ style, cover, title, subtitle }: Props) => {
    return (
        <Card style={{ display: "block", borderRadius: "20px", padding: "0" }}>
            <div
                className="div1"
                style={{
                    ...style,
                }}
            >
                <img src={cover} alt="" />
                <span className="span1">{title}</span>
                <span className="span2">{subtitle}</span>
            </div>
        </Card>
    );
};
export default AnalysisCard;
