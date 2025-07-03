var Ch = Object.defineProperty;
var Ih = (r, e, t) => e in r ? Ch(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var vi = (r, e, t) => Ih(r, typeof e != "symbol" ? e + "" : e, t);
var fs = function() {
  return fs = Object.assign || function(e) {
    for (var t, n = 1, i = arguments.length; n < i; n++) {
      t = arguments[n];
      for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
    }
    return e;
  }, fs.apply(this, arguments);
};
function Te(r, e, t, n) {
  function i(s) {
    return s instanceof t ? s : new t(function(o) {
      o(s);
    });
  }
  return new (t || (t = Promise))(function(s, o) {
    function a(c) {
      try {
        u(n.next(c));
      } catch (f) {
        o(f);
      }
    }
    function l(c) {
      try {
        u(n.throw(c));
      } catch (f) {
        o(f);
      }
    }
    function u(c) {
      c.done ? s(c.value) : i(c.value).then(a, l);
    }
    u((n = n.apply(r, e || [])).next());
  });
}
function De(r, e) {
  var t = { label: 0, sent: function() {
    if (s[0] & 1) throw s[1];
    return s[1];
  }, trys: [], ops: [] }, n, i, s, o = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return o.next = a(0), o.throw = a(1), o.return = a(2), typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function a(u) {
    return function(c) {
      return l([u, c]);
    };
  }
  function l(u) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; o && (o = 0, u[0] && (t = 0)), t; ) try {
      if (n = 1, i && (s = u[0] & 2 ? i.return : u[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) && !(s = s.call(i, u[1])).done) return s;
      switch (i = 0, s && (u = [u[0] & 2, s.value]), u[0]) {
        case 0:
        case 1:
          s = u;
          break;
        case 4:
          return t.label++, { value: u[1], done: !1 };
        case 5:
          t.label++, i = u[1], u = [0];
          continue;
        case 7:
          u = t.ops.pop(), t.trys.pop();
          continue;
        default:
          if (s = t.trys, !(s = s.length > 0 && s[s.length - 1]) && (u[0] === 6 || u[0] === 2)) {
            t = 0;
            continue;
          }
          if (u[0] === 3 && (!s || u[1] > s[0] && u[1] < s[3])) {
            t.label = u[1];
            break;
          }
          if (u[0] === 6 && t.label < s[1]) {
            t.label = s[1], s = u;
            break;
          }
          if (s && t.label < s[2]) {
            t.label = s[2], t.ops.push(u);
            break;
          }
          s[2] && t.ops.pop(), t.trys.pop();
          continue;
      }
      u = e.call(r, t);
    } catch (c) {
      u = [6, c], i = 0;
    } finally {
      n = s = 0;
    }
    if (u[0] & 5) throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
function vu(r, e, t) {
  if (t || arguments.length === 2) for (var n = 0, i = e.length, s; n < i; n++)
    (s || !(n in e)) && (s || (s = Array.prototype.slice.call(e, 0, n)), s[n] = e[n]);
  return r.concat(s || Array.prototype.slice.call(e));
}
var bu = "4.5.1";
function Pn(r, e) {
  return new Promise(function(t) {
    return setTimeout(t, r, e);
  });
}
function Ah() {
  return new Promise(function(r) {
    var e = new MessageChannel();
    e.port1.onmessage = function() {
      return r();
    }, e.port2.postMessage(null);
  });
}
function Eh(r, e) {
  e === void 0 && (e = 1 / 0);
  var t = window.requestIdleCallback;
  return t ? new Promise(function(n) {
    return t.call(window, function() {
      return n();
    }, { timeout: e });
  }) : Pn(Math.min(r, e));
}
function Su(r) {
  return !!r && typeof r.then == "function";
}
function Ko(r, e) {
  try {
    var t = r();
    Su(t) ? t.then(function(n) {
      return e(!0, n);
    }, function(n) {
      return e(!1, n);
    }) : e(!0, t);
  } catch (n) {
    e(!1, n);
  }
}
function qo(r, e, t) {
  return t === void 0 && (t = 16), Te(this, void 0, void 0, function() {
    var n, i, s, o;
    return De(this, function(a) {
      switch (a.label) {
        case 0:
          n = Array(r.length), i = Date.now(), s = 0, a.label = 1;
        case 1:
          return s < r.length ? (n[s] = e(r[s], s), o = Date.now(), o >= i + t ? (i = o, [4, Ah()]) : [3, 3]) : [3, 4];
        case 2:
          a.sent(), a.label = 3;
        case 3:
          return ++s, [3, 1];
        case 4:
          return [2, n];
      }
    });
  });
}
function ar(r) {
  return r.then(void 0, function() {
  }), r;
}
function Rh(r, e) {
  for (var t = 0, n = r.length; t < n; ++t)
    if (r[t] === e)
      return !0;
  return !1;
}
function kh(r, e) {
  return !Rh(r, e);
}
function ao(r) {
  return parseInt(r);
}
function xe(r) {
  return parseFloat(r);
}
function Ue(r, e) {
  return typeof r == "number" && isNaN(r) ? e : r;
}
function ue(r) {
  return r.reduce(function(e, t) {
    return e + (t ? 1 : 0);
  }, 0);
}
function _u(r, e) {
  if (e === void 0 && (e = 1), Math.abs(e) >= 1)
    return Math.round(r / e) * e;
  var t = 1 / e;
  return Math.round(r * t) / t;
}
function Oh(r) {
  for (var e, t, n = "Unexpected syntax '".concat(r, "'"), i = /^\s*([a-z-]*)(.*)$/i.exec(r), s = i[1] || void 0, o = {}, a = /([.:#][\w-]+|\[.+?\])/gi, l = function(d, h) {
    o[d] = o[d] || [], o[d].push(h);
  }; ; ) {
    var u = a.exec(i[2]);
    if (!u)
      break;
    var c = u[0];
    switch (c[0]) {
      case ".":
        l("class", c.slice(1));
        break;
      case "#":
        l("id", c.slice(1));
        break;
      case "[": {
        var f = /^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(c);
        if (f)
          l(f[1], (t = (e = f[4]) !== null && e !== void 0 ? e : f[5]) !== null && t !== void 0 ? t : "");
        else
          throw new Error(n);
        break;
      }
      default:
        throw new Error(n);
    }
  }
  return [s, o];
}
function Mh(r) {
  for (var e = new Uint8Array(r.length), t = 0; t < r.length; t++) {
    var n = r.charCodeAt(t);
    if (n > 127)
      return new TextEncoder().encode(r);
    e[t] = n;
  }
  return e;
}
function Ge(r, e) {
  var t = r[0] >>> 16, n = r[0] & 65535, i = r[1] >>> 16, s = r[1] & 65535, o = e[0] >>> 16, a = e[0] & 65535, l = e[1] >>> 16, u = e[1] & 65535, c = 0, f = 0, d = 0, h = 0;
  h += s + u, d += h >>> 16, h &= 65535, d += i + l, f += d >>> 16, d &= 65535, f += n + a, c += f >>> 16, f &= 65535, c += t + o, c &= 65535, r[0] = c << 16 | f, r[1] = d << 16 | h;
}
function we(r, e) {
  var t = r[0] >>> 16, n = r[0] & 65535, i = r[1] >>> 16, s = r[1] & 65535, o = e[0] >>> 16, a = e[0] & 65535, l = e[1] >>> 16, u = e[1] & 65535, c = 0, f = 0, d = 0, h = 0;
  h += s * u, d += h >>> 16, h &= 65535, d += i * u, f += d >>> 16, d &= 65535, d += s * l, f += d >>> 16, d &= 65535, f += n * u, c += f >>> 16, f &= 65535, f += i * l, c += f >>> 16, f &= 65535, f += s * a, c += f >>> 16, f &= 65535, c += t * u + n * l + i * a + s * o, c &= 65535, r[0] = c << 16 | f, r[1] = d << 16 | h;
}
function gt(r, e) {
  var t = r[0];
  e %= 64, e === 32 ? (r[0] = r[1], r[1] = t) : e < 32 ? (r[0] = t << e | r[1] >>> 32 - e, r[1] = r[1] << e | t >>> 32 - e) : (e -= 32, r[0] = r[1] << e | t >>> 32 - e, r[1] = t << e | r[1] >>> 32 - e);
}
function he(r, e) {
  e %= 64, e !== 0 && (e < 32 ? (r[0] = r[1] >>> 32 - e, r[1] = r[1] << e) : (r[0] = r[1] << e - 32, r[1] = 0));
}
function V(r, e) {
  r[0] ^= e[0], r[1] ^= e[1];
}
var $h = [4283543511, 3981806797], Ph = [3301882366, 444984403];
function Qo(r) {
  var e = [0, r[0] >>> 1];
  V(r, e), we(r, $h), e[1] = r[0] >>> 1, V(r, e), we(r, Ph), e[1] = r[0] >>> 1, V(r, e);
}
var Gr = [2277735313, 289559509], Vr = [1291169091, 658871167], ea = [0, 5], Nh = [0, 1390208809], Lh = [0, 944331445];
function Th(r, e) {
  var t = Mh(r);
  e = e || 0;
  var n = [0, t.length], i = n[1] % 16, s = n[1] - i, o = [0, e], a = [0, e], l = [0, 0], u = [0, 0], c;
  for (c = 0; c < s; c = c + 16)
    l[0] = t[c + 4] | t[c + 5] << 8 | t[c + 6] << 16 | t[c + 7] << 24, l[1] = t[c] | t[c + 1] << 8 | t[c + 2] << 16 | t[c + 3] << 24, u[0] = t[c + 12] | t[c + 13] << 8 | t[c + 14] << 16 | t[c + 15] << 24, u[1] = t[c + 8] | t[c + 9] << 8 | t[c + 10] << 16 | t[c + 11] << 24, we(l, Gr), gt(l, 31), we(l, Vr), V(o, l), gt(o, 27), Ge(o, a), we(o, ea), Ge(o, Nh), we(u, Vr), gt(u, 33), we(u, Gr), V(a, u), gt(a, 31), Ge(a, o), we(a, ea), Ge(a, Lh);
  l[0] = 0, l[1] = 0, u[0] = 0, u[1] = 0;
  var f = [0, 0];
  switch (i) {
    case 15:
      f[1] = t[c + 14], he(f, 48), V(u, f);
    case 14:
      f[1] = t[c + 13], he(f, 40), V(u, f);
    case 13:
      f[1] = t[c + 12], he(f, 32), V(u, f);
    case 12:
      f[1] = t[c + 11], he(f, 24), V(u, f);
    case 11:
      f[1] = t[c + 10], he(f, 16), V(u, f);
    case 10:
      f[1] = t[c + 9], he(f, 8), V(u, f);
    case 9:
      f[1] = t[c + 8], V(u, f), we(u, Vr), gt(u, 33), we(u, Gr), V(a, u);
    case 8:
      f[1] = t[c + 7], he(f, 56), V(l, f);
    case 7:
      f[1] = t[c + 6], he(f, 48), V(l, f);
    case 6:
      f[1] = t[c + 5], he(f, 40), V(l, f);
    case 5:
      f[1] = t[c + 4], he(f, 32), V(l, f);
    case 4:
      f[1] = t[c + 3], he(f, 24), V(l, f);
    case 3:
      f[1] = t[c + 2], he(f, 16), V(l, f);
    case 2:
      f[1] = t[c + 1], he(f, 8), V(l, f);
    case 1:
      f[1] = t[c], V(l, f), we(l, Gr), gt(l, 31), we(l, Vr), V(o, l);
  }
  return V(o, n), V(a, n), Ge(o, a), Ge(a, o), Qo(o), Qo(a), Ge(o, a), Ge(a, o), ("00000000" + (o[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (o[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (a[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (a[1] >>> 0).toString(16)).slice(-8);
}
function Dh(r) {
  var e;
  return fs({ name: r.name, message: r.message, stack: (e = r.stack) === null || e === void 0 ? void 0 : e.split(`
`) }, r);
}
function Fh(r) {
  return /^function\s.*?\{\s*\[native code]\s*}$/.test(String(r));
}
function zh(r) {
  return typeof r != "function";
}
function Uh(r, e) {
  var t = ar(new Promise(function(n) {
    var i = Date.now();
    Ko(r.bind(null, e), function() {
      for (var s = [], o = 0; o < arguments.length; o++)
        s[o] = arguments[o];
      var a = Date.now() - i;
      if (!s[0])
        return n(function() {
          return { error: s[1], duration: a };
        });
      var l = s[1];
      if (zh(l))
        return n(function() {
          return { value: l, duration: a };
        });
      n(function() {
        return new Promise(function(u) {
          var c = Date.now();
          Ko(l, function() {
            for (var f = [], d = 0; d < arguments.length; d++)
              f[d] = arguments[d];
            var h = a + Date.now() - c;
            if (!f[0])
              return u({ error: f[1], duration: h });
            u({ value: f[1], duration: h });
          });
        });
      });
    });
  }));
  return function() {
    return t.then(function(i) {
      return i();
    });
  };
}
function Bh(r, e, t, n) {
  var i = Object.keys(r).filter(function(o) {
    return kh(t, o);
  }), s = ar(qo(i, function(o) {
    return Uh(r[o], e);
  }, n));
  return function() {
    return Te(this, void 0, void 0, function() {
      var a, l, u, c, f;
      return De(this, function(d) {
        switch (d.label) {
          case 0:
            return [4, s];
          case 1:
            return a = d.sent(), [4, qo(a, function(h) {
              return ar(h());
            }, n)];
          case 2:
            return l = d.sent(), [
              4,
              Promise.all(l)
              // Keeping the component keys order the same as the source keys order
            ];
          case 3:
            for (u = d.sent(), c = {}, f = 0; f < i.length; ++f)
              c[i[f]] = u[f];
            return [2, c];
        }
      });
    });
  };
}
function xu() {
  var r = window, e = navigator;
  return ue([
    "MSCSSMatrix" in r,
    "msSetImmediate" in r,
    "msIndexedDB" in r,
    "msMaxTouchPoints" in e,
    "msPointerEnabled" in e
  ]) >= 4;
}
function Wh() {
  var r = window, e = navigator;
  return ue(["msWriteProfilerMark" in r, "MSStream" in r, "msLaunchUri" in e, "msSaveBlob" in e]) >= 3 && !xu();
}
function Er() {
  var r = window, e = navigator;
  return ue([
    "webkitPersistentStorage" in e,
    "webkitTemporaryStorage" in e,
    e.vendor.indexOf("Google") === 0,
    "webkitResolveLocalFileSystemURL" in r,
    "BatteryManager" in r,
    "webkitMediaStream" in r,
    "webkitSpeechGrammar" in r
  ]) >= 5;
}
function Ce() {
  var r = window, e = navigator;
  return ue([
    "ApplePayError" in r,
    "CSSPrimitiveValue" in r,
    "Counter" in r,
    e.vendor.indexOf("Apple") === 0,
    "RGBColor" in r,
    "WebKitMediaKeys" in r
  ]) >= 4;
}
function lo() {
  var r = window, e = r.HTMLElement, t = r.Document;
  return ue([
    "safari" in r,
    !("ongestureend" in r),
    !("TouchEvent" in r),
    !("orientation" in r),
    e && !("autocapitalize" in e.prototype),
    t && "pointerLockElement" in t.prototype
  ]) >= 4;
}
function Rr() {
  var r = window;
  return (
    // Filters-out Chrome, Yandex, DuckDuckGo (macOS and iOS), Edge
    Fh(r.print) && // Doesn't work in Safari < 15.4
    String(r.browser) === "[object WebPageNamespace]"
  );
}
function Cu() {
  var r, e, t = window;
  return ue([
    "buildID" in navigator,
    "MozAppearance" in ((e = (r = document.documentElement) === null || r === void 0 ? void 0 : r.style) !== null && e !== void 0 ? e : {}),
    "onmozfullscreenchange" in t,
    "mozInnerScreenX" in t,
    "CSSMozDocumentRule" in t,
    "CanvasCaptureMediaStream" in t
  ]) >= 4;
}
function Zh() {
  var r = window;
  return ue([
    !("MediaSettingsRange" in r),
    "RTCEncodedAudioFrame" in r,
    "" + r.Intl == "[object Intl]",
    "" + r.Reflect == "[object Reflect]"
  ]) >= 3;
}
function jh() {
  var r = window, e = r.URLPattern;
  return ue([
    "union" in Set.prototype,
    "Iterator" in r,
    e && "hasRegExpGroups" in e.prototype,
    "RGB8" in WebGLRenderingContext.prototype
  ]) >= 3;
}
function Gh() {
  var r = window;
  return ue([
    "DOMRectList" in r,
    "RTCPeerConnectionIceEvent" in r,
    "SVGGeometryElement" in r,
    "ontransitioncancel" in r
  ]) >= 3;
}
function kr() {
  var r = window, e = navigator, t = r.CSS, n = r.HTMLButtonElement;
  return ue([
    !("getStorageUpdates" in e),
    n && "popover" in n.prototype,
    "CSSCounterStyleRule" in r,
    t.supports("font-size-adjust: ex-height 0.5"),
    t.supports("text-transform: full-width")
  ]) >= 4;
}
function Vh() {
  if (navigator.platform === "iPad")
    return !0;
  var r = screen, e = r.width / r.height;
  return ue([
    // Since iOS 13. Doesn't work in Chrome on iPadOS <15, but works in desktop mode.
    "MediaSource" in window,
    // Since iOS 12. Doesn't work in Chrome on iPadOS.
    !!Element.prototype.webkitRequestFullscreen,
    // iPhone 4S that runs iOS 9 matches this, but it is not supported
    // Doesn't work in incognito mode of Safari ≥17 with split screen because of tracking prevention
    e > 0.65 && e < 1.53
  ]) >= 2;
}
function Hh() {
  var r = document;
  return r.fullscreenElement || r.msFullscreenElement || r.mozFullScreenElement || r.webkitFullscreenElement || null;
}
function Yh() {
  var r = document;
  return (r.exitFullscreen || r.msExitFullscreen || r.mozCancelFullScreen || r.webkitExitFullscreen).call(r);
}
function uo() {
  var r = Er(), e = Cu(), t = window, n = navigator, i = "connection";
  return r ? ue([
    !("SharedWorker" in t),
    // `typechange` is deprecated, but it's still present on Android (tested on Chrome Mobile 117)
    // Removal proposal https://bugs.chromium.org/p/chromium/issues/detail?id=699892
    // Note: this expression returns true on ChromeOS, so additional detectors are required to avoid false-positives
    n[i] && "ontypechange" in n[i],
    !("sinkId" in new Audio())
  ]) >= 2 : e ? ue(["onorientationchange" in t, "orientation" in t, /android/i.test(n.appVersion)]) >= 2 : !1;
}
function Xh() {
  var r = navigator, e = window, t = Audio.prototype, n = e.visualViewport;
  return ue([
    "srLatency" in t,
    "srChannelCount" in t,
    "devicePosture" in r,
    n && "segments" in n,
    "getTextInformation" in Image.prototype
    // Not available in Samsung Internet 21
  ]) >= 3;
}
function Jh() {
  return Qh() ? -4 : Kh();
}
function Kh() {
  var r = window, e = r.OfflineAudioContext || r.webkitOfflineAudioContext;
  if (!e)
    return -2;
  if (qh())
    return -1;
  var t = 4500, n = 5e3, i = new e(1, n, 44100), s = i.createOscillator();
  s.type = "triangle", s.frequency.value = 1e4;
  var o = i.createDynamicsCompressor();
  o.threshold.value = -50, o.knee.value = 40, o.ratio.value = 12, o.attack.value = 0, o.release.value = 0.25, s.connect(o), o.connect(i.destination), s.start(0);
  var a = ed(i), l = a[0], u = a[1], c = ar(l.then(function(f) {
    return td(f.getChannelData(0).subarray(t));
  }, function(f) {
    if (f.name === "timeout" || f.name === "suspended")
      return -3;
    throw f;
  }));
  return function() {
    return u(), c;
  };
}
function qh() {
  return Ce() && !lo() && !Gh();
}
function Qh() {
  return (
    // Safari ≥17
    Ce() && kr() && Rr() || // Samsung Internet ≥26
    Er() && Xh() && jh()
  );
}
function ed(r) {
  var e = 3, t = 500, n = 500, i = 5e3, s = function() {
  }, o = new Promise(function(a, l) {
    var u = !1, c = 0, f = 0;
    r.oncomplete = function(p) {
      return a(p.renderedBuffer);
    };
    var d = function() {
      setTimeout(function() {
        return l(ta(
          "timeout"
          /* InnerErrorName.Timeout */
        ));
      }, Math.min(n, f + i - Date.now()));
    }, h = function() {
      try {
        var p = r.startRendering();
        switch (Su(p) && ar(p), r.state) {
          case "running":
            f = Date.now(), u && d();
            break;
          case "suspended":
            document.hidden || c++, u && c >= e ? l(ta(
              "suspended"
              /* InnerErrorName.Suspended */
            )) : setTimeout(h, t);
            break;
        }
      } catch (m) {
        l(m);
      }
    };
    h(), s = function() {
      u || (u = !0, f > 0 && d());
    };
  });
  return [o, s];
}
function td(r) {
  for (var e = 0, t = 0; t < r.length; ++t)
    e += Math.abs(r[t]);
  return e;
}
function ta(r) {
  var e = new Error(r);
  return e.name = r, e;
}
function Iu(r, e, t) {
  var n, i, s;
  return t === void 0 && (t = 50), Te(this, void 0, void 0, function() {
    var o, a;
    return De(this, function(l) {
      switch (l.label) {
        case 0:
          o = document, l.label = 1;
        case 1:
          return o.body ? [3, 3] : [4, Pn(t)];
        case 2:
          return l.sent(), [3, 1];
        case 3:
          a = o.createElement("iframe"), l.label = 4;
        case 4:
          return l.trys.push([4, , 10, 11]), [4, new Promise(function(u, c) {
            var f = !1, d = function() {
              f = !0, u();
            }, h = function(g) {
              f = !0, c(g);
            };
            a.onload = d, a.onerror = h;
            var p = a.style;
            p.setProperty("display", "block", "important"), p.position = "absolute", p.top = "0", p.left = "0", p.visibility = "hidden", e && "srcdoc" in a ? a.srcdoc = e : a.src = "about:blank", o.body.appendChild(a);
            var m = function() {
              var g, v;
              f || (((v = (g = a.contentWindow) === null || g === void 0 ? void 0 : g.document) === null || v === void 0 ? void 0 : v.readyState) === "complete" ? d() : setTimeout(m, 10));
            };
            m();
          })];
        case 5:
          l.sent(), l.label = 6;
        case 6:
          return !((i = (n = a.contentWindow) === null || n === void 0 ? void 0 : n.document) === null || i === void 0) && i.body ? [3, 8] : [4, Pn(t)];
        case 7:
          return l.sent(), [3, 6];
        case 8:
          return [4, r(a, a.contentWindow)];
        case 9:
          return [2, l.sent()];
        case 10:
          return (s = a.parentNode) === null || s === void 0 || s.removeChild(a), [
            7
            /*endfinally*/
          ];
        case 11:
          return [
            2
            /*return*/
          ];
      }
    });
  });
}
function rd(r) {
  for (var e = Oh(r), t = e[0], n = e[1], i = document.createElement(t ?? "div"), s = 0, o = Object.keys(n); s < o.length; s++) {
    var a = o[s], l = n[a].join(" ");
    a === "style" ? nd(i.style, l) : i.setAttribute(a, l);
  }
  return i;
}
function nd(r, e) {
  for (var t = 0, n = e.split(";"); t < n.length; t++) {
    var i = n[t], s = /^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(i);
    if (s) {
      var o = s[1], a = s[2], l = s[4];
      r.setProperty(o, a, l || "");
    }
  }
}
function id() {
  for (var r = window; ; ) {
    var e = r.parent;
    if (!e || e === r)
      return !1;
    try {
      if (e.location.origin !== r.location.origin)
        return !0;
    } catch (t) {
      if (t instanceof Error && t.name === "SecurityError")
        return !0;
      throw t;
    }
    r = e;
  }
}
var sd = "mmMwWLliI0O&1", od = "48px", yt = ["monospace", "sans-serif", "serif"], ra = [
  // This is android-specific font from "Roboto" family
  "sans-serif-thin",
  "ARNO PRO",
  "Agency FB",
  "Arabic Typesetting",
  "Arial Unicode MS",
  "AvantGarde Bk BT",
  "BankGothic Md BT",
  "Batang",
  "Bitstream Vera Sans Mono",
  "Calibri",
  "Century",
  "Century Gothic",
  "Clarendon",
  "EUROSTILE",
  "Franklin Gothic",
  "Futura Bk BT",
  "Futura Md BT",
  "GOTHAM",
  "Gill Sans",
  "HELV",
  "Haettenschweiler",
  "Helvetica Neue",
  "Humanst521 BT",
  "Leelawadee",
  "Letter Gothic",
  "Levenim MT",
  "Lucida Bright",
  "Lucida Sans",
  "Menlo",
  "MS Mincho",
  "MS Outlook",
  "MS Reference Specialty",
  "MS UI Gothic",
  "MT Extra",
  "MYRIAD PRO",
  "Marlett",
  "Meiryo UI",
  "Microsoft Uighur",
  "Minion Pro",
  "Monotype Corsiva",
  "PMingLiU",
  "Pristina",
  "SCRIPTINA",
  "Segoe UI Light",
  "Serifa",
  "SimHei",
  "Small Fonts",
  "Staccato222 BT",
  "TRAJAN PRO",
  "Univers CE 55 Medium",
  "Vrinda",
  "ZWAdobeF"
];
function ad() {
  var r = this;
  return Iu(function(e, t) {
    var n = t.document;
    return Te(r, void 0, void 0, function() {
      var i, s, o, a, l, u, c, f, d, h, p, m;
      return De(this, function(g) {
        for (i = n.body, i.style.fontSize = od, s = n.createElement("div"), s.style.setProperty("visibility", "hidden", "important"), o = {}, a = {}, l = function(v) {
          var b = n.createElement("span"), y = b.style;
          return y.position = "absolute", y.top = "0", y.left = "0", y.fontFamily = v, b.textContent = sd, s.appendChild(b), b;
        }, u = function(v, b) {
          return l("'".concat(v, "',").concat(b));
        }, c = function() {
          return yt.map(l);
        }, f = function() {
          for (var v = {}, b = function(E) {
            v[E] = yt.map(function(x) {
              return u(E, x);
            });
          }, y = 0, w = ra; y < w.length; y++) {
            var _ = w[y];
            b(_);
          }
          return v;
        }, d = function(v) {
          return yt.some(function(b, y) {
            return v[y].offsetWidth !== o[b] || v[y].offsetHeight !== a[b];
          });
        }, h = c(), p = f(), i.appendChild(s), m = 0; m < yt.length; m++)
          o[yt[m]] = h[m].offsetWidth, a[yt[m]] = h[m].offsetHeight;
        return [2, ra.filter(function(v) {
          return d(p[v]);
        })];
      });
    });
  });
}
function ld() {
  var r = navigator.plugins;
  if (r) {
    for (var e = [], t = 0; t < r.length; ++t) {
      var n = r[t];
      if (n) {
        for (var i = [], s = 0; s < n.length; ++s) {
          var o = n[s];
          i.push({
            type: o.type,
            suffixes: o.suffixes
          });
        }
        e.push({
          name: n.name,
          description: n.description,
          mimeTypes: i
        });
      }
    }
    return e;
  }
}
function ud() {
  return cd(yd());
}
function cd(r) {
  var e, t = !1, n, i, s = fd(), o = s[0], a = s[1];
  return hd(o, a) ? (t = dd(a), r ? n = i = "skipped" : (e = pd(o, a), n = e[0], i = e[1])) : n = i = "unsupported", { winding: t, geometry: n, text: i };
}
function fd() {
  var r = document.createElement("canvas");
  return r.width = 1, r.height = 1, [r, r.getContext("2d")];
}
function hd(r, e) {
  return !!(e && r.toDataURL);
}
function dd(r) {
  return r.rect(0, 0, 10, 10), r.rect(2, 2, 6, 6), !r.isPointInPath(5, 5, "evenodd");
}
function pd(r, e) {
  md(r, e);
  var t = bi(r), n = bi(r);
  if (t !== n)
    return [
      "unstable",
      "unstable"
      /* ImageStatus.Unstable */
    ];
  gd(r, e);
  var i = bi(r);
  return [i, t];
}
function md(r, e) {
  r.width = 240, r.height = 60, e.textBaseline = "alphabetic", e.fillStyle = "#f60", e.fillRect(100, 1, 62, 20), e.fillStyle = "#069", e.font = '11pt "Times New Roman"';
  var t = "Cwm fjordbank gly ".concat(
    "😃"
    /* 😃 */
  );
  e.fillText(t, 2, 15), e.fillStyle = "rgba(102, 204, 0, 0.2)", e.font = "18pt Arial", e.fillText(t, 4, 45);
}
function gd(r, e) {
  r.width = 122, r.height = 110, e.globalCompositeOperation = "multiply";
  for (var t = 0, n = [
    ["#f2f", 40, 40],
    ["#2ff", 80, 40],
    ["#ff2", 60, 80]
  ]; t < n.length; t++) {
    var i = n[t], s = i[0], o = i[1], a = i[2];
    e.fillStyle = s, e.beginPath(), e.arc(o, a, 40, 0, Math.PI * 2, !0), e.closePath(), e.fill();
  }
  e.fillStyle = "#f9c", e.arc(60, 60, 60, 0, Math.PI * 2, !0), e.arc(60, 60, 20, 0, Math.PI * 2, !0), e.fill("evenodd");
}
function bi(r) {
  return r.toDataURL();
}
function yd() {
  return Ce() && kr() && Rr();
}
function wd() {
  var r = navigator, e = 0, t;
  r.maxTouchPoints !== void 0 ? e = ao(r.maxTouchPoints) : r.msMaxTouchPoints !== void 0 && (e = r.msMaxTouchPoints);
  try {
    document.createEvent("TouchEvent"), t = !0;
  } catch {
    t = !1;
  }
  var n = "ontouchstart" in window;
  return {
    maxTouchPoints: e,
    touchEvent: t,
    touchStart: n
  };
}
function vd() {
  return navigator.oscpu;
}
function bd() {
  var r = navigator, e = [], t = r.language || r.userLanguage || r.browserLanguage || r.systemLanguage;
  if (t !== void 0 && e.push([t]), Array.isArray(r.languages))
    Er() && Zh() || e.push(r.languages);
  else if (typeof r.languages == "string") {
    var n = r.languages;
    n && e.push(n.split(","));
  }
  return e;
}
function Sd() {
  return window.screen.colorDepth;
}
function _d() {
  return Ue(xe(navigator.deviceMemory), void 0);
}
function xd() {
  if (!(Ce() && kr() && Rr()))
    return Cd();
}
function Cd() {
  var r = screen, e = function(n) {
    return Ue(ao(n), null);
  }, t = [e(r.width), e(r.height)];
  return t.sort().reverse(), t;
}
var Id = 2500, Ad = 10, xn, Si;
function Ed() {
  if (Si === void 0) {
    var r = function() {
      var e = hs();
      ds(e) ? Si = setTimeout(r, Id) : (xn = e, Si = void 0);
    };
    r();
  }
}
function Rd() {
  var r = this;
  return Ed(), function() {
    return Te(r, void 0, void 0, function() {
      var e;
      return De(this, function(t) {
        switch (t.label) {
          case 0:
            return e = hs(), ds(e) ? xn ? [2, vu([], xn, !0)] : Hh() ? [4, Yh()] : [3, 2] : [3, 2];
          case 1:
            t.sent(), e = hs(), t.label = 2;
          case 2:
            return ds(e) || (xn = e), [2, e];
        }
      });
    });
  };
}
function kd() {
  var r = this;
  if (Ce() && kr() && Rr())
    return function() {
      return Promise.resolve(void 0);
    };
  var e = Rd();
  return function() {
    return Te(r, void 0, void 0, function() {
      var t, n;
      return De(this, function(i) {
        switch (i.label) {
          case 0:
            return [4, e()];
          case 1:
            return t = i.sent(), n = function(s) {
              return s === null ? null : _u(s, Ad);
            }, [2, [n(t[0]), n(t[1]), n(t[2]), n(t[3])]];
        }
      });
    });
  };
}
function hs() {
  var r = screen;
  return [
    Ue(xe(r.availTop), null),
    Ue(xe(r.width) - xe(r.availWidth) - Ue(xe(r.availLeft), 0), null),
    Ue(xe(r.height) - xe(r.availHeight) - Ue(xe(r.availTop), 0), null),
    Ue(xe(r.availLeft), null)
  ];
}
function ds(r) {
  for (var e = 0; e < 4; ++e)
    if (r[e])
      return !1;
  return !0;
}
function Od() {
  return Ue(ao(navigator.hardwareConcurrency), void 0);
}
function Md() {
  var r, e = (r = window.Intl) === null || r === void 0 ? void 0 : r.DateTimeFormat;
  if (e) {
    var t = new e().resolvedOptions().timeZone;
    if (t)
      return t;
  }
  var n = -$d();
  return "UTC".concat(n >= 0 ? "+" : "").concat(n);
}
function $d() {
  var r = (/* @__PURE__ */ new Date()).getFullYear();
  return Math.max(
    // `getTimezoneOffset` returns a number as a string in some unidentified cases
    xe(new Date(r, 0, 1).getTimezoneOffset()),
    xe(new Date(r, 6, 1).getTimezoneOffset())
  );
}
function Pd() {
  try {
    return !!window.sessionStorage;
  } catch {
    return !0;
  }
}
function Nd() {
  try {
    return !!window.localStorage;
  } catch {
    return !0;
  }
}
function Ld() {
  if (!(xu() || Wh()))
    try {
      return !!window.indexedDB;
    } catch {
      return !0;
    }
}
function Td() {
  return !!window.openDatabase;
}
function Dd() {
  return navigator.cpuClass;
}
function Fd() {
  var r = navigator.platform;
  return r === "MacIntel" && Ce() && !lo() ? Vh() ? "iPad" : "iPhone" : r;
}
function zd() {
  return navigator.vendor || "";
}
function Ud() {
  for (var r = [], e = 0, t = [
    // Blink and some browsers on iOS
    "chrome",
    // Safari on macOS
    "safari",
    // Chrome on iOS (checked in 85 on 13 and 87 on 14)
    "__crWeb",
    "__gCrWeb",
    // Yandex Browser on iOS, macOS and Android (checked in 21.2 on iOS 14, macOS and Android)
    "yandex",
    // Yandex Browser on iOS (checked in 21.2 on 14)
    "__yb",
    "__ybro",
    // Firefox on iOS (checked in 32 on 14)
    "__firefox__",
    // Edge on iOS (checked in 46 on 14)
    "__edgeTrackingPreventionStatistics",
    "webkit",
    // Opera Touch on iOS (checked in 2.6 on 14)
    "oprt",
    // Samsung Internet on Android (checked in 11.1)
    "samsungAr",
    // UC Browser on Android (checked in 12.10 and 13.0)
    "ucweb",
    "UCShellJava",
    // Puffin on Android (checked in 9.0)
    "puffinDevice"
    // UC on iOS and Opera on Android have no specific global variables
    // Edge for Android isn't checked
  ]; e < t.length; e++) {
    var n = t[e], i = window[n];
    i && typeof i == "object" && r.push(n);
  }
  return r.sort();
}
function Bd() {
  var r = document;
  try {
    r.cookie = "cookietest=1; SameSite=Strict;";
    var e = r.cookie.indexOf("cookietest=") !== -1;
    return r.cookie = "cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT", e;
  } catch {
    return !1;
  }
}
function Wd() {
  var r = atob;
  return {
    abpIndo: [
      "#Iklan-Melayang",
      "#Kolom-Iklan-728",
      "#SidebarIklan-wrapper",
      '[title="ALIENBOLA" i]',
      r("I0JveC1CYW5uZXItYWRz")
    ],
    abpvn: [".quangcao", "#mobileCatfish", r("LmNsb3NlLWFkcw=="), '[id^="bn_bottom_fixed_"]', "#pmadv"],
    adBlockFinland: [
      ".mainostila",
      r("LnNwb25zb3JpdA=="),
      ".ylamainos",
      r("YVtocmVmKj0iL2NsaWNrdGhyZ2guYXNwPyJd"),
      r("YVtocmVmXj0iaHR0cHM6Ly9hcHAucmVhZHBlYWsuY29tL2FkcyJd")
    ],
    adBlockPersian: [
      "#navbar_notice_50",
      ".kadr",
      'TABLE[width="140px"]',
      "#divAgahi",
      r("YVtocmVmXj0iaHR0cDovL2cxLnYuZndtcm0ubmV0L2FkLyJd")
    ],
    adBlockWarningRemoval: [
      "#adblock-honeypot",
      ".adblocker-root",
      ".wp_adblock_detect",
      r("LmhlYWRlci1ibG9ja2VkLWFk"),
      r("I2FkX2Jsb2NrZXI=")
    ],
    adGuardAnnoyances: [
      ".hs-sosyal",
      "#cookieconsentdiv",
      'div[class^="app_gdpr"]',
      ".as-oil",
      '[data-cypress="soft-push-notification-modal"]'
    ],
    adGuardBase: [
      ".BetterJsPopOverlay",
      r("I2FkXzMwMFgyNTA="),
      r("I2Jhbm5lcmZsb2F0MjI="),
      r("I2NhbXBhaWduLWJhbm5lcg=="),
      r("I0FkLUNvbnRlbnQ=")
    ],
    adGuardChinese: [
      r("LlppX2FkX2FfSA=="),
      r("YVtocmVmKj0iLmh0aGJldDM0LmNvbSJd"),
      "#widget-quan",
      r("YVtocmVmKj0iLzg0OTkyMDIwLnh5eiJd"),
      r("YVtocmVmKj0iLjE5NTZobC5jb20vIl0=")
    ],
    adGuardFrench: [
      "#pavePub",
      r("LmFkLWRlc2t0b3AtcmVjdGFuZ2xl"),
      ".mobile_adhesion",
      ".widgetadv",
      r("LmFkc19iYW4=")
    ],
    adGuardGerman: ['aside[data-portal-id="leaderboard"]'],
    adGuardJapanese: [
      "#kauli_yad_1",
      r("YVtocmVmXj0iaHR0cDovL2FkMi50cmFmZmljZ2F0ZS5uZXQvIl0="),
      r("Ll9wb3BJbl9pbmZpbml0ZV9hZA=="),
      r("LmFkZ29vZ2xl"),
      r("Ll9faXNib29zdFJldHVybkFk")
    ],
    adGuardMobile: [
      r("YW1wLWF1dG8tYWRz"),
      r("LmFtcF9hZA=="),
      'amp-embed[type="24smi"]',
      "#mgid_iframe1",
      r("I2FkX2ludmlld19hcmVh")
    ],
    adGuardRussian: [
      r("YVtocmVmXj0iaHR0cHM6Ly9hZC5sZXRtZWFkcy5jb20vIl0="),
      r("LnJlY2xhbWE="),
      'div[id^="smi2adblock"]',
      r("ZGl2W2lkXj0iQWRGb3hfYmFubmVyXyJd"),
      "#psyduckpockeball"
    ],
    adGuardSocial: [
      r("YVtocmVmXj0iLy93d3cuc3R1bWJsZXVwb24uY29tL3N1Ym1pdD91cmw9Il0="),
      r("YVtocmVmXj0iLy90ZWxlZ3JhbS5tZS9zaGFyZS91cmw/Il0="),
      ".etsy-tweet",
      "#inlineShare",
      ".popup-social"
    ],
    adGuardSpanishPortuguese: ["#barraPublicidade", "#Publicidade", "#publiEspecial", "#queTooltip", ".cnt-publi"],
    adGuardTrackingProtection: [
      "#qoo-counter",
      r("YVtocmVmXj0iaHR0cDovL2NsaWNrLmhvdGxvZy5ydS8iXQ=="),
      r("YVtocmVmXj0iaHR0cDovL2hpdGNvdW50ZXIucnUvdG9wL3N0YXQucGhwIl0="),
      r("YVtocmVmXj0iaHR0cDovL3RvcC5tYWlsLnJ1L2p1bXAiXQ=="),
      "#top100counter"
    ],
    adGuardTurkish: [
      "#backkapat",
      r("I3Jla2xhbWk="),
      r("YVtocmVmXj0iaHR0cDovL2Fkc2Vydi5vbnRlay5jb20udHIvIl0="),
      r("YVtocmVmXj0iaHR0cDovL2l6bGVuemkuY29tL2NhbXBhaWduLyJd"),
      r("YVtocmVmXj0iaHR0cDovL3d3dy5pbnN0YWxsYWRzLm5ldC8iXQ==")
    ],
    bulgarian: [r("dGQjZnJlZW5ldF90YWJsZV9hZHM="), "#ea_intext_div", ".lapni-pop-over", "#xenium_hot_offers"],
    easyList: [
      ".yb-floorad",
      r("LndpZGdldF9wb19hZHNfd2lkZ2V0"),
      r("LnRyYWZmaWNqdW5reS1hZA=="),
      ".textad_headline",
      r("LnNwb25zb3JlZC10ZXh0LWxpbmtz")
    ],
    easyListChina: [
      r("LmFwcGd1aWRlLXdyYXBbb25jbGljayo9ImJjZWJvcy5jb20iXQ=="),
      r("LmZyb250cGFnZUFkdk0="),
      "#taotaole",
      "#aafoot.top_box",
      ".cfa_popup"
    ],
    easyListCookie: [
      ".ezmob-footer",
      ".cc-CookieWarning",
      "[data-cookie-number]",
      r("LmF3LWNvb2tpZS1iYW5uZXI="),
      ".sygnal24-gdpr-modal-wrap"
    ],
    easyListCzechSlovak: [
      "#onlajny-stickers",
      r("I3Jla2xhbW5pLWJveA=="),
      r("LnJla2xhbWEtbWVnYWJvYXJk"),
      ".sklik",
      r("W2lkXj0ic2tsaWtSZWtsYW1hIl0=")
    ],
    easyListDutch: [
      r("I2FkdmVydGVudGll"),
      r("I3ZpcEFkbWFya3RCYW5uZXJCbG9jaw=="),
      ".adstekst",
      r("YVtocmVmXj0iaHR0cHM6Ly94bHR1YmUubmwvY2xpY2svIl0="),
      "#semilo-lrectangle"
    ],
    easyListGermany: [
      "#SSpotIMPopSlider",
      r("LnNwb25zb3JsaW5rZ3J1ZW4="),
      r("I3dlcmJ1bmdza3k="),
      r("I3Jla2xhbWUtcmVjaHRzLW1pdHRl"),
      r("YVtocmVmXj0iaHR0cHM6Ly9iZDc0Mi5jb20vIl0=")
    ],
    easyListItaly: [
      r("LmJveF9hZHZfYW5udW5jaQ=="),
      ".sb-box-pubbliredazionale",
      r("YVtocmVmXj0iaHR0cDovL2FmZmlsaWF6aW9uaWFkcy5zbmFpLml0LyJd"),
      r("YVtocmVmXj0iaHR0cHM6Ly9hZHNlcnZlci5odG1sLml0LyJd"),
      r("YVtocmVmXj0iaHR0cHM6Ly9hZmZpbGlhemlvbmlhZHMuc25haS5pdC8iXQ==")
    ],
    easyListLithuania: [
      r("LnJla2xhbW9zX3RhcnBhcw=="),
      r("LnJla2xhbW9zX251b3JvZG9z"),
      r("aW1nW2FsdD0iUmVrbGFtaW5pcyBza3lkZWxpcyJd"),
      r("aW1nW2FsdD0iRGVkaWt1b3RpLmx0IHNlcnZlcmlhaSJd"),
      r("aW1nW2FsdD0iSG9zdGluZ2FzIFNlcnZlcmlhaS5sdCJd")
    ],
    estonian: [r("QVtocmVmKj0iaHR0cDovL3BheTRyZXN1bHRzMjQuZXUiXQ==")],
    fanboyAnnoyances: ["#ac-lre-player", ".navigate-to-top", "#subscribe_popup", ".newsletter_holder", "#back-top"],
    fanboyAntiFacebook: [".util-bar-module-firefly-visible"],
    fanboyEnhancedTrackers: [
      ".open.pushModal",
      "#issuem-leaky-paywall-articles-zero-remaining-nag",
      "#sovrn_container",
      'div[class$="-hide"][zoompage-fontsize][style="display: block;"]',
      ".BlockNag__Card"
    ],
    fanboySocial: ["#FollowUs", "#meteored_share", "#social_follow", ".article-sharer", ".community__social-desc"],
    frellwitSwedish: [
      r("YVtocmVmKj0iY2FzaW5vcHJvLnNlIl1bdGFyZ2V0PSJfYmxhbmsiXQ=="),
      r("YVtocmVmKj0iZG9rdG9yLXNlLm9uZWxpbmsubWUiXQ=="),
      "article.category-samarbete",
      r("ZGl2LmhvbGlkQWRz"),
      "ul.adsmodern"
    ],
    greekAdBlock: [
      r("QVtocmVmKj0iYWRtYW4ub3RlbmV0LmdyL2NsaWNrPyJd"),
      r("QVtocmVmKj0iaHR0cDovL2F4aWFiYW5uZXJzLmV4b2R1cy5nci8iXQ=="),
      r("QVtocmVmKj0iaHR0cDovL2ludGVyYWN0aXZlLmZvcnRobmV0LmdyL2NsaWNrPyJd"),
      "DIV.agores300",
      "TABLE.advright"
    ],
    hungarian: [
      "#cemp_doboz",
      ".optimonk-iframe-container",
      r("LmFkX19tYWlu"),
      r("W2NsYXNzKj0iR29vZ2xlQWRzIl0="),
      "#hirdetesek_box"
    ],
    iDontCareAboutCookies: [
      '.alert-info[data-block-track*="CookieNotice"]',
      ".ModuleTemplateCookieIndicator",
      ".o--cookies--container",
      "#cookies-policy-sticky",
      "#stickyCookieBar"
    ],
    icelandicAbp: [r("QVtocmVmXj0iL2ZyYW1ld29yay9yZXNvdXJjZXMvZm9ybXMvYWRzLmFzcHgiXQ==")],
    latvian: [
      r("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMjBweDsgaGVpZ2h0OiA0MHB4OyBvdmVyZmxvdzogaGlkZGVuOyBwb3NpdGlvbjogcmVsYXRpdmU7Il0="),
      r("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiA4OHB4OyBoZWlnaHQ6IDMxcHg7IG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiByZWxhdGl2ZTsiXQ==")
    ],
    listKr: [
      r("YVtocmVmKj0iLy9hZC5wbGFuYnBsdXMuY28ua3IvIl0="),
      r("I2xpdmVyZUFkV3JhcHBlcg=="),
      r("YVtocmVmKj0iLy9hZHYuaW1hZHJlcC5jby5rci8iXQ=="),
      r("aW5zLmZhc3R2aWV3LWFk"),
      ".revenue_unit_item.dable"
    ],
    listeAr: [
      r("LmdlbWluaUxCMUFk"),
      ".right-and-left-sponsers",
      r("YVtocmVmKj0iLmFmbGFtLmluZm8iXQ=="),
      r("YVtocmVmKj0iYm9vcmFxLm9yZyJd"),
      r("YVtocmVmKj0iZHViaXp6bGUuY29tL2FyLz91dG1fc291cmNlPSJd")
    ],
    listeFr: [
      r("YVtocmVmXj0iaHR0cDovL3Byb21vLnZhZG9yLmNvbS8iXQ=="),
      r("I2FkY29udGFpbmVyX3JlY2hlcmNoZQ=="),
      r("YVtocmVmKj0id2Vib3JhbWEuZnIvZmNnaS1iaW4vIl0="),
      ".site-pub-interstitiel",
      'div[id^="crt-"][data-criteo-id]'
    ],
    officialPolish: [
      "#ceneo-placeholder-ceneo-12",
      r("W2hyZWZePSJodHRwczovL2FmZi5zZW5kaHViLnBsLyJd"),
      r("YVtocmVmXj0iaHR0cDovL2Fkdm1hbmFnZXIudGVjaGZ1bi5wbC9yZWRpcmVjdC8iXQ=="),
      r("YVtocmVmXj0iaHR0cDovL3d3dy50cml6ZXIucGwvP3V0bV9zb3VyY2UiXQ=="),
      r("ZGl2I3NrYXBpZWNfYWQ=")
    ],
    ro: [
      r("YVtocmVmXj0iLy9hZmZ0cmsuYWx0ZXgucm8vQ291bnRlci9DbGljayJd"),
      r("YVtocmVmXj0iaHR0cHM6Ly9ibGFja2ZyaWRheXNhbGVzLnJvL3Ryay9zaG9wLyJd"),
      r("YVtocmVmXj0iaHR0cHM6Ly9ldmVudC4ycGVyZm9ybWFudC5jb20vZXZlbnRzL2NsaWNrIl0="),
      r("YVtocmVmXj0iaHR0cHM6Ly9sLnByb2ZpdHNoYXJlLnJvLyJd"),
      'a[href^="/url/"]'
    ],
    ruAd: [
      r("YVtocmVmKj0iLy9mZWJyYXJlLnJ1LyJd"),
      r("YVtocmVmKj0iLy91dGltZy5ydS8iXQ=="),
      r("YVtocmVmKj0iOi8vY2hpa2lkaWtpLnJ1Il0="),
      "#pgeldiz",
      ".yandex-rtb-block"
    ],
    thaiAds: [
      "a[href*=macau-uta-popup]",
      r("I2Fkcy1nb29nbGUtbWlkZGxlX3JlY3RhbmdsZS1ncm91cA=="),
      r("LmFkczMwMHM="),
      ".bumq",
      ".img-kosana"
    ],
    webAnnoyancesUltralist: [
      "#mod-social-share-2",
      "#social-tools",
      r("LmN0cGwtZnVsbGJhbm5lcg=="),
      ".zergnet-recommend",
      ".yt.btn-link.btn-md.btn"
    ]
  };
}
function Zd(r) {
  var e = r === void 0 ? {} : r, t = e.debug;
  return Te(this, void 0, void 0, function() {
    var n, i, s, o, a, l;
    return De(this, function(u) {
      switch (u.label) {
        case 0:
          return jd() ? (n = Wd(), i = Object.keys(n), s = (l = []).concat.apply(l, i.map(function(c) {
            return n[c];
          })), [4, Gd(s)]) : [2, void 0];
        case 1:
          return o = u.sent(), t && Vd(n, o), a = i.filter(function(c) {
            var f = n[c], d = ue(f.map(function(h) {
              return o[h];
            }));
            return d > f.length * 0.6;
          }), a.sort(), [2, a];
      }
    });
  });
}
function jd() {
  return Ce() || uo();
}
function Gd(r) {
  var e;
  return Te(this, void 0, void 0, function() {
    var t, n, i, s, l, o, a, l;
    return De(this, function(u) {
      switch (u.label) {
        case 0:
          for (t = document, n = t.createElement("div"), i = new Array(r.length), s = {}, na(n), l = 0; l < r.length; ++l)
            o = rd(r[l]), o.tagName === "DIALOG" && o.show(), a = t.createElement("div"), na(a), a.appendChild(o), n.appendChild(a), i[l] = o;
          u.label = 1;
        case 1:
          return t.body ? [3, 3] : [4, Pn(50)];
        case 2:
          return u.sent(), [3, 1];
        case 3:
          t.body.appendChild(n);
          try {
            for (l = 0; l < r.length; ++l)
              i[l].offsetParent || (s[r[l]] = !0);
          } finally {
            (e = n.parentNode) === null || e === void 0 || e.removeChild(n);
          }
          return [2, s];
      }
    });
  });
}
function na(r) {
  r.style.setProperty("visibility", "hidden", "important"), r.style.setProperty("display", "block", "important");
}
function Vd(r, e) {
  for (var t = "DOM blockers debug:\n```", n = 0, i = Object.keys(r); n < i.length; n++) {
    var s = i[n];
    t += `
`.concat(s, ":");
    for (var o = 0, a = r[s]; o < a.length; o++) {
      var l = a[o];
      t += `
  `.concat(e[l] ? "🚫" : "➡️", " ").concat(l);
    }
  }
  console.log("".concat(t, "\n```"));
}
function Hd() {
  for (var r = 0, e = ["rec2020", "p3", "srgb"]; r < e.length; r++) {
    var t = e[r];
    if (matchMedia("(color-gamut: ".concat(t, ")")).matches)
      return t;
  }
}
function Yd() {
  if (ia("inverted"))
    return !0;
  if (ia("none"))
    return !1;
}
function ia(r) {
  return matchMedia("(inverted-colors: ".concat(r, ")")).matches;
}
function Xd() {
  if (sa("active"))
    return !0;
  if (sa("none"))
    return !1;
}
function sa(r) {
  return matchMedia("(forced-colors: ".concat(r, ")")).matches;
}
var Jd = 100;
function Kd() {
  if (matchMedia("(min-monochrome: 0)").matches) {
    for (var r = 0; r <= Jd; ++r)
      if (matchMedia("(max-monochrome: ".concat(r, ")")).matches)
        return r;
    throw new Error("Too high value");
  }
}
function qd() {
  if (wt("no-preference"))
    return 0;
  if (wt("high") || wt("more"))
    return 1;
  if (wt("low") || wt("less"))
    return -1;
  if (wt("forced"))
    return 10;
}
function wt(r) {
  return matchMedia("(prefers-contrast: ".concat(r, ")")).matches;
}
function Qd() {
  if (oa("reduce"))
    return !0;
  if (oa("no-preference"))
    return !1;
}
function oa(r) {
  return matchMedia("(prefers-reduced-motion: ".concat(r, ")")).matches;
}
function ep() {
  if (aa("reduce"))
    return !0;
  if (aa("no-preference"))
    return !1;
}
function aa(r) {
  return matchMedia("(prefers-reduced-transparency: ".concat(r, ")")).matches;
}
function tp() {
  if (la("high"))
    return !0;
  if (la("standard"))
    return !1;
}
function la(r) {
  return matchMedia("(dynamic-range: ".concat(r, ")")).matches;
}
var F = Math, se = function() {
  return 0;
};
function rp() {
  var r = F.acos || se, e = F.acosh || se, t = F.asin || se, n = F.asinh || se, i = F.atanh || se, s = F.atan || se, o = F.sin || se, a = F.sinh || se, l = F.cos || se, u = F.cosh || se, c = F.tan || se, f = F.tanh || se, d = F.exp || se, h = F.expm1 || se, p = F.log1p || se, m = function(S) {
    return F.pow(F.PI, S);
  }, g = function(S) {
    return F.log(S + F.sqrt(S * S - 1));
  }, v = function(S) {
    return F.log(S + F.sqrt(S * S + 1));
  }, b = function(S) {
    return F.log((1 + S) / (1 - S)) / 2;
  }, y = function(S) {
    return F.exp(S) - 1 / F.exp(S) / 2;
  }, w = function(S) {
    return (F.exp(S) + 1 / F.exp(S)) / 2;
  }, _ = function(S) {
    return F.exp(S) - 1;
  }, E = function(S) {
    return (F.exp(2 * S) - 1) / (F.exp(2 * S) + 1);
  }, x = function(S) {
    return F.log(1 + S);
  };
  return {
    acos: r(0.12312423423423424),
    acosh: e(1e308),
    acoshPf: g(1e154),
    asin: t(0.12312423423423424),
    asinh: n(1),
    asinhPf: v(1),
    atanh: i(0.5),
    atanhPf: b(0.5),
    atan: s(0.5),
    sin: o(-1e300),
    sinh: a(1),
    sinhPf: y(1),
    cos: l(10.000000000123),
    cosh: u(1),
    coshPf: w(1),
    tan: c(-1e300),
    tanh: f(1),
    tanhPf: E(1),
    exp: d(1),
    expm1: h(1),
    expm1Pf: _(1),
    log1p: p(10),
    log1pPf: x(10),
    powPI: m(-100)
  };
}
var np = "mmMwWLliI0fiflO&1", _i = {
  /**
   * The default font. User can change it in desktop Chrome, desktop Firefox, IE 11,
   * Android Chrome (but only when the size is ≥ than the default) and Android Firefox.
   */
  default: [],
  /** OS font on macOS. User can change its size and weight. Applies after Safari restart. */
  apple: [{ font: "-apple-system-body" }],
  /** User can change it in desktop Chrome and desktop Firefox. */
  serif: [{ fontFamily: "serif" }],
  /** User can change it in desktop Chrome and desktop Firefox. */
  sans: [{ fontFamily: "sans-serif" }],
  /** User can change it in desktop Chrome and desktop Firefox. */
  mono: [{ fontFamily: "monospace" }],
  /**
   * Check the smallest allowed font size. User can change it in desktop Chrome, desktop Firefox and desktop Safari.
   * The height can be 0 in Chrome on a retina display.
   */
  min: [{ fontSize: "1px" }],
  /** Tells one OS from another in desktop Chrome. */
  system: [{ fontFamily: "system-ui" }]
};
function ip() {
  return sp(function(r, e) {
    for (var t = {}, n = {}, i = 0, s = Object.keys(_i); i < s.length; i++) {
      var o = s[i], a = _i[o], l = a[0], u = l === void 0 ? {} : l, c = a[1], f = c === void 0 ? np : c, d = r.createElement("span");
      d.textContent = f, d.style.whiteSpace = "nowrap";
      for (var h = 0, p = Object.keys(u); h < p.length; h++) {
        var m = p[h], g = u[m];
        g !== void 0 && (d.style[m] = g);
      }
      t[o] = d, e.append(r.createElement("br"), d);
    }
    for (var v = 0, b = Object.keys(_i); v < b.length; v++) {
      var o = b[v];
      n[o] = t[o].getBoundingClientRect().width;
    }
    return n;
  });
}
function sp(r, e) {
  return e === void 0 && (e = 4e3), Iu(function(t, n) {
    var i = n.document, s = i.body, o = s.style;
    o.width = "".concat(e, "px"), o.webkitTextSizeAdjust = o.textSizeAdjust = "none", Er() ? s.style.zoom = "".concat(1 / n.devicePixelRatio) : Ce() && (s.style.zoom = "reset");
    var a = i.createElement("div");
    return a.textContent = vu([], Array(e / 20 << 0), !0).map(function() {
      return "word";
    }).join(" "), s.appendChild(a), r(i, s);
  }, '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">');
}
function op() {
  return navigator.pdfViewerEnabled;
}
function ap() {
  var r = new Float32Array(1), e = new Uint8Array(r.buffer);
  return r[0] = 1 / 0, r[0] = r[0] - r[0], e[3];
}
function lp() {
  var r = window.ApplePaySession;
  if (typeof (r == null ? void 0 : r.canMakePayments) != "function")
    return -1;
  if (up())
    return -3;
  try {
    return r.canMakePayments() ? 1 : 0;
  } catch (e) {
    return cp(e);
  }
}
var up = id;
function cp(r) {
  if (r instanceof Error && r.name === "InvalidAccessError" && /\bfrom\b.*\binsecure\b/i.test(r.message))
    return -2;
  throw r;
}
function fp() {
  var r, e = document.createElement("a"), t = (r = e.attributionSourceId) !== null && r !== void 0 ? r : e.attributionsourceid;
  return t === void 0 ? void 0 : String(t);
}
var Au = -1, Eu = -2, hp = /* @__PURE__ */ new Set([
  10752,
  2849,
  2884,
  2885,
  2886,
  2928,
  2929,
  2930,
  2931,
  2932,
  2960,
  2961,
  2962,
  2963,
  2964,
  2965,
  2966,
  2967,
  2968,
  2978,
  3024,
  3042,
  3088,
  3089,
  3106,
  3107,
  32773,
  32777,
  32777,
  32823,
  32824,
  32936,
  32937,
  32938,
  32939,
  32968,
  32969,
  32970,
  32971,
  3317,
  33170,
  3333,
  3379,
  3386,
  33901,
  33902,
  34016,
  34024,
  34076,
  3408,
  3410,
  3411,
  3412,
  3413,
  3414,
  3415,
  34467,
  34816,
  34817,
  34818,
  34819,
  34877,
  34921,
  34930,
  35660,
  35661,
  35724,
  35738,
  35739,
  36003,
  36004,
  36005,
  36347,
  36348,
  36349,
  37440,
  37441,
  37443,
  7936,
  7937,
  7938
  // SAMPLE_ALPHA_TO_COVERAGE (32926) and SAMPLE_COVERAGE (32928) are excluded because they trigger a console warning
  // in IE, Chrome ≤ 59 and Safari ≤ 13 and give no entropy.
]), dp = /* @__PURE__ */ new Set([
  34047,
  35723,
  36063,
  34852,
  34853,
  34854,
  34229,
  36392,
  36795,
  38449
  // MAX_VIEWS_OVR
]), pp = ["FRAGMENT_SHADER", "VERTEX_SHADER"], mp = ["LOW_FLOAT", "MEDIUM_FLOAT", "HIGH_FLOAT", "LOW_INT", "MEDIUM_INT", "HIGH_INT"], Ru = "WEBGL_debug_renderer_info", gp = "WEBGL_polygon_mode";
function yp(r) {
  var e, t, n, i, s, o, a = r.cache, l = ku(a);
  if (!l)
    return Au;
  if (!Mu(l))
    return Eu;
  var u = Ou() ? null : l.getExtension(Ru);
  return {
    version: ((e = l.getParameter(l.VERSION)) === null || e === void 0 ? void 0 : e.toString()) || "",
    vendor: ((t = l.getParameter(l.VENDOR)) === null || t === void 0 ? void 0 : t.toString()) || "",
    vendorUnmasked: u ? (n = l.getParameter(u.UNMASKED_VENDOR_WEBGL)) === null || n === void 0 ? void 0 : n.toString() : "",
    renderer: ((i = l.getParameter(l.RENDERER)) === null || i === void 0 ? void 0 : i.toString()) || "",
    rendererUnmasked: u ? (s = l.getParameter(u.UNMASKED_RENDERER_WEBGL)) === null || s === void 0 ? void 0 : s.toString() : "",
    shadingLanguageVersion: ((o = l.getParameter(l.SHADING_LANGUAGE_VERSION)) === null || o === void 0 ? void 0 : o.toString()) || ""
  };
}
function wp(r) {
  var e = r.cache, t = ku(e);
  if (!t)
    return Au;
  if (!Mu(t))
    return Eu;
  var n = t.getSupportedExtensions(), i = t.getContextAttributes(), s = [], o = [], a = [], l = [], u = [];
  if (i)
    for (var c = 0, f = Object.keys(i); c < f.length; c++) {
      var d = f[c];
      o.push("".concat(d, "=").concat(i[d]));
    }
  for (var h = ua(t), p = 0, m = h; p < m.length; p++) {
    var g = m[p], v = t[g];
    a.push("".concat(g, "=").concat(v).concat(hp.has(v) ? "=".concat(t.getParameter(v)) : ""));
  }
  if (n)
    for (var b = 0, y = n; b < y.length; b++) {
      var w = y[b];
      if (!(w === Ru && Ou() || w === gp && Sp())) {
        var _ = t.getExtension(w);
        if (!_) {
          s.push(w);
          continue;
        }
        for (var E = 0, x = ua(_); E < x.length; E++) {
          var g = x[E], v = _[g];
          l.push("".concat(g, "=").concat(v).concat(dp.has(v) ? "=".concat(t.getParameter(v)) : ""));
        }
      }
    }
  for (var S = 0, A = pp; S < A.length; S++)
    for (var I = A[S], R = 0, q = mp; R < q.length; R++) {
      var k = q[R], me = vp(t, I, k);
      u.push("".concat(I, ".").concat(k, "=").concat(me.join(",")));
    }
  return l.sort(), a.sort(), {
    contextAttributes: o,
    parameters: a,
    shaderPrecisions: u,
    extensions: n,
    extensionParameters: l,
    unsupportedExtensions: s
  };
}
function ku(r) {
  if (r.webgl)
    return r.webgl.context;
  var e = document.createElement("canvas"), t;
  e.addEventListener("webglCreateContextError", function() {
    return t = void 0;
  });
  for (var n = 0, i = ["webgl", "experimental-webgl"]; n < i.length; n++) {
    var s = i[n];
    try {
      t = e.getContext(s);
    } catch {
    }
    if (t)
      break;
  }
  return r.webgl = { context: t }, t;
}
function vp(r, e, t) {
  var n = r.getShaderPrecisionFormat(r[e], r[t]);
  return n ? [n.rangeMin, n.rangeMax, n.precision] : [];
}
function ua(r) {
  var e = Object.keys(r.__proto__);
  return e.filter(bp);
}
function bp(r) {
  return typeof r == "string" && !r.match(/[^A-Z0-9_x]/);
}
function Ou() {
  return Cu();
}
function Sp() {
  return Er() || Ce();
}
function Mu(r) {
  return typeof r.getParameter == "function";
}
function _p() {
  var r, e = uo() || Ce();
  return e ? window.AudioContext && (r = new AudioContext().baseLatency) !== null && r !== void 0 ? r : -1 : -2;
}
var xp = {
  // READ FIRST:
  // See https://github.com/fingerprintjs/fingerprintjs/blob/master/contributing.md#how-to-make-an-entropy-source
  // to learn how entropy source works and how to make your own.
  // The sources run in this exact order.
  // The asynchronous sources are at the start to run in parallel with other sources.
  fonts: ad,
  domBlockers: Zd,
  fontPreferences: ip,
  audio: Jh,
  screenFrame: kd,
  canvas: ud,
  osCpu: vd,
  languages: bd,
  colorDepth: Sd,
  deviceMemory: _d,
  screenResolution: xd,
  hardwareConcurrency: Od,
  timezone: Md,
  sessionStorage: Pd,
  localStorage: Nd,
  indexedDB: Ld,
  openDatabase: Td,
  cpuClass: Dd,
  platform: Fd,
  plugins: ld,
  touchSupport: wd,
  vendor: zd,
  vendorFlavors: Ud,
  cookiesEnabled: Bd,
  colorGamut: Hd,
  invertedColors: Yd,
  forcedColors: Xd,
  monochrome: Kd,
  contrast: qd,
  reducedMotion: Qd,
  reducedTransparency: ep,
  hdr: tp,
  math: rp,
  pdfViewerEnabled: op,
  architecture: ap,
  applePay: lp,
  privateClickMeasurement: fp,
  audioBaseLatency: _p,
  // Some sources can affect other sources (e.g. WebGL can affect canvas), so it's important to run these sources
  // after other sources.
  webGlBasics: yp,
  webGlExtensions: wp
};
function Cp(r) {
  return Bh(xp, r, []);
}
var Ip = "$ if upgrade to Pro: https://fpjs.dev/pro";
function Ap(r) {
  var e = Ep(r), t = Rp(e);
  return { score: e, comment: Ip.replace(/\$/g, "".concat(t)) };
}
function Ep(r) {
  if (uo())
    return 0.4;
  if (Ce())
    return lo() && !(kr() && Rr()) ? 0.5 : 0.3;
  var e = "value" in r.platform ? r.platform.value : "";
  return /^Win/.test(e) ? 0.6 : /^Mac/.test(e) ? 0.5 : 0.7;
}
function Rp(r) {
  return _u(0.99 + 0.01 * r, 1e-4);
}
function kp(r) {
  for (var e = "", t = 0, n = Object.keys(r).sort(); t < n.length; t++) {
    var i = n[t], s = r[i], o = "error" in s ? "error" : JSON.stringify(s.value);
    e += "".concat(e ? "|" : "").concat(i.replace(/([:|\\])/g, "\\$1"), ":").concat(o);
  }
  return e;
}
function $u(r) {
  return JSON.stringify(r, function(e, t) {
    return t instanceof Error ? Dh(t) : t;
  }, 2);
}
function Pu(r) {
  return Th(kp(r));
}
function Op(r) {
  var e, t = Ap(r);
  return {
    get visitorId() {
      return e === void 0 && (e = Pu(this.components)), e;
    },
    set visitorId(n) {
      e = n;
    },
    confidence: t,
    components: r,
    version: bu
  };
}
function Mp(r) {
  return r === void 0 && (r = 50), Eh(r, r * 2);
}
function $p(r, e) {
  var t = Date.now();
  return {
    get: function(n) {
      return Te(this, void 0, void 0, function() {
        var i, s, o;
        return De(this, function(a) {
          switch (a.label) {
            case 0:
              return i = Date.now(), [4, r()];
            case 1:
              return s = a.sent(), o = Op(s), (e || n != null && n.debug) && console.log("Copy the text below to get the debug data:\n\n```\nversion: ".concat(o.version, `
userAgent: `).concat(navigator.userAgent, `
timeBetweenLoadAndGet: `).concat(i - t, `
visitorId: `).concat(o.visitorId, `
components: `).concat($u(s), "\n```")), [2, o];
          }
        });
      });
    }
  };
}
function Pp() {
  if (!(window.__fpjs_d_m || Math.random() >= 1e-3))
    try {
      var r = new XMLHttpRequest();
      r.open("get", "https://m1.openfpcdn.io/fingerprintjs/v".concat(bu, "/npm-monitoring"), !0), r.send();
    } catch (e) {
      console.error(e);
    }
}
function Np(r) {
  var e;
  return r === void 0 && (r = {}), Te(this, void 0, void 0, function() {
    var t, n, i;
    return De(this, function(s) {
      switch (s.label) {
        case 0:
          return (!((e = r.monitoring) !== null && e !== void 0) || e) && Pp(), t = r.delayFallback, n = r.debug, [4, Mp(t)];
        case 1:
          return s.sent(), i = Cp({ cache: {}, debug: n }), [2, $p(i, n)];
      }
    });
  });
}
var Lp = { load: Np, hashComponents: Pu, componentsToDebugString: $u };
/*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */
const Tp = 4, ca = 0, fa = 1, Dp = 2;
function jt(r) {
  let e = r.length;
  for (; --e >= 0; )
    r[e] = 0;
}
const Fp = 0, Nu = 1, zp = 2, Up = 3, Bp = 258, co = 29, Or = 256, lr = Or + 1 + co, $t = 30, fo = 19, Lu = 2 * lr + 1, nt = 15, xi = 16, Wp = 7, ho = 256, Tu = 16, Du = 17, Fu = 18, ps = (
  /* extra bits for each length code */
  new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0])
), Cn = (
  /* extra bits for each distance code */
  new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13])
), Zp = (
  /* extra bits for each bit length code */
  new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7])
), zu = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), jp = 512, Be = new Array((lr + 2) * 2);
jt(Be);
const tr = new Array($t * 2);
jt(tr);
const ur = new Array(jp);
jt(ur);
const cr = new Array(Bp - Up + 1);
jt(cr);
const po = new Array(co);
jt(po);
const Nn = new Array($t);
jt(Nn);
function Ci(r, e, t, n, i) {
  this.static_tree = r, this.extra_bits = e, this.extra_base = t, this.elems = n, this.max_length = i, this.has_stree = r && r.length;
}
let Uu, Bu, Wu;
function Ii(r, e) {
  this.dyn_tree = r, this.max_code = 0, this.stat_desc = e;
}
const Zu = (r) => r < 256 ? ur[r] : ur[256 + (r >>> 7)], fr = (r, e) => {
  r.pending_buf[r.pending++] = e & 255, r.pending_buf[r.pending++] = e >>> 8 & 255;
}, fe = (r, e, t) => {
  r.bi_valid > xi - t ? (r.bi_buf |= e << r.bi_valid & 65535, fr(r, r.bi_buf), r.bi_buf = e >> xi - r.bi_valid, r.bi_valid += t - xi) : (r.bi_buf |= e << r.bi_valid & 65535, r.bi_valid += t);
}, Pe = (r, e, t) => {
  fe(
    r,
    t[e * 2],
    t[e * 2 + 1]
    /*.Len*/
  );
}, ju = (r, e) => {
  let t = 0;
  do
    t |= r & 1, r >>>= 1, t <<= 1;
  while (--e > 0);
  return t >>> 1;
}, Gp = (r) => {
  r.bi_valid === 16 ? (fr(r, r.bi_buf), r.bi_buf = 0, r.bi_valid = 0) : r.bi_valid >= 8 && (r.pending_buf[r.pending++] = r.bi_buf & 255, r.bi_buf >>= 8, r.bi_valid -= 8);
}, Vp = (r, e) => {
  const t = e.dyn_tree, n = e.max_code, i = e.stat_desc.static_tree, s = e.stat_desc.has_stree, o = e.stat_desc.extra_bits, a = e.stat_desc.extra_base, l = e.stat_desc.max_length;
  let u, c, f, d, h, p, m = 0;
  for (d = 0; d <= nt; d++)
    r.bl_count[d] = 0;
  for (t[r.heap[r.heap_max] * 2 + 1] = 0, u = r.heap_max + 1; u < Lu; u++)
    c = r.heap[u], d = t[t[c * 2 + 1] * 2 + 1] + 1, d > l && (d = l, m++), t[c * 2 + 1] = d, !(c > n) && (r.bl_count[d]++, h = 0, c >= a && (h = o[c - a]), p = t[c * 2], r.opt_len += p * (d + h), s && (r.static_len += p * (i[c * 2 + 1] + h)));
  if (m !== 0) {
    do {
      for (d = l - 1; r.bl_count[d] === 0; )
        d--;
      r.bl_count[d]--, r.bl_count[d + 1] += 2, r.bl_count[l]--, m -= 2;
    } while (m > 0);
    for (d = l; d !== 0; d--)
      for (c = r.bl_count[d]; c !== 0; )
        f = r.heap[--u], !(f > n) && (t[f * 2 + 1] !== d && (r.opt_len += (d - t[f * 2 + 1]) * t[f * 2], t[f * 2 + 1] = d), c--);
  }
}, Gu = (r, e, t) => {
  const n = new Array(nt + 1);
  let i = 0, s, o;
  for (s = 1; s <= nt; s++)
    i = i + t[s - 1] << 1, n[s] = i;
  for (o = 0; o <= e; o++) {
    let a = r[o * 2 + 1];
    a !== 0 && (r[o * 2] = ju(n[a]++, a));
  }
}, Hp = () => {
  let r, e, t, n, i;
  const s = new Array(nt + 1);
  for (t = 0, n = 0; n < co - 1; n++)
    for (po[n] = t, r = 0; r < 1 << ps[n]; r++)
      cr[t++] = n;
  for (cr[t - 1] = n, i = 0, n = 0; n < 16; n++)
    for (Nn[n] = i, r = 0; r < 1 << Cn[n]; r++)
      ur[i++] = n;
  for (i >>= 7; n < $t; n++)
    for (Nn[n] = i << 7, r = 0; r < 1 << Cn[n] - 7; r++)
      ur[256 + i++] = n;
  for (e = 0; e <= nt; e++)
    s[e] = 0;
  for (r = 0; r <= 143; )
    Be[r * 2 + 1] = 8, r++, s[8]++;
  for (; r <= 255; )
    Be[r * 2 + 1] = 9, r++, s[9]++;
  for (; r <= 279; )
    Be[r * 2 + 1] = 7, r++, s[7]++;
  for (; r <= 287; )
    Be[r * 2 + 1] = 8, r++, s[8]++;
  for (Gu(Be, lr + 1, s), r = 0; r < $t; r++)
    tr[r * 2 + 1] = 5, tr[r * 2] = ju(r, 5);
  Uu = new Ci(Be, ps, Or + 1, lr, nt), Bu = new Ci(tr, Cn, 0, $t, nt), Wu = new Ci(new Array(0), Zp, 0, fo, Wp);
}, Vu = (r) => {
  let e;
  for (e = 0; e < lr; e++)
    r.dyn_ltree[e * 2] = 0;
  for (e = 0; e < $t; e++)
    r.dyn_dtree[e * 2] = 0;
  for (e = 0; e < fo; e++)
    r.bl_tree[e * 2] = 0;
  r.dyn_ltree[ho * 2] = 1, r.opt_len = r.static_len = 0, r.sym_next = r.matches = 0;
}, Hu = (r) => {
  r.bi_valid > 8 ? fr(r, r.bi_buf) : r.bi_valid > 0 && (r.pending_buf[r.pending++] = r.bi_buf), r.bi_buf = 0, r.bi_valid = 0;
}, ha = (r, e, t, n) => {
  const i = e * 2, s = t * 2;
  return r[i] < r[s] || r[i] === r[s] && n[e] <= n[t];
}, Ai = (r, e, t) => {
  const n = r.heap[t];
  let i = t << 1;
  for (; i <= r.heap_len && (i < r.heap_len && ha(e, r.heap[i + 1], r.heap[i], r.depth) && i++, !ha(e, n, r.heap[i], r.depth)); )
    r.heap[t] = r.heap[i], t = i, i <<= 1;
  r.heap[t] = n;
}, da = (r, e, t) => {
  let n, i, s = 0, o, a;
  if (r.sym_next !== 0)
    do
      n = r.pending_buf[r.sym_buf + s++] & 255, n += (r.pending_buf[r.sym_buf + s++] & 255) << 8, i = r.pending_buf[r.sym_buf + s++], n === 0 ? Pe(r, i, e) : (o = cr[i], Pe(r, o + Or + 1, e), a = ps[o], a !== 0 && (i -= po[o], fe(r, i, a)), n--, o = Zu(n), Pe(r, o, t), a = Cn[o], a !== 0 && (n -= Nn[o], fe(r, n, a)));
    while (s < r.sym_next);
  Pe(r, ho, e);
}, ms = (r, e) => {
  const t = e.dyn_tree, n = e.stat_desc.static_tree, i = e.stat_desc.has_stree, s = e.stat_desc.elems;
  let o, a, l = -1, u;
  for (r.heap_len = 0, r.heap_max = Lu, o = 0; o < s; o++)
    t[o * 2] !== 0 ? (r.heap[++r.heap_len] = l = o, r.depth[o] = 0) : t[o * 2 + 1] = 0;
  for (; r.heap_len < 2; )
    u = r.heap[++r.heap_len] = l < 2 ? ++l : 0, t[u * 2] = 1, r.depth[u] = 0, r.opt_len--, i && (r.static_len -= n[u * 2 + 1]);
  for (e.max_code = l, o = r.heap_len >> 1; o >= 1; o--)
    Ai(r, t, o);
  u = s;
  do
    o = r.heap[
      1
      /*SMALLEST*/
    ], r.heap[
      1
      /*SMALLEST*/
    ] = r.heap[r.heap_len--], Ai(
      r,
      t,
      1
      /*SMALLEST*/
    ), a = r.heap[
      1
      /*SMALLEST*/
    ], r.heap[--r.heap_max] = o, r.heap[--r.heap_max] = a, t[u * 2] = t[o * 2] + t[a * 2], r.depth[u] = (r.depth[o] >= r.depth[a] ? r.depth[o] : r.depth[a]) + 1, t[o * 2 + 1] = t[a * 2 + 1] = u, r.heap[
      1
      /*SMALLEST*/
    ] = u++, Ai(
      r,
      t,
      1
      /*SMALLEST*/
    );
  while (r.heap_len >= 2);
  r.heap[--r.heap_max] = r.heap[
    1
    /*SMALLEST*/
  ], Vp(r, e), Gu(t, l, r.bl_count);
}, pa = (r, e, t) => {
  let n, i = -1, s, o = e[0 * 2 + 1], a = 0, l = 7, u = 4;
  for (o === 0 && (l = 138, u = 3), e[(t + 1) * 2 + 1] = 65535, n = 0; n <= t; n++)
    s = o, o = e[(n + 1) * 2 + 1], !(++a < l && s === o) && (a < u ? r.bl_tree[s * 2] += a : s !== 0 ? (s !== i && r.bl_tree[s * 2]++, r.bl_tree[Tu * 2]++) : a <= 10 ? r.bl_tree[Du * 2]++ : r.bl_tree[Fu * 2]++, a = 0, i = s, o === 0 ? (l = 138, u = 3) : s === o ? (l = 6, u = 3) : (l = 7, u = 4));
}, ma = (r, e, t) => {
  let n, i = -1, s, o = e[0 * 2 + 1], a = 0, l = 7, u = 4;
  for (o === 0 && (l = 138, u = 3), n = 0; n <= t; n++)
    if (s = o, o = e[(n + 1) * 2 + 1], !(++a < l && s === o)) {
      if (a < u)
        do
          Pe(r, s, r.bl_tree);
        while (--a !== 0);
      else s !== 0 ? (s !== i && (Pe(r, s, r.bl_tree), a--), Pe(r, Tu, r.bl_tree), fe(r, a - 3, 2)) : a <= 10 ? (Pe(r, Du, r.bl_tree), fe(r, a - 3, 3)) : (Pe(r, Fu, r.bl_tree), fe(r, a - 11, 7));
      a = 0, i = s, o === 0 ? (l = 138, u = 3) : s === o ? (l = 6, u = 3) : (l = 7, u = 4);
    }
}, Yp = (r) => {
  let e;
  for (pa(r, r.dyn_ltree, r.l_desc.max_code), pa(r, r.dyn_dtree, r.d_desc.max_code), ms(r, r.bl_desc), e = fo - 1; e >= 3 && r.bl_tree[zu[e] * 2 + 1] === 0; e--)
    ;
  return r.opt_len += 3 * (e + 1) + 5 + 5 + 4, e;
}, Xp = (r, e, t, n) => {
  let i;
  for (fe(r, e - 257, 5), fe(r, t - 1, 5), fe(r, n - 4, 4), i = 0; i < n; i++)
    fe(r, r.bl_tree[zu[i] * 2 + 1], 3);
  ma(r, r.dyn_ltree, e - 1), ma(r, r.dyn_dtree, t - 1);
}, Jp = (r) => {
  let e = 4093624447, t;
  for (t = 0; t <= 31; t++, e >>>= 1)
    if (e & 1 && r.dyn_ltree[t * 2] !== 0)
      return ca;
  if (r.dyn_ltree[9 * 2] !== 0 || r.dyn_ltree[10 * 2] !== 0 || r.dyn_ltree[13 * 2] !== 0)
    return fa;
  for (t = 32; t < Or; t++)
    if (r.dyn_ltree[t * 2] !== 0)
      return fa;
  return ca;
};
let ga = !1;
const Kp = (r) => {
  ga || (Hp(), ga = !0), r.l_desc = new Ii(r.dyn_ltree, Uu), r.d_desc = new Ii(r.dyn_dtree, Bu), r.bl_desc = new Ii(r.bl_tree, Wu), r.bi_buf = 0, r.bi_valid = 0, Vu(r);
}, Yu = (r, e, t, n) => {
  fe(r, (Fp << 1) + (n ? 1 : 0), 3), Hu(r), fr(r, t), fr(r, ~t), t && r.pending_buf.set(r.window.subarray(e, e + t), r.pending), r.pending += t;
}, qp = (r) => {
  fe(r, Nu << 1, 3), Pe(r, ho, Be), Gp(r);
}, Qp = (r, e, t, n) => {
  let i, s, o = 0;
  r.level > 0 ? (r.strm.data_type === Dp && (r.strm.data_type = Jp(r)), ms(r, r.l_desc), ms(r, r.d_desc), o = Yp(r), i = r.opt_len + 3 + 7 >>> 3, s = r.static_len + 3 + 7 >>> 3, s <= i && (i = s)) : i = s = t + 5, t + 4 <= i && e !== -1 ? Yu(r, e, t, n) : r.strategy === Tp || s === i ? (fe(r, (Nu << 1) + (n ? 1 : 0), 3), da(r, Be, tr)) : (fe(r, (zp << 1) + (n ? 1 : 0), 3), Xp(r, r.l_desc.max_code + 1, r.d_desc.max_code + 1, o + 1), da(r, r.dyn_ltree, r.dyn_dtree)), Vu(r), n && Hu(r);
}, em = (r, e, t) => (r.pending_buf[r.sym_buf + r.sym_next++] = e, r.pending_buf[r.sym_buf + r.sym_next++] = e >> 8, r.pending_buf[r.sym_buf + r.sym_next++] = t, e === 0 ? r.dyn_ltree[t * 2]++ : (r.matches++, e--, r.dyn_ltree[(cr[t] + Or + 1) * 2]++, r.dyn_dtree[Zu(e) * 2]++), r.sym_next === r.sym_end);
var tm = Kp, rm = Yu, nm = Qp, im = em, sm = qp, om = {
  _tr_init: tm,
  _tr_stored_block: rm,
  _tr_flush_block: nm,
  _tr_tally: im,
  _tr_align: sm
};
const am = (r, e, t, n) => {
  let i = r & 65535 | 0, s = r >>> 16 & 65535 | 0, o = 0;
  for (; t !== 0; ) {
    o = t > 2e3 ? 2e3 : t, t -= o;
    do
      i = i + e[n++] | 0, s = s + i | 0;
    while (--o);
    i %= 65521, s %= 65521;
  }
  return i | s << 16 | 0;
};
var hr = am;
const lm = () => {
  let r, e = [];
  for (var t = 0; t < 256; t++) {
    r = t;
    for (var n = 0; n < 8; n++)
      r = r & 1 ? 3988292384 ^ r >>> 1 : r >>> 1;
    e[t] = r;
  }
  return e;
}, um = new Uint32Array(lm()), cm = (r, e, t, n) => {
  const i = um, s = n + t;
  r ^= -1;
  for (let o = n; o < s; o++)
    r = r >>> 8 ^ i[(r ^ e[o]) & 255];
  return r ^ -1;
};
var re = cm, lt = {
  2: "need dictionary",
  /* Z_NEED_DICT       2  */
  1: "stream end",
  /* Z_STREAM_END      1  */
  0: "",
  /* Z_OK              0  */
  "-1": "file error",
  /* Z_ERRNO         (-1) */
  "-2": "stream error",
  /* Z_STREAM_ERROR  (-2) */
  "-3": "data error",
  /* Z_DATA_ERROR    (-3) */
  "-4": "insufficient memory",
  /* Z_MEM_ERROR     (-4) */
  "-5": "buffer error",
  /* Z_BUF_ERROR     (-5) */
  "-6": "incompatible version"
  /* Z_VERSION_ERROR (-6) */
}, ht = {
  /* Allowed flush values; see deflate() and inflate() below for details */
  Z_NO_FLUSH: 0,
  Z_PARTIAL_FLUSH: 1,
  Z_SYNC_FLUSH: 2,
  Z_FULL_FLUSH: 3,
  Z_FINISH: 4,
  Z_BLOCK: 5,
  Z_TREES: 6,
  /* Return codes for the compression/decompression functions. Negative values
  * are errors, positive values are used for special but normal events.
  */
  Z_OK: 0,
  Z_STREAM_END: 1,
  Z_NEED_DICT: 2,
  Z_ERRNO: -1,
  Z_STREAM_ERROR: -2,
  Z_DATA_ERROR: -3,
  Z_MEM_ERROR: -4,
  Z_BUF_ERROR: -5,
  //Z_VERSION_ERROR: -6,
  /* compression levels */
  Z_NO_COMPRESSION: 0,
  Z_BEST_SPEED: 1,
  Z_BEST_COMPRESSION: 9,
  Z_DEFAULT_COMPRESSION: -1,
  Z_FILTERED: 1,
  Z_HUFFMAN_ONLY: 2,
  Z_RLE: 3,
  Z_FIXED: 4,
  Z_DEFAULT_STRATEGY: 0,
  /* Possible values of the data_type field (though see inflate()) */
  Z_BINARY: 0,
  Z_TEXT: 1,
  //Z_ASCII:                1, // = Z_TEXT (deprecated)
  Z_UNKNOWN: 2,
  /* The deflate compression method */
  Z_DEFLATED: 8
  //Z_NULL:                 null // Use -1 or null inline, depending on var type
};
const { _tr_init: fm, _tr_stored_block: gs, _tr_flush_block: hm, _tr_tally: Xe, _tr_align: dm } = om, {
  Z_NO_FLUSH: Je,
  Z_PARTIAL_FLUSH: pm,
  Z_FULL_FLUSH: mm,
  Z_FINISH: ve,
  Z_BLOCK: ya,
  Z_OK: ne,
  Z_STREAM_END: wa,
  Z_STREAM_ERROR: Ne,
  Z_DATA_ERROR: gm,
  Z_BUF_ERROR: Ei,
  Z_DEFAULT_COMPRESSION: ym,
  Z_FILTERED: wm,
  Z_HUFFMAN_ONLY: Hr,
  Z_RLE: vm,
  Z_FIXED: bm,
  Z_DEFAULT_STRATEGY: Sm,
  Z_UNKNOWN: _m,
  Z_DEFLATED: qn
} = ht, xm = 9, Cm = 15, Im = 8, Am = 29, Em = 256, ys = Em + 1 + Am, Rm = 30, km = 19, Om = 2 * ys + 1, Mm = 15, P = 3, Ye = 258, Le = Ye + P + 1, $m = 32, Nt = 42, mo = 57, ws = 69, vs = 73, bs = 91, Ss = 103, it = 113, Qt = 666, le = 1, Gt = 2, ut = 3, Vt = 4, Pm = 3, st = (r, e) => (r.msg = lt[e], e), va = (r) => r * 2 - (r > 4 ? 9 : 0), He = (r) => {
  let e = r.length;
  for (; --e >= 0; )
    r[e] = 0;
}, Nm = (r) => {
  let e, t, n, i = r.w_size;
  e = r.hash_size, n = e;
  do
    t = r.head[--n], r.head[n] = t >= i ? t - i : 0;
  while (--e);
  e = i, n = e;
  do
    t = r.prev[--n], r.prev[n] = t >= i ? t - i : 0;
  while (--e);
};
let Lm = (r, e, t) => (e << r.hash_shift ^ t) & r.hash_mask, Ke = Lm;
const de = (r) => {
  const e = r.state;
  let t = e.pending;
  t > r.avail_out && (t = r.avail_out), t !== 0 && (r.output.set(e.pending_buf.subarray(e.pending_out, e.pending_out + t), r.next_out), r.next_out += t, e.pending_out += t, r.total_out += t, r.avail_out -= t, e.pending -= t, e.pending === 0 && (e.pending_out = 0));
}, pe = (r, e) => {
  hm(r, r.block_start >= 0 ? r.block_start : -1, r.strstart - r.block_start, e), r.block_start = r.strstart, de(r.strm);
}, T = (r, e) => {
  r.pending_buf[r.pending++] = e;
}, Yt = (r, e) => {
  r.pending_buf[r.pending++] = e >>> 8 & 255, r.pending_buf[r.pending++] = e & 255;
}, _s = (r, e, t, n) => {
  let i = r.avail_in;
  return i > n && (i = n), i === 0 ? 0 : (r.avail_in -= i, e.set(r.input.subarray(r.next_in, r.next_in + i), t), r.state.wrap === 1 ? r.adler = hr(r.adler, e, i, t) : r.state.wrap === 2 && (r.adler = re(r.adler, e, i, t)), r.next_in += i, r.total_in += i, i);
}, Xu = (r, e) => {
  let t = r.max_chain_length, n = r.strstart, i, s, o = r.prev_length, a = r.nice_match;
  const l = r.strstart > r.w_size - Le ? r.strstart - (r.w_size - Le) : 0, u = r.window, c = r.w_mask, f = r.prev, d = r.strstart + Ye;
  let h = u[n + o - 1], p = u[n + o];
  r.prev_length >= r.good_match && (t >>= 2), a > r.lookahead && (a = r.lookahead);
  do
    if (i = e, !(u[i + o] !== p || u[i + o - 1] !== h || u[i] !== u[n] || u[++i] !== u[n + 1])) {
      n += 2, i++;
      do
        ;
      while (u[++n] === u[++i] && u[++n] === u[++i] && u[++n] === u[++i] && u[++n] === u[++i] && u[++n] === u[++i] && u[++n] === u[++i] && u[++n] === u[++i] && u[++n] === u[++i] && n < d);
      if (s = Ye - (d - n), n = d - Ye, s > o) {
        if (r.match_start = e, o = s, s >= a)
          break;
        h = u[n + o - 1], p = u[n + o];
      }
    }
  while ((e = f[e & c]) > l && --t !== 0);
  return o <= r.lookahead ? o : r.lookahead;
}, Lt = (r) => {
  const e = r.w_size;
  let t, n, i;
  do {
    if (n = r.window_size - r.lookahead - r.strstart, r.strstart >= e + (e - Le) && (r.window.set(r.window.subarray(e, e + e - n), 0), r.match_start -= e, r.strstart -= e, r.block_start -= e, r.insert > r.strstart && (r.insert = r.strstart), Nm(r), n += e), r.strm.avail_in === 0)
      break;
    if (t = _s(r.strm, r.window, r.strstart + r.lookahead, n), r.lookahead += t, r.lookahead + r.insert >= P)
      for (i = r.strstart - r.insert, r.ins_h = r.window[i], r.ins_h = Ke(r, r.ins_h, r.window[i + 1]); r.insert && (r.ins_h = Ke(r, r.ins_h, r.window[i + P - 1]), r.prev[i & r.w_mask] = r.head[r.ins_h], r.head[r.ins_h] = i, i++, r.insert--, !(r.lookahead + r.insert < P)); )
        ;
  } while (r.lookahead < Le && r.strm.avail_in !== 0);
}, Ju = (r, e) => {
  let t = r.pending_buf_size - 5 > r.w_size ? r.w_size : r.pending_buf_size - 5, n, i, s, o = 0, a = r.strm.avail_in;
  do {
    if (n = 65535, s = r.bi_valid + 42 >> 3, r.strm.avail_out < s || (s = r.strm.avail_out - s, i = r.strstart - r.block_start, n > i + r.strm.avail_in && (n = i + r.strm.avail_in), n > s && (n = s), n < t && (n === 0 && e !== ve || e === Je || n !== i + r.strm.avail_in)))
      break;
    o = e === ve && n === i + r.strm.avail_in ? 1 : 0, gs(r, 0, 0, o), r.pending_buf[r.pending - 4] = n, r.pending_buf[r.pending - 3] = n >> 8, r.pending_buf[r.pending - 2] = ~n, r.pending_buf[r.pending - 1] = ~n >> 8, de(r.strm), i && (i > n && (i = n), r.strm.output.set(r.window.subarray(r.block_start, r.block_start + i), r.strm.next_out), r.strm.next_out += i, r.strm.avail_out -= i, r.strm.total_out += i, r.block_start += i, n -= i), n && (_s(r.strm, r.strm.output, r.strm.next_out, n), r.strm.next_out += n, r.strm.avail_out -= n, r.strm.total_out += n);
  } while (o === 0);
  return a -= r.strm.avail_in, a && (a >= r.w_size ? (r.matches = 2, r.window.set(r.strm.input.subarray(r.strm.next_in - r.w_size, r.strm.next_in), 0), r.strstart = r.w_size, r.insert = r.strstart) : (r.window_size - r.strstart <= a && (r.strstart -= r.w_size, r.window.set(r.window.subarray(r.w_size, r.w_size + r.strstart), 0), r.matches < 2 && r.matches++, r.insert > r.strstart && (r.insert = r.strstart)), r.window.set(r.strm.input.subarray(r.strm.next_in - a, r.strm.next_in), r.strstart), r.strstart += a, r.insert += a > r.w_size - r.insert ? r.w_size - r.insert : a), r.block_start = r.strstart), r.high_water < r.strstart && (r.high_water = r.strstart), o ? Vt : e !== Je && e !== ve && r.strm.avail_in === 0 && r.strstart === r.block_start ? Gt : (s = r.window_size - r.strstart, r.strm.avail_in > s && r.block_start >= r.w_size && (r.block_start -= r.w_size, r.strstart -= r.w_size, r.window.set(r.window.subarray(r.w_size, r.w_size + r.strstart), 0), r.matches < 2 && r.matches++, s += r.w_size, r.insert > r.strstart && (r.insert = r.strstart)), s > r.strm.avail_in && (s = r.strm.avail_in), s && (_s(r.strm, r.window, r.strstart, s), r.strstart += s, r.insert += s > r.w_size - r.insert ? r.w_size - r.insert : s), r.high_water < r.strstart && (r.high_water = r.strstart), s = r.bi_valid + 42 >> 3, s = r.pending_buf_size - s > 65535 ? 65535 : r.pending_buf_size - s, t = s > r.w_size ? r.w_size : s, i = r.strstart - r.block_start, (i >= t || (i || e === ve) && e !== Je && r.strm.avail_in === 0 && i <= s) && (n = i > s ? s : i, o = e === ve && r.strm.avail_in === 0 && n === i ? 1 : 0, gs(r, r.block_start, n, o), r.block_start += n, de(r.strm)), o ? ut : le);
}, Ri = (r, e) => {
  let t, n;
  for (; ; ) {
    if (r.lookahead < Le) {
      if (Lt(r), r.lookahead < Le && e === Je)
        return le;
      if (r.lookahead === 0)
        break;
    }
    if (t = 0, r.lookahead >= P && (r.ins_h = Ke(r, r.ins_h, r.window[r.strstart + P - 1]), t = r.prev[r.strstart & r.w_mask] = r.head[r.ins_h], r.head[r.ins_h] = r.strstart), t !== 0 && r.strstart - t <= r.w_size - Le && (r.match_length = Xu(r, t)), r.match_length >= P)
      if (n = Xe(r, r.strstart - r.match_start, r.match_length - P), r.lookahead -= r.match_length, r.match_length <= r.max_lazy_match && r.lookahead >= P) {
        r.match_length--;
        do
          r.strstart++, r.ins_h = Ke(r, r.ins_h, r.window[r.strstart + P - 1]), t = r.prev[r.strstart & r.w_mask] = r.head[r.ins_h], r.head[r.ins_h] = r.strstart;
        while (--r.match_length !== 0);
        r.strstart++;
      } else
        r.strstart += r.match_length, r.match_length = 0, r.ins_h = r.window[r.strstart], r.ins_h = Ke(r, r.ins_h, r.window[r.strstart + 1]);
    else
      n = Xe(r, 0, r.window[r.strstart]), r.lookahead--, r.strstart++;
    if (n && (pe(r, !1), r.strm.avail_out === 0))
      return le;
  }
  return r.insert = r.strstart < P - 1 ? r.strstart : P - 1, e === ve ? (pe(r, !0), r.strm.avail_out === 0 ? ut : Vt) : r.sym_next && (pe(r, !1), r.strm.avail_out === 0) ? le : Gt;
}, vt = (r, e) => {
  let t, n, i;
  for (; ; ) {
    if (r.lookahead < Le) {
      if (Lt(r), r.lookahead < Le && e === Je)
        return le;
      if (r.lookahead === 0)
        break;
    }
    if (t = 0, r.lookahead >= P && (r.ins_h = Ke(r, r.ins_h, r.window[r.strstart + P - 1]), t = r.prev[r.strstart & r.w_mask] = r.head[r.ins_h], r.head[r.ins_h] = r.strstart), r.prev_length = r.match_length, r.prev_match = r.match_start, r.match_length = P - 1, t !== 0 && r.prev_length < r.max_lazy_match && r.strstart - t <= r.w_size - Le && (r.match_length = Xu(r, t), r.match_length <= 5 && (r.strategy === wm || r.match_length === P && r.strstart - r.match_start > 4096) && (r.match_length = P - 1)), r.prev_length >= P && r.match_length <= r.prev_length) {
      i = r.strstart + r.lookahead - P, n = Xe(r, r.strstart - 1 - r.prev_match, r.prev_length - P), r.lookahead -= r.prev_length - 1, r.prev_length -= 2;
      do
        ++r.strstart <= i && (r.ins_h = Ke(r, r.ins_h, r.window[r.strstart + P - 1]), t = r.prev[r.strstart & r.w_mask] = r.head[r.ins_h], r.head[r.ins_h] = r.strstart);
      while (--r.prev_length !== 0);
      if (r.match_available = 0, r.match_length = P - 1, r.strstart++, n && (pe(r, !1), r.strm.avail_out === 0))
        return le;
    } else if (r.match_available) {
      if (n = Xe(r, 0, r.window[r.strstart - 1]), n && pe(r, !1), r.strstart++, r.lookahead--, r.strm.avail_out === 0)
        return le;
    } else
      r.match_available = 1, r.strstart++, r.lookahead--;
  }
  return r.match_available && (n = Xe(r, 0, r.window[r.strstart - 1]), r.match_available = 0), r.insert = r.strstart < P - 1 ? r.strstart : P - 1, e === ve ? (pe(r, !0), r.strm.avail_out === 0 ? ut : Vt) : r.sym_next && (pe(r, !1), r.strm.avail_out === 0) ? le : Gt;
}, Tm = (r, e) => {
  let t, n, i, s;
  const o = r.window;
  for (; ; ) {
    if (r.lookahead <= Ye) {
      if (Lt(r), r.lookahead <= Ye && e === Je)
        return le;
      if (r.lookahead === 0)
        break;
    }
    if (r.match_length = 0, r.lookahead >= P && r.strstart > 0 && (i = r.strstart - 1, n = o[i], n === o[++i] && n === o[++i] && n === o[++i])) {
      s = r.strstart + Ye;
      do
        ;
      while (n === o[++i] && n === o[++i] && n === o[++i] && n === o[++i] && n === o[++i] && n === o[++i] && n === o[++i] && n === o[++i] && i < s);
      r.match_length = Ye - (s - i), r.match_length > r.lookahead && (r.match_length = r.lookahead);
    }
    if (r.match_length >= P ? (t = Xe(r, 1, r.match_length - P), r.lookahead -= r.match_length, r.strstart += r.match_length, r.match_length = 0) : (t = Xe(r, 0, r.window[r.strstart]), r.lookahead--, r.strstart++), t && (pe(r, !1), r.strm.avail_out === 0))
      return le;
  }
  return r.insert = 0, e === ve ? (pe(r, !0), r.strm.avail_out === 0 ? ut : Vt) : r.sym_next && (pe(r, !1), r.strm.avail_out === 0) ? le : Gt;
}, Dm = (r, e) => {
  let t;
  for (; ; ) {
    if (r.lookahead === 0 && (Lt(r), r.lookahead === 0)) {
      if (e === Je)
        return le;
      break;
    }
    if (r.match_length = 0, t = Xe(r, 0, r.window[r.strstart]), r.lookahead--, r.strstart++, t && (pe(r, !1), r.strm.avail_out === 0))
      return le;
  }
  return r.insert = 0, e === ve ? (pe(r, !0), r.strm.avail_out === 0 ? ut : Vt) : r.sym_next && (pe(r, !1), r.strm.avail_out === 0) ? le : Gt;
};
function Oe(r, e, t, n, i) {
  this.good_length = r, this.max_lazy = e, this.nice_length = t, this.max_chain = n, this.func = i;
}
const er = [
  /*      good lazy nice chain */
  new Oe(0, 0, 0, 0, Ju),
  /* 0 store only */
  new Oe(4, 4, 8, 4, Ri),
  /* 1 max speed, no lazy matches */
  new Oe(4, 5, 16, 8, Ri),
  /* 2 */
  new Oe(4, 6, 32, 32, Ri),
  /* 3 */
  new Oe(4, 4, 16, 16, vt),
  /* 4 lazy matches */
  new Oe(8, 16, 32, 32, vt),
  /* 5 */
  new Oe(8, 16, 128, 128, vt),
  /* 6 */
  new Oe(8, 32, 128, 256, vt),
  /* 7 */
  new Oe(32, 128, 258, 1024, vt),
  /* 8 */
  new Oe(32, 258, 258, 4096, vt)
  /* 9 max compression */
], Fm = (r) => {
  r.window_size = 2 * r.w_size, He(r.head), r.max_lazy_match = er[r.level].max_lazy, r.good_match = er[r.level].good_length, r.nice_match = er[r.level].nice_length, r.max_chain_length = er[r.level].max_chain, r.strstart = 0, r.block_start = 0, r.lookahead = 0, r.insert = 0, r.match_length = r.prev_length = P - 1, r.match_available = 0, r.ins_h = 0;
};
function zm() {
  this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = qn, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new Uint16Array(Om * 2), this.dyn_dtree = new Uint16Array((2 * Rm + 1) * 2), this.bl_tree = new Uint16Array((2 * km + 1) * 2), He(this.dyn_ltree), He(this.dyn_dtree), He(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new Uint16Array(Mm + 1), this.heap = new Uint16Array(2 * ys + 1), He(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new Uint16Array(2 * ys + 1), He(this.depth), this.sym_buf = 0, this.lit_bufsize = 0, this.sym_next = 0, this.sym_end = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
}
const Mr = (r) => {
  if (!r)
    return 1;
  const e = r.state;
  return !e || e.strm !== r || e.status !== Nt && //#ifdef GZIP
  e.status !== mo && //#endif
  e.status !== ws && e.status !== vs && e.status !== bs && e.status !== Ss && e.status !== it && e.status !== Qt ? 1 : 0;
}, Ku = (r) => {
  if (Mr(r))
    return st(r, Ne);
  r.total_in = r.total_out = 0, r.data_type = _m;
  const e = r.state;
  return e.pending = 0, e.pending_out = 0, e.wrap < 0 && (e.wrap = -e.wrap), e.status = //#ifdef GZIP
  e.wrap === 2 ? mo : (
    //#endif
    e.wrap ? Nt : it
  ), r.adler = e.wrap === 2 ? 0 : 1, e.last_flush = -2, fm(e), ne;
}, qu = (r) => {
  const e = Ku(r);
  return e === ne && Fm(r.state), e;
}, Um = (r, e) => Mr(r) || r.state.wrap !== 2 ? Ne : (r.state.gzhead = e, ne), Qu = (r, e, t, n, i, s) => {
  if (!r)
    return Ne;
  let o = 1;
  if (e === ym && (e = 6), n < 0 ? (o = 0, n = -n) : n > 15 && (o = 2, n -= 16), i < 1 || i > xm || t !== qn || n < 8 || n > 15 || e < 0 || e > 9 || s < 0 || s > bm || n === 8 && o !== 1)
    return st(r, Ne);
  n === 8 && (n = 9);
  const a = new zm();
  return r.state = a, a.strm = r, a.status = Nt, a.wrap = o, a.gzhead = null, a.w_bits = n, a.w_size = 1 << a.w_bits, a.w_mask = a.w_size - 1, a.hash_bits = i + 7, a.hash_size = 1 << a.hash_bits, a.hash_mask = a.hash_size - 1, a.hash_shift = ~~((a.hash_bits + P - 1) / P), a.window = new Uint8Array(a.w_size * 2), a.head = new Uint16Array(a.hash_size), a.prev = new Uint16Array(a.w_size), a.lit_bufsize = 1 << i + 6, a.pending_buf_size = a.lit_bufsize * 4, a.pending_buf = new Uint8Array(a.pending_buf_size), a.sym_buf = a.lit_bufsize, a.sym_end = (a.lit_bufsize - 1) * 3, a.level = e, a.strategy = s, a.method = t, qu(r);
}, Bm = (r, e) => Qu(r, e, qn, Cm, Im, Sm), Wm = (r, e) => {
  if (Mr(r) || e > ya || e < 0)
    return r ? st(r, Ne) : Ne;
  const t = r.state;
  if (!r.output || r.avail_in !== 0 && !r.input || t.status === Qt && e !== ve)
    return st(r, r.avail_out === 0 ? Ei : Ne);
  const n = t.last_flush;
  if (t.last_flush = e, t.pending !== 0) {
    if (de(r), r.avail_out === 0)
      return t.last_flush = -1, ne;
  } else if (r.avail_in === 0 && va(e) <= va(n) && e !== ve)
    return st(r, Ei);
  if (t.status === Qt && r.avail_in !== 0)
    return st(r, Ei);
  if (t.status === Nt && t.wrap === 0 && (t.status = it), t.status === Nt) {
    let i = qn + (t.w_bits - 8 << 4) << 8, s = -1;
    if (t.strategy >= Hr || t.level < 2 ? s = 0 : t.level < 6 ? s = 1 : t.level === 6 ? s = 2 : s = 3, i |= s << 6, t.strstart !== 0 && (i |= $m), i += 31 - i % 31, Yt(t, i), t.strstart !== 0 && (Yt(t, r.adler >>> 16), Yt(t, r.adler & 65535)), r.adler = 1, t.status = it, de(r), t.pending !== 0)
      return t.last_flush = -1, ne;
  }
  if (t.status === mo) {
    if (r.adler = 0, T(t, 31), T(t, 139), T(t, 8), t.gzhead)
      T(
        t,
        (t.gzhead.text ? 1 : 0) + (t.gzhead.hcrc ? 2 : 0) + (t.gzhead.extra ? 4 : 0) + (t.gzhead.name ? 8 : 0) + (t.gzhead.comment ? 16 : 0)
      ), T(t, t.gzhead.time & 255), T(t, t.gzhead.time >> 8 & 255), T(t, t.gzhead.time >> 16 & 255), T(t, t.gzhead.time >> 24 & 255), T(t, t.level === 9 ? 2 : t.strategy >= Hr || t.level < 2 ? 4 : 0), T(t, t.gzhead.os & 255), t.gzhead.extra && t.gzhead.extra.length && (T(t, t.gzhead.extra.length & 255), T(t, t.gzhead.extra.length >> 8 & 255)), t.gzhead.hcrc && (r.adler = re(r.adler, t.pending_buf, t.pending, 0)), t.gzindex = 0, t.status = ws;
    else if (T(t, 0), T(t, 0), T(t, 0), T(t, 0), T(t, 0), T(t, t.level === 9 ? 2 : t.strategy >= Hr || t.level < 2 ? 4 : 0), T(t, Pm), t.status = it, de(r), t.pending !== 0)
      return t.last_flush = -1, ne;
  }
  if (t.status === ws) {
    if (t.gzhead.extra) {
      let i = t.pending, s = (t.gzhead.extra.length & 65535) - t.gzindex;
      for (; t.pending + s > t.pending_buf_size; ) {
        let a = t.pending_buf_size - t.pending;
        if (t.pending_buf.set(t.gzhead.extra.subarray(t.gzindex, t.gzindex + a), t.pending), t.pending = t.pending_buf_size, t.gzhead.hcrc && t.pending > i && (r.adler = re(r.adler, t.pending_buf, t.pending - i, i)), t.gzindex += a, de(r), t.pending !== 0)
          return t.last_flush = -1, ne;
        i = 0, s -= a;
      }
      let o = new Uint8Array(t.gzhead.extra);
      t.pending_buf.set(o.subarray(t.gzindex, t.gzindex + s), t.pending), t.pending += s, t.gzhead.hcrc && t.pending > i && (r.adler = re(r.adler, t.pending_buf, t.pending - i, i)), t.gzindex = 0;
    }
    t.status = vs;
  }
  if (t.status === vs) {
    if (t.gzhead.name) {
      let i = t.pending, s;
      do {
        if (t.pending === t.pending_buf_size) {
          if (t.gzhead.hcrc && t.pending > i && (r.adler = re(r.adler, t.pending_buf, t.pending - i, i)), de(r), t.pending !== 0)
            return t.last_flush = -1, ne;
          i = 0;
        }
        t.gzindex < t.gzhead.name.length ? s = t.gzhead.name.charCodeAt(t.gzindex++) & 255 : s = 0, T(t, s);
      } while (s !== 0);
      t.gzhead.hcrc && t.pending > i && (r.adler = re(r.adler, t.pending_buf, t.pending - i, i)), t.gzindex = 0;
    }
    t.status = bs;
  }
  if (t.status === bs) {
    if (t.gzhead.comment) {
      let i = t.pending, s;
      do {
        if (t.pending === t.pending_buf_size) {
          if (t.gzhead.hcrc && t.pending > i && (r.adler = re(r.adler, t.pending_buf, t.pending - i, i)), de(r), t.pending !== 0)
            return t.last_flush = -1, ne;
          i = 0;
        }
        t.gzindex < t.gzhead.comment.length ? s = t.gzhead.comment.charCodeAt(t.gzindex++) & 255 : s = 0, T(t, s);
      } while (s !== 0);
      t.gzhead.hcrc && t.pending > i && (r.adler = re(r.adler, t.pending_buf, t.pending - i, i));
    }
    t.status = Ss;
  }
  if (t.status === Ss) {
    if (t.gzhead.hcrc) {
      if (t.pending + 2 > t.pending_buf_size && (de(r), t.pending !== 0))
        return t.last_flush = -1, ne;
      T(t, r.adler & 255), T(t, r.adler >> 8 & 255), r.adler = 0;
    }
    if (t.status = it, de(r), t.pending !== 0)
      return t.last_flush = -1, ne;
  }
  if (r.avail_in !== 0 || t.lookahead !== 0 || e !== Je && t.status !== Qt) {
    let i = t.level === 0 ? Ju(t, e) : t.strategy === Hr ? Dm(t, e) : t.strategy === vm ? Tm(t, e) : er[t.level].func(t, e);
    if ((i === ut || i === Vt) && (t.status = Qt), i === le || i === ut)
      return r.avail_out === 0 && (t.last_flush = -1), ne;
    if (i === Gt && (e === pm ? dm(t) : e !== ya && (gs(t, 0, 0, !1), e === mm && (He(t.head), t.lookahead === 0 && (t.strstart = 0, t.block_start = 0, t.insert = 0))), de(r), r.avail_out === 0))
      return t.last_flush = -1, ne;
  }
  return e !== ve ? ne : t.wrap <= 0 ? wa : (t.wrap === 2 ? (T(t, r.adler & 255), T(t, r.adler >> 8 & 255), T(t, r.adler >> 16 & 255), T(t, r.adler >> 24 & 255), T(t, r.total_in & 255), T(t, r.total_in >> 8 & 255), T(t, r.total_in >> 16 & 255), T(t, r.total_in >> 24 & 255)) : (Yt(t, r.adler >>> 16), Yt(t, r.adler & 65535)), de(r), t.wrap > 0 && (t.wrap = -t.wrap), t.pending !== 0 ? ne : wa);
}, Zm = (r) => {
  if (Mr(r))
    return Ne;
  const e = r.state.status;
  return r.state = null, e === it ? st(r, gm) : ne;
}, jm = (r, e) => {
  let t = e.length;
  if (Mr(r))
    return Ne;
  const n = r.state, i = n.wrap;
  if (i === 2 || i === 1 && n.status !== Nt || n.lookahead)
    return Ne;
  if (i === 1 && (r.adler = hr(r.adler, e, t, 0)), n.wrap = 0, t >= n.w_size) {
    i === 0 && (He(n.head), n.strstart = 0, n.block_start = 0, n.insert = 0);
    let l = new Uint8Array(n.w_size);
    l.set(e.subarray(t - n.w_size, t), 0), e = l, t = n.w_size;
  }
  const s = r.avail_in, o = r.next_in, a = r.input;
  for (r.avail_in = t, r.next_in = 0, r.input = e, Lt(n); n.lookahead >= P; ) {
    let l = n.strstart, u = n.lookahead - (P - 1);
    do
      n.ins_h = Ke(n, n.ins_h, n.window[l + P - 1]), n.prev[l & n.w_mask] = n.head[n.ins_h], n.head[n.ins_h] = l, l++;
    while (--u);
    n.strstart = l, n.lookahead = P - 1, Lt(n);
  }
  return n.strstart += n.lookahead, n.block_start = n.strstart, n.insert = n.lookahead, n.lookahead = 0, n.match_length = n.prev_length = P - 1, n.match_available = 0, r.next_in = o, r.input = a, r.avail_in = s, n.wrap = i, ne;
};
var Gm = Bm, Vm = Qu, Hm = qu, Ym = Ku, Xm = Um, Jm = Wm, Km = Zm, qm = jm, Qm = "pako deflate (from Nodeca project)", rr = {
  deflateInit: Gm,
  deflateInit2: Vm,
  deflateReset: Hm,
  deflateResetKeep: Ym,
  deflateSetHeader: Xm,
  deflate: Jm,
  deflateEnd: Km,
  deflateSetDictionary: qm,
  deflateInfo: Qm
};
const eg = (r, e) => Object.prototype.hasOwnProperty.call(r, e);
var tg = function(r) {
  const e = Array.prototype.slice.call(arguments, 1);
  for (; e.length; ) {
    const t = e.shift();
    if (t) {
      if (typeof t != "object")
        throw new TypeError(t + "must be non-object");
      for (const n in t)
        eg(t, n) && (r[n] = t[n]);
    }
  }
  return r;
}, rg = (r) => {
  let e = 0;
  for (let n = 0, i = r.length; n < i; n++)
    e += r[n].length;
  const t = new Uint8Array(e);
  for (let n = 0, i = 0, s = r.length; n < s; n++) {
    let o = r[n];
    t.set(o, i), i += o.length;
  }
  return t;
}, Qn = {
  assign: tg,
  flattenChunks: rg
};
let ec = !0;
try {
  String.fromCharCode.apply(null, new Uint8Array(1));
} catch {
  ec = !1;
}
const dr = new Uint8Array(256);
for (let r = 0; r < 256; r++)
  dr[r] = r >= 252 ? 6 : r >= 248 ? 5 : r >= 240 ? 4 : r >= 224 ? 3 : r >= 192 ? 2 : 1;
dr[254] = dr[254] = 1;
var ng = (r) => {
  if (typeof TextEncoder == "function" && TextEncoder.prototype.encode)
    return new TextEncoder().encode(r);
  let e, t, n, i, s, o = r.length, a = 0;
  for (i = 0; i < o; i++)
    t = r.charCodeAt(i), (t & 64512) === 55296 && i + 1 < o && (n = r.charCodeAt(i + 1), (n & 64512) === 56320 && (t = 65536 + (t - 55296 << 10) + (n - 56320), i++)), a += t < 128 ? 1 : t < 2048 ? 2 : t < 65536 ? 3 : 4;
  for (e = new Uint8Array(a), s = 0, i = 0; s < a; i++)
    t = r.charCodeAt(i), (t & 64512) === 55296 && i + 1 < o && (n = r.charCodeAt(i + 1), (n & 64512) === 56320 && (t = 65536 + (t - 55296 << 10) + (n - 56320), i++)), t < 128 ? e[s++] = t : t < 2048 ? (e[s++] = 192 | t >>> 6, e[s++] = 128 | t & 63) : t < 65536 ? (e[s++] = 224 | t >>> 12, e[s++] = 128 | t >>> 6 & 63, e[s++] = 128 | t & 63) : (e[s++] = 240 | t >>> 18, e[s++] = 128 | t >>> 12 & 63, e[s++] = 128 | t >>> 6 & 63, e[s++] = 128 | t & 63);
  return e;
};
const ig = (r, e) => {
  if (e < 65534 && r.subarray && ec)
    return String.fromCharCode.apply(null, r.length === e ? r : r.subarray(0, e));
  let t = "";
  for (let n = 0; n < e; n++)
    t += String.fromCharCode(r[n]);
  return t;
};
var sg = (r, e) => {
  const t = e || r.length;
  if (typeof TextDecoder == "function" && TextDecoder.prototype.decode)
    return new TextDecoder().decode(r.subarray(0, e));
  let n, i;
  const s = new Array(t * 2);
  for (i = 0, n = 0; n < t; ) {
    let o = r[n++];
    if (o < 128) {
      s[i++] = o;
      continue;
    }
    let a = dr[o];
    if (a > 4) {
      s[i++] = 65533, n += a - 1;
      continue;
    }
    for (o &= a === 2 ? 31 : a === 3 ? 15 : 7; a > 1 && n < t; )
      o = o << 6 | r[n++] & 63, a--;
    if (a > 1) {
      s[i++] = 65533;
      continue;
    }
    o < 65536 ? s[i++] = o : (o -= 65536, s[i++] = 55296 | o >> 10 & 1023, s[i++] = 56320 | o & 1023);
  }
  return ig(s, i);
}, og = (r, e) => {
  e = e || r.length, e > r.length && (e = r.length);
  let t = e - 1;
  for (; t >= 0 && (r[t] & 192) === 128; )
    t--;
  return t < 0 || t === 0 ? e : t + dr[r[t]] > e ? t : e;
}, pr = {
  string2buf: ng,
  buf2string: sg,
  utf8border: og
};
function ag() {
  this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
}
var tc = ag;
const rc = Object.prototype.toString, {
  Z_NO_FLUSH: lg,
  Z_SYNC_FLUSH: ug,
  Z_FULL_FLUSH: cg,
  Z_FINISH: fg,
  Z_OK: Ln,
  Z_STREAM_END: hg,
  Z_DEFAULT_COMPRESSION: dg,
  Z_DEFAULT_STRATEGY: pg,
  Z_DEFLATED: mg
} = ht;
function $r(r) {
  this.options = Qn.assign({
    level: dg,
    method: mg,
    chunkSize: 16384,
    windowBits: 15,
    memLevel: 8,
    strategy: pg
  }, r || {});
  let e = this.options;
  e.raw && e.windowBits > 0 ? e.windowBits = -e.windowBits : e.gzip && e.windowBits > 0 && e.windowBits < 16 && (e.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new tc(), this.strm.avail_out = 0;
  let t = rr.deflateInit2(
    this.strm,
    e.level,
    e.method,
    e.windowBits,
    e.memLevel,
    e.strategy
  );
  if (t !== Ln)
    throw new Error(lt[t]);
  if (e.header && rr.deflateSetHeader(this.strm, e.header), e.dictionary) {
    let n;
    if (typeof e.dictionary == "string" ? n = pr.string2buf(e.dictionary) : rc.call(e.dictionary) === "[object ArrayBuffer]" ? n = new Uint8Array(e.dictionary) : n = e.dictionary, t = rr.deflateSetDictionary(this.strm, n), t !== Ln)
      throw new Error(lt[t]);
    this._dict_set = !0;
  }
}
$r.prototype.push = function(r, e) {
  const t = this.strm, n = this.options.chunkSize;
  let i, s;
  if (this.ended)
    return !1;
  for (e === ~~e ? s = e : s = e === !0 ? fg : lg, typeof r == "string" ? t.input = pr.string2buf(r) : rc.call(r) === "[object ArrayBuffer]" ? t.input = new Uint8Array(r) : t.input = r, t.next_in = 0, t.avail_in = t.input.length; ; ) {
    if (t.avail_out === 0 && (t.output = new Uint8Array(n), t.next_out = 0, t.avail_out = n), (s === ug || s === cg) && t.avail_out <= 6) {
      this.onData(t.output.subarray(0, t.next_out)), t.avail_out = 0;
      continue;
    }
    if (i = rr.deflate(t, s), i === hg)
      return t.next_out > 0 && this.onData(t.output.subarray(0, t.next_out)), i = rr.deflateEnd(this.strm), this.onEnd(i), this.ended = !0, i === Ln;
    if (t.avail_out === 0) {
      this.onData(t.output);
      continue;
    }
    if (s > 0 && t.next_out > 0) {
      this.onData(t.output.subarray(0, t.next_out)), t.avail_out = 0;
      continue;
    }
    if (t.avail_in === 0) break;
  }
  return !0;
};
$r.prototype.onData = function(r) {
  this.chunks.push(r);
};
$r.prototype.onEnd = function(r) {
  r === Ln && (this.result = Qn.flattenChunks(this.chunks)), this.chunks = [], this.err = r, this.msg = this.strm.msg;
};
function go(r, e) {
  const t = new $r(e);
  if (t.push(r, !0), t.err)
    throw t.msg || lt[t.err];
  return t.result;
}
function gg(r, e) {
  return e = e || {}, e.raw = !0, go(r, e);
}
function yg(r, e) {
  return e = e || {}, e.gzip = !0, go(r, e);
}
var wg = $r, vg = go, bg = gg, Sg = yg, _g = ht, xg = {
  Deflate: wg,
  deflate: vg,
  deflateRaw: bg,
  gzip: Sg,
  constants: _g
};
const Yr = 16209, Cg = 16191;
var Ig = function(e, t) {
  let n, i, s, o, a, l, u, c, f, d, h, p, m, g, v, b, y, w, _, E, x, S, A, I;
  const R = e.state;
  n = e.next_in, A = e.input, i = n + (e.avail_in - 5), s = e.next_out, I = e.output, o = s - (t - e.avail_out), a = s + (e.avail_out - 257), l = R.dmax, u = R.wsize, c = R.whave, f = R.wnext, d = R.window, h = R.hold, p = R.bits, m = R.lencode, g = R.distcode, v = (1 << R.lenbits) - 1, b = (1 << R.distbits) - 1;
  e:
    do {
      p < 15 && (h += A[n++] << p, p += 8, h += A[n++] << p, p += 8), y = m[h & v];
      t:
        for (; ; ) {
          if (w = y >>> 24, h >>>= w, p -= w, w = y >>> 16 & 255, w === 0)
            I[s++] = y & 65535;
          else if (w & 16) {
            _ = y & 65535, w &= 15, w && (p < w && (h += A[n++] << p, p += 8), _ += h & (1 << w) - 1, h >>>= w, p -= w), p < 15 && (h += A[n++] << p, p += 8, h += A[n++] << p, p += 8), y = g[h & b];
            r:
              for (; ; ) {
                if (w = y >>> 24, h >>>= w, p -= w, w = y >>> 16 & 255, w & 16) {
                  if (E = y & 65535, w &= 15, p < w && (h += A[n++] << p, p += 8, p < w && (h += A[n++] << p, p += 8)), E += h & (1 << w) - 1, E > l) {
                    e.msg = "invalid distance too far back", R.mode = Yr;
                    break e;
                  }
                  if (h >>>= w, p -= w, w = s - o, E > w) {
                    if (w = E - w, w > c && R.sane) {
                      e.msg = "invalid distance too far back", R.mode = Yr;
                      break e;
                    }
                    if (x = 0, S = d, f === 0) {
                      if (x += u - w, w < _) {
                        _ -= w;
                        do
                          I[s++] = d[x++];
                        while (--w);
                        x = s - E, S = I;
                      }
                    } else if (f < w) {
                      if (x += u + f - w, w -= f, w < _) {
                        _ -= w;
                        do
                          I[s++] = d[x++];
                        while (--w);
                        if (x = 0, f < _) {
                          w = f, _ -= w;
                          do
                            I[s++] = d[x++];
                          while (--w);
                          x = s - E, S = I;
                        }
                      }
                    } else if (x += f - w, w < _) {
                      _ -= w;
                      do
                        I[s++] = d[x++];
                      while (--w);
                      x = s - E, S = I;
                    }
                    for (; _ > 2; )
                      I[s++] = S[x++], I[s++] = S[x++], I[s++] = S[x++], _ -= 3;
                    _ && (I[s++] = S[x++], _ > 1 && (I[s++] = S[x++]));
                  } else {
                    x = s - E;
                    do
                      I[s++] = I[x++], I[s++] = I[x++], I[s++] = I[x++], _ -= 3;
                    while (_ > 2);
                    _ && (I[s++] = I[x++], _ > 1 && (I[s++] = I[x++]));
                  }
                } else if (w & 64) {
                  e.msg = "invalid distance code", R.mode = Yr;
                  break e;
                } else {
                  y = g[(y & 65535) + (h & (1 << w) - 1)];
                  continue r;
                }
                break;
              }
          } else if (w & 64)
            if (w & 32) {
              R.mode = Cg;
              break e;
            } else {
              e.msg = "invalid literal/length code", R.mode = Yr;
              break e;
            }
          else {
            y = m[(y & 65535) + (h & (1 << w) - 1)];
            continue t;
          }
          break;
        }
    } while (n < i && s < a);
  _ = p >> 3, n -= _, p -= _ << 3, h &= (1 << p) - 1, e.next_in = n, e.next_out = s, e.avail_in = n < i ? 5 + (i - n) : 5 - (n - i), e.avail_out = s < a ? 257 + (a - s) : 257 - (s - a), R.hold = h, R.bits = p;
};
const bt = 15, ba = 852, Sa = 592, _a = 0, ki = 1, xa = 2, Ag = new Uint16Array([
  /* Length codes 257..285 base */
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  13,
  15,
  17,
  19,
  23,
  27,
  31,
  35,
  43,
  51,
  59,
  67,
  83,
  99,
  115,
  131,
  163,
  195,
  227,
  258,
  0,
  0
]), Eg = new Uint8Array([
  /* Length codes 257..285 extra */
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  17,
  17,
  17,
  17,
  18,
  18,
  18,
  18,
  19,
  19,
  19,
  19,
  20,
  20,
  20,
  20,
  21,
  21,
  21,
  21,
  16,
  72,
  78
]), Rg = new Uint16Array([
  /* Distance codes 0..29 base */
  1,
  2,
  3,
  4,
  5,
  7,
  9,
  13,
  17,
  25,
  33,
  49,
  65,
  97,
  129,
  193,
  257,
  385,
  513,
  769,
  1025,
  1537,
  2049,
  3073,
  4097,
  6145,
  8193,
  12289,
  16385,
  24577,
  0,
  0
]), kg = new Uint8Array([
  /* Distance codes 0..29 extra */
  16,
  16,
  16,
  16,
  17,
  17,
  18,
  18,
  19,
  19,
  20,
  20,
  21,
  21,
  22,
  22,
  23,
  23,
  24,
  24,
  25,
  25,
  26,
  26,
  27,
  27,
  28,
  28,
  29,
  29,
  64,
  64
]), Og = (r, e, t, n, i, s, o, a) => {
  const l = a.bits;
  let u = 0, c = 0, f = 0, d = 0, h = 0, p = 0, m = 0, g = 0, v = 0, b = 0, y, w, _, E, x, S = null, A;
  const I = new Uint16Array(bt + 1), R = new Uint16Array(bt + 1);
  let q = null, k, me, Ee;
  for (u = 0; u <= bt; u++)
    I[u] = 0;
  for (c = 0; c < n; c++)
    I[e[t + c]]++;
  for (h = l, d = bt; d >= 1 && I[d] === 0; d--)
    ;
  if (h > d && (h = d), d === 0)
    return i[s++] = 1 << 24 | 64 << 16 | 0, i[s++] = 1 << 24 | 64 << 16 | 0, a.bits = 1, 0;
  for (f = 1; f < d && I[f] === 0; f++)
    ;
  for (h < f && (h = f), g = 1, u = 1; u <= bt; u++)
    if (g <<= 1, g -= I[u], g < 0)
      return -1;
  if (g > 0 && (r === _a || d !== 1))
    return -1;
  for (R[1] = 0, u = 1; u < bt; u++)
    R[u + 1] = R[u] + I[u];
  for (c = 0; c < n; c++)
    e[t + c] !== 0 && (o[R[e[t + c]]++] = c);
  if (r === _a ? (S = q = o, A = 20) : r === ki ? (S = Ag, q = Eg, A = 257) : (S = Rg, q = kg, A = 0), b = 0, c = 0, u = f, x = s, p = h, m = 0, _ = -1, v = 1 << h, E = v - 1, r === ki && v > ba || r === xa && v > Sa)
    return 1;
  for (; ; ) {
    k = u - m, o[c] + 1 < A ? (me = 0, Ee = o[c]) : o[c] >= A ? (me = q[o[c] - A], Ee = S[o[c] - A]) : (me = 96, Ee = 0), y = 1 << u - m, w = 1 << p, f = w;
    do
      w -= y, i[x + (b >> m) + w] = k << 24 | me << 16 | Ee | 0;
    while (w !== 0);
    for (y = 1 << u - 1; b & y; )
      y >>= 1;
    if (y !== 0 ? (b &= y - 1, b += y) : b = 0, c++, --I[u] === 0) {
      if (u === d)
        break;
      u = e[t + o[c]];
    }
    if (u > h && (b & E) !== _) {
      for (m === 0 && (m = h), x += f, p = u - m, g = 1 << p; p + m < d && (g -= I[p + m], !(g <= 0)); )
        p++, g <<= 1;
      if (v += 1 << p, r === ki && v > ba || r === xa && v > Sa)
        return 1;
      _ = b & E, i[_] = h << 24 | p << 16 | x - s | 0;
    }
  }
  return b !== 0 && (i[x + b] = u - m << 24 | 64 << 16 | 0), a.bits = h, 0;
};
var nr = Og;
const Mg = 0, nc = 1, ic = 2, {
  Z_FINISH: Ca,
  Z_BLOCK: $g,
  Z_TREES: Xr,
  Z_OK: ct,
  Z_STREAM_END: Pg,
  Z_NEED_DICT: Ng,
  Z_STREAM_ERROR: be,
  Z_DATA_ERROR: sc,
  Z_MEM_ERROR: oc,
  Z_BUF_ERROR: Lg,
  Z_DEFLATED: Ia
} = ht, ei = 16180, Aa = 16181, Ea = 16182, Ra = 16183, ka = 16184, Oa = 16185, Ma = 16186, $a = 16187, Pa = 16188, Na = 16189, Tn = 16190, Fe = 16191, Oi = 16192, La = 16193, Mi = 16194, Ta = 16195, Da = 16196, Fa = 16197, za = 16198, Jr = 16199, Kr = 16200, Ua = 16201, Ba = 16202, Wa = 16203, Za = 16204, ja = 16205, $i = 16206, Ga = 16207, Va = 16208, G = 16209, ac = 16210, lc = 16211, Tg = 852, Dg = 592, Fg = 15, zg = Fg, Ha = (r) => (r >>> 24 & 255) + (r >>> 8 & 65280) + ((r & 65280) << 8) + ((r & 255) << 24);
function Ug() {
  this.strm = null, this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new Uint16Array(320), this.work = new Uint16Array(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
}
const dt = (r) => {
  if (!r)
    return 1;
  const e = r.state;
  return !e || e.strm !== r || e.mode < ei || e.mode > lc ? 1 : 0;
}, uc = (r) => {
  if (dt(r))
    return be;
  const e = r.state;
  return r.total_in = r.total_out = e.total = 0, r.msg = "", e.wrap && (r.adler = e.wrap & 1), e.mode = ei, e.last = 0, e.havedict = 0, e.flags = -1, e.dmax = 32768, e.head = null, e.hold = 0, e.bits = 0, e.lencode = e.lendyn = new Int32Array(Tg), e.distcode = e.distdyn = new Int32Array(Dg), e.sane = 1, e.back = -1, ct;
}, cc = (r) => {
  if (dt(r))
    return be;
  const e = r.state;
  return e.wsize = 0, e.whave = 0, e.wnext = 0, uc(r);
}, fc = (r, e) => {
  let t;
  if (dt(r))
    return be;
  const n = r.state;
  return e < 0 ? (t = 0, e = -e) : (t = (e >> 4) + 5, e < 48 && (e &= 15)), e && (e < 8 || e > 15) ? be : (n.window !== null && n.wbits !== e && (n.window = null), n.wrap = t, n.wbits = e, cc(r));
}, hc = (r, e) => {
  if (!r)
    return be;
  const t = new Ug();
  r.state = t, t.strm = r, t.window = null, t.mode = ei;
  const n = fc(r, e);
  return n !== ct && (r.state = null), n;
}, Bg = (r) => hc(r, zg);
let Ya = !0, Pi, Ni;
const Wg = (r) => {
  if (Ya) {
    Pi = new Int32Array(512), Ni = new Int32Array(32);
    let e = 0;
    for (; e < 144; )
      r.lens[e++] = 8;
    for (; e < 256; )
      r.lens[e++] = 9;
    for (; e < 280; )
      r.lens[e++] = 7;
    for (; e < 288; )
      r.lens[e++] = 8;
    for (nr(nc, r.lens, 0, 288, Pi, 0, r.work, { bits: 9 }), e = 0; e < 32; )
      r.lens[e++] = 5;
    nr(ic, r.lens, 0, 32, Ni, 0, r.work, { bits: 5 }), Ya = !1;
  }
  r.lencode = Pi, r.lenbits = 9, r.distcode = Ni, r.distbits = 5;
}, dc = (r, e, t, n) => {
  let i;
  const s = r.state;
  return s.window === null && (s.wsize = 1 << s.wbits, s.wnext = 0, s.whave = 0, s.window = new Uint8Array(s.wsize)), n >= s.wsize ? (s.window.set(e.subarray(t - s.wsize, t), 0), s.wnext = 0, s.whave = s.wsize) : (i = s.wsize - s.wnext, i > n && (i = n), s.window.set(e.subarray(t - n, t - n + i), s.wnext), n -= i, n ? (s.window.set(e.subarray(t - n, t), 0), s.wnext = n, s.whave = s.wsize) : (s.wnext += i, s.wnext === s.wsize && (s.wnext = 0), s.whave < s.wsize && (s.whave += i))), 0;
}, Zg = (r, e) => {
  let t, n, i, s, o, a, l, u, c, f, d, h, p, m, g = 0, v, b, y, w, _, E, x, S;
  const A = new Uint8Array(4);
  let I, R;
  const q = (
    /* permutation of code lengths */
    new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15])
  );
  if (dt(r) || !r.output || !r.input && r.avail_in !== 0)
    return be;
  t = r.state, t.mode === Fe && (t.mode = Oi), o = r.next_out, i = r.output, l = r.avail_out, s = r.next_in, n = r.input, a = r.avail_in, u = t.hold, c = t.bits, f = a, d = l, S = ct;
  e:
    for (; ; )
      switch (t.mode) {
        case ei:
          if (t.wrap === 0) {
            t.mode = Oi;
            break;
          }
          for (; c < 16; ) {
            if (a === 0)
              break e;
            a--, u += n[s++] << c, c += 8;
          }
          if (t.wrap & 2 && u === 35615) {
            t.wbits === 0 && (t.wbits = 15), t.check = 0, A[0] = u & 255, A[1] = u >>> 8 & 255, t.check = re(t.check, A, 2, 0), u = 0, c = 0, t.mode = Aa;
            break;
          }
          if (t.head && (t.head.done = !1), !(t.wrap & 1) || /* check if zlib header allowed */
          (((u & 255) << 8) + (u >> 8)) % 31) {
            r.msg = "incorrect header check", t.mode = G;
            break;
          }
          if ((u & 15) !== Ia) {
            r.msg = "unknown compression method", t.mode = G;
            break;
          }
          if (u >>>= 4, c -= 4, x = (u & 15) + 8, t.wbits === 0 && (t.wbits = x), x > 15 || x > t.wbits) {
            r.msg = "invalid window size", t.mode = G;
            break;
          }
          t.dmax = 1 << t.wbits, t.flags = 0, r.adler = t.check = 1, t.mode = u & 512 ? Na : Fe, u = 0, c = 0;
          break;
        case Aa:
          for (; c < 16; ) {
            if (a === 0)
              break e;
            a--, u += n[s++] << c, c += 8;
          }
          if (t.flags = u, (t.flags & 255) !== Ia) {
            r.msg = "unknown compression method", t.mode = G;
            break;
          }
          if (t.flags & 57344) {
            r.msg = "unknown header flags set", t.mode = G;
            break;
          }
          t.head && (t.head.text = u >> 8 & 1), t.flags & 512 && t.wrap & 4 && (A[0] = u & 255, A[1] = u >>> 8 & 255, t.check = re(t.check, A, 2, 0)), u = 0, c = 0, t.mode = Ea;
        case Ea:
          for (; c < 32; ) {
            if (a === 0)
              break e;
            a--, u += n[s++] << c, c += 8;
          }
          t.head && (t.head.time = u), t.flags & 512 && t.wrap & 4 && (A[0] = u & 255, A[1] = u >>> 8 & 255, A[2] = u >>> 16 & 255, A[3] = u >>> 24 & 255, t.check = re(t.check, A, 4, 0)), u = 0, c = 0, t.mode = Ra;
        case Ra:
          for (; c < 16; ) {
            if (a === 0)
              break e;
            a--, u += n[s++] << c, c += 8;
          }
          t.head && (t.head.xflags = u & 255, t.head.os = u >> 8), t.flags & 512 && t.wrap & 4 && (A[0] = u & 255, A[1] = u >>> 8 & 255, t.check = re(t.check, A, 2, 0)), u = 0, c = 0, t.mode = ka;
        case ka:
          if (t.flags & 1024) {
            for (; c < 16; ) {
              if (a === 0)
                break e;
              a--, u += n[s++] << c, c += 8;
            }
            t.length = u, t.head && (t.head.extra_len = u), t.flags & 512 && t.wrap & 4 && (A[0] = u & 255, A[1] = u >>> 8 & 255, t.check = re(t.check, A, 2, 0)), u = 0, c = 0;
          } else t.head && (t.head.extra = null);
          t.mode = Oa;
        case Oa:
          if (t.flags & 1024 && (h = t.length, h > a && (h = a), h && (t.head && (x = t.head.extra_len - t.length, t.head.extra || (t.head.extra = new Uint8Array(t.head.extra_len)), t.head.extra.set(
            n.subarray(
              s,
              // extra field is limited to 65536 bytes
              // - no need for additional size check
              s + h
            ),
            /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
            x
          )), t.flags & 512 && t.wrap & 4 && (t.check = re(t.check, n, h, s)), a -= h, s += h, t.length -= h), t.length))
            break e;
          t.length = 0, t.mode = Ma;
        case Ma:
          if (t.flags & 2048) {
            if (a === 0)
              break e;
            h = 0;
            do
              x = n[s + h++], t.head && x && t.length < 65536 && (t.head.name += String.fromCharCode(x));
            while (x && h < a);
            if (t.flags & 512 && t.wrap & 4 && (t.check = re(t.check, n, h, s)), a -= h, s += h, x)
              break e;
          } else t.head && (t.head.name = null);
          t.length = 0, t.mode = $a;
        case $a:
          if (t.flags & 4096) {
            if (a === 0)
              break e;
            h = 0;
            do
              x = n[s + h++], t.head && x && t.length < 65536 && (t.head.comment += String.fromCharCode(x));
            while (x && h < a);
            if (t.flags & 512 && t.wrap & 4 && (t.check = re(t.check, n, h, s)), a -= h, s += h, x)
              break e;
          } else t.head && (t.head.comment = null);
          t.mode = Pa;
        case Pa:
          if (t.flags & 512) {
            for (; c < 16; ) {
              if (a === 0)
                break e;
              a--, u += n[s++] << c, c += 8;
            }
            if (t.wrap & 4 && u !== (t.check & 65535)) {
              r.msg = "header crc mismatch", t.mode = G;
              break;
            }
            u = 0, c = 0;
          }
          t.head && (t.head.hcrc = t.flags >> 9 & 1, t.head.done = !0), r.adler = t.check = 0, t.mode = Fe;
          break;
        case Na:
          for (; c < 32; ) {
            if (a === 0)
              break e;
            a--, u += n[s++] << c, c += 8;
          }
          r.adler = t.check = Ha(u), u = 0, c = 0, t.mode = Tn;
        case Tn:
          if (t.havedict === 0)
            return r.next_out = o, r.avail_out = l, r.next_in = s, r.avail_in = a, t.hold = u, t.bits = c, Ng;
          r.adler = t.check = 1, t.mode = Fe;
        case Fe:
          if (e === $g || e === Xr)
            break e;
        case Oi:
          if (t.last) {
            u >>>= c & 7, c -= c & 7, t.mode = $i;
            break;
          }
          for (; c < 3; ) {
            if (a === 0)
              break e;
            a--, u += n[s++] << c, c += 8;
          }
          switch (t.last = u & 1, u >>>= 1, c -= 1, u & 3) {
            case 0:
              t.mode = La;
              break;
            case 1:
              if (Wg(t), t.mode = Jr, e === Xr) {
                u >>>= 2, c -= 2;
                break e;
              }
              break;
            case 2:
              t.mode = Da;
              break;
            case 3:
              r.msg = "invalid block type", t.mode = G;
          }
          u >>>= 2, c -= 2;
          break;
        case La:
          for (u >>>= c & 7, c -= c & 7; c < 32; ) {
            if (a === 0)
              break e;
            a--, u += n[s++] << c, c += 8;
          }
          if ((u & 65535) !== (u >>> 16 ^ 65535)) {
            r.msg = "invalid stored block lengths", t.mode = G;
            break;
          }
          if (t.length = u & 65535, u = 0, c = 0, t.mode = Mi, e === Xr)
            break e;
        case Mi:
          t.mode = Ta;
        case Ta:
          if (h = t.length, h) {
            if (h > a && (h = a), h > l && (h = l), h === 0)
              break e;
            i.set(n.subarray(s, s + h), o), a -= h, s += h, l -= h, o += h, t.length -= h;
            break;
          }
          t.mode = Fe;
          break;
        case Da:
          for (; c < 14; ) {
            if (a === 0)
              break e;
            a--, u += n[s++] << c, c += 8;
          }
          if (t.nlen = (u & 31) + 257, u >>>= 5, c -= 5, t.ndist = (u & 31) + 1, u >>>= 5, c -= 5, t.ncode = (u & 15) + 4, u >>>= 4, c -= 4, t.nlen > 286 || t.ndist > 30) {
            r.msg = "too many length or distance symbols", t.mode = G;
            break;
          }
          t.have = 0, t.mode = Fa;
        case Fa:
          for (; t.have < t.ncode; ) {
            for (; c < 3; ) {
              if (a === 0)
                break e;
              a--, u += n[s++] << c, c += 8;
            }
            t.lens[q[t.have++]] = u & 7, u >>>= 3, c -= 3;
          }
          for (; t.have < 19; )
            t.lens[q[t.have++]] = 0;
          if (t.lencode = t.lendyn, t.lenbits = 7, I = { bits: t.lenbits }, S = nr(Mg, t.lens, 0, 19, t.lencode, 0, t.work, I), t.lenbits = I.bits, S) {
            r.msg = "invalid code lengths set", t.mode = G;
            break;
          }
          t.have = 0, t.mode = za;
        case za:
          for (; t.have < t.nlen + t.ndist; ) {
            for (; g = t.lencode[u & (1 << t.lenbits) - 1], v = g >>> 24, b = g >>> 16 & 255, y = g & 65535, !(v <= c); ) {
              if (a === 0)
                break e;
              a--, u += n[s++] << c, c += 8;
            }
            if (y < 16)
              u >>>= v, c -= v, t.lens[t.have++] = y;
            else {
              if (y === 16) {
                for (R = v + 2; c < R; ) {
                  if (a === 0)
                    break e;
                  a--, u += n[s++] << c, c += 8;
                }
                if (u >>>= v, c -= v, t.have === 0) {
                  r.msg = "invalid bit length repeat", t.mode = G;
                  break;
                }
                x = t.lens[t.have - 1], h = 3 + (u & 3), u >>>= 2, c -= 2;
              } else if (y === 17) {
                for (R = v + 3; c < R; ) {
                  if (a === 0)
                    break e;
                  a--, u += n[s++] << c, c += 8;
                }
                u >>>= v, c -= v, x = 0, h = 3 + (u & 7), u >>>= 3, c -= 3;
              } else {
                for (R = v + 7; c < R; ) {
                  if (a === 0)
                    break e;
                  a--, u += n[s++] << c, c += 8;
                }
                u >>>= v, c -= v, x = 0, h = 11 + (u & 127), u >>>= 7, c -= 7;
              }
              if (t.have + h > t.nlen + t.ndist) {
                r.msg = "invalid bit length repeat", t.mode = G;
                break;
              }
              for (; h--; )
                t.lens[t.have++] = x;
            }
          }
          if (t.mode === G)
            break;
          if (t.lens[256] === 0) {
            r.msg = "invalid code -- missing end-of-block", t.mode = G;
            break;
          }
          if (t.lenbits = 9, I = { bits: t.lenbits }, S = nr(nc, t.lens, 0, t.nlen, t.lencode, 0, t.work, I), t.lenbits = I.bits, S) {
            r.msg = "invalid literal/lengths set", t.mode = G;
            break;
          }
          if (t.distbits = 6, t.distcode = t.distdyn, I = { bits: t.distbits }, S = nr(ic, t.lens, t.nlen, t.ndist, t.distcode, 0, t.work, I), t.distbits = I.bits, S) {
            r.msg = "invalid distances set", t.mode = G;
            break;
          }
          if (t.mode = Jr, e === Xr)
            break e;
        case Jr:
          t.mode = Kr;
        case Kr:
          if (a >= 6 && l >= 258) {
            r.next_out = o, r.avail_out = l, r.next_in = s, r.avail_in = a, t.hold = u, t.bits = c, Ig(r, d), o = r.next_out, i = r.output, l = r.avail_out, s = r.next_in, n = r.input, a = r.avail_in, u = t.hold, c = t.bits, t.mode === Fe && (t.back = -1);
            break;
          }
          for (t.back = 0; g = t.lencode[u & (1 << t.lenbits) - 1], v = g >>> 24, b = g >>> 16 & 255, y = g & 65535, !(v <= c); ) {
            if (a === 0)
              break e;
            a--, u += n[s++] << c, c += 8;
          }
          if (b && !(b & 240)) {
            for (w = v, _ = b, E = y; g = t.lencode[E + ((u & (1 << w + _) - 1) >> w)], v = g >>> 24, b = g >>> 16 & 255, y = g & 65535, !(w + v <= c); ) {
              if (a === 0)
                break e;
              a--, u += n[s++] << c, c += 8;
            }
            u >>>= w, c -= w, t.back += w;
          }
          if (u >>>= v, c -= v, t.back += v, t.length = y, b === 0) {
            t.mode = ja;
            break;
          }
          if (b & 32) {
            t.back = -1, t.mode = Fe;
            break;
          }
          if (b & 64) {
            r.msg = "invalid literal/length code", t.mode = G;
            break;
          }
          t.extra = b & 15, t.mode = Ua;
        case Ua:
          if (t.extra) {
            for (R = t.extra; c < R; ) {
              if (a === 0)
                break e;
              a--, u += n[s++] << c, c += 8;
            }
            t.length += u & (1 << t.extra) - 1, u >>>= t.extra, c -= t.extra, t.back += t.extra;
          }
          t.was = t.length, t.mode = Ba;
        case Ba:
          for (; g = t.distcode[u & (1 << t.distbits) - 1], v = g >>> 24, b = g >>> 16 & 255, y = g & 65535, !(v <= c); ) {
            if (a === 0)
              break e;
            a--, u += n[s++] << c, c += 8;
          }
          if (!(b & 240)) {
            for (w = v, _ = b, E = y; g = t.distcode[E + ((u & (1 << w + _) - 1) >> w)], v = g >>> 24, b = g >>> 16 & 255, y = g & 65535, !(w + v <= c); ) {
              if (a === 0)
                break e;
              a--, u += n[s++] << c, c += 8;
            }
            u >>>= w, c -= w, t.back += w;
          }
          if (u >>>= v, c -= v, t.back += v, b & 64) {
            r.msg = "invalid distance code", t.mode = G;
            break;
          }
          t.offset = y, t.extra = b & 15, t.mode = Wa;
        case Wa:
          if (t.extra) {
            for (R = t.extra; c < R; ) {
              if (a === 0)
                break e;
              a--, u += n[s++] << c, c += 8;
            }
            t.offset += u & (1 << t.extra) - 1, u >>>= t.extra, c -= t.extra, t.back += t.extra;
          }
          if (t.offset > t.dmax) {
            r.msg = "invalid distance too far back", t.mode = G;
            break;
          }
          t.mode = Za;
        case Za:
          if (l === 0)
            break e;
          if (h = d - l, t.offset > h) {
            if (h = t.offset - h, h > t.whave && t.sane) {
              r.msg = "invalid distance too far back", t.mode = G;
              break;
            }
            h > t.wnext ? (h -= t.wnext, p = t.wsize - h) : p = t.wnext - h, h > t.length && (h = t.length), m = t.window;
          } else
            m = i, p = o - t.offset, h = t.length;
          h > l && (h = l), l -= h, t.length -= h;
          do
            i[o++] = m[p++];
          while (--h);
          t.length === 0 && (t.mode = Kr);
          break;
        case ja:
          if (l === 0)
            break e;
          i[o++] = t.length, l--, t.mode = Kr;
          break;
        case $i:
          if (t.wrap) {
            for (; c < 32; ) {
              if (a === 0)
                break e;
              a--, u |= n[s++] << c, c += 8;
            }
            if (d -= l, r.total_out += d, t.total += d, t.wrap & 4 && d && (r.adler = t.check = /*UPDATE_CHECK(state.check, put - _out, _out);*/
            t.flags ? re(t.check, i, d, o - d) : hr(t.check, i, d, o - d)), d = l, t.wrap & 4 && (t.flags ? u : Ha(u)) !== t.check) {
              r.msg = "incorrect data check", t.mode = G;
              break;
            }
            u = 0, c = 0;
          }
          t.mode = Ga;
        case Ga:
          if (t.wrap && t.flags) {
            for (; c < 32; ) {
              if (a === 0)
                break e;
              a--, u += n[s++] << c, c += 8;
            }
            if (t.wrap & 4 && u !== (t.total & 4294967295)) {
              r.msg = "incorrect length check", t.mode = G;
              break;
            }
            u = 0, c = 0;
          }
          t.mode = Va;
        case Va:
          S = Pg;
          break e;
        case G:
          S = sc;
          break e;
        case ac:
          return oc;
        case lc:
        default:
          return be;
      }
  return r.next_out = o, r.avail_out = l, r.next_in = s, r.avail_in = a, t.hold = u, t.bits = c, (t.wsize || d !== r.avail_out && t.mode < G && (t.mode < $i || e !== Ca)) && dc(r, r.output, r.next_out, d - r.avail_out), f -= r.avail_in, d -= r.avail_out, r.total_in += f, r.total_out += d, t.total += d, t.wrap & 4 && d && (r.adler = t.check = /*UPDATE_CHECK(state.check, strm.next_out - _out, _out);*/
  t.flags ? re(t.check, i, d, r.next_out - d) : hr(t.check, i, d, r.next_out - d)), r.data_type = t.bits + (t.last ? 64 : 0) + (t.mode === Fe ? 128 : 0) + (t.mode === Jr || t.mode === Mi ? 256 : 0), (f === 0 && d === 0 || e === Ca) && S === ct && (S = Lg), S;
}, jg = (r) => {
  if (dt(r))
    return be;
  let e = r.state;
  return e.window && (e.window = null), r.state = null, ct;
}, Gg = (r, e) => {
  if (dt(r))
    return be;
  const t = r.state;
  return t.wrap & 2 ? (t.head = e, e.done = !1, ct) : be;
}, Vg = (r, e) => {
  const t = e.length;
  let n, i, s;
  return dt(r) || (n = r.state, n.wrap !== 0 && n.mode !== Tn) ? be : n.mode === Tn && (i = 1, i = hr(i, e, t, 0), i !== n.check) ? sc : (s = dc(r, e, t, t), s ? (n.mode = ac, oc) : (n.havedict = 1, ct));
};
var Hg = cc, Yg = fc, Xg = uc, Jg = Bg, Kg = hc, qg = Zg, Qg = jg, ey = Gg, ty = Vg, ry = "pako inflate (from Nodeca project)", We = {
  inflateReset: Hg,
  inflateReset2: Yg,
  inflateResetKeep: Xg,
  inflateInit: Jg,
  inflateInit2: Kg,
  inflate: qg,
  inflateEnd: Qg,
  inflateGetHeader: ey,
  inflateSetDictionary: ty,
  inflateInfo: ry
};
function ny() {
  this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
}
var iy = ny;
const pc = Object.prototype.toString, {
  Z_NO_FLUSH: sy,
  Z_FINISH: oy,
  Z_OK: mr,
  Z_STREAM_END: Li,
  Z_NEED_DICT: Ti,
  Z_STREAM_ERROR: ay,
  Z_DATA_ERROR: Xa,
  Z_MEM_ERROR: ly
} = ht;
function Pr(r) {
  this.options = Qn.assign({
    chunkSize: 1024 * 64,
    windowBits: 15,
    to: ""
  }, r || {});
  const e = this.options;
  e.raw && e.windowBits >= 0 && e.windowBits < 16 && (e.windowBits = -e.windowBits, e.windowBits === 0 && (e.windowBits = -15)), e.windowBits >= 0 && e.windowBits < 16 && !(r && r.windowBits) && (e.windowBits += 32), e.windowBits > 15 && e.windowBits < 48 && (e.windowBits & 15 || (e.windowBits |= 15)), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new tc(), this.strm.avail_out = 0;
  let t = We.inflateInit2(
    this.strm,
    e.windowBits
  );
  if (t !== mr)
    throw new Error(lt[t]);
  if (this.header = new iy(), We.inflateGetHeader(this.strm, this.header), e.dictionary && (typeof e.dictionary == "string" ? e.dictionary = pr.string2buf(e.dictionary) : pc.call(e.dictionary) === "[object ArrayBuffer]" && (e.dictionary = new Uint8Array(e.dictionary)), e.raw && (t = We.inflateSetDictionary(this.strm, e.dictionary), t !== mr)))
    throw new Error(lt[t]);
}
Pr.prototype.push = function(r, e) {
  const t = this.strm, n = this.options.chunkSize, i = this.options.dictionary;
  let s, o, a;
  if (this.ended) return !1;
  for (e === ~~e ? o = e : o = e === !0 ? oy : sy, pc.call(r) === "[object ArrayBuffer]" ? t.input = new Uint8Array(r) : t.input = r, t.next_in = 0, t.avail_in = t.input.length; ; ) {
    for (t.avail_out === 0 && (t.output = new Uint8Array(n), t.next_out = 0, t.avail_out = n), s = We.inflate(t, o), s === Ti && i && (s = We.inflateSetDictionary(t, i), s === mr ? s = We.inflate(t, o) : s === Xa && (s = Ti)); t.avail_in > 0 && s === Li && t.state.wrap > 0 && r[t.next_in] !== 0; )
      We.inflateReset(t), s = We.inflate(t, o);
    switch (s) {
      case ay:
      case Xa:
      case Ti:
      case ly:
        return this.onEnd(s), this.ended = !0, !1;
    }
    if (a = t.avail_out, t.next_out && (t.avail_out === 0 || s === Li))
      if (this.options.to === "string") {
        let l = pr.utf8border(t.output, t.next_out), u = t.next_out - l, c = pr.buf2string(t.output, l);
        t.next_out = u, t.avail_out = n - u, u && t.output.set(t.output.subarray(l, l + u), 0), this.onData(c);
      } else
        this.onData(t.output.length === t.next_out ? t.output : t.output.subarray(0, t.next_out));
    if (!(s === mr && a === 0)) {
      if (s === Li)
        return s = We.inflateEnd(this.strm), this.onEnd(s), this.ended = !0, !0;
      if (t.avail_in === 0) break;
    }
  }
  return !0;
};
Pr.prototype.onData = function(r) {
  this.chunks.push(r);
};
Pr.prototype.onEnd = function(r) {
  r === mr && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = Qn.flattenChunks(this.chunks)), this.chunks = [], this.err = r, this.msg = this.strm.msg;
};
function yo(r, e) {
  const t = new Pr(e);
  if (t.push(r), t.err) throw t.msg || lt[t.err];
  return t.result;
}
function uy(r, e) {
  return e = e || {}, e.raw = !0, yo(r, e);
}
var cy = Pr, fy = yo, hy = uy, dy = yo, py = ht, my = {
  Inflate: cy,
  inflate: fy,
  inflateRaw: hy,
  ungzip: dy,
  constants: py
};
const { Deflate: gy, deflate: yy, deflateRaw: wy, gzip: vy } = xg, { Inflate: by, inflate: Sy, inflateRaw: _y, ungzip: xy } = my;
var Cy = gy, Iy = yy, Ay = wy, Ey = vy, Ry = by, ky = Sy, Oy = _y, My = xy, $y = ht, xs = {
  Deflate: Cy,
  deflate: Iy,
  deflateRaw: Ay,
  gzip: Ey,
  Inflate: Ry,
  inflate: ky,
  inflateRaw: Oy,
  ungzip: My,
  constants: $y
}, Py = Object.defineProperty, Ny = (r, e, t) => e in r ? Py(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, C = (r, e, t) => Ny(r, typeof e != "symbol" ? e + "" : e, t), Ja, Ly = Object.defineProperty, Ty = (r, e, t) => e in r ? Ly(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, Ka = (r, e, t) => Ty(r, typeof e != "symbol" ? e + "" : e, t), ee = /* @__PURE__ */ ((r) => (r[r.Document = 0] = "Document", r[r.DocumentType = 1] = "DocumentType", r[r.Element = 2] = "Element", r[r.Text = 3] = "Text", r[r.CDATA = 4] = "CDATA", r[r.Comment = 5] = "Comment", r))(ee || {});
const qa = {
  Node: ["childNodes", "parentNode", "parentElement", "textContent"],
  ShadowRoot: ["host", "styleSheets"],
  Element: ["shadowRoot", "querySelector", "querySelectorAll"],
  MutationObserver: []
}, Qa = {
  Node: ["contains", "getRootNode"],
  ShadowRoot: ["getSelection"],
  Element: [],
  MutationObserver: ["constructor"]
}, qr = {}, Dy = () => !!globalThis.Zone;
function wo(r) {
  if (qr[r])
    return qr[r];
  const e = globalThis[r], t = e.prototype, n = r in qa ? qa[r] : void 0, i = !!(n && // @ts-expect-error 2345
  n.every(
    (a) => {
      var l, u;
      return !!((u = (l = Object.getOwnPropertyDescriptor(t, a)) == null ? void 0 : l.get) != null && u.toString().includes("[native code]"));
    }
  )), s = r in Qa ? Qa[r] : void 0, o = !!(s && s.every(
    // @ts-expect-error 2345
    (a) => {
      var l;
      return typeof t[a] == "function" && ((l = t[a]) == null ? void 0 : l.toString().includes("[native code]"));
    }
  ));
  if (i && o && !Dy())
    return qr[r] = e.prototype, e.prototype;
  try {
    const a = document.createElement("iframe");
    document.body.appendChild(a);
    const l = a.contentWindow;
    if (!l) return e.prototype;
    const u = l[r].prototype;
    return document.body.removeChild(a), u ? qr[r] = u : t;
  } catch {
    return t;
  }
}
const Di = {};
function qe(r, e, t) {
  var n;
  const i = `${r}.${String(t)}`;
  if (Di[i])
    return Di[i].call(
      e
    );
  const s = wo(r), o = (n = Object.getOwnPropertyDescriptor(
    s,
    t
  )) == null ? void 0 : n.get;
  return o ? (Di[i] = o, o.call(e)) : e[t];
}
const Fi = {};
function mc(r, e, t) {
  const n = `${r}.${String(t)}`;
  if (Fi[n])
    return Fi[n].bind(
      e
    );
  const s = wo(r)[t];
  return typeof s != "function" ? e[t] : (Fi[n] = s, s.bind(e));
}
function Fy(r) {
  return qe("Node", r, "childNodes");
}
function zy(r) {
  return qe("Node", r, "parentNode");
}
function Uy(r) {
  return qe("Node", r, "parentElement");
}
function By(r) {
  return qe("Node", r, "textContent");
}
function Wy(r, e) {
  return mc("Node", r, "contains")(e);
}
function Zy(r) {
  return mc("Node", r, "getRootNode")();
}
function jy(r) {
  return !r || !("host" in r) ? null : qe("ShadowRoot", r, "host");
}
function Gy(r) {
  return r.styleSheets;
}
function Vy(r) {
  return !r || !("shadowRoot" in r) ? null : qe("Element", r, "shadowRoot");
}
function Hy(r, e) {
  return qe("Element", r, "querySelector")(e);
}
function Yy(r, e) {
  return qe("Element", r, "querySelectorAll")(e);
}
function Xy() {
  return wo("MutationObserver").constructor;
}
const ie = {
  childNodes: Fy,
  parentNode: zy,
  parentElement: Uy,
  textContent: By,
  contains: Wy,
  getRootNode: Zy,
  host: jy,
  styleSheets: Gy,
  shadowRoot: Vy,
  querySelector: Hy,
  querySelectorAll: Yy,
  mutationObserver: Xy
};
function gc(r) {
  return r.nodeType === r.ELEMENT_NODE;
}
function ir(r) {
  const e = (
    // anchor and textarea elements also have a `host` property
    // but only shadow roots have a `mode` property
    r && "host" in r && "mode" in r && ie.host(r) || null
  );
  return !!(e && "shadowRoot" in e && ie.shadowRoot(e) === r);
}
function sr(r) {
  return Object.prototype.toString.call(r) === "[object ShadowRoot]";
}
function Jy(r) {
  return r.includes(" background-clip: text;") && !r.includes(" -webkit-background-clip: text;") && (r = r.replace(
    /\sbackground-clip:\s*text;/g,
    " -webkit-background-clip: text; background-clip: text;"
  )), r;
}
function Ky(r) {
  const { cssText: e } = r;
  if (e.split('"').length < 3) return e;
  const t = ["@import", `url(${JSON.stringify(r.href)})`];
  return r.layerName === "" ? t.push("layer") : r.layerName && t.push(`layer(${r.layerName})`), r.supportsText && t.push(`supports(${r.supportsText})`), r.media.length && t.push(r.media.mediaText), t.join(" ") + ";";
}
function Cs(r) {
  try {
    const e = r.rules || r.cssRules;
    if (!e)
      return null;
    let t = r.href;
    !t && r.ownerNode && r.ownerNode.ownerDocument && (t = r.ownerNode.ownerDocument.location.href);
    const n = Array.from(
      e,
      (i) => yc(i, t)
    ).join("");
    return Jy(n);
  } catch {
    return null;
  }
}
function yc(r, e) {
  if (Qy(r)) {
    let t;
    try {
      t = // for same-origin stylesheets,
      // we can access the imported stylesheet rules directly
      Cs(r.styleSheet) || // work around browser issues with the raw string `@import url(...)` statement
      Ky(r);
    } catch {
      t = r.cssText;
    }
    return r.styleSheet.href ? Dn(t, r.styleSheet.href) : t;
  } else {
    let t = r.cssText;
    return e0(r) && r.selectorText.includes(":") && (t = qy(t)), e ? Dn(t, e) : t;
  }
}
function qy(r) {
  const e = /(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm;
  return r.replace(e, "$1\\$2");
}
function Qy(r) {
  return "styleSheet" in r;
}
function e0(r) {
  return "selectorText" in r;
}
class wc {
  constructor() {
    Ka(this, "idNodeMap", /* @__PURE__ */ new Map()), Ka(this, "nodeMetaMap", /* @__PURE__ */ new WeakMap());
  }
  getId(e) {
    var t;
    return e ? ((t = this.getMeta(e)) == null ? void 0 : t.id) ?? -1 : -1;
  }
  getNode(e) {
    return this.idNodeMap.get(e) || null;
  }
  getIds() {
    return Array.from(this.idNodeMap.keys());
  }
  getMeta(e) {
    return this.nodeMetaMap.get(e) || null;
  }
  // removes the node from idNodeMap
  // doesn't remove the node from nodeMetaMap
  removeNodeFromMap(e) {
    const t = this.getId(e);
    this.idNodeMap.delete(t), e.childNodes && e.childNodes.forEach(
      (n) => this.removeNodeFromMap(n)
    );
  }
  has(e) {
    return this.idNodeMap.has(e);
  }
  hasNode(e) {
    return this.nodeMetaMap.has(e);
  }
  add(e, t) {
    const n = t.id;
    this.idNodeMap.set(n, e), this.nodeMetaMap.set(e, t);
  }
  replace(e, t) {
    const n = this.getNode(e);
    if (n) {
      const i = this.nodeMetaMap.get(n);
      i && this.nodeMetaMap.set(t, i);
    }
    this.idNodeMap.set(e, t);
  }
  reset() {
    this.idNodeMap = /* @__PURE__ */ new Map(), this.nodeMetaMap = /* @__PURE__ */ new WeakMap();
  }
}
function t0() {
  return new wc();
}
function vo({
  element: r,
  maskInputOptions: e,
  tagName: t,
  type: n,
  value: i,
  maskInputFn: s
}) {
  let o = i || "";
  const a = n && ft(n);
  return (e[t.toLowerCase()] || a && e[a]) && (s ? o = s(o, r) : o = "*".repeat(o.length)), o;
}
function ft(r) {
  return r.toLowerCase();
}
const el = "__rrweb_original__";
function r0(r) {
  const e = r.getContext("2d");
  if (!e) return !0;
  const t = 50;
  for (let n = 0; n < r.width; n += t)
    for (let i = 0; i < r.height; i += t) {
      const s = e.getImageData, o = el in s ? s[el] : s;
      if (new Uint32Array(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
        o.call(
          e,
          n,
          i,
          Math.min(t, r.width - n),
          Math.min(t, r.height - i)
        ).data.buffer
      ).some((l) => l !== 0)) return !1;
    }
  return !0;
}
function bo(r) {
  const e = r.type;
  return r.hasAttribute("data-rr-is-password") ? "password" : e ? (
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    ft(e)
  ) : null;
}
function vc(r, e) {
  let t;
  try {
    t = new URL(r, e ?? window.location.href);
  } catch {
    return null;
  }
  const n = /\.([0-9a-z]+)(?:$)/i, i = t.pathname.match(n);
  return (i == null ? void 0 : i[1]) ?? null;
}
function n0(r) {
  let e = "";
  return r.indexOf("//") > -1 ? e = r.split("/").slice(0, 3).join("/") : e = r.split("/")[0], e = e.split("?")[0], e;
}
const i0 = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm, s0 = /^(?:[a-z+]+:)?\/\//i, o0 = /^www\..*/i, a0 = /^(data:)([^,]*),(.*)/i;
function Dn(r, e) {
  return (r || "").replace(
    i0,
    (t, n, i, s, o, a) => {
      const l = i || o || a, u = n || s || "";
      if (!l)
        return t;
      if (s0.test(l) || o0.test(l))
        return `url(${u}${l}${u})`;
      if (a0.test(l))
        return `url(${u}${l}${u})`;
      if (l[0] === "/")
        return `url(${u}${n0(e) + l}${u})`;
      const c = e.split("/"), f = l.split("/");
      c.pop();
      for (const d of f)
        d !== "." && (d === ".." ? c.pop() : c.push(d));
      return `url(${u}${c.join("/")}${u})`;
    }
  );
}
function zi(r) {
  return r.replace(/(\/\*[^*]*\*\/)|[\s;]/g, "");
}
function l0(r, e) {
  const t = Array.from(e.childNodes), n = [];
  if (t.length > 1 && r && typeof r == "string") {
    const i = zi(r);
    for (let s = 1; s < t.length; s++)
      if (t[s].textContent && typeof t[s].textContent == "string") {
        const o = zi(t[s].textContent);
        for (let a = 3; a < o.length; a++) {
          const l = o.substring(0, a);
          if (i.split(l).length === 2) {
            const u = i.indexOf(l);
            for (let c = u; c < r.length; c++)
              if (zi(r.substring(0, c)).length === u) {
                n.push(r.substring(0, c)), r = r.substring(c);
                break;
              }
            break;
          }
        }
      }
  }
  return n.push(r), n;
}
function u0(r, e) {
  return l0(r, e).join("/* rr_split */");
}
let c0 = 1;
const f0 = new RegExp("[^a-z0-9-_:]"), gr = -2;
function bc() {
  return c0++;
}
function h0(r) {
  if (r instanceof HTMLFormElement)
    return "form";
  const e = ft(r.tagName);
  return f0.test(e) ? "div" : e;
}
let St, tl;
const d0 = /^[^ \t\n\r\u000c]+/, p0 = /^[, \t\n\r\u000c]+/;
function m0(r, e) {
  if (e.trim() === "")
    return e;
  let t = 0;
  function n(s) {
    let o;
    const a = s.exec(e.substring(t));
    return a ? (o = a[0], t += o.length, o) : "";
  }
  const i = [];
  for (; n(p0), !(t >= e.length); ) {
    let s = n(d0);
    if (s.slice(-1) === ",")
      s = Et(r, s.substring(0, s.length - 1)), i.push(s);
    else {
      let o = "";
      s = Et(r, s);
      let a = !1;
      for (; ; ) {
        const l = e.charAt(t);
        if (l === "") {
          i.push((s + o).trim());
          break;
        } else if (a)
          l === ")" && (a = !1);
        else if (l === ",") {
          t += 1, i.push((s + o).trim());
          break;
        } else l === "(" && (a = !0);
        o += l, t += 1;
      }
    }
  }
  return i.join(", ");
}
const rl = /* @__PURE__ */ new WeakMap();
function Et(r, e) {
  return !e || e.trim() === "" ? e : So(r, e);
}
function g0(r) {
  return !!(r.tagName === "svg" || r.ownerSVGElement);
}
function So(r, e) {
  let t = rl.get(r);
  if (t || (t = r.createElement("a"), rl.set(r, t)), !e)
    e = "";
  else if (e.startsWith("blob:") || e.startsWith("data:"))
    return e;
  return t.setAttribute("href", e), t.href;
}
function Sc(r, e, t, n) {
  return n && (t === "src" || t === "href" && !(e === "use" && n[0] === "#") || t === "xlink:href" && n[0] !== "#" || t === "background" && (e === "table" || e === "td" || e === "th") ? Et(r, n) : t === "srcset" ? m0(r, n) : t === "style" ? Dn(n, So(r)) : e === "object" && t === "data" ? Et(r, n) : n);
}
function _c(r, e, t) {
  return (r === "video" || r === "audio") && e === "autoplay";
}
function y0(r, e, t) {
  try {
    if (typeof e == "string") {
      if (r.classList.contains(e))
        return !0;
    } else
      for (let n = r.classList.length; n--; ) {
        const i = r.classList[n];
        if (e.test(i))
          return !0;
      }
    if (t)
      return r.matches(t);
  } catch {
  }
  return !1;
}
function Fn(r, e, t) {
  if (!r) return !1;
  if (r.nodeType !== r.ELEMENT_NODE)
    return t ? Fn(ie.parentNode(r), e, t) : !1;
  for (let n = r.classList.length; n--; ) {
    const i = r.classList[n];
    if (e.test(i))
      return !0;
  }
  return t ? Fn(ie.parentNode(r), e, t) : !1;
}
function xc(r, e, t, n) {
  let i;
  if (gc(r)) {
    if (i = r, !ie.childNodes(i).length)
      return !1;
  } else {
    if (ie.parentElement(r) === null)
      return !1;
    i = ie.parentElement(r);
  }
  try {
    if (typeof e == "string") {
      if (n) {
        if (i.closest(`.${e}`)) return !0;
      } else if (i.classList.contains(e)) return !0;
    } else if (Fn(i, e, n)) return !0;
    if (t) {
      if (n) {
        if (i.closest(t)) return !0;
      } else if (i.matches(t)) return !0;
    }
  } catch {
  }
  return !1;
}
function w0(r, e, t) {
  const n = r.contentWindow;
  if (!n)
    return;
  let i = !1, s;
  try {
    s = n.document.readyState;
  } catch {
    return;
  }
  if (s !== "complete") {
    const a = setTimeout(() => {
      i || (e(), i = !0);
    }, t);
    r.addEventListener("load", () => {
      clearTimeout(a), i = !0, e();
    });
    return;
  }
  const o = "about:blank";
  if (n.location.href !== o || r.src === o || r.src === "")
    return setTimeout(e, 0), r.addEventListener("load", e);
  r.addEventListener("load", e);
}
function v0(r, e, t) {
  let n = !1, i;
  try {
    i = r.sheet;
  } catch {
    return;
  }
  if (i) return;
  const s = setTimeout(() => {
    n || (e(), n = !0);
  }, t);
  r.addEventListener("load", () => {
    clearTimeout(s), n = !0, e();
  });
}
function b0(r, e) {
  const {
    doc: t,
    mirror: n,
    blockClass: i,
    blockSelector: s,
    needsMask: o,
    inlineStylesheet: a,
    maskInputOptions: l = {},
    maskTextFn: u,
    maskInputFn: c,
    dataURLOptions: f = {},
    inlineImages: d,
    recordCanvas: h,
    keepIframeSrcFn: p,
    newlyAddedElement: m = !1,
    cssCaptured: g = !1
  } = e, v = S0(t, n);
  switch (r.nodeType) {
    case r.DOCUMENT_NODE:
      return r.compatMode !== "CSS1Compat" ? {
        type: ee.Document,
        childNodes: [],
        compatMode: r.compatMode
        // probably "BackCompat"
      } : {
        type: ee.Document,
        childNodes: []
      };
    case r.DOCUMENT_TYPE_NODE:
      return {
        type: ee.DocumentType,
        name: r.name,
        publicId: r.publicId,
        systemId: r.systemId,
        rootId: v
      };
    case r.ELEMENT_NODE:
      return x0(r, {
        doc: t,
        blockClass: i,
        blockSelector: s,
        inlineStylesheet: a,
        maskInputOptions: l,
        maskInputFn: c,
        dataURLOptions: f,
        inlineImages: d,
        recordCanvas: h,
        keepIframeSrcFn: p,
        newlyAddedElement: m,
        rootId: v
      });
    case r.TEXT_NODE:
      return _0(r, {
        doc: t,
        needsMask: o,
        maskTextFn: u,
        rootId: v,
        cssCaptured: g
      });
    case r.CDATA_SECTION_NODE:
      return {
        type: ee.CDATA,
        textContent: "",
        rootId: v
      };
    case r.COMMENT_NODE:
      return {
        type: ee.Comment,
        textContent: ie.textContent(r) || "",
        rootId: v
      };
    default:
      return !1;
  }
}
function S0(r, e) {
  if (!e.hasNode(r)) return;
  const t = e.getId(r);
  return t === 1 ? void 0 : t;
}
function _0(r, e) {
  const { needsMask: t, maskTextFn: n, rootId: i, cssCaptured: s } = e, o = ie.parentNode(r), a = o && o.tagName;
  let l = "";
  const u = a === "STYLE" ? !0 : void 0, c = a === "SCRIPT" ? !0 : void 0;
  return c ? l = "SCRIPT_PLACEHOLDER" : s || (l = ie.textContent(r), u && l && (l = Dn(l, So(e.doc)))), !u && !c && l && t && (l = n ? n(l, ie.parentElement(r)) : l.replace(/[\S]/g, "*")), {
    type: ee.Text,
    textContent: l || "",
    rootId: i
  };
}
function x0(r, e) {
  const {
    doc: t,
    blockClass: n,
    blockSelector: i,
    inlineStylesheet: s,
    maskInputOptions: o = {},
    maskInputFn: a,
    dataURLOptions: l = {},
    inlineImages: u,
    recordCanvas: c,
    keepIframeSrcFn: f,
    newlyAddedElement: d = !1,
    rootId: h
  } = e, p = y0(r, n, i), m = h0(r);
  let g = {};
  const v = r.attributes.length;
  for (let y = 0; y < v; y++) {
    const w = r.attributes[y];
    _c(m, w.name, w.value) || (g[w.name] = Sc(
      t,
      m,
      ft(w.name),
      w.value
    ));
  }
  if (m === "link" && s) {
    const y = Array.from(t.styleSheets).find((_) => _.href === r.href);
    let w = null;
    y && (w = Cs(y)), w && (delete g.rel, delete g.href, g._cssText = w);
  }
  if (m === "style" && r.sheet) {
    let y = Cs(
      r.sheet
    );
    y && (r.childNodes.length > 1 && (y = u0(y, r)), g._cssText = y);
  }
  if (m === "input" || m === "textarea" || m === "select") {
    const y = r.value, w = r.checked;
    g.type !== "radio" && g.type !== "checkbox" && g.type !== "submit" && g.type !== "button" && y ? g.value = vo({
      element: r,
      type: bo(r),
      tagName: m,
      value: y,
      maskInputOptions: o,
      maskInputFn: a
    }) : w && (g.checked = w);
  }
  if (m === "option" && (r.selected && !o.select ? g.selected = !0 : delete g.selected), m === "dialog" && r.open && (g.rr_open_mode = r.matches("dialog:modal") ? "modal" : "non-modal"), m === "canvas" && c) {
    if (r.__context === "2d")
      r0(r) || (g.rr_dataURL = r.toDataURL(
        l.type,
        l.quality
      ));
    else if (!("__context" in r)) {
      const y = r.toDataURL(
        l.type,
        l.quality
      ), w = t.createElement("canvas");
      w.width = r.width, w.height = r.height;
      const _ = w.toDataURL(
        l.type,
        l.quality
      );
      y !== _ && (g.rr_dataURL = y);
    }
  }
  if (m === "img" && u) {
    St || (St = t.createElement("canvas"), tl = St.getContext("2d"));
    const y = r, w = y.currentSrc || y.getAttribute("src") || "<unknown-src>", _ = y.crossOrigin, E = () => {
      y.removeEventListener("load", E);
      try {
        St.width = y.naturalWidth, St.height = y.naturalHeight, tl.drawImage(y, 0, 0), g.rr_dataURL = St.toDataURL(
          l.type,
          l.quality
        );
      } catch (x) {
        if (y.crossOrigin !== "anonymous") {
          y.crossOrigin = "anonymous", y.complete && y.naturalWidth !== 0 ? E() : y.addEventListener("load", E);
          return;
        } else
          console.warn(
            `Cannot inline img src=${w}! Error: ${x}`
          );
      }
      y.crossOrigin === "anonymous" && (_ ? g.crossOrigin = _ : y.removeAttribute("crossorigin"));
    };
    y.complete && y.naturalWidth !== 0 ? E() : y.addEventListener("load", E);
  }
  if (m === "audio" || m === "video") {
    const y = g;
    y.rr_mediaState = r.paused ? "paused" : "played", y.rr_mediaCurrentTime = r.currentTime, y.rr_mediaPlaybackRate = r.playbackRate, y.rr_mediaMuted = r.muted, y.rr_mediaLoop = r.loop, y.rr_mediaVolume = r.volume;
  }
  if (d || (r.scrollLeft && (g.rr_scrollLeft = r.scrollLeft), r.scrollTop && (g.rr_scrollTop = r.scrollTop)), p) {
    const { width: y, height: w } = r.getBoundingClientRect();
    g = {
      class: g.class,
      rr_width: `${y}px`,
      rr_height: `${w}px`
    };
  }
  m === "iframe" && !f(g.src) && (r.contentDocument || (g.rr_src = g.src), delete g.src);
  let b;
  try {
    customElements.get(m) && (b = !0);
  } catch {
  }
  return {
    type: ee.Element,
    tagName: m,
    attributes: g,
    childNodes: [],
    isSVG: g0(r) || void 0,
    needBlock: p,
    rootId: h,
    isCustom: b
  };
}
function W(r) {
  return r == null ? "" : r.toLowerCase();
}
function C0(r, e) {
  if (e.comment && r.type === ee.Comment)
    return !0;
  if (r.type === ee.Element) {
    if (e.script && // script tag
    (r.tagName === "script" || // (module)preload link
    r.tagName === "link" && (r.attributes.rel === "preload" || r.attributes.rel === "modulepreload") && r.attributes.as === "script" || // prefetch link
    r.tagName === "link" && r.attributes.rel === "prefetch" && typeof r.attributes.href == "string" && vc(r.attributes.href) === "js"))
      return !0;
    if (e.headFavicon && (r.tagName === "link" && r.attributes.rel === "shortcut icon" || r.tagName === "meta" && (W(r.attributes.name).match(
      /^msapplication-tile(image|color)$/
    ) || W(r.attributes.name) === "application-name" || W(r.attributes.rel) === "icon" || W(r.attributes.rel) === "apple-touch-icon" || W(r.attributes.rel) === "shortcut icon")))
      return !0;
    if (r.tagName === "meta") {
      if (e.headMetaDescKeywords && W(r.attributes.name).match(/^description|keywords$/))
        return !0;
      if (e.headMetaSocial && (W(r.attributes.property).match(/^(og|twitter|fb):/) || // og = opengraph (facebook)
      W(r.attributes.name).match(/^(og|twitter):/) || W(r.attributes.name) === "pinterest"))
        return !0;
      if (e.headMetaRobots && (W(r.attributes.name) === "robots" || W(r.attributes.name) === "googlebot" || W(r.attributes.name) === "bingbot"))
        return !0;
      if (e.headMetaHttpEquiv && r.attributes["http-equiv"] !== void 0)
        return !0;
      if (e.headMetaAuthorship && (W(r.attributes.name) === "author" || W(r.attributes.name) === "generator" || W(r.attributes.name) === "framework" || W(r.attributes.name) === "publisher" || W(r.attributes.name) === "progid" || W(r.attributes.property).match(/^article:/) || W(r.attributes.property).match(/^product:/)))
        return !0;
      if (e.headMetaVerification && (W(r.attributes.name) === "google-site-verification" || W(r.attributes.name) === "yandex-verification" || W(r.attributes.name) === "csrf-token" || W(r.attributes.name) === "p:domain_verify" || W(r.attributes.name) === "verify-v1" || W(r.attributes.name) === "verification" || W(r.attributes.name) === "shopify-checkout-api-token"))
        return !0;
    }
  }
  return !1;
}
function Rt(r, e) {
  const {
    doc: t,
    mirror: n,
    blockClass: i,
    blockSelector: s,
    maskTextClass: o,
    maskTextSelector: a,
    skipChild: l = !1,
    inlineStylesheet: u = !0,
    maskInputOptions: c = {},
    maskTextFn: f,
    maskInputFn: d,
    slimDOMOptions: h,
    dataURLOptions: p = {},
    inlineImages: m = !1,
    recordCanvas: g = !1,
    onSerialize: v,
    onIframeLoad: b,
    iframeLoadTimeout: y = 5e3,
    onStylesheetLoad: w,
    stylesheetLoadTimeout: _ = 5e3,
    keepIframeSrcFn: E = () => !1,
    newlyAddedElement: x = !1,
    cssCaptured: S = !1
  } = e;
  let { needsMask: A } = e, { preserveWhiteSpace: I = !0 } = e;
  A || (A = xc(
    r,
    o,
    a,
    A === void 0
  ));
  const R = b0(r, {
    doc: t,
    mirror: n,
    blockClass: i,
    blockSelector: s,
    needsMask: A,
    inlineStylesheet: u,
    maskInputOptions: c,
    maskTextFn: f,
    maskInputFn: d,
    dataURLOptions: p,
    inlineImages: m,
    recordCanvas: g,
    keepIframeSrcFn: E,
    newlyAddedElement: x,
    cssCaptured: S
  });
  if (!R)
    return console.warn(r, "not serialized"), null;
  let q;
  n.hasNode(r) ? q = n.getId(r) : C0(R, h) || !I && R.type === ee.Text && !R.textContent.replace(/^\s+|\s+$/gm, "").length ? q = gr : q = bc();
  const k = Object.assign(R, { id: q });
  if (n.add(r, k), q === gr)
    return null;
  v && v(r);
  let me = !l;
  if (k.type === ee.Element) {
    me = me && !k.needBlock, delete k.needBlock;
    const Q = ie.shadowRoot(r);
    Q && sr(Q) && (k.isShadowHost = !0);
  }
  if ((k.type === ee.Document || k.type === ee.Element) && me) {
    h.headWhitespace && k.type === ee.Element && k.tagName === "head" && (I = !1);
    const Q = {
      doc: t,
      mirror: n,
      blockClass: i,
      blockSelector: s,
      needsMask: A,
      maskTextClass: o,
      maskTextSelector: a,
      skipChild: l,
      inlineStylesheet: u,
      maskInputOptions: c,
      maskTextFn: f,
      maskInputFn: d,
      slimDOMOptions: h,
      dataURLOptions: p,
      inlineImages: m,
      recordCanvas: g,
      preserveWhiteSpace: I,
      onSerialize: v,
      onIframeLoad: b,
      iframeLoadTimeout: y,
      onStylesheetLoad: w,
      stylesheetLoadTimeout: _,
      keepIframeSrcFn: E,
      cssCaptured: !1
    };
    if (!(k.type === ee.Element && k.tagName === "textarea" && k.attributes.value !== void 0)) {
      k.type === ee.Element && k.attributes._cssText !== void 0 && typeof k.attributes._cssText == "string" && (Q.cssCaptured = !0);
      for (const et of Array.from(ie.childNodes(r))) {
        const Re = Rt(et, Q);
        Re && k.childNodes.push(Re);
      }
    }
    let ge = null;
    if (gc(r) && (ge = ie.shadowRoot(r)))
      for (const et of Array.from(ie.childNodes(ge))) {
        const Re = Rt(et, Q);
        Re && (sr(ge) && (Re.isShadow = !0), k.childNodes.push(Re));
      }
  }
  const Ee = ie.parentNode(r);
  return Ee && ir(Ee) && sr(Ee) && (k.isShadow = !0), k.type === ee.Element && k.tagName === "iframe" && w0(
    r,
    () => {
      const Q = r.contentDocument;
      if (Q && b) {
        const ge = Rt(Q, {
          doc: Q,
          mirror: n,
          blockClass: i,
          blockSelector: s,
          needsMask: A,
          maskTextClass: o,
          maskTextSelector: a,
          skipChild: !1,
          inlineStylesheet: u,
          maskInputOptions: c,
          maskTextFn: f,
          maskInputFn: d,
          slimDOMOptions: h,
          dataURLOptions: p,
          inlineImages: m,
          recordCanvas: g,
          preserveWhiteSpace: I,
          onSerialize: v,
          onIframeLoad: b,
          iframeLoadTimeout: y,
          onStylesheetLoad: w,
          stylesheetLoadTimeout: _,
          keepIframeSrcFn: E
        });
        ge && b(
          r,
          ge
        );
      }
    },
    y
  ), k.type === ee.Element && k.tagName === "link" && typeof k.attributes.rel == "string" && (k.attributes.rel === "stylesheet" || k.attributes.rel === "preload" && typeof k.attributes.href == "string" && vc(k.attributes.href) === "css") && v0(
    r,
    () => {
      if (w) {
        const Q = Rt(r, {
          doc: t,
          mirror: n,
          blockClass: i,
          blockSelector: s,
          needsMask: A,
          maskTextClass: o,
          maskTextSelector: a,
          skipChild: !1,
          inlineStylesheet: u,
          maskInputOptions: c,
          maskTextFn: f,
          maskInputFn: d,
          slimDOMOptions: h,
          dataURLOptions: p,
          inlineImages: m,
          recordCanvas: g,
          preserveWhiteSpace: I,
          onSerialize: v,
          onIframeLoad: b,
          iframeLoadTimeout: y,
          onStylesheetLoad: w,
          stylesheetLoadTimeout: _,
          keepIframeSrcFn: E
        });
        Q && w(
          r,
          Q
        );
      }
    },
    _
  ), k;
}
function I0(r, e) {
  const {
    mirror: t = new wc(),
    blockClass: n = "rr-block",
    blockSelector: i = null,
    maskTextClass: s = "rr-mask",
    maskTextSelector: o = null,
    inlineStylesheet: a = !0,
    inlineImages: l = !1,
    recordCanvas: u = !1,
    maskAllInputs: c = !1,
    maskTextFn: f,
    maskInputFn: d,
    slimDOM: h = !1,
    dataURLOptions: p,
    preserveWhiteSpace: m,
    onSerialize: g,
    onIframeLoad: v,
    iframeLoadTimeout: b,
    onStylesheetLoad: y,
    stylesheetLoadTimeout: w,
    keepIframeSrcFn: _ = () => !1
  } = e || {};
  return Rt(r, {
    doc: r,
    mirror: t,
    blockClass: n,
    blockSelector: i,
    maskTextClass: s,
    maskTextSelector: o,
    skipChild: !1,
    inlineStylesheet: a,
    maskInputOptions: c === !0 ? {
      color: !0,
      date: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0,
      textarea: !0,
      select: !0,
      password: !0
    } : c === !1 ? {
      password: !0
    } : c,
    maskTextFn: f,
    maskInputFn: d,
    slimDOMOptions: h === !0 || h === "all" ? (
      // if true: set of sensible options that should not throw away any information
      {
        script: !0,
        comment: !0,
        headFavicon: !0,
        headWhitespace: !0,
        headMetaDescKeywords: h === "all",
        // destructive
        headMetaSocial: !0,
        headMetaRobots: !0,
        headMetaHttpEquiv: !0,
        headMetaAuthorship: !0,
        headMetaVerification: !0
      }
    ) : h === !1 ? {} : h,
    dataURLOptions: p,
    inlineImages: l,
    recordCanvas: u,
    preserveWhiteSpace: m,
    onSerialize: g,
    onIframeLoad: v,
    iframeLoadTimeout: b,
    onStylesheetLoad: y,
    stylesheetLoadTimeout: w,
    keepIframeSrcFn: _,
    newlyAddedElement: !1
  });
}
function A0(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
function E0(r) {
  if (r.__esModule) return r;
  var e = r.default;
  if (typeof e == "function") {
    var t = function n() {
      return this instanceof n ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    t.prototype = e.prototype;
  } else t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(r).forEach(function(n) {
    var i = Object.getOwnPropertyDescriptor(r, n);
    Object.defineProperty(t, n, i.get ? i : {
      enumerable: !0,
      get: function() {
        return r[n];
      }
    });
  }), t;
}
var _o = { exports: {} }, Z = String, Cc = function() {
  return { isColorSupported: !1, reset: Z, bold: Z, dim: Z, italic: Z, underline: Z, inverse: Z, hidden: Z, strikethrough: Z, black: Z, red: Z, green: Z, yellow: Z, blue: Z, magenta: Z, cyan: Z, white: Z, gray: Z, bgBlack: Z, bgRed: Z, bgGreen: Z, bgYellow: Z, bgBlue: Z, bgMagenta: Z, bgCyan: Z, bgWhite: Z };
};
_o.exports = Cc();
_o.exports.createColors = Cc;
var R0 = _o.exports;
const k0 = {}, O0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: k0
}, Symbol.toStringTag, { value: "Module" })), Ie = /* @__PURE__ */ E0(O0);
let nl = R0, il = Ie, Is = class Ic extends Error {
  constructor(e, t, n, i, s, o) {
    super(e), this.name = "CssSyntaxError", this.reason = e, s && (this.file = s), i && (this.source = i), o && (this.plugin = o), typeof t < "u" && typeof n < "u" && (typeof t == "number" ? (this.line = t, this.column = n) : (this.line = t.line, this.column = t.column, this.endLine = n.line, this.endColumn = n.column)), this.setMessage(), Error.captureStackTrace && Error.captureStackTrace(this, Ic);
  }
  setMessage() {
    this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", typeof this.line < "u" && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason;
  }
  showSourceCode(e) {
    if (!this.source) return "";
    let t = this.source;
    e == null && (e = nl.isColorSupported), il && e && (t = il(t));
    let n = t.split(/\r?\n/), i = Math.max(this.line - 3, 0), s = Math.min(this.line + 2, n.length), o = String(s).length, a, l;
    if (e) {
      let { bold: u, gray: c, red: f } = nl.createColors(!0);
      a = (d) => u(f(d)), l = (d) => c(d);
    } else
      a = l = (u) => u;
    return n.slice(i, s).map((u, c) => {
      let f = i + 1 + c, d = " " + (" " + f).slice(-o) + " | ";
      if (f === this.line) {
        let h = l(d.replace(/\d/g, " ")) + u.slice(0, this.column - 1).replace(/[^\t]/g, " ");
        return a(">") + l(d) + u + `
 ` + h + a("^");
      }
      return " " + l(d) + u;
    }).join(`
`);
  }
  toString() {
    let e = this.showSourceCode();
    return e && (e = `

` + e + `
`), this.name + ": " + this.message + e;
  }
};
var xo = Is;
Is.default = Is;
var Nr = {};
Nr.isClean = Symbol("isClean");
Nr.my = Symbol("my");
const sl = {
  after: `
`,
  beforeClose: `
`,
  beforeComment: `
`,
  beforeDecl: `
`,
  beforeOpen: " ",
  beforeRule: `
`,
  colon: ": ",
  commentLeft: " ",
  commentRight: " ",
  emptyBody: "",
  indent: "    ",
  semicolon: !1
};
function M0(r) {
  return r[0].toUpperCase() + r.slice(1);
}
let As = class {
  constructor(e) {
    this.builder = e;
  }
  atrule(e, t) {
    let n = "@" + e.name, i = e.params ? this.rawValue(e, "params") : "";
    if (typeof e.raws.afterName < "u" ? n += e.raws.afterName : i && (n += " "), e.nodes)
      this.block(e, n + i);
    else {
      let s = (e.raws.between || "") + (t ? ";" : "");
      this.builder(n + i + s, e);
    }
  }
  beforeAfter(e, t) {
    let n;
    e.type === "decl" ? n = this.raw(e, null, "beforeDecl") : e.type === "comment" ? n = this.raw(e, null, "beforeComment") : t === "before" ? n = this.raw(e, null, "beforeRule") : n = this.raw(e, null, "beforeClose");
    let i = e.parent, s = 0;
    for (; i && i.type !== "root"; )
      s += 1, i = i.parent;
    if (n.includes(`
`)) {
      let o = this.raw(e, null, "indent");
      if (o.length)
        for (let a = 0; a < s; a++) n += o;
    }
    return n;
  }
  block(e, t) {
    let n = this.raw(e, "between", "beforeOpen");
    this.builder(t + n + "{", e, "start");
    let i;
    e.nodes && e.nodes.length ? (this.body(e), i = this.raw(e, "after")) : i = this.raw(e, "after", "emptyBody"), i && this.builder(i), this.builder("}", e, "end");
  }
  body(e) {
    let t = e.nodes.length - 1;
    for (; t > 0 && e.nodes[t].type === "comment"; )
      t -= 1;
    let n = this.raw(e, "semicolon");
    for (let i = 0; i < e.nodes.length; i++) {
      let s = e.nodes[i], o = this.raw(s, "before");
      o && this.builder(o), this.stringify(s, t !== i || n);
    }
  }
  comment(e) {
    let t = this.raw(e, "left", "commentLeft"), n = this.raw(e, "right", "commentRight");
    this.builder("/*" + t + e.text + n + "*/", e);
  }
  decl(e, t) {
    let n = this.raw(e, "between", "colon"), i = e.prop + n + this.rawValue(e, "value");
    e.important && (i += e.raws.important || " !important"), t && (i += ";"), this.builder(i, e);
  }
  document(e) {
    this.body(e);
  }
  raw(e, t, n) {
    let i;
    if (n || (n = t), t && (i = e.raws[t], typeof i < "u"))
      return i;
    let s = e.parent;
    if (n === "before" && (!s || s.type === "root" && s.first === e || s && s.type === "document"))
      return "";
    if (!s) return sl[n];
    let o = e.root();
    if (o.rawCache || (o.rawCache = {}), typeof o.rawCache[n] < "u")
      return o.rawCache[n];
    if (n === "before" || n === "after")
      return this.beforeAfter(e, n);
    {
      let a = "raw" + M0(n);
      this[a] ? i = this[a](o, e) : o.walk((l) => {
        if (i = l.raws[t], typeof i < "u") return !1;
      });
    }
    return typeof i > "u" && (i = sl[n]), o.rawCache[n] = i, i;
  }
  rawBeforeClose(e) {
    let t;
    return e.walk((n) => {
      if (n.nodes && n.nodes.length > 0 && typeof n.raws.after < "u")
        return t = n.raws.after, t.includes(`
`) && (t = t.replace(/[^\n]+$/, "")), !1;
    }), t && (t = t.replace(/\S/g, "")), t;
  }
  rawBeforeComment(e, t) {
    let n;
    return e.walkComments((i) => {
      if (typeof i.raws.before < "u")
        return n = i.raws.before, n.includes(`
`) && (n = n.replace(/[^\n]+$/, "")), !1;
    }), typeof n > "u" ? n = this.raw(t, null, "beforeDecl") : n && (n = n.replace(/\S/g, "")), n;
  }
  rawBeforeDecl(e, t) {
    let n;
    return e.walkDecls((i) => {
      if (typeof i.raws.before < "u")
        return n = i.raws.before, n.includes(`
`) && (n = n.replace(/[^\n]+$/, "")), !1;
    }), typeof n > "u" ? n = this.raw(t, null, "beforeRule") : n && (n = n.replace(/\S/g, "")), n;
  }
  rawBeforeOpen(e) {
    let t;
    return e.walk((n) => {
      if (n.type !== "decl" && (t = n.raws.between, typeof t < "u"))
        return !1;
    }), t;
  }
  rawBeforeRule(e) {
    let t;
    return e.walk((n) => {
      if (n.nodes && (n.parent !== e || e.first !== n) && typeof n.raws.before < "u")
        return t = n.raws.before, t.includes(`
`) && (t = t.replace(/[^\n]+$/, "")), !1;
    }), t && (t = t.replace(/\S/g, "")), t;
  }
  rawColon(e) {
    let t;
    return e.walkDecls((n) => {
      if (typeof n.raws.between < "u")
        return t = n.raws.between.replace(/[^\s:]/g, ""), !1;
    }), t;
  }
  rawEmptyBody(e) {
    let t;
    return e.walk((n) => {
      if (n.nodes && n.nodes.length === 0 && (t = n.raws.after, typeof t < "u"))
        return !1;
    }), t;
  }
  rawIndent(e) {
    if (e.raws.indent) return e.raws.indent;
    let t;
    return e.walk((n) => {
      let i = n.parent;
      if (i && i !== e && i.parent && i.parent === e && typeof n.raws.before < "u") {
        let s = n.raws.before.split(`
`);
        return t = s[s.length - 1], t = t.replace(/\S/g, ""), !1;
      }
    }), t;
  }
  rawSemicolon(e) {
    let t;
    return e.walk((n) => {
      if (n.nodes && n.nodes.length && n.last.type === "decl" && (t = n.raws.semicolon, typeof t < "u"))
        return !1;
    }), t;
  }
  rawValue(e, t) {
    let n = e[t], i = e.raws[t];
    return i && i.value === n ? i.raw : n;
  }
  root(e) {
    this.body(e), e.raws.after && this.builder(e.raws.after);
  }
  rule(e) {
    this.block(e, this.rawValue(e, "selector")), e.raws.ownSemicolon && this.builder(e.raws.ownSemicolon, e, "end");
  }
  stringify(e, t) {
    if (!this[e.type])
      throw new Error(
        "Unknown AST node type " + e.type + ". Maybe you need to change PostCSS stringifier."
      );
    this[e.type](e, t);
  }
};
var Ac = As;
As.default = As;
let $0 = Ac;
function Es(r, e) {
  new $0(e).stringify(r);
}
var ti = Es;
Es.default = Es;
let { isClean: Qr, my: P0 } = Nr, N0 = xo, L0 = Ac, T0 = ti;
function Rs(r, e) {
  let t = new r.constructor();
  for (let n in r) {
    if (!Object.prototype.hasOwnProperty.call(r, n) || n === "proxyCache") continue;
    let i = r[n], s = typeof i;
    n === "parent" && s === "object" ? e && (t[n] = e) : n === "source" ? t[n] = i : Array.isArray(i) ? t[n] = i.map((o) => Rs(o, t)) : (s === "object" && i !== null && (i = Rs(i)), t[n] = i);
  }
  return t;
}
let ks = class {
  constructor(e = {}) {
    this.raws = {}, this[Qr] = !1, this[P0] = !0;
    for (let t in e)
      if (t === "nodes") {
        this.nodes = [];
        for (let n of e[t])
          typeof n.clone == "function" ? this.append(n.clone()) : this.append(n);
      } else
        this[t] = e[t];
  }
  addToError(e) {
    if (e.postcssNode = this, e.stack && this.source && /\n\s{4}at /.test(e.stack)) {
      let t = this.source;
      e.stack = e.stack.replace(
        /\n\s{4}at /,
        `$&${t.input.from}:${t.start.line}:${t.start.column}$&`
      );
    }
    return e;
  }
  after(e) {
    return this.parent.insertAfter(this, e), this;
  }
  assign(e = {}) {
    for (let t in e)
      this[t] = e[t];
    return this;
  }
  before(e) {
    return this.parent.insertBefore(this, e), this;
  }
  cleanRaws(e) {
    delete this.raws.before, delete this.raws.after, e || delete this.raws.between;
  }
  clone(e = {}) {
    let t = Rs(this);
    for (let n in e)
      t[n] = e[n];
    return t;
  }
  cloneAfter(e = {}) {
    let t = this.clone(e);
    return this.parent.insertAfter(this, t), t;
  }
  cloneBefore(e = {}) {
    let t = this.clone(e);
    return this.parent.insertBefore(this, t), t;
  }
  error(e, t = {}) {
    if (this.source) {
      let { end: n, start: i } = this.rangeBy(t);
      return this.source.input.error(
        e,
        { column: i.column, line: i.line },
        { column: n.column, line: n.line },
        t
      );
    }
    return new N0(e);
  }
  getProxyProcessor() {
    return {
      get(e, t) {
        return t === "proxyOf" ? e : t === "root" ? () => e.root().toProxy() : e[t];
      },
      set(e, t, n) {
        return e[t] === n || (e[t] = n, (t === "prop" || t === "value" || t === "name" || t === "params" || t === "important" || /* c8 ignore next */
        t === "text") && e.markDirty()), !0;
      }
    };
  }
  markDirty() {
    if (this[Qr]) {
      this[Qr] = !1;
      let e = this;
      for (; e = e.parent; )
        e[Qr] = !1;
    }
  }
  next() {
    if (!this.parent) return;
    let e = this.parent.index(this);
    return this.parent.nodes[e + 1];
  }
  positionBy(e, t) {
    let n = this.source.start;
    if (e.index)
      n = this.positionInside(e.index, t);
    else if (e.word) {
      t = this.toString();
      let i = t.indexOf(e.word);
      i !== -1 && (n = this.positionInside(i, t));
    }
    return n;
  }
  positionInside(e, t) {
    let n = t || this.toString(), i = this.source.start.column, s = this.source.start.line;
    for (let o = 0; o < e; o++)
      n[o] === `
` ? (i = 1, s += 1) : i += 1;
    return { column: i, line: s };
  }
  prev() {
    if (!this.parent) return;
    let e = this.parent.index(this);
    return this.parent.nodes[e - 1];
  }
  rangeBy(e) {
    let t = {
      column: this.source.start.column,
      line: this.source.start.line
    }, n = this.source.end ? {
      column: this.source.end.column + 1,
      line: this.source.end.line
    } : {
      column: t.column + 1,
      line: t.line
    };
    if (e.word) {
      let i = this.toString(), s = i.indexOf(e.word);
      s !== -1 && (t = this.positionInside(s, i), n = this.positionInside(s + e.word.length, i));
    } else
      e.start ? t = {
        column: e.start.column,
        line: e.start.line
      } : e.index && (t = this.positionInside(e.index)), e.end ? n = {
        column: e.end.column,
        line: e.end.line
      } : typeof e.endIndex == "number" ? n = this.positionInside(e.endIndex) : e.index && (n = this.positionInside(e.index + 1));
    return (n.line < t.line || n.line === t.line && n.column <= t.column) && (n = { column: t.column + 1, line: t.line }), { end: n, start: t };
  }
  raw(e, t) {
    return new L0().raw(this, e, t);
  }
  remove() {
    return this.parent && this.parent.removeChild(this), this.parent = void 0, this;
  }
  replaceWith(...e) {
    if (this.parent) {
      let t = this, n = !1;
      for (let i of e)
        i === this ? n = !0 : n ? (this.parent.insertAfter(t, i), t = i) : this.parent.insertBefore(t, i);
      n || this.remove();
    }
    return this;
  }
  root() {
    let e = this;
    for (; e.parent && e.parent.type !== "document"; )
      e = e.parent;
    return e;
  }
  toJSON(e, t) {
    let n = {}, i = t == null;
    t = t || /* @__PURE__ */ new Map();
    let s = 0;
    for (let o in this) {
      if (!Object.prototype.hasOwnProperty.call(this, o) || o === "parent" || o === "proxyCache") continue;
      let a = this[o];
      if (Array.isArray(a))
        n[o] = a.map((l) => typeof l == "object" && l.toJSON ? l.toJSON(null, t) : l);
      else if (typeof a == "object" && a.toJSON)
        n[o] = a.toJSON(null, t);
      else if (o === "source") {
        let l = t.get(a.input);
        l == null && (l = s, t.set(a.input, s), s++), n[o] = {
          end: a.end,
          inputId: l,
          start: a.start
        };
      } else
        n[o] = a;
    }
    return i && (n.inputs = [...t.keys()].map((o) => o.toJSON())), n;
  }
  toProxy() {
    return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache;
  }
  toString(e = T0) {
    e.stringify && (e = e.stringify);
    let t = "";
    return e(this, (n) => {
      t += n;
    }), t;
  }
  warn(e, t, n) {
    let i = { node: this };
    for (let s in n) i[s] = n[s];
    return e.warn(t, i);
  }
  get proxyOf() {
    return this;
  }
};
var ri = ks;
ks.default = ks;
let D0 = ri, Os = class extends D0 {
  constructor(e) {
    e && typeof e.value < "u" && typeof e.value != "string" && (e = { ...e, value: String(e.value) }), super(e), this.type = "decl";
  }
  get variable() {
    return this.prop.startsWith("--") || this.prop[0] === "$";
  }
};
var ni = Os;
Os.default = Os;
let F0 = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", z0 = (r, e = 21) => (t = e) => {
  let n = "", i = t;
  for (; i--; )
    n += r[Math.random() * r.length | 0];
  return n;
}, U0 = (r = 21) => {
  let e = "", t = r;
  for (; t--; )
    e += F0[Math.random() * 64 | 0];
  return e;
};
var B0 = { nanoid: U0, customAlphabet: z0 };
let { SourceMapConsumer: ol, SourceMapGenerator: al } = Ie, { existsSync: W0, readFileSync: Z0 } = Ie, { dirname: Ui, join: j0 } = Ie;
function G0(r) {
  return Buffer ? Buffer.from(r, "base64").toString() : window.atob(r);
}
let Ms = class {
  constructor(e, t) {
    if (t.map === !1) return;
    this.loadAnnotation(e), this.inline = this.startWith(this.annotation, "data:");
    let n = t.map ? t.map.prev : void 0, i = this.loadMap(t.from, n);
    !this.mapFile && t.from && (this.mapFile = t.from), this.mapFile && (this.root = Ui(this.mapFile)), i && (this.text = i);
  }
  consumer() {
    return this.consumerCache || (this.consumerCache = new ol(this.text)), this.consumerCache;
  }
  decodeInline(e) {
    let t = /^data:application\/json;charset=utf-?8;base64,/, n = /^data:application\/json;base64,/, i = /^data:application\/json;charset=utf-?8,/, s = /^data:application\/json,/;
    if (i.test(e) || s.test(e))
      return decodeURIComponent(e.substr(RegExp.lastMatch.length));
    if (t.test(e) || n.test(e))
      return G0(e.substr(RegExp.lastMatch.length));
    let o = e.match(/data:application\/json;([^,]+),/)[1];
    throw new Error("Unsupported source map encoding " + o);
  }
  getAnnotationURL(e) {
    return e.replace(/^\/\*\s*# sourceMappingURL=/, "").trim();
  }
  isMap(e) {
    return typeof e != "object" ? !1 : typeof e.mappings == "string" || typeof e._mappings == "string" || Array.isArray(e.sections);
  }
  loadAnnotation(e) {
    let t = e.match(/\/\*\s*# sourceMappingURL=/gm);
    if (!t) return;
    let n = e.lastIndexOf(t.pop()), i = e.indexOf("*/", n);
    n > -1 && i > -1 && (this.annotation = this.getAnnotationURL(e.substring(n, i)));
  }
  loadFile(e) {
    if (this.root = Ui(e), W0(e))
      return this.mapFile = e, Z0(e, "utf-8").toString().trim();
  }
  loadMap(e, t) {
    if (t === !1) return !1;
    if (t) {
      if (typeof t == "string")
        return t;
      if (typeof t == "function") {
        let n = t(e);
        if (n) {
          let i = this.loadFile(n);
          if (!i)
            throw new Error(
              "Unable to load previous source map: " + n.toString()
            );
          return i;
        }
      } else {
        if (t instanceof ol)
          return al.fromSourceMap(t).toString();
        if (t instanceof al)
          return t.toString();
        if (this.isMap(t))
          return JSON.stringify(t);
        throw new Error(
          "Unsupported previous source map format: " + t.toString()
        );
      }
    } else {
      if (this.inline)
        return this.decodeInline(this.annotation);
      if (this.annotation) {
        let n = this.annotation;
        return e && (n = j0(Ui(e), n)), this.loadFile(n);
      }
    }
  }
  startWith(e, t) {
    return e ? e.substr(0, t.length) === t : !1;
  }
  withContent() {
    return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0);
  }
};
var Ec = Ms;
Ms.default = Ms;
let { SourceMapConsumer: V0, SourceMapGenerator: H0 } = Ie, { fileURLToPath: ll, pathToFileURL: en } = Ie, { isAbsolute: $s, resolve: Ps } = Ie, { nanoid: Y0 } = B0, Bi = Ie, ul = xo, X0 = Ec, Wi = Symbol("fromOffsetCache"), J0 = !!(V0 && H0), cl = !!(Ps && $s), zn = class {
  constructor(e, t = {}) {
    if (e === null || typeof e > "u" || typeof e == "object" && !e.toString)
      throw new Error(`PostCSS received ${e} instead of CSS string`);
    if (this.css = e.toString(), this.css[0] === "\uFEFF" || this.css[0] === "￾" ? (this.hasBOM = !0, this.css = this.css.slice(1)) : this.hasBOM = !1, t.from && (!cl || /^\w+:\/\//.test(t.from) || $s(t.from) ? this.file = t.from : this.file = Ps(t.from)), cl && J0) {
      let n = new X0(this.css, t);
      if (n.text) {
        this.map = n;
        let i = n.consumer().file;
        !this.file && i && (this.file = this.mapResolve(i));
      }
    }
    this.file || (this.id = "<input css " + Y0(6) + ">"), this.map && (this.map.file = this.from);
  }
  error(e, t, n, i = {}) {
    let s, o, a;
    if (t && typeof t == "object") {
      let u = t, c = n;
      if (typeof u.offset == "number") {
        let f = this.fromOffset(u.offset);
        t = f.line, n = f.col;
      } else
        t = u.line, n = u.column;
      if (typeof c.offset == "number") {
        let f = this.fromOffset(c.offset);
        o = f.line, a = f.col;
      } else
        o = c.line, a = c.column;
    } else if (!n) {
      let u = this.fromOffset(t);
      t = u.line, n = u.col;
    }
    let l = this.origin(t, n, o, a);
    return l ? s = new ul(
      e,
      l.endLine === void 0 ? l.line : { column: l.column, line: l.line },
      l.endLine === void 0 ? l.column : { column: l.endColumn, line: l.endLine },
      l.source,
      l.file,
      i.plugin
    ) : s = new ul(
      e,
      o === void 0 ? t : { column: n, line: t },
      o === void 0 ? n : { column: a, line: o },
      this.css,
      this.file,
      i.plugin
    ), s.input = { column: n, endColumn: a, endLine: o, line: t, source: this.css }, this.file && (en && (s.input.url = en(this.file).toString()), s.input.file = this.file), s;
  }
  fromOffset(e) {
    let t, n;
    if (this[Wi])
      n = this[Wi];
    else {
      let s = this.css.split(`
`);
      n = new Array(s.length);
      let o = 0;
      for (let a = 0, l = s.length; a < l; a++)
        n[a] = o, o += s[a].length + 1;
      this[Wi] = n;
    }
    t = n[n.length - 1];
    let i = 0;
    if (e >= t)
      i = n.length - 1;
    else {
      let s = n.length - 2, o;
      for (; i < s; )
        if (o = i + (s - i >> 1), e < n[o])
          s = o - 1;
        else if (e >= n[o + 1])
          i = o + 1;
        else {
          i = o;
          break;
        }
    }
    return {
      col: e - n[i] + 1,
      line: i + 1
    };
  }
  mapResolve(e) {
    return /^\w+:\/\//.test(e) ? e : Ps(this.map.consumer().sourceRoot || this.map.root || ".", e);
  }
  origin(e, t, n, i) {
    if (!this.map) return !1;
    let s = this.map.consumer(), o = s.originalPositionFor({ column: t, line: e });
    if (!o.source) return !1;
    let a;
    typeof n == "number" && (a = s.originalPositionFor({ column: i, line: n }));
    let l;
    $s(o.source) ? l = en(o.source) : l = new URL(
      o.source,
      this.map.consumer().sourceRoot || en(this.map.mapFile)
    );
    let u = {
      column: o.column,
      endColumn: a && a.column,
      endLine: a && a.line,
      line: o.line,
      url: l.toString()
    };
    if (l.protocol === "file:")
      if (ll)
        u.file = ll(l);
      else
        throw new Error("file: protocol is not available in this PostCSS build");
    let c = s.sourceContentFor(o.source);
    return c && (u.source = c), u;
  }
  toJSON() {
    let e = {};
    for (let t of ["hasBOM", "css", "file", "id"])
      this[t] != null && (e[t] = this[t]);
    return this.map && (e.map = { ...this.map }, e.map.consumerCache && (e.map.consumerCache = void 0)), e;
  }
  get from() {
    return this.file || this.id;
  }
};
var ii = zn;
zn.default = zn;
Bi && Bi.registerInput && Bi.registerInput(zn);
let { SourceMapConsumer: Rc, SourceMapGenerator: In } = Ie, { dirname: An, relative: kc, resolve: Oc, sep: Mc } = Ie, { pathToFileURL: fl } = Ie, K0 = ii, q0 = !!(Rc && In), Q0 = !!(An && Oc && kc && Mc), ew = class {
  constructor(e, t, n, i) {
    this.stringify = e, this.mapOpts = n.map || {}, this.root = t, this.opts = n, this.css = i, this.originalCSS = i, this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute, this.memoizedFileURLs = /* @__PURE__ */ new Map(), this.memoizedPaths = /* @__PURE__ */ new Map(), this.memoizedURLs = /* @__PURE__ */ new Map();
  }
  addAnnotation() {
    let e;
    this.isInline() ? e = "data:application/json;base64," + this.toBase64(this.map.toString()) : typeof this.mapOpts.annotation == "string" ? e = this.mapOpts.annotation : typeof this.mapOpts.annotation == "function" ? e = this.mapOpts.annotation(this.opts.to, this.root) : e = this.outputFile() + ".map";
    let t = `
`;
    this.css.includes(`\r
`) && (t = `\r
`), this.css += t + "/*# sourceMappingURL=" + e + " */";
  }
  applyPrevMaps() {
    for (let e of this.previous()) {
      let t = this.toUrl(this.path(e.file)), n = e.root || An(e.file), i;
      this.mapOpts.sourcesContent === !1 ? (i = new Rc(e.text), i.sourcesContent && (i.sourcesContent = null)) : i = e.consumer(), this.map.applySourceMap(i, t, this.toUrl(this.path(n)));
    }
  }
  clearAnnotation() {
    if (this.mapOpts.annotation !== !1)
      if (this.root) {
        let e;
        for (let t = this.root.nodes.length - 1; t >= 0; t--)
          e = this.root.nodes[t], e.type === "comment" && e.text.indexOf("# sourceMappingURL=") === 0 && this.root.removeChild(t);
      } else this.css && (this.css = this.css.replace(/\n*?\/\*#[\S\s]*?\*\/$/gm, ""));
  }
  generate() {
    if (this.clearAnnotation(), Q0 && q0 && this.isMap())
      return this.generateMap();
    {
      let e = "";
      return this.stringify(this.root, (t) => {
        e += t;
      }), [e];
    }
  }
  generateMap() {
    if (this.root)
      this.generateString();
    else if (this.previous().length === 1) {
      let e = this.previous()[0].consumer();
      e.file = this.outputFile(), this.map = In.fromSourceMap(e, {
        ignoreInvalidMapping: !0
      });
    } else
      this.map = new In({
        file: this.outputFile(),
        ignoreInvalidMapping: !0
      }), this.map.addMapping({
        generated: { column: 0, line: 1 },
        original: { column: 0, line: 1 },
        source: this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>"
      });
    return this.isSourcesContent() && this.setSourcesContent(), this.root && this.previous().length > 0 && this.applyPrevMaps(), this.isAnnotation() && this.addAnnotation(), this.isInline() ? [this.css] : [this.css, this.map];
  }
  generateString() {
    this.css = "", this.map = new In({
      file: this.outputFile(),
      ignoreInvalidMapping: !0
    });
    let e = 1, t = 1, n = "<no source>", i = {
      generated: { column: 0, line: 0 },
      original: { column: 0, line: 0 },
      source: ""
    }, s, o;
    this.stringify(this.root, (a, l, u) => {
      if (this.css += a, l && u !== "end" && (i.generated.line = e, i.generated.column = t - 1, l.source && l.source.start ? (i.source = this.sourcePath(l), i.original.line = l.source.start.line, i.original.column = l.source.start.column - 1, this.map.addMapping(i)) : (i.source = n, i.original.line = 1, i.original.column = 0, this.map.addMapping(i))), s = a.match(/\n/g), s ? (e += s.length, o = a.lastIndexOf(`
`), t = a.length - o) : t += a.length, l && u !== "start") {
        let c = l.parent || { raws: {} };
        (!(l.type === "decl" || l.type === "atrule" && !l.nodes) || l !== c.last || c.raws.semicolon) && (l.source && l.source.end ? (i.source = this.sourcePath(l), i.original.line = l.source.end.line, i.original.column = l.source.end.column - 1, i.generated.line = e, i.generated.column = t - 2, this.map.addMapping(i)) : (i.source = n, i.original.line = 1, i.original.column = 0, i.generated.line = e, i.generated.column = t - 1, this.map.addMapping(i)));
      }
    });
  }
  isAnnotation() {
    return this.isInline() ? !0 : typeof this.mapOpts.annotation < "u" ? this.mapOpts.annotation : this.previous().length ? this.previous().some((e) => e.annotation) : !0;
  }
  isInline() {
    if (typeof this.mapOpts.inline < "u")
      return this.mapOpts.inline;
    let e = this.mapOpts.annotation;
    return typeof e < "u" && e !== !0 ? !1 : this.previous().length ? this.previous().some((t) => t.inline) : !0;
  }
  isMap() {
    return typeof this.opts.map < "u" ? !!this.opts.map : this.previous().length > 0;
  }
  isSourcesContent() {
    return typeof this.mapOpts.sourcesContent < "u" ? this.mapOpts.sourcesContent : this.previous().length ? this.previous().some((e) => e.withContent()) : !0;
  }
  outputFile() {
    return this.opts.to ? this.path(this.opts.to) : this.opts.from ? this.path(this.opts.from) : "to.css";
  }
  path(e) {
    if (this.mapOpts.absolute || e.charCodeAt(0) === 60 || /^\w+:\/\//.test(e)) return e;
    let t = this.memoizedPaths.get(e);
    if (t) return t;
    let n = this.opts.to ? An(this.opts.to) : ".";
    typeof this.mapOpts.annotation == "string" && (n = An(Oc(n, this.mapOpts.annotation)));
    let i = kc(n, e);
    return this.memoizedPaths.set(e, i), i;
  }
  previous() {
    if (!this.previousMaps)
      if (this.previousMaps = [], this.root)
        this.root.walk((e) => {
          if (e.source && e.source.input.map) {
            let t = e.source.input.map;
            this.previousMaps.includes(t) || this.previousMaps.push(t);
          }
        });
      else {
        let e = new K0(this.originalCSS, this.opts);
        e.map && this.previousMaps.push(e.map);
      }
    return this.previousMaps;
  }
  setSourcesContent() {
    let e = {};
    if (this.root)
      this.root.walk((t) => {
        if (t.source) {
          let n = t.source.input.from;
          if (n && !e[n]) {
            e[n] = !0;
            let i = this.usesFileUrls ? this.toFileUrl(n) : this.toUrl(this.path(n));
            this.map.setSourceContent(i, t.source.input.css);
          }
        }
      });
    else if (this.css) {
      let t = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
      this.map.setSourceContent(t, this.css);
    }
  }
  sourcePath(e) {
    return this.mapOpts.from ? this.toUrl(this.mapOpts.from) : this.usesFileUrls ? this.toFileUrl(e.source.input.from) : this.toUrl(this.path(e.source.input.from));
  }
  toBase64(e) {
    return Buffer ? Buffer.from(e).toString("base64") : window.btoa(unescape(encodeURIComponent(e)));
  }
  toFileUrl(e) {
    let t = this.memoizedFileURLs.get(e);
    if (t) return t;
    if (fl) {
      let n = fl(e).toString();
      return this.memoizedFileURLs.set(e, n), n;
    } else
      throw new Error(
        "`map.absolute` option is not available in this PostCSS build"
      );
  }
  toUrl(e) {
    let t = this.memoizedURLs.get(e);
    if (t) return t;
    Mc === "\\" && (e = e.replace(/\\/g, "/"));
    let n = encodeURI(e).replace(/[#?]/g, encodeURIComponent);
    return this.memoizedURLs.set(e, n), n;
  }
};
var $c = ew;
let tw = ri, Ns = class extends tw {
  constructor(e) {
    super(e), this.type = "comment";
  }
};
var si = Ns;
Ns.default = Ns;
let { isClean: Pc, my: Nc } = Nr, Lc = ni, Tc = si, rw = ri, Dc, Co, Io, Fc;
function zc(r) {
  return r.map((e) => (e.nodes && (e.nodes = zc(e.nodes)), delete e.source, e));
}
function Uc(r) {
  if (r[Pc] = !1, r.proxyOf.nodes)
    for (let e of r.proxyOf.nodes)
      Uc(e);
}
let Ze = class Bc extends rw {
  append(...e) {
    for (let t of e) {
      let n = this.normalize(t, this.last);
      for (let i of n) this.proxyOf.nodes.push(i);
    }
    return this.markDirty(), this;
  }
  cleanRaws(e) {
    if (super.cleanRaws(e), this.nodes)
      for (let t of this.nodes) t.cleanRaws(e);
  }
  each(e) {
    if (!this.proxyOf.nodes) return;
    let t = this.getIterator(), n, i;
    for (; this.indexes[t] < this.proxyOf.nodes.length && (n = this.indexes[t], i = e(this.proxyOf.nodes[n], n), i !== !1); )
      this.indexes[t] += 1;
    return delete this.indexes[t], i;
  }
  every(e) {
    return this.nodes.every(e);
  }
  getIterator() {
    this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach += 1;
    let e = this.lastEach;
    return this.indexes[e] = 0, e;
  }
  getProxyProcessor() {
    return {
      get(e, t) {
        return t === "proxyOf" ? e : e[t] ? t === "each" || typeof t == "string" && t.startsWith("walk") ? (...n) => e[t](
          ...n.map((i) => typeof i == "function" ? (s, o) => i(s.toProxy(), o) : i)
        ) : t === "every" || t === "some" ? (n) => e[t](
          (i, ...s) => n(i.toProxy(), ...s)
        ) : t === "root" ? () => e.root().toProxy() : t === "nodes" ? e.nodes.map((n) => n.toProxy()) : t === "first" || t === "last" ? e[t].toProxy() : e[t] : e[t];
      },
      set(e, t, n) {
        return e[t] === n || (e[t] = n, (t === "name" || t === "params" || t === "selector") && e.markDirty()), !0;
      }
    };
  }
  index(e) {
    return typeof e == "number" ? e : (e.proxyOf && (e = e.proxyOf), this.proxyOf.nodes.indexOf(e));
  }
  insertAfter(e, t) {
    let n = this.index(e), i = this.normalize(t, this.proxyOf.nodes[n]).reverse();
    n = this.index(e);
    for (let o of i) this.proxyOf.nodes.splice(n + 1, 0, o);
    let s;
    for (let o in this.indexes)
      s = this.indexes[o], n < s && (this.indexes[o] = s + i.length);
    return this.markDirty(), this;
  }
  insertBefore(e, t) {
    let n = this.index(e), i = n === 0 ? "prepend" : !1, s = this.normalize(t, this.proxyOf.nodes[n], i).reverse();
    n = this.index(e);
    for (let a of s) this.proxyOf.nodes.splice(n, 0, a);
    let o;
    for (let a in this.indexes)
      o = this.indexes[a], n <= o && (this.indexes[a] = o + s.length);
    return this.markDirty(), this;
  }
  normalize(e, t) {
    if (typeof e == "string")
      e = zc(Dc(e).nodes);
    else if (typeof e > "u")
      e = [];
    else if (Array.isArray(e)) {
      e = e.slice(0);
      for (let i of e)
        i.parent && i.parent.removeChild(i, "ignore");
    } else if (e.type === "root" && this.type !== "document") {
      e = e.nodes.slice(0);
      for (let i of e)
        i.parent && i.parent.removeChild(i, "ignore");
    } else if (e.type)
      e = [e];
    else if (e.prop) {
      if (typeof e.value > "u")
        throw new Error("Value field is missed in node creation");
      typeof e.value != "string" && (e.value = String(e.value)), e = [new Lc(e)];
    } else if (e.selector)
      e = [new Co(e)];
    else if (e.name)
      e = [new Io(e)];
    else if (e.text)
      e = [new Tc(e)];
    else
      throw new Error("Unknown node type in node creation");
    return e.map((i) => (i[Nc] || Bc.rebuild(i), i = i.proxyOf, i.parent && i.parent.removeChild(i), i[Pc] && Uc(i), typeof i.raws.before > "u" && t && typeof t.raws.before < "u" && (i.raws.before = t.raws.before.replace(/\S/g, "")), i.parent = this.proxyOf, i));
  }
  prepend(...e) {
    e = e.reverse();
    for (let t of e) {
      let n = this.normalize(t, this.first, "prepend").reverse();
      for (let i of n) this.proxyOf.nodes.unshift(i);
      for (let i in this.indexes)
        this.indexes[i] = this.indexes[i] + n.length;
    }
    return this.markDirty(), this;
  }
  push(e) {
    return e.parent = this, this.proxyOf.nodes.push(e), this;
  }
  removeAll() {
    for (let e of this.proxyOf.nodes) e.parent = void 0;
    return this.proxyOf.nodes = [], this.markDirty(), this;
  }
  removeChild(e) {
    e = this.index(e), this.proxyOf.nodes[e].parent = void 0, this.proxyOf.nodes.splice(e, 1);
    let t;
    for (let n in this.indexes)
      t = this.indexes[n], t >= e && (this.indexes[n] = t - 1);
    return this.markDirty(), this;
  }
  replaceValues(e, t, n) {
    return n || (n = t, t = {}), this.walkDecls((i) => {
      t.props && !t.props.includes(i.prop) || t.fast && !i.value.includes(t.fast) || (i.value = i.value.replace(e, n));
    }), this.markDirty(), this;
  }
  some(e) {
    return this.nodes.some(e);
  }
  walk(e) {
    return this.each((t, n) => {
      let i;
      try {
        i = e(t, n);
      } catch (s) {
        throw t.addToError(s);
      }
      return i !== !1 && t.walk && (i = t.walk(e)), i;
    });
  }
  walkAtRules(e, t) {
    return t ? e instanceof RegExp ? this.walk((n, i) => {
      if (n.type === "atrule" && e.test(n.name))
        return t(n, i);
    }) : this.walk((n, i) => {
      if (n.type === "atrule" && n.name === e)
        return t(n, i);
    }) : (t = e, this.walk((n, i) => {
      if (n.type === "atrule")
        return t(n, i);
    }));
  }
  walkComments(e) {
    return this.walk((t, n) => {
      if (t.type === "comment")
        return e(t, n);
    });
  }
  walkDecls(e, t) {
    return t ? e instanceof RegExp ? this.walk((n, i) => {
      if (n.type === "decl" && e.test(n.prop))
        return t(n, i);
    }) : this.walk((n, i) => {
      if (n.type === "decl" && n.prop === e)
        return t(n, i);
    }) : (t = e, this.walk((n, i) => {
      if (n.type === "decl")
        return t(n, i);
    }));
  }
  walkRules(e, t) {
    return t ? e instanceof RegExp ? this.walk((n, i) => {
      if (n.type === "rule" && e.test(n.selector))
        return t(n, i);
    }) : this.walk((n, i) => {
      if (n.type === "rule" && n.selector === e)
        return t(n, i);
    }) : (t = e, this.walk((n, i) => {
      if (n.type === "rule")
        return t(n, i);
    }));
  }
  get first() {
    if (this.proxyOf.nodes)
      return this.proxyOf.nodes[0];
  }
  get last() {
    if (this.proxyOf.nodes)
      return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
  }
};
Ze.registerParse = (r) => {
  Dc = r;
};
Ze.registerRule = (r) => {
  Co = r;
};
Ze.registerAtRule = (r) => {
  Io = r;
};
Ze.registerRoot = (r) => {
  Fc = r;
};
var pt = Ze;
Ze.default = Ze;
Ze.rebuild = (r) => {
  r.type === "atrule" ? Object.setPrototypeOf(r, Io.prototype) : r.type === "rule" ? Object.setPrototypeOf(r, Co.prototype) : r.type === "decl" ? Object.setPrototypeOf(r, Lc.prototype) : r.type === "comment" ? Object.setPrototypeOf(r, Tc.prototype) : r.type === "root" && Object.setPrototypeOf(r, Fc.prototype), r[Nc] = !0, r.nodes && r.nodes.forEach((e) => {
    Ze.rebuild(e);
  });
};
let nw = pt, Wc, Zc, yr = class extends nw {
  constructor(e) {
    super({ type: "document", ...e }), this.nodes || (this.nodes = []);
  }
  toResult(e = {}) {
    return new Wc(new Zc(), this, e).stringify();
  }
};
yr.registerLazyResult = (r) => {
  Wc = r;
};
yr.registerProcessor = (r) => {
  Zc = r;
};
var Ao = yr;
yr.default = yr;
let hl = {};
var jc = function(e) {
  hl[e] || (hl[e] = !0, typeof console < "u" && console.warn && console.warn(e));
};
let Ls = class {
  constructor(e, t = {}) {
    if (this.type = "warning", this.text = e, t.node && t.node.source) {
      let n = t.node.rangeBy(t);
      this.line = n.start.line, this.column = n.start.column, this.endLine = n.end.line, this.endColumn = n.end.column;
    }
    for (let n in t) this[n] = t[n];
  }
  toString() {
    return this.node ? this.node.error(this.text, {
      index: this.index,
      plugin: this.plugin,
      word: this.word
    }).message : this.plugin ? this.plugin + ": " + this.text : this.text;
  }
};
var Gc = Ls;
Ls.default = Ls;
let iw = Gc, Ts = class {
  constructor(e, t, n) {
    this.processor = e, this.messages = [], this.root = t, this.opts = n, this.css = void 0, this.map = void 0;
  }
  toString() {
    return this.css;
  }
  warn(e, t = {}) {
    t.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (t.plugin = this.lastPlugin.postcssPlugin);
    let n = new iw(e, t);
    return this.messages.push(n), n;
  }
  warnings() {
    return this.messages.filter((e) => e.type === "warning");
  }
  get content() {
    return this.css;
  }
};
var Eo = Ts;
Ts.default = Ts;
const Zi = 39, dl = 34, tn = 92, pl = 47, rn = 10, Xt = 32, nn = 12, sn = 9, on = 13, sw = 91, ow = 93, aw = 40, lw = 41, uw = 123, cw = 125, fw = 59, hw = 42, dw = 58, pw = 64, an = /[\t\n\f\r "#'()/;[\\\]{}]/g, ln = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g, mw = /.[\r\n"'(/\\]/, ml = /[\da-f]/i;
var gw = function(e, t = {}) {
  let n = e.css.valueOf(), i = t.ignoreErrors, s, o, a, l, u, c, f, d, h, p, m = n.length, g = 0, v = [], b = [];
  function y() {
    return g;
  }
  function w(S) {
    throw e.error("Unclosed " + S, g);
  }
  function _() {
    return b.length === 0 && g >= m;
  }
  function E(S) {
    if (b.length) return b.pop();
    if (g >= m) return;
    let A = S ? S.ignoreUnclosed : !1;
    switch (s = n.charCodeAt(g), s) {
      case rn:
      case Xt:
      case sn:
      case on:
      case nn: {
        o = g;
        do
          o += 1, s = n.charCodeAt(o);
        while (s === Xt || s === rn || s === sn || s === on || s === nn);
        p = ["space", n.slice(g, o)], g = o - 1;
        break;
      }
      case sw:
      case ow:
      case uw:
      case cw:
      case dw:
      case fw:
      case lw: {
        let I = String.fromCharCode(s);
        p = [I, I, g];
        break;
      }
      case aw: {
        if (d = v.length ? v.pop()[1] : "", h = n.charCodeAt(g + 1), d === "url" && h !== Zi && h !== dl && h !== Xt && h !== rn && h !== sn && h !== nn && h !== on) {
          o = g;
          do {
            if (c = !1, o = n.indexOf(")", o + 1), o === -1)
              if (i || A) {
                o = g;
                break;
              } else
                w("bracket");
            for (f = o; n.charCodeAt(f - 1) === tn; )
              f -= 1, c = !c;
          } while (c);
          p = ["brackets", n.slice(g, o + 1), g, o], g = o;
        } else
          o = n.indexOf(")", g + 1), l = n.slice(g, o + 1), o === -1 || mw.test(l) ? p = ["(", "(", g] : (p = ["brackets", l, g, o], g = o);
        break;
      }
      case Zi:
      case dl: {
        a = s === Zi ? "'" : '"', o = g;
        do {
          if (c = !1, o = n.indexOf(a, o + 1), o === -1)
            if (i || A) {
              o = g + 1;
              break;
            } else
              w("string");
          for (f = o; n.charCodeAt(f - 1) === tn; )
            f -= 1, c = !c;
        } while (c);
        p = ["string", n.slice(g, o + 1), g, o], g = o;
        break;
      }
      case pw: {
        an.lastIndex = g + 1, an.test(n), an.lastIndex === 0 ? o = n.length - 1 : o = an.lastIndex - 2, p = ["at-word", n.slice(g, o + 1), g, o], g = o;
        break;
      }
      case tn: {
        for (o = g, u = !0; n.charCodeAt(o + 1) === tn; )
          o += 1, u = !u;
        if (s = n.charCodeAt(o + 1), u && s !== pl && s !== Xt && s !== rn && s !== sn && s !== on && s !== nn && (o += 1, ml.test(n.charAt(o)))) {
          for (; ml.test(n.charAt(o + 1)); )
            o += 1;
          n.charCodeAt(o + 1) === Xt && (o += 1);
        }
        p = ["word", n.slice(g, o + 1), g, o], g = o;
        break;
      }
      default: {
        s === pl && n.charCodeAt(g + 1) === hw ? (o = n.indexOf("*/", g + 2) + 1, o === 0 && (i || A ? o = n.length : w("comment")), p = ["comment", n.slice(g, o + 1), g, o], g = o) : (ln.lastIndex = g + 1, ln.test(n), ln.lastIndex === 0 ? o = n.length - 1 : o = ln.lastIndex - 2, p = ["word", n.slice(g, o + 1), g, o], v.push(p), g = o);
        break;
      }
    }
    return g++, p;
  }
  function x(S) {
    b.push(S);
  }
  return {
    back: x,
    endOfFile: _,
    nextToken: E,
    position: y
  };
};
let Vc = pt, Un = class extends Vc {
  constructor(e) {
    super(e), this.type = "atrule";
  }
  append(...e) {
    return this.proxyOf.nodes || (this.nodes = []), super.append(...e);
  }
  prepend(...e) {
    return this.proxyOf.nodes || (this.nodes = []), super.prepend(...e);
  }
};
var Ro = Un;
Un.default = Un;
Vc.registerAtRule(Un);
let Hc = pt, Yc, Xc, Tt = class extends Hc {
  constructor(e) {
    super(e), this.type = "root", this.nodes || (this.nodes = []);
  }
  normalize(e, t, n) {
    let i = super.normalize(e);
    if (t) {
      if (n === "prepend")
        this.nodes.length > 1 ? t.raws.before = this.nodes[1].raws.before : delete t.raws.before;
      else if (this.first !== t)
        for (let s of i)
          s.raws.before = t.raws.before;
    }
    return i;
  }
  removeChild(e, t) {
    let n = this.index(e);
    return !t && n === 0 && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[n].raws.before), super.removeChild(e);
  }
  toResult(e = {}) {
    return new Yc(new Xc(), this, e).stringify();
  }
};
Tt.registerLazyResult = (r) => {
  Yc = r;
};
Tt.registerProcessor = (r) => {
  Xc = r;
};
var Lr = Tt;
Tt.default = Tt;
Hc.registerRoot(Tt);
let wr = {
  comma(r) {
    return wr.split(r, [","], !0);
  },
  space(r) {
    let e = [" ", `
`, "	"];
    return wr.split(r, e);
  },
  split(r, e, t) {
    let n = [], i = "", s = !1, o = 0, a = !1, l = "", u = !1;
    for (let c of r)
      u ? u = !1 : c === "\\" ? u = !0 : a ? c === l && (a = !1) : c === '"' || c === "'" ? (a = !0, l = c) : c === "(" ? o += 1 : c === ")" ? o > 0 && (o -= 1) : o === 0 && e.includes(c) && (s = !0), s ? (i !== "" && n.push(i.trim()), i = "", s = !1) : i += c;
    return (t || i !== "") && n.push(i.trim()), n;
  }
};
var Jc = wr;
wr.default = wr;
let Kc = pt, yw = Jc, Bn = class extends Kc {
  constructor(e) {
    super(e), this.type = "rule", this.nodes || (this.nodes = []);
  }
  get selectors() {
    return yw.comma(this.selector);
  }
  set selectors(e) {
    let t = this.selector ? this.selector.match(/,\s*/) : null, n = t ? t[0] : "," + this.raw("between", "beforeOpen");
    this.selector = e.join(n);
  }
};
var ko = Bn;
Bn.default = Bn;
Kc.registerRule(Bn);
let ww = ni, vw = gw, bw = si, Sw = Ro, _w = Lr, gl = ko;
const yl = {
  empty: !0,
  space: !0
};
function xw(r) {
  for (let e = r.length - 1; e >= 0; e--) {
    let t = r[e], n = t[3] || t[2];
    if (n) return n;
  }
}
let Cw = class {
  constructor(e) {
    this.input = e, this.root = new _w(), this.current = this.root, this.spaces = "", this.semicolon = !1, this.createTokenizer(), this.root.source = { input: e, start: { column: 1, line: 1, offset: 0 } };
  }
  atrule(e) {
    let t = new Sw();
    t.name = e[1].slice(1), t.name === "" && this.unnamedAtrule(t, e), this.init(t, e[2]);
    let n, i, s, o = !1, a = !1, l = [], u = [];
    for (; !this.tokenizer.endOfFile(); ) {
      if (e = this.tokenizer.nextToken(), n = e[0], n === "(" || n === "[" ? u.push(n === "(" ? ")" : "]") : n === "{" && u.length > 0 ? u.push("}") : n === u[u.length - 1] && u.pop(), u.length === 0)
        if (n === ";") {
          t.source.end = this.getPosition(e[2]), t.source.end.offset++, this.semicolon = !0;
          break;
        } else if (n === "{") {
          a = !0;
          break;
        } else if (n === "}") {
          if (l.length > 0) {
            for (s = l.length - 1, i = l[s]; i && i[0] === "space"; )
              i = l[--s];
            i && (t.source.end = this.getPosition(i[3] || i[2]), t.source.end.offset++);
          }
          this.end(e);
          break;
        } else
          l.push(e);
      else
        l.push(e);
      if (this.tokenizer.endOfFile()) {
        o = !0;
        break;
      }
    }
    t.raws.between = this.spacesAndCommentsFromEnd(l), l.length ? (t.raws.afterName = this.spacesAndCommentsFromStart(l), this.raw(t, "params", l), o && (e = l[l.length - 1], t.source.end = this.getPosition(e[3] || e[2]), t.source.end.offset++, this.spaces = t.raws.between, t.raws.between = "")) : (t.raws.afterName = "", t.params = ""), a && (t.nodes = [], this.current = t);
  }
  checkMissedSemicolon(e) {
    let t = this.colon(e);
    if (t === !1) return;
    let n = 0, i;
    for (let s = t - 1; s >= 0 && (i = e[s], !(i[0] !== "space" && (n += 1, n === 2))); s--)
      ;
    throw this.input.error(
      "Missed semicolon",
      i[0] === "word" ? i[3] + 1 : i[2]
    );
  }
  colon(e) {
    let t = 0, n, i, s;
    for (let [o, a] of e.entries()) {
      if (n = a, i = n[0], i === "(" && (t += 1), i === ")" && (t -= 1), t === 0 && i === ":")
        if (!s)
          this.doubleColon(n);
        else {
          if (s[0] === "word" && s[1] === "progid")
            continue;
          return o;
        }
      s = n;
    }
    return !1;
  }
  comment(e) {
    let t = new bw();
    this.init(t, e[2]), t.source.end = this.getPosition(e[3] || e[2]), t.source.end.offset++;
    let n = e[1].slice(2, -2);
    if (/^\s*$/.test(n))
      t.text = "", t.raws.left = n, t.raws.right = "";
    else {
      let i = n.match(/^(\s*)([^]*\S)(\s*)$/);
      t.text = i[2], t.raws.left = i[1], t.raws.right = i[3];
    }
  }
  createTokenizer() {
    this.tokenizer = vw(this.input);
  }
  decl(e, t) {
    let n = new ww();
    this.init(n, e[0][2]);
    let i = e[e.length - 1];
    for (i[0] === ";" && (this.semicolon = !0, e.pop()), n.source.end = this.getPosition(
      i[3] || i[2] || xw(e)
    ), n.source.end.offset++; e[0][0] !== "word"; )
      e.length === 1 && this.unknownWord(e), n.raws.before += e.shift()[1];
    for (n.source.start = this.getPosition(e[0][2]), n.prop = ""; e.length; ) {
      let u = e[0][0];
      if (u === ":" || u === "space" || u === "comment")
        break;
      n.prop += e.shift()[1];
    }
    n.raws.between = "";
    let s;
    for (; e.length; )
      if (s = e.shift(), s[0] === ":") {
        n.raws.between += s[1];
        break;
      } else
        s[0] === "word" && /\w/.test(s[1]) && this.unknownWord([s]), n.raws.between += s[1];
    (n.prop[0] === "_" || n.prop[0] === "*") && (n.raws.before += n.prop[0], n.prop = n.prop.slice(1));
    let o = [], a;
    for (; e.length && (a = e[0][0], !(a !== "space" && a !== "comment")); )
      o.push(e.shift());
    this.precheckMissedSemicolon(e);
    for (let u = e.length - 1; u >= 0; u--) {
      if (s = e[u], s[1].toLowerCase() === "!important") {
        n.important = !0;
        let c = this.stringFrom(e, u);
        c = this.spacesFromEnd(e) + c, c !== " !important" && (n.raws.important = c);
        break;
      } else if (s[1].toLowerCase() === "important") {
        let c = e.slice(0), f = "";
        for (let d = u; d > 0; d--) {
          let h = c[d][0];
          if (f.trim().indexOf("!") === 0 && h !== "space")
            break;
          f = c.pop()[1] + f;
        }
        f.trim().indexOf("!") === 0 && (n.important = !0, n.raws.important = f, e = c);
      }
      if (s[0] !== "space" && s[0] !== "comment")
        break;
    }
    e.some((u) => u[0] !== "space" && u[0] !== "comment") && (n.raws.between += o.map((u) => u[1]).join(""), o = []), this.raw(n, "value", o.concat(e), t), n.value.includes(":") && !t && this.checkMissedSemicolon(e);
  }
  doubleColon(e) {
    throw this.input.error(
      "Double colon",
      { offset: e[2] },
      { offset: e[2] + e[1].length }
    );
  }
  emptyRule(e) {
    let t = new gl();
    this.init(t, e[2]), t.selector = "", t.raws.between = "", this.current = t;
  }
  end(e) {
    this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.semicolon = !1, this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.spaces = "", this.current.parent ? (this.current.source.end = this.getPosition(e[2]), this.current.source.end.offset++, this.current = this.current.parent) : this.unexpectedClose(e);
  }
  endFile() {
    this.current.parent && this.unclosedBlock(), this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.root.source.end = this.getPosition(this.tokenizer.position());
  }
  freeSemicolon(e) {
    if (this.spaces += e[1], this.current.nodes) {
      let t = this.current.nodes[this.current.nodes.length - 1];
      t && t.type === "rule" && !t.raws.ownSemicolon && (t.raws.ownSemicolon = this.spaces, this.spaces = "");
    }
  }
  // Helpers
  getPosition(e) {
    let t = this.input.fromOffset(e);
    return {
      column: t.col,
      line: t.line,
      offset: e
    };
  }
  init(e, t) {
    this.current.push(e), e.source = {
      input: this.input,
      start: this.getPosition(t)
    }, e.raws.before = this.spaces, this.spaces = "", e.type !== "comment" && (this.semicolon = !1);
  }
  other(e) {
    let t = !1, n = null, i = !1, s = null, o = [], a = e[1].startsWith("--"), l = [], u = e;
    for (; u; ) {
      if (n = u[0], l.push(u), n === "(" || n === "[")
        s || (s = u), o.push(n === "(" ? ")" : "]");
      else if (a && i && n === "{")
        s || (s = u), o.push("}");
      else if (o.length === 0)
        if (n === ";")
          if (i) {
            this.decl(l, a);
            return;
          } else
            break;
        else if (n === "{") {
          this.rule(l);
          return;
        } else if (n === "}") {
          this.tokenizer.back(l.pop()), t = !0;
          break;
        } else n === ":" && (i = !0);
      else n === o[o.length - 1] && (o.pop(), o.length === 0 && (s = null));
      u = this.tokenizer.nextToken();
    }
    if (this.tokenizer.endOfFile() && (t = !0), o.length > 0 && this.unclosedBracket(s), t && i) {
      if (!a)
        for (; l.length && (u = l[l.length - 1][0], !(u !== "space" && u !== "comment")); )
          this.tokenizer.back(l.pop());
      this.decl(l, a);
    } else
      this.unknownWord(l);
  }
  parse() {
    let e;
    for (; !this.tokenizer.endOfFile(); )
      switch (e = this.tokenizer.nextToken(), e[0]) {
        case "space":
          this.spaces += e[1];
          break;
        case ";":
          this.freeSemicolon(e);
          break;
        case "}":
          this.end(e);
          break;
        case "comment":
          this.comment(e);
          break;
        case "at-word":
          this.atrule(e);
          break;
        case "{":
          this.emptyRule(e);
          break;
        default:
          this.other(e);
          break;
      }
    this.endFile();
  }
  precheckMissedSemicolon() {
  }
  raw(e, t, n, i) {
    let s, o, a = n.length, l = "", u = !0, c, f;
    for (let d = 0; d < a; d += 1)
      s = n[d], o = s[0], o === "space" && d === a - 1 && !i ? u = !1 : o === "comment" ? (f = n[d - 1] ? n[d - 1][0] : "empty", c = n[d + 1] ? n[d + 1][0] : "empty", !yl[f] && !yl[c] ? l.slice(-1) === "," ? u = !1 : l += s[1] : u = !1) : l += s[1];
    if (!u) {
      let d = n.reduce((h, p) => h + p[1], "");
      e.raws[t] = { raw: d, value: l };
    }
    e[t] = l;
  }
  rule(e) {
    e.pop();
    let t = new gl();
    this.init(t, e[0][2]), t.raws.between = this.spacesAndCommentsFromEnd(e), this.raw(t, "selector", e), this.current = t;
  }
  spacesAndCommentsFromEnd(e) {
    let t, n = "";
    for (; e.length && (t = e[e.length - 1][0], !(t !== "space" && t !== "comment")); )
      n = e.pop()[1] + n;
    return n;
  }
  // Errors
  spacesAndCommentsFromStart(e) {
    let t, n = "";
    for (; e.length && (t = e[0][0], !(t !== "space" && t !== "comment")); )
      n += e.shift()[1];
    return n;
  }
  spacesFromEnd(e) {
    let t, n = "";
    for (; e.length && (t = e[e.length - 1][0], t === "space"); )
      n = e.pop()[1] + n;
    return n;
  }
  stringFrom(e, t) {
    let n = "";
    for (let i = t; i < e.length; i++)
      n += e[i][1];
    return e.splice(t, e.length - t), n;
  }
  unclosedBlock() {
    let e = this.current.source.start;
    throw this.input.error("Unclosed block", e.line, e.column);
  }
  unclosedBracket(e) {
    throw this.input.error(
      "Unclosed bracket",
      { offset: e[2] },
      { offset: e[2] + 1 }
    );
  }
  unexpectedClose(e) {
    throw this.input.error(
      "Unexpected }",
      { offset: e[2] },
      { offset: e[2] + 1 }
    );
  }
  unknownWord(e) {
    throw this.input.error(
      "Unknown word",
      { offset: e[0][2] },
      { offset: e[0][2] + e[0][1].length }
    );
  }
  unnamedAtrule(e, t) {
    throw this.input.error(
      "At-rule without name",
      { offset: t[2] },
      { offset: t[2] + t[1].length }
    );
  }
};
var Iw = Cw;
let Aw = pt, Ew = Iw, Rw = ii;
function Wn(r, e) {
  let t = new Rw(r, e), n = new Ew(t);
  try {
    n.parse();
  } catch (i) {
    throw process.env.NODE_ENV !== "production" && i.name === "CssSyntaxError" && e && e.from && (/\.scss$/i.test(e.from) ? i.message += `
You tried to parse SCSS with the standard CSS parser; try again with the postcss-scss parser` : /\.sass/i.test(e.from) ? i.message += `
You tried to parse Sass with the standard CSS parser; try again with the postcss-sass parser` : /\.less$/i.test(e.from) && (i.message += `
You tried to parse Less with the standard CSS parser; try again with the postcss-less parser`)), i;
  }
  return n.root;
}
var Oo = Wn;
Wn.default = Wn;
Aw.registerParse(Wn);
let { isClean: Me, my: kw } = Nr, Ow = $c, Mw = ti, $w = pt, Pw = Ao, Nw = jc, wl = Eo, Lw = Oo, Tw = Lr;
const Dw = {
  atrule: "AtRule",
  comment: "Comment",
  decl: "Declaration",
  document: "Document",
  root: "Root",
  rule: "Rule"
}, Fw = {
  AtRule: !0,
  AtRuleExit: !0,
  Comment: !0,
  CommentExit: !0,
  Declaration: !0,
  DeclarationExit: !0,
  Document: !0,
  DocumentExit: !0,
  Once: !0,
  OnceExit: !0,
  postcssPlugin: !0,
  prepare: !0,
  Root: !0,
  RootExit: !0,
  Rule: !0,
  RuleExit: !0
}, zw = {
  Once: !0,
  postcssPlugin: !0,
  prepare: !0
}, Dt = 0;
function Jt(r) {
  return typeof r == "object" && typeof r.then == "function";
}
function qc(r) {
  let e = !1, t = Dw[r.type];
  return r.type === "decl" ? e = r.prop.toLowerCase() : r.type === "atrule" && (e = r.name.toLowerCase()), e && r.append ? [
    t,
    t + "-" + e,
    Dt,
    t + "Exit",
    t + "Exit-" + e
  ] : e ? [t, t + "-" + e, t + "Exit", t + "Exit-" + e] : r.append ? [t, Dt, t + "Exit"] : [t, t + "Exit"];
}
function vl(r) {
  let e;
  return r.type === "document" ? e = ["Document", Dt, "DocumentExit"] : r.type === "root" ? e = ["Root", Dt, "RootExit"] : e = qc(r), {
    eventIndex: 0,
    events: e,
    iterator: 0,
    node: r,
    visitorIndex: 0,
    visitors: []
  };
}
function Ds(r) {
  return r[Me] = !1, r.nodes && r.nodes.forEach((e) => Ds(e)), r;
}
let Fs = {}, Ft = class Qc {
  constructor(e, t, n) {
    this.stringified = !1, this.processed = !1;
    let i;
    if (typeof t == "object" && t !== null && (t.type === "root" || t.type === "document"))
      i = Ds(t);
    else if (t instanceof Qc || t instanceof wl)
      i = Ds(t.root), t.map && (typeof n.map > "u" && (n.map = {}), n.map.inline || (n.map.inline = !1), n.map.prev = t.map);
    else {
      let s = Lw;
      n.syntax && (s = n.syntax.parse), n.parser && (s = n.parser), s.parse && (s = s.parse);
      try {
        i = s(t, n);
      } catch (o) {
        this.processed = !0, this.error = o;
      }
      i && !i[kw] && $w.rebuild(i);
    }
    this.result = new wl(e, i, n), this.helpers = { ...Fs, postcss: Fs, result: this.result }, this.plugins = this.processor.plugins.map((s) => typeof s == "object" && s.prepare ? { ...s, ...s.prepare(this.result) } : s);
  }
  async() {
    return this.error ? Promise.reject(this.error) : this.processed ? Promise.resolve(this.result) : (this.processing || (this.processing = this.runAsync()), this.processing);
  }
  catch(e) {
    return this.async().catch(e);
  }
  finally(e) {
    return this.async().then(e, e);
  }
  getAsyncError() {
    throw new Error("Use process(css).then(cb) to work with async plugins");
  }
  handleError(e, t) {
    let n = this.result.lastPlugin;
    try {
      if (t && t.addToError(e), this.error = e, e.name === "CssSyntaxError" && !e.plugin)
        e.plugin = n.postcssPlugin, e.setMessage();
      else if (n.postcssVersion && process.env.NODE_ENV !== "production") {
        let i = n.postcssPlugin, s = n.postcssVersion, o = this.result.processor.version, a = s.split("."), l = o.split(".");
        (a[0] !== l[0] || parseInt(a[1]) > parseInt(l[1])) && console.error(
          "Unknown error from PostCSS plugin. Your current PostCSS version is " + o + ", but " + i + " uses " + s + ". Perhaps this is the source of the error below."
        );
      }
    } catch (i) {
      console && console.error && console.error(i);
    }
    return e;
  }
  prepareVisitors() {
    this.listeners = {};
    let e = (t, n, i) => {
      this.listeners[n] || (this.listeners[n] = []), this.listeners[n].push([t, i]);
    };
    for (let t of this.plugins)
      if (typeof t == "object")
        for (let n in t) {
          if (!Fw[n] && /^[A-Z]/.test(n))
            throw new Error(
              `Unknown event ${n} in ${t.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`
            );
          if (!zw[n])
            if (typeof t[n] == "object")
              for (let i in t[n])
                i === "*" ? e(t, n, t[n][i]) : e(
                  t,
                  n + "-" + i.toLowerCase(),
                  t[n][i]
                );
            else typeof t[n] == "function" && e(t, n, t[n]);
        }
    this.hasListener = Object.keys(this.listeners).length > 0;
  }
  async runAsync() {
    this.plugin = 0;
    for (let e = 0; e < this.plugins.length; e++) {
      let t = this.plugins[e], n = this.runOnRoot(t);
      if (Jt(n))
        try {
          await n;
        } catch (i) {
          throw this.handleError(i);
        }
    }
    if (this.prepareVisitors(), this.hasListener) {
      let e = this.result.root;
      for (; !e[Me]; ) {
        e[Me] = !0;
        let t = [vl(e)];
        for (; t.length > 0; ) {
          let n = this.visitTick(t);
          if (Jt(n))
            try {
              await n;
            } catch (i) {
              let s = t[t.length - 1].node;
              throw this.handleError(i, s);
            }
        }
      }
      if (this.listeners.OnceExit)
        for (let [t, n] of this.listeners.OnceExit) {
          this.result.lastPlugin = t;
          try {
            if (e.type === "document") {
              let i = e.nodes.map(
                (s) => n(s, this.helpers)
              );
              await Promise.all(i);
            } else
              await n(e, this.helpers);
          } catch (i) {
            throw this.handleError(i);
          }
        }
    }
    return this.processed = !0, this.stringify();
  }
  runOnRoot(e) {
    this.result.lastPlugin = e;
    try {
      if (typeof e == "object" && e.Once) {
        if (this.result.root.type === "document") {
          let t = this.result.root.nodes.map(
            (n) => e.Once(n, this.helpers)
          );
          return Jt(t[0]) ? Promise.all(t) : t;
        }
        return e.Once(this.result.root, this.helpers);
      } else if (typeof e == "function")
        return e(this.result.root, this.result);
    } catch (t) {
      throw this.handleError(t);
    }
  }
  stringify() {
    if (this.error) throw this.error;
    if (this.stringified) return this.result;
    this.stringified = !0, this.sync();
    let e = this.result.opts, t = Mw;
    e.syntax && (t = e.syntax.stringify), e.stringifier && (t = e.stringifier), t.stringify && (t = t.stringify);
    let i = new Ow(t, this.result.root, this.result.opts).generate();
    return this.result.css = i[0], this.result.map = i[1], this.result;
  }
  sync() {
    if (this.error) throw this.error;
    if (this.processed) return this.result;
    if (this.processed = !0, this.processing)
      throw this.getAsyncError();
    for (let e of this.plugins) {
      let t = this.runOnRoot(e);
      if (Jt(t))
        throw this.getAsyncError();
    }
    if (this.prepareVisitors(), this.hasListener) {
      let e = this.result.root;
      for (; !e[Me]; )
        e[Me] = !0, this.walkSync(e);
      if (this.listeners.OnceExit)
        if (e.type === "document")
          for (let t of e.nodes)
            this.visitSync(this.listeners.OnceExit, t);
        else
          this.visitSync(this.listeners.OnceExit, e);
    }
    return this.result;
  }
  then(e, t) {
    return process.env.NODE_ENV !== "production" && ("from" in this.opts || Nw(
      "Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning."
    )), this.async().then(e, t);
  }
  toString() {
    return this.css;
  }
  visitSync(e, t) {
    for (let [n, i] of e) {
      this.result.lastPlugin = n;
      let s;
      try {
        s = i(t, this.helpers);
      } catch (o) {
        throw this.handleError(o, t.proxyOf);
      }
      if (t.type !== "root" && t.type !== "document" && !t.parent)
        return !0;
      if (Jt(s))
        throw this.getAsyncError();
    }
  }
  visitTick(e) {
    let t = e[e.length - 1], { node: n, visitors: i } = t;
    if (n.type !== "root" && n.type !== "document" && !n.parent) {
      e.pop();
      return;
    }
    if (i.length > 0 && t.visitorIndex < i.length) {
      let [o, a] = i[t.visitorIndex];
      t.visitorIndex += 1, t.visitorIndex === i.length && (t.visitors = [], t.visitorIndex = 0), this.result.lastPlugin = o;
      try {
        return a(n.toProxy(), this.helpers);
      } catch (l) {
        throw this.handleError(l, n);
      }
    }
    if (t.iterator !== 0) {
      let o = t.iterator, a;
      for (; a = n.nodes[n.indexes[o]]; )
        if (n.indexes[o] += 1, !a[Me]) {
          a[Me] = !0, e.push(vl(a));
          return;
        }
      t.iterator = 0, delete n.indexes[o];
    }
    let s = t.events;
    for (; t.eventIndex < s.length; ) {
      let o = s[t.eventIndex];
      if (t.eventIndex += 1, o === Dt) {
        n.nodes && n.nodes.length && (n[Me] = !0, t.iterator = n.getIterator());
        return;
      } else if (this.listeners[o]) {
        t.visitors = this.listeners[o];
        return;
      }
    }
    e.pop();
  }
  walkSync(e) {
    e[Me] = !0;
    let t = qc(e);
    for (let n of t)
      if (n === Dt)
        e.nodes && e.each((i) => {
          i[Me] || this.walkSync(i);
        });
      else {
        let i = this.listeners[n];
        if (i && this.visitSync(i, e.toProxy()))
          return;
      }
  }
  warnings() {
    return this.sync().warnings();
  }
  get content() {
    return this.stringify().content;
  }
  get css() {
    return this.stringify().css;
  }
  get map() {
    return this.stringify().map;
  }
  get messages() {
    return this.sync().messages;
  }
  get opts() {
    return this.result.opts;
  }
  get processor() {
    return this.result.processor;
  }
  get root() {
    return this.sync().root;
  }
  get [Symbol.toStringTag]() {
    return "LazyResult";
  }
};
Ft.registerPostcss = (r) => {
  Fs = r;
};
var ef = Ft;
Ft.default = Ft;
Tw.registerLazyResult(Ft);
Pw.registerLazyResult(Ft);
let Uw = $c, Bw = ti, Ww = jc, Zw = Oo;
const jw = Eo;
let zs = class {
  constructor(e, t, n) {
    t = t.toString(), this.stringified = !1, this._processor = e, this._css = t, this._opts = n, this._map = void 0;
    let i, s = Bw;
    this.result = new jw(this._processor, i, this._opts), this.result.css = t;
    let o = this;
    Object.defineProperty(this.result, "root", {
      get() {
        return o.root;
      }
    });
    let a = new Uw(s, i, this._opts, t);
    if (a.isMap()) {
      let [l, u] = a.generate();
      l && (this.result.css = l), u && (this.result.map = u);
    } else
      a.clearAnnotation(), this.result.css = a.css;
  }
  async() {
    return this.error ? Promise.reject(this.error) : Promise.resolve(this.result);
  }
  catch(e) {
    return this.async().catch(e);
  }
  finally(e) {
    return this.async().then(e, e);
  }
  sync() {
    if (this.error) throw this.error;
    return this.result;
  }
  then(e, t) {
    return process.env.NODE_ENV !== "production" && ("from" in this._opts || Ww(
      "Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning."
    )), this.async().then(e, t);
  }
  toString() {
    return this._css;
  }
  warnings() {
    return [];
  }
  get content() {
    return this.result.css;
  }
  get css() {
    return this.result.css;
  }
  get map() {
    return this.result.map;
  }
  get messages() {
    return [];
  }
  get opts() {
    return this.result.opts;
  }
  get processor() {
    return this.result.processor;
  }
  get root() {
    if (this._root)
      return this._root;
    let e, t = Zw;
    try {
      e = t(this._css, this._opts);
    } catch (n) {
      this.error = n;
    }
    if (this.error)
      throw this.error;
    return this._root = e, e;
  }
  get [Symbol.toStringTag]() {
    return "NoWorkResult";
  }
};
var Gw = zs;
zs.default = zs;
let Vw = Gw, Hw = ef, Yw = Ao, Xw = Lr, vr = class {
  constructor(e = []) {
    this.version = "8.4.38", this.plugins = this.normalize(e);
  }
  normalize(e) {
    let t = [];
    for (let n of e)
      if (n.postcss === !0 ? n = n() : n.postcss && (n = n.postcss), typeof n == "object" && Array.isArray(n.plugins))
        t = t.concat(n.plugins);
      else if (typeof n == "object" && n.postcssPlugin)
        t.push(n);
      else if (typeof n == "function")
        t.push(n);
      else if (typeof n == "object" && (n.parse || n.stringify)) {
        if (process.env.NODE_ENV !== "production")
          throw new Error(
            "PostCSS syntaxes cannot be used as plugins. Instead, please use one of the syntax/parser/stringifier options as outlined in your PostCSS runner documentation."
          );
      } else
        throw new Error(n + " is not a PostCSS plugin");
    return t;
  }
  process(e, t = {}) {
    return !this.plugins.length && !t.parser && !t.stringifier && !t.syntax ? new Vw(this, e, t) : new Hw(this, e, t);
  }
  use(e) {
    return this.plugins = this.plugins.concat(this.normalize([e])), this;
  }
};
var Jw = vr;
vr.default = vr;
Xw.registerProcessor(vr);
Yw.registerProcessor(vr);
let Kw = ni, qw = Ec, Qw = si, ev = Ro, tv = ii, rv = Lr, nv = ko;
function br(r, e) {
  if (Array.isArray(r)) return r.map((i) => br(i));
  let { inputs: t, ...n } = r;
  if (t) {
    e = [];
    for (let i of t) {
      let s = { ...i, __proto__: tv.prototype };
      s.map && (s.map = {
        ...s.map,
        __proto__: qw.prototype
      }), e.push(s);
    }
  }
  if (n.nodes && (n.nodes = r.nodes.map((i) => br(i, e))), n.source) {
    let { inputId: i, ...s } = n.source;
    n.source = s, i != null && (n.source.input = e[i]);
  }
  if (n.type === "root")
    return new rv(n);
  if (n.type === "decl")
    return new Kw(n);
  if (n.type === "rule")
    return new nv(n);
  if (n.type === "comment")
    return new Qw(n);
  if (n.type === "atrule")
    return new ev(n);
  throw new Error("Unknown node type: " + r.type);
}
var iv = br;
br.default = br;
let sv = xo, tf = ni, ov = ef, av = pt, Mo = Jw, lv = ti, uv = iv, rf = Ao, cv = Gc, nf = si, sf = Ro, fv = Eo, hv = ii, dv = Oo, pv = Jc, of = ko, af = Lr, mv = ri;
function z(...r) {
  return r.length === 1 && Array.isArray(r[0]) && (r = r[0]), new Mo(r);
}
z.plugin = function(e, t) {
  let n = !1;
  function i(...o) {
    console && console.warn && !n && (n = !0, console.warn(
      e + `: postcss.plugin was deprecated. Migration guide:
https://evilmartians.com/chronicles/postcss-8-plugin-migration`
    ), process.env.LANG && process.env.LANG.startsWith("cn") && console.warn(
      e + `: 里面 postcss.plugin 被弃用. 迁移指南:
https://www.w3ctech.com/topic/2226`
    ));
    let a = t(...o);
    return a.postcssPlugin = e, a.postcssVersion = new Mo().version, a;
  }
  let s;
  return Object.defineProperty(i, "postcss", {
    get() {
      return s || (s = i()), s;
    }
  }), i.process = function(o, a, l) {
    return z([i(l)]).process(o, a);
  }, i;
};
z.stringify = lv;
z.parse = dv;
z.fromJSON = uv;
z.list = pv;
z.comment = (r) => new nf(r);
z.atRule = (r) => new sf(r);
z.decl = (r) => new tf(r);
z.rule = (r) => new of(r);
z.root = (r) => new af(r);
z.document = (r) => new rf(r);
z.CssSyntaxError = sv;
z.Declaration = tf;
z.Container = av;
z.Processor = Mo;
z.Document = rf;
z.Comment = nf;
z.Warning = cv;
z.AtRule = sf;
z.Result = fv;
z.Input = hv;
z.Rule = of;
z.Root = af;
z.Node = mv;
ov.registerPostcss(z);
var gv = z;
z.default = z;
const H = /* @__PURE__ */ A0(gv);
H.stringify;
H.fromJSON;
H.plugin;
H.parse;
H.list;
H.document;
H.comment;
H.atRule;
H.rule;
H.decl;
H.root;
H.CssSyntaxError;
H.Declaration;
H.Container;
H.Processor;
H.Document;
H.Comment;
H.Warning;
H.AtRule;
H.Result;
H.Input;
H.Rule;
H.Root;
H.Node;
var yv = Object.defineProperty, wv = (r, e, t) => e in r ? yv(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, ye = (r, e, t) => wv(r, typeof e != "symbol" ? e + "" : e, t);
function vv(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
function bv(r) {
  if (r.__esModule) return r;
  var e = r.default;
  if (typeof e == "function") {
    var t = function n() {
      return this instanceof n ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    t.prototype = e.prototype;
  } else t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(r).forEach(function(n) {
    var i = Object.getOwnPropertyDescriptor(r, n);
    Object.defineProperty(t, n, i.get ? i : {
      enumerable: !0,
      get: function() {
        return r[n];
      }
    });
  }), t;
}
var $o = { exports: {} }, j = String, lf = function() {
  return { isColorSupported: !1, reset: j, bold: j, dim: j, italic: j, underline: j, inverse: j, hidden: j, strikethrough: j, black: j, red: j, green: j, yellow: j, blue: j, magenta: j, cyan: j, white: j, gray: j, bgBlack: j, bgRed: j, bgGreen: j, bgYellow: j, bgBlue: j, bgMagenta: j, bgCyan: j, bgWhite: j };
};
$o.exports = lf();
$o.exports.createColors = lf;
var Sv = $o.exports;
const _v = {}, xv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _v
}, Symbol.toStringTag, { value: "Module" })), Ae = /* @__PURE__ */ bv(xv);
let bl = Sv, Sl = Ae, Us = class uf extends Error {
  constructor(e, t, n, i, s, o) {
    super(e), this.name = "CssSyntaxError", this.reason = e, s && (this.file = s), i && (this.source = i), o && (this.plugin = o), typeof t < "u" && typeof n < "u" && (typeof t == "number" ? (this.line = t, this.column = n) : (this.line = t.line, this.column = t.column, this.endLine = n.line, this.endColumn = n.column)), this.setMessage(), Error.captureStackTrace && Error.captureStackTrace(this, uf);
  }
  setMessage() {
    this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", typeof this.line < "u" && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason;
  }
  showSourceCode(e) {
    if (!this.source) return "";
    let t = this.source;
    e == null && (e = bl.isColorSupported), Sl && e && (t = Sl(t));
    let n = t.split(/\r?\n/), i = Math.max(this.line - 3, 0), s = Math.min(this.line + 2, n.length), o = String(s).length, a, l;
    if (e) {
      let { bold: u, gray: c, red: f } = bl.createColors(!0);
      a = (d) => u(f(d)), l = (d) => c(d);
    } else
      a = l = (u) => u;
    return n.slice(i, s).map((u, c) => {
      let f = i + 1 + c, d = " " + (" " + f).slice(-o) + " | ";
      if (f === this.line) {
        let h = l(d.replace(/\d/g, " ")) + u.slice(0, this.column - 1).replace(/[^\t]/g, " ");
        return a(">") + l(d) + u + `
 ` + h + a("^");
      }
      return " " + l(d) + u;
    }).join(`
`);
  }
  toString() {
    let e = this.showSourceCode();
    return e && (e = `

` + e + `
`), this.name + ": " + this.message + e;
  }
};
var Po = Us;
Us.default = Us;
var Tr = {};
Tr.isClean = Symbol("isClean");
Tr.my = Symbol("my");
const _l = {
  after: `
`,
  beforeClose: `
`,
  beforeComment: `
`,
  beforeDecl: `
`,
  beforeOpen: " ",
  beforeRule: `
`,
  colon: ": ",
  commentLeft: " ",
  commentRight: " ",
  emptyBody: "",
  indent: "    ",
  semicolon: !1
};
function Cv(r) {
  return r[0].toUpperCase() + r.slice(1);
}
let Bs = class {
  constructor(e) {
    this.builder = e;
  }
  atrule(e, t) {
    let n = "@" + e.name, i = e.params ? this.rawValue(e, "params") : "";
    if (typeof e.raws.afterName < "u" ? n += e.raws.afterName : i && (n += " "), e.nodes)
      this.block(e, n + i);
    else {
      let s = (e.raws.between || "") + (t ? ";" : "");
      this.builder(n + i + s, e);
    }
  }
  beforeAfter(e, t) {
    let n;
    e.type === "decl" ? n = this.raw(e, null, "beforeDecl") : e.type === "comment" ? n = this.raw(e, null, "beforeComment") : t === "before" ? n = this.raw(e, null, "beforeRule") : n = this.raw(e, null, "beforeClose");
    let i = e.parent, s = 0;
    for (; i && i.type !== "root"; )
      s += 1, i = i.parent;
    if (n.includes(`
`)) {
      let o = this.raw(e, null, "indent");
      if (o.length)
        for (let a = 0; a < s; a++) n += o;
    }
    return n;
  }
  block(e, t) {
    let n = this.raw(e, "between", "beforeOpen");
    this.builder(t + n + "{", e, "start");
    let i;
    e.nodes && e.nodes.length ? (this.body(e), i = this.raw(e, "after")) : i = this.raw(e, "after", "emptyBody"), i && this.builder(i), this.builder("}", e, "end");
  }
  body(e) {
    let t = e.nodes.length - 1;
    for (; t > 0 && e.nodes[t].type === "comment"; )
      t -= 1;
    let n = this.raw(e, "semicolon");
    for (let i = 0; i < e.nodes.length; i++) {
      let s = e.nodes[i], o = this.raw(s, "before");
      o && this.builder(o), this.stringify(s, t !== i || n);
    }
  }
  comment(e) {
    let t = this.raw(e, "left", "commentLeft"), n = this.raw(e, "right", "commentRight");
    this.builder("/*" + t + e.text + n + "*/", e);
  }
  decl(e, t) {
    let n = this.raw(e, "between", "colon"), i = e.prop + n + this.rawValue(e, "value");
    e.important && (i += e.raws.important || " !important"), t && (i += ";"), this.builder(i, e);
  }
  document(e) {
    this.body(e);
  }
  raw(e, t, n) {
    let i;
    if (n || (n = t), t && (i = e.raws[t], typeof i < "u"))
      return i;
    let s = e.parent;
    if (n === "before" && (!s || s.type === "root" && s.first === e || s && s.type === "document"))
      return "";
    if (!s) return _l[n];
    let o = e.root();
    if (o.rawCache || (o.rawCache = {}), typeof o.rawCache[n] < "u")
      return o.rawCache[n];
    if (n === "before" || n === "after")
      return this.beforeAfter(e, n);
    {
      let a = "raw" + Cv(n);
      this[a] ? i = this[a](o, e) : o.walk((l) => {
        if (i = l.raws[t], typeof i < "u") return !1;
      });
    }
    return typeof i > "u" && (i = _l[n]), o.rawCache[n] = i, i;
  }
  rawBeforeClose(e) {
    let t;
    return e.walk((n) => {
      if (n.nodes && n.nodes.length > 0 && typeof n.raws.after < "u")
        return t = n.raws.after, t.includes(`
`) && (t = t.replace(/[^\n]+$/, "")), !1;
    }), t && (t = t.replace(/\S/g, "")), t;
  }
  rawBeforeComment(e, t) {
    let n;
    return e.walkComments((i) => {
      if (typeof i.raws.before < "u")
        return n = i.raws.before, n.includes(`
`) && (n = n.replace(/[^\n]+$/, "")), !1;
    }), typeof n > "u" ? n = this.raw(t, null, "beforeDecl") : n && (n = n.replace(/\S/g, "")), n;
  }
  rawBeforeDecl(e, t) {
    let n;
    return e.walkDecls((i) => {
      if (typeof i.raws.before < "u")
        return n = i.raws.before, n.includes(`
`) && (n = n.replace(/[^\n]+$/, "")), !1;
    }), typeof n > "u" ? n = this.raw(t, null, "beforeRule") : n && (n = n.replace(/\S/g, "")), n;
  }
  rawBeforeOpen(e) {
    let t;
    return e.walk((n) => {
      if (n.type !== "decl" && (t = n.raws.between, typeof t < "u"))
        return !1;
    }), t;
  }
  rawBeforeRule(e) {
    let t;
    return e.walk((n) => {
      if (n.nodes && (n.parent !== e || e.first !== n) && typeof n.raws.before < "u")
        return t = n.raws.before, t.includes(`
`) && (t = t.replace(/[^\n]+$/, "")), !1;
    }), t && (t = t.replace(/\S/g, "")), t;
  }
  rawColon(e) {
    let t;
    return e.walkDecls((n) => {
      if (typeof n.raws.between < "u")
        return t = n.raws.between.replace(/[^\s:]/g, ""), !1;
    }), t;
  }
  rawEmptyBody(e) {
    let t;
    return e.walk((n) => {
      if (n.nodes && n.nodes.length === 0 && (t = n.raws.after, typeof t < "u"))
        return !1;
    }), t;
  }
  rawIndent(e) {
    if (e.raws.indent) return e.raws.indent;
    let t;
    return e.walk((n) => {
      let i = n.parent;
      if (i && i !== e && i.parent && i.parent === e && typeof n.raws.before < "u") {
        let s = n.raws.before.split(`
`);
        return t = s[s.length - 1], t = t.replace(/\S/g, ""), !1;
      }
    }), t;
  }
  rawSemicolon(e) {
    let t;
    return e.walk((n) => {
      if (n.nodes && n.nodes.length && n.last.type === "decl" && (t = n.raws.semicolon, typeof t < "u"))
        return !1;
    }), t;
  }
  rawValue(e, t) {
    let n = e[t], i = e.raws[t];
    return i && i.value === n ? i.raw : n;
  }
  root(e) {
    this.body(e), e.raws.after && this.builder(e.raws.after);
  }
  rule(e) {
    this.block(e, this.rawValue(e, "selector")), e.raws.ownSemicolon && this.builder(e.raws.ownSemicolon, e, "end");
  }
  stringify(e, t) {
    if (!this[e.type])
      throw new Error(
        "Unknown AST node type " + e.type + ". Maybe you need to change PostCSS stringifier."
      );
    this[e.type](e, t);
  }
};
var cf = Bs;
Bs.default = Bs;
let Iv = cf;
function Ws(r, e) {
  new Iv(e).stringify(r);
}
var oi = Ws;
Ws.default = Ws;
let { isClean: un, my: Av } = Tr, Ev = Po, Rv = cf, kv = oi;
function Zs(r, e) {
  let t = new r.constructor();
  for (let n in r) {
    if (!Object.prototype.hasOwnProperty.call(r, n) || n === "proxyCache") continue;
    let i = r[n], s = typeof i;
    n === "parent" && s === "object" ? e && (t[n] = e) : n === "source" ? t[n] = i : Array.isArray(i) ? t[n] = i.map((o) => Zs(o, t)) : (s === "object" && i !== null && (i = Zs(i)), t[n] = i);
  }
  return t;
}
let js = class {
  constructor(e = {}) {
    this.raws = {}, this[un] = !1, this[Av] = !0;
    for (let t in e)
      if (t === "nodes") {
        this.nodes = [];
        for (let n of e[t])
          typeof n.clone == "function" ? this.append(n.clone()) : this.append(n);
      } else
        this[t] = e[t];
  }
  addToError(e) {
    if (e.postcssNode = this, e.stack && this.source && /\n\s{4}at /.test(e.stack)) {
      let t = this.source;
      e.stack = e.stack.replace(
        /\n\s{4}at /,
        `$&${t.input.from}:${t.start.line}:${t.start.column}$&`
      );
    }
    return e;
  }
  after(e) {
    return this.parent.insertAfter(this, e), this;
  }
  assign(e = {}) {
    for (let t in e)
      this[t] = e[t];
    return this;
  }
  before(e) {
    return this.parent.insertBefore(this, e), this;
  }
  cleanRaws(e) {
    delete this.raws.before, delete this.raws.after, e || delete this.raws.between;
  }
  clone(e = {}) {
    let t = Zs(this);
    for (let n in e)
      t[n] = e[n];
    return t;
  }
  cloneAfter(e = {}) {
    let t = this.clone(e);
    return this.parent.insertAfter(this, t), t;
  }
  cloneBefore(e = {}) {
    let t = this.clone(e);
    return this.parent.insertBefore(this, t), t;
  }
  error(e, t = {}) {
    if (this.source) {
      let { end: n, start: i } = this.rangeBy(t);
      return this.source.input.error(
        e,
        { column: i.column, line: i.line },
        { column: n.column, line: n.line },
        t
      );
    }
    return new Ev(e);
  }
  getProxyProcessor() {
    return {
      get(e, t) {
        return t === "proxyOf" ? e : t === "root" ? () => e.root().toProxy() : e[t];
      },
      set(e, t, n) {
        return e[t] === n || (e[t] = n, (t === "prop" || t === "value" || t === "name" || t === "params" || t === "important" || /* c8 ignore next */
        t === "text") && e.markDirty()), !0;
      }
    };
  }
  markDirty() {
    if (this[un]) {
      this[un] = !1;
      let e = this;
      for (; e = e.parent; )
        e[un] = !1;
    }
  }
  next() {
    if (!this.parent) return;
    let e = this.parent.index(this);
    return this.parent.nodes[e + 1];
  }
  positionBy(e, t) {
    let n = this.source.start;
    if (e.index)
      n = this.positionInside(e.index, t);
    else if (e.word) {
      t = this.toString();
      let i = t.indexOf(e.word);
      i !== -1 && (n = this.positionInside(i, t));
    }
    return n;
  }
  positionInside(e, t) {
    let n = t || this.toString(), i = this.source.start.column, s = this.source.start.line;
    for (let o = 0; o < e; o++)
      n[o] === `
` ? (i = 1, s += 1) : i += 1;
    return { column: i, line: s };
  }
  prev() {
    if (!this.parent) return;
    let e = this.parent.index(this);
    return this.parent.nodes[e - 1];
  }
  rangeBy(e) {
    let t = {
      column: this.source.start.column,
      line: this.source.start.line
    }, n = this.source.end ? {
      column: this.source.end.column + 1,
      line: this.source.end.line
    } : {
      column: t.column + 1,
      line: t.line
    };
    if (e.word) {
      let i = this.toString(), s = i.indexOf(e.word);
      s !== -1 && (t = this.positionInside(s, i), n = this.positionInside(s + e.word.length, i));
    } else
      e.start ? t = {
        column: e.start.column,
        line: e.start.line
      } : e.index && (t = this.positionInside(e.index)), e.end ? n = {
        column: e.end.column,
        line: e.end.line
      } : typeof e.endIndex == "number" ? n = this.positionInside(e.endIndex) : e.index && (n = this.positionInside(e.index + 1));
    return (n.line < t.line || n.line === t.line && n.column <= t.column) && (n = { column: t.column + 1, line: t.line }), { end: n, start: t };
  }
  raw(e, t) {
    return new Rv().raw(this, e, t);
  }
  remove() {
    return this.parent && this.parent.removeChild(this), this.parent = void 0, this;
  }
  replaceWith(...e) {
    if (this.parent) {
      let t = this, n = !1;
      for (let i of e)
        i === this ? n = !0 : n ? (this.parent.insertAfter(t, i), t = i) : this.parent.insertBefore(t, i);
      n || this.remove();
    }
    return this;
  }
  root() {
    let e = this;
    for (; e.parent && e.parent.type !== "document"; )
      e = e.parent;
    return e;
  }
  toJSON(e, t) {
    let n = {}, i = t == null;
    t = t || /* @__PURE__ */ new Map();
    let s = 0;
    for (let o in this) {
      if (!Object.prototype.hasOwnProperty.call(this, o) || o === "parent" || o === "proxyCache") continue;
      let a = this[o];
      if (Array.isArray(a))
        n[o] = a.map((l) => typeof l == "object" && l.toJSON ? l.toJSON(null, t) : l);
      else if (typeof a == "object" && a.toJSON)
        n[o] = a.toJSON(null, t);
      else if (o === "source") {
        let l = t.get(a.input);
        l == null && (l = s, t.set(a.input, s), s++), n[o] = {
          end: a.end,
          inputId: l,
          start: a.start
        };
      } else
        n[o] = a;
    }
    return i && (n.inputs = [...t.keys()].map((o) => o.toJSON())), n;
  }
  toProxy() {
    return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache;
  }
  toString(e = kv) {
    e.stringify && (e = e.stringify);
    let t = "";
    return e(this, (n) => {
      t += n;
    }), t;
  }
  warn(e, t, n) {
    let i = { node: this };
    for (let s in n) i[s] = n[s];
    return e.warn(t, i);
  }
  get proxyOf() {
    return this;
  }
};
var ai = js;
js.default = js;
let Ov = ai, Gs = class extends Ov {
  constructor(e) {
    e && typeof e.value < "u" && typeof e.value != "string" && (e = { ...e, value: String(e.value) }), super(e), this.type = "decl";
  }
  get variable() {
    return this.prop.startsWith("--") || this.prop[0] === "$";
  }
};
var li = Gs;
Gs.default = Gs;
let Mv = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", $v = (r, e = 21) => (t = e) => {
  let n = "", i = t;
  for (; i--; )
    n += r[Math.random() * r.length | 0];
  return n;
}, Pv = (r = 21) => {
  let e = "", t = r;
  for (; t--; )
    e += Mv[Math.random() * 64 | 0];
  return e;
};
var Nv = { nanoid: Pv, customAlphabet: $v };
let { SourceMapConsumer: xl, SourceMapGenerator: Cl } = Ae, { existsSync: Lv, readFileSync: Tv } = Ae, { dirname: ji, join: Dv } = Ae;
function Fv(r) {
  return Buffer ? Buffer.from(r, "base64").toString() : window.atob(r);
}
let Vs = class {
  constructor(e, t) {
    if (t.map === !1) return;
    this.loadAnnotation(e), this.inline = this.startWith(this.annotation, "data:");
    let n = t.map ? t.map.prev : void 0, i = this.loadMap(t.from, n);
    !this.mapFile && t.from && (this.mapFile = t.from), this.mapFile && (this.root = ji(this.mapFile)), i && (this.text = i);
  }
  consumer() {
    return this.consumerCache || (this.consumerCache = new xl(this.text)), this.consumerCache;
  }
  decodeInline(e) {
    let t = /^data:application\/json;charset=utf-?8;base64,/, n = /^data:application\/json;base64,/, i = /^data:application\/json;charset=utf-?8,/, s = /^data:application\/json,/;
    if (i.test(e) || s.test(e))
      return decodeURIComponent(e.substr(RegExp.lastMatch.length));
    if (t.test(e) || n.test(e))
      return Fv(e.substr(RegExp.lastMatch.length));
    let o = e.match(/data:application\/json;([^,]+),/)[1];
    throw new Error("Unsupported source map encoding " + o);
  }
  getAnnotationURL(e) {
    return e.replace(/^\/\*\s*# sourceMappingURL=/, "").trim();
  }
  isMap(e) {
    return typeof e != "object" ? !1 : typeof e.mappings == "string" || typeof e._mappings == "string" || Array.isArray(e.sections);
  }
  loadAnnotation(e) {
    let t = e.match(/\/\*\s*# sourceMappingURL=/gm);
    if (!t) return;
    let n = e.lastIndexOf(t.pop()), i = e.indexOf("*/", n);
    n > -1 && i > -1 && (this.annotation = this.getAnnotationURL(e.substring(n, i)));
  }
  loadFile(e) {
    if (this.root = ji(e), Lv(e))
      return this.mapFile = e, Tv(e, "utf-8").toString().trim();
  }
  loadMap(e, t) {
    if (t === !1) return !1;
    if (t) {
      if (typeof t == "string")
        return t;
      if (typeof t == "function") {
        let n = t(e);
        if (n) {
          let i = this.loadFile(n);
          if (!i)
            throw new Error(
              "Unable to load previous source map: " + n.toString()
            );
          return i;
        }
      } else {
        if (t instanceof xl)
          return Cl.fromSourceMap(t).toString();
        if (t instanceof Cl)
          return t.toString();
        if (this.isMap(t))
          return JSON.stringify(t);
        throw new Error(
          "Unsupported previous source map format: " + t.toString()
        );
      }
    } else {
      if (this.inline)
        return this.decodeInline(this.annotation);
      if (this.annotation) {
        let n = this.annotation;
        return e && (n = Dv(ji(e), n)), this.loadFile(n);
      }
    }
  }
  startWith(e, t) {
    return e ? e.substr(0, t.length) === t : !1;
  }
  withContent() {
    return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0);
  }
};
var ff = Vs;
Vs.default = Vs;
let { SourceMapConsumer: zv, SourceMapGenerator: Uv } = Ae, { fileURLToPath: Il, pathToFileURL: cn } = Ae, { isAbsolute: Hs, resolve: Ys } = Ae, { nanoid: Bv } = Nv, Gi = Ae, Al = Po, Wv = ff, Vi = Symbol("fromOffsetCache"), Zv = !!(zv && Uv), El = !!(Ys && Hs), Zn = class {
  constructor(e, t = {}) {
    if (e === null || typeof e > "u" || typeof e == "object" && !e.toString)
      throw new Error(`PostCSS received ${e} instead of CSS string`);
    if (this.css = e.toString(), this.css[0] === "\uFEFF" || this.css[0] === "￾" ? (this.hasBOM = !0, this.css = this.css.slice(1)) : this.hasBOM = !1, t.from && (!El || /^\w+:\/\//.test(t.from) || Hs(t.from) ? this.file = t.from : this.file = Ys(t.from)), El && Zv) {
      let n = new Wv(this.css, t);
      if (n.text) {
        this.map = n;
        let i = n.consumer().file;
        !this.file && i && (this.file = this.mapResolve(i));
      }
    }
    this.file || (this.id = "<input css " + Bv(6) + ">"), this.map && (this.map.file = this.from);
  }
  error(e, t, n, i = {}) {
    let s, o, a;
    if (t && typeof t == "object") {
      let u = t, c = n;
      if (typeof u.offset == "number") {
        let f = this.fromOffset(u.offset);
        t = f.line, n = f.col;
      } else
        t = u.line, n = u.column;
      if (typeof c.offset == "number") {
        let f = this.fromOffset(c.offset);
        o = f.line, a = f.col;
      } else
        o = c.line, a = c.column;
    } else if (!n) {
      let u = this.fromOffset(t);
      t = u.line, n = u.col;
    }
    let l = this.origin(t, n, o, a);
    return l ? s = new Al(
      e,
      l.endLine === void 0 ? l.line : { column: l.column, line: l.line },
      l.endLine === void 0 ? l.column : { column: l.endColumn, line: l.endLine },
      l.source,
      l.file,
      i.plugin
    ) : s = new Al(
      e,
      o === void 0 ? t : { column: n, line: t },
      o === void 0 ? n : { column: a, line: o },
      this.css,
      this.file,
      i.plugin
    ), s.input = { column: n, endColumn: a, endLine: o, line: t, source: this.css }, this.file && (cn && (s.input.url = cn(this.file).toString()), s.input.file = this.file), s;
  }
  fromOffset(e) {
    let t, n;
    if (this[Vi])
      n = this[Vi];
    else {
      let s = this.css.split(`
`);
      n = new Array(s.length);
      let o = 0;
      for (let a = 0, l = s.length; a < l; a++)
        n[a] = o, o += s[a].length + 1;
      this[Vi] = n;
    }
    t = n[n.length - 1];
    let i = 0;
    if (e >= t)
      i = n.length - 1;
    else {
      let s = n.length - 2, o;
      for (; i < s; )
        if (o = i + (s - i >> 1), e < n[o])
          s = o - 1;
        else if (e >= n[o + 1])
          i = o + 1;
        else {
          i = o;
          break;
        }
    }
    return {
      col: e - n[i] + 1,
      line: i + 1
    };
  }
  mapResolve(e) {
    return /^\w+:\/\//.test(e) ? e : Ys(this.map.consumer().sourceRoot || this.map.root || ".", e);
  }
  origin(e, t, n, i) {
    if (!this.map) return !1;
    let s = this.map.consumer(), o = s.originalPositionFor({ column: t, line: e });
    if (!o.source) return !1;
    let a;
    typeof n == "number" && (a = s.originalPositionFor({ column: i, line: n }));
    let l;
    Hs(o.source) ? l = cn(o.source) : l = new URL(
      o.source,
      this.map.consumer().sourceRoot || cn(this.map.mapFile)
    );
    let u = {
      column: o.column,
      endColumn: a && a.column,
      endLine: a && a.line,
      line: o.line,
      url: l.toString()
    };
    if (l.protocol === "file:")
      if (Il)
        u.file = Il(l);
      else
        throw new Error("file: protocol is not available in this PostCSS build");
    let c = s.sourceContentFor(o.source);
    return c && (u.source = c), u;
  }
  toJSON() {
    let e = {};
    for (let t of ["hasBOM", "css", "file", "id"])
      this[t] != null && (e[t] = this[t]);
    return this.map && (e.map = { ...this.map }, e.map.consumerCache && (e.map.consumerCache = void 0)), e;
  }
  get from() {
    return this.file || this.id;
  }
};
var ui = Zn;
Zn.default = Zn;
Gi && Gi.registerInput && Gi.registerInput(Zn);
let { SourceMapConsumer: hf, SourceMapGenerator: En } = Ae, { dirname: Rn, relative: df, resolve: pf, sep: mf } = Ae, { pathToFileURL: Rl } = Ae, jv = ui, Gv = !!(hf && En), Vv = !!(Rn && pf && df && mf), Hv = class {
  constructor(e, t, n, i) {
    this.stringify = e, this.mapOpts = n.map || {}, this.root = t, this.opts = n, this.css = i, this.originalCSS = i, this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute, this.memoizedFileURLs = /* @__PURE__ */ new Map(), this.memoizedPaths = /* @__PURE__ */ new Map(), this.memoizedURLs = /* @__PURE__ */ new Map();
  }
  addAnnotation() {
    let e;
    this.isInline() ? e = "data:application/json;base64," + this.toBase64(this.map.toString()) : typeof this.mapOpts.annotation == "string" ? e = this.mapOpts.annotation : typeof this.mapOpts.annotation == "function" ? e = this.mapOpts.annotation(this.opts.to, this.root) : e = this.outputFile() + ".map";
    let t = `
`;
    this.css.includes(`\r
`) && (t = `\r
`), this.css += t + "/*# sourceMappingURL=" + e + " */";
  }
  applyPrevMaps() {
    for (let e of this.previous()) {
      let t = this.toUrl(this.path(e.file)), n = e.root || Rn(e.file), i;
      this.mapOpts.sourcesContent === !1 ? (i = new hf(e.text), i.sourcesContent && (i.sourcesContent = null)) : i = e.consumer(), this.map.applySourceMap(i, t, this.toUrl(this.path(n)));
    }
  }
  clearAnnotation() {
    if (this.mapOpts.annotation !== !1)
      if (this.root) {
        let e;
        for (let t = this.root.nodes.length - 1; t >= 0; t--)
          e = this.root.nodes[t], e.type === "comment" && e.text.indexOf("# sourceMappingURL=") === 0 && this.root.removeChild(t);
      } else this.css && (this.css = this.css.replace(/\n*?\/\*#[\S\s]*?\*\/$/gm, ""));
  }
  generate() {
    if (this.clearAnnotation(), Vv && Gv && this.isMap())
      return this.generateMap();
    {
      let e = "";
      return this.stringify(this.root, (t) => {
        e += t;
      }), [e];
    }
  }
  generateMap() {
    if (this.root)
      this.generateString();
    else if (this.previous().length === 1) {
      let e = this.previous()[0].consumer();
      e.file = this.outputFile(), this.map = En.fromSourceMap(e, {
        ignoreInvalidMapping: !0
      });
    } else
      this.map = new En({
        file: this.outputFile(),
        ignoreInvalidMapping: !0
      }), this.map.addMapping({
        generated: { column: 0, line: 1 },
        original: { column: 0, line: 1 },
        source: this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>"
      });
    return this.isSourcesContent() && this.setSourcesContent(), this.root && this.previous().length > 0 && this.applyPrevMaps(), this.isAnnotation() && this.addAnnotation(), this.isInline() ? [this.css] : [this.css, this.map];
  }
  generateString() {
    this.css = "", this.map = new En({
      file: this.outputFile(),
      ignoreInvalidMapping: !0
    });
    let e = 1, t = 1, n = "<no source>", i = {
      generated: { column: 0, line: 0 },
      original: { column: 0, line: 0 },
      source: ""
    }, s, o;
    this.stringify(this.root, (a, l, u) => {
      if (this.css += a, l && u !== "end" && (i.generated.line = e, i.generated.column = t - 1, l.source && l.source.start ? (i.source = this.sourcePath(l), i.original.line = l.source.start.line, i.original.column = l.source.start.column - 1, this.map.addMapping(i)) : (i.source = n, i.original.line = 1, i.original.column = 0, this.map.addMapping(i))), s = a.match(/\n/g), s ? (e += s.length, o = a.lastIndexOf(`
`), t = a.length - o) : t += a.length, l && u !== "start") {
        let c = l.parent || { raws: {} };
        (!(l.type === "decl" || l.type === "atrule" && !l.nodes) || l !== c.last || c.raws.semicolon) && (l.source && l.source.end ? (i.source = this.sourcePath(l), i.original.line = l.source.end.line, i.original.column = l.source.end.column - 1, i.generated.line = e, i.generated.column = t - 2, this.map.addMapping(i)) : (i.source = n, i.original.line = 1, i.original.column = 0, i.generated.line = e, i.generated.column = t - 1, this.map.addMapping(i)));
      }
    });
  }
  isAnnotation() {
    return this.isInline() ? !0 : typeof this.mapOpts.annotation < "u" ? this.mapOpts.annotation : this.previous().length ? this.previous().some((e) => e.annotation) : !0;
  }
  isInline() {
    if (typeof this.mapOpts.inline < "u")
      return this.mapOpts.inline;
    let e = this.mapOpts.annotation;
    return typeof e < "u" && e !== !0 ? !1 : this.previous().length ? this.previous().some((t) => t.inline) : !0;
  }
  isMap() {
    return typeof this.opts.map < "u" ? !!this.opts.map : this.previous().length > 0;
  }
  isSourcesContent() {
    return typeof this.mapOpts.sourcesContent < "u" ? this.mapOpts.sourcesContent : this.previous().length ? this.previous().some((e) => e.withContent()) : !0;
  }
  outputFile() {
    return this.opts.to ? this.path(this.opts.to) : this.opts.from ? this.path(this.opts.from) : "to.css";
  }
  path(e) {
    if (this.mapOpts.absolute || e.charCodeAt(0) === 60 || /^\w+:\/\//.test(e)) return e;
    let t = this.memoizedPaths.get(e);
    if (t) return t;
    let n = this.opts.to ? Rn(this.opts.to) : ".";
    typeof this.mapOpts.annotation == "string" && (n = Rn(pf(n, this.mapOpts.annotation)));
    let i = df(n, e);
    return this.memoizedPaths.set(e, i), i;
  }
  previous() {
    if (!this.previousMaps)
      if (this.previousMaps = [], this.root)
        this.root.walk((e) => {
          if (e.source && e.source.input.map) {
            let t = e.source.input.map;
            this.previousMaps.includes(t) || this.previousMaps.push(t);
          }
        });
      else {
        let e = new jv(this.originalCSS, this.opts);
        e.map && this.previousMaps.push(e.map);
      }
    return this.previousMaps;
  }
  setSourcesContent() {
    let e = {};
    if (this.root)
      this.root.walk((t) => {
        if (t.source) {
          let n = t.source.input.from;
          if (n && !e[n]) {
            e[n] = !0;
            let i = this.usesFileUrls ? this.toFileUrl(n) : this.toUrl(this.path(n));
            this.map.setSourceContent(i, t.source.input.css);
          }
        }
      });
    else if (this.css) {
      let t = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
      this.map.setSourceContent(t, this.css);
    }
  }
  sourcePath(e) {
    return this.mapOpts.from ? this.toUrl(this.mapOpts.from) : this.usesFileUrls ? this.toFileUrl(e.source.input.from) : this.toUrl(this.path(e.source.input.from));
  }
  toBase64(e) {
    return Buffer ? Buffer.from(e).toString("base64") : window.btoa(unescape(encodeURIComponent(e)));
  }
  toFileUrl(e) {
    let t = this.memoizedFileURLs.get(e);
    if (t) return t;
    if (Rl) {
      let n = Rl(e).toString();
      return this.memoizedFileURLs.set(e, n), n;
    } else
      throw new Error(
        "`map.absolute` option is not available in this PostCSS build"
      );
  }
  toUrl(e) {
    let t = this.memoizedURLs.get(e);
    if (t) return t;
    mf === "\\" && (e = e.replace(/\\/g, "/"));
    let n = encodeURI(e).replace(/[#?]/g, encodeURIComponent);
    return this.memoizedURLs.set(e, n), n;
  }
};
var gf = Hv;
let Yv = ai, Xs = class extends Yv {
  constructor(e) {
    super(e), this.type = "comment";
  }
};
var ci = Xs;
Xs.default = Xs;
let { isClean: yf, my: wf } = Tr, vf = li, bf = ci, Xv = ai, Sf, No, Lo, _f;
function xf(r) {
  return r.map((e) => (e.nodes && (e.nodes = xf(e.nodes)), delete e.source, e));
}
function Cf(r) {
  if (r[yf] = !1, r.proxyOf.nodes)
    for (let e of r.proxyOf.nodes)
      Cf(e);
}
let je = class If extends Xv {
  append(...e) {
    for (let t of e) {
      let n = this.normalize(t, this.last);
      for (let i of n) this.proxyOf.nodes.push(i);
    }
    return this.markDirty(), this;
  }
  cleanRaws(e) {
    if (super.cleanRaws(e), this.nodes)
      for (let t of this.nodes) t.cleanRaws(e);
  }
  each(e) {
    if (!this.proxyOf.nodes) return;
    let t = this.getIterator(), n, i;
    for (; this.indexes[t] < this.proxyOf.nodes.length && (n = this.indexes[t], i = e(this.proxyOf.nodes[n], n), i !== !1); )
      this.indexes[t] += 1;
    return delete this.indexes[t], i;
  }
  every(e) {
    return this.nodes.every(e);
  }
  getIterator() {
    this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach += 1;
    let e = this.lastEach;
    return this.indexes[e] = 0, e;
  }
  getProxyProcessor() {
    return {
      get(e, t) {
        return t === "proxyOf" ? e : e[t] ? t === "each" || typeof t == "string" && t.startsWith("walk") ? (...n) => e[t](
          ...n.map((i) => typeof i == "function" ? (s, o) => i(s.toProxy(), o) : i)
        ) : t === "every" || t === "some" ? (n) => e[t](
          (i, ...s) => n(i.toProxy(), ...s)
        ) : t === "root" ? () => e.root().toProxy() : t === "nodes" ? e.nodes.map((n) => n.toProxy()) : t === "first" || t === "last" ? e[t].toProxy() : e[t] : e[t];
      },
      set(e, t, n) {
        return e[t] === n || (e[t] = n, (t === "name" || t === "params" || t === "selector") && e.markDirty()), !0;
      }
    };
  }
  index(e) {
    return typeof e == "number" ? e : (e.proxyOf && (e = e.proxyOf), this.proxyOf.nodes.indexOf(e));
  }
  insertAfter(e, t) {
    let n = this.index(e), i = this.normalize(t, this.proxyOf.nodes[n]).reverse();
    n = this.index(e);
    for (let o of i) this.proxyOf.nodes.splice(n + 1, 0, o);
    let s;
    for (let o in this.indexes)
      s = this.indexes[o], n < s && (this.indexes[o] = s + i.length);
    return this.markDirty(), this;
  }
  insertBefore(e, t) {
    let n = this.index(e), i = n === 0 ? "prepend" : !1, s = this.normalize(t, this.proxyOf.nodes[n], i).reverse();
    n = this.index(e);
    for (let a of s) this.proxyOf.nodes.splice(n, 0, a);
    let o;
    for (let a in this.indexes)
      o = this.indexes[a], n <= o && (this.indexes[a] = o + s.length);
    return this.markDirty(), this;
  }
  normalize(e, t) {
    if (typeof e == "string")
      e = xf(Sf(e).nodes);
    else if (typeof e > "u")
      e = [];
    else if (Array.isArray(e)) {
      e = e.slice(0);
      for (let i of e)
        i.parent && i.parent.removeChild(i, "ignore");
    } else if (e.type === "root" && this.type !== "document") {
      e = e.nodes.slice(0);
      for (let i of e)
        i.parent && i.parent.removeChild(i, "ignore");
    } else if (e.type)
      e = [e];
    else if (e.prop) {
      if (typeof e.value > "u")
        throw new Error("Value field is missed in node creation");
      typeof e.value != "string" && (e.value = String(e.value)), e = [new vf(e)];
    } else if (e.selector)
      e = [new No(e)];
    else if (e.name)
      e = [new Lo(e)];
    else if (e.text)
      e = [new bf(e)];
    else
      throw new Error("Unknown node type in node creation");
    return e.map((i) => (i[wf] || If.rebuild(i), i = i.proxyOf, i.parent && i.parent.removeChild(i), i[yf] && Cf(i), typeof i.raws.before > "u" && t && typeof t.raws.before < "u" && (i.raws.before = t.raws.before.replace(/\S/g, "")), i.parent = this.proxyOf, i));
  }
  prepend(...e) {
    e = e.reverse();
    for (let t of e) {
      let n = this.normalize(t, this.first, "prepend").reverse();
      for (let i of n) this.proxyOf.nodes.unshift(i);
      for (let i in this.indexes)
        this.indexes[i] = this.indexes[i] + n.length;
    }
    return this.markDirty(), this;
  }
  push(e) {
    return e.parent = this, this.proxyOf.nodes.push(e), this;
  }
  removeAll() {
    for (let e of this.proxyOf.nodes) e.parent = void 0;
    return this.proxyOf.nodes = [], this.markDirty(), this;
  }
  removeChild(e) {
    e = this.index(e), this.proxyOf.nodes[e].parent = void 0, this.proxyOf.nodes.splice(e, 1);
    let t;
    for (let n in this.indexes)
      t = this.indexes[n], t >= e && (this.indexes[n] = t - 1);
    return this.markDirty(), this;
  }
  replaceValues(e, t, n) {
    return n || (n = t, t = {}), this.walkDecls((i) => {
      t.props && !t.props.includes(i.prop) || t.fast && !i.value.includes(t.fast) || (i.value = i.value.replace(e, n));
    }), this.markDirty(), this;
  }
  some(e) {
    return this.nodes.some(e);
  }
  walk(e) {
    return this.each((t, n) => {
      let i;
      try {
        i = e(t, n);
      } catch (s) {
        throw t.addToError(s);
      }
      return i !== !1 && t.walk && (i = t.walk(e)), i;
    });
  }
  walkAtRules(e, t) {
    return t ? e instanceof RegExp ? this.walk((n, i) => {
      if (n.type === "atrule" && e.test(n.name))
        return t(n, i);
    }) : this.walk((n, i) => {
      if (n.type === "atrule" && n.name === e)
        return t(n, i);
    }) : (t = e, this.walk((n, i) => {
      if (n.type === "atrule")
        return t(n, i);
    }));
  }
  walkComments(e) {
    return this.walk((t, n) => {
      if (t.type === "comment")
        return e(t, n);
    });
  }
  walkDecls(e, t) {
    return t ? e instanceof RegExp ? this.walk((n, i) => {
      if (n.type === "decl" && e.test(n.prop))
        return t(n, i);
    }) : this.walk((n, i) => {
      if (n.type === "decl" && n.prop === e)
        return t(n, i);
    }) : (t = e, this.walk((n, i) => {
      if (n.type === "decl")
        return t(n, i);
    }));
  }
  walkRules(e, t) {
    return t ? e instanceof RegExp ? this.walk((n, i) => {
      if (n.type === "rule" && e.test(n.selector))
        return t(n, i);
    }) : this.walk((n, i) => {
      if (n.type === "rule" && n.selector === e)
        return t(n, i);
    }) : (t = e, this.walk((n, i) => {
      if (n.type === "rule")
        return t(n, i);
    }));
  }
  get first() {
    if (this.proxyOf.nodes)
      return this.proxyOf.nodes[0];
  }
  get last() {
    if (this.proxyOf.nodes)
      return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
  }
};
je.registerParse = (r) => {
  Sf = r;
};
je.registerRule = (r) => {
  No = r;
};
je.registerAtRule = (r) => {
  Lo = r;
};
je.registerRoot = (r) => {
  _f = r;
};
var mt = je;
je.default = je;
je.rebuild = (r) => {
  r.type === "atrule" ? Object.setPrototypeOf(r, Lo.prototype) : r.type === "rule" ? Object.setPrototypeOf(r, No.prototype) : r.type === "decl" ? Object.setPrototypeOf(r, vf.prototype) : r.type === "comment" ? Object.setPrototypeOf(r, bf.prototype) : r.type === "root" && Object.setPrototypeOf(r, _f.prototype), r[wf] = !0, r.nodes && r.nodes.forEach((e) => {
    je.rebuild(e);
  });
};
let Jv = mt, Af, Ef, Sr = class extends Jv {
  constructor(e) {
    super({ type: "document", ...e }), this.nodes || (this.nodes = []);
  }
  toResult(e = {}) {
    return new Af(new Ef(), this, e).stringify();
  }
};
Sr.registerLazyResult = (r) => {
  Af = r;
};
Sr.registerProcessor = (r) => {
  Ef = r;
};
var To = Sr;
Sr.default = Sr;
let kl = {};
var Rf = function(e) {
  kl[e] || (kl[e] = !0, typeof console < "u" && console.warn && console.warn(e));
};
let Js = class {
  constructor(e, t = {}) {
    if (this.type = "warning", this.text = e, t.node && t.node.source) {
      let n = t.node.rangeBy(t);
      this.line = n.start.line, this.column = n.start.column, this.endLine = n.end.line, this.endColumn = n.end.column;
    }
    for (let n in t) this[n] = t[n];
  }
  toString() {
    return this.node ? this.node.error(this.text, {
      index: this.index,
      plugin: this.plugin,
      word: this.word
    }).message : this.plugin ? this.plugin + ": " + this.text : this.text;
  }
};
var kf = Js;
Js.default = Js;
let Kv = kf, Ks = class {
  constructor(e, t, n) {
    this.processor = e, this.messages = [], this.root = t, this.opts = n, this.css = void 0, this.map = void 0;
  }
  toString() {
    return this.css;
  }
  warn(e, t = {}) {
    t.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (t.plugin = this.lastPlugin.postcssPlugin);
    let n = new Kv(e, t);
    return this.messages.push(n), n;
  }
  warnings() {
    return this.messages.filter((e) => e.type === "warning");
  }
  get content() {
    return this.css;
  }
};
var Do = Ks;
Ks.default = Ks;
const Hi = 39, Ol = 34, fn = 92, Ml = 47, hn = 10, Kt = 32, dn = 12, pn = 9, mn = 13, qv = 91, Qv = 93, eb = 40, tb = 41, rb = 123, nb = 125, ib = 59, sb = 42, ob = 58, ab = 64, gn = /[\t\n\f\r "#'()/;[\\\]{}]/g, yn = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g, lb = /.[\r\n"'(/\\]/, $l = /[\da-f]/i;
var ub = function(e, t = {}) {
  let n = e.css.valueOf(), i = t.ignoreErrors, s, o, a, l, u, c, f, d, h, p, m = n.length, g = 0, v = [], b = [];
  function y() {
    return g;
  }
  function w(S) {
    throw e.error("Unclosed " + S, g);
  }
  function _() {
    return b.length === 0 && g >= m;
  }
  function E(S) {
    if (b.length) return b.pop();
    if (g >= m) return;
    let A = S ? S.ignoreUnclosed : !1;
    switch (s = n.charCodeAt(g), s) {
      case hn:
      case Kt:
      case pn:
      case mn:
      case dn: {
        o = g;
        do
          o += 1, s = n.charCodeAt(o);
        while (s === Kt || s === hn || s === pn || s === mn || s === dn);
        p = ["space", n.slice(g, o)], g = o - 1;
        break;
      }
      case qv:
      case Qv:
      case rb:
      case nb:
      case ob:
      case ib:
      case tb: {
        let I = String.fromCharCode(s);
        p = [I, I, g];
        break;
      }
      case eb: {
        if (d = v.length ? v.pop()[1] : "", h = n.charCodeAt(g + 1), d === "url" && h !== Hi && h !== Ol && h !== Kt && h !== hn && h !== pn && h !== dn && h !== mn) {
          o = g;
          do {
            if (c = !1, o = n.indexOf(")", o + 1), o === -1)
              if (i || A) {
                o = g;
                break;
              } else
                w("bracket");
            for (f = o; n.charCodeAt(f - 1) === fn; )
              f -= 1, c = !c;
          } while (c);
          p = ["brackets", n.slice(g, o + 1), g, o], g = o;
        } else
          o = n.indexOf(")", g + 1), l = n.slice(g, o + 1), o === -1 || lb.test(l) ? p = ["(", "(", g] : (p = ["brackets", l, g, o], g = o);
        break;
      }
      case Hi:
      case Ol: {
        a = s === Hi ? "'" : '"', o = g;
        do {
          if (c = !1, o = n.indexOf(a, o + 1), o === -1)
            if (i || A) {
              o = g + 1;
              break;
            } else
              w("string");
          for (f = o; n.charCodeAt(f - 1) === fn; )
            f -= 1, c = !c;
        } while (c);
        p = ["string", n.slice(g, o + 1), g, o], g = o;
        break;
      }
      case ab: {
        gn.lastIndex = g + 1, gn.test(n), gn.lastIndex === 0 ? o = n.length - 1 : o = gn.lastIndex - 2, p = ["at-word", n.slice(g, o + 1), g, o], g = o;
        break;
      }
      case fn: {
        for (o = g, u = !0; n.charCodeAt(o + 1) === fn; )
          o += 1, u = !u;
        if (s = n.charCodeAt(o + 1), u && s !== Ml && s !== Kt && s !== hn && s !== pn && s !== mn && s !== dn && (o += 1, $l.test(n.charAt(o)))) {
          for (; $l.test(n.charAt(o + 1)); )
            o += 1;
          n.charCodeAt(o + 1) === Kt && (o += 1);
        }
        p = ["word", n.slice(g, o + 1), g, o], g = o;
        break;
      }
      default: {
        s === Ml && n.charCodeAt(g + 1) === sb ? (o = n.indexOf("*/", g + 2) + 1, o === 0 && (i || A ? o = n.length : w("comment")), p = ["comment", n.slice(g, o + 1), g, o], g = o) : (yn.lastIndex = g + 1, yn.test(n), yn.lastIndex === 0 ? o = n.length - 1 : o = yn.lastIndex - 2, p = ["word", n.slice(g, o + 1), g, o], v.push(p), g = o);
        break;
      }
    }
    return g++, p;
  }
  function x(S) {
    b.push(S);
  }
  return {
    back: x,
    endOfFile: _,
    nextToken: E,
    position: y
  };
};
let Of = mt, jn = class extends Of {
  constructor(e) {
    super(e), this.type = "atrule";
  }
  append(...e) {
    return this.proxyOf.nodes || (this.nodes = []), super.append(...e);
  }
  prepend(...e) {
    return this.proxyOf.nodes || (this.nodes = []), super.prepend(...e);
  }
};
var Fo = jn;
jn.default = jn;
Of.registerAtRule(jn);
let Mf = mt, $f, Pf, zt = class extends Mf {
  constructor(e) {
    super(e), this.type = "root", this.nodes || (this.nodes = []);
  }
  normalize(e, t, n) {
    let i = super.normalize(e);
    if (t) {
      if (n === "prepend")
        this.nodes.length > 1 ? t.raws.before = this.nodes[1].raws.before : delete t.raws.before;
      else if (this.first !== t)
        for (let s of i)
          s.raws.before = t.raws.before;
    }
    return i;
  }
  removeChild(e, t) {
    let n = this.index(e);
    return !t && n === 0 && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[n].raws.before), super.removeChild(e);
  }
  toResult(e = {}) {
    return new $f(new Pf(), this, e).stringify();
  }
};
zt.registerLazyResult = (r) => {
  $f = r;
};
zt.registerProcessor = (r) => {
  Pf = r;
};
var Dr = zt;
zt.default = zt;
Mf.registerRoot(zt);
let _r = {
  comma(r) {
    return _r.split(r, [","], !0);
  },
  space(r) {
    let e = [" ", `
`, "	"];
    return _r.split(r, e);
  },
  split(r, e, t) {
    let n = [], i = "", s = !1, o = 0, a = !1, l = "", u = !1;
    for (let c of r)
      u ? u = !1 : c === "\\" ? u = !0 : a ? c === l && (a = !1) : c === '"' || c === "'" ? (a = !0, l = c) : c === "(" ? o += 1 : c === ")" ? o > 0 && (o -= 1) : o === 0 && e.includes(c) && (s = !0), s ? (i !== "" && n.push(i.trim()), i = "", s = !1) : i += c;
    return (t || i !== "") && n.push(i.trim()), n;
  }
};
var Nf = _r;
_r.default = _r;
let Lf = mt, cb = Nf, Gn = class extends Lf {
  constructor(e) {
    super(e), this.type = "rule", this.nodes || (this.nodes = []);
  }
  get selectors() {
    return cb.comma(this.selector);
  }
  set selectors(e) {
    let t = this.selector ? this.selector.match(/,\s*/) : null, n = t ? t[0] : "," + this.raw("between", "beforeOpen");
    this.selector = e.join(n);
  }
};
var zo = Gn;
Gn.default = Gn;
Lf.registerRule(Gn);
let fb = li, hb = ub, db = ci, pb = Fo, mb = Dr, Pl = zo;
const Nl = {
  empty: !0,
  space: !0
};
function gb(r) {
  for (let e = r.length - 1; e >= 0; e--) {
    let t = r[e], n = t[3] || t[2];
    if (n) return n;
  }
}
let yb = class {
  constructor(e) {
    this.input = e, this.root = new mb(), this.current = this.root, this.spaces = "", this.semicolon = !1, this.createTokenizer(), this.root.source = { input: e, start: { column: 1, line: 1, offset: 0 } };
  }
  atrule(e) {
    let t = new pb();
    t.name = e[1].slice(1), t.name === "" && this.unnamedAtrule(t, e), this.init(t, e[2]);
    let n, i, s, o = !1, a = !1, l = [], u = [];
    for (; !this.tokenizer.endOfFile(); ) {
      if (e = this.tokenizer.nextToken(), n = e[0], n === "(" || n === "[" ? u.push(n === "(" ? ")" : "]") : n === "{" && u.length > 0 ? u.push("}") : n === u[u.length - 1] && u.pop(), u.length === 0)
        if (n === ";") {
          t.source.end = this.getPosition(e[2]), t.source.end.offset++, this.semicolon = !0;
          break;
        } else if (n === "{") {
          a = !0;
          break;
        } else if (n === "}") {
          if (l.length > 0) {
            for (s = l.length - 1, i = l[s]; i && i[0] === "space"; )
              i = l[--s];
            i && (t.source.end = this.getPosition(i[3] || i[2]), t.source.end.offset++);
          }
          this.end(e);
          break;
        } else
          l.push(e);
      else
        l.push(e);
      if (this.tokenizer.endOfFile()) {
        o = !0;
        break;
      }
    }
    t.raws.between = this.spacesAndCommentsFromEnd(l), l.length ? (t.raws.afterName = this.spacesAndCommentsFromStart(l), this.raw(t, "params", l), o && (e = l[l.length - 1], t.source.end = this.getPosition(e[3] || e[2]), t.source.end.offset++, this.spaces = t.raws.between, t.raws.between = "")) : (t.raws.afterName = "", t.params = ""), a && (t.nodes = [], this.current = t);
  }
  checkMissedSemicolon(e) {
    let t = this.colon(e);
    if (t === !1) return;
    let n = 0, i;
    for (let s = t - 1; s >= 0 && (i = e[s], !(i[0] !== "space" && (n += 1, n === 2))); s--)
      ;
    throw this.input.error(
      "Missed semicolon",
      i[0] === "word" ? i[3] + 1 : i[2]
    );
  }
  colon(e) {
    let t = 0, n, i, s;
    for (let [o, a] of e.entries()) {
      if (n = a, i = n[0], i === "(" && (t += 1), i === ")" && (t -= 1), t === 0 && i === ":")
        if (!s)
          this.doubleColon(n);
        else {
          if (s[0] === "word" && s[1] === "progid")
            continue;
          return o;
        }
      s = n;
    }
    return !1;
  }
  comment(e) {
    let t = new db();
    this.init(t, e[2]), t.source.end = this.getPosition(e[3] || e[2]), t.source.end.offset++;
    let n = e[1].slice(2, -2);
    if (/^\s*$/.test(n))
      t.text = "", t.raws.left = n, t.raws.right = "";
    else {
      let i = n.match(/^(\s*)([^]*\S)(\s*)$/);
      t.text = i[2], t.raws.left = i[1], t.raws.right = i[3];
    }
  }
  createTokenizer() {
    this.tokenizer = hb(this.input);
  }
  decl(e, t) {
    let n = new fb();
    this.init(n, e[0][2]);
    let i = e[e.length - 1];
    for (i[0] === ";" && (this.semicolon = !0, e.pop()), n.source.end = this.getPosition(
      i[3] || i[2] || gb(e)
    ), n.source.end.offset++; e[0][0] !== "word"; )
      e.length === 1 && this.unknownWord(e), n.raws.before += e.shift()[1];
    for (n.source.start = this.getPosition(e[0][2]), n.prop = ""; e.length; ) {
      let u = e[0][0];
      if (u === ":" || u === "space" || u === "comment")
        break;
      n.prop += e.shift()[1];
    }
    n.raws.between = "";
    let s;
    for (; e.length; )
      if (s = e.shift(), s[0] === ":") {
        n.raws.between += s[1];
        break;
      } else
        s[0] === "word" && /\w/.test(s[1]) && this.unknownWord([s]), n.raws.between += s[1];
    (n.prop[0] === "_" || n.prop[0] === "*") && (n.raws.before += n.prop[0], n.prop = n.prop.slice(1));
    let o = [], a;
    for (; e.length && (a = e[0][0], !(a !== "space" && a !== "comment")); )
      o.push(e.shift());
    this.precheckMissedSemicolon(e);
    for (let u = e.length - 1; u >= 0; u--) {
      if (s = e[u], s[1].toLowerCase() === "!important") {
        n.important = !0;
        let c = this.stringFrom(e, u);
        c = this.spacesFromEnd(e) + c, c !== " !important" && (n.raws.important = c);
        break;
      } else if (s[1].toLowerCase() === "important") {
        let c = e.slice(0), f = "";
        for (let d = u; d > 0; d--) {
          let h = c[d][0];
          if (f.trim().indexOf("!") === 0 && h !== "space")
            break;
          f = c.pop()[1] + f;
        }
        f.trim().indexOf("!") === 0 && (n.important = !0, n.raws.important = f, e = c);
      }
      if (s[0] !== "space" && s[0] !== "comment")
        break;
    }
    e.some((u) => u[0] !== "space" && u[0] !== "comment") && (n.raws.between += o.map((u) => u[1]).join(""), o = []), this.raw(n, "value", o.concat(e), t), n.value.includes(":") && !t && this.checkMissedSemicolon(e);
  }
  doubleColon(e) {
    throw this.input.error(
      "Double colon",
      { offset: e[2] },
      { offset: e[2] + e[1].length }
    );
  }
  emptyRule(e) {
    let t = new Pl();
    this.init(t, e[2]), t.selector = "", t.raws.between = "", this.current = t;
  }
  end(e) {
    this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.semicolon = !1, this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.spaces = "", this.current.parent ? (this.current.source.end = this.getPosition(e[2]), this.current.source.end.offset++, this.current = this.current.parent) : this.unexpectedClose(e);
  }
  endFile() {
    this.current.parent && this.unclosedBlock(), this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.root.source.end = this.getPosition(this.tokenizer.position());
  }
  freeSemicolon(e) {
    if (this.spaces += e[1], this.current.nodes) {
      let t = this.current.nodes[this.current.nodes.length - 1];
      t && t.type === "rule" && !t.raws.ownSemicolon && (t.raws.ownSemicolon = this.spaces, this.spaces = "");
    }
  }
  // Helpers
  getPosition(e) {
    let t = this.input.fromOffset(e);
    return {
      column: t.col,
      line: t.line,
      offset: e
    };
  }
  init(e, t) {
    this.current.push(e), e.source = {
      input: this.input,
      start: this.getPosition(t)
    }, e.raws.before = this.spaces, this.spaces = "", e.type !== "comment" && (this.semicolon = !1);
  }
  other(e) {
    let t = !1, n = null, i = !1, s = null, o = [], a = e[1].startsWith("--"), l = [], u = e;
    for (; u; ) {
      if (n = u[0], l.push(u), n === "(" || n === "[")
        s || (s = u), o.push(n === "(" ? ")" : "]");
      else if (a && i && n === "{")
        s || (s = u), o.push("}");
      else if (o.length === 0)
        if (n === ";")
          if (i) {
            this.decl(l, a);
            return;
          } else
            break;
        else if (n === "{") {
          this.rule(l);
          return;
        } else if (n === "}") {
          this.tokenizer.back(l.pop()), t = !0;
          break;
        } else n === ":" && (i = !0);
      else n === o[o.length - 1] && (o.pop(), o.length === 0 && (s = null));
      u = this.tokenizer.nextToken();
    }
    if (this.tokenizer.endOfFile() && (t = !0), o.length > 0 && this.unclosedBracket(s), t && i) {
      if (!a)
        for (; l.length && (u = l[l.length - 1][0], !(u !== "space" && u !== "comment")); )
          this.tokenizer.back(l.pop());
      this.decl(l, a);
    } else
      this.unknownWord(l);
  }
  parse() {
    let e;
    for (; !this.tokenizer.endOfFile(); )
      switch (e = this.tokenizer.nextToken(), e[0]) {
        case "space":
          this.spaces += e[1];
          break;
        case ";":
          this.freeSemicolon(e);
          break;
        case "}":
          this.end(e);
          break;
        case "comment":
          this.comment(e);
          break;
        case "at-word":
          this.atrule(e);
          break;
        case "{":
          this.emptyRule(e);
          break;
        default:
          this.other(e);
          break;
      }
    this.endFile();
  }
  precheckMissedSemicolon() {
  }
  raw(e, t, n, i) {
    let s, o, a = n.length, l = "", u = !0, c, f;
    for (let d = 0; d < a; d += 1)
      s = n[d], o = s[0], o === "space" && d === a - 1 && !i ? u = !1 : o === "comment" ? (f = n[d - 1] ? n[d - 1][0] : "empty", c = n[d + 1] ? n[d + 1][0] : "empty", !Nl[f] && !Nl[c] ? l.slice(-1) === "," ? u = !1 : l += s[1] : u = !1) : l += s[1];
    if (!u) {
      let d = n.reduce((h, p) => h + p[1], "");
      e.raws[t] = { raw: d, value: l };
    }
    e[t] = l;
  }
  rule(e) {
    e.pop();
    let t = new Pl();
    this.init(t, e[0][2]), t.raws.between = this.spacesAndCommentsFromEnd(e), this.raw(t, "selector", e), this.current = t;
  }
  spacesAndCommentsFromEnd(e) {
    let t, n = "";
    for (; e.length && (t = e[e.length - 1][0], !(t !== "space" && t !== "comment")); )
      n = e.pop()[1] + n;
    return n;
  }
  // Errors
  spacesAndCommentsFromStart(e) {
    let t, n = "";
    for (; e.length && (t = e[0][0], !(t !== "space" && t !== "comment")); )
      n += e.shift()[1];
    return n;
  }
  spacesFromEnd(e) {
    let t, n = "";
    for (; e.length && (t = e[e.length - 1][0], t === "space"); )
      n = e.pop()[1] + n;
    return n;
  }
  stringFrom(e, t) {
    let n = "";
    for (let i = t; i < e.length; i++)
      n += e[i][1];
    return e.splice(t, e.length - t), n;
  }
  unclosedBlock() {
    let e = this.current.source.start;
    throw this.input.error("Unclosed block", e.line, e.column);
  }
  unclosedBracket(e) {
    throw this.input.error(
      "Unclosed bracket",
      { offset: e[2] },
      { offset: e[2] + 1 }
    );
  }
  unexpectedClose(e) {
    throw this.input.error(
      "Unexpected }",
      { offset: e[2] },
      { offset: e[2] + 1 }
    );
  }
  unknownWord(e) {
    throw this.input.error(
      "Unknown word",
      { offset: e[0][2] },
      { offset: e[0][2] + e[0][1].length }
    );
  }
  unnamedAtrule(e, t) {
    throw this.input.error(
      "At-rule without name",
      { offset: t[2] },
      { offset: t[2] + t[1].length }
    );
  }
};
var wb = yb;
let vb = mt, bb = wb, Sb = ui;
function Vn(r, e) {
  let t = new Sb(r, e), n = new bb(t);
  try {
    n.parse();
  } catch (i) {
    throw process.env.NODE_ENV !== "production" && i.name === "CssSyntaxError" && e && e.from && (/\.scss$/i.test(e.from) ? i.message += `
You tried to parse SCSS with the standard CSS parser; try again with the postcss-scss parser` : /\.sass/i.test(e.from) ? i.message += `
You tried to parse Sass with the standard CSS parser; try again with the postcss-sass parser` : /\.less$/i.test(e.from) && (i.message += `
You tried to parse Less with the standard CSS parser; try again with the postcss-less parser`)), i;
  }
  return n.root;
}
var Uo = Vn;
Vn.default = Vn;
vb.registerParse(Vn);
let { isClean: $e, my: _b } = Tr, xb = gf, Cb = oi, Ib = mt, Ab = To, Eb = Rf, Ll = Do, Rb = Uo, kb = Dr;
const Ob = {
  atrule: "AtRule",
  comment: "Comment",
  decl: "Declaration",
  document: "Document",
  root: "Root",
  rule: "Rule"
}, Mb = {
  AtRule: !0,
  AtRuleExit: !0,
  Comment: !0,
  CommentExit: !0,
  Declaration: !0,
  DeclarationExit: !0,
  Document: !0,
  DocumentExit: !0,
  Once: !0,
  OnceExit: !0,
  postcssPlugin: !0,
  prepare: !0,
  Root: !0,
  RootExit: !0,
  Rule: !0,
  RuleExit: !0
}, $b = {
  Once: !0,
  postcssPlugin: !0,
  prepare: !0
}, Ut = 0;
function qt(r) {
  return typeof r == "object" && typeof r.then == "function";
}
function Tf(r) {
  let e = !1, t = Ob[r.type];
  return r.type === "decl" ? e = r.prop.toLowerCase() : r.type === "atrule" && (e = r.name.toLowerCase()), e && r.append ? [
    t,
    t + "-" + e,
    Ut,
    t + "Exit",
    t + "Exit-" + e
  ] : e ? [t, t + "-" + e, t + "Exit", t + "Exit-" + e] : r.append ? [t, Ut, t + "Exit"] : [t, t + "Exit"];
}
function Tl(r) {
  let e;
  return r.type === "document" ? e = ["Document", Ut, "DocumentExit"] : r.type === "root" ? e = ["Root", Ut, "RootExit"] : e = Tf(r), {
    eventIndex: 0,
    events: e,
    iterator: 0,
    node: r,
    visitorIndex: 0,
    visitors: []
  };
}
function qs(r) {
  return r[$e] = !1, r.nodes && r.nodes.forEach((e) => qs(e)), r;
}
let Qs = {}, Bt = class Df {
  constructor(e, t, n) {
    this.stringified = !1, this.processed = !1;
    let i;
    if (typeof t == "object" && t !== null && (t.type === "root" || t.type === "document"))
      i = qs(t);
    else if (t instanceof Df || t instanceof Ll)
      i = qs(t.root), t.map && (typeof n.map > "u" && (n.map = {}), n.map.inline || (n.map.inline = !1), n.map.prev = t.map);
    else {
      let s = Rb;
      n.syntax && (s = n.syntax.parse), n.parser && (s = n.parser), s.parse && (s = s.parse);
      try {
        i = s(t, n);
      } catch (o) {
        this.processed = !0, this.error = o;
      }
      i && !i[_b] && Ib.rebuild(i);
    }
    this.result = new Ll(e, i, n), this.helpers = { ...Qs, postcss: Qs, result: this.result }, this.plugins = this.processor.plugins.map((s) => typeof s == "object" && s.prepare ? { ...s, ...s.prepare(this.result) } : s);
  }
  async() {
    return this.error ? Promise.reject(this.error) : this.processed ? Promise.resolve(this.result) : (this.processing || (this.processing = this.runAsync()), this.processing);
  }
  catch(e) {
    return this.async().catch(e);
  }
  finally(e) {
    return this.async().then(e, e);
  }
  getAsyncError() {
    throw new Error("Use process(css).then(cb) to work with async plugins");
  }
  handleError(e, t) {
    let n = this.result.lastPlugin;
    try {
      if (t && t.addToError(e), this.error = e, e.name === "CssSyntaxError" && !e.plugin)
        e.plugin = n.postcssPlugin, e.setMessage();
      else if (n.postcssVersion && process.env.NODE_ENV !== "production") {
        let i = n.postcssPlugin, s = n.postcssVersion, o = this.result.processor.version, a = s.split("."), l = o.split(".");
        (a[0] !== l[0] || parseInt(a[1]) > parseInt(l[1])) && console.error(
          "Unknown error from PostCSS plugin. Your current PostCSS version is " + o + ", but " + i + " uses " + s + ". Perhaps this is the source of the error below."
        );
      }
    } catch (i) {
      console && console.error && console.error(i);
    }
    return e;
  }
  prepareVisitors() {
    this.listeners = {};
    let e = (t, n, i) => {
      this.listeners[n] || (this.listeners[n] = []), this.listeners[n].push([t, i]);
    };
    for (let t of this.plugins)
      if (typeof t == "object")
        for (let n in t) {
          if (!Mb[n] && /^[A-Z]/.test(n))
            throw new Error(
              `Unknown event ${n} in ${t.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`
            );
          if (!$b[n])
            if (typeof t[n] == "object")
              for (let i in t[n])
                i === "*" ? e(t, n, t[n][i]) : e(
                  t,
                  n + "-" + i.toLowerCase(),
                  t[n][i]
                );
            else typeof t[n] == "function" && e(t, n, t[n]);
        }
    this.hasListener = Object.keys(this.listeners).length > 0;
  }
  async runAsync() {
    this.plugin = 0;
    for (let e = 0; e < this.plugins.length; e++) {
      let t = this.plugins[e], n = this.runOnRoot(t);
      if (qt(n))
        try {
          await n;
        } catch (i) {
          throw this.handleError(i);
        }
    }
    if (this.prepareVisitors(), this.hasListener) {
      let e = this.result.root;
      for (; !e[$e]; ) {
        e[$e] = !0;
        let t = [Tl(e)];
        for (; t.length > 0; ) {
          let n = this.visitTick(t);
          if (qt(n))
            try {
              await n;
            } catch (i) {
              let s = t[t.length - 1].node;
              throw this.handleError(i, s);
            }
        }
      }
      if (this.listeners.OnceExit)
        for (let [t, n] of this.listeners.OnceExit) {
          this.result.lastPlugin = t;
          try {
            if (e.type === "document") {
              let i = e.nodes.map(
                (s) => n(s, this.helpers)
              );
              await Promise.all(i);
            } else
              await n(e, this.helpers);
          } catch (i) {
            throw this.handleError(i);
          }
        }
    }
    return this.processed = !0, this.stringify();
  }
  runOnRoot(e) {
    this.result.lastPlugin = e;
    try {
      if (typeof e == "object" && e.Once) {
        if (this.result.root.type === "document") {
          let t = this.result.root.nodes.map(
            (n) => e.Once(n, this.helpers)
          );
          return qt(t[0]) ? Promise.all(t) : t;
        }
        return e.Once(this.result.root, this.helpers);
      } else if (typeof e == "function")
        return e(this.result.root, this.result);
    } catch (t) {
      throw this.handleError(t);
    }
  }
  stringify() {
    if (this.error) throw this.error;
    if (this.stringified) return this.result;
    this.stringified = !0, this.sync();
    let e = this.result.opts, t = Cb;
    e.syntax && (t = e.syntax.stringify), e.stringifier && (t = e.stringifier), t.stringify && (t = t.stringify);
    let i = new xb(t, this.result.root, this.result.opts).generate();
    return this.result.css = i[0], this.result.map = i[1], this.result;
  }
  sync() {
    if (this.error) throw this.error;
    if (this.processed) return this.result;
    if (this.processed = !0, this.processing)
      throw this.getAsyncError();
    for (let e of this.plugins) {
      let t = this.runOnRoot(e);
      if (qt(t))
        throw this.getAsyncError();
    }
    if (this.prepareVisitors(), this.hasListener) {
      let e = this.result.root;
      for (; !e[$e]; )
        e[$e] = !0, this.walkSync(e);
      if (this.listeners.OnceExit)
        if (e.type === "document")
          for (let t of e.nodes)
            this.visitSync(this.listeners.OnceExit, t);
        else
          this.visitSync(this.listeners.OnceExit, e);
    }
    return this.result;
  }
  then(e, t) {
    return process.env.NODE_ENV !== "production" && ("from" in this.opts || Eb(
      "Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning."
    )), this.async().then(e, t);
  }
  toString() {
    return this.css;
  }
  visitSync(e, t) {
    for (let [n, i] of e) {
      this.result.lastPlugin = n;
      let s;
      try {
        s = i(t, this.helpers);
      } catch (o) {
        throw this.handleError(o, t.proxyOf);
      }
      if (t.type !== "root" && t.type !== "document" && !t.parent)
        return !0;
      if (qt(s))
        throw this.getAsyncError();
    }
  }
  visitTick(e) {
    let t = e[e.length - 1], { node: n, visitors: i } = t;
    if (n.type !== "root" && n.type !== "document" && !n.parent) {
      e.pop();
      return;
    }
    if (i.length > 0 && t.visitorIndex < i.length) {
      let [o, a] = i[t.visitorIndex];
      t.visitorIndex += 1, t.visitorIndex === i.length && (t.visitors = [], t.visitorIndex = 0), this.result.lastPlugin = o;
      try {
        return a(n.toProxy(), this.helpers);
      } catch (l) {
        throw this.handleError(l, n);
      }
    }
    if (t.iterator !== 0) {
      let o = t.iterator, a;
      for (; a = n.nodes[n.indexes[o]]; )
        if (n.indexes[o] += 1, !a[$e]) {
          a[$e] = !0, e.push(Tl(a));
          return;
        }
      t.iterator = 0, delete n.indexes[o];
    }
    let s = t.events;
    for (; t.eventIndex < s.length; ) {
      let o = s[t.eventIndex];
      if (t.eventIndex += 1, o === Ut) {
        n.nodes && n.nodes.length && (n[$e] = !0, t.iterator = n.getIterator());
        return;
      } else if (this.listeners[o]) {
        t.visitors = this.listeners[o];
        return;
      }
    }
    e.pop();
  }
  walkSync(e) {
    e[$e] = !0;
    let t = Tf(e);
    for (let n of t)
      if (n === Ut)
        e.nodes && e.each((i) => {
          i[$e] || this.walkSync(i);
        });
      else {
        let i = this.listeners[n];
        if (i && this.visitSync(i, e.toProxy()))
          return;
      }
  }
  warnings() {
    return this.sync().warnings();
  }
  get content() {
    return this.stringify().content;
  }
  get css() {
    return this.stringify().css;
  }
  get map() {
    return this.stringify().map;
  }
  get messages() {
    return this.sync().messages;
  }
  get opts() {
    return this.result.opts;
  }
  get processor() {
    return this.result.processor;
  }
  get root() {
    return this.sync().root;
  }
  get [Symbol.toStringTag]() {
    return "LazyResult";
  }
};
Bt.registerPostcss = (r) => {
  Qs = r;
};
var Ff = Bt;
Bt.default = Bt;
kb.registerLazyResult(Bt);
Ab.registerLazyResult(Bt);
let Pb = gf, Nb = oi, Lb = Rf, Tb = Uo;
const Db = Do;
let eo = class {
  constructor(e, t, n) {
    t = t.toString(), this.stringified = !1, this._processor = e, this._css = t, this._opts = n, this._map = void 0;
    let i, s = Nb;
    this.result = new Db(this._processor, i, this._opts), this.result.css = t;
    let o = this;
    Object.defineProperty(this.result, "root", {
      get() {
        return o.root;
      }
    });
    let a = new Pb(s, i, this._opts, t);
    if (a.isMap()) {
      let [l, u] = a.generate();
      l && (this.result.css = l), u && (this.result.map = u);
    } else
      a.clearAnnotation(), this.result.css = a.css;
  }
  async() {
    return this.error ? Promise.reject(this.error) : Promise.resolve(this.result);
  }
  catch(e) {
    return this.async().catch(e);
  }
  finally(e) {
    return this.async().then(e, e);
  }
  sync() {
    if (this.error) throw this.error;
    return this.result;
  }
  then(e, t) {
    return process.env.NODE_ENV !== "production" && ("from" in this._opts || Lb(
      "Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning."
    )), this.async().then(e, t);
  }
  toString() {
    return this._css;
  }
  warnings() {
    return [];
  }
  get content() {
    return this.result.css;
  }
  get css() {
    return this.result.css;
  }
  get map() {
    return this.result.map;
  }
  get messages() {
    return [];
  }
  get opts() {
    return this.result.opts;
  }
  get processor() {
    return this.result.processor;
  }
  get root() {
    if (this._root)
      return this._root;
    let e, t = Tb;
    try {
      e = t(this._css, this._opts);
    } catch (n) {
      this.error = n;
    }
    if (this.error)
      throw this.error;
    return this._root = e, e;
  }
  get [Symbol.toStringTag]() {
    return "NoWorkResult";
  }
};
var Fb = eo;
eo.default = eo;
let zb = Fb, Ub = Ff, Bb = To, Wb = Dr, xr = class {
  constructor(e = []) {
    this.version = "8.4.38", this.plugins = this.normalize(e);
  }
  normalize(e) {
    let t = [];
    for (let n of e)
      if (n.postcss === !0 ? n = n() : n.postcss && (n = n.postcss), typeof n == "object" && Array.isArray(n.plugins))
        t = t.concat(n.plugins);
      else if (typeof n == "object" && n.postcssPlugin)
        t.push(n);
      else if (typeof n == "function")
        t.push(n);
      else if (typeof n == "object" && (n.parse || n.stringify)) {
        if (process.env.NODE_ENV !== "production")
          throw new Error(
            "PostCSS syntaxes cannot be used as plugins. Instead, please use one of the syntax/parser/stringifier options as outlined in your PostCSS runner documentation."
          );
      } else
        throw new Error(n + " is not a PostCSS plugin");
    return t;
  }
  process(e, t = {}) {
    return !this.plugins.length && !t.parser && !t.stringifier && !t.syntax ? new zb(this, e, t) : new Ub(this, e, t);
  }
  use(e) {
    return this.plugins = this.plugins.concat(this.normalize([e])), this;
  }
};
var Zb = xr;
xr.default = xr;
Wb.registerProcessor(xr);
Bb.registerProcessor(xr);
let jb = li, Gb = ff, Vb = ci, Hb = Fo, Yb = ui, Xb = Dr, Jb = zo;
function Cr(r, e) {
  if (Array.isArray(r)) return r.map((i) => Cr(i));
  let { inputs: t, ...n } = r;
  if (t) {
    e = [];
    for (let i of t) {
      let s = { ...i, __proto__: Yb.prototype };
      s.map && (s.map = {
        ...s.map,
        __proto__: Gb.prototype
      }), e.push(s);
    }
  }
  if (n.nodes && (n.nodes = r.nodes.map((i) => Cr(i, e))), n.source) {
    let { inputId: i, ...s } = n.source;
    n.source = s, i != null && (n.source.input = e[i]);
  }
  if (n.type === "root")
    return new Xb(n);
  if (n.type === "decl")
    return new jb(n);
  if (n.type === "rule")
    return new Jb(n);
  if (n.type === "comment")
    return new Vb(n);
  if (n.type === "atrule")
    return new Hb(n);
  throw new Error("Unknown node type: " + r.type);
}
var Kb = Cr;
Cr.default = Cr;
let qb = Po, zf = li, Qb = Ff, e1 = mt, Bo = Zb, t1 = oi, r1 = Kb, Uf = To, n1 = kf, Bf = ci, Wf = Fo, i1 = Do, s1 = ui, o1 = Uo, a1 = Nf, Zf = zo, jf = Dr, l1 = ai;
function U(...r) {
  return r.length === 1 && Array.isArray(r[0]) && (r = r[0]), new Bo(r);
}
U.plugin = function(e, t) {
  let n = !1;
  function i(...o) {
    console && console.warn && !n && (n = !0, console.warn(
      e + `: postcss.plugin was deprecated. Migration guide:
https://evilmartians.com/chronicles/postcss-8-plugin-migration`
    ), process.env.LANG && process.env.LANG.startsWith("cn") && console.warn(
      e + `: 里面 postcss.plugin 被弃用. 迁移指南:
https://www.w3ctech.com/topic/2226`
    ));
    let a = t(...o);
    return a.postcssPlugin = e, a.postcssVersion = new Bo().version, a;
  }
  let s;
  return Object.defineProperty(i, "postcss", {
    get() {
      return s || (s = i()), s;
    }
  }), i.process = function(o, a, l) {
    return U([i(l)]).process(o, a);
  }, i;
};
U.stringify = t1;
U.parse = o1;
U.fromJSON = r1;
U.list = a1;
U.comment = (r) => new Bf(r);
U.atRule = (r) => new Wf(r);
U.decl = (r) => new zf(r);
U.rule = (r) => new Zf(r);
U.root = (r) => new jf(r);
U.document = (r) => new Uf(r);
U.CssSyntaxError = qb;
U.Declaration = zf;
U.Container = e1;
U.Processor = Bo;
U.Document = Uf;
U.Comment = Bf;
U.Warning = n1;
U.AtRule = Wf;
U.Result = i1;
U.Input = s1;
U.Rule = Zf;
U.Root = jf;
U.Node = l1;
Qb.registerPostcss(U);
var u1 = U;
U.default = U;
const Y = /* @__PURE__ */ vv(u1);
Y.stringify;
Y.fromJSON;
Y.plugin;
Y.parse;
Y.list;
Y.document;
Y.comment;
Y.atRule;
Y.rule;
Y.decl;
Y.root;
Y.CssSyntaxError;
Y.Declaration;
Y.Container;
Y.Processor;
Y.Document;
Y.Comment;
Y.Warning;
Y.AtRule;
Y.Result;
Y.Input;
Y.Rule;
Y.Root;
Y.Node;
class Wo {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  constructor(...e) {
    ye(this, "parentElement", null), ye(this, "parentNode", null), ye(this, "ownerDocument"), ye(this, "firstChild", null), ye(this, "lastChild", null), ye(this, "previousSibling", null), ye(this, "nextSibling", null), ye(this, "ELEMENT_NODE", 1), ye(this, "TEXT_NODE", 3), ye(this, "nodeType"), ye(this, "nodeName"), ye(this, "RRNodeType");
  }
  get childNodes() {
    const e = [];
    let t = this.firstChild;
    for (; t; )
      e.push(t), t = t.nextSibling;
    return e;
  }
  contains(e) {
    if (e instanceof Wo) {
      if (e.ownerDocument !== this.ownerDocument) return !1;
      if (e === this) return !0;
    } else return !1;
    for (; e.parentNode; ) {
      if (e.parentNode === this) return !0;
      e = e.parentNode;
    }
    return !1;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  appendChild(e) {
    throw new Error(
      "RRDomException: Failed to execute 'appendChild' on 'RRNode': This RRNode type does not support this method."
    );
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  insertBefore(e, t) {
    throw new Error(
      "RRDomException: Failed to execute 'insertBefore' on 'RRNode': This RRNode type does not support this method."
    );
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  removeChild(e) {
    throw new Error(
      "RRDomException: Failed to execute 'removeChild' on 'RRNode': This RRNode type does not support this method."
    );
  }
  toString() {
    return "RRNode";
  }
}
const Dl = {
  Node: ["childNodes", "parentNode", "parentElement", "textContent"],
  ShadowRoot: ["host", "styleSheets"],
  Element: ["shadowRoot", "querySelector", "querySelectorAll"],
  MutationObserver: []
}, Fl = {
  Node: ["contains", "getRootNode"],
  ShadowRoot: ["getSelection"],
  Element: [],
  MutationObserver: ["constructor"]
}, wn = {}, c1 = () => !!globalThis.Zone;
function Zo(r) {
  if (wn[r])
    return wn[r];
  const e = globalThis[r], t = e.prototype, n = r in Dl ? Dl[r] : void 0, i = !!(n && // @ts-expect-error 2345
  n.every(
    (a) => {
      var l, u;
      return !!((u = (l = Object.getOwnPropertyDescriptor(t, a)) == null ? void 0 : l.get) != null && u.toString().includes("[native code]"));
    }
  )), s = r in Fl ? Fl[r] : void 0, o = !!(s && s.every(
    // @ts-expect-error 2345
    (a) => {
      var l;
      return typeof t[a] == "function" && ((l = t[a]) == null ? void 0 : l.toString().includes("[native code]"));
    }
  ));
  if (i && o && !c1())
    return wn[r] = e.prototype, e.prototype;
  try {
    const a = document.createElement("iframe");
    document.body.appendChild(a);
    const l = a.contentWindow;
    if (!l) return e.prototype;
    const u = l[r].prototype;
    return document.body.removeChild(a), u ? wn[r] = u : t;
  } catch {
    return t;
  }
}
const Yi = {};
function Qe(r, e, t) {
  var n;
  const i = `${r}.${String(t)}`;
  if (Yi[i])
    return Yi[i].call(
      e
    );
  const s = Zo(r), o = (n = Object.getOwnPropertyDescriptor(
    s,
    t
  )) == null ? void 0 : n.get;
  return o ? (Yi[i] = o, o.call(e)) : e[t];
}
const Xi = {};
function Gf(r, e, t) {
  const n = `${r}.${String(t)}`;
  if (Xi[n])
    return Xi[n].bind(
      e
    );
  const s = Zo(r)[t];
  return typeof s != "function" ? e[t] : (Xi[n] = s, s.bind(e));
}
function f1(r) {
  return Qe("Node", r, "childNodes");
}
function h1(r) {
  return Qe("Node", r, "parentNode");
}
function d1(r) {
  return Qe("Node", r, "parentElement");
}
function p1(r) {
  return Qe("Node", r, "textContent");
}
function m1(r, e) {
  return Gf("Node", r, "contains")(e);
}
function g1(r) {
  return Gf("Node", r, "getRootNode")();
}
function y1(r) {
  return !r || !("host" in r) ? null : Qe("ShadowRoot", r, "host");
}
function w1(r) {
  return r.styleSheets;
}
function v1(r) {
  return !r || !("shadowRoot" in r) ? null : Qe("Element", r, "shadowRoot");
}
function b1(r, e) {
  return Qe("Element", r, "querySelector")(e);
}
function S1(r, e) {
  return Qe("Element", r, "querySelectorAll")(e);
}
function Vf() {
  return Zo("MutationObserver").constructor;
}
const M = {
  childNodes: f1,
  parentNode: h1,
  parentElement: d1,
  textContent: p1,
  contains: m1,
  getRootNode: g1,
  host: y1,
  styleSheets: w1,
  shadowRoot: v1,
  querySelector: b1,
  querySelectorAll: S1,
  mutationObserver: Vf
};
function oe(r, e, t = document) {
  const n = { capture: !0, passive: !0 };
  return t.addEventListener(r, e, n), () => t.removeEventListener(r, e, n);
}
const Ct = `Please stop import mirror directly. Instead of that,\r
now you can use replayer.getMirror() to access the mirror instance of a replayer,\r
or you can use record.mirror to access the mirror instance during recording.`;
let zl = {
  map: {},
  getId() {
    return console.error(Ct), -1;
  },
  getNode() {
    return console.error(Ct), null;
  },
  removeNodeFromMap() {
    console.error(Ct);
  },
  has() {
    return console.error(Ct), !1;
  },
  reset() {
    console.error(Ct);
  }
};
typeof window < "u" && window.Proxy && window.Reflect && (zl = new Proxy(zl, {
  get(r, e, t) {
    return e === "map" && console.error(Ct), Reflect.get(r, e, t);
  }
}));
function Ir(r, e, t = {}) {
  let n = null, i = 0;
  return function(...s) {
    const o = Date.now();
    !i && t.leading === !1 && (i = o);
    const a = e - (o - i), l = this;
    a <= 0 || a > e ? (n && (clearTimeout(n), n = null), i = o, r.apply(l, s)) : !n && t.trailing !== !1 && (n = setTimeout(() => {
      i = t.leading === !1 ? 0 : Date.now(), n = null, r.apply(l, s);
    }, a));
  };
}
function fi(r, e, t, n, i = window) {
  const s = i.Object.getOwnPropertyDescriptor(r, e);
  return i.Object.defineProperty(
    r,
    e,
    n ? t : {
      set(o) {
        setTimeout(() => {
          t.set.call(this, o);
        }, 0), s && s.set && s.set.call(this, o);
      }
    }
  ), () => fi(r, e, s || {}, !0);
}
function Ht(r, e, t) {
  try {
    if (!(e in r))
      return () => {
      };
    const n = r[e], i = t(n);
    return typeof i == "function" && (i.prototype = i.prototype || {}, Object.defineProperties(i, {
      __rrweb_original__: {
        enumerable: !1,
        value: n
      }
    })), r[e] = i, () => {
      r[e] = n;
    };
  } catch {
    return () => {
    };
  }
}
let Hn = Date.now;
/* @__PURE__ */ /[1-9][0-9]{12}/.test(Date.now().toString()) || (Hn = () => (/* @__PURE__ */ new Date()).getTime());
function Hf(r) {
  var e, t, n, i;
  const s = r.document;
  return {
    left: s.scrollingElement ? s.scrollingElement.scrollLeft : r.pageXOffset !== void 0 ? r.pageXOffset : s.documentElement.scrollLeft || (s == null ? void 0 : s.body) && ((e = M.parentElement(s.body)) == null ? void 0 : e.scrollLeft) || ((t = s == null ? void 0 : s.body) == null ? void 0 : t.scrollLeft) || 0,
    top: s.scrollingElement ? s.scrollingElement.scrollTop : r.pageYOffset !== void 0 ? r.pageYOffset : (s == null ? void 0 : s.documentElement.scrollTop) || (s == null ? void 0 : s.body) && ((n = M.parentElement(s.body)) == null ? void 0 : n.scrollTop) || ((i = s == null ? void 0 : s.body) == null ? void 0 : i.scrollTop) || 0
  };
}
function Yf() {
  return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight;
}
function Xf() {
  return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth;
}
function Jf(r) {
  return r ? r.nodeType === r.ELEMENT_NODE ? r : M.parentElement(r) : null;
}
function ae(r, e, t, n) {
  if (!r)
    return !1;
  const i = Jf(r);
  if (!i)
    return !1;
  try {
    if (typeof e == "string") {
      if (i.classList.contains(e) || n && i.closest("." + e) !== null) return !0;
    } else if (Fn(i, e, n)) return !0;
  } catch {
  }
  return !!(t && (i.matches(t) || n && i.closest(t) !== null));
}
function _1(r, e) {
  return e.getId(r) !== -1;
}
function Ji(r, e, t) {
  return r.tagName === "TITLE" && t.headTitleMutations ? !0 : e.getId(r) === gr;
}
function Kf(r, e) {
  if (ir(r))
    return !1;
  const t = e.getId(r);
  if (!e.has(t))
    return !0;
  const n = M.parentNode(r);
  return n && n.nodeType === r.DOCUMENT_NODE ? !1 : n ? Kf(n, e) : !0;
}
function to(r) {
  return !!r.changedTouches;
}
function x1(r = window) {
  "NodeList" in r && !r.NodeList.prototype.forEach && (r.NodeList.prototype.forEach = Array.prototype.forEach), "DOMTokenList" in r && !r.DOMTokenList.prototype.forEach && (r.DOMTokenList.prototype.forEach = Array.prototype.forEach);
}
function qf(r, e) {
  return !!(r.nodeName === "IFRAME" && e.getMeta(r));
}
function Qf(r, e) {
  return !!(r.nodeName === "LINK" && r.nodeType === r.ELEMENT_NODE && r.getAttribute && r.getAttribute("rel") === "stylesheet" && e.getMeta(r));
}
function ro(r) {
  return r ? r instanceof Wo && "shadowRoot" in r ? !!r.shadowRoot : !!M.shadowRoot(r) : !1;
}
class C1 {
  constructor() {
    C(this, "id", 1), C(this, "styleIDMap", /* @__PURE__ */ new WeakMap()), C(this, "idStyleMap", /* @__PURE__ */ new Map());
  }
  getId(e) {
    return this.styleIDMap.get(e) ?? -1;
  }
  has(e) {
    return this.styleIDMap.has(e);
  }
  /**
   * @returns If the stylesheet is in the mirror, returns the id of the stylesheet. If not, return the new assigned id.
   */
  add(e, t) {
    if (this.has(e)) return this.getId(e);
    let n;
    return t === void 0 ? n = this.id++ : n = t, this.styleIDMap.set(e, n), this.idStyleMap.set(n, e), n;
  }
  getStyle(e) {
    return this.idStyleMap.get(e) || null;
  }
  reset() {
    this.styleIDMap = /* @__PURE__ */ new WeakMap(), this.idStyleMap = /* @__PURE__ */ new Map(), this.id = 1;
  }
  generateId() {
    return this.id++;
  }
}
function eh(r) {
  var e;
  let t = null;
  return "getRootNode" in r && ((e = M.getRootNode(r)) == null ? void 0 : e.nodeType) === Node.DOCUMENT_FRAGMENT_NODE && M.host(M.getRootNode(r)) && (t = M.host(M.getRootNode(r))), t;
}
function I1(r) {
  let e = r, t;
  for (; t = eh(e); )
    e = t;
  return e;
}
function A1(r) {
  const e = r.ownerDocument;
  if (!e) return !1;
  const t = I1(r);
  return M.contains(e, t);
}
function th(r) {
  const e = r.ownerDocument;
  return e ? M.contains(e, r) || A1(r) : !1;
}
var L = /* @__PURE__ */ ((r) => (r[r.DomContentLoaded = 0] = "DomContentLoaded", r[r.Load = 1] = "Load", r[r.FullSnapshot = 2] = "FullSnapshot", r[r.IncrementalSnapshot = 3] = "IncrementalSnapshot", r[r.Meta = 4] = "Meta", r[r.Custom = 5] = "Custom", r[r.Plugin = 6] = "Plugin", r))(L || {}), $ = /* @__PURE__ */ ((r) => (r[r.Mutation = 0] = "Mutation", r[r.MouseMove = 1] = "MouseMove", r[r.MouseInteraction = 2] = "MouseInteraction", r[r.Scroll = 3] = "Scroll", r[r.ViewportResize = 4] = "ViewportResize", r[r.Input = 5] = "Input", r[r.TouchMove = 6] = "TouchMove", r[r.MediaInteraction = 7] = "MediaInteraction", r[r.StyleSheetRule = 8] = "StyleSheetRule", r[r.CanvasMutation = 9] = "CanvasMutation", r[r.Font = 10] = "Font", r[r.Log = 11] = "Log", r[r.Drag = 12] = "Drag", r[r.StyleDeclaration = 13] = "StyleDeclaration", r[r.Selection = 14] = "Selection", r[r.AdoptedStyleSheet = 15] = "AdoptedStyleSheet", r[r.CustomElement = 16] = "CustomElement", r))($ || {}), ce = /* @__PURE__ */ ((r) => (r[r.MouseUp = 0] = "MouseUp", r[r.MouseDown = 1] = "MouseDown", r[r.Click = 2] = "Click", r[r.ContextMenu = 3] = "ContextMenu", r[r.DblClick = 4] = "DblClick", r[r.Focus = 5] = "Focus", r[r.Blur = 6] = "Blur", r[r.TouchStart = 7] = "TouchStart", r[r.TouchMove_Departed = 8] = "TouchMove_Departed", r[r.TouchEnd = 9] = "TouchEnd", r[r.TouchCancel = 10] = "TouchCancel", r))(ce || {}), ze = /* @__PURE__ */ ((r) => (r[r.Mouse = 0] = "Mouse", r[r.Pen = 1] = "Pen", r[r.Touch = 2] = "Touch", r))(ze || {}), Wt = /* @__PURE__ */ ((r) => (r[r["2D"] = 0] = "2D", r[r.WebGL = 1] = "WebGL", r[r.WebGL2 = 2] = "WebGL2", r))(Wt || {}), It = /* @__PURE__ */ ((r) => (r[r.Play = 0] = "Play", r[r.Pause = 1] = "Pause", r[r.Seeked = 2] = "Seeked", r[r.VolumeChange = 3] = "VolumeChange", r[r.RateChange = 4] = "RateChange", r))(It || {}), rh = /* @__PURE__ */ ((r) => (r[r.Document = 0] = "Document", r[r.DocumentType = 1] = "DocumentType", r[r.Element = 2] = "Element", r[r.Text = 3] = "Text", r[r.CDATA = 4] = "CDATA", r[r.Comment = 5] = "Comment", r))(rh || {});
function Ul(r) {
  return "__ln" in r;
}
class E1 {
  constructor() {
    C(this, "length", 0), C(this, "head", null), C(this, "tail", null);
  }
  get(e) {
    if (e >= this.length)
      throw new Error("Position outside of list range");
    let t = this.head;
    for (let n = 0; n < e; n++)
      t = (t == null ? void 0 : t.next) || null;
    return t;
  }
  addNode(e) {
    const t = {
      value: e,
      previous: null,
      next: null
    };
    if (e.__ln = t, e.previousSibling && Ul(e.previousSibling)) {
      const n = e.previousSibling.__ln.next;
      t.next = n, t.previous = e.previousSibling.__ln, e.previousSibling.__ln.next = t, n && (n.previous = t);
    } else if (e.nextSibling && Ul(e.nextSibling) && e.nextSibling.__ln.previous) {
      const n = e.nextSibling.__ln.previous;
      t.previous = n, t.next = e.nextSibling.__ln, e.nextSibling.__ln.previous = t, n && (n.next = t);
    } else
      this.head && (this.head.previous = t), t.next = this.head, this.head = t;
    t.next === null && (this.tail = t), this.length++;
  }
  removeNode(e) {
    const t = e.__ln;
    this.head && (t.previous ? (t.previous.next = t.next, t.next ? t.next.previous = t.previous : this.tail = t.previous) : (this.head = t.next, this.head ? this.head.previous = null : this.tail = null), e.__ln && delete e.__ln, this.length--);
  }
}
const Bl = (r, e) => `${r}@${e}`;
class R1 {
  constructor() {
    C(this, "frozen", !1), C(this, "locked", !1), C(this, "texts", []), C(this, "attributes", []), C(this, "attributeMap", /* @__PURE__ */ new WeakMap()), C(this, "removes", []), C(this, "mapRemoves", []), C(this, "movedMap", {}), C(this, "addedSet", /* @__PURE__ */ new Set()), C(this, "movedSet", /* @__PURE__ */ new Set()), C(this, "droppedSet", /* @__PURE__ */ new Set()), C(this, "removesSubTreeCache", /* @__PURE__ */ new Set()), C(this, "mutationCb"), C(this, "blockClass"), C(this, "blockSelector"), C(this, "maskTextClass"), C(this, "maskTextSelector"), C(this, "inlineStylesheet"), C(this, "maskInputOptions"), C(this, "maskTextFn"), C(this, "maskInputFn"), C(this, "keepIframeSrcFn"), C(this, "recordCanvas"), C(this, "inlineImages"), C(this, "slimDOMOptions"), C(this, "dataURLOptions"), C(this, "doc"), C(this, "mirror"), C(this, "iframeManager"), C(this, "stylesheetManager"), C(this, "shadowDomManager"), C(this, "canvasManager"), C(this, "processedNodeManager"), C(this, "unattachedDoc"), C(this, "processMutations", (e) => {
      e.forEach(this.processMutation), this.emit();
    }), C(this, "emit", () => {
      if (this.frozen || this.locked)
        return;
      const e = [], t = /* @__PURE__ */ new Set(), n = new E1(), i = (l) => {
        let u = l, c = gr;
        for (; c === gr; )
          u = u && u.nextSibling, c = u && this.mirror.getId(u);
        return c;
      }, s = (l) => {
        const u = M.parentNode(l);
        if (!u || !th(l))
          return;
        let c = !1;
        if (l.nodeType === Node.TEXT_NODE) {
          const p = u.tagName;
          if (p === "TEXTAREA")
            return;
          p === "STYLE" && this.addedSet.has(u) && (c = !0);
        }
        const f = ir(u) ? this.mirror.getId(eh(l)) : this.mirror.getId(u), d = i(l);
        if (f === -1 || d === -1)
          return n.addNode(l);
        const h = Rt(l, {
          doc: this.doc,
          mirror: this.mirror,
          blockClass: this.blockClass,
          blockSelector: this.blockSelector,
          maskTextClass: this.maskTextClass,
          maskTextSelector: this.maskTextSelector,
          skipChild: !0,
          newlyAddedElement: !0,
          inlineStylesheet: this.inlineStylesheet,
          maskInputOptions: this.maskInputOptions,
          maskTextFn: this.maskTextFn,
          maskInputFn: this.maskInputFn,
          slimDOMOptions: this.slimDOMOptions,
          dataURLOptions: this.dataURLOptions,
          recordCanvas: this.recordCanvas,
          inlineImages: this.inlineImages,
          onSerialize: (p) => {
            qf(p, this.mirror) && this.iframeManager.addIframe(p), Qf(p, this.mirror) && this.stylesheetManager.trackLinkElement(
              p
            ), ro(l) && this.shadowDomManager.addShadowRoot(M.shadowRoot(l), this.doc);
          },
          onIframeLoad: (p, m) => {
            this.iframeManager.attachIframe(p, m), this.shadowDomManager.observeAttachShadow(p);
          },
          onStylesheetLoad: (p, m) => {
            this.stylesheetManager.attachLinkElement(p, m);
          },
          cssCaptured: c
        });
        h && (e.push({
          parentId: f,
          nextId: d,
          node: h
        }), t.add(h.id));
      };
      for (; this.mapRemoves.length; )
        this.mirror.removeNodeFromMap(this.mapRemoves.shift());
      for (const l of this.movedSet)
        Wl(this.removesSubTreeCache, l, this.mirror) && !this.movedSet.has(M.parentNode(l)) || s(l);
      for (const l of this.addedSet)
        !Zl(this.droppedSet, l) && !Wl(this.removesSubTreeCache, l, this.mirror) || Zl(this.movedSet, l) ? s(l) : this.droppedSet.add(l);
      let o = null;
      for (; n.length; ) {
        let l = null;
        if (o) {
          const u = this.mirror.getId(M.parentNode(o.value)), c = i(o.value);
          u !== -1 && c !== -1 && (l = o);
        }
        if (!l) {
          let u = n.tail;
          for (; u; ) {
            const c = u;
            if (u = u.previous, c) {
              const f = this.mirror.getId(M.parentNode(c.value));
              if (i(c.value) === -1) continue;
              if (f !== -1) {
                l = c;
                break;
              } else {
                const h = c.value, p = M.parentNode(h);
                if (p && p.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                  const m = M.host(p);
                  if (this.mirror.getId(m) !== -1) {
                    l = c;
                    break;
                  }
                }
              }
            }
          }
        }
        if (!l) {
          for (; n.head; )
            n.removeNode(n.head.value);
          break;
        }
        o = l.previous, n.removeNode(l.value), s(l.value);
      }
      const a = {
        texts: this.texts.map((l) => {
          const u = l.node, c = M.parentNode(u);
          return c && c.tagName === "TEXTAREA" && this.genTextAreaValueMutation(c), {
            id: this.mirror.getId(u),
            value: l.value
          };
        }).filter((l) => !t.has(l.id)).filter((l) => this.mirror.has(l.id)),
        attributes: this.attributes.map((l) => {
          const { attributes: u } = l;
          if (typeof u.style == "string") {
            const c = JSON.stringify(l.styleDiff), f = JSON.stringify(l._unchangedStyles);
            c.length < u.style.length && (c + f).split("var(").length === u.style.split("var(").length && (u.style = l.styleDiff);
          }
          return {
            id: this.mirror.getId(l.node),
            attributes: u
          };
        }).filter((l) => !t.has(l.id)).filter((l) => this.mirror.has(l.id)),
        removes: this.removes,
        adds: e
      };
      !a.texts.length && !a.attributes.length && !a.removes.length && !a.adds.length || (this.texts = [], this.attributes = [], this.attributeMap = /* @__PURE__ */ new WeakMap(), this.removes = [], this.addedSet = /* @__PURE__ */ new Set(), this.movedSet = /* @__PURE__ */ new Set(), this.droppedSet = /* @__PURE__ */ new Set(), this.removesSubTreeCache = /* @__PURE__ */ new Set(), this.movedMap = {}, this.mutationCb(a));
    }), C(this, "genTextAreaValueMutation", (e) => {
      let t = this.attributeMap.get(e);
      t || (t = {
        node: e,
        attributes: {},
        styleDiff: {},
        _unchangedStyles: {}
      }, this.attributes.push(t), this.attributeMap.set(e, t)), t.attributes.value = Array.from(
        M.childNodes(e),
        (n) => M.textContent(n) || ""
      ).join("");
    }), C(this, "processMutation", (e) => {
      if (!Ji(e.target, this.mirror, this.slimDOMOptions))
        switch (e.type) {
          case "characterData": {
            const t = M.textContent(e.target);
            !ae(e.target, this.blockClass, this.blockSelector, !1) && t !== e.oldValue && this.texts.push({
              value: xc(
                e.target,
                this.maskTextClass,
                this.maskTextSelector,
                !0
                // checkAncestors
              ) && t ? this.maskTextFn ? this.maskTextFn(t, Jf(e.target)) : t.replace(/[\S]/g, "*") : t,
              node: e.target
            });
            break;
          }
          case "attributes": {
            const t = e.target;
            let n = e.attributeName, i = e.target.getAttribute(n);
            if (n === "value") {
              const o = bo(t);
              i = vo({
                element: t,
                maskInputOptions: this.maskInputOptions,
                tagName: t.tagName,
                type: o,
                value: i,
                maskInputFn: this.maskInputFn
              });
            }
            if (ae(e.target, this.blockClass, this.blockSelector, !1) || i === e.oldValue)
              return;
            let s = this.attributeMap.get(e.target);
            if (t.tagName === "IFRAME" && n === "src" && !this.keepIframeSrcFn(i))
              if (!t.contentDocument)
                n = "rr_src";
              else
                return;
            if (s || (s = {
              node: e.target,
              attributes: {},
              styleDiff: {},
              _unchangedStyles: {}
            }, this.attributes.push(s), this.attributeMap.set(e.target, s)), n === "type" && t.tagName === "INPUT" && (e.oldValue || "").toLowerCase() === "password" && t.setAttribute("data-rr-is-password", "true"), !_c(t.tagName, n))
              if (s.attributes[n] = Sc(
                this.doc,
                ft(t.tagName),
                ft(n),
                i
              ), n === "style") {
                if (!this.unattachedDoc)
                  try {
                    this.unattachedDoc = document.implementation.createHTMLDocument();
                  } catch {
                    this.unattachedDoc = this.doc;
                  }
                const o = this.unattachedDoc.createElement("span");
                e.oldValue && o.setAttribute("style", e.oldValue);
                for (const a of Array.from(t.style)) {
                  const l = t.style.getPropertyValue(a), u = t.style.getPropertyPriority(a);
                  l !== o.style.getPropertyValue(a) || u !== o.style.getPropertyPriority(a) ? u === "" ? s.styleDiff[a] = l : s.styleDiff[a] = [l, u] : s._unchangedStyles[a] = [l, u];
                }
                for (const a of Array.from(o.style))
                  t.style.getPropertyValue(a) === "" && (s.styleDiff[a] = !1);
              } else n === "open" && t.tagName === "DIALOG" && (t.matches("dialog:modal") ? s.attributes.rr_open_mode = "modal" : s.attributes.rr_open_mode = "non-modal");
            break;
          }
          case "childList": {
            if (ae(e.target, this.blockClass, this.blockSelector, !0))
              return;
            if (e.target.tagName === "TEXTAREA") {
              this.genTextAreaValueMutation(e.target);
              return;
            }
            e.addedNodes.forEach((t) => this.genAdds(t, e.target)), e.removedNodes.forEach((t) => {
              const n = this.mirror.getId(t), i = ir(e.target) ? this.mirror.getId(M.host(e.target)) : this.mirror.getId(e.target);
              ae(e.target, this.blockClass, this.blockSelector, !1) || Ji(t, this.mirror, this.slimDOMOptions) || !_1(t, this.mirror) || (this.addedSet.has(t) ? (no(this.addedSet, t), this.droppedSet.add(t)) : this.addedSet.has(e.target) && n === -1 || Kf(e.target, this.mirror) || (this.movedSet.has(t) && this.movedMap[Bl(n, i)] ? no(this.movedSet, t) : (this.removes.push({
                parentId: i,
                id: n,
                isShadow: ir(e.target) && sr(e.target) ? !0 : void 0
              }), k1(t, this.removesSubTreeCache))), this.mapRemoves.push(t));
            });
            break;
          }
        }
    }), C(this, "genAdds", (e, t) => {
      if (!this.processedNodeManager.inOtherBuffer(e, this) && !(this.addedSet.has(e) || this.movedSet.has(e))) {
        if (this.mirror.hasNode(e)) {
          if (Ji(e, this.mirror, this.slimDOMOptions))
            return;
          this.movedSet.add(e);
          let n = null;
          t && this.mirror.hasNode(t) && (n = this.mirror.getId(t)), n && n !== -1 && (this.movedMap[Bl(this.mirror.getId(e), n)] = !0);
        } else
          this.addedSet.add(e), this.droppedSet.delete(e);
        ae(e, this.blockClass, this.blockSelector, !1) || (M.childNodes(e).forEach((n) => this.genAdds(n)), ro(e) && M.childNodes(M.shadowRoot(e)).forEach((n) => {
          this.processedNodeManager.add(n, this), this.genAdds(n, e);
        }));
      }
    });
  }
  init(e) {
    [
      "mutationCb",
      "blockClass",
      "blockSelector",
      "maskTextClass",
      "maskTextSelector",
      "inlineStylesheet",
      "maskInputOptions",
      "maskTextFn",
      "maskInputFn",
      "keepIframeSrcFn",
      "recordCanvas",
      "inlineImages",
      "slimDOMOptions",
      "dataURLOptions",
      "doc",
      "mirror",
      "iframeManager",
      "stylesheetManager",
      "shadowDomManager",
      "canvasManager",
      "processedNodeManager"
    ].forEach((t) => {
      this[t] = e[t];
    });
  }
  freeze() {
    this.frozen = !0, this.canvasManager.freeze();
  }
  unfreeze() {
    this.frozen = !1, this.canvasManager.unfreeze(), this.emit();
  }
  isFrozen() {
    return this.frozen;
  }
  lock() {
    this.locked = !0, this.canvasManager.lock();
  }
  unlock() {
    this.locked = !1, this.canvasManager.unlock(), this.emit();
  }
  reset() {
    this.shadowDomManager.reset(), this.canvasManager.reset();
  }
}
function no(r, e) {
  r.delete(e), M.childNodes(e).forEach((t) => no(r, t));
}
function k1(r, e) {
  const t = [r];
  for (; t.length; ) {
    const n = t.pop();
    e.has(n) || (e.add(n), M.childNodes(n).forEach((i) => t.push(i)));
  }
}
function Wl(r, e, t) {
  return r.size === 0 ? !1 : O1(r, e);
}
function O1(r, e, t) {
  const n = M.parentNode(e);
  return n ? r.has(n) : !1;
}
function Zl(r, e) {
  return r.size === 0 ? !1 : nh(r, e);
}
function nh(r, e) {
  const t = M.parentNode(e);
  return t ? r.has(t) ? !0 : nh(r, t) : !1;
}
let or;
function M1(r) {
  or = r;
}
function $1() {
  or = void 0;
}
const N = (r) => or ? (...t) => {
  try {
    return r(...t);
  } catch (n) {
    if (or && or(n) === !0)
      return;
    throw n;
  }
} : r, ot = [];
function Fr(r) {
  try {
    if ("composedPath" in r) {
      const e = r.composedPath();
      if (e.length)
        return e[0];
    } else if ("path" in r && r.path.length)
      return r.path[0];
  } catch {
  }
  return r && r.target;
}
function ih(r, e) {
  const t = new R1();
  ot.push(t), t.init(r);
  const n = new (Vf())(
    N(t.processMutations.bind(t))
  );
  return n.observe(e, {
    attributes: !0,
    attributeOldValue: !0,
    characterData: !0,
    characterDataOldValue: !0,
    childList: !0,
    subtree: !0
  }), n;
}
function P1({
  mousemoveCb: r,
  sampling: e,
  doc: t,
  mirror: n
}) {
  if (e.mousemove === !1)
    return () => {
    };
  const i = typeof e.mousemove == "number" ? e.mousemove : 50, s = typeof e.mousemoveCallback == "number" ? e.mousemoveCallback : 500;
  let o = [], a;
  const l = Ir(
    N(
      (f) => {
        const d = Date.now() - a;
        r(
          o.map((h) => (h.timeOffset -= d, h)),
          f
        ), o = [], a = null;
      }
    ),
    s
  ), u = N(
    Ir(
      N((f) => {
        const d = Fr(f), { clientX: h, clientY: p } = to(f) ? f.changedTouches[0] : f;
        a || (a = Hn()), o.push({
          x: h,
          y: p,
          id: n.getId(d),
          timeOffset: Hn() - a
        }), l(
          typeof DragEvent < "u" && f instanceof DragEvent ? $.Drag : f instanceof MouseEvent ? $.MouseMove : $.TouchMove
        );
      }),
      i,
      {
        trailing: !1
      }
    )
  ), c = [
    oe("mousemove", u, t),
    oe("touchmove", u, t),
    oe("drag", u, t)
  ];
  return N(() => {
    c.forEach((f) => f());
  });
}
function N1({
  mouseInteractionCb: r,
  doc: e,
  mirror: t,
  blockClass: n,
  blockSelector: i,
  sampling: s
}) {
  if (s.mouseInteraction === !1)
    return () => {
    };
  const o = s.mouseInteraction === !0 || s.mouseInteraction === void 0 ? {} : s.mouseInteraction, a = [];
  let l = null;
  const u = (c) => (f) => {
    const d = Fr(f);
    if (ae(d, n, i, !0))
      return;
    let h = null, p = c;
    if ("pointerType" in f) {
      switch (f.pointerType) {
        case "mouse":
          h = ze.Mouse;
          break;
        case "touch":
          h = ze.Touch;
          break;
        case "pen":
          h = ze.Pen;
          break;
      }
      h === ze.Touch ? ce[c] === ce.MouseDown ? p = "TouchStart" : ce[c] === ce.MouseUp && (p = "TouchEnd") : ze.Pen;
    } else to(f) && (h = ze.Touch);
    h !== null ? (l = h, (p.startsWith("Touch") && h === ze.Touch || p.startsWith("Mouse") && h === ze.Mouse) && (h = null)) : ce[c] === ce.Click && (h = l, l = null);
    const m = to(f) ? f.changedTouches[0] : f;
    if (!m)
      return;
    const g = t.getId(d), { clientX: v, clientY: b } = m;
    N(r)({
      type: ce[p],
      id: g,
      x: v,
      y: b,
      ...h !== null && { pointerType: h }
    });
  };
  return Object.keys(ce).filter(
    (c) => Number.isNaN(Number(c)) && !c.endsWith("_Departed") && o[c] !== !1
  ).forEach((c) => {
    let f = ft(c);
    const d = u(c);
    if (window.PointerEvent)
      switch (ce[c]) {
        case ce.MouseDown:
        case ce.MouseUp:
          f = f.replace(
            "mouse",
            "pointer"
          );
          break;
        case ce.TouchStart:
        case ce.TouchEnd:
          return;
      }
    a.push(oe(f, d, e));
  }), N(() => {
    a.forEach((c) => c());
  });
}
function sh({
  scrollCb: r,
  doc: e,
  mirror: t,
  blockClass: n,
  blockSelector: i,
  sampling: s
}) {
  const o = N(
    Ir(
      N((a) => {
        const l = Fr(a);
        if (!l || ae(l, n, i, !0))
          return;
        const u = t.getId(l);
        if (l === e && e.defaultView) {
          const c = Hf(e.defaultView);
          r({
            id: u,
            x: c.left,
            y: c.top
          });
        } else
          r({
            id: u,
            x: l.scrollLeft,
            y: l.scrollTop
          });
      }),
      s.scroll || 100
    )
  );
  return oe("scroll", o, e);
}
function L1({ viewportResizeCb: r }, { win: e }) {
  let t = -1, n = -1;
  const i = N(
    Ir(
      N(() => {
        const s = Yf(), o = Xf();
        (t !== s || n !== o) && (r({
          width: Number(o),
          height: Number(s)
        }), t = s, n = o);
      }),
      200
    )
  );
  return oe("resize", i, e);
}
const T1 = ["INPUT", "TEXTAREA", "SELECT"], jl = /* @__PURE__ */ new WeakMap();
function D1({
  inputCb: r,
  doc: e,
  mirror: t,
  blockClass: n,
  blockSelector: i,
  ignoreClass: s,
  ignoreSelector: o,
  maskInputOptions: a,
  maskInputFn: l,
  sampling: u,
  userTriggeredOnInput: c
}) {
  function f(b) {
    let y = Fr(b);
    const w = b.isTrusted, _ = y && y.tagName;
    if (y && _ === "OPTION" && (y = M.parentElement(y)), !y || !_ || T1.indexOf(_) < 0 || ae(y, n, i, !0) || y.classList.contains(s) || o && y.matches(o))
      return;
    let E = y.value, x = !1;
    const S = bo(y) || "";
    S === "radio" || S === "checkbox" ? x = y.checked : (a[_.toLowerCase()] || a[S]) && (E = vo({
      element: y,
      maskInputOptions: a,
      tagName: _,
      type: S,
      value: E,
      maskInputFn: l
    })), d(
      y,
      c ? { text: E, isChecked: x, userTriggered: w } : { text: E, isChecked: x }
    );
    const A = y.name;
    S === "radio" && A && x && e.querySelectorAll(`input[type="radio"][name="${A}"]`).forEach((I) => {
      if (I !== y) {
        const R = I.value;
        d(
          I,
          c ? { text: R, isChecked: !x, userTriggered: !1 } : { text: R, isChecked: !x }
        );
      }
    });
  }
  function d(b, y) {
    const w = jl.get(b);
    if (!w || w.text !== y.text || w.isChecked !== y.isChecked) {
      jl.set(b, y);
      const _ = t.getId(b);
      N(r)({
        ...y,
        id: _
      });
    }
  }
  const p = (u.input === "last" ? ["change"] : ["input", "change"]).map(
    (b) => oe(b, N(f), e)
  ), m = e.defaultView;
  if (!m)
    return () => {
      p.forEach((b) => b());
    };
  const g = m.Object.getOwnPropertyDescriptor(
    m.HTMLInputElement.prototype,
    "value"
  ), v = [
    [m.HTMLInputElement.prototype, "value"],
    [m.HTMLInputElement.prototype, "checked"],
    [m.HTMLSelectElement.prototype, "value"],
    [m.HTMLTextAreaElement.prototype, "value"],
    // Some UI library use selectedIndex to set select value
    [m.HTMLSelectElement.prototype, "selectedIndex"],
    [m.HTMLOptionElement.prototype, "selected"]
  ];
  return g && g.set && p.push(
    ...v.map(
      (b) => fi(
        b[0],
        b[1],
        {
          set() {
            N(f)({
              target: this,
              isTrusted: !1
              // userTriggered to false as this could well be programmatic
            });
          }
        },
        !1,
        m
      )
    )
  ), N(() => {
    p.forEach((b) => b());
  });
}
function Yn(r) {
  const e = [];
  function t(n, i) {
    if (vn("CSSGroupingRule") && n.parentRule instanceof CSSGroupingRule || vn("CSSMediaRule") && n.parentRule instanceof CSSMediaRule || vn("CSSSupportsRule") && n.parentRule instanceof CSSSupportsRule || vn("CSSConditionRule") && n.parentRule instanceof CSSConditionRule) {
      const o = Array.from(
        n.parentRule.cssRules
      ).indexOf(n);
      i.unshift(o);
    } else if (n.parentStyleSheet) {
      const o = Array.from(n.parentStyleSheet.cssRules).indexOf(n);
      i.unshift(o);
    }
    return i;
  }
  return t(r, e);
}
function Ve(r, e, t) {
  let n, i;
  return r ? (r.ownerNode ? n = e.getId(r.ownerNode) : i = t.getId(r), {
    styleId: i,
    id: n
  }) : {};
}
function F1({ styleSheetRuleCb: r, mirror: e, stylesheetManager: t }, { win: n }) {
  if (!n.CSSStyleSheet || !n.CSSStyleSheet.prototype)
    return () => {
    };
  const i = n.CSSStyleSheet.prototype.insertRule;
  n.CSSStyleSheet.prototype.insertRule = new Proxy(i, {
    apply: N(
      (c, f, d) => {
        const [h, p] = d, { id: m, styleId: g } = Ve(
          f,
          e,
          t.styleMirror
        );
        return (m && m !== -1 || g && g !== -1) && r({
          id: m,
          styleId: g,
          adds: [{ rule: h, index: p }]
        }), c.apply(f, d);
      }
    )
  }), n.CSSStyleSheet.prototype.addRule = function(c, f, d = this.cssRules.length) {
    const h = `${c} { ${f} }`;
    return n.CSSStyleSheet.prototype.insertRule.apply(this, [h, d]);
  };
  const s = n.CSSStyleSheet.prototype.deleteRule;
  n.CSSStyleSheet.prototype.deleteRule = new Proxy(s, {
    apply: N(
      (c, f, d) => {
        const [h] = d, { id: p, styleId: m } = Ve(
          f,
          e,
          t.styleMirror
        );
        return (p && p !== -1 || m && m !== -1) && r({
          id: p,
          styleId: m,
          removes: [{ index: h }]
        }), c.apply(f, d);
      }
    )
  }), n.CSSStyleSheet.prototype.removeRule = function(c) {
    return n.CSSStyleSheet.prototype.deleteRule.apply(this, [c]);
  };
  let o;
  n.CSSStyleSheet.prototype.replace && (o = n.CSSStyleSheet.prototype.replace, n.CSSStyleSheet.prototype.replace = new Proxy(o, {
    apply: N(
      (c, f, d) => {
        const [h] = d, { id: p, styleId: m } = Ve(
          f,
          e,
          t.styleMirror
        );
        return (p && p !== -1 || m && m !== -1) && r({
          id: p,
          styleId: m,
          replace: h
        }), c.apply(f, d);
      }
    )
  }));
  let a;
  n.CSSStyleSheet.prototype.replaceSync && (a = n.CSSStyleSheet.prototype.replaceSync, n.CSSStyleSheet.prototype.replaceSync = new Proxy(a, {
    apply: N(
      (c, f, d) => {
        const [h] = d, { id: p, styleId: m } = Ve(
          f,
          e,
          t.styleMirror
        );
        return (p && p !== -1 || m && m !== -1) && r({
          id: p,
          styleId: m,
          replaceSync: h
        }), c.apply(f, d);
      }
    )
  }));
  const l = {};
  bn("CSSGroupingRule") ? l.CSSGroupingRule = n.CSSGroupingRule : (bn("CSSMediaRule") && (l.CSSMediaRule = n.CSSMediaRule), bn("CSSConditionRule") && (l.CSSConditionRule = n.CSSConditionRule), bn("CSSSupportsRule") && (l.CSSSupportsRule = n.CSSSupportsRule));
  const u = {};
  return Object.entries(l).forEach(([c, f]) => {
    u[c] = {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      insertRule: f.prototype.insertRule,
      // eslint-disable-next-line @typescript-eslint/unbound-method
      deleteRule: f.prototype.deleteRule
    }, f.prototype.insertRule = new Proxy(
      u[c].insertRule,
      {
        apply: N(
          (d, h, p) => {
            const [m, g] = p, { id: v, styleId: b } = Ve(
              h.parentStyleSheet,
              e,
              t.styleMirror
            );
            return (v && v !== -1 || b && b !== -1) && r({
              id: v,
              styleId: b,
              adds: [
                {
                  rule: m,
                  index: [
                    ...Yn(h),
                    g || 0
                    // defaults to 0
                  ]
                }
              ]
            }), d.apply(h, p);
          }
        )
      }
    ), f.prototype.deleteRule = new Proxy(
      u[c].deleteRule,
      {
        apply: N(
          (d, h, p) => {
            const [m] = p, { id: g, styleId: v } = Ve(
              h.parentStyleSheet,
              e,
              t.styleMirror
            );
            return (g && g !== -1 || v && v !== -1) && r({
              id: g,
              styleId: v,
              removes: [
                { index: [...Yn(h), m] }
              ]
            }), d.apply(h, p);
          }
        )
      }
    );
  }), N(() => {
    n.CSSStyleSheet.prototype.insertRule = i, n.CSSStyleSheet.prototype.deleteRule = s, o && (n.CSSStyleSheet.prototype.replace = o), a && (n.CSSStyleSheet.prototype.replaceSync = a), Object.entries(l).forEach(([c, f]) => {
      f.prototype.insertRule = u[c].insertRule, f.prototype.deleteRule = u[c].deleteRule;
    });
  });
}
function oh({
  mirror: r,
  stylesheetManager: e
}, t) {
  var n, i, s;
  let o = null;
  t.nodeName === "#document" ? o = r.getId(t) : o = r.getId(M.host(t));
  const a = t.nodeName === "#document" ? (n = t.defaultView) == null ? void 0 : n.Document : (s = (i = t.ownerDocument) == null ? void 0 : i.defaultView) == null ? void 0 : s.ShadowRoot, l = a != null && a.prototype ? Object.getOwnPropertyDescriptor(
    a == null ? void 0 : a.prototype,
    "adoptedStyleSheets"
  ) : void 0;
  return o === null || o === -1 || !a || !l ? () => {
  } : (Object.defineProperty(t, "adoptedStyleSheets", {
    configurable: l.configurable,
    enumerable: l.enumerable,
    get() {
      var u;
      return (u = l.get) == null ? void 0 : u.call(this);
    },
    set(u) {
      var c;
      const f = (c = l.set) == null ? void 0 : c.call(this, u);
      if (o !== null && o !== -1)
        try {
          e.adoptStyleSheets(u, o);
        } catch {
        }
      return f;
    }
  }), N(() => {
    Object.defineProperty(t, "adoptedStyleSheets", {
      configurable: l.configurable,
      enumerable: l.enumerable,
      // eslint-disable-next-line @typescript-eslint/unbound-method
      get: l.get,
      // eslint-disable-next-line @typescript-eslint/unbound-method
      set: l.set
    });
  }));
}
function z1({
  styleDeclarationCb: r,
  mirror: e,
  ignoreCSSAttributes: t,
  stylesheetManager: n
}, { win: i }) {
  const s = i.CSSStyleDeclaration.prototype.setProperty;
  i.CSSStyleDeclaration.prototype.setProperty = new Proxy(s, {
    apply: N(
      (a, l, u) => {
        var c;
        const [f, d, h] = u;
        if (t.has(f))
          return s.apply(l, [f, d, h]);
        const { id: p, styleId: m } = Ve(
          (c = l.parentRule) == null ? void 0 : c.parentStyleSheet,
          e,
          n.styleMirror
        );
        return (p && p !== -1 || m && m !== -1) && r({
          id: p,
          styleId: m,
          set: {
            property: f,
            value: d,
            priority: h
          },
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          index: Yn(l.parentRule)
        }), a.apply(l, u);
      }
    )
  });
  const o = i.CSSStyleDeclaration.prototype.removeProperty;
  return i.CSSStyleDeclaration.prototype.removeProperty = new Proxy(o, {
    apply: N(
      (a, l, u) => {
        var c;
        const [f] = u;
        if (t.has(f))
          return o.apply(l, [f]);
        const { id: d, styleId: h } = Ve(
          (c = l.parentRule) == null ? void 0 : c.parentStyleSheet,
          e,
          n.styleMirror
        );
        return (d && d !== -1 || h && h !== -1) && r({
          id: d,
          styleId: h,
          remove: {
            property: f
          },
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          index: Yn(l.parentRule)
        }), a.apply(l, u);
      }
    )
  }), N(() => {
    i.CSSStyleDeclaration.prototype.setProperty = s, i.CSSStyleDeclaration.prototype.removeProperty = o;
  });
}
function U1({
  mediaInteractionCb: r,
  blockClass: e,
  blockSelector: t,
  mirror: n,
  sampling: i,
  doc: s
}) {
  const o = N(
    (l) => Ir(
      N((u) => {
        const c = Fr(u);
        if (!c || ae(c, e, t, !0))
          return;
        const { currentTime: f, volume: d, muted: h, playbackRate: p, loop: m } = c;
        r({
          type: l,
          id: n.getId(c),
          currentTime: f,
          volume: d,
          muted: h,
          playbackRate: p,
          loop: m
        });
      }),
      i.media || 500
    )
  ), a = [
    oe("play", o(It.Play), s),
    oe("pause", o(It.Pause), s),
    oe("seeked", o(It.Seeked), s),
    oe("volumechange", o(It.VolumeChange), s),
    oe("ratechange", o(It.RateChange), s)
  ];
  return N(() => {
    a.forEach((l) => l());
  });
}
function B1({ fontCb: r, doc: e }) {
  const t = e.defaultView;
  if (!t)
    return () => {
    };
  const n = [], i = /* @__PURE__ */ new WeakMap(), s = t.FontFace;
  t.FontFace = function(l, u, c) {
    const f = new s(l, u, c);
    return i.set(f, {
      family: l,
      buffer: typeof u != "string",
      descriptors: c,
      fontSource: typeof u == "string" ? u : JSON.stringify(Array.from(new Uint8Array(u)))
    }), f;
  };
  const o = Ht(
    e.fonts,
    "add",
    function(a) {
      return function(l) {
        return setTimeout(
          N(() => {
            const u = i.get(l);
            u && (r(u), i.delete(l));
          }),
          0
        ), a.apply(this, [l]);
      };
    }
  );
  return n.push(() => {
    t.FontFace = s;
  }), n.push(o), N(() => {
    n.forEach((a) => a());
  });
}
function W1(r) {
  const { doc: e, mirror: t, blockClass: n, blockSelector: i, selectionCb: s } = r;
  let o = !0;
  const a = N(() => {
    const l = e.getSelection();
    if (!l || o && (l != null && l.isCollapsed)) return;
    o = l.isCollapsed || !1;
    const u = [], c = l.rangeCount || 0;
    for (let f = 0; f < c; f++) {
      const d = l.getRangeAt(f), { startContainer: h, startOffset: p, endContainer: m, endOffset: g } = d;
      ae(h, n, i, !0) || ae(m, n, i, !0) || u.push({
        start: t.getId(h),
        startOffset: p,
        end: t.getId(m),
        endOffset: g
      });
    }
    s({ ranges: u });
  });
  return a(), oe("selectionchange", a);
}
function Z1({
  doc: r,
  customElementCb: e
}) {
  const t = r.defaultView;
  return !t || !t.customElements ? () => {
  } : Ht(
    t.customElements,
    "define",
    function(i) {
      return function(s, o, a) {
        try {
          e({
            define: {
              name: s
            }
          });
        } catch {
          console.warn(`Custom element callback failed for ${s}`);
        }
        return i.apply(this, [s, o, a]);
      };
    }
  );
}
function j1(r, e) {
  const {
    mutationCb: t,
    mousemoveCb: n,
    mouseInteractionCb: i,
    scrollCb: s,
    viewportResizeCb: o,
    inputCb: a,
    mediaInteractionCb: l,
    styleSheetRuleCb: u,
    styleDeclarationCb: c,
    canvasMutationCb: f,
    fontCb: d,
    selectionCb: h,
    customElementCb: p
  } = r;
  r.mutationCb = (...m) => {
    e.mutation && e.mutation(...m), t(...m);
  }, r.mousemoveCb = (...m) => {
    e.mousemove && e.mousemove(...m), n(...m);
  }, r.mouseInteractionCb = (...m) => {
    e.mouseInteraction && e.mouseInteraction(...m), i(...m);
  }, r.scrollCb = (...m) => {
    e.scroll && e.scroll(...m), s(...m);
  }, r.viewportResizeCb = (...m) => {
    e.viewportResize && e.viewportResize(...m), o(...m);
  }, r.inputCb = (...m) => {
    e.input && e.input(...m), a(...m);
  }, r.mediaInteractionCb = (...m) => {
    e.mediaInteaction && e.mediaInteaction(...m), l(...m);
  }, r.styleSheetRuleCb = (...m) => {
    e.styleSheetRule && e.styleSheetRule(...m), u(...m);
  }, r.styleDeclarationCb = (...m) => {
    e.styleDeclaration && e.styleDeclaration(...m), c(...m);
  }, r.canvasMutationCb = (...m) => {
    e.canvasMutation && e.canvasMutation(...m), f(...m);
  }, r.fontCb = (...m) => {
    e.font && e.font(...m), d(...m);
  }, r.selectionCb = (...m) => {
    e.selection && e.selection(...m), h(...m);
  }, r.customElementCb = (...m) => {
    e.customElement && e.customElement(...m), p(...m);
  };
}
function G1(r, e = {}) {
  const t = r.doc.defaultView;
  if (!t)
    return () => {
    };
  j1(r, e);
  let n;
  r.recordDOM && (n = ih(r, r.doc));
  const i = P1(r), s = N1(r), o = sh(r), a = L1(r, {
    win: t
  }), l = D1(r), u = U1(r);
  let c = () => {
  }, f = () => {
  }, d = () => {
  }, h = () => {
  };
  r.recordDOM && (c = F1(r, { win: t }), f = oh(r, r.doc), d = z1(r, {
    win: t
  }), r.collectFonts && (h = B1(r)));
  const p = W1(r), m = Z1(r), g = [];
  for (const v of r.plugins)
    g.push(
      v.observer(v.callback, t, v.options)
    );
  return N(() => {
    ot.forEach((v) => v.reset()), n == null || n.disconnect(), i(), s(), o(), a(), l(), u(), c(), f(), d(), h(), p(), m(), g.forEach((v) => v());
  });
}
function vn(r) {
  return typeof window[r] < "u";
}
function bn(r) {
  return !!(typeof window[r] < "u" && // Note: Generally, this check _shouldn't_ be necessary
  // However, in some scenarios (e.g. jsdom) this can sometimes fail, so we check for it here
  window[r].prototype && "insertRule" in window[r].prototype && "deleteRule" in window[r].prototype);
}
class Gl {
  constructor(e) {
    C(this, "iframeIdToRemoteIdMap", /* @__PURE__ */ new WeakMap()), C(this, "iframeRemoteIdToIdMap", /* @__PURE__ */ new WeakMap()), this.generateIdFn = e;
  }
  getId(e, t, n, i) {
    const s = n || this.getIdToRemoteIdMap(e), o = i || this.getRemoteIdToIdMap(e);
    let a = s.get(t);
    return a || (a = this.generateIdFn(), s.set(t, a), o.set(a, t)), a;
  }
  getIds(e, t) {
    const n = this.getIdToRemoteIdMap(e), i = this.getRemoteIdToIdMap(e);
    return t.map(
      (s) => this.getId(e, s, n, i)
    );
  }
  getRemoteId(e, t, n) {
    const i = n || this.getRemoteIdToIdMap(e);
    if (typeof t != "number") return t;
    const s = i.get(t);
    return s || -1;
  }
  getRemoteIds(e, t) {
    const n = this.getRemoteIdToIdMap(e);
    return t.map((i) => this.getRemoteId(e, i, n));
  }
  reset(e) {
    if (!e) {
      this.iframeIdToRemoteIdMap = /* @__PURE__ */ new WeakMap(), this.iframeRemoteIdToIdMap = /* @__PURE__ */ new WeakMap();
      return;
    }
    this.iframeIdToRemoteIdMap.delete(e), this.iframeRemoteIdToIdMap.delete(e);
  }
  getIdToRemoteIdMap(e) {
    let t = this.iframeIdToRemoteIdMap.get(e);
    return t || (t = /* @__PURE__ */ new Map(), this.iframeIdToRemoteIdMap.set(e, t)), t;
  }
  getRemoteIdToIdMap(e) {
    let t = this.iframeRemoteIdToIdMap.get(e);
    return t || (t = /* @__PURE__ */ new Map(), this.iframeRemoteIdToIdMap.set(e, t)), t;
  }
}
class V1 {
  constructor(e) {
    C(this, "iframes", /* @__PURE__ */ new WeakMap()), C(this, "crossOriginIframeMap", /* @__PURE__ */ new WeakMap()), C(this, "crossOriginIframeMirror", new Gl(bc)), C(this, "crossOriginIframeStyleMirror"), C(this, "crossOriginIframeRootIdMap", /* @__PURE__ */ new WeakMap()), C(this, "mirror"), C(this, "mutationCb"), C(this, "wrappedEmit"), C(this, "loadListener"), C(this, "stylesheetManager"), C(this, "recordCrossOriginIframes"), this.mutationCb = e.mutationCb, this.wrappedEmit = e.wrappedEmit, this.stylesheetManager = e.stylesheetManager, this.recordCrossOriginIframes = e.recordCrossOriginIframes, this.crossOriginIframeStyleMirror = new Gl(
      this.stylesheetManager.styleMirror.generateId.bind(
        this.stylesheetManager.styleMirror
      )
    ), this.mirror = e.mirror, this.recordCrossOriginIframes && window.addEventListener("message", this.handleMessage.bind(this));
  }
  addIframe(e) {
    this.iframes.set(e, !0), e.contentWindow && this.crossOriginIframeMap.set(e.contentWindow, e);
  }
  addLoadListener(e) {
    this.loadListener = e;
  }
  attachIframe(e, t) {
    var n, i;
    this.mutationCb({
      adds: [
        {
          parentId: this.mirror.getId(e),
          nextId: null,
          node: t
        }
      ],
      removes: [],
      texts: [],
      attributes: [],
      isAttachIframe: !0
    }), this.recordCrossOriginIframes && ((n = e.contentWindow) == null || n.addEventListener(
      "message",
      this.handleMessage.bind(this)
    )), (i = this.loadListener) == null || i.call(this, e), e.contentDocument && e.contentDocument.adoptedStyleSheets && e.contentDocument.adoptedStyleSheets.length > 0 && this.stylesheetManager.adoptStyleSheets(
      e.contentDocument.adoptedStyleSheets,
      this.mirror.getId(e.contentDocument)
    );
  }
  handleMessage(e) {
    const t = e;
    if (t.data.type !== "rrweb" || // To filter out the rrweb messages which are forwarded by some sites.
    t.origin !== t.data.origin || !e.source) return;
    const i = this.crossOriginIframeMap.get(e.source);
    if (!i) return;
    const s = this.transformCrossOriginEvent(
      i,
      t.data.event
    );
    s && this.wrappedEmit(
      s,
      t.data.isCheckout
    );
  }
  transformCrossOriginEvent(e, t) {
    var n;
    switch (t.type) {
      case L.FullSnapshot: {
        this.crossOriginIframeMirror.reset(e), this.crossOriginIframeStyleMirror.reset(e), this.replaceIdOnNode(t.data.node, e);
        const i = t.data.node.id;
        return this.crossOriginIframeRootIdMap.set(e, i), this.patchRootIdOnNode(t.data.node, i), {
          timestamp: t.timestamp,
          type: L.IncrementalSnapshot,
          data: {
            source: $.Mutation,
            adds: [
              {
                parentId: this.mirror.getId(e),
                nextId: null,
                node: t.data.node
              }
            ],
            removes: [],
            texts: [],
            attributes: [],
            isAttachIframe: !0
          }
        };
      }
      case L.Meta:
      case L.Load:
      case L.DomContentLoaded:
        return !1;
      case L.Plugin:
        return t;
      case L.Custom:
        return this.replaceIds(
          t.data.payload,
          e,
          ["id", "parentId", "previousId", "nextId"]
        ), t;
      case L.IncrementalSnapshot:
        switch (t.data.source) {
          case $.Mutation:
            return t.data.adds.forEach((i) => {
              this.replaceIds(i, e, [
                "parentId",
                "nextId",
                "previousId"
              ]), this.replaceIdOnNode(i.node, e);
              const s = this.crossOriginIframeRootIdMap.get(e);
              s && this.patchRootIdOnNode(i.node, s);
            }), t.data.removes.forEach((i) => {
              this.replaceIds(i, e, ["parentId", "id"]);
            }), t.data.attributes.forEach((i) => {
              this.replaceIds(i, e, ["id"]);
            }), t.data.texts.forEach((i) => {
              this.replaceIds(i, e, ["id"]);
            }), t;
          case $.Drag:
          case $.TouchMove:
          case $.MouseMove:
            return t.data.positions.forEach((i) => {
              this.replaceIds(i, e, ["id"]);
            }), t;
          case $.ViewportResize:
            return !1;
          case $.MediaInteraction:
          case $.MouseInteraction:
          case $.Scroll:
          case $.CanvasMutation:
          case $.Input:
            return this.replaceIds(t.data, e, ["id"]), t;
          case $.StyleSheetRule:
          case $.StyleDeclaration:
            return this.replaceIds(t.data, e, ["id"]), this.replaceStyleIds(t.data, e, ["styleId"]), t;
          case $.Font:
            return t;
          case $.Selection:
            return t.data.ranges.forEach((i) => {
              this.replaceIds(i, e, ["start", "end"]);
            }), t;
          case $.AdoptedStyleSheet:
            return this.replaceIds(t.data, e, ["id"]), this.replaceStyleIds(t.data, e, ["styleIds"]), (n = t.data.styles) == null || n.forEach((i) => {
              this.replaceStyleIds(i, e, ["styleId"]);
            }), t;
        }
    }
    return !1;
  }
  replace(e, t, n, i) {
    for (const s of i)
      !Array.isArray(t[s]) && typeof t[s] != "number" || (Array.isArray(t[s]) ? t[s] = e.getIds(
        n,
        t[s]
      ) : t[s] = e.getId(n, t[s]));
    return t;
  }
  replaceIds(e, t, n) {
    return this.replace(this.crossOriginIframeMirror, e, t, n);
  }
  replaceStyleIds(e, t, n) {
    return this.replace(this.crossOriginIframeStyleMirror, e, t, n);
  }
  replaceIdOnNode(e, t) {
    this.replaceIds(e, t, ["id", "rootId"]), "childNodes" in e && e.childNodes.forEach((n) => {
      this.replaceIdOnNode(n, t);
    });
  }
  patchRootIdOnNode(e, t) {
    e.type !== rh.Document && !e.rootId && (e.rootId = t), "childNodes" in e && e.childNodes.forEach((n) => {
      this.patchRootIdOnNode(n, t);
    });
  }
}
class H1 {
  constructor(e) {
    C(this, "shadowDoms", /* @__PURE__ */ new WeakSet()), C(this, "mutationCb"), C(this, "scrollCb"), C(this, "bypassOptions"), C(this, "mirror"), C(this, "restoreHandlers", []), this.mutationCb = e.mutationCb, this.scrollCb = e.scrollCb, this.bypassOptions = e.bypassOptions, this.mirror = e.mirror, this.init();
  }
  init() {
    this.reset(), this.patchAttachShadow(Element, document);
  }
  addShadowRoot(e, t) {
    if (!sr(e) || this.shadowDoms.has(e)) return;
    this.shadowDoms.add(e);
    const n = ih(
      {
        ...this.bypassOptions,
        doc: t,
        mutationCb: this.mutationCb,
        mirror: this.mirror,
        shadowDomManager: this
      },
      e
    );
    this.restoreHandlers.push(() => n.disconnect()), this.restoreHandlers.push(
      sh({
        ...this.bypassOptions,
        scrollCb: this.scrollCb,
        // https://gist.github.com/praveenpuglia/0832da687ed5a5d7a0907046c9ef1813
        // scroll is not allowed to pass the boundary, so we need to listen the shadow document
        doc: e,
        mirror: this.mirror
      })
    ), setTimeout(() => {
      e.adoptedStyleSheets && e.adoptedStyleSheets.length > 0 && this.bypassOptions.stylesheetManager.adoptStyleSheets(
        e.adoptedStyleSheets,
        this.mirror.getId(M.host(e))
      ), this.restoreHandlers.push(
        oh(
          {
            mirror: this.mirror,
            stylesheetManager: this.bypassOptions.stylesheetManager
          },
          e
        )
      );
    }, 0);
  }
  /**
   * Monkey patch 'attachShadow' of an IFrameElement to observe newly added shadow doms.
   */
  observeAttachShadow(e) {
    !e.contentWindow || !e.contentDocument || this.patchAttachShadow(
      e.contentWindow.Element,
      e.contentDocument
    );
  }
  /**
   * Patch 'attachShadow' to observe newly added shadow doms.
   */
  patchAttachShadow(e, t) {
    const n = this;
    this.restoreHandlers.push(
      Ht(
        e.prototype,
        "attachShadow",
        function(i) {
          return function(s) {
            const o = i.call(this, s), a = M.shadowRoot(this);
            return a && th(this) && n.addShadowRoot(a, t), o;
          };
        }
      )
    );
  }
  reset() {
    this.restoreHandlers.forEach((e) => {
      try {
        e();
      } catch {
      }
    }), this.restoreHandlers = [], this.shadowDoms = /* @__PURE__ */ new WeakSet();
  }
}
var kt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Y1 = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Sn = 0; Sn < kt.length; Sn++)
  Y1[kt.charCodeAt(Sn)] = Sn;
var X1 = function(r) {
  var e = new Uint8Array(r), t, n = e.length, i = "";
  for (t = 0; t < n; t += 3)
    i += kt[e[t] >> 2], i += kt[(e[t] & 3) << 4 | e[t + 1] >> 4], i += kt[(e[t + 1] & 15) << 2 | e[t + 2] >> 6], i += kt[e[t + 2] & 63];
  return n % 3 === 2 ? i = i.substring(0, i.length - 1) + "=" : n % 3 === 1 && (i = i.substring(0, i.length - 2) + "=="), i;
};
const Vl = /* @__PURE__ */ new Map();
function J1(r, e) {
  let t = Vl.get(r);
  return t || (t = /* @__PURE__ */ new Map(), Vl.set(r, t)), t.has(e) || t.set(e, []), t.get(e);
}
const ah = (r, e, t) => {
  if (!r || !(uh(r, e) || typeof r == "object"))
    return;
  const n = r.constructor.name, i = J1(t, n);
  let s = i.indexOf(r);
  return s === -1 && (s = i.length, i.push(r)), s;
};
function kn(r, e, t) {
  if (r instanceof Array)
    return r.map((n) => kn(n, e, t));
  if (r === null)
    return r;
  if (r instanceof Float32Array || r instanceof Float64Array || r instanceof Int32Array || r instanceof Uint32Array || r instanceof Uint8Array || r instanceof Uint16Array || r instanceof Int16Array || r instanceof Int8Array || r instanceof Uint8ClampedArray)
    return {
      rr_type: r.constructor.name,
      args: [Object.values(r)]
    };
  if (
    // SharedArrayBuffer disabled on most browsers due to spectre.
    // More info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/SharedArrayBuffer
    // value instanceof SharedArrayBuffer ||
    r instanceof ArrayBuffer
  ) {
    const n = r.constructor.name, i = X1(r);
    return {
      rr_type: n,
      base64: i
    };
  } else {
    if (r instanceof DataView)
      return {
        rr_type: r.constructor.name,
        args: [
          kn(r.buffer, e, t),
          r.byteOffset,
          r.byteLength
        ]
      };
    if (r instanceof HTMLImageElement) {
      const n = r.constructor.name, { src: i } = r;
      return {
        rr_type: n,
        src: i
      };
    } else if (r instanceof HTMLCanvasElement) {
      const n = "HTMLImageElement", i = r.toDataURL();
      return {
        rr_type: n,
        src: i
      };
    } else {
      if (r instanceof ImageData)
        return {
          rr_type: r.constructor.name,
          args: [kn(r.data, e, t), r.width, r.height]
        };
      if (uh(r, e) || typeof r == "object") {
        const n = r.constructor.name, i = ah(r, e, t);
        return {
          rr_type: n,
          index: i
        };
      }
    }
  }
  return r;
}
const lh = (r, e, t) => r.map((n) => kn(n, e, t)), uh = (r, e) => !![
  "WebGLActiveInfo",
  "WebGLBuffer",
  "WebGLFramebuffer",
  "WebGLProgram",
  "WebGLRenderbuffer",
  "WebGLShader",
  "WebGLShaderPrecisionFormat",
  "WebGLTexture",
  "WebGLUniformLocation",
  "WebGLVertexArrayObject",
  // In old Chrome versions, value won't be an instanceof WebGLVertexArrayObject.
  "WebGLVertexArrayObjectOES"
].filter(
  (i) => typeof e[i] == "function"
).find(
  (i) => r instanceof e[i]
);
function K1(r, e, t, n) {
  const i = [], s = Object.getOwnPropertyNames(
    e.CanvasRenderingContext2D.prototype
  );
  for (const o of s)
    try {
      if (typeof e.CanvasRenderingContext2D.prototype[o] != "function")
        continue;
      const a = Ht(
        e.CanvasRenderingContext2D.prototype,
        o,
        function(l) {
          return function(...u) {
            return ae(this.canvas, t, n, !0) || setTimeout(() => {
              const c = lh(u, e, this);
              r(this.canvas, {
                type: Wt["2D"],
                property: o,
                args: c
              });
            }, 0), l.apply(this, u);
          };
        }
      );
      i.push(a);
    } catch {
      const a = fi(
        e.CanvasRenderingContext2D.prototype,
        o,
        {
          set(l) {
            r(this.canvas, {
              type: Wt["2D"],
              property: o,
              args: [l],
              setter: !0
            });
          }
        }
      );
      i.push(a);
    }
  return () => {
    i.forEach((o) => o());
  };
}
function q1(r) {
  return r === "experimental-webgl" ? "webgl" : r;
}
function Hl(r, e, t, n) {
  const i = [];
  try {
    const s = Ht(
      r.HTMLCanvasElement.prototype,
      "getContext",
      function(o) {
        return function(a, ...l) {
          if (!ae(this, e, t, !0)) {
            const u = q1(a);
            if ("__context" in this || (this.__context = u), n && ["webgl", "webgl2"].includes(u))
              if (l[0] && typeof l[0] == "object") {
                const c = l[0];
                c.preserveDrawingBuffer || (c.preserveDrawingBuffer = !0);
              } else
                l.splice(0, 1, {
                  preserveDrawingBuffer: !0
                });
          }
          return o.apply(this, [a, ...l]);
        };
      }
    );
    i.push(s);
  } catch {
    console.error("failed to patch HTMLCanvasElement.prototype.getContext");
  }
  return () => {
    i.forEach((s) => s());
  };
}
function Yl(r, e, t, n, i, s) {
  const o = [], a = Object.getOwnPropertyNames(r);
  for (const l of a)
    if (
      //prop.startsWith('get') ||  // e.g. getProgramParameter, but too risky
      ![
        "isContextLost",
        "canvas",
        "drawingBufferWidth",
        "drawingBufferHeight"
      ].includes(l)
    )
      try {
        if (typeof r[l] != "function")
          continue;
        const u = Ht(
          r,
          l,
          function(c) {
            return function(...f) {
              const d = c.apply(this, f);
              if (ah(d, s, this), "tagName" in this.canvas && !ae(this.canvas, n, i, !0)) {
                const h = lh(f, s, this), p = {
                  type: e,
                  property: l,
                  args: h
                };
                t(this.canvas, p);
              }
              return d;
            };
          }
        );
        o.push(u);
      } catch {
        const u = fi(r, l, {
          set(c) {
            t(this.canvas, {
              type: e,
              property: l,
              args: [c],
              setter: !0
            });
          }
        });
        o.push(u);
      }
  return o;
}
function Q1(r, e, t, n) {
  const i = [];
  return i.push(
    ...Yl(
      e.WebGLRenderingContext.prototype,
      Wt.WebGL,
      r,
      t,
      n,
      e
    )
  ), typeof e.WebGL2RenderingContext < "u" && i.push(
    ...Yl(
      e.WebGL2RenderingContext.prototype,
      Wt.WebGL2,
      r,
      t,
      n,
      e
    )
  ), () => {
    i.forEach((s) => s());
  };
}
const ch = "KGZ1bmN0aW9uKCkgewogICJ1c2Ugc3RyaWN0IjsKICB2YXIgY2hhcnMgPSAiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyI7CiAgdmFyIGxvb2t1cCA9IHR5cGVvZiBVaW50OEFycmF5ID09PSAidW5kZWZpbmVkIiA/IFtdIDogbmV3IFVpbnQ4QXJyYXkoMjU2KTsKICBmb3IgKHZhciBpID0gMDsgaSA8IGNoYXJzLmxlbmd0aDsgaSsrKSB7CiAgICBsb29rdXBbY2hhcnMuY2hhckNvZGVBdChpKV0gPSBpOwogIH0KICB2YXIgZW5jb2RlID0gZnVuY3Rpb24oYXJyYXlidWZmZXIpIHsKICAgIHZhciBieXRlcyA9IG5ldyBVaW50OEFycmF5KGFycmF5YnVmZmVyKSwgaTIsIGxlbiA9IGJ5dGVzLmxlbmd0aCwgYmFzZTY0ID0gIiI7CiAgICBmb3IgKGkyID0gMDsgaTIgPCBsZW47IGkyICs9IDMpIHsKICAgICAgYmFzZTY0ICs9IGNoYXJzW2J5dGVzW2kyXSA+PiAyXTsKICAgICAgYmFzZTY0ICs9IGNoYXJzWyhieXRlc1tpMl0gJiAzKSA8PCA0IHwgYnl0ZXNbaTIgKyAxXSA+PiA0XTsKICAgICAgYmFzZTY0ICs9IGNoYXJzWyhieXRlc1tpMiArIDFdICYgMTUpIDw8IDIgfCBieXRlc1tpMiArIDJdID4+IDZdOwogICAgICBiYXNlNjQgKz0gY2hhcnNbYnl0ZXNbaTIgKyAyXSAmIDYzXTsKICAgIH0KICAgIGlmIChsZW4gJSAzID09PSAyKSB7CiAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDEpICsgIj0iOwogICAgfSBlbHNlIGlmIChsZW4gJSAzID09PSAxKSB7CiAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDIpICsgIj09IjsKICAgIH0KICAgIHJldHVybiBiYXNlNjQ7CiAgfTsKICBjb25zdCBsYXN0QmxvYk1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7CiAgY29uc3QgdHJhbnNwYXJlbnRCbG9iTWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTsKICBhc3luYyBmdW5jdGlvbiBnZXRUcmFuc3BhcmVudEJsb2JGb3Iod2lkdGgsIGhlaWdodCwgZGF0YVVSTE9wdGlvbnMpIHsKICAgIGNvbnN0IGlkID0gYCR7d2lkdGh9LSR7aGVpZ2h0fWA7CiAgICBpZiAoIk9mZnNjcmVlbkNhbnZhcyIgaW4gZ2xvYmFsVGhpcykgewogICAgICBpZiAodHJhbnNwYXJlbnRCbG9iTWFwLmhhcyhpZCkpIHJldHVybiB0cmFuc3BhcmVudEJsb2JNYXAuZ2V0KGlkKTsKICAgICAgY29uc3Qgb2Zmc2NyZWVuID0gbmV3IE9mZnNjcmVlbkNhbnZhcyh3aWR0aCwgaGVpZ2h0KTsKICAgICAgb2Zmc2NyZWVuLmdldENvbnRleHQoIjJkIik7CiAgICAgIGNvbnN0IGJsb2IgPSBhd2FpdCBvZmZzY3JlZW4uY29udmVydFRvQmxvYihkYXRhVVJMT3B0aW9ucyk7CiAgICAgIGNvbnN0IGFycmF5QnVmZmVyID0gYXdhaXQgYmxvYi5hcnJheUJ1ZmZlcigpOwogICAgICBjb25zdCBiYXNlNjQgPSBlbmNvZGUoYXJyYXlCdWZmZXIpOwogICAgICB0cmFuc3BhcmVudEJsb2JNYXAuc2V0KGlkLCBiYXNlNjQpOwogICAgICByZXR1cm4gYmFzZTY0OwogICAgfSBlbHNlIHsKICAgICAgcmV0dXJuICIiOwogICAgfQogIH0KICBjb25zdCB3b3JrZXIgPSBzZWxmOwogIHdvcmtlci5vbm1lc3NhZ2UgPSBhc3luYyBmdW5jdGlvbihlKSB7CiAgICBpZiAoIk9mZnNjcmVlbkNhbnZhcyIgaW4gZ2xvYmFsVGhpcykgewogICAgICBjb25zdCB7IGlkLCBiaXRtYXAsIHdpZHRoLCBoZWlnaHQsIGRhdGFVUkxPcHRpb25zIH0gPSBlLmRhdGE7CiAgICAgIGNvbnN0IHRyYW5zcGFyZW50QmFzZTY0ID0gZ2V0VHJhbnNwYXJlbnRCbG9iRm9yKAogICAgICAgIHdpZHRoLAogICAgICAgIGhlaWdodCwKICAgICAgICBkYXRhVVJMT3B0aW9ucwogICAgICApOwogICAgICBjb25zdCBvZmZzY3JlZW4gPSBuZXcgT2Zmc2NyZWVuQ2FudmFzKHdpZHRoLCBoZWlnaHQpOwogICAgICBjb25zdCBjdHggPSBvZmZzY3JlZW4uZ2V0Q29udGV4dCgiMmQiKTsKICAgICAgY3R4LmRyYXdJbWFnZShiaXRtYXAsIDAsIDApOwogICAgICBiaXRtYXAuY2xvc2UoKTsKICAgICAgY29uc3QgYmxvYiA9IGF3YWl0IG9mZnNjcmVlbi5jb252ZXJ0VG9CbG9iKGRhdGFVUkxPcHRpb25zKTsKICAgICAgY29uc3QgdHlwZSA9IGJsb2IudHlwZTsKICAgICAgY29uc3QgYXJyYXlCdWZmZXIgPSBhd2FpdCBibG9iLmFycmF5QnVmZmVyKCk7CiAgICAgIGNvbnN0IGJhc2U2NCA9IGVuY29kZShhcnJheUJ1ZmZlcik7CiAgICAgIGlmICghbGFzdEJsb2JNYXAuaGFzKGlkKSAmJiBhd2FpdCB0cmFuc3BhcmVudEJhc2U2NCA9PT0gYmFzZTY0KSB7CiAgICAgICAgbGFzdEJsb2JNYXAuc2V0KGlkLCBiYXNlNjQpOwogICAgICAgIHJldHVybiB3b3JrZXIucG9zdE1lc3NhZ2UoeyBpZCB9KTsKICAgICAgfQogICAgICBpZiAobGFzdEJsb2JNYXAuZ2V0KGlkKSA9PT0gYmFzZTY0KSByZXR1cm4gd29ya2VyLnBvc3RNZXNzYWdlKHsgaWQgfSk7CiAgICAgIHdvcmtlci5wb3N0TWVzc2FnZSh7CiAgICAgICAgaWQsCiAgICAgICAgdHlwZSwKICAgICAgICBiYXNlNjQsCiAgICAgICAgd2lkdGgsCiAgICAgICAgaGVpZ2h0CiAgICAgIH0pOwogICAgICBsYXN0QmxvYk1hcC5zZXQoaWQsIGJhc2U2NCk7CiAgICB9IGVsc2UgewogICAgICByZXR1cm4gd29ya2VyLnBvc3RNZXNzYWdlKHsgaWQ6IGUuZGF0YS5pZCB9KTsKICAgIH0KICB9Owp9KSgpOwovLyMgc291cmNlTWFwcGluZ1VSTD1pbWFnZS1iaXRtYXAtZGF0YS11cmwtd29ya2VyLUlKcEM3Z19iLmpzLm1hcAo=", eS = (r) => Uint8Array.from(atob(r), (e) => e.charCodeAt(0)), Xl = typeof window < "u" && window.Blob && new Blob([eS(ch)], { type: "text/javascript;charset=utf-8" });
function tS(r) {
  let e;
  try {
    if (e = Xl && (window.URL || window.webkitURL).createObjectURL(Xl), !e) throw "";
    const t = new Worker(e, {
      name: r == null ? void 0 : r.name
    });
    return t.addEventListener("error", () => {
      (window.URL || window.webkitURL).revokeObjectURL(e);
    }), t;
  } catch {
    return new Worker(
      "data:text/javascript;base64," + ch,
      {
        name: r == null ? void 0 : r.name
      }
    );
  } finally {
    e && (window.URL || window.webkitURL).revokeObjectURL(e);
  }
}
class rS {
  constructor(e) {
    C(this, "pendingCanvasMutations", /* @__PURE__ */ new Map()), C(this, "rafStamps", { latestId: 0, invokeId: null }), C(this, "mirror"), C(this, "mutationCb"), C(this, "resetObservers"), C(this, "frozen", !1), C(this, "locked", !1), C(this, "processMutation", (l, u) => {
      (this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId || !this.rafStamps.invokeId) && (this.rafStamps.invokeId = this.rafStamps.latestId), this.pendingCanvasMutations.has(l) || this.pendingCanvasMutations.set(l, []), this.pendingCanvasMutations.get(l).push(u);
    });
    const {
      sampling: t = "all",
      win: n,
      blockClass: i,
      blockSelector: s,
      recordCanvas: o,
      dataURLOptions: a
    } = e;
    this.mutationCb = e.mutationCb, this.mirror = e.mirror, o && t === "all" && this.initCanvasMutationObserver(n, i, s), o && typeof t == "number" && this.initCanvasFPSObserver(t, n, i, s, {
      dataURLOptions: a
    });
  }
  reset() {
    this.pendingCanvasMutations.clear(), this.resetObservers && this.resetObservers();
  }
  freeze() {
    this.frozen = !0;
  }
  unfreeze() {
    this.frozen = !1;
  }
  lock() {
    this.locked = !0;
  }
  unlock() {
    this.locked = !1;
  }
  initCanvasFPSObserver(e, t, n, i, s) {
    const o = Hl(
      t,
      n,
      i,
      !0
    ), a = /* @__PURE__ */ new Map(), l = new tS();
    l.onmessage = (p) => {
      const { id: m } = p.data;
      if (a.set(m, !1), !("base64" in p.data)) return;
      const { base64: g, type: v, width: b, height: y } = p.data;
      this.mutationCb({
        id: m,
        type: Wt["2D"],
        commands: [
          {
            property: "clearRect",
            // wipe canvas
            args: [0, 0, b, y]
          },
          {
            property: "drawImage",
            // draws (semi-transparent) image
            args: [
              {
                rr_type: "ImageBitmap",
                args: [
                  {
                    rr_type: "Blob",
                    data: [{ rr_type: "ArrayBuffer", base64: g }],
                    type: v
                  }
                ]
              },
              0,
              0
            ]
          }
        ]
      });
    };
    const u = 1e3 / e;
    let c = 0, f;
    const d = () => {
      const p = [];
      return t.document.querySelectorAll("canvas").forEach((m) => {
        ae(m, n, i, !0) || p.push(m);
      }), p;
    }, h = (p) => {
      if (c && p - c < u) {
        f = requestAnimationFrame(h);
        return;
      }
      c = p, d().forEach(async (m) => {
        var g;
        const v = this.mirror.getId(m);
        if (a.get(v) || m.width === 0 || m.height === 0) return;
        if (a.set(v, !0), ["webgl", "webgl2"].includes(m.__context)) {
          const y = m.getContext(m.__context);
          ((g = y == null ? void 0 : y.getContextAttributes()) == null ? void 0 : g.preserveDrawingBuffer) === !1 && y.clear(y.COLOR_BUFFER_BIT);
        }
        const b = await createImageBitmap(m);
        l.postMessage(
          {
            id: v,
            bitmap: b,
            width: m.width,
            height: m.height,
            dataURLOptions: s.dataURLOptions
          },
          [b]
        );
      }), f = requestAnimationFrame(h);
    };
    f = requestAnimationFrame(h), this.resetObservers = () => {
      o(), cancelAnimationFrame(f);
    };
  }
  initCanvasMutationObserver(e, t, n) {
    this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher();
    const i = Hl(
      e,
      t,
      n,
      !1
    ), s = K1(
      this.processMutation.bind(this),
      e,
      t,
      n
    ), o = Q1(
      this.processMutation.bind(this),
      e,
      t,
      n
    );
    this.resetObservers = () => {
      i(), s(), o();
    };
  }
  startPendingCanvasMutationFlusher() {
    requestAnimationFrame(() => this.flushPendingCanvasMutations());
  }
  startRAFTimestamping() {
    const e = (t) => {
      this.rafStamps.latestId = t, requestAnimationFrame(e);
    };
    requestAnimationFrame(e);
  }
  flushPendingCanvasMutations() {
    this.pendingCanvasMutations.forEach(
      (e, t) => {
        const n = this.mirror.getId(t);
        this.flushPendingCanvasMutationFor(t, n);
      }
    ), requestAnimationFrame(() => this.flushPendingCanvasMutations());
  }
  flushPendingCanvasMutationFor(e, t) {
    if (this.frozen || this.locked)
      return;
    const n = this.pendingCanvasMutations.get(e);
    if (!n || t === -1) return;
    const i = n.map((o) => {
      const { type: a, ...l } = o;
      return l;
    }), { type: s } = n[0];
    this.mutationCb({ id: t, type: s, commands: i }), this.pendingCanvasMutations.delete(e);
  }
}
class nS {
  constructor(e) {
    C(this, "trackedLinkElements", /* @__PURE__ */ new WeakSet()), C(this, "mutationCb"), C(this, "adoptedStyleSheetCb"), C(this, "styleMirror", new C1()), this.mutationCb = e.mutationCb, this.adoptedStyleSheetCb = e.adoptedStyleSheetCb;
  }
  attachLinkElement(e, t) {
    "_cssText" in t.attributes && this.mutationCb({
      adds: [],
      removes: [],
      texts: [],
      attributes: [
        {
          id: t.id,
          attributes: t.attributes
        }
      ]
    }), this.trackLinkElement(e);
  }
  trackLinkElement(e) {
    this.trackedLinkElements.has(e) || (this.trackedLinkElements.add(e), this.trackStylesheetInLinkElement(e));
  }
  adoptStyleSheets(e, t) {
    if (e.length === 0) return;
    const n = {
      id: t,
      styleIds: []
    }, i = [];
    for (const s of e) {
      let o;
      this.styleMirror.has(s) ? o = this.styleMirror.getId(s) : (o = this.styleMirror.add(s), i.push({
        styleId: o,
        rules: Array.from(s.rules || CSSRule, (a, l) => ({
          rule: yc(a, s.href),
          index: l
        }))
      })), n.styleIds.push(o);
    }
    i.length > 0 && (n.styles = i), this.adoptedStyleSheetCb(n);
  }
  reset() {
    this.styleMirror.reset(), this.trackedLinkElements = /* @__PURE__ */ new WeakSet();
  }
  // TODO: take snapshot on stylesheet reload by applying event listener
  trackStylesheetInLinkElement(e) {
  }
}
class iS {
  constructor() {
    C(this, "nodeMap", /* @__PURE__ */ new WeakMap()), C(this, "active", !1);
  }
  inOtherBuffer(e, t) {
    const n = this.nodeMap.get(e);
    return n && Array.from(n).some((i) => i !== t);
  }
  add(e, t) {
    this.active || (this.active = !0, requestAnimationFrame(() => {
      this.nodeMap = /* @__PURE__ */ new WeakMap(), this.active = !1;
    })), this.nodeMap.set(e, (this.nodeMap.get(e) || /* @__PURE__ */ new Set()).add(t));
  }
  destroy() {
  }
}
let K, On, Ki, Xn = !1;
try {
  if (Array.from([1], (r) => r * 2)[0] !== 2) {
    const r = document.createElement("iframe");
    document.body.appendChild(r), Array.from = ((Ja = r.contentWindow) == null ? void 0 : Ja.Array.from) || Array.from, document.body.removeChild(r);
  }
} catch (r) {
  console.debug("Unable to override Array.from", r);
}
const _e = t0();
function zr(r = {}) {
  const {
    emit: e,
    checkoutEveryNms: t,
    checkoutEveryNth: n,
    blockClass: i = "rr-block",
    blockSelector: s = null,
    ignoreClass: o = "rr-ignore",
    ignoreSelector: a = null,
    maskTextClass: l = "rr-mask",
    maskTextSelector: u = null,
    inlineStylesheet: c = !0,
    maskAllInputs: f,
    maskInputOptions: d,
    slimDOMOptions: h,
    maskInputFn: p,
    maskTextFn: m,
    hooks: g,
    packFn: v,
    sampling: b = {},
    dataURLOptions: y = {},
    mousemoveWait: w,
    recordDOM: _ = !0,
    recordCanvas: E = !1,
    recordCrossOriginIframes: x = !1,
    recordAfter: S = r.recordAfter === "DOMContentLoaded" ? r.recordAfter : "load",
    userTriggeredOnInput: A = !1,
    collectFonts: I = !1,
    inlineImages: R = !1,
    plugins: q,
    keepIframeSrcFn: k = () => !1,
    ignoreCSSAttributes: me = /* @__PURE__ */ new Set([]),
    errorHandler: Ee
  } = r;
  M1(Ee);
  const Q = x ? window.parent === window : !0;
  let ge = !1;
  if (!Q)
    try {
      window.parent.document && (ge = !1);
    } catch {
      ge = !0;
    }
  if (Q && !e)
    throw new Error("emit function is required");
  if (!Q && !ge)
    return () => {
    };
  w !== void 0 && b.mousemove === void 0 && (b.mousemove = w), _e.reset();
  const et = f === !0 ? {
    color: !0,
    date: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
    textarea: !0,
    select: !0,
    password: !0
  } : d !== void 0 ? d : { password: !0 }, Re = h === !0 || h === "all" ? {
    script: !0,
    comment: !0,
    headFavicon: !0,
    headWhitespace: !0,
    headMetaSocial: !0,
    headMetaRobots: !0,
    headMetaHttpEquiv: !0,
    headMetaVerification: !0,
    // the following are off for slimDOMOptions === true,
    // as they destroy some (hidden) info:
    headMetaAuthorship: h === "all",
    headMetaDescKeywords: h === "all",
    headTitleMutations: h === "all"
  } : h || {};
  x1();
  let Ho, gi = 0;
  const Yo = (D) => {
    for (const Se of q || [])
      Se.eventProcessor && (D = Se.eventProcessor(D));
    return v && // Disable packing events which will be emitted to parent frames.
    !ge && (D = v(D)), D;
  };
  K = (D, Se) => {
    var X;
    const J = D;
    if (J.timestamp = Hn(), (X = ot[0]) != null && X.isFrozen() && J.type !== L.FullSnapshot && !(J.type === L.IncrementalSnapshot && J.data.source === $.Mutation) && ot.forEach((ke) => ke.unfreeze()), Q)
      e == null || e(Yo(J), Se);
    else if (ge) {
      const ke = {
        type: "rrweb",
        event: Yo(J),
        origin: window.location.origin,
        isCheckout: Se
      };
      window.parent.postMessage(ke, "*");
    }
    if (J.type === L.FullSnapshot)
      Ho = J, gi = 0;
    else if (J.type === L.IncrementalSnapshot) {
      if (J.data.source === $.Mutation && J.data.isAttachIframe)
        return;
      gi++;
      const ke = n && gi >= n, B = t && J.timestamp - Ho.timestamp > t;
      (ke || B) && On(!0);
    }
  };
  const Zr = (D) => {
    K({
      type: L.IncrementalSnapshot,
      data: {
        source: $.Mutation,
        ...D
      }
    });
  }, Xo = (D) => K({
    type: L.IncrementalSnapshot,
    data: {
      source: $.Scroll,
      ...D
    }
  }), Jo = (D) => K({
    type: L.IncrementalSnapshot,
    data: {
      source: $.CanvasMutation,
      ...D
    }
  }), xh = (D) => K({
    type: L.IncrementalSnapshot,
    data: {
      source: $.AdoptedStyleSheet,
      ...D
    }
  }), tt = new nS({
    mutationCb: Zr,
    adoptedStyleSheetCb: xh
  }), rt = new V1({
    mirror: _e,
    mutationCb: Zr,
    stylesheetManager: tt,
    recordCrossOriginIframes: x,
    wrappedEmit: K
  });
  for (const D of q || [])
    D.getMirror && D.getMirror({
      nodeMirror: _e,
      crossOriginIframeMirror: rt.crossOriginIframeMirror,
      crossOriginIframeStyleMirror: rt.crossOriginIframeStyleMirror
    });
  const yi = new iS();
  Ki = new rS({
    recordCanvas: E,
    mutationCb: Jo,
    win: window,
    blockClass: i,
    blockSelector: s,
    mirror: _e,
    sampling: b.canvas,
    dataURLOptions: y
  });
  const jr = new H1({
    mutationCb: Zr,
    scrollCb: Xo,
    bypassOptions: {
      blockClass: i,
      blockSelector: s,
      maskTextClass: l,
      maskTextSelector: u,
      inlineStylesheet: c,
      maskInputOptions: et,
      dataURLOptions: y,
      maskTextFn: m,
      maskInputFn: p,
      recordCanvas: E,
      inlineImages: R,
      sampling: b,
      slimDOMOptions: Re,
      iframeManager: rt,
      stylesheetManager: tt,
      canvasManager: Ki,
      keepIframeSrcFn: k,
      processedNodeManager: yi
    },
    mirror: _e
  });
  On = (D = !1) => {
    if (!_)
      return;
    K(
      {
        type: L.Meta,
        data: {
          href: window.location.href,
          width: Xf(),
          height: Yf()
        }
      },
      D
    ), tt.reset(), jr.init(), ot.forEach((X) => X.lock());
    const Se = I0(document, {
      mirror: _e,
      blockClass: i,
      blockSelector: s,
      maskTextClass: l,
      maskTextSelector: u,
      inlineStylesheet: c,
      maskAllInputs: et,
      maskTextFn: m,
      maskInputFn: p,
      slimDOM: Re,
      dataURLOptions: y,
      recordCanvas: E,
      inlineImages: R,
      onSerialize: (X) => {
        qf(X, _e) && rt.addIframe(X), Qf(X, _e) && tt.trackLinkElement(X), ro(X) && jr.addShadowRoot(M.shadowRoot(X), document);
      },
      onIframeLoad: (X, J) => {
        rt.attachIframe(X, J), jr.observeAttachShadow(X);
      },
      onStylesheetLoad: (X, J) => {
        tt.attachLinkElement(X, J);
      },
      keepIframeSrcFn: k
    });
    if (!Se)
      return console.warn("Failed to snapshot the document");
    K(
      {
        type: L.FullSnapshot,
        data: {
          node: Se,
          initialOffset: Hf(window)
        }
      },
      D
    ), ot.forEach((X) => X.unlock()), document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0 && tt.adoptStyleSheets(
      document.adoptedStyleSheets,
      _e.getId(document)
    );
  };
  try {
    const D = [], Se = (J) => {
      var ke;
      return N(G1)(
        {
          mutationCb: Zr,
          mousemoveCb: (B, wi) => K({
            type: L.IncrementalSnapshot,
            data: {
              source: wi,
              positions: B
            }
          }),
          mouseInteractionCb: (B) => K({
            type: L.IncrementalSnapshot,
            data: {
              source: $.MouseInteraction,
              ...B
            }
          }),
          scrollCb: Xo,
          viewportResizeCb: (B) => K({
            type: L.IncrementalSnapshot,
            data: {
              source: $.ViewportResize,
              ...B
            }
          }),
          inputCb: (B) => K({
            type: L.IncrementalSnapshot,
            data: {
              source: $.Input,
              ...B
            }
          }),
          mediaInteractionCb: (B) => K({
            type: L.IncrementalSnapshot,
            data: {
              source: $.MediaInteraction,
              ...B
            }
          }),
          styleSheetRuleCb: (B) => K({
            type: L.IncrementalSnapshot,
            data: {
              source: $.StyleSheetRule,
              ...B
            }
          }),
          styleDeclarationCb: (B) => K({
            type: L.IncrementalSnapshot,
            data: {
              source: $.StyleDeclaration,
              ...B
            }
          }),
          canvasMutationCb: Jo,
          fontCb: (B) => K({
            type: L.IncrementalSnapshot,
            data: {
              source: $.Font,
              ...B
            }
          }),
          selectionCb: (B) => {
            K({
              type: L.IncrementalSnapshot,
              data: {
                source: $.Selection,
                ...B
              }
            });
          },
          customElementCb: (B) => {
            K({
              type: L.IncrementalSnapshot,
              data: {
                source: $.CustomElement,
                ...B
              }
            });
          },
          blockClass: i,
          ignoreClass: o,
          ignoreSelector: a,
          maskTextClass: l,
          maskTextSelector: u,
          maskInputOptions: et,
          inlineStylesheet: c,
          sampling: b,
          recordDOM: _,
          recordCanvas: E,
          inlineImages: R,
          userTriggeredOnInput: A,
          collectFonts: I,
          doc: J,
          maskInputFn: p,
          maskTextFn: m,
          keepIframeSrcFn: k,
          blockSelector: s,
          slimDOMOptions: Re,
          dataURLOptions: y,
          mirror: _e,
          iframeManager: rt,
          stylesheetManager: tt,
          shadowDomManager: jr,
          processedNodeManager: yi,
          canvasManager: Ki,
          ignoreCSSAttributes: me,
          plugins: ((ke = q == null ? void 0 : q.filter((B) => B.observer)) == null ? void 0 : ke.map((B) => ({
            observer: B.observer,
            options: B.options,
            callback: (wi) => K({
              type: L.Plugin,
              data: {
                plugin: B.name,
                payload: wi
              }
            })
          }))) || []
        },
        g
      );
    };
    rt.addLoadListener((J) => {
      try {
        D.push(Se(J.contentDocument));
      } catch (ke) {
        console.warn(ke);
      }
    });
    const X = () => {
      On(), D.push(Se(document)), Xn = !0;
    };
    return document.readyState === "interactive" || document.readyState === "complete" ? X() : (D.push(
      oe("DOMContentLoaded", () => {
        K({
          type: L.DomContentLoaded,
          data: {}
        }), S === "DOMContentLoaded" && X();
      })
    ), D.push(
      oe(
        "load",
        () => {
          K({
            type: L.Load,
            data: {}
          }), S === "load" && X();
        },
        window
      )
    )), () => {
      D.forEach((J) => J()), yi.destroy(), Xn = !1, $1();
    };
  } catch (D) {
    console.warn(D);
  }
}
zr.addCustomEvent = (r, e) => {
  if (!Xn)
    throw new Error("please add custom event after start recording");
  K({
    type: L.Custom,
    data: {
      tag: r,
      payload: e
    }
  });
};
zr.freezePage = () => {
  ot.forEach((r) => r.freeze());
};
zr.takeFullSnapshot = (r) => {
  if (!Xn)
    throw new Error("please take full snapshot after start recording");
  On(r);
};
zr.mirror = _e;
var Jl;
(function(r) {
  r[r.NotStarted = 0] = "NotStarted", r[r.Running = 1] = "Running", r[r.Stopped = 2] = "Stopped";
})(Jl || (Jl = {}));
var _n = {}, qi, Kl;
function sS() {
  if (Kl) return qi;
  Kl = 1;
  var r, e, t = {
    '"': '"',
    "\\": "\\",
    "/": "/",
    b: "\b",
    f: "\f",
    n: `
`,
    r: "\r",
    t: "	"
  }, n;
  function i(h) {
    throw {
      name: "SyntaxError",
      message: h,
      at: r,
      text: n
    };
  }
  function s(h) {
    return h && h !== e && i("Expected '" + h + "' instead of '" + e + "'"), e = n.charAt(r), r += 1, e;
  }
  function o() {
    var h, p = "";
    for (e === "-" && (p = "-", s("-")); e >= "0" && e <= "9"; )
      p += e, s();
    if (e === ".")
      for (p += "."; s() && e >= "0" && e <= "9"; )
        p += e;
    if (e === "e" || e === "E")
      for (p += e, s(), (e === "-" || e === "+") && (p += e, s()); e >= "0" && e <= "9"; )
        p += e, s();
    return h = Number(p), isFinite(h) || i("Bad number"), h;
  }
  function a() {
    var h, p, m = "", g;
    if (e === '"')
      for (; s(); ) {
        if (e === '"')
          return s(), m;
        if (e === "\\")
          if (s(), e === "u") {
            for (g = 0, p = 0; p < 4 && (h = parseInt(s(), 16), !!isFinite(h)); p += 1)
              g = g * 16 + h;
            m += String.fromCharCode(g);
          } else if (typeof t[e] == "string")
            m += t[e];
          else
            break;
        else
          m += e;
      }
    i("Bad string");
  }
  function l() {
    for (; e && e <= " "; )
      s();
  }
  function u() {
    switch (e) {
      case "t":
        return s("t"), s("r"), s("u"), s("e"), !0;
      case "f":
        return s("f"), s("a"), s("l"), s("s"), s("e"), !1;
      case "n":
        return s("n"), s("u"), s("l"), s("l"), null;
      default:
        i("Unexpected '" + e + "'");
    }
  }
  function c() {
    var h = [];
    if (e === "[") {
      if (s("["), l(), e === "]")
        return s("]"), h;
      for (; e; ) {
        if (h.push(d()), l(), e === "]")
          return s("]"), h;
        s(","), l();
      }
    }
    i("Bad array");
  }
  function f() {
    var h, p = {};
    if (e === "{") {
      if (s("{"), l(), e === "}")
        return s("}"), p;
      for (; e; ) {
        if (h = a(), l(), s(":"), Object.prototype.hasOwnProperty.call(p, h) && i('Duplicate key "' + h + '"'), p[h] = d(), l(), e === "}")
          return s("}"), p;
        s(","), l();
      }
    }
    i("Bad object");
  }
  function d() {
    switch (l(), e) {
      case "{":
        return f();
      case "[":
        return c();
      case '"':
        return a();
      case "-":
        return o();
      default:
        return e >= "0" && e <= "9" ? o() : u();
    }
  }
  return qi = function(h, p) {
    var m;
    return n = h, r = 0, e = " ", m = d(), l(), e && i("Syntax error"), typeof p == "function" ? function g(v, b) {
      var y, w, _ = v[b];
      if (_ && typeof _ == "object")
        for (y in d)
          Object.prototype.hasOwnProperty.call(_, y) && (w = g(_, y), typeof w > "u" ? delete _[y] : _[y] = w);
      return p.call(v, b, _);
    }({ "": m }, "") : m;
  }, qi;
}
var Qi, ql;
function oS() {
  if (ql) return Qi;
  ql = 1;
  var r = /[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, e, t, n = {
    // table of character substitutions
    "\b": "\\b",
    "	": "\\t",
    "\n": "\\n",
    "\f": "\\f",
    "\r": "\\r",
    '"': '\\"',
    "\\": "\\\\"
  }, i;
  function s(a) {
    return r.lastIndex = 0, r.test(a) ? '"' + a.replace(r, function(l) {
      var u = n[l];
      return typeof u == "string" ? u : "\\u" + ("0000" + l.charCodeAt(0).toString(16)).slice(-4);
    }) + '"' : '"' + a + '"';
  }
  function o(a, l) {
    var u, c, f, d, h = e, p, m = l[a];
    switch (m && typeof m == "object" && typeof m.toJSON == "function" && (m = m.toJSON(a)), typeof i == "function" && (m = i.call(l, a, m)), typeof m) {
      case "string":
        return s(m);
      case "number":
        return isFinite(m) ? String(m) : "null";
      case "boolean":
      case "null":
        return String(m);
      case "object":
        if (!m)
          return "null";
        if (e += t, p = [], Object.prototype.toString.apply(m) === "[object Array]") {
          for (d = m.length, u = 0; u < d; u += 1)
            p[u] = o(u, m) || "null";
          return f = p.length === 0 ? "[]" : e ? `[
` + e + p.join(`,
` + e) + `
` + h + "]" : "[" + p.join(",") + "]", e = h, f;
        }
        if (i && typeof i == "object")
          for (d = i.length, u = 0; u < d; u += 1)
            c = i[u], typeof c == "string" && (f = o(c, m), f && p.push(s(c) + (e ? ": " : ":") + f));
        else
          for (c in m)
            Object.prototype.hasOwnProperty.call(m, c) && (f = o(c, m), f && p.push(s(c) + (e ? ": " : ":") + f));
        return f = p.length === 0 ? "{}" : e ? `{
` + e + p.join(`,
` + e) + `
` + h + "}" : "{" + p.join(",") + "}", e = h, f;
    }
  }
  return Qi = function(a, l, u) {
    var c;
    if (e = "", t = "", typeof u == "number")
      for (c = 0; c < u; c += 1)
        t += " ";
    else typeof u == "string" && (t = u);
    if (i = l, l && typeof l != "function" && (typeof l != "object" || typeof l.length != "number"))
      throw new Error("JSON.stringify");
    return o("", { "": a });
  }, Qi;
}
var Ql;
function aS() {
  return Ql || (Ql = 1, _n.parse = sS(), _n.stringify = oS()), _n;
}
var eu = Object.prototype.toString, fh = function(e) {
  var t = eu.call(e), n = t === "[object Arguments]";
  return n || (n = t !== "[object Array]" && e !== null && typeof e == "object" && typeof e.length == "number" && e.length >= 0 && eu.call(e.callee) === "[object Function]"), n;
}, es, tu;
function lS() {
  if (tu) return es;
  tu = 1;
  var r;
  if (!Object.keys) {
    var e = Object.prototype.hasOwnProperty, t = Object.prototype.toString, n = fh, i = Object.prototype.propertyIsEnumerable, s = !i.call({ toString: null }, "toString"), o = i.call(function() {
    }, "prototype"), a = [
      "toString",
      "toLocaleString",
      "valueOf",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "constructor"
    ], l = function(d) {
      var h = d.constructor;
      return h && h.prototype === d;
    }, u = {
      $applicationCache: !0,
      $console: !0,
      $external: !0,
      $frame: !0,
      $frameElement: !0,
      $frames: !0,
      $innerHeight: !0,
      $innerWidth: !0,
      $onmozfullscreenchange: !0,
      $onmozfullscreenerror: !0,
      $outerHeight: !0,
      $outerWidth: !0,
      $pageXOffset: !0,
      $pageYOffset: !0,
      $parent: !0,
      $scrollLeft: !0,
      $scrollTop: !0,
      $scrollX: !0,
      $scrollY: !0,
      $self: !0,
      $webkitIndexedDB: !0,
      $webkitStorageInfo: !0,
      $window: !0
    }, c = function() {
      if (typeof window > "u")
        return !1;
      for (var d in window)
        try {
          if (!u["$" + d] && e.call(window, d) && window[d] !== null && typeof window[d] == "object")
            try {
              l(window[d]);
            } catch {
              return !0;
            }
        } catch {
          return !0;
        }
      return !1;
    }(), f = function(d) {
      if (typeof window > "u" || !c)
        return l(d);
      try {
        return l(d);
      } catch {
        return !1;
      }
    };
    r = function(h) {
      var p = h !== null && typeof h == "object", m = t.call(h) === "[object Function]", g = n(h), v = p && t.call(h) === "[object String]", b = [];
      if (!p && !m && !g)
        throw new TypeError("Object.keys called on a non-object");
      var y = o && m;
      if (v && h.length > 0 && !e.call(h, 0))
        for (var w = 0; w < h.length; ++w)
          b.push(String(w));
      if (g && h.length > 0)
        for (var _ = 0; _ < h.length; ++_)
          b.push(String(_));
      else
        for (var E in h)
          !(y && E === "prototype") && e.call(h, E) && b.push(String(E));
      if (s)
        for (var x = f(h), S = 0; S < a.length; ++S)
          !(x && a[S] === "constructor") && e.call(h, a[S]) && b.push(a[S]);
      return b;
    };
  }
  return es = r, es;
}
var uS = Array.prototype.slice, cS = fh, ru = Object.keys, ts = ru ? function(e) {
  return ru(e);
} : lS(), nu = Object.keys;
ts.shim = function() {
  if (Object.keys) {
    var e = function() {
      var t = Object.keys(arguments);
      return t && t.length === arguments.length;
    }(1, 2);
    e || (Object.keys = function(n) {
      return cS(n) ? nu(uS.call(n)) : nu(n);
    });
  } else
    Object.keys = ts;
  return Object.keys || ts;
};
var fS = { exports: {} }, hh = Object, hS = Error, dS = EvalError, pS = RangeError, mS = ReferenceError, dh = SyntaxError, hi = TypeError, gS = URIError, yS = Math.abs, wS = Math.floor, vS = Math.max, bS = Math.min, SS = Math.pow, _S = Math.round, xS = Number.isNaN || function(e) {
  return e !== e;
}, CS = xS, IS = function(e) {
  return CS(e) || e === 0 ? e : e < 0 ? -1 : 1;
}, AS = Object.getOwnPropertyDescriptor, Mn = AS;
if (Mn)
  try {
    Mn([], "length");
  } catch {
    Mn = null;
  }
var di = Mn, $n = Object.defineProperty || !1;
if ($n)
  try {
    $n({}, "a", { value: 1 });
  } catch {
    $n = !1;
  }
var pi = $n, rs, iu;
function ES() {
  return iu || (iu = 1, rs = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
      return !1;
    if (typeof Symbol.iterator == "symbol")
      return !0;
    var e = {}, t = Symbol("test"), n = Object(t);
    if (typeof t == "string" || Object.prototype.toString.call(t) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]")
      return !1;
    var i = 42;
    e[t] = i;
    for (var s in e)
      return !1;
    if (typeof Object.keys == "function" && Object.keys(e).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0)
      return !1;
    var o = Object.getOwnPropertySymbols(e);
    if (o.length !== 1 || o[0] !== t || !Object.prototype.propertyIsEnumerable.call(e, t))
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var a = (
        /** @type {PropertyDescriptor} */
        Object.getOwnPropertyDescriptor(e, t)
      );
      if (a.value !== i || a.enumerable !== !0)
        return !1;
    }
    return !0;
  }), rs;
}
var ns, su;
function RS() {
  if (su) return ns;
  su = 1;
  var r = typeof Symbol < "u" && Symbol, e = ES();
  return ns = function() {
    return typeof r != "function" || typeof Symbol != "function" || typeof r("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : e();
  }, ns;
}
var is, ou;
function ph() {
  return ou || (ou = 1, is = typeof Reflect < "u" && Reflect.getPrototypeOf || null), is;
}
var ss, au;
function mh() {
  if (au) return ss;
  au = 1;
  var r = hh;
  return ss = r.getPrototypeOf || null, ss;
}
var kS = "Function.prototype.bind called on incompatible ", OS = Object.prototype.toString, MS = Math.max, $S = "[object Function]", lu = function(e, t) {
  for (var n = [], i = 0; i < e.length; i += 1)
    n[i] = e[i];
  for (var s = 0; s < t.length; s += 1)
    n[s + e.length] = t[s];
  return n;
}, PS = function(e, t) {
  for (var n = [], i = t, s = 0; i < e.length; i += 1, s += 1)
    n[s] = e[i];
  return n;
}, NS = function(r, e) {
  for (var t = "", n = 0; n < r.length; n += 1)
    t += r[n], n + 1 < r.length && (t += e);
  return t;
}, LS = function(e) {
  var t = this;
  if (typeof t != "function" || OS.apply(t) !== $S)
    throw new TypeError(kS + t);
  for (var n = PS(arguments, 1), i, s = function() {
    if (this instanceof i) {
      var c = t.apply(
        this,
        lu(n, arguments)
      );
      return Object(c) === c ? c : this;
    }
    return t.apply(
      e,
      lu(n, arguments)
    );
  }, o = MS(0, t.length - n.length), a = [], l = 0; l < o; l++)
    a[l] = "$" + l;
  if (i = Function("binder", "return function (" + NS(a, ",") + "){ return binder.apply(this,arguments); }")(s), t.prototype) {
    var u = function() {
    };
    u.prototype = t.prototype, i.prototype = new u(), u.prototype = null;
  }
  return i;
}, TS = LS, Ur = Function.prototype.bind || TS, jo = Function.prototype.call, Go = Function.prototype.apply, DS = typeof Reflect < "u" && Reflect && Reflect.apply, FS = Ur, zS = Go, US = jo, BS = DS, gh = BS || FS.call(US, zS), WS = Ur, ZS = hi, jS = jo, GS = gh, Vo = function(e) {
  if (e.length < 1 || typeof e[0] != "function")
    throw new ZS("a function is required");
  return GS(WS, jS, e);
}, os, uu;
function VS() {
  if (uu) return os;
  uu = 1;
  var r = Vo, e = di, t;
  try {
    t = /** @type {{ __proto__?: typeof Array.prototype }} */
    [].__proto__ === Array.prototype;
  } catch (o) {
    if (!o || typeof o != "object" || !("code" in o) || o.code !== "ERR_PROTO_ACCESS")
      throw o;
  }
  var n = !!t && e && e(
    Object.prototype,
    /** @type {keyof typeof Object.prototype} */
    "__proto__"
  ), i = Object, s = i.getPrototypeOf;
  return os = n && typeof n.get == "function" ? r([n.get]) : typeof s == "function" ? (
    /** @type {import('./get')} */
    function(a) {
      return s(a == null ? a : i(a));
    }
  ) : !1, os;
}
var as, cu;
function HS() {
  if (cu) return as;
  cu = 1;
  var r = ph(), e = mh(), t = VS();
  return as = r ? function(i) {
    return r(i);
  } : e ? function(i) {
    if (!i || typeof i != "object" && typeof i != "function")
      throw new TypeError("getProto: not an object");
    return e(i);
  } : t ? function(i) {
    return t(i);
  } : null, as;
}
var ls, fu;
function YS() {
  if (fu) return ls;
  fu = 1;
  var r = Function.prototype.call, e = Object.prototype.hasOwnProperty, t = Ur;
  return ls = t.call(r, e), ls;
}
var O, XS = hh, JS = hS, KS = dS, qS = pS, QS = mS, Zt = dh, Pt = hi, e_ = gS, t_ = yS, r_ = wS, n_ = vS, i_ = bS, s_ = SS, o_ = _S, a_ = IS, yh = Function, us = function(r) {
  try {
    return yh('"use strict"; return (' + r + ").constructor;")();
  } catch {
  }
}, Ar = di, l_ = pi, cs = function() {
  throw new Pt();
}, u_ = Ar ? function() {
  try {
    return arguments.callee, cs;
  } catch {
    try {
      return Ar(arguments, "callee").get;
    } catch {
      return cs;
    }
  }
}() : cs, _t = RS()(), te = HS(), c_ = mh(), f_ = ph(), wh = Go, Br = jo, At = {}, h_ = typeof Uint8Array > "u" || !te ? O : te(Uint8Array), at = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError > "u" ? O : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? O : ArrayBuffer,
  "%ArrayIteratorPrototype%": _t && te ? te([][Symbol.iterator]()) : O,
  "%AsyncFromSyncIteratorPrototype%": O,
  "%AsyncFunction%": At,
  "%AsyncGenerator%": At,
  "%AsyncGeneratorFunction%": At,
  "%AsyncIteratorPrototype%": At,
  "%Atomics%": typeof Atomics > "u" ? O : Atomics,
  "%BigInt%": typeof BigInt > "u" ? O : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? O : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? O : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? O : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": JS,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": KS,
  "%Float32Array%": typeof Float32Array > "u" ? O : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? O : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? O : FinalizationRegistry,
  "%Function%": yh,
  "%GeneratorFunction%": At,
  "%Int8Array%": typeof Int8Array > "u" ? O : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? O : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? O : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": _t && te ? te(te([][Symbol.iterator]())) : O,
  "%JSON%": typeof JSON == "object" ? JSON : O,
  "%Map%": typeof Map > "u" ? O : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !_t || !te ? O : te((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": XS,
  "%Object.getOwnPropertyDescriptor%": Ar,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? O : Promise,
  "%Proxy%": typeof Proxy > "u" ? O : Proxy,
  "%RangeError%": qS,
  "%ReferenceError%": QS,
  "%Reflect%": typeof Reflect > "u" ? O : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? O : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !_t || !te ? O : te((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? O : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": _t && te ? te(""[Symbol.iterator]()) : O,
  "%Symbol%": _t ? Symbol : O,
  "%SyntaxError%": Zt,
  "%ThrowTypeError%": u_,
  "%TypedArray%": h_,
  "%TypeError%": Pt,
  "%Uint8Array%": typeof Uint8Array > "u" ? O : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? O : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? O : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? O : Uint32Array,
  "%URIError%": e_,
  "%WeakMap%": typeof WeakMap > "u" ? O : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? O : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? O : WeakSet,
  "%Function.prototype.call%": Br,
  "%Function.prototype.apply%": wh,
  "%Object.defineProperty%": l_,
  "%Object.getPrototypeOf%": c_,
  "%Math.abs%": t_,
  "%Math.floor%": r_,
  "%Math.max%": n_,
  "%Math.min%": i_,
  "%Math.pow%": s_,
  "%Math.round%": o_,
  "%Math.sign%": a_,
  "%Reflect.getPrototypeOf%": f_
};
if (te)
  try {
    null.error;
  } catch (r) {
    var d_ = te(te(r));
    at["%Error.prototype%"] = d_;
  }
var p_ = function r(e) {
  var t;
  if (e === "%AsyncFunction%")
    t = us("async function () {}");
  else if (e === "%GeneratorFunction%")
    t = us("function* () {}");
  else if (e === "%AsyncGeneratorFunction%")
    t = us("async function* () {}");
  else if (e === "%AsyncGenerator%") {
    var n = r("%AsyncGeneratorFunction%");
    n && (t = n.prototype);
  } else if (e === "%AsyncIteratorPrototype%") {
    var i = r("%AsyncGenerator%");
    i && te && (t = te(i.prototype));
  }
  return at[e] = t, t;
}, hu = {
  __proto__: null,
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
}, Wr = Ur, Jn = YS(), m_ = Wr.call(Br, Array.prototype.concat), g_ = Wr.call(wh, Array.prototype.splice), du = Wr.call(Br, String.prototype.replace), Kn = Wr.call(Br, String.prototype.slice), y_ = Wr.call(Br, RegExp.prototype.exec), w_ = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, v_ = /\\(\\)?/g, b_ = function(e) {
  var t = Kn(e, 0, 1), n = Kn(e, -1);
  if (t === "%" && n !== "%")
    throw new Zt("invalid intrinsic syntax, expected closing `%`");
  if (n === "%" && t !== "%")
    throw new Zt("invalid intrinsic syntax, expected opening `%`");
  var i = [];
  return du(e, w_, function(s, o, a, l) {
    i[i.length] = a ? du(l, v_, "$1") : o || s;
  }), i;
}, S_ = function(e, t) {
  var n = e, i;
  if (Jn(hu, n) && (i = hu[n], n = "%" + i[0] + "%"), Jn(at, n)) {
    var s = at[n];
    if (s === At && (s = p_(n)), typeof s > "u" && !t)
      throw new Pt("intrinsic " + e + " exists, but is not available. Please file an issue!");
    return {
      alias: i,
      name: n,
      value: s
    };
  }
  throw new Zt("intrinsic " + e + " does not exist!");
}, vh = function(e, t) {
  if (typeof e != "string" || e.length === 0)
    throw new Pt("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof t != "boolean")
    throw new Pt('"allowMissing" argument must be a boolean');
  if (y_(/^%?[^%]*%?$/, e) === null)
    throw new Zt("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var n = b_(e), i = n.length > 0 ? n[0] : "", s = S_("%" + i + "%", t), o = s.name, a = s.value, l = !1, u = s.alias;
  u && (i = u[0], g_(n, m_([0, 1], u)));
  for (var c = 1, f = !0; c < n.length; c += 1) {
    var d = n[c], h = Kn(d, 0, 1), p = Kn(d, -1);
    if ((h === '"' || h === "'" || h === "`" || p === '"' || p === "'" || p === "`") && h !== p)
      throw new Zt("property names with quotes must have matching quotes");
    if ((d === "constructor" || !f) && (l = !0), i += "." + d, o = "%" + i + "%", Jn(at, o))
      a = at[o];
    else if (a != null) {
      if (!(d in a)) {
        if (!t)
          throw new Pt("base intrinsic for " + e + " exists, but the property is not available.");
        return;
      }
      if (Ar && c + 1 >= n.length) {
        var m = Ar(a, d);
        f = !!m, f && "get" in m && !("originalValue" in m.get) ? a = m.get : a = a[d];
      } else
        f = Jn(a, d), a = a[d];
      f && !l && (at[o] = a);
    }
  }
  return a;
}, pu = pi, __ = dh, xt = hi, mu = di, x_ = function(e, t, n) {
  if (!e || typeof e != "object" && typeof e != "function")
    throw new xt("`obj` must be an object or a function`");
  if (typeof t != "string" && typeof t != "symbol")
    throw new xt("`property` must be a string or a symbol`");
  if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
    throw new xt("`nonEnumerable`, if provided, must be a boolean or null");
  if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
    throw new xt("`nonWritable`, if provided, must be a boolean or null");
  if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
    throw new xt("`nonConfigurable`, if provided, must be a boolean or null");
  if (arguments.length > 6 && typeof arguments[6] != "boolean")
    throw new xt("`loose`, if provided, must be a boolean");
  var i = arguments.length > 3 ? arguments[3] : null, s = arguments.length > 4 ? arguments[4] : null, o = arguments.length > 5 ? arguments[5] : null, a = arguments.length > 6 ? arguments[6] : !1, l = !!mu && mu(e, t);
  if (pu)
    pu(e, t, {
      configurable: o === null && l ? l.configurable : !o,
      enumerable: i === null && l ? l.enumerable : !i,
      value: n,
      writable: s === null && l ? l.writable : !s
    });
  else if (a || !i && !s && !o)
    e[t] = n;
  else
    throw new __("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
}, io = pi, bh = function() {
  return !!io;
};
bh.hasArrayLengthDefineBug = function() {
  if (!io)
    return null;
  try {
    return io([], "length", { value: 1 }).length !== 1;
  } catch {
    return !0;
  }
};
var C_ = bh, I_ = vh, gu = x_, A_ = C_(), yu = di, wu = hi, E_ = I_("%Math.floor%"), R_ = function(e, t) {
  if (typeof e != "function")
    throw new wu("`fn` is not a function");
  if (typeof t != "number" || t < 0 || t > 4294967295 || E_(t) !== t)
    throw new wu("`length` must be a positive 32-bit integer");
  var n = arguments.length > 2 && !!arguments[2], i = !0, s = !0;
  if ("length" in e && yu) {
    var o = yu(e, "length");
    o && !o.configurable && (i = !1), o && !o.writable && (s = !1);
  }
  return (i || s || !n) && (A_ ? gu(
    /** @type {Parameters<define>[0]} */
    e,
    "length",
    t,
    !0,
    !0
  ) : gu(
    /** @type {Parameters<define>[0]} */
    e,
    "length",
    t
  )), e;
}, k_ = Ur, O_ = Go, M_ = gh, $_ = function() {
  return M_(k_, O_, arguments);
};
(function(r) {
  var e = R_, t = pi, n = Vo, i = $_;
  r.exports = function(o) {
    var a = n(arguments), l = o.length - (arguments.length - 1);
    return e(
      a,
      1 + (l > 0 ? l : 0),
      !0
    );
  }, t ? t(r.exports, "apply", { value: i }) : r.exports.apply = i;
})(fS);
var Sh = vh, _h = Vo, P_ = _h([Sh("%String.prototype.indexOf%")]), N_ = function(e, t) {
  var n = (
    /** @type {Parameters<typeof callBindBasic>[0][0]} */
    Sh(e, !!t)
  );
  return typeof n == "function" && P_(e, ".prototype.") > -1 ? _h([n]) : n;
};
(typeof JSON < "u" ? JSON : aS()).stringify;
var mi = N_;
mi("Array.prototype.join");
mi("Array.prototype.indexOf");
mi("Array.prototype.splice");
mi("Array.prototype.sort");
const L_ = () => {
  const r = navigator.userAgent.toLowerCase();
  return [
    "bot",
    "crawler",
    "spider",
    "slurp",
    "search",
    "mediapartners",
    "nagios",
    "monitoring",
    "whatsapp",
    "facebook",
    "twitter",
    "telegram",
    "discord",
    "slack",
    "headless",
    "phantom",
    "selenium",
    "puppeteer",
    "playwright",
    "cypress"
  ].some((t) => r.includes(t));
};
class T_ {
  constructor(e, t, n) {
    this.events = [], this.sessionId = e, this.trackServerUrl = t, this.isSubmitting = !1, this.maxSize = 60 * 1024, this.trackerSettings = n, this.intervalId = setInterval(() => this.submit(), 5 * 1e3);
  }
  start() {
    var e;
    zr({
      inlineStylesheet: !1,
      recordCanvas: !1,
      recordDOM: !0,
      sampling: {
        input: "last",
        mouseInteraction: {
          MouseUp: !1,
          MouseDown: !1,
          Click: !0,
          ContextMenu: !1,
          DblClick: !1,
          Focus: !1,
          Blur: !1,
          TouchStart: !1,
          TouchEnd: !1
        }
      },
      maskAllInputs: ((e = this.trackerSettings) == null ? void 0 : e.mask_input) ?? !0,
      inlineImages: !1,
      collectFonts: !1,
      // checkoutEveryNms: 5 * 1000,
      recordCrossOriginIframes: !0,
      emit: (t) => {
        this.events.push(t), this.calculateSize() >= this.maxSize && this.submit();
      }
    });
  }
  calculateSize() {
    try {
      return xs.gzip(JSON.stringify(this.events)).length;
    } catch (e) {
      return console.error("Error calculating event size", e), 0;
    }
  }
  async submit() {
    if (!(this.events.length === 0 || this.isSubmitting)) {
      this.isSubmitting = !0;
      try {
        const e = xs.gzip(JSON.stringify(this.events));
        await fetch(`${this.trackServerUrl}/api/session_replay/${this.sessionId}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/octet-stream",
            "Content-Encoding": "gzip"
          },
          body: e
        }), this.events = [];
      } catch (e) {
        console.error("Failed to submit events", e);
      } finally {
        this.isSubmitting = !1;
      }
    }
  }
}
const Ot = class Ot {
  constructor(e, t) {
    if (Ot.instance)
      return Ot.instance;
    this.sessionId = e, this.trackServerUrl = t, this.networkLogs = Array(), this.originalFetch = typeof window < "u" ? window.fetch : null, setTimeout(() => {
      this.attachXMLHttpRequestInterceptor(), this.attachFetchInterceptor();
    }, 700), setInterval(() => {
      this.pushNetworkLog();
    }, 5e3), Ot.instance = this;
  }
  pushNetworkLog() {
    if (this.networkLogs.length === 0)
      return;
    const e = xs.gzip(JSON.stringify(this.networkLogs));
    fetch(`${this.trackServerUrl}/api/network_logs/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/octet-stream",
        "Content-Encoding": "gzip"
      },
      body: e
    }).then((t) => t.json()).then((t) => {
      this.networkLogs = Array();
    });
  }
  attachXMLHttpRequestInterceptor() {
    const e = XMLHttpRequest.prototype.open, t = XMLHttpRequest.prototype.send;
    XMLHttpRequest.prototype.open = function(i, s) {
      this.__relay_method = i, this.__relay_url = s, this.__relay_start = Date.now(), e.apply(this, arguments);
    };
    const n = this;
    XMLHttpRequest.prototype.send = function(i) {
      const s = this;
      s.__payload = i, s.__relay_start = Date.now(), s.addEventListener("loadend", function() {
        const o = Date.now() - s.__relay_start, a = location.pathname, l = {
          method: s.__relay_method,
          url: s.__relay_url,
          body: s.__payload,
          statusCode: s.status,
          // Read status here (AFTER request is done)
          timeTaken: o,
          contentType: s.getResponseHeader("content-type"),
          sessionInfoId: n.sessionId,
          path: a,
          source: "xhr",
          timestamp: Date.now().toString()
        };
        s.__relay_url.includes(n.trackServerUrl) || n.networkLogs.push(l);
      }), t.apply(this, arguments);
    };
  }
  attachFetchInterceptor() {
    if (this.originalFetch) {
      const e = this, t = this.originalFetch;
      window.fetch = async function(...n) {
        const [i, s] = n, o = (s == null ? void 0 : s.method) || "GET", a = (s == null ? void 0 : s.body) || null, l = location.pathname, u = Date.now(), c = await t.apply(this, n), f = Date.now() - u, d = c.status, h = c.headers.get("content-type"), p = {
          url: i,
          method: o,
          body: a,
          timeTaken: f,
          statusCode: d,
          sessionInfoId: e.sessionId,
          contentType: h,
          path: l,
          source: "fetch",
          timestamp: Date.now().toString()
        };
        return i.includes(e.trackServerUrl) || e.networkLogs.push(p), c;
      };
    }
  }
};
vi(Ot, "instance");
let so = Ot;
const Mt = class Mt {
  constructor(e, t) {
    if (Mt.instance)
      return Mt.instance;
    this.projectId = t, this.sessionId = null, this.trackServerUrl = e, this.getOrCreateSession().then(() => {
      if (L_()) {
        console.log("Relyque: Session replay recording skipped for bot user agent");
        return;
      }
      this.getTrackerSettings().then((n) => {
        this.interceptor = new so(this.sessionId, this.trackServerUrl), this.sessionReplay = new T_(this.sessionId, this.trackServerUrl, n), Mt.instance = this, this.sessionReplay.start();
      });
    });
  }
  async getTrackerSettings() {
    return new Promise(async (e, t) => {
      fetch(`${this.trackServerUrl}/api/tracker_settings?script_code=${this.projectId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }).then((n) => n.json()).then((n) => {
        var s;
        const i = {};
        (s = n == null ? void 0 : n.config) == null || s.forEach((o) => {
          i[o.settingKey] = o.value;
        }), e(i);
      });
    });
  }
  getOrCreateSession() {
    return new Promise(async (e, t) => {
      console.log("Getting or creating session");
      const n = parseInt(localStorage.getItem("relayActivityTime") ?? 0, 10), i = localStorage.getItem("relaySessionId"), s = 0.5 * 60 * 60 * 1e3;
      if (i && n !== 0 && Date.now() - n < s) {
        console.log("Session found in local storage"), this.sessionId = i, e(this.sessionId);
        return;
      }
      const l = await (await Lp.load()).get();
      fetch(`${this.trackServerUrl}/api/session_info/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ projectId: this.projectId, session: "session", visitorId: l.visitorId })
      }).then((u) => u.json()).then((u) => {
        console.log("Session created", u), this.sessionId = u.sessionId, localStorage.setItem("relaySessionId", this.sessionId), localStorage.setItem("relayActivityTime", (/* @__PURE__ */ new Date()).getTime()), e(this.sessionId);
      }).catch((u) => {
        console.error("Failed to create session", u), t(u);
      });
    });
  }
  identify(e) {
    console.log("Identifying user with ", e), fetch(`${this.trackServerUrl}/api/session_info/${this.sessionId}`, {
      method: "PATCH",
      body: JSON.stringify(e),
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};
vi(Mt, "instance");
let oo = Mt;
function D_(r, e = "https://api.relyque.com") {
  return new oo(e, r);
}
typeof window < "u" && typeof window.trackEvent > "u" && (window.trackEvent = D_);
export {
  D_ as trackEvent
};
