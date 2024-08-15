import { Component, EventEmitter, inject, Input, output, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type INewTaskData } from '../task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter<void>();
  // @Output() add = new EventEmitter<INewTaskData>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  //first option to use service file
  private taskService = inject(TasksService) 

  //second option to use service file
  // constructor(private taskService: TasksService) {
    
  // }

    onCancel(): void {
      this.close.emit();
    }

    onSubmit():void {
      // this.add.emit({
      //   title: this.enteredTitle,
      //   summary: this.enteredSummary,
      //   date: this.enteredDate
      // })
      /* Service to use function */

      this.taskService.addTask({
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDate
      }, this.userId);

      this.close.emit();
    }

   
}
