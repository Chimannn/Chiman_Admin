import { memo } from "react";
import ApexChart from "react-apexcharts";
import type { Props as ApexChartProps } from "react-apexcharts";
import useChart from "./use-chart";

function Chart(props: ApexChartProps) {
    const options = useChart(props);
    return (
        <div>
            <ApexChart {...options} />
        </div>
    );
}

export default memo(Chart);
