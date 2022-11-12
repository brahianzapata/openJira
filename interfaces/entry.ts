


export interface Entry {
    _id: string;
    description: string;
    createdAt: number;
    status: EntryStatus;
}

export enum Status {
    PENDING = 'pending',
    IN_PROGRESS = 'in-progress',
    FINISHED = 'finished',
}

export type EntryStatus = 'pending' | 'in-progress' | 'finished';