import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { HeroeModel } from 'src/app/models/heroe.model';

@Component({
  selector: 'app-heores',
  templateUrl: './heores.component.html',
  styleUrls: ['./heores.component.css']
})
export class HeoresComponent implements OnInit {
  heroes: HeroeModel[] = [];

  constructor( private heroesService: HeroesService) { }

  ngOnInit() {
    this.heroesService.getHeroes().subscribe( resp => this.heroes = resp );
  }

}
