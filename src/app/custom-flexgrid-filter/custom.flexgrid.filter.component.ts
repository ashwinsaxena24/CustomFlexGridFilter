import { Component, OnInit } from "@angular/core";

import * as wjcCore from "@grapecity/wijmo";
import * as wjcGrid from "@grapecity/wijmo.grid";
import * as wjcGridFilter from "@grapecity/wijmo.grid.filter";
import * as wjGridFilter from "@grapecity/wijmo.angular2.grid.filter";
import { elementEventFullName } from "@angular/compiler/src/view_compiler/view_compiler";

@Component({
	selector: "wj-custom-flex-grid-filter",
	templateUrl: "./custom.flexgrid.filter.component.html",
	styleUrls: ["./custom.flexgrid.filter.component.css"]
})
export class CustomFlexgridFilterComponent extends wjGridFilter.WjFlexGridFilter
	implements OnInit {
	_edtCustCol: wjcGrid.Column = null;

	created() {
		var self = this;

		wjcGridFilter.ColumnFilterEditor.controlTemplate = `<div><div wj-part="div-sort"><button wj-part="btn-asc" class="wj-btn" style="min-width:95px"></button>&nbsp;&nbsp;&nbsp;<button wj-part="btn-dsc" class="wj-btn" style="min-width:95px"></button></div><div wj-part="div-type" class="wj-filtertype"><a wj-part="a-custom" href="" draggable="false"></a>&nbsp;|&nbsp;<a wj-part="a-cnd" href="" draggable="false"></a>&nbsp;|&nbsp;<a wj-part="a-val" href="" draggable="false"></a></div><div wj-part="div-edt-custom" tabindex="-1"></div><div wj-part="div-edt-val" tabindex="-1"></div><div wj-part="div-edt-cnd" tabindex="-1"></div><div style="text-align:right;margin-top:10px"><button wj-part="btn-apply" class="wj-btn"></button>&nbsp;&nbsp;<button wj-part="btn-cancel" class="wj-btn"></button>&nbsp;&nbsp;<button wj-part="btn-clear" class="wj-btn"></button></div>`;
	}

	editColumnFilter(
		col: any,
		hitTest?: wjcGrid.HitTestInfo,
		ref?: HTMLElement
	) {
		var self = this;

		super.editColumnFilter(col, hitTest, ref);
		self._edtCustCol =
			col instanceof wjcGrid.Column ? col : self.grid.columns[col];
		// adding custom link
		var _customFilterLink = self.activeEditor.hostElement.querySelector(
			'a[wj-part="a-custom"]'
		) as HTMLLinkElement;
		_customFilterLink.innerHTML = "Filter Custom";
		_customFilterLink.addEventListener(
			"click",
			self._createCustomFilterEditor.bind(self)
		);

		Object.defineProperty(self.activeEditor, "_aCustom", {
			configurable: true,
			enumerable: true,
			value: _customFilterLink,
			writable: false
		});

		// adding custom control
		var _customFilterElement = self.activeEditor.hostElement.querySelector(
			'div[wj-part="div-edt-custom"]'
		) as HTMLDivElement;
		var _customFilterControlHostElement = wjcCore.createElement(
			"<div><div>",
			_customFilterElement
		);

		_customFilterElement.style.display = "none";

		var _colFilter = self.getColumnFilter(self._edtCustCol);
		var condFilter = null;

		if (_colFilter["customFilter"]) {
			condFilter = _colFilter["customFilter"];
		} else {
			condFilter = new CustomFilter(self._edtCustCol);
			Object.defineProperty(_colFilter, "customFilter", {
				configurable: true,
				enumerable: true,
				value: condFilter,
				writable: true
			});
		}
		var _customFilterControl = new CustomFilterEditor(
			_customFilterControlHostElement,
			condFilter
		);

		Object.defineProperty(self.activeEditor, "_divEdtCustom", {
			configurable: true,
			enumerable: true,
			value: _customFilterElement,
			writable: false
		});

		// override filter by value and condition to enable custom filter link
		self.activeEditor["_aVal"].addEventListener(
			"click",
			self._hideCustomFilter.bind(self)
		);
		self.activeEditor["_aCnd"].addEventListener(
			"click",
			self._hideCustomFilter.bind(self)
		);

		var _oldUpdateFilter = self.activeEditor.updateFilter;
		self.activeEditor.updateFilter = function() {
			if (this["_divEdtCustom"].style.display !== "none") {
				_customFilterControl.updateFilter();
			} else {
				_oldUpdateFilter.apply(this, arguments);
			}
		};

		// console.dir(self.activeEditor);
		console.dir(self);
	}

	apply() {
		var _divEdtCustom = document.querySelector(
			'div[wj-part="div-edt-custom"]'
		) as HTMLDivElement;
		if (_divEdtCustom && _divEdtCustom.style.display !== "none") {
			var _custFilter = this.getColumnFilter(this["_edtCustCol"]);
			_custFilter.clear();
			this.grid.collectionView.refresh();
			_custFilter["customFilter"].applyCustomFilter();
			this.onFilterApplied(new wjcCore.EventArgs());
		} else {
			super.apply();
		}
	}

	clear() {
		console.dir('asdf');
		// console.log(this.getColumnFilter(this["_edtCustCol"]));
		// var _custFilter = this.getColumnFilter(this["_edtCustCol"]);
		// if (_custFilter && _custFilter["customFilter"]) {
		// 	_custFilter["customFilter"].clear();
		// }
		super.clear();
	}

	_hideCustomFilter() {
		this._enableLink(this.activeEditor["_aCustom"]);
		this.activeEditor["_divEdtCustom"].style.display = "none";
	}

	_createCustomFilterEditor(e: MouseEvent) {
		e.preventDefault();
		var _activeEditor = this.activeEditor;

		if (_activeEditor["_aCustom"]) {
			// this._disableLink(_activeEditor["_aCustom"]);
			this._enableLink(_activeEditor["_aCustom"], false);
			this._enableLink(_activeEditor["_aVal"]);
			this._enableLink(_activeEditor["_aCnd"]);

			_activeEditor["_divEdtCnd"].style.display = "none";
			_activeEditor["_divEdtVal"].style.display = "none";
			_activeEditor["_divEdtCustom"].style.display = null;
		}
	}

	_enableLink(element: HTMLLinkElement, enable = true) {
		wjcCore.toggleClass(element, "wj-state-disabled", !enable),
			element.setAttribute("href", enable ? "#" : null),
			wjcCore.setAttribute(
				element,
				"disabled",
				enable ? null : "disabled"
			);
	}

	ngOnInit() {}
}

export class CustomFilter extends wjcGridFilter.ConditionFilter {
	// you can add your own filters in this method
	// since this class extend ConditionFilter
	// you can use all the properties like condition1, condition2 etc
	applyCustomFilter() {
		this.column.grid.collectionView.filter = function(item, prop) {
			return item.country == "UK";
		};
	}

	clear() {
		super.clear();
		this.column.collectionView.filter = function(item, prop) {
			return true;
		};
		this.column.collectionView.refresh();
	}
}

export class CustomFilterEditor extends wjcGridFilter.ConditionFilterEditor {
	// you can update the control template here
	constructor(element: HTMLElement, filter: wjcGridFilter.ConditionFilter) {
		super(element, filter);
		this["_divHdr"].innerText = "In Custom Filter";
	}
}
