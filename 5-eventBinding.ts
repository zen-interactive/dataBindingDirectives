import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div [align]="alignement" [ngStyle]="{color:couleur}">Personne : {{person}} | Age : {{age}} | Adresse : {{address.street}}</div>
    <app-comp1 [monAdresse]="address"></app-comp1>
    <button (click)="modifierPersonne()">Modifier personne</button>
    
  `
})
export class AppComponent {


  person: string= 'John Doe';

  age: number= 30;

  address: any= {street: 'rue du Paradis', city: '75010 Paris'};

  alignement: string = 'right';

  couleur: string = 'red';

   modifierPersonne() {

    this.person = 'Another man';
  }

}