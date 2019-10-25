! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = "length" in e && e.length,
            n = ie.type(e);
        return "function" === n || ie.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function r(e, t, n) {
        if (ie.isFunction(t)) return ie.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return ie.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (fe.test(t)) return ie.filter(t, e, n);
            t = ie.filter(t, e)
        }
        return ie.grep(e, function(e) {
            return ie.inArray(e, t) >= 0 !== n
        })
    }

    function i(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function o(e) {
        var t = xe[e] = {};
        return ie.each(e.match(be) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function a() {
        he.addEventListener ? (he.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1)) : (he.detachEvent("onreadystatechange", s), e.detachEvent("onload", s))
    }

    function s() {
        (he.addEventListener || "load" === event.type || "complete" === he.readyState) && (a(), ie.ready())
    }

    function u(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var r = "data-" + t.replace(Ee, "-$1").toLowerCase();
            if (n = e.getAttribute(r), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Ne.test(n) ? ie.parseJSON(n) : n
                } catch (i) {}
                ie.data(e, t, n)
            } else n = void 0
        }
        return n
    }

    function l(e) {
        var t;
        for (t in e)
            if (("data" !== t || !ie.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function c(e, t, n, r) {
        if (ie.acceptData(e)) {
            var i, o, a = ie.expando,
                s = e.nodeType,
                u = s ? ie.cache : e,
                l = s ? e[a] : e[a] && a;
            if (l && u[l] && (r || u[l].data) || void 0 !== n || "string" != typeof t) return l || (l = s ? e[a] = J.pop() || ie.guid++ : a), u[l] || (u[l] = s ? {} : {
                toJSON: ie.noop
            }), ("object" == typeof t || "function" == typeof t) && (r ? u[l] = ie.extend(u[l], t) : u[l].data = ie.extend(u[l].data, t)), o = u[l], r || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[ie.camelCase(t)] = n), "string" == typeof t ? (i = o[t], null == i && (i = o[ie.camelCase(t)])) : i = o, i
        }
    }

    function d(e, t, n) {
        if (ie.acceptData(e)) {
            var r, i, o = e.nodeType,
                a = o ? ie.cache : e,
                s = o ? e[ie.expando] : ie.expando;
            if (a[s]) {
                if (t && (r = n ? a[s] : a[s].data)) {
                    ie.isArray(t) ? t = t.concat(ie.map(t, ie.camelCase)) : t in r ? t = [t] : (t = ie.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
                    for (; i--;) delete r[t[i]];
                    if (n ? !l(r) : !ie.isEmptyObject(r)) return
                }(n || (delete a[s].data, l(a[s]))) && (o ? ie.cleanData([e], !0) : ne.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
            }
        }
    }

    function f() {
        return !0
    }

    function p() {
        return !1
    }

    function h() {
        try {
            return he.activeElement
        } catch (e) {}
    }

    function m(e) {
        var t = Fe.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }

    function g(e, t) {
        var n, r, i = 0,
            o = typeof e.getElementsByTagName !== Ce ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== Ce ? e.querySelectorAll(t || "*") : void 0;
        if (!o)
            for (o = [], n = e.childNodes || e; null != (r = n[i]); i++) !t || ie.nodeName(r, t) ? o.push(r) : ie.merge(o, g(r, t));
        return void 0 === t || t && ie.nodeName(e, t) ? ie.merge([e], o) : o
    }

    function v(e) {
        je.test(e.type) && (e.defaultChecked = e.checked)
    }

    function y(e, t) {
        return ie.nodeName(e, "table") && ie.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function b(e) {
        return e.type = (null !== ie.find.attr(e, "type")) + "/" + e.type, e
    }

    function x(e) {
        var t = Ve.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function w(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++) ie._data(n, "globalEval", !t || ie._data(t[r], "globalEval"))
    }

    function T(e, t) {
        if (1 === t.nodeType && ie.hasData(e)) {
            var n, r, i, o = ie._data(e),
                a = ie._data(t, o),
                s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)
                    for (r = 0, i = s[n].length; i > r; r++) ie.event.add(t, n, s[n][r])
            }
            a.data && (a.data = ie.extend({}, a.data))
        }
    }

    function C(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !ne.noCloneEvent && t[ie.expando]) {
                i = ie._data(t);
                for (r in i.events) ie.removeEvent(t, r, i.handle);
                t.removeAttribute(ie.expando)
            }
            "script" === n && t.text !== e.text ? (b(t).text = e.text, x(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ne.html5Clone && e.innerHTML && !ie.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && je.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }

    function N(t, n) {
        var r, i = ie(n.createElement(t)).appendTo(n.body),
            o = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0])) ? r.display : ie.css(i[0], "display");
        return i.detach(), o
    }

    function E(e) {
        var t = he,
            n = Ze[e];
        return n || (n = N(e, t), "none" !== n && n || (Ke = (Ke || ie("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Ke[0].contentWindow || Ke[0].contentDocument).document, t.write(), t.close(), n = N(e, t), Ke.detach()), Ze[e] = n), n
    }

    function k(e, t) {
        return {
            get: function() {
                var n = e();
                return null != n ? n ? void delete this.get : (this.get = t).apply(this, arguments) : void 0
            }
        }
    }

    function S(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = ft.length; i--;)
            if (t = ft[i] + n, t in e) return t;
        return r
    }

    function A(e, t) {
        for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++) r = e[a], r.style && (o[a] = ie._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && Ae(r) && (o[a] = ie._data(r, "olddisplay", E(r.nodeName)))) : (i = Ae(r), (n && "none" !== n || !i) && ie._data(r, "olddisplay", i ? n : ie.css(r, "display"))));
        for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }

    function D(e, t, n) {
        var r = ut.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function j(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += ie.css(e, n + Se[o], !0, i)), r ? ("content" === n && (a -= ie.css(e, "padding" + Se[o], !0, i)), "margin" !== n && (a -= ie.css(e, "border" + Se[o] + "Width", !0, i))) : (a += ie.css(e, "padding" + Se[o], !0, i), "padding" !== n && (a += ie.css(e, "border" + Se[o] + "Width", !0, i)));
        return a
    }

    function L(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = et(e),
            a = ne.boxSizing && "border-box" === ie.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = tt(e, t, o), (0 > i || null == i) && (i = e.style[t]), rt.test(i)) return i;
            r = a && (ne.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + j(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }

    function H(e, t, n, r, i) {
        return new H.prototype.init(e, t, n, r, i)
    }

    function q() {
        return setTimeout(function() {
            pt = void 0
        }), pt = ie.now()
    }

    function _(e, t) {
        var n, r = {
                height: e
            },
            i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Se[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function M(e, t, n) {
        for (var r, i = (bt[t] || []).concat(bt["*"]), o = 0, a = i.length; a > o; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function F(e, t, n) {
        var r, i, o, a, s, u, l, c, d = this,
            f = {},
            p = e.style,
            h = e.nodeType && Ae(e),
            m = ie._data(e, "fxshow");
        n.queue || (s = ie._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function() {
            s.unqueued || u()
        }), s.unqueued++, d.always(function() {
            d.always(function() {
                s.unqueued--, ie.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], l = ie.css(e, "display"), c = "none" === l ? ie._data(e, "olddisplay") || E(e.nodeName) : l, "inline" === c && "none" === ie.css(e, "float") && (ne.inlineBlockNeedsLayout && "inline" !== E(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", ne.shrinkWrapBlocks() || d.always(function() {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (i = t[r], mt.exec(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
                    if ("show" !== i || !m || void 0 === m[r]) continue;
                    h = !0
                }
                f[r] = m && m[r] || ie.style(e, r)
            } else l = void 0;
        if (ie.isEmptyObject(f)) "inline" === ("none" === l ? E(e.nodeName) : l) && (p.display = l);
        else {
            m ? "hidden" in m && (h = m.hidden) : m = ie._data(e, "fxshow", {}), o && (m.hidden = !h), h ? ie(e).show() : d.done(function() {
                ie(e).hide()
            }), d.done(function() {
                var t;
                ie._removeData(e, "fxshow");
                for (t in f) ie.style(e, t, f[t])
            });
            for (r in f) a = M(h ? m[r] : 0, r, d), r in m || (m[r] = a.start, h && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function O(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (r = ie.camelCase(n), i = t[r], o = e[n], ie.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = ie.cssHooks[r], a && "expand" in a) {
                o = a.expand(o), delete e[r];
                for (n in o) n in e || (e[n] = o[n], t[n] = i)
            } else t[r] = i
    }

    function B(e, t, n) {
        var r, i, o = 0,
            a = yt.length,
            s = ie.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (i) return !1;
                for (var t = pt || q(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; u > a; a++) l.tweens[a].run(o);
                return s.notifyWith(e, [l, o, n]), 1 > o && u ? n : (s.resolveWith(e, [l]), !1)
            },
            l = s.promise({
                elem: e,
                props: ie.extend({}, t),
                opts: ie.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: pt || q(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = ie.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) l.tweens[n].run(1);
                    return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this
                }
            }),
            c = l.props;
        for (O(c, l.opts.specialEasing); a > o; o++)
            if (r = yt[o].call(l, e, c, l.opts)) return r;
        return ie.map(c, M, l), ie.isFunction(l.opts.start) && l.opts.start.call(e, l), ie.fx.timer(ie.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function P(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(be) || [];
            if (ie.isFunction(n))
                for (; r = o[i++];) "+" === r.charAt(0) ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function R(e, t, n, r) {
        function i(s) {
            var u;
            return o[s] = !0, ie.each(e[s] || [], function(e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
            }), u
        }
        var o = {},
            a = e === zt;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }

    function W(e, t) {
        var n, r, i = ie.ajaxSettings.flatOptions || {};
        for (r in t) void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
        return n && ie.extend(!0, e, n), e
    }

    function $(e, t, n) {
        for (var r, i, o, a, s = e.contents, u = e.dataTypes;
            "*" === u[0];) u.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (a in s)
                if (s[a] && s[a].test(i)) {
                    u.unshift(a);
                    break
                }
        if (u[0] in n) o = u[0];
        else {
            for (a in n) {
                if (!u[0] || e.converters[a + " " + u[0]]) {
                    o = a;
                    break
                }
                r || (r = a)
            }
            o = o || r
        }
        return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
    }

    function z(e, t, n, r) {
        var i, o, a, s, u, l = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
        for (o = c.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) {
            if (a = l[u + " " + o] || l["* " + o], !a)
                for (i in l)
                    if (s = i.split(" "), s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                        a === !0 ? a = l[i] : l[i] !== !0 && (o = s[0], c.unshift(s[1]));
                        break
                    }
            if (a !== !0)
                if (a && e["throws"]) t = a(t);
                else try {
                    t = a(t)
                } catch (d) {
                    return {
                        state: "parsererror",
                        error: a ? d : "No conversion from " + u + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function I(e, t, n, r) {
        var i;
        if (ie.isArray(t)) ie.each(t, function(t, i) {
            n || Vt.test(e) ? r(e, i) : I(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== ie.type(t)) r(e, t);
        else
            for (i in t) I(e + "[" + i + "]", t[i], n, r)
    }

    function X() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function U() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function V(e) {
        return ie.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var J = [],
        Y = J.slice,
        G = J.concat,
        Q = J.push,
        K = J.indexOf,
        Z = {},
        ee = Z.toString,
        te = Z.hasOwnProperty,
        ne = {},
        re = "1.11.3",
        ie = function(e, t) {
            return new ie.fn.init(e, t)
        },
        oe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ae = /^-ms-/,
        se = /-([\da-z])/gi,
        ue = function(e, t) {
            return t.toUpperCase()
        };
    ie.fn = ie.prototype = {
        jquery: re,
        constructor: ie,
        selector: "",
        length: 0,
        toArray: function() {
            return Y.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : Y.call(this)
        },
        pushStack: function(e) {
            var t = ie.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return ie.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(ie.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(Y.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: Q,
        sort: J.sort,
        splice: J.splice
    }, ie.extend = ie.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || ie.isFunction(a) || (a = {}), s === u && (a = this, s--); u > s; s++)
            if (null != (i = arguments[s]))
                for (r in i) e = a[r], n = i[r], a !== n && (l && n && (ie.isPlainObject(n) || (t = ie.isArray(n))) ? (t ? (t = !1, o = e && ie.isArray(e) ? e : []) : o = e && ie.isPlainObject(e) ? e : {}, a[r] = ie.extend(l, o, n)) : void 0 !== n && (a[r] = n));
        return a
    }, ie.extend({
        expando: "jQuery" + (re + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === ie.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === ie.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return !ie.isArray(e) && e - parseFloat(e) + 1 >= 0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== ie.type(e) || e.nodeType || ie.isWindow(e)) return !1;
            try {
                if (e.constructor && !te.call(e, "constructor") && !te.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            if (ne.ownLast)
                for (t in e) return te.call(e, t);
            for (t in e);
            return void 0 === t || te.call(e, t)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Z[ee.call(e)] || "object" : typeof e
        },
        globalEval: function(t) {
            t && ie.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(ae, "ms-").replace(se, ue)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, r) {
            var i, o = 0,
                a = e.length,
                s = n(e);
            if (r) {
                if (s)
                    for (; a > o && (i = t.apply(e[o], r), i !== !1); o++);
                else
                    for (o in e)
                        if (i = t.apply(e[o], r), i === !1) break
            } else if (s)
                for (; a > o && (i = t.call(e[o], o, e[o]), i !== !1); o++);
            else
                for (o in e)
                    if (i = t.call(e[o], o, e[o]), i === !1) break; return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(oe, "")
        },
        makeArray: function(e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? ie.merge(r, "string" == typeof e ? [e] : e) : Q.call(r, e)), r
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (K) return K.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; n > r;) e[i++] = t[r++];
            if (n !== n)
                for (; void 0 !== t[r];) e[i++] = t[r++];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r, i = [], o = 0, a = e.length, s = !n; a > o; o++) r = !t(e[o], o), r !== s && i.push(e[o]);
            return i
        },
        map: function(e, t, r) {
            var i, o = 0,
                a = e.length,
                s = n(e),
                u = [];
            if (s)
                for (; a > o; o++) i = t(e[o], o, r), null != i && u.push(i);
            else
                for (o in e) i = t(e[o], o, r), null != i && u.push(i);
            return G.apply([], u)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, i;
            return "string" == typeof t && (i = e[t], t = e, e = i), ie.isFunction(e) ? (n = Y.call(arguments, 2), r = function() {
                return e.apply(t || this, n.concat(Y.call(arguments)))
            }, r.guid = e.guid = e.guid || ie.guid++, r) : void 0
        },
        now: function() {
            return +new Date
        },
        support: ne
    }), ie.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        Z["[object " + t + "]"] = t.toLowerCase()
    });
    var le = function(e) {
        function t(e, t, n, r) {
            var i, o, a, s, u, l, d, p, h, m;
            if ((t ? t.ownerDocument || t : R) !== H && L(t), t = t || H, n = n || [], s = t.nodeType, "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s) return n;
            if (!r && _) {
                if (11 !== s && (i = ye.exec(e)))
                    if (a = i[1]) {
                        if (9 === s) {
                            if (o = t.getElementById(a), !o || !o.parentNode) return n;
                            if (o.id === a) return n.push(o), n
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && B(t, o) && o.id === a) return n.push(o), n
                    } else {
                        if (i[2]) return K.apply(n, t.getElementsByTagName(e)), n;
                        if ((a = i[3]) && w.getElementsByClassName) return K.apply(n, t.getElementsByClassName(a)), n
                    }
                if (w.qsa && (!M || !M.test(e))) {
                    if (p = d = P, h = t, m = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (l = E(e), (d = t.getAttribute("id")) ? p = d.replace(xe, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", u = l.length; u--;) l[u] = p + f(l[u]);
                        h = be.test(e) && c(t.parentNode) || t, m = l.join(",")
                    }
                    if (m) try {
                        return K.apply(n, h.querySelectorAll(m)), n
                    } catch (g) {} finally {
                        d || t.removeAttribute("id")
                    }
                }
            }
            return S(e.replace(ue, "$1"), t, n, r)
        }

        function n() {
            function e(n, r) {
                return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = r
            }
            var t = [];
            return e
        }

        function r(e) {
            return e[P] = !0, e
        }

        function i(e) {
            var t = H.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), r = e.length; r--;) T.attrHandle[n[r]] = t
        }

        function a(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function u(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function l(e) {
            return r(function(t) {
                return t = +t, r(function(n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function c(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function d() {}

        function f(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
            return r
        }

        function p(e, t, n) {
            var r = t.dir,
                i = n && "parentNode" === r,
                o = $++;
            return t.first ? function(t, n, o) {
                for (; t = t[r];)
                    if (1 === t.nodeType || i) return e(t, n, o)
            } : function(t, n, a) {
                var s, u, l = [W, o];
                if (a) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || i) && e(t, n, a)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || i) {
                            if (u = t[P] || (t[P] = {}), (s = u[r]) && s[0] === W && s[1] === o) return l[2] = s[2];
                            if (u[r] = l, l[2] = e(t, n, a)) return !0
                        }
            }
        }

        function h(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function m(e, n, r) {
            for (var i = 0, o = n.length; o > i; i++) t(e, n[i], r);
            return r
        }

        function g(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; u > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), l && t.push(s));
            return a
        }

        function v(e, t, n, i, o, a) {
            return i && !i[P] && (i = v(i)), o && !o[P] && (o = v(o, a)), r(function(r, a, s, u) {
                var l, c, d, f = [],
                    p = [],
                    h = a.length,
                    v = r || m(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !r && t ? v : g(v, f, e, s, u),
                    b = n ? o || (r ? e : h || i) ? [] : a : y;
                if (n && n(y, b, s, u), i)
                    for (l = g(b, p), i(l, [], s, u), c = l.length; c--;)(d = l[c]) && (b[p[c]] = !(y[p[c]] = d));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (l = [], c = b.length; c--;)(d = b[c]) && l.push(y[c] = d);
                            o(null, b = [], l, u)
                        }
                        for (c = b.length; c--;)(d = b[c]) && (l = o ? ee(r, d) : f[c]) > -1 && (r[l] = !(a[l] = d))
                    }
                } else b = g(b === a ? b.splice(h, b.length) : b), o ? o(null, a, b, u) : K.apply(a, b)
            })
        }

        function y(e) {
            for (var t, n, r, i = e.length, o = T.relative[e[0].type], a = o || T.relative[" "], s = o ? 1 : 0, u = p(function(e) {
                    return e === t
                }, a, !0), l = p(function(e) {
                    return ee(t, e) > -1
                }, a, !0), c = [function(e, n, r) {
                    var i = !o && (r || n !== A) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
                    return t = null, i
                }]; i > s; s++)
                if (n = T.relative[e[s].type]) c = [p(h(c), n)];
                else {
                    if (n = T.filter[e[s].type].apply(null, e[s].matches), n[P]) {
                        for (r = ++s; i > r && !T.relative[e[r].type]; r++);
                        return v(s > 1 && h(c), s > 1 && f(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(ue, "$1"), n, r > s && y(e.slice(s, r)), i > r && y(e = e.slice(r)), i > r && f(e))
                    }
                    c.push(n)
                }
            return h(c)
        }

        function b(e, n) {
            var i = n.length > 0,
                o = e.length > 0,
                a = function(r, a, s, u, l) {
                    var c, d, f, p = 0,
                        h = "0",
                        m = r && [],
                        v = [],
                        y = A,
                        b = r || o && T.find.TAG("*", l),
                        x = W += null == y ? 1 : Math.random() || .1,
                        w = b.length;
                    for (l && (A = a !== H && a); h !== w && null != (c = b[h]); h++) {
                        if (o && c) {
                            for (d = 0; f = e[d++];)
                                if (f(c, a, s)) {
                                    u.push(c);
                                    break
                                }
                            l && (W = x)
                        }
                        i && ((c = !f && c) && p--, r && m.push(c))
                    }
                    if (p += h, i && h !== p) {
                        for (d = 0; f = n[d++];) f(m, v, a, s);
                        if (r) {
                            if (p > 0)
                                for (; h--;) m[h] || v[h] || (v[h] = G.call(u));
                            v = g(v)
                        }
                        K.apply(u, v), l && !r && v.length > 0 && p + n.length > 1 && t.uniqueSort(u)
                    }
                    return l && (W = x, A = y), m
                };
            return i ? r(a) : a
        }
        var x, w, T, C, N, E, k, S, A, D, j, L, H, q, _, M, F, O, B, P = "sizzle" + 1 * new Date,
            R = e.document,
            W = 0,
            $ = 0,
            z = n(),
            I = n(),
            X = n(),
            U = function(e, t) {
                return e === t && (j = !0), 0
            },
            V = 1 << 31,
            J = {}.hasOwnProperty,
            Y = [],
            G = Y.pop,
            Q = Y.push,
            K = Y.push,
            Z = Y.slice,
            ee = function(e, t) {
                for (var n = 0, r = e.length; r > n; n++)
                    if (e[n] === t) return n;
                return -1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ie = re.replace("w", "w#"),
            oe = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
            ae = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
            se = new RegExp(ne + "+", "g"),
            ue = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            le = new RegExp("^" + ne + "*," + ne + "*"),
            ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            de = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            fe = new RegExp(ae),
            pe = new RegExp("^" + ie + "$"),
            he = {
                ID: new RegExp("^#(" + re + ")"),
                CLASS: new RegExp("^\\.(" + re + ")"),
                TAG: new RegExp("^(" + re.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + oe),
                PSEUDO: new RegExp("^" + ae),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            },
            me = /^(?:input|select|textarea|button)$/i,
            ge = /^h\d$/i,
            ve = /^[^{]+\{\s*\[native \w/,
            ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            be = /[+~]/,
            xe = /'|\\/g,
            we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            Te = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            Ce = function() {
                L()
            };
        try {
            K.apply(Y = Z.call(R.childNodes), R.childNodes), Y[R.childNodes.length].nodeType
        } catch (Ne) {
            K = {
                apply: Y.length ? function(e, t) {
                    Q.apply(e, Z.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        w = t.support = {}, N = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, L = t.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : R;
            return r !== H && 9 === r.nodeType && r.documentElement ? (H = r, q = r.documentElement, n = r.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)), _ = !N(r), w.attributes = i(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), w.getElementsByTagName = i(function(e) {
                return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length
            }), w.getElementsByClassName = ve.test(r.getElementsByClassName), w.getById = i(function(e) {
                return q.appendChild(e).id = P, !r.getElementsByName || !r.getElementsByName(P).length
            }), w.getById ? (T.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && _) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, T.filter.ID = function(e) {
                var t = e.replace(we, Te);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete T.find.ID, T.filter.ID = function(e) {
                var t = e.replace(we, Te);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), T.find.TAG = w.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n, r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, T.find.CLASS = w.getElementsByClassName && function(e, t) {
                return _ ? t.getElementsByClassName(e) : void 0
            }, F = [], M = [], (w.qsa = ve.test(r.querySelectorAll)) && (i(function(e) {
                q.appendChild(e).innerHTML = "<a id='" + P + "'></a><select id='" + P + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && M.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || M.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + P + "-]").length || M.push("~="), e.querySelectorAll(":checked").length || M.push(":checked"), e.querySelectorAll("a#" + P + "+*").length || M.push(".#.+[+~]")
            }), i(function(e) {
                var t = r.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && M.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), M.push(",.*:")
            })), (w.matchesSelector = ve.test(O = q.matches || q.webkitMatchesSelector || q.mozMatchesSelector || q.oMatchesSelector || q.msMatchesSelector)) && i(function(e) {
                w.disconnectedMatch = O.call(e, "div"), O.call(e, "[s!='']:x"), F.push("!=", ae)
            }), M = M.length && new RegExp(M.join("|")), F = F.length && new RegExp(F.join("|")), t = ve.test(q.compareDocumentPosition), B = t || ve.test(q.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, U = t ? function(e, t) {
                if (e === t) return j = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === r || e.ownerDocument === R && B(R, e) ? -1 : t === r || t.ownerDocument === R && B(R, t) ? 1 : D ? ee(D, e) - ee(D, t) : 0 : 4 & n ? -1 : 1)
            } : function(e, t) {
                if (e === t) return j = !0, 0;
                var n, i = 0,
                    o = e.parentNode,
                    s = t.parentNode,
                    u = [e],
                    l = [t];
                if (!o || !s) return e === r ? -1 : t === r ? 1 : o ? -1 : s ? 1 : D ? ee(D, e) - ee(D, t) : 0;
                if (o === s) return a(e, t);
                for (n = e; n = n.parentNode;) u.unshift(n);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (; u[i] === l[i];) i++;
                return i ? a(u[i], l[i]) : u[i] === R ? -1 : l[i] === R ? 1 : 0
            }, r) : H
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== H && L(e), n = n.replace(de, "='$1']"), !(!w.matchesSelector || !_ || F && F.test(n) || M && M.test(n))) try {
                var r = O.call(e, n);
                if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (i) {}
            return t(n, H, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== H && L(e), B(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== H && L(e);
            var n = T.attrHandle[t.toLowerCase()],
                r = n && J.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !_) : void 0;
            return void 0 !== r ? r : w.attributes || !_ ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [],
                r = 0,
                i = 0;
            if (j = !w.detectDuplicates, D = !w.sortStable && e.slice(0), e.sort(U), j) {
                for (; t = e[i++];) t === e[i] && (r = n.push(i));
                for (; r--;) e.splice(n[r], 1)
            }
            return D = null, e
        }, C = t.getText = function(e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else
                for (; t = e[r++];) n += C(t);
            return n
        }, T = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: he,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(we, Te), e[3] = (e[3] || e[4] || e[5] || "").replace(we, Te), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && fe.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(we, Te).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = z[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && z(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, r) {
                    return function(i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(se, " ") + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, u) {
                        var l, c, d, f, p, h, m = o !== a ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            v = s && t.nodeName.toLowerCase(),
                            y = !u && !s;
                        if (g) {
                            if (o) {
                                for (; m;) {
                                    for (d = t; d = d[m];)
                                        if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                    h = m = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? g.firstChild : g.lastChild], a && y) {
                                for (c = g[P] || (g[P] = {}), l = c[e] || [], p = l[0] === W && l[1], f = l[0] === W && l[2], d = p && g.childNodes[p]; d = ++p && d && d[m] || (f = p = 0) || h.pop();)
                                    if (1 === d.nodeType && ++f && d === t) {
                                        c[e] = [W, p, f];
                                        break
                                    }
                            } else if (y && (l = (t[P] || (t[P] = {}))[e]) && l[0] === W) f = l[1];
                            else
                                for (;
                                    (d = ++p && d && d[m] || (f = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++f || (y && ((d[P] || (d[P] = {}))[e] = [W, f]), d !== t)););
                            return f -= i, f === r || f % r === 0 && f / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var i, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[P] ? o(n) : o.length > 1 ? (i = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                        for (var r, i = o(e, n), a = i.length; a--;) r = ee(e, i[a]), e[r] = !(t[r] = i[a])
                    }) : function(e) {
                        return o(e, 0, i)
                    }) : o
                }
            },
            pseudos: {
                not: r(function(e) {
                    var t = [],
                        n = [],
                        i = k(e.replace(ue, "$1"));
                    return i[P] ? r(function(e, t, n, r) {
                        for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, r, o) {
                        return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                    }
                }),
                has: r(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: r(function(e) {
                    return e = e.replace(we, Te),
                        function(t) {
                            return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                        }
                }),
                lang: r(function(e) {
                    return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, Te).toLowerCase(),
                        function(t) {
                            var n;
                            do
                                if (n = _ ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                            while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === q
                },
                focus: function(e) {
                    return e === H.activeElement && (!H.hasFocus || H.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !T.pseudos.empty(e)
                },
                header: function(e) {
                    return ge.test(e.nodeName)
                },
                input: function(e) {
                    return me.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: l(function() {
                    return [0]
                }),
                last: l(function(e, t) {
                    return [t - 1]
                }),
                eq: l(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: l(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: l(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: l(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: l(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }, T.pseudos.nth = T.pseudos.eq;
        for (x in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) T.pseudos[x] = s(x);
        for (x in {
                submit: !0,
                reset: !0
            }) T.pseudos[x] = u(x);
        return d.prototype = T.filters = T.pseudos, T.setFilters = new d, E = t.tokenize = function(e, n) {
            var r, i, o, a, s, u, l, c = I[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (s = e, u = [], l = T.preFilter; s;) {
                (!r || (i = le.exec(s))) && (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = ce.exec(s)) && (r = i.shift(), o.push({
                    value: r,
                    type: i[0].replace(ue, " ")
                }), s = s.slice(r.length));
                for (a in T.filter) !(i = he[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(),
                    o.push({
                        value: r,
                        type: a,
                        matches: i
                    }), s = s.slice(r.length));
                if (!r) break
            }
            return n ? s.length : s ? t.error(e) : I(e, u).slice(0)
        }, k = t.compile = function(e, t) {
            var n, r = [],
                i = [],
                o = X[e + " "];
            if (!o) {
                for (t || (t = E(e)), n = t.length; n--;) o = y(t[n]), o[P] ? r.push(o) : i.push(o);
                o = X(e, b(i, r)), o.selector = e
            }
            return o
        }, S = t.select = function(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e,
                d = !r && E(e = l.selector || e);
            if (n = n || [], 1 === d.length) {
                if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === t.nodeType && _ && T.relative[o[1].type]) {
                    if (t = (T.find.ID(a.matches[0].replace(we, Te), t) || [])[0], !t) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = he.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !T.relative[s = a.type]);)
                    if ((u = T.find[s]) && (r = u(a.matches[0].replace(we, Te), be.test(o[0].type) && c(t.parentNode) || t))) {
                        if (o.splice(i, 1), e = r.length && f(o), !e) return K.apply(n, r), n;
                        break
                    }
            }
            return (l || k(e, d))(r, t, !_, n, be.test(e) && c(t.parentNode) || t), n
        }, w.sortStable = P.split("").sort(U).join("") === P, w.detectDuplicates = !!j, L(), w.sortDetached = i(function(e) {
            return 1 & e.compareDocumentPosition(H.createElement("div"))
        }), i(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), w.attributes && i(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), i(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(te, function(e, t, n) {
            var r;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), t
    }(e);
    ie.find = le, ie.expr = le.selectors, ie.expr[":"] = ie.expr.pseudos, ie.unique = le.uniqueSort, ie.text = le.getText, ie.isXMLDoc = le.isXML, ie.contains = le.contains;
    var ce = ie.expr.match.needsContext,
        de = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        fe = /^.[^:#\[\.,]*$/;
    ie.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ie.find.matchesSelector(r, e) ? [r] : [] : ie.find.matches(e, ie.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, ie.fn.extend({
        find: function(e) {
            var t, n = [],
                r = this,
                i = r.length;
            if ("string" != typeof e) return this.pushStack(ie(e).filter(function() {
                for (t = 0; i > t; t++)
                    if (ie.contains(r[t], this)) return !0
            }));
            for (t = 0; i > t; t++) ie.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? ie.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        filter: function(e) {
            return this.pushStack(r(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(r(this, e || [], !0))
        },
        is: function(e) {
            return !!r(this, "string" == typeof e && ce.test(e) ? ie(e) : e || [], !1).length
        }
    });
    var pe, he = e.document,
        me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ge = ie.fn.init = function(e, t) {
            var n, r;
            if (!e) return this;
            if ("string" == typeof e) {
                if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : me.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || pe).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof ie ? t[0] : t, ie.merge(this, ie.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : he, !0)), de.test(n[1]) && ie.isPlainObject(t))
                        for (n in t) ie.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                if (r = he.getElementById(n[2]), r && r.parentNode) {
                    if (r.id !== n[2]) return pe.find(e);
                    this.length = 1, this[0] = r
                }
                return this.context = he, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ie.isFunction(e) ? "undefined" != typeof pe.ready ? pe.ready(e) : e(ie) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), ie.makeArray(e, this))
        };
    ge.prototype = ie.fn, pe = ie(he);
    var ve = /^(?:parents|prev(?:Until|All))/,
        ye = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ie.extend({
        dir: function(e, t, n) {
            for (var r = [], i = e[t]; i && 9 !== i.nodeType && (void 0 === n || 1 !== i.nodeType || !ie(i).is(n));) 1 === i.nodeType && r.push(i), i = i[t];
            return r
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), ie.fn.extend({
        has: function(e) {
            var t, n = ie(e, this),
                r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++)
                    if (ie.contains(this, n[t])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], a = ce.test(e) || "string" != typeof e ? ie(e, t || this.context) : 0; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && ie.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? ie.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? ie.inArray(this[0], ie(e)) : ie.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(ie.unique(ie.merge(this.get(), ie(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), ie.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return ie.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return ie.dir(e, "parentNode", n)
        },
        next: function(e) {
            return i(e, "nextSibling")
        },
        prev: function(e) {
            return i(e, "previousSibling")
        },
        nextAll: function(e) {
            return ie.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return ie.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return ie.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return ie.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return ie.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return ie.sibling(e.firstChild)
        },
        contents: function(e) {
            return ie.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ie.merge([], e.childNodes)
        }
    }, function(e, t) {
        ie.fn[e] = function(n, r) {
            var i = ie.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = ie.filter(r, i)), this.length > 1 && (ye[e] || (i = ie.unique(i)), ve.test(e) && (i = i.reverse())), this.pushStack(i)
        }
    });
    var be = /\S+/g,
        xe = {};
    ie.Callbacks = function(e) {
        e = "string" == typeof e ? xe[e] || o(e) : ie.extend({}, e);
        var t, n, r, i, a, s, u = [],
            l = !e.once && [],
            c = function(o) {
                for (n = e.memory && o, r = !0, a = s || 0, s = 0, i = u.length, t = !0; u && i > a; a++)
                    if (u[a].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
                        n = !1;
                        break
                    }
                t = !1, u && (l ? l.length && c(l.shift()) : n ? u = [] : d.disable())
            },
            d = {
                add: function() {
                    if (u) {
                        var r = u.length;
                        ! function o(t) {
                            ie.each(t, function(t, n) {
                                var r = ie.type(n);
                                "function" === r ? e.unique && d.has(n) || u.push(n) : n && n.length && "string" !== r && o(n)
                            })
                        }(arguments), t ? i = u.length : n && (s = r, c(n))
                    }
                    return this
                },
                remove: function() {
                    return u && ie.each(arguments, function(e, n) {
                        for (var r;
                            (r = ie.inArray(n, u, r)) > -1;) u.splice(r, 1), t && (i >= r && i--, a >= r && a--)
                    }), this
                },
                has: function(e) {
                    return e ? ie.inArray(e, u) > -1 : !(!u || !u.length)
                },
                empty: function() {
                    return u = [], i = 0, this
                },
                disable: function() {
                    return u = l = n = void 0, this
                },
                disabled: function() {
                    return !u
                },
                lock: function() {
                    return l = void 0, n || d.disable(), this
                },
                locked: function() {
                    return !l
                },
                fireWith: function(e, n) {
                    return !u || r && !l || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? l.push(n) : c(n)), this
                },
                fire: function() {
                    return d.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!r
                }
            };
        return d
    }, ie.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", ie.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", ie.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", ie.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return ie.Deferred(function(n) {
                            ie.each(t, function(t, o) {
                                var a = ie.isFunction(e[t]) && e[t];
                                i[o[1]](function() {
                                    var e = a && a.apply(this, arguments);
                                    e && ie.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? ie.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, ie.each(t, function(e, o) {
                var a = o[2],
                    s = o[3];
                r[o[1]] = a.add, s && a.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = a.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t, n, r, i = 0,
                o = Y.call(arguments),
                a = o.length,
                s = 1 !== a || e && ie.isFunction(e.promise) ? a : 0,
                u = 1 === s ? e : ie.Deferred(),
                l = function(e, n, r) {
                    return function(i) {
                        n[e] = this, r[e] = arguments.length > 1 ? Y.call(arguments) : i, r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
                    }
                };
            if (a > 1)
                for (t = new Array(a), n = new Array(a), r = new Array(a); a > i; i++) o[i] && ie.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --s;
            return s || u.resolveWith(r, o), u.promise()
        }
    });
    var we;
    ie.fn.ready = function(e) {
        return ie.ready.promise().done(e), this
    }, ie.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? ie.readyWait++ : ie.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--ie.readyWait : !ie.isReady) {
                if (!he.body) return setTimeout(ie.ready);
                ie.isReady = !0, e !== !0 && --ie.readyWait > 0 || (we.resolveWith(he, [ie]), ie.fn.triggerHandler && (ie(he).triggerHandler("ready"), ie(he).off("ready")))
            }
        }
    }), ie.ready.promise = function(t) {
        if (!we)
            if (we = ie.Deferred(), "complete" === he.readyState) setTimeout(ie.ready);
            else if (he.addEventListener) he.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1);
        else {
            he.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
            var n = !1;
            try {
                n = null == e.frameElement && he.documentElement
            } catch (r) {}
            n && n.doScroll && ! function i() {
                if (!ie.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (e) {
                        return setTimeout(i, 50)
                    }
                    a(), ie.ready()
                }
            }()
        }
        return we.promise(t)
    };
    var Te, Ce = "undefined";
    for (Te in ie(ne)) break;
    ne.ownLast = "0" !== Te, ne.inlineBlockNeedsLayout = !1, ie(function() {
            var e, t, n, r;
            n = he.getElementsByTagName("body")[0], n && n.style && (t = he.createElement("div"), r = he.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), typeof t.style.zoom !== Ce && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ne.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(r))
        }),
        function() {
            var e = he.createElement("div");
            if (null == ne.deleteExpando) {
                ne.deleteExpando = !0;
                try {
                    delete e.test
                } catch (t) {
                    ne.deleteExpando = !1
                }
            }
            e = null
        }(), ie.acceptData = function(e) {
            var t = ie.noData[(e.nodeName + " ").toLowerCase()],
                n = +e.nodeType || 1;
            return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
        };
    var Ne = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ee = /([A-Z])/g;
    ie.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? ie.cache[e[ie.expando]] : e[ie.expando], !!e && !l(e)
        },
        data: function(e, t, n) {
            return c(e, t, n)
        },
        removeData: function(e, t) {
            return d(e, t)
        },
        _data: function(e, t, n) {
            return c(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return d(e, t, !0)
        }
    }), ie.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = ie.data(o), 1 === o.nodeType && !ie._data(o, "parsedAttrs"))) {
                    for (n = a.length; n--;) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = ie.camelCase(r.slice(5)), u(o, r, i[r])));
                    ie._data(o, "parsedAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                ie.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                ie.data(this, e, t)
            }) : o ? u(o, e, ie.data(o, e)) : void 0
        },
        removeData: function(e) {
            return this.each(function() {
                ie.removeData(this, e)
            })
        }
    }), ie.extend({
        queue: function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = ie._data(e, t), n && (!r || ie.isArray(n) ? r = ie._data(e, t, ie.makeArray(n)) : r.push(n)), r || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = ie.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = ie._queueHooks(e, t),
                a = function() {
                    ie.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return ie._data(e, n) || ie._data(e, n, {
                empty: ie.Callbacks("once memory").add(function() {
                    ie._removeData(e, t + "queue"), ie._removeData(e, n)
                })
            })
        }
    }), ie.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? ie.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = ie.queue(this, e, t);
                ie._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && ie.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                ie.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = ie.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = ie._data(o[a], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var ke = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Se = ["Top", "Right", "Bottom", "Left"],
        Ae = function(e, t) {
            return e = t || e, "none" === ie.css(e, "display") || !ie.contains(e.ownerDocument, e)
        },
        De = ie.access = function(e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === ie.type(n)) {
                i = !0;
                for (s in n) ie.access(e, t, s, n[s], !0, o, a)
            } else if (void 0 !== r && (i = !0, ie.isFunction(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                    return l.call(ie(e), n)
                })), t))
                for (; u > s; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        je = /^(?:checkbox|radio)$/i;
    ! function() {
        var e = he.createElement("input"),
            t = he.createElement("div"),
            n = he.createDocumentFragment();
        if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ne.leadingWhitespace = 3 === t.firstChild.nodeType, ne.tbody = !t.getElementsByTagName("tbody").length, ne.htmlSerialize = !!t.getElementsByTagName("link").length, ne.html5Clone = "<:nav></:nav>" !== he.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), ne.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", ne.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", ne.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, ne.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() {
                ne.noCloneEvent = !1
            }), t.cloneNode(!0).click()), null == ne.deleteExpando) {
            ne.deleteExpando = !0;
            try {
                delete t.test
            } catch (r) {
                ne.deleteExpando = !1
            }
        }
    }(),
    function() {
        var t, n, r = he.createElement("div");
        for (t in {
                submit: !0,
                change: !0,
                focusin: !0
            }) n = "on" + t, (ne[t + "Bubbles"] = n in e) || (r.setAttribute(n, "t"), ne[t + "Bubbles"] = r.attributes[n].expando === !1);
        r = null
    }();
    var Le = /^(?:input|select|textarea)$/i,
        He = /^key/,
        qe = /^(?:mouse|pointer|contextmenu)|click/,
        _e = /^(?:focusinfocus|focusoutblur)$/,
        Me = /^([^.]*)(?:\.(.+)|)$/;
    ie.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, s, u, l, c, d, f, p, h, m, g = ie._data(e);
            if (g) {
                for (n.handler && (u = n, n = u.handler, i = u.selector), n.guid || (n.guid = ie.guid++), (a = g.events) || (a = g.events = {}), (c = g.handle) || (c = g.handle = function(e) {
                        return typeof ie === Ce || e && ie.event.triggered === e.type ? void 0 : ie.event.dispatch.apply(c.elem, arguments)
                    }, c.elem = e), t = (t || "").match(be) || [""], s = t.length; s--;) o = Me.exec(t[s]) || [], p = m = o[1], h = (o[2] || "").split(".").sort(), p && (l = ie.event.special[p] || {}, p = (i ? l.delegateType : l.bindType) || p, l = ie.event.special[p] || {}, d = ie.extend({
                    type: p,
                    origType: m,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && ie.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, u), (f = a[p]) || (f = a[p] = [], f.delegateCount = 0, l.setup && l.setup.call(e, r, h, c) !== !1 || (e.addEventListener ? e.addEventListener(p, c, !1) : e.attachEvent && e.attachEvent("on" + p, c))), l.add && (l.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), i ? f.splice(f.delegateCount++, 0, d) : f.push(d), ie.event.global[p] = !0);
                e = null
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, d, f, p, h, m, g = ie.hasData(e) && ie._data(e);
            if (g && (c = g.events)) {
                for (t = (t || "").match(be) || [""], l = t.length; l--;)
                    if (s = Me.exec(t[l]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p) {
                        for (d = ie.event.special[p] || {}, p = (r ? d.delegateType : d.bindType) || p, f = c[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = f.length; o--;) a = f[o], !i && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, d.remove && d.remove.call(e, a));
                        u && !f.length && (d.teardown && d.teardown.call(e, h, g.handle) !== !1 || ie.removeEvent(e, p, g.handle), delete c[p])
                    } else
                        for (p in c) ie.event.remove(e, p + t[l], n, r, !0);
                ie.isEmptyObject(c) && (delete g.handle, ie._removeData(e, "events"))
            }
        },
        trigger: function(t, n, r, i) {
            var o, a, s, u, l, c, d, f = [r || he],
                p = te.call(t, "type") ? t.type : t,
                h = te.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = c = r = r || he, 3 !== r.nodeType && 8 !== r.nodeType && !_e.test(p + ie.event.triggered) && (p.indexOf(".") >= 0 && (h = p.split("."), p = h.shift(), h.sort()), a = p.indexOf(":") < 0 && "on" + p, t = t[ie.expando] ? t : new ie.Event(p, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : ie.makeArray(n, [t]), l = ie.event.special[p] || {}, i || !l.trigger || l.trigger.apply(r, n) !== !1)) {
                if (!i && !l.noBubble && !ie.isWindow(r)) {
                    for (u = l.delegateType || p, _e.test(u + p) || (s = s.parentNode); s; s = s.parentNode) f.push(s), c = s;
                    c === (r.ownerDocument || he) && f.push(c.defaultView || c.parentWindow || e)
                }
                for (d = 0;
                    (s = f[d++]) && !t.isPropagationStopped();) t.type = d > 1 ? u : l.bindType || p, o = (ie._data(s, "events") || {})[t.type] && ie._data(s, "handle"), o && o.apply(s, n), o = a && s[a], o && o.apply && ie.acceptData(s) && (t.result = o.apply(s, n), t.result === !1 && t.preventDefault());
                if (t.type = p, !i && !t.isDefaultPrevented() && (!l._default || l._default.apply(f.pop(), n) === !1) && ie.acceptData(r) && a && r[p] && !ie.isWindow(r)) {
                    c = r[a], c && (r[a] = null), ie.event.triggered = p;
                    try {
                        r[p]()
                    } catch (m) {}
                    ie.event.triggered = void 0, c && (r[a] = c)
                }
                return t.result
            }
        },
        dispatch: function(e) {
            e = ie.event.fix(e);
            var t, n, r, i, o, a = [],
                s = Y.call(arguments),
                u = (ie._data(this, "events") || {})[e.type] || [],
                l = ie.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                for (a = ie.event.handlers.call(this, e, u), t = 0;
                    (i = a[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = i.elem, o = 0;
                        (r = i.handlers[o++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(r.namespace)) && (e.handleObj = r, e.data = r.data, n = ((ie.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, s), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a = [],
                s = t.delegateCount,
                u = e.target;
            if (s && u.nodeType && (!e.button || "click" !== e.type))
                for (; u != this; u = u.parentNode || this)
                    if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                        for (i = [], o = 0; s > o; o++) r = t[o], n = r.selector + " ", void 0 === i[n] && (i[n] = r.needsContext ? ie(n, this).index(u) >= 0 : ie.find(n, this, null, [u]).length), i[n] && i.push(r);
                        i.length && a.push({
                            elem: u,
                            handlers: i
                        })
                    }
            return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }), a
        },
        fix: function(e) {
            if (e[ie.expando]) return e;
            var t, n, r, i = e.type,
                o = e,
                a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = qe.test(i) ? this.mouseHooks : He.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new ie.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
            return e.target || (e.target = o.srcElement || he), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i, o = t.button,
                    a = t.fromElement;
                return null == e.pageX && null != t.clientX && (r = e.target.ownerDocument || he, i = r.documentElement, n = r.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== h() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === h() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return ie.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return ie.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = ie.extend(new ie.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? ie.event.trigger(i, null, t) : ie.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, ie.removeEvent = he.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === Ce && (e[r] = null), e.detachEvent(r, n))
    }, ie.Event = function(e, t) {
        return this instanceof ie.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? f : p) : this.type = e, t && ie.extend(this, t), this.timeStamp = e && e.timeStamp || ie.now(), void(this[ie.expando] = !0)) : new ie.Event(e, t)
    }, ie.Event.prototype = {
        isDefaultPrevented: p,
        isPropagationStopped: p,
        isImmediatePropagationStopped: p,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = f, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = f, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = f, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, ie.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        ie.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return (!i || i !== r && !ie.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), ne.submitBubbles || (ie.event.special.submit = {
        setup: function() {
            return ie.nodeName(this, "form") ? !1 : void ie.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target,
                    n = ie.nodeName(t, "input") || ie.nodeName(t, "button") ? t.form : void 0;
                n && !ie._data(n, "submitBubbles") && (ie.event.add(n, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }), ie._data(n, "submitBubbles", !0))
            })
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ie.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return ie.nodeName(this, "form") ? !1 : void ie.event.remove(this, "._submit")
        }
    }), ne.changeBubbles || (ie.event.special.change = {
        setup: function() {
            return Le.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ie.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), ie.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), ie.event.simulate("change", this, e, !0)
            })), !1) : void ie.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Le.test(t.nodeName) && !ie._data(t, "changeBubbles") && (ie.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || ie.event.simulate("change", this.parentNode, e, !0)
                }), ie._data(t, "changeBubbles", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return ie.event.remove(this, "._change"), !Le.test(this.nodeName)
        }
    }), ne.focusinBubbles || ie.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            ie.event.simulate(t, e.target, ie.event.fix(e), !0)
        };
        ie.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    i = ie._data(r, t);
                i || r.addEventListener(e, n, !0), ie._data(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    i = ie._data(r, t) - 1;
                i ? ie._data(r, t, i) : (r.removeEventListener(e, n, !0), ie._removeData(r, t))
            }
        }
    }), ie.fn.extend({
        on: function(e, t, n, r, i) {
            var o, a;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (o in e) this.on(o, t, n, e[o], i);
                return this
            }
            if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1) r = p;
            else if (!r) return this;
            return 1 === i && (a = r, r = function(e) {
                return ie().off(e), a.apply(this, arguments)
            }, r.guid = a.guid || (a.guid = ie.guid++)), this.each(function() {
                ie.event.add(this, e, r, n, t)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, ie(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = p), this.each(function() {
                ie.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                ie.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? ie.event.trigger(e, t, n, !0) : void 0
        }
    });
    var Fe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Oe = / jQuery\d+="(?:null|\d+)"/g,
        Be = new RegExp("<(?:" + Fe + ")[\\s/>]", "i"),
        Pe = /^\s+/,
        Re = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        We = /<([\w:]+)/,
        $e = /<tbody/i,
        ze = /<|&#?\w+;/,
        Ie = /<(?:script|style|link)/i,
        Xe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ue = /^$|\/(?:java|ecma)script/i,
        Ve = /^true\/(.*)/,
        Je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Ye = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: ne.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        Ge = m(he),
        Qe = Ge.appendChild(he.createElement("div"));
    Ye.optgroup = Ye.option, Ye.tbody = Ye.tfoot = Ye.colgroup = Ye.caption = Ye.thead, Ye.th = Ye.td, ie.extend({
        clone: function(e, t, n) {
            var r, i, o, a, s, u = ie.contains(e.ownerDocument, e);
            if (ne.html5Clone || ie.isXMLDoc(e) || !Be.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Qe.innerHTML = e.outerHTML, Qe.removeChild(o = Qe.firstChild)), !(ne.noCloneEvent && ne.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ie.isXMLDoc(e)))
                for (r = g(o), s = g(e), a = 0; null != (i = s[a]); ++a) r[a] && C(i, r[a]);
            if (t)
                if (n)
                    for (s = s || g(e), r = r || g(o), a = 0; null != (i = s[a]); a++) T(i, r[a]);
                else T(e, o);
            return r = g(o, "script"), r.length > 0 && w(r, !u && g(e, "script")), r = s = i = null, o
        },
        buildFragment: function(e, t, n, r) {
            for (var i, o, a, s, u, l, c, d = e.length, f = m(t), p = [], h = 0; d > h; h++)
                if (o = e[h], o || 0 === o)
                    if ("object" === ie.type(o)) ie.merge(p, o.nodeType ? [o] : o);
                    else if (ze.test(o)) {
                for (s = s || f.appendChild(t.createElement("div")), u = (We.exec(o) || ["", ""])[1].toLowerCase(), c = Ye[u] || Ye._default, s.innerHTML = c[1] + o.replace(Re, "<$1></$2>") + c[2], i = c[0]; i--;) s = s.lastChild;
                if (!ne.leadingWhitespace && Pe.test(o) && p.push(t.createTextNode(Pe.exec(o)[0])), !ne.tbody)
                    for (o = "table" !== u || $e.test(o) ? "<table>" !== c[1] || $e.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length; i--;) ie.nodeName(l = o.childNodes[i], "tbody") && !l.childNodes.length && o.removeChild(l);
                for (ie.merge(p, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                s = f.lastChild
            } else p.push(t.createTextNode(o));
            for (s && f.removeChild(s), ne.appendChecked || ie.grep(g(p, "input"), v), h = 0; o = p[h++];)
                if ((!r || -1 === ie.inArray(o, r)) && (a = ie.contains(o.ownerDocument, o), s = g(f.appendChild(o), "script"), a && w(s), n))
                    for (i = 0; o = s[i++];) Ue.test(o.type || "") && n.push(o);
            return s = null, f
        },
        cleanData: function(e, t) {
            for (var n, r, i, o, a = 0, s = ie.expando, u = ie.cache, l = ne.deleteExpando, c = ie.event.special; null != (n = e[a]); a++)
                if ((t || ie.acceptData(n)) && (i = n[s], o = i && u[i])) {
                    if (o.events)
                        for (r in o.events) c[r] ? ie.event.remove(n, r) : ie.removeEvent(n, r, o.handle);
                    u[i] && (delete u[i], l ? delete n[s] : typeof n.removeAttribute !== Ce ? n.removeAttribute(s) : n[s] = null, J.push(i))
                }
        }
    }), ie.fn.extend({
        text: function(e) {
            return De(this, function(e) {
                return void 0 === e ? ie.text(this) : this.empty().append((this[0] && this[0].ownerDocument || he).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, r = e ? ie.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || ie.cleanData(g(n)), n.parentNode && (t && ie.contains(n.ownerDocument, n) && w(g(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && ie.cleanData(g(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && ie.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return ie.clone(this, e, t)
            })
        },
        html: function(e) {
            return De(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Oe, "") : void 0;
                if (!("string" != typeof e || Ie.test(e) || !ne.htmlSerialize && Be.test(e) || !ne.leadingWhitespace && Pe.test(e) || Ye[(We.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(Re, "<$1></$2>");
                    try {
                        for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (ie.cleanData(g(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (i) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode, ie.cleanData(g(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = G.apply([], e);
            var n, r, i, o, a, s, u = 0,
                l = this.length,
                c = this,
                d = l - 1,
                f = e[0],
                p = ie.isFunction(f);
            if (p || l > 1 && "string" == typeof f && !ne.checkClone && Xe.test(f)) return this.each(function(n) {
                var r = c.eq(n);
                p && (e[0] = f.call(this, n, r.html())), r.domManip(e, t)
            });
            if (l && (s = ie.buildFragment(e, this[0].ownerDocument, !1, this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
                for (o = ie.map(g(s, "script"), b), i = o.length; l > u; u++) r = s, u !== d && (r = ie.clone(r, !0, !0), i && ie.merge(o, g(r, "script"))), t.call(this[u], r, u);
                if (i)
                    for (a = o[o.length - 1].ownerDocument, ie.map(o, x), u = 0; i > u; u++) r = o[u], Ue.test(r.type || "") && !ie._data(r, "globalEval") && ie.contains(a, r) && (r.src ? ie._evalUrl && ie._evalUrl(r.src) : ie.globalEval((r.text || r.textContent || r.innerHTML || "").replace(Je, "")));
                s = n = null
            }
            return this
        }
    }), ie.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        ie.fn[e] = function(e) {
            for (var n, r = 0, i = [], o = ie(e), a = o.length - 1; a >= r; r++) n = r === a ? this : this.clone(!0), ie(o[r])[t](n), Q.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var Ke, Ze = {};
    ! function() {
        var e;
        ne.shrinkWrapBlocks = function() {
            if (null != e) return e;
            e = !1;
            var t, n, r;
            return n = he.getElementsByTagName("body")[0], n && n.style ? (t = he.createElement("div"), r = he.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), typeof t.style.zoom !== Ce && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(he.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(r), e) : void 0
        }
    }();
    var et, tt, nt = /^margin/,
        rt = new RegExp("^(" + ke + ")(?!px)[a-z%]+$", "i"),
        it = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (et = function(t) {
        return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
    }, tt = function(e, t, n) {
        var r, i, o, a, s = e.style;
        return n = n || et(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== a || ie.contains(e.ownerDocument, e) || (a = ie.style(e, t)), rt.test(a) && nt.test(t) && (r = s.width, i = s.minWidth,
            o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 === a ? a : a + ""
    }) : he.documentElement.currentStyle && (et = function(e) {
        return e.currentStyle
    }, tt = function(e, t, n) {
        var r, i, o, a, s = e.style;
        return n = n || et(e), a = n ? n[t] : void 0, null == a && s && s[t] && (a = s[t]), rt.test(a) && !it.test(t) && (r = s.left, i = e.runtimeStyle, o = i && i.left, o && (i.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = r, o && (i.left = o)), void 0 === a ? a : a + "" || "auto"
    }), ! function() {
        function t() {
            var t, n, r, i;
            n = he.getElementsByTagName("body")[0], n && n.style && (t = he.createElement("div"), r = he.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = a = !1, u = !0, e.getComputedStyle && (o = "1%" !== (e.getComputedStyle(t, null) || {}).top, a = "4px" === (e.getComputedStyle(t, null) || {
                width: "4px"
            }).width, i = t.appendChild(he.createElement("div")), i.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", t.style.width = "1px", u = !parseFloat((e.getComputedStyle(i, null) || {}).marginRight), t.removeChild(i)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = t.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", s = 0 === i[0].offsetHeight, s && (i[0].style.display = "", i[1].style.display = "none", s = 0 === i[0].offsetHeight), n.removeChild(r))
        }
        var n, r, i, o, a, s, u;
        n = he.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = n.getElementsByTagName("a")[0], (r = i && i.style) && (r.cssText = "float:left;opacity:.5", ne.opacity = "0.5" === r.opacity, ne.cssFloat = !!r.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", ne.clearCloneStyle = "content-box" === n.style.backgroundClip, ne.boxSizing = "" === r.boxSizing || "" === r.MozBoxSizing || "" === r.WebkitBoxSizing, ie.extend(ne, {
            reliableHiddenOffsets: function() {
                return null == s && t(), s
            },
            boxSizingReliable: function() {
                return null == a && t(), a
            },
            pixelPosition: function() {
                return null == o && t(), o
            },
            reliableMarginRight: function() {
                return null == u && t(), u
            }
        }))
    }(), ie.swap = function(e, t, n, r) {
        var i, o, a = {};
        for (o in t) a[o] = e.style[o], e.style[o] = t[o];
        i = n.apply(e, r || []);
        for (o in t) e.style[o] = a[o];
        return i
    };
    var ot = /alpha\([^)]*\)/i,
        at = /opacity\s*=\s*([^)]*)/,
        st = /^(none|table(?!-c[ea]).+)/,
        ut = new RegExp("^(" + ke + ")(.*)$", "i"),
        lt = new RegExp("^([+-])=(" + ke + ")", "i"),
        ct = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        dt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        ft = ["Webkit", "O", "Moz", "ms"];
    ie.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = tt(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": ne.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = ie.camelCase(t),
                    u = e.style;
                if (t = ie.cssProps[s] || (ie.cssProps[s] = S(u, s)), a = ie.cssHooks[t] || ie.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t];
                if (o = typeof n, "string" === o && (i = lt.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(ie.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || ie.cssNumber[s] || (n += "px"), ne.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, r))))) try {
                    u[t] = n
                } catch (l) {}
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = ie.camelCase(t);
            return t = ie.cssProps[s] || (ie.cssProps[s] = S(e.style, s)), a = ie.cssHooks[t] || ie.cssHooks[s], a && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = tt(e, t, r)), "normal" === o && t in dt && (o = dt[t]), "" === n || n ? (i = parseFloat(o), n === !0 || ie.isNumeric(i) ? i || 0 : o) : o
        }
    }), ie.each(["height", "width"], function(e, t) {
        ie.cssHooks[t] = {
            get: function(e, n, r) {
                return n ? st.test(ie.css(e, "display")) && 0 === e.offsetWidth ? ie.swap(e, ct, function() {
                    return L(e, t, r)
                }) : L(e, t, r) : void 0
            },
            set: function(e, n, r) {
                var i = r && et(e);
                return D(e, n, r ? j(e, t, r, ne.boxSizing && "border-box" === ie.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), ne.opacity || (ie.cssHooks.opacity = {
        get: function(e, t) {
            return at.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = ie.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === ie.trim(o.replace(ot, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = ot.test(o) ? o.replace(ot, i) : o + " " + i)
        }
    }), ie.cssHooks.marginRight = k(ne.reliableMarginRight, function(e, t) {
        return t ? ie.swap(e, {
            display: "inline-block"
        }, tt, [e, "marginRight"]) : void 0
    }), ie.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        ie.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + Se[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, nt.test(e) || (ie.cssHooks[e + t].set = D)
    }), ie.fn.extend({
        css: function(e, t) {
            return De(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (ie.isArray(t)) {
                    for (r = et(e), i = t.length; i > a; a++) o[t[a]] = ie.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? ie.style(e, t, n) : ie.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return A(this, !0)
        },
        hide: function() {
            return A(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Ae(this) ? ie(this).show() : ie(this).hide()
            })
        }
    }), ie.Tween = H, H.prototype = {
        constructor: H,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (ie.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = H.propHooks[this.prop];
            return e && e.get ? e.get(this) : H.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = H.propHooks[this.prop];
            return this.pos = t = this.options.duration ? ie.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : H.propHooks._default.set(this), this
        }
    }, H.prototype.init.prototype = H.prototype, H.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ie.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                ie.fx.step[e.prop] ? ie.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ie.cssProps[e.prop]] || ie.cssHooks[e.prop]) ? ie.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, H.propHooks.scrollTop = H.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, ie.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, ie.fx = H.prototype.init, ie.fx.step = {};
    var pt, ht, mt = /^(?:toggle|show|hide)$/,
        gt = new RegExp("^(?:([+-])=|)(" + ke + ")([a-z%]*)$", "i"),
        vt = /queueHooks$/,
        yt = [F],
        bt = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    r = n.cur(),
                    i = gt.exec(t),
                    o = i && i[3] || (ie.cssNumber[e] ? "" : "px"),
                    a = (ie.cssNumber[e] || "px" !== o && +r) && gt.exec(ie.css(n.elem, e)),
                    s = 1,
                    u = 20;
                if (a && a[3] !== o) {
                    o = o || a[3], i = i || [], a = +r || 1;
                    do s = s || ".5", a /= s, ie.style(n.elem, e, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --u)
                }
                return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
            }]
        };
    ie.Animation = ie.extend(B, {
            tweener: function(e, t) {
                ie.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, r = 0, i = e.length; i > r; r++) n = e[r], bt[n] = bt[n] || [], bt[n].unshift(t)
            },
            prefilter: function(e, t) {
                t ? yt.unshift(e) : yt.push(e)
            }
        }), ie.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? ie.extend({}, e) : {
                complete: n || !n && t || ie.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !ie.isFunction(t) && t
            };
            return r.duration = ie.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ie.fx.speeds ? ie.fx.speeds[r.duration] : ie.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                ie.isFunction(r.old) && r.old.call(this), r.queue && ie.dequeue(this, r.queue)
            }, r
        }, ie.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(Ae).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var i = ie.isEmptyObject(e),
                    o = ie.speed(t, n, r),
                    a = function() {
                        var t = B(this, ie.extend({}, e), o);
                        (i || ie._data(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        i = null != e && e + "queueHooks",
                        o = ie.timers,
                        a = ie._data(this);
                    if (i) a[i] && a[i].stop && r(a[i]);
                    else
                        for (i in a) a[i] && a[i].stop && vt.test(i) && r(a[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                    (t || !n) && ie.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = ie._data(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        o = ie.timers,
                        a = r ? r.length : 0;
                    for (n.finish = !0, ie.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), ie.each(["toggle", "show", "hide"], function(e, t) {
            var n = ie.fn[t];
            ie.fn[t] = function(e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(_(t, !0), e, r, i)
            }
        }), ie.each({
            slideDown: _("show"),
            slideUp: _("hide"),
            slideToggle: _("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            ie.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), ie.timers = [], ie.fx.tick = function() {
            var e, t = ie.timers,
                n = 0;
            for (pt = ie.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
            t.length || ie.fx.stop(), pt = void 0
        }, ie.fx.timer = function(e) {
            ie.timers.push(e), e() ? ie.fx.start() : ie.timers.pop()
        }, ie.fx.interval = 13, ie.fx.start = function() {
            ht || (ht = setInterval(ie.fx.tick, ie.fx.interval))
        }, ie.fx.stop = function() {
            clearInterval(ht), ht = null
        }, ie.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, ie.fn.delay = function(e, t) {
            return e = ie.fx ? ie.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        function() {
            var e, t, n, r, i;
            t = he.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = t.getElementsByTagName("a")[0], n = he.createElement("select"), i = n.appendChild(he.createElement("option")), e = t.getElementsByTagName("input")[0], r.style.cssText = "top:1px", ne.getSetAttribute = "t" !== t.className, ne.style = /top/.test(r.getAttribute("style")), ne.hrefNormalized = "/a" === r.getAttribute("href"), ne.checkOn = !!e.value, ne.optSelected = i.selected, ne.enctype = !!he.createElement("form").enctype, n.disabled = !0, ne.optDisabled = !i.disabled, e = he.createElement("input"), e.setAttribute("value", ""), ne.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), ne.radioValue = "t" === e.value
        }();
    var xt = /\r/g;
    ie.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            return arguments.length ? (r = ie.isFunction(e), this.each(function(n) {
                var i;
                1 === this.nodeType && (i = r ? e.call(this, n, ie(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : ie.isArray(i) && (i = ie.map(i, function(e) {
                    return null == e ? "" : e + ""
                })), t = ie.valHooks[this.type] || ie.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            })) : i ? (t = ie.valHooks[i.type] || ie.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(xt, "") : null == n ? "" : n)) : void 0
        }
    }), ie.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = ie.find.attr(e, "value");
                    return null != t ? t : ie.trim(ie.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, u = 0 > i ? s : o ? i : 0; s > u; u++)
                        if (n = r[u], !(!n.selected && u !== i || (ne.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ie.nodeName(n.parentNode, "optgroup"))) {
                            if (t = ie(n).val(), o) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = ie.makeArray(t), a = i.length; a--;)
                        if (r = i[a], ie.inArray(ie.valHooks.option.get(r), o) >= 0) try {
                            r.selected = n = !0
                        } catch (s) {
                            r.scrollHeight
                        } else r.selected = !1;
                    return n || (e.selectedIndex = -1), i
                }
            }
        }
    }), ie.each(["radio", "checkbox"], function() {
        ie.valHooks[this] = {
            set: function(e, t) {
                return ie.isArray(t) ? e.checked = ie.inArray(ie(e).val(), t) >= 0 : void 0
            }
        }, ne.checkOn || (ie.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var wt, Tt, Ct = ie.expr.attrHandle,
        Nt = /^(?:checked|selected)$/i,
        Et = ne.getSetAttribute,
        kt = ne.input;
    ie.fn.extend({
        attr: function(e, t) {
            return De(this, ie.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                ie.removeAttr(this, e)
            })
        }
    }), ie.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            return e && 3 !== o && 8 !== o && 2 !== o ? typeof e.getAttribute === Ce ? ie.prop(e, t, n) : (1 === o && ie.isXMLDoc(e) || (t = t.toLowerCase(), r = ie.attrHooks[t] || (ie.expr.match.bool.test(t) ? Tt : wt)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = ie.find.attr(e, t), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void ie.removeAttr(e, t)) : void 0
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                o = t && t.match(be);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) r = ie.propFix[n] || n, ie.expr.match.bool.test(n) ? kt && Et || !Nt.test(n) ? e[r] = !1 : e[ie.camelCase("default-" + n)] = e[r] = !1 : ie.attr(e, n, ""), e.removeAttribute(Et ? n : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!ne.radioValue && "radio" === t && ie.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), Tt = {
        set: function(e, t, n) {
            return t === !1 ? ie.removeAttr(e, n) : kt && Et || !Nt.test(n) ? e.setAttribute(!Et && ie.propFix[n] || n, n) : e[ie.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, ie.each(ie.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = Ct[t] || ie.find.attr;
        Ct[t] = kt && Et || !Nt.test(t) ? function(e, t, r) {
            var i, o;
            return r || (o = Ct[t], Ct[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, Ct[t] = o), i
        } : function(e, t, n) {
            return n ? void 0 : e[ie.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), kt && Et || (ie.attrHooks.value = {
        set: function(e, t, n) {
            return ie.nodeName(e, "input") ? void(e.defaultValue = t) : wt && wt.set(e, t, n)
        }
    }), Et || (wt = {
        set: function(e, t, n) {
            var r = e.getAttributeNode(n);
            return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
        }
    }, Ct.id = Ct.name = Ct.coords = function(e, t, n) {
        var r;
        return n ? void 0 : (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null
    }, ie.valHooks.button = {
        get: function(e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : void 0
        },
        set: wt.set
    }, ie.attrHooks.contenteditable = {
        set: function(e, t, n) {
            wt.set(e, "" === t ? !1 : t, n)
        }
    }, ie.each(["width", "height"], function(e, t) {
        ie.attrHooks[t] = {
            set: function(e, n) {
                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
            }
        }
    })), ne.style || (ie.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var St = /^(?:input|select|textarea|button|object)$/i,
        At = /^(?:a|area)$/i;
    ie.fn.extend({
        prop: function(e, t) {
            return De(this, ie.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = ie.propFix[e] || e, this.each(function() {
                try {
                    this[e] = void 0, delete this[e]
                } catch (t) {}
            })
        }
    }), ie.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, n) {
            var r, i, o, a = e.nodeType;
            return e && 3 !== a && 8 !== a && 2 !== a ? (o = 1 !== a || !ie.isXMLDoc(e), o && (t = ie.propFix[t] || t, i = ie.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = ie.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : St.test(e.nodeName) || At.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), ne.hrefNormalized || ie.each(["href", "src"], function(e, t) {
        ie.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }), ne.optSelected || (ie.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), ie.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        ie.propFix[this.toLowerCase()] = this
    }), ne.enctype || (ie.propFix.enctype = "encoding");
    var Dt = /[\t\r\n\f]/g;
    ie.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, a, s = 0,
                u = this.length,
                l = "string" == typeof e && e;
            if (ie.isFunction(e)) return this.each(function(t) {
                ie(this).addClass(e.call(this, t, this.className))
            });
            if (l)
                for (t = (e || "").match(be) || []; u > s; s++)
                    if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Dt, " ") : " ")) {
                        for (o = 0; i = t[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        a = ie.trim(r), n.className !== a && (n.className = a)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a, s = 0,
                u = this.length,
                l = 0 === arguments.length || "string" == typeof e && e;
            if (ie.isFunction(e)) return this.each(function(t) {
                ie(this).removeClass(e.call(this, t, this.className))
            });
            if (l)
                for (t = (e || "").match(be) || []; u > s; s++)
                    if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Dt, " ") : "")) {
                        for (o = 0; i = t[o++];)
                            for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                        a = e ? ie.trim(r) : "", n.className !== a && (n.className = a)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(ie.isFunction(e) ? function(n) {
                ie(this).toggleClass(e.call(this, n, this.className, t), t)
            } : function() {
                if ("string" === n)
                    for (var t, r = 0, i = ie(this), o = e.match(be) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else(n === Ce || "boolean" === n) && (this.className && ie._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ie._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Dt, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    }), ie.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        ie.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), ie.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var jt = ie.now(),
        Lt = /\?/,
        Ht = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    ie.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var n, r = null,
            i = ie.trim(t + "");
        return i && !ie.trim(i.replace(Ht, function(e, t, i, o) {
            return n && t && (r = 0), 0 === r ? e : (n = i || t, r += !o - !i, "")
        })) ? Function("return " + i)() : ie.error("Invalid JSON: " + t)
    }, ie.parseXML = function(t) {
        var n, r;
        if (!t || "string" != typeof t) return null;
        try {
            e.DOMParser ? (r = new DOMParser, n = r.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
        } catch (i) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || ie.error("Invalid XML: " + t), n
    };
    var qt, _t, Mt = /#.*$/,
        Ft = /([?&])_=[^&]*/,
        Ot = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Bt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Pt = /^(?:GET|HEAD)$/,
        Rt = /^\/\//,
        Wt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        $t = {},
        zt = {},
        It = "*/".concat("*");
    try {
        _t = location.href
    } catch (Xt) {
        _t = he.createElement("a"), _t.href = "", _t = _t.href
    }
    qt = Wt.exec(_t.toLowerCase()) || [], ie.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: _t,
            type: "GET",
            isLocal: Bt.test(qt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": It,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": ie.parseJSON,
                "text xml": ie.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? W(W(e, ie.ajaxSettings), t) : W(ie.ajaxSettings, e)
        },
        ajaxPrefilter: P($t),
        ajaxTransport: P(zt),
        ajax: function(e, t) {
            function n(e, t, n, r) {
                var i, c, v, y, x, T = t;
                2 !== b && (b = 2, s && clearTimeout(s), l = void 0, a = r || "", w.readyState = e > 0 ? 4 : 0, i = e >= 200 && 300 > e || 304 === e, n && (y = $(d, w, n)), y = z(d, y, w, i), i ? (d.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (ie.lastModified[o] = x), x = w.getResponseHeader("etag"), x && (ie.etag[o] = x)), 204 === e || "HEAD" === d.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = y.state, c = y.data, v = y.error, i = !v)) : (v = T, (e || !T) && (T = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || T) + "", i ? h.resolveWith(f, [c, T, w]) : h.rejectWith(f, [w, T, v]), w.statusCode(g), g = void 0, u && p.trigger(i ? "ajaxSuccess" : "ajaxError", [w, d, i ? c : v]), m.fireWith(f, [w, T]), u && (p.trigger("ajaxComplete", [w, d]), --ie.active || ie.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var r, i, o, a, s, u, l, c, d = ie.ajaxSetup({}, t),
                f = d.context || d,
                p = d.context && (f.nodeType || f.jquery) ? ie(f) : ie.event,
                h = ie.Deferred(),
                m = ie.Callbacks("once memory"),
                g = d.statusCode || {},
                v = {},
                y = {},
                b = 0,
                x = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === b) {
                            if (!c)
                                for (c = {}; t = Ot.exec(a);) c[t[1].toLowerCase()] = t[2];
                            t = c[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? a : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return b || (e = y[n] = y[n] || e, v[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return b || (d.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > b)
                                for (t in e) g[t] = [g[t], e[t]];
                            else w.always(e[w.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || x;
                        return l && l.abort(t), n(0, t), this
                    }
                };
            if (h.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, d.url = ((e || d.url || _t) + "").replace(Mt, "").replace(Rt, qt[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = ie.trim(d.dataType || "*").toLowerCase().match(be) || [""], null == d.crossDomain && (r = Wt.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] === qt[1] && r[2] === qt[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (qt[3] || ("http:" === qt[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = ie.param(d.data, d.traditional)), R($t, d, t, w), 2 === b) return w;
            u = ie.event && d.global, u && 0 === ie.active++ && ie.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Pt.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (Lt.test(o) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = Ft.test(o) ? o.replace(Ft, "$1_=" + jt++) : o + (Lt.test(o) ? "&" : "?") + "_=" + jt++)), d.ifModified && (ie.lastModified[o] && w.setRequestHeader("If-Modified-Since", ie.lastModified[o]), ie.etag[o] && w.setRequestHeader("If-None-Match", ie.etag[o])), (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", d.contentType), w.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + It + "; q=0.01" : "") : d.accepts["*"]);
            for (i in d.headers) w.setRequestHeader(i, d.headers[i]);
            if (d.beforeSend && (d.beforeSend.call(f, w, d) === !1 || 2 === b)) return w.abort();
            x = "abort";
            for (i in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[i](d[i]);
            if (l = R(zt, d, t, w)) {
                w.readyState = 1, u && p.trigger("ajaxSend", [w, d]), d.async && d.timeout > 0 && (s = setTimeout(function() {
                    w.abort("timeout")
                }, d.timeout));
                try {
                    b = 1, l.send(v, n)
                } catch (T) {
                    if (!(2 > b)) throw T;
                    n(-1, T)
                }
            } else n(-1, "No Transport");
            return w
        },
        getJSON: function(e, t, n) {
            return ie.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return ie.get(e, void 0, t, "script")
        }
    }), ie.each(["get", "post"], function(e, t) {
        ie[t] = function(e, n, r, i) {
            return ie.isFunction(n) && (i = i || r, r = n, n = void 0), ie.ajax({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            })
        }
    }), ie._evalUrl = function(e) {
        return ie.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, ie.fn.extend({
        wrapAll: function(e) {
            if (ie.isFunction(e)) return this.each(function(t) {
                ie(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = ie(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return this.each(ie.isFunction(e) ? function(t) {
                ie(this).wrapInner(e.call(this, t))
            } : function() {
                var t = ie(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = ie.isFunction(e);
            return this.each(function(n) {
                ie(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                ie.nodeName(this, "body") || ie(this).replaceWith(this.childNodes)
            }).end()
        }
    }), ie.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ne.reliableHiddenOffsets() && "none" === (e.style && e.style.display || ie.css(e, "display"))
    }, ie.expr.filters.visible = function(e) {
        return !ie.expr.filters.hidden(e)
    };
    var Ut = /%20/g,
        Vt = /\[\]$/,
        Jt = /\r?\n/g,
        Yt = /^(?:submit|button|image|reset|file)$/i,
        Gt = /^(?:input|select|textarea|keygen)/i;
    ie.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                t = ie.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = ie.ajaxSettings && ie.ajaxSettings.traditional), ie.isArray(e) || e.jquery && !ie.isPlainObject(e)) ie.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) I(n, e[n], t, i);
        return r.join("&").replace(Ut, "+")
    }, ie.fn.extend({
        serialize: function() {
            return ie.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = ie.prop(this, "elements");
                return e ? ie.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !ie(this).is(":disabled") && Gt.test(this.nodeName) && !Yt.test(e) && (this.checked || !je.test(e))
            }).map(function(e, t) {
                var n = ie(this).val();
                return null == n ? null : ie.isArray(n) ? ie.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Jt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Jt, "\r\n")
                }
            }).get()
        }
    }), ie.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && X() || U()
    } : X;
    var Qt = 0,
        Kt = {},
        Zt = ie.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function() {
        for (var e in Kt) Kt[e](void 0, !0)
    }), ne.cors = !!Zt && "withCredentials" in Zt, Zt = ne.ajax = !!Zt, Zt && ie.ajaxTransport(function(e) {
        if (!e.crossDomain || ne.cors) {
            var t;
            return {
                send: function(n, r) {
                    var i, o = e.xhr(),
                        a = ++Qt;
                    if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (i in e.xhrFields) o[i] = e.xhrFields[i];
                    e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (i in n) void 0 !== n[i] && o.setRequestHeader(i, n[i] + "");
                    o.send(e.hasContent && e.data || null), t = function(n, i) {
                        var s, u, l;
                        if (t && (i || 4 === o.readyState))
                            if (delete Kt[a], t = void 0, o.onreadystatechange = ie.noop, i) 4 !== o.readyState && o.abort();
                            else {
                                l = {}, s = o.status, "string" == typeof o.responseText && (l.text = o.responseText);
                                try {
                                    u = o.statusText
                                } catch (c) {
                                    u = ""
                                }
                                s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = l.text ? 200 : 404
                            }
                        l && r(s, u, l, o.getAllResponseHeaders())
                    }, e.async ? 4 === o.readyState ? setTimeout(t) : o.onreadystatechange = Kt[a] = t : t()
                },
                abort: function() {
                    t && t(void 0, !0)
                }
            }
        }
    }), ie.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return ie.globalEval(e), e
            }
        }
    }), ie.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), ie.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n = he.head || ie("head")[0] || he.documentElement;
            return {
                send: function(r, i) {
                    t = he.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = 'https://www.samsung.com/pe/', t.onload = t.onreadystatechange = function(e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || i(200, "success"))
                    }, n.insertBefore(t, n.firstChild)
                },
                abort: function() {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var en = [],
        tn = /(=)\?(?=&|$)|\?\?/;
    ie.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = en.pop() || ie.expando + "_" + jt++;
            return this[e] = !0, e
        }
    }), ie.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, o, a, s = t.jsonp !== !1 && (tn.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && tn.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = ie.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(tn, "$1" + i) : t.jsonp !== !1 && (t.url += (Lt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
            return a || ie.error(i + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
            a = arguments
        }, r.always(function() {
            e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, en.push(i)), a && ie.isFunction(o) && o(a[0]), a = o = void 0
        }), "script") : void 0
    }), ie.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || he;
        var r = de.exec(e),
            i = !n && [];
        return r ? [t.createElement(r[1])] : (r = ie.buildFragment([e], t, i), i && i.length && ie(i).remove(), ie.merge([], r.childNodes))
    };
    var nn = ie.fn.load;
    ie.fn.load = function(e, t, n) {
        if ("string" != typeof e && nn) return nn.apply(this, arguments);
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return s >= 0 && (r = ie.trim(e.slice(s, e.length)), e = e.slice(0, s)), ie.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && ie.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: t
        }).done(function(e) {
            i = arguments, a.html(r ? ie("<div>").append(ie.parseHTML(e)).find(r) : e)
        }).complete(n && function(e, t) {
            a.each(n, i || [e.responseText, t, e])
        }), this
    }, ie.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        ie.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), ie.expr.filters.animated = function(e) {
        return ie.grep(ie.timers, function(t) {
            return e === t.elem
        }).length
    };
    var rn = e.document.documentElement;
    ie.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l, c = ie.css(e, "position"),
                d = ie(e),
                f = {};
            "static" === c && (e.style.position = "relative"), s = d.offset(), o = ie.css(e, "top"), u = ie.css(e, "left"), l = ("absolute" === c || "fixed" === c) && ie.inArray("auto", [o, u]) > -1, l ? (r = d.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), ie.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : d.css(f)
        }
    }, ie.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                ie.offset.setOffset(this, e, t)
            });
            var t, n, r = {
                    top: 0,
                    left: 0
                },
                i = this[0],
                o = i && i.ownerDocument;
            return o ? (t = o.documentElement, ie.contains(t, i) ? (typeof i.getBoundingClientRect !== Ce && (r = i.getBoundingClientRect()), n = V(o), {
                top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : r) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    r = this[0];
                return "fixed" === ie.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ie.nodeName(e[0], "html") || (n = e.offset()), n.top += ie.css(e[0], "borderTopWidth", !0), n.left += ie.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - ie.css(r, "marginTop", !0),
                    left: t.left - n.left - ie.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || rn; e && !ie.nodeName(e, "html") && "static" === ie.css(e, "position");) e = e.offsetParent;
                return e || rn
            })
        }
    }), ie.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = /Y/.test(t);
        ie.fn[e] = function(r) {
            return De(this, function(e, r, i) {
                var o = V(e);
                return void 0 === i ? o ? t in o ? o[t] : o.document.documentElement[r] : e[r] : void(o ? o.scrollTo(n ? ie(o).scrollLeft() : i, n ? i : ie(o).scrollTop()) : e[r] = i)
            }, e, r, arguments.length, null)
        }
    }), ie.each(["top", "left"], function(e, t) {
        ie.cssHooks[t] = k(ne.pixelPosition, function(e, n) {
            return n ? (n = tt(e, t), rt.test(n) ? ie(e).position()[t] + "px" : n) : void 0
        })
    }), ie.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        ie.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            ie.fn[r] = function(r, i) {
                var o = arguments.length && (n || "boolean" != typeof r),
                    a = n || (r === !0 || i === !0 ? "margin" : "border");
                return De(this, function(t, n, r) {
                    var i;
                    return ie.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? ie.css(t, n, a) : ie.style(t, n, r, a)
                }, t, o ? r : void 0, o, null)
            }
        })
    }), ie.fn.size = function() {
        return this.length
    }, ie.fn.andSelf = ie.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return ie
    });
    var on = e.jQuery,
        an = e.$;
    return ie.noConflict = function(t) {
        return e.$ === ie && (e.$ = an), t && e.jQuery === ie && (e.jQuery = on), ie
    }, typeof t === Ce && (e.jQuery = e.$ = ie), ie
});
window.Granite = window.Granite || {},
    function(e, t) {
        e.Util = function() {
            var e = {
                patchText: function(e, n) {
                    if (n)
                        if (t.isArray(n))
                            for (var r = 0; r < n.length; r++) e = e.replace("{" + r + "}", n[r]);
                        else e = e.replace("{0}", n);
                    return e
                }
            };
            return e
        }()
    }(Granite, jQuery),
    function(Granite, util, $) {
        Granite.HTTP = function() {
            var contextPath = null,
                SCRIPT_URL_REGEXP = /^(?:http|https):\/\/[^\/]+(\/.*)\/(?:etc(\/.*)*\/clientlibs|libs(\/.*)*\/clientlibs|apps(\/.*)*\/clientlibs).*\.js(\?.*)?$/,
                ENCODE_PATH_REGEXP = /[^1\w-\.!~\*'\(\)\/%;:@&=\$,]/,
                loginRedirected = !1,
                self = {};
            return self.getSchemeAndAuthority = function(e) {
                var t;
                try {
                    return -1 == e.indexOf("://") ? "" : (t = e.indexOf("/", e.indexOf("://") + 3), -1 == t ? e : e.substring(0, t))
                } catch (n) {
                    return ""
                }
            }, self.getContextPath = function() {
                return contextPath
            }, self.detectContextPath = function() {
                try {
                    if (window.CQURLInfo) contextPath = CQURLInfo.contextPath || "";
                    else {
                        for (var e = document.getElementsByTagName("script"), t = 0; t < e.length; t++) {
                            var n = SCRIPT_URL_REGEXP.exec(e[t].src);
                            if (n) return void(contextPath = n[1])
                        }
                        contextPath = ""
                    }
                } catch (r) {}
            }, self.externalize = function(e) {
                try {
                    0 == e.indexOf("/") && contextPath && 0 != e.indexOf(contextPath + "/") && (e = contextPath + e)
                } catch (t) {}
                return e
            }, self.internalize = function(e, t) {
                if ("/" == e.charAt(0)) return contextPath === e ? "" : contextPath && 0 == e.indexOf(contextPath + "/") ? e.substring(contextPath.length) : e;
                t || (t = document);
                var n = self.getSchemeAndAuthority(t.location.href),
                    r = self.getSchemeAndAuthority(e);
                return n == r ? e.substring(r.length + (contextPath ? contextPath.length : 0)) : e
            }, self.getPath = function(e) {
                if (e) e = self.removeParameters(e), e = self.removeAnchor(e);
                else {
                    if (window.CQURLInfo && CQURLInfo.requestPath) return CQURLInfo.requestPath;
                    e = window.location.pathname
                }
                e = self.internalize(e);
                var t = e.indexOf(".", e.lastIndexOf("/"));
                return -1 != t && (e = e.substring(0, t)), e
            }, self.removeAnchor = function(e) {
                return -1 != e.indexOf("#") ? e.substring(0, e.indexOf("#")) : e
            }, self.removeParameters = function(e) {
                return -1 != e.indexOf("?") ? e.substring(0, e.indexOf("?")) : e
            }, self.encodePathOfURI = function(e) {
                var t, n;
                return -1 != e.indexOf("?") ? (t = e.split("?"), n = "?") : -1 != e.indexOf("#") ? (t = e.split("#"), n = "#") : t = [e], ENCODE_PATH_REGEXP.test(t[0]) && (t[0] = self.encodePath(t[0])), t.join(n)
            }, self.encodePath = function(e) {
                return e = encodeURI(e).replace(/%5B/g, "[").replace(/%5D/g, "]"), e = e.replace(/\+/g, "%2B"), e = e.replace(/\?/g, "%3F"), e = e.replace(/;/g, "%3B"), e = e.replace(/#/g, "%23"), e = e.replace(/=/g, "%3D"), e = e.replace(/\$/g, "%24"), e = e.replace(/,/g, "%2C"), e = e.replace(/'/g, "%27"), e = e.replace(/"/g, "%22")
            }, self.handleLoginRedirect = function() {
                if (!loginRedirected) {
                    loginRedirected = !0;
                    var e = util.getTopWindow().document.location;
                    e.href = self.externalize(sling.LOGIN_URL) + "?resource=" + encodeURIComponent(e.pathname + e.search + e.hash)
                }
            }, self.getXhrHook = function(e, t, n) {
                if (t = t || "GET", window.G_XHR_HOOK && $.isFunction(G_XHR_HOOK)) {
                    var r = {
                        url: e,
                        method: t
                    };
                    return n && (r.params = n), G_XHR_HOOK(r)
                }
                return null
            }, self.eval = function(response) {
                "object" != typeof response && (response = $.ajax({
                    url: response,
                    type: "get",
                    async: !1
                }));
                try {
                    return eval("(" + (response.body ? response.body : response.responseText) + ")")
                } catch (e) {}
                return null
            }, self
        }()
    }(Granite, Granite.Util, jQuery),
    function(e, t, n, r, i) {
        t.I18n = function() {
            var t = {},
                a = "https://www.samsung.com/aemapi/common/i18n/dict.",
                o = ".b2c",
                c = ".json",
                l = void 0,
                u = !1,
                s = null,
                f = {},
                h = !1,
                g = function(e) {
                    if (i("#i18nAppsParam").val() && i("#i18nAppsParam").val().length > -1 && (o += "." + i("#i18nAppsParam").val()), h) return a + e + o + c;
                    var t = i("html").attr("data-i18n-dictionary-src");
                    return t ? t.replace("{locale}", encodeURIComponent(e)).replace("{+locale}", e) : a + e + o + c
                };
            return f.LOCALE_DEFAULT = "en", f.PSEUDO_LANGUAGE = "zz", f.PSEUDO_PATTERN_KEY = "_pseudoPattern_", f.init = function(e) {
                e = e || {}, this.setLocale(e.locale), this.setUrlPrefix(e.urlPrefix), this.setUrlSuffix(e.urlSuffix)
            }, f.setLocale = function(e) {
                e && (l = e)
            }, f.getLocale = function() {
                return i.isFunction(l) && (l = l()), l || e.documentElement.lang || f.LOCALE_DEFAULT
            }, f.setUrlPrefix = function(e) {
                e && (a = e, h = !0)
            }, f.setUrlSuffix = function(e) {
                e && (c = e, h = !0)
            }, f.getDictionary = function(e) {
                if (e = e || f.getLocale(), !t[e]) {
                    u = 0 == e.indexOf(f.PSEUDO_LANGUAGE);
                    try {
                        var n = i.ajax(g(e), {
                            async: !1,
                            dataType: "json"
                        });
                        t[e] = i.parseJSON(n.responseText)
                    } catch (r) {}
                    t[e] || (t[e] = {})
                }
                return t[e]
            }, f.get = function(e, t, r) {
                var i, a, o;
                return i = f.getDictionary(), o = u ? f.PSEUDO_PATTERN_KEY : r ? e + " ((" + r + "))" : e, i && (a = i[o]), a || (a = e), u && (a = a.replace("{string}", e).replace("{comment}", r ? r : "")), n.patchText(a, t)
            }, f.getVar = function(e, t) {
                return e ? f.get(e, null, t) : null
            }, f.getLanguages = function() {
                if (!s) try {
                    var e = r.eval("/libs/wcm/core/resources/languages.overlay.infinity.json");
                    i.each(e, function(e, t) {
                        t.title = f.getVar(t.language), t.title && t.country && "*" != t.country && (t.title += " (" + f.getVar(t.country) + ")")
                    }), s = e
                } catch (t) {
                    s = {}
                }
                return s
            }, f.parseLocale = function(e) {
                if (!e) return null;
                var t = e.indexOf("_");
                0 > t && (t = e.indexOf("-"));
                var n, r;
                return 0 > t ? (n = e, r = null) : (n = e.substring(0, t), r = e.substring(t + 1)), {
                    code: e,
                    language: n,
                    country: r
                }
            }, f
        }()
    }(document, Granite, Granite.Util, Granite.HTTP, jQuery), Granite.HTTP.detectContextPath();
! function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
    "use strict";
    var i = window.Slick || {};
    window.smg = window.smg || {}, window.smg.aem = window.smg.aem || {}, void 0 === e("#gnbRunmodeInfo").val() ? window.smg.aem.globaltext = {
        _prev: "Previous",
        _next: "Next"
    } : (Granite.I18n.setLocale(e("#siteCode").val()), window.smg.aem.globaltext = {
        _prev: Granite.I18n.get("Previous", [], e("#siteCode").val()),
        _next: Granite.I18n.get("Next", [], e("#siteCode").val())
    });
    var t = window.smg.aem.globaltext;
    i = function() {
        function i(i, s) {
            var n, r = this;
            r.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: e(i),
                appendDots: e(i),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="' + t._prev + '" tabindex="0" role="button">' + t._prev + "</button>",
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="' + t._next + '" tabindex="0" role="button">' + t._next + "</button>",
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(i, t) {
                    return e('<button type="button" data-role="none" role="button" tabindex="0" />').text("slide" + (t + 1))
                },
                dots: !1,
                dotsClass: "slick-dots",
                dotsBgClass: "s-slick-dots",
                elements: "div",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, r.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, e.extend(r, r.initials), r.activeBreakpoint = null, r.animType = null, r.animProp = null, r.breakpoints = [], r.breakpointSettings = [], r.cssTransitions = !1, r.focussed = !1, r.interrupted = !1, r.hidden = "hidden", r.paused = !0, r.positionProp = null, r.respondTo = null, r.rowCount = 1, r.shouldClick = !0, r.$slider = e(i), r.$slidesCache = null, r.transformType = null, r.transitionType = null, r.visibilityChange = "visibilitychange", r.windowWidth = 0, r.windowTimer = null, n = e(i).data("slick") || {}, r.options = e.extend({}, r.defaults, s, n), r.currentSlide = r.options.initialSlide, r.originalSettings = r.options, "undefined" != typeof document.mozHidden ? (r.hidden = "mozHidden", r.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (r.hidden = "webkitHidden", r.visibilityChange = "webkitvisibilitychange"), r.autoPlay = e.proxy(r.autoPlay, r), r.autoPlayClear = e.proxy(r.autoPlayClear, r), r.autoPlayIterator = e.proxy(r.autoPlayIterator, r), r.changeSlide = e.proxy(r.changeSlide, r), r.clickHandler = e.proxy(r.clickHandler, r), r.selectHandler = e.proxy(r.selectHandler, r), r.setPosition = e.proxy(r.setPosition, r), r.swipeHandler = e.proxy(r.swipeHandler, r), r.dragHandler = e.proxy(r.dragHandler, r), r.keyHandler = e.proxy(r.keyHandler, r), r.instanceUid = o++, r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, r.registerBreakpoints(), r.init(!0)
        }
        var o = 0;
        return i
    }(), i.prototype.activateADA = function() {
        var e = this;
        e.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }, i.prototype.addSlide = i.prototype.slickAdd = function(i, t, o) {
        var s = this;
        if ("boolean" == typeof t) o = t, t = null;
        else if (0 > t || t >= s.slideCount) return !1;
        s.unload(), "number" == typeof t ? 0 === t && 0 === s.$slides.length ? e(i).appendTo(s.$slideTrack) : o ? e(i).insertBefore(s.$slides.eq(t)) : e(i).insertAfter(s.$slides.eq(t)) : o === !0 ? e(i).prependTo(s.$slideTrack) : e(i).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function(i, t) {
            e(t).attr("data-slick-index", i)
        }), s.$slidesCache = s.$slides, s.reinit()
    }, i.prototype.animateHeight = function() {
        var e = this;
        if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
            var i = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.animate({
                height: i
            }, e.options.speed)
        }
    }, i.prototype.animateSlide = function(i, t) {
        var o = {},
            s = this;
        s.animateHeight(), s.options.rtl === !0 && s.options.vertical === !1 && (i = -i), s.transformsEnabled === !1 ? s.options.vertical === !1 ? s.$slideTrack.animate({
            left: i
        }, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({
            top: i
        }, s.options.speed, s.options.easing, t) : s.cssTransitions === !1 ? (s.options.rtl === !0 && (s.currentLeft = -s.currentLeft), e({
            animStart: s.currentLeft
        }).animate({
            animStart: i
        }, {
            duration: s.options.speed,
            easing: s.options.easing,
            step: function(e) {
                e = Math.ceil(e), s.options.vertical === !1 ? (o[s.animType] = "translate(" + e + "px, 0px)", s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + e + "px)", s.$slideTrack.css(o))
            },
            complete: function() {
                t && t.call()
            }
        })) : (s.applyTransition(), i = Math.ceil(i), o[s.animType] = s.options.vertical === !1 ? "translate3d(" + i + "px, 0px, 0px)" : "translate3d(0px," + i + "px, 0px)", s.$slideTrack.css(o), t && setTimeout(function() {
            s.disableTransition(), t.call()
        }, s.options.speed))
    }, i.prototype.getNavTarget = function() {
        var i = this,
            t = i.options.asNavFor;
        return t && null !== t && (t = e(t).not(i.$slider)), t
    }, i.prototype.asNavFor = function(i) {
        var t = this,
            o = t.getNavTarget();
        null !== o && "object" == typeof o && o.each(function() {
            var t = e(this).slick("getSlick");
            t.unslicked || t.slideHandler(i, !0)
        })
    }, i.prototype.applyTransition = function(e) {
        var i = this,
            t = {};
        t[i.transitionType] = i.options.fade === !1 ? i.transformType + " " + i.options.speed + "ms " + i.options.cssEase : "opacity " + i.options.speed + "ms " + i.options.cssEase, i.options.fade === !1 ? i.$slideTrack.css(t) : i.$slides.eq(e).css(t)
    }, i.prototype.autoPlay = function() {
        var e = this;
        e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
    }, i.prototype.autoPlayClear = function() {
        var e = this;
        e.autoPlayTimer && clearInterval(e.autoPlayTimer)
    }, i.prototype.autoPlayIterator = function() {
        var e = this,
            i = e.currentSlide + e.options.slidesToScroll;
        e.paused || e.interrupted || e.focussed || (e.options.infinite === !1 && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (i = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 === 0 && (e.direction = 1))), e.slideHandler(i))
    }, i.prototype.buildArrows = function() {
        var i = this;
        i.options.arrows === !0 && (i.$prevArrow = e(i.options.prevArrow).addClass("slick-arrow"), i.$nextArrow = e(i.options.nextArrow).addClass("slick-arrow"), i.slideCount > i.options.slidesToShow ? (i.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), i.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.prependTo(i.options.appendArrows), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.appendTo(i.options.appendArrows), i.options.infinite !== !0 && i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : i.$prevArrow.add(i.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, i.prototype.buildDots = function() {
        var i, t, o, s = this;
        if (s.options.dots === !0 && s.slideCount > s.options.slidesToShow) {
            for (s.$slider.addClass("slick-dotted"), o = e("<div />").addClass(s.options.dotsBgClass), t = e("<ul />").addClass(s.options.dotsClass), i = 0; i <= s.getDotCount(); i += 1) t.append(e("<li />").append(s.options.customPaging.call(this, s, i)));
            s.$dotsBg = o.appendTo(s.options.appendDots), s.$dots = t.appendTo(o), s.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }, i.prototype.buildOut = function() {
        var i = this;
        i.$slides = "ul" === i.options.elements ? i.$slider.find(">" + i.options.elements).children(i.options.slide + ":not(.slick-cloned)").addClass("slick-slide") : i.$slider.children(i.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), i.slideCount = i.$slides.length, i.$slides.each(function(i, t) {
            e(t).attr("data-slick-index", i).data("originalStyling", e(t).attr("style") || "")
        }), i.$slider.addClass("slick-slider"), i.$slideTrack = "ul" === i.options.elements ? i.$slider.find(">" + i.options.elements).addClass("slick-track") : 0 === i.slideCount ? e('<div class="slick-track"/>').appendTo(i.$slider) : i.$slides.wrapAll('<div class="slick-track"/>').parent(), i.$list = i.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), i.$slideTrack.css("opacity", 0), (i.options.centerMode === !0 || i.options.swipeToSlide === !0) && (i.options.slidesToScroll = 1), e("img[data-lazy]", i.$slider).not("[src]").addClass("slick-loading"), i.setupInfinite(), i.buildArrows(), i.buildDots(), i.updateDots(), i.setSlideClasses("number" == typeof i.currentSlide ? i.currentSlide : 0), i.options.draggable === !0 && i.$list.addClass("draggable")
    }, i.prototype.buildRows = function() {
        var e, i, t, o, s, n, r, l = this;
        if (o = document.createDocumentFragment(), n = "ul" === l.options.elements ? l.$slider.find(">" + l.options.elements).children() : l.$slider.children(), l.options.rows > 1) {
            for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), e = 0; s > e; e++) {
                var d = document.createElement("div");
                for (i = 0; i < l.options.rows; i++) {
                    var a = document.createElement("div");
                    for (t = 0; t < l.options.slidesPerRow; t++) {
                        var c = e * r + (i * l.options.slidesPerRow + t);
                        n.get(c) && a.appendChild(n.get(c))
                    }
                    d.appendChild(a)
                }
                o.appendChild(d)
            }
            l.$slider.empty().append(o), l.$slider.children().children().children().css({
                width: 100 / l.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, i.prototype.checkResponsive = function(i, t) {
        var o, s, n, r = this,
            l = !1,
            d = r.$slider.width(),
            a = window.innerWidth || e(window).width();
        if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
            s = null;
            for (o in r.breakpoints) r.breakpoints.hasOwnProperty(o) && (r.originalSettings.mobileFirst === !1 ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
            null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[s]), i === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(i)), l = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[s]), i === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(i)), l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, i === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(i), l = s), i || l === !1 || (r.touchObject.curX = void 0, r.$slider.trigger("breakpoint", [r, l]))
        }
    }, i.prototype.changeSlide = function(i, t) {
        var o, s, n, r = this,
            l = e(i.currentTarget);
        switch (l.is("a") && i.preventDefault(), l.is("li") || (l = l.closest("li")), n = r.slideCount % r.options.slidesToScroll !== 0, o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, i.data.message) {
            case "previous":
                s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
                break;
            case "next":
                s = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
                break;
            case "index":
                var d = 0 === i.data.index ? 0 : i.data.index || l.index() * r.options.slidesToScroll;
                r.slideHandler(r.checkNavigable(d), !1, t), l.children().trigger("focus");
                break;
            default:
                return
        }
    }, i.prototype.checkNavigable = function(e) {
        var i, t, o = this;
        if (i = o.getNavigableIndexes(), t = 0, e > i[i.length - 1]) e = i[i.length - 1];
        else
            for (var s in i) {
                if (e < i[s]) {
                    e = t;
                    break
                }
                t = i[s]
            }
        return e
    }, i.prototype.cleanUpEvents = function() {
        var i = this;
        i.options.dots && null !== i.$dots && e("li", i.$dots).off("click.slick", i.changeSlide).off("mouseenter.slick", e.proxy(i.interrupt, i, !0)).off("mouseleave.slick", e.proxy(i.interrupt, i, !1)), i.$slider.off("focus.slick blur.slick"), i.options.arrows === !0 && i.slideCount > i.options.slidesToShow && (i.$prevArrow && i.$prevArrow.off("click.slick", i.changeSlide), i.$nextArrow && i.$nextArrow.off("click.slick", i.changeSlide)), i.$list.off("touchstart.slick mousedown.slick", i.swipeHandler), i.$list.off("touchmove.slick mousemove.slick", i.swipeHandler), i.$list.off("touchend.slick mouseup.slick", i.swipeHandler), i.$list.off("touchcancel.slick mouseleave.slick", i.swipeHandler), i.$list.off("click.slick", i.clickHandler), e(document).off(i.visibilityChange, i.visibility), i.cleanUpSlideEvents(), i.options.accessibility === !0 && i.$list.off("keydown.slick", i.keyHandler), i.options.focusOnSelect === !0 && e(i.$slideTrack).children().off("click.slick", i.selectHandler), e(window).off("orientationchange.slick.slick-" + i.instanceUid, i.orientationChange), e(window).off("resize.slick.slick-" + i.instanceUid, i.resize), e("[draggable!=true]", i.$slideTrack).off("dragstart", i.preventDefault), e(window).off("load.slick.slick-" + i.instanceUid, i.setPosition), e(document).off("ready.slick.slick-" + i.instanceUid, i.setPosition)
    }, i.prototype.cleanUpSlideEvents = function() {
        var i = this;
        i.$list.off("mouseenter.slick", e.proxy(i.interrupt, i, !0)), i.$list.off("mouseleave.slick", e.proxy(i.interrupt, i, !1))
    }, i.prototype.cleanUpRows = function() {
        var e, i = this;
        i.options.rows > 1 && (e = i.$slides.children().children(), e.removeAttr("style"), i.$slider.empty().append(e))
    }, i.prototype.clickHandler = function(e) {
        var i = this;
        i.shouldClick === !1 && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
    }, i.prototype.destroy = function(i) {
        var t = this;
        t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), e(".slick-cloned", t.$slider).detach(), t.$dotsBg && t.$dotsBg.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            e(this).attr("style", e(this).data("originalStyling"))
        }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, i || t.$slider.trigger("destroy", [t])
    }, i.prototype.disableTransition = function(e) {
        var i = this,
            t = {};
        t[i.transitionType] = "", i.options.fade === !1 ? i.$slideTrack.css(t) : i.$slides.eq(e).css(t)
    }, i.prototype.fadeSlide = function(e, i) {
        var t = this;
        t.cssTransitions === !1 ? (t.$slides.eq(e).css({
            zIndex: t.options.zIndex
        }), t.$slides.eq(e).animate({
            opacity: 1
        }, t.options.speed, t.options.easing, i)) : (t.applyTransition(e), t.$slides.eq(e).css({
            opacity: 1,
            zIndex: t.options.zIndex
        }), i && setTimeout(function() {
            t.disableTransition(e), i.call()
        }, t.options.speed))
    }, i.prototype.fadeSlideOut = function(e) {
        var i = this;
        i.cssTransitions === !1 ? i.$slides.eq(e).animate({
            opacity: 0,
            zIndex: i.options.zIndex - 2
        }, i.options.speed, i.options.easing) : (i.applyTransition(e), i.$slides.eq(e).css({
            opacity: 0,
            zIndex: i.options.zIndex - 2
        }))
    }, i.prototype.filterSlides = i.prototype.slickFilter = function(e) {
        var i = this;
        null !== e && (i.$slidesCache = i.$slides, i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.filter(e).appendTo(i.$slideTrack), i.reinit())
    }, i.prototype.focusHandler = function() {
        var i = this;
        i.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(t) {
            t.stopImmediatePropagation();
            var o = e(this);
            setTimeout(function() {
                i.options.pauseOnFocus && (i.focussed = o.is(":focus"), i.autoPlay())
            }, 0)
        })
    }, i.prototype.getCurrent = i.prototype.slickCurrentSlide = function() {
        var e = this;
        return e.currentSlide
    }, i.prototype.getDotCount = function() {
        var e = this,
            i = 0,
            t = 0,
            o = 0;
        if (e.options.infinite === !0)
            for (; i < e.slideCount;) ++o, i = t + e.options.slidesToScroll, t += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else if (e.options.centerMode === !0) o = e.slideCount;
        else if (e.options.asNavFor)
            for (; i < e.slideCount;) ++o, i = t + e.options.slidesToScroll, t += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else o = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
        return o - 1
    }, i.prototype.getLeft = function(e) {
        var i, t, o, s = this,
            n = 0;
        return s.slideOffset = 0, t = s.$slides.first().outerHeight(!0), s.options.infinite === !0 ? (s.slideCount > s.options.slidesToShow && (s.slideOffset = s.slideWidth * s.options.slidesToShow * -1, n = t * s.options.slidesToShow * -1), s.slideCount % s.options.slidesToScroll !== 0 && e + s.options.slidesToScroll > s.slideCount && s.slideCount > s.options.slidesToShow && (e > s.slideCount ? (s.slideOffset = (s.options.slidesToShow - (e - s.slideCount)) * s.slideWidth * -1, n = (s.options.slidesToShow - (e - s.slideCount)) * t * -1) : (s.slideOffset = s.slideCount % s.options.slidesToScroll * s.slideWidth * -1, n = s.slideCount % s.options.slidesToScroll * t * -1))) : e + s.options.slidesToShow > s.slideCount && (s.slideOffset = (e + s.options.slidesToShow - s.slideCount) * s.slideWidth, n = (e + s.options.slidesToShow - s.slideCount) * t), s.slideCount <= s.options.slidesToShow && (s.slideOffset = 0, n = 0), s.options.centerMode === !0 && s.options.infinite === !0 ? s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2) - s.slideWidth : s.options.centerMode === !0 && (s.slideOffset = 0, s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2)), i = s.options.vertical === !1 ? e * s.slideWidth * -1 + s.slideOffset : e * t * -1 + n, s.options.variableWidth === !0 && (o = s.$slideTrack.children(".slick-slide").eq(s.slideCount <= s.options.slidesToShow || s.options.infinite === !1 ? e : e + s.options.slidesToShow), i = s.options.rtl === !0 ? o[0] ? -1 * (s.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, s.options.centerMode === !0 && (o = s.$slideTrack.children(".slick-slide").eq(s.slideCount <= s.options.slidesToShow || s.options.infinite === !1 ? e : e + s.options.slidesToShow + 1), i = s.options.rtl === !0 ? o[0] ? -1 * (s.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, i += (s.$list.width() - o.outerWidth()) / 2)), i
    }, i.prototype.getOption = i.prototype.slickGetOption = function(e) {
        var i = this;
        return i.options[e]
    }, i.prototype.getNavigableIndexes = function() {
        var e, i = this,
            t = 0,
            o = 0,
            s = [];
        for (i.options.infinite === !1 ? e = i.slideCount : (t = -1 * i.options.slidesToScroll, o = -1 * i.options.slidesToScroll, e = 2 * i.slideCount); e > t;) s.push(t), t = o + i.options.slidesToScroll, o += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
        return s
    }, i.prototype.getSlick = function() {
        return this
    }, i.prototype.getSlideCount = function() {
        var i, t, o, s = this;
        return o = s.options.centerMode === !0 ? s.slideWidth * Math.floor(s.options.slidesToShow / 2) : 0, s.options.swipeToSlide === !0 ? (s.$slideTrack.find(".slick-slide").each(function(i, n) {
            return n.offsetLeft - o + e(n).outerWidth() / 2 > -1 * s.swipeLeft ? (t = n, !1) : void 0
        }), i = Math.abs(e(t).attr("data-slick-index") - s.currentSlide) || 1) : s.options.slidesToScroll
    }, i.prototype.goTo = i.prototype.slickGoTo = function(e, i) {
        var t = this;
        t.changeSlide({
            data: {
                message: "index",
                index: parseInt(e)
            }
        }, i)
    }, i.prototype.init = function(i) {
        var t = this;
        e(t.$slider).hasClass("slick-initialized") || (e(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), i && t.$slider.trigger("init", [t]), t.options.accessibility === !0 && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay(), t.$slider.find(".slick-list").attr("aria-live", "off"))
    }, i.prototype.initADA = function() {
        var i = this;
        i.$slides.add(i.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), i.$slideTrack.attr("role", "listbox"), i.$slides.not(i.$slideTrack.find(".slick-cloned")).each(function(t) {
            e(this).attr({
                role: "option",
                "aria-describedby": "slick-slide" + i.instanceUid + t
            })
        }), null !== i.$dots && i.$dots.attr("role", "tablist").find("li").each(function(t) {
            e(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + i.instanceUid + t,
                id: "slick-slide" + i.instanceUid + t
            })
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button"), i.activateADA()
    }, i.prototype.initArrowEvents = function() {
        var e = this;
        e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, e.changeSlide))
    }, i.prototype.initDotEvents = function() {
        var i = this;
        i.options.dots === !0 && i.slideCount > i.options.slidesToShow && e("li", i.$dots).on("click.slick", {
            message: "index"
        }, i.changeSlide), i.options.dots === !0 && i.options.pauseOnDotsHover === !0 && e("li", i.$dots).on("mouseenter.slick", e.proxy(i.interrupt, i, !0)).on("mouseleave.slick", e.proxy(i.interrupt, i, !1))
    }, i.prototype.initSlideEvents = function() {
        var i = this;
        i.options.pauseOnHover && (i.$list.on("mouseenter.slick", e.proxy(i.interrupt, i, !0)), i.$list.on("mouseleave.slick", e.proxy(i.interrupt, i, !1)))
    }, i.prototype.initializeEvents = function() {
        var i = this;
        i.initArrowEvents(), i.initDotEvents(), i.initSlideEvents(), i.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, i.swipeHandler), i.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, i.swipeHandler), i.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, i.swipeHandler), i.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, i.swipeHandler), i.$list.on("click.slick", i.clickHandler), e(document).on(i.visibilityChange, e.proxy(i.visibility, i)), i.options.accessibility === !0 && i.$list.on("keydown.slick", i.keyHandler), i.options.focusOnSelect === !0 && e(i.$slideTrack).children().on("click.slick", i.selectHandler), e(window).on("orientationchange.slick.slick-" + i.instanceUid, e.proxy(i.orientationChange, i)), e(window).on("resize.slick.slick-" + i.instanceUid, e.proxy(i.resize, i)), e("[draggable!=true]", i.$slideTrack).on("dragstart", i.preventDefault), e(window).on("load.slick.slick-" + i.instanceUid, i.setPosition), e(document).on("ready.slick.slick-" + i.instanceUid, i.setPosition)
    }, i.prototype.initUI = function() {
        var e = this;
        e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dotsBg.show()
    }, i.prototype.keyHandler = function(e) {
        var i = this;
        e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && i.options.accessibility === !0 ? i.changeSlide({
            data: {
                message: i.options.rtl === !0 ? "next" : "previous"
            }
        }) : 39 === e.keyCode && i.options.accessibility === !0 && i.changeSlide({
            data: {
                message: i.options.rtl === !0 ? "previous" : "next"
            }
        }))
    }, i.prototype.lazyLoad = function() {
        function i(i) {
            e("img[data-lazy]", i).each(function() {
                var i = e(this),
                    t = e(this).attr("data-lazy"),
                    o = document.createElement("img");
                o.onload = function() {
                    i.animate({
                        opacity: 0
                    }, 100, function() {
                        i.attr("src", t).animate({
                            opacity: 1
                        }, 200, function() {
                            i.removeAttr("data-lazy").removeClass("slick-loading")
                        }), r.$slider.trigger("lazyLoaded", [r, i, t])
                    })
                }, o.onerror = function() {
                    i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, i, t])
                }, o.src = t
            })
        }
        var t, o, s, n, r = this;
        r.options.centerMode === !0 ? r.options.infinite === !0 ? (s = r.currentSlide + (r.options.slidesToShow / 2 + 1), n = s + r.options.slidesToShow + 2) : (s = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)), n = 2 + (r.options.slidesToShow / 2 + 1) + r.currentSlide) : (s = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide, n = Math.ceil(s + r.options.slidesToShow), r.options.fade === !0 && (s > 0 && s--, n <= r.slideCount && n++)), t = r.$slider.find(".slick-slide").slice(s, n), i(t), r.slideCount <= r.options.slidesToShow ? (o = r.$slider.find(".slick-slide"), i(o)) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? (o = r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow), i(o)) : 0 === r.currentSlide && (o = r.$slider.find(".slick-cloned").slice(-1 * r.options.slidesToShow), i(o))
    }, i.prototype.loadSlider = function() {
        var e = this;
        e.setPosition(), e.$slideTrack.css({
            opacity: 1
        }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
    }, i.prototype.next = i.prototype.slickNext = function() {
        var e = this;
        e.changeSlide({
            data: {
                message: "next"
            }
        })
    }, i.prototype.orientationChange = function() {
        var e = this;
        e.checkResponsive(), e.setPosition()
    }, i.prototype.pause = i.prototype.slickPause = function() {
        var e = this;
        e.autoPlayClear(), e.paused = !0
    }, i.prototype.play = i.prototype.slickPlay = function() {
        var e = this;
        e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
    }, i.prototype.postSlide = function(e) {
        var i = this;
        i.unslicked || (i.$slider.trigger("afterChange", [i, e]), i.animating = !1, i.setPosition(), i.swipeLeft = null, i.options.autoplay && i.autoPlay(), i.options.accessibility === !0 && i.initADA())
    }, i.prototype.prev = i.prototype.slickPrev = function() {
        var e = this;
        e.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, i.prototype.preventDefault = function(e) {
        e.preventDefault()
    }, i.prototype.progressiveLazyLoad = function(i) {
        i = i || 1;
        var t, o, s, n = this,
            r = e("img[data-lazy]", n.$slider);
        r.length ? (t = r.first(), o = t.attr("data-lazy"), s = document.createElement("img"), s.onload = function() {
            t.attr("src", o).removeAttr("data-lazy").removeClass("slick-loading"), n.options.adaptiveHeight === !0 && n.setPosition(), n.$slider.trigger("lazyLoaded", [n, t, o]), n.progressiveLazyLoad()
        }, s.onerror = function() {
            3 > i ? setTimeout(function() {
                n.progressiveLazyLoad(i + 1)
            }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, t, o]), n.progressiveLazyLoad())
        }, s.src = o) : n.$slider.trigger("allImagesLoaded", [n])
    }, i.checkFullScreen = function() {
        var e;
        return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement ? e = !0 : "exitFullscreen" in document ? (document.exitFullscreen(), e = !1) : "webkitExitFullscreen" in document ? (document.webkitExitFullscreen(), e = !1) : "mozCancelFullScreen" in document ? (document.mozCancelFullScreen(), e = !1) : "msExitFullscreen" in document && (document.msExitFullscreen(), e = !1), e
    }, i.prototype.refresh = function(t) {
        if (!e("body").hasClass("video-layer-open") || !i.checkFullScreen()) {
            var o, s, n = this;
            s = n.slideCount - n.options.slidesToShow, !n.options.infinite && n.currentSlide > s && (n.currentSlide = s), n.slideCount <= n.options.slidesToShow && (n.currentSlide = 0), o = n.currentSlide, n.destroy(!0), e.extend(n, n.initials, {
                currentSlide: o
            }), n.init(), t || n.changeSlide({
                data: {
                    message: "index",
                    index: o
                }
            }, !1)
        }
    }, i.prototype.registerBreakpoints = function() {
        var i, t, o, s = this,
            n = s.options.responsive || null;
        if ("array" === e.type(n) && n.length) {
            s.respondTo = s.options.respondTo || "window";
            for (i in n)
                if (o = s.breakpoints.length - 1, t = n[i].breakpoint, n.hasOwnProperty(i)) {
                    for (; o >= 0;) s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--;
                    s.breakpoints.push(t), s.breakpointSettings[t] = n[i].settings
                }
            s.breakpoints.sort(function(e, i) {
                return s.options.mobileFirst ? e - i : i - e
            })
        }
    }, i.prototype.reinit = function() {
        var i = this;
        i.$slides = i.$slideTrack.children(i.options.slide).addClass("slick-slide"), i.slideCount = i.$slides.length, i.currentSlide >= i.slideCount && 0 !== i.currentSlide && (i.currentSlide = i.currentSlide - i.options.slidesToScroll), i.slideCount <= i.options.slidesToShow && (i.currentSlide = 0), i.registerBreakpoints(), i.setProps(), i.setupInfinite(), i.buildArrows(), i.updateArrows(), i.initArrowEvents(), i.buildDots(), i.updateDots(), i.initDotEvents(), i.cleanUpSlideEvents(), i.initSlideEvents(), i.checkResponsive(!1, !0), i.options.focusOnSelect === !0 && e(i.$slideTrack).children().on("click.slick", i.selectHandler), i.setSlideClasses("number" == typeof i.currentSlide ? i.currentSlide : 0), i.setPosition(), i.focusHandler(), i.paused = !i.options.autoplay, i.autoPlay(), i.$slider.trigger("reInit", [i])
    }, i.prototype.resize = function() {
        var i = this;
        e(window).width() !== i.windowWidth && (clearTimeout(i.windowDelay), i.windowDelay = window.setTimeout(function() {
            i.windowWidth = e(window).width(), i.checkResponsive(), i.unslicked || i.setPosition()
        }, 50))
    }, i.prototype.removeSlide = i.prototype.slickRemove = function(e, i, t) {
        var o = this;
        return "boolean" == typeof e ? (i = e, e = i === !0 ? 0 : o.slideCount - 1) : e = i === !0 ? --e : e, o.slideCount < 1 || 0 > e || e > o.slideCount - 1 ? !1 : (o.unload(), t === !0 ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(e).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, void o.reinit())
    }, i.prototype.setCSS = function(e) {
        var i, t, o = this,
            s = {};
        o.options.rtl === !0 && (e = -e), i = "left" == o.positionProp ? Math.ceil(e) + "px" : "0px", t = "top" == o.positionProp ? Math.ceil(e) + "px" : "0px", s[o.positionProp] = e, o.transformsEnabled === !1 ? o.$slideTrack.css(s) : (s = {}, o.cssTransitions === !1 ? (s[o.animType] = "translate(" + i + ", " + t + ")", o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + i + ", " + t + ", 0px)", o.$slideTrack.css(s)))
    }, i.prototype.setDimensions = function() {
        var e = this;
        e.options.vertical === !1 ? e.options.centerMode === !0 && e.$list.css({
            padding: "0px " + e.options.centerPadding
        }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), e.options.centerMode === !0 && e.$list.css({
            padding: e.options.centerPadding + " 0px"
        })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), e.options.vertical === !1 && e.options.variableWidth === !1 ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : e.options.variableWidth === !0 ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
        var i = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        e.options.variableWidth === !1 && e.$slideTrack.children(".slick-slide").width(e.slideWidth - i)
    }, i.prototype.setFade = function() {
        var i, t = this;
        t.$slides.each(function(o, s) {
            i = t.slideWidth * o * -1, e(s).css(t.options.rtl === !0 ? {
                position: "relative",
                right: i,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0
            } : {
                position: "relative",
                left: i,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0
            })
        }), t.$slides.eq(t.currentSlide).css({
            zIndex: t.options.zIndex - 1,
            opacity: 1
        })
    }, i.prototype.setHeight = function() {
        var e = this;
        if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
            var i = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.css("height", i)
        }
    }, i.prototype.setOption = i.prototype.slickSetOption = function() {
        var i, t, o, s, n, r = this,
            l = !1;
        if ("object" === e.type(arguments[0]) ? (o = arguments[0], l = arguments[1], n = "multiple") : "string" === e.type(arguments[0]) && (o = arguments[0], s = arguments[1], l = arguments[2], "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? n = "responsive" : "undefined" != typeof arguments[1] && (n = "single")), "single" === n) r.options[o] = s;
        else if ("multiple" === n) e.each(o, function(e, i) {
            r.options[e] = i
        });
        else if ("responsive" === n)
            for (t in s)
                if ("array" !== e.type(r.options.responsive)) r.options.responsive = [s[t]];
                else {
                    for (i = r.options.responsive.length - 1; i >= 0;) r.options.responsive[i].breakpoint === s[t].breakpoint && r.options.responsive.splice(i, 1), i--;
                    r.options.responsive.push(s[t])
                }
        l && (r.unload(), r.reinit())
    }, i.prototype.setPosition = function() {
        var e = this;
        e.setDimensions(), e.setHeight(), e.options.fade === !1 ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
    }, i.prototype.setProps = function() {
        var e = this,
            i = document.body.style;
        e.positionProp = e.options.vertical === !0 ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), (void 0 !== i.WebkitTransition || void 0 !== i.MozTransition || void 0 !== i.msTransition) && e.options.useCSS === !0 && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== i.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform",
            e.transitionType = "OTransition", void 0 === i.perspectiveProperty && void 0 === i.webkitPerspective && (e.animType = !1)), void 0 !== i.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === i.perspectiveProperty && void 0 === i.MozPerspective && (e.animType = !1)), void 0 !== i.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === i.perspectiveProperty && void 0 === i.webkitPerspective && (e.animType = !1)), void 0 !== i.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === i.msTransform && (e.animType = !1)), void 0 !== i.transform && e.animType !== !1 && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && e.animType !== !1
    }, i.prototype.setSlideClasses = function(e) {
        var i, t, o, s, n = this;
        t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(e).addClass("slick-current"), n.options.centerMode === !0 ? (i = Math.floor(n.options.slidesToShow / 2), n.options.infinite === !0 && (e >= i && e <= n.slideCount - 1 - i ? n.$slides.slice(e - i, e + i + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + e, t.slice(o - i + 1, o + i + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : e === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(e).addClass("slick-center")) : e >= 0 && e <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(e, e + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = n.options.infinite === !0 ? n.options.slidesToShow + e : e, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - e < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === n.options.lazyLoad && n.lazyLoad()
    }, i.prototype.setupInfinite = function() {
        var i, t, o, s = this;
        if (s.options.fade === !0 && (s.options.centerMode = !1), s.options.infinite === !0 && s.options.fade === !1 && (t = null, s.slideCount > s.options.slidesToShow)) {
            for (o = s.options.centerMode === !0 ? s.options.slidesToShow + 1 : s.options.slidesToShow, i = s.slideCount; i > s.slideCount - o; i -= 1) t = i - 1, e(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
            for (i = 0; o > i; i += 1) t = i, e(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
            s.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                e(this).attr("id", "")
            })
        }
    }, i.prototype.interrupt = function(e) {
        var i = this;
        e || i.autoPlay(), i.interrupted = e
    }, i.prototype.selectHandler = function(i) {
        var t = this,
            o = e(i.target).is(".slick-slide") ? e(i.target) : e(i.target).parents(".slick-slide"),
            s = parseInt(o.attr("data-slick-index"));
        return s || (s = 0), t.slideCount <= t.options.slidesToShow ? (t.setSlideClasses(s), void t.asNavFor(s)) : void t.slideHandler(s)
    }, i.prototype.slideHandler = function(e, i, t) {
        var o, s, n, r, l, d = null,
            a = this;
        return i = i || !1, a.animating === !0 && a.options.waitForAnimate === !0 || a.options.fade === !0 && a.currentSlide === e || a.slideCount <= a.options.slidesToShow ? void 0 : (i === !1 && a.asNavFor(e), o = e, d = a.getLeft(o), r = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft, a.options.infinite === !1 && a.options.centerMode === !1 && (0 > e || e > a.getDotCount() * a.options.slidesToScroll) ? void(a.options.fade === !1 && (o = a.currentSlide, t !== !0 ? a.animateSlide(r, function() {
            a.postSlide(o)
        }) : a.postSlide(o))) : a.options.infinite === !1 && a.options.centerMode === !0 && (0 > e || e > a.slideCount - a.options.slidesToScroll) ? void(a.options.fade === !1 && (o = a.currentSlide, t !== !0 ? a.animateSlide(r, function() {
            a.postSlide(o)
        }) : a.postSlide(o))) : (a.options.autoplay && clearInterval(a.autoPlayTimer), s = 0 > o ? a.slideCount % a.options.slidesToScroll !== 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll !== 0 ? 0 : o - a.slideCount : o, a.animating = !0, a.$slider.trigger("beforeChange", [a, a.currentSlide, s]), n = a.currentSlide, a.currentSlide = s, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (l = a.getNavTarget(), l = l.slick("getSlick"), l.slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide)), a.updateDots(), a.updateArrows(), a.options.fade === !0 ? (t !== !0 ? (a.fadeSlideOut(n), a.fadeSlide(s, function() {
            a.postSlide(s)
        })) : a.postSlide(s), void a.animateHeight()) : void(t !== !0 ? a.animateSlide(d, function() {
            a.postSlide(s)
        }) : a.postSlide(s))))
    }, i.prototype.startLoad = function() {
        var e = this;
        e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dotsBg.hide(), e.$slider.addClass("slick-loading")
    }, i.prototype.swipeDirection = function() {
        var e, i, t, o, s = this;
        return e = s.touchObject.startX - s.touchObject.curX, i = s.touchObject.startY - s.touchObject.curY, t = Math.atan2(i, e), o = Math.round(180 * t / Math.PI), 0 > o && (o = 360 - Math.abs(o)), 45 >= o && o >= 0 ? s.options.rtl === !1 ? "left" : "right" : 360 >= o && o >= 315 ? s.options.rtl === !1 ? "left" : "right" : o >= 135 && 225 >= o ? s.options.rtl === !1 ? "right" : "left" : s.options.verticalSwiping === !0 ? o >= 35 && 135 >= o ? "down" : "up" : "vertical"
    }, i.prototype.swipeEnd = function(e) {
        var i, t, o = this;
        if (o.dragging = !1, o.interrupted = !1, o.shouldClick = o.touchObject.swipeLength > 10 ? !1 : !0, void 0 === o.touchObject.curX) return !1;
        if (o.touchObject.edgeHit === !0 && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
            switch (t = o.swipeDirection()) {
                case "left":
                case "down":
                    i = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    i = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1
            }
            "vertical" != t && (o.slideHandler(i), o.touchObject = {}, o.$slider.trigger("swipe", [o, t]))
        } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {})
    }, i.prototype.swipeHandler = function(e) {
        var i = this;
        if (!(i.options.swipe === !1 || "ontouchend" in document && i.options.swipe === !1 || i.options.draggable === !1 && -1 !== e.type.indexOf("mouse"))) switch (i.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, i.touchObject.minSwipe = i.listWidth / i.options.touchThreshold, i.options.verticalSwiping === !0 && (i.touchObject.minSwipe = i.listHeight / i.options.touchThreshold), e.data.action) {
            case "start":
                i.swipeStart(e);
                break;
            case "move":
                i.swipeMove(e);
                break;
            case "end":
                i.swipeEnd(e)
        }
    }, i.prototype.swipeMove = function(e) {
        var i, t, o, s, n, r = this;
        return n = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !r.dragging || n && 1 !== n.length ? !1 : (i = r.getLeft(r.currentSlide), r.touchObject.curX = void 0 !== n ? n[0].pageX : e.clientX, r.touchObject.curY = void 0 !== n ? n[0].pageY : e.clientY, r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curX - r.touchObject.startX, 2))), r.options.verticalSwiping === !0 && (r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curY - r.touchObject.startY, 2)))), t = r.swipeDirection(), "vertical" !== t ? (void 0 !== e.originalEvent && r.touchObject.swipeLength > 4 && e.preventDefault(), s = (r.options.rtl === !1 ? 1 : -1) * (r.touchObject.curX > r.touchObject.startX ? 1 : -1), r.options.verticalSwiping === !0 && (s = r.touchObject.curY > r.touchObject.startY ? 1 : -1), o = r.touchObject.swipeLength, r.touchObject.edgeHit = !1, r.options.infinite === !1 && (0 === r.currentSlide && "right" === t || r.currentSlide >= r.getDotCount() && "left" === t) && (o = r.touchObject.swipeLength * r.options.edgeFriction, r.touchObject.edgeHit = !0), r.swipeLeft = r.options.vertical === !1 ? i + o * s : i + o * (r.$list.height() / r.listWidth) * s, r.options.verticalSwiping === !0 && (r.swipeLeft = i + o * s), r.options.fade === !0 || r.options.touchMove === !1 ? !1 : r.animating === !0 ? (r.swipeLeft = null, !1) : void r.setCSS(r.swipeLeft)) : void 0)
    }, i.prototype.swipeStart = function(e) {
        var i, t = this;
        return t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow ? (t.touchObject = {}, !1) : (void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (i = e.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== i ? i.pageX : e.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== i ? i.pageY : e.clientY, void(t.dragging = !0))
    }, i.prototype.unfilterSlides = i.prototype.slickUnfilter = function() {
        var e = this;
        null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
    }, i.prototype.unload = function() {
        var i = this;
        e(".slick-cloned", i.$slider).remove(), i.$dotsBg && i.$dotsBg.remove(), i.$prevArrow && i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove(), i.$nextArrow && i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove(), i.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, i.prototype.unslick = function(e) {
        var i = this;
        i.$slider.trigger("unslick", [i, e]), i.destroy()
    }, i.prototype.updateArrows = function() {
        var e, i = this;
        e = Math.floor(i.options.slidesToShow / 2), i.options.arrows === !0 && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - i.options.slidesToShow && i.options.centerMode === !1 ? (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - 1 && i.options.centerMode === !0 && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, i.prototype.updateDots = function() {
        var e = this;
        null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }, i.prototype.visibility = function() {
        var e = this;
        e.options.autoplay && (e.interrupted = document[e.hidden] ? !0 : !1)
    }, e.fn.slick = function() {
        var e, t, o = this,
            s = arguments[0],
            n = Array.prototype.slice.call(arguments, 1),
            r = o.length;
        for (e = 0; r > e; e++)
            if ("object" == typeof s || "undefined" == typeof s ? o[e].slick = new i(o[e], s) : t = o[e].slick[s].apply(o[e].slick, n), "undefined" != typeof t) return t;
        return o
    }
});
! function(e, t, n) {
    function a(e) {
        return e.match(/\D+$/)
    }

    function r(e, t, n, a) {
        if ("d" != n && c(e)) {
            var r = h.exec(t),
                i = "auto" === e.css(n) ? 0 : e.css(n),
                o = "string" == typeof i ? p(i) : i,
                s = ("string" == typeof t ? p(t) : t, a === !0 ? 0 : o),
                u = e.is(":hidden"),
                l = e.translation();
            if ("left" == n && (s = parseInt(o, 10) + l.x), "right" == n && (s = parseInt(o, 10) + l.x), "top" == n && (s = parseInt(o, 10) + l.y), "bottom" == n && (s = parseInt(o, 10) + l.y), r || "show" != t ? r || "hide" != t || (s = 0) : (s = 1, u && e.css({
                    display: f(e.context.tagName),
                    opacity: 0
                })), r) {
                var d = parseFloat(r[2]);
                return r[1] && (d = ("-=" === r[1] ? -1 : 1) * d + parseInt(s, 10)), "%" == r[3] && (d += "%"), d
            }
            return s
        }
    }

    function i(e, t, n) {
        return n === !0 || A === !0 && n !== !1 && _ ? "translate3d(" + e + "px, " + t + "px, 0)" : "translate(" + e + "px," + t + "px)"
    }

    function o(t, n, a, r, i, o, u, f) {
        var c = t.data(I),
            d = c && !l(c) ? c : e.extend(!0, {}, x),
            m = i,
            y = e.inArray(n, g) > -1;
        if (y) {
            var v = d.meta,
                h = p(t.css(n)) || 0,
                b = n + "_o";
            m = i - h, v[n] = m, v[b] = "auto" == t.css(n) ? 0 + m : h + m || 0, d.meta = v, u && 0 === m && (m = 0 - v[b], v[n] = m, v[b] = 0)
        }
        return t.data(I, s(t, d, n, a, r, m, o, u, f))
    }

    function s(e, t, n, a, r, o, s, u, l) {
        var f = !1,
            p = s === !0 && u === !0;
        t = t || {}, t.original || (t.original = {}, f = !0), t.properties = t.properties || {}, t.secondary = t.secondary || {};
        for (var c = t.meta, d = t.original, m = t.properties, g = t.secondary, v = y.length - 1; v >= 0; v--) {
            var h = y[v] + "transition-property",
                b = y[v] + "transition-duration",
                x = y[v] + "transition-timing-function";
            n = p ? y[v] + "transform" : n, f && (d[h] = e.css(h) || "", d[b] = e.css(b) || "", d[x] = e.css(x) || ""), g[n] = p ? i(c.left, c.top, l) : o, m[h] = (m[h] ? m[h] + "," : "") + n, m[b] = (m[b] ? m[b] + "," : "") + a + "ms", m[x] = (m[x] ? m[x] + "," : "") + r
        }
        return t
    }

    function u(e) {
        for (var t in e)
            if (!("width" != t && "height" != t || "show" != e[t] && "hide" != e[t] && "toggle" != e[t])) return !0;
        return !1
    }

    function l(e) {
        for (var t in e) return !1;
        return !0
    }

    function f(e) {
        e = e.toUpperCase();
        var t = {
            LI: "list-item",
            TR: "table-row",
            TD: "table-cell",
            TH: "table-cell",
            CAPTION: "table-caption",
            COL: "table-column",
            COLGROUP: "table-column-group",
            TFOOT: "table-footer-group",
            THEAD: "table-header-group",
            TBODY: "table-row-group"
        };
        return "string" == typeof t[e] ? t[e] : "block"
    }

    function p(e) {
        return parseFloat(e.replace(a(e), ""))
    }

    function c(e) {
        var t = !0;
        return e.each(function(e, n) {
            return t = t && n.ownerDocument
        }), t
    }

    function d(t, n, a) {
        if (!c(a)) return !1;
        var r = e.inArray(t, m) > -1;
        return "width" != t && "height" != t && "opacity" != t || parseFloat(n) !== parseFloat(a.css(t)) || (r = !1), r
    }
    var m = ["top", "right", "bottom", "left", "opacity", "height", "width"],
        g = ["top", "right", "bottom", "left"],
        y = ["-webkit-", "-moz-", "-o-", ""],
        v = ["avoidTransforms", "useTranslate3d", "leaveTransforms"],
        h = /^([+-]=)?([\d+-.]+)(.*)$/,
        b = /([A-Z])/g,
        x = {
            secondary: {},
            meta: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        },
        w = "px",
        I = "jQe",
        O = "cubic-bezier(",
        T = ")",
        C = null,
        Q = !1,
        S = document.body || document.documentElement,
        D = S.style,
        F = "webkitTransitionEnd oTransitionEnd transitionend",
        k = void 0 !== D.WebkitTransition || void 0 !== D.MozTransition || void 0 !== D.OTransition || void 0 !== D.transition,
        _ = "WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix,
        A = _;
    e.expr && e.expr.filters && (C = e.expr.filters.animated, e.expr.filters.animated = function(t) {
        return e(t).data("events") && e(t).data("events")[F] ? !0 : C.call(this, t)
    }), e.extend({
        toggle3DByDefault: function() {
            return A = !A
        },
        toggleDisabledByDefault: function() {
            return Q = !Q
        },
        setDisabledByDefault: function(e) {
            return Q = e
        }
    }), e.fn.translation = function() {
        if (!this[0]) return null;
        var e = this[0],
            t = window.getComputedStyle(e, null),
            n = {
                x: 0,
                y: 0
            };
        if (t)
            for (var a = y.length - 1; a >= 0; a--) {
                var r = t.getPropertyValue(y[a] + "transform");
                if (r && /matrix/i.test(r)) {
                    var i = r.replace(/^matrix\(/i, "").split(/, |\)$/g);
                    n = {
                        x: parseInt(i[4], 10),
                        y: parseInt(i[5], 10)
                    };
                    break
                }
            }
        return n
    }, e.fn.animate = function(n, a, i, s) {
        n = n || {};
        var f = !("undefined" != typeof n.bottom || "undefined" != typeof n.right),
            p = e.speed(a, i, s),
            c = 0,
            m = function() {
                c--, 0 === c && "function" == typeof p.complete && p.complete.apply(this, arguments)
            },
            h = "undefined" != typeof n.avoidCSSTransitions ? n.avoidCSSTransitions : Q;
        return h === !0 || !k || l(n) || u(n) || p.duration <= 0 || p.step ? t.apply(this, arguments) : this[p.queue === !0 ? "queue" : "each"](function() {
            var a = e(this),
                i = e.extend({}, p),
                s = function(t) {
                    var r = a.data(I) || {
                            original: {}
                        },
                        i = {};
                    if (2 == t.eventPhase) {
                        if (n.leaveTransforms !== !0) {
                            for (var o = y.length - 1; o >= 0; o--) i[y[o] + "transform"] = "";
                            if (f && "undefined" != typeof r.meta)
                                for (var s, u = 0; s = g[u]; ++u) i[s] = r.meta[s + "_o"] + w, e(this).css(s, i[s])
                        }
                        a.unbind(F).css(r.original).css(i).data(I, null), "hide" === n.opacity && a.css({
                            display: "none",
                            opacity: ""
                        }), m.call(this)
                    }
                },
                u = {
                    bounce: O + "0.0, 0.35, .5, 1.3" + T,
                    linear: "linear",
                    swing: "ease-in-out",
                    easeInQuad: O + "0.550, 0.085, 0.680, 0.530" + T,
                    easeInCubic: O + "0.550, 0.055, 0.675, 0.190" + T,
                    easeInQuart: O + "0.895, 0.030, 0.685, 0.220" + T,
                    easeInQuint: O + "0.755, 0.050, 0.855, 0.060" + T,
                    easeInSine: O + "0.470, 0.000, 0.745, 0.715" + T,
                    easeInExpo: O + "0.950, 0.050, 0.795, 0.035" + T,
                    easeInCirc: O + "0.600, 0.040, 0.980, 0.335" + T,
                    easeInBack: O + "0.600, -0.280, 0.735, 0.045" + T,
                    easeOutQuad: O + "0.250, 0.460, 0.450, 0.940" + T,
                    easeOutCubic: O + "0.215, 0.610, 0.355, 1.000" + T,
                    easeOutQuart: O + "0.165, 0.840, 0.440, 1.000" + T,
                    easeOutQuint: O + "0.230, 1.000, 0.320, 1.000" + T,
                    easeOutSine: O + "0.390, 0.575, 0.565, 1.000" + T,
                    easeOutExpo: O + "0.190, 1.000, 0.220, 1.000" + T,
                    easeOutCirc: O + "0.075, 0.820, 0.165, 1.000" + T,
                    easeOutBack: O + "0.175, 0.885, 0.320, 1.275" + T,
                    easeInOutQuad: O + "0.455, 0.030, 0.515, 0.955" + T,
                    easeInOutCubic: O + "0.645, 0.045, 0.355, 1.000" + T,
                    easeInOutQuart: O + "0.770, 0.000, 0.175, 1.000" + T,
                    easeInOutQuint: O + "0.860, 0.000, 0.070, 1.000" + T,
                    easeInOutSine: O + "0.445, 0.050, 0.550, 0.950" + T,
                    easeInOutExpo: O + "1.000, 0.000, 0.000, 1.000" + T,
                    easeInOutCirc: O + "0.785, 0.135, 0.150, 0.860" + T,
                    easeInOutBack: O + "0.680, -0.550, 0.265, 1.550" + T
                },
                h = {},
                b = u[i.easing || "swing"] ? u[i.easing || "swing"] : i.easing || "swing";
            for (var x in n)
                if (-1 === e.inArray(x, v)) {
                    var C = e.inArray(x, g) > -1,
                        Q = r(a, n[x], x, C && n.avoidTransforms !== !0);
                    d(x, Q, a) ? o(a, x, i.duration, b, Q, C && n.avoidTransforms !== !0, f, n.useTranslate3d) : h[x] = n[x]
                }
            a.unbind(F);
            var S = a.data(I);
            if (!S || l(S) || l(S.secondary)) i.queue = !1;
            else {
                c++, a.css(S.properties);
                var D = S.secondary;
                setTimeout(function() {
                    a.bind(F, s).css(D)
                })
            }
            return l(h) || (c++, t.apply(a, [h, {
                duration: i.duration,
                easing: e.easing[i.easing] ? i.easing : e.easing.swing ? "swing" : "linear",
                complete: m,
                queue: i.queue
            }])), !0
        })
    }, e.fn.animate.defaults = {}, e.fn.stop = function(t, a, r) {
        return k ? (t && this.queue([]), this.each(function() {
            var i = e(this),
                o = i.data(I);
            if (o && !l(o)) {
                var s, u = {};
                if (a) {
                    if (u = o.secondary, !r && void 0 !== typeof o.meta.left_o || void 0 !== typeof o.meta.top_o)
                        for (u.left = void 0 !== typeof o.meta.left_o ? o.meta.left_o : "auto", u.top = void 0 !== typeof o.meta.top_o ? o.meta.top_o : "auto", s = y.length - 1; s >= 0; s--) u[y[s] + "transform"] = ""
                } else if (!l(o.secondary)) {
                    var f = window.getComputedStyle(i[0], null);
                    if (f)
                        for (var p in o.secondary)
                            if (o.secondary.hasOwnProperty(p) && (p = p.replace(b, "-$1").toLowerCase(), u[p] = f.getPropertyValue(p), !r && /matrix/i.test(u[p]))) {
                                var c = u[p].replace(/^matrix\(/i, "").split(/, |\)$/g);
                                for (u.left = parseFloat(c[4]) + parseFloat(i.css("left")) + w || "auto", u.top = parseFloat(c[5]) + parseFloat(i.css("top")) + w || "auto", s = y.length - 1; s >= 0; s--) u[y[s] + "transform"] = ""
                            }
                }
                i.unbind(F), i.css(o.original).css(u).data(I, null)
            } else n.apply(i, [t, a])
        }), this) : n.apply(this, [t, a])
    }
}(jQuery, jQuery.fn.animate, jQuery.fn.stop);
! function() {
    "use strict";

    function t(o) {
        if (!o) throw new Error("No options passed to Waypoint constructor");
        if (!o.element) throw new Error("No element option passed to Waypoint constructor");
        if (!o.handler) throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, o), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = o.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), i[this.key] = this, e += 1
    }
    var e = 0,
        i = {};
    t.prototype.queueTrigger = function(t) {
        this.group.queueTrigger(this, t)
    }, t.prototype.trigger = function(t) {
        this.enabled && this.callback && this.callback.apply(this, t)
    }, t.prototype.destroy = function() {
        this.context.remove(this), this.group.remove(this), delete i[this.key]
    }, t.prototype.disable = function() {
        return this.enabled = !1, this
    }, t.prototype.enable = function() {
        return this.context.refresh(), this.enabled = !0, this
    }, t.prototype.next = function() {
        return this.group.next(this)
    }, t.prototype.previous = function() {
        return this.group.previous(this)
    }, t.invokeAll = function(t) {
        var e = [];
        for (var o in i) e.push(i[o]);
        for (var n = 0, r = e.length; r > n; n++) e[n][t]()
    }, t.destroyAll = function() {
        t.invokeAll("destroy")
    }, t.disableAll = function() {
        t.invokeAll("disable")
    }, t.enableAll = function() {
        t.invokeAll("enable")
    }, t.refreshAll = function() {
        t.Context.refreshAll()
    }, t.viewportHeight = function() {
        return window.innerHeight || document.documentElement.clientHeight
    }, t.viewportWidth = function() {
        return document.documentElement.clientWidth
    }, t.adapters = [], t.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    }, t.offsetAliases = {
        "bottom-in-view": function() {
            return this.context.innerHeight() - this.adapter.outerHeight()
        },
        "right-in-view": function() {
            return this.context.innerWidth() - this.adapter.outerWidth()
        }
    }, window.Waypoint = t
}(),
function() {
    "use strict";

    function t(t) {
        window.setTimeout(t, 1e3 / 60)
    }

    function e(t) {
        this.element = t, this.Adapter = n.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + i, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop()
        }, this.waypoints = {
            vertical: {},
            horizontal: {}
        }, t.waypointContextKey = this.key, o[t.waypointContextKey] = this, i += 1, this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
    }
    var i = 0,
        o = {},
        n = window.Waypoint,
        r = window.onload;
    e.prototype.add = function(t) {
        var e = t.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[e][t.key] = t, this.refresh()
    }, e.prototype.checkEmpty = function() {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
            e = this.Adapter.isEmptyObject(this.waypoints.vertical);
        t && e && (this.adapter.off(".waypoints"), delete o[this.key])
    }, e.prototype.createThrottledResizeHandler = function() {
        function t() {
            e.handleResize(), e.didResize = !1
        }
        var e = this;
        this.adapter.on("resize.waypoints", function() {
            e.didResize || (e.didResize = !0, n.requestAnimationFrame(t))
        })
    }, e.prototype.createThrottledScrollHandler = function() {
        function t() {
            e.handleScroll(), e.didScroll = !1
        }
        var e = this;
        this.adapter.on("scroll.waypoints", function() {
            (!e.didScroll || n.isTouch) && (e.didScroll = !0, n.requestAnimationFrame(t))
        })
    }, e.prototype.handleResize = function() {
        n.Context.refreshAll()
    }, e.prototype.handleScroll = function() {
        var t = {},
            e = {
                horizontal: {
                    newScroll: this.adapter.scrollLeft(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left"
                },
                vertical: {
                    newScroll: this.adapter.scrollTop(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up"
                }
            };
        for (var i in e) {
            var o = e[i],
                n = o.newScroll > o.oldScroll,
                r = n ? o.forward : o.backward;
            for (var s in this.waypoints[i]) {
                var a = this.waypoints[i][s],
                    l = o.oldScroll < a.triggerPoint,
                    h = o.newScroll >= a.triggerPoint,
                    p = l && h,
                    u = !l && !h;
                (p || u) && (a.queueTrigger(r), t[a.group.id] = a.group)
            }
        }
        for (var c in t) t[c].flushTriggers();
        this.oldScroll = {
            x: e.horizontal.newScroll,
            y: e.vertical.newScroll
        }
    }, e.prototype.innerHeight = function() {
        return this.element == this.element.window ? n.viewportHeight() : this.adapter.innerHeight()
    }, e.prototype.remove = function(t) {
        delete this.waypoints[t.axis][t.key], this.checkEmpty()
    }, e.prototype.innerWidth = function() {
        return this.element == this.element.window ? n.viewportWidth() : this.adapter.innerWidth()
    }, e.prototype.destroy = function() {
        var t = [];
        for (var e in this.waypoints)
            for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
        for (var o = 0, n = t.length; n > o; o++) t[o].destroy()
    }, e.prototype.refresh = function() {
        var t, e = this.element == this.element.window,
            i = e ? void 0 : this.adapter.offset(),
            o = {};
        this.handleScroll(), t = {
            horizontal: {
                contextOffset: e ? 0 : i.left,
                contextScroll: e ? 0 : this.oldScroll.x,
                contextDimension: this.innerWidth(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left",
                offsetProp: "left"
            },
            vertical: {
                contextOffset: e ? 0 : i.top,
                contextScroll: e ? 0 : this.oldScroll.y,
                contextDimension: this.innerHeight(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up",
                offsetProp: "top"
            }
        };
        for (var r in t) {
            var s = t[r];
            for (var a in this.waypoints[r]) {
                var l, h, p, u, c, d = this.waypoints[r][a],
                    f = d.options.offset,
                    w = d.triggerPoint,
                    y = 0,
                    g = null == w;
                d.element !== d.element.window && (y = d.adapter.offset()[s.offsetProp]), "function" == typeof f ? f = f.apply(d) : "string" == typeof f && (f = parseFloat(f), d.options.offset.indexOf("%") > -1 && (f = Math.ceil(s.contextDimension * f / 100))), l = s.contextScroll - s.contextOffset, d.triggerPoint = y + l - f, h = w < s.oldScroll, p = d.triggerPoint >= s.oldScroll, u = h && p, c = !h && !p, !g && u ? (d.queueTrigger(s.backward), o[d.group.id] = d.group) : !g && c ? (d.queueTrigger(s.forward), o[d.group.id] = d.group) : g && s.oldScroll >= d.triggerPoint && (d.queueTrigger(s.forward), o[d.group.id] = d.group)
            }
        }
        return n.requestAnimationFrame(function() {
            for (var t in o) o[t].flushTriggers()
        }), this
    }, e.findOrCreateByElement = function(t) {
        return e.findByElement(t) || new e(t)
    }, e.refreshAll = function() {
        for (var t in o) o[t].refresh()
    }, e.findByElement = function(t) {
        return o[t.waypointContextKey]
    }, window.onload = function() {
        r && r(), e.refreshAll()
    }, n.requestAnimationFrame = function(e) {
        var i = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.requestAnimationFrame || t;
        i.call(window, e)
    }, n.Context = e
}(),
function() {
    "use strict";

    function t(t, e) {
        return t.triggerPoint - e.triggerPoint
    }

    function e(t, e) {
        return e.triggerPoint - t.triggerPoint
    }

    function i(t) {
        this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), o[this.axis][this.name] = this
    }
    var o = {
            vertical: {},
            horizontal: {}
        },
        n = window.Waypoint;
    i.prototype.add = function(t) {
        this.waypoints.push(t)
    }, i.prototype.clearTriggerQueues = function() {
        this.triggerQueues = {
            up: [],
            down: [],
            left: [],
            right: []
        }
    }, i.prototype.flushTriggers = function() {
        for (var i in this.triggerQueues) {
            var o = this.triggerQueues[i],
                n = "up" === i || "left" === i;
            o.sort(n ? e : t);
            for (var r = 0, s = o.length; s > r; r += 1) {
                var a = o[r];
                (a.options.continuous || r === o.length - 1) && a.trigger([i])
            }
        }
        this.clearTriggerQueues()
    }, i.prototype.next = function(e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints),
            o = i === this.waypoints.length - 1;
        return o ? null : this.waypoints[i + 1]
    }, i.prototype.previous = function(e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints);
        return i ? this.waypoints[i - 1] : null
    }, i.prototype.queueTrigger = function(t, e) {
        this.triggerQueues[e].push(t)
    }, i.prototype.remove = function(t) {
        var e = n.Adapter.inArray(t, this.waypoints);
        e > -1 && this.waypoints.splice(e, 1)
    }, i.prototype.first = function() {
        return this.waypoints[0]
    }, i.prototype.last = function() {
        return this.waypoints[this.waypoints.length - 1]
    }, i.findOrCreate = function(t) {
        return o[t.axis][t.name] || new i(t)
    }, n.Group = i
}(),
function() {
    "use strict";

    function t(t) {
        this.$element = e(t)
    }
    var e = window.jQuery,
        i = window.Waypoint;
    e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(e, i) {
        t.prototype[i] = function() {
            var t = Array.prototype.slice.call(arguments);
            return this.$element[i].apply(this.$element, t)
        }
    }), e.each(["extend", "inArray", "isEmptyObject"], function(i, o) {
        t[o] = e[o]
    }), i.adapters.push({
        name: "jquery",
        Adapter: t
    }), i.Adapter = t
}(),
function() {
    "use strict";

    function t(t) {
        return function() {
            var i = [],
                o = arguments[0];
            return t.isFunction(arguments[0]) && (o = t.extend({}, arguments[1]), o.handler = arguments[0]), this.each(function() {
                var n = t.extend({}, o, {
                    element: this
                });
                "string" == typeof n.context && (n.context = t(this).closest(n.context)[0]), i.push(new e(n))
            }), i
        }
    }
    var e = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto))
}();
! function() {
    "use strict";

    function t() {}

    function e(t) {
        this.options = i.Adapter.extend({}, e.defaults, t), this.axis = this.options.horizontal ? "horizontal" : "vertical", this.waypoints = [], this.element = this.options.element, this.createWaypoints()
    }
    var i = window.Waypoint;
    e.prototype.createWaypoints = function() {
        for (var t = {
                vertical: [{
                    down: "enter",
                    up: "exited",
                    offset: "100%"
                }, {
                    down: "entered",
                    up: "exit",
                    offset: "bottom-in-view"
                }, {
                    down: "exit",
                    up: "entered",
                    offset: 0
                }, {
                    down: "exited",
                    up: "enter",
                    offset: function() {
                        return -this.adapter.outerHeight()
                    }
                }],
                horizontal: [{
                    right: "enter",
                    left: "exited",
                    offset: "100%"
                }, {
                    right: "entered",
                    left: "exit",
                    offset: "right-in-view"
                }, {
                    right: "exit",
                    left: "entered",
                    offset: 0
                }, {
                    right: "exited",
                    left: "enter",
                    offset: function() {
                        return -this.adapter.outerWidth()
                    }
                }]
            }, e = 0, i = t[this.axis].length; i > e; e++) {
            var n = t[this.axis][e];
            this.createWaypoint(n)
        }
    }, e.prototype.createWaypoint = function(t) {
        var e = this;
        this.waypoints.push(new i({
            context: this.options.context,
            element: this.options.element,
            enabled: this.options.enabled,
            handler: function(t) {
                return function(i) {
                    e.options[t[i]].call(e, i)
                }
            }(t),
            offset: t.offset,
            horizontal: this.options.horizontal
        }))
    }, e.prototype.destroy = function() {
        for (var t = 0, e = this.waypoints.length; e > t; t++) this.waypoints[t].destroy();
        this.waypoints = []
    }, e.prototype.disable = function() {
        for (var t = 0, e = this.waypoints.length; e > t; t++) this.waypoints[t].disable()
    }, e.prototype.enable = function() {
        for (var t = 0, e = this.waypoints.length; e > t; t++) this.waypoints[t].enable()
    }, e.defaults = {
        context: window,
        enabled: !0,
        enter: t,
        entered: t,
        exit: t,
        exited: t
    }, i.Inview = e
}();
! function(t, e, n) {
    "$:nomunge";

    function u(u, o) {
        function i(e) {
            t(s).each(function() {
                var n = t(this);
                this === e.target || n.has(e.target).length || n.triggerHandler(o, [e.target])
            })
        }
        o = o || u + n;
        var s = t(),
            c = u + "." + o + "-special-event";
        t.event.special[o] = {
            setup: function() {
                s = s.add(this), 1 === s.length && t(e).bind(c, i)
            },
            teardown: function() {
                s = s.not(this), 0 === s.length && t(e).unbind(c)
            },
            add: function(t) {
                var e = t.handler;
                t.handler = function(t, n) {
                    t.target = n, e.apply(this, arguments)
                }
            }
        }
    }
    t.map("click dblclick mousemove mousedown mouseup mouseover mouseout change select submit keydown keypress keyup touchstart touchend".split(" "), function(t) {
        u(t)
    }), u("focusin", "focus" + n), u("focusout", "blur" + n), t.addOutsideEvent = u
}(jQuery, document, "outside");
! function(m) {
    "use strict";
    "undefined" == typeof m.smg && (m.smg = {}), m.smg.aem = m.smg.aem || {}, m.smg.aem.varStatic = m.smg.aem.varStatic || {}, m.smg.aem.customEvent = m.smg.aem.customEvent || {}, m.smg.aem.util = m.smg.aem.util || {}, m.smg.aem.common = m.smg.aem.common || {}, m.smg.aem.components = m.smg.aem.components || {}, m.smg.aem.components.home = m.smg.aem.components.home || {}, m.smg.aem.components.aboutsamsung = m.smg.aem.components.aboutsamsung || {}, m.smg.aem.templates = m.smg.aem.templates || {}, m.smg.aem.templates.home = m.smg.aem.templates.home || {}
}(window);
! function(e, t) {
    "use strict";
    "undefined" == typeof e.smg && (e.smg = {}), "undefined" == typeof e.smg.aem && (e.smg.aem = {}), "undefined" == typeof e.smg.aem.util && (e.smg.aem.util = {});
    var i = Object.prototype.hasOwnProperty,
        n = e.document;
    ! function() {
        var t = "Netscape" == navigator.appName,
            i = -1 != navigator.appVersion.indexOf("Mac"),
            n = -1 != navigator.userAgent.indexOf("Safari"),
            a = -1 != navigator.userAgent.indexOf("Chrome");
        e.isPcSafari = t && !i && n && !a ? !0 : !1
    }(), e.smg.aem.util = function() {
        return {
            isArray: function(e) {
                return "array" === t.type(e)
            },
            def: function(e, n) {
                for (var a in n) i.call(n, a) && (e[a] = "object" === t.type(e[a]) ? this.isArray(e[a]) ? n[a].slice(0) : this.def(e[a], n[a]) : n[a]);
                return e
            },
            winSize: function() {
                var i = {
                    w: e.isPcSafari ? t(e).width() : e.innerWidth || n.documentElement.clientWidth || n.body.clientWidth,
                    h: e.isPcSafari ? t(e).height() : e.innerHeight || n.documentElement.clientHeight || n.body.clientHeight
                };
                return i
            },
            getQueryStr: function(t) {
                t = t || e.location.href;
                var i = {};
                return t.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(e, t, n) {
                    i[t] = n
                }), i
            },
            winOpener: function(t) {
                var i, n, a, s = {
                    url: "//www.samsung.com",
                    name: "smg_opener_" + (new Date).getTime(),
                    width: 400,
                    height: 400,
                    left: null,
                    top: null,
                    scrollbars: "no",
                    toolbar: "no",
                    location: "no",
                    directories: "no",
                    status: "no",
                    menubar: "no",
                    resizable: "no"
                };
                a = e.smg.util.def(s, t || {}), a.left = a.left || screen.width / 2 - a.width / 2, a.top = a.top || screen.height / 2 - a.height / 2, n = "";
                for (var o in a) "url" != o && "name" != o && (n += "," + o + "=" + a[o]);
                return n = n.substr(1, n.length), i = window.open(a.url, a.name, n)
            },
            imgLoader: function(e, i) {
                e.each(function() {
                    var n = i || function() {};
                    this.complete || t(this).height() > 0 ? n.apply(e) : t(this).load(function() {
                        n.apply(e)
                    })
                })
            },
            vwOrientationUpdate: function(i) {
                t(e).on("orientationchange", function() {
                    var e = t(i || ".js-vw");
                    e.size() && (e.css("display", "none").height(), e.css("display", ""))
                })
            },
            iPadVWRender: function() {
                navigator.userAgent.match(/iPad/i) && this.vwOrientationUpdate(".js-vw")
            },
            Cookie: function() {
                var t = {
                    expires: "",
                    path: "/",
                    domain: "",
                    secure: ""
                };
                return {
                    setCookie: function(i, n, a) {
                        var s = new Date;
                        s.setTime(s.getTime() + 24 * (a || 0) * 60 * 60 * 1e3);
                        var o = e.smg.aem.util.def(t, {
                            expires: s
                        });
                        document.cookie = [i, "=", n, o.expires ? "; expires=" + o.expires.toUTCString() : "", o.path ? "; path=" + o.path : "", o.domain ? "; domain=" + o.domain : "", o.secure ? "; secure" : ""].join("")
                    },
                    getCookie: function(e) {
                        for (var t, i = e + "=", n = document.cookie.split(";"), a = 0, s = n.length; s > a; a++) {
                            for (t = n[a];
                                " " == t.charAt(0);) t = t.substring(1);
                            if (-1 != t.indexOf(i)) return t.substring(i.length, t.length)
                        }
                        return ""
                    }
                }
            },
            loadCSS: function(e, i, n) {
                e && "string" !== t.type(e) || (e = [e]);
                var a = t("head"),
                    s = [];
                t.map(e, function(e) {
                    var i = t.Deferred();
                    s.push(i), t("<link>").attr({
                        rel: "stylesheet",
                        type: "text/css",
                        href: e + (n ? "?_ts=" + (new Date).getTime() : "")
                    }).appendTo(a).load(function() {
                        i.resolve()
                    })
                }), t.when.apply(t, s).done(function() {
                    t.isFunction(i) && i()
                })
            },
            getServerTime: function(e, i) {
                i = i || window.location.href.toString(), e = e || function() {}, t.ajax({
                    url: i,
                    async: !1,
                    cashe: !1
                }).done(function(t, i, n) {
                    e(new Date(n.getResponseHeader("Date")))
                })
            },
            getRestrictBytes: function(e, t) {
                var i = e.length,
                    n = 0,
                    a = 0,
                    s = "";
                t = t || 100;
                for (var o = 0; i > o; o++) s = e.charAt(o), escape(s).length > 4 ? n += 2 : n++, t >= n && (a = o + 1);
                return {
                    bytes: n,
                    rectLeng: a
                }
            },
            isAemEditMode: function() {
                var i = !1;
                return e.parent && e.frameElement && t(e.parent.document).find(".foundation-authoring-ui-mode").size() && (i = !0), i
            },
            slickOptionControlFuncs: {
                changeOpt: function(e, i, n) {
                    var a = e.data("slick-opt");
                    if (void 0 !== a) {
                        var s = t.extend(!0, {}, i),
                            o = a.autoSlideOpts.autoSlide,
                            r = a.autoSlideOpts.autoSlideTime,
                            l = a.infinite;
                        return s.autoplay = o, s.autoplaySpeed = r, s.infinite = l, i.responsive && (s.responsive[0].settings.infinite = l), e.data("isAutoSlide", o), void 0 !== n && n.data("isAutoSlide", o), s
                    }
                    return i
                },
                setToggleButton: function(e) {
                    var i = e.data("isAutoSlide");
                    if (e = e.hasClass("s-slick") ? e : e.find(".s-slick"), void 0 !== i && i !== !1 && (e.find(".slick-dots").length || e.siblings(".s-slick-dots").find(".slick-dots").length)) {
                        var n, a, s, o = "",
                            r = {
                                PLAY: "",
                                PAUSE: ""
                            };
                        void 0 === t("#gnbRunmodeInfo").val() ? (r.PLAY = "Play", r.PAUSE = "Pause") : (r.PLAY = Granite.I18n.get("play", [], t("#siteCode").val()), r.PAUSE = Granite.I18n.get("Pause", [], t("#siteCode").val())), i ? (o += '<li class="slick-dots-autoplay" aria-hidden="false" aria-live ="polite">', o += '<button class="s-autoplay-pause">' + r.PAUSE + "</button>", o += "</li>") : (o += '<li class="slick-dots-autoplay" aria-hidden="false" aria-live ="polite">', o += '<button class="s-autoplay-play">' + r.PLAY + "</button>", o += "</li>"), e.find(".slick-dots").length ? (a = e.find(".slick-dots"), s = "smg") : e.siblings(".s-slick-dots").length && (a = e.siblings(".s-slick-dots").find(".slick-dots"), s = "cl"), a.length && (a.append(t(o)), n = a.find(".slick-dots-autoplay"));
                        var l = function(e, i, n) {
                                t(i.$dots).find(".slick-dots-autoplay").attr("aria-hidden", !1)
                            },
                            u = function(t) {
                                e.slick(t.hasClass("s-autoplay-pause") ? "slickPlay" : "slickPause")
                            },
                            d = function(i) {
                                var n = t(i.currentTarget).find("> button");
                                n.hasClass("s-autoplay-pause") ? (n.removeClass("s-autoplay-pause"), n.addClass("s-autoplay-play"), n.text(r.PLAY), e.slick("slickPause")) : (n.removeClass("s-autoplay-play"), n.addClass("s-autoplay-pause"), n.text(r.PAUSE), e.slick("slickPlay"))
                            },
                            c = function() {
                                n.off("click.smgaemutil").on("click.smgaemutil", d)
                            },
                            p = function(t) {
                                var i = e.data("detachedButton"),
                                    n = e.data("appendType");
                                "smg" === n ? e.find(".slick-dots").append(i) : "cl" === n && e.siblings(".s-slick-dots").find(".slick-dots").append(i), c(), u(i.find("> button"))
                            };
                        e.data("detachedButton", n), e.data("appendType", s), e.off("breakpoint.smgaemutil").on("breakpoint.smgaemutil", p), e.on("afterChange", l), c()
                    }
                }
            }
        }
    }(), e.smg.aem.util.cookie = new e.smg.aem.util.Cookie, t(function() {
        e.smg.aem.util.iPadVWRender()
    })
}(window, window.jQuery);
! function(e) {
    "use strict";
    "undefined" == typeof e.smg && (e.smg = {}), "undefined" == typeof e.smg.aem && (e.smg.aem = {}), "undefined" == typeof e.smg.aem.varStatic && (e.smg.aem.varStatic = {}), e.smg.aem.varStatic = {
        CSS: {
            VIDEO_OPEN: "video-open",
            LAYER_OPENED: "layer-opened-mo",
            SEARCH_POS: "search-pos",
            NAV_OPEN: "nav-open",
            NAV_CLOSE: "nav-close",
            HAS_ANIMATED: "has-animated",
            IS_SHOW: "is-show",
            IS_HIDE: "is-hide",
            IS_OPEN: "is-open",
            IS_SELECT: "is-select",
            JS_IMG_SRC: "js-img-src",
            JS_IMG_LAZY: "js-img-lazy",
            JS_IMG_LAZY_LOADED: "js-img-lazy-loaded",
            LAZY_LOADED: "lazy-loaded",
            SWITCH_MOBILE: "switch-mobile",
            SWITCH_TABLET: "switch-tablet"
        },
        DATA_ATTR: {
            SRC_PC: "data-src-pc",
            SRC_MOBILE: "data-src-mobile",
            DATA_SRC: "data-src"
        },
        SUPPORT: {
            NO_SVG: "no-svg",
            NO_CSS3: "no-css3",
            IE_LT_8: "lt-ie8",
            COOKIE_WARNING: "cookie-warning",
            TOUCH_DEVICE: "touch-device"
        },
        RESPONSIVE: {
            DESKTOP: {
                NAME: "desktop"
            },
            TABLET: {
                NAME: "tablet",
                WIDTH: 1280
            },
            MOBILE: {
                NAME: "mobile",
                WIDTH: 768
            },
            MIN_MOBILE: {
                NAME: "min_mobile",
                WIDTH: 320
            },
            GNB: {
                NAME: "gnb_reponsive",
                WIDTH: 1024
            }
        },
        BACKTOTOP: {
            TOP_POSITION: "top_position"
        }
    }
}(window);
! function(E) {
    "use strict";
    "undefined" == typeof E.smg && (E.smg = {}), "undefined" == typeof E.smg.aem && (E.smg.aem = {}), "undefined" == typeof E.smg.aem.customEvent && (E.smg.aem.customEvent = {}), E.smg.aem.customEvent = {
        CONNECT: {},
        VIDEO: {
            PLAY: "AEM_VIDEO_PLAY",
            CLOSE: "AEM_VIDEO_CLOSE"
        },
        RESPONSIVE: {
            GET_STATUS: "AEM_RESPONSIVE_GET_STATUS",
            CHANGE: "AEM_RESPONSIVE_CHANGE"
        },
        BACKTOTOP: {
            POSITION_CHANGE: "AEM_POSITION_CHANGE"
        }
    }
}(window);
! function(e, t) {
    "use strict";
    "undefined" == typeof e.smg && (e.smg = {}), "undefined" == typeof e.smg.aem && (e.smg.aem = {}), "undefined" == typeof e.smg.aem.common && (e.smg.aem.common = {});
    var i = e.smg.aem.varStatic,
        n = e.smg.aem.util,
        o = e.smg.aem.customEvent;
    e.smg.aem.common = function() {
        return {
            init: function() {
                return this.detection(), this.responsiveName = "", this.responsiveNameEx = "", this.responsiveGNB = "", this.responsiveGNBEx = "", t("body").on(o.RESPONSIVE.GET_STATUS, t.proxy(this.resizeListener, this)), t(e).on("resize", t.proxy(this.resizeListener, this)), this.resizeListener(), this.skipNavgation = t(".s-skip-content").children(), this.skipNavgation.on("click", t.proxy(this.skipNavgationFunc, this)), this
            },
            detection: function() {
                document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1") || t("body").addClass(i.SUPPORT.NO_SVG), document.all && !document.addEventListener && t("body").addClass(i.SUPPORT.IE_LT_8);
                var e = document.body || document.documentElement,
                    n = e.style,
                    o = void 0 !== n.transition || void 0 !== n.WebkitTransition || void 0 !== n.MozTransition || void 0 !== n.MsTransition || void 0 !== n.OTransition;
                o || t("body").addClass(i.SUPPORT.NO_CSS3);
                var s = "ontouchstart" in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
                s && t("body").addClass(i.SUPPORT.TOUCH_DEVICE)
            },
            resizeListener: function(e) {
                var s = n.winSize().w;
                this.responsiveName = s <= i.RESPONSIVE.MOBILE.WIDTH ? i.RESPONSIVE.MOBILE.NAME : s <= i.RESPONSIVE.TABLET.WIDTH ? i.RESPONSIVE.TABLET.NAME : i.RESPONSIVE.DESKTOP.NAME, this.responsiveGNB = s <= i.RESPONSIVE.GNB.WIDTH ? i.RESPONSIVE.GNB.NAME : "", (this.responsiveName !== this.responsiveNameEx || this.responsiveGNB !== this.responsiveGNBEx) && (this.responsiveNameEx = this.responsiveName, this.responsiveGNBEx = this.responsiveGNB, t("body").trigger(o.RESPONSIVE.CHANGE, {
                    RESPONSIVE_NAME: this.responsiveName,
                    RESPONSIVE_GNB_NAME: this.responsiveGNB,
                    isMobile: s <= i.RESPONSIVE.MOBILE.WIDTH
                })), e && e.type === o.RESPONSIVE.GET_STATUS && t("body").trigger(o.RESPONSIVE.CHANGE, {
                    RESPONSIVE_NAME: this.responsiveName,
                    RESPONSIVE_GNB_NAME: this.responsiveGNB,
                    isMobile: s <= i.RESPONSIVE.MOBILE.WIDTH
                })
            },
            skipNavgationFunc: function(e) {
                t("body").hasClass(i.SUPPORT.TOUCH_DEVICE) || e.preventDefault();
                var n = t(e.currentTarget).attr("href");
                "#accHelp" == n && t(n).focus()
            }
        }
    }();
    var s;
    t(function() {
        s = e.smg.aem.common.init()
    }), t(e).on("resize", function(e) {
        s && s.resizeListener && s.resizeListener.call(s, e)
    })
}(window, window.jQuery),
function(e, t) {
    "use strict";
    var i = e.smg.aem.varStatic,
        n = e.smg.aem.util,
        o = e.smg.aem.customEvent;
    "function" == typeof t.fn.heightMatch && (t.fn.heightMatch = function() {}), e._heightMatch = function(e, t) {
        var i = {
            compType: "list",
            listWrap: "",
            isListMatch: !0,
            targetElements: [],
            matchAlignIgnore: "",
            matchAlign: 0,
            matchAttr: "height",
            forceMobile: !1
        };
        this.container = e, this.opts = n.def(i, t || {}), this.init()
    }, e._heightMatch.prototype = {
        init: function() {
            this.setElements(), this.bindEvents(), this.maxHeightBuildChk()
        },
        setElements: function() {
            this.$body = t("body"), this.IS_MOBILE_MODE = !1, this.obj = this.getTargetElement(), this.isColumns = this.obj.hasClass("cm-columns__item"), this.columnLineClass = "is-active-line", this.opts.matchAlign = this.opts.matchAlign > 0 ? this.opts.matchAlign : this.obj.length, this.maxLine = Math.ceil(this.obj.length / this.opts.matchAlign), this.setTime = 500
        },
        getTargetElement: function() {
            return this.container.hasClass(this.opts.targetElements.substring(1)) ? this.container : this.container.find(this.opts.targetElements)
        },
        bindEvents: function() {
            this.$body.on(o.RESPONSIVE.CHANGE, t.proxy(this.onResponsiveChange, this)), this.$body.trigger(o.RESPONSIVE.GET_STATUS), t(e).on("resize orientationchange", t.proxy(this.resizeFunc, this))
        },
        resizeFunc: function() {
            this.maxHeightBuildChk()
        },
        maxHeightBuildChk: function() {
            this.maxHeightBuild(this.IS_MOBILE_MODE ? !1 : !0)
        },
        maxHeightBuild: function(e) {
            var i = this.setTime;
            if ("carousel" != this.opts.compType || this.IS_MOBILE_MODE || (i = 800), this.isColumns && (i += 1e3), this.opts.forceMobile && (e = !0), e) setTimeout(t.proxy(function() {
                for (var e = [], t = 0; t < this.maxLine; t++) e[t] = [];
                for (var t = 0, i = this.obj.length; i > t; t++) {
                    this.obj.eq(t).outerHeight("");
                    var n = parseInt(t / this.opts.matchAlign, 10),
                        o = this.obj.eq(t).outerHeight();
                    e[n].push(o)
                }
                for (var t = 0; t < this.maxLine; t++) e[t] = Math.max.apply(null, e[t]);
                for (var t = 0, i = this.obj.length; i > t; t++) {
                    var n = parseInt(t / this.opts.matchAlign, 10),
                        s = this.obj.eq(t);
                    e[n] > 0 && s.css(this.opts.matchAttr, e[n])
                }
                this.obj.closest(".cm-columns--separation-line").addClass(this.columnLineClass), "carousel" == this.opts.compType && this.container.closest(".s-slick").hasClass("slick-initialized") && this.container.closest(".s-slick").slick("setPosition")
            }, this), i);
            else {
                for (var n = 0, o = this.obj.length; o > n; n++) this.obj.eq(n).outerHeight("");
                setTimeout(t.proxy(function() {
                    this.IS_MOBILE_MODE && this.container.closest(".s-slick").hasClass("slick-initialized") && this.container.closest(".s-slick").slick("setPosition")
                }, this), i)
            }
        },
        onResponsiveChange: function(e, t) {
            this.IS_MOBILE_MODE = t.RESPONSIVE_NAME === i.RESPONSIVE.MOBILE.NAME ? !0 : !1
        }
    }, t.fn.heightMatch = function(i) {
        if (i.matchElements && t(this).length) {
            var n = t(this),
                o = n.find(i.listWrap);
            if (i.listWrap || (o = n), !("list" == i.compType && o.length <= 1)) {
                "carousel" == i.compType && (i.isListMatch = !1), i.forceMobile && (this.IS_MOBILE_MODE = !0), i.isListMatch && i.matchElements.push(i.listWrap), i.matchAlignIgnore && n.children(i.matchAlignIgnore).length && (i.matchAlign = 0);
                for (var s in i.matchElements) i.targetElements = i.matchElements[s], new e._heightMatch(o, i)
            }
        }
    }
}(window, window.jQuery),
function(e, t) {
    "use strict";
    var i = e.smg.aem.varStatic,
        n = e.smg.aem.util,
        o = e.smg.aem.customEvent;
    "function" == typeof t.fn.listSeeMore && (t.fn.listSeeMore = function() {}), t.fn.listSeeMore = function(s) {
        var a = {
                useSeeMore: "s-use-seemore",
                component: "",
                listItems: "",
                moreBtn: ".s-btn-encased",
                appendType: !1,
                itemVisible: "",
                itemActive: "is-item-active",
                itemInterval: 100,
                perPageDefault: {
                    pc: "data-default-pc-conut",
                    mo: "data-default-mo-conut"
                },
                perPageNum: {
                    pc: "data-pc-per-page",
                    mo: "data-mo-per-page"
                },
                heightMatch: {
                    hasComponent: [],
                    matchElements: [],
                    matchAlign: 3
                },
                masonry: {
                    hasComponent: [],
                    itemWrap: "",
                    items: "",
                    options: {
                        ltr: {
                            itemSelector: null,
                            percentPosition: !0,
                            horizontalOrder: !0
                        },
                        rtl: {
                            itemSelector: null,
                            horizontalOrder: !0,
                            originLeft: !1
                        }
                    }
                },
                scrollView: !0,
                scrollViewIgnore: [],
                moreIntervalView: !0,
                moreIntervalViewIgnore: [],
                beforeFunc: null,
                afterFunc: null,
                seemoreAfterFunc: null,
                apiCall: ""
            },
            l = n.def(a, s || {}),
            r = t(l.component),
            c = t("body"),
            m = null,
            h = function() {
                c.on(o.RESPONSIVE.CHANGE, f), c.trigger(o.RESPONSIVE.GET_STATUS), r.on("click", l.moreBtn, d)
            },
            u = function() {
                var e = t("html"),
                    i = {
                        masonry: function(t) {
                            var o = {
                                    itemSelector: i.items
                                },
                                s = {};
                            e.hasClass("rtl") ? (s = n.def(l.masonry.options.rtl, o || {}), t.addClass("js-masonry-load").masonry({
                                itemSelector: i.items,
                                horizontalOrder: !0,
                                originLeft: !1
                            })) : (s = n.def(l.masonry.options.ltr, o || {}), t.addClass("js-masonry-load").masonry({
                                itemSelector: i.items,
                                percentPosition: !0,
                                horizontalOrder: !0
                            })), t.addClass("js-masonry-load").masonry(s)
                        },
                        loadCheck: function(e, t, i) {
                            for (var n = 0, o = e.length, s = 0; o > s; s++) {
                                var a = new Image;
                                a.src = e.eq(s).attr("src"), a.onload = function() {
                                    n += 1, n == o && i(t)
                                }
                            }
                        },
                        actMasonry: function(e, t) {
                            var n = t.find("img");
                            e.length && i.loadCheck(n, e, i.masonry)
                        }
                    },
                    o = function(e, o, s) {
                        var a = e,
                            l = a.find(o),
                            r = a.find(s);
                        n.isAemEditMode() || a.length && r.length && "function" == typeof t.fn.masonry && (i.items = s, i.actMasonry(l, r))
                    };
                return {
                    init: o
                }
            }(),
            f = function(e, t) {
                m = t.RESPONSIVE_NAME === i.RESPONSIVE.MOBILE.NAME ? !0 : !1
            },
            d = function(e) {
                e.preventDefault();
                var i = t(e.currentTarget),
                    n = i.closest(l.component),
                    o = !0,
                    s = !0;
                n.length && (l.apiCall ? l.apiCall.promise().done(function() {
                    setTimeout(function() {
                        p.init({
                            component: n,
                            isViewMore: s,
                            isPromoFeed: o
                        })
                    }, 500)
                }) : p.init({
                    component: n,
                    isViewMore: s,
                    isPromoFeed: o
                }))
            },
            p = {
                getIsInterval: function(e) {
                    var t = l.moreIntervalView;
                    if (l.moreIntervalViewIgnore.length > 1)
                        for (var i = 0; i < l.moreIntervalViewIgnore.length; i++) l.moreIntervalViewIgnore[i] && e.hasClass(l.moreIntervalViewIgnore[i]) && (t = !1);
                    else l.moreIntervalViewIgnore[0] && e.hasClass(l.moreIntervalViewIgnore[0]) && (t = !1);
                    return t
                },
                getViewCnt: function(e, t) {
                    var i = 0;
                    return i = t ? m ? e.attr(l.perPageNum.mo) ? "all" == e.attr(l.perPageNum.mo) ? e.find(l.listItems + ":not(:visible)").length : parseInt(e.attr(l.perPageNum.mo)) : 0 : e.attr(l.perPageNum.pc) ? "all" == e.attr(l.perPageNum.pc) ? e.find(l.listItems + ":not(:visible)").length : parseInt(e.attr(l.perPageNum.pc)) : 0 : m ? e.attr(l.perPageDefault.mo) ? parseInt(e.attr(l.perPageDefault.mo)) : e.attr(l.perPageNum.mo) ? parseInt(e.attr(l.perPageNum.mo)) : 0 : e.attr(l.perPageDefault.pc) ? parseInt(e.attr(l.perPageDefault.pc)) : e.attr(l.perPageNum.pc) ? parseInt(e.attr(l.perPageNum.pc)) : 0
                },
                setItemActive: function(e, t) {
                    e.find(l.listItems + ":lt(" + t + ")").addClass(l.itemActive)
                },
                hideMoreCTA: function(e, t) {
                    l.appendType || !e.find(l.listItems + ":not(:visible)").length && t.length && t.is(":visible") && t.css("display", "none")
                },
                getIsMathchHeight: function(e) {
                    var t = "";
                    if (l.heightMatch.hasComponent && l.heightMatch.matchElements)
                        for (var i = 0; i < l.heightMatch.hasComponent.length; i++) l.heightMatch.hasComponent[i] && e.hasClass(l.heightMatch.hasComponent[i]) && (t = !0);
                    return t
                },
                getIsMasonry: function(e) {
                    var t = "";
                    if (l.masonry.hasComponent && l.masonry.itemWrap && l.masonry.items)
                        for (var i = 0; i < l.masonry.hasComponent.length; i++) l.masonry.hasComponent[i] && e.hasClass(l.masonry.hasComponent[i]) && (t = !0);
                    return t
                },
                init: function(i) {
                    var o = i.component.find(l.moreBtn),
                        s = i.component.find(l.listItems),
                        a = this.getViewCnt(i.component, i.isViewMore),
                        r = this.getIsInterval(i.component),
                        c = this.getIsMasonry(i.component),
                        h = this.getIsMathchHeight(i.component);
                    if (!n.isAemEditMode()) {
                        var f = a,
                            d = i.component.find(l.listItems + ":visible").length;
                        if (i.component.hasClass(l.useSeeMore) && i.isViewMore && (f = d + a), this.setItemActive(i.component, f), this.hideMoreCTA(i.component, o), null != l.beforeFunc && l.beforeFunc(i.component, m), r) setTimeout(function() {
                            h && g(i, f - a - 1), setTimeout(function() {
                                var n = d,
                                    o = setInterval(function() {
                                        n == f ? (clearInterval(o), c ? setTimeout(function() {
                                            null != l.afterFunc && l.afterFunc(i.component, m), u.init(i.component, l.masonry.itemWrap, l.masonry.items)
                                        }, 100) : null != l.afterFunc && l.afterFunc(i.component, m), t(e).trigger("resize")) : (s.eq(n).addClass(l.itemVisible), n++)
                                    }, l.itemInterval)
                            }, 400)
                        }, 100);
                        else if (c || h)
                            for (var p = d; f >= p; p++) p == f ? setTimeout(function() {
                                c && u.init(i.component, l.masonry.itemWrap, l.masonry.items), h && g(i, f - a - 1), null != l.afterFunc && l.afterFunc(i.component, m), t(e).trigger("resize")
                            }, 100) : s.eq(p).addClass(l.itemVisible);
                        else s.addClass(l.itemVisible), null != l.afterFunc && l.afterFunc(i.component, m), t(e).trigger("resize");
                        i.isViewMore && null != l.seemoreAfterFunc && l.seemoreAfterFunc(i.component, m)
                    }
                }
            },
            g = function(e, t) {
                var t = parseInt(t) || 0,
                    i = l.listItems;
                e.component.hasClass("cm-columns--separation-line") && (e.component.hasClass("cm-columns--2columns") ? l.heightMatch.matchAlign = 2 : e.component.hasClass("cm-columns--3columns") ? l.heightMatch.matchAlign = 3 : e.component.hasClass("cm-columns--4columns") ? l.heightMatch.matchAlign = 4 : e.component.hasClass("cm-columns--5columns") && (l.heightMatch.matchAlign = 5)), e.isViewMore && (i = l.listItems + ":gt(" + t + ")"), e.component.heightMatch({
                    listWrap: i,
                    matchAlignIgnore: ".slick-initialized",
                    matchElements: l.heightMatch.matchElements,
                    matchAlign: l.heightMatch.matchAlign
                })
            },
            v = function(e, i) {
                if (i && "function" == typeof t.fn.feature && e.hasClass(l.useSeeMore)) e.feature({
                    onVisible: function(e) {
                        if (!e.hasClass("js-feature-loaded")) {
                            var t = !0,
                                i = !1;
                            e.addClass("js-feature-loaded"), p.init({
                                component: e,
                                isViewMore: i,
                                isPromoFeed: t
                            })
                        }
                    }
                });
                else if (!e.hasClass("js-feature-loaded")) {
                    var n = !0,
                        o = !1;
                    e.addClass("js-feature-loaded"), p.init({
                        component: e,
                        isViewMore: o,
                        isPromoFeed: n
                    })
                }
            },
            I = function(e) {
                var t = l.scrollView;
                if (l.scrollViewIgnore.length > 1)
                    for (var i = 0; i < l.scrollViewIgnore.length; i++) l.scrollViewIgnore[i] && e.hasClass(l.scrollViewIgnore[i]) && (t = !1);
                else l.scrollViewIgnore[0] && e.hasClass(l.scrollViewIgnore[0]) && (t = !1);
                return t
            },
            C = function() {
                var e, t = l.scrollView;
                if (h(), l.scrollView)
                    for (var i = 0; i < r.length; i++) e = r.eq(i), t = I(e), v(e, t);
                else
                    for (var i = 0; i < r.length; i++) e = r.eq(i), v(e, !1)
            };
        C()
    }, "function" == typeof t.getI18nDiction && (t.getI18nDiction = function() {}), t.getI18nDiction = function(e, i) {
        return "undefined" == typeof Granite ? i : "undefined" == typeof Granite.I18n ? i : (Granite.I18n.setLocale(t("#siteCode").val()), Granite.I18n.get(e, [], t("#siteCode").val()) || i)
    }, "function" == typeof t.requestTagAPI && (t.requestTagAPI = function() {}), t.requestTagAPI = function(e) {
        if ("object" == typeof e) {
            e.successFunc || function(e, t) {}, e.errorFunc || function() {};
            var i = t.ajax({
                url: "https://www.samsung.com/aemapi/tag/data",
                type: "GET",
                data: e.jsonDatas,
                success: function(t) {
                    200 == t.resultCode && e.successFunc(t, i)
                },
                error: function() {
                    e.errorFunc()
                }
            })
        }
    }, "function" == typeof t.CDPCommonFunc && (t.CDPCommonFunc = function() {}), t.CDPCommonFunc = function() {
        return {
            init: function(i) {
                this.selector = i, this.defaultVal = {
                    selector: {
                        templateWraps: ".st-hub-article, .st-hub-list",
                        articleTemplate: ".st-hub-article",
                        articleLink: ".js-article-link",
                        eyebrowLink: ".js-eyebrow-link",
                        moreLinkWrap: ".js-more-link-wrap",
                        scene7domain: "#scene7domain",
                        runModeInfo: "#gnbRunmodeInfo",
                        siteCd: "#siteCode",
                        textMotion: "[class$=__eyebrow],[class$=__headline],[class$=__sub-headline],[class$=__description],[class$=__disclaimer],[class$=__number],[class*=__eyebrow ],[class*=__headline ],[class*=__sub-headline ],[class*=__description ],[class*=__disclaimer ],[class*=__number ]"
                    },
                    "class": {
                        compVisible: "s-visible",
                        compMotion: "s-motion",
                        textMotion: "s-text-move"
                    },
                    attr: {
                        pagePath: "data-page-path",
                        tags: "data-page-tags",
                        tagOption: "data-page-option",
                        tagSort: "data-page-sort",
                        pageTrack: "data-page-track",
                        useAPI: "data-use-api",
                        useSearchTag: "data-use-tag"
                    },
                    datas: {
                        resultData: null,
                        products: null,
                        contentPerPage: 9999,
                        pageNum: 1,
                        apiNum: 0
                    }
                }, this.templateCodes = {
                    tagID: "[[CDP-tag-id]]",
                    linkUrl: "[[CDP-link]]",
                    linkOmniType: "[[CDP-omni-type]]",
                    linkTitle: "[[CDP-link-title]]",
                    imgOmni: "[[CDP-img-omni]]",
                    eyebrowOmni: "[[CDP-eyebrow-omni]]",
                    eyebrowLink: "[[CDP-eyebrow-link]]",
                    eyebrowLinkTitle: "[[CDP-eyebrow-link-title]]",
                    eyebrowText: "[[CDP-eyebrow-text]]",
                    headlineOmni: "[[CDP-headline-omni]]",
                    headlineText: "[[CDP-headline-text]]",
                    subHeadlineOmni: "[[CDP-sub-headline-omni]]",
                    subHeadlineText: "[[CDP-sub-headline-text]]",
                    moreOmni: "[[CDP-more-omni]]",
                    moreText: "[[CDP-more-text]]"
                }, this.scene7domain = t(this.defaultVal.selector.scene7domain).val(), this.isLive = "live" == t(this.defaultVal.selector.runModeInfo).val() || "qa" == t(this.defaultVal.selector.runModeInfo).val() ? !0 : !1, this.siteCd = t(this.defaultVal.selector.siteCd).val(), this.isAemEditMode = n.isAemEditMode(), this.isTemplates = t(this.defaultVal.selector.templateWraps).length ? !0 : !1, this.pageInfoJSON = this.isLive ? e.location.href + "jcr:content.json" : e.location.href.replace("/editor.html", "").split(".html")[0] + "/jcr:content.json", this.tagArr = []
            },
            setDefaultValue: function(e) {
                this.defaultVal = n.def(this.defaultVal, e || {})
            },
            setTemplateCodes: function(e) {
                this.templateCodes = n.def(this.templateCodes, e || {})
            },
            getPageInfo: function(e) {
                return t.ajax({
                    url: this.pageInfoJSON,
                    type: "GET",
                    success: function(t) {
                        e(t)
                    },
                    error: function() {}
                })
            },
            getTags: function(e, i, n) {
                var o = [];
                "true" == e.attr(this.defaultVal.attr.useSearchTag) ? t.ajax({
                    url: this.pageInfoJSON,
                    type: "GET",
                    success: t.proxy(function(t) {
                        var s = t["cq:tags"],
                            a = 0;
                        if (s && s.length)
                            for (; a < s.length; a++) o[a] = s[a].replace(s[a].split("/")[0], "").substring(1);
                        n(e, i, o)
                    }, this),
                    error: function() {
                        n(e, i, o)
                    }
                }) : n(e, i, o)
            },
            requestCDPAPI: function(e, i) {
                "object" == typeof i && this.getTags(e, i, t.proxy(function(e, i, n) {
                    var o = e.find(this.selector.list);
                    i.successFunc = i.successFunc || function() {}, i.errorFunc = i.errorFunc || function() {}, i.prop = i.prop || 0, n.length && (i.jsonDatas.tag = n, i.jsonDatas.tagOption = "or");
                    var s = t.ajax({
                        url: "https://www.samsung.com/aemapi/tag/data",
                        type: "GET",
                        data: i.jsonDatas,
                        success: function(t) {
                            i.successFunc(t, s, e, o, i.prop)
                        },
                        error: function() {
                            i.errorFunc(o)
                        }
                    })
                }, this))
            },
            replaceAll: function(e, t, i) {
                return e.split(t).join(i)
            },
            getUrl: function(e) {
                var t = "";
                return e && (t = this.isLive ? e.replace("/content/samsung", "") : e + ".html?wcmmode=disabled"), t
            },
            getEyebrowData: function(e) {
                var t = {
                        title: "",
                        url: "",
                        tagID: ""
                    },
                    i = 0;
                return this.isTemplates && e.length > 1 && (i = 1), e && e.length > 0 && (t.title = e[i].title, t.url = e[i].url, t.tagID = e[i].tagID, t.title || (i = 1 == i ? 0 : e.length > 1 ? 1 : 0, t.title = e[i].title, t.url = e[i].url, t.tagID = e[i].tagID)), t
            },
            setReinitInteraction: function(e) {
                var i = this,
                    n = e.find(i.defaultVal.selector.textMotion);
                e.promise().done(function() {
                    i.isAemEditMode ? (e.each(function() {
                        t(this).addClass(i.defaultVal["class"].compMotion + " " + i.defaultVal["class"].compVisible)
                    }), n.each(function() {
                        t(this).addClass(i.defaultVal["class"].textMotion)
                    })) : (e.feature({
                        on: function(e) {
                            e.addClass(i.defaultVal["class"].compMotion)
                        },
                        onVisible: function(e) {
                            e.addClass(i.defaultVal["class"].compVisible)
                        },
                        off: function(e) {
                            e.removeClass(i.defaultVal["class"].compMotion)
                        },
                        offVisible: function(e) {
                            e.removeClass(i.defaultVal["class"].compVisible)
                        }
                    }), n.each(function() {
                        t(this).feature({
                            onVisible: function(e) {
                                e.addClass(i.defaultVal["class"].textMotion)
                            },
                            offVisible: function(e) {
                                e.removeClass(i.defaultVal["class"].textMotion)
                            }
                        })
                    }))
                })
            },
            noDataRemoveNode: function(e, t) {
                t || e.remove()
            },
            getScene7ImagePath: function(e) {
                var e = e,
                    t = "";
                return this.scene7domain && (e = e.replace("/content/dam/samsung", this.scene7domain.replace("http:", "") + "p5")), t = e.split("."), "jpg" == t[t.length - 1] ? e += "?$ORIGIN_JPG$" : "png" == t[t.length - 1] && (e += "?$ORIGIN_PNG$"), e
            },
            defaultTempleteReplace: function(t, i, n, o) {
                var s = this.getEyebrowData(n.eyebrow),
                    o = o || function(e, t, i, n) {};
                return n.tagID = s.tagID || "null", n.pageTrack = t.attr(this.defaultVal.attr.pageTrack) ? t.attr(this.defaultVal.attr.pageTrack) : "undefined" != typeof e.digitalData && e.digitalData.page.pageInfo.pageTrack ? e.digitalData.page.pageInfo.pageTrack : "null", n.thumbnailOmni = n.thumbnail.alt || "null", n.titleOmni = n.title || "null", n.eyebrowOmni = s.title || "null", n.eyebrowTitle = s.title, n.linkUrl = this.getUrl(n.url), n.eyebrowUrl = this.getUrl(s.url), n.moreText = "more", n.linkOmniType = "microsite_contentinter", i = this.replaceAll(i, this.templateCodes.linkOmniType, n.linkOmniType), i = this.replaceAll(i, this.templateCodes.linkUrl, n.linkUrl), i = this.replaceAll(i, this.templateCodes.linkTitle, n.title), i = i.replace(this.templateCodes.tagID, n.tagID), i = i.replace(this.templateCodes.imgOmni, n.pageTrack + ":" + n.titleOmni + "_image"), i = i.replace(this.templateCodes.eyebrowOmni, n.pageTrack + ":" + n.titleOmni + "_" + n.eyebrowOmni), i = i.replace(this.templateCodes.eyebrowLink, n.eyebrowUrl), i = i.replace(this.templateCodes.eyebrowText, n.eyebrowTitle), i = i.replace(this.templateCodes.eyebrowLinkTitle, n.eyebrowTitle + " title"), i = i.replace(this.templateCodes.headlineOmni, n.pageTrack + ":" + n.titleOmni + "_title"), i = i.replace(this.templateCodes.headlineText, n.title), i = i.replace(this.templateCodes.subHeadlineOmni, n.pageTrack + ":" + n.titleOmni + "_subtitle"), i = i.replace(this.templateCodes.subHeadlineText, n.description), i = i.replace(this.templateCodes.moreOmni, n.pageTrack + ":" + n.titleOmni + "_learn more"), i = i.replace(this.templateCodes.moreText, n.moreText), o(t, i, n, this.templateCodes), i
            },
            setMarkupChange: function(e) {
                var t = e.wrap.find(this.selector.eyebrow),
                    i = e.wrap.find(this.selector.headline),
                    n = e.wrap.find(this.selector.subHeadline);
                this.setImageMarkupChange(e.product, e.imageWrap), this.setLinkMarkupChange(e.product.linkUrl, e.product.eyebrowUrl, e.wrap), this.noDataRemoveNode(t, e.product.eyebrowTitle), this.noDataRemoveNode(i, e.product.title), this.noDataRemoveNode(n, e.product.description), e.etcFunc = e.etcFunc || function() {}, e.etcFunc(e)
            },
            setLinkMarkupChange: function(e, t, i) {
                var n, o, s = i.find(this.defaultVal.selector.articleLink),
                    a = i.find(this.defaultVal.selector.eyebrowLink),
                    l = s.length,
                    r = a.length;
                if (!e)
                    for (var c = 0; l > c; c++) n = s.eq(c), o = n.parent(this.defaultVal.selector.moreLinkWrap), o.length ? o.remove() : n[0].outerHTML = n.html();
                if (!t)
                    for (c = 0; r > c; c++) n = a.eq(c), n[0].outerHTML = n.html()
            },
            setImageMarkupChange: function(e, t) {
                e.thumbnail.pc || e.thumbnail.mo ? (this.isLive && (e.thumbnail.pc && (e.thumbnail.pc = this.getScene7ImagePath(e.thumbnail.pc)), e.thumbnail.mo && (e.thumbnail.mo = this.getScene7ImagePath(e.thumbnail.mo))), t.find("source").attr("srcset", e.thumbnail.mo), t.find("img").attr({
                    src: e.thumbnail.pc,
                    "data-src-pc": e.thumbnail.pc,
                    "data-src-mobile": e.thumbnail.mo,
                    alt: e.thumbnail.alt
                })) : t.html("")
            }
        }
    }(), "function" == typeof t.fn.globalFeature && (t.fn.globalFeature = function() {}), t.fn.globalFeature = function(i) {
        var n = {
            initLine: null,
            reinitLine: null,
            heightIgnore: "",
            on: function() {},
            off: function() {},
            onVisible: function() {},
            offVisible: function() {},
            onLazyLoad: function() {},
            onBeforeFunc: function() {}
        };
        n = t.extend({}, n, i);
        var o = t(this),
            s = !1,
            a = !1,
            l = !1,
            r = !1,
            c = 0,
            m = function() {
                return o.length ? !0 : "container : " + o.selector + " => not found container"
            },
            h = function() {
                var i = o,
                    m = t(e).height(),
                    h = t(e).scrollTop(),
                    u = f(i, m, h);
                h >= c ? (u.down.isOnLazyLoad && !r && (n.onLazyLoad(i), r = !0), !u.down.isOnVisibleMotion || a || l || (n.onVisible(i), a = !0), !u.down.isOnMotion || s || l || (n.on(i), s = !0, l = !1)) : c > h && (u.up.isOnMotion && !s && l && (n.on(i), n.onVisible(i), s = !0, l = !1), u.up.isOffMotion && s && !l && (n.off(i), s = !1, l = !1), !u.up.isOffVisibleMotion || s || l || (n.offVisible(i), a = !1)), c = h
            },
            u = function() {
                t(e).on("load scroll", t.proxy(function() {
                    h()
                }))
            },
            f = function(e, i, o) {
                var s = 0,
                    a = 0,
                    l = e.outerHeight(!0),
                    r = e.offset().top;
                if (null != n.initLine ? isNaN(n.initLine) ? e.find(n.initLine).length && (s = e.find(n.initLine).offset().top) : s = n.initLine : s = r - i + .8 * l, n.heightIgnore)
                    if ("object" == typeof n.heightIgnore) {
                        for (var c = 0, m = 0; m < n.heightIgnore.length; m++) c += t(n.heightIgnore[m]).outerHeight();
                        s -= c
                    } else "string" == typeof n.heightIgnore && (s -= t(n.heightIgnore).length ? t(n.heightIgnore).outerHeight() : 0);
                null != n.reinitLine ? isNaN(n.reinitLine) ? e.find(n.reinitLine).length && (a = e.find(n.reinitLine).offset().top) : a = n.reinitLine : a = r + 1.3 * i;
                var h = {
                    down: {
                        isOnMotion: o > s ? !0 : !1,
                        isOnVisibleMotion: o > r - i + .1 * l ? !0 : !1,
                        isOffMotion: o > r + 1.1 * l ? !0 : !1,
                        isOnLazyLoad: o > r - i - .2 * i ? !0 : !1
                    },
                    up: {
                        isOnMotion: a > o ? !0 : !1,
                        isOffVisibleMotion: r - 1.1 * i > o ? !0 : !1,
                        isOffMotion: r - 1.1 * i > o ? !0 : !1
                    }
                };
                return h
            },
            d = function() {
                u(), h()
            },
            p = m();
        p === !0 && (n.onBeforeFunc(o), d())
    }, "function" == typeof t.fn.commonImgLazyload && (t.fn.commonImgLazyload = function() {}), t.fn.commonImgLazyload = function() {
        if (t(this).length) {
            var o = t(this),
                s = 0,
                a = n.winSize().w <= i.RESPONSIVE.MOBILE.WIDTH ? !0 : !1,
                l = {
                    ing: "js-image-lazyloading",
                    end: "js-image-lazyloaded"
                },
                r = {
                    pc: "data-lazy-pc",
                    mobile: "data-lazy-mobile"
                },
                c = {
                    attr: "data-lazy-type",
                    "class": {
                        placeholder: "js-lazytype-placeholder",
                        thumbnail: "js-lazytype-thumbnail"
                    }
                },
                m = {
                    initialized: ".slick-initialized",
                    activeSlide: ".slick-current",
                    cloneSlide: ".slick-cloned",
                    endCarousel: "js-lazyLoaded-carousel"
                },
                h = !0,
                u = a,
                f = function() {
                    t(e).on("resize orientationchange", I)
                },
                d = function(e, t) {
                    e.slick("slickGetOption", "centerMode") && (g(t.prev().find("." + l.ing)), g(t.next().find("." + l.ing))), e.slick("setPosition")
                },
                p = function(e) {
                    e.hasClass(m.endCarousel) || (e.addClass(m.endCarousel), e.on("beforeChange", b))
                },
                g = function(e) {
                    var t = e.length;
                    if (t)
                        for (var i = 0; t > i; i++) C(e.eq(i))
                },
                v = function(e) {
                    var t = e.find(m.cloneSlide),
                        i = t.find("." + l.ing),
                        n = i.length;
                    if (n)
                        for (var o = 0; n > o; o++) C(i.eq(o))
                },
                I = function() {
                    var e = function() {
                            var e = o.find("." + l.ing + ",." + l.end),
                                t = null,
                                i = null,
                                n = null,
                                a = e.length;
                            clearTimeout(i), i = null, i = setTimeout(function() {
                                if (a)
                                    for (s = 0; a > s; s++) t = e.eq(s), C(t, function(e) {
                                        clearTimeout(n), n = null, n = setTimeout(function() {
                                            var t = e.closest(m.initialized),
                                                i = t.find(m.activeSlide);
                                            t.length && (d(t, i), p(t), v(t))
                                        }, 550)
                                    })
                            }, 50)
                        },
                        t = n.winSize().w;
                    a = t <= i.RESPONSIVE.MOBILE.WIDTH ? !0 : !1, h || (u != a && e(), u = a)
                },
                C = function(e, t) {
                    var i = function(e, t, i) {
                            e.attr("src", t), e.hasClass(l.ing) && e.removeClass(l.ing).addClass(l.end), i(e)
                        },
                        n = function(e, t, i) {
                            e.attr("src", t), e.hasClass(l.ing) && e.removeClass(l.ing).addClass(l.end), i(e)
                        },
                        o = function(e, t, i) {
                            e.attr("src", t), e.on("load", function() {
                                e.parent().removeClass(c["class"].placeholder), e.hasClass(l.ing) && e.removeClass(l.ing).addClass(l.end), i(e)
                            })
                        },
                        s = e.attr(r.pc),
                        m = e.attr(c.attr),
                        h = e.attr("src"),
                        t = t || function() {};
                    a ? (s = e.attr(r.mobile), s || (s = e.attr(r.pc))) : s || (s = e.attr(r.mobile)), s && h != s && (m ? "thumbnail" == m ? n(e, s, t) : "placeholder" == m ? o(e, s, t) : i(e, s, t) : i(e, s, t))
                },
                b = function(e, i, n, o) {
                    if (n !== o) {
                        var s = t(i.$slides),
                            a = s.eq(n),
                            r = s.eq(o),
                            c = a.closest(m.initialized),
                            h = r.find("." + l.ing + ",." + l.end),
                            u = h.length;
                        if (u)
                            for (var f = 0; u > f; f++) C(h.eq(f));
                        v(c), d(c, r)
                    }
                },
                y = function() {
                    e.setTimeout(function() {
                        E()
                    }, 300)
                },
                E = function() {
                    var e = o.find("." + l.ing),
                        t = e.length,
                        i = null;
                    if (t)
                        if (n.isAemEditMode())
                            for (s = 0; t > s; s++) C(e.eq(s));
                        else {
                            for (s = 0; t > s; s++) i = e.eq(s), i.closest(m.cloneSlide).length ? C(i) : i.globalFeature({
                                onLazyLoad: function(e) {
                                    var t = e.closest(m.initialized),
                                        i = t.find(m.activeSlide),
                                        n = null,
                                        o = 0;
                                    if (t.length) {
                                        n = i.find("." + l.ing), o = n.length;
                                        for (var s = 0; o > s; s++) C(n.eq(s)), setTimeout(function() {
                                            p(t), d(t, i)
                                        }, 150)
                                    } else C(e)
                                }
                            });
                            h && (h = !1)
                        }
                };
            f(), y(), I()
        }
    }, t(function() {
        t("body").commonImgLazyload()
    })
}(window, window.jQuery);
! function(t, e) {
    "use strict";
    "undefined" == typeof t.smg && (t.smg = {}), "undefined" == typeof t.smg.aem && (t.smg.aem = {}), "undefined" == typeof t.smg.aem.accessibility && (t.smg.aem.accessibility = {});
    var s = t.smg.aem.util,
        i = t.smg.aem.accessibility;
    i.checkbox = function() {
        var t = {
            targets: "[data-accessibility='checkbox']",
            targetsValue: "data-acc-checkbox-value",
            holder: "data-acc-checkbox",
            holderTarget: "data-acc-checkbox-target",
            onClass: "data-acc-onclass"
        };
        return {
            init: function(e, i) {
                (this.container = e).size() && (this.opts = s.def(t, i || {}), this.setElements(), this.setBindEvents())
            },
            setElements: function() {
                this.targets = this.container.find(this.opts.targets), this.holders = e("[" + this.opts.holder + "]"), e.each(this.targets, e.proxy(function(t, s) {
                    e(s).attr(this.opts.targetsValue, e(s).attr("checked"))
                }, this))
            },
            setBindEvents: function() {
                this.holders.on("click", e.proxy(this.onHolderClick, this)), this.targets.on("change", e.proxy(this.onTargetChange, this))
            },
            unElements: function() {
                var t, s;
                e.each(this.targets, e.proxy(function(i, o) {
                    t = e(o), s = this.getTargetInfo(t), t.removeAttr("checked", "checked"), t.prop("checked", !1), s.onClass && s.holder.removeClass(s.onClass)
                }, this)), this.targets = [], this.holders = []
            },
            unBindEvents: function() {
                this.holders.off("click", e.proxy(this.onHolderClick, this)), this.targets.off("change", e.proxy(this.onTargetChange, this))
            },
            onHolderClick: function(t) {
                var s = e(t.currentTarget);
                s = e("[" + this.opts.holderTarget + "='" + s.attr(this.opts.holder) + "']"), s.size() && s.trigger("click").focus()
            },
            onTargetChange: function(t) {
                var s = e(t.currentTarget),
                    i = this.getTargetInfo(s),
                    o = i.holder,
                    n = i.onClass,
                    c = s.attr("checked");
                c ? (s.removeAttr("checked", "checked"), s.prop("checked", !1), n && o.removeClass(n)) : (s.attr("checked", "checked"), s.prop("checked", !0), n && o.addClass(n))
            },
            getTargetInfo: function(t) {
                return t = e("[" + this.opts.holder + "='" + t.attr(this.opts.holderTarget) + "']"), t.size() ? {
                    holder: t,
                    onClass: t.attr(this.opts.onClass)
                } : {
                    holder: "",
                    onClass: ""
                }
            },
            destroy: function() {
                this.unBindEvents(), this.unElements()
            },
            refresh: function(t, e) {
                t = t || this.container, this.destroy(), this.init(t, e)
            }
        }
    }(), e(function() {
        i.checkbox.init(e("body"))
    })
}(window, window.jQuery);
! function(t, s) {
    "use strict";
    "undefined" == typeof t.smg && (t.smg = {}), "undefined" == typeof t.smg.aem && (t.smg.aem = {}), "undefined" == typeof t.smg.aem.accessibility && (t.smg.aem.accessibility = {});
    var e = t.smg.aem.util,
        i = t.smg.aem.accessibility;
    i.placeholder = function() {
        var t = {
            targets: "[data-accessibility='placeholder']",
            targetsValue: "data-acc-placeholder-value",
            holder: "data-acc-placeholder",
            holderTarget: "data-acc-placeholder-target",
            onClass: "data-acc-onclass"
        };
        return {
            init: function(s, i) {
                (this.container = s).size() && (this.opts = e.def(t, i || {}), this.setElements(), this.setBindEvents())
            },
            setElements: function() {
                this.targets = this.container.find(this.opts.targets), s.each(this.targets, s.proxy(function(t, e) {
                    s(e).attr(this.opts.targetsValue, s(e).val())
                }, this))
            },
            setBindEvents: function() {
                this.targets.on("focus", s.proxy(this.onTargetsFocus, this)).on("blur", s.proxy(this.onTargetsBlur, this)).on("keydown keyup", s.proxy(this.onTargetsChange, this))
            },
            unElements: function() {
                s.each(this.targets, s.proxy(function(t, e) {
                    s(e).val(s(e).attr(this.opts.targetsValue))
                }, this));
                var t, e;
                s.each(s("[" + this.opts.holder + "]"), s.proxy(function(i, a) {
                    t = s(a), e = this.getTargetInfo(t), e.onClass ? t.removeClass(e.onClass) : t.show()
                }, this)), this.targets = []
            },
            unBindEvents: function() {
                this.targets.off("focus", s.proxy(this.onTargetsFocus, this)).off("blur", s.proxy(this.onTargetsBlur, this))
            },
            onTargetsFocus: function(t) {
                var e = s(t.currentTarget),
                    i = this.getTargetInfo(e),
                    a = i.holder,
                    n = i.onClass;
                a && e.val() && (n ? a.addClass(n) : a.css({
                    visibility: "hidden"
                }))
            },
            onTargetsBlur: function(t) {
                var e = s(t.currentTarget),
                    i = this.getTargetInfo(e),
                    a = i.holder,
                    n = i.onClass;
                a && (e.val() || (n ? a.removeClass(n) : a.css({
                    visibility: "visible"
                })))
            },
            onTargetsChange: function(t) {
                var e = s(t.currentTarget),
                    i = this.getTargetInfo(e),
                    a = i.holder,
                    n = i.onClass;
                a && (e.val() ? n ? a.addClass(n) : a.css({
                    visibility: "hidden"
                }) : n ? a.removeClass(n) : a.css({
                    visibility: "visible"
                }))
            },
            getTargetInfo: function(t) {
                return t = s("[" + this.opts.holder + "='" + t.attr(this.opts.holderTarget) + "']"), t.size() ? {
                    holder: t,
                    onClass: t.attr(this.opts.onClass)
                } : {
                    holder: "",
                    onClass: ""
                }
            },
            destroy: function() {
                this.unBindEvents(), this.unElements()
            },
            refresh: function(t, s) {
                t = t || this.container, this.destroy(), this.init(t, s)
            }
        }
    }(), s(function() {
        i.placeholder.init(s("body"))
    })
}(window, window.jQuery);
! function(t, o) {
    "use strict";
    "undefined" == typeof t.smg && (t.smg = {}), "undefined" == typeof t.smg.aem && (t.smg.aem = {}), "undefined" == typeof t.smg.aem.templates && (t.smg.aem.templates = {}), "undefined" == typeof t.smg.aem.templates.product && (t.smg.aem.templates.product = {});
    var s = (t.smg.aem.varStatic, t.smg.aem.util),
        n = t.smg.aem.customEvent,
        i = t.smg.aem.templates.product;
    i.backtotop = function() {
        var i = {
            topBtn: {
                wrap: ".s-gotop-wrap",
                btn: ".s-btn-gotop",
                onClass: "s-show",
                speed: 1e3
            },
            footer: {
                target: "#footer"
            }
        };
        return {
            init: function(t, o) {
                (this.container = t).size() && (this.opts = s.def(i, o || {}), this.setElements(), this.onBindEvent(), this.defSetup())
            },
            setElements: function() {
                this.htmlBody = o("html, body"), this.footer = o(this.opts.footer.target), this.topBtnWrap = this.container.find(this.opts.topBtn.wrap), this.topBtn = this.topBtnWrap.find(this.opts.topBtn.btn)
            },
            onBindEvent: function() {
                this.topBtn.on("click", o.proxy(this.onTopBtnClick, this)), o(t).on("scroll touchmove", o.proxy(this.onScrollListener, this)), this.onScrollListener(), o(n.CONNECT).on(n.BACKTOTOP.POSITION_CHANGE, o.proxy(this.setPosition, this))
            },
            defSetup: function() {
                o(t).on("load", function(s) {
                    o(t).trigger("scroll")
                })
            },
            onTopBtnClick: function() {
                this.htmlBody.animate({
                    scrollTop: 0
                }, this.opts.topBtn.speed)
            },
            setPosition: function(t, o) {
                this.topPosition !== o.TOP_POSITION && (this.topPosition = o.TOP_POSITION)
            },
            onScrollListener: function() {
                var n = o(t).scrollTop(),
                    i = s.winSize().h,
                    e = this.footer.size() ? this.footer.offset().top : 0;
                "undefined" == typeof this.topPosition && (this.topPosition = n), n > this.topPosition && e > n + i ? this.topBtnWrap.hasClass(this.opts.topBtn.onClass) || this.topBtnWrap.addClass(this.opts.topBtn.onClass) : this.topBtnWrap.hasClass(this.opts.topBtn.onClass) && this.topBtnWrap.removeClass(this.opts.topBtn.onClass)
            }
        }
    }(), o(function() {
        i.backtotop.init(o("body"))
    })
}(window, window.jQuery);

! function(t, e) {
    "use strict";
    "undefined" == typeof t.smg && (t.smg = {}), "undefined" == typeof t.smg.aem && (t.smg.aem = {}), "undefined" == typeof t.smg.aem.components && (t.smg.aem.components = {}), "undefined" == typeof t.smg.aem.components.common && (t.smg.aem.components.common = {});
    var o = t.smg.aem.varStatic,
        i = t.smg.aem.util,
        s = t.smg.aem.components.common;
    s.footer2019 = function() {
        var s = {
            wrap: ".gb-footer-2019",
            popSelector: ".js-open-popup, .popWin",
            backToTopSelecotr: ".gb-footer-2019__btn-top",
            backToTopSpeed: 1e3,
            footerLang: ".gb-footer-2019__language",
            footerLangLink: ".gb-footer-2019__language-link",
            footerLangLayer: ".gb-footer-2019__language-select",
            langDimmed: ".gb-footer-2019__language-dimmed",
            footerItem: ".gb-footer-2019__sitemap-items",
            listCta: ".gb-footer-2019__list-cta",
            linkList: ".gb-footer-2019__item-list"
        };
        return {
            init: function(t, e) {
                (this.container = t).size() && (this.opts = i.def(s, e || {}), this.setElements(), this.setBindEvents())
            },
            setElements: function() {
                var t = navigator.userAgent.toLowerCase();
                this.screenW = screen.availWidth, this.screenH = 0, this.screenH = -1 != t.indexOf("chrome") ? screen.availHeight - 63 : -1 != t.indexOf("firefox") ? screen.availHeight - 63 : screen.availHeight - 70, this.htmlBody = e("html, body"), this.wrap = e(this.opts.wrap), this.popSelector = this.wrap.find(this.opts.popSelector), this.backToTopSelecotr = this.wrap.find(this.opts.backToTopSelecotr), this.viewType = "", this.lastViewType = "", this.footerLang = this.wrap.find(this.opts.footerLang), this.footerLangLink = this.footerLang.find(this.opts.footerLangLink), this.footerLangLayer = this.footerLang.find(this.opts.footerLangLayer), this.langDimmed = this.wrap.find(this.opts.langDimmed), this.footerItem = e(this.opts.footerItem), this.listCta = e(this.opts.listCta), this.linkList = e(this.opts.linkList)
            },
            setBindEvents: function() {
                var t = this;
                this.popSelector.each(function() {
                    e(this).on("click", e.proxy(t.windowPopup, t))
                }), this.backToTopSelecotr.on("click", e.proxy(t.backToTopAnimate, t)), e(window).on("resize", e.proxy(this.resizeFunc, this)), this.resizeFunc(), this.listCta.on("click", e.proxy(this.accordion, t))
            },
            resizeFunc: function() {
                var t = i.winSize().w;
                if (t <= o.RESPONSIVE.MOBILE.WIDTH) {
                    if ("mo" === this.viewType) return;
                    this.viewType = "mo", this.footerLangLayer.length && (this.moBindEvents(!0), this.pcBindEvents(!1))
                } else {
                    if ("pc" === this.viewType) return;
                    this.viewType = "pc", this.footerLangLayer.length && (this.moBindEvents(!1), this.pcBindEvents(!0)), this.resetAccordion()
                }
                "" === this.viewType && (this.viewType = t <= o.RESPONSIVE.MOBILE.WIDTH ? "mo" : "pc"), this.dimmedFunc(), this.lastViewType = this.viewType
            },
            pcBindEvents: function(t) {
                t ? (this.footerLangLink.on("mouseenter focusin", e.proxy(this.onOverFunc, this)), this.footerLang.on("mouseleave", e.proxy(this.onOutsideFunc, this))) : (this.footerLangLink.off("mouseenter focusin", e.proxy(this.onOverFunc, this)), this.footerLang.off("mouseleave", e.proxy(this.onOutsideFunc, this)))
            },
            moBindEvents: function(t) {
                t ? this.footerLangLink.on("click", e.proxy(this.onClickFunc, this)) : this.footerLangLink.off("click", e.proxy(this.onClickFunc, this))
            },
            onOutsideFunc: function() {
                this.footerLangLayer.is(":hidden") || (this.footerLangLayer.hide(), this.showType = !1, this.dimmedFunc(), this.footerLangLayer.off("touchstartoutside focusoutside mousedownoutside"), this.htmlBody.off("keydown.footer"))
            },
            onClickFunc: function(t) {
                t.preventDefault(), this.onOverFunc(t)
            },
            onOverFunc: function(t) {
                this.footerLangLayer.is(":visible") || (this.footerLangLayer.show(), "focusin" === t.type && this.footerLangLayer.focus(), this.showType = !0, this.dimmedFunc(), window.clearTimeout(this.outsideTime), this.outsideTime = window.setTimeout(e.proxy(function() {
                    this.footerLangLayer.on("touchstartoutside focusoutside mousedownoutside", e.proxy(this.onOutsideFunc, this)), this.htmlBody.on("keydown.footer", e.proxy(this.closeLayer, this))
                }, this), 10))
            },
            closeLayer: function(t) {
                27 !== t.keyCode || this.footerLangLayer.is(":hidden") || (this.footerLangLayer.hide(), this.showType = !1, this.dimmedFunc(), this.footerLangLayer.off("touchstartoutside focusoutside mousedownoutside"), this.htmlBody.off("keydown.footer"))
            },
            dimmedFunc: function() {
                if (this.isSupportTransform()) {
                    var t = i.winSize().w;
                    if (t <= o.RESPONSIVE.MOBILE.WIDTH)
                        if (this.showType) {
                            if (this.langDimmed.is(":visible")) return;
                            this.langDimmed.show()
                        } else this.langDimmed.hide();
                    else void 0 !== this.lastViewType && "mo" === this.lastViewType && (this.footerLangLayer.hide(), this.showType = !1), this.langDimmed.hide()
                }
            },
            isSupportTransform: function() {
                return "WebkitTransform" in document.body.style || "MozTransform" in document.body.style || "msTransform" in document.body.style || "OTransform" in document.body.style || "transform" in document.body.style
            },
            windowPopup: function(o) {
                o.preventDefault();
                var i = e(o.currentTarget),
                    s = i.attr("href"),
                    n = i.data("pop-options"),
                    r = [],
                    a = this.getPopupWidth(n.width),
                    h = this.getPopupHeight(n.height);
                r = this.getPopupPosition(a, h), r[0] = n.width > a ? 0 : r[0], r[1] = n.height > h ? 0 : r[1];
                var p = "left=" + r[0];
                p += ", top=" + r[1], p += ", width=" + a, p += ", height=" + h, p += ",scrollbars=yes", p += ",location=no", p += ",menubar=no", p += ",titlebar=no", p += ",toolbar=no", p += ",status=no";
                var f = window.open(s, "", p);
                e(t).focus() && f.focus()
            },
            getPopupHeight: function(t) {
                var e = t;
                return e >= this.screenH && (e = this.screenH), e
            },
            getPopupWidth: function(t) {
                var e = t;
                return e >= this.screenW && (e = this.screenW), e
            },
            getPopupPosition: function(t, e) {
                var o = [];
                return o[0] = Math.round((this.screenW - t) / 2), o[1] = Math.round((this.screenH - e) / 2), o
            },
            backToTopAnimate: function() {
                var t = this;
                return this.htmlBody.animate({
                    scrollTop: 0
                }, t.opts.backToTopSpeed), !1
            },
            accordion: function(t) {
                var o = this,
                    i = o.footerItem.siblings(".is-opened"),
                    s = e(t.currentTarget),
                    n = s.closest(o.opts.footerItem),
                    r = n.find(o.opts.linkList);
                n.hasClass("is-opened") ? (n.removeClass("is-opened"), s.attr("aria-expanded", !1), r.stop().slideUp(200)) : (o.footerItem.removeClass("is-opened"), n.addClass("is-opened"), s.attr("aria-expanded", !0), i.length && (i.find(o.opts.listCta).attr("aria-expanded", !1), i.find(o.opts.linkList).stop().slideUp(200)), r.stop().slideDown(200, function() {
                    o.htmlBody.scrollTop() > n.offset().top && o.htmlBody.stop().animate({
                        scrollTop: n.offset().top
                    }, 200)
                }))
            },
            resetAccordion: function() {
                var t = this;
                this.footerItem.each(function() {
                    var o = e(this),
                        i = o.find(t.opts.linkList),
                        s = o.find(t.opts.listCta);
                    o.hasClass("is-opened") ? o.removeClass("is-opened") : 0, s.attr("aria-expanded") ? s.attr("aria-expanded", !1) : 0, i.attr("style", "")
                })
            }
        }
    }(), e(function() {
        s.footer2019.init(e("body"))
    })
}(window, window.jQuery);
! function(t, e) {
    "use strict";
    "undefined" == typeof t.smg && (t.smg = {}), "undefined" == typeof t.smg.aem && (t.smg.aem = {}), "undefined" == typeof t.smg.aem.components && (t.smg.aem.components = {}), "undefined" == typeof t.smg.aem.components.common && (t.smg.aem.components.common = {});
    var i = t.smg.aem.varStatic,
        o = t.smg.aem.util,
        n = t.smg.aem.components.common;
    n.footer = function() {
        var n = {
            wrap: ".gb-footer",
            popSelector: ".popWin",
            backToTopSelecotr: ".gb-footer__btn-top",
            backToTopSpeed: 1e3,
            footerLang: ".gb-footer__lang",
            footerLangLink: ".gb-footer__link",
            footerLangLayer: ".gb-footer__lang-select",
            langDimmed: ".gb-footer__lang-dimmed"
        };
        return {
            init: function(t, e) {
                (this.container = t).size() && (this.opts = o.def(n, e || {}), this.setElements(), this.setBindEvents())
            },
            setElements: function() {
                var t = navigator.userAgent.toLowerCase();
                this.screenW = screen.availWidth, this.screenH = 0, this.screenH = -1 != t.indexOf("chrome") ? screen.availHeight - 63 : -1 != t.indexOf("firefox") ? screen.availHeight - 63 : screen.availHeight - 70, this.htmlBody = e("html, body"), this.wrap = e(this.opts.wrap), this.popSelector = this.wrap.find(this.opts.popSelector), this.backToTopSelecotr = this.wrap.find(this.opts.backToTopSelecotr).find("a"), this.viewType = "", this.lastViewType = "", this.footerLang = this.wrap.find(this.opts.footerLang), this.footerLangLink = this.footerLang.find(this.opts.footerLangLink), this.footerLangLayer = this.footerLang.find(this.opts.footerLangLayer), this.langDimmed = this.wrap.find(this.opts.langDimmed)
            },
            setBindEvents: function() {
                var t = this;
                this.popSelector.each(function() {
                    e(this).on("click", e.proxy(t.windowPopup, t))
                }), this.backToTopSelecotr.on("click", e.proxy(t.backToTopAnimate, t)), this.footerLangLayer.length && (e(window).on("resize", e.proxy(this.resizeFunc, this)), this.resizeFunc())
            },
            resizeFunc: function() {
                var t = o.winSize().w;
                if (t <= i.RESPONSIVE.MOBILE.WIDTH) {
                    if ("mo" === this.viewType) return;
                    this.viewType = "mo", this.moBindEvents(!0), this.pcBindEvents(!1)
                } else {
                    if ("pc" === this.viewType) return;
                    this.viewType = "pc", this.moBindEvents(!1), this.pcBindEvents(!0)
                }
                "" === this.viewType && (this.viewType = t <= i.RESPONSIVE.MOBILE.WIDTH ? "mo" : "pc"), this.dimmedFunc(), this.lastViewType = this.viewType
            },
            pcBindEvents: function(t) {
                t ? (this.footerLang.on("mouseenter focusin", e.proxy(this.onOverFunc, this)), this.footerLang.on("mouseleave", e.proxy(this.onOutsideFunc, this))) : (this.footerLang.off("mouseenter focusin", e.proxy(this.onOverFunc, this)), this.footerLang.off("mouseleave", e.proxy(this.onOutsideFunc, this)))
            },
            moBindEvents: function(t) {
                t ? this.footerLangLink.on("click", e.proxy(this.onClickFunc, this)) : this.footerLangLink.off("click", e.proxy(this.onClickFunc, this))
            },
            onOutsideFunc: function() {
                this.footerLangLayer.is(":hidden") || (this.footerLangLayer.hide(), this.showType = !1, this.dimmedFunc(), this.footerLangLayer.off("touchstartoutside focusoutside mousedownoutside"))
            },
            onClickFunc: function(t) {
                t.preventDefault(), this.onOverFunc(t)
            },
            onOverFunc: function(t) {
                this.footerLangLayer.is(":visible") || (this.footerLangLayer.show(), "focusin" === t.type && this.footerLangLayer.focus(), this.showType = !0, this.dimmedFunc(), window.clearTimeout(this.outsideTime), this.outsideTime = window.setTimeout(e.proxy(function() {
                    this.footerLangLayer.on("touchstartoutside focusoutside mousedownoutside", e.proxy(this.onOutsideFunc, this))
                }, this), 10))
            },
            dimmedFunc: function() {
                var t = o.winSize().w;
                if (t <= i.RESPONSIVE.MOBILE.WIDTH)
                    if (this.showType) {
                        if (this.langDimmed.is(":visible")) return;
                        this.langDimmed.show()
                    } else this.langDimmed.hide();
                else void 0 !== this.lastViewType && "mo" === this.lastViewType && (this.footerLangLayer.hide(), this.showType = !1), this.langDimmed.hide()
            },
            windowPopup: function(i) {
                i.preventDefault();
                var o = e(i.currentTarget),
                    n = o.attr("href"),
                    s = o.data("pop-options"),
                    r = [],
                    h = this.getPopupWidth(s.width),
                    a = this.getPopupHeight(s.height);
                r = this.getPopupPosition(h, a), r[0] = s.width > h ? 0 : r[0], r[1] = s.height > a ? 0 : r[1];
                var c = "left=" + r[0];
                c += ", top=" + r[1], c += ", width=" + h, c += ", height=" + a, c += ",scrollbars=yes", c += ",location=no", c += ",menubar=no", c += ",titlebar=no", c += ",toolbar=no", c += ",status=no";
                var p = window.open(n, "", c);
                e(t).focus() && p.focus()
            },
            getPopupHeight: function(t) {
                var e = t;
                return e >= this.screenH && (e = this.screenH), e
            },
            getPopupWidth: function(t) {
                var e = t;
                return e >= this.screenW && (e = this.screenW), e
            },
            getPopupPosition: function(t, e) {
                var i = [];
                return i[0] = Math.round((this.screenW - t) / 2), i[1] = Math.round((this.screenH - e) / 2), i
            },
            backToTopAnimate: function() {
                var t = this;
                return this.htmlBody.animate({
                    scrollTop: 0
                }, t.opts.backToTopSpeed), !1
            }
        }
    }(), e(function() {
        n.footer.init(e("body"))
    })
}(window, window.jQuery);
var visitYourSite = {
    init: function() {
        this.setElements(), this.setBindEvents()
    },
    setElements: function() {
        this.pageLink, this.siteCd, this.layerPopupWrap = ".s-visit-layer_popup", this.layerDimm = ".visit-lightbox-skrim", this.focusLoop = ".js_end_loop", this.$layerPop = $("#popup-type10"), this.$links = $(".s-local-list__content-links").find("a"), this.$closeBtn = $(".s-visit-layer_popup").find(".s-close-button"), this.$popLinkBtn = $(".s-visit-layer_popup").find(".s-pop-btn").find("a")
    },
    setBindEvents: function() {
        this.layerPopOpen(), this.layerPopClose(), this.resizePopCenter(), this.popLinkAction()
    },
    layerPopOpen: function() {
        var t = this;
        t.$links.on("click", function(i) {
            i.preventDefault(), t.pageLink = $(this).attr("href"), t.siteCd = $(this).parent().attr("site_cd"), $(t.layerPopupWrap + "," + t.layerDimm).css("display", "block"), t.setPopupCenter()
        }), $(t.layerDimm).on("click", function() {
            t.$closeBtn.trigger("click")
        })
    },
    layerPopClose: function() {
        var t = this;
        this.$closeBtn.on("click", function(i) {
            i.preventDefault(), $(t.layerPopupWrap + "," + t.layerDimm).css("display", "none")
        })
    },
    setPopupCenter: function() {
        var t = this,
            i = $(window).width(),
            e = $(window).height(),
            o = i / 2 - t.$layerPop.width() / 2,
            n = e / 2 - t.$layerPop.height() / 2;
        t.$layerPop.css({
            position: "fixed",
            left: o,
            top: n
        })
    },
    popLinkAction: function() {
        var t = this;
        t.$popLinkBtn.each(function(i) {
            $(this).on("click", function(e) {
                if (e.preventDefault(), 0 == i) {
                    {
                        window.smg.aem.util.cookie.setCookie("site_cd", t.siteCd, 3)
                    }
                    location.href = t.pageLink
                } else 1 == i && (location.href = t.pageLink)
            })
        })
    },
    resizePopCenter: function() {
        var t = this;
        $(window).on("resize", function() {
            t.setPopupCenter()
        })
    }
};
$(function() {
        visitYourSite.init()
    }),
    function(t, i) {
        "use strict";
        "undefined" == typeof t.smg && (t.smg = {}), "undefined" == typeof t.smg.aem && (t.smg.aem = {}), "undefined" == typeof t.smg.aem.components && (t.smg.aem.components = {}), "undefined" == typeof t.smg.aem.components.common && (t.smg.aem.components.common = {});
        var e = t.smg.aem.components.common,
            o = t.smg.aem.customEvent;
        e.visitYourSiteAccordion = function() {
            return {
                init: function() {
                    this.setElements(), this.accordWrap.length && this.setBindEvents()
                },
                setElements: function() {
                    this.accordWrap = i(".s-local-list__content"), this.accordList = this.accordWrap.find(".s-local-list__content-tit"), this.accordContent = this.accordWrap.find(".s-local-list__content-links"), this.prevOpenedTarget = void 0
                },
                setBindEvents: function() {
                    this.accordList.off("click.visitYourSiteAccordion").on("click.visitYourSiteAccordion", i.proxy(this.accordListHandler, this)), i("body").off(o.RESPONSIVE.CHANGE + ".visitYourSiteAccordion").on(o.RESPONSIVE.CHANGE + ".visitYourSiteAccordion", i.proxy(this.chkResponsiveChange, this)), i("body").trigger(o.RESPONSIVE.GET_STATUS)
                },
                accordListHandler: function(t) {
                    if (this.isShowAccordion) {
                        var e = i(t.currentTarget),
                            o = e.next();
                        e.hasClass("s-menu-open") ? (this.closeAccord(e, o), this.prevOpenedTarget = void 0) : (e.addClass("s-menu-open"), o.stop().slideDown(function() {
                            var t = e.offset().top;
                            i("html, body").stop().animate({
                                scrollTop: t
                            }, 700)
                        }), "undefined" != typeof this.prevOpenedTarget && this.closeAccord(this.prevOpenedTarget[0], this.prevOpenedTarget[1]), this.prevOpenedTarget = [e, o])
                    }
                },
                closeAccord: function(t, i) {
                    t.removeClass("s-menu-open"), i.stop().slideUp()
                },
                chkResponsiveChange: function(t, i) {
                    var e = i.RESPONSIVE_NAME;
                    "mobile" === e ? this.isShowAccordion = !0 : (this.isShowAccordion = !1, this.prevOpenedTarget = void 0, this.accordList.removeClass("s-menu-open"), this.accordContent.stop().removeAttr("style"))
                }
            }
        }(), i(function() {
            e.visitYourSiteAccordion.init()
        })
    }(window, window.jQuery);
! function(e, n) {
    "use strict";
    "undefined" == typeof e.smg && (e.smg = {}), "undefined" == typeof e.smg.aem && (e.smg.aem = {}), "undefined" == typeof e.smg.aem.components && (e.smg.aem.components = {}), "undefined" == typeof e.smg.aem.components.aboutsamsung && (e.smg.aem.components.aboutsamsung = {});
    var t = e.smg.aem.components.aboutsamsung;
    n.fn.extend({
        snsLayer: function(e) {
            function t() {
                n(e.btnWrap).removeClass("s-active"), n(e.layer).hide(), n(e.wrap).off("mousedownoutside focusoutside", n.proxy(t, this))
            }
            var i = {
                wrap: ".sc-page-title",
                btnWrap: ".sc-page-title__share",
                layer: ".sc-page-title__share-list"
            };
            return e = n.extend(i, e), this.each(function() {
                n(this).on("click", function(i) {
                    i.preventDefault(), n(e.layer).is(":visible") ? t() : (n(e.btnWrap).addClass("s-active"), n(e.layer).show(), n(e.wrap).on("mousedownoutside focusoutside", n.proxy(t, this)))
                })
            })
        }
    }), t.pageTitle = function() {
        var e = {
                init: function() {
                    if (this.setElmts(), this.bindEvts(), "cn" === n("#siteCode").val() && "undefined" != typeof n("#qrcodeTableCm").val()) {
                        var e = navigator.userAgent.toLowerCase();
                        if (-1 != e.indexOf("msie")) {
                            var t = navigator.userAgent.match(/Trident\/(\d.\d)/i);
                            null != t && "6.0" == t[1] ? n("#qrcodeTableCm").qrcode(location.href) : -1 == navigator.userAgent.indexOf("9.0") ? (n("#qrcodeTableCm").qrcode({
                                render: "table",
                                text: location.href
                            }), n("#qrcodeTableCm").css("margin-left", "10px")) : n("#qrcodeTableCm").qrcode(location.href)
                        } else n("#qrcodeTableCm").qrcode(location.href)
                    }
                },
                setElmts: function() {
                    this.openBtn = n(".sc-page-title .s-ico-weixin"), this.lyr = n("#weixin_share"), this.closeBtn = this.lyr.find(".weixin_tit a")
                },
                bindEvts: function() {
                    this.openBtnClickListener(), this.closeBtnClickListener()
                },
                openBtnClickListener: function() {
                    var e = this;
                    this.openBtn.on("click", function(n) {
                        e.lyr.is(":visible") || e.lyr.css({
                            display: "block"
                        })
                    })
                },
                closeBtnClickListener: function() {
                    var e = this;
                    this.closeBtn.on("click", function(n) {
                        e.lyr.css({
                            display: "none"
                        })
                    })
                }
            },
            t = function() {
                e.init()
            };
        return {
            init: t
        }
    }(), n(function() {
        n(".sc-page-title__share-btn").snsLayer(), t.pageTitle.init()
    })
}(window, window.jQuery);
! function(n, t) {
    "use strict";
    "undefined" == typeof n.smg && (n.smg = {}), "undefined" == typeof n.smg.aem && (n.smg.aem = {}), "undefined" == typeof n.smg.aem.components && (n.smg.aem.components = {}), "undefined" == typeof n.smg.aem.components.common && (n.smg.aem.components.common = {});
    var i = (n.smg.aem.varStatic, n.smg.aem.util),
        o = (n.smg.aem.customEvent, n.smg.aem.components.common);
    o.notificationBar = function() {
        var n = {
            wrap: ".cm-g-notification-bar",
            notiBarSection: ".cm-notification-bar",
            notiBarCloseBtn: ".cm-notification-bar__close"
        };
        return {
            init: function(t, o) {
                (this.container = t).size() && (this.opts = i.def(n, o || {}), this.setElements(), this.$wrap.length && this.setBindEvents())
            },
            setElements: function() {
                this.$wrap = this.container.find(this.opts.wrap), this.$notiBarSection = this.$wrap.find(this.opts.notiBarSection), this.$notiBarCloseBtn = this.$wrap.find(this.opts.notiBarCloseBtn)
            },
            setBindEvents: function() {
                this.closeBtnClickHandler()
            },
            closeBtnClickHandler: function() {
                var n = this.$notiBarSection,
                    i = this.$notiBarCloseBtn;
                n.each(function() {
                    i.on("click", function(i) {
                        var o = t(i.currentTarget);
                        o.closest(n).css("display", "none")
                    })
                })
            }
        }
    }(), t(function() {
        o.notificationBar.init(t("body"))
    })
}(window, window.jQuery);
! function(e, t) {
    "use strict";
    "undefined" == typeof e.smg && (e.smg = {}), "undefined" == typeof e.smg.aem && (e.smg.aem = {}), "undefined" == typeof e.smg.aem.components && (e.smg.aem.components = {}), "undefined" == typeof e.smg.aem.components.common && (e.smg.aem.components.common = {});
    var i = (e.smg.aem.varStatic, e.smg.aem.util),
        s = (e.smg.aem.customEvent, e.smg.aem.components.common);
    s.cmgLayerMessageCookieImple = function() {
        var e = {
            wrap: ".cm-layer-message",
            layerMessageContent: ".cm-layer-message__content",
            closeBtn: ".js-alert-close",
            ctaBtn: ".cm-layer-message__cta",
            layerCookieCheckBox: '.cm-layer-message__cookie input[type="checkbox"]',
            layerCookie: "#componentIDcookie",
            cookieName: "cmglayermessage"
        };
        return {
            init: function(t, s) {
                (this.$container = t).length && (this.opts = i.def(e, s || {}), this.setElements(), this.$layerMessageContent.length && (this.initProperties(), this.bindEvents(), this.isSameIdCookieExist(!0), this.checkAemEditorPreviewMode()))
            },
            setElements: function() {
                this.$wrap = this.$container, this.$layerMessageContent = this.$wrap.find(this.opts.layerMessageContent), this.$layerCookieCheckBox = this.$wrap.find(this.opts.layerCookieCheckBox), this.$layerCookieLabel = this.$wrap.find(this.opts.layerCookie), this.$closeBtn = this.$wrap.find(this.opts.closeBtn), this.$ctaBtn = this.$wrap.find(this.opts.ctaBtn)
            },
            initProperties: function() {
                this.metaSiteCode = t('meta[name="sitecode"]').attr("content"), this.cmLayerValue = this.$layerMessageContent.data("cmlayer-value"), this.cmLayerValue && (this.cmLayerValue.useLayer = "true" === this.cmLayerValue.useLayer ? !0 : !1, this.cmLayerValue.clickOpen = "true" === this.cmLayerValue.clickOpen ? !0 : !1, this.cmLayerValue.expiredDate = "false" === this.cmLayerValue.expiredDate ? !1 : this.cmLayerValue.expiredDate), this.isCookieChk = this.$layerCookieCheckBox.prop("checked"), this.cookieName = this.opts.cookieName, this.componentId = this.$wrap.attr("id")
            },
            checkAemEditorPreviewMode: function() {
                i.isAemEditMode() && t(this.opts.wrap).css("display", "block")
            },
            bindEvents: function() {
                this.$closeBtn.off("click.cmglayermessage").on("click.cmglayermessage", t.proxy(this.onCloseBtnHandler, this)), this.$ctaBtn.off("click.cmglayermessage").on("click.cmglayermessage", t.proxy(this.onCtaBtnHandler, this)), this.$layerCookieLabel.off("click.cmglayermessage").on("click.cmglayermessage", t.proxy(this.onLabelHandler, this))
            },
            onCloseBtnHandler: function(e) {
                this.setLayerCookie()
            },
            onCtaBtnHandler: function(e) {
                t(e.currentTarget).hasClass("js-alert-close") && e.preventDefault()
            },
            onLabelHandler: function(e) {
                var i = t(e.currentTarget);
                i.prop("checked") === !0 ? this.isCookieChk = !0 : i.prop("checked") === !1 && (this.isCookieChk = !1)
            },
            isSameIdCookieExist: function(e) {
                var i = !1,
                    s = [],
                    o = this.cmLayerValue;
                if (o) {
                    if (o.useLayer === !1) return;
                    if (o.useLayer === !0 && o.clickOpen === !0) return
                }
                return this.getLayerCookie() ? (s = this.getLayerCookie().split(":"), s[1] === this.metaSiteCode && s[2] === this.componentId && (i = !0)) : e && t("#" + this.componentId).dimmedLayerAutoOpen(), i
            },
            setLayerCookie: function() {
                var e = 0,
                    t = "";
                this.isCookieChk && this.$layerCookieCheckBox.length && (e = this.getExpiredDate(), 0 !== e && (t = this.cookieName + ":" + this.metaSiteCode + ":" + this.componentId, i.cookie.setCookie(t, !0, e)))
            },
            getLayerCookie: function() {
                var e = this.cookieName + ":" + this.metaSiteCode + ":" + this.componentId,
                    t = i.cookie.getCookie(e);
                return t
            },
            getExpiredDate: function() {
                var e = 0;
                if (this.cmLayerValue) {
                    var t = this.cmLayerValue.expiredDate;
                    t === !1 ? e = 0 : "24 hours" === t ? e = 1 : "1 week" === t && (e = 7)
                }
                return e
            }
        }
    }, s.cmgLayerMessageCookie = function() {
        var e = {
                wrapper: ".cm-layer-message"
            },
            o = [];
        return {
            init: function(a, n) {
                this.opts = i.def(e, n || {}), this.wrapper = t(this.opts.wrapper), this.wrapper.each(function(e) {
                    var i = new s.cmgLayerMessageCookieImple;
                    i.init(t(this)), o.push(i)
                })
            },
            getCmCarouselObj: function(e) {
                return o[e]
            }
        }
    }(), t(function() {
        s.cmgLayerMessageCookie.init(t("body"))
    })
}(window, window.jQuery);
! function(e, t) {
    "use strict";
    "undefined" == typeof e.smg && (e.smg = {}), "undefined" == typeof e.smg.aem && (e.smg.aem = {}), "undefined" == typeof e.smg.aem.components && (e.smg.aem.components = {}), "undefined" == typeof e.smg.aem.components.common && (e.smg.aem.components.common = {});
    var i = (e.smg.aem.varStatic, e.smg.aem.util, e.smg.aem.customEvent, e.smg.aem.components.common);
    i.commonlayerAlert = function() {
        var e = {
                responsiveSize: 768,
                isSupportTransform: function() {
                    return "WebkitTransform" in document.body.style || "MozTransform" in document.body.style || "msTransform" in document.body.style || "OTransform" in document.body.style || "transform" in document.body.style
                }(),
                windowWidth: function() {
                    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
                }
            },
            i = {
                init: function(i) {
                    this.obj = t(i), this.setLayout(), this.layerSize.init(this), e.isSupportTransform ? (this.resizeFunc(), this.bindResizeEventHandlers()) : this.layerView(!0)
                },
                setLayout: function() {
                    this.obj.css({
                        left: "50%",
                        top: "50%"
                    })
                },
                bindResizeEventHandlers: function() {
                    t(window).on("resize orientationchange", t.proxy(this.resizeFunc, this))
                },
                layerView: function() {
                    this.obj.css({
                        left: "50%",
                        "margin-left": -(this.layerSize.w() / 2),
                        "margin-top": -(this.layerSize.h() / 2)
                    })
                },
                resizeFunc: function() {
                    this.layerView(!0)
                },
                layerSize: {
                    init: function(e) {
                        this.obj = e.obj
                    },
                    w: function() {
                        return this.obj.outerWidth()
                    },
                    h: function() {
                        return this.obj.outerHeight()
                    }
                }
            },
            s = {
                init: function() {
                    this.opts(), this.setElements(), this.bindEventHandlers()
                },
                opts: function() {
                    this.delay = 100
                },
                setElements: function() {
                    this.menuWrap = t(".js-cta-alert"), this.menuLayer = t(".cm-layer-alert"), this.closeBtn = this.menuLayer.find(".js-alert-close")
                },
                bindEventHandlers: function() {
                    this.menuWrapClickListener()
                },
                menuWrapClickListener: function() {
                    var e = this;
                    this.menuWrap.on("click", function(t) {
                        t.preventDefault(), e.menuLayer.is(":visible") ? e.offDisplay() : (e.onDisplay(), i.init(".cm-layer-alert"))
                    }), this.menuLayer.on("click", ".js-alert-close", t.proxy(function(t) {
                        t.preventDefault(), e.offDisplay()
                    }, this))
                },
                onLayer: function() {
                    this.menuLayer.stop().fadeIn(this.delay).attr("tabIndex", 0).focus(), t(".s-layer-dimmed").eq(0).show(), setTimeout(t.proxy(function() {
                        this.menuLayer.on("keydown keyup", t.proxy(function(e) {
                            "keydown" === e.type ? (16 === e.keyCode || 16 === e.which) && (this.keyShift = !0) : "keyup" === e.type && (16 === e.keyCode || 16 === e.which) && (this.keyShift = !1)
                        }, this)), this.menuLayer.on("clickoutside", t.proxy(function() {
                            this.closeBtn.trigger("click")
                        }, this)), this.menuLayer.on("focusoutside", t.proxy(function() {
                            this.keyShift ? this.closeBtn.focus() : this.menuLayer.focus()
                        }, this))
                    }, this), 100)
                },
                offLayer: function(e) {
                    e = e || this.delay, this.menuLayer.stop().fadeOut(e), this.menuWrap.focus(), t(".s-layer-dimmed").eq(0).hide()
                },
                onDisplay: function() {
                    this.onLayer()
                },
                offDisplay: function(e) {
                    e = e || this.delay, this.menuLayer.off("keydown keyup clickoutside focusoutside"), this.offLayer(e)
                }
            };
        return s.init(), {
            init: function() {
                s.init()
            }
        }
    }()
}(window, window.jQuery),
function(e, t) {
    "use strict";
    e.dimmedLayerAutoOpenManager = function(e) {
        this.layer = e.layer, this.closeBtn = e.closeBtn || this.layer.find(".js-alert-close"), this.dimmed = t(".s-layer-dimmed").eq(0), this.layer.length && this.init()
    }, e.dimmedLayerAutoOpenManager.prototype = {
        init: function() {
            this.setElements(), this.bindEventHandlers(), this.onDisplay(), this.layerAlertAlign()
        },
        setElements: function() {
            this.layerWidth = 0, this.layerHeight = 0, this.fadeDelay = 100, this.keyShift = !1, this.layerOpenClass = "layer-opened"
        },
        bindEventHandlers: function() {
            this.closeBtn.on("click", t.proxy(this.offDisplay, this)), this.layer.on("keydown keyup", t.proxy(this.checkShift, this)), this.layer.on("focusoutside", t.proxy(this.onFocusLayer, this)), this.dimmed && this.dimmed.on("click", t.proxy(this.offDisplay, this)), this.isSupportTransform() ? t(e).on("resize orientationchange", t.proxy(this.resizeFunc, this)) : this.layerView()
        },
        onFocusLayer: function(e) {
            this.keyShift ? this.closeBtn.focus() : this.layer.focus()
        },
        checkShift: function(e) {
            "keydown" === e.type ? (16 === e.keyCode || 16 === e.which) && (this.keyShift = !0) : "keyup" === e.type && (16 === e.keyCode || 16 === e.which) && (this.keyShift = !1)
        },
        resizeFunc: function() {
            this.layer.is(":visible") && (this.setLayerSize(), this.layerView())
        },
        layerAlertAlign: function() {
            this.setLayerSize(), this.layerView()
        },
        setLayerSize: function() {
            this.layerWidth = this.layer.outerWidth(), this.layerHeight = this.layer.outerHeight()
        },
        layerView: function() {
            this.layer.css({
                left: "50%",
                top: "50%",
                "margin-top": -(this.layerHeight / 2),
                "margin-left": -(this.layerWidth / 2)
            })
        },
        setLayout: function() {
            this.layer.css({
                left: "50%",
                top: "50%"
            })
        },
        onLayer: function() {
            this.layer.stop().fadeIn(this.fadeDelay).attr("tabIndex", 0).focus(), this.dimmed && this.dimmed.show(), t("html").addClass(this.layerOpenClass)
        },
        offLayer: function() {
            this.layer.stop().fadeOut(this.fadeDelay).removeAttr("tabIndex"), this.dimmed && this.dimmed.hide(), t("html").removeClass(this.layerOpenClass)
        },
        onDisplay: function() {
            this.onLayer()
        },
        offDisplay: function() {
            this.layer.off("keydown keyup focusoutside"), this.offLayer()
        },
        isSupportTransform: function() {
            return "WebkitTransform" in document.body.style || "MozTransform" in document.body.style || "msTransform" in document.body.style || "OTransform" in document.body.style || "transform" in document.body.style
        }
    }, t.fn.dimmedLayerAutoOpen = function(i) {
        i = i || {};
        var s = t.extend(i, {
            layer: t(this)
        });
        return new e.dimmedLayerAutoOpenManager(s)
    }
}(window, window.jQuery),
function(e, t) {
    "use strict";
    var i = window.smg.aem.util;
    e.layerPopupManager = function(e) {
        this.cta = e.cta, this.initType = e.initType || "init", this.dimmed = t(".s-layer-dimmed").eq(0), this.isAemEditMode = i.isAemEditMode(), this.init()
    }, e.layerPopupManager.prototype = {
        init: function() {
            this.setElements(), this.bindEventHandlers()
        },
        checkSpecial: function(e) {
            function t(e) {
                if (!e) return !1;
                for (var t = "", i = 0, s = e.length; s > i; i++) t += "\\" + e[i].charCodeAt(0).toString(16);
                return t
            }
            var i = /[`~!@#$%^)(&|\\\'\";:\/?]/gi;
            return 1 == i.test(e) ? t(e) : e
        },
        setElements: function() {
            this.unsetLayerInfo(), this.wrap = t("#" + this.checkSpecial(this.cta.data("cm-layer-id"))), this.layerWidth = 0, this.layerHeight = 0, this.fadeDelay = 100, this.keyShift = !1, this.layerToggleClass = "layer-opened", this.layerCloseClass = "js-alert-close", this.tempLoopClass = "js-loop-hidden", this.isResizeContent = !1, this.isTouchDevice = t("body").hasClass("touch-device") ? !0 : !1, this.cta.data("cm-layer-opt") && (this.resizeRatio = Number(this.cta.data("cm-layer-opt").resizeRatio), this.resizeContentEl = t(this.cta.data("cm-layer-opt").resizeContent), this.isResizeContent = this.resizeContentEl.length ? !0 : !1)
        },
        bindEventHandlers: function() {
            "reInit" == this.initType && (t(document).off("click.alertLayer", "[data-cm-layer-id]", t.proxy(this.onDisplay, this)), t(e).off("resize.alertLayer orientationchange.alertLayer", t.proxy(this.resizeFunc, this))), t(document).on("click.alertLayer", "[data-cm-layer-id]", t.proxy(this.onDisplay, this)), t(e).on("resize.alertLayer orientationchange.alertLayer", t.proxy(this.resizeFunc, this))
        },
        checkShift: function(e) {
            var t = e.keyCode || e.which,
                i = e.type;
            "keydown" === i ? 16 === t && (this.keyShift = !0) : "keyup" === i && 16 === t && (this.keyShift = !1)
        },
        resizeFunc: function(e) {
            this.layer && this.layer.is(":visible") && (this.isResizeContent && !this.isTouchDevice && this.resizeContentHeight(), this.layerView())
        },
        resizeContentHeight: function() {
            var e = this.resizeContentEl || {},
                t = i.winSize().h,
                s = (Math.abs(parseInt(this.wrap.offset().top)), Math.abs(parseInt(this.layer.css("margin-top")) / 2));
            e.css("height", (t - s) * this.resizeRatio)
        },
        setLayerSize: function() {
            this.layerWidth = this.layer.outerWidth(), this.layerHeight = this.layer.outerHeight()
        },
        layerView: function() {
            this.setLayerSize(), this.layer.css({
                left: "50%",
                top: "50%",
                "margin-top": -(this.layerHeight / 2),
                "margin-left": -(this.layerWidth / 2)
            })
        },
        onDisplay: function(e) {
            e.preventDefault();
            var i = t(e.currentTarget),
                s = t("#" + this.checkSpecial(i.data("cm-layer-id")));
            s.length ? (this.setLayerInfo(i, s), this.onLayer(i), this.isResizeContent && t("html").css("overflow-y", "hidden")) : this.isAemEditMode
        },
        onFocusLoopTempLink: function(e) {
            e.preventDefault();
            var i = t(e.currentTarget),
                s = (i.index(), i.prev().length),
                n = i.next().length,
                o = this.layer.find("." + this.tempLoopClass),
                r = this.layer.find("." + this.layerCloseClass),
                a = this.layer.find("a:not(." + this.layerCloseClass + "), input, button:not(." + this.layerCloseClass + "), select");
            if (s || this.keyShift)
                if (n || this.keyShift)
                    if (!s && this.keyShift) o.eq(1).focus();
                    else {
                        if (n || !this.keyShift) return;
                        r.focus()
                    } else o.eq(0).focus();
            else a.length ? a.eq(0).focus() : r.focus()
        },
        setLoopEl: function() {
            this.isTouchDevice || (this.layer.prepend('<span class="' + this.tempLoopClass + '" tabindex="0"></a>'), this.layer.append('<span class="' + this.tempLoopClass + '" tabindex="0"></a>')), setTimeout(t.proxy(function() {
                this.isTouchDevice || this.layer.on("focusin", "." + this.tempLoopClass, t.proxy(this.onFocusLoopTempLink, this)), this.layer.attr("tabindex", 0).focus(), this.layer.on("focusoutside", t.proxy(this.focusoutLayer, this))
            }, this), 200)
        },
        focusoutLayer: function(e) {
            this.layer.focus(), this.layer.off("focusoutside", t.proxy(this.focusoutLayer, this))
        },
        onLayer: function(e) {
            this.closeBtn && this.closeBtn.trigger("click"), this.onBindEvents(), this.setLoopEl(), this.isResizeContent && t(window).trigger("resize")
        },
        offDisplay: function(e) {
            e.preventDefault(), this.offLayer()
        },
        offLayer: function() {
            this.closeBtn = this.layer.find("." + this.layerCloseClass), this.unBindEvents(), this.isResizeContent && t("html").css("overflow-y", "")
        },
        onBindEvents: function() {
            this.layer.off("click"), this.layer.stop().fadeIn(this.fadeDelay), t("html").addClass(this.layerToggleClass), this.layer.on("keydown keyup", t.proxy(this.checkShift, this)), this.closeBtn.on("click.cmLayerAlert", t.proxy(this.offDisplay, this)), this.isSupportTransform() ? t(e).trigger("resize") : this.layerView(), this.dimmed.length && this.dimmed.show().on("click", t.proxy(this.offDisplay, this))
        },
        unBindEvents: function() {
            var e = this.currCTA;
            this.layer.off("focusin keydown keyup focusoutside"), this.layer.stop().fadeOut(this.fadeDelay), this.layer.find("." + this.tempLoopClass).remove(), t("html").removeClass(this.layerToggleClass), this.dimmed.length && this.dimmed.hide(), this.closeBtn.off("click.cmLayerAlert"), e.focus()
        },
        setLayerInfo: function(e, t) {
            this.layer = t, this.closeBtn = this.layer.find("." + this.layerCloseClass), this.currCTA = e
        },
        unsetLayerInfo: function() {
            this.layer = "", this.closeBtn = "", this.currCTA = null
        },
        isSupportTransform: function() {
            return "WebkitTransform" in document.body.style || "MozTransform" in document.body.style || "msTransform" in document.body.style || "OTransform" in document.body.style || "transform" in document.body.style
        }
    }, t.fn.layerPopup = function(i) {
        i = i || {};
        var s = t.extend(i, {
            cta: t(this)
        });
        return new e.layerPopupManager(s)
    }, t("[data-cm-layer-id]").layerPopup()
}(window, window.jQuery);
! function(t, e) {
    "use strict";
    "undefined" == typeof t.smg && (t.smg = {}), "undefined" == typeof t.smg.aem && (t.smg.aem = {}), "undefined" == typeof t.smg.aem.components && (t.smg.aem.components = {}), "undefined" == typeof t.smg.aem.components.common && (t.smg.aem.components.common = {});
    var i = t.smg.aem.varStatic,
        s = t.smg.aem.util,
        a = t.smg.aem.customEvent;
    "function" == typeof e.aemEditMode && (e.aemEditMode = function() {}), e.aemEditMode = function() {
        var t = e("body", parent.document).find("#ContentScrollView");
        return t.length ? !0 : !1
    };
    var n = t.smg.aem.components.common;
    n.cmColumnsCarouselImple = function() {
        var n = e("html"),
            o = e("body"),
            l = null,
            c = {
                play: e.getI18nDiction("play", "Auto Play"),
                pause: e.getI18nDiction("Pause", "Pause")
            },
            r = {
                columnsItem: ".cm-columns__item",
                slickInnerCTA: ".s-btn-cta, .s-btn-cta-text"
            };
        return {
            init: function(t, i) {
                l = t, l.length && !e.aemEditMode() && (this.opts = s.def(r, i || {}), this.slickOpts = l.data("slick-opt"), this.setElements(), this.setBindEvents(), this.setProperties())
            },
            setElements: function() {
                this.$heightMatchColumn = l.find(".cm-columns__item").filter(function(t) {
                    return 1 === e(this).find(".s-marketing-cta").length
                }).closest(".cm-columns"), this.pageTrack = "object" == typeof digitalData && "object" == typeof digitalData.page && "object" == typeof digitalData.page.pageInfo && "string" == typeof digitalData.page.pageInfo.pageTrack ? digitalData.page.pageInfo.pageTrack : ""
            },
            setProperties: function() {
                this.slickStatus = !1, this.resizerTinmeoutObj = null, this.columnsNum = this.getColumnsNum()
            },
            setBindEvents: function() {
                o.on(a.RESPONSIVE.CHANGE + ".cmColumnCarousel", e.proxy(this.onResponsiveChange, this)), e(t).on("orientationchange.cmColumnCarousel", e.proxy(this.onOrientationchange, this)), o.trigger(a.RESPONSIVE.GET_STATUS), e(t).on("resize.cmColumnCarousel", e.proxy(this.onResizeHandler, this))
            },
            setSlick: function() {
                var t = this.slickOpts,
                    s = o.hasClass(i.SUPPORT.TOUCH_DEVICE) ? 300 : 500,
                    a = !1;
                a = t.autoSlideOpts.autoSlide ? !0 : !1;
                var c = {
                    rtl: n.hasClass("rtl"),
                    adaptiveHeight: !0,
                    dots: t.mobile.useDot,
                    arrows: t.mobile.useArrow,
                    infinite: a,
                    slidesToShow: t.mobile.slidesToShow,
                    slidesToScroll: t.mobile.slidesToShow,
                    speed: s,
                    autoplay: t.autoSlideOpts.autoSlide,
                    autoplaySpeed: t.autoSlideOpts.autoSlideTime
                };
                l.off("init").on("init", e.proxy(this.onSlickAfterChange, this)), l.slick(c), this.setSlickDotsTagging(), this.setSlickCtaTagging(), this.setSlickArrowTagging(), l.off("afterChange").on("afterChange", e.proxy(this.onSlickAfterChange, this)), l.find(".ma-g-c-items-feature__figure").removeAttr("style"), l.find(".ma-g-c-items-feature__text-wrap").removeAttr("style"), l.find(".ma-g-c-items-feature__disclaimer").removeAttr("style"), l.find(".s-marketing-cta").removeAttr("style"), l.find(".ma-g-c-items-feature").removeAttr("style"), l.find(".ma-g-c-items-feature__content").removeAttr("style");
                var r = this;
                setTimeout(function() {
                    l.find("video").each(function(t) {
                        e(this).prop("muted", !0), e(this)[0].play()
                    })
                }, 150), setTimeout(function() {
                    r.setSlickHeightMatch()
                }, 600), this.setAutoSlide()
            },
            unSlick: function() {
                l.slick("unslick")
            },
            onOrientationchange: function(t) {
                l.hasClass("slick-initialized") && l.slick("setPosition")
            },
            onResponsiveChange: function(t, i) {
                var s = i.RESPONSIVE_NAME,
                    a = !1;
                l.find(".ma-g-c-items-feature__figure").removeAttr("style"), l.find(".ma-g-c-items-feature__text-wrap").removeAttr("style"), l.find(".ma-g-c-items-feature__disclaimer").removeAttr("style"), l.find(".s-marketing-cta").removeAttr("style"), l.find(".ma-g-c-items-feature").removeAttr("style"), l.find(".ma-g-c-items-feature__content").removeAttr("style"), "desktop" === s || "tablet" === s ? ("desktop" === s && (a = !0), s = "desktop", l.hasClass("slick-initialized") && (this.unSlick(), setTimeout(function() {
                    l.find("video").each(function(t) {
                        e(this).prop("muted", !0), e(this)[0].play()
                    })
                }, 150))) : "mobile" === s && (s = "mobile", !l.hasClass("slick-initialized") && l.hasClass("cm-g-columns-slick") && this.setSlick()), this.resData = s, a ? l.addClass("js-mobile-slick-match") : l.removeClass("js-mobile-slick-match")
            },
            onResizeHandler: function(t) {
                var e = this,
                    i = l.filter(".cm-g-columns-slick");
                "mobile" == e.resData && (i.find(".cm-columns__item").addClass("is-item-active is-item-visible"), i.parent().find(".s-btn-encased").css("display", "none"), setTimeout(function() {
                    e.setSlickHeightMatch()
                }, 600))
            },
            setAutoSlide: function() {
                if (this.slickOpts.autoSlideOpts.autoSlide) {
                    if (l.find(".slick-dots").length && !l.find(".slick-dots-autoplay").length) {
                        var t = "";
                        t += '<li class="slick-dots-autoplay">', t += '<button class="s-autoplay-pause">' + c.pause + "</button>", t += "</li>", l.find(".slick-dots").append(e(t)), l.find(".slick-dots-autoplay").off("click.cmColumnCarousel").on("click.cmColumnCarousel", function(t) {
                            var i = e(this).find("> button");
                            e(this).find("> button").hasClass("s-autoplay-pause") ? (i.removeClass("s-autoplay-pause"), i.addClass("s-autoplay-play").text(c.play), l.slick("slickPause"), i.attr({
                                "data-omni": "rolling:index_play",
                                "ga-ac": "rolling:index_play"
                            })) : (i.removeClass("s-autoplay-play"), i.addClass("s-autoplay-pause").text(c.pause), l.slick("slickPlay"), i.attr({
                                "data-omni": "rolling:index_stop",
                                "ga-ac": "rolling:index_stop"
                            }))
                        })
                    }
                    this.setPlayPauseTagging()
                }
            },
            onSlickAfterChange: function(t, e, i, s) {
                var a = l.find(".slick-track").find(".slick-active"),
                    n = a.find(this.opts.slickInnerCTA),
                    o = l.find(".slick-dots").find("li").not(".slick-dots-autoplay").index(l.find(".slick-dots").find(".slick-active"));
                n.length && n.attr({
                    "ga-ac": "rolling:index_" + (o + 1)
                }), this.setSlickHeightMatch()
            },
            setSlickHeightMatch: function(t) {
                if (!(this.slickOpts.mobile.slidesToShow < 2)) {
                    var i = l.find(".slick-active"),
                        s = this.slickOpts.mobile.slidesToShow;
                    if (i = l.find(".slick-active").filter(function(t) {
                            return 1 === e(this).find(".s-marketing-cta").length
                        }), 0 !== i.length) {
                        i.find(".ma-g-c-items-feature__figure").removeAttr("style"), i.find(".ma-g-c-items-feature__text-wrap").removeAttr("style"), i.find(".ma-g-c-items-feature__disclaimer").removeAttr("style"), i.find(".s-marketing-cta").removeAttr("style"), i.find(".ma-g-c-items-feature__content").removeAttr("style"), i.find(".ma-g-c-items-feature").removeAttr("style");
                        for (var a = 0, n = 0, o = 0, c = 0, r = 0, m = 0, u = [], f = [], d = [], g = [], h = [], p = [], k = 0; s > k; k++) {
                            var _ = i.eq(k).find(".ma-g-c-items-feature__figure").height(),
                                v = i.eq(k).find(".ma-g-c-items-feature__text-wrap").height(),
                                y = i.eq(k).find(".ma-g-c-items-feature__disclaimer").height(),
                                C = i.eq(k).find(".s-marketing-cta").height(),
                                S = i.eq(k).find(".ma-g-c-items-feature__content").height();
                            u.push(_), f.push(v), d.push(y), g.push(C), h.push(S)
                        }
                        a = Math.max.apply(null, u), n = Math.max.apply(null, f), o = Math.max.apply(null, d), c = Math.max.apply(null, g), r = Math.max.apply(null, h);
                        for (var b = 0; s > b; b++) i.eq(b).find(".ma-g-c-items-feature__figure").css("height", a), i.eq(b).find(".ma-g-c-items-feature__text-wrap").css("height", n), i.eq(b).find(".ma-g-c-items-feature__disclaimer").css("height", o), i.eq(b).find(".s-marketing-cta").css("height", c);
                        for (var k = 0; s > k; k++) {
                            var T = i.eq(k).find(".ma-g-c-items-feature").height();
                            p.push(T)
                        }
                        m = Math.max.apply(null, p);
                        for (var b = 0; s > b; b++) i.eq(b).find(".ma-g-c-items-feature").css("height", m);
                        setTimeout(function() {
                            l.slick("setPosition")
                        }, 50)
                    }
                }
            },
            getColumnsNum: function() {
                for (var t = l.closest(".cm-columns").attr("class").split(" "), e = t.length, i = 0, s = "", a = 0; e > a; a++)
                    if (s = t[a].replace(/[0-9]/g, ""), "cm-columns--columns" === s) {
                        i = t[a].replace(/[^0-9]/g, "");
                        break
                    }
                return i
            },
            setSlickDotsTagging: function() {
                if (l.find(".slick-dots").length)
                    for (var t = l.find(".slick-dots").find('li:not(".slick-dots-autoplay")'), e = 0; e < t.length; e++) {
                        var i = t.eq(e).find("button");
                        i.attr({
                            "data-omni-type": "microsite_pcontentinter",
                            "data-omni": "rolling:index_" + (e + 1),
                            "ga-ca": this.pageTrack,
                            "ga-ac": "rolling:index_" + (e + 1)
                        })
                    }
            },
            setSlickCtaTagging: function() {
                var t = l.find(".slick-slide").not(".slick-cloned").length,
                    e = l.find(".cm-columns__item").not(".slick-cloned"),
                    i = l.find(".slick-cloned"),
                    s = i.length;
                if (l.find(".slick-dots").length && e) {
                    for (var a = l.slick("slickGetOption", "slidesToShow"), n = Math.ceil(t / a), o = 0; n > o; o++)
                        for (var c = 0; a > c; c++) {
                            var r = o * a + c;
                            if (e.eq(r).length) {
                                var m = e.eq(r).find(this.opts.slickInnerCTA);
                                m.length && m.attr({
                                    "ga-ac": "rolling:index_" + (o + 1)
                                })
                            }
                        }
                    if (s)
                        for (var u = ["ga-ac"], f = u.length, c = 0; s > c; c++)
                            for (var d = i.eq(c), g = d.data("slick-index"), h = d.find(this.opts.slickInnerCTA), p = g + (0 > g ? t : -t), k = l.find("[data-slick-index = " + p + "]").find(this.opts.slickInnerCTA), _ = 0; f > _; _++) {
                                var v = k.attr(u[_]);
                                h.attr(u[_], v)
                            }
                }
            },
            setSlickArrowTagging: function() {
                var t = l.find(".slick-prev"),
                    i = l.find(".slick-next");
                t.attr({
                    "data-omni-type": "microsite_pcontentinter",
                    "ga-ca": this.pageTrack
                }), i.attr({
                    "data-omni-type": "microsite_pcontentinter",
                    "ga-ca": this.pageTrack
                }), e("html").hasClass("rtl") ? (t.attr({
                    "data-omni": "rolling:right arrow",
                    "ga-ac": "rolling:right arrow"
                }), i.attr({
                    "data-omni": "rolling:left arrow",
                    "ga-ac": "rolling:left arrow"
                })) : (t.attr({
                    "data-omni": "rolling:left arrow",
                    "ga-ac": "rolling:left arrow"
                }), i.attr({
                    "data-omni": "rolling:right arrow",
                    "ga-ac": "rolling:right arrow"
                }))
            },
            setPlayPauseTagging: function() {
                var t = l.find(".slick-dots-autoplay").find("button");
                t.length && t.attr({
                    "data-omni-type": "microsite_pcontentinter",
                    "ga-ca": this.pageTrack,
                    "data-omni": "rolling:index_stop",
                    "ga-ac": "rolling:index_stop"
                })
            }
        }
    }, n.cmColumnsCarousel = function() {
        var i = {
                wrapper: ".js-slick-cm-columns",
                tabTextDepthBtn: ".cl-tab-text__list .cl-tab-text__item"
            },
            a = [];
        return {
            init: function(t, o) {
                this.opts = s.def(i, o || {}), this.wrapper = e(this.opts.wrapper), this.wrapper.each(function(t) {
                    var i = new n.cmColumnsCarouselImple;
                    e(this).data("slick-opt") && (i.init(e(this)), a.push(i))
                }), this.setDepth1Reset()
            },
            getCmCoulmnsCarouselObj: function(t) {
                return a[t]
            },
            setDepth1Reset: function() {
                this.tabTextDepthBtn = e(this.opts.tabTextDepthBtn), this.tabTextDepthBtn.off("click.cmColumnCarousel").on("click.cmColumnCarousel", e.proxy(this.tabTextDepthBtnHandler, this))
            },
            tabTextDepthBtnHandler: function(i) {
                setTimeout(function() {
                    e(t).trigger("resize.cmColumnCarousel")
                }, 150)
            }
        }
    }(), n.cmColumnsSeeMore = function() {
        var t = {
                useSeeMore: "s-use-seemore",
                component: ".cm-columns",
                listItems: ".cm-columns__item",
                moreBtn: ".cm-columns__cta-wrap .s-btn-encased",
                itemVisible: "is-item-visible",
                itemActive: "is-item-active",
                heightMatch: {
                    hasComponent: ["cm-columns--separation-line", "ma-g-items-feature"],
                    matchElements: [".cm-columns__item", ".ma-g-c-items-feature", ".ma-g-c-items-feature__figure", ".ma-g-c-items-feature__text-wrap", ".s-marketing-cta", ".ma-g-c-items-feature__disclaimer"]
                }
            },
            i = {
                itemWrap: ".cm-columns__inner",
                slickObj: ".cm-g-columns-slick",
                items: ".cm-columns__item"
            },
            s = e(t.component),
            a = (e("body"), function(e, s) {
                if (e.hasClass(t.useSeeMore) && s) {
                    var a = e.find(i.itemWrap).filter(i.slickObj);
                    a.find(i.items).addClass(t.itemActive + " " + t.itemVisible), a.parent().find(t.moreBtn).css("display", "none")
                }
            }),
            n = function(e, s) {
                setTimeout(function() {
                    e.hasClass(t.useSeeMore) && !s && e.find(i.items + ":not(:visible)").outerHeight("")
                }, 2e3)
            },
            o = function() {
                s.length && (t.beforeFunc = a, t.afterFunc = n, s.listSeeMore(t))
            };
        return {
            init: o
        }
    }(), e(function() {
        e(t).on("load", function() {
            n.cmColumnsCarousel.init(e("body")), n.cmColumnsSeeMore.init()
        })
    })
}(window, window.jQuery);
! function(t) {
    "use strict";

    function e() {}

    function r() {
        try {
            return document.activeElement
        } catch (t) {}
    }

    function a(t, e) {
        for (var r = 0, a = t.length; a > r; r++)
            if (t[r] === e) return !0;
        return !1
    }

    function n(t, e, r) {
        return t.addEventListener ? t.addEventListener(e, r, !1) : t.attachEvent ? t.attachEvent("on" + e, r) : void 0
    }

    function u(t, e) {
        var r;
        t.createTextRange ? (r = t.createTextRange(), r.move("character", e), r.select()) : t.selectionStart && (t.focus(), t.setSelectionRange(e, e))
    }

    function i(t, e) {
        try {
            return t.type = e, !0
        } catch (r) {
            return !1
        }
    }

    function l(t, e) {
        if (t && t.getAttribute(S)) e(t);
        else
            for (var r, a = t ? t.getElementsByTagName("input") : z, n = t ? t.getElementsByTagName("textarea") : F, u = a ? a.length : 0, i = n ? n.length : 0, l = u + i, o = 0; l > o; o++) r = u > o ? a[o] : n[o - u], e(r)
    }

    function o(t) {
        l(t, s)
    }

    function c(t) {
        l(t, d)
    }

    function s(t, e) {
        var r = !!e && t.value !== e,
            a = t.value === t.getAttribute(S);
        if ((r || a) && "true" === t.getAttribute(L)) {
            t.removeAttribute(L), t.value = t.value.replace(t.getAttribute(S), ""), t.className = t.className.replace(B, "");
            var n = t.getAttribute(P);
            parseInt(n, 10) >= 0 && (t.setAttribute("maxLength", n), t.removeAttribute(P));
            var u = t.getAttribute(k);
            return u && (t.type = u), !0
        }
        return !1
    }

    function d(t) {
        var e = t.getAttribute(S);
        if ("" === t.value && e) {
            t.setAttribute(L, "true"), t.value = e, t.className += " " + w;
            var r = t.getAttribute(P);
            r || (t.setAttribute(P, t.maxLength), t.removeAttribute("maxLength"));
            var a = t.getAttribute(k);
            return a ? t.type = "text" : "password" === t.type && i(t, "text") && t.setAttribute(k, "password"), !0
        }
        return !1
    }

    function v(t) {
        return function() {
            G && t.value === t.getAttribute(S) && "true" === t.getAttribute(L) ? u(t, 0) : s(t)
        }
    }

    function g(t) {
        return function() {
            d(t)
        }
    }

    function p(t) {
        return function() {
            o(t)
        }
    }

    function f(t) {
        return function(e) {
            return x = t.value, "true" === t.getAttribute(L) && x === t.getAttribute(S) && a(N, e.keyCode) ? (e.preventDefault && e.preventDefault(), !1) : void 0
        }
    }

    function h(t) {
        return function() {
            s(t, x), "" === t.value && (t.blur(), u(t, 0))
        }
    }

    function b(t) {
        return function() {
            t === r() && t.value === t.getAttribute(S) && "true" === t.getAttribute(L) && u(t, 0)
        }
    }

    function m(t) {
        var e = t.form;
        e && "string" == typeof e && (e = document.getElementById(e), e.getAttribute(I) || (n(e, "submit", p(e)), e.setAttribute(I, "true"))), n(t, "focus", v(t)), n(t, "blur", g(t)), G && (n(t, "keydown", f(t)), n(t, "keyup", h(t)), n(t, "click", b(t))), t.setAttribute(R, "true"), t.setAttribute(S, M), (G || t !== r()) && d(t)
    }
    var A = document.createElement("input"),
        y = void 0 !== A.placeholder;
    if (t.Placeholders = {
            nativeSupport: y,
            disable: y ? e : o,
            enable: y ? e : c
        }, !y) {
        var x, E = ["text", "search", "url", "tel", "email", "password", "number", "textarea"],
            N = [27, 33, 34, 35, 36, 37, 38, 39, 40, 8, 46],
            T = "#ccc",
            w = "placeholdersjs",
            B = new RegExp("(?:^|\\s)" + w + "(?!\\S)"),
            S = "data-placeholder-value",
            L = "data-placeholder-active",
            k = "data-placeholder-type",
            I = "data-placeholder-submit",
            R = "data-placeholder-bound",
            q = "data-placeholder-focus",
            C = "data-placeholder-live",
            P = "data-placeholder-maxlength",
            V = 100,
            j = document.getElementsByTagName("head")[0],
            D = document.documentElement,
            Q = t.Placeholders,
            z = document.getElementsByTagName("input"),
            F = document.getElementsByTagName("textarea"),
            G = "false" === D.getAttribute(q),
            H = "false" !== D.getAttribute(C),
            J = document.createElement("style");
        J.type = "text/css";
        var K = document.createTextNode("." + w + " {color:" + T + ";}");
        J.styleSheet ? J.styleSheet.cssText = K.nodeValue : J.appendChild(K), j.insertBefore(J, j.firstChild);
        for (var M, O, U = 0, W = z.length + F.length; W > U; U++) O = U < z.length ? z[U] : F[U - z.length], M = O.attributes.placeholder, M && (M = M.nodeValue, M && a(E, O.type) && m(O));
        var X = setInterval(function() {
            for (var t = 0, e = z.length + F.length; e > t; t++) O = t < z.length ? z[t] : F[t - z.length], M = O.attributes.placeholder, M ? (M = M.nodeValue, M && a(E, O.type) && (O.getAttribute(R) || m(O), (M !== O.getAttribute(S) || "password" === O.type && !O.getAttribute(k)) && ("password" === O.type && !O.getAttribute(k) && i(O, "text") && O.setAttribute(k, "password"), O.value === O.getAttribute(S) && (O.value = M), O.setAttribute(S, M)))) : O.getAttribute(L) && (s(O), O.removeAttribute(S));
            H || clearInterval(X)
        }, V);
        n(t, "beforeunload", function() {
            Q.disable()
        })
    }
}(this),
function(t, e) {
    "use strict";
    var r = t.fn.val,
        a = t.fn.prop;
    e.Placeholders.nativeSupport || (t.fn.val = function(t) {
        var e = r.apply(this, arguments),
            a = this.eq(0).data("placeholder-value");
        return void 0 === t && this.eq(0).data("placeholder-active") && e === a ? "" : e
    }, t.fn.prop = function(t, e) {
        return void 0 === e && this.eq(0).data("placeholder-active") && "value" === t ? "" : a.apply(this, arguments)
    })
}(jQuery, this);
! function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function(t, s) {
    "use strict";
    var i = "drilldown",
        e = "data-next-parent",
        n = {
            rtl: t("html").hasClass("rtl"),
            event: "click",
            selector: "a",
            speed: 100,
            cssClass: {
                container: i + "-container",
                root: i + "-root",
                sub: i + "-sub",
                back: i + "-back"
            }
        },
        o = function() {
            function o(s, e) {
                var o = this;
                this._name = i, this._defaults = n, this.element = s, this.$element = t(s), this.options = t.extend({}, n, e), this._history = [], this._css = this.options.rtl ? {
                    "float": "right",
                    width: null
                } : {
                    "float": "left",
                    width: null
                }, this.$container = this.$element.find("." + this.options.cssClass.container), this.$element.on(this.options.event + "." + i, this.options.selector, function(s) {
                    a.call(o, s, t(this))
                })
            }

            function a(t, s) {
                var i = s.nextAll("." + this.options.cssClass.sub),
                    e = !0;
                s.parent().hasClass("gb-gnb--type-inner-title") && i.find("> ul").addClass("gb-gnb--type-inner-title"), s.parent().hasClass("gb-gnb--type-open") && i.find("> ul").addClass("gb-gnb--type-open"), i.length ? r.call(this, i) : s.closest("." + this.options.cssClass.back).length ? h.call(this) : e = !1, e && "A" === s.prop("tagName") && t.preventDefault()
            }

            function r(i, n) {
                var o = n && n.speed !== s ? n.speed : this.options.speed;
                if (i.length) {
                    if (this._css.width = this.$element.outerWidth(), this.$container.width(2 * this._css.width), i.parent().attr(e, !0), i = i.removeClass(this.options.cssClass.sub).addClass(this.options.cssClass.root), this.$container.append(i), this.options.isDelayAniamte) {
                        if (!i.length) return;
                        var a = i.find(".s-depth3-link, .s-depth2-link"),
                            r = this.options.rtl;
                        a.clearQueue(), a.stop(), a.css(r ? {
                            opacity: 0,
                            "margin-right": 25
                        } : {
                            opacity: 0,
                            "margin-left": 25
                        }), a.each(function(s) {
                            var i = t(this);
                            i.delay(200 + 60 * s).queue(function() {
                                r ? i.stop().animate({
                                    opacity: 1,
                                    "margin-right": 0
                                }, {
                                    duration: 150,
                                    easing: "easeOutSine",
                                    complete: function() {
                                        i.removeAttr("style")
                                    }
                                }) : i.stop().animate({
                                    opacity: 1,
                                    "margin-left": 0
                                }, {
                                    duration: 150,
                                    easing: "easeOutSine",
                                    complete: function() {
                                        i.removeAttr("style")
                                    }
                                })
                            })
                        })
                    }
                    this.options.rtl ? l.call(this, {
                        marginRight: -1 * this._css.width,
                        speed: o
                    }, function() {
                        var s = i.prev();
                        this._history.push(s.detach()), c.call(this, i), t("body").trigger("DRILLDOWN_ANIMATE_CHANGE"), i.children().first().hasClass(this.options.cssClass.back) ? i.find("." + this.options.cssClass.back + " a").focus() : i.children().children().children().eq(0).focus()
                    }.bind(this)) : l.call(this, {
                        marginLeft: -1 * this._css.width,
                        speed: o
                    }, function() {
                        var s = i.prev();
                        this._history.push(s.detach()), c.call(this, i), t("body").trigger("DRILLDOWN_ANIMATE_CHANGE"), i.children().first().hasClass(this.options.cssClass.back) ? i.find("." + this.options.cssClass.back + " a").focus() : i.children().children().children().eq(0).focus()
                    }.bind(this))
                }
            }

            function h(i) {
                var n = i && i.speed !== s ? i.speed : this.options.speed,
                    o = this._history.pop();
                if (this._css.width = this.$element.outerWidth(), this.$container.width(2 * this._css.width), this.$container.prepend(o), this.options.isDelayAniamte) {
                    if (!o.length) return;
                    var a = o.find(".s-depth1-wrap > li > a, .s-depth1-wrap > li > .s-mymenu_new"),
                        r = this.options.rtl;
                    o.find(".s-depth1-wrap").length && (a = a.filter(function() {
                        return t(this).parent().is(":visible")
                    })), a.clearQueue(), a.stop(), a.css(r ? {
                        opacity: 0,
                        "margin-right": 25
                    } : {
                        opacity: 0,
                        "margin-left": 25
                    }), a.each(function(s) {
                        var i = t(this);
                        i.delay(200 + 60 * s).queue(function() {
                            r ? i.stop().animate({
                                opacity: 1,
                                "margin-right": 0
                            }, {
                                duration: 150,
                                easing: "easeOutSine",
                                complete: function() {
                                    i.removeAttr("style")
                                }
                            }) : i.stop().animate({
                                opacity: 1,
                                "margin-left": 0
                            }, {
                                duration: 150,
                                easing: "easeOutSine",
                                complete: function() {
                                    i.removeAttr("style")
                                }
                            })
                        })
                    })
                }
                this.options.rtl ? l.call(this, {
                    marginRight: 0,
                    speed: n
                }, function() {
                    var s = o.next();
                    s.addClass(this.options.cssClass.sub).removeClass(this.options.cssClass.root), this.$container.find("[" + e + "]").last().removeAttr(e).append(s), c.call(this, o), t("body").trigger("DRILLDOWN_ANIMATE_CHANGE"), o.children().first().hasClass(this.options.cssClass.back) ? o.find("." + this.options.cssClass.back + " :first-child a").focus() : o.children().children().children().eq(0).focus()
                }.bind(this)) : l.call(this, {
                    marginLeft: 0,
                    speed: n
                }, function() {
                    var s = o.next();
                    s.addClass(this.options.cssClass.sub).removeClass(this.options.cssClass.root), this.$container.find("[" + e + "]").last().removeAttr(e).append(s), c.call(this, o), t("body").trigger("DRILLDOWN_ANIMATE_CHANGE"), o.children().first().hasClass(this.options.cssClass.back) ? o.find("." + this.options.cssClass.back + " a").focus() : o.children().children().children().eq(0).focus()
                }.bind(this))
            }

            function l(t, s) {
                var i = this.$container.children("." + this.options.cssClass.root);
                i.css(this._css), this.options.rtl ? i.first().animate({
                    marginRight: t.marginRight
                }, t.speed, s) : i.first().animate({
                    marginLeft: t.marginLeft
                }, t.speed, s)
            }

            function c(t) {
                t.css(this.options.rtl ? {
                    "float": "",
                    width: "",
                    marginRight: ""
                } : {
                    "float": "",
                    width: "",
                    marginLeft: ""
                }), this.$container.css("width", "")
            }
            return o.prototype = {
                destroy: function() {
                    this.reset(), this.$element.off(this.options.event + "." + i, this.options.selector)
                },
                reset: function() {
                    var t;
                    for (t = this._history.length; t > 0; t--) h.call(this, {
                        speed: 0
                    });
                    this._history = [], this._css = this.options.rtl ? {
                        "float": "right",
                        width: null
                    } : {
                        "float": "left",
                        width: null
                    }
                }
            }, o
        }();
    t.fn[i] = function(s) {
        return this.each(function() {
            var e = t.data(this, i),
                n = s;
            e ? "string" == typeof n && ("destroy" === n && t.removeData(this, i), "function" == typeof e[n] && e[n]()) : t.data(this, i, new o(this, s))
        })
    }
});
jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(n, e, t, u, a) {
        return jQuery.easing[jQuery.easing.def](n, e, t, u, a)
    },
    easeInQuad: function(n, e, t, u, a) {
        return u * (e /= a) * e + t
    },
    easeOutQuad: function(n, e, t, u, a) {
        return -u * (e /= a) * (e - 2) + t
    },
    easeInOutQuad: function(n, e, t, u, a) {
        return (e /= a / 2) < 1 ? u / 2 * e * e + t : -u / 2 * (--e * (e - 2) - 1) + t
    },
    easeInCubic: function(n, e, t, u, a) {
        return u * (e /= a) * e * e + t
    },
    easeOutCubic: function(n, e, t, u, a) {
        return u * ((e = e / a - 1) * e * e + 1) + t
    },
    easeInOutCubic: function(n, e, t, u, a) {
        return (e /= a / 2) < 1 ? u / 2 * e * e * e + t : u / 2 * ((e -= 2) * e * e + 2) + t
    },
    easeInQuart: function(n, e, t, u, a) {
        return u * (e /= a) * e * e * e + t
    },
    easeOutQuart: function(n, e, t, u, a) {
        return -u * ((e = e / a - 1) * e * e * e - 1) + t
    },
    easeInOutQuart: function(n, e, t, u, a) {
        return (e /= a / 2) < 1 ? u / 2 * e * e * e * e + t : -u / 2 * ((e -= 2) * e * e * e - 2) + t
    },
    easeInQuint: function(n, e, t, u, a) {
        return u * (e /= a) * e * e * e * e + t
    },
    easeOutQuint: function(n, e, t, u, a) {
        return u * ((e = e / a - 1) * e * e * e * e + 1) + t
    },
    easeInOutQuint: function(n, e, t, u, a) {
        return (e /= a / 2) < 1 ? u / 2 * e * e * e * e * e + t : u / 2 * ((e -= 2) * e * e * e * e + 2) + t
    },
    easeInSine: function(n, e, t, u, a) {
        return -u * Math.cos(e / a * (Math.PI / 2)) + u + t
    },
    easeOutSine: function(n, e, t, u, a) {
        return u * Math.sin(e / a * (Math.PI / 2)) + t
    },
    easeInOutSine: function(n, e, t, u, a) {
        return -u / 2 * (Math.cos(Math.PI * e / a) - 1) + t
    },
    easeInExpo: function(n, e, t, u, a) {
        return 0 == e ? t : u * Math.pow(2, 10 * (e / a - 1)) + t
    },
    easeOutExpo: function(n, e, t, u, a) {
        return e == a ? t + u : u * (-Math.pow(2, -10 * e / a) + 1) + t
    },
    easeInOutExpo: function(n, e, t, u, a) {
        return 0 == e ? t : e == a ? t + u : (e /= a / 2) < 1 ? u / 2 * Math.pow(2, 10 * (e - 1)) + t : u / 2 * (-Math.pow(2, -10 * --e) + 2) + t
    },
    easeInCirc: function(n, e, t, u, a) {
        return -u * (Math.sqrt(1 - (e /= a) * e) - 1) + t
    },
    easeOutCirc: function(n, e, t, u, a) {
        return u * Math.sqrt(1 - (e = e / a - 1) * e) + t
    },
    easeInOutCirc: function(n, e, t, u, a) {
        return (e /= a / 2) < 1 ? -u / 2 * (Math.sqrt(1 - e * e) - 1) + t : u / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + t
    },
    easeInElastic: function(n, e, t, u, a) {
        var r = 1.70158,
            i = 0,
            s = u;
        if (0 == e) return t;
        if (1 == (e /= a)) return t + u;
        if (i || (i = .3 * a), s < Math.abs(u)) {
            s = u;
            var r = i / 4
        } else var r = i / (2 * Math.PI) * Math.asin(u / s);
        return -(s * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * a - r) * Math.PI / i)) + t
    },
    easeOutElastic: function(n, e, t, u, a) {
        var r = 1.70158,
            i = 0,
            s = u;
        if (0 == e) return t;
        if (1 == (e /= a)) return t + u;
        if (i || (i = .3 * a), s < Math.abs(u)) {
            s = u;
            var r = i / 4
        } else var r = i / (2 * Math.PI) * Math.asin(u / s);
        return s * Math.pow(2, -10 * e) * Math.sin(2 * (e * a - r) * Math.PI / i) + u + t
    },
    easeInOutElastic: function(n, e, t, u, a) {
        var r = 1.70158,
            i = 0,
            s = u;
        if (0 == e) return t;
        if (2 == (e /= a / 2)) return t + u;
        if (i || (i = .3 * a * 1.5), s < Math.abs(u)) {
            s = u;
            var r = i / 4
        } else var r = i / (2 * Math.PI) * Math.asin(u / s);
        return 1 > e ? -.5 * s * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * a - r) * Math.PI / i) + t : s * Math.pow(2, -10 * (e -= 1)) * Math.sin(2 * (e * a - r) * Math.PI / i) * .5 + u + t
    },
    easeInBack: function(n, e, t, u, a, r) {
        return void 0 == r && (r = 1.70158), u * (e /= a) * e * ((r + 1) * e - r) + t
    },
    easeOutBack: function(n, e, t, u, a, r) {
        return void 0 == r && (r = 1.70158), u * ((e = e / a - 1) * e * ((r + 1) * e + r) + 1) + t
    },
    easeInOutBack: function(n, e, t, u, a, r) {
        return void 0 == r && (r = 1.70158), (e /= a / 2) < 1 ? u / 2 * e * e * (((r *= 1.525) + 1) * e - r) + t : u / 2 * ((e -= 2) * e * (((r *= 1.525) + 1) * e + r) + 2) + t
    },
    easeInBounce: function(n, e, t, u, a) {
        return u - jQuery.easing.easeOutBounce(n, a - e, 0, u, a) + t
    },
    easeOutBounce: function(n, e, t, u, a) {
        return (e /= a) < 1 / 2.75 ? 7.5625 * u * e * e + t : 2 / 2.75 > e ? u * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + t : 2.5 / 2.75 > e ? u * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + t : u * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + t
    },
    easeInOutBounce: function(n, e, t, u, a) {
        return a / 2 > e ? .5 * jQuery.easing.easeInBounce(n, 2 * e, 0, u, a) + t : .5 * jQuery.easing.easeOutBounce(n, 2 * e - a, 0, u, a) + .5 * u + t
    }
});

function popup_open(e, s, t) {
    var a = window.screenX || window.screenLeft || 0,
        r = window.screenY || window.screenTop || 0,
        n = a + (window.outerWidth - s) / 2,
        o = r + (window.outerHeight - t) / 2;
    window.open(e, "open_popup", "width=" + s + ",height=" + t + ",left=" + n + ",top=" + o)
}! function(e, s, t) {
    "use strict";
    "undefined" == typeof e.smg && (e.smg = {}), "undefined" == typeof e.smg.aem && (e.smg.aem = {}), "undefined" == typeof e.smg.aem.common && (e.smg.aem.common = {});
    var a = e.smg.aem.common;
    a.siteia = function() {
        var a = function() {
            var a = t(".js-depth1-link");
            a.on("keydown", function(e) {
                13 == e.keyCode && e.preventDefault()
            }), a.on("click", function(a) {
                a.preventDefault();
                var r = t(this).attr("data-link-info");
                if (void 0 != r) {
                    var n = r.split("^");
                    if (n.length > 1) {
                        var o = n[0],
                            i = n[1],
                            w = "";
                        if (n.length > 2 && (w = n[2]), "true" == o && void 0 != i && "" != i)
                            if ("_blank" == w) {
                                var m = e.open("about:blank");
                                m.location.href = i
                            } else s.location.href = i
                    }
                }
            })
        };
        return {
            init: function() {
                a()
            }
        }
    }()
}(window, document, $), $(document).ready(function() {
    if ("es" === $("input[name=siteCode]").val()) {
        var e = !1,
            s = ["/es/smartphones/galaxy-s8/", "/es/smartphones/galaxy-s8/?jumpto=shop", "/es/smartphones/galaxy-s8-plus-dual-sim/SM-G955FZVDPHE", "/es/smartphones/galaxy-s8-plus-dual-sim/SM-G955FZKDPHE", "/es/mobile-accessories/s8-accessories/", "/es/tablets/galaxy-tab-s3-4g/SM-T825NZKAPHE", "/es/tablets/galaxy-tab-s3-4g/SM-T825NZSAPHE", "/es/tablets/galaxy-tab-s3-wifi/SM-T820NZKAPHE", "/es/tablets/galaxy-tab-s3-wifi/SM-T820NZKAPHE", "/es/tvs/qled/overview/", "/es/tvs/qledtv-q7c/QE49Q7CAMTXXC", "/es/tvs/qledtv-q7c/QE55Q7CAMTXXC", "/es/tvs/qledtv-q7c/QE65Q7CAMTXXC", "/es/tvs/qledtv-q7f/QE49Q7FAMTXXC", "/es/tvs/qledtv-q7f/QE55Q7FAMTXXC", "/es/tvs/qledtv-q7f/QE65Q7FAMTXXC", "/es/tvs/qledtv-q7f/QE75Q7FAMTXXC", "/es/tvs/qledtv-q8c/QE55Q8CAMTXXC", "/es/tvs/qledtv-q8c/QE65Q8CAMTXXC", "/es/tvs/qledtv-q8c/QE75Q8CAMTXXC", "/es/frametv/design/", "/es/tvs/the-frame-ls003/UE55LS003AUXXC", "/es/tvs/the-frame-ls003/UE65LS003AUXXC", "/es/addwash/", "/es/washing-machines/washer-addwash-ww80k5210/WW80K5210XWEC", "/es/washing-machines/washer-ww90k5410ww/WW90K5410WWEC", "/es/washing-machines/washer-ww80k5410ww/WW80K5410WWEC", "/es/washing-machines/washer-ww70k5410ww/WW70K5410WWEC", "/es/washing-machines/washer-ww90k6414qw/WW90K6414QWEC", "/es/washing-machines/washer-ww80k6414qx/WW80K6414QXEC", "/es/washing-machines/washer-ww12k8402ow/WW12K8412OWEC", "/es/refrigerators/twin-cooling/", "/es/refrigerators/bottom-mount-freezer-rb37j5029sa/RB37J5029SAEF", "/es/refrigerators/bottom-mount-freezer-rb37j5029ww/RB37J5029WWEF", "/es/refrigerators/bottom-mount-freezer-rb41j7799s4/RB41J7799S4EF", "/es/refrigerators/top-mount-freezer-rt29k5030ww/RT29K5030WWES", "/es/refrigerators/top-mount-freezer-rt32k5035ww/RT32K5035WWES", "/es/refrigerators/top-mount-freezer-rt32k5035ww/RT32K5035WWES", "/es/refrigerators/top-mount-freezer-rt32k5035ww/RT32K5035WWES", "/es/refrigerators/top-mount-freezer-rt32k5035ww/RT32K5035WWES", "/es/refrigerators/top-mount-freezer-rt32k5035ww/RT32K5035WWES", "/es/smartphones/galaxy-note8/", "/es/smartphones/galaxy-note8/design/", "/es/smartphones/galaxy-note8/s-pen/", "/es/smartphones/galaxy-note8/camera/", "/es/smartphones/galaxy-note8/performance/", "/es/smartphones/galaxy-note8/phone-plus/", "/es/smartphones/galaxy-note8/accessories/", "/es/smartphones/galaxy-note8/shop/"];
        if ($.each(s, function(t) {
                return -1 != digitalData.page.pageInfo.pageURL.indexOf(s[t]) ? (e = !0, !1) : void 0
            }), e) {
            var t = document.createElement("script");
            t.type = "text/javascript", t.src = "https://s.tagove.com/a-09a05/init.js", t.async = !0, $("head").append(t), t.src = "https://s.tagove.com/main.js", t.async = !0, $("head").append(t)
        }
    }
});
! function(e, t) {
    "use strict";
    "undefined" == typeof e.smg && (e.smg = {}), "undefined" == typeof e.smg.aem && (e.smg.aem = {}), "undefined" == typeof e.smg.aem.components && (e.smg.aem.components = {}), "undefined" == typeof e.smg.aem.components.common && (e.smg.aem.components.common = {});
    var n = (e.smg.aem.varStatic, e.smg.aem.util, e.smg.aem.customEvent, e.smg.aem.components.common),
        s = null,
        i = null;
    n.custompopup = function() {
        var e = {
            init: function() {
                this.opts(), this.setElements(), this.bindEventHandlers()
            },
            opts: function() {
                this.delay = 100
            },
            setElements: function() {
                this.menuWrap = t(".js-custom-pop-btn"), this.menuLayer = t(".js-custom-pop"), this.menuLayerTab = this.menuLayer.find(".cm-custom-popup__popup-area"), this.chkWrap = this.menuLayer.find(".cm-custom-popup__checkbox-wrap"), this.closeBtn = this.menuLayer.find(".js-custom-pop-close"), s = this.menuLayerTab.find(".cm-custom-popup__custom-area"), i = this.chkWrap.find("input")
            },
            bindEventHandlers: function() {
                this.menuWrapClickListener(), this.chkWrap.on("change", "input", t.proxy(this.onChangeChk, this))
            },
            onChangeChk: function(e) {
                var n = t(e.currentTarget);
                n.toggleClass("s-checked", n.prop("checked"))
            },
            menuWrapClickListener: function() {
                var e = this,
                    n = "";
                this.menuWrap.on("click", function(i) {
                    if (i.preventDefault(), n = t(this).attr("data-link-url"), t.cookies.get("shop-layer-display") + "" != "false") {
                        var o = t(this).parent().find(".custom-layer-content").html();
                        s.html(o);
                        var a = t(this).attr("data-layer-style");
                        void 0 != a && "" != a && s.parent().attr("style", a), e.menuLayer.is(":visible") ? e.offDisplay() : e.onDisplay()
                    } else document.location.href = n
                }), this.menuLayer.on("click", ".js-custom-pop-close", function(t) {
                    t.preventDefault(), e.offDisplay()
                }), this.menuLayer.on("click", ".cm-custom-popup__link", function(e) {
                    e.preventDefault();
                    var s = i.prop("checked");
                    if (s) {
                        var o = new Date;
                        o.setTime(o.getTime() + 7776e6), t.cookies.set("shop-layer-display", "false", {
                            expiresAt: o
                        })
                    }
                    document.location.href = n
                })
            },
            onLayer: function() {
                this.menuLayer.stop().show(), this.menuLayerTab.attr("tabIndex", 0).focus(), t(".s-layer-dimmed").show(), setTimeout(t.proxy(function() {
                    this.menuLayer.on("keydown keyup", t.proxy(function(e) {
                        "keydown" === e.type ? (16 === e.keyCode || 16 === e.which) && (this.keyShift = !0) : "keyup" === e.type && (16 === e.keyCode || 16 === e.which) && (this.keyShift = !1)
                    }, this)), this.menuLayerTab.on("clickoutside", t.proxy(function() {
                        this.closeBtn.trigger("click")
                    }, this)), this.menuLayerTab.on("focusoutside", t.proxy(function() {
                        this.keyShift ? this.closeBtn.focus() : this.menuLayerTab.focus()
                    }, this))
                }, this), 100)
            },
            offLayer: function(e) {
                e = e || this.delay, this.menuLayer.stop().fadeOut(e), this.menuWrap.focus(), t(".s-layer-dimmed").hide(), i.prop("checked", !1), i.toggleClass("s-checked", !1)
            },
            onDisplay: function() {
                this.onLayer()
            },
            offDisplay: function(e) {
                e = e || this.delay, this.menuLayerTab.off("keydown keyup clickoutside focusoutside"), this.offLayer(e)
            }
        };
        return {
            init: function() {
                e.init()
            }
        }
    }()
}(window, window.jQuery);
! function(e, t) {
    "use strict";
    "undefined" == typeof e.smg && (e.smg = {}), "undefined" == typeof e.smg.aem && (e.smg.aem = {}), "undefined" == typeof e.smg.aem.common && (e.smg.aem.common = {}); {
        var i = e.smg.aem.common,
            s = e.smg.aem.varStatic;
        e.smg.aem.customEvent
    }
    i.gnb = function() {
        var i, n = {
                body: "body",
                header: "#header",
                evt: {
                    connect: {},
                    responsiveMgr: {
                        responsiveChange: "responsiveChange"
                    }
                }
            },
            o = {
                init: function() {
                    this.orientationchangeListener()
                },
                orientationchangeListener: function() {
                    t(e).on("orientationchange", function(i) {
                        t(e).trigger("resize")
                    })
                }
            },
            r = {
                init: function() {
                    this.constants(), this.bindEvts(), this.defSetup()
                },
                constants: function() {
                    this.device = {
                        mobile: {
                            support: !1,
                            name: "mobile",
                            width: 767
                        },
                        tablet: {
                            support: !1,
                            name: "tablet",
                            width: 1279
                        },
                        gnb: {
                            support: !0,
                            name: "gnb",
                            width: 1024
                        },
                        desktop: {
                            support: !0,
                            name: "desktop"
                        }
                    }, this.evt = n.evt.responsiveMgr
                },
                bindEvts: function() {
                    this.resizeListener()
                },
                defSetup: function() {
                    this.responsiveChange()
                },
                resizeListener: function() {
                    var i = this;
                    t(e).on("resize", function() {
                        i.responsiveChange()
                    })
                },
                responsiveChange: function() {
                    var i, s = e.document,
                        o = e.innerWidth || s.documentElement.clientWidth || s.body.clientWidth;
                    i = o <= this.device.mobile.width ? this.device.mobile.name : !d && o <= this.device.gnb.width ? this.device.gnb.name : o <= this.device.tablet.width ? this.device.tablet.name : this.device.desktop.name;
                    var r = {
                        responsiveName: ""
                    };
                    this.responsiveName ? this.responsiveName !== i && (this.responsiveName = i, r.responsiveName = this.responsiveName, r.responsiveWidth = o, t(n.evt.connect).trigger(this.evt.responsiveChange, r)) : (this.responsiveName = i, r.responsiveName = this.responsiveName, r.responsiveWidth = o, t(n.evt.connect).trigger(this.evt.responsiveChange, r))
                }
            },
            a = t(n.header),
            h = !1,
            d = !1,
            l = !1,
            c = {
                init: function() {
                    this.constants(), this.setElmts(), this.bindEvts()
                },
                constants: function() {
                    this.delay = 100
                },
                setElmts: function() {
                    this.menus = a.find(".gb-gnb__drop-desktop").closest("li"), this.closeBtn = this.menus.find(".s-ico-close"), this.dropInners = t(".gb-gnb .s-col-featured").closest(".gb-gnb__drop-inner"), this.login = t(".gb-gnb__utility"), this.loginLayer = this.login.find(".gb-gnb__my-layer"), this.isGnbMain201807 = a.find(".gb-gnb-2018") ? !0 : !1
                },
                bindEvts: function() {
                    this.resizeListener(), this.responsiveListener(), this.menusActiveListener(), this.outsideAreaMouseleaveListener(), this.closeBtnClickListener()
                },
                resizeListener: function() {
                    t(e).on("resize", t.proxy(this.setFeaturedHeightAll, this))
                },
                responsiveListener: function() {
                    t(n.evt.connect).on(n.evt.responsiveMgr.responsiveChange, t.proxy(this.destroy, this))
                },
                menusActiveListener: function() {
                    var e, i = this;
                    this.menus.find(">.js-toggler").on("click", function(e) {
                        e.preventDefault()
                    }), this.menus.on("keyup", function(e) {
                        var t = e.keyCode || e.which,
                            s = a.find(".gb-gnb__drop-desktop:visible");
                        27 === t && (s.length && s.prev(".s-btn-toggler").focus(), i.menus.trigger("mouseleave"))
                    }), this.menus.on("mouseenter keydown", function(s) {
                        if (e = t(s.currentTarget), "keydown" === s.type) {
                            var n = s.keyCode || s.which;
                            if (13 !== n || 27 == n) return
                        }
                        if (i.loginLayer.is(":visible") && i.loginLayer.closest("li").trigger("clickoutside"), e.find(".gb-gnb__drop-desktop").is(":visible")) "keydown" === s.type && (i.offLayer(void 0, this.delay), i.offAria(e));
                        else {
                            var o = i.menus.find(".gb-gnb__drop-desktop").is(":visible") ? 1 : i.delay;
                            i.offLayer(void 0, o), i.onLayer(e, o), i.onAria(e), i.onFocusoutLayer(e, o)
                        }
                    })
                },
                onFocusoutLayer: function(e, t) {
                    var i = this,
                        s = e.find(".gb-gnb__drop-desktop");
                    s.off("focusin").on("focusin", function() {
                        s.off("focusoutside").on("focusoutside", function() {
                            s.off("focusoutside"), i.offLayer(void 0, t), e.find(".s-btn-toggler").attr("aria-selected", !1)
                        })
                    })
                },
                outsideAreaMouseleaveListener: function() {
                    var e = this;
                    this.menus.on("mouseleave", function(t) {
                        e.offLayer(), e.onAria()
                    })
                },
                closeBtnClickListener: function() {
                    var e = this;
                    this.closeBtn.on("click", function(i) {
                        e.offLayer(void 0, this.delay), e.offAria(), t(i.currentTarget).closest("li").find(".s-btn-toggler").focus()
                    })
                },
                onLayer: function(e, i) {
                    var s = this;
                    i = i || 1, e.find(".gb-gnb__drop-desktop").fadeIn({
                        duration: i,
                        complete: function() {
                            t(this).removeAttr("style").css("display", "block"), s.setFeaturedHeight(t(this)), s.isGnbMain201807 && s.setExploreMenuHeightMatch(t(this))
                        }
                    }), setTimeout(function() {
                        s.bindClickoutsideListener(e.closest("li"))
                    }, 50)
                },
                offLayer: function(e, i) {
                    var s = this;
                    i = i || 1;
                    var n = e ? e.closest("li").siblings() : this.menus;
                    n.find(".gb-gnb__drop-desktop").fadeOut({
                        duration: i,
                        complete: function() {
                            t(this).removeAttr("style").css("display", "none"), s.removeFeaturedHeight(t(this))
                        }
                    }), this.unbindClickoutsideListener()
                },
                onAria: function(e) {
                    this.menus.find(".js-toggler").attr("aria-selected", !1), e && e.closest("li").find(".js-toggler").attr("aria-selected", !0)
                },
                offAria: function() {
                    this.menus.find(".js-toggler").attr("aria-selected", !1)
                },
                bindClickoutsideListener: function(e) {
                    e.on("clickoutside", t.proxy(this.clickoutside, this))
                },
                unbindClickoutsideListener: function() {
                    this.menus.off("clickoutside", t.proxy(this.clickoutside, this))
                },
                clickoutside: function(e) {
                    this.offLayer(), this.offAria()
                },
                setFeaturedHeight: function(e) {
                    var t = e.find(".s-col-featured");
                    t.size() && (t.removeAttr("style"), t.css("height", t.closest(".gb-gnb__drop-inner").height()))
                },
                setFeaturedHeightAll: function() {
                    var e = this;
                    this.dropInners.filter(":visible").each(function() {
                        e.setFeaturedHeight(t(this))
                    })
                },
                removeFeaturedHeight: function(e) {
                    var t = e.find(".s-col-featured");
                    t.size() && t.removeAttr("style")
                },
                setExploreMenuHeightMatch: function(e) {
                    if (e.closest(".gb-gnb--type-inner-title").length) {
                        var t, i = e.find(".s-depth2-col"),
                            s = e.find(".s-depth2-wrap"),
                            n = [];
                        s.removeAttr("style");
                        for (var o = 0; o < i.length; o++)
                            for (var r = 0; r < s.length; r++) {
                                var a = i.eq(o).find(".s-depth2-wrap:first");
                                n.push(a.height())
                            }
                        t = Math.max.apply(null, n);
                        for (var h = 0; h < i.length; h++) {
                            var d = i.eq(h).find(".s-depth2-wrap:first");
                            d.css("height", t)
                        }
                    }
                },
                destroy: function() {
                    this.offLayer(), this.offAria()
                }
            },
            u = {
                init: function() {
                    this.setElmts(), this.bindEvts()
                },
                setElmts: function() {
                    this.menus = a.find(".gb-gnb__drop-desktop").closest("li"), this.search = a.find(".gb-gnb__search .gb-gnb__search-bar"), this.cart = a.find(".gb-gnb__cart .gb-gnb__cart-layer")
                },
                bindEvts: function() {
                    this.menusMouseenterListener()
                },
                menusMouseenterListener: function() {
                    var e = this;
                    this.menus.on("mouseenter", function(t) {
                        e.outersideTrigger()
                    })
                },
                outersideTrigger: function() {
                    (this.getSearchVisible() || this.getCartVisible()) && a.find(".gb-gnb__main").trigger("click")
                },
                getSearchVisible: function() {
                    return this.search.is(":visible")
                },
                getCartVisible: function() {
                    return this.cart.is(":visible")
                }
            },
            f = {
                init: function() {
                    this.opts(), this.setElmt(), this.bindEvent()
                },
                opts: function() {
                    this.delay = 100
                },
                setElmt: function() {
                    this.gnb = a.find(".gb-gnb"), this.toggler = a.find(".s-gnb-toggler"), this.layer = a.find(".gb-gnb__drop-mobile"), this.depth1 = this.layer.find(".s-depth1-wrap"), this.dimmed = a.find(".gb-gnb__dimmed"), this.jsMoClose = a.find(".js-mo-close"), this.jsIcoSearch = a.find(".js-ico-search"), this.jsMoCloseBtn = a.find(".gb-gnb-2019__cta-close"), this.jsModepth2CloseBtn = a.find(".gb-gnb-2019__cta-back .s-btn-back"), this.$depth1Container = a.find(".gb-gnb-2019__depth1-container"), this.$depth2Container = a.find(".gb-gnb-2019__depth2-container"), this.$modepth2Item = a.find(".gb-gnb-2019__depth2-item"), this.$modepth3List = a.find(".gb-gnb-2019__depth3-list"), this.accordionBtn = a.find(".gb-gnb-2019__depth2-cta"), this.shadow = a.find(".gb-gnb__tablet-shadow"), this.modepth2Item = ".gb-gnb-2019__depth2-item", this.modepth3List = ".gb-gnb-2019__depth3-list"
                },
                bindEvent: function() {
                    this.responsiveListener(), this.togglerClickListener(), this.depthClickListener(), this.bindAccordion()
                },
                responsiveListener: function() {
                    t(n.evt.connect).on(n.evt.responsiveMgr.responsiveChange, t.proxy(this.destroy, this))
                },
                togglerClickListener: function() {
                    var e = this;
                    this.toggler.on("click", function(t) {
                        e.layer.is(":visible") ? e.offDrilldown() : e.onDrilldown()
                    })
                },
                depthClickListener: function() {
                    l() || d ? this.depth1.off("click").on("click", ".s-depth1-link, .s-mymenu", t.proxy(this.openSubmenu, this)) : this.depth1.off("click", ".s-depth1-link, .s-mymenu", t.proxy(this.openSubmenu, this))
                },
                actSubmenu: function(i, s, n) {
                    var o, r, h, c = t("html").hasClass("rtl");
                    c ? (o = {
                        opacity: 1,
                        right: 0
                    }, r = {
                        right: -300
                    }, h = {
                        right: "350px"
                    }) : (o = {
                        opacity: 1,
                        left: 0
                    }, r = {
                        left: 0
                    }, h = {
                        left: "350px"
                    }), s.css({
                        opacity: 1,
                        display: "block"
                    }), d && !l() ? s.animate(r, {
                        duration: 250,
                        easing: "easeOutSine"
                    }) : (this.shadow.css(h), s.css("height", t(e).height() - a.outerHeight(!0)), i.addClass("is-expanded"), n.css({
                        opacity: 0
                    }), n.clearQueue(), n.stop(), n.each(function(e) {
                        var i = t(this);
                        i.delay(50 + 50 * e).queue(function() {
                            i.stop().animate(o, {
                                duration: 120,
                                easing: "easeOutSine",
                                complete: function() {
                                    i.removeAttr("style")
                                }
                            })
                        })
                    }), this.$depth2Container.length && this.$depth2Container.scrollTop(0))
                },
                openSubmenu: function(i, n) {
                    i.preventDefault();
                    var n = n || !1,
                        o = this,
                        r = e.smg.aem.util.winSize().w,
                        c = t(i.currentTarget),
                        u = c.closest(".gb-gnb-2019__depth1-container").find(".s-depth1-link"),
                        f = c.next(h ? ".drilldown-sub" : ".gb-gnb-2019__depth2"),
                        p = f.find(".s-depth1-link, .s-depth2-link, .s-depth3-link, .gb-gnb-2019__depth2-item"),
                        g = f.find(".gb-gnb-2019__depth2-container"),
                        b = g.find(".gb-gnb-2019__depth2-item").eq(g.find(".gb-gnb-2019__depth2-item").eq(0).find("a").hasClass("gb-gnb-2019__depth2-cta--only") ? 1 : 0),
                        m = b.find(".gb-gnb-2019__depth2-wrap"),
                        y = b.find(".gb-gnb-2019__depth3-list"),
                        v = m.find(".gb-gnb-2019__depth2-cta"),
                        _ = o.layer.find(".is-expanded"),
                        C = _.next(h ? ".drilldown-sub" : ".gb-gnb-2019__depth2"),
                        k = f.find(".gb-gnb-2019__depth2-item"),
                        w = f.find(".gb-gnb-2019__depth3-list"),
                        L = c.find(".s-ico-new-window"),
                        S = c.attr("href"),
                        A = a.outerHeight(!0),
                        E = A - this.gnb.height(),
                        x = !1,
                        T = null;
                    r >= s.RESPONSIVE.MOBILE.WIDTH ? f.css({
                        top: A
                    }) : d && r < s.RESPONSIVE.MOBILE.WIDTH && (x = !0, f.css({
                        top: E
                    })), f.length && f.stop().animate({
                        scrollTop: 0
                    }), C.length && C.stop().animate({
                        scrollTop: 0
                    }), S && "#" != S ? L.length ? e.open(S) : e.location.href = S : (f.length && (C.length ? (C.fadeOut({
                        duration: 1,
                        complete: function() {
                            o.actSubmenu(c, f, p)
                        }
                    }), l() && (_.removeClass("is-expanded"), k.removeClass("is-opened"), w.stop().slideUp())) : o.actSubmenu(c, f, p), d && r < s.RESPONSIVE.MOBILE.WIDTH && (u.attr("tabindex", -1), g.children(":eq(0)").find("a:eq(0), button:eq(0)").focus()), l() ? (clearTimeout(T), T = setTimeout(function() {
                        b.addClass("is-opened"), y.slideDown(), v.attr("title", "Collapse").text("Collapse")
                    }, 300)) : (clearTimeout(T), T = setTimeout(function() {
                        b.addClass("is-opened"), y.css("display", "block"), v.attr("title", "Collapse").text("Collapse")
                    }, 100))), n || x || o.accordionBtn.attr("title", "Expand"))
                },
                onDrilldown: function() {
                    this.onStatusAttr(), this.onDimmed(), this.onLayer(), this.onFocusLoop(), this.setLayerLoop(), this.setSlickPosition(!0)
                },
                onFocusLoopTempLink: function(e) {
                    e.preventDefault();
                    var i = t(e.currentTarget),
                        s = i.prev().length,
                        n = i.next().length,
                        o = this.layer.find(".s-depth1-link:last-child");
                    if (this.layer.find(".gb-gnb-2019__depth2").is(":visible") && (o = this.layer.find(".gb-gnb-2019__depth2-item:last-child, .gb-gnb-2019__depth2-container .s-depth2-wrap:last-child").find("button, a")), s) {
                        if (n) return;
                        this.jsMoCloseBtn.focus()
                    } else o.focus()
                },
                setLayerLoop: function() {
                    this.$depth1Container.find(".s-depth1-wrap:eq(0) .s-depth1-link:eq(0)").focus(), this.layer.prepend('<span class="js-loop-hidden" tabindex="0"></span>'), this.layer.append('<span class="js-loop-hidden" tabindex="0"></span>'), this.layer.off("focusin").on("focusin", ".js-loop-hidden", t.proxy(this.onFocusLoopTempLink, this))
                },
                unsetLayerLoop: function() {
                    this.layer.off("focusin", ".js-loop-hidden", t.proxy(this.onFocusLoopTempLink, this)), this.layer.find(".js-loop-hidden").remove(), this.$depth1Container.find(".s-depth1-link").removeAttr("tabindex").end().find(".gb-gnb-2019__depth2").removeAttr("style")
                },
                setSlickPosition: function(i) {
                    var s = t(".slick-initialized"),
                        n = s.length;
                    if (i)
                        for (var o = 0; n > o; o++) s.slick("setPosition");
                    else n && t(e).trigger("resize")
                },
                offDrilldown: function(e, s) {
                    h || d ? (this.offFocusLoop(), void 0 === s ? i.closeLayer(t.proxy(function() {
                        f.offStatusAttr(), f.offLayer(1), f.offDimmed(), f.toggler.focus(), this.setSlickPosition(!1)
                    }, this)) : (i.resetForResponsive(), f.offStatusAttr(), f.offLayer(1), f.offDimmed())) : (this.offLayer(e), this.offStatusAttr(), this.offDimmed(), this.offFocusLoop()), this.unsetLayerLoop()
                },
                onFocusLoop: function() {
                    var e = this;
                    this.jsIcoSearch.on("keydown.gnbToggler", function(t) {
                        9 !== t.keyCode || t.shiftKey || (t.preventDefault(), e.jsMoClose.focus())
                    }), this.jsMoClose.on("keydown.gnbToggler", function(t) {
                        9 === t.keyCode && t.shiftKey && (t.preventDefault(), e.jsIcoSearch.focus())
                    })
                },
                offFocusLoop: function() {
                    this.jsIcoSearch.off("keydown.gnbToggler"), this.jsMoClose.off("keydown.gnbToggler")
                },
                onStatusAttr: function() {
                    t(n.body).addClass("gb-gnb-open")
                },
                offStatusAttr: function() {
                    t(n.body).removeClass("gb-gnb-open")
                },
                onLayer: function() {
                    var e = this;
                    (h || d) && (i.resetStyle(), i.openLayer()), this.layer.fadeIn({
                        duration: e.delay,
                        complete: function() {
                            e.fadeInComplete()
                        }
                    })
                },
                offLayer: function(e) {
                    var i = this,
                        e = e || this.delay;
                    1 === e ? this.layer.removeAttr("style").css("display", "none") : this.layer.fadeOut({
                        duration: e,
                        complete: function() {
                            var e = t(".gb-gnb__search .gb-gnb__search-bar").is(":visible"),
                                s = t(".gb-gnb__cart .gb-gnb__cart-layer").is(":visible");
                            e || s || i.toggler.focus()
                        }
                    })
                },
                onDimmed: function() {
                    this.dimmed.css("display", "block")
                },
                offDimmed: function() {
                    this.dimmed.css("display", "none")
                },
                fadeInComplete: function(e) {
                    this.bindClickoutsideListener(), this.bindClickListener()
                },
                bindClickoutsideListener: function() {
                    this.layer.on("clickoutside", t.proxy(this.onClickOutside, this))
                },
                unbindClickoutsideListener: function() {
                    this.layer.off("clickoutside", t.proxy(this.onClickOutside, this))
                },
                bindClickListener: function() {
                    this.jsMoCloseBtn.on("click", t.proxy(this.onClickOutside, this)), this.jsModepth2CloseBtn.on("click", t.proxy(this.closeMobiledepth2, this))
                },
                unbindClickListener: function() {
                    this.jsMoCloseBtn.off("click", t.proxy(this.onClickOutside, this)), this.jsModepth2CloseBtn.off("click", t.proxy(this.closeMobiledepth2, this))
                },
                onClickOutside: function(e) {
                    var i = this;
                    h || d ? (t(e.target).parent().hasClass("s-btn-utility") || t(e.target).hasClass("s-btn-utility") ? this.offDrilldown(1, !0) : this.offDrilldown(this.delay), d && setTimeout(function() {
                        i.$modepth2Item.removeClass("is-opened"), i.$modepth3List.stop().slideUp(), i.$depth1Container.scrollTop(0), i.$depth2Container.scrollTop(0), i.accordionBtn.attr("title", "Expand")
                    }, 250)) : this.offDrilldown(this.delay), this.unbindClickoutsideListener(), this.unbindClickListener()
                },
                onCloseCallback: function() {
                    this.onClickOutside()
                },
                closeMobiledepth2: function(e) {
                    e.preventDefault();
                    var i, s = t("html").hasClass("rtl"),
                        n = this,
                        o = t(e.currentTarget).closest(".gb-gnb-2019__depth2");
                    i = s ? {
                        right: -300
                    } : {
                        left: -300
                    };
                    var r = o.closest(".gb-gnb-2019__depth1-container").find(".s-depth1-link");
                    r.removeAttr("tabindex"), o.stop().animate(i, {
                        duration: 250,
                        easing: "easeInOut",
                        complete: function() {
                            n.$modepth2Item.removeClass("is-opened"), n.$modepth3List.stop().slideUp(), n.$depth2Container.scrollTop(0), n.accordionBtn.attr("title", "Expand"), o.removeAttr("style"), o.prev().focus()
                        }
                    })
                },
                bindAccordion: function() {
                    var e = this;
                    this.accordionBtn.each(function() {
                        var i = t(this),
                            s = i.closest(e.modepth2Item),
                            n = s.find(e.modepth3List);
                        i.on("click", function(i) {
                            var o = t(i.currentTarget);
                            e.accordionBtn.attr("title", "Expand"), s.hasClass("is-opened") ? (s.removeClass("is-opened"), n.stop().slideUp(), o.attr("title", "Expand"), o.text("Expand")) : (e.$modepth2Item.removeClass("is-opened"), e.$modepth3List.slideUp(), s.addClass("is-opened"), n.stop().slideDown(), o.attr("title", "Collapse"), o.text("Collapse"))
                        })
                    })
                },
                destroy: function(e, t) {
                    this.unbindClickoutsideListener(), this.offDrilldown(1, !0), h && (i.resetForResponsive(), this.offDimmed(), this.depthClickListener())
                }
            },
            p = {
                isMobile: function() {
                    return !!("ontouchstart" in e || e.DocumentTouch && doc instanceof e.DocumentTouch)
                }(),
                init: function() {
                    this.opts(), this.setElements(), this.bindEventHandlers()
                },
                opts: function() {
                    this.delay = 100
                },
                setElements: function() {
                    this.menuWrap = a.find(".gb-gnb__bar .gb-gnb__my-layer").closest("li"), this.menuLayer = a.find(".gb-gnb__my-layer"), this.loginMenuLayer = a.find(".s-login, .s-login_new"), this.logoutMenuLayer = a.find(".s-mymenu_new")
                },
                bindEventHandlers: function() {
                    h ? (this.menuWrap.on("mouseenter mouseleave", t.proxy(this.onMouseLayer, this)), this.menuWrap.on("click", ".s-btn-utility", t.proxy(this.onKeyboardLayer, this))) : (this.menuWrap.on("mouseenter mouseleave", t.proxy(this.onMouseLayer, this)), this.menuWrap.on("click", ".s-btn-utility", t.proxy(this.onKeyboardLayer, this))), this.responsiveListener()
                },
                responsiveListener: function() {
                    t(n.evt.connect).on(n.evt.responsiveMgr.responsiveChange, t.proxy(this.onClickOutside, this))
                },
                onMouseLayer: function(e) {
                    if (!this.isMobile) {
                        var t = this;
                        "mouseenter" == e.type ? (this.onAria(), this.mouseEnterType = !0, this.menuLayer.stop().fadeIn(t.delay)) : "mouseleave" == e.type && (this.offAria(), this.mouseEnterType = !1, this.menuLayer.stop().fadeOut(t.delay))
                    }
                },
                onKeyboardLayer: function(e) {
                    if (!this.mouseEnterType) {
                        var i = this,
                            s = t(e.currentTarget).closest("li");
                        this.loginMenuLayer.length ? h ? this.menuLayer.is(":visible") ? (this.layerOffAria(s), s.find(".gb-gnb__my-layer").stop().slideUp(i.delay), s.off("clickoutside", t.proxy(this.onClickOutside, this))) : (this.layerOnAria(s), s.find(".gb-gnb__my-layer").removeAttr("style"), s.find(".gb-gnb__my-layer").stop().slideDown(i.delay), s.on("clickoutside", t.proxy(this.onClickOutside, this))) : this.menuLayer.is(":visible") ? (this.layerOffAria(s), s.find(".gb-gnb__my-layer").stop().fadeOut(i.delay), s.off("clickoutside", t.proxy(this.onClickOutside, this))) : (this.layerOnAria(s), s.find(".gb-gnb__my-layer").stop().fadeIn(i.delay), s.on("clickoutside", t.proxy(this.onClickOutside, this))) : this.menuLayer.is(":visible") ? (this.offAria(), this.menuLayer.stop().fadeOut(i.delay), this.menuWrap.off("clickoutside", t.proxy(this.onClickOutside, this))) : (this.onAria(), this.menuLayer.stop().fadeIn(i.delay), this.menuWrap.on("clickoutside", t.proxy(this.onClickOutside, this)))
                    }
                },
                onClickOutside: function(e) {
                    var i = this,
                        s = t(e.currentTarget);
                    this.offAria(), this.menuLayer.stop().fadeOut(i.delay), s.off("clickoutside", t.proxy(this.onClickOutside, this))
                },
                onAria: function() {
                    this.menuWrap.find(".s-btn-utility").attr("aria-expanded", !0)
                },
                offAria: function() {
                    this.menuWrap.find(".s-btn-utility").attr("aria-expanded", !1)
                },
                layerOnAria: function(e) {
                    e.find(".s-btn-utility").attr("aria-expanded", !0)
                },
                layerOffAria: function(e) {
                    e.find(".s-btn-utility").attr("aria-expanded", !1)
                }
            },
            g = {
                init: function() {
                    this.setElmts(), this.bindEvts()
                },
                setElmts: function() {
                    this.gnb = a.find(".gb-gnb__logo, .gb-gnb__main, .gb-gnb__sub"), this.loginBtn = a.find(".gb-gnb__my-layer")
                },
                bindEvts: function() {
                    this.gnb.off("keydown.closer").on("keydown.closer", t.proxy(this.keydownHandler, this))
                },
                keydownHandler: function(e) {
                    27 === e.keyCode && p.menuLayer.is(":visible") && (p.offAria(), p.menuLayer.stop().fadeOut(p.delay), this.loginBtn.find("a").is(":focus") && p.menuLayer.closest(".s-login, .s-login_new, .s-mymenu, .s-mymenu_new").find(".s-btn-utility").focus())
                }
            },
            b = ({
                responsiveSize: 768,
                isSupportTransform: function() {
                    return "WebkitTransform" in document.body.style || "MozTransform" in document.body.style || "msTransform" in document.body.style || "OTransform" in document.body.style || "transform" in document.body.style
                }(),
                windowWidth: function() {
                    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
                }
            }, {
                init: function() {
                    this.opts(), this.setElements(), this.bindEventHandlers(), this.isRTL = t("html").hasClass("rtl")
                },
                opts: function() {
                    this.delay = 100
                },
                setElements: function() {
                    this.menuWrap = a.find(".gb-gnb__bar .s-ico-cart-empty").closest("a"), this.menuLayer = t(".gb-gnb__cart-empty")
                },
                bindEventHandlers: function() {
                    this.menuWrapClickListener(), this.resizeListener()
                },
                menuWrapClickListener: function() {
                    var e = this;
                    "tr" != SITE_CD && this.menuWrap.on("click", function(i) {
                        i.preventDefault(), e.menuLayer.is(":visible") ? e.offDisplay() : (e.reposition(t(".gb-gnb__cart-empty")), e.onDisplay())
                    }), this.menuLayer.on("click", ".js-cart-close", function(t) {
                        t.preventDefault(), e.offDisplay()
                    })
                },
                resizeListener: function() {
                    var i = this;
                    t(e).on("resize", function() {
                        var e = t(".gb-gnb__cart-empty");
                        e.is(":visible") && i.reposition(e)
                    })
                },
                onLayer: function() {
                    this.menuLayer.stop().fadeIn(this.delay).attr("tabIndex", 0).focus(), t("#dimContainer .lightbox-skrim").show()
                },
                offLayer: function(e) {
                    e = e || this.delay, this.menuLayer.stop().fadeOut(e), this.menuWrap.focus(), t("#dimContainer .lightbox-skrim").hide()
                },
                onDisplay: function() {
                    this.onLayer();
                    var e = this;
                    setTimeout(function() {
                        e.bindClickOutsideListener(), e.bindFoucsOutsideListener()
                    }, 50)
                },
                offDisplay: function(e) {
                    e = e || this.delay, this.menuLayer.off("focusoutside"), this.offLayer(e), this.unbindClickOutsideListener()
                },
                onCloseCallback: function() {
                    this.offDisplay()
                },
                onClickOutside: function() {
                    this.offDisplay()
                },
                onFocusOutside: function() {
                    this.menuLayer.stop().focus()
                },
                bindClickOutsideListener: function() {
                    this.menuLayer.on("clickoutside", t.proxy(this.onClickOutside, this))
                },
                unbindClickOutsideListener: function() {
                    this.menuLayer.off("clickoutside"), this.menuLayer.off("focusoutside")
                },
                bindFoucsOutsideListener: function() {
                    this.menuLayer.on("focusoutside", t.proxy(this.onFocusOutside, this))
                },
                reposition: function(t) {
                    var i = e.innerHeight || doc.documentElement.clientHeight || doc.body.clientHeight,
                        s = t.outerHeight(),
                        n = (i - s) / 2;
                    t.css(this.isRTL ? {
                        right: "50%",
                        top: n
                    } : {
                        left: "50%",
                        top: n
                    })
                }
            }),
            m = {
                init: function() {
                    this.opts(), this.setElements(), this.bindEventHandlers()
                },
                opts: function() {
                    this.delay = 0, this.onClass = "gb-gnb__search-open"
                },
                setElements: function() {
                    this.gnb = a.find(".gb-gnb"), this.wrap = a.find(".gb-gnb__search"), this.inputWrap = this.wrap.find(".gb-gnb__search-input-wrap"), this.bar = this.wrap.find(".gb-gnb__search-bar"), this.suggest = this.wrap.find(".gb-gnb__search-suggest"), this.noData = this.wrap.find(".gb-gnb__search-suggest-nodata"), this.historyClose = this.wrap.find(".gb-gnb__search-history-close"), this.searchBtn = a.find(".js-ico-search"), this.searchArrow = this.searchBtn.find(".s-search-arrow"), this.history = this.wrap.find(".gb-gnb__search-history"), this.closeBtn = this.wrap.find(".s-ico-close"), this.inputArea = this.wrap.find("#inp_srch"), this.dimmed = a.find(".gb-gnb__dimmed"), this.isSearchGnb201807 = a.find(".gb-gnb-2018").length ? !0 : !1, this.isSearchGnb201905 = a.find(".gb-gnb-2019").length ? !0 : !1, this.gnbSubNav = a.find(".gb-gnb__sub-nav"), this.utilityIcons = a.find(".gb-gnb__utility > li > button, .gb-gnb__utility > li > a"), this.utils = e.smg.aem.util
                },
                bindEventHandlers: function() {
                    this.responsiveListener(), this.searchBtnClickListener(), this.closeBtnClickListener(), this.isSearchGnb201807 ? (this.blockSearchTransition = !1, this.inputArea.on("transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd", t.proxy(this.inputTransitionOpen, this))) : this.isSearchGnb201905 && (this.blockSearchTransition = !1, this.inputWrap.on("transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd", t.proxy(this.inputTransitionOpen, this))), this.wrap.on("focusin", ".gb-gnb__search-suggest-list-select a", t.proxy(this.focusSuggestExpandSelect, this)), this.wrap.on("keydown", t.proxy(this.searchFocusLoop, this))
                },
                focusSuggestExpandSelect: function(e) {
                    e.preventDefault();
                    var i = t(e.currentTarget).closest(".gb-gnb__search-suggest-list-select").find("a");
                    this.utils.winSize().w >= s.RESPONSIVE.GNB.WIDTH && i.attr("title", "opened recommended result")
                },
                responsiveListener: function() {
                    t(n.evt.connect).on(n.evt.responsiveMgr.responsiveChange, t.proxy(this.destroy, this))
                },
                searchBtnClickListener: function() {
                    var i = this;
                    this.isSearchGnb201807 || this.isSearchGnb201905 ? (this.searchBtn.on("click", function(s) {
                        if (i.bar.is(":visible")) i.offLayer(), i.offAria();
                        else {
                            d && i.gnbSubNav.hide(), i.onLayer(), i.onAria(), i.inputArea.focus(), i.searchBtn.blur(), setTimeout(function() {
                                d || i.onDimmed(), document.documentMode <= 9 ? (i.wrap.css("display", "block"), i.gnbSubNav.clearQueue(), i.inputTransitionOpen(), i.inputArea.focus(), i.gnbSubNav.stop().animate({
                                    opacity: 0
                                }, 200, function() {
                                    i.gnbSubNav.css("display", "none")
                                })) : (d || i.gnbSubNav.stop().delay(50).animate({
                                    opacity: 0
                                }, 200, function() {
                                    i.gnbSubNav.css("display", "none")
                                }), i.gnbSubNav.clearQueue()), i.utilityIcons.attr("tabIndex", -1)
                            }, 100);
                            var n = e.innerWidth || e.document.documentElement.clientWidth || e.document.body.clientWidth;
                            n <= r.device.gnb.width ? (i.wrap.find(".js-gnb-loop-focus").removeAttr("tabIndex"), i.wrap.on("focusin", ".js-gnb-loop-focus", t.proxy(i.focusGnbSearchFirstNode, i))) : (i.wrap.find(".js-gnb-loop-focus").attr("tabIndex", -1), i.wrap.on("focusoutside", t.proxy(i.onClickOutside, i)))
                        }
                    }), i.inputArea.on("click", function(n) {
                        if (!i.blockSearchTransition) {
                            var o = t(e).height(),
                                r = i.wrap.height(),
                                a = i.history.find(".gb-gnb__search-history-title").height(),
                                h = o + r,
                                l = o + r + a;
                            d && i.utils.winSize().w <= s.RESPONSIVE.GNB.WIDTH ? (i.wrap.find(".gb-gnb__search-history").show().animate({
                                height: h
                            }, 300), i.wrap.find(".gb-gnb__search-history > ul").css({
                                height: l
                            })) : i.wrap.find(".gb-gnb__search-history").stop().slideDown(300)
                        }
                    })) : this.searchBtn.on("click", function(e) {
                        i.bar.is(":visible") ? (i.offLayer(), i.offAria()) : (i.onLayer(), i.onAria(), i.inputArea.focus())
                    })
                },
                focusGnbSearchFirstNode: function(e) {
                    e.preventDefault();
                    var i = t(e.currentTarget),
                        s = this.suggest.find(".gb-gnb__search-suggest-list-select"),
                        n = this.suggest.find(".gb-gnb__search-suggest-list-category");
                    if (i.hasClass("history")) this.suggest.is(":visible") || this.inputArea.focus();
                    else if (i.hasClass("suggest")) this.inputArea.focus();
                    else if (this.noData.is(":visible")) this.closeBtn.is(":visible") ? this.closeBtn.focus() : this.wrap.find(".s-ico-search").focus();
                    else {
                        if (s.is(":visible") && s.children().length) return void s.last().find("a").focus();
                        s.is(":visible") && n.children().length ? n.last().find("a").focus() : this.historyClose.focus()
                    }
                },
                closeBtnClickListener: function() {
                    var i = this;
                    this.closeBtn.on("click", function() {
                        i.listCloseHandler();
                        var s = e.innerWidth || e.document.documentElement.clientWidth || e.document.body.clientWidth;
                        s <= r.device.mobile.width ? i.wrap.off("focusin", ".js-gnb-loop-focus", t.proxy(i.focusGnbSearchFirstNode, i)) : i.wrap.off("focusoutside", t.proxy(i.onClickOutside, i)), i.wrap.find(".js-gnb-loop-focus").removeAttr("tabIndex")
                    })
                },
                listCloseHandler: function() {
                    var e = this;
                    e.isSearchGnb201807 || e.isSearchGnb201905 ? (e.searchBtn.attr("aria-expanded", "false"), e.suggest.find(".gb-gnb__search-suggest-list").is(":visible") ? (e.offLayer(), e.utilityIcons.removeAttr("tabIndex"), e.gnbSubNav.css("display", "block"), e.gnbSubNav.stop().animate({
                        opacity: 1
                    }, 1)) : (e.blockSearchTransition = !0, e.utilityIcons.removeAttr("tabIndex"), e.wrap.find(".gb-gnb__search-history").is(":visible") ? (e.wrap.find(".gb-gnb__search-history > ul").removeAttr("style"), e.wrap.find(".gb-gnb__search-history").stop().slideUp(300, function(i) {
                        e.wrap.find(".gb-gnb__search-history").removeAttr("style"), t(n.body).removeClass("gb-gnb__search-open"), document.documentMode <= 9 ? (e.wrap.css("display", "none"), e.dimmed.css("display", "none"), e.gnbSubNav.clearQueue(), e.gnbSubNav.css("display", "block"), e.gnbSubNav.stop().animate({
                            opacity: 1
                        }, 200)) : (e.gnbSubNav.clearQueue(), d ? setTimeout(function() {
                            e.gnbSubNav.css("display", "block")
                        }, 350) : e.gnbSubNav.css("display", "block"), e.gnbSubNav.stop().delay(350).animate({
                            opacity: 1
                        }, 200))
                    })) : (t(n.body).removeClass("gb-gnb__search-open"), document.documentMode <= 9 && (e.wrap.css("display", "none"), e.dimmed.css("display", "none")), e.gnbSubNav.clearQueue(), e.gnbSubNav.css("display", "block"), e.gnbSubNav.stop().delay(50).animate({
                        opacity: 1
                    }, 200)))) : e.offLayer(function() {
                        e.searchBtn.focus()
                    })
                },
                searchFocusLoop: function(e) {
                    var i = this,
                        n = function(e, t) {
                            e.preventDefault(), t.focus()
                        };
                    if (this.utils.winSize().w < s.RESPONSIVE.GNB.WIDTH) {
                        var o = t(e.target);
                        i.history.is(":visible") && ("disabled" === i.historyClose.attr("disabled") ? o.hasClass("gb-gnb__search-input") ? 9 === e.keyCode && e.shiftKey && n(e, i.closeBtn) : o.hasClass("s-ico-close") && (9 !== e.keyCode || e.shiftKey || n(e, i.inputArea)) : o.hasClass("gb-gnb__search-input") ? 9 === e.keyCode && e.shiftKey && n(e, i.historyClose) : o.hasClass("gb-gnb__search-history-close") && (9 !== e.keyCode || e.shiftKey || n(e, i.inputArea))), i.suggest.is(":visible") && (o.hasClass("gb-gnb__search-input") ? 9 === e.keyCode && e.shiftKey && n(e, i.suggest.find(".gb-gnb__search-suggest-list-select").find("a:last")) : o.closest(".gb-gnb__search-suggest-list-select").length && (9 !== e.keyCode || e.shiftKey || o.parent().index() === i.suggest.find(".gb-gnb__search-suggest-list-select li").length - 1 && n(e, i.inputArea))), i.noData.is(":visible") && (o.hasClass("gb-gnb__search-input") ? 9 === e.keyCode && e.shiftKey && n(e, i.closeBtn) : o.hasClass("s-ico-close") && (9 !== e.keyCode || e.shiftKey || n(e, i.inputArea)))
                    }
                },
                onLayer: function() {
                    var i = this,
                        o = this.wrap.add(this.searchArrow);
                    this.isSearchGnb201807 || this.isSearchGnb201905 ? (this.utils = e.smg.aem.util, this.responsiveType = this.utils.winSize().w <= s.RESPONSIVE.GNB.WIDTH ? !0 : !1, o.stop().show({
                        duration: i.delay,
                        complete: function() {
                            var e = i.gnb.outerHeight(!0);
                            i.responsiveType && (h || i.isSearchGnb201807 || i.isSearchGnb201905 || (i.wrap.css("top", e), i.bar.css("top", e))), setTimeout(function() {
                                i.bindClickoutsideListener(), (i.isSearchGnb201807 || i.isSearchGnb201905) && t(n.body).addClass(i.onClass)
                            }, 50)
                        }
                    })) : o.stop().show({
                        duration: i.delay,
                        complete: function() {
                            setTimeout(function() {
                                i.bindClickoutsideListener(), "" != i.history.find("ul").html() && i.history.show()
                            }, 50)
                        }
                    })
                },
                offLayer: function(e) {
                    var i = this,
                        s = this.wrap.add(this.searchArrow);
                    s.stop().hide(this.isSearchGnb201807 || this.isSearchGnb201905 ? {
                        duration: i.delay,
                        complete: function() {
                            t(n.body).removeClass("gb-gnb__search-open"), i.wrap.css("top", ""), i.bar.css("top", ""), i.inputArea.val(""), i.suggest.hide(), i.unbindClickoutsideListener(), e && "function" == typeof e && e(), i.wrap.removeClass("gb-gnb__search-open"), i.wrap.find(".gb-gnb__search-history").hide(), i.dimmed.css("display", "none")
                        }
                    } : {
                        duration: i.delay,
                        complete: function() {
                            i.inputArea.val(""), i.suggest.hide(), i.history.hide(function() {
                                t(this).removeAttr("style")
                            }), i.unbindClickoutsideListener(), e && "function" == typeof e && e()
                        }
                    })
                },
                onAria: function() {
                    this.searchBtn.attr("aria-expanded", !0)
                },
                offAria: function() {
                    this.searchBtn.attr("aria-expanded", !1)
                },
                inputTransitionOpen: function(e) {
                    this.blockSearchTransition = !1, t(n.body).hasClass(this.onClass) ? this.inputArea.trigger("click") : (this.utils.winSize().w <= r.device.gnb.width && this.searchBtn.focus(), this.wrap.css("display", "none"), !d && this.responsiveType && this.dimmed.css("display", "none"))
                },
                bindClickoutsideListener: function() {
                    this.wrap.on("clickoutside", t.proxy(this.onClickOutside, this))
                },
                unbindClickoutsideListener: function() {
                    this.wrap.off("clickoutside", t.proxy(this.onClickOutside, this)), this.wrap.off("focusoutside", t.proxy(this.onClickOutside, this))
                },
                onClickOutside: function(e, t) {
                    this.isSearchGnb201807 || this.isSearchGnb201905 ? "boolean" == typeof t ? (this.offLayer(), this.offAria()) : (this.wrap.find(".gb-gnb__search-history > ul").removeAttr("style"), this.utils.winSize().w <= s.RESPONSIVE.MOBILE.WIDTH - 1 ? (this.wrap.find(".gb-gnb__search-history").slideUp(300), this.suggest.find(".gb-gnb__search-suggest-list").is(":visible") && (this.offLayer(), this.offAria())) : (this.listCloseHandler(), this.inputArea.val(""), this.searchBtn.blur(), this.offAria(), this.unbindClickoutsideListener())) : (this.offLayer(), this.offAria())
                },
                destroy: function(e, t) {
                    d && (this.wrap.find(".gb-gnb__search-history > ul").removeAttr("style"), this.wrap.find(".gb-gnb__search-history").removeAttr("style")), t ? this.wrap.trigger("clickoutside", [!0]) : this.wrap.trigger("clickoutside"), this.wrap.find(".js-gnb-loop-focus").removeAttr("tabIndex");
                    var i = this.wrap.closest(".gb-gnb-2018"),
                        s = i.find(".gb-gnb__drop-mobile");
                    l() ? s.hasClass("is-drilldown-loaded") && (s.removeAttr("style"), s.removeClass("drilldown is-drilldown-loaded"), k.destroy()) : s.hasClass("is-drilldown-loaded") ? (s.addClass("drilldown is-drilldown-loaded"), k.reset()) : (s.addClass("drilldown is-drilldown-loaded"), k.init())
                },
                onDimmed: function() {
                    var e = this;
                    (e.isSearchGnb201807 || e.isSearchGnb201905) && this.utils.winSize().w <= s.RESPONSIVE.GNB.WIDTH && e.dimmed.css("display", "block")
                }
            },
            y = {
                init: function() {
                    this.opts(), this.setElements(), this.bindResizeHandlers()
                },
                opts: function() {
                    this.utils = e.smg.aem.util, this.responsiveType = this.utils.winSize().w <= s.RESPONSIVE.MOBILE.WIDTH - 1 ? !0 : !1, this.wrapClsNm = "js-cookie", this.closeClsNm = "js-cookie-close"
                },
                setElements: function() {
                    this.header = t("#header");
                    var e = this.header.find(".cookie-notice"),
                        i = this.header.find(".cookie-geo").addClass(this.wrapClsNm);
                    e.size() && e.addClass(this.wrapClsNm).find(".cookie-notice__btn-close").addClass(this.closeClsNm),
                        i.size() && i.addClass(this.wrapClsNm).find(".btn-close").addClass(this.closeClsNm), this.ckBarWrap = this.header.find("." + this.wrapClsNm), this.ckBarClose = this.ckBarWrap.find("." + this.closeClsNm), this.gnbWrap = this.header.find(".gb-gnb")
                },
                bindResizeHandlers: function() {
                    t(e).on("resize", t.proxy(this.onResizeBrowser, this)), this.ckBarClose.on("click", t.proxy(this.onCkbarClose, this)), this.onResizeBrowser()
                },
                unBindResizeHandlers: function() {
                    t(e).off("resize", t.proxy(this.onResizeBrowser, this))
                },
                onResizeBrowser: function() {
                    this.utils.winSize().w <= s.RESPONSIVE.MOBILE.WIDTH - 1 ? this.responsiveType && (this.responsiveType = !1) : (this.gnbWrap.css("top", ""), this.responsiveType || (this.responsiveType = !0))
                },
                onCkbarClose: function(e) {
                    var i = new Date;
                    i.setTime(i.getTime() + 7776e6), this.header = t("#header");
                    var n = this.header.find(".cookie-notice"),
                        o = this.header.find(".cookie-geo");
                    n.size() && t.cookies.set("cookiesaccepted", "true", {
                        expiresAt: i
                    }), o.size() && t.cookies.set("cookiesaccepted-geo", "true", {
                        expiresAt: i
                    }), e.preventDefault();
                    var r = this,
                        a = t(e.currentTarget).closest("." + this.wrapClsNm);
                    this.utils.winSize().w <= s.RESPONSIVE.MOBILE.WIDTH - 1 && "absolute" == this.gnbWrap.css("position") && a.is(":visible") && this.gnbWrap.css({
                        position: "relative",
                        top: "",
                        height: "100%"
                    }), t.when(a.animate({
                        marginTop: -a.outerHeight(!0)
                    })).done(function() {
                        a.hide(), r.utils.winSize().w <= s.RESPONSIVE.MOBILE.WIDTH - 1 && (r.gnbWrap.css({
                            position: "",
                            top: "",
                            height: ""
                        }), r.unBindResizeHandlers()), Waypoint.refreshAll()
                    })
                }
            },
            v = {
                init: function() {
                    this.setElmts(), this.closeBtnClickListener()
                },
                setElmts: function() {
                    var e = t("#header");
                    this.wrap = e.find(".gb-gnb__notice-bar"), this.closeBtn = this.wrap.find(".s-ico-close")
                },
                closeBtnClickListener: function() {
                    var e = this;
                    this.closeBtn.on("click", function(t) {
                        e.wrap.css("display", "none")
                    })
                }
            },
            _ = {
                init: function() {
                    this.constants(), this.setElmts(), this.bindEvts()
                },
                constants: function() {
                    this.touchDevice = t("body").hasClass("touch-device")
                },
                setElmts: function() {
                    this.header = a, this.layer = a.find(".gb-gnb__drop-mobile")
                },
                bindEvts: function() {
                    this.responsiveListener(), this.headerClickListener(), r.responsiveName !== r.device.desktop.name && this.resizeListener()
                },
                responsiveListener: function() {
                    t(n.evt.connect).on(n.evt.responsiveMgr.responsiveChange, t.proxy(this.responsiveBindEventHandlers, this))
                },
                headerClickListener: function() {
                    this.header.on("click", t.proxy(this.resizeHeight, this))
                },
                responsiveBindEventHandlers: function(e, t) {
                    t.responsiveName !== r.device.desktop.name ? this.resizeListener() : this.unbindResizeListener()
                },
                resizeListener: function() {
                    t(e).on("resize orientationchange", t.proxy(this.resizeListenerImpl, this))
                },
                resizeListenerImpl: function(e) {
                    var t = this;
                    this.layer.is(":visible") && ("orientationchange" === e.type ? setTimeout(function() {
                        t.resizeHeight()
                    }, 300) : this.resizeHeight())
                },
                unbindResizeListener: function() {
                    t(e).off("resize orientationchange", t.proxy(this.resizeListenerImpl, this))
                },
                resizeHeight: function(s) {
                    this.resultHeight = t(e).height() - this.layer.offset().top, h || d ? i.orienTationChangeHeight() : this.layer.css("min-height", this.resultHeight)
                }
            },
            C = {
                init: function() {
                    this.constants(), this.setElmts(), this.bindEvts()
                },
                constants: function() {
                    this.hoverClass = "s-hover"
                },
                setElmts: function() {
                    var e = a.find(".gb-gnb__drop-mobile");
                    this.links = e.find(".s-depth2-link").add(e.find(".s-depth3-link"))
                },
                bindEvts: function() {
                    this.linksMouseenterListener(), this.linksMouseleaveListener()
                },
                linksMouseenterListener: function() {
                    var e = this;
                    this.links.on("mouseenter", function(i) {
                        t(i.currentTarget).addClass(e.hoverClass)
                    })
                },
                linksMouseleaveListener: function() {
                    var e = this;
                    this.links.on("mouseleave", function(i) {
                        t(i.currentTarget).removeClass(e.hoverClass)
                    })
                }
            },
            k = function() {
                var e = {
                        wrap: ".drilldown"
                    },
                    i = {
                        speed: 1
                    };
                i.isDelayAniamte = !1, t(".gb-gnb-2018").length && (document.documentMode > 9 || void 0 === document.documentMode) && (i = {
                    speed: 300
                }, i.isDelayAniamte = !0);
                var s = function() {
                        l() ? t(e.wrap).removeClass("drilldown") : (t(e.wrap).drilldown(i), t(e.wrap).addClass("is-drilldown-loaded"))
                    },
                    n = function() {
                        t(e.wrap).drilldown("reset")
                    },
                    o = function() {
                        t(e.wrap).drilldown("destroy"), t(e.wrap).removeClass("is-drilldown-loaded")
                    };
                return {
                    init: s,
                    reset: n,
                    destroy: o,
                    donwAnimate: i.downAnimate,
                    upAnimate: i.upAnimate
                }
            }(),
            w = function() {
                var i = t(h ? ".gb-gnb-2018" : ".gb-gnb-2019"),
                    s = i.find(h ? ".drilldown-root .s-depth1-wrap" : ".s-depth1-wrap"),
                    n = i.find(".gb-gnb-2019__depth1-container"),
                    o = i.find(".gb-gnb-2019__depth2-container"),
                    r = s.find(h ? ".drilldown-sub" : ".gb-gnb-2019__depth2"),
                    c = i.find(h ? ".drilldown-root .s-depth1-wrap > li > a, .drilldown-root .s-depth1-wrap > li > .s-mymenu_new" : ".s-depth1-wrap > li > a, .s-depth1-wrap > li > .s-mymenu_new"),
                    u = c.find(".s-arw-right, .s-arw-left"),
                    p = i.find(".gb-gnb__drop-mobile"),
                    g = r.find(".gb-gnb-2019__depth2-item"),
                    b = r.find(".gb-gnb-2019__depth3-list"),
                    y = i.find(".gb-gnb__tablet-shadow"),
                    v = i.find(".gb-gnb .js-mo-close"),
                    _ = t("html").hasClass("rtl"),
                    C = h ? "gb-gnb-2018-open" : "gb-gnb-2019-open",
                    w = 50,
                    L = 120,
                    S = !1,
                    A = function() {},
                    E = function() {
                        t("html").addClass(C), c = c.filter(function() {
                            return !("none" == t(this).parent().css("display"))
                        }), c.clearQueue(), c.stop(), c.each(function(e) {
                            var i = t(this);
                            i.delay(50 + e * w).queue(function() {
                                _ ? i.stop().animate({
                                    opacity: 1,
                                    "margin-right": 0
                                }, {
                                    duration: L,
                                    easing: "easeOutSine",
                                    complete: function() {
                                        i.removeAttr("style")
                                    }
                                }) : i.stop().animate({
                                    opacity: 1,
                                    "margin-left": 0
                                }, {
                                    duration: L,
                                    easing: "easeOutSine",
                                    complete: function() {
                                        i.removeAttr("style")
                                    }
                                })
                            })
                        })
                    },
                    x = function() {
                        v.on("click.gnbMobileInteraction", function(e) {
                            S && e.stopImmediatePropagation()
                        })
                    };
                x();
                var T = function() {
                        S = !1
                    },
                    O = function() {
                        if (!S)
                            if (S = !0, c.removeAttr("style"), u.removeAttr("style"), c.removeClass("is-expanded"), r.removeAttr("style"), t("html,body").scrollTop(0), d && (t("html").addClass(C), t("html").addClass("gb-gnb-2019-open-animate"), setTimeout(function() {
                                    t("html").removeClass("gb-gnb-2019-open-animate")
                                }, 700)), l()) {
                                k.destroy();
                                var e, s, n = c.eq(0).next(".gb-gnb-2019__depth2").find("ul >li").length || c.eq(0).next(".drilldown-sub").find("ul >li").length;
                                _ ? (e = {
                                    right: "-350px"
                                }, s = {
                                    right: "0px"
                                }) : (e = {
                                    left: "0px"
                                }, s = {
                                    left: "350px"
                                }), t("html").addClass(C), p.removeAttr("style"), p.stop().animate(e, {
                                    duration: 250,
                                    easing: "easeOutSine",
                                    complete: function() {}
                                }), n ? y.show().stop().animate(s, {
                                    duration: 400,
                                    easing: "easeOutSine",
                                    complete: function() {
                                        c.eq(0).trigger("click", !0), i.addClass("s-tablet-bg")
                                    }
                                }) : (i.removeClass("s-tablet-bg"), y.show())
                            } else d ? (t("html").addClass(C), _ ? p.show().stop().animate({
                                right: -300
                            }, 300) : p.show().stop().animate({
                                left: 0
                            }, 300)) : (p.hasClass("is-drilldown-loaded") ? k.reset() : (p.addClass("drilldown is-drilldown-loaded"), k.init()), c.css(_ ? {
                                "margin-right": 25,
                                opacity: 0
                            } : {
                                "margin-left": 25,
                                opacity: 0
                            }), u.css({
                                opacity: 1
                            }), p.removeAttr("style"), E())
                    },
                    I = function(e) {
                        f.offDimmed(), p.removeAttr("style"), T(), A(), t("html").removeClass(C), i.removeClass("s-tablet-bg"), e && e()
                    },
                    B = function(s) {
                        var n;
                        n = _ ? {
                            right: -350
                        } : {
                            left: -350
                        }, d && (t("html").addClass("gb-gnb-2019-close-animate"), setTimeout(function() {
                            t("html").removeClass("gb-gnb-2019-close-animate")
                        }, 1e3)), S = !1, A = s;
                        var o = e.smg.aem.util,
                            a = o.winSize().w;
                        a = _ ? a : -a, p.css({
                            overflow: "hidden"
                        }), l() ? (i.removeClass("s-tablet-bg"), r.stop().hide(), y.stop().animate(n, {
                            duration: 1,
                            easing: "easeInOutQuad",
                            complete: function() {
                                p.stop().animate({
                                    opacity: 0,
                                    left: a
                                }, {
                                    duration: 400,
                                    easing: "easeInOutQuad",
                                    complete: function() {
                                        I(function() {
                                            c.removeClass("is-expanded")
                                        }), p.removeAttr("style")
                                    }
                                }), y.css("right", "").hide(), f.offDimmed()
                            }
                        })) : (p.stop().animate({
                            opacity: 0,
                            left: a
                        }, {
                            duration: 250,
                            easing: "easeInOutQuad",
                            complete: function() {
                                I(function() {
                                    c.removeClass("is-expanded")
                                }), p.removeAttr("style")
                            }
                        }), f.offDimmed())
                    },
                    D = function() {
                        c.removeAttr("style"), u.removeAttr("style"), r.removeAttr("style"), b.removeAttr("style"), g.removeClass("is-opened"), t("html").removeClass(C), i.removeClass("s-tablet-bg")
                    },
                    M = function() {
                        var i = t(e).height() - p.offset().top,
                            r = a.outerHeight(!0);
                        i = t(e).height() - r, d ? (n.css({
                            height: i + 1
                        }), o.css("height", t(e).height() - a.outerHeight(!0))) : p.css({
                            height: i
                        }), l() && s.find(".drilldown-sub:visible").css({
                            height: i
                        })
                    },
                    N = function(s) {
                        S = !1, t("body").removeClass("gb-gnb-open"), t("html").removeClass(C), i.removeClass("s-tablet-bg"), c.stop().removeAttr("style"), u.stop().removeAttr("style"), y.removeAttr("style"), r.removeAttr("style").removeAttr("style"), p.stop().removeAttr("style"), c.removeClass("is-expanded"), p.css("min-height", t(e).height() - p.offset().top), l() && (k.destroy(), p.removeClass("drilldown")), m.gnbSubNav.removeAttr("style"), m.utilityIcons.removeAttr("tabIndex"), t("#header").find(".gb-gnb__search-history").removeAttr("style")
                    };
                return {
                    openLayer: O,
                    resetStyle: D,
                    closeLayer: B,
                    resetForResponsive: N,
                    orienTationChangeHeight: M,
                    closeDepth2: I
                }
            },
            L = function(n) {
                (this.container = n).size() && (o.init(), r.init(), h = function() {
                    var e = !1;
                    return a.find(".gb-gnb-2018").length && (document.documentMode > 9 || void 0 === document.documentMode) && (e = !0), e
                }(), d = function() {
                    var e = !1;
                    return a.find(".gb-gnb-2019").length && (document.documentMode > 9 || void 0 === document.documentMode) && (e = !0), e
                }(), l = function() {
                    var t = !1,
                        i = e.smg.aem.util.winSize().w;
                    return h ? i > s.RESPONSIVE.GNB.WIDTH && (t = !0) : d && i < s.RESPONSIVE.TABLET.WIDTH && i > s.RESPONSIVE.MOBILE.WIDTH - 1 && (t = !0), t
                }, c.init(), p.init(), f.init(), _.init(), C.init(), g.init(), t.cookies.get("cookiesaccepted") + "" != "true" && (t("body").find(".cookie-notice").show(), y.init()), t.cookies.get("cookiesaccepted-geo") + "" != "true" && (t("body").find(".cookie-geo").show(), y.init()), u.init(), b.init(), m.init(), v.init(), k.init(), i = w())
            };
        return {
            init: L
        }
    }(), t(function() {
        var s = e.smg.aem.util;
        if (s.isAemEditMode()) i.gnb.init(t("body"));
        else {
            i.gnb.init(t("body")), i.siteia.init();
            var n = e.smg.aem.components.common;
            n.custompopup.init()
        }
    })
}(window, window.jQuery);
! function(n, e) {
    "use strict";
    "undefined" == typeof n.smg && (n.smg = {}), "undefined" == typeof n.smg.aem && (n.smg.aem = {}), "undefined" == typeof n.smg.aem.common && (n.smg.aem.common = {}); {
        var o = n.smg.aem.common,
            t = n.smg.aem.varStatic,
            a = n.smg.aem.util;
        n.smg.aem.customEvent
    }
    o.cookieGeoNew = function() {
        var n = e("meta[name=sitecode]").attr("content"),
            o = {
                closeBtn: ".js-geo-close",
                cookieAcceptBtn: ".js-cookie-accept",
                countryNameWrap: ".js-country-name",
                geoSelectWrap: ".cm-cookie-geo__select",
                visitBtnsWrap: ".js-visit-btns",
                selectListWrap: ".js-list-wrap",
                selectListHead: ".js-list-head",
                selectListOpenClass: "s-select-open",
                selectListToggleBtn: ".js-list-toogle",
                geoMsgCookie: ".cm-cookie-geo__msg",
                geoMsgCookieWrap: ".cm-cookie-geo__msg-wrap",
                geoMsgCookieSebn: ".cm-cookie-geo__sebn",
                typeManage: ".cm-cookie-geo--type-manage",
                typeDimmed: ".cm-cookie-geo--type-dimmed",
                dimmed: "#dimContainer .lightbox-skrim",
                cookies: {
                    commonaccepted: "cookiesaccepted",
                    accepted: "cookiesaccepted-geo",
                    acceptedCountries: "cookiesaccepted-countries",
                    countryCodes: "country_codes",
                    siteCode: "site_cd"
                }
            };
        return {
            init: function(e, t) {
                (this.$container = e).length && !this.$container.data("initialized") && n && (this.options = a.def(o, t || {}), this.assignedHTMLElements(), this.initProperties(), this.bindEvents(), (this.isAcceptedGeo() || this.isLocalLanguageSite()) && this.$geoSelectWrap.remove(), this.isAcceptedCountries() && (this.$geoMsgCookie.remove(), this.$geoMsgCookieWrap.remove(), this.$geoMsgCookieSebn.remove()), this.setCountryInfo(), (!this.isAcceptedGeo() && !this.isLocalLanguageSite() && "" != this.visitCountryCode && this.currentCountrySiteInfo[0] || !this.isAcceptedCountries()) && (this.append(), this.onSlide(), this.$container.attr("data-initialized", !0)))
            },
            assignedHTMLElements: function() {
                var n = this.$container,
                    o = this.options;
                this.$body = e("body"), this.$contryNameWrap = n.find(o.countryNameWrap), this.$visitBtnsWrap = n.find(o.visitBtnsWrap), this.$cookieGeoClose = n.find(o.closeBtn), this.$cookieAcceptBtn = n.find(o.cookieAcceptBtn), this.$selectBtnWrap = n.find(o.selectListWrap), this.$selectListHead = n.find(o.selectListHead), this.$geoSelectWrap = n.find(o.geoSelectWrap), this.$selectListToggleBtn = n.find(o.selectListToggleBtn), this.$geoMsgCookie = n.find(o.geoMsgCookie), this.$geoMsgCookieWrap = n.find(o.geoMsgCookieWrap), this.$geoMsgCookieSebn = n.find(o.geoMsgCookieSebn), this.$dimmed = this.$body.find(o.dimmed).eq(0)
            },
            initProperties: function() {
                var e = this.options.cookies;
                this.testSiteCd = this.getParam(e.siteCode), this.currentSiteCode = n.toLowerCase(), this.visitCountryCode = this.testSiteCd ? this.testSiteCd : a.cookie.getCookie(e.countryCodes).toLowerCase(), this.currentCountrySiteInfo = [], this.visitCountrySiteInfo = [], this.selectedSiteCode = "", this.acceptedCountries = [], a.cookie.getCookie(e.acceptedCountries) && (this.acceptedCountries = a.cookie.getCookie(e.acceptedCountries).split(","))
            },
            isLocalLanguageSite: function() {
                return this.currentSiteCode === this.visitCountryCode
            },
            isSameSiteGroup: function() {
                var n = this.visitCountrySiteInfo,
                    o = this.currentCountrySiteInfo[0],
                    t = !1;
                return o && e.each(o.country_codes, function(o, a) {
                    var c = a;
                    e.each(n, function(n, o) {
                        e.inArray(c, o.country_codes) >= 0 && (t = !0)
                    })
                }), t
            },
            isTypeManage: function() {
                return this.$container.is(this.options.typeManage)
            },
            isTypeDimmed: function() {
                return this.$container.is(this.options.typeDimmed)
            },
            setCountryInfo: function() {
                e.each(c, e.proxy(function(n, o) {
                    var t = o.country_codes,
                        a = o.site_code.toLowerCase(),
                        c = o;
                    e.each(t, e.proxy(function(n, e) {
                        a === this.currentSiteCode && this.currentCountrySiteInfo.push(c), e === this.visitCountryCode && this.visitCountrySiteInfo.push(c)
                    }, this))
                }, this))
            },
            append: function() {
                var n = this.visitCountrySiteInfo,
                    o = this.currentCountrySiteInfo[0];
                return n.length && o ? (this.$contryNameWrap.text(n[0].global.country_name), this.isSameSiteGroup() ? o = n[0] : this.$visitBtnsWrap.html('<button type="button" site_cd="' + o.site_code.toLowerCase() + '" data-omni="click" data-omni-type="content_click" data-omni-data="choose location:' + o.site_code.toLowerCase() + '" title="Visit ' + o.local.country_name + "/" + o.local.lang + ' site" class="cm-cookie-geo__list-cta"><span>' + o.local.country_name + ' <span class="lang">/ ' + o.local.lang + "</span></span></button>"), this.$selectListHead.html(o.local.country_name + ' <span class="lang">/ ' + o.local.lang + "</span>"), e.each(n, e.proxy(function(n, e) {
                    this.$visitBtnsWrap.append('<button type="button" site_cd="' + e.site_code.toLowerCase() + '" data-omni="click" data-omni-type="content_click" data-omni-data="choose location:' + e.site_code.toLowerCase() + '" title="Visit ' + e.local.country_name + "/" + e.local.lang + ' site" class="cm-cookie-geo__list-cta"><span>' + e.local.country_name + ' <span class="lang">/ ' + e.local.lang + "</span></span></button>")
                }, this)), void(this.$visitBtnsWrap.find("button").length > 2 && this.$container.addClass("cm-cookie-geo--selectbox"))) : void this.$geoSelectWrap.remove()
            },
            bindEvents: function() {
                this.$visitBtnsWrap.on("click", "button", e.proxy(this.onSelectBtnsClick, this)), this.$selectListToggleBtn.on("click", e.proxy(this.selectListOpen, this)), this.$cookieGeoClose.on("click", e.proxy(this.onCloseBtnClick, this)), this.isTypeManage() && this.$cookieAcceptBtn.on("click", e.proxy(this.onAcceptClick, this))
            },
            setCookieAccept: function() {
                var n = this.options.cookies;
                e.inArray(this.currentSiteCode, this.acceptedCountries) < 0 && this.acceptedCountries.push(this.currentSiteCode), a.cookie.setCookie(n.acceptedCountries, this.acceptedCountries, 90), a.cookie.setCookie(n.commonaccepted, "true", 90)
            },
            setCookieGeo: function() {
                var n = this.options.cookies;
                a.cookie.setCookie(n.accepted, "true", 90), a.cookie.setCookie(n.commonaccepted, "true", 90)
            },
            onAcceptClick: function() {
                this.setCookieAccept(), this.isAcceptedGeo() || this.isLocalLanguageSite() || 0 == this.visitCountrySiteInfo.length ? this.offSlide() : this.$geoMsgCookieWrap.remove()
            },
            onCloseBtnClick: function() {
                this.isTypeManage() || (this.setCookieAccept(), this.setCookieGeo()), this.offSlide()
            },
            onSelectBtnsClick: function(n) {
                var o = this.options.cookies;
                this.selectedSiteCode = e(n.currentTarget).attr(o.siteCode), this.setParamsCookie(o.siteCode, this.selectedSiteCode, 999), this.setCookieGeo(), this.isTypeManage() || this.setCookieAccept()
            },
            isAcceptedGeo: function() {
                return !!a.cookie.getCookie(this.options.cookies.accepted)
            },
            isAcceptedCommon: function() {
                return !!a.cookie.getCookie(this.options.cookies.commonaccepted)
            },
            isAcceptedCountries: function() {
                return e.inArray(this.currentSiteCode, this.acceptedCountries) < 0 ? !1 : !0
            },
            setParamsCookie: function(n, e, o) {
                var t = new Date,
                    a = window.location.protocol + "//" + window.location.host + "/" + this.selectedSiteCode;
                t.setDate(t.getDate() + parseInt(o)), document.cookie = n + "=" + escape(e) + "; path=/; expires=" + t.toGMTString() + ";", window.location.href = a
            },
            getParam: function(n) {
                var e = {};
                return document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function() {
                    function n(n) {
                        return decodeURIComponent(n.split("+").join(" "))
                    }
                    e[n(arguments[1])] = n(arguments[2])
                }), e[n]
            },
            onSlide: function() {
                this.$body.addClass(t.SUPPORT.COOKIE_WARNING), this.isTypeDimmed() && this.$dimmed.show()
            },
            offSlide: function() {
                this.$body.removeClass(t.SUPPORT.COOKIE_WARNING), this.$container.on("transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd", e.proxy(this.offSlideTransitionEnd, this)), this.$dimmed.hide()
            },
            offSlideTransitionEnd: function() {
                this.$container.off("transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd"), this.$container.css("display", "none")
            },
            selectListToggle: function() {
                this.$selectBtnWrap.toggleClass("s-select-open")
            },
            selectListOpen: function() {
                var n = this.options.selectListOpenClass,
                    o = this.$selectBtnWrap;
                if (o.is(e("." + n))) return void this.selectListClose();
                this.$selectBtnWrap.addClass(n);
                var t = a.winSize().h - o.offset().top + e(window).scrollTop(),
                    c = this.$visitBtnsWrap.find("button").outerHeight() * this.$visitBtnsWrap.find("button").length;
                c > t && o.addClass("s-fixed"), this.$visitBtnsWrap.find("button").eq(0).focus()
            },
            selectListClose: function() {
                this.$selectBtnWrap.removeClass(this.options.selectListOpenClass), this.$selectBtnWrap.removeClass("s-fixed")
            }
        }
    }(), e(function() {
        o.cookieGeoNew.init(e(".cm-cookie-geo"))
    });
    var c = [{
        site_code: "CA_FR",
        global: {
            country_name: "Canada",
            lang: "French"
        },
        local: {
            country_name: "Canada",
            lang: "Français"
        },
        country_codes: ["ca"]
    }, {
        site_code: "CA",
        global: {
            country_name: "Canada",
            lang: "English"
        },
        local: {
            country_name: "Canada",
            lang: "English"
        },
        country_codes: ["ca"]
    }, {
        site_code: "MX",
        global: {
            country_name: "Mexico",
            lang: "Spanish"
        },
        local: {
            country_name: "México",
            lang: "Españo"
        },
        country_codes: ["mx"]
    }, {
        site_code: "BR",
        global: {
            country_name: "Brazil",
            lang: "Portuguese"
        },
        local: {
            country_name: "Brasil",
            lang: "Português"
        },
        country_codes: ["br"]
    }, {
        site_code: "LATIN",
        global: {
            country_name: "Latin America",
            lang: "Spanish"
        },
        local: {
            country_name: "Latin",
            lang: "Español"
        },
        country_codes: ["gt", "ni", "do", "bo", "ec", "sv", "cr", "pa", "hn"]
    }, {
        site_code: "LATIN_EN",
        global: {
            country_name: "Latin America",
            lang: "English"
        },
        local: {
            country_name: "Latin",
            lang: "English"
        },
        country_codes: ["gy", "gp", "mq", "bb", "bm", "bz", "lc", "sr", "aw", "ht", "ag", "jm", "ky", "tt"]
    }, {
        site_code: "CO",
        global: {
            country_name: "Colombia",
            lang: "Spanish"
        },
        local: {
            country_name: "Colombia",
            lang: "Español"
        },
        country_codes: ["co"]
    }, {
        site_code: "AR",
        global: {
            country_name: "Argentina",
            lang: "Spanish"
        },
        local: {
            country_name: "Argentina",
            lang: "Español"
        },
        country_codes: ["ar"]
    }, {
        site_code: "UY",
        global: {
            country_name: "Uruguay",
            lang: "Spanish"
        },
        local: {
            country_name: "Uruguay",
            lang: "Español"
        },
        country_codes: ["uy"]
    }, {
        site_code: "PY",
        global: {
            country_name: "Paraguay",
            lang: "Spanish"
        },
        local: {
            country_name: "Paraguay",
            lang: "Español"
        },
        country_codes: ["py"]
    }, {
        site_code: "CL",
        global: {
            country_name: "Chile",
            lang: "Spanish"
        },
        local: {
            country_name: "Chile",
            lang: "Español"
        },
        country_codes: ["cl"]
    }, {
        site_code: "PE",
        global: {
            country_name: "Peru",
            lang: "Spanish"
        },
        local: {
            country_name: "Perú ",
            lang: "Español"
        },
        country_codes: ["pe"]
    }, {
        site_code: "SG",
        global: {
            country_name: "Singapore",
            lang: "English"
        },
        local: {
            country_name: "Singapore",
            lang: "English"
        },
        country_codes: ["sg"]
    }, {
        site_code: "AU",
        global: {
            country_name: "Australia",
            lang: "English"
        },
        local: {
            country_name: "Australia",
            lang: "English"
        },
        country_codes: ["au"]
    }, {
        site_code: "NZ",
        global: {
            country_name: "New Zealand",
            lang: "English"
        },
        local: {
            country_name: "New Zealand",
            lang: "English"
        },
        country_codes: ["nz"]
    }, {
        site_code: "ID",
        global: {
            country_name: "Indonesia",
            lang: "Indonesian"
        },
        local: {
            country_name: "Indonesia",
            lang: "Bahasa Indonesia"
        },
        country_codes: ["id"]
    }, {
        site_code: "TH",
        global: {
            country_name: "Thailand",
            lang: "Thai"
        },
        local: {
            country_name: "ประเทศไทย",
            lang: "ไทย"
        },
        country_codes: ["th"]
    }, {
        site_code: "VN",
        global: {
            country_name: "Vietnam",
            lang: "Vietnamese"
        },
        local: {
            country_name: "Việt Nam",
            lang: "Tiếng Việt"
        },
        country_codes: ["vn"]
    }, {
        site_code: "MY",
        global: {
            country_name: "Malaysia",
            lang: "English"
        },
        local: {
            country_name: "Malaysia",
            lang: "English"
        },
        country_codes: ["my"]
    }, {
        site_code: "MM",
        global: {
            country_name: "Myanmar",
            lang: "Burmese"
        },
        local: {
            country_name: "Myanmar",
            lang: "Burmese"
        },
        country_codes: ["mm"]
    }, {
        site_code: "JP",
        global: {
            country_name: "Japan",
            lang: "Japanese"
        },
        local: {
            country_name: "日本",
            lang: "日本語"
        },
        country_codes: ["jp"]
    }, {
        site_code: "IN",
        global: {
            country_name: "India",
            lang: "English"
        },
        local: {
            country_name: "India",
            lang: "English"
        },
        country_codes: ["in", "np", "bd", "lk"]
    }, {
        site_code: "UK",
        global: {
            country_name: "United Kingdom",
            lang: "English"
        },
        local: {
            country_name: "United Kingdom",
            lang: "English"
        },
        country_codes: ["gb", "uk"]
    }, {
        site_code: "IE",
        global: {
            country_name: "Ireland",
            lang: "English"
        },
        local: {
            country_name: "Ireland",
            lang: "English"
        },
        country_codes: ["ie"]
    }, {
        site_code: "IT",
        global: {
            country_name: "Italy",
            lang: "Italian"
        },
        local: {
            country_name: "Italia",
            lang: "Italiano"
        },
        country_codes: ["it", "mt"]
    }, {
        site_code: "ES",
        global: {
            country_name: "Spain",
            lang: "Spanish"
        },
        local: {
            country_name: "Espana",
            lang: "Espanol"
        },
        country_codes: ["es"]
    }, {
        site_code: "HU",
        global: {
            country_name: "Hungary",
            lang: "Hungarian"
        },
        local: {
            country_name: "Magyarország",
            lang: "Magyar"
        },
        country_codes: ["hu"]
    }, {
        site_code: "DE",
        global: {
            country_name: "Germany",
            lang: "German"
        },
        local: {
            country_name: "Deutschland",
            lang: "Deutsch"
        },
        country_codes: ["de"]
    }, {
        site_code: "SE",
        global: {
            country_name: "Sweden",
            lang: "Swedish"
        },
        local: {
            country_name: "Sverige",
            lang: "Svenska"
        },
        country_codes: ["se"]
    }, {
        site_code: "DK",
        global: {
            country_name: "Denmark",
            lang: "Danish"
        },
        local: {
            country_name: "Danmark",
            lang: "Dansk"
        },
        country_codes: ["dk"]
    }, {
        site_code: "FI",
        global: {
            country_name: "Finland",
            lang: "Finnish"
        },
        local: {
            country_name: "Suomi",
            lang: "Suomi"
        },
        country_codes: ["fi"]
    }, {
        site_code: "NO",
        global: {
            country_name: "Norway",
            lang: "Norwegian"
        },
        local: {
            country_name: "Norge",
            lang: "Norsk"
        },
        country_codes: ["no"]
    }, {
        site_code: "FR",
        global: {
            country_name: "France",
            lang: "French"
        },
        local: {
            country_name: "France",
            lang: "Français"
        },
        country_codes: ["fr"]
    }, {
        site_code: "PT",
        global: {
            country_name: "Portugal",
            lang: "Portuguese"
        },
        local: {
            country_name: "Portugal",
            lang: "Português"
        },
        country_codes: ["pt"]
    }, {
        site_code: "PL",
        global: {
            country_name: "Poland",
            lang: "Polish"
        },
        local: {
            country_name: "Polska",
            lang: "Polski"
        },
        country_codes: ["pl"]
    }, {
        site_code: "GR",
        global: {
            country_name: "Greece",
            lang: "Greek"
        },
        local: {
            country_name: "Ελλάδα",
            lang: "Ελληνικά"
        },
        country_codes: ["gr"]
    }, {
        site_code: "CZ",
        global: {
            country_name: "Czech",
            lang: "Czech"
        },
        local: {
            country_name: "Česká republika",
            lang: "Čeština"
        },
        country_codes: ["cz"]
    }, {
        site_code: "SK",
        global: {
            country_name: "Slovakia",
            lang: "Slovakian"
        },
        local: {
            country_name: "Slovensko",
            lang: "Slovenčina"
        },
        country_codes: ["sk"]
    }, {
        site_code: "RO",
        global: {
            country_name: "Romania",
            lang: "Romanian"
        },
        local: {
            country_name: "Romania",
            lang: "Romanian"
        },
        country_codes: ["ro"]
    }, {
        site_code: "BG",
        global: {
            country_name: "Bulgaria",
            lang: "Bulgarian"
        },
        local: {
            country_name: "България",
            lang: "Български"
        },
        country_codes: ["bg"]
    }, {
        site_code: "AT",
        global: {
            country_name: "Austria",
            lang: "German"
        },
        local: {
            country_name: "Österreich",
            lang: "Deutsch"
        },
        country_codes: ["at"]
    }, {
        site_code: "CH",
        global: {
            country_name: "Switzerland",
            lang: "German"
        },
        local: {
            country_name: "Schweiz",
            lang: "Deutsch"
        },
        country_codes: ["ch"]
    }, {
        site_code: "CH_FR",
        global: {
            country_name: "Switzerland",
            lang: "French"
        },
        local: {
            country_name: "Suisse",
            lang: "Francaise"
        },
        country_codes: ["ch"]
    }, {
        site_code: "BE",
        global: {
            country_name: "Belgium",
            lang: "Dutch"
        },
        local: {
            country_name: "België",
            lang: "Nederlands"
        },
        country_codes: ["be"]
    }, {
        site_code: "BE_FR",
        global: {
            country_name: "Belgium",
            lang: "French"
        },
        local: {
            country_name: "Belgium",
            lang: "French"
        },
        country_codes: ["lu"]
    }, {
        site_code: "NL",
        global: {
            country_name: "Netherlands",
            lang: "Dutch"
        },
        local: {
            country_name: "Nederland",
            lang: "Nederlands"
        },
        country_codes: ["nl"]
    }, {
        site_code: "LV",
        global: {
            country_name: "Latvia",
            lang: "Latvian"
        },
        local: {
            country_name: "Latvija",
            lang: "Latviešu"
        },
        country_codes: ["lv"]
    }, {
        site_code: "LT",
        global: {
            country_name: "Lithuania",
            lang: "Lithuanian"
        },
        local: {
            country_name: "Lietuva",
            lang: "Lietuvių"
        },
        country_codes: ["lt"]
    }, {
        site_code: "EE",
        global: {
            country_name: "Estonia",
            lang: "Estonian"
        },
        local: {
            country_name: "Eesti",
            lang: "Eesti"
        },
        country_codes: ["ee"]
    }, {
        site_code: "RS",
        global: {
            country_name: "Serbia",
            lang: "Serbian"
        },
        local: {
            country_name: "Cрбија",
            lang: "Cрпски"
        },
        country_codes: ["rs"]
    }, {
        site_code: "HR",
        global: {
            country_name: "Croatia",
            lang: "Croatian"
        },
        local: {
            country_name: "Hrvatska",
            lang: "Hrvatski"
        },
        country_codes: ["hr"]
    }, {
        site_code: "SI",
        global: {
            country_name: "Slovenia",
            lang: "Slovenijan"
        },
        local: {
            country_name: "Slovenija",
            lang: "Slovenščina"
        },
        country_codes: ["sl"]
    }, {
        site_code: "AL",
        global: {
            country_name: "Albania",
            lang: "Albania"
        },
        local: {
            country_name: "Shqipëri",
            lang: "Shqi"
        },
        country_codes: ["al"]
    }, {
        site_code: "RU",
        global: {
            country_name: "Russia",
            lang: "Russian"
        },
        local: {
            country_name: "Россия",
            lang: "Русский"
        },
        country_codes: ["ru"]
    }, {
        site_code: "UA",
        global: {
            country_name: "Ukraine",
            lang: "Ukrainian"
        },
        local: {
            country_name: "Україна",
            lang: "Українська"
        },
        country_codes: ["ua"]
    }, {
        site_code: "UA_RU",
        global: {
            country_name: "Ukraine",
            lang: "Russian"
        },
        local: {
            country_name: "Украина",
            lang: "Pусский"
        },
        country_codes: ["ua"]
    }, {
        site_code: "KZ_RU",
        global: {
            country_name: "Kazakhstan",
            lang: "Russian"
        },
        local: {
            country_name: "Kazakhstan",
            lang: "Pусский"
        },
        country_codes: ["kz"]
    }, {
        site_code: "KZ_KZ",
        global: {
            country_name: "Kazakhstan",
            lang: "Kazakh"
        },
        local: {
            country_name: "Kazakhstan",
            lang: "Қазақ"
        },
        country_codes: ["kz"]
    }, {
        site_code: "AE",
        global: {
            country_name: "UAE",
            lang: "English"
        },
        local: {
            country_name: "UAE",
            lang: "English"
        },
        country_codes: ["bh", "ae", "ye", "om", "qa", "kw"]
    }, {
        site_code: "AE_AR",
        global: {
            country_name: "UAE",
            lang: "Arabic"
        },
        local: {
            country_name: "الإمارات ",
            lang: "العربية"
        },
        country_codes: ["ae"]
    }, {
        site_code: "IL",
        global: {
            country_name: "Israel",
            lang: "Hebrew"
        },
        local: {
            country_name: "ישראל",
            lang: "עברית"
        },
        country_codes: ["il"]
    }, {
        site_code: "SA",
        global: {
            country_name: "Saudi Arabia",
            lang: "Arabic"
        },
        local: {
            country_name: "المملكة العربية السعودية",
            lang: "عربي"
        },
        country_codes: ["sa", "ly"]
    }, {
        site_code: "SA_EN",
        global: {
            country_name: "Saudi Arabia",
            lang: "English"
        },
        local: {
            country_name: "Saudi Arabia",
            lang: "English"
        },
        country_codes: ["sa"]
    }, {
        site_code: "TR",
        global: {
            country_name: "Turkey",
            lang: "Turkish"
        },
        local: {
            country_name: "Türkiye",
            lang: "Türkçe"
        },
        country_codes: ["tr"]
    }, {
        site_code: "IRAN",
        global: {
            country_name: "Iran",
            lang: "Persian"
        },
        local: {
            country_name: "ایران",
            lang: "فارسي"
        },
        country_codes: ["lr"]
    }, {
        site_code: "LEVANT",
        global: {
            country_name: "Levant",
            lang: "English"
        },
        local: {
            country_name: "Levant",
            lang: "English"
        },
        country_codes: ["lb", "jo", "iq", "ps"]
    }, {
        site_code: "LEVANT_AR",
        global: {
            country_name: "Levant",
            lang: "Arabic"
        },
        local: {
            country_name: "Levant",
            lang: "Arabic"
        },
        country_codes: ["lb", "jo", "iq", "ps"]
    }, {
        site_code: "PK",
        global: {
            country_name: "Pakistan",
            lang: "English"
        },
        local: {
            country_name: "Pakistan",
            lang: "English"
        },
        country_codes: ["pk", "af"]
    }, {
        site_code: "EG",
        global: {
            country_name: "Egypt",
            lang: "Arabic"
        },
        local: {
            country_name: "البلد مصر",
            lang: "العربية"
        },
        country_codes: ["eg", "so", "er"]
    }, {
        site_code: "LB",
        global: {
            country_name: "Lebanon",
            lang: "Lebanon"
        },
        local: {
            country_name: "Lebanon",
            lang: "English"
        },
        country_codes: ["lb"]
    }, {
        site_code: "N_AFRICA",
        global: {
            country_name: "Africa",
            lang: "French"
        },
        local: {
            country_name: "Maroc",
            lang: "Français"
        },
        country_codes: ["ma", "dz", "tn"]
    }, {
        site_code: "AFRICA_EN",
        global: {
            country_name: "Africa Pan",
            lang: "English"
        },
        local: {
            country_name: "Africa",
            lang: "English"
        },
        country_codes: ["gh", "gm", "na", "ng", "lr", "mw", "bw", "sz", "sl", "et", "ug", "zm", "zw", "ke", "tz"]
    }, {
        site_code: "AFRICA_FR",
        global: {
            country_name: "Africa Pan",
            lang: "French"
        },
        local: {
            country_name: "Afrique",
            lang: "Français"
        },
        country_codes: ["ga", "gn", "ne", "rw", "re", "mg", "yt", "ml", "mu", "mr", "bj", "bi", "bf", "sn", "sc", "cf", "dj", "td", "cm", "km", "ci", "cg", "cd", "tg"]
    }, {
        site_code: "AFRICA_PT",
        global: {
            country_name: "Africa Pan",
            lang: "Portuguese"
        },
        local: {
            country_name: "África",
            lang: "Português"
        },
        country_codes: ["gw", "mz", "ao", "cv"]
    }, {
        site_code: "ZA",
        global: {
            country_name: "South Africa",
            lang: "English"
        },
        local: {
            country_name: "South Africa",
            lang: "English"
        },
        country_codes: ["za"]
    }, {
        site_code: "US",
        global: {
            country_name: "USA",
            lang: "English"
        },
        local: {
            country_name: "USA",
            lang: "English"
        },
        country_codes: ["us"]
    }, {
        site_code: "CN",
        global: {
            country_name: "China",
            lang: "Chinese"
        },
        local: {
            country_name: "中国",
            lang: "中文"
        },
        country_codes: ["cn"]
    }, {
        site_code: "HK",
        global: {
            country_name: "Hong Kong",
            lang: "Chinese"
        },
        local: {
            country_name: "香港",
            lang: "繁體中文"
        },
        country_codes: ["hk"]
    }, {
        site_code: "HK_EN",
        global: {
            country_name: "Hong Kong",
            lang: "English"
        },
        local: {
            country_name: "Hong Kong",
            lang: "English"
        },
        country_codes: ["hk"]
    }, {
        site_code: "TW",
        global: {
            country_name: "Taiwan",
            lang: "Chinese"
        },
        local: {
            country_name: "台灣",
            lang: "繁體中文"
        },
        country_codes: ["tw"]
    }, {
        site_code: "SEC",
        global: {
            country_name: "Korea",
            lang: "Korean"
        },
        local: {
            country_name: "대한민국",
            lang: "한국어"
        },
        country_codes: ["kr"]
    }, {
        site_code: "PH",
        global: {
            country_name: "Philippines",
            lang: "English"
        },
        local: {
            country_name: "Philippines",
            lang: "English"
        },
        country_codes: ["ph"]
    }, {
        site_code: "VE",
        global: {
            country_name: "Venezuela",
            lang: "English"
        },
        local: {
            country_name: "Venezuela",
            lang: "English"
        },
        country_codes: ["sg", "ve"]
    }]
}(window, jQuery);
var SITE_CD = "";
SITE_CD = "" != $("#siteCode").val() && void 0 != $("#siteCode").val() ? $("#siteCode").val() : "sec";
var USE_ESTORE = !0,
    DOMAIN = "";
DOMAIN = "" != $("#domain").val() && void 0 != $("#domain").val() ? $("#domain").val() : "www.samsung.com";
var STORE_DOMAIN = "";
"N" == $("#useStore").val() && (USE_ESTORE = !1), STORE_DOMAIN = "" != $("#storeDomain").val() ? $("#storeDomain").val() : location.protocol + "shop.samsung.com";
var LOGIN = {
        msg: {
            signBtnText1: $("#signBtnText1").val(),
            signBtnText2: $("#signBtnText2").val(),
            errorTitleText: $("#errorTitleText").val(),
            errorText1: $("#errorText1").val(),
            errorText2: $("#errorText2").val(),
            errorText3: $("#errorText3").val(),
            errorText4: $("#errorText4").val()
        }
    },
    SEC_LOCAL_URL_CHECKMEMBERSTATE = "http://local.sec.samsung.com/comLocal/checkMemberStateAjax.do",
    SEC_LOCAL_URL_SIGNIN = "http://local.sec.samsung.com/comLocal/loginCheck.do";
$("#signInForm input[name=domain]").val(DOMAIN), $("#joinForm input[name=domain]").val(DOMAIN), $("#findAccountForm input[name=domain]").val(DOMAIN),
    function(o, e) {
        "use strict";
        o(function() {
            o(".layer_popup .close, .layer_popup .icon-close-x, .layer_popup .alert-ok-button").click(function() {
                return "close" == o(this).data("popup") && o(".accesseFocusTarget").trigger("focus"), o(".layer_popup").hide(), o(".lightbox-skrim").hide(), !1
            })
        })
    }(jQuery, window);
var ss = $;
! function(e) {
    e(document).ajaxError(function(e, t, o, n) {
        if (t.responseText) try {
            var i = JSON.parse(t.responseText);
            i && i.jsonData && i.jsonData.description && (location.href = i.jsonData.description)
        } catch (r) {}
    }), ss.Main = function() {
        function t() {
            ss.clickEvent = navigator && "Win" === navigator.platform.substring(0, 3) ? "click" : "fastclick", ss.mouseenterEvent = navigator && "Win" === navigator.platform.substring(0, 3) ? "mouseenter" : "fastclick", ss.mouseleaveEvent = navigator && "Win" === navigator.platform.substring(0, 3) ? "mouseleave" : "fastclick", (new ss.PopAlign).init(), o()
        }

        function o() {
            function t(e) {
                i || (window.requestAnimationFrame(function() {
                    r && (eventBridge.trigger(jQuery.Event(eventDictionary.global.SCROLL), ss.metrics), r = !1), s && (eventBridge.trigger(jQuery.Event(eventDictionary.global.RESIZE), ss.metrics), s = !1), i = !1
                }), i = !0)
            }
            var o = {
                    width: 0,
                    height: 0
                },
                n = function() {
                    return function(e, t) {
                        t || (t = 100);
                        var o = function() {
                                return +new Date
                            }(),
                            n = null;
                        return function() {
                            var i = arguments;
                            n && (clearTimeout(n), n = null);
                            var r = function() {
                                return +new Date
                            }();
                            r - o > t ? (e.apply(this, i), o = r) : n = setTimeout(function() {
                                e.apply(this, i)
                            }, t)
                        }
                    }
                }(),
                i = !1,
                r = !1,
                s = !1;
            e(window).on("resize", n(function(e) {
                var n = ss.Detect();
                if (o.width !== n.width || o.height !== n.height)
                    if (o.width = n.width, o.height = n.height, s = !0, "undefined" != typeof window.requestAnimationFrame) t();
                    else {
                        var i = jQuery.Event(eventDictionary.global.RESIZE);
                        e.originalEvent = {}, i.originalEvent = e, eventBridge.trigger(i, n)
                    }
            }, 250));
            var a = 0;
            e(window).on("scroll", n(function(e) {
                var o = ss.Detect();
                r = !0, "undefined" != typeof window.requestAnimationFrame ? t() : eventBridge.trigger(jQuery.Event(eventDictionary.global.SCROLL), o), clearTimeout(a)
            }, 250))
        }
        t()
    }
}(jQuery);
var eventBridge, eventDictionary = {
    global: {
        RESIZE: "resize",
        ROTATE: "rotate",
        SCROLL: "scroll"
    },
    autocomplete: {
        REQUEST_AUTOCOMPLETE: "request_autocomplete",
        AUTOCOMPLETE_RESULT: "autocomplete_result",
        AUTOCOMPLETE_ERROR: "autocomplete_error",
        AUTOCOMPLETE_HIDE: "autocomplete_hide"
    }
};
$(function() {
    eventBridge = $("<div/>");
    new ss.Main
});
var ss = $;
! function(e) {
    var t = e(window),
        o = null;
    ss.Detect = function() {
        function n() {
            return S = null !== f() ? e(window).width() : window.innerWidth ? window.innerWidth : document.documentElement.clientWidth
        }

        function i() {
            var e = /iPhone|iPod|iPad/.test(window.navigator.userAgent);
            return e
        }

        function r() {
            var e = /(iPad|iPhone);.*CPU.*OS 7_\d/i.test(window.navigator.userAgent);
            return e
        }

        function s() {
            if (!u()) return !1;
            var e = (/MSIE\s([\d.]+)/.test(window.navigator.userAgent), Number(RegExp.$1));
            return 9 > e ? !0 : !1
        }

        function a() {
            var e = (/MSIE\s([\d.]+)/.test(window.navigator.userAgent), Number(RegExp.$1));
            return 8 === e ? e : void 0
        }

        function c() {
            var e = (/MSIE\s([\d.]+)/.test(window.navigator.userAgent), Number(RegExp.$1));
            return 9 === e ? e : !1
        }

        function u() {
            var e = navigator.appName,
                t = new RegExp("Trident/.*rv:([0-9]{1,}[/.0-9]{0,})"),
                o = !1;
            return ("Microsoft Internet Explorer" === e || "Netscape" === e && null !== t.exec(navigator.userAgent)) && (o = !0), o
        }

        function p() {
            return navigator.userAgent.match(/Android/i)
        }

        function v() {
            return navigator.userAgent.match(/BlackBerry/i)
        }

        function d() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i)
        }

        function l() {
            return navigator.userAgent.match(/Opera Mini/i)
        }

        function h() {
            return navigator.userAgent.match(/IEMobile/i)
        }

        function f() {
            return void 0 === T && (T = p() || v() || d() || l() || h()), T
        }

        function g() {
            var e = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
            return e ? e : void 0
        }

        function w() {
            return t.scrollTop()
        }

        function m() {
            return window.location.pathname.split("/")[1]
        }

        function O(t) {
            var o = t.offset(),
                n = 0,
                i = e(".jump-module.docked");
            return i.length > 0 && (n += i.outerHeight()), o.top - n
        }
        var E, y, b, P, T, S, A = t.width(),
            I = t.height(),
            D = A > I ? "landscape" : "portrait",
            H = "undefined" != typeof ss.metrics ? ss.metrics.device : "desktop";
        n(), o = o ? o : e(".body_wrapper"), 480 > S ? (b = "mobile", P = 1) : 768 > S ? (b = "mobile-landscape", P = 1) : 1024 > S ? (b = "tablet-portrait", P = 2) : 1280 >= S ? (b = "tablet-landscape", P = 3) : (b = "desktop", P = 4), y = ss.metrics ? ss.metrics.device : b;
        var x = w();
        E = o.width();
        var R = {
            deviceChanged: H !== b,
            device: b,
            prevDevice: y,
            deviceLayoutId: P,
            wrapperWidth: E,
            width: S,
            realWidth: n,
            height: I,
            aspectRatio: D,
            isIOS: i,
            isIOS7: r,
            isIE8Less: s,
            isIE: u,
            isIE8: a,
            isIE9: c,
            Android: p,
            BlackBerry: v,
            iOS: d,
            Opera: l,
            Windows: h,
            isMobile: f,
            isSafari: g,
            scrollTop: x,
            scrollBottom: I + x,
            elemTop: O,
            region: m,
            LAYOUT_ID_MOBILE: 1,
            LAYOUT_ID_TBLT_PORT: 2,
            LAYOUT_ID_TBLT_LAND: 3,
            LAYOUT_ID_DESKTOP: 4
        };
        return ss.metrics = R, R
    }, ss.scrollTo = function(t, o, n, i, r) {
        var s = o || e(t).offset().top,
            a = n || 800,
            c = (i ? i() : null, r || 0);
        ss.htmlBody.animate({
            scrollTop: ss.htmlBody.scrollTop() + s - c
        }, a, function() {})
    }, ss.scrollTop = function(t, o, n, i) {
        if (e("#content").find(".filter-sortby")) var r = e("#resultBar").innerHeight();
        else var r = 0; {
            var s = o || e(t).offset().top,
                a = n || 800;
            i ? i() : null
        }
        ss.htmlBody.animate({
            scrollTop: s - r
        }, a, function() {})
    }, ss.PopAlign = function() {
        return {
            init: function() {
                var e = this;
                e.bindEvents()
            },
            bindEvents: function() {
                function t(t) {
                    t || (t = e(this));
                    var o = ss.Detect(),
                        n = e(window).width(),
                        i = 0 === o.scrollTop ? e("#content").offset().top > 0 ? 0 : -e("#content").offset().top : o.scrollTop;
                    8 === o.isIE8() && n > 1280 && (n = 1280), null !== o.isMobile() && t.css("max-width", n);
                    var r = parseInt(.5 * (n - t.width())),
                        s = parseInt(.5 * (o.height - t.height())) + i;
                    0 > s && (s = 0), t.css({
                        top: s + "px",
                        left: r + "px"
                    })
                }
                e(".popAlign").each(function() {
                    this.popAlign = t
                }), eventBridge.on(eventDictionary.global.RESIZE, function(o, n) {
                    e("html").hasClass("layer-open") || e(".popAlign").each(function() {
                        t(e(this))
                    })
                }), eventBridge.trigger(jQuery.Event(eventDictionary.global.RESIZE), ss.metrics)
            }
        }
    };
    var n = {
        click: "click"
    };
    ss.E = n
}(jQuery), ss.Popover = function(e, t) {
    function o() {
        var e = setTimeout(function() {
            clearTimeout(e), r.focus()
        }, 50)
    }

    function n() {
        a && clearTimeout(a), a = setTimeout(function() {
            var e = $(".popover.in .popover-content").find("button, a, input, select, [tabindex]").first();
            e.focus()
        }, 100)
    }

    function i() {
        t.hoverActivated = !0, t.handleFocusOnHide = "function" == typeof t.handleFocusOnHide ? t.handleFocusOnHide : o, t.handleFocusOnShow = "function" == typeof t.handleFocusOnShow ? t.handleFocusOnShow : n;
        try {
            r = $(e)
        } catch (i) {
            r = $(document.getElementById(e.substr(1)))
        }
        r.popover(t), r.on("show.bs.popover", function(e) {
            c.interOp2Show && "function" == typeof c.interOp2Show ? c.interOp2Show(c) : (ss.Popover.hideActive(e), eventBridge.trigger(jQuery.Event(eventDictionary.popover.EVENT_POPOVER_SHOW), this), s = ss.accessibilityManager.fromKeyboard(e))
        }), r.on("hidden.bs.popover", function(e) {
            return c.tapProtect ? (c.interOp2Hide && "function" == typeof c.interOp2Hide && c.interOp2Hide(c), void(u = !1)) : (ss.Popover.activePopover = void 0, eventBridge.trigger(jQuery.Event(eventDictionary.popover.EVENT_POPOVER_HIDE), this), u = !1, void 0)
        }), r.on("shown.bs.popover", function() {
            ss.Popover.activePopover = c, s && t.handleFocusOnShow(), u = !0
        }), t.lightbox && r.on("shown.bs.popover", function() {
            var e = containerP = $(".popover.in");
            t.container && (e = $(t.container).find(".popover.in"), containerP = $(t.container)), e.addClass("lightbox"), e.find(".arrow").hide();
            var o = $(window).outerWidth();
            o > 1280 && -1 != navigator.userAgent.indexOf("MSIE 8") && (o = 1280);
            var n = $(window).scrollTop(),
                i = n + Math.round(($(window).outerHeight() - e.outerHeight()) / 2);
            0 > i ? i = 0 : n > i && (i = n), e.css({
                left: -1 * e.parent().offset().left + Math.round((o - e.outerWidth()) / 2),
                top: i
            })
        }), eventBridge.on(eventDictionary.global.RESIZE, function(e) {
            if (u) var t = setTimeout(function() {
                clearTimeout(t);
                var e = !1;
                document.activeElement && ("textarea" == document.activeElement.tagName.toLowerCase() ? e = !0 : "input" == document.activeElement.tagName.toLowerCase() && "text" == document.activeElement.type.toLowerCase() && (e = !0)), e || -1 != navigator.userAgent.indexOf("MSIE 8") || r.popover("reposition")
            }, 400)
        })
    }
    var r, s, a = null,
        c = this,
        u = !1;
    return this.targetElementSelector = e, this.hideOnScroll = t.hideOnScroll === !0, this.interOp2Show = t.interOp2Show, this.interOp2Hide = t.interOp2Hide, this.tapProtect = t.tapProtect, this.toggle = function() {
        r.popover("toggle")
    }, this.showOnly = function() {
        r.popover("showOnly"), u = !0
    }, this.show = function() {
        r.popover("show")
    }, this.hide = function(e, o) {
        c.tapProtect ? o === !0 && (r.popover("hide"), e && t.handleFocusOnHide()) : (r.popover("hide"), e && t.handleFocusOnHide())
    }, i(), this
};
var ss = $;
! function(e) {
    ss.Notification = function(t) {
        function o() {
            r = e("#" + t)
        }

        function n() {
            a = e('<div class="notification-background"></div>').hide(), s = e('<div id="open-notification" class="notification"><a class="close icon-close-x"></a></div>').hide(), s.append(r.html()), s.find(".close").on("click", i), e("body").append(a).append(s).css("overflow", "hidden"), a.slideDown(function() {
                s.fadeIn("fast")
            })
        }

        function i() {
            s.fadeOut("fast", function() {
                a.slideUp("fast", function() {
                    s.remove(), a.remove(), e("body").css("overflow", "")
                })
            })
        }
        var r, s, a;
        return o(), {
            show: n,
            hide: i
        }
    }, ss.Popover = function(t, o) {
        function n() {
            var e = setTimeout(function() {
                clearTimeout(e), s.focus()
            }, 50)
        }

        function i() {
            c && clearTimeout(c), c = setTimeout(function() {
                var t = e(".popover.in .popover-content").find("button, a, input, select, [tabindex]").first();
                t.focus()
            }, 100)
        }

        function r() {
            o.hoverActivated = !0, o.handleFocusOnHide = "function" == typeof o.handleFocusOnHide ? o.handleFocusOnHide : n, o.handleFocusOnShow = "function" == typeof o.handleFocusOnShow ? o.handleFocusOnShow : i;
            try {
                s = e(t)
            } catch (r) {
                s = e(document.getElementById(t.substr(1)))
            }
            s.popover(o), s.on("show.bs.popover", function(e) {
                u.interOp2Show && "function" == typeof u.interOp2Show ? u.interOp2Show(u) : (ss.Popover.hideActive(e), eventBridge.trigger(jQuery.Event(eventDictionary.popover.EVENT_POPOVER_SHOW), this), a = ss.accessibilityManager.fromKeyboard(e))
            }), s.on("hidden.bs.popover", function(e) {
                return u.tapProtect ? (u.interOp2Hide && "function" == typeof u.interOp2Hide && u.interOp2Hide(u), void(p = !1)) : (ss.Popover.activePopover = void 0, eventBridge.trigger(jQuery.Event(eventDictionary.popover.EVENT_POPOVER_HIDE), this), p = !1, void 0)
            }), s.on("shown.bs.popover", function() {
                ss.Popover.activePopover = u, a && o.handleFocusOnShow(), p = !0
            }), o.lightbox && s.on("shown.bs.popover", function() {
                var t = containerP = e(".popover.in");
                o.container && (t = e(o.container).find(".popover.in"), containerP = e(o.container)), t.addClass("lightbox"), t.find(".arrow").hide();
                var n = e(window).outerWidth();
                n > 1280 && -1 != navigator.userAgent.indexOf("MSIE 8") && (n = 1280);
                var i = e(window).scrollTop(),
                    r = i + Math.round((e(window).outerHeight() - t.outerHeight()) / 2);
                0 > r ? r = 0 : i > r && (r = i), t.css({
                    left: -1 * t.parent().offset().left + Math.round((n - t.outerWidth()) / 2),
                    top: r
                })
            }), eventBridge.on(eventDictionary.global.RESIZE, function(e) {
                if (p) var t = setTimeout(function() {
                    clearTimeout(t);
                    var e = !1;
                    document.activeElement && ("textarea" == document.activeElement.tagName.toLowerCase() ? e = !0 : "input" == document.activeElement.tagName.toLowerCase() && "text" == document.activeElement.type.toLowerCase() && (e = !0)), e || -1 != navigator.userAgent.indexOf("MSIE 8") || s.popover("reposition")
                }, 400)
            })
        }
        var s, a, c = null,
            u = this,
            p = !1;
        return this.targetElementSelector = t, this.hideOnScroll = o.hideOnScroll === !0, this.interOp2Show = o.interOp2Show, this.interOp2Hide = o.interOp2Hide, this.tapProtect = o.tapProtect, this.toggle = function() {
            s.popover("toggle")
        }, this.showOnly = function() {
            s.popover("showOnly"), p = !0
        }, this.show = function() {
            s.popover("show")
        }, this.hide = function(e, t) {
            u.tapProtect ? t === !0 && (s.popover("hide"), e && o.handleFocusOnHide()) : (s.popover("hide"), e && o.handleFocusOnHide())
        }, r(), this
    }, ss.Popover.handleKbActions = function(t) {
        if (27 === t.which) ss.Popover.hideActive(!0);
        else if (9 === t.which) var o = setTimeout(function() {
            clearTimeout(o), e(":focus").parents(".popover.in").length || ss.Popover.hideActive(!0)
        }, 100)
    }, ss.Popover.hideActive = function() {
        var t = arguments[0],
            o = arguments[1];
        if ("boolean" == typeof t) {
            if ("object" == typeof o) return void(o.parents ? o.parents(".popover.in")[0] && o.parents(".popover.in")[0].chainObj && o.parents(".popover.in")[0].chainObj.hideOnly(!0) : e(".show.popover.in")[0] && e(".show.popover.in")[0].chainObj ? e(".show.popover.in")[0].chainObj.hideOnly(!0) : ss.Popover.activePopover && ss.Popover.activePopover.hide(t === !0, o))
        } else {
            if (!ss.Popover.activePopover) return;
            if (("scroll" === t.type || "resize" === t.type) && e("html").hasClass("touch")) return;
            if (("scroll" === t.type || "resize" === t.type) && (e(".popover.in").hasClass("lightbox") || e(".popover.in").attr("data-tap-scroll-override"))) return;
            if (e(".popover.in").hasClass("lightbox") && !e(t.target).is(".lightbox-skrim") && e(t.target).is(".close-button")) return
        }(t === !0 || "resize" === t.type || "scroll" === t.type && ss.Popover.activePopover.hideOnScroll || "scroll" !== t.type && "resize" !== t.type && 0 === e(t.target).closest(".popover, " + ss.Popover.activePopover.targetElementSelector).length) && ss.Popover.activePopover.hide(t === !0, t)
    }, e(function() {
        e("body").on("tap", function(e) {
            ss.Popover.hideActive(e)
        }), e(".scrollwrapper").on("scroll", function(e) {
            ss.Popover.hideActive(e)
        }), e("body").on("keydown", ".popover.in", function(e) {
            ss.Popover.handleKbActions(e)
        })
    })
}(jQuery);
var ss = $;
! function(e) {
    ss.Navigation = function() {
        {
            var t = (ss.metrics, e("body"));
            t.find(".gb-gnb"), t.find(".cookie-notice")
        }
        this.scrollToTop = function(t) {
            e("html, body").animate({
                scrollTop: 0
            }, t || 1e3)
        }
    }
}(jQuery);
var navigation;
$(function() {
    navigation = new ss.Navigation
});
var jaaulde = window.jaaulde || {};
jaaulde.utils = jaaulde.utils || {}, jaaulde.utils.cookies = function() {
        var e, t, o, n, i = {
            expiresAt: null,
            path: "/",
            domain: null,
            secure: !1
        };
        return e = function(e) {
            var t, o;
            return "object" != typeof e || null === e ? t = i : (t = {
                expiresAt: i.expiresAt,
                path: i.path,
                domain: i.domain,
                secure: i.secure
            }, "object" == typeof e.expiresAt && e.expiresAt instanceof Date ? t.expiresAt = e.expiresAt : "number" == typeof e.hoursToLive && 0 !== e.hoursToLive && (o = new Date, o.setTime(o.getTime() + 60 * e.hoursToLive * 60 * 1e3), t.expiresAt = o), "string" == typeof e.path && "" !== e.path && (t.path = e.path), "string" == typeof e.domain && "" !== e.domain && (t.domain = e.domain), e.secure === !0 && (t.secure = e.secure)), t
        }, t = function(t) {
            return t = e(t), ("object" == typeof t.expiresAt && t.expiresAt instanceof Date ? "; expires=" + t.expiresAt.toGMTString() : "") + "; path=" + t.path + ("string" == typeof t.domain ? "; domain=" + t.domain : "") + (t.secure === !0 ? "; secure" : "")
        }, o = function() {
            var e, t, o, n, i, r = {},
                c = document.cookie.split(";");
            for (e = 0; e < c.length; e += 1) {
                t = c[e].split("="), o = t[0].replace(/^\s*/, "").replace(/\s*$/, "");
                try {
                    n = decodeURIComponent(t[1])
                } catch (s) {
                    n = t[1]
                }
                if ("object" == typeof JSON && null !== JSON && "function" == typeof JSON.parse) try {
                    i = n, n = JSON.parse(n)
                } catch (u) {
                    n = i
                }
                r[o] = n
            }
            return r
        }, n = function() {}, n.prototype.get = function(e) {
            var t, n, i = o();
            if ("string" == typeof e) t = "undefined" != typeof i[e] ? i[e] : null;
            else if ("object" == typeof e && null !== e) {
                t = {};
                for (n in e) t[e[n]] = "undefined" != typeof i[e[n]] ? i[e[n]] : null
            } else t = i;
            return t
        }, n.prototype.filter = function(e) {
            var t, n = {},
                i = o();
            "string" == typeof e && (e = new RegExp(e));
            for (t in i) t.match(e) && (n[t] = i[t]);
            return n
        }, n.prototype.set = function(e, o, n) {
            if (("object" != typeof n || null === n) && (n = {}), "undefined" == typeof o || null === o) o = "", n.hoursToLive = -8760;
            else if ("string" != typeof o) {
                if ("object" != typeof JSON || null === JSON || "function" != typeof JSON.stringify) throw new Error("cookies.set() received non-string value and could not serialize.");
                o = JSON.stringify(o)
            }
            var i = t(n);
            document.cookie = e + "=" + encodeURIComponent(o) + i
        }, n.prototype.del = function(e, t) {
            var o, n = {};
            ("object" != typeof t || null === t) && (t = {}), "boolean" == typeof e && e === !0 ? n = this.get() : "string" == typeof e && (n[e] = !0);
            for (o in n) "string" == typeof o && "" !== o && this.set(o, null, t)
        }, n.prototype.test = function() {
            var e = !1,
                t = "cT",
                o = "data";
            return this.set(t, o), this.get(t) === o && (this.del(t), e = !0), e
        }, n.prototype.setOptions = function(t) {
            "object" != typeof t && (t = null), i = e(t)
        }, new n
    }(),
    function() {
        window.jQuery && ! function(e) {
            e.cookies = jaaulde.utils.cookies;
            var t = {
                cookify: function(t) {
                    return this.each(function() {
                        var o, n, i, r = ["name", "id"],
                            c = e(this);
                        for (o in r)
                            if (!isNaN(o) && (n = c.attr(r[o]), "string" == typeof n && "" !== n)) {
                                c.is(":checkbox, :radio") ? c.attr("checked") && (i = c.val()) : i = c.is(":input") ? c.val() : c.html(), ("string" != typeof i || "" === i) && (i = null), e.cookies.set(n, i, t);
                                break
                            }
                    })
                },
                cookieFill: function() {
                    return this.each(function() {
                        var t, o, n, i, r = ["name", "id"],
                            c = e(this);
                        for (o = function() {
                                return t = r.pop(), !!t
                            }; o();)
                            if (n = c.attr(t), "string" == typeof n && "" !== n) {
                                i = e.cookies.get(n), null !== i && (c.is(":checkbox, :radio") ? c.val() === i ? c.attr("checked", "checked") : c.removeAttr("checked") : c.is(":input") ? c.val(i) : c.html(i));
                                break
                            }
                    })
                },
                cookieBind: function(t) {
                    return this.each(function() {
                        var o = e(this);
                        o.cookieFill().change(function() {
                            o.cookify(t)
                        })
                    })
                }
            };
            e.each(t, function(t) {
                e.fn[t] = this
            })
        }(window.jQuery)
    }();
$.cookies.data = {
    SEARCH_NAME: "sk",
    NAVIGATION_NAME: "nh",
    PRIVATECODE_NAME: "pv",
    COMPARELIST_NAME: "cl",
    WISHLIST_NAME: "wl",
    INSTORE_PRIVATECODE_NAME: "ipv",
    STORE_REGION_NUM: "cnregionnum",
    STORE_REGION_CODE: "cnregion",
    STORE_REGION_NAME: "cnregionname",
    STORE_CITY_NUM: "cncitynamenum",
    STORE_CITY_CODE: "cncity",
    STORE_CITY_NAME: "cncityname",
    SEARCH_MAX_SIZE: 4,
    PRIVATECODE_MAX_SIZE: 5,
    WISHLIST_MAX_SIZE: 6,
    STORE_REGION_MAX_SIZE: 1,
    STORE_CITY_MAX_SIZE: 1
}, $.cookies.getDefaultOption = function(e, t) {
    return e && e instanceof Date || (e = new Date, e.setTime(e.getTime() + 864e5)), t && "" !== t || (t = "/"), defaultOptions = {
        expiresAt: e,
        path: t,
        domain: ".samsung.com",
        secure: !1
    }
}, $.cookies.setWishList = function(e, t) {
    var i = this.data.WISHLIST_NAME,
        o = this.get(i);
    if (o && "" != o && "undefined" != o) {
        if ($.inArray(e, o) >= 0) return;
        o.length >= this.data.WISHLIST_MAX_SIZE && o.splice(0, 1), o.push(e)
    } else o = [e];
    this.set(i, o, this.getDefaultOption(t))
}, $.cookies.getWishListCnt = function() {
    var e = this.get(this.data.WISHLIST_NAME);
    return e && $.isArray(e) ? e.length : 0
}, $.cookies.getWishList = function() {
    var e = this.get(this.data.WISHLIST_NAME);
    return e && $.isArray(e) ? e : []
}, $.cookies.isAddedWishList = function(e) {
    var t = this.data.WISHLIST_NAME,
        i = this.get(t);
    if (i && $.isArray(i))
        for (var o = 0, s = i.length; s > o; o++)
            if (i[o] == e) return !0;
    return !1
}, $.cookies.deleteWishProduct = function(e, t) {
    var i = this.data.WISHLIST_NAME,
        o = this.get(i);
    if (o && $.isArray(o)) {
        var s = $.inArray(e, o);
        if (s >= 0) return o.splice(s, 1), o.length <= 0 ? this.del(i, this.getDefaultOption(t)) : this.set(i, o, this.getDefaultOption(t)), !0
    }
    return !1
}, $.cookies.deleteWishList = function(e) {
    this.del(this.data.WISHLIST_NAME, this.getDefaultOption(e))
}, $.cookies.setSearchKeyword = function(e, t) {
    var i = this.data.SEARCH_NAME,
        o = this.get(i);
    if (o && "" != o && "undefined" != o) {
        if ($.inArray(e, o) >= 0) return;
        o.length >= this.data.SEARCH_MAX_SIZE && o.splice(0, 1), o.push(e)
    } else o = [e];
    this.set(i, o, this.getDefaultOption(t, "/" + SITE_CD + "/"))
}, $.cookies.getSearchKeyword = function() {
    var e = this.get(this.data.SEARCH_NAME);
    return e && $.isArray(e) ? e : []
}, $.cookies.clearSearchKeyword = function(e) {
    this.del(this.data.SEARCH_NAME, this.getDefaultOption(e, "/" + SITE_CD + "/"))
};
try {
    if ($.cookies.get("cookie_country") && "" !== $.cookies.get("cookie_country")) {
        if (SITE_CD !== $.cookies.get("cookie_country")) {
            var deleteOption = $.cookies.getDefaultOption();
            $.cookies.del($.cookies.data.NAVIGATION_NAME, deleteOption), $.cookies.del($.cookies.data.PRIVATECODE_NAME, deleteOption), $.cookies.del($.cookies.data.COMPARELIST_NAME, deleteOption), $.cookies.del($.cookies.data.WISHLIST_NAME, deleteOption), $.cookies.del($.cookies.data.INSTORE_PRIVATECODE_NAME, deleteOption), $.cookies.set("cookie_country", SITE_CD, $.cookies.getDefaultOption())
        }
    } else $.cookies.set("cookie_country", SITE_CD, $.cookies.getDefaultOption())
} catch (e) {}! function(e, t, a) {
    "use strict";
    Granite.I18n.setLocale(SITE_CD);
    var n = {
            getByteLength: function(e) {
                if (null == e || 0 == e.length) return 0;
                for (var t = 0, a = 0; a < e.length; a++) t += this.charByteSize(e.charAt(a));
                return t
            },
            cutByteLength: function(e, t) {
                if (null == e || 0 == e.length) return 0;
                for (var a = 0, n = e.length, s = 0; s < e.length; s++) {
                    if (a += this.charByteSize(e.charAt(s)), a == t) {
                        n = s + 1;
                        break
                    }
                    if (a > t) {
                        n = s;
                        break
                    }
                }
                return e.substring(0, n)
            },
            charByteSize: function(e) {
                if (null == e || 0 == e.length) return 0;
                var t = e.charCodeAt(0);
                return 127 >= t ? 1 : 2047 >= t ? 2 : 65535 >= t ? 3 : 4
            }
        },
        s = a("#typeAheadDomain").val() + "suggest",
        r = a("#typeAheadDomain").val() + "suggestdetail",
        o = a("#scene7domain").val(),
        i = a("#reviewUseYN").val(),
        l = a("#reevooUseYN").val(),
        c = a("#frontApiStageInfo").val(),
        g = function(e) {
            var t = !1,
                n = "";
            return n = a.trim(e).replace(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi, ""), /[0-9a-zA-Z]/g.test(n) && (t = !0), t
        },
        u = function(e) {
            var t = e;
            return null != t && void 0 != t && (t = t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;")), t
        },
        h = function(e, t) {
            if (g(e) && g(t)) {
                if (e.toLowerCase().indexOf(t.toLowerCase()) > -1) {
                    var a = "<strong>",
                        n = "</strong>",
                        s = e.toLowerCase().indexOf(t.toLowerCase());
                    e = e.slice(0, s) + a + e.slice(s + Math.abs(0));
                    var r = e.toLowerCase().indexOf(t.toLowerCase()) + t.length;
                    e = e.slice(0, r) + n + e.slice(r + Math.abs(0))
                }
            } else e = e.replace(t, "<strong>".concat(t).concat("</strong>"));
            return e
        },
        p = function(e, t) {
            var a = "",
                n = o;
            return e.indexOf("http:") > -1 || "" == e || e.indexOf("//stg-images.samsung.com/") > -1 || e.indexOf("//images.samsung.com/") > -1 || e.indexOf("//image.samsung.com/") > -1 ? a = e : (t && (n = n.replace("/image/", "/content/")), a = n + e), a
        },
        d = function() {
            a(".gb-gnb__search-suggest").hide(), a(".gb-gnb__search-suggest-list").html(""), a(".gb-gnb__search-typeahead ul").html(""), a(".gb-gnb__search-typeahead-title").html("")
        },
        b = function(e) {
            var t = "";
            return "Products" == e && (t = "C10000000"), "Accessories" == e && (t = "C20000000"), "Video" == e && (t = "C30000000"), "Support" == e && (t = "C40000000"), "Offers" == e && (t = "C50000000"), "News" == e && (t = "C60000000"), "Others" == e && (t = "C70000000"), t
        },
        m = function(e, n, s) {
            e = a.trim(e.replace(/</g, " ").replace(/>/g, " "));
            var r = a("#searchPath").val().concat("?searchvalue=").concat(encodeURIComponent(e));
            n && (r += "&searchFirst=T&nm=category&pv=".concat(n).concat("&filterSearchCode=").concat(b(n))), s.preventDefault ? s.preventDefault() : s.returnValue = !1, t.location.href = r
        },
        _ = function(n, s, r) {
            if (a.ajax({
                    type: "GET",
                    url: s,
                    success: function(e) {}
                }), "blank" == r) {
                var o = e.open("about:blank");
                o.location.href = n
            } else t.location.href = n
        },
        f = function() {
            var e = a.cookies.getSearchKeyword();
            return e.reverse()
        },
        v = function() {
            var e = a(".gb-gnb__search-history ul");
            e.empty(), a(".gb-gnb__search-history-close").attr("disabled", "disabled"), a.each(f(), function(t, a) {
                var n = '<li><a href="javascript:;" keyword="' + encodeURIComponent(a) + '">' + u(a) + "</a></li>";
                e.append(n)
            }), e.find("li a").on("click", function(e) {
                a.cookies.setSearchKeyword(decodeURIComponent(a(this).attr("keyword"))), m(decodeURIComponent(a(this).attr("keyword")), "", e)
            }), d(), "" != e.html() && (a(".gb-gnb__search-history-close").removeAttr("disabled"), a(".gb-gnb-2018").length || a(".gb-gnb__search-history").show())
        },
        C = function() {
            a.cookies.clearSearchKeyword(), v()
        },
        w = function(e, t) {
            var a = "",
                n = e.shopInfo,
                s = e.shopinfoTitle;
            return "" != s && null != s && (a = '<a href="' + n + '" class="gb-gnb__search-suggest-list-title" data-omni="find our:' + s + '">' + Granite.I18n.get("Find Our {0}", [s], SITE_CD) + "</a>"), a
        },
        k = function(e, t) {
            var a = "",
                n = e.suggestion,
                s = e.searchIn;
            if (null != s && s.length > 0 && null != n && n.length > 0) {
                a += '<ul class="gb-gnb__search-suggest-list-category">';
                for (var r = 0; r < s.length; r++) {
                    var o = h(n[0], t),
                        i = '<span class="s-blue">'.concat(Granite.I18n.get(s[r], null, SITE_CD)).concat("</span>");
                    a += '<li><a href="javascript:;" search_data="' + encodeURIComponent(n[0] + "@@" + s[r]) + '">' + Granite.I18n.get("{0} in {1}", [o, i], SITE_CD) + "</a></li>"
                }
                a += "</ul>"
            }
            if (null != n && n.length > 0) {
                a += '<ul class="gb-gnb__search-suggest-list-select">';
                for (var l = 0; l < n.length; l++) a += '<li><a href="javascript:;">' + h(n[l], t) + "</a></li>";
                a += "</ul>"
            }
            return a
        },
        y = function(e) {
            var t = "",
                a = parseFloat(e).toFixed(1),
                n = parseInt(e),
                s = 0;
            s = parseInt(100 * (a - n));
            for (var r = 0; n > r; r++) t += '<div class="gb-gnb__search-star"><span class="s-ico-star-empty"></span><span class="s-ico-star-filled" style="width: 100%;"></span></div>';
            if (5 > n) {
                t += '<div class="gb-gnb__search-star"><span class="s-ico-star-empty"></span><span class="s-ico-star-filled" style="width: ' + s + '%;"></span></div>';
                for (var o = 4; o > n; o--) t += '<div class="gb-gnb__search-star"><span class="s-ico-star-empty"></span><span class="s-ico-star-filled" style="width: 0%;"></span></div>'
            }
            return t
        },
        L = function(e) {
            var t = "";
            if (null != e) {
                var a = '<span itemprop="ratingValue">'.concat(e.ratings).concat("</span>");
                t += '<li><div class="gb-gnb__search-product"><a href="javascript:;" link_info="' + e.pdpURL + "@@" + e.asrLink + '" class="gb-gnb__search-product-title" data-omni="search recommended:image/text|' + e.modelName.toLowerCase() + "|" + e.modelCode.toLowerCase() + '"><strong>' + e.dispNm + '</strong><span class="gb-gnb__search-product-img"><img src="' + p(e.thumbUrl) + '" alt="' + e.thumbUrlAlt + '"></span></a>', "Y" == i && "N" == l && ("0" == e.reviewCount || void 0 == e.reviewCount ? (t += '<div class="gb-gnb__search-product-rate">', t += '<a href="' + e.linkUrlReview + '" class="gb-gnb__search-product-rate-nodata" data-omni="search recommended:review|' + e.modelName.toLowerCase() + "|" + e.modelCode.toLowerCase() + '">' + Granite.I18n.get("Be the first to write a review", null, SITE_CD) + "</a>") : (t += '<div class="gb-gnb__search-product-rate" itemprop="aggregateRating" itemscope itemtype="http://schema.org/AggregateRating"><span class="blind">' + Granite.I18n.get("Rating", null, SITE_CD) + " : " + Granite.I18n.get("{0} out of {1} stars", [a, "5"], SITE_CD) + '</span><div class="gb-gnb__search-star-wrap">', t += y(e.ratings), t += "" == e.ratings || void 0 == e.ratings ? '<a href="' + e.linkUrlReview + '" class="gb-gnb__search-star-review-number" data-omni="search recommended:review|' + e.modelName.toLowerCase() + "|" + e.modelCode.toLowerCase() + '"><span class="blind">' + Granite.I18n.get("Number of reviews", null, SITE_CD) + ' : </span>(<span itemprop="reviewCount">' + e.reviewCount + "</span>)</a></div>" : '<a href="' + e.linkUrlReview + '" class="gb-gnb__search-star-review-number" data-omni="search recommended:review|' + e.modelName.toLowerCase() + "|" + e.modelCode.toLowerCase() + '"><span>' + parseFloat(e.ratings).toFixed(1) + ' </span><span class="blind">' + Granite.I18n.get("Number of reviews", null, SITE_CD) + ' : </span>(<span itemprop="reviewCount">' + e.reviewCount + "</span>)</a></div>"), t += "</div>"), t += '<div class="gb-gnb__search-product-links">', void 0 !== e.supportLinkUrlManuals && null !== e.supportLinkUrlManuals && "" != e.supportLinkUrlManuals && (t += '<a href="javascript:;" link_info="' + e.supportLinkUrlManuals + "@@" + e.asrLink + '" class="s-btn" data-omni="search recommended:manual|' + e.modelName.toLowerCase() + "|" + e.modelCode.toLowerCase() + '">' + Granite.I18n.get("Owners Manual", null, SITE_CD) + '<span class="s-svg s-arw-right"></span></a>'), void 0 !== e.supportLinkUrl && null !== e.supportLinkUrl && "" != e.supportLinkUrl && (t += '<a href="javascript:;" link_info="' + e.supportLinkUrl + "@@" + e.asrLink + '" class="s-btn" data-omni="search recommended:support|' + e.modelName.toLowerCase() + "|" + e.modelCode.toLowerCase() + '">' + Granite.I18n.get("Support", null, SITE_CD) + '<span class="s-svg s-arw-right"></span></a>'), void 0 !== e.regLinkUrl && null !== e.regLinkUrl && "" != e.regLinkUrl && (t += '<a href="javascript:;" link_info="' + e.regLinkUrl + "@@" + e.asrLink + '@@blank" class="s-btn" data-omni="search recommended:register|' + e.modelName.toLowerCase() + "|" + e.modelCode.toLowerCase() + '">' + Granite.I18n.get("Register", null, SITE_CD) + '<span class="s-svg s-arw-right"></span></a>'), t += "</div></div></li>"
            }
            return t
        },
        I = function(e, t) {
            var n = "";
            if (void 0 !== e.products && null != e.products.modelList && e.products.modelList.length > 0) {
                var s = "",
                    r = e.products.modelList;
                s = Granite.I18n.get("Recommended Results for {0}", ['<strong>"' + t + '"</strong>'], SITE_CD), a(".gb-gnb__search-typeahead-title").html(s);
                for (var o = 0; o < r.length; o++) n += L(r[o])
            }
            return "" === a.trim(n) ? (a(".gb-gnb__search-typeahead").hide(), a(".gb-gnb__search-typeahead-title").html("")) : a(".gb-gnb__search-typeahead").show(), n
        },
        D = function(e, t) {
            var n = "";
            return void 0 !== e.shopInfo && (n += w(e, t)), void 0 !== e.suggestion && (n += k(e, t)), "" != a.trim(n) ? (a(".gb-gnb__search-suggest-list").show(), a(".gb-gnb__search-suggest-nodata").hide()) : (a(".gb-gnb__search-suggest-list").hide(), a(".gb-gnb__search-typeahead").hide(), a(".gb-gnb__search-suggest-nodata").show()), n
        };
    a.fn.typeAhead = function() {
        var t = null,
            o = a("#inp_srch"),
            i = a(".gb-gnb__search-history"),
            l = o.parent().find(".s-ico-search"),
            g = a(".gb-gnb__search-suggest"),
            u = a(".gb-gnb__search-typeahead ul"),
            h = "",
            p = "",
            b = null,
            f = function() {
                a(".gb-gnb__search-product .gb-gnb__search-product-title").off("click"), a(".gb-gnb__search-product .gb-gnb__search-product-title").on("click", function() {
                    var e = a(this).attr("link_info"),
                        t = e.split("@@").length > 0 ? e.split("@@")[0] : null,
                        n = e.split("@@").length > 1 ? e.split("@@")[1] : null;
                    _(t, n), f()
                }), a(".gb-gnb__search-product-links a").off("click"), a(".gb-gnb__search-product-links a").on("click", function() {
                    var e = a(this).attr("link_info"),
                        t = e.split("@@").length > 0 ? e.split("@@")[0] : null,
                        n = e.split("@@").length > 1 ? e.split("@@")[1] : null,
                        s = e.split("@@").length > 2 ? e.split("@@")[2] : null;
                    _(t, n, s), f()
                })
            },
            w = function(n) {
                i.hide(), g.show(), a(".gb-gnb__search-suggest-list-select li a").on("mouseover focusin", function(s) {
                    var i = a(this).text(),
                        l = a(this).html().replace("<strong>", "").replace("</strong>", "").replace("<STRONG>", "").replace("</STRONG>", "");
                    o.val(i), a(e).width() >= 1024 && p != l && (s.preventDefault(), a(".gb-gnb__search-typeahead").hide(), t && t.abort(), t = a.ajax({
                        url: r,
                        type: "GET",
                        dataType: "jsonp",
                        jsonp: "callback",
                        jsonpCallback: "jQuery1910499421933433041_1385598221584",
                        cache: !0,
                        data: {
                            searchValue: encodeURIComponent(n),
                            siteCd: SITE_CD,
                            suggestionValue: l,
                            stage: c
                        },
                        success: function(e) {
                            p = l, u.html(I(e.response.resultData, p))
                        }
                    }), "" !== u.html() && a(".gb-gnb__search-typeahead").show()), f()
                }).on("mouseout", function(e) {
                    e.preventDefault(), a(this).parents().find("#inp_srch").val(n), f()
                }).on("click", function(e) {
                    o.val(a(this).text()), m(a(this).text(), "", e)
                }), a(".gb-gnb__search-suggest-list-category li a").on("click", function(e) {
                    var t = decodeURIComponent(a(this).attr("search_data")),
                        n = t.split("@@")[0],
                        s = t.split("@@")[1];
                    m(n, s, e)
                }).on("mouseover", function(e) {
                    p = h, u.html(I(b, p)), f()
                }), a(".gb-gnb__search-suggest-list-title").on("mouseover", function(e) {
                    p = h, u.html(I(b, p)), f()
                }), l.on("click", function(e) {
                    var t = a.trim(o.val());
                    0 == t.length && (t = o.attr("placeholder")), m(t, "", e)
                })
            },
            k = function() {
                var e = null,
                    t = "";
                o.on("keyup", function(r) {
                    var i = a.trim(a(this).val()),
                        l = !1;
                    i.length > 1 ? (n.getByteLength(i) > 110 && (i = n.cutByteLength(i, 110), a(this).val(i), t == i && (l = !0), t = i), 13 === r.keyCode || l || ("" == a(".gb-gnb__search-suggest-list").html() && d(), i = a.trim(i.replace(/</g, " ").replace(/>/g, " ")), e && e.abort(), "" == a(".gb-gnb__search-suggest-list-select").html() && d(), t = i, e = a.ajax({
                        url: s,
                        type: "GET",
                        data: {
                            searchValue: encodeURIComponent(i),
                            siteCd: SITE_CD,
                            stage: c
                        },
                        dataType: "jsonp",
                        jsonp: "callback",
                        jsonpCallback: "jQuery1910499421933433041_1385598221584",
                        cache: !0,
                        timeout: 3e4,
                        success: function(e) {
                            200 == e.response.statusCode && (a(".gb-gnb__search-suggest-list").html(D(e.response.resultData.common, i)), "" != a(".gb-gnb__search-suggest-list-select").html() && (null != e.response.resultData.common.suggestion && e.response.resultData.common.suggestion.length > 0 && (p = e.response.resultData.common.suggestion[0], h = e.response.resultData.common.suggestion[0], u.html(I(e.response.resultData, p)), f()), b = e.response.resultData), w(i))
                        }
                    }))) : (e && e.abort(), v(), 0 === i.length && (i = o.attr("placeholder")), 13 === r.keyCode)
                }).on("keydown", function(t) {
                    if (13 === t.keyCode) {
                        var n = a.trim(a(this).val());
                        n = a.trim(n.replace(/</g, " ").replace(/>/g, " ")), 0 === n.length && (n = o.attr("placeholder")), e && e.abort(), m(n, "", t)
                    }
                }), l.on("click", function(e) {
                    var t = a.trim(o.val());
                    "" != t ? m(t, "", e) : (t = o.attr("placeholder"), m(t, "", e))
                }), a(".gb-gnb__search-history-close").on("click", function() {
                    C()
                }), a(".js-ico-search").on("click", function() {
                    v()
                })
            };
        return {
            init: k()
        }
    }, a(function() {
        var e = a("#gb-gnb__search");
        e.typeAhead()
    })
}(window, document, $);
var ss = $;
! function(e) {
    ss.EstoreIfQueue = {
        setQueue: function(i) {
            var t = e.cookies.get("iPlanetDirectoryPro", {
                    domain: ".samsung.com"
                }),
                s = e.cookies.get("snsSessionId", {
                    domain: ".samsung.com"
                });
            (t || s) && USE_ESTORE ? this.getIsSignReady() ? this.callFunction(i, arguments) : this.queue.push(arguments) : this.callFunction(i, arguments)
        },
        callFunction: function(e, i) {
            if (e && "function" == typeof e) {
                for (var t = [], s = 1; s < i.length; s++) t.push(i[s]);
                e.apply(null, t)
            }
        },
        setIsSignReady: function(e) {
            if (this.isSignReady = e, 1 == e)
                for (var i = 0; i < this.queue.length; i++) this.queue[i].length && this.callFunction(this.queue[i][0], this.queue[i])
        },
        getIsSignReady: function() {
            return this.isSignReady
        },
        setProperties: function() {
            this.isSignReady = !1, this.queue = []
        },
        init: function() {
            this.setProperties()
        }
    }, ss.EstoreIfQueue.init()
}(jQuery);
var estore = function() {
    var e = function(e) {
            var t, u = "?",
                o = 0;
            for (key in e) 0 != o && (u += "&"), t = e[key], $.isArray(t) ? $.each(t, function(e, o) {
                u += key + "=" + o, e < t.length - 1 && (u += "&")
            }) : u += key + "=" + t, o++;
            return u
        },
        t = function(e) {
            var t = $("#popup_alert");
            t.find(".msg-text").html(e), "sec" == SITE_CD && t.find(".pop-btn").find(".button").text("확인"), $(".layer_popup").hide(), t.parent().show(), "sec" == SITE_CD ? $(".lightbox-skrim").show() : $(".lightbox-skrim").hide();
            var u = parseInt(($("body").width() - t.width()) / 2),
                o = parseInt($(window).scrollTop() + ($(window).height() - t.height()) / 2);
            $(window).height() < t.height() && (o = $(window).scrollTop() + 10), t.css({
                top: o + "px",
                left: u + "px"
            }), $("#popup_alert .popup_wrap .pop-btn").find("a").focus()
        },
        u = function(u, o, s) {
            var r = (document.location.host, document.location.search, location.href),
                n = !1;
            r.indexOf("/consumer") > -1 && (n = !0);
            var l = "";
            l = STORE_DOMAIN + "/" + SITE_CD + "/ng/p4v1/" + u + (o ? e(o) : ""), $.ajax("getRealTimeProductSimpleInfo" == u && n && "br" != SITE_CD && "ca" != SITE_CD && "ca_fr" != SITE_CD ? {
                url: l,
                type: "GET",
                dataType: "jsonp",
                jsonpCallback: "jQuery1910499421933433041_1385598221584",
                jsonp: "callback",
                success: function(e) {
                    "2100" == e.resultCode ? o && o.hasOwnProperty("returnUrl") && "" !== o.returnUrl ? $.Auth.signOut(o.returnUrl) : $.Auth.signOut() : ("cn" != SITE_CD || "0000" == e.resultCode || "9000" == e.resultCode || "9001" == e.resultCode || "9002" == e.resultCode || "2110" == e.resultCode || 4 != e.resultCode.length || "2" != e.resultCode.charAt(0) && "3" != e.resultCode.charAt(0)) && ("sec" != SITE_CD || "0000" == e.resultCode || "9000" == e.resultCode || "9001" == e.resultCode || "9002" == e.resultCode || "2110" == e.resultCode || "2002" == e.resultCode || 4 != e.resultCode.length || "2" != e.resultCode.charAt(0) && "3" != e.resultCode.charAt(0)) ? "cn" != SITE_CD && "sec" != SITE_CD && "0000" != e.resultCode && "9000" != e.resultCode && "9001" != e.resultCode && "9002" != e.resultCode && "2110" != e.resultCode && t(e.resultMessage) : t(e.resultMessage), $.isFunction(s) && s(e)
                },
                error: function(e, t, u) {}
            } : "getRealTimeProductSimpleInfo" == u && "sec" == SITE_CD ? {
                url: l,
                type: "GET",
                dataType: "jsonp",
                jsonpCallback: "jQuery1910499421933433041_1385598221584",
                jsonp: "callback",
                timeout: 1e4,
                success: function(e) {
                    "2100" == e.resultCode ? o && o.hasOwnProperty("returnUrl") && "" !== o.returnUrl ? $.Auth.signOut(o.returnUrl) : $.Auth.signOut() : "cn" != SITE_CD || "0000" == e.resultCode || "9000" == e.resultCode || "9001" == e.resultCode || "9002" == e.resultCode || "2110" == e.resultCode || 4 != e.resultCode.length || "2" != e.resultCode.charAt(0) && "3" != e.resultCode.charAt(0) ? "sec" != SITE_CD || "0000" == e.resultCode || "9000" == e.resultCode || "9001" == e.resultCode || "9002" == e.resultCode || "2110" == e.resultCode || "2002" == e.resultCode || 4 != e.resultCode.length || "2" != e.resultCode.charAt(0) && "3" != e.resultCode.charAt(0) ? "cn" != SITE_CD && "sec" != SITE_CD && "0000" != e.resultCode && "9000" != e.resultCode && "9001" != e.resultCode && "9002" != e.resultCode && "2110" != e.resultCode && t(e.resultMessage) : (-1 != e.resultMessage.indexOf("구매 한도를 초과하여 구매가 불가능합니다.<br />") && (e.resultMessage = "구매 한도" + e.resultMessage.split("구매 한도")[1].replace("<br />", "\n")), t(e.resultMessage)) : t(e.resultMessage), $.isFunction(s) && s(e)
                },
                error: function(e, t, u) {
                    ("au" == SITE_CD || "nz" == SITE_CD || "sec" == SITE_CD) && window.location.pathname == "/" + SITE_CD + "/wishlist" && s(), "sec" == SITE_CD && "timeout" == u && $("#product-detail-current-modelcode").val() && ($("#BT_shop .BT_txt").html("해당 상품을 판매 준비하고 있습니다. 구매 가능 여부는<br />가까운 매장이나 삼성전자 공식 판매처에 문의하시기 바랍니다."), $("#BT_shop").show(), $("#BT_shop .product-details__link.s-cta-retailer.js-cta-buy-sec").hide(), $("#BT_shop .BT_help").hide(), $("#BT_shop .BT_help-content").hide(), $("#BT_shop .BT_txt").show(), $("#find-store-shopmain").show())
                }
            } : "getRealTimeProductSimpleInfo" != u || !n || "ca" != SITE_CD && "ca_fr" != SITE_CD ? "getRealTimeProductSimpleInfo" == u || n || "ca" != SITE_CD && "ca_fr" != SITE_CD ? {
                url: l,
                type: "GET",
                dataType: "jsonp",
                jsonp: "callback",
                success: function(e) {
                    "2100" == e.resultCode ? o && o.hasOwnProperty("returnUrl") && "" !== o.returnUrl ? $.Auth.signOut(o.returnUrl) : $.Auth.signOut() : "cn" != SITE_CD || "0000" == e.resultCode || "9000" == e.resultCode || "9001" == e.resultCode || "9002" == e.resultCode || "2110" == e.resultCode || 4 != e.resultCode.length || "2" != e.resultCode.charAt(0) && "3" != e.resultCode.charAt(0) ? "sec" != SITE_CD || "0000" == e.resultCode || "9000" == e.resultCode || "9001" == e.resultCode || "9002" == e.resultCode || "2110" == e.resultCode || "2002" == e.resultCode || 4 != e.resultCode.length || "2" != e.resultCode.charAt(0) && "3" != e.resultCode.charAt(0) ? "cn" != SITE_CD && "sec" != SITE_CD && "0000" != e.resultCode && "9000" != e.resultCode && "9001" != e.resultCode && "9002" != e.resultCode && "2110" != e.resultCode && t(e.resultMessage) : (-1 != e.resultMessage.indexOf("구매 한도를 초과하여 구매가 불가능합니다.<br />") && (e.resultMessage = "구매 한도" + e.resultMessage.split("구매 한도")[1].replace("<br />", "\n")), t(e.resultMessage)) : t(e.resultMessage), $.isFunction(s) && s(e)
                },
                error: function(e, t, u) {
                    ("au" == SITE_CD || "nz" == SITE_CD || "sec" == SITE_CD) && window.location.pathname == "/" + SITE_CD + "/wishlist" && s()
                }
            } : {
                url: l,
                type: "GET",
                dataType: "json",
                xhrFields: {
                    withCredentials: !0
                },
                contentType: "application/x-www-form-urlencoded",
                crossDomain: !0,
                success: function(e) {
                    "2100" == e.resultCode ? o && o.hasOwnProperty("returnUrl") && "" !== o.returnUrl ? $.Auth.signOut(o.returnUrl) : $.Auth.signOut() : "cn" != SITE_CD || "0000" == e.resultCode || "9000" == e.resultCode || "9001" == e.resultCode || "9002" == e.resultCode || "2110" == e.resultCode || 4 != e.resultCode.length || "2" != e.resultCode.charAt(0) && "3" != e.resultCode.charAt(0) ? "sec" != SITE_CD || "0000" == e.resultCode || "9000" == e.resultCode || "9001" == e.resultCode || "9002" == e.resultCode || "2110" == e.resultCode || "2002" == e.resultCode || 4 != e.resultCode.length || "2" != e.resultCode.charAt(0) && "3" != e.resultCode.charAt(0) ? "cn" != SITE_CD && "sec" != SITE_CD && "0000" != e.resultCode && "9000" != e.resultCode && "9001" != e.resultCode && "9002" != e.resultCode && "2110" != e.resultCode && t(e.resultMessage) : (-1 != e.resultMessage.indexOf("구매 한도를 초과하여 구매가 불가능합니다.<br />") && (e.resultMessage = "구매 한도" + e.resultMessage.split("구매 한도")[1].replace("<br />", "\n")), t(e.resultMessage)) : t(e.resultMessage), $.isFunction(s) && s(e)
                },
                error: function(e, t, u) {
                    ("au" == SITE_CD || "nz" == SITE_CD || "sec" == SITE_CD) && window.location.pathname == "/" + SITE_CD + "/wishlist" && s()
                }
            } : {
                url: l,
                type: "GET",
                dataType: "json",
                xhrFields: {
                    withCredentials: !0
                },
                contentType: "application/x-www-form-urlencoded",
                crossDomain: !0,
                success: function(e) {
                    "2100" == e.resultCode ? o && o.hasOwnProperty("returnUrl") && "" !== o.returnUrl ? $.Auth.signOut(o.returnUrl) : $.Auth.signOut() : ("cn" != SITE_CD || "0000" == e.resultCode || "9000" == e.resultCode || "9001" == e.resultCode || "9002" == e.resultCode || "2110" == e.resultCode || 4 != e.resultCode.length || "2" != e.resultCode.charAt(0) && "3" != e.resultCode.charAt(0)) && ("sec" != SITE_CD || "0000" == e.resultCode || "9000" == e.resultCode || "9001" == e.resultCode || "9002" == e.resultCode || "2110" == e.resultCode || "2002" == e.resultCode || 4 != e.resultCode.length || "2" != e.resultCode.charAt(0) && "3" != e.resultCode.charAt(0)) ? "cn" != SITE_CD && "sec" != SITE_CD && "0000" != e.resultCode && "9000" != e.resultCode && "9001" != e.resultCode && "9002" != e.resultCode && "2110" != e.resultCode && t(e.resultMessage) : t(e.resultMessage), $.isFunction(s) && s(e)
                },
                error: function(e, t, u) {}
            })
        },
        o = function() {};
    return o.prototype.makeBuyNowCookie = function(e) {
        $.EstoreIfQueue.setQueue(u, "makeBuyNowCookie", null, e)
    }, o.prototype.addCart = function(e, t) {
        $.EstoreIfQueue.setQueue(u, "addCart", e, t)
    }, o.prototype.getCartCount = function(e) {
        $.EstoreIfQueue.setQueue(u, "getCartCount", null, e)
    }, o.prototype.getRealTimeProductSimpleInfo = function(e, t) {
        $.EstoreIfQueue.setQueue(u, "getRealTimeProductSimpleInfo", e, t)
    }, o.prototype.getRealTimeProductListInfo = function(e, t) {
        $.EstoreIfQueue.setQueue(u, "getRealTimeProductListInfo", e, t)
    }, o.prototype.addWishListItem = function(e, t) {
        $.EstoreIfQueue.setQueue(u, "addWishListItem", e, t)
    }, o.prototype.addWishListItemForce = function(e, t) {
        u("addWishListItem", e, t)
    }, o.prototype.delWishListItem = function(e, t) {
        $.EstoreIfQueue.setQueue(u, "delWishListItem", e, t)
    }, o.prototype.getWishList = function(e, t) {
        var o = {
            page: 1,
            pageSize: 5
        };
        e && !$.isFunction(e) && (o = $.extend(o, e)), $.EstoreIfQueue.setQueue(u, "getWishList", o, t)
    }, o.prototype.login = function(e) {
        $.EstoreIfQueue.setQueue(u, "login", null, e)
    }, o.prototype.logout = function(e, t) {
        $.EstoreIfQueue.setQueue(u, "logout", e, t)
    }, o.prototype.getRealTimeWishProductListInfo = function(e, t) {
        $.EstoreIfQueue.setQueue(u, "getRealTimeWishProductListInfo", e, t)
    }, o.prototype.getGuestOrderExistYn = function(e, t) {
        $.EstoreIfQueue.setQueue(u, "getGuestOrderExistYn", e, t)
    }, o.prototype.getSnsUserInfo = function(e, t) {
        $.EstoreIfQueue.setQueue(u, "getSnsUserInfo", e, t)
    }, o.prototype.setAgreeStorePolicy = function(e, t) {
        $.EstoreIfQueue.setQueue(u, "setAgreeStorePolicy", e, t)
    }, o.prototype.getSessionCheck = function(e, t) {
        $.EstoreIfQueue.setQueue(u, "getSessionCheck", e, t)
    }, o.prototype.getEstoreCategoryList = function(e) {
        $.EstoreIfQueue.setQueue(u, "getEstoreCategoryList", null, e)
    }, o.prototype.getCurrentUserInfo = function(e, t) {
        $.EstoreIfQueue.setQueue(u, "getCurrentUserInfo", e, t)
    }, o.prototype.buyNow = function(e, t) {
        $.EstoreIfQueue.setQueue(u, "buyNow", e, t)
    }, o.prototype.getReviews = function(e, t) {
        $.EstoreIfQueue.setQueue(u, "getReviewList", e, t)
    }, o.prototype.getMyReview = function(e, t) {
        $.EstoreIfQueue.setQueue(u, "getMyReview", e, t)
    }, o.prototype.addReview = function(e, t) {
        $.EstoreIfQueue.setQueue(u, "addReview", e, t)
    }, o.prototype.updateReview = function(e, t) {
        $.EstoreIfQueue.setQueue(u, "updateReview", e, t)
    }, o.prototype.deleteReview = function(e, t) {
        $.EstoreIfQueue.setQueue(u, "deleteReview", e, t)
    }, o.prototype.addReviewHelpful = function(e, t) {
        $.EstoreIfQueue.setQueue(u, "setReviewHelpful", e, t)
    }, o.prototype.addReviewHelpful = function(e, t) {
        $.EstoreIfQueue.setQueue(u, "setReviewHelpful", e, t)
    }, o.prototype.addReviewUnHelpful = function(e, t) {
        $.EstoreIfQueue.setQueue(u, "setReviewUnHelpful", e, t)
    }, o.prototype.addReviewAbuse = function(e, t) {
        $.EstoreIfQueue.setQueue(u, "setReviewAbuse", e, t)
    }, o.prototype.getExpertReviewList = function(e, t) {
        $.EstoreIfQueue.setQueue(u, "getExpertReviewList", e, t)
    }, o.prototype.getProductDetailRegion = function(e, t) {
        $.EstoreIfQueue.setQueue(u, "getProductDetailRegion", e, t)
    }, o.prototype.getProductDetailCity = function(e, t) {
        $.EstoreIfQueue.setQueue(u, "getProductDetailCity", e, t)
    }, o.prototype.showProductOpenphoneOption = function(e, t) {
        $.EstoreIfQueue.setQueue(u, "showProductOpenphoneOption", e, t)
    }, o.prototype.preCalc = function(e, t) {
        $.EstoreIfQueue.setQueue(u, "preCalc", e, t)
    }, o.prototype.preCalcApply = function(e, t) {
        $.EstoreIfQueue.setQueue(u, "preCalcApply", e, t)
    }, o.prototype.stores = function(e, t) {
        $.EstoreIfQueue.setQueue(u, "stores", e, t)
    }, o.prototype.getReviewStatus = function(e, t) {
        $.EstoreIfQueue.setQueue(u, "getReviewStatus", e, t)
    }, o.prototype.addViewCount = function(e, t) {
        $.EstoreIfQueue.setQueue(u, "addViewCount", e, t)
    }, new o
}();

function nextGenLoginResult(e) {}
var ss = $,
    reservationUserData = null;
! function(e) {
    ss.Sign = function() {
        function n(e) {
            e = e.split("+").join(" ");
            for (var n, t = {}, o = /[?&]?([^=]+)=([^&]*)/g; n = o.exec(e);) t[decodeURIComponent(n[1])] = decodeURIComponent(n[2]);
            return t
        }

        function t() {
            e.cookies.del("estoreLoginRequesting"), e.cookies.del("estoreLoginRequesting", {
                domain: ".samsung.com"
            })
        }

        function o() {
            e.cookies.del("snsSessionId"), e.cookies.del("snsSessionId", {
                path: "/",
                domain: ".samsung.com"
            }), e.cookies.del("isStoreLogedIn"), e.cookies.del("sa_em"), e.cookies.del("sa_em", {
                path: "/",
                domain: ".samsung.com"
            }), e.cookies.del("eVar67"), e.cookies.del("eVar67", {
                path: "/",
                domain: ".samsung.com"
            }), e.cookies.del("lastName", {
                domain: ".samsung.com"
            }), e.cookies.del("firstName", {
                domain: ".samsung.com"
            }), e.cookies.del("guid", {
                domain: ".samsung.com"
            }), e.cookies.del("ReD", {
                domain: ".samsung.com"
            }), e.cookies.del("directCallFl", {
                expires: null,
                domain: ".samsung.com"
            }), e.cookies.del("directCallFlv2", {
                expires: null,
                domain: ".samsung.com"
            }), e.cookies.del("returnURL", {
                domain: ".samsung.com"
            }), t()
        }

        function s() {
            e.cookies.del("xsdcxyn"), e.cookies.del("xsdcxyn", {
                path: "/",
                domain: ".samsung.com"
            }), e.cookies.del("xsdcbxyn"), e.cookies.del("xsdcbxyn", {
                path: "/",
                domain: ".samsung.com"
            }), e.cookies.del("iPlanetDirectoryPro"), e.cookies.del("iPlanetDirectoryPro", {
                path: "/",
                domain: ".samsung.com"
            }), e.cookies.del("iPlanetDirectoryProOptVal"), e.cookies.del("iPlanetDirectoryProOptVal", {
                path: "/",
                domain: ".samsung.com"
            })
        }

        function a() {
            return o(), s(), O = null, (USE_ESTORE || R) && i(!1), !1
        }

        function i(n) {
            var t = e.cookies.get("firstName"),
                o = e.cookies.get("lastName");
            null == t || null == t ? n ? "ca" != SITE_CD && "ca_fr" != SITE_CD ? (e(".gb-gnb__my-layer .s-mymenu-name").html(Granite.I18n.get("Hi, {0}", " ", SITE_CD)), e(".s-depth1-wrap .s-mymenu-name").html(Granite.I18n.get("Hi, {0}", " ", SITE_CD))) : (e(".gb-gnb__my-layer .s-mymenu-name").html(Granite.I18n.get("WELCOME", "", SITE_CD)), e(".s-depth1-wrap .s-mymenu-name").html(Granite.I18n.get("WELCOME", "", SITE_CD))) : "ca" != SITE_CD && "ca_fr" != SITE_CD ? (e(".gb-gnb__my-layer .s-mymenu-name").html(Granite.I18n.get("Hi, {0}", " ", SITE_CD)), e(".s-depth1-wrap .s-mymenu-name").html(Granite.I18n.get("Hi, {0}", " ", SITE_CD))) : (e(".gb-gnb__my-layer .s-mymenu-name").html(Granite.I18n.get("WELCOME", "", SITE_CD)), e(".s-depth1-wrap .s-mymenu-name").html(Granite.I18n.get("WELCOME", "", SITE_CD))) : "sec" == SITE_CD ? (e(".gb-gnb__my-layer .s-mymenu-name").html(Granite.I18n.get("Hi, {0}", "<strong>" + o + " " + t + "</strong>", SITE_CD)), e(".s-depth1-wrap .s-mymenu-name").html(Granite.I18n.get("Hi, {0}", "<strong>" + o + " " + t + "</strong>", SITE_CD))) : "vn" == SITE_CD ? (e(".gb-gnb__my-layer .s-mymenu-name").html(Granite.I18n.get("Hi, {0}", "<strong>" + o + "</strong>", SITE_CD)), e(".s-depth1-wrap .s-mymenu-name").html(Granite.I18n.get("Hi, {0}", "<strong>" + o + "</strong>", SITE_CD))) : "ca" == SITE_CD || "ca_fr" == SITE_CD ? (e(".gb-gnb__my-layer .s-mymenu-name").html(Granite.I18n.get("WELCOME", "", SITE_CD)), e(".s-depth1-wrap .s-mymenu-name").html(Granite.I18n.get("WELCOME", "", SITE_CD))) : (e(".gb-gnb__my-layer .s-mymenu-name").html(Granite.I18n.get("Hi, {0}", "<strong>" + t + " " + o + "</strong>", SITE_CD)), e(".s-depth1-wrap .s-mymenu-name").html(Granite.I18n.get("Hi, {0}", "<strong>" + t + " " + o + "</strong>", SITE_CD)))
        }

        function r() {
            return A = window.location.href, e("#findReturnURL", z).val(A), e("#findGoBackURL", z).val(A), _satellite.setVar("account", "account:find sign in info"), _satellite.track("account"), z.submit(), !1
        }

        function c() {
            A = "http://" + window.location.host + "/" + SITE_CD + "/", _satellite.setVar("account", "account:sign up"), _satellite.track("account"), e("#joinReturnURL", q).val(A), e("#joinGoBackURL", q).val(A);
            var n = e("#joinRegistURL", q).val();
            if ("sec" != SITE_CD) {
                var t = "",
                    o = window.location.port;
                if (t = null == o || "" == o || "80" == o || "8080" == o ? "https://" + window.location.host : "http://" + window.location.host, n.indexOf(window.location.hostname) < 0) {
                    var s = t + n;
                    e("#joinRegistURL", q).val(s)
                }
            }
            var a = e("#joinEmailActivationURL", q).val();
            if (a.indexOf(window.location.hostname) < 0) {
                var i = window.location.protocol + "//" + window.location.host + a;
                e("#joinEmailActivationURL", q).val(i)
            }
            return q.submit(), !1
        }

        function l(e, n) {
            var t = new Date;
            t.setDate(t.getDate() + n), document.cookie = "_common_saveEmail=" + encodeURIComponent(e) + "; path=/; domain=.samsung.com; expires=" + t.toGMTString() + ";"
        }

        function u() {
            var e = document.cookie + ";",
                n = e.indexOf("_common_saveEmail", 0),
                t = ""; - 1 != n && (e = e.substring(n, e.length), begin = e.indexOf("=", 0) + 1, end = e.indexOf(";", begin), t = decodeURIComponent(e.substring(begin, end))), "" != t && (K.next().css({
                visibility: "hidden"
            }), K.val(t), Z.attr("checked", "checked"), Z.prop("checked", !0), Z.next().addClass(Z.next().attr("data-acc-onclass")))
        }

        function m() {
            "N" == e.cookies.get("directCallFlv2") && (_satellite.setVar("GUID", e.cookies.get("guid", {
                domain: ".samsung.com"
            })), _satellite.track("login"), "undefined" != typeof dataLayer && "object" == typeof dataLayer && dataLayer.push({
                event: "login",
                eventNonInteraction: !0
            }), e.cookies.set("directCallFlv2", "Y", {
                expires: null,
                domain: ".samsung.com"
            }))
        }

        function _(n) {
            n ? (ss.Auth.getUserProfile(function(n) {
                null != n && "" != n ? "sec" == SITE_CD ? (e(".gb-gnb__my-layer .s-mymenu-name").html(Granite.I18n.get("Hi, {0}", "<strong>" + n.lastName + " " + n.firstName + "</strong>", SITE_CD)), e(".s-depth1-wrap .s-mymenu-name").html(Granite.I18n.get("Hi, {0}", "<strong>" + n.lastName + " " + n.firstName + "</strong>", SITE_CD))) : "vn" == SITE_CD ? (e(".gb-gnb__my-layer .s-mymenu-name").html(Granite.I18n.get("Hi, {0}", "<strong>" + n.lastName + "</strong>", SITE_CD)), e(".s-depth1-wrap .s-mymenu-name").html(Granite.I18n.get("Hi, {0}", "<strong>" + n.lastName + "</strong>", SITE_CD))) : "ca" == SITE_CD || "ca_fr" == SITE_CD ? (e(".gb-gnb__my-layer .s-mymenu-name").html(Granite.I18n.get("WELCOME", "", SITE_CD)), e(".s-depth1-wrap .s-mymenu-name").html(Granite.I18n.get("WELCOME", "", SITE_CD))) : (e(".gb-gnb__my-layer .s-mymenu-name").html(Granite.I18n.get("Hi, {0}", "<strong>" + n.firstName + " " + n.lastName + "</strong>", SITE_CD)), e(".s-depth1-wrap .s-mymenu-name").html(Granite.I18n.get("Hi, {0}", "<strong>" + n.firstName + " " + n.lastName + "</strong>", SITE_CD))) : "ca" != SITE_CD && "ca_fr" != SITE_CD ? (e(".gb-gnb__my-layer .s-mymenu-name").html(Granite.I18n.get("Hi, {0}", " ", SITE_CD)), e(".s-depth1-wrap .s-mymenu-name").html(Granite.I18n.get("Hi, {0}", " ", SITE_CD))) : (e(".gb-gnb__my-layer .s-mymenu-name").html(Granite.I18n.get("WELCOME", "", SITE_CD)), e(".s-depth1-wrap .s-mymenu-name").html(Granite.I18n.get("WELCOME", "", SITE_CD)))
            }), "sec" == SITE_CD ? (e(".s-login_new").hide(), e(".s-mymenu_new").show()) : (e(".s-login").hide(), ("se" == SITE_CD || "fi" == SITE_CD || "dk" == SITE_CD || "no" == SITE_CD) && e("#af_login").show(), e(".s-mymenu").show())) : "sec" == SITE_CD ? (e(".s-mymenu_new").hide(), e(".s-login_new").show()) : (("se" == SITE_CD || "fi" == SITE_CD || "dk" == SITE_CD || "no" == SITE_CD) && e("#af_login").hide(), e(".s-mymenu").hide(), e(".s-login").show())
        }

        function d() {
            function n(s) {
                o < t.length ? (estore.addWishListItemForce({
                    productCode: t[o]
                }, n), o++) : (e.cookies.deleteWishList(), e.EstoreIfQueue && e.EstoreIfQueue.setIsSignReady(!0))
            }
            var t = e.cookies.getWishList(),
                o = 0;
            t.length > 0 ? n() : e.EstoreIfQueue && e.EstoreIfQueue.setIsSignReady(!0)
        }

        function g() {
            e(".layer_popup").hide(), ae.empty()
        }

        function C(n) {
            if (n) {
                var t = LOGIN.msg.errorTitleText,
                    o = "";
                switch (n) {
                    case "DW":
                    case "AW":
                    case "WP":
                        o = LOGIN.msg.errorText1;
                        break;
                    case "BA":
                        o = LOGIN.msg.errorText2;
                        break;
                    case "UK":
                        o = LOGIN.msg.errorText3;
                        break;
                    case "ES":
                        o = LOGIN.msg.errorText4
                }
                W = ce, -1 == "pop-tit".indexOf(e("#confirmPopup >div> div.popup_wrap").find("h2").attr("class")) && (ce.append('<h2 class="pop-tit">'), ce.append('<p class="msg-text tc">')), e(".pop-tit", ce).text(t), e(".msg-text", ce).text(o)
            }
            if (ss.Popover.hideActive(ss.Popover.activePopover), e(".layer_popup").hide(), L && "in" != SITE_CD) {
                e("#privacy-terms").parent().find(".check_text").empty(), e("#privacy-terms2").parent().find(".check_text").remove(), e("#privacy-terms2").parent().find(".check_txt").remove();
                var s, a;
                Y.length > 0 && (s = Y[0].data.content, null != Y[1] && (a = Y[1].data.content)), e("#privacy-terms").parent().find(".check_text").append(s), null != a && void 0 != a && e("#privacy-terms2").parent().append(a)
            }
            W && (ae.empty(), ae.append('<div class="lightbox-skrim"></div>'), W.show(), e(".lightbox-skrim").show(), document.getElementById(W.children("div").attr("id")).popAlign())
        }

        function I(n) {
            var t = "",
                o = e.cookies.get("jwt_" + M, {
                    domain: ".samsung.com"
                });
            L && (t = STORE_DOMAIN + "/v4/identity/preferences"), e.ajax({
                headers: {
                    "Cache-Control": "no-cache",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "x-ecom-app-id": "identity-store",
                    "x-ecom-jwt": o
                },
                url: t,
                type: "PUT",
                dataType: "json",
                data: JSON.stringify(n),
                xhrFields: {
                    withCredentials: !0
                },
                beforeSend: function(e) {
                    "Y" == P && e.setRequestHeader("x-ecom-locale", F)
                },
                success: function(e) {
                    g(), W = re, C()
                },
                error: function(e, n, t) {}
            })
        }

        function f() {
            var n = "",
                t = e.cookies.get("guid", {
                    domain: ".samsung.com"
                });
            n = "au" == SITE_CD || "de" == SITE_CD || "latin" == SITE_CD || "tw" == SITE_CD || "uk" == SITE_CD || "ru" == SITE_CD || "ae" == SITE_CD || "ae_ar" == SITE_CD || "vn" == SITE_CD || "th" == SITE_CD || "sa" == SITE_CD || "sa_en" == SITE_CD || "nz" == SITE_CD || "fr" == SITE_CD || "nl" == SITE_CD || "be" == SITE_CD || "be_fr" == SITE_CD || "ca" == SITE_CD || "ca_fr" == SITE_CD || "se" == SITE_CD || "dk" == SITE_CD || "fi" == SITE_CD || "no" == SITE_CD || "at" == SITE_CD || "my" == SITE_CD || "sk" == SITE_CD || "cz" == SITE_CD ? STORE_DOMAIN + "/" + SITE_CD + "/ng/p4v1/agreeStorePolicy?receiveEmail=" + b : ("es" == SITE_CD || "it" == SITE_CD) && STORE_DOMAIN.indexOf("https://") > -1 ? STORE_DOMAIN + "/" + SITE_CD + "/ng/p4v1/agreeStorePolicy?receiveEmail=" + b : STORE_DOMAIN + "/" + SITE_CD + "/ng/p4v1/setAgreeStorePolicy?receiveEmail=" + b, e.ajax("ca" == SITE_CD || "ca_fr" == SITE_CD ? {
                url: n,
                type: "GET",
                data: {
                    ssoID: t
                },
                dataType: "json",
                xhrFields: {
                    withCredentials: !0
                },
                contentType: "application/x-www-form-urlencoded",
                crossDomain: !0,
                beforeSend: function() {},
                success: function(e) {
                    g(), "0000" == e.resultCode && ("sec" == SITE_CD && (_satellite.setVar("account", "login:samsung account|fail:" + (new Date).format("yyyyMMddHHmm") + "36"), _satellite.track("account")), W = re, C())
                },
                error: function(e, n, t) {
                    "sec" == SITE_CD && (_satellite.setVar("account", "login:samsung account|fail:" + (new Date).format("yyyyMMddHHmm") + "37"), _satellite.track("account"))
                }
            } : {
                url: n,
                type: "GET",
                dataType: "jsonp",
                data: {
                    ssoID: t
                },
                jsonp: "callback",
                beforeSend: function() {},
                success: function(e) {
                    g(), "0000" == e.resultCode && ("sec" == SITE_CD && (_satellite.setVar("account", "login:samsung account|fail:" + (new Date).format("yyyyMMddHHmm") + "36"), _satellite.track("account")), W = re, C())
                },
                error: function(e, n, t) {
                    "sec" == SITE_CD && (_satellite.setVar("account", "login:samsung account|fail:" + (new Date).format("yyyyMMddHHmm") + "37"), _satellite.track("account"))
                }
            })
        }

        function S() {
            e("#signInForm").attr("action", j), A = window.location.href;
            var n = e("#redirect_uri", Q).val();
            if ("sec" != SITE_CD) {
                var t = "",
                    o = window.location.port;
                if (t = null == o || "" == o || "80" == o || "8080" == o ? "https://" + window.location.host : "http://" + window.location.host, n.indexOf(window.location.hostname) < 0) {
                    var s = t + n;
                    e("#redirect_uri", Q).val(s)
                }
            }
            e("#response_type", Q).val("code"), e("#countryCode", Q).val(e("#countryCode", Q).val()), e("#redirect_uri", Q).val(e("#redirect_uri", Q).val()), e("#state", Q).val("GLB"), e("#goBackURL", Q).val(A), e("#scope", Q).val("");
            var a = e("#loginAccountServiceId").val();
            if (a) {
                var i = a;
                e("#client_id", Q).val(i)
            }
            var r = e("#languageCode").val(),
                c = e("#countryCode").val();
            if (r && c) {
                var u = r + "_" + c;
                e("#locale", Q).val(u)
            }
            e.cookies.set("returnURL", A, {
                domain: ".samsung.com"
            }), Q.submit();
            var m = Z.is(":checked");
            m ? l(e.trim(K.val()), 7) : l(null, -1), A = void 0
        }

        function E() {
            e("#signOutForm").attr("action", G), A = window.location.href;
            var n = e("#signOutURL", J).val(),
                t = "",
                o = window.location.port;
            if (t = null == o || "" == o || "80" == o || "8080" == o ? "https://" + window.location.host : "http://" + window.location.host, n.indexOf(window.location.hostname) < 0) {
                var s = t + n;
                e("#signOutURL", J).val(s)
            }
            e("#state", J).val("GLB");
            var a = e("#loginAccountServiceId").val();
            if (a) {
                var i = a;
                e("#client_id", J).val(i)
            }
            e.cookies.set("returnURL", A, {
                domain: ".samsung.com"
            }), J.submit(), A = void 0
        }

        function T() {
            q = e("#joinForm"), z = e("#findAccountForm"), Q = e("#signInForm"), J = e("#signOutForm"), $ = e("#loginLayerPopup"), K = e("#email"), X = e("#password"), Z = e("#save-mail"), ee = e("label[for='save-mail']"), ne = e("#errorId"), te = e("#errorPw"), oe = e("#status"), $signInBtn = e("input[type='submit'].sign-in__btn-submit"), $signUpBtn = e(".sign-in__btn-submit__black"), $findAccountBtn = e(".sign-in__form-forgot-password a"), $signToggleArrow = e("#signToggleArrow"), se = e("#loginLayerPopup .login-close-btn"), $loginLeaveBtn = e(".login-leave-btn"), ae = e("#dimContainer"), $storeLoginCheckIframe = e("#storeLoginCheckIframe"), ie = e("#privacyPopup"), re = e("#preferencePopup"), ce = e("#confirmPopup"), le = e("#privacyBtn", ie), $privacyCheck1 = e("#privacy-terms", ie), $privacyCheck2 = e("#privacy-terms2", ie), $errorPrivacy = e("#errorPrivacy", ie), ue = e("#preferenceCheckBtn", re), me = e("#privacyCloseBtn")
        }

        function p() {
            function n(e) {
                0 == e ? S() : ss.Auth.signOut(A)
            }
            $signInBtn.click(function() {
                signIn()
            }), $signUpBtn.click(function() {
                c()
            }), $findAccountBtn.click(function() {
                r()
            }), se.click(function() {
                e(this).closest("#loginLayerPopup").is(":visible") && (e("body").removeClass("gb-login-open"), e("#loginLayerPopup .popAlign").trigger("clickoutside", "touchstartoutside"))
            }), $loginLeaveBtn.click(function() {
                return !1
            }), e("#popup_privacy").find("button").on("click", function() {
                e("#privacyPopup").attr("style", "display:none"), e("#dimContainer").html("")
            }), e("#popup_privacy").find("a.button.login-leave-btn").on("click", function() {
                e("#privacyPopup").attr("style", "display:none"), e("#dimContainer").html("")
            }), e(document).on("click", V, function(t) {
                t.preventDefault(), "br" == SITE_CD || "ca" == SITE_CD || "ca_fr" == SITE_CD ? window.location.href = "desktop" != ss.Detect().device ? e(this).attr("href") : e(this).find("a").attr("href") : L ? ss.Auth.checkSignInUs() : ss.Auth.checkSignIn(n)
            }), e(document).on("click", B, function(t) {
                t.preventDefault();
                var o = this,
                    s = e(o).attr("data-return-url"),
                    a = e("#gnbRunmodeInfo").val();
                return L ? ("dev" == a ? A = window.location.protocol + "//" + window.location.host + "/content/samsung/" + SITE_CD + ".html" : "qa" == a ? A = window.location.protocol + "//" + window.location.host + "/" + SITE_CD + ".html" : "live" == a && (A = window.location.protocol + "//" + window.location.host + "/" + SITE_CD + "/"), ss.Auth.signOutUs()) : ("ca" != SITE_CD && "ca_fr" != SITE_CD ? null != s && "" != s ? A = s : "dev" == a ? A = window.location.protocol + "//" + window.location.host + "/content/samsung/" + SITE_CD + ".html" : "qa" == a ? A = window.location.protocol + "//" + window.location.host + "/" + SITE_CD + ".html" : "live" == a && (A = window.location.protocol + "//" + window.location.host + "/" + SITE_CD + "/") : window.location.href = "desktop" != ss.Detect().device ? e(this).attr("href") : e(this).find("a").attr("href"), ss.Auth.checkSignIn(n)), !1
            }), e(".sign_input").focusin(function() {
                switch (e(this).attr("id")) {
                    case K.attr("id"):
                        ne.hide();
                        break;
                    case X.attr("id"):
                        te.hide()
                }
            }), e(".sign-in__form-text").unbind("keydown").bind("keydown", function(n) {
                if ("13" == n.keyCode) switch (n.preventDefault(), e(this).attr("id")) {
                    case K.attr("id"):
                    case X.attr("id"):
                        signIn()
                }
            }), Z.focusin(function(e) {
                e.preventDefault(), ee.addClass("fs-boarder")
            }), Z.focusout(function(e) {
                e.preventDefault(), ee.removeClass()
            }), le.click(function() {
                var n, t, o = $privacyCheck1.is(":checked");
                if (!o) return $errorPrivacy.show(), !1;
                if (_satellite.setVar("account", "account:email verification"), _satellite.track("account"), b = $privacyCheck2.is(":checked"), Y.length > 0 && (n = Y[0].id, null != Y[1] && (t = Y[1].id)), 0 == k)
                    if (L) {
                        var s = "",
                            a = $privacyCheck1.is(":checked") ? !0 : !1,
                            i = void 0 != t && null != t && $privacyCheck2.is(":checked") ? !0 : !1;
                        "in" == SITE_CD ? s = {
                            terms_and_conditions: {
                                is_accepted: a
                            },
                            email_consent: i
                        } : (s = '{"consents": {"' + n + '" : {"is_accepted" : ' + a + "}", void 0 != t && null != t && (s += ',"' + t + '" : {"is_accepted" : ' + i + "}"), s += "}}"), I(s)
                    } else f();
                else e.cookies.set("shopPrivacyPolicyAgreeYN", "Y", {
                    domain: ".samsung.com"
                }), w()
            }), $privacyCheck1.change(function() {
                $errorPrivacy.hide()
            }), ue.click(function() {
                if ("Y" == H) L ? (e("#accountModifyForm").attr("target", ""), e("#accountModifyForm").submit()) : window.location.href = N;
                else if (null != _e && "" != _e)
                    if ("ca" == SITE_CD || "ca_fr" == SITE_CD) {
                        var n = e.cookies.get("prof_id", {
                                domain: ".samsung.com"
                            }),
                            t = e.cookies.get("prof_country", {
                                domain: ".samsung.com"
                            });
                        window.location.href = "https://support-ca.samsung.com/seca/myaccount/ap/premodify/go?prof_id=" + n + "&lang=" + t + "&page=myaccount"
                    } else window.location.href = STORE_DOMAIN + _e;
                else window.location.href = STORE_DOMAIN + "/" + SITE_CD + "/ng/my-samsung/updatemyprofile"
            }), me.click(function() {
                e(this).closest("#preferencePopup").is(":visible") && (e(this).closest("#preferencePopup").hide(), e("#dimContainer > .lightbox-skrim").hide())
            }), $signToggleArrow.click(function() {
                e(".icon-down-arrow", $).toggleClass("icon-up-arrow")
            })
        }

        function D(e) {
            e ? y(e) : y()
        }

        function h(n) {
            var t, o = !0;
            t = "in" != SITE_CD ? STORE_DOMAIN + "/v4/identity/preferences?display_context=pre_purchase" : STORE_DOMAIN + "/v4/identity/preferences", e.ajax({
                headers: {
                    "Cache-Control": "no-cache",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "x-ecom-app-id": "identity-store",
                    "x-ecom-jwt": n
                },
                url: t,
                type: "GET",
                dataType: "json",
                xhrFields: {
                    withCredentials: !0
                },
                beforeSend: function(e) {
                    "Y" == P && e.setRequestHeader("x-ecom-locale", F)
                },
                success: function(e) {
                    if (null != e && "" != e) {
                        if ("pl" == SITE_CD) o = !0;
                        else if ("in" == SITE_CD) 1 != e.terms_and_conditions.is_accepted && (o = !1);
                        else if (null != e.consents && "" != e.consents) {
                            Y = new Array(e.consents.length);
                            for (var n = 0; n < e.consents.length; n++) {
                                var t = e.consents[n];
                                Y[n] = t, 1 == t.data.is_required && 1 != t.is_accepted && (o = !1)
                            }
                        }
                        0 == o && (g(), W = ie, C())
                    }
                },
                error: function(e, n, t) {}
            })
        }

        function y(n) {
            var t = e.cookies.get("jwt_" + M, {
                    domain: ".samsung.com"
                }),
                a = !0,
                i = function() {
                    var t, a, i, r, c = !0,
                        l = e.cookies.get("ReD", {
                            domain: ".samsung.com"
                        }),
                        u = e("#loginAccountServiceId").val(),
                        _ = function() {
                            _satellite.setVar("account", "login:samsung account|fail:" + (new Date).format("yyyyMMddHHmm") + "28"), _satellite.track("account"), o(), s()
                        };
                    null != l ? (t = l.split("|"), a = t[0], i = t[2], r = t[1], e.ajax({
                        headers: {
                            "Cache-Control": "no-cache",
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "*"
                        },
                        url: STORE_DOMAIN + "/v2/sso/sa/login?access_token=" + a + "&api_server_url=" + i + "&user_id=" + r + "&encrypted=access_token,api_server_url&app_id=" + u,
                        type: "GET",
                        dataType: "json",
                        xhrFields: {
                            withCredentials: !0
                        },
                        crossDomain: !0,
                        beforeSend: function(e) {
                            "Y" == P && e.setRequestHeader("x-ecom-locale", F)
                        },
                        success: function(n) {
                            var t = e.cookies.get("jwt_" + M, {
                                domain: ".samsung.com"
                            });
                            m(), t ? e.ajax({
                                headers: {
                                    "Cache-Control": "no-cache",
                                    "Content-Type": "application/json",
                                    "Access-Control-Allow-Origin": "*"
                                },
                                url: STORE_DOMAIN + "/v1/sso/user/validate",
                                type: "POST",
                                dataType: "json",
                                data: JSON.stringify({
                                    jwt: t
                                }),
                                xhrFields: {
                                    withCredentials: !0
                                },
                                beforeSend: function(e) {
                                    "Y" == P && e.setRequestHeader("x-ecom-locale", F)
                                },
                                success: function(n) {
                                    if (200 == n.statusCode || "200" == n.statusCode) {
                                        var o = e.cookies.get("jwt_" + M, {
                                            domain: ".samsung.com"
                                        });
                                        e.ajax({
                                            headers: {
                                                "Cache-Control": "no-cache",
                                                "Content-Type": "application/json",
                                                "Access-Control-Allow-Origin": "*",
                                                "x-ecom-jwt": o
                                            },
                                            url: STORE_DOMAIN + "/v4/shopping-carts/",
                                            type: "POST",
                                            dataType: "json",
                                            data: JSON.stringify({}),
                                            xhrFields: {
                                                withCredentials: !0
                                            },
                                            beforeSend: function(e) {
                                                "Y" == P && e.setRequestHeader("x-ecom-locale", F)
                                            },
                                            success: function() {
                                                var n = e.cookies.get("s_ecom_sc_cnt", {
                                                    domain: ".samsung.com"
                                                });
                                                null != n && "" != n && (e("#usCartCount").show(), e("#usCartCount").html('<span class="blind">' + e("#productCountText").val() + " : </span>" + n))
                                            }
                                        }), null != n.user_info.firstname && "" != n.user_info.firstname ? (e(".s-login").hide(), ("se" == SITE_CD || "fi" == SITE_CD || "dk" == SITE_CD || "no" == SITE_CD) && e("#af_login").show(), e(".s-mymenu").show(), e(".gb-gnb__my-layer .s-mymenu-name").html(Granite.I18n.get("Hi, {0}", "<strong>" + n.user_info.firstname + " " + n.user_info.lastname + "</strong>", SITE_CD)), e(".s-depth1-wrap .s-mymenu-name").html(Granite.I18n.get("Hi, {0}", "<strong>" + n.user_info.firstname + " " + n.user_info.lastname + "</strong>", SITE_CD))) : e.ajax({
                                            headers: {
                                                "Cache-Control": "no-cache",
                                                "Content-Type": "application/json",
                                                "Access-Control-Allow-Origin": "*"
                                            },
                                            url: STORE_DOMAIN + "/v1/sso/jwt/details",
                                            type: "POST",
                                            dataType: "json",
                                            data: JSON.stringify({
                                                jwt: o
                                            }),
                                            xhrFields: {
                                                withCredentials: !0
                                            },
                                            beforeSend: function(e) {
                                                "Y" == P && e.setRequestHeader("x-ecom-locale", F)
                                            },
                                            success: function(n) {
                                                null != n && "" != n && (null != n.user_info.firstname && "" != n.user_info.firstname ? (e(".s-login").hide(), ("se" == SITE_CD || "fi" == SITE_CD || "dk" == SITE_CD || "no" == SITE_CD) && e("#af_login").show(), e(".s-mymenu").show(), e(".gb-gnb__my-layer .s-mymenu-name").html(Granite.I18n.get("Hi, {0}", "<strong>" + n.user_info.firstname + " " + n.user_info.lastname + "</strong>", SITE_CD)), e(".s-depth1-wrap .s-mymenu-name").html(Granite.I18n.get("Hi, {0}", "<strong>" + n.user_info.firstname + " " + n.user_info.lastname + "</strong>", SITE_CD))) : (e(".s-login").hide(), ("se" == SITE_CD || "fi" == SITE_CD || "dk" == SITE_CD || "no" == SITE_CD) && e("#af_login").show(), e(".s-mymenu").show(), e(".gb-gnb__my-layer .s-mymenu-name").html(Granite.I18n.get("Hi, {0}", "<strong>User</strong>", SITE_CD)), e(".s-depth1-wrap .s-mymenu-name").html(Granite.I18n.get("Hi, {0}", "<strong>User</strong>", SITE_CD))))
                                            }
                                        }), h(t)
                                    } else c = !1, e.cookies.del("jwt_" + M, {
                                        domain: ".samsung.com"
                                    }), _()
                                },
                                error: function(n, t, o) {
                                    c = !1, e.cookies.del("jwt_" + M, {
                                        domain: ".samsung.com"
                                    }), _()
                                }
                            }) : (c = !1, _())
                        },
                        error: function(e, n, t) {
                            c = !1, _()
                        }
                    })) : n && S()
                };
            t ? e.ajax({
                headers: {
                    "Cache-Control": "no-cache",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*"
                },
                url: STORE_DOMAIN + "/v1/sso/user/validate",
                type: "POST",
                dataType: "json",
                data: JSON.stringify({
                    jwt: t
                }),
                xhrFields: {
                    withCredentials: !0
                },
                beforeSend: function(e) {
                    "Y" == P && e.setRequestHeader("x-ecom-locale", F)
                },
                success: function(n) {
                    if (200 == n.statusCode || "200" == n.statusCode) {
                        var o = e.cookies.get("jwt_" + M, {
                            domain: ".samsung.com"
                        });
                        m(), null != n.user_info.firstname && "" != n.user_info.firstname ? (e(".s-login").hide(), ("se" == SITE_CD || "fi" == SITE_CD || "dk" == SITE_CD || "no" == SITE_CD) && e("#af_login").show(), e(".s-mymenu").show(), e(".gb-gnb__my-layer .s-mymenu-name").html(Granite.I18n.get("Hi, {0}", "<strong>" + n.user_info.firstname + " " + n.user_info.lastname + "</strong>", SITE_CD)), e(".s-depth1-wrap .s-mymenu-name").html(Granite.I18n.get("Hi, {0}", "<strong>" + n.user_info.firstname + " " + n.user_info.lastname + "</strong>", SITE_CD))) : e.ajax({
                            headers: {
                                "Cache-Control": "no-cache",
                                "Content-Type": "application/json",
                                "Access-Control-Allow-Origin": "*"
                            },
                            url: STORE_DOMAIN + "/v1/sso/jwt/details",
                            type: "POST",
                            dataType: "json",
                            data: JSON.stringify({
                                jwt: o
                            }),
                            xhrFields: {
                                withCredentials: !0
                            },
                            beforeSend: function(e) {
                                "Y" == P && e.setRequestHeader("x-ecom-locale", F)
                            },
                            success: function(n) {
                                null != n && "" != n && (null != n.user_info.firstname && "" != n.user_info.firstname ? (e(".s-login").hide(), ("se" == SITE_CD || "fi" == SITE_CD || "dk" == SITE_CD || "no" == SITE_CD) && e("#af_login").show(), e(".s-mymenu").show(), e(".gb-gnb__my-layer .s-mymenu-name").html(Granite.I18n.get("Hi, {0}", "<strong>" + n.user_info.firstname + " " + n.user_info.lastname + "</strong>", SITE_CD)), e(".s-depth1-wrap .s-mymenu-name").html(Granite.I18n.get("Hi, {0}", "<strong>" + n.user_info.firstname + " " + n.user_info.lastname + "</strong>", SITE_CD))) : (e(".s-login").hide(), ("se" == SITE_CD || "fi" == SITE_CD || "dk" == SITE_CD || "no" == SITE_CD) && e("#af_login").show(), e(".s-mymenu").show(), e(".gb-gnb__my-layer .s-mymenu-name").html(Granite.I18n.get("Hi, {0}", "<strong>User</strong>", SITE_CD)), e(".s-depth1-wrap .s-mymenu-name").html(Granite.I18n.get("Hi, {0}", "<strong>User</strong>", SITE_CD))))
                            }
                        }), h(t)
                    } else a = !1, e.cookies.del("jwt_" + M, {
                        domain: ".samsung.com"
                    }), i()
                },
                error: function(n, t, o) {
                    a = !1, e.cookies.del("jwt_" + M, {
                        domain: ".samsung.com"
                    }), i()
                }
            }) : n && (a = !1, i())
        }

        function w() {
            var o = e.cookies.get("snsSessionId", {
                    domain: ".samsung.com"
                }),
                i = e.cookies.get("xsdcxyn", {
                    domain: ".samsung.com"
                }),
                r = e.cookies.get("firstName", {
                    domain: ".samsung.com"
                }),
                c = e.cookies.get("lastName", {
                    domain: ".samsung.com"
                }),
                l = e.cookies.get("guid", {
                    domain: ".samsung.com"
                }),
                g = "Y" == e.cookies.get("estoreLoginRequesting", {
                    domain: ".samsung.com"
                }) ? !0 : !1;
            if (u(), m(), "sec" == SITE_CD ? (e(".s-mymenu_new").hide(), e(".s-login_new").show()) : (("se" == SITE_CD || "fi" == SITE_CD || "dk" == SITE_CD || "no" == SITE_CD) && e("#af_login").hide(), e(".s-mymenu").hide(), e(".s-login").show()), ("YG" == i || "YH" == i) && r && c)
                if (USE_ESTORE || R) {
                    var I = !1;
                    if (!g) {
                        for (var E = [".samsung.com"], T = 0; T < E.length; T++)
                            if (document.referrer.indexOf(E[T]) > -1) {
                                I = !0;
                                break
                            }
                        if (I)
                            for (var p = [".samsung.com"], D = document.referrer.replace(/http(s)?:\/\//, ""), T = 0; T < p.length; T++)
                                if ("es" == SITE_CD || "de" == SITE_CD || "latin" == SITE_CD || "tw" == SITE_CD || "uk" == SITE_CD || "ru" == SITE_CD || "ae" == SITE_CD || "ae_ar" == SITE_CD || "vn" == SITE_CD || "th" == SITE_CD || "sa" == SITE_CD || "sa_en" == SITE_CD || "nz" == SITE_CD || "it" == SITE_CD || "fr" == SITE_CD || "nl" == SITE_CD || "sec" == SITE_CD || "au" == SITE_CD || "cn" == SITE_CD || "ca" == SITE_CD || "ca_fr" == SITE_CD || "se" == SITE_CD || "dk" == SITE_CD || "fi" == SITE_CD || "no" == SITE_CD || "at" == SITE_CD || "my" == SITE_CD || "sk" == SITE_CD || "cz" == SITE_CD) {
                                    if ("account.samsung.com" == p[T] || "stg-account.samsung.com" == p[T]) var h = p[T] + "/";
                                    else var h = p[T] + "/" + SITE_CD + "/";
                                    if (D.indexOf(h) > -1 && "Y" != e.cookies.get("isStoreLogedIn")) {
                                        I = !1;
                                        break
                                    }
                                } else {
                                    var h = p[T] + "/" + SITE_CD + "/";
                                    if (h.indexOf(D) > -1 && "Y" != e.cookies.get("isStoreLogedIn")) {
                                        I = !1;
                                        break
                                    }
                                }
                    }
                    if (I) _(!0), e.EstoreIfQueue && e.EstoreIfQueue.setIsSignReady(!0);
                    else if (nextGenLoginResult = function(n) {
                            return "0000" != n.resultCode ? (C("903" == n.resultCode ? "BA" : n.customerStatus ? n.customerStatus : "UK"), void t()) : ((0 == n.hasAddInfo && ("au" == SITE_CD || "de" == SITE_CD || "latin" == SITE_CD || "tw" == SITE_CD || "uk" == SITE_CD || "ru" == SITE_CD || "ae" == SITE_CD || "ae_ar" == SITE_CD || "vn" == SITE_CD || "th" == SITE_CD || "sa" == SITE_CD || "sa_en" == SITE_CD || "nz" == SITE_CD || "fr" == SITE_CD || "nl" == SITE_CD || "be" == SITE_CD || "be_fr" == SITE_CD || "ca" == SITE_CD || "ca_fr" == SITE_CD || "se" == SITE_CD || "dk" == SITE_CD || "fi" == SITE_CD || "no" == SITE_CD || "at" == SITE_CD || "my" == SITE_CD || "sk" == SITE_CD || "cz" == SITE_CD || ("es" == SITE_CD || "it" == SITE_CD) && STORE_DOMAIN.indexOf("https://") > -1) || 0 == n.hasAddInfo && "sec" != SITE_CD && "cn" != SITE_CD) && (k ? f() : (W = ie, C())), _(!0), "Y" == e.cookies.get("estoreLoginRequesting", {
                                domain: ".samsung.com"
                            }) && (t(), ss.Auth.getGlobalCartCount()), d(), void e.cookies.set("isStoreLogedIn", "Y"))
                        }, e.cookies.set("estoreLoginRequesting", "Y", {
                            domain: ".samsung.com"
                        }), "sec" == SITE_CD) {
                        var y = STORE_DOMAIN.split("/")[2];
                        e.ajax({
                            url: "https://" + y + "/" + SITE_CD + "/ng/p4v1/sessionCheck",
                            type: "GET",
                            dataType: "jsonp",
                            jsonp: "callback",
                            success: function(e) {
                                var n = "0000" == e.resultCode ? !0 : !1;
                                return "sec" == SITE_CD && 0 == n ? void a() : void nextGenLoginResult(e)
                            },
                            error: function(e, n, t) {
                                _satellite.setVar("account", "login:samsung account|fail:" + (new Date).format("yyyyMMddHHmm") + "02"), _satellite.track("account"), x = !1
                            }
                        })
                    } else if ("ca" == SITE_CD || "ca_fr" == SITE_CD) try {
                        var y = STORE_DOMAIN.split("/")[2],
                            w = "https://" + y + "/" + SITE_CD + "/ng/p4v1/sessionCheck";
                        e.ajax({
                            url: w,
                            type: "GET",
                            data: {
                                ssoID: l
                            },
                            dataType: "json",
                            xhrFields: {
                                withCredentials: !0
                            },
                            contentType: "application/x-www-form-urlencoded",
                            crossDomain: !0,
                            success: function(e) {
                                var n = "0000" == e.resultCode ? !0 : !1;
                                "latin" == SITE_CD && (n = !0, e.hasAddInfo = !0), n ? nextGenLoginResult(e) : (_satellite.setVar("account", "login:samsung account|fail:" + (new Date).format("yyyyMMddHHmm") + "28"), _satellite.track("account"), ss.Auth.signOut())
                            },
                            error: function(e, n, t) {
                                _satellite.setVar("account", "login:samsung account|fail:" + (new Date).format("yyyyMMddHHmm") + "29"), _satellite.track("account"), x = !1
                            }
                        }), x || "sec" == SITE_CD || ss.Auth.signOut()
                    } catch (v) {
                        _satellite.setVar("account", "login:samsung account|fail:" + (new Date).format("yyyyMMddHHmm") + "29"), _satellite.track("account"), x = !1
                    } else if ("es" == SITE_CD || "de" == SITE_CD || "latin" == SITE_CD || "tw" == SITE_CD || "uk" == SITE_CD || "ru" == SITE_CD || "ae" == SITE_CD || "ae_ar" == SITE_CD || "vn" == SITE_CD || "th" == SITE_CD || "sa" == SITE_CD || "sa_en" == SITE_CD || "nz" == SITE_CD || "it" == SITE_CD || "fr" == SITE_CD || "nl" == SITE_CD || "au" == SITE_CD || "be" == SITE_CD || "be_fr" == SITE_CD || "se" == SITE_CD || "dk" == SITE_CD || "fi" == SITE_CD || "no" == SITE_CD || "at" == SITE_CD || "my" == SITE_CD || "sk" == SITE_CD || "cz" == SITE_CD) try {
                        var y = STORE_DOMAIN.split("/")[2],
                            w = "https://" + y + "/" + SITE_CD + "/ng/p4v1/sessionCheck";
                        e.ajax({
                            url: w,
                            type: "GET",
                            dataType: "jsonp",
                            data: {
                                ssoID: l
                            },
                            jsonp: "callback",
                            success: function(e) {
                                var n = "0000" == e.resultCode ? !0 : !1;
                                "latin" == SITE_CD && (n = !0, e.hasAddInfo = !0), n ? nextGenLoginResult(e) : (_satellite.setVar("account", "login:samsung account|fail:" + (new Date).format("yyyyMMddHHmm") + "28"), _satellite.track("account"), ss.Auth.signOut())
                            },
                            error: function(e, n, t) {
                                _satellite.setVar("account", "login:samsung account|fail:" + (new Date).format("yyyyMMddHHmm") + "29"), _satellite.track("account"), x = !1
                            }
                        }), x || "sec" == SITE_CD || ss.Auth.signOut()
                    } catch (v) {
                        _satellite.setVar("account", "login:samsung account|fail:" + (new Date).format("yyyyMMddHHmm") + "29"), _satellite.track("account"), x = !1
                    } else "cn" == SITE_CD ? (e("body").append("<iframe id='storeLoginIframe' src='" + STORE_DOMAIN + "/" + SITE_CD + "/ng/p4v1/login' style='display:block;width:0px;height:0px;border:none;'></iframe>"), e("#storeLoginIframe").load(function() {
                        e("#storeLoginIframe").unbind("load");
                        try {
                            document.getElementById("storeLoginIframe").contentWindow.postMessage("", "*");
                            var n = 0,
                                t = STORE_DOMAIN.split("/")[2];
                            e.ajax({
                                url: "https://" + t + "/" + SITE_CD + "/ng/p4v1/getSessionCheck",
                                type: "GET",
                                dataType: "jsonp",
                                jsonp: "callback",
                                success: function(o) {
                                    function s(o) {
                                        n++, e.ajax({
                                            url: "https://" + t + "/" + SITE_CD + "/ng/p4v1/getSessionCheck",
                                            type: "GET",
                                            dataType: "jsonp",
                                            jsonp: "callback",
                                            success: function(e) {
                                                var t = "0000" == e.resultCode ? !0 : !1;
                                                i = "N", t ? (n = 0, nextGenLoginResult(e)) : (_satellite.setVar("account", "login:samsung account|fail:" + (new Date).format("yyyyMMddHHmm") + "|case2"), _satellite.track("account"), (n = 1 && "Y" == i) ? (i = "N", setTimeout(function(e) {
                                                    return n = 2,
                                                        function() {
                                                            s(e)
                                                        }
                                                }(e), 5e3)) : ("N" == i, ss.Auth.signOut()))
                                            },
                                            error: function(e, n, t) {
                                                _satellite.setVar("account", "login:samsung account|fail:" + (new Date).format("yyyyMMddHHmm") + "|case3"), _satellite.track("account"), x = !1
                                            }
                                        })
                                    }
                                    var a = "0000" == o.resultCode ? !0 : !1,
                                        i = "N";
                                    n++, a ? (n = 0, nextGenLoginResult(o)) : (_satellite.setVar("account", "login:samsung account|fail:" + (new Date).format("yyyyMMddHHmm") + "|case1"), _satellite.track("account"), setTimeout(function(e) {
                                        return function() {
                                            s(e)
                                        }
                                    }(o), 6e3))
                                },
                                error: function(e, n, t) {
                                    _satellite.setVar("account", "login:samsung account|fail:" + (new Date).format("yyyyMMddHHmm") + "|case3"), _satellite.track("account"), x = !1
                                }
                            }), x || ss.Auth.signOut()
                        } catch (o) {
                            x = !1, "sec" != SITE_CD && ss.Auth.signOut()
                        }
                    })) : R && _(!0)
                } else _(!0);
            else i ? "br" == SITE_CD || "ca" == SITE_CD || "ca_fr" == SITE_CD ? (A = window.location.href, s(), e.cookies.set("returnURL", A, {
                domain: ".samsung.com"
            }), window.location.href = "ca" == SITE_CD ? "https://www.samsung.com/ca/samsungaccount/?gohome=Y" : "ca_fr" == SITE_CD ? "https://www.samsung.com/ca_fr/samsungaccount/?gohome=Y" : j) : S() : o && (_(!0), USE_ESTORE && d());
            ss.Auth.getGlobalCartCount();
            var b = n(document.location.search);
            (null != b.customerStatus || null != b.isblock) && C(b.isblock && "true" == b.isblock ? "BA" : data.customerStatus ? data.customerStatus : "UK")
        }

        function v() {
            var n = e.cookies.get("xsdcxyn", {
                    domain: ".samsung.com"
                }),
                t = e.cookies.get("guid", {
                    domain: ".samsung.com"
                });
            L ? n ? D(n) : D() : n && k ? e.ajax({
                url: STORE_DOMAIN + "/" + SITE_CD + "/ng/p4v1/getGuidCheckInfo",
                type: "GET",
                dataType: "jsonp",
                data: {
                    ssoID: t
                },
                jsonp: "callback",
                beforeSend: function() {},
                success: function(e) {
                    "0000" == e.resultCode ? "N" == e.resultValue ? (g(), W = ie, C()) : w() : ss.Auth.signOut()
                },
                error: function(e, n, t) {}
            }) : w()
        }
        var k = "es" == SITE_CD ? !0 : !1,
            b = !1,
            O = null,
            x = !0,
            A = "",
            j = (location.href, e("#loginLinkURL").val()),
            G = e("#logoutURL").val(),
            R = e("#isLoginWithNoStore").val(),
            H = e("#newShopCountryYn").val(),
            N = e("#gnbMyAccountUrl").val(),
            L = "Y" == e("#gnbUsApiUse").val() ? !0 : !1,
            M = e("#countryIsoCode").val();
        if (L) {
            var U = e.cookies.get("s_ecom_sc_cnt", {
                domain: ".samsung.com"
            });
            null != U && "" != U && (e("#usCartCount").show(), e("#usCartCount").html('<span class="blind">' + e("#productCountText").val() + " : </span>" + U))
        }
        var P = e("#multiLanguageYn").val(),
            F = e("#hreflang").val(),
            Y = new Array,
            V = "sec" == SITE_CD || "vn" == SITE_CD || "Y" == e("#isNewGNB").val() || "Y" == e("#newShopCountryYn").val() ? ".loginBtn" : ".s-login",
            B = ".logoutBtn",
            W = null,
            $ = null,
            q = null,
            z = null,
            Q = null,
            J = null,
            K = null,
            X = null,
            Z = null,
            ee = null,
            ne = null,
            te = null,
            oe = null,
            se = null,
            ae = null,
            ie = null,
            re = null,
            ce = null,
            le = null,
            ue = null,
            me = null,
            _e = e("#updateProfileURL").val();
        ss.Auth = {}, Date.prototype.format = function(e) {
            if (!this.valueOf()) return " ";
            var n = this;
            return e.replace(/(yyyy|MM|dd|HH|mm|ss)/gi, function(e) {
                switch (e) {
                    case "yyyy":
                        return n.getFullYear();
                    case "MM":
                        return (n.getMonth() + 1).zf(2);
                    case "dd":
                        return n.getDate().zf(2);
                    case "HH":
                        return n.getHours().zf(2);
                    case "mm":
                        return n.getMinutes().zf(2);

                    case "ss":
                        return n.getSeconds().zf(2);
                    default:
                        return e
                }
            })
        }, String.prototype.string = function(e) {
            for (var n = "", t = 0; t++ < e;) n += this;
            return n
        }, String.prototype.zf = function(e) {
            return "0".string(e - this.length) + this
        }, Number.prototype.zf = function(e) {
            return this.toString().zf(e)
        }, String.prototype.escapeHtml = function() {
            return this.replace(/</g, "&lt;").replace(/\"/g, "&quot;").replace(/>/g, "&gt;").replace(/\'/g, "&#039;")
        }, ss.Auth.checkSignInUs = function() {
            var n = e.cookies.get("xsdcxyn", {
                    domain: ".samsung.com"
                }),
                t = e.cookies.get("jwt_" + M, {
                    domain: ".samsung.com"
                }),
                a = !0,
                i = !1,
                r = function() {
                    var n, t, a, r, c = e.cookies.get("ReD", {
                            domain: ".samsung.com"
                        }),
                        l = e("#loginAccountServiceId").val();
                    null != c ? (n = c.split("|"), t = n[0], a = n[2], r = n[1], e.ajax({
                        headers: {
                            "Cache-Control": "no-cache",
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "*"
                        },
                        url: STORE_DOMAIN + "/v2/sso/sa/login?access_token=" + t + "&api_server_url=" + a + "&user_id=" + r + "&encrypted=access_token,api_server_url&app_id=" + l,
                        type: "GET",
                        dataType: "json",
                        beforeSend: function(e) {
                            "Y" == P && e.setRequestHeader("x-ecom-locale", F)
                        },
                        xhrFields: {
                            withCredentials: !0
                        },
                        crossDomain: !0,
                        success: function(n) {
                            e.cookies.get("jwt_" + M, {
                                domain: ".samsung.com"
                            }) ? i = !0 : (o(), s(), S())
                        },
                        error: function(e, n, t) {
                            o(), s(), S()
                        }
                    })) : S()
                };
            n ? t ? e.ajax({
                headers: {
                    "Cache-Control": "no-cache",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*"
                },
                url: STORE_DOMAIN + "/v1/sso/user/validate",
                type: "POST",
                dataType: "json",
                data: JSON.stringify({
                    jwt: t
                }),
                xhrFields: {
                    withCredentials: !0
                },
                beforeSend: function(e) {
                    "Y" == P && e.setRequestHeader("x-ecom-locale", F)
                },
                success: function(n) {
                    200 != n.statusCode && "200" != n.statusCode ? (a = !1, e.cookies.del("jwt_" + M, {
                        domain: ".samsung.com"
                    }), r()) : i = !0
                },
                error: function(n, t, o) {
                    a = !1, e.cookies.del("jwt_" + M, {
                        domain: ".samsung.com"
                    }), r()
                }
            }) : (a = !1, r()) : S()
        }, ss.Auth.checkSignIn = function(n, t, o) {
            var s = !1,
                i = e.cookies.get("xsdcxyn", {
                    domain: ".samsung.com"
                }),
                r = e.cookies.get("guid", {
                    domain: ".samsung.com"
                });
            if (i)
                if (t) {
                    if (USE_ESTORE) {
                        var c = "",
                            l = STORE_DOMAIN.split("/")[2];
                        "sec" == SITE_CD ? (c = "https://" + l + "/" + SITE_CD + "/ng/p4v1/sessionCheck", e.ajax({
                            url: c,
                            type: "GET",
                            dataType: "jsonp",
                            jsonp: "callback",
                            success: function(e) {
                                if (n && "function" == typeof n) {
                                    var t = "0000" == e.resultCode ? !0 : !1;
                                    if (0 == t) return void a()
                                }
                            },
                            error: function(e, n, t) {}
                        })) : (c = "au" == SITE_CD || "de" == SITE_CD || "latin" == SITE_CD || "tw" == SITE_CD || "uk" == SITE_CD || "ru" == SITE_CD || "ae" == SITE_CD || "ae_ar" == SITE_CD || "vn" == SITE_CD || "th" == SITE_CD || "sa" == SITE_CD || "sa_en" == SITE_CD || "nz" == SITE_CD || "fr" == SITE_CD || "nl" == SITE_CD || "be" == SITE_CD || "be_fr" == SITE_CD || "ca" == SITE_CD || "ca_fr" == SITE_CD || "se" == SITE_CD || "dk" == SITE_CD || "fi" == SITE_CD || "no" == SITE_CD || "at" == SITE_CD || "my" == SITE_CD || "sk" == SITE_CD || "cz" == SITE_CD || "es" == SITE_CD || "it" == SITE_CD ? "https://" + l + "/" + SITE_CD + "/ng/p4v1/sessionCheck" : "https://" + l + "/" + SITE_CD + "/ng/p4v1/getSessionCheck", e.ajax("ca" == SITE_CD || "ca_fr" == SITE_CD ? {
                            url: c,
                            type: "GET",
                            data: {
                                ssoID: r
                            },
                            dataType: "json",
                            xhrFields: {
                                withCredentials: !0
                            },
                            contentType: "application/x-www-form-urlencoded",
                            crossDomain: !0,
                            success: function(t) {
                                if (n && "function" == typeof n) {
                                    var s = "0000" == t.resultCode ? !0 : !1;
                                    if ("sec" == SITE_CD && 0 == s) return e("#rawCodeLayerPopup_loginFail").dimmedLayerAutoOpen(), e.cookies.del("iPlanetDirectoryPro", {
                                        domain: ".samsung.com"
                                    }), e("#rawCodeLayerPopup_loginFail").siblings(".s-layer-dimmed").unbind(), void e("#rawCodeLayerPopup_loginFail a, #rawCodeLayerPopup_loginFail button").click(function() {
                                        ss.Auth.signOut()
                                    });
                                    0 == s && (a(), o && S()), n(s)
                                }
                            },
                            error: function(e, n, t) {}
                        } : {
                            url: c,
                            type: "GET",
                            dataType: "jsonp",
                            data: {
                                ssoID: r
                            },
                            jsonp: "callback",
                            success: function(t) {
                                if (n && "function" == typeof n) {
                                    var s = "0000" == t.resultCode ? !0 : !1;
                                    if ("sec" == SITE_CD && 0 == s) return e("#rawCodeLayerPopup_loginFail").dimmedLayerAutoOpen(), e.cookies.del("iPlanetDirectoryPro", {
                                        domain: ".samsung.com"
                                    }), e("#rawCodeLayerPopup_loginFail").siblings(".s-layer-dimmed").unbind(), void e("#rawCodeLayerPopup_loginFail a, #rawCodeLayerPopup_loginFail button").click(function() {
                                        ss.Auth.signOut()
                                    });
                                    0 == s && (a(), o && S()), n(s)
                                }
                            },
                            error: function(e, n, t) {}
                        }))
                    }
                } else s = !0, n && "function" == typeof n && (n(s), o && !s && S());
            else n && "function" == typeof n && (n(s), o && !s && S()), _(!1)
        }, ss.Auth.getUserProfile = function(n) {
            function t() {
                var t = e.cookies.get("firstName", {
                        domain: ".samsung.com"
                    }),
                    o = e.cookies.get("lastName", {
                        domain: ".samsung.com"
                    });
                null != t || null != o ? (O = {
                    firstName: t,
                    lastName: o
                }, reservationUserData = {
                    firstName: t,
                    lastName: o
                }, (USE_ESTORE || R) && ("sec" == SITE_CD ? (e(".gb-gnb__my-layer .s-mymenu-name").html(Granite.I18n.get("Hi, {0}", "<strong>" + o + " " + t + "</strong>", SITE_CD)), e(".s-depth1-wrap .s-mymenu-name").html(Granite.I18n.get("Hi, {0}", "<strong>" + o + " " + t + "</strong>", SITE_CD))) : "vn" == SITE_CD ? (e(".gb-gnb__my-layer .s-mymenu-name").html(Granite.I18n.get("Hi, {0}", "<strong>" + o + "</strong>", SITE_CD)), e(".s-depth1-wrap .s-mymenu-name").html(Granite.I18n.get("Hi, {0}", "<strong>" + o + "</strong>", SITE_CD))) : "ca" == SITE_CD || "ca_fr" == SITE_CD ? (e(".gb-gnb__my-layer .s-mymenu-name").html(Granite.I18n.get("WELCOME", "", SITE_CD)), e(".s-depth1-wrap .s-mymenu-name").html(Granite.I18n.get("WELCOME", "", SITE_CD))) : (e(".gb-gnb__my-layer .s-mymenu-name").html(Granite.I18n.get("Hi, {0}", "<strong>" + t + " " + o + "</strong>", SITE_CD)), e(".s-depth1-wrap .s-mymenu-name").html(Granite.I18n.get("Hi, {0}", "<strong>" + t + " " + o + "</strong>", SITE_CD))))) : (O = null, (USE_ESTORE || R) && ("ca" != SITE_CD && "ca_fr" != SITE_CD ? (e(".gb-gnb__my-layer .s-mymenu-name").html(Granite.I18n.get("Hi, {0}", " ", SITE_CD)), e(".s-depth1-wrap .s-mymenu-name").html(Granite.I18n.get("Hi, {0}", " ", SITE_CD))) : (e(".gb-gnb__my-layer .s-mymenu-name").html(Granite.I18n.get("WELCOME", "", SITE_CD)), e(".s-depth1-wrap .s-mymenu-name").html(Granite.I18n.get("WELCOME", "", SITE_CD))))), n && "function" == typeof n && n(O)
            }
            if (O) n && "function" == typeof n && n(O);
            else {
                var o = e.cookies.get("xsdcxyn", {
                        domain: ".samsung.com"
                    }),
                    s = e.cookies.get("snsSessionId", {
                        domain: ".samsung.com"
                    });
                if (!o && s) e.ajax("ca" == SITE_CD || "ca_fr" == SITE_CD ? {
                    url: STORE_DOMAIN + "/" + SITE_CD + "/ng/p4v1/getSnsUserInfo?snsSessionId=" + s,
                    type: "GET",
                    dataType: "json",
                    xhrFields: {
                        withCredentials: !0
                    },
                    contentType: "application/x-www-form-urlencoded",
                    crossDomain: !0,
                    beforeSend: function() {},
                    success: function(e) {
                        if (e) {
                            var t = e.familyName,
                                o = e.givenName;
                            O = {
                                firstName: t,
                                lastName: o
                            }
                        } else O = null;
                        n && "function" == typeof n && n(O)
                    },
                    error: function(e, n, t) {}
                } : {
                    url: STORE_DOMAIN + "/" + SITE_CD + "/ng/p4v1/getSnsUserInfo?snsSessionId=" + s,
                    type: "GET",
                    dataType: "jsonp",
                    jsonp: "callback",
                    beforeSend: function() {},
                    success: function(e) {
                        if (e) {
                            var t = e.familyName,
                                o = e.givenName;
                            O = {
                                firstName: t,
                                lastName: o
                            }
                        } else O = null;
                        n && "function" == typeof n && n(O)
                    },
                    error: function(e, n, t) {}
                });
                else if (o) {
                    var a = e.cookies.get("firstName", {
                            domain: ".samsung.com"
                        }),
                        i = e.cookies.get("lastName", {
                            domain: ".samsung.com"
                        });
                    "sec" == SITE_CD ? (e(".gb-gnb__my-layer .s-mymenu-name").html(Granite.I18n.get("Hi, {0}", "<strong>" + i + " " + a + "</strong>", SITE_CD)), e(".s-depth1-wrap .s-mymenu-name").html(Granite.I18n.get("Hi, {0}", "<strong>" + i + " " + a + "</strong>", SITE_CD))) : "ca" == SITE_CD || "ca_fr" == SITE_CD ? (e(".gb-gnb__my-layer .s-mymenu-name").html(Granite.I18n.get("WELCOME", "", SITE_CD)), e(".s-depth1-wrap .s-mymenu-name").html(Granite.I18n.get("WELCOME", "", SITE_CD))) : (e(".gb-gnb__my-layer .s-mymenu-name").html(Granite.I18n.get("Hi, {0}", "<strong>" + a + " " + i + "</strong>", SITE_CD)), e(".s-depth1-wrap .s-mymenu-name").html(Granite.I18n.get("Hi, {0}", "<strong>" + a + " " + i + "</strong>", SITE_CD))), O = {
                        firstName: a,
                        lastName: i
                    }, reservationUserData = {
                        firstName: a,
                        lastName: i
                    }
                } else "Y" == e("#useLogin").val() && (USE_ESTORE ? ss.EstoreIfQueue.setQueue(t) : t())
            }
        }, ss.Auth.signOutUs = function(n) {
            A = n ? n : window.location.href, A = A.escapeHtml();
            var t = e.cookies.get("jwt_" + M, {
                domain: ".samsung.com"
            });
            t ? (e.ajax({
                headers: {
                    "Cache-Control": "no-cache",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*"
                },
                url: STORE_DOMAIN + "/v1/sso/user/logout",
                type: "GET",
                dataType: "json",
                xhrFields: {
                    withCredentials: !0
                },
                crossDomain: !0,
                beforeSend: function(e) {
                    "Y" == P && e.setRequestHeader("x-ecom-locale", F)
                },
                success: function(n) {
                    200 == n.statusCode || "200" == n.statusCode ? window.location.replace("/" + SITE_CD) : e.cookies.del("jwt_" + M, {
                        domain: ".samsung.com"
                    })
                },
                error: function(n, t, o) {
                    e.cookies.del("jwt_" + M, {
                        domain: ".samsung.com"
                    }), window.location.replace("/" + SITE_CD)
                },
                complete: function() {
                    E()
                }
            }), e(".s-login").show(), e(".s-mymenu").hide(), ("se" == SITE_CD || "fi" == SITE_CD || "dk" == SITE_CD || "no" == SITE_CD) && e("#af_login").hide(), e(".gb-gnb__my-layer .s-mymenu-name").html(Granite.I18n.get("Hi, {0}", " ", SITE_CD)), e(".s-depth1-wrap .s-mymenu-name").html(Granite.I18n.get("Hi, {0}", " ", SITE_CD))) : location.href = A, A = void 0
        }, ss.Auth.signOut = function(e) {
            A = e ? e : window.location.href, A = A.escapeHtml(), (USE_ESTORE || R) && x ? "sec" == SITE_CD ? location.href = STORE_DOMAIN + "/" + SITE_CD + "/logout" : "au" == SITE_CD || "de" == SITE_CD || "latin" == SITE_CD || "tw" == SITE_CD || "uk" == SITE_CD || "ru" == SITE_CD || "ae" == SITE_CD || "ae_ar" == SITE_CD || "vn" == SITE_CD || "th" == SITE_CD || "sa" == SITE_CD || "sa_en" == SITE_CD || "nz" == SITE_CD || "fr" == SITE_CD || "nl" == SITE_CD || "be" == SITE_CD || "be_fr" == SITE_CD || R || "ca" == SITE_CD || "ca_fr" == SITE_CD || "se" == SITE_CD || "dk" == SITE_CD || "fi" == SITE_CD || "no" == SITE_CD || "at" == SITE_CD || "my" == SITE_CD || "sk" == SITE_CD || "cz" == SITE_CD || ("es" == SITE_CD || "it" == SITE_CD) && STORE_DOMAIN.indexOf("https://") > -1 ? (E(), i(!1)) : location.href = STORE_DOMAIN + "/" + SITE_CD + "/ng/logout?goUrl=" + encodeURIComponent(A) : location.href = A, A = void 0, O = null
        }, ss.Auth.getGlobalCartCount = function(n) {
            function t(t) {
                if (t)
                    if ("0000" == t.resultCode) {
                        var o = 0;
                        o = parseInt(t.cartCount) > 99 ? 99 : parseInt(t.cartCount), e("#globalCartCount").html('<span class="blind">' + e("#productCountText").val() + " : </span>" + o), o > 0 && (e("#globalCartCount").show(), e(".js-empty-cart").hide(), e(".js-cart").show())
                    } else e("#globalCartCount").html('<span class="blind">' + e("#productCountText").val() + " : </span>0"), e(".js-empty-cart").show(), e(".js-cart").hide();
                else e("#globalCartCount").html('<span class="blind">' + e("#productCountText").val() + " : </span>0"), e(".js-empty-cart").show(), e(".js-cart").hide();
                n && "function" == typeof n && n(t)
            }
            return USE_ESTORE && "Y" != e.cookies.get("estoreLoginRequesting", {
                domain: ".samsung.com"
            }) ? (ss.Auth.checkSignIn(function(n) {
                if (n) estore.getCartCount(t);
                else {
                    var o = ss.cookies.get("everAddCart", {
                        domain: ".samsung.com"
                    });
                    ("br" == SITE_CD || "ar" == SITE_CD || "cl" == SITE_CD || "mx" == SITE_CD || "pe" == SITE_CD) && (o = "Y"), "sec" == SITE_CD && (void 0 === o || null === o) && (o = "N"), "Y" == o ? estore.getCartCount(t) : (e("#globalCartCount").html('<span class="blind">' + e("#productCountText").val() + " : </span>0"), e("#globalCartCount").hide(), e(".js-empty-cart").show(), e(".js-cart").hide())
                }
            }), void("sec" == SITE_CD && "..." == e("#globalCartCount").text() && (e("#globalCartCount").html('<span class="blind">' + e("#productCountText").val() + " : </span>0"), e("#globalCartCount").hide(), e(".js-empty-cart").show(), e(".js-cart").hide()))) : void("sec" == SITE_CD && "..." == e("#globalCartCount").text() && e("#globalCartCount").html('<span class="blind">' + e("#productCountText").val() + " : </span>0"))
        }, ss.Auth.setReturnURL = function(e) {
            e || (e = window.location.href)
        }, T(), p(), v()
    }
}(jQuery), new ss.Sign;
! function(n, t) {
    "use strict";
    var i = {
        init: function() {
            this.setElements(), this.initOpts(), this.bindEvents()
        },
        setElements: function() {
            this.gnbShopLayer = t(".gb-gnb__shop-layer"), this.gnbShopLi = this.gnbShopLayer.closest("li"), this.gnbBtnLogin = this.gnbShopLi.find(".s-btn-login")
        },
        initOpts: function() {
            this.opts = {
                gnbBtnLoginOverType: !1,
                customEvent: ".shop-gnb" + (new Date).getTime()
            }
        },
        changeEvents: function(n) {
            var t = [],
                i = n.split(" ");
            for (var s in i) t.push(i[s] + this.opts.customEvent);
            return t.join(" ")
        },
        bindEvents: function() {
            this.gnbShopLi.on(this.changeEvents("mouseenter mouseleave"), t.proxy(this.gnbShopLiEventFunc, this)), this.gnbBtnLogin.on(this.changeEvents("click"), t.proxy(this.gnbBtnLoginEventFunc, this))
        },
        gnbShopLiEventFunc: function(n) {
            var i = t(n.delegateTarget);
            "mouseenter" === n.type ? (this.opts.gnbBtnLoginOverType = !0, i.addClass("is-layer-active")) : "mouseleave" === n.type && (this.opts.gnbBtnLoginOverType = !1, this.gnbShopLiOutFunc())
        },
        gnbShopLiOutFunc: function() {
            this.gnbBtnLoginOutsideFunc(!1), this.gnbShopLi.removeClass("is-layer-active")
        },
        gnbBtnLoginEventFunc: function(i) {
            i.preventDefault(), this.opts.gnbBtnLoginOverType || (this.gnbShopLi.hasClass("is-layer-active") ? this.gnbShopLiOutFunc() : n.setTimeout(t.proxy(function() {
                this.gnbShopLi.addClass("is-layer-active"), this.gnbBtnLoginOutsideFunc(!0)
            }, this), 30))
        },
        gnbBtnLoginOutsideFunc: function(n) {
            n ? this.gnbShopLi.on(this.changeEvents("clickoutside"), t.proxy(function() {
                this.gnbShopLiOutFunc()
            }, this)) : this.gnbShopLi.off(this.changeEvents("clickoutside"))
        }
    };
    t(function() {
        i.init()
    })
}(window, window.jQuery);

function getNextApiDomain() {
    var t = (getProtocal(), STORE_DOMAIN);
    return t
}

function updateTotalCartCount(t) {
    var o = /^[0-9]+$/;
    o.test(t) || (t = 0), t > 99 && (t = 99), $("#globalCartCount").html('<span class="blind">' + $("#productCountText").val() + " : </span>" + t)
}

function hideMiniCart() {
    navigation.miniCartHide()
}

function nextViewPopup(t) {
    var o = $("#" + t.split("#")[1]);
    $(".layer_popup, .layer_popup_ng").hide(), o.parent().show(), $(".lightbox-skrim").show();
    var n = document.getElementById(o.attr("id"));
    return setTimeout(function() {
        n.popAlign()
    }, 100), !1
}

function hidePopup() {
    return $(".layer_popup, .layer_popup_ng").hide(), $(".lightbox-skrim").hide(), !1
}

function viewGlovalMessagePopup(t) {
    var o = $("#gloval_message_popup");
    o.find(".msg-text").text(t), o.find(".button").attr("tabindex", "1"), o.find(".button").attr("data-focus-id", "shop-popover-ok"), o.find(".button").attr("data-tab-next", "shop-popover-close"), o.find(".icon-close-x").attr("data-tab-next", "shop-popover-ok"), o.attr("data-tab-next", "nav-cart-link"), o.find(".button").focus(), nextViewPopup("#" + o.attr("id")), o.find(".button").focus(), o.find(".pop-btn>.button").click(function() {
        return hidePopup(), $(".cartbutton.item").focus(), !1
    })
}

function getProtocal() {
    var t = document.location.href,
        o = t.split("://")[0];
    return o
}! function(e, t) {
    "use strict";
    e.smg = e.smg || {}, e.smg.aem = e.smg.aem || {}, e.smg.aem.search = e.smg.aem.search || {};
    var r = e.smg.aem.varStatic,
        n = e.smg.aem.util,
        a = (e.smg.aem.customEvent, e.smg.aem.search);
    a.gnbSearch = function() {
        var a = {
                gnbSearch: {
                    wrap: ".cm-g-gnb-search",
                    title: ".cm-g-gnb-search__title",
                    form: ".cm-g-gnb-search__form",
                    cancel: ".cm-g-gnb-search__form-cancel",
                    inputContainer: ".cm-g-gnb-search__form-input-container",
                    resultWrap: ".cm-g-gnb-search__result",
                    resultContainer: ".cm-g-gnb-search__result-container",
                    resultSuggestedSearches: "#resultSuggestedSearches",
                    resultSearchHistory: "#resultSearchHistory",
                    resultMatchedContents: "#resultMatchedContents",
                    resultRelatedSearches: "#resultRelatedSearches",
                    resultNoSuggestions: "#resultNoSuggestions",
                    resultList: ".cm-g-gnb-search__result-list",
                    searchHistoryClearAll: ".cm-g-gnb-search__result-btn--clear"
                }
            },
            s = ({
                body: t("body")
            }, {
                init: function() {
                    var e = this;
                    e.bindEvents(), this.delayTime = 500, this.timer = null
                },
                bindEvents: function() {
                    var e = this,
                        r = t(document);
                    r.on("click", a.gnbSearch.cancel, t.proxy(e.onClickCancelButton, e)), r.on("focus", a.gnbSearch.inputContainer + ' input[type="text"]', t.proxy(e.onFocusSearchInput, e)), r.on("keyup", a.gnbSearch.inputContainer + ' input[type="text"]', t.proxy(e.characterCheck, e)), r.on("click", a.gnbSearch.searchHistoryClearAll, t.proxy(e.clearSearchHistory, e)), r.on("submit", a.gnbSearch.form, t.proxy(e.exceptionCharacter, e)), t(window).on("resize", s.changeResultWrapHeight)
                },
                onClickCancelButton: function(r) {
                    var n = this,
                        s = t(r.target) || r,
                        i = s.closest(a.gnbSearch.inputContainer),
                        c = i.find('input[type="text"]'),
                        o = t(a.gnbSearch.resultSuggestedSearches),
                        h = t(a.gnbSearch.resultSearchHistory),
                        u = t(a.gnbSearch.resultMatchedContents),
                        l = t(a.gnbSearch.resultRelatedSearches),
                        g = t(a.gnbSearch.resultNoSuggestions);
                    n.hideResultContainer(u), n.hideResultContainer(l), n.hideResultContainer(g), n.hideResultContainer(o), n.hideResultContainer(h), c.val(""), i.removeClass("is-active"), t(e).trigger("resize")
                },
                onKeyupSearchInput: function(r) {
                    var n = this,
                        s = t(r.target) || r,
                        i = t(a.gnbSearch.resultSuggestedSearches),
                        c = t(a.gnbSearch.resultSearchHistory),
                        o = t(a.gnbSearch.resultMatchedContents),
                        h = t(a.gnbSearch.resultRelatedSearches),
                        u = t(a.gnbSearch.resultNoSuggestions);
                    s.val() ? (n.hideResultContainer(i), n.hideResultContainer(c), n.showResultContainer(o), n.showResultContainer(h)) : (n.hideResultContainer(o), n.hideResultContainer(h), n.hideResultContainer(u), 0 < n.getSearchKeywordCount() ? (n.hideResultContainer(i), n.showResultContainer(c)) : (n.hideResultContainer(c), n.showResultContainer(i)), n.drawSearchHistoryList()), null != this.timer && clearTimeout(this.timer), this.timer = setTimeout(function() {
                        t(e).trigger("resize"), this.timer = null
                    }, this.delayTime)
                },
                getSearchKeywordCount: function() {
                    var e = t.cookies.getSearchKeyword();
                    return e.length
                },
                onFocusSearchInput: function(r) {
                    var n = this,
                        s = t(r.target) || r,
                        i = t(a.gnbSearch.resultSuggestedSearches),
                        c = t(a.gnbSearch.resultSearchHistory);
                    s.val() || (0 < n.getSearchKeywordCount() ? (n.showResultContainer(c), n.drawSearchHistoryList()) : n.showResultContainer(i)), t(e).trigger("resize")
                },
                showResultContainer: function(e) {
                    var r = "object" != typeof e ? t(e) : e;
                    r.css("display", "block")
                },
                hideResultContainer: function(e) {
                    var r = "object" != typeof e ? t(e) : e;
                    r.css("display", "none")
                },
                drawSearchHistoryList: function() {
                    var e = this,
                        r = t(a.gnbSearch.resultSearchHistory),
                        n = r.find(a.gnbSearch.resultList),
                        s = t.cookies.getSearchKeyword(),
                        i = "";
                    0 < s.length && (t.each(s, function(t) {
                        i += '<li class="cm-g-gnb-search__result-item">', i += '<a href="#!" class="cm-g-gnb-search__result-anchor" title="' + e.getTitleTags(s[t]) + '" data-keyword="' + encodeURIComponent(s[t]) + '">', i += s[t], i += "</a>", i += "</li>"
                    }), n.html(i))
                },
                clearSearchHistory: function() {
                    var r = this,
                        n = t(a.gnbSearch.resultSearchHistory),
                        s = n.find(a.gnbSearch.resultList),
                        i = t(a.gnbSearch.resultSuggestedSearches);
                    t.cookies.clearSearchKeyword(), s.html(""), r.hideResultContainer(n), r.showResultContainer(i), t(e).trigger("resize")
                },
                exceptionCharacter: function() {
                    var e = /[\{\}\[\]?,;:|\)*~`!^_<>@\#$%&\\\=\(\'\"]/gi,
                        r = t(a.gnbSearch.form + " input[name=search]").val().replace(e, "");
                    return r
                },
                characterCheck: function(e) {
                    var r = t(e.target),
                        n = t(e.target).closest(a.gnbSearch.inputContainer),
                        i = r.val(),
                        c = /[\{\}\[\]?,;:|\)*~`!^_<>@\#$%&\\\=\(\'\"]/gi,
                        o = 0;
                    c.test(i) && r.val(i.replace(c, "")), o = r.val().length, o ? n.addClass("is-active") : n.removeClass("is-active"), s.changeResultWrapHeight()
                },
                getLinkTitle: function(e) {
                    var t = e.split('"').join("&quot;").split("<b>").join("").split("</b>").join("");
                    return t
                },
                getTitleTags: function(e) {
                    return e = this.getLinkTitle(e), Granite.I18n.get("search.common.labels.searchBy.a1", [e], "sc_" + SITE_CD)
                },
                getResultContainerHeight: function() {
                    for (var e = t(a.gnbSearch.resultContainer), r = 0, n = e.length, s = 0; n > s; s++) "none" != e.eq(s).css("display") && (r += e.eq(s).outerHeight());
                    return r
                },
                changeResultWrapHeight: function() {
                    var e = t(t(a.gnbSearch.wrap)),
                        i = t(a.gnbSearch.resultWrap),
                        c = t(a.gnbSearch.title),
                        o = t(a.gnbSearch.form),
                        h = n.winSize().h,
                        u = e.offset().top,
                        l = c.outerHeight(),
                        g = o.outerHeight(),
                        S = u + l + g + s.getResultContainerHeight(),
                        d = h - u - l - g;
                    n.winSize().w > r.RESPONSIVE.MOBILE.WIDTH && S > h ? i.height(d) : i.removeAttr("style")
                }
            }),
            i = function() {
                s.init()
            },
            c = function() {};
        return {
            init: i,
            reInit: c
        }
    }(), t(function() {
        a.gnbSearch.init()
    })
}(window, window.jQuery);
! function(e, t, n, s) {
    function a(e) {
        var t = "N",
            n = "N";
        ("Y" == j.related || "Y" == j.matched) && ("Y" == j.related && e.common.relatedKeywords && (t = c(e.common.relatedKeywords, e.q)), "Y" == j.matched && e.resultList && e.resultList.length > 0 && e.resultList[0].contentList && e.resultList[0].contentList.length > 0 && (n = r(e.resultList[0].contentList, e.q))), S(), "N" == t && D.relatedSearches.hide(), "N" == n && D.matchedContents.hide(), "N" == t && "N" == n && (0 < G.length ? f() : 0 < P.length ? _() : C())
    }

    function r(e, n) {
        var s = "",
            a = "",
            r = "",
            c = "";
        if (0 < e.length) {
            var i = 0,
                l = 0;
            return t.each(e, function(t) {
                if (r = "", 4 > i && "Products" != e[t].contentSource) {
                    var d = e[t].title;
                    if (e[t].contentSource.indexOf("Support") > -1) {
                        var h = e[t].scmsContentSource.toUpperCase();
                        d = e[t].scTitle, "PRODUCT" == h && (d = e[t].dispNm)
                    }
                    s += '<li class="cm-g-gnb-search__result-item">', s += '<a href="' + e[t].linkUrl + '" class="cm-g-gnb-search__result-anchor line-clamp-mo-2"  title="' + v(d) + '" data-search-data="' + encodeURIComponent(d) + '" data-keyword="' + encodeURIComponent(d) + '">', s += '<span class="cm-g-gnb-search__result-anchor--blue">[' + e[t].contentSource + "]</span> ", s += o(d, n), s += "</a>", s += "</li>", i++
                } else if ("Products" == e[t].contentSource) {
                    var g = e[t];
                    if (1 > l) {
                        var u = {},
                            d = g.displaySortTitle,
                            m = g.thumbnailUrl,
                            p = g.thumbnailUrlAlt || "";
                        if (g.modelList) {
                            for (var f = 0; f < g.modelList.length; f++) "M" == g.modelList[f].mdlRegTypeCd && (u = g.modelList[f]);
                            if ("Y" == u.shopYN) {
                                var _ = parseFloat(u.reviewsCount || "0");
                                if (_ > 0) {
                                    for (var C = parseInt(u.ratings), S = "", w = 0; w < Math.floor(C); w++) S += '<img src="https://www.samsung.com/etc/designs/smg/global/imgs/search-new/star-rating-active.png" alt="' + Granite.I18n.get("search.common.labels.starActive", null, "sc_" + SITE_CD) + '">';
                                    for (var w = 0; w < 5 - Math.floor(C); w++) S += '<img src="https://www.samsung.com/etc/designs/smg/global/imgs/search-new/star-rating-default.png" alt="' + Granite.I18n.get("search.common.labels.starNonActive", null, "sc_" + SITE_CD) + '">';
                                    c += '<a href="' + 'https://www.samsung.com' + u.linkUrlReview + '" class="cm-g-gnb-search__product-score" title="' + Granite.I18n.get("{0} Reviews", [b(d)], SITE_CD) + '" data-omni="' + u.modelName.toLowerCase() + "|" + u.modelCode.toLowerCase() + '|review">', c += ' <span class="cm-g-gnb-search__product-rating">', c += '     <span class="blind">' + Granite.I18n.get("search.comp.gnbSearch.product.productRating", null, "sc_" + SITE_CD) + " : </span>", c += '     <span class="cm-g-gnb-search__product-star" aria-hidden="true">', c += S, c += "     </span>", c += " </span>", c += ' <span class="cm-g-gnb-search__product-rating-review">', c += "         " + C + ' (<span class="cm-g-gnb-search__product-rating-link">' + _ + "</span>)", c += " </span>", c += "</a>"
                                }
                            }
                        }
                        m && "" != m && (r += '<a class="cm-g-gnb-search__product-img" href="https://www.samsung.com' + u.pdpURL + '" title="' + v(d) + '" data-omni="' + u.modelName.toLowerCase() + "|" + u.modelCode.toLowerCase() + '|image">', r += "<picture>", r += '    <source srcset="' + U + m + '?$SRP_PRD_THUM_GRID_PNG$"  media="(max-width: 768px)">', r += '    <img class="js-img-src" src="' + U + m + '?$SRP_PRD_THUM_GRID_PNG$"', r += '            data-src-pc="' + U + m + '?$SRP_PRD_THUM_GRID_PNG$"', r += '            data-src-mobile="' + U + m + '?$SRP_PRD_THUM_GRID_PNG$"', r += '            alt="' + p + '">', r += "</picture>", r += "</a>"), a += r, a += '<div class="cm-g-gnb-search__product-content">', a += '    <a href="https://www.samsung.com' + u.pdpURL + '" class="cm-g-gnb-search__product-title line-clamp-mo-2" title="' + v(d) + '" data-omni="' + u.modelName.toLowerCase() + "|" + u.modelCode.toLowerCase() + '|title"><span class="cm-g-gnb-search__product-title--blue">[' + Granite.I18n.get("search.common.category.product", null, "sc_" + SITE_CD) + "]</span> " + o(d, n) + "</a>", a += c, !u || "" == u.linkUrlReview && "" == u.supportLinkUrl && "" == u.supportLinkUrlManuals && "" == u.regLinkUrl || (a += '    <div class="cm-g-gnb-search__product-cta">', "" != u.supportLinkUrlManuals && (a += '        <a href="https://www.samsung.com' + u.supportLinkUrlManuals + '" class="cm-g-gnb-search__product-cta-link" title="' + b(d) + ":" + Granite.I18n.get("search.comp.gnbSearch.product.cta.ownersManual", null, "sc_" + SITE_CD) + '" data-omni="' + u.modelName.toLowerCase() + "|" + u.modelCode.toLowerCase() + '|manual">' + Granite.I18n.get("search.comp.gnbSearch.product.cta.ownersManual", null, "sc_" + SITE_CD) + "</a>"), "" != u.supportLinkUrl && (a += '        <a href="https://www.samsung.com' + u.supportLinkUrl + '" class="cm-g-gnb-search__product-cta-link" title="' + b(d) + ":" + Granite.I18n.get("search.comp.gnbSearch.product.cta.support", null, "sc_" + SITE_CD) + '" data-omni="' + u.modelName.toLowerCase() + "|" + u.modelCode.toLowerCase() + '|support">' + Granite.I18n.get("search.comp.gnbSearch.product.cta.support", null, "sc_" + SITE_CD) + "</a>"), "" != u.regLinkUrl && (a += '        <a href="' + u.regLinkUrl + '" class="cm-g-gnb-search__product-cta-link" title="' + b(d) + ":" + Granite.I18n.get("search.comp.gnbSearch.product.cta.register", null, "sc_" + SITE_CD) + '" data-omni="' + u.modelName.toLowerCase() + "|" + u.modelCode.toLowerCase() + '|register">' + Granite.I18n.get("search.comp.gnbSearch.product.cta.register", null, "sc_" + SITE_CD) + "</a>"), a += "    </div>"), a += "</div>", l++
                    }
                }
            }), D.matchedContents.find("ol").html(s), D.matchedPDContents.html(a), "" != a ? (D.matchedContents.show(), D.matchedPDContents.show(), "Y") : "" != s ? (D.matchedContents.show(), D.matchedPDContents.hide(), "Y") : "" != a ? (D.matchedContents.show(), D.matchedPDContents.show(), "Y") : (D.matchedContents.hide(), D.matchedPDContents.hide(), "N")
        }
        return D.matchedContents.hide(), "N"
    }

    function c(e, n) {
        var s = "";
        return 0 < e.length ? (t.each(e, function(t) {
            var a = e[t];
            4 > t && (s += '<li class="cm-g-gnb-search__result-item">', s += '<a href="' + R + encodeURIComponent(w(a)) + '" class="cm-g-gnb-search__result-anchor" title="' + v(a) + '" data-keyword="' + encodeURIComponent(a) + '">', s += o(a, n), s += "</a>", s += "</li>")
        }), D.relatedSearches.find("ol").html(s), D.relatedSearches.show(), d(), "Y") : (D.relatedSearches.hide(), "N")
    }

    function o(e, t) {
        return e.split(t).join("<b>" + t + "</b>")
    }

    function i() {
        var e = "";
        0 < P.length ? (t.each(P, function(t) {
            var n = P[t];
            4 > t && (e += '<li class="cm-g-gnb-search__result-item">', e += '<a href="' + R + encodeURIComponent(w(n)) + '" title="' + v(n) + '" class="cm-g-gnb-search__result-anchor" data-keyword="' + encodeURIComponent(n) + '">', e += P[t], e += "</a>", e += "</li>")
        }), D.suggestedSearches.find("ol").html(e), _()) : 0 < G.length ? f() : C()
    }

    function l() {
        D.searchHistory.find("a").off("click"), D.searchHistory.find("a").click(function() {
            var e = t(this).html();
            window.location.href = R + w(e)
        }), D.searchHistory.find(".cm-g-gnb-search__result-btn.cm-g-gnb-search__result-btn--clear").click(function() {
            p(), D.input.val(""), D.inputContainer.removeClass("is-active"), _(), P.length < 4 && m()
        })
    }

    function d() {
        D.relatedSearches.find("a").off("click"), D.relatedSearches.find("a").click(function() {
            var e = w(t(this).html()),
                n = new Date;
            n.setTime(n.getTime() + 72576e5), t.cookies.setSearchKeyword(decodeURIComponent(e), n)
        })
    }

    function h() {
        D.suggestedSearches.find("a").off("click"), D.suggestedSearches.find("a").click(function() {
            var e = w(t(this).html()),
                n = new Date;
            n.setTime(n.getTime() + 72576e5), t.cookies.setSearchKeyword(decodeURIComponent(e), n)
        })
    }

    function g(e) {
        return e.lastIndexOf("/") == e.length - 1 ? e.substr(0, e.length - 1) : e
    }

    function u(e) {
        if (e && e.length > 0) {
            e = w(e);
            var n = {
                siteCd: SITE_CD,
                stage: N.stage,
                searchValue: encodeURIComponent(e)
            };
            t.ajax({
                type: "GET",
                crossDomain: !0,
                async: !0,
                data: n,
                dataType: "json",
                jsonCallback: "samsungcallback",
                url: 'https://esapi.samsung.com' + "/search/suggest/v2",
                error: function() {
                    C()
                },
                success: function(t) {
                    var n = t.response.resultData;
                    n.q = e, n && n.common.searchCount > 0 ? a(n) : C()
                }
            })
        }
    }

    function m() {
        var e = {
            siteCd: SITE_CD,
            stage: N.stage,
            searchValue: ""
        };
        t.ajax({
            type: "GET",
            crossDomain: !0,
            async: !0,
            data: e,
            dataType: "json",
            jsonCallback: "samsungcallback",
            url: 'https://esapi.samsung.com' + "/search/suggest/v2",
            error: function() {
                C()
            },
            success: function(e) {
                var t = e.response.resultData;
                if (t && t.common)
                    if (t.common.suggestedKeywords) {
                        for (var n = t.common.suggestedKeywords, s = 0; s < n.length; s++) {
                            var a = n[s];
                            P.indexOf(a) < 0 && P.length < 4 && P.push(a)
                        }
                        i()
                    } else C()
            }
        })
    }

    function p() {
        D.suggestedSearches.hide(), D.searchHistory.hide(), D.relatedSearches.hide(), D.matchedContents.hide(), D.noSuggestions.hide()
    }

    function f() {
        D.suggestedSearches.hide(), D.searchHistory.show(), D.relatedSearches.hide(), D.matchedContents.hide(), D.noSuggestions.hide(), l()
    }

    function _() {
        D.suggestedSearches.show(), D.searchHistory.hide(), D.relatedSearches.hide(), D.matchedContents.hide(), D.noSuggestions.hide(), h()
    }

    function C() {
        D.suggestedSearches.hide(), D.searchHistory.hide(), D.relatedSearches.hide(), D.matchedContents.hide(), D.noSuggestions.show()
    }

    function S() {
        D.suggestedSearches.hide(), D.searchHistory.hide(), D.relatedSearches.show(), D.matchedContents.show(), D.noSuggestions.hide()
    }

    function b(e) {
        var t = e.split('"').join("&quot;").split("<b>").join("").split("</b>").join("");
        return t
    }

    function v(e) {
        return e = b(e), Granite.I18n.get("search.common.labels.searchBy.a1", [e], "sc_" + SITE_CD)
    }

    function w(e) {
        return e = e.split("<").join("").split(">").join("").split("&lt").join("").split("&gt").join("")
    }

    function I() {
        N.domain = t.trim(t("#typeAheadDomain").val().split("/").splice(0, 3).join("/")), N.stage = t.trim(t("#frontApiStageInfo").val()), R += R && "" != R && R.indexOf(".html") > -1 ? "?" + L + "=" : "/?" + L + "=";
        var n = D.suggestedSearches.find("li");
        t.each(n, function(e) {
            var n = t.trim(t(this).text());
            P.push(n)
        }), D.input.focus(function(e) {
            var n = w(t.trim(t(this).val()));
            G = t.cookies.getSearchKeyword(), n && n.length > 0 ? u(n) : 0 < G.length ? f() : (_(), P.length < 4 && m())
        }), D.input.keyup(function(e) {
            var n = w(t.trim(t(this).val()));
            G = t.cookies.getSearchKeyword(), n && n.length > 0 ? u(n) : (0 < G.length ? f() : m(), D.relatedSearches.find("ol").empty(), D.matchedContents.find("ol").empty(), D.matchedPDContents.empty())
        }), D.form.off("submit"), D.form.on("submit", function(n) {
            n.preventDefault();
            var s = w(t.trim(D.input.val())),
                a = new Date;
            s && "" != s || (s = T), s && "" != s && (a.setTime(a.getTime() + 72576e5), t.cookies.setSearchKeyword(decodeURIComponent(s), a), window.location.href = R + encodeURIComponent(s), e.gmap = null)
        }), t(".cm-g-gnb-search__btn--close.js-alert-close,.cm-g-gnb-search__form-prev.js-alert-close").click(function(e) {
            p(), D.input.val(""), D.inputContainer.removeClass("is-active"), t(window).trigger("resize")
        })
    }
    var y = t("div.cm-g-gnb-search");
    if (y.length <= 0) return !1;
    var D = {
            form: y.find("form.cm-g-gnb-search__form"),
            inputContainer: y.find(".cm-g-gnb-search__form-input-container"),
            input: y.find(".cm-g-gnb-search__form-input-container input"),
            result: y.find(".cm-g-gnb-search__result"),
            suggestedSearches: y.find("div.cm-g-gnb-search__result #resultSuggestedSearches"),
            searchHistory: y.find("div.cm-g-gnb-search__result #resultSearchHistory"),
            relatedSearches: y.find("div.cm-g-gnb-search__result #resultRelatedSearches"),
            matchedContents: y.find("div.cm-g-gnb-search__result #resultMatchedContents"),
            matchedPDContents: y.find("div.cm-g-gnb-search__result #resultMatchedContents .cm-g-gnb-search__product"),
            noSuggestions: y.find("div.cm-g-gnb-search__result #resultNoSuggestions")
        },
        k = "qa",
        L = "searchvalue",
        U = t("#scene7domain").val() || "",
        R = t("#sc_gnb_searchURL").val() || "",
        T = t("#sc_gnb_placeholder").val() || "",
        N = {
            domain: null,
            stage: k
        },
        G = t.cookies.getSearchKeyword(),
        P = [],
        j = {
            suggest: "Y",
            related: "Y",
            matched: t("#sc_gnb_matchedcontentsusable").val() || "Y"
        };
    t(function() {
        R && "undefined" != typeof R && "" != R && I()
    })
}(window, jQuery, document, window.smg.sga);