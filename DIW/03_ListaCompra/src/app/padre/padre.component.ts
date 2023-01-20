import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

foodArray: string[] = ["Pan", "Miel", "Leche", "Arroz"];

childFoodItem: string = "";
childFlagItem: string = "";

showFoodItem(value: string){
  this.childFoodItem = value;
}

showFlagItem(value: string){
  this.childFlagItem = value;
}

}
