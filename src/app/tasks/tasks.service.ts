import { Injectable } from "@angular/core";
import { type INewTaskData } from "./task.model";

@Injectable({
    providedIn: 'root'
})

export class TasksService {
    constructor() {
        const task = localStorage.getItem('task');

        if(task) {
            this.assignTasks = JSON.parse(task);
        }
    }

   private assignTasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

    getUserTask(userId: string) {
        return this.assignTasks.filter((task) => task.userId === userId);
    }

    addTask(taskData: INewTaskData, userId: string) {
        this.assignTasks.unshift({
            id: new Date().getTime().toString(),
            userId: userId,
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.date
          });
          this.saveTask();
    }

    removeTask(id: string) {
        this.assignTasks = this.assignTasks.filter((task) => task.id !== id);
        this.saveTask();
    }

    private saveTask() {
        localStorage.setItem('task', JSON.stringify(this.assignTasks))
    }
}
