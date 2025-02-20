import { Select, Typography } from "antd";
import { useState } from "react";

import Card from "@/components/card";
import Chart from "@/components/chart";
import useChart from "@/components/chart/use-chart";
import useTheme from "@/theme/use-theme";
import "../styles/area-download.scss";

export default function AreaDownload() {
    const [year, setYear] = useState("2025");
    const series: Record<string, ApexAxisChartSeries> = {
        "2024": [
            { name: "China", data: [10, 41, 35, 51, 49, 61, 69, 91, 148, 35, 51] },
            { name: "America", data: [10, 34, 13, 56, 77, 88, 99, 45, 13, 56, 77] },
        ],

        "2025": [
            { name: "China", data: [51, 35, 41, 10, 91, 69, 62, 148, 91, 35, 51] },
            { name: "America", data: [56, 13, 34, 10, 77, 99, 88, 45, 13, 56, 77] },
        ],
    };
    return (
        <Card className="area-download">
            <header>
                <Typography.Title level={5}>Area Installed</Typography.Title>
                <Select
                    size="small"
                    defaultValue={year}
                    onChange={(value) => setYear(value)}
                    options={[
                        { value: 2025, label: "2025" },
                        { value: 2024, label: "2024" },
                    ]}
                />
            </header>
            <main>
                <ChartArea series={series[year]} type="area" height={285} />
            </main>
        </Card>
    );
}

function ChartArea({
    series,
    type,
    height,
}: {
    series: ApexAxisChartSeries;
    type: string;
    height: number;
}) {
    const { theme } = useTheme();
    const chartOptions = useChart({
        dataLabels: {
            enabled: false,
        },
        tooltip: {
            theme: theme,
            fillSeriesColor: true,
            marker: { show: true },
            style: {
                fontSize: "12px",
            },
            x: {
                show: false,
            },
        },
        xaxis: {
            type: "category",
            categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jut",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
        },
    });

    return <Chart type={type} series={series} options={chartOptions} height={height} />;
}
