/*! For license information please see main.js.LICENSE.txt */
(() => {
    var t = {
            61: (t, e, r) => {
                var n = r(698).default;

                function a() {
                    "use strict";
                    t.exports = a = function() {
                        return e
                    }, t.exports.__esModule = !0, t.exports.default = t.exports;
                    var e = {},
                        r = Object.prototype,
                        o = r.hasOwnProperty,
                        i = Object.defineProperty || function(t, e, r) {
                            t[e] = r.value
                        },
                        s = "function" == typeof Symbol ? Symbol : {},
                        c = s.iterator || "@@iterator",
                        d = s.asyncIterator || "@@asyncIterator",
                        u = s.toStringTag || "@@toStringTag";

                    function l(t, e, r) {
                        return Object.defineProperty(t, e, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }), t[e]
                    }
                    try {
                        l({}, "")
                    } catch (t) {
                        l = function(t, e, r) {
                            return t[e] = r
                        }
                    }

                    function p(t, e, r, n) {
                        var a = e && e.prototype instanceof h ? e : h,
                            o = Object.create(a.prototype),
                            s = new O(n || []);
                        return i(o, "_invoke", {
                            value: E(t, r, s)
                        }), o
                    }

                    function f(t, e, r) {
                        try {
                            return {
                                type: "normal",
                                arg: t.call(e, r)
                            }
                        } catch (t) {
                            return {
                                type: "throw",
                                arg: t
                            }
                        }
                    }
                    e.wrap = p;
                    var v = {};

                    function h() {}

                    function y() {}

                    function m() {}
                    var g = {};
                    l(g, c, (function() {
                        return this
                    }));
                    var T = Object.getPrototypeOf,
                        w = T && T(T(C([])));
                    w && w !== r && o.call(w, c) && (g = w);
                    var A = m.prototype = h.prototype = Object.create(g);

                    function S(t) {
                        ["next", "throw", "return"].forEach((function(e) {
                            l(t, e, (function(t) {
                                return this._invoke(e, t)
                            }))
                        }))
                    }

                    function P(t, e) {
                        function r(a, i, s, c) {
                            var d = f(t[a], t, i);
                            if ("throw" !== d.type) {
                                var u = d.arg,
                                    l = u.value;
                                return l && "object" == n(l) && o.call(l, "__await") ? e.resolve(l.__await).then((function(t) {
                                    r("next", t, s, c)
                                }), (function(t) {
                                    r("throw", t, s, c)
                                })) : e.resolve(l).then((function(t) {
                                    u.value = t, s(u)
                                }), (function(t) {
                                    return r("throw", t, s, c)
                                }))
                            }
                            c(d.arg)
                        }
                        var a;
                        i(this, "_invoke", {
                            value: function(t, n) {
                                function o() {
                                    return new e((function(e, a) {
                                        r(t, n, e, a)
                                    }))
                                }
                                return a = a ? a.then(o, o) : o()
                            }
                        })
                    }

                    function E(t, e, r) {
                        var n = "suspendedStart";
                        return function(a, o) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === a) throw o;
                                return {
                                    value: void 0,
                                    done: !0
                                }
                            }
                            for (r.method = a, r.arg = o;;) {
                                var i = r.delegate;
                                if (i) {
                                    var s = I(i, r);
                                    if (s) {
                                        if (s === v) continue;
                                        return s
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === n) throw n = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                n = "executing";
                                var c = f(t, e, r);
                                if ("normal" === c.type) {
                                    if (n = r.done ? "completed" : "suspendedYield", c.arg === v) continue;
                                    return {
                                        value: c.arg,
                                        done: r.done
                                    }
                                }
                                "throw" === c.type && (n = "completed", r.method = "throw", r.arg = c.arg)
                            }
                        }
                    }

                    function I(t, e) {
                        var r = e.method,
                            n = t.iterator[r];
                        if (void 0 === n) return e.delegate = null, "throw" === r && t.iterator.return && (e.method = "return", e.arg = void 0, I(t, e), "throw" === e.method) || "return" !== r && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + r + "' method")), v;
                        var a = f(n, t.iterator, e.arg);
                        if ("throw" === a.type) return e.method = "throw", e.arg = a.arg, e.delegate = null, v;
                        var o = a.arg;
                        return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, v) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, v)
                    }

                    function b(t) {
                        var e = {
                            tryLoc: t[0]
                        };
                        1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                    }

                    function L(t) {
                        var e = t.completion || {};
                        e.type = "normal", delete e.arg, t.completion = e
                    }

                    function O(t) {
                        this.tryEntries = [{
                            tryLoc: "root"
                        }], t.forEach(b, this), this.reset(!0)
                    }

                    function C(t) {
                        if (t) {
                            var e = t[c];
                            if (e) return e.call(t);
                            if ("function" == typeof t.next) return t;
                            if (!isNaN(t.length)) {
                                var r = -1,
                                    n = function e() {
                                        for (; ++r < t.length;)
                                            if (o.call(t, r)) return e.value = t[r], e.done = !1, e;
                                        return e.value = void 0, e.done = !0, e
                                    };
                                return n.next = n
                            }
                        }
                        return {
                            next: k
                        }
                    }

                    function k() {
                        return {
                            value: void 0,
                            done: !0
                        }
                    }
                    return y.prototype = m, i(A, "constructor", {
                        value: m,
                        configurable: !0
                    }), i(m, "constructor", {
                        value: y,
                        configurable: !0
                    }), y.displayName = l(m, u, "GeneratorFunction"), e.isGeneratorFunction = function(t) {
                        var e = "function" == typeof t && t.constructor;
                        return !!e && (e === y || "GeneratorFunction" === (e.displayName || e.name))
                    }, e.mark = function(t) {
                        return Object.setPrototypeOf ? Object.setPrototypeOf(t, m) : (t.__proto__ = m, l(t, u, "GeneratorFunction")), t.prototype = Object.create(A), t
                    }, e.awrap = function(t) {
                        return {
                            __await: t
                        }
                    }, S(P.prototype), l(P.prototype, d, (function() {
                        return this
                    })), e.AsyncIterator = P, e.async = function(t, r, n, a, o) {
                        void 0 === o && (o = Promise);
                        var i = new P(p(t, r, n, a), o);
                        return e.isGeneratorFunction(r) ? i : i.next().then((function(t) {
                            return t.done ? t.value : i.next()
                        }))
                    }, S(A), l(A, u, "Generator"), l(A, c, (function() {
                        return this
                    })), l(A, "toString", (function() {
                        return "[object Generator]"
                    })), e.keys = function(t) {
                        var e = Object(t),
                            r = [];
                        for (var n in e) r.push(n);
                        return r.reverse(),
                            function t() {
                                for (; r.length;) {
                                    var n = r.pop();
                                    if (n in e) return t.value = n, t.done = !1, t
                                }
                                return t.done = !0, t
                            }
                    }, e.values = C, O.prototype = {
                        constructor: O,
                        reset: function(t) {
                            if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(L), !t)
                                for (var e in this) "t" === e.charAt(0) && o.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                        },
                        stop: function() {
                            this.done = !0;
                            var t = this.tryEntries[0].completion;
                            if ("throw" === t.type) throw t.arg;
                            return this.rval
                        },
                        dispatchException: function(t) {
                            if (this.done) throw t;
                            var e = this;

                            function r(r, n) {
                                return i.type = "throw", i.arg = t, e.next = r, n && (e.method = "next", e.arg = void 0), !!n
                            }
                            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                                var a = this.tryEntries[n],
                                    i = a.completion;
                                if ("root" === a.tryLoc) return r("end");
                                if (a.tryLoc <= this.prev) {
                                    var s = o.call(a, "catchLoc"),
                                        c = o.call(a, "finallyLoc");
                                    if (s && c) {
                                        if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                                        if (this.prev < a.finallyLoc) return r(a.finallyLoc)
                                    } else if (s) {
                                        if (this.prev < a.catchLoc) return r(a.catchLoc, !0)
                                    } else {
                                        if (!c) throw new Error("try statement without catch or finally");
                                        if (this.prev < a.finallyLoc) return r(a.finallyLoc)
                                    }
                                }
                            }
                        },
                        abrupt: function(t, e) {
                            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                                var n = this.tryEntries[r];
                                if (n.tryLoc <= this.prev && o.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                                    var a = n;
                                    break
                                }
                            }
                            a && ("break" === t || "continue" === t) && a.tryLoc <= e && e <= a.finallyLoc && (a = null);
                            var i = a ? a.completion : {};
                            return i.type = t, i.arg = e, a ? (this.method = "next", this.next = a.finallyLoc, v) : this.complete(i)
                        },
                        complete: function(t, e) {
                            if ("throw" === t.type) throw t.arg;
                            return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), v
                        },
                        finish: function(t) {
                            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                                var r = this.tryEntries[e];
                                if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), L(r), v
                            }
                        },
                        catch: function(t) {
                            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                                var r = this.tryEntries[e];
                                if (r.tryLoc === t) {
                                    var n = r.completion;
                                    if ("throw" === n.type) {
                                        var a = n.arg;
                                        L(r)
                                    }
                                    return a
                                }
                            }
                            throw new Error("illegal catch attempt")
                        },
                        delegateYield: function(t, e, r) {
                            return this.delegate = {
                                iterator: C(t),
                                resultName: e,
                                nextLoc: r
                            }, "next" === this.method && (this.arg = void 0), v
                        }
                    }, e
                }
                t.exports = a, t.exports.__esModule = !0, t.exports.default = t.exports
            },
            698: t => {
                function e(r) {
                    return t.exports = e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    }, t.exports.__esModule = !0, t.exports.default = t.exports, e(r)
                }
                t.exports = e, t.exports.__esModule = !0, t.exports.default = t.exports
            },
            687: (t, e, r) => {
                var n = r(61)();
                t.exports = n;
                try {
                    regeneratorRuntime = n
                } catch (t) {
                    "object" == typeof globalThis ? globalThis.regeneratorRuntime = n : Function("r", "regeneratorRuntime = r")(n)
                }
            }
        },
        e = {};

    function r(n) {
        var a = e[n];
        if (void 0 !== a) return a.exports;
        var o = e[n] = {
            exports: {}
        };
        return t[n](o, o.exports, r), o.exports
    }
    r.n = t => {
        var e = t && t.__esModule ? () => t.default : () => t;
        return r.d(e, {
            a: e
        }), e
    }, r.d = (t, e) => {
        for (var n in e) r.o(e, n) && !r.o(t, n) && Object.defineProperty(t, n, {
            enumerable: !0,
            get: e[n]
        })
    }, r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), (() => {
        "use strict";

        function t(t, e, r, n, a, o, i) {
            try {
                var s = t[o](i),
                    c = s.value
            } catch (t) {
                return void r(t)
            }
            s.done ? e(c) : Promise.resolve(c).then(n, a)
        }

        function e(e) {
            return function() {
                var r = this,
                    n = arguments;
                return new Promise((function(a, o) {
                    var i = e.apply(r, n);

                    function s(e) {
                        t(i, a, o, s, c, "next", e)
                    }

                    function c(e) {
                        t(i, a, o, s, c, "throw", e)
                    }
                    s(void 0)
                }))
            }
        }
        var n = r(687),
            a = r.n(n),
            o = function(t) {
                var e, r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                    n = new Uint8Array(t),
                    a = n.length,
                    o = "";
                for (e = 0; e < a; e += 3) o += r[n[e] >> 2], o += r[(3 & n[e]) << 4 | n[e + 1] >> 4], o += r[(15 & n[e + 1]) << 2 | n[e + 2] >> 6], o += r[63 & n[e + 2]];
                return a % 3 == 2 ? o = "".concat(o.substring(0, o.length - 1), "=") : a % 3 == 1 && (o = "".concat(o.substring(0, o.length - 2), "==")), o
            },
            i = function() {
                var t = e(a().mark((function t(e) {
                    var r, n, i, s;
                    return a().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return r = new TextEncoder, n = r.encode(e), t.next = 4, window.crypto.subtle.digest("SHA-256", n);
                            case 4:
                                return i = t.sent, s = o(i), t.abrupt("return", s.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, ""));
                            case 7:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })));
                return function(e) {
                    return t.apply(this, arguments)
                }
            }();

        function s(t) {
            for (var e = "", r = 0; r < t; r += 1) e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~".charAt(Math.floor(66 * Math.random()));
            return e
        }
        window.codeVerifierTdlSsoAuth = s(128), window.codeChallengeTdlSsoAuth = i(window.codeVerifierTdlSsoAuth);
        var c, d = window.location.href,
            u = (c = document.currentScript.src).includes("localhost") || c.includes("0.0.0.0") ? "http://localhost:8080/v2/" : c.includes("dev") ? "https://dev-account.tatadigital.com/v2/" : c.includes("sit-account") ? "https://sit-account.tatadigital.com/v2/" : c.includes("pt") ? "https://pt-account.tatadigital.com/v2/" : c.includes("sit-r2-account") ? "https://sit-r2-account.tatadigital.com/v2/" : c.includes("accounts") ? "https://accounts.tatadigital.com/v2/" : c.includes("bf") ? "https://bf-account.tatadigital.com/v2/" : "https://dev-account.tatadigital.com/v2/",
            l = function() {
                var t = u;
                return t.includes("localhost") || t.includes("0.0.0.0") || t.includes("dev") ? "https://dapi.tatadigital.com" : t.includes("sit-account") ? "https://sapi.tatadigital.com" : t.includes("sit-r2-account") ? "https://ppapi.tatadigital.com" : t.includes("pt") ? "https://pfapi.tatadigital.com" : t.includes("accounts") ? "https://api.tatadigital.com" : t.includes("bf") ? "https://bapi.tatadigital.com" : "https://dapi.tatadigital.com"
            },
            p = function() {
                var t = u;
                return t.includes("dev") ? "https://tatadigital-dev.adobecqms.net" : t.includes("sit-r2-account") || t.includes("pt") ? "https://aem-sit-r2.tatadigital.com" : t.includes("accounts") ? "https://tatadigital.com" : "https://tatadigital-dev.adobecqms.net"
            };
        window.ssoSdkGetClientId = function(t) {
            return ["tajhotels.com", "amastaysandtrails.com", "vivantahotels.com", "seleqtionshotels.com", "taj-dev65-02.adobecqms.net", "taj-stage65-1.adobecqms.net", "gingerhotels"].find((function(e) {
                return t.includes(e)
            })) ? "IHCL-WEB-APP" : ""
        };
        var f = {};
        window.ssoSdkGenerateAuthCodeForTargetDomain = function() {
            var t = e(a().mark((function t(e, r, n, o) {
                var i, s, c;
                return a().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return i = "".concat(l(), "/api/v2/sso/redirect-client-auth-code"), s = {
                                redirectClientId: window.ssoSdkGetClientId(r.origin),
                                redirectUrl: r.href,
                                codeChallenge: f.codeChallenge
                            }, t.next = 4, fetch(i, {
                                method: "POST",
                                credentials: "include",
                                headers: {
                                    client_id: n,
                                    client_secret: o,
                                    "Access-Control-Allow-Origin": l(),
                                    Authorization: "Bearer ".concat(e),
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify(s)
                            });
                        case 4:
                            return c = (c = t.sent).json(), t.abrupt("return", c);
                        case 7:
                        case "end":
                            return t.stop()
                    }
                }), t)
            })));
            return function(e, r, n, a) {
                return t.apply(this, arguments)
            }
        }(), window.tdlSsoAuth = {};
        var v = {
                bufferArrayLength: 0,
                bufferIntervalInSeconds: 5,
                bufferSizeInKb: 0,
                sessionIdExpiresInS: 86400,
                redirectedFromTCPFlagExpiresInS: 86400,
                urls: [],
                customerHashValidityInS: 86400,
                defaultDlArgsEventsToRecord: [],
                defaultDlObjectEventsToRecord: [],
                dataLayerCheckRetryCount: 10
            },
            h = {
                "AIRASIA-WEB-APP": {
                    recordAnalytics: !0,
                    syncTrackingUrls: ["/rateus/api/feedbackrequests/generate_customer_feedback_url", "/b2c-booking/v1/breakup/state", "/b2c-flightsearch/v1/search-availability"],
                    recordGtmEvents: !0,
                    dataLayerArgumentEventsToRecord: [],
                    dataLayerObjectEventsToRecord: ["fb_proceed-to-guestDetail", "gtm.load"],
                    modifyHistoryOwnMethods: !0,
                    recordWebVitals: !0,
                    brand: "AIRASIA",
                    clientId: "AIRASIA-WEB-APP",
                    browserEventsToRecord: ["click"],
                    listenToPastDataLayerEvents: !0,
                    recordJsDispatchedClicks: !1
                },
                "AXIO-CAPITALFLOAT-WEB-APP": {
                    recordAnalytics: !0,
                    syncTrackingUrls: [],
                    recordGtmEvents: !1,
                    dataLayerArgumentEventsToRecord: [],
                    dataLayerObjectEventsToRecord: [],
                    modifyHistoryOwnMethods: !1,
                    recordWebVitals: !0,
                    brand: "FS",
                    clientId: "AXIO-CAPITALFLOAT-WEB-APP",
                    browserEventsToRecord: ["click"],
                    listenToPastDataLayerEvents: !1,
                    recordJsDispatchedClicks: !1
                },
                "BIGBASKET-WEB-DESKTOP-APP": {
                    recordAnalytics: !0,
                    syncTrackingUrls: ["/complete/orderv3/", "/order/place_web_order/", "/order/v1/order", "/mapi/v3.5.2/order/list-new/", "/api/v1/order/orders", "/mapi/v3.5.0/order/order-assistant/", "/co/delivery-preferences-new/", "/order/v1/potentialorder/", "/mapi/v3.5.2/order/delivery-preferences", "/basketService/update-qty/", "/mapi/v3.5.2/c-incr-i/", "/mapi/v3.5.2/c-set-i/", "/basketService/del-item/", "/mapi/v3.5.2/c-decr-i/", "/msl/add-item/", "/mapi/v3.5.2/member/add-to-sfl/", "/mapi/v4.2.0/member/remove-from-sfl/", "/msl/remove-item/", "/msl/delete-shoppinglist-items/", "/_next/data/"],
                    recordGtmEvents: !1,
                    dataLayerArgumentEventsToRecord: [],
                    dataLayerObjectEventsToRecord: [],
                    modifyHistoryOwnMethods: !0,
                    recordWebVitals: !0,
                    brand: "BIGBASKET",
                    clientId: "BIGBASKET-WEB-DESKTOP-APP",
                    browserEventsToRecord: ["click"],
                    htmlPageScriptTagKeywords: {
                        "/pd/": "window.__PRELOADED_STATE__"
                    },
                    listenToPastDataLayerEvents: !1,
                    recordJsDispatchedClicks: !1
                },
                "BIGBASKET-WEB-MOBILE-APP": {
                    recordAnalytics: !0,
                    syncTrackingUrls: ["/complete/orderv3/", "/order/place_web_order/", "/order/v1/order", "/mapi/v3.5.2/order/list-new/", "/api/v1/order/orders", "/mapi/v3.5.0/order/order-assistant/", "/co/delivery-preferences-new/", "/order/v1/potentialorder/", "/mapi/v3.5.2/order/delivery-preferences", "/basketService/update-qty/", "/mapi/v3.5.2/c-incr-i/", "/mapi/v3.5.2/c-set-i/", "/basketService/del-item/", "/mapi/v3.5.2/c-decr-i/", "/msl/add-item/", "/mapi/v3.5.2/member/add-to-sfl/", "/mapi/v4.2.0/member/remove-from-sfl/", "/msl/remove-item/", "/msl/delete-shoppinglist-items/", "/_next/data/"],
                    recordGtmEvents: !1,
                    dataLayerArgumentEventsToRecord: [],
                    dataLayerObjectEventsToRecord: [],
                    modifyHistoryOwnMethods: !0,
                    recordWebVitals: !0,
                    brand: "BIGBASKET",
                    clientId: "BIGBASKET-WEB-MOBILE-APP",
                    browserEventsToRecord: ["click"],
                    htmlPageScriptTagKeywords: {
                        "/pd/": "window.__PRELOADED_STATE__"
                    },
                    listenToPastDataLayerEvents: !1,
                    recordJsDispatchedClicks: !1
                },
                "CROMA-WEB-APP": {
                    recordAnalytics: !0,
                    syncTrackingUrls: ["/paymentconfirmation", "/ocs/v1/order-confirmation", "/order/oms/v2/list/details-pwa", "/useraccount/allchannels/v1", "/floatingcart", "/attachProduct", "/detail", "/addition", "/deletion", "/inventory/oms/v2/tms/details-pwa/", "/inventory/oms/v2/details-pwa/", "/price"],
                    cartAndWishListConfig: {
                        "detail?isGetCart": {
                            products: ["entries"],
                            type: "cart",
                            keysToCapture: {
                                price: ["product", "price", "value"],
                                productId: ["product", "code"],
                                productName: ["product", "name"],
                                quantity: ["quantity"]
                            }
                        }
                    },
                    recordGtmEvents: !0,
                    dataLayerArgumentEventsToRecord: [],
                    dataLayerObjectEventsToRecord: ["add_to_wishlist", "add_to_cart", "remove_from_cart"],
                    modifyHistoryOwnMethods: !0,
                    recordWebVitals: !0,
                    brand: "CROMA",
                    clientId: "CROMA-WEB-APP",
                    keyToCheckLoginState: ["ls", "customer_hash"],
                    browserEventsToRecord: ["click"],
                    listenToPastDataLayerEvents: !0,
                    recordJsDispatchedClicks: !1
                },
                "CULTFIT-WEB-APP": {
                    recordAnalytics: !0,
                    syncTrackingUrls: ["/paymentSuccess", "/api/order/checkout"],
                    recordGtmEvents: !1,
                    dataLayerArgumentEventsToRecord: [],
                    dataLayerObjectEventsToRecord: [],
                    modifyHistoryOwnMethods: !1,
                    recordWebVitals: !0,
                    brand: "CULTFIT",
                    clientId: "CULTFIT-WEB-APP",
                    browserEventsToRecord: ["click"],
                    listenToPastDataLayerEvents: !1,
                    recordJsDispatchedClicks: !1
                },
                "FS-BNPL-FINBOX-WEB-APP": {
                    recordAnalytics: !0,
                    syncTrackingUrls: [],
                    recordGtmEvents: !1,
                    dataLayerArgumentEventsToRecord: [],
                    dataLayerObjectEventsToRecord: [],
                    modifyHistoryOwnMethods: !1,
                    recordWebVitals: !0,
                    brand: "FS",
                    clientId: "FS-BNPL-FINBOX-WEB-APP",
                    browserEventsToRecord: ["click"],
                    listenToPastDataLayerEvents: !1,
                    recordJsDispatchedClicks: !1
                },
                "FS-PL-FINBOX-WEB-APP": {
                    recordAnalytics: !0,
                    syncTrackingUrls: [],
                    recordGtmEvents: !1,
                    modifyHistoryOwnMethods: !1,
                    recordWebVitals: !0,
                    brand: "FS",
                    clientId: "FS-PL-FINBOX-WEB-APP",
                    browserEventsToRecord: ["click"],
                    listenToPastDataLayerEvents: !1,
                    recordJsDispatchedClicks: !1
                },
                "IHCL-AMA-WEB-APP": {},
                "IHCL-GINGER-WEB-APP": {
                    recordAnalytics: !0,
                    syncTrackingUrls: ["/bin/bookHotelInitiateServlet", "postPaymentServlet", "/bin/bookCartAvailabilityServlet", "/ratesCache.json", "/destinationRatesCache.json"],
                    recordGtmEvents: !0,
                    dataLayerArgumentEventsToRecord: [],
                    dataLayerObjectEventsToRecord: ["rooms.add", "removeFromCart"],
                    modifyHistoryOwnMethods: !1,
                    recordWebVitals: !0,
                    brand: "IHCL",
                    clientId: "IHCL-GINGER-WEB-APP",
                    browserEventsToRecord: ["click"],
                    listenToPastDataLayerEvents: !0,
                    recordJsDispatchedClicks: !1
                },
                "IHCL-SELEQTIONS-WEB-APP": {},
                "IHCL-VIVANTA-WEB-APP": {},
                "IHCL-WEB-APP": {
                    recordAnalytics: !0,
                    syncTrackingUrls: ["/bin/bookHotelInitiateServlet", "postPaymentServlet", "/bin/bookCartAvailabilityServlet", "/ratesCache.json", "/destinationRatesCache.json"],
                    recordGtmEvents: !0,
                    addAnalyticsParamsToHref: !0,
                    dataLayerArgumentEventsToRecord: [],
                    dataLayerObjectEventsToRecord: ["rooms.add", "removeFromCart"],
                    modifyHistoryOwnMethods: !1,
                    recordWebVitals: !0,
                    brand: "IHCL",
                    clientId: "IHCL-WEB-APP",
                    browserEventsToRecord: ["click"],
                    listenToPastDataLayerEvents: !0,
                    recordJsDispatchedClicks: !1
                },
                "ONEMG-WEB-APP": {
                    recordAnalytics: !0,
                    syncTrackingUrls: ["/v1/track", "/pharmacy_api/prescription-order", "/tracking_details?city", "/pharmacy_api/cart/summary", "/doctor_api/v5/conversations/", "/pharmacy_api/cart", "/pwa-api/cart/add", "/pwa-api/api/v4/carts/skus", "/pharmacy_api/v2/cart", "/labs_api/cart/replace", "/labs_api/cart/item", "/pwa-api/labs/cart/replace", "/v1/page", "1mg.com/pwa-api/api/v5/carts/skus"],
                    cartAndWishListConfig: {
                        "pwa-api/api/v4/carts/skus": {
                            type: "cart",
                            products: ["data", "brief", "items"],
                            keysToCapture: {
                                productId: ["sku_id"],
                                quantity: ["quantity"],
                                productName: ["sku_name"],
                                price: []
                            }
                        },
                        "1mg.com/pwa-api/api/v5/carts/skus": {
                            type: "cart",
                            products: ["data", "widgets", "1", "data", "grouped_items", "_processArray_", "items", "_flattenArray_"],
                            keysToCapture: {
                                productId: ["sku_id"],
                                quantity: ["cta", "details", "quantity"],
                                productName: ["header"],
                                price: ["prices", "discounted_price"]
                            }
                        }
                    },
                    recordGtmEvents: !0,
                    dataLayerArgumentEventsToRecord: [],
                    dataLayerObjectEventsToRecord: ["Add To Cart", "Add To Cart ", "Otc_upsell_widget_add", "Add To Cart Spotlight Products", "Add to cart widget", "Add to cart", "Remove SKU"],
                    modifyHistoryOwnMethods: !1,
                    recordWebVitals: !0,
                    brand: "ONEMG",
                    clientId: "ONEMG-WEB-APP",
                    browserEventsToRecord: ["click"],
                    listenToPastDataLayerEvents: !0,
                    recordJsDispatchedClicks: !1
                },
                "QMIN-WEB-APP": {
                    recordAnalytics: !0,
                    syncTrackingUrls: ["/order-status/", "/v12/orders", "/api/v12/cart/v2", "/v12/restaurants/"],
                    recordGtmEvents: !0,
                    dataLayerArgumentEventsToRecord: [],
                    dataLayerObjectEventsToRecord: [],
                    modifyHistoryOwnMethods: !1,
                    recordWebVitals: !0,
                    brand: "QMIN",
                    clientId: "QMIN-WEB-APP",
                    browserEventsToRecord: ["click"],
                    listenToPastDataLayerEvents: !0,
                    recordJsDispatchedClicks: !1
                },
                "TATACLIQ-LUXURY-WEB-APP": {
                    recordAnalytics: !0,
                    syncTrackingUrls: ["/payments/getPrepaidOrderPaymentConfirmation", "/payments/updateTransactionDetailsforCOD", "/orderConfirmation/", "/getSelectedOrder_V1/", "/orderhistorylist_V1", "/displayOrderSummary_V2", "/productAdditionToCart_V1", "/productAdditionToCart?addedToCartWl", "/cartDetails?access_token", "/cartDetails_V2?access_token", "/getAllWishlist?access_token", "/addProductInWishlist", "/checkPincode", "/marketplacewebservices/v2/lux/products/productDetails/", "/buyNow/expressBuy"],
                    cartAndWishListConfig: {
                        "cartDetails?access_token": {
                            type: "cart",
                            products: ["products"],
                            keysToCapture: {
                                productId: ["productcode"],
                                quantity: ["quantity"],
                                productName: ["productName"],
                                price: ["price"]
                            }
                        },
                        getAllWishlist: {
                            type: "wishlist",
                            products: ["wishList", 0, "products"],
                            keysToCapture: {
                                productId: ["productcode"],
                                quantity: ["quantity"],
                                productName: ["productName"],
                                price: ["mrp", "value"]
                            }
                        }
                    },
                    recordGtmEvents: !0,
                    dataLayerArgumentEventsToRecord: ["add_to_cart", "add_to_wishlist", "remove_from_cart", "Buy now"],
                    dataLayerObjectEventsToRecord: [],
                    modifyHistoryOwnMethods: !1,
                    recordWebVitals: !0,
                    brand: "TATACLIQ-LUXURY",
                    clientId: "TATACLIQ-LUXURY-WEB-APP",
                    browserEventsToRecord: ["click"],
                    listenToPastDataLayerEvents: !0,
                    recordJsDispatchedClicks: !1
                },
                "TATACLIQ-WEB-APP": {
                    recordAnalytics: !0,
                    syncTrackingUrls: ["/payments/getPrepaidOrderPaymentConfirmation", "/getSelectedOrder_V2/", "/orderConfirmation/", "getSelectedOrder", "/displayOrderSummary_V2", "/productAdditionToCart_V1", "/cartDetails_V2?access_token", "/addProductInWishlist", "/getAllWishlist", "/checkPincode", "/marketplacewebservices/v2/mpl/products/productDetails/", "/buyNow/expressBuy"],
                    cartAndWishListConfig: {
                        getAllWishlist: {
                            products: ["wishList", ["0"], "products"],
                            type: "wishlist",
                            keysToCapture: {
                                productId: ["productcode"],
                                quantity: ["quantity"],
                                productName: ["productName"],
                                price: ["mrp", "value"]
                            }
                        },
                        cartDetails_V2: {
                            products: ["products"],
                            type: "cart",
                            keysToCapture: {
                                productId: ["productcode"],
                                quantity: ["qtySelectedByUser"],
                                productName: ["productName"],
                                price: ["price"]
                            }
                        }
                    },
                    modifyHistoryOwnMethods: !0,
                    recordWebVitals: !0,
                    brand: "TATACLIQ",
                    clientId: "TATACLIQ-WEB-APP",
                    browserEventsToRecord: ["click"],
                    listenToPastDataLayerEvents: !0,
                    recordJsDispatchedClicks: !1
                },
                "TATAMOTORS-WEB-APP": {},
                "TCP-WEB-APP": {
                    recordAnalytics: !0,
                    syncTrackingUrls: ["/api/orch/v2/payment/status/ui", "api/orderdetails?brand", "fetch-referral-bulk", "kymacart/updatebundle", "/api/v1/search/click", "/api/v1/search/auto-complete", "/api/v1/search/composite/click", "/api/v1/search/composite", "/api/v1/billpay/cart/viewsummary", "/api/v2/digitalgold/buygold/BuyInputSubmit"],
                    recordGtmEvents: !1,
                    dataLayerArgumentEventsToRecord: [],
                    dataLayerObjectEventsToRecord: [],
                    recordAdobeEvents: !0,
                    adobeEventsToRecord: ["tap", "SLP : Launcher", "SLP : Click", "SLP : Banner", "SLP : Brands", "OfferZone : Banner", "OfferZone : FilterByCategory", "OfferZone : CTAClick", "OfferZone : Brands", "OfferZone : FilterByCategory", "Error Event", "view"],
                    modifyHistoryOwnMethods: !0,
                    recordWebVitals: !0,
                    brand: "TATADIGITAL",
                    clientId: "TCP-WEB-APP",
                    browserEventsToRecord: ["click"],
                    listenToPastDataLayerEvents: !1,
                    recordJsDispatchedClicks: !1
                },
                "TITAN-EYEPLUS-WEB-APP": {
                    recordAnalytics: !0,
                    syncTrackingUrls: ["/googletagmanager/index/orderdetails/", "/payment.json", "/googletagmanager/index/cartdetails/", "/customer/section/load/?sections=cart", "/customer/section/load/?sections=cart,wishlist", "/customer/section/load/?sections=cart%2Cwishlist", "/customer/section/load/?sections=wishlist", "/googletagmanager/index/productdetails/", "/delivery/delivery/checkdelivery/"],
                    cartAndWishListConfig: {
                        "/section/load/?sections=cart%2Cwishlist": {
                            type: "wishlist",
                            products: ["wishlist", "items"],
                            keysToCapture: {
                                productName: ["product_name"],
                                price: ["product_price"],
                                productId: ["product_sku"],
                                quantity: [""]
                            }
                        },
                        "/section/load/?sections=cart%2Cmessages": {
                            type: "cart",
                            products: ["cart", "items"],
                            keysToCapture: {
                                price: ["product_price_value"],
                                productId: ["product_sku"],
                                productName: ["product_name"],
                                quantity: ["qty"]
                            }
                        },
                        "/section/load/?sections=wishlist%2Cmessages": {
                            type: "wishlist",
                            products: ["wishlist", "items"],
                            keysToCapture: {
                                productName: ["product_name"],
                                price: ["product_price"],
                                productId: ["product_sku"],
                                quantity: [""]
                            }
                        },
                        cartdetails: {
                            type: "cart",
                            products: ["items", 0],
                            keysToCapture: {
                                productId: ["item_id"],
                                quantity: ["quantity"],
                                productName: ["item_name"],
                                price: ["price"]
                            }
                        }
                    },
                    cartOrWishListStateGtmEvents: {
                        view_cart: {
                            type: "cart",
                            products: ["ecommerce", "items"],
                            keysToCapture: {
                                productId: ["item_id"],
                                quantity: ["quantity"],
                                productName: ["item_name"],
                                price: ["price"]
                            }
                        }
                    },
                    recordGtmEvents: !0,
                    dataLayerArgumentEventsToRecord: [],
                    dataLayerObjectEventsToRecord: ["add_to_cart", "buy_confirmation_click", "remove_from_cart", "add_to_wishlist", "purchase"],
                    modifyHistoryOwnMethods: !1,
                    recordWebVitals: !0,
                    brand: "EYEPLUS",
                    clientId: "TITAN-EYEPLUS-WEB-APP",
                    browserEventsToRecord: ["click"],
                    htmlPageScriptTagKeywords: {
                        "/app/shopping-cart": "cartItems"
                    },
                    listenToPastDataLayerEvents: !0,
                    recordJsDispatchedClicks: !1
                },
                "TITAN-FASTRACK-WATCH-WEB-APP": {
                    recordAnalytics: !0,
                    syncTrackingUrls: ["/productview/productDetailsbyId", "/cart/review", "/serviceabilityComponent"],
                    recordGtmEvents: !1,
                    dataLayerArgumentEventsToRecord: [],
                    dataLayerObjectEventsToRecord: [],
                    modifyHistoryOwnMethods: !1,
                    recordWebVitals: !0,
                    brand: "FASTRACK-WATCH",
                    clientId: "TITAN-FASTRACK-WATCH-WEB-APP",
                    browserEventsToRecord: ["click"],
                    listenToPastDataLayerEvents: !1,
                    recordJsDispatchedClicks: !1
                },
                "TITAN-FASTRACK-WEB-APP": {},
                "TITAN-IRTH-WEB-APP": {
                    recordAnalytics: !0,
                    syncTrackingUrls: ["/productview/productDetailsbyId", "/cart/review", "/serviceabilityComponent"],
                    recordGtmEvents: !1,
                    dataLayerArgumentEventsToRecord: [],
                    dataLayerObjectEventsToRecord: [],
                    modifyHistoryOwnMethods: !1,
                    recordWebVitals: !0,
                    brand: "IRTH",
                    clientId: "TITAN-IRTH-WEB-APP",
                    browserEventsToRecord: ["click"],
                    listenToPastDataLayerEvents: !1,
                    recordJsDispatchedClicks: !1
                },
                "TITAN-MIA-WEB-APP": {
                    recordAnalytics: !0,
                    syncTrackingUrls: ["/payment/@self/order_summary/", "/cart/addtocart", "/cart/review", "/cart/@self_cart", "/wishlist/checkItemPresentInWishlist", "/productview/productDetailsbyId", "/serviceabilityComponent"],
                    cartAndWishListConfig: {
                        "/cart/@self_cart": {
                            type: "cart",
                            products: ["orderItem"],
                            keysToCapture: {
                                productId: ["partNumber"],
                                quantity: ["quantity"],
                                productName: ["productDetail", "itemName"],
                                price: ["orderItemPrice"]
                            }
                        },
                        "/wishlist/@self": {
                            type: "wishlist",
                            products: ["GiftList", 0, "item"],
                            keysToCapture: {
                                price: ["itemListPrice"],
                                productId: ["partNumber"],
                                productName: ["productName"],
                                quantity: ["quantityRequested"]
                            }
                        }
                    },
                    recordGtmEvents: !0,
                    dataLayerArgumentEventsToRecord: [],
                    dataLayerObjectEventsToRecord: ["cart_add"],
                    modifyHistoryOwnMethods: !1,
                    recordWebVitals: !0,
                    brand: "MIA",
                    clientId: "TITAN-MIA-WEB-APP",
                    browserEventsToRecord: ["click"],
                    listenToPastDataLayerEvents: !0,
                    recordJsDispatchedClicks: !1
                },
                "TITAN-SKINN-WEB-APP": {
                    recordAnalytics: !0,
                    syncTrackingUrls: ["/payment/@self/order_summary/", "/cart/addtocart", "/cart/review", "/cart/@self_cart", "/wishlist/checkItemPresentInWishlist", "/wishlist/custom", "/productview/productDetailsbyId", "/serviceabilityComponent"],
                    cartAndWishListConfig: {
                        "/cart/@self_cart": {
                            type: "cart",
                            products: ["orderItem"],
                            keysToCapture: {
                                productId: ["partNumber"],
                                quantity: ["quantity"],
                                productName: ["productDetail", "itemName"],
                                price: ["orderItemPrice"]
                            }
                        },
                        "/wishlist/custom": {
                            type: "wishlist",
                            products: ["GiftList", 0, "item"],
                            keysToCapture: {
                                productId: ["partNumber"],
                                quantity: ["quantityRequested"],
                                price: ["itemListPrice"],
                                productName: ["productName"]
                            }
                        }
                    },
                    recordGtmEvents: !1,
                    dataLayerArgumentEventsToRecord: [],
                    dataLayerObjectEventsToRecord: [],
                    modifyHistoryOwnMethods: !1,
                    recordWebVitals: !0,
                    brand: "SKINN",
                    clientId: "TITAN-SKINN-WEB-APP",
                    browserEventsToRecord: ["click"],
                    listenToPastDataLayerEvents: !1,
                    recordJsDispatchedClicks: !1
                },
                "TITAN-SONATA-WEB-APP": {},
                "TITAN-TANEIRA-WEB-APP": {
                    recordAnalytics: !0,
                    syncTrackingUrls: ["/payment/@self/order_summary/", "/cart/addtocart", "/cart/review", "/cart/@self_cart", "/wishlist/checkItemPresentInWishlist", "/wishlist/custom", "/productview/productDetailsbyId", "/serviceabilityComponent"],
                    cartAndWishListConfig: {
                        "/cart/@self_cart": {
                            type: "cart",
                            products: ["orderItem"],
                            keysToCapture: {
                                productId: ["partNumber"],
                                quantity: ["quantity"],
                                productName: ["productDetail", "itemName"],
                                price: ["orderItemPrice"]
                            }
                        },
                        "/wishlist/custom": {
                            type: "wishlist",
                            products: ["Giftlist", 0, "item"],
                            keystoCapture: {
                                price: ["itemListPrice"],
                                productId: ["partNumber"],
                                productName: ["productName"],
                                quantity: ["quantityRequested"]
                            }
                        }
                    },
                    recordGtmEvents: !1,
                    dataLayerArgumentEventsToRecord: [],
                    dataLayerObjectEventsToRecord: [],
                    modifyHistoryOwnMethods: !1,
                    recordWebVitals: !0,
                    brand: "TANEIRA",
                    clientId: "TITAN-TANEIRA-WEB-APP",
                    browserEventsToRecord: ["click"],
                    listenToPastDataLayerEvents: !1,
                    recordJsDispatchedClicks: !1
                },
                "TITAN-TANISHQ-WEB-APP": {
                    recordAnalytics: !0,
                    syncTrackingUrls: ["/payment/@self/order_summary/", "/cart/addtocart", "/cart/review", "/cart/@self_cart", "/wishlist/checkItemPresentInWishlist", "/productview/productDetailsbyId", "/serviceabilityComponent"],
                    cartAndWishListConfig: {
                        "/cart/@self_cart": {
                            type: "cart",
                            products: ["orderItem"],
                            keysToCapture: {
                                productId: ["partNumber"],
                                quantity: ["quantity"],
                                productName: ["productDetail", "itemName"],
                                price: ["orderItemPrice"]
                            }
                        },
                        "/wishlist/@self": {
                            type: "wishlist",
                            products: ["GiftList", 0, "item"],
                            keysToCapture: {
                                price: ["itemListPrice"],
                                productId: ["partNumber"],
                                productName: ["productName"],
                                quantity: ["quantityRequested"]
                            }
                        }
                    },
                    recordGtmEvents: !0,
                    dataLayerArgumentEventsToRecord: [],
                    dataLayerObjectEventsToRecord: ["cart_add"],
                    modifyHistoryOwnMethods: !1,
                    recordWebVitals: !0,
                    brand: "TANISHQ",
                    clientId: "TITAN-TANISHQ-WEB-APP",
                    browserEventsToRecord: ["click"],
                    listenToPastDataLayerEvents: !0,
                    recordJsDispatchedClicks: !1
                },
                "TITAN-TRAQ-WEB-APP": {},
                "TITAN-WATCH-WEB-APP": {
                    recordAnalytics: !0,
                    syncTrackingUrls: ["/payment/@self/order_summary/", "/cart/review", "/cart/@self_cart", "/wishlist/checkItemPresentInWishlist", "/wishlist/custom/", "/productview/productDetailsbyId", "/serviceabilityComponent"],
                    cartAndWishListConfig: {
                        "/cart/@self_cart": {
                            type: "cart",
                            products: ["orderItem"],
                            keysToCapture: {
                                productId: ["partNumber"],
                                quantity: ["quantity"],
                                productName: ["productDetail", "itemName"],
                                price: ["orderItemPrice"]
                            }
                        },
                        "/wishlist/custom": {
                            type: "wishlist",
                            products: ["GiftList", 0, "item"],
                            keysToCapture: {
                                productId: ["partNumber"],
                                quantity: ["quantityRequested"],
                                price: ["itemListPrice"],
                                productName: ["productName"]
                            }
                        }
                    },
                    recordGtmEvents: !0,
                    dataLayerArgumentEventsToRecord: [],
                    dataLayerObjectEventsToRecord: ["cart_add"],
                    modifyHistoryOwnMethods: !1,
                    recordWebVitals: !0,
                    brand: "TITAN",
                    clientId: "TITAN-WATCH-WEB-APP",
                    browserEventsToRecord: ["click"],
                    listenToPastDataLayerEvents: !0,
                    recordJsDispatchedClicks: !1
                },
                "TITAN-ZOYA-WEB-APP": {},
                "WESTSIDE-WEB-APP": {
                    recordAnalytics: !0,
                    syncTrackingUrls: ["thank_you", "/cart.json", "/cart.js", "/cart/update.js", "storecart"],
                    cartAndWishListConfig: {
                        "update.js": {
                            type: "cart",
                            products: ["items"],
                            keysToCapture: {
                                productId: ["variant_id"],
                                quantity: ["quantity"],
                                productName: ["title"],
                                price: ["price"]
                            }
                        }
                    },
                    recordGtmEvents: !1,
                    dataLayerArgumentEventsToRecord: [],
                    dataLayerObjectEventsToRecord: [],
                    modifyHistoryOwnMethods: !1,
                    recordWebVitals: !0,
                    brand: "WESTSIDE",
                    clientId: "WESTSIDE-WEB-APP",
                    browserEventsToRecord: ["click"],
                    htmlPageScriptTagKeywords: {
                        "/thank_you": "Shopify.checkout",
                        "/products/": "Shopify.OptionSelectors('product-selectors"
                    },
                    listenToPastDataLayerEvents: !1,
                    recordJsDispatchedClicks: !1
                }
            },
            y = function() {
                return {
                    "TCP-WEB-APP": "TATADIGITAL",
                    "BIGBASKET-WEB-DESKTOP-APP": "BIGBASKET",
                    "BIGBASKET-WEB-MOBILE-APP": "BIGBASKET",
                    "ONEMG-WEB-APP": "ONEMG",
                    "TATACLIQ-WEB-APP": "TATACLIQ",
                    "TATACLIQ-LUXURY-WEB-APP": "TATACLIQ-LUXURY",
                    "CULTFIT-WEB-APP": "CULTFIT",
                    "CROMA-WEB-APP": "CROMA",
                    "AIRASIA-WEB-APP": "AIRASIA",
                    "IHCL-AMA-WEB-APP": "IHCL",
                    "IHCL-SELEQTIONS-WEB-APP": "IHCL",
                    "IHCL-VIVANTA-WEB-APP": "IHCL",
                    "IHCL-WEB-APP": "IHCL",
                    "IHCL-GINGER-WEB-APP": "IHCL",
                    "QMIN-WEB-APP": "QMIN",
                    "WESTSIDE-WEB-APP": "WESTSIDE",
                    "TATAMOTORS-WEB-APP": "TATAMOTORS",
                    "TITAN-FASTRACK-WEB-APP": "FASTRACK-EYEWEAR",
                    "TITAN-EYEPLUS-WEB-APP": "EYEPLUS",
                    "TITAN-TANEIRA-WEB-APP": "TANEIRA",
                    "TITAN-TRAQ-WEB-APP": "TRAQ",
                    "TITAN-ZOYA-WEB-APP": "ZOYA",
                    "TITAN-SONATA-WEB-APP": "SONATA",
                    "TITAN-FASTRACK-WATCH-WEB-APP": "FASTRACK-WATCH",
                    "TITAN-SKINN-WEB-APP": "SKINN",
                    "TITAN-MIA-WEB-APP": "MIA",
                    "TITAN-TANISHQ-WEB-APP": "TANISHQ",
                    "TITAN-IRTH-WEB-APP": "IRTH",
                    "TITAN-WATCH-WEB-APP": "TITAN",
                    "AXIO-CAPITALFLOAT-WEB-APP": "CAPITALFLOAT",
                    "FS-BNPL-FINBOX-WEB-APP": "FS"
                }
            };

        function m(t) {
            return m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, m(t)
        }

        function g(t, e, r) {
            return (e = function(t) {
                var e = function(t, e) {
                    if ("object" !== m(t) || null === t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(t, "string");
                        if ("object" !== m(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(t)
                }(t);
                return "symbol" === m(e) ? e : String(e)
            }(e)) in t ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = r, t
        }
        var T = function() {
            return "".concat(function() {
                var t = window.tdlSsoAuthScriptSrc,
                    e = "d";
                return t.includes("sit-account") ? e = "s" : t.includes("pt") || t.includes("sit-r2-account") ? e = "pp" : t.includes("accounts") || t.includes("members") ? e = "" : t.includes("bf") && (e = "bf"), "https://".concat(e, "api.tatadigital.com")
            }(), "/analytics-engine")
        };

        function w(t, e) {
            var r = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), r.push.apply(r, n)
            }
            return r
        }

        function A(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {};
                e % 2 ? w(Object(r), !0).forEach((function(e) {
                    g(t, e, r[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : w(Object(r)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                }))
            }
            return t
        }
        var S = function() {
                var t;
                return null !== (t = window.tdplAnalyticsEndpoint) && void 0 !== t ? t : "".concat(T(), "/events/v1")
            },
            P = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "TCP-WEB-APP",
                    e = localStorage.getItem("tdl-sso-analytics-v2");
                if (!e) {
                    var r = S();
                    return e = A(A(A({}, v), h[t]), {}, {
                        dataPublishEndpoint: r
                    }), localStorage.setItem("tdl-sso-analytics-v2", JSON.stringify(e)), void(window.tdplConfig = e)
                }
                window.tdplConfig = JSON.parse(e)
            };

        function E() {
            var t;
            return window.tdplConfig || P(), null !== (t = window.tdplConfig) && void 0 !== t ? t : {}
        }
        var I, b = function() {
                window.tdplAnalyticsEndpoint = S()
            },
            L = ["TATADIGITAL", "FS"],
            O = function() {
                var t, e, r, n, a = {
                        "finbox.in": "FS-BNPL-FINBOX-WEB-APP",
                        "bigbasket.com": "BIGBASKET-WEB-MOBILE-APP",
                        "tatadigital.com": "TCP-WEB-APP",
                        "aem-sit-r2.tatadigital.com": "TCP-WEB-APP",
                        "tatadigital-dev.adobecqms.net": "TCP-WEB-APP",
                        "cult.fit": "CULTFIT-WEB-APP",
                        "cultsport.com": "CULTFIT-WEB-APP",
                        "tatacliq.com": "TATACLIQ-WEB-APP",
                        "tataunistore.com": "TATACLIQ-WEB-APP",
                        qmin: "QMIN-WEB-APP",
                        "luxury.tatacliq": "TATACLIQ-LUXURY-WEB-APP",
                        "luxpreprod1.tataunistore": "TATACLIQ-LUXURY-WEB-APP",
                        "1mg.com": "ONEMG-WEB-APP",
                        "croma.com": "CROMA-WEB-APP",
                        "tajhotels.com": "IHCL-WEB-APP",
                        "amastaysandtrails.com": "IHCL-AMA-WEB-APP",
                        "vivantahotels.com": "IHCL-VIVANTA-WEB-APP",
                        "seleqtionshotels.com": "IHCL-SELEQTIONS-WEB-APP",
                        "taj-dev65-02.adobecqms.net": "IHCL-WEB-APP",
                        "taj-stage65-1.adobecqms.net": "IHCL-WEB-APP",
                        airindiaexpress: "AIRASIA-WEB-APP",
                        westside: "WESTSIDE-WEB-APP",
                        tatamotor: "TATAMOTORS-WEB-APP",
                        "qe-fastrack": "TITAN-FASTRACK-WEB-APP",
                        titaneyeplus: "TITAN-EYEPLUS-WEB-APP",
                        taneira: "TITAN-TANEIRA-WEB-APP",
                        traqgear: "TITAN-TRAQ-WEB-APP",
                        zoya: "TITAN-ZOYA-WEB-APP",
                        sonatawatches: "TITAN-SONATA-WEB-APP",
                        fastrack: "TITAN-FASTRACK-WATCH-WEB-APP",
                        skinn: "TITAN-SKINN-WEB-APP",
                        miabytanishq: "TITAN-MIA-WEB-APP",
                        "tanishq.co.in": "TITAN-TANISHQ-WEB-APP",
                        capitalfloat: "AXIO-CAPITALFLOAT-WEB-APP",
                        titan: "TITAN-WATCH-WEB-APP",
                        gingerhotels: "IHCL-GINGER-WEB-APP",
                        simplotel: "IHCL-GINGER-WEB-APP"
                    },
                    o = y(),
                    i = {
                        "clientId=IHCL-WEB-APP": "IHCL-WEB-APP",
                        "clientId=GINGER-WEB-APP": "IHCL-GINGER-WEB-APP"
                    },
                    s = window.location,
                    c = s.origin,
                    d = s.href,
                    u = Object.keys(a).find((function(t) {
                        return c.includes(t)
                    }));
                return u || (n = Object.keys(i).find((function(t) {
                    return d.includes(t)
                }))), u ? r = a[u] : n && (r = i[n]), r = null !== (t = r) && void 0 !== t ? t : "DEFAULT", {
                    brand: I = null !== (e = o[r]) && void 0 !== e ? e : "DEFAULT",
                    clientId: r
                }
            },
            C = function() {
                var t;
                return null === (t = document.head.querySelector("meta[name=tdl-sso-client_id]")) || void 0 === t ? void 0 : t.content
            },
            k = function() {
                var t, e, r = null !== (t = C()) && void 0 !== t ? t : null === (e = window.tdplConfig) || void 0 === e ? void 0 : e.clientId;
                return r && "CLIENT-ID" !== r || (r = O().clientId), r
            };

        function N() {
            var t, e, r;
            return null !== (t = null !== (e = y()[C()]) && void 0 !== e ? e : null === (r = window.tdplConfig) || void 0 === r ? void 0 : r.brand) && void 0 !== t ? t : O().brand
        }
        var R = function(t) {
                if (!t) return null;
                for (var e = [], r = 0; r < t.length && "body" !== t[r].localName; r += 1) e.push({
                    elementType: t[r].localName,
                    id: t[r].id,
                    class: t[r].className
                });
                return e
            },
            W = function() {
                var t = E().htmlPageScriptTagKeywords;
                if (!t) return [];
                var e = [];
                try {
                    var r = Object.keys(t).find((function(t) {
                        return window.location.href.includes(t)
                    }));
                    if (!r) return [];
                    var n = t[r];
                    e = Array.from(document.scripts).filter((function(t) {
                        return t.innerHTML.includes(n)
                    })).map((function(t) {
                        return null == t ? void 0 : t.innerHTML
                    }))
                } catch (t) {
                    return e
                }
                return e
            };

        function D() {
            I || (I = N());
            var t = JSON.parse(localStorage.getItem("tdl-sso-redirect-tcp-flag"));
            return null != t && t.isRedirectedFromTCP && null != t && t.setAt ? (Date.now() - t.setAt < 1e3 * E().redirectedFromTCPFlagExpiresInS || (t.isRedirectedFromTCP = !1, sessionStorage.setItem("isRedirectedFromTCP", "false"), localStorage.setItem("tdl-sso-redirect-tcp-flag", JSON.stringify(t))), t.isRedirectedFromTCP) : !(null == t || !t.isRedirectedFromTCP || !L.includes(I))
        }

        function B(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
            return n
        }

        function _(t, e) {
            if (t) {
                if ("string" == typeof t) return B(t, e);
                var r = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? B(t, e) : void 0
            }
        }

        function x(t, e) {
            return function(t) {
                if (Array.isArray(t)) return t
            }(t) || function(t, e) {
                var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (null != r) {
                    var n, a, o, i, s = [],
                        c = !0,
                        d = !1;
                    try {
                        if (o = (r = r.call(t)).next, 0 === e) {
                            if (Object(r) !== r) return;
                            c = !1
                        } else
                            for (; !(c = (n = o.call(r)).done) && (s.push(n.value), s.length !== e); c = !0);
                    } catch (t) {
                        d = !0, a = t
                    } finally {
                        try {
                            if (!c && null != r.return && (i = r.return(), Object(i) !== i)) return
                        } finally {
                            if (d) throw a
                        }
                    }
                    return s
                }
            }(t, e) || _(t, e) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function H(t) {
            return function(t) {
                if (Array.isArray(t)) return B(t)
            }(t) || function(t) {
                if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
            }(t) || _(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        var q = function() {
            return !window.tdlSsoAuthScriptSrc.includes("accounts")
        };

        function j(t) {
            return !t.includes("/analytics-engine/") && E().urls.find((function(e) {
                return t.toLowerCase().includes(e.toLowerCase())
            }))
        }

        function F(t) {
            return E().syncTrackingUrls.find((function(e) {
                return t.toLowerCase().includes(e.toLowerCase())
            }))
        }

        function U() {
            var t;
            q() && (t = console).log.apply(t, arguments)
        }
        var M, J = function(t, e) {
                if (t) {
                    var r = e;
                    "string" != typeof e && (r = JSON.stringify(e));
                    try {
                        localStorage.setItem(t, r)
                    } catch (t) {
                        U("TDPL-SSO: localStorage may be full.")
                    }
                } else U("TDPL-SSO: can't set in local storage: key missing")
            },
            G = function(t) {
                var e;
                return null === (e = document.cookie.split(";").find((function(e) {
                    return e.trim().startsWith(t)
                }))) || void 0 === e ? void 0 : e.split("=")[1]
            },
            V = new Uint8Array(16);

        function K() {
            if (!M && !(M = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
            return M(V)
        }
        const Q = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
        for (var X = [], Y = 0; Y < 256; ++Y) X.push((Y + 256).toString(16).substr(1));
        const Z = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    r = (X[t[e + 0]] + X[t[e + 1]] + X[t[e + 2]] + X[t[e + 3]] + "-" + X[t[e + 4]] + X[t[e + 5]] + "-" + X[t[e + 6]] + X[t[e + 7]] + "-" + X[t[e + 8]] + X[t[e + 9]] + "-" + X[t[e + 10]] + X[t[e + 11]] + X[t[e + 12]] + X[t[e + 13]] + X[t[e + 14]] + X[t[e + 15]]).toLowerCase();
                if (! function(t) {
                        return "string" == typeof t && Q.test(t)
                    }(r)) throw TypeError("Stringified UUID is invalid");
                return r
            },
            z = function(t, e, r) {
                var n = (t = t || {}).random || (t.rng || K)();
                if (n[6] = 15 & n[6] | 64, n[8] = 63 & n[8] | 128, e) {
                    r = r || 0;
                    for (var a = 0; a < 16; ++a) e[r + a] = n[a];
                    return e
                }
                return Z(n)
            };
        var $ = function() {
                var t = localStorage.getItem("tdl-sso-user-id"),
                    e = localStorage.getItem("anonymousId");
                return t ? t && e !== t && J("anonymousId", t) : (t = z(), J("tdl-sso-user-id", t), J("anonymousId", t)), t
            },
            tt = function(t) {
                t ? (J("tdl-sso-user-id", t), J("anonymousId", t)) : $()
            },
            et = function() {
                var t = JSON.parse(localStorage.getItem("tdl-sso-session-id"));
                if (t && t.sessionId && (Date.now() - t.setAt) / 1e3 < E().sessionIdExpiresInS) return t.sessionId;
                var e = z();
                return J("tdl-sso-session-id", JSON.stringify({
                    sessionId: e,
                    setAt: Date.now()
                })), e
            },
            rt = function(t) {
                t ? J("tdl-sso-session-id", JSON.stringify({
                    sessionId: t,
                    setAt: Date.now()
                })) : et()
            },
            nt = function() {
                var t;
                (t = JSON.parse(localStorage.getItem("tdl-sso-redirect-tcp-flag"))) && Date.now() - t.setAt < 1e3 * E().redirectedFromTCPFlagExpiresInS && (sessionStorage.getItem("isRedirectedFromTCP") !== t.isRedirectedFromTCP && sessionStorage.setItem("isRedirectedFromTCP", t.isRedirectedFromTCP), t.setAt = Date.now(), J("tdl-sso-redirect-tcp-flag", JSON.stringify(t)));
                var e = JSON.parse(localStorage.getItem("tdl-sso-session-id"));
                e ? Date.now() - e.setAt < 1e3 * E().sessionIdExpiresInS && (e.setAt = Date.now(), J("tdl-sso-session-id", JSON.stringify(e))) : function() {
                    var t = {
                        sessionId: z(),
                        setAt: Date.now()
                    };
                    J("tdl-sso-session-id", JSON.stringify(t))
                }()
            },
            at = function() {
                return "".concat(et(), ".").concat($())
            },
            ot = function() {
                var t, e = null !== (t = JSON.parse(localStorage.getItem("com.adobe.reactor.dataElements.ECID"))) && void 0 !== t ? t : JSON.parse(sessionStorage.getItem("com.adobe.reactor.dataElements.ECID"));
                return null != e ? e : "Unknown"
            },
            it = function() {
                return window.tdplJarvisId || G("jarvis-id")
            },
            st = function(t) {
                var e;
                localStorage.setItem("tdl-sso-c-hash", JSON.stringify({
                    value: t,
                    expires: Date.now() + (null !== (e = E().customerHashValidityInS) && void 0 !== e ? e : 86400)
                }))
            },
            ct = function() {
                var t, e, r, n, a, o, i, s, c, d;
                try {
                    switch (N()) {
                        case "CROMA":
                            c = localStorage.getItem("customer_hash");
                            break;
                        case "TATADIGITAL":
                            if (c = G("_CHSH_")) break;
                            if (localStorage.getItem("customer_hash")) {
                                c = localStorage.getItem("customer_hash");
                                break
                            }
                            if (localStorage.getItem("microsegment")) {
                                var u, l;
                                c = null !== (u = null === (l = JSON.parse(localStorage.getItem("microsegment"))) || void 0 === l ? void 0 : l.customerHash) && void 0 !== u ? u : null;
                                break
                            }
                            try {
                                var p = window.CryptoJS;
                                p && (c = x(p.AES.decrypt(localStorage.getItem("__ENCY__"), "tdl-encrypt").toString(p.enc.Utf8).split("|"), 2)[1])
                            } catch (t) {
                                c = null
                            }
                            break;
                        case "ONEMG":
                            (c = localStorage.getItem("tata_customer_hash")) || (c = G("tata_customer_hash"));
                            break;
                        case "CULTFIT":
                            c = null !== (t = null === (e = JSON.parse(localStorage.getItem("user"))) || void 0 === e ? void 0 : e.userId) && void 0 !== t ? t : null;
                            break;
                        case "AIRASIA":
                            c = sessionStorage.getItem("customerhash");
                            break;
                        case "WESTSIDE":
                            c = localStorage.getItem("customerHash");
                            break;
                        case "BIGBASKET":
                            c = sessionStorage.getItem("customerHash");
                            break;
                        case "IHCL":
                            c = null !== (r = null === (n = JSON.parse(localStorage.getItem("user"))) || void 0 === n ? void 0 : n.customerHash) && void 0 !== r ? r : null;
                            break;
                        case "QMIN":
                            c = (null === (a = JSON.parse(localStorage.getItem("__QWEMNB__"))) || void 0 === a ? void 0 : a.customer_hash) || (null === (o = JSON.parse(localStorage.getItem("__POIZXC__"))) || void 0 === o ? void 0 : o.customer_hash);
                            break;
                        case "TATACLIQ":
                        case "TATACLIQ-LUXURY":
                            if (localStorage.getItem("customerHash")) {
                                c = localStorage.getItem("customerHash");
                                break
                            }
                            if (localStorage.getItem("customerHashTD")) {
                                c = localStorage.getItem("customerHashTD");
                                break
                            }
                            if (localStorage.getItem("customerDetailsTd")) {
                                var f, v;
                                c = null !== (f = null === (v = JSON.parse(localStorage.getItem("customerDetailsTd"))) || void 0 === v ? void 0 : v.customerHash) && void 0 !== f ? f : null;
                                break
                            }
                            if (!c) {
                                var h, y = G("ssoAccessToken");
                                y && (c = null === (h = JSON.parse(y)) || void 0 === h || null === (h = h.idToken) || void 0 === h ? void 0 : h.customerHash)
                            }
                            if (!c) {
                                var m, g = G("customerAccessTokenTD");
                                g && (c = null === (m = JSON.parse(g)) || void 0 === m || null === (m = m.idToken) || void 0 === m ? void 0 : m.customerHash)
                            }
                            if (!c) {
                                var T, w = G("ssoUserDetails");
                                w && (c = null === (T = JSON.parse(w)) || void 0 === T ? void 0 : T.customerHash)
                            }
                            break;
                        case "TANEIRA":
                        case "TRAQ":
                        case "ZOYA":
                        case "SONATA":
                        case "TITAN":
                        case "FASTRACK-EYEWEAR":
                        case "FASTRACK-WATCH":
                        case "SKINN":
                        case "MIA":
                        case "EYEPLUS":
                        case "TANISHQ":
                            c = (null === (i = JSON.parse(localStorage.getItem("user"))) || void 0 === i ? void 0 : i.customerHash) || G("customerHash");
                            break;
                        case "FS":
                            c = null === (s = JSON.parse(localStorage.getItem("FinBox-client-user"))) || void 0 === s ? void 0 : s.uniqueID
                    }
                } catch (t) {
                    U(t)
                }
                return c ? (st(c), c) : function() {
                    var t = localStorage.getItem("tdl-sso-c-hash");
                    if (!t) return !1;
                    try {
                        var e;
                        return (null !== (e = JSON.parse(t)) && void 0 !== e ? e : {}).expires > Date.now() || (localStorage.removeItem("tdl-sso-c-hash"), !1)
                    } catch (e) {
                        return U("TDPL-SSO: fetching customer hash from local storage failed with", e), st(t), !0
                    }
                }() ? null === (d = JSON.parse(localStorage.getItem("tdl-sso-c-hash"))) || void 0 === d ? void 0 : d.value : null
            },
            dt = new TextEncoder,
            ut = function(t) {
                var e = t.target,
                    r = void 0 === e ? {} : e,
                    n = t.type,
                    a = void 0 === n ? "" : n,
                    o = t.composedPath,
                    i = void 0 === o ? [] : o,
                    s = {
                        url: window.location,
                        path: R(i),
                        target: r.outerHTML,
                        timeStamp: Date.now(),
                        type: a
                    };
                return JSON.stringify(s, null, 2)
            },
            lt = function(t, e) {
                return {
                    "Content-Type": "application/json",
                    "customer-hash": t,
                    client_id: k(),
                    session: e,
                    "tdl-sso-version": localStorage.getItem("tdl-sso-version")
                }
            },
            pt = function(t, e, r) {
                return fetch(S() || "https://ppapi.tatadigital.com/analytics-engine/events/v1", {
                    mode: "cors",
                    method: "POST",
                    cache: "no-cache",
                    body: t,
                    headers: lt(e, r)
                })
            },
            ft = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "TCP-WEB-APP";
                return fetch(t, {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        "Client-Id": e,
                        client_id: e,
                        "Site-Origin": window.location.origin
                    }
                })
            },
            vt = function(t) {
                return navigator.sendBeacon(S() || "https://ppapi.tatadigital.com/analytics-engine/events/v1", t)
            },
            ht = ["TATADIGITAL", "FS"],
            yt = {
                bufferData: [],
                pushEvent: function(t) {
                    this.bufferData.push({
                        timestamp: Date.now(),
                        data: t
                    }), (new Blob(this.bufferData).size > E().bufferSizeInKb || this.bufferData.length >= E().bufferArrayLength) && this.sendAnalyticsData()
                },
                sendAnalyticsData: function() {
                    var t = this;
                    return e(a().mark((function e() {
                        var r;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t.restartBufferTimer(), 0 !== t.bufferData.length) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    return r = H(t.bufferData), t.bufferData = [], e.next = 7, t.fireAnalyticsEvent(r, !0);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                },
                constructPayload: function(t) {
                    var e, r = N(),
                        n = k(),
                        a = !!ht.includes(r) || D(),
                        o = window.location.href,
                        i = ct(),
                        s = JSON.stringify({
                            isRedirectedFromTCP: a,
                            url: o,
                            eventData: t,
                            customerHash: i,
                            ecid: ot(),
                            clientId: n,
                            sessionId: at(),
                            brand: r,
                            timestamp: Date.now(),
                            device: window.navigator.userAgent,
                            jarvisId: it(),
                            advertisingId: localStorage.getItem("tdl-sso-ad-id"),
                            appVersion: null === (e = JSON.parse(localStorage.getItem("tneu.deviceInfo"))) || void 0 === e ? void 0 : e.deviceVersion
                        });
                    return localStorage.getItem("tdl-analytics-tester") || (s = function(t) {
                        try {
                            var e = "";
                            try {
                                e = window.btoa(t)
                            } catch (a) {
                                var r = dt.encode(t),
                                    n = Array.from(r, (function(t) {
                                        return String.fromCodePoint(t)
                                    })).join("");
                                e = window.btoa(n)
                            }
                            return '{"secure": "true", "ePayload": "'.concat(e, '"}')
                        } catch (e) {
                            return U("Encoding payload failed with", e), t
                        }
                    }(s)), [s, i, a]
                },
                fireAnalyticsEvent: function(t) {
                    var r = arguments,
                        n = this;
                    return e(a().mark((function e() {
                        var o, i, s, c, d, u, l, p;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (i = r.length > 1 && void 0 !== r[1] && r[1], s = n.constructPayload(t), c = x(s, 3), d = c[0], u = c[1], l = c[2], !i || null === (o = window.navigator) || void 0 === o || !o.sendBeacon) {
                                        e.next = 7;
                                        break
                                    }
                                    if (!vt(d)) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.abrupt("return", !0);
                                case 6:
                                    U("(sendBeacon) Browser could not queue the data.");
                                case 7:
                                    return e.prev = 7, e.next = 10, pt(d, u, l);
                                case 10:
                                    p = e.sent, e.next = 16;
                                    break;
                                case 13:
                                    e.prev = 13, e.t0 = e.catch(7), U("TDPL-SSO: POST request failed with", e.t0);
                                case 16:
                                    return e.abrupt("return", p);
                                case 17:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [7, 13]
                        ])
                    })))()
                },
                restartBufferTimer: function() {
                    var t, e = this;
                    this.analyticsTimeout && clearTimeout(this.analyticsTimeout), this.analyticsTimeout = setTimeout((function() {
                        return e.sendAnalyticsData()
                    }), null !== (t = 1e3 * E().bufferIntervalInSeconds) && void 0 !== t ? t : 3e4)
                }
            },
            mt = function(t, e) {
                var r = new URL(null == t ? void 0 : t.href);
                r.origin !== window.location.origin && (r.searchParams.append("sessionId", e.sessionId), r.searchParams.append("jarvisId", e.jarvisId), e.source && r.searchParams.append("utm_source", e.source), t.href = r.href)
            },
            gt = function() {
                var t, r = document.querySelectorAll("a"),
                    n = {
                        sessionId: at(),
                        jarvisId: it(),
                        source: null !== (t = JSON.parse(localStorage.getItem("tdl-sso-redirect-tcp-flag"))) && void 0 !== t && t.isRedirectedFromTCP ? "tcp" : ""
                    };
                r.forEach(function() {
                    var t = e(a().mark((function t(e) {
                        var r;
                        return a().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (null !== (r = e.href) && void 0 !== r && r.startsWith("https")) try {
                                        mt(e, n)
                                    } catch (t) {
                                        U("TDPL-SSO: adding analytics params to the href failed with", t)
                                    }
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }())
            },
            Tt = function(t) {
                var e, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                nt();
                var n, a = {
                    url: window.location.href,
                    dataSource: t,
                    isTrusted: r.isTrusted
                };
                "IHCL" === N() && (window.location.href.includes("booking-cart") || window.location.href.includes("booking-confirmation")) && window.location.href.includes("status") && (e = JSON.stringify(null === (n = JSON.parse(sessionStorage.getItem("tajData"))) || void 0 === n ? void 0 : n.bookingDetailsRequest)) && (a.tajData = e), W().length > 0 && (a.htmlContentScriptData = JSON.stringify(W())), yt.fireAnalyticsEvent([{
                    timestamp: Date.now(),
                    data: JSON.stringify({
                        event: "pageLoad",
                        payload: a
                    })
                }]);
                try {
                    E().addAnalyticsParamsToHref && setTimeout(gt, 0)
                } catch (t) {
                    U("TDPL-SSO: adding analytics params to the hrefs failed with", t)
                }
            };

        function wt(t, e) {
            var r = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), r.push.apply(r, n)
            }
            return r
        }

        function At(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {};
                e % 2 ? wt(Object(r), !0).forEach((function(e) {
                    g(t, e, r[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : wt(Object(r)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                }))
            }
            return t
        }
        var St = function(t) {
                var e, r = E().cartAndWishListConfig;
                return !!r && null !== (e = r[Object.keys(r).find((function(e) {
                    return t.includes(e)
                }))]) && void 0 !== e && e
            },
            Pt = function(t) {
                var e, r = E().cartOrWishListStateGtmEvents;
                return !!r && null !== (e = r[Object.keys(r).find((function(e) {
                    return t.includes(e)
                }))]) && void 0 !== e && e
            },
            Et = function(t, e) {
                if (!e || !e.length) return "";
                for (var r = t, n = function(t) {
                        if (!r) return {
                            v: ""
                        };
                        var n, o = e[t];
                        "_processArray_" === o ? (r = null === (n = r) || void 0 === n ? void 0 : n.map((function(r) {
                            return r[e[t + 1]]
                        })), t += 1) : r = "_flattenArray_" === o ? r.flat() : r[o], a = t
                    }, a = 0; a < e.length; a += 1) {
                    var o = n(a);
                    if ("object" === m(o)) return o.v
                }
                return r
            },
            It = function() {
                var t = e(a().mark((function t(e, r) {
                    var n, o;
                    return a().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return n = Et(e, r.products), o = null == n ? void 0 : n.map((function(t) {
                                    var e, n = {};
                                    return null === (e = Object.entries(r.keysToCapture)) || void 0 === e || e.forEach((function(e) {
                                        var r = x(e, 2),
                                            a = r[0],
                                            o = r[1];
                                        n[a] = Et(t, o)
                                    })), n
                                })), t.abrupt("return", o);
                            case 3:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })));
                return function(e, r) {
                    return t.apply(this, arguments)
                }
            }(),
            bt = function() {
                var t = e(a().mark((function t(e) {
                    var r, n;
                    return a().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return n = {}, null == e || null === (r = e.forEach) || void 0 === r || r.call(e, (function(t) {
                                    var e = 1;
                                    t.quantity && (e = parseInt(t.quantity, 10)), n[t.productId] ? n[t.productId].quantity += e : n[t.productId] = At(At({}, t), {}, {
                                        quantity: e
                                    })
                                })), t.abrupt("return", n);
                            case 3:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })));
                return function(e) {
                    return t.apply(this, arguments)
                }
            }(),
            Lt = function() {
                var t = e(a().mark((function t(e, r) {
                    var n, o, i, s;
                    return a().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return i = [], s = [], null === (n = Object.entries(e)) || void 0 === n || n.forEach((function(t) {
                                    var n = x(t, 2),
                                        a = n[0],
                                        o = n[1];
                                    if (r[a]) {
                                        var c = r[a].quantity,
                                            d = e[a].quantity - c;
                                        d > 0 ? i.push(At(At({}, o), {}, {
                                            quantity: d
                                        })) : d < 0 && s.push(At(At({}, o), {}, {
                                            quantity: Math.abs(d)
                                        }))
                                    } else i.push(o)
                                })), null === (o = Object.entries(r)) || void 0 === o || o.forEach((function(t) {
                                    var r = x(t, 2),
                                        n = r[0],
                                        a = r[1];
                                    e[n] || s.push(a)
                                })), t.abrupt("return", {
                                    productsAdded: i,
                                    productsRemoved: s
                                });
                            case 5:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })));
                return function(e, r) {
                    return t.apply(this, arguments)
                }
            }(),
            Ot = function() {
                var t = e(a().mark((function t() {
                    var e, r, n, o, i;
                    return a().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (!(e = JSON.parse(localStorage.getItem("tdl-sso-cart-wishlist")))) {
                                    t.next = 13;
                                    break
                                }
                                if (null === (r = e.cart) || void 0 === r || !r.length) {
                                    t.next = 7;
                                    break
                                }
                                return t.next = 5, bt(e.cart);
                            case 5:
                                o = t.sent, localStorage.setItem("tdl-sso-cart-state", JSON.stringify(o));
                            case 7:
                                if (null === (n = e.wishlist) || void 0 === n || !n.length) {
                                    t.next = 12;
                                    break
                                }
                                return t.next = 10, bt(e.wishlist);
                            case 10:
                                i = t.sent, localStorage.setItem("tdl-sso-wishlist-state", JSON.stringify(i));
                            case 12:
                                localStorage.removeItem("tdl-sso-cart-wishlist");
                            case 13:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })));
                return function() {
                    return t.apply(this, arguments)
                }
            }(),
            Ct = function() {
                var t = e(a().mark((function t(e, r) {
                    var n, o, i, s, c, d, u, l, p, f;
                    return a().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return n = {
                                    addedToCart: [],
                                    removedFromCart: [],
                                    addedToWishlist: [],
                                    removedFromWishlist: []
                                }, t.prev = 1, s = "cart" === r.type ? "addedToCart" : "addedToWishlist", c = "cart" === r.type ? "removedFromCart" : "removedFromWishlist", t.next = 6, It(e, r);
                            case 6:
                                return d = t.sent, t.next = 9, bt(d);
                            case 9:
                                return u = t.sent, t.next = 12, Ot();
                            case 12:
                                return t.next = 14, Lt(u, null !== (i = JSON.parse(localStorage.getItem("tdl-sso-".concat(r.type, "-state")))) && void 0 !== i ? i : {});
                            case 14:
                                if (t.t1 = o = t.sent, t.t0 = null !== t.t1, !t.t0) {
                                    t.next = 18;
                                    break
                                }
                                t.t0 = void 0 !== o;
                            case 18:
                                if (!t.t0) {
                                    t.next = 22;
                                    break
                                }
                                t.t2 = o, t.next = 23;
                                break;
                            case 22:
                                t.t2 = {};
                            case 23:
                                return l = t.t2, p = l.productsAdded, f = l.productsRemoved, localStorage.setItem("tdl-sso-".concat(r.type, "-state"), JSON.stringify(u)), n[s] = p, n[c] = f, t.abrupt("return", n);
                            case 32:
                                return t.prev = 32, t.t3 = t.catch(1), U("TDPL-SSO: recording cart events using state comparison failed with", t.t3), t.abrupt("return", n);
                            case 36:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [1, 32]
                    ])
                })));
                return function(e, r) {
                    return t.apply(this, arguments)
                }
            }();

        function kt() {
            var t = D();
            if (t) {
                document.cookie = "isRedirectedFromTCP=".concat(t, "; Path=/;");
                var e = at();
                document.cookie = "tneuSessionId=".concat(e, "; Path=/;")
            }
        }
        var Nt = function() {
                try {
                    E().browserEventsToRecord.forEach((function(t) {
                        window.addEventListener(t, (function(e) {
                            nt(), "click" === t ? function(t) {
                                if (t.isTrusted || E().recordJsDispatchedClicks) {
                                    var e = function(t) {
                                            var e = t.target,
                                                r = void 0 === e ? {} : e,
                                                n = t.type;
                                            return [r, void 0 === n ? "" : n, t.composedPath ? t.composedPath() : []]
                                        }(t),
                                        r = x(e, 3),
                                        n = r[0],
                                        a = r[1],
                                        o = r[2];
                                    yt.pushEvent(ut({
                                        target: n,
                                        type: a,
                                        composedPath: o
                                    }))
                                }
                            }(e) : function(t) {
                                yt.pushEvent(ut(t))
                            }(e)
                        }), !0)
                    }))
                } catch (t) {
                    U("Error in capturing events", t)
                }
            },
            Rt = 5,
            Wt = function t() {
                Rt < 0 || (Object.hasOwn(window, "analytics") ? (window.analytics.realPushEvent || (window.analytics.realPushEvent = window.analytics.pushEvent), window.analytics.pushEvent = function(t) {
                    try {
                        if (E().adobeEventsToRecord.includes(t.event)) {
                            var e = t.digitalData;
                            yt.fireAnalyticsEvent([{
                                timestamp: Date.now(),
                                data: JSON.stringify({
                                    event: "aem-click",
                                    payload: e
                                })
                            }])
                        }
                    } catch (t) {
                        U("TDPL-SSO: recording adobe event failed with", t)
                    }
                    window.analytics.realPushEvent(t)
                }) : (Rt -= 1, setTimeout(t, 1e3)))
            },
            Dt = function() {
                var t = e(a().mark((function t(e) {
                    var r, n;
                    return a().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.prev = 0, t.next = 3, ft("".concat(T(), "/config/v2"), e);
                            case 3:
                                return r = t.sent, t.next = 6, r.json();
                            case 6:
                                "Config fetched" === (n = t.sent).success && (localStorage.setItem("tdl-sso-analytics-v2", JSON.stringify(n.config)), window.tdplConfig = n.config), t.next = 13;
                                break;
                            case 10:
                                t.prev = 10, t.t0 = t.catch(0), U(t.t0);
                            case 13:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [0, 10]
                    ])
                })));
                return function(e) {
                    return t.apply(this, arguments)
                }
            }();

        function Bt(t) {
            var e = t || new URLSearchParams(window.location.search);
            if (!D())
                if ("true" === G("isRedirectedFromTCP")) "isRedirectedFromTCP", document.cookie = "".concat("isRedirectedFromTCP", "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"), sessionStorage.setItem("isRedirectedFromTCP", "true"), localStorage.setItem("tdl-sso-redirect-tcp-flag", JSON.stringify({
                    isRedirectedFromTCP: !0,
                    setAt: Date.now()
                }));
                else if ("TATADIGITAL" === N() || "FS" === N()) sessionStorage.setItem("isRedirectedFromTCP", "true"), localStorage.setItem("tdl-sso-redirect-tcp-flag", JSON.stringify({
                isRedirectedFromTCP: !0
            }));
            else {
                var r = function(t) {
                    var e = ["tcp", "tatadigital.com", "tata neu", "tataneu", "Website", "neu"],
                        r = t.getAll("utm_source");
                    return Boolean(r.find((function(t) {
                        return !!e.includes(t)
                    })))
                }(e);
                localStorage.setItem("tdl-sso-redirect-tcp-flag", JSON.stringify({
                    isRedirectedFromTCP: r,
                    setAt: Date.now()
                })), sessionStorage.setItem("isRedirectedFromTCP", r.toString())
            }
            var n, a = e.get("sessionId"),
                o = e.get("anonymousId"),
                i = e.get("jarvisId"),
                s = e.get("advertisingId");
            if (2 === (null == (n = a) ? void 0 : n.split(".").length) ? function(t) {
                    if (!t) return tt(), void rt();
                    var e = x(t.split("."), 2),
                        r = e[0],
                        n = e[1];
                    r ? (rt(r), n && tt(n)) : U("Invalid jarvis-id")
                }(a) : (rt(a), tt(o)), function(t) {
                    var e = t || it() || z();
                    document.cookie = "jarvis-id=".concat(e, "; max-age=").concat(3456e4, "; path=/; Secure"), window.tdplJarvisId = e
                }(i), function(t) {
                    t && (document.cookie = "tdl-sso-ad-id=".concat(t, "; max-age=").concat(3456e4, "; path=/; Secure"));
                    var e = t || G("tdl-sso-ad-id");
                    e && function(t) {
                        localStorage.setItem("tdl-sso-ad-id", t)
                    }(e)
                }(s), e.has("authCode")) {
                var c = Date.now(),
                    d = new Date(c + 864e5).toUTCString();
                document.cookie = "isTataNue=true; expires=".concat(d, "; path=/")
            }
            if (e.has("jarvis_appVersion")) {
                var u = {
                    platform: "native",
                    deviceVersion: e.get("jarvis_appVersion")
                };
                localStorage.setItem("tneu.deviceInfo", JSON.stringify(u))
            } else localStorage.getItem("tneu.deviceInfo") || localStorage.setItem("tneu.deviceInfo", JSON.stringify({
                platform: "web",
                deviceVersion: "0"
            }))
        }
        var _t = {
            DataLayerHelper: function(t, e, r) {
                this.dataLayer = t, this.listener = e || function() {}, this.executingListener = !1, this.unprocessed = [], this.processStates(t, !r);
                var n = t.push,
                    a = this;
                this.dataLayer.push = function() {
                    for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++) r[o] = arguments[o];
                    var i = [].slice.call(r, 0),
                        s = n.apply(t, i);
                    return a.processStates(i), s
                }
            }
        };
        window.TdlDataLayerHelper = _t.DataLayerHelper, _t.DataLayerHelper.prototype.processStates = function(t, e) {
            var r;
            for ((r = this.unprocessed).push.apply(r, H(t)); !1 === this.executingListener && this.unprocessed.length > 0;) {
                var n = this.unprocessed.shift();
                e || (this.executingListener = !0, this.listener(n), this.executingListener = !1)
            }
        };
        var xt, Ht = function(t) {
                try {
                    return "tcp_journey_url" === t[1]
                } catch (t) {
                    return !1
                }
            },
            qt = function(t) {
                try {
                    Bt(new URL(t[2].redirectionUrl).searchParams)
                } catch (t) {
                    U("TDPL-SSO: reading URL search params failed with", t)
                }
            };

        function jt(t) {
            return Ft.apply(this, arguments)
        }

        function Ft() {
            return (Ft = e(a().mark((function t(e) {
                return a().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", new Promise((function(t) {
                                setTimeout((function() {
                                    var r;
                                    t(JSON.stringify(e, (r = new WeakSet, function(t, e) {
                                        if ("object" === m(e) && null !== e) {
                                            if (r.has(e) || void 0 !== e.isConnected) return;
                                            r.add(e)
                                        }
                                        return e
                                    })))
                                }), 0)
                            })));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }), t)
            })))).apply(this, arguments)
        }

        function Ut(t) {
            return Mt.apply(this, arguments)
        }

        function Mt() {
            return Mt = e(a().mark((function t(e) {
                var r, n, o, i, s, c, d, u, l, p, f, v, h, y, m, g, T, w, A;
                return a().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            if (xt || (xt = N()), r = {}, n = !1, o = E(), i = o.dataLayerArgumentEventsToRecord, s = o.dataLayerObjectEventsToRecord, c = o.defaultDlArgsEventsToRecord, d = o.defaultDlObjectEventsToRecord, !e.length) {
                                t.next = 37;
                                break
                            }
                            u = Array.from(e), p = null != c ? c : [], (l = null != i ? i : []).push.apply(l, H(p)), f = 0;
                        case 10:
                            if (!(f < l.length)) {
                                t.next = 17;
                                break
                            }
                            if (!u.includes(l[f])) {
                                t.next = 14;
                                break
                            }
                            return n = !0, t.abrupt("break", 17);
                        case 14:
                            f += 1, t.next = 10;
                            break;
                        case 17:
                            if (!n) {
                                t.next = 23;
                                break
                            }
                            return t.next = 20, jt(u);
                        case 20:
                            r = t.sent, t.next = 35;
                            break;
                        case 23:
                            if ("QMIN" !== N() || !Ht(u)) {
                                t.next = 27;
                                break
                            }
                            qt(u), t.next = 35;
                            break;
                        case 27:
                            if (!(v = Pt(u))) {
                                t.next = 35;
                                break
                            }
                            return t.next = 31, Ct(u, v);
                        case 31:
                            return h = t.sent, t.next = 34, jt(h);
                        case 34:
                            r = t.sent;
                        case 35:
                            t.next = 63;
                            break;
                        case 37:
                            m = null != d ? d : [], (y = null != s ? s : []).push.apply(y, H(m)), g = Object.values(e), T = 0;
                        case 42:
                            if (!(T < y.length)) {
                                t.next = 49;
                                break
                            }
                            if (!g.includes(y[T])) {
                                t.next = 46;
                                break
                            }
                            return n = !0, t.abrupt("break", 49);
                        case 46:
                            T += 1, t.next = 42;
                            break;
                        case 49:
                            if (!n) {
                                t.next = 55;
                                break
                            }
                            return t.next = 52, jt(e);
                        case 52:
                            r = t.sent, t.next = 63;
                            break;
                        case 55:
                            if (!(w = Pt(g))) {
                                t.next = 63;
                                break
                            }
                            return t.next = 59, Ct(e, w);
                        case 59:
                            return A = t.sent, t.next = 62, jt(A);
                        case 62:
                            r = t.sent;
                        case 63:
                            "string" == typeof r && yt.fireAnalyticsEvent([{
                                timestamp: Date.now(),
                                data: JSON.stringify({
                                    event: "gtm-event",
                                    data: r
                                })
                            }]);
                        case 64:
                        case "end":
                            return t.stop()
                    }
                }), t)
            }))), Mt.apply(this, arguments)
        }
        var Jt = 0,
            Gt = -1,
            Vt = function() {
                var t;
                if (Gt += 1, window.dataLayer || !(Gt < (null !== (t = E().dataLayerCheckRetryCount) && void 0 !== t ? t : 10)))
                    if (!window.dataLayer && Gt >= 5) clearInterval(Jt);
                    else {
                        clearInterval(Jt);
                        var e = E().listenToPastDataLayerEvents;
                        new window.TdlDataLayerHelper(window.dataLayer, Ut, e)
                    }
            };
        const Kt = function() {
            try {
                Vt(), window.dataLayer || (Jt = setInterval(Vt, 1e3))
            } catch (t) {
                U("Error recording GTM data: ".concat(t))
            }
        };
        var Qt, Xt, Yt, Zt, zt = -1,
            $t = function(t) {
                addEventListener("pageshow", (function(e) {
                    e.persisted && (zt = e.timeStamp, t(e))
                }), !0)
            },
            te = function() {
                return window.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0]
            },
            ee = function() {
                var t = te();
                return t && t.activationStart || 0
            },
            re = function(t, e) {
                var r = te(),
                    n = "navigate";
                return zt >= 0 ? n = "back-forward-cache" : r && (document.prerendering || ee() > 0 ? n = "prerender" : document.wasDiscarded ? n = "restore" : r.type && (n = r.type.replace(/_/g, "-"))), {
                    name: t,
                    value: void 0 === e ? -1 : e,
                    rating: "good",
                    delta: 0,
                    entries: [],
                    id: "v3-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12),
                    navigationType: n
                }
            },
            ne = function(t, e, r) {
                try {
                    if (PerformanceObserver.supportedEntryTypes.includes(t)) {
                        var n = new PerformanceObserver((function(t) {
                            Promise.resolve().then((function() {
                                e(t.getEntries())
                            }))
                        }));
                        return n.observe(Object.assign({
                            type: t,
                            buffered: !0
                        }, r || {})), n
                    }
                } catch (t) {}
            },
            ae = function(t, e, r, n) {
                var a, o;
                return function(i) {
                    e.value >= 0 && (i || n) && ((o = e.value - (a || 0)) || void 0 === a) && (a = e.value, e.delta = o, e.rating = function(t, e) {
                        return t > e[1] ? "poor" : t > e[0] ? "needs-improvement" : "good"
                    }(e.value, r), t(e))
                }
            },
            oe = function(t) {
                requestAnimationFrame((function() {
                    return requestAnimationFrame((function() {
                        return t()
                    }))
                }))
            },
            ie = function(t) {
                var e = function(e) {
                    "pagehide" !== e.type && "hidden" !== document.visibilityState || t(e)
                };
                addEventListener("visibilitychange", e, !0), addEventListener("pagehide", e, !0)
            },
            se = function(t) {
                var e = !1;
                return function(r) {
                    e || (t(r), e = !0)
                }
            },
            ce = -1,
            de = function() {
                return "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0
            },
            ue = function(t) {
                "hidden" === document.visibilityState && ce > -1 && (ce = "visibilitychange" === t.type ? t.timeStamp : 0, pe())
            },
            le = function() {
                addEventListener("visibilitychange", ue, !0), addEventListener("prerenderingchange", ue, !0)
            },
            pe = function() {
                removeEventListener("visibilitychange", ue, !0), removeEventListener("prerenderingchange", ue, !0)
            },
            fe = function() {
                return ce < 0 && (ce = de(), le(), $t((function() {
                    setTimeout((function() {
                        ce = de(), le()
                    }), 0)
                }))), {
                    get firstHiddenTime() {
                        return ce
                    }
                }
            },
            ve = function(t) {
                document.prerendering ? addEventListener("prerenderingchange", (function() {
                    return t()
                }), !0) : t()
            },
            he = [1800, 3e3],
            ye = [.1, .25],
            me = {
                passive: !0,
                capture: !0
            },
            ge = new Date,
            Te = function(t, e) {
                Qt || (Qt = e, Xt = t, Yt = new Date, Se(removeEventListener), we())
            },
            we = function() {
                if (Xt >= 0 && Xt < Yt - ge) {
                    var t = {
                        entryType: "first-input",
                        name: Qt.type,
                        target: Qt.target,
                        cancelable: Qt.cancelable,
                        startTime: Qt.timeStamp,
                        processingStart: Qt.timeStamp + Xt
                    };
                    Zt.forEach((function(e) {
                        e(t)
                    })), Zt = []
                }
            },
            Ae = function(t) {
                if (t.cancelable) {
                    var e = (t.timeStamp > 1e12 ? new Date : performance.now()) - t.timeStamp;
                    "pointerdown" == t.type ? function(t, e) {
                        var r = function() {
                                Te(t, e), a()
                            },
                            n = function() {
                                a()
                            },
                            a = function() {
                                removeEventListener("pointerup", r, me), removeEventListener("pointercancel", n, me)
                            };
                        addEventListener("pointerup", r, me), addEventListener("pointercancel", n, me)
                    }(e, t) : Te(e, t)
                }
            },
            Se = function(t) {
                ["mousedown", "keydown", "touchstart", "pointerdown"].forEach((function(e) {
                    return t(e, Ae, me)
                }))
            },
            Pe = [100, 300],
            Ee = [2500, 4e3],
            Ie = {};

        function be(t) {
            yt.fireAnalyticsEvent([{
                timestamp: Date.now(),
                data: JSON.stringify({
                    event: "web-vitals",
                    data: t
                })
            }], !0)
        }
        var Le = function() {
                var t, e = null !== (t = navigator.connection) && void 0 !== t ? t : {},
                    r = e.downlink,
                    n = e.effectiveType;
                yt.fireAnalyticsEvent([{
                    timestamp: Date.now(),
                    data: JSON.stringify({
                        event: "network-info",
                        data: {
                            downlink: r,
                            effectiveType: n
                        }
                    })
                }])
            },
            Oe = function() {
                window.addEventListener("load", Le),
                    function(t, e) {
                        e = e || {},
                            function(t, e) {
                                e = e || {}, ve((function() {
                                    var r, n = fe(),
                                        a = re("FCP"),
                                        o = ne("paint", (function(t) {
                                            t.forEach((function(t) {
                                                "first-contentful-paint" === t.name && (o.disconnect(), t.startTime < n.firstHiddenTime && (a.value = Math.max(t.startTime - ee(), 0), a.entries.push(t), r(!0)))
                                            }))
                                        }));
                                    o && (r = ae(t, a, he, e.reportAllChanges), $t((function(n) {
                                        a = re("FCP"), r = ae(t, a, he, e.reportAllChanges), oe((function() {
                                            a.value = performance.now() - n.timeStamp, r(!0)
                                        }))
                                    })))
                                }))
                            }(se((function() {
                                var r, n = re("CLS", 0),
                                    a = 0,
                                    o = [],
                                    i = function(t) {
                                        t.forEach((function(t) {
                                            if (!t.hadRecentInput) {
                                                var e = o[0],
                                                    r = o[o.length - 1];
                                                a && t.startTime - r.startTime < 1e3 && t.startTime - e.startTime < 5e3 ? (a += t.value, o.push(t)) : (a = t.value, o = [t])
                                            }
                                        })), a > n.value && (n.value = a, n.entries = o, r())
                                    },
                                    s = ne("layout-shift", i);
                                s && (r = ae(t, n, ye, e.reportAllChanges), ie((function() {
                                    i(s.takeRecords()), r(!0)
                                })), $t((function() {
                                    a = 0, n = re("CLS", 0), r = ae(t, n, ye, e.reportAllChanges), oe((function() {
                                        return r()
                                    }))
                                })), setTimeout(r, 0))
                            })))
                    }(be),
                    function(t, e) {
                        e = e || {}, ve((function() {
                            var r, n = fe(),
                                a = re("FID"),
                                o = function(t) {
                                    t.startTime < n.firstHiddenTime && (a.value = t.processingStart - t.startTime, a.entries.push(t), r(!0))
                                },
                                i = function(t) {
                                    t.forEach(o)
                                },
                                s = ne("first-input", i);
                            r = ae(t, a, Pe, e.reportAllChanges), s && ie(se((function() {
                                i(s.takeRecords()), s.disconnect()
                            }))), s && $t((function() {
                                var n;
                                a = re("FID"), r = ae(t, a, Pe, e.reportAllChanges), Zt = [], Xt = -1, Qt = null, Se(addEventListener), n = o, Zt.push(n), we()
                            }))
                        }))
                    }(be),
                    function(t, e) {
                        e = e || {}, ve((function() {
                            var r, n = fe(),
                                a = re("LCP"),
                                o = function(t) {
                                    var e = t[t.length - 1];
                                    e && e.startTime < n.firstHiddenTime && (a.value = Math.max(e.startTime - ee(), 0), a.entries = [e], r())
                                },
                                i = ne("largest-contentful-paint", o);
                            if (i) {
                                r = ae(t, a, Ee, e.reportAllChanges);
                                var s = se((function() {
                                    Ie[a.id] || (o(i.takeRecords()), i.disconnect(), Ie[a.id] = !0, r(!0))
                                }));
                                ["keydown", "click"].forEach((function(t) {
                                    addEventListener(t, s, !0)
                                })), ie(s), $t((function(n) {
                                    a = re("LCP"), r = ae(t, a, Ee, e.reportAllChanges), oe((function() {
                                        a.value = performance.now() - n.timeStamp, Ie[a.id] = !0, r(!0)
                                    }))
                                }))
                            }
                        }))
                    }(be)
            };
        try {
            ! function() {
                var t = document.head.querySelector("[name=tdl-sso-client_id][content]");
                if (t) {
                    var r = t.content;
                    r && (window.tdlSsoAuth.createSession = function() {
                        var t = e(a().mark((function t(e) {
                            var n;
                            return a().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, fetch("".concat(l(), "/api/v2/sso/create-session"), {
                                            mode: "cors",
                                            method: "POST",
                                            credentials: "include",
                                            headers: {
                                                "Content-Type": "application/json",
                                                "Access-Control-Allow-Origin": l(),
                                                client_id: r,
                                                Authorization: "Bearer ".concat(e)
                                            }
                                        });
                                    case 2:
                                        return n = t.sent, t.abrupt("return", 200 === (null == n ? void 0 : n.status));
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }(), window.tdlSsoAuth.getSession = e(a().mark((function t() {
                        var e;
                        return a().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.t0 = fetch, t.t1 = "".concat(l(), "/api/v2/sso/check-session"), t.t2 = JSON, t.next = 5, window.codeChallengeTdlSsoAuth;
                                case 5:
                                    return t.t3 = t.sent, t.t4 = d, t.t5 = {
                                        codeChallenge: t.t3,
                                        redirectUrl: t.t4
                                    }, t.t6 = t.t2.stringify.call(t.t2, t.t5), t.t7 = {
                                        "Content-Type": "application/json",
                                        "Access-Control-Allow-Origin": l(),
                                        client_id: r
                                    }, t.t8 = {
                                        mode: "cors",
                                        method: "POST",
                                        body: t.t6,
                                        credentials: "include",
                                        headers: t.t7
                                    }, t.next = 13, (0, t.t0)(t.t1, t.t8);
                                case 13:
                                    if (200 !== (null == (e = t.sent) ? void 0 : e.status)) {
                                        t.next = 16;
                                        break
                                    }
                                    return t.abrupt("return", e.json().then((function(t) {
                                        return t.authCode ? {
                                            authCode: t.authCode,
                                            codeVerifier: window.codeVerifierTdlSsoAuth
                                        } : {
                                            authCode: null,
                                            codeVerifier: null
                                        }
                                    })));
                                case 16:
                                    return t.abrupt("return", {
                                        authCode: null,
                                        codeVerifier: null
                                    });
                                case 17:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    }))), window.tdlSsoAuth.deleteSession = function() {
                        var t = e(a().mark((function t(e) {
                            var n, o;
                            return a().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return n = localStorage.getItem("anonymousId"), t.next = 3, fetch("".concat(l(), "/api/v2/sso/signout"), {
                                            mode: "cors",
                                            method: "POST",
                                            credentials: "include",
                                            headers: {
                                                "Content-Type": "application/json",
                                                "Access-Control-Allow-Origin": l(),
                                                client_id: r,
                                                Authorization: "Bearer ".concat(e),
                                                anonymous_id: n
                                            }
                                        });
                                    case 3:
                                        return o = t.sent, t.abrupt("return", 200 === (null == o ? void 0 : o.status));
                                    case 5:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }(), window.tdlSsoAuth.openBrandUrlWithAuthCode = function() {
                        var t = e(a().mark((function t(e) {
                            var n, o, c, d, u, l, p;
                            return a().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (n = e.accessToken, o = e.url, c = e.clientSecret, d = e.target, o) {
                                            t.next = 4;
                                            break
                                        }
                                        return console.log("TDPL-SSO: please pass in the URL to be opened in the url property."), t.abrupt("return");
                                    case 4:
                                        if (n && c) {
                                            t.next = 8;
                                            break
                                        }
                                        return console.log("TDPL-SSO: missing accessToken or clientSecret."), d ? window.open(o, d) : window.open(o), t.abrupt("return");
                                    case 8:
                                        return f.codeVerifier = s(128), t.next = 11, i(f.codeVerifier);
                                    case 11:
                                        f.codeChallenge = t.sent, t.prev = 12, u = new URL(o), t.next = 21;
                                        break;
                                    case 16:
                                        return t.prev = 16, t.t0 = t.catch(12), console.log("Passed in url couldn't be parsed into a URL object."), d ? window.open(o, d) : window.open(o), t.abrupt("return");
                                    case 21:
                                        return l = o, t.next = 24, window.ssoSdkGenerateAuthCodeForTargetDomain(n, u, r, c);
                                    case 24:
                                        (p = t.sent).authCode && (l += l.includes("?") ? "&" : "?", l += "authCode=".concat(p.authCode), l += "&codeVerifier=".concat(f.codeVerifier)), d ? window.open(l, d) : window.open(l);
                                    case 27:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [12, 16]
                            ])
                        })));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }(), window.tdlSsoAuth.doNativeLogin = function() {
                        var t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).returnURL;
                        window.location = t ? "".concat(p(), "/auth/login?next=").concat(t) : "".concat(p(), "/auth/login")
                    }, window.tdlSsoAuth.passLoginStatus = function() {
                        var t, e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        if (window.webkit && window.webkit.messageHandlers) null === (t = window.webkit.messageHandlers.brandLoginStatus) || void 0 === t || t.postMessage(e);
                        else if ("undefined" != typeof TnAndroid) {
                            var r, n;
                            null === (r = (n = TnAndroid).brandLoginStatus) || void 0 === r || r.call(n, e)
                        } else console.warn("TDPL-SSO: Native interface unavailable.")
                    })
                } else console.log('TDPL-SSO [Error Log]: Please add <meta name="tdl-sso-client_id" content="CLIENT-ID"> in html head')
            }(),
            function() {
                try {
                    localStorage.setItem("tdl-sso-version", "4.1.11"), window.tdlSsoAuthScriptSrc = document.currentScript.src;
                    var t = k();
                    try {
                        P(t), Dt(t).catch((function(t) {
                            return U("TDL-SSO: config set failed with", t)
                        }))
                    } catch (t) {
                        U("TDPL-SSO: config set failed with", t)
                    }
                    if (yt.restartBufferTimer(), E().recordAnalytics) {
                        try {
                            Bt()
                        } catch (t) {
                            U("TDPL-SSO: cookie and session set failed with", t)
                        }
                        try {
                            setTimeout(ct, 0)
                        } catch (t) {
                            U("TDPL-SSO: setting customerHash failed with", t)
                        }
                        try {
                            setTimeout(b, 0)
                        } catch (t) {
                            U("TDPL-SSO: setting analytics endpoint on window failed with", t)
                        }
                        try {
                            "complete" === document.readyState && Tt("readystate"), window.addEventListener("load", (function(t) {
                                Tt("load", t)
                            }))
                        } catch (t) {
                            U("TDPL-SSO: pageLoad capturing failed with", t)
                        }
                        try {
                            E().recordWebVitals && Oe()
                        } catch (t) {
                            U("TDPL-SSO: Web Vitals capturing failed with", t)
                        }
                        try {
                            History.prototype.realPushState || (History.prototype.realPushState = History.prototype.pushState), History.prototype.pushState = function() {
                                for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                                History.prototype.realPushState.apply(window.history, e), yt.fireAnalyticsEvent([{
                                    timestamp: Date.now(),
                                    data: JSON.stringify({
                                        event: "pageLoad",
                                        payload: {
                                            url: window.location.toString(),
                                            dataSource: "pushState"
                                        }
                                    })
                                }])
                            }, "WESTSIDE" !== N() && (History.prototype.realReplaceState || (History.prototype.realReplaceState = History.prototype.replaceState), History.prototype.replaceState = function() {
                                for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                                History.prototype.realReplaceState.apply(window.history, e), yt.fireAnalyticsEvent([{
                                    timestamp: Date.now(),
                                    data: JSON.stringify({
                                        event: "pageLoad",
                                        payload: {
                                            url: window.location.toString(),
                                            dataSource: "replaceState"
                                        }
                                    })
                                }])
                            }), "TATACLIQ" === N() && window.addEventListener("popstate", e(a().mark((function t() {
                                return a().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            yt.fireAnalyticsEvent([{
                                                timestamp: Date.now(),
                                                data: JSON.stringify({
                                                    event: "pageLoad",
                                                    payload: {
                                                        url: window.location.href
                                                    }
                                                })
                                            }]);
                                        case 1:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))), window.realOpen || (window.realOpen = window.open), window.open = function() {
                                for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                                var n = e;
                                try {
                                    if (0 !== e.length) {
                                        var a;
                                        if ("object" === m(e[0])) a = e[0];
                                        else {
                                            var o;
                                            if ("string" != typeof e[0]) return kt(), (o = this.realOpen).apply.apply(o, e);
                                            e[0].startsWith("/") && (n[0] = window.location.origin + e[0]), e[0].startsWith("?") && (n[0] = window.location.origin + window.location.pathname + e[0]);
                                            try {
                                                a = new URL(n[0])
                                            } catch (t) {
                                                return U(t), kt(), this.realOpen.apply(this, e)
                                            }
                                        }
                                        var i = a.searchParams.get("swtUrl"),
                                            s = i;
                                        if (i) {
                                            var c;
                                            i.includes("sessionId") || (s = s.concat(i.includes("?") ? "&" : "?", "sessionId=").concat(at())), i.includes("jarvisId") || (s = s.concat("&jarvisId=".concat(it()))), a.searchParams.set("swtUrl", "swtUrlPlaceholder");
                                            var d = null === (c = a) || void 0 === c || null === (c = c.href) || void 0 === c ? void 0 : c.replace("swtUrlPlaceholder", s);
                                            setTimeout((function() {
                                                return function(t, e) {
                                                    var r, n, a = JSON.stringify({
                                                        isRedirectedFromTCP: !0,
                                                        url: e,
                                                        eventData: t,
                                                        customerHash: ct(),
                                                        ecid: ot(),
                                                        clientId: "TCP-WEB-APP",
                                                        sessionId: at(),
                                                        brand: "TATADIGITAL",
                                                        timestamp: Date.now(),
                                                        device: window.navigator.userAgent,
                                                        jarvisId: it(),
                                                        dataSource: "swtOnWindowOpen"
                                                    });
                                                    null === (r = (n = window.navigator).sendBeacon) || void 0 === r || r.call(n, S(), a)
                                                }([{
                                                    timestamp: Date.now(),
                                                    data: JSON.stringify({
                                                        event: "pageLoad",
                                                        url: d,
                                                        dataSource: "swtOnWindowOpen"
                                                    })
                                                }], d)
                                            }), 0)
                                        } else "http:" !== a.protocol && "https:" !== a.protocol || a.origin === window.location.origin || (a.searchParams.get("sessionId") || a.searchParams.append("sessionId", at()), a.searchParams.get("jarvisId") || a.searchParams.append("jarvisId", it()));
                                        n[0] = a.href.replace("swtUrlPlaceholder", s)
                                    }
                                    return kt(), this.realOpen.apply(this, n)
                                } catch (t) {
                                    var u;
                                    return U("TDPL-SSO: adding sessionId and jarvisId search parameters to the URL failed with", t), (u = window).realOpen.apply(u, e)
                                }
                            }, document.addEventListener("click", (function(t) {
                                t.target.closest("a[target=_blank]") && kt()
                            })), XMLHttpRequest.prototype.realOpen || (XMLHttpRequest.prototype.realOpen = XMLHttpRequest.prototype.open), XMLHttpRequest.prototype.open = function() {
                                for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                                this.requestType = e[0], this.requestUrl = e[1], this.realOpen.apply(this, e)
                            }, XMLHttpRequest.prototype.realSetRequestHeader || (XMLHttpRequest.prototype.realSetRequestHeader = XMLHttpRequest.prototype.setRequestHeader), XMLHttpRequest.prototype.setRequestHeader = function() {
                                this.requestHeaders || (this.requestHeaders = {});
                                for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                                this.requestHeaders[e[0]] = e[1], this.realSetRequestHeader.apply(this, e)
                            }, XMLHttpRequest.prototype.realSend || (XMLHttpRequest.prototype.realSend = XMLHttpRequest.prototype.send), XMLHttpRequest.prototype.send = function() {
                                for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                                try {
                                    if (this.requestType && ("post" === this.requestType.toLowerCase() || "put" === this.requestType.toLowerCase())) try {
                                        var o = r[0];
                                        this.requestBody = o instanceof FormData || o instanceof URLSearchParams ? H(o).toString() : o
                                    } catch (t) {
                                        this.requestBody = r[0]
                                    }
                                    F(this.requestUrl) ? this.addEventListener("readystatechange", function() {
                                        var t = e(a().mark((function t() {
                                            var e, r, n, o;
                                            return a().wrap((function(t) {
                                                for (;;) switch (t.prev = t.next) {
                                                    case 0:
                                                        if (4 !== this.readyState) {
                                                            t.next = 18;
                                                            break
                                                        }
                                                        if (e = {
                                                                requestHeaders: this.requestHeaders,
                                                                requestType: this.requestType,
                                                                requestUrl: this.requestUrl,
                                                                requestBody: this.requestBody,
                                                                response: this.response,
                                                                status: this.status
                                                            }, !(n = St(this.requestUrl))) {
                                                            t.next = 15;
                                                            break
                                                        }
                                                        return o = this.response, "string" == typeof this.response && (o = JSON.parse(this.response)), t.prev = 6, t.next = 9, Ct(o, n);
                                                    case 9:
                                                        r = t.sent, t.next = 15;
                                                        break;
                                                    case 12:
                                                        t.prev = 12, t.t0 = t.catch(6), U("TDPL-SSO: recording cart or wish list change event failed with", t.t0);
                                                    case 15:
                                                        return r && (e.cartOrWishListUpdate = r), t.next = 18, yt.fireAnalyticsEvent([{
                                                            timestamp: Date.now(),
                                                            data: JSON.stringify({
                                                                event: "request",
                                                                payload: e
                                                            })
                                                        }]);
                                                    case 18:
                                                    case "end":
                                                        return t.stop()
                                                }
                                            }), t, this, [
                                                [6, 12]
                                            ])
                                        })));
                                        return function() {
                                            return t.apply(this, arguments)
                                        }
                                    }(), !1) : j(this.requestUrl) && this.addEventListener("readystatechange", (function() {
                                        4 === this.readyState && yt.pushEvent(JSON.stringify({
                                            event: "request",
                                            payload: {
                                                requestHeaders: this.requestHeaders,
                                                requestType: this.requestType,
                                                requestUrl: this.requestUrl,
                                                requestBody: this.requestBody,
                                                response: this.response,
                                                status: this.status
                                            }
                                        }))
                                    }), !1)
                                } catch (t) {
                                    U("TDPL-SSO: recording xhr.send failed with", t)
                                }
                                this.realSend.apply(this, r)
                            }, window.realFetch || (window.realFetch = fetch), window.fetch = function() {
                                for (var t, r = arguments.length, n = new Array(r), o = 0; o < r; o++) n[o] = arguments[o];
                                return (t = window).realFetch.apply(t, n).then(function() {
                                    var t = e(a().mark((function t(e) {
                                        var r, o, i, s, c, d, u, l, p, f, v, h;
                                        return a().wrap((function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    if (t.prev = 0, s = e.clone(), c = s, null === (r = e.headers) || void 0 === r || null === (r = r.get("content-type")) || void 0 === r || !r.includes("application/json")) {
                                                        t.next = 18;
                                                        break
                                                    }
                                                    return t.next = 6, s.json();
                                                case 6:
                                                    if (c = t.sent, !(d = St(e.url))) {
                                                        t.next = 18;
                                                        break
                                                    }
                                                    return t.prev = 9, t.next = 12, Ct(c, d);
                                                case 12:
                                                    i = t.sent, t.next = 18;
                                                    break;
                                                case 15:
                                                    t.prev = 15, t.t0 = t.catch(9), U("TDPL-SSO: recording cart or wish list change event failed with", t.t0);
                                                case 18:
                                                    u = (u = null === (o = n[1]) || void 0 === o ? void 0 : o.body) instanceof URLSearchParams || u instanceof FormData ? H(u).toString() : u, F("".concat(e.url)) ? (f = {
                                                        requestHeaders: null === (l = n[1]) || void 0 === l ? void 0 : l.headers,
                                                        requestType: (null === (p = n[1]) || void 0 === p ? void 0 : p.method) || "GET",
                                                        requestUrl: s.url,
                                                        requestBody: u,
                                                        response: c,
                                                        status: null == s ? void 0 : s.status
                                                    }, i && (f.cartOrWishListUpdate = i), yt.fireAnalyticsEvent([{
                                                        timestamp: Date.now(),
                                                        data: JSON.stringify({
                                                            event: "request",
                                                            payload: f
                                                        })
                                                    }])) : e && j("".concat(e.url)) && yt.pushEvent(JSON.stringify({
                                                        event: "request",
                                                        payload: {
                                                            requestHeaders: null === (v = n[1]) || void 0 === v ? void 0 : v.headers,
                                                            requestType: (null === (h = n[1]) || void 0 === h ? void 0 : h.method) || "GET",
                                                            requestUrl: s.url,
                                                            requestBody: u,
                                                            response: c,
                                                            status: null == s ? void 0 : s.status
                                                        }
                                                    })), t.next = 27;
                                                    break;
                                                case 23:
                                                    return t.prev = 23, t.t1 = t.catch(0), U(t.t1), t.abrupt("return", e);
                                                case 27:
                                                    return t.abrupt("return", e);
                                                case 28:
                                                case "end":
                                                    return t.stop()
                                            }
                                        }), t, null, [
                                            [0, 23],
                                            [9, 15]
                                        ])
                                    })));
                                    return function(e) {
                                        return t.apply(this, arguments)
                                    }
                                }()).catch((function(t) {
                                    U(t)
                                }))
                            }
                        } catch (t) {
                            U("TDPL-SSO: modification of native methods failed with", t)
                        }
                        try {
                            E().modifyHistoryOwnMethods && Object.hasOwn(window.history, "pushState") && (Object.hasOwn(window.history, "realPushState") || (window.history.realPushState = window.history.pushState), window.history.pushState = function() {
                                var t;
                                (t = window.history).realPushState.apply(t, arguments), yt.fireAnalyticsEvent([{
                                    timestamp: Date.now(),
                                    data: JSON.stringify({
                                        event: "pageLoad",
                                        payload: {
                                            url: window.location.toString(),
                                            dataSource: "pushState"
                                        }
                                    })
                                }])
                            }, Object.hasOwn(window.history, "replaceState") && (Object.hasOwn(window.history, "realReplaceState") || (window.history.realReplaceState = window.history.replaceState), window.history.replaceState = function() {
                                var t;
                                (t = window.history).realReplaceState.apply(t, arguments), yt.fireAnalyticsEvent([{
                                    timestamp: Date.now(),
                                    data: JSON.stringify({
                                        event: "pageLoad",
                                        payload: {
                                            url: window.location.toString(),
                                            dataSource: "replaceState"
                                        }
                                    })
                                }])
                            }))
                        } catch (t) {
                            U("TDPL-SSO: modification of history's own methods failed with", t)
                        }
                        try {
                            setTimeout(Nt, 0)
                        } catch (t) {
                            U("TDPL-SSO: events capture failed with", t)
                        }
                        try {
                            E().recordAdobeEvents && Wt()
                        } catch (t) {
                            U("TDPL-SSO: Adobe data capture failed with", t)
                        }
                        try {
                            E().recordGtmEvents && setTimeout(Kt, 0)
                        } catch (t) {
                            U("TDPL-SSO: GTM data capture failed with", t)
                        }
                    }
                } catch (t) {
                    U("TDPL-SSO: analytics start failed with", t)
                }
            }()
        } catch (Qt) {
            console.warn("Some error occurred in starting the tdl-sso-auth.js script", Qt)
        }
    })()
})();