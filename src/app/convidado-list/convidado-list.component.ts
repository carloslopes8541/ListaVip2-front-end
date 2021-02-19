import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {error} from 'protractor';
import {Observable} from 'rxjs';
import {Convidado} from '../convidado';
import {ConvidadoService} from '../convidado.service';

@Component({
  selector: 'app-convidado-list',
  templateUrl: './convidado-list.component.html',
  styleUrls: ['./convidado-list.component.css']
})
export class ConvidadoListComponent implements OnInit {

  convidados: Observable<Convidado[]>;
  menssageSuccess: string;
  menssageErro: string;

  constructor(
    private  convidadoServico: ConvidadoService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.listaConvidado();
  }

  listaConvidado() {
    this.convidados = this.convidadoServico.getConvidadoLista();

  }

  deleteConvidado(id: number) {
    this.convidadoServico.deleteConvidado(id)
      .subscribe(response => {
          this.menssageSuccess = 'Convidado deletado com sucesso!'
          this.ngOnInit();
        },
        error => this.menssageErro = 'Ocorreu um erro ao deletar o convidado'
      )

  }


}
