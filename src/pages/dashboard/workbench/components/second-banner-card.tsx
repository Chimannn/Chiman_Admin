import { Progress } from "antd";
import "../styles/second-banner-card.scss";
import useTheme from "@/theme/use-theme";
import Card from "@/components/card";

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
    const { themeStyles } = useTheme();
    const color = themeStyles.color;
    const format = (val?: number) => <span style={{ color: color }}>{val}%</span>;
    return (
        <Card style={{ padding: 0, borderRadius: themeStyles.baseTheme.borderRadius.xl }}>
            <div className="second-banner-card-base" style={{ background: bg, color: color }}>
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
        </Card>
    );
}
