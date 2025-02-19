import Card from "@/components/card";
import { Typography } from "antd";
import useChart from "@/components/chart/use-chart";
import Chart from "@/components/chart";
import useTheme from "@/theme/use-theme";
import "../styles/current-download.scss";

type chartProps = {
    type: string;
    height: number;
};
export default function CurrentDownload() {
    return (
        <Card className="current-download">
            <header>
                <Typography.Title level={5}>Current Download</Typography.Title>
            </header>
            <main>
                <ChartCount type="donut" height={300} />
            </main>
        </Card>
    );
}

function ChartCount({ type, height }: chartProps) {
    const { themeStyles, theme } = useTheme();
    const chartOptions = useChart({
        labels: ["Mac", "Window", "IOS", "Android"],
        stroke: {
            show: false,
        },
        legend: {
            position: "bottom",
            horizontalAlign: "center",
        },
        dataLabels: {
            enabled: false,
        },
        tooltip: {
            theme: theme,
            fillSeriesColor: false,
            marker: { show: true },
            y: {
                title: {
                    formatter: (val) => `·    ${val}`,
                },
            },
        },
        chart: {
            width: 240,
        },
        plotOptions: {
            pie: {
                donut: {
                    size: "90%",
                    labels: {
                        show: true,
                        total: {
                            fontSize: "12px",
                        },
                        value: {
                            fontSize: "18px",
                            fontWeight: 700,
                            color: themeStyles.color,
                        },
                    },
                },
            },
        },
    });
    const series = [44, 55, 13, 43];
    return <Chart type={type} series={series} options={chartOptions} height={height} />;
}
