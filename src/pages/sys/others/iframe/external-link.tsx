import { useEffect } from "react";
import { useNavigate } from "react-router";

type Props = {
    src: string;
};
export default function ExternalLink({ src }: Props) {
    const navigate = useNavigate();
    useEffect(() => {
        window.open(src || "https://chat.deepseek.com/", "_black");
        navigate(-1);
    });
    return <div />;
}
