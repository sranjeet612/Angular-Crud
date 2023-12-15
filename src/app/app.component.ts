import { Component } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular-Crud';
  user: User = new User();
  btnName: string = 'Register';
  users: Array<User> = new Array<User>();

  login() {
    alert('Login Success');
  }

  register() {
    if (this.btnName === 'Update') {
      
    }
    this.users.push(this.user);
    this.user = new User();
    alert('User Registered Successfully');
  }

  edit(data: any) {
    this.user = data;
    this.btnName = 'Update';
  }

  delete() {
    this.users.pop();
  }
}
