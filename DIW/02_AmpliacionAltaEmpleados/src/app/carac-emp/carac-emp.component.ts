import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-carac-emp',
  templateUrl: './carac-emp.component.html',
  styleUrls: ['./carac-emp.component.css']
})
export class CaracEmpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() caractemp = new EventEmitter<string>();

  agregarCaract(value: string) {
    this.caractemp.emit(value);
  }


}
