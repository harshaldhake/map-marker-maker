import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
    AppComponent, CompressPipe,
    ToFixedPipe
}  from './components/app/app.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, CompressPipe, ToFixedPipe ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
