import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SerieListComponent } from './series/components/serie-list/serie-list.component';

const routes: Routes = [
  { path: '', component: SerieListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
