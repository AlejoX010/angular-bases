import { Component, OnInit } from '@angular/core';

@Component({
  standalone:false,
  selector: 'app-counter',
  template: `
  <p>Puntos: <span style="font-weight: bold;">{{couter}}</span></p>

  <button (click)="decreaseBy(1)">-1</button>
  <button (click)="reset()" >Reset</button>
  <button (click)="increaseBy(1)" >+1</button>
  `
})

export class CounterComponent {
  public number: number = 10
  public couter: number = this.number;

  increaseBy(value:number): void {
    this.couter += this.couter < 50 ? value : 0;
  }

  decreaseBy(value:number): void {
    this.couter -= this.couter != 0 ? value : 0;
  }

  reset(): void {
    this.couter = this.number;
  }

}
