import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AssignTaskComponent } from './assign-task/assign-task.component';
import { NgFor, NgIf } from '@angular/common';
import { NewTaskComponent } from './new-task/new-task.component';
import { INewTaskData } from './task.model';
import { TasksService } from './tasks.service';

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


  constructor(private tasksService: TasksService) {
  }

  get selectedUserTasks() {
    return this.tasksService.getUserTask(this.userId)
  }

  onCompleteTask(id: string) {
    console.log('this is id value' + ' ' + id);
   
    
  }

  // name!='TASK OF THE USERS';

  onStartAddTask():void {
    this.isAddingTask = true;
  }

  onCloseAddTask(): void {
    this.isAddingTask = false;
  }

  // onAddTask(taskData: INewTaskData): void {
   
  //   this.isAddingTask = false;
  // }
}
