import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primero',
  templateUrl: './primero.component.html',
  styleUrls: ['./primero.component.scss']
})
export class PrimeroComponent implements OnInit {

  public isFlag: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  pushButton(){
    this.isFlag = !this.isFlag;
  }

  onEnter(){
    console.log("enter");
  }

  validation(event: Event){
    console.log(event);                
    console.log(event.target);        
    console.log((event.target as HTMLInputElement).value);
    let regex: string = (event.target as HTMLInputElement).value.replace(/[^A-Za-zá-úÁ-Ú ]|[*÷×]/g,'');
    console.log("replace: ", regex);

    (event.target as HTMLInputElement).value = regex;
    

  }

}
