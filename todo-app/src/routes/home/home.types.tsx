export enum TodoState {
    todo,
    doing,
    done,
}

export interface TodoItem {
    title: string;
    description: string;
}

export interface TodoSummary {
    todo: TodoItem[];
    doing: TodoItem[];
    done: TodoItem[];
}

export interface TodoSummaryIndex {
    [key: string]: TodoItem[];
}
