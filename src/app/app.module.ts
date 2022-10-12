import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeroComponent } from './components/primero/primero.component';
import { SegundoComponent } from './components/segundo/segundo.component';
import { TerceroComponent } from './components/tercero/tercero.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeroComponent,
    SegundoComponent,
    TerceroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
