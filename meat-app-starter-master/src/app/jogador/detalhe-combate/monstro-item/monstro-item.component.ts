import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MonstroItem } from './monstro-item.model';

@Component({
  selector: 'mt-monstro-item',
  templateUrl: './monstro-item.component.html'
})
export class MonstroItemComponent implements OnInit {

  @Input() monstroItem: MonstroItem
  @Output() add = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  emitAddEvent(){
    this.add.emit(this.monstroItem)
  }

}
