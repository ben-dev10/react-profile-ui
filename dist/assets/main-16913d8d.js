function nd(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const o = Object.getOwnPropertyDescriptor(r, l);
          o &&
            Object.defineProperty(
              e,
              l,
              o.get ? o : { enumerable: !0, get: () => r[l] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function rd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Ts = { exports: {} },
  xl = {},
  Rs = { exports: {} },
  M = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pr = Symbol.for("react.element"),
  ld = Symbol.for("react.portal"),
  od = Symbol.for("react.fragment"),
  id = Symbol.for("react.strict_mode"),
  ud = Symbol.for("react.profiler"),
  sd = Symbol.for("react.provider"),
  ad = Symbol.for("react.context"),
  cd = Symbol.for("react.forward_ref"),
  dd = Symbol.for("react.suspense"),
  fd = Symbol.for("react.memo"),
  pd = Symbol.for("react.lazy"),
  du = Symbol.iterator;
function md(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (du && e[du]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Is = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  zs = Object.assign,
  Ls = {};
function kn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ls),
    (this.updater = n || Is);
}
kn.prototype.isReactComponent = {};
kn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
kn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ms() {}
Ms.prototype = kn.prototype;
function fi(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ls),
    (this.updater = n || Is);
}
var pi = (fi.prototype = new Ms());
pi.constructor = fi;
zs(pi, kn.prototype);
pi.isPureReactComponent = !0;
var fu = Array.isArray,
  js = Object.prototype.hasOwnProperty,
  mi = { current: null },
  Os = { key: !0, ref: !0, __self: !0, __source: !0 };
function Fs(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      js.call(t, r) && !Os.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: pr,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: mi.current,
  };
}
function hd(e, t) {
  return {
    $$typeof: pr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function hi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === pr;
}
function vd(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var pu = /\/+/g;
function Bl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? vd("" + e.key)
    : t.toString(36);
}
function Dr(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case pr:
          case ld:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + Bl(i, 0) : r),
      fu(l)
        ? ((n = ""),
          e != null && (n = e.replace(pu, "$&/") + "/"),
          Dr(l, t, n, "", function (a) {
            return a;
          }))
        : l != null &&
          (hi(l) &&
            (l = hd(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(pu, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), fu(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + Bl(o, u);
      i += Dr(o, t, n, s, l);
    }
  else if (((s = md(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + Bl(o, u++)), (i += Dr(o, t, n, s, l));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function wr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Dr(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function gd(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var pe = { current: null },
  Ar = { transition: null },
  yd = {
    ReactCurrentDispatcher: pe,
    ReactCurrentBatchConfig: Ar,
    ReactCurrentOwner: mi,
  };
M.Children = {
  map: wr,
  forEach: function (e, t, n) {
    wr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      wr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      wr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!hi(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
M.Component = kn;
M.Fragment = od;
M.Profiler = ud;
M.PureComponent = fi;
M.StrictMode = id;
M.Suspense = dd;
M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yd;
M.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = zs({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = mi.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      js.call(t, s) &&
        !Os.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var a = 0; a < s; a++) u[a] = arguments[a + 2];
    r.children = u;
  }
  return { $$typeof: pr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
M.createContext = function (e) {
  return (
    (e = {
      $$typeof: ad,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: sd, _context: e }),
    (e.Consumer = e)
  );
};
M.createElement = Fs;
M.createFactory = function (e) {
  var t = Fs.bind(null, e);
  return (t.type = e), t;
};
M.createRef = function () {
  return { current: null };
};
M.forwardRef = function (e) {
  return { $$typeof: cd, render: e };
};
M.isValidElement = hi;
M.lazy = function (e) {
  return { $$typeof: pd, _payload: { _status: -1, _result: e }, _init: gd };
};
M.memo = function (e, t) {
  return { $$typeof: fd, type: e, compare: t === void 0 ? null : t };
};
M.startTransition = function (e) {
  var t = Ar.transition;
  Ar.transition = {};
  try {
    e();
  } finally {
    Ar.transition = t;
  }
};
M.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
M.useCallback = function (e, t) {
  return pe.current.useCallback(e, t);
};
M.useContext = function (e) {
  return pe.current.useContext(e);
};
M.useDebugValue = function () {};
M.useDeferredValue = function (e) {
  return pe.current.useDeferredValue(e);
};
M.useEffect = function (e, t) {
  return pe.current.useEffect(e, t);
};
M.useId = function () {
  return pe.current.useId();
};
M.useImperativeHandle = function (e, t, n) {
  return pe.current.useImperativeHandle(e, t, n);
};
M.useInsertionEffect = function (e, t) {
  return pe.current.useInsertionEffect(e, t);
};
M.useLayoutEffect = function (e, t) {
  return pe.current.useLayoutEffect(e, t);
};
M.useMemo = function (e, t) {
  return pe.current.useMemo(e, t);
};
M.useReducer = function (e, t, n) {
  return pe.current.useReducer(e, t, n);
};
M.useRef = function (e) {
  return pe.current.useRef(e);
};
M.useState = function (e) {
  return pe.current.useState(e);
};
M.useSyncExternalStore = function (e, t, n) {
  return pe.current.useSyncExternalStore(e, t, n);
};
M.useTransition = function () {
  return pe.current.useTransition();
};
M.version = "18.2.0";
Rs.exports = M;
var k = Rs.exports;
const ee = rd(k),
  Sd = nd({ __proto__: null, default: ee }, [k]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wd = k,
  kd = Symbol.for("react.element"),
  xd = Symbol.for("react.fragment"),
  Ed = Object.prototype.hasOwnProperty,
  Cd = wd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  $d = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ds(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) Ed.call(t, r) && !$d.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: kd,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Cd.current,
  };
}
xl.Fragment = xd;
xl.jsx = Ds;
xl.jsxs = Ds;
Ts.exports = xl;
var I = Ts.exports,
  ho = {},
  As = { exports: {} },
  _e = {},
  Bs = { exports: {} },
  Us = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t($, z) {
    var L = $.length;
    $.push(z);
    e: for (; 0 < L; ) {
      var Y = (L - 1) >>> 1,
        b = $[Y];
      if (0 < l(b, z)) ($[Y] = z), ($[L] = b), (L = Y);
      else break e;
    }
  }
  function n($) {
    return $.length === 0 ? null : $[0];
  }
  function r($) {
    if ($.length === 0) return null;
    var z = $[0],
      L = $.pop();
    if (L !== z) {
      $[0] = L;
      e: for (var Y = 0, b = $.length, yr = b >>> 1; Y < yr; ) {
        var Pt = 2 * (Y + 1) - 1,
          Al = $[Pt],
          Tt = Pt + 1,
          Sr = $[Tt];
        if (0 > l(Al, L))
          Tt < b && 0 > l(Sr, Al)
            ? (($[Y] = Sr), ($[Tt] = L), (Y = Tt))
            : (($[Y] = Al), ($[Pt] = L), (Y = Pt));
        else if (Tt < b && 0 > l(Sr, L)) ($[Y] = Sr), ($[Tt] = L), (Y = Tt);
        else break e;
      }
    }
    return z;
  }
  function l($, z) {
    var L = $.sortIndex - z.sortIndex;
    return L !== 0 ? L : $.id - z.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      u = i.now();
    e.unstable_now = function () {
      return i.now() - u;
    };
  }
  var s = [],
    a = [],
    m = 1,
    p = null,
    f = 3,
    v = !1,
    g = !1,
    S = !1,
    T = typeof setTimeout == "function" ? setTimeout : null,
    d = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h($) {
    for (var z = n(a); z !== null; ) {
      if (z.callback === null) r(a);
      else if (z.startTime <= $)
        r(a), (z.sortIndex = z.expirationTime), t(s, z);
      else break;
      z = n(a);
    }
  }
  function y($) {
    if (((S = !1), h($), !g))
      if (n(s) !== null) (g = !0), _n(C);
      else {
        var z = n(a);
        z !== null && Nt(y, z.startTime - $);
      }
  }
  function C($, z) {
    (g = !1), S && ((S = !1), d(N), (N = -1)), (v = !0);
    var L = f;
    try {
      for (
        h(z), p = n(s);
        p !== null && (!(p.expirationTime > z) || ($ && !V()));

      ) {
        var Y = p.callback;
        if (typeof Y == "function") {
          (p.callback = null), (f = p.priorityLevel);
          var b = Y(p.expirationTime <= z);
          (z = e.unstable_now()),
            typeof b == "function" ? (p.callback = b) : p === n(s) && r(s),
            h(z);
        } else r(s);
        p = n(s);
      }
      if (p !== null) var yr = !0;
      else {
        var Pt = n(a);
        Pt !== null && Nt(y, Pt.startTime - z), (yr = !1);
      }
      return yr;
    } finally {
      (p = null), (f = L), (v = !1);
    }
  }
  var E = !1,
    x = null,
    N = -1,
    j = 5,
    R = -1;
  function V() {
    return !(e.unstable_now() - R < j);
  }
  function he() {
    if (x !== null) {
      var $ = e.unstable_now();
      R = $;
      var z = !0;
      try {
        z = x(!0, $);
      } finally {
        z ? je() : ((E = !1), (x = null));
      }
    } else E = !1;
  }
  var je;
  if (typeof c == "function")
    je = function () {
      c(he);
    };
  else if (typeof MessageChannel < "u") {
    var Ye = new MessageChannel(),
      Pe = Ye.port2;
    (Ye.port1.onmessage = he),
      (je = function () {
        Pe.postMessage(null);
      });
  } else
    je = function () {
      T(he, 0);
    };
  function _n($) {
    (x = $), E || ((E = !0), je());
  }
  function Nt($, z) {
    N = T(function () {
      $(e.unstable_now());
    }, z);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function ($) {
      $.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      g || v || ((g = !0), _n(C));
    }),
    (e.unstable_forceFrameRate = function ($) {
      0 > $ || 125 < $
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (j = 0 < $ ? Math.floor(1e3 / $) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function ($) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var z = 3;
          break;
        default:
          z = f;
      }
      var L = f;
      f = z;
      try {
        return $();
      } finally {
        f = L;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function ($, z) {
      switch ($) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          $ = 3;
      }
      var L = f;
      f = $;
      try {
        return z();
      } finally {
        f = L;
      }
    }),
    (e.unstable_scheduleCallback = function ($, z, L) {
      var Y = e.unstable_now();
      switch (
        (typeof L == "object" && L !== null
          ? ((L = L.delay), (L = typeof L == "number" && 0 < L ? Y + L : Y))
          : (L = Y),
        $)
      ) {
        case 1:
          var b = -1;
          break;
        case 2:
          b = 250;
          break;
        case 5:
          b = 1073741823;
          break;
        case 4:
          b = 1e4;
          break;
        default:
          b = 5e3;
      }
      return (
        (b = L + b),
        ($ = {
          id: m++,
          callback: z,
          priorityLevel: $,
          startTime: L,
          expirationTime: b,
          sortIndex: -1,
        }),
        L > Y
          ? (($.sortIndex = L),
            t(a, $),
            n(s) === null &&
              $ === n(a) &&
              (S ? (d(N), (N = -1)) : (S = !0), Nt(y, L - Y)))
          : (($.sortIndex = b), t(s, $), g || v || ((g = !0), _n(C))),
        $
      );
    }),
    (e.unstable_shouldYield = V),
    (e.unstable_wrapCallback = function ($) {
      var z = f;
      return function () {
        var L = f;
        f = z;
        try {
          return $.apply(this, arguments);
        } finally {
          f = L;
        }
      };
    });
})(Us);
Bs.exports = Us;
var _d = Bs.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ws = k,
  $e = _d;
function w(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Vs = new Set(),
  Zn = {};
function Ht(e, t) {
  mn(e, t), mn(e + "Capture", t);
}
function mn(e, t) {
  for (Zn[e] = t, e = 0; e < t.length; e++) Vs.add(t[e]);
}
var tt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  vo = Object.prototype.hasOwnProperty,
  Nd =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  mu = {},
  hu = {};
function Pd(e) {
  return vo.call(hu, e)
    ? !0
    : vo.call(mu, e)
    ? !1
    : Nd.test(e)
    ? (hu[e] = !0)
    : ((mu[e] = !0), !1);
}
function Td(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Rd(e, t, n, r) {
  if (t === null || typeof t > "u" || Td(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function me(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var oe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    oe[e] = new me(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  oe[t] = new me(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  oe[e] = new me(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  oe[e] = new me(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    oe[e] = new me(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  oe[e] = new me(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  oe[e] = new me(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  oe[e] = new me(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  oe[e] = new me(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var vi = /[\-:]([a-z])/g;
function gi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(vi, gi);
    oe[t] = new me(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(vi, gi);
    oe[t] = new me(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(vi, gi);
  oe[t] = new me(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  oe[e] = new me(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
oe.xlinkHref = new me(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  oe[e] = new me(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function yi(e, t, n, r) {
  var l = oe.hasOwnProperty(t) ? oe[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Rd(t, n, l, r) && (n = null),
    r || l === null
      ? Pd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var it = Ws.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  kr = Symbol.for("react.element"),
  Yt = Symbol.for("react.portal"),
  Xt = Symbol.for("react.fragment"),
  Si = Symbol.for("react.strict_mode"),
  go = Symbol.for("react.profiler"),
  Hs = Symbol.for("react.provider"),
  Qs = Symbol.for("react.context"),
  wi = Symbol.for("react.forward_ref"),
  yo = Symbol.for("react.suspense"),
  So = Symbol.for("react.suspense_list"),
  ki = Symbol.for("react.memo"),
  st = Symbol.for("react.lazy"),
  Ks = Symbol.for("react.offscreen"),
  vu = Symbol.iterator;
function Nn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (vu && e[vu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var K = Object.assign,
  Ul;
function On(e) {
  if (Ul === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ul = (t && t[1]) || "";
    }
  return (
    `
` +
    Ul +
    e
  );
}
var Wl = !1;
function Vl(e, t) {
  if (!e || Wl) return "";
  Wl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == "string") {
      for (
        var l = a.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          u = o.length - 1;
        1 <= i && 0 <= u && l[i] !== o[u];

      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || l[i] !== o[u])) {
                var s =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    (Wl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? On(e) : "";
}
function Id(e) {
  switch (e.tag) {
    case 5:
      return On(e.type);
    case 16:
      return On("Lazy");
    case 13:
      return On("Suspense");
    case 19:
      return On("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Vl(e.type, !1)), e;
    case 11:
      return (e = Vl(e.type.render, !1)), e;
    case 1:
      return (e = Vl(e.type, !0)), e;
    default:
      return "";
  }
}
function wo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Xt:
      return "Fragment";
    case Yt:
      return "Portal";
    case go:
      return "Profiler";
    case Si:
      return "StrictMode";
    case yo:
      return "Suspense";
    case So:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Qs:
        return (e.displayName || "Context") + ".Consumer";
      case Hs:
        return (e._context.displayName || "Context") + ".Provider";
      case wi:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case ki:
        return (
          (t = e.displayName || null), t !== null ? t : wo(e.type) || "Memo"
        );
      case st:
        (t = e._payload), (e = e._init);
        try {
          return wo(e(t));
        } catch {}
    }
  return null;
}
function zd(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return wo(t);
    case 8:
      return t === Si ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function xt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Gs(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Ld(e) {
  var t = Gs(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function xr(e) {
  e._valueTracker || (e._valueTracker = Ld(e));
}
function Ys(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Gs(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Zr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ko(e, t) {
  var n = t.checked;
  return K({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function gu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = xt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Xs(e, t) {
  (t = t.checked), t != null && yi(e, "checked", t, !1);
}
function xo(e, t) {
  Xs(e, t);
  var n = xt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Eo(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Eo(e, t.type, xt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function yu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Eo(e, t, n) {
  (t !== "number" || Zr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Fn = Array.isArray;
function sn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + xt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Co(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(w(91));
  return K({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Su(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(w(92));
      if (Fn(n)) {
        if (1 < n.length) throw Error(w(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: xt(n) };
}
function Zs(e, t) {
  var n = xt(t.value),
    r = xt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function wu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Js(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function $o(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Js(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Er,
  qs = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Er = Er || document.createElement("div"),
          Er.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Er.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Jn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Un = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Md = ["Webkit", "ms", "Moz", "O"];
Object.keys(Un).forEach(function (e) {
  Md.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Un[t] = Un[e]);
  });
});
function bs(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Un.hasOwnProperty(e) && Un[e])
    ? ("" + t).trim()
    : t + "px";
}
function ea(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = bs(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var jd = K(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function _o(e, t) {
  if (t) {
    if (jd[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(w(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(w(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(w(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(w(62));
  }
}
function No(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Po = null;
function xi(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var To = null,
  an = null,
  cn = null;
function ku(e) {
  if ((e = vr(e))) {
    if (typeof To != "function") throw Error(w(280));
    var t = e.stateNode;
    t && ((t = Nl(t)), To(e.stateNode, e.type, t));
  }
}
function ta(e) {
  an ? (cn ? cn.push(e) : (cn = [e])) : (an = e);
}
function na() {
  if (an) {
    var e = an,
      t = cn;
    if (((cn = an = null), ku(e), t)) for (e = 0; e < t.length; e++) ku(t[e]);
  }
}
function ra(e, t) {
  return e(t);
}
function la() {}
var Hl = !1;
function oa(e, t, n) {
  if (Hl) return e(t, n);
  Hl = !0;
  try {
    return ra(e, t, n);
  } finally {
    (Hl = !1), (an !== null || cn !== null) && (la(), na());
  }
}
function qn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Nl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(w(231, t, typeof n));
  return n;
}
var Ro = !1;
if (tt)
  try {
    var Pn = {};
    Object.defineProperty(Pn, "passive", {
      get: function () {
        Ro = !0;
      },
    }),
      window.addEventListener("test", Pn, Pn),
      window.removeEventListener("test", Pn, Pn);
  } catch {
    Ro = !1;
  }
function Od(e, t, n, r, l, o, i, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (m) {
    this.onError(m);
  }
}
var Wn = !1,
  Jr = null,
  qr = !1,
  Io = null,
  Fd = {
    onError: function (e) {
      (Wn = !0), (Jr = e);
    },
  };
function Dd(e, t, n, r, l, o, i, u, s) {
  (Wn = !1), (Jr = null), Od.apply(Fd, arguments);
}
function Ad(e, t, n, r, l, o, i, u, s) {
  if ((Dd.apply(this, arguments), Wn)) {
    if (Wn) {
      var a = Jr;
      (Wn = !1), (Jr = null);
    } else throw Error(w(198));
    qr || ((qr = !0), (Io = a));
  }
}
function Qt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function ia(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function xu(e) {
  if (Qt(e) !== e) throw Error(w(188));
}
function Bd(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Qt(e)), t === null)) throw Error(w(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return xu(l), e;
        if (o === r) return xu(l), t;
        o = o.sibling;
      }
      throw Error(w(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (u === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (u === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(w(189));
      }
    }
    if (n.alternate !== r) throw Error(w(190));
  }
  if (n.tag !== 3) throw Error(w(188));
  return n.stateNode.current === n ? e : t;
}
function ua(e) {
  return (e = Bd(e)), e !== null ? sa(e) : null;
}
function sa(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = sa(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var aa = $e.unstable_scheduleCallback,
  Eu = $e.unstable_cancelCallback,
  Ud = $e.unstable_shouldYield,
  Wd = $e.unstable_requestPaint,
  X = $e.unstable_now,
  Vd = $e.unstable_getCurrentPriorityLevel,
  Ei = $e.unstable_ImmediatePriority,
  ca = $e.unstable_UserBlockingPriority,
  br = $e.unstable_NormalPriority,
  Hd = $e.unstable_LowPriority,
  da = $e.unstable_IdlePriority,
  El = null,
  Ke = null;
function Qd(e) {
  if (Ke && typeof Ke.onCommitFiberRoot == "function")
    try {
      Ke.onCommitFiberRoot(El, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Be = Math.clz32 ? Math.clz32 : Yd,
  Kd = Math.log,
  Gd = Math.LN2;
function Yd(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Kd(e) / Gd) | 0)) | 0;
}
var Cr = 64,
  $r = 4194304;
function Dn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function el(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? (r = Dn(u)) : ((o &= i), o !== 0 && (r = Dn(o)));
  } else (i = n & ~l), i !== 0 ? (r = Dn(i)) : o !== 0 && (r = Dn(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Be(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Xd(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Zd(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - Be(o),
      u = 1 << i,
      s = l[i];
    s === -1
      ? (!(u & n) || u & r) && (l[i] = Xd(u, t))
      : s <= t && (e.expiredLanes |= u),
      (o &= ~u);
  }
}
function zo(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function fa() {
  var e = Cr;
  return (Cr <<= 1), !(Cr & 4194240) && (Cr = 64), e;
}
function Ql(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function mr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Be(t)),
    (e[t] = n);
}
function Jd(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Be(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function Ci(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Be(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var F = 0;
function pa(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var ma,
  $i,
  ha,
  va,
  ga,
  Lo = !1,
  _r = [],
  mt = null,
  ht = null,
  vt = null,
  bn = new Map(),
  er = new Map(),
  ct = [],
  qd =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Cu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      mt = null;
      break;
    case "dragenter":
    case "dragleave":
      ht = null;
      break;
    case "mouseover":
    case "mouseout":
      vt = null;
      break;
    case "pointerover":
    case "pointerout":
      bn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      er.delete(t.pointerId);
  }
}
function Tn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = vr(t)), t !== null && $i(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function bd(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (mt = Tn(mt, e, t, n, r, l)), !0;
    case "dragenter":
      return (ht = Tn(ht, e, t, n, r, l)), !0;
    case "mouseover":
      return (vt = Tn(vt, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return bn.set(o, Tn(bn.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), er.set(o, Tn(er.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function ya(e) {
  var t = zt(e.target);
  if (t !== null) {
    var n = Qt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = ia(n)), t !== null)) {
          (e.blockedOn = t),
            ga(e.priority, function () {
              ha(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Br(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Mo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Po = r), n.target.dispatchEvent(r), (Po = null);
    } else return (t = vr(n)), t !== null && $i(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function $u(e, t, n) {
  Br(e) && n.delete(t);
}
function ef() {
  (Lo = !1),
    mt !== null && Br(mt) && (mt = null),
    ht !== null && Br(ht) && (ht = null),
    vt !== null && Br(vt) && (vt = null),
    bn.forEach($u),
    er.forEach($u);
}
function Rn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Lo ||
      ((Lo = !0),
      $e.unstable_scheduleCallback($e.unstable_NormalPriority, ef)));
}
function tr(e) {
  function t(l) {
    return Rn(l, e);
  }
  if (0 < _r.length) {
    Rn(_r[0], e);
    for (var n = 1; n < _r.length; n++) {
      var r = _r[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    mt !== null && Rn(mt, e),
      ht !== null && Rn(ht, e),
      vt !== null && Rn(vt, e),
      bn.forEach(t),
      er.forEach(t),
      n = 0;
    n < ct.length;
    n++
  )
    (r = ct[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < ct.length && ((n = ct[0]), n.blockedOn === null); )
    ya(n), n.blockedOn === null && ct.shift();
}
var dn = it.ReactCurrentBatchConfig,
  tl = !0;
function tf(e, t, n, r) {
  var l = F,
    o = dn.transition;
  dn.transition = null;
  try {
    (F = 1), _i(e, t, n, r);
  } finally {
    (F = l), (dn.transition = o);
  }
}
function nf(e, t, n, r) {
  var l = F,
    o = dn.transition;
  dn.transition = null;
  try {
    (F = 4), _i(e, t, n, r);
  } finally {
    (F = l), (dn.transition = o);
  }
}
function _i(e, t, n, r) {
  if (tl) {
    var l = Mo(e, t, n, r);
    if (l === null) to(e, t, r, nl, n), Cu(e, r);
    else if (bd(l, e, t, n, r)) r.stopPropagation();
    else if ((Cu(e, r), t & 4 && -1 < qd.indexOf(e))) {
      for (; l !== null; ) {
        var o = vr(l);
        if (
          (o !== null && ma(o),
          (o = Mo(e, t, n, r)),
          o === null && to(e, t, r, nl, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else to(e, t, r, null, n);
  }
}
var nl = null;
function Mo(e, t, n, r) {
  if (((nl = null), (e = xi(r)), (e = zt(e)), e !== null))
    if (((t = Qt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = ia(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (nl = e), null;
}
function Sa(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Vd()) {
        case Ei:
          return 1;
        case ca:
          return 4;
        case br:
        case Hd:
          return 16;
        case da:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var ft = null,
  Ni = null,
  Ur = null;
function wa() {
  if (Ur) return Ur;
  var e,
    t = Ni,
    n = t.length,
    r,
    l = "value" in ft ? ft.value : ft.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (Ur = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Wr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Nr() {
  return !0;
}
function _u() {
  return !1;
}
function Ne(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Nr
        : _u),
      (this.isPropagationStopped = _u),
      this
    );
  }
  return (
    K(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Nr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Nr));
      },
      persist: function () {},
      isPersistent: Nr,
    }),
    t
  );
}
var xn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Pi = Ne(xn),
  hr = K({}, xn, { view: 0, detail: 0 }),
  rf = Ne(hr),
  Kl,
  Gl,
  In,
  Cl = K({}, hr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ti,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== In &&
            (In && e.type === "mousemove"
              ? ((Kl = e.screenX - In.screenX), (Gl = e.screenY - In.screenY))
              : (Gl = Kl = 0),
            (In = e)),
          Kl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Gl;
    },
  }),
  Nu = Ne(Cl),
  lf = K({}, Cl, { dataTransfer: 0 }),
  of = Ne(lf),
  uf = K({}, hr, { relatedTarget: 0 }),
  Yl = Ne(uf),
  sf = K({}, xn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  af = Ne(sf),
  cf = K({}, xn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  df = Ne(cf),
  ff = K({}, xn, { data: 0 }),
  Pu = Ne(ff),
  pf = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  mf = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  hf = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function vf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = hf[e]) ? !!t[e] : !1;
}
function Ti() {
  return vf;
}
var gf = K({}, hr, {
    key: function (e) {
      if (e.key) {
        var t = pf[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Wr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? mf[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ti,
    charCode: function (e) {
      return e.type === "keypress" ? Wr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Wr(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  yf = Ne(gf),
  Sf = K({}, Cl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Tu = Ne(Sf),
  wf = K({}, hr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ti,
  }),
  kf = Ne(wf),
  xf = K({}, xn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ef = Ne(xf),
  Cf = K({}, Cl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  $f = Ne(Cf),
  _f = [9, 13, 27, 32],
  Ri = tt && "CompositionEvent" in window,
  Vn = null;
tt && "documentMode" in document && (Vn = document.documentMode);
var Nf = tt && "TextEvent" in window && !Vn,
  ka = tt && (!Ri || (Vn && 8 < Vn && 11 >= Vn)),
  Ru = String.fromCharCode(32),
  Iu = !1;
function xa(e, t) {
  switch (e) {
    case "keyup":
      return _f.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Ea(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Zt = !1;
function Pf(e, t) {
  switch (e) {
    case "compositionend":
      return Ea(t);
    case "keypress":
      return t.which !== 32 ? null : ((Iu = !0), Ru);
    case "textInput":
      return (e = t.data), e === Ru && Iu ? null : e;
    default:
      return null;
  }
}
function Tf(e, t) {
  if (Zt)
    return e === "compositionend" || (!Ri && xa(e, t))
      ? ((e = wa()), (Ur = Ni = ft = null), (Zt = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return ka && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Rf = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function zu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Rf[e.type] : t === "textarea";
}
function Ca(e, t, n, r) {
  ta(r),
    (t = rl(t, "onChange")),
    0 < t.length &&
      ((n = new Pi("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Hn = null,
  nr = null;
function If(e) {
  ja(e, 0);
}
function $l(e) {
  var t = bt(e);
  if (Ys(t)) return e;
}
function zf(e, t) {
  if (e === "change") return t;
}
var $a = !1;
if (tt) {
  var Xl;
  if (tt) {
    var Zl = "oninput" in document;
    if (!Zl) {
      var Lu = document.createElement("div");
      Lu.setAttribute("oninput", "return;"),
        (Zl = typeof Lu.oninput == "function");
    }
    Xl = Zl;
  } else Xl = !1;
  $a = Xl && (!document.documentMode || 9 < document.documentMode);
}
function Mu() {
  Hn && (Hn.detachEvent("onpropertychange", _a), (nr = Hn = null));
}
function _a(e) {
  if (e.propertyName === "value" && $l(nr)) {
    var t = [];
    Ca(t, nr, e, xi(e)), oa(If, t);
  }
}
function Lf(e, t, n) {
  e === "focusin"
    ? (Mu(), (Hn = t), (nr = n), Hn.attachEvent("onpropertychange", _a))
    : e === "focusout" && Mu();
}
function Mf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return $l(nr);
}
function jf(e, t) {
  if (e === "click") return $l(t);
}
function Of(e, t) {
  if (e === "input" || e === "change") return $l(t);
}
function Ff(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var We = typeof Object.is == "function" ? Object.is : Ff;
function rr(e, t) {
  if (We(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!vo.call(t, l) || !We(e[l], t[l])) return !1;
  }
  return !0;
}
function ju(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ou(e, t) {
  var n = ju(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = ju(n);
  }
}
function Na(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Na(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Pa() {
  for (var e = window, t = Zr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Zr(e.document);
  }
  return t;
}
function Ii(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Df(e) {
  var t = Pa(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Na(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ii(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = Ou(n, o));
        var i = Ou(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Af = tt && "documentMode" in document && 11 >= document.documentMode,
  Jt = null,
  jo = null,
  Qn = null,
  Oo = !1;
function Fu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Oo ||
    Jt == null ||
    Jt !== Zr(r) ||
    ((r = Jt),
    "selectionStart" in r && Ii(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Qn && rr(Qn, r)) ||
      ((Qn = r),
      (r = rl(jo, "onSelect")),
      0 < r.length &&
        ((t = new Pi("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Jt))));
}
function Pr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var qt = {
    animationend: Pr("Animation", "AnimationEnd"),
    animationiteration: Pr("Animation", "AnimationIteration"),
    animationstart: Pr("Animation", "AnimationStart"),
    transitionend: Pr("Transition", "TransitionEnd"),
  },
  Jl = {},
  Ta = {};
tt &&
  ((Ta = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete qt.animationend.animation,
    delete qt.animationiteration.animation,
    delete qt.animationstart.animation),
  "TransitionEvent" in window || delete qt.transitionend.transition);
function _l(e) {
  if (Jl[e]) return Jl[e];
  if (!qt[e]) return e;
  var t = qt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ta) return (Jl[e] = t[n]);
  return e;
}
var Ra = _l("animationend"),
  Ia = _l("animationiteration"),
  za = _l("animationstart"),
  La = _l("transitionend"),
  Ma = new Map(),
  Du =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Ct(e, t) {
  Ma.set(e, t), Ht(t, [e]);
}
for (var ql = 0; ql < Du.length; ql++) {
  var bl = Du[ql],
    Bf = bl.toLowerCase(),
    Uf = bl[0].toUpperCase() + bl.slice(1);
  Ct(Bf, "on" + Uf);
}
Ct(Ra, "onAnimationEnd");
Ct(Ia, "onAnimationIteration");
Ct(za, "onAnimationStart");
Ct("dblclick", "onDoubleClick");
Ct("focusin", "onFocus");
Ct("focusout", "onBlur");
Ct(La, "onTransitionEnd");
mn("onMouseEnter", ["mouseout", "mouseover"]);
mn("onMouseLeave", ["mouseout", "mouseover"]);
mn("onPointerEnter", ["pointerout", "pointerover"]);
mn("onPointerLeave", ["pointerout", "pointerover"]);
Ht(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Ht(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Ht("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ht(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Ht(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Ht(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var An =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Wf = new Set("cancel close invalid load scroll toggle".split(" ").concat(An));
function Au(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Ad(r, t, void 0, e), (e.currentTarget = null);
}
function ja(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            s = u.instance,
            a = u.currentTarget;
          if (((u = u.listener), s !== o && l.isPropagationStopped())) break e;
          Au(l, u, a), (o = s);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (s = u.instance),
            (a = u.currentTarget),
            (u = u.listener),
            s !== o && l.isPropagationStopped())
          )
            break e;
          Au(l, u, a), (o = s);
        }
    }
  }
  if (qr) throw ((e = Io), (qr = !1), (Io = null), e);
}
function B(e, t) {
  var n = t[Uo];
  n === void 0 && (n = t[Uo] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Oa(t, e, 2, !1), n.add(r));
}
function eo(e, t, n) {
  var r = 0;
  t && (r |= 4), Oa(n, e, r, t);
}
var Tr = "_reactListening" + Math.random().toString(36).slice(2);
function lr(e) {
  if (!e[Tr]) {
    (e[Tr] = !0),
      Vs.forEach(function (n) {
        n !== "selectionchange" && (Wf.has(n) || eo(n, !1, e), eo(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Tr] || ((t[Tr] = !0), eo("selectionchange", !1, t));
  }
}
function Oa(e, t, n, r) {
  switch (Sa(t)) {
    case 1:
      var l = tf;
      break;
    case 4:
      l = nf;
      break;
    default:
      l = _i;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Ro ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function to(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var s = i.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = i.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = zt(u)), i === null)) return;
          if (((s = i.tag), s === 5 || s === 6)) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  oa(function () {
    var a = o,
      m = xi(n),
      p = [];
    e: {
      var f = Ma.get(e);
      if (f !== void 0) {
        var v = Pi,
          g = e;
        switch (e) {
          case "keypress":
            if (Wr(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = yf;
            break;
          case "focusin":
            (g = "focus"), (v = Yl);
            break;
          case "focusout":
            (g = "blur"), (v = Yl);
            break;
          case "beforeblur":
          case "afterblur":
            v = Yl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = Nu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = of;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = kf;
            break;
          case Ra:
          case Ia:
          case za:
            v = af;
            break;
          case La:
            v = Ef;
            break;
          case "scroll":
            v = rf;
            break;
          case "wheel":
            v = $f;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = df;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Tu;
        }
        var S = (t & 4) !== 0,
          T = !S && e === "scroll",
          d = S ? (f !== null ? f + "Capture" : null) : f;
        S = [];
        for (var c = a, h; c !== null; ) {
          h = c;
          var y = h.stateNode;
          if (
            (h.tag === 5 &&
              y !== null &&
              ((h = y),
              d !== null && ((y = qn(c, d)), y != null && S.push(or(c, y, h)))),
            T)
          )
            break;
          c = c.return;
        }
        0 < S.length &&
          ((f = new v(f, g, null, n, m)), p.push({ event: f, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          f &&
            n !== Po &&
            (g = n.relatedTarget || n.fromElement) &&
            (zt(g) || g[nt]))
        )
          break e;
        if (
          (v || f) &&
          ((f =
            m.window === m
              ? m
              : (f = m.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          v
            ? ((g = n.relatedTarget || n.toElement),
              (v = a),
              (g = g ? zt(g) : null),
              g !== null &&
                ((T = Qt(g)), g !== T || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((v = null), (g = a)),
          v !== g)
        ) {
          if (
            ((S = Nu),
            (y = "onMouseLeave"),
            (d = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((S = Tu),
              (y = "onPointerLeave"),
              (d = "onPointerEnter"),
              (c = "pointer")),
            (T = v == null ? f : bt(v)),
            (h = g == null ? f : bt(g)),
            (f = new S(y, c + "leave", v, n, m)),
            (f.target = T),
            (f.relatedTarget = h),
            (y = null),
            zt(m) === a &&
              ((S = new S(d, c + "enter", g, n, m)),
              (S.target = h),
              (S.relatedTarget = T),
              (y = S)),
            (T = y),
            v && g)
          )
            t: {
              for (S = v, d = g, c = 0, h = S; h; h = Kt(h)) c++;
              for (h = 0, y = d; y; y = Kt(y)) h++;
              for (; 0 < c - h; ) (S = Kt(S)), c--;
              for (; 0 < h - c; ) (d = Kt(d)), h--;
              for (; c--; ) {
                if (S === d || (d !== null && S === d.alternate)) break t;
                (S = Kt(S)), (d = Kt(d));
              }
              S = null;
            }
          else S = null;
          v !== null && Bu(p, f, v, S, !1),
            g !== null && T !== null && Bu(p, T, g, S, !0);
        }
      }
      e: {
        if (
          ((f = a ? bt(a) : window),
          (v = f.nodeName && f.nodeName.toLowerCase()),
          v === "select" || (v === "input" && f.type === "file"))
        )
          var C = zf;
        else if (zu(f))
          if ($a) C = Of;
          else {
            C = Mf;
            var E = Lf;
          }
        else
          (v = f.nodeName) &&
            v.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (C = jf);
        if (C && (C = C(e, a))) {
          Ca(p, C, n, m);
          break e;
        }
        E && E(e, f, a),
          e === "focusout" &&
            (E = f._wrapperState) &&
            E.controlled &&
            f.type === "number" &&
            Eo(f, "number", f.value);
      }
      switch (((E = a ? bt(a) : window), e)) {
        case "focusin":
          (zu(E) || E.contentEditable === "true") &&
            ((Jt = E), (jo = a), (Qn = null));
          break;
        case "focusout":
          Qn = jo = Jt = null;
          break;
        case "mousedown":
          Oo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Oo = !1), Fu(p, n, m);
          break;
        case "selectionchange":
          if (Af) break;
        case "keydown":
        case "keyup":
          Fu(p, n, m);
      }
      var x;
      if (Ri)
        e: {
          switch (e) {
            case "compositionstart":
              var N = "onCompositionStart";
              break e;
            case "compositionend":
              N = "onCompositionEnd";
              break e;
            case "compositionupdate":
              N = "onCompositionUpdate";
              break e;
          }
          N = void 0;
        }
      else
        Zt
          ? xa(e, n) && (N = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N &&
        (ka &&
          n.locale !== "ko" &&
          (Zt || N !== "onCompositionStart"
            ? N === "onCompositionEnd" && Zt && (x = wa())
            : ((ft = m),
              (Ni = "value" in ft ? ft.value : ft.textContent),
              (Zt = !0))),
        (E = rl(a, N)),
        0 < E.length &&
          ((N = new Pu(N, e, null, n, m)),
          p.push({ event: N, listeners: E }),
          x ? (N.data = x) : ((x = Ea(n)), x !== null && (N.data = x)))),
        (x = Nf ? Pf(e, n) : Tf(e, n)) &&
          ((a = rl(a, "onBeforeInput")),
          0 < a.length &&
            ((m = new Pu("onBeforeInput", "beforeinput", null, n, m)),
            p.push({ event: m, listeners: a }),
            (m.data = x)));
    }
    ja(p, t);
  });
}
function or(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function rl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = qn(e, n)),
      o != null && r.unshift(or(e, o, l)),
      (o = qn(e, t)),
      o != null && r.push(or(e, o, l))),
      (e = e.return);
  }
  return r;
}
function Kt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Bu(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      a = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      a !== null &&
      ((u = a),
      l
        ? ((s = qn(n, o)), s != null && i.unshift(or(n, s, u)))
        : l || ((s = qn(n, o)), s != null && i.push(or(n, s, u)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Vf = /\r\n?/g,
  Hf = /\u0000|\uFFFD/g;
function Uu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Vf,
      `
`
    )
    .replace(Hf, "");
}
function Rr(e, t, n) {
  if (((t = Uu(t)), Uu(e) !== t && n)) throw Error(w(425));
}
function ll() {}
var Fo = null,
  Do = null;
function Ao(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Bo = typeof setTimeout == "function" ? setTimeout : void 0,
  Qf = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Wu = typeof Promise == "function" ? Promise : void 0,
  Kf =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Wu < "u"
      ? function (e) {
          return Wu.resolve(null).then(e).catch(Gf);
        }
      : Bo;
function Gf(e) {
  setTimeout(function () {
    throw e;
  });
}
function no(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), tr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  tr(t);
}
function gt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Vu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var En = Math.random().toString(36).slice(2),
  Qe = "__reactFiber$" + En,
  ir = "__reactProps$" + En,
  nt = "__reactContainer$" + En,
  Uo = "__reactEvents$" + En,
  Yf = "__reactListeners$" + En,
  Xf = "__reactHandles$" + En;
function zt(e) {
  var t = e[Qe];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[nt] || n[Qe])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Vu(e); e !== null; ) {
          if ((n = e[Qe])) return n;
          e = Vu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function vr(e) {
  return (
    (e = e[Qe] || e[nt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function bt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(w(33));
}
function Nl(e) {
  return e[ir] || null;
}
var Wo = [],
  en = -1;
function $t(e) {
  return { current: e };
}
function U(e) {
  0 > en || ((e.current = Wo[en]), (Wo[en] = null), en--);
}
function A(e, t) {
  en++, (Wo[en] = e.current), (e.current = t);
}
var Et = {},
  ae = $t(Et),
  ye = $t(!1),
  At = Et;
function hn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Et;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function Se(e) {
  return (e = e.childContextTypes), e != null;
}
function ol() {
  U(ye), U(ae);
}
function Hu(e, t, n) {
  if (ae.current !== Et) throw Error(w(168));
  A(ae, t), A(ye, n);
}
function Fa(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(w(108, zd(e) || "Unknown", l));
  return K({}, n, r);
}
function il(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Et),
    (At = ae.current),
    A(ae, e),
    A(ye, ye.current),
    !0
  );
}
function Qu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(w(169));
  n
    ? ((e = Fa(e, t, At)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      U(ye),
      U(ae),
      A(ae, e))
    : U(ye),
    A(ye, n);
}
var Ze = null,
  Pl = !1,
  ro = !1;
function Da(e) {
  Ze === null ? (Ze = [e]) : Ze.push(e);
}
function Zf(e) {
  (Pl = !0), Da(e);
}
function _t() {
  if (!ro && Ze !== null) {
    ro = !0;
    var e = 0,
      t = F;
    try {
      var n = Ze;
      for (F = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ze = null), (Pl = !1);
    } catch (l) {
      throw (Ze !== null && (Ze = Ze.slice(e + 1)), aa(Ei, _t), l);
    } finally {
      (F = t), (ro = !1);
    }
  }
  return null;
}
var tn = [],
  nn = 0,
  ul = null,
  sl = 0,
  Te = [],
  Re = 0,
  Bt = null,
  Je = 1,
  qe = "";
function Rt(e, t) {
  (tn[nn++] = sl), (tn[nn++] = ul), (ul = e), (sl = t);
}
function Aa(e, t, n) {
  (Te[Re++] = Je), (Te[Re++] = qe), (Te[Re++] = Bt), (Bt = e);
  var r = Je;
  e = qe;
  var l = 32 - Be(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - Be(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (Je = (1 << (32 - Be(t) + l)) | (n << l) | r),
      (qe = o + e);
  } else (Je = (1 << o) | (n << l) | r), (qe = e);
}
function zi(e) {
  e.return !== null && (Rt(e, 1), Aa(e, 1, 0));
}
function Li(e) {
  for (; e === ul; )
    (ul = tn[--nn]), (tn[nn] = null), (sl = tn[--nn]), (tn[nn] = null);
  for (; e === Bt; )
    (Bt = Te[--Re]),
      (Te[Re] = null),
      (qe = Te[--Re]),
      (Te[Re] = null),
      (Je = Te[--Re]),
      (Te[Re] = null);
}
var Ce = null,
  Ee = null,
  W = !1,
  Ae = null;
function Ba(e, t) {
  var n = Ie(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Ku(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ce = e), (Ee = gt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ce = e), (Ee = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Bt !== null ? { id: Je, overflow: qe } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ie(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ce = e),
            (Ee = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Vo(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ho(e) {
  if (W) {
    var t = Ee;
    if (t) {
      var n = t;
      if (!Ku(e, t)) {
        if (Vo(e)) throw Error(w(418));
        t = gt(n.nextSibling);
        var r = Ce;
        t && Ku(e, t)
          ? Ba(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (W = !1), (Ce = e));
      }
    } else {
      if (Vo(e)) throw Error(w(418));
      (e.flags = (e.flags & -4097) | 2), (W = !1), (Ce = e);
    }
  }
}
function Gu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ce = e;
}
function Ir(e) {
  if (e !== Ce) return !1;
  if (!W) return Gu(e), (W = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ao(e.type, e.memoizedProps))),
    t && (t = Ee))
  ) {
    if (Vo(e)) throw (Ua(), Error(w(418)));
    for (; t; ) Ba(e, t), (t = gt(t.nextSibling));
  }
  if ((Gu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(w(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ee = gt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ee = null;
    }
  } else Ee = Ce ? gt(e.stateNode.nextSibling) : null;
  return !0;
}
function Ua() {
  for (var e = Ee; e; ) e = gt(e.nextSibling);
}
function vn() {
  (Ee = Ce = null), (W = !1);
}
function Mi(e) {
  Ae === null ? (Ae = [e]) : Ae.push(e);
}
var Jf = it.ReactCurrentBatchConfig;
function Fe(e, t) {
  if (e && e.defaultProps) {
    (t = K({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var al = $t(null),
  cl = null,
  rn = null,
  ji = null;
function Oi() {
  ji = rn = cl = null;
}
function Fi(e) {
  var t = al.current;
  U(al), (e._currentValue = t);
}
function Qo(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function fn(e, t) {
  (cl = e),
    (ji = rn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ge = !0), (e.firstContext = null));
}
function Le(e) {
  var t = e._currentValue;
  if (ji !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), rn === null)) {
      if (cl === null) throw Error(w(308));
      (rn = e), (cl.dependencies = { lanes: 0, firstContext: e });
    } else rn = rn.next = e;
  return t;
}
var Lt = null;
function Di(e) {
  Lt === null ? (Lt = [e]) : Lt.push(e);
}
function Wa(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Di(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    rt(e, r)
  );
}
function rt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var at = !1;
function Ai(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Va(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function be(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function yt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), O & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      rt(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Di(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    rt(e, n)
  );
}
function Vr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ci(e, n);
  }
}
function Yu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function dl(e, t, n, r) {
  var l = e.updateQueue;
  at = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      a = s.next;
    (s.next = null), i === null ? (o = a) : (i.next = a), (i = s);
    var m = e.alternate;
    m !== null &&
      ((m = m.updateQueue),
      (u = m.lastBaseUpdate),
      u !== i &&
        (u === null ? (m.firstBaseUpdate = a) : (u.next = a),
        (m.lastBaseUpdate = s)));
  }
  if (o !== null) {
    var p = l.baseState;
    (i = 0), (m = a = s = null), (u = o);
    do {
      var f = u.lane,
        v = u.eventTime;
      if ((r & f) === f) {
        m !== null &&
          (m = m.next =
            {
              eventTime: v,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var g = e,
            S = u;
          switch (((f = t), (v = n), S.tag)) {
            case 1:
              if (((g = S.payload), typeof g == "function")) {
                p = g.call(v, p, f);
                break e;
              }
              p = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (
                ((g = S.payload),
                (f = typeof g == "function" ? g.call(v, p, f) : g),
                f == null)
              )
                break e;
              p = K({}, p, f);
              break e;
            case 2:
              at = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (f = l.effects),
          f === null ? (l.effects = [u]) : f.push(u));
      } else
        (v = {
          eventTime: v,
          lane: f,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          m === null ? ((a = m = v), (s = p)) : (m = m.next = v),
          (i |= f);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (f = u),
          (u = f.next),
          (f.next = null),
          (l.lastBaseUpdate = f),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (m === null && (s = p),
      (l.baseState = s),
      (l.firstBaseUpdate = a),
      (l.lastBaseUpdate = m),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (Wt |= i), (e.lanes = i), (e.memoizedState = p);
  }
}
function Xu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(w(191, l));
        l.call(r);
      }
    }
}
var Ha = new Ws.Component().refs;
function Ko(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : K({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Tl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Qt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = fe(),
      l = wt(e),
      o = be(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = yt(e, o, l)),
      t !== null && (Ue(t, e, l, r), Vr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = fe(),
      l = wt(e),
      o = be(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = yt(e, o, l)),
      t !== null && (Ue(t, e, l, r), Vr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = fe(),
      r = wt(e),
      l = be(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = yt(e, l, r)),
      t !== null && (Ue(t, e, r, n), Vr(t, e, r));
  },
};
function Zu(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !rr(n, r) || !rr(l, o)
      : !0
  );
}
function Qa(e, t, n) {
  var r = !1,
    l = Et,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Le(o))
      : ((l = Se(t) ? At : ae.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? hn(e, l) : Et)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Tl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Ju(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Tl.enqueueReplaceState(t, t.state, null);
}
function Go(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = Ha), Ai(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = Le(o))
    : ((o = Se(t) ? At : ae.current), (l.context = hn(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Ko(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Tl.enqueueReplaceState(l, l.state, null),
      dl(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function zn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(w(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(w(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var u = l.refs;
            u === Ha && (u = l.refs = {}),
              i === null ? delete u[o] : (u[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(w(284));
    if (!n._owner) throw Error(w(290, e));
  }
  return e;
}
function zr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      w(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function qu(e) {
  var t = e._init;
  return t(e._payload);
}
function Ka(e) {
  function t(d, c) {
    if (e) {
      var h = d.deletions;
      h === null ? ((d.deletions = [c]), (d.flags |= 16)) : h.push(c);
    }
  }
  function n(d, c) {
    if (!e) return null;
    for (; c !== null; ) t(d, c), (c = c.sibling);
    return null;
  }
  function r(d, c) {
    for (d = new Map(); c !== null; )
      c.key !== null ? d.set(c.key, c) : d.set(c.index, c), (c = c.sibling);
    return d;
  }
  function l(d, c) {
    return (d = kt(d, c)), (d.index = 0), (d.sibling = null), d;
  }
  function o(d, c, h) {
    return (
      (d.index = h),
      e
        ? ((h = d.alternate),
          h !== null
            ? ((h = h.index), h < c ? ((d.flags |= 2), c) : h)
            : ((d.flags |= 2), c))
        : ((d.flags |= 1048576), c)
    );
  }
  function i(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function u(d, c, h, y) {
    return c === null || c.tag !== 6
      ? ((c = co(h, d.mode, y)), (c.return = d), c)
      : ((c = l(c, h)), (c.return = d), c);
  }
  function s(d, c, h, y) {
    var C = h.type;
    return C === Xt
      ? m(d, c, h.props.children, y, h.key)
      : c !== null &&
        (c.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === st &&
            qu(C) === c.type))
      ? ((y = l(c, h.props)), (y.ref = zn(d, c, h)), (y.return = d), y)
      : ((y = Xr(h.type, h.key, h.props, null, d.mode, y)),
        (y.ref = zn(d, c, h)),
        (y.return = d),
        y);
  }
  function a(d, c, h, y) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== h.containerInfo ||
      c.stateNode.implementation !== h.implementation
      ? ((c = fo(h, d.mode, y)), (c.return = d), c)
      : ((c = l(c, h.children || [])), (c.return = d), c);
  }
  function m(d, c, h, y, C) {
    return c === null || c.tag !== 7
      ? ((c = Ot(h, d.mode, y, C)), (c.return = d), c)
      : ((c = l(c, h)), (c.return = d), c);
  }
  function p(d, c, h) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = co("" + c, d.mode, h)), (c.return = d), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case kr:
          return (
            (h = Xr(c.type, c.key, c.props, null, d.mode, h)),
            (h.ref = zn(d, null, c)),
            (h.return = d),
            h
          );
        case Yt:
          return (c = fo(c, d.mode, h)), (c.return = d), c;
        case st:
          var y = c._init;
          return p(d, y(c._payload), h);
      }
      if (Fn(c) || Nn(c))
        return (c = Ot(c, d.mode, h, null)), (c.return = d), c;
      zr(d, c);
    }
    return null;
  }
  function f(d, c, h, y) {
    var C = c !== null ? c.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return C !== null ? null : u(d, c, "" + h, y);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case kr:
          return h.key === C ? s(d, c, h, y) : null;
        case Yt:
          return h.key === C ? a(d, c, h, y) : null;
        case st:
          return (C = h._init), f(d, c, C(h._payload), y);
      }
      if (Fn(h) || Nn(h)) return C !== null ? null : m(d, c, h, y, null);
      zr(d, h);
    }
    return null;
  }
  function v(d, c, h, y, C) {
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return (d = d.get(h) || null), u(c, d, "" + y, C);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case kr:
          return (d = d.get(y.key === null ? h : y.key) || null), s(c, d, y, C);
        case Yt:
          return (d = d.get(y.key === null ? h : y.key) || null), a(c, d, y, C);
        case st:
          var E = y._init;
          return v(d, c, h, E(y._payload), C);
      }
      if (Fn(y) || Nn(y)) return (d = d.get(h) || null), m(c, d, y, C, null);
      zr(c, y);
    }
    return null;
  }
  function g(d, c, h, y) {
    for (
      var C = null, E = null, x = c, N = (c = 0), j = null;
      x !== null && N < h.length;
      N++
    ) {
      x.index > N ? ((j = x), (x = null)) : (j = x.sibling);
      var R = f(d, x, h[N], y);
      if (R === null) {
        x === null && (x = j);
        break;
      }
      e && x && R.alternate === null && t(d, x),
        (c = o(R, c, N)),
        E === null ? (C = R) : (E.sibling = R),
        (E = R),
        (x = j);
    }
    if (N === h.length) return n(d, x), W && Rt(d, N), C;
    if (x === null) {
      for (; N < h.length; N++)
        (x = p(d, h[N], y)),
          x !== null &&
            ((c = o(x, c, N)), E === null ? (C = x) : (E.sibling = x), (E = x));
      return W && Rt(d, N), C;
    }
    for (x = r(d, x); N < h.length; N++)
      (j = v(x, d, N, h[N], y)),
        j !== null &&
          (e && j.alternate !== null && x.delete(j.key === null ? N : j.key),
          (c = o(j, c, N)),
          E === null ? (C = j) : (E.sibling = j),
          (E = j));
    return (
      e &&
        x.forEach(function (V) {
          return t(d, V);
        }),
      W && Rt(d, N),
      C
    );
  }
  function S(d, c, h, y) {
    var C = Nn(h);
    if (typeof C != "function") throw Error(w(150));
    if (((h = C.call(h)), h == null)) throw Error(w(151));
    for (
      var E = (C = null), x = c, N = (c = 0), j = null, R = h.next();
      x !== null && !R.done;
      N++, R = h.next()
    ) {
      x.index > N ? ((j = x), (x = null)) : (j = x.sibling);
      var V = f(d, x, R.value, y);
      if (V === null) {
        x === null && (x = j);
        break;
      }
      e && x && V.alternate === null && t(d, x),
        (c = o(V, c, N)),
        E === null ? (C = V) : (E.sibling = V),
        (E = V),
        (x = j);
    }
    if (R.done) return n(d, x), W && Rt(d, N), C;
    if (x === null) {
      for (; !R.done; N++, R = h.next())
        (R = p(d, R.value, y)),
          R !== null &&
            ((c = o(R, c, N)), E === null ? (C = R) : (E.sibling = R), (E = R));
      return W && Rt(d, N), C;
    }
    for (x = r(d, x); !R.done; N++, R = h.next())
      (R = v(x, d, N, R.value, y)),
        R !== null &&
          (e && R.alternate !== null && x.delete(R.key === null ? N : R.key),
          (c = o(R, c, N)),
          E === null ? (C = R) : (E.sibling = R),
          (E = R));
    return (
      e &&
        x.forEach(function (he) {
          return t(d, he);
        }),
      W && Rt(d, N),
      C
    );
  }
  function T(d, c, h, y) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === Xt &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case kr:
          e: {
            for (var C = h.key, E = c; E !== null; ) {
              if (E.key === C) {
                if (((C = h.type), C === Xt)) {
                  if (E.tag === 7) {
                    n(d, E.sibling),
                      (c = l(E, h.props.children)),
                      (c.return = d),
                      (d = c);
                    break e;
                  }
                } else if (
                  E.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === st &&
                    qu(C) === E.type)
                ) {
                  n(d, E.sibling),
                    (c = l(E, h.props)),
                    (c.ref = zn(d, E, h)),
                    (c.return = d),
                    (d = c);
                  break e;
                }
                n(d, E);
                break;
              } else t(d, E);
              E = E.sibling;
            }
            h.type === Xt
              ? ((c = Ot(h.props.children, d.mode, y, h.key)),
                (c.return = d),
                (d = c))
              : ((y = Xr(h.type, h.key, h.props, null, d.mode, y)),
                (y.ref = zn(d, c, h)),
                (y.return = d),
                (d = y));
          }
          return i(d);
        case Yt:
          e: {
            for (E = h.key; c !== null; ) {
              if (c.key === E)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === h.containerInfo &&
                  c.stateNode.implementation === h.implementation
                ) {
                  n(d, c.sibling),
                    (c = l(c, h.children || [])),
                    (c.return = d),
                    (d = c);
                  break e;
                } else {
                  n(d, c);
                  break;
                }
              else t(d, c);
              c = c.sibling;
            }
            (c = fo(h, d.mode, y)), (c.return = d), (d = c);
          }
          return i(d);
        case st:
          return (E = h._init), T(d, c, E(h._payload), y);
      }
      if (Fn(h)) return g(d, c, h, y);
      if (Nn(h)) return S(d, c, h, y);
      zr(d, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        c !== null && c.tag === 6
          ? (n(d, c.sibling), (c = l(c, h)), (c.return = d), (d = c))
          : (n(d, c), (c = co(h, d.mode, y)), (c.return = d), (d = c)),
        i(d))
      : n(d, c);
  }
  return T;
}
var gn = Ka(!0),
  Ga = Ka(!1),
  gr = {},
  Ge = $t(gr),
  ur = $t(gr),
  sr = $t(gr);
function Mt(e) {
  if (e === gr) throw Error(w(174));
  return e;
}
function Bi(e, t) {
  switch ((A(sr, t), A(ur, e), A(Ge, gr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : $o(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = $o(t, e));
  }
  U(Ge), A(Ge, t);
}
function yn() {
  U(Ge), U(ur), U(sr);
}
function Ya(e) {
  Mt(sr.current);
  var t = Mt(Ge.current),
    n = $o(t, e.type);
  t !== n && (A(ur, e), A(Ge, n));
}
function Ui(e) {
  ur.current === e && (U(Ge), U(ur));
}
var H = $t(0);
function fl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var lo = [];
function Wi() {
  for (var e = 0; e < lo.length; e++)
    lo[e]._workInProgressVersionPrimary = null;
  lo.length = 0;
}
var Hr = it.ReactCurrentDispatcher,
  oo = it.ReactCurrentBatchConfig,
  Ut = 0,
  Q = null,
  J = null,
  te = null,
  pl = !1,
  Kn = !1,
  ar = 0,
  qf = 0;
function ie() {
  throw Error(w(321));
}
function Vi(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!We(e[n], t[n])) return !1;
  return !0;
}
function Hi(e, t, n, r, l, o) {
  if (
    ((Ut = o),
    (Q = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Hr.current = e === null || e.memoizedState === null ? np : rp),
    (e = n(r, l)),
    Kn)
  ) {
    o = 0;
    do {
      if (((Kn = !1), (ar = 0), 25 <= o)) throw Error(w(301));
      (o += 1),
        (te = J = null),
        (t.updateQueue = null),
        (Hr.current = lp),
        (e = n(r, l));
    } while (Kn);
  }
  if (
    ((Hr.current = ml),
    (t = J !== null && J.next !== null),
    (Ut = 0),
    (te = J = Q = null),
    (pl = !1),
    t)
  )
    throw Error(w(300));
  return e;
}
function Qi() {
  var e = ar !== 0;
  return (ar = 0), e;
}
function He() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return te === null ? (Q.memoizedState = te = e) : (te = te.next = e), te;
}
function Me() {
  if (J === null) {
    var e = Q.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = J.next;
  var t = te === null ? Q.memoizedState : te.next;
  if (t !== null) (te = t), (J = e);
  else {
    if (e === null) throw Error(w(310));
    (J = e),
      (e = {
        memoizedState: J.memoizedState,
        baseState: J.baseState,
        baseQueue: J.baseQueue,
        queue: J.queue,
        next: null,
      }),
      te === null ? (Q.memoizedState = te = e) : (te = te.next = e);
  }
  return te;
}
function cr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function io(e) {
  var t = Me(),
    n = t.queue;
  if (n === null) throw Error(w(311));
  n.lastRenderedReducer = e;
  var r = J,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var u = (i = null),
      s = null,
      a = o;
    do {
      var m = a.lane;
      if ((Ut & m) === m)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var p = {
          lane: m,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        s === null ? ((u = s = p), (i = r)) : (s = s.next = p),
          (Q.lanes |= m),
          (Wt |= m);
      }
      a = a.next;
    } while (a !== null && a !== o);
    s === null ? (i = r) : (s.next = u),
      We(r, t.memoizedState) || (ge = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (Q.lanes |= o), (Wt |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function uo(e) {
  var t = Me(),
    n = t.queue;
  if (n === null) throw Error(w(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    We(o, t.memoizedState) || (ge = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Xa() {}
function Za(e, t) {
  var n = Q,
    r = Me(),
    l = t(),
    o = !We(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (ge = !0)),
    (r = r.queue),
    Ki(ba.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (te !== null && te.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      dr(9, qa.bind(null, n, r, l, t), void 0, null),
      ne === null)
    )
      throw Error(w(349));
    Ut & 30 || Ja(n, t, l);
  }
  return l;
}
function Ja(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Q.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function qa(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), ec(t) && tc(e);
}
function ba(e, t, n) {
  return n(function () {
    ec(t) && tc(e);
  });
}
function ec(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !We(e, n);
  } catch {
    return !0;
  }
}
function tc(e) {
  var t = rt(e, 1);
  t !== null && Ue(t, e, 1, -1);
}
function bu(e) {
  var t = He();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: cr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = tp.bind(null, Q, e)),
    [t.memoizedState, e]
  );
}
function dr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Q.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function nc() {
  return Me().memoizedState;
}
function Qr(e, t, n, r) {
  var l = He();
  (Q.flags |= e),
    (l.memoizedState = dr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Rl(e, t, n, r) {
  var l = Me();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (J !== null) {
    var i = J.memoizedState;
    if (((o = i.destroy), r !== null && Vi(r, i.deps))) {
      l.memoizedState = dr(t, n, o, r);
      return;
    }
  }
  (Q.flags |= e), (l.memoizedState = dr(1 | t, n, o, r));
}
function es(e, t) {
  return Qr(8390656, 8, e, t);
}
function Ki(e, t) {
  return Rl(2048, 8, e, t);
}
function rc(e, t) {
  return Rl(4, 2, e, t);
}
function lc(e, t) {
  return Rl(4, 4, e, t);
}
function oc(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function ic(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Rl(4, 4, oc.bind(null, t, e), n)
  );
}
function Gi() {}
function uc(e, t) {
  var n = Me();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Vi(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function sc(e, t) {
  var n = Me();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Vi(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function ac(e, t, n) {
  return Ut & 21
    ? (We(n, t) || ((n = fa()), (Q.lanes |= n), (Wt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ge = !0)), (e.memoizedState = n));
}
function bf(e, t) {
  var n = F;
  (F = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = oo.transition;
  oo.transition = {};
  try {
    e(!1), t();
  } finally {
    (F = n), (oo.transition = r);
  }
}
function cc() {
  return Me().memoizedState;
}
function ep(e, t, n) {
  var r = wt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    dc(e))
  )
    fc(t, n);
  else if (((n = Wa(e, t, n, r)), n !== null)) {
    var l = fe();
    Ue(n, e, r, l), pc(n, t, r);
  }
}
function tp(e, t, n) {
  var r = wt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (dc(e)) fc(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          u = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), We(u, i))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), Di(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Wa(e, t, l, r)),
      n !== null && ((l = fe()), Ue(n, e, r, l), pc(n, t, r));
  }
}
function dc(e) {
  var t = e.alternate;
  return e === Q || (t !== null && t === Q);
}
function fc(e, t) {
  Kn = pl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function pc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ci(e, n);
  }
}
var ml = {
    readContext: Le,
    useCallback: ie,
    useContext: ie,
    useEffect: ie,
    useImperativeHandle: ie,
    useInsertionEffect: ie,
    useLayoutEffect: ie,
    useMemo: ie,
    useReducer: ie,
    useRef: ie,
    useState: ie,
    useDebugValue: ie,
    useDeferredValue: ie,
    useTransition: ie,
    useMutableSource: ie,
    useSyncExternalStore: ie,
    useId: ie,
    unstable_isNewReconciler: !1,
  },
  np = {
    readContext: Le,
    useCallback: function (e, t) {
      return (He().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Le,
    useEffect: es,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Qr(4194308, 4, oc.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Qr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Qr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = He();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = He();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = ep.bind(null, Q, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = He();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: bu,
    useDebugValue: Gi,
    useDeferredValue: function (e) {
      return (He().memoizedState = e);
    },
    useTransition: function () {
      var e = bu(!1),
        t = e[0];
      return (e = bf.bind(null, e[1])), (He().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Q,
        l = He();
      if (W) {
        if (n === void 0) throw Error(w(407));
        n = n();
      } else {
        if (((n = t()), ne === null)) throw Error(w(349));
        Ut & 30 || Ja(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        es(ba.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        dr(9, qa.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = He(),
        t = ne.identifierPrefix;
      if (W) {
        var n = qe,
          r = Je;
        (n = (r & ~(1 << (32 - Be(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ar++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = qf++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  rp = {
    readContext: Le,
    useCallback: uc,
    useContext: Le,
    useEffect: Ki,
    useImperativeHandle: ic,
    useInsertionEffect: rc,
    useLayoutEffect: lc,
    useMemo: sc,
    useReducer: io,
    useRef: nc,
    useState: function () {
      return io(cr);
    },
    useDebugValue: Gi,
    useDeferredValue: function (e) {
      var t = Me();
      return ac(t, J.memoizedState, e);
    },
    useTransition: function () {
      var e = io(cr)[0],
        t = Me().memoizedState;
      return [e, t];
    },
    useMutableSource: Xa,
    useSyncExternalStore: Za,
    useId: cc,
    unstable_isNewReconciler: !1,
  },
  lp = {
    readContext: Le,
    useCallback: uc,
    useContext: Le,
    useEffect: Ki,
    useImperativeHandle: ic,
    useInsertionEffect: rc,
    useLayoutEffect: lc,
    useMemo: sc,
    useReducer: uo,
    useRef: nc,
    useState: function () {
      return uo(cr);
    },
    useDebugValue: Gi,
    useDeferredValue: function (e) {
      var t = Me();
      return J === null ? (t.memoizedState = e) : ac(t, J.memoizedState, e);
    },
    useTransition: function () {
      var e = uo(cr)[0],
        t = Me().memoizedState;
      return [e, t];
    },
    useMutableSource: Xa,
    useSyncExternalStore: Za,
    useId: cc,
    unstable_isNewReconciler: !1,
  };
function Sn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Id(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function so(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Yo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var op = typeof WeakMap == "function" ? WeakMap : Map;
function mc(e, t, n) {
  (n = be(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      vl || ((vl = !0), (li = r)), Yo(e, t);
    }),
    n
  );
}
function hc(e, t, n) {
  (n = be(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Yo(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Yo(e, t),
          typeof r != "function" &&
            (St === null ? (St = new Set([this])) : St.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function ts(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new op();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = Sp.bind(null, e, t, n)), t.then(e, e));
}
function ns(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function rs(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = be(-1, 1)), (t.tag = 2), yt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var ip = it.ReactCurrentOwner,
  ge = !1;
function de(e, t, n, r) {
  t.child = e === null ? Ga(t, null, n, r) : gn(t, e.child, n, r);
}
function ls(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    fn(t, l),
    (r = Hi(e, t, n, r, o, l)),
    (n = Qi()),
    e !== null && !ge
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        lt(e, t, l))
      : (W && n && zi(t), (t.flags |= 1), de(e, t, r, l), t.child)
  );
}
function os(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !tu(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), vc(e, t, o, r, l))
      : ((e = Xr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : rr), n(i, r) && e.ref === t.ref)
    )
      return lt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = kt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function vc(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (rr(o, r) && e.ref === t.ref)
      if (((ge = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (ge = !0);
      else return (t.lanes = e.lanes), lt(e, t, l);
  }
  return Xo(e, t, n, r, l);
}
function gc(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        A(on, xe),
        (xe |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          A(on, xe),
          (xe |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        A(on, xe),
        (xe |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      A(on, xe),
      (xe |= r);
  return de(e, t, l, n), t.child;
}
function yc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Xo(e, t, n, r, l) {
  var o = Se(n) ? At : ae.current;
  return (
    (o = hn(t, o)),
    fn(t, l),
    (n = Hi(e, t, n, r, o, l)),
    (r = Qi()),
    e !== null && !ge
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        lt(e, t, l))
      : (W && r && zi(t), (t.flags |= 1), de(e, t, n, l), t.child)
  );
}
function is(e, t, n, r, l) {
  if (Se(n)) {
    var o = !0;
    il(t);
  } else o = !1;
  if ((fn(t, l), t.stateNode === null))
    Kr(e, t), Qa(t, n, r), Go(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps;
    i.props = u;
    var s = i.context,
      a = n.contextType;
    typeof a == "object" && a !== null
      ? (a = Le(a))
      : ((a = Se(n) ? At : ae.current), (a = hn(t, a)));
    var m = n.getDerivedStateFromProps,
      p =
        typeof m == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== r || s !== a) && Ju(t, i, r, a)),
      (at = !1);
    var f = t.memoizedState;
    (i.state = f),
      dl(t, r, i, l),
      (s = t.memoizedState),
      u !== r || f !== s || ye.current || at
        ? (typeof m == "function" && (Ko(t, n, m, r), (s = t.memoizedState)),
          (u = at || Zu(t, n, u, r, f, s, a))
            ? (p ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (i.props = r),
          (i.state = s),
          (i.context = a),
          (r = u))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      Va(e, t),
      (u = t.memoizedProps),
      (a = t.type === t.elementType ? u : Fe(t.type, u)),
      (i.props = a),
      (p = t.pendingProps),
      (f = i.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = Le(s))
        : ((s = Se(n) ? At : ae.current), (s = hn(t, s)));
    var v = n.getDerivedStateFromProps;
    (m =
      typeof v == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== p || f !== s) && Ju(t, i, r, s)),
      (at = !1),
      (f = t.memoizedState),
      (i.state = f),
      dl(t, r, i, l);
    var g = t.memoizedState;
    u !== p || f !== g || ye.current || at
      ? (typeof v == "function" && (Ko(t, n, v, r), (g = t.memoizedState)),
        (a = at || Zu(t, n, a, r, f, g, s) || !1)
          ? (m ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, g, s),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, g, s)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (u === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (i.props = r),
        (i.state = g),
        (i.context = s),
        (r = a))
      : (typeof i.componentDidUpdate != "function" ||
          (u === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Zo(e, t, n, r, o, l);
}
function Zo(e, t, n, r, l, o) {
  yc(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && Qu(t, n, !1), lt(e, t, o);
  (r = t.stateNode), (ip.current = t);
  var u =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = gn(t, e.child, null, o)), (t.child = gn(t, null, u, o)))
      : de(e, t, u, o),
    (t.memoizedState = r.state),
    l && Qu(t, n, !0),
    t.child
  );
}
function Sc(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Hu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Hu(e, t.context, !1),
    Bi(e, t.containerInfo);
}
function us(e, t, n, r, l) {
  return vn(), Mi(l), (t.flags |= 256), de(e, t, n, r), t.child;
}
var Jo = { dehydrated: null, treeContext: null, retryLane: 0 };
function qo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function wc(e, t, n) {
  var r = t.pendingProps,
    l = H.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    u;
  if (
    ((u = i) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    A(H, l & 1),
    e === null)
  )
    return (
      Ho(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = Ll(i, r, 0, null)),
              (e = Ot(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = qo(n)),
              (t.memoizedState = Jo),
              e)
            : Yi(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return up(e, t, i, r, u, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = kt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (o = kt(u, o)) : ((o = Ot(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? qo(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Jo),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = kt(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Yi(e, t) {
  return (
    (t = Ll({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Lr(e, t, n, r) {
  return (
    r !== null && Mi(r),
    gn(t, e.child, null, n),
    (e = Yi(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function up(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = so(Error(w(422)))), Lr(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = Ll({ mode: "visible", children: r.children }, l, 0, null)),
        (o = Ot(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && gn(t, e.child, null, i),
        (t.child.memoizedState = qo(i)),
        (t.memoizedState = Jo),
        o);
  if (!(t.mode & 1)) return Lr(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (o = Error(w(419))), (r = so(o, r, void 0)), Lr(e, t, i, r);
  }
  if (((u = (i & e.childLanes) !== 0), ge || u)) {
    if (((r = ne), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), rt(e, l), Ue(r, e, l, -1));
    }
    return eu(), (r = so(Error(w(421)))), Lr(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = wp.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Ee = gt(l.nextSibling)),
      (Ce = t),
      (W = !0),
      (Ae = null),
      e !== null &&
        ((Te[Re++] = Je),
        (Te[Re++] = qe),
        (Te[Re++] = Bt),
        (Je = e.id),
        (qe = e.overflow),
        (Bt = t)),
      (t = Yi(t, r.children)),
      (t.flags |= 4096),
      t);
}
function ss(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Qo(e.return, t, n);
}
function ao(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function kc(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((de(e, t, r.children, n), (r = H.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ss(e, n, t);
        else if (e.tag === 19) ss(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((A(H, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && fl(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          ao(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && fl(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        ao(t, !0, n, null, o);
        break;
      case "together":
        ao(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Kr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function lt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Wt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(w(153));
  if (t.child !== null) {
    for (
      e = t.child, n = kt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = kt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function sp(e, t, n) {
  switch (t.tag) {
    case 3:
      Sc(t), vn();
      break;
    case 5:
      Ya(t);
      break;
    case 1:
      Se(t.type) && il(t);
      break;
    case 4:
      Bi(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      A(al, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (A(H, H.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? wc(e, t, n)
          : (A(H, H.current & 1),
            (e = lt(e, t, n)),
            e !== null ? e.sibling : null);
      A(H, H.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return kc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        A(H, H.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), gc(e, t, n);
  }
  return lt(e, t, n);
}
var xc, bo, Ec, Cc;
xc = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
bo = function () {};
Ec = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Mt(Ge.current);
    var o = null;
    switch (n) {
      case "input":
        (l = ko(e, l)), (r = ko(e, r)), (o = []);
        break;
      case "select":
        (l = K({}, l, { value: void 0 })),
          (r = K({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = Co(e, l)), (r = Co(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ll);
    }
    _o(n, r);
    var i;
    n = null;
    for (a in l)
      if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null)
        if (a === "style") {
          var u = l[a];
          for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          a !== "dangerouslySetInnerHTML" &&
            a !== "children" &&
            a !== "suppressContentEditableWarning" &&
            a !== "suppressHydrationWarning" &&
            a !== "autoFocus" &&
            (Zn.hasOwnProperty(a)
              ? o || (o = [])
              : (o = o || []).push(a, null));
    for (a in r) {
      var s = r[a];
      if (
        ((u = l != null ? l[a] : void 0),
        r.hasOwnProperty(a) && s !== u && (s != null || u != null))
      )
        if (a === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (s && s.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in s)
              s.hasOwnProperty(i) &&
                u[i] !== s[i] &&
                (n || (n = {}), (n[i] = s[i]));
          } else n || (o || (o = []), o.push(a, n)), (n = s);
        else
          a === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (o = o || []).push(a, s))
            : a === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (o = o || []).push(a, "" + s)
            : a !== "suppressContentEditableWarning" &&
              a !== "suppressHydrationWarning" &&
              (Zn.hasOwnProperty(a)
                ? (s != null && a === "onScroll" && B("scroll", e),
                  o || u === s || (o = []))
                : (o = o || []).push(a, s));
    }
    n && (o = o || []).push("style", n);
    var a = o;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
Cc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Ln(e, t) {
  if (!W)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ue(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function ap(e, t, n) {
  var r = t.pendingProps;
  switch ((Li(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ue(t), null;
    case 1:
      return Se(t.type) && ol(), ue(t), null;
    case 3:
      return (
        (r = t.stateNode),
        yn(),
        U(ye),
        U(ae),
        Wi(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ir(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ae !== null && (ui(Ae), (Ae = null)))),
        bo(e, t),
        ue(t),
        null
      );
    case 5:
      Ui(t);
      var l = Mt(sr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Ec(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(w(166));
          return ue(t), null;
        }
        if (((e = Mt(Ge.current)), Ir(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Qe] = t), (r[ir] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              B("cancel", r), B("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              B("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < An.length; l++) B(An[l], r);
              break;
            case "source":
              B("error", r);
              break;
            case "img":
            case "image":
            case "link":
              B("error", r), B("load", r);
              break;
            case "details":
              B("toggle", r);
              break;
            case "input":
              gu(r, o), B("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                B("invalid", r);
              break;
            case "textarea":
              Su(r, o), B("invalid", r);
          }
          _o(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (o.suppressHydrationWarning !== !0 &&
                      Rr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (o.suppressHydrationWarning !== !0 &&
                      Rr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : Zn.hasOwnProperty(i) &&
                  u != null &&
                  i === "onScroll" &&
                  B("scroll", r);
            }
          switch (n) {
            case "input":
              xr(r), yu(r, o, !0);
              break;
            case "textarea":
              xr(r), wu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = ll);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Js(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[Qe] = t),
            (e[ir] = r),
            xc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = No(n, r)), n)) {
              case "dialog":
                B("cancel", e), B("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                B("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < An.length; l++) B(An[l], e);
                l = r;
                break;
              case "source":
                B("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                B("error", e), B("load", e), (l = r);
                break;
              case "details":
                B("toggle", e), (l = r);
                break;
              case "input":
                gu(e, r), (l = ko(e, r)), B("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = K({}, r, { value: void 0 })),
                  B("invalid", e);
                break;
              case "textarea":
                Su(e, r), (l = Co(e, r)), B("invalid", e);
                break;
              default:
                l = r;
            }
            _o(n, l), (u = l);
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === "style"
                  ? ea(e, s)
                  : o === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && qs(e, s))
                  : o === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && Jn(e, s)
                    : typeof s == "number" && Jn(e, "" + s)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Zn.hasOwnProperty(o)
                      ? s != null && o === "onScroll" && B("scroll", e)
                      : s != null && yi(e, o, s, i));
              }
            switch (n) {
              case "input":
                xr(e), yu(e, r, !1);
                break;
              case "textarea":
                xr(e), wu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + xt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? sn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      sn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = ll);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ue(t), null;
    case 6:
      if (e && t.stateNode != null) Cc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(w(166));
        if (((n = Mt(sr.current)), Mt(Ge.current), Ir(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Qe] = t),
            (o = r.nodeValue !== n) && ((e = Ce), e !== null))
          )
            switch (e.tag) {
              case 3:
                Rr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Rr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Qe] = t),
            (t.stateNode = r);
      }
      return ue(t), null;
    case 13:
      if (
        (U(H),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (W && Ee !== null && t.mode & 1 && !(t.flags & 128))
          Ua(), vn(), (t.flags |= 98560), (o = !1);
        else if (((o = Ir(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(w(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(w(317));
            o[Qe] = t;
          } else
            vn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ue(t), (o = !1);
        } else Ae !== null && (ui(Ae), (Ae = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || H.current & 1 ? q === 0 && (q = 3) : eu())),
          t.updateQueue !== null && (t.flags |= 4),
          ue(t),
          null);
    case 4:
      return (
        yn(), bo(e, t), e === null && lr(t.stateNode.containerInfo), ue(t), null
      );
    case 10:
      return Fi(t.type._context), ue(t), null;
    case 17:
      return Se(t.type) && ol(), ue(t), null;
    case 19:
      if ((U(H), (o = t.memoizedState), o === null)) return ue(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) Ln(o, !1);
        else {
          if (q !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = fl(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Ln(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return A(H, (H.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            X() > wn &&
            ((t.flags |= 128), (r = !0), Ln(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = fl(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Ln(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !W)
            )
              return ue(t), null;
          } else
            2 * X() - o.renderingStartTime > wn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Ln(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = X()),
          (t.sibling = null),
          (n = H.current),
          A(H, r ? (n & 1) | 2 : n & 1),
          t)
        : (ue(t), null);
    case 22:
    case 23:
      return (
        bi(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? xe & 1073741824 && (ue(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ue(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(w(156, t.tag));
}
function cp(e, t) {
  switch ((Li(t), t.tag)) {
    case 1:
      return (
        Se(t.type) && ol(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        yn(),
        U(ye),
        U(ae),
        Wi(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ui(t), null;
    case 13:
      if ((U(H), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(w(340));
        vn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return U(H), null;
    case 4:
      return yn(), null;
    case 10:
      return Fi(t.type._context), null;
    case 22:
    case 23:
      return bi(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Mr = !1,
  se = !1,
  dp = typeof WeakSet == "function" ? WeakSet : Set,
  _ = null;
function ln(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        G(e, t, r);
      }
    else n.current = null;
}
function ei(e, t, n) {
  try {
    n();
  } catch (r) {
    G(e, t, r);
  }
}
var as = !1;
function fp(e, t) {
  if (((Fo = tl), (e = Pa()), Ii(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            u = -1,
            s = -1,
            a = 0,
            m = 0,
            p = e,
            f = null;
          t: for (;;) {
            for (
              var v;
              p !== n || (l !== 0 && p.nodeType !== 3) || (u = i + l),
                p !== o || (r !== 0 && p.nodeType !== 3) || (s = i + r),
                p.nodeType === 3 && (i += p.nodeValue.length),
                (v = p.firstChild) !== null;

            )
              (f = p), (p = v);
            for (;;) {
              if (p === e) break t;
              if (
                (f === n && ++a === l && (u = i),
                f === o && ++m === r && (s = i),
                (v = p.nextSibling) !== null)
              )
                break;
              (p = f), (f = p.parentNode);
            }
            p = v;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Do = { focusedElem: e, selectionRange: n }, tl = !1, _ = t; _ !== null; )
    if (((t = _), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (_ = e);
    else
      for (; _ !== null; ) {
        t = _;
        try {
          var g = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var S = g.memoizedProps,
                    T = g.memoizedState,
                    d = t.stateNode,
                    c = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? S : Fe(t.type, S),
                      T
                    );
                  d.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = "")
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(w(163));
            }
        } catch (y) {
          G(t, t.return, y);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (_ = e);
          break;
        }
        _ = t.return;
      }
  return (g = as), (as = !1), g;
}
function Gn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && ei(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Il(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function ti(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function $c(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), $c(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Qe], delete t[ir], delete t[Uo], delete t[Yf], delete t[Xf])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function _c(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function cs(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || _c(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ni(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ll));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ni(e, t, n), e = e.sibling; e !== null; ) ni(e, t, n), (e = e.sibling);
}
function ri(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ri(e, t, n), e = e.sibling; e !== null; ) ri(e, t, n), (e = e.sibling);
}
var re = null,
  De = !1;
function ut(e, t, n) {
  for (n = n.child; n !== null; ) Nc(e, t, n), (n = n.sibling);
}
function Nc(e, t, n) {
  if (Ke && typeof Ke.onCommitFiberUnmount == "function")
    try {
      Ke.onCommitFiberUnmount(El, n);
    } catch {}
  switch (n.tag) {
    case 5:
      se || ln(n, t);
    case 6:
      var r = re,
        l = De;
      (re = null),
        ut(e, t, n),
        (re = r),
        (De = l),
        re !== null &&
          (De
            ? ((e = re),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : re.removeChild(n.stateNode));
      break;
    case 18:
      re !== null &&
        (De
          ? ((e = re),
            (n = n.stateNode),
            e.nodeType === 8
              ? no(e.parentNode, n)
              : e.nodeType === 1 && no(e, n),
            tr(e))
          : no(re, n.stateNode));
      break;
    case 4:
      (r = re),
        (l = De),
        (re = n.stateNode.containerInfo),
        (De = !0),
        ut(e, t, n),
        (re = r),
        (De = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !se &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && ei(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      ut(e, t, n);
      break;
    case 1:
      if (
        !se &&
        (ln(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          G(n, t, u);
        }
      ut(e, t, n);
      break;
    case 21:
      ut(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((se = (r = se) || n.memoizedState !== null), ut(e, t, n), (se = r))
        : ut(e, t, n);
      break;
    default:
      ut(e, t, n);
  }
}
function ds(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new dp()),
      t.forEach(function (r) {
        var l = kp.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Oe(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (re = u.stateNode), (De = !1);
              break e;
            case 3:
              (re = u.stateNode.containerInfo), (De = !0);
              break e;
            case 4:
              (re = u.stateNode.containerInfo), (De = !0);
              break e;
          }
          u = u.return;
        }
        if (re === null) throw Error(w(160));
        Nc(o, i, l), (re = null), (De = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (a) {
        G(l, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Pc(t, e), (t = t.sibling);
}
function Pc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Oe(t, e), Ve(e), r & 4)) {
        try {
          Gn(3, e, e.return), Il(3, e);
        } catch (S) {
          G(e, e.return, S);
        }
        try {
          Gn(5, e, e.return);
        } catch (S) {
          G(e, e.return, S);
        }
      }
      break;
    case 1:
      Oe(t, e), Ve(e), r & 512 && n !== null && ln(n, n.return);
      break;
    case 5:
      if (
        (Oe(t, e),
        Ve(e),
        r & 512 && n !== null && ln(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Jn(l, "");
        } catch (S) {
          G(e, e.return, S);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && o.type === "radio" && o.name != null && Xs(l, o),
              No(u, i);
            var a = No(u, o);
            for (i = 0; i < s.length; i += 2) {
              var m = s[i],
                p = s[i + 1];
              m === "style"
                ? ea(l, p)
                : m === "dangerouslySetInnerHTML"
                ? qs(l, p)
                : m === "children"
                ? Jn(l, p)
                : yi(l, m, p, a);
            }
            switch (u) {
              case "input":
                xo(l, o);
                break;
              case "textarea":
                Zs(l, o);
                break;
              case "select":
                var f = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var v = o.value;
                v != null
                  ? sn(l, !!o.multiple, v, !1)
                  : f !== !!o.multiple &&
                    (o.defaultValue != null
                      ? sn(l, !!o.multiple, o.defaultValue, !0)
                      : sn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[ir] = o;
          } catch (S) {
            G(e, e.return, S);
          }
      }
      break;
    case 6:
      if ((Oe(t, e), Ve(e), r & 4)) {
        if (e.stateNode === null) throw Error(w(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (S) {
          G(e, e.return, S);
        }
      }
      break;
    case 3:
      if (
        (Oe(t, e), Ve(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          tr(t.containerInfo);
        } catch (S) {
          G(e, e.return, S);
        }
      break;
    case 4:
      Oe(t, e), Ve(e);
      break;
    case 13:
      Oe(t, e),
        Ve(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Ji = X())),
        r & 4 && ds(e);
      break;
    case 22:
      if (
        ((m = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((se = (a = se) || m), Oe(t, e), (se = a)) : Oe(t, e),
        Ve(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !m && e.mode & 1)
        )
          for (_ = e, m = e.child; m !== null; ) {
            for (p = _ = m; _ !== null; ) {
              switch (((f = _), (v = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Gn(4, f, f.return);
                  break;
                case 1:
                  ln(f, f.return);
                  var g = f.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (g.props = t.memoizedProps),
                        (g.state = t.memoizedState),
                        g.componentWillUnmount();
                    } catch (S) {
                      G(r, n, S);
                    }
                  }
                  break;
                case 5:
                  ln(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    ps(p);
                    continue;
                  }
              }
              v !== null ? ((v.return = f), (_ = v)) : ps(p);
            }
            m = m.sibling;
          }
        e: for (m = null, p = e; ; ) {
          if (p.tag === 5) {
            if (m === null) {
              m = p;
              try {
                (l = p.stateNode),
                  a
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((u = p.stateNode),
                      (s = p.memoizedProps.style),
                      (i =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = bs("display", i)));
              } catch (S) {
                G(e, e.return, S);
              }
            }
          } else if (p.tag === 6) {
            if (m === null)
              try {
                p.stateNode.nodeValue = a ? "" : p.memoizedProps;
              } catch (S) {
                G(e, e.return, S);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            m === p && (m = null), (p = p.return);
          }
          m === p && (m = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      Oe(t, e), Ve(e), r & 4 && ds(e);
      break;
    case 21:
      break;
    default:
      Oe(t, e), Ve(e);
  }
}
function Ve(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (_c(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(w(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Jn(l, ""), (r.flags &= -33));
          var o = cs(e);
          ri(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = cs(e);
          ni(e, u, i);
          break;
        default:
          throw Error(w(161));
      }
    } catch (s) {
      G(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function pp(e, t, n) {
  (_ = e), Tc(e);
}
function Tc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; _ !== null; ) {
    var l = _,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Mr;
      if (!i) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || se;
        u = Mr;
        var a = se;
        if (((Mr = i), (se = s) && !a))
          for (_ = l; _ !== null; )
            (i = _),
              (s = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? ms(l)
                : s !== null
                ? ((s.return = i), (_ = s))
                : ms(l);
        for (; o !== null; ) (_ = o), Tc(o), (o = o.sibling);
        (_ = l), (Mr = u), (se = a);
      }
      fs(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (_ = o)) : fs(e);
  }
}
function fs(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              se || Il(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !se)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Fe(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Xu(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Xu(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var a = t.alternate;
                if (a !== null) {
                  var m = a.memoizedState;
                  if (m !== null) {
                    var p = m.dehydrated;
                    p !== null && tr(p);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(w(163));
          }
        se || (t.flags & 512 && ti(t));
      } catch (f) {
        G(t, t.return, f);
      }
    }
    if (t === e) {
      _ = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (_ = n);
      break;
    }
    _ = t.return;
  }
}
function ps(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t === e) {
      _ = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (_ = n);
      break;
    }
    _ = t.return;
  }
}
function ms(e) {
  for (; _ !== null; ) {
    var t = _;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Il(4, t);
          } catch (s) {
            G(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              G(t, l, s);
            }
          }
          var o = t.return;
          try {
            ti(t);
          } catch (s) {
            G(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            ti(t);
          } catch (s) {
            G(t, i, s);
          }
      }
    } catch (s) {
      G(t, t.return, s);
    }
    if (t === e) {
      _ = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (_ = u);
      break;
    }
    _ = t.return;
  }
}
var mp = Math.ceil,
  hl = it.ReactCurrentDispatcher,
  Xi = it.ReactCurrentOwner,
  ze = it.ReactCurrentBatchConfig,
  O = 0,
  ne = null,
  Z = null,
  le = 0,
  xe = 0,
  on = $t(0),
  q = 0,
  fr = null,
  Wt = 0,
  zl = 0,
  Zi = 0,
  Yn = null,
  ve = null,
  Ji = 0,
  wn = 1 / 0,
  Xe = null,
  vl = !1,
  li = null,
  St = null,
  jr = !1,
  pt = null,
  gl = 0,
  Xn = 0,
  oi = null,
  Gr = -1,
  Yr = 0;
function fe() {
  return O & 6 ? X() : Gr !== -1 ? Gr : (Gr = X());
}
function wt(e) {
  return e.mode & 1
    ? O & 2 && le !== 0
      ? le & -le
      : Jf.transition !== null
      ? (Yr === 0 && (Yr = fa()), Yr)
      : ((e = F),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Sa(e.type))),
        e)
    : 1;
}
function Ue(e, t, n, r) {
  if (50 < Xn) throw ((Xn = 0), (oi = null), Error(w(185)));
  mr(e, n, r),
    (!(O & 2) || e !== ne) &&
      (e === ne && (!(O & 2) && (zl |= n), q === 4 && dt(e, le)),
      we(e, r),
      n === 1 && O === 0 && !(t.mode & 1) && ((wn = X() + 500), Pl && _t()));
}
function we(e, t) {
  var n = e.callbackNode;
  Zd(e, t);
  var r = el(e, e === ne ? le : 0);
  if (r === 0)
    n !== null && Eu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Eu(n), t === 1))
      e.tag === 0 ? Zf(hs.bind(null, e)) : Da(hs.bind(null, e)),
        Kf(function () {
          !(O & 6) && _t();
        }),
        (n = null);
    else {
      switch (pa(r)) {
        case 1:
          n = Ei;
          break;
        case 4:
          n = ca;
          break;
        case 16:
          n = br;
          break;
        case 536870912:
          n = da;
          break;
        default:
          n = br;
      }
      n = Fc(n, Rc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Rc(e, t) {
  if (((Gr = -1), (Yr = 0), O & 6)) throw Error(w(327));
  var n = e.callbackNode;
  if (pn() && e.callbackNode !== n) return null;
  var r = el(e, e === ne ? le : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = yl(e, r);
  else {
    t = r;
    var l = O;
    O |= 2;
    var o = zc();
    (ne !== e || le !== t) && ((Xe = null), (wn = X() + 500), jt(e, t));
    do
      try {
        gp();
        break;
      } catch (u) {
        Ic(e, u);
      }
    while (1);
    Oi(),
      (hl.current = o),
      (O = l),
      Z !== null ? (t = 0) : ((ne = null), (le = 0), (t = q));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = zo(e)), l !== 0 && ((r = l), (t = ii(e, l)))), t === 1)
    )
      throw ((n = fr), jt(e, 0), dt(e, r), we(e, X()), n);
    if (t === 6) dt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !hp(l) &&
          ((t = yl(e, r)),
          t === 2 && ((o = zo(e)), o !== 0 && ((r = o), (t = ii(e, o)))),
          t === 1))
      )
        throw ((n = fr), jt(e, 0), dt(e, r), we(e, X()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(w(345));
        case 2:
          It(e, ve, Xe);
          break;
        case 3:
          if (
            (dt(e, r), (r & 130023424) === r && ((t = Ji + 500 - X()), 10 < t))
          ) {
            if (el(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              fe(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Bo(It.bind(null, e, ve, Xe), t);
            break;
          }
          It(e, ve, Xe);
          break;
        case 4:
          if ((dt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Be(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = X() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * mp(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Bo(It.bind(null, e, ve, Xe), r);
            break;
          }
          It(e, ve, Xe);
          break;
        case 5:
          It(e, ve, Xe);
          break;
        default:
          throw Error(w(329));
      }
    }
  }
  return we(e, X()), e.callbackNode === n ? Rc.bind(null, e) : null;
}
function ii(e, t) {
  var n = Yn;
  return (
    e.current.memoizedState.isDehydrated && (jt(e, t).flags |= 256),
    (e = yl(e, t)),
    e !== 2 && ((t = ve), (ve = n), t !== null && ui(t)),
    e
  );
}
function ui(e) {
  ve === null ? (ve = e) : ve.push.apply(ve, e);
}
function hp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!We(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function dt(e, t) {
  for (
    t &= ~Zi,
      t &= ~zl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Be(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function hs(e) {
  if (O & 6) throw Error(w(327));
  pn();
  var t = el(e, 0);
  if (!(t & 1)) return we(e, X()), null;
  var n = yl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = zo(e);
    r !== 0 && ((t = r), (n = ii(e, r)));
  }
  if (n === 1) throw ((n = fr), jt(e, 0), dt(e, t), we(e, X()), n);
  if (n === 6) throw Error(w(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    It(e, ve, Xe),
    we(e, X()),
    null
  );
}
function qi(e, t) {
  var n = O;
  O |= 1;
  try {
    return e(t);
  } finally {
    (O = n), O === 0 && ((wn = X() + 500), Pl && _t());
  }
}
function Vt(e) {
  pt !== null && pt.tag === 0 && !(O & 6) && pn();
  var t = O;
  O |= 1;
  var n = ze.transition,
    r = F;
  try {
    if (((ze.transition = null), (F = 1), e)) return e();
  } finally {
    (F = r), (ze.transition = n), (O = t), !(O & 6) && _t();
  }
}
function bi() {
  (xe = on.current), U(on);
}
function jt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Qf(n)), Z !== null))
    for (n = Z.return; n !== null; ) {
      var r = n;
      switch ((Li(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ol();
          break;
        case 3:
          yn(), U(ye), U(ae), Wi();
          break;
        case 5:
          Ui(r);
          break;
        case 4:
          yn();
          break;
        case 13:
          U(H);
          break;
        case 19:
          U(H);
          break;
        case 10:
          Fi(r.type._context);
          break;
        case 22:
        case 23:
          bi();
      }
      n = n.return;
    }
  if (
    ((ne = e),
    (Z = e = kt(e.current, null)),
    (le = xe = t),
    (q = 0),
    (fr = null),
    (Zi = zl = Wt = 0),
    (ve = Yn = null),
    Lt !== null)
  ) {
    for (t = 0; t < Lt.length; t++)
      if (((n = Lt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    Lt = null;
  }
  return e;
}
function Ic(e, t) {
  do {
    var n = Z;
    try {
      if ((Oi(), (Hr.current = ml), pl)) {
        for (var r = Q.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        pl = !1;
      }
      if (
        ((Ut = 0),
        (te = J = Q = null),
        (Kn = !1),
        (ar = 0),
        (Xi.current = null),
        n === null || n.return === null)
      ) {
        (q = 1), (fr = t), (Z = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          u = n,
          s = t;
        if (
          ((t = le),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var a = s,
            m = u,
            p = m.tag;
          if (!(m.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var f = m.alternate;
            f
              ? ((m.updateQueue = f.updateQueue),
                (m.memoizedState = f.memoizedState),
                (m.lanes = f.lanes))
              : ((m.updateQueue = null), (m.memoizedState = null));
          }
          var v = ns(i);
          if (v !== null) {
            (v.flags &= -257),
              rs(v, i, u, o, t),
              v.mode & 1 && ts(o, a, t),
              (t = v),
              (s = a);
            var g = t.updateQueue;
            if (g === null) {
              var S = new Set();
              S.add(s), (t.updateQueue = S);
            } else g.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              ts(o, a, t), eu();
              break e;
            }
            s = Error(w(426));
          }
        } else if (W && u.mode & 1) {
          var T = ns(i);
          if (T !== null) {
            !(T.flags & 65536) && (T.flags |= 256),
              rs(T, i, u, o, t),
              Mi(Sn(s, u));
            break e;
          }
        }
        (o = s = Sn(s, u)),
          q !== 4 && (q = 2),
          Yn === null ? (Yn = [o]) : Yn.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var d = mc(o, s, t);
              Yu(o, d);
              break e;
            case 1:
              u = s;
              var c = o.type,
                h = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (St === null || !St.has(h))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var y = hc(o, u, t);
                Yu(o, y);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Mc(n);
    } catch (C) {
      (t = C), Z === n && n !== null && (Z = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function zc() {
  var e = hl.current;
  return (hl.current = ml), e === null ? ml : e;
}
function eu() {
  (q === 0 || q === 3 || q === 2) && (q = 4),
    ne === null || (!(Wt & 268435455) && !(zl & 268435455)) || dt(ne, le);
}
function yl(e, t) {
  var n = O;
  O |= 2;
  var r = zc();
  (ne !== e || le !== t) && ((Xe = null), jt(e, t));
  do
    try {
      vp();
      break;
    } catch (l) {
      Ic(e, l);
    }
  while (1);
  if ((Oi(), (O = n), (hl.current = r), Z !== null)) throw Error(w(261));
  return (ne = null), (le = 0), q;
}
function vp() {
  for (; Z !== null; ) Lc(Z);
}
function gp() {
  for (; Z !== null && !Ud(); ) Lc(Z);
}
function Lc(e) {
  var t = Oc(e.alternate, e, xe);
  (e.memoizedProps = e.pendingProps),
    t === null ? Mc(e) : (Z = t),
    (Xi.current = null);
}
function Mc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = cp(n, t)), n !== null)) {
        (n.flags &= 32767), (Z = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (q = 6), (Z = null);
        return;
      }
    } else if (((n = ap(n, t, xe)), n !== null)) {
      Z = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Z = t;
      return;
    }
    Z = t = e;
  } while (t !== null);
  q === 0 && (q = 5);
}
function It(e, t, n) {
  var r = F,
    l = ze.transition;
  try {
    (ze.transition = null), (F = 1), yp(e, t, n, r);
  } finally {
    (ze.transition = l), (F = r);
  }
  return null;
}
function yp(e, t, n, r) {
  do pn();
  while (pt !== null);
  if (O & 6) throw Error(w(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(w(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Jd(e, o),
    e === ne && ((Z = ne = null), (le = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      jr ||
      ((jr = !0),
      Fc(br, function () {
        return pn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = ze.transition), (ze.transition = null);
    var i = F;
    F = 1;
    var u = O;
    (O |= 4),
      (Xi.current = null),
      fp(e, n),
      Pc(n, e),
      Df(Do),
      (tl = !!Fo),
      (Do = Fo = null),
      (e.current = n),
      pp(n),
      Wd(),
      (O = u),
      (F = i),
      (ze.transition = o);
  } else e.current = n;
  if (
    (jr && ((jr = !1), (pt = e), (gl = l)),
    (o = e.pendingLanes),
    o === 0 && (St = null),
    Qd(n.stateNode),
    we(e, X()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (vl) throw ((vl = !1), (e = li), (li = null), e);
  return (
    gl & 1 && e.tag !== 0 && pn(),
    (o = e.pendingLanes),
    o & 1 ? (e === oi ? Xn++ : ((Xn = 0), (oi = e))) : (Xn = 0),
    _t(),
    null
  );
}
function pn() {
  if (pt !== null) {
    var e = pa(gl),
      t = ze.transition,
      n = F;
    try {
      if (((ze.transition = null), (F = 16 > e ? 16 : e), pt === null))
        var r = !1;
      else {
        if (((e = pt), (pt = null), (gl = 0), O & 6)) throw Error(w(331));
        var l = O;
        for (O |= 4, _ = e.current; _ !== null; ) {
          var o = _,
            i = o.child;
          if (_.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (_ = a; _ !== null; ) {
                  var m = _;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Gn(8, m, o);
                  }
                  var p = m.child;
                  if (p !== null) (p.return = m), (_ = p);
                  else
                    for (; _ !== null; ) {
                      m = _;
                      var f = m.sibling,
                        v = m.return;
                      if (($c(m), m === a)) {
                        _ = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = v), (_ = f);
                        break;
                      }
                      _ = v;
                    }
                }
              }
              var g = o.alternate;
              if (g !== null) {
                var S = g.child;
                if (S !== null) {
                  g.child = null;
                  do {
                    var T = S.sibling;
                    (S.sibling = null), (S = T);
                  } while (S !== null);
                }
              }
              _ = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (_ = i);
          else
            e: for (; _ !== null; ) {
              if (((o = _), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Gn(9, o, o.return);
                }
              var d = o.sibling;
              if (d !== null) {
                (d.return = o.return), (_ = d);
                break e;
              }
              _ = o.return;
            }
        }
        var c = e.current;
        for (_ = c; _ !== null; ) {
          i = _;
          var h = i.child;
          if (i.subtreeFlags & 2064 && h !== null) (h.return = i), (_ = h);
          else
            e: for (i = c; _ !== null; ) {
              if (((u = _), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Il(9, u);
                  }
                } catch (C) {
                  G(u, u.return, C);
                }
              if (u === i) {
                _ = null;
                break e;
              }
              var y = u.sibling;
              if (y !== null) {
                (y.return = u.return), (_ = y);
                break e;
              }
              _ = u.return;
            }
        }
        if (
          ((O = l), _t(), Ke && typeof Ke.onPostCommitFiberRoot == "function")
        )
          try {
            Ke.onPostCommitFiberRoot(El, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (F = n), (ze.transition = t);
    }
  }
  return !1;
}
function vs(e, t, n) {
  (t = Sn(n, t)),
    (t = mc(e, t, 1)),
    (e = yt(e, t, 1)),
    (t = fe()),
    e !== null && (mr(e, 1, t), we(e, t));
}
function G(e, t, n) {
  if (e.tag === 3) vs(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        vs(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (St === null || !St.has(r)))
        ) {
          (e = Sn(n, e)),
            (e = hc(t, e, 1)),
            (t = yt(t, e, 1)),
            (e = fe()),
            t !== null && (mr(t, 1, e), we(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Sp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = fe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ne === e &&
      (le & n) === n &&
      (q === 4 || (q === 3 && (le & 130023424) === le && 500 > X() - Ji)
        ? jt(e, 0)
        : (Zi |= n)),
    we(e, t);
}
function jc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = $r), ($r <<= 1), !($r & 130023424) && ($r = 4194304))
      : (t = 1));
  var n = fe();
  (e = rt(e, t)), e !== null && (mr(e, t, n), we(e, n));
}
function wp(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), jc(e, n);
}
function kp(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(w(314));
  }
  r !== null && r.delete(t), jc(e, n);
}
var Oc;
Oc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ye.current) ge = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ge = !1), sp(e, t, n);
      ge = !!(e.flags & 131072);
    }
  else (ge = !1), W && t.flags & 1048576 && Aa(t, sl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Kr(e, t), (e = t.pendingProps);
      var l = hn(t, ae.current);
      fn(t, n), (l = Hi(null, t, r, e, l, n));
      var o = Qi();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Se(r) ? ((o = !0), il(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Ai(t),
            (l.updater = Tl),
            (t.stateNode = l),
            (l._reactInternals = t),
            Go(t, r, e, n),
            (t = Zo(null, t, r, !0, o, n)))
          : ((t.tag = 0), W && o && zi(t), de(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Kr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Ep(r)),
          (e = Fe(r, e)),
          l)
        ) {
          case 0:
            t = Xo(null, t, r, e, n);
            break e;
          case 1:
            t = is(null, t, r, e, n);
            break e;
          case 11:
            t = ls(null, t, r, e, n);
            break e;
          case 14:
            t = os(null, t, r, Fe(r.type, e), n);
            break e;
        }
        throw Error(w(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Fe(r, l)),
        Xo(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Fe(r, l)),
        is(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Sc(t), e === null)) throw Error(w(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          Va(e, t),
          dl(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = Sn(Error(w(423)), t)), (t = us(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = Sn(Error(w(424)), t)), (t = us(e, t, r, n, l));
            break e;
          } else
            for (
              Ee = gt(t.stateNode.containerInfo.firstChild),
                Ce = t,
                W = !0,
                Ae = null,
                n = Ga(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((vn(), r === l)) {
            t = lt(e, t, n);
            break e;
          }
          de(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Ya(t),
        e === null && Ho(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        Ao(r, l) ? (i = null) : o !== null && Ao(r, o) && (t.flags |= 32),
        yc(e, t),
        de(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Ho(t), null;
    case 13:
      return wc(e, t, n);
    case 4:
      return (
        Bi(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = gn(t, null, r, n)) : de(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Fe(r, l)),
        ls(e, t, r, l, n)
      );
    case 7:
      return de(e, t, t.pendingProps, n), t.child;
    case 8:
      return de(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return de(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          A(al, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (We(o.value, i)) {
            if (o.children === l.children && !ye.current) {
              t = lt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      (s = be(-1, n & -n)), (s.tag = 2);
                      var a = o.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var m = a.pending;
                        m === null
                          ? (s.next = s)
                          : ((s.next = m.next), (m.next = s)),
                          (a.pending = s);
                      }
                    }
                    (o.lanes |= n),
                      (s = o.alternate),
                      s !== null && (s.lanes |= n),
                      Qo(o.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(w(341));
                (i.lanes |= n),
                  (u = i.alternate),
                  u !== null && (u.lanes |= n),
                  Qo(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        de(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        fn(t, n),
        (l = Le(l)),
        (r = r(l)),
        (t.flags |= 1),
        de(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Fe(r, t.pendingProps)),
        (l = Fe(r.type, l)),
        os(e, t, r, l, n)
      );
    case 15:
      return vc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Fe(r, l)),
        Kr(e, t),
        (t.tag = 1),
        Se(r) ? ((e = !0), il(t)) : (e = !1),
        fn(t, n),
        Qa(t, r, l),
        Go(t, r, l, n),
        Zo(null, t, r, !0, e, n)
      );
    case 19:
      return kc(e, t, n);
    case 22:
      return gc(e, t, n);
  }
  throw Error(w(156, t.tag));
};
function Fc(e, t) {
  return aa(e, t);
}
function xp(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ie(e, t, n, r) {
  return new xp(e, t, n, r);
}
function tu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Ep(e) {
  if (typeof e == "function") return tu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === wi)) return 11;
    if (e === ki) return 14;
  }
  return 2;
}
function kt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ie(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Xr(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) tu(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Xt:
        return Ot(n.children, l, o, t);
      case Si:
        (i = 8), (l |= 8);
        break;
      case go:
        return (
          (e = Ie(12, n, t, l | 2)), (e.elementType = go), (e.lanes = o), e
        );
      case yo:
        return (e = Ie(13, n, t, l)), (e.elementType = yo), (e.lanes = o), e;
      case So:
        return (e = Ie(19, n, t, l)), (e.elementType = So), (e.lanes = o), e;
      case Ks:
        return Ll(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Hs:
              i = 10;
              break e;
            case Qs:
              i = 9;
              break e;
            case wi:
              i = 11;
              break e;
            case ki:
              i = 14;
              break e;
            case st:
              (i = 16), (r = null);
              break e;
          }
        throw Error(w(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ie(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Ot(e, t, n, r) {
  return (e = Ie(7, e, r, t)), (e.lanes = n), e;
}
function Ll(e, t, n, r) {
  return (
    (e = Ie(22, e, r, t)),
    (e.elementType = Ks),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function co(e, t, n) {
  return (e = Ie(6, e, null, t)), (e.lanes = n), e;
}
function fo(e, t, n) {
  return (
    (t = Ie(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Cp(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ql(0)),
    (this.expirationTimes = Ql(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ql(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function nu(e, t, n, r, l, o, i, u, s) {
  return (
    (e = new Cp(e, t, n, u, s)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Ie(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ai(o),
    e
  );
}
function $p(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Yt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Dc(e) {
  if (!e) return Et;
  e = e._reactInternals;
  e: {
    if (Qt(e) !== e || e.tag !== 1) throw Error(w(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Se(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(w(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Se(n)) return Fa(e, n, t);
  }
  return t;
}
function Ac(e, t, n, r, l, o, i, u, s) {
  return (
    (e = nu(n, r, !0, e, l, o, i, u, s)),
    (e.context = Dc(null)),
    (n = e.current),
    (r = fe()),
    (l = wt(n)),
    (o = be(r, l)),
    (o.callback = t ?? null),
    yt(n, o, l),
    (e.current.lanes = l),
    mr(e, l, r),
    we(e, r),
    e
  );
}
function Ml(e, t, n, r) {
  var l = t.current,
    o = fe(),
    i = wt(l);
  return (
    (n = Dc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = be(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = yt(l, t, i)),
    e !== null && (Ue(e, l, i, o), Vr(e, l, i)),
    i
  );
}
function Sl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function gs(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ru(e, t) {
  gs(e, t), (e = e.alternate) && gs(e, t);
}
function _p() {
  return null;
}
var Bc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function lu(e) {
  this._internalRoot = e;
}
jl.prototype.render = lu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(w(409));
  Ml(e, t, null, null);
};
jl.prototype.unmount = lu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Vt(function () {
      Ml(null, e, null, null);
    }),
      (t[nt] = null);
  }
};
function jl(e) {
  this._internalRoot = e;
}
jl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = va();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ct.length && t !== 0 && t < ct[n].priority; n++);
    ct.splice(n, 0, e), n === 0 && ya(e);
  }
};
function ou(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ol(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function ys() {}
function Np(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var a = Sl(i);
        o.call(a);
      };
    }
    var i = Ac(t, r, e, 0, null, !1, !1, "", ys);
    return (
      (e._reactRootContainer = i),
      (e[nt] = i.current),
      lr(e.nodeType === 8 ? e.parentNode : e),
      Vt(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var a = Sl(s);
      u.call(a);
    };
  }
  var s = nu(e, 0, !1, null, null, !1, !1, "", ys);
  return (
    (e._reactRootContainer = s),
    (e[nt] = s.current),
    lr(e.nodeType === 8 ? e.parentNode : e),
    Vt(function () {
      Ml(t, s, n, r);
    }),
    s
  );
}
function Fl(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = Sl(i);
        u.call(s);
      };
    }
    Ml(t, i, e, l);
  } else i = Np(n, t, e, l, r);
  return Sl(i);
}
ma = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Dn(t.pendingLanes);
        n !== 0 &&
          (Ci(t, n | 1), we(t, X()), !(O & 6) && ((wn = X() + 500), _t()));
      }
      break;
    case 13:
      Vt(function () {
        var r = rt(e, 1);
        if (r !== null) {
          var l = fe();
          Ue(r, e, 1, l);
        }
      }),
        ru(e, 1);
  }
};
$i = function (e) {
  if (e.tag === 13) {
    var t = rt(e, 134217728);
    if (t !== null) {
      var n = fe();
      Ue(t, e, 134217728, n);
    }
    ru(e, 134217728);
  }
};
ha = function (e) {
  if (e.tag === 13) {
    var t = wt(e),
      n = rt(e, t);
    if (n !== null) {
      var r = fe();
      Ue(n, e, t, r);
    }
    ru(e, t);
  }
};
va = function () {
  return F;
};
ga = function (e, t) {
  var n = F;
  try {
    return (F = e), t();
  } finally {
    F = n;
  }
};
To = function (e, t, n) {
  switch (t) {
    case "input":
      if ((xo(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Nl(r);
            if (!l) throw Error(w(90));
            Ys(r), xo(r, l);
          }
        }
      }
      break;
    case "textarea":
      Zs(e, n);
      break;
    case "select":
      (t = n.value), t != null && sn(e, !!n.multiple, t, !1);
  }
};
ra = qi;
la = Vt;
var Pp = { usingClientEntryPoint: !1, Events: [vr, bt, Nl, ta, na, qi] },
  Mn = {
    findFiberByHostInstance: zt,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Tp = {
    bundleType: Mn.bundleType,
    version: Mn.version,
    rendererPackageName: Mn.rendererPackageName,
    rendererConfig: Mn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: it.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = ua(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Mn.findFiberByHostInstance || _p,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Or = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Or.isDisabled && Or.supportsFiber)
    try {
      (El = Or.inject(Tp)), (Ke = Or);
    } catch {}
}
_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Pp;
_e.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ou(t)) throw Error(w(200));
  return $p(e, t, null, n);
};
_e.createRoot = function (e, t) {
  if (!ou(e)) throw Error(w(299));
  var n = !1,
    r = "",
    l = Bc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = nu(e, 1, !1, null, null, n, !1, r, l)),
    (e[nt] = t.current),
    lr(e.nodeType === 8 ? e.parentNode : e),
    new lu(t)
  );
};
_e.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(w(188))
      : ((e = Object.keys(e).join(",")), Error(w(268, e)));
  return (e = ua(t)), (e = e === null ? null : e.stateNode), e;
};
_e.flushSync = function (e) {
  return Vt(e);
};
_e.hydrate = function (e, t, n) {
  if (!Ol(t)) throw Error(w(200));
  return Fl(null, e, t, !0, n);
};
_e.hydrateRoot = function (e, t, n) {
  if (!ou(e)) throw Error(w(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = Bc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Ac(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[nt] = t.current),
    lr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new jl(t);
};
_e.render = function (e, t, n) {
  if (!Ol(t)) throw Error(w(200));
  return Fl(null, e, t, !1, n);
};
_e.unmountComponentAtNode = function (e) {
  if (!Ol(e)) throw Error(w(40));
  return e._reactRootContainer
    ? (Vt(function () {
        Fl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[nt] = null);
        });
      }),
      !0)
    : !1;
};
_e.unstable_batchedUpdates = qi;
_e.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ol(n)) throw Error(w(200));
  if (e == null || e._reactInternals === void 0) throw Error(w(38));
  return Fl(e, t, n, !1, r);
};
_e.version = "18.2.0-next-9e3b772b8-20220608";
function Uc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Uc);
    } catch (e) {
      console.error(e);
    }
}
Uc(), (As.exports = _e);
var Wc = As.exports,
  Ss = Wc;
(ho.createRoot = Ss.createRoot), (ho.hydrateRoot = Ss.hydrateRoot);
function Rp() {
  return I.jsx(I.Fragment, {
    children: I.jsxs("div", {
      className: "wrapper",
      children: [
        I.jsx("div", { className: "w-full h-[110px] bg-blue-300" }),
        I.jsx("div", {
          className: "profile",
          children: I.jsx("img", {
            src: "vite.svg",
            alt: "profile image",
            className: "w-[50px] ml-5 -translate-y-1/2",
          }),
        }),
      ],
    }),
  });
}
function Ip() {
  return I.jsx(I.Fragment, {
    children: I.jsxs("div", {
      className: "description-wrapper pt-0 p-5",
      children: [
        I.jsx("h3", {
          className: "name text-lg font-bold text-white/[.95]",
          children: "Charles Patterson",
        }),
        I.jsxs("div", {
          className: "text-[11.5px]",
          children: [
            I.jsx("p", {
              className: "text-dark-primary font-bold",
              children: "Description",
            }),
            I.jsx("p", {
              className: "text-dark-primary",
              children:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, obcaecati.",
            }),
          ],
        }),
        I.jsx("div", {}),
      ],
    }),
  });
}
function zp() {
  return I.jsxs(I.Fragment, { children: [I.jsx(Rp, {}), I.jsx(Ip, {})] });
}
function ke() {
  return (
    (ke = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ke.apply(this, arguments)
  );
}
function et(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (l) {
    if ((e == null || e(l), n === !1 || !l.defaultPrevented))
      return t == null ? void 0 : t(l);
  };
}
function iu(e, t = []) {
  let n = [];
  function r(o, i) {
    const u = k.createContext(i),
      s = n.length;
    n = [...n, i];
    function a(p) {
      const { scope: f, children: v, ...g } = p,
        S = (f == null ? void 0 : f[e][s]) || u,
        T = k.useMemo(() => g, Object.values(g));
      return k.createElement(S.Provider, { value: T }, v);
    }
    function m(p, f) {
      const v = (f == null ? void 0 : f[e][s]) || u,
        g = k.useContext(v);
      if (g) return g;
      if (i !== void 0) return i;
      throw new Error(`\`${p}\` must be used within \`${o}\``);
    }
    return (a.displayName = o + "Provider"), [a, m];
  }
  const l = () => {
    const o = n.map((i) => k.createContext(i));
    return function (u) {
      const s = (u == null ? void 0 : u[e]) || o;
      return k.useMemo(() => ({ [`__scope${e}`]: { ...u, [e]: s } }), [u, s]);
    };
  };
  return (l.scopeName = e), [r, Lp(l, ...t)];
}
function Lp(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((l) => ({ useScope: l(), scopeName: l.scopeName }));
    return function (o) {
      const i = r.reduce((u, { useScope: s, scopeName: a }) => {
        const p = s(o)[`__scope${a}`];
        return { ...u, ...p };
      }, {});
      return k.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
function Mp(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Vc(...e) {
  return (t) => e.forEach((n) => Mp(n, t));
}
function wl(...e) {
  return k.useCallback(Vc(...e), e);
}
const kl = k.forwardRef((e, t) => {
  const { children: n, ...r } = e,
    l = k.Children.toArray(n),
    o = l.find(Op);
  if (o) {
    const i = o.props.children,
      u = l.map((s) =>
        s === o
          ? k.Children.count(i) > 1
            ? k.Children.only(null)
            : k.isValidElement(i)
            ? i.props.children
            : null
          : s
      );
    return k.createElement(
      si,
      ke({}, r, { ref: t }),
      k.isValidElement(i) ? k.cloneElement(i, void 0, u) : null
    );
  }
  return k.createElement(si, ke({}, r, { ref: t }), n);
});
kl.displayName = "Slot";
const si = k.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  return k.isValidElement(n)
    ? k.cloneElement(n, { ...Fp(r, n.props), ref: t ? Vc(t, n.ref) : n.ref })
    : k.Children.count(n) > 1
    ? k.Children.only(null)
    : null;
});
si.displayName = "SlotClone";
const jp = ({ children: e }) => k.createElement(k.Fragment, null, e);
function Op(e) {
  return k.isValidElement(e) && e.type === jp;
}
function Fp(e, t) {
  const n = { ...t };
  for (const r in t) {
    const l = e[r],
      o = t[r];
    /^on[A-Z]/.test(r)
      ? l && o
        ? (n[r] = (...u) => {
            o(...u), l(...u);
          })
        : l && (n[r] = l)
      : r === "style"
      ? (n[r] = { ...l, ...o })
      : r === "className" && (n[r] = [l, o].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Dp(e) {
  const t = e + "CollectionProvider",
    [n, r] = iu(t),
    [l, o] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    i = (v) => {
      const { scope: g, children: S } = v,
        T = ee.useRef(null),
        d = ee.useRef(new Map()).current;
      return ee.createElement(l, { scope: g, itemMap: d, collectionRef: T }, S);
    },
    u = e + "CollectionSlot",
    s = ee.forwardRef((v, g) => {
      const { scope: S, children: T } = v,
        d = o(u, S),
        c = wl(g, d.collectionRef);
      return ee.createElement(kl, { ref: c }, T);
    }),
    a = e + "CollectionItemSlot",
    m = "data-radix-collection-item",
    p = ee.forwardRef((v, g) => {
      const { scope: S, children: T, ...d } = v,
        c = ee.useRef(null),
        h = wl(g, c),
        y = o(a, S);
      return (
        ee.useEffect(
          () => (
            y.itemMap.set(c, { ref: c, ...d }), () => void y.itemMap.delete(c)
          )
        ),
        ee.createElement(kl, { [m]: "", ref: h }, T)
      );
    });
  function f(v) {
    const g = o(e + "CollectionConsumer", v);
    return ee.useCallback(() => {
      const T = g.collectionRef.current;
      if (!T) return [];
      const d = Array.from(T.querySelectorAll(`[${m}]`));
      return Array.from(g.itemMap.values()).sort(
        (y, C) => d.indexOf(y.ref.current) - d.indexOf(C.ref.current)
      );
    }, [g.collectionRef, g.itemMap]);
  }
  return [{ Provider: i, Slot: s, ItemSlot: p }, f, r];
}
const ai =
    globalThis != null && globalThis.document ? k.useLayoutEffect : () => {},
  Ap = Sd["useId".toString()] || (() => {});
let Bp = 0;
function Hc(e) {
  const [t, n] = k.useState(Ap());
  return (
    ai(() => {
      e || n((r) => r ?? String(Bp++));
    }, [e]),
    e || (t ? `radix-${t}` : "")
  );
}
const Up = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul",
  ],
  Cn = Up.reduce((e, t) => {
    const n = k.forwardRef((r, l) => {
      const { asChild: o, ...i } = r,
        u = o ? kl : t;
      return (
        k.useEffect(() => {
          window[Symbol.for("radix-ui")] = !0;
        }, []),
        k.createElement(u, ke({}, i, { ref: l }))
      );
    });
    return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
  }, {});
function uu(e) {
  const t = k.useRef(e);
  return (
    k.useEffect(() => {
      t.current = e;
    }),
    k.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) === null || r === void 0
            ? void 0
            : r.call(t, ...n);
        },
      []
    )
  );
}
function Qc({ prop: e, defaultProp: t, onChange: n = () => {} }) {
  const [r, l] = Wp({ defaultProp: t, onChange: n }),
    o = e !== void 0,
    i = o ? e : r,
    u = uu(n),
    s = k.useCallback(
      (a) => {
        if (o) {
          const p = typeof a == "function" ? a(e) : a;
          p !== e && u(p);
        } else l(a);
      },
      [o, e, l, u]
    );
  return [i, s];
}
function Wp({ defaultProp: e, onChange: t }) {
  const n = k.useState(e),
    [r] = n,
    l = k.useRef(r),
    o = uu(t);
  return (
    k.useEffect(() => {
      l.current !== r && (o(r), (l.current = r));
    }, [r, l, o]),
    n
  );
}
const Vp = k.createContext(void 0);
function Kc(e) {
  const t = k.useContext(Vp);
  return e || t || "ltr";
}
const po = "rovingFocusGroup.onEntryFocus",
  Hp = { bubbles: !1, cancelable: !0 },
  su = "RovingFocusGroup",
  [ci, Gc, Qp] = Dp(su),
  [Kp, Yc] = iu(su, [Qp]),
  [Gp, Yp] = Kp(su),
  Xp = k.forwardRef((e, t) =>
    k.createElement(
      ci.Provider,
      { scope: e.__scopeRovingFocusGroup },
      k.createElement(
        ci.Slot,
        { scope: e.__scopeRovingFocusGroup },
        k.createElement(Zp, ke({}, e, { ref: t }))
      )
    )
  ),
  Zp = k.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: n,
        orientation: r,
        loop: l = !1,
        dir: o,
        currentTabStopId: i,
        defaultCurrentTabStopId: u,
        onCurrentTabStopIdChange: s,
        onEntryFocus: a,
        ...m
      } = e,
      p = k.useRef(null),
      f = wl(t, p),
      v = Kc(o),
      [g = null, S] = Qc({ prop: i, defaultProp: u, onChange: s }),
      [T, d] = k.useState(!1),
      c = uu(a),
      h = Gc(n),
      y = k.useRef(!1),
      [C, E] = k.useState(0);
    return (
      k.useEffect(() => {
        const x = p.current;
        if (x)
          return x.addEventListener(po, c), () => x.removeEventListener(po, c);
      }, [c]),
      k.createElement(
        Gp,
        {
          scope: n,
          orientation: r,
          dir: v,
          loop: l,
          currentTabStopId: g,
          onItemFocus: k.useCallback((x) => S(x), [S]),
          onItemShiftTab: k.useCallback(() => d(!0), []),
          onFocusableItemAdd: k.useCallback(() => E((x) => x + 1), []),
          onFocusableItemRemove: k.useCallback(() => E((x) => x - 1), []),
        },
        k.createElement(
          Cn.div,
          ke({ tabIndex: T || C === 0 ? -1 : 0, "data-orientation": r }, m, {
            ref: f,
            style: { outline: "none", ...e.style },
            onMouseDown: et(e.onMouseDown, () => {
              y.current = !0;
            }),
            onFocus: et(e.onFocus, (x) => {
              const N = !y.current;
              if (x.target === x.currentTarget && N && !T) {
                const j = new CustomEvent(po, Hp);
                if ((x.currentTarget.dispatchEvent(j), !j.defaultPrevented)) {
                  const R = h().filter((Pe) => Pe.focusable),
                    V = R.find((Pe) => Pe.active),
                    he = R.find((Pe) => Pe.id === g),
                    Ye = [V, he, ...R]
                      .filter(Boolean)
                      .map((Pe) => Pe.ref.current);
                  Xc(Ye);
                }
              }
              y.current = !1;
            }),
            onBlur: et(e.onBlur, () => d(!1)),
          })
        )
      )
    );
  }),
  Jp = "RovingFocusGroupItem",
  qp = k.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: n,
        focusable: r = !0,
        active: l = !1,
        tabStopId: o,
        ...i
      } = e,
      u = Hc(),
      s = o || u,
      a = Yp(Jp, n),
      m = a.currentTabStopId === s,
      p = Gc(n),
      { onFocusableItemAdd: f, onFocusableItemRemove: v } = a;
    return (
      k.useEffect(() => {
        if (r) return f(), () => v();
      }, [r, f, v]),
      k.createElement(
        ci.ItemSlot,
        { scope: n, id: s, focusable: r, active: l },
        k.createElement(
          Cn.span,
          ke({ tabIndex: m ? 0 : -1, "data-orientation": a.orientation }, i, {
            ref: t,
            onMouseDown: et(e.onMouseDown, (g) => {
              r ? a.onItemFocus(s) : g.preventDefault();
            }),
            onFocus: et(e.onFocus, () => a.onItemFocus(s)),
            onKeyDown: et(e.onKeyDown, (g) => {
              if (g.key === "Tab" && g.shiftKey) {
                a.onItemShiftTab();
                return;
              }
              if (g.target !== g.currentTarget) return;
              const S = tm(g, a.orientation, a.dir);
              if (S !== void 0) {
                g.preventDefault();
                let d = p()
                  .filter((c) => c.focusable)
                  .map((c) => c.ref.current);
                if (S === "last") d.reverse();
                else if (S === "prev" || S === "next") {
                  S === "prev" && d.reverse();
                  const c = d.indexOf(g.currentTarget);
                  d = a.loop ? nm(d, c + 1) : d.slice(c + 1);
                }
                setTimeout(() => Xc(d));
              }
            }),
          })
        )
      )
    );
  }),
  bp = {
    ArrowLeft: "prev",
    ArrowUp: "prev",
    ArrowRight: "next",
    ArrowDown: "next",
    PageUp: "first",
    Home: "first",
    PageDown: "last",
    End: "last",
  };
function em(e, t) {
  return t !== "rtl"
    ? e
    : e === "ArrowLeft"
    ? "ArrowRight"
    : e === "ArrowRight"
    ? "ArrowLeft"
    : e;
}
function tm(e, t, n) {
  const r = em(e.key, n);
  if (
    !(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) &&
    !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r))
  )
    return bp[r];
}
function Xc(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function nm(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
const rm = Xp,
  lm = qp;
function om(e, t) {
  return k.useReducer((n, r) => {
    const l = t[n][r];
    return l ?? n;
  }, e);
}
const Zc = (e) => {
  const { present: t, children: n } = e,
    r = im(t),
    l =
      typeof n == "function" ? n({ present: r.isPresent }) : k.Children.only(n),
    o = wl(r.ref, l.ref);
  return typeof n == "function" || r.isPresent
    ? k.cloneElement(l, { ref: o })
    : null;
};
Zc.displayName = "Presence";
function im(e) {
  const [t, n] = k.useState(),
    r = k.useRef({}),
    l = k.useRef(e),
    o = k.useRef("none"),
    i = e ? "mounted" : "unmounted",
    [u, s] = om(i, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    k.useEffect(() => {
      const a = Fr(r.current);
      o.current = u === "mounted" ? a : "none";
    }, [u]),
    ai(() => {
      const a = r.current,
        m = l.current;
      if (m !== e) {
        const f = o.current,
          v = Fr(a);
        e
          ? s("MOUNT")
          : v === "none" || (a == null ? void 0 : a.display) === "none"
          ? s("UNMOUNT")
          : s(m && f !== v ? "ANIMATION_OUT" : "UNMOUNT"),
          (l.current = e);
      }
    }, [e, s]),
    ai(() => {
      if (t) {
        const a = (p) => {
            const v = Fr(r.current).includes(p.animationName);
            p.target === t && v && Wc.flushSync(() => s("ANIMATION_END"));
          },
          m = (p) => {
            p.target === t && (o.current = Fr(r.current));
          };
        return (
          t.addEventListener("animationstart", m),
          t.addEventListener("animationcancel", a),
          t.addEventListener("animationend", a),
          () => {
            t.removeEventListener("animationstart", m),
              t.removeEventListener("animationcancel", a),
              t.removeEventListener("animationend", a);
          }
        );
      } else s("ANIMATION_END");
    }, [t, s]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(u),
      ref: k.useCallback((a) => {
        a && (r.current = getComputedStyle(a)), n(a);
      }, []),
    }
  );
}
function Fr(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
const Jc = "Tabs",
  [um, nh] = iu(Jc, [Yc]),
  qc = Yc(),
  [sm, au] = um(Jc),
  am = k.forwardRef((e, t) => {
    const {
        __scopeTabs: n,
        value: r,
        onValueChange: l,
        defaultValue: o,
        orientation: i = "horizontal",
        dir: u,
        activationMode: s = "automatic",
        ...a
      } = e,
      m = Kc(u),
      [p, f] = Qc({ prop: r, onChange: l, defaultProp: o });
    return k.createElement(
      sm,
      {
        scope: n,
        baseId: Hc(),
        value: p,
        onValueChange: f,
        orientation: i,
        dir: m,
        activationMode: s,
      },
      k.createElement(
        Cn.div,
        ke({ dir: m, "data-orientation": i }, a, { ref: t })
      )
    );
  }),
  cm = "TabsList",
  dm = k.forwardRef((e, t) => {
    const { __scopeTabs: n, loop: r = !0, ...l } = e,
      o = au(cm, n),
      i = qc(n);
    return k.createElement(
      rm,
      ke({ asChild: !0 }, i, {
        orientation: o.orientation,
        dir: o.dir,
        loop: r,
      }),
      k.createElement(
        Cn.div,
        ke({ role: "tablist", "aria-orientation": o.orientation }, l, {
          ref: t,
        })
      )
    );
  }),
  fm = "TabsTrigger",
  pm = k.forwardRef((e, t) => {
    const { __scopeTabs: n, value: r, disabled: l = !1, ...o } = e,
      i = au(fm, n),
      u = qc(n),
      s = bc(i.baseId, r),
      a = ed(i.baseId, r),
      m = r === i.value;
    return k.createElement(
      lm,
      ke({ asChild: !0 }, u, { focusable: !l, active: m }),
      k.createElement(
        Cn.button,
        ke(
          {
            type: "button",
            role: "tab",
            "aria-selected": m,
            "aria-controls": a,
            "data-state": m ? "active" : "inactive",
            "data-disabled": l ? "" : void 0,
            disabled: l,
            id: s,
          },
          o,
          {
            ref: t,
            onMouseDown: et(e.onMouseDown, (p) => {
              !l && p.button === 0 && p.ctrlKey === !1
                ? i.onValueChange(r)
                : p.preventDefault();
            }),
            onKeyDown: et(e.onKeyDown, (p) => {
              [" ", "Enter"].includes(p.key) && i.onValueChange(r);
            }),
            onFocus: et(e.onFocus, () => {
              const p = i.activationMode !== "manual";
              !m && !l && p && i.onValueChange(r);
            }),
          }
        )
      )
    );
  }),
  mm = "TabsContent",
  hm = k.forwardRef((e, t) => {
    const { __scopeTabs: n, value: r, forceMount: l, children: o, ...i } = e,
      u = au(mm, n),
      s = bc(u.baseId, r),
      a = ed(u.baseId, r),
      m = r === u.value,
      p = k.useRef(m);
    return (
      k.useEffect(() => {
        const f = requestAnimationFrame(() => (p.current = !1));
        return () => cancelAnimationFrame(f);
      }, []),
      k.createElement(Zc, { present: l || m }, ({ present: f }) =>
        k.createElement(
          Cn.div,
          ke(
            {
              "data-state": m ? "active" : "inactive",
              "data-orientation": u.orientation,
              role: "tabpanel",
              "aria-labelledby": s,
              hidden: !f,
              id: a,
              tabIndex: 0,
            },
            i,
            {
              ref: t,
              style: {
                ...e.style,
                animationDuration: p.current ? "0s" : void 0,
              },
            }
          ),
          f && o
        )
      )
    );
  });
function bc(e, t) {
  return `${e}-trigger-${t}`;
}
function ed(e, t) {
  return `${e}-content-${t}`;
}
const vm = am,
  gm = dm,
  ym = pm,
  Sm = hm;
var D = "colors",
  ce = "sizes",
  P = "space",
  wm = {
    gap: P,
    gridGap: P,
    columnGap: P,
    gridColumnGap: P,
    rowGap: P,
    gridRowGap: P,
    inset: P,
    insetBlock: P,
    insetBlockEnd: P,
    insetBlockStart: P,
    insetInline: P,
    insetInlineEnd: P,
    insetInlineStart: P,
    margin: P,
    marginTop: P,
    marginRight: P,
    marginBottom: P,
    marginLeft: P,
    marginBlock: P,
    marginBlockEnd: P,
    marginBlockStart: P,
    marginInline: P,
    marginInlineEnd: P,
    marginInlineStart: P,
    padding: P,
    paddingTop: P,
    paddingRight: P,
    paddingBottom: P,
    paddingLeft: P,
    paddingBlock: P,
    paddingBlockEnd: P,
    paddingBlockStart: P,
    paddingInline: P,
    paddingInlineEnd: P,
    paddingInlineStart: P,
    top: P,
    right: P,
    bottom: P,
    left: P,
    scrollMargin: P,
    scrollMarginTop: P,
    scrollMarginRight: P,
    scrollMarginBottom: P,
    scrollMarginLeft: P,
    scrollMarginX: P,
    scrollMarginY: P,
    scrollMarginBlock: P,
    scrollMarginBlockEnd: P,
    scrollMarginBlockStart: P,
    scrollMarginInline: P,
    scrollMarginInlineEnd: P,
    scrollMarginInlineStart: P,
    scrollPadding: P,
    scrollPaddingTop: P,
    scrollPaddingRight: P,
    scrollPaddingBottom: P,
    scrollPaddingLeft: P,
    scrollPaddingX: P,
    scrollPaddingY: P,
    scrollPaddingBlock: P,
    scrollPaddingBlockEnd: P,
    scrollPaddingBlockStart: P,
    scrollPaddingInline: P,
    scrollPaddingInlineEnd: P,
    scrollPaddingInlineStart: P,
    fontSize: "fontSizes",
    background: D,
    backgroundColor: D,
    backgroundImage: D,
    borderImage: D,
    border: D,
    borderBlock: D,
    borderBlockEnd: D,
    borderBlockStart: D,
    borderBottom: D,
    borderBottomColor: D,
    borderColor: D,
    borderInline: D,
    borderInlineEnd: D,
    borderInlineStart: D,
    borderLeft: D,
    borderLeftColor: D,
    borderRight: D,
    borderRightColor: D,
    borderTop: D,
    borderTopColor: D,
    caretColor: D,
    color: D,
    columnRuleColor: D,
    fill: D,
    outline: D,
    outlineColor: D,
    stroke: D,
    textDecorationColor: D,
    fontFamily: "fonts",
    fontWeight: "fontWeights",
    lineHeight: "lineHeights",
    letterSpacing: "letterSpacings",
    blockSize: ce,
    minBlockSize: ce,
    maxBlockSize: ce,
    inlineSize: ce,
    minInlineSize: ce,
    maxInlineSize: ce,
    width: ce,
    minWidth: ce,
    maxWidth: ce,
    height: ce,
    minHeight: ce,
    maxHeight: ce,
    flexBasis: ce,
    gridTemplateColumns: ce,
    gridTemplateRows: ce,
    borderWidth: "borderWidths",
    borderTopWidth: "borderWidths",
    borderRightWidth: "borderWidths",
    borderBottomWidth: "borderWidths",
    borderLeftWidth: "borderWidths",
    borderStyle: "borderStyles",
    borderTopStyle: "borderStyles",
    borderRightStyle: "borderStyles",
    borderBottomStyle: "borderStyles",
    borderLeftStyle: "borderStyles",
    borderRadius: "radii",
    borderTopLeftRadius: "radii",
    borderTopRightRadius: "radii",
    borderBottomRightRadius: "radii",
    borderBottomLeftRadius: "radii",
    boxShadow: "shadows",
    textShadow: "shadows",
    transition: "transitions",
    zIndex: "zIndices",
  },
  km = (e, t) =>
    typeof t == "function" ? { "()": Function.prototype.toString.call(t) } : t,
  $n = () => {
    const e = Object.create(null);
    return (t, n, ...r) => {
      const l = ((o) => JSON.stringify(o, km))(t);
      return l in e ? e[l] : (e[l] = n(t, ...r));
    };
  },
  Ft = Symbol.for("sxs.internal"),
  cu = (e, t) =>
    Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)),
  ws = (e) => {
    for (const t in e) return !0;
    return !1;
  },
  { hasOwnProperty: xm } = Object.prototype,
  di = (e) =>
    e.includes("-") ? e : e.replace(/[A-Z]/g, (t) => "-" + t.toLowerCase()),
  Em = /\s+(?![^()]*\))/,
  Gt = (e) => (t) => e(...(typeof t == "string" ? String(t).split(Em) : [t])),
  ks = {
    appearance: (e) => ({ WebkitAppearance: e, appearance: e }),
    backfaceVisibility: (e) => ({
      WebkitBackfaceVisibility: e,
      backfaceVisibility: e,
    }),
    backdropFilter: (e) => ({ WebkitBackdropFilter: e, backdropFilter: e }),
    backgroundClip: (e) => ({ WebkitBackgroundClip: e, backgroundClip: e }),
    boxDecorationBreak: (e) => ({
      WebkitBoxDecorationBreak: e,
      boxDecorationBreak: e,
    }),
    clipPath: (e) => ({ WebkitClipPath: e, clipPath: e }),
    content: (e) => ({
      content:
        e.includes('"') ||
        e.includes("'") ||
        /^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(
          e
        )
          ? e
          : `"${e}"`,
    }),
    hyphens: (e) => ({ WebkitHyphens: e, hyphens: e }),
    maskImage: (e) => ({ WebkitMaskImage: e, maskImage: e }),
    maskSize: (e) => ({ WebkitMaskSize: e, maskSize: e }),
    tabSize: (e) => ({ MozTabSize: e, tabSize: e }),
    textSizeAdjust: (e) => ({ WebkitTextSizeAdjust: e, textSizeAdjust: e }),
    userSelect: (e) => ({ WebkitUserSelect: e, userSelect: e }),
    marginBlock: Gt((e, t) => ({
      marginBlockStart: e,
      marginBlockEnd: t || e,
    })),
    marginInline: Gt((e, t) => ({
      marginInlineStart: e,
      marginInlineEnd: t || e,
    })),
    maxSize: Gt((e, t) => ({ maxBlockSize: e, maxInlineSize: t || e })),
    minSize: Gt((e, t) => ({ minBlockSize: e, minInlineSize: t || e })),
    paddingBlock: Gt((e, t) => ({
      paddingBlockStart: e,
      paddingBlockEnd: t || e,
    })),
    paddingInline: Gt((e, t) => ({
      paddingInlineStart: e,
      paddingInlineEnd: t || e,
    })),
  },
  mo = /([\d.]+)([^]*)/,
  Cm = (e, t) =>
    e.length
      ? e.reduce(
          (n, r) => (
            n.push(
              ...t.map((l) =>
                l.includes("&")
                  ? l.replace(
                      /&/g,
                      /[ +>|~]/.test(r) && /&.*&/.test(l) ? `:is(${r})` : r
                    )
                  : r + " " + l
              )
            ),
            n
          ),
          []
        )
      : t,
  $m = (e, t) =>
    e in _m && typeof t == "string"
      ? t.replace(
          /^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,
          (n, r, l, o) =>
            r +
            (l === "stretch"
              ? `-moz-available${o};${di(e)}:${r}-webkit-fill-available`
              : `-moz-fit-content${o};${di(e)}:${r}fit-content`) +
            o
        )
      : String(t),
  _m = {
    blockSize: 1,
    height: 1,
    inlineSize: 1,
    maxBlockSize: 1,
    maxHeight: 1,
    maxInlineSize: 1,
    maxWidth: 1,
    minBlockSize: 1,
    minHeight: 1,
    minInlineSize: 1,
    minWidth: 1,
    width: 1,
  },
  ot = (e) => (e ? e + "-" : ""),
  td = (e, t, n) =>
    e.replace(
      /([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,
      (r, l, o, i, u) =>
        (i == "$") == !!o
          ? r
          : (l || i == "--" ? "calc(" : "") +
            "var(--" +
            (i === "$"
              ? ot(t) + (u.includes("$") ? "" : ot(n)) + u.replace(/\$/g, "-")
              : u) +
            ")" +
            (l || i == "--" ? "*" + (l || "") + (o || "1") + ")" : "")
    ),
  Nm = /\s*,\s*(?![^()]*\))/,
  Pm = Object.prototype.toString,
  un = (e, t, n, r, l) => {
    let o, i, u;
    const s = (a, m, p) => {
      let f, v;
      const g = (S) => {
        for (f in S) {
          const c = f.charCodeAt(0) === 64,
            h = c && Array.isArray(S[f]) ? S[f] : [S[f]];
          for (v of h) {
            const y = /[A-Z]/.test((d = f))
                ? d
                : d.replace(/-[^]/g, (E) => E[1].toUpperCase()),
              C =
                typeof v == "object" &&
                v &&
                v.toString === Pm &&
                (!r.utils[y] || !m.length);
            if (y in r.utils && !C) {
              const E = r.utils[y];
              if (E !== i) {
                (i = E), g(E(v)), (i = null);
                continue;
              }
            } else if (y in ks) {
              const E = ks[y];
              if (E !== u) {
                (u = E), g(E(v)), (u = null);
                continue;
              }
            }
            if (
              (c &&
                ((T =
                  f.slice(1) in r.media ? "@media " + r.media[f.slice(1)] : f),
                (f = T.replace(
                  /\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,
                  (E, x, N, j, R, V) => {
                    const he = mo.test(x),
                      je = 0.0625 * (he ? -1 : 1),
                      [Ye, Pe] = he ? [j, x] : [x, j];
                    return (
                      "(" +
                      (N[0] === "="
                        ? ""
                        : (N[0] === ">") === he
                        ? "max-"
                        : "min-") +
                      Ye +
                      ":" +
                      (N[0] !== "=" && N.length === 1
                        ? Pe.replace(
                            mo,
                            (_n, Nt, $) =>
                              Number(Nt) + je * (N === ">" ? 1 : -1) + $
                          )
                        : Pe) +
                      (R
                        ? ") and (" +
                          (R[0] === ">" ? "min-" : "max-") +
                          Ye +
                          ":" +
                          (R.length === 1
                            ? V.replace(
                                mo,
                                (_n, Nt, $) =>
                                  Number(Nt) + je * (R === ">" ? -1 : 1) + $
                              )
                            : V)
                        : "") +
                      ")"
                    );
                  }
                ))),
              C)
            ) {
              const E = c ? p.concat(f) : [...p],
                x = c ? [...m] : Cm(m, f.split(Nm));
              o !== void 0 && l(xs(...o)), (o = void 0), s(v, x, E);
            } else
              o === void 0 && (o = [[], m, p]),
                (f =
                  c || f.charCodeAt(0) !== 36
                    ? f
                    : `--${ot(r.prefix)}${f.slice(1).replace(/\$/g, "-")}`),
                (v = C
                  ? v
                  : typeof v == "number"
                  ? v && y in Tm
                    ? String(v) + "px"
                    : String(v)
                  : td($m(y, v ?? ""), r.prefix, r.themeMap[y])),
                o[0].push(`${c ? `${f} ` : `${di(f)}:`}${v}`);
          }
        }
        var T, d;
      };
      g(a), o !== void 0 && l(xs(...o)), (o = void 0);
    };
    s(e, t, n);
  },
  xs = (e, t, n) =>
    `${n.map((r) => `${r}{`).join("")}${
      t.length ? `${t.join(",")}{` : ""
    }${e.join(";")}${t.length ? "}" : ""}${Array(
      n.length ? n.length + 1 : 0
    ).join("}")}`,
  Tm = {
    animationDelay: 1,
    animationDuration: 1,
    backgroundSize: 1,
    blockSize: 1,
    border: 1,
    borderBlock: 1,
    borderBlockEnd: 1,
    borderBlockEndWidth: 1,
    borderBlockStart: 1,
    borderBlockStartWidth: 1,
    borderBlockWidth: 1,
    borderBottom: 1,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
    borderBottomWidth: 1,
    borderEndEndRadius: 1,
    borderEndStartRadius: 1,
    borderInlineEnd: 1,
    borderInlineEndWidth: 1,
    borderInlineStart: 1,
    borderInlineStartWidth: 1,
    borderInlineWidth: 1,
    borderLeft: 1,
    borderLeftWidth: 1,
    borderRadius: 1,
    borderRight: 1,
    borderRightWidth: 1,
    borderSpacing: 1,
    borderStartEndRadius: 1,
    borderStartStartRadius: 1,
    borderTop: 1,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    borderTopWidth: 1,
    borderWidth: 1,
    bottom: 1,
    columnGap: 1,
    columnRule: 1,
    columnRuleWidth: 1,
    columnWidth: 1,
    containIntrinsicSize: 1,
    flexBasis: 1,
    fontSize: 1,
    gap: 1,
    gridAutoColumns: 1,
    gridAutoRows: 1,
    gridTemplateColumns: 1,
    gridTemplateRows: 1,
    height: 1,
    inlineSize: 1,
    inset: 1,
    insetBlock: 1,
    insetBlockEnd: 1,
    insetBlockStart: 1,
    insetInline: 1,
    insetInlineEnd: 1,
    insetInlineStart: 1,
    left: 1,
    letterSpacing: 1,
    margin: 1,
    marginBlock: 1,
    marginBlockEnd: 1,
    marginBlockStart: 1,
    marginBottom: 1,
    marginInline: 1,
    marginInlineEnd: 1,
    marginInlineStart: 1,
    marginLeft: 1,
    marginRight: 1,
    marginTop: 1,
    maxBlockSize: 1,
    maxHeight: 1,
    maxInlineSize: 1,
    maxWidth: 1,
    minBlockSize: 1,
    minHeight: 1,
    minInlineSize: 1,
    minWidth: 1,
    offsetDistance: 1,
    offsetRotate: 1,
    outline: 1,
    outlineOffset: 1,
    outlineWidth: 1,
    overflowClipMargin: 1,
    padding: 1,
    paddingBlock: 1,
    paddingBlockEnd: 1,
    paddingBlockStart: 1,
    paddingBottom: 1,
    paddingInline: 1,
    paddingInlineEnd: 1,
    paddingInlineStart: 1,
    paddingLeft: 1,
    paddingRight: 1,
    paddingTop: 1,
    perspective: 1,
    right: 1,
    rowGap: 1,
    scrollMargin: 1,
    scrollMarginBlock: 1,
    scrollMarginBlockEnd: 1,
    scrollMarginBlockStart: 1,
    scrollMarginBottom: 1,
    scrollMarginInline: 1,
    scrollMarginInlineEnd: 1,
    scrollMarginInlineStart: 1,
    scrollMarginLeft: 1,
    scrollMarginRight: 1,
    scrollMarginTop: 1,
    scrollPadding: 1,
    scrollPaddingBlock: 1,
    scrollPaddingBlockEnd: 1,
    scrollPaddingBlockStart: 1,
    scrollPaddingBottom: 1,
    scrollPaddingInline: 1,
    scrollPaddingInlineEnd: 1,
    scrollPaddingInlineStart: 1,
    scrollPaddingLeft: 1,
    scrollPaddingRight: 1,
    scrollPaddingTop: 1,
    shapeMargin: 1,
    textDecoration: 1,
    textDecorationThickness: 1,
    textIndent: 1,
    textUnderlineOffset: 1,
    top: 1,
    transitionDelay: 1,
    transitionDuration: 1,
    verticalAlign: 1,
    width: 1,
    wordSpacing: 1,
  },
  Es = (e) => String.fromCharCode(e + (e > 25 ? 39 : 97)),
  Dt = (e) =>
    ((t) => {
      let n,
        r = "";
      for (n = Math.abs(t); n > 52; n = (n / 52) | 0) r = Es(n % 52) + r;
      return Es(n % 52) + r;
    })(
      ((t, n) => {
        let r = n.length;
        for (; r; ) t = (33 * t) ^ n.charCodeAt(--r);
        return t;
      })(5381, JSON.stringify(e)) >>> 0
    ),
  Bn = [
    "themed",
    "global",
    "styled",
    "onevar",
    "resonevar",
    "allvar",
    "inline",
  ],
  Rm = (e) => {
    if (e.href && !e.href.startsWith(location.origin)) return !1;
    try {
      return !!e.cssRules;
    } catch {
      return !1;
    }
  },
  Im = (e) => {
    let t;
    const n = () => {
        const { cssRules: l } = t.sheet;
        return [].map
          .call(l, (o, i) => {
            const { cssText: u } = o;
            let s = "";
            if (u.startsWith("--sxs")) return "";
            if (l[i - 1] && (s = l[i - 1].cssText).startsWith("--sxs")) {
              if (!o.cssRules.length) return "";
              for (const a in t.rules)
                if (t.rules[a].group === o)
                  return `--sxs{--sxs:${[...t.rules[a].cache].join(" ")}}${u}`;
              return o.cssRules.length ? `${s}${u}` : "";
            }
            return u;
          })
          .join("");
      },
      r = () => {
        if (t) {
          const { rules: u, sheet: s } = t;
          if (!s.deleteRule) {
            for (; Object(Object(s.cssRules)[0]).type === 3; )
              s.cssRules.splice(0, 1);
            s.cssRules = [];
          }
          for (const a in u) delete u[a];
        }
        const l = Object(e).styleSheets || [];
        for (const u of l)
          if (Rm(u)) {
            for (let s = 0, a = u.cssRules; a[s]; ++s) {
              const m = Object(a[s]);
              if (m.type !== 1) continue;
              const p = Object(a[s + 1]);
              if (p.type !== 4) continue;
              ++s;
              const { cssText: f } = m;
              if (!f.startsWith("--sxs")) continue;
              const v = f.slice(14, -3).trim().split(/\s+/),
                g = Bn[v[0]];
              g &&
                (t || (t = { sheet: u, reset: r, rules: {}, toString: n }),
                (t.rules[g] = { group: p, index: s, cache: new Set(v) }));
            }
            if (t) break;
          }
        if (!t) {
          const u = (s, a) => ({
            type: a,
            cssRules: [],
            insertRule(m, p) {
              this.cssRules.splice(
                p,
                0,
                u(
                  m,
                  { import: 3, undefined: 1 }[
                    (m.toLowerCase().match(/^@([a-z]+)/) || [])[1]
                  ] || 4
                )
              );
            },
            get cssText() {
              return s === "@media{}"
                ? `@media{${[].map
                    .call(this.cssRules, (m) => m.cssText)
                    .join("")}}`
                : s;
            },
          });
          t = {
            sheet: e
              ? (e.head || e).appendChild(document.createElement("style")).sheet
              : u("", "text/css"),
            rules: {},
            reset: r,
            toString: n,
          };
        }
        const { sheet: o, rules: i } = t;
        for (let u = Bn.length - 1; u >= 0; --u) {
          const s = Bn[u];
          if (!i[s]) {
            const a = Bn[u + 1],
              m = i[a] ? i[a].index : o.cssRules.length;
            o.insertRule("@media{}", m),
              o.insertRule(`--sxs{--sxs:${u}}`, m),
              (i[s] = {
                group: o.cssRules[m + 1],
                index: m,
                cache: new Set([u]),
              });
          }
          zm(i[s]);
        }
      };
    return r(), t;
  },
  zm = (e) => {
    const t = e.group;
    let n = t.cssRules.length;
    e.apply = (r) => {
      try {
        t.insertRule(r, n), ++n;
      } catch {}
    };
  },
  jn = Symbol(),
  Lm = $n(),
  Cs = (e, t) =>
    Lm(e, () => (...n) => {
      let r = { type: null, composers: new Set() };
      for (const l of n)
        if (l != null)
          if (l[Ft]) {
            r.type == null && (r.type = l[Ft].type);
            for (const o of l[Ft].composers) r.composers.add(o);
          } else
            l.constructor !== Object || l.$$typeof
              ? r.type == null && (r.type = l)
              : r.composers.add(Mm(l, e));
      return (
        r.type == null && (r.type = "span"),
        r.composers.size || r.composers.add(["PJLV", {}, [], [], {}, []]),
        jm(e, r, t)
      );
    }),
  Mm = ({ variants: e, compoundVariants: t, defaultVariants: n, ...r }, l) => {
    const o = `${ot(l.prefix)}c-${Dt(r)}`,
      i = [],
      u = [],
      s = Object.create(null),
      a = [];
    for (const f in n) s[f] = String(n[f]);
    if (typeof e == "object" && e)
      for (const f in e) {
        (m = s), (p = f), xm.call(m, p) || (s[f] = "undefined");
        const v = e[f];
        for (const g in v) {
          const S = { [f]: String(g) };
          String(g) === "undefined" && a.push(f);
          const T = v[g],
            d = [S, T, !ws(T)];
          i.push(d);
        }
      }
    var m, p;
    if (typeof t == "object" && t)
      for (const f of t) {
        let { css: v, ...g } = f;
        v = (typeof v == "object" && v) || {};
        for (const T in g) g[T] = String(g[T]);
        const S = [g, v, !ws(v)];
        u.push(S);
      }
    return [o, r, i, u, s, a];
  },
  jm = (e, t, n) => {
    const [r, l, o, i] = Om(t.composers),
      u =
        typeof t.type == "function" || t.type.$$typeof
          ? ((p) => {
              function f() {
                for (let v = 0; v < f[jn].length; v++) {
                  const [g, S] = f[jn][v];
                  p.rules[g].apply(S);
                }
                return (f[jn] = []), null;
              }
              return (
                (f[jn] = []),
                (f.rules = {}),
                Bn.forEach(
                  (v) => (f.rules[v] = { apply: (g) => f[jn].push([v, g]) })
                ),
                f
              );
            })(n)
          : null,
      s = (u || n).rules,
      a = `.${r}${l.length > 1 ? `:where(.${l.slice(1).join(".")})` : ""}`,
      m = (p) => {
        p = (typeof p == "object" && p) || Fm;
        const { css: f, ...v } = p,
          g = {};
        for (const d in o)
          if ((delete v[d], d in p)) {
            let c = p[d];
            typeof c == "object" && c
              ? (g[d] = { "@initial": o[d], ...c })
              : ((c = String(c)),
                (g[d] = c !== "undefined" || i.has(d) ? c : o[d]));
          } else g[d] = o[d];
        const S = new Set([...l]);
        for (const [d, c, h, y] of t.composers) {
          n.rules.styled.cache.has(d) ||
            (n.rules.styled.cache.add(d),
            un(c, [`.${d}`], [], e, (x) => {
              s.styled.apply(x);
            }));
          const C = $s(h, g, e.media),
            E = $s(y, g, e.media, !0);
          for (const x of C)
            if (x !== void 0)
              for (const [N, j, R] of x) {
                const V = `${d}-${Dt(j)}-${N}`;
                S.add(V);
                const he = (R ? n.rules.resonevar : n.rules.onevar).cache,
                  je = R ? s.resonevar : s.onevar;
                he.has(V) ||
                  (he.add(V),
                  un(j, [`.${V}`], [], e, (Ye) => {
                    je.apply(Ye);
                  }));
              }
          for (const x of E)
            if (x !== void 0)
              for (const [N, j] of x) {
                const R = `${d}-${Dt(j)}-${N}`;
                S.add(R),
                  n.rules.allvar.cache.has(R) ||
                    (n.rules.allvar.cache.add(R),
                    un(j, [`.${R}`], [], e, (V) => {
                      s.allvar.apply(V);
                    }));
              }
        }
        if (typeof f == "object" && f) {
          const d = `${r}-i${Dt(f)}-css`;
          S.add(d),
            n.rules.inline.cache.has(d) ||
              (n.rules.inline.cache.add(d),
              un(f, [`.${d}`], [], e, (c) => {
                s.inline.apply(c);
              }));
        }
        for (const d of String(p.className || "")
          .trim()
          .split(/\s+/))
          d && S.add(d);
        const T = (v.className = [...S].join(" "));
        return {
          type: t.type,
          className: T,
          selector: a,
          props: v,
          toString: () => T,
          deferredInjector: u,
        };
      };
    return cu(m, {
      className: r,
      selector: a,
      [Ft]: t,
      toString: () => (n.rules.styled.cache.has(r) || m(), r),
    });
  },
  Om = (e) => {
    let t = "";
    const n = [],
      r = {},
      l = [];
    for (const [o, , , , i, u] of e) {
      t === "" && (t = o), n.push(o), l.push(...u);
      for (const s in i) {
        const a = i[s];
        (r[s] === void 0 || a !== "undefined" || u.includes(a)) && (r[s] = a);
      }
    }
    return [t, n, r, new Set(l)];
  },
  $s = (e, t, n, r) => {
    const l = [];
    e: for (let [o, i, u] of e) {
      if (u) continue;
      let s,
        a = 0,
        m = !1;
      for (s in o) {
        const p = o[s];
        let f = t[s];
        if (f !== p) {
          if (typeof f != "object" || !f) continue e;
          {
            let v,
              g,
              S = 0;
            for (const T in f) {
              if (p === String(f[T])) {
                if (T !== "@initial") {
                  const d = T.slice(1);
                  (g = g || []).push(
                    d in n ? n[d] : T.replace(/^@media ?/, "")
                  ),
                    (m = !0);
                }
                (a += S), (v = !0);
              }
              ++S;
            }
            if ((g && g.length && (i = { ["@media " + g.join(", ")]: i }), !v))
              continue e;
          }
        }
      }
      (l[a] = l[a] || []).push([r ? "cv" : `${s}-${o[s]}`, i, m]);
    }
    return l;
  },
  Fm = {},
  Dm = $n(),
  Am = (e, t) =>
    Dm(e, () => (...n) => {
      const r = () => {
        for (let l of n) {
          l = (typeof l == "object" && l) || {};
          let o = Dt(l);
          if (!t.rules.global.cache.has(o)) {
            if ((t.rules.global.cache.add(o), "@import" in l)) {
              let i =
                [].indexOf.call(t.sheet.cssRules, t.rules.themed.group) - 1;
              for (let u of [].concat(l["@import"]))
                (u = u.includes('"') || u.includes("'") ? u : `"${u}"`),
                  t.sheet.insertRule(`@import ${u};`, i++);
              delete l["@import"];
            }
            un(l, [], [], e, (i) => {
              t.rules.global.apply(i);
            });
          }
        }
        return "";
      };
      return cu(r, { toString: r });
    }),
  Bm = $n(),
  Um = (e, t) =>
    Bm(e, () => (n) => {
      const r = `${ot(e.prefix)}k-${Dt(n)}`,
        l = () => {
          if (!t.rules.global.cache.has(r)) {
            t.rules.global.cache.add(r);
            const o = [];
            un(n, [], [], e, (u) => o.push(u));
            const i = `@keyframes ${r}{${o.join("")}}`;
            t.rules.global.apply(i);
          }
          return r;
        };
      return cu(l, {
        get name() {
          return l();
        },
        toString: l,
      });
    }),
  Wm = class {
    constructor(e, t, n, r) {
      (this.token = e == null ? "" : String(e)),
        (this.value = t == null ? "" : String(t)),
        (this.scale = n == null ? "" : String(n)),
        (this.prefix = r == null ? "" : String(r));
    }
    get computedValue() {
      return "var(" + this.variable + ")";
    }
    get variable() {
      return "--" + ot(this.prefix) + ot(this.scale) + this.token;
    }
    toString() {
      return this.computedValue;
    }
  },
  Vm = $n(),
  Hm = (e, t) =>
    Vm(e, () => (n, r) => {
      r = (typeof n == "object" && n) || Object(r);
      const l = `.${(n =
          (n = typeof n == "string" ? n : "") || `${ot(e.prefix)}t-${Dt(r)}`)}`,
        o = {},
        i = [];
      for (const s in r) {
        o[s] = {};
        for (const a in r[s]) {
          const m = `--${ot(e.prefix)}${s}-${a}`,
            p = td(String(r[s][a]), e.prefix, s);
          (o[s][a] = new Wm(a, p, s, e.prefix)), i.push(`${m}:${p}`);
        }
      }
      const u = () => {
        if (i.length && !t.rules.themed.cache.has(n)) {
          t.rules.themed.cache.add(n);
          const s = `${r === e.theme ? ":root," : ""}.${n}{${i.join(";")}}`;
          t.rules.themed.apply(s);
        }
        return n;
      };
      return {
        ...o,
        get className() {
          return u();
        },
        selector: l,
        toString: u,
      };
    }),
  Qm = $n(),
  _s,
  Km = $n(),
  Gm = (e) => {
    const t = ((n) => {
      let r = !1;
      const l = Qm(n, (o) => {
        r = !0;
        const i =
            "prefix" in (o = (typeof o == "object" && o) || {})
              ? String(o.prefix)
              : "",
          u = (typeof o.media == "object" && o.media) || {},
          s =
            typeof o.root == "object"
              ? o.root || null
              : globalThis.document || null,
          a = (typeof o.theme == "object" && o.theme) || {},
          m = {
            prefix: i,
            media: u,
            theme: a,
            themeMap: (typeof o.themeMap == "object" && o.themeMap) || {
              ...wm,
            },
            utils: (typeof o.utils == "object" && o.utils) || {},
          },
          p = Im(s),
          f = {
            css: Cs(m, p),
            globalCss: Am(m, p),
            keyframes: Um(m, p),
            createTheme: Hm(m, p),
            reset() {
              p.reset(), f.theme.toString();
            },
            theme: {},
            sheet: p,
            config: m,
            prefix: i,
            getCssText: p.toString,
            toString: p.toString,
          };
        return String((f.theme = f.createTheme(a))), f;
      });
      return r || l.reset(), l;
    })(e);
    return (
      (t.styled = (({ config: n, sheet: r }) =>
        Km(n, () => {
          const l = Cs(n, r);
          return (...o) => {
            const i = l(...o),
              u = i[Ft].type,
              s = ee.forwardRef((a, m) => {
                const p = (a && a.as) || u,
                  { props: f, deferredInjector: v } = i(a);
                return (
                  delete f.as,
                  (f.ref = m),
                  v
                    ? ee.createElement(
                        ee.Fragment,
                        null,
                        ee.createElement(p, f),
                        ee.createElement(v, null)
                      )
                    : ee.createElement(p, f)
                );
              });
            return (
              (s.className = i.className),
              (s.displayName = `Styled.${u.displayName || u.name || u}`),
              (s.selector = i.selector),
              (s.toString = () => i.selector),
              (s[Ft] = i[Ft]),
              s
            );
          };
        }))(t)),
      t
    );
  },
  Ym = () => _s || (_s = Gm()),
  Dl = (...e) => Ym().styled(...e);
const Xm = {
    mauve1: "#fdfcfd",
    mauve2: "#faf9fb",
    mauve3: "#f2eff3",
    mauve4: "#eae7ec",
    mauve5: "#e3dfe6",
    mauve6: "#dbd8e0",
    mauve7: "#d0cdd7",
    mauve8: "#bcbac7",
    mauve9: "#8e8c99",
    mauve10: "#84828e",
    mauve11: "#65636d",
    mauve12: "#211f26",
  },
  Zm = {
    violet1: "#fdfcfe",
    violet2: "#faf8ff",
    violet3: "#f4f0fe",
    violet4: "#ebe4ff",
    violet5: "#e1d9ff",
    violet6: "#d4cafe",
    violet7: "#c2b5f5",
    violet8: "#aa99ec",
    violet9: "#6e56cf",
    violet10: "#654dc4",
    violet11: "#6550b9",
    violet12: "#2f265f",
  },
  Jm = () =>
    I.jsxs(qm, {
      defaultValue: "tab1",
      className: "border-t border-gray-500 max-w-5xl",
      children: [
        I.jsxs(bm, {
          "aria-label": "Manage your account",
          className: "m-auto",
          children: [
            I.jsx(Ns, {
              value: "tab1",
              className: "bg-white/0",
              children: "Profile",
            }),
            I.jsx(Ns, {
              value: "tab2",
              className: "bg-white/0",
              children: "Thread",
            }),
          ],
        }),
        I.jsx(Ps, {
          value: "tab1",
          className: "border-t border-gray-500",
          children: I.jsxs("div", {
            className: "wrapper",
            children: [
              I.jsx("h3", {
                className: "text-base mb-2 text-white/[.9] font-bold",
                children: " About ",
              }),
              I.jsxs("p", {
                className: "text-[11.5px] text-white/[.4] max-w-[618px]",
                children: [
                  "Hi I'm Rong Liew - Cofounder & CEO working on Showwcase. Showwcase is a professional network built for anyone Who codes to connect, share knowledge, and find new opportunities. Our mission is to maximize the career opportunities for tech workers. We are focused on achieving this via great developer representation, fostering a great community, and opening up access to new job opportunities. You can follow me on",
                  I.jsxs("a", {
                    href: "#",
                    className: "link",
                    children: [" ", "Twitter,", " "],
                  }),
                  I.jsxs("a", {
                    href: "",
                    className: "link",
                    children: ["LinkedIn,", " "],
                  }),
                  " ",
                  "and of course,",
                  I.jsxs("a", {
                    href: "#",
                    className: "link",
                    children: [" ", "Showwcase"],
                  }),
                  ". Previously collaborated with",
                ],
              }),
            ],
          }),
        }),
        I.jsx(Ps, {
          value: "tab2",
          className: "Tab2 border-t border-gray-500",
          children: I.jsxs("div", {
            className: "wrapper space-y-5",
            children: [
              I.jsxs("div", {
                className: "card bg-slate-800 rounded-md",
                children: [
                  I.jsx("p", {
                    className:
                      "text-base text-white/[.9] font-bold p-4 py-3 bg-blue-900 rounded-tl-md rounded-tr-md",
                    children: "Tweet 1",
                  }),
                  I.jsx("div", {
                    className: "text-[11px] text-dark-primary",
                    children: I.jsx("p", {
                      className:
                        "p-4 bg-[#101023] rounded-bl-md rounded-br-md max-w-[618px]",
                      children:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis qui dicta cum consequuntur incidunt dolores.",
                    }),
                  }),
                ],
              }),
              I.jsxs("div", {
                className: "card bg-slate-800 rounded-md",
                children: [
                  I.jsx("p", {
                    className:
                      "text-base text-white/[.9] font-bold p-4 py-3 bg-red-900 rounded-tl-md rounded-tr-md",
                    children: "Tweet 2",
                  }),
                  I.jsx("div", {
                    className: "text-[11px] text-dark-primary",
                    children: I.jsx("p", {
                      className:
                        "p-4 bg-[#101023] rounded-bl-md rounded-br-md max-w-[618px]",
                      children:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis qui dicta cum consequuntur incidunt dolores.",
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    }),
  qm = Dl(vm, { display: "flex", flexDirection: "column", height: "600px" }),
  bm = Dl(gm, {
    flexShrink: 0,
    display: "flex",
    maxWidth: "300px",
    backgroundColor: "transparent !important",
    borderBottom: "1px solid transparent",
  }),
  Ns = Dl(ym, {
    all: "unset",
    fontFamily: "inherit",
    padding: "0 20px",
    height: 45,
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 12,
    lineHeight: 1,
    color: Xm.mauve11,
    userSelect: "none",
    "&:hover": { color: Zm.violet11 },
    '&[data-state="active"]': {
      color: "white",
      borderBottom: "2px solid white",
    },
  }),
  Ps = Dl(Sm, {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#26272b",
    outline: "none",
  });
function eh() {
  return I.jsx(I.Fragment, {
    children: I.jsx("div", { className: "wrapper", children: I.jsx(Jm, {}) }),
  });
}
function th() {
  return I.jsx(I.Fragment, {
    children: I.jsxs("div", {
      className: "App bg-bg-dark-background max-w-6xl relative md:min-w-768px",
      children: [
        I.jsx(zp, {}),
        I.jsx(eh, {}),
        I.jsx("div", {
          className:
            "absolute px-4 py-1 pb-[7px] rounded-md text-white bg-black top-1 right-1 shadow-lg",
          children: I.jsx("a", {
            href: "./src/pages/about.html",
            className: "text-blue-500 hover:underline text-[11px]",
            children: "About page",
          }),
        }),
      ],
    }),
  });
}
ho.createRoot(document.getElementById("root")).render(
  I.jsx(ee.StrictMode, { children: I.jsx(th, {}) })
);
