import { Component } from '@angular/core';

import * as wjcCore from '@grapecity/wijmo';

@Component({
  selector: 'app-root',
  template: `<wj-flex-grid [itemsSource]="source">
              <wj-custom-flex-grid-filter></wj-custom-flex-grid-filter>
            </wj-flex-grid>`,
  styles: [`.wj-flexgrid { height: 500px; width: auto}`]
})
export class AppComponent {
  source: any;

  constructor() {
    this.source = this.getData(100);
  }

  getData(count: number) {
    var countries = 'US,Germany,UK,Japan,Italy,Greece'.split(','), data = [];
    for (var i = 0; i < count; i++) {
      data.push({
        id: i,
        country: countries[i % countries.length],
        date: new Date(2014, i % 12, i % 28),
        amount: Math.random() * 10000,
        active: i % 4 == 0
      });
    }
    return new wjcCore.CollectionView(data);
  }
}
