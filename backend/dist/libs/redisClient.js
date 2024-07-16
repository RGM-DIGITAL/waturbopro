'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x303 * 0x5 + 0xc76 + 0x1 * 0x38b);
        let h = e[f];
        return h;
    }, b(c, d);
}
const E = b, F = b;
(function (c, d) {
    const C = b, D = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(C(0x102)) / (0x1bd * -0x2 + -0x1503 + 0x187e) + -parseInt(D(0x136)) / (0xd4 * -0x2f + 0x21df + -0xb9 * -0x7) * (-parseInt(D(0x114)) / (0x6ce + 0x1 * -0x739 + 0x6e)) + parseInt(C(0x11a)) / (-0x62 * -0x17 + 0x190b + 0xb47 * -0x3) * (parseInt(D(0x120)) / (0xc * 0x73 + 0x24c3 * -0x1 + -0x1f64 * -0x1)) + parseInt(D(0x11d)) / (0xc * -0x2cf + 0x2215 + -0x5b) + parseInt(C(0x112)) / (0x40d * -0x2 + 0x2231 + -0x1a10) * (parseInt(C(0xf6)) / (0x1 * -0x2573 + -0x25 * 0x17 + 0x6 * 0x6cd)) + -parseInt(C(0x129)) / (-0x737 + -0xe9 * 0x5 + 0xbcd) + parseInt(C(0x106)) / (-0xf2a + -0xa2 * -0x3a + -0x1580) * (-parseInt(D(0xf4)) / (-0x1c1 * -0x13 + 0xee3 + 0xb * -0x461));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x3 * 0x1819d + -0x1 * -0x4a852 + 0x6267 * -0xf));
function a() {
    const a1 = [
        'object',
        'iOyre',
        'erty',
        'gUdeB',
        'IO_REDIS_D',
        'AhSPs',
        'default',
        'zcAqv',
        '2JHoqYk',
        'parse',
        'bfMwL',
        'XynFg',
        'VWcFl',
        'HWOrT',
        'iQIxM',
        '5888509kamQRS',
        'env',
        '365896iALvys',
        'HtoXp',
        'VkiuA',
        'jzmHm',
        'del',
        'B_SESSION',
        'FCgeL',
        'hlymW',
        'fault',
        'HAZeO',
        'ioredis',
        'EpKyE',
        '307891IxYPtL',
        'fSwtB',
        'set',
        'ASSWORD',
        '10FPJklc',
        '__importDe',
        'iRupB',
        'dGoyu',
        'ORT',
        'getValue',
        'isFXP',
        'JdYUC',
        'removeValu',
        'setValue',
        'tRuxi',
        'MUVhd',
        '63qNLBlC',
        'IO_REDIS_P',
        '1105959GjSTOY',
        'ZjLLx',
        'OEpfd',
        'stringify',
        'tKZeD',
        'yhgIK',
        '317384rjFwYl',
        'buFbJ',
        'ERVER',
        '705822FPsbba',
        'IO_REDIS_S',
        'get',
        '25oCNVyf',
        'OGCqb',
        'wOVZa',
        'dozhT',
        'value',
        'OCgXm',
        'OyRPo',
        'BmsAP',
        'FVtvu',
        '2051307bjWRRp',
        'ZvMzF',
        'qpiQX',
        '__esModule',
        'defineProp'
    ];
    a = function () {
        return a1;
    };
    return a();
}
var __importDefault = this && this[E(0x107) + F(0xfe)] || function (c) {
    const G = F;
    return c && c[G(0x12c)] ? c : { 'default': c };
};
const B = {};
B[F(0x124)] = !![], Object[F(0x12d) + F(0x130)](exports, E(0x12c), B), exports[E(0x10e) + 'e'] = exports[F(0x10f)] = exports[E(0x10b)] = void (-0x2115 * -0x1 + 0xb1 * -0x1b + -0xe6a);
const ioredis_1 = __importDefault(require(F(0x100))), redisClient = new ioredis_1[(E(0x134))]({
        'port': Number(process[E(0xf5)][E(0x113) + F(0x10a)]),
        'host': process[F(0xf5)][F(0x11e) + F(0x11c)],
        'db': Number(process[E(0xf5)][E(0x132) + F(0xfb)]) || 0x1106 + -0x2264 + 0x1167,
        'password': process[E(0xf5)][F(0x113) + F(0x105)] || undefined
    }), getValue = c => {
        const H = F, I = F, d = {
                'HWOrT': function (e, f) {
                    return e(f);
                },
                'jzmHm': function (e, f) {
                    return e(f);
                },
                'JdYUC': function (e, f) {
                    return e || f;
                },
                'zcAqv': function (e, f) {
                    return e === f;
                },
                'buFbJ': H(0x110),
                'gUdeB': function (e, f) {
                    return e !== f;
                },
                'iOyre': H(0x12b),
                'AhSPs': H(0x138),
                'HAZeO': I(0x139),
                'BmsAP': function (e, f) {
                    return e(f);
                },
                'ZvMzF': function (e, f) {
                    return e === f;
                },
                'OCgXm': H(0xf3),
                'OGCqb': function (e, f) {
                    return e(f);
                },
                'tKZeD': function (e, f) {
                    return e === f;
                },
                'MUVhd': I(0x122),
                'hlymW': H(0x101)
            };
        return new Promise((e, f) => {
            const K = H, L = I, g = {
                    'FCgeL': function (h, i) {
                        const J = b;
                        return d[J(0x127)](h, i);
                    }
                };
            d[K(0x118)](d[K(0x111)], d[L(0xfd)]) ? f = g[K(0x117)](h) : redisClient[K(0x11f)](c, (i, j) => {
                const P = K, Q = L, k = {
                        'OEpfd': function (l, m) {
                            const M = b;
                            return d[M(0xf2)](l, m);
                        },
                        'yhgIK': function (l, m) {
                            const N = b;
                            return d[N(0xf9)](l, m);
                        },
                        'isFXP': function (l, m) {
                            const O = b;
                            return d[O(0x10d)](l, m);
                        }
                    };
                if (d[P(0x135)](d[P(0x11b)], d[P(0x11b)])) {
                    if (i)
                        return d[P(0xf9)](f, i);
                    let l;
                    if (j)
                        try {
                            if (d[P(0x131)](d[Q(0x12f)], d[Q(0x133)]))
                                l = JSON[Q(0x137)](d[Q(0x10d)](j, ''));
                            else {
                                if (h)
                                    return k[P(0x116)](i, j);
                                return k[P(0x116)](k, l);
                            }
                        } catch (n) {
                            d[P(0x135)](d[Q(0xff)], d[P(0xff)]) ? l = d[Q(0x127)](String, j) : f = k[Q(0x119)](g, h);
                        }
                    else
                        d[Q(0x12a)](d[Q(0x125)], d[P(0x125)]) ? l = j : f = g[P(0xfc)](g, h);
                    return d[P(0x121)](e, l);
                } else
                    f = g[Q(0x137)](k[P(0x10c)](h, ''));
            });
        });
    };
exports[F(0x10b)] = getValue;
const setValue = (c, d) => {
    const R = F, e = {
            'iRupB': function (f, g) {
                return f(g);
            },
            'dozhT': function (f, g) {
                return f(g);
            },
            'dGoyu': function (f, g) {
                return f === g;
            },
            'HtoXp': R(0x12e)
        };
    return new Promise((f, g) => {
        const S = R, T = R;
        let h;
        e[S(0x109)](typeof d, e[S(0xf7)]) ? h = JSON[S(0x117)](d) : h = e[S(0x123)](String, d), redisClient[T(0x104)](c, h, i => {
            const U = S, V = T;
            if (i)
                return e[U(0x108)](g, i);
            return e[V(0x123)](f, h);
        });
    });
};
exports[E(0x10f)] = setValue;
const removeValue = c => {
    const W = E, d = {
            'ZjLLx': function (e, f) {
                return e(f);
            },
            'FVtvu': function (e, f) {
                return e(f);
            },
            'fSwtB': function (e, f) {
                return e(f);
            },
            'OyRPo': function (e, f) {
                return e !== f;
            },
            'VWcFl': W(0xf8)
        };
    return new Promise((e, f) => {
        const X = W, Y = W;
        if (d[X(0x126)](d[Y(0x13a)], d[Y(0x13a)])) {
            if (g)
                return d[X(0x115)](h, i);
            return d[X(0x128)](j, !![]);
        } else
            redisClient[X(0xfa)](c, h => {
                const Z = Y, a0 = X;
                if (h)
                    return d[Z(0x103)](f, h);
                return d[Z(0x115)](e, !![]);
            });
    });
};
exports[F(0x10e) + 'e'] = removeValue;