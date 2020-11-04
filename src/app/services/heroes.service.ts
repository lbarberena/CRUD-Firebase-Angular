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

  createHero( hero: HeroModel ) {
    return this.http.post(`${ this.url }/heroes.json`, hero)
    .pipe(
      map( (resp: any) => {
        hero.id = resp.name;
        return hero;
    }));
  }

  updateHero( hero: HeroModel ) {
    const heroTemp = {
      ...hero
    };

    delete heroTemp.id;

    return this.http.put(`${ this.url }/heroes/${ hero.id }.json`, heroTemp);
  }

  deleteHero( id: string ) {
    return this.http.delete(`${ this.url }/heroes/${ id }.json`);
  }

  getHero( id: string ) {
    return this.http.get(`${ this.url }/heroes/${ id }.json`);
  }

  getHeroes() {
    return this.http.get(`${ this.url }/heroes.json`)
    .pipe(
      map( this.createArray )
    );
  }

  // We create the array, so we can map the response of the GET petition function
  private createArray( heroesObj: object ) {
    const heroes: HeroModel[] = [];

    Object.keys( heroesObj ).forEach( key => {
      const hero: HeroModel = heroesObj[key];
      hero.id = key;
      heroes.push( hero );
    });

    if ( heroesObj === null ) {
      return [];
    }

    return heroes;
  }

}
