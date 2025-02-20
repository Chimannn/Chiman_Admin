import { Tag, Typography } from "antd";

import Card from "@/components/card";
import Iconify from "@/components/icon/iconify";
// import Scrollbar from "@/components/scrollbar";
// import { themeVars } from "@/theme/theme.css";
import { Rate } from "antd";
import "../styles/top-related.scss";

const dataSource = [
    {
        logo: <Iconify icon="logos:chrome" size={24} />,
        title: "Chrome",
        platform: "Mac",
        type: "free",
        star: 4,
        reviews: "9.91k",
    },
    {
        logo: <Iconify icon="logos:google-drive" size={24} />,
        title: "Drive",
        platform: "Mac",
        type: "free",
        star: 3.5,
        reviews: "1.95k",
    },
    {
        logo: <Iconify icon="logos:dropbox" size={24} />,
        title: "Dropbox",
        platform: "Windows",
        type: "$66.71",
        star: 4.5,
        reviews: "9.12k",
    },
    {
        logo: <Iconify icon="logos:slack-icon" size={24} />,
        title: "Slack",
        platform: "Mac",
        type: "free",
        star: 3.5,
        reviews: "6.98k",
    },
    {
        logo: <Iconify icon="logos:discord-icon" size={24} />,
        title: "Discord",
        platform: "Windows",
        type: "$52.17",
        star: 0.5,
        reviews: "8.49k",
    },
];
export default function TopRelated() {
    return (
        <Card className="top-related">
            <header>
                <Typography.Title level={5}>Top Related Applications</Typography.Title>
            </header>
            <main>
                {/* <Scrollbar> */}
                {dataSource.map((item) => (
                    <div className="div1" key={item.title}>
                        {/* <div
                            className="mr-2 flex items-center justify-center"
                            style={{
                                background: `rgba(${themeVars.colors.background.defaultChannel}, .4)`,
                                borderRadius: "12px",
                                width: "48px",
                                height: "48px",
                            }}
                        > */}
                        <div className="logo">{item.logo}</div>

                        <div className="div2">
                            <span className="title">{item.title}</span>
                            <div className="div3">
                                {item.platform === "Mac" ? (
                                    <Iconify icon="wpf:mac-os" size={12} />
                                ) : (
                                    <Iconify icon="mingcute:windows-fill" size={12} />
                                )}
                                <span className="platform">{item.platform}</span>
                                <Tag color={item.type === "free" ? "green" : "red"}>
                                    {item.type}
                                </Tag>
                            </div>
                        </div>

                        <div className="div4">
                            <Rate allowHalf disabled defaultValue={item.star} />
                            <span className="reviews">{item.reviews}reviews</span>
                        </div>
                    </div>
                ))}
                {/* </Scrollbar> */}
            </main>
        </Card>
    );
}
