import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tercero',
  templateUrl: './tercero.component.html',
  styleUrls: ['./tercero.component.scss']
})
export class TerceroComponent implements OnInit {

  @Output() out: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  increment(){
    // console.log("something");
    // this.out.emit("something");
    this.out.emit(+1);
  }
  subtract(){
    this.out.emit(-1);
  }
  saludar(){
    this.out.emit("Hi!");
  }
  
  reset(){
    this.out.emit(0);
  }

}
