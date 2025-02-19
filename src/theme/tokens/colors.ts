//可扩展其他颜色主题

export const presetsColors = {
    default: {
        lighter: "rgb(196 190 241)",
        light: "#9d93e6",
        default: "#6555df",
        dark: "#4d39e5",
        darker: "#201198",
    },
};

export const darkColorTokens = {
    background: "#161c24",
    text: "#fff",
};

export const lightColorTokens = {
    background: "#fff",
    text: "#000",
};

export const baseTheme = {
    borderRadius: {
        none: "0px",
        sm: "2px",
        default: "4px",
        md: "6px",
        lg: "8px",
        xl: "16px",
        full: "9999px",
    },
    spacing: {
        0: "0px",
        1: "4px",
        2: "8px",
        3: "12px",
        4: "16px",
        5: "20px",
        6: "24px",
        7: "28px",
        8: "32px",
        10: "40px",
        12: "48px",
        16: "64px",
        20: "80px",
        24: "96px",
        32: "128px",
    },
};

export const lightTheme = {
    baseTheme,
    backgroundColor: "#ffffff",
    color: "#000000",
    foreColor: "#000000",
    account: {
        boxShadow: "0 12px 24px 0  #919EAB",
    },
    switch: {
        color: "#9d93e6",
    },
    card: {
        boxShadow: "0px 2px 5px #ADADAD",
        backgroundColor: "#ffffff",
    },
};

export const darkTheme = {
    baseTheme,
    backgroundColor: "#161c24",
    color: "#ffffff",
    foreColor: "#fff",
    account: {
        boxShadow: "0 12px 24px 0 rgb(40 40 41)",
    },
    switch: {
        color: "#6d5ee1",
    },
    card: {
        boxShadow: "0 2px 7px 0 #000",
        backgroundColor: "#212b36",
    },
};
