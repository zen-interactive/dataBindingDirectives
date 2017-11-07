import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
    <div>Personne : {{person}} | Age : {{age}} | Adresse : {{address|json}}</div>

  `
})
export class AppComponent {

    person: string = 'John Doe';

    age: number = 30;

    address: any = { street: 'rue du Paradis', city: '75010 Paris' };

}
