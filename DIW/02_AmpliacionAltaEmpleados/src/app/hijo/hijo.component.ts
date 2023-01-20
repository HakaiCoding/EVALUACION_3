import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core";
import { Empleado } from 'src/Models/empleado.model';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input () i: number = 0;
  @Input () empleado: Empleado;
  
  azulPares(num: any){
    if(num % 2 !== 0){
      return "blue";
    }
    else{
      return "black";
    }
  }

  ttest = 'appmarkTarget';
  test() {
    return this.ttest
  }

  constructor() { }

  ngOnInit(): void {
  }
}

