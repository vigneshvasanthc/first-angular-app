import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-user';
import { NgFor } from '@angular/common';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
console.log(randomIndex)
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NgFor],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  selectedUser =  signal(DUMMY_USERS[randomIndex])

  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar)

  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser().avatar
  // }

  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    console.log(randomIndex)

    console.log('Hi this is user')
    this.selectedUser.set(DUMMY_USERS[randomIndex])
  }
}
