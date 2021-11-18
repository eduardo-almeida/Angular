import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

import { Monstro } from "./monstro/monstro.model";
import { MEAT_API } from "app/app.api";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'
import { ErrorHandler } from "../app.error-handler";
import { MenuItem } from "app/restaurant-detail/menu-item/menu-item.model";
import { MonstroItem } from "./detalhe-combate/monstro-item/monstro-item.model";

@Injectable()
export class JogadorService {

  constructor(private http: HttpClient){}

  monstros(): Observable<Monstro[]> {
//     let params: HttpParams =  undefined
//     if(search){
//       params = new HttpParams().set('q', search)
//     }

    return this.http.get<Monstro[]>(`${MEAT_API}/monstros`)
  }

  racaById(id:string): Observable<Monstro> {
    return this.http.get<Monstro>(`${MEAT_API}/monstros/${id}`)
  }

  equipamentoOfMonstro(id: string): Observable<any>{
    return this.http.get(`${MEAT_API}/monstros/${id}/equipamentos`)
  }

  listaOfMonstro(id: string): Observable<MonstroItem[]>{
    return this.http.get<MonstroItem[]>(`${MEAT_API}/monstros/${id}/monstroIndividual`)
  }
}
