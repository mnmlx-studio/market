"use strict";

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).window = t.window || {});
}(undefined, function (t) {
  "use strict";
  var e = function e(t) {
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1e4;
    return t = parseFloat(t + "") || 0, Math.round((t + Number.EPSILON) * e) / e;
  },
      i = function i(t) {
    if (!(t && t instanceof Element && t.offsetParent)) return !1;var e = t.scrollHeight > t.clientHeight,
        i = window.getComputedStyle(t).overflowY,
        n = -1 !== i.indexOf("hidden"),
        s = -1 !== i.indexOf("visible");return e && !n && !s;
  },
      n = function n(t) {
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : void 0;
    return !(!t || t === document.body || e && t === e) && (i(t) ? t : n(t.parentElement, e));
  },
      s = function s(t) {
    var e = new DOMParser().parseFromString(t, "text/html").body;if (e.childElementCount > 1) {
      for (var i = document.createElement("div"); e.firstChild;) {
        i.appendChild(e.firstChild);
      }return i;
    }return e.firstChild;
  },
      o = function o(t) {
    return ("" + (t || "")).split(" ").filter(function (t) {
      return !!t;
    });
  },
      a = function a(t, e, i) {
    t && o(e).forEach(function (e) {
      t.classList.toggle(e, i || !1);
    });
  };
  var r = function r(t) {
    _classCallCheck(this, r);

    Object.defineProperty(this, "pageX", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "pageY", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "clientX", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "clientY", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "id", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "time", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "nativePointer", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), this.nativePointer = t, this.pageX = t.pageX, this.pageY = t.pageY, this.clientX = t.clientX, this.clientY = t.clientY, this.id = self.Touch && t instanceof Touch ? t.identifier : -1, this.time = Date.now();
  };

  var l = { passive: !1 };
  var c = function () {
    function c(t, _ref) {
      var _ref$start = _ref.start,
          e = _ref$start === undefined ? function () {
        return !0;
      } : _ref$start,
          _ref$move = _ref.move,
          i = _ref$move === undefined ? function () {} : _ref$move,
          _ref$end = _ref.end,
          n = _ref$end === undefined ? function () {} : _ref$end;

      _classCallCheck(this, c);

      Object.defineProperty(this, "element", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "startCallback", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "moveCallback", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "endCallback", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "currentPointers", { enumerable: !0, configurable: !0, writable: !0, value: [] }), Object.defineProperty(this, "startPointers", { enumerable: !0, configurable: !0, writable: !0, value: [] }), this.element = t, this.startCallback = e, this.moveCallback = i, this.endCallback = n;var _arr = ["onPointerStart", "onTouchStart", "onMove", "onTouchEnd", "onPointerEnd", "onWindowBlur"];
      for (var _i = 0; _i < _arr.length; _i++) {
        var _t2 = _arr[_i];this[_t2] = this[_t2].bind(this);
      }this.element.addEventListener("mousedown", this.onPointerStart, l), this.element.addEventListener("touchstart", this.onTouchStart, l), this.element.addEventListener("touchmove", this.onMove, l), this.element.addEventListener("touchend", this.onTouchEnd), this.element.addEventListener("touchcancel", this.onTouchEnd);
    }

    _createClass(c, [{
      key: "onPointerStart",
      value: function onPointerStart(t) {
        if (!t.buttons || 0 !== t.button) return;var e = new r(t);this.currentPointers.some(function (t) {
          return t.id === e.id;
        }) || this.triggerPointerStart(e, t) && (window.addEventListener("mousemove", this.onMove), window.addEventListener("mouseup", this.onPointerEnd), window.addEventListener("blur", this.onWindowBlur));
      }
    }, {
      key: "onTouchStart",
      value: function onTouchStart(t) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = Array.from(t.changedTouches || [])[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _e = _step.value;
            this.triggerPointerStart(new r(_e), t);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        window.addEventListener("blur", this.onWindowBlur);
      }
    }, {
      key: "onMove",
      value: function onMove(t) {
        var _this = this;

        var e = this.currentPointers.slice(),
            i = "changedTouches" in t ? Array.from(t.changedTouches || []).map(function (t) {
          return new r(t);
        }) : [new r(t)],
            n = [];
        var _loop = function _loop(_t3) {
          var e = _this.currentPointers.findIndex(function (e) {
            return e.id === _t3.id;
          });e < 0 || (n.push(_t3), _this.currentPointers[e] = _t3);
        };

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = i[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _t3 = _step2.value;

            _loop(_t3);
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        n.length && this.moveCallback(t, this.currentPointers.slice(), e);
      }
    }, {
      key: "onPointerEnd",
      value: function onPointerEnd(t) {
        t.buttons > 0 && 0 !== t.button || (this.triggerPointerEnd(t, new r(t)), window.removeEventListener("mousemove", this.onMove), window.removeEventListener("mouseup", this.onPointerEnd), window.removeEventListener("blur", this.onWindowBlur));
      }
    }, {
      key: "onTouchEnd",
      value: function onTouchEnd(t) {
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = Array.from(t.changedTouches || [])[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var _e2 = _step3.value;
            this.triggerPointerEnd(t, new r(_e2));
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }
      }
    }, {
      key: "triggerPointerStart",
      value: function triggerPointerStart(t, e) {
        return !!this.startCallback(e, t, this.currentPointers.slice()) && (this.currentPointers.push(t), this.startPointers.push(t), !0);
      }
    }, {
      key: "triggerPointerEnd",
      value: function triggerPointerEnd(t, e) {
        var i = this.currentPointers.findIndex(function (t) {
          return t.id === e.id;
        });i < 0 || (this.currentPointers.splice(i, 1), this.startPointers.splice(i, 1), this.endCallback(t, e, this.currentPointers.slice()));
      }
    }, {
      key: "onWindowBlur",
      value: function onWindowBlur() {
        this.clear();
      }
    }, {
      key: "clear",
      value: function clear() {
        for (; this.currentPointers.length;) {
          var _t4 = this.currentPointers[this.currentPointers.length - 1];this.currentPointers.splice(this.currentPointers.length - 1, 1), this.startPointers.splice(this.currentPointers.length - 1, 1), this.endCallback(new Event("touchend", { bubbles: !0, cancelable: !0, clientX: _t4.clientX, clientY: _t4.clientY }), _t4, this.currentPointers.slice());
        }
      }
    }, {
      key: "stop",
      value: function stop() {
        this.element.removeEventListener("mousedown", this.onPointerStart, l), this.element.removeEventListener("touchstart", this.onTouchStart, l), this.element.removeEventListener("touchmove", this.onMove, l), this.element.removeEventListener("touchend", this.onTouchEnd), this.element.removeEventListener("touchcancel", this.onTouchEnd), window.removeEventListener("mousemove", this.onMove), window.removeEventListener("mouseup", this.onPointerEnd), window.removeEventListener("blur", this.onWindowBlur);
      }
    }]);

    return c;
  }();

  function h(t, e) {
    return e ? Math.sqrt(Math.pow(e.clientX - t.clientX, 2) + Math.pow(e.clientY - t.clientY, 2)) : 0;
  }function d(t, e) {
    return e ? { clientX: (t.clientX + e.clientX) / 2, clientY: (t.clientY + e.clientY) / 2 } : t;
  }var u = function u(t) {
    return "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && null !== t && t.constructor === Object && "[object Object]" === Object.prototype.toString.call(t);
  },
      p = function p(t) {
    for (var _len = arguments.length, e = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      e[_key - 1] = arguments[_key];
    }

    var i = e.length;for (var _n = 0; _n < i; _n++) {
      var _i2 = e[_n] || {};Object.entries(_i2).forEach(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
            e = _ref3[0],
            i = _ref3[1];

        var n = Array.isArray(i) ? [] : {};t[e] || Object.assign(t, _defineProperty({}, e, n)), u(i) ? Object.assign(t[e], p(n, i)) : Array.isArray(i) ? Object.assign(t, _defineProperty({}, e, [].concat(_toConsumableArray(i)))) : Object.assign(t, _defineProperty({}, e, i));
      });
    }return t;
  },
      f = function f(t, e) {
    return t.split(".").reduce(function (t, e) {
      return "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? t[e] : void 0;
    }, e);
  };
  var g = function () {
    function g() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, g);

      Object.defineProperty(this, "options", { enumerable: !0, configurable: !0, writable: !0, value: t }), Object.defineProperty(this, "events", { enumerable: !0, configurable: !0, writable: !0, value: new Map() }), this.setOptions(t);var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = Object.getOwnPropertyNames(Object.getPrototypeOf(this))[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var _t5 = _step4.value;
          _t5.startsWith("on") && "function" == typeof this[_t5] && (this[_t5] = this[_t5].bind(this));
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }
    }

    _createClass(g, [{
      key: "setOptions",
      value: function setOptions(t) {
        this.options = t ? p({}, this.constructor.defaults, t) : {};var _iteratorNormalCompletion5 = true;
        var _didIteratorError5 = false;
        var _iteratorError5 = undefined;

        try {
          for (var _iterator5 = Object.entries(this.option("on") || {})[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
            var _ref4 = _step5.value;

            var _ref5 = _slicedToArray(_ref4, 2);

            var _t6 = _ref5[0];
            var _e3 = _ref5[1];
            this.on(_t6, _e3);
          }
        } catch (err) {
          _didIteratorError5 = true;
          _iteratorError5 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion5 && _iterator5.return) {
              _iterator5.return();
            }
          } finally {
            if (_didIteratorError5) {
              throw _iteratorError5;
            }
          }
        }
      }
    }, {
      key: "option",
      value: function option(t) {
        var _i3;

        var i = f(t, this.options);
        for (var _len2 = arguments.length, e = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          e[_key2 - 1] = arguments[_key2];
        }

        return i && "function" == typeof i && (i = (_i3 = i).call.apply(_i3, [this, this].concat(e))), i;
      }
    }, {
      key: "optionFor",
      value: function optionFor(t, e, i) {
        var _s;

        var s = f(e, t);var o;
        for (var _len3 = arguments.length, n = Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {
          n[_key3 - 3] = arguments[_key3];
        }

        "string" != typeof (o = s) || isNaN(o) || isNaN(parseFloat(o)) || (s = parseFloat(s)), "true" === s && (s = !0), "false" === s && (s = !1), s && "function" == typeof s && (s = (_s = s).call.apply(_s, [this, this, t].concat(n)));var a = f(e, this.options);return a && "function" == typeof a ? s = a.call.apply(a, [this, this, t].concat(n, [s])) : void 0 === s && (s = a), void 0 === s ? i : s;
      }
    }, {
      key: "cn",
      value: function cn(t) {
        var e = this.options.classes;return e && e[t] || "";
      }
    }, {
      key: "localize",
      value: function localize(t) {
        var _this2 = this;

        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        t = String(t).replace(/\{\{(\w+).?(\w+)?\}\}/g, function (t, e, i) {
          var n = "";return i ? n = _this2.option(e[0] + e.toLowerCase().substring(1) + ".l10n." + i) : e && (n = _this2.option("l10n." + e)), n || (n = t), n;
        });for (var _i4 = 0; _i4 < e.length; _i4++) {
          t = t.split(e[_i4][0]).join(e[_i4][1]);
        }return t = t.replace(/\{\{(.*?)\}\}/g, function (t, e) {
          return e;
        });
      }
    }, {
      key: "on",
      value: function on(t, e) {
        var _this3 = this;

        var i = [];"string" == typeof t ? i = t.split(" ") : Array.isArray(t) && (i = t), this.events || (this.events = new Map()), i.forEach(function (t) {
          var i = _this3.events.get(t);i || (_this3.events.set(t, []), i = []), i.includes(e) || i.push(e), _this3.events.set(t, i);
        });
      }
    }, {
      key: "off",
      value: function off(t, e) {
        var _this4 = this;

        var i = [];"string" == typeof t ? i = t.split(" ") : Array.isArray(t) && (i = t), i.forEach(function (t) {
          var i = _this4.events.get(t);if (Array.isArray(i)) {
            var _t7 = i.indexOf(e);_t7 > -1 && i.splice(_t7, 1);
          }
        });
      }
    }, {
      key: "emit",
      value: function emit(t) {
        var _this5 = this;

        for (var _len4 = arguments.length, e = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
          e[_key4 - 1] = arguments[_key4];
        }

        [].concat(_toConsumableArray(this.events.get(t) || [])).forEach(function (t) {
          return t.apply(undefined, [_this5].concat(e));
        }), "*" !== t && this.emit.apply(this, ["*", t].concat(e));
      }
    }]);

    return g;
  }();

  Object.defineProperty(g, "version", { enumerable: !0, configurable: !0, writable: !0, value: "5.0.36" }), Object.defineProperty(g, "defaults", { enumerable: !0, configurable: !0, writable: !0, value: {} });
  var m = function (_g) {
    _inherits(m, _g);

    function m() {
      var _this6;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, m);

      (_this6 = _possibleConstructorReturn(this, (m.__proto__ || Object.getPrototypeOf(m)).call(this, t)), _this6), Object.defineProperty(_this6, "plugins", { enumerable: !0, configurable: !0, writable: !0, value: {} });return _this6;
    }

    _createClass(m, [{
      key: "attachPlugins",
      value: function attachPlugins() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var e = new Map();var _iteratorNormalCompletion6 = true;
        var _didIteratorError6 = false;
        var _iteratorError6 = undefined;

        try {
          for (var _iterator6 = Object.entries(t)[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
            var _ref6 = _step6.value;

            var _ref7 = _slicedToArray(_ref6, 2);

            var _i5 = _ref7[0];
            var _n2 = _ref7[1];
            var _t8 = this.option(_i5),
                _s2 = this.plugins[_i5];_s2 || !1 === _t8 ? _s2 && !1 === _t8 && (_s2.detach(), delete this.plugins[_i5]) : e.set(_i5, new _n2(this, _t8 || {}));
          }
        } catch (err) {
          _didIteratorError6 = true;
          _iteratorError6 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion6 && _iterator6.return) {
              _iterator6.return();
            }
          } finally {
            if (_didIteratorError6) {
              throw _iteratorError6;
            }
          }
        }

        var _iteratorNormalCompletion7 = true;
        var _didIteratorError7 = false;
        var _iteratorError7 = undefined;

        try {
          for (var _iterator7 = e[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
            var _ref8 = _step7.value;

            var _ref9 = _slicedToArray(_ref8, 2);

            var _t9 = _ref9[0];
            var _i6 = _ref9[1];
            this.plugins[_t9] = _i6, _i6.attach();
          }
        } catch (err) {
          _didIteratorError7 = true;
          _iteratorError7 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion7 && _iterator7.return) {
              _iterator7.return();
            }
          } finally {
            if (_didIteratorError7) {
              throw _iteratorError7;
            }
          }
        }
      }
    }, {
      key: "detachPlugins",
      value: function detachPlugins(t) {
        t = t || Object.keys(this.plugins);var _iteratorNormalCompletion8 = true;
        var _didIteratorError8 = false;
        var _iteratorError8 = undefined;

        try {
          for (var _iterator8 = t[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
            var _e4 = _step8.value;
            var _t10 = this.plugins[_e4];_t10 && _t10.detach(), delete this.plugins[_e4];
          }
        } catch (err) {
          _didIteratorError8 = true;
          _iteratorError8 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion8 && _iterator8.return) {
              _iterator8.return();
            }
          } finally {
            if (_didIteratorError8) {
              throw _iteratorError8;
            }
          }
        }

        return this.emit("detachPlugins"), this;
      }
    }]);

    return m;
  }(g);

  var v;!function (t) {
    t[t.Init = 0] = "Init", t[t.Error = 1] = "Error", t[t.Ready = 2] = "Ready", t[t.Panning = 3] = "Panning", t[t.Mousemove = 4] = "Mousemove", t[t.Destroy = 5] = "Destroy";
  }(v || (v = {}));var b = ["a", "b", "c", "d", "e", "f"],
      y = { PANUP: "Move up", PANDOWN: "Move down", PANLEFT: "Move left", PANRIGHT: "Move right", ZOOMIN: "Zoom in", ZOOMOUT: "Zoom out", TOGGLEZOOM: "Toggle zoom level", TOGGLE1TO1: "Toggle zoom level", ITERATEZOOM: "Toggle zoom level", ROTATECCW: "Rotate counterclockwise", ROTATECW: "Rotate clockwise", FLIPX: "Flip horizontally", FLIPY: "Flip vertically", FITX: "Fit horizontally", FITY: "Fit vertically", RESET: "Reset", TOGGLEFS: "Toggle fullscreen" },
      w = { content: null, width: "auto", height: "auto", panMode: "drag", touch: !0, dragMinThreshold: 3, lockAxis: !1, mouseMoveFactor: 1, mouseMoveFriction: .12, zoom: !0, pinchToZoom: !0, panOnlyZoomed: "auto", minScale: 1, maxScale: 2, friction: .25, dragFriction: .35, decelFriction: .05, click: "toggleZoom", dblClick: !1, wheel: "zoom", wheelLimit: 7, spinner: !0, bounds: "auto", infinite: !1, rubberband: !0, bounce: !0, maxVelocity: 75, transformParent: !1, classes: { content: "f-panzoom__content", isLoading: "is-loading", canZoomIn: "can-zoom_in", canZoomOut: "can-zoom_out", isDraggable: "is-draggable", isDragging: "is-dragging", inFullscreen: "in-fullscreen", htmlHasFullscreen: "with-panzoom-in-fullscreen" }, l10n: y },
      x = '<circle cx="25" cy="25" r="20"></circle>',
      E = '<div class="f-spinner"><svg viewBox="0 0 50 50">' + x + x + "</svg></div>",
      S = function S(t) {
    return t && null !== t && t instanceof Element && "nodeType" in t;
  },
      P = function P(t, e) {
    t && o(e).forEach(function (e) {
      t.classList.remove(e);
    });
  },
      C = function C(t, e) {
    t && o(e).forEach(function (e) {
      t.classList.add(e);
    });
  },
      T = { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 },
      M = 1e5,
      O = 1e4,
      A = "mousemove",
      L = "drag",
      z = "content",
      R = "auto";var k = null,
      I = null;
  var D = function (_m) {
    _inherits(D, _m);

    _createClass(D, [{
      key: "fits",
      get: function get() {
        return this.contentRect.width - this.contentRect.fitWidth < 1 && this.contentRect.height - this.contentRect.fitHeight < 1;
      }
    }, {
      key: "isTouchDevice",
      get: function get() {
        return null === I && (I = window.matchMedia("(hover: none)").matches), I;
      }
    }, {
      key: "isMobile",
      get: function get() {
        return null === k && (k = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)), k;
      }
    }, {
      key: "panMode",
      get: function get() {
        return this.options.panMode !== A || this.isTouchDevice ? L : A;
      }
    }, {
      key: "panOnlyZoomed",
      get: function get() {
        var t = this.options.panOnlyZoomed;return t === R ? this.isTouchDevice : t;
      }
    }, {
      key: "isInfinite",
      get: function get() {
        return this.option("infinite");
      }
    }, {
      key: "angle",
      get: function get() {
        return 180 * Math.atan2(this.current.b, this.current.a) / Math.PI || 0;
      }
    }, {
      key: "targetAngle",
      get: function get() {
        return 180 * Math.atan2(this.target.b, this.target.a) / Math.PI || 0;
      }
    }, {
      key: "scale",
      get: function get() {
        var _current = this.current,
            t = _current.a,
            e = _current.b;
        return Math.sqrt(t * t + e * e) || 1;
      }
    }, {
      key: "targetScale",
      get: function get() {
        var _target = this.target,
            t = _target.a,
            e = _target.b;
        return Math.sqrt(t * t + e * e) || 1;
      }
    }, {
      key: "minScale",
      get: function get() {
        return this.option("minScale") || 1;
      }
    }, {
      key: "fullScale",
      get: function get() {
        var t = this.contentRect;
        return t.fullWidth / t.fitWidth || 1;
      }
    }, {
      key: "maxScale",
      get: function get() {
        return this.fullScale * (this.option("maxScale") || 1) || 1;
      }
    }, {
      key: "coverScale",
      get: function get() {
        var t = this.containerRect,
            e = this.contentRect,
            i = Math.max(t.height / e.fitHeight, t.width / e.fitWidth) || 1;
        return Math.min(this.fullScale, i);
      }
    }, {
      key: "isScaling",
      get: function get() {
        return Math.abs(this.targetScale - this.scale) > 1e-5 && !this.isResting;
      }
    }, {
      key: "isContentLoading",
      get: function get() {
        var t = this.content;return !!(t && t instanceof HTMLImageElement) && !t.complete;
      }
    }, {
      key: "isResting",
      get: function get() {
        if (this.isBouncingX || this.isBouncingY) return !1;var _iteratorNormalCompletion9 = true;
        var _didIteratorError9 = false;
        var _iteratorError9 = undefined;

        try {
          for (var _iterator9 = b[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
            var t = _step9.value;
            var _e5 = "e" == t || "f" === t ? 1e-4 : 1e-5;if (Math.abs(this.target[t] - this.current[t]) > _e5) return !1;
          }
        } catch (err) {
          _didIteratorError9 = true;
          _iteratorError9 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion9 && _iterator9.return) {
              _iterator9.return();
            }
          } finally {
            if (_didIteratorError9) {
              throw _iteratorError9;
            }
          }
        }

        return !(!this.ignoreBounds && !this.checkBounds().inBounds);
      }
    }]);

    function D(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var _this7;

      var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      _classCallCheck(this, D);

      var n;if ((_this7 = _possibleConstructorReturn(this, (D.__proto__ || Object.getPrototypeOf(D)).call(this, e)), _this7), Object.defineProperty(_this7, "pointerTracker", { enumerable: !0, configurable: !0, writable: !0, value: null }), Object.defineProperty(_this7, "resizeObserver", { enumerable: !0, configurable: !0, writable: !0, value: null }), Object.defineProperty(_this7, "updateTimer", { enumerable: !0, configurable: !0, writable: !0, value: null }), Object.defineProperty(_this7, "clickTimer", { enumerable: !0, configurable: !0, writable: !0, value: null }), Object.defineProperty(_this7, "rAF", { enumerable: !0, configurable: !0, writable: !0, value: null }), Object.defineProperty(_this7, "isTicking", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(_this7, "ignoreBounds", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(_this7, "isBouncingX", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(_this7, "isBouncingY", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(_this7, "clicks", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(_this7, "trackingPoints", { enumerable: !0, configurable: !0, writable: !0, value: [] }), Object.defineProperty(_this7, "pwt", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(_this7, "cwd", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(_this7, "pmme", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(_this7, "friction", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(_this7, "state", { enumerable: !0, configurable: !0, writable: !0, value: v.Init }), Object.defineProperty(_this7, "isDragging", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(_this7, "container", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(_this7, "content", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(_this7, "spinner", { enumerable: !0, configurable: !0, writable: !0, value: null }), Object.defineProperty(_this7, "containerRect", { enumerable: !0, configurable: !0, writable: !0, value: { width: 0, height: 0, innerWidth: 0, innerHeight: 0 } }), Object.defineProperty(_this7, "contentRect", { enumerable: !0, configurable: !0, writable: !0, value: { top: 0, right: 0, bottom: 0, left: 0, fullWidth: 0, fullHeight: 0, fitWidth: 0, fitHeight: 0, width: 0, height: 0 } }), Object.defineProperty(_this7, "dragStart", { enumerable: !0, configurable: !0, writable: !0, value: { x: 0, y: 0, top: 0, left: 0, time: 0 } }), Object.defineProperty(_this7, "dragOffset", { enumerable: !0, configurable: !0, writable: !0, value: { x: 0, y: 0, time: 0 } }), Object.defineProperty(_this7, "current", { enumerable: !0, configurable: !0, writable: !0, value: Object.assign({}, T) }), Object.defineProperty(_this7, "target", { enumerable: !0, configurable: !0, writable: !0, value: Object.assign({}, T) }), Object.defineProperty(_this7, "velocity", { enumerable: !0, configurable: !0, writable: !0, value: { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0 } }), Object.defineProperty(_this7, "lockedAxis", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), !t) throw new Error("Container Element Not Found");_this7.container = t, _this7.initContent(), _this7.attachPlugins(Object.assign(Object.assign({}, D.Plugins), i)), _this7.emit("attachPlugins"), _this7.emit("init");var o = _this7.content;if (o.addEventListener("load", _this7.onLoad), o.addEventListener("error", _this7.onError), _this7.isContentLoading) {
        if (_this7.option("spinner")) {
          t.classList.add(_this7.cn("isLoading"));var _e6 = s(E);!t.contains(o) || o.parentElement instanceof HTMLPictureElement ? _this7.spinner = t.appendChild(_e6) : _this7.spinner = (null === (n = o.parentElement) || void 0 === n ? void 0 : n.insertBefore(_e6, o)) || null;
        }_this7.emit("beforeLoad");
      } else queueMicrotask(function () {
        _this7.enable();
      });return _possibleConstructorReturn(_this7);
    }

    _createClass(D, [{
      key: "initContent",
      value: function initContent() {
        var t = this.container,
            e = this.cn(z);var i = this.option(z) || t.querySelector("." + e);if (i || (i = t.querySelector("img,picture") || t.firstElementChild, i && C(i, e)), i instanceof HTMLPictureElement && (i = i.querySelector("img")), !i) throw new Error("No content found");this.content = i;
      }
    }, {
      key: "onLoad",
      value: function onLoad() {
        var t = this.spinner,
            e = this.container,
            i = this.state;
        t && (t.remove(), this.spinner = null), this.option("spinner") && e.classList.remove(this.cn("isLoading")), this.emit("afterLoad"), i === v.Init ? this.enable() : this.updateMetrics();
      }
    }, {
      key: "onError",
      value: function onError() {
        this.state !== v.Destroy && (this.spinner && (this.spinner.remove(), this.spinner = null), this.stop(), this.detachEvents(), this.state = v.Error, this.emit("error"));
      }
    }, {
      key: "getNextScale",
      value: function getNextScale(t) {
        var e = this.fullScale,
            i = this.targetScale,
            n = this.coverScale,
            s = this.maxScale,
            o = this.minScale;
        var a = o;switch (_t11) {case "toggleMax":
            a = i - o < .5 * (s - o) ? s : o;break;case "toggleCover":
            a = i - o < .5 * (n - o) ? n : o;break;case "toggleZoom":
            a = i - o < .5 * (e - o) ? e : o;break;case "iterateZoom":
            var _t11 = [1, e, s].sort(function (t, e) {
              return t - e;
            }),
                _r = _t11.findIndex(function (t) {
              return t > i + 1e-5;
            });a = _t11[_r] || 1;}return a;
      }
    }, {
      key: "attachObserver",
      value: function attachObserver() {
        var _this8 = this;

        var t;var e = function e() {
          var t = _this8.container,
              e = _this8.containerRect;
          return Math.abs(e.width - t.getBoundingClientRect().width) > .1 || Math.abs(e.height - t.getBoundingClientRect().height) > .1;
        };this.resizeObserver || void 0 === window.ResizeObserver || (this.resizeObserver = new ResizeObserver(function () {
          _this8.updateTimer || (e() ? (_this8.onResize(), _this8.isMobile && (_this8.updateTimer = setTimeout(function () {
            e() && _this8.onResize(), _this8.updateTimer = null;
          }, 500))) : _this8.updateTimer && (clearTimeout(_this8.updateTimer), _this8.updateTimer = null));
        })), null === (t = this.resizeObserver) || void 0 === t || t.observe(this.container);
      }
    }, {
      key: "detachObserver",
      value: function detachObserver() {
        var t;null === (t = this.resizeObserver) || void 0 === t || t.disconnect();
      }
    }, {
      key: "attachEvents",
      value: function attachEvents() {
        var t = this.container;
        t.addEventListener("click", this.onClick, { passive: !1, capture: !1 }), t.addEventListener("wheel", this.onWheel, { passive: !1 }), this.pointerTracker = new c(t, { start: this.onPointerDown, move: this.onPointerMove, end: this.onPointerUp }), document.addEventListener(A, this.onMouseMove);
      }
    }, {
      key: "detachEvents",
      value: function detachEvents() {
        var t;var e = this.container;
        e.removeEventListener("click", this.onClick, { passive: !1, capture: !1 }), e.removeEventListener("wheel", this.onWheel, { passive: !1 }), null === (t = this.pointerTracker) || void 0 === t || t.stop(), this.pointerTracker = null, document.removeEventListener(A, this.onMouseMove), document.removeEventListener("keydown", this.onKeydown, !0), this.clickTimer && (clearTimeout(this.clickTimer), this.clickTimer = null), this.updateTimer && (clearTimeout(this.updateTimer), this.updateTimer = null);
      }
    }, {
      key: "animate",
      value: function animate() {
        var _this9 = this;

        this.setTargetForce();var t = this.friction,
            e = this.option("maxVelocity");var _iteratorNormalCompletion10 = true;
        var _didIteratorError10 = false;
        var _iteratorError10 = undefined;

        try {
          for (var _iterator10 = b[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
            var _i7 = _step10.value;
            t ? (this.velocity[_i7] *= 1 - t, e && !this.isScaling && (this.velocity[_i7] = Math.max(Math.min(this.velocity[_i7], e), -1 * e)), this.current[_i7] += this.velocity[_i7]) : this.current[_i7] = this.target[_i7];
          }
        } catch (err) {
          _didIteratorError10 = true;
          _iteratorError10 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion10 && _iterator10.return) {
              _iterator10.return();
            }
          } finally {
            if (_didIteratorError10) {
              throw _iteratorError10;
            }
          }
        }

        this.setTransform(), this.setEdgeForce(), !this.isResting || this.isDragging ? this.rAF = requestAnimationFrame(function () {
          return _this9.animate();
        }) : this.stop("current");
      }
    }, {
      key: "setTargetForce",
      value: function setTargetForce() {
        var _iteratorNormalCompletion11 = true;
        var _didIteratorError11 = false;
        var _iteratorError11 = undefined;

        try {
          for (var _iterator11 = b[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
            var t = _step11.value;
            "e" === t && this.isBouncingX || "f" === t && this.isBouncingY || (this.velocity[t] = (1 / (1 - this.friction) - 1) * (this.target[t] - this.current[t]));
          }
        } catch (err) {
          _didIteratorError11 = true;
          _iteratorError11 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion11 && _iterator11.return) {
              _iterator11.return();
            }
          } finally {
            if (_didIteratorError11) {
              throw _iteratorError11;
            }
          }
        }
      }
    }, {
      key: "checkBounds",
      value: function checkBounds() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var i = this.current,
            n = i.e + t,
            s = i.f + e,
            o = this.getBounds(),
            a = o.x,
            r = o.y,
            l = a.min,
            c = a.max,
            h = r.min,
            d = r.max;var u = 0,
            p = 0;return l !== 1 / 0 && n < l ? u = l - n : c !== 1 / 0 && n > c && (u = c - n), h !== 1 / 0 && s < h ? p = h - s : d !== 1 / 0 && s > d && (p = d - s), Math.abs(u) < 1e-4 && (u = 0), Math.abs(p) < 1e-4 && (p = 0), Object.assign(Object.assign({}, o), { xDiff: u, yDiff: p, inBounds: !u && !p });
      }
    }, {
      key: "clampTargetBounds",
      value: function clampTargetBounds() {
        var t = this.target,
            _getBounds = this.getBounds(),
            e = _getBounds.x,
            i = _getBounds.y;e.min !== 1 / 0 && (t.e = Math.max(t.e, e.min)), e.max !== 1 / 0 && (t.e = Math.min(t.e, e.max)), i.min !== 1 / 0 && (t.f = Math.max(t.f, i.min)), i.max !== 1 / 0 && (t.f = Math.min(t.f, i.max));
      }
    }, {
      key: "calculateContentDim",
      value: function calculateContentDim() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.current;
        var e = this.content,
            i = this.contentRect,
            n = i.fitWidth,
            s = i.fitHeight,
            o = i.fullWidth,
            a = i.fullHeight;
        var r = o,
            l = a;if (this.option("zoom") || 0 !== this.angle) {
          var _i8 = !(e instanceof HTMLImageElement) && ("none" === window.getComputedStyle(e).maxWidth || "none" === window.getComputedStyle(e).maxHeight),
              _c = _i8 ? o : n,
              _h = _i8 ? a : s,
              _d = this.getMatrix(t),
              _u = new DOMPoint(0, 0).matrixTransform(_d),
              _p = new DOMPoint(0 + _c, 0).matrixTransform(_d),
              _f = new DOMPoint(0 + _c, 0 + _h).matrixTransform(_d),
              _g2 = new DOMPoint(0, 0 + _h).matrixTransform(_d),
              _m2 = Math.abs(_f.x - _u.x),
              _v = Math.abs(_f.y - _u.y),
              _b = Math.abs(_g2.x - _p.x),
              _y = Math.abs(_g2.y - _p.y);r = Math.max(_m2, _b), l = Math.max(_v, _y);
        }return { contentWidth: r, contentHeight: l };
      }
    }, {
      key: "setEdgeForce",
      value: function setEdgeForce() {
        if (this.ignoreBounds || this.isDragging || this.panMode === A || this.targetScale < this.scale) return this.isBouncingX = !1, void (this.isBouncingY = !1);var t = this.target,
            _checkBounds = this.checkBounds(),
            e = _checkBounds.x,
            i = _checkBounds.y,
            n = _checkBounds.xDiff,
            s = _checkBounds.yDiff;var o = this.option("maxVelocity");var a = this.velocity.e,
            r = this.velocity.f;0 !== n ? (this.isBouncingX = !0, n * a <= 0 ? a += .14 * n : (a = .14 * n, e.min !== 1 / 0 && (this.target.e = Math.max(t.e, e.min)), e.max !== 1 / 0 && (this.target.e = Math.min(t.e, e.max))), o && (a = Math.max(Math.min(a, o), -1 * o))) : this.isBouncingX = !1, 0 !== s ? (this.isBouncingY = !0, s * r <= 0 ? r += .14 * s : (r = .14 * s, i.min !== 1 / 0 && (this.target.f = Math.max(t.f, i.min)), i.max !== 1 / 0 && (this.target.f = Math.min(t.f, i.max))), o && (r = Math.max(Math.min(r, o), -1 * o))) : this.isBouncingY = !1, this.isBouncingX && (this.velocity.e = a), this.isBouncingY && (this.velocity.f = r);
      }
    }, {
      key: "enable",
      value: function enable() {
        var t = this.content,
            e = new DOMMatrixReadOnly(window.getComputedStyle(t).transform);var _iteratorNormalCompletion12 = true;
        var _didIteratorError12 = false;
        var _iteratorError12 = undefined;

        try {
          for (var _iterator12 = b[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
            var _t12 = _step12.value;
            this.current[_t12] = this.target[_t12] = e[_t12];
          }
        } catch (err) {
          _didIteratorError12 = true;
          _iteratorError12 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion12 && _iterator12.return) {
              _iterator12.return();
            }
          } finally {
            if (_didIteratorError12) {
              throw _iteratorError12;
            }
          }
        }

        this.updateMetrics(), this.attachObserver(), this.attachEvents(), this.state = v.Ready, this.emit("ready");
      }
    }, {
      key: "onClick",
      value: function onClick(t) {
        var _this10 = this;

        var e;"click" === t.type && 0 === t.detail && (this.dragOffset.x = 0, this.dragOffset.y = 0), this.isDragging && (null === (e = this.pointerTracker) || void 0 === e || e.clear(), this.trackingPoints = [], this.startDecelAnim());var i = t.target;if (!i || t.defaultPrevented) return;if (i.hasAttribute("disabled")) return t.preventDefault(), void t.stopPropagation();if (function () {
          var t = window.getSelection();return t && "Range" === t.type;
        }() && !i.closest("button")) return;var n = i.closest("[data-panzoom-action]"),
            s = i.closest("[data-panzoom-change]"),
            o = n || s,
            a = o && S(o) ? o.dataset : null;if (a) {
          var _e7 = a.panzoomChange,
              _i9 = a.panzoomAction;if ((_e7 || _i9) && t.preventDefault(), _e7) {
            var _t13 = {};try {
              _t13 = JSON.parse(_e7);
            } catch (t) {
              console && console.warn("The given data was not valid JSON");
            }return void this.applyChange(_t13);
          }if (_i9) return void (this[_i9] && this[_i9]());
        }if (Math.abs(this.dragOffset.x) > 3 || Math.abs(this.dragOffset.y) > 3) return t.preventDefault(), void t.stopPropagation();if (i.closest("[data-fancybox]")) return;var r = this.content.getBoundingClientRect(),
            l = this.dragStart;if (l.time && !this.canZoomOut() && (Math.abs(r.x - l.x) > 2 || Math.abs(r.y - l.y) > 2)) return;this.dragStart.time = 0;var c = function c(e) {
          _this10.option("zoom", t) && e && "string" == typeof e && /(iterateZoom)|(toggle(Zoom|Full|Cover|Max)|(zoomTo(Fit|Cover|Max)))/.test(e) && "function" == typeof _this10[e] && (t.preventDefault(), _this10[e]({ event: t }));
        },
            h = this.option("click", t),
            d = this.option("dblClick", t);d ? (this.clicks++, 1 == this.clicks && (this.clickTimer = setTimeout(function () {
          1 === _this10.clicks ? (_this10.emit("click", t), !t.defaultPrevented && h && c(h)) : (_this10.emit("dblClick", t), t.defaultPrevented || c(d)), _this10.clicks = 0, _this10.clickTimer = null;
        }, 350))) : (this.emit("click", t), !t.defaultPrevented && h && c(h));
      }
    }, {
      key: "addTrackingPoint",
      value: function addTrackingPoint(t) {
        var e = this.trackingPoints.filter(function (t) {
          return t.time > Date.now() - 100;
        });e.push(t), this.trackingPoints = e;
      }
    }, {
      key: "onPointerDown",
      value: function onPointerDown(t, e, i) {
        var n;if (!1 === this.option("touch", t)) return !1;this.pwt = 0, this.dragOffset = { x: 0, y: 0, time: 0 }, this.trackingPoints = [];var s = this.content.getBoundingClientRect();if (this.dragStart = { x: s.x, y: s.y, top: s.top, left: s.left, time: Date.now() }, this.clickTimer) return !1;if (this.panMode === A && this.targetScale > 1) return t.preventDefault(), t.stopPropagation(), !1;var o = t.composedPath()[0];if (!i.length) {
          if (["TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO", "IFRAME"].includes(o.nodeName) || o.closest("[contenteditable],[data-selectable],[data-draggable],[data-clickable],[data-panzoom-change],[data-panzoom-action]")) return !1;null === (n = window.getSelection()) || void 0 === n || n.removeAllRanges();
        }if ("mousedown" === t.type) ["A", "BUTTON"].includes(o.nodeName) || t.preventDefault();else if (Math.abs(this.velocity.a) > .3) return !1;return this.target.e = this.current.e, this.target.f = this.current.f, this.stop(), this.isDragging || (this.isDragging = !0, this.addTrackingPoint(e), this.emit("touchStart", t)), !0;
      }
    }, {
      key: "onPointerMove",
      value: function onPointerMove(t, i, s) {
        if (!1 === this.option("touch", t)) return;if (!this.isDragging) return;if (i.length < 2 && this.panOnlyZoomed && e(this.targetScale) <= e(this.minScale)) return;if (this.emit("touchMove", t), t.defaultPrevented) return;this.addTrackingPoint(i[0]);var o = this.content,
            a = d(s[0], s[1]),
            r = d(i[0], i[1]);var l = 0,
            c = 0;if (i.length > 1) {
          var _t14 = o.getBoundingClientRect();l = a.clientX - _t14.left - .5 * _t14.width, c = a.clientY - _t14.top - .5 * _t14.height;
        }var u = h(s[0], s[1]),
            p = h(i[0], i[1]);var f = u ? p / u : 1,
            g = r.clientX - a.clientX,
            m = r.clientY - a.clientY;this.dragOffset.x += g, this.dragOffset.y += m, this.dragOffset.time = Date.now() - this.dragStart.time;var v = e(this.targetScale) === e(this.minScale) && this.option("lockAxis");if (v && !this.lockedAxis) if ("xy" === v || "y" === v || "touchmove" === t.type) {
          if (Math.abs(this.dragOffset.x) < 6 && Math.abs(this.dragOffset.y) < 6) return void t.preventDefault();var _e8 = Math.abs(180 * Math.atan2(this.dragOffset.y, this.dragOffset.x) / Math.PI);this.lockedAxis = _e8 > 45 && _e8 < 135 ? "y" : "x", this.dragOffset.x = 0, this.dragOffset.y = 0, g = 0, m = 0;
        } else this.lockedAxis = v;if (n(t.target, this.content) && (v = "x", this.dragOffset.y = 0), v && "xy" !== v && this.lockedAxis !== v && e(this.targetScale) === e(this.minScale)) return;t.cancelable && t.preventDefault(), this.container.classList.add(this.cn("isDragging"));var b = this.checkBounds(g, m);this.option("rubberband") ? ("x" !== this.isInfinite && (b.xDiff > 0 && g < 0 || b.xDiff < 0 && g > 0) && (g *= Math.max(0, .5 - Math.abs(.75 / this.contentRect.fitWidth * b.xDiff))), "y" !== this.isInfinite && (b.yDiff > 0 && m < 0 || b.yDiff < 0 && m > 0) && (m *= Math.max(0, .5 - Math.abs(.75 / this.contentRect.fitHeight * b.yDiff)))) : (b.xDiff && (g = 0), b.yDiff && (m = 0));var y = this.targetScale,
            w = this.minScale,
            x = this.maxScale;y < .5 * w && (f = Math.max(f, w)), y > 1.5 * x && (f = Math.min(f, x)), "y" === this.lockedAxis && e(y) === e(w) && (g = 0), "x" === this.lockedAxis && e(y) === e(w) && (m = 0), this.applyChange({ originX: l, originY: c, panX: g, panY: m, scale: f, friction: this.option("dragFriction"), ignoreBounds: !0 });
      }
    }, {
      key: "onPointerUp",
      value: function onPointerUp(t, e, i) {
        if (i.length) return this.dragOffset.x = 0, this.dragOffset.y = 0, void (this.trackingPoints = []);this.container.classList.remove(this.cn("isDragging")), this.isDragging && (this.addTrackingPoint(e), this.panOnlyZoomed && this.contentRect.width - this.contentRect.fitWidth < 1 && this.contentRect.height - this.contentRect.fitHeight < 1 && (this.trackingPoints = []), n(t.target, this.content) && "y" === this.lockedAxis && (this.trackingPoints = []), this.emit("touchEnd", t), this.isDragging = !1, this.lockedAxis = !1, this.state !== v.Destroy && (t.defaultPrevented || this.startDecelAnim()));
      }
    }, {
      key: "startDecelAnim",
      value: function startDecelAnim() {
        var t;var i = this.isScaling;this.rAF && (cancelAnimationFrame(this.rAF), this.rAF = null), this.isBouncingX = !1, this.isBouncingY = !1;var _iteratorNormalCompletion13 = true;
        var _didIteratorError13 = false;
        var _iteratorError13 = undefined;

        try {
          for (var _iterator13 = b[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
            var _t15 = _step13.value;
            this.velocity[_t15] = 0;
          }
        } catch (err) {
          _didIteratorError13 = true;
          _iteratorError13 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion13 && _iterator13.return) {
              _iterator13.return();
            }
          } finally {
            if (_didIteratorError13) {
              throw _iteratorError13;
            }
          }
        }

        this.target.e = this.current.e, this.target.f = this.current.f, P(this.container, "is-scaling"), P(this.container, "is-animating"), this.isTicking = !1;var n = this.trackingPoints,
            s = n[0],
            o = n[n.length - 1];var a = 0,
            r = 0,
            l = 0;o && s && (a = o.clientX - s.clientX, r = o.clientY - s.clientY, l = o.time - s.time);var c = (null === (t = window.visualViewport) || void 0 === t ? void 0 : t.scale) || 1;1 !== c && (a *= c, r *= c);var h = 0,
            d = 0,
            u = 0,
            p = 0,
            f = this.option("decelFriction");var g = this.targetScale;if (l > 0) {
          u = Math.abs(a) > 3 ? a / (l / 30) : 0, p = Math.abs(r) > 3 ? r / (l / 30) : 0;var _t16 = this.option("maxVelocity");_t16 && (u = Math.max(Math.min(u, _t16), -1 * _t16), p = Math.max(Math.min(p, _t16), -1 * _t16));
        }u && (h = u / (1 / (1 - f) - 1)), p && (d = p / (1 / (1 - f) - 1)), ("y" === this.option("lockAxis") || "xy" === this.option("lockAxis") && "y" === this.lockedAxis && e(g) === this.minScale) && (h = u = 0), ("x" === this.option("lockAxis") || "xy" === this.option("lockAxis") && "x" === this.lockedAxis && e(g) === this.minScale) && (d = p = 0);var m = this.dragOffset.x,
            v = this.dragOffset.y,
            y = this.option("dragMinThreshold") || 0;Math.abs(m) < y && Math.abs(v) < y && (h = d = 0, u = p = 0), (this.option("zoom") && (g < this.minScale - 1e-5 || g > this.maxScale + 1e-5) || i && !h && !d) && (f = .35), this.applyChange({ panX: h, panY: d, friction: f }), this.emit("decel", u, p, m, v);
      }
    }, {
      key: "onWheel",
      value: function onWheel(t) {
        var e = [-t.deltaX || 0, -t.deltaY || 0, -t.detail || 0].reduce(function (t, e) {
          return Math.abs(e) > Math.abs(t) ? e : t;
        });var i = Math.max(-1, Math.min(1, e));if (this.emit("wheel", t, i), this.panMode === A) return;if (t.defaultPrevented) return;var n = this.option("wheel");"pan" === n ? (t.preventDefault(), this.panOnlyZoomed && !this.canZoomOut() || this.applyChange({ panX: 2 * -t.deltaX, panY: 2 * -t.deltaY, bounce: !1 })) : "zoom" === n && !1 !== this.option("zoom") && this.zoomWithWheel(t);
      }
    }, {
      key: "onMouseMove",
      value: function onMouseMove(t) {
        this.panWithMouse(t);
      }
    }, {
      key: "onKeydown",
      value: function onKeydown(t) {
        "Escape" === t.key && this.toggleFS();
      }
    }, {
      key: "onResize",
      value: function onResize() {
        this.updateMetrics(), this.checkBounds().inBounds || this.requestTick();
      }
    }, {
      key: "setTransform",
      value: function setTransform() {
        this.emit("beforeTransform");var t = this.current,
            i = this.target,
            n = this.content,
            s = this.contentRect,
            o = Object.assign({}, T);
        var _iteratorNormalCompletion14 = true;
        var _didIteratorError14 = false;
        var _iteratorError14 = undefined;

        try {
          for (var _iterator14 = b[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
            var _n3 = _step14.value;
            var _s3 = "e" == _n3 || "f" === _n3 ? O : M;o[_n3] = e(t[_n3], _s3), Math.abs(i[_n3] - t[_n3]) < ("e" == _n3 || "f" === _n3 ? .51 : .001) && (t[_n3] = i[_n3]);
          }
        } catch (err) {
          _didIteratorError14 = true;
          _iteratorError14 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion14 && _iterator14.return) {
              _iterator14.return();
            }
          } finally {
            if (_didIteratorError14) {
              throw _iteratorError14;
            }
          }
        }

        var a = o.a,
            r = o.b,
            l = o.c,
            c = o.d,
            h = o.e,
            d = o.f,
            u = "matrix(" + a + ", " + r + ", " + l + ", " + c + ", " + h + ", " + d + ")",
            p = n.parentElement instanceof HTMLPictureElement ? n.parentElement : n;
        if (this.option("transformParent") && (p = p.parentElement || p), p.style.transform === u) return;p.style.transform = u;
        var _calculateContentDim = this.calculateContentDim(),
            f = _calculateContentDim.contentWidth,
            g = _calculateContentDim.contentHeight;

        s.width = f, s.height = g, this.emit("afterTransform");
      }
    }, {
      key: "updateMetrics",
      value: function updateMetrics() {
        var _ref10;

        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
        var i;if (!this || this.state === v.Destroy) return;if (this.isContentLoading) return;var n = Math.max(1, (null === (i = window.visualViewport) || void 0 === i ? void 0 : i.scale) || 1),
            s = this.container,
            o = this.content,
            a = o instanceof HTMLImageElement,
            r = s.getBoundingClientRect(),
            l = getComputedStyle(this.container);var c = r.width * n,
            h = r.height * n;var d = parseFloat(l.paddingTop) + parseFloat(l.paddingBottom),
            u = c - (parseFloat(l.paddingLeft) + parseFloat(l.paddingRight)),
            p = h - d;this.containerRect = { width: c, height: h, innerWidth: u, innerHeight: p };var f = parseFloat(o.dataset.width || "") || function (t) {
          var e = 0;return e = t instanceof HTMLImageElement ? t.naturalWidth : t instanceof SVGElement ? t.width.baseVal.value : Math.max(t.offsetWidth, t.scrollWidth), e || 0;
        }(o),
            g = parseFloat(o.dataset.height || "") || function (t) {
          var e = 0;return e = t instanceof HTMLImageElement ? t.naturalHeight : t instanceof SVGElement ? t.height.baseVal.value : Math.max(t.offsetHeight, t.scrollHeight), e || 0;
        }(o);var m = this.option("width", f) || R,
            b = this.option("height", g) || R;var y = m === R,
            w = b === R;"number" != typeof m && (m = f), "number" != typeof b && (b = g), y && (m = f * (b / g)), w && (b = g / (f / m));var x = o.parentElement instanceof HTMLPictureElement ? o.parentElement : o;this.option("transformParent") && (x = x.parentElement || x);var E = x.getAttribute("style") || "";x.style.setProperty("transform", "none", "important"), a && (x.style.width = "", x.style.height = ""), x.offsetHeight;var S = o.getBoundingClientRect();var P = S.width * n,
            C = S.height * n,
            T = P,
            M = C;P = Math.min(P, m), C = Math.min(C, b), a ? (_ref10 = function (t, e, i, n) {
          var s = i / t,
              o = n / e,
              a = Math.min(s, o);return { width: t *= a, height: e *= a };
        }(m, b, P, C), P = _ref10.width, C = _ref10.height, _ref10) : (P = Math.min(P, m), C = Math.min(C, b));var O = .5 * (M - C),
            A = .5 * (T - P);this.contentRect = Object.assign(Object.assign({}, this.contentRect), { top: S.top - r.top + O, bottom: r.bottom - S.bottom + O, left: S.left - r.left + A, right: r.right - S.right + A, fitWidth: P, fitHeight: C, width: P, height: C, fullWidth: m, fullHeight: b }), x.style.cssText = E, a && (x.style.width = P + "px", x.style.height = C + "px"), this.setTransform(), !0 !== t && this.emit("refresh"), this.ignoreBounds || (e(this.targetScale) < e(this.minScale) ? this.zoomTo(this.minScale, { friction: 0 }) : this.targetScale > this.maxScale ? this.zoomTo(this.maxScale, { friction: 0 }) : this.state === v.Init || this.checkBounds().inBounds || this.requestTick()), this.updateControls();
      }
    }, {
      key: "calculateBounds",
      value: function calculateBounds() {
        var _calculateContentDim2 = this.calculateContentDim(this.target),
            t = _calculateContentDim2.contentWidth,
            i = _calculateContentDim2.contentHeight,
            n = this.targetScale,
            s = this.lockedAxis,
            _contentRect = this.contentRect,
            o = _contentRect.fitWidth,
            a = _contentRect.fitHeight;

        var r = 0,
            l = 0,
            c = 0,
            h = 0;var d = this.option("infinite");if (!0 === d || s && d === s) r = -1 / 0, c = 1 / 0, l = -1 / 0, h = 1 / 0;else {
          var _s4 = this.containerRect,
              _d2 = this.contentRect,
              _u2 = e(o * n, O),
              _p2 = e(a * n, O),
              _f2 = _s4.innerWidth,
              _g3 = _s4.innerHeight;

          if (_s4.width === _u2 && (_f2 = _s4.width), _s4.width === _p2 && (_g3 = _s4.height), t > _f2) {
            c = .5 * (t - _f2), r = -1 * c;var _e9 = .5 * (_d2.right - _d2.left);r += _e9, c += _e9;
          }if (o > _f2 && t < _f2 && (r -= .5 * (o - _f2), c -= .5 * (o - _f2)), i > _g3) {
            h = .5 * (i - _g3), l = -1 * h;var _t17 = .5 * (_d2.bottom - _d2.top);l += _t17, h += _t17;
          }a > _g3 && i < _g3 && (r -= .5 * (a - _g3), c -= .5 * (a - _g3));
        }return { x: { min: r, max: c }, y: { min: l, max: h } };
      }
    }, {
      key: "getBounds",
      value: function getBounds() {
        var t = this.option("bounds");return t !== R ? t : this.calculateBounds();
      }
    }, {
      key: "updateControls",
      value: function updateControls() {
        var t = this,
            i = t.container,
            n = t.panMode,
            s = t.contentRect,
            o = t.targetScale,
            r = t.minScale;var l = r,
            c = t.option("click") || !1;c && (l = t.getNextScale(c));var h = t.canZoomIn(),
            d = t.canZoomOut(),
            u = n === L && !!this.option("touch"),
            p = d && u;if (u && (e(o) < e(r) && !this.panOnlyZoomed && (p = !0), (e(s.width, 1) > e(s.fitWidth, 1) || e(s.height, 1) > e(s.fitHeight, 1)) && (p = !0)), e(s.width * o, 1) < e(s.fitWidth, 1) && (p = !1), n === A && (p = !1), a(i, this.cn("isDraggable"), p), !this.option("zoom")) return;var f = h && e(l) > e(o),
            g = !f && !p && d && e(l) < e(o);a(i, this.cn("canZoomIn"), f), a(i, this.cn("canZoomOut"), g);var _iteratorNormalCompletion15 = true;
        var _didIteratorError15 = false;
        var _iteratorError15 = undefined;

        try {
          for (var _iterator15 = i.querySelectorAll("[data-panzoom-action]")[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
            var _t18 = _step15.value;
            var _e10 = !1,
                _i10 = !1;switch (_t18.dataset.panzoomAction) {case "zoomIn":
                h ? _e10 = !0 : _i10 = !0;break;case "zoomOut":
                d ? _e10 = !0 : _i10 = !0;break;case "toggleZoom":case "iterateZoom":
                h || d ? _e10 = !0 : _i10 = !0;var _n4 = _t18.querySelector("g");_n4 && (_n4.style.display = h ? "" : "none");}_e10 ? (_t18.removeAttribute("disabled"), _t18.removeAttribute("tabindex")) : _i10 && (_t18.setAttribute("disabled", ""), _t18.setAttribute("tabindex", "-1"));
          }
        } catch (err) {
          _didIteratorError15 = true;
          _iteratorError15 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion15 && _iterator15.return) {
              _iterator15.return();
            }
          } finally {
            if (_didIteratorError15) {
              throw _iteratorError15;
            }
          }
        }
      }
    }, {
      key: "panTo",
      value: function panTo(_ref11) {
        var _ref11$x = _ref11.x,
            t = _ref11$x === undefined ? this.target.e : _ref11$x,
            _ref11$y = _ref11.y,
            e = _ref11$y === undefined ? this.target.f : _ref11$y,
            _ref11$scale = _ref11.scale,
            i = _ref11$scale === undefined ? this.targetScale : _ref11$scale,
            _ref11$friction = _ref11.friction,
            n = _ref11$friction === undefined ? this.option("friction") : _ref11$friction,
            _ref11$angle = _ref11.angle,
            s = _ref11$angle === undefined ? 0 : _ref11$angle,
            _ref11$originX = _ref11.originX,
            o = _ref11$originX === undefined ? 0 : _ref11$originX,
            _ref11$originY = _ref11.originY,
            a = _ref11$originY === undefined ? 0 : _ref11$originY,
            _ref11$flipX = _ref11.flipX,
            r = _ref11$flipX === undefined ? !1 : _ref11$flipX,
            _ref11$flipY = _ref11.flipY,
            l = _ref11$flipY === undefined ? !1 : _ref11$flipY,
            _ref11$ignoreBounds = _ref11.ignoreBounds,
            c = _ref11$ignoreBounds === undefined ? !1 : _ref11$ignoreBounds;
        this.state !== v.Destroy && this.applyChange({ panX: t - this.target.e, panY: e - this.target.f, scale: i / this.targetScale, angle: s, originX: o, originY: a, friction: n, flipX: r, flipY: l, ignoreBounds: c });
      }
    }, {
      key: "applyChange",
      value: function applyChange(_ref12) {
        var _ref12$panX = _ref12.panX,
            t = _ref12$panX === undefined ? 0 : _ref12$panX,
            _ref12$panY = _ref12.panY,
            i = _ref12$panY === undefined ? 0 : _ref12$panY,
            _ref12$scale = _ref12.scale,
            n = _ref12$scale === undefined ? 1 : _ref12$scale,
            _ref12$angle = _ref12.angle,
            s = _ref12$angle === undefined ? 0 : _ref12$angle,
            _ref12$originX = _ref12.originX,
            o = _ref12$originX === undefined ? -this.current.e : _ref12$originX,
            _ref12$originY = _ref12.originY,
            a = _ref12$originY === undefined ? -this.current.f : _ref12$originY,
            _ref12$friction = _ref12.friction,
            r = _ref12$friction === undefined ? this.option("friction") : _ref12$friction,
            _ref12$flipX = _ref12.flipX,
            l = _ref12$flipX === undefined ? !1 : _ref12$flipX,
            _ref12$flipY = _ref12.flipY,
            c = _ref12$flipY === undefined ? !1 : _ref12$flipY,
            _ref12$ignoreBounds = _ref12.ignoreBounds,
            h = _ref12$ignoreBounds === undefined ? !1 : _ref12$ignoreBounds,
            _ref12$bounce = _ref12.bounce,
            d = _ref12$bounce === undefined ? this.option("bounce") : _ref12$bounce;
        var u = this.state;if (u === v.Destroy) return;this.rAF && (cancelAnimationFrame(this.rAF), this.rAF = null), this.friction = r || 0, this.ignoreBounds = h;var p = this.current,
            f = p.e,
            g = p.f,
            m = this.getMatrix(this.target);var y = new DOMMatrix().translate(f, g).translate(o, a).translate(t, i);if (this.option("zoom")) {
          if (!h) {
            var _t19 = this.targetScale,
                _e11 = this.minScale,
                _i11 = this.maxScale;_t19 * n < _e11 && (n = _e11 / _t19), _t19 * n > _i11 && (n = _i11 / _t19);
          }y = y.scale(n);
        }y = y.translate(-o, -a).translate(-f, -g).multiply(m), s && (y = y.rotate(s)), l && (y = y.scale(-1, 1)), c && (y = y.scale(1, -1));var _iteratorNormalCompletion16 = true;
        var _didIteratorError16 = false;
        var _iteratorError16 = undefined;

        try {
          for (var _iterator16 = b[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
            var _t20 = _step16.value;
            "e" !== _t20 && "f" !== _t20 && (y[_t20] > this.minScale + 1e-5 || y[_t20] < this.minScale - 1e-5) ? this.target[_t20] = y[_t20] : this.target[_t20] = e(y[_t20], O);
          }
        } catch (err) {
          _didIteratorError16 = true;
          _iteratorError16 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion16 && _iterator16.return) {
              _iterator16.return();
            }
          } finally {
            if (_didIteratorError16) {
              throw _iteratorError16;
            }
          }
        }

        (this.targetScale < this.scale || Math.abs(n - 1) > .1 || this.panMode === A || !1 === d) && !h && this.clampTargetBounds(), u === v.Init ? this.animate() : this.isResting || (this.state = v.Panning, this.requestTick());
      }
    }, {
      key: "stop",
      value: function stop() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
        if (this.state === v.Init || this.state === v.Destroy) return;var e = this.isTicking;this.rAF && (cancelAnimationFrame(this.rAF), this.rAF = null), this.isBouncingX = !1, this.isBouncingY = !1;var _iteratorNormalCompletion17 = true;
        var _didIteratorError17 = false;
        var _iteratorError17 = undefined;

        try {
          for (var _iterator17 = b[Symbol.iterator](), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
            var _e12 = _step17.value;
            this.velocity[_e12] = 0, "current" === t ? this.current[_e12] = this.target[_e12] : "target" === t && (this.target[_e12] = this.current[_e12]);
          }
        } catch (err) {
          _didIteratorError17 = true;
          _iteratorError17 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion17 && _iterator17.return) {
              _iterator17.return();
            }
          } finally {
            if (_didIteratorError17) {
              throw _iteratorError17;
            }
          }
        }

        this.setTransform(), P(this.container, "is-scaling"), P(this.container, "is-animating"), this.isTicking = !1, this.state = v.Ready, e && (this.emit("endAnimation"), this.updateControls());
      }
    }, {
      key: "requestTick",
      value: function requestTick() {
        var _this11 = this;

        this.isTicking || (this.emit("startAnimation"), this.updateControls(), C(this.container, "is-animating"), this.isScaling && C(this.container, "is-scaling")), this.isTicking = !0, this.rAF || (this.rAF = requestAnimationFrame(function () {
          return _this11.animate();
        }));
      }
    }, {
      key: "panWithMouse",
      value: function panWithMouse(t) {
        var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.option("mouseMoveFriction");
        if (this.pmme = t, this.panMode !== A || !t) return;if (e(this.targetScale) <= e(this.minScale)) return;this.emit("mouseMove", t);var n = this.container,
            s = this.containerRect,
            o = this.contentRect,
            a = s.width,
            r = s.height,
            l = n.getBoundingClientRect(),
            c = (t.clientX || 0) - l.left,
            h = (t.clientY || 0) - l.top;

        var _calculateContentDim3 = this.calculateContentDim(this.target),
            d = _calculateContentDim3.contentWidth,
            u = _calculateContentDim3.contentHeight;

        var p = this.option("mouseMoveFactor");p > 1 && (d !== a && (d *= p), u !== r && (u *= p));var f = .5 * (d - a) - c / a * 100 / 100 * (d - a);f += .5 * (o.right - o.left);var g = .5 * (u - r) - h / r * 100 / 100 * (u - r);g += .5 * (o.bottom - o.top), this.applyChange({ panX: f - this.target.e, panY: g - this.target.f, friction: i });
      }
    }, {
      key: "zoomWithWheel",
      value: function zoomWithWheel(t) {
        if (this.state === v.Destroy || this.state === v.Init) return;var i = Date.now();if (i - this.pwt < 45) return void t.preventDefault();this.pwt = i;var n = [-t.deltaX || 0, -t.deltaY || 0, -t.detail || 0].reduce(function (t, e) {
          return Math.abs(e) > Math.abs(t) ? e : t;
        });var s = Math.max(-1, Math.min(1, n)),
            o = this.targetScale,
            a = this.maxScale,
            r = this.minScale;var l = o * (100 + 45 * s) / 100;e(l) < e(r) && e(o) <= e(r) ? (this.cwd += Math.abs(s), l = r) : e(l) > e(a) && e(o) >= e(a) ? (this.cwd += Math.abs(s), l = a) : (this.cwd = 0, l = Math.max(Math.min(l, a), r)), this.cwd > this.option("wheelLimit") || (t.preventDefault(), e(l) !== e(o) && this.zoomTo(l, { event: t }));
      }
    }, {
      key: "canZoomIn",
      value: function canZoomIn() {
        return this.option("zoom") && (e(this.contentRect.width, 1) < e(this.contentRect.fitWidth, 1) || e(this.targetScale) < e(this.maxScale));
      }
    }, {
      key: "canZoomOut",
      value: function canZoomOut() {
        return this.option("zoom") && e(this.targetScale) > e(this.minScale);
      }
    }, {
      key: "zoomIn",
      value: function zoomIn() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1.25;
        var e = arguments[1];
        this.zoomTo(this.targetScale * t, e);
      }
    }, {
      key: "zoomOut",
      value: function zoomOut() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : .8;
        var e = arguments[1];
        this.zoomTo(this.targetScale * t, e);
      }
    }, {
      key: "zoomToFit",
      value: function zoomToFit(t) {
        this.zoomTo("fit", t);
      }
    }, {
      key: "zoomToCover",
      value: function zoomToCover(t) {
        this.zoomTo("cover", t);
      }
    }, {
      key: "zoomToFull",
      value: function zoomToFull(t) {
        this.zoomTo("full", t);
      }
    }, {
      key: "zoomToMax",
      value: function zoomToMax(t) {
        this.zoomTo("max", t);
      }
    }, {
      key: "toggleZoom",
      value: function toggleZoom(t) {
        this.zoomTo(this.getNextScale("toggleZoom"), t);
      }
    }, {
      key: "toggleMax",
      value: function toggleMax(t) {
        this.zoomTo(this.getNextScale("toggleMax"), t);
      }
    }, {
      key: "toggleCover",
      value: function toggleCover(t) {
        this.zoomTo(this.getNextScale("toggleCover"), t);
      }
    }, {
      key: "iterateZoom",
      value: function iterateZoom(t) {
        this.zoomTo("next", t);
      }
    }, {
      key: "zoomTo",
      value: function zoomTo() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

        var _ref13 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            _ref13$friction = _ref13.friction,
            e = _ref13$friction === undefined ? R : _ref13$friction,
            _ref13$originX = _ref13.originX,
            i = _ref13$originX === undefined ? R : _ref13$originX,
            _ref13$originY = _ref13.originY,
            n = _ref13$originY === undefined ? R : _ref13$originY,
            s = _ref13.event;

        if (this.isContentLoading || this.state === v.Destroy) return;var o = this.targetScale,
            a = this.fullScale,
            r = this.maxScale,
            l = this.coverScale;
        if (this.stop(), this.panMode === A && (s = this.pmme || s), s || i === R || n === R) {
          var _t21 = this.content.getBoundingClientRect(),
              _e13 = this.container.getBoundingClientRect(),
              _o = s ? s.clientX : _e13.left + .5 * _e13.width,
              _a = s ? s.clientY : _e13.top + .5 * _e13.height;i = _o - _t21.left - .5 * _t21.width, n = _a - _t21.top - .5 * _t21.height;
        }var c = 1;"number" == typeof t ? c = t : "full" === t ? c = a : "cover" === t ? c = l : "max" === t ? c = r : "fit" === t ? c = 1 : "next" === t && (c = this.getNextScale("iterateZoom")), c = c / o || 1, e = e === R ? c > 1 ? .15 : .25 : e, this.applyChange({ scale: c, originX: i, originY: n, friction: e }), s && this.panMode === A && this.panWithMouse(s, e);
      }
    }, {
      key: "rotateCCW",
      value: function rotateCCW() {
        this.applyChange({ angle: -90 });
      }
    }, {
      key: "rotateCW",
      value: function rotateCW() {
        this.applyChange({ angle: 90 });
      }
    }, {
      key: "flipX",
      value: function flipX() {
        this.applyChange({ flipX: !0 });
      }
    }, {
      key: "flipY",
      value: function flipY() {
        this.applyChange({ flipY: !0 });
      }
    }, {
      key: "fitX",
      value: function fitX() {
        this.stop("target");var t = this.containerRect,
            e = this.contentRect,
            i = this.target;
        this.applyChange({ panX: .5 * t.width - (e.left + .5 * e.fitWidth) - i.e, panY: .5 * t.height - (e.top + .5 * e.fitHeight) - i.f, scale: t.width / e.fitWidth / this.targetScale, originX: 0, originY: 0, ignoreBounds: !0 });
      }
    }, {
      key: "fitY",
      value: function fitY() {
        this.stop("target");var t = this.containerRect,
            e = this.contentRect,
            i = this.target;
        this.applyChange({ panX: .5 * t.width - (e.left + .5 * e.fitWidth) - i.e, panY: .5 * t.innerHeight - (e.top + .5 * e.fitHeight) - i.f, scale: t.height / e.fitHeight / this.targetScale, originX: 0, originY: 0, ignoreBounds: !0 });
      }
    }, {
      key: "toggleFS",
      value: function toggleFS() {
        var t = this.container,
            e = this.cn("inFullscreen"),
            i = this.cn("htmlHasFullscreen");t.classList.toggle(e);var n = t.classList.contains(e);n ? (document.documentElement.classList.add(i), document.addEventListener("keydown", this.onKeydown, !0)) : (document.documentElement.classList.remove(i), document.removeEventListener("keydown", this.onKeydown, !0)), this.updateMetrics(), this.emit(n ? "enterFS" : "exitFS");
      }
    }, {
      key: "getMatrix",
      value: function getMatrix() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.current;
        var e = t.a,
            i = t.b,
            n = t.c,
            s = t.d,
            o = t.e,
            a = t.f;
        return new DOMMatrix([e, i, n, s, o, a]);
      }
    }, {
      key: "reset",
      value: function reset(t) {
        if (this.state !== v.Init && this.state !== v.Destroy) {
          this.stop("current");var _iteratorNormalCompletion18 = true;
          var _didIteratorError18 = false;
          var _iteratorError18 = undefined;

          try {
            for (var _iterator18 = b[Symbol.iterator](), _step18; !(_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done); _iteratorNormalCompletion18 = true) {
              var _t22 = _step18.value;
              this.target[_t22] = T[_t22];
            }
          } catch (err) {
            _didIteratorError18 = true;
            _iteratorError18 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion18 && _iterator18.return) {
                _iterator18.return();
              }
            } finally {
              if (_didIteratorError18) {
                throw _iteratorError18;
              }
            }
          }

          this.target.a = this.minScale, this.target.d = this.minScale, this.clampTargetBounds(), this.isResting || (this.friction = void 0 === t ? this.option("friction") : t, this.state = v.Panning, this.requestTick());
        }
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.stop(), this.state = v.Destroy, this.detachEvents(), this.detachObserver();var t = this.container,
            e = this.content,
            i = this.option("classes") || {};
        var _iteratorNormalCompletion19 = true;
        var _didIteratorError19 = false;
        var _iteratorError19 = undefined;

        try {
          for (var _iterator19 = Object.values(i)[Symbol.iterator](), _step19; !(_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done); _iteratorNormalCompletion19 = true) {
            var _e14 = _step19.value;
            t.classList.remove(_e14 + "");
          }
        } catch (err) {
          _didIteratorError19 = true;
          _iteratorError19 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion19 && _iterator19.return) {
              _iterator19.return();
            }
          } finally {
            if (_didIteratorError19) {
              throw _iteratorError19;
            }
          }
        }

        e && (e.removeEventListener("load", this.onLoad), e.removeEventListener("error", this.onError)), this.detachPlugins();
      }
    }]);

    return D;
  }(m);

  Object.defineProperty(D, "defaults", { enumerable: !0, configurable: !0, writable: !0, value: w }), Object.defineProperty(D, "Plugins", { enumerable: !0, configurable: !0, writable: !0, value: {} });var F = function F(t, e) {
    var i = !0;return function () {
      i && (i = !1, t.apply(undefined, arguments), setTimeout(function () {
        i = !0;
      }, e));
    };
  },
      j = function j(t, e) {
    var i = [];return t.childNodes.forEach(function (t) {
      t.nodeType !== Node.ELEMENT_NODE || e && !t.matches(e) || i.push(t);
    }), i;
  },
      B = { viewport: null, track: null, enabled: !0, slides: [], axis: "x", transition: "fade", preload: 1, slidesPerPage: "auto", initialPage: 0, friction: .12, Panzoom: { decelFriction: .12 }, center: !0, infinite: !0, fill: !0, dragFree: !1, adaptiveHeight: !1, direction: "ltr", classes: { container: "f-carousel", viewport: "f-carousel__viewport", track: "f-carousel__track", slide: "f-carousel__slide", isLTR: "is-ltr", isRTL: "is-rtl", isHorizontal: "is-horizontal", isVertical: "is-vertical", inTransition: "in-transition", isSelected: "is-selected" }, l10n: { NEXT: "Next slide", PREV: "Previous slide", GOTO: "Go to slide #%d" } };var H;!function (t) {
    t[t.Init = 0] = "Init", t[t.Ready = 1] = "Ready", t[t.Destroy = 2] = "Destroy";
  }(H || (H = {}));var N = function N(t) {
    if ("string" == typeof t || t instanceof HTMLElement) t = { html: t };else {
      var e = t.thumb;void 0 !== e && ("string" == typeof e && (t.thumbSrc = e), e instanceof HTMLImageElement && (t.thumbEl = e, t.thumbElSrc = e.src, t.thumbSrc = e.src), delete t.thumb);
    }return Object.assign({ html: "", el: null, isDom: !1, class: "", customClass: "", index: -1, dim: 0, gap: 0, pos: 0, transition: !1 }, t);
  },
      _ = function _() {
    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return Object.assign({ index: -1, slides: [], dim: 0, pos: -1 }, t);
  };
  var $ = function (_g4) {
    _inherits($, _g4);

    function $(t, e) {
      var _this12;

      _classCallCheck(this, $);

      (_this12 = _possibleConstructorReturn(this, ($.__proto__ || Object.getPrototypeOf($)).call(this, e)), _this12), Object.defineProperty(_this12, "instance", { enumerable: !0, configurable: !0, writable: !0, value: t });return _this12;
    }

    _createClass($, [{
      key: "attach",
      value: function attach() {}
    }, {
      key: "detach",
      value: function detach() {}
    }]);

    return $;
  }(g);

  var W = { classes: { list: "f-carousel__dots", isDynamic: "is-dynamic", hasDots: "has-dots", dot: "f-carousel__dot", isBeforePrev: "is-before-prev", isPrev: "is-prev", isCurrent: "is-current", isNext: "is-next", isAfterNext: "is-after-next" }, dotTpl: '<button type="button" data-carousel-page="%i" aria-label="{{GOTO}}"><span class="f-carousel__dot" aria-hidden="true"></span></button>', dynamicFrom: 11, maxCount: 1 / 0, minCount: 2 };
  var X = function (_$) {
    _inherits(X, _$);

    function X() {
      var _this13;

      _classCallCheck(this, X);

      (_this13 = _possibleConstructorReturn(this, (X.__proto__ || Object.getPrototypeOf(X)).apply(this, arguments)), _this13), Object.defineProperty(_this13, "isDynamic", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(_this13, "list", { enumerable: !0, configurable: !0, writable: !0, value: null });return _this13;
    }

    _createClass(X, [{
      key: "onRefresh",
      value: function onRefresh() {
        this.refresh();
      }
    }, {
      key: "build",
      value: function build() {
        var t = this.list;if (!t) {
          t = document.createElement("ul"), C(t, this.cn("list")), t.setAttribute("role", "tablist");var e = this.instance.container;e.appendChild(t), C(e, this.cn("hasDots")), this.list = t;
        }return t;
      }
    }, {
      key: "refresh",
      value: function refresh() {
        var t;var e = this.instance.pages.length,
            i = Math.min(2, this.option("minCount")),
            n = Math.max(2e3, this.option("maxCount")),
            s = this.option("dynamicFrom");if (e < i || e > n) return void this.cleanup();var o = "number" == typeof s && e > 5 && e >= s,
            r = !this.list || this.isDynamic !== o || this.list.children.length !== e;r && this.cleanup();var l = this.build();if (a(l, this.cn("isDynamic"), !!o), r) for (var _t23 = 0; _t23 < e; _t23++) {
          l.append(this.createItem(_t23));
        }var c = void 0,
            h = 0;
        var _arr2 = [].concat(_toConsumableArray(l.children));

        for (var _i13 = 0; _i13 < _arr2.length; _i13++) {
          var _e15 = _arr2[_i13];var _i12 = h === this.instance.page;_i12 && (c = _e15), a(_e15, this.cn("isCurrent"), _i12), null === (t = _e15.children[0]) || void 0 === t || t.setAttribute("aria-selected", _i12 ? "true" : "false");var _arr3 = ["isBeforePrev", "isPrev", "isNext", "isAfterNext"];
          for (var _i15 = 0; _i15 < _arr3.length; _i15++) {
            var _t25 = _arr3[_i15];P(_e15, this.cn(_t25));
          }h++;
        }if (c = c || l.firstChild, o && c) {
          var _t24 = c.previousElementSibling,
              _e16 = _t24 && _t24.previousElementSibling;C(_t24, this.cn("isPrev")), C(_e16, this.cn("isBeforePrev"));var _i14 = c.nextElementSibling,
              _n5 = _i14 && _i14.nextElementSibling;C(_i14, this.cn("isNext")), C(_n5, this.cn("isAfterNext"));
        }this.isDynamic = o;
      }
    }, {
      key: "createItem",
      value: function createItem() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var e;var i = document.createElement("li");i.setAttribute("role", "presentation");var n = s(this.instance.localize(this.option("dotTpl"), [["%d", t + 1]]).replace(/\%i/g, t + ""));return i.appendChild(n), null === (e = i.children[0]) || void 0 === e || e.setAttribute("role", "tab"), i;
      }
    }, {
      key: "cleanup",
      value: function cleanup() {
        this.list && (this.list.remove(), this.list = null), this.isDynamic = !1, P(this.instance.container, this.cn("hasDots"));
      }
    }, {
      key: "attach",
      value: function attach() {
        this.instance.on(["refresh", "change"], this.onRefresh);
      }
    }, {
      key: "detach",
      value: function detach() {
        this.instance.off(["refresh", "change"], this.onRefresh), this.cleanup();
      }
    }]);

    return X;
  }($);

  Object.defineProperty(X, "defaults", { enumerable: !0, configurable: !0, writable: !0, value: W });var q = "disabled",
      Y = "next",
      V = "prev";
  var Z = function (_$2) {
    _inherits(Z, _$2);

    function Z() {
      var _this14;

      _classCallCheck(this, Z);

      (_this14 = _possibleConstructorReturn(this, (Z.__proto__ || Object.getPrototypeOf(Z)).apply(this, arguments)), _this14), Object.defineProperty(_this14, "container", { enumerable: !0, configurable: !0, writable: !0, value: null }), Object.defineProperty(_this14, "prev", { enumerable: !0, configurable: !0, writable: !0, value: null }), Object.defineProperty(_this14, "next", { enumerable: !0, configurable: !0, writable: !0, value: null }), Object.defineProperty(_this14, "isDom", { enumerable: !0, configurable: !0, writable: !0, value: !1 });return _this14;
    }

    _createClass(Z, [{
      key: "onRefresh",
      value: function onRefresh() {
        var t = this.instance,
            e = t.pages.length,
            i = t.page;if (e < 2) return void this.cleanup();this.build();var n = this.prev,
            s = this.next;n && s && (n.removeAttribute(q), s.removeAttribute(q), t.isInfinite || (i <= 0 && n.setAttribute(q, ""), i >= e - 1 && s.setAttribute(q, "")));
      }
    }, {
      key: "addBtn",
      value: function addBtn(t) {
        var e;var i = this.instance,
            n = document.createElement("button");n.setAttribute("tabindex", "0"), n.setAttribute("title", i.localize("{{" + t.toUpperCase() + "}}")), C(n, this.cn("button") + " " + this.cn(t === Y ? "isNext" : "isPrev"));var s = i.isRTL ? t === Y ? V : Y : t;var o;return n.innerHTML = i.localize(this.option(s + "Tpl")), n.dataset["carousel" + (o = t, o ? o.match("^[a-z]") ? o.charAt(0).toUpperCase() + o.substring(1) : o : "")] = "true", null === (e = this.container) || void 0 === e || e.appendChild(n), n;
      }
    }, {
      key: "build",
      value: function build() {
        var t = this.instance.container,
            e = this.cn("container");var i = this.container,
            n = this.prev,
            s = this.next;
        i || (i = t.querySelector("." + e), this.isDom = !!i), i || (i = document.createElement("div"), C(i, e), t.appendChild(i)), this.container = i, s || (s = i.querySelector("[data-carousel-next]")), s || (s = this.addBtn(Y)), this.next = s, n || (n = i.querySelector("[data-carousel-prev]")), n || (n = this.addBtn(V)), this.prev = n;
      }
    }, {
      key: "cleanup",
      value: function cleanup() {
        this.isDom || (this.prev && this.prev.remove(), this.next && this.next.remove(), this.container && this.container.remove()), this.prev = null, this.next = null, this.container = null, this.isDom = !1;
      }
    }, {
      key: "attach",
      value: function attach() {
        this.instance.on(["refresh", "change"], this.onRefresh);
      }
    }, {
      key: "detach",
      value: function detach() {
        this.instance.off(["refresh", "change"], this.onRefresh), this.cleanup();
      }
    }]);

    return Z;
  }($);

  Object.defineProperty(Z, "defaults", { enumerable: !0, configurable: !0, writable: !0, value: { classes: { container: "f-carousel__nav", button: "f-button", isNext: "is-next", isPrev: "is-prev" }, nextTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M9 3l9 9-9 9"/></svg>', prevTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 3l-9 9 9 9"/></svg>' } });
  var U = function (_$3) {
    _inherits(U, _$3);

    function U() {
      var _this15;

      _classCallCheck(this, U);

      (_this15 = _possibleConstructorReturn(this, (U.__proto__ || Object.getPrototypeOf(U)).apply(this, arguments)), _this15), Object.defineProperty(_this15, "selectedIndex", { enumerable: !0, configurable: !0, writable: !0, value: null }), Object.defineProperty(_this15, "target", { enumerable: !0, configurable: !0, writable: !0, value: null }), Object.defineProperty(_this15, "nav", { enumerable: !0, configurable: !0, writable: !0, value: null });return _this15;
    }

    _createClass(U, [{
      key: "addAsTargetFor",
      value: function addAsTargetFor(t) {
        this.target = this.instance, this.nav = t, this.attachEvents();
      }
    }, {
      key: "addAsNavFor",
      value: function addAsNavFor(t) {
        this.nav = this.instance, this.target = t, this.attachEvents();
      }
    }, {
      key: "attachEvents",
      value: function attachEvents() {
        var t = this.nav,
            e = this.target;
        t && e && (t.options.initialSlide = e.options.initialPage, t.state === H.Ready ? this.onNavReady(t) : t.on("ready", this.onNavReady), e.state === H.Ready ? this.onTargetReady(e) : e.on("ready", this.onTargetReady));
      }
    }, {
      key: "onNavReady",
      value: function onNavReady(t) {
        t.on("createSlide", this.onNavCreateSlide), t.on("Panzoom.click", this.onNavClick), t.on("Panzoom.touchEnd", this.onNavTouch), this.onTargetChange();
      }
    }, {
      key: "onTargetReady",
      value: function onTargetReady(t) {
        t.on("change", this.onTargetChange), t.on("Panzoom.refresh", this.onTargetChange), this.onTargetChange();
      }
    }, {
      key: "onNavClick",
      value: function onNavClick(t, e, i) {
        this.onNavTouch(t, t.panzoom, i);
      }
    }, {
      key: "onNavTouch",
      value: function onNavTouch(t, e, i) {
        var n, s;if (Math.abs(e.dragOffset.x) > 3 || Math.abs(e.dragOffset.y) > 3) return;var o = i.target,
            a = this.nav,
            r = this.target;if (!a || !r || !o) return;var l = o.closest("[data-index]");if (i.stopPropagation(), i.preventDefault(), !l) return;var c = parseInt(l.dataset.index || "", 10) || 0,
            h = r.getPageForSlide(c),
            d = a.getPageForSlide(c);a.slideTo(d), r.slideTo(h, { friction: (null === (s = null === (n = this.nav) || void 0 === n ? void 0 : n.plugins) || void 0 === s ? void 0 : s.Sync.option("friction")) || 0 }), this.markSelectedSlide(c);
      }
    }, {
      key: "onNavCreateSlide",
      value: function onNavCreateSlide(t, e) {
        e.index === this.selectedIndex && this.markSelectedSlide(e.index);
      }
    }, {
      key: "onTargetChange",
      value: function onTargetChange() {
        var t, e;var i = this.target,
            n = this.nav;
        if (!i || !n) return;if (n.state !== H.Ready || i.state !== H.Ready) return;var s = null === (e = null === (t = i.pages[i.page]) || void 0 === t ? void 0 : t.slides[0]) || void 0 === e ? void 0 : e.index,
            o = n.getPageForSlide(s);this.markSelectedSlide(s), n.slideTo(o, null === n.prevPage && null === i.prevPage ? { friction: 0 } : void 0);
      }
    }, {
      key: "markSelectedSlide",
      value: function markSelectedSlide(t) {
        var e = this.nav;e && e.state === H.Ready && (this.selectedIndex = t, [].concat(_toConsumableArray(e.slides)).map(function (e) {
          e.el && e.el.classList[e.index === t ? "add" : "remove"]("is-nav-selected");
        }));
      }
    }, {
      key: "attach",
      value: function attach() {
        var t = this;var e = t.options.target,
            i = t.options.nav;e ? t.addAsNavFor(e) : i && t.addAsTargetFor(i);
      }
    }, {
      key: "detach",
      value: function detach() {
        var t = this,
            e = t.nav,
            i = t.target;e && (e.off("ready", t.onNavReady), e.off("createSlide", t.onNavCreateSlide), e.off("Panzoom.click", t.onNavClick), e.off("Panzoom.touchEnd", t.onNavTouch)), t.nav = null, i && (i.off("ready", t.onTargetReady), i.off("refresh", t.onTargetChange), i.off("change", t.onTargetChange)), t.target = null;
      }
    }]);

    return U;
  }($);

  Object.defineProperty(U, "defaults", { enumerable: !0, configurable: !0, writable: !0, value: { friction: .35 } });var G = { Navigation: Z, Dots: X, Sync: U },
      K = "animationend",
      J = "isSelected",
      Q = "slide";
  var tt = function (_m3) {
    _inherits(tt, _m3);

    _createClass(tt, [{
      key: "axis",
      get: function get() {
        return this.isHorizontal ? "e" : "f";
      }
    }, {
      key: "isEnabled",
      get: function get() {
        return this.state === H.Ready;
      }
    }, {
      key: "isInfinite",
      get: function get() {
        var t = !1;var e = this.contentDim,
            i = this.viewportDim,
            n = this.pages,
            s = this.slides,
            o = s[0];
        return n.length >= 2 && o && e + o.dim >= i && (t = this.option("infinite")), t;
      }
    }, {
      key: "isRTL",
      get: function get() {
        return "rtl" === this.option("direction");
      }
    }, {
      key: "isHorizontal",
      get: function get() {
        return "x" === this.option("axis");
      }
    }]);

    function tt(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var _this16;

      var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      _classCallCheck(this, tt);

      if ((_this16 = _possibleConstructorReturn(this, (tt.__proto__ || Object.getPrototypeOf(tt)).call(this)), _this16), Object.defineProperty(_this16, "bp", { enumerable: !0, configurable: !0, writable: !0, value: "" }), Object.defineProperty(_this16, "lp", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(_this16, "userOptions", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(_this16, "userPlugins", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(_this16, "state", { enumerable: !0, configurable: !0, writable: !0, value: H.Init }), Object.defineProperty(_this16, "page", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(_this16, "prevPage", { enumerable: !0, configurable: !0, writable: !0, value: null }), Object.defineProperty(_this16, "container", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(_this16, "viewport", { enumerable: !0, configurable: !0, writable: !0, value: null }), Object.defineProperty(_this16, "track", { enumerable: !0, configurable: !0, writable: !0, value: null }), Object.defineProperty(_this16, "slides", { enumerable: !0, configurable: !0, writable: !0, value: [] }), Object.defineProperty(_this16, "pages", { enumerable: !0, configurable: !0, writable: !0, value: [] }), Object.defineProperty(_this16, "panzoom", { enumerable: !0, configurable: !0, writable: !0, value: null }), Object.defineProperty(_this16, "inTransition", { enumerable: !0, configurable: !0, writable: !0, value: new Set() }), Object.defineProperty(_this16, "contentDim", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(_this16, "viewportDim", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), "string" == typeof t && (t = document.querySelector(t)), !t || !S(t)) throw new Error("No Element found");_this16.container = t, _this16.slideNext = F(_this16.slideNext.bind(_this16), 150), _this16.slidePrev = F(_this16.slidePrev.bind(_this16), 150), _this16.userOptions = e, _this16.userPlugins = i, queueMicrotask(function () {
        _this16.processOptions();
      });return _possibleConstructorReturn(_this16);
    }

    _createClass(tt, [{
      key: "processOptions",
      value: function processOptions() {
        var _this17 = this;

        var t, e;var i = p({}, tt.defaults, this.userOptions);var n = "";var s = i.breakpoints;if (s && u(s)) {
          var _iteratorNormalCompletion20 = true;
          var _didIteratorError20 = false;
          var _iteratorError20 = undefined;

          try {
            for (var _iterator20 = Object.entries(s)[Symbol.iterator](), _step20; !(_iteratorNormalCompletion20 = (_step20 = _iterator20.next()).done); _iteratorNormalCompletion20 = true) {
              var _ref14 = _step20.value;

              var _ref15 = _slicedToArray(_ref14, 2);

              var _t26 = _ref15[0];
              var _e17 = _ref15[1];
              window.matchMedia(_t26).matches && u(_e17) && (n += _t26, p(i, _e17));
            }
          } catch (err) {
            _didIteratorError20 = true;
            _iteratorError20 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion20 && _iterator20.return) {
                _iterator20.return();
              }
            } finally {
              if (_didIteratorError20) {
                throw _iteratorError20;
              }
            }
          }
        }n === this.bp && this.state !== H.Init || (this.bp = n, this.state === H.Ready && (i.initialSlide = (null === (e = null === (t = this.pages[this.page]) || void 0 === t ? void 0 : t.slides[0]) || void 0 === e ? void 0 : e.index) || 0), this.state !== H.Init && this.destroy(), _get(tt.prototype.__proto__ || Object.getPrototypeOf(tt.prototype), "setOptions", this).call(this, i), !1 === this.option("enabled") ? this.attachEvents() : setTimeout(function () {
          _this17.init();
        }, 0));
      }
    }, {
      key: "init",
      value: function init() {
        this.state = H.Init, this.emit("init"), this.attachPlugins(Object.assign(Object.assign({}, tt.Plugins), this.userPlugins)), this.emit("attachPlugins"), this.initLayout(), this.initSlides(), this.updateMetrics(), this.setInitialPosition(), this.initPanzoom(), this.attachEvents(), this.state = H.Ready, this.emit("ready");
      }
    }, {
      key: "initLayout",
      value: function initLayout() {
        var _i16, _n6;

        var t = this.container,
            e = this.option("classes");C(t, this.cn("container")), a(t, e.isLTR, !this.isRTL), a(t, e.isRTL, this.isRTL), a(t, e.isVertical, !this.isHorizontal), a(t, e.isHorizontal, this.isHorizontal);var i = this.option("viewport") || t.querySelector("." + e.viewport);i || (i = document.createElement("div"), C(i, e.viewport), (_i16 = i).append.apply(_i16, _toConsumableArray(j(t, "." + e.slide))), t.prepend(i)), i.addEventListener("scroll", this.onScroll);var n = this.option("track") || t.querySelector("." + e.track);n || (n = document.createElement("div"), C(n, e.track), (_n6 = n).append.apply(_n6, _toConsumableArray(Array.from(i.childNodes)))), n.setAttribute("aria-live", "polite"), i.contains(n) || i.prepend(n), this.viewport = i, this.track = n, this.emit("initLayout");
      }
    }, {
      key: "initSlides",
      value: function initSlides() {
        var _this18 = this;

        var t = this.track;
        if (!t) return;var e = [].concat(_toConsumableArray(this.slides)),
            i = [];[].concat(_toConsumableArray(j(t, "." + this.cn(Q)))).forEach(function (t) {
          if (S(t)) {
            var _e18 = N({ el: t, isDom: !0, index: _this18.slides.length });i.push(_e18);
          }
        });
        var _arr4 = [].concat(_toConsumableArray(this.option("slides", []) || []), _toConsumableArray(e));

        for (var _i17 = 0; _i17 < _arr4.length; _i17++) {
          var _t27 = _arr4[_i17];i.push(N(_t27));
        }this.slides = i;for (var _t28 = 0; _t28 < this.slides.length; _t28++) {
          this.slides[_t28].index = _t28;
        }var _iteratorNormalCompletion21 = true;
        var _didIteratorError21 = false;
        var _iteratorError21 = undefined;

        try {
          for (var _iterator21 = i[Symbol.iterator](), _step21; !(_iteratorNormalCompletion21 = (_step21 = _iterator21.next()).done); _iteratorNormalCompletion21 = true) {
            var _t29 = _step21.value;
            this.emit("beforeInitSlide", _t29, _t29.index), this.emit("initSlide", _t29, _t29.index);
          }
        } catch (err) {
          _didIteratorError21 = true;
          _iteratorError21 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion21 && _iterator21.return) {
              _iterator21.return();
            }
          } finally {
            if (_didIteratorError21) {
              throw _iteratorError21;
            }
          }
        }

        this.emit("initSlides");
      }
    }, {
      key: "setInitialPage",
      value: function setInitialPage() {
        var t = this.option("initialSlide");this.page = "number" == typeof t ? this.getPageForSlide(t) : parseInt(this.option("initialPage", 0) + "", 10) || 0;
      }
    }, {
      key: "setInitialPosition",
      value: function setInitialPosition() {
        var t = this.track,
            e = this.pages,
            i = this.isHorizontal;
        if (!t || !e.length) return;var n = this.page;e[n] || (this.page = n = 0);var s = (e[n].pos || 0) * (this.isRTL && i ? 1 : -1),
            o = i ? s + "px" : "0",
            a = i ? "0" : s + "px";t.style.transform = "translate3d(" + o + ", " + a + ", 0) scale(1)", this.option("adaptiveHeight") && this.setViewportHeight();
      }
    }, {
      key: "initPanzoom",
      value: function initPanzoom() {
        var _this19 = this;

        this.panzoom && (this.panzoom.destroy(), this.panzoom = null);var t = this.option("Panzoom") || {};this.panzoom = new D(this.viewport, p({}, { content: this.track, zoom: !1, panOnlyZoomed: !1, lockAxis: this.isHorizontal ? "x" : "y", infinite: this.isInfinite, click: !1, dblClick: !1, touch: function touch(t) {
            return !(_this19.pages.length < 2 && !t.options.infinite);
          }, bounds: function bounds() {
            return _this19.getBounds();
          }, maxVelocity: function maxVelocity(t) {
            return Math.abs(t.target[_this19.axis] - t.current[_this19.axis]) < 2 * _this19.viewportDim ? 100 : 0;
          } }, t)), this.panzoom.on("*", function (t, e) {
          for (var _len5 = arguments.length, i = Array(_len5 > 2 ? _len5 - 2 : 0), _key5 = 2; _key5 < _len5; _key5++) {
            i[_key5 - 2] = arguments[_key5];
          }

          _this19.emit.apply(_this19, ["Panzoom." + e, t].concat(i));
        }), this.panzoom.on("decel", this.onDecel), this.panzoom.on("refresh", this.onRefresh), this.panzoom.on("beforeTransform", this.onBeforeTransform), this.panzoom.on("endAnimation", this.onEndAnimation);
      }
    }, {
      key: "attachEvents",
      value: function attachEvents() {
        var t = this.container;t && (t.addEventListener("click", this.onClick, { passive: !1, capture: !1 }), t.addEventListener("slideTo", this.onSlideTo)), window.addEventListener("resize", this.onResize);
      }
    }, {
      key: "createPages",
      value: function createPages() {
        var t = [];var e = this.contentDim,
            i = this.viewportDim;
        var n = this.option("slidesPerPage");n = ("auto" === n || e <= i) && !1 !== this.option("fill") ? 1 / 0 : parseFloat(n + "");var s = 0,
            o = 0,
            a = 0;var _iteratorNormalCompletion22 = true;
        var _didIteratorError22 = false;
        var _iteratorError22 = undefined;

        try {
          for (var _iterator22 = this.slides[Symbol.iterator](), _step22; !(_iteratorNormalCompletion22 = (_step22 = _iterator22.next()).done); _iteratorNormalCompletion22 = true) {
            var _e19 = _step22.value;
            (!t.length || o + _e19.dim - i > .05 || a >= n) && (t.push(_()), s = t.length - 1, o = 0, a = 0), t[s].slides.push(_e19), o += _e19.dim + _e19.gap, a++;
          }
        } catch (err) {
          _didIteratorError22 = true;
          _iteratorError22 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion22 && _iterator22.return) {
              _iterator22.return();
            }
          } finally {
            if (_didIteratorError22) {
              throw _iteratorError22;
            }
          }
        }

        return t;
      }
    }, {
      key: "processPages",
      value: function processPages() {
        var t = this.pages,
            i = this.contentDim,
            n = this.viewportDim,
            s = this.isInfinite,
            o = this.option("center"),
            a = this.option("fill"),
            r = a && o && i > n && !s;if (t.forEach(function (t, e) {
          var s;t.index = e, t.pos = (null === (s = t.slides[0]) || void 0 === s ? void 0 : s.pos) || 0, t.dim = 0;var _iteratorNormalCompletion23 = true;
          var _didIteratorError23 = false;
          var _iteratorError23 = undefined;

          try {
            for (var _iterator23 = t.slides.entries()[Symbol.iterator](), _step23; !(_iteratorNormalCompletion23 = (_step23 = _iterator23.next()).done); _iteratorNormalCompletion23 = true) {
              var _ref16 = _step23.value;

              var _ref17 = _slicedToArray(_ref16, 2);

              var _e20 = _ref17[0];
              var _i18 = _ref17[1];
              t.dim += _i18.dim, _e20 < t.slides.length - 1 && (t.dim += _i18.gap);
            }
          } catch (err) {
            _didIteratorError23 = true;
            _iteratorError23 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion23 && _iterator23.return) {
                _iterator23.return();
              }
            } finally {
              if (_didIteratorError23) {
                throw _iteratorError23;
              }
            }
          }

          r && t.pos + .5 * t.dim < .5 * n ? t.pos = 0 : r && t.pos + .5 * t.dim >= i - .5 * n ? t.pos = i - n : o && (t.pos += -.5 * (n - t.dim));
        }), t.forEach(function (t) {
          a && !s && i > n && (t.pos = Math.max(t.pos, 0), t.pos = Math.min(t.pos, i - n)), t.pos = e(t.pos, 1e3), t.dim = e(t.dim, 1e3), Math.abs(t.pos) <= .1 && (t.pos = 0);
        }), s) return t;var l = [];var c = void 0;return t.forEach(function (t) {
          var e = Object.assign({}, t);c && e.pos === c.pos ? (c.dim += e.dim, c.slides = [].concat(_toConsumableArray(c.slides), _toConsumableArray(e.slides))) : (e.index = l.length, c = e, l.push(e));
        }), l;
      }
    }, {
      key: "getPageFromIndex",
      value: function getPageFromIndex() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var e = this.pages.length;var i = void 0;return t = parseInt((t || 0).toString()) || 0, i = this.isInfinite ? (t % e + e) % e : Math.max(Math.min(t, e - 1), 0), i;
      }
    }, {
      key: "getSlideMetrics",
      value: function getSlideMetrics(t) {
        var i, n;var s = this.isHorizontal ? "width" : "height";var o = 0,
            a = 0,
            r = t.el;var l = !(!r || r.parentNode);if (r ? o = parseFloat(r.dataset[s] || "") || 0 : (r = document.createElement("div"), r.style.visibility = "hidden", (this.track || document.body).prepend(r)), C(r, this.cn(Q) + " " + t.class + " " + t.customClass), o) r.style[s] = o + "px", r.style["width" === s ? "height" : "width"] = "";else {
          l && (this.track || document.body).prepend(r), o = r.getBoundingClientRect()[s] * Math.max(1, (null === (i = window.visualViewport) || void 0 === i ? void 0 : i.scale) || 1);var _t30 = r[this.isHorizontal ? "offsetWidth" : "offsetHeight"];_t30 - 1 > o && (o = _t30);
        }var c = getComputedStyle(r);return "content-box" === c.boxSizing && (this.isHorizontal ? (o += parseFloat(c.paddingLeft) || 0, o += parseFloat(c.paddingRight) || 0) : (o += parseFloat(c.paddingTop) || 0, o += parseFloat(c.paddingBottom) || 0)), a = parseFloat(c[this.isHorizontal ? "marginRight" : "marginBottom"]) || 0, l ? null === (n = r.parentElement) || void 0 === n || n.removeChild(r) : t.el || r.remove(), { dim: e(o, 1e3), gap: e(a, 1e3) };
      }
    }, {
      key: "getBounds",
      value: function getBounds() {
        var t = this.isInfinite,
            e = this.isRTL,
            i = this.isHorizontal,
            n = this.pages;
        var s = { min: 0, max: 0 };if (t) s = { min: -1 / 0, max: 1 / 0 };else if (n.length) {
          var _t31 = n[0].pos,
              _o2 = n[n.length - 1].pos;s = e && i ? { min: _t31, max: _o2 } : { min: -1 * _o2, max: -1 * _t31 };
        }return { x: i ? s : { min: 0, max: 0 }, y: i ? { min: 0, max: 0 } : s };
      }
    }, {
      key: "repositionSlides",
      value: function repositionSlides() {
        var t = void 0,
            i = this.isHorizontal,
            n = this.isRTL,
            s = this.isInfinite,
            o = this.viewport,
            a = this.viewportDim,
            r = this.contentDim,
            l = this.page,
            c = this.pages,
            h = this.slides,
            d = this.panzoom,
            u = 0,
            p = 0,
            f = 0,
            g = 0;d ? g = -1 * d.current[this.axis] : c[l] && (g = c[l].pos || 0), t = i ? n ? "right" : "left" : "top", n && i && (g *= -1);var _iteratorNormalCompletion24 = true;
        var _didIteratorError24 = false;
        var _iteratorError24 = undefined;

        try {
          for (var _iterator24 = h[Symbol.iterator](), _step24; !(_iteratorNormalCompletion24 = (_step24 = _iterator24.next()).done); _iteratorNormalCompletion24 = true) {
            var _i19 = _step24.value;
            var _n7 = _i19.el;_n7 ? ("top" === t ? (_n7.style.right = "", _n7.style.left = "") : _n7.style.top = "", _i19.index !== u ? _n7.style[t] = 0 === p ? "" : e(p, 1e3) + "px" : _n7.style[t] = "", f += _i19.dim + _i19.gap, u++) : p += _i19.dim + _i19.gap;
          }
        } catch (err) {
          _didIteratorError24 = true;
          _iteratorError24 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion24 && _iterator24.return) {
              _iterator24.return();
            }
          } finally {
            if (_didIteratorError24) {
              throw _iteratorError24;
            }
          }
        }

        if (s && f && o) {
          var _n8 = getComputedStyle(o),
              _s5 = "padding",
              _l = i ? "Right" : "Bottom",
              _c2 = parseFloat(_n8[_s5 + (i ? "Left" : "Top")]);g -= _c2, a += _c2, a += parseFloat(_n8[_s5 + _l]);var _iteratorNormalCompletion25 = true;
          var _didIteratorError25 = false;
          var _iteratorError25 = undefined;

          try {
            for (var _iterator25 = h[Symbol.iterator](), _step25; !(_iteratorNormalCompletion25 = (_step25 = _iterator25.next()).done); _iteratorNormalCompletion25 = true) {
              var _i20 = _step25.value;
              _i20.el && (e(_i20.pos) < e(a) && e(_i20.pos + _i20.dim + _i20.gap) < e(g) && e(g) > e(r - a) && (_i20.el.style[t] = e(p + f, 1e3) + "px"), e(_i20.pos + _i20.gap) >= e(r - a) && e(_i20.pos) > e(g + a) && e(g) < e(a) && (_i20.el.style[t] = "-" + e(f, 1e3) + "px"));
            }
          } catch (err) {
            _didIteratorError25 = true;
            _iteratorError25 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion25 && _iterator25.return) {
                _iterator25.return();
              }
            } finally {
              if (_didIteratorError25) {
                throw _iteratorError25;
              }
            }
          }
        }var m = void 0,
            v = void 0,
            b = [].concat(_toConsumableArray(this.inTransition));if (b.length > 1 && (m = c[b[0]], v = c[b[1]]), m && v) {
          var _i21 = 0;var _iteratorNormalCompletion26 = true;
          var _didIteratorError26 = false;
          var _iteratorError26 = undefined;

          try {
            for (var _iterator26 = h[Symbol.iterator](), _step26; !(_iteratorNormalCompletion26 = (_step26 = _iterator26.next()).done); _iteratorNormalCompletion26 = true) {
              var _n9 = _step26.value;
              _n9.el ? this.inTransition.has(_n9.index) && m.slides.indexOf(_n9) < 0 && (_n9.el.style[t] = e(_i21 + (m.pos - v.pos), 1e3) + "px") : _i21 += _n9.dim + _n9.gap;
            }
          } catch (err) {
            _didIteratorError26 = true;
            _iteratorError26 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion26 && _iterator26.return) {
                _iterator26.return();
              }
            } finally {
              if (_didIteratorError26) {
                throw _iteratorError26;
              }
            }
          }
        }
      }
    }, {
      key: "createSlideEl",
      value: function createSlideEl(t) {
        var e = this.track,
            i = this.slides;
        if (!e || !t) return;if (t.el && t.el.parentNode) return;var n = t.el || document.createElement("div");C(n, this.cn(Q)), C(n, t.class), C(n, t.customClass);var s = t.html;s && (s instanceof HTMLElement ? n.appendChild(s) : n.innerHTML = t.html + "");var o = [];i.forEach(function (t, e) {
          t.el && o.push(e);
        });var a = t.index;var r = null;if (o.length) {
          r = i[o.reduce(function (t, e) {
            return Math.abs(e - a) < Math.abs(t - a) ? e : t;
          })];
        }var l = r && r.el && r.el.parentNode ? r.index < t.index ? r.el.nextSibling : r.el : null;e.insertBefore(n, e.contains(l) ? l : null), t.el = n, this.emit("createSlide", t);
      }
    }, {
      key: "removeSlideEl",
      value: function removeSlideEl(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
        var i = null == t ? void 0 : t.el;if (!i || !i.parentNode) return;var n = this.cn(J);if (i.classList.contains(n) && (P(i, n), this.emit("unselectSlide", t)), t.isDom && !e) return i.removeAttribute("aria-hidden"), i.removeAttribute("data-index"), void (i.style.left = "");this.emit("removeSlide", t);var s = new CustomEvent(K);i.dispatchEvent(s), t.el && (t.el.remove(), t.el = null);
      }
    }, {
      key: "transitionTo",
      value: function transitionTo() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.option("transition");
        var i, n, s, o;if (!e) return !1;var a = this.page,
            r = this.pages,
            l = this.panzoom;t = parseInt((t || 0).toString()) || 0;var c = this.getPageFromIndex(t);if (!l || !r[c] || r.length < 2 || Math.abs(((null === (n = null === (i = r[a]) || void 0 === i ? void 0 : i.slides[0]) || void 0 === n ? void 0 : n.dim) || 0) - this.viewportDim) > 1) return !1;var h = t > a ? 1 : -1;this.isInfinite && (0 === a && t === r.length - 1 && (h = -1), a === r.length - 1 && 0 === t && (h = 1));var d = r[c].pos * (this.isRTL ? 1 : -1);if (a === c && Math.abs(d - l.target[this.axis]) < 1) return !1;this.clearTransitions();var u = l.isResting;C(this.container, this.cn("inTransition"));var p = (null === (s = r[a]) || void 0 === s ? void 0 : s.slides[0]) || null,
            f = (null === (o = r[c]) || void 0 === o ? void 0 : o.slides[0]) || null;this.inTransition.add(f.index), this.createSlideEl(f);var g = p.el,
            m = f.el;u || e === Q || (e = "fadeFast", g = null);var v = this.isRTL ? "next" : "prev",
            b = this.isRTL ? "prev" : "next";return g && (this.inTransition.add(p.index), p.transition = e, g.addEventListener(K, this.onAnimationEnd), g.classList.add("f-" + e + "Out", "to-" + (h > 0 ? b : v))), m && (f.transition = e, m.addEventListener(K, this.onAnimationEnd), m.classList.add("f-" + e + "In", "from-" + (h > 0 ? v : b))), l.current[this.axis] = d, l.target[this.axis] = d, l.requestTick(), this.onChange(c), !0;
      }
    }, {
      key: "manageSlideVisiblity",
      value: function manageSlideVisiblity() {
        var t = new Set(),
            e = new Set(),
            i = this.getVisibleSlides(parseFloat(this.option("preload", 0) + "") || 0);var _iteratorNormalCompletion27 = true;
        var _didIteratorError27 = false;
        var _iteratorError27 = undefined;

        try {
          for (var _iterator27 = this.slides[Symbol.iterator](), _step27; !(_iteratorNormalCompletion27 = (_step27 = _iterator27.next()).done); _iteratorNormalCompletion27 = true) {
            var _n10 = _step27.value;
            i.has(_n10) ? t.add(_n10) : e.add(_n10);
          }
        } catch (err) {
          _didIteratorError27 = true;
          _iteratorError27 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion27 && _iterator27.return) {
              _iterator27.return();
            }
          } finally {
            if (_didIteratorError27) {
              throw _iteratorError27;
            }
          }
        }

        var _iteratorNormalCompletion28 = true;
        var _didIteratorError28 = false;
        var _iteratorError28 = undefined;

        try {
          for (var _iterator28 = this.inTransition[Symbol.iterator](), _step28; !(_iteratorNormalCompletion28 = (_step28 = _iterator28.next()).done); _iteratorNormalCompletion28 = true) {
            var _e21 = _step28.value;
            t.add(this.slides[_e21]);
          }
        } catch (err) {
          _didIteratorError28 = true;
          _iteratorError28 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion28 && _iterator28.return) {
              _iterator28.return();
            }
          } finally {
            if (_didIteratorError28) {
              throw _iteratorError28;
            }
          }
        }

        var _iteratorNormalCompletion29 = true;
        var _didIteratorError29 = false;
        var _iteratorError29 = undefined;

        try {
          for (var _iterator29 = t[Symbol.iterator](), _step29; !(_iteratorNormalCompletion29 = (_step29 = _iterator29.next()).done); _iteratorNormalCompletion29 = true) {
            var _e22 = _step29.value;
            this.createSlideEl(_e22), this.lazyLoadSlide(_e22);
          }
        } catch (err) {
          _didIteratorError29 = true;
          _iteratorError29 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion29 && _iterator29.return) {
              _iterator29.return();
            }
          } finally {
            if (_didIteratorError29) {
              throw _iteratorError29;
            }
          }
        }

        var _iteratorNormalCompletion30 = true;
        var _didIteratorError30 = false;
        var _iteratorError30 = undefined;

        try {
          for (var _iterator30 = e[Symbol.iterator](), _step30; !(_iteratorNormalCompletion30 = (_step30 = _iterator30.next()).done); _iteratorNormalCompletion30 = true) {
            var _i22 = _step30.value;
            t.has(_i22) || this.removeSlideEl(_i22);
          }
        } catch (err) {
          _didIteratorError30 = true;
          _iteratorError30 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion30 && _iterator30.return) {
              _iterator30.return();
            }
          } finally {
            if (_didIteratorError30) {
              throw _iteratorError30;
            }
          }
        }

        this.markSelectedSlides(), this.repositionSlides();
      }
    }, {
      key: "markSelectedSlides",
      value: function markSelectedSlides() {
        if (!this.pages[this.page] || !this.pages[this.page].slides) return;var t = "aria-hidden";var e = this.cn(J);if (e) {
          var _iteratorNormalCompletion31 = true;
          var _didIteratorError31 = false;
          var _iteratorError31 = undefined;

          try {
            for (var _iterator31 = this.slides[Symbol.iterator](), _step31; !(_iteratorNormalCompletion31 = (_step31 = _iterator31.next()).done); _iteratorNormalCompletion31 = true) {
              var i = _step31.value;
              var _n11 = i.el;_n11 && (_n11.dataset.index = "" + i.index, _n11.classList.contains("f-thumbs__slide") ? this.getVisibleSlides(0).has(i) ? _n11.removeAttribute(t) : _n11.setAttribute(t, "true") : this.pages[this.page].slides.includes(i) ? (_n11.classList.contains(e) || (C(_n11, e), this.emit("selectSlide", i)), _n11.removeAttribute(t)) : (_n11.classList.contains(e) && (P(_n11, e), this.emit("unselectSlide", i)), _n11.setAttribute(t, "true")));
            }
          } catch (err) {
            _didIteratorError31 = true;
            _iteratorError31 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion31 && _iterator31.return) {
                _iterator31.return();
              }
            } finally {
              if (_didIteratorError31) {
                throw _iteratorError31;
              }
            }
          }
        }
      }
    }, {
      key: "flipInfiniteTrack",
      value: function flipInfiniteTrack() {
        var t = this.axis,
            e = this.isHorizontal,
            i = this.isInfinite,
            n = this.isRTL,
            s = this.viewportDim,
            o = this.contentDim,
            a = this.panzoom;
        if (!a || !i) return;var r = a.current[t],
            l = a.target[t] - r,
            c = 0,
            h = .5 * s;n && e ? (r < -h && (c = -1, r += o), r > o - h && (c = 1, r -= o)) : (r > h && (c = 1, r -= o), r < -o + h && (c = -1, r += o)), c && (a.current[t] = r, a.target[t] = r + l);
      }
    }, {
      key: "lazyLoadImg",
      value: function lazyLoadImg(t, e) {
        var _this20 = this;

        var i = this,
            n = "f-fadeIn",
            o = "is-preloading";var a = !1,
            r = null;var l = function l() {
          a || (a = !0, r && (r.remove(), r = null), P(e, o), e.complete && (C(e, n), setTimeout(function () {
            P(e, n);
          }, 350)), _this20.option("adaptiveHeight") && t.el && _this20.pages[_this20.page].slides.indexOf(t) > -1 && (i.updateMetrics(), i.setViewportHeight()), _this20.emit("load", t));
        };C(e, o), e.src = e.dataset.lazySrcset || e.dataset.lazySrc || "", delete e.dataset.lazySrc, delete e.dataset.lazySrcset, e.addEventListener("error", function () {
          l();
        }), e.addEventListener("load", function () {
          l();
        }), setTimeout(function () {
          var i = e.parentNode;i && t.el && (e.complete ? l() : a || (r = s(E), i.insertBefore(r, e)));
        }, 300);
      }
    }, {
      key: "lazyLoadSlide",
      value: function lazyLoadSlide(t) {
        var e = t && t.el;if (!e) return;var i = new Set();var n = Array.from(e.querySelectorAll("[data-lazy-src],[data-lazy-srcset]"));e.dataset.lazySrc && n.push(e), n.map(function (t) {
          t instanceof HTMLImageElement ? i.add(t) : t instanceof HTMLElement && t.dataset.lazySrc && (t.style.backgroundImage = "url('" + t.dataset.lazySrc + "')", delete t.dataset.lazySrc);
        });var _iteratorNormalCompletion32 = true;
        var _didIteratorError32 = false;
        var _iteratorError32 = undefined;

        try {
          for (var _iterator32 = i[Symbol.iterator](), _step32; !(_iteratorNormalCompletion32 = (_step32 = _iterator32.next()).done); _iteratorNormalCompletion32 = true) {
            var _e23 = _step32.value;
            this.lazyLoadImg(t, _e23);
          }
        } catch (err) {
          _didIteratorError32 = true;
          _iteratorError32 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion32 && _iterator32.return) {
              _iterator32.return();
            }
          } finally {
            if (_didIteratorError32) {
              throw _iteratorError32;
            }
          }
        }
      }
    }, {
      key: "onAnimationEnd",
      value: function onAnimationEnd(t) {
        var e;var i = t.target,
            n = i ? parseInt(i.dataset.index || "", 10) || 0 : -1,
            s = this.slides[n],
            o = t.animationName;if (!i || !s || !o) return;var a = !!this.inTransition.has(n) && s.transition;a && o.substring(0, a.length + 2) === "f-" + a && this.inTransition.delete(n), this.inTransition.size || this.clearTransitions(), n === this.page && (null === (e = this.panzoom) || void 0 === e ? void 0 : e.isResting) && this.emit("settle");
      }
    }, {
      key: "onDecel",
      value: function onDecel(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
        var s = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
        if (this.option("dragFree")) return void this.setPageFromPosition();var o = this.isRTL,
            a = this.isHorizontal,
            r = this.axis,
            l = this.pages,
            c = l.length,
            h = Math.abs(Math.atan2(i, e) / (Math.PI / 180));
        var d = 0;if (d = h > 45 && h < 135 ? a ? 0 : i : a ? e : 0, !c) return;var u = this.page,
            p = o && a ? 1 : -1;var f = t.current[r] * p;
        var _getPageFromPosition = this.getPageFromPosition(f),
            g = _getPageFromPosition.pageIndex;

        Math.abs(d) > 5 ? (l[u].dim < document.documentElement["client" + (this.isHorizontal ? "Width" : "Height")] - 1 && (u = g), u = o && a ? d < 0 ? u - 1 : u + 1 : d < 0 ? u + 1 : u - 1) : u = 0 === n && 0 === s ? u : g, this.slideTo(u, { transition: !1, friction: t.option("decelFriction") });
      }
    }, {
      key: "onClick",
      value: function onClick(t) {
        var e = t.target,
            i = e && S(e) ? e.dataset : null;var n = void 0,
            s = void 0;i && (void 0 !== i.carouselPage ? (s = "slideTo", n = i.carouselPage) : void 0 !== i.carouselNext ? s = "slideNext" : void 0 !== i.carouselPrev && (s = "slidePrev")), s ? (t.preventDefault(), t.stopPropagation(), e && !e.hasAttribute("disabled") && this[s](n)) : this.emit("click", t);
      }
    }, {
      key: "onSlideTo",
      value: function onSlideTo(t) {
        var e = t.detail || 0;this.slideTo(this.getPageForSlide(e), { friction: 0 });
      }
    }, {
      key: "onChange",
      value: function onChange(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var i = this.page;this.prevPage = i, this.page = t, this.option("adaptiveHeight") && this.setViewportHeight(), t !== i && (this.markSelectedSlides(), this.emit("change", t, i, e));
      }
    }, {
      key: "onRefresh",
      value: function onRefresh() {
        var t = this.contentDim,
            e = this.viewportDim;this.updateMetrics(), this.contentDim === t && this.viewportDim === e || this.slideTo(this.page, { friction: 0, transition: !1 });
      }
    }, {
      key: "onScroll",
      value: function onScroll() {
        var t;null === (t = this.viewport) || void 0 === t || t.scroll(0, 0);
      }
    }, {
      key: "onResize",
      value: function onResize() {
        this.option("breakpoints") && this.processOptions();
      }
    }, {
      key: "onBeforeTransform",
      value: function onBeforeTransform(t) {
        this.lp !== t.current[this.axis] && (this.flipInfiniteTrack(), this.manageSlideVisiblity()), this.lp = t.current.e;
      }
    }, {
      key: "onEndAnimation",
      value: function onEndAnimation() {
        this.inTransition.size || this.emit("settle");
      }
    }, {
      key: "reInit",
      value: function reInit() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        this.destroy(), this.state = H.Init, this.prevPage = null, this.userOptions = t || this.userOptions, this.userPlugins = e || this.userPlugins, this.processOptions();
      }
    }, {
      key: "slideTo",
      value: function slideTo() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

        var _ref18 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            _ref18$friction = _ref18.friction,
            e = _ref18$friction === undefined ? this.option("friction") : _ref18$friction,
            _ref18$transition = _ref18.transition,
            i = _ref18$transition === undefined ? this.option("transition") : _ref18$transition;

        if (this.state === H.Destroy) return;t = parseInt((t || 0).toString()) || 0;var n = this.getPageFromIndex(t),
            s = this.axis,
            o = this.isHorizontal,
            a = this.isRTL,
            r = this.pages,
            l = this.panzoom,
            c = r.length,
            h = a && o ? 1 : -1;if (!l || !c) return;if (this.page !== n) {
          var _e24 = new Event("beforeChange", { bubbles: !0, cancelable: !0 });if (this.emit("beforeChange", _e24, t), _e24.defaultPrevented) return;
        }if (this.transitionTo(t, i)) return;var d = r[n].pos;if (this.isInfinite) {
          var _e25 = this.contentDim,
              _i23 = l.target[s] * h;if (2 === c) d += _e25 * Math.floor(parseFloat(t + "") / 2);else {
            d = [d, d - _e25, d + _e25].reduce(function (t, e) {
              return Math.abs(e - _i23) < Math.abs(t - _i23) ? e : t;
            });
          }
        }d *= h, Math.abs(l.target[s] - d) < 1 || (l.panTo({ x: o ? d : 0, y: o ? 0 : d, friction: e }), this.onChange(n));
      }
    }, {
      key: "slideToClosest",
      value: function slideToClosest(t) {
        if (this.panzoom) {
          var _getPageFromPosition2 = this.getPageFromPosition(),
              _e26 = _getPageFromPosition2.pageIndex;

          this.slideTo(_e26, t);
        }
      }
    }, {
      key: "slideNext",
      value: function slideNext() {
        this.slideTo(this.page + 1);
      }
    }, {
      key: "slidePrev",
      value: function slidePrev() {
        this.slideTo(this.page - 1);
      }
    }, {
      key: "clearTransitions",
      value: function clearTransitions() {
        this.inTransition.clear(), P(this.container, this.cn("inTransition"));var t = ["to-prev", "to-next", "from-prev", "from-next"];var _iteratorNormalCompletion33 = true;
        var _didIteratorError33 = false;
        var _iteratorError33 = undefined;

        try {
          for (var _iterator33 = this.slides[Symbol.iterator](), _step33; !(_iteratorNormalCompletion33 = (_step33 = _iterator33.next()).done); _iteratorNormalCompletion33 = true) {
            var _e27 = _step33.value;
            var i = _e27.el;if (i) {
              var _i$classList;

              i.removeEventListener(K, this.onAnimationEnd), (_i$classList = i.classList).remove.apply(_i$classList, t);var _n12 = _e27.transition;_n12 && i.classList.remove("f-" + _n12 + "Out", "f-" + _n12 + "In");
            }
          }
        } catch (err) {
          _didIteratorError33 = true;
          _iteratorError33 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion33 && _iterator33.return) {
              _iterator33.return();
            }
          } finally {
            if (_didIteratorError33) {
              throw _iteratorError33;
            }
          }
        }

        this.manageSlideVisiblity();
      }
    }, {
      key: "addSlide",
      value: function addSlide(t, e) {
        var _slides;

        var i, n, s, o;var a = this.panzoom,
            r = (null === (i = this.pages[this.page]) || void 0 === i ? void 0 : i.pos) || 0,
            l = (null === (n = this.pages[this.page]) || void 0 === n ? void 0 : n.dim) || 0,
            c = this.contentDim < this.viewportDim;var h = Array.isArray(e) ? e : [e];var d = [];var _iteratorNormalCompletion34 = true;
        var _didIteratorError34 = false;
        var _iteratorError34 = undefined;

        try {
          for (var _iterator34 = h[Symbol.iterator](), _step34; !(_iteratorNormalCompletion34 = (_step34 = _iterator34.next()).done); _iteratorNormalCompletion34 = true) {
            var _t32 = _step34.value;
            d.push(N(_t32));
          }
        } catch (err) {
          _didIteratorError34 = true;
          _iteratorError34 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion34 && _iterator34.return) {
              _iterator34.return();
            }
          } finally {
            if (_didIteratorError34) {
              throw _iteratorError34;
            }
          }
        }

        (_slides = this.slides).splice.apply(_slides, [t, 0].concat(d));for (var _t33 = 0; _t33 < this.slides.length; _t33++) {
          this.slides[_t33].index = _t33;
        }var _iteratorNormalCompletion35 = true;
        var _didIteratorError35 = false;
        var _iteratorError35 = undefined;

        try {
          for (var _iterator35 = d[Symbol.iterator](), _step35; !(_iteratorNormalCompletion35 = (_step35 = _iterator35.next()).done); _iteratorNormalCompletion35 = true) {
            var _t34 = _step35.value;
            this.emit("beforeInitSlide", _t34, _t34.index);
          }
        } catch (err) {
          _didIteratorError35 = true;
          _iteratorError35 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion35 && _iterator35.return) {
              _iterator35.return();
            }
          } finally {
            if (_didIteratorError35) {
              throw _iteratorError35;
            }
          }
        }

        if (this.page >= t && (this.page += d.length), this.updateMetrics(), a) {
          var _e28 = (null === (s = this.pages[this.page]) || void 0 === s ? void 0 : s.pos) || 0,
              _i24 = (null === (o = this.pages[this.page]) || void 0 === o ? void 0 : o.dim) || 0,
              _n13 = this.pages.length || 1,
              _h2 = this.isRTL ? l - _i24 : _i24 - l,
              _d3 = this.isRTL ? r - _e28 : _e28 - r;c && 1 === _n13 ? (t <= this.page && (a.current[this.axis] -= _h2, a.target[this.axis] -= _h2), a.panTo(_defineProperty({}, this.isHorizontal ? "x" : "y", -1 * _e28))) : _d3 && t <= this.page && (a.target[this.axis] -= _d3, a.current[this.axis] -= _d3, a.requestTick());
        }var _iteratorNormalCompletion36 = true;
        var _didIteratorError36 = false;
        var _iteratorError36 = undefined;

        try {
          for (var _iterator36 = d[Symbol.iterator](), _step36; !(_iteratorNormalCompletion36 = (_step36 = _iterator36.next()).done); _iteratorNormalCompletion36 = true) {
            var _t35 = _step36.value;
            this.emit("initSlide", _t35, _t35.index);
          }
        } catch (err) {
          _didIteratorError36 = true;
          _iteratorError36 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion36 && _iterator36.return) {
              _iterator36.return();
            }
          } finally {
            if (_didIteratorError36) {
              throw _iteratorError36;
            }
          }
        }
      }
    }, {
      key: "prependSlide",
      value: function prependSlide(t) {
        this.addSlide(0, t);
      }
    }, {
      key: "appendSlide",
      value: function appendSlide(t) {
        this.addSlide(this.slides.length, t);
      }
    }, {
      key: "removeSlide",
      value: function removeSlide(t) {
        var e = this.slides.length;t = (t % e + e) % e;var i = this.slides[t];if (i) {
          this.removeSlideEl(i, !0), this.slides.splice(t, 1);for (var _t36 = 0; _t36 < this.slides.length; _t36++) {
            this.slides[_t36].index = _t36;
          }this.updateMetrics(), this.slideTo(this.page, { friction: 0, transition: !1 }), this.emit("destroySlide", i);
        }
      }
    }, {
      key: "updateMetrics",
      value: function updateMetrics() {
        var t = this.panzoom,
            i = this.viewport,
            n = this.track,
            s = this.slides,
            o = this.isHorizontal,
            a = this.isInfinite;
        if (!n) return;var r = o ? "width" : "height",
            l = o ? "offsetWidth" : "offsetHeight";if (i) {
          var _t37 = Math.max(i[l], e(i.getBoundingClientRect()[r], 1e3)),
              _n14 = getComputedStyle(i),
              _s6 = "padding",
              _a2 = o ? "Right" : "Bottom";_t37 -= parseFloat(_n14[_s6 + (o ? "Left" : "Top")]) + parseFloat(_n14[_s6 + _a2]), this.viewportDim = _t37;
        }var c = void 0,
            h = 0;var _iteratorNormalCompletion37 = true;
        var _didIteratorError37 = false;
        var _iteratorError37 = undefined;

        try {
          for (var _iterator37 = s.entries()[Symbol.iterator](), _step37; !(_iteratorNormalCompletion37 = (_step37 = _iterator37.next()).done); _iteratorNormalCompletion37 = true) {
            var _getSlideMetrics;

            var _ref19 = _step37.value;

            var _ref20 = _slicedToArray(_ref19, 2);

            var _t38 = _ref20[0];
            var _i25 = _ref20[1];
            var _n15 = 0,
                _o3 = 0;!_i25.el && c ? (_n15 = c.dim, _o3 = c.gap) : ((_getSlideMetrics = this.getSlideMetrics(_i25), _n15 = _getSlideMetrics.dim, _o3 = _getSlideMetrics.gap, _getSlideMetrics), c = _i25), _n15 = e(_n15, 1e3), _o3 = e(_o3, 1e3), _i25.dim = _n15, _i25.gap = _o3, _i25.pos = h, h += _n15, (a || _t38 < s.length - 1) && (h += _o3);
          }
        } catch (err) {
          _didIteratorError37 = true;
          _iteratorError37 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion37 && _iterator37.return) {
              _iterator37.return();
            }
          } finally {
            if (_didIteratorError37) {
              throw _iteratorError37;
            }
          }
        }

        h = e(h, 1e3), this.contentDim = h, t && (t.contentRect[r] = h, t.contentRect[o ? "fullWidth" : "fullHeight"] = h), this.pages = this.createPages(), this.pages = this.processPages(), this.state === H.Init && this.setInitialPage(), this.page = Math.max(0, Math.min(this.page, this.pages.length - 1)), this.manageSlideVisiblity(), this.emit("refresh");
      }
    }, {
      key: "getProgress",
      value: function getProgress(t) {
        var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
        void 0 === t && (t = this.page);var s = this,
            o = s.panzoom,
            a = s.contentDim,
            r = s.pages[t] || 0;if (!r || !o) return t > this.page ? -1 : 1;var l = -1 * o.current.e,
            c = e((l - r.pos) / (1 * r.dim), 1e3),
            h = c,
            d = c;this.isInfinite && !0 !== n && (h = e((l - r.pos + a) / (1 * r.dim), 1e3), d = e((l - r.pos - a) / (1 * r.dim), 1e3));var u = [c, h, d].reduce(function (t, e) {
          return Math.abs(e) < Math.abs(t) ? e : t;
        });return i ? u : u > 1 ? 1 : u < -1 ? -1 : u;
      }
    }, {
      key: "setViewportHeight",
      value: function setViewportHeight() {
        var t = this.page,
            e = this.pages,
            i = this.viewport,
            n = this.isHorizontal;
        if (!i || !e[t]) return;var s = 0;n && this.track && (this.track.style.height = "auto", e[t].slides.forEach(function (t) {
          t.el && (s = Math.max(s, t.el.offsetHeight));
        })), i.style.height = s ? s + "px" : "";
      }
    }, {
      key: "getPageForSlide",
      value: function getPageForSlide(t) {
        var _iteratorNormalCompletion38 = true;
        var _didIteratorError38 = false;
        var _iteratorError38 = undefined;

        try {
          for (var _iterator38 = this.pages[Symbol.iterator](), _step38; !(_iteratorNormalCompletion38 = (_step38 = _iterator38.next()).done); _iteratorNormalCompletion38 = true) {
            var _e29 = _step38.value;
            var _iteratorNormalCompletion39 = true;
            var _didIteratorError39 = false;
            var _iteratorError39 = undefined;

            try {
              for (var _iterator39 = _e29.slides[Symbol.iterator](), _step39; !(_iteratorNormalCompletion39 = (_step39 = _iterator39.next()).done); _iteratorNormalCompletion39 = true) {
                var i = _step39.value;
                if (i.index === t) return _e29.index;
              }
            } catch (err) {
              _didIteratorError39 = true;
              _iteratorError39 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion39 && _iterator39.return) {
                  _iterator39.return();
                }
              } finally {
                if (_didIteratorError39) {
                  throw _iteratorError39;
                }
              }
            }
          }
        } catch (err) {
          _didIteratorError38 = true;
          _iteratorError38 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion38 && _iterator38.return) {
              _iterator38.return();
            }
          } finally {
            if (_didIteratorError38) {
              throw _iteratorError38;
            }
          }
        }

        return -1;
      }
    }, {
      key: "getVisibleSlides",
      value: function getVisibleSlides() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var e;var i = new Set();var n = this.panzoom,
            s = this.contentDim,
            o = this.viewportDim,
            a = this.pages,
            r = this.page;
        if (o) {
          s = s + (null === (e = this.slides[this.slides.length - 1]) || void 0 === e ? void 0 : e.gap) || 0;var _l2 = 0;_l2 = n && n.state !== v.Init && n.state !== v.Destroy ? -1 * n.current[this.axis] : a[r] && a[r].pos || 0, this.isInfinite && (_l2 -= Math.floor(_l2 / s) * s), this.isRTL && this.isHorizontal && (_l2 *= -1);var _c3 = _l2 - o * t,
              _h3 = _l2 + o * (t + 1),
              _d4 = this.isInfinite ? [-1, 0, 1] : [0];var _iteratorNormalCompletion40 = true;
          var _didIteratorError40 = false;
          var _iteratorError40 = undefined;

          try {
            for (var _iterator40 = this.slides[Symbol.iterator](), _step40; !(_iteratorNormalCompletion40 = (_step40 = _iterator40.next()).done); _iteratorNormalCompletion40 = true) {
              var _t39 = _step40.value;
              var _iteratorNormalCompletion41 = true;
              var _didIteratorError41 = false;
              var _iteratorError41 = undefined;

              try {
                for (var _iterator41 = _d4[Symbol.iterator](), _step41; !(_iteratorNormalCompletion41 = (_step41 = _iterator41.next()).done); _iteratorNormalCompletion41 = true) {
                  var _e30 = _step41.value;
                  var _n16 = _t39.pos + _e30 * s,
                      _o4 = _n16 + _t39.dim + _t39.gap;_n16 < _h3 && _o4 > _c3 && i.add(_t39);
                }
              } catch (err) {
                _didIteratorError41 = true;
                _iteratorError41 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion41 && _iterator41.return) {
                    _iterator41.return();
                  }
                } finally {
                  if (_didIteratorError41) {
                    throw _iteratorError41;
                  }
                }
              }
            }
          } catch (err) {
            _didIteratorError40 = true;
            _iteratorError40 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion40 && _iterator40.return) {
                _iterator40.return();
              }
            } finally {
              if (_didIteratorError40) {
                throw _iteratorError40;
              }
            }
          }
        }return i;
      }
    }, {
      key: "getPageFromPosition",
      value: function getPageFromPosition(t) {
        var e = this.viewportDim,
            i = this.contentDim,
            n = this.slides,
            s = this.pages,
            o = this.panzoom,
            a = s.length,
            r = n.length,
            l = n[0],
            c = n[r - 1],
            h = this.option("center");
        var d = 0,
            u = 0,
            p = 0,
            f = void 0 === t ? -1 * ((null == o ? void 0 : o.target[this.axis]) || 0) : t;h && (f += .5 * e), this.isInfinite ? (f < l.pos - .5 * c.gap && (f -= i, p = -1), f > c.pos + c.dim + .5 * c.gap && (f -= i, p = 1)) : f = Math.max(l.pos || 0, Math.min(f, c.pos));var g = c,
            m = n.find(function (t) {
          var e = t.pos - .5 * g.gap,
              i = t.pos + t.dim + .5 * t.gap;return g = t, f >= e && f < i;
        });return m || (m = c), u = this.getPageForSlide(m.index), d = u + p * a, { page: d, pageIndex: u };
      }
    }, {
      key: "setPageFromPosition",
      value: function setPageFromPosition() {
        var _getPageFromPosition3 = this.getPageFromPosition(),
            t = _getPageFromPosition3.pageIndex;

        this.onChange(t);
      }
    }, {
      key: "destroy",
      value: function destroy() {
        var _this21 = this;

        if ([H.Destroy].includes(this.state)) return;this.state = H.Destroy;var t = this.container,
            e = this.viewport,
            i = this.track,
            n = this.slides,
            s = this.panzoom,
            o = this.option("classes");
        t.removeEventListener("click", this.onClick, { passive: !1, capture: !1 }), t.removeEventListener("slideTo", this.onSlideTo), window.removeEventListener("resize", this.onResize), s && (s.destroy(), this.panzoom = null), n && n.forEach(function (t) {
          _this21.removeSlideEl(t);
        }), this.detachPlugins(), e && (e.removeEventListener("scroll", this.onScroll), e.offsetParent && i && i.offsetParent && e.replaceWith.apply(e, _toConsumableArray(i.childNodes)));var _iteratorNormalCompletion42 = true;
        var _didIteratorError42 = false;
        var _iteratorError42 = undefined;

        try {
          for (var _iterator42 = Object.entries(o)[Symbol.iterator](), _step42; !(_iteratorNormalCompletion42 = (_step42 = _iterator42.next()).done); _iteratorNormalCompletion42 = true) {
            var _ref21 = _step42.value;

            var _ref22 = _slicedToArray(_ref21, 2);

            var _e31 = _ref22[0];
            var _i26 = _ref22[1];
            "container" !== _e31 && _i26 && t.classList.remove(_i26);
          }
        } catch (err) {
          _didIteratorError42 = true;
          _iteratorError42 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion42 && _iterator42.return) {
              _iterator42.return();
            }
          } finally {
            if (_didIteratorError42) {
              throw _iteratorError42;
            }
          }
        }

        this.track = null, this.viewport = null, this.page = 0, this.slides = [];var a = this.events.get("ready");this.events = new Map(), a && this.events.set("ready", a);
      }
    }]);

    return tt;
  }(m);

  Object.defineProperty(tt, "Panzoom", { enumerable: !0, configurable: !0, writable: !0, value: D }), Object.defineProperty(tt, "defaults", { enumerable: !0, configurable: !0, writable: !0, value: B }), Object.defineProperty(tt, "Plugins", { enumerable: !0, configurable: !0, writable: !0, value: G });var et = function et(t) {
    if (!S(t)) return 0;var e = window.scrollY,
        i = window.innerHeight,
        n = e + i,
        s = t.getBoundingClientRect(),
        o = s.y + e,
        a = s.height,
        r = o + a;if (e > r || n < o) return 0;if (e < o && n > r) return 100;if (o < e && r > n) return 100;var l = a;o < e && (l -= e - o), r > n && (l -= r - n);var c = l / i * 100;return Math.round(c);
  },
      it = !("undefined" == typeof window || !window.document || !window.document.createElement);var nt = void 0;var st = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden]):not(.fancybox-focus-guard)", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"]):not([disabled]):not([aria-hidden])'].join(","),
      ot = function ot(t) {
    if (t && it) {
      void 0 === nt && document.createElement("div").focus({ get preventScroll() {
          return nt = !0, !1;
        } });try {
        if (nt) t.focus({ preventScroll: !0 });else {
          var _e32 = window.scrollY || document.body.scrollTop,
              i = window.scrollX || document.body.scrollLeft;t.focus(), document.body.scrollTo({ top: _e32, left: i, behavior: "auto" });
        }
      } catch (t) {}
    }
  },
      at = function at() {
    var t = document;var e = void 0,
        i = "",
        n = "",
        s = "";return t.fullscreenEnabled ? (i = "requestFullscreen", n = "exitFullscreen", s = "fullscreenElement") : t.webkitFullscreenEnabled && (i = "webkitRequestFullscreen", n = "webkitExitFullscreen", s = "webkitFullscreenElement"), i && (e = { request: function request() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : t.documentElement;
        return "webkitRequestFullscreen" === i ? e[i](Element.ALLOW_KEYBOARD_INPUT) : e[i]();
      }, exit: function exit() {
        return t[s] && t[n]();
      }, isFullscreen: function isFullscreen() {
        return t[s];
      } }), e;
  },
      rt = { animated: !0, autoFocus: !0, backdropClick: "close", Carousel: { classes: { container: "fancybox__carousel", viewport: "fancybox__viewport", track: "fancybox__track", slide: "fancybox__slide" } }, closeButton: "auto", closeExisting: !1, commonCaption: !1, compact: function compact() {
      return window.matchMedia("(max-width: 578px), (max-height: 578px)").matches;
    }, contentClick: "toggleZoom", contentDblClick: !1, defaultType: "image", defaultDisplay: "flex", dragToClose: !0, Fullscreen: { autoStart: !1 }, groupAll: !1, groupAttr: "data-fancybox", hideClass: "f-fadeOut", hideScrollbar: !0, idle: 3500, keyboard: { Escape: "close", Delete: "close", Backspace: "close", PageUp: "next", PageDown: "prev", ArrowUp: "prev", ArrowDown: "next", ArrowRight: "next", ArrowLeft: "prev" }, l10n: Object.assign(Object.assign({}, y), { CLOSE: "Close", NEXT: "Next", PREV: "Previous", MODAL: "You can close this modal content with the ESC key", ERROR: "Something Went Wrong, Please Try Again Later", IMAGE_ERROR: "Image Not Found", ELEMENT_NOT_FOUND: "HTML Element Not Found", AJAX_NOT_FOUND: "Error Loading AJAX : Not Found", AJAX_FORBIDDEN: "Error Loading AJAX : Forbidden", IFRAME_ERROR: "Error Loading Page", TOGGLE_ZOOM: "Toggle zoom level", TOGGLE_THUMBS: "Toggle thumbnails", TOGGLE_SLIDESHOW: "Toggle slideshow", TOGGLE_FULLSCREEN: "Toggle full-screen mode", DOWNLOAD: "Download" }), parentEl: null, placeFocusBack: !0, showClass: "f-zoomInUp", startIndex: 0, tpl: { closeButton: '<button data-fancybox-close class="f-button is-close-btn" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"/></svg></button>', main: '<div class="fancybox__container" role="dialog" aria-modal="true" aria-label="{{MODAL}}" tabindex="-1">\n    <div class="fancybox__backdrop"></div>\n    <div class="fancybox__carousel"></div>\n    <div class="fancybox__footer"></div>\n  </div>' }, trapFocus: !0, wheel: "zoom" };var lt, ct;!function (t) {
    t[t.Init = 0] = "Init", t[t.Ready = 1] = "Ready", t[t.Closing = 2] = "Closing", t[t.CustomClosing = 3] = "CustomClosing", t[t.Destroy = 4] = "Destroy";
  }(lt || (lt = {})), function (t) {
    t[t.Loading = 0] = "Loading", t[t.Opening = 1] = "Opening", t[t.Ready = 2] = "Ready", t[t.Closing = 3] = "Closing";
  }(ct || (ct = {}));var ht = "",
      dt = !1,
      ut = !1,
      pt = null;var ft = function ft() {
    var t = "",
        e = "";var i = Ae.getInstance();if (i) {
      var n = i.carousel,
          s = i.getSlide();if (n && s) {
        var _o5 = s.slug || void 0,
            _a3 = s.triggerEl || void 0;e = _o5 || i.option("slug") || "", !e && _a3 && _a3.dataset && (e = _a3.dataset.fancybox || ""), e && "true" !== e && (t = "#" + e + (!_o5 && n.slides.length > 1 ? "-" + (s.index + 1) : ""));
      }
    }return { hash: t, slug: e, index: 1 };
  },
      gt = function gt() {
    var t = new URL(document.URL).hash,
        e = t.slice(1).split("-"),
        i = e[e.length - 1],
        n = i && /^\+?\d+$/.test(i) && parseInt(e.pop() || "1", 10) || 1;return { hash: t, slug: e.join("-"), index: n };
  },
      mt = function mt() {
    var _gt = gt(),
        t = _gt.slug,
        e = _gt.index;

    if (!t) return;var i = document.querySelector("[data-slug=\"" + t + "\"]");if (i && i.dispatchEvent(new CustomEvent("click", { bubbles: !0, cancelable: !0 })), Ae.getInstance()) return;var n = document.querySelectorAll("[data-fancybox=\"" + t + "\"]");n.length && (i = n[e - 1], i && i.dispatchEvent(new CustomEvent("click", { bubbles: !0, cancelable: !0 })));
  },
      vt = function vt() {
    if (!1 === Ae.defaults.Hash) return;var t = Ae.getInstance();if (!1 === (null == t ? void 0 : t.options.Hash)) return;
    var _gt2 = gt(),
        e = _gt2.slug,
        i = _gt2.index,
        _ft = ft(),
        n = _ft.slug;

    t && (e === n ? t.jumpTo(i - 1) : (dt = !0, t.close())), mt();
  },
      bt = function bt() {
    pt && clearTimeout(pt), queueMicrotask(function () {
      vt();
    });
  },
      yt = function yt() {
    window.addEventListener("hashchange", bt, !1), setTimeout(function () {
      vt();
    }, 500);
  };it && (/complete|interactive|loaded/.test(document.readyState) ? yt() : document.addEventListener("DOMContentLoaded", yt));var wt = "is-zooming-in";
  var xt = function (_$4) {
    _inherits(xt, _$4);

    function xt() {
      _classCallCheck(this, xt);

      return _possibleConstructorReturn(this, (xt.__proto__ || Object.getPrototypeOf(xt)).apply(this, arguments));
    }

    _createClass(xt, [{
      key: "onCreateSlide",
      value: function onCreateSlide(t, e, i) {
        var n = this.instance.optionFor(i, "src") || "";i.el && "image" === i.type && "string" == typeof n && this.setImage(i, n);
      }
    }, {
      key: "onRemoveSlide",
      value: function onRemoveSlide(t, e, i) {
        i.panzoom && i.panzoom.destroy(), i.panzoom = void 0, i.imageEl = void 0;
      }
    }, {
      key: "onChange",
      value: function onChange(t, e, i, n) {
        P(this.instance.container, wt);var _iteratorNormalCompletion43 = true;
        var _didIteratorError43 = false;
        var _iteratorError43 = undefined;

        try {
          for (var _iterator43 = e.slides[Symbol.iterator](), _step43; !(_iteratorNormalCompletion43 = (_step43 = _iterator43.next()).done); _iteratorNormalCompletion43 = true) {
            var _t40 = _step43.value;
            var _e33 = _t40.panzoom;_e33 && _t40.index !== i && _e33.reset(.35);
          }
        } catch (err) {
          _didIteratorError43 = true;
          _iteratorError43 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion43 && _iterator43.return) {
              _iterator43.return();
            }
          } finally {
            if (_didIteratorError43) {
              throw _iteratorError43;
            }
          }
        }
      }
    }, {
      key: "onClose",
      value: function onClose() {
        var t;var e = this.instance,
            i = e.container,
            n = e.getSlide();if (!i || !i.parentElement || !n) return;var s = n.el,
            o = n.contentEl,
            a = n.panzoom,
            r = n.thumbElSrc;
        if (!s || !r || !o || !a || a.isContentLoading || a.state === v.Init || a.state === v.Destroy) return;a.updateMetrics();var l = this.getZoomInfo(n);if (!l) return;this.instance.state = lt.CustomClosing, i.classList.remove(wt), i.classList.add("is-zooming-out"), o.style.backgroundImage = "url('" + r + "')";var c = i.getBoundingClientRect();1 === ((null === (t = window.visualViewport) || void 0 === t ? void 0 : t.scale) || 1) && Object.assign(i.style, { position: "absolute", top: i.offsetTop + window.scrollY + "px", left: i.offsetLeft + window.scrollX + "px", bottom: "auto", right: "auto", width: c.width + "px", height: c.height + "px", overflow: "hidden" });var h = l.x,
            d = l.y,
            u = l.scale,
            p = l.opacity;
        if (p) {
          var _t41 = function (t, e, i, n) {
            var s = e - t,
                o = n - i;return function (e) {
              return i + ((e - t) / s * o || 0);
            };
          }(a.scale, u, 1, 0);a.on("afterTransform", function () {
            o.style.opacity = _t41(a.scale) + "";
          });
        }a.on("endAnimation", function () {
          e.destroy();
        }), a.target.a = u, a.target.b = 0, a.target.c = 0, a.target.d = u, a.panTo({ x: h, y: d, scale: u, friction: p ? .2 : .33, ignoreBounds: !0 }), a.isResting && e.destroy();
      }
    }, {
      key: "setImage",
      value: function setImage(t, e) {
        var _this23 = this;

        var i = this.instance;t.src = e, this.process(t, e).then(function (e) {
          var n = t.contentEl,
              s = t.imageEl,
              o = t.thumbElSrc,
              a = t.el;
          if (i.isClosing() || !n || !s) return;n.offsetHeight;var r = !!i.isOpeningSlide(t) && _this23.getZoomInfo(t);if (_this23.option("protected") && a) {
            a.addEventListener("contextmenu", function (t) {
              t.preventDefault();
            });var _t42 = document.createElement("div");C(_t42, "fancybox-protected"), n.appendChild(_t42);
          }if (o && r) {
            var _s7 = e.contentRect,
                _a4 = Math.max(_s7.fullWidth, _s7.fullHeight);var _c4 = null;!r.opacity && _a4 > 1200 && (_c4 = document.createElement("img"), C(_c4, "fancybox-ghost"), _c4.src = o, n.appendChild(_c4));var _h4 = function _h4() {
              _c4 && (C(_c4, "f-fadeFastOut"), setTimeout(function () {
                _c4 && (_c4.remove(), _c4 = null);
              }, 200));
            };(l = o, new Promise(function (t, e) {
              var i = new Image();i.onload = t, i.onerror = e, i.src = l;
            })).then(function () {
              i.hideLoading(t), t.state = ct.Opening, _this23.instance.emit("reveal", t), _this23.zoomIn(t).then(function () {
                _h4(), _this23.instance.done(t);
              }, function () {}), _c4 && setTimeout(function () {
                _h4();
              }, _a4 > 2500 ? 800 : 200);
            }, function () {
              i.hideLoading(t), i.revealContent(t);
            });
          } else {
            var _n17 = _this23.optionFor(t, "initialSize"),
                _s8 = _this23.optionFor(t, "zoom"),
                _o6 = { event: i.prevMouseMoveEvent || i.options.event, friction: _s8 ? .12 : 0 };var _a5 = i.optionFor(t, "showClass") || void 0,
                _r2 = !0;i.isOpeningSlide(t) && ("full" === _n17 ? e.zoomToFull(_o6) : "cover" === _n17 ? e.zoomToCover(_o6) : "max" === _n17 ? e.zoomToMax(_o6) : _r2 = !1, e.stop("current")), _r2 && _a5 && (_a5 = e.isDragging ? "f-fadeIn" : ""), i.hideLoading(t), i.revealContent(t, _a5);
          }var l;
        }, function () {
          i.setError(t, "{{IMAGE_ERROR}}");
        });
      }
    }, {
      key: "process",
      value: function process(t, e) {
        var _this24 = this;

        return new Promise(function (i, n) {
          var o;var a = _this24.instance,
              r = t.el;a.clearContent(t), a.showLoading(t);var l = _this24.optionFor(t, "content");if ("string" == typeof l && (l = s(l)), !l || !S(l)) {
            if (l = document.createElement("img"), l instanceof HTMLImageElement) {
              var _i27 = "",
                  _n18 = t.caption;_i27 = "string" == typeof _n18 && _n18 ? _n18.replace(/<[^>]+>/gi, "").substring(0, 1e3) : "Image " + (t.index + 1) + " of " + ((null === (o = a.carousel) || void 0 === o ? void 0 : o.pages.length) || 1), l.src = e || "", l.alt = _i27, l.draggable = !1, t.srcset && l.setAttribute("srcset", t.srcset), _this24.instance.isOpeningSlide(t) && (l.fetchPriority = "high");
            }t.sizes && l.setAttribute("sizes", t.sizes);
          }C(l, "fancybox-image"), t.imageEl = l, a.setContent(t, l, !1);t.panzoom = new D(r, p({ transformParent: !0 }, _this24.option("Panzoom") || {}, { content: l, width: function width(e, i) {
              return a.optionFor(t, "width", "auto", i) || "auto";
            }, height: function height(e, i) {
              return a.optionFor(t, "height", "auto", i) || "auto";
            }, wheel: function wheel() {
              var t = a.option("wheel");return ("zoom" === t || "pan" == t) && t;
            }, click: function click(e, i) {
              var n, s;if (a.isCompact || a.isClosing()) return !1;if (t.index !== (null === (n = a.getSlide()) || void 0 === n ? void 0 : n.index)) return !1;if (i) {
                var _t43 = i.composedPath()[0];if (["A", "BUTTON", "TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO"].includes(_t43.nodeName)) return !1;
              }var o = !i || i.target && (null === (s = t.contentEl) || void 0 === s ? void 0 : s.contains(i.target));return a.option(o ? "contentClick" : "backdropClick") || !1;
            }, dblClick: function dblClick() {
              return a.isCompact ? "toggleZoom" : a.option("contentDblClick") || !1;
            }, spinner: !1, panOnlyZoomed: !0, wheelLimit: 1 / 0, on: { ready: function ready(t) {
                i(t);
              }, error: function error() {
                n();
              }, destroy: function destroy() {
                n();
              } } }));
        });
      }
    }, {
      key: "zoomIn",
      value: function zoomIn(t) {
        var _this25 = this;

        return new Promise(function (e, i) {
          var n = _this25.instance,
              s = n.container,
              o = t.panzoom,
              a = t.contentEl,
              r = t.el;o && o.updateMetrics();var l = _this25.getZoomInfo(t);if (!(l && r && a && o && s)) return void i();
          var c = l.x,
              h = l.y,
              d = l.scale,
              u = l.opacity,
              p = function p() {
            t.state !== ct.Closing && (u && (a.style.opacity = Math.max(Math.min(1, 1 - (1 - o.scale) / (1 - d)), 0) + ""), o.scale >= 1 && o.scale > o.targetScale - .1 && e(o));
          },
              f = function f(t) {
            (t.scale < .99 || t.scale > 1.01) && !t.isDragging || (P(s, wt), a.style.opacity = "", t.off("endAnimation", f), t.off("touchStart", f), t.off("afterTransform", p), e(t));
          };

          o.on("endAnimation", f), o.on("touchStart", f), o.on("afterTransform", p), o.on(["error", "destroy"], function () {
            i();
          }), o.panTo({ x: c, y: h, scale: d, friction: 0, ignoreBounds: !0 }), o.stop("current");var g = { event: "mousemove" === o.panMode ? n.prevMouseMoveEvent || n.options.event : void 0 },
              m = _this25.optionFor(t, "initialSize");C(s, wt), n.hideLoading(t), "full" === m ? o.zoomToFull(g) : "cover" === m ? o.zoomToCover(g) : "max" === m ? o.zoomToMax(g) : o.reset(.172);
        });
      }
    }, {
      key: "getZoomInfo",
      value: function getZoomInfo(t) {
        var e = t.el,
            i = t.imageEl,
            n = t.thumbEl,
            s = t.panzoom,
            o = this.instance,
            a = o.container;
        if (!e || !i || !n || !s || et(n) < 3 || !this.optionFor(t, "zoom") || !a || o.state === lt.Destroy) return !1;if ("0" === getComputedStyle(a).getPropertyValue("--f-images-zoom")) return !1;var r = window.visualViewport || null;if (1 !== (r ? r.scale : 1)) return !1;
        var _n$getBoundingClientR = n.getBoundingClientRect(),
            l = _n$getBoundingClientR.top,
            c = _n$getBoundingClientR.left,
            h = _n$getBoundingClientR.width,
            d = _n$getBoundingClientR.height,
            _s$contentRect = s.contentRect,
            u = _s$contentRect.top,
            p = _s$contentRect.left,
            f = _s$contentRect.fitWidth,
            g = _s$contentRect.fitHeight;

        if (!(h && d && f && g)) return !1;var m = s.container.getBoundingClientRect();p += m.left, u += m.top;var v = -1 * (p + .5 * f - (c + .5 * h)),
            b = -1 * (u + .5 * g - (l + .5 * d)),
            y = h / f;var w = this.option("zoomOpacity") || !1;return "auto" === w && (w = Math.abs(h / d - f / g) > .1), { x: v, y: b, scale: y, opacity: w };
      }
    }, {
      key: "attach",
      value: function attach() {
        var t = this,
            e = t.instance;e.on("Carousel.change", t.onChange), e.on("Carousel.createSlide", t.onCreateSlide), e.on("Carousel.removeSlide", t.onRemoveSlide), e.on("close", t.onClose);
      }
    }, {
      key: "detach",
      value: function detach() {
        var t = this,
            e = t.instance;e.off("Carousel.change", t.onChange), e.off("Carousel.createSlide", t.onCreateSlide), e.off("Carousel.removeSlide", t.onRemoveSlide), e.off("close", t.onClose);
      }
    }]);

    return xt;
  }($);

  Object.defineProperty(xt, "defaults", { enumerable: !0, configurable: !0, writable: !0, value: { initialSize: "fit", Panzoom: { maxScale: 1 }, protected: !1, zoom: !0, zoomOpacity: "auto" } }), "function" == typeof SuppressedError && SuppressedError;var Et = "html",
      St = "image",
      Pt = "map",
      Ct = "youtube",
      Tt = "vimeo",
      Mt = "html5video",
      Ot = function Ot(t) {
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var i = new URL(t),
        n = new URLSearchParams(i.search),
        s = new URLSearchParams();
    var _arr5 = [].concat(_toConsumableArray(n), _toConsumableArray(Object.entries(e)));

    for (var _i29 = 0; _i29 < _arr5.length; _i29++) {
      var _ref23 = _arr5[_i29];

      var _ref24 = _slicedToArray(_ref23, 2);

      var _t44 = _ref24[0];
      var _i28 = _ref24[1];
      var _e34 = _i28 + "";if ("t" === _t44) {
        var _t45 = _e34.match(/((\d*)m)?(\d*)s?/);_t45 && s.set("start", 60 * parseInt(_t45[2] || "0") + parseInt(_t45[3] || "0") + "");
      } else s.set(_t44, _e34);
    }var o = s + "",
        a = t.match(/#t=((.*)?\d+s)/);return a && (o += "#t=" + a[1]), o;
  },
      At = { ajax: null, autoSize: !0, iframeAttr: { allow: "autoplay; fullscreen", scrolling: "auto" }, preload: !0, videoAutoplay: !0, videoRatio: 16 / 9, videoTpl: '<video class="fancybox__html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">\n  <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos.</video>', videoFormat: "", vimeo: { byline: 1, color: "00adef", controls: 1, dnt: 1, muted: 0 }, youtube: { controls: 1, enablejsapi: 1, nocookie: 1, rel: 0, fs: 1 } },
      Lt = ["image", "html", "ajax", "inline", "clone", "iframe", "map", "pdf", "html5video", "youtube", "vimeo"];
  var zt = function (_$5) {
    _inherits(zt, _$5);

    function zt() {
      _classCallCheck(this, zt);

      return _possibleConstructorReturn(this, (zt.__proto__ || Object.getPrototypeOf(zt)).apply(this, arguments));
    }

    _createClass(zt, [{
      key: "onBeforeInitSlide",
      value: function onBeforeInitSlide(t, e, i) {
        this.processType(i);
      }
    }, {
      key: "onCreateSlide",
      value: function onCreateSlide(t, e, i) {
        this.setContent(i);
      }
    }, {
      key: "onClearContent",
      value: function onClearContent(t, e) {
        e.xhr && (e.xhr.abort(), e.xhr = null);var i = e.iframeEl;i && (i.onload = i.onerror = null, i.src = "//about:blank", e.iframeEl = null);var n = e.contentEl,
            s = e.placeholderEl;if ("inline" === e.type && n && s) n.classList.remove("fancybox__content"), "none" !== getComputedStyle(n).getPropertyValue("display") && (n.style.display = "none"), setTimeout(function () {
          s && (n && s.parentNode && s.parentNode.insertBefore(n, s), s.remove());
        }, 0), e.contentEl = void 0, e.placeholderEl = void 0;else for (; e.el && e.el.firstChild;) {
          e.el.removeChild(e.el.firstChild);
        }
      }
    }, {
      key: "onSelectSlide",
      value: function onSelectSlide(t, e, i) {
        i.state === ct.Ready && this.playVideo();
      }
    }, {
      key: "onUnselectSlide",
      value: function onUnselectSlide(t, e, i) {
        var n, s;if (i.type === Mt) {
          try {
            null === (s = null === (n = i.el) || void 0 === n ? void 0 : n.querySelector("video")) || void 0 === s || s.pause();
          } catch (t) {}return;
        }var o = void 0;i.type === Tt ? o = { method: "pause", value: "true" } : i.type === Ct && (o = { event: "command", func: "pauseVideo" }), o && i.iframeEl && i.iframeEl.contentWindow && i.iframeEl.contentWindow.postMessage(JSON.stringify(o), "*"), i.poller && clearTimeout(i.poller);
      }
    }, {
      key: "onDone",
      value: function onDone(t, e) {
        t.isCurrentSlide(e) && !t.isClosing() && this.playVideo();
      }
    }, {
      key: "onRefresh",
      value: function onRefresh(t, e) {
        var _this27 = this;

        e.slides.forEach(function (t) {
          t.el && (_this27.resizeIframe(t), _this27.setAspectRatio(t));
        });
      }
    }, {
      key: "onMessage",
      value: function onMessage(t) {
        try {
          var _e35 = JSON.parse(t.data);if ("https://player.vimeo.com" === t.origin) {
            if ("ready" === _e35.event) {
              var _iteratorNormalCompletion44 = true;
              var _didIteratorError44 = false;
              var _iteratorError44 = undefined;

              try {
                for (var _iterator44 = Array.from(document.getElementsByClassName("fancybox__iframe"))[Symbol.iterator](), _step44; !(_iteratorNormalCompletion44 = (_step44 = _iterator44.next()).done); _iteratorNormalCompletion44 = true) {
                  var _e36 = _step44.value;
                  _e36 instanceof HTMLIFrameElement && _e36.contentWindow === t.source && (_e36.dataset.ready = "true");
                }
              } catch (err) {
                _didIteratorError44 = true;
                _iteratorError44 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion44 && _iterator44.return) {
                    _iterator44.return();
                  }
                } finally {
                  if (_didIteratorError44) {
                    throw _iteratorError44;
                  }
                }
              }
            }
          } else if (t.origin.match(/^https:\/\/(www.)?youtube(-nocookie)?.com$/) && "onReady" === _e35.event) {
            var _t46 = document.getElementById(_e35.id);_t46 && (_t46.dataset.ready = "true");
          }
        } catch (t) {}
      }
    }, {
      key: "loadAjaxContent",
      value: function loadAjaxContent(t) {
        var e = this.instance.optionFor(t, "src") || "";this.instance.showLoading(t);var i = this.instance,
            n = new XMLHttpRequest();i.showLoading(t), n.onreadystatechange = function () {
          n.readyState === XMLHttpRequest.DONE && i.state === lt.Ready && (i.hideLoading(t), 200 === n.status ? i.setContent(t, n.responseText) : i.setError(t, 404 === n.status ? "{{AJAX_NOT_FOUND}}" : "{{AJAX_FORBIDDEN}}"));
        };var s = t.ajax || null;n.open(s ? "POST" : "GET", e + ""), n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), n.setRequestHeader("X-Requested-With", "XMLHttpRequest"), n.send(s), t.xhr = n;
      }
    }, {
      key: "setInlineContent",
      value: function setInlineContent(t) {
        var e = null;if (S(t.src)) e = t.src;else if ("string" == typeof t.src) {
          var i = t.src.split("#", 2).pop();e = i ? document.getElementById(i) : null;
        }if (e) {
          if ("clone" === t.type || e.closest(".fancybox__slide")) {
            e = e.cloneNode(!0);var _i30 = e.dataset.animationName;_i30 && (e.classList.remove(_i30), delete e.dataset.animationName);var n = e.getAttribute("id");n = n ? n + "--clone" : "clone-" + this.instance.id + "-" + t.index, e.setAttribute("id", n);
          } else if (e.parentNode) {
            var _i31 = document.createElement("div");_i31.classList.add("fancybox-placeholder"), e.parentNode.insertBefore(_i31, e), t.placeholderEl = _i31;
          }this.instance.setContent(t, e);
        } else this.instance.setError(t, "{{ELEMENT_NOT_FOUND}}");
      }
    }, {
      key: "setIframeContent",
      value: function setIframeContent(t) {
        var _this28 = this;

        var e = t.src,
            i = t.el;
        if (!e || "string" != typeof e || !i) return;i.classList.add("is-loading");var n = this.instance,
            s = document.createElement("iframe");s.className = "fancybox__iframe", s.setAttribute("id", "fancybox__iframe_" + n.id + "_" + t.index);var _iteratorNormalCompletion45 = true;
        var _didIteratorError45 = false;
        var _iteratorError45 = undefined;

        try {
          for (var _iterator45 = Object.entries(this.optionFor(t, "iframeAttr") || {})[Symbol.iterator](), _step45; !(_iteratorNormalCompletion45 = (_step45 = _iterator45.next()).done); _iteratorNormalCompletion45 = true) {
            var _ref25 = _step45.value;

            var _ref26 = _slicedToArray(_ref25, 2);

            var _e37 = _ref26[0];
            var _i32 = _ref26[1];
            s.setAttribute(_e37, _i32);
          }
        } catch (err) {
          _didIteratorError45 = true;
          _iteratorError45 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion45 && _iterator45.return) {
              _iterator45.return();
            }
          } finally {
            if (_didIteratorError45) {
              throw _iteratorError45;
            }
          }
        }

        s.onerror = function () {
          n.setError(t, "{{IFRAME_ERROR}}");
        }, t.iframeEl = s;var o = this.optionFor(t, "preload");if ("iframe" !== t.type || !1 === o) return s.setAttribute("src", t.src + ""), n.setContent(t, s, !1), this.resizeIframe(t), void n.revealContent(t);n.showLoading(t), s.onload = function () {
          if (!s.src.length) return;var e = "true" !== s.dataset.ready;s.dataset.ready = "true", _this28.resizeIframe(t), e ? n.revealContent(t) : n.hideLoading(t);
        }, s.setAttribute("src", e), n.setContent(t, s, !1);
      }
    }, {
      key: "resizeIframe",
      value: function resizeIframe(t) {
        var e = t.type,
            i = t.iframeEl;
        if (e === Ct || e === Tt) return;var n = null == i ? void 0 : i.parentElement;if (!i || !n) return;var s = t.autoSize;void 0 === s && (s = this.optionFor(t, "autoSize"));var o = t.width || 0,
            a = t.height || 0;o && a && (s = !1);var r = n && n.style;if (!1 !== t.preload && !1 !== s && r) try {
          var _t47 = window.getComputedStyle(n),
              _e38 = parseFloat(_t47.paddingLeft) + parseFloat(_t47.paddingRight),
              _s9 = parseFloat(_t47.paddingTop) + parseFloat(_t47.paddingBottom),
              _l3 = i.contentWindow;if (_l3) {
            var _t48 = _l3.document,
                _i33 = _t48.getElementsByTagName(Et)[0],
                _n19 = _t48.body;r.width = "", _n19.style.overflow = "hidden", o = o || _i33.scrollWidth + _e38, r.width = o + "px", _n19.style.overflow = "", r.flex = "0 0 auto", r.height = _n19.scrollHeight + "px", a = _i33.scrollHeight + _s9;
          }
        } catch (t) {}if (o || a) {
          var _t49 = { flex: "0 1 auto", width: "", height: "" };o && "auto" !== o && (_t49.width = o + "px"), a && "auto" !== a && (_t49.height = a + "px"), Object.assign(r, _t49);
        }
      }
    }, {
      key: "playVideo",
      value: function playVideo() {
        var t = this.instance.getSlide();if (!t) return;var e = t.el;
        if (!e || !e.offsetParent) return;if (!this.optionFor(t, "videoAutoplay")) return;if (t.type === Mt) try {
          var _t50 = e.querySelector("video");if (_t50) {
            var _e39 = _t50.play();void 0 !== _e39 && _e39.then(function () {}).catch(function (e) {
              _t50.muted = !0, _t50.play();
            });
          }
        } catch (t) {}if (t.type !== Ct && t.type !== Tt) return;var i = function i() {
          if (t.iframeEl && t.iframeEl.contentWindow) {
            var _e40 = void 0;if ("true" === t.iframeEl.dataset.ready) return _e40 = t.type === Ct ? { event: "command", func: "playVideo" } : { method: "play", value: "true" }, _e40 && t.iframeEl.contentWindow.postMessage(JSON.stringify(_e40), "*"), void (t.poller = void 0);t.type === Ct && (_e40 = { event: "listening", id: t.iframeEl.getAttribute("id") }, t.iframeEl.contentWindow.postMessage(JSON.stringify(_e40), "*"));
          }t.poller = setTimeout(i, 250);
        };i();
      }
    }, {
      key: "processType",
      value: function processType(t) {
        if (t.html) return t.type = Et, t.src = t.html, void (t.html = "");var e = this.instance.optionFor(t, "src", "");if (!e || "string" != typeof e) return;var i = t.type,
            n = null;if (n = e.match(/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|shorts\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i)) {
          var _s10 = this.optionFor(t, Ct),
              _o7 = _s10.nocookie,
              _a6 = function (t, e) {
            var i = {};for (var n in t) {
              Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (i[n] = t[n]);
            }if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
              var s = 0;for (n = Object.getOwnPropertySymbols(t); s < n.length; s++) {
                e.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[s]) && (i[n[s]] = t[n[s]]);
              }
            }return i;
          }(_s10, ["nocookie"]),
              _r3 = "www.youtube" + (_o7 ? "-nocookie" : "") + ".com",
              _l4 = Ot(e, _a6),
              _c5 = encodeURIComponent(n[2]);t.videoId = _c5, t.src = "https://" + _r3 + "/embed/" + _c5 + "?" + _l4, t.thumbSrc = t.thumbSrc || "https://i.ytimg.com/vi/" + _c5 + "/mqdefault.jpg", i = Ct;
        } else if (n = e.match(/^.+vimeo.com\/(?:\/)?([\d]+)((\/|\?h=)([a-z0-9]+))?(.*)?/)) {
          var _s11 = Ot(e, this.optionFor(t, Tt)),
              _o8 = encodeURIComponent(n[1]),
              _a7 = n[4] || "";t.videoId = _o8, t.src = "https://player.vimeo.com/video/" + _o8 + "?" + (_a7 ? "h=" + _a7 + (_s11 ? "&" : "") : "") + _s11, i = Tt;
        }if (!i && t.triggerEl) {
          var _e41 = t.triggerEl.dataset.type;Lt.includes(_e41) && (i = _e41);
        }i || "string" == typeof e && ("#" === e.charAt(0) ? i = "inline" : (n = e.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (i = Mt, t.videoFormat = t.videoFormat || "video/" + ("ogv" === n[1] ? "ogg" : n[1])) : e.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? i = St : e.match(/\.(pdf)((\?|#).*)?$/i) && (i = "pdf")), (n = e.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i)) ? (t.src = "https://maps.google." + n[1] + "/?ll=" + (n[2] ? n[2] + "&z=" + Math.floor(parseFloat(n[3])) + (n[4] ? n[4].replace(/^\//, "&") : "") : n[4] + "").replace(/\?/, "&") + "&output=" + (n[4] && n[4].indexOf("layer=c") > 0 ? "svembed" : "embed"), i = Pt) : (n = e.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i)) && (t.src = "https://maps.google." + n[1] + "/maps?q=" + n[2].replace("query=", "q=").replace("api=1", "") + "&output=embed", i = Pt), i = i || this.instance.option("defaultType"), t.type = i, i === St && (t.thumbSrc = t.thumbSrc || t.src);
      }
    }, {
      key: "setContent",
      value: function setContent(t) {
        var e = this.instance.optionFor(t, "src") || "";if (t && t.type && e) {
          switch (t.type) {case Et:
              this.instance.setContent(t, e);break;case Mt:
              var i = this.option("videoTpl");i && this.instance.setContent(t, i.replace(/\{\{src\}\}/gi, e + "").replace(/\{\{format\}\}/gi, this.optionFor(t, "videoFormat") || "").replace(/\{\{poster\}\}/gi, t.poster || t.thumbSrc || ""));break;case "inline":case "clone":
              this.setInlineContent(t);break;case "ajax":
              this.loadAjaxContent(t);break;case "pdf":case Pt:case Ct:case Tt:
              t.preload = !1;case "iframe":
              this.setIframeContent(t);}this.setAspectRatio(t);
        }
      }
    }, {
      key: "setAspectRatio",
      value: function setAspectRatio(t) {
        var e = t.contentEl;if (!(t.el && e && t.type && [Ct, Tt, Mt].includes(t.type))) return;var i = void 0,
            n = t.width || "auto",
            s = t.height || "auto";if ("auto" === n || "auto" === s) {
          i = this.optionFor(t, "videoRatio");var _e42 = (i + "").match(/(\d+)\s*\/\s?(\d+)/);i = _e42 && _e42.length > 2 ? parseFloat(_e42[1]) / parseFloat(_e42[2]) : parseFloat(i + "");
        } else n && s && (i = n / s);if (!i) return;e.style.aspectRatio = "", e.style.width = "", e.style.height = "", e.offsetHeight;var o = e.getBoundingClientRect(),
            a = o.width || 1,
            r = o.height || 1;e.style.aspectRatio = i + "", i < a / r ? (s = "auto" === s ? r : Math.min(r, s), e.style.width = "auto", e.style.height = s + "px") : (n = "auto" === n ? a : Math.min(a, n), e.style.width = n + "px", e.style.height = "auto");
      }
    }, {
      key: "attach",
      value: function attach() {
        var t = this,
            e = t.instance;e.on("Carousel.beforeInitSlide", t.onBeforeInitSlide), e.on("Carousel.createSlide", t.onCreateSlide), e.on("Carousel.selectSlide", t.onSelectSlide), e.on("Carousel.unselectSlide", t.onUnselectSlide), e.on("Carousel.Panzoom.refresh", t.onRefresh), e.on("done", t.onDone), e.on("clearContent", t.onClearContent), window.addEventListener("message", t.onMessage);
      }
    }, {
      key: "detach",
      value: function detach() {
        var t = this,
            e = t.instance;e.off("Carousel.beforeInitSlide", t.onBeforeInitSlide), e.off("Carousel.createSlide", t.onCreateSlide), e.off("Carousel.selectSlide", t.onSelectSlide), e.off("Carousel.unselectSlide", t.onUnselectSlide), e.off("Carousel.Panzoom.refresh", t.onRefresh), e.off("done", t.onDone), e.off("clearContent", t.onClearContent), window.removeEventListener("message", t.onMessage);
      }
    }]);

    return zt;
  }($);

  Object.defineProperty(zt, "defaults", { enumerable: !0, configurable: !0, writable: !0, value: At });var Rt = "play",
      kt = "pause",
      It = "ready";
  var Dt = function (_$6) {
    _inherits(Dt, _$6);

    function Dt() {
      var _this29;

      _classCallCheck(this, Dt);

      (_this29 = _possibleConstructorReturn(this, (Dt.__proto__ || Object.getPrototypeOf(Dt)).apply(this, arguments)), _this29), Object.defineProperty(_this29, "state", { enumerable: !0, configurable: !0, writable: !0, value: It }), Object.defineProperty(_this29, "inHover", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(_this29, "timer", { enumerable: !0, configurable: !0, writable: !0, value: null }), Object.defineProperty(_this29, "progressBar", { enumerable: !0, configurable: !0, writable: !0, value: null });return _this29;
    }

    _createClass(Dt, [{
      key: "onReady",
      value: function onReady(t) {
        this.option("autoStart") && (t.isInfinite || t.page < t.pages.length - 1) && this.start();
      }
    }, {
      key: "onChange",
      value: function onChange() {
        this.removeProgressBar(), this.pause();
      }
    }, {
      key: "onSettle",
      value: function onSettle() {
        this.resume();
      }
    }, {
      key: "onVisibilityChange",
      value: function onVisibilityChange() {
        "visible" === document.visibilityState ? this.resume() : this.pause();
      }
    }, {
      key: "onMouseEnter",
      value: function onMouseEnter() {
        this.inHover = !0, this.pause();
      }
    }, {
      key: "onMouseLeave",
      value: function onMouseLeave() {
        var t;this.inHover = !1, (null === (t = this.instance.panzoom) || void 0 === t ? void 0 : t.isResting) && this.resume();
      }
    }, {
      key: "onTimerEnd",
      value: function onTimerEnd() {
        var t = this.instance;"play" === this.state && (t.isInfinite || t.page !== t.pages.length - 1 ? t.slideNext() : t.slideTo(0));
      }
    }, {
      key: "removeProgressBar",
      value: function removeProgressBar() {
        this.progressBar && (this.progressBar.remove(), this.progressBar = null);
      }
    }, {
      key: "createProgressBar",
      value: function createProgressBar() {
        var t;if (!this.option("showProgress")) return null;this.removeProgressBar();var e = this.instance,
            i = (null === (t = e.pages[e.page]) || void 0 === t ? void 0 : t.slides) || [];var n = this.option("progressParentEl");if (n || (n = (1 === i.length ? i[0].el : null) || e.viewport), !n) return null;var s = document.createElement("div");return C(s, "f-progress"), n.prepend(s), this.progressBar = s, s.offsetHeight, s;
      }
    }, {
      key: "set",
      value: function set() {
        var t = this,
            e = t.instance;if (e.pages.length < 2) return;if (t.timer) return;var i = t.option("timeout");t.state = Rt, C(e.container, "has-autoplay");var n = t.createProgressBar();n && (n.style.transitionDuration = i + "ms", n.style.transform = "scaleX(1)"), t.timer = setTimeout(function () {
          t.timer = null, t.inHover || t.onTimerEnd();
        }, i), t.emit("set");
      }
    }, {
      key: "clear",
      value: function clear() {
        var t = this;t.timer && (clearTimeout(t.timer), t.timer = null), t.removeProgressBar();
      }
    }, {
      key: "start",
      value: function start() {
        var t = this;if (t.set(), t.state !== It) {
          if (t.option("pauseOnHover")) {
            var _e43 = t.instance.container;_e43.addEventListener("mouseenter", t.onMouseEnter, !1), _e43.addEventListener("mouseleave", t.onMouseLeave, !1);
          }document.addEventListener("visibilitychange", t.onVisibilityChange, !1), t.emit("start");
        }
      }
    }, {
      key: "stop",
      value: function stop() {
        var t = this,
            e = t.state,
            i = t.instance.container;t.clear(), t.state = It, i.removeEventListener("mouseenter", t.onMouseEnter, !1), i.removeEventListener("mouseleave", t.onMouseLeave, !1), document.removeEventListener("visibilitychange", t.onVisibilityChange, !1), P(i, "has-autoplay"), e !== It && t.emit("stop");
      }
    }, {
      key: "pause",
      value: function pause() {
        var t = this;t.state === Rt && (t.state = kt, t.clear(), t.emit(kt));
      }
    }, {
      key: "resume",
      value: function resume() {
        var t = this,
            e = t.instance;if (e.isInfinite || e.page !== e.pages.length - 1) {
          if (t.state !== Rt) {
            if (t.state === kt && !t.inHover) {
              var _e44 = new Event("resume", { bubbles: !0, cancelable: !0 });t.emit("resume", _e44), _e44.defaultPrevented || t.set();
            }
          } else t.set();
        } else t.stop();
      }
    }, {
      key: "toggle",
      value: function toggle() {
        this.state === Rt || this.state === kt ? this.stop() : this.start();
      }
    }, {
      key: "attach",
      value: function attach() {
        var t = this,
            e = t.instance;e.on("ready", t.onReady), e.on("Panzoom.startAnimation", t.onChange), e.on("Panzoom.endAnimation", t.onSettle), e.on("Panzoom.touchMove", t.onChange);
      }
    }, {
      key: "detach",
      value: function detach() {
        var t = this,
            e = t.instance;e.off("ready", t.onReady), e.off("Panzoom.startAnimation", t.onChange), e.off("Panzoom.endAnimation", t.onSettle), e.off("Panzoom.touchMove", t.onChange), t.stop();
      }
    }, {
      key: "isActive",
      get: function get() {
        return this.state !== It;
      }
    }]);

    return Dt;
  }($);

  Object.defineProperty(Dt, "defaults", { enumerable: !0, configurable: !0, writable: !0, value: { autoStart: !0, pauseOnHover: !0, progressParentEl: null, showProgress: !0, timeout: 3e3 } });
  var Ft = function (_$7) {
    _inherits(Ft, _$7);

    function Ft() {
      var _this30;

      _classCallCheck(this, Ft);

      (_this30 = _possibleConstructorReturn(this, (Ft.__proto__ || Object.getPrototypeOf(Ft)).apply(this, arguments)), _this30), Object.defineProperty(_this30, "ref", { enumerable: !0, configurable: !0, writable: !0, value: null });return _this30;
    }

    _createClass(Ft, [{
      key: "onPrepare",
      value: function onPrepare(t) {
        var _this31 = this;

        var e = t.carousel;if (!e) return;var i = t.container;i && (e.options.Autoplay = p({ autoStart: !1 }, this.option("Autoplay") || {}, { pauseOnHover: !1, timeout: this.option("timeout"), progressParentEl: function progressParentEl() {
            return _this31.option("progressParentEl") || null;
          }, on: { start: function start() {
              t.emit("startSlideshow");
            }, set: function set(e) {
              var n;i.classList.add("has-slideshow"), (null === (n = t.getSlide()) || void 0 === n ? void 0 : n.state) !== ct.Ready && e.pause();
            }, stop: function stop() {
              i.classList.remove("has-slideshow"), t.isCompact || t.endIdle(), t.emit("endSlideshow");
            }, resume: function resume(e, i) {
              var n, s, o;!i || !i.cancelable || (null === (n = t.getSlide()) || void 0 === n ? void 0 : n.state) === ct.Ready && (null === (o = null === (s = t.carousel) || void 0 === s ? void 0 : s.panzoom) || void 0 === o ? void 0 : o.isResting) || i.preventDefault();
            } } }), e.attachPlugins({ Autoplay: Dt }), this.ref = e.plugins.Autoplay);
      }
    }, {
      key: "onReady",
      value: function onReady(t) {
        var e = t.carousel,
            i = this.ref;i && e && this.option("playOnStart") && (e.isInfinite || e.page < e.pages.length - 1) && i.start();
      }
    }, {
      key: "onDone",
      value: function onDone(t, e) {
        var i = this.ref,
            n = t.carousel;if (!i || !n) return;var s = e.panzoom;s && s.on("startAnimation", function () {
          t.isCurrentSlide(e) && i.stop();
        }), t.isCurrentSlide(e) && i.resume();
      }
    }, {
      key: "onKeydown",
      value: function onKeydown(t, e) {
        var i;var n = this.ref;n && e === this.option("key") && "BUTTON" !== (null === (i = document.activeElement) || void 0 === i ? void 0 : i.nodeName) && n.toggle();
      }
    }, {
      key: "attach",
      value: function attach() {
        var t = this,
            e = t.instance;e.on("Carousel.init", t.onPrepare), e.on("Carousel.ready", t.onReady), e.on("done", t.onDone), e.on("keydown", t.onKeydown);
      }
    }, {
      key: "detach",
      value: function detach() {
        var t = this,
            e = t.instance;e.off("Carousel.init", t.onPrepare), e.off("Carousel.ready", t.onReady), e.off("done", t.onDone), e.off("keydown", t.onKeydown);
      }
    }]);

    return Ft;
  }($);

  Object.defineProperty(Ft, "defaults", { enumerable: !0, configurable: !0, writable: !0, value: { key: " ", playOnStart: !1, progressParentEl: function progressParentEl(t) {
        var e;return (null === (e = t.instance.container) || void 0 === e ? void 0 : e.querySelector(".fancybox__toolbar [data-fancybox-toggle-slideshow]")) || t.instance.container;
      }, timeout: 3e3 } });var jt = { classes: { container: "f-thumbs f-carousel__thumbs", viewport: "f-thumbs__viewport", track: "f-thumbs__track", slide: "f-thumbs__slide", isResting: "is-resting", isSelected: "is-selected", isLoading: "is-loading", hasThumbs: "has-thumbs" }, minCount: 2, parentEl: null, thumbTpl: '<button class="f-thumbs__slide__button" tabindex="0" type="button" aria-label="{{GOTO}}" data-carousel-index="%i"><img class="f-thumbs__slide__img" data-lazy-src="{{%s}}" alt="" /></button>', type: "modern" };var Bt;!function (t) {
    t[t.Init = 0] = "Init", t[t.Ready = 1] = "Ready", t[t.Hidden = 2] = "Hidden";
  }(Bt || (Bt = {}));var Ht = "isResting",
      Nt = "thumbWidth",
      _t = "thumbHeight",
      $t = "thumbClipWidth";var Wt = function (_$8) {
    _inherits(Wt, _$8);

    function Wt() {
      var _this32;

      _classCallCheck(this, Wt);

      (_this32 = _possibleConstructorReturn(this, (Wt.__proto__ || Object.getPrototypeOf(Wt)).apply(this, arguments)), _this32), Object.defineProperty(_this32, "type", { enumerable: !0, configurable: !0, writable: !0, value: "modern" }), Object.defineProperty(_this32, "container", { enumerable: !0, configurable: !0, writable: !0, value: null }), Object.defineProperty(_this32, "track", { enumerable: !0, configurable: !0, writable: !0, value: null }), Object.defineProperty(_this32, "carousel", { enumerable: !0, configurable: !0, writable: !0, value: null }), Object.defineProperty(_this32, "thumbWidth", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(_this32, "thumbClipWidth", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(_this32, "thumbHeight", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(_this32, "thumbGap", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(_this32, "thumbExtraGap", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(_this32, "state", { enumerable: !0, configurable: !0, writable: !0, value: Bt.Init });return _this32;
    }

    _createClass(Wt, [{
      key: "onInitSlide",
      value: function onInitSlide(t, e) {
        var i = e.el ? e.el.dataset : void 0;i && (e.thumbSrc = i.thumbSrc || e.thumbSrc || "", e[$t] = parseFloat(i[$t] || "") || e[$t] || 0, e[_t] = parseFloat(i.thumbHeight || "") || e[_t] || 0), this.addSlide(e);
      }
    }, {
      key: "onInitSlides",
      value: function onInitSlides() {
        this.build();
      }
    }, {
      key: "onChange",
      value: function onChange() {
        var t;if (!this.isModern) return;var e = this.container,
            i = this.instance,
            n = i.panzoom,
            s = this.carousel,
            o = s ? s.panzoom : null,
            r = i.page;if (n && s && o) {
          if (n.isDragging) {
            P(e, this.cn(Ht));var _n20 = (null === (t = s.pages[r]) || void 0 === t ? void 0 : t.pos) || 0;_n20 += i.getProgress(r) * (this[$t] + this.thumbGap);var _a8 = o.getBounds();-1 * _n20 > _a8.x.min && -1 * _n20 < _a8.x.max && o.panTo({ x: -1 * _n20, friction: .12 });
          } else a(e, this.cn(Ht), n.isResting);this.shiftModern();
        }
      }
    }, {
      key: "onRefresh",
      value: function onRefresh() {
        this.updateProps();var _iteratorNormalCompletion46 = true;
        var _didIteratorError46 = false;
        var _iteratorError46 = undefined;

        try {
          for (var _iterator46 = (this.instance.slides || [])[Symbol.iterator](), _step46; !(_iteratorNormalCompletion46 = (_step46 = _iterator46.next()).done); _iteratorNormalCompletion46 = true) {
            var t = _step46.value;
            this.resizeModernSlide(t);
          }
        } catch (err) {
          _didIteratorError46 = true;
          _iteratorError46 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion46 && _iterator46.return) {
              _iterator46.return();
            }
          } finally {
            if (_didIteratorError46) {
              throw _iteratorError46;
            }
          }
        }

        this.shiftModern();
      }
    }, {
      key: "isDisabled",
      value: function isDisabled() {
        var t = this.option("minCount") || 0;if (t) {
          var _e45 = this.instance;var i = 0;var _iteratorNormalCompletion47 = true;
          var _didIteratorError47 = false;
          var _iteratorError47 = undefined;

          try {
            for (var _iterator47 = (_e45.slides || [])[Symbol.iterator](), _step47; !(_iteratorNormalCompletion47 = (_step47 = _iterator47.next()).done); _iteratorNormalCompletion47 = true) {
              var _t51 = _step47.value;
              _t51.thumbSrc && i++;
            }
          } catch (err) {
            _didIteratorError47 = true;
            _iteratorError47 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion47 && _iterator47.return) {
                _iterator47.return();
              }
            } finally {
              if (_didIteratorError47) {
                throw _iteratorError47;
              }
            }
          }

          if (i < t) return !0;
        }var e = this.option("type");return ["modern", "classic"].indexOf(e) < 0;
      }
    }, {
      key: "getThumb",
      value: function getThumb(t) {
        var e = this.option("thumbTpl") || "";return { html: this.instance.localize(e, [["%i", t.index], ["%d", t.index + 1], ["%s", t.thumbSrc || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"]]) };
      }
    }, {
      key: "addSlide",
      value: function addSlide(t) {
        var e = this.carousel;e && e.addSlide(t.index, this.getThumb(t));
      }
    }, {
      key: "getSlides",
      value: function getSlides() {
        var t = [];var _iteratorNormalCompletion48 = true;
        var _didIteratorError48 = false;
        var _iteratorError48 = undefined;

        try {
          for (var _iterator48 = (this.instance.slides || [])[Symbol.iterator](), _step48; !(_iteratorNormalCompletion48 = (_step48 = _iterator48.next()).done); _iteratorNormalCompletion48 = true) {
            var _e46 = _step48.value;
            t.push(this.getThumb(_e46));
          }
        } catch (err) {
          _didIteratorError48 = true;
          _iteratorError48 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion48 && _iterator48.return) {
              _iterator48.return();
            }
          } finally {
            if (_didIteratorError48) {
              throw _iteratorError48;
            }
          }
        }

        return t;
      }
    }, {
      key: "resizeModernSlide",
      value: function resizeModernSlide(t) {
        this.isModern && (t[Nt] = t[$t] && t[_t] ? Math.round(this[_t] * (t[$t] / t[_t])) : this[Nt]);
      }
    }, {
      key: "updateProps",
      value: function updateProps() {
        var t = this.container;if (!t) return;var e = function (_e47) {
          function e(_x42) {
            return _e47.apply(this, arguments);
          }

          e.toString = function () {
            return _e47.toString();
          };

          return e;
        }(function (e) {
          return parseFloat(getComputedStyle(t).getPropertyValue("--f-thumb-" + e)) || 0;
        });this.thumbGap = e("gap"), this.thumbExtraGap = e("extra-gap"), this[Nt] = e("width") || 40, this[$t] = e("clip-width") || 40, this[_t] = e("height") || 40;
      }
    }, {
      key: "build",
      value: function build() {
        var t = this;if (t.state !== Bt.Init) return;if (t.isDisabled()) return void t.emit("disabled");var e = t.instance,
            i = e.container,
            n = t.getSlides(),
            s = t.option("type");t.type = s;var o = t.option("parentEl"),
            a = t.cn("container"),
            r = t.cn("track");var l = null == o ? void 0 : o.querySelector("." + a);l || (l = document.createElement("div"), C(l, a), o ? o.appendChild(l) : i.after(l)), C(l, "is-" + s), C(i, t.cn("hasThumbs")), t.container = l, t.updateProps();var c = l.querySelector("." + r);c || (c = document.createElement("div"), C(c, t.cn("track")), l.appendChild(c)), t.track = c;var h = p({}, { track: c, infinite: !1, center: !0, fill: "classic" === s, dragFree: !0, slidesPerPage: 1, transition: !1, preload: .25, friction: .12, Panzoom: { maxVelocity: 0 }, Dots: !1, Navigation: !1, classes: { container: "f-thumbs", viewport: "f-thumbs__viewport", track: "f-thumbs__track", slide: "f-thumbs__slide" } }, t.option("Carousel") || {}, { Sync: { target: e }, slides: n }),
            d = new e.constructor(l, h);d.on("createSlide", function (e, i) {
          t.setProps(i.index), t.emit("createSlide", i, i.el);
        }), d.on("ready", function () {
          t.shiftModern(), t.emit("ready");
        }), d.on("refresh", function () {
          t.shiftModern();
        }), d.on("Panzoom.click", function (e, i, n) {
          t.onClick(n);
        }), t.carousel = d, t.state = Bt.Ready;
      }
    }, {
      key: "onClick",
      value: function onClick(t) {
        t.preventDefault(), t.stopPropagation();var e = this.instance,
            i = e.pages,
            n = e.page,
            s = function s(t) {
          if (t) {
            var _e48 = t.closest("[data-carousel-index]");if (_e48) return [parseInt(_e48.dataset.carouselIndex || "", 10) || 0, _e48];
          }return [-1, void 0];
        },
            o = function o(t, e) {
          var i = document.elementFromPoint(t, e);return i ? s(i) : [-1, void 0];
        };
        var _s12 = s(t.target),
            _s13 = _slicedToArray(_s12, 2),
            a = _s13[0],
            r = _s13[1];

        if (a > -1) return;var l = this[$t],
            c = t.clientX,
            h = t.clientY;
        var _o9 = o(c - l, h),
            _o10 = _slicedToArray(_o9, 2),
            d = _o10[0],
            u = _o10[1],
            _o11 = o(c + l, h),
            _o12 = _slicedToArray(_o11, 2),
            p = _o12[0],
            f = _o12[1];

        u && f ? (a = Math.abs(c - u.getBoundingClientRect().right) < Math.abs(c - f.getBoundingClientRect().left) ? d : p, a === n && (a = a === d ? p : d)) : u ? a = d : f && (a = p), a > -1 && i[a] && e.slideTo(a);
      }
    }, {
      key: "getShift",
      value: function getShift(t) {
        var e;var i = this,
            n = i.instance,
            s = i.carousel;if (!n || !s) return 0;var o = i[Nt],
            a = i[$t],
            r = i.thumbGap,
            l = i.thumbExtraGap;if (!(null === (e = s.slides[t]) || void 0 === e ? void 0 : e.el)) return 0;var c = .5 * (o - a),
            h = n.pages.length - 1;var d = n.getProgress(0),
            u = n.getProgress(h),
            p = n.getProgress(t, !1, !0),
            f = 0,
            g = c + l + r;var m = d < 0 && d > -1,
            v = u > 0 && u < 1;return 0 === t ? (f = g * Math.abs(d), v && 1 === d && (f -= g * Math.abs(u))) : t === h ? (f = g * Math.abs(u) * -1, m && -1 === u && (f += g * Math.abs(d))) : m || v ? (f = -1 * g, f += g * Math.abs(d), f += g * (1 - Math.abs(u))) : f = g * p, f;
      }
    }, {
      key: "setProps",
      value: function setProps(t) {
        var i;var n = this;if (!n.isModern) return;var s = n.instance,
            o = n.carousel;if (s && o) {
          var _a9 = null === (i = o.slides[t]) || void 0 === i ? void 0 : i.el;if (_a9 && _a9.childNodes.length) {
            var _i34 = e(1 - Math.abs(s.getProgress(t))),
                _o13 = e(n.getShift(t));_a9.style.setProperty("--progress", _i34 ? _i34 + "" : ""), _a9.style.setProperty("--shift", _o13 + "");
          }
        }
      }
    }, {
      key: "shiftModern",
      value: function shiftModern() {
        var t = this;if (!t.isModern) return;var e = t.instance,
            i = t.track,
            n = e.panzoom,
            s = t.carousel;
        if (!(e && i && n && s)) return;if (n.state === v.Init || n.state === v.Destroy) return;var _iteratorNormalCompletion49 = true;
        var _didIteratorError49 = false;
        var _iteratorError49 = undefined;

        try {
          for (var _iterator49 = e.slides[Symbol.iterator](), _step49; !(_iteratorNormalCompletion49 = (_step49 = _iterator49.next()).done); _iteratorNormalCompletion49 = true) {
            var _i35 = _step49.value;
            t.setProps(_i35.index);
          }
        } catch (err) {
          _didIteratorError49 = true;
          _iteratorError49 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion49 && _iterator49.return) {
              _iterator49.return();
            }
          } finally {
            if (_didIteratorError49) {
              throw _iteratorError49;
            }
          }
        }

        var o = (t[$t] + t.thumbGap) * (s.slides.length || 0);i.style.setProperty("--width", o + "");
      }
    }, {
      key: "cleanup",
      value: function cleanup() {
        var t = this;t.carousel && t.carousel.destroy(), t.carousel = null, t.container && t.container.remove(), t.container = null, t.track && t.track.remove(), t.track = null, t.state = Bt.Init, P(t.instance.container, t.cn("hasThumbs"));
      }
    }, {
      key: "attach",
      value: function attach() {
        var t = this,
            e = t.instance;e.on("initSlide", t.onInitSlide), e.state === H.Init ? e.on("initSlides", t.onInitSlides) : t.onInitSlides(), e.on(["change", "Panzoom.afterTransform"], t.onChange), e.on("Panzoom.refresh", t.onRefresh);
      }
    }, {
      key: "detach",
      value: function detach() {
        var t = this,
            e = t.instance;e.off("initSlide", t.onInitSlide), e.off("initSlides", t.onInitSlides), e.off(["change", "Panzoom.afterTransform"], t.onChange), e.off("Panzoom.refresh", t.onRefresh), t.cleanup();
      }
    }, {
      key: "isModern",
      get: function get() {
        return "modern" === this.type;
      }
    }]);

    return Wt;
  }($);Object.defineProperty(Wt, "defaults", { enumerable: !0, configurable: !0, writable: !0, value: jt });var Xt = Object.assign(Object.assign({}, jt), { key: "t", showOnStart: !0, parentEl: null }),
      qt = "is-masked",
      Yt = "aria-hidden";
  var Vt = function (_$9) {
    _inherits(Vt, _$9);

    function Vt() {
      var _this33;

      _classCallCheck(this, Vt);

      (_this33 = _possibleConstructorReturn(this, (Vt.__proto__ || Object.getPrototypeOf(Vt)).apply(this, arguments)), _this33), Object.defineProperty(_this33, "ref", { enumerable: !0, configurable: !0, writable: !0, value: null }), Object.defineProperty(_this33, "hidden", { enumerable: !0, configurable: !0, writable: !0, value: !1 });return _this33;
    }

    _createClass(Vt, [{
      key: "onClick",
      value: function onClick(t, e) {
        e.stopPropagation();
      }
    }, {
      key: "onCreateSlide",
      value: function onCreateSlide(t, e) {
        var i, n, s;var o = (null === (s = null === (n = null === (i = this.instance) || void 0 === i ? void 0 : i.carousel) || void 0 === n ? void 0 : n.slides[e.index]) || void 0 === s ? void 0 : s.type) || "",
            a = e.el;if (a && o) {
          var _t52 = "for-" + o;["video", "youtube", "vimeo", "html5video"].includes(o) && (_t52 += " for-video"), C(a, _t52);
        }
      }
    }, {
      key: "onInit",
      value: function onInit() {
        var _this34 = this;

        var t;var e = this,
            i = e.instance,
            n = i.carousel;if (e.ref || !n) return;var s = e.option("parentEl") || i.footer || i.container;if (!s) return;var o = p({}, e.options, { parentEl: s, classes: { container: "f-thumbs fancybox__thumbs" }, Carousel: { Sync: { friction: i.option("Carousel.friction") || 0 } }, on: { ready: function ready(t) {
              var i = t.container;i && _this34.hidden && (e.refresh(), i.style.transition = "none", e.hide(), i.offsetHeight, queueMicrotask(function () {
                i.style.transition = "", e.show();
              }));
            } } });o.Carousel = o.Carousel || {}, o.Carousel.on = p((null === (t = e.options.Carousel) || void 0 === t ? void 0 : t.on) || {}, { click: this.onClick, createSlide: this.onCreateSlide }), n.options.Thumbs = o, n.attachPlugins({ Thumbs: Wt }), e.ref = n.plugins.Thumbs, e.option("showOnStart") || (e.ref.state = Bt.Hidden, e.hidden = !0);
      }
    }, {
      key: "onResize",
      value: function onResize() {
        var t;var e = null === (t = this.ref) || void 0 === t ? void 0 : t.container;e && (e.style.maxHeight = "");
      }
    }, {
      key: "onKeydown",
      value: function onKeydown(t, e) {
        var i = this.option("key");i && i === e && this.toggle();
      }
    }, {
      key: "toggle",
      value: function toggle() {
        var t = this.ref;if (t && !t.isDisabled()) return t.state === Bt.Hidden ? (t.state = Bt.Init, void t.build()) : void (this.hidden ? this.show() : this.hide());
      }
    }, {
      key: "show",
      value: function show() {
        var t = this.ref;if (!t || t.isDisabled()) return;var e = t.container;e && (this.refresh(), e.offsetHeight, e.removeAttribute(Yt), e.classList.remove(qt), this.hidden = !1);
      }
    }, {
      key: "hide",
      value: function hide() {
        var t = this.ref,
            e = t && t.container;e && (this.refresh(), e.offsetHeight, e.classList.add(qt), e.setAttribute(Yt, "true")), this.hidden = !0;
      }
    }, {
      key: "refresh",
      value: function refresh() {
        var t = this.ref;if (!t || !t.state) return;var e = t.container,
            i = (null == e ? void 0 : e.firstChild) || null;e && i && i.childNodes.length && (e.style.maxHeight = i.getBoundingClientRect().height + "px");
      }
    }, {
      key: "attach",
      value: function attach() {
        var t = this,
            e = t.instance;e.state === lt.Init ? e.on("Carousel.init", t.onInit) : t.onInit(), e.on("resize", t.onResize), e.on("keydown", t.onKeydown);
      }
    }, {
      key: "detach",
      value: function detach() {
        var t;var e = this,
            i = e.instance;i.off("Carousel.init", e.onInit), i.off("resize", e.onResize), i.off("keydown", e.onKeydown), null === (t = i.carousel) || void 0 === t || t.detachPlugins(["Thumbs"]), e.ref = null;
      }
    }, {
      key: "isEnabled",
      get: function get() {
        var t = this.ref;return t && !t.isDisabled();
      }
    }, {
      key: "isHidden",
      get: function get() {
        return this.hidden;
      }
    }]);

    return Vt;
  }($);

  Object.defineProperty(Vt, "defaults", { enumerable: !0, configurable: !0, writable: !0, value: Xt });var Zt = { panLeft: { icon: '<svg><path d="M5 12h14M5 12l6 6M5 12l6-6"/></svg>', change: { panX: -100 } }, panRight: { icon: '<svg><path d="M5 12h14M13 18l6-6M13 6l6 6"/></svg>', change: { panX: 100 } }, panUp: { icon: '<svg><path d="M12 5v14M18 11l-6-6M6 11l6-6"/></svg>', change: { panY: -100 } }, panDown: { icon: '<svg><path d="M12 5v14M18 13l-6 6M6 13l6 6"/></svg>', change: { panY: 100 } }, zoomIn: { icon: '<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/></svg>', action: "zoomIn" }, zoomOut: { icon: '<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>', action: "zoomOut" }, toggle1to1: { icon: '<svg><path d="M3.51 3.07c5.74.02 11.48-.02 17.22.02 1.37.1 2.34 1.64 2.18 3.13 0 4.08.02 8.16 0 12.23-.1 1.54-1.47 2.64-2.79 2.46-5.61-.01-11.24.02-16.86-.01-1.36-.12-2.33-1.65-2.17-3.14 0-4.07-.02-8.16 0-12.23.1-1.36 1.22-2.48 2.42-2.46Z"/><path d="M5.65 8.54h1.49v6.92m8.94-6.92h1.49v6.92M11.5 9.4v.02m0 5.18v0"/></svg>', action: "toggleZoom" }, toggleZoom: { icon: '<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>', action: "toggleZoom" }, iterateZoom: { icon: '<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>', action: "iterateZoom" }, rotateCCW: { icon: '<svg><path d="M15 4.55a8 8 0 0 0-6 14.9M9 15v5H4M18.37 7.16v.01M13 19.94v.01M16.84 18.37v.01M19.37 15.1v.01M19.94 11v.01"/></svg>', action: "rotateCCW" }, rotateCW: { icon: '<svg><path d="M9 4.55a8 8 0 0 1 6 14.9M15 15v5h5M5.63 7.16v.01M4.06 11v.01M4.63 15.1v.01M7.16 18.37v.01M11 19.94v.01"/></svg>', action: "rotateCW" }, flipX: { icon: '<svg style="stroke-width: 1.3"><path d="M12 3v18M16 7v10h5L16 7M8 7v10H3L8 7"/></svg>', action: "flipX" }, flipY: { icon: '<svg style="stroke-width: 1.3"><path d="M3 12h18M7 16h10L7 21v-5M7 8h10L7 3v5"/></svg>', action: "flipY" }, fitX: { icon: '<svg><path d="M4 12V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6M10 18H3M21 18h-7M6 15l-3 3 3 3M18 15l3 3-3 3"/></svg>', action: "fitX" }, fitY: { icon: '<svg><path d="M12 20H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6M18 14v7M18 3v7M15 18l3 3 3-3M15 6l3-3 3 3"/></svg>', action: "fitY" }, reset: { icon: '<svg><path d="M20 11A8.1 8.1 0 0 0 4.5 9M4 5v4h4M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/></svg>', action: "reset" }, toggleFS: { icon: '<svg><g><path d="M14.5 9.5 21 3m0 0h-6m6 0v6M3 21l6.5-6.5M3 21v-6m0 6h6"/></g><g><path d="m14 10 7-7m-7 7h6m-6 0V4M3 21l7-7m0 0v6m0-6H4"/></g></svg>', action: "toggleFS" } };var Ut;!function (t) {
    t[t.Init = 0] = "Init", t[t.Ready = 1] = "Ready", t[t.Disabled = 2] = "Disabled";
  }(Ut || (Ut = {}));var Gt = { absolute: "auto", display: { left: ["infobar"], middle: [], right: ["iterateZoom", "slideshow", "fullscreen", "thumbs", "close"] }, enabled: "auto", items: { infobar: { tpl: '<div class="fancybox__infobar" tabindex="-1"><span data-fancybox-current-index></span>/<span data-fancybox-count></span></div>' }, download: { tpl: '<a class="f-button" title="{{DOWNLOAD}}" data-fancybox-download href="javasript:;"><svg><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5 5-5M12 4v12"/></svg></a>' }, prev: { tpl: '<button class="f-button" title="{{PREV}}" data-fancybox-prev><svg><path d="m15 6-6 6 6 6"/></svg></button>' }, next: { tpl: '<button class="f-button" title="{{NEXT}}" data-fancybox-next><svg><path d="m9 6 6 6-6 6"/></svg></button>' }, slideshow: { tpl: '<button class="f-button" title="{{TOGGLE_SLIDESHOW}}" data-fancybox-toggle-slideshow><svg><g><path d="M8 4v16l13 -8z"></path></g><g><path d="M8 4v15M17 4v15"/></g></svg></button>' }, fullscreen: { tpl: '<button class="f-button" title="{{TOGGLE_FULLSCREEN}}" data-fancybox-toggle-fullscreen><svg><g><path d="M4 8V6a2 2 0 0 1 2-2h2M4 16v2a2 2 0 0 0 2 2h2M16 4h2a2 2 0 0 1 2 2v2M16 20h2a2 2 0 0 0 2-2v-2"/></g><g><path d="M15 19v-2a2 2 0 0 1 2-2h2M15 5v2a2 2 0 0 0 2 2h2M5 15h2a2 2 0 0 1 2 2v2M5 9h2a2 2 0 0 0 2-2V5"/></g></svg></button>' }, thumbs: { tpl: '<button class="f-button" title="{{TOGGLE_THUMBS}}" data-fancybox-toggle-thumbs><svg><circle cx="5.5" cy="5.5" r="1"/><circle cx="12" cy="5.5" r="1"/><circle cx="18.5" cy="5.5" r="1"/><circle cx="5.5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="18.5" cy="12" r="1"/><circle cx="5.5" cy="18.5" r="1"/><circle cx="12" cy="18.5" r="1"/><circle cx="18.5" cy="18.5" r="1"/></svg></button>' }, close: { tpl: '<button class="f-button" title="{{CLOSE}}" data-fancybox-close><svg><path d="m19.5 4.5-15 15M4.5 4.5l15 15"/></svg></button>' } }, parentEl: null },
      Kt = { tabindex: "-1", width: "24", height: "24", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" },
      Jt = "has-toolbar",
      Qt = "fancybox__toolbar";
  var te = function (_$10) {
    _inherits(te, _$10);

    function te() {
      var _this35;

      _classCallCheck(this, te);

      (_this35 = _possibleConstructorReturn(this, (te.__proto__ || Object.getPrototypeOf(te)).apply(this, arguments)), _this35), Object.defineProperty(_this35, "state", { enumerable: !0, configurable: !0, writable: !0, value: Ut.Init }), Object.defineProperty(_this35, "container", { enumerable: !0, configurable: !0, writable: !0, value: null });return _this35;
    }

    _createClass(te, [{
      key: "onReady",
      value: function onReady(t) {
        var e;if (!t.carousel) return;var i = this.option("display"),
            n = this.option("absolute"),
            s = this.option("enabled");if ("auto" === s) {
          var _t53 = this.instance.carousel;var _e49 = 0;if (_t53) {
            var _iteratorNormalCompletion50 = true;
            var _didIteratorError50 = false;
            var _iteratorError50 = undefined;

            try {
              for (var _iterator50 = _t53.slides[Symbol.iterator](), _step50; !(_iteratorNormalCompletion50 = (_step50 = _iterator50.next()).done); _iteratorNormalCompletion50 = true) {
                var _i36 = _step50.value;
                (_i36.panzoom || "image" === _i36.type) && _e49++;
              }
            } catch (err) {
              _didIteratorError50 = true;
              _iteratorError50 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion50 && _iterator50.return) {
                  _iterator50.return();
                }
              } finally {
                if (_didIteratorError50) {
                  throw _iteratorError50;
                }
              }
            }
          }_e49 || (s = !1);
        }s || (i = void 0);var o = 0;var a = { left: [], middle: [], right: [] };if (i) {
          var _arr6 = ["left", "middle", "right"];
          for (var _i37 = 0; _i37 < _arr6.length; _i37++) {
            var _t54 = _arr6[_i37];var _iteratorNormalCompletion51 = true;
            var _didIteratorError51 = false;
            var _iteratorError51 = undefined;

            try {
              for (var _iterator51 = i[_t54][Symbol.iterator](), _step51; !(_iteratorNormalCompletion51 = (_step51 = _iterator51.next()).done); _iteratorNormalCompletion51 = true) {
                var _n21 = _step51.value;
                var _i38 = this.createEl(_n21);_i38 && (null === (e = a[_t54]) || void 0 === e || e.push(_i38), o++);
              }
            } catch (err) {
              _didIteratorError51 = true;
              _iteratorError51 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion51 && _iterator51.return) {
                  _iterator51.return();
                }
              } finally {
                if (_didIteratorError51) {
                  throw _iteratorError51;
                }
              }
            }
          }
        }var r = null;if (o && (r = this.createContainer()), r) {
          var _iteratorNormalCompletion52 = true;
          var _didIteratorError52 = false;
          var _iteratorError52 = undefined;

          try {
            for (var _iterator52 = Object.entries(a)[Symbol.iterator](), _step52; !(_iteratorNormalCompletion52 = (_step52 = _iterator52.next()).done); _iteratorNormalCompletion52 = true) {
              var _ref27 = _step52.value;

              var _ref28 = _slicedToArray(_ref27, 2);

              var _t55 = _ref28[0];
              var _e50 = _ref28[1];
              var _i39 = document.createElement("div");C(_i39, Qt + "__column is-" + _t55);var _iteratorNormalCompletion53 = true;
              var _didIteratorError53 = false;
              var _iteratorError53 = undefined;

              try {
                for (var _iterator53 = _e50[Symbol.iterator](), _step53; !(_iteratorNormalCompletion53 = (_step53 = _iterator53.next()).done); _iteratorNormalCompletion53 = true) {
                  var _t56 = _step53.value;
                  _i39.appendChild(_t56);
                }
              } catch (err) {
                _didIteratorError53 = true;
                _iteratorError53 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion53 && _iterator53.return) {
                    _iterator53.return();
                  }
                } finally {
                  if (_didIteratorError53) {
                    throw _iteratorError53;
                  }
                }
              }

              "auto" !== n || "middle" !== _t55 || _e50.length || (n = !0), r.appendChild(_i39);
            }
          } catch (err) {
            _didIteratorError52 = true;
            _iteratorError52 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion52 && _iterator52.return) {
                _iterator52.return();
              }
            } finally {
              if (_didIteratorError52) {
                throw _iteratorError52;
              }
            }
          }

          !0 === n && C(r, "is-absolute"), this.state = Ut.Ready, this.onRefresh();
        } else this.state = Ut.Disabled;
      }
    }, {
      key: "onClick",
      value: function onClick(t) {
        var e, i;var n = this.instance,
            s = n.getSlide(),
            o = null == s ? void 0 : s.panzoom,
            a = t.target,
            r = a && S(a) ? a.dataset : null;if (!r) return;if (void 0 !== r.fancyboxToggleThumbs) return t.preventDefault(), t.stopPropagation(), void (null === (e = n.plugins.Thumbs) || void 0 === e || e.toggle());if (void 0 !== r.fancyboxToggleFullscreen) return t.preventDefault(), t.stopPropagation(), void this.instance.toggleFullscreen();if (void 0 !== r.fancyboxToggleSlideshow) {
          t.preventDefault(), t.stopPropagation();var _e51 = null === (i = n.carousel) || void 0 === i ? void 0 : i.plugins.Autoplay;var _s14 = _e51.isActive;return o && "mousemove" === o.panMode && !_s14 && o.reset(), void (_s14 ? _e51.stop() : _e51.start());
        }var l = r.panzoomAction,
            c = r.panzoomChange;if ((c || l) && (t.preventDefault(), t.stopPropagation()), c) {
          var _t57 = {};try {
            _t57 = JSON.parse(c);
          } catch (t) {}o && o.applyChange(_t57);
        } else l && o && o[l] && o[l]();
      }
    }, {
      key: "onChange",
      value: function onChange() {
        this.onRefresh();
      }
    }, {
      key: "onRefresh",
      value: function onRefresh() {
        if (this.instance.isClosing()) return;var t = this.container;if (!t) return;var e = this.instance.getSlide();if (!e || e.state !== ct.Ready) return;var i = e && !e.error && e.panzoom;var _iteratorNormalCompletion54 = true;
        var _didIteratorError54 = false;
        var _iteratorError54 = undefined;

        try {
          for (var _iterator54 = t.querySelectorAll("[data-panzoom-action]")[Symbol.iterator](), _step54; !(_iteratorNormalCompletion54 = (_step54 = _iterator54.next()).done); _iteratorNormalCompletion54 = true) {
            var _e52 = _step54.value;
            i ? (_e52.removeAttribute("disabled"), _e52.removeAttribute("tabindex")) : (_e52.setAttribute("disabled", ""), _e52.setAttribute("tabindex", "-1"));
          }
        } catch (err) {
          _didIteratorError54 = true;
          _iteratorError54 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion54 && _iterator54.return) {
              _iterator54.return();
            }
          } finally {
            if (_didIteratorError54) {
              throw _iteratorError54;
            }
          }
        }

        var n = i && i.canZoomIn(),
            s = i && i.canZoomOut();var _iteratorNormalCompletion55 = true;
        var _didIteratorError55 = false;
        var _iteratorError55 = undefined;

        try {
          for (var _iterator55 = t.querySelectorAll('[data-panzoom-action="zoomIn"]')[Symbol.iterator](), _step55; !(_iteratorNormalCompletion55 = (_step55 = _iterator55.next()).done); _iteratorNormalCompletion55 = true) {
            var _e53 = _step55.value;
            n ? (_e53.removeAttribute("disabled"), _e53.removeAttribute("tabindex")) : (_e53.setAttribute("disabled", ""), _e53.setAttribute("tabindex", "-1"));
          }
        } catch (err) {
          _didIteratorError55 = true;
          _iteratorError55 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion55 && _iterator55.return) {
              _iterator55.return();
            }
          } finally {
            if (_didIteratorError55) {
              throw _iteratorError55;
            }
          }
        }

        var _iteratorNormalCompletion56 = true;
        var _didIteratorError56 = false;
        var _iteratorError56 = undefined;

        try {
          for (var _iterator56 = t.querySelectorAll('[data-panzoom-action="zoomOut"]')[Symbol.iterator](), _step56; !(_iteratorNormalCompletion56 = (_step56 = _iterator56.next()).done); _iteratorNormalCompletion56 = true) {
            var _e54 = _step56.value;
            s ? (_e54.removeAttribute("disabled"), _e54.removeAttribute("tabindex")) : (_e54.setAttribute("disabled", ""), _e54.setAttribute("tabindex", "-1"));
          }
        } catch (err) {
          _didIteratorError56 = true;
          _iteratorError56 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion56 && _iterator56.return) {
              _iterator56.return();
            }
          } finally {
            if (_didIteratorError56) {
              throw _iteratorError56;
            }
          }
        }

        var _iteratorNormalCompletion57 = true;
        var _didIteratorError57 = false;
        var _iteratorError57 = undefined;

        try {
          for (var _iterator57 = t.querySelectorAll('[data-panzoom-action="toggleZoom"],[data-panzoom-action="iterateZoom"]')[Symbol.iterator](), _step57; !(_iteratorNormalCompletion57 = (_step57 = _iterator57.next()).done); _iteratorNormalCompletion57 = true) {
            var _e55 = _step57.value;
            s || n ? (_e55.removeAttribute("disabled"), _e55.removeAttribute("tabindex")) : (_e55.setAttribute("disabled", ""), _e55.setAttribute("tabindex", "-1"));var _t58 = _e55.querySelector("g");_t58 && (_t58.style.display = n ? "" : "none");
          }
        } catch (err) {
          _didIteratorError57 = true;
          _iteratorError57 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion57 && _iterator57.return) {
              _iterator57.return();
            }
          } finally {
            if (_didIteratorError57) {
              throw _iteratorError57;
            }
          }
        }
      }
    }, {
      key: "onDone",
      value: function onDone(t, e) {
        var _this36 = this;

        var i;null === (i = e.panzoom) || void 0 === i || i.on("afterTransform", function () {
          _this36.instance.isCurrentSlide(e) && _this36.onRefresh();
        }), this.instance.isCurrentSlide(e) && this.onRefresh();
      }
    }, {
      key: "createContainer",
      value: function createContainer() {
        var t = this.instance.container;if (!t) return null;var e = this.option("parentEl") || t;var i = e.querySelector("." + Qt);return i || (i = document.createElement("div"), C(i, Qt), e.prepend(i)), i.addEventListener("click", this.onClick, { passive: !1, capture: !0 }), t && C(t, Jt), this.container = i, i;
      }
    }, {
      key: "createEl",
      value: function createEl(t) {
        var _this37 = this;

        var e = this.instance,
            i = e.carousel;if (!i) return null;if ("toggleFS" === t) return null;if ("fullscreen" === t && !at()) return null;var n = null;var o = i.slides.length || 0;var a = 0,
            r = 0;var _iteratorNormalCompletion58 = true;
        var _didIteratorError58 = false;
        var _iteratorError58 = undefined;

        try {
          for (var _iterator58 = i.slides[Symbol.iterator](), _step58; !(_iteratorNormalCompletion58 = (_step58 = _iterator58.next()).done); _iteratorNormalCompletion58 = true) {
            var _t59 = _step58.value;
            (_t59.panzoom || "image" === _t59.type) && a++, ("image" === _t59.type || _t59.downloadSrc) && r++;
          }
        } catch (err) {
          _didIteratorError58 = true;
          _iteratorError58 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion58 && _iterator58.return) {
              _iterator58.return();
            }
          } finally {
            if (_didIteratorError58) {
              throw _iteratorError58;
            }
          }
        }

        if (o < 2 && ["infobar", "prev", "next"].includes(t)) return n;if (void 0 !== Zt[t] && !a) return null;if ("download" === t && !r) return null;if ("thumbs" === t) {
          var _t60 = e.plugins.Thumbs;if (!_t60 || !_t60.isEnabled) return null;
        }if ("slideshow" === t) {
          if (!i.plugins.Autoplay || o < 2) return null;
        }if (void 0 !== Zt[t]) {
          var _e56 = Zt[t];n = document.createElement("button"), n.setAttribute("title", this.instance.localize("{{" + t.toUpperCase() + "}}")), C(n, "f-button"), _e56.action && (n.dataset.panzoomAction = _e56.action), _e56.change && (n.dataset.panzoomChange = JSON.stringify(_e56.change)), n.appendChild(s(this.instance.localize(_e56.icon)));
        } else {
          var _e57 = (this.option("items") || [])[t];_e57 && (n = s(this.instance.localize(_e57.tpl)), "function" == typeof _e57.click && n.addEventListener("click", function (t) {
            t.preventDefault(), t.stopPropagation(), "function" == typeof _e57.click && _e57.click.call(_this37, _this37, t);
          }));
        }var l = null == n ? void 0 : n.querySelector("svg");if (l) {
          var _iteratorNormalCompletion59 = true;
          var _didIteratorError59 = false;
          var _iteratorError59 = undefined;

          try {
            for (var _iterator59 = Object.entries(Kt)[Symbol.iterator](), _step59; !(_iteratorNormalCompletion59 = (_step59 = _iterator59.next()).done); _iteratorNormalCompletion59 = true) {
              var _ref29 = _step59.value;

              var _ref30 = _slicedToArray(_ref29, 2);

              var _t61 = _ref30[0];
              var _e58 = _ref30[1];
              l.getAttribute(_t61) || l.setAttribute(_t61, String(_e58));
            }
          } catch (err) {
            _didIteratorError59 = true;
            _iteratorError59 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion59 && _iterator59.return) {
                _iterator59.return();
              }
            } finally {
              if (_didIteratorError59) {
                throw _iteratorError59;
              }
            }
          }
        }return n;
      }
    }, {
      key: "removeContainer",
      value: function removeContainer() {
        var t = this.container;t && t.remove(), this.container = null, this.state = Ut.Disabled;var e = this.instance.container;e && P(e, Jt);
      }
    }, {
      key: "attach",
      value: function attach() {
        var t = this,
            e = t.instance;e.on("Carousel.initSlides", t.onReady), e.on("done", t.onDone), e.on(["reveal", "Carousel.change"], t.onChange), t.onReady(t.instance);
      }
    }, {
      key: "detach",
      value: function detach() {
        var t = this,
            e = t.instance;e.off("Carousel.initSlides", t.onReady), e.off("done", t.onDone), e.off(["reveal", "Carousel.change"], t.onChange), t.removeContainer();
      }
    }]);

    return te;
  }($);

  Object.defineProperty(te, "defaults", { enumerable: !0, configurable: !0, writable: !0, value: Gt });var ee = { Hash: function (_$11) {
      _inherits(Hash, _$11);

      function Hash() {
        _classCallCheck(this, Hash);

        return _possibleConstructorReturn(this, (Hash.__proto__ || Object.getPrototypeOf(Hash)).apply(this, arguments));
      }

      _createClass(Hash, [{
        key: "onReady",
        value: function onReady() {
          dt = !1;
        }
      }, {
        key: "onChange",
        value: function onChange(t) {
          pt && clearTimeout(pt);
          var _ft2 = ft(),
              e = _ft2.hash,
              _gt3 = gt(),
              i = _gt3.hash,
              n = t.isOpeningSlide(t.getSlide());

          n && (ht = i === e ? "" : i), e && e !== i && (pt = setTimeout(function () {
            try {
              if (t.state === lt.Ready) {
                var _t62 = "replaceState";n && !ut && (_t62 = "pushState", ut = !0), window.history[_t62]({}, document.title, window.location.pathname + window.location.search + e);
              }
            } catch (t) {}
          }, 300));
        }
      }, {
        key: "onClose",
        value: function onClose(t) {
          if (pt && clearTimeout(pt), !dt && ut) return ut = !1, dt = !1, void window.history.back();if (!dt) try {
            window.history.replaceState({}, document.title, window.location.pathname + window.location.search + (ht || ""));
          } catch (t) {}
        }
      }, {
        key: "attach",
        value: function attach() {
          var t = this.instance;t.on("ready", this.onReady), t.on(["Carousel.ready", "Carousel.change"], this.onChange), t.on("close", this.onClose);
        }
      }, {
        key: "detach",
        value: function detach() {
          var t = this.instance;t.off("ready", this.onReady), t.off(["Carousel.ready", "Carousel.change"], this.onChange), t.off("close", this.onClose);
        }
      }], [{
        key: "parseURL",
        value: function parseURL() {
          return gt();
        }
      }, {
        key: "startFromUrl",
        value: function startFromUrl() {
          mt();
        }
      }, {
        key: "destroy",
        value: function destroy() {
          window.removeEventListener("hashchange", bt, !1);
        }
      }]);

      return Hash;
    }($), Html: zt, Images: xt, Slideshow: Ft, Thumbs: Vt, Toolbar: te },
      ie = "with-fancybox",
      ne = "hide-scrollbar",
      se = "--fancybox-scrollbar-compensate",
      oe = "--fancybox-body-margin",
      ae = "aria-hidden",
      re = "is-using-tab",
      le = "is-animated",
      ce = "is-compact",
      he = "is-loading",
      de = "is-opening",
      ue = "has-caption",
      pe = "disabled",
      fe = "tabindex",
      ge = "download",
      me = "href",
      ve = "src",
      be = function be(t) {
    return "string" == typeof t;
  },
      ye = function ye() {
    var t = window.getSelection();return !!t && "Range" === t.type;
  };var we = void 0,
      xe = null,
      Ee = null,
      Se = 0,
      Pe = 0,
      Ce = 0,
      Te = 0;var Me = new Map();var Oe = 0;
  var Ae = function (_m4) {
    _inherits(Ae, _m4);

    _createClass(Ae, [{
      key: "isIdle",
      get: function get() {
        return this.idle;
      }
    }, {
      key: "isCompact",
      get: function get() {
        return this.option("compact");
      }
    }]);

    function Ae() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var _this39;

      var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      _classCallCheck(this, Ae);

      (_this39 = _possibleConstructorReturn(this, (Ae.__proto__ || Object.getPrototypeOf(Ae)).call(this, e)), _this39), Object.defineProperty(_this39, "userSlides", { enumerable: !0, configurable: !0, writable: !0, value: [] }), Object.defineProperty(_this39, "userPlugins", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(_this39, "idle", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(_this39, "idleTimer", { enumerable: !0, configurable: !0, writable: !0, value: null }), Object.defineProperty(_this39, "clickTimer", { enumerable: !0, configurable: !0, writable: !0, value: null }), Object.defineProperty(_this39, "pwt", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(_this39, "ignoreFocusChange", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(_this39, "startedFs", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(_this39, "state", { enumerable: !0, configurable: !0, writable: !0, value: lt.Init }), Object.defineProperty(_this39, "id", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(_this39, "container", { enumerable: !0, configurable: !0, writable: !0, value: null }), Object.defineProperty(_this39, "caption", { enumerable: !0, configurable: !0, writable: !0, value: null }), Object.defineProperty(_this39, "footer", { enumerable: !0, configurable: !0, writable: !0, value: null }), Object.defineProperty(_this39, "carousel", { enumerable: !0, configurable: !0, writable: !0, value: null }), Object.defineProperty(_this39, "lastFocus", { enumerable: !0, configurable: !0, writable: !0, value: null }), Object.defineProperty(_this39, "prevMouseMoveEvent", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), we || (we = at()), _this39.id = e.id || ++Oe, Me.set(_this39.id, _this39), _this39.userSlides = t, _this39.userPlugins = i, queueMicrotask(function () {
        _this39.init();
      });return _this39;
    }

    _createClass(Ae, [{
      key: "init",
      value: function init() {
        var _this40 = this;

        if (this.state === lt.Destroy) return;this.state = lt.Init, this.attachPlugins(Object.assign(Object.assign({}, Ae.Plugins), this.userPlugins)), this.emit("init"), this.emit("attachPlugins"), !0 === this.option("hideScrollbar") && function () {
          if (!it) return;var t = document,
              e = t.body,
              i = t.documentElement;if (e.classList.contains(ne)) return;var n = window.innerWidth - i.getBoundingClientRect().width;var s = parseFloat(window.getComputedStyle(e).marginRight);n < 0 && (n = 0), i.style.setProperty(se, n + "px"), s && e.style.setProperty(oe, s + "px"), e.classList.add(ne);
        }(), this.initLayout(), this.scale();var t = function t() {
          _this40.initCarousel(_this40.userSlides), _this40.state = lt.Ready, _this40.attachEvents(), _this40.emit("ready"), setTimeout(function () {
            _this40.container && _this40.container.setAttribute(ae, "false");
          }, 16);
        };this.option("Fullscreen.autoStart") && we && !we.isFullscreen() ? we.request().then(function () {
          _this40.startedFs = !0, t();
        }).catch(function () {
          return t();
        }) : t();
      }
    }, {
      key: "initLayout",
      value: function initLayout() {
        var _this41 = this;

        var t, e;var i = this.option("parentEl") || document.body,
            n = s(this.localize(this.option("tpl.main") || ""));if (n) {
          if (n.setAttribute("id", "fancybox-" + this.id), n.setAttribute("aria-label", this.localize("{{MODAL}}")), n.classList.toggle(ce, this.isCompact), C(n, this.option("mainClass") || ""), C(n, de), this.container = n, this.footer = n.querySelector(".fancybox__footer"), i.appendChild(n), C(document.documentElement, ie), xe && Ee || (xe = document.createElement("span"), C(xe, "fancybox-focus-guard"), xe.setAttribute(fe, "0"), xe.setAttribute(ae, "true"), xe.setAttribute("aria-label", "Focus guard"), Ee = xe.cloneNode(), null === (t = n.parentElement) || void 0 === t || t.insertBefore(xe, n), null === (e = n.parentElement) || void 0 === e || e.append(Ee)), n.addEventListener("mousedown", function (t) {
            Se = t.pageX, Pe = t.pageY, P(n, re);
          }), this.option("closeExisting")) {
            var _iteratorNormalCompletion60 = true;
            var _didIteratorError60 = false;
            var _iteratorError60 = undefined;

            try {
              for (var _iterator60 = Me.values()[Symbol.iterator](), _step60; !(_iteratorNormalCompletion60 = (_step60 = _iterator60.next()).done); _iteratorNormalCompletion60 = true) {
                var _t63 = _step60.value;
                _t63.id !== this.id && _t63.close();
              }
            } catch (err) {
              _didIteratorError60 = true;
              _iteratorError60 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion60 && _iterator60.return) {
                  _iterator60.return();
                }
              } finally {
                if (_didIteratorError60) {
                  throw _iteratorError60;
                }
              }
            }
          } else this.option("animated") && (C(n, le), setTimeout(function () {
            _this41.isClosing() || P(n, le);
          }, 350));this.emit("initLayout");
        }
      }
    }, {
      key: "initCarousel",
      value: function initCarousel(t) {
        var _this42 = this;

        var e = this.container;if (!e) return;var n = e.querySelector(".fancybox__carousel");if (!n) return;var s = this.carousel = new tt(n, p({}, { slides: t, transition: "fade", Panzoom: { lockAxis: this.option("dragToClose") ? "xy" : "x", infinite: !!this.option("dragToClose") && "y" }, Dots: !1, Navigation: { classes: { container: "fancybox__nav", button: "f-button", isNext: "is-next", isPrev: "is-prev" } }, initialPage: this.option("startIndex"), l10n: this.option("l10n") }, this.option("Carousel") || {}));s.on("*", function (t, e) {
          for (var _len6 = arguments.length, i = Array(_len6 > 2 ? _len6 - 2 : 0), _key6 = 2; _key6 < _len6; _key6++) {
            i[_key6 - 2] = arguments[_key6];
          }

          _this42.emit.apply(_this42, ["Carousel." + e, t].concat(i));
        }), s.on(["ready", "change"], function () {
          _this42.manageCaption();
        }), this.on("Carousel.removeSlide", function (t, e, i) {
          _this42.clearContent(i), i.state = void 0;
        }), s.on("Panzoom.touchStart", function () {
          var t, e;_this42.isCompact || _this42.endIdle(), (null === (t = document.activeElement) || void 0 === t ? void 0 : t.closest(".f-thumbs")) && (null === (e = _this42.container) || void 0 === e || e.focus());
        }), s.on("settle", function () {
          _this42.idleTimer || _this42.isCompact || !_this42.option("idle") || _this42.setIdle(), _this42.option("autoFocus") && !_this42.isClosing && _this42.checkFocus();
        }), this.option("dragToClose") && (s.on("Panzoom.afterTransform", function (t, e) {
          var n = _this42.getSlide();if (n && i(n.el)) return;var s = _this42.container;if (s) {
            var _t64 = Math.abs(e.current.f),
                _i40 = _t64 < 1 ? "" : Math.max(.5, Math.min(1, 1 - _t64 / e.contentRect.fitHeight * 1.5));s.style.setProperty("--fancybox-ts", _i40 ? "0s" : ""), s.style.setProperty("--fancybox-opacity", _i40 + "");
          }
        }), s.on("Panzoom.touchEnd", function (t, e, n) {
          var s;var o = _this42.getSlide();if (o && i(o.el)) return;if (e.isMobile && document.activeElement && -1 !== ["TEXTAREA", "INPUT"].indexOf(null === (s = document.activeElement) || void 0 === s ? void 0 : s.nodeName)) return;var a = Math.abs(e.dragOffset.y);"y" === e.lockedAxis && (a >= 200 || a >= 50 && e.dragOffset.time < 300) && (n && n.cancelable && n.preventDefault(), _this42.close(n, "f-throwOut" + (e.current.f < 0 ? "Up" : "Down")));
        })), s.on("change", function (t) {
          var e;var i = null === (e = _this42.getSlide()) || void 0 === e ? void 0 : e.triggerEl;if (i) {
            var _e59 = new CustomEvent("slideTo", { bubbles: !0, cancelable: !0, detail: t.page });i.dispatchEvent(_e59);
          }
        }), s.on(["refresh", "change"], function (t) {
          var e = _this42.container;if (!e) return;var _iteratorNormalCompletion61 = true;
          var _didIteratorError61 = false;
          var _iteratorError61 = undefined;

          try {
            for (var _iterator61 = e.querySelectorAll("[data-fancybox-current-index]")[Symbol.iterator](), _step61; !(_iteratorNormalCompletion61 = (_step61 = _iterator61.next()).done); _iteratorNormalCompletion61 = true) {
              var _i41 = _step61.value;
              _i41.innerHTML = t.page + 1;
            }
          } catch (err) {
            _didIteratorError61 = true;
            _iteratorError61 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion61 && _iterator61.return) {
                _iterator61.return();
              }
            } finally {
              if (_didIteratorError61) {
                throw _iteratorError61;
              }
            }
          }

          var _iteratorNormalCompletion62 = true;
          var _didIteratorError62 = false;
          var _iteratorError62 = undefined;

          try {
            for (var _iterator62 = e.querySelectorAll("[data-fancybox-count]")[Symbol.iterator](), _step62; !(_iteratorNormalCompletion62 = (_step62 = _iterator62.next()).done); _iteratorNormalCompletion62 = true) {
              var _i42 = _step62.value;
              _i42.innerHTML = t.pages.length;
            }
          } catch (err) {
            _didIteratorError62 = true;
            _iteratorError62 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion62 && _iterator62.return) {
                _iterator62.return();
              }
            } finally {
              if (_didIteratorError62) {
                throw _iteratorError62;
              }
            }
          }

          if (!t.isInfinite) {
            var _iteratorNormalCompletion63 = true;
            var _didIteratorError63 = false;
            var _iteratorError63 = undefined;

            try {
              for (var _iterator63 = e.querySelectorAll("[data-fancybox-next]")[Symbol.iterator](), _step63; !(_iteratorNormalCompletion63 = (_step63 = _iterator63.next()).done); _iteratorNormalCompletion63 = true) {
                var _i43 = _step63.value;
                t.page < t.pages.length - 1 ? (_i43.removeAttribute(pe), _i43.removeAttribute(fe)) : (_i43.setAttribute(pe, ""), _i43.setAttribute(fe, "-1"));
              }
            } catch (err) {
              _didIteratorError63 = true;
              _iteratorError63 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion63 && _iterator63.return) {
                  _iterator63.return();
                }
              } finally {
                if (_didIteratorError63) {
                  throw _iteratorError63;
                }
              }
            }

            var _iteratorNormalCompletion64 = true;
            var _didIteratorError64 = false;
            var _iteratorError64 = undefined;

            try {
              for (var _iterator64 = e.querySelectorAll("[data-fancybox-prev]")[Symbol.iterator](), _step64; !(_iteratorNormalCompletion64 = (_step64 = _iterator64.next()).done); _iteratorNormalCompletion64 = true) {
                var _i44 = _step64.value;
                t.page > 0 ? (_i44.removeAttribute(pe), _i44.removeAttribute(fe)) : (_i44.setAttribute(pe, ""), _i44.setAttribute(fe, "-1"));
              }
            } catch (err) {
              _didIteratorError64 = true;
              _iteratorError64 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion64 && _iterator64.return) {
                  _iterator64.return();
                }
              } finally {
                if (_didIteratorError64) {
                  throw _iteratorError64;
                }
              }
            }
          }var i = _this42.getSlide();if (!i) return;var n = i.downloadSrc || "";n || "image" !== i.type || i.error || !be(i[ve]) || (n = i[ve]);var _iteratorNormalCompletion65 = true;
          var _didIteratorError65 = false;
          var _iteratorError65 = undefined;

          try {
            for (var _iterator65 = e.querySelectorAll("[data-fancybox-download]")[Symbol.iterator](), _step65; !(_iteratorNormalCompletion65 = (_step65 = _iterator65.next()).done); _iteratorNormalCompletion65 = true) {
              var _t65 = _step65.value;
              var _e60 = i.downloadFilename;n ? (_t65.removeAttribute(pe), _t65.removeAttribute(fe), _t65.setAttribute(me, n), _t65.setAttribute(ge, _e60 || n), _t65.setAttribute("target", "_blank")) : (_t65.setAttribute(pe, ""), _t65.setAttribute(fe, "-1"), _t65.removeAttribute(me), _t65.removeAttribute(ge));
            }
          } catch (err) {
            _didIteratorError65 = true;
            _iteratorError65 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion65 && _iterator65.return) {
                _iterator65.return();
              }
            } finally {
              if (_didIteratorError65) {
                throw _iteratorError65;
              }
            }
          }
        }), this.emit("initCarousel");
      }
    }, {
      key: "attachEvents",
      value: function attachEvents() {
        var t = this,
            e = t.container;if (!e) return;e.addEventListener("click", t.onClick, { passive: !1, capture: !1 }), e.addEventListener("wheel", t.onWheel, { passive: !1, capture: !1 }), document.addEventListener("keydown", t.onKeydown, { passive: !1, capture: !0 }), document.addEventListener("visibilitychange", t.onVisibilityChange, !1), document.addEventListener("mousemove", t.onMousemove), t.option("trapFocus") && document.addEventListener("focus", t.onFocus, !0), window.addEventListener("resize", t.onResize);var i = window.visualViewport;i && (i.addEventListener("scroll", t.onResize), i.addEventListener("resize", t.onResize));
      }
    }, {
      key: "detachEvents",
      value: function detachEvents() {
        var t = this,
            e = t.container;if (!e) return;document.removeEventListener("keydown", t.onKeydown, { passive: !1, capture: !0 }), e.removeEventListener("wheel", t.onWheel, { passive: !1, capture: !1 }), e.removeEventListener("click", t.onClick, { passive: !1, capture: !1 }), document.removeEventListener("mousemove", t.onMousemove), window.removeEventListener("resize", t.onResize);var i = window.visualViewport;i && (i.removeEventListener("resize", t.onResize), i.removeEventListener("scroll", t.onResize)), document.removeEventListener("visibilitychange", t.onVisibilityChange, !1), document.removeEventListener("focus", t.onFocus, !0);
      }
    }, {
      key: "scale",
      value: function scale() {
        var t = this.container;if (!t) return;var e = window.visualViewport,
            i = Math.max(1, (null == e ? void 0 : e.scale) || 1);var n = "",
            s = "",
            o = "";if (e && i > 1) {
          var _t66 = e.offsetLeft + "px",
              _a10 = e.offsetTop + "px";n = e.width * i + "px", s = e.height * i + "px", o = "translate3d(" + _t66 + ", " + _a10 + ", 0) scale(" + 1 / i + ")";
        }t.style.transform = o, t.style.width = n, t.style.height = s;
      }
    }, {
      key: "onClick",
      value: function onClick(t) {
        var _this43 = this;

        var e;var i = this.container,
            n = this.isCompact;
        if (!i || this.isClosing()) return;!n && this.option("idle") && this.resetIdle();var s = t.composedPath()[0];if (s.closest(".fancybox-spinner") || s.closest("[data-fancybox-close]")) return t.preventDefault(), void this.close(t);if (s.closest("[data-fancybox-prev]")) return t.preventDefault(), void this.prev();if (s.closest("[data-fancybox-next]")) return t.preventDefault(), void this.next();if ("click" === t.type && 0 === t.detail) return;if (Math.abs(t.pageX - Se) > 30 || Math.abs(t.pageY - Pe) > 30) return;var o = document.activeElement;if (ye() && o && i.contains(o)) return;if (n && "image" === (null === (e = this.getSlide()) || void 0 === e ? void 0 : e.type)) return void (this.clickTimer ? (clearTimeout(this.clickTimer), this.clickTimer = null) : this.clickTimer = setTimeout(function () {
          _this43.toggleIdle(), _this43.clickTimer = null;
        }, 350));if (this.emit("click", t), t.defaultPrevented) return;var a = !1;if (s.closest(".fancybox__content")) {
          if (o) {
            if (o.closest("[contenteditable]")) return;s.matches(st) || o.blur();
          }if (ye()) return;a = this.option("contentClick");
        } else s.closest(".fancybox__carousel") && !s.matches(st) && (a = this.option("backdropClick"));"close" === a ? (t.preventDefault(), this.close(t)) : "next" === a ? (t.preventDefault(), this.next()) : "prev" === a && (t.preventDefault(), this.prev());
      }
    }, {
      key: "onWheel",
      value: function onWheel(t) {
        var e = t.target;var i = this.option("wheel", t);e.closest(".fancybox__thumbs") && (i = "slide");var s = "slide" === i,
            o = [-t.deltaX || 0, -t.deltaY || 0, -t.detail || 0].reduce(function (t, e) {
          return Math.abs(e) > Math.abs(t) ? e : t;
        }),
            a = Math.max(-1, Math.min(1, o)),
            r = Date.now();this.pwt && r - this.pwt < 300 ? s && t.preventDefault() : (this.pwt = r, this.emit("wheel", t, a), t.defaultPrevented || ("close" === i ? (t.preventDefault(), this.close(t)) : "slide" === i && (n(e) || (t.preventDefault(), this[a > 0 ? "prev" : "next"]()))));
      }
    }, {
      key: "onScroll",
      value: function onScroll() {
        window.scrollTo(Ce, Te);
      }
    }, {
      key: "onKeydown",
      value: function onKeydown(t) {
        if (!this.isTopmost()) return;this.isCompact || !this.option("idle") || this.isClosing() || this.resetIdle();var e = t.key,
            i = this.option("keyboard");if (!i) return;var n = t.composedPath()[0],
            s = document.activeElement && document.activeElement.classList,
            o = s && s.contains("f-button") || n.dataset.carouselPage || n.dataset.carouselIndex;if ("Escape" !== e && !o && S(n)) {
          if (n.isContentEditable || -1 !== ["TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO"].indexOf(n.nodeName)) return;
        }if ("Tab" === t.key ? C(this.container, re) : P(this.container, re), t.ctrlKey || t.altKey || t.shiftKey) return;this.emit("keydown", e, t);var a = i[e];a && "function" == typeof this[a] && (t.preventDefault(), this[a]());
      }
    }, {
      key: "onResize",
      value: function onResize() {
        var t = this.container;if (!t) return;var e = this.isCompact;t.classList.toggle(ce, e), this.manageCaption(this.getSlide()), this.isCompact ? this.clearIdle() : this.endIdle(), this.scale(), this.emit("resize");
      }
    }, {
      key: "onFocus",
      value: function onFocus(t) {
        this.isTopmost() && this.checkFocus(t);
      }
    }, {
      key: "onMousemove",
      value: function onMousemove(t) {
        this.prevMouseMoveEvent = t, !this.isCompact && this.option("idle") && this.resetIdle();
      }
    }, {
      key: "onVisibilityChange",
      value: function onVisibilityChange() {
        "visible" === document.visibilityState ? this.checkFocus() : this.endIdle();
      }
    }, {
      key: "manageCloseBtn",
      value: function manageCloseBtn(t) {
        var e = this.optionFor(t, "closeButton") || !1;if ("auto" === e) {
          var _t67 = this.plugins.Toolbar;if (_t67 && _t67.state === Ut.Ready) return;
        }if (!e) return;if (!t.contentEl || t.closeBtnEl) return;var i = this.option("tpl.closeButton");if (i) {
          var _e61 = s(this.localize(i));t.closeBtnEl = t.contentEl.appendChild(_e61), t.el && C(t.el, "has-close-btn");
        }
      }
    }, {
      key: "manageCaption",
      value: function manageCaption() {
        var _this44 = this;

        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : void 0;
        var e, i;var n = "fancybox__caption",
            s = this.container;if (!s) return;P(s, ue);var o = this.isCompact || this.option("commonCaption"),
            a = !o;if (this.caption && this.stop(this.caption), a && this.caption && (this.caption.remove(), this.caption = null), o && !this.caption) {
          var _iteratorNormalCompletion66 = true;
          var _didIteratorError66 = false;
          var _iteratorError66 = undefined;

          try {
            for (var _iterator66 = ((null === (e = this.carousel) || void 0 === e ? void 0 : e.slides) || [])[Symbol.iterator](), _step66; !(_iteratorNormalCompletion66 = (_step66 = _iterator66.next()).done); _iteratorNormalCompletion66 = true) {
              var _t68 = _step66.value;
              _t68.captionEl && (_t68.captionEl.remove(), _t68.captionEl = void 0, P(_t68.el, ue), null === (i = _t68.el) || void 0 === i || i.removeAttribute("aria-labelledby"));
            }
          } catch (err) {
            _didIteratorError66 = true;
            _iteratorError66 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion66 && _iterator66.return) {
                _iterator66.return();
              }
            } finally {
              if (_didIteratorError66) {
                throw _iteratorError66;
              }
            }
          }
        }if (t || (t = this.getSlide()), !t || o && !this.isCurrentSlide(t)) return;var r = t.el;var l = this.optionFor(t, "caption", "");if (!l) return void (o && this.caption && this.animate(this.caption, "f-fadeOut", function () {
          _this44.caption && (_this44.caption.innerHTML = "");
        }));var c = null;if (a) {
          if (c = t.captionEl || null, r && !c) {
            var _e62 = n + ("_" + this.id + "_" + t.index);c = document.createElement("div"), C(c, n), c.setAttribute("id", _e62), t.captionEl = r.appendChild(c), C(r, ue), r.setAttribute("aria-labelledby", _e62);
          }
        } else {
          if (c = this.caption, c || (c = s.querySelector("." + n)), !c) {
            c = document.createElement("div"), c.dataset.fancyboxCaption = "", C(c, n);(this.footer || s).prepend(c);
          }C(s, ue), this.caption = c;
        }c && (c.innerHTML = "", be(l) || "number" == typeof l ? c.innerHTML = l + "" : l instanceof HTMLElement && c.appendChild(l));
      }
    }, {
      key: "checkFocus",
      value: function checkFocus(t) {
        this.focus(t);
      }
    }, {
      key: "focus",
      value: function focus(t) {
        var e;if (this.ignoreFocusChange) return;var i = document.activeElement || null,
            n = (null == t ? void 0 : t.target) || null,
            s = this.container,
            o = null === (e = this.carousel) || void 0 === e ? void 0 : e.viewport;if (!s || !o) return;if (!t && i && s.contains(i)) return;var a = this.getSlide(),
            r = a && a.state === ct.Ready ? a.el : null;if (!r || r.contains(i) || s === i) return;t && t.cancelable && t.preventDefault(), this.ignoreFocusChange = !0;var l = Array.from(s.querySelectorAll(st));var c = [],
            h = null;var _iteratorNormalCompletion67 = true;
        var _didIteratorError67 = false;
        var _iteratorError67 = undefined;

        try {
          for (var _iterator67 = l[Symbol.iterator](), _step67; !(_iteratorNormalCompletion67 = (_step67 = _iterator67.next()).done); _iteratorNormalCompletion67 = true) {
            var _t69 = _step67.value;
            var _e63 = !_t69.offsetParent || !!_t69.closest('[aria-hidden="true"]'),
                _i45 = r && r.contains(_t69),
                _n22 = !o.contains(_t69);if (_t69 === s || (_i45 || _n22) && !_e63) {
              c.push(_t69);var _e64 = _t69.dataset.origTabindex;void 0 !== _e64 && _e64 && (_t69.tabIndex = parseFloat(_e64)), _t69.removeAttribute("data-orig-tabindex"), !_t69.hasAttribute("autoFocus") && h || (h = _t69);
            } else {
              var _e65 = void 0 === _t69.dataset.origTabindex ? _t69.getAttribute("tabindex") || "" : _t69.dataset.origTabindex;_e65 && (_t69.dataset.origTabindex = _e65), _t69.tabIndex = -1;
            }
          }
        } catch (err) {
          _didIteratorError67 = true;
          _iteratorError67 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion67 && _iterator67.return) {
              _iterator67.return();
            }
          } finally {
            if (_didIteratorError67) {
              throw _iteratorError67;
            }
          }
        }

        var d = null;t ? (!n || c.indexOf(n) < 0) && (d = h || s, c.length && (i === Ee ? d = c[0] : this.lastFocus !== s && i !== xe || (d = c[c.length - 1]))) : d = a && "image" === a.type ? s : h || s, d && ot(d), this.lastFocus = document.activeElement, this.ignoreFocusChange = !1;
      }
    }, {
      key: "next",
      value: function next() {
        var t = this.carousel;t && t.pages.length > 1 && t.slideNext();
      }
    }, {
      key: "prev",
      value: function prev() {
        var t = this.carousel;t && t.pages.length > 1 && t.slidePrev();
      }
    }, {
      key: "jumpTo",
      value: function jumpTo() {
        var _carousel;

        this.carousel && (_carousel = this.carousel).slideTo.apply(_carousel, arguments);
      }
    }, {
      key: "isTopmost",
      value: function isTopmost() {
        var t;return (null === (t = Ae.getInstance()) || void 0 === t ? void 0 : t.id) == this.id;
      }
    }, {
      key: "animate",
      value: function animate() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
        var i = arguments[2];
        if (!t || !e) return void (i && i());this.stop(t);var n = function n(s) {
          s.target === t && t.dataset.animationName && (t.removeEventListener("animationend", n), delete t.dataset.animationName, i && i(), P(t, e));
        };t.dataset.animationName = e, t.addEventListener("animationend", n), C(t, e);
      }
    }, {
      key: "stop",
      value: function stop(t) {
        t && t.dispatchEvent(new CustomEvent("animationend", { bubbles: !1, cancelable: !0, currentTarget: t }));
      }
    }, {
      key: "setContent",
      value: function setContent(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
        if (this.isClosing()) return;var n = t.el;if (!n) return;var o = null;if (S(e) ? o = e : (o = s(e + ""), S(o) || (o = document.createElement("div"), o.innerHTML = e + "")), ["img", "picture", "iframe", "video", "audio"].includes(o.nodeName.toLowerCase())) {
          var _t70 = document.createElement("div");_t70.appendChild(o), o = _t70;
        }S(o) && t.filter && !t.error && (o = o.querySelector(t.filter)), o && S(o) ? (C(o, "fancybox__content"), t.id && o.setAttribute("id", t.id), n.classList.add("has-" + (t.error ? "error" : t.type || "unknown")), n.prepend(o), "none" === o.style.display && (o.style.display = ""), "none" === getComputedStyle(o).getPropertyValue("display") && (o.style.display = t.display || this.option("defaultDisplay") || "flex"), t.contentEl = o, i && this.revealContent(t), this.manageCloseBtn(t), this.manageCaption(t)) : this.setError(t, "{{ELEMENT_NOT_FOUND}}");
      }
    }, {
      key: "revealContent",
      value: function revealContent(t, e) {
        var _this45 = this;

        var i = t.el,
            n = t.contentEl;i && n && (this.emit("reveal", t), this.hideLoading(t), t.state = ct.Opening, (e = this.isOpeningSlide(t) ? void 0 === e ? this.optionFor(t, "showClass") : e : "f-fadeIn") ? this.animate(n, e, function () {
          _this45.done(t);
        }) : this.done(t));
      }
    }, {
      key: "done",
      value: function done(t) {
        var _this46 = this;

        this.isClosing() || (t.state = ct.Ready, this.emit("done", t), C(t.el, "is-done"), this.isCurrentSlide(t) && this.option("autoFocus") && queueMicrotask(function () {
          var e;null === (e = t.panzoom) || void 0 === e || e.updateControls(), _this46.option("autoFocus") && _this46.focus();
        }), this.isOpeningSlide(t) && (P(this.container, de), !this.isCompact && this.option("idle") && this.setIdle()));
      }
    }, {
      key: "isCurrentSlide",
      value: function isCurrentSlide(t) {
        var e = this.getSlide();return !(!t || !e) && e.index === t.index;
      }
    }, {
      key: "isOpeningSlide",
      value: function isOpeningSlide(t) {
        var e, i;return null === (null === (e = this.carousel) || void 0 === e ? void 0 : e.prevPage) && t && t.index === (null === (i = this.getSlide()) || void 0 === i ? void 0 : i.index);
      }
    }, {
      key: "showLoading",
      value: function showLoading(t) {
        var _this47 = this;

        t.state = ct.Loading;var e = t.el;if (!e) return;C(e, he), this.emit("loading", t), t.spinnerEl || setTimeout(function () {
          if (!_this47.isClosing() && !t.spinnerEl && t.state === ct.Loading) {
            var _i46 = s(E);C(_i46, "fancybox-spinner"), t.spinnerEl = _i46, e.prepend(_i46), _this47.animate(_i46, "f-fadeIn");
          }
        }, 250);
      }
    }, {
      key: "hideLoading",
      value: function hideLoading(t) {
        var e = t.el;if (!e) return;var i = t.spinnerEl;this.isClosing() ? null == i || i.remove() : (P(e, he), i && this.animate(i, "f-fadeOut", function () {
          i.remove();
        }), t.state === ct.Loading && (this.emit("loaded", t), t.state = ct.Ready));
      }
    }, {
      key: "setError",
      value: function setError(t, e) {
        if (this.isClosing()) return;var i = new Event("error", { bubbles: !0, cancelable: !0 });if (this.emit("error", i, t), i.defaultPrevented) return;t.error = e, this.hideLoading(t), this.clearContent(t);var n = document.createElement("div");n.classList.add("fancybox-error"), n.innerHTML = this.localize(e || "<p>{{ERROR}}</p>"), this.setContent(t, n);
      }
    }, {
      key: "clearContent",
      value: function clearContent(t) {
        if (void 0 === t.state) return;this.emit("clearContent", t), t.contentEl && (t.contentEl.remove(), t.contentEl = void 0);var e = t.el;e && (P(e, "has-error"), P(e, "has-unknown"), P(e, "has-" + (t.type || "unknown"))), t.closeBtnEl && t.closeBtnEl.remove(), t.closeBtnEl = void 0, t.captionEl && t.captionEl.remove(), t.captionEl = void 0, t.spinnerEl && t.spinnerEl.remove(), t.spinnerEl = void 0;
      }
    }, {
      key: "getSlide",
      value: function getSlide() {
        var t;var e = this.carousel;return (null === (t = null == e ? void 0 : e.pages[null == e ? void 0 : e.page]) || void 0 === t ? void 0 : t.slides[0]) || void 0;
      }
    }, {
      key: "close",
      value: function close(t, e) {
        var _this48 = this;

        if (this.isClosing()) return;var i = new Event("shouldClose", { bubbles: !0, cancelable: !0 });if (this.emit("shouldClose", i, t), i.defaultPrevented) return;t && t.cancelable && (t.preventDefault(), t.stopPropagation());var n = function n() {
          _this48.proceedClose(t, e);
        };this.startedFs && we && we.isFullscreen() ? Promise.resolve(we.exit()).then(function () {
          return n();
        }) : n();
      }
    }, {
      key: "clearIdle",
      value: function clearIdle() {
        this.idleTimer && clearTimeout(this.idleTimer), this.idleTimer = null;
      }
    }, {
      key: "setIdle",
      value: function setIdle() {
        var _this49 = this;

        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
        var e = function e() {
          _this49.clearIdle(), _this49.idle = !0, C(_this49.container, "is-idle"), _this49.emit("setIdle");
        };if (this.clearIdle(), !this.isClosing()) if (t) e();else {
          var _t71 = this.option("idle");_t71 && (this.idleTimer = setTimeout(e, _t71));
        }
      }
    }, {
      key: "endIdle",
      value: function endIdle() {
        this.clearIdle(), this.idle && !this.isClosing() && (this.idle = !1, P(this.container, "is-idle"), this.emit("endIdle"));
      }
    }, {
      key: "resetIdle",
      value: function resetIdle() {
        this.endIdle(), this.setIdle();
      }
    }, {
      key: "toggleIdle",
      value: function toggleIdle() {
        this.idle ? this.endIdle() : this.setIdle(!0);
      }
    }, {
      key: "toggleFullscreen",
      value: function toggleFullscreen() {
        var _this50 = this;

        we && (we.isFullscreen() ? we.exit() : we.request().then(function () {
          _this50.startedFs = !0;
        }));
      }
    }, {
      key: "isClosing",
      value: function isClosing() {
        return [lt.Closing, lt.CustomClosing, lt.Destroy].includes(this.state);
      }
    }, {
      key: "proceedClose",
      value: function proceedClose(t, e) {
        var _this51 = this;

        var i, n;this.state = lt.Closing, this.clearIdle(), this.detachEvents();var s = this.container,
            o = this.carousel,
            a = this.getSlide(),
            r = a && this.option("placeFocusBack") ? a.triggerEl || this.option("triggerEl") : null;if (r && (et(r) ? ot(r) : r.focus()), s && (P(s, de), C(s, "is-closing"), s.setAttribute(ae, "true"), this.option("animated") && C(s, le), s.style.pointerEvents = "none"), o) {
          o.clearTransitions(), null === (i = o.panzoom) || void 0 === i || i.destroy(), null === (n = o.plugins.Navigation) || void 0 === n || n.detach();var _iteratorNormalCompletion68 = true;
          var _didIteratorError68 = false;
          var _iteratorError68 = undefined;

          try {
            for (var _iterator68 = o.slides[Symbol.iterator](), _step68; !(_iteratorNormalCompletion68 = (_step68 = _iterator68.next()).done); _iteratorNormalCompletion68 = true) {
              var _t72 = _step68.value;
              _t72.state = ct.Closing, this.hideLoading(_t72);var _e66 = _t72.contentEl;_e66 && this.stop(_e66);var _i47 = null == _t72 ? void 0 : _t72.panzoom;_i47 && (_i47.stop(), _i47.detachEvents(), _i47.detachObserver()), this.isCurrentSlide(_t72) || o.emit("removeSlide", _t72);
            }
          } catch (err) {
            _didIteratorError68 = true;
            _iteratorError68 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion68 && _iterator68.return) {
                _iterator68.return();
              }
            } finally {
              if (_didIteratorError68) {
                throw _iteratorError68;
              }
            }
          }
        }Ce = window.scrollX, Te = window.scrollY, window.addEventListener("scroll", this.onScroll), this.emit("close", t), this.state !== lt.CustomClosing ? (void 0 === e && a && (e = this.optionFor(a, "hideClass")), e && a ? (this.animate(a.contentEl, e, function () {
          o && o.emit("removeSlide", a);
        }), setTimeout(function () {
          _this51.destroy();
        }, 500)) : this.destroy()) : setTimeout(function () {
          _this51.destroy();
        }, 500);
      }
    }, {
      key: "destroy",
      value: function destroy() {
        var t;if (this.state === lt.Destroy) return;window.removeEventListener("scroll", this.onScroll), this.state = lt.Destroy, null === (t = this.carousel) || void 0 === t || t.destroy();var e = this.container;e && e.remove(), Me.delete(this.id);var i = Ae.getInstance();i ? i.focus() : (xe && (xe.remove(), xe = null), Ee && (Ee.remove(), Ee = null), P(document.documentElement, ie), function () {
          if (!it) return;var t = document,
              e = t.body;e.classList.remove(ne), e.style.setProperty(oe, ""), t.documentElement.style.setProperty(se, "");
        }(), this.emit("destroy"));
      }
    }], [{
      key: "bind",
      value: function bind(t, e, i) {
        if (!it) return;var n = void 0,
            s = "",
            o = {};if (void 0 === t ? n = document.body : be(t) ? (n = document.body, s = t, "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && (o = e || {})) : (n = t, be(e) && (s = e), "object" == (typeof i === "undefined" ? "undefined" : _typeof(i)) && (o = i || {})), !n || !S(n)) return;s = s || "[data-fancybox]";var a = Ae.openers.get(n) || new Map();a.set(s, o), Ae.openers.set(n, a), 1 === a.size && n.addEventListener("click", Ae.fromEvent);
      }
    }, {
      key: "unbind",
      value: function unbind(t, e) {
        var i = void 0,
            n = "";if (be(t) ? (i = document.body, n = t) : (i = t, be(e) && (n = e)), !i) return;var s = Ae.openers.get(i);s && n && s.delete(n), n && s || (Ae.openers.delete(i), i.removeEventListener("click", Ae.fromEvent));
      }
    }, {
      key: "destroy",
      value: function destroy() {
        var t = void 0;for (; t = Ae.getInstance();) {
          t.destroy();
        }var _iteratorNormalCompletion69 = true;
        var _didIteratorError69 = false;
        var _iteratorError69 = undefined;

        try {
          for (var _iterator69 = Ae.openers.keys()[Symbol.iterator](), _step69; !(_iteratorNormalCompletion69 = (_step69 = _iterator69.next()).done); _iteratorNormalCompletion69 = true) {
            var _t73 = _step69.value;
            _t73.removeEventListener("click", Ae.fromEvent);
          }
        } catch (err) {
          _didIteratorError69 = true;
          _iteratorError69 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion69 && _iterator69.return) {
              _iterator69.return();
            }
          } finally {
            if (_didIteratorError69) {
              throw _iteratorError69;
            }
          }
        }

        Ae.openers = new Map();
      }
    }, {
      key: "fromEvent",
      value: function fromEvent(t) {
        if (t.defaultPrevented) return;if (t.button && 0 !== t.button) return;if (t.ctrlKey || t.metaKey || t.shiftKey) return;var e = t.composedPath()[0];var i = e.closest("[data-fancybox-trigger]");if (i) {
          var _t74 = i.dataset.fancyboxTrigger || "",
              _n23 = document.querySelectorAll("[data-fancybox=\"" + _t74 + "\"]"),
              _s15 = parseInt(i.dataset.fancyboxIndex || "", 10) || 0;e = _n23[_s15] || e;
        }if (!(e && e instanceof Element)) return;var n = void 0,
            s = void 0,
            o = void 0,
            a = void 0;if ([].concat(_toConsumableArray(Ae.openers)).reverse().find(function (_ref31) {
          var _ref32 = _slicedToArray(_ref31, 2),
              t = _ref32[0],
              i = _ref32[1];

          return !(!t.contains(e) || ![].concat(_toConsumableArray(i)).reverse().find(function (_ref33) {
            var _ref34 = _slicedToArray(_ref33, 2),
                i = _ref34[0],
                r = _ref34[1];

            var l = e.closest(i);return !!l && (n = t, s = i, o = l, a = r, !0);
          }));
        }), !n || !s || !o) return;a = a || {}, t.preventDefault(), e = o;var r = [],
            l = p({}, rt, a);l.event = t, l.triggerEl = e, l.delegate = i;var c = l.groupAll,
            h = l.groupAttr,
            d = h && e ? e.getAttribute("" + h) : "";if ((!e || d || c) && (r = [].slice.call(n.querySelectorAll(s))), e && !c && (r = d ? r.filter(function (t) {
          return t.getAttribute("" + h) === d;
        }) : [e]), !r.length) return;var u = Ae.getInstance();return u && u.options.triggerEl && r.indexOf(u.options.triggerEl) > -1 ? void 0 : (e && (l.startIndex = r.indexOf(e)), Ae.fromNodes(r, l));
      }
    }, {
      key: "fromSelector",
      value: function fromSelector(t, e, i) {
        var n = null,
            s = "",
            o = {};if (be(t) ? (n = document.body, s = t, "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && (o = e || {})) : t instanceof HTMLElement && be(e) && (n = t, s = e, "object" == (typeof i === "undefined" ? "undefined" : _typeof(i)) && (o = i || {})), !n || !s) return !1;var a = Ae.openers.get(n);return !!a && (o = p({}, a.get(s) || {}, o), !!o && Ae.fromNodes(Array.from(n.querySelectorAll(s)), o));
      }
    }, {
      key: "fromNodes",
      value: function fromNodes(t, e) {
        e = p({}, rt, e || {});var i = [];var _iteratorNormalCompletion70 = true;
        var _didIteratorError70 = false;
        var _iteratorError70 = undefined;

        try {
          for (var _iterator70 = t[Symbol.iterator](), _step70; !(_iteratorNormalCompletion70 = (_step70 = _iterator70.next()).done); _iteratorNormalCompletion70 = true) {
            var _n24 = _step70.value;
            var _t75 = _n24.dataset || {},
                _s16 = _t75[ve] || _n24.getAttribute(me) || _n24.getAttribute("currentSrc") || _n24.getAttribute(ve) || void 0;var _o14 = void 0;var _a11 = e.delegate;var _r4 = void 0;_a11 && i.length === e.startIndex && (_o14 = _a11 instanceof HTMLImageElement ? _a11 : _a11.querySelector("img:not([aria-hidden])")), _o14 || (_o14 = _n24 instanceof HTMLImageElement ? _n24 : _n24.querySelector("img:not([aria-hidden])")), _o14 && (_r4 = _o14.currentSrc || _o14[ve] || void 0, !_r4 && _o14.dataset && (_r4 = _o14.dataset.lazySrc || _o14.dataset[ve] || void 0));var _l5 = { src: _s16, triggerEl: _n24, thumbEl: _o14, thumbElSrc: _r4, thumbSrc: _r4 };for (var _e67 in _t75) {
              var _i48 = _t75[_e67] + "";_i48 = "false" !== _i48 && ("true" === _i48 || _i48), _l5[_e67] = _i48;
            }i.push(_l5);
          }
        } catch (err) {
          _didIteratorError70 = true;
          _iteratorError70 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion70 && _iterator70.return) {
              _iterator70.return();
            }
          } finally {
            if (_didIteratorError70) {
              throw _iteratorError70;
            }
          }
        }

        return new Ae(i, e);
      }
    }, {
      key: "getInstance",
      value: function getInstance(t) {
        if (t) return Me.get(t);return Array.from(Me.values()).reverse().find(function (t) {
          return !t.isClosing() && t;
        }) || null;
      }
    }, {
      key: "getSlide",
      value: function getSlide() {
        var t;return (null === (t = Ae.getInstance()) || void 0 === t ? void 0 : t.getSlide()) || null;
      }
    }, {
      key: "show",
      value: function show() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return new Ae(t, e);
      }
    }, {
      key: "next",
      value: function next() {
        var t = Ae.getInstance();t && t.next();
      }
    }, {
      key: "prev",
      value: function prev() {
        var t = Ae.getInstance();t && t.prev();
      }
    }, {
      key: "close",
      value: function close() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;

        for (var _len7 = arguments.length, e = Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
          e[_key7 - 1] = arguments[_key7];
        }

        if (t) {
          var _iteratorNormalCompletion71 = true;
          var _didIteratorError71 = false;
          var _iteratorError71 = undefined;

          try {
            for (var _iterator71 = Me.values()[Symbol.iterator](), _step71; !(_iteratorNormalCompletion71 = (_step71 = _iterator71.next()).done); _iteratorNormalCompletion71 = true) {
              var _t76 = _step71.value;
              _t76.close.apply(_t76, e);
            }
          } catch (err) {
            _didIteratorError71 = true;
            _iteratorError71 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion71 && _iterator71.return) {
                _iterator71.return();
              }
            } finally {
              if (_didIteratorError71) {
                throw _iteratorError71;
              }
            }
          }
        } else {
          var _t77 = Ae.getInstance();_t77 && _t77.close.apply(_t77, e);
        }
      }
    }]);

    return Ae;
  }(m);

  Object.defineProperty(Ae, "version", { enumerable: !0, configurable: !0, writable: !0, value: "5.0.36" }), Object.defineProperty(Ae, "defaults", { enumerable: !0, configurable: !0, writable: !0, value: rt }), Object.defineProperty(Ae, "Plugins", { enumerable: !0, configurable: !0, writable: !0, value: ee }), Object.defineProperty(Ae, "openers", { enumerable: !0, configurable: !0, writable: !0, value: new Map() }), t.Carousel = tt, t.Fancybox = Ae, t.Panzoom = D;
});
//# sourceMappingURL=fancybox.umd.js.map
