import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import {ApiCallerService} from './api-caller.service';
import { InformationPageComponent } from './information-page/information-page.component'

@NgModule({
  declarations: [
    AppComponent,
    InformationPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ApiCallerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
