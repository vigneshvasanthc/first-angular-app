import { Component, Input } from '@angular/core';

interface ITasks {
  id: string,
  userId: string,
  title: string,
  summary: string,
  dueDate: string
}

@Component({
  selector: 'app-assign-task',
  standalone: true,
  imports: [],
  templateUrl: './assign-task.component.html',
  styleUrl: './assign-task.component.scss'
})
export class AssignTaskComponent {
  @Input() task!: ITasks;

}
