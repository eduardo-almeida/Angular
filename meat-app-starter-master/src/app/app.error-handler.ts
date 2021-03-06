import { HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/throw";

export class ErrorHandler {
  static handlerError(error: HttpErrorResponse | any){
    let errorMessage: string
    if(error instanceof HttpErrorResponse){
      const body = error.error
      errorMessage = `Erro ${error.status} ao acessar a url ${error.url} - ${error.statusText || ''} ${body}`
    } else {
      errorMessage = error.message ? error.message : error.toString()
    }
    console.log(errorMessage)
    return Observable.throw(errorMessage)
  }
}
