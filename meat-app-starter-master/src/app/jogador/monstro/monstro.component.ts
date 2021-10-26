import { Component, OnInit, Input } from '@angular/core';
import { Monstro } from './monstro.model';

@Component({
  selector: 'mt-monstro',
  templateUrl: './monstro.component.html'
})
export class MonstroComponent implements OnInit {

  @Input() monstro: Monstro

  constructor() { }

  ngOnInit() {
  }

}
