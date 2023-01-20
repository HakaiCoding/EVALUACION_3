import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input() food: string = '';

  buttonText: string = 'Comprar';
  buttonStyle: string = 'add';


  addItemCheck: boolean = false;
  toggleItem() {

    if (this.buttonText === 'Comprar') {
      this.buttonText = 'Quitar';
      this.buttonStyle = 'remove';
      this.addItemCheck = true;
    }
    else {
      this.buttonText = 'Comprar';
      this.buttonStyle = 'add';
      this.addItemCheck = false;
    }
  }

  @Output() foodItem=new EventEmitter<string>();

  addFoodItem(value: string) {
    this.foodItem.emit(value);
  }

  @Output() flagItem=new EventEmitter<string>();

  addFlagItem() {
    if(this.addItemCheck) {
      this.flagItem.emit("assets/tick.png");
    }
    else{
      this.flagItem.emit("assets/cross.png");
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
