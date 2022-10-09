import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { rt } from './route_dir';

const routes: Routes = rt;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
