export interface ITaskInfo {
    id: string;
    userId: string;
    title: string;
    summary: string;
    date: string;
}

export interface INewTaskData {
    title: string;
    summary: string;
    date: string;
}