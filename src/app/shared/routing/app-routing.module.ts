import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonComponent } from '../../pokemon/pokemon.component';
import { PokemonDetailComponent } from 'src/app/pokemon-detail/pokemon-detail.component';

const routes: Routes = [
  { path: '', component: PokemonComponent, pathMatch: 'full' },
  { path: 'pokemon', component: PokemonComponent, pathMatch: 'full' },
  { path: 'detail/:id', component: PokemonDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
