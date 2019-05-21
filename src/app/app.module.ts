import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import bootstrap from  "bootstrap";
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductlistComponent } from './productlist/productlist.component';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
