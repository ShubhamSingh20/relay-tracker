var _c = Object.defineProperty;
var vc = (r, e, t) => e in r ? _c(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var Ki = (r, e, t) => vc(r, typeof e != "symbol" ? e + "" : e, t);
/*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */
function Rt(r) {
  let e = r.length;
  for (; --e >= 0; )
    r[e] = 0;
}
const Sc = 0, Rl = 1, xc = 2, Cc = 3, Ic = 258, Ms = 29, cr = 256, Ht = cr + 1 + Ms, yt = 30, Ns = 19, kl = 2 * Ht + 1, Ge = 15, qi = 16, Ac = 7, Ps = 256, $l = 16, Ml = 17, Nl = 18, Un = (
  /* extra bits for each length code */
  new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0])
), ri = (
  /* extra bits for each distance code */
  new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13])
), Ec = (
  /* extra bits for each bit length code */
  new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7])
), Pl = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), Oc = 512, ke = new Array((Ht + 2) * 2);
Rt(ke);
const Ut = new Array(yt * 2);
Rt(Ut);
const Vt = new Array(Oc);
Rt(Vt);
const Yt = new Array(Ic - Cc + 1);
Rt(Yt);
const Ts = new Array(Ms);
Rt(Ts);
const hi = new Array(yt);
Rt(hi);
function Qi(r, e, t, i, n) {
  this.static_tree = r, this.extra_bits = e, this.extra_base = t, this.elems = i, this.max_length = n, this.has_stree = r && r.length;
}
let Tl, Dl, Ll;
function en(r, e) {
  this.dyn_tree = r, this.max_code = 0, this.stat_desc = e;
}
const Fl = (r) => r < 256 ? Vt[r] : Vt[256 + (r >>> 7)], Jt = (r, e) => {
  r.pending_buf[r.pending++] = e & 255, r.pending_buf[r.pending++] = e >>> 8 & 255;
}, ae = (r, e, t) => {
  r.bi_valid > qi - t ? (r.bi_buf |= e << r.bi_valid & 65535, Jt(r, r.bi_buf), r.bi_buf = e >> qi - r.bi_valid, r.bi_valid += t - qi) : (r.bi_buf |= e << r.bi_valid & 65535, r.bi_valid += t);
}, Ie = (r, e, t) => {
  ae(
    r,
    t[e * 2],
    t[e * 2 + 1]
    /*.Len*/
  );
}, zl = (r, e) => {
  let t = 0;
  do
    t |= r & 1, r >>>= 1, t <<= 1;
  while (--e > 0);
  return t >>> 1;
}, Rc = (r) => {
  r.bi_valid === 16 ? (Jt(r, r.bi_buf), r.bi_buf = 0, r.bi_valid = 0) : r.bi_valid >= 8 && (r.pending_buf[r.pending++] = r.bi_buf & 255, r.bi_buf >>= 8, r.bi_valid -= 8);
}, kc = (r, e) => {
  const t = e.dyn_tree, i = e.max_code, n = e.stat_desc.static_tree, s = e.stat_desc.has_stree, o = e.stat_desc.extra_bits, a = e.stat_desc.extra_base, l = e.stat_desc.max_length;
  let u, f, d, h, c, p, g = 0;
  for (h = 0; h <= Ge; h++)
    r.bl_count[h] = 0;
  for (t[r.heap[r.heap_max] * 2 + 1] = 0, u = r.heap_max + 1; u < kl; u++)
    f = r.heap[u], h = t[t[f * 2 + 1] * 2 + 1] + 1, h > l && (h = l, g++), t[f * 2 + 1] = h, !(f > i) && (r.bl_count[h]++, c = 0, f >= a && (c = o[f - a]), p = t[f * 2], r.opt_len += p * (h + c), s && (r.static_len += p * (n[f * 2 + 1] + c)));
  if (g !== 0) {
    do {
      for (h = l - 1; r.bl_count[h] === 0; )
        h--;
      r.bl_count[h]--, r.bl_count[h + 1] += 2, r.bl_count[l]--, g -= 2;
    } while (g > 0);
    for (h = l; h !== 0; h--)
      for (f = r.bl_count[h]; f !== 0; )
        d = r.heap[--u], !(d > i) && (t[d * 2 + 1] !== h && (r.opt_len += (h - t[d * 2 + 1]) * t[d * 2], t[d * 2 + 1] = h), f--);
  }
}, Ul = (r, e, t) => {
  const i = new Array(Ge + 1);
  let n = 0, s, o;
  for (s = 1; s <= Ge; s++)
    n = n + t[s - 1] << 1, i[s] = n;
  for (o = 0; o <= e; o++) {
    let a = r[o * 2 + 1];
    a !== 0 && (r[o * 2] = zl(i[a]++, a));
  }
}, $c = () => {
  let r, e, t, i, n;
  const s = new Array(Ge + 1);
  for (t = 0, i = 0; i < Ms - 1; i++)
    for (Ts[i] = t, r = 0; r < 1 << Un[i]; r++)
      Yt[t++] = i;
  for (Yt[t - 1] = i, n = 0, i = 0; i < 16; i++)
    for (hi[i] = n, r = 0; r < 1 << ri[i]; r++)
      Vt[n++] = i;
  for (n >>= 7; i < yt; i++)
    for (hi[i] = n << 7, r = 0; r < 1 << ri[i] - 7; r++)
      Vt[256 + n++] = i;
  for (e = 0; e <= Ge; e++)
    s[e] = 0;
  for (r = 0; r <= 143; )
    ke[r * 2 + 1] = 8, r++, s[8]++;
  for (; r <= 255; )
    ke[r * 2 + 1] = 9, r++, s[9]++;
  for (; r <= 279; )
    ke[r * 2 + 1] = 7, r++, s[7]++;
  for (; r <= 287; )
    ke[r * 2 + 1] = 8, r++, s[8]++;
  for (Ul(ke, Ht + 1, s), r = 0; r < yt; r++)
    Ut[r * 2 + 1] = 5, Ut[r * 2] = zl(r, 5);
  Tl = new Qi(ke, Un, cr + 1, Ht, Ge), Dl = new Qi(Ut, ri, 0, yt, Ge), Ll = new Qi(new Array(0), Ec, 0, Ns, Ac);
}, Bl = (r) => {
  let e;
  for (e = 0; e < Ht; e++)
    r.dyn_ltree[e * 2] = 0;
  for (e = 0; e < yt; e++)
    r.dyn_dtree[e * 2] = 0;
  for (e = 0; e < Ns; e++)
    r.bl_tree[e * 2] = 0;
  r.dyn_ltree[Ps * 2] = 1, r.opt_len = r.static_len = 0, r.sym_next = r.matches = 0;
}, jl = (r) => {
  r.bi_valid > 8 ? Jt(r, r.bi_buf) : r.bi_valid > 0 && (r.pending_buf[r.pending++] = r.bi_buf), r.bi_buf = 0, r.bi_valid = 0;
}, bo = (r, e, t, i) => {
  const n = e * 2, s = t * 2;
  return r[n] < r[s] || r[n] === r[s] && i[e] <= i[t];
}, tn = (r, e, t) => {
  const i = r.heap[t];
  let n = t << 1;
  for (; n <= r.heap_len && (n < r.heap_len && bo(e, r.heap[n + 1], r.heap[n], r.depth) && n++, !bo(e, i, r.heap[n], r.depth)); )
    r.heap[t] = r.heap[n], t = n, n <<= 1;
  r.heap[t] = i;
}, _o = (r, e, t) => {
  let i, n, s = 0, o, a;
  if (r.sym_next !== 0)
    do
      i = r.pending_buf[r.sym_buf + s++] & 255, i += (r.pending_buf[r.sym_buf + s++] & 255) << 8, n = r.pending_buf[r.sym_buf + s++], i === 0 ? Ie(r, n, e) : (o = Yt[n], Ie(r, o + cr + 1, e), a = Un[o], a !== 0 && (n -= Ts[o], ae(r, n, a)), i--, o = Fl(i), Ie(r, o, t), a = ri[o], a !== 0 && (i -= hi[o], ae(r, i, a)));
    while (s < r.sym_next);
  Ie(r, Ps, e);
}, Bn = (r, e) => {
  const t = e.dyn_tree, i = e.stat_desc.static_tree, n = e.stat_desc.has_stree, s = e.stat_desc.elems;
  let o, a, l = -1, u;
  for (r.heap_len = 0, r.heap_max = kl, o = 0; o < s; o++)
    t[o * 2] !== 0 ? (r.heap[++r.heap_len] = l = o, r.depth[o] = 0) : t[o * 2 + 1] = 0;
  for (; r.heap_len < 2; )
    u = r.heap[++r.heap_len] = l < 2 ? ++l : 0, t[u * 2] = 1, r.depth[u] = 0, r.opt_len--, n && (r.static_len -= i[u * 2 + 1]);
  for (e.max_code = l, o = r.heap_len >> 1; o >= 1; o--)
    tn(r, t, o);
  u = s;
  do
    o = r.heap[
      1
      /*SMALLEST*/
    ], r.heap[
      1
      /*SMALLEST*/
    ] = r.heap[r.heap_len--], tn(
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
    ] = u++, tn(
      r,
      t,
      1
      /*SMALLEST*/
    );
  while (r.heap_len >= 2);
  r.heap[--r.heap_max] = r.heap[
    1
    /*SMALLEST*/
  ], kc(r, e), Ul(t, l, r.bl_count);
}, vo = (r, e, t) => {
  let i, n = -1, s, o = e[0 * 2 + 1], a = 0, l = 7, u = 4;
  for (o === 0 && (l = 138, u = 3), e[(t + 1) * 2 + 1] = 65535, i = 0; i <= t; i++)
    s = o, o = e[(i + 1) * 2 + 1], !(++a < l && s === o) && (a < u ? r.bl_tree[s * 2] += a : s !== 0 ? (s !== n && r.bl_tree[s * 2]++, r.bl_tree[$l * 2]++) : a <= 10 ? r.bl_tree[Ml * 2]++ : r.bl_tree[Nl * 2]++, a = 0, n = s, o === 0 ? (l = 138, u = 3) : s === o ? (l = 6, u = 3) : (l = 7, u = 4));
}, So = (r, e, t) => {
  let i, n = -1, s, o = e[0 * 2 + 1], a = 0, l = 7, u = 4;
  for (o === 0 && (l = 138, u = 3), i = 0; i <= t; i++)
    if (s = o, o = e[(i + 1) * 2 + 1], !(++a < l && s === o)) {
      if (a < u)
        do
          Ie(r, s, r.bl_tree);
        while (--a !== 0);
      else s !== 0 ? (s !== n && (Ie(r, s, r.bl_tree), a--), Ie(r, $l, r.bl_tree), ae(r, a - 3, 2)) : a <= 10 ? (Ie(r, Ml, r.bl_tree), ae(r, a - 3, 3)) : (Ie(r, Nl, r.bl_tree), ae(r, a - 11, 7));
      a = 0, n = s, o === 0 ? (l = 138, u = 3) : s === o ? (l = 6, u = 3) : (l = 7, u = 4);
    }
}, Mc = (r) => {
  let e;
  for (vo(r, r.dyn_ltree, r.l_desc.max_code), vo(r, r.dyn_dtree, r.d_desc.max_code), Bn(r, r.bl_desc), e = Ns - 1; e >= 3 && r.bl_tree[Pl[e] * 2 + 1] === 0; e--)
    ;
  return r.opt_len += 3 * (e + 1) + 5 + 5 + 4, e;
}, Nc = (r, e, t, i) => {
  let n;
  for (ae(r, e - 257, 5), ae(r, t - 1, 5), ae(r, i - 4, 4), n = 0; n < i; n++)
    ae(r, r.bl_tree[Pl[n] * 2 + 1], 3);
  So(r, r.dyn_ltree, e - 1), So(r, r.dyn_dtree, t - 1);
}, Pc = (r) => {
  let e = 4093624447, t;
  for (t = 0; t <= 31; t++, e >>>= 1)
    if (e & 1 && r.dyn_ltree[t * 2] !== 0)
      return 0;
  if (r.dyn_ltree[9 * 2] !== 0 || r.dyn_ltree[10 * 2] !== 0 || r.dyn_ltree[13 * 2] !== 0)
    return 1;
  for (t = 32; t < cr; t++)
    if (r.dyn_ltree[t * 2] !== 0)
      return 1;
  return 0;
};
let xo = !1;
const Tc = (r) => {
  xo || ($c(), xo = !0), r.l_desc = new en(r.dyn_ltree, Tl), r.d_desc = new en(r.dyn_dtree, Dl), r.bl_desc = new en(r.bl_tree, Ll), r.bi_buf = 0, r.bi_valid = 0, Bl(r);
}, Wl = (r, e, t, i) => {
  ae(r, (Sc << 1) + (i ? 1 : 0), 3), jl(r), Jt(r, t), Jt(r, ~t), t && r.pending_buf.set(r.window.subarray(e, e + t), r.pending), r.pending += t;
}, Dc = (r) => {
  ae(r, Rl << 1, 3), Ie(r, Ps, ke), Rc(r);
}, Lc = (r, e, t, i) => {
  let n, s, o = 0;
  r.level > 0 ? (r.strm.data_type === 2 && (r.strm.data_type = Pc(r)), Bn(r, r.l_desc), Bn(r, r.d_desc), o = Mc(r), n = r.opt_len + 3 + 7 >>> 3, s = r.static_len + 3 + 7 >>> 3, s <= n && (n = s)) : n = s = t + 5, t + 4 <= n && e !== -1 ? Wl(r, e, t, i) : r.strategy === 4 || s === n ? (ae(r, (Rl << 1) + (i ? 1 : 0), 3), _o(r, ke, Ut)) : (ae(r, (xc << 1) + (i ? 1 : 0), 3), Nc(r, r.l_desc.max_code + 1, r.d_desc.max_code + 1, o + 1), _o(r, r.dyn_ltree, r.dyn_dtree)), Bl(r), i && jl(r);
}, Fc = (r, e, t) => (r.pending_buf[r.sym_buf + r.sym_next++] = e, r.pending_buf[r.sym_buf + r.sym_next++] = e >> 8, r.pending_buf[r.sym_buf + r.sym_next++] = t, e === 0 ? r.dyn_ltree[t * 2]++ : (r.matches++, e--, r.dyn_ltree[(Yt[t] + cr + 1) * 2]++, r.dyn_dtree[Fl(e) * 2]++), r.sym_next === r.sym_end);
var zc = Tc, Uc = Wl, Bc = Lc, jc = Fc, Wc = Dc, Zc = {
  _tr_init: zc,
  _tr_stored_block: Uc,
  _tr_flush_block: Bc,
  _tr_tally: jc,
  _tr_align: Wc
};
const Gc = (r, e, t, i) => {
  let n = r & 65535 | 0, s = r >>> 16 & 65535 | 0, o = 0;
  for (; t !== 0; ) {
    o = t > 2e3 ? 2e3 : t, t -= o;
    do
      n = n + e[i++] | 0, s = s + n | 0;
    while (--o);
    n %= 65521, s %= 65521;
  }
  return n | s << 16 | 0;
};
var Xt = Gc;
const Hc = () => {
  let r, e = [];
  for (var t = 0; t < 256; t++) {
    r = t;
    for (var i = 0; i < 8; i++)
      r = r & 1 ? 3988292384 ^ r >>> 1 : r >>> 1;
    e[t] = r;
  }
  return e;
}, Vc = new Uint32Array(Hc()), Yc = (r, e, t, i) => {
  const n = Vc, s = i + t;
  r ^= -1;
  for (let o = i; o < s; o++)
    r = r >>> 8 ^ n[(r ^ e[o]) & 255];
  return r ^ -1;
};
var ee = Yc, Xe = {
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
}, et = {
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
const { _tr_init: Jc, _tr_stored_block: jn, _tr_flush_block: Xc, _tr_tally: Le, _tr_align: Kc } = Zc, {
  Z_NO_FLUSH: Fe,
  Z_PARTIAL_FLUSH: qc,
  Z_FULL_FLUSH: Qc,
  Z_FINISH: he,
  Z_BLOCK: Co,
  Z_OK: te,
  Z_STREAM_END: Io,
  Z_STREAM_ERROR: Ae,
  Z_DATA_ERROR: eh,
  Z_BUF_ERROR: rn,
  Z_DEFAULT_COMPRESSION: th,
  Z_FILTERED: rh,
  Z_HUFFMAN_ONLY: Ar,
  Z_RLE: ih,
  Z_FIXED: nh,
  Z_DEFAULT_STRATEGY: sh,
  Z_UNKNOWN: oh,
  Z_DEFLATED: ki
} = et, ah = 9, lh = 15, uh = 8, fh = 29, ch = 256, Wn = ch + 1 + fh, hh = 30, dh = 19, ph = 2 * Wn + 1, mh = 15, N = 3, De = 258, Ee = De + N + 1, gh = 32, bt = 42, Ds = 57, Zn = 69, Gn = 73, Hn = 91, Vn = 103, He = 113, Ft = 666, se = 1, kt = 2, Ke = 3, $t = 4, yh = 3, Ve = (r, e) => (r.msg = Xe[e], e), Ao = (r) => r * 2 - (r > 4 ? 9 : 0), Te = (r) => {
  let e = r.length;
  for (; --e >= 0; )
    r[e] = 0;
}, wh = (r) => {
  let e, t, i, n = r.w_size;
  e = r.hash_size, i = e;
  do
    t = r.head[--i], r.head[i] = t >= n ? t - n : 0;
  while (--e);
  e = n, i = e;
  do
    t = r.prev[--i], r.prev[i] = t >= n ? t - n : 0;
  while (--e);
};
let bh = (r, e, t) => (e << r.hash_shift ^ t) & r.hash_mask, ze = bh;
const le = (r) => {
  const e = r.state;
  let t = e.pending;
  t > r.avail_out && (t = r.avail_out), t !== 0 && (r.output.set(e.pending_buf.subarray(e.pending_out, e.pending_out + t), r.next_out), r.next_out += t, e.pending_out += t, r.total_out += t, r.avail_out -= t, e.pending -= t, e.pending === 0 && (e.pending_out = 0));
}, ue = (r, e) => {
  Xc(r, r.block_start >= 0 ? r.block_start : -1, r.strstart - r.block_start, e), r.block_start = r.strstart, le(r.strm);
}, D = (r, e) => {
  r.pending_buf[r.pending++] = e;
}, Nt = (r, e) => {
  r.pending_buf[r.pending++] = e >>> 8 & 255, r.pending_buf[r.pending++] = e & 255;
}, Yn = (r, e, t, i) => {
  let n = r.avail_in;
  return n > i && (n = i), n === 0 ? 0 : (r.avail_in -= n, e.set(r.input.subarray(r.next_in, r.next_in + n), t), r.state.wrap === 1 ? r.adler = Xt(r.adler, e, n, t) : r.state.wrap === 2 && (r.adler = ee(r.adler, e, n, t)), r.next_in += n, r.total_in += n, n);
}, Zl = (r, e) => {
  let t = r.max_chain_length, i = r.strstart, n, s, o = r.prev_length, a = r.nice_match;
  const l = r.strstart > r.w_size - Ee ? r.strstart - (r.w_size - Ee) : 0, u = r.window, f = r.w_mask, d = r.prev, h = r.strstart + De;
  let c = u[i + o - 1], p = u[i + o];
  r.prev_length >= r.good_match && (t >>= 2), a > r.lookahead && (a = r.lookahead);
  do
    if (n = e, !(u[n + o] !== p || u[n + o - 1] !== c || u[n] !== u[i] || u[++n] !== u[i + 1])) {
      i += 2, n++;
      do
        ;
      while (u[++i] === u[++n] && u[++i] === u[++n] && u[++i] === u[++n] && u[++i] === u[++n] && u[++i] === u[++n] && u[++i] === u[++n] && u[++i] === u[++n] && u[++i] === u[++n] && i < h);
      if (s = De - (h - i), i = h - De, s > o) {
        if (r.match_start = e, o = s, s >= a)
          break;
        c = u[i + o - 1], p = u[i + o];
      }
    }
  while ((e = d[e & f]) > l && --t !== 0);
  return o <= r.lookahead ? o : r.lookahead;
}, _t = (r) => {
  const e = r.w_size;
  let t, i, n;
  do {
    if (i = r.window_size - r.lookahead - r.strstart, r.strstart >= e + (e - Ee) && (r.window.set(r.window.subarray(e, e + e - i), 0), r.match_start -= e, r.strstart -= e, r.block_start -= e, r.insert > r.strstart && (r.insert = r.strstart), wh(r), i += e), r.strm.avail_in === 0)
      break;
    if (t = Yn(r.strm, r.window, r.strstart + r.lookahead, i), r.lookahead += t, r.lookahead + r.insert >= N)
      for (n = r.strstart - r.insert, r.ins_h = r.window[n], r.ins_h = ze(r, r.ins_h, r.window[n + 1]); r.insert && (r.ins_h = ze(r, r.ins_h, r.window[n + N - 1]), r.prev[n & r.w_mask] = r.head[r.ins_h], r.head[r.ins_h] = n, n++, r.insert--, !(r.lookahead + r.insert < N)); )
        ;
  } while (r.lookahead < Ee && r.strm.avail_in !== 0);
}, Gl = (r, e) => {
  let t = r.pending_buf_size - 5 > r.w_size ? r.w_size : r.pending_buf_size - 5, i, n, s, o = 0, a = r.strm.avail_in;
  do {
    if (i = 65535, s = r.bi_valid + 42 >> 3, r.strm.avail_out < s || (s = r.strm.avail_out - s, n = r.strstart - r.block_start, i > n + r.strm.avail_in && (i = n + r.strm.avail_in), i > s && (i = s), i < t && (i === 0 && e !== he || e === Fe || i !== n + r.strm.avail_in)))
      break;
    o = e === he && i === n + r.strm.avail_in ? 1 : 0, jn(r, 0, 0, o), r.pending_buf[r.pending - 4] = i, r.pending_buf[r.pending - 3] = i >> 8, r.pending_buf[r.pending - 2] = ~i, r.pending_buf[r.pending - 1] = ~i >> 8, le(r.strm), n && (n > i && (n = i), r.strm.output.set(r.window.subarray(r.block_start, r.block_start + n), r.strm.next_out), r.strm.next_out += n, r.strm.avail_out -= n, r.strm.total_out += n, r.block_start += n, i -= n), i && (Yn(r.strm, r.strm.output, r.strm.next_out, i), r.strm.next_out += i, r.strm.avail_out -= i, r.strm.total_out += i);
  } while (o === 0);
  return a -= r.strm.avail_in, a && (a >= r.w_size ? (r.matches = 2, r.window.set(r.strm.input.subarray(r.strm.next_in - r.w_size, r.strm.next_in), 0), r.strstart = r.w_size, r.insert = r.strstart) : (r.window_size - r.strstart <= a && (r.strstart -= r.w_size, r.window.set(r.window.subarray(r.w_size, r.w_size + r.strstart), 0), r.matches < 2 && r.matches++, r.insert > r.strstart && (r.insert = r.strstart)), r.window.set(r.strm.input.subarray(r.strm.next_in - a, r.strm.next_in), r.strstart), r.strstart += a, r.insert += a > r.w_size - r.insert ? r.w_size - r.insert : a), r.block_start = r.strstart), r.high_water < r.strstart && (r.high_water = r.strstart), o ? $t : e !== Fe && e !== he && r.strm.avail_in === 0 && r.strstart === r.block_start ? kt : (s = r.window_size - r.strstart, r.strm.avail_in > s && r.block_start >= r.w_size && (r.block_start -= r.w_size, r.strstart -= r.w_size, r.window.set(r.window.subarray(r.w_size, r.w_size + r.strstart), 0), r.matches < 2 && r.matches++, s += r.w_size, r.insert > r.strstart && (r.insert = r.strstart)), s > r.strm.avail_in && (s = r.strm.avail_in), s && (Yn(r.strm, r.window, r.strstart, s), r.strstart += s, r.insert += s > r.w_size - r.insert ? r.w_size - r.insert : s), r.high_water < r.strstart && (r.high_water = r.strstart), s = r.bi_valid + 42 >> 3, s = r.pending_buf_size - s > 65535 ? 65535 : r.pending_buf_size - s, t = s > r.w_size ? r.w_size : s, n = r.strstart - r.block_start, (n >= t || (n || e === he) && e !== Fe && r.strm.avail_in === 0 && n <= s) && (i = n > s ? s : n, o = e === he && r.strm.avail_in === 0 && i === n ? 1 : 0, jn(r, r.block_start, i, o), r.block_start += i, le(r.strm)), o ? Ke : se);
}, nn = (r, e) => {
  let t, i;
  for (; ; ) {
    if (r.lookahead < Ee) {
      if (_t(r), r.lookahead < Ee && e === Fe)
        return se;
      if (r.lookahead === 0)
        break;
    }
    if (t = 0, r.lookahead >= N && (r.ins_h = ze(r, r.ins_h, r.window[r.strstart + N - 1]), t = r.prev[r.strstart & r.w_mask] = r.head[r.ins_h], r.head[r.ins_h] = r.strstart), t !== 0 && r.strstart - t <= r.w_size - Ee && (r.match_length = Zl(r, t)), r.match_length >= N)
      if (i = Le(r, r.strstart - r.match_start, r.match_length - N), r.lookahead -= r.match_length, r.match_length <= r.max_lazy_match && r.lookahead >= N) {
        r.match_length--;
        do
          r.strstart++, r.ins_h = ze(r, r.ins_h, r.window[r.strstart + N - 1]), t = r.prev[r.strstart & r.w_mask] = r.head[r.ins_h], r.head[r.ins_h] = r.strstart;
        while (--r.match_length !== 0);
        r.strstart++;
      } else
        r.strstart += r.match_length, r.match_length = 0, r.ins_h = r.window[r.strstart], r.ins_h = ze(r, r.ins_h, r.window[r.strstart + 1]);
    else
      i = Le(r, 0, r.window[r.strstart]), r.lookahead--, r.strstart++;
    if (i && (ue(r, !1), r.strm.avail_out === 0))
      return se;
  }
  return r.insert = r.strstart < N - 1 ? r.strstart : N - 1, e === he ? (ue(r, !0), r.strm.avail_out === 0 ? Ke : $t) : r.sym_next && (ue(r, !1), r.strm.avail_out === 0) ? se : kt;
}, nt = (r, e) => {
  let t, i, n;
  for (; ; ) {
    if (r.lookahead < Ee) {
      if (_t(r), r.lookahead < Ee && e === Fe)
        return se;
      if (r.lookahead === 0)
        break;
    }
    if (t = 0, r.lookahead >= N && (r.ins_h = ze(r, r.ins_h, r.window[r.strstart + N - 1]), t = r.prev[r.strstart & r.w_mask] = r.head[r.ins_h], r.head[r.ins_h] = r.strstart), r.prev_length = r.match_length, r.prev_match = r.match_start, r.match_length = N - 1, t !== 0 && r.prev_length < r.max_lazy_match && r.strstart - t <= r.w_size - Ee && (r.match_length = Zl(r, t), r.match_length <= 5 && (r.strategy === rh || r.match_length === N && r.strstart - r.match_start > 4096) && (r.match_length = N - 1)), r.prev_length >= N && r.match_length <= r.prev_length) {
      n = r.strstart + r.lookahead - N, i = Le(r, r.strstart - 1 - r.prev_match, r.prev_length - N), r.lookahead -= r.prev_length - 1, r.prev_length -= 2;
      do
        ++r.strstart <= n && (r.ins_h = ze(r, r.ins_h, r.window[r.strstart + N - 1]), t = r.prev[r.strstart & r.w_mask] = r.head[r.ins_h], r.head[r.ins_h] = r.strstart);
      while (--r.prev_length !== 0);
      if (r.match_available = 0, r.match_length = N - 1, r.strstart++, i && (ue(r, !1), r.strm.avail_out === 0))
        return se;
    } else if (r.match_available) {
      if (i = Le(r, 0, r.window[r.strstart - 1]), i && ue(r, !1), r.strstart++, r.lookahead--, r.strm.avail_out === 0)
        return se;
    } else
      r.match_available = 1, r.strstart++, r.lookahead--;
  }
  return r.match_available && (i = Le(r, 0, r.window[r.strstart - 1]), r.match_available = 0), r.insert = r.strstart < N - 1 ? r.strstart : N - 1, e === he ? (ue(r, !0), r.strm.avail_out === 0 ? Ke : $t) : r.sym_next && (ue(r, !1), r.strm.avail_out === 0) ? se : kt;
}, _h = (r, e) => {
  let t, i, n, s;
  const o = r.window;
  for (; ; ) {
    if (r.lookahead <= De) {
      if (_t(r), r.lookahead <= De && e === Fe)
        return se;
      if (r.lookahead === 0)
        break;
    }
    if (r.match_length = 0, r.lookahead >= N && r.strstart > 0 && (n = r.strstart - 1, i = o[n], i === o[++n] && i === o[++n] && i === o[++n])) {
      s = r.strstart + De;
      do
        ;
      while (i === o[++n] && i === o[++n] && i === o[++n] && i === o[++n] && i === o[++n] && i === o[++n] && i === o[++n] && i === o[++n] && n < s);
      r.match_length = De - (s - n), r.match_length > r.lookahead && (r.match_length = r.lookahead);
    }
    if (r.match_length >= N ? (t = Le(r, 1, r.match_length - N), r.lookahead -= r.match_length, r.strstart += r.match_length, r.match_length = 0) : (t = Le(r, 0, r.window[r.strstart]), r.lookahead--, r.strstart++), t && (ue(r, !1), r.strm.avail_out === 0))
      return se;
  }
  return r.insert = 0, e === he ? (ue(r, !0), r.strm.avail_out === 0 ? Ke : $t) : r.sym_next && (ue(r, !1), r.strm.avail_out === 0) ? se : kt;
}, vh = (r, e) => {
  let t;
  for (; ; ) {
    if (r.lookahead === 0 && (_t(r), r.lookahead === 0)) {
      if (e === Fe)
        return se;
      break;
    }
    if (r.match_length = 0, t = Le(r, 0, r.window[r.strstart]), r.lookahead--, r.strstart++, t && (ue(r, !1), r.strm.avail_out === 0))
      return se;
  }
  return r.insert = 0, e === he ? (ue(r, !0), r.strm.avail_out === 0 ? Ke : $t) : r.sym_next && (ue(r, !1), r.strm.avail_out === 0) ? se : kt;
};
function Se(r, e, t, i, n) {
  this.good_length = r, this.max_lazy = e, this.nice_length = t, this.max_chain = i, this.func = n;
}
const zt = [
  /*      good lazy nice chain */
  new Se(0, 0, 0, 0, Gl),
  /* 0 store only */
  new Se(4, 4, 8, 4, nn),
  /* 1 max speed, no lazy matches */
  new Se(4, 5, 16, 8, nn),
  /* 2 */
  new Se(4, 6, 32, 32, nn),
  /* 3 */
  new Se(4, 4, 16, 16, nt),
  /* 4 lazy matches */
  new Se(8, 16, 32, 32, nt),
  /* 5 */
  new Se(8, 16, 128, 128, nt),
  /* 6 */
  new Se(8, 32, 128, 256, nt),
  /* 7 */
  new Se(32, 128, 258, 1024, nt),
  /* 8 */
  new Se(32, 258, 258, 4096, nt)
  /* 9 max compression */
], Sh = (r) => {
  r.window_size = 2 * r.w_size, Te(r.head), r.max_lazy_match = zt[r.level].max_lazy, r.good_match = zt[r.level].good_length, r.nice_match = zt[r.level].nice_length, r.max_chain_length = zt[r.level].max_chain, r.strstart = 0, r.block_start = 0, r.lookahead = 0, r.insert = 0, r.match_length = r.prev_length = N - 1, r.match_available = 0, r.ins_h = 0;
};
function xh() {
  this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = ki, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new Uint16Array(ph * 2), this.dyn_dtree = new Uint16Array((2 * hh + 1) * 2), this.bl_tree = new Uint16Array((2 * dh + 1) * 2), Te(this.dyn_ltree), Te(this.dyn_dtree), Te(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new Uint16Array(mh + 1), this.heap = new Uint16Array(2 * Wn + 1), Te(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new Uint16Array(2 * Wn + 1), Te(this.depth), this.sym_buf = 0, this.lit_bufsize = 0, this.sym_next = 0, this.sym_end = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
}
const hr = (r) => {
  if (!r)
    return 1;
  const e = r.state;
  return !e || e.strm !== r || e.status !== bt && //#ifdef GZIP
  e.status !== Ds && //#endif
  e.status !== Zn && e.status !== Gn && e.status !== Hn && e.status !== Vn && e.status !== He && e.status !== Ft ? 1 : 0;
}, Hl = (r) => {
  if (hr(r))
    return Ve(r, Ae);
  r.total_in = r.total_out = 0, r.data_type = oh;
  const e = r.state;
  return e.pending = 0, e.pending_out = 0, e.wrap < 0 && (e.wrap = -e.wrap), e.status = //#ifdef GZIP
  e.wrap === 2 ? Ds : (
    //#endif
    e.wrap ? bt : He
  ), r.adler = e.wrap === 2 ? 0 : 1, e.last_flush = -2, Jc(e), te;
}, Vl = (r) => {
  const e = Hl(r);
  return e === te && Sh(r.state), e;
}, Ch = (r, e) => hr(r) || r.state.wrap !== 2 ? Ae : (r.state.gzhead = e, te), Yl = (r, e, t, i, n, s) => {
  if (!r)
    return Ae;
  let o = 1;
  if (e === th && (e = 6), i < 0 ? (o = 0, i = -i) : i > 15 && (o = 2, i -= 16), n < 1 || n > ah || t !== ki || i < 8 || i > 15 || e < 0 || e > 9 || s < 0 || s > nh || i === 8 && o !== 1)
    return Ve(r, Ae);
  i === 8 && (i = 9);
  const a = new xh();
  return r.state = a, a.strm = r, a.status = bt, a.wrap = o, a.gzhead = null, a.w_bits = i, a.w_size = 1 << a.w_bits, a.w_mask = a.w_size - 1, a.hash_bits = n + 7, a.hash_size = 1 << a.hash_bits, a.hash_mask = a.hash_size - 1, a.hash_shift = ~~((a.hash_bits + N - 1) / N), a.window = new Uint8Array(a.w_size * 2), a.head = new Uint16Array(a.hash_size), a.prev = new Uint16Array(a.w_size), a.lit_bufsize = 1 << n + 6, a.pending_buf_size = a.lit_bufsize * 4, a.pending_buf = new Uint8Array(a.pending_buf_size), a.sym_buf = a.lit_bufsize, a.sym_end = (a.lit_bufsize - 1) * 3, a.level = e, a.strategy = s, a.method = t, Vl(r);
}, Ih = (r, e) => Yl(r, e, ki, lh, uh, sh), Ah = (r, e) => {
  if (hr(r) || e > Co || e < 0)
    return r ? Ve(r, Ae) : Ae;
  const t = r.state;
  if (!r.output || r.avail_in !== 0 && !r.input || t.status === Ft && e !== he)
    return Ve(r, r.avail_out === 0 ? rn : Ae);
  const i = t.last_flush;
  if (t.last_flush = e, t.pending !== 0) {
    if (le(r), r.avail_out === 0)
      return t.last_flush = -1, te;
  } else if (r.avail_in === 0 && Ao(e) <= Ao(i) && e !== he)
    return Ve(r, rn);
  if (t.status === Ft && r.avail_in !== 0)
    return Ve(r, rn);
  if (t.status === bt && t.wrap === 0 && (t.status = He), t.status === bt) {
    let n = ki + (t.w_bits - 8 << 4) << 8, s = -1;
    if (t.strategy >= Ar || t.level < 2 ? s = 0 : t.level < 6 ? s = 1 : t.level === 6 ? s = 2 : s = 3, n |= s << 6, t.strstart !== 0 && (n |= gh), n += 31 - n % 31, Nt(t, n), t.strstart !== 0 && (Nt(t, r.adler >>> 16), Nt(t, r.adler & 65535)), r.adler = 1, t.status = He, le(r), t.pending !== 0)
      return t.last_flush = -1, te;
  }
  if (t.status === Ds) {
    if (r.adler = 0, D(t, 31), D(t, 139), D(t, 8), t.gzhead)
      D(
        t,
        (t.gzhead.text ? 1 : 0) + (t.gzhead.hcrc ? 2 : 0) + (t.gzhead.extra ? 4 : 0) + (t.gzhead.name ? 8 : 0) + (t.gzhead.comment ? 16 : 0)
      ), D(t, t.gzhead.time & 255), D(t, t.gzhead.time >> 8 & 255), D(t, t.gzhead.time >> 16 & 255), D(t, t.gzhead.time >> 24 & 255), D(t, t.level === 9 ? 2 : t.strategy >= Ar || t.level < 2 ? 4 : 0), D(t, t.gzhead.os & 255), t.gzhead.extra && t.gzhead.extra.length && (D(t, t.gzhead.extra.length & 255), D(t, t.gzhead.extra.length >> 8 & 255)), t.gzhead.hcrc && (r.adler = ee(r.adler, t.pending_buf, t.pending, 0)), t.gzindex = 0, t.status = Zn;
    else if (D(t, 0), D(t, 0), D(t, 0), D(t, 0), D(t, 0), D(t, t.level === 9 ? 2 : t.strategy >= Ar || t.level < 2 ? 4 : 0), D(t, yh), t.status = He, le(r), t.pending !== 0)
      return t.last_flush = -1, te;
  }
  if (t.status === Zn) {
    if (t.gzhead.extra) {
      let n = t.pending, s = (t.gzhead.extra.length & 65535) - t.gzindex;
      for (; t.pending + s > t.pending_buf_size; ) {
        let a = t.pending_buf_size - t.pending;
        if (t.pending_buf.set(t.gzhead.extra.subarray(t.gzindex, t.gzindex + a), t.pending), t.pending = t.pending_buf_size, t.gzhead.hcrc && t.pending > n && (r.adler = ee(r.adler, t.pending_buf, t.pending - n, n)), t.gzindex += a, le(r), t.pending !== 0)
          return t.last_flush = -1, te;
        n = 0, s -= a;
      }
      let o = new Uint8Array(t.gzhead.extra);
      t.pending_buf.set(o.subarray(t.gzindex, t.gzindex + s), t.pending), t.pending += s, t.gzhead.hcrc && t.pending > n && (r.adler = ee(r.adler, t.pending_buf, t.pending - n, n)), t.gzindex = 0;
    }
    t.status = Gn;
  }
  if (t.status === Gn) {
    if (t.gzhead.name) {
      let n = t.pending, s;
      do {
        if (t.pending === t.pending_buf_size) {
          if (t.gzhead.hcrc && t.pending > n && (r.adler = ee(r.adler, t.pending_buf, t.pending - n, n)), le(r), t.pending !== 0)
            return t.last_flush = -1, te;
          n = 0;
        }
        t.gzindex < t.gzhead.name.length ? s = t.gzhead.name.charCodeAt(t.gzindex++) & 255 : s = 0, D(t, s);
      } while (s !== 0);
      t.gzhead.hcrc && t.pending > n && (r.adler = ee(r.adler, t.pending_buf, t.pending - n, n)), t.gzindex = 0;
    }
    t.status = Hn;
  }
  if (t.status === Hn) {
    if (t.gzhead.comment) {
      let n = t.pending, s;
      do {
        if (t.pending === t.pending_buf_size) {
          if (t.gzhead.hcrc && t.pending > n && (r.adler = ee(r.adler, t.pending_buf, t.pending - n, n)), le(r), t.pending !== 0)
            return t.last_flush = -1, te;
          n = 0;
        }
        t.gzindex < t.gzhead.comment.length ? s = t.gzhead.comment.charCodeAt(t.gzindex++) & 255 : s = 0, D(t, s);
      } while (s !== 0);
      t.gzhead.hcrc && t.pending > n && (r.adler = ee(r.adler, t.pending_buf, t.pending - n, n));
    }
    t.status = Vn;
  }
  if (t.status === Vn) {
    if (t.gzhead.hcrc) {
      if (t.pending + 2 > t.pending_buf_size && (le(r), t.pending !== 0))
        return t.last_flush = -1, te;
      D(t, r.adler & 255), D(t, r.adler >> 8 & 255), r.adler = 0;
    }
    if (t.status = He, le(r), t.pending !== 0)
      return t.last_flush = -1, te;
  }
  if (r.avail_in !== 0 || t.lookahead !== 0 || e !== Fe && t.status !== Ft) {
    let n = t.level === 0 ? Gl(t, e) : t.strategy === Ar ? vh(t, e) : t.strategy === ih ? _h(t, e) : zt[t.level].func(t, e);
    if ((n === Ke || n === $t) && (t.status = Ft), n === se || n === Ke)
      return r.avail_out === 0 && (t.last_flush = -1), te;
    if (n === kt && (e === qc ? Kc(t) : e !== Co && (jn(t, 0, 0, !1), e === Qc && (Te(t.head), t.lookahead === 0 && (t.strstart = 0, t.block_start = 0, t.insert = 0))), le(r), r.avail_out === 0))
      return t.last_flush = -1, te;
  }
  return e !== he ? te : t.wrap <= 0 ? Io : (t.wrap === 2 ? (D(t, r.adler & 255), D(t, r.adler >> 8 & 255), D(t, r.adler >> 16 & 255), D(t, r.adler >> 24 & 255), D(t, r.total_in & 255), D(t, r.total_in >> 8 & 255), D(t, r.total_in >> 16 & 255), D(t, r.total_in >> 24 & 255)) : (Nt(t, r.adler >>> 16), Nt(t, r.adler & 65535)), le(r), t.wrap > 0 && (t.wrap = -t.wrap), t.pending !== 0 ? te : Io);
}, Eh = (r) => {
  if (hr(r))
    return Ae;
  const e = r.state.status;
  return r.state = null, e === He ? Ve(r, eh) : te;
}, Oh = (r, e) => {
  let t = e.length;
  if (hr(r))
    return Ae;
  const i = r.state, n = i.wrap;
  if (n === 2 || n === 1 && i.status !== bt || i.lookahead)
    return Ae;
  if (n === 1 && (r.adler = Xt(r.adler, e, t, 0)), i.wrap = 0, t >= i.w_size) {
    n === 0 && (Te(i.head), i.strstart = 0, i.block_start = 0, i.insert = 0);
    let l = new Uint8Array(i.w_size);
    l.set(e.subarray(t - i.w_size, t), 0), e = l, t = i.w_size;
  }
  const s = r.avail_in, o = r.next_in, a = r.input;
  for (r.avail_in = t, r.next_in = 0, r.input = e, _t(i); i.lookahead >= N; ) {
    let l = i.strstart, u = i.lookahead - (N - 1);
    do
      i.ins_h = ze(i, i.ins_h, i.window[l + N - 1]), i.prev[l & i.w_mask] = i.head[i.ins_h], i.head[i.ins_h] = l, l++;
    while (--u);
    i.strstart = l, i.lookahead = N - 1, _t(i);
  }
  return i.strstart += i.lookahead, i.block_start = i.strstart, i.insert = i.lookahead, i.lookahead = 0, i.match_length = i.prev_length = N - 1, i.match_available = 0, r.next_in = o, r.input = a, r.avail_in = s, i.wrap = n, te;
};
var Rh = Ih, kh = Yl, $h = Vl, Mh = Hl, Nh = Ch, Ph = Ah, Th = Eh, Dh = Oh, Lh = "pako deflate (from Nodeca project)", Bt = {
  deflateInit: Rh,
  deflateInit2: kh,
  deflateReset: $h,
  deflateResetKeep: Mh,
  deflateSetHeader: Nh,
  deflate: Ph,
  deflateEnd: Th,
  deflateSetDictionary: Dh,
  deflateInfo: Lh
};
const Fh = (r, e) => Object.prototype.hasOwnProperty.call(r, e);
var zh = function(r) {
  const e = Array.prototype.slice.call(arguments, 1);
  for (; e.length; ) {
    const t = e.shift();
    if (t) {
      if (typeof t != "object")
        throw new TypeError(t + "must be non-object");
      for (const i in t)
        Fh(t, i) && (r[i] = t[i]);
    }
  }
  return r;
}, Uh = (r) => {
  let e = 0;
  for (let i = 0, n = r.length; i < n; i++)
    e += r[i].length;
  const t = new Uint8Array(e);
  for (let i = 0, n = 0, s = r.length; i < s; i++) {
    let o = r[i];
    t.set(o, n), n += o.length;
  }
  return t;
}, $i = {
  assign: zh,
  flattenChunks: Uh
};
let Jl = !0;
try {
  String.fromCharCode.apply(null, new Uint8Array(1));
} catch {
  Jl = !1;
}
const Kt = new Uint8Array(256);
for (let r = 0; r < 256; r++)
  Kt[r] = r >= 252 ? 6 : r >= 248 ? 5 : r >= 240 ? 4 : r >= 224 ? 3 : r >= 192 ? 2 : 1;
Kt[254] = Kt[254] = 1;
var Bh = (r) => {
  if (typeof TextEncoder == "function" && TextEncoder.prototype.encode)
    return new TextEncoder().encode(r);
  let e, t, i, n, s, o = r.length, a = 0;
  for (n = 0; n < o; n++)
    t = r.charCodeAt(n), (t & 64512) === 55296 && n + 1 < o && (i = r.charCodeAt(n + 1), (i & 64512) === 56320 && (t = 65536 + (t - 55296 << 10) + (i - 56320), n++)), a += t < 128 ? 1 : t < 2048 ? 2 : t < 65536 ? 3 : 4;
  for (e = new Uint8Array(a), s = 0, n = 0; s < a; n++)
    t = r.charCodeAt(n), (t & 64512) === 55296 && n + 1 < o && (i = r.charCodeAt(n + 1), (i & 64512) === 56320 && (t = 65536 + (t - 55296 << 10) + (i - 56320), n++)), t < 128 ? e[s++] = t : t < 2048 ? (e[s++] = 192 | t >>> 6, e[s++] = 128 | t & 63) : t < 65536 ? (e[s++] = 224 | t >>> 12, e[s++] = 128 | t >>> 6 & 63, e[s++] = 128 | t & 63) : (e[s++] = 240 | t >>> 18, e[s++] = 128 | t >>> 12 & 63, e[s++] = 128 | t >>> 6 & 63, e[s++] = 128 | t & 63);
  return e;
};
const jh = (r, e) => {
  if (e < 65534 && r.subarray && Jl)
    return String.fromCharCode.apply(null, r.length === e ? r : r.subarray(0, e));
  let t = "";
  for (let i = 0; i < e; i++)
    t += String.fromCharCode(r[i]);
  return t;
};
var Wh = (r, e) => {
  const t = e || r.length;
  if (typeof TextDecoder == "function" && TextDecoder.prototype.decode)
    return new TextDecoder().decode(r.subarray(0, e));
  let i, n;
  const s = new Array(t * 2);
  for (n = 0, i = 0; i < t; ) {
    let o = r[i++];
    if (o < 128) {
      s[n++] = o;
      continue;
    }
    let a = Kt[o];
    if (a > 4) {
      s[n++] = 65533, i += a - 1;
      continue;
    }
    for (o &= a === 2 ? 31 : a === 3 ? 15 : 7; a > 1 && i < t; )
      o = o << 6 | r[i++] & 63, a--;
    if (a > 1) {
      s[n++] = 65533;
      continue;
    }
    o < 65536 ? s[n++] = o : (o -= 65536, s[n++] = 55296 | o >> 10 & 1023, s[n++] = 56320 | o & 1023);
  }
  return jh(s, n);
}, Zh = (r, e) => {
  e = e || r.length, e > r.length && (e = r.length);
  let t = e - 1;
  for (; t >= 0 && (r[t] & 192) === 128; )
    t--;
  return t < 0 || t === 0 ? e : t + Kt[r[t]] > e ? t : e;
}, qt = {
  string2buf: Bh,
  buf2string: Wh,
  utf8border: Zh
};
function Gh() {
  this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
}
var Xl = Gh;
const Kl = Object.prototype.toString, {
  Z_NO_FLUSH: Hh,
  Z_SYNC_FLUSH: Vh,
  Z_FULL_FLUSH: Yh,
  Z_FINISH: Jh,
  Z_OK: di,
  Z_STREAM_END: Xh,
  Z_DEFAULT_COMPRESSION: Kh,
  Z_DEFAULT_STRATEGY: qh,
  Z_DEFLATED: Qh
} = et;
function dr(r) {
  this.options = $i.assign({
    level: Kh,
    method: Qh,
    chunkSize: 16384,
    windowBits: 15,
    memLevel: 8,
    strategy: qh
  }, r || {});
  let e = this.options;
  e.raw && e.windowBits > 0 ? e.windowBits = -e.windowBits : e.gzip && e.windowBits > 0 && e.windowBits < 16 && (e.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new Xl(), this.strm.avail_out = 0;
  let t = Bt.deflateInit2(
    this.strm,
    e.level,
    e.method,
    e.windowBits,
    e.memLevel,
    e.strategy
  );
  if (t !== di)
    throw new Error(Xe[t]);
  if (e.header && Bt.deflateSetHeader(this.strm, e.header), e.dictionary) {
    let i;
    if (typeof e.dictionary == "string" ? i = qt.string2buf(e.dictionary) : Kl.call(e.dictionary) === "[object ArrayBuffer]" ? i = new Uint8Array(e.dictionary) : i = e.dictionary, t = Bt.deflateSetDictionary(this.strm, i), t !== di)
      throw new Error(Xe[t]);
    this._dict_set = !0;
  }
}
dr.prototype.push = function(r, e) {
  const t = this.strm, i = this.options.chunkSize;
  let n, s;
  if (this.ended)
    return !1;
  for (e === ~~e ? s = e : s = e === !0 ? Jh : Hh, typeof r == "string" ? t.input = qt.string2buf(r) : Kl.call(r) === "[object ArrayBuffer]" ? t.input = new Uint8Array(r) : t.input = r, t.next_in = 0, t.avail_in = t.input.length; ; ) {
    if (t.avail_out === 0 && (t.output = new Uint8Array(i), t.next_out = 0, t.avail_out = i), (s === Vh || s === Yh) && t.avail_out <= 6) {
      this.onData(t.output.subarray(0, t.next_out)), t.avail_out = 0;
      continue;
    }
    if (n = Bt.deflate(t, s), n === Xh)
      return t.next_out > 0 && this.onData(t.output.subarray(0, t.next_out)), n = Bt.deflateEnd(this.strm), this.onEnd(n), this.ended = !0, n === di;
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
dr.prototype.onData = function(r) {
  this.chunks.push(r);
};
dr.prototype.onEnd = function(r) {
  r === di && (this.result = $i.flattenChunks(this.chunks)), this.chunks = [], this.err = r, this.msg = this.strm.msg;
};
function Ls(r, e) {
  const t = new dr(e);
  if (t.push(r, !0), t.err)
    throw t.msg || Xe[t.err];
  return t.result;
}
function ed(r, e) {
  return e = e || {}, e.raw = !0, Ls(r, e);
}
function td(r, e) {
  return e = e || {}, e.gzip = !0, Ls(r, e);
}
var rd = dr, id = Ls, nd = ed, sd = td, od = et, ad = {
  Deflate: rd,
  deflate: id,
  deflateRaw: nd,
  gzip: sd,
  constants: od
};
const Er = 16209, ld = 16191;
var ud = function(e, t) {
  let i, n, s, o, a, l, u, f, d, h, c, p, g, m, b, _, y, w, S, E, x, I, A, C;
  const O = e.state;
  i = e.next_in, A = e.input, n = i + (e.avail_in - 5), s = e.next_out, C = e.output, o = s - (t - e.avail_out), a = s + (e.avail_out - 257), l = O.dmax, u = O.wsize, f = O.whave, d = O.wnext, h = O.window, c = O.hold, p = O.bits, g = O.lencode, m = O.distcode, b = (1 << O.lenbits) - 1, _ = (1 << O.distbits) - 1;
  e:
    do {
      p < 15 && (c += A[i++] << p, p += 8, c += A[i++] << p, p += 8), y = g[c & b];
      t:
        for (; ; ) {
          if (w = y >>> 24, c >>>= w, p -= w, w = y >>> 16 & 255, w === 0)
            C[s++] = y & 65535;
          else if (w & 16) {
            S = y & 65535, w &= 15, w && (p < w && (c += A[i++] << p, p += 8), S += c & (1 << w) - 1, c >>>= w, p -= w), p < 15 && (c += A[i++] << p, p += 8, c += A[i++] << p, p += 8), y = m[c & _];
            r:
              for (; ; ) {
                if (w = y >>> 24, c >>>= w, p -= w, w = y >>> 16 & 255, w & 16) {
                  if (E = y & 65535, w &= 15, p < w && (c += A[i++] << p, p += 8, p < w && (c += A[i++] << p, p += 8)), E += c & (1 << w) - 1, E > l) {
                    e.msg = "invalid distance too far back", O.mode = Er;
                    break e;
                  }
                  if (c >>>= w, p -= w, w = s - o, E > w) {
                    if (w = E - w, w > f && O.sane) {
                      e.msg = "invalid distance too far back", O.mode = Er;
                      break e;
                    }
                    if (x = 0, I = h, d === 0) {
                      if (x += u - w, w < S) {
                        S -= w;
                        do
                          C[s++] = h[x++];
                        while (--w);
                        x = s - E, I = C;
                      }
                    } else if (d < w) {
                      if (x += u + d - w, w -= d, w < S) {
                        S -= w;
                        do
                          C[s++] = h[x++];
                        while (--w);
                        if (x = 0, d < S) {
                          w = d, S -= w;
                          do
                            C[s++] = h[x++];
                          while (--w);
                          x = s - E, I = C;
                        }
                      }
                    } else if (x += d - w, w < S) {
                      S -= w;
                      do
                        C[s++] = h[x++];
                      while (--w);
                      x = s - E, I = C;
                    }
                    for (; S > 2; )
                      C[s++] = I[x++], C[s++] = I[x++], C[s++] = I[x++], S -= 3;
                    S && (C[s++] = I[x++], S > 1 && (C[s++] = I[x++]));
                  } else {
                    x = s - E;
                    do
                      C[s++] = C[x++], C[s++] = C[x++], C[s++] = C[x++], S -= 3;
                    while (S > 2);
                    S && (C[s++] = C[x++], S > 1 && (C[s++] = C[x++]));
                  }
                } else if (w & 64) {
                  e.msg = "invalid distance code", O.mode = Er;
                  break e;
                } else {
                  y = m[(y & 65535) + (c & (1 << w) - 1)];
                  continue r;
                }
                break;
              }
          } else if (w & 64)
            if (w & 32) {
              O.mode = ld;
              break e;
            } else {
              e.msg = "invalid literal/length code", O.mode = Er;
              break e;
            }
          else {
            y = g[(y & 65535) + (c & (1 << w) - 1)];
            continue t;
          }
          break;
        }
    } while (i < n && s < a);
  S = p >> 3, i -= S, p -= S << 3, c &= (1 << p) - 1, e.next_in = i, e.next_out = s, e.avail_in = i < n ? 5 + (n - i) : 5 - (i - n), e.avail_out = s < a ? 257 + (a - s) : 257 - (s - a), O.hold = c, O.bits = p;
};
const st = 15, Eo = 852, Oo = 592, Ro = 0, sn = 1, ko = 2, fd = new Uint16Array([
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
]), cd = new Uint8Array([
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
]), hd = new Uint16Array([
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
]), dd = new Uint8Array([
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
]), pd = (r, e, t, i, n, s, o, a) => {
  const l = a.bits;
  let u = 0, f = 0, d = 0, h = 0, c = 0, p = 0, g = 0, m = 0, b = 0, _ = 0, y, w, S, E, x, I = null, A;
  const C = new Uint16Array(st + 1), O = new Uint16Array(st + 1);
  let q = null, $, we, be;
  for (u = 0; u <= st; u++)
    C[u] = 0;
  for (f = 0; f < i; f++)
    C[e[t + f]]++;
  for (c = l, h = st; h >= 1 && C[h] === 0; h--)
    ;
  if (c > h && (c = h), h === 0)
    return n[s++] = 1 << 24 | 64 << 16 | 0, n[s++] = 1 << 24 | 64 << 16 | 0, a.bits = 1, 0;
  for (d = 1; d < h && C[d] === 0; d++)
    ;
  for (c < d && (c = d), m = 1, u = 1; u <= st; u++)
    if (m <<= 1, m -= C[u], m < 0)
      return -1;
  if (m > 0 && (r === Ro || h !== 1))
    return -1;
  for (O[1] = 0, u = 1; u < st; u++)
    O[u + 1] = O[u] + C[u];
  for (f = 0; f < i; f++)
    e[t + f] !== 0 && (o[O[e[t + f]]++] = f);
  if (r === Ro ? (I = q = o, A = 20) : r === sn ? (I = fd, q = cd, A = 257) : (I = hd, q = dd, A = 0), _ = 0, f = 0, u = d, x = s, p = c, g = 0, S = -1, b = 1 << c, E = b - 1, r === sn && b > Eo || r === ko && b > Oo)
    return 1;
  for (; ; ) {
    $ = u - g, o[f] + 1 < A ? (we = 0, be = o[f]) : o[f] >= A ? (we = q[o[f] - A], be = I[o[f] - A]) : (we = 96, be = 0), y = 1 << u - g, w = 1 << p, d = w;
    do
      w -= y, n[x + (_ >> g) + w] = $ << 24 | we << 16 | be | 0;
    while (w !== 0);
    for (y = 1 << u - 1; _ & y; )
      y >>= 1;
    if (y !== 0 ? (_ &= y - 1, _ += y) : _ = 0, f++, --C[u] === 0) {
      if (u === h)
        break;
      u = e[t + o[f]];
    }
    if (u > c && (_ & E) !== S) {
      for (g === 0 && (g = c), x += d, p = u - g, m = 1 << p; p + g < h && (m -= C[p + g], !(m <= 0)); )
        p++, m <<= 1;
      if (b += 1 << p, r === sn && b > Eo || r === ko && b > Oo)
        return 1;
      S = _ & E, n[S] = c << 24 | p << 16 | x - s | 0;
    }
  }
  return _ !== 0 && (n[x + _] = u - g << 24 | 64 << 16 | 0), a.bits = c, 0;
};
var jt = pd;
const md = 0, ql = 1, Ql = 2, {
  Z_FINISH: $o,
  Z_BLOCK: gd,
  Z_TREES: Or,
  Z_OK: qe,
  Z_STREAM_END: yd,
  Z_NEED_DICT: wd,
  Z_STREAM_ERROR: de,
  Z_DATA_ERROR: eu,
  Z_MEM_ERROR: tu,
  Z_BUF_ERROR: bd,
  Z_DEFLATED: Mo
} = et, Mi = 16180, No = 16181, Po = 16182, To = 16183, Do = 16184, Lo = 16185, Fo = 16186, zo = 16187, Uo = 16188, Bo = 16189, pi = 16190, Oe = 16191, on = 16192, jo = 16193, an = 16194, Wo = 16195, Zo = 16196, Go = 16197, Ho = 16198, Rr = 16199, kr = 16200, Vo = 16201, Yo = 16202, Jo = 16203, Xo = 16204, Ko = 16205, ln = 16206, qo = 16207, Qo = 16208, Z = 16209, ru = 16210, iu = 16211, _d = 852, vd = 592, Sd = 15, xd = Sd, ea = (r) => (r >>> 24 & 255) + (r >>> 8 & 65280) + ((r & 65280) << 8) + ((r & 255) << 24);
function Cd() {
  this.strm = null, this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new Uint16Array(320), this.work = new Uint16Array(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
}
const tt = (r) => {
  if (!r)
    return 1;
  const e = r.state;
  return !e || e.strm !== r || e.mode < Mi || e.mode > iu ? 1 : 0;
}, nu = (r) => {
  if (tt(r))
    return de;
  const e = r.state;
  return r.total_in = r.total_out = e.total = 0, r.msg = "", e.wrap && (r.adler = e.wrap & 1), e.mode = Mi, e.last = 0, e.havedict = 0, e.flags = -1, e.dmax = 32768, e.head = null, e.hold = 0, e.bits = 0, e.lencode = e.lendyn = new Int32Array(_d), e.distcode = e.distdyn = new Int32Array(vd), e.sane = 1, e.back = -1, qe;
}, su = (r) => {
  if (tt(r))
    return de;
  const e = r.state;
  return e.wsize = 0, e.whave = 0, e.wnext = 0, nu(r);
}, ou = (r, e) => {
  let t;
  if (tt(r))
    return de;
  const i = r.state;
  return e < 0 ? (t = 0, e = -e) : (t = (e >> 4) + 5, e < 48 && (e &= 15)), e && (e < 8 || e > 15) ? de : (i.window !== null && i.wbits !== e && (i.window = null), i.wrap = t, i.wbits = e, su(r));
}, au = (r, e) => {
  if (!r)
    return de;
  const t = new Cd();
  r.state = t, t.strm = r, t.window = null, t.mode = Mi;
  const i = ou(r, e);
  return i !== qe && (r.state = null), i;
}, Id = (r) => au(r, xd);
let ta = !0, un, fn;
const Ad = (r) => {
  if (ta) {
    un = new Int32Array(512), fn = new Int32Array(32);
    let e = 0;
    for (; e < 144; )
      r.lens[e++] = 8;
    for (; e < 256; )
      r.lens[e++] = 9;
    for (; e < 280; )
      r.lens[e++] = 7;
    for (; e < 288; )
      r.lens[e++] = 8;
    for (jt(ql, r.lens, 0, 288, un, 0, r.work, { bits: 9 }), e = 0; e < 32; )
      r.lens[e++] = 5;
    jt(Ql, r.lens, 0, 32, fn, 0, r.work, { bits: 5 }), ta = !1;
  }
  r.lencode = un, r.lenbits = 9, r.distcode = fn, r.distbits = 5;
}, lu = (r, e, t, i) => {
  let n;
  const s = r.state;
  return s.window === null && (s.wsize = 1 << s.wbits, s.wnext = 0, s.whave = 0, s.window = new Uint8Array(s.wsize)), i >= s.wsize ? (s.window.set(e.subarray(t - s.wsize, t), 0), s.wnext = 0, s.whave = s.wsize) : (n = s.wsize - s.wnext, n > i && (n = i), s.window.set(e.subarray(t - i, t - i + n), s.wnext), i -= n, i ? (s.window.set(e.subarray(t - i, t), 0), s.wnext = i, s.whave = s.wsize) : (s.wnext += n, s.wnext === s.wsize && (s.wnext = 0), s.whave < s.wsize && (s.whave += n))), 0;
}, Ed = (r, e) => {
  let t, i, n, s, o, a, l, u, f, d, h, c, p, g, m = 0, b, _, y, w, S, E, x, I;
  const A = new Uint8Array(4);
  let C, O;
  const q = (
    /* permutation of code lengths */
    new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15])
  );
  if (tt(r) || !r.output || !r.input && r.avail_in !== 0)
    return de;
  t = r.state, t.mode === Oe && (t.mode = on), o = r.next_out, n = r.output, l = r.avail_out, s = r.next_in, i = r.input, a = r.avail_in, u = t.hold, f = t.bits, d = a, h = l, I = qe;
  e:
    for (; ; )
      switch (t.mode) {
        case Mi:
          if (t.wrap === 0) {
            t.mode = on;
            break;
          }
          for (; f < 16; ) {
            if (a === 0)
              break e;
            a--, u += i[s++] << f, f += 8;
          }
          if (t.wrap & 2 && u === 35615) {
            t.wbits === 0 && (t.wbits = 15), t.check = 0, A[0] = u & 255, A[1] = u >>> 8 & 255, t.check = ee(t.check, A, 2, 0), u = 0, f = 0, t.mode = No;
            break;
          }
          if (t.head && (t.head.done = !1), !(t.wrap & 1) || /* check if zlib header allowed */
          (((u & 255) << 8) + (u >> 8)) % 31) {
            r.msg = "incorrect header check", t.mode = Z;
            break;
          }
          if ((u & 15) !== Mo) {
            r.msg = "unknown compression method", t.mode = Z;
            break;
          }
          if (u >>>= 4, f -= 4, x = (u & 15) + 8, t.wbits === 0 && (t.wbits = x), x > 15 || x > t.wbits) {
            r.msg = "invalid window size", t.mode = Z;
            break;
          }
          t.dmax = 1 << t.wbits, t.flags = 0, r.adler = t.check = 1, t.mode = u & 512 ? Bo : Oe, u = 0, f = 0;
          break;
        case No:
          for (; f < 16; ) {
            if (a === 0)
              break e;
            a--, u += i[s++] << f, f += 8;
          }
          if (t.flags = u, (t.flags & 255) !== Mo) {
            r.msg = "unknown compression method", t.mode = Z;
            break;
          }
          if (t.flags & 57344) {
            r.msg = "unknown header flags set", t.mode = Z;
            break;
          }
          t.head && (t.head.text = u >> 8 & 1), t.flags & 512 && t.wrap & 4 && (A[0] = u & 255, A[1] = u >>> 8 & 255, t.check = ee(t.check, A, 2, 0)), u = 0, f = 0, t.mode = Po;
        case Po:
          for (; f < 32; ) {
            if (a === 0)
              break e;
            a--, u += i[s++] << f, f += 8;
          }
          t.head && (t.head.time = u), t.flags & 512 && t.wrap & 4 && (A[0] = u & 255, A[1] = u >>> 8 & 255, A[2] = u >>> 16 & 255, A[3] = u >>> 24 & 255, t.check = ee(t.check, A, 4, 0)), u = 0, f = 0, t.mode = To;
        case To:
          for (; f < 16; ) {
            if (a === 0)
              break e;
            a--, u += i[s++] << f, f += 8;
          }
          t.head && (t.head.xflags = u & 255, t.head.os = u >> 8), t.flags & 512 && t.wrap & 4 && (A[0] = u & 255, A[1] = u >>> 8 & 255, t.check = ee(t.check, A, 2, 0)), u = 0, f = 0, t.mode = Do;
        case Do:
          if (t.flags & 1024) {
            for (; f < 16; ) {
              if (a === 0)
                break e;
              a--, u += i[s++] << f, f += 8;
            }
            t.length = u, t.head && (t.head.extra_len = u), t.flags & 512 && t.wrap & 4 && (A[0] = u & 255, A[1] = u >>> 8 & 255, t.check = ee(t.check, A, 2, 0)), u = 0, f = 0;
          } else t.head && (t.head.extra = null);
          t.mode = Lo;
        case Lo:
          if (t.flags & 1024 && (c = t.length, c > a && (c = a), c && (t.head && (x = t.head.extra_len - t.length, t.head.extra || (t.head.extra = new Uint8Array(t.head.extra_len)), t.head.extra.set(
            i.subarray(
              s,
              // extra field is limited to 65536 bytes
              // - no need for additional size check
              s + c
            ),
            /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
            x
          )), t.flags & 512 && t.wrap & 4 && (t.check = ee(t.check, i, c, s)), a -= c, s += c, t.length -= c), t.length))
            break e;
          t.length = 0, t.mode = Fo;
        case Fo:
          if (t.flags & 2048) {
            if (a === 0)
              break e;
            c = 0;
            do
              x = i[s + c++], t.head && x && t.length < 65536 && (t.head.name += String.fromCharCode(x));
            while (x && c < a);
            if (t.flags & 512 && t.wrap & 4 && (t.check = ee(t.check, i, c, s)), a -= c, s += c, x)
              break e;
          } else t.head && (t.head.name = null);
          t.length = 0, t.mode = zo;
        case zo:
          if (t.flags & 4096) {
            if (a === 0)
              break e;
            c = 0;
            do
              x = i[s + c++], t.head && x && t.length < 65536 && (t.head.comment += String.fromCharCode(x));
            while (x && c < a);
            if (t.flags & 512 && t.wrap & 4 && (t.check = ee(t.check, i, c, s)), a -= c, s += c, x)
              break e;
          } else t.head && (t.head.comment = null);
          t.mode = Uo;
        case Uo:
          if (t.flags & 512) {
            for (; f < 16; ) {
              if (a === 0)
                break e;
              a--, u += i[s++] << f, f += 8;
            }
            if (t.wrap & 4 && u !== (t.check & 65535)) {
              r.msg = "header crc mismatch", t.mode = Z;
              break;
            }
            u = 0, f = 0;
          }
          t.head && (t.head.hcrc = t.flags >> 9 & 1, t.head.done = !0), r.adler = t.check = 0, t.mode = Oe;
          break;
        case Bo:
          for (; f < 32; ) {
            if (a === 0)
              break e;
            a--, u += i[s++] << f, f += 8;
          }
          r.adler = t.check = ea(u), u = 0, f = 0, t.mode = pi;
        case pi:
          if (t.havedict === 0)
            return r.next_out = o, r.avail_out = l, r.next_in = s, r.avail_in = a, t.hold = u, t.bits = f, wd;
          r.adler = t.check = 1, t.mode = Oe;
        case Oe:
          if (e === gd || e === Or)
            break e;
        case on:
          if (t.last) {
            u >>>= f & 7, f -= f & 7, t.mode = ln;
            break;
          }
          for (; f < 3; ) {
            if (a === 0)
              break e;
            a--, u += i[s++] << f, f += 8;
          }
          switch (t.last = u & 1, u >>>= 1, f -= 1, u & 3) {
            case 0:
              t.mode = jo;
              break;
            case 1:
              if (Ad(t), t.mode = Rr, e === Or) {
                u >>>= 2, f -= 2;
                break e;
              }
              break;
            case 2:
              t.mode = Zo;
              break;
            case 3:
              r.msg = "invalid block type", t.mode = Z;
          }
          u >>>= 2, f -= 2;
          break;
        case jo:
          for (u >>>= f & 7, f -= f & 7; f < 32; ) {
            if (a === 0)
              break e;
            a--, u += i[s++] << f, f += 8;
          }
          if ((u & 65535) !== (u >>> 16 ^ 65535)) {
            r.msg = "invalid stored block lengths", t.mode = Z;
            break;
          }
          if (t.length = u & 65535, u = 0, f = 0, t.mode = an, e === Or)
            break e;
        case an:
          t.mode = Wo;
        case Wo:
          if (c = t.length, c) {
            if (c > a && (c = a), c > l && (c = l), c === 0)
              break e;
            n.set(i.subarray(s, s + c), o), a -= c, s += c, l -= c, o += c, t.length -= c;
            break;
          }
          t.mode = Oe;
          break;
        case Zo:
          for (; f < 14; ) {
            if (a === 0)
              break e;
            a--, u += i[s++] << f, f += 8;
          }
          if (t.nlen = (u & 31) + 257, u >>>= 5, f -= 5, t.ndist = (u & 31) + 1, u >>>= 5, f -= 5, t.ncode = (u & 15) + 4, u >>>= 4, f -= 4, t.nlen > 286 || t.ndist > 30) {
            r.msg = "too many length or distance symbols", t.mode = Z;
            break;
          }
          t.have = 0, t.mode = Go;
        case Go:
          for (; t.have < t.ncode; ) {
            for (; f < 3; ) {
              if (a === 0)
                break e;
              a--, u += i[s++] << f, f += 8;
            }
            t.lens[q[t.have++]] = u & 7, u >>>= 3, f -= 3;
          }
          for (; t.have < 19; )
            t.lens[q[t.have++]] = 0;
          if (t.lencode = t.lendyn, t.lenbits = 7, C = { bits: t.lenbits }, I = jt(md, t.lens, 0, 19, t.lencode, 0, t.work, C), t.lenbits = C.bits, I) {
            r.msg = "invalid code lengths set", t.mode = Z;
            break;
          }
          t.have = 0, t.mode = Ho;
        case Ho:
          for (; t.have < t.nlen + t.ndist; ) {
            for (; m = t.lencode[u & (1 << t.lenbits) - 1], b = m >>> 24, _ = m >>> 16 & 255, y = m & 65535, !(b <= f); ) {
              if (a === 0)
                break e;
              a--, u += i[s++] << f, f += 8;
            }
            if (y < 16)
              u >>>= b, f -= b, t.lens[t.have++] = y;
            else {
              if (y === 16) {
                for (O = b + 2; f < O; ) {
                  if (a === 0)
                    break e;
                  a--, u += i[s++] << f, f += 8;
                }
                if (u >>>= b, f -= b, t.have === 0) {
                  r.msg = "invalid bit length repeat", t.mode = Z;
                  break;
                }
                x = t.lens[t.have - 1], c = 3 + (u & 3), u >>>= 2, f -= 2;
              } else if (y === 17) {
                for (O = b + 3; f < O; ) {
                  if (a === 0)
                    break e;
                  a--, u += i[s++] << f, f += 8;
                }
                u >>>= b, f -= b, x = 0, c = 3 + (u & 7), u >>>= 3, f -= 3;
              } else {
                for (O = b + 7; f < O; ) {
                  if (a === 0)
                    break e;
                  a--, u += i[s++] << f, f += 8;
                }
                u >>>= b, f -= b, x = 0, c = 11 + (u & 127), u >>>= 7, f -= 7;
              }
              if (t.have + c > t.nlen + t.ndist) {
                r.msg = "invalid bit length repeat", t.mode = Z;
                break;
              }
              for (; c--; )
                t.lens[t.have++] = x;
            }
          }
          if (t.mode === Z)
            break;
          if (t.lens[256] === 0) {
            r.msg = "invalid code -- missing end-of-block", t.mode = Z;
            break;
          }
          if (t.lenbits = 9, C = { bits: t.lenbits }, I = jt(ql, t.lens, 0, t.nlen, t.lencode, 0, t.work, C), t.lenbits = C.bits, I) {
            r.msg = "invalid literal/lengths set", t.mode = Z;
            break;
          }
          if (t.distbits = 6, t.distcode = t.distdyn, C = { bits: t.distbits }, I = jt(Ql, t.lens, t.nlen, t.ndist, t.distcode, 0, t.work, C), t.distbits = C.bits, I) {
            r.msg = "invalid distances set", t.mode = Z;
            break;
          }
          if (t.mode = Rr, e === Or)
            break e;
        case Rr:
          t.mode = kr;
        case kr:
          if (a >= 6 && l >= 258) {
            r.next_out = o, r.avail_out = l, r.next_in = s, r.avail_in = a, t.hold = u, t.bits = f, ud(r, h), o = r.next_out, n = r.output, l = r.avail_out, s = r.next_in, i = r.input, a = r.avail_in, u = t.hold, f = t.bits, t.mode === Oe && (t.back = -1);
            break;
          }
          for (t.back = 0; m = t.lencode[u & (1 << t.lenbits) - 1], b = m >>> 24, _ = m >>> 16 & 255, y = m & 65535, !(b <= f); ) {
            if (a === 0)
              break e;
            a--, u += i[s++] << f, f += 8;
          }
          if (_ && !(_ & 240)) {
            for (w = b, S = _, E = y; m = t.lencode[E + ((u & (1 << w + S) - 1) >> w)], b = m >>> 24, _ = m >>> 16 & 255, y = m & 65535, !(w + b <= f); ) {
              if (a === 0)
                break e;
              a--, u += i[s++] << f, f += 8;
            }
            u >>>= w, f -= w, t.back += w;
          }
          if (u >>>= b, f -= b, t.back += b, t.length = y, _ === 0) {
            t.mode = Ko;
            break;
          }
          if (_ & 32) {
            t.back = -1, t.mode = Oe;
            break;
          }
          if (_ & 64) {
            r.msg = "invalid literal/length code", t.mode = Z;
            break;
          }
          t.extra = _ & 15, t.mode = Vo;
        case Vo:
          if (t.extra) {
            for (O = t.extra; f < O; ) {
              if (a === 0)
                break e;
              a--, u += i[s++] << f, f += 8;
            }
            t.length += u & (1 << t.extra) - 1, u >>>= t.extra, f -= t.extra, t.back += t.extra;
          }
          t.was = t.length, t.mode = Yo;
        case Yo:
          for (; m = t.distcode[u & (1 << t.distbits) - 1], b = m >>> 24, _ = m >>> 16 & 255, y = m & 65535, !(b <= f); ) {
            if (a === 0)
              break e;
            a--, u += i[s++] << f, f += 8;
          }
          if (!(_ & 240)) {
            for (w = b, S = _, E = y; m = t.distcode[E + ((u & (1 << w + S) - 1) >> w)], b = m >>> 24, _ = m >>> 16 & 255, y = m & 65535, !(w + b <= f); ) {
              if (a === 0)
                break e;
              a--, u += i[s++] << f, f += 8;
            }
            u >>>= w, f -= w, t.back += w;
          }
          if (u >>>= b, f -= b, t.back += b, _ & 64) {
            r.msg = "invalid distance code", t.mode = Z;
            break;
          }
          t.offset = y, t.extra = _ & 15, t.mode = Jo;
        case Jo:
          if (t.extra) {
            for (O = t.extra; f < O; ) {
              if (a === 0)
                break e;
              a--, u += i[s++] << f, f += 8;
            }
            t.offset += u & (1 << t.extra) - 1, u >>>= t.extra, f -= t.extra, t.back += t.extra;
          }
          if (t.offset > t.dmax) {
            r.msg = "invalid distance too far back", t.mode = Z;
            break;
          }
          t.mode = Xo;
        case Xo:
          if (l === 0)
            break e;
          if (c = h - l, t.offset > c) {
            if (c = t.offset - c, c > t.whave && t.sane) {
              r.msg = "invalid distance too far back", t.mode = Z;
              break;
            }
            c > t.wnext ? (c -= t.wnext, p = t.wsize - c) : p = t.wnext - c, c > t.length && (c = t.length), g = t.window;
          } else
            g = n, p = o - t.offset, c = t.length;
          c > l && (c = l), l -= c, t.length -= c;
          do
            n[o++] = g[p++];
          while (--c);
          t.length === 0 && (t.mode = kr);
          break;
        case Ko:
          if (l === 0)
            break e;
          n[o++] = t.length, l--, t.mode = kr;
          break;
        case ln:
          if (t.wrap) {
            for (; f < 32; ) {
              if (a === 0)
                break e;
              a--, u |= i[s++] << f, f += 8;
            }
            if (h -= l, r.total_out += h, t.total += h, t.wrap & 4 && h && (r.adler = t.check = /*UPDATE_CHECK(state.check, put - _out, _out);*/
            t.flags ? ee(t.check, n, h, o - h) : Xt(t.check, n, h, o - h)), h = l, t.wrap & 4 && (t.flags ? u : ea(u)) !== t.check) {
              r.msg = "incorrect data check", t.mode = Z;
              break;
            }
            u = 0, f = 0;
          }
          t.mode = qo;
        case qo:
          if (t.wrap && t.flags) {
            for (; f < 32; ) {
              if (a === 0)
                break e;
              a--, u += i[s++] << f, f += 8;
            }
            if (t.wrap & 4 && u !== (t.total & 4294967295)) {
              r.msg = "incorrect length check", t.mode = Z;
              break;
            }
            u = 0, f = 0;
          }
          t.mode = Qo;
        case Qo:
          I = yd;
          break e;
        case Z:
          I = eu;
          break e;
        case ru:
          return tu;
        case iu:
        default:
          return de;
      }
  return r.next_out = o, r.avail_out = l, r.next_in = s, r.avail_in = a, t.hold = u, t.bits = f, (t.wsize || h !== r.avail_out && t.mode < Z && (t.mode < ln || e !== $o)) && lu(r, r.output, r.next_out, h - r.avail_out), d -= r.avail_in, h -= r.avail_out, r.total_in += d, r.total_out += h, t.total += h, t.wrap & 4 && h && (r.adler = t.check = /*UPDATE_CHECK(state.check, strm.next_out - _out, _out);*/
  t.flags ? ee(t.check, n, h, r.next_out - h) : Xt(t.check, n, h, r.next_out - h)), r.data_type = t.bits + (t.last ? 64 : 0) + (t.mode === Oe ? 128 : 0) + (t.mode === Rr || t.mode === an ? 256 : 0), (d === 0 && h === 0 || e === $o) && I === qe && (I = bd), I;
}, Od = (r) => {
  if (tt(r))
    return de;
  let e = r.state;
  return e.window && (e.window = null), r.state = null, qe;
}, Rd = (r, e) => {
  if (tt(r))
    return de;
  const t = r.state;
  return t.wrap & 2 ? (t.head = e, e.done = !1, qe) : de;
}, kd = (r, e) => {
  const t = e.length;
  let i, n, s;
  return tt(r) || (i = r.state, i.wrap !== 0 && i.mode !== pi) ? de : i.mode === pi && (n = 1, n = Xt(n, e, t, 0), n !== i.check) ? eu : (s = lu(r, e, t, t), s ? (i.mode = ru, tu) : (i.havedict = 1, qe));
};
var $d = su, Md = ou, Nd = nu, Pd = Id, Td = au, Dd = Ed, Ld = Od, Fd = Rd, zd = kd, Ud = "pako inflate (from Nodeca project)", $e = {
  inflateReset: $d,
  inflateReset2: Md,
  inflateResetKeep: Nd,
  inflateInit: Pd,
  inflateInit2: Td,
  inflate: Dd,
  inflateEnd: Ld,
  inflateGetHeader: Fd,
  inflateSetDictionary: zd,
  inflateInfo: Ud
};
function Bd() {
  this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
}
var jd = Bd;
const uu = Object.prototype.toString, {
  Z_NO_FLUSH: Wd,
  Z_FINISH: Zd,
  Z_OK: Qt,
  Z_STREAM_END: cn,
  Z_NEED_DICT: hn,
  Z_STREAM_ERROR: Gd,
  Z_DATA_ERROR: ra,
  Z_MEM_ERROR: Hd
} = et;
function pr(r) {
  this.options = $i.assign({
    chunkSize: 1024 * 64,
    windowBits: 15,
    to: ""
  }, r || {});
  const e = this.options;
  e.raw && e.windowBits >= 0 && e.windowBits < 16 && (e.windowBits = -e.windowBits, e.windowBits === 0 && (e.windowBits = -15)), e.windowBits >= 0 && e.windowBits < 16 && !(r && r.windowBits) && (e.windowBits += 32), e.windowBits > 15 && e.windowBits < 48 && (e.windowBits & 15 || (e.windowBits |= 15)), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new Xl(), this.strm.avail_out = 0;
  let t = $e.inflateInit2(
    this.strm,
    e.windowBits
  );
  if (t !== Qt)
    throw new Error(Xe[t]);
  if (this.header = new jd(), $e.inflateGetHeader(this.strm, this.header), e.dictionary && (typeof e.dictionary == "string" ? e.dictionary = qt.string2buf(e.dictionary) : uu.call(e.dictionary) === "[object ArrayBuffer]" && (e.dictionary = new Uint8Array(e.dictionary)), e.raw && (t = $e.inflateSetDictionary(this.strm, e.dictionary), t !== Qt)))
    throw new Error(Xe[t]);
}
pr.prototype.push = function(r, e) {
  const t = this.strm, i = this.options.chunkSize, n = this.options.dictionary;
  let s, o, a;
  if (this.ended) return !1;
  for (e === ~~e ? o = e : o = e === !0 ? Zd : Wd, uu.call(r) === "[object ArrayBuffer]" ? t.input = new Uint8Array(r) : t.input = r, t.next_in = 0, t.avail_in = t.input.length; ; ) {
    for (t.avail_out === 0 && (t.output = new Uint8Array(i), t.next_out = 0, t.avail_out = i), s = $e.inflate(t, o), s === hn && n && (s = $e.inflateSetDictionary(t, n), s === Qt ? s = $e.inflate(t, o) : s === ra && (s = hn)); t.avail_in > 0 && s === cn && t.state.wrap > 0 && r[t.next_in] !== 0; )
      $e.inflateReset(t), s = $e.inflate(t, o);
    switch (s) {
      case Gd:
      case ra:
      case hn:
      case Hd:
        return this.onEnd(s), this.ended = !0, !1;
    }
    if (a = t.avail_out, t.next_out && (t.avail_out === 0 || s === cn))
      if (this.options.to === "string") {
        let l = qt.utf8border(t.output, t.next_out), u = t.next_out - l, f = qt.buf2string(t.output, l);
        t.next_out = u, t.avail_out = i - u, u && t.output.set(t.output.subarray(l, l + u), 0), this.onData(f);
      } else
        this.onData(t.output.length === t.next_out ? t.output : t.output.subarray(0, t.next_out));
    if (!(s === Qt && a === 0)) {
      if (s === cn)
        return s = $e.inflateEnd(this.strm), this.onEnd(s), this.ended = !0, !0;
      if (t.avail_in === 0) break;
    }
  }
  return !0;
};
pr.prototype.onData = function(r) {
  this.chunks.push(r);
};
pr.prototype.onEnd = function(r) {
  r === Qt && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = $i.flattenChunks(this.chunks)), this.chunks = [], this.err = r, this.msg = this.strm.msg;
};
function Fs(r, e) {
  const t = new pr(e);
  if (t.push(r), t.err) throw t.msg || Xe[t.err];
  return t.result;
}
function Vd(r, e) {
  return e = e || {}, e.raw = !0, Fs(r, e);
}
var Yd = pr, Jd = Fs, Xd = Vd, Kd = Fs, qd = et, Qd = {
  Inflate: Yd,
  inflate: Jd,
  inflateRaw: Xd,
  ungzip: Kd,
  constants: qd
};
const { Deflate: ep, deflate: tp, deflateRaw: rp, gzip: ip } = ad, { Inflate: np, inflate: sp, inflateRaw: op, ungzip: ap } = Qd;
var lp = ep, up = tp, fp = rp, cp = ip, hp = np, dp = sp, pp = op, mp = ap, gp = et, yp = {
  Deflate: lp,
  deflate: up,
  deflateRaw: fp,
  gzip: cp,
  Inflate: hp,
  inflate: dp,
  inflateRaw: pp,
  ungzip: mp,
  constants: gp
}, wp = Object.defineProperty, bp = (r, e, t) => e in r ? wp(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, v = (r, e, t) => bp(r, typeof e != "symbol" ? e + "" : e, t), ia, _p = Object.defineProperty, vp = (r, e, t) => e in r ? _p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, na = (r, e, t) => vp(r, typeof e != "symbol" ? e + "" : e, t), K = /* @__PURE__ */ ((r) => (r[r.Document = 0] = "Document", r[r.DocumentType = 1] = "DocumentType", r[r.Element = 2] = "Element", r[r.Text = 3] = "Text", r[r.CDATA = 4] = "CDATA", r[r.Comment = 5] = "Comment", r))(K || {});
const sa = {
  Node: ["childNodes", "parentNode", "parentElement", "textContent"],
  ShadowRoot: ["host", "styleSheets"],
  Element: ["shadowRoot", "querySelector", "querySelectorAll"],
  MutationObserver: []
}, oa = {
  Node: ["contains", "getRootNode"],
  ShadowRoot: ["getSelection"],
  Element: [],
  MutationObserver: ["constructor"]
}, $r = {}, Sp = () => !!globalThis.Zone;
function zs(r) {
  if ($r[r])
    return $r[r];
  const e = globalThis[r], t = e.prototype, i = r in sa ? sa[r] : void 0, n = !!(i && // @ts-expect-error 2345
  i.every(
    (a) => {
      var l, u;
      return !!((u = (l = Object.getOwnPropertyDescriptor(t, a)) == null ? void 0 : l.get) != null && u.toString().includes("[native code]"));
    }
  )), s = r in oa ? oa[r] : void 0, o = !!(s && s.every(
    // @ts-expect-error 2345
    (a) => {
      var l;
      return typeof t[a] == "function" && ((l = t[a]) == null ? void 0 : l.toString().includes("[native code]"));
    }
  ));
  if (n && o && !Sp())
    return $r[r] = e.prototype, e.prototype;
  try {
    const a = document.createElement("iframe");
    document.body.appendChild(a);
    const l = a.contentWindow;
    if (!l) return e.prototype;
    const u = l[r].prototype;
    return document.body.removeChild(a), u ? $r[r] = u : t;
  } catch {
    return t;
  }
}
const dn = {};
function Ue(r, e, t) {
  var i;
  const n = `${r}.${String(t)}`;
  if (dn[n])
    return dn[n].call(
      e
    );
  const s = zs(r), o = (i = Object.getOwnPropertyDescriptor(
    s,
    t
  )) == null ? void 0 : i.get;
  return o ? (dn[n] = o, o.call(e)) : e[t];
}
const pn = {};
function fu(r, e, t) {
  const i = `${r}.${String(t)}`;
  if (pn[i])
    return pn[i].bind(
      e
    );
  const s = zs(r)[t];
  return typeof s != "function" ? e[t] : (pn[i] = s, s.bind(e));
}
function xp(r) {
  return Ue("Node", r, "childNodes");
}
function Cp(r) {
  return Ue("Node", r, "parentNode");
}
function Ip(r) {
  return Ue("Node", r, "parentElement");
}
function Ap(r) {
  return Ue("Node", r, "textContent");
}
function Ep(r, e) {
  return fu("Node", r, "contains")(e);
}
function Op(r) {
  return fu("Node", r, "getRootNode")();
}
function Rp(r) {
  return !r || !("host" in r) ? null : Ue("ShadowRoot", r, "host");
}
function kp(r) {
  return r.styleSheets;
}
function $p(r) {
  return !r || !("shadowRoot" in r) ? null : Ue("Element", r, "shadowRoot");
}
function Mp(r, e) {
  return Ue("Element", r, "querySelector")(e);
}
function Np(r, e) {
  return Ue("Element", r, "querySelectorAll")(e);
}
function Pp() {
  return zs("MutationObserver").constructor;
}
const re = {
  childNodes: xp,
  parentNode: Cp,
  parentElement: Ip,
  textContent: Ap,
  contains: Ep,
  getRootNode: Op,
  host: Rp,
  styleSheets: kp,
  shadowRoot: $p,
  querySelector: Mp,
  querySelectorAll: Np,
  mutationObserver: Pp
};
function cu(r) {
  return r.nodeType === r.ELEMENT_NODE;
}
function Wt(r) {
  const e = (
    // anchor and textarea elements also have a `host` property
    // but only shadow roots have a `mode` property
    r && "host" in r && "mode" in r && re.host(r) || null
  );
  return !!(e && "shadowRoot" in e && re.shadowRoot(e) === r);
}
function Zt(r) {
  return Object.prototype.toString.call(r) === "[object ShadowRoot]";
}
function Tp(r) {
  return r.includes(" background-clip: text;") && !r.includes(" -webkit-background-clip: text;") && (r = r.replace(
    /\sbackground-clip:\s*text;/g,
    " -webkit-background-clip: text; background-clip: text;"
  )), r;
}
function Dp(r) {
  const { cssText: e } = r;
  if (e.split('"').length < 3) return e;
  const t = ["@import", `url(${JSON.stringify(r.href)})`];
  return r.layerName === "" ? t.push("layer") : r.layerName && t.push(`layer(${r.layerName})`), r.supportsText && t.push(`supports(${r.supportsText})`), r.media.length && t.push(r.media.mediaText), t.join(" ") + ";";
}
function Jn(r) {
  try {
    const e = r.rules || r.cssRules;
    if (!e)
      return null;
    let t = r.href;
    !t && r.ownerNode && r.ownerNode.ownerDocument && (t = r.ownerNode.ownerDocument.location.href);
    const i = Array.from(
      e,
      (n) => hu(n, t)
    ).join("");
    return Tp(i);
  } catch {
    return null;
  }
}
function hu(r, e) {
  if (Fp(r)) {
    let t;
    try {
      t = // for same-origin stylesheets,
      // we can access the imported stylesheet rules directly
      Jn(r.styleSheet) || // work around browser issues with the raw string `@import url(...)` statement
      Dp(r);
    } catch {
      t = r.cssText;
    }
    return r.styleSheet.href ? mi(t, r.styleSheet.href) : t;
  } else {
    let t = r.cssText;
    return zp(r) && r.selectorText.includes(":") && (t = Lp(t)), e ? mi(t, e) : t;
  }
}
function Lp(r) {
  const e = /(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm;
  return r.replace(e, "$1\\$2");
}
function Fp(r) {
  return "styleSheet" in r;
}
function zp(r) {
  return "selectorText" in r;
}
class du {
  constructor() {
    na(this, "idNodeMap", /* @__PURE__ */ new Map()), na(this, "nodeMetaMap", /* @__PURE__ */ new WeakMap());
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
      (i) => this.removeNodeFromMap(i)
    );
  }
  has(e) {
    return this.idNodeMap.has(e);
  }
  hasNode(e) {
    return this.nodeMetaMap.has(e);
  }
  add(e, t) {
    const i = t.id;
    this.idNodeMap.set(i, e), this.nodeMetaMap.set(e, t);
  }
  replace(e, t) {
    const i = this.getNode(e);
    if (i) {
      const n = this.nodeMetaMap.get(i);
      n && this.nodeMetaMap.set(t, n);
    }
    this.idNodeMap.set(e, t);
  }
  reset() {
    this.idNodeMap = /* @__PURE__ */ new Map(), this.nodeMetaMap = /* @__PURE__ */ new WeakMap();
  }
}
function Up() {
  return new du();
}
function Us({
  element: r,
  maskInputOptions: e,
  tagName: t,
  type: i,
  value: n,
  maskInputFn: s
}) {
  let o = n || "";
  const a = i && Qe(i);
  return (e[t.toLowerCase()] || a && e[a]) && (s ? o = s(o, r) : o = "*".repeat(o.length)), o;
}
function Qe(r) {
  return r.toLowerCase();
}
const aa = "__rrweb_original__";
function Bp(r) {
  const e = r.getContext("2d");
  if (!e) return !0;
  const t = 50;
  for (let i = 0; i < r.width; i += t)
    for (let n = 0; n < r.height; n += t) {
      const s = e.getImageData, o = aa in s ? s[aa] : s;
      if (new Uint32Array(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
        o.call(
          e,
          i,
          n,
          Math.min(t, r.width - i),
          Math.min(t, r.height - n)
        ).data.buffer
      ).some((l) => l !== 0)) return !1;
    }
  return !0;
}
function Bs(r) {
  const e = r.type;
  return r.hasAttribute("data-rr-is-password") ? "password" : e ? (
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    Qe(e)
  ) : null;
}
function pu(r, e) {
  let t;
  try {
    t = new URL(r, e ?? window.location.href);
  } catch {
    return null;
  }
  const i = /\.([0-9a-z]+)(?:$)/i, n = t.pathname.match(i);
  return (n == null ? void 0 : n[1]) ?? null;
}
function jp(r) {
  let e = "";
  return r.indexOf("//") > -1 ? e = r.split("/").slice(0, 3).join("/") : e = r.split("/")[0], e = e.split("?")[0], e;
}
const Wp = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm, Zp = /^(?:[a-z+]+:)?\/\//i, Gp = /^www\..*/i, Hp = /^(data:)([^,]*),(.*)/i;
function mi(r, e) {
  return (r || "").replace(
    Wp,
    (t, i, n, s, o, a) => {
      const l = n || o || a, u = i || s || "";
      if (!l)
        return t;
      if (Zp.test(l) || Gp.test(l))
        return `url(${u}${l}${u})`;
      if (Hp.test(l))
        return `url(${u}${l}${u})`;
      if (l[0] === "/")
        return `url(${u}${jp(e) + l}${u})`;
      const f = e.split("/"), d = l.split("/");
      f.pop();
      for (const h of d)
        h !== "." && (h === ".." ? f.pop() : f.push(h));
      return `url(${u}${f.join("/")}${u})`;
    }
  );
}
function mn(r) {
  return r.replace(/(\/\*[^*]*\*\/)|[\s;]/g, "");
}
function Vp(r, e) {
  const t = Array.from(e.childNodes), i = [];
  if (t.length > 1 && r && typeof r == "string") {
    const n = mn(r);
    for (let s = 1; s < t.length; s++)
      if (t[s].textContent && typeof t[s].textContent == "string") {
        const o = mn(t[s].textContent);
        for (let a = 3; a < o.length; a++) {
          const l = o.substring(0, a);
          if (n.split(l).length === 2) {
            const u = n.indexOf(l);
            for (let f = u; f < r.length; f++)
              if (mn(r.substring(0, f)).length === u) {
                i.push(r.substring(0, f)), r = r.substring(f);
                break;
              }
            break;
          }
        }
      }
  }
  return i.push(r), i;
}
function Yp(r, e) {
  return Vp(r, e).join("/* rr_split */");
}
let Jp = 1;
const Xp = new RegExp("[^a-z0-9-_:]"), er = -2;
function mu() {
  return Jp++;
}
function Kp(r) {
  if (r instanceof HTMLFormElement)
    return "form";
  const e = Qe(r.tagName);
  return Xp.test(e) ? "div" : e;
}
let ot, la;
const qp = /^[^ \t\n\r\u000c]+/, Qp = /^[, \t\n\r\u000c]+/;
function em(r, e) {
  if (e.trim() === "")
    return e;
  let t = 0;
  function i(s) {
    let o;
    const a = s.exec(e.substring(t));
    return a ? (o = a[0], t += o.length, o) : "";
  }
  const n = [];
  for (; i(Qp), !(t >= e.length); ) {
    let s = i(qp);
    if (s.slice(-1) === ",")
      s = ht(r, s.substring(0, s.length - 1)), n.push(s);
    else {
      let o = "";
      s = ht(r, s);
      let a = !1;
      for (; ; ) {
        const l = e.charAt(t);
        if (l === "") {
          n.push((s + o).trim());
          break;
        } else if (a)
          l === ")" && (a = !1);
        else if (l === ",") {
          t += 1, n.push((s + o).trim());
          break;
        } else l === "(" && (a = !0);
        o += l, t += 1;
      }
    }
  }
  return n.join(", ");
}
const ua = /* @__PURE__ */ new WeakMap();
function ht(r, e) {
  return !e || e.trim() === "" ? e : js(r, e);
}
function tm(r) {
  return !!(r.tagName === "svg" || r.ownerSVGElement);
}
function js(r, e) {
  let t = ua.get(r);
  if (t || (t = r.createElement("a"), ua.set(r, t)), !e)
    e = "";
  else if (e.startsWith("blob:") || e.startsWith("data:"))
    return e;
  return t.setAttribute("href", e), t.href;
}
function gu(r, e, t, i) {
  return i && (t === "src" || t === "href" && !(e === "use" && i[0] === "#") || t === "xlink:href" && i[0] !== "#" || t === "background" && (e === "table" || e === "td" || e === "th") ? ht(r, i) : t === "srcset" ? em(r, i) : t === "style" ? mi(i, js(r)) : e === "object" && t === "data" ? ht(r, i) : i);
}
function yu(r, e, t) {
  return (r === "video" || r === "audio") && e === "autoplay";
}
function rm(r, e, t) {
  try {
    if (typeof e == "string") {
      if (r.classList.contains(e))
        return !0;
    } else
      for (let i = r.classList.length; i--; ) {
        const n = r.classList[i];
        if (e.test(n))
          return !0;
      }
    if (t)
      return r.matches(t);
  } catch {
  }
  return !1;
}
function gi(r, e, t) {
  if (!r) return !1;
  if (r.nodeType !== r.ELEMENT_NODE)
    return t ? gi(re.parentNode(r), e, t) : !1;
  for (let i = r.classList.length; i--; ) {
    const n = r.classList[i];
    if (e.test(n))
      return !0;
  }
  return t ? gi(re.parentNode(r), e, t) : !1;
}
function wu(r, e, t, i) {
  let n;
  if (cu(r)) {
    if (n = r, !re.childNodes(n).length)
      return !1;
  } else {
    if (re.parentElement(r) === null)
      return !1;
    n = re.parentElement(r);
  }
  try {
    if (typeof e == "string") {
      if (i) {
        if (n.closest(`.${e}`)) return !0;
      } else if (n.classList.contains(e)) return !0;
    } else if (gi(n, e, i)) return !0;
    if (t) {
      if (i) {
        if (n.closest(t)) return !0;
      } else if (n.matches(t)) return !0;
    }
  } catch {
  }
  return !1;
}
function im(r, e, t) {
  const i = r.contentWindow;
  if (!i)
    return;
  let n = !1, s;
  try {
    s = i.document.readyState;
  } catch {
    return;
  }
  if (s !== "complete") {
    const a = setTimeout(() => {
      n || (e(), n = !0);
    }, t);
    r.addEventListener("load", () => {
      clearTimeout(a), n = !0, e();
    });
    return;
  }
  const o = "about:blank";
  if (i.location.href !== o || r.src === o || r.src === "")
    return setTimeout(e, 0), r.addEventListener("load", e);
  r.addEventListener("load", e);
}
function nm(r, e, t) {
  let i = !1, n;
  try {
    n = r.sheet;
  } catch {
    return;
  }
  if (n) return;
  const s = setTimeout(() => {
    i || (e(), i = !0);
  }, t);
  r.addEventListener("load", () => {
    clearTimeout(s), i = !0, e();
  });
}
function sm(r, e) {
  const {
    doc: t,
    mirror: i,
    blockClass: n,
    blockSelector: s,
    needsMask: o,
    inlineStylesheet: a,
    maskInputOptions: l = {},
    maskTextFn: u,
    maskInputFn: f,
    dataURLOptions: d = {},
    inlineImages: h,
    recordCanvas: c,
    keepIframeSrcFn: p,
    newlyAddedElement: g = !1,
    cssCaptured: m = !1
  } = e, b = om(t, i);
  switch (r.nodeType) {
    case r.DOCUMENT_NODE:
      return r.compatMode !== "CSS1Compat" ? {
        type: K.Document,
        childNodes: [],
        compatMode: r.compatMode
        // probably "BackCompat"
      } : {
        type: K.Document,
        childNodes: []
      };
    case r.DOCUMENT_TYPE_NODE:
      return {
        type: K.DocumentType,
        name: r.name,
        publicId: r.publicId,
        systemId: r.systemId,
        rootId: b
      };
    case r.ELEMENT_NODE:
      return lm(r, {
        doc: t,
        blockClass: n,
        blockSelector: s,
        inlineStylesheet: a,
        maskInputOptions: l,
        maskInputFn: f,
        dataURLOptions: d,
        inlineImages: h,
        recordCanvas: c,
        keepIframeSrcFn: p,
        newlyAddedElement: g,
        rootId: b
      });
    case r.TEXT_NODE:
      return am(r, {
        doc: t,
        needsMask: o,
        maskTextFn: u,
        rootId: b,
        cssCaptured: m
      });
    case r.CDATA_SECTION_NODE:
      return {
        type: K.CDATA,
        textContent: "",
        rootId: b
      };
    case r.COMMENT_NODE:
      return {
        type: K.Comment,
        textContent: re.textContent(r) || "",
        rootId: b
      };
    default:
      return !1;
  }
}
function om(r, e) {
  if (!e.hasNode(r)) return;
  const t = e.getId(r);
  return t === 1 ? void 0 : t;
}
function am(r, e) {
  const { needsMask: t, maskTextFn: i, rootId: n, cssCaptured: s } = e, o = re.parentNode(r), a = o && o.tagName;
  let l = "";
  const u = a === "STYLE" ? !0 : void 0, f = a === "SCRIPT" ? !0 : void 0;
  return f ? l = "SCRIPT_PLACEHOLDER" : s || (l = re.textContent(r), u && l && (l = mi(l, js(e.doc)))), !u && !f && l && t && (l = i ? i(l, re.parentElement(r)) : l.replace(/[\S]/g, "*")), {
    type: K.Text,
    textContent: l || "",
    rootId: n
  };
}
function lm(r, e) {
  const {
    doc: t,
    blockClass: i,
    blockSelector: n,
    inlineStylesheet: s,
    maskInputOptions: o = {},
    maskInputFn: a,
    dataURLOptions: l = {},
    inlineImages: u,
    recordCanvas: f,
    keepIframeSrcFn: d,
    newlyAddedElement: h = !1,
    rootId: c
  } = e, p = rm(r, i, n), g = Kp(r);
  let m = {};
  const b = r.attributes.length;
  for (let y = 0; y < b; y++) {
    const w = r.attributes[y];
    yu(g, w.name, w.value) || (m[w.name] = gu(
      t,
      g,
      Qe(w.name),
      w.value
    ));
  }
  if (g === "link" && s) {
    const y = Array.from(t.styleSheets).find((S) => S.href === r.href);
    let w = null;
    y && (w = Jn(y)), w && (delete m.rel, delete m.href, m._cssText = w);
  }
  if (g === "style" && r.sheet) {
    let y = Jn(
      r.sheet
    );
    y && (r.childNodes.length > 1 && (y = Yp(y, r)), m._cssText = y);
  }
  if (g === "input" || g === "textarea" || g === "select") {
    const y = r.value, w = r.checked;
    m.type !== "radio" && m.type !== "checkbox" && m.type !== "submit" && m.type !== "button" && y ? m.value = Us({
      element: r,
      type: Bs(r),
      tagName: g,
      value: y,
      maskInputOptions: o,
      maskInputFn: a
    }) : w && (m.checked = w);
  }
  if (g === "option" && (r.selected && !o.select ? m.selected = !0 : delete m.selected), g === "dialog" && r.open && (m.rr_open_mode = r.matches("dialog:modal") ? "modal" : "non-modal"), g === "canvas" && f) {
    if (r.__context === "2d")
      Bp(r) || (m.rr_dataURL = r.toDataURL(
        l.type,
        l.quality
      ));
    else if (!("__context" in r)) {
      const y = r.toDataURL(
        l.type,
        l.quality
      ), w = t.createElement("canvas");
      w.width = r.width, w.height = r.height;
      const S = w.toDataURL(
        l.type,
        l.quality
      );
      y !== S && (m.rr_dataURL = y);
    }
  }
  if (g === "img" && u) {
    ot || (ot = t.createElement("canvas"), la = ot.getContext("2d"));
    const y = r, w = y.currentSrc || y.getAttribute("src") || "<unknown-src>", S = y.crossOrigin, E = () => {
      y.removeEventListener("load", E);
      try {
        ot.width = y.naturalWidth, ot.height = y.naturalHeight, la.drawImage(y, 0, 0), m.rr_dataURL = ot.toDataURL(
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
      y.crossOrigin === "anonymous" && (S ? m.crossOrigin = S : y.removeAttribute("crossorigin"));
    };
    y.complete && y.naturalWidth !== 0 ? E() : y.addEventListener("load", E);
  }
  if (g === "audio" || g === "video") {
    const y = m;
    y.rr_mediaState = r.paused ? "paused" : "played", y.rr_mediaCurrentTime = r.currentTime, y.rr_mediaPlaybackRate = r.playbackRate, y.rr_mediaMuted = r.muted, y.rr_mediaLoop = r.loop, y.rr_mediaVolume = r.volume;
  }
  if (h || (r.scrollLeft && (m.rr_scrollLeft = r.scrollLeft), r.scrollTop && (m.rr_scrollTop = r.scrollTop)), p) {
    const { width: y, height: w } = r.getBoundingClientRect();
    m = {
      class: m.class,
      rr_width: `${y}px`,
      rr_height: `${w}px`
    };
  }
  g === "iframe" && !d(m.src) && (r.contentDocument || (m.rr_src = m.src), delete m.src);
  let _;
  try {
    customElements.get(g) && (_ = !0);
  } catch {
  }
  return {
    type: K.Element,
    tagName: g,
    attributes: m,
    childNodes: [],
    isSVG: tm(r) || void 0,
    needBlock: p,
    rootId: c,
    isCustom: _
  };
}
function B(r) {
  return r == null ? "" : r.toLowerCase();
}
function um(r, e) {
  if (e.comment && r.type === K.Comment)
    return !0;
  if (r.type === K.Element) {
    if (e.script && // script tag
    (r.tagName === "script" || // (module)preload link
    r.tagName === "link" && (r.attributes.rel === "preload" || r.attributes.rel === "modulepreload") && r.attributes.as === "script" || // prefetch link
    r.tagName === "link" && r.attributes.rel === "prefetch" && typeof r.attributes.href == "string" && pu(r.attributes.href) === "js"))
      return !0;
    if (e.headFavicon && (r.tagName === "link" && r.attributes.rel === "shortcut icon" || r.tagName === "meta" && (B(r.attributes.name).match(
      /^msapplication-tile(image|color)$/
    ) || B(r.attributes.name) === "application-name" || B(r.attributes.rel) === "icon" || B(r.attributes.rel) === "apple-touch-icon" || B(r.attributes.rel) === "shortcut icon")))
      return !0;
    if (r.tagName === "meta") {
      if (e.headMetaDescKeywords && B(r.attributes.name).match(/^description|keywords$/))
        return !0;
      if (e.headMetaSocial && (B(r.attributes.property).match(/^(og|twitter|fb):/) || // og = opengraph (facebook)
      B(r.attributes.name).match(/^(og|twitter):/) || B(r.attributes.name) === "pinterest"))
        return !0;
      if (e.headMetaRobots && (B(r.attributes.name) === "robots" || B(r.attributes.name) === "googlebot" || B(r.attributes.name) === "bingbot"))
        return !0;
      if (e.headMetaHttpEquiv && r.attributes["http-equiv"] !== void 0)
        return !0;
      if (e.headMetaAuthorship && (B(r.attributes.name) === "author" || B(r.attributes.name) === "generator" || B(r.attributes.name) === "framework" || B(r.attributes.name) === "publisher" || B(r.attributes.name) === "progid" || B(r.attributes.property).match(/^article:/) || B(r.attributes.property).match(/^product:/)))
        return !0;
      if (e.headMetaVerification && (B(r.attributes.name) === "google-site-verification" || B(r.attributes.name) === "yandex-verification" || B(r.attributes.name) === "csrf-token" || B(r.attributes.name) === "p:domain_verify" || B(r.attributes.name) === "verify-v1" || B(r.attributes.name) === "verification" || B(r.attributes.name) === "shopify-checkout-api-token"))
        return !0;
    }
  }
  return !1;
}
function dt(r, e) {
  const {
    doc: t,
    mirror: i,
    blockClass: n,
    blockSelector: s,
    maskTextClass: o,
    maskTextSelector: a,
    skipChild: l = !1,
    inlineStylesheet: u = !0,
    maskInputOptions: f = {},
    maskTextFn: d,
    maskInputFn: h,
    slimDOMOptions: c,
    dataURLOptions: p = {},
    inlineImages: g = !1,
    recordCanvas: m = !1,
    onSerialize: b,
    onIframeLoad: _,
    iframeLoadTimeout: y = 5e3,
    onStylesheetLoad: w,
    stylesheetLoadTimeout: S = 5e3,
    keepIframeSrcFn: E = () => !1,
    newlyAddedElement: x = !1,
    cssCaptured: I = !1
  } = e;
  let { needsMask: A } = e, { preserveWhiteSpace: C = !0 } = e;
  A || (A = wu(
    r,
    o,
    a,
    A === void 0
  ));
  const O = sm(r, {
    doc: t,
    mirror: i,
    blockClass: n,
    blockSelector: s,
    needsMask: A,
    inlineStylesheet: u,
    maskInputOptions: f,
    maskTextFn: d,
    maskInputFn: h,
    dataURLOptions: p,
    inlineImages: g,
    recordCanvas: m,
    keepIframeSrcFn: E,
    newlyAddedElement: x,
    cssCaptured: I
  });
  if (!O)
    return console.warn(r, "not serialized"), null;
  let q;
  i.hasNode(r) ? q = i.getId(r) : um(O, c) || !C && O.type === K.Text && !O.textContent.replace(/^\s+|\s+$/gm, "").length ? q = er : q = mu();
  const $ = Object.assign(O, { id: q });
  if (i.add(r, $), q === er)
    return null;
  b && b(r);
  let we = !l;
  if ($.type === K.Element) {
    we = we && !$.needBlock, delete $.needBlock;
    const X = re.shadowRoot(r);
    X && Zt(X) && ($.isShadowHost = !0);
  }
  if (($.type === K.Document || $.type === K.Element) && we) {
    c.headWhitespace && $.type === K.Element && $.tagName === "head" && (C = !1);
    const X = {
      doc: t,
      mirror: i,
      blockClass: n,
      blockSelector: s,
      needsMask: A,
      maskTextClass: o,
      maskTextSelector: a,
      skipChild: l,
      inlineStylesheet: u,
      maskInputOptions: f,
      maskTextFn: d,
      maskInputFn: h,
      slimDOMOptions: c,
      dataURLOptions: p,
      inlineImages: g,
      recordCanvas: m,
      preserveWhiteSpace: C,
      onSerialize: b,
      onIframeLoad: _,
      iframeLoadTimeout: y,
      onStylesheetLoad: w,
      stylesheetLoadTimeout: S,
      keepIframeSrcFn: E,
      cssCaptured: !1
    };
    if (!($.type === K.Element && $.tagName === "textarea" && $.attributes.value !== void 0)) {
      $.type === K.Element && $.attributes._cssText !== void 0 && typeof $.attributes._cssText == "string" && (X.cssCaptured = !0);
      for (const je of Array.from(re.childNodes(r))) {
        const _e = dt(je, X);
        _e && $.childNodes.push(_e);
      }
    }
    let fe = null;
    if (cu(r) && (fe = re.shadowRoot(r)))
      for (const je of Array.from(re.childNodes(fe))) {
        const _e = dt(je, X);
        _e && (Zt(fe) && (_e.isShadow = !0), $.childNodes.push(_e));
      }
  }
  const be = re.parentNode(r);
  return be && Wt(be) && Zt(be) && ($.isShadow = !0), $.type === K.Element && $.tagName === "iframe" && im(
    r,
    () => {
      const X = r.contentDocument;
      if (X && _) {
        const fe = dt(X, {
          doc: X,
          mirror: i,
          blockClass: n,
          blockSelector: s,
          needsMask: A,
          maskTextClass: o,
          maskTextSelector: a,
          skipChild: !1,
          inlineStylesheet: u,
          maskInputOptions: f,
          maskTextFn: d,
          maskInputFn: h,
          slimDOMOptions: c,
          dataURLOptions: p,
          inlineImages: g,
          recordCanvas: m,
          preserveWhiteSpace: C,
          onSerialize: b,
          onIframeLoad: _,
          iframeLoadTimeout: y,
          onStylesheetLoad: w,
          stylesheetLoadTimeout: S,
          keepIframeSrcFn: E
        });
        fe && _(
          r,
          fe
        );
      }
    },
    y
  ), $.type === K.Element && $.tagName === "link" && typeof $.attributes.rel == "string" && ($.attributes.rel === "stylesheet" || $.attributes.rel === "preload" && typeof $.attributes.href == "string" && pu($.attributes.href) === "css") && nm(
    r,
    () => {
      if (w) {
        const X = dt(r, {
          doc: t,
          mirror: i,
          blockClass: n,
          blockSelector: s,
          needsMask: A,
          maskTextClass: o,
          maskTextSelector: a,
          skipChild: !1,
          inlineStylesheet: u,
          maskInputOptions: f,
          maskTextFn: d,
          maskInputFn: h,
          slimDOMOptions: c,
          dataURLOptions: p,
          inlineImages: g,
          recordCanvas: m,
          preserveWhiteSpace: C,
          onSerialize: b,
          onIframeLoad: _,
          iframeLoadTimeout: y,
          onStylesheetLoad: w,
          stylesheetLoadTimeout: S,
          keepIframeSrcFn: E
        });
        X && w(
          r,
          X
        );
      }
    },
    S
  ), $;
}
function fm(r, e) {
  const {
    mirror: t = new du(),
    blockClass: i = "rr-block",
    blockSelector: n = null,
    maskTextClass: s = "rr-mask",
    maskTextSelector: o = null,
    inlineStylesheet: a = !0,
    inlineImages: l = !1,
    recordCanvas: u = !1,
    maskAllInputs: f = !1,
    maskTextFn: d,
    maskInputFn: h,
    slimDOM: c = !1,
    dataURLOptions: p,
    preserveWhiteSpace: g,
    onSerialize: m,
    onIframeLoad: b,
    iframeLoadTimeout: _,
    onStylesheetLoad: y,
    stylesheetLoadTimeout: w,
    keepIframeSrcFn: S = () => !1
  } = e || {};
  return dt(r, {
    doc: r,
    mirror: t,
    blockClass: i,
    blockSelector: n,
    maskTextClass: s,
    maskTextSelector: o,
    skipChild: !1,
    inlineStylesheet: a,
    maskInputOptions: f === !0 ? {
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
    } : f === !1 ? {
      password: !0
    } : f,
    maskTextFn: d,
    maskInputFn: h,
    slimDOMOptions: c === !0 || c === "all" ? (
      // if true: set of sensible options that should not throw away any information
      {
        script: !0,
        comment: !0,
        headFavicon: !0,
        headWhitespace: !0,
        headMetaDescKeywords: c === "all",
        // destructive
        headMetaSocial: !0,
        headMetaRobots: !0,
        headMetaHttpEquiv: !0,
        headMetaAuthorship: !0,
        headMetaVerification: !0
      }
    ) : c === !1 ? {} : c,
    dataURLOptions: p,
    inlineImages: l,
    recordCanvas: u,
    preserveWhiteSpace: g,
    onSerialize: m,
    onIframeLoad: b,
    iframeLoadTimeout: _,
    onStylesheetLoad: y,
    stylesheetLoadTimeout: w,
    keepIframeSrcFn: S,
    newlyAddedElement: !1
  });
}
function cm(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
function hm(r) {
  if (r.__esModule) return r;
  var e = r.default;
  if (typeof e == "function") {
    var t = function i() {
      return this instanceof i ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    t.prototype = e.prototype;
  } else t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(r).forEach(function(i) {
    var n = Object.getOwnPropertyDescriptor(r, i);
    Object.defineProperty(t, i, n.get ? n : {
      enumerable: !0,
      get: function() {
        return r[i];
      }
    });
  }), t;
}
var Ws = { exports: {} }, j = String, bu = function() {
  return { isColorSupported: !1, reset: j, bold: j, dim: j, italic: j, underline: j, inverse: j, hidden: j, strikethrough: j, black: j, red: j, green: j, yellow: j, blue: j, magenta: j, cyan: j, white: j, gray: j, bgBlack: j, bgRed: j, bgGreen: j, bgYellow: j, bgBlue: j, bgMagenta: j, bgCyan: j, bgWhite: j };
};
Ws.exports = bu();
Ws.exports.createColors = bu;
var dm = Ws.exports;
const pm = {}, mm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: pm
}, Symbol.toStringTag, { value: "Module" })), ge = /* @__PURE__ */ hm(mm);
let fa = dm, ca = ge, Xn = class _u extends Error {
  constructor(e, t, i, n, s, o) {
    super(e), this.name = "CssSyntaxError", this.reason = e, s && (this.file = s), n && (this.source = n), o && (this.plugin = o), typeof t < "u" && typeof i < "u" && (typeof t == "number" ? (this.line = t, this.column = i) : (this.line = t.line, this.column = t.column, this.endLine = i.line, this.endColumn = i.column)), this.setMessage(), Error.captureStackTrace && Error.captureStackTrace(this, _u);
  }
  setMessage() {
    this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", typeof this.line < "u" && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason;
  }
  showSourceCode(e) {
    if (!this.source) return "";
    let t = this.source;
    e == null && (e = fa.isColorSupported), ca && e && (t = ca(t));
    let i = t.split(/\r?\n/), n = Math.max(this.line - 3, 0), s = Math.min(this.line + 2, i.length), o = String(s).length, a, l;
    if (e) {
      let { bold: u, gray: f, red: d } = fa.createColors(!0);
      a = (h) => u(d(h)), l = (h) => f(h);
    } else
      a = l = (u) => u;
    return i.slice(n, s).map((u, f) => {
      let d = n + 1 + f, h = " " + (" " + d).slice(-o) + " | ";
      if (d === this.line) {
        let c = l(h.replace(/\d/g, " ")) + u.slice(0, this.column - 1).replace(/[^\t]/g, " ");
        return a(">") + l(h) + u + `
 ` + c + a("^");
      }
      return " " + l(h) + u;
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
var Zs = Xn;
Xn.default = Xn;
var mr = {};
mr.isClean = Symbol("isClean");
mr.my = Symbol("my");
const ha = {
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
function gm(r) {
  return r[0].toUpperCase() + r.slice(1);
}
let Kn = class {
  constructor(e) {
    this.builder = e;
  }
  atrule(e, t) {
    let i = "@" + e.name, n = e.params ? this.rawValue(e, "params") : "";
    if (typeof e.raws.afterName < "u" ? i += e.raws.afterName : n && (i += " "), e.nodes)
      this.block(e, i + n);
    else {
      let s = (e.raws.between || "") + (t ? ";" : "");
      this.builder(i + n + s, e);
    }
  }
  beforeAfter(e, t) {
    let i;
    e.type === "decl" ? i = this.raw(e, null, "beforeDecl") : e.type === "comment" ? i = this.raw(e, null, "beforeComment") : t === "before" ? i = this.raw(e, null, "beforeRule") : i = this.raw(e, null, "beforeClose");
    let n = e.parent, s = 0;
    for (; n && n.type !== "root"; )
      s += 1, n = n.parent;
    if (i.includes(`
`)) {
      let o = this.raw(e, null, "indent");
      if (o.length)
        for (let a = 0; a < s; a++) i += o;
    }
    return i;
  }
  block(e, t) {
    let i = this.raw(e, "between", "beforeOpen");
    this.builder(t + i + "{", e, "start");
    let n;
    e.nodes && e.nodes.length ? (this.body(e), n = this.raw(e, "after")) : n = this.raw(e, "after", "emptyBody"), n && this.builder(n), this.builder("}", e, "end");
  }
  body(e) {
    let t = e.nodes.length - 1;
    for (; t > 0 && e.nodes[t].type === "comment"; )
      t -= 1;
    let i = this.raw(e, "semicolon");
    for (let n = 0; n < e.nodes.length; n++) {
      let s = e.nodes[n], o = this.raw(s, "before");
      o && this.builder(o), this.stringify(s, t !== n || i);
    }
  }
  comment(e) {
    let t = this.raw(e, "left", "commentLeft"), i = this.raw(e, "right", "commentRight");
    this.builder("/*" + t + e.text + i + "*/", e);
  }
  decl(e, t) {
    let i = this.raw(e, "between", "colon"), n = e.prop + i + this.rawValue(e, "value");
    e.important && (n += e.raws.important || " !important"), t && (n += ";"), this.builder(n, e);
  }
  document(e) {
    this.body(e);
  }
  raw(e, t, i) {
    let n;
    if (i || (i = t), t && (n = e.raws[t], typeof n < "u"))
      return n;
    let s = e.parent;
    if (i === "before" && (!s || s.type === "root" && s.first === e || s && s.type === "document"))
      return "";
    if (!s) return ha[i];
    let o = e.root();
    if (o.rawCache || (o.rawCache = {}), typeof o.rawCache[i] < "u")
      return o.rawCache[i];
    if (i === "before" || i === "after")
      return this.beforeAfter(e, i);
    {
      let a = "raw" + gm(i);
      this[a] ? n = this[a](o, e) : o.walk((l) => {
        if (n = l.raws[t], typeof n < "u") return !1;
      });
    }
    return typeof n > "u" && (n = ha[i]), o.rawCache[i] = n, n;
  }
  rawBeforeClose(e) {
    let t;
    return e.walk((i) => {
      if (i.nodes && i.nodes.length > 0 && typeof i.raws.after < "u")
        return t = i.raws.after, t.includes(`
`) && (t = t.replace(/[^\n]+$/, "")), !1;
    }), t && (t = t.replace(/\S/g, "")), t;
  }
  rawBeforeComment(e, t) {
    let i;
    return e.walkComments((n) => {
      if (typeof n.raws.before < "u")
        return i = n.raws.before, i.includes(`
`) && (i = i.replace(/[^\n]+$/, "")), !1;
    }), typeof i > "u" ? i = this.raw(t, null, "beforeDecl") : i && (i = i.replace(/\S/g, "")), i;
  }
  rawBeforeDecl(e, t) {
    let i;
    return e.walkDecls((n) => {
      if (typeof n.raws.before < "u")
        return i = n.raws.before, i.includes(`
`) && (i = i.replace(/[^\n]+$/, "")), !1;
    }), typeof i > "u" ? i = this.raw(t, null, "beforeRule") : i && (i = i.replace(/\S/g, "")), i;
  }
  rawBeforeOpen(e) {
    let t;
    return e.walk((i) => {
      if (i.type !== "decl" && (t = i.raws.between, typeof t < "u"))
        return !1;
    }), t;
  }
  rawBeforeRule(e) {
    let t;
    return e.walk((i) => {
      if (i.nodes && (i.parent !== e || e.first !== i) && typeof i.raws.before < "u")
        return t = i.raws.before, t.includes(`
`) && (t = t.replace(/[^\n]+$/, "")), !1;
    }), t && (t = t.replace(/\S/g, "")), t;
  }
  rawColon(e) {
    let t;
    return e.walkDecls((i) => {
      if (typeof i.raws.between < "u")
        return t = i.raws.between.replace(/[^\s:]/g, ""), !1;
    }), t;
  }
  rawEmptyBody(e) {
    let t;
    return e.walk((i) => {
      if (i.nodes && i.nodes.length === 0 && (t = i.raws.after, typeof t < "u"))
        return !1;
    }), t;
  }
  rawIndent(e) {
    if (e.raws.indent) return e.raws.indent;
    let t;
    return e.walk((i) => {
      let n = i.parent;
      if (n && n !== e && n.parent && n.parent === e && typeof i.raws.before < "u") {
        let s = i.raws.before.split(`
`);
        return t = s[s.length - 1], t = t.replace(/\S/g, ""), !1;
      }
    }), t;
  }
  rawSemicolon(e) {
    let t;
    return e.walk((i) => {
      if (i.nodes && i.nodes.length && i.last.type === "decl" && (t = i.raws.semicolon, typeof t < "u"))
        return !1;
    }), t;
  }
  rawValue(e, t) {
    let i = e[t], n = e.raws[t];
    return n && n.value === i ? n.raw : i;
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
var vu = Kn;
Kn.default = Kn;
let ym = vu;
function qn(r, e) {
  new ym(e).stringify(r);
}
var Ni = qn;
qn.default = qn;
let { isClean: Mr, my: wm } = mr, bm = Zs, _m = vu, vm = Ni;
function Qn(r, e) {
  let t = new r.constructor();
  for (let i in r) {
    if (!Object.prototype.hasOwnProperty.call(r, i) || i === "proxyCache") continue;
    let n = r[i], s = typeof n;
    i === "parent" && s === "object" ? e && (t[i] = e) : i === "source" ? t[i] = n : Array.isArray(n) ? t[i] = n.map((o) => Qn(o, t)) : (s === "object" && n !== null && (n = Qn(n)), t[i] = n);
  }
  return t;
}
let es = class {
  constructor(e = {}) {
    this.raws = {}, this[Mr] = !1, this[wm] = !0;
    for (let t in e)
      if (t === "nodes") {
        this.nodes = [];
        for (let i of e[t])
          typeof i.clone == "function" ? this.append(i.clone()) : this.append(i);
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
    let t = Qn(this);
    for (let i in e)
      t[i] = e[i];
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
      let { end: i, start: n } = this.rangeBy(t);
      return this.source.input.error(
        e,
        { column: n.column, line: n.line },
        { column: i.column, line: i.line },
        t
      );
    }
    return new bm(e);
  }
  getProxyProcessor() {
    return {
      get(e, t) {
        return t === "proxyOf" ? e : t === "root" ? () => e.root().toProxy() : e[t];
      },
      set(e, t, i) {
        return e[t] === i || (e[t] = i, (t === "prop" || t === "value" || t === "name" || t === "params" || t === "important" || /* c8 ignore next */
        t === "text") && e.markDirty()), !0;
      }
    };
  }
  markDirty() {
    if (this[Mr]) {
      this[Mr] = !1;
      let e = this;
      for (; e = e.parent; )
        e[Mr] = !1;
    }
  }
  next() {
    if (!this.parent) return;
    let e = this.parent.index(this);
    return this.parent.nodes[e + 1];
  }
  positionBy(e, t) {
    let i = this.source.start;
    if (e.index)
      i = this.positionInside(e.index, t);
    else if (e.word) {
      t = this.toString();
      let n = t.indexOf(e.word);
      n !== -1 && (i = this.positionInside(n, t));
    }
    return i;
  }
  positionInside(e, t) {
    let i = t || this.toString(), n = this.source.start.column, s = this.source.start.line;
    for (let o = 0; o < e; o++)
      i[o] === `
` ? (n = 1, s += 1) : n += 1;
    return { column: n, line: s };
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
    }, i = this.source.end ? {
      column: this.source.end.column + 1,
      line: this.source.end.line
    } : {
      column: t.column + 1,
      line: t.line
    };
    if (e.word) {
      let n = this.toString(), s = n.indexOf(e.word);
      s !== -1 && (t = this.positionInside(s, n), i = this.positionInside(s + e.word.length, n));
    } else
      e.start ? t = {
        column: e.start.column,
        line: e.start.line
      } : e.index && (t = this.positionInside(e.index)), e.end ? i = {
        column: e.end.column,
        line: e.end.line
      } : typeof e.endIndex == "number" ? i = this.positionInside(e.endIndex) : e.index && (i = this.positionInside(e.index + 1));
    return (i.line < t.line || i.line === t.line && i.column <= t.column) && (i = { column: t.column + 1, line: t.line }), { end: i, start: t };
  }
  raw(e, t) {
    return new _m().raw(this, e, t);
  }
  remove() {
    return this.parent && this.parent.removeChild(this), this.parent = void 0, this;
  }
  replaceWith(...e) {
    if (this.parent) {
      let t = this, i = !1;
      for (let n of e)
        n === this ? i = !0 : i ? (this.parent.insertAfter(t, n), t = n) : this.parent.insertBefore(t, n);
      i || this.remove();
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
    let i = {}, n = t == null;
    t = t || /* @__PURE__ */ new Map();
    let s = 0;
    for (let o in this) {
      if (!Object.prototype.hasOwnProperty.call(this, o) || o === "parent" || o === "proxyCache") continue;
      let a = this[o];
      if (Array.isArray(a))
        i[o] = a.map((l) => typeof l == "object" && l.toJSON ? l.toJSON(null, t) : l);
      else if (typeof a == "object" && a.toJSON)
        i[o] = a.toJSON(null, t);
      else if (o === "source") {
        let l = t.get(a.input);
        l == null && (l = s, t.set(a.input, s), s++), i[o] = {
          end: a.end,
          inputId: l,
          start: a.start
        };
      } else
        i[o] = a;
    }
    return n && (i.inputs = [...t.keys()].map((o) => o.toJSON())), i;
  }
  toProxy() {
    return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache;
  }
  toString(e = vm) {
    e.stringify && (e = e.stringify);
    let t = "";
    return e(this, (i) => {
      t += i;
    }), t;
  }
  warn(e, t, i) {
    let n = { node: this };
    for (let s in i) n[s] = i[s];
    return e.warn(t, n);
  }
  get proxyOf() {
    return this;
  }
};
var Pi = es;
es.default = es;
let Sm = Pi, ts = class extends Sm {
  constructor(e) {
    e && typeof e.value < "u" && typeof e.value != "string" && (e = { ...e, value: String(e.value) }), super(e), this.type = "decl";
  }
  get variable() {
    return this.prop.startsWith("--") || this.prop[0] === "$";
  }
};
var Ti = ts;
ts.default = ts;
let xm = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", Cm = (r, e = 21) => (t = e) => {
  let i = "", n = t;
  for (; n--; )
    i += r[Math.random() * r.length | 0];
  return i;
}, Im = (r = 21) => {
  let e = "", t = r;
  for (; t--; )
    e += xm[Math.random() * 64 | 0];
  return e;
};
var Am = { nanoid: Im, customAlphabet: Cm };
let { SourceMapConsumer: da, SourceMapGenerator: pa } = ge, { existsSync: Em, readFileSync: Om } = ge, { dirname: gn, join: Rm } = ge;
function km(r) {
  return Buffer ? Buffer.from(r, "base64").toString() : window.atob(r);
}
let rs = class {
  constructor(e, t) {
    if (t.map === !1) return;
    this.loadAnnotation(e), this.inline = this.startWith(this.annotation, "data:");
    let i = t.map ? t.map.prev : void 0, n = this.loadMap(t.from, i);
    !this.mapFile && t.from && (this.mapFile = t.from), this.mapFile && (this.root = gn(this.mapFile)), n && (this.text = n);
  }
  consumer() {
    return this.consumerCache || (this.consumerCache = new da(this.text)), this.consumerCache;
  }
  decodeInline(e) {
    let t = /^data:application\/json;charset=utf-?8;base64,/, i = /^data:application\/json;base64,/, n = /^data:application\/json;charset=utf-?8,/, s = /^data:application\/json,/;
    if (n.test(e) || s.test(e))
      return decodeURIComponent(e.substr(RegExp.lastMatch.length));
    if (t.test(e) || i.test(e))
      return km(e.substr(RegExp.lastMatch.length));
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
    let i = e.lastIndexOf(t.pop()), n = e.indexOf("*/", i);
    i > -1 && n > -1 && (this.annotation = this.getAnnotationURL(e.substring(i, n)));
  }
  loadFile(e) {
    if (this.root = gn(e), Em(e))
      return this.mapFile = e, Om(e, "utf-8").toString().trim();
  }
  loadMap(e, t) {
    if (t === !1) return !1;
    if (t) {
      if (typeof t == "string")
        return t;
      if (typeof t == "function") {
        let i = t(e);
        if (i) {
          let n = this.loadFile(i);
          if (!n)
            throw new Error(
              "Unable to load previous source map: " + i.toString()
            );
          return n;
        }
      } else {
        if (t instanceof da)
          return pa.fromSourceMap(t).toString();
        if (t instanceof pa)
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
        let i = this.annotation;
        return e && (i = Rm(gn(e), i)), this.loadFile(i);
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
var Su = rs;
rs.default = rs;
let { SourceMapConsumer: $m, SourceMapGenerator: Mm } = ge, { fileURLToPath: ma, pathToFileURL: Nr } = ge, { isAbsolute: is, resolve: ns } = ge, { nanoid: Nm } = Am, yn = ge, ga = Zs, Pm = Su, wn = Symbol("fromOffsetCache"), Tm = !!($m && Mm), ya = !!(ns && is), yi = class {
  constructor(e, t = {}) {
    if (e === null || typeof e > "u" || typeof e == "object" && !e.toString)
      throw new Error(`PostCSS received ${e} instead of CSS string`);
    if (this.css = e.toString(), this.css[0] === "\uFEFF" || this.css[0] === "￾" ? (this.hasBOM = !0, this.css = this.css.slice(1)) : this.hasBOM = !1, t.from && (!ya || /^\w+:\/\//.test(t.from) || is(t.from) ? this.file = t.from : this.file = ns(t.from)), ya && Tm) {
      let i = new Pm(this.css, t);
      if (i.text) {
        this.map = i;
        let n = i.consumer().file;
        !this.file && n && (this.file = this.mapResolve(n));
      }
    }
    this.file || (this.id = "<input css " + Nm(6) + ">"), this.map && (this.map.file = this.from);
  }
  error(e, t, i, n = {}) {
    let s, o, a;
    if (t && typeof t == "object") {
      let u = t, f = i;
      if (typeof u.offset == "number") {
        let d = this.fromOffset(u.offset);
        t = d.line, i = d.col;
      } else
        t = u.line, i = u.column;
      if (typeof f.offset == "number") {
        let d = this.fromOffset(f.offset);
        o = d.line, a = d.col;
      } else
        o = f.line, a = f.column;
    } else if (!i) {
      let u = this.fromOffset(t);
      t = u.line, i = u.col;
    }
    let l = this.origin(t, i, o, a);
    return l ? s = new ga(
      e,
      l.endLine === void 0 ? l.line : { column: l.column, line: l.line },
      l.endLine === void 0 ? l.column : { column: l.endColumn, line: l.endLine },
      l.source,
      l.file,
      n.plugin
    ) : s = new ga(
      e,
      o === void 0 ? t : { column: i, line: t },
      o === void 0 ? i : { column: a, line: o },
      this.css,
      this.file,
      n.plugin
    ), s.input = { column: i, endColumn: a, endLine: o, line: t, source: this.css }, this.file && (Nr && (s.input.url = Nr(this.file).toString()), s.input.file = this.file), s;
  }
  fromOffset(e) {
    let t, i;
    if (this[wn])
      i = this[wn];
    else {
      let s = this.css.split(`
`);
      i = new Array(s.length);
      let o = 0;
      for (let a = 0, l = s.length; a < l; a++)
        i[a] = o, o += s[a].length + 1;
      this[wn] = i;
    }
    t = i[i.length - 1];
    let n = 0;
    if (e >= t)
      n = i.length - 1;
    else {
      let s = i.length - 2, o;
      for (; n < s; )
        if (o = n + (s - n >> 1), e < i[o])
          s = o - 1;
        else if (e >= i[o + 1])
          n = o + 1;
        else {
          n = o;
          break;
        }
    }
    return {
      col: e - i[n] + 1,
      line: n + 1
    };
  }
  mapResolve(e) {
    return /^\w+:\/\//.test(e) ? e : ns(this.map.consumer().sourceRoot || this.map.root || ".", e);
  }
  origin(e, t, i, n) {
    if (!this.map) return !1;
    let s = this.map.consumer(), o = s.originalPositionFor({ column: t, line: e });
    if (!o.source) return !1;
    let a;
    typeof i == "number" && (a = s.originalPositionFor({ column: n, line: i }));
    let l;
    is(o.source) ? l = Nr(o.source) : l = new URL(
      o.source,
      this.map.consumer().sourceRoot || Nr(this.map.mapFile)
    );
    let u = {
      column: o.column,
      endColumn: a && a.column,
      endLine: a && a.line,
      line: o.line,
      url: l.toString()
    };
    if (l.protocol === "file:")
      if (ma)
        u.file = ma(l);
      else
        throw new Error("file: protocol is not available in this PostCSS build");
    let f = s.sourceContentFor(o.source);
    return f && (u.source = f), u;
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
var Di = yi;
yi.default = yi;
yn && yn.registerInput && yn.registerInput(yi);
let { SourceMapConsumer: xu, SourceMapGenerator: ii } = ge, { dirname: ni, relative: Cu, resolve: Iu, sep: Au } = ge, { pathToFileURL: wa } = ge, Dm = Di, Lm = !!(xu && ii), Fm = !!(ni && Iu && Cu && Au), zm = class {
  constructor(e, t, i, n) {
    this.stringify = e, this.mapOpts = i.map || {}, this.root = t, this.opts = i, this.css = n, this.originalCSS = n, this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute, this.memoizedFileURLs = /* @__PURE__ */ new Map(), this.memoizedPaths = /* @__PURE__ */ new Map(), this.memoizedURLs = /* @__PURE__ */ new Map();
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
      let t = this.toUrl(this.path(e.file)), i = e.root || ni(e.file), n;
      this.mapOpts.sourcesContent === !1 ? (n = new xu(e.text), n.sourcesContent && (n.sourcesContent = null)) : n = e.consumer(), this.map.applySourceMap(n, t, this.toUrl(this.path(i)));
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
    if (this.clearAnnotation(), Fm && Lm && this.isMap())
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
      e.file = this.outputFile(), this.map = ii.fromSourceMap(e, {
        ignoreInvalidMapping: !0
      });
    } else
      this.map = new ii({
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
    this.css = "", this.map = new ii({
      file: this.outputFile(),
      ignoreInvalidMapping: !0
    });
    let e = 1, t = 1, i = "<no source>", n = {
      generated: { column: 0, line: 0 },
      original: { column: 0, line: 0 },
      source: ""
    }, s, o;
    this.stringify(this.root, (a, l, u) => {
      if (this.css += a, l && u !== "end" && (n.generated.line = e, n.generated.column = t - 1, l.source && l.source.start ? (n.source = this.sourcePath(l), n.original.line = l.source.start.line, n.original.column = l.source.start.column - 1, this.map.addMapping(n)) : (n.source = i, n.original.line = 1, n.original.column = 0, this.map.addMapping(n))), s = a.match(/\n/g), s ? (e += s.length, o = a.lastIndexOf(`
`), t = a.length - o) : t += a.length, l && u !== "start") {
        let f = l.parent || { raws: {} };
        (!(l.type === "decl" || l.type === "atrule" && !l.nodes) || l !== f.last || f.raws.semicolon) && (l.source && l.source.end ? (n.source = this.sourcePath(l), n.original.line = l.source.end.line, n.original.column = l.source.end.column - 1, n.generated.line = e, n.generated.column = t - 2, this.map.addMapping(n)) : (n.source = i, n.original.line = 1, n.original.column = 0, n.generated.line = e, n.generated.column = t - 1, this.map.addMapping(n)));
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
    let i = this.opts.to ? ni(this.opts.to) : ".";
    typeof this.mapOpts.annotation == "string" && (i = ni(Iu(i, this.mapOpts.annotation)));
    let n = Cu(i, e);
    return this.memoizedPaths.set(e, n), n;
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
        let e = new Dm(this.originalCSS, this.opts);
        e.map && this.previousMaps.push(e.map);
      }
    return this.previousMaps;
  }
  setSourcesContent() {
    let e = {};
    if (this.root)
      this.root.walk((t) => {
        if (t.source) {
          let i = t.source.input.from;
          if (i && !e[i]) {
            e[i] = !0;
            let n = this.usesFileUrls ? this.toFileUrl(i) : this.toUrl(this.path(i));
            this.map.setSourceContent(n, t.source.input.css);
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
    if (wa) {
      let i = wa(e).toString();
      return this.memoizedFileURLs.set(e, i), i;
    } else
      throw new Error(
        "`map.absolute` option is not available in this PostCSS build"
      );
  }
  toUrl(e) {
    let t = this.memoizedURLs.get(e);
    if (t) return t;
    Au === "\\" && (e = e.replace(/\\/g, "/"));
    let i = encodeURI(e).replace(/[#?]/g, encodeURIComponent);
    return this.memoizedURLs.set(e, i), i;
  }
};
var Eu = zm;
let Um = Pi, ss = class extends Um {
  constructor(e) {
    super(e), this.type = "comment";
  }
};
var Li = ss;
ss.default = ss;
let { isClean: Ou, my: Ru } = mr, ku = Ti, $u = Li, Bm = Pi, Mu, Gs, Hs, Nu;
function Pu(r) {
  return r.map((e) => (e.nodes && (e.nodes = Pu(e.nodes)), delete e.source, e));
}
function Tu(r) {
  if (r[Ou] = !1, r.proxyOf.nodes)
    for (let e of r.proxyOf.nodes)
      Tu(e);
}
let Me = class Du extends Bm {
  append(...e) {
    for (let t of e) {
      let i = this.normalize(t, this.last);
      for (let n of i) this.proxyOf.nodes.push(n);
    }
    return this.markDirty(), this;
  }
  cleanRaws(e) {
    if (super.cleanRaws(e), this.nodes)
      for (let t of this.nodes) t.cleanRaws(e);
  }
  each(e) {
    if (!this.proxyOf.nodes) return;
    let t = this.getIterator(), i, n;
    for (; this.indexes[t] < this.proxyOf.nodes.length && (i = this.indexes[t], n = e(this.proxyOf.nodes[i], i), n !== !1); )
      this.indexes[t] += 1;
    return delete this.indexes[t], n;
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
        return t === "proxyOf" ? e : e[t] ? t === "each" || typeof t == "string" && t.startsWith("walk") ? (...i) => e[t](
          ...i.map((n) => typeof n == "function" ? (s, o) => n(s.toProxy(), o) : n)
        ) : t === "every" || t === "some" ? (i) => e[t](
          (n, ...s) => i(n.toProxy(), ...s)
        ) : t === "root" ? () => e.root().toProxy() : t === "nodes" ? e.nodes.map((i) => i.toProxy()) : t === "first" || t === "last" ? e[t].toProxy() : e[t] : e[t];
      },
      set(e, t, i) {
        return e[t] === i || (e[t] = i, (t === "name" || t === "params" || t === "selector") && e.markDirty()), !0;
      }
    };
  }
  index(e) {
    return typeof e == "number" ? e : (e.proxyOf && (e = e.proxyOf), this.proxyOf.nodes.indexOf(e));
  }
  insertAfter(e, t) {
    let i = this.index(e), n = this.normalize(t, this.proxyOf.nodes[i]).reverse();
    i = this.index(e);
    for (let o of n) this.proxyOf.nodes.splice(i + 1, 0, o);
    let s;
    for (let o in this.indexes)
      s = this.indexes[o], i < s && (this.indexes[o] = s + n.length);
    return this.markDirty(), this;
  }
  insertBefore(e, t) {
    let i = this.index(e), n = i === 0 ? "prepend" : !1, s = this.normalize(t, this.proxyOf.nodes[i], n).reverse();
    i = this.index(e);
    for (let a of s) this.proxyOf.nodes.splice(i, 0, a);
    let o;
    for (let a in this.indexes)
      o = this.indexes[a], i <= o && (this.indexes[a] = o + s.length);
    return this.markDirty(), this;
  }
  normalize(e, t) {
    if (typeof e == "string")
      e = Pu(Mu(e).nodes);
    else if (typeof e > "u")
      e = [];
    else if (Array.isArray(e)) {
      e = e.slice(0);
      for (let n of e)
        n.parent && n.parent.removeChild(n, "ignore");
    } else if (e.type === "root" && this.type !== "document") {
      e = e.nodes.slice(0);
      for (let n of e)
        n.parent && n.parent.removeChild(n, "ignore");
    } else if (e.type)
      e = [e];
    else if (e.prop) {
      if (typeof e.value > "u")
        throw new Error("Value field is missed in node creation");
      typeof e.value != "string" && (e.value = String(e.value)), e = [new ku(e)];
    } else if (e.selector)
      e = [new Gs(e)];
    else if (e.name)
      e = [new Hs(e)];
    else if (e.text)
      e = [new $u(e)];
    else
      throw new Error("Unknown node type in node creation");
    return e.map((n) => (n[Ru] || Du.rebuild(n), n = n.proxyOf, n.parent && n.parent.removeChild(n), n[Ou] && Tu(n), typeof n.raws.before > "u" && t && typeof t.raws.before < "u" && (n.raws.before = t.raws.before.replace(/\S/g, "")), n.parent = this.proxyOf, n));
  }
  prepend(...e) {
    e = e.reverse();
    for (let t of e) {
      let i = this.normalize(t, this.first, "prepend").reverse();
      for (let n of i) this.proxyOf.nodes.unshift(n);
      for (let n in this.indexes)
        this.indexes[n] = this.indexes[n] + i.length;
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
    for (let i in this.indexes)
      t = this.indexes[i], t >= e && (this.indexes[i] = t - 1);
    return this.markDirty(), this;
  }
  replaceValues(e, t, i) {
    return i || (i = t, t = {}), this.walkDecls((n) => {
      t.props && !t.props.includes(n.prop) || t.fast && !n.value.includes(t.fast) || (n.value = n.value.replace(e, i));
    }), this.markDirty(), this;
  }
  some(e) {
    return this.nodes.some(e);
  }
  walk(e) {
    return this.each((t, i) => {
      let n;
      try {
        n = e(t, i);
      } catch (s) {
        throw t.addToError(s);
      }
      return n !== !1 && t.walk && (n = t.walk(e)), n;
    });
  }
  walkAtRules(e, t) {
    return t ? e instanceof RegExp ? this.walk((i, n) => {
      if (i.type === "atrule" && e.test(i.name))
        return t(i, n);
    }) : this.walk((i, n) => {
      if (i.type === "atrule" && i.name === e)
        return t(i, n);
    }) : (t = e, this.walk((i, n) => {
      if (i.type === "atrule")
        return t(i, n);
    }));
  }
  walkComments(e) {
    return this.walk((t, i) => {
      if (t.type === "comment")
        return e(t, i);
    });
  }
  walkDecls(e, t) {
    return t ? e instanceof RegExp ? this.walk((i, n) => {
      if (i.type === "decl" && e.test(i.prop))
        return t(i, n);
    }) : this.walk((i, n) => {
      if (i.type === "decl" && i.prop === e)
        return t(i, n);
    }) : (t = e, this.walk((i, n) => {
      if (i.type === "decl")
        return t(i, n);
    }));
  }
  walkRules(e, t) {
    return t ? e instanceof RegExp ? this.walk((i, n) => {
      if (i.type === "rule" && e.test(i.selector))
        return t(i, n);
    }) : this.walk((i, n) => {
      if (i.type === "rule" && i.selector === e)
        return t(i, n);
    }) : (t = e, this.walk((i, n) => {
      if (i.type === "rule")
        return t(i, n);
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
Me.registerParse = (r) => {
  Mu = r;
};
Me.registerRule = (r) => {
  Gs = r;
};
Me.registerAtRule = (r) => {
  Hs = r;
};
Me.registerRoot = (r) => {
  Nu = r;
};
var rt = Me;
Me.default = Me;
Me.rebuild = (r) => {
  r.type === "atrule" ? Object.setPrototypeOf(r, Hs.prototype) : r.type === "rule" ? Object.setPrototypeOf(r, Gs.prototype) : r.type === "decl" ? Object.setPrototypeOf(r, ku.prototype) : r.type === "comment" ? Object.setPrototypeOf(r, $u.prototype) : r.type === "root" && Object.setPrototypeOf(r, Nu.prototype), r[Ru] = !0, r.nodes && r.nodes.forEach((e) => {
    Me.rebuild(e);
  });
};
let jm = rt, Lu, Fu, tr = class extends jm {
  constructor(e) {
    super({ type: "document", ...e }), this.nodes || (this.nodes = []);
  }
  toResult(e = {}) {
    return new Lu(new Fu(), this, e).stringify();
  }
};
tr.registerLazyResult = (r) => {
  Lu = r;
};
tr.registerProcessor = (r) => {
  Fu = r;
};
var Vs = tr;
tr.default = tr;
let ba = {};
var zu = function(e) {
  ba[e] || (ba[e] = !0, typeof console < "u" && console.warn && console.warn(e));
};
let os = class {
  constructor(e, t = {}) {
    if (this.type = "warning", this.text = e, t.node && t.node.source) {
      let i = t.node.rangeBy(t);
      this.line = i.start.line, this.column = i.start.column, this.endLine = i.end.line, this.endColumn = i.end.column;
    }
    for (let i in t) this[i] = t[i];
  }
  toString() {
    return this.node ? this.node.error(this.text, {
      index: this.index,
      plugin: this.plugin,
      word: this.word
    }).message : this.plugin ? this.plugin + ": " + this.text : this.text;
  }
};
var Uu = os;
os.default = os;
let Wm = Uu, as = class {
  constructor(e, t, i) {
    this.processor = e, this.messages = [], this.root = t, this.opts = i, this.css = void 0, this.map = void 0;
  }
  toString() {
    return this.css;
  }
  warn(e, t = {}) {
    t.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (t.plugin = this.lastPlugin.postcssPlugin);
    let i = new Wm(e, t);
    return this.messages.push(i), i;
  }
  warnings() {
    return this.messages.filter((e) => e.type === "warning");
  }
  get content() {
    return this.css;
  }
};
var Ys = as;
as.default = as;
const bn = 39, _a = 34, Pr = 92, va = 47, Tr = 10, Pt = 32, Dr = 12, Lr = 9, Fr = 13, Zm = 91, Gm = 93, Hm = 40, Vm = 41, Ym = 123, Jm = 125, Xm = 59, Km = 42, qm = 58, Qm = 64, zr = /[\t\n\f\r "#'()/;[\\\]{}]/g, Ur = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g, eg = /.[\r\n"'(/\\]/, Sa = /[\da-f]/i;
var tg = function(e, t = {}) {
  let i = e.css.valueOf(), n = t.ignoreErrors, s, o, a, l, u, f, d, h, c, p, g = i.length, m = 0, b = [], _ = [];
  function y() {
    return m;
  }
  function w(I) {
    throw e.error("Unclosed " + I, m);
  }
  function S() {
    return _.length === 0 && m >= g;
  }
  function E(I) {
    if (_.length) return _.pop();
    if (m >= g) return;
    let A = I ? I.ignoreUnclosed : !1;
    switch (s = i.charCodeAt(m), s) {
      case Tr:
      case Pt:
      case Lr:
      case Fr:
      case Dr: {
        o = m;
        do
          o += 1, s = i.charCodeAt(o);
        while (s === Pt || s === Tr || s === Lr || s === Fr || s === Dr);
        p = ["space", i.slice(m, o)], m = o - 1;
        break;
      }
      case Zm:
      case Gm:
      case Ym:
      case Jm:
      case qm:
      case Xm:
      case Vm: {
        let C = String.fromCharCode(s);
        p = [C, C, m];
        break;
      }
      case Hm: {
        if (h = b.length ? b.pop()[1] : "", c = i.charCodeAt(m + 1), h === "url" && c !== bn && c !== _a && c !== Pt && c !== Tr && c !== Lr && c !== Dr && c !== Fr) {
          o = m;
          do {
            if (f = !1, o = i.indexOf(")", o + 1), o === -1)
              if (n || A) {
                o = m;
                break;
              } else
                w("bracket");
            for (d = o; i.charCodeAt(d - 1) === Pr; )
              d -= 1, f = !f;
          } while (f);
          p = ["brackets", i.slice(m, o + 1), m, o], m = o;
        } else
          o = i.indexOf(")", m + 1), l = i.slice(m, o + 1), o === -1 || eg.test(l) ? p = ["(", "(", m] : (p = ["brackets", l, m, o], m = o);
        break;
      }
      case bn:
      case _a: {
        a = s === bn ? "'" : '"', o = m;
        do {
          if (f = !1, o = i.indexOf(a, o + 1), o === -1)
            if (n || A) {
              o = m + 1;
              break;
            } else
              w("string");
          for (d = o; i.charCodeAt(d - 1) === Pr; )
            d -= 1, f = !f;
        } while (f);
        p = ["string", i.slice(m, o + 1), m, o], m = o;
        break;
      }
      case Qm: {
        zr.lastIndex = m + 1, zr.test(i), zr.lastIndex === 0 ? o = i.length - 1 : o = zr.lastIndex - 2, p = ["at-word", i.slice(m, o + 1), m, o], m = o;
        break;
      }
      case Pr: {
        for (o = m, u = !0; i.charCodeAt(o + 1) === Pr; )
          o += 1, u = !u;
        if (s = i.charCodeAt(o + 1), u && s !== va && s !== Pt && s !== Tr && s !== Lr && s !== Fr && s !== Dr && (o += 1, Sa.test(i.charAt(o)))) {
          for (; Sa.test(i.charAt(o + 1)); )
            o += 1;
          i.charCodeAt(o + 1) === Pt && (o += 1);
        }
        p = ["word", i.slice(m, o + 1), m, o], m = o;
        break;
      }
      default: {
        s === va && i.charCodeAt(m + 1) === Km ? (o = i.indexOf("*/", m + 2) + 1, o === 0 && (n || A ? o = i.length : w("comment")), p = ["comment", i.slice(m, o + 1), m, o], m = o) : (Ur.lastIndex = m + 1, Ur.test(i), Ur.lastIndex === 0 ? o = i.length - 1 : o = Ur.lastIndex - 2, p = ["word", i.slice(m, o + 1), m, o], b.push(p), m = o);
        break;
      }
    }
    return m++, p;
  }
  function x(I) {
    _.push(I);
  }
  return {
    back: x,
    endOfFile: S,
    nextToken: E,
    position: y
  };
};
let Bu = rt, wi = class extends Bu {
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
var Js = wi;
wi.default = wi;
Bu.registerAtRule(wi);
let ju = rt, Wu, Zu, vt = class extends ju {
  constructor(e) {
    super(e), this.type = "root", this.nodes || (this.nodes = []);
  }
  normalize(e, t, i) {
    let n = super.normalize(e);
    if (t) {
      if (i === "prepend")
        this.nodes.length > 1 ? t.raws.before = this.nodes[1].raws.before : delete t.raws.before;
      else if (this.first !== t)
        for (let s of n)
          s.raws.before = t.raws.before;
    }
    return n;
  }
  removeChild(e, t) {
    let i = this.index(e);
    return !t && i === 0 && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[i].raws.before), super.removeChild(e);
  }
  toResult(e = {}) {
    return new Wu(new Zu(), this, e).stringify();
  }
};
vt.registerLazyResult = (r) => {
  Wu = r;
};
vt.registerProcessor = (r) => {
  Zu = r;
};
var gr = vt;
vt.default = vt;
ju.registerRoot(vt);
let rr = {
  comma(r) {
    return rr.split(r, [","], !0);
  },
  space(r) {
    let e = [" ", `
`, "	"];
    return rr.split(r, e);
  },
  split(r, e, t) {
    let i = [], n = "", s = !1, o = 0, a = !1, l = "", u = !1;
    for (let f of r)
      u ? u = !1 : f === "\\" ? u = !0 : a ? f === l && (a = !1) : f === '"' || f === "'" ? (a = !0, l = f) : f === "(" ? o += 1 : f === ")" ? o > 0 && (o -= 1) : o === 0 && e.includes(f) && (s = !0), s ? (n !== "" && i.push(n.trim()), n = "", s = !1) : n += f;
    return (t || n !== "") && i.push(n.trim()), i;
  }
};
var Gu = rr;
rr.default = rr;
let Hu = rt, rg = Gu, bi = class extends Hu {
  constructor(e) {
    super(e), this.type = "rule", this.nodes || (this.nodes = []);
  }
  get selectors() {
    return rg.comma(this.selector);
  }
  set selectors(e) {
    let t = this.selector ? this.selector.match(/,\s*/) : null, i = t ? t[0] : "," + this.raw("between", "beforeOpen");
    this.selector = e.join(i);
  }
};
var Xs = bi;
bi.default = bi;
Hu.registerRule(bi);
let ig = Ti, ng = tg, sg = Li, og = Js, ag = gr, xa = Xs;
const Ca = {
  empty: !0,
  space: !0
};
function lg(r) {
  for (let e = r.length - 1; e >= 0; e--) {
    let t = r[e], i = t[3] || t[2];
    if (i) return i;
  }
}
let ug = class {
  constructor(e) {
    this.input = e, this.root = new ag(), this.current = this.root, this.spaces = "", this.semicolon = !1, this.createTokenizer(), this.root.source = { input: e, start: { column: 1, line: 1, offset: 0 } };
  }
  atrule(e) {
    let t = new og();
    t.name = e[1].slice(1), t.name === "" && this.unnamedAtrule(t, e), this.init(t, e[2]);
    let i, n, s, o = !1, a = !1, l = [], u = [];
    for (; !this.tokenizer.endOfFile(); ) {
      if (e = this.tokenizer.nextToken(), i = e[0], i === "(" || i === "[" ? u.push(i === "(" ? ")" : "]") : i === "{" && u.length > 0 ? u.push("}") : i === u[u.length - 1] && u.pop(), u.length === 0)
        if (i === ";") {
          t.source.end = this.getPosition(e[2]), t.source.end.offset++, this.semicolon = !0;
          break;
        } else if (i === "{") {
          a = !0;
          break;
        } else if (i === "}") {
          if (l.length > 0) {
            for (s = l.length - 1, n = l[s]; n && n[0] === "space"; )
              n = l[--s];
            n && (t.source.end = this.getPosition(n[3] || n[2]), t.source.end.offset++);
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
    let i = 0, n;
    for (let s = t - 1; s >= 0 && (n = e[s], !(n[0] !== "space" && (i += 1, i === 2))); s--)
      ;
    throw this.input.error(
      "Missed semicolon",
      n[0] === "word" ? n[3] + 1 : n[2]
    );
  }
  colon(e) {
    let t = 0, i, n, s;
    for (let [o, a] of e.entries()) {
      if (i = a, n = i[0], n === "(" && (t += 1), n === ")" && (t -= 1), t === 0 && n === ":")
        if (!s)
          this.doubleColon(i);
        else {
          if (s[0] === "word" && s[1] === "progid")
            continue;
          return o;
        }
      s = i;
    }
    return !1;
  }
  comment(e) {
    let t = new sg();
    this.init(t, e[2]), t.source.end = this.getPosition(e[3] || e[2]), t.source.end.offset++;
    let i = e[1].slice(2, -2);
    if (/^\s*$/.test(i))
      t.text = "", t.raws.left = i, t.raws.right = "";
    else {
      let n = i.match(/^(\s*)([^]*\S)(\s*)$/);
      t.text = n[2], t.raws.left = n[1], t.raws.right = n[3];
    }
  }
  createTokenizer() {
    this.tokenizer = ng(this.input);
  }
  decl(e, t) {
    let i = new ig();
    this.init(i, e[0][2]);
    let n = e[e.length - 1];
    for (n[0] === ";" && (this.semicolon = !0, e.pop()), i.source.end = this.getPosition(
      n[3] || n[2] || lg(e)
    ), i.source.end.offset++; e[0][0] !== "word"; )
      e.length === 1 && this.unknownWord(e), i.raws.before += e.shift()[1];
    for (i.source.start = this.getPosition(e[0][2]), i.prop = ""; e.length; ) {
      let u = e[0][0];
      if (u === ":" || u === "space" || u === "comment")
        break;
      i.prop += e.shift()[1];
    }
    i.raws.between = "";
    let s;
    for (; e.length; )
      if (s = e.shift(), s[0] === ":") {
        i.raws.between += s[1];
        break;
      } else
        s[0] === "word" && /\w/.test(s[1]) && this.unknownWord([s]), i.raws.between += s[1];
    (i.prop[0] === "_" || i.prop[0] === "*") && (i.raws.before += i.prop[0], i.prop = i.prop.slice(1));
    let o = [], a;
    for (; e.length && (a = e[0][0], !(a !== "space" && a !== "comment")); )
      o.push(e.shift());
    this.precheckMissedSemicolon(e);
    for (let u = e.length - 1; u >= 0; u--) {
      if (s = e[u], s[1].toLowerCase() === "!important") {
        i.important = !0;
        let f = this.stringFrom(e, u);
        f = this.spacesFromEnd(e) + f, f !== " !important" && (i.raws.important = f);
        break;
      } else if (s[1].toLowerCase() === "important") {
        let f = e.slice(0), d = "";
        for (let h = u; h > 0; h--) {
          let c = f[h][0];
          if (d.trim().indexOf("!") === 0 && c !== "space")
            break;
          d = f.pop()[1] + d;
        }
        d.trim().indexOf("!") === 0 && (i.important = !0, i.raws.important = d, e = f);
      }
      if (s[0] !== "space" && s[0] !== "comment")
        break;
    }
    e.some((u) => u[0] !== "space" && u[0] !== "comment") && (i.raws.between += o.map((u) => u[1]).join(""), o = []), this.raw(i, "value", o.concat(e), t), i.value.includes(":") && !t && this.checkMissedSemicolon(e);
  }
  doubleColon(e) {
    throw this.input.error(
      "Double colon",
      { offset: e[2] },
      { offset: e[2] + e[1].length }
    );
  }
  emptyRule(e) {
    let t = new xa();
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
    let t = !1, i = null, n = !1, s = null, o = [], a = e[1].startsWith("--"), l = [], u = e;
    for (; u; ) {
      if (i = u[0], l.push(u), i === "(" || i === "[")
        s || (s = u), o.push(i === "(" ? ")" : "]");
      else if (a && n && i === "{")
        s || (s = u), o.push("}");
      else if (o.length === 0)
        if (i === ";")
          if (n) {
            this.decl(l, a);
            return;
          } else
            break;
        else if (i === "{") {
          this.rule(l);
          return;
        } else if (i === "}") {
          this.tokenizer.back(l.pop()), t = !0;
          break;
        } else i === ":" && (n = !0);
      else i === o[o.length - 1] && (o.pop(), o.length === 0 && (s = null));
      u = this.tokenizer.nextToken();
    }
    if (this.tokenizer.endOfFile() && (t = !0), o.length > 0 && this.unclosedBracket(s), t && n) {
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
  raw(e, t, i, n) {
    let s, o, a = i.length, l = "", u = !0, f, d;
    for (let h = 0; h < a; h += 1)
      s = i[h], o = s[0], o === "space" && h === a - 1 && !n ? u = !1 : o === "comment" ? (d = i[h - 1] ? i[h - 1][0] : "empty", f = i[h + 1] ? i[h + 1][0] : "empty", !Ca[d] && !Ca[f] ? l.slice(-1) === "," ? u = !1 : l += s[1] : u = !1) : l += s[1];
    if (!u) {
      let h = i.reduce((c, p) => c + p[1], "");
      e.raws[t] = { raw: h, value: l };
    }
    e[t] = l;
  }
  rule(e) {
    e.pop();
    let t = new xa();
    this.init(t, e[0][2]), t.raws.between = this.spacesAndCommentsFromEnd(e), this.raw(t, "selector", e), this.current = t;
  }
  spacesAndCommentsFromEnd(e) {
    let t, i = "";
    for (; e.length && (t = e[e.length - 1][0], !(t !== "space" && t !== "comment")); )
      i = e.pop()[1] + i;
    return i;
  }
  // Errors
  spacesAndCommentsFromStart(e) {
    let t, i = "";
    for (; e.length && (t = e[0][0], !(t !== "space" && t !== "comment")); )
      i += e.shift()[1];
    return i;
  }
  spacesFromEnd(e) {
    let t, i = "";
    for (; e.length && (t = e[e.length - 1][0], t === "space"); )
      i = e.pop()[1] + i;
    return i;
  }
  stringFrom(e, t) {
    let i = "";
    for (let n = t; n < e.length; n++)
      i += e[n][1];
    return e.splice(t, e.length - t), i;
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
var fg = ug;
let cg = rt, hg = fg, dg = Di;
function _i(r, e) {
  let t = new dg(r, e), i = new hg(t);
  try {
    i.parse();
  } catch (n) {
    throw process.env.NODE_ENV !== "production" && n.name === "CssSyntaxError" && e && e.from && (/\.scss$/i.test(e.from) ? n.message += `
You tried to parse SCSS with the standard CSS parser; try again with the postcss-scss parser` : /\.sass/i.test(e.from) ? n.message += `
You tried to parse Sass with the standard CSS parser; try again with the postcss-sass parser` : /\.less$/i.test(e.from) && (n.message += `
You tried to parse Less with the standard CSS parser; try again with the postcss-less parser`)), n;
  }
  return i.root;
}
var Ks = _i;
_i.default = _i;
cg.registerParse(_i);
let { isClean: xe, my: pg } = mr, mg = Eu, gg = Ni, yg = rt, wg = Vs, bg = zu, Ia = Ys, _g = Ks, vg = gr;
const Sg = {
  atrule: "AtRule",
  comment: "Comment",
  decl: "Declaration",
  document: "Document",
  root: "Root",
  rule: "Rule"
}, xg = {
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
}, Cg = {
  Once: !0,
  postcssPlugin: !0,
  prepare: !0
}, St = 0;
function Tt(r) {
  return typeof r == "object" && typeof r.then == "function";
}
function Vu(r) {
  let e = !1, t = Sg[r.type];
  return r.type === "decl" ? e = r.prop.toLowerCase() : r.type === "atrule" && (e = r.name.toLowerCase()), e && r.append ? [
    t,
    t + "-" + e,
    St,
    t + "Exit",
    t + "Exit-" + e
  ] : e ? [t, t + "-" + e, t + "Exit", t + "Exit-" + e] : r.append ? [t, St, t + "Exit"] : [t, t + "Exit"];
}
function Aa(r) {
  let e;
  return r.type === "document" ? e = ["Document", St, "DocumentExit"] : r.type === "root" ? e = ["Root", St, "RootExit"] : e = Vu(r), {
    eventIndex: 0,
    events: e,
    iterator: 0,
    node: r,
    visitorIndex: 0,
    visitors: []
  };
}
function ls(r) {
  return r[xe] = !1, r.nodes && r.nodes.forEach((e) => ls(e)), r;
}
let us = {}, xt = class Yu {
  constructor(e, t, i) {
    this.stringified = !1, this.processed = !1;
    let n;
    if (typeof t == "object" && t !== null && (t.type === "root" || t.type === "document"))
      n = ls(t);
    else if (t instanceof Yu || t instanceof Ia)
      n = ls(t.root), t.map && (typeof i.map > "u" && (i.map = {}), i.map.inline || (i.map.inline = !1), i.map.prev = t.map);
    else {
      let s = _g;
      i.syntax && (s = i.syntax.parse), i.parser && (s = i.parser), s.parse && (s = s.parse);
      try {
        n = s(t, i);
      } catch (o) {
        this.processed = !0, this.error = o;
      }
      n && !n[pg] && yg.rebuild(n);
    }
    this.result = new Ia(e, n, i), this.helpers = { ...us, postcss: us, result: this.result }, this.plugins = this.processor.plugins.map((s) => typeof s == "object" && s.prepare ? { ...s, ...s.prepare(this.result) } : s);
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
    let i = this.result.lastPlugin;
    try {
      if (t && t.addToError(e), this.error = e, e.name === "CssSyntaxError" && !e.plugin)
        e.plugin = i.postcssPlugin, e.setMessage();
      else if (i.postcssVersion && process.env.NODE_ENV !== "production") {
        let n = i.postcssPlugin, s = i.postcssVersion, o = this.result.processor.version, a = s.split("."), l = o.split(".");
        (a[0] !== l[0] || parseInt(a[1]) > parseInt(l[1])) && console.error(
          "Unknown error from PostCSS plugin. Your current PostCSS version is " + o + ", but " + n + " uses " + s + ". Perhaps this is the source of the error below."
        );
      }
    } catch (n) {
      console && console.error && console.error(n);
    }
    return e;
  }
  prepareVisitors() {
    this.listeners = {};
    let e = (t, i, n) => {
      this.listeners[i] || (this.listeners[i] = []), this.listeners[i].push([t, n]);
    };
    for (let t of this.plugins)
      if (typeof t == "object")
        for (let i in t) {
          if (!xg[i] && /^[A-Z]/.test(i))
            throw new Error(
              `Unknown event ${i} in ${t.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`
            );
          if (!Cg[i])
            if (typeof t[i] == "object")
              for (let n in t[i])
                n === "*" ? e(t, i, t[i][n]) : e(
                  t,
                  i + "-" + n.toLowerCase(),
                  t[i][n]
                );
            else typeof t[i] == "function" && e(t, i, t[i]);
        }
    this.hasListener = Object.keys(this.listeners).length > 0;
  }
  async runAsync() {
    this.plugin = 0;
    for (let e = 0; e < this.plugins.length; e++) {
      let t = this.plugins[e], i = this.runOnRoot(t);
      if (Tt(i))
        try {
          await i;
        } catch (n) {
          throw this.handleError(n);
        }
    }
    if (this.prepareVisitors(), this.hasListener) {
      let e = this.result.root;
      for (; !e[xe]; ) {
        e[xe] = !0;
        let t = [Aa(e)];
        for (; t.length > 0; ) {
          let i = this.visitTick(t);
          if (Tt(i))
            try {
              await i;
            } catch (n) {
              let s = t[t.length - 1].node;
              throw this.handleError(n, s);
            }
        }
      }
      if (this.listeners.OnceExit)
        for (let [t, i] of this.listeners.OnceExit) {
          this.result.lastPlugin = t;
          try {
            if (e.type === "document") {
              let n = e.nodes.map(
                (s) => i(s, this.helpers)
              );
              await Promise.all(n);
            } else
              await i(e, this.helpers);
          } catch (n) {
            throw this.handleError(n);
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
            (i) => e.Once(i, this.helpers)
          );
          return Tt(t[0]) ? Promise.all(t) : t;
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
    let e = this.result.opts, t = gg;
    e.syntax && (t = e.syntax.stringify), e.stringifier && (t = e.stringifier), t.stringify && (t = t.stringify);
    let n = new mg(t, this.result.root, this.result.opts).generate();
    return this.result.css = n[0], this.result.map = n[1], this.result;
  }
  sync() {
    if (this.error) throw this.error;
    if (this.processed) return this.result;
    if (this.processed = !0, this.processing)
      throw this.getAsyncError();
    for (let e of this.plugins) {
      let t = this.runOnRoot(e);
      if (Tt(t))
        throw this.getAsyncError();
    }
    if (this.prepareVisitors(), this.hasListener) {
      let e = this.result.root;
      for (; !e[xe]; )
        e[xe] = !0, this.walkSync(e);
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
    return process.env.NODE_ENV !== "production" && ("from" in this.opts || bg(
      "Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning."
    )), this.async().then(e, t);
  }
  toString() {
    return this.css;
  }
  visitSync(e, t) {
    for (let [i, n] of e) {
      this.result.lastPlugin = i;
      let s;
      try {
        s = n(t, this.helpers);
      } catch (o) {
        throw this.handleError(o, t.proxyOf);
      }
      if (t.type !== "root" && t.type !== "document" && !t.parent)
        return !0;
      if (Tt(s))
        throw this.getAsyncError();
    }
  }
  visitTick(e) {
    let t = e[e.length - 1], { node: i, visitors: n } = t;
    if (i.type !== "root" && i.type !== "document" && !i.parent) {
      e.pop();
      return;
    }
    if (n.length > 0 && t.visitorIndex < n.length) {
      let [o, a] = n[t.visitorIndex];
      t.visitorIndex += 1, t.visitorIndex === n.length && (t.visitors = [], t.visitorIndex = 0), this.result.lastPlugin = o;
      try {
        return a(i.toProxy(), this.helpers);
      } catch (l) {
        throw this.handleError(l, i);
      }
    }
    if (t.iterator !== 0) {
      let o = t.iterator, a;
      for (; a = i.nodes[i.indexes[o]]; )
        if (i.indexes[o] += 1, !a[xe]) {
          a[xe] = !0, e.push(Aa(a));
          return;
        }
      t.iterator = 0, delete i.indexes[o];
    }
    let s = t.events;
    for (; t.eventIndex < s.length; ) {
      let o = s[t.eventIndex];
      if (t.eventIndex += 1, o === St) {
        i.nodes && i.nodes.length && (i[xe] = !0, t.iterator = i.getIterator());
        return;
      } else if (this.listeners[o]) {
        t.visitors = this.listeners[o];
        return;
      }
    }
    e.pop();
  }
  walkSync(e) {
    e[xe] = !0;
    let t = Vu(e);
    for (let i of t)
      if (i === St)
        e.nodes && e.each((n) => {
          n[xe] || this.walkSync(n);
        });
      else {
        let n = this.listeners[i];
        if (n && this.visitSync(n, e.toProxy()))
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
xt.registerPostcss = (r) => {
  us = r;
};
var Ju = xt;
xt.default = xt;
vg.registerLazyResult(xt);
wg.registerLazyResult(xt);
let Ig = Eu, Ag = Ni, Eg = zu, Og = Ks;
const Rg = Ys;
let fs = class {
  constructor(e, t, i) {
    t = t.toString(), this.stringified = !1, this._processor = e, this._css = t, this._opts = i, this._map = void 0;
    let n, s = Ag;
    this.result = new Rg(this._processor, n, this._opts), this.result.css = t;
    let o = this;
    Object.defineProperty(this.result, "root", {
      get() {
        return o.root;
      }
    });
    let a = new Ig(s, n, this._opts, t);
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
    return process.env.NODE_ENV !== "production" && ("from" in this._opts || Eg(
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
    let e, t = Og;
    try {
      e = t(this._css, this._opts);
    } catch (i) {
      this.error = i;
    }
    if (this.error)
      throw this.error;
    return this._root = e, e;
  }
  get [Symbol.toStringTag]() {
    return "NoWorkResult";
  }
};
var kg = fs;
fs.default = fs;
let $g = kg, Mg = Ju, Ng = Vs, Pg = gr, ir = class {
  constructor(e = []) {
    this.version = "8.4.38", this.plugins = this.normalize(e);
  }
  normalize(e) {
    let t = [];
    for (let i of e)
      if (i.postcss === !0 ? i = i() : i.postcss && (i = i.postcss), typeof i == "object" && Array.isArray(i.plugins))
        t = t.concat(i.plugins);
      else if (typeof i == "object" && i.postcssPlugin)
        t.push(i);
      else if (typeof i == "function")
        t.push(i);
      else if (typeof i == "object" && (i.parse || i.stringify)) {
        if (process.env.NODE_ENV !== "production")
          throw new Error(
            "PostCSS syntaxes cannot be used as plugins. Instead, please use one of the syntax/parser/stringifier options as outlined in your PostCSS runner documentation."
          );
      } else
        throw new Error(i + " is not a PostCSS plugin");
    return t;
  }
  process(e, t = {}) {
    return !this.plugins.length && !t.parser && !t.stringifier && !t.syntax ? new $g(this, e, t) : new Mg(this, e, t);
  }
  use(e) {
    return this.plugins = this.plugins.concat(this.normalize([e])), this;
  }
};
var Tg = ir;
ir.default = ir;
Pg.registerProcessor(ir);
Ng.registerProcessor(ir);
let Dg = Ti, Lg = Su, Fg = Li, zg = Js, Ug = Di, Bg = gr, jg = Xs;
function nr(r, e) {
  if (Array.isArray(r)) return r.map((n) => nr(n));
  let { inputs: t, ...i } = r;
  if (t) {
    e = [];
    for (let n of t) {
      let s = { ...n, __proto__: Ug.prototype };
      s.map && (s.map = {
        ...s.map,
        __proto__: Lg.prototype
      }), e.push(s);
    }
  }
  if (i.nodes && (i.nodes = r.nodes.map((n) => nr(n, e))), i.source) {
    let { inputId: n, ...s } = i.source;
    i.source = s, n != null && (i.source.input = e[n]);
  }
  if (i.type === "root")
    return new Bg(i);
  if (i.type === "decl")
    return new Dg(i);
  if (i.type === "rule")
    return new jg(i);
  if (i.type === "comment")
    return new Fg(i);
  if (i.type === "atrule")
    return new zg(i);
  throw new Error("Unknown node type: " + r.type);
}
var Wg = nr;
nr.default = nr;
let Zg = Zs, Xu = Ti, Gg = Ju, Hg = rt, qs = Tg, Vg = Ni, Yg = Wg, Ku = Vs, Jg = Uu, qu = Li, Qu = Js, Xg = Ys, Kg = Di, qg = Ks, Qg = Gu, ef = Xs, tf = gr, ey = Pi;
function F(...r) {
  return r.length === 1 && Array.isArray(r[0]) && (r = r[0]), new qs(r);
}
F.plugin = function(e, t) {
  let i = !1;
  function n(...o) {
    console && console.warn && !i && (i = !0, console.warn(
      e + `: postcss.plugin was deprecated. Migration guide:
https://evilmartians.com/chronicles/postcss-8-plugin-migration`
    ), process.env.LANG && process.env.LANG.startsWith("cn") && console.warn(
      e + `: 里面 postcss.plugin 被弃用. 迁移指南:
https://www.w3ctech.com/topic/2226`
    ));
    let a = t(...o);
    return a.postcssPlugin = e, a.postcssVersion = new qs().version, a;
  }
  let s;
  return Object.defineProperty(n, "postcss", {
    get() {
      return s || (s = n()), s;
    }
  }), n.process = function(o, a, l) {
    return F([n(l)]).process(o, a);
  }, n;
};
F.stringify = Vg;
F.parse = qg;
F.fromJSON = Yg;
F.list = Qg;
F.comment = (r) => new qu(r);
F.atRule = (r) => new Qu(r);
F.decl = (r) => new Xu(r);
F.rule = (r) => new ef(r);
F.root = (r) => new tf(r);
F.document = (r) => new Ku(r);
F.CssSyntaxError = Zg;
F.Declaration = Xu;
F.Container = Hg;
F.Processor = qs;
F.Document = Ku;
F.Comment = qu;
F.Warning = Jg;
F.AtRule = Qu;
F.Result = Xg;
F.Input = Kg;
F.Rule = ef;
F.Root = tf;
F.Node = ey;
Gg.registerPostcss(F);
var ty = F;
F.default = F;
const G = /* @__PURE__ */ cm(ty);
G.stringify;
G.fromJSON;
G.plugin;
G.parse;
G.list;
G.document;
G.comment;
G.atRule;
G.rule;
G.decl;
G.root;
G.CssSyntaxError;
G.Declaration;
G.Container;
G.Processor;
G.Document;
G.Comment;
G.Warning;
G.AtRule;
G.Result;
G.Input;
G.Rule;
G.Root;
G.Node;
var ry = Object.defineProperty, iy = (r, e, t) => e in r ? ry(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, ce = (r, e, t) => iy(r, typeof e != "symbol" ? e + "" : e, t);
function ny(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
function sy(r) {
  if (r.__esModule) return r;
  var e = r.default;
  if (typeof e == "function") {
    var t = function i() {
      return this instanceof i ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    t.prototype = e.prototype;
  } else t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(r).forEach(function(i) {
    var n = Object.getOwnPropertyDescriptor(r, i);
    Object.defineProperty(t, i, n.get ? n : {
      enumerable: !0,
      get: function() {
        return r[i];
      }
    });
  }), t;
}
var Qs = { exports: {} }, W = String, rf = function() {
  return { isColorSupported: !1, reset: W, bold: W, dim: W, italic: W, underline: W, inverse: W, hidden: W, strikethrough: W, black: W, red: W, green: W, yellow: W, blue: W, magenta: W, cyan: W, white: W, gray: W, bgBlack: W, bgRed: W, bgGreen: W, bgYellow: W, bgBlue: W, bgMagenta: W, bgCyan: W, bgWhite: W };
};
Qs.exports = rf();
Qs.exports.createColors = rf;
var oy = Qs.exports;
const ay = {}, ly = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ay
}, Symbol.toStringTag, { value: "Module" })), ye = /* @__PURE__ */ sy(ly);
let Ea = oy, Oa = ye, cs = class nf extends Error {
  constructor(e, t, i, n, s, o) {
    super(e), this.name = "CssSyntaxError", this.reason = e, s && (this.file = s), n && (this.source = n), o && (this.plugin = o), typeof t < "u" && typeof i < "u" && (typeof t == "number" ? (this.line = t, this.column = i) : (this.line = t.line, this.column = t.column, this.endLine = i.line, this.endColumn = i.column)), this.setMessage(), Error.captureStackTrace && Error.captureStackTrace(this, nf);
  }
  setMessage() {
    this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", typeof this.line < "u" && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason;
  }
  showSourceCode(e) {
    if (!this.source) return "";
    let t = this.source;
    e == null && (e = Ea.isColorSupported), Oa && e && (t = Oa(t));
    let i = t.split(/\r?\n/), n = Math.max(this.line - 3, 0), s = Math.min(this.line + 2, i.length), o = String(s).length, a, l;
    if (e) {
      let { bold: u, gray: f, red: d } = Ea.createColors(!0);
      a = (h) => u(d(h)), l = (h) => f(h);
    } else
      a = l = (u) => u;
    return i.slice(n, s).map((u, f) => {
      let d = n + 1 + f, h = " " + (" " + d).slice(-o) + " | ";
      if (d === this.line) {
        let c = l(h.replace(/\d/g, " ")) + u.slice(0, this.column - 1).replace(/[^\t]/g, " ");
        return a(">") + l(h) + u + `
 ` + c + a("^");
      }
      return " " + l(h) + u;
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
var eo = cs;
cs.default = cs;
var yr = {};
yr.isClean = Symbol("isClean");
yr.my = Symbol("my");
const Ra = {
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
function uy(r) {
  return r[0].toUpperCase() + r.slice(1);
}
let hs = class {
  constructor(e) {
    this.builder = e;
  }
  atrule(e, t) {
    let i = "@" + e.name, n = e.params ? this.rawValue(e, "params") : "";
    if (typeof e.raws.afterName < "u" ? i += e.raws.afterName : n && (i += " "), e.nodes)
      this.block(e, i + n);
    else {
      let s = (e.raws.between || "") + (t ? ";" : "");
      this.builder(i + n + s, e);
    }
  }
  beforeAfter(e, t) {
    let i;
    e.type === "decl" ? i = this.raw(e, null, "beforeDecl") : e.type === "comment" ? i = this.raw(e, null, "beforeComment") : t === "before" ? i = this.raw(e, null, "beforeRule") : i = this.raw(e, null, "beforeClose");
    let n = e.parent, s = 0;
    for (; n && n.type !== "root"; )
      s += 1, n = n.parent;
    if (i.includes(`
`)) {
      let o = this.raw(e, null, "indent");
      if (o.length)
        for (let a = 0; a < s; a++) i += o;
    }
    return i;
  }
  block(e, t) {
    let i = this.raw(e, "between", "beforeOpen");
    this.builder(t + i + "{", e, "start");
    let n;
    e.nodes && e.nodes.length ? (this.body(e), n = this.raw(e, "after")) : n = this.raw(e, "after", "emptyBody"), n && this.builder(n), this.builder("}", e, "end");
  }
  body(e) {
    let t = e.nodes.length - 1;
    for (; t > 0 && e.nodes[t].type === "comment"; )
      t -= 1;
    let i = this.raw(e, "semicolon");
    for (let n = 0; n < e.nodes.length; n++) {
      let s = e.nodes[n], o = this.raw(s, "before");
      o && this.builder(o), this.stringify(s, t !== n || i);
    }
  }
  comment(e) {
    let t = this.raw(e, "left", "commentLeft"), i = this.raw(e, "right", "commentRight");
    this.builder("/*" + t + e.text + i + "*/", e);
  }
  decl(e, t) {
    let i = this.raw(e, "between", "colon"), n = e.prop + i + this.rawValue(e, "value");
    e.important && (n += e.raws.important || " !important"), t && (n += ";"), this.builder(n, e);
  }
  document(e) {
    this.body(e);
  }
  raw(e, t, i) {
    let n;
    if (i || (i = t), t && (n = e.raws[t], typeof n < "u"))
      return n;
    let s = e.parent;
    if (i === "before" && (!s || s.type === "root" && s.first === e || s && s.type === "document"))
      return "";
    if (!s) return Ra[i];
    let o = e.root();
    if (o.rawCache || (o.rawCache = {}), typeof o.rawCache[i] < "u")
      return o.rawCache[i];
    if (i === "before" || i === "after")
      return this.beforeAfter(e, i);
    {
      let a = "raw" + uy(i);
      this[a] ? n = this[a](o, e) : o.walk((l) => {
        if (n = l.raws[t], typeof n < "u") return !1;
      });
    }
    return typeof n > "u" && (n = Ra[i]), o.rawCache[i] = n, n;
  }
  rawBeforeClose(e) {
    let t;
    return e.walk((i) => {
      if (i.nodes && i.nodes.length > 0 && typeof i.raws.after < "u")
        return t = i.raws.after, t.includes(`
`) && (t = t.replace(/[^\n]+$/, "")), !1;
    }), t && (t = t.replace(/\S/g, "")), t;
  }
  rawBeforeComment(e, t) {
    let i;
    return e.walkComments((n) => {
      if (typeof n.raws.before < "u")
        return i = n.raws.before, i.includes(`
`) && (i = i.replace(/[^\n]+$/, "")), !1;
    }), typeof i > "u" ? i = this.raw(t, null, "beforeDecl") : i && (i = i.replace(/\S/g, "")), i;
  }
  rawBeforeDecl(e, t) {
    let i;
    return e.walkDecls((n) => {
      if (typeof n.raws.before < "u")
        return i = n.raws.before, i.includes(`
`) && (i = i.replace(/[^\n]+$/, "")), !1;
    }), typeof i > "u" ? i = this.raw(t, null, "beforeRule") : i && (i = i.replace(/\S/g, "")), i;
  }
  rawBeforeOpen(e) {
    let t;
    return e.walk((i) => {
      if (i.type !== "decl" && (t = i.raws.between, typeof t < "u"))
        return !1;
    }), t;
  }
  rawBeforeRule(e) {
    let t;
    return e.walk((i) => {
      if (i.nodes && (i.parent !== e || e.first !== i) && typeof i.raws.before < "u")
        return t = i.raws.before, t.includes(`
`) && (t = t.replace(/[^\n]+$/, "")), !1;
    }), t && (t = t.replace(/\S/g, "")), t;
  }
  rawColon(e) {
    let t;
    return e.walkDecls((i) => {
      if (typeof i.raws.between < "u")
        return t = i.raws.between.replace(/[^\s:]/g, ""), !1;
    }), t;
  }
  rawEmptyBody(e) {
    let t;
    return e.walk((i) => {
      if (i.nodes && i.nodes.length === 0 && (t = i.raws.after, typeof t < "u"))
        return !1;
    }), t;
  }
  rawIndent(e) {
    if (e.raws.indent) return e.raws.indent;
    let t;
    return e.walk((i) => {
      let n = i.parent;
      if (n && n !== e && n.parent && n.parent === e && typeof i.raws.before < "u") {
        let s = i.raws.before.split(`
`);
        return t = s[s.length - 1], t = t.replace(/\S/g, ""), !1;
      }
    }), t;
  }
  rawSemicolon(e) {
    let t;
    return e.walk((i) => {
      if (i.nodes && i.nodes.length && i.last.type === "decl" && (t = i.raws.semicolon, typeof t < "u"))
        return !1;
    }), t;
  }
  rawValue(e, t) {
    let i = e[t], n = e.raws[t];
    return n && n.value === i ? n.raw : i;
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
var sf = hs;
hs.default = hs;
let fy = sf;
function ds(r, e) {
  new fy(e).stringify(r);
}
var Fi = ds;
ds.default = ds;
let { isClean: Br, my: cy } = yr, hy = eo, dy = sf, py = Fi;
function ps(r, e) {
  let t = new r.constructor();
  for (let i in r) {
    if (!Object.prototype.hasOwnProperty.call(r, i) || i === "proxyCache") continue;
    let n = r[i], s = typeof n;
    i === "parent" && s === "object" ? e && (t[i] = e) : i === "source" ? t[i] = n : Array.isArray(n) ? t[i] = n.map((o) => ps(o, t)) : (s === "object" && n !== null && (n = ps(n)), t[i] = n);
  }
  return t;
}
let ms = class {
  constructor(e = {}) {
    this.raws = {}, this[Br] = !1, this[cy] = !0;
    for (let t in e)
      if (t === "nodes") {
        this.nodes = [];
        for (let i of e[t])
          typeof i.clone == "function" ? this.append(i.clone()) : this.append(i);
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
    let t = ps(this);
    for (let i in e)
      t[i] = e[i];
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
      let { end: i, start: n } = this.rangeBy(t);
      return this.source.input.error(
        e,
        { column: n.column, line: n.line },
        { column: i.column, line: i.line },
        t
      );
    }
    return new hy(e);
  }
  getProxyProcessor() {
    return {
      get(e, t) {
        return t === "proxyOf" ? e : t === "root" ? () => e.root().toProxy() : e[t];
      },
      set(e, t, i) {
        return e[t] === i || (e[t] = i, (t === "prop" || t === "value" || t === "name" || t === "params" || t === "important" || /* c8 ignore next */
        t === "text") && e.markDirty()), !0;
      }
    };
  }
  markDirty() {
    if (this[Br]) {
      this[Br] = !1;
      let e = this;
      for (; e = e.parent; )
        e[Br] = !1;
    }
  }
  next() {
    if (!this.parent) return;
    let e = this.parent.index(this);
    return this.parent.nodes[e + 1];
  }
  positionBy(e, t) {
    let i = this.source.start;
    if (e.index)
      i = this.positionInside(e.index, t);
    else if (e.word) {
      t = this.toString();
      let n = t.indexOf(e.word);
      n !== -1 && (i = this.positionInside(n, t));
    }
    return i;
  }
  positionInside(e, t) {
    let i = t || this.toString(), n = this.source.start.column, s = this.source.start.line;
    for (let o = 0; o < e; o++)
      i[o] === `
` ? (n = 1, s += 1) : n += 1;
    return { column: n, line: s };
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
    }, i = this.source.end ? {
      column: this.source.end.column + 1,
      line: this.source.end.line
    } : {
      column: t.column + 1,
      line: t.line
    };
    if (e.word) {
      let n = this.toString(), s = n.indexOf(e.word);
      s !== -1 && (t = this.positionInside(s, n), i = this.positionInside(s + e.word.length, n));
    } else
      e.start ? t = {
        column: e.start.column,
        line: e.start.line
      } : e.index && (t = this.positionInside(e.index)), e.end ? i = {
        column: e.end.column,
        line: e.end.line
      } : typeof e.endIndex == "number" ? i = this.positionInside(e.endIndex) : e.index && (i = this.positionInside(e.index + 1));
    return (i.line < t.line || i.line === t.line && i.column <= t.column) && (i = { column: t.column + 1, line: t.line }), { end: i, start: t };
  }
  raw(e, t) {
    return new dy().raw(this, e, t);
  }
  remove() {
    return this.parent && this.parent.removeChild(this), this.parent = void 0, this;
  }
  replaceWith(...e) {
    if (this.parent) {
      let t = this, i = !1;
      for (let n of e)
        n === this ? i = !0 : i ? (this.parent.insertAfter(t, n), t = n) : this.parent.insertBefore(t, n);
      i || this.remove();
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
    let i = {}, n = t == null;
    t = t || /* @__PURE__ */ new Map();
    let s = 0;
    for (let o in this) {
      if (!Object.prototype.hasOwnProperty.call(this, o) || o === "parent" || o === "proxyCache") continue;
      let a = this[o];
      if (Array.isArray(a))
        i[o] = a.map((l) => typeof l == "object" && l.toJSON ? l.toJSON(null, t) : l);
      else if (typeof a == "object" && a.toJSON)
        i[o] = a.toJSON(null, t);
      else if (o === "source") {
        let l = t.get(a.input);
        l == null && (l = s, t.set(a.input, s), s++), i[o] = {
          end: a.end,
          inputId: l,
          start: a.start
        };
      } else
        i[o] = a;
    }
    return n && (i.inputs = [...t.keys()].map((o) => o.toJSON())), i;
  }
  toProxy() {
    return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache;
  }
  toString(e = py) {
    e.stringify && (e = e.stringify);
    let t = "";
    return e(this, (i) => {
      t += i;
    }), t;
  }
  warn(e, t, i) {
    let n = { node: this };
    for (let s in i) n[s] = i[s];
    return e.warn(t, n);
  }
  get proxyOf() {
    return this;
  }
};
var zi = ms;
ms.default = ms;
let my = zi, gs = class extends my {
  constructor(e) {
    e && typeof e.value < "u" && typeof e.value != "string" && (e = { ...e, value: String(e.value) }), super(e), this.type = "decl";
  }
  get variable() {
    return this.prop.startsWith("--") || this.prop[0] === "$";
  }
};
var Ui = gs;
gs.default = gs;
let gy = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", yy = (r, e = 21) => (t = e) => {
  let i = "", n = t;
  for (; n--; )
    i += r[Math.random() * r.length | 0];
  return i;
}, wy = (r = 21) => {
  let e = "", t = r;
  for (; t--; )
    e += gy[Math.random() * 64 | 0];
  return e;
};
var by = { nanoid: wy, customAlphabet: yy };
let { SourceMapConsumer: ka, SourceMapGenerator: $a } = ye, { existsSync: _y, readFileSync: vy } = ye, { dirname: _n, join: Sy } = ye;
function xy(r) {
  return Buffer ? Buffer.from(r, "base64").toString() : window.atob(r);
}
let ys = class {
  constructor(e, t) {
    if (t.map === !1) return;
    this.loadAnnotation(e), this.inline = this.startWith(this.annotation, "data:");
    let i = t.map ? t.map.prev : void 0, n = this.loadMap(t.from, i);
    !this.mapFile && t.from && (this.mapFile = t.from), this.mapFile && (this.root = _n(this.mapFile)), n && (this.text = n);
  }
  consumer() {
    return this.consumerCache || (this.consumerCache = new ka(this.text)), this.consumerCache;
  }
  decodeInline(e) {
    let t = /^data:application\/json;charset=utf-?8;base64,/, i = /^data:application\/json;base64,/, n = /^data:application\/json;charset=utf-?8,/, s = /^data:application\/json,/;
    if (n.test(e) || s.test(e))
      return decodeURIComponent(e.substr(RegExp.lastMatch.length));
    if (t.test(e) || i.test(e))
      return xy(e.substr(RegExp.lastMatch.length));
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
    let i = e.lastIndexOf(t.pop()), n = e.indexOf("*/", i);
    i > -1 && n > -1 && (this.annotation = this.getAnnotationURL(e.substring(i, n)));
  }
  loadFile(e) {
    if (this.root = _n(e), _y(e))
      return this.mapFile = e, vy(e, "utf-8").toString().trim();
  }
  loadMap(e, t) {
    if (t === !1) return !1;
    if (t) {
      if (typeof t == "string")
        return t;
      if (typeof t == "function") {
        let i = t(e);
        if (i) {
          let n = this.loadFile(i);
          if (!n)
            throw new Error(
              "Unable to load previous source map: " + i.toString()
            );
          return n;
        }
      } else {
        if (t instanceof ka)
          return $a.fromSourceMap(t).toString();
        if (t instanceof $a)
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
        let i = this.annotation;
        return e && (i = Sy(_n(e), i)), this.loadFile(i);
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
var of = ys;
ys.default = ys;
let { SourceMapConsumer: Cy, SourceMapGenerator: Iy } = ye, { fileURLToPath: Ma, pathToFileURL: jr } = ye, { isAbsolute: ws, resolve: bs } = ye, { nanoid: Ay } = by, vn = ye, Na = eo, Ey = of, Sn = Symbol("fromOffsetCache"), Oy = !!(Cy && Iy), Pa = !!(bs && ws), vi = class {
  constructor(e, t = {}) {
    if (e === null || typeof e > "u" || typeof e == "object" && !e.toString)
      throw new Error(`PostCSS received ${e} instead of CSS string`);
    if (this.css = e.toString(), this.css[0] === "\uFEFF" || this.css[0] === "￾" ? (this.hasBOM = !0, this.css = this.css.slice(1)) : this.hasBOM = !1, t.from && (!Pa || /^\w+:\/\//.test(t.from) || ws(t.from) ? this.file = t.from : this.file = bs(t.from)), Pa && Oy) {
      let i = new Ey(this.css, t);
      if (i.text) {
        this.map = i;
        let n = i.consumer().file;
        !this.file && n && (this.file = this.mapResolve(n));
      }
    }
    this.file || (this.id = "<input css " + Ay(6) + ">"), this.map && (this.map.file = this.from);
  }
  error(e, t, i, n = {}) {
    let s, o, a;
    if (t && typeof t == "object") {
      let u = t, f = i;
      if (typeof u.offset == "number") {
        let d = this.fromOffset(u.offset);
        t = d.line, i = d.col;
      } else
        t = u.line, i = u.column;
      if (typeof f.offset == "number") {
        let d = this.fromOffset(f.offset);
        o = d.line, a = d.col;
      } else
        o = f.line, a = f.column;
    } else if (!i) {
      let u = this.fromOffset(t);
      t = u.line, i = u.col;
    }
    let l = this.origin(t, i, o, a);
    return l ? s = new Na(
      e,
      l.endLine === void 0 ? l.line : { column: l.column, line: l.line },
      l.endLine === void 0 ? l.column : { column: l.endColumn, line: l.endLine },
      l.source,
      l.file,
      n.plugin
    ) : s = new Na(
      e,
      o === void 0 ? t : { column: i, line: t },
      o === void 0 ? i : { column: a, line: o },
      this.css,
      this.file,
      n.plugin
    ), s.input = { column: i, endColumn: a, endLine: o, line: t, source: this.css }, this.file && (jr && (s.input.url = jr(this.file).toString()), s.input.file = this.file), s;
  }
  fromOffset(e) {
    let t, i;
    if (this[Sn])
      i = this[Sn];
    else {
      let s = this.css.split(`
`);
      i = new Array(s.length);
      let o = 0;
      for (let a = 0, l = s.length; a < l; a++)
        i[a] = o, o += s[a].length + 1;
      this[Sn] = i;
    }
    t = i[i.length - 1];
    let n = 0;
    if (e >= t)
      n = i.length - 1;
    else {
      let s = i.length - 2, o;
      for (; n < s; )
        if (o = n + (s - n >> 1), e < i[o])
          s = o - 1;
        else if (e >= i[o + 1])
          n = o + 1;
        else {
          n = o;
          break;
        }
    }
    return {
      col: e - i[n] + 1,
      line: n + 1
    };
  }
  mapResolve(e) {
    return /^\w+:\/\//.test(e) ? e : bs(this.map.consumer().sourceRoot || this.map.root || ".", e);
  }
  origin(e, t, i, n) {
    if (!this.map) return !1;
    let s = this.map.consumer(), o = s.originalPositionFor({ column: t, line: e });
    if (!o.source) return !1;
    let a;
    typeof i == "number" && (a = s.originalPositionFor({ column: n, line: i }));
    let l;
    ws(o.source) ? l = jr(o.source) : l = new URL(
      o.source,
      this.map.consumer().sourceRoot || jr(this.map.mapFile)
    );
    let u = {
      column: o.column,
      endColumn: a && a.column,
      endLine: a && a.line,
      line: o.line,
      url: l.toString()
    };
    if (l.protocol === "file:")
      if (Ma)
        u.file = Ma(l);
      else
        throw new Error("file: protocol is not available in this PostCSS build");
    let f = s.sourceContentFor(o.source);
    return f && (u.source = f), u;
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
var Bi = vi;
vi.default = vi;
vn && vn.registerInput && vn.registerInput(vi);
let { SourceMapConsumer: af, SourceMapGenerator: si } = ye, { dirname: oi, relative: lf, resolve: uf, sep: ff } = ye, { pathToFileURL: Ta } = ye, Ry = Bi, ky = !!(af && si), $y = !!(oi && uf && lf && ff), My = class {
  constructor(e, t, i, n) {
    this.stringify = e, this.mapOpts = i.map || {}, this.root = t, this.opts = i, this.css = n, this.originalCSS = n, this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute, this.memoizedFileURLs = /* @__PURE__ */ new Map(), this.memoizedPaths = /* @__PURE__ */ new Map(), this.memoizedURLs = /* @__PURE__ */ new Map();
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
      let t = this.toUrl(this.path(e.file)), i = e.root || oi(e.file), n;
      this.mapOpts.sourcesContent === !1 ? (n = new af(e.text), n.sourcesContent && (n.sourcesContent = null)) : n = e.consumer(), this.map.applySourceMap(n, t, this.toUrl(this.path(i)));
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
    if (this.clearAnnotation(), $y && ky && this.isMap())
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
      e.file = this.outputFile(), this.map = si.fromSourceMap(e, {
        ignoreInvalidMapping: !0
      });
    } else
      this.map = new si({
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
    this.css = "", this.map = new si({
      file: this.outputFile(),
      ignoreInvalidMapping: !0
    });
    let e = 1, t = 1, i = "<no source>", n = {
      generated: { column: 0, line: 0 },
      original: { column: 0, line: 0 },
      source: ""
    }, s, o;
    this.stringify(this.root, (a, l, u) => {
      if (this.css += a, l && u !== "end" && (n.generated.line = e, n.generated.column = t - 1, l.source && l.source.start ? (n.source = this.sourcePath(l), n.original.line = l.source.start.line, n.original.column = l.source.start.column - 1, this.map.addMapping(n)) : (n.source = i, n.original.line = 1, n.original.column = 0, this.map.addMapping(n))), s = a.match(/\n/g), s ? (e += s.length, o = a.lastIndexOf(`
`), t = a.length - o) : t += a.length, l && u !== "start") {
        let f = l.parent || { raws: {} };
        (!(l.type === "decl" || l.type === "atrule" && !l.nodes) || l !== f.last || f.raws.semicolon) && (l.source && l.source.end ? (n.source = this.sourcePath(l), n.original.line = l.source.end.line, n.original.column = l.source.end.column - 1, n.generated.line = e, n.generated.column = t - 2, this.map.addMapping(n)) : (n.source = i, n.original.line = 1, n.original.column = 0, n.generated.line = e, n.generated.column = t - 1, this.map.addMapping(n)));
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
    let i = this.opts.to ? oi(this.opts.to) : ".";
    typeof this.mapOpts.annotation == "string" && (i = oi(uf(i, this.mapOpts.annotation)));
    let n = lf(i, e);
    return this.memoizedPaths.set(e, n), n;
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
        let e = new Ry(this.originalCSS, this.opts);
        e.map && this.previousMaps.push(e.map);
      }
    return this.previousMaps;
  }
  setSourcesContent() {
    let e = {};
    if (this.root)
      this.root.walk((t) => {
        if (t.source) {
          let i = t.source.input.from;
          if (i && !e[i]) {
            e[i] = !0;
            let n = this.usesFileUrls ? this.toFileUrl(i) : this.toUrl(this.path(i));
            this.map.setSourceContent(n, t.source.input.css);
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
    if (Ta) {
      let i = Ta(e).toString();
      return this.memoizedFileURLs.set(e, i), i;
    } else
      throw new Error(
        "`map.absolute` option is not available in this PostCSS build"
      );
  }
  toUrl(e) {
    let t = this.memoizedURLs.get(e);
    if (t) return t;
    ff === "\\" && (e = e.replace(/\\/g, "/"));
    let i = encodeURI(e).replace(/[#?]/g, encodeURIComponent);
    return this.memoizedURLs.set(e, i), i;
  }
};
var cf = My;
let Ny = zi, _s = class extends Ny {
  constructor(e) {
    super(e), this.type = "comment";
  }
};
var ji = _s;
_s.default = _s;
let { isClean: hf, my: df } = yr, pf = Ui, mf = ji, Py = zi, gf, to, ro, yf;
function wf(r) {
  return r.map((e) => (e.nodes && (e.nodes = wf(e.nodes)), delete e.source, e));
}
function bf(r) {
  if (r[hf] = !1, r.proxyOf.nodes)
    for (let e of r.proxyOf.nodes)
      bf(e);
}
let Ne = class _f extends Py {
  append(...e) {
    for (let t of e) {
      let i = this.normalize(t, this.last);
      for (let n of i) this.proxyOf.nodes.push(n);
    }
    return this.markDirty(), this;
  }
  cleanRaws(e) {
    if (super.cleanRaws(e), this.nodes)
      for (let t of this.nodes) t.cleanRaws(e);
  }
  each(e) {
    if (!this.proxyOf.nodes) return;
    let t = this.getIterator(), i, n;
    for (; this.indexes[t] < this.proxyOf.nodes.length && (i = this.indexes[t], n = e(this.proxyOf.nodes[i], i), n !== !1); )
      this.indexes[t] += 1;
    return delete this.indexes[t], n;
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
        return t === "proxyOf" ? e : e[t] ? t === "each" || typeof t == "string" && t.startsWith("walk") ? (...i) => e[t](
          ...i.map((n) => typeof n == "function" ? (s, o) => n(s.toProxy(), o) : n)
        ) : t === "every" || t === "some" ? (i) => e[t](
          (n, ...s) => i(n.toProxy(), ...s)
        ) : t === "root" ? () => e.root().toProxy() : t === "nodes" ? e.nodes.map((i) => i.toProxy()) : t === "first" || t === "last" ? e[t].toProxy() : e[t] : e[t];
      },
      set(e, t, i) {
        return e[t] === i || (e[t] = i, (t === "name" || t === "params" || t === "selector") && e.markDirty()), !0;
      }
    };
  }
  index(e) {
    return typeof e == "number" ? e : (e.proxyOf && (e = e.proxyOf), this.proxyOf.nodes.indexOf(e));
  }
  insertAfter(e, t) {
    let i = this.index(e), n = this.normalize(t, this.proxyOf.nodes[i]).reverse();
    i = this.index(e);
    for (let o of n) this.proxyOf.nodes.splice(i + 1, 0, o);
    let s;
    for (let o in this.indexes)
      s = this.indexes[o], i < s && (this.indexes[o] = s + n.length);
    return this.markDirty(), this;
  }
  insertBefore(e, t) {
    let i = this.index(e), n = i === 0 ? "prepend" : !1, s = this.normalize(t, this.proxyOf.nodes[i], n).reverse();
    i = this.index(e);
    for (let a of s) this.proxyOf.nodes.splice(i, 0, a);
    let o;
    for (let a in this.indexes)
      o = this.indexes[a], i <= o && (this.indexes[a] = o + s.length);
    return this.markDirty(), this;
  }
  normalize(e, t) {
    if (typeof e == "string")
      e = wf(gf(e).nodes);
    else if (typeof e > "u")
      e = [];
    else if (Array.isArray(e)) {
      e = e.slice(0);
      for (let n of e)
        n.parent && n.parent.removeChild(n, "ignore");
    } else if (e.type === "root" && this.type !== "document") {
      e = e.nodes.slice(0);
      for (let n of e)
        n.parent && n.parent.removeChild(n, "ignore");
    } else if (e.type)
      e = [e];
    else if (e.prop) {
      if (typeof e.value > "u")
        throw new Error("Value field is missed in node creation");
      typeof e.value != "string" && (e.value = String(e.value)), e = [new pf(e)];
    } else if (e.selector)
      e = [new to(e)];
    else if (e.name)
      e = [new ro(e)];
    else if (e.text)
      e = [new mf(e)];
    else
      throw new Error("Unknown node type in node creation");
    return e.map((n) => (n[df] || _f.rebuild(n), n = n.proxyOf, n.parent && n.parent.removeChild(n), n[hf] && bf(n), typeof n.raws.before > "u" && t && typeof t.raws.before < "u" && (n.raws.before = t.raws.before.replace(/\S/g, "")), n.parent = this.proxyOf, n));
  }
  prepend(...e) {
    e = e.reverse();
    for (let t of e) {
      let i = this.normalize(t, this.first, "prepend").reverse();
      for (let n of i) this.proxyOf.nodes.unshift(n);
      for (let n in this.indexes)
        this.indexes[n] = this.indexes[n] + i.length;
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
    for (let i in this.indexes)
      t = this.indexes[i], t >= e && (this.indexes[i] = t - 1);
    return this.markDirty(), this;
  }
  replaceValues(e, t, i) {
    return i || (i = t, t = {}), this.walkDecls((n) => {
      t.props && !t.props.includes(n.prop) || t.fast && !n.value.includes(t.fast) || (n.value = n.value.replace(e, i));
    }), this.markDirty(), this;
  }
  some(e) {
    return this.nodes.some(e);
  }
  walk(e) {
    return this.each((t, i) => {
      let n;
      try {
        n = e(t, i);
      } catch (s) {
        throw t.addToError(s);
      }
      return n !== !1 && t.walk && (n = t.walk(e)), n;
    });
  }
  walkAtRules(e, t) {
    return t ? e instanceof RegExp ? this.walk((i, n) => {
      if (i.type === "atrule" && e.test(i.name))
        return t(i, n);
    }) : this.walk((i, n) => {
      if (i.type === "atrule" && i.name === e)
        return t(i, n);
    }) : (t = e, this.walk((i, n) => {
      if (i.type === "atrule")
        return t(i, n);
    }));
  }
  walkComments(e) {
    return this.walk((t, i) => {
      if (t.type === "comment")
        return e(t, i);
    });
  }
  walkDecls(e, t) {
    return t ? e instanceof RegExp ? this.walk((i, n) => {
      if (i.type === "decl" && e.test(i.prop))
        return t(i, n);
    }) : this.walk((i, n) => {
      if (i.type === "decl" && i.prop === e)
        return t(i, n);
    }) : (t = e, this.walk((i, n) => {
      if (i.type === "decl")
        return t(i, n);
    }));
  }
  walkRules(e, t) {
    return t ? e instanceof RegExp ? this.walk((i, n) => {
      if (i.type === "rule" && e.test(i.selector))
        return t(i, n);
    }) : this.walk((i, n) => {
      if (i.type === "rule" && i.selector === e)
        return t(i, n);
    }) : (t = e, this.walk((i, n) => {
      if (i.type === "rule")
        return t(i, n);
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
Ne.registerParse = (r) => {
  gf = r;
};
Ne.registerRule = (r) => {
  to = r;
};
Ne.registerAtRule = (r) => {
  ro = r;
};
Ne.registerRoot = (r) => {
  yf = r;
};
var it = Ne;
Ne.default = Ne;
Ne.rebuild = (r) => {
  r.type === "atrule" ? Object.setPrototypeOf(r, ro.prototype) : r.type === "rule" ? Object.setPrototypeOf(r, to.prototype) : r.type === "decl" ? Object.setPrototypeOf(r, pf.prototype) : r.type === "comment" ? Object.setPrototypeOf(r, mf.prototype) : r.type === "root" && Object.setPrototypeOf(r, yf.prototype), r[df] = !0, r.nodes && r.nodes.forEach((e) => {
    Ne.rebuild(e);
  });
};
let Ty = it, vf, Sf, sr = class extends Ty {
  constructor(e) {
    super({ type: "document", ...e }), this.nodes || (this.nodes = []);
  }
  toResult(e = {}) {
    return new vf(new Sf(), this, e).stringify();
  }
};
sr.registerLazyResult = (r) => {
  vf = r;
};
sr.registerProcessor = (r) => {
  Sf = r;
};
var io = sr;
sr.default = sr;
let Da = {};
var xf = function(e) {
  Da[e] || (Da[e] = !0, typeof console < "u" && console.warn && console.warn(e));
};
let vs = class {
  constructor(e, t = {}) {
    if (this.type = "warning", this.text = e, t.node && t.node.source) {
      let i = t.node.rangeBy(t);
      this.line = i.start.line, this.column = i.start.column, this.endLine = i.end.line, this.endColumn = i.end.column;
    }
    for (let i in t) this[i] = t[i];
  }
  toString() {
    return this.node ? this.node.error(this.text, {
      index: this.index,
      plugin: this.plugin,
      word: this.word
    }).message : this.plugin ? this.plugin + ": " + this.text : this.text;
  }
};
var Cf = vs;
vs.default = vs;
let Dy = Cf, Ss = class {
  constructor(e, t, i) {
    this.processor = e, this.messages = [], this.root = t, this.opts = i, this.css = void 0, this.map = void 0;
  }
  toString() {
    return this.css;
  }
  warn(e, t = {}) {
    t.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (t.plugin = this.lastPlugin.postcssPlugin);
    let i = new Dy(e, t);
    return this.messages.push(i), i;
  }
  warnings() {
    return this.messages.filter((e) => e.type === "warning");
  }
  get content() {
    return this.css;
  }
};
var no = Ss;
Ss.default = Ss;
const xn = 39, La = 34, Wr = 92, Fa = 47, Zr = 10, Dt = 32, Gr = 12, Hr = 9, Vr = 13, Ly = 91, Fy = 93, zy = 40, Uy = 41, By = 123, jy = 125, Wy = 59, Zy = 42, Gy = 58, Hy = 64, Yr = /[\t\n\f\r "#'()/;[\\\]{}]/g, Jr = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g, Vy = /.[\r\n"'(/\\]/, za = /[\da-f]/i;
var Yy = function(e, t = {}) {
  let i = e.css.valueOf(), n = t.ignoreErrors, s, o, a, l, u, f, d, h, c, p, g = i.length, m = 0, b = [], _ = [];
  function y() {
    return m;
  }
  function w(I) {
    throw e.error("Unclosed " + I, m);
  }
  function S() {
    return _.length === 0 && m >= g;
  }
  function E(I) {
    if (_.length) return _.pop();
    if (m >= g) return;
    let A = I ? I.ignoreUnclosed : !1;
    switch (s = i.charCodeAt(m), s) {
      case Zr:
      case Dt:
      case Hr:
      case Vr:
      case Gr: {
        o = m;
        do
          o += 1, s = i.charCodeAt(o);
        while (s === Dt || s === Zr || s === Hr || s === Vr || s === Gr);
        p = ["space", i.slice(m, o)], m = o - 1;
        break;
      }
      case Ly:
      case Fy:
      case By:
      case jy:
      case Gy:
      case Wy:
      case Uy: {
        let C = String.fromCharCode(s);
        p = [C, C, m];
        break;
      }
      case zy: {
        if (h = b.length ? b.pop()[1] : "", c = i.charCodeAt(m + 1), h === "url" && c !== xn && c !== La && c !== Dt && c !== Zr && c !== Hr && c !== Gr && c !== Vr) {
          o = m;
          do {
            if (f = !1, o = i.indexOf(")", o + 1), o === -1)
              if (n || A) {
                o = m;
                break;
              } else
                w("bracket");
            for (d = o; i.charCodeAt(d - 1) === Wr; )
              d -= 1, f = !f;
          } while (f);
          p = ["brackets", i.slice(m, o + 1), m, o], m = o;
        } else
          o = i.indexOf(")", m + 1), l = i.slice(m, o + 1), o === -1 || Vy.test(l) ? p = ["(", "(", m] : (p = ["brackets", l, m, o], m = o);
        break;
      }
      case xn:
      case La: {
        a = s === xn ? "'" : '"', o = m;
        do {
          if (f = !1, o = i.indexOf(a, o + 1), o === -1)
            if (n || A) {
              o = m + 1;
              break;
            } else
              w("string");
          for (d = o; i.charCodeAt(d - 1) === Wr; )
            d -= 1, f = !f;
        } while (f);
        p = ["string", i.slice(m, o + 1), m, o], m = o;
        break;
      }
      case Hy: {
        Yr.lastIndex = m + 1, Yr.test(i), Yr.lastIndex === 0 ? o = i.length - 1 : o = Yr.lastIndex - 2, p = ["at-word", i.slice(m, o + 1), m, o], m = o;
        break;
      }
      case Wr: {
        for (o = m, u = !0; i.charCodeAt(o + 1) === Wr; )
          o += 1, u = !u;
        if (s = i.charCodeAt(o + 1), u && s !== Fa && s !== Dt && s !== Zr && s !== Hr && s !== Vr && s !== Gr && (o += 1, za.test(i.charAt(o)))) {
          for (; za.test(i.charAt(o + 1)); )
            o += 1;
          i.charCodeAt(o + 1) === Dt && (o += 1);
        }
        p = ["word", i.slice(m, o + 1), m, o], m = o;
        break;
      }
      default: {
        s === Fa && i.charCodeAt(m + 1) === Zy ? (o = i.indexOf("*/", m + 2) + 1, o === 0 && (n || A ? o = i.length : w("comment")), p = ["comment", i.slice(m, o + 1), m, o], m = o) : (Jr.lastIndex = m + 1, Jr.test(i), Jr.lastIndex === 0 ? o = i.length - 1 : o = Jr.lastIndex - 2, p = ["word", i.slice(m, o + 1), m, o], b.push(p), m = o);
        break;
      }
    }
    return m++, p;
  }
  function x(I) {
    _.push(I);
  }
  return {
    back: x,
    endOfFile: S,
    nextToken: E,
    position: y
  };
};
let If = it, Si = class extends If {
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
var so = Si;
Si.default = Si;
If.registerAtRule(Si);
let Af = it, Ef, Of, Ct = class extends Af {
  constructor(e) {
    super(e), this.type = "root", this.nodes || (this.nodes = []);
  }
  normalize(e, t, i) {
    let n = super.normalize(e);
    if (t) {
      if (i === "prepend")
        this.nodes.length > 1 ? t.raws.before = this.nodes[1].raws.before : delete t.raws.before;
      else if (this.first !== t)
        for (let s of n)
          s.raws.before = t.raws.before;
    }
    return n;
  }
  removeChild(e, t) {
    let i = this.index(e);
    return !t && i === 0 && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[i].raws.before), super.removeChild(e);
  }
  toResult(e = {}) {
    return new Ef(new Of(), this, e).stringify();
  }
};
Ct.registerLazyResult = (r) => {
  Ef = r;
};
Ct.registerProcessor = (r) => {
  Of = r;
};
var wr = Ct;
Ct.default = Ct;
Af.registerRoot(Ct);
let or = {
  comma(r) {
    return or.split(r, [","], !0);
  },
  space(r) {
    let e = [" ", `
`, "	"];
    return or.split(r, e);
  },
  split(r, e, t) {
    let i = [], n = "", s = !1, o = 0, a = !1, l = "", u = !1;
    for (let f of r)
      u ? u = !1 : f === "\\" ? u = !0 : a ? f === l && (a = !1) : f === '"' || f === "'" ? (a = !0, l = f) : f === "(" ? o += 1 : f === ")" ? o > 0 && (o -= 1) : o === 0 && e.includes(f) && (s = !0), s ? (n !== "" && i.push(n.trim()), n = "", s = !1) : n += f;
    return (t || n !== "") && i.push(n.trim()), i;
  }
};
var Rf = or;
or.default = or;
let kf = it, Jy = Rf, xi = class extends kf {
  constructor(e) {
    super(e), this.type = "rule", this.nodes || (this.nodes = []);
  }
  get selectors() {
    return Jy.comma(this.selector);
  }
  set selectors(e) {
    let t = this.selector ? this.selector.match(/,\s*/) : null, i = t ? t[0] : "," + this.raw("between", "beforeOpen");
    this.selector = e.join(i);
  }
};
var oo = xi;
xi.default = xi;
kf.registerRule(xi);
let Xy = Ui, Ky = Yy, qy = ji, Qy = so, ew = wr, Ua = oo;
const Ba = {
  empty: !0,
  space: !0
};
function tw(r) {
  for (let e = r.length - 1; e >= 0; e--) {
    let t = r[e], i = t[3] || t[2];
    if (i) return i;
  }
}
let rw = class {
  constructor(e) {
    this.input = e, this.root = new ew(), this.current = this.root, this.spaces = "", this.semicolon = !1, this.createTokenizer(), this.root.source = { input: e, start: { column: 1, line: 1, offset: 0 } };
  }
  atrule(e) {
    let t = new Qy();
    t.name = e[1].slice(1), t.name === "" && this.unnamedAtrule(t, e), this.init(t, e[2]);
    let i, n, s, o = !1, a = !1, l = [], u = [];
    for (; !this.tokenizer.endOfFile(); ) {
      if (e = this.tokenizer.nextToken(), i = e[0], i === "(" || i === "[" ? u.push(i === "(" ? ")" : "]") : i === "{" && u.length > 0 ? u.push("}") : i === u[u.length - 1] && u.pop(), u.length === 0)
        if (i === ";") {
          t.source.end = this.getPosition(e[2]), t.source.end.offset++, this.semicolon = !0;
          break;
        } else if (i === "{") {
          a = !0;
          break;
        } else if (i === "}") {
          if (l.length > 0) {
            for (s = l.length - 1, n = l[s]; n && n[0] === "space"; )
              n = l[--s];
            n && (t.source.end = this.getPosition(n[3] || n[2]), t.source.end.offset++);
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
    let i = 0, n;
    for (let s = t - 1; s >= 0 && (n = e[s], !(n[0] !== "space" && (i += 1, i === 2))); s--)
      ;
    throw this.input.error(
      "Missed semicolon",
      n[0] === "word" ? n[3] + 1 : n[2]
    );
  }
  colon(e) {
    let t = 0, i, n, s;
    for (let [o, a] of e.entries()) {
      if (i = a, n = i[0], n === "(" && (t += 1), n === ")" && (t -= 1), t === 0 && n === ":")
        if (!s)
          this.doubleColon(i);
        else {
          if (s[0] === "word" && s[1] === "progid")
            continue;
          return o;
        }
      s = i;
    }
    return !1;
  }
  comment(e) {
    let t = new qy();
    this.init(t, e[2]), t.source.end = this.getPosition(e[3] || e[2]), t.source.end.offset++;
    let i = e[1].slice(2, -2);
    if (/^\s*$/.test(i))
      t.text = "", t.raws.left = i, t.raws.right = "";
    else {
      let n = i.match(/^(\s*)([^]*\S)(\s*)$/);
      t.text = n[2], t.raws.left = n[1], t.raws.right = n[3];
    }
  }
  createTokenizer() {
    this.tokenizer = Ky(this.input);
  }
  decl(e, t) {
    let i = new Xy();
    this.init(i, e[0][2]);
    let n = e[e.length - 1];
    for (n[0] === ";" && (this.semicolon = !0, e.pop()), i.source.end = this.getPosition(
      n[3] || n[2] || tw(e)
    ), i.source.end.offset++; e[0][0] !== "word"; )
      e.length === 1 && this.unknownWord(e), i.raws.before += e.shift()[1];
    for (i.source.start = this.getPosition(e[0][2]), i.prop = ""; e.length; ) {
      let u = e[0][0];
      if (u === ":" || u === "space" || u === "comment")
        break;
      i.prop += e.shift()[1];
    }
    i.raws.between = "";
    let s;
    for (; e.length; )
      if (s = e.shift(), s[0] === ":") {
        i.raws.between += s[1];
        break;
      } else
        s[0] === "word" && /\w/.test(s[1]) && this.unknownWord([s]), i.raws.between += s[1];
    (i.prop[0] === "_" || i.prop[0] === "*") && (i.raws.before += i.prop[0], i.prop = i.prop.slice(1));
    let o = [], a;
    for (; e.length && (a = e[0][0], !(a !== "space" && a !== "comment")); )
      o.push(e.shift());
    this.precheckMissedSemicolon(e);
    for (let u = e.length - 1; u >= 0; u--) {
      if (s = e[u], s[1].toLowerCase() === "!important") {
        i.important = !0;
        let f = this.stringFrom(e, u);
        f = this.spacesFromEnd(e) + f, f !== " !important" && (i.raws.important = f);
        break;
      } else if (s[1].toLowerCase() === "important") {
        let f = e.slice(0), d = "";
        for (let h = u; h > 0; h--) {
          let c = f[h][0];
          if (d.trim().indexOf("!") === 0 && c !== "space")
            break;
          d = f.pop()[1] + d;
        }
        d.trim().indexOf("!") === 0 && (i.important = !0, i.raws.important = d, e = f);
      }
      if (s[0] !== "space" && s[0] !== "comment")
        break;
    }
    e.some((u) => u[0] !== "space" && u[0] !== "comment") && (i.raws.between += o.map((u) => u[1]).join(""), o = []), this.raw(i, "value", o.concat(e), t), i.value.includes(":") && !t && this.checkMissedSemicolon(e);
  }
  doubleColon(e) {
    throw this.input.error(
      "Double colon",
      { offset: e[2] },
      { offset: e[2] + e[1].length }
    );
  }
  emptyRule(e) {
    let t = new Ua();
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
    let t = !1, i = null, n = !1, s = null, o = [], a = e[1].startsWith("--"), l = [], u = e;
    for (; u; ) {
      if (i = u[0], l.push(u), i === "(" || i === "[")
        s || (s = u), o.push(i === "(" ? ")" : "]");
      else if (a && n && i === "{")
        s || (s = u), o.push("}");
      else if (o.length === 0)
        if (i === ";")
          if (n) {
            this.decl(l, a);
            return;
          } else
            break;
        else if (i === "{") {
          this.rule(l);
          return;
        } else if (i === "}") {
          this.tokenizer.back(l.pop()), t = !0;
          break;
        } else i === ":" && (n = !0);
      else i === o[o.length - 1] && (o.pop(), o.length === 0 && (s = null));
      u = this.tokenizer.nextToken();
    }
    if (this.tokenizer.endOfFile() && (t = !0), o.length > 0 && this.unclosedBracket(s), t && n) {
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
  raw(e, t, i, n) {
    let s, o, a = i.length, l = "", u = !0, f, d;
    for (let h = 0; h < a; h += 1)
      s = i[h], o = s[0], o === "space" && h === a - 1 && !n ? u = !1 : o === "comment" ? (d = i[h - 1] ? i[h - 1][0] : "empty", f = i[h + 1] ? i[h + 1][0] : "empty", !Ba[d] && !Ba[f] ? l.slice(-1) === "," ? u = !1 : l += s[1] : u = !1) : l += s[1];
    if (!u) {
      let h = i.reduce((c, p) => c + p[1], "");
      e.raws[t] = { raw: h, value: l };
    }
    e[t] = l;
  }
  rule(e) {
    e.pop();
    let t = new Ua();
    this.init(t, e[0][2]), t.raws.between = this.spacesAndCommentsFromEnd(e), this.raw(t, "selector", e), this.current = t;
  }
  spacesAndCommentsFromEnd(e) {
    let t, i = "";
    for (; e.length && (t = e[e.length - 1][0], !(t !== "space" && t !== "comment")); )
      i = e.pop()[1] + i;
    return i;
  }
  // Errors
  spacesAndCommentsFromStart(e) {
    let t, i = "";
    for (; e.length && (t = e[0][0], !(t !== "space" && t !== "comment")); )
      i += e.shift()[1];
    return i;
  }
  spacesFromEnd(e) {
    let t, i = "";
    for (; e.length && (t = e[e.length - 1][0], t === "space"); )
      i = e.pop()[1] + i;
    return i;
  }
  stringFrom(e, t) {
    let i = "";
    for (let n = t; n < e.length; n++)
      i += e[n][1];
    return e.splice(t, e.length - t), i;
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
var iw = rw;
let nw = it, sw = iw, ow = Bi;
function Ci(r, e) {
  let t = new ow(r, e), i = new sw(t);
  try {
    i.parse();
  } catch (n) {
    throw process.env.NODE_ENV !== "production" && n.name === "CssSyntaxError" && e && e.from && (/\.scss$/i.test(e.from) ? n.message += `
You tried to parse SCSS with the standard CSS parser; try again with the postcss-scss parser` : /\.sass/i.test(e.from) ? n.message += `
You tried to parse Sass with the standard CSS parser; try again with the postcss-sass parser` : /\.less$/i.test(e.from) && (n.message += `
You tried to parse Less with the standard CSS parser; try again with the postcss-less parser`)), n;
  }
  return i.root;
}
var ao = Ci;
Ci.default = Ci;
nw.registerParse(Ci);
let { isClean: Ce, my: aw } = yr, lw = cf, uw = Fi, fw = it, cw = io, hw = xf, ja = no, dw = ao, pw = wr;
const mw = {
  atrule: "AtRule",
  comment: "Comment",
  decl: "Declaration",
  document: "Document",
  root: "Root",
  rule: "Rule"
}, gw = {
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
}, yw = {
  Once: !0,
  postcssPlugin: !0,
  prepare: !0
}, It = 0;
function Lt(r) {
  return typeof r == "object" && typeof r.then == "function";
}
function $f(r) {
  let e = !1, t = mw[r.type];
  return r.type === "decl" ? e = r.prop.toLowerCase() : r.type === "atrule" && (e = r.name.toLowerCase()), e && r.append ? [
    t,
    t + "-" + e,
    It,
    t + "Exit",
    t + "Exit-" + e
  ] : e ? [t, t + "-" + e, t + "Exit", t + "Exit-" + e] : r.append ? [t, It, t + "Exit"] : [t, t + "Exit"];
}
function Wa(r) {
  let e;
  return r.type === "document" ? e = ["Document", It, "DocumentExit"] : r.type === "root" ? e = ["Root", It, "RootExit"] : e = $f(r), {
    eventIndex: 0,
    events: e,
    iterator: 0,
    node: r,
    visitorIndex: 0,
    visitors: []
  };
}
function xs(r) {
  return r[Ce] = !1, r.nodes && r.nodes.forEach((e) => xs(e)), r;
}
let Cs = {}, At = class Mf {
  constructor(e, t, i) {
    this.stringified = !1, this.processed = !1;
    let n;
    if (typeof t == "object" && t !== null && (t.type === "root" || t.type === "document"))
      n = xs(t);
    else if (t instanceof Mf || t instanceof ja)
      n = xs(t.root), t.map && (typeof i.map > "u" && (i.map = {}), i.map.inline || (i.map.inline = !1), i.map.prev = t.map);
    else {
      let s = dw;
      i.syntax && (s = i.syntax.parse), i.parser && (s = i.parser), s.parse && (s = s.parse);
      try {
        n = s(t, i);
      } catch (o) {
        this.processed = !0, this.error = o;
      }
      n && !n[aw] && fw.rebuild(n);
    }
    this.result = new ja(e, n, i), this.helpers = { ...Cs, postcss: Cs, result: this.result }, this.plugins = this.processor.plugins.map((s) => typeof s == "object" && s.prepare ? { ...s, ...s.prepare(this.result) } : s);
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
    let i = this.result.lastPlugin;
    try {
      if (t && t.addToError(e), this.error = e, e.name === "CssSyntaxError" && !e.plugin)
        e.plugin = i.postcssPlugin, e.setMessage();
      else if (i.postcssVersion && process.env.NODE_ENV !== "production") {
        let n = i.postcssPlugin, s = i.postcssVersion, o = this.result.processor.version, a = s.split("."), l = o.split(".");
        (a[0] !== l[0] || parseInt(a[1]) > parseInt(l[1])) && console.error(
          "Unknown error from PostCSS plugin. Your current PostCSS version is " + o + ", but " + n + " uses " + s + ". Perhaps this is the source of the error below."
        );
      }
    } catch (n) {
      console && console.error && console.error(n);
    }
    return e;
  }
  prepareVisitors() {
    this.listeners = {};
    let e = (t, i, n) => {
      this.listeners[i] || (this.listeners[i] = []), this.listeners[i].push([t, n]);
    };
    for (let t of this.plugins)
      if (typeof t == "object")
        for (let i in t) {
          if (!gw[i] && /^[A-Z]/.test(i))
            throw new Error(
              `Unknown event ${i} in ${t.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`
            );
          if (!yw[i])
            if (typeof t[i] == "object")
              for (let n in t[i])
                n === "*" ? e(t, i, t[i][n]) : e(
                  t,
                  i + "-" + n.toLowerCase(),
                  t[i][n]
                );
            else typeof t[i] == "function" && e(t, i, t[i]);
        }
    this.hasListener = Object.keys(this.listeners).length > 0;
  }
  async runAsync() {
    this.plugin = 0;
    for (let e = 0; e < this.plugins.length; e++) {
      let t = this.plugins[e], i = this.runOnRoot(t);
      if (Lt(i))
        try {
          await i;
        } catch (n) {
          throw this.handleError(n);
        }
    }
    if (this.prepareVisitors(), this.hasListener) {
      let e = this.result.root;
      for (; !e[Ce]; ) {
        e[Ce] = !0;
        let t = [Wa(e)];
        for (; t.length > 0; ) {
          let i = this.visitTick(t);
          if (Lt(i))
            try {
              await i;
            } catch (n) {
              let s = t[t.length - 1].node;
              throw this.handleError(n, s);
            }
        }
      }
      if (this.listeners.OnceExit)
        for (let [t, i] of this.listeners.OnceExit) {
          this.result.lastPlugin = t;
          try {
            if (e.type === "document") {
              let n = e.nodes.map(
                (s) => i(s, this.helpers)
              );
              await Promise.all(n);
            } else
              await i(e, this.helpers);
          } catch (n) {
            throw this.handleError(n);
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
            (i) => e.Once(i, this.helpers)
          );
          return Lt(t[0]) ? Promise.all(t) : t;
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
    let e = this.result.opts, t = uw;
    e.syntax && (t = e.syntax.stringify), e.stringifier && (t = e.stringifier), t.stringify && (t = t.stringify);
    let n = new lw(t, this.result.root, this.result.opts).generate();
    return this.result.css = n[0], this.result.map = n[1], this.result;
  }
  sync() {
    if (this.error) throw this.error;
    if (this.processed) return this.result;
    if (this.processed = !0, this.processing)
      throw this.getAsyncError();
    for (let e of this.plugins) {
      let t = this.runOnRoot(e);
      if (Lt(t))
        throw this.getAsyncError();
    }
    if (this.prepareVisitors(), this.hasListener) {
      let e = this.result.root;
      for (; !e[Ce]; )
        e[Ce] = !0, this.walkSync(e);
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
    return process.env.NODE_ENV !== "production" && ("from" in this.opts || hw(
      "Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning."
    )), this.async().then(e, t);
  }
  toString() {
    return this.css;
  }
  visitSync(e, t) {
    for (let [i, n] of e) {
      this.result.lastPlugin = i;
      let s;
      try {
        s = n(t, this.helpers);
      } catch (o) {
        throw this.handleError(o, t.proxyOf);
      }
      if (t.type !== "root" && t.type !== "document" && !t.parent)
        return !0;
      if (Lt(s))
        throw this.getAsyncError();
    }
  }
  visitTick(e) {
    let t = e[e.length - 1], { node: i, visitors: n } = t;
    if (i.type !== "root" && i.type !== "document" && !i.parent) {
      e.pop();
      return;
    }
    if (n.length > 0 && t.visitorIndex < n.length) {
      let [o, a] = n[t.visitorIndex];
      t.visitorIndex += 1, t.visitorIndex === n.length && (t.visitors = [], t.visitorIndex = 0), this.result.lastPlugin = o;
      try {
        return a(i.toProxy(), this.helpers);
      } catch (l) {
        throw this.handleError(l, i);
      }
    }
    if (t.iterator !== 0) {
      let o = t.iterator, a;
      for (; a = i.nodes[i.indexes[o]]; )
        if (i.indexes[o] += 1, !a[Ce]) {
          a[Ce] = !0, e.push(Wa(a));
          return;
        }
      t.iterator = 0, delete i.indexes[o];
    }
    let s = t.events;
    for (; t.eventIndex < s.length; ) {
      let o = s[t.eventIndex];
      if (t.eventIndex += 1, o === It) {
        i.nodes && i.nodes.length && (i[Ce] = !0, t.iterator = i.getIterator());
        return;
      } else if (this.listeners[o]) {
        t.visitors = this.listeners[o];
        return;
      }
    }
    e.pop();
  }
  walkSync(e) {
    e[Ce] = !0;
    let t = $f(e);
    for (let i of t)
      if (i === It)
        e.nodes && e.each((n) => {
          n[Ce] || this.walkSync(n);
        });
      else {
        let n = this.listeners[i];
        if (n && this.visitSync(n, e.toProxy()))
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
At.registerPostcss = (r) => {
  Cs = r;
};
var Nf = At;
At.default = At;
pw.registerLazyResult(At);
cw.registerLazyResult(At);
let ww = cf, bw = Fi, _w = xf, vw = ao;
const Sw = no;
let Is = class {
  constructor(e, t, i) {
    t = t.toString(), this.stringified = !1, this._processor = e, this._css = t, this._opts = i, this._map = void 0;
    let n, s = bw;
    this.result = new Sw(this._processor, n, this._opts), this.result.css = t;
    let o = this;
    Object.defineProperty(this.result, "root", {
      get() {
        return o.root;
      }
    });
    let a = new ww(s, n, this._opts, t);
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
    return process.env.NODE_ENV !== "production" && ("from" in this._opts || _w(
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
    let e, t = vw;
    try {
      e = t(this._css, this._opts);
    } catch (i) {
      this.error = i;
    }
    if (this.error)
      throw this.error;
    return this._root = e, e;
  }
  get [Symbol.toStringTag]() {
    return "NoWorkResult";
  }
};
var xw = Is;
Is.default = Is;
let Cw = xw, Iw = Nf, Aw = io, Ew = wr, ar = class {
  constructor(e = []) {
    this.version = "8.4.38", this.plugins = this.normalize(e);
  }
  normalize(e) {
    let t = [];
    for (let i of e)
      if (i.postcss === !0 ? i = i() : i.postcss && (i = i.postcss), typeof i == "object" && Array.isArray(i.plugins))
        t = t.concat(i.plugins);
      else if (typeof i == "object" && i.postcssPlugin)
        t.push(i);
      else if (typeof i == "function")
        t.push(i);
      else if (typeof i == "object" && (i.parse || i.stringify)) {
        if (process.env.NODE_ENV !== "production")
          throw new Error(
            "PostCSS syntaxes cannot be used as plugins. Instead, please use one of the syntax/parser/stringifier options as outlined in your PostCSS runner documentation."
          );
      } else
        throw new Error(i + " is not a PostCSS plugin");
    return t;
  }
  process(e, t = {}) {
    return !this.plugins.length && !t.parser && !t.stringifier && !t.syntax ? new Cw(this, e, t) : new Iw(this, e, t);
  }
  use(e) {
    return this.plugins = this.plugins.concat(this.normalize([e])), this;
  }
};
var Ow = ar;
ar.default = ar;
Ew.registerProcessor(ar);
Aw.registerProcessor(ar);
let Rw = Ui, kw = of, $w = ji, Mw = so, Nw = Bi, Pw = wr, Tw = oo;
function lr(r, e) {
  if (Array.isArray(r)) return r.map((n) => lr(n));
  let { inputs: t, ...i } = r;
  if (t) {
    e = [];
    for (let n of t) {
      let s = { ...n, __proto__: Nw.prototype };
      s.map && (s.map = {
        ...s.map,
        __proto__: kw.prototype
      }), e.push(s);
    }
  }
  if (i.nodes && (i.nodes = r.nodes.map((n) => lr(n, e))), i.source) {
    let { inputId: n, ...s } = i.source;
    i.source = s, n != null && (i.source.input = e[n]);
  }
  if (i.type === "root")
    return new Pw(i);
  if (i.type === "decl")
    return new Rw(i);
  if (i.type === "rule")
    return new Tw(i);
  if (i.type === "comment")
    return new $w(i);
  if (i.type === "atrule")
    return new Mw(i);
  throw new Error("Unknown node type: " + r.type);
}
var Dw = lr;
lr.default = lr;
let Lw = eo, Pf = Ui, Fw = Nf, zw = it, lo = Ow, Uw = Fi, Bw = Dw, Tf = io, jw = Cf, Df = ji, Lf = so, Ww = no, Zw = Bi, Gw = ao, Hw = Rf, Ff = oo, zf = wr, Vw = zi;
function z(...r) {
  return r.length === 1 && Array.isArray(r[0]) && (r = r[0]), new lo(r);
}
z.plugin = function(e, t) {
  let i = !1;
  function n(...o) {
    console && console.warn && !i && (i = !0, console.warn(
      e + `: postcss.plugin was deprecated. Migration guide:
https://evilmartians.com/chronicles/postcss-8-plugin-migration`
    ), process.env.LANG && process.env.LANG.startsWith("cn") && console.warn(
      e + `: 里面 postcss.plugin 被弃用. 迁移指南:
https://www.w3ctech.com/topic/2226`
    ));
    let a = t(...o);
    return a.postcssPlugin = e, a.postcssVersion = new lo().version, a;
  }
  let s;
  return Object.defineProperty(n, "postcss", {
    get() {
      return s || (s = n()), s;
    }
  }), n.process = function(o, a, l) {
    return z([n(l)]).process(o, a);
  }, n;
};
z.stringify = Uw;
z.parse = Gw;
z.fromJSON = Bw;
z.list = Hw;
z.comment = (r) => new Df(r);
z.atRule = (r) => new Lf(r);
z.decl = (r) => new Pf(r);
z.rule = (r) => new Ff(r);
z.root = (r) => new zf(r);
z.document = (r) => new Tf(r);
z.CssSyntaxError = Lw;
z.Declaration = Pf;
z.Container = zw;
z.Processor = lo;
z.Document = Tf;
z.Comment = Df;
z.Warning = jw;
z.AtRule = Lf;
z.Result = Ww;
z.Input = Zw;
z.Rule = Ff;
z.Root = zf;
z.Node = Vw;
Fw.registerPostcss(z);
var Yw = z;
z.default = z;
const H = /* @__PURE__ */ ny(Yw);
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
class uo {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  constructor(...e) {
    ce(this, "parentElement", null), ce(this, "parentNode", null), ce(this, "ownerDocument"), ce(this, "firstChild", null), ce(this, "lastChild", null), ce(this, "previousSibling", null), ce(this, "nextSibling", null), ce(this, "ELEMENT_NODE", 1), ce(this, "TEXT_NODE", 3), ce(this, "nodeType"), ce(this, "nodeName"), ce(this, "RRNodeType");
  }
  get childNodes() {
    const e = [];
    let t = this.firstChild;
    for (; t; )
      e.push(t), t = t.nextSibling;
    return e;
  }
  contains(e) {
    if (e instanceof uo) {
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
const Za = {
  Node: ["childNodes", "parentNode", "parentElement", "textContent"],
  ShadowRoot: ["host", "styleSheets"],
  Element: ["shadowRoot", "querySelector", "querySelectorAll"],
  MutationObserver: []
}, Ga = {
  Node: ["contains", "getRootNode"],
  ShadowRoot: ["getSelection"],
  Element: [],
  MutationObserver: ["constructor"]
}, Xr = {}, Jw = () => !!globalThis.Zone;
function fo(r) {
  if (Xr[r])
    return Xr[r];
  const e = globalThis[r], t = e.prototype, i = r in Za ? Za[r] : void 0, n = !!(i && // @ts-expect-error 2345
  i.every(
    (a) => {
      var l, u;
      return !!((u = (l = Object.getOwnPropertyDescriptor(t, a)) == null ? void 0 : l.get) != null && u.toString().includes("[native code]"));
    }
  )), s = r in Ga ? Ga[r] : void 0, o = !!(s && s.every(
    // @ts-expect-error 2345
    (a) => {
      var l;
      return typeof t[a] == "function" && ((l = t[a]) == null ? void 0 : l.toString().includes("[native code]"));
    }
  ));
  if (n && o && !Jw())
    return Xr[r] = e.prototype, e.prototype;
  try {
    const a = document.createElement("iframe");
    document.body.appendChild(a);
    const l = a.contentWindow;
    if (!l) return e.prototype;
    const u = l[r].prototype;
    return document.body.removeChild(a), u ? Xr[r] = u : t;
  } catch {
    return t;
  }
}
const Cn = {};
function Be(r, e, t) {
  var i;
  const n = `${r}.${String(t)}`;
  if (Cn[n])
    return Cn[n].call(
      e
    );
  const s = fo(r), o = (i = Object.getOwnPropertyDescriptor(
    s,
    t
  )) == null ? void 0 : i.get;
  return o ? (Cn[n] = o, o.call(e)) : e[t];
}
const In = {};
function Uf(r, e, t) {
  const i = `${r}.${String(t)}`;
  if (In[i])
    return In[i].bind(
      e
    );
  const s = fo(r)[t];
  return typeof s != "function" ? e[t] : (In[i] = s, s.bind(e));
}
function Xw(r) {
  return Be("Node", r, "childNodes");
}
function Kw(r) {
  return Be("Node", r, "parentNode");
}
function qw(r) {
  return Be("Node", r, "parentElement");
}
function Qw(r) {
  return Be("Node", r, "textContent");
}
function eb(r, e) {
  return Uf("Node", r, "contains")(e);
}
function tb(r) {
  return Uf("Node", r, "getRootNode")();
}
function rb(r) {
  return !r || !("host" in r) ? null : Be("ShadowRoot", r, "host");
}
function ib(r) {
  return r.styleSheets;
}
function nb(r) {
  return !r || !("shadowRoot" in r) ? null : Be("Element", r, "shadowRoot");
}
function sb(r, e) {
  return Be("Element", r, "querySelector")(e);
}
function ob(r, e) {
  return Be("Element", r, "querySelectorAll")(e);
}
function Bf() {
  return fo("MutationObserver").constructor;
}
const k = {
  childNodes: Xw,
  parentNode: Kw,
  parentElement: qw,
  textContent: Qw,
  contains: eb,
  getRootNode: tb,
  host: rb,
  styleSheets: ib,
  shadowRoot: nb,
  querySelector: sb,
  querySelectorAll: ob,
  mutationObserver: Bf
};
function ie(r, e, t = document) {
  const i = { capture: !0, passive: !0 };
  return t.addEventListener(r, e, i), () => t.removeEventListener(r, e, i);
}
const ut = `Please stop import mirror directly. Instead of that,\r
now you can use replayer.getMirror() to access the mirror instance of a replayer,\r
or you can use record.mirror to access the mirror instance during recording.`;
let Ha = {
  map: {},
  getId() {
    return console.error(ut), -1;
  },
  getNode() {
    return console.error(ut), null;
  },
  removeNodeFromMap() {
    console.error(ut);
  },
  has() {
    return console.error(ut), !1;
  },
  reset() {
    console.error(ut);
  }
};
typeof window < "u" && window.Proxy && window.Reflect && (Ha = new Proxy(Ha, {
  get(r, e, t) {
    return e === "map" && console.error(ut), Reflect.get(r, e, t);
  }
}));
function ur(r, e, t = {}) {
  let i = null, n = 0;
  return function(...s) {
    const o = Date.now();
    !n && t.leading === !1 && (n = o);
    const a = e - (o - n), l = this;
    a <= 0 || a > e ? (i && (clearTimeout(i), i = null), n = o, r.apply(l, s)) : !i && t.trailing !== !1 && (i = setTimeout(() => {
      n = t.leading === !1 ? 0 : Date.now(), i = null, r.apply(l, s);
    }, a));
  };
}
function Wi(r, e, t, i, n = window) {
  const s = n.Object.getOwnPropertyDescriptor(r, e);
  return n.Object.defineProperty(
    r,
    e,
    i ? t : {
      set(o) {
        setTimeout(() => {
          t.set.call(this, o);
        }, 0), s && s.set && s.set.call(this, o);
      }
    }
  ), () => Wi(r, e, s || {}, !0);
}
function Mt(r, e, t) {
  try {
    if (!(e in r))
      return () => {
      };
    const i = r[e], n = t(i);
    return typeof n == "function" && (n.prototype = n.prototype || {}, Object.defineProperties(n, {
      __rrweb_original__: {
        enumerable: !1,
        value: i
      }
    })), r[e] = n, () => {
      r[e] = i;
    };
  } catch {
    return () => {
    };
  }
}
let Ii = Date.now;
/* @__PURE__ */ /[1-9][0-9]{12}/.test(Date.now().toString()) || (Ii = () => (/* @__PURE__ */ new Date()).getTime());
function jf(r) {
  var e, t, i, n;
  const s = r.document;
  return {
    left: s.scrollingElement ? s.scrollingElement.scrollLeft : r.pageXOffset !== void 0 ? r.pageXOffset : s.documentElement.scrollLeft || (s == null ? void 0 : s.body) && ((e = k.parentElement(s.body)) == null ? void 0 : e.scrollLeft) || ((t = s == null ? void 0 : s.body) == null ? void 0 : t.scrollLeft) || 0,
    top: s.scrollingElement ? s.scrollingElement.scrollTop : r.pageYOffset !== void 0 ? r.pageYOffset : (s == null ? void 0 : s.documentElement.scrollTop) || (s == null ? void 0 : s.body) && ((i = k.parentElement(s.body)) == null ? void 0 : i.scrollTop) || ((n = s == null ? void 0 : s.body) == null ? void 0 : n.scrollTop) || 0
  };
}
function Wf() {
  return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight;
}
function Zf() {
  return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth;
}
function Gf(r) {
  return r ? r.nodeType === r.ELEMENT_NODE ? r : k.parentElement(r) : null;
}
function ne(r, e, t, i) {
  if (!r)
    return !1;
  const n = Gf(r);
  if (!n)
    return !1;
  try {
    if (typeof e == "string") {
      if (n.classList.contains(e) || i && n.closest("." + e) !== null) return !0;
    } else if (gi(n, e, i)) return !0;
  } catch {
  }
  return !!(t && (n.matches(t) || i && n.closest(t) !== null));
}
function ab(r, e) {
  return e.getId(r) !== -1;
}
function An(r, e, t) {
  return r.tagName === "TITLE" && t.headTitleMutations ? !0 : e.getId(r) === er;
}
function Hf(r, e) {
  if (Wt(r))
    return !1;
  const t = e.getId(r);
  if (!e.has(t))
    return !0;
  const i = k.parentNode(r);
  return i && i.nodeType === r.DOCUMENT_NODE ? !1 : i ? Hf(i, e) : !0;
}
function As(r) {
  return !!r.changedTouches;
}
function lb(r = window) {
  "NodeList" in r && !r.NodeList.prototype.forEach && (r.NodeList.prototype.forEach = Array.prototype.forEach), "DOMTokenList" in r && !r.DOMTokenList.prototype.forEach && (r.DOMTokenList.prototype.forEach = Array.prototype.forEach);
}
function Vf(r, e) {
  return !!(r.nodeName === "IFRAME" && e.getMeta(r));
}
function Yf(r, e) {
  return !!(r.nodeName === "LINK" && r.nodeType === r.ELEMENT_NODE && r.getAttribute && r.getAttribute("rel") === "stylesheet" && e.getMeta(r));
}
function Es(r) {
  return r ? r instanceof uo && "shadowRoot" in r ? !!r.shadowRoot : !!k.shadowRoot(r) : !1;
}
class ub {
  constructor() {
    v(this, "id", 1), v(this, "styleIDMap", /* @__PURE__ */ new WeakMap()), v(this, "idStyleMap", /* @__PURE__ */ new Map());
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
    let i;
    return t === void 0 ? i = this.id++ : i = t, this.styleIDMap.set(e, i), this.idStyleMap.set(i, e), i;
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
function Jf(r) {
  var e;
  let t = null;
  return "getRootNode" in r && ((e = k.getRootNode(r)) == null ? void 0 : e.nodeType) === Node.DOCUMENT_FRAGMENT_NODE && k.host(k.getRootNode(r)) && (t = k.host(k.getRootNode(r))), t;
}
function fb(r) {
  let e = r, t;
  for (; t = Jf(e); )
    e = t;
  return e;
}
function cb(r) {
  const e = r.ownerDocument;
  if (!e) return !1;
  const t = fb(r);
  return k.contains(e, t);
}
function Xf(r) {
  const e = r.ownerDocument;
  return e ? k.contains(e, r) || cb(r) : !1;
}
var T = /* @__PURE__ */ ((r) => (r[r.DomContentLoaded = 0] = "DomContentLoaded", r[r.Load = 1] = "Load", r[r.FullSnapshot = 2] = "FullSnapshot", r[r.IncrementalSnapshot = 3] = "IncrementalSnapshot", r[r.Meta = 4] = "Meta", r[r.Custom = 5] = "Custom", r[r.Plugin = 6] = "Plugin", r))(T || {}), M = /* @__PURE__ */ ((r) => (r[r.Mutation = 0] = "Mutation", r[r.MouseMove = 1] = "MouseMove", r[r.MouseInteraction = 2] = "MouseInteraction", r[r.Scroll = 3] = "Scroll", r[r.ViewportResize = 4] = "ViewportResize", r[r.Input = 5] = "Input", r[r.TouchMove = 6] = "TouchMove", r[r.MediaInteraction = 7] = "MediaInteraction", r[r.StyleSheetRule = 8] = "StyleSheetRule", r[r.CanvasMutation = 9] = "CanvasMutation", r[r.Font = 10] = "Font", r[r.Log = 11] = "Log", r[r.Drag = 12] = "Drag", r[r.StyleDeclaration = 13] = "StyleDeclaration", r[r.Selection = 14] = "Selection", r[r.AdoptedStyleSheet = 15] = "AdoptedStyleSheet", r[r.CustomElement = 16] = "CustomElement", r))(M || {}), oe = /* @__PURE__ */ ((r) => (r[r.MouseUp = 0] = "MouseUp", r[r.MouseDown = 1] = "MouseDown", r[r.Click = 2] = "Click", r[r.ContextMenu = 3] = "ContextMenu", r[r.DblClick = 4] = "DblClick", r[r.Focus = 5] = "Focus", r[r.Blur = 6] = "Blur", r[r.TouchStart = 7] = "TouchStart", r[r.TouchMove_Departed = 8] = "TouchMove_Departed", r[r.TouchEnd = 9] = "TouchEnd", r[r.TouchCancel = 10] = "TouchCancel", r))(oe || {}), Re = /* @__PURE__ */ ((r) => (r[r.Mouse = 0] = "Mouse", r[r.Pen = 1] = "Pen", r[r.Touch = 2] = "Touch", r))(Re || {}), Et = /* @__PURE__ */ ((r) => (r[r["2D"] = 0] = "2D", r[r.WebGL = 1] = "WebGL", r[r.WebGL2 = 2] = "WebGL2", r))(Et || {}), ft = /* @__PURE__ */ ((r) => (r[r.Play = 0] = "Play", r[r.Pause = 1] = "Pause", r[r.Seeked = 2] = "Seeked", r[r.VolumeChange = 3] = "VolumeChange", r[r.RateChange = 4] = "RateChange", r))(ft || {}), Kf = /* @__PURE__ */ ((r) => (r[r.Document = 0] = "Document", r[r.DocumentType = 1] = "DocumentType", r[r.Element = 2] = "Element", r[r.Text = 3] = "Text", r[r.CDATA = 4] = "CDATA", r[r.Comment = 5] = "Comment", r))(Kf || {});
function Va(r) {
  return "__ln" in r;
}
class hb {
  constructor() {
    v(this, "length", 0), v(this, "head", null), v(this, "tail", null);
  }
  get(e) {
    if (e >= this.length)
      throw new Error("Position outside of list range");
    let t = this.head;
    for (let i = 0; i < e; i++)
      t = (t == null ? void 0 : t.next) || null;
    return t;
  }
  addNode(e) {
    const t = {
      value: e,
      previous: null,
      next: null
    };
    if (e.__ln = t, e.previousSibling && Va(e.previousSibling)) {
      const i = e.previousSibling.__ln.next;
      t.next = i, t.previous = e.previousSibling.__ln, e.previousSibling.__ln.next = t, i && (i.previous = t);
    } else if (e.nextSibling && Va(e.nextSibling) && e.nextSibling.__ln.previous) {
      const i = e.nextSibling.__ln.previous;
      t.previous = i, t.next = e.nextSibling.__ln, e.nextSibling.__ln.previous = t, i && (i.next = t);
    } else
      this.head && (this.head.previous = t), t.next = this.head, this.head = t;
    t.next === null && (this.tail = t), this.length++;
  }
  removeNode(e) {
    const t = e.__ln;
    this.head && (t.previous ? (t.previous.next = t.next, t.next ? t.next.previous = t.previous : this.tail = t.previous) : (this.head = t.next, this.head ? this.head.previous = null : this.tail = null), e.__ln && delete e.__ln, this.length--);
  }
}
const Ya = (r, e) => `${r}@${e}`;
class db {
  constructor() {
    v(this, "frozen", !1), v(this, "locked", !1), v(this, "texts", []), v(this, "attributes", []), v(this, "attributeMap", /* @__PURE__ */ new WeakMap()), v(this, "removes", []), v(this, "mapRemoves", []), v(this, "movedMap", {}), v(this, "addedSet", /* @__PURE__ */ new Set()), v(this, "movedSet", /* @__PURE__ */ new Set()), v(this, "droppedSet", /* @__PURE__ */ new Set()), v(this, "removesSubTreeCache", /* @__PURE__ */ new Set()), v(this, "mutationCb"), v(this, "blockClass"), v(this, "blockSelector"), v(this, "maskTextClass"), v(this, "maskTextSelector"), v(this, "inlineStylesheet"), v(this, "maskInputOptions"), v(this, "maskTextFn"), v(this, "maskInputFn"), v(this, "keepIframeSrcFn"), v(this, "recordCanvas"), v(this, "inlineImages"), v(this, "slimDOMOptions"), v(this, "dataURLOptions"), v(this, "doc"), v(this, "mirror"), v(this, "iframeManager"), v(this, "stylesheetManager"), v(this, "shadowDomManager"), v(this, "canvasManager"), v(this, "processedNodeManager"), v(this, "unattachedDoc"), v(this, "processMutations", (e) => {
      e.forEach(this.processMutation), this.emit();
    }), v(this, "emit", () => {
      if (this.frozen || this.locked)
        return;
      const e = [], t = /* @__PURE__ */ new Set(), i = new hb(), n = (l) => {
        let u = l, f = er;
        for (; f === er; )
          u = u && u.nextSibling, f = u && this.mirror.getId(u);
        return f;
      }, s = (l) => {
        const u = k.parentNode(l);
        if (!u || !Xf(l))
          return;
        let f = !1;
        if (l.nodeType === Node.TEXT_NODE) {
          const p = u.tagName;
          if (p === "TEXTAREA")
            return;
          p === "STYLE" && this.addedSet.has(u) && (f = !0);
        }
        const d = Wt(u) ? this.mirror.getId(Jf(l)) : this.mirror.getId(u), h = n(l);
        if (d === -1 || h === -1)
          return i.addNode(l);
        const c = dt(l, {
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
            Vf(p, this.mirror) && this.iframeManager.addIframe(p), Yf(p, this.mirror) && this.stylesheetManager.trackLinkElement(
              p
            ), Es(l) && this.shadowDomManager.addShadowRoot(k.shadowRoot(l), this.doc);
          },
          onIframeLoad: (p, g) => {
            this.iframeManager.attachIframe(p, g), this.shadowDomManager.observeAttachShadow(p);
          },
          onStylesheetLoad: (p, g) => {
            this.stylesheetManager.attachLinkElement(p, g);
          },
          cssCaptured: f
        });
        c && (e.push({
          parentId: d,
          nextId: h,
          node: c
        }), t.add(c.id));
      };
      for (; this.mapRemoves.length; )
        this.mirror.removeNodeFromMap(this.mapRemoves.shift());
      for (const l of this.movedSet)
        Ja(this.removesSubTreeCache, l, this.mirror) && !this.movedSet.has(k.parentNode(l)) || s(l);
      for (const l of this.addedSet)
        !Xa(this.droppedSet, l) && !Ja(this.removesSubTreeCache, l, this.mirror) || Xa(this.movedSet, l) ? s(l) : this.droppedSet.add(l);
      let o = null;
      for (; i.length; ) {
        let l = null;
        if (o) {
          const u = this.mirror.getId(k.parentNode(o.value)), f = n(o.value);
          u !== -1 && f !== -1 && (l = o);
        }
        if (!l) {
          let u = i.tail;
          for (; u; ) {
            const f = u;
            if (u = u.previous, f) {
              const d = this.mirror.getId(k.parentNode(f.value));
              if (n(f.value) === -1) continue;
              if (d !== -1) {
                l = f;
                break;
              } else {
                const c = f.value, p = k.parentNode(c);
                if (p && p.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                  const g = k.host(p);
                  if (this.mirror.getId(g) !== -1) {
                    l = f;
                    break;
                  }
                }
              }
            }
          }
        }
        if (!l) {
          for (; i.head; )
            i.removeNode(i.head.value);
          break;
        }
        o = l.previous, i.removeNode(l.value), s(l.value);
      }
      const a = {
        texts: this.texts.map((l) => {
          const u = l.node, f = k.parentNode(u);
          return f && f.tagName === "TEXTAREA" && this.genTextAreaValueMutation(f), {
            id: this.mirror.getId(u),
            value: l.value
          };
        }).filter((l) => !t.has(l.id)).filter((l) => this.mirror.has(l.id)),
        attributes: this.attributes.map((l) => {
          const { attributes: u } = l;
          if (typeof u.style == "string") {
            const f = JSON.stringify(l.styleDiff), d = JSON.stringify(l._unchangedStyles);
            f.length < u.style.length && (f + d).split("var(").length === u.style.split("var(").length && (u.style = l.styleDiff);
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
    }), v(this, "genTextAreaValueMutation", (e) => {
      let t = this.attributeMap.get(e);
      t || (t = {
        node: e,
        attributes: {},
        styleDiff: {},
        _unchangedStyles: {}
      }, this.attributes.push(t), this.attributeMap.set(e, t)), t.attributes.value = Array.from(
        k.childNodes(e),
        (i) => k.textContent(i) || ""
      ).join("");
    }), v(this, "processMutation", (e) => {
      if (!An(e.target, this.mirror, this.slimDOMOptions))
        switch (e.type) {
          case "characterData": {
            const t = k.textContent(e.target);
            !ne(e.target, this.blockClass, this.blockSelector, !1) && t !== e.oldValue && this.texts.push({
              value: wu(
                e.target,
                this.maskTextClass,
                this.maskTextSelector,
                !0
                // checkAncestors
              ) && t ? this.maskTextFn ? this.maskTextFn(t, Gf(e.target)) : t.replace(/[\S]/g, "*") : t,
              node: e.target
            });
            break;
          }
          case "attributes": {
            const t = e.target;
            let i = e.attributeName, n = e.target.getAttribute(i);
            if (i === "value") {
              const o = Bs(t);
              n = Us({
                element: t,
                maskInputOptions: this.maskInputOptions,
                tagName: t.tagName,
                type: o,
                value: n,
                maskInputFn: this.maskInputFn
              });
            }
            if (ne(e.target, this.blockClass, this.blockSelector, !1) || n === e.oldValue)
              return;
            let s = this.attributeMap.get(e.target);
            if (t.tagName === "IFRAME" && i === "src" && !this.keepIframeSrcFn(n))
              if (!t.contentDocument)
                i = "rr_src";
              else
                return;
            if (s || (s = {
              node: e.target,
              attributes: {},
              styleDiff: {},
              _unchangedStyles: {}
            }, this.attributes.push(s), this.attributeMap.set(e.target, s)), i === "type" && t.tagName === "INPUT" && (e.oldValue || "").toLowerCase() === "password" && t.setAttribute("data-rr-is-password", "true"), !yu(t.tagName, i))
              if (s.attributes[i] = gu(
                this.doc,
                Qe(t.tagName),
                Qe(i),
                n
              ), i === "style") {
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
              } else i === "open" && t.tagName === "DIALOG" && (t.matches("dialog:modal") ? s.attributes.rr_open_mode = "modal" : s.attributes.rr_open_mode = "non-modal");
            break;
          }
          case "childList": {
            if (ne(e.target, this.blockClass, this.blockSelector, !0))
              return;
            if (e.target.tagName === "TEXTAREA") {
              this.genTextAreaValueMutation(e.target);
              return;
            }
            e.addedNodes.forEach((t) => this.genAdds(t, e.target)), e.removedNodes.forEach((t) => {
              const i = this.mirror.getId(t), n = Wt(e.target) ? this.mirror.getId(k.host(e.target)) : this.mirror.getId(e.target);
              ne(e.target, this.blockClass, this.blockSelector, !1) || An(t, this.mirror, this.slimDOMOptions) || !ab(t, this.mirror) || (this.addedSet.has(t) ? (Os(this.addedSet, t), this.droppedSet.add(t)) : this.addedSet.has(e.target) && i === -1 || Hf(e.target, this.mirror) || (this.movedSet.has(t) && this.movedMap[Ya(i, n)] ? Os(this.movedSet, t) : (this.removes.push({
                parentId: n,
                id: i,
                isShadow: Wt(e.target) && Zt(e.target) ? !0 : void 0
              }), pb(t, this.removesSubTreeCache))), this.mapRemoves.push(t));
            });
            break;
          }
        }
    }), v(this, "genAdds", (e, t) => {
      if (!this.processedNodeManager.inOtherBuffer(e, this) && !(this.addedSet.has(e) || this.movedSet.has(e))) {
        if (this.mirror.hasNode(e)) {
          if (An(e, this.mirror, this.slimDOMOptions))
            return;
          this.movedSet.add(e);
          let i = null;
          t && this.mirror.hasNode(t) && (i = this.mirror.getId(t)), i && i !== -1 && (this.movedMap[Ya(this.mirror.getId(e), i)] = !0);
        } else
          this.addedSet.add(e), this.droppedSet.delete(e);
        ne(e, this.blockClass, this.blockSelector, !1) || (k.childNodes(e).forEach((i) => this.genAdds(i)), Es(e) && k.childNodes(k.shadowRoot(e)).forEach((i) => {
          this.processedNodeManager.add(i, this), this.genAdds(i, e);
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
function Os(r, e) {
  r.delete(e), k.childNodes(e).forEach((t) => Os(r, t));
}
function pb(r, e) {
  const t = [r];
  for (; t.length; ) {
    const i = t.pop();
    e.has(i) || (e.add(i), k.childNodes(i).forEach((n) => t.push(n)));
  }
}
function Ja(r, e, t) {
  return r.size === 0 ? !1 : mb(r, e);
}
function mb(r, e, t) {
  const i = k.parentNode(e);
  return i ? r.has(i) : !1;
}
function Xa(r, e) {
  return r.size === 0 ? !1 : qf(r, e);
}
function qf(r, e) {
  const t = k.parentNode(e);
  return t ? r.has(t) ? !0 : qf(r, t) : !1;
}
let Gt;
function gb(r) {
  Gt = r;
}
function yb() {
  Gt = void 0;
}
const P = (r) => Gt ? (...t) => {
  try {
    return r(...t);
  } catch (i) {
    if (Gt && Gt(i) === !0)
      return;
    throw i;
  }
} : r, Ye = [];
function br(r) {
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
function Qf(r, e) {
  const t = new db();
  Ye.push(t), t.init(r);
  const i = new (Bf())(
    P(t.processMutations.bind(t))
  );
  return i.observe(e, {
    attributes: !0,
    attributeOldValue: !0,
    characterData: !0,
    characterDataOldValue: !0,
    childList: !0,
    subtree: !0
  }), i;
}
function wb({
  mousemoveCb: r,
  sampling: e,
  doc: t,
  mirror: i
}) {
  if (e.mousemove === !1)
    return () => {
    };
  const n = typeof e.mousemove == "number" ? e.mousemove : 50, s = typeof e.mousemoveCallback == "number" ? e.mousemoveCallback : 500;
  let o = [], a;
  const l = ur(
    P(
      (d) => {
        const h = Date.now() - a;
        r(
          o.map((c) => (c.timeOffset -= h, c)),
          d
        ), o = [], a = null;
      }
    ),
    s
  ), u = P(
    ur(
      P((d) => {
        const h = br(d), { clientX: c, clientY: p } = As(d) ? d.changedTouches[0] : d;
        a || (a = Ii()), o.push({
          x: c,
          y: p,
          id: i.getId(h),
          timeOffset: Ii() - a
        }), l(
          typeof DragEvent < "u" && d instanceof DragEvent ? M.Drag : d instanceof MouseEvent ? M.MouseMove : M.TouchMove
        );
      }),
      n,
      {
        trailing: !1
      }
    )
  ), f = [
    ie("mousemove", u, t),
    ie("touchmove", u, t),
    ie("drag", u, t)
  ];
  return P(() => {
    f.forEach((d) => d());
  });
}
function bb({
  mouseInteractionCb: r,
  doc: e,
  mirror: t,
  blockClass: i,
  blockSelector: n,
  sampling: s
}) {
  if (s.mouseInteraction === !1)
    return () => {
    };
  const o = s.mouseInteraction === !0 || s.mouseInteraction === void 0 ? {} : s.mouseInteraction, a = [];
  let l = null;
  const u = (f) => (d) => {
    const h = br(d);
    if (ne(h, i, n, !0))
      return;
    let c = null, p = f;
    if ("pointerType" in d) {
      switch (d.pointerType) {
        case "mouse":
          c = Re.Mouse;
          break;
        case "touch":
          c = Re.Touch;
          break;
        case "pen":
          c = Re.Pen;
          break;
      }
      c === Re.Touch ? oe[f] === oe.MouseDown ? p = "TouchStart" : oe[f] === oe.MouseUp && (p = "TouchEnd") : Re.Pen;
    } else As(d) && (c = Re.Touch);
    c !== null ? (l = c, (p.startsWith("Touch") && c === Re.Touch || p.startsWith("Mouse") && c === Re.Mouse) && (c = null)) : oe[f] === oe.Click && (c = l, l = null);
    const g = As(d) ? d.changedTouches[0] : d;
    if (!g)
      return;
    const m = t.getId(h), { clientX: b, clientY: _ } = g;
    P(r)({
      type: oe[p],
      id: m,
      x: b,
      y: _,
      ...c !== null && { pointerType: c }
    });
  };
  return Object.keys(oe).filter(
    (f) => Number.isNaN(Number(f)) && !f.endsWith("_Departed") && o[f] !== !1
  ).forEach((f) => {
    let d = Qe(f);
    const h = u(f);
    if (window.PointerEvent)
      switch (oe[f]) {
        case oe.MouseDown:
        case oe.MouseUp:
          d = d.replace(
            "mouse",
            "pointer"
          );
          break;
        case oe.TouchStart:
        case oe.TouchEnd:
          return;
      }
    a.push(ie(d, h, e));
  }), P(() => {
    a.forEach((f) => f());
  });
}
function ec({
  scrollCb: r,
  doc: e,
  mirror: t,
  blockClass: i,
  blockSelector: n,
  sampling: s
}) {
  const o = P(
    ur(
      P((a) => {
        const l = br(a);
        if (!l || ne(l, i, n, !0))
          return;
        const u = t.getId(l);
        if (l === e && e.defaultView) {
          const f = jf(e.defaultView);
          r({
            id: u,
            x: f.left,
            y: f.top
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
  return ie("scroll", o, e);
}
function _b({ viewportResizeCb: r }, { win: e }) {
  let t = -1, i = -1;
  const n = P(
    ur(
      P(() => {
        const s = Wf(), o = Zf();
        (t !== s || i !== o) && (r({
          width: Number(o),
          height: Number(s)
        }), t = s, i = o);
      }),
      200
    )
  );
  return ie("resize", n, e);
}
const vb = ["INPUT", "TEXTAREA", "SELECT"], Ka = /* @__PURE__ */ new WeakMap();
function Sb({
  inputCb: r,
  doc: e,
  mirror: t,
  blockClass: i,
  blockSelector: n,
  ignoreClass: s,
  ignoreSelector: o,
  maskInputOptions: a,
  maskInputFn: l,
  sampling: u,
  userTriggeredOnInput: f
}) {
  function d(_) {
    let y = br(_);
    const w = _.isTrusted, S = y && y.tagName;
    if (y && S === "OPTION" && (y = k.parentElement(y)), !y || !S || vb.indexOf(S) < 0 || ne(y, i, n, !0) || y.classList.contains(s) || o && y.matches(o))
      return;
    let E = y.value, x = !1;
    const I = Bs(y) || "";
    I === "radio" || I === "checkbox" ? x = y.checked : (a[S.toLowerCase()] || a[I]) && (E = Us({
      element: y,
      maskInputOptions: a,
      tagName: S,
      type: I,
      value: E,
      maskInputFn: l
    })), h(
      y,
      f ? { text: E, isChecked: x, userTriggered: w } : { text: E, isChecked: x }
    );
    const A = y.name;
    I === "radio" && A && x && e.querySelectorAll(`input[type="radio"][name="${A}"]`).forEach((C) => {
      if (C !== y) {
        const O = C.value;
        h(
          C,
          f ? { text: O, isChecked: !x, userTriggered: !1 } : { text: O, isChecked: !x }
        );
      }
    });
  }
  function h(_, y) {
    const w = Ka.get(_);
    if (!w || w.text !== y.text || w.isChecked !== y.isChecked) {
      Ka.set(_, y);
      const S = t.getId(_);
      P(r)({
        ...y,
        id: S
      });
    }
  }
  const p = (u.input === "last" ? ["change"] : ["input", "change"]).map(
    (_) => ie(_, P(d), e)
  ), g = e.defaultView;
  if (!g)
    return () => {
      p.forEach((_) => _());
    };
  const m = g.Object.getOwnPropertyDescriptor(
    g.HTMLInputElement.prototype,
    "value"
  ), b = [
    [g.HTMLInputElement.prototype, "value"],
    [g.HTMLInputElement.prototype, "checked"],
    [g.HTMLSelectElement.prototype, "value"],
    [g.HTMLTextAreaElement.prototype, "value"],
    // Some UI library use selectedIndex to set select value
    [g.HTMLSelectElement.prototype, "selectedIndex"],
    [g.HTMLOptionElement.prototype, "selected"]
  ];
  return m && m.set && p.push(
    ...b.map(
      (_) => Wi(
        _[0],
        _[1],
        {
          set() {
            P(d)({
              target: this,
              isTrusted: !1
              // userTriggered to false as this could well be programmatic
            });
          }
        },
        !1,
        g
      )
    )
  ), P(() => {
    p.forEach((_) => _());
  });
}
function Ai(r) {
  const e = [];
  function t(i, n) {
    if (Kr("CSSGroupingRule") && i.parentRule instanceof CSSGroupingRule || Kr("CSSMediaRule") && i.parentRule instanceof CSSMediaRule || Kr("CSSSupportsRule") && i.parentRule instanceof CSSSupportsRule || Kr("CSSConditionRule") && i.parentRule instanceof CSSConditionRule) {
      const o = Array.from(
        i.parentRule.cssRules
      ).indexOf(i);
      n.unshift(o);
    } else if (i.parentStyleSheet) {
      const o = Array.from(i.parentStyleSheet.cssRules).indexOf(i);
      n.unshift(o);
    }
    return n;
  }
  return t(r, e);
}
function Pe(r, e, t) {
  let i, n;
  return r ? (r.ownerNode ? i = e.getId(r.ownerNode) : n = t.getId(r), {
    styleId: n,
    id: i
  }) : {};
}
function xb({ styleSheetRuleCb: r, mirror: e, stylesheetManager: t }, { win: i }) {
  if (!i.CSSStyleSheet || !i.CSSStyleSheet.prototype)
    return () => {
    };
  const n = i.CSSStyleSheet.prototype.insertRule;
  i.CSSStyleSheet.prototype.insertRule = new Proxy(n, {
    apply: P(
      (f, d, h) => {
        const [c, p] = h, { id: g, styleId: m } = Pe(
          d,
          e,
          t.styleMirror
        );
        return (g && g !== -1 || m && m !== -1) && r({
          id: g,
          styleId: m,
          adds: [{ rule: c, index: p }]
        }), f.apply(d, h);
      }
    )
  }), i.CSSStyleSheet.prototype.addRule = function(f, d, h = this.cssRules.length) {
    const c = `${f} { ${d} }`;
    return i.CSSStyleSheet.prototype.insertRule.apply(this, [c, h]);
  };
  const s = i.CSSStyleSheet.prototype.deleteRule;
  i.CSSStyleSheet.prototype.deleteRule = new Proxy(s, {
    apply: P(
      (f, d, h) => {
        const [c] = h, { id: p, styleId: g } = Pe(
          d,
          e,
          t.styleMirror
        );
        return (p && p !== -1 || g && g !== -1) && r({
          id: p,
          styleId: g,
          removes: [{ index: c }]
        }), f.apply(d, h);
      }
    )
  }), i.CSSStyleSheet.prototype.removeRule = function(f) {
    return i.CSSStyleSheet.prototype.deleteRule.apply(this, [f]);
  };
  let o;
  i.CSSStyleSheet.prototype.replace && (o = i.CSSStyleSheet.prototype.replace, i.CSSStyleSheet.prototype.replace = new Proxy(o, {
    apply: P(
      (f, d, h) => {
        const [c] = h, { id: p, styleId: g } = Pe(
          d,
          e,
          t.styleMirror
        );
        return (p && p !== -1 || g && g !== -1) && r({
          id: p,
          styleId: g,
          replace: c
        }), f.apply(d, h);
      }
    )
  }));
  let a;
  i.CSSStyleSheet.prototype.replaceSync && (a = i.CSSStyleSheet.prototype.replaceSync, i.CSSStyleSheet.prototype.replaceSync = new Proxy(a, {
    apply: P(
      (f, d, h) => {
        const [c] = h, { id: p, styleId: g } = Pe(
          d,
          e,
          t.styleMirror
        );
        return (p && p !== -1 || g && g !== -1) && r({
          id: p,
          styleId: g,
          replaceSync: c
        }), f.apply(d, h);
      }
    )
  }));
  const l = {};
  qr("CSSGroupingRule") ? l.CSSGroupingRule = i.CSSGroupingRule : (qr("CSSMediaRule") && (l.CSSMediaRule = i.CSSMediaRule), qr("CSSConditionRule") && (l.CSSConditionRule = i.CSSConditionRule), qr("CSSSupportsRule") && (l.CSSSupportsRule = i.CSSSupportsRule));
  const u = {};
  return Object.entries(l).forEach(([f, d]) => {
    u[f] = {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      insertRule: d.prototype.insertRule,
      // eslint-disable-next-line @typescript-eslint/unbound-method
      deleteRule: d.prototype.deleteRule
    }, d.prototype.insertRule = new Proxy(
      u[f].insertRule,
      {
        apply: P(
          (h, c, p) => {
            const [g, m] = p, { id: b, styleId: _ } = Pe(
              c.parentStyleSheet,
              e,
              t.styleMirror
            );
            return (b && b !== -1 || _ && _ !== -1) && r({
              id: b,
              styleId: _,
              adds: [
                {
                  rule: g,
                  index: [
                    ...Ai(c),
                    m || 0
                    // defaults to 0
                  ]
                }
              ]
            }), h.apply(c, p);
          }
        )
      }
    ), d.prototype.deleteRule = new Proxy(
      u[f].deleteRule,
      {
        apply: P(
          (h, c, p) => {
            const [g] = p, { id: m, styleId: b } = Pe(
              c.parentStyleSheet,
              e,
              t.styleMirror
            );
            return (m && m !== -1 || b && b !== -1) && r({
              id: m,
              styleId: b,
              removes: [
                { index: [...Ai(c), g] }
              ]
            }), h.apply(c, p);
          }
        )
      }
    );
  }), P(() => {
    i.CSSStyleSheet.prototype.insertRule = n, i.CSSStyleSheet.prototype.deleteRule = s, o && (i.CSSStyleSheet.prototype.replace = o), a && (i.CSSStyleSheet.prototype.replaceSync = a), Object.entries(l).forEach(([f, d]) => {
      d.prototype.insertRule = u[f].insertRule, d.prototype.deleteRule = u[f].deleteRule;
    });
  });
}
function tc({
  mirror: r,
  stylesheetManager: e
}, t) {
  var i, n, s;
  let o = null;
  t.nodeName === "#document" ? o = r.getId(t) : o = r.getId(k.host(t));
  const a = t.nodeName === "#document" ? (i = t.defaultView) == null ? void 0 : i.Document : (s = (n = t.ownerDocument) == null ? void 0 : n.defaultView) == null ? void 0 : s.ShadowRoot, l = a != null && a.prototype ? Object.getOwnPropertyDescriptor(
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
      var f;
      const d = (f = l.set) == null ? void 0 : f.call(this, u);
      if (o !== null && o !== -1)
        try {
          e.adoptStyleSheets(u, o);
        } catch {
        }
      return d;
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
function Cb({
  styleDeclarationCb: r,
  mirror: e,
  ignoreCSSAttributes: t,
  stylesheetManager: i
}, { win: n }) {
  const s = n.CSSStyleDeclaration.prototype.setProperty;
  n.CSSStyleDeclaration.prototype.setProperty = new Proxy(s, {
    apply: P(
      (a, l, u) => {
        var f;
        const [d, h, c] = u;
        if (t.has(d))
          return s.apply(l, [d, h, c]);
        const { id: p, styleId: g } = Pe(
          (f = l.parentRule) == null ? void 0 : f.parentStyleSheet,
          e,
          i.styleMirror
        );
        return (p && p !== -1 || g && g !== -1) && r({
          id: p,
          styleId: g,
          set: {
            property: d,
            value: h,
            priority: c
          },
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          index: Ai(l.parentRule)
        }), a.apply(l, u);
      }
    )
  });
  const o = n.CSSStyleDeclaration.prototype.removeProperty;
  return n.CSSStyleDeclaration.prototype.removeProperty = new Proxy(o, {
    apply: P(
      (a, l, u) => {
        var f;
        const [d] = u;
        if (t.has(d))
          return o.apply(l, [d]);
        const { id: h, styleId: c } = Pe(
          (f = l.parentRule) == null ? void 0 : f.parentStyleSheet,
          e,
          i.styleMirror
        );
        return (h && h !== -1 || c && c !== -1) && r({
          id: h,
          styleId: c,
          remove: {
            property: d
          },
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          index: Ai(l.parentRule)
        }), a.apply(l, u);
      }
    )
  }), P(() => {
    n.CSSStyleDeclaration.prototype.setProperty = s, n.CSSStyleDeclaration.prototype.removeProperty = o;
  });
}
function Ib({
  mediaInteractionCb: r,
  blockClass: e,
  blockSelector: t,
  mirror: i,
  sampling: n,
  doc: s
}) {
  const o = P(
    (l) => ur(
      P((u) => {
        const f = br(u);
        if (!f || ne(f, e, t, !0))
          return;
        const { currentTime: d, volume: h, muted: c, playbackRate: p, loop: g } = f;
        r({
          type: l,
          id: i.getId(f),
          currentTime: d,
          volume: h,
          muted: c,
          playbackRate: p,
          loop: g
        });
      }),
      n.media || 500
    )
  ), a = [
    ie("play", o(ft.Play), s),
    ie("pause", o(ft.Pause), s),
    ie("seeked", o(ft.Seeked), s),
    ie("volumechange", o(ft.VolumeChange), s),
    ie("ratechange", o(ft.RateChange), s)
  ];
  return P(() => {
    a.forEach((l) => l());
  });
}
function Ab({ fontCb: r, doc: e }) {
  const t = e.defaultView;
  if (!t)
    return () => {
    };
  const i = [], n = /* @__PURE__ */ new WeakMap(), s = t.FontFace;
  t.FontFace = function(l, u, f) {
    const d = new s(l, u, f);
    return n.set(d, {
      family: l,
      buffer: typeof u != "string",
      descriptors: f,
      fontSource: typeof u == "string" ? u : JSON.stringify(Array.from(new Uint8Array(u)))
    }), d;
  };
  const o = Mt(
    e.fonts,
    "add",
    function(a) {
      return function(l) {
        return setTimeout(
          P(() => {
            const u = n.get(l);
            u && (r(u), n.delete(l));
          }),
          0
        ), a.apply(this, [l]);
      };
    }
  );
  return i.push(() => {
    t.FontFace = s;
  }), i.push(o), P(() => {
    i.forEach((a) => a());
  });
}
function Eb(r) {
  const { doc: e, mirror: t, blockClass: i, blockSelector: n, selectionCb: s } = r;
  let o = !0;
  const a = P(() => {
    const l = e.getSelection();
    if (!l || o && (l != null && l.isCollapsed)) return;
    o = l.isCollapsed || !1;
    const u = [], f = l.rangeCount || 0;
    for (let d = 0; d < f; d++) {
      const h = l.getRangeAt(d), { startContainer: c, startOffset: p, endContainer: g, endOffset: m } = h;
      ne(c, i, n, !0) || ne(g, i, n, !0) || u.push({
        start: t.getId(c),
        startOffset: p,
        end: t.getId(g),
        endOffset: m
      });
    }
    s({ ranges: u });
  });
  return a(), ie("selectionchange", a);
}
function Ob({
  doc: r,
  customElementCb: e
}) {
  const t = r.defaultView;
  return !t || !t.customElements ? () => {
  } : Mt(
    t.customElements,
    "define",
    function(n) {
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
        return n.apply(this, [s, o, a]);
      };
    }
  );
}
function Rb(r, e) {
  const {
    mutationCb: t,
    mousemoveCb: i,
    mouseInteractionCb: n,
    scrollCb: s,
    viewportResizeCb: o,
    inputCb: a,
    mediaInteractionCb: l,
    styleSheetRuleCb: u,
    styleDeclarationCb: f,
    canvasMutationCb: d,
    fontCb: h,
    selectionCb: c,
    customElementCb: p
  } = r;
  r.mutationCb = (...g) => {
    e.mutation && e.mutation(...g), t(...g);
  }, r.mousemoveCb = (...g) => {
    e.mousemove && e.mousemove(...g), i(...g);
  }, r.mouseInteractionCb = (...g) => {
    e.mouseInteraction && e.mouseInteraction(...g), n(...g);
  }, r.scrollCb = (...g) => {
    e.scroll && e.scroll(...g), s(...g);
  }, r.viewportResizeCb = (...g) => {
    e.viewportResize && e.viewportResize(...g), o(...g);
  }, r.inputCb = (...g) => {
    e.input && e.input(...g), a(...g);
  }, r.mediaInteractionCb = (...g) => {
    e.mediaInteaction && e.mediaInteaction(...g), l(...g);
  }, r.styleSheetRuleCb = (...g) => {
    e.styleSheetRule && e.styleSheetRule(...g), u(...g);
  }, r.styleDeclarationCb = (...g) => {
    e.styleDeclaration && e.styleDeclaration(...g), f(...g);
  }, r.canvasMutationCb = (...g) => {
    e.canvasMutation && e.canvasMutation(...g), d(...g);
  }, r.fontCb = (...g) => {
    e.font && e.font(...g), h(...g);
  }, r.selectionCb = (...g) => {
    e.selection && e.selection(...g), c(...g);
  }, r.customElementCb = (...g) => {
    e.customElement && e.customElement(...g), p(...g);
  };
}
function kb(r, e = {}) {
  const t = r.doc.defaultView;
  if (!t)
    return () => {
    };
  Rb(r, e);
  let i;
  r.recordDOM && (i = Qf(r, r.doc));
  const n = wb(r), s = bb(r), o = ec(r), a = _b(r, {
    win: t
  }), l = Sb(r), u = Ib(r);
  let f = () => {
  }, d = () => {
  }, h = () => {
  }, c = () => {
  };
  r.recordDOM && (f = xb(r, { win: t }), d = tc(r, r.doc), h = Cb(r, {
    win: t
  }), r.collectFonts && (c = Ab(r)));
  const p = Eb(r), g = Ob(r), m = [];
  for (const b of r.plugins)
    m.push(
      b.observer(b.callback, t, b.options)
    );
  return P(() => {
    Ye.forEach((b) => b.reset()), i == null || i.disconnect(), n(), s(), o(), a(), l(), u(), f(), d(), h(), c(), p(), g(), m.forEach((b) => b());
  });
}
function Kr(r) {
  return typeof window[r] < "u";
}
function qr(r) {
  return !!(typeof window[r] < "u" && // Note: Generally, this check _shouldn't_ be necessary
  // However, in some scenarios (e.g. jsdom) this can sometimes fail, so we check for it here
  window[r].prototype && "insertRule" in window[r].prototype && "deleteRule" in window[r].prototype);
}
class qa {
  constructor(e) {
    v(this, "iframeIdToRemoteIdMap", /* @__PURE__ */ new WeakMap()), v(this, "iframeRemoteIdToIdMap", /* @__PURE__ */ new WeakMap()), this.generateIdFn = e;
  }
  getId(e, t, i, n) {
    const s = i || this.getIdToRemoteIdMap(e), o = n || this.getRemoteIdToIdMap(e);
    let a = s.get(t);
    return a || (a = this.generateIdFn(), s.set(t, a), o.set(a, t)), a;
  }
  getIds(e, t) {
    const i = this.getIdToRemoteIdMap(e), n = this.getRemoteIdToIdMap(e);
    return t.map(
      (s) => this.getId(e, s, i, n)
    );
  }
  getRemoteId(e, t, i) {
    const n = i || this.getRemoteIdToIdMap(e);
    if (typeof t != "number") return t;
    const s = n.get(t);
    return s || -1;
  }
  getRemoteIds(e, t) {
    const i = this.getRemoteIdToIdMap(e);
    return t.map((n) => this.getRemoteId(e, n, i));
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
class $b {
  constructor(e) {
    v(this, "iframes", /* @__PURE__ */ new WeakMap()), v(this, "crossOriginIframeMap", /* @__PURE__ */ new WeakMap()), v(this, "crossOriginIframeMirror", new qa(mu)), v(this, "crossOriginIframeStyleMirror"), v(this, "crossOriginIframeRootIdMap", /* @__PURE__ */ new WeakMap()), v(this, "mirror"), v(this, "mutationCb"), v(this, "wrappedEmit"), v(this, "loadListener"), v(this, "stylesheetManager"), v(this, "recordCrossOriginIframes"), this.mutationCb = e.mutationCb, this.wrappedEmit = e.wrappedEmit, this.stylesheetManager = e.stylesheetManager, this.recordCrossOriginIframes = e.recordCrossOriginIframes, this.crossOriginIframeStyleMirror = new qa(
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
    var i, n;
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
    }), this.recordCrossOriginIframes && ((i = e.contentWindow) == null || i.addEventListener(
      "message",
      this.handleMessage.bind(this)
    )), (n = this.loadListener) == null || n.call(this, e), e.contentDocument && e.contentDocument.adoptedStyleSheets && e.contentDocument.adoptedStyleSheets.length > 0 && this.stylesheetManager.adoptStyleSheets(
      e.contentDocument.adoptedStyleSheets,
      this.mirror.getId(e.contentDocument)
    );
  }
  handleMessage(e) {
    const t = e;
    if (t.data.type !== "rrweb" || // To filter out the rrweb messages which are forwarded by some sites.
    t.origin !== t.data.origin || !e.source) return;
    const n = this.crossOriginIframeMap.get(e.source);
    if (!n) return;
    const s = this.transformCrossOriginEvent(
      n,
      t.data.event
    );
    s && this.wrappedEmit(
      s,
      t.data.isCheckout
    );
  }
  transformCrossOriginEvent(e, t) {
    var i;
    switch (t.type) {
      case T.FullSnapshot: {
        this.crossOriginIframeMirror.reset(e), this.crossOriginIframeStyleMirror.reset(e), this.replaceIdOnNode(t.data.node, e);
        const n = t.data.node.id;
        return this.crossOriginIframeRootIdMap.set(e, n), this.patchRootIdOnNode(t.data.node, n), {
          timestamp: t.timestamp,
          type: T.IncrementalSnapshot,
          data: {
            source: M.Mutation,
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
      case T.Meta:
      case T.Load:
      case T.DomContentLoaded:
        return !1;
      case T.Plugin:
        return t;
      case T.Custom:
        return this.replaceIds(
          t.data.payload,
          e,
          ["id", "parentId", "previousId", "nextId"]
        ), t;
      case T.IncrementalSnapshot:
        switch (t.data.source) {
          case M.Mutation:
            return t.data.adds.forEach((n) => {
              this.replaceIds(n, e, [
                "parentId",
                "nextId",
                "previousId"
              ]), this.replaceIdOnNode(n.node, e);
              const s = this.crossOriginIframeRootIdMap.get(e);
              s && this.patchRootIdOnNode(n.node, s);
            }), t.data.removes.forEach((n) => {
              this.replaceIds(n, e, ["parentId", "id"]);
            }), t.data.attributes.forEach((n) => {
              this.replaceIds(n, e, ["id"]);
            }), t.data.texts.forEach((n) => {
              this.replaceIds(n, e, ["id"]);
            }), t;
          case M.Drag:
          case M.TouchMove:
          case M.MouseMove:
            return t.data.positions.forEach((n) => {
              this.replaceIds(n, e, ["id"]);
            }), t;
          case M.ViewportResize:
            return !1;
          case M.MediaInteraction:
          case M.MouseInteraction:
          case M.Scroll:
          case M.CanvasMutation:
          case M.Input:
            return this.replaceIds(t.data, e, ["id"]), t;
          case M.StyleSheetRule:
          case M.StyleDeclaration:
            return this.replaceIds(t.data, e, ["id"]), this.replaceStyleIds(t.data, e, ["styleId"]), t;
          case M.Font:
            return t;
          case M.Selection:
            return t.data.ranges.forEach((n) => {
              this.replaceIds(n, e, ["start", "end"]);
            }), t;
          case M.AdoptedStyleSheet:
            return this.replaceIds(t.data, e, ["id"]), this.replaceStyleIds(t.data, e, ["styleIds"]), (i = t.data.styles) == null || i.forEach((n) => {
              this.replaceStyleIds(n, e, ["styleId"]);
            }), t;
        }
    }
    return !1;
  }
  replace(e, t, i, n) {
    for (const s of n)
      !Array.isArray(t[s]) && typeof t[s] != "number" || (Array.isArray(t[s]) ? t[s] = e.getIds(
        i,
        t[s]
      ) : t[s] = e.getId(i, t[s]));
    return t;
  }
  replaceIds(e, t, i) {
    return this.replace(this.crossOriginIframeMirror, e, t, i);
  }
  replaceStyleIds(e, t, i) {
    return this.replace(this.crossOriginIframeStyleMirror, e, t, i);
  }
  replaceIdOnNode(e, t) {
    this.replaceIds(e, t, ["id", "rootId"]), "childNodes" in e && e.childNodes.forEach((i) => {
      this.replaceIdOnNode(i, t);
    });
  }
  patchRootIdOnNode(e, t) {
    e.type !== Kf.Document && !e.rootId && (e.rootId = t), "childNodes" in e && e.childNodes.forEach((i) => {
      this.patchRootIdOnNode(i, t);
    });
  }
}
class Mb {
  constructor(e) {
    v(this, "shadowDoms", /* @__PURE__ */ new WeakSet()), v(this, "mutationCb"), v(this, "scrollCb"), v(this, "bypassOptions"), v(this, "mirror"), v(this, "restoreHandlers", []), this.mutationCb = e.mutationCb, this.scrollCb = e.scrollCb, this.bypassOptions = e.bypassOptions, this.mirror = e.mirror, this.init();
  }
  init() {
    this.reset(), this.patchAttachShadow(Element, document);
  }
  addShadowRoot(e, t) {
    if (!Zt(e) || this.shadowDoms.has(e)) return;
    this.shadowDoms.add(e);
    const i = Qf(
      {
        ...this.bypassOptions,
        doc: t,
        mutationCb: this.mutationCb,
        mirror: this.mirror,
        shadowDomManager: this
      },
      e
    );
    this.restoreHandlers.push(() => i.disconnect()), this.restoreHandlers.push(
      ec({
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
        this.mirror.getId(k.host(e))
      ), this.restoreHandlers.push(
        tc(
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
    const i = this;
    this.restoreHandlers.push(
      Mt(
        e.prototype,
        "attachShadow",
        function(n) {
          return function(s) {
            const o = n.call(this, s), a = k.shadowRoot(this);
            return a && Xf(this) && i.addShadowRoot(a, t), o;
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
var pt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Nb = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Qr = 0; Qr < pt.length; Qr++)
  Nb[pt.charCodeAt(Qr)] = Qr;
var Pb = function(r) {
  var e = new Uint8Array(r), t, i = e.length, n = "";
  for (t = 0; t < i; t += 3)
    n += pt[e[t] >> 2], n += pt[(e[t] & 3) << 4 | e[t + 1] >> 4], n += pt[(e[t + 1] & 15) << 2 | e[t + 2] >> 6], n += pt[e[t + 2] & 63];
  return i % 3 === 2 ? n = n.substring(0, n.length - 1) + "=" : i % 3 === 1 && (n = n.substring(0, n.length - 2) + "=="), n;
};
const Qa = /* @__PURE__ */ new Map();
function Tb(r, e) {
  let t = Qa.get(r);
  return t || (t = /* @__PURE__ */ new Map(), Qa.set(r, t)), t.has(e) || t.set(e, []), t.get(e);
}
const rc = (r, e, t) => {
  if (!r || !(nc(r, e) || typeof r == "object"))
    return;
  const i = r.constructor.name, n = Tb(t, i);
  let s = n.indexOf(r);
  return s === -1 && (s = n.length, n.push(r)), s;
};
function ai(r, e, t) {
  if (r instanceof Array)
    return r.map((i) => ai(i, e, t));
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
    const i = r.constructor.name, n = Pb(r);
    return {
      rr_type: i,
      base64: n
    };
  } else {
    if (r instanceof DataView)
      return {
        rr_type: r.constructor.name,
        args: [
          ai(r.buffer, e, t),
          r.byteOffset,
          r.byteLength
        ]
      };
    if (r instanceof HTMLImageElement) {
      const i = r.constructor.name, { src: n } = r;
      return {
        rr_type: i,
        src: n
      };
    } else if (r instanceof HTMLCanvasElement) {
      const i = "HTMLImageElement", n = r.toDataURL();
      return {
        rr_type: i,
        src: n
      };
    } else {
      if (r instanceof ImageData)
        return {
          rr_type: r.constructor.name,
          args: [ai(r.data, e, t), r.width, r.height]
        };
      if (nc(r, e) || typeof r == "object") {
        const i = r.constructor.name, n = rc(r, e, t);
        return {
          rr_type: i,
          index: n
        };
      }
    }
  }
  return r;
}
const ic = (r, e, t) => r.map((i) => ai(i, e, t)), nc = (r, e) => !![
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
  (n) => typeof e[n] == "function"
).find(
  (n) => r instanceof e[n]
);
function Db(r, e, t, i) {
  const n = [], s = Object.getOwnPropertyNames(
    e.CanvasRenderingContext2D.prototype
  );
  for (const o of s)
    try {
      if (typeof e.CanvasRenderingContext2D.prototype[o] != "function")
        continue;
      const a = Mt(
        e.CanvasRenderingContext2D.prototype,
        o,
        function(l) {
          return function(...u) {
            return ne(this.canvas, t, i, !0) || setTimeout(() => {
              const f = ic(u, e, this);
              r(this.canvas, {
                type: Et["2D"],
                property: o,
                args: f
              });
            }, 0), l.apply(this, u);
          };
        }
      );
      n.push(a);
    } catch {
      const a = Wi(
        e.CanvasRenderingContext2D.prototype,
        o,
        {
          set(l) {
            r(this.canvas, {
              type: Et["2D"],
              property: o,
              args: [l],
              setter: !0
            });
          }
        }
      );
      n.push(a);
    }
  return () => {
    n.forEach((o) => o());
  };
}
function Lb(r) {
  return r === "experimental-webgl" ? "webgl" : r;
}
function el(r, e, t, i) {
  const n = [];
  try {
    const s = Mt(
      r.HTMLCanvasElement.prototype,
      "getContext",
      function(o) {
        return function(a, ...l) {
          if (!ne(this, e, t, !0)) {
            const u = Lb(a);
            if ("__context" in this || (this.__context = u), i && ["webgl", "webgl2"].includes(u))
              if (l[0] && typeof l[0] == "object") {
                const f = l[0];
                f.preserveDrawingBuffer || (f.preserveDrawingBuffer = !0);
              } else
                l.splice(0, 1, {
                  preserveDrawingBuffer: !0
                });
          }
          return o.apply(this, [a, ...l]);
        };
      }
    );
    n.push(s);
  } catch {
    console.error("failed to patch HTMLCanvasElement.prototype.getContext");
  }
  return () => {
    n.forEach((s) => s());
  };
}
function tl(r, e, t, i, n, s) {
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
        const u = Mt(
          r,
          l,
          function(f) {
            return function(...d) {
              const h = f.apply(this, d);
              if (rc(h, s, this), "tagName" in this.canvas && !ne(this.canvas, i, n, !0)) {
                const c = ic(d, s, this), p = {
                  type: e,
                  property: l,
                  args: c
                };
                t(this.canvas, p);
              }
              return h;
            };
          }
        );
        o.push(u);
      } catch {
        const u = Wi(r, l, {
          set(f) {
            t(this.canvas, {
              type: e,
              property: l,
              args: [f],
              setter: !0
            });
          }
        });
        o.push(u);
      }
  return o;
}
function Fb(r, e, t, i) {
  const n = [];
  return n.push(
    ...tl(
      e.WebGLRenderingContext.prototype,
      Et.WebGL,
      r,
      t,
      i,
      e
    )
  ), typeof e.WebGL2RenderingContext < "u" && n.push(
    ...tl(
      e.WebGL2RenderingContext.prototype,
      Et.WebGL2,
      r,
      t,
      i,
      e
    )
  ), () => {
    n.forEach((s) => s());
  };
}
const sc = "KGZ1bmN0aW9uKCkgewogICJ1c2Ugc3RyaWN0IjsKICB2YXIgY2hhcnMgPSAiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyI7CiAgdmFyIGxvb2t1cCA9IHR5cGVvZiBVaW50OEFycmF5ID09PSAidW5kZWZpbmVkIiA/IFtdIDogbmV3IFVpbnQ4QXJyYXkoMjU2KTsKICBmb3IgKHZhciBpID0gMDsgaSA8IGNoYXJzLmxlbmd0aDsgaSsrKSB7CiAgICBsb29rdXBbY2hhcnMuY2hhckNvZGVBdChpKV0gPSBpOwogIH0KICB2YXIgZW5jb2RlID0gZnVuY3Rpb24oYXJyYXlidWZmZXIpIHsKICAgIHZhciBieXRlcyA9IG5ldyBVaW50OEFycmF5KGFycmF5YnVmZmVyKSwgaTIsIGxlbiA9IGJ5dGVzLmxlbmd0aCwgYmFzZTY0ID0gIiI7CiAgICBmb3IgKGkyID0gMDsgaTIgPCBsZW47IGkyICs9IDMpIHsKICAgICAgYmFzZTY0ICs9IGNoYXJzW2J5dGVzW2kyXSA+PiAyXTsKICAgICAgYmFzZTY0ICs9IGNoYXJzWyhieXRlc1tpMl0gJiAzKSA8PCA0IHwgYnl0ZXNbaTIgKyAxXSA+PiA0XTsKICAgICAgYmFzZTY0ICs9IGNoYXJzWyhieXRlc1tpMiArIDFdICYgMTUpIDw8IDIgfCBieXRlc1tpMiArIDJdID4+IDZdOwogICAgICBiYXNlNjQgKz0gY2hhcnNbYnl0ZXNbaTIgKyAyXSAmIDYzXTsKICAgIH0KICAgIGlmIChsZW4gJSAzID09PSAyKSB7CiAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDEpICsgIj0iOwogICAgfSBlbHNlIGlmIChsZW4gJSAzID09PSAxKSB7CiAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDIpICsgIj09IjsKICAgIH0KICAgIHJldHVybiBiYXNlNjQ7CiAgfTsKICBjb25zdCBsYXN0QmxvYk1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7CiAgY29uc3QgdHJhbnNwYXJlbnRCbG9iTWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTsKICBhc3luYyBmdW5jdGlvbiBnZXRUcmFuc3BhcmVudEJsb2JGb3Iod2lkdGgsIGhlaWdodCwgZGF0YVVSTE9wdGlvbnMpIHsKICAgIGNvbnN0IGlkID0gYCR7d2lkdGh9LSR7aGVpZ2h0fWA7CiAgICBpZiAoIk9mZnNjcmVlbkNhbnZhcyIgaW4gZ2xvYmFsVGhpcykgewogICAgICBpZiAodHJhbnNwYXJlbnRCbG9iTWFwLmhhcyhpZCkpIHJldHVybiB0cmFuc3BhcmVudEJsb2JNYXAuZ2V0KGlkKTsKICAgICAgY29uc3Qgb2Zmc2NyZWVuID0gbmV3IE9mZnNjcmVlbkNhbnZhcyh3aWR0aCwgaGVpZ2h0KTsKICAgICAgb2Zmc2NyZWVuLmdldENvbnRleHQoIjJkIik7CiAgICAgIGNvbnN0IGJsb2IgPSBhd2FpdCBvZmZzY3JlZW4uY29udmVydFRvQmxvYihkYXRhVVJMT3B0aW9ucyk7CiAgICAgIGNvbnN0IGFycmF5QnVmZmVyID0gYXdhaXQgYmxvYi5hcnJheUJ1ZmZlcigpOwogICAgICBjb25zdCBiYXNlNjQgPSBlbmNvZGUoYXJyYXlCdWZmZXIpOwogICAgICB0cmFuc3BhcmVudEJsb2JNYXAuc2V0KGlkLCBiYXNlNjQpOwogICAgICByZXR1cm4gYmFzZTY0OwogICAgfSBlbHNlIHsKICAgICAgcmV0dXJuICIiOwogICAgfQogIH0KICBjb25zdCB3b3JrZXIgPSBzZWxmOwogIHdvcmtlci5vbm1lc3NhZ2UgPSBhc3luYyBmdW5jdGlvbihlKSB7CiAgICBpZiAoIk9mZnNjcmVlbkNhbnZhcyIgaW4gZ2xvYmFsVGhpcykgewogICAgICBjb25zdCB7IGlkLCBiaXRtYXAsIHdpZHRoLCBoZWlnaHQsIGRhdGFVUkxPcHRpb25zIH0gPSBlLmRhdGE7CiAgICAgIGNvbnN0IHRyYW5zcGFyZW50QmFzZTY0ID0gZ2V0VHJhbnNwYXJlbnRCbG9iRm9yKAogICAgICAgIHdpZHRoLAogICAgICAgIGhlaWdodCwKICAgICAgICBkYXRhVVJMT3B0aW9ucwogICAgICApOwogICAgICBjb25zdCBvZmZzY3JlZW4gPSBuZXcgT2Zmc2NyZWVuQ2FudmFzKHdpZHRoLCBoZWlnaHQpOwogICAgICBjb25zdCBjdHggPSBvZmZzY3JlZW4uZ2V0Q29udGV4dCgiMmQiKTsKICAgICAgY3R4LmRyYXdJbWFnZShiaXRtYXAsIDAsIDApOwogICAgICBiaXRtYXAuY2xvc2UoKTsKICAgICAgY29uc3QgYmxvYiA9IGF3YWl0IG9mZnNjcmVlbi5jb252ZXJ0VG9CbG9iKGRhdGFVUkxPcHRpb25zKTsKICAgICAgY29uc3QgdHlwZSA9IGJsb2IudHlwZTsKICAgICAgY29uc3QgYXJyYXlCdWZmZXIgPSBhd2FpdCBibG9iLmFycmF5QnVmZmVyKCk7CiAgICAgIGNvbnN0IGJhc2U2NCA9IGVuY29kZShhcnJheUJ1ZmZlcik7CiAgICAgIGlmICghbGFzdEJsb2JNYXAuaGFzKGlkKSAmJiBhd2FpdCB0cmFuc3BhcmVudEJhc2U2NCA9PT0gYmFzZTY0KSB7CiAgICAgICAgbGFzdEJsb2JNYXAuc2V0KGlkLCBiYXNlNjQpOwogICAgICAgIHJldHVybiB3b3JrZXIucG9zdE1lc3NhZ2UoeyBpZCB9KTsKICAgICAgfQogICAgICBpZiAobGFzdEJsb2JNYXAuZ2V0KGlkKSA9PT0gYmFzZTY0KSByZXR1cm4gd29ya2VyLnBvc3RNZXNzYWdlKHsgaWQgfSk7CiAgICAgIHdvcmtlci5wb3N0TWVzc2FnZSh7CiAgICAgICAgaWQsCiAgICAgICAgdHlwZSwKICAgICAgICBiYXNlNjQsCiAgICAgICAgd2lkdGgsCiAgICAgICAgaGVpZ2h0CiAgICAgIH0pOwogICAgICBsYXN0QmxvYk1hcC5zZXQoaWQsIGJhc2U2NCk7CiAgICB9IGVsc2UgewogICAgICByZXR1cm4gd29ya2VyLnBvc3RNZXNzYWdlKHsgaWQ6IGUuZGF0YS5pZCB9KTsKICAgIH0KICB9Owp9KSgpOwovLyMgc291cmNlTWFwcGluZ1VSTD1pbWFnZS1iaXRtYXAtZGF0YS11cmwtd29ya2VyLUlKcEM3Z19iLmpzLm1hcAo=", zb = (r) => Uint8Array.from(atob(r), (e) => e.charCodeAt(0)), rl = typeof window < "u" && window.Blob && new Blob([zb(sc)], { type: "text/javascript;charset=utf-8" });
function Ub(r) {
  let e;
  try {
    if (e = rl && (window.URL || window.webkitURL).createObjectURL(rl), !e) throw "";
    const t = new Worker(e, {
      name: r == null ? void 0 : r.name
    });
    return t.addEventListener("error", () => {
      (window.URL || window.webkitURL).revokeObjectURL(e);
    }), t;
  } catch {
    return new Worker(
      "data:text/javascript;base64," + sc,
      {
        name: r == null ? void 0 : r.name
      }
    );
  } finally {
    e && (window.URL || window.webkitURL).revokeObjectURL(e);
  }
}
class Bb {
  constructor(e) {
    v(this, "pendingCanvasMutations", /* @__PURE__ */ new Map()), v(this, "rafStamps", { latestId: 0, invokeId: null }), v(this, "mirror"), v(this, "mutationCb"), v(this, "resetObservers"), v(this, "frozen", !1), v(this, "locked", !1), v(this, "processMutation", (l, u) => {
      (this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId || !this.rafStamps.invokeId) && (this.rafStamps.invokeId = this.rafStamps.latestId), this.pendingCanvasMutations.has(l) || this.pendingCanvasMutations.set(l, []), this.pendingCanvasMutations.get(l).push(u);
    });
    const {
      sampling: t = "all",
      win: i,
      blockClass: n,
      blockSelector: s,
      recordCanvas: o,
      dataURLOptions: a
    } = e;
    this.mutationCb = e.mutationCb, this.mirror = e.mirror, o && t === "all" && this.initCanvasMutationObserver(i, n, s), o && typeof t == "number" && this.initCanvasFPSObserver(t, i, n, s, {
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
  initCanvasFPSObserver(e, t, i, n, s) {
    const o = el(
      t,
      i,
      n,
      !0
    ), a = /* @__PURE__ */ new Map(), l = new Ub();
    l.onmessage = (p) => {
      const { id: g } = p.data;
      if (a.set(g, !1), !("base64" in p.data)) return;
      const { base64: m, type: b, width: _, height: y } = p.data;
      this.mutationCb({
        id: g,
        type: Et["2D"],
        commands: [
          {
            property: "clearRect",
            // wipe canvas
            args: [0, 0, _, y]
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
                    data: [{ rr_type: "ArrayBuffer", base64: m }],
                    type: b
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
    let f = 0, d;
    const h = () => {
      const p = [];
      return t.document.querySelectorAll("canvas").forEach((g) => {
        ne(g, i, n, !0) || p.push(g);
      }), p;
    }, c = (p) => {
      if (f && p - f < u) {
        d = requestAnimationFrame(c);
        return;
      }
      f = p, h().forEach(async (g) => {
        var m;
        const b = this.mirror.getId(g);
        if (a.get(b) || g.width === 0 || g.height === 0) return;
        if (a.set(b, !0), ["webgl", "webgl2"].includes(g.__context)) {
          const y = g.getContext(g.__context);
          ((m = y == null ? void 0 : y.getContextAttributes()) == null ? void 0 : m.preserveDrawingBuffer) === !1 && y.clear(y.COLOR_BUFFER_BIT);
        }
        const _ = await createImageBitmap(g);
        l.postMessage(
          {
            id: b,
            bitmap: _,
            width: g.width,
            height: g.height,
            dataURLOptions: s.dataURLOptions
          },
          [_]
        );
      }), d = requestAnimationFrame(c);
    };
    d = requestAnimationFrame(c), this.resetObservers = () => {
      o(), cancelAnimationFrame(d);
    };
  }
  initCanvasMutationObserver(e, t, i) {
    this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher();
    const n = el(
      e,
      t,
      i,
      !1
    ), s = Db(
      this.processMutation.bind(this),
      e,
      t,
      i
    ), o = Fb(
      this.processMutation.bind(this),
      e,
      t,
      i
    );
    this.resetObservers = () => {
      n(), s(), o();
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
        const i = this.mirror.getId(t);
        this.flushPendingCanvasMutationFor(t, i);
      }
    ), requestAnimationFrame(() => this.flushPendingCanvasMutations());
  }
  flushPendingCanvasMutationFor(e, t) {
    if (this.frozen || this.locked)
      return;
    const i = this.pendingCanvasMutations.get(e);
    if (!i || t === -1) return;
    const n = i.map((o) => {
      const { type: a, ...l } = o;
      return l;
    }), { type: s } = i[0];
    this.mutationCb({ id: t, type: s, commands: n }), this.pendingCanvasMutations.delete(e);
  }
}
class jb {
  constructor(e) {
    v(this, "trackedLinkElements", /* @__PURE__ */ new WeakSet()), v(this, "mutationCb"), v(this, "adoptedStyleSheetCb"), v(this, "styleMirror", new ub()), this.mutationCb = e.mutationCb, this.adoptedStyleSheetCb = e.adoptedStyleSheetCb;
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
    const i = {
      id: t,
      styleIds: []
    }, n = [];
    for (const s of e) {
      let o;
      this.styleMirror.has(s) ? o = this.styleMirror.getId(s) : (o = this.styleMirror.add(s), n.push({
        styleId: o,
        rules: Array.from(s.rules || CSSRule, (a, l) => ({
          rule: hu(a, s.href),
          index: l
        }))
      })), i.styleIds.push(o);
    }
    n.length > 0 && (i.styles = n), this.adoptedStyleSheetCb(i);
  }
  reset() {
    this.styleMirror.reset(), this.trackedLinkElements = /* @__PURE__ */ new WeakSet();
  }
  // TODO: take snapshot on stylesheet reload by applying event listener
  trackStylesheetInLinkElement(e) {
  }
}
class Wb {
  constructor() {
    v(this, "nodeMap", /* @__PURE__ */ new WeakMap()), v(this, "active", !1);
  }
  inOtherBuffer(e, t) {
    const i = this.nodeMap.get(e);
    return i && Array.from(i).some((n) => n !== t);
  }
  add(e, t) {
    this.active || (this.active = !0, requestAnimationFrame(() => {
      this.nodeMap = /* @__PURE__ */ new WeakMap(), this.active = !1;
    })), this.nodeMap.set(e, (this.nodeMap.get(e) || /* @__PURE__ */ new Set()).add(t));
  }
  destroy() {
  }
}
let J, li, En, Ei = !1;
try {
  if (Array.from([1], (r) => r * 2)[0] !== 2) {
    const r = document.createElement("iframe");
    document.body.appendChild(r), Array.from = ((ia = r.contentWindow) == null ? void 0 : ia.Array.from) || Array.from, document.body.removeChild(r);
  }
} catch (r) {
  console.debug("Unable to override Array.from", r);
}
const me = Up();
function _r(r = {}) {
  const {
    emit: e,
    checkoutEveryNms: t,
    checkoutEveryNth: i,
    blockClass: n = "rr-block",
    blockSelector: s = null,
    ignoreClass: o = "rr-ignore",
    ignoreSelector: a = null,
    maskTextClass: l = "rr-mask",
    maskTextSelector: u = null,
    inlineStylesheet: f = !0,
    maskAllInputs: d,
    maskInputOptions: h,
    slimDOMOptions: c,
    maskInputFn: p,
    maskTextFn: g,
    hooks: m,
    packFn: b,
    sampling: _ = {},
    dataURLOptions: y = {},
    mousemoveWait: w,
    recordDOM: S = !0,
    recordCanvas: E = !1,
    recordCrossOriginIframes: x = !1,
    recordAfter: I = r.recordAfter === "DOMContentLoaded" ? r.recordAfter : "load",
    userTriggeredOnInput: A = !1,
    collectFonts: C = !1,
    inlineImages: O = !1,
    plugins: q,
    keepIframeSrcFn: $ = () => !1,
    ignoreCSSAttributes: we = /* @__PURE__ */ new Set([]),
    errorHandler: be
  } = r;
  gb(be);
  const X = x ? window.parent === window : !0;
  let fe = !1;
  if (!X)
    try {
      window.parent.document && (fe = !1);
    } catch {
      fe = !0;
    }
  if (X && !e)
    throw new Error("emit function is required");
  if (!X && !fe)
    return () => {
    };
  w !== void 0 && _.mousemove === void 0 && (_.mousemove = w), me.reset();
  const je = d === !0 ? {
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
  } : h !== void 0 ? h : { password: !0 }, _e = c === !0 || c === "all" ? {
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
    headMetaAuthorship: c === "all",
    headMetaDescKeywords: c === "all",
    headTitleMutations: c === "all"
  } : c || {};
  lb();
  let mo, Yi = 0;
  const go = (L) => {
    for (const pe of q || [])
      pe.eventProcessor && (L = pe.eventProcessor(L));
    return b && // Disable packing events which will be emitted to parent frames.
    !fe && (L = b(L)), L;
  };
  J = (L, pe) => {
    var V;
    const Y = L;
    if (Y.timestamp = Ii(), (V = Ye[0]) != null && V.isFrozen() && Y.type !== T.FullSnapshot && !(Y.type === T.IncrementalSnapshot && Y.data.source === M.Mutation) && Ye.forEach((ve) => ve.unfreeze()), X)
      e == null || e(go(Y), pe);
    else if (fe) {
      const ve = {
        type: "rrweb",
        event: go(Y),
        origin: window.location.origin,
        isCheckout: pe
      };
      window.parent.postMessage(ve, "*");
    }
    if (Y.type === T.FullSnapshot)
      mo = Y, Yi = 0;
    else if (Y.type === T.IncrementalSnapshot) {
      if (Y.data.source === M.Mutation && Y.data.isAttachIframe)
        return;
      Yi++;
      const ve = i && Yi >= i, U = t && Y.timestamp - mo.timestamp > t;
      (ve || U) && li(!0);
    }
  };
  const Cr = (L) => {
    J({
      type: T.IncrementalSnapshot,
      data: {
        source: M.Mutation,
        ...L
      }
    });
  }, yo = (L) => J({
    type: T.IncrementalSnapshot,
    data: {
      source: M.Scroll,
      ...L
    }
  }), wo = (L) => J({
    type: T.IncrementalSnapshot,
    data: {
      source: M.CanvasMutation,
      ...L
    }
  }), bc = (L) => J({
    type: T.IncrementalSnapshot,
    data: {
      source: M.AdoptedStyleSheet,
      ...L
    }
  }), We = new jb({
    mutationCb: Cr,
    adoptedStyleSheetCb: bc
  }), Ze = new $b({
    mirror: me,
    mutationCb: Cr,
    stylesheetManager: We,
    recordCrossOriginIframes: x,
    wrappedEmit: J
  });
  for (const L of q || [])
    L.getMirror && L.getMirror({
      nodeMirror: me,
      crossOriginIframeMirror: Ze.crossOriginIframeMirror,
      crossOriginIframeStyleMirror: Ze.crossOriginIframeStyleMirror
    });
  const Ji = new Wb();
  En = new Bb({
    recordCanvas: E,
    mutationCb: wo,
    win: window,
    blockClass: n,
    blockSelector: s,
    mirror: me,
    sampling: _.canvas,
    dataURLOptions: y
  });
  const Ir = new Mb({
    mutationCb: Cr,
    scrollCb: yo,
    bypassOptions: {
      blockClass: n,
      blockSelector: s,
      maskTextClass: l,
      maskTextSelector: u,
      inlineStylesheet: f,
      maskInputOptions: je,
      dataURLOptions: y,
      maskTextFn: g,
      maskInputFn: p,
      recordCanvas: E,
      inlineImages: O,
      sampling: _,
      slimDOMOptions: _e,
      iframeManager: Ze,
      stylesheetManager: We,
      canvasManager: En,
      keepIframeSrcFn: $,
      processedNodeManager: Ji
    },
    mirror: me
  });
  li = (L = !1) => {
    if (!S)
      return;
    J(
      {
        type: T.Meta,
        data: {
          href: window.location.href,
          width: Zf(),
          height: Wf()
        }
      },
      L
    ), We.reset(), Ir.init(), Ye.forEach((V) => V.lock());
    const pe = fm(document, {
      mirror: me,
      blockClass: n,
      blockSelector: s,
      maskTextClass: l,
      maskTextSelector: u,
      inlineStylesheet: f,
      maskAllInputs: je,
      maskTextFn: g,
      maskInputFn: p,
      slimDOM: _e,
      dataURLOptions: y,
      recordCanvas: E,
      inlineImages: O,
      onSerialize: (V) => {
        Vf(V, me) && Ze.addIframe(V), Yf(V, me) && We.trackLinkElement(V), Es(V) && Ir.addShadowRoot(k.shadowRoot(V), document);
      },
      onIframeLoad: (V, Y) => {
        Ze.attachIframe(V, Y), Ir.observeAttachShadow(V);
      },
      onStylesheetLoad: (V, Y) => {
        We.attachLinkElement(V, Y);
      },
      keepIframeSrcFn: $
    });
    if (!pe)
      return console.warn("Failed to snapshot the document");
    J(
      {
        type: T.FullSnapshot,
        data: {
          node: pe,
          initialOffset: jf(window)
        }
      },
      L
    ), Ye.forEach((V) => V.unlock()), document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0 && We.adoptStyleSheets(
      document.adoptedStyleSheets,
      me.getId(document)
    );
  };
  try {
    const L = [], pe = (Y) => {
      var ve;
      return P(kb)(
        {
          mutationCb: Cr,
          mousemoveCb: (U, Xi) => J({
            type: T.IncrementalSnapshot,
            data: {
              source: Xi,
              positions: U
            }
          }),
          mouseInteractionCb: (U) => J({
            type: T.IncrementalSnapshot,
            data: {
              source: M.MouseInteraction,
              ...U
            }
          }),
          scrollCb: yo,
          viewportResizeCb: (U) => J({
            type: T.IncrementalSnapshot,
            data: {
              source: M.ViewportResize,
              ...U
            }
          }),
          inputCb: (U) => J({
            type: T.IncrementalSnapshot,
            data: {
              source: M.Input,
              ...U
            }
          }),
          mediaInteractionCb: (U) => J({
            type: T.IncrementalSnapshot,
            data: {
              source: M.MediaInteraction,
              ...U
            }
          }),
          styleSheetRuleCb: (U) => J({
            type: T.IncrementalSnapshot,
            data: {
              source: M.StyleSheetRule,
              ...U
            }
          }),
          styleDeclarationCb: (U) => J({
            type: T.IncrementalSnapshot,
            data: {
              source: M.StyleDeclaration,
              ...U
            }
          }),
          canvasMutationCb: wo,
          fontCb: (U) => J({
            type: T.IncrementalSnapshot,
            data: {
              source: M.Font,
              ...U
            }
          }),
          selectionCb: (U) => {
            J({
              type: T.IncrementalSnapshot,
              data: {
                source: M.Selection,
                ...U
              }
            });
          },
          customElementCb: (U) => {
            J({
              type: T.IncrementalSnapshot,
              data: {
                source: M.CustomElement,
                ...U
              }
            });
          },
          blockClass: n,
          ignoreClass: o,
          ignoreSelector: a,
          maskTextClass: l,
          maskTextSelector: u,
          maskInputOptions: je,
          inlineStylesheet: f,
          sampling: _,
          recordDOM: S,
          recordCanvas: E,
          inlineImages: O,
          userTriggeredOnInput: A,
          collectFonts: C,
          doc: Y,
          maskInputFn: p,
          maskTextFn: g,
          keepIframeSrcFn: $,
          blockSelector: s,
          slimDOMOptions: _e,
          dataURLOptions: y,
          mirror: me,
          iframeManager: Ze,
          stylesheetManager: We,
          shadowDomManager: Ir,
          processedNodeManager: Ji,
          canvasManager: En,
          ignoreCSSAttributes: we,
          plugins: ((ve = q == null ? void 0 : q.filter((U) => U.observer)) == null ? void 0 : ve.map((U) => ({
            observer: U.observer,
            options: U.options,
            callback: (Xi) => J({
              type: T.Plugin,
              data: {
                plugin: U.name,
                payload: Xi
              }
            })
          }))) || []
        },
        m
      );
    };
    Ze.addLoadListener((Y) => {
      try {
        L.push(pe(Y.contentDocument));
      } catch (ve) {
        console.warn(ve);
      }
    });
    const V = () => {
      li(), L.push(pe(document)), Ei = !0;
    };
    return document.readyState === "interactive" || document.readyState === "complete" ? V() : (L.push(
      ie("DOMContentLoaded", () => {
        J({
          type: T.DomContentLoaded,
          data: {}
        }), I === "DOMContentLoaded" && V();
      })
    ), L.push(
      ie(
        "load",
        () => {
          J({
            type: T.Load,
            data: {}
          }), I === "load" && V();
        },
        window
      )
    )), () => {
      L.forEach((Y) => Y()), Ji.destroy(), Ei = !1, yb();
    };
  } catch (L) {
    console.warn(L);
  }
}
_r.addCustomEvent = (r, e) => {
  if (!Ei)
    throw new Error("please add custom event after start recording");
  J({
    type: T.Custom,
    data: {
      tag: r,
      payload: e
    }
  });
};
_r.freezePage = () => {
  Ye.forEach((r) => r.freeze());
};
_r.takeFullSnapshot = (r) => {
  if (!Ei)
    throw new Error("please take full snapshot after start recording");
  li(r);
};
_r.mirror = me;
var il;
(function(r) {
  r[r.NotStarted = 0] = "NotStarted", r[r.Running = 1] = "Running", r[r.Stopped = 2] = "Stopped";
})(il || (il = {}));
function Zb(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var ei = {}, On, nl;
function Gb() {
  if (nl) return On;
  nl = 1;
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
  }, i;
  function n(c) {
    throw {
      name: "SyntaxError",
      message: c,
      at: r,
      text: i
    };
  }
  function s(c) {
    return c && c !== e && n("Expected '" + c + "' instead of '" + e + "'"), e = i.charAt(r), r += 1, e;
  }
  function o() {
    var c, p = "";
    for (e === "-" && (p = "-", s("-")); e >= "0" && e <= "9"; )
      p += e, s();
    if (e === ".")
      for (p += "."; s() && e >= "0" && e <= "9"; )
        p += e;
    if (e === "e" || e === "E")
      for (p += e, s(), (e === "-" || e === "+") && (p += e, s()); e >= "0" && e <= "9"; )
        p += e, s();
    return c = Number(p), isFinite(c) || n("Bad number"), c;
  }
  function a() {
    var c, p, g = "", m;
    if (e === '"')
      for (; s(); ) {
        if (e === '"')
          return s(), g;
        if (e === "\\")
          if (s(), e === "u") {
            for (m = 0, p = 0; p < 4 && (c = parseInt(s(), 16), !!isFinite(c)); p += 1)
              m = m * 16 + c;
            g += String.fromCharCode(m);
          } else if (typeof t[e] == "string")
            g += t[e];
          else
            break;
        else
          g += e;
      }
    n("Bad string");
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
        n("Unexpected '" + e + "'");
    }
  }
  function f() {
    var c = [];
    if (e === "[") {
      if (s("["), l(), e === "]")
        return s("]"), c;
      for (; e; ) {
        if (c.push(h()), l(), e === "]")
          return s("]"), c;
        s(","), l();
      }
    }
    n("Bad array");
  }
  function d() {
    var c, p = {};
    if (e === "{") {
      if (s("{"), l(), e === "}")
        return s("}"), p;
      for (; e; ) {
        if (c = a(), l(), s(":"), Object.prototype.hasOwnProperty.call(p, c) && n('Duplicate key "' + c + '"'), p[c] = h(), l(), e === "}")
          return s("}"), p;
        s(","), l();
      }
    }
    n("Bad object");
  }
  function h() {
    switch (l(), e) {
      case "{":
        return d();
      case "[":
        return f();
      case '"':
        return a();
      case "-":
        return o();
      default:
        return e >= "0" && e <= "9" ? o() : u();
    }
  }
  return On = function(c, p) {
    var g;
    return i = c, r = 0, e = " ", g = h(), l(), e && n("Syntax error"), typeof p == "function" ? function m(b, _) {
      var y, w, S = b[_];
      if (S && typeof S == "object")
        for (y in h)
          Object.prototype.hasOwnProperty.call(S, y) && (w = m(S, y), typeof w > "u" ? delete S[y] : S[y] = w);
      return p.call(b, _, S);
    }({ "": g }, "") : g;
  }, On;
}
var Rn, sl;
function Hb() {
  if (sl) return Rn;
  sl = 1;
  var r = /[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, e, t, i = {
    // table of character substitutions
    "\b": "\\b",
    "	": "\\t",
    "\n": "\\n",
    "\f": "\\f",
    "\r": "\\r",
    '"': '\\"',
    "\\": "\\\\"
  }, n;
  function s(a) {
    return r.lastIndex = 0, r.test(a) ? '"' + a.replace(r, function(l) {
      var u = i[l];
      return typeof u == "string" ? u : "\\u" + ("0000" + l.charCodeAt(0).toString(16)).slice(-4);
    }) + '"' : '"' + a + '"';
  }
  function o(a, l) {
    var u, f, d, h, c = e, p, g = l[a];
    switch (g && typeof g == "object" && typeof g.toJSON == "function" && (g = g.toJSON(a)), typeof n == "function" && (g = n.call(l, a, g)), typeof g) {
      case "string":
        return s(g);
      case "number":
        return isFinite(g) ? String(g) : "null";
      case "boolean":
      case "null":
        return String(g);
      case "object":
        if (!g)
          return "null";
        if (e += t, p = [], Object.prototype.toString.apply(g) === "[object Array]") {
          for (h = g.length, u = 0; u < h; u += 1)
            p[u] = o(u, g) || "null";
          return d = p.length === 0 ? "[]" : e ? `[
` + e + p.join(`,
` + e) + `
` + c + "]" : "[" + p.join(",") + "]", e = c, d;
        }
        if (n && typeof n == "object")
          for (h = n.length, u = 0; u < h; u += 1)
            f = n[u], typeof f == "string" && (d = o(f, g), d && p.push(s(f) + (e ? ": " : ":") + d));
        else
          for (f in g)
            Object.prototype.hasOwnProperty.call(g, f) && (d = o(f, g), d && p.push(s(f) + (e ? ": " : ":") + d));
        return d = p.length === 0 ? "{}" : e ? `{
` + e + p.join(`,
` + e) + `
` + c + "}" : "{" + p.join(",") + "}", e = c, d;
    }
  }
  return Rn = function(a, l, u) {
    var f;
    if (e = "", t = "", typeof u == "number")
      for (f = 0; f < u; f += 1)
        t += " ";
    else typeof u == "string" && (t = u);
    if (n = l, l && typeof l != "function" && (typeof l != "object" || typeof l.length != "number"))
      throw new Error("JSON.stringify");
    return o("", { "": a });
  }, Rn;
}
var ol;
function Vb() {
  return ol || (ol = 1, ei.parse = Gb(), ei.stringify = Hb()), ei;
}
var Yb = {}.toString, Jb = Array.isArray || function(r) {
  return Yb.call(r) == "[object Array]";
}, al = Object.prototype.toString, oc = function(e) {
  var t = al.call(e), i = t === "[object Arguments]";
  return i || (i = t !== "[object Array]" && e !== null && typeof e == "object" && typeof e.length == "number" && e.length >= 0 && al.call(e.callee) === "[object Function]"), i;
}, kn, ll;
function Xb() {
  if (ll) return kn;
  ll = 1;
  var r;
  if (!Object.keys) {
    var e = Object.prototype.hasOwnProperty, t = Object.prototype.toString, i = oc, n = Object.prototype.propertyIsEnumerable, s = !n.call({ toString: null }, "toString"), o = n.call(function() {
    }, "prototype"), a = [
      "toString",
      "toLocaleString",
      "valueOf",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "constructor"
    ], l = function(h) {
      var c = h.constructor;
      return c && c.prototype === h;
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
    }, f = function() {
      if (typeof window > "u")
        return !1;
      for (var h in window)
        try {
          if (!u["$" + h] && e.call(window, h) && window[h] !== null && typeof window[h] == "object")
            try {
              l(window[h]);
            } catch {
              return !0;
            }
        } catch {
          return !0;
        }
      return !1;
    }(), d = function(h) {
      if (typeof window > "u" || !f)
        return l(h);
      try {
        return l(h);
      } catch {
        return !1;
      }
    };
    r = function(c) {
      var p = c !== null && typeof c == "object", g = t.call(c) === "[object Function]", m = i(c), b = p && t.call(c) === "[object String]", _ = [];
      if (!p && !g && !m)
        throw new TypeError("Object.keys called on a non-object");
      var y = o && g;
      if (b && c.length > 0 && !e.call(c, 0))
        for (var w = 0; w < c.length; ++w)
          _.push(String(w));
      if (m && c.length > 0)
        for (var S = 0; S < c.length; ++S)
          _.push(String(S));
      else
        for (var E in c)
          !(y && E === "prototype") && e.call(c, E) && _.push(String(E));
      if (s)
        for (var x = d(c), I = 0; I < a.length; ++I)
          !(x && a[I] === "constructor") && e.call(c, a[I]) && _.push(a[I]);
      return _;
    };
  }
  return kn = r, kn;
}
var Kb = Array.prototype.slice, qb = oc, ul = Object.keys, ui = ul ? function(e) {
  return ul(e);
} : Xb(), fl = Object.keys;
ui.shim = function() {
  if (Object.keys) {
    var e = function() {
      var t = Object.keys(arguments);
      return t && t.length === arguments.length;
    }(1, 2);
    e || (Object.keys = function(i) {
      return qb(i) ? fl(Kb.call(i)) : fl(i);
    });
  } else
    Object.keys = ui;
  return Object.keys || ui;
};
var Qb = ui, ac = { exports: {} }, lc = Object, e0 = Error, t0 = EvalError, r0 = RangeError, i0 = ReferenceError, uc = SyntaxError, Zi = TypeError, n0 = URIError, s0 = Math.abs, o0 = Math.floor, a0 = Math.max, l0 = Math.min, u0 = Math.pow, f0 = Math.round, c0 = Number.isNaN || function(e) {
  return e !== e;
}, h0 = c0, d0 = function(e) {
  return h0(e) || e === 0 ? e : e < 0 ? -1 : 1;
}, p0 = Object.getOwnPropertyDescriptor, fi = p0;
if (fi)
  try {
    fi([], "length");
  } catch {
    fi = null;
  }
var Gi = fi, ci = Object.defineProperty || !1;
if (ci)
  try {
    ci({}, "a", { value: 1 });
  } catch {
    ci = !1;
  }
var Hi = ci, $n, cl;
function m0() {
  return cl || (cl = 1, $n = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
      return !1;
    if (typeof Symbol.iterator == "symbol")
      return !0;
    var e = {}, t = Symbol("test"), i = Object(t);
    if (typeof t == "string" || Object.prototype.toString.call(t) !== "[object Symbol]" || Object.prototype.toString.call(i) !== "[object Symbol]")
      return !1;
    var n = 42;
    e[t] = n;
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
      if (a.value !== n || a.enumerable !== !0)
        return !1;
    }
    return !0;
  }), $n;
}
var Mn, hl;
function g0() {
  if (hl) return Mn;
  hl = 1;
  var r = typeof Symbol < "u" && Symbol, e = m0();
  return Mn = function() {
    return typeof r != "function" || typeof Symbol != "function" || typeof r("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : e();
  }, Mn;
}
var Nn, dl;
function fc() {
  return dl || (dl = 1, Nn = typeof Reflect < "u" && Reflect.getPrototypeOf || null), Nn;
}
var Pn, pl;
function cc() {
  if (pl) return Pn;
  pl = 1;
  var r = lc;
  return Pn = r.getPrototypeOf || null, Pn;
}
var y0 = "Function.prototype.bind called on incompatible ", w0 = Object.prototype.toString, b0 = Math.max, _0 = "[object Function]", ml = function(e, t) {
  for (var i = [], n = 0; n < e.length; n += 1)
    i[n] = e[n];
  for (var s = 0; s < t.length; s += 1)
    i[s + e.length] = t[s];
  return i;
}, v0 = function(e, t) {
  for (var i = [], n = t, s = 0; n < e.length; n += 1, s += 1)
    i[s] = e[n];
  return i;
}, S0 = function(r, e) {
  for (var t = "", i = 0; i < r.length; i += 1)
    t += r[i], i + 1 < r.length && (t += e);
  return t;
}, x0 = function(e) {
  var t = this;
  if (typeof t != "function" || w0.apply(t) !== _0)
    throw new TypeError(y0 + t);
  for (var i = v0(arguments, 1), n, s = function() {
    if (this instanceof n) {
      var f = t.apply(
        this,
        ml(i, arguments)
      );
      return Object(f) === f ? f : this;
    }
    return t.apply(
      e,
      ml(i, arguments)
    );
  }, o = b0(0, t.length - i.length), a = [], l = 0; l < o; l++)
    a[l] = "$" + l;
  if (n = Function("binder", "return function (" + S0(a, ",") + "){ return binder.apply(this,arguments); }")(s), t.prototype) {
    var u = function() {
    };
    u.prototype = t.prototype, n.prototype = new u(), u.prototype = null;
  }
  return n;
}, C0 = x0, vr = Function.prototype.bind || C0, co = Function.prototype.call, ho = Function.prototype.apply, I0 = typeof Reflect < "u" && Reflect && Reflect.apply, A0 = vr, E0 = ho, O0 = co, R0 = I0, hc = R0 || A0.call(O0, E0), k0 = vr, $0 = Zi, M0 = co, N0 = hc, po = function(e) {
  if (e.length < 1 || typeof e[0] != "function")
    throw new $0("a function is required");
  return N0(k0, M0, e);
}, Tn, gl;
function P0() {
  if (gl) return Tn;
  gl = 1;
  var r = po, e = Gi, t;
  try {
    t = /** @type {{ __proto__?: typeof Array.prototype }} */
    [].__proto__ === Array.prototype;
  } catch (o) {
    if (!o || typeof o != "object" || !("code" in o) || o.code !== "ERR_PROTO_ACCESS")
      throw o;
  }
  var i = !!t && e && e(
    Object.prototype,
    /** @type {keyof typeof Object.prototype} */
    "__proto__"
  ), n = Object, s = n.getPrototypeOf;
  return Tn = i && typeof i.get == "function" ? r([i.get]) : typeof s == "function" ? (
    /** @type {import('./get')} */
    function(a) {
      return s(a == null ? a : n(a));
    }
  ) : !1, Tn;
}
var Dn, yl;
function T0() {
  if (yl) return Dn;
  yl = 1;
  var r = fc(), e = cc(), t = P0();
  return Dn = r ? function(n) {
    return r(n);
  } : e ? function(n) {
    if (!n || typeof n != "object" && typeof n != "function")
      throw new TypeError("getProto: not an object");
    return e(n);
  } : t ? function(n) {
    return t(n);
  } : null, Dn;
}
var Ln, wl;
function D0() {
  if (wl) return Ln;
  wl = 1;
  var r = Function.prototype.call, e = Object.prototype.hasOwnProperty, t = vr;
  return Ln = t.call(r, e), Ln;
}
var R, L0 = lc, F0 = e0, z0 = t0, U0 = r0, B0 = i0, Ot = uc, wt = Zi, j0 = n0, W0 = s0, Z0 = o0, G0 = a0, H0 = l0, V0 = u0, Y0 = f0, J0 = d0, dc = Function, Fn = function(r) {
  try {
    return dc('"use strict"; return (' + r + ").constructor;")();
  } catch {
  }
}, fr = Gi, X0 = Hi, zn = function() {
  throw new wt();
}, K0 = fr ? function() {
  try {
    return arguments.callee, zn;
  } catch {
    try {
      return fr(arguments, "callee").get;
    } catch {
      return zn;
    }
  }
}() : zn, at = g0()(), Q = T0(), q0 = cc(), Q0 = fc(), pc = ho, Sr = co, ct = {}, e1 = typeof Uint8Array > "u" || !Q ? R : Q(Uint8Array), Je = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError > "u" ? R : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? R : ArrayBuffer,
  "%ArrayIteratorPrototype%": at && Q ? Q([][Symbol.iterator]()) : R,
  "%AsyncFromSyncIteratorPrototype%": R,
  "%AsyncFunction%": ct,
  "%AsyncGenerator%": ct,
  "%AsyncGeneratorFunction%": ct,
  "%AsyncIteratorPrototype%": ct,
  "%Atomics%": typeof Atomics > "u" ? R : Atomics,
  "%BigInt%": typeof BigInt > "u" ? R : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? R : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? R : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? R : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": F0,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": z0,
  "%Float32Array%": typeof Float32Array > "u" ? R : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? R : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? R : FinalizationRegistry,
  "%Function%": dc,
  "%GeneratorFunction%": ct,
  "%Int8Array%": typeof Int8Array > "u" ? R : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? R : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? R : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": at && Q ? Q(Q([][Symbol.iterator]())) : R,
  "%JSON%": typeof JSON == "object" ? JSON : R,
  "%Map%": typeof Map > "u" ? R : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !at || !Q ? R : Q((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": L0,
  "%Object.getOwnPropertyDescriptor%": fr,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? R : Promise,
  "%Proxy%": typeof Proxy > "u" ? R : Proxy,
  "%RangeError%": U0,
  "%ReferenceError%": B0,
  "%Reflect%": typeof Reflect > "u" ? R : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? R : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !at || !Q ? R : Q((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? R : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": at && Q ? Q(""[Symbol.iterator]()) : R,
  "%Symbol%": at ? Symbol : R,
  "%SyntaxError%": Ot,
  "%ThrowTypeError%": K0,
  "%TypedArray%": e1,
  "%TypeError%": wt,
  "%Uint8Array%": typeof Uint8Array > "u" ? R : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? R : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? R : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? R : Uint32Array,
  "%URIError%": j0,
  "%WeakMap%": typeof WeakMap > "u" ? R : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? R : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? R : WeakSet,
  "%Function.prototype.call%": Sr,
  "%Function.prototype.apply%": pc,
  "%Object.defineProperty%": X0,
  "%Object.getPrototypeOf%": q0,
  "%Math.abs%": W0,
  "%Math.floor%": Z0,
  "%Math.max%": G0,
  "%Math.min%": H0,
  "%Math.pow%": V0,
  "%Math.round%": Y0,
  "%Math.sign%": J0,
  "%Reflect.getPrototypeOf%": Q0
};
if (Q)
  try {
    null.error;
  } catch (r) {
    var t1 = Q(Q(r));
    Je["%Error.prototype%"] = t1;
  }
var r1 = function r(e) {
  var t;
  if (e === "%AsyncFunction%")
    t = Fn("async function () {}");
  else if (e === "%GeneratorFunction%")
    t = Fn("function* () {}");
  else if (e === "%AsyncGeneratorFunction%")
    t = Fn("async function* () {}");
  else if (e === "%AsyncGenerator%") {
    var i = r("%AsyncGeneratorFunction%");
    i && (t = i.prototype);
  } else if (e === "%AsyncIteratorPrototype%") {
    var n = r("%AsyncGenerator%");
    n && Q && (t = Q(n.prototype));
  }
  return Je[e] = t, t;
}, bl = {
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
}, xr = vr, Oi = D0(), i1 = xr.call(Sr, Array.prototype.concat), n1 = xr.call(pc, Array.prototype.splice), _l = xr.call(Sr, String.prototype.replace), Ri = xr.call(Sr, String.prototype.slice), s1 = xr.call(Sr, RegExp.prototype.exec), o1 = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, a1 = /\\(\\)?/g, l1 = function(e) {
  var t = Ri(e, 0, 1), i = Ri(e, -1);
  if (t === "%" && i !== "%")
    throw new Ot("invalid intrinsic syntax, expected closing `%`");
  if (i === "%" && t !== "%")
    throw new Ot("invalid intrinsic syntax, expected opening `%`");
  var n = [];
  return _l(e, o1, function(s, o, a, l) {
    n[n.length] = a ? _l(l, a1, "$1") : o || s;
  }), n;
}, u1 = function(e, t) {
  var i = e, n;
  if (Oi(bl, i) && (n = bl[i], i = "%" + n[0] + "%"), Oi(Je, i)) {
    var s = Je[i];
    if (s === ct && (s = r1(i)), typeof s > "u" && !t)
      throw new wt("intrinsic " + e + " exists, but is not available. Please file an issue!");
    return {
      alias: n,
      name: i,
      value: s
    };
  }
  throw new Ot("intrinsic " + e + " does not exist!");
}, mc = function(e, t) {
  if (typeof e != "string" || e.length === 0)
    throw new wt("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof t != "boolean")
    throw new wt('"allowMissing" argument must be a boolean');
  if (s1(/^%?[^%]*%?$/, e) === null)
    throw new Ot("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var i = l1(e), n = i.length > 0 ? i[0] : "", s = u1("%" + n + "%", t), o = s.name, a = s.value, l = !1, u = s.alias;
  u && (n = u[0], n1(i, i1([0, 1], u)));
  for (var f = 1, d = !0; f < i.length; f += 1) {
    var h = i[f], c = Ri(h, 0, 1), p = Ri(h, -1);
    if ((c === '"' || c === "'" || c === "`" || p === '"' || p === "'" || p === "`") && c !== p)
      throw new Ot("property names with quotes must have matching quotes");
    if ((h === "constructor" || !d) && (l = !0), n += "." + h, o = "%" + n + "%", Oi(Je, o))
      a = Je[o];
    else if (a != null) {
      if (!(h in a)) {
        if (!t)
          throw new wt("base intrinsic for " + e + " exists, but the property is not available.");
        return;
      }
      if (fr && f + 1 >= i.length) {
        var g = fr(a, h);
        d = !!g, d && "get" in g && !("originalValue" in g.get) ? a = g.get : a = a[h];
      } else
        d = Oi(a, h), a = a[h];
      d && !l && (Je[o] = a);
    }
  }
  return a;
}, vl = Hi, f1 = uc, lt = Zi, Sl = Gi, c1 = function(e, t, i) {
  if (!e || typeof e != "object" && typeof e != "function")
    throw new lt("`obj` must be an object or a function`");
  if (typeof t != "string" && typeof t != "symbol")
    throw new lt("`property` must be a string or a symbol`");
  if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
    throw new lt("`nonEnumerable`, if provided, must be a boolean or null");
  if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
    throw new lt("`nonWritable`, if provided, must be a boolean or null");
  if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
    throw new lt("`nonConfigurable`, if provided, must be a boolean or null");
  if (arguments.length > 6 && typeof arguments[6] != "boolean")
    throw new lt("`loose`, if provided, must be a boolean");
  var n = arguments.length > 3 ? arguments[3] : null, s = arguments.length > 4 ? arguments[4] : null, o = arguments.length > 5 ? arguments[5] : null, a = arguments.length > 6 ? arguments[6] : !1, l = !!Sl && Sl(e, t);
  if (vl)
    vl(e, t, {
      configurable: o === null && l ? l.configurable : !o,
      enumerable: n === null && l ? l.enumerable : !n,
      value: i,
      writable: s === null && l ? l.writable : !s
    });
  else if (a || !n && !s && !o)
    e[t] = i;
  else
    throw new f1("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
}, Rs = Hi, gc = function() {
  return !!Rs;
};
gc.hasArrayLengthDefineBug = function() {
  if (!Rs)
    return null;
  try {
    return Rs([], "length", { value: 1 }).length !== 1;
  } catch {
    return !0;
  }
};
var h1 = gc, d1 = mc, xl = c1, p1 = h1(), Cl = Gi, Il = Zi, m1 = d1("%Math.floor%"), g1 = function(e, t) {
  if (typeof e != "function")
    throw new Il("`fn` is not a function");
  if (typeof t != "number" || t < 0 || t > 4294967295 || m1(t) !== t)
    throw new Il("`length` must be a positive 32-bit integer");
  var i = arguments.length > 2 && !!arguments[2], n = !0, s = !0;
  if ("length" in e && Cl) {
    var o = Cl(e, "length");
    o && !o.configurable && (n = !1), o && !o.writable && (s = !1);
  }
  return (n || s || !i) && (p1 ? xl(
    /** @type {Parameters<define>[0]} */
    e,
    "length",
    t,
    !0,
    !0
  ) : xl(
    /** @type {Parameters<define>[0]} */
    e,
    "length",
    t
  )), e;
}, y1 = vr, w1 = ho, b1 = hc, _1 = function() {
  return b1(y1, w1, arguments);
};
(function(r) {
  var e = g1, t = Hi, i = po, n = _1;
  r.exports = function(o) {
    var a = i(arguments), l = o.length - (arguments.length - 1);
    return e(
      a,
      1 + (l > 0 ? l : 0),
      !0
    );
  }, t ? t(r.exports, "apply", { value: n }) : r.exports.apply = n;
})(ac);
var v1 = ac.exports, yc = mc, wc = po, S1 = wc([yc("%String.prototype.indexOf%")]), x1 = function(e, t) {
  var i = (
    /** @type {Parameters<typeof callBindBasic>[0][0]} */
    yc(e, !!t)
  );
  return typeof i == "function" && S1(e, ".prototype.") > -1 ? wc([i]) : i;
}, ti = (typeof JSON < "u" ? JSON : Vb()).stringify, C1 = Jb, I1 = Qb, A1 = v1, Vi = x1, Al = Vi("Array.prototype.join"), El = Vi("Array.prototype.indexOf"), E1 = Vi("Array.prototype.splice"), O1 = Vi("Array.prototype.sort"), Ol = function(e, t) {
  for (var i = "", n = 0; n < e; n += 1)
    i += t;
  return i;
}, R1 = function(r, e, t) {
  return t;
}, k1 = function(e) {
  var t = arguments.length > 1 ? arguments[1] : void 0, i = t && t.space || "";
  typeof i == "number" && (i = Ol(i, " "));
  var n = !!t && typeof t.cycles == "boolean" && t.cycles, s = t && t.replacer ? A1(t.replacer) : R1, o = typeof t == "function" ? t : t && t.cmp, a = o && function(u) {
    var f = (
      /** @type {NonNullable<typeof cmpOpt>} */
      o.length > 2 && /** @type {import('.').Getter['get']} */
      function(h) {
        return u[h];
      }
    );
    return function(d, h) {
      return (
        /** @type {NonNullable<typeof cmpOpt>} */
        o(
          { key: d, value: u[d] },
          { key: h, value: u[h] },
          // @ts-expect-error TS doesn't understand the optimization used here
          f ? (
            /** @type {import('.').Getter} */
            { __proto__: null, get: f }
          ) : void 0
        )
      );
    };
  }, l = [];
  return (
    /** @type {(parent: import('.').Node, key: string | number, node: unknown, level: number) => string | undefined} */
    function u(f, d, h, c) {
      var p = i ? `
` + Ol(c, i) : "", g = i ? ": " : ":";
      if (h && /** @type {{ toJSON?: unknown }} */
      h.toJSON && typeof /** @type {{ toJSON?: unknown }} */
      h.toJSON == "function" && (h = /** @type {{ toJSON: Function }} */
      h.toJSON()), h = s(f, d, h), h !== void 0) {
        if (typeof h != "object" || h === null)
          return ti(h);
        if (C1(h)) {
          for (var y = [], m = 0; m < h.length; m++) {
            var b = u(h, m, h[m], c + 1) || ti(null);
            y[y.length] = p + i + b;
          }
          return "[" + Al(y, ",") + p + "]";
        }
        if (El(l, h) !== -1) {
          if (n)
            return ti("__cycle__");
          throw new TypeError("Converting circular structure to JSON");
        } else
          l[l.length] = /** @type {import('.').NonArrayNode} */
          h;
        for (var _ = O1(I1(h), a && a(
          /** @type {import('.').NonArrayNode} */
          h
        )), y = [], m = 0; m < _.length; m++) {
          var d = _[m], w = u(
            /** @type {import('.').Node} */
            h,
            d,
            /** @type {import('.').NonArrayNode} */
            h[d],
            c + 1
          );
          if (w) {
            var S = ti(d) + g + w;
            y[y.length] = p + i + S;
          }
        }
        return E1(l, El(l, h), 1), "{" + Al(y, ",") + p + "}";
      }
    }({ "": e }, "", e, 0)
  );
};
const $1 = /* @__PURE__ */ Zb(k1);
class M1 {
  constructor(e, t) {
    this.events = [], this.sessionId = e, this.trackServerUrl = t, setInterval(() => this.submit(), 5 * 1e3);
  }
  start() {
    _r({
      emit: (e) => {
        this.events.push(e);
      }
    });
  }
  async submit() {
    if (this.events.length === 0)
      return;
    const e = yp.gzip($1(this.events));
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
class N1 {
  constructor(e, t) {
    this.sessionInfoId = e, this.errorLogServerUrl = t, this.initialize();
  }
  initialize() {
    window.addEventListener("error", (e) => this.logError(e, "unhandled-error")), window.addEventListener("unhandledrejection", (e) => this.logError(e, "unhandled-rejection"));
  }
  async logError(e, t) {
    var l, u, f;
    const i = t === "unhandled-rejection" ? ((l = e.reason) == null ? void 0 : l.message) || "Unknown promise rejection" : e.message || "Unknown error", n = t === "unhandled-rejection" ? ((u = e.reason) == null ? void 0 : u.stack) || "No stack trace available" : ((f = e.error) == null ? void 0 : f.stack) || "No stack trace available", s = t === "unhandled-rejection" ? document.location.href : e.filename || document.location.href, o = document.location.href, a = {
      sessionInfoId: this.sessionInfoId,
      errorPayload: i,
      stackTrace: n,
      routePath: o,
      originPath: s,
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
    } catch (d) {
      console.error("Failed to log error to server:", d);
    }
  }
}
const mt = class mt {
  constructor(e, t) {
    if (mt.instance)
      return mt.instance;
    this.sessionId = e, this.trackServerUrl = t, this.networkLogs = Array(), this.originalFetch = typeof window < "u" ? window.fetch : null, setTimeout(() => {
      this.attachXMLHttpRequestInterceptor(), this.attachFetchInterceptor();
    }, 700), setInterval(() => {
      this.pushNetworkLog();
    }, 5e3), mt.instance = this;
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
    XMLHttpRequest.prototype.open = function(n, s) {
      this.__relay_method = n, this.__relay_url = s, this.__relay_start = Date.now(), e.apply(this, arguments);
    };
    const i = this;
    XMLHttpRequest.prototype.send = function(n) {
      const s = this;
      s.__payload = n;
      const o = s.status;
      s.addEventListener("loadend", function() {
        const a = Date.now() - s.__relay_start, l = {
          method: s.__relay_method,
          url: s.__relay_url,
          body: s.__payload,
          statusCode: o,
          timeTaken: a,
          sessionInfoId: i.sessionId
        };
        s.__relay_url.includes(i.trackServerUrl) || i.networkLogs.push(l);
      }), t.apply(this, arguments);
    };
  }
  attachFetchInterceptor() {
    if (this.originalFetch) {
      const e = this, t = this.originalFetch;
      window.fetch = async function(...i) {
        const [n, s] = i, o = (s == null ? void 0 : s.method) || "GET", a = (s == null ? void 0 : s.body) || null, l = Date.now(), u = await t.apply(this, i), f = Date.now() - l, d = u.status, h = u.headers.get("content-type"), c = {
          url: n,
          method: o,
          body: a,
          timeTaken: f,
          statusCode: d,
          sessionInfoId: e.sessionId,
          contentType: h
        };
        return n.includes(e.trackServerUrl) || e.networkLogs.push(c), u;
      };
    }
  }
};
Ki(mt, "instance");
let ks = mt;
const gt = class gt {
  constructor(e, t) {
    if (gt.instance)
      return gt.instance;
    this.projectId = t, this.sessionId = null, this.trackServerUrl = e, this.getOrCreateSession().then(() => {
      this.interceptor = new ks(this.sessionId, this.trackServerUrl), this.sessionReplay = new M1(this.sessionId, this.trackServerUrl), this.errorTracker = new N1(this.sessionId, this.trackServerUrl), this.sessionReplay.start(), gt.instance = this;
    });
  }
  getOrCreateSession() {
    return new Promise((e, t) => {
      console.log("Getting or creating session");
      const i = localStorage.getItem("relayActivityTime"), n = localStorage.getItem("relaySessionId");
      if (n && i && (/* @__PURE__ */ new Date()).getTime() - i < 0.5 * 60 * 60 * 1e3) {
        console.log("Session found in local storage"), this.sessionId = n, e(this.sessionId);
        return;
      }
      fetch(`${this.trackServerUrl}/api/session_info/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ projectId: this.projectId, session: "session" })
      }).then((o) => o.json()).then((o) => {
        console.log("Session created", o), this.sessionId = o.sessionId, localStorage.setItem("relaySessionId", this.sessionId), localStorage.setItem("relayActivityTime", (/* @__PURE__ */ new Date()).getTime()), e(this.sessionId);
      }).catch((o) => {
        console.error("Failed to create session", o), t(o);
      });
    });
  }
  identify(e) {
    console.log("Identifying user with ", e), fetch(`${this.trackServerUrl}/api/session_info/${this.sessionId}/`, {
      method: "PATCH",
      body: JSON.stringify(e)
    });
  }
};
Ki(gt, "instance");
let $s = gt;
function d_(r, e) {
  return new $s(r, e);
}
export {
  d_ as trackEvent
};
