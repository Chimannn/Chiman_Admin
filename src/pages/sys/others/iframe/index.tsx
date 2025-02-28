import { CircleLoading } from "@/components/loading";
import { useState } from "react";
import "./index.scss";

type Props = {
    src: string;
};
export default function Iframe({ src = "" }: Props) {
    const [isLoading, setIsLoading] = useState(true);

    const handleLoad = () => {
        setIsLoading(false);
    };

    return (
        <div className="external-iframe">
            {isLoading && <CircleLoading />}

            <iframe
                src={src || "https://kimi.moonshot.cn/"}
                title="iframe-page"
                className="iframe"
                onLoad={handleLoad}
            />
        </div>
    );
}
