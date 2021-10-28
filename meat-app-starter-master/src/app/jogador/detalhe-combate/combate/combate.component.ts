import { Component, OnInit } from '@angular/core';
import { CombateService } from './combate.service';

@Component({
  selector: 'mt-combate',
  templateUrl: './combate.component.html'
})
export class CombateComponent implements OnInit {

  constructor(private combateService: CombateService) { }

  ngOnInit() {
  }

  monstros(): any[] {
    return this.combateService.monstros
  }

  clear(){
    this.combateService.clear()
  }

  removeMonstro(monstro: any){
    this.combateService.removeMonstro(monstro)
  }

  addMonstro(monstro: any){
    this.combateService.addMonstro(monstro)
  }

  dificuldade(): number {
    return this.combateService.dificuldade()
  }

}
