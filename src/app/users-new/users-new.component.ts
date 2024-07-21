import { Component, computed, EventEmitter, input, Input, output, Output } from '@angular/core';


// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// }

interface IUser {
  id: string;
  avatar: string;
  name: string;
}
@Component({
  selector: 'app-users-new',
  standalone: true,
  imports: [],
  templateUrl: './users-new.component.html',
  styleUrl: './users-new.component.scss'
})
export class UsersNewComponent {
  // @Input({required: true}) id!: string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;
  @Input({required: true}) user!: IUser;
  @Output() select = new EventEmitter<string>();


  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  // Using signal methods
  // avatar = input.required<string>();
  // name = input.required<string>();

  //signal output method
  // select = output<string>()

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // })

  onSelectUser(): void {
    this.select.emit(this.user.id);
    console.log(this.select.emit(this.user.id))
  }
}
