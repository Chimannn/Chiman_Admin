export interface Permission {
    id: string;
    parentId: string;
    name: string;
    label: string;
    type: PermissionType;
    route: string;
    status?: BasicStatus;
    order?: number;
    icon?: string;
    component?: string;
    hide?: boolean;
    hideTab?: boolean;
    frameSrc?: URL;
    newFeature?: boolean;
    children?: Permission[];
}

export interface Role {
    id: string;
    name: string;
    label: string;
    status: BasicStatus;
    order?: number;
    desc?: string;
    permission?: Permission[];
}
