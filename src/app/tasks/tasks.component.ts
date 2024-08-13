import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AssignTaskComponent } from './assign-task/assign-task.component';
import { NgFor, NgIf } from '@angular/common';
import { NewTaskComponent } from './new-task/new-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [AssignTaskComponent, NgFor, NgIf, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;

  isAddingTask = false;

  assignTasks = [
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

  get selectedUserTasks() {
    return this.assignTasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id: string) {
    console.log('this is id value' + ' ' + id);
    this.assignTasks = this.assignTasks.filter((task) => task.id !== id)
    
  }

  // name!='TASK OF THE USERS';

  onStartAddTask():void {
    this.isAddingTask = true;
  }
}
