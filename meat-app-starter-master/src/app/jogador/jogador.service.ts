import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

import { Monstro } from "./monstro/monstro.model";
import { MEAT_API } from "app/app.api";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'
import { ErrorHandler } from "../app.error-handler";
import { MenuItem } from "app/restaurant-detail/menu-item/menu-item.model";
import { MonstroItem } from "./detalhe-combate/monstro-item/monstro-item.model";

@Injectable()
export class JogadorService {

  constructor(private http: Http){}

  monstros(): Observable<Monstro[]> {
    return this.http.get(`${MEAT_API}/monstros`)
      .map(Response => Response.json())
      .catch(ErrorHandler.handlerError)
  }

  racaById(id:string): Observable<Monstro> {
    return this.http.get(`${MEAT_API}/monstros/${id}`)
      .map(response => response.json())
      .catch(ErrorHandler.handlerError)
  }

  equipamentoOfMonstro(id: string): Observable<any>{
    return this.http.get(`${MEAT_API}/monstros/${id}/equipamentos`)
    .map(response => response.json())
    .catch(ErrorHandler.handlerError)
  }

  listaOfMonstro(id: string): Observable<MonstroItem[]>{
    return this.http.get(`${MEAT_API}/monstros/${id}/monstroIndividual`)
    .map(response => response.json())
    .catch(ErrorHandler.handlerError)
  }
}
