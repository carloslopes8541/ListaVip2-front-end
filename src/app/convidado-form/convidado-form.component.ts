import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {error} from 'protractor';
import {Convidado} from '../convidado';
import {ConvidadoService} from '../convidado.service';

@Component({
  selector: 'app-convidado-form',
  templateUrl: './convidado-form.component.html',
  styleUrls: ['./convidado-form.component.css']
})
export class ConvidadoFormComponent implements OnInit {

  convidado: Convidado = new Convidado();
  submitted = false
  messageSuccess: string;
  messageErro: string;

  constructor(private convidadoService: ConvidadoService,
              private router: Router) {
  }

  ngOnInit() {
  }

  newConvidado(): void {
    this.submitted = true;
    this.convidado = new Convidado();
  }

  // save(){
  // console.log('chamando esse metodo')
  // this.convidadoService.salvar(this.convidado)
  // .subscribe(response => console.log(response),
  // error => console.log(error));
  //   this.convidado = new Convidado();
  // }


  save() {
    this.convidadoService.salvar(this.convidado)
      .subscribe(response => {
          this.convidado = new Convidado();
          this.messageSuccess = 'convidado salvo com successo!!'
        },
        error => this.messageErro = 'Ocorreu um erro ao cadastrar o convidado!!');
  }

  onSubmit() {
    this.submitted = true;
    this.save();
    this.listagemConvidado();
  }

  listagemConvidado() {
    this.router.navigate(['/lista-convidado'])
  }


}
