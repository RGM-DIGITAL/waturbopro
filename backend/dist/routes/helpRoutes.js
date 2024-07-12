'use strict';
var J = b, K = b;
(function (c, d) {
    var H = b, I = b, e = c();
    while (!![]) {
        try {
            var f = -parseInt(H(0x189)) / (0x47f * -0x3 + -0x1 * -0xaab + 0x2d3) + -parseInt(H(0x16b)) / (-0x624 + -0x13c1 + 0x19e7) + -parseInt(H(0x17e)) / (-0xc8e + -0x54d * 0x1 + 0x11de) + parseInt(H(0x19a)) / (-0x5bf * -0x3 + -0x7 * 0x21d + -0x26e) * (-parseInt(H(0x16d)) / (0x127 + 0x1889 + 0x19ab * -0x1)) + parseInt(H(0x17c)) / (0x1 * 0x1bfe + -0x1 * -0x11a7 + -0x2d9f) * (-parseInt(H(0x190)) / (0x2060 + -0x250f * -0x1 + -0x2 * 0x22b4)) + -parseInt(H(0x185)) / (0x17 * 0x101 + -0x1c * 0x120 + 0x871) + parseInt(I(0x17b)) / (-0x1b * -0x6d + -0xd5f + 0x1e9 * 0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x146 * -0x2a7 + 0xb8162 + -0x21986));
function b(c, d) {
    var e = a();
    return b = function (f, g) {
        f = f - (-0x2 * 0x178 + 0x21f7 + -0x1da7);
        var h = e[f];
        return h;
    }, b(c, d);
}
var __createBinding = this && this[J(0x18c) + K(0x184)] || (Object[K(0x17d)] ? function (d, e, f, g) {
        var L = K, M = J, h = {};
        h[L(0x163)] = M(0x175), h[L(0x1a1)] = function (l, n) {
            return l !== n;
        }, h[M(0x18a)] = M(0x168), h[M(0x191)] = M(0x16e), h[L(0x182)] = function (l, n) {
            return l === n;
        }, h[L(0x1a5)] = function (l, n) {
            return l in n;
        }, h[L(0x199)] = L(0x173);
        var i = h;
        if (i[M(0x182)](g, undefined))
            g = f;
        var j = Object[M(0x192) + M(0x171) + M(0x17f)](e, f);
        (!j || (i[L(0x1a5)](i[L(0x199)], j) ? !e[L(0x176)] : j[M(0x16c)] || j[M(0x1a7) + 'le'])) && (j = {
            'enumerable': !![],
            'get': function () {
                var N = L, O = M, l = {};
                l[N(0x180)] = i[O(0x163)];
                var n = l;
                if (i[N(0x1a1)](i[N(0x18a)], i[O(0x191)]))
                    return e[f];
                else {
                    var q = {};
                    q[N(0x167)] = !![], q[O(0x17a)] = h, f[O(0x193) + N(0x162)](g, n[N(0x180)], q);
                }
            }
        }), Object[M(0x193) + L(0x162)](d, g, j);
    } : function (d, e, f, g) {
        var P = J, Q = J, h = {};
        h[P(0x19e)] = function (j, l) {
            return j === l;
        };
        var i = h;
        if (i[P(0x19e)](g, undefined))
            g = f;
        d[g] = e[f];
    }), __setModuleDefault = this && this[J(0x19f) + J(0x178)] || (Object[K(0x17d)] ? function (e, f) {
        var R = J, S = J, g = {};
        g[R(0x18b)] = S(0x175);
        var h = g, i = {};
        i[R(0x167)] = !![], i[R(0x17a)] = f, Object[R(0x193) + R(0x162)](e, h[R(0x18b)], i);
    } : function (d, e) {
        var T = J, U = J, f = {};
        f[T(0x174)] = T(0x175);
        var g = f;
        d[g[U(0x174)]] = e;
    }), __importStar = this && this[J(0x198) + 'ar'] || function (c) {
        var V = J, W = J, d = {
                'rVroX': V(0x197),
                'WgqeV': function (i, j, l) {
                    return i(j, l);
                },
                'kJVey': function (i, j) {
                    return i != j;
                },
                'ZkvLC': function (i, j) {
                    return i !== j;
                },
                'uvDzi': V(0x175),
                'cXype': function (i, j, l, m) {
                    return i(j, l, m);
                }
            }, e = d[V(0x181)][W(0x169)]('|'), f = 0x2ad * 0x3 + 0x1fc3 + -0x27ca;
        while (!![]) {
            switch (e[f++]) {
            case '0':
                d[V(0x195)](__setModuleDefault, g, c);
                continue;
            case '1':
                return g;
            case '2':
                var g = {};
                continue;
            case '3':
                if (c && c[V(0x176)])
                    return c;
                continue;
            case '4':
                if (d[W(0x161)](c, null)) {
                    for (var h in c)
                        if (d[W(0x1a3)](h, d[W(0x1a6)]) && Object[W(0x160)][V(0x196) + V(0x162)][V(0x19d)](c, h))
                            d[V(0x177)](__createBinding, g, c, h);
                }
                continue;
            }
            break;
        }
    }, __importDefault = this && this[J(0x19c) + J(0x16f)] || function (c) {
        var X = K;
        return c && c[X(0x176)] ? c : { 'default': c };
    }, G = {};
G[K(0x17a)] = !![], Object[J(0x193) + K(0x162)](exports, J(0x176), G);
const express_1 = __importDefault(require(K(0x166))), isAuth_1 = __importDefault(require(K(0x164) + J(0x186))), HelpController = __importStar(require(J(0x172) + J(0x1a2) + K(0x18e))), routes = express_1[J(0x175)][J(0x1a4)]();
function a() {
    var Y = [
        'get',
        'FSUIJ',
        'default',
        '__esModule',
        'cXype',
        'eDefault',
        'store',
        'value',
        '26800740PVltTZ',
        '10740FqiRFz',
        'create',
        '1562067bIIQbU',
        'ptor',
        'xNurJ',
        'rVroX',
        'PtYTc',
        '/helps/lis',
        'nding',
        '2755008vSOycO',
        'are/isAuth',
        'show',
        'put',
        '118648tgBtQk',
        'eyxEj',
        'aetpT',
        '__createBi',
        '/helps',
        'ontroller',
        'remove',
        '749mXoELN',
        'vdvpl',
        'getOwnProp',
        'defineProp',
        '/helps/:id',
        'WgqeV',
        'hasOwnProp',
        '3|2|4|0|1',
        '__importSt',
        'GHpzG',
        '304fALZMW',
        'findList',
        '__importDe',
        'call',
        'JGhPQ',
        '__setModul',
        'delete',
        'XFIAZ',
        'lers/HelpC',
        'ZkvLC',
        'Router',
        'qtlbI',
        'uvDzi',
        'configurab',
        'prototype',
        'kJVey',
        'erty',
        'Vbpfy',
        '../middlew',
        'post',
        'express',
        'enumerable',
        'AmJIz',
        'split',
        'index',
        '1295574uXjvND',
        'writable',
        '49985hKKDcX',
        'VOKeR',
        'fault',
        'update',
        'ertyDescri',
        '../control'
    ];
    a = function () {
        return Y;
    };
    return a();
}
routes[J(0x173)](J(0x183) + 't', isAuth_1[K(0x175)], HelpController[K(0x19b)]), routes[J(0x173)](J(0x18d), isAuth_1[K(0x175)], HelpController[J(0x16a)]), routes[K(0x173)](K(0x194), isAuth_1[J(0x175)], HelpController[K(0x187)]), routes[J(0x165)](J(0x18d), isAuth_1[J(0x175)], HelpController[K(0x179)]), routes[K(0x188)](J(0x194), isAuth_1[K(0x175)], HelpController[K(0x170)]), routes[K(0x1a0)](J(0x194), isAuth_1[K(0x175)], HelpController[K(0x18f)]), exports[K(0x175)] = routes;