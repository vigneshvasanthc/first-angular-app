import { Component, computed, EventEmitter, input, Input, output, Output } from '@angular/core';

@Component({
  selector: 'app-users-new',
  standalone: true,
  imports: [],
  templateUrl: './users-new.component.html',
  styleUrl: './users-new.component.scss'
})
export class UsersNewComponent {
  @Input({required: true}) id!: string;
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;
  @Output() select = new EventEmitter<string>();

  
  
  get imagePath() {
    return 'assets/users/' + this.avatar;
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
    this.select.emit(this.id);
  }
}
