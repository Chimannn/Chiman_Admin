import Chart from "@/components/chart";
import useChart from "@/components/chart/use-chart";
import useTheme from "@/theme/use-theme";

const series = [44, 55, 13, 43];
export default function ChartPie() {
    const { theme } = useTheme();
    const chartOptions = useChart({
        labels: ["America", "Asia", "Europe", "Africa"],
        legend: {
            horizontalAlign: "center",
            position: "top",
        },
        stroke: {
            show: false,
        },
        dataLabels: {
            enabled: true,
            dropShadow: {
                enabled: false,
            },
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
        plotOptions: {
            pie: {
                donut: {
                    labels: {
                        show: false,
                    },
                },
            },
        },
    });

    return <Chart type="pie" series={series} options={chartOptions} height={320} />;
}
