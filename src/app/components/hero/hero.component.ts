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
      // your code goes here
    }
  }

  save(form: NgForm ) {
    // your code goes here
  }

}
