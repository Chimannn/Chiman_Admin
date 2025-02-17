import { Progress } from "antd";
import { useSelector } from "react-redux";
import "../styles/second-banner-card.scss";
export const Conversion = () => {
    return (
        <Base_Card
            percent={80}
            title="66,889"
            subtitle="Conversion"
            iconify="tabler:user-filled"
            bg="#FFD580"
            strokeColor="#FFC547"
        />
    );
};

export const Application = () => {
    return (
        <Base_Card
            percent={80}
            title="93,221"
            subtitle="Application"
            iconify="ic:round-email"
            bg="#6555df"
            strokeColor="rgb(157, 148, 228)"
        />
    );
};

type Props = {
    percent: number;
    title: string;
    subtitle: string;
    bg?: string;
    strokeColor?: string;
};
function Base_Card({ percent, title, subtitle, bg, strokeColor }: Props) {
    const theme = useSelector((state) => state.theme.current);
    const color = theme === "dark" ? "#000" : "#fff";
    const format = (val?: number) => <span style={{ color: color }}>{val}%</span>;
    return (
        <div className="base" style={{ background: bg, color: color }}>
            <Progress
                type="circle"
                size={70}
                percent={percent}
                format={format}
                strokeColor={strokeColor}
            />
            <div className="title">
                <span className="span1">{title}</span>
                <span className="span2">{subtitle}</span>
            </div>
            {/* <div className="absolute right-0">
                <Iconify icon={iconify} style={{ opacity: 0.08 }} size={100} />
            </div> */}
        </div>
    );
}
