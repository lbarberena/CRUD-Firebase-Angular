import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { HeroModel } from 'src/app/helpers/models/hero.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: HeroModel[] = [];
  loading = false;

  constructor( private heroesService: HeroesService) { }

  ngOnInit() {
    this.loading = true;
    this.heroesService.getHeroes().subscribe( resp => {
      this.heroes = resp;
      this.loading = false;
    });
  }

  deleteHero(hero: HeroModel, i: number ) {
    Swal.fire({
      title: '¿Desea continuar?',
      text: `¿Estas seguro que deseas borrar a ${ hero.name }`,
      type: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then( resp => {
      if ( resp.value ) {
        this.heroes.splice(i, 1);
        this.heroesService.deleteHero( hero.id ).subscribe();
      }
    });


  }

}
