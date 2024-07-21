import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITasks } from './assign-task.model';



@Component({
  selector: 'app-assign-task',
  standalone: true,
  imports: [],
  templateUrl: './assign-task.component.html',
  styleUrl: './assign-task.component.scss'
})
export class AssignTaskComponent {
  @Input({required: true}) task!: ITasks;
  @Output() complete = new EventEmitter<string>();

  onCompleteTask() {
    this.complete.emit(this.task.id);
  }

}
