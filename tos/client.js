const r = () => {}
;
const f = t => (s, e, n, {client: a}) => {
    if (!t.hasAttribute("ssr"))
        return;
    const i = {};
    for (const [o,l] of Object.entries(n))
        i[o] = c(o, l);
    try {
        const o = new s({
            target: t,
            props: {
                ...e,
                $$slots: i,
                $$scope: {
                    ctx: []
                }
            },
            hydrate: a !== "only",
            $$inline: !0
        });
        t.addEventListener("astro:unmount", () => o.$destroy(), {
            once: !0
        })
    } finally {}
}
;
function c(t, s) {
    let e;
    return [ () => ({
        m(n) {
            e = n,
            n.insertAdjacentHTML("beforeend", `<astro-slot${t === "default" ? "" : ` name="${t}"`}>${s}</astro-slot>`)
        },
        c: r,
        l: r,
        d() {
            if (!e)
                return;
            const n = e.querySelector(`astro-slot${t === "default" ? ":not([name])" : `[name="${t}"]`}`);
            n && n.remove()
        }
    }), r, r]
}
export {f as default};
