import { Component, computed, input, Input } from '@angular/core';

@Component({
  selector: 'app-users-new',
  standalone: true,
  imports: [],
  templateUrl: './users-new.component.html',
  styleUrl: './users-new.component.scss'
})
export class UsersNewComponent {
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;
  
  // get imagePath() {
  //   return 'assets/users/' + this.avatar;
  // }

  // Using signal methods
  avatar = input.required<string>();
  name = input.required<string>();

  imagePath = computed(() => {
    return 'assets/users/' + this.avatar();
  })

  onSelectUser(): void {

  }
}
