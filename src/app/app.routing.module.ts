import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAnuncioComponent } from './add-anuncio/add-anuncio.component';
import { EditAnuncioComponent } from './edit-anuncio/edit-anuncio.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'edit', component: EditAnuncioComponent },
  { path: 'add', component: AddAnuncioComponent },
  { path: '', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
