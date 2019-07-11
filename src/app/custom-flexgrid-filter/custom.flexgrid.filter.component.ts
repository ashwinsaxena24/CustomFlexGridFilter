import { Component, OnInit } from '@angular/core';

import * as wjcCore from '@grapecity/wijmo';
import * as wjcGrid from '@grapecity/wijmo.grid';
import * as wjcGridFilter from '@grapecity/wijmo.grid.filter';
import * as wjGridFilter from '@grapecity/wijmo.angular2.grid.filter';

@Component({
  selector: 'wj-custom-flex-grid-filter',
  templateUrl: './custom.flexgrid.filter.component.html',
  styleUrls: ['./custom.flexgrid.filter.component.css']
})
export class CustomFlexgridFilterComponent extends wjGridFilter.WjFlexGridFilter implements OnInit {

  created() {
    this.filterChanging.addHandler((s: CustomFlexgridFilterComponent, e: wjcCore.EventArgs) => {
      setTimeout(() => {
        var _activeEditor = s.activeEditor;
        var _filterTypesElement = _activeEditor['_divType'] as HTMLDivElement;
        var _newFilter = wjcCore.createElement(`<a wj-part="a-new" href="#" draggable="false">Filter New</a>`);
        _filterTypesElement.innerHTML = '&nbsp;|&nbsp;' + _filterTypesElement.innerHTML;
        _filterTypesElement.insertBefore(_newFilter, _filterTypesElement.firstChild);
        
        _filterTypesElement.firstChild.addEventListener('mousedown', this._openNewFilter)

        console.dir(_activeEditor);
      });
    }, this);
  }

  _openNewFilter(e) {
    console.dir('here')
  }

  ngOnInit() {
  }

}
