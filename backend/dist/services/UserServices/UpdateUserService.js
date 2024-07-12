'use strict';
const O = b, P = b;
(function (c, d) {
    const M = b, N = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(M(0xda)) / (0x17a4 + 0x971 * 0x1 + 0x845 * -0x4) + -parseInt(M(0xee)) / (-0x14eb + -0x1f85 * 0x1 + 0x112 * 0x31) * (parseInt(M(0xcd)) / (-0xf2 * -0x8 + -0x92 * 0xb + 0x3 * -0x6d)) + parseInt(M(0xef)) / (0x1751 + -0x14fb * -0x1 + -0x2c48) + -parseInt(M(0xeb)) / (0x103a + -0xdf2 + -0x243 * 0x1) + -parseInt(M(0xc0)) / (-0x1d7e + 0x147d * -0x1 + 0x1 * 0x3201) * (-parseInt(M(0xaa)) / (-0x112 * 0x13 + 0x4d * 0x67 + 0x6 * -0x1c5)) + parseInt(M(0xae)) / (0x179a + -0x3ad * 0x1 + -0xb * 0x1cf) + parseInt(M(0x9e)) / (-0x28d * -0x4 + 0x178d + -0x21b8);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x12db4d * -0x1 + 0x24 * -0x6e2f + 0x1 * 0x2f4b06));
var __createBinding = this && this[O(0xc4) + P(0xf6)] || (Object[P(0xb1)] ? function (e, f, g, h) {
        const Q = P, R = O, i = {};
        i[Q(0xcb)] = function (n, p) {
            return n === p;
        }, i[Q(0xd8)] = function (n, p) {
            return n in p;
        }, i[Q(0xdc)] = Q(0xb6);
        const j = i;
        if (j[Q(0xcb)](h, undefined))
            h = g;
        var l = Object[R(0xed) + Q(0xea) + Q(0xc8)](f, g);
        if (!l || (j[R(0xd8)](j[R(0xdc)], l) ? !f[Q(0xd1)] : l[R(0xb2)] || l[R(0xb5) + 'le'])) {
            const n = {};
            n[Q(0xc3)] = !![], n[Q(0xb6)] = function () {
                return f[g];
            }, l = n;
        }
        Object[Q(0xb8) + Q(0xd9)](e, h, l);
    } : function (d, e, f, g) {
        const S = O, T = O, h = {};
        h[S(0xe6)] = function (j, l) {
            return j === l;
        };
        const i = h;
        if (i[T(0xe6)](g, undefined))
            g = f;
        d[g] = e[f];
    }), __setModuleDefault = this && this[O(0x9b) + P(0xa2)] || (Object[O(0xb1)] ? function (e, f) {
        const U = P, V = O, g = {};
        g[U(0xe4)] = V(0xbd);
        const h = g, i = {};
        i[U(0xc3)] = !![], i[U(0x9c)] = f, Object[V(0xb8) + U(0xd9)](e, h[V(0xe4)], i);
    } : function (d, e) {
        const W = P, X = O, f = {};
        f[W(0xa7)] = W(0xbd);
        const g = f;
        d[g[W(0xa7)]] = e;
    }), __importStar = this && this[O(0x9a) + 'ar'] || function (c) {
        const Y = P, Z = P, d = {
                'UZbwc': Y(0xe9),
                'WBfrw': function (i, j, l) {
                    return i(j, l);
                },
                'KhmrQ': function (i, j) {
                    return i != j;
                },
                'RNimY': function (i, j) {
                    return i !== j;
                },
                'fVPPm': Z(0xbd),
                'nKONh': function (i, j, l, m) {
                    return i(j, l, m);
                }
            }, e = d[Y(0xad)][Z(0xe5)]('|');
        let f = -0xe71 + 0x13 * 0x145 + -0xb1 * 0xe;
        while (!![]) {
            switch (e[f++]) {
            case '0':
                d[Z(0xc9)](__setModuleDefault, g, c);
                continue;
            case '1':
                return g;
            case '2':
                var g = {};
                continue;
            case '3':
                if (c && c[Y(0xd1)])
                    return c;
                continue;
            case '4':
                if (d[Z(0xe0)](c, null)) {
                    for (var h in c)
                        if (d[Z(0xa0)](h, d[Z(0xce)]) && Object[Y(0xb4)][Z(0xd7) + Y(0xd9)][Z(0xba)](c, h))
                            d[Y(0xaf)](__createBinding, g, c, h);
                }
                continue;
            }
            break;
        }
    }, __importDefault = this && this[P(0xc2) + P(0xbc)] || function (c) {
        const a0 = P;
        return c && c[a0(0xd1)] ? c : { 'default': c };
    };
const G = {};
G[P(0x9c)] = !![], Object[P(0xb8) + O(0xd9)](exports, P(0xd1), G);
const Yup = __importStar(require(O(0xf5))), AppError_1 = __importDefault(require(O(0xb7) + P(0xd2) + 'r')), Queue_1 = __importDefault(require(P(0xc5) + O(0xd6))), User_1 = __importDefault(require(P(0xc5) + P(0xa8))), UsersQueues_1 = __importDefault(require(P(0xc5) + P(0xcf) + P(0xa5))), UpdateUserService = async ({
        userData: l,
        userId: m,
        tenantId: n
    }) => {
        const a1 = O, a2 = O, o = {};
        o[a1(0xb0)] = function (D, E) {
            return D === E;
        }, o[a2(0xab)] = a1(0xac), o[a1(0xc7)] = a1(0xf2), o[a2(0xa9)] = a1(0x9f), o[a2(0xf0)] = function (D, E) {
            return D === E;
        }, o[a1(0xc1)] = a1(0xa1), o[a1(0xd4)] = a1(0xa4) + a2(0xa6), o[a1(0xd0)] = function (D, E) {
            return D === E;
        }, o[a1(0xec)] = a1(0xde), o[a2(0xc6)] = a2(0xf3);
        const p = o, q = {};
        q['id'] = m, q[a2(0xbe)] = n;
        const r = {};
        r[a2(0xbb)] = q, r[a2(0xe3)] = [
            p[a2(0xab)],
            'id',
            p[a2(0xc7)],
            p[a1(0xa9)]
        ];
        const s = await User_1[a2(0xbd)][a1(0xe7)](r);
        if (!s) {
            if (p[a2(0xf0)](p[a2(0xc1)], p[a1(0xc1)]))
                throw new AppError_1[(a1(0xbd))](p[a2(0xd4)], -0xda6 + 0x1 * -0xb47 + 0x1a81);
            else {
                if (p[a1(0xb0)](B, l))
                    m = n;
                o[p] = q[r];
            }
        }
        const t = Yup[a1(0xb9)]()[a2(0xd3)]({
                'name': Yup[a1(0xdb)]()[a1(0xe2)](0x22c6 + -0x5b * 0x1b + -0x192b),
                'email': Yup[a1(0xdb)]()[a1(0xf2)](),
                'profile': Yup[a1(0xdb)](),
                'password': Yup[a2(0xdb)]()
            }), {
                email: u,
                password: v,
                profile: w,
                name: x,
                queues: y
            } = l;
        try {
            const E = {};
            E[a1(0xf2)] = u, E[a2(0x9d)] = v, E[a2(0x9f)] = w, E[a1(0xac)] = x, await t[a1(0xdf)](E);
        } catch (F) {
            throw new AppError_1[(a2(0xbd))](F?.[a1(0xb3)]);
        }
        if (y) {
            if (p[a2(0xd0)](p[a1(0xec)], p[a1(0xec)])) {
                const H = {};
                H[a1(0xe1)] = m;
                const I = {};
                I[a2(0xbb)] = H, await UsersQueues_1[a2(0xbd)][a1(0xcc)](I), await Promise[a2(0xf4)](y[a2(0xe8)](async J => {
                    const a3 = a2, a4 = a1, K = J?.['id'] || J, L = {};
                    L[a3(0xbf)] = K, L[a3(0xe1)] = m, await UsersQueues_1[a3(0xbd)][a4(0xd5)](L);
                }));
            } else {
                const K = {};
                K[a1(0xc3)] = !![], K[a1(0xb6)] = function () {
                    return K[A];
                }, f = K;
            }
        }
        const z = {};
        z[a2(0xf2)] = u, z[a2(0x9d)] = v, z[a2(0x9f)] = w, z[a2(0xac)] = x, await s[a1(0xdd)](z);
        const A = {};
        A[a2(0xe3)] = [
            'id',
            p[a1(0xab)],
            p[a1(0xc7)],
            p[a2(0xa9)]
        ], A[a1(0xca)] = [{
                'model': Queue_1[a2(0xbd)],
                'attributes': [
                    'id',
                    p[a1(0xc6)]
                ]
            }], await s[a1(0xf1)](A);
        const B = {};
        B['id'] = s['id'], B[a1(0xac)] = s[a2(0xac)], B[a1(0xf2)] = s[a1(0xf2)], B[a2(0x9f)] = s[a1(0x9f)], B[a2(0xa3)] = s[a2(0xa3)];
        const C = B;
        return C;
    };
exports[P(0xbd)] = UpdateUserService;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x4f * 0x65 + -0x100 * -0x2 + -0x2091);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const a5 = [
        'gsHRq',
        '__esModule',
        'rs/AppErro',
        'shape',
        'ClJBl',
        'upsert',
        'ls/Queue',
        'hasOwnProp',
        'jNGEx',
        'erty',
        '1326270UXSOIo',
        'string',
        'FAuyc',
        'update',
        'VKRAE',
        'validate',
        'KhmrQ',
        'userId',
        'min',
        'attributes',
        'FACtC',
        'split',
        'KYPbW',
        'findOne',
        'map',
        '3|2|4|0|1',
        'ertyDescri',
        '6487800jmnqYg',
        'rBDuU',
        'getOwnProp',
        '2Imxrmb',
        '3542196KdMhQm',
        'WlNLv',
        'reload',
        'email',
        'queue',
        'all',
        'yup',
        'nding',
        '__importSt',
        '__setModul',
        'value',
        'password',
        '25035021UEfbEZ',
        'profile',
        'RNimY',
        'foGVg',
        'eDefault',
        'queues',
        'ERR_NO_USE',
        'eues',
        'R_FOUND',
        'BtXHr',
        'ls/User',
        'MSMFx',
        '6078373leXhsT',
        'lUmaf',
        'name',
        'UZbwc',
        '1953912QTmwjW',
        'nKONh',
        'DhaNK',
        'create',
        'writable',
        'message',
        'prototype',
        'configurab',
        'get',
        '../../erro',
        'defineProp',
        'object',
        'call',
        'where',
        'fault',
        'default',
        'tenantId',
        'queueId',
        '6bcELnO',
        'cIYjO',
        '__importDe',
        'enumerable',
        '__createBi',
        '../../mode',
        'XFGaa',
        'rdfAt',
        'ptor',
        'WBfrw',
        'include',
        'XAhPr',
        'destroy',
        '3923427VOcXgd',
        'fVPPm',
        'ls/UsersQu'
    ];
    a = function () {
        return a5;
    };
    return a();
}