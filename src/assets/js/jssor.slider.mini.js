﻿(function (f, e, b, g, c, d, h) {/*! Jssor */
    new (function () {
    });
    var k = f.$JssorEasing$ = {
        $EaseLinear: function (a) {
            return a
        }, $EaseGoBack: function (a) {
            return 1 - b.abs(2 - 1)
        }, $EaseSwing: function (a) {
            return -b.cos(a * b.PI) / 2 + .5
        }, $EaseInQuad: function (a) {
            return a * a
        }, $EaseOutQuad: function (a) {
            return -a * (a - 2)
        }, $EaseInOutQuad: function (a) {
            return (a *= 2) < 1 ? 1 / 2 * a * a : -1 / 2 * (--a * (a - 2) - 1)
        }, $EaseInCubic: function (a) {
            return a * a * a
        }, $EaseOutCubic: function (a) {
            return (a -= 1) * a * a + 1
        }, $EaseInOutCubic: function (a) {
            return (a *= 2) < 1 ? 1 / 2 * a * a * a : 1 / 2 * ((a -= 2) * a * a + 2)
        }, $EaseInQuart: function (a) {
            return a * a * a * a
        }, $EaseOutQuart: function (a) {
            return -((a -= 1) * a * a * a - 1)
        }, $EaseInOutQuart: function (a) {
            return (a *= 2) < 1 ? 1 / 2 * a * a * a * a : -1 / 2 * ((a -= 2) * a * a * a - 2)
        }, $EaseInQuint: function (a) {
            return a * a * a * a * a
        }, $EaseOutQuint: function (a) {
            return (a -= 1) * a * a * a * a + 1
        }, $EaseInOutQuint: function (a) {
            return (a *= 2) < 1 ? 1 / 2 * a * a * a * a * a : 1 / 2 * ((a -= 2) * a * a * a * a + 2)
        }, $EaseInSine: function (a) {
            return 1 - b.cos(a * b.PI / 2)
        }, $EaseOutSine: function (a) {
            return b.sin(a * b.PI / 2)
        }, $EaseInOutSine: function (a) {
            return -1 / 2 * (b.cos(b.PI * a) - 1)
        }, $EaseInExpo: function (a) {
            return a == 0 ? 0 : b.pow(2, 10 * (a - 1))
        }, $EaseOutExpo: function (a) {
            return a == 1 ? 1 : -b.pow(2, -10 * a) + 1
        }, $EaseInOutExpo: function (a) {
            return a == 0 || a == 1 ? a : (a *= 2) < 1 ? 1 / 2 * b.pow(2, 10 * (a - 1)) : 1 / 2 * (-b.pow(2, -10 * --a) + 2)
        }, $EaseInCirc: function (a) {
            return -(b.sqrt(1 - a * a) - 1)
        }, $EaseOutCirc: function (a) {
            return b.sqrt(1 - (a -= 1) * a)
        }, $EaseInOutCirc: function (a) {
            return (a *= 2) < 1 ? -1 / 2 * (b.sqrt(1 - a * a) - 1) : 1 / 2 * (b.sqrt(1 - (a -= 2) * a) + 1)
        }, $EaseInElastic: function (a) {
            if (!a || a == 1)return a;
            var c = .3, d = .075;
            return -(b.pow(2, 10 * (a -= 1)) * b.sin((a - d) * 2 * b.PI / c))
        }, $EaseOutElastic: function (a) {
            if (!a || a == 1)return a;
            var c = .3, d = .075;
            return b.pow(2, -10 * a) * b.sin((a - d) * 2 * b.PI / c) + 1
        }, $EaseInOutElastic: function (a) {
            if (!a || a == 1)return a;
            var c = .45, d = .1125;
            return (a *= 2) < 1 ? -.5 * b.pow(2, 10 * (a -= 1)) * b.sin((a - d) * 2 * b.PI / c) : b.pow(2, -10 * (a -= 1)) * b.sin((a - d) * 2 * b.PI / c) * .5 + 1
        }, $EaseInBack: function (a) {
            var b = 1.70158;
            return a * a * ((b + 1) * a - b)
        }, $EaseOutBack: function (a) {
            var b = 1.70158;
            return (a -= 1) * a * ((b + 1) * a + b) + 1
        }, $EaseInOutBack: function (a) {
            var b = 1.70158;
            return (a *= 2) < 1 ? 1 / 2 * a * a * (((b *= 1.525) + 1) * a - b) : 1 / 2 * ((a -= 2) * a * (((b *= 1.525) + 1) * a + b) + 2)
        }, $EaseInBounce: function (a) {
            return 1 - k.$EaseOutBounce(1 - a)
        }, $EaseOutBounce: function (a) {
            return a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
        }, $EaseInOutBounce: function (a) {
            return a < 1 / 2 ? k.$EaseInBounce(a * 2) * .5 : k.$EaseOutBounce(a * 2 - 1) * .5 + .5
        }, $EaseInWave: function (a) {
            return 1 - b.cos(a * b.PI * 2)
        }, $EaseOutWave: function (a) {
            return b.sin(a * b.PI * 2)
        }, $EaseOutJump: function (a) {
            return 1 - ((a *= 2) < 1 ? (a = 1 - a) * a * a : (a -= 1) * a * a)
        }, $EaseInJump: function (a) {
            return (a *= 2) < 1 ? a * a * a : (a = 2 - a) * a * a
        }
    }, o = {
        Tc: function (a) {
            return (a & 3) > 0
        }, gd: function (a) {
            return (a & 12) > 0
        }
    }, p = {Me: 37, Ae: 39}, m, i, a = new function () {
        var i = this, lb = 1, F = 2, F = 3, fb = 4, jb = 5, q = 0, l = 0, t = 0, Y = 0, D = 0, qb = navigator.appName, k = navigator.userAgent, p = e.documentElement, B;

        function x() {
            if (!q)if (qb == "Microsoft Internet Explorer" && !!f.attachEvent && !!f.ActiveXObject) {
                var d = k.indexOf("MSIE");
                q = lb;
                t = n(k.substring(d + 5, k.indexOf(";", d)));
                /*@cc_on Y=@_jscript_version@*/
                ;
                l = e.documentMode || t
            } else if (qb == "Netscape" && !!f.addEventListener) {
                var c = k.indexOf("Firefox"), a = k.indexOf("Safari"), h = k.indexOf("Chrome"), b = k.indexOf("AppleWebKit");
                if (c >= 0) {
                    q = F;
                    l = n(k.substring(c + 8))
                } else if (a >= 0) {
                    var i = k.substring(0, a).lastIndexOf("/");
                    q = h >= 0 ? fb : F;
                    l = n(k.substring(i + 1, a))
                }
                if (b >= 0)D = n(k.substring(b + 12))
            } else {
                var g = /(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(k);
                if (g) {
                    q = jb;
                    l = n(g[2])
                }
            }
        }

        function s() {
            x();
            return q == lb
        }

        function N() {
            return s() && (l < 6 || e.compatMode == "BackCompat")
        }

        function eb() {
            x();
            return q == F
        }

        function db() {
            x();
            return q == fb
        }

        function ib() {
            x();
            return q == jb
        }

        function Z() {
            return eb() && D > 534 && D < 535
        }

        function A() {
            return s() && l < 9
        }

        function u(a) {
            if (!B) {
                j(["transform", "WebkitTransform", "msTransform", "MozTransform", "OTransform"], function (b) {
                    if (a.style[b] != h) {
                        B = b;
                        return c
                    }
                });
                B = B || "transform"
            }
            return B
        }

        function ob(a) {
            return Object.prototype.toString.call(a)
        }

        var I;

        function j(a, d) {
            if (ob(a) == "[object Array]") {
                for (var b = 0; b < a.length; b++)if (d(a[b], b, a))return c
            } else for (var e in a)if (d(a[e], e, a))return c
        }

        function vb() {
            if (!I) {
                I = {};
                j(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object"], function (a) {
                    I["[object " + a + "]"] = a.toLowerCase()
                })
            }
            return I
        }

        function z(a) {
            return a == g ? String(a) : vb()[ob(a)] || "object"
        }

        function y(a, b) {
            return {x: a, y: b}
        }

        function pb(b, a) {
            setTimeout(b, a || 0)
        }

        function G(b, d, c) {
            var a = !b || b == "inherit" ? "" : b;
            j(d, function (c) {
                var b = c.exec(a);
                if (b) {
                    var d = a.substr(0, b.index), e = a.substr(b.lastIndex + 1, a.length - (b.lastIndex + 1));
                    a = d + e
                }
            });
            a = c + (a.indexOf(" ") != 0 ? " " : "") + a;
            return a
        }

        function bb(b, a) {
            if (l < 9)b.style.filter = a
        }

        function sb(b, a, c) {
            if (Y < 9) {
                var e = b.style.filter, g = new RegExp(/[\s]*progid:DXImageTransform\.Microsoft\.Matrix\([^\)]*\)/g), f = a ? "progid:DXImageTransform.Microsoft.Matrix(M11=" + a[0][0] + ", M12=" + a[0][1] + ", M21=" + a[1][0] + ", M22=" + a[1][1] + ", SizingMethod='auto expand')" : "", d = G(e, [g], f);
                bb(b, d);
                i.Wc(b, c.y);
                i.ud(b, c.x)
            }
        }

        i.Mb = s;
        i.he = eb;
        i.Cb = db;
        i.jc = ib;
        i.M = A;
        i.N = function () {
            return l
        };
        i.je = function () {
            return t || l
        };
        i.ac = function () {
            x();
            return D
        };
        i.$Delay = pb;
        function mb(a) {
            a.constructor === mb.caller && a.rd && a.rd()
        }

        i.rd = mb;
        i.Z = function (a) {
            if (i.ld(a))a = e.getElementById(a);
            return a
        };
        function v(a) {
            return a || f.event
        }

        i.ce = function (a) {
            a = v(a);
            return a.target || a.srcElement || e
        };
        i.qd = function (a) {
            a = v(a);
            var b = e.body;
            return {
                x: a.pageX || a.clientX + (p.scrollLeft || b.scrollLeft || 0) - (p.clientLeft || b.clientLeft || 0) || 0,
                y: a.pageY || a.clientY + (p.scrollTop || b.scrollTop || 0) - (p.clientTop || b.clientTop || 0) || 0
            }
        };
        function E(c, d, a) {
            if (a != h)c.style[d] = a; else {
                var b = c.currentStyle || c.style;
                a = b[d];
                if (a == "" && f.getComputedStyle) {
                    b = c.ownerDocument.defaultView.getComputedStyle(c, g);
                    b && (a = b.getPropertyValue(d) || b[d])
                }
                return a
            }
        }

        function V(b, c, a, d) {
            if (a != h) {
                d && (a += "px");
                E(b, c, a)
            } else return n(E(b, c))
        }

        function o(d, a) {
            var b = a & 2, c = a ? V : E;
            return function (e, a) {
                return c(e, d, a, b)
            }
        }

        function tb(b) {
            if (s() && t < 9) {
                var a = /opacity=([^)]*)/.exec(b.style.filter || "");
                return a ? n(a[1]) / 100 : 1
            } else return n(b.style.opacity || "1")
        }

        function ub(c, a, f) {
            if (s() && t < 9) {
                var h = c.style.filter || "", i = new RegExp(/[\s]*alpha\([^\)]*\)/g), e = b.round(100 * a), d = "";
                if (e < 100 || f)d = "alpha(opacity=" + e + ") ";
                var g = G(h, [i], d);
                bb(c, g)
            } else c.style.opacity = a == 1 ? "" : b.round(a * 100) / 100
        }

        function X(e, a) {
            var d = a.$Rotate || 0, c = a.$Scale == h ? 1 : a.$Scale;
            if (A()) {
                var l = i.le(d / 180 * b.PI, c, c);
                sb(e, !d && c == 1 ? g : l, i.se(l, a.$OriginalWidth, a.$OriginalHeight))
            } else {
                var j = u(e);
                if (j) {
                    var k = "rotate(" + d % 360 + "deg) scale(" + c + ")";
                    if (db() && D > 535 && "ontouchstart"in f)k += " perspective(2000px)";
                    e.style[j] = k
                }
            }
        }

        i.re = function (b, a) {
            if (Z())pb(i.H(g, X, b, a)); else X(b, a)
        };
        i.ue = function (b, c) {
            var a = u(b);
            if (a)b.style[a + "Origin"] = c
        };
        i.te = function (a, c) {
            if (s() && t < 9 || t < 10 && N())a.style.zoom = c == 1 ? "" : c; else {
                var b = u(a);
                if (b) {
                    var f = "scale(" + c + ")", e = a.style[b], g = new RegExp(/[\s]*scale\(.*?\)/g), d = G(e, [g], f);
                    a.style[b] = d
                }
            }
        };
        i.qe = function (a) {
            if (!a.style[u(a)] || a.style[u(a)] == "none")a.style[u(a)] = "perspective(2000px)"
        };
        i.df = function (a) {
            a.style[u(a)] = "none"
        };
        i.Xb = function (b, a) {
            return function (c) {
                c = v(c);
                var e = c.type, d = c.relatedTarget || (e == "mouseout" ? c.toElement : c.fromElement);
                (!d || d !== a && !i.pe(a, d)) && b(c)
            }
        };
        i.e = function (a, c, d, b) {
            a = i.Z(a);
            if (a.addEventListener) {
                c == "mousewheel" && a.addEventListener("DOMMouseScroll", d, b);
                a.addEventListener(c, d, b)
            } else if (a.attachEvent) {
                a.attachEvent("on" + c, d);
                b && a.setCapture && a.setCapture()
            }
        };
        i.Tb = function (a, c, d, b) {
            a = i.Z(a);
            if (a.removeEventListener) {
                c == "mousewheel" && a.removeEventListener("DOMMouseScroll", d, b);
                a.removeEventListener(c, d, b)
            } else if (a.detachEvent) {
                a.detachEvent("on" + c, d);
                b && a.releaseCapture && a.releaseCapture()
            }
        };
        i.Pe = function (b, a) {
            i.e(A() ? e : f, "mouseup", b, a)
        };
        i.gb = function (a) {
            a = v(a);
            a.preventDefault && a.preventDefault();
            a.cancel = c;
            a.returnValue = d
        };
        i.H = function (d, c) {
            var a = [].slice.call(arguments, 2), b = function () {
                var b = a.concat([].slice.call(arguments, 0));
                return c.apply(d, b)
            };
            return b
        };
        i.nf = function (a, b) {
            if (b == h)return a.textContent || a.innerText;
            var c = e.createTextNode(b);
            i.kd(a);
            a.appendChild(c)
        };
        i.kd = function (a) {
            a.innerHTML = ""
        };
        i.K = function (c) {
            for (var b = [], a = c.firstChild; a; a = a.nextSibling)a.nodeType == 1 && b.push(a);
            return b
        };
        function nb(a, c, e, b) {
            b = b || "u";
            for (a = a ? a.firstChild : g; a; a = a.nextSibling)if (a.nodeType == 1) {
                if (R(a, b) == c)return a;
                if (!e) {
                    var d = nb(a, c, e, b);
                    if (d)return d
                }
            }
        }

        i.B = nb;
        function P(a, d, f, b) {
            b = b || "u";
            var c = [];
            for (a = a ? a.firstChild : g; a; a = a.nextSibling)if (a.nodeType == 1) {
                R(a, b) == d && c.push(a);
                if (!f) {
                    var e = P(a, d, f, b);
                    if (e.length)c = c.concat(e)
                }
            }
            return c
        }

        function gb(a, c, d) {
            for (a = a ? a.firstChild : g; a; a = a.nextSibling)if (a.nodeType == 1) {
                if (a.tagName == c)return a;
                if (!d) {
                    var b = gb(a, c, d);
                    if (b)return b
                }
            }
        }

        i.Ve = gb;
        function ab(a, c, e) {
            var b = [];
            for (a = a ? a.firstChild : g; a; a = a.nextSibling)if (a.nodeType == 1) {
                (!c || a.tagName == c) && b.push(a);
                if (!e) {
                    var d = ab(a, c, e);
                    if (d.length)b = b.concat(d)
                }
            }
            return b
        }

        i.Xe = ab;
        i.Ze = function (b, a) {
            return b.getElementsByTagName(a)
        };
        function U(c) {
            for (var b = 1; b < arguments.length; b++) {
                var a = arguments[b];
                if (a)for (var d in a)c[d] = a[d]
            }
            return c
        }

        i.i = U;
        i.Jc = function (a) {
            return z(a) == "function"
        };
        i.Eb = function (a) {
            return z(a) == "array"
        };
        i.ld = function (a) {
            return z(a) == "string"
        };
        i.oc = function (a) {
            return !isNaN(n(a)) && isFinite(a)
        };
        i.b = j;
        function O(a) {
            return e.createElement(a)
        }

        i.hb = function () {
            return O("DIV", e)
        };
        i.Te = function () {
            return O("SPAN", e)
        };
        i.mc = function () {
        };
        function S(b, c, a) {
            if (a == h)return b.getAttribute(c);
            b.setAttribute(c, a)
        }

        function R(a, b) {
            return S(a, b) || S(a, "data-" + b)
        }

        i.D = R;
        function r(b, a) {
            if (a == h)return b.className;
            b.className = a
        }

        i.Nc = r;
        i.sc = function (a) {
            return a.parentNode
        };
        i.I = function (a) {
            i.db(a, "none")
        };
        i.q = function (a, b) {
            i.db(a, b ? "none" : "")
        };
        i.hf = function (b, a) {
            b.removeAttribute(a)
        };
        i.cf = function () {
            return s() && l < 10
        };
        i.ef = function (d, c) {
            if (c)d.style.clip = "rect(" + b.round(c.$Top) + "px " + b.round(c.$Right) + "px " + b.round(c.$Bottom) + "px " + b.round(c.$Left) + "px)"; else {
                var g = d.style.cssText, f = [new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i), new RegExp(/[\s]*cliptop: .*?[;]?/i), new RegExp(/[\s]*clipright: .*?[;]?/i), new RegExp(/[\s]*clipbottom: .*?[;]?/i), new RegExp(/[\s]*clipleft: .*?[;]?/i)], e = G(g, f, "");
                a.Kb(d, e)
            }
        };
        i.L = function () {
            return +new Date
        };
        i.z = function (b, a) {
            b.appendChild(a)
        };
        i.Wb = function (c, b, a) {
            c.insertBefore(b, a)
        };
        i.zb = function (b, a) {
            b.removeChild(a)
        };
        i.Cd = function (b, a) {
            j(a, function (a) {
                i.zb(b, a)
            })
        };
        i.Ad = function (a) {
            i.Cd(a, i.K(a))
        };
        i.Ed = function (b, a) {
            return parseInt(b, a || 10)
        };
        function n(a) {
            return parseFloat(a)
        }

        i.wc = n;
        i.pe = function (b, a) {
            var c = e.body;
            while (a && b != a && c != a)try {
                a = a.parentNode
            } catch (f) {
                return d
            }
            return b == a
        };
        function T(b, a) {
            return b.cloneNode(!a)
        }

        i.Q = T;
        function M(a) {
            if (a) {
                var b = a.$FlyDirection;
                if (b & 1)a.x = a.$ScaleHorizontal || 1;
                if (b & 2)a.x = -a.$ScaleHorizontal || -1;
                if (b & 4)a.y = a.$ScaleVertical || 1;
                if (b & 8)a.y = -a.$ScaleVertical || -1;
                if (a.$Rotate == c)a.$Rotate = 1;
                M(a.$Brother)
            }
        }

        i.Vb = function (a) {
            if (a) {
                for (var b = 0; b < a.length; b++)M(a[b]);
                for (var c in a)M(a[c])
            }
        };
        i.sb = function (e, f) {
            var a = new Image;

            function b(c) {
                i.Tb(a, "load", b);
                i.Tb(a, "abort", d);
                i.Tb(a, "error", d);
                f && f(a, c)
            }

            function d() {
                b(c)
            }

            if (ib() && l < 11.6 || !e)b(!e); else {
                i.e(a, "load", b);
                i.e(a, "abort", d);
                i.e(a, "error", d);
                a.src = e
            }
        };
        i.Ud = function (d, a, e) {
            var c = d.length + 1;

            function b(b) {
                c--;
                if (a && b && b.src == a.src)a = b;
                !c && e && e(a)
            }

            j(d, function (a) {
                i.sb(a.src, b)
            });
            b()
        };
        i.Kc = function (c, h, j, i) {
            if (i)c = T(c);
            var d = P(c, h);
            if (!d.length)d = a.Ze(c, h);
            for (var f = d.length - 1; f > -1; f--) {
                var b = d[f], e = T(j);
                r(e, r(b));
                a.Kb(e, b.style.cssText);
                var g = a.sc(b);
                a.Wb(g, e, b);
                a.zb(g, b)
            }
            return c
        };
        var C;

        function xb(b) {
            var g = this, m, k, l, e;

            function f() {
                var a = m;
                if (e)a += "ds"; else if (k)a += "dn"; else if (l)a += "av";
                r(b, a)
            }

            function n(a) {
                if (e)i.gb(a); else {
                    C.push(g);
                    k = c;
                    f()
                }
            }

            g.ae = function () {
                k = d;
                f()
            };
            g.Hc = function (a) {
                if (a != h) {
                    l = a;
                    f()
                } else return l
            };
            g.$Enable = function (a) {
                if (a != h) {
                    e = !a;
                    f()
                } else return !e
            };
            b = i.Z(b);
            if (!C) {
                i.Pe(function () {
                    var a = C;
                    C = [];
                    j(a, function (a) {
                        a.ae()
                    })
                });
                C = []
            }
            m = r(b);
            a.e(b, "mousedown", n)
        }

        i.Nb = function (a) {
            return new xb(a)
        };
        i.ub = E;
        i.cb = o("overflow");
        i.r = o("top", 2);
        i.s = o("left", 2);
        i.j = o("width", 2);
        i.k = o("height", 2);
        i.ud = o("marginLeft", 2);
        i.Wc = o("marginTop", 2);
        i.A = o("position");
        i.db = o("display");
        i.P = o("zIndex", 1);
        i.tb = function (b, a, c) {
            if (a != h)ub(b, a, c); else return tb(b)
        };
        i.Kb = function (a, b) {
            if (b != h)a.style.cssText = b; else return a.style.cssText
        };
        var Q = {$Opacity: i.tb, $Top: i.r, $Left: i.s, ab: i.j, ib: i.k, pb: i.A, Lg: i.db, $ZIndex: i.P}, w;

        function H() {
            if (!w)w = U({Mg: i.Wc, Kg: i.ud, $Clip: i.ef, jb: i.re}, Q);
            return w
        }

        function kb() {
            H();
            w.jb = w.jb;
            return w
        }

        i.Qd = H;
        i.Xd = kb;
        i.Sd = function (c, b) {
            H();
            var a = {};
            j(b, function (d, b) {
                if (Q[b])a[b] = Q[b](c)
            });
            return a
        };
        i.J = function (c, b) {
            var a = H();
            j(b, function (d, b) {
                a[b] && a[b](c, d)
            })
        };
        i.Od = function (b, a) {
            kb();
            i.J(b, a)
        };
        m = new function () {
            var a = this;

            function b(d, g) {
                for (var j = d[0].length, i = d.length, h = g[0].length, f = [], c = 0; c < i; c++)for (var k = f[c] = [], b = 0; b < h; b++) {
                    for (var e = 0, a = 0; a < j; a++)e += d[c][a] * g[a][b];
                    k[b] = e
                }
                return f
            }

            a.Zb = function (d, c) {
                var a = b(d, [[c.x], [c.y]]);
                return y(a[0][0], a[1][0])
            }
        };
        i.le = function (d, a, c) {
            var e = b.cos(d), f = b.sin(d);
            return [[e * a, -f * c], [f * a, e * c]]
        };
        i.se = function (d, c, a) {
            var e = m.Zb(d, y(-c / 2, -a / 2)), f = m.Zb(d, y(c / 2, -a / 2)), g = m.Zb(d, y(c / 2, a / 2)), h = m.Zb(d, y(-c / 2, a / 2));
            return y(b.min(e.x, f.x, g.x, h.x) + c / 2, b.min(e.y, f.y, g.y, h.y) + a / 2)
        };
        i.jb = function (j, k, t, q, u, w, h) {
            var c = k;
            if (j) {
                c = {};
                for (var e in k) {
                    var x = w[e] || 1, r = u[e] || [0, 1], d = (t - r[0]) / r[1];
                    d = b.min(b.max(d, 0), 1);
                    d = d * x;
                    var o = b.floor(d);
                    if (d != o)d -= o;
                    var v = q[e] || q.E, p = v(d), f, s = j[e], n = k[e];
                    if (a.oc(n))f = s + (n - s) * p; else {
                        f = a.i({F: {}}, j[e]);
                        a.b(n.F, function (c, b) {
                            var a = c * p;
                            f.F[b] = a;
                            f[b] += a
                        })
                    }
                    c[e] = f
                }
                if (j.$Zoom)c.jb = {
                    $Rotate: c.$Rotate || 0,
                    $Scale: c.$Zoom,
                    $OriginalWidth: h.$OriginalWidth,
                    $OriginalHeight: h.$OriginalHeight
                }
            }
            if (k.$Clip && h.$Move) {
                var i = c.$Clip.F, m = (i.$Top || 0) + (i.$Bottom || 0), l = (i.$Left || 0) + (i.$Right || 0);
                c.$Left = (c.$Left || 0) + l;
                c.$Top = (c.$Top || 0) + m;
                c.$Clip.$Left -= l;
                c.$Clip.$Right -= l;
                c.$Clip.$Top -= m;
                c.$Clip.$Bottom -= m
            }
            if (c.$Clip && a.cf() && !c.$Clip.$Top && !c.$Clip.$Left && c.$Clip.$Right == h.$OriginalWidth && c.$Clip.$Bottom == h.$OriginalHeight)c.$Clip = g;
            return c
        }
    }, l = function () {
        var b = this, d = [];

        function i(a, b) {
            d.push({hc: a, kc: b})
        }

        function h(b, c) {
            a.b(d, function (a, e) {
                a.hc == b && a.kc === c && d.splice(e, 1)
            })
        }

        b.$On = b.addEventListener = i;
        b.$Off = b.removeEventListener = h;
        b.g = function (b) {
            var c = [].slice.call(arguments, 1);
            a.b(d, function (a) {
                try {
                    a.hc == b && a.kc.apply(f, c)
                } catch (d) {
                }
            })
        }
    };
    i = function (n, z, i, Q, O, K) {
        n = n || 0;
        var e = this, r, o, p, y, A = 0, H, I, G, C, l = 0, u = 0, D, m = n, j, h, q, v = [], B;

        function L(b) {
            j += b;
            h += b;
            m += b;
            l += b;
            u += b;
            a.b(v, function (a) {
                a, a.$Shift(b)
            })
        }

        function P(a, b) {
            var c = a - j + n * b;
            L(c);
            return h
        }

        function x(g, n) {
            var d = g;
            if (q && (d >= h || d <= j))d = ((d - j) % q + q) % q + j;
            if (!D || y || n || l != d) {
                var f = b.min(d, h);
                f = b.max(f, j);
                if (!D || y || n || f != u) {
                    if (K) {
                        var k = (f - m) / (z || 1);
                        if (i.$Reverse)k = 1 - k;
                        var o = a.jb(O, K, k, H, G, I, i);
                        a.b(o, function (b, a) {
                            B[a] && B[a](Q, b)
                        })
                    }
                    e.zc(u - m, f - m)
                }
                u = f;
                a.b(v, function (b, c) {
                    var a = g < l ? v[v.length - c - 1] : b;
                    a.G(g, n)
                });
                var r = l, p = g;
                l = d;
                D = c;
                e.Bb(r, p)
            }
        }

        function E(a, c) {
            c && a.Db(h, 1);
            h = b.max(h, a.U());
            v.push(a)
        }

        var s = f.requestAnimationFrame || f.webkitRequestAnimationFrame || f.mozRequestAnimationFrame || f.msRequestAnimationFrame;
        if (a.he() && a.N() < 7)s = g;
        s = s || function (b) {
                a.$Delay(b, i.$Interval)
            };
        function J() {
            if (r) {
                var d = a.L(), e = b.min(d - A, i.od), c = l + e * p;
                A = d;
                if (c * p >= o * p)c = o;
                x(c);
                if (!y && c * p >= o * p)M(C); else s(J)
            }
        }

        function w(d, f, g) {
            if (!r) {
                r = c;
                y = g;
                C = f;
                d = b.max(d, j);
                d = b.min(d, h);
                o = d;
                p = o < l ? -1 : 1;
                e.hd();
                A = a.L();
                s(J)
            }
        }

        function M(a) {
            if (r) {
                y = r = C = d;
                e.jd();
                a && a()
            }
        }

        e.$Play = function (a, b, c) {
            w(a ? l + a : h, b, c)
        };
        e.bd = w;
        e.Y = M;
        e.Td = function (a) {
            w(a)
        };
        e.R = function () {
            return l
        };
        e.cd = function () {
            return o
        };
        e.ob = function () {
            return u
        };
        e.G = x;
        e.qc = function () {
            x(j, c)
        };
        e.$Move = function (a) {
            x(l + a)
        };
        e.$IsPlaying = function () {
            return r
        };
        e.yd = function (a) {
            q = a
        };
        e.Db = P;
        e.$Shift = L;
        e.W = function (a) {
            E(a, 0)
        };
        e.rc = function (a) {
            E(a, 1)
        };
        e.U = function () {
            return h
        };
        e.Bb = e.hd = e.jd = e.zc = a.mc;
        e.tc = a.L();
        i = a.i({$Interval: 16, od: 50}, i);
        q = i.Zc;
        B = a.i({}, a.Qd(), i.vd);
        j = m = n;
        h = n + z;
        I = i.$Round || {};
        G = i.$During || {};
        H = a.i({E: a.Jc(i.$Easing) && i.$Easing || k.$EaseSwing}, i.$Easing)
    };
    var q, j = f.$JssorSlideshowFormations$ = {};
    new function () {
        var u = 0, t = 1, w = 2, v = 3, I = 1, H = 2, J = 4, G = 8, O = 256, P = 512, N = 1024, M = 2048, z = M + I, y = M + H, E = P + I, C = P + H, D = O + J, A = O + G, B = N + J, F = N + G;

        function S(a) {
            return (a & H) == H
        }

        function T(a) {
            return (a & J) == J
        }

        function x(b, a, c) {
            c.push(a);
            b[a] = b[a] || [];
            b[a].push(c)
        }

        j.$FormationStraight = function (f) {
            for (var d = f.$Cols, e = f.$Rows, k = f.$Assembly, l = f.Ob, j = [], a = 0, b = 0, h = d - 1, i = e - 1, g = l - 1, c, b = 0; b < e; b++)for (a = 0; a < d; a++) {
                switch (k) {
                    case z:
                        c = g - (a * e + (i - b));
                        break;
                    case B:
                        c = g - (b * d + (h - a));
                        break;
                    case E:
                        c = g - (a * e + b);
                    case D:
                        c = g - (b * d + a);
                        break;
                    case y:
                        c = a * e + b;
                        break;
                    case A:
                        c = b * d + (h - a);
                        break;
                    case C:
                        c = a * e + (i - b);
                        break;
                    default:
                        c = b * d + a
                }
                x(j, c, [b, a])
            }
            return j
        };
        j.$FormationSwirl = function (e) {
            var l = e.$Cols, m = e.$Rows, p = e.$Assembly, k = e.Ob, o = [], n = [], i = 0, a = 0, b = 0, f = l - 1, g = m - 1, h, d, j = 0;
            switch (p) {
                case z:
                    a = f;
                    b = 0;
                    d = [w, t, v, u];
                    break;
                case B:
                    a = 0;
                    b = g;
                    d = [u, v, t, w];
                    break;
                case E:
                    a = f;
                    b = g;
                    d = [v, t, w, u];
                    break;
                case D:
                    a = f;
                    b = g;
                    d = [t, v, u, w];
                    break;
                case y:
                    a = 0;
                    b = 0;
                    d = [w, u, v, t];
                    break;
                case A:
                    a = f;
                    b = 0;
                    d = [t, w, u, v];
                    break;
                case C:
                    a = 0;
                    b = g;
                    d = [v, u, w, t];
                    break;
                default:
                    a = 0;
                    b = 0;
                    d = [u, w, t, v]
            }
            i = 0;
            while (i < k) {
                h = b + "," + a;
                if (a >= 0 && a < l && b >= 0 && b < m && !n[h]) {
                    n[h] = c;
                    x(o, i++, [b, a])
                } else switch (d[j++ % d.length]) {
                    case u:
                        a--;
                        break;
                    case w:
                        b--;
                        break;
                    case t:
                        a++;
                        break;
                    case v:
                        b++
                }
                switch (d[j % d.length]) {
                    case u:
                        a++;
                        break;
                    case w:
                        b++;
                        break;
                    case t:
                        a--;
                        break;
                    case v:
                        b--
                }
            }
            return o
        };
        j.$FormationZigZag = function (d) {
            var k = d.$Cols, l = d.$Rows, n = d.$Assembly, j = d.Ob, h = [], i = 0, a = 0, b = 0, e = k - 1, f = l - 1, m, c, g = 0;
            switch (n) {
                case z:
                    a = e;
                    b = 0;
                    c = [w, t, v, t];
                    break;
                case B:
                    a = 0;
                    b = f;
                    c = [u, v, t, v];
                    break;
                case E:
                    a = e;
                    b = f;
                    c = [v, t, w, t];
                    break;
                case D:
                    a = e;
                    b = f;
                    c = [t, v, u, v];
                    break;
                case y:
                    a = 0;
                    b = 0;
                    c = [w, u, v, u];
                    break;
                case A:
                    a = e;
                    b = 0;
                    c = [t, w, u, w];
                    break;
                case C:
                    a = 0;
                    b = f;
                    c = [v, u, w, u];
                    break;
                default:
                    a = 0;
                    b = 0;
                    c = [u, w, t, w]
            }
            i = 0;
            while (i < j) {
                m = b + "," + a;
                if (a >= 0 && a < k && b >= 0 && b < l && typeof h[m] == "undefined") {
                    x(h, i++, [b, a]);
                    switch (c[g % c.length]) {
                        case u:
                            a++;
                            break;
                        case w:
                            b++;
                            break;
                        case t:
                            a--;
                            break;
                        case v:
                            b--
                    }
                } else {
                    switch (c[g++ % c.length]) {
                        case u:
                            a--;
                            break;
                        case w:
                            b--;
                            break;
                        case t:
                            a++;
                            break;
                        case v:
                            b++
                    }
                    switch (c[g++ % c.length]) {
                        case u:
                            a++;
                            break;
                        case w:
                            b++;
                            break;
                        case t:
                            a--;
                            break;
                        case v:
                            b--
                    }
                }
            }
            return h
        };
        j.$FormationStraightStairs = function (h) {
            var l = h.$Cols, m = h.$Rows, e = h.$Assembly, k = h.Ob, i = [], j = 0, c = 0, d = 0, f = l - 1, g = m - 1, o = k - 1;
            switch (e) {
                case z:
                case C:
                case E:
                case y:
                    var a = 0, b = 0;
                    break;
                case A:
                case B:
                case D:
                case F:
                    var a = f, b = 0;
                    break;
                default:
                    e = F;
                    var a = f, b = 0
            }
            c = a;
            d = b;
            while (j < k) {
                if (T(e) || S(e))x(i, o - j++, [d, c]); else x(i, j++, [d, c]);
                switch (e) {
                    case z:
                    case C:
                        c--;
                        d++;
                        break;
                    case E:
                    case y:
                        c++;
                        d--;
                        break;
                    case A:
                    case B:
                        c--;
                        d--;
                        break;
                    case F:
                    case D:
                    default:
                        c++;
                        d++
                }
                if (c < 0 || d < 0 || c > f || d > g) {
                    switch (e) {
                        case z:
                        case C:
                            a++;
                            break;
                        case A:
                        case B:
                        case E:
                        case y:
                            b++;
                            break;
                        case F:
                        case D:
                        default:
                            a--
                    }
                    if (a < 0 || b < 0 || a > f || b > g) {
                        switch (e) {
                            case z:
                            case C:
                                a = f;
                                b++;
                                break;
                            case E:
                            case y:
                                b = g;
                                a++;
                                break;
                            case A:
                            case B:
                                b = g;
                                a--;
                                break;
                            case F:
                            case D:
                            default:
                                a = 0;
                                b++
                        }
                        if (b > g)b = g; else if (b < 0)b = 0; else if (a > f)a = f; else if (a < 0)a = 0
                    }
                    d = b;
                    c = a
                }
            }
            return i
        };
        j.$FormationSquare = function (h) {
            var a = h.$Cols || 1, c = h.$Rows || 1, i = [], d, e, f, g, j;
            f = a < c ? (c - a) / 2 : 0;
            g = a > c ? (a - c) / 2 : 0;
            j = b.round(b.max(a / 2, c / 2)) + 1;
            for (d = 0; d < a; d++)for (e = 0; e < c; e++)x(i, j - b.min(d + 1 + f, e + 1 + g, a - d + f, c - e + g), [e, d]);
            return i
        };
        j.$FormationRectangle = function (f) {
            var d = f.$Cols || 1, e = f.$Rows || 1, g = [], a, c, h;
            h = b.round(b.min(d / 2, e / 2)) + 1;
            for (a = 0; a < d; a++)for (c = 0; c < e; c++)x(g, h - b.min(a + 1, c + 1, d - a, e - c), [c, a]);
            return g
        };
        j.$FormationRandom = function (d) {
            for (var e = [], a, c = 0; c < d.$Rows; c++)for (a = 0; a < d.$Cols; a++)x(e, b.ceil(1e5 * b.random()) % 13, [c, a]);
            return e
        };
        j.$FormationCircle = function (d) {
            for (var e = d.$Cols || 1, f = d.$Rows || 1, g = [], a, h = e / 2 - .5, i = f / 2 - .5, c = 0; c < e; c++)for (a = 0; a < f; a++)x(g, b.round(b.sqrt(b.pow(c - h, 2) + b.pow(a - i, 2))), [a, c]);
            return g
        };
        j.$FormationCross = function (d) {
            for (var e = d.$Cols || 1, f = d.$Rows || 1, g = [], a, h = e / 2 - .5, i = f / 2 - .5, c = 0; c < e; c++)for (a = 0; a < f; a++)x(g, b.round(b.min(b.abs(c - h), b.abs(a - i))), [a, c]);
            return g
        };
        j.$FormationRectangleCross = function (f) {
            for (var g = f.$Cols || 1, h = f.$Rows || 1, i = [], a, d = g / 2 - .5, e = h / 2 - .5, j = b.max(d, e) + 1, c = 0; c < g; c++)for (a = 0; a < h; a++)x(i, b.round(j - b.max(d - b.abs(c - d), e - b.abs(a - e))) - 1, [a, c]);
            return i
        };
        function Q(a) {
            var b = a.$Formation(a);
            return a.$Reverse ? b.reverse() : b
        }

        function K(g, f) {
            var e = {
                $Interval: f,
                $Duration: 1,
                $Delay: 0,
                $Cols: 1,
                $Rows: 1,
                $Opacity: 0,
                $Zoom: 0,
                $Clip: 0,
                $Move: d,
                $SlideOut: d,
                $Reverse: d,
                $Formation: j.$FormationRandom,
                $Assembly: F,
                $ChessMode: {$Column: 0, $Row: 0},
                $Easing: k.$EaseSwing,
                $Round: {},
                Hb: [],
                $During: {}
            };
            a.i(e, g);
            e.Ob = e.$Cols * e.$Rows;
            if (a.Jc(e.$Easing))e.$Easing = {E: e.$Easing};
            e.sd = b.ceil(e.$Duration / e.$Interval);
            e.td = R(e);
            e.Nd = function (b, a) {
                b /= e.$Cols;
                a /= e.$Rows;
                var f = b + "x" + a;
                if (!e.Hb[f]) {
                    e.Hb[f] = {ab: b, ib: a};
                    for (var c = 0; c < e.$Cols; c++)for (var d = 0; d < e.$Rows; d++)e.Hb[f][d + "," + c] = {
                        $Top: d * a,
                        $Right: c * b + b,
                        $Bottom: d * a + a,
                        $Left: c * b
                    }
                }
                return e.Hb[f]
            };
            if (e.$Brother) {
                e.$Brother = K(e.$Brother, f);
                e.$SlideOut = c
            }
            return e
        }

        function R(d) {
            var c = d.$Easing;
            if (!c.E)c.E = k.$EaseSwing;
            var e = d.sd, f = c.Ab;
            if (!f) {
                var g = a.i({}, d.$Easing, d.$Round);
                f = c.Ab = {};
                a.b(g, function (n, l) {
                    var g = c[l] || c.E, j = d.$Round[l] || 1;
                    if (!a.Eb(g.Ab))g.Ab = [];
                    var h = g.Ab[e] = g.Ab[e] || [];
                    if (!h[j]) {
                        h[j] = [0];
                        for (var k = 1; k <= e; k++) {
                            var i = k / e * j, m = b.floor(i);
                            if (i != m)i -= m;
                            h[j][k] = g(i)
                        }
                    }
                    f[l] = h
                })
            }
            return f
        }

        function L(C, i, e, x, n, k) {
            var A = this, u, v = {}, m = {}, l = [], g, f, s, q = e.$ChessMode.$Column || 0, r = e.$ChessMode.$Row || 0, h = e.Nd(n, k), p = Q(e), D = p.length - 1, t = e.$Duration + e.$Delay * D, y = x + t, j = e.$SlideOut, z;
            y += a.Cb() ? 260 : 50;
            A.pd = y;
            A.Qb = function (c) {
                c -= x;
                var d = c < t;
                if (d || z) {
                    z = d;
                    if (!j)c = t - c;
                    var f = b.ceil(c / e.$Interval);
                    a.b(m, function (c, e) {
                        var d = b.max(f, c.Rd);
                        d = b.min(d, c.length - 1);
                        if (c.Fc != d) {
                            if (!c.Fc && !j)a.q(l[e]); else d == c.Yf && j && a.I(l[e]);
                            c.Fc = d;
                            a.Od(l[e], c[d])
                        }
                    })
                }
            };
            function w(b) {
                a.df(b);
                var c = a.K(b);
                a.b(c, function (a) {
                    w(a)
                })
            }

            i = a.Q(i);
            w(i);
            if (a.M()) {
                var E = !i["no-image"], B = a.Xe(i);
                a.b(B, function (b) {
                    (E || b["jssor-slider"]) && a.tb(b, a.tb(b), c)
                })
            }
            a.b(p, function (i, l) {
                a.b(i, function (K) {
                    var O = K[0], N = K[1], y = O + "," + N, t = d, w = d, z = d;
                    if (q && N % 2) {
                        if (o.Tc(q))t = !t;
                        if (o.gd(q))w = !w;
                        if (q & 16)z = !z
                    }
                    if (r && O % 2) {
                        if (o.Tc(r))t = !t;
                        if (o.gd(r))w = !w;
                        if (r & 16)z = !z
                    }
                    e.$Top = e.$Top || e.$Clip & 4;
                    e.$Bottom = e.$Bottom || e.$Clip & 8;
                    e.$Left = e.$Left || e.$Clip & 1;
                    e.$Right = e.$Right || e.$Clip & 2;
                    var F = w ? e.$Bottom : e.$Top, C = w ? e.$Top : e.$Bottom, E = t ? e.$Right : e.$Left, D = t ? e.$Left : e.$Right;
                    e.$Clip = F || C || E || D;
                    s = {};
                    f = {$Top: 0, $Left: 0, $Opacity: 1, ab: n, ib: k};
                    g = a.i({}, f);
                    u = a.i({}, h[y]);
                    if (e.$Opacity)f.$Opacity = 2 - e.$Opacity;
                    if (e.$ZIndex) {
                        f.$ZIndex = e.$ZIndex;
                        g.$ZIndex = 0
                    }
                    var M = e.$Cols * e.$Rows > 1 || e.$Clip;
                    if (e.$Zoom || e.$Rotate) {
                        var L = c;
                        if (a.Mb() && a.je() < 9)if (e.$Cols * e.$Rows > 1)L = d; else M = d;
                        if (L) {
                            f.$Zoom = e.$Zoom ? e.$Zoom - 1 : 1;
                            g.$Zoom = 1;
                            if (a.M() || a.jc())f.$Zoom = b.min(f.$Zoom, 2);
                            var R = e.$Rotate;
                            f.$Rotate = R * 360 * (z ? -1 : 1);
                            g.$Rotate = 0
                        }
                    }
                    if (M) {
                        if (e.$Clip) {
                            var x = e.$ScaleClip || 1, p = u.F = {};
                            if (F && C) {
                                p.$Top = h.ib / 2 * x;
                                p.$Bottom = -p.$Top
                            } else if (F)p.$Bottom = -h.ib * x; else if (C)p.$Top = h.ib * x;
                            if (E && D) {
                                p.$Left = h.ab / 2 * x;
                                p.$Right = -p.$Left
                            } else if (E)p.$Right = -h.ab * x; else if (D)p.$Left = h.ab * x
                        }
                        s.$Clip = u;
                        g.$Clip = h[y]
                    }
                    var P = t ? 1 : -1, Q = w ? 1 : -1;
                    if (e.x)f.$Left += n * e.x * P;
                    if (e.y)f.$Top += k * e.y * Q;
                    a.b(f, function (b, c) {
                        if (a.oc(b))if (b != g[c])s[c] = b - g[c]
                    });
                    v[y] = j ? g : f;
                    var J = b.round(l * e.$Delay / e.$Interval);
                    m[y] = new Array(J);
                    m[y].Rd = J;
                    for (var B = e.sd, I = 0; I <= B; I++) {
                        var i = {};
                        a.b(s, function (f, c) {
                            var m = e.td[c] || e.td.E, l = m[e.$Round[c] || 1], k = e.$During[c] || [0, 1], d = (I / B - k[0]) / k[1] * B;
                            d = b.round(b.min(B, b.max(d, 0)));
                            var j = l[d];
                            if (a.oc(f))i[c] = g[c] + f * j; else {
                                var h = i[c] = a.i({}, g[c]);
                                h.F = [];
                                a.b(f.F, function (c, b) {
                                    var a = c * j;
                                    h.F[b] = a;
                                    h[b] += a
                                })
                            }
                        });
                        if (g.$Zoom)i.jb = {
                            $Rotate: i.$Rotate || 0,
                            $Scale: i.$Zoom,
                            $OriginalWidth: n,
                            $OriginalHeight: k
                        };
                        if (i.$Clip && e.$Move) {
                            var A = i.$Clip.F, H = (A.$Top || 0) + (A.$Bottom || 0), G = (A.$Left || 0) + (A.$Right || 0);
                            i.$Left = (i.$Left || 0) + G;
                            i.$Top = (i.$Top || 0) + H;
                            i.$Clip.$Left -= G;
                            i.$Clip.$Right -= G;
                            i.$Clip.$Top -= H;
                            i.$Clip.$Bottom -= H
                        }
                        i.$ZIndex = i.$ZIndex || 1;
                        m[y].push(i)
                    }
                })
            });
            p.reverse();
            a.b(p, function (b) {
                a.b(b, function (c) {
                    var f = c[0], e = c[1], d = f + "," + e, b = i;
                    if (e || f)b = a.Q(i);
                    a.J(b, v[d]);
                    a.cb(b, "hidden");
                    a.A(b, "absolute");
                    C.Zd(b);
                    l[d] = b;
                    a.q(b, !j)
                })
            })
        }

        f.$JssorSlideshowRunner$ = function (h, m, j, n, p) {
            var d = this, o, e, c, s = 0, r = n.$TransitionsOrder, k, f = 8;

            function q() {
                var a = this, b = 0;
                i.call(a, 0, o);
                a.Bb = function (d, a) {
                    if (a - b > f) {
                        b = a;
                        c && c.Qb(a);
                        e && e.Qb(a)
                    }
                };
                a.rb = k
            }

            d.Id = function () {
                var a = 0, c = n.$Transitions, d = c.length;
                if (r)a = s++ % d; else a = b.floor(b.random() * d);
                c[a] && (c[a].eb = a);
                return c[a]
            };
            d.bf = function (w, x, n, p, a) {
                k = a;
                a = K(a, f);
                var l = p.Gc, i = n.Gc;
                l["no-image"] = !p.Rb;
                i["no-image"] = !n.Rb;
                var q = l, r = i, v = a, g = a.$Brother || K({}, f);
                if (!a.$SlideOut) {
                    q = i;
                    r = l
                }
                var s = g.$Shift || 0;
                e = new L(h, r, g, b.max(s - g.$Interval, 0), m, j);
                c = new L(h, q, v, b.max(g.$Interval - s, 0), m, j);
                e.Qb(0);
                c.Qb(0);
                o = b.max(e.pd, c.pd);
                d.eb = w
            };
            d.yb = function () {
                h.yb();
                e = g;
                c = g
            };
            d.ff = function () {
                var a = g;
                if (c)a = new q;
                return a
            };
            if (a.M() || a.jc() || p && a.ac() < 537)f = 16;
            l.call(d);
            i.call(d, -1e7, 1e7)
        };
        function m(q, lc) {
            var j = this;

            function Hc() {
                var a = this;
                i.call(a, -1e8, 2e8);
                a.gf = function () {
                    var c = a.ob(), d = b.floor(c), f = u(d), e = c - b.floor(c);
                    return {eb: f, Ue: d, pb: e}
                };
                a.Bb = function (d, a) {
                    var e = b.floor(a);
                    if (e != a && a > d)e++;
                    Yb(e, c);
                    j.g(m.$EVT_POSITION_CHANGE, u(a), u(d), a, d)
                }
            }

            function Gc() {
                var b = this;
                i.call(b, 0, 0, {Zc: t});
                a.b(D, function (a) {
                    M & 1 && a.yd(t);
                    b.rc(a);
                    a.$Shift(mb / fc)
                })
            }

            function Fc() {
                var a = this, b = Xb.$Elmt;
                i.call(a, -1, 2, {$Easing: k.$EaseLinear, vd: {pb: dc}, Zc: t}, b, {pb: 1}, {pb: -1});
                a.Fb = b
            }

            function uc(n, l) {
                var a = this, e, f, h, k, b;
                i.call(a, -1e8, 2e8, {od: 100});
                a.hd = function () {
                    S = c;
                    Y = g;
                    j.g(m.$EVT_SWIPE_START, u(y.R()), y.R())
                };
                a.jd = function () {
                    S = d;
                    k = d;
                    var a = y.gf();
                    j.g(m.$EVT_SWIPE_END, u(y.R()), y.R());
                    !a.pb && Jc(a.Ue, s)
                };
                a.Bb = function (g, d) {
                    var a;
                    if (k)a = b; else {
                        a = f;
                        if (h) {
                            var c = d / h;
                            a = o.$SlideEasing(c) * (f - e) + e
                        }
                    }
                    y.G(a)
                };
                a.Jb = function (b, d, c, g) {
                    e = b;
                    f = d;
                    h = c;
                    y.G(b);
                    a.G(0);
                    a.bd(c, g)
                };
                a.kf = function (d) {
                    k = c;
                    b = d;
                    a.$Play(d, g, c)
                };
                a.mf = function (a) {
                    b = a
                };
                y = new Hc;
                y.W(n);
                y.W(l)
            }

            function vc() {
                var c = this, b = cc();
                a.P(b, 0);
                a.ub(b, "pointerEvents", "none");
                c.$Elmt = b;
                c.Zd = function (c) {
                    a.z(b, c);
                    a.q(b)
                };
                c.yb = function () {
                    a.I(b);
                    a.kd(b)
                }
            }

            function Ec(p, n) {
                var e = this, r, x, H, y, f, A = [], Q, q, S, G, O, F, h, w, k;
                i.call(e, -v, v + 1, {});
                function E(a) {
                    x && x.fc();
                    r && r.fc();
                    R(p, a);
                    F = c;
                    r = new I.$Class(p, I, 1);
                    x = new I.$Class(p, I);
                    x.qc();
                    r.qc()
                }

                function Z() {
                    r.tc < I.tc && E()
                }

                function J(n, q, l) {
                    if (!G) {
                        G = c;
                        if (f && l) {
                            var g = l.width, b = l.height, k = g, i = b;
                            if (g && b && o.$FillMode) {
                                if (o.$FillMode & 3 && (!(o.$FillMode & 4) || g > L || b > K)) {
                                    var h = d, p = L / K * b / g;
                                    if (o.$FillMode & 1)h = p > 1; else if (o.$FillMode & 2)h = p < 1;
                                    k = h ? g * K / b : L;
                                    i = h ? K : b * L / g
                                }
                                a.j(f, k);
                                a.k(f, i);
                                a.r(f, (K - i) / 2);
                                a.s(f, (L - k) / 2)
                            }
                            a.A(f, "absolute");
                            j.g(m.$EVT_LOAD_END, ic)
                        }
                    }
                    a.I(q);
                    n && n(e)
                }

                function W(b, c, d, f) {
                    if (f == Y && s == n && T)if (!Ic) {
                        var a = u(b);
                        B.bf(a, n, c, e, d);
                        c.me();
                        fb.Db(a, 1);
                        fb.G(a);
                        z.Jb(b, b, 0)
                    }
                }

                function ab(b) {
                    if (b == Y && s == n) {
                        if (!h) {
                            var a = g;
                            if (B)if (B.eb == n)a = B.ff(); else B.yb();
                            Z();
                            h = new Cc(p, n, a, e.ee(), e.fe());
                            h.nd(k)
                        }
                        !h.$IsPlaying() && h.dc()
                    }
                }

                function P(d, c, j) {
                    if (d == n) {
                        if (d != c)D[c] && D[c].ge(); else!j && h && h.ke();
                        k && k.$Enable();
                        var l = Y = a.L();
                        e.sb(a.H(g, ab, l))
                    } else {
                        var i = b.abs(n - d), f = v + o.$LazyLoading;
                        (!O || i <= f || t - i <= f) && e.sb()
                    }
                }

                function bb() {
                    if (s == n && h) {
                        h.Y();
                        k && k.$Quit();
                        k && k.$Disable();
                        h.Xc()
                    }
                }

                function cb() {
                    s == n && h && h.Y()
                }

                function N(b) {
                    if (V)a.gb(b); else j.g(m.$EVT_CLICK, n, b)
                }

                function M() {
                    k = w.pInstance;
                    h && h.nd(k)
                }

                e.sb = function (d, b) {
                    b = b || y;
                    if (A.length && !G) {
                        a.q(b);
                        if (!S) {
                            S = c;
                            j.g(m.$EVT_LOAD_START);
                            a.b(A, function (b) {
                                if (!b.src) {
                                    b.src = a.D(b, "src2");
                                    a.db(b, b["display-origin"])
                                }
                            })
                        }
                        a.Ud(A, f, a.H(g, J, d, b))
                    } else J(d, b)
                };
                e.He = function () {
                    if (B) {
                        var b = B.Id(t);
                        if (b) {
                            var e = Y = a.L(), c = n + bc, d = D[u(c)];
                            return d.sb(a.H(g, W, c, d, b, e), y)
                        }
                    }
                    gb(s + o.$AutoPlaySteps * bc)
                };
                e.Ac = function () {
                    P(n, n, c)
                };
                e.ge = function () {
                    k && k.$Quit();
                    k && k.$Disable();
                    e.Rc();
                    h && h.Ne();
                    h = g;
                    E()
                };
                e.me = function () {
                    a.I(p)
                };
                e.Rc = function () {
                    a.q(p)
                };
                e.Oe = function () {
                    k && k.$Enable()
                };
                function R(b, e, d) {
                    if (b["jssor-slider"])return;
                    d = d || 0;
                    if (!F) {
                        if (b.tagName == "IMG") {
                            A.push(b);
                            if (!b.src) {
                                O = c;
                                b["display-origin"] = a.db(b);
                                a.I(b)
                            }
                        }
                        a.M() && a.P(b, (a.P(b) || 0) + 1);
                        if (o.$HWA && a.ac())(!X || a.ac() < 534 || !kb && !a.Cb()) && a.qe(b)
                    }
                    var g = a.K(b);
                    a.b(g, function (g) {
                        var i = a.D(g, "u");
                        if (i == "player" && !w) {
                            w = g;
                            if (w.pInstance)M(); else a.e(w, "dataavailable", M)
                        }
                        if (i == "caption") {
                            if (!a.Mb() && !e) {
                                var h = a.Q(g);
                                a.Wb(b, h, g);
                                a.zb(b, g);
                                g = h;
                                e = c
                            }
                        } else if (!F && !d && !f && a.D(g, "u") == "image") {
                            f = g;
                            if (f) {
                                if (f.tagName == "A") {
                                    Q = f;
                                    a.J(Q, U);
                                    q = a.Q(f, c);
                                    a.e(q, "click", N);
                                    a.J(q, U);
                                    a.db(q, "block");
                                    a.tb(q, 0);
                                    a.ub(q, "backgroundColor", "#000");
                                    f = a.Ve(f, "IMG")
                                }
                                f.border = 0;
                                a.J(f, U)
                            }
                        }
                        R(g, e, d + 1)
                    })
                }

                e.zc = function (c, b) {
                    var a = v - b;
                    dc(H, a)
                };
                e.ee = function () {
                    return r
                };
                e.fe = function () {
                    return x
                };
                e.eb = n;
                l.call(e);
                var C = a.B(p, "thumb", c);
                if (C) {
                    e.Le = a.Q(C);
                    a.hf(C, "id");
                    a.I(C)
                }
                a.q(p);
                y = a.Q(jb);
                a.P(y, 1e3);
                a.e(p, "click", N);
                E(c);
                e.Rb = f;
                e.Sc = q;
                e.Gc = p;
                e.Fb = H = p;
                a.z(H, y);
                j.$On(203, P);
                j.$On(28, cb);
                j.$On(24, bb)
            }

            function Cc(F, h, q, v, u) {
                var b = this, l = 0, x = 0, n, g, e, f, k, r, w, t, p = D[h];
                i.call(b, 0, 0);
                function y() {
                    a.Ad(P);
                    jc && k && p.Sc && a.z(P, p.Sc);
                    a.q(P, !k && p.Rb)
                }

                function z() {
                    if (r) {
                        r = d;
                        j.g(m.$EVT_ROLLBACK_END, h, e, l, g, e, f);
                        b.G(g)
                    }
                    b.dc()
                }

                function A(a) {
                    t = a;
                    b.Y();
                    b.dc()
                }

                b.dc = function () {
                    var a = b.ob();
                    if (!C && !S && !t && s == h) {
                        if (!a) {
                            if (n && !k) {
                                k = c;
                                b.Xc(c);
                                j.g(m.$EVT_SLIDESHOW_START, h, l, x, n, f)
                            }
                            y()
                        }
                        var d, o = m.$EVT_STATE_CHANGE;
                        if (a != f)if (a == e)d = f; else if (a == g)d = e; else if (!a)d = g; else if (a > e) {
                            r = c;
                            d = e;
                            o = m.$EVT_ROLLBACK_START
                        } else d = b.cd();
                        j.g(o, h, a, l, g, e, f);
                        var i = T && (!J || G);
                        if (a == f)(e != f && !(J & 12) || i) && p.He(); else(i || a != e) && b.bd(d, z)
                    }
                };
                b.ke = function () {
                    e == f && e == b.ob() && b.G(g)
                };
                b.Ne = function () {
                    B && B.eb == h && B.yb();
                    var a = b.ob();
                    a < f && j.g(m.$EVT_STATE_CHANGE, h, -a - 1, l, g, e, f)
                };
                b.Xc = function (b) {
                    q && a.cb(ob, b && q.rb.$Outside ? "" : "hidden")
                };
                b.zc = function (b, a) {
                    if (k && a >= n) {
                        k = d;
                        y();
                        p.Rc();
                        B.yb();
                        j.g(m.$EVT_SLIDESHOW_END, h, l, x, n, f)
                    }
                    j.g(m.$EVT_PROGRESS_CHANGE, h, a, l, g, e, f)
                };
                b.nd = function (a) {
                    if (a && !w) {
                        w = a;
                        a.$On($JssorPlayer$.Fd, A)
                    }
                };
                q && b.rc(q);
                n = b.U();
                b.U();
                b.rc(v);
                g = v.U();
                e = g + (a.wc(a.D(F, "idle")) || o.$AutoPlayInterval);
                u.$Shift(e);
                b.W(u);
                f = b.U()
            }

            function dc(e, g) {
                var f = x > 0 ? x : nb, c = Fb * g * (f & 1), d = Gb * g * (f >> 1 & 1);
                if (a.Cb() && a.N() < 38) {
                    c = c.toFixed(3);
                    d = d.toFixed(3)
                } else {
                    c = b.round(c);
                    d = b.round(d)
                }
                if (a.Mb() && a.N() >= 10 && a.N() < 11)e.style.msTransform = "translate(" + c + "px, " + d + "px)"; else if (a.Cb() && a.N() >= 30 && a.N() < 34) {
                    e.style.WebkitTransition = "transform 0s";
                    e.style.WebkitTransform = "translate3d(" + c + "px, " + d + "px, 0px) perspective(2000px)"
                } else {
                    a.s(e, c);
                    a.r(e, d)
                }
            }

            function Ac(c) {
                var b = a.ce(c).tagName;
                !N && b != "INPUT" && b != "TEXTAREA" && b != "SELECT" && yc() && zc(c)
            }

            function Tb() {
                vb = S;
                Pb = z.cd();
                E = y.R()
            }

            function mc() {
                Tb();
                if (C || !G && J & 12) {
                    z.Y();
                    j.g(m.Ce)
                }
            }

            function kc(e) {
                e && Tb();
                if (!C && (G || !(J & 12)) && !z.$IsPlaying()) {
                    var c = y.R(), a = b.ceil(E);
                    if (e && b.abs(F) >= o.$MinDragOffsetToSlide) {
                        a = b.ceil(c);
                        a += lb
                    }
                    if (!(M & 1))a = b.min(t - v, b.max(a, 0));
                    var d = b.abs(a - c);
                    d = 1 - b.pow(1 - d, 5);
                    if (!V && vb)z.Td(Pb); else if (c == a) {
                        yb.Oe();
                        yb.Ac()
                    } else z.Jb(c, a, d * Zb)
                }
            }

            function zc(b) {
                C = c;
                Eb = d;
                Y = g;
                a.e(e, tb, gc);
                a.L();
                V = 0;
                mc();
                if (!vb)x = 0;
                if (hb) {
                    var h = b.touches[0];
                    zb = h.clientX;
                    Ab = h.clientY
                } else {
                    var f = a.qd(b);
                    zb = f.x;
                    Ab = f.y;
                    a.gb(b)
                }
                F = 0;
                ib = 0;
                lb = 0;
                j.g(m.$EVT_DRAG_START, u(E), E, b)
            }

            function gc(e) {
                if (C && (!a.M() || e.button)) {
                    var f;
                    if (hb) {
                        var l = e.touches;
                        if (l && l.length > 0)f = {x: l[0].clientX, y: l[0].clientY}
                    } else f = a.qd(e);
                    if (f) {
                        var j = f.x - zb, k = f.y - Ab;
                        if (b.floor(E) != E)x = x || nb & N;
                        if ((j || k) && !x) {
                            if (N == 3)if (b.abs(k) > b.abs(j))x = 2; else x = 1; else x = N;
                            if (X && x == 1 && b.abs(k) - b.abs(j) > 3)Eb = c
                        }
                        if (x) {
                            var d = k, i = Gb;
                            if (x == 1) {
                                d = j;
                                i = Fb
                            }
                            if (!(M & 1)) {
                                if (d > 0) {
                                    var g = i * s, h = d - g;
                                    if (h > 0)d = g + b.sqrt(h) * 5
                                }
                                if (d < 0) {
                                    var g = i * (t - v - s), h = -d - g;
                                    if (h > 0)d = -g - b.sqrt(h) * 5
                                }
                            }
                            if (F - ib < -2)lb = 0; else if (F - ib > 2)lb = -1;
                            ib = F;
                            F = d;
                            xb = E - F / i / (eb || 1);
                            if (F && x && !Eb) {
                                a.gb(e);
                                if (!S)z.kf(xb); else z.mf(xb)
                            } else a.M() && a.gb(e)
                        }
                    }
                } else Jb(e)
            }

            function Jb(f) {
                wc();
                if (C) {
                    C = d;
                    a.L();
                    a.Tb(e, tb, gc);
                    V = F;
                    V && a.gb(f);
                    z.Y();
                    var b = y.R();
                    j.g(m.$EVT_DRAG_END, u(b), b, u(E), E, f);
                    kc(c)
                }
            }

            function tc(a) {
                D[s];
                s = u(a);
                yb = D[s];
                Yb(a);
                return s
            }

            function Jc(a, b) {
                x = 0;
                tc(a);
                j.g(m.$EVT_PARK, u(a), b)
            }

            function Yb(b, c) {
                Cb = b;
                a.b(R, function (a) {
                    a.lc(u(b), b, c)
                })
            }

            function yc() {
                var b = m.Vc || 0, a = Q;
                if (X)a & 1 && (a &= 1);
                m.Vc |= a;
                return N = a & ~b
            }

            function wc() {
                if (N) {
                    m.Vc &= ~Q;
                    N = 0
                }
            }

            function cc() {
                var b = a.hb();
                a.J(b, U);
                a.A(b, "absolute");
                return b
            }

            function u(a) {
                return (a % t + t) % t
            }

            function qc(a, c) {
                if (c)if (!M) {
                    a = b.min(b.max(a + Cb, 0), t - v);
                    c = d
                } else if (M & 2) {
                    a = u(a + Cb);
                    c = d
                }
                gb(a, o.$SlideDuration, c)
            }

            function Db() {
                a.b(R, function (a) {
                    a.uc(a.Sb.$ChanceToShow <= G)
                })
            }

            function oc() {
                if (!G) {
                    G = 1;
                    Db();
                    if (!C) {
                        J & 12 && kc();
                        J & 3 && D[s].Ac()
                    }
                }
            }

            function nc() {
                if (G) {
                    G = 0;
                    Db();
                    C || !(J & 12) || mc()
                }
            }

            function pc() {
                U = {ab: L, ib: K, $Top: 0, $Left: 0};
                a.b(Z, function (b) {
                    a.J(b, U);
                    a.A(b, "absolute");
                    a.cb(b, "hidden");
                    a.I(b)
                });
                a.J(jb, U)
            }

            function rb(b, a) {
                gb(b, a, c)
            }

            function gb(g, f, k) {
                if (Vb && (!C || o.$NaviQuitDrag)) {
                    S = c;
                    C = d;
                    z.Y();
                    if (f == h)f = Zb;
                    var e = Kb.ob(), a = g;
                    if (k) {
                        a = e + g;
                        if (g > 0)a = b.ceil(a); else a = b.floor(a)
                    }
                    if (!(M & 1)) {
                        a = u(a);
                        a = b.max(0, b.min(a, t - v))
                    }
                    var j = (a - e) % t;
                    a = e + j;
                    var i = e == a ? 0 : f * b.abs(j);
                    i = b.min(i, f * v * 1.5);
                    z.Jb(e, a, i || 1)
                }
            }

            j.$PlayTo = gb;
            j.$GoTo = function (a) {
                gb(a, 1)
            };
            j.$Next = function () {
                rb(1)
            };
            j.$Prev = function () {
                rb(-1)
            };
            j.$Pause = function () {
                T = d
            };
            j.$Play = function () {
                if (!T) {
                    T = c;
                    D[s] && D[s].Ac()
                }
            };
            j.$SetSlideshowTransitions = function (b) {
                a.Vb(b);
                o.$SlideshowOptions.$Transitions = b
            };
            j.$SetCaptionTransitions = function (b) {
                a.Vb(b);
                I.$CaptionTransitions = b;
                I.tc = a.L()
            };
            j.$SlidesCount = function () {
                return Z.length
            };
            j.$CurrentIndex = function () {
                return s
            };
            j.$IsAutoPlaying = function () {
                return T
            };
            j.$IsDragging = function () {
                return C
            };
            j.$IsSliding = function () {
                return S
            };
            j.$IsMouseOver = function () {
                return !G
            };
            j.$LastDragSucceded = function () {
                return V
            };
            function db() {
                return a.j(w || q)
            }

            function pb() {
                return a.k(w || q)
            }

            j.$OriginalWidth = j.$GetOriginalWidth = db;
            j.$OriginalHeight = j.$GetOriginalHeight = pb;
            function Mb(c, f) {
                if (c == h)return a.j(q);
                if (!w) {
                    var b = a.hb(e);
                    a.Kb(b, a.Kb(q));
                    a.Nc(b, a.Nc(q));
                    a.A(b, "relative");
                    a.r(b, 0);
                    a.s(b, 0);
                    a.cb(b, "visible");
                    w = a.hb(e);
                    a.A(w, "absolute");
                    a.r(w, 0);
                    a.s(w, 0);
                    a.j(w, a.j(q));
                    a.k(w, a.k(q));
                    a.ue(w, "0 0");
                    a.z(w, b);
                    var k = a.K(q);
                    a.z(q, w);
                    a.ub(q, "backgroundImage", "");
                    var j = {
                        navigator: bb && bb.$Scale == d,
                        arrowleft: O && O.$Scale == d,
                        arrowright: O && O.$Scale == d,
                        thumbnavigator: H && H.$Scale == d,
                        thumbwrapper: H && H.$Scale == d
                    };
                    a.b(k, function (c) {
                        a.z(j[a.D(c, "u")] ? q : b, c)
                    });
                    a.q(b);
                    a.q(w)
                }
                eb = c / (f ? a.k : a.j)(w);
                a.te(w, eb);
                var i = f ? eb * db() : c, g = f ? c : eb * pb();
                a.j(q, i);
                a.k(q, g);
                a.b(R, function (a) {
                    a.gc(i, g)
                })
            }

            j.$ScaleHeight = j.$GetScaleHeight = function (b) {
                if (b == h)return a.k(q);
                Mb(b, c)
            };
            j.$ScaleWidth = j.$SetScaleWidth = j.$GetScaleWidth = Mb;
            j.Cc = function (a) {
                var d = b.ceil(u(mb / fc)), c = u(a - s + d);
                if (c > v) {
                    if (a - s > t / 2)a -= t; else if (a - s <= -t / 2)a += t
                } else a = s + c - d;
                return a
            };
            l.call(j);
            j.$Elmt = q = a.Z(q);
            var o = a.i({
                $FillMode: 0,
                $LazyLoading: 1,
                $StartIndex: 0,
                $AutoPlay: d,
                $Loop: 1,
                $HWA: c,
                $NaviQuitDrag: c,
                $AutoPlaySteps: 1,
                $AutoPlayInterval: 3e3,
                $PauseOnHover: 1,
                $SlideDuration: 500,
                $SlideEasing: k.$EaseOutQuad,
                $MinDragOffsetToSlide: 20,
                $SlideSpacing: 0,
                $DisplayPieces: 1,
                $ParkingPosition: 0,
                $UISearchMode: 1,
                $PlayOrientation: 1,
                $DragOrientation: 1
            }, lc), nb = o.$PlayOrientation & 3, bc = (o.$PlayOrientation & 4) / -4 || 1, cb = o.$SlideshowOptions, I = a.i({
                $Class: r,
                $PlayInMode: 1,
                $PlayOutMode: 1
            }, o.$CaptionSliderOptions);
            a.Vb(I.$CaptionTransitions);
            var bb = o.$BulletNavigatorOptions, O = o.$ArrowNavigatorOptions, H = o.$ThumbnailNavigatorOptions, W = !o.$UISearchMode, w, A = a.B(q, "slides", W), jb = a.B(q, "loading", W) || a.hb(e), Ob = a.B(q, "navigator", W), hc = a.B(q, "arrowleft", W), ec = a.B(q, "arrowright", W), Nb = a.B(q, "thumbnavigator", W), sc = a.j(A), rc = a.k(A), U, Z = [], Bc = a.K(A);
            a.b(Bc, function (b) {
                b.tagName == "DIV" && !a.D(b, "u") && Z.push(b)
            });
            var s = -1, Cb, yb, t = Z.length, L = o.$SlideWidth || sc, K = o.$SlideHeight || rc, ac = o.$SlideSpacing, Fb = L + ac, Gb = K + ac, fc = nb & 1 ? Fb : Gb, v = b.min(o.$DisplayPieces, t), ob, x, N, Eb, hb, X, R = [], Ub, Wb, Sb, jc, Ic, T, J = o.$PauseOnHover, Zb = o.$SlideDuration, wb, kb, mb, Vb = v < t, M = Vb ? o.$Loop : 0, Q, V, G = 1, S, C, Y, zb = 0, Ab = 0, F, ib, lb, Kb, y, fb, z, Xb = new vc, eb;
            T = o.$AutoPlay;
            j.Sb = lc;
            pc();
            q["jssor-slider"] = c;
            a.P(A, a.P(A) || 0);
            a.A(A, "absolute");
            ob = a.Q(A);
            a.Wb(a.sc(A), ob, A);
            if (cb) {
                jc = cb.$ShowLink;
                wb = cb.$Class;
                a.Vb(cb.$Transitions);
                kb = v == 1 && t > 1 && wb && (!a.Mb() || a.N() >= 8)
            }
            mb = kb || v >= t || !(M & 1) ? 0 : o.$ParkingPosition;
            Q = (v > 1 || mb ? nb : -1) & o.$DragOrientation;
            var Bb = A, D = [], B, P, Ib = "mousedown", tb = "mousemove", Lb = "mouseup", sb, E, vb, Pb, xb, ab;
            if (f.navigator.pointerEnabled || (ab = f.navigator.msPointerEnabled)) {
                X = c;
                Ib = ab ? "MSPointerDown" : "pointerdown";
                tb = ab ? "MSPointerMove" : "pointermove";
                Lb = ab ? "MSPointerUp" : "pointerup";
                sb = ab ? "MSPointerCancel" : "pointercancel";
                if (Q) {
                    var Hb = "auto";
                    if (Q == 2)Hb = "pan-x"; else if (Q)Hb = "pan-y";
                    a.ub(Bb, ab ? "msTouchAction" : "touchAction", Hb)
                }
            } else if ("ontouchstart"in f || "createTouch"in e) {
                hb = c;
                X = c;
                Ib = "touchstart";
                tb = "touchmove";
                Lb = "touchend";
                sb = "touchcancel"
            }
            fb = new Fc;
            if (kb)B = new wb(Xb, L, K, cb, hb);
            a.z(ob, fb.Fb);
            a.cb(A, "hidden");
            P = cc();
            a.ub(P, "backgroundColor", "#000");
            a.tb(P, 0);
            a.Wb(Bb, P, Bb.firstChild);
            for (var ub = 0; ub < Z.length; ub++) {
                var Dc = Z[ub], ic = new Ec(Dc, ub);
                D.push(ic)
            }
            a.I(jb);
            Kb = new Gc;
            z = new uc(Kb, fb);
            if (Q) {
                a.e(A, Ib, Ac);
                a.e(e, Lb, Jb);
                sb && a.e(e, sb, Jb)
            }
            J &= X ? 10 : 5;
            if (Ob && bb) {
                Ub = new bb.$Class(Ob, bb, db(), pb());
                R.push(Ub)
            }
            if (O && hc && ec) {
                Wb = new O.$Class(hc, ec, O, db(), pb());
                R.push(Wb)
            }
            if (Nb && H) {
                H.$StartIndex = o.$StartIndex;
                Sb = new H.$Class(Nb, H);
                R.push(Sb)
            }
            a.b(R, function (a) {
                a.Bc(t, D, jb);
                a.$On(n.Gb, qc)
            });
            Mb(db());
            a.e(q, "mouseout", a.Xb(oc, q));
            a.e(q, "mouseover", a.Xb(nc, q));
            Db();
            o.$ArrowKeyNavigation && a.e(e, "keydown", function (a) {
                if (a.keyCode == p.Me)rb(-1); else a.keyCode == p.Ae && rb(1)
            });
            var qb = o.$StartIndex;
            if (!(M & 1))qb = b.max(0, b.min(qb, t - v));
            z.Jb(qb, qb, 0)
        }

        m.$EVT_CLICK = 21;
        m.$EVT_DRAG_START = 22;
        m.$EVT_DRAG_END = 23;
        m.$EVT_SWIPE_START = 24;
        m.$EVT_SWIPE_END = 25;
        m.$EVT_LOAD_START = 26;
        m.$EVT_LOAD_END = 27;
        m.Ce = 28;
        m.$EVT_POSITION_CHANGE = 202;
        m.$EVT_PARK = 203;
        m.$EVT_SLIDESHOW_START = 206;
        m.$EVT_SLIDESHOW_END = 207;
        m.$EVT_PROGRESS_CHANGE = 208;
        m.$EVT_STATE_CHANGE = 209;
        m.$EVT_ROLLBACK_START = 210;
        m.$EVT_ROLLBACK_END = 211;
        f.$JssorSlider$ = q = m
    };
    var n = {Gb: 1};
    f.$JssorBulletNavigator$ = function (f, D) {
        var h = this;
        l.call(h);
        f = a.Z(f);
        var t, u, s, r, m = 0, e, o, k, y, z, j, i, q, p, C = [], A = [];

        function x(a) {
            a != -1 && A[a].Hc(a == m)
        }

        function v(a) {
            h.g(n.Gb, a * o)
        }

        h.$Elmt = f;
        h.lc = function (a) {
            if (a != r) {
                var d = m, c = b.floor(a / o);
                m = c;
                r = a;
                x(d);
                x(c)
            }
        };
        h.uc = function (b) {
            a.q(f, b)
        };
        var B;
        h.gc = function (g, b) {
            if (!B || e.$Scale == d) {
                e.$AutoCenter & 1 && a.s(f, (g - u) / 2);
                e.$AutoCenter & 2 && a.r(f, (b - s) / 2);
                B = c
            }
        };
        var w;
        h.Bc = function (D) {
            if (!w) {
                t = b.ceil(D / o);
                m = 0;
                var n = q + y, r = p + z, l = b.ceil(t / k) - 1;
                u = q + n * (!j ? l : k - 1);
                s = p + r * (j ? l : k - 1);
                a.j(f, u);
                a.k(f, s);
                for (var d = 0; d < t; d++) {
                    var B = a.Te();
                    a.nf(B, d + 1);
                    var h = a.Kc(i, "numbertemplate", B, c);
                    a.A(h, "absolute");
                    var x = d % (l + 1);
                    a.s(h, !j ? n * x : d % k * n);
                    a.r(h, j ? r * x : b.floor(d / (l + 1)) * r);
                    a.z(f, h);
                    C[d] = h;
                    e.$ActionMode & 1 && a.e(h, "click", a.H(g, v, d));
                    e.$ActionMode & 2 && a.e(h, "mouseover", a.Xb(a.H(g, v, d), h));
                    A[d] = a.Nb(h)
                }
                w = c
            }
        };
        h.Sb = e = a.i({$SpacingX: 0, $SpacingY: 0, $Orientation: 1, $ActionMode: 1}, D);
        i = a.B(f, "prototype");
        q = a.j(i);
        p = a.k(i);
        a.zb(f, i);
        o = e.$Steps || 1;
        k = e.$Lanes || 1;
        y = e.$SpacingX;
        z = e.$SpacingY;
        j = e.$Orientation - 1
    };
    f.$JssorArrowNavigator$ = function (e, f, s, m) {
        var b = this;
        l.call(b);
        var h, j, q = a.j(e), o = a.k(e);

        function k(a) {
            b.g(n.Gb, a, c)
        }

        b.lc = function (b, a, c) {
            if (c);
        };
        b.uc = function (b) {
            a.q(e, b);
            a.q(f, b)
        };
        var r;
        b.gc = function (g, b) {
            if (!r || h.$Scale == d) {
                if (h.$AutoCenter & 1) {
                    a.s(e, (m - q) / 2);
                    a.s(f, (m - q) / 2)
                }
                if (h.$AutoCenter & 2) {
                    a.r(e, (b - o) / 2);
                    a.r(f, (b - o) / 2)
                }
                r = c
            }
        };
        var p;
        b.Bc = function (b) {
            if (!p) {
                a.e(e, "click", a.H(g, k, -j));
                a.e(f, "click", a.H(g, k, j));
                a.Nb(e);
                a.Nb(f);
                p = c
            }
        };
        b.Sb = h = a.i({$Steps: 1}, s);
        j = h.$Steps
    };
    f.$JssorThumbnailNavigator$ = function (i, A) {
        var h = this, x, m, e, u = [], y, w, f, o, p, t, s, k, r, g, j;
        l.call(h);
        i = a.Z(i);
        function z(o, d) {
            var g = this, b, l, k;

            function p() {
                l.Hc(m == d)
            }

            function i() {
                if (!r.$LastDragSucceded()) {
                    var a = f - d % f, b = r.Cc((d + a) / f - 1), c = b * f + f - a;
                    h.g(n.Gb, c)
                }
            }

            g.eb = d;
            g.Uc = p;
            k = o.Le || o.Rb || a.hb();
            g.Fb = b = a.Kc(j, "thumbnailtemplate", k, c);
            l = a.Nb(b);
            e.$ActionMode & 1 && a.e(b, "click", i);
            e.$ActionMode & 2 && a.e(b, "mouseover", a.Xb(i, b))
        }

        h.lc = function (c, d, e) {
            var a = m;
            m = c;
            a != -1 && u[a].Uc();
            u[c].Uc();
            !e && r.$PlayTo(r.Cc(b.floor(d / f)))
        };
        h.uc = function (b) {
            a.q(i, b)
        };
        h.gc = a.mc;
        var v;
        h.Bc = function (F, D) {
            if (!v) {
                x = F;
                b.ceil(x / f);
                m = -1;
                k = b.min(k, D.length);
                var h = e.$Orientation & 1, n = t + (t + o) * (f - 1) * (1 - h), l = s + (s + p) * (f - 1) * h, C = n + (n + o) * (k - 1) * h, A = l + (l + p) * (k - 1) * (1 - h);
                a.A(g, "absolute");
                a.cb(g, "hidden");
                e.$AutoCenter & 1 && a.s(g, (y - C) / 2);
                e.$AutoCenter & 2 && a.r(g, (w - A) / 2);
                a.j(g, C);
                a.k(g, A);
                var j = [];
                a.b(D, function (l, e) {
                    var i = new z(l, e), d = i.Fb, c = b.floor(e / f), k = e % f;
                    a.s(d, (t + o) * k * (1 - h));
                    a.r(d, (s + p) * k * h);
                    if (!j[c]) {
                        j[c] = a.hb();
                        a.z(g, j[c])
                    }
                    a.z(j[c], d);
                    u.push(i)
                });
                var E = a.i({
                    $HWA: d,
                    $AutoPlay: d,
                    $NaviQuitDrag: d,
                    $SlideWidth: n,
                    $SlideHeight: l,
                    $SlideSpacing: o * h + p * (1 - h),
                    $MinDragOffsetToSlide: 12,
                    $SlideDuration: 200,
                    $PauseOnHover: 1,
                    $PlayOrientation: e.$Orientation,
                    $DragOrientation: e.$DisableDrag ? 0 : e.$Orientation
                }, e);
                r = new q(i, E);
                v = c
            }
        };
        h.Sb = e = a.i({
            $SpacingX: 3,
            $SpacingY: 3,
            $DisplayPieces: 1,
            $Orientation: 1,
            $AutoCenter: 3,
            $ActionMode: 1
        }, A);
        y = a.j(i);
        w = a.k(i);
        g = a.B(i, "slides", c);
        j = a.B(g, "prototype");
        t = a.j(j);
        s = a.k(j);
        a.zb(g, j);
        f = e.$Lanes || 1;
        o = e.$SpacingX;
        p = e.$SpacingY;
        k = e.$DisplayPieces
    };
    function r() {
        i.call(this, 0, 0);
        this.fc = a.mc
    }

    f.$JssorCaptionSlider$ = function (q, k, g) {
        var d = this, j, o = g ? k.$PlayInMode : k.$PlayOutMode, f = k.$CaptionTransitions, p = {
            rb: "t",
            $Delay: "d",
            $Duration: "du",
            x: "x",
            y: "y",
            $Rotate: "r",
            $Zoom: "z",
            $Opacity: "f",
            kb: "b"
        }, e = {
            E: function (b, a) {
                if (!isNaN(a.lb))b = a.lb; else b *= a.Hd;
                return b
            }, $Opacity: function (b, a) {
                return this.E(b - 1, a)
            }
        };
        e.$Zoom = e.$Opacity;
        i.call(d, 0, 0);
        function m(r, l) {
            var k = [], i, j = [], c = [];

            function h(c, d) {
                var b = {};
                a.b(p, function (g, h) {
                    var e = a.D(c, g + (d || ""));
                    if (e) {
                        var f = {};
                        if (g == "t")f.lb = e; else if (e.indexOf("%") + 1)f.Hd = a.wc(e) / 100; else f.lb = a.wc(e);
                        b[h] = f
                    }
                });
                return b
            }

            function n() {
                return f[b.floor(b.random() * f.length)]
            }

            function d(g) {
                var h;
                if (g == "*")h = n(); else if (g) {
                    var e = f[a.Ed(g)] || f[g];
                    if (a.Eb(e)) {
                        if (g != i) {
                            i = g;
                            c[g] = 0;
                            j[g] = e[b.floor(b.random() * e.length)]
                        } else c[g]++;
                        e = j[g];
                        if (a.Eb(e)) {
                            e = e.length && e[c[g] % e.length];
                            if (a.Eb(e))e = e[b.floor(b.random() * e.length)]
                        }
                    }
                    h = e;
                    if (a.ld(h))h = d(h)
                }
                return h
            }

            var q = a.K(r);
            a.b(q, function (b) {
                var c = [];
                c.$Elmt = b;
                var f = a.D(b, "u") == "caption";
                a.b(g ? [0, 3] : [2], function (k, n) {
                    if (f) {
                        var j, g;
                        if (k != 2 || !a.D(b, "t3")) {
                            g = h(b, k);
                            if (k == 2 && !g.rb) {
                                g.$Delay = g.$Delay || {lb: 0};
                                g = a.i(h(b, 0), g)
                            }
                        }
                        if (g && g.rb) {
                            j = d(g.rb.lb);
                            if (j) {
                                var i = a.i({$Delay: 0}, j);
                                a.b(g, function (c, a) {
                                    var b = (e[a] || e.E).apply(e, [i[a], g[a]]);
                                    if (!isNaN(b))i[a] = b
                                });
                                if (!n)if (g.kb)i.kb = g.kb.lb || 0; else if (o & 2)i.kb = 0
                            }
                        }
                        c.push(i)
                    }
                    if (l % 2 && !n)c.K = m(b, l + 1)
                });
                k.push(c)
            });
            return k
        }

        function n(x, d, A) {
            var h = {
                $Easing: d.$Easing,
                $Round: d.$Round,
                $During: d.$During,
                $Reverse: g && !A
            }, j = x, s = a.sc(x), n = a.j(j), m = a.k(j), z = a.j(s), y = a.k(s), f = {}, k = {}, l = d.$ScaleClip || 1;
            if (d.$Opacity)f.$Opacity = 2 - d.$Opacity;
            h.$OriginalWidth = n;
            h.$OriginalHeight = m;
            if (d.$Zoom || d.$Rotate) {
                f.$Zoom = d.$Zoom ? d.$Zoom - 1 : 1;
                if (a.M() || a.jc())f.$Zoom = b.min(f.$Zoom, 2);
                k.$Zoom = 1;
                var C = d.$Rotate || 0;
                f.$Rotate = C * 360;
                k.$Rotate = 0
            } else if (d.$Clip) {
                var t = {
                    $Top: 0,
                    $Right: n,
                    $Bottom: m,
                    $Left: 0
                }, w = a.i({}, t), e = w.F = {}, v = d.$Clip & 4, q = d.$Clip & 8, u = d.$Clip & 1, r = d.$Clip & 2;
                if (v && q) {
                    e.$Top = m / 2 * l;
                    e.$Bottom = -e.$Top
                } else if (v)e.$Bottom = -m * l; else if (q)e.$Top = m * l;
                if (u && r) {
                    e.$Left = n / 2 * l;
                    e.$Right = -e.$Left
                } else if (u)e.$Right = -n * l; else if (r)e.$Left = n * l;
                h.$Move = d.$Move;
                f.$Clip = w;
                k.$Clip = t
            }
            var o = 0, p = 0;
            if (d.x)o -= z * d.x;
            if (d.y)p -= y * d.y;
            if (o || p || h.$Move) {
                f.$Left = o + a.s(j);
                f.$Top = p + a.r(j)
            }
            var B = d.$Duration;
            k = a.i(k, a.Sd(j, f));
            h.vd = a.Xd();
            return new i(d.$Delay, B, h, j, k, f)
        }

        function l(b, c) {
            a.b(c, function (a) {
                var e, g = a.$Elmt, c = a[0], i = a[1];
                if (c) {
                    e = n(g, c);
                    b = e.Db(c.kb == h ? b : c.kb, 1)
                }
                b = l(b, a.K);
                if (i) {
                    var f = n(g, i, 1);
                    f.Db(b, 1);
                    d.W(f);
                    j.W(f)
                }
                e && d.W(e)
            });
            return b
        }

        d.fc = function () {
            d.G(d.U() * (g || 0));
            j.qc()
        };
        j = new i(0, 0);
        l(0, o ? m(q, 1) : [])
    }
})(window, document, Math, null, true, false)