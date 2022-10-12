import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tercera-clase-c';

  public receive: number = 0;

  autoIncrement(event:any){
    // event.target;
    // this.receive++;
    console.log(event);
    this.receive+= event;
  }

}
