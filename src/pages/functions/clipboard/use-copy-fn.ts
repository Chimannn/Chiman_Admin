import { useState } from "react";
import { toast } from "sonner";
type copyFn = (text: string) => Promise<boolean>;

type copyText = string | null;

type copyType = {
    copyFn: copyFn;
    copyText: copyText;
};

export default function useCopyToClipboard(): copyType {
    const [copyText, setCopyText] = useState<copyText>(null);

    const copyFn: copyFn = async (text: string) => {
        if (!navigator?.clipboard) {
            console.warn("Clipboard not supported");
            return false;
        }
        try {
            await navigator.clipboard.writeText(text);
            setCopyText(text);
            toast.success("Copied!");
            return true;
        } catch (error) {
            toast.error("Failed to copy!", error);
            setCopyText(null);
            return false;
        }
    };
    return {
        copyFn,
        copyText,
    };
}
