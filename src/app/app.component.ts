import { Component } from '@angular/core';
import { User } from './user.model';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //constructor(private _httpClient: HttpClient){}

  title = 'Angular-Crud';
  user:User=new User();
  
  saveData(user:User)
  {
      //this._httpClient.post<User>("https://localhost:43321/employee/save",user);  
  }

} 
