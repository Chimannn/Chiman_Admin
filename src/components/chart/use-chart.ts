import type { ApexOptions } from "apexcharts";
import useTheme from "@/theme/use-theme";

export default function useChart(options: ApexOptions) {
    const { themeStyles, theme } = useTheme();
    const baseOptions: ApexOptions = {
        // Chart
        chart: {
            toolbar: { show: false },
            zoom: { enabled: false },
            foreColor: themeStyles.foreColor,
        },
        // States
        states: {
            hover: {
                filter: {
                    type: "lighten",
                    value: 0.04,
                },
            },
            active: {
                filter: {
                    type: "darken",
                    value: 0.88,
                },
            },
        },
        // Fill
        fill: {
            opacity: 1,
            gradient: {
                type: "vertical",
                shadeIntensity: 0,
                opacityFrom: 0.4,
                opacityTo: 0,
                stops: [0, 100],
            },
        },

        // Stroke
        stroke: {
            width: 3,
            curve: "smooth",
            lineCap: "round",
        },

        // Grid
        grid: {
            strokeDashArray: 3,
            borderColor: "#28323D",
            xaxis: {
                lines: {
                    show: false,
                },
            },
        },

        // Xaxis
        xaxis: {
            axisBorder: { show: false },
            axisTicks: { show: false },
        },

        // Markers
        markers: {
            size: 0,
        },

        // Tooltip
        tooltip: {
            theme: theme,
            fillSeriesColor: true,
            x: {
                show: true,
            },
        },
        // Responsive
        responsive: [
            {
                // sm
                breakpoint: 576,
                options: {
                    plotOptions: { bar: { columnWidth: "40%" } },
                },
            },
            {
                // md
                breakpoint: 768,
                options: {
                    plotOptions: { bar: { columnWidth: "32%" } },
                },
            },
        ],
    };

    return { ...baseOptions, ...options } as ApexOptions;
}
