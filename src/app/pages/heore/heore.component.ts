import { Component, OnInit } from '@angular/core';
import { HeroeModel } from 'src/app/models/heroe.model';
import { NgForm } from '@angular/forms';
import { HeroesService } from 'src/app/services/heroes.service';

import swal from 'sweetalert2';
import { Observable } from 'rxjs';

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

    swal.fire({
      title: 'Espere',
      text: 'Guardando información',
      type: 'info',
      allowOutsideClick: false
    });
    swal.showLoading();

    let peticion: Observable<any>;

    if( this.heroe.id ) {
      peticion = this.heroesService.actualizarHeroe( this.heroe );
    } else {
      peticion = this.heroesService.crearHeroe( this.heroe );
    }

    peticion.subscribe( resp => {
      swal.fire({
        title: this.heroe.nombre,
      text: 'Se actualizó correctamente',
      type: 'success'
      });
    })
  }

}
