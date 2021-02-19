import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ConvidadoService {

  private baseUrl = 'http://localhost:8080/api/v1/convidados'

  constructor(private http: HttpClient) {
  }

  salvar(convidado: Object): Observable<any> {
    return this.http.post<Object>(`${this.baseUrl}`, convidado);
  }

  getConvidado(id: number): Observable<any> {

    return this.http.get(`${this.baseUrl}/${id}`)
  }

  getConvidadoLista(): Observable<any> {
    return this.http.get(`${this.baseUrl}`)
  }

  deleteConvidado(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }
}
