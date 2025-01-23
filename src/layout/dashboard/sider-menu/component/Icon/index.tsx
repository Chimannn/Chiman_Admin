import React from "react";
import * as Icons from "@ant-design/icons";

interface IconProps {
    icon: string;
}

const Icon: React.FC<IconProps> = ({ icon }) => {
    const AntIcon = Icons[icon];
    return AntIcon ? <AntIcon /> : null;
};

export default Icon;
