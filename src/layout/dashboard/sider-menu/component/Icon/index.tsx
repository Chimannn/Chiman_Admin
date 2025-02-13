import React from "react";
import * as Icons from "@ant-design/icons";
import "./index.scss";

interface IconProps {
    icon: string;
}

const Icon: React.FC<IconProps> = ({ icon }) => {
    const AntIcon = Icons[icon];
    return AntIcon ? <AntIcon className="ant-icon-action" /> : null;
};

export default Icon;
