import Card from "@/components/card";
import "../styles/total-card.scss";
// import Chart from "@/components/chart/chart";
// import useChart from "@/components/chart/useChart";
// import { SvgIcon } from "@/components/icon";

type Props = {
    title: string;
    increase: boolean;
    percent: string;
    count: string;
    chartData: number[];
};
export default function TotalCard({ title, increase, count, percent }: Props) {
    return (
        <Card>
            <div className="div1">
                <h6>{title}</h6>
                <div className="div2">
                    {
                        increase
                            ? // <SvgIcon icon="ic_rise" size={24} color="rgb(34, 197, 94)" />
                              "⬆️"
                            : "⬇️"
                        // <SvgIcon icon="ic_decline" size={24} color="rgb(255, 86, 48)" />
                    }
                    <div className="div3">
                        <span>{increase ? "+" : "-"}</span>
                        <span>{percent}</span>
                    </div>
                </div>
                <h3>{count}</h3>
            </div>

            {/* <ChartLine data={chartData} /> */}
        </Card>
    );
}

// function ChartLine({ data }: { data: number[] }) {
//     const series = [
//         {
//             name: "",
//             data,
//         },
//     ];
//     const chartOptions = useChart({
//         tooltip: {
//             x: {
//                 show: false,
//             },
//         },
//         xaxis: {
//             labels: {
//                 show: false,
//                 showDuplicates: false,
//             },
//             tooltip: {
//                 enabled: false,
//             },
//             crosshairs: {
//                 show: false,
//             },
//         },
//         yaxis: {
//             labels: {
//                 show: false,
//             },
//             tooltip: {
//                 enabled: false,
//             },
//             crosshairs: {
//                 show: false,
//             },
//         },
//         grid: {
//             show: false,
//         },
//     });

//     return <Chart type="line" series={series} options={chartOptions} width={120} />;
// }
