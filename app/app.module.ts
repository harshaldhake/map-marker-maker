import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppComponent, CompressPipe}  from './components/app/app.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, CompressPipe ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
