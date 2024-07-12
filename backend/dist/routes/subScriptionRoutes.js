'use strict';
var J = b, K = b;
(function (c, d) {
    var H = b, I = b, e = c();
    while (!![]) {
        try {
            var f = parseInt(H(0x194)) / (-0x1e36 + -0x1b72 + -0x1fd * -0x1d) + parseInt(I(0x1a1)) / (0x3 * -0xada + 0x8c * -0x43 + 0x4534) + -parseInt(H(0x195)) / (-0x9c1 * 0x2 + -0x1dd6 + -0x1 * -0x315b) * (-parseInt(H(0x17e)) / (0xd37 + -0x1 * 0x2425 + 0x16f2)) + parseInt(H(0x1ab)) / (-0x13 * -0xb2 + -0x3b * -0x9 + 0xf44 * -0x1) + parseInt(I(0x177)) / (-0x1c01 + -0x1469 + 0x3070) + -parseInt(H(0x19b)) / (-0x1c6 * 0xb + 0xfa + 0x128f) + parseInt(H(0x176)) / (0x13da + 0x7c * -0x35 + 0x5da) * (-parseInt(H(0x180)) / (0x605 * -0x3 + -0xc * -0x2c6 + -0xf30));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x26b * -0x4a9 + -0x9 * 0xb84d + 0x1 * 0x3650b));
function b(c, d) {
    var e = a();
    return b = function (f, g) {
        f = f - (-0x2176 + -0x26a + -0x425 * -0x9);
        var h = e[f];
        return h;
    }, b(c, d);
}
var __createBinding = this && this[J(0x173) + J(0x198)] || (Object[J(0x183)] ? function (e, f, g, h) {
        var L = J, M = K, i = {};
        i[L(0x17a)] = L(0x172), i[M(0x1ad)] = function (p, q) {
            return p === q;
        }, i[M(0x1ae)] = function (p, q) {
            return p in q;
        }, i[M(0x193)] = L(0x171), i[L(0x187)] = function (p, q) {
            return p === q;
        }, i[L(0x1af)] = L(0x1a5);
        var j = i;
        if (j[L(0x1ad)](h, undefined))
            h = g;
        var l = Object[L(0x1a9) + M(0x18c) + L(0x181)](f, g);
        if (!l || (j[L(0x1ae)](j[M(0x193)], l) ? !f[M(0x18d)] : l[L(0x188)] || l[L(0x19a) + 'le'])) {
            if (j[M(0x187)](j[M(0x1af)], j[M(0x1af)])) {
                var n = {};
                n[L(0x1ac)] = !![], n[L(0x171)] = function () {
                    return f[g];
                }, l = n;
            } else {
                var q = {};
                q[M(0x1ac)] = !![], q[M(0x179)] = h, f[M(0x174) + M(0x17c)](g, j[M(0x17a)], q);
            }
        }
        Object[M(0x174) + L(0x17c)](e, h, l);
    } : function (d, e, f, g) {
        var N = K, O = K, h = {};
        h[N(0x16f)] = function (j, l) {
            return j === l;
        };
        var i = h;
        if (i[N(0x16f)](g, undefined))
            g = f;
        d[g] = e[f];
    }), __setModuleDefault = this && this[K(0x17d) + K(0x186)] || (Object[J(0x183)] ? function (e, f) {
        var P = J, Q = J, g = {};
        g[P(0x19c)] = P(0x172);
        var h = g, i = {};
        i[Q(0x1ac)] = !![], i[Q(0x179)] = f, Object[P(0x174) + P(0x17c)](e, h[Q(0x19c)], i);
    } : function (d, e) {
        var R = J, S = J, f = {};
        f[R(0x178)] = S(0x172);
        var g = f;
        d[g[S(0x178)]] = e;
    }), __importStar = this && this[K(0x16d) + 'ar'] || function (c) {
        var T = J, U = J, d = {
                'DjnBI': T(0x199),
                'wnKLR': function (i, j) {
                    return i != j;
                },
                'eubqb': function (i, j) {
                    return i !== j;
                },
                'lplpi': T(0x172),
                'ixMYN': function (i, j, l, m) {
                    return i(j, l, m);
                },
                'Notra': function (i, j, l) {
                    return i(j, l);
                }
            }, e = d[U(0x196)][T(0x1a0)]('|'), f = 0x1163 + -0x19ad + 0x84a;
        while (!![]) {
            switch (e[f++]) {
            case '0':
                if (c && c[T(0x18d)])
                    return c;
                continue;
            case '1':
                var g = {};
                continue;
            case '2':
                if (d[U(0x18e)](c, null)) {
                    for (var h in c)
                        if (d[T(0x18f)](h, d[T(0x184)]) && Object[U(0x191)][U(0x19f) + T(0x17c)][U(0x1a2)](c, h))
                            d[U(0x197)](__createBinding, g, c, h);
                }
                continue;
            case '3':
                return g;
            case '4':
                d[U(0x1a4)](__setModuleDefault, g, c);
                continue;
            }
            break;
        }
    }, __importDefault = this && this[K(0x18b) + K(0x190)] || function (c) {
        var V = K;
        return c && c[V(0x18d)] ? c : { 'default': c };
    }, G = {};
G[K(0x179)] = !![], Object[K(0x174) + J(0x17c)](exports, K(0x18d), G);
const express_1 = __importDefault(require(J(0x1a7))), isAuth_1 = __importDefault(require(J(0x19d) + K(0x17b))), SubscriptionController = __importStar(require(J(0x16e) + K(0x1aa) + K(0x185) + K(0x182))), subscriptionRoutes = express_1[K(0x172)][K(0x175)]();
function a() {
    var W = [
        'default',
        '__createBi',
        'defineProp',
        'Router',
        '8qaBmET',
        '4672758VGUGCS',
        'JamTZ',
        'value',
        'bjTyy',
        'are/isAuth',
        'erty',
        '__setModul',
        '635288jxAXyc',
        ':type?',
        '21348486XwIDaW',
        'ptor',
        'troller',
        'create',
        'lplpi',
        'riptionCon',
        'eDefault',
        'njKez',
        'writable',
        'cription',
        'ion',
        '__importDe',
        'ertyDescri',
        '__esModule',
        'wnKLR',
        'eubqb',
        'fault',
        'prototype',
        'g/webhook/',
        'EzoyI',
        '367888BcjjnQ',
        '9vTlDil',
        'DjnBI',
        'ixMYN',
        'nding',
        '0|1|2|4|3',
        'configurab',
        '3451763pvoXPq',
        'FCMyO',
        '../middlew',
        'createSubs',
        'hasOwnProp',
        'split',
        '2144840qkrXMb',
        'call',
        'webhook',
        'Notra',
        'pFmVx',
        'post',
        'express',
        'ion/whazin',
        'getOwnProp',
        'lers/Subsc',
        '3529545OsQhBT',
        'enumerable',
        'anqrP',
        'NBGrf',
        'czoRY',
        '__importSt',
        '../control',
        'Mcnkl',
        '/subscript',
        'get'
    ];
    a = function () {
        return W;
    };
    return a();
}
subscriptionRoutes[J(0x1a6)](K(0x170) + K(0x18a), isAuth_1[K(0x172)], SubscriptionController[J(0x19e) + J(0x189)]), subscriptionRoutes[J(0x1a6)](J(0x170) + J(0x1a8) + K(0x192) + J(0x17f), SubscriptionController[K(0x1a3)]), exports[K(0x172)] = subscriptionRoutes;