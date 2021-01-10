import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VetementsComponent } from './vetements/vetements.component';
import { AddVetementComponent } from './add-vetement/add-vetement.component';
import {UpdateVetementComponent} from './update-vetement/update-vetement.component';

const routes: Routes = [
  {path: "vetements", component : VetementsComponent},
  {path: "add-vetement", component : AddVetementComponent},
  {path: "updateVetement/:id", component: UpdateVetementComponent},
  { path: "", redirectTo: "vetements", pathMatch: "full" }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
