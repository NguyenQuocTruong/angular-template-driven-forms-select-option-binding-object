import { Component } from '@angular/core';
import {Country} from './country';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  countries = [
    {
      id: 'us',
      name: 'United States'
    },
    {
      id: 'uk',
      name: 'United Kingdom'
    },
    {
      id: 'ca',
      name: 'Canada'
    }
  ];

  country1 = 'ca';

  country2 = {
    id: 'uk',
    name: 'United Kingdom'
  };

  compareFn(c1: Country, c2: Country): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
}
