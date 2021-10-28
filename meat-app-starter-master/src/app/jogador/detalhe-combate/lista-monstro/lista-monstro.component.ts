import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JogadorService } from 'app/jogador/jogador.service';
import { Observable } from 'rxjs/Observable';
import { MonstroItem } from '../monstro-item/monstro-item.model';

@Component({
  selector: 'mt-lista-monstro',
  templateUrl: './lista-monstro.component.html'
})
export class ListaMonstroComponent implements OnInit {

  listaMonstro: Observable<MonstroItem[]>

  constructor(private jogadorService: JogadorService,
              private route: ActivatedRoute) { }


  ngOnInit() {
    this.listaMonstro = this.jogadorService.listaOfMonstro(this.route.parent.snapshot.params['id'])
  }

  addMonstroItem(montro: MonstroItem){
    console.log(montro)
  }

}
