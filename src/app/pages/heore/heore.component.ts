import { Component, OnInit } from '@angular/core';
import { HeroeModel } from 'src/app/models/heroe.model';
import { NgForm } from '@angular/forms';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heore',
  templateUrl: './heore.component.html',
  styleUrls: ['./heore.component.css']
})
export class HeoreComponent implements OnInit {
  heroe: HeroeModel = new HeroeModel();
  constructor( private heroesService: HeroesService ) { }

  ngOnInit() {
  }

  guardar( form:NgForm ) {
    if ( form.invalid ) {
      return;
    }

    this.heroesService.crearHeroe( this.heroe )
    .subscribe( resp => {
      console.log(resp);
    });
  }

}
