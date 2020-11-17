import { Component, OnInit } from '@angular/core';
import { HeroModel } from 'src/app/helpers/models/hero.model';
import { NgForm } from '@angular/forms';
import { HeroesService } from 'src/app/services/heroes.service';

import swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  hero: HeroModel = new HeroModel();
  constructor( private heroesService: HeroesService, private route: ActivatedRoute ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if ( id !== 'new') {
      this.heroesService.getHero( id )
      .subscribe( (resp: HeroModel) => {
        this.hero = resp;
        this.hero.id = id;
      });
    }
  }

  save(form: NgForm ) {
    if ( form.invalid ) {
      return;
    }

    swal.fire({
      title: 'Espere',
      text: 'Guardando información',
      type: 'info',
      allowOutsideClick: false
    });
    swal.showLoading();

    let petition: Observable<any>;

    if ( this.hero.id ) {
      petition = this.heroesService.updateHero( this.hero );
    } else {
      petition = this.heroesService.createHero( this.hero );
    }

    petition.subscribe( resp => {
      swal.fire({
        title: this.hero.name,
        text: 'Se actualizó correctamente',
        type: 'success'
      });
    });
  }

}
