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
