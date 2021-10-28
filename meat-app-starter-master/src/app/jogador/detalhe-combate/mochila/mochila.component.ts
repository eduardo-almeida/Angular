import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JogadorService } from 'app/jogador/jogador.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mt-mochila',
  templateUrl: './mochila.component.html'
})
export class MochilaComponent implements OnInit {

  mochila: Observable<any>

  constructor(private jogadorService: JogadorService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.mochila = this.jogadorService.equipamentoOfMonstro(this.route.parent.snapshot.params['id'])
  }

}
