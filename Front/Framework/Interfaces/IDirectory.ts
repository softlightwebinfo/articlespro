export interface IDirectory {
    id: number;
    description: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    active: boolean;
    name: string;
    role: string;
    roleParent: string;
    slug: string;
}

export interface IDirectoryRS {
    count: number;
    result: IDirectory[];
}
