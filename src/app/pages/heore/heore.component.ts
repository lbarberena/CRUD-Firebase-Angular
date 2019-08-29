import { Component, OnInit } from '@angular/core';
import { HeroeModel } from 'src/app/models/heroe.model';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-heore',
  templateUrl: './heore.component.html',
  styleUrls: ['./heore.component.css']
})
export class HeoreComponent implements OnInit {
  heroe: HeroeModel = new HeroeModel();
  constructor() { }

  ngOnInit() {
  }

  guardar( form:NgForm ) {
    if ( form.invalid ) {
      return;
    }
  }

}
