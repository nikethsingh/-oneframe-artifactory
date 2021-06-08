"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = function (e) {
  var t = {};

  function n(r) {
    if (t[r]) return t[r].exports;
    var o = t[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
  }

  return n.m = e, n.c = t, n.d = function (e, t, r) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: r
    });
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var r = Object.create(null);
    if (n.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var o in e) {
      n.d(r, o, function (t) {
        return e[t];
      }.bind(null, o));
    }
    return r;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 2);
}([function (e, t) {
  e.exports = require("react");
}, function (e, t) {
  e.exports = require("styled-components");
}, function (e, t, n) {
  "use strict";

  n.r(t), n.d(t, "UIButton", function () {
    return p;
  });
  var r,
      o = n(0),
      u = n.n(o),
      i = n(1),
      c = ["children", "title"];

  function l(e, t) {
    if (null == e) return {};

    var n,
        r,
        o = function (e, t) {
      if (null == e) return {};
      var n,
          r,
          o = {},
          u = Object.keys(e);

      for (r = 0; r < u.length; r++) {
        n = u[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
      }

      return o;
    }(e, t);

    if (Object.getOwnPropertySymbols) {
      var u = Object.getOwnPropertySymbols(e);

      for (r = 0; r < u.length; r++) {
        n = u[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
      }
    }

    return o;
  }

  var f,
      a,
      d = n.n(i)()(function (e) {
    var t = e.children,
        n = e.title,
        r = void 0 === n ? "" : n,
        o = l(e, c);
    return u.a.createElement("button", o, r || t);
  }).withConfig({
    displayName: "Button__StyledButton",
    componentId: "sc-1ued0t1-0"
  })(r || (f = ["\n    border-radius: 5px;\n    background-color: '#a1cdf1';\n    color: #fff;\n    padding: 10px 15px;\n    outline: none;\n    border: none;\n    cursor: pointer;\n    margin: 15px;\n"], a || (a = f.slice(0)), r = Object.freeze(Object.defineProperties(f, {
    raw: {
      value: Object.freeze(a)
    }
  })))),
      p = function p(e) {
    return u.a.createElement(d, e);
  };
}]);