import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ConvidadoService} from './convidado.service';
import {ConvidadoFormComponent} from './convidado-form/convidado-form.component';
import {ConvidadoListComponent} from './convidado-list/convidado-list.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConvidadoFormComponent,
    ConvidadoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [ConvidadoService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
