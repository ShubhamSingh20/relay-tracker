var Rh = Object.defineProperty;
var kh = (r, e, t) => e in r ? Rh(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var Si = (r, e, t) => kh(r, typeof e != "symbol" ? e + "" : e, t);
var ho = function() {
  return ho = Object.assign || function(e) {
    for (var t, n = 1, i = arguments.length; n < i; n++) {
      t = arguments[n];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, ho.apply(this, arguments);
};
function Te(r, e, t, n) {
  function i(o) {
    return o instanceof t ? o : new t(function(s) {
      s(o);
    });
  }
  return new (t || (t = Promise))(function(o, s) {
    function a(c) {
      try {
        u(n.next(c));
      } catch (f) {
        s(f);
      }
    }
    function l(c) {
      try {
        u(n.throw(c));
      } catch (f) {
        s(f);
      }
    }
    function u(c) {
      c.done ? o(c.value) : i(c.value).then(a, l);
    }
    u((n = n.apply(r, e || [])).next());
  });
}
function De(r, e) {
  var t = { label: 0, sent: function() {
    if (o[0] & 1) throw o[1];
    return o[1];
  }, trys: [], ops: [] }, n, i, o, s = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return s.next = a(0), s.throw = a(1), s.return = a(2), typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function a(u) {
    return function(c) {
      return l([u, c]);
    };
  }
  function l(u) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; s && (s = 0, u[0] && (t = 0)), t; ) try {
      if (n = 1, i && (o = u[0] & 2 ? i.return : u[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, u[1])).done) return o;
      switch (i = 0, o && (u = [u[0] & 2, o.value]), u[0]) {
        case 0:
        case 1:
          o = u;
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
          if (o = t.trys, !(o = o.length > 0 && o[o.length - 1]) && (u[0] === 6 || u[0] === 2)) {
            t = 0;
            continue;
          }
          if (u[0] === 3 && (!o || u[1] > o[0] && u[1] < o[3])) {
            t.label = u[1];
            break;
          }
          if (u[0] === 6 && t.label < o[1]) {
            t.label = o[1], o = u;
            break;
          }
          if (o && t.label < o[2]) {
            t.label = o[2], t.ops.push(u);
            break;
          }
          o[2] && t.ops.pop(), t.trys.pop();
          continue;
      }
      u = e.call(r, t);
    } catch (c) {
      u = [6, c], i = 0;
    } finally {
      n = o = 0;
    }
    if (u[0] & 5) throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
function _u(r, e, t) {
  if (t || arguments.length === 2) for (var n = 0, i = e.length, o; n < i; n++)
    (o || !(n in e)) && (o || (o = Array.prototype.slice.call(e, 0, n)), o[n] = e[n]);
  return r.concat(o || Array.prototype.slice.call(e));
}
var xu = "4.5.1";
function Ln(r, e) {
  return new Promise(function(t) {
    return setTimeout(t, r, e);
  });
}
function Oh() {
  return new Promise(function(r) {
    var e = new MessageChannel();
    e.port1.onmessage = function() {
      return r();
    }, e.port2.postMessage(null);
  });
}
function Mh(r, e) {
  e === void 0 && (e = 1 / 0);
  var t = window.requestIdleCallback;
  return t ? new Promise(function(n) {
    return t.call(window, function() {
      return n();
    }, { timeout: e });
  }) : Ln(Math.min(r, e));
}
function Cu(r) {
  return !!r && typeof r.then == "function";
}
function Ks(r, e) {
  try {
    var t = r();
    Cu(t) ? t.then(function(n) {
      return e(!0, n);
    }, function(n) {
      return e(!1, n);
    }) : e(!0, t);
  } catch (n) {
    e(!1, n);
  }
}
function qs(r, e, t) {
  return t === void 0 && (t = 16), Te(this, void 0, void 0, function() {
    var n, i, o, s;
    return De(this, function(a) {
      switch (a.label) {
        case 0:
          n = Array(r.length), i = Date.now(), o = 0, a.label = 1;
        case 1:
          return o < r.length ? (n[o] = e(r[o], o), s = Date.now(), s >= i + t ? (i = s, [4, Oh()]) : [3, 3]) : [3, 4];
        case 2:
          a.sent(), a.label = 3;
        case 3:
          return ++o, [3, 1];
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
function $h(r, e) {
  for (var t = 0, n = r.length; t < n; ++t)
    if (r[t] === e)
      return !0;
  return !1;
}
function Nh(r, e) {
  return !$h(r, e);
}
function ls(r) {
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
function Iu(r, e) {
  if (e === void 0 && (e = 1), Math.abs(e) >= 1)
    return Math.round(r / e) * e;
  var t = 1 / e;
  return Math.round(r * t) / t;
}
function Ph(r) {
  for (var e, t, n = "Unexpected syntax '".concat(r, "'"), i = /^\s*([a-z-]*)(.*)$/i.exec(r), o = i[1] || void 0, s = {}, a = /([.:#][\w-]+|\[.+?\])/gi, l = function(d, h) {
    s[d] = s[d] || [], s[d].push(h);
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
  return [o, s];
}
function Lh(r) {
  for (var e = new Uint8Array(r.length), t = 0; t < r.length; t++) {
    var n = r.charCodeAt(t);
    if (n > 127)
      return new TextEncoder().encode(r);
    e[t] = n;
  }
  return e;
}
function Ge(r, e) {
  var t = r[0] >>> 16, n = r[0] & 65535, i = r[1] >>> 16, o = r[1] & 65535, s = e[0] >>> 16, a = e[0] & 65535, l = e[1] >>> 16, u = e[1] & 65535, c = 0, f = 0, d = 0, h = 0;
  h += o + u, d += h >>> 16, h &= 65535, d += i + l, f += d >>> 16, d &= 65535, f += n + a, c += f >>> 16, f &= 65535, c += t + s, c &= 65535, r[0] = c << 16 | f, r[1] = d << 16 | h;
}
function we(r, e) {
  var t = r[0] >>> 16, n = r[0] & 65535, i = r[1] >>> 16, o = r[1] & 65535, s = e[0] >>> 16, a = e[0] & 65535, l = e[1] >>> 16, u = e[1] & 65535, c = 0, f = 0, d = 0, h = 0;
  h += o * u, d += h >>> 16, h &= 65535, d += i * u, f += d >>> 16, d &= 65535, d += o * l, f += d >>> 16, d &= 65535, f += n * u, c += f >>> 16, f &= 65535, f += i * l, c += f >>> 16, f &= 65535, f += o * a, c += f >>> 16, f &= 65535, c += t * u + n * l + i * a + o * s, c &= 65535, r[0] = c << 16 | f, r[1] = d << 16 | h;
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
var Th = [4283543511, 3981806797], Dh = [3301882366, 444984403];
function Qs(r) {
  var e = [0, r[0] >>> 1];
  V(r, e), we(r, Th), e[1] = r[0] >>> 1, V(r, e), we(r, Dh), e[1] = r[0] >>> 1, V(r, e);
}
var Gr = [2277735313, 289559509], Vr = [1291169091, 658871167], ea = [0, 5], Fh = [0, 1390208809], zh = [0, 944331445];
function Uh(r, e) {
  var t = Lh(r);
  e = e || 0;
  var n = [0, t.length], i = n[1] % 16, o = n[1] - i, s = [0, e], a = [0, e], l = [0, 0], u = [0, 0], c;
  for (c = 0; c < o; c = c + 16)
    l[0] = t[c + 4] | t[c + 5] << 8 | t[c + 6] << 16 | t[c + 7] << 24, l[1] = t[c] | t[c + 1] << 8 | t[c + 2] << 16 | t[c + 3] << 24, u[0] = t[c + 12] | t[c + 13] << 8 | t[c + 14] << 16 | t[c + 15] << 24, u[1] = t[c + 8] | t[c + 9] << 8 | t[c + 10] << 16 | t[c + 11] << 24, we(l, Gr), gt(l, 31), we(l, Vr), V(s, l), gt(s, 27), Ge(s, a), we(s, ea), Ge(s, Fh), we(u, Vr), gt(u, 33), we(u, Gr), V(a, u), gt(a, 31), Ge(a, s), we(a, ea), Ge(a, zh);
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
      f[1] = t[c], V(l, f), we(l, Gr), gt(l, 31), we(l, Vr), V(s, l);
  }
  return V(s, n), V(a, n), Ge(s, a), Ge(a, s), Qs(s), Qs(a), Ge(s, a), Ge(a, s), ("00000000" + (s[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (s[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (a[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (a[1] >>> 0).toString(16)).slice(-8);
}
function Bh(r) {
  var e;
  return ho({ name: r.name, message: r.message, stack: (e = r.stack) === null || e === void 0 ? void 0 : e.split(`
`) }, r);
}
function Wh(r) {
  return /^function\s.*?\{\s*\[native code]\s*}$/.test(String(r));
}
function Zh(r) {
  return typeof r != "function";
}
function jh(r, e) {
  var t = ar(new Promise(function(n) {
    var i = Date.now();
    Ks(r.bind(null, e), function() {
      for (var o = [], s = 0; s < arguments.length; s++)
        o[s] = arguments[s];
      var a = Date.now() - i;
      if (!o[0])
        return n(function() {
          return { error: o[1], duration: a };
        });
      var l = o[1];
      if (Zh(l))
        return n(function() {
          return { value: l, duration: a };
        });
      n(function() {
        return new Promise(function(u) {
          var c = Date.now();
          Ks(l, function() {
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
function Gh(r, e, t, n) {
  var i = Object.keys(r).filter(function(s) {
    return Nh(t, s);
  }), o = ar(qs(i, function(s) {
    return jh(r[s], e);
  }, n));
  return function() {
    return Te(this, void 0, void 0, function() {
      var a, l, u, c, f;
      return De(this, function(d) {
        switch (d.label) {
          case 0:
            return [4, o];
          case 1:
            return a = d.sent(), [4, qs(a, function(h) {
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
function Au() {
  var r = window, e = navigator;
  return ue([
    "MSCSSMatrix" in r,
    "msSetImmediate" in r,
    "msIndexedDB" in r,
    "msMaxTouchPoints" in e,
    "msPointerEnabled" in e
  ]) >= 4;
}
function Vh() {
  var r = window, e = navigator;
  return ue(["msWriteProfilerMark" in r, "MSStream" in r, "msLaunchUri" in e, "msSaveBlob" in e]) >= 3 && !Au();
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
function us() {
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
    Wh(r.print) && // Doesn't work in Safari < 15.4
    String(r.browser) === "[object WebPageNamespace]"
  );
}
function Eu() {
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
function Hh() {
  var r = window;
  return ue([
    !("MediaSettingsRange" in r),
    "RTCEncodedAudioFrame" in r,
    "" + r.Intl == "[object Intl]",
    "" + r.Reflect == "[object Reflect]"
  ]) >= 3;
}
function Yh() {
  var r = window, e = r.URLPattern;
  return ue([
    "union" in Set.prototype,
    "Iterator" in r,
    e && "hasRegExpGroups" in e.prototype,
    "RGB8" in WebGLRenderingContext.prototype
  ]) >= 3;
}
function Xh() {
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
function Jh() {
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
function Kh() {
  var r = document;
  return r.fullscreenElement || r.msFullscreenElement || r.mozFullScreenElement || r.webkitFullscreenElement || null;
}
function qh() {
  var r = document;
  return (r.exitFullscreen || r.msExitFullscreen || r.mozCancelFullScreen || r.webkitExitFullscreen).call(r);
}
function cs() {
  var r = Er(), e = Eu(), t = window, n = navigator, i = "connection";
  return r ? ue([
    !("SharedWorker" in t),
    // `typechange` is deprecated, but it's still present on Android (tested on Chrome Mobile 117)
    // Removal proposal https://bugs.chromium.org/p/chromium/issues/detail?id=699892
    // Note: this expression returns true on ChromeOS, so additional detectors are required to avoid false-positives
    n[i] && "ontypechange" in n[i],
    !("sinkId" in new Audio())
  ]) >= 2 : e ? ue(["onorientationchange" in t, "orientation" in t, /android/i.test(n.appVersion)]) >= 2 : !1;
}
function Qh() {
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
function ed() {
  return nd() ? -4 : td();
}
function td() {
  var r = window, e = r.OfflineAudioContext || r.webkitOfflineAudioContext;
  if (!e)
    return -2;
  if (rd())
    return -1;
  var t = 4500, n = 5e3, i = new e(1, n, 44100), o = i.createOscillator();
  o.type = "triangle", o.frequency.value = 1e4;
  var s = i.createDynamicsCompressor();
  s.threshold.value = -50, s.knee.value = 40, s.ratio.value = 12, s.attack.value = 0, s.release.value = 0.25, o.connect(s), s.connect(i.destination), o.start(0);
  var a = id(i), l = a[0], u = a[1], c = ar(l.then(function(f) {
    return od(f.getChannelData(0).subarray(t));
  }, function(f) {
    if (f.name === "timeout" || f.name === "suspended")
      return -3;
    throw f;
  }));
  return function() {
    return u(), c;
  };
}
function rd() {
  return Ce() && !us() && !Xh();
}
function nd() {
  return (
    // Safari ≥17
    Ce() && kr() && Rr() || // Samsung Internet ≥26
    Er() && Qh() && Yh()
  );
}
function id(r) {
  var e = 3, t = 500, n = 500, i = 5e3, o = function() {
  }, s = new Promise(function(a, l) {
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
        switch (Cu(p) && ar(p), r.state) {
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
    h(), o = function() {
      u || (u = !0, f > 0 && d());
    };
  });
  return [s, o];
}
function od(r) {
  for (var e = 0, t = 0; t < r.length; ++t)
    e += Math.abs(r[t]);
  return e;
}
function ta(r) {
  var e = new Error(r);
  return e.name = r, e;
}
function Ru(r, e, t) {
  var n, i, o;
  return t === void 0 && (t = 50), Te(this, void 0, void 0, function() {
    var s, a;
    return De(this, function(l) {
      switch (l.label) {
        case 0:
          s = document, l.label = 1;
        case 1:
          return s.body ? [3, 3] : [4, Ln(t)];
        case 2:
          return l.sent(), [3, 1];
        case 3:
          a = s.createElement("iframe"), l.label = 4;
        case 4:
          return l.trys.push([4, , 10, 11]), [4, new Promise(function(u, c) {
            var f = !1, d = function() {
              f = !0, u();
            }, h = function(g) {
              f = !0, c(g);
            };
            a.onload = d, a.onerror = h;
            var p = a.style;
            p.setProperty("display", "block", "important"), p.position = "absolute", p.top = "0", p.left = "0", p.visibility = "hidden", e && "srcdoc" in a ? a.srcdoc = e : a.src = "about:blank", s.body.appendChild(a);
            var m = function() {
              var g, v;
              f || (((v = (g = a.contentWindow) === null || g === void 0 ? void 0 : g.document) === null || v === void 0 ? void 0 : v.readyState) === "complete" ? d() : setTimeout(m, 10));
            };
            m();
          })];
        case 5:
          l.sent(), l.label = 6;
        case 6:
          return !((i = (n = a.contentWindow) === null || n === void 0 ? void 0 : n.document) === null || i === void 0) && i.body ? [3, 8] : [4, Ln(t)];
        case 7:
          return l.sent(), [3, 6];
        case 8:
          return [4, r(a, a.contentWindow)];
        case 9:
          return [2, l.sent()];
        case 10:
          return (o = a.parentNode) === null || o === void 0 || o.removeChild(a), [
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
function sd(r) {
  for (var e = Ph(r), t = e[0], n = e[1], i = document.createElement(t ?? "div"), o = 0, s = Object.keys(n); o < s.length; o++) {
    var a = s[o], l = n[a].join(" ");
    a === "style" ? ad(i.style, l) : i.setAttribute(a, l);
  }
  return i;
}
function ad(r, e) {
  for (var t = 0, n = e.split(";"); t < n.length; t++) {
    var i = n[t], o = /^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(i);
    if (o) {
      var s = o[1], a = o[2], l = o[4];
      r.setProperty(s, a, l || "");
    }
  }
}
function ld() {
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
var ud = "mmMwWLliI0O&1", cd = "48px", yt = ["monospace", "sans-serif", "serif"], ra = [
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
function fd() {
  var r = this;
  return Ru(function(e, t) {
    var n = t.document;
    return Te(r, void 0, void 0, function() {
      var i, o, s, a, l, u, c, f, d, h, p, m;
      return De(this, function(g) {
        for (i = n.body, i.style.fontSize = cd, o = n.createElement("div"), o.style.setProperty("visibility", "hidden", "important"), s = {}, a = {}, l = function(v) {
          var b = n.createElement("span"), y = b.style;
          return y.position = "absolute", y.top = "0", y.left = "0", y.fontFamily = v, b.textContent = ud, o.appendChild(b), b;
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
            return v[y].offsetWidth !== s[b] || v[y].offsetHeight !== a[b];
          });
        }, h = c(), p = f(), i.appendChild(o), m = 0; m < yt.length; m++)
          s[yt[m]] = h[m].offsetWidth, a[yt[m]] = h[m].offsetHeight;
        return [2, ra.filter(function(v) {
          return d(p[v]);
        })];
      });
    });
  });
}
function hd() {
  var r = navigator.plugins;
  if (r) {
    for (var e = [], t = 0; t < r.length; ++t) {
      var n = r[t];
      if (n) {
        for (var i = [], o = 0; o < n.length; ++o) {
          var s = n[o];
          i.push({
            type: s.type,
            suffixes: s.suffixes
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
function dd() {
  return pd(Sd());
}
function pd(r) {
  var e, t = !1, n, i, o = md(), s = o[0], a = o[1];
  return gd(s, a) ? (t = yd(a), r ? n = i = "skipped" : (e = wd(s, a), n = e[0], i = e[1])) : n = i = "unsupported", { winding: t, geometry: n, text: i };
}
function md() {
  var r = document.createElement("canvas");
  return r.width = 1, r.height = 1, [r, r.getContext("2d")];
}
function gd(r, e) {
  return !!(e && r.toDataURL);
}
function yd(r) {
  return r.rect(0, 0, 10, 10), r.rect(2, 2, 6, 6), !r.isPointInPath(5, 5, "evenodd");
}
function wd(r, e) {
  vd(r, e);
  var t = _i(r), n = _i(r);
  if (t !== n)
    return [
      "unstable",
      "unstable"
      /* ImageStatus.Unstable */
    ];
  bd(r, e);
  var i = _i(r);
  return [i, t];
}
function vd(r, e) {
  r.width = 240, r.height = 60, e.textBaseline = "alphabetic", e.fillStyle = "#f60", e.fillRect(100, 1, 62, 20), e.fillStyle = "#069", e.font = '11pt "Times New Roman"';
  var t = "Cwm fjordbank gly ".concat(
    "😃"
    /* 😃 */
  );
  e.fillText(t, 2, 15), e.fillStyle = "rgba(102, 204, 0, 0.2)", e.font = "18pt Arial", e.fillText(t, 4, 45);
}
function bd(r, e) {
  r.width = 122, r.height = 110, e.globalCompositeOperation = "multiply";
  for (var t = 0, n = [
    ["#f2f", 40, 40],
    ["#2ff", 80, 40],
    ["#ff2", 60, 80]
  ]; t < n.length; t++) {
    var i = n[t], o = i[0], s = i[1], a = i[2];
    e.fillStyle = o, e.beginPath(), e.arc(s, a, 40, 0, Math.PI * 2, !0), e.closePath(), e.fill();
  }
  e.fillStyle = "#f9c", e.arc(60, 60, 60, 0, Math.PI * 2, !0), e.arc(60, 60, 20, 0, Math.PI * 2, !0), e.fill("evenodd");
}
function _i(r) {
  return r.toDataURL();
}
function Sd() {
  return Ce() && kr() && Rr();
}
function _d() {
  var r = navigator, e = 0, t;
  r.maxTouchPoints !== void 0 ? e = ls(r.maxTouchPoints) : r.msMaxTouchPoints !== void 0 && (e = r.msMaxTouchPoints);
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
function xd() {
  return navigator.oscpu;
}
function Cd() {
  var r = navigator, e = [], t = r.language || r.userLanguage || r.browserLanguage || r.systemLanguage;
  if (t !== void 0 && e.push([t]), Array.isArray(r.languages))
    Er() && Hh() || e.push(r.languages);
  else if (typeof r.languages == "string") {
    var n = r.languages;
    n && e.push(n.split(","));
  }
  return e;
}
function Id() {
  return window.screen.colorDepth;
}
function Ad() {
  return Ue(xe(navigator.deviceMemory), void 0);
}
function Ed() {
  if (!(Ce() && kr() && Rr()))
    return Rd();
}
function Rd() {
  var r = screen, e = function(n) {
    return Ue(ls(n), null);
  }, t = [e(r.width), e(r.height)];
  return t.sort().reverse(), t;
}
var kd = 2500, Od = 10, Cn, xi;
function Md() {
  if (xi === void 0) {
    var r = function() {
      var e = po();
      mo(e) ? xi = setTimeout(r, kd) : (Cn = e, xi = void 0);
    };
    r();
  }
}
function $d() {
  var r = this;
  return Md(), function() {
    return Te(r, void 0, void 0, function() {
      var e;
      return De(this, function(t) {
        switch (t.label) {
          case 0:
            return e = po(), mo(e) ? Cn ? [2, _u([], Cn, !0)] : Kh() ? [4, qh()] : [3, 2] : [3, 2];
          case 1:
            t.sent(), e = po(), t.label = 2;
          case 2:
            return mo(e) || (Cn = e), [2, e];
        }
      });
    });
  };
}
function Nd() {
  var r = this;
  if (Ce() && kr() && Rr())
    return function() {
      return Promise.resolve(void 0);
    };
  var e = $d();
  return function() {
    return Te(r, void 0, void 0, function() {
      var t, n;
      return De(this, function(i) {
        switch (i.label) {
          case 0:
            return [4, e()];
          case 1:
            return t = i.sent(), n = function(o) {
              return o === null ? null : Iu(o, Od);
            }, [2, [n(t[0]), n(t[1]), n(t[2]), n(t[3])]];
        }
      });
    });
  };
}
function po() {
  var r = screen;
  return [
    Ue(xe(r.availTop), null),
    Ue(xe(r.width) - xe(r.availWidth) - Ue(xe(r.availLeft), 0), null),
    Ue(xe(r.height) - xe(r.availHeight) - Ue(xe(r.availTop), 0), null),
    Ue(xe(r.availLeft), null)
  ];
}
function mo(r) {
  for (var e = 0; e < 4; ++e)
    if (r[e])
      return !1;
  return !0;
}
function Pd() {
  return Ue(ls(navigator.hardwareConcurrency), void 0);
}
function Ld() {
  var r, e = (r = window.Intl) === null || r === void 0 ? void 0 : r.DateTimeFormat;
  if (e) {
    var t = new e().resolvedOptions().timeZone;
    if (t)
      return t;
  }
  var n = -Td();
  return "UTC".concat(n >= 0 ? "+" : "").concat(n);
}
function Td() {
  var r = (/* @__PURE__ */ new Date()).getFullYear();
  return Math.max(
    // `getTimezoneOffset` returns a number as a string in some unidentified cases
    xe(new Date(r, 0, 1).getTimezoneOffset()),
    xe(new Date(r, 6, 1).getTimezoneOffset())
  );
}
function Dd() {
  try {
    return !!window.sessionStorage;
  } catch {
    return !0;
  }
}
function Fd() {
  try {
    return !!window.localStorage;
  } catch {
    return !0;
  }
}
function zd() {
  if (!(Au() || Vh()))
    try {
      return !!window.indexedDB;
    } catch {
      return !0;
    }
}
function Ud() {
  return !!window.openDatabase;
}
function Bd() {
  return navigator.cpuClass;
}
function Wd() {
  var r = navigator.platform;
  return r === "MacIntel" && Ce() && !us() ? Jh() ? "iPad" : "iPhone" : r;
}
function Zd() {
  return navigator.vendor || "";
}
function jd() {
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
function Gd() {
  var r = document;
  try {
    r.cookie = "cookietest=1; SameSite=Strict;";
    var e = r.cookie.indexOf("cookietest=") !== -1;
    return r.cookie = "cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT", e;
  } catch {
    return !1;
  }
}
function Vd() {
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
function Hd(r) {
  var e = r === void 0 ? {} : r, t = e.debug;
  return Te(this, void 0, void 0, function() {
    var n, i, o, s, a, l;
    return De(this, function(u) {
      switch (u.label) {
        case 0:
          return Yd() ? (n = Vd(), i = Object.keys(n), o = (l = []).concat.apply(l, i.map(function(c) {
            return n[c];
          })), [4, Xd(o)]) : [2, void 0];
        case 1:
          return s = u.sent(), t && Jd(n, s), a = i.filter(function(c) {
            var f = n[c], d = ue(f.map(function(h) {
              return s[h];
            }));
            return d > f.length * 0.6;
          }), a.sort(), [2, a];
      }
    });
  });
}
function Yd() {
  return Ce() || cs();
}
function Xd(r) {
  var e;
  return Te(this, void 0, void 0, function() {
    var t, n, i, o, l, s, a, l;
    return De(this, function(u) {
      switch (u.label) {
        case 0:
          for (t = document, n = t.createElement("div"), i = new Array(r.length), o = {}, na(n), l = 0; l < r.length; ++l)
            s = sd(r[l]), s.tagName === "DIALOG" && s.show(), a = t.createElement("div"), na(a), a.appendChild(s), n.appendChild(a), i[l] = s;
          u.label = 1;
        case 1:
          return t.body ? [3, 3] : [4, Ln(50)];
        case 2:
          return u.sent(), [3, 1];
        case 3:
          t.body.appendChild(n);
          try {
            for (l = 0; l < r.length; ++l)
              i[l].offsetParent || (o[r[l]] = !0);
          } finally {
            (e = n.parentNode) === null || e === void 0 || e.removeChild(n);
          }
          return [2, o];
      }
    });
  });
}
function na(r) {
  r.style.setProperty("visibility", "hidden", "important"), r.style.setProperty("display", "block", "important");
}
function Jd(r, e) {
  for (var t = "DOM blockers debug:\n```", n = 0, i = Object.keys(r); n < i.length; n++) {
    var o = i[n];
    t += `
`.concat(o, ":");
    for (var s = 0, a = r[o]; s < a.length; s++) {
      var l = a[s];
      t += `
  `.concat(e[l] ? "🚫" : "➡️", " ").concat(l);
    }
  }
  console.log("".concat(t, "\n```"));
}
function Kd() {
  for (var r = 0, e = ["rec2020", "p3", "srgb"]; r < e.length; r++) {
    var t = e[r];
    if (matchMedia("(color-gamut: ".concat(t, ")")).matches)
      return t;
  }
}
function qd() {
  if (ia("inverted"))
    return !0;
  if (ia("none"))
    return !1;
}
function ia(r) {
  return matchMedia("(inverted-colors: ".concat(r, ")")).matches;
}
function Qd() {
  if (oa("active"))
    return !0;
  if (oa("none"))
    return !1;
}
function oa(r) {
  return matchMedia("(forced-colors: ".concat(r, ")")).matches;
}
var ep = 100;
function tp() {
  if (matchMedia("(min-monochrome: 0)").matches) {
    for (var r = 0; r <= ep; ++r)
      if (matchMedia("(max-monochrome: ".concat(r, ")")).matches)
        return r;
    throw new Error("Too high value");
  }
}
function rp() {
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
function np() {
  if (sa("reduce"))
    return !0;
  if (sa("no-preference"))
    return !1;
}
function sa(r) {
  return matchMedia("(prefers-reduced-motion: ".concat(r, ")")).matches;
}
function ip() {
  if (aa("reduce"))
    return !0;
  if (aa("no-preference"))
    return !1;
}
function aa(r) {
  return matchMedia("(prefers-reduced-transparency: ".concat(r, ")")).matches;
}
function op() {
  if (la("high"))
    return !0;
  if (la("standard"))
    return !1;
}
function la(r) {
  return matchMedia("(dynamic-range: ".concat(r, ")")).matches;
}
var F = Math, oe = function() {
  return 0;
};
function sp() {
  var r = F.acos || oe, e = F.acosh || oe, t = F.asin || oe, n = F.asinh || oe, i = F.atanh || oe, o = F.atan || oe, s = F.sin || oe, a = F.sinh || oe, l = F.cos || oe, u = F.cosh || oe, c = F.tan || oe, f = F.tanh || oe, d = F.exp || oe, h = F.expm1 || oe, p = F.log1p || oe, m = function(S) {
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
    atan: o(0.5),
    sin: s(-1e300),
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
var ap = "mmMwWLliI0fiflO&1", Ci = {
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
function lp() {
  return up(function(r, e) {
    for (var t = {}, n = {}, i = 0, o = Object.keys(Ci); i < o.length; i++) {
      var s = o[i], a = Ci[s], l = a[0], u = l === void 0 ? {} : l, c = a[1], f = c === void 0 ? ap : c, d = r.createElement("span");
      d.textContent = f, d.style.whiteSpace = "nowrap";
      for (var h = 0, p = Object.keys(u); h < p.length; h++) {
        var m = p[h], g = u[m];
        g !== void 0 && (d.style[m] = g);
      }
      t[s] = d, e.append(r.createElement("br"), d);
    }
    for (var v = 0, b = Object.keys(Ci); v < b.length; v++) {
      var s = b[v];
      n[s] = t[s].getBoundingClientRect().width;
    }
    return n;
  });
}
function up(r, e) {
  return e === void 0 && (e = 4e3), Ru(function(t, n) {
    var i = n.document, o = i.body, s = o.style;
    s.width = "".concat(e, "px"), s.webkitTextSizeAdjust = s.textSizeAdjust = "none", Er() ? o.style.zoom = "".concat(1 / n.devicePixelRatio) : Ce() && (o.style.zoom = "reset");
    var a = i.createElement("div");
    return a.textContent = _u([], Array(e / 20 << 0), !0).map(function() {
      return "word";
    }).join(" "), o.appendChild(a), r(i, o);
  }, '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">');
}
function cp() {
  return navigator.pdfViewerEnabled;
}
function fp() {
  var r = new Float32Array(1), e = new Uint8Array(r.buffer);
  return r[0] = 1 / 0, r[0] = r[0] - r[0], e[3];
}
function hp() {
  var r = window.ApplePaySession;
  if (typeof (r == null ? void 0 : r.canMakePayments) != "function")
    return -1;
  if (dp())
    return -3;
  try {
    return r.canMakePayments() ? 1 : 0;
  } catch (e) {
    return pp(e);
  }
}
var dp = ld;
function pp(r) {
  if (r instanceof Error && r.name === "InvalidAccessError" && /\bfrom\b.*\binsecure\b/i.test(r.message))
    return -2;
  throw r;
}
function mp() {
  var r, e = document.createElement("a"), t = (r = e.attributionSourceId) !== null && r !== void 0 ? r : e.attributionsourceid;
  return t === void 0 ? void 0 : String(t);
}
var ku = -1, Ou = -2, gp = /* @__PURE__ */ new Set([
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
]), yp = /* @__PURE__ */ new Set([
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
]), wp = ["FRAGMENT_SHADER", "VERTEX_SHADER"], vp = ["LOW_FLOAT", "MEDIUM_FLOAT", "HIGH_FLOAT", "LOW_INT", "MEDIUM_INT", "HIGH_INT"], Mu = "WEBGL_debug_renderer_info", bp = "WEBGL_polygon_mode";
function Sp(r) {
  var e, t, n, i, o, s, a = r.cache, l = $u(a);
  if (!l)
    return ku;
  if (!Pu(l))
    return Ou;
  var u = Nu() ? null : l.getExtension(Mu);
  return {
    version: ((e = l.getParameter(l.VERSION)) === null || e === void 0 ? void 0 : e.toString()) || "",
    vendor: ((t = l.getParameter(l.VENDOR)) === null || t === void 0 ? void 0 : t.toString()) || "",
    vendorUnmasked: u ? (n = l.getParameter(u.UNMASKED_VENDOR_WEBGL)) === null || n === void 0 ? void 0 : n.toString() : "",
    renderer: ((i = l.getParameter(l.RENDERER)) === null || i === void 0 ? void 0 : i.toString()) || "",
    rendererUnmasked: u ? (o = l.getParameter(u.UNMASKED_RENDERER_WEBGL)) === null || o === void 0 ? void 0 : o.toString() : "",
    shadingLanguageVersion: ((s = l.getParameter(l.SHADING_LANGUAGE_VERSION)) === null || s === void 0 ? void 0 : s.toString()) || ""
  };
}
function _p(r) {
  var e = r.cache, t = $u(e);
  if (!t)
    return ku;
  if (!Pu(t))
    return Ou;
  var n = t.getSupportedExtensions(), i = t.getContextAttributes(), o = [], s = [], a = [], l = [], u = [];
  if (i)
    for (var c = 0, f = Object.keys(i); c < f.length; c++) {
      var d = f[c];
      s.push("".concat(d, "=").concat(i[d]));
    }
  for (var h = ua(t), p = 0, m = h; p < m.length; p++) {
    var g = m[p], v = t[g];
    a.push("".concat(g, "=").concat(v).concat(gp.has(v) ? "=".concat(t.getParameter(v)) : ""));
  }
  if (n)
    for (var b = 0, y = n; b < y.length; b++) {
      var w = y[b];
      if (!(w === Mu && Nu() || w === bp && Ip())) {
        var _ = t.getExtension(w);
        if (!_) {
          o.push(w);
          continue;
        }
        for (var E = 0, x = ua(_); E < x.length; E++) {
          var g = x[E], v = _[g];
          l.push("".concat(g, "=").concat(v).concat(yp.has(v) ? "=".concat(t.getParameter(v)) : ""));
        }
      }
    }
  for (var S = 0, A = wp; S < A.length; S++)
    for (var I = A[S], R = 0, q = vp; R < q.length; R++) {
      var k = q[R], me = xp(t, I, k);
      u.push("".concat(I, ".").concat(k, "=").concat(me.join(",")));
    }
  return l.sort(), a.sort(), {
    contextAttributes: s,
    parameters: a,
    shaderPrecisions: u,
    extensions: n,
    extensionParameters: l,
    unsupportedExtensions: o
  };
}
function $u(r) {
  if (r.webgl)
    return r.webgl.context;
  var e = document.createElement("canvas"), t;
  e.addEventListener("webglCreateContextError", function() {
    return t = void 0;
  });
  for (var n = 0, i = ["webgl", "experimental-webgl"]; n < i.length; n++) {
    var o = i[n];
    try {
      t = e.getContext(o);
    } catch {
    }
    if (t)
      break;
  }
  return r.webgl = { context: t }, t;
}
function xp(r, e, t) {
  var n = r.getShaderPrecisionFormat(r[e], r[t]);
  return n ? [n.rangeMin, n.rangeMax, n.precision] : [];
}
function ua(r) {
  var e = Object.keys(r.__proto__);
  return e.filter(Cp);
}
function Cp(r) {
  return typeof r == "string" && !r.match(/[^A-Z0-9_x]/);
}
function Nu() {
  return Eu();
}
function Ip() {
  return Er() || Ce();
}
function Pu(r) {
  return typeof r.getParameter == "function";
}
function Ap() {
  var r, e = cs() || Ce();
  return e ? window.AudioContext && (r = new AudioContext().baseLatency) !== null && r !== void 0 ? r : -1 : -2;
}
var Ep = {
  // READ FIRST:
  // See https://github.com/fingerprintjs/fingerprintjs/blob/master/contributing.md#how-to-make-an-entropy-source
  // to learn how entropy source works and how to make your own.
  // The sources run in this exact order.
  // The asynchronous sources are at the start to run in parallel with other sources.
  fonts: fd,
  domBlockers: Hd,
  fontPreferences: lp,
  audio: ed,
  screenFrame: Nd,
  canvas: dd,
  osCpu: xd,
  languages: Cd,
  colorDepth: Id,
  deviceMemory: Ad,
  screenResolution: Ed,
  hardwareConcurrency: Pd,
  timezone: Ld,
  sessionStorage: Dd,
  localStorage: Fd,
  indexedDB: zd,
  openDatabase: Ud,
  cpuClass: Bd,
  platform: Wd,
  plugins: hd,
  touchSupport: _d,
  vendor: Zd,
  vendorFlavors: jd,
  cookiesEnabled: Gd,
  colorGamut: Kd,
  invertedColors: qd,
  forcedColors: Qd,
  monochrome: tp,
  contrast: rp,
  reducedMotion: np,
  reducedTransparency: ip,
  hdr: op,
  math: sp,
  pdfViewerEnabled: cp,
  architecture: fp,
  applePay: hp,
  privateClickMeasurement: mp,
  audioBaseLatency: Ap,
  // Some sources can affect other sources (e.g. WebGL can affect canvas), so it's important to run these sources
  // after other sources.
  webGlBasics: Sp,
  webGlExtensions: _p
};
function Rp(r) {
  return Gh(Ep, r, []);
}
var kp = "$ if upgrade to Pro: https://fpjs.dev/pro";
function Op(r) {
  var e = Mp(r), t = $p(e);
  return { score: e, comment: kp.replace(/\$/g, "".concat(t)) };
}
function Mp(r) {
  if (cs())
    return 0.4;
  if (Ce())
    return us() && !(kr() && Rr()) ? 0.5 : 0.3;
  var e = "value" in r.platform ? r.platform.value : "";
  return /^Win/.test(e) ? 0.6 : /^Mac/.test(e) ? 0.5 : 0.7;
}
function $p(r) {
  return Iu(0.99 + 0.01 * r, 1e-4);
}
function Np(r) {
  for (var e = "", t = 0, n = Object.keys(r).sort(); t < n.length; t++) {
    var i = n[t], o = r[i], s = "error" in o ? "error" : JSON.stringify(o.value);
    e += "".concat(e ? "|" : "").concat(i.replace(/([:|\\])/g, "\\$1"), ":").concat(s);
  }
  return e;
}
function Lu(r) {
  return JSON.stringify(r, function(e, t) {
    return t instanceof Error ? Bh(t) : t;
  }, 2);
}
function Tu(r) {
  return Uh(Np(r));
}
function Pp(r) {
  var e, t = Op(r);
  return {
    get visitorId() {
      return e === void 0 && (e = Tu(this.components)), e;
    },
    set visitorId(n) {
      e = n;
    },
    confidence: t,
    components: r,
    version: xu
  };
}
function Lp(r) {
  return r === void 0 && (r = 50), Mh(r, r * 2);
}
function Tp(r, e) {
  var t = Date.now();
  return {
    get: function(n) {
      return Te(this, void 0, void 0, function() {
        var i, o, s;
        return De(this, function(a) {
          switch (a.label) {
            case 0:
              return i = Date.now(), [4, r()];
            case 1:
              return o = a.sent(), s = Pp(o), (e || n != null && n.debug) && console.log("Copy the text below to get the debug data:\n\n```\nversion: ".concat(s.version, `
userAgent: `).concat(navigator.userAgent, `
timeBetweenLoadAndGet: `).concat(i - t, `
visitorId: `).concat(s.visitorId, `
components: `).concat(Lu(o), "\n```")), [2, s];
          }
        });
      });
    }
  };
}
function Dp() {
  if (!(window.__fpjs_d_m || Math.random() >= 1e-3))
    try {
      var r = new XMLHttpRequest();
      r.open("get", "https://m1.openfpcdn.io/fingerprintjs/v".concat(xu, "/npm-monitoring"), !0), r.send();
    } catch (e) {
      console.error(e);
    }
}
function Fp(r) {
  var e;
  return r === void 0 && (r = {}), Te(this, void 0, void 0, function() {
    var t, n, i;
    return De(this, function(o) {
      switch (o.label) {
        case 0:
          return (!((e = r.monitoring) !== null && e !== void 0) || e) && Dp(), t = r.delayFallback, n = r.debug, [4, Lp(t)];
        case 1:
          return o.sent(), i = Rp({ cache: {}, debug: n }), [2, Tp(i, n)];
      }
    });
  });
}
var zp = { load: Fp, hashComponents: Tu, componentsToDebugString: Lu };
/*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */
const Up = 4, ca = 0, fa = 1, Bp = 2;
function jt(r) {
  let e = r.length;
  for (; --e >= 0; )
    r[e] = 0;
}
const Wp = 0, Du = 1, Zp = 2, jp = 3, Gp = 258, fs = 29, Or = 256, lr = Or + 1 + fs, $t = 30, hs = 19, Fu = 2 * lr + 1, nt = 15, Ii = 16, Vp = 7, ds = 256, zu = 16, Uu = 17, Bu = 18, go = (
  /* extra bits for each length code */
  new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0])
), In = (
  /* extra bits for each distance code */
  new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13])
), Hp = (
  /* extra bits for each bit length code */
  new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7])
), Wu = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), Yp = 512, Be = new Array((lr + 2) * 2);
jt(Be);
const tr = new Array($t * 2);
jt(tr);
const ur = new Array(Yp);
jt(ur);
const cr = new Array(Gp - jp + 1);
jt(cr);
const ps = new Array(fs);
jt(ps);
const Tn = new Array($t);
jt(Tn);
function Ai(r, e, t, n, i) {
  this.static_tree = r, this.extra_bits = e, this.extra_base = t, this.elems = n, this.max_length = i, this.has_stree = r && r.length;
}
let Zu, ju, Gu;
function Ei(r, e) {
  this.dyn_tree = r, this.max_code = 0, this.stat_desc = e;
}
const Vu = (r) => r < 256 ? ur[r] : ur[256 + (r >>> 7)], fr = (r, e) => {
  r.pending_buf[r.pending++] = e & 255, r.pending_buf[r.pending++] = e >>> 8 & 255;
}, fe = (r, e, t) => {
  r.bi_valid > Ii - t ? (r.bi_buf |= e << r.bi_valid & 65535, fr(r, r.bi_buf), r.bi_buf = e >> Ii - r.bi_valid, r.bi_valid += t - Ii) : (r.bi_buf |= e << r.bi_valid & 65535, r.bi_valid += t);
}, Ne = (r, e, t) => {
  fe(
    r,
    t[e * 2],
    t[e * 2 + 1]
    /*.Len*/
  );
}, Hu = (r, e) => {
  let t = 0;
  do
    t |= r & 1, r >>>= 1, t <<= 1;
  while (--e > 0);
  return t >>> 1;
}, Xp = (r) => {
  r.bi_valid === 16 ? (fr(r, r.bi_buf), r.bi_buf = 0, r.bi_valid = 0) : r.bi_valid >= 8 && (r.pending_buf[r.pending++] = r.bi_buf & 255, r.bi_buf >>= 8, r.bi_valid -= 8);
}, Jp = (r, e) => {
  const t = e.dyn_tree, n = e.max_code, i = e.stat_desc.static_tree, o = e.stat_desc.has_stree, s = e.stat_desc.extra_bits, a = e.stat_desc.extra_base, l = e.stat_desc.max_length;
  let u, c, f, d, h, p, m = 0;
  for (d = 0; d <= nt; d++)
    r.bl_count[d] = 0;
  for (t[r.heap[r.heap_max] * 2 + 1] = 0, u = r.heap_max + 1; u < Fu; u++)
    c = r.heap[u], d = t[t[c * 2 + 1] * 2 + 1] + 1, d > l && (d = l, m++), t[c * 2 + 1] = d, !(c > n) && (r.bl_count[d]++, h = 0, c >= a && (h = s[c - a]), p = t[c * 2], r.opt_len += p * (d + h), o && (r.static_len += p * (i[c * 2 + 1] + h)));
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
}, Yu = (r, e, t) => {
  const n = new Array(nt + 1);
  let i = 0, o, s;
  for (o = 1; o <= nt; o++)
    i = i + t[o - 1] << 1, n[o] = i;
  for (s = 0; s <= e; s++) {
    let a = r[s * 2 + 1];
    a !== 0 && (r[s * 2] = Hu(n[a]++, a));
  }
}, Kp = () => {
  let r, e, t, n, i;
  const o = new Array(nt + 1);
  for (t = 0, n = 0; n < fs - 1; n++)
    for (ps[n] = t, r = 0; r < 1 << go[n]; r++)
      cr[t++] = n;
  for (cr[t - 1] = n, i = 0, n = 0; n < 16; n++)
    for (Tn[n] = i, r = 0; r < 1 << In[n]; r++)
      ur[i++] = n;
  for (i >>= 7; n < $t; n++)
    for (Tn[n] = i << 7, r = 0; r < 1 << In[n] - 7; r++)
      ur[256 + i++] = n;
  for (e = 0; e <= nt; e++)
    o[e] = 0;
  for (r = 0; r <= 143; )
    Be[r * 2 + 1] = 8, r++, o[8]++;
  for (; r <= 255; )
    Be[r * 2 + 1] = 9, r++, o[9]++;
  for (; r <= 279; )
    Be[r * 2 + 1] = 7, r++, o[7]++;
  for (; r <= 287; )
    Be[r * 2 + 1] = 8, r++, o[8]++;
  for (Yu(Be, lr + 1, o), r = 0; r < $t; r++)
    tr[r * 2 + 1] = 5, tr[r * 2] = Hu(r, 5);
  Zu = new Ai(Be, go, Or + 1, lr, nt), ju = new Ai(tr, In, 0, $t, nt), Gu = new Ai(new Array(0), Hp, 0, hs, Vp);
}, Xu = (r) => {
  let e;
  for (e = 0; e < lr; e++)
    r.dyn_ltree[e * 2] = 0;
  for (e = 0; e < $t; e++)
    r.dyn_dtree[e * 2] = 0;
  for (e = 0; e < hs; e++)
    r.bl_tree[e * 2] = 0;
  r.dyn_ltree[ds * 2] = 1, r.opt_len = r.static_len = 0, r.sym_next = r.matches = 0;
}, Ju = (r) => {
  r.bi_valid > 8 ? fr(r, r.bi_buf) : r.bi_valid > 0 && (r.pending_buf[r.pending++] = r.bi_buf), r.bi_buf = 0, r.bi_valid = 0;
}, ha = (r, e, t, n) => {
  const i = e * 2, o = t * 2;
  return r[i] < r[o] || r[i] === r[o] && n[e] <= n[t];
}, Ri = (r, e, t) => {
  const n = r.heap[t];
  let i = t << 1;
  for (; i <= r.heap_len && (i < r.heap_len && ha(e, r.heap[i + 1], r.heap[i], r.depth) && i++, !ha(e, n, r.heap[i], r.depth)); )
    r.heap[t] = r.heap[i], t = i, i <<= 1;
  r.heap[t] = n;
}, da = (r, e, t) => {
  let n, i, o = 0, s, a;
  if (r.sym_next !== 0)
    do
      n = r.pending_buf[r.sym_buf + o++] & 255, n += (r.pending_buf[r.sym_buf + o++] & 255) << 8, i = r.pending_buf[r.sym_buf + o++], n === 0 ? Ne(r, i, e) : (s = cr[i], Ne(r, s + Or + 1, e), a = go[s], a !== 0 && (i -= ps[s], fe(r, i, a)), n--, s = Vu(n), Ne(r, s, t), a = In[s], a !== 0 && (n -= Tn[s], fe(r, n, a)));
    while (o < r.sym_next);
  Ne(r, ds, e);
}, yo = (r, e) => {
  const t = e.dyn_tree, n = e.stat_desc.static_tree, i = e.stat_desc.has_stree, o = e.stat_desc.elems;
  let s, a, l = -1, u;
  for (r.heap_len = 0, r.heap_max = Fu, s = 0; s < o; s++)
    t[s * 2] !== 0 ? (r.heap[++r.heap_len] = l = s, r.depth[s] = 0) : t[s * 2 + 1] = 0;
  for (; r.heap_len < 2; )
    u = r.heap[++r.heap_len] = l < 2 ? ++l : 0, t[u * 2] = 1, r.depth[u] = 0, r.opt_len--, i && (r.static_len -= n[u * 2 + 1]);
  for (e.max_code = l, s = r.heap_len >> 1; s >= 1; s--)
    Ri(r, t, s);
  u = o;
  do
    s = r.heap[
      1
      /*SMALLEST*/
    ], r.heap[
      1
      /*SMALLEST*/
    ] = r.heap[r.heap_len--], Ri(
      r,
      t,
      1
      /*SMALLEST*/
    ), a = r.heap[
      1
      /*SMALLEST*/
    ], r.heap[--r.heap_max] = s, r.heap[--r.heap_max] = a, t[u * 2] = t[s * 2] + t[a * 2], r.depth[u] = (r.depth[s] >= r.depth[a] ? r.depth[s] : r.depth[a]) + 1, t[s * 2 + 1] = t[a * 2 + 1] = u, r.heap[
      1
      /*SMALLEST*/
    ] = u++, Ri(
      r,
      t,
      1
      /*SMALLEST*/
    );
  while (r.heap_len >= 2);
  r.heap[--r.heap_max] = r.heap[
    1
    /*SMALLEST*/
  ], Jp(r, e), Yu(t, l, r.bl_count);
}, pa = (r, e, t) => {
  let n, i = -1, o, s = e[0 * 2 + 1], a = 0, l = 7, u = 4;
  for (s === 0 && (l = 138, u = 3), e[(t + 1) * 2 + 1] = 65535, n = 0; n <= t; n++)
    o = s, s = e[(n + 1) * 2 + 1], !(++a < l && o === s) && (a < u ? r.bl_tree[o * 2] += a : o !== 0 ? (o !== i && r.bl_tree[o * 2]++, r.bl_tree[zu * 2]++) : a <= 10 ? r.bl_tree[Uu * 2]++ : r.bl_tree[Bu * 2]++, a = 0, i = o, s === 0 ? (l = 138, u = 3) : o === s ? (l = 6, u = 3) : (l = 7, u = 4));
}, ma = (r, e, t) => {
  let n, i = -1, o, s = e[0 * 2 + 1], a = 0, l = 7, u = 4;
  for (s === 0 && (l = 138, u = 3), n = 0; n <= t; n++)
    if (o = s, s = e[(n + 1) * 2 + 1], !(++a < l && o === s)) {
      if (a < u)
        do
          Ne(r, o, r.bl_tree);
        while (--a !== 0);
      else o !== 0 ? (o !== i && (Ne(r, o, r.bl_tree), a--), Ne(r, zu, r.bl_tree), fe(r, a - 3, 2)) : a <= 10 ? (Ne(r, Uu, r.bl_tree), fe(r, a - 3, 3)) : (Ne(r, Bu, r.bl_tree), fe(r, a - 11, 7));
      a = 0, i = o, s === 0 ? (l = 138, u = 3) : o === s ? (l = 6, u = 3) : (l = 7, u = 4);
    }
}, qp = (r) => {
  let e;
  for (pa(r, r.dyn_ltree, r.l_desc.max_code), pa(r, r.dyn_dtree, r.d_desc.max_code), yo(r, r.bl_desc), e = hs - 1; e >= 3 && r.bl_tree[Wu[e] * 2 + 1] === 0; e--)
    ;
  return r.opt_len += 3 * (e + 1) + 5 + 5 + 4, e;
}, Qp = (r, e, t, n) => {
  let i;
  for (fe(r, e - 257, 5), fe(r, t - 1, 5), fe(r, n - 4, 4), i = 0; i < n; i++)
    fe(r, r.bl_tree[Wu[i] * 2 + 1], 3);
  ma(r, r.dyn_ltree, e - 1), ma(r, r.dyn_dtree, t - 1);
}, em = (r) => {
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
const tm = (r) => {
  ga || (Kp(), ga = !0), r.l_desc = new Ei(r.dyn_ltree, Zu), r.d_desc = new Ei(r.dyn_dtree, ju), r.bl_desc = new Ei(r.bl_tree, Gu), r.bi_buf = 0, r.bi_valid = 0, Xu(r);
}, Ku = (r, e, t, n) => {
  fe(r, (Wp << 1) + (n ? 1 : 0), 3), Ju(r), fr(r, t), fr(r, ~t), t && r.pending_buf.set(r.window.subarray(e, e + t), r.pending), r.pending += t;
}, rm = (r) => {
  fe(r, Du << 1, 3), Ne(r, ds, Be), Xp(r);
}, nm = (r, e, t, n) => {
  let i, o, s = 0;
  r.level > 0 ? (r.strm.data_type === Bp && (r.strm.data_type = em(r)), yo(r, r.l_desc), yo(r, r.d_desc), s = qp(r), i = r.opt_len + 3 + 7 >>> 3, o = r.static_len + 3 + 7 >>> 3, o <= i && (i = o)) : i = o = t + 5, t + 4 <= i && e !== -1 ? Ku(r, e, t, n) : r.strategy === Up || o === i ? (fe(r, (Du << 1) + (n ? 1 : 0), 3), da(r, Be, tr)) : (fe(r, (Zp << 1) + (n ? 1 : 0), 3), Qp(r, r.l_desc.max_code + 1, r.d_desc.max_code + 1, s + 1), da(r, r.dyn_ltree, r.dyn_dtree)), Xu(r), n && Ju(r);
}, im = (r, e, t) => (r.pending_buf[r.sym_buf + r.sym_next++] = e, r.pending_buf[r.sym_buf + r.sym_next++] = e >> 8, r.pending_buf[r.sym_buf + r.sym_next++] = t, e === 0 ? r.dyn_ltree[t * 2]++ : (r.matches++, e--, r.dyn_ltree[(cr[t] + Or + 1) * 2]++, r.dyn_dtree[Vu(e) * 2]++), r.sym_next === r.sym_end);
var om = tm, sm = Ku, am = nm, lm = im, um = rm, cm = {
  _tr_init: om,
  _tr_stored_block: sm,
  _tr_flush_block: am,
  _tr_tally: lm,
  _tr_align: um
};
const fm = (r, e, t, n) => {
  let i = r & 65535 | 0, o = r >>> 16 & 65535 | 0, s = 0;
  for (; t !== 0; ) {
    s = t > 2e3 ? 2e3 : t, t -= s;
    do
      i = i + e[n++] | 0, o = o + i | 0;
    while (--s);
    i %= 65521, o %= 65521;
  }
  return i | o << 16 | 0;
};
var hr = fm;
const hm = () => {
  let r, e = [];
  for (var t = 0; t < 256; t++) {
    r = t;
    for (var n = 0; n < 8; n++)
      r = r & 1 ? 3988292384 ^ r >>> 1 : r >>> 1;
    e[t] = r;
  }
  return e;
}, dm = new Uint32Array(hm()), pm = (r, e, t, n) => {
  const i = dm, o = n + t;
  r ^= -1;
  for (let s = n; s < o; s++)
    r = r >>> 8 ^ i[(r ^ e[s]) & 255];
  return r ^ -1;
};
var re = pm, lt = {
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
const { _tr_init: mm, _tr_stored_block: wo, _tr_flush_block: gm, _tr_tally: Xe, _tr_align: ym } = cm, {
  Z_NO_FLUSH: Je,
  Z_PARTIAL_FLUSH: wm,
  Z_FULL_FLUSH: vm,
  Z_FINISH: ve,
  Z_BLOCK: ya,
  Z_OK: ne,
  Z_STREAM_END: wa,
  Z_STREAM_ERROR: Pe,
  Z_DATA_ERROR: bm,
  Z_BUF_ERROR: ki,
  Z_DEFAULT_COMPRESSION: Sm,
  Z_FILTERED: _m,
  Z_HUFFMAN_ONLY: Hr,
  Z_RLE: xm,
  Z_FIXED: Cm,
  Z_DEFAULT_STRATEGY: Im,
  Z_UNKNOWN: Am,
  Z_DEFLATED: ei
} = ht, Em = 9, Rm = 15, km = 8, Om = 29, Mm = 256, vo = Mm + 1 + Om, $m = 30, Nm = 19, Pm = 2 * vo + 1, Lm = 15, N = 3, Ye = 258, Le = Ye + N + 1, Tm = 32, Pt = 42, ms = 57, bo = 69, So = 73, _o = 91, xo = 103, it = 113, Qt = 666, le = 1, Gt = 2, ut = 3, Vt = 4, Dm = 3, ot = (r, e) => (r.msg = lt[e], e), va = (r) => r * 2 - (r > 4 ? 9 : 0), He = (r) => {
  let e = r.length;
  for (; --e >= 0; )
    r[e] = 0;
}, Fm = (r) => {
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
let zm = (r, e, t) => (e << r.hash_shift ^ t) & r.hash_mask, Ke = zm;
const de = (r) => {
  const e = r.state;
  let t = e.pending;
  t > r.avail_out && (t = r.avail_out), t !== 0 && (r.output.set(e.pending_buf.subarray(e.pending_out, e.pending_out + t), r.next_out), r.next_out += t, e.pending_out += t, r.total_out += t, r.avail_out -= t, e.pending -= t, e.pending === 0 && (e.pending_out = 0));
}, pe = (r, e) => {
  gm(r, r.block_start >= 0 ? r.block_start : -1, r.strstart - r.block_start, e), r.block_start = r.strstart, de(r.strm);
}, T = (r, e) => {
  r.pending_buf[r.pending++] = e;
}, Yt = (r, e) => {
  r.pending_buf[r.pending++] = e >>> 8 & 255, r.pending_buf[r.pending++] = e & 255;
}, Co = (r, e, t, n) => {
  let i = r.avail_in;
  return i > n && (i = n), i === 0 ? 0 : (r.avail_in -= i, e.set(r.input.subarray(r.next_in, r.next_in + i), t), r.state.wrap === 1 ? r.adler = hr(r.adler, e, i, t) : r.state.wrap === 2 && (r.adler = re(r.adler, e, i, t)), r.next_in += i, r.total_in += i, i);
}, qu = (r, e) => {
  let t = r.max_chain_length, n = r.strstart, i, o, s = r.prev_length, a = r.nice_match;
  const l = r.strstart > r.w_size - Le ? r.strstart - (r.w_size - Le) : 0, u = r.window, c = r.w_mask, f = r.prev, d = r.strstart + Ye;
  let h = u[n + s - 1], p = u[n + s];
  r.prev_length >= r.good_match && (t >>= 2), a > r.lookahead && (a = r.lookahead);
  do
    if (i = e, !(u[i + s] !== p || u[i + s - 1] !== h || u[i] !== u[n] || u[++i] !== u[n + 1])) {
      n += 2, i++;
      do
        ;
      while (u[++n] === u[++i] && u[++n] === u[++i] && u[++n] === u[++i] && u[++n] === u[++i] && u[++n] === u[++i] && u[++n] === u[++i] && u[++n] === u[++i] && u[++n] === u[++i] && n < d);
      if (o = Ye - (d - n), n = d - Ye, o > s) {
        if (r.match_start = e, s = o, o >= a)
          break;
        h = u[n + s - 1], p = u[n + s];
      }
    }
  while ((e = f[e & c]) > l && --t !== 0);
  return s <= r.lookahead ? s : r.lookahead;
}, Lt = (r) => {
  const e = r.w_size;
  let t, n, i;
  do {
    if (n = r.window_size - r.lookahead - r.strstart, r.strstart >= e + (e - Le) && (r.window.set(r.window.subarray(e, e + e - n), 0), r.match_start -= e, r.strstart -= e, r.block_start -= e, r.insert > r.strstart && (r.insert = r.strstart), Fm(r), n += e), r.strm.avail_in === 0)
      break;
    if (t = Co(r.strm, r.window, r.strstart + r.lookahead, n), r.lookahead += t, r.lookahead + r.insert >= N)
      for (i = r.strstart - r.insert, r.ins_h = r.window[i], r.ins_h = Ke(r, r.ins_h, r.window[i + 1]); r.insert && (r.ins_h = Ke(r, r.ins_h, r.window[i + N - 1]), r.prev[i & r.w_mask] = r.head[r.ins_h], r.head[r.ins_h] = i, i++, r.insert--, !(r.lookahead + r.insert < N)); )
        ;
  } while (r.lookahead < Le && r.strm.avail_in !== 0);
}, Qu = (r, e) => {
  let t = r.pending_buf_size - 5 > r.w_size ? r.w_size : r.pending_buf_size - 5, n, i, o, s = 0, a = r.strm.avail_in;
  do {
    if (n = 65535, o = r.bi_valid + 42 >> 3, r.strm.avail_out < o || (o = r.strm.avail_out - o, i = r.strstart - r.block_start, n > i + r.strm.avail_in && (n = i + r.strm.avail_in), n > o && (n = o), n < t && (n === 0 && e !== ve || e === Je || n !== i + r.strm.avail_in)))
      break;
    s = e === ve && n === i + r.strm.avail_in ? 1 : 0, wo(r, 0, 0, s), r.pending_buf[r.pending - 4] = n, r.pending_buf[r.pending - 3] = n >> 8, r.pending_buf[r.pending - 2] = ~n, r.pending_buf[r.pending - 1] = ~n >> 8, de(r.strm), i && (i > n && (i = n), r.strm.output.set(r.window.subarray(r.block_start, r.block_start + i), r.strm.next_out), r.strm.next_out += i, r.strm.avail_out -= i, r.strm.total_out += i, r.block_start += i, n -= i), n && (Co(r.strm, r.strm.output, r.strm.next_out, n), r.strm.next_out += n, r.strm.avail_out -= n, r.strm.total_out += n);
  } while (s === 0);
  return a -= r.strm.avail_in, a && (a >= r.w_size ? (r.matches = 2, r.window.set(r.strm.input.subarray(r.strm.next_in - r.w_size, r.strm.next_in), 0), r.strstart = r.w_size, r.insert = r.strstart) : (r.window_size - r.strstart <= a && (r.strstart -= r.w_size, r.window.set(r.window.subarray(r.w_size, r.w_size + r.strstart), 0), r.matches < 2 && r.matches++, r.insert > r.strstart && (r.insert = r.strstart)), r.window.set(r.strm.input.subarray(r.strm.next_in - a, r.strm.next_in), r.strstart), r.strstart += a, r.insert += a > r.w_size - r.insert ? r.w_size - r.insert : a), r.block_start = r.strstart), r.high_water < r.strstart && (r.high_water = r.strstart), s ? Vt : e !== Je && e !== ve && r.strm.avail_in === 0 && r.strstart === r.block_start ? Gt : (o = r.window_size - r.strstart, r.strm.avail_in > o && r.block_start >= r.w_size && (r.block_start -= r.w_size, r.strstart -= r.w_size, r.window.set(r.window.subarray(r.w_size, r.w_size + r.strstart), 0), r.matches < 2 && r.matches++, o += r.w_size, r.insert > r.strstart && (r.insert = r.strstart)), o > r.strm.avail_in && (o = r.strm.avail_in), o && (Co(r.strm, r.window, r.strstart, o), r.strstart += o, r.insert += o > r.w_size - r.insert ? r.w_size - r.insert : o), r.high_water < r.strstart && (r.high_water = r.strstart), o = r.bi_valid + 42 >> 3, o = r.pending_buf_size - o > 65535 ? 65535 : r.pending_buf_size - o, t = o > r.w_size ? r.w_size : o, i = r.strstart - r.block_start, (i >= t || (i || e === ve) && e !== Je && r.strm.avail_in === 0 && i <= o) && (n = i > o ? o : i, s = e === ve && r.strm.avail_in === 0 && n === i ? 1 : 0, wo(r, r.block_start, n, s), r.block_start += n, de(r.strm)), s ? ut : le);
}, Oi = (r, e) => {
  let t, n;
  for (; ; ) {
    if (r.lookahead < Le) {
      if (Lt(r), r.lookahead < Le && e === Je)
        return le;
      if (r.lookahead === 0)
        break;
    }
    if (t = 0, r.lookahead >= N && (r.ins_h = Ke(r, r.ins_h, r.window[r.strstart + N - 1]), t = r.prev[r.strstart & r.w_mask] = r.head[r.ins_h], r.head[r.ins_h] = r.strstart), t !== 0 && r.strstart - t <= r.w_size - Le && (r.match_length = qu(r, t)), r.match_length >= N)
      if (n = Xe(r, r.strstart - r.match_start, r.match_length - N), r.lookahead -= r.match_length, r.match_length <= r.max_lazy_match && r.lookahead >= N) {
        r.match_length--;
        do
          r.strstart++, r.ins_h = Ke(r, r.ins_h, r.window[r.strstart + N - 1]), t = r.prev[r.strstart & r.w_mask] = r.head[r.ins_h], r.head[r.ins_h] = r.strstart;
        while (--r.match_length !== 0);
        r.strstart++;
      } else
        r.strstart += r.match_length, r.match_length = 0, r.ins_h = r.window[r.strstart], r.ins_h = Ke(r, r.ins_h, r.window[r.strstart + 1]);
    else
      n = Xe(r, 0, r.window[r.strstart]), r.lookahead--, r.strstart++;
    if (n && (pe(r, !1), r.strm.avail_out === 0))
      return le;
  }
  return r.insert = r.strstart < N - 1 ? r.strstart : N - 1, e === ve ? (pe(r, !0), r.strm.avail_out === 0 ? ut : Vt) : r.sym_next && (pe(r, !1), r.strm.avail_out === 0) ? le : Gt;
}, vt = (r, e) => {
  let t, n, i;
  for (; ; ) {
    if (r.lookahead < Le) {
      if (Lt(r), r.lookahead < Le && e === Je)
        return le;
      if (r.lookahead === 0)
        break;
    }
    if (t = 0, r.lookahead >= N && (r.ins_h = Ke(r, r.ins_h, r.window[r.strstart + N - 1]), t = r.prev[r.strstart & r.w_mask] = r.head[r.ins_h], r.head[r.ins_h] = r.strstart), r.prev_length = r.match_length, r.prev_match = r.match_start, r.match_length = N - 1, t !== 0 && r.prev_length < r.max_lazy_match && r.strstart - t <= r.w_size - Le && (r.match_length = qu(r, t), r.match_length <= 5 && (r.strategy === _m || r.match_length === N && r.strstart - r.match_start > 4096) && (r.match_length = N - 1)), r.prev_length >= N && r.match_length <= r.prev_length) {
      i = r.strstart + r.lookahead - N, n = Xe(r, r.strstart - 1 - r.prev_match, r.prev_length - N), r.lookahead -= r.prev_length - 1, r.prev_length -= 2;
      do
        ++r.strstart <= i && (r.ins_h = Ke(r, r.ins_h, r.window[r.strstart + N - 1]), t = r.prev[r.strstart & r.w_mask] = r.head[r.ins_h], r.head[r.ins_h] = r.strstart);
      while (--r.prev_length !== 0);
      if (r.match_available = 0, r.match_length = N - 1, r.strstart++, n && (pe(r, !1), r.strm.avail_out === 0))
        return le;
    } else if (r.match_available) {
      if (n = Xe(r, 0, r.window[r.strstart - 1]), n && pe(r, !1), r.strstart++, r.lookahead--, r.strm.avail_out === 0)
        return le;
    } else
      r.match_available = 1, r.strstart++, r.lookahead--;
  }
  return r.match_available && (n = Xe(r, 0, r.window[r.strstart - 1]), r.match_available = 0), r.insert = r.strstart < N - 1 ? r.strstart : N - 1, e === ve ? (pe(r, !0), r.strm.avail_out === 0 ? ut : Vt) : r.sym_next && (pe(r, !1), r.strm.avail_out === 0) ? le : Gt;
}, Um = (r, e) => {
  let t, n, i, o;
  const s = r.window;
  for (; ; ) {
    if (r.lookahead <= Ye) {
      if (Lt(r), r.lookahead <= Ye && e === Je)
        return le;
      if (r.lookahead === 0)
        break;
    }
    if (r.match_length = 0, r.lookahead >= N && r.strstart > 0 && (i = r.strstart - 1, n = s[i], n === s[++i] && n === s[++i] && n === s[++i])) {
      o = r.strstart + Ye;
      do
        ;
      while (n === s[++i] && n === s[++i] && n === s[++i] && n === s[++i] && n === s[++i] && n === s[++i] && n === s[++i] && n === s[++i] && i < o);
      r.match_length = Ye - (o - i), r.match_length > r.lookahead && (r.match_length = r.lookahead);
    }
    if (r.match_length >= N ? (t = Xe(r, 1, r.match_length - N), r.lookahead -= r.match_length, r.strstart += r.match_length, r.match_length = 0) : (t = Xe(r, 0, r.window[r.strstart]), r.lookahead--, r.strstart++), t && (pe(r, !1), r.strm.avail_out === 0))
      return le;
  }
  return r.insert = 0, e === ve ? (pe(r, !0), r.strm.avail_out === 0 ? ut : Vt) : r.sym_next && (pe(r, !1), r.strm.avail_out === 0) ? le : Gt;
}, Bm = (r, e) => {
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
  new Oe(0, 0, 0, 0, Qu),
  /* 0 store only */
  new Oe(4, 4, 8, 4, Oi),
  /* 1 max speed, no lazy matches */
  new Oe(4, 5, 16, 8, Oi),
  /* 2 */
  new Oe(4, 6, 32, 32, Oi),
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
], Wm = (r) => {
  r.window_size = 2 * r.w_size, He(r.head), r.max_lazy_match = er[r.level].max_lazy, r.good_match = er[r.level].good_length, r.nice_match = er[r.level].nice_length, r.max_chain_length = er[r.level].max_chain, r.strstart = 0, r.block_start = 0, r.lookahead = 0, r.insert = 0, r.match_length = r.prev_length = N - 1, r.match_available = 0, r.ins_h = 0;
};
function Zm() {
  this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = ei, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new Uint16Array(Pm * 2), this.dyn_dtree = new Uint16Array((2 * $m + 1) * 2), this.bl_tree = new Uint16Array((2 * Nm + 1) * 2), He(this.dyn_ltree), He(this.dyn_dtree), He(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new Uint16Array(Lm + 1), this.heap = new Uint16Array(2 * vo + 1), He(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new Uint16Array(2 * vo + 1), He(this.depth), this.sym_buf = 0, this.lit_bufsize = 0, this.sym_next = 0, this.sym_end = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
}
const Mr = (r) => {
  if (!r)
    return 1;
  const e = r.state;
  return !e || e.strm !== r || e.status !== Pt && //#ifdef GZIP
  e.status !== ms && //#endif
  e.status !== bo && e.status !== So && e.status !== _o && e.status !== xo && e.status !== it && e.status !== Qt ? 1 : 0;
}, ec = (r) => {
  if (Mr(r))
    return ot(r, Pe);
  r.total_in = r.total_out = 0, r.data_type = Am;
  const e = r.state;
  return e.pending = 0, e.pending_out = 0, e.wrap < 0 && (e.wrap = -e.wrap), e.status = //#ifdef GZIP
  e.wrap === 2 ? ms : (
    //#endif
    e.wrap ? Pt : it
  ), r.adler = e.wrap === 2 ? 0 : 1, e.last_flush = -2, mm(e), ne;
}, tc = (r) => {
  const e = ec(r);
  return e === ne && Wm(r.state), e;
}, jm = (r, e) => Mr(r) || r.state.wrap !== 2 ? Pe : (r.state.gzhead = e, ne), rc = (r, e, t, n, i, o) => {
  if (!r)
    return Pe;
  let s = 1;
  if (e === Sm && (e = 6), n < 0 ? (s = 0, n = -n) : n > 15 && (s = 2, n -= 16), i < 1 || i > Em || t !== ei || n < 8 || n > 15 || e < 0 || e > 9 || o < 0 || o > Cm || n === 8 && s !== 1)
    return ot(r, Pe);
  n === 8 && (n = 9);
  const a = new Zm();
  return r.state = a, a.strm = r, a.status = Pt, a.wrap = s, a.gzhead = null, a.w_bits = n, a.w_size = 1 << a.w_bits, a.w_mask = a.w_size - 1, a.hash_bits = i + 7, a.hash_size = 1 << a.hash_bits, a.hash_mask = a.hash_size - 1, a.hash_shift = ~~((a.hash_bits + N - 1) / N), a.window = new Uint8Array(a.w_size * 2), a.head = new Uint16Array(a.hash_size), a.prev = new Uint16Array(a.w_size), a.lit_bufsize = 1 << i + 6, a.pending_buf_size = a.lit_bufsize * 4, a.pending_buf = new Uint8Array(a.pending_buf_size), a.sym_buf = a.lit_bufsize, a.sym_end = (a.lit_bufsize - 1) * 3, a.level = e, a.strategy = o, a.method = t, tc(r);
}, Gm = (r, e) => rc(r, e, ei, Rm, km, Im), Vm = (r, e) => {
  if (Mr(r) || e > ya || e < 0)
    return r ? ot(r, Pe) : Pe;
  const t = r.state;
  if (!r.output || r.avail_in !== 0 && !r.input || t.status === Qt && e !== ve)
    return ot(r, r.avail_out === 0 ? ki : Pe);
  const n = t.last_flush;
  if (t.last_flush = e, t.pending !== 0) {
    if (de(r), r.avail_out === 0)
      return t.last_flush = -1, ne;
  } else if (r.avail_in === 0 && va(e) <= va(n) && e !== ve)
    return ot(r, ki);
  if (t.status === Qt && r.avail_in !== 0)
    return ot(r, ki);
  if (t.status === Pt && t.wrap === 0 && (t.status = it), t.status === Pt) {
    let i = ei + (t.w_bits - 8 << 4) << 8, o = -1;
    if (t.strategy >= Hr || t.level < 2 ? o = 0 : t.level < 6 ? o = 1 : t.level === 6 ? o = 2 : o = 3, i |= o << 6, t.strstart !== 0 && (i |= Tm), i += 31 - i % 31, Yt(t, i), t.strstart !== 0 && (Yt(t, r.adler >>> 16), Yt(t, r.adler & 65535)), r.adler = 1, t.status = it, de(r), t.pending !== 0)
      return t.last_flush = -1, ne;
  }
  if (t.status === ms) {
    if (r.adler = 0, T(t, 31), T(t, 139), T(t, 8), t.gzhead)
      T(
        t,
        (t.gzhead.text ? 1 : 0) + (t.gzhead.hcrc ? 2 : 0) + (t.gzhead.extra ? 4 : 0) + (t.gzhead.name ? 8 : 0) + (t.gzhead.comment ? 16 : 0)
      ), T(t, t.gzhead.time & 255), T(t, t.gzhead.time >> 8 & 255), T(t, t.gzhead.time >> 16 & 255), T(t, t.gzhead.time >> 24 & 255), T(t, t.level === 9 ? 2 : t.strategy >= Hr || t.level < 2 ? 4 : 0), T(t, t.gzhead.os & 255), t.gzhead.extra && t.gzhead.extra.length && (T(t, t.gzhead.extra.length & 255), T(t, t.gzhead.extra.length >> 8 & 255)), t.gzhead.hcrc && (r.adler = re(r.adler, t.pending_buf, t.pending, 0)), t.gzindex = 0, t.status = bo;
    else if (T(t, 0), T(t, 0), T(t, 0), T(t, 0), T(t, 0), T(t, t.level === 9 ? 2 : t.strategy >= Hr || t.level < 2 ? 4 : 0), T(t, Dm), t.status = it, de(r), t.pending !== 0)
      return t.last_flush = -1, ne;
  }
  if (t.status === bo) {
    if (t.gzhead.extra) {
      let i = t.pending, o = (t.gzhead.extra.length & 65535) - t.gzindex;
      for (; t.pending + o > t.pending_buf_size; ) {
        let a = t.pending_buf_size - t.pending;
        if (t.pending_buf.set(t.gzhead.extra.subarray(t.gzindex, t.gzindex + a), t.pending), t.pending = t.pending_buf_size, t.gzhead.hcrc && t.pending > i && (r.adler = re(r.adler, t.pending_buf, t.pending - i, i)), t.gzindex += a, de(r), t.pending !== 0)
          return t.last_flush = -1, ne;
        i = 0, o -= a;
      }
      let s = new Uint8Array(t.gzhead.extra);
      t.pending_buf.set(s.subarray(t.gzindex, t.gzindex + o), t.pending), t.pending += o, t.gzhead.hcrc && t.pending > i && (r.adler = re(r.adler, t.pending_buf, t.pending - i, i)), t.gzindex = 0;
    }
    t.status = So;
  }
  if (t.status === So) {
    if (t.gzhead.name) {
      let i = t.pending, o;
      do {
        if (t.pending === t.pending_buf_size) {
          if (t.gzhead.hcrc && t.pending > i && (r.adler = re(r.adler, t.pending_buf, t.pending - i, i)), de(r), t.pending !== 0)
            return t.last_flush = -1, ne;
          i = 0;
        }
        t.gzindex < t.gzhead.name.length ? o = t.gzhead.name.charCodeAt(t.gzindex++) & 255 : o = 0, T(t, o);
      } while (o !== 0);
      t.gzhead.hcrc && t.pending > i && (r.adler = re(r.adler, t.pending_buf, t.pending - i, i)), t.gzindex = 0;
    }
    t.status = _o;
  }
  if (t.status === _o) {
    if (t.gzhead.comment) {
      let i = t.pending, o;
      do {
        if (t.pending === t.pending_buf_size) {
          if (t.gzhead.hcrc && t.pending > i && (r.adler = re(r.adler, t.pending_buf, t.pending - i, i)), de(r), t.pending !== 0)
            return t.last_flush = -1, ne;
          i = 0;
        }
        t.gzindex < t.gzhead.comment.length ? o = t.gzhead.comment.charCodeAt(t.gzindex++) & 255 : o = 0, T(t, o);
      } while (o !== 0);
      t.gzhead.hcrc && t.pending > i && (r.adler = re(r.adler, t.pending_buf, t.pending - i, i));
    }
    t.status = xo;
  }
  if (t.status === xo) {
    if (t.gzhead.hcrc) {
      if (t.pending + 2 > t.pending_buf_size && (de(r), t.pending !== 0))
        return t.last_flush = -1, ne;
      T(t, r.adler & 255), T(t, r.adler >> 8 & 255), r.adler = 0;
    }
    if (t.status = it, de(r), t.pending !== 0)
      return t.last_flush = -1, ne;
  }
  if (r.avail_in !== 0 || t.lookahead !== 0 || e !== Je && t.status !== Qt) {
    let i = t.level === 0 ? Qu(t, e) : t.strategy === Hr ? Bm(t, e) : t.strategy === xm ? Um(t, e) : er[t.level].func(t, e);
    if ((i === ut || i === Vt) && (t.status = Qt), i === le || i === ut)
      return r.avail_out === 0 && (t.last_flush = -1), ne;
    if (i === Gt && (e === wm ? ym(t) : e !== ya && (wo(t, 0, 0, !1), e === vm && (He(t.head), t.lookahead === 0 && (t.strstart = 0, t.block_start = 0, t.insert = 0))), de(r), r.avail_out === 0))
      return t.last_flush = -1, ne;
  }
  return e !== ve ? ne : t.wrap <= 0 ? wa : (t.wrap === 2 ? (T(t, r.adler & 255), T(t, r.adler >> 8 & 255), T(t, r.adler >> 16 & 255), T(t, r.adler >> 24 & 255), T(t, r.total_in & 255), T(t, r.total_in >> 8 & 255), T(t, r.total_in >> 16 & 255), T(t, r.total_in >> 24 & 255)) : (Yt(t, r.adler >>> 16), Yt(t, r.adler & 65535)), de(r), t.wrap > 0 && (t.wrap = -t.wrap), t.pending !== 0 ? ne : wa);
}, Hm = (r) => {
  if (Mr(r))
    return Pe;
  const e = r.state.status;
  return r.state = null, e === it ? ot(r, bm) : ne;
}, Ym = (r, e) => {
  let t = e.length;
  if (Mr(r))
    return Pe;
  const n = r.state, i = n.wrap;
  if (i === 2 || i === 1 && n.status !== Pt || n.lookahead)
    return Pe;
  if (i === 1 && (r.adler = hr(r.adler, e, t, 0)), n.wrap = 0, t >= n.w_size) {
    i === 0 && (He(n.head), n.strstart = 0, n.block_start = 0, n.insert = 0);
    let l = new Uint8Array(n.w_size);
    l.set(e.subarray(t - n.w_size, t), 0), e = l, t = n.w_size;
  }
  const o = r.avail_in, s = r.next_in, a = r.input;
  for (r.avail_in = t, r.next_in = 0, r.input = e, Lt(n); n.lookahead >= N; ) {
    let l = n.strstart, u = n.lookahead - (N - 1);
    do
      n.ins_h = Ke(n, n.ins_h, n.window[l + N - 1]), n.prev[l & n.w_mask] = n.head[n.ins_h], n.head[n.ins_h] = l, l++;
    while (--u);
    n.strstart = l, n.lookahead = N - 1, Lt(n);
  }
  return n.strstart += n.lookahead, n.block_start = n.strstart, n.insert = n.lookahead, n.lookahead = 0, n.match_length = n.prev_length = N - 1, n.match_available = 0, r.next_in = s, r.input = a, r.avail_in = o, n.wrap = i, ne;
};
var Xm = Gm, Jm = rc, Km = tc, qm = ec, Qm = jm, eg = Vm, tg = Hm, rg = Ym, ng = "pako deflate (from Nodeca project)", rr = {
  deflateInit: Xm,
  deflateInit2: Jm,
  deflateReset: Km,
  deflateResetKeep: qm,
  deflateSetHeader: Qm,
  deflate: eg,
  deflateEnd: tg,
  deflateSetDictionary: rg,
  deflateInfo: ng
};
const ig = (r, e) => Object.prototype.hasOwnProperty.call(r, e);
var og = function(r) {
  const e = Array.prototype.slice.call(arguments, 1);
  for (; e.length; ) {
    const t = e.shift();
    if (t) {
      if (typeof t != "object")
        throw new TypeError(t + "must be non-object");
      for (const n in t)
        ig(t, n) && (r[n] = t[n]);
    }
  }
  return r;
}, sg = (r) => {
  let e = 0;
  for (let n = 0, i = r.length; n < i; n++)
    e += r[n].length;
  const t = new Uint8Array(e);
  for (let n = 0, i = 0, o = r.length; n < o; n++) {
    let s = r[n];
    t.set(s, i), i += s.length;
  }
  return t;
}, ti = {
  assign: og,
  flattenChunks: sg
};
let nc = !0;
try {
  String.fromCharCode.apply(null, new Uint8Array(1));
} catch {
  nc = !1;
}
const dr = new Uint8Array(256);
for (let r = 0; r < 256; r++)
  dr[r] = r >= 252 ? 6 : r >= 248 ? 5 : r >= 240 ? 4 : r >= 224 ? 3 : r >= 192 ? 2 : 1;
dr[254] = dr[254] = 1;
var ag = (r) => {
  if (typeof TextEncoder == "function" && TextEncoder.prototype.encode)
    return new TextEncoder().encode(r);
  let e, t, n, i, o, s = r.length, a = 0;
  for (i = 0; i < s; i++)
    t = r.charCodeAt(i), (t & 64512) === 55296 && i + 1 < s && (n = r.charCodeAt(i + 1), (n & 64512) === 56320 && (t = 65536 + (t - 55296 << 10) + (n - 56320), i++)), a += t < 128 ? 1 : t < 2048 ? 2 : t < 65536 ? 3 : 4;
  for (e = new Uint8Array(a), o = 0, i = 0; o < a; i++)
    t = r.charCodeAt(i), (t & 64512) === 55296 && i + 1 < s && (n = r.charCodeAt(i + 1), (n & 64512) === 56320 && (t = 65536 + (t - 55296 << 10) + (n - 56320), i++)), t < 128 ? e[o++] = t : t < 2048 ? (e[o++] = 192 | t >>> 6, e[o++] = 128 | t & 63) : t < 65536 ? (e[o++] = 224 | t >>> 12, e[o++] = 128 | t >>> 6 & 63, e[o++] = 128 | t & 63) : (e[o++] = 240 | t >>> 18, e[o++] = 128 | t >>> 12 & 63, e[o++] = 128 | t >>> 6 & 63, e[o++] = 128 | t & 63);
  return e;
};
const lg = (r, e) => {
  if (e < 65534 && r.subarray && nc)
    return String.fromCharCode.apply(null, r.length === e ? r : r.subarray(0, e));
  let t = "";
  for (let n = 0; n < e; n++)
    t += String.fromCharCode(r[n]);
  return t;
};
var ug = (r, e) => {
  const t = e || r.length;
  if (typeof TextDecoder == "function" && TextDecoder.prototype.decode)
    return new TextDecoder().decode(r.subarray(0, e));
  let n, i;
  const o = new Array(t * 2);
  for (i = 0, n = 0; n < t; ) {
    let s = r[n++];
    if (s < 128) {
      o[i++] = s;
      continue;
    }
    let a = dr[s];
    if (a > 4) {
      o[i++] = 65533, n += a - 1;
      continue;
    }
    for (s &= a === 2 ? 31 : a === 3 ? 15 : 7; a > 1 && n < t; )
      s = s << 6 | r[n++] & 63, a--;
    if (a > 1) {
      o[i++] = 65533;
      continue;
    }
    s < 65536 ? o[i++] = s : (s -= 65536, o[i++] = 55296 | s >> 10 & 1023, o[i++] = 56320 | s & 1023);
  }
  return lg(o, i);
}, cg = (r, e) => {
  e = e || r.length, e > r.length && (e = r.length);
  let t = e - 1;
  for (; t >= 0 && (r[t] & 192) === 128; )
    t--;
  return t < 0 || t === 0 ? e : t + dr[r[t]] > e ? t : e;
}, pr = {
  string2buf: ag,
  buf2string: ug,
  utf8border: cg
};
function fg() {
  this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
}
var ic = fg;
const oc = Object.prototype.toString, {
  Z_NO_FLUSH: hg,
  Z_SYNC_FLUSH: dg,
  Z_FULL_FLUSH: pg,
  Z_FINISH: mg,
  Z_OK: Dn,
  Z_STREAM_END: gg,
  Z_DEFAULT_COMPRESSION: yg,
  Z_DEFAULT_STRATEGY: wg,
  Z_DEFLATED: vg
} = ht;
function $r(r) {
  this.options = ti.assign({
    level: yg,
    method: vg,
    chunkSize: 16384,
    windowBits: 15,
    memLevel: 8,
    strategy: wg
  }, r || {});
  let e = this.options;
  e.raw && e.windowBits > 0 ? e.windowBits = -e.windowBits : e.gzip && e.windowBits > 0 && e.windowBits < 16 && (e.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new ic(), this.strm.avail_out = 0;
  let t = rr.deflateInit2(
    this.strm,
    e.level,
    e.method,
    e.windowBits,
    e.memLevel,
    e.strategy
  );
  if (t !== Dn)
    throw new Error(lt[t]);
  if (e.header && rr.deflateSetHeader(this.strm, e.header), e.dictionary) {
    let n;
    if (typeof e.dictionary == "string" ? n = pr.string2buf(e.dictionary) : oc.call(e.dictionary) === "[object ArrayBuffer]" ? n = new Uint8Array(e.dictionary) : n = e.dictionary, t = rr.deflateSetDictionary(this.strm, n), t !== Dn)
      throw new Error(lt[t]);
    this._dict_set = !0;
  }
}
$r.prototype.push = function(r, e) {
  const t = this.strm, n = this.options.chunkSize;
  let i, o;
  if (this.ended)
    return !1;
  for (e === ~~e ? o = e : o = e === !0 ? mg : hg, typeof r == "string" ? t.input = pr.string2buf(r) : oc.call(r) === "[object ArrayBuffer]" ? t.input = new Uint8Array(r) : t.input = r, t.next_in = 0, t.avail_in = t.input.length; ; ) {
    if (t.avail_out === 0 && (t.output = new Uint8Array(n), t.next_out = 0, t.avail_out = n), (o === dg || o === pg) && t.avail_out <= 6) {
      this.onData(t.output.subarray(0, t.next_out)), t.avail_out = 0;
      continue;
    }
    if (i = rr.deflate(t, o), i === gg)
      return t.next_out > 0 && this.onData(t.output.subarray(0, t.next_out)), i = rr.deflateEnd(this.strm), this.onEnd(i), this.ended = !0, i === Dn;
    if (t.avail_out === 0) {
      this.onData(t.output);
      continue;
    }
    if (o > 0 && t.next_out > 0) {
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
  r === Dn && (this.result = ti.flattenChunks(this.chunks)), this.chunks = [], this.err = r, this.msg = this.strm.msg;
};
function gs(r, e) {
  const t = new $r(e);
  if (t.push(r, !0), t.err)
    throw t.msg || lt[t.err];
  return t.result;
}
function bg(r, e) {
  return e = e || {}, e.raw = !0, gs(r, e);
}
function Sg(r, e) {
  return e = e || {}, e.gzip = !0, gs(r, e);
}
var _g = $r, xg = gs, Cg = bg, Ig = Sg, Ag = ht, Eg = {
  Deflate: _g,
  deflate: xg,
  deflateRaw: Cg,
  gzip: Ig,
  constants: Ag
};
const Yr = 16209, Rg = 16191;
var kg = function(e, t) {
  let n, i, o, s, a, l, u, c, f, d, h, p, m, g, v, b, y, w, _, E, x, S, A, I;
  const R = e.state;
  n = e.next_in, A = e.input, i = n + (e.avail_in - 5), o = e.next_out, I = e.output, s = o - (t - e.avail_out), a = o + (e.avail_out - 257), l = R.dmax, u = R.wsize, c = R.whave, f = R.wnext, d = R.window, h = R.hold, p = R.bits, m = R.lencode, g = R.distcode, v = (1 << R.lenbits) - 1, b = (1 << R.distbits) - 1;
  e:
    do {
      p < 15 && (h += A[n++] << p, p += 8, h += A[n++] << p, p += 8), y = m[h & v];
      t:
        for (; ; ) {
          if (w = y >>> 24, h >>>= w, p -= w, w = y >>> 16 & 255, w === 0)
            I[o++] = y & 65535;
          else if (w & 16) {
            _ = y & 65535, w &= 15, w && (p < w && (h += A[n++] << p, p += 8), _ += h & (1 << w) - 1, h >>>= w, p -= w), p < 15 && (h += A[n++] << p, p += 8, h += A[n++] << p, p += 8), y = g[h & b];
            r:
              for (; ; ) {
                if (w = y >>> 24, h >>>= w, p -= w, w = y >>> 16 & 255, w & 16) {
                  if (E = y & 65535, w &= 15, p < w && (h += A[n++] << p, p += 8, p < w && (h += A[n++] << p, p += 8)), E += h & (1 << w) - 1, E > l) {
                    e.msg = "invalid distance too far back", R.mode = Yr;
                    break e;
                  }
                  if (h >>>= w, p -= w, w = o - s, E > w) {
                    if (w = E - w, w > c && R.sane) {
                      e.msg = "invalid distance too far back", R.mode = Yr;
                      break e;
                    }
                    if (x = 0, S = d, f === 0) {
                      if (x += u - w, w < _) {
                        _ -= w;
                        do
                          I[o++] = d[x++];
                        while (--w);
                        x = o - E, S = I;
                      }
                    } else if (f < w) {
                      if (x += u + f - w, w -= f, w < _) {
                        _ -= w;
                        do
                          I[o++] = d[x++];
                        while (--w);
                        if (x = 0, f < _) {
                          w = f, _ -= w;
                          do
                            I[o++] = d[x++];
                          while (--w);
                          x = o - E, S = I;
                        }
                      }
                    } else if (x += f - w, w < _) {
                      _ -= w;
                      do
                        I[o++] = d[x++];
                      while (--w);
                      x = o - E, S = I;
                    }
                    for (; _ > 2; )
                      I[o++] = S[x++], I[o++] = S[x++], I[o++] = S[x++], _ -= 3;
                    _ && (I[o++] = S[x++], _ > 1 && (I[o++] = S[x++]));
                  } else {
                    x = o - E;
                    do
                      I[o++] = I[x++], I[o++] = I[x++], I[o++] = I[x++], _ -= 3;
                    while (_ > 2);
                    _ && (I[o++] = I[x++], _ > 1 && (I[o++] = I[x++]));
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
              R.mode = Rg;
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
    } while (n < i && o < a);
  _ = p >> 3, n -= _, p -= _ << 3, h &= (1 << p) - 1, e.next_in = n, e.next_out = o, e.avail_in = n < i ? 5 + (i - n) : 5 - (n - i), e.avail_out = o < a ? 257 + (a - o) : 257 - (o - a), R.hold = h, R.bits = p;
};
const bt = 15, ba = 852, Sa = 592, _a = 0, Mi = 1, xa = 2, Og = new Uint16Array([
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
]), Mg = new Uint8Array([
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
]), $g = new Uint16Array([
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
]), Ng = new Uint8Array([
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
]), Pg = (r, e, t, n, i, o, s, a) => {
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
    return i[o++] = 1 << 24 | 64 << 16 | 0, i[o++] = 1 << 24 | 64 << 16 | 0, a.bits = 1, 0;
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
    e[t + c] !== 0 && (s[R[e[t + c]]++] = c);
  if (r === _a ? (S = q = s, A = 20) : r === Mi ? (S = Og, q = Mg, A = 257) : (S = $g, q = Ng, A = 0), b = 0, c = 0, u = f, x = o, p = h, m = 0, _ = -1, v = 1 << h, E = v - 1, r === Mi && v > ba || r === xa && v > Sa)
    return 1;
  for (; ; ) {
    k = u - m, s[c] + 1 < A ? (me = 0, Ee = s[c]) : s[c] >= A ? (me = q[s[c] - A], Ee = S[s[c] - A]) : (me = 96, Ee = 0), y = 1 << u - m, w = 1 << p, f = w;
    do
      w -= y, i[x + (b >> m) + w] = k << 24 | me << 16 | Ee | 0;
    while (w !== 0);
    for (y = 1 << u - 1; b & y; )
      y >>= 1;
    if (y !== 0 ? (b &= y - 1, b += y) : b = 0, c++, --I[u] === 0) {
      if (u === d)
        break;
      u = e[t + s[c]];
    }
    if (u > h && (b & E) !== _) {
      for (m === 0 && (m = h), x += f, p = u - m, g = 1 << p; p + m < d && (g -= I[p + m], !(g <= 0)); )
        p++, g <<= 1;
      if (v += 1 << p, r === Mi && v > ba || r === xa && v > Sa)
        return 1;
      _ = b & E, i[_] = h << 24 | p << 16 | x - o | 0;
    }
  }
  return b !== 0 && (i[x + b] = u - m << 24 | 64 << 16 | 0), a.bits = h, 0;
};
var nr = Pg;
const Lg = 0, sc = 1, ac = 2, {
  Z_FINISH: Ca,
  Z_BLOCK: Tg,
  Z_TREES: Xr,
  Z_OK: ct,
  Z_STREAM_END: Dg,
  Z_NEED_DICT: Fg,
  Z_STREAM_ERROR: be,
  Z_DATA_ERROR: lc,
  Z_MEM_ERROR: uc,
  Z_BUF_ERROR: zg,
  Z_DEFLATED: Ia
} = ht, ri = 16180, Aa = 16181, Ea = 16182, Ra = 16183, ka = 16184, Oa = 16185, Ma = 16186, $a = 16187, Na = 16188, Pa = 16189, Fn = 16190, Fe = 16191, $i = 16192, La = 16193, Ni = 16194, Ta = 16195, Da = 16196, Fa = 16197, za = 16198, Jr = 16199, Kr = 16200, Ua = 16201, Ba = 16202, Wa = 16203, Za = 16204, ja = 16205, Pi = 16206, Ga = 16207, Va = 16208, G = 16209, cc = 16210, fc = 16211, Ug = 852, Bg = 592, Wg = 15, Zg = Wg, Ha = (r) => (r >>> 24 & 255) + (r >>> 8 & 65280) + ((r & 65280) << 8) + ((r & 255) << 24);
function jg() {
  this.strm = null, this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new Uint16Array(320), this.work = new Uint16Array(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
}
const dt = (r) => {
  if (!r)
    return 1;
  const e = r.state;
  return !e || e.strm !== r || e.mode < ri || e.mode > fc ? 1 : 0;
}, hc = (r) => {
  if (dt(r))
    return be;
  const e = r.state;
  return r.total_in = r.total_out = e.total = 0, r.msg = "", e.wrap && (r.adler = e.wrap & 1), e.mode = ri, e.last = 0, e.havedict = 0, e.flags = -1, e.dmax = 32768, e.head = null, e.hold = 0, e.bits = 0, e.lencode = e.lendyn = new Int32Array(Ug), e.distcode = e.distdyn = new Int32Array(Bg), e.sane = 1, e.back = -1, ct;
}, dc = (r) => {
  if (dt(r))
    return be;
  const e = r.state;
  return e.wsize = 0, e.whave = 0, e.wnext = 0, hc(r);
}, pc = (r, e) => {
  let t;
  if (dt(r))
    return be;
  const n = r.state;
  return e < 0 ? (t = 0, e = -e) : (t = (e >> 4) + 5, e < 48 && (e &= 15)), e && (e < 8 || e > 15) ? be : (n.window !== null && n.wbits !== e && (n.window = null), n.wrap = t, n.wbits = e, dc(r));
}, mc = (r, e) => {
  if (!r)
    return be;
  const t = new jg();
  r.state = t, t.strm = r, t.window = null, t.mode = ri;
  const n = pc(r, e);
  return n !== ct && (r.state = null), n;
}, Gg = (r) => mc(r, Zg);
let Ya = !0, Li, Ti;
const Vg = (r) => {
  if (Ya) {
    Li = new Int32Array(512), Ti = new Int32Array(32);
    let e = 0;
    for (; e < 144; )
      r.lens[e++] = 8;
    for (; e < 256; )
      r.lens[e++] = 9;
    for (; e < 280; )
      r.lens[e++] = 7;
    for (; e < 288; )
      r.lens[e++] = 8;
    for (nr(sc, r.lens, 0, 288, Li, 0, r.work, { bits: 9 }), e = 0; e < 32; )
      r.lens[e++] = 5;
    nr(ac, r.lens, 0, 32, Ti, 0, r.work, { bits: 5 }), Ya = !1;
  }
  r.lencode = Li, r.lenbits = 9, r.distcode = Ti, r.distbits = 5;
}, gc = (r, e, t, n) => {
  let i;
  const o = r.state;
  return o.window === null && (o.wsize = 1 << o.wbits, o.wnext = 0, o.whave = 0, o.window = new Uint8Array(o.wsize)), n >= o.wsize ? (o.window.set(e.subarray(t - o.wsize, t), 0), o.wnext = 0, o.whave = o.wsize) : (i = o.wsize - o.wnext, i > n && (i = n), o.window.set(e.subarray(t - n, t - n + i), o.wnext), n -= i, n ? (o.window.set(e.subarray(t - n, t), 0), o.wnext = n, o.whave = o.wsize) : (o.wnext += i, o.wnext === o.wsize && (o.wnext = 0), o.whave < o.wsize && (o.whave += i))), 0;
}, Hg = (r, e) => {
  let t, n, i, o, s, a, l, u, c, f, d, h, p, m, g = 0, v, b, y, w, _, E, x, S;
  const A = new Uint8Array(4);
  let I, R;
  const q = (
    /* permutation of code lengths */
    new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15])
  );
  if (dt(r) || !r.output || !r.input && r.avail_in !== 0)
    return be;
  t = r.state, t.mode === Fe && (t.mode = $i), s = r.next_out, i = r.output, l = r.avail_out, o = r.next_in, n = r.input, a = r.avail_in, u = t.hold, c = t.bits, f = a, d = l, S = ct;
  e:
    for (; ; )
      switch (t.mode) {
        case ri:
          if (t.wrap === 0) {
            t.mode = $i;
            break;
          }
          for (; c < 16; ) {
            if (a === 0)
              break e;
            a--, u += n[o++] << c, c += 8;
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
          t.dmax = 1 << t.wbits, t.flags = 0, r.adler = t.check = 1, t.mode = u & 512 ? Pa : Fe, u = 0, c = 0;
          break;
        case Aa:
          for (; c < 16; ) {
            if (a === 0)
              break e;
            a--, u += n[o++] << c, c += 8;
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
            a--, u += n[o++] << c, c += 8;
          }
          t.head && (t.head.time = u), t.flags & 512 && t.wrap & 4 && (A[0] = u & 255, A[1] = u >>> 8 & 255, A[2] = u >>> 16 & 255, A[3] = u >>> 24 & 255, t.check = re(t.check, A, 4, 0)), u = 0, c = 0, t.mode = Ra;
        case Ra:
          for (; c < 16; ) {
            if (a === 0)
              break e;
            a--, u += n[o++] << c, c += 8;
          }
          t.head && (t.head.xflags = u & 255, t.head.os = u >> 8), t.flags & 512 && t.wrap & 4 && (A[0] = u & 255, A[1] = u >>> 8 & 255, t.check = re(t.check, A, 2, 0)), u = 0, c = 0, t.mode = ka;
        case ka:
          if (t.flags & 1024) {
            for (; c < 16; ) {
              if (a === 0)
                break e;
              a--, u += n[o++] << c, c += 8;
            }
            t.length = u, t.head && (t.head.extra_len = u), t.flags & 512 && t.wrap & 4 && (A[0] = u & 255, A[1] = u >>> 8 & 255, t.check = re(t.check, A, 2, 0)), u = 0, c = 0;
          } else t.head && (t.head.extra = null);
          t.mode = Oa;
        case Oa:
          if (t.flags & 1024 && (h = t.length, h > a && (h = a), h && (t.head && (x = t.head.extra_len - t.length, t.head.extra || (t.head.extra = new Uint8Array(t.head.extra_len)), t.head.extra.set(
            n.subarray(
              o,
              // extra field is limited to 65536 bytes
              // - no need for additional size check
              o + h
            ),
            /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
            x
          )), t.flags & 512 && t.wrap & 4 && (t.check = re(t.check, n, h, o)), a -= h, o += h, t.length -= h), t.length))
            break e;
          t.length = 0, t.mode = Ma;
        case Ma:
          if (t.flags & 2048) {
            if (a === 0)
              break e;
            h = 0;
            do
              x = n[o + h++], t.head && x && t.length < 65536 && (t.head.name += String.fromCharCode(x));
            while (x && h < a);
            if (t.flags & 512 && t.wrap & 4 && (t.check = re(t.check, n, h, o)), a -= h, o += h, x)
              break e;
          } else t.head && (t.head.name = null);
          t.length = 0, t.mode = $a;
        case $a:
          if (t.flags & 4096) {
            if (a === 0)
              break e;
            h = 0;
            do
              x = n[o + h++], t.head && x && t.length < 65536 && (t.head.comment += String.fromCharCode(x));
            while (x && h < a);
            if (t.flags & 512 && t.wrap & 4 && (t.check = re(t.check, n, h, o)), a -= h, o += h, x)
              break e;
          } else t.head && (t.head.comment = null);
          t.mode = Na;
        case Na:
          if (t.flags & 512) {
            for (; c < 16; ) {
              if (a === 0)
                break e;
              a--, u += n[o++] << c, c += 8;
            }
            if (t.wrap & 4 && u !== (t.check & 65535)) {
              r.msg = "header crc mismatch", t.mode = G;
              break;
            }
            u = 0, c = 0;
          }
          t.head && (t.head.hcrc = t.flags >> 9 & 1, t.head.done = !0), r.adler = t.check = 0, t.mode = Fe;
          break;
        case Pa:
          for (; c < 32; ) {
            if (a === 0)
              break e;
            a--, u += n[o++] << c, c += 8;
          }
          r.adler = t.check = Ha(u), u = 0, c = 0, t.mode = Fn;
        case Fn:
          if (t.havedict === 0)
            return r.next_out = s, r.avail_out = l, r.next_in = o, r.avail_in = a, t.hold = u, t.bits = c, Fg;
          r.adler = t.check = 1, t.mode = Fe;
        case Fe:
          if (e === Tg || e === Xr)
            break e;
        case $i:
          if (t.last) {
            u >>>= c & 7, c -= c & 7, t.mode = Pi;
            break;
          }
          for (; c < 3; ) {
            if (a === 0)
              break e;
            a--, u += n[o++] << c, c += 8;
          }
          switch (t.last = u & 1, u >>>= 1, c -= 1, u & 3) {
            case 0:
              t.mode = La;
              break;
            case 1:
              if (Vg(t), t.mode = Jr, e === Xr) {
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
            a--, u += n[o++] << c, c += 8;
          }
          if ((u & 65535) !== (u >>> 16 ^ 65535)) {
            r.msg = "invalid stored block lengths", t.mode = G;
            break;
          }
          if (t.length = u & 65535, u = 0, c = 0, t.mode = Ni, e === Xr)
            break e;
        case Ni:
          t.mode = Ta;
        case Ta:
          if (h = t.length, h) {
            if (h > a && (h = a), h > l && (h = l), h === 0)
              break e;
            i.set(n.subarray(o, o + h), s), a -= h, o += h, l -= h, s += h, t.length -= h;
            break;
          }
          t.mode = Fe;
          break;
        case Da:
          for (; c < 14; ) {
            if (a === 0)
              break e;
            a--, u += n[o++] << c, c += 8;
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
              a--, u += n[o++] << c, c += 8;
            }
            t.lens[q[t.have++]] = u & 7, u >>>= 3, c -= 3;
          }
          for (; t.have < 19; )
            t.lens[q[t.have++]] = 0;
          if (t.lencode = t.lendyn, t.lenbits = 7, I = { bits: t.lenbits }, S = nr(Lg, t.lens, 0, 19, t.lencode, 0, t.work, I), t.lenbits = I.bits, S) {
            r.msg = "invalid code lengths set", t.mode = G;
            break;
          }
          t.have = 0, t.mode = za;
        case za:
          for (; t.have < t.nlen + t.ndist; ) {
            for (; g = t.lencode[u & (1 << t.lenbits) - 1], v = g >>> 24, b = g >>> 16 & 255, y = g & 65535, !(v <= c); ) {
              if (a === 0)
                break e;
              a--, u += n[o++] << c, c += 8;
            }
            if (y < 16)
              u >>>= v, c -= v, t.lens[t.have++] = y;
            else {
              if (y === 16) {
                for (R = v + 2; c < R; ) {
                  if (a === 0)
                    break e;
                  a--, u += n[o++] << c, c += 8;
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
                  a--, u += n[o++] << c, c += 8;
                }
                u >>>= v, c -= v, x = 0, h = 3 + (u & 7), u >>>= 3, c -= 3;
              } else {
                for (R = v + 7; c < R; ) {
                  if (a === 0)
                    break e;
                  a--, u += n[o++] << c, c += 8;
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
          if (t.lenbits = 9, I = { bits: t.lenbits }, S = nr(sc, t.lens, 0, t.nlen, t.lencode, 0, t.work, I), t.lenbits = I.bits, S) {
            r.msg = "invalid literal/lengths set", t.mode = G;
            break;
          }
          if (t.distbits = 6, t.distcode = t.distdyn, I = { bits: t.distbits }, S = nr(ac, t.lens, t.nlen, t.ndist, t.distcode, 0, t.work, I), t.distbits = I.bits, S) {
            r.msg = "invalid distances set", t.mode = G;
            break;
          }
          if (t.mode = Jr, e === Xr)
            break e;
        case Jr:
          t.mode = Kr;
        case Kr:
          if (a >= 6 && l >= 258) {
            r.next_out = s, r.avail_out = l, r.next_in = o, r.avail_in = a, t.hold = u, t.bits = c, kg(r, d), s = r.next_out, i = r.output, l = r.avail_out, o = r.next_in, n = r.input, a = r.avail_in, u = t.hold, c = t.bits, t.mode === Fe && (t.back = -1);
            break;
          }
          for (t.back = 0; g = t.lencode[u & (1 << t.lenbits) - 1], v = g >>> 24, b = g >>> 16 & 255, y = g & 65535, !(v <= c); ) {
            if (a === 0)
              break e;
            a--, u += n[o++] << c, c += 8;
          }
          if (b && !(b & 240)) {
            for (w = v, _ = b, E = y; g = t.lencode[E + ((u & (1 << w + _) - 1) >> w)], v = g >>> 24, b = g >>> 16 & 255, y = g & 65535, !(w + v <= c); ) {
              if (a === 0)
                break e;
              a--, u += n[o++] << c, c += 8;
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
              a--, u += n[o++] << c, c += 8;
            }
            t.length += u & (1 << t.extra) - 1, u >>>= t.extra, c -= t.extra, t.back += t.extra;
          }
          t.was = t.length, t.mode = Ba;
        case Ba:
          for (; g = t.distcode[u & (1 << t.distbits) - 1], v = g >>> 24, b = g >>> 16 & 255, y = g & 65535, !(v <= c); ) {
            if (a === 0)
              break e;
            a--, u += n[o++] << c, c += 8;
          }
          if (!(b & 240)) {
            for (w = v, _ = b, E = y; g = t.distcode[E + ((u & (1 << w + _) - 1) >> w)], v = g >>> 24, b = g >>> 16 & 255, y = g & 65535, !(w + v <= c); ) {
              if (a === 0)
                break e;
              a--, u += n[o++] << c, c += 8;
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
              a--, u += n[o++] << c, c += 8;
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
            m = i, p = s - t.offset, h = t.length;
          h > l && (h = l), l -= h, t.length -= h;
          do
            i[s++] = m[p++];
          while (--h);
          t.length === 0 && (t.mode = Kr);
          break;
        case ja:
          if (l === 0)
            break e;
          i[s++] = t.length, l--, t.mode = Kr;
          break;
        case Pi:
          if (t.wrap) {
            for (; c < 32; ) {
              if (a === 0)
                break e;
              a--, u |= n[o++] << c, c += 8;
            }
            if (d -= l, r.total_out += d, t.total += d, t.wrap & 4 && d && (r.adler = t.check = /*UPDATE_CHECK(state.check, put - _out, _out);*/
            t.flags ? re(t.check, i, d, s - d) : hr(t.check, i, d, s - d)), d = l, t.wrap & 4 && (t.flags ? u : Ha(u)) !== t.check) {
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
              a--, u += n[o++] << c, c += 8;
            }
            if (t.wrap & 4 && u !== (t.total & 4294967295)) {
              r.msg = "incorrect length check", t.mode = G;
              break;
            }
            u = 0, c = 0;
          }
          t.mode = Va;
        case Va:
          S = Dg;
          break e;
        case G:
          S = lc;
          break e;
        case cc:
          return uc;
        case fc:
        default:
          return be;
      }
  return r.next_out = s, r.avail_out = l, r.next_in = o, r.avail_in = a, t.hold = u, t.bits = c, (t.wsize || d !== r.avail_out && t.mode < G && (t.mode < Pi || e !== Ca)) && gc(r, r.output, r.next_out, d - r.avail_out), f -= r.avail_in, d -= r.avail_out, r.total_in += f, r.total_out += d, t.total += d, t.wrap & 4 && d && (r.adler = t.check = /*UPDATE_CHECK(state.check, strm.next_out - _out, _out);*/
  t.flags ? re(t.check, i, d, r.next_out - d) : hr(t.check, i, d, r.next_out - d)), r.data_type = t.bits + (t.last ? 64 : 0) + (t.mode === Fe ? 128 : 0) + (t.mode === Jr || t.mode === Ni ? 256 : 0), (f === 0 && d === 0 || e === Ca) && S === ct && (S = zg), S;
}, Yg = (r) => {
  if (dt(r))
    return be;
  let e = r.state;
  return e.window && (e.window = null), r.state = null, ct;
}, Xg = (r, e) => {
  if (dt(r))
    return be;
  const t = r.state;
  return t.wrap & 2 ? (t.head = e, e.done = !1, ct) : be;
}, Jg = (r, e) => {
  const t = e.length;
  let n, i, o;
  return dt(r) || (n = r.state, n.wrap !== 0 && n.mode !== Fn) ? be : n.mode === Fn && (i = 1, i = hr(i, e, t, 0), i !== n.check) ? lc : (o = gc(r, e, t, t), o ? (n.mode = cc, uc) : (n.havedict = 1, ct));
};
var Kg = dc, qg = pc, Qg = hc, ey = Gg, ty = mc, ry = Hg, ny = Yg, iy = Xg, oy = Jg, sy = "pako inflate (from Nodeca project)", We = {
  inflateReset: Kg,
  inflateReset2: qg,
  inflateResetKeep: Qg,
  inflateInit: ey,
  inflateInit2: ty,
  inflate: ry,
  inflateEnd: ny,
  inflateGetHeader: iy,
  inflateSetDictionary: oy,
  inflateInfo: sy
};
function ay() {
  this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
}
var ly = ay;
const yc = Object.prototype.toString, {
  Z_NO_FLUSH: uy,
  Z_FINISH: cy,
  Z_OK: mr,
  Z_STREAM_END: Di,
  Z_NEED_DICT: Fi,
  Z_STREAM_ERROR: fy,
  Z_DATA_ERROR: Xa,
  Z_MEM_ERROR: hy
} = ht;
function Nr(r) {
  this.options = ti.assign({
    chunkSize: 1024 * 64,
    windowBits: 15,
    to: ""
  }, r || {});
  const e = this.options;
  e.raw && e.windowBits >= 0 && e.windowBits < 16 && (e.windowBits = -e.windowBits, e.windowBits === 0 && (e.windowBits = -15)), e.windowBits >= 0 && e.windowBits < 16 && !(r && r.windowBits) && (e.windowBits += 32), e.windowBits > 15 && e.windowBits < 48 && (e.windowBits & 15 || (e.windowBits |= 15)), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new ic(), this.strm.avail_out = 0;
  let t = We.inflateInit2(
    this.strm,
    e.windowBits
  );
  if (t !== mr)
    throw new Error(lt[t]);
  if (this.header = new ly(), We.inflateGetHeader(this.strm, this.header), e.dictionary && (typeof e.dictionary == "string" ? e.dictionary = pr.string2buf(e.dictionary) : yc.call(e.dictionary) === "[object ArrayBuffer]" && (e.dictionary = new Uint8Array(e.dictionary)), e.raw && (t = We.inflateSetDictionary(this.strm, e.dictionary), t !== mr)))
    throw new Error(lt[t]);
}
Nr.prototype.push = function(r, e) {
  const t = this.strm, n = this.options.chunkSize, i = this.options.dictionary;
  let o, s, a;
  if (this.ended) return !1;
  for (e === ~~e ? s = e : s = e === !0 ? cy : uy, yc.call(r) === "[object ArrayBuffer]" ? t.input = new Uint8Array(r) : t.input = r, t.next_in = 0, t.avail_in = t.input.length; ; ) {
    for (t.avail_out === 0 && (t.output = new Uint8Array(n), t.next_out = 0, t.avail_out = n), o = We.inflate(t, s), o === Fi && i && (o = We.inflateSetDictionary(t, i), o === mr ? o = We.inflate(t, s) : o === Xa && (o = Fi)); t.avail_in > 0 && o === Di && t.state.wrap > 0 && r[t.next_in] !== 0; )
      We.inflateReset(t), o = We.inflate(t, s);
    switch (o) {
      case fy:
      case Xa:
      case Fi:
      case hy:
        return this.onEnd(o), this.ended = !0, !1;
    }
    if (a = t.avail_out, t.next_out && (t.avail_out === 0 || o === Di))
      if (this.options.to === "string") {
        let l = pr.utf8border(t.output, t.next_out), u = t.next_out - l, c = pr.buf2string(t.output, l);
        t.next_out = u, t.avail_out = n - u, u && t.output.set(t.output.subarray(l, l + u), 0), this.onData(c);
      } else
        this.onData(t.output.length === t.next_out ? t.output : t.output.subarray(0, t.next_out));
    if (!(o === mr && a === 0)) {
      if (o === Di)
        return o = We.inflateEnd(this.strm), this.onEnd(o), this.ended = !0, !0;
      if (t.avail_in === 0) break;
    }
  }
  return !0;
};
Nr.prototype.onData = function(r) {
  this.chunks.push(r);
};
Nr.prototype.onEnd = function(r) {
  r === mr && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = ti.flattenChunks(this.chunks)), this.chunks = [], this.err = r, this.msg = this.strm.msg;
};
function ys(r, e) {
  const t = new Nr(e);
  if (t.push(r), t.err) throw t.msg || lt[t.err];
  return t.result;
}
function dy(r, e) {
  return e = e || {}, e.raw = !0, ys(r, e);
}
var py = Nr, my = ys, gy = dy, yy = ys, wy = ht, vy = {
  Inflate: py,
  inflate: my,
  inflateRaw: gy,
  ungzip: yy,
  constants: wy
};
const { Deflate: by, deflate: Sy, deflateRaw: _y, gzip: xy } = Eg, { Inflate: Cy, inflate: Iy, inflateRaw: Ay, ungzip: Ey } = vy;
var Ry = by, ky = Sy, Oy = _y, My = xy, $y = Cy, Ny = Iy, Py = Ay, Ly = Ey, Ty = ht, Dy = {
  Deflate: Ry,
  deflate: ky,
  deflateRaw: Oy,
  gzip: My,
  Inflate: $y,
  inflate: Ny,
  inflateRaw: Py,
  ungzip: Ly,
  constants: Ty
}, Fy = Object.defineProperty, zy = (r, e, t) => e in r ? Fy(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, C = (r, e, t) => zy(r, typeof e != "symbol" ? e + "" : e, t), Ja, Uy = Object.defineProperty, By = (r, e, t) => e in r ? Uy(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, Ka = (r, e, t) => By(r, typeof e != "symbol" ? e + "" : e, t), ee = /* @__PURE__ */ ((r) => (r[r.Document = 0] = "Document", r[r.DocumentType = 1] = "DocumentType", r[r.Element = 2] = "Element", r[r.Text = 3] = "Text", r[r.CDATA = 4] = "CDATA", r[r.Comment = 5] = "Comment", r))(ee || {});
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
}, qr = {}, Wy = () => !!globalThis.Zone;
function ws(r) {
  if (qr[r])
    return qr[r];
  const e = globalThis[r], t = e.prototype, n = r in qa ? qa[r] : void 0, i = !!(n && // @ts-expect-error 2345
  n.every(
    (a) => {
      var l, u;
      return !!((u = (l = Object.getOwnPropertyDescriptor(t, a)) == null ? void 0 : l.get) != null && u.toString().includes("[native code]"));
    }
  )), o = r in Qa ? Qa[r] : void 0, s = !!(o && o.every(
    // @ts-expect-error 2345
    (a) => {
      var l;
      return typeof t[a] == "function" && ((l = t[a]) == null ? void 0 : l.toString().includes("[native code]"));
    }
  ));
  if (i && s && !Wy())
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
const zi = {};
function qe(r, e, t) {
  var n;
  const i = `${r}.${String(t)}`;
  if (zi[i])
    return zi[i].call(
      e
    );
  const o = ws(r), s = (n = Object.getOwnPropertyDescriptor(
    o,
    t
  )) == null ? void 0 : n.get;
  return s ? (zi[i] = s, s.call(e)) : e[t];
}
const Ui = {};
function wc(r, e, t) {
  const n = `${r}.${String(t)}`;
  if (Ui[n])
    return Ui[n].bind(
      e
    );
  const o = ws(r)[t];
  return typeof o != "function" ? e[t] : (Ui[n] = o, o.bind(e));
}
function Zy(r) {
  return qe("Node", r, "childNodes");
}
function jy(r) {
  return qe("Node", r, "parentNode");
}
function Gy(r) {
  return qe("Node", r, "parentElement");
}
function Vy(r) {
  return qe("Node", r, "textContent");
}
function Hy(r, e) {
  return wc("Node", r, "contains")(e);
}
function Yy(r) {
  return wc("Node", r, "getRootNode")();
}
function Xy(r) {
  return !r || !("host" in r) ? null : qe("ShadowRoot", r, "host");
}
function Jy(r) {
  return r.styleSheets;
}
function Ky(r) {
  return !r || !("shadowRoot" in r) ? null : qe("Element", r, "shadowRoot");
}
function qy(r, e) {
  return qe("Element", r, "querySelector")(e);
}
function Qy(r, e) {
  return qe("Element", r, "querySelectorAll")(e);
}
function e0() {
  return ws("MutationObserver").constructor;
}
const ie = {
  childNodes: Zy,
  parentNode: jy,
  parentElement: Gy,
  textContent: Vy,
  contains: Hy,
  getRootNode: Yy,
  host: Xy,
  styleSheets: Jy,
  shadowRoot: Ky,
  querySelector: qy,
  querySelectorAll: Qy,
  mutationObserver: e0
};
function vc(r) {
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
function or(r) {
  return Object.prototype.toString.call(r) === "[object ShadowRoot]";
}
function t0(r) {
  return r.includes(" background-clip: text;") && !r.includes(" -webkit-background-clip: text;") && (r = r.replace(
    /\sbackground-clip:\s*text;/g,
    " -webkit-background-clip: text; background-clip: text;"
  )), r;
}
function r0(r) {
  const { cssText: e } = r;
  if (e.split('"').length < 3) return e;
  const t = ["@import", `url(${JSON.stringify(r.href)})`];
  return r.layerName === "" ? t.push("layer") : r.layerName && t.push(`layer(${r.layerName})`), r.supportsText && t.push(`supports(${r.supportsText})`), r.media.length && t.push(r.media.mediaText), t.join(" ") + ";";
}
function Io(r) {
  try {
    const e = r.rules || r.cssRules;
    if (!e)
      return null;
    let t = r.href;
    !t && r.ownerNode && r.ownerNode.ownerDocument && (t = r.ownerNode.ownerDocument.location.href);
    const n = Array.from(
      e,
      (i) => bc(i, t)
    ).join("");
    return t0(n);
  } catch {
    return null;
  }
}
function bc(r, e) {
  if (i0(r)) {
    let t;
    try {
      t = // for same-origin stylesheets,
      // we can access the imported stylesheet rules directly
      Io(r.styleSheet) || // work around browser issues with the raw string `@import url(...)` statement
      r0(r);
    } catch {
      t = r.cssText;
    }
    return r.styleSheet.href ? zn(t, r.styleSheet.href) : t;
  } else {
    let t = r.cssText;
    return o0(r) && r.selectorText.includes(":") && (t = n0(t)), e ? zn(t, e) : t;
  }
}
function n0(r) {
  const e = /(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm;
  return r.replace(e, "$1\\$2");
}
function i0(r) {
  return "styleSheet" in r;
}
function o0(r) {
  return "selectorText" in r;
}
class Sc {
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
function s0() {
  return new Sc();
}
function vs({
  element: r,
  maskInputOptions: e,
  tagName: t,
  type: n,
  value: i,
  maskInputFn: o
}) {
  let s = i || "";
  const a = n && ft(n);
  return (e[t.toLowerCase()] || a && e[a]) && (o ? s = o(s, r) : s = "*".repeat(s.length)), s;
}
function ft(r) {
  return r.toLowerCase();
}
const el = "__rrweb_original__";
function a0(r) {
  const e = r.getContext("2d");
  if (!e) return !0;
  const t = 50;
  for (let n = 0; n < r.width; n += t)
    for (let i = 0; i < r.height; i += t) {
      const o = e.getImageData, s = el in o ? o[el] : o;
      if (new Uint32Array(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
        s.call(
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
function bs(r) {
  const e = r.type;
  return r.hasAttribute("data-rr-is-password") ? "password" : e ? (
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    ft(e)
  ) : null;
}
function _c(r, e) {
  let t;
  try {
    t = new URL(r, e ?? window.location.href);
  } catch {
    return null;
  }
  const n = /\.([0-9a-z]+)(?:$)/i, i = t.pathname.match(n);
  return (i == null ? void 0 : i[1]) ?? null;
}
function l0(r) {
  let e = "";
  return r.indexOf("//") > -1 ? e = r.split("/").slice(0, 3).join("/") : e = r.split("/")[0], e = e.split("?")[0], e;
}
const u0 = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm, c0 = /^(?:[a-z+]+:)?\/\//i, f0 = /^www\..*/i, h0 = /^(data:)([^,]*),(.*)/i;
function zn(r, e) {
  return (r || "").replace(
    u0,
    (t, n, i, o, s, a) => {
      const l = i || s || a, u = n || o || "";
      if (!l)
        return t;
      if (c0.test(l) || f0.test(l))
        return `url(${u}${l}${u})`;
      if (h0.test(l))
        return `url(${u}${l}${u})`;
      if (l[0] === "/")
        return `url(${u}${l0(e) + l}${u})`;
      const c = e.split("/"), f = l.split("/");
      c.pop();
      for (const d of f)
        d !== "." && (d === ".." ? c.pop() : c.push(d));
      return `url(${u}${c.join("/")}${u})`;
    }
  );
}
function Bi(r) {
  return r.replace(/(\/\*[^*]*\*\/)|[\s;]/g, "");
}
function d0(r, e) {
  const t = Array.from(e.childNodes), n = [];
  if (t.length > 1 && r && typeof r == "string") {
    const i = Bi(r);
    for (let o = 1; o < t.length; o++)
      if (t[o].textContent && typeof t[o].textContent == "string") {
        const s = Bi(t[o].textContent);
        for (let a = 3; a < s.length; a++) {
          const l = s.substring(0, a);
          if (i.split(l).length === 2) {
            const u = i.indexOf(l);
            for (let c = u; c < r.length; c++)
              if (Bi(r.substring(0, c)).length === u) {
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
function p0(r, e) {
  return d0(r, e).join("/* rr_split */");
}
let m0 = 1;
const g0 = new RegExp("[^a-z0-9-_:]"), gr = -2;
function xc() {
  return m0++;
}
function y0(r) {
  if (r instanceof HTMLFormElement)
    return "form";
  const e = ft(r.tagName);
  return g0.test(e) ? "div" : e;
}
let St, tl;
const w0 = /^[^ \t\n\r\u000c]+/, v0 = /^[, \t\n\r\u000c]+/;
function b0(r, e) {
  if (e.trim() === "")
    return e;
  let t = 0;
  function n(o) {
    let s;
    const a = o.exec(e.substring(t));
    return a ? (s = a[0], t += s.length, s) : "";
  }
  const i = [];
  for (; n(v0), !(t >= e.length); ) {
    let o = n(w0);
    if (o.slice(-1) === ",")
      o = Et(r, o.substring(0, o.length - 1)), i.push(o);
    else {
      let s = "";
      o = Et(r, o);
      let a = !1;
      for (; ; ) {
        const l = e.charAt(t);
        if (l === "") {
          i.push((o + s).trim());
          break;
        } else if (a)
          l === ")" && (a = !1);
        else if (l === ",") {
          t += 1, i.push((o + s).trim());
          break;
        } else l === "(" && (a = !0);
        s += l, t += 1;
      }
    }
  }
  return i.join(", ");
}
const rl = /* @__PURE__ */ new WeakMap();
function Et(r, e) {
  return !e || e.trim() === "" ? e : Ss(r, e);
}
function S0(r) {
  return !!(r.tagName === "svg" || r.ownerSVGElement);
}
function Ss(r, e) {
  let t = rl.get(r);
  if (t || (t = r.createElement("a"), rl.set(r, t)), !e)
    e = "";
  else if (e.startsWith("blob:") || e.startsWith("data:"))
    return e;
  return t.setAttribute("href", e), t.href;
}
function Cc(r, e, t, n) {
  return n && (t === "src" || t === "href" && !(e === "use" && n[0] === "#") || t === "xlink:href" && n[0] !== "#" || t === "background" && (e === "table" || e === "td" || e === "th") ? Et(r, n) : t === "srcset" ? b0(r, n) : t === "style" ? zn(n, Ss(r)) : e === "object" && t === "data" ? Et(r, n) : n);
}
function Ic(r, e, t) {
  return (r === "video" || r === "audio") && e === "autoplay";
}
function _0(r, e, t) {
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
function Un(r, e, t) {
  if (!r) return !1;
  if (r.nodeType !== r.ELEMENT_NODE)
    return t ? Un(ie.parentNode(r), e, t) : !1;
  for (let n = r.classList.length; n--; ) {
    const i = r.classList[n];
    if (e.test(i))
      return !0;
  }
  return t ? Un(ie.parentNode(r), e, t) : !1;
}
function Ac(r, e, t, n) {
  let i;
  if (vc(r)) {
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
    } else if (Un(i, e, n)) return !0;
    if (t) {
      if (n) {
        if (i.closest(t)) return !0;
      } else if (i.matches(t)) return !0;
    }
  } catch {
  }
  return !1;
}
function x0(r, e, t) {
  const n = r.contentWindow;
  if (!n)
    return;
  let i = !1, o;
  try {
    o = n.document.readyState;
  } catch {
    return;
  }
  if (o !== "complete") {
    const a = setTimeout(() => {
      i || (e(), i = !0);
    }, t);
    r.addEventListener("load", () => {
      clearTimeout(a), i = !0, e();
    });
    return;
  }
  const s = "about:blank";
  if (n.location.href !== s || r.src === s || r.src === "")
    return setTimeout(e, 0), r.addEventListener("load", e);
  r.addEventListener("load", e);
}
function C0(r, e, t) {
  let n = !1, i;
  try {
    i = r.sheet;
  } catch {
    return;
  }
  if (i) return;
  const o = setTimeout(() => {
    n || (e(), n = !0);
  }, t);
  r.addEventListener("load", () => {
    clearTimeout(o), n = !0, e();
  });
}
function I0(r, e) {
  const {
    doc: t,
    mirror: n,
    blockClass: i,
    blockSelector: o,
    needsMask: s,
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
  } = e, v = A0(t, n);
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
      return R0(r, {
        doc: t,
        blockClass: i,
        blockSelector: o,
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
      return E0(r, {
        doc: t,
        needsMask: s,
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
function A0(r, e) {
  if (!e.hasNode(r)) return;
  const t = e.getId(r);
  return t === 1 ? void 0 : t;
}
function E0(r, e) {
  const { needsMask: t, maskTextFn: n, rootId: i, cssCaptured: o } = e, s = ie.parentNode(r), a = s && s.tagName;
  let l = "";
  const u = a === "STYLE" ? !0 : void 0, c = a === "SCRIPT" ? !0 : void 0;
  return c ? l = "SCRIPT_PLACEHOLDER" : o || (l = ie.textContent(r), u && l && (l = zn(l, Ss(e.doc)))), !u && !c && l && t && (l = n ? n(l, ie.parentElement(r)) : l.replace(/[\S]/g, "*")), {
    type: ee.Text,
    textContent: l || "",
    rootId: i
  };
}
function R0(r, e) {
  const {
    doc: t,
    blockClass: n,
    blockSelector: i,
    inlineStylesheet: o,
    maskInputOptions: s = {},
    maskInputFn: a,
    dataURLOptions: l = {},
    inlineImages: u,
    recordCanvas: c,
    keepIframeSrcFn: f,
    newlyAddedElement: d = !1,
    rootId: h
  } = e, p = _0(r, n, i), m = y0(r);
  let g = {};
  const v = r.attributes.length;
  for (let y = 0; y < v; y++) {
    const w = r.attributes[y];
    Ic(m, w.name, w.value) || (g[w.name] = Cc(
      t,
      m,
      ft(w.name),
      w.value
    ));
  }
  if (m === "link" && o) {
    const y = Array.from(t.styleSheets).find((_) => _.href === r.href);
    let w = null;
    y && (w = Io(y)), w && (delete g.rel, delete g.href, g._cssText = w);
  }
  if (m === "style" && r.sheet) {
    let y = Io(
      r.sheet
    );
    y && (r.childNodes.length > 1 && (y = p0(y, r)), g._cssText = y);
  }
  if (m === "input" || m === "textarea" || m === "select") {
    const y = r.value, w = r.checked;
    g.type !== "radio" && g.type !== "checkbox" && g.type !== "submit" && g.type !== "button" && y ? g.value = vs({
      element: r,
      type: bs(r),
      tagName: m,
      value: y,
      maskInputOptions: s,
      maskInputFn: a
    }) : w && (g.checked = w);
  }
  if (m === "option" && (r.selected && !s.select ? g.selected = !0 : delete g.selected), m === "dialog" && r.open && (g.rr_open_mode = r.matches("dialog:modal") ? "modal" : "non-modal"), m === "canvas" && c) {
    if (r.__context === "2d")
      a0(r) || (g.rr_dataURL = r.toDataURL(
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
    isSVG: S0(r) || void 0,
    needBlock: p,
    rootId: h,
    isCustom: b
  };
}
function W(r) {
  return r == null ? "" : r.toLowerCase();
}
function k0(r, e) {
  if (e.comment && r.type === ee.Comment)
    return !0;
  if (r.type === ee.Element) {
    if (e.script && // script tag
    (r.tagName === "script" || // (module)preload link
    r.tagName === "link" && (r.attributes.rel === "preload" || r.attributes.rel === "modulepreload") && r.attributes.as === "script" || // prefetch link
    r.tagName === "link" && r.attributes.rel === "prefetch" && typeof r.attributes.href == "string" && _c(r.attributes.href) === "js"))
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
    blockSelector: o,
    maskTextClass: s,
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
  A || (A = Ac(
    r,
    s,
    a,
    A === void 0
  ));
  const R = I0(r, {
    doc: t,
    mirror: n,
    blockClass: i,
    blockSelector: o,
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
  n.hasNode(r) ? q = n.getId(r) : k0(R, h) || !I && R.type === ee.Text && !R.textContent.replace(/^\s+|\s+$/gm, "").length ? q = gr : q = xc();
  const k = Object.assign(R, { id: q });
  if (n.add(r, k), q === gr)
    return null;
  v && v(r);
  let me = !l;
  if (k.type === ee.Element) {
    me = me && !k.needBlock, delete k.needBlock;
    const Q = ie.shadowRoot(r);
    Q && or(Q) && (k.isShadowHost = !0);
  }
  if ((k.type === ee.Document || k.type === ee.Element) && me) {
    h.headWhitespace && k.type === ee.Element && k.tagName === "head" && (I = !1);
    const Q = {
      doc: t,
      mirror: n,
      blockClass: i,
      blockSelector: o,
      needsMask: A,
      maskTextClass: s,
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
    if (vc(r) && (ge = ie.shadowRoot(r)))
      for (const et of Array.from(ie.childNodes(ge))) {
        const Re = Rt(et, Q);
        Re && (or(ge) && (Re.isShadow = !0), k.childNodes.push(Re));
      }
  }
  const Ee = ie.parentNode(r);
  return Ee && ir(Ee) && or(Ee) && (k.isShadow = !0), k.type === ee.Element && k.tagName === "iframe" && x0(
    r,
    () => {
      const Q = r.contentDocument;
      if (Q && b) {
        const ge = Rt(Q, {
          doc: Q,
          mirror: n,
          blockClass: i,
          blockSelector: o,
          needsMask: A,
          maskTextClass: s,
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
  ), k.type === ee.Element && k.tagName === "link" && typeof k.attributes.rel == "string" && (k.attributes.rel === "stylesheet" || k.attributes.rel === "preload" && typeof k.attributes.href == "string" && _c(k.attributes.href) === "css") && C0(
    r,
    () => {
      if (w) {
        const Q = Rt(r, {
          doc: t,
          mirror: n,
          blockClass: i,
          blockSelector: o,
          needsMask: A,
          maskTextClass: s,
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
function O0(r, e) {
  const {
    mirror: t = new Sc(),
    blockClass: n = "rr-block",
    blockSelector: i = null,
    maskTextClass: o = "rr-mask",
    maskTextSelector: s = null,
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
    maskTextClass: o,
    maskTextSelector: s,
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
function M0(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
function $0(r) {
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
var _s = { exports: {} }, Z = String, Ec = function() {
  return { isColorSupported: !1, reset: Z, bold: Z, dim: Z, italic: Z, underline: Z, inverse: Z, hidden: Z, strikethrough: Z, black: Z, red: Z, green: Z, yellow: Z, blue: Z, magenta: Z, cyan: Z, white: Z, gray: Z, bgBlack: Z, bgRed: Z, bgGreen: Z, bgYellow: Z, bgBlue: Z, bgMagenta: Z, bgCyan: Z, bgWhite: Z };
};
_s.exports = Ec();
_s.exports.createColors = Ec;
var N0 = _s.exports;
const P0 = {}, L0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: P0
}, Symbol.toStringTag, { value: "Module" })), Ie = /* @__PURE__ */ $0(L0);
let nl = N0, il = Ie, Ao = class Rc extends Error {
  constructor(e, t, n, i, o, s) {
    super(e), this.name = "CssSyntaxError", this.reason = e, o && (this.file = o), i && (this.source = i), s && (this.plugin = s), typeof t < "u" && typeof n < "u" && (typeof t == "number" ? (this.line = t, this.column = n) : (this.line = t.line, this.column = t.column, this.endLine = n.line, this.endColumn = n.column)), this.setMessage(), Error.captureStackTrace && Error.captureStackTrace(this, Rc);
  }
  setMessage() {
    this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", typeof this.line < "u" && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason;
  }
  showSourceCode(e) {
    if (!this.source) return "";
    let t = this.source;
    e == null && (e = nl.isColorSupported), il && e && (t = il(t));
    let n = t.split(/\r?\n/), i = Math.max(this.line - 3, 0), o = Math.min(this.line + 2, n.length), s = String(o).length, a, l;
    if (e) {
      let { bold: u, gray: c, red: f } = nl.createColors(!0);
      a = (d) => u(f(d)), l = (d) => c(d);
    } else
      a = l = (u) => u;
    return n.slice(i, o).map((u, c) => {
      let f = i + 1 + c, d = " " + (" " + f).slice(-s) + " | ";
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
var xs = Ao;
Ao.default = Ao;
var Pr = {};
Pr.isClean = Symbol("isClean");
Pr.my = Symbol("my");
const ol = {
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
function T0(r) {
  return r[0].toUpperCase() + r.slice(1);
}
let Eo = class {
  constructor(e) {
    this.builder = e;
  }
  atrule(e, t) {
    let n = "@" + e.name, i = e.params ? this.rawValue(e, "params") : "";
    if (typeof e.raws.afterName < "u" ? n += e.raws.afterName : i && (n += " "), e.nodes)
      this.block(e, n + i);
    else {
      let o = (e.raws.between || "") + (t ? ";" : "");
      this.builder(n + i + o, e);
    }
  }
  beforeAfter(e, t) {
    let n;
    e.type === "decl" ? n = this.raw(e, null, "beforeDecl") : e.type === "comment" ? n = this.raw(e, null, "beforeComment") : t === "before" ? n = this.raw(e, null, "beforeRule") : n = this.raw(e, null, "beforeClose");
    let i = e.parent, o = 0;
    for (; i && i.type !== "root"; )
      o += 1, i = i.parent;
    if (n.includes(`
`)) {
      let s = this.raw(e, null, "indent");
      if (s.length)
        for (let a = 0; a < o; a++) n += s;
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
      let o = e.nodes[i], s = this.raw(o, "before");
      s && this.builder(s), this.stringify(o, t !== i || n);
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
    let o = e.parent;
    if (n === "before" && (!o || o.type === "root" && o.first === e || o && o.type === "document"))
      return "";
    if (!o) return ol[n];
    let s = e.root();
    if (s.rawCache || (s.rawCache = {}), typeof s.rawCache[n] < "u")
      return s.rawCache[n];
    if (n === "before" || n === "after")
      return this.beforeAfter(e, n);
    {
      let a = "raw" + T0(n);
      this[a] ? i = this[a](s, e) : s.walk((l) => {
        if (i = l.raws[t], typeof i < "u") return !1;
      });
    }
    return typeof i > "u" && (i = ol[n]), s.rawCache[n] = i, i;
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
        let o = n.raws.before.split(`
`);
        return t = o[o.length - 1], t = t.replace(/\S/g, ""), !1;
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
var kc = Eo;
Eo.default = Eo;
let D0 = kc;
function Ro(r, e) {
  new D0(e).stringify(r);
}
var ni = Ro;
Ro.default = Ro;
let { isClean: Qr, my: F0 } = Pr, z0 = xs, U0 = kc, B0 = ni;
function ko(r, e) {
  let t = new r.constructor();
  for (let n in r) {
    if (!Object.prototype.hasOwnProperty.call(r, n) || n === "proxyCache") continue;
    let i = r[n], o = typeof i;
    n === "parent" && o === "object" ? e && (t[n] = e) : n === "source" ? t[n] = i : Array.isArray(i) ? t[n] = i.map((s) => ko(s, t)) : (o === "object" && i !== null && (i = ko(i)), t[n] = i);
  }
  return t;
}
let Oo = class {
  constructor(e = {}) {
    this.raws = {}, this[Qr] = !1, this[F0] = !0;
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
    let t = ko(this);
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
    return new z0(e);
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
    let n = t || this.toString(), i = this.source.start.column, o = this.source.start.line;
    for (let s = 0; s < e; s++)
      n[s] === `
` ? (i = 1, o += 1) : i += 1;
    return { column: i, line: o };
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
      let i = this.toString(), o = i.indexOf(e.word);
      o !== -1 && (t = this.positionInside(o, i), n = this.positionInside(o + e.word.length, i));
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
    return new U0().raw(this, e, t);
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
    let o = 0;
    for (let s in this) {
      if (!Object.prototype.hasOwnProperty.call(this, s) || s === "parent" || s === "proxyCache") continue;
      let a = this[s];
      if (Array.isArray(a))
        n[s] = a.map((l) => typeof l == "object" && l.toJSON ? l.toJSON(null, t) : l);
      else if (typeof a == "object" && a.toJSON)
        n[s] = a.toJSON(null, t);
      else if (s === "source") {
        let l = t.get(a.input);
        l == null && (l = o, t.set(a.input, o), o++), n[s] = {
          end: a.end,
          inputId: l,
          start: a.start
        };
      } else
        n[s] = a;
    }
    return i && (n.inputs = [...t.keys()].map((s) => s.toJSON())), n;
  }
  toProxy() {
    return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache;
  }
  toString(e = B0) {
    e.stringify && (e = e.stringify);
    let t = "";
    return e(this, (n) => {
      t += n;
    }), t;
  }
  warn(e, t, n) {
    let i = { node: this };
    for (let o in n) i[o] = n[o];
    return e.warn(t, i);
  }
  get proxyOf() {
    return this;
  }
};
var ii = Oo;
Oo.default = Oo;
let W0 = ii, Mo = class extends W0 {
  constructor(e) {
    e && typeof e.value < "u" && typeof e.value != "string" && (e = { ...e, value: String(e.value) }), super(e), this.type = "decl";
  }
  get variable() {
    return this.prop.startsWith("--") || this.prop[0] === "$";
  }
};
var oi = Mo;
Mo.default = Mo;
let Z0 = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", j0 = (r, e = 21) => (t = e) => {
  let n = "", i = t;
  for (; i--; )
    n += r[Math.random() * r.length | 0];
  return n;
}, G0 = (r = 21) => {
  let e = "", t = r;
  for (; t--; )
    e += Z0[Math.random() * 64 | 0];
  return e;
};
var V0 = { nanoid: G0, customAlphabet: j0 };
let { SourceMapConsumer: sl, SourceMapGenerator: al } = Ie, { existsSync: H0, readFileSync: Y0 } = Ie, { dirname: Wi, join: X0 } = Ie;
function J0(r) {
  return Buffer ? Buffer.from(r, "base64").toString() : window.atob(r);
}
let $o = class {
  constructor(e, t) {
    if (t.map === !1) return;
    this.loadAnnotation(e), this.inline = this.startWith(this.annotation, "data:");
    let n = t.map ? t.map.prev : void 0, i = this.loadMap(t.from, n);
    !this.mapFile && t.from && (this.mapFile = t.from), this.mapFile && (this.root = Wi(this.mapFile)), i && (this.text = i);
  }
  consumer() {
    return this.consumerCache || (this.consumerCache = new sl(this.text)), this.consumerCache;
  }
  decodeInline(e) {
    let t = /^data:application\/json;charset=utf-?8;base64,/, n = /^data:application\/json;base64,/, i = /^data:application\/json;charset=utf-?8,/, o = /^data:application\/json,/;
    if (i.test(e) || o.test(e))
      return decodeURIComponent(e.substr(RegExp.lastMatch.length));
    if (t.test(e) || n.test(e))
      return J0(e.substr(RegExp.lastMatch.length));
    let s = e.match(/data:application\/json;([^,]+),/)[1];
    throw new Error("Unsupported source map encoding " + s);
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
    if (this.root = Wi(e), H0(e))
      return this.mapFile = e, Y0(e, "utf-8").toString().trim();
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
        if (t instanceof sl)
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
        return e && (n = X0(Wi(e), n)), this.loadFile(n);
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
var Oc = $o;
$o.default = $o;
let { SourceMapConsumer: K0, SourceMapGenerator: q0 } = Ie, { fileURLToPath: ll, pathToFileURL: en } = Ie, { isAbsolute: No, resolve: Po } = Ie, { nanoid: Q0 } = V0, Zi = Ie, ul = xs, ew = Oc, ji = Symbol("fromOffsetCache"), tw = !!(K0 && q0), cl = !!(Po && No), Bn = class {
  constructor(e, t = {}) {
    if (e === null || typeof e > "u" || typeof e == "object" && !e.toString)
      throw new Error(`PostCSS received ${e} instead of CSS string`);
    if (this.css = e.toString(), this.css[0] === "\uFEFF" || this.css[0] === "￾" ? (this.hasBOM = !0, this.css = this.css.slice(1)) : this.hasBOM = !1, t.from && (!cl || /^\w+:\/\//.test(t.from) || No(t.from) ? this.file = t.from : this.file = Po(t.from)), cl && tw) {
      let n = new ew(this.css, t);
      if (n.text) {
        this.map = n;
        let i = n.consumer().file;
        !this.file && i && (this.file = this.mapResolve(i));
      }
    }
    this.file || (this.id = "<input css " + Q0(6) + ">"), this.map && (this.map.file = this.from);
  }
  error(e, t, n, i = {}) {
    let o, s, a;
    if (t && typeof t == "object") {
      let u = t, c = n;
      if (typeof u.offset == "number") {
        let f = this.fromOffset(u.offset);
        t = f.line, n = f.col;
      } else
        t = u.line, n = u.column;
      if (typeof c.offset == "number") {
        let f = this.fromOffset(c.offset);
        s = f.line, a = f.col;
      } else
        s = c.line, a = c.column;
    } else if (!n) {
      let u = this.fromOffset(t);
      t = u.line, n = u.col;
    }
    let l = this.origin(t, n, s, a);
    return l ? o = new ul(
      e,
      l.endLine === void 0 ? l.line : { column: l.column, line: l.line },
      l.endLine === void 0 ? l.column : { column: l.endColumn, line: l.endLine },
      l.source,
      l.file,
      i.plugin
    ) : o = new ul(
      e,
      s === void 0 ? t : { column: n, line: t },
      s === void 0 ? n : { column: a, line: s },
      this.css,
      this.file,
      i.plugin
    ), o.input = { column: n, endColumn: a, endLine: s, line: t, source: this.css }, this.file && (en && (o.input.url = en(this.file).toString()), o.input.file = this.file), o;
  }
  fromOffset(e) {
    let t, n;
    if (this[ji])
      n = this[ji];
    else {
      let o = this.css.split(`
`);
      n = new Array(o.length);
      let s = 0;
      for (let a = 0, l = o.length; a < l; a++)
        n[a] = s, s += o[a].length + 1;
      this[ji] = n;
    }
    t = n[n.length - 1];
    let i = 0;
    if (e >= t)
      i = n.length - 1;
    else {
      let o = n.length - 2, s;
      for (; i < o; )
        if (s = i + (o - i >> 1), e < n[s])
          o = s - 1;
        else if (e >= n[s + 1])
          i = s + 1;
        else {
          i = s;
          break;
        }
    }
    return {
      col: e - n[i] + 1,
      line: i + 1
    };
  }
  mapResolve(e) {
    return /^\w+:\/\//.test(e) ? e : Po(this.map.consumer().sourceRoot || this.map.root || ".", e);
  }
  origin(e, t, n, i) {
    if (!this.map) return !1;
    let o = this.map.consumer(), s = o.originalPositionFor({ column: t, line: e });
    if (!s.source) return !1;
    let a;
    typeof n == "number" && (a = o.originalPositionFor({ column: i, line: n }));
    let l;
    No(s.source) ? l = en(s.source) : l = new URL(
      s.source,
      this.map.consumer().sourceRoot || en(this.map.mapFile)
    );
    let u = {
      column: s.column,
      endColumn: a && a.column,
      endLine: a && a.line,
      line: s.line,
      url: l.toString()
    };
    if (l.protocol === "file:")
      if (ll)
        u.file = ll(l);
      else
        throw new Error("file: protocol is not available in this PostCSS build");
    let c = o.sourceContentFor(s.source);
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
var si = Bn;
Bn.default = Bn;
Zi && Zi.registerInput && Zi.registerInput(Bn);
let { SourceMapConsumer: Mc, SourceMapGenerator: An } = Ie, { dirname: En, relative: $c, resolve: Nc, sep: Pc } = Ie, { pathToFileURL: fl } = Ie, rw = si, nw = !!(Mc && An), iw = !!(En && Nc && $c && Pc), ow = class {
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
      let t = this.toUrl(this.path(e.file)), n = e.root || En(e.file), i;
      this.mapOpts.sourcesContent === !1 ? (i = new Mc(e.text), i.sourcesContent && (i.sourcesContent = null)) : i = e.consumer(), this.map.applySourceMap(i, t, this.toUrl(this.path(n)));
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
    if (this.clearAnnotation(), iw && nw && this.isMap())
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
      e.file = this.outputFile(), this.map = An.fromSourceMap(e, {
        ignoreInvalidMapping: !0
      });
    } else
      this.map = new An({
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
    this.css = "", this.map = new An({
      file: this.outputFile(),
      ignoreInvalidMapping: !0
    });
    let e = 1, t = 1, n = "<no source>", i = {
      generated: { column: 0, line: 0 },
      original: { column: 0, line: 0 },
      source: ""
    }, o, s;
    this.stringify(this.root, (a, l, u) => {
      if (this.css += a, l && u !== "end" && (i.generated.line = e, i.generated.column = t - 1, l.source && l.source.start ? (i.source = this.sourcePath(l), i.original.line = l.source.start.line, i.original.column = l.source.start.column - 1, this.map.addMapping(i)) : (i.source = n, i.original.line = 1, i.original.column = 0, this.map.addMapping(i))), o = a.match(/\n/g), o ? (e += o.length, s = a.lastIndexOf(`
`), t = a.length - s) : t += a.length, l && u !== "start") {
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
    let n = this.opts.to ? En(this.opts.to) : ".";
    typeof this.mapOpts.annotation == "string" && (n = En(Nc(n, this.mapOpts.annotation)));
    let i = $c(n, e);
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
        let e = new rw(this.originalCSS, this.opts);
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
    Pc === "\\" && (e = e.replace(/\\/g, "/"));
    let n = encodeURI(e).replace(/[#?]/g, encodeURIComponent);
    return this.memoizedURLs.set(e, n), n;
  }
};
var Lc = ow;
let sw = ii, Lo = class extends sw {
  constructor(e) {
    super(e), this.type = "comment";
  }
};
var ai = Lo;
Lo.default = Lo;
let { isClean: Tc, my: Dc } = Pr, Fc = oi, zc = ai, aw = ii, Uc, Cs, Is, Bc;
function Wc(r) {
  return r.map((e) => (e.nodes && (e.nodes = Wc(e.nodes)), delete e.source, e));
}
function Zc(r) {
  if (r[Tc] = !1, r.proxyOf.nodes)
    for (let e of r.proxyOf.nodes)
      Zc(e);
}
let Ze = class jc extends aw {
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
          ...n.map((i) => typeof i == "function" ? (o, s) => i(o.toProxy(), s) : i)
        ) : t === "every" || t === "some" ? (n) => e[t](
          (i, ...o) => n(i.toProxy(), ...o)
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
    for (let s of i) this.proxyOf.nodes.splice(n + 1, 0, s);
    let o;
    for (let s in this.indexes)
      o = this.indexes[s], n < o && (this.indexes[s] = o + i.length);
    return this.markDirty(), this;
  }
  insertBefore(e, t) {
    let n = this.index(e), i = n === 0 ? "prepend" : !1, o = this.normalize(t, this.proxyOf.nodes[n], i).reverse();
    n = this.index(e);
    for (let a of o) this.proxyOf.nodes.splice(n, 0, a);
    let s;
    for (let a in this.indexes)
      s = this.indexes[a], n <= s && (this.indexes[a] = s + o.length);
    return this.markDirty(), this;
  }
  normalize(e, t) {
    if (typeof e == "string")
      e = Wc(Uc(e).nodes);
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
      typeof e.value != "string" && (e.value = String(e.value)), e = [new Fc(e)];
    } else if (e.selector)
      e = [new Cs(e)];
    else if (e.name)
      e = [new Is(e)];
    else if (e.text)
      e = [new zc(e)];
    else
      throw new Error("Unknown node type in node creation");
    return e.map((i) => (i[Dc] || jc.rebuild(i), i = i.proxyOf, i.parent && i.parent.removeChild(i), i[Tc] && Zc(i), typeof i.raws.before > "u" && t && typeof t.raws.before < "u" && (i.raws.before = t.raws.before.replace(/\S/g, "")), i.parent = this.proxyOf, i));
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
      } catch (o) {
        throw t.addToError(o);
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
  Uc = r;
};
Ze.registerRule = (r) => {
  Cs = r;
};
Ze.registerAtRule = (r) => {
  Is = r;
};
Ze.registerRoot = (r) => {
  Bc = r;
};
var pt = Ze;
Ze.default = Ze;
Ze.rebuild = (r) => {
  r.type === "atrule" ? Object.setPrototypeOf(r, Is.prototype) : r.type === "rule" ? Object.setPrototypeOf(r, Cs.prototype) : r.type === "decl" ? Object.setPrototypeOf(r, Fc.prototype) : r.type === "comment" ? Object.setPrototypeOf(r, zc.prototype) : r.type === "root" && Object.setPrototypeOf(r, Bc.prototype), r[Dc] = !0, r.nodes && r.nodes.forEach((e) => {
    Ze.rebuild(e);
  });
};
let lw = pt, Gc, Vc, yr = class extends lw {
  constructor(e) {
    super({ type: "document", ...e }), this.nodes || (this.nodes = []);
  }
  toResult(e = {}) {
    return new Gc(new Vc(), this, e).stringify();
  }
};
yr.registerLazyResult = (r) => {
  Gc = r;
};
yr.registerProcessor = (r) => {
  Vc = r;
};
var As = yr;
yr.default = yr;
let hl = {};
var Hc = function(e) {
  hl[e] || (hl[e] = !0, typeof console < "u" && console.warn && console.warn(e));
};
let To = class {
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
var Yc = To;
To.default = To;
let uw = Yc, Do = class {
  constructor(e, t, n) {
    this.processor = e, this.messages = [], this.root = t, this.opts = n, this.css = void 0, this.map = void 0;
  }
  toString() {
    return this.css;
  }
  warn(e, t = {}) {
    t.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (t.plugin = this.lastPlugin.postcssPlugin);
    let n = new uw(e, t);
    return this.messages.push(n), n;
  }
  warnings() {
    return this.messages.filter((e) => e.type === "warning");
  }
  get content() {
    return this.css;
  }
};
var Es = Do;
Do.default = Do;
const Gi = 39, dl = 34, tn = 92, pl = 47, rn = 10, Xt = 32, nn = 12, on = 9, sn = 13, cw = 91, fw = 93, hw = 40, dw = 41, pw = 123, mw = 125, gw = 59, yw = 42, ww = 58, vw = 64, an = /[\t\n\f\r "#'()/;[\\\]{}]/g, ln = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g, bw = /.[\r\n"'(/\\]/, ml = /[\da-f]/i;
var Sw = function(e, t = {}) {
  let n = e.css.valueOf(), i = t.ignoreErrors, o, s, a, l, u, c, f, d, h, p, m = n.length, g = 0, v = [], b = [];
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
    switch (o = n.charCodeAt(g), o) {
      case rn:
      case Xt:
      case on:
      case sn:
      case nn: {
        s = g;
        do
          s += 1, o = n.charCodeAt(s);
        while (o === Xt || o === rn || o === on || o === sn || o === nn);
        p = ["space", n.slice(g, s)], g = s - 1;
        break;
      }
      case cw:
      case fw:
      case pw:
      case mw:
      case ww:
      case gw:
      case dw: {
        let I = String.fromCharCode(o);
        p = [I, I, g];
        break;
      }
      case hw: {
        if (d = v.length ? v.pop()[1] : "", h = n.charCodeAt(g + 1), d === "url" && h !== Gi && h !== dl && h !== Xt && h !== rn && h !== on && h !== nn && h !== sn) {
          s = g;
          do {
            if (c = !1, s = n.indexOf(")", s + 1), s === -1)
              if (i || A) {
                s = g;
                break;
              } else
                w("bracket");
            for (f = s; n.charCodeAt(f - 1) === tn; )
              f -= 1, c = !c;
          } while (c);
          p = ["brackets", n.slice(g, s + 1), g, s], g = s;
        } else
          s = n.indexOf(")", g + 1), l = n.slice(g, s + 1), s === -1 || bw.test(l) ? p = ["(", "(", g] : (p = ["brackets", l, g, s], g = s);
        break;
      }
      case Gi:
      case dl: {
        a = o === Gi ? "'" : '"', s = g;
        do {
          if (c = !1, s = n.indexOf(a, s + 1), s === -1)
            if (i || A) {
              s = g + 1;
              break;
            } else
              w("string");
          for (f = s; n.charCodeAt(f - 1) === tn; )
            f -= 1, c = !c;
        } while (c);
        p = ["string", n.slice(g, s + 1), g, s], g = s;
        break;
      }
      case vw: {
        an.lastIndex = g + 1, an.test(n), an.lastIndex === 0 ? s = n.length - 1 : s = an.lastIndex - 2, p = ["at-word", n.slice(g, s + 1), g, s], g = s;
        break;
      }
      case tn: {
        for (s = g, u = !0; n.charCodeAt(s + 1) === tn; )
          s += 1, u = !u;
        if (o = n.charCodeAt(s + 1), u && o !== pl && o !== Xt && o !== rn && o !== on && o !== sn && o !== nn && (s += 1, ml.test(n.charAt(s)))) {
          for (; ml.test(n.charAt(s + 1)); )
            s += 1;
          n.charCodeAt(s + 1) === Xt && (s += 1);
        }
        p = ["word", n.slice(g, s + 1), g, s], g = s;
        break;
      }
      default: {
        o === pl && n.charCodeAt(g + 1) === yw ? (s = n.indexOf("*/", g + 2) + 1, s === 0 && (i || A ? s = n.length : w("comment")), p = ["comment", n.slice(g, s + 1), g, s], g = s) : (ln.lastIndex = g + 1, ln.test(n), ln.lastIndex === 0 ? s = n.length - 1 : s = ln.lastIndex - 2, p = ["word", n.slice(g, s + 1), g, s], v.push(p), g = s);
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
let Xc = pt, Wn = class extends Xc {
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
var Rs = Wn;
Wn.default = Wn;
Xc.registerAtRule(Wn);
let Jc = pt, Kc, qc, Tt = class extends Jc {
  constructor(e) {
    super(e), this.type = "root", this.nodes || (this.nodes = []);
  }
  normalize(e, t, n) {
    let i = super.normalize(e);
    if (t) {
      if (n === "prepend")
        this.nodes.length > 1 ? t.raws.before = this.nodes[1].raws.before : delete t.raws.before;
      else if (this.first !== t)
        for (let o of i)
          o.raws.before = t.raws.before;
    }
    return i;
  }
  removeChild(e, t) {
    let n = this.index(e);
    return !t && n === 0 && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[n].raws.before), super.removeChild(e);
  }
  toResult(e = {}) {
    return new Kc(new qc(), this, e).stringify();
  }
};
Tt.registerLazyResult = (r) => {
  Kc = r;
};
Tt.registerProcessor = (r) => {
  qc = r;
};
var Lr = Tt;
Tt.default = Tt;
Jc.registerRoot(Tt);
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
    let n = [], i = "", o = !1, s = 0, a = !1, l = "", u = !1;
    for (let c of r)
      u ? u = !1 : c === "\\" ? u = !0 : a ? c === l && (a = !1) : c === '"' || c === "'" ? (a = !0, l = c) : c === "(" ? s += 1 : c === ")" ? s > 0 && (s -= 1) : s === 0 && e.includes(c) && (o = !0), o ? (i !== "" && n.push(i.trim()), i = "", o = !1) : i += c;
    return (t || i !== "") && n.push(i.trim()), n;
  }
};
var Qc = wr;
wr.default = wr;
let ef = pt, _w = Qc, Zn = class extends ef {
  constructor(e) {
    super(e), this.type = "rule", this.nodes || (this.nodes = []);
  }
  get selectors() {
    return _w.comma(this.selector);
  }
  set selectors(e) {
    let t = this.selector ? this.selector.match(/,\s*/) : null, n = t ? t[0] : "," + this.raw("between", "beforeOpen");
    this.selector = e.join(n);
  }
};
var ks = Zn;
Zn.default = Zn;
ef.registerRule(Zn);
let xw = oi, Cw = Sw, Iw = ai, Aw = Rs, Ew = Lr, gl = ks;
const yl = {
  empty: !0,
  space: !0
};
function Rw(r) {
  for (let e = r.length - 1; e >= 0; e--) {
    let t = r[e], n = t[3] || t[2];
    if (n) return n;
  }
}
let kw = class {
  constructor(e) {
    this.input = e, this.root = new Ew(), this.current = this.root, this.spaces = "", this.semicolon = !1, this.createTokenizer(), this.root.source = { input: e, start: { column: 1, line: 1, offset: 0 } };
  }
  atrule(e) {
    let t = new Aw();
    t.name = e[1].slice(1), t.name === "" && this.unnamedAtrule(t, e), this.init(t, e[2]);
    let n, i, o, s = !1, a = !1, l = [], u = [];
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
            for (o = l.length - 1, i = l[o]; i && i[0] === "space"; )
              i = l[--o];
            i && (t.source.end = this.getPosition(i[3] || i[2]), t.source.end.offset++);
          }
          this.end(e);
          break;
        } else
          l.push(e);
      else
        l.push(e);
      if (this.tokenizer.endOfFile()) {
        s = !0;
        break;
      }
    }
    t.raws.between = this.spacesAndCommentsFromEnd(l), l.length ? (t.raws.afterName = this.spacesAndCommentsFromStart(l), this.raw(t, "params", l), s && (e = l[l.length - 1], t.source.end = this.getPosition(e[3] || e[2]), t.source.end.offset++, this.spaces = t.raws.between, t.raws.between = "")) : (t.raws.afterName = "", t.params = ""), a && (t.nodes = [], this.current = t);
  }
  checkMissedSemicolon(e) {
    let t = this.colon(e);
    if (t === !1) return;
    let n = 0, i;
    for (let o = t - 1; o >= 0 && (i = e[o], !(i[0] !== "space" && (n += 1, n === 2))); o--)
      ;
    throw this.input.error(
      "Missed semicolon",
      i[0] === "word" ? i[3] + 1 : i[2]
    );
  }
  colon(e) {
    let t = 0, n, i, o;
    for (let [s, a] of e.entries()) {
      if (n = a, i = n[0], i === "(" && (t += 1), i === ")" && (t -= 1), t === 0 && i === ":")
        if (!o)
          this.doubleColon(n);
        else {
          if (o[0] === "word" && o[1] === "progid")
            continue;
          return s;
        }
      o = n;
    }
    return !1;
  }
  comment(e) {
    let t = new Iw();
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
    this.tokenizer = Cw(this.input);
  }
  decl(e, t) {
    let n = new xw();
    this.init(n, e[0][2]);
    let i = e[e.length - 1];
    for (i[0] === ";" && (this.semicolon = !0, e.pop()), n.source.end = this.getPosition(
      i[3] || i[2] || Rw(e)
    ), n.source.end.offset++; e[0][0] !== "word"; )
      e.length === 1 && this.unknownWord(e), n.raws.before += e.shift()[1];
    for (n.source.start = this.getPosition(e[0][2]), n.prop = ""; e.length; ) {
      let u = e[0][0];
      if (u === ":" || u === "space" || u === "comment")
        break;
      n.prop += e.shift()[1];
    }
    n.raws.between = "";
    let o;
    for (; e.length; )
      if (o = e.shift(), o[0] === ":") {
        n.raws.between += o[1];
        break;
      } else
        o[0] === "word" && /\w/.test(o[1]) && this.unknownWord([o]), n.raws.between += o[1];
    (n.prop[0] === "_" || n.prop[0] === "*") && (n.raws.before += n.prop[0], n.prop = n.prop.slice(1));
    let s = [], a;
    for (; e.length && (a = e[0][0], !(a !== "space" && a !== "comment")); )
      s.push(e.shift());
    this.precheckMissedSemicolon(e);
    for (let u = e.length - 1; u >= 0; u--) {
      if (o = e[u], o[1].toLowerCase() === "!important") {
        n.important = !0;
        let c = this.stringFrom(e, u);
        c = this.spacesFromEnd(e) + c, c !== " !important" && (n.raws.important = c);
        break;
      } else if (o[1].toLowerCase() === "important") {
        let c = e.slice(0), f = "";
        for (let d = u; d > 0; d--) {
          let h = c[d][0];
          if (f.trim().indexOf("!") === 0 && h !== "space")
            break;
          f = c.pop()[1] + f;
        }
        f.trim().indexOf("!") === 0 && (n.important = !0, n.raws.important = f, e = c);
      }
      if (o[0] !== "space" && o[0] !== "comment")
        break;
    }
    e.some((u) => u[0] !== "space" && u[0] !== "comment") && (n.raws.between += s.map((u) => u[1]).join(""), s = []), this.raw(n, "value", s.concat(e), t), n.value.includes(":") && !t && this.checkMissedSemicolon(e);
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
    let t = !1, n = null, i = !1, o = null, s = [], a = e[1].startsWith("--"), l = [], u = e;
    for (; u; ) {
      if (n = u[0], l.push(u), n === "(" || n === "[")
        o || (o = u), s.push(n === "(" ? ")" : "]");
      else if (a && i && n === "{")
        o || (o = u), s.push("}");
      else if (s.length === 0)
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
      else n === s[s.length - 1] && (s.pop(), s.length === 0 && (o = null));
      u = this.tokenizer.nextToken();
    }
    if (this.tokenizer.endOfFile() && (t = !0), s.length > 0 && this.unclosedBracket(o), t && i) {
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
    let o, s, a = n.length, l = "", u = !0, c, f;
    for (let d = 0; d < a; d += 1)
      o = n[d], s = o[0], s === "space" && d === a - 1 && !i ? u = !1 : s === "comment" ? (f = n[d - 1] ? n[d - 1][0] : "empty", c = n[d + 1] ? n[d + 1][0] : "empty", !yl[f] && !yl[c] ? l.slice(-1) === "," ? u = !1 : l += o[1] : u = !1) : l += o[1];
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
var Ow = kw;
let Mw = pt, $w = Ow, Nw = si;
function jn(r, e) {
  let t = new Nw(r, e), n = new $w(t);
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
var Os = jn;
jn.default = jn;
Mw.registerParse(jn);
let { isClean: Me, my: Pw } = Pr, Lw = Lc, Tw = ni, Dw = pt, Fw = As, zw = Hc, wl = Es, Uw = Os, Bw = Lr;
const Ww = {
  atrule: "AtRule",
  comment: "Comment",
  decl: "Declaration",
  document: "Document",
  root: "Root",
  rule: "Rule"
}, Zw = {
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
}, jw = {
  Once: !0,
  postcssPlugin: !0,
  prepare: !0
}, Dt = 0;
function Jt(r) {
  return typeof r == "object" && typeof r.then == "function";
}
function tf(r) {
  let e = !1, t = Ww[r.type];
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
  return r.type === "document" ? e = ["Document", Dt, "DocumentExit"] : r.type === "root" ? e = ["Root", Dt, "RootExit"] : e = tf(r), {
    eventIndex: 0,
    events: e,
    iterator: 0,
    node: r,
    visitorIndex: 0,
    visitors: []
  };
}
function Fo(r) {
  return r[Me] = !1, r.nodes && r.nodes.forEach((e) => Fo(e)), r;
}
let zo = {}, Ft = class rf {
  constructor(e, t, n) {
    this.stringified = !1, this.processed = !1;
    let i;
    if (typeof t == "object" && t !== null && (t.type === "root" || t.type === "document"))
      i = Fo(t);
    else if (t instanceof rf || t instanceof wl)
      i = Fo(t.root), t.map && (typeof n.map > "u" && (n.map = {}), n.map.inline || (n.map.inline = !1), n.map.prev = t.map);
    else {
      let o = Uw;
      n.syntax && (o = n.syntax.parse), n.parser && (o = n.parser), o.parse && (o = o.parse);
      try {
        i = o(t, n);
      } catch (s) {
        this.processed = !0, this.error = s;
      }
      i && !i[Pw] && Dw.rebuild(i);
    }
    this.result = new wl(e, i, n), this.helpers = { ...zo, postcss: zo, result: this.result }, this.plugins = this.processor.plugins.map((o) => typeof o == "object" && o.prepare ? { ...o, ...o.prepare(this.result) } : o);
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
        let i = n.postcssPlugin, o = n.postcssVersion, s = this.result.processor.version, a = o.split("."), l = s.split(".");
        (a[0] !== l[0] || parseInt(a[1]) > parseInt(l[1])) && console.error(
          "Unknown error from PostCSS plugin. Your current PostCSS version is " + s + ", but " + i + " uses " + o + ". Perhaps this is the source of the error below."
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
          if (!Zw[n] && /^[A-Z]/.test(n))
            throw new Error(
              `Unknown event ${n} in ${t.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`
            );
          if (!jw[n])
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
              let o = t[t.length - 1].node;
              throw this.handleError(i, o);
            }
        }
      }
      if (this.listeners.OnceExit)
        for (let [t, n] of this.listeners.OnceExit) {
          this.result.lastPlugin = t;
          try {
            if (e.type === "document") {
              let i = e.nodes.map(
                (o) => n(o, this.helpers)
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
    let e = this.result.opts, t = Tw;
    e.syntax && (t = e.syntax.stringify), e.stringifier && (t = e.stringifier), t.stringify && (t = t.stringify);
    let i = new Lw(t, this.result.root, this.result.opts).generate();
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
    return process.env.NODE_ENV !== "production" && ("from" in this.opts || zw(
      "Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning."
    )), this.async().then(e, t);
  }
  toString() {
    return this.css;
  }
  visitSync(e, t) {
    for (let [n, i] of e) {
      this.result.lastPlugin = n;
      let o;
      try {
        o = i(t, this.helpers);
      } catch (s) {
        throw this.handleError(s, t.proxyOf);
      }
      if (t.type !== "root" && t.type !== "document" && !t.parent)
        return !0;
      if (Jt(o))
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
      let [s, a] = i[t.visitorIndex];
      t.visitorIndex += 1, t.visitorIndex === i.length && (t.visitors = [], t.visitorIndex = 0), this.result.lastPlugin = s;
      try {
        return a(n.toProxy(), this.helpers);
      } catch (l) {
        throw this.handleError(l, n);
      }
    }
    if (t.iterator !== 0) {
      let s = t.iterator, a;
      for (; a = n.nodes[n.indexes[s]]; )
        if (n.indexes[s] += 1, !a[Me]) {
          a[Me] = !0, e.push(vl(a));
          return;
        }
      t.iterator = 0, delete n.indexes[s];
    }
    let o = t.events;
    for (; t.eventIndex < o.length; ) {
      let s = o[t.eventIndex];
      if (t.eventIndex += 1, s === Dt) {
        n.nodes && n.nodes.length && (n[Me] = !0, t.iterator = n.getIterator());
        return;
      } else if (this.listeners[s]) {
        t.visitors = this.listeners[s];
        return;
      }
    }
    e.pop();
  }
  walkSync(e) {
    e[Me] = !0;
    let t = tf(e);
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
  zo = r;
};
var nf = Ft;
Ft.default = Ft;
Bw.registerLazyResult(Ft);
Fw.registerLazyResult(Ft);
let Gw = Lc, Vw = ni, Hw = Hc, Yw = Os;
const Xw = Es;
let Uo = class {
  constructor(e, t, n) {
    t = t.toString(), this.stringified = !1, this._processor = e, this._css = t, this._opts = n, this._map = void 0;
    let i, o = Vw;
    this.result = new Xw(this._processor, i, this._opts), this.result.css = t;
    let s = this;
    Object.defineProperty(this.result, "root", {
      get() {
        return s.root;
      }
    });
    let a = new Gw(o, i, this._opts, t);
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
    return process.env.NODE_ENV !== "production" && ("from" in this._opts || Hw(
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
    let e, t = Yw;
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
var Jw = Uo;
Uo.default = Uo;
let Kw = Jw, qw = nf, Qw = As, ev = Lr, vr = class {
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
    return !this.plugins.length && !t.parser && !t.stringifier && !t.syntax ? new Kw(this, e, t) : new qw(this, e, t);
  }
  use(e) {
    return this.plugins = this.plugins.concat(this.normalize([e])), this;
  }
};
var tv = vr;
vr.default = vr;
ev.registerProcessor(vr);
Qw.registerProcessor(vr);
let rv = oi, nv = Oc, iv = ai, ov = Rs, sv = si, av = Lr, lv = ks;
function br(r, e) {
  if (Array.isArray(r)) return r.map((i) => br(i));
  let { inputs: t, ...n } = r;
  if (t) {
    e = [];
    for (let i of t) {
      let o = { ...i, __proto__: sv.prototype };
      o.map && (o.map = {
        ...o.map,
        __proto__: nv.prototype
      }), e.push(o);
    }
  }
  if (n.nodes && (n.nodes = r.nodes.map((i) => br(i, e))), n.source) {
    let { inputId: i, ...o } = n.source;
    n.source = o, i != null && (n.source.input = e[i]);
  }
  if (n.type === "root")
    return new av(n);
  if (n.type === "decl")
    return new rv(n);
  if (n.type === "rule")
    return new lv(n);
  if (n.type === "comment")
    return new iv(n);
  if (n.type === "atrule")
    return new ov(n);
  throw new Error("Unknown node type: " + r.type);
}
var uv = br;
br.default = br;
let cv = xs, of = oi, fv = nf, hv = pt, Ms = tv, dv = ni, pv = uv, sf = As, mv = Yc, af = ai, lf = Rs, gv = Es, yv = si, wv = Os, vv = Qc, uf = ks, cf = Lr, bv = ii;
function z(...r) {
  return r.length === 1 && Array.isArray(r[0]) && (r = r[0]), new Ms(r);
}
z.plugin = function(e, t) {
  let n = !1;
  function i(...s) {
    console && console.warn && !n && (n = !0, console.warn(
      e + `: postcss.plugin was deprecated. Migration guide:
https://evilmartians.com/chronicles/postcss-8-plugin-migration`
    ), process.env.LANG && process.env.LANG.startsWith("cn") && console.warn(
      e + `: 里面 postcss.plugin 被弃用. 迁移指南:
https://www.w3ctech.com/topic/2226`
    ));
    let a = t(...s);
    return a.postcssPlugin = e, a.postcssVersion = new Ms().version, a;
  }
  let o;
  return Object.defineProperty(i, "postcss", {
    get() {
      return o || (o = i()), o;
    }
  }), i.process = function(s, a, l) {
    return z([i(l)]).process(s, a);
  }, i;
};
z.stringify = dv;
z.parse = wv;
z.fromJSON = pv;
z.list = vv;
z.comment = (r) => new af(r);
z.atRule = (r) => new lf(r);
z.decl = (r) => new of(r);
z.rule = (r) => new uf(r);
z.root = (r) => new cf(r);
z.document = (r) => new sf(r);
z.CssSyntaxError = cv;
z.Declaration = of;
z.Container = hv;
z.Processor = Ms;
z.Document = sf;
z.Comment = af;
z.Warning = mv;
z.AtRule = lf;
z.Result = gv;
z.Input = yv;
z.Rule = uf;
z.Root = cf;
z.Node = bv;
fv.registerPostcss(z);
var Sv = z;
z.default = z;
const H = /* @__PURE__ */ M0(Sv);
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
var _v = Object.defineProperty, xv = (r, e, t) => e in r ? _v(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, ye = (r, e, t) => xv(r, typeof e != "symbol" ? e + "" : e, t);
function Cv(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
function Iv(r) {
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
var $s = { exports: {} }, j = String, ff = function() {
  return { isColorSupported: !1, reset: j, bold: j, dim: j, italic: j, underline: j, inverse: j, hidden: j, strikethrough: j, black: j, red: j, green: j, yellow: j, blue: j, magenta: j, cyan: j, white: j, gray: j, bgBlack: j, bgRed: j, bgGreen: j, bgYellow: j, bgBlue: j, bgMagenta: j, bgCyan: j, bgWhite: j };
};
$s.exports = ff();
$s.exports.createColors = ff;
var Av = $s.exports;
const Ev = {}, Rv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ev
}, Symbol.toStringTag, { value: "Module" })), Ae = /* @__PURE__ */ Iv(Rv);
let bl = Av, Sl = Ae, Bo = class hf extends Error {
  constructor(e, t, n, i, o, s) {
    super(e), this.name = "CssSyntaxError", this.reason = e, o && (this.file = o), i && (this.source = i), s && (this.plugin = s), typeof t < "u" && typeof n < "u" && (typeof t == "number" ? (this.line = t, this.column = n) : (this.line = t.line, this.column = t.column, this.endLine = n.line, this.endColumn = n.column)), this.setMessage(), Error.captureStackTrace && Error.captureStackTrace(this, hf);
  }
  setMessage() {
    this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", typeof this.line < "u" && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason;
  }
  showSourceCode(e) {
    if (!this.source) return "";
    let t = this.source;
    e == null && (e = bl.isColorSupported), Sl && e && (t = Sl(t));
    let n = t.split(/\r?\n/), i = Math.max(this.line - 3, 0), o = Math.min(this.line + 2, n.length), s = String(o).length, a, l;
    if (e) {
      let { bold: u, gray: c, red: f } = bl.createColors(!0);
      a = (d) => u(f(d)), l = (d) => c(d);
    } else
      a = l = (u) => u;
    return n.slice(i, o).map((u, c) => {
      let f = i + 1 + c, d = " " + (" " + f).slice(-s) + " | ";
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
var Ns = Bo;
Bo.default = Bo;
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
function kv(r) {
  return r[0].toUpperCase() + r.slice(1);
}
let Wo = class {
  constructor(e) {
    this.builder = e;
  }
  atrule(e, t) {
    let n = "@" + e.name, i = e.params ? this.rawValue(e, "params") : "";
    if (typeof e.raws.afterName < "u" ? n += e.raws.afterName : i && (n += " "), e.nodes)
      this.block(e, n + i);
    else {
      let o = (e.raws.between || "") + (t ? ";" : "");
      this.builder(n + i + o, e);
    }
  }
  beforeAfter(e, t) {
    let n;
    e.type === "decl" ? n = this.raw(e, null, "beforeDecl") : e.type === "comment" ? n = this.raw(e, null, "beforeComment") : t === "before" ? n = this.raw(e, null, "beforeRule") : n = this.raw(e, null, "beforeClose");
    let i = e.parent, o = 0;
    for (; i && i.type !== "root"; )
      o += 1, i = i.parent;
    if (n.includes(`
`)) {
      let s = this.raw(e, null, "indent");
      if (s.length)
        for (let a = 0; a < o; a++) n += s;
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
      let o = e.nodes[i], s = this.raw(o, "before");
      s && this.builder(s), this.stringify(o, t !== i || n);
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
    let o = e.parent;
    if (n === "before" && (!o || o.type === "root" && o.first === e || o && o.type === "document"))
      return "";
    if (!o) return _l[n];
    let s = e.root();
    if (s.rawCache || (s.rawCache = {}), typeof s.rawCache[n] < "u")
      return s.rawCache[n];
    if (n === "before" || n === "after")
      return this.beforeAfter(e, n);
    {
      let a = "raw" + kv(n);
      this[a] ? i = this[a](s, e) : s.walk((l) => {
        if (i = l.raws[t], typeof i < "u") return !1;
      });
    }
    return typeof i > "u" && (i = _l[n]), s.rawCache[n] = i, i;
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
        let o = n.raws.before.split(`
`);
        return t = o[o.length - 1], t = t.replace(/\S/g, ""), !1;
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
var df = Wo;
Wo.default = Wo;
let Ov = df;
function Zo(r, e) {
  new Ov(e).stringify(r);
}
var li = Zo;
Zo.default = Zo;
let { isClean: un, my: Mv } = Tr, $v = Ns, Nv = df, Pv = li;
function jo(r, e) {
  let t = new r.constructor();
  for (let n in r) {
    if (!Object.prototype.hasOwnProperty.call(r, n) || n === "proxyCache") continue;
    let i = r[n], o = typeof i;
    n === "parent" && o === "object" ? e && (t[n] = e) : n === "source" ? t[n] = i : Array.isArray(i) ? t[n] = i.map((s) => jo(s, t)) : (o === "object" && i !== null && (i = jo(i)), t[n] = i);
  }
  return t;
}
let Go = class {
  constructor(e = {}) {
    this.raws = {}, this[un] = !1, this[Mv] = !0;
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
    let t = jo(this);
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
    return new $v(e);
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
    let n = t || this.toString(), i = this.source.start.column, o = this.source.start.line;
    for (let s = 0; s < e; s++)
      n[s] === `
` ? (i = 1, o += 1) : i += 1;
    return { column: i, line: o };
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
      let i = this.toString(), o = i.indexOf(e.word);
      o !== -1 && (t = this.positionInside(o, i), n = this.positionInside(o + e.word.length, i));
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
    return new Nv().raw(this, e, t);
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
    let o = 0;
    for (let s in this) {
      if (!Object.prototype.hasOwnProperty.call(this, s) || s === "parent" || s === "proxyCache") continue;
      let a = this[s];
      if (Array.isArray(a))
        n[s] = a.map((l) => typeof l == "object" && l.toJSON ? l.toJSON(null, t) : l);
      else if (typeof a == "object" && a.toJSON)
        n[s] = a.toJSON(null, t);
      else if (s === "source") {
        let l = t.get(a.input);
        l == null && (l = o, t.set(a.input, o), o++), n[s] = {
          end: a.end,
          inputId: l,
          start: a.start
        };
      } else
        n[s] = a;
    }
    return i && (n.inputs = [...t.keys()].map((s) => s.toJSON())), n;
  }
  toProxy() {
    return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache;
  }
  toString(e = Pv) {
    e.stringify && (e = e.stringify);
    let t = "";
    return e(this, (n) => {
      t += n;
    }), t;
  }
  warn(e, t, n) {
    let i = { node: this };
    for (let o in n) i[o] = n[o];
    return e.warn(t, i);
  }
  get proxyOf() {
    return this;
  }
};
var ui = Go;
Go.default = Go;
let Lv = ui, Vo = class extends Lv {
  constructor(e) {
    e && typeof e.value < "u" && typeof e.value != "string" && (e = { ...e, value: String(e.value) }), super(e), this.type = "decl";
  }
  get variable() {
    return this.prop.startsWith("--") || this.prop[0] === "$";
  }
};
var ci = Vo;
Vo.default = Vo;
let Tv = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", Dv = (r, e = 21) => (t = e) => {
  let n = "", i = t;
  for (; i--; )
    n += r[Math.random() * r.length | 0];
  return n;
}, Fv = (r = 21) => {
  let e = "", t = r;
  for (; t--; )
    e += Tv[Math.random() * 64 | 0];
  return e;
};
var zv = { nanoid: Fv, customAlphabet: Dv };
let { SourceMapConsumer: xl, SourceMapGenerator: Cl } = Ae, { existsSync: Uv, readFileSync: Bv } = Ae, { dirname: Vi, join: Wv } = Ae;
function Zv(r) {
  return Buffer ? Buffer.from(r, "base64").toString() : window.atob(r);
}
let Ho = class {
  constructor(e, t) {
    if (t.map === !1) return;
    this.loadAnnotation(e), this.inline = this.startWith(this.annotation, "data:");
    let n = t.map ? t.map.prev : void 0, i = this.loadMap(t.from, n);
    !this.mapFile && t.from && (this.mapFile = t.from), this.mapFile && (this.root = Vi(this.mapFile)), i && (this.text = i);
  }
  consumer() {
    return this.consumerCache || (this.consumerCache = new xl(this.text)), this.consumerCache;
  }
  decodeInline(e) {
    let t = /^data:application\/json;charset=utf-?8;base64,/, n = /^data:application\/json;base64,/, i = /^data:application\/json;charset=utf-?8,/, o = /^data:application\/json,/;
    if (i.test(e) || o.test(e))
      return decodeURIComponent(e.substr(RegExp.lastMatch.length));
    if (t.test(e) || n.test(e))
      return Zv(e.substr(RegExp.lastMatch.length));
    let s = e.match(/data:application\/json;([^,]+),/)[1];
    throw new Error("Unsupported source map encoding " + s);
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
    if (this.root = Vi(e), Uv(e))
      return this.mapFile = e, Bv(e, "utf-8").toString().trim();
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
        return e && (n = Wv(Vi(e), n)), this.loadFile(n);
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
var pf = Ho;
Ho.default = Ho;
let { SourceMapConsumer: jv, SourceMapGenerator: Gv } = Ae, { fileURLToPath: Il, pathToFileURL: cn } = Ae, { isAbsolute: Yo, resolve: Xo } = Ae, { nanoid: Vv } = zv, Hi = Ae, Al = Ns, Hv = pf, Yi = Symbol("fromOffsetCache"), Yv = !!(jv && Gv), El = !!(Xo && Yo), Gn = class {
  constructor(e, t = {}) {
    if (e === null || typeof e > "u" || typeof e == "object" && !e.toString)
      throw new Error(`PostCSS received ${e} instead of CSS string`);
    if (this.css = e.toString(), this.css[0] === "\uFEFF" || this.css[0] === "￾" ? (this.hasBOM = !0, this.css = this.css.slice(1)) : this.hasBOM = !1, t.from && (!El || /^\w+:\/\//.test(t.from) || Yo(t.from) ? this.file = t.from : this.file = Xo(t.from)), El && Yv) {
      let n = new Hv(this.css, t);
      if (n.text) {
        this.map = n;
        let i = n.consumer().file;
        !this.file && i && (this.file = this.mapResolve(i));
      }
    }
    this.file || (this.id = "<input css " + Vv(6) + ">"), this.map && (this.map.file = this.from);
  }
  error(e, t, n, i = {}) {
    let o, s, a;
    if (t && typeof t == "object") {
      let u = t, c = n;
      if (typeof u.offset == "number") {
        let f = this.fromOffset(u.offset);
        t = f.line, n = f.col;
      } else
        t = u.line, n = u.column;
      if (typeof c.offset == "number") {
        let f = this.fromOffset(c.offset);
        s = f.line, a = f.col;
      } else
        s = c.line, a = c.column;
    } else if (!n) {
      let u = this.fromOffset(t);
      t = u.line, n = u.col;
    }
    let l = this.origin(t, n, s, a);
    return l ? o = new Al(
      e,
      l.endLine === void 0 ? l.line : { column: l.column, line: l.line },
      l.endLine === void 0 ? l.column : { column: l.endColumn, line: l.endLine },
      l.source,
      l.file,
      i.plugin
    ) : o = new Al(
      e,
      s === void 0 ? t : { column: n, line: t },
      s === void 0 ? n : { column: a, line: s },
      this.css,
      this.file,
      i.plugin
    ), o.input = { column: n, endColumn: a, endLine: s, line: t, source: this.css }, this.file && (cn && (o.input.url = cn(this.file).toString()), o.input.file = this.file), o;
  }
  fromOffset(e) {
    let t, n;
    if (this[Yi])
      n = this[Yi];
    else {
      let o = this.css.split(`
`);
      n = new Array(o.length);
      let s = 0;
      for (let a = 0, l = o.length; a < l; a++)
        n[a] = s, s += o[a].length + 1;
      this[Yi] = n;
    }
    t = n[n.length - 1];
    let i = 0;
    if (e >= t)
      i = n.length - 1;
    else {
      let o = n.length - 2, s;
      for (; i < o; )
        if (s = i + (o - i >> 1), e < n[s])
          o = s - 1;
        else if (e >= n[s + 1])
          i = s + 1;
        else {
          i = s;
          break;
        }
    }
    return {
      col: e - n[i] + 1,
      line: i + 1
    };
  }
  mapResolve(e) {
    return /^\w+:\/\//.test(e) ? e : Xo(this.map.consumer().sourceRoot || this.map.root || ".", e);
  }
  origin(e, t, n, i) {
    if (!this.map) return !1;
    let o = this.map.consumer(), s = o.originalPositionFor({ column: t, line: e });
    if (!s.source) return !1;
    let a;
    typeof n == "number" && (a = o.originalPositionFor({ column: i, line: n }));
    let l;
    Yo(s.source) ? l = cn(s.source) : l = new URL(
      s.source,
      this.map.consumer().sourceRoot || cn(this.map.mapFile)
    );
    let u = {
      column: s.column,
      endColumn: a && a.column,
      endLine: a && a.line,
      line: s.line,
      url: l.toString()
    };
    if (l.protocol === "file:")
      if (Il)
        u.file = Il(l);
      else
        throw new Error("file: protocol is not available in this PostCSS build");
    let c = o.sourceContentFor(s.source);
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
var fi = Gn;
Gn.default = Gn;
Hi && Hi.registerInput && Hi.registerInput(Gn);
let { SourceMapConsumer: mf, SourceMapGenerator: Rn } = Ae, { dirname: kn, relative: gf, resolve: yf, sep: wf } = Ae, { pathToFileURL: Rl } = Ae, Xv = fi, Jv = !!(mf && Rn), Kv = !!(kn && yf && gf && wf), qv = class {
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
      let t = this.toUrl(this.path(e.file)), n = e.root || kn(e.file), i;
      this.mapOpts.sourcesContent === !1 ? (i = new mf(e.text), i.sourcesContent && (i.sourcesContent = null)) : i = e.consumer(), this.map.applySourceMap(i, t, this.toUrl(this.path(n)));
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
    if (this.clearAnnotation(), Kv && Jv && this.isMap())
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
      e.file = this.outputFile(), this.map = Rn.fromSourceMap(e, {
        ignoreInvalidMapping: !0
      });
    } else
      this.map = new Rn({
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
    this.css = "", this.map = new Rn({
      file: this.outputFile(),
      ignoreInvalidMapping: !0
    });
    let e = 1, t = 1, n = "<no source>", i = {
      generated: { column: 0, line: 0 },
      original: { column: 0, line: 0 },
      source: ""
    }, o, s;
    this.stringify(this.root, (a, l, u) => {
      if (this.css += a, l && u !== "end" && (i.generated.line = e, i.generated.column = t - 1, l.source && l.source.start ? (i.source = this.sourcePath(l), i.original.line = l.source.start.line, i.original.column = l.source.start.column - 1, this.map.addMapping(i)) : (i.source = n, i.original.line = 1, i.original.column = 0, this.map.addMapping(i))), o = a.match(/\n/g), o ? (e += o.length, s = a.lastIndexOf(`
`), t = a.length - s) : t += a.length, l && u !== "start") {
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
    let n = this.opts.to ? kn(this.opts.to) : ".";
    typeof this.mapOpts.annotation == "string" && (n = kn(yf(n, this.mapOpts.annotation)));
    let i = gf(n, e);
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
        let e = new Xv(this.originalCSS, this.opts);
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
    wf === "\\" && (e = e.replace(/\\/g, "/"));
    let n = encodeURI(e).replace(/[#?]/g, encodeURIComponent);
    return this.memoizedURLs.set(e, n), n;
  }
};
var vf = qv;
let Qv = ui, Jo = class extends Qv {
  constructor(e) {
    super(e), this.type = "comment";
  }
};
var hi = Jo;
Jo.default = Jo;
let { isClean: bf, my: Sf } = Tr, _f = ci, xf = hi, eb = ui, Cf, Ps, Ls, If;
function Af(r) {
  return r.map((e) => (e.nodes && (e.nodes = Af(e.nodes)), delete e.source, e));
}
function Ef(r) {
  if (r[bf] = !1, r.proxyOf.nodes)
    for (let e of r.proxyOf.nodes)
      Ef(e);
}
let je = class Rf extends eb {
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
          ...n.map((i) => typeof i == "function" ? (o, s) => i(o.toProxy(), s) : i)
        ) : t === "every" || t === "some" ? (n) => e[t](
          (i, ...o) => n(i.toProxy(), ...o)
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
    for (let s of i) this.proxyOf.nodes.splice(n + 1, 0, s);
    let o;
    for (let s in this.indexes)
      o = this.indexes[s], n < o && (this.indexes[s] = o + i.length);
    return this.markDirty(), this;
  }
  insertBefore(e, t) {
    let n = this.index(e), i = n === 0 ? "prepend" : !1, o = this.normalize(t, this.proxyOf.nodes[n], i).reverse();
    n = this.index(e);
    for (let a of o) this.proxyOf.nodes.splice(n, 0, a);
    let s;
    for (let a in this.indexes)
      s = this.indexes[a], n <= s && (this.indexes[a] = s + o.length);
    return this.markDirty(), this;
  }
  normalize(e, t) {
    if (typeof e == "string")
      e = Af(Cf(e).nodes);
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
      typeof e.value != "string" && (e.value = String(e.value)), e = [new _f(e)];
    } else if (e.selector)
      e = [new Ps(e)];
    else if (e.name)
      e = [new Ls(e)];
    else if (e.text)
      e = [new xf(e)];
    else
      throw new Error("Unknown node type in node creation");
    return e.map((i) => (i[Sf] || Rf.rebuild(i), i = i.proxyOf, i.parent && i.parent.removeChild(i), i[bf] && Ef(i), typeof i.raws.before > "u" && t && typeof t.raws.before < "u" && (i.raws.before = t.raws.before.replace(/\S/g, "")), i.parent = this.proxyOf, i));
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
      } catch (o) {
        throw t.addToError(o);
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
  Cf = r;
};
je.registerRule = (r) => {
  Ps = r;
};
je.registerAtRule = (r) => {
  Ls = r;
};
je.registerRoot = (r) => {
  If = r;
};
var mt = je;
je.default = je;
je.rebuild = (r) => {
  r.type === "atrule" ? Object.setPrototypeOf(r, Ls.prototype) : r.type === "rule" ? Object.setPrototypeOf(r, Ps.prototype) : r.type === "decl" ? Object.setPrototypeOf(r, _f.prototype) : r.type === "comment" ? Object.setPrototypeOf(r, xf.prototype) : r.type === "root" && Object.setPrototypeOf(r, If.prototype), r[Sf] = !0, r.nodes && r.nodes.forEach((e) => {
    je.rebuild(e);
  });
};
let tb = mt, kf, Of, Sr = class extends tb {
  constructor(e) {
    super({ type: "document", ...e }), this.nodes || (this.nodes = []);
  }
  toResult(e = {}) {
    return new kf(new Of(), this, e).stringify();
  }
};
Sr.registerLazyResult = (r) => {
  kf = r;
};
Sr.registerProcessor = (r) => {
  Of = r;
};
var Ts = Sr;
Sr.default = Sr;
let kl = {};
var Mf = function(e) {
  kl[e] || (kl[e] = !0, typeof console < "u" && console.warn && console.warn(e));
};
let Ko = class {
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
var $f = Ko;
Ko.default = Ko;
let rb = $f, qo = class {
  constructor(e, t, n) {
    this.processor = e, this.messages = [], this.root = t, this.opts = n, this.css = void 0, this.map = void 0;
  }
  toString() {
    return this.css;
  }
  warn(e, t = {}) {
    t.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (t.plugin = this.lastPlugin.postcssPlugin);
    let n = new rb(e, t);
    return this.messages.push(n), n;
  }
  warnings() {
    return this.messages.filter((e) => e.type === "warning");
  }
  get content() {
    return this.css;
  }
};
var Ds = qo;
qo.default = qo;
const Xi = 39, Ol = 34, fn = 92, Ml = 47, hn = 10, Kt = 32, dn = 12, pn = 9, mn = 13, nb = 91, ib = 93, ob = 40, sb = 41, ab = 123, lb = 125, ub = 59, cb = 42, fb = 58, hb = 64, gn = /[\t\n\f\r "#'()/;[\\\]{}]/g, yn = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g, db = /.[\r\n"'(/\\]/, $l = /[\da-f]/i;
var pb = function(e, t = {}) {
  let n = e.css.valueOf(), i = t.ignoreErrors, o, s, a, l, u, c, f, d, h, p, m = n.length, g = 0, v = [], b = [];
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
    switch (o = n.charCodeAt(g), o) {
      case hn:
      case Kt:
      case pn:
      case mn:
      case dn: {
        s = g;
        do
          s += 1, o = n.charCodeAt(s);
        while (o === Kt || o === hn || o === pn || o === mn || o === dn);
        p = ["space", n.slice(g, s)], g = s - 1;
        break;
      }
      case nb:
      case ib:
      case ab:
      case lb:
      case fb:
      case ub:
      case sb: {
        let I = String.fromCharCode(o);
        p = [I, I, g];
        break;
      }
      case ob: {
        if (d = v.length ? v.pop()[1] : "", h = n.charCodeAt(g + 1), d === "url" && h !== Xi && h !== Ol && h !== Kt && h !== hn && h !== pn && h !== dn && h !== mn) {
          s = g;
          do {
            if (c = !1, s = n.indexOf(")", s + 1), s === -1)
              if (i || A) {
                s = g;
                break;
              } else
                w("bracket");
            for (f = s; n.charCodeAt(f - 1) === fn; )
              f -= 1, c = !c;
          } while (c);
          p = ["brackets", n.slice(g, s + 1), g, s], g = s;
        } else
          s = n.indexOf(")", g + 1), l = n.slice(g, s + 1), s === -1 || db.test(l) ? p = ["(", "(", g] : (p = ["brackets", l, g, s], g = s);
        break;
      }
      case Xi:
      case Ol: {
        a = o === Xi ? "'" : '"', s = g;
        do {
          if (c = !1, s = n.indexOf(a, s + 1), s === -1)
            if (i || A) {
              s = g + 1;
              break;
            } else
              w("string");
          for (f = s; n.charCodeAt(f - 1) === fn; )
            f -= 1, c = !c;
        } while (c);
        p = ["string", n.slice(g, s + 1), g, s], g = s;
        break;
      }
      case hb: {
        gn.lastIndex = g + 1, gn.test(n), gn.lastIndex === 0 ? s = n.length - 1 : s = gn.lastIndex - 2, p = ["at-word", n.slice(g, s + 1), g, s], g = s;
        break;
      }
      case fn: {
        for (s = g, u = !0; n.charCodeAt(s + 1) === fn; )
          s += 1, u = !u;
        if (o = n.charCodeAt(s + 1), u && o !== Ml && o !== Kt && o !== hn && o !== pn && o !== mn && o !== dn && (s += 1, $l.test(n.charAt(s)))) {
          for (; $l.test(n.charAt(s + 1)); )
            s += 1;
          n.charCodeAt(s + 1) === Kt && (s += 1);
        }
        p = ["word", n.slice(g, s + 1), g, s], g = s;
        break;
      }
      default: {
        o === Ml && n.charCodeAt(g + 1) === cb ? (s = n.indexOf("*/", g + 2) + 1, s === 0 && (i || A ? s = n.length : w("comment")), p = ["comment", n.slice(g, s + 1), g, s], g = s) : (yn.lastIndex = g + 1, yn.test(n), yn.lastIndex === 0 ? s = n.length - 1 : s = yn.lastIndex - 2, p = ["word", n.slice(g, s + 1), g, s], v.push(p), g = s);
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
let Nf = mt, Vn = class extends Nf {
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
var Fs = Vn;
Vn.default = Vn;
Nf.registerAtRule(Vn);
let Pf = mt, Lf, Tf, zt = class extends Pf {
  constructor(e) {
    super(e), this.type = "root", this.nodes || (this.nodes = []);
  }
  normalize(e, t, n) {
    let i = super.normalize(e);
    if (t) {
      if (n === "prepend")
        this.nodes.length > 1 ? t.raws.before = this.nodes[1].raws.before : delete t.raws.before;
      else if (this.first !== t)
        for (let o of i)
          o.raws.before = t.raws.before;
    }
    return i;
  }
  removeChild(e, t) {
    let n = this.index(e);
    return !t && n === 0 && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[n].raws.before), super.removeChild(e);
  }
  toResult(e = {}) {
    return new Lf(new Tf(), this, e).stringify();
  }
};
zt.registerLazyResult = (r) => {
  Lf = r;
};
zt.registerProcessor = (r) => {
  Tf = r;
};
var Dr = zt;
zt.default = zt;
Pf.registerRoot(zt);
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
    let n = [], i = "", o = !1, s = 0, a = !1, l = "", u = !1;
    for (let c of r)
      u ? u = !1 : c === "\\" ? u = !0 : a ? c === l && (a = !1) : c === '"' || c === "'" ? (a = !0, l = c) : c === "(" ? s += 1 : c === ")" ? s > 0 && (s -= 1) : s === 0 && e.includes(c) && (o = !0), o ? (i !== "" && n.push(i.trim()), i = "", o = !1) : i += c;
    return (t || i !== "") && n.push(i.trim()), n;
  }
};
var Df = _r;
_r.default = _r;
let Ff = mt, mb = Df, Hn = class extends Ff {
  constructor(e) {
    super(e), this.type = "rule", this.nodes || (this.nodes = []);
  }
  get selectors() {
    return mb.comma(this.selector);
  }
  set selectors(e) {
    let t = this.selector ? this.selector.match(/,\s*/) : null, n = t ? t[0] : "," + this.raw("between", "beforeOpen");
    this.selector = e.join(n);
  }
};
var zs = Hn;
Hn.default = Hn;
Ff.registerRule(Hn);
let gb = ci, yb = pb, wb = hi, vb = Fs, bb = Dr, Nl = zs;
const Pl = {
  empty: !0,
  space: !0
};
function Sb(r) {
  for (let e = r.length - 1; e >= 0; e--) {
    let t = r[e], n = t[3] || t[2];
    if (n) return n;
  }
}
let _b = class {
  constructor(e) {
    this.input = e, this.root = new bb(), this.current = this.root, this.spaces = "", this.semicolon = !1, this.createTokenizer(), this.root.source = { input: e, start: { column: 1, line: 1, offset: 0 } };
  }
  atrule(e) {
    let t = new vb();
    t.name = e[1].slice(1), t.name === "" && this.unnamedAtrule(t, e), this.init(t, e[2]);
    let n, i, o, s = !1, a = !1, l = [], u = [];
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
            for (o = l.length - 1, i = l[o]; i && i[0] === "space"; )
              i = l[--o];
            i && (t.source.end = this.getPosition(i[3] || i[2]), t.source.end.offset++);
          }
          this.end(e);
          break;
        } else
          l.push(e);
      else
        l.push(e);
      if (this.tokenizer.endOfFile()) {
        s = !0;
        break;
      }
    }
    t.raws.between = this.spacesAndCommentsFromEnd(l), l.length ? (t.raws.afterName = this.spacesAndCommentsFromStart(l), this.raw(t, "params", l), s && (e = l[l.length - 1], t.source.end = this.getPosition(e[3] || e[2]), t.source.end.offset++, this.spaces = t.raws.between, t.raws.between = "")) : (t.raws.afterName = "", t.params = ""), a && (t.nodes = [], this.current = t);
  }
  checkMissedSemicolon(e) {
    let t = this.colon(e);
    if (t === !1) return;
    let n = 0, i;
    for (let o = t - 1; o >= 0 && (i = e[o], !(i[0] !== "space" && (n += 1, n === 2))); o--)
      ;
    throw this.input.error(
      "Missed semicolon",
      i[0] === "word" ? i[3] + 1 : i[2]
    );
  }
  colon(e) {
    let t = 0, n, i, o;
    for (let [s, a] of e.entries()) {
      if (n = a, i = n[0], i === "(" && (t += 1), i === ")" && (t -= 1), t === 0 && i === ":")
        if (!o)
          this.doubleColon(n);
        else {
          if (o[0] === "word" && o[1] === "progid")
            continue;
          return s;
        }
      o = n;
    }
    return !1;
  }
  comment(e) {
    let t = new wb();
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
    this.tokenizer = yb(this.input);
  }
  decl(e, t) {
    let n = new gb();
    this.init(n, e[0][2]);
    let i = e[e.length - 1];
    for (i[0] === ";" && (this.semicolon = !0, e.pop()), n.source.end = this.getPosition(
      i[3] || i[2] || Sb(e)
    ), n.source.end.offset++; e[0][0] !== "word"; )
      e.length === 1 && this.unknownWord(e), n.raws.before += e.shift()[1];
    for (n.source.start = this.getPosition(e[0][2]), n.prop = ""; e.length; ) {
      let u = e[0][0];
      if (u === ":" || u === "space" || u === "comment")
        break;
      n.prop += e.shift()[1];
    }
    n.raws.between = "";
    let o;
    for (; e.length; )
      if (o = e.shift(), o[0] === ":") {
        n.raws.between += o[1];
        break;
      } else
        o[0] === "word" && /\w/.test(o[1]) && this.unknownWord([o]), n.raws.between += o[1];
    (n.prop[0] === "_" || n.prop[0] === "*") && (n.raws.before += n.prop[0], n.prop = n.prop.slice(1));
    let s = [], a;
    for (; e.length && (a = e[0][0], !(a !== "space" && a !== "comment")); )
      s.push(e.shift());
    this.precheckMissedSemicolon(e);
    for (let u = e.length - 1; u >= 0; u--) {
      if (o = e[u], o[1].toLowerCase() === "!important") {
        n.important = !0;
        let c = this.stringFrom(e, u);
        c = this.spacesFromEnd(e) + c, c !== " !important" && (n.raws.important = c);
        break;
      } else if (o[1].toLowerCase() === "important") {
        let c = e.slice(0), f = "";
        for (let d = u; d > 0; d--) {
          let h = c[d][0];
          if (f.trim().indexOf("!") === 0 && h !== "space")
            break;
          f = c.pop()[1] + f;
        }
        f.trim().indexOf("!") === 0 && (n.important = !0, n.raws.important = f, e = c);
      }
      if (o[0] !== "space" && o[0] !== "comment")
        break;
    }
    e.some((u) => u[0] !== "space" && u[0] !== "comment") && (n.raws.between += s.map((u) => u[1]).join(""), s = []), this.raw(n, "value", s.concat(e), t), n.value.includes(":") && !t && this.checkMissedSemicolon(e);
  }
  doubleColon(e) {
    throw this.input.error(
      "Double colon",
      { offset: e[2] },
      { offset: e[2] + e[1].length }
    );
  }
  emptyRule(e) {
    let t = new Nl();
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
    let t = !1, n = null, i = !1, o = null, s = [], a = e[1].startsWith("--"), l = [], u = e;
    for (; u; ) {
      if (n = u[0], l.push(u), n === "(" || n === "[")
        o || (o = u), s.push(n === "(" ? ")" : "]");
      else if (a && i && n === "{")
        o || (o = u), s.push("}");
      else if (s.length === 0)
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
      else n === s[s.length - 1] && (s.pop(), s.length === 0 && (o = null));
      u = this.tokenizer.nextToken();
    }
    if (this.tokenizer.endOfFile() && (t = !0), s.length > 0 && this.unclosedBracket(o), t && i) {
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
    let o, s, a = n.length, l = "", u = !0, c, f;
    for (let d = 0; d < a; d += 1)
      o = n[d], s = o[0], s === "space" && d === a - 1 && !i ? u = !1 : s === "comment" ? (f = n[d - 1] ? n[d - 1][0] : "empty", c = n[d + 1] ? n[d + 1][0] : "empty", !Pl[f] && !Pl[c] ? l.slice(-1) === "," ? u = !1 : l += o[1] : u = !1) : l += o[1];
    if (!u) {
      let d = n.reduce((h, p) => h + p[1], "");
      e.raws[t] = { raw: d, value: l };
    }
    e[t] = l;
  }
  rule(e) {
    e.pop();
    let t = new Nl();
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
var xb = _b;
let Cb = mt, Ib = xb, Ab = fi;
function Yn(r, e) {
  let t = new Ab(r, e), n = new Ib(t);
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
var Us = Yn;
Yn.default = Yn;
Cb.registerParse(Yn);
let { isClean: $e, my: Eb } = Tr, Rb = vf, kb = li, Ob = mt, Mb = Ts, $b = Mf, Ll = Ds, Nb = Us, Pb = Dr;
const Lb = {
  atrule: "AtRule",
  comment: "Comment",
  decl: "Declaration",
  document: "Document",
  root: "Root",
  rule: "Rule"
}, Tb = {
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
}, Db = {
  Once: !0,
  postcssPlugin: !0,
  prepare: !0
}, Ut = 0;
function qt(r) {
  return typeof r == "object" && typeof r.then == "function";
}
function zf(r) {
  let e = !1, t = Lb[r.type];
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
  return r.type === "document" ? e = ["Document", Ut, "DocumentExit"] : r.type === "root" ? e = ["Root", Ut, "RootExit"] : e = zf(r), {
    eventIndex: 0,
    events: e,
    iterator: 0,
    node: r,
    visitorIndex: 0,
    visitors: []
  };
}
function Qo(r) {
  return r[$e] = !1, r.nodes && r.nodes.forEach((e) => Qo(e)), r;
}
let es = {}, Bt = class Uf {
  constructor(e, t, n) {
    this.stringified = !1, this.processed = !1;
    let i;
    if (typeof t == "object" && t !== null && (t.type === "root" || t.type === "document"))
      i = Qo(t);
    else if (t instanceof Uf || t instanceof Ll)
      i = Qo(t.root), t.map && (typeof n.map > "u" && (n.map = {}), n.map.inline || (n.map.inline = !1), n.map.prev = t.map);
    else {
      let o = Nb;
      n.syntax && (o = n.syntax.parse), n.parser && (o = n.parser), o.parse && (o = o.parse);
      try {
        i = o(t, n);
      } catch (s) {
        this.processed = !0, this.error = s;
      }
      i && !i[Eb] && Ob.rebuild(i);
    }
    this.result = new Ll(e, i, n), this.helpers = { ...es, postcss: es, result: this.result }, this.plugins = this.processor.plugins.map((o) => typeof o == "object" && o.prepare ? { ...o, ...o.prepare(this.result) } : o);
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
        let i = n.postcssPlugin, o = n.postcssVersion, s = this.result.processor.version, a = o.split("."), l = s.split(".");
        (a[0] !== l[0] || parseInt(a[1]) > parseInt(l[1])) && console.error(
          "Unknown error from PostCSS plugin. Your current PostCSS version is " + s + ", but " + i + " uses " + o + ". Perhaps this is the source of the error below."
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
          if (!Tb[n] && /^[A-Z]/.test(n))
            throw new Error(
              `Unknown event ${n} in ${t.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`
            );
          if (!Db[n])
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
              let o = t[t.length - 1].node;
              throw this.handleError(i, o);
            }
        }
      }
      if (this.listeners.OnceExit)
        for (let [t, n] of this.listeners.OnceExit) {
          this.result.lastPlugin = t;
          try {
            if (e.type === "document") {
              let i = e.nodes.map(
                (o) => n(o, this.helpers)
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
    let e = this.result.opts, t = kb;
    e.syntax && (t = e.syntax.stringify), e.stringifier && (t = e.stringifier), t.stringify && (t = t.stringify);
    let i = new Rb(t, this.result.root, this.result.opts).generate();
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
    return process.env.NODE_ENV !== "production" && ("from" in this.opts || $b(
      "Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning."
    )), this.async().then(e, t);
  }
  toString() {
    return this.css;
  }
  visitSync(e, t) {
    for (let [n, i] of e) {
      this.result.lastPlugin = n;
      let o;
      try {
        o = i(t, this.helpers);
      } catch (s) {
        throw this.handleError(s, t.proxyOf);
      }
      if (t.type !== "root" && t.type !== "document" && !t.parent)
        return !0;
      if (qt(o))
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
      let [s, a] = i[t.visitorIndex];
      t.visitorIndex += 1, t.visitorIndex === i.length && (t.visitors = [], t.visitorIndex = 0), this.result.lastPlugin = s;
      try {
        return a(n.toProxy(), this.helpers);
      } catch (l) {
        throw this.handleError(l, n);
      }
    }
    if (t.iterator !== 0) {
      let s = t.iterator, a;
      for (; a = n.nodes[n.indexes[s]]; )
        if (n.indexes[s] += 1, !a[$e]) {
          a[$e] = !0, e.push(Tl(a));
          return;
        }
      t.iterator = 0, delete n.indexes[s];
    }
    let o = t.events;
    for (; t.eventIndex < o.length; ) {
      let s = o[t.eventIndex];
      if (t.eventIndex += 1, s === Ut) {
        n.nodes && n.nodes.length && (n[$e] = !0, t.iterator = n.getIterator());
        return;
      } else if (this.listeners[s]) {
        t.visitors = this.listeners[s];
        return;
      }
    }
    e.pop();
  }
  walkSync(e) {
    e[$e] = !0;
    let t = zf(e);
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
  es = r;
};
var Bf = Bt;
Bt.default = Bt;
Pb.registerLazyResult(Bt);
Mb.registerLazyResult(Bt);
let Fb = vf, zb = li, Ub = Mf, Bb = Us;
const Wb = Ds;
let ts = class {
  constructor(e, t, n) {
    t = t.toString(), this.stringified = !1, this._processor = e, this._css = t, this._opts = n, this._map = void 0;
    let i, o = zb;
    this.result = new Wb(this._processor, i, this._opts), this.result.css = t;
    let s = this;
    Object.defineProperty(this.result, "root", {
      get() {
        return s.root;
      }
    });
    let a = new Fb(o, i, this._opts, t);
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
    return process.env.NODE_ENV !== "production" && ("from" in this._opts || Ub(
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
    let e, t = Bb;
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
var Zb = ts;
ts.default = ts;
let jb = Zb, Gb = Bf, Vb = Ts, Hb = Dr, xr = class {
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
    return !this.plugins.length && !t.parser && !t.stringifier && !t.syntax ? new jb(this, e, t) : new Gb(this, e, t);
  }
  use(e) {
    return this.plugins = this.plugins.concat(this.normalize([e])), this;
  }
};
var Yb = xr;
xr.default = xr;
Hb.registerProcessor(xr);
Vb.registerProcessor(xr);
let Xb = ci, Jb = pf, Kb = hi, qb = Fs, Qb = fi, e1 = Dr, t1 = zs;
function Cr(r, e) {
  if (Array.isArray(r)) return r.map((i) => Cr(i));
  let { inputs: t, ...n } = r;
  if (t) {
    e = [];
    for (let i of t) {
      let o = { ...i, __proto__: Qb.prototype };
      o.map && (o.map = {
        ...o.map,
        __proto__: Jb.prototype
      }), e.push(o);
    }
  }
  if (n.nodes && (n.nodes = r.nodes.map((i) => Cr(i, e))), n.source) {
    let { inputId: i, ...o } = n.source;
    n.source = o, i != null && (n.source.input = e[i]);
  }
  if (n.type === "root")
    return new e1(n);
  if (n.type === "decl")
    return new Xb(n);
  if (n.type === "rule")
    return new t1(n);
  if (n.type === "comment")
    return new Kb(n);
  if (n.type === "atrule")
    return new qb(n);
  throw new Error("Unknown node type: " + r.type);
}
var r1 = Cr;
Cr.default = Cr;
let n1 = Ns, Wf = ci, i1 = Bf, o1 = mt, Bs = Yb, s1 = li, a1 = r1, Zf = Ts, l1 = $f, jf = hi, Gf = Fs, u1 = Ds, c1 = fi, f1 = Us, h1 = Df, Vf = zs, Hf = Dr, d1 = ui;
function U(...r) {
  return r.length === 1 && Array.isArray(r[0]) && (r = r[0]), new Bs(r);
}
U.plugin = function(e, t) {
  let n = !1;
  function i(...s) {
    console && console.warn && !n && (n = !0, console.warn(
      e + `: postcss.plugin was deprecated. Migration guide:
https://evilmartians.com/chronicles/postcss-8-plugin-migration`
    ), process.env.LANG && process.env.LANG.startsWith("cn") && console.warn(
      e + `: 里面 postcss.plugin 被弃用. 迁移指南:
https://www.w3ctech.com/topic/2226`
    ));
    let a = t(...s);
    return a.postcssPlugin = e, a.postcssVersion = new Bs().version, a;
  }
  let o;
  return Object.defineProperty(i, "postcss", {
    get() {
      return o || (o = i()), o;
    }
  }), i.process = function(s, a, l) {
    return U([i(l)]).process(s, a);
  }, i;
};
U.stringify = s1;
U.parse = f1;
U.fromJSON = a1;
U.list = h1;
U.comment = (r) => new jf(r);
U.atRule = (r) => new Gf(r);
U.decl = (r) => new Wf(r);
U.rule = (r) => new Vf(r);
U.root = (r) => new Hf(r);
U.document = (r) => new Zf(r);
U.CssSyntaxError = n1;
U.Declaration = Wf;
U.Container = o1;
U.Processor = Bs;
U.Document = Zf;
U.Comment = jf;
U.Warning = l1;
U.AtRule = Gf;
U.Result = u1;
U.Input = c1;
U.Rule = Vf;
U.Root = Hf;
U.Node = d1;
i1.registerPostcss(U);
var p1 = U;
U.default = U;
const Y = /* @__PURE__ */ Cv(p1);
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
class Ws {
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
    if (e instanceof Ws) {
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
}, wn = {}, m1 = () => !!globalThis.Zone;
function Zs(r) {
  if (wn[r])
    return wn[r];
  const e = globalThis[r], t = e.prototype, n = r in Dl ? Dl[r] : void 0, i = !!(n && // @ts-expect-error 2345
  n.every(
    (a) => {
      var l, u;
      return !!((u = (l = Object.getOwnPropertyDescriptor(t, a)) == null ? void 0 : l.get) != null && u.toString().includes("[native code]"));
    }
  )), o = r in Fl ? Fl[r] : void 0, s = !!(o && o.every(
    // @ts-expect-error 2345
    (a) => {
      var l;
      return typeof t[a] == "function" && ((l = t[a]) == null ? void 0 : l.toString().includes("[native code]"));
    }
  ));
  if (i && s && !m1())
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
const Ji = {};
function Qe(r, e, t) {
  var n;
  const i = `${r}.${String(t)}`;
  if (Ji[i])
    return Ji[i].call(
      e
    );
  const o = Zs(r), s = (n = Object.getOwnPropertyDescriptor(
    o,
    t
  )) == null ? void 0 : n.get;
  return s ? (Ji[i] = s, s.call(e)) : e[t];
}
const Ki = {};
function Yf(r, e, t) {
  const n = `${r}.${String(t)}`;
  if (Ki[n])
    return Ki[n].bind(
      e
    );
  const o = Zs(r)[t];
  return typeof o != "function" ? e[t] : (Ki[n] = o, o.bind(e));
}
function g1(r) {
  return Qe("Node", r, "childNodes");
}
function y1(r) {
  return Qe("Node", r, "parentNode");
}
function w1(r) {
  return Qe("Node", r, "parentElement");
}
function v1(r) {
  return Qe("Node", r, "textContent");
}
function b1(r, e) {
  return Yf("Node", r, "contains")(e);
}
function S1(r) {
  return Yf("Node", r, "getRootNode")();
}
function _1(r) {
  return !r || !("host" in r) ? null : Qe("ShadowRoot", r, "host");
}
function x1(r) {
  return r.styleSheets;
}
function C1(r) {
  return !r || !("shadowRoot" in r) ? null : Qe("Element", r, "shadowRoot");
}
function I1(r, e) {
  return Qe("Element", r, "querySelector")(e);
}
function A1(r, e) {
  return Qe("Element", r, "querySelectorAll")(e);
}
function Xf() {
  return Zs("MutationObserver").constructor;
}
const M = {
  childNodes: g1,
  parentNode: y1,
  parentElement: w1,
  textContent: v1,
  contains: b1,
  getRootNode: S1,
  host: _1,
  styleSheets: x1,
  shadowRoot: C1,
  querySelector: I1,
  querySelectorAll: A1,
  mutationObserver: Xf
};
function se(r, e, t = document) {
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
  return function(...o) {
    const s = Date.now();
    !i && t.leading === !1 && (i = s);
    const a = e - (s - i), l = this;
    a <= 0 || a > e ? (n && (clearTimeout(n), n = null), i = s, r.apply(l, o)) : !n && t.trailing !== !1 && (n = setTimeout(() => {
      i = t.leading === !1 ? 0 : Date.now(), n = null, r.apply(l, o);
    }, a));
  };
}
function di(r, e, t, n, i = window) {
  const o = i.Object.getOwnPropertyDescriptor(r, e);
  return i.Object.defineProperty(
    r,
    e,
    n ? t : {
      set(s) {
        setTimeout(() => {
          t.set.call(this, s);
        }, 0), o && o.set && o.set.call(this, s);
      }
    }
  ), () => di(r, e, o || {}, !0);
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
let Xn = Date.now;
/* @__PURE__ */ /[1-9][0-9]{12}/.test(Date.now().toString()) || (Xn = () => (/* @__PURE__ */ new Date()).getTime());
function Jf(r) {
  var e, t, n, i;
  const o = r.document;
  return {
    left: o.scrollingElement ? o.scrollingElement.scrollLeft : r.pageXOffset !== void 0 ? r.pageXOffset : o.documentElement.scrollLeft || (o == null ? void 0 : o.body) && ((e = M.parentElement(o.body)) == null ? void 0 : e.scrollLeft) || ((t = o == null ? void 0 : o.body) == null ? void 0 : t.scrollLeft) || 0,
    top: o.scrollingElement ? o.scrollingElement.scrollTop : r.pageYOffset !== void 0 ? r.pageYOffset : (o == null ? void 0 : o.documentElement.scrollTop) || (o == null ? void 0 : o.body) && ((n = M.parentElement(o.body)) == null ? void 0 : n.scrollTop) || ((i = o == null ? void 0 : o.body) == null ? void 0 : i.scrollTop) || 0
  };
}
function Kf() {
  return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight;
}
function qf() {
  return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth;
}
function Qf(r) {
  return r ? r.nodeType === r.ELEMENT_NODE ? r : M.parentElement(r) : null;
}
function ae(r, e, t, n) {
  if (!r)
    return !1;
  const i = Qf(r);
  if (!i)
    return !1;
  try {
    if (typeof e == "string") {
      if (i.classList.contains(e) || n && i.closest("." + e) !== null) return !0;
    } else if (Un(i, e, n)) return !0;
  } catch {
  }
  return !!(t && (i.matches(t) || n && i.closest(t) !== null));
}
function E1(r, e) {
  return e.getId(r) !== -1;
}
function qi(r, e, t) {
  return r.tagName === "TITLE" && t.headTitleMutations ? !0 : e.getId(r) === gr;
}
function eh(r, e) {
  if (ir(r))
    return !1;
  const t = e.getId(r);
  if (!e.has(t))
    return !0;
  const n = M.parentNode(r);
  return n && n.nodeType === r.DOCUMENT_NODE ? !1 : n ? eh(n, e) : !0;
}
function rs(r) {
  return !!r.changedTouches;
}
function R1(r = window) {
  "NodeList" in r && !r.NodeList.prototype.forEach && (r.NodeList.prototype.forEach = Array.prototype.forEach), "DOMTokenList" in r && !r.DOMTokenList.prototype.forEach && (r.DOMTokenList.prototype.forEach = Array.prototype.forEach);
}
function th(r, e) {
  return !!(r.nodeName === "IFRAME" && e.getMeta(r));
}
function rh(r, e) {
  return !!(r.nodeName === "LINK" && r.nodeType === r.ELEMENT_NODE && r.getAttribute && r.getAttribute("rel") === "stylesheet" && e.getMeta(r));
}
function ns(r) {
  return r ? r instanceof Ws && "shadowRoot" in r ? !!r.shadowRoot : !!M.shadowRoot(r) : !1;
}
class k1 {
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
function nh(r) {
  var e;
  let t = null;
  return "getRootNode" in r && ((e = M.getRootNode(r)) == null ? void 0 : e.nodeType) === Node.DOCUMENT_FRAGMENT_NODE && M.host(M.getRootNode(r)) && (t = M.host(M.getRootNode(r))), t;
}
function O1(r) {
  let e = r, t;
  for (; t = nh(e); )
    e = t;
  return e;
}
function M1(r) {
  const e = r.ownerDocument;
  if (!e) return !1;
  const t = O1(r);
  return M.contains(e, t);
}
function ih(r) {
  const e = r.ownerDocument;
  return e ? M.contains(e, r) || M1(r) : !1;
}
var L = /* @__PURE__ */ ((r) => (r[r.DomContentLoaded = 0] = "DomContentLoaded", r[r.Load = 1] = "Load", r[r.FullSnapshot = 2] = "FullSnapshot", r[r.IncrementalSnapshot = 3] = "IncrementalSnapshot", r[r.Meta = 4] = "Meta", r[r.Custom = 5] = "Custom", r[r.Plugin = 6] = "Plugin", r))(L || {}), $ = /* @__PURE__ */ ((r) => (r[r.Mutation = 0] = "Mutation", r[r.MouseMove = 1] = "MouseMove", r[r.MouseInteraction = 2] = "MouseInteraction", r[r.Scroll = 3] = "Scroll", r[r.ViewportResize = 4] = "ViewportResize", r[r.Input = 5] = "Input", r[r.TouchMove = 6] = "TouchMove", r[r.MediaInteraction = 7] = "MediaInteraction", r[r.StyleSheetRule = 8] = "StyleSheetRule", r[r.CanvasMutation = 9] = "CanvasMutation", r[r.Font = 10] = "Font", r[r.Log = 11] = "Log", r[r.Drag = 12] = "Drag", r[r.StyleDeclaration = 13] = "StyleDeclaration", r[r.Selection = 14] = "Selection", r[r.AdoptedStyleSheet = 15] = "AdoptedStyleSheet", r[r.CustomElement = 16] = "CustomElement", r))($ || {}), ce = /* @__PURE__ */ ((r) => (r[r.MouseUp = 0] = "MouseUp", r[r.MouseDown = 1] = "MouseDown", r[r.Click = 2] = "Click", r[r.ContextMenu = 3] = "ContextMenu", r[r.DblClick = 4] = "DblClick", r[r.Focus = 5] = "Focus", r[r.Blur = 6] = "Blur", r[r.TouchStart = 7] = "TouchStart", r[r.TouchMove_Departed = 8] = "TouchMove_Departed", r[r.TouchEnd = 9] = "TouchEnd", r[r.TouchCancel = 10] = "TouchCancel", r))(ce || {}), ze = /* @__PURE__ */ ((r) => (r[r.Mouse = 0] = "Mouse", r[r.Pen = 1] = "Pen", r[r.Touch = 2] = "Touch", r))(ze || {}), Wt = /* @__PURE__ */ ((r) => (r[r["2D"] = 0] = "2D", r[r.WebGL = 1] = "WebGL", r[r.WebGL2 = 2] = "WebGL2", r))(Wt || {}), It = /* @__PURE__ */ ((r) => (r[r.Play = 0] = "Play", r[r.Pause = 1] = "Pause", r[r.Seeked = 2] = "Seeked", r[r.VolumeChange = 3] = "VolumeChange", r[r.RateChange = 4] = "RateChange", r))(It || {}), oh = /* @__PURE__ */ ((r) => (r[r.Document = 0] = "Document", r[r.DocumentType = 1] = "DocumentType", r[r.Element = 2] = "Element", r[r.Text = 3] = "Text", r[r.CDATA = 4] = "CDATA", r[r.Comment = 5] = "Comment", r))(oh || {});
function Ul(r) {
  return "__ln" in r;
}
class $1 {
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
class N1 {
  constructor() {
    C(this, "frozen", !1), C(this, "locked", !1), C(this, "texts", []), C(this, "attributes", []), C(this, "attributeMap", /* @__PURE__ */ new WeakMap()), C(this, "removes", []), C(this, "mapRemoves", []), C(this, "movedMap", {}), C(this, "addedSet", /* @__PURE__ */ new Set()), C(this, "movedSet", /* @__PURE__ */ new Set()), C(this, "droppedSet", /* @__PURE__ */ new Set()), C(this, "removesSubTreeCache", /* @__PURE__ */ new Set()), C(this, "mutationCb"), C(this, "blockClass"), C(this, "blockSelector"), C(this, "maskTextClass"), C(this, "maskTextSelector"), C(this, "inlineStylesheet"), C(this, "maskInputOptions"), C(this, "maskTextFn"), C(this, "maskInputFn"), C(this, "keepIframeSrcFn"), C(this, "recordCanvas"), C(this, "inlineImages"), C(this, "slimDOMOptions"), C(this, "dataURLOptions"), C(this, "doc"), C(this, "mirror"), C(this, "iframeManager"), C(this, "stylesheetManager"), C(this, "shadowDomManager"), C(this, "canvasManager"), C(this, "processedNodeManager"), C(this, "unattachedDoc"), C(this, "processMutations", (e) => {
      e.forEach(this.processMutation), this.emit();
    }), C(this, "emit", () => {
      if (this.frozen || this.locked)
        return;
      const e = [], t = /* @__PURE__ */ new Set(), n = new $1(), i = (l) => {
        let u = l, c = gr;
        for (; c === gr; )
          u = u && u.nextSibling, c = u && this.mirror.getId(u);
        return c;
      }, o = (l) => {
        const u = M.parentNode(l);
        if (!u || !ih(l))
          return;
        let c = !1;
        if (l.nodeType === Node.TEXT_NODE) {
          const p = u.tagName;
          if (p === "TEXTAREA")
            return;
          p === "STYLE" && this.addedSet.has(u) && (c = !0);
        }
        const f = ir(u) ? this.mirror.getId(nh(l)) : this.mirror.getId(u), d = i(l);
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
            th(p, this.mirror) && this.iframeManager.addIframe(p), rh(p, this.mirror) && this.stylesheetManager.trackLinkElement(
              p
            ), ns(l) && this.shadowDomManager.addShadowRoot(M.shadowRoot(l), this.doc);
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
        Wl(this.removesSubTreeCache, l, this.mirror) && !this.movedSet.has(M.parentNode(l)) || o(l);
      for (const l of this.addedSet)
        !Zl(this.droppedSet, l) && !Wl(this.removesSubTreeCache, l, this.mirror) || Zl(this.movedSet, l) ? o(l) : this.droppedSet.add(l);
      let s = null;
      for (; n.length; ) {
        let l = null;
        if (s) {
          const u = this.mirror.getId(M.parentNode(s.value)), c = i(s.value);
          u !== -1 && c !== -1 && (l = s);
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
        s = l.previous, n.removeNode(l.value), o(l.value);
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
      if (!qi(e.target, this.mirror, this.slimDOMOptions))
        switch (e.type) {
          case "characterData": {
            const t = M.textContent(e.target);
            !ae(e.target, this.blockClass, this.blockSelector, !1) && t !== e.oldValue && this.texts.push({
              value: Ac(
                e.target,
                this.maskTextClass,
                this.maskTextSelector,
                !0
                // checkAncestors
              ) && t ? this.maskTextFn ? this.maskTextFn(t, Qf(e.target)) : t.replace(/[\S]/g, "*") : t,
              node: e.target
            });
            break;
          }
          case "attributes": {
            const t = e.target;
            let n = e.attributeName, i = e.target.getAttribute(n);
            if (n === "value") {
              const s = bs(t);
              i = vs({
                element: t,
                maskInputOptions: this.maskInputOptions,
                tagName: t.tagName,
                type: s,
                value: i,
                maskInputFn: this.maskInputFn
              });
            }
            if (ae(e.target, this.blockClass, this.blockSelector, !1) || i === e.oldValue)
              return;
            let o = this.attributeMap.get(e.target);
            if (t.tagName === "IFRAME" && n === "src" && !this.keepIframeSrcFn(i))
              if (!t.contentDocument)
                n = "rr_src";
              else
                return;
            if (o || (o = {
              node: e.target,
              attributes: {},
              styleDiff: {},
              _unchangedStyles: {}
            }, this.attributes.push(o), this.attributeMap.set(e.target, o)), n === "type" && t.tagName === "INPUT" && (e.oldValue || "").toLowerCase() === "password" && t.setAttribute("data-rr-is-password", "true"), !Ic(t.tagName, n))
              if (o.attributes[n] = Cc(
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
                const s = this.unattachedDoc.createElement("span");
                e.oldValue && s.setAttribute("style", e.oldValue);
                for (const a of Array.from(t.style)) {
                  const l = t.style.getPropertyValue(a), u = t.style.getPropertyPriority(a);
                  l !== s.style.getPropertyValue(a) || u !== s.style.getPropertyPriority(a) ? u === "" ? o.styleDiff[a] = l : o.styleDiff[a] = [l, u] : o._unchangedStyles[a] = [l, u];
                }
                for (const a of Array.from(s.style))
                  t.style.getPropertyValue(a) === "" && (o.styleDiff[a] = !1);
              } else n === "open" && t.tagName === "DIALOG" && (t.matches("dialog:modal") ? o.attributes.rr_open_mode = "modal" : o.attributes.rr_open_mode = "non-modal");
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
              ae(e.target, this.blockClass, this.blockSelector, !1) || qi(t, this.mirror, this.slimDOMOptions) || !E1(t, this.mirror) || (this.addedSet.has(t) ? (is(this.addedSet, t), this.droppedSet.add(t)) : this.addedSet.has(e.target) && n === -1 || eh(e.target, this.mirror) || (this.movedSet.has(t) && this.movedMap[Bl(n, i)] ? is(this.movedSet, t) : (this.removes.push({
                parentId: i,
                id: n,
                isShadow: ir(e.target) && or(e.target) ? !0 : void 0
              }), P1(t, this.removesSubTreeCache))), this.mapRemoves.push(t));
            });
            break;
          }
        }
    }), C(this, "genAdds", (e, t) => {
      if (!this.processedNodeManager.inOtherBuffer(e, this) && !(this.addedSet.has(e) || this.movedSet.has(e))) {
        if (this.mirror.hasNode(e)) {
          if (qi(e, this.mirror, this.slimDOMOptions))
            return;
          this.movedSet.add(e);
          let n = null;
          t && this.mirror.hasNode(t) && (n = this.mirror.getId(t)), n && n !== -1 && (this.movedMap[Bl(this.mirror.getId(e), n)] = !0);
        } else
          this.addedSet.add(e), this.droppedSet.delete(e);
        ae(e, this.blockClass, this.blockSelector, !1) || (M.childNodes(e).forEach((n) => this.genAdds(n)), ns(e) && M.childNodes(M.shadowRoot(e)).forEach((n) => {
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
function is(r, e) {
  r.delete(e), M.childNodes(e).forEach((t) => is(r, t));
}
function P1(r, e) {
  const t = [r];
  for (; t.length; ) {
    const n = t.pop();
    e.has(n) || (e.add(n), M.childNodes(n).forEach((i) => t.push(i)));
  }
}
function Wl(r, e, t) {
  return r.size === 0 ? !1 : L1(r, e);
}
function L1(r, e, t) {
  const n = M.parentNode(e);
  return n ? r.has(n) : !1;
}
function Zl(r, e) {
  return r.size === 0 ? !1 : sh(r, e);
}
function sh(r, e) {
  const t = M.parentNode(e);
  return t ? r.has(t) ? !0 : sh(r, t) : !1;
}
let sr;
function T1(r) {
  sr = r;
}
function D1() {
  sr = void 0;
}
const P = (r) => sr ? (...t) => {
  try {
    return r(...t);
  } catch (n) {
    if (sr && sr(n) === !0)
      return;
    throw n;
  }
} : r, st = [];
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
function ah(r, e) {
  const t = new N1();
  st.push(t), t.init(r);
  const n = new (Xf())(
    P(t.processMutations.bind(t))
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
function F1({
  mousemoveCb: r,
  sampling: e,
  doc: t,
  mirror: n
}) {
  if (e.mousemove === !1)
    return () => {
    };
  const i = typeof e.mousemove == "number" ? e.mousemove : 50, o = typeof e.mousemoveCallback == "number" ? e.mousemoveCallback : 500;
  let s = [], a;
  const l = Ir(
    P(
      (f) => {
        const d = Date.now() - a;
        r(
          s.map((h) => (h.timeOffset -= d, h)),
          f
        ), s = [], a = null;
      }
    ),
    o
  ), u = P(
    Ir(
      P((f) => {
        const d = Fr(f), { clientX: h, clientY: p } = rs(f) ? f.changedTouches[0] : f;
        a || (a = Xn()), s.push({
          x: h,
          y: p,
          id: n.getId(d),
          timeOffset: Xn() - a
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
    se("mousemove", u, t),
    se("touchmove", u, t),
    se("drag", u, t)
  ];
  return P(() => {
    c.forEach((f) => f());
  });
}
function z1({
  mouseInteractionCb: r,
  doc: e,
  mirror: t,
  blockClass: n,
  blockSelector: i,
  sampling: o
}) {
  if (o.mouseInteraction === !1)
    return () => {
    };
  const s = o.mouseInteraction === !0 || o.mouseInteraction === void 0 ? {} : o.mouseInteraction, a = [];
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
    } else rs(f) && (h = ze.Touch);
    h !== null ? (l = h, (p.startsWith("Touch") && h === ze.Touch || p.startsWith("Mouse") && h === ze.Mouse) && (h = null)) : ce[c] === ce.Click && (h = l, l = null);
    const m = rs(f) ? f.changedTouches[0] : f;
    if (!m)
      return;
    const g = t.getId(d), { clientX: v, clientY: b } = m;
    P(r)({
      type: ce[p],
      id: g,
      x: v,
      y: b,
      ...h !== null && { pointerType: h }
    });
  };
  return Object.keys(ce).filter(
    (c) => Number.isNaN(Number(c)) && !c.endsWith("_Departed") && s[c] !== !1
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
    a.push(se(f, d, e));
  }), P(() => {
    a.forEach((c) => c());
  });
}
function lh({
  scrollCb: r,
  doc: e,
  mirror: t,
  blockClass: n,
  blockSelector: i,
  sampling: o
}) {
  const s = P(
    Ir(
      P((a) => {
        const l = Fr(a);
        if (!l || ae(l, n, i, !0))
          return;
        const u = t.getId(l);
        if (l === e && e.defaultView) {
          const c = Jf(e.defaultView);
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
      o.scroll || 100
    )
  );
  return se("scroll", s, e);
}
function U1({ viewportResizeCb: r }, { win: e }) {
  let t = -1, n = -1;
  const i = P(
    Ir(
      P(() => {
        const o = Kf(), s = qf();
        (t !== o || n !== s) && (r({
          width: Number(s),
          height: Number(o)
        }), t = o, n = s);
      }),
      200
    )
  );
  return se("resize", i, e);
}
const B1 = ["INPUT", "TEXTAREA", "SELECT"], jl = /* @__PURE__ */ new WeakMap();
function W1({
  inputCb: r,
  doc: e,
  mirror: t,
  blockClass: n,
  blockSelector: i,
  ignoreClass: o,
  ignoreSelector: s,
  maskInputOptions: a,
  maskInputFn: l,
  sampling: u,
  userTriggeredOnInput: c
}) {
  function f(b) {
    let y = Fr(b);
    const w = b.isTrusted, _ = y && y.tagName;
    if (y && _ === "OPTION" && (y = M.parentElement(y)), !y || !_ || B1.indexOf(_) < 0 || ae(y, n, i, !0) || y.classList.contains(o) || s && y.matches(s))
      return;
    let E = y.value, x = !1;
    const S = bs(y) || "";
    S === "radio" || S === "checkbox" ? x = y.checked : (a[_.toLowerCase()] || a[S]) && (E = vs({
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
      P(r)({
        ...y,
        id: _
      });
    }
  }
  const p = (u.input === "last" ? ["change"] : ["input", "change"]).map(
    (b) => se(b, P(f), e)
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
      (b) => di(
        b[0],
        b[1],
        {
          set() {
            P(f)({
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
  ), P(() => {
    p.forEach((b) => b());
  });
}
function Jn(r) {
  const e = [];
  function t(n, i) {
    if (vn("CSSGroupingRule") && n.parentRule instanceof CSSGroupingRule || vn("CSSMediaRule") && n.parentRule instanceof CSSMediaRule || vn("CSSSupportsRule") && n.parentRule instanceof CSSSupportsRule || vn("CSSConditionRule") && n.parentRule instanceof CSSConditionRule) {
      const s = Array.from(
        n.parentRule.cssRules
      ).indexOf(n);
      i.unshift(s);
    } else if (n.parentStyleSheet) {
      const s = Array.from(n.parentStyleSheet.cssRules).indexOf(n);
      i.unshift(s);
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
function Z1({ styleSheetRuleCb: r, mirror: e, stylesheetManager: t }, { win: n }) {
  if (!n.CSSStyleSheet || !n.CSSStyleSheet.prototype)
    return () => {
    };
  const i = n.CSSStyleSheet.prototype.insertRule;
  n.CSSStyleSheet.prototype.insertRule = new Proxy(i, {
    apply: P(
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
  const o = n.CSSStyleSheet.prototype.deleteRule;
  n.CSSStyleSheet.prototype.deleteRule = new Proxy(o, {
    apply: P(
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
  let s;
  n.CSSStyleSheet.prototype.replace && (s = n.CSSStyleSheet.prototype.replace, n.CSSStyleSheet.prototype.replace = new Proxy(s, {
    apply: P(
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
    apply: P(
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
        apply: P(
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
                    ...Jn(h),
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
        apply: P(
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
                { index: [...Jn(h), m] }
              ]
            }), d.apply(h, p);
          }
        )
      }
    );
  }), P(() => {
    n.CSSStyleSheet.prototype.insertRule = i, n.CSSStyleSheet.prototype.deleteRule = o, s && (n.CSSStyleSheet.prototype.replace = s), a && (n.CSSStyleSheet.prototype.replaceSync = a), Object.entries(l).forEach(([c, f]) => {
      f.prototype.insertRule = u[c].insertRule, f.prototype.deleteRule = u[c].deleteRule;
    });
  });
}
function uh({
  mirror: r,
  stylesheetManager: e
}, t) {
  var n, i, o;
  let s = null;
  t.nodeName === "#document" ? s = r.getId(t) : s = r.getId(M.host(t));
  const a = t.nodeName === "#document" ? (n = t.defaultView) == null ? void 0 : n.Document : (o = (i = t.ownerDocument) == null ? void 0 : i.defaultView) == null ? void 0 : o.ShadowRoot, l = a != null && a.prototype ? Object.getOwnPropertyDescriptor(
    a == null ? void 0 : a.prototype,
    "adoptedStyleSheets"
  ) : void 0;
  return s === null || s === -1 || !a || !l ? () => {
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
      if (s !== null && s !== -1)
        try {
          e.adoptStyleSheets(u, s);
        } catch {
        }
      return f;
    }
  }), P(() => {
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
function j1({
  styleDeclarationCb: r,
  mirror: e,
  ignoreCSSAttributes: t,
  stylesheetManager: n
}, { win: i }) {
  const o = i.CSSStyleDeclaration.prototype.setProperty;
  i.CSSStyleDeclaration.prototype.setProperty = new Proxy(o, {
    apply: P(
      (a, l, u) => {
        var c;
        const [f, d, h] = u;
        if (t.has(f))
          return o.apply(l, [f, d, h]);
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
          index: Jn(l.parentRule)
        }), a.apply(l, u);
      }
    )
  });
  const s = i.CSSStyleDeclaration.prototype.removeProperty;
  return i.CSSStyleDeclaration.prototype.removeProperty = new Proxy(s, {
    apply: P(
      (a, l, u) => {
        var c;
        const [f] = u;
        if (t.has(f))
          return s.apply(l, [f]);
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
          index: Jn(l.parentRule)
        }), a.apply(l, u);
      }
    )
  }), P(() => {
    i.CSSStyleDeclaration.prototype.setProperty = o, i.CSSStyleDeclaration.prototype.removeProperty = s;
  });
}
function G1({
  mediaInteractionCb: r,
  blockClass: e,
  blockSelector: t,
  mirror: n,
  sampling: i,
  doc: o
}) {
  const s = P(
    (l) => Ir(
      P((u) => {
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
    se("play", s(It.Play), o),
    se("pause", s(It.Pause), o),
    se("seeked", s(It.Seeked), o),
    se("volumechange", s(It.VolumeChange), o),
    se("ratechange", s(It.RateChange), o)
  ];
  return P(() => {
    a.forEach((l) => l());
  });
}
function V1({ fontCb: r, doc: e }) {
  const t = e.defaultView;
  if (!t)
    return () => {
    };
  const n = [], i = /* @__PURE__ */ new WeakMap(), o = t.FontFace;
  t.FontFace = function(l, u, c) {
    const f = new o(l, u, c);
    return i.set(f, {
      family: l,
      buffer: typeof u != "string",
      descriptors: c,
      fontSource: typeof u == "string" ? u : JSON.stringify(Array.from(new Uint8Array(u)))
    }), f;
  };
  const s = Ht(
    e.fonts,
    "add",
    function(a) {
      return function(l) {
        return setTimeout(
          P(() => {
            const u = i.get(l);
            u && (r(u), i.delete(l));
          }),
          0
        ), a.apply(this, [l]);
      };
    }
  );
  return n.push(() => {
    t.FontFace = o;
  }), n.push(s), P(() => {
    n.forEach((a) => a());
  });
}
function H1(r) {
  const { doc: e, mirror: t, blockClass: n, blockSelector: i, selectionCb: o } = r;
  let s = !0;
  const a = P(() => {
    const l = e.getSelection();
    if (!l || s && (l != null && l.isCollapsed)) return;
    s = l.isCollapsed || !1;
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
    o({ ranges: u });
  });
  return a(), se("selectionchange", a);
}
function Y1({
  doc: r,
  customElementCb: e
}) {
  const t = r.defaultView;
  return !t || !t.customElements ? () => {
  } : Ht(
    t.customElements,
    "define",
    function(i) {
      return function(o, s, a) {
        try {
          e({
            define: {
              name: o
            }
          });
        } catch {
          console.warn(`Custom element callback failed for ${o}`);
        }
        return i.apply(this, [o, s, a]);
      };
    }
  );
}
function X1(r, e) {
  const {
    mutationCb: t,
    mousemoveCb: n,
    mouseInteractionCb: i,
    scrollCb: o,
    viewportResizeCb: s,
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
    e.scroll && e.scroll(...m), o(...m);
  }, r.viewportResizeCb = (...m) => {
    e.viewportResize && e.viewportResize(...m), s(...m);
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
function J1(r, e = {}) {
  const t = r.doc.defaultView;
  if (!t)
    return () => {
    };
  X1(r, e);
  let n;
  r.recordDOM && (n = ah(r, r.doc));
  const i = F1(r), o = z1(r), s = lh(r), a = U1(r, {
    win: t
  }), l = W1(r), u = G1(r);
  let c = () => {
  }, f = () => {
  }, d = () => {
  }, h = () => {
  };
  r.recordDOM && (c = Z1(r, { win: t }), f = uh(r, r.doc), d = j1(r, {
    win: t
  }), r.collectFonts && (h = V1(r)));
  const p = H1(r), m = Y1(r), g = [];
  for (const v of r.plugins)
    g.push(
      v.observer(v.callback, t, v.options)
    );
  return P(() => {
    st.forEach((v) => v.reset()), n == null || n.disconnect(), i(), o(), s(), a(), l(), u(), c(), f(), d(), h(), p(), m(), g.forEach((v) => v());
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
    const o = n || this.getIdToRemoteIdMap(e), s = i || this.getRemoteIdToIdMap(e);
    let a = o.get(t);
    return a || (a = this.generateIdFn(), o.set(t, a), s.set(a, t)), a;
  }
  getIds(e, t) {
    const n = this.getIdToRemoteIdMap(e), i = this.getRemoteIdToIdMap(e);
    return t.map(
      (o) => this.getId(e, o, n, i)
    );
  }
  getRemoteId(e, t, n) {
    const i = n || this.getRemoteIdToIdMap(e);
    if (typeof t != "number") return t;
    const o = i.get(t);
    return o || -1;
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
class K1 {
  constructor(e) {
    C(this, "iframes", /* @__PURE__ */ new WeakMap()), C(this, "crossOriginIframeMap", /* @__PURE__ */ new WeakMap()), C(this, "crossOriginIframeMirror", new Gl(xc)), C(this, "crossOriginIframeStyleMirror"), C(this, "crossOriginIframeRootIdMap", /* @__PURE__ */ new WeakMap()), C(this, "mirror"), C(this, "mutationCb"), C(this, "wrappedEmit"), C(this, "loadListener"), C(this, "stylesheetManager"), C(this, "recordCrossOriginIframes"), this.mutationCb = e.mutationCb, this.wrappedEmit = e.wrappedEmit, this.stylesheetManager = e.stylesheetManager, this.recordCrossOriginIframes = e.recordCrossOriginIframes, this.crossOriginIframeStyleMirror = new Gl(
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
    const o = this.transformCrossOriginEvent(
      i,
      t.data.event
    );
    o && this.wrappedEmit(
      o,
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
              const o = this.crossOriginIframeRootIdMap.get(e);
              o && this.patchRootIdOnNode(i.node, o);
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
    for (const o of i)
      !Array.isArray(t[o]) && typeof t[o] != "number" || (Array.isArray(t[o]) ? t[o] = e.getIds(
        n,
        t[o]
      ) : t[o] = e.getId(n, t[o]));
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
    e.type !== oh.Document && !e.rootId && (e.rootId = t), "childNodes" in e && e.childNodes.forEach((n) => {
      this.patchRootIdOnNode(n, t);
    });
  }
}
class q1 {
  constructor(e) {
    C(this, "shadowDoms", /* @__PURE__ */ new WeakSet()), C(this, "mutationCb"), C(this, "scrollCb"), C(this, "bypassOptions"), C(this, "mirror"), C(this, "restoreHandlers", []), this.mutationCb = e.mutationCb, this.scrollCb = e.scrollCb, this.bypassOptions = e.bypassOptions, this.mirror = e.mirror, this.init();
  }
  init() {
    this.reset(), this.patchAttachShadow(Element, document);
  }
  addShadowRoot(e, t) {
    if (!or(e) || this.shadowDoms.has(e)) return;
    this.shadowDoms.add(e);
    const n = ah(
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
      lh({
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
        uh(
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
          return function(o) {
            const s = i.call(this, o), a = M.shadowRoot(this);
            return a && ih(this) && n.addShadowRoot(a, t), s;
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
var kt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Q1 = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Sn = 0; Sn < kt.length; Sn++)
  Q1[kt.charCodeAt(Sn)] = Sn;
var eS = function(r) {
  var e = new Uint8Array(r), t, n = e.length, i = "";
  for (t = 0; t < n; t += 3)
    i += kt[e[t] >> 2], i += kt[(e[t] & 3) << 4 | e[t + 1] >> 4], i += kt[(e[t + 1] & 15) << 2 | e[t + 2] >> 6], i += kt[e[t + 2] & 63];
  return n % 3 === 2 ? i = i.substring(0, i.length - 1) + "=" : n % 3 === 1 && (i = i.substring(0, i.length - 2) + "=="), i;
};
const Vl = /* @__PURE__ */ new Map();
function tS(r, e) {
  let t = Vl.get(r);
  return t || (t = /* @__PURE__ */ new Map(), Vl.set(r, t)), t.has(e) || t.set(e, []), t.get(e);
}
const ch = (r, e, t) => {
  if (!r || !(hh(r, e) || typeof r == "object"))
    return;
  const n = r.constructor.name, i = tS(t, n);
  let o = i.indexOf(r);
  return o === -1 && (o = i.length, i.push(r)), o;
};
function On(r, e, t) {
  if (r instanceof Array)
    return r.map((n) => On(n, e, t));
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
    const n = r.constructor.name, i = eS(r);
    return {
      rr_type: n,
      base64: i
    };
  } else {
    if (r instanceof DataView)
      return {
        rr_type: r.constructor.name,
        args: [
          On(r.buffer, e, t),
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
          args: [On(r.data, e, t), r.width, r.height]
        };
      if (hh(r, e) || typeof r == "object") {
        const n = r.constructor.name, i = ch(r, e, t);
        return {
          rr_type: n,
          index: i
        };
      }
    }
  }
  return r;
}
const fh = (r, e, t) => r.map((n) => On(n, e, t)), hh = (r, e) => !![
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
function rS(r, e, t, n) {
  const i = [], o = Object.getOwnPropertyNames(
    e.CanvasRenderingContext2D.prototype
  );
  for (const s of o)
    try {
      if (typeof e.CanvasRenderingContext2D.prototype[s] != "function")
        continue;
      const a = Ht(
        e.CanvasRenderingContext2D.prototype,
        s,
        function(l) {
          return function(...u) {
            return ae(this.canvas, t, n, !0) || setTimeout(() => {
              const c = fh(u, e, this);
              r(this.canvas, {
                type: Wt["2D"],
                property: s,
                args: c
              });
            }, 0), l.apply(this, u);
          };
        }
      );
      i.push(a);
    } catch {
      const a = di(
        e.CanvasRenderingContext2D.prototype,
        s,
        {
          set(l) {
            r(this.canvas, {
              type: Wt["2D"],
              property: s,
              args: [l],
              setter: !0
            });
          }
        }
      );
      i.push(a);
    }
  return () => {
    i.forEach((s) => s());
  };
}
function nS(r) {
  return r === "experimental-webgl" ? "webgl" : r;
}
function Hl(r, e, t, n) {
  const i = [];
  try {
    const o = Ht(
      r.HTMLCanvasElement.prototype,
      "getContext",
      function(s) {
        return function(a, ...l) {
          if (!ae(this, e, t, !0)) {
            const u = nS(a);
            if ("__context" in this || (this.__context = u), n && ["webgl", "webgl2"].includes(u))
              if (l[0] && typeof l[0] == "object") {
                const c = l[0];
                c.preserveDrawingBuffer || (c.preserveDrawingBuffer = !0);
              } else
                l.splice(0, 1, {
                  preserveDrawingBuffer: !0
                });
          }
          return s.apply(this, [a, ...l]);
        };
      }
    );
    i.push(o);
  } catch {
    console.error("failed to patch HTMLCanvasElement.prototype.getContext");
  }
  return () => {
    i.forEach((o) => o());
  };
}
function Yl(r, e, t, n, i, o) {
  const s = [], a = Object.getOwnPropertyNames(r);
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
              if (ch(d, o, this), "tagName" in this.canvas && !ae(this.canvas, n, i, !0)) {
                const h = fh(f, o, this), p = {
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
        s.push(u);
      } catch {
        const u = di(r, l, {
          set(c) {
            t(this.canvas, {
              type: e,
              property: l,
              args: [c],
              setter: !0
            });
          }
        });
        s.push(u);
      }
  return s;
}
function iS(r, e, t, n) {
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
    i.forEach((o) => o());
  };
}
const dh = "KGZ1bmN0aW9uKCkgewogICJ1c2Ugc3RyaWN0IjsKICB2YXIgY2hhcnMgPSAiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyI7CiAgdmFyIGxvb2t1cCA9IHR5cGVvZiBVaW50OEFycmF5ID09PSAidW5kZWZpbmVkIiA/IFtdIDogbmV3IFVpbnQ4QXJyYXkoMjU2KTsKICBmb3IgKHZhciBpID0gMDsgaSA8IGNoYXJzLmxlbmd0aDsgaSsrKSB7CiAgICBsb29rdXBbY2hhcnMuY2hhckNvZGVBdChpKV0gPSBpOwogIH0KICB2YXIgZW5jb2RlID0gZnVuY3Rpb24oYXJyYXlidWZmZXIpIHsKICAgIHZhciBieXRlcyA9IG5ldyBVaW50OEFycmF5KGFycmF5YnVmZmVyKSwgaTIsIGxlbiA9IGJ5dGVzLmxlbmd0aCwgYmFzZTY0ID0gIiI7CiAgICBmb3IgKGkyID0gMDsgaTIgPCBsZW47IGkyICs9IDMpIHsKICAgICAgYmFzZTY0ICs9IGNoYXJzW2J5dGVzW2kyXSA+PiAyXTsKICAgICAgYmFzZTY0ICs9IGNoYXJzWyhieXRlc1tpMl0gJiAzKSA8PCA0IHwgYnl0ZXNbaTIgKyAxXSA+PiA0XTsKICAgICAgYmFzZTY0ICs9IGNoYXJzWyhieXRlc1tpMiArIDFdICYgMTUpIDw8IDIgfCBieXRlc1tpMiArIDJdID4+IDZdOwogICAgICBiYXNlNjQgKz0gY2hhcnNbYnl0ZXNbaTIgKyAyXSAmIDYzXTsKICAgIH0KICAgIGlmIChsZW4gJSAzID09PSAyKSB7CiAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDEpICsgIj0iOwogICAgfSBlbHNlIGlmIChsZW4gJSAzID09PSAxKSB7CiAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDIpICsgIj09IjsKICAgIH0KICAgIHJldHVybiBiYXNlNjQ7CiAgfTsKICBjb25zdCBsYXN0QmxvYk1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7CiAgY29uc3QgdHJhbnNwYXJlbnRCbG9iTWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTsKICBhc3luYyBmdW5jdGlvbiBnZXRUcmFuc3BhcmVudEJsb2JGb3Iod2lkdGgsIGhlaWdodCwgZGF0YVVSTE9wdGlvbnMpIHsKICAgIGNvbnN0IGlkID0gYCR7d2lkdGh9LSR7aGVpZ2h0fWA7CiAgICBpZiAoIk9mZnNjcmVlbkNhbnZhcyIgaW4gZ2xvYmFsVGhpcykgewogICAgICBpZiAodHJhbnNwYXJlbnRCbG9iTWFwLmhhcyhpZCkpIHJldHVybiB0cmFuc3BhcmVudEJsb2JNYXAuZ2V0KGlkKTsKICAgICAgY29uc3Qgb2Zmc2NyZWVuID0gbmV3IE9mZnNjcmVlbkNhbnZhcyh3aWR0aCwgaGVpZ2h0KTsKICAgICAgb2Zmc2NyZWVuLmdldENvbnRleHQoIjJkIik7CiAgICAgIGNvbnN0IGJsb2IgPSBhd2FpdCBvZmZzY3JlZW4uY29udmVydFRvQmxvYihkYXRhVVJMT3B0aW9ucyk7CiAgICAgIGNvbnN0IGFycmF5QnVmZmVyID0gYXdhaXQgYmxvYi5hcnJheUJ1ZmZlcigpOwogICAgICBjb25zdCBiYXNlNjQgPSBlbmNvZGUoYXJyYXlCdWZmZXIpOwogICAgICB0cmFuc3BhcmVudEJsb2JNYXAuc2V0KGlkLCBiYXNlNjQpOwogICAgICByZXR1cm4gYmFzZTY0OwogICAgfSBlbHNlIHsKICAgICAgcmV0dXJuICIiOwogICAgfQogIH0KICBjb25zdCB3b3JrZXIgPSBzZWxmOwogIHdvcmtlci5vbm1lc3NhZ2UgPSBhc3luYyBmdW5jdGlvbihlKSB7CiAgICBpZiAoIk9mZnNjcmVlbkNhbnZhcyIgaW4gZ2xvYmFsVGhpcykgewogICAgICBjb25zdCB7IGlkLCBiaXRtYXAsIHdpZHRoLCBoZWlnaHQsIGRhdGFVUkxPcHRpb25zIH0gPSBlLmRhdGE7CiAgICAgIGNvbnN0IHRyYW5zcGFyZW50QmFzZTY0ID0gZ2V0VHJhbnNwYXJlbnRCbG9iRm9yKAogICAgICAgIHdpZHRoLAogICAgICAgIGhlaWdodCwKICAgICAgICBkYXRhVVJMT3B0aW9ucwogICAgICApOwogICAgICBjb25zdCBvZmZzY3JlZW4gPSBuZXcgT2Zmc2NyZWVuQ2FudmFzKHdpZHRoLCBoZWlnaHQpOwogICAgICBjb25zdCBjdHggPSBvZmZzY3JlZW4uZ2V0Q29udGV4dCgiMmQiKTsKICAgICAgY3R4LmRyYXdJbWFnZShiaXRtYXAsIDAsIDApOwogICAgICBiaXRtYXAuY2xvc2UoKTsKICAgICAgY29uc3QgYmxvYiA9IGF3YWl0IG9mZnNjcmVlbi5jb252ZXJ0VG9CbG9iKGRhdGFVUkxPcHRpb25zKTsKICAgICAgY29uc3QgdHlwZSA9IGJsb2IudHlwZTsKICAgICAgY29uc3QgYXJyYXlCdWZmZXIgPSBhd2FpdCBibG9iLmFycmF5QnVmZmVyKCk7CiAgICAgIGNvbnN0IGJhc2U2NCA9IGVuY29kZShhcnJheUJ1ZmZlcik7CiAgICAgIGlmICghbGFzdEJsb2JNYXAuaGFzKGlkKSAmJiBhd2FpdCB0cmFuc3BhcmVudEJhc2U2NCA9PT0gYmFzZTY0KSB7CiAgICAgICAgbGFzdEJsb2JNYXAuc2V0KGlkLCBiYXNlNjQpOwogICAgICAgIHJldHVybiB3b3JrZXIucG9zdE1lc3NhZ2UoeyBpZCB9KTsKICAgICAgfQogICAgICBpZiAobGFzdEJsb2JNYXAuZ2V0KGlkKSA9PT0gYmFzZTY0KSByZXR1cm4gd29ya2VyLnBvc3RNZXNzYWdlKHsgaWQgfSk7CiAgICAgIHdvcmtlci5wb3N0TWVzc2FnZSh7CiAgICAgICAgaWQsCiAgICAgICAgdHlwZSwKICAgICAgICBiYXNlNjQsCiAgICAgICAgd2lkdGgsCiAgICAgICAgaGVpZ2h0CiAgICAgIH0pOwogICAgICBsYXN0QmxvYk1hcC5zZXQoaWQsIGJhc2U2NCk7CiAgICB9IGVsc2UgewogICAgICByZXR1cm4gd29ya2VyLnBvc3RNZXNzYWdlKHsgaWQ6IGUuZGF0YS5pZCB9KTsKICAgIH0KICB9Owp9KSgpOwovLyMgc291cmNlTWFwcGluZ1VSTD1pbWFnZS1iaXRtYXAtZGF0YS11cmwtd29ya2VyLUlKcEM3Z19iLmpzLm1hcAo=", oS = (r) => Uint8Array.from(atob(r), (e) => e.charCodeAt(0)), Xl = typeof window < "u" && window.Blob && new Blob([oS(dh)], { type: "text/javascript;charset=utf-8" });
function sS(r) {
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
      "data:text/javascript;base64," + dh,
      {
        name: r == null ? void 0 : r.name
      }
    );
  } finally {
    e && (window.URL || window.webkitURL).revokeObjectURL(e);
  }
}
class aS {
  constructor(e) {
    C(this, "pendingCanvasMutations", /* @__PURE__ */ new Map()), C(this, "rafStamps", { latestId: 0, invokeId: null }), C(this, "mirror"), C(this, "mutationCb"), C(this, "resetObservers"), C(this, "frozen", !1), C(this, "locked", !1), C(this, "processMutation", (l, u) => {
      (this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId || !this.rafStamps.invokeId) && (this.rafStamps.invokeId = this.rafStamps.latestId), this.pendingCanvasMutations.has(l) || this.pendingCanvasMutations.set(l, []), this.pendingCanvasMutations.get(l).push(u);
    });
    const {
      sampling: t = "all",
      win: n,
      blockClass: i,
      blockSelector: o,
      recordCanvas: s,
      dataURLOptions: a
    } = e;
    this.mutationCb = e.mutationCb, this.mirror = e.mirror, s && t === "all" && this.initCanvasMutationObserver(n, i, o), s && typeof t == "number" && this.initCanvasFPSObserver(t, n, i, o, {
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
  initCanvasFPSObserver(e, t, n, i, o) {
    const s = Hl(
      t,
      n,
      i,
      !0
    ), a = /* @__PURE__ */ new Map(), l = new sS();
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
            dataURLOptions: o.dataURLOptions
          },
          [b]
        );
      }), f = requestAnimationFrame(h);
    };
    f = requestAnimationFrame(h), this.resetObservers = () => {
      s(), cancelAnimationFrame(f);
    };
  }
  initCanvasMutationObserver(e, t, n) {
    this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher();
    const i = Hl(
      e,
      t,
      n,
      !1
    ), o = rS(
      this.processMutation.bind(this),
      e,
      t,
      n
    ), s = iS(
      this.processMutation.bind(this),
      e,
      t,
      n
    );
    this.resetObservers = () => {
      i(), o(), s();
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
    const i = n.map((s) => {
      const { type: a, ...l } = s;
      return l;
    }), { type: o } = n[0];
    this.mutationCb({ id: t, type: o, commands: i }), this.pendingCanvasMutations.delete(e);
  }
}
class lS {
  constructor(e) {
    C(this, "trackedLinkElements", /* @__PURE__ */ new WeakSet()), C(this, "mutationCb"), C(this, "adoptedStyleSheetCb"), C(this, "styleMirror", new k1()), this.mutationCb = e.mutationCb, this.adoptedStyleSheetCb = e.adoptedStyleSheetCb;
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
    for (const o of e) {
      let s;
      this.styleMirror.has(o) ? s = this.styleMirror.getId(o) : (s = this.styleMirror.add(o), i.push({
        styleId: s,
        rules: Array.from(o.rules || CSSRule, (a, l) => ({
          rule: bc(a, o.href),
          index: l
        }))
      })), n.styleIds.push(s);
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
class uS {
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
let K, Mn, Qi, Kn = !1;
try {
  if (Array.from([1], (r) => r * 2)[0] !== 2) {
    const r = document.createElement("iframe");
    document.body.appendChild(r), Array.from = ((Ja = r.contentWindow) == null ? void 0 : Ja.Array.from) || Array.from, document.body.removeChild(r);
  }
} catch (r) {
  console.debug("Unable to override Array.from", r);
}
const _e = s0();
function zr(r = {}) {
  const {
    emit: e,
    checkoutEveryNms: t,
    checkoutEveryNth: n,
    blockClass: i = "rr-block",
    blockSelector: o = null,
    ignoreClass: s = "rr-ignore",
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
  T1(Ee);
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
  R1();
  let Hs, wi = 0;
  const Ys = (D) => {
    for (const Se of q || [])
      Se.eventProcessor && (D = Se.eventProcessor(D));
    return v && // Disable packing events which will be emitted to parent frames.
    !ge && (D = v(D)), D;
  };
  K = (D, Se) => {
    var X;
    const J = D;
    if (J.timestamp = Xn(), (X = st[0]) != null && X.isFrozen() && J.type !== L.FullSnapshot && !(J.type === L.IncrementalSnapshot && J.data.source === $.Mutation) && st.forEach((ke) => ke.unfreeze()), Q)
      e == null || e(Ys(J), Se);
    else if (ge) {
      const ke = {
        type: "rrweb",
        event: Ys(J),
        origin: window.location.origin,
        isCheckout: Se
      };
      window.parent.postMessage(ke, "*");
    }
    if (J.type === L.FullSnapshot)
      Hs = J, wi = 0;
    else if (J.type === L.IncrementalSnapshot) {
      if (J.data.source === $.Mutation && J.data.isAttachIframe)
        return;
      wi++;
      const ke = n && wi >= n, B = t && J.timestamp - Hs.timestamp > t;
      (ke || B) && Mn(!0);
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
  }, Xs = (D) => K({
    type: L.IncrementalSnapshot,
    data: {
      source: $.Scroll,
      ...D
    }
  }), Js = (D) => K({
    type: L.IncrementalSnapshot,
    data: {
      source: $.CanvasMutation,
      ...D
    }
  }), Eh = (D) => K({
    type: L.IncrementalSnapshot,
    data: {
      source: $.AdoptedStyleSheet,
      ...D
    }
  }), tt = new lS({
    mutationCb: Zr,
    adoptedStyleSheetCb: Eh
  }), rt = new K1({
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
  const vi = new uS();
  Qi = new aS({
    recordCanvas: E,
    mutationCb: Js,
    win: window,
    blockClass: i,
    blockSelector: o,
    mirror: _e,
    sampling: b.canvas,
    dataURLOptions: y
  });
  const jr = new q1({
    mutationCb: Zr,
    scrollCb: Xs,
    bypassOptions: {
      blockClass: i,
      blockSelector: o,
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
      canvasManager: Qi,
      keepIframeSrcFn: k,
      processedNodeManager: vi
    },
    mirror: _e
  });
  Mn = (D = !1) => {
    if (!_)
      return;
    K(
      {
        type: L.Meta,
        data: {
          href: window.location.href,
          width: qf(),
          height: Kf()
        }
      },
      D
    ), tt.reset(), jr.init(), st.forEach((X) => X.lock());
    const Se = O0(document, {
      mirror: _e,
      blockClass: i,
      blockSelector: o,
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
        th(X, _e) && rt.addIframe(X), rh(X, _e) && tt.trackLinkElement(X), ns(X) && jr.addShadowRoot(M.shadowRoot(X), document);
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
          initialOffset: Jf(window)
        }
      },
      D
    ), st.forEach((X) => X.unlock()), document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0 && tt.adoptStyleSheets(
      document.adoptedStyleSheets,
      _e.getId(document)
    );
  };
  try {
    const D = [], Se = (J) => {
      var ke;
      return P(J1)(
        {
          mutationCb: Zr,
          mousemoveCb: (B, bi) => K({
            type: L.IncrementalSnapshot,
            data: {
              source: bi,
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
          scrollCb: Xs,
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
          canvasMutationCb: Js,
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
          ignoreClass: s,
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
          blockSelector: o,
          slimDOMOptions: Re,
          dataURLOptions: y,
          mirror: _e,
          iframeManager: rt,
          stylesheetManager: tt,
          shadowDomManager: jr,
          processedNodeManager: vi,
          canvasManager: Qi,
          ignoreCSSAttributes: me,
          plugins: ((ke = q == null ? void 0 : q.filter((B) => B.observer)) == null ? void 0 : ke.map((B) => ({
            observer: B.observer,
            options: B.options,
            callback: (bi) => K({
              type: L.Plugin,
              data: {
                plugin: B.name,
                payload: bi
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
      Mn(), D.push(Se(document)), Kn = !0;
    };
    return document.readyState === "interactive" || document.readyState === "complete" ? X() : (D.push(
      se("DOMContentLoaded", () => {
        K({
          type: L.DomContentLoaded,
          data: {}
        }), S === "DOMContentLoaded" && X();
      })
    ), D.push(
      se(
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
      D.forEach((J) => J()), vi.destroy(), Kn = !1, D1();
    };
  } catch (D) {
    console.warn(D);
  }
}
zr.addCustomEvent = (r, e) => {
  if (!Kn)
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
  st.forEach((r) => r.freeze());
};
zr.takeFullSnapshot = (r) => {
  if (!Kn)
    throw new Error("please take full snapshot after start recording");
  Mn(r);
};
zr.mirror = _e;
var Jl;
(function(r) {
  r[r.NotStarted = 0] = "NotStarted", r[r.Running = 1] = "Running", r[r.Stopped = 2] = "Stopped";
})(Jl || (Jl = {}));
function cS(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var _n = {}, eo, Kl;
function fS() {
  if (Kl) return eo;
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
  function o(h) {
    return h && h !== e && i("Expected '" + h + "' instead of '" + e + "'"), e = n.charAt(r), r += 1, e;
  }
  function s() {
    var h, p = "";
    for (e === "-" && (p = "-", o("-")); e >= "0" && e <= "9"; )
      p += e, o();
    if (e === ".")
      for (p += "."; o() && e >= "0" && e <= "9"; )
        p += e;
    if (e === "e" || e === "E")
      for (p += e, o(), (e === "-" || e === "+") && (p += e, o()); e >= "0" && e <= "9"; )
        p += e, o();
    return h = Number(p), isFinite(h) || i("Bad number"), h;
  }
  function a() {
    var h, p, m = "", g;
    if (e === '"')
      for (; o(); ) {
        if (e === '"')
          return o(), m;
        if (e === "\\")
          if (o(), e === "u") {
            for (g = 0, p = 0; p < 4 && (h = parseInt(o(), 16), !!isFinite(h)); p += 1)
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
      o();
  }
  function u() {
    switch (e) {
      case "t":
        return o("t"), o("r"), o("u"), o("e"), !0;
      case "f":
        return o("f"), o("a"), o("l"), o("s"), o("e"), !1;
      case "n":
        return o("n"), o("u"), o("l"), o("l"), null;
      default:
        i("Unexpected '" + e + "'");
    }
  }
  function c() {
    var h = [];
    if (e === "[") {
      if (o("["), l(), e === "]")
        return o("]"), h;
      for (; e; ) {
        if (h.push(d()), l(), e === "]")
          return o("]"), h;
        o(","), l();
      }
    }
    i("Bad array");
  }
  function f() {
    var h, p = {};
    if (e === "{") {
      if (o("{"), l(), e === "}")
        return o("}"), p;
      for (; e; ) {
        if (h = a(), l(), o(":"), Object.prototype.hasOwnProperty.call(p, h) && i('Duplicate key "' + h + '"'), p[h] = d(), l(), e === "}")
          return o("}"), p;
        o(","), l();
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
        return s();
      default:
        return e >= "0" && e <= "9" ? s() : u();
    }
  }
  return eo = function(h, p) {
    var m;
    return n = h, r = 0, e = " ", m = d(), l(), e && i("Syntax error"), typeof p == "function" ? function g(v, b) {
      var y, w, _ = v[b];
      if (_ && typeof _ == "object")
        for (y in d)
          Object.prototype.hasOwnProperty.call(_, y) && (w = g(_, y), typeof w > "u" ? delete _[y] : _[y] = w);
      return p.call(v, b, _);
    }({ "": m }, "") : m;
  }, eo;
}
var to, ql;
function hS() {
  if (ql) return to;
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
  function o(a) {
    return r.lastIndex = 0, r.test(a) ? '"' + a.replace(r, function(l) {
      var u = n[l];
      return typeof u == "string" ? u : "\\u" + ("0000" + l.charCodeAt(0).toString(16)).slice(-4);
    }) + '"' : '"' + a + '"';
  }
  function s(a, l) {
    var u, c, f, d, h = e, p, m = l[a];
    switch (m && typeof m == "object" && typeof m.toJSON == "function" && (m = m.toJSON(a)), typeof i == "function" && (m = i.call(l, a, m)), typeof m) {
      case "string":
        return o(m);
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
            p[u] = s(u, m) || "null";
          return f = p.length === 0 ? "[]" : e ? `[
` + e + p.join(`,
` + e) + `
` + h + "]" : "[" + p.join(",") + "]", e = h, f;
        }
        if (i && typeof i == "object")
          for (d = i.length, u = 0; u < d; u += 1)
            c = i[u], typeof c == "string" && (f = s(c, m), f && p.push(o(c) + (e ? ": " : ":") + f));
        else
          for (c in m)
            Object.prototype.hasOwnProperty.call(m, c) && (f = s(c, m), f && p.push(o(c) + (e ? ": " : ":") + f));
        return f = p.length === 0 ? "{}" : e ? `{
` + e + p.join(`,
` + e) + `
` + h + "}" : "{" + p.join(",") + "}", e = h, f;
    }
  }
  return to = function(a, l, u) {
    var c;
    if (e = "", t = "", typeof u == "number")
      for (c = 0; c < u; c += 1)
        t += " ";
    else typeof u == "string" && (t = u);
    if (i = l, l && typeof l != "function" && (typeof l != "object" || typeof l.length != "number"))
      throw new Error("JSON.stringify");
    return s("", { "": a });
  }, to;
}
var Ql;
function dS() {
  return Ql || (Ql = 1, _n.parse = fS(), _n.stringify = hS()), _n;
}
var pS = {}.toString, mS = Array.isArray || function(r) {
  return pS.call(r) == "[object Array]";
}, eu = Object.prototype.toString, ph = function(e) {
  var t = eu.call(e), n = t === "[object Arguments]";
  return n || (n = t !== "[object Array]" && e !== null && typeof e == "object" && typeof e.length == "number" && e.length >= 0 && eu.call(e.callee) === "[object Function]"), n;
}, ro, tu;
function gS() {
  if (tu) return ro;
  tu = 1;
  var r;
  if (!Object.keys) {
    var e = Object.prototype.hasOwnProperty, t = Object.prototype.toString, n = ph, i = Object.prototype.propertyIsEnumerable, o = !i.call({ toString: null }, "toString"), s = i.call(function() {
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
      var y = s && m;
      if (v && h.length > 0 && !e.call(h, 0))
        for (var w = 0; w < h.length; ++w)
          b.push(String(w));
      if (g && h.length > 0)
        for (var _ = 0; _ < h.length; ++_)
          b.push(String(_));
      else
        for (var E in h)
          !(y && E === "prototype") && e.call(h, E) && b.push(String(E));
      if (o)
        for (var x = f(h), S = 0; S < a.length; ++S)
          !(x && a[S] === "constructor") && e.call(h, a[S]) && b.push(a[S]);
      return b;
    };
  }
  return ro = r, ro;
}
var yS = Array.prototype.slice, wS = ph, ru = Object.keys, $n = ru ? function(e) {
  return ru(e);
} : gS(), nu = Object.keys;
$n.shim = function() {
  if (Object.keys) {
    var e = function() {
      var t = Object.keys(arguments);
      return t && t.length === arguments.length;
    }(1, 2);
    e || (Object.keys = function(n) {
      return wS(n) ? nu(yS.call(n)) : nu(n);
    });
  } else
    Object.keys = $n;
  return Object.keys || $n;
};
var vS = $n, mh = { exports: {} }, gh = Object, bS = Error, SS = EvalError, _S = RangeError, xS = ReferenceError, yh = SyntaxError, pi = TypeError, CS = URIError, IS = Math.abs, AS = Math.floor, ES = Math.max, RS = Math.min, kS = Math.pow, OS = Math.round, MS = Number.isNaN || function(e) {
  return e !== e;
}, $S = MS, NS = function(e) {
  return $S(e) || e === 0 ? e : e < 0 ? -1 : 1;
}, PS = Object.getOwnPropertyDescriptor, Nn = PS;
if (Nn)
  try {
    Nn([], "length");
  } catch {
    Nn = null;
  }
var mi = Nn, Pn = Object.defineProperty || !1;
if (Pn)
  try {
    Pn({}, "a", { value: 1 });
  } catch {
    Pn = !1;
  }
var gi = Pn, no, iu;
function LS() {
  return iu || (iu = 1, no = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
      return !1;
    if (typeof Symbol.iterator == "symbol")
      return !0;
    var e = {}, t = Symbol("test"), n = Object(t);
    if (typeof t == "string" || Object.prototype.toString.call(t) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]")
      return !1;
    var i = 42;
    e[t] = i;
    for (var o in e)
      return !1;
    if (typeof Object.keys == "function" && Object.keys(e).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0)
      return !1;
    var s = Object.getOwnPropertySymbols(e);
    if (s.length !== 1 || s[0] !== t || !Object.prototype.propertyIsEnumerable.call(e, t))
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
  }), no;
}
var io, ou;
function TS() {
  if (ou) return io;
  ou = 1;
  var r = typeof Symbol < "u" && Symbol, e = LS();
  return io = function() {
    return typeof r != "function" || typeof Symbol != "function" || typeof r("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : e();
  }, io;
}
var oo, su;
function wh() {
  return su || (su = 1, oo = typeof Reflect < "u" && Reflect.getPrototypeOf || null), oo;
}
var so, au;
function vh() {
  if (au) return so;
  au = 1;
  var r = gh;
  return so = r.getPrototypeOf || null, so;
}
var DS = "Function.prototype.bind called on incompatible ", FS = Object.prototype.toString, zS = Math.max, US = "[object Function]", lu = function(e, t) {
  for (var n = [], i = 0; i < e.length; i += 1)
    n[i] = e[i];
  for (var o = 0; o < t.length; o += 1)
    n[o + e.length] = t[o];
  return n;
}, BS = function(e, t) {
  for (var n = [], i = t, o = 0; i < e.length; i += 1, o += 1)
    n[o] = e[i];
  return n;
}, WS = function(r, e) {
  for (var t = "", n = 0; n < r.length; n += 1)
    t += r[n], n + 1 < r.length && (t += e);
  return t;
}, ZS = function(e) {
  var t = this;
  if (typeof t != "function" || FS.apply(t) !== US)
    throw new TypeError(DS + t);
  for (var n = BS(arguments, 1), i, o = function() {
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
  }, s = zS(0, t.length - n.length), a = [], l = 0; l < s; l++)
    a[l] = "$" + l;
  if (i = Function("binder", "return function (" + WS(a, ",") + "){ return binder.apply(this,arguments); }")(o), t.prototype) {
    var u = function() {
    };
    u.prototype = t.prototype, i.prototype = new u(), u.prototype = null;
  }
  return i;
}, jS = ZS, Ur = Function.prototype.bind || jS, js = Function.prototype.call, Gs = Function.prototype.apply, GS = typeof Reflect < "u" && Reflect && Reflect.apply, VS = Ur, HS = Gs, YS = js, XS = GS, bh = XS || VS.call(YS, HS), JS = Ur, KS = pi, qS = js, QS = bh, Vs = function(e) {
  if (e.length < 1 || typeof e[0] != "function")
    throw new KS("a function is required");
  return QS(JS, qS, e);
}, ao, uu;
function e_() {
  if (uu) return ao;
  uu = 1;
  var r = Vs, e = mi, t;
  try {
    t = /** @type {{ __proto__?: typeof Array.prototype }} */
    [].__proto__ === Array.prototype;
  } catch (s) {
    if (!s || typeof s != "object" || !("code" in s) || s.code !== "ERR_PROTO_ACCESS")
      throw s;
  }
  var n = !!t && e && e(
    Object.prototype,
    /** @type {keyof typeof Object.prototype} */
    "__proto__"
  ), i = Object, o = i.getPrototypeOf;
  return ao = n && typeof n.get == "function" ? r([n.get]) : typeof o == "function" ? (
    /** @type {import('./get')} */
    function(a) {
      return o(a == null ? a : i(a));
    }
  ) : !1, ao;
}
var lo, cu;
function t_() {
  if (cu) return lo;
  cu = 1;
  var r = wh(), e = vh(), t = e_();
  return lo = r ? function(i) {
    return r(i);
  } : e ? function(i) {
    if (!i || typeof i != "object" && typeof i != "function")
      throw new TypeError("getProto: not an object");
    return e(i);
  } : t ? function(i) {
    return t(i);
  } : null, lo;
}
var uo, fu;
function r_() {
  if (fu) return uo;
  fu = 1;
  var r = Function.prototype.call, e = Object.prototype.hasOwnProperty, t = Ur;
  return uo = t.call(r, e), uo;
}
var O, n_ = gh, i_ = bS, o_ = SS, s_ = _S, a_ = xS, Zt = yh, Nt = pi, l_ = CS, u_ = IS, c_ = AS, f_ = ES, h_ = RS, d_ = kS, p_ = OS, m_ = NS, Sh = Function, co = function(r) {
  try {
    return Sh('"use strict"; return (' + r + ").constructor;")();
  } catch {
  }
}, Ar = mi, g_ = gi, fo = function() {
  throw new Nt();
}, y_ = Ar ? function() {
  try {
    return arguments.callee, fo;
  } catch {
    try {
      return Ar(arguments, "callee").get;
    } catch {
      return fo;
    }
  }
}() : fo, _t = TS()(), te = t_(), w_ = vh(), v_ = wh(), _h = Gs, Br = js, At = {}, b_ = typeof Uint8Array > "u" || !te ? O : te(Uint8Array), at = {
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
  "%Error%": i_,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": o_,
  "%Float32Array%": typeof Float32Array > "u" ? O : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? O : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? O : FinalizationRegistry,
  "%Function%": Sh,
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
  "%Object%": n_,
  "%Object.getOwnPropertyDescriptor%": Ar,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? O : Promise,
  "%Proxy%": typeof Proxy > "u" ? O : Proxy,
  "%RangeError%": s_,
  "%ReferenceError%": a_,
  "%Reflect%": typeof Reflect > "u" ? O : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? O : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !_t || !te ? O : te((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? O : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": _t && te ? te(""[Symbol.iterator]()) : O,
  "%Symbol%": _t ? Symbol : O,
  "%SyntaxError%": Zt,
  "%ThrowTypeError%": y_,
  "%TypedArray%": b_,
  "%TypeError%": Nt,
  "%Uint8Array%": typeof Uint8Array > "u" ? O : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? O : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? O : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? O : Uint32Array,
  "%URIError%": l_,
  "%WeakMap%": typeof WeakMap > "u" ? O : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? O : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? O : WeakSet,
  "%Function.prototype.call%": Br,
  "%Function.prototype.apply%": _h,
  "%Object.defineProperty%": g_,
  "%Object.getPrototypeOf%": w_,
  "%Math.abs%": u_,
  "%Math.floor%": c_,
  "%Math.max%": f_,
  "%Math.min%": h_,
  "%Math.pow%": d_,
  "%Math.round%": p_,
  "%Math.sign%": m_,
  "%Reflect.getPrototypeOf%": v_
};
if (te)
  try {
    null.error;
  } catch (r) {
    var S_ = te(te(r));
    at["%Error.prototype%"] = S_;
  }
var __ = function r(e) {
  var t;
  if (e === "%AsyncFunction%")
    t = co("async function () {}");
  else if (e === "%GeneratorFunction%")
    t = co("function* () {}");
  else if (e === "%AsyncGeneratorFunction%")
    t = co("async function* () {}");
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
}, Wr = Ur, qn = r_(), x_ = Wr.call(Br, Array.prototype.concat), C_ = Wr.call(_h, Array.prototype.splice), du = Wr.call(Br, String.prototype.replace), Qn = Wr.call(Br, String.prototype.slice), I_ = Wr.call(Br, RegExp.prototype.exec), A_ = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, E_ = /\\(\\)?/g, R_ = function(e) {
  var t = Qn(e, 0, 1), n = Qn(e, -1);
  if (t === "%" && n !== "%")
    throw new Zt("invalid intrinsic syntax, expected closing `%`");
  if (n === "%" && t !== "%")
    throw new Zt("invalid intrinsic syntax, expected opening `%`");
  var i = [];
  return du(e, A_, function(o, s, a, l) {
    i[i.length] = a ? du(l, E_, "$1") : s || o;
  }), i;
}, k_ = function(e, t) {
  var n = e, i;
  if (qn(hu, n) && (i = hu[n], n = "%" + i[0] + "%"), qn(at, n)) {
    var o = at[n];
    if (o === At && (o = __(n)), typeof o > "u" && !t)
      throw new Nt("intrinsic " + e + " exists, but is not available. Please file an issue!");
    return {
      alias: i,
      name: n,
      value: o
    };
  }
  throw new Zt("intrinsic " + e + " does not exist!");
}, xh = function(e, t) {
  if (typeof e != "string" || e.length === 0)
    throw new Nt("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof t != "boolean")
    throw new Nt('"allowMissing" argument must be a boolean');
  if (I_(/^%?[^%]*%?$/, e) === null)
    throw new Zt("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var n = R_(e), i = n.length > 0 ? n[0] : "", o = k_("%" + i + "%", t), s = o.name, a = o.value, l = !1, u = o.alias;
  u && (i = u[0], C_(n, x_([0, 1], u)));
  for (var c = 1, f = !0; c < n.length; c += 1) {
    var d = n[c], h = Qn(d, 0, 1), p = Qn(d, -1);
    if ((h === '"' || h === "'" || h === "`" || p === '"' || p === "'" || p === "`") && h !== p)
      throw new Zt("property names with quotes must have matching quotes");
    if ((d === "constructor" || !f) && (l = !0), i += "." + d, s = "%" + i + "%", qn(at, s))
      a = at[s];
    else if (a != null) {
      if (!(d in a)) {
        if (!t)
          throw new Nt("base intrinsic for " + e + " exists, but the property is not available.");
        return;
      }
      if (Ar && c + 1 >= n.length) {
        var m = Ar(a, d);
        f = !!m, f && "get" in m && !("originalValue" in m.get) ? a = m.get : a = a[d];
      } else
        f = qn(a, d), a = a[d];
      f && !l && (at[s] = a);
    }
  }
  return a;
}, pu = gi, O_ = yh, xt = pi, mu = mi, M_ = function(e, t, n) {
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
  var i = arguments.length > 3 ? arguments[3] : null, o = arguments.length > 4 ? arguments[4] : null, s = arguments.length > 5 ? arguments[5] : null, a = arguments.length > 6 ? arguments[6] : !1, l = !!mu && mu(e, t);
  if (pu)
    pu(e, t, {
      configurable: s === null && l ? l.configurable : !s,
      enumerable: i === null && l ? l.enumerable : !i,
      value: n,
      writable: o === null && l ? l.writable : !o
    });
  else if (a || !i && !o && !s)
    e[t] = n;
  else
    throw new O_("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
}, os = gi, Ch = function() {
  return !!os;
};
Ch.hasArrayLengthDefineBug = function() {
  if (!os)
    return null;
  try {
    return os([], "length", { value: 1 }).length !== 1;
  } catch {
    return !0;
  }
};
var $_ = Ch, N_ = xh, gu = M_, P_ = $_(), yu = mi, wu = pi, L_ = N_("%Math.floor%"), T_ = function(e, t) {
  if (typeof e != "function")
    throw new wu("`fn` is not a function");
  if (typeof t != "number" || t < 0 || t > 4294967295 || L_(t) !== t)
    throw new wu("`length` must be a positive 32-bit integer");
  var n = arguments.length > 2 && !!arguments[2], i = !0, o = !0;
  if ("length" in e && yu) {
    var s = yu(e, "length");
    s && !s.configurable && (i = !1), s && !s.writable && (o = !1);
  }
  return (i || o || !n) && (P_ ? gu(
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
}, D_ = Ur, F_ = Gs, z_ = bh, U_ = function() {
  return z_(D_, F_, arguments);
};
(function(r) {
  var e = T_, t = gi, n = Vs, i = U_;
  r.exports = function(s) {
    var a = n(arguments), l = s.length - (arguments.length - 1);
    return e(
      a,
      1 + (l > 0 ? l : 0),
      !0
    );
  }, t ? t(r.exports, "apply", { value: i }) : r.exports.apply = i;
})(mh);
var B_ = mh.exports, Ih = xh, Ah = Vs, W_ = Ah([Ih("%String.prototype.indexOf%")]), Z_ = function(e, t) {
  var n = (
    /** @type {Parameters<typeof callBindBasic>[0][0]} */
    Ih(e, !!t)
  );
  return typeof n == "function" && W_(e, ".prototype.") > -1 ? Ah([n]) : n;
}, xn = (typeof JSON < "u" ? JSON : dS()).stringify, j_ = mS, G_ = vS, V_ = B_, yi = Z_, vu = yi("Array.prototype.join"), bu = yi("Array.prototype.indexOf"), H_ = yi("Array.prototype.splice"), Y_ = yi("Array.prototype.sort"), Su = function(e, t) {
  for (var n = "", i = 0; i < e; i += 1)
    n += t;
  return n;
}, X_ = function(r, e, t) {
  return t;
}, J_ = function(e) {
  var t = arguments.length > 1 ? arguments[1] : void 0, n = t && t.space || "";
  typeof n == "number" && (n = Su(n, " "));
  var i = !!t && typeof t.cycles == "boolean" && t.cycles, o = t && t.replacer ? V_(t.replacer) : X_, s = typeof t == "function" ? t : t && t.cmp, a = s && function(u) {
    var c = (
      /** @type {NonNullable<typeof cmpOpt>} */
      s.length > 2 && /** @type {import('.').Getter['get']} */
      function(d) {
        return u[d];
      }
    );
    return function(f, d) {
      return (
        /** @type {NonNullable<typeof cmpOpt>} */
        s(
          { key: f, value: u[f] },
          { key: d, value: u[d] },
          // @ts-expect-error TS doesn't understand the optimization used here
          c ? (
            /** @type {import('.').Getter} */
            { __proto__: null, get: c }
          ) : void 0
        )
      );
    };
  }, l = [];
  return (
    /** @type {(parent: import('.').Node, key: string | number, node: unknown, level: number) => string | undefined} */
    function u(c, f, d, h) {
      var p = n ? `
` + Su(h, n) : "", m = n ? ": " : ":";
      if (d && /** @type {{ toJSON?: unknown }} */
      d.toJSON && typeof /** @type {{ toJSON?: unknown }} */
      d.toJSON == "function" && (d = /** @type {{ toJSON: Function }} */
      d.toJSON()), d = o(c, f, d), d !== void 0) {
        if (typeof d != "object" || d === null)
          return xn(d);
        if (j_(d)) {
          for (var y = [], g = 0; g < d.length; g++) {
            var v = u(d, g, d[g], h + 1) || xn(null);
            y[y.length] = p + n + v;
          }
          return "[" + vu(y, ",") + p + "]";
        }
        if (bu(l, d) !== -1) {
          if (i)
            return xn("__cycle__");
          throw new TypeError("Converting circular structure to JSON");
        } else
          l[l.length] = /** @type {import('.').NonArrayNode} */
          d;
        for (var b = Y_(G_(d), a && a(
          /** @type {import('.').NonArrayNode} */
          d
        )), y = [], g = 0; g < b.length; g++) {
          var f = b[g], w = u(
            /** @type {import('.').Node} */
            d,
            f,
            /** @type {import('.').NonArrayNode} */
            d[f],
            h + 1
          );
          if (w) {
            var _ = xn(f) + m + w;
            y[y.length] = p + n + _;
          }
        }
        return H_(l, bu(l, d), 1), "{" + vu(y, ",") + p + "}";
      }
    }({ "": e }, "", e, 0)
  );
};
const K_ = /* @__PURE__ */ cS(J_), q_ = zp.load();
class Q_ {
  constructor(e, t) {
    this.events = [], this.sessionId = e, this.trackServerUrl = t, setInterval(() => this.submit(), 5 * 1e3);
  }
  start() {
    zr({
      emit: (e) => {
        this.events.push(e);
      }
    });
  }
  async submit() {
    if (this.events.length === 0)
      return;
    const e = Dy.gzip(K_(this.events));
    await fetch(`${this.trackServerUrl}/api/session_replay/${this.sessionId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/octet-stream",
        "Content-Encoding": "gzip"
      },
      body: e
    }).catch((t) => {
      console.error("Failed to submit events", t);
    }), this.events = [];
  }
  catch(e) {
    console.error("Error compressing events data", e);
  }
}
class ex {
  constructor(e, t) {
    this.sessionInfoId = e, this.errorLogServerUrl = t, this.initialize();
  }
  initialize() {
    window.addEventListener("error", (e) => this.logError(e, "unhandled-error")), window.addEventListener("unhandledrejection", (e) => this.logError(e, "unhandled-rejection"));
  }
  async logError(e, t) {
    var l, u, c;
    const n = t === "unhandled-rejection" ? ((l = e.reason) == null ? void 0 : l.message) || "Unknown promise rejection" : e.message || "Unknown error", i = t === "unhandled-rejection" ? ((u = e.reason) == null ? void 0 : u.stack) || "No stack trace available" : ((c = e.error) == null ? void 0 : c.stack) || "No stack trace available", o = t === "unhandled-rejection" ? document.location.href : e.filename || document.location.href, s = document.location.href, a = {
      sessionInfoId: this.sessionInfoId,
      errorPayload: n,
      stackTrace: i,
      routePath: s,
      originPath: o,
      type: t
    };
    console.error("Captured Error:", a);
    try {
      await fetch(`${this.errorLogServerUrl}/api/error_logs/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify([a])
      });
    } catch (f) {
      console.error("Failed to log error to server:", f);
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
    this.networkLogs.length !== 0 && fetch(`${this.trackServerUrl}/api/network_logs/`, {
      method: "POST",
      body: JSON.stringify(this.networkLogs)
    }).then((e) => e.json()).then((e) => {
      this.networkLogs = Array();
    });
  }
  attachXMLHttpRequestInterceptor() {
    const e = XMLHttpRequest.prototype.open, t = XMLHttpRequest.prototype.send;
    XMLHttpRequest.prototype.open = function(i, o) {
      this.__relay_method = i, this.__relay_url = o, this.__relay_start = Date.now(), e.apply(this, arguments);
    };
    const n = this;
    XMLHttpRequest.prototype.send = function(i) {
      const o = this;
      o.__payload = i;
      const s = o.status;
      o.addEventListener("loadend", function() {
        const a = Date.now() - o.__relay_start, l = {
          method: o.__relay_method,
          url: o.__relay_url,
          body: o.__payload,
          statusCode: s,
          timeTaken: a,
          sessionInfoId: n.sessionId
        };
        o.__relay_url.includes(n.trackServerUrl) || n.networkLogs.push(l);
      }), t.apply(this, arguments);
    };
  }
  attachFetchInterceptor() {
    if (this.originalFetch) {
      const e = this, t = this.originalFetch;
      window.fetch = async function(...n) {
        const [i, o] = n, s = (o == null ? void 0 : o.method) || "GET", a = (o == null ? void 0 : o.body) || null, l = Date.now(), u = await t.apply(this, n), c = Date.now() - l, f = u.status, d = u.headers.get("content-type"), h = {
          url: i,
          method: s,
          body: a,
          timeTaken: c,
          statusCode: f,
          sessionInfoId: e.sessionId,
          contentType: d
        };
        return i.includes(e.trackServerUrl) || e.networkLogs.push(h), u;
      };
    }
  }
};
Si(Ot, "instance");
let ss = Ot;
const Mt = class Mt {
  constructor(e, t) {
    if (Mt.instance)
      return Mt.instance;
    this.projectId = t, this.sessionId = null, this.trackServerUrl = e, this.getOrCreateSession().then(() => {
      this.interceptor = new ss(this.sessionId, this.trackServerUrl), this.sessionReplay = new Q_(this.sessionId, this.trackServerUrl), this.errorTracker = new ex(this.sessionId, this.trackServerUrl), this.sessionReplay.start(), Mt.instance = this;
    });
  }
  getOrCreateSession() {
    return new Promise(async (e, t) => {
      console.log("Getting or creating session");
      const n = localStorage.getItem("relayActivityTime"), i = localStorage.getItem("relaySessionId");
      if (i && n && (/* @__PURE__ */ new Date()).getTime() - n < 0.5 * 60 * 60 * 1e3) {
        console.log("Session found in local storage"), this.sessionId = i, e(this.sessionId);
        return;
      }
      const a = await (await q_).get();
      fetch(`${this.trackServerUrl}/api/session_info/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ projectId: this.projectId, session: "session", visitorId: a.visitorId })
      }).then((l) => l.json()).then((l) => {
        console.log("Session created", l), this.sessionId = l.sessionId, localStorage.setItem("relaySessionId", this.sessionId), localStorage.setItem("relayActivityTime", (/* @__PURE__ */ new Date()).getTime()), e(this.sessionId);
      }).catch((l) => {
        console.error("Failed to create session", l), t(l);
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
Si(Mt, "instance");
let as = Mt;
function tx(r, e = "https://goldfish-app-wfdz2.ondigitalocean.app") {
  return new as(e, r);
}
typeof window < "u" && typeof window.relayInit > "u" && (window.relayInit = tx);
export {
  tx as relayInit
};
