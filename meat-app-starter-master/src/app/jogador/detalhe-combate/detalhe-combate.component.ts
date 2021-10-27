import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { JogadorService } from '../jogador.service';
import { Monstro } from '../monstro/monstro.model';

@Component({
  selector: 'mt-detalhe-combate',
  templateUrl: './detalhe-combate.component.html'
})
export class DetalheCombateComponent implements OnInit {

  monstro: Monstro

  constructor(private jogadorService: JogadorService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.jogadorService.racaById(this.route.snapshot.params['id'])
      .subscribe(monstro => this.monstro = monstro)
  }

}
