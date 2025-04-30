import React from "react";
import {
    HomeOutlined,
    BarChartOutlined,
    AreaChartOutlined,
    RadarChartOutlined,
    RiseOutlined,
    WindowsOutlined,
    CloseSquareOutlined,
    AlignCenterOutlined,
    ScissorOutlined,
} from "@ant-design/icons";
import "./index.scss";

interface IconProps {
    icon: string;
}

const Icons = {
    HomeOutlined,
    BarChartOutlined,
    AreaChartOutlined,
    RadarChartOutlined,
    RiseOutlined,
    WindowsOutlined,
    CloseSquareOutlined,
    AlignCenterOutlined,
    ScissorOutlined,
};

const Icon: React.FC<IconProps> = ({ icon }) => {
    const AntIcon = Icons[icon];
    return AntIcon ? <AntIcon className="ant-icon-action" /> : null;
};

export default Icon;
