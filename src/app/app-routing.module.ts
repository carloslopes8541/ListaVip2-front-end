import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ConvidadoFormComponent} from './convidado-form/convidado-form.component';
import {ConvidadoListComponent} from './convidado-list/convidado-list.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'convidado', component: ConvidadoFormComponent},
  {path: 'lista-convidado', component: ConvidadoListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
