import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
    public name: string = 'Iroman';
    public age: number = 45;
    public mett: string = 'metodo?';

    get caputalizedName():string {
      return this.name.toUpperCase();
    }

    getHeroDescription():string {
      return `${this.name} - ${this.age}`
    }

    changeHero(): void{
      this.name = 'Hulk';
    }

    changeAge(): void{
      this.age = 123;
    }
}
