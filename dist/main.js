/*! For license information please see main.js.LICENSE.txt */ ! function () {
    "use strict";
    var e, t, r, n = {
            697: function (e, t, r) {
                r(294), r(935);
                const {
                    merge: n
                } = r(561);
                document.body.appendChild(((e = "Hello world") => {
                    const t = document.createElement("div");
                    return t.className = "rounded bg-red-100 border max-w-md m-4 p-4", t.innerHTML = e, t.onclick = () => r.e(34).then(r.bind(r, 34)).then((e => {
                        t.textContent = e.default
                    })).catch((e => console.error(e))), t
                })())
            }
        },
        o = {};

    function i(e) {
        var t = o[e];
        if (void 0 !== t) return t.exports;
        var r = o[e] = {
            exports: {}
        };
        return n[e].call(r.exports, r, r.exports, i), r.exports
    }
    i.m = n, e = [], i.O = function (t, r, n, o) {
            if (!r) {
                var c = 1 / 0;
                for (l = 0; l < e.length; l++) {
                    r = e[l][0], n = e[l][1], o = e[l][2];
                    for (var u = !0, a = 0; a < r.length; a++)(!1 & o || c >= o) && Object.keys(i.O).every((function (e) {
                        return i.O[e](r[a])
                    })) ? r.splice(a--, 1) : (u = !1, o < c && (c = o));
                    u && (e.splice(l--, 1), t = n())
                }
                return t
            }
            o = o || 0;
            for (var l = e.length; l > 0 && e[l - 1][2] > o; l--) e[l] = e[l - 1];
            e[l] = [r, n, o]
        }, i.f = {}, i.e = function (e) {
            return Promise.all(Object.keys(i.f).reduce((function (t, r) {
                return i.f[r](e, t), t
            }), []))
        }, i.u = function (e) {
            return e + ".js"
        }, i.miniCssF = function (e) {}, i.g = function () {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" == typeof window) return window
            }
        }(), i.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t = {}, r = "webpack-demo:", i.l = function (e, n, o, c) {
            if (t[e]) t[e].push(n);
            else {
                var u, a;
                if (void 0 !== o)
                    for (var l = document.getElementsByTagName("script"), f = 0; f < l.length; f++) {
                        var s = l[f];
                        if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == r + o) {
                            u = s;
                            break
                        }
                    }
                u || (a = !0, (u = document.createElement("script")).charset = "utf-8", u.timeout = 120, i.nc && u.setAttribute("nonce", i.nc), u.setAttribute("data-webpack", r + o), u.src = e), t[e] = [n];
                var d = function (r, n) {
                        u.onerror = u.onload = null, clearTimeout(p);
                        var o = t[e];
                        if (delete t[e], u.parentNode && u.parentNode.removeChild(u), o && o.forEach((function (e) {
                                return e(n)
                            })), r) return r(n)
                    },
                    p = setTimeout(d.bind(null, void 0, {
                        type: "timeout",
                        target: u
                    }), 12e4);
                u.onerror = d.bind(null, u.onerror), u.onload = d.bind(null, u.onload), a && document.head.appendChild(u)
            }
        }, i.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        function () {
            var e;
            i.g.importScripts && (e = i.g.location + "");
            var t = i.g.document;
            if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
                var r = t.getElementsByTagName("script");
                r.length && (e = r[r.length - 1].src)
            }
            if (!e) throw new Error("Automatic publicPath is not supported in this browser");
            e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), i.p = e
        }(),
        function () {
            var e = {
                179: 0
            };
            i.f.j = function (t, r) {
                var n = i.o(e, t) ? e[t] : void 0;
                if (0 !== n)
                    if (n) r.push(n[2]);
                    else {
                        var o = new Promise((function (r, o) {
                            n = e[t] = [r, o]
                        }));
                        r.push(n[2] = o);
                        var c = i.p + i.u(t),
                            u = new Error;
                        i.l(c, (function (r) {
                            if (i.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0), n)) {
                                var o = r && ("load" === r.type ? "missing" : r.type),
                                    c = r && r.target && r.target.src;
                                u.message = "Loading chunk " + t + " failed.\n(" + o + ": " + c + ")", u.name = "ChunkLoadError", u.type = o, u.request = c, n[1](u)
                            }
                        }), "chunk-" + t, t)
                    }
            }, i.O.j = function (t) {
                return 0 === e[t]
            };
            var t = function (t, r) {
                    var n, o, c = r[0],
                        u = r[1],
                        a = r[2],
                        l = 0;
                    for (n in u) i.o(u, n) && (i.m[n] = u[n]);
                    if (a) var f = a(i);
                    for (t && t(r); l < c.length; l++) o = c[l], i.o(e, o) && e[o] && e[o][0](), e[c[l]] = 0;
                    return i.O(f)
                },
                r = self.webpackChunkwebpack_demo = self.webpackChunkwebpack_demo || [];
            r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        }();
    var c = i.O(void 0, [736], (function () {
        return i(697)
    }));
    c = i.O(c)
}();