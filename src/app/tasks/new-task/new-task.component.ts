import { Component, EventEmitter, output, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type INewTaskData } from '../task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<INewTaskData>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

    onCancel(): void {
      this.cancel.emit();
    }

    onSubmit():void {
      this.add.emit({
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDate
      })
    }

   
}
