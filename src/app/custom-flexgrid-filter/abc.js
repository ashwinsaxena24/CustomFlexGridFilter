/*!
 *
 * Wijmo Library 5.20191.615
 * http://wijmo.com/
 *
 * Copyright(c) GrapeCity, Inc.  All rights reserved.
 *
 * Licensed under the GrapeCity Commercial License.
 * sales@wijmo.com
 * wijmo.com/products/wijmo-5/license/
 *
 */
var wijmo, __extends = this && this.__extends || function() {
    var t = function(e, i) {
        return (t = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
            })(e, i)
    };
    return function(e, i) {
        function n() {
            this.constructor = e
        }
        t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
    }
}();
! function(t) {
    ! function(e) {
        ! function(e) {
            "use strict";
            var i, n = function() {
                function e(t) {
                    this._op = null, this._filter = t
                }
                return Object.defineProperty(e.prototype, "operator", {
                    get: function() {
                        return this._op
                    },
                    set: function(e) {
                        this._op = t.asEnum(e, i, !0)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "value", {
                    get: function() {
                        return this._val
                    },
                    set: function(e) {
                        if (this._val = e, this._strVal = t.isString(e) ? e.toString().toLowerCase() : null, this._mapVal = null, this._filter) {
                            var i = this._filter.dataMap || this._filter.column.dataMap;
                            i && (this._mapVal = i.getDisplayValue(e), t.isString(this._mapVal) && (this._strVal = this._mapVal = this._mapVal.toLowerCase()))
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "isActive", {
                    get: function() {
                        switch (this._op) {
                            case null:
                                return !1;
                            case i.EQ:
                            case i.NE:
                                return !0;
                            default:
                                return null != this._val || null != this._strVal
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.clear = function() {
                    this.operator = null, this.value = null
                }, e.prototype.apply = function(n, r, l) {
                    var a = this._mapVal || this._strVal || this._val;
                    t.isString(n) && (n = n.toLowerCase()), t.isString(a) && null == n && (n = ""), t.isDate(a) && (r ? a = t.DateTime.fromDateTime(a, e._refDateTime) : l && (a = t.DateTime.fromDateTime(e._refDateTime, a)));
                    var o = i;
                    switch (this._op) {
                        case null:
                            return !0;
                        case o.EQ:
                            return null != n && null != a ? n.valueOf() == a.valueOf() : n == a;
                        case o.NE:
                            return null != n && null != a ? n.valueOf() != a.valueOf() : n != a;
                        case o.GT:
                            return n > a;
                        case o.GE:
                            return n >= a;
                        case o.LT:
                            return n < a;
                        case o.LE:
                            return n <= a;
                        case o.BW:
                            return !(null == this._strVal || !t.isString(n)) && 0 == n.indexOf(this._strVal);
                        case o.EW:
                            return !!(null != this._strVal && t.isString(n) && n.length >= this._strVal.length) && n.substr(n.length - this._strVal.length) == a;
                        case o.CT:
                            return !(null == this._strVal || !t.isString(n)) && n.indexOf(this._strVal) > -1;
                        case o.NC:
                            return !(null == this._strVal || !t.isString(n)) && n.indexOf(this._strVal) < 0
                    }
                    throw "Unknown operator"
                }, e._refDateTime = new Date(2e3, 0, 1, 0, 0, 0), e
            }();
            e.FilterCondition = n,
                function(t) {
                    t[t.EQ = 0] = "EQ", t[t.NE = 1] = "NE", t[t.GT = 2] = "GT", t[t.GE = 3] = "GE", t[t.LT = 4] = "LT", t[t.LE = 5] = "LE", t[t.BW = 6] = "BW", t[t.EW = 7] = "EW", t[t.CT = 8] = "CT", t[t.NC = 9] = "NC"
                }(i = e.Operator || (e.Operator = {}))
        }(e.filter || (e.filter = {}))
    }(t.grid || (t.grid = {}))
}(wijmo || (wijmo = {})),
function(t) {
    ! function(t) {
        ! function(t) {
            "use strict"
        }(t.filter || (t.filter = {}))
    }(t.grid || (t.grid = {}))
}(wijmo || (wijmo = {})),
function(t) {
    ! function(e) {
        ! function(e) {
            "use strict";
            var i = function() {
                function i(t) {
                    this._c1 = new e.FilterCondition(this), this._c2 = new e.FilterCondition(this), this._and = !0, this._col = t
                }
                return Object.defineProperty(i.prototype, "condition1", {
                    get: function() {
                        return this._c1
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(i.prototype, "condition2", {
                    get: function() {
                        return this._c2
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(i.prototype, "and", {
                    get: function() {
                        return this._and
                    },
                    set: function(e) {
                        this._and = t.asBoolean(e)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(i.prototype, "dataMap", {
                    get: function() {
                        return this._map
                    },
                    set: function(e) {
                        this._map = t.asType(e, t.grid.DataMap, !0)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(i.prototype, "column", {
                    get: function() {
                        return this._col
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(i.prototype, "isActive", {
                    get: function() {
                        return this._c1.isActive || this._c2.isActive
                    },
                    enumerable: !0,
                    configurable: !0
                }), i.prototype.apply = function(i) {
                    var n = this._col,
                        r = this._c1,
                        l = this._c2,
                        a = !1,
                        o = !1;
                    if (!n || !n._binding || !this.isActive) return !0;
                    if (i = n._binding.getValue(i), this.dataMap) i = this.dataMap.getDisplayValue(i);
                    else if (n.dataMap) i = n.dataMap.getDisplayValue(i);
                    else if (t.isDate(i))
                        if (a = !this._hasTimePart(), o = !this._hasDatePart(), t.assert(!a || !o, "Filter should have either date or time."), a) {
                            Date();
                            i = t.DateTime.fromDateTime(i, e.FilterCondition._refDateTime)
                        } else o && (i = t.DateTime.fromDateTime(e.FilterCondition._refDateTime, i));
                    else t.isNumber(i) && (i = t.Globalize.parseFloat(t.Globalize.format(i, n.format)));
                    var s = r.apply(i, a, o),
                        u = l.apply(i, a, o);
                    return r.isActive && l.isActive ? this._and ? s && u : s || u : r.isActive ? s : !l.isActive || u
                }, i.prototype.clear = function() {
                    this._c1.clear(), this._c2.clear(), this.and = !0
                }, i.prototype._hasDatePart = function() {
                    var e = this._col.format;
                    return !e || (e = t.culture.Globalize.calendar.patterns[e] || e, /[yMd]+/.test(e))
                }, i.prototype._hasTimePart = function() {
                    var e = this._col.format;
                    return !!e && (e = t.culture.Globalize.calendar.patterns[e] || e, /[Hmst]+/.test(e))
                }, i.prototype.implementsInterface = function(t) {
                    return "IColumnFilter" == t
                }, i
            }();
            e.ConditionFilter = i
        }(e.filter || (e.filter = {}))
    }(t.grid || (t.grid = {}))
}(wijmo || (wijmo = {})),
function(t) {
    ! function(e) {
        ! function(e) {
            "use strict";
            var i = function(i) {
                function n(n, r) {
                    var l = i.call(this, n) || this;
                    l._filter = t.asType(r, e.ConditionFilter, !1);
                    var a = l.getTemplate();
                    l.applyTemplate("wj-control wj-conditionfilter-editor", a, {
                        _divHdr: "div-hdr",
                        _divCmb1: "div-cmb1",
                        _divVal1: "div-val1",
                        _btnAnd: "btn-and",
                        _btnOr: "btn-or",
                        _spAnd: "sp-and",
                        _spOr: "sp-or",
                        _divCmb2: "div-cmb2",
                        _divVal2: "div-val2"
                    });
                    var o = t.culture.FlexGridFilter,
                        s = o.ariaLabels;
                    t.setAriaLabel(l._btnAnd, s.and), t.setAriaLabel(l._btnOr, s.or), t.setText(l._divHdr, o.header), t.setText(l._spAnd, o.and), t.setText(l._spOr, o.or), l._cmb1 = l._createOperatorCombo(l._divCmb1, s.op1), l._cmb2 = l._createOperatorCombo(l._divCmb2, s.op2), l._val1 = l._createValueInput(l._divVal1, s.val1), l._val2 = l._createValueInput(l._divVal2, s.val2), l._val1.isDisabled = !0, l._cmb1.selectedIndexChanged.addHandler(function(t, e) {
                        l._val1.isDisabled = null == t.selectedValue
                    }), l._val2.isDisabled = !0, l._cmb2.selectedIndexChanged.addHandler(function(t, e) {
                        l._val2.isDisabled = null == t.selectedValue
                    });
                    var u = l.hostElement;
                    return l.addEventListener(u, "change", l._btnAndOrChanged.bind(l)), l.addEventListener(u, "keydown", l._keydown.bind(l)), l.updateEditor(), l
                }
                return __extends(n, i), Object.defineProperty(n.prototype, "filter", {
                    get: function() {
                        return this._filter
                    },
                    enumerable: !0,
                    configurable: !0
                }), n.prototype.updateEditor = function() {
                    var e = this._filter.condition1,
                        i = this._filter.condition2;
                    this._cmb1.selectedValue = e.operator, this._cmb2.selectedValue = i.operator, this._val1 instanceof t.input.ComboBox && !(this._val1 instanceof t.input.InputTime) ? (this._val1.text = t.changeType(e.value, t.DataType.String), this._val2.text = t.changeType(i.value, t.DataType.String)) : (this._val1.value = e.value, this._val2.value = i.value);
                    var n = this._filter.and;
                    this._checkRadio(this._btnAnd, n), this._checkRadio(this._btnOr, !n)
                }, n.prototype.clearEditor = function() {
                    this._cmb1.selectedValue = this._cmb2.selectedValue = null, this._val1.text = this._val2.text = null, this._checkRadio(this._btnAnd, !0), this._checkRadio(this._btnOr, !1)
                }, Object.defineProperty(n.prototype, "isEditorClear", {
                    get: function() {
                        return null == this._cmb1.selectedValue && !this._val1.text && null == this._cmb2.selectedValue && !this._val2.text
                    },
                    enumerable: !0,
                    configurable: !0
                }), n.prototype.updateFilter = function() {
                    var t = this._filter.condition1,
                        e = this._filter.condition2;
                    t.operator = this._cmb1.selectedValue, e.operator = this._cmb2.selectedValue, "value" in this._val1 ? (t.value = this._val1.value, e.value = this._val2.value) : (t.value = this._val1.selectedValue, e.value = this._val2.selectedValue), this._filter.and = this._btnAnd.checked
                }, n.prototype._createOperatorCombo = function(e, i) {
                    var n = this._filter.column,
                        r = t.culture.FlexGridFilter,
                        l = r.stringOperators,
                        a = this._filter.dataMap || n.dataMap,
                        o = t.DataType;
                    n.dataType == o.Date ? l = r.dateOperators : n.dataType != o.Number || a ? n.dataType != o.Boolean || a || (l = r.booleanOperators) : l = r.numberOperators;
                    var s = new t.input.ComboBox(e, {
                        itemsSource: l,
                        displayMemberPath: "name",
                        selectedValuePath: "op"
                    });
                    return t.setAriaLabel(s.inputElement, i), s
                }, n.prototype._createValueInput = function(e, i) {
                    var n = this._filter,
                        r = n.column,
                        l = n.dataMap || r.dataMap,
                        a = null,
                        o = t.DataType;
                    return r.dataType == o.Date ? (a = n._hasDatePart() ? n._hasTimePart() ? new t.input.InputDateTime(e) : new t.input.InputDate(e) : new t.input.InputTime(e)).format = r.format : r.dataType != o.Number || l ? (a = new t.input.ComboBox(e), l ? (a.itemsSource = l.getDisplayValues(), a.isEditable = !0) : r.dataType == o.Boolean && (a.itemsSource = [!0, !1])) : (a = new t.input.InputNumber(e)).format = r.format, a.isRequired = !1, t.setAriaLabel(a.inputElement, i), a
                }, n.prototype._btnAndOrChanged = function(t) {
                    var e = t.target == this._btnAnd,
                        i = t.target == this._btnOr;
                    (e || i) && (this._checkRadio(this._btnAnd, e), this._checkRadio(this._btnOr, i))
                }, n.prototype._checkRadio = function(t, e) {
                    t.checked = e, t.setAttribute("aria-checked", e.toString()), t.setAttribute("tabindex", e ? "1" : "-1")
                }, n.prototype._keydown = function(e) {
                    var i = e.target == this._btnAnd,
                        n = e.target == this._btnOr;
                    if (i || n) switch (e.keyCode) {
                        case t.Key.Left:
                        case t.Key.Right:
                        case t.Key.Up:
                        case t.Key.Down:
                            var r = i ? this._btnOr : this._btnAnd;
                            r.click(), r.focus(), e.preventDefault()
                    }
                }, n.controlTemplate = '<div><div wj-part="div-hdr"></div><div wj-part="div-cmb1"></div><br/><div wj-part="div-val1"></div><br/><div role="radiogroup" style="text-align:center"><label><input wj-part="btn-and" type="radio" role="radio"> <span wj-part="sp-and"></span> </label>&nbsp;&nbsp;&nbsp;<label><input wj-part="btn-or" type="radio" role="radio"> <span wj-part="sp-or"></span> </label></div><div wj-part="div-cmb2"></div><br/><div wj-part="div-val2"></div><br/></div>', n
            }(t.Control);
            e.ConditionFilterEditor = i
        }(e.filter || (e.filter = {}))
    }(t.grid || (t.grid = {}))
}(wijmo || (wijmo = {})),
function(t) {
    ! function(e) {
        ! function(e) {
            "use strict";
            var i = function() {
                function e(t) {
                    this._xValueSearch = !0, this._maxValues = 250, this._sortValues = !0, this._col = t
                }
                return Object.defineProperty(e.prototype, "showValues", {
                    get: function() {
                        return this._values
                    },
                    set: function(t) {
                        this._values = t
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "filterText", {
                    get: function() {
                        return this._filterText
                    },
                    set: function(e) {
                        this._filterText = t.asString(e)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "exclusiveValueSearch", {
                    get: function() {
                        return this._xValueSearch
                    },
                    set: function(e) {
                        this._xValueSearch = t.asBoolean(e)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "maxValues", {
                    get: function() {
                        return this._maxValues
                    },
                    set: function(e) {
                        this._maxValues = t.asNumber(e, !1, !0)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "uniqueValues", {
                    get: function() {
                        return this._uniqueValues
                    },
                    set: function(e) {
                        this._uniqueValues = t.asArray(e)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "sortValues", {
                    get: function() {
                        return this._sortValues
                    },
                    set: function(e) {
                        this._sortValues = t.asBoolean(e)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "dataMap", {
                    get: function() {
                        return this._map
                    },
                    set: function(e) {
                        this._map = t.asType(e, t.grid.DataMap, !0)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "column", {
                    get: function() {
                        return this._col
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "isActive", {
                    get: function() {
                        return null != this._values && Object.keys(this._values).length > 0
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.apply = function(e) {
                    var i = this.column;
                    return !(i && i._binding && this._values && Object.keys(this._values).length) || (e = i._binding.getValue(e), e = this.dataMap ? this.dataMap.getDisplayValue(e) : i.dataMap ? i.dataMap.getDisplayValue(e) : t.Globalize.format(e, i.format), void 0 != this._values[e])
                }, e.prototype.clear = function() {
                    this.showValues = null, this.filterText = null
                }, e.prototype.implementsInterface = function(t) {
                    return "IColumnFilter" == t
                }, e.prototype._getUniqueValues = function(e, i) {
                    var n = [];
                    if (this.uniqueValues) {
                        for (var r = this.uniqueValues, l = 0; l < r.length; l++) {
                            var a = r[l];
                            n.push({
                                value: a,
                                text: a.toString()
                            })
                        }
                        return n
                    }
                    var o = {},
                        s = e.collectionView,
                        u = s ? s.sourceCollection : [];
                    if (i && s && s.sourceCollection && s.filter) {
                        var c = this.showValues;
                        this.showValues = null;
                        var d = [];
                        for (l = 0; l < u.length; l++) s.filter(u[l]) && d.push(u[l]);
                        u = d, this.showValues = c
                    }
                    for (l = 0; l < u.length; l++) {
                        a = e._binding.getValue(u[l]);
                        var p = this.dataMap ? this.dataMap.getDisplayValue(a) : e.dataMap ? e.dataMap.getDisplayValue(a) : t.Globalize.format(a, e.format);
                        o[p] || (o[p] = !0, n.push({
                            value: a,
                            text: p
                        }))
                    }
                    return n
                }, e
            }();
            e.ValueFilter = i
        }(e.filter || (e.filter = {}))
    }(t.grid || (t.grid = {}))
}(wijmo || (wijmo = {})),
function(t) {
    ! function(e) {
        ! function(e) {
            "use strict";
            var i = function(i) {
                function n(n, r) {
                    var l = i.call(this, n) || this;
                    l._filter = t.asType(r, e.ValueFilter, !1);
                    var a = l.getTemplate();
                    l.applyTemplate("wj-control wj-valuefilter-editor", a, {
                        _divFilter: "div-filter",
                        _cbSelectAll: "cb-select-all",
                        _spSelectAll: "sp-select-all",
                        _divValues: "div-values"
                    }), l._cbSelectAll.tabIndex = 0;
                    var o = t.culture.FlexGridFilter;
                    t.setText(l._spSelectAll, o.selectAll);
                    var s = l._view = new t.collections.CollectionView;
                    if (s.sortNullsFirst = !0, r.sortValues) {
                        var u = r.column.dataMap || r.dataMap ? "text" : "value",
                            c = r.column.dataType != t.DataType.Boolean;
                        s.sortDescriptions.push(new t.collections.SortDescription(u, c))
                    }
                    return s.filter = l._filterValues.bind(l), s.collectionChanged.addHandler(l._updateSelectAllCheck, l), l._filterText = "", l._cmbFilter = new t.input.ComboBox(l._divFilter, {
                        placeholder: o.search
                    }), l._lbValues = new t.input.ListBox(l._divValues, {
                        displayMemberPath: "text",
                        checkedMemberPath: "show",
                        itemsSource: l._view,
                        itemFormatter: function(t, e) {
                            return e || o.null
                        }
                    }), t.setAriaLabel(l._cmbFilter.inputElement, o.ariaLabels.search), l._cmbFilter.textChanged.addHandler(l._filterTextChanged, l), l._cbSelectAll.addEventListener("click", l._cbSelectAllClicked.bind(l)), l.updateEditor(), l
                }
                return __extends(n, i), Object.defineProperty(n.prototype, "filter", {
                    get: function() {
                        return this._filter
                    },
                    enumerable: !0,
                    configurable: !0
                }), n.prototype.updateEditor = function() {
                    var t = this,
                        e = this._filter.column,
                        i = this._filter._getUniqueValues(e, !0);
                    this._lbValues.isContentHtml = e.isContentHtml;
                    var n = this._filter.showValues;
                    if (n && 0 != Object.keys(n).length) {
                        for (var r in n)
                            for (l = 0; l < i.length; l++)
                                if (i[l].text == r) {
                                    i[l].show = !0;
                                    break
                                }
                    } else
                        for (var l = 0; l < i.length; l++) i[l].show = !0;
                    this._view.pageSize = 20, this._view.sourceCollection = i, setTimeout(function() {
                        t._view.pageSize = t._filter.maxValues, t._cmbFilter.text = t._filter.filterText || "", t._filterText = t._cmbFilter.text.toLowerCase()
                    })
                }, n.prototype.clearEditor = function(t) {
                    void 0 === t && (t = !0), this._cmbFilter.text = "", this._filterText = "", this._view.pageSize = 0, this._view.refresh(), this._view.items.forEach(function(e) {
                        e.show = t
                    }), this._view.pageSize = this._filter.maxValues
                }, Object.defineProperty(n.prototype, "isEditorClear", {
                    get: function() {
                        return !this._filterText && !this._cbSelectAll.indeterminate
                    },
                    enumerable: !0,
                    configurable: !0
                }), n.prototype.updateFilter = function() {
                    var t = null,
                        e = this._getItems();
                    if (this._filterText || this._cbSelectAll.indeterminate) {
                        t = {};
                        for (var i = 0; i < e.length; i++) {
                            var n = e[i];
                            n.show && (t[n.text] = !0)
                        }
                    }
                    var r = this._filter;
                    r.showValues = t, r.filterText = ""
                }, n.prototype._getItems = function() {
                    return this._filter.exclusiveValueSearch ? this._view.items : this._view.sourceCollection
                }, n.prototype._filterTextChanged = function() {
                    var t = this;
                    this._toText && clearTimeout(this._toText), this._toText = setTimeout(function() {
                        var e = t._cmbFilter.text.toLowerCase(),
                            i = e != t._filterText;
                        t._filterText = e, t._view.refresh(), i && (t._filter.exclusiveValueSearch ? (t._cbSelectAll.checked = !0, t._cbSelectAllClicked()) : t._updateSelectAllCheck())
                    }, 300)
                }, n.prototype._filterValues = function(t) {
                    return !this._filterText || !(!t || !t.text) && t.text.toLowerCase().indexOf(this._filterText) > -1
                }, n.prototype._cbSelectAllClicked = function() {
                    for (var t = this._cbSelectAll.checked, e = this._divValues.scrollTop, i = this._getItems(), n = 0; n < i.length; n++) i[n].show = t;
                    this._view.refresh(), this._divValues.scrollTop = e
                }, n.prototype._updateSelectAllCheck = function() {
                    for (var t = 0, e = this._getItems(), i = 0; i < e.length; i++) e[i].show && t++;
                    var n = this._cbSelectAll;
                    0 == t ? (n.checked = !1, n.indeterminate = !1) : t == e.length ? (n.checked = !0, n.indeterminate = !1) : n.indeterminate = !0
                }, n.controlTemplate = '<div><div wj-part="div-filter"></div><div class="wj-listbox-item"><label><input wj-part="cb-select-all" type="checkbox"> <span wj-part="sp-select-all"></span></label></div><div wj-part="div-values"></div></div>', n
            }(t.Control);
            e.ValueFilterEditor = i
        }(e.filter || (e.filter = {}))
    }(t.grid || (t.grid = {}))
}(wijmo || (wijmo = {})),
function(t) {
    ! function(e) {
        ! function(e) {
            "use strict";
            var i = function() {
                function i(t, i) {
                    this._owner = t, this._col = i, this._valueFilter = new e.ValueFilter(i), this._valueFilter.exclusiveValueSearch = t.exclusiveValueSearch, this._conditionFilter = new e.ConditionFilter(i)
                }
                return Object.defineProperty(i.prototype, "filterType", {
                    get: function() {
                        return null != this._filterType ? this._filterType : this._owner.defaultFilterType
                    },
                    set: function(i) {
                        if ((i = t.asEnum(i, e.FilterType, !0)) != this._filterType) {
                            var n = this.isActive;
                            this.clear(), this._filterType = i, n ? this._owner.apply() : this._col.grid && this._col.grid.invalidate()
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(i.prototype, "dataMap", {
                    get: function() {
                        return this.conditionFilter.dataMap || this.valueFilter.dataMap
                    },
                    set: function(t) {
                        this.conditionFilter.dataMap = t, this.valueFilter.dataMap = t
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(i.prototype, "valueFilter", {
                    get: function() {
                        return this._valueFilter
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(i.prototype, "conditionFilter", {
                    get: function() {
                        return this._conditionFilter
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(i.prototype, "column", {
                    get: function() {
                        return this._col
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(i.prototype, "isActive", {
                    get: function() {
                        return this._conditionFilter.isActive || this._valueFilter.isActive
                    },
                    enumerable: !0,
                    configurable: !0
                }), i.prototype.apply = function(t) {
                    return this._conditionFilter.apply(t) && this._valueFilter.apply(t)
                }, i.prototype.clear = function() {
                    this._valueFilter.clear(), this._conditionFilter.clear()
                }, i.prototype.implementsInterface = function(t) {
                    return "IColumnFilter" == t
                }, i
            }();
            e.ColumnFilter = i
        }(e.filter || (e.filter = {}))
    }(t.grid || (t.grid = {}))
}(wijmo || (wijmo = {})),
function(t) {
    var e;
    (function(e) {
        "use strict";
        var i;
        ! function(t) {
            t[t.None = 0] = "None", t[t.Condition = 1] = "Condition", t[t.Value = 2] = "Value", t[t.Both = 3] = "Both"
        }(i = e.FilterType || (e.FilterType = {}));
        var n = function() {
            function n(e, n) {
                this._showIcons = !0, this._showSort = !0, this._defFilterType = i.Both, this._xValueSearch = !0, this.filterApplied = new t.Event, this.filterChanging = new t.Event, this.filterChanged = new t.Event, this._filters = [], this._g = t.asType(e, t.grid.FlexGrid, !1), this._g.formatItem.addHandler(this._formatItem.bind(this)), this._g.itemsSourceChanged.addHandler(this.clear.bind(this));
                var r = this._g.hostElement;
                e.addEventListener(r, "mousedown", this._mousedown.bind(this), !0), e.addEventListener(r, "click", this._click.bind(this), !0), e.addEventListener(r, "keydown", this._keydown.bind(this), !0), this._g.invalidate(), n && t.copy(this, n)
            }
            return Object.defineProperty(n.prototype, "grid", {
                get: function() {
                    return this._g
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(n.prototype, "filterColumns", {
                get: function() {
                    return this._filterColumns
                },
                set: function(e) {
                    this._filterColumns = t.asArray(e), this.clear()
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(n.prototype, "showFilterIcons", {
                get: function() {
                    return this._showIcons
                },
                set: function(e) {
                    e != this.showFilterIcons && (this._showIcons = t.asBoolean(e), this._g && this._g.invalidate())
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(n.prototype, "showSortButtons", {
                get: function() {
                    return this._showSort
                },
                set: function(e) {
                    this._showSort = t.asBoolean(e)
                },
                enumerable: !0,
                configurable: !0
            }), n.prototype.getColumnFilter = function(t, i) {
                void 0 === i && (i = !0), t = this._asColumn(t);
                for (var n = 0; n < this._filters.length; n++)
                    if (this._filters[n].column == t) return this._filters[n];
                if (i && t.binding) {
                    var r = new e.ColumnFilter(this, t);
                    return this._filters.push(r), r
                }
                return null
            }, Object.defineProperty(n.prototype, "defaultFilterType", {
                get: function() {
                    return this._defFilterType
                },
                set: function(e) {
                    (e = t.asEnum(e, i, !1)) != this.defaultFilterType && (this._defFilterType = e, this._g.invalidate(), this.clear())
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(n.prototype, "exclusiveValueSearch", {
                get: function() {
                    return this._xValueSearch
                },
                set: function(e) {
                    this._xValueSearch = t.asBoolean(e)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(n.prototype, "filterDefinition", {
                get: function() {
                    var t = this,
                        e = {
                            defaultFilterType: this.defaultFilterType,
                            filters: []
                        };
                    return this._filters.forEach(function(i) {
                        var n = i.conditionFilter,
                            r = i.valueFilter,
                            l = r.uniqueValues && r.uniqueValues.length;
                        if (i && i.column && i.column.binding && (i.isActive || l || i.filterType != t.defaultFilterType)) {
                            var a = {
                                binding: i.column.binding
                            };
                            if (n.isActive) {
                                var o = n.condition1,
                                    s = n.condition2;
                                a = {
                                    binding: i.column.binding,
                                    type: "condition",
                                    condition1: {
                                        operator: o.operator,
                                        value: o.value
                                    },
                                    and: n.and,
                                    condition2: {
                                        operator: s.operator,
                                        value: s.value
                                    }
                                }
                            } else(r.isActive || l) && (a = {
                                binding: i.column.binding,
                                type: "value",
                                uniqueValues: r.uniqueValues,
                                sortValues: r.sortValues,
                                maxValues: r.maxValues,
                                exclusiveValueSearch: r.exclusiveValueSearch,
                                showValues: r.showValues
                            });
                            i.filterType != t.defaultFilterType && (a.filterType = i.filterType), e.filters.push(a)
                        }
                    }), JSON.stringify(e)
                },
                set: function(e) {
                    if (e = t.asString(e), this.clear(), e) {
                        var n = JSON.parse(e);
                        this.defaultFilterType = n.defaultFilterType;
                        for (var r = function(e) {
                                var r = n.filters[e],
                                    a = l._g.getColumn(r.binding),
                                    o = l.getColumnFilter(a, !0);
                                if (o) switch (null != r.filterType && (o.filterType = t.asEnum(r.filterType, i)), r.type) {
                                    case "condition":
                                        var s = o.conditionFilter;
                                        s.condition1.value = a.dataType == t.DataType.Date ? t.changeType(r.condition1.value, a.dataType, null) : r.condition1.value, s.condition1.operator = r.condition1.operator, s.and = r.and, s.condition2.value = a.dataType == t.DataType.Date ? t.changeType(r.condition2.value, a.dataType, null) : r.condition2.value, s.condition2.operator = r.condition2.operator;
                                        break;
                                    case "value":
                                        var u = o.valueFilter;
                                        u.uniqueValues = r.uniqueValues, ["sortValues", "maxValues", "exclusiveValueSearch"].forEach(function(t) {
                                            null != r[t] && (u[t] = r[t])
                                        }), u.showValues = r.showValues
                                }
                            }, l = this, a = 0; a < n.filters.length; a++) r(a)
                    }
                    this.apply()
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(n.prototype, "activeEditor", {
                get: function() {
                    return t.Control.getControl(this._divEdt)
                },
                enumerable: !0,
                configurable: !0
            }), n.prototype.editColumnFilter = function(i, n, r) {
                var l = this;
                this.closeEditor(), i = this._asColumn(i);
                var a = this._g,
                    o = new t.grid.CellRangeEventArgs(a.cells, new t.grid.CellRange(-1, i.index));
                if (this.onFilterChanging(o)) {
                    o.cancel = !0;
                    var s = t.createElement('<div class="wj-dropdown-panel"></div>'),
                        u = this.getColumnFilter(i),
                        c = new e.ColumnFilterEditor(s, u, this.showSortButtons);
                    this._divEdt = s, this._edtCol = i, a.rightToLeft && (s.dir = "rtl"), c.filterChanged.addHandler(function() {
                        o.cancel = !1, setTimeout(function() {
                            o.cancel || l.apply()
                        })
                    }), c.buttonClicked.addHandler(function() {
                        l.closeEditor(), a.focus(), l.onFilterChanged(o)
                    }), c.lostFocus.addHandler(function() {
                        setTimeout(function() {
                            var e = t.Control.getControl(l._divEdt);
                            e && !e.containsFocus() && l.closeEditor()
                        }, 10)
                    });
                    var d = n ? n.col : i.index;
                    n || a.columns[d].binding == i.binding || (d = a.selection.leftCol), a._edtHdl._commitRowEdits(), a.scrollIntoView(-1, d, !0);
                    var p = a.columnHeaders,
                        h = n && n.panel == p ? n.row : p.rows.length - 1,
                        f = d,
                        _ = p.getCellBoundingRect(h, f),
                        v = r || p.getCellElement(h, f);
                    v ? t.showPopup(s, v, !1, !1, !1) : t.showPopup(s, _), this._setAriaExpanded(v, !0), this._setAriaExpanded(a.cells.getCellElement(-1, f), !0);
                    for (var b = c.hostElement.querySelectorAll("input"), m = 0; m < b.length; m++) {
                        var g = b[m];
                        if (g.offsetHeight > 0 && g.tabIndex > -1 && !g.disabled) {
                            g.focus();
                            break
                        }
                    }
                    c.containsFocus() || c.focus()
                } else this._divEdt = this._edtCol = null
            }, n.prototype._setAriaExpanded = function(e, i) {
                if (e) {
                    var r = e.querySelector("." + n._WJC_FILTER);
                    t.setAttribute(r, "aria-expanded", i)
                }
            }, n.prototype.closeEditor = function() {
                var e = this._g,
                    i = t.Control.getControl(this._divEdt),
                    n = this._edtCol;
                if (i && t.hidePopup(i.hostElement, function() {
                        i.dispose()
                    }), n) {
                    var r = e.columnHeaders,
                        l = r.rows.length ? r.getCellElement(r.rows.length - 1, n.index) : null;
                    this._setAriaExpanded(l, !1), l = e.cells.getCellElement(-1, n.index), this._setAriaExpanded(l, !1)
                }
                this._divEdt = null, this._edtCol = null
            }, n.prototype.apply = function() {
                var e = this._g.collectionView;
                if (e) {
                    var i = this._g.editableCollectionView;
                    i && (i.commitEdit(), i.commitNew()), e.filter = this._filter.bind(this)
                }
                var n = e ? e.updateFilterDefinition : null;
                t.isFunction(n) && n.call(e, this), this.onFilterApplied()
            }, n.prototype.clear = function() {
                this._filters.length && (this._filters = [], this.apply())
            }, n.prototype.onFilterApplied = function(t) {
                this.filterApplied.raise(this, t)
            }, n.prototype.onFilterChanging = function(t) {
                return this.filterChanging.raise(this, t), !t.cancel
            }, n.prototype.onFilterChanged = function(t) {
                this.filterChanged.raise(this, t)
            }, n.prototype._asColumn = function(e) {
                return t.isString(e) ? this._g.getColumn(e) : t.isNumber(e) ? this._g.columns[e] : t.asType(e, t.grid.Column, !1)
            }, n.prototype._filter = function(t) {
                for (var e = 0; e < this._filters.length; e++)
                    if (!this._filters[e].apply(t)) return !1;
                return !0
            }, n.prototype._formatItem = function(e, n) {
                if (n.panel == e.columnHeaders) {
                    var r = this._g,
                        l = r.getMergedRange(n.panel, n.row, n.col) || new t.grid.CellRange(n.row, n.col),
                        a = r.columns[l.col],
                        o = r._getBindingColumn(n.panel, n.row, a),
                        s = n.cell;
                    if (l.row2 == n.panel.rows.length - 1 || a != o) {
                        var u = this.getColumnFilter(o, this.defaultFilterType != i.None);
                        this._filterColumns && this._filterColumns.indexOf(o.binding) < 0 && (u = null), u ? (t.toggleClass(s, "wj-filter-on", u.isActive), t.toggleClass(s, "wj-filter-off", !u.isActive)) : (t.removeClass(s, "wj-filter-on"), t.removeClass(s, "wj-filter-off")), u && u.filterType != i.None && (this._showIcons && this._addFilterButton(o, u, s), 0 == n.row && (s = r.cells.getCellElement(-1, n.col)) && this._addFilterButton(a, u, s))
                    }
                }
            }, n.prototype._addFilterButton = function(e, i, r) {
                var l = n._WJC_FILTER,
                    a = t.createElement('<button class="wj-btn wj-btn-glyph wj-right ' + l + '" type="button" tabindex="-1"><span class="wj-glyph-filter"></span></button>');
                t.setAriaLabel(a, t.culture.FlexGridFilter.ariaLabels.edit + " " + e.header), t.setAttribute(a, "aria-haspopup", "dialog"), t.setAttribute(a, "aria-expanded", !1), t.setAttribute(a, "aria-describedby", e.describedById), t.setAttribute(a, "aria-pressed", i.isActive), r.querySelector("." + l) || (1 == r.children.length && (r = r.querySelector("div") || r), r.appendChild(a))
            }, n.prototype._mousedown = function(t) {
                this._toggleEditor(t) && (this._tmd = !0, t.stopPropagation(), t.preventDefault())
            }, n.prototype._click = function(t) {
                (this._tmd || this._toggleEditor(t)) && (t.stopPropagation(), t.preventDefault()), this._tmd = !1
            }, n.prototype._toggleEditor = function(e) {
                var i = this;
                if (this._tmd = !1, !e.defaultPrevented && 0 == e.button)
                    if (t.closestClass(e.target, n._WJC_FILTER)) {
                        var r = this._g,
                            l = r.hitTest(e.target);
                        if (l.panel || (l = r.hitTest(e)), l.panel == r.columnHeaders || l.panel == r.cells && -1 == l.row) {
                            var a = r.columns[l.col],
                                o = r._getBindingColumn(l.panel, l.row, a);
                            return this._divEdt && this._edtCol == o ? (this.closeEditor(), r.focus()) : setTimeout(function() {
                                i.editColumnFilter(o, l)
                            }, this._divEdt ? 100 : 0), !0
                        }
                    } else this.closeEditor();
                return !1
            }, n.prototype._keydown = function(e) {
                if (!e.defaultPrevented && !e.ctrlKey && e.altKey && (e.keyCode == t.Key.Down || e.keyCode == t.Key.Up)) {
                    var i = this.grid,
                        n = i.selection,
                        r = n.col > -1 ? i.columns[n.col] : null,
                        l = r ? i._getBindingColumn(i.cells, n.row, r) : null;
                    l && !l.dataMap && this.getColumnFilter(l, !0) && (this.editColumnFilter(l), e.preventDefault(), e.stopPropagation())
                }
            }, n._WJC_FILTER = "wj-elem-filter", n
        }();
        e.FlexGridFilter = n
    })((e = t.grid || (t.grid = {})).filter || (e.filter = {}))
}(wijmo || (wijmo = {})),
function(t) {
    ! function(e) {
        ! function(e) {
            "use strict";
            t._addCultureInfo("FlexGridFilter", {
                ariaLabels: {
                    edit: "Edit Filter for Column",
                    dialog: "Filter Editor for Column",
                    asc: "Sort Column in Ascending Order",
                    dsc: "Sort Column in Descending Order",
                    search: "Search Item List",
                    op1: "First Condition Operator",
                    val1: "First Condition Value",
                    and: "Require both Conditions",
                    or: "Require either Condition",
                    op2: "Second Condition Operator",
                    val2: "Second Condition Value"
                },
                ascending: "↑ Ascending",
                descending: "↓ Descending",
                apply: "Apply",
                cancel: "Cancel",
                clear: "Clear",
                conditions: "Filter by Condition",
                values: "Filter by Value",
                search: "Search",
                selectAll: "Select All",
                null: "(nothing)",
                header: "Show items where the value",
                and: "And",
                or: "Or",
                stringOperators: [{
                    name: "(not set)",
                    op: null
                }, {
                    name: "Equals",
                    op: e.Operator.EQ
                }, {
                    name: "Does not equal",
                    op: e.Operator.NE
                }, {
                    name: "Begins with",
                    op: e.Operator.BW
                }, {
                    name: "Ends with",
                    op: e.Operator.EW
                }, {
                    name: "Contains",
                    op: e.Operator.CT
                }, {
                    name: "Does not contain",
                    op: e.Operator.NC
                }],
                numberOperators: [{
                    name: "(not set)",
                    op: null
                }, {
                    name: "Equals",
                    op: e.Operator.EQ
                }, {
                    name: "Does not equal",
                    op: e.Operator.NE
                }, {
                    name: "Is Greater than",
                    op: e.Operator.GT
                }, {
                    name: "Is Greater than or equal to",
                    op: e.Operator.GE
                }, {
                    name: "Is Less than",
                    op: e.Operator.LT
                }, {
                    name: "Is Less than or equal to",
                    op: e.Operator.LE
                }],
                dateOperators: [{
                    name: "(not set)",
                    op: null
                }, {
                    name: "Equals",
                    op: e.Operator.EQ
                }, {
                    name: "Is Before",
                    op: e.Operator.LT
                }, {
                    name: "Is After",
                    op: e.Operator.GT
                }],
                booleanOperators: [{
                    name: "(not set)",
                    op: null
                }, {
                    name: "Equals",
                    op: e.Operator.EQ
                }, {
                    name: "Does not equal",
                    op: e.Operator.NE
                }]
            });
            var i = function(i) {
                function n(n, r, l) {
                    void 0 === l && (l = !0);
                    var a = i.call(this, n, null, !0) || this;
                    a.filterChanged = new t.Event, a.buttonClicked = new t.Event, a._filter = t.asType(r, e.ColumnFilter);
                    var o = a.getTemplate();
                    a.applyTemplate("wj-control wj-content wj-columnfiltereditor", o, {
                        _divSort: "div-sort",
                        _btnAsc: "btn-asc",
                        _btnDsc: "btn-dsc",
                        _divType: "div-type",
                        _aVal: "a-val",
                        _aCnd: "a-cnd",
                        _divEdtVal: "div-edt-val",
                        _divEdtCnd: "div-edt-cnd",
                        _btnApply: "btn-apply",
                        _btnCancel: "btn-cancel",
                        _btnClear: "btn-clear"
                    });
                    var s = t.culture.FlexGridFilter,
                        u = s.ariaLabels,
                        c = a.hostElement,
                        d = a.filter.column,
                        p = d.grid.collectionView;
                    t.setAttribute(c, "role", "dialog"), t.setAriaLabel(c, u.dialog + " " + d.header), t.setAriaLabel(a._btnAsc, u.asc), t.setAriaLabel(a._btnDsc, u.dsc), t.setText(a._btnAsc, s.ascending), t.setText(a._btnDsc, s.descending), t.setText(a._aVal, s.values), t.setText(a._aCnd, s.conditions), t.setText(a._btnApply, s.apply), t.setText(a._btnCancel, s.cancel), t.setText(a._btnClear, s.clear);
                    var h = a.filter.conditionFilter.isActive || 0 == (r.filterType & e.FilterType.Value) ? e.FilterType.Condition : e.FilterType.Value;
                    a._showFilter(h), l && p && p.canSort || (a._divSort.style.display = "none");
                    var f = a._btnClicked.bind(a);
                    return a._btnApply.addEventListener("click", f), a._btnCancel.addEventListener("click", f), a._btnClear.addEventListener("click", f), a._btnAsc.addEventListener("click", f), a._btnDsc.addEventListener("click", f), a._aVal.addEventListener("click", f), a._aCnd.addEventListener("click", f), a.addEventListener(c, "keydown", function(e) {
                        if (!e.defaultPrevented) {
                            var i = e.target.tagName.match(/^(a|button)$/i);
                            switch (e.keyCode) {
                                case t.Key.Space:
                                    i && (a._btnClicked(e), e.preventDefault());
                                    break;
                                case t.Key.Enter:
                                    i ? a._btnClicked(e) : (a.updateFilter(), a.onFilterChanged(), a.onButtonClicked()), e.preventDefault();
                                    break;
                                case t.Key.Escape:
                                    a.onButtonClicked(), e.preventDefault();
                                    break;
                                case t.Key.Tab:
                                    t.moveFocus(a.hostElement, e.shiftKey ? -1 : 1), e.preventDefault()
                            }
                        }
                    }), a.addEventListener(window, "resize", function() {
                        a.isTouching || a._wasTouching || a.onButtonClicked()
                    }), a
                }
                return __extends(n, i), Object.defineProperty(n.prototype, "filter", {
                    get: function() {
                        return this._filter
                    },
                    enumerable: !0,
                    configurable: !0
                }), n.prototype.updateEditor = function() {
                    this._edtVal && this._edtVal.updateEditor(), this._edtCnd && this._edtCnd.updateEditor()
                }, n.prototype.updateFilter = function() {
                    switch (this._getFilterType()) {
                        case e.FilterType.Value:
                            this._edtVal.updateFilter(), this.filter.conditionFilter.clear();
                            break;
                        case e.FilterType.Condition:
                            this._edtCnd.updateFilter(), this.filter.valueFilter.clear()
                    }
                }, n.prototype.onFilterChanged = function(t) {
                    this.filterChanged.raise(this, t)
                }, n.prototype.onButtonClicked = function(t) {
                    this.buttonClicked.raise(this, t)
                }, n.prototype._showFilter = function(t) {
                    this._wasTouching = this.isTouching, t == e.FilterType.Value && null == this._edtVal && (this._edtVal = new e.ValueFilterEditor(this._divEdtVal, this.filter.valueFilter)), t == e.FilterType.Condition && null == this._edtCnd && (this._edtCnd = new e.ConditionFilterEditor(this._divEdtCnd, this.filter.conditionFilter)), 0 != (t & this.filter.filterType) && (t == e.FilterType.Value ? (this._divEdtVal.style.display = "", this._divEdtCnd.style.display = "none", this._enableLink(this._aVal, !1), this._enableLink(this._aCnd, !0), this._edtVal.focus()) : (this._divEdtVal.style.display = "none", this._divEdtCnd.style.display = "", this._enableLink(this._aVal, !0), this._enableLink(this._aCnd, !1), this._edtCnd.focus()));
                    var i = this._divType.style;
                    switch (this.filter.filterType) {
                        case e.FilterType.None:
                        case e.FilterType.Condition:
                        case e.FilterType.Value:
                            i.display = "none";
                            break;
                        default:
                            i.display = ""
                    }
                }, n.prototype._enableLink = function(e, i) {
                    t.toggleClass(e, "wj-state-disabled", !i), t.setAttribute(e, "href", i ? "" : null), t.setAttribute(e, "disabled", i ? null : "disabled")
                }, n.prototype._getFilterType = function() {
                    var t = e.FilterType;
                    return "none" != this._divEdtVal.style.display ? t.Value : t.Condition
                }, n.prototype._btnClicked = function(i) {
                    var n = i.target;
                    if (i.preventDefault(), i.stopPropagation(), !t.hasClass(n, "wj-state-disabled")) {
                        if (n == this._aVal) return this._showFilter(e.FilterType.Value), void t.moveFocus(this._edtVal.hostElement, 0);
                        if (n == this._aCnd) return this._showFilter(e.FilterType.Condition), void t.moveFocus(this._edtCnd.hostElement, 0);
                        if (n == this._btnAsc || n == this._btnDsc) {
                            var r = this.filter.column,
                                l = r.sortMemberPath ? r.sortMemberPath : r.binding,
                                a = r.grid.collectionView,
                                o = new t.collections.SortDescription(l, i.target == this._btnAsc);
                            a.sortDescriptions.deferUpdate(function() {
                                a.sortDescriptions.clear(), a.sortDescriptions.push(o)
                            })
                        }
                        n == this._btnApply ? (this.updateFilter(), this.onFilterChanged()) : n == this._btnClear ? this.filter.isActive && (this.filter.clear(), this.onFilterChanged()) : this.updateEditor(), this.onButtonClicked()
                    }
                }, n.controlTemplate = '<div><div wj-part="div-sort"><button wj-part="btn-asc" class="wj-btn" style="min-width:95px"></button>&nbsp;&nbsp;&nbsp;<button wj-part="btn-dsc" class="wj-btn" style="min-width:95px"></button></div><div wj-part="div-type" class="wj-filtertype"><a wj-part="a-cnd" href="" draggable="false"></a>&nbsp;|&nbsp;<a wj-part="a-val" href="" draggable="false"></a></div><div wj-part="div-edt-val" tabindex="-1"></div><div wj-part="div-edt-cnd" tabindex="-1"></div><div style="text-align:right;margin-top:10px"><button wj-part="btn-apply" class="wj-btn"></button>&nbsp;&nbsp;<button wj-part="btn-cancel" class="wj-btn"></button>&nbsp;&nbsp;<button wj-part="btn-clear" class="wj-btn"></button></div>', n
            }(t.Control);
            e.ColumnFilterEditor = i
        }(e.filter || (e.filter = {}))
    }(t.grid || (t.grid = {}))
}(wijmo || (wijmo = {})),
function(t) {
    ! function(e) {
        e.filter || (e.filter = {}), t._registerModule("wijmo.grid.filter", t.grid.filter)
    }(t.grid || (t.grid = {}))
}(wijmo || (wijmo = {}));