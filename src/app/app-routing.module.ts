import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeoresComponent } from './pages/heores/heores.component';
import { HeoreComponent } from './pages/heore/heore.component';


const routes: Routes = [
  { path: 'heroes', component: HeoresComponent},
  { path:  'heroe/:id', component: HeoreComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'heroes' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
