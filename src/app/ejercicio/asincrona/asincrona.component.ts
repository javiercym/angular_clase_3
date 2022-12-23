import { Component } from '@angular/core';

@Component({
  selector: 'app-asincrona',
  templateUrl: './asincrona.component.html',
  styleUrls: ['./asincrona.component.css']
})
export class AsincronaComponent {
  valorIngresado="";
  array!: string[];

  constructor() {
    this.array = [];
  }

  agregar(){
    this.array.push(this.valorIngresado);
    this.valorIngresado = '';
  }

}
