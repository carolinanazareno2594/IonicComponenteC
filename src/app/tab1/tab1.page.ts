import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  saludo: string = '';
  constructor() {
    this.saludo = 'Hola a todos, biembenidos a mi primer APP';
  }
}
