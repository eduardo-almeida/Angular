import { Component, OnInit } from '@angular/core';
import { JogadorService } from './jogador.service';
import { Monstro } from './monstro/monstro.model';

@Component({
  selector: 'mt-jogador',
  templateUrl: './jogador.component.html'
})
export class JogadorComponent implements OnInit {

  monstros: Monstro[]

  constructor(private jogadorService: JogadorService) { }

  ngOnInit() {
    this.jogadorService.monstros()
      .subscribe(monstros => this.monstros = monstros)
  }

}
