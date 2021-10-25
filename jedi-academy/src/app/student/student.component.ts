import { Component, OnInit, Input } from '@angular/core';

import {Student} from './students.model'

@Component({
  selector: 'jad-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @Input() student: Student = {name : "Lalala", isJedi: true}

  constructor() { }

  ngOnInit(): void {
  }

  clicked(){
    console.log(`Estudante: ${this.student.name} `)
  }

}
