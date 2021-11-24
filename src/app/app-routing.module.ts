import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InformationPageComponent} from './information-page/information-page.component'
import {AppComponent} from './app.component'

const routes: Routes = [
  {path : '', component : AppComponent},
  {path : 'information', component : InformationPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
