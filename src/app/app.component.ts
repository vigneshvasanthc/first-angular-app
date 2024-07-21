import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { UsersNewComponent } from "./users-new/users-new.component";
import { DUMMY_USERS } from './dummy-user';
import { TasksComponent } from "./tasks/tasks.component";
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgFor, NgIf,
    RouterOutlet, HeaderComponent, UserComponent, UsersNewComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'first-angular-app';

  tasksName!: string;

  usersNew = DUMMY_USERS;

  selectedUserId?: string;

  
  get selectedUser() {
    return this.usersNew.find((userData) => {
      userData.id === this.selectedUserId
    })
  }
  
  onSelectUser(id: string): void {
    // console.log('selected user with id ' + id);
    this.selectedUserId = id;
    console.log(this.selectedUserId = id)
  }

}
