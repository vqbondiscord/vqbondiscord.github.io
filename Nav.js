function A() {}
function J(e) {
    return e()
}
function U() {
    return Object.create(null)
}
function H(e) {
    e.forEach(J)
}
function Q(e) {
    return typeof e == "function"
}
function ie(e, t) {
    return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function"
}
function le(e) {
    return Object.keys(e).length === 0
}
let I = !1;
function re() {
    I = !0
}
function ce() {
    I = !1
}
function oe(e, t, n, i) {
    for (; e < t; ) {
        const l = e + (t - e >> 1);
        n(l) <= i ? e = l + 1 : t = l
    }
    return e
}
function ae(e) {
    if (e.hydrate_init)
        return;
    e.hydrate_init = !0;
    let t = e.childNodes;
    if (e.nodeName === "HEAD") {
        const r = [];
        for (let c = 0; c < t.length; c++) {
            const u = t[c];
            u.claim_order !== void 0 && r.push(u)
        }
        t = r
    }
    const n = new Int32Array(t.length + 1)
      , i = new Int32Array(t.length);
    n[0] = -1;
    let l = 0;
    for (let r = 0; r < t.length; r++) {
        const c = t[r].claim_order
          , u = (l > 0 && t[n[l]].claim_order <= c ? l + 1 : oe(1, l, v => t[n[v]].claim_order, c)) - 1;
        i[r] = n[u] + 1;
        const h = u + 1;
        n[h] = r,
        l = Math.max(h, l)
    }
    const a = []
      , o = [];
    let s = t.length - 1;
    for (let r = n[l] + 1; r != 0; r = i[r - 1]) {
        for (a.push(t[r - 1]); s >= r; s--)
            o.push(t[s]);
        s--
    }
    for (; s >= 0; s--)
        o.push(t[s]);
    a.reverse(),
    o.sort( (r, c) => r.claim_order - c.claim_order);
    for (let r = 0, c = 0; r < o.length; r++) {
        for (; c < a.length && o[r].claim_order >= a[c].claim_order; )
            c++;
        const u = c < a.length ? a[c] : null;
        e.insertBefore(o[r], u)
    }
}
function b(e, t) {
    if (I) {
        for (ae(e),
        (e.actual_end_child === void 0 || e.actual_end_child !== null && e.actual_end_child.parentNode !== e) && (e.actual_end_child = e.firstChild); e.actual_end_child !== null && e.actual_end_child.claim_order === void 0; )
            e.actual_end_child = e.actual_end_child.nextSibling;
        t !== e.actual_end_child ? (t.claim_order !== void 0 || t.parentNode !== e) && e.insertBefore(t, e.actual_end_child) : e.actual_end_child = t.nextSibling
    } else
        (t.parentNode !== e || t.nextSibling !== null) && e.appendChild(t)
}
function j(e, t, n) {
    I && !n ? b(e, t) : (t.parentNode !== e || t.nextSibling != n) && e.insertBefore(t, n || null)
}
function p(e) {
    e.parentNode && e.parentNode.removeChild(e)
}
function x(e) {
    return document.createElement(e)
}
function D(e) {
    return document.createElementNS("http://www.w3.org/2000/svg", e)
}
function X(e) {
    return document.createTextNode(e)
}
function M() {
    return X(" ")
}
function Y(e, t, n, i) {
    return e.addEventListener(t, n, i),
    () => e.removeEventListener(t, n, i)
}
function f(e, t, n) {
    n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n)
}
function Z(e) {
    return e.dataset.svelteH
}
function y(e) {
    return Array.from(e.childNodes)
}
function se(e) {
    e.claim_info === void 0 && (e.claim_info = {
        last_index: 0,
        total_claimed: 0
    })
}
function ee(e, t, n, i, l=!1) {
    se(e);
    const a = ( () => {
        for (let o = e.claim_info.last_index; o < e.length; o++) {
            const s = e[o];
            if (t(s)) {
                const r = n(s);
                return r === void 0 ? e.splice(o, 1) : e[o] = r,
                l || (e.claim_info.last_index = o),
                s
            }
        }
        for (let o = e.claim_info.last_index - 1; o >= 0; o--) {
            const s = e[o];
            if (t(s)) {
                const r = n(s);
                return r === void 0 ? e.splice(o, 1) : e[o] = r,
                l ? r === void 0 && e.claim_info.last_index-- : e.claim_info.last_index = o,
                s
            }
        }
        return i()
    }
    )();
    return a.claim_order = e.claim_info.total_claimed,
    e.claim_info.total_claimed += 1,
    a
}
function te(e, t, n, i) {
    return ee(e, l => l.nodeName === t, l => {
        const a = [];
        for (let o = 0; o < l.attributes.length; o++) {
            const s = l.attributes[o];
            n[s.name] || a.push(s.name)
        }
        a.forEach(o => l.removeAttribute(o))
    }
    , () => i(t))
}
function k(e, t, n) {
    return te(e, t, n, x)
}
function q(e, t, n) {
    return te(e, t, n, D)
}
function fe(e, t) {
    return ee(e, n => n.nodeType === 3, n => {
        const i = "" + t;
        if (n.data.startsWith(i)) {
            if (n.data.length !== i.length)
                return n.splitText(i.length)
        } else
            n.data = i
    }
    , () => X(t), !0)
}
function C(e) {
    return fe(e, " ")
}
let P;
function z(e) {
    P = e
}
const N = []
  , K = [];
let S = [];
const W = []
  , ue = Promise.resolve();
let O = !1;
function de() {
    O || (O = !0,
    ue.then(ne))
}
function V(e) {
    S.push(e)
}
const B = new Set;
let E = 0;
function ne() {
    if (E !== 0)
        return;
    const e = P;
    do {
        try {
            for (; E < N.length; ) {
                const t = N[E];
                E++,
                z(t),
                he(t.$$)
            }
        } catch (t) {
            throw N.length = 0,
            E = 0,
            t
        }
        for (z(null),
        N.length = 0,
        E = 0; K.length; )
            K.pop()();
        for (let t = 0; t < S.length; t += 1) {
            const n = S[t];
            B.has(n) || (B.add(n),
            n())
        }
        S.length = 0
    } while (N.length);
    for (; W.length; )
        W.pop()();
    O = !1,
    B.clear(),
    z(e)
}
function he(e) {
    if (e.fragment !== null) {
        e.update(),
        H(e.before_update);
        const t = e.dirty;
        e.dirty = [-1],
        e.fragment && e.fragment.p(e.ctx, t),
        e.after_update.forEach(V)
    }
}
function _e(e) {
    const t = []
      , n = [];
    S.forEach(i => e.indexOf(i) === -1 ? t.push(i) : n.push(i)),
    n.forEach(i => i()),
    S = t
}
const me = new Set;
function pe(e, t) {
    e && e.i && (me.delete(e),
    e.i(t))
}
function be(e, t, n) {
    const {fragment: i, after_update: l} = e.$$;
    i && i.m(t, n),
    V( () => {
        const a = e.$$.on_mount.map(J).filter(Q);
        e.$$.on_destroy ? e.$$.on_destroy.push(...a) : H(a),
        e.$$.on_mount = []
    }
    ),
    l.forEach(V)
}
function ve(e, t) {
    const n = e.$$;
    n.fragment !== null && (_e(n.after_update),
    H(n.on_destroy),
    n.fragment && n.fragment.d(t),
    n.on_destroy = n.fragment = null,
    n.ctx = [])
}
function ge(e, t) {
    e.$$.dirty[0] === -1 && (N.push(e),
    de(),
    e.$$.dirty.fill(0)),
    e.$$.dirty[t / 31 | 0] |= 1 << t % 31
}
function xe(e, t, n, i, l, a, o=null, s=[-1]) {
    const r = P;
    z(e);
    const c = e.$$ = {
        fragment: null,
        ctx: [],
        props: a,
        update: A,
        not_equal: l,
        bound: U(),
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(t.context || (r ? r.$$.context : [])),
        callbacks: U(),
        dirty: s,
        skip_bound: !1,
        root: t.target || r.$$.root
    };
    o && o(c.root);
    let u = !1;
    if (c.ctx = n ? n(e, t.props || {}, (h, v, ...$) => {
        const T = $.length ? $[0] : v;
        return c.ctx && l(c.ctx[h], c.ctx[h] = T) && (!c.skip_bound && c.bound[h] && c.bound[h](T),
        u && ge(e, h)),
        v
    }
    ) : [],
    c.update(),
    u = !0,
    H(c.before_update),
    c.fragment = i ? i(c.ctx) : !1,
    t.target) {
        if (t.hydrate) {
            re();
            const h = y(t.target);
            c.fragment && c.fragment.l(h),
            h.forEach(p)
        } else
            c.fragment && c.fragment.c();
        t.intro && pe(e.$$.fragment),
        be(e, t.target, t.anchor),
        ce(),
        ne()
    }
    z(r)
}
class ye {
    $$ = void 0;
    $$set = void 0;
    $destroy() {
        ve(this, 1),
        this.$destroy = A
    }
    $on(t, n) {
        if (!Q(n))
            return A;
        const i = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
        return i.push(n),
        () => {
            const l = i.indexOf(n);
            l !== -1 && i.splice(l, 1)
        }
    }
    $set(t) {
        this.$$set && !le(t) && (this.$$.skip_bound = !0,
        this.$$set(t),
        this.$$.skip_bound = !1)
    }
}
const ke = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = {
    v: new Set
})).v.add(ke);
function F(e) {
    let t, n = '<a href="https://roblox.fandom.com/wiki/Da_Hood_Entertainment/Da_Hood" class="hover:bg-zinc-950 p-4 rounded">About</a> <a href="/tos" class="hover:bg-zinc-950 p-4 rounded">Terms of Service</a> <a href="https://romarket.co/" class="hover:bg-zinc-950 p-4 rounded">RoMarket</a> <a href="/screenshare-tool" class="hover:bg-zinc-950 p-4 rounded">ScreenShare Tool</a> <a href="https://45yr5h-git-main-snyes.vercel.app/" class="hover:bg-zinc-950 p-4 rounded">Link Validator</a>';
    return {
        c() {
            t = x("div"),
            t.innerHTML = n,
            this.h()
        },
        l(i) {
            t = k(i, "DIV", {
                class: !0,
                "data-svelte-h": !0
            }),
            Z(t) !== "svelte-139li6i" && (t.innerHTML = n),
            this.h()
        },
        h() {
            f(t, "class", "absolute z-[1000] bg-zinc-900 flex flex-col rounded transform -translate-x-full w-[200px]")
        },
        m(i, l) {
            j(i, t, l)
        },
        d(i) {
            i && p(t)
        }
    }
}
function G(e) {
    let t, n, i;
    return {
        c() {
            t = x("div"),
            this.h()
        },
        l(l) {
            t = k(l, "DIV", {
                role: !0,
                tabindex: !0,
                class: !0
            }),
            y(t).forEach(p),
            this.h()
        },
        h() {
            f(t, "role", "button"),
            f(t, "tabindex", "-1"),
            f(t, "class", "fixed inset-0 z-10 bg-black opacity-50")
        },
        m(l, a) {
            j(l, t, a),
            n || (i = Y(t, "click", e[2]),
            n = !0)
        },
        p: A,
        d(l) {
            l && p(t),
            n = !1,
            i()
        }
    }
}
function $e(e) {
    let t, n, i, l, a, o = '<img src="/dahood-removebg-preview.png" alt="" class="h-8"/>', s, r, c, u, h, v, $, T, _ = e[0] && F(), d = e[0] && G(e);
    return {
        c() {
            t = x("link"),
            n = M(),
            i = x("div"),
            l = x("nav"),
            a = x("a"),
            a.innerHTML = o,
            s = M(),
            r = x("button"),
            c = D("svg"),
            u = D("path"),
            h = M(),
            _ && _.c(),
            v = M(),
            d && d.c(),
            this.h()
        },
        l(m) {
            t = k(m, "LINK", {
                rel: !0,
                href: !0,
                type: !0
            }),
            n = C(m),
            i = k(m, "DIV", {});
            var g = y(i);
            l = k(g, "NAV", {
                class: !0
            });
            var w = y(l);
            a = k(w, "A", {
                href: !0,
                class: !0,
                "data-svelte-h": !0
            }),
            Z(a) !== "svelte-1awz79c" && (a.innerHTML = o),
            s = C(w),
            r = k(w, "BUTTON", {
                class: !0
            });
            var L = y(r);
            c = q(L, "svg", {
                class: !0,
                fill: !0,
                stroke: !0,
                viewBox: !0,
                xmlns: !0
            });
            var R = y(c);
            u = q(R, "path", {
                "stroke-linecap": !0,
                "stroke-linejoin": !0,
                "stroke-width": !0,
                d: !0
            }),
            y(u).forEach(p),
            R.forEach(p),
            h = C(L),
            _ && _.l(L),
            L.forEach(p),
            v = C(w),
            d && d.l(w),
            w.forEach(p),
            g.forEach(p),
            this.h()
        },
        h() {
            f(t, "rel", "icon"),
            f(t, "href", "/fav.png"),
            f(t, "type", "image/png"),
            f(a, "href", "/"),
            f(a, "class", "text-2xl font-bold"),
            f(u, "stroke-linecap", "round"),
            f(u, "stroke-linejoin", "round"),
            f(u, "stroke-width", "2"),
            f(u, "d", "M4 6h16M4 12h16m-7 6h7"),
            f(c, "class", "w-6 h-6"),
            f(c, "fill", "none"),
            f(c, "stroke", "currentColor"),
            f(c, "viewBox", "0 0 24 24"),
            f(c, "xmlns", "http://www.w3.org/2000/svg"),
            f(r, "class", "cursor-pointer relative"),
            f(l, "class", "max-w-[1500px] p-4 mx-auto flex justify-between")
        },
        m(m, g) {
            j(m, t, g),
            j(m, n, g),
            j(m, i, g),
            b(i, l),
            b(l, a),
            b(l, s),
            b(l, r),
            b(r, c),
            b(c, u),
            b(r, h),
            _ && _.m(r, null),
            b(l, v),
            d && d.m(l, null),
            $ || (T = Y(r, "click", e[1]),
            $ = !0)
        },
        p(m, [g]) {
            m[0] ? _ || (_ = F(),
            _.c(),
            _.m(r, null)) : _ && (_.d(1),
            _ = null),
            m[0] ? d ? d.p(m, g) : (d = G(m),
            d.c(),
            d.m(l, null)) : d && (d.d(1),
            d = null)
        },
        i: A,
        o: A,
        d(m) {
            m && (p(t),
            p(n),
            p(i)),
            _ && _.d(),
            d && d.d(),
            $ = !1,
            T()
        }
    }
}
function we(e, t, n) {
    let i = !1;
    return [i, () => n(0, i = !i), () => n(0, i = !1)]
}
class Ee extends ye {
    constructor(t) {
        super(),
        xe(this, t, we, $e, ie, {})
    }
}
export {Ee as default};
