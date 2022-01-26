import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Interpolation Demo';
  //string binding
  appName = 'This is a one-way data binding example';

  header1 = 'Number Interpolation';
  //numeric binding
  n1 = 70;
  n2 = 30;
  sum = 0;
  diff = 0;
  quo = 0;
  prod = 0;

  //property binding
  clientName:string = "Marjorie";

  //style binding 
  myColor ='red';

  //Class binding
  notappliedCSSClass = true; //boolean 
  appliedCSSClass="green";
  

  //TWO-WAY DATA BINDING
  
  //event
  showData($event:any){
    console.log("button is clicked!"); if($event){
    console.log($event.target);
    }
  }
  //Other Actions
  //keyup function
  getData(data:any){
    console.warn(data)
  }


}
