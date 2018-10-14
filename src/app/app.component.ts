import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'This is the title properties value';
  empname = 'Tejas';
  isMarried = false;
  age = 24;
  empArray = [
    { empname: this.empname, isMarried: this.isMarried, age: this.age }
  ];
}
