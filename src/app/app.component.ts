import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';

  num1: number;
  num2: number;
  num3: number;


  add(){
     this.num3 = this.num1 + this.num2;
  } 

  divise(){
     this.num3 = this.num1 / this.num2;
  }

  soustr(){
     this.num3 = this.num1 - this.num2;
  }

  mult(){
     this.num3 = this.num1 * this.num2;
  }
}
