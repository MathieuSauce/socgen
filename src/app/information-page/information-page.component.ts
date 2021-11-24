import { Component, OnInit } from '@angular/core';
import { Navigation, Router } from '@angular/router';

@Component({
  selector: 'app-information-page',
  templateUrl: './information-page.component.html',
  styleUrls: ['./information-page.component.css']
})
export class InformationPageComponent implements OnInit {
selectedGare: any;
resCom : any[] = []
  constructor(private router : Router) { 
    let nav : any = this.router.getCurrentNavigation()
    console.log("InformationComponent")
    if(nav.extras && nav?.extras.state && nav.extras.state.selectedGare){
      this.selectedGare = nav.extras.state.selectedGare
      this.resCom = this.selectedGare.fields.res_com.split("/")
    }
    console.log(nav?.extras.state.selectedGare)
  }

  ngOnInit(): void {
  }

}
