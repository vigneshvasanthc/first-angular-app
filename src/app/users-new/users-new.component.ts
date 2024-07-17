import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-users-new',
  standalone: true,
  imports: [],
  templateUrl: './users-new.component.html',
  styleUrl: './users-new.component.scss'
})
export class UsersNewComponent {
  @Input() avatar!: string;
  @Input() name!: string;

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }
  onSelectUser(): void {

  }
}
