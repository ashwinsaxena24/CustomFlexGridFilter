import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomFlexgridFilterComponent } from './custom-flexgrid-filter/custom.flexgrid.filter.component';
import { WjGridModule } from '@grapecity/wijmo.angular2.grid';

@NgModule({
  declarations: [
    AppComponent,
    CustomFlexgridFilterComponent
  ],
  imports: [
    BrowserModule,
    WjGridModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
