import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HeroModel } from '../helpers/models/hero.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  // URL instantiated from environment variables
  private url = `${environment.apiURL}`;

  // When you use your own API without firebase, you'll need these httpOptions for Headers
  /*httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };*/

  constructor( private http: HttpClient ) { }

}
