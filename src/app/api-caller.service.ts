import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCallerService {

  constructor(private httpClient : HttpClient) { }

  call(searchFieldValue : String){
    const url = "http://data.iledefrance.fr/api/records/1.0/search/?dataset=gares-et-stations-du-reseau-ferre-dile-de-france-donnee-generalisee&q=" + searchFieldValue
    return this.httpClient.get(url)
  }
}
