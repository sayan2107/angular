import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   name= 'sayan';
   date= new Date();
   arr= [2, 3, 4, 5, 1];
}
