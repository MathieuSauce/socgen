import { Component } from '@angular/core';
import {ApiCallerService} from "./api-caller.service"
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'socgen';
  searchFieldValue : String = '';
  gareList: any[] = []; 
  selectedGare : any;
  resCom : any[]= [];

  secondPageIsVisible = false;

  constructor(private apiCaller : ApiCallerService, private router: Router){}

  submit(){
    console.log(this.searchFieldValue);
    this.apiCaller.call(this.searchFieldValue).subscribe((res: any) => {
      console.log(res.records)
      this.gareList = res.records})

  }

  onSelect(gare :any){
    
    this.router.navigate(['/information'], {
      state : { selectedGare : gare}
    })

    // This is part of the second page 
    this.selectedGare = gare
    this.resCom = this.selectedGare.fields.res_com.split("/");
    this.secondPageIsVisible = true;
  }
}
