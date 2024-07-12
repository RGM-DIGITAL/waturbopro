'use strict';
const E = b, F = b;
(function (c, d) {
    const C = b, D = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(C(0x1a9)) / (-0x1bc1 + 0x1 * -0x2117 + 0x3cd9) + parseInt(D(0x189)) / (0x2d6 * 0xd + 0x1dc6 + -0x42a2) + parseInt(D(0x1ad)) / (0x1 * -0x1fe7 + -0x572 * -0x1 + 0x16 * 0x134) * (-parseInt(D(0x17f)) / (0x2528 + -0x98f * 0x1 + -0x133 * 0x17)) + -parseInt(D(0x1b3)) / (-0x1f87 + -0x1 * 0x2b0 + 0x1c * 0x139) + parseInt(D(0x183)) / (-0x1941 + 0x1 * -0x1a51 + 0x3398) * (parseInt(D(0x181)) / (-0x8 * -0x239 + -0x1572 * -0x1 + -0x2733)) + -parseInt(C(0x18e)) / (-0x1af7 + 0x2108 + -0xf * 0x67) + -parseInt(C(0x185)) / (-0x99 * 0x41 + 0x1c1a + -0x6 * -0x1cc);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x6bafe + 0x3e * 0x13fa + -0x13 * -0x5c52));
var __importDefault = this && this[E(0x1a3) + F(0x1aa)] || function (c) {
    const G = E;
    return c && c[G(0x173)] ? c : { 'default': c };
};
function a() {
    const a9 = [
        'stringify',
        'iVTWE',
        'zQAzj',
        'DnQtT',
        'SMttx',
        'IBSxA',
        'value',
        'FGiwj',
        'vJLKf',
        'XHbyS',
        'parse',
        '312972JWSgWN',
        'oNklD',
        '2191UItHtk',
        'removeValu',
        '7038XdsTRp',
        'xKvqu',
        '2211849aMRldt',
        'IO_REDIS_D',
        'ojSYA',
        'ezzSw',
        '1088692xvTIBb',
        'wLxVM',
        'uBBPN',
        'env',
        'kiDLm',
        '4810656noZynY',
        'KNRXJ',
        'XkFjE',
        'cWXAG',
        'SZFQw',
        'IJTfu',
        'IO_REDIS_S',
        'ioredis',
        'CuvCg',
        'KOoUt',
        'qdsXs',
        'RVJnw',
        'WCSfz',
        'ASSWORD',
        'vvNbC',
        'object',
        'get',
        'ERVER',
        'HzXsO',
        'IO_REDIS_P',
        'getValue',
        '__importDe',
        'LGyPJ',
        'qOema',
        'fnxQc',
        'eFSbk',
        'QqCal',
        '585173xzWmWG',
        'fault',
        'ddivg',
        'iPOQx',
        '12LYjNwu',
        'defineProp',
        'setValue',
        'B_SESSION',
        'DcdUU',
        'set',
        '57875IHGeGe',
        'del',
        'SsZBc',
        'wMyPb',
        'aLQyG',
        'SoCWT',
        'AOcGq',
        'lpCGi',
        'sEOYQ',
        'ORT',
        'vpnlL',
        'zRRIp',
        'NMAPJ',
        'acWsR',
        'default',
        'Kiviu',
        'erty',
        '__esModule'
    ];
    a = function () {
        return a9;
    };
    return a();
}
const B = {};
B[E(0x17a)] = !![], Object[F(0x1ae) + F(0x172)](exports, E(0x173), B), exports[F(0x182) + 'e'] = exports[E(0x1af)] = exports[F(0x1a2)] = void (-0x1be4 + -0x1c28 + 0x380c);
const ioredis_1 = __importDefault(require(F(0x195))), redisClient = new ioredis_1[(F(0x170))]({
        'port': Number(process[E(0x18c)][F(0x1a1) + E(0x1bc)]),
        'host': process[E(0x18c)][E(0x194) + F(0x19f)],
        'db': Number(process[F(0x18c)][F(0x186) + E(0x1b0)]) || -0x1517 * -0x1 + -0xa0 * 0xe + 0x23 * -0x5a,
        'password': process[E(0x18c)][F(0x1a1) + E(0x19b)] || undefined
    }), getValue = c => {
        const H = F, I = F, d = {
                'LGyPJ': function (e, f) {
                    return e(f);
                },
                'IBSxA': function (e, f) {
                    return e || f;
                },
                'xKvqu': function (e, f) {
                    return e(f);
                },
                'DcdUU': function (e, f) {
                    return e === f;
                },
                'iVTWE': H(0x1c0),
                'WCSfz': H(0x17b)
            };
        return new Promise((e, f) => {
            const M = H, N = H, g = {
                    'ezzSw': function (h, i) {
                        const J = b;
                        return d[J(0x1a4)](h, i);
                    },
                    'XkFjE': function (h, i) {
                        const K = b;
                        return d[K(0x179)](h, i);
                    },
                    'SoCWT': function (h, i) {
                        const L = b;
                        return d[L(0x184)](h, i);
                    }
                };
            if (d[M(0x1b1)](d[M(0x175)], d[M(0x19a)])) {
                const i = {};
                return i[N(0x170)] = j, g && h[N(0x173)] ? i : i;
            } else
                redisClient[N(0x19e)](c, (i, j) => {
                    const O = M, P = N;
                    if (i)
                        return g[O(0x188)](f, i);
                    let k;
                    if (j)
                        try {
                            k = JSON[P(0x17e)](g[O(0x190)](j, ''));
                        } catch (l) {
                            k = g[P(0x1b8)](String, j);
                        }
                    else
                        k = j;
                    return g[P(0x188)](e, k);
                });
        });
    };
exports[E(0x1a2)] = getValue;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x140 * 0x1f + 0x21be + -0x470e);
        let h = e[f];
        return h;
    }, b(c, d);
}
const setValue = (c, d) => {
    const Q = F, R = E, e = {
            'zRRIp': function (f, g) {
                return f(g);
            },
            'oNklD': function (f, g) {
                return f !== g;
            },
            'vJLKf': Q(0x1bf),
            'HzXsO': R(0x18a),
            'IJTfu': function (f, g) {
                return f(g);
            },
            'qOema': function (f, g) {
                return f(g);
            },
            'eFSbk': function (f, g) {
                return f === g;
            },
            'wMyPb': Q(0x19d),
            'iPOQx': function (f, g) {
                return f !== g;
            },
            'Kiviu': R(0x1ba),
            'SsZBc': R(0x1b9),
            'DnQtT': function (f, g) {
                return f(g);
            }
        };
    return new Promise((f, g) => {
        const V = R, W = Q, h = {
                'ddivg': function (j, k) {
                    const S = b;
                    return e[S(0x1be)](j, k);
                },
                'CuvCg': function (j, k) {
                    const T = b;
                    return e[T(0x1be)](j, k);
                },
                'SMttx': function (j, k) {
                    const U = b;
                    return e[U(0x180)](j, k);
                },
                'KNRXJ': e[V(0x17c)],
                'vvNbC': e[W(0x1a0)],
                'vpnlL': function (j, k) {
                    const X = W;
                    return e[X(0x193)](j, k);
                },
                'cWXAG': function (j, k) {
                    const Y = W;
                    return e[Y(0x1a5)](j, k);
                }
            };
        let i;
        if (e[W(0x1a7)](typeof d, e[W(0x1b6)]))
            i = JSON[W(0x174)](d);
        else {
            if (e[V(0x1ac)](e[V(0x171)], e[V(0x1b5)]))
                i = e[W(0x177)](String, d);
            else {
                if (g)
                    return h[V(0x1ab)](h, i);
                return h[W(0x196)](j, !![]);
            }
        }
        redisClient[W(0x1b2)](c, i, k => {
            const Z = W, a0 = V;
            if (h[Z(0x178)](h[Z(0x18f)], h[Z(0x19c)])) {
                if (k)
                    return h[Z(0x1bd)](g, k);
                return h[a0(0x191)](f, i);
            } else
                f = h[a0(0x196)](g, h);
        });
    });
};
exports[F(0x1af)] = setValue;
const removeValue = c => {
    const a1 = E, a2 = F, d = {
            'zQAzj': function (e, f) {
                return e(f);
            },
            'fnxQc': function (e, f) {
                return e === f;
            },
            'kiDLm': a1(0x1bb),
            'XHbyS': function (e, f) {
                return e(f);
            },
            'uBBPN': function (e, f) {
                return e(f);
            },
            'ojSYA': function (e, f) {
                return e !== f;
            },
            'RVJnw': a2(0x197),
            'QqCal': a1(0x192)
        };
    return new Promise((e, f) => {
        const a3 = a2, a4 = a2;
        d[a3(0x187)](d[a4(0x199)], d[a3(0x1a8)]) ? redisClient[a4(0x1b4)](c, g => {
            const a7 = a3, a8 = a4, h = {
                    'aLQyG': function (i, j) {
                        const a5 = b;
                        return d[a5(0x176)](i, j);
                    },
                    'qdsXs': function (i, j) {
                        const a6 = b;
                        return d[a6(0x176)](i, j);
                    }
                };
            if (d[a7(0x1a6)](d[a8(0x18d)], d[a8(0x18d)])) {
                if (g)
                    return d[a7(0x17d)](f, g);
                return d[a7(0x18b)](e, !![]);
            } else {
                if (h)
                    return h[a8(0x1b7)](i, j);
                return h[a8(0x198)](k, l);
            }
        }) : f = g[a4(0x174)](h);
    });
};
exports[E(0x182) + 'e'] = removeValue;