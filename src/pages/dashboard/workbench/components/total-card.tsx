import Card from "@/components/card";
import "../styles/total-card.scss";
import { UpSvgIcon, DownSvgIcon } from "@/components/icon/svg-icon";
import Chart from "@/components/chart";
import useChart from "@/components/chart/use-chart";
import useTheme from "@/theme/use-theme";
type Props = {
    title: string;
    increase: boolean;
    percent: string;
    count: string;
    chartData: number[];
};

type chartProps = {
    chartData: number[];
    type: string;
    width: number;
};

export default function TotalCard({ title, increase, count, percent, chartData }: Props) {
    return (
        <Card>
            <div className="div1">
                <h6>{title}</h6>
                <div className="div2">
                    {increase ? <UpSvgIcon /> : <DownSvgIcon />}
                    <div className="div3">
                        <span>{increase ? "+" : "-"}</span>
                        <span>{percent}</span>
                    </div>
                </div>
                <h3>{count}</h3>
            </div>
            <div className="div4">
                <ChartLine chartData={chartData} type="line" width={150} />
            </div>
        </Card>
    );
}

function ChartLine({ chartData, type, width }: chartProps) {
    const { theme } = useTheme();
    const series = [{ name: "", data: chartData }];
    const chartOptions = useChart({
        colors: ["#00a76f"],
        chart: {
            toolbar: { show: false },
        },
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            axisTicks: {
                show: false,
            },
            labels: {
                show: false,
                showDuplicates: false,
            },
            tooltip: {
                enabled: false,
            },
            crosshairs: { show: false },
        },
        tooltip: {
            theme: theme,
            x: {
                show: false,
            },
        },
        grid: {
            show: false,
        },
        yaxis: {
            labels: {
                show: false,
            },
            tooltip: {
                enabled: false,
            },
            crosshairs: {
                show: false,
            },
        },
    });

    return <Chart type={type} series={series} options={chartOptions} width={width} />;
}
