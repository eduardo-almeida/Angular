import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

import { Monstro } from "./monstro/monstro.model";
import { MEAT_API } from "app/app.api";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'
import { ErrorHandler } from "../app.error-handler";

@Injectable()
export class JogadorService {

  constructor(private http: Http){}

  monstros(): Observable<Monstro[]> {
    return this.http.get(`${MEAT_API}/monstros`)
      .map(Response => Response.json())
      .catch(ErrorHandler.handlerError)
  }
}
