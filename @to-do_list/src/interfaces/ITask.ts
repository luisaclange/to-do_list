export type ITask = {
    id: number,
    description: string,
    done: boolean,
    created_at: Date,
    updated_at: Date,
    deleted_at: Date | null,
}