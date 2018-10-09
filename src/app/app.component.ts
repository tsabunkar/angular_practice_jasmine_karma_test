import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'This is the title properties value';
  empname: string = "Tejas";
  isMarried: boolean = false;
  age: number = 24;
  empArray = [
    { empname: this.empname, isMarried: this.isMarried, age: this.age }
  ]
}
