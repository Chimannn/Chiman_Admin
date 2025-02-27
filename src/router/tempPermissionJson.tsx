const Permissions = [
    {
        id: "9100714781927703",
        parentId: "",
        label: "sys.menu.dashboard",
        name: "Dashboard",
        icon: "HomeOutlined",
        type: 0,
        route: "/dashboard",
        order: 1,
        children: [
            {
                id: "8426999229400979",
                parentId: "9100714781927703",
                label: "sys.menu.workbench",
                name: "Workbench",
                type: 1,
                route: "/dashboard/workbench",
                component: "/dashboard/workbench/index.tsx",
            },
            {
                id: "9710971640510357",
                parentId: "9100714781927703",
                label: "sys.menu.analysis",
                name: "Analysis",
                type: 1,
                route: "/dashboard/analysis",
                component: "/dashboard/analysis/index.tsx",
            },
        ],
    },
    {
        id: "0901673425580518",
        parentId: "",
        label: "sys.menu.management",
        name: "Management",
        icon: "BarChartOutlined",
        type: 0,
        route: "/management",
        order: 2,
        children: [
            {
                id: "2781684678535711",
                parentId: "0901673425580518",
                label: "sys.menu.user.index",
                name: "User",
                type: 0,
                route: "/management/user",
                children: [
                    {
                        id: "2516598794787938",
                        parentId: "2781684678535711",
                        label: "sys.menu.user.account",
                        name: "Account",
                        type: 1,
                        route: "/management/user/account",
                        component: "/management/user/account/index.tsx",
                    },
                ],
            },
            {
                id: "0249937641030250",
                parentId: "0901673425580518",
                label: "sys.menu.system.index",
                name: "System",
                type: 0,
                route: "/management/system",
                children: [
                    {
                        id: "4359580910369984",
                        parentId: "0249937641030250",
                        label: "sys.menu.system.permission",
                        name: "Permission",
                        type: 1,
                        route: "/management/system/permission",
                        component: "/management/system/permission/index.tsx",
                    },
                    {
                        id: "1689241785490759",
                        parentId: "0249937641030250",
                        label: "sys.menu.system.role",
                        name: "Role",
                        type: 1,
                        route: "/management/system/role",
                        component: "/management/system/role/index.tsx",
                    },
                    {
                        id: "0157880245365433",
                        parentId: "0249937641030250",
                        label: "sys.menu.system.user",
                        name: "User",
                        type: 1,
                        route: "/management/system/user",
                        component: "/management/system/user/index.tsx",
                    },
                    {
                        id: "0157880245365434",
                        parentId: "0249937641030250",
                        label: "sys.menu.system.user_detail",
                        name: "User Detail",
                        type: 1,
                        route: "/management/system/user/:id",
                        component: "/management/system/user/detail.tsx",
                        hide: true,
                    },
                ],
            },
        ],
    },
    {
        id: "2271615060673773",
        parentId: "",
        label: "sys.menu.components",
        name: "Components",
        icon: "AreaChartOutlined",
        type: 0,
        route: "/components",
        order: 3,
        children: [
            {
                id: "2478488238255411",
                parentId: "2271615060673773",
                label: "sys.menu.icon",
                name: "Icon",
                type: 1,
                route: "/components/icon",
                component: "/components/icon/index.tsx",
            },
            {
                id: "6755238352318767",
                parentId: "2271615060673773",
                label: "sys.menu.animate",
                name: "Animate",
                type: 1,
                route: "/components/animate",
                component: "/components/animate/index.tsx",
            },
            {
                id: "9992476513546805",
                parentId: "2271615060673773",
                label: "sys.menu.scroll",
                name: "Scroll",
                type: 1,
                route: "/components/scroll",
                component: "/components/scroll/index.tsx",
            },
            {
                id: "1755562695856395",
                parentId: "2271615060673773",
                label: "sys.menu.markdown",
                name: "Markdown",
                type: 1,
                route: "/components/markdown",
                component: "/components/markdown/index.tsx",
            },
            {
                id: "2122547769468069",
                parentId: "2271615060673773",
                label: "sys.menu.editor",
                name: "Editor",
                type: 1,
                route: "/components/editor",
                component: "/components/editor/index.tsx",
            },
            {
                id: "2501920741714350",
                parentId: "2271615060673773",
                label: "sys.menu.i18n",
                name: "Multi Language",
                type: 1,
                route: "/components/i18n",
                component: "/components/multi-language/index.tsx",
            },
            {
                id: "2013577074467956",
                parentId: "2271615060673773",
                label: "sys.menu.upload",
                name: "upload",
                type: 1,
                route: "/components/Upload",
                component: "/components/upload/index.tsx",
            },
            {
                id: "7749726274771764",
                parentId: "2271615060673773",
                label: "sys.menu.chart",
                name: "Chart",
                type: 1,
                route: "/components/chart",
                component: "/components/chart/index.tsx",
            },
            {
                id: "2013577074467957",
                parentId: "2271615060673773",
                label: "sys.menu.toast",
                name: "Toast",
                type: 1,
                route: "/components/toast",
                component: "/components/toast/index.tsx",
            },
        ],
    },
    {
        id: "8132044808088488",
        parentId: "",
        label: "sys.menu.functions",
        name: "functions",
        icon: "RadarChartOutlined",
        type: 0,
        route: "/functions",
        order: 4,
        children: [
            {
                id: "3667930780705750",
                parentId: "8132044808088488",
                label: "sys.menu.clipboard",
                name: "Clipboard",
                type: 1,
                route: "/functions/clipboard",
                component: "/functions/clipboard/index.tsx",
            },
            {
                id: "3667930780705751",
                parentId: "8132044808088488",
                label: "sys.menu.token_expired",
                name: "Token Expired",
                type: 1,
                route: "/functions/token-expired",
                component: "/functions/token-expired/index.tsx",
            },
        ],
    },
    {
        id: "0194818428516575",
        parentId: "",
        label: "sys.menu.menulevel.index",
        name: "Menu Level",
        icon: "RiseOutlined",
        type: 0,
        route: "/menu-level",
        order: 5,
        children: [
            {
                id: "0144431332471389",
                parentId: "0194818428516575",
                label: "sys.menu.menulevel.1a",
                name: "Menu Level 1a",
                type: 1,
                route: "/menu-level/menu-level-1a",
                component: "/menu-level/menu-level-1a/index.tsx",
            },
            {
                id: "7572529636800586",
                parentId: "0194818428516575",
                label: "sys.menu.menulevel.1b.index",
                name: "Menu Level 1b",
                type: 0,
                route: "/menu-level/menu-level-1b",
                children: [
                    {
                        id: "3653745576583237",
                        parentId: "7572529636800586",
                        label: "sys.menu.menulevel.1b.2a",
                        name: "Menu Level 2a",
                        type: 1,
                        route: "/menu-level/menu-level-1b/menu-level-2a",
                        component: "/menu-level/menu-level-1b/menu-level-2a/index.tsx",
                    },
                    {
                        id: "4873136353891364",
                        parentId: "7572529636800586",
                        label: "sys.menu.menulevel.1b.2b.index",
                        name: "Menu Level 2b",
                        type: 0,
                        route: "/menu-level/menu-level-1b/menu-level-2b",
                        children: [
                            {
                                id: "4233029726998055",
                                parentId: "4873136353891364",
                                label: "sys.menu.menulevel.1b.2b.3a",
                                name: "Menu Level 3a",
                                type: 1,
                                route: "/menu-level/menu-level-1b/menu-level-2b/menu-level-3a",
                                component:
                                    "/menu-level/menu-level-1b/menu-level-2b/menu-level-3a/index.tsx",
                            },
                            {
                                id: "3298034742548454",
                                parentId: "4873136353891364",
                                label: "sys.menu.menulevel.1b.2b.3b",
                                name: "Menu Level 3b",
                                type: 1,
                                route: "/menu-level/menu-level-1b/menu-level-2b/menu-level-3b",
                                component:
                                    "/menu-level/menu-level-1b/menu-level-2b/menu-level-3b/index.tsx",
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "9406067785553476",
        parentId: "",
        label: "sys.menu.error.index",
        name: "Error",
        icon: "WindowsOutlined",
        type: 0,
        route: "/error",
        order: 6,
        children: [
            {
                id: "8557056851997154",
                parentId: "9406067785553476",
                label: "sys.menu.error.403",
                name: "403",
                type: 1,
                route: "/error/403",
                component: "/sys/error/Page403.tsx",
            },
            {
                id: "5095669208159005",
                parentId: "9406067785553476",
                label: "sys.menu.error.404",
                name: "404",
                type: 1,
                route: "/error/404",
                component: "/sys/error/Page404.tsx",
            },
            {
                id: "0225992135973772",
                parentId: "9406067785553476",
                label: "sys.menu.error.500",
                name: "500",
                type: 1,
                route: "/error/500",
                component: "/sys/error/Page500.tsx",
            },
        ],
    },
    // {
    //     id: "3981225257359246",
    //     parentId: "",
    //     label: "sys.menu.calendar",
    //     name: "Calendar",
    //     icon: "CalendarOutlined",
    //     type: 1,
    //     route: "/calendar",
    //     component: "/sys/others/calendar/index.tsx",
    // },
    // {
    //     id: "3513985683886393",
    //     parentId: "",
    //     label: "sys.menu.kanban",
    //     name: "kanban",
    //     icon: "CloseSquareOutlined",
    //     type: 1,
    //     route: "/kanban",
    //     component: "/sys/others/kanban/index.tsx",
    // },
    // {
    //     id: "5455837930804461",
    //     parentId: "",
    //     label: "sys.menu.disabled",
    //     name: "Disabled",
    //     icon: "FundOutlined",
    //     type: 1,
    //     route: "/disabled",
    //     status: 0,
    //     component: "/sys/others/calendar/index.tsx",
    // },
    {
        id: "7728048658221587",
        parentId: "",
        label: "sys.menu.label",
        name: "Label",
        icon: "CloseSquareOutlined",
        type: 1,
        route: "/label",
        newFeature: true,
        component: "/sys/others/blank.tsx",
    },
    {
        id: "5733704222120995",
        parentId: "",
        label: "sys.menu.frame",
        name: "Frame",
        icon: "AlignCenterOutlined",
        type: 0,
        route: "/frame",
        children: [
            {
                id: "9884486809510480",
                parentId: "5733704222120995",
                label: "sys.menu.external_link",
                name: "External Link",
                type: 1,
                route: "/frame/external_link",
                hideTab: true,
                component: "/sys/others/iframe/external-link.tsx",
                frameSrc: "https://ant.design/",
            },
            {
                id: "9299640886731819",
                parentId: "5733704222120995",
                label: "sys.menu.iframe",
                name: "Iframe",
                type: 1,
                route: "/frame/frame",
                component: "/sys/others/iframe/index.tsx",
                frameSrc: "https://ant.design/",
            },
        ],
    },
    {
        id: "0941594969900756",
        parentId: "",
        label: "sys.menu.blank",
        name: "Blank",
        icon: "ScissorOutlined",
        type: 1,
        route: "/blank",
        component: "/sys/others/blank.tsx",
    },
];

export default Permissions;
