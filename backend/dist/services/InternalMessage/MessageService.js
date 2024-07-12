'use strict';
const M = b, N = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x19 * -0xf9 + -0x2d2 * -0x6 + 0x1 * 0x8ed);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const K = b, L = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(K(0x18f)) / (-0xd1c * -0x2 + 0x4c * 0x3b + -0x2bbb) + -parseInt(K(0x1c5)) / (-0x3 * 0xc53 + 0x1525 + 0xfd6) + -parseInt(L(0x18b)) / (0x19bd + -0x513 + 0x137 * -0x11) * (parseInt(K(0x190)) / (0x5a1 + 0x1984 + 0x1f21 * -0x1)) + -parseInt(K(0x1ac)) / (-0x1fa7 + 0x14 * 0xc1 + -0x84c * -0x2) + parseInt(L(0x1c9)) / (-0x17 * 0xb3 + -0xf7d * -0x2 + -0xedf) * (-parseInt(L(0x1b3)) / (0x1 * 0x251 + 0xf91 + -0x28d * 0x7)) + parseInt(L(0x1bc)) / (-0x12d3 * 0x2 + 0xd41 + 0x186d) + parseInt(K(0x1b4)) / (0x1d4 + -0x6b * -0x29 + -0x12ee * 0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xa3 * -0x35 + 0x1 * -0x15f1d + 0x6ce01));
var __importDefault = this && this[M(0x1cb) + N(0x1bf)] || function (c) {
    const O = M;
    return c && c[O(0x1cf)] ? c : { 'default': c };
};
const k = {};
k[M(0x1cd)] = !![], Object[M(0x1d3) + N(0x1a7)](exports, M(0x1cf), k);
const sequelize_1 = require(M(0x1b2)), InternalMessage_1 = __importDefault(require(M(0x1c6) + N(0x1a5) + N(0x193))), User_1 = __importDefault(require(N(0x1c6) + N(0x189)));
class MessageService {
    static async [N(0x1c3) + N(0x1bb)](o, p, q) {
        const P = M, Q = N, r = {};
        r[P(0x1d2)] = Q(0x1a4) + Q(0x1a0) + Q(0x1ba), r[Q(0x19b)] = function (t, u) {
            return t !== u;
        }, r[Q(0x1ab)] = Q(0x1c4), r[Q(0x1af)] = function (t, u) {
            return t == u;
        }, r[P(0x1b8)] = P(0x19c), r[P(0x198)] = function (t, u) {
            return t !== u;
        }, r[Q(0x1ad)] = P(0x1a1), r[P(0x18e)] = Q(0x195), r[Q(0x1b1)] = P(0x1c8), r[Q(0x191)] = Q(0x1ca), r[P(0x1a9)] = Q(0x19a), r[Q(0x1b7)] = P(0x1b5), r[Q(0x1d0)] = Q(0x19f), r[Q(0x188)] = function (t, u) {
            return t === u;
        }, r[P(0x1b6)] = P(0x1a8), r[Q(0x1c1)] = P(0x196);
        const s = r;
        try {
            if (s[P(0x19b)](s[Q(0x1ab)], s[Q(0x1ab)]))
                throw new d(s[P(0x1d2)]);
            else {
                let u;
                if (s[P(0x1af)](q, s[Q(0x1b8)])) {
                    if (s[P(0x198)](s[Q(0x1ad)], s[P(0x18e)])) {
                        const v = {};
                        v[P(0x1a2)] = o, v[Q(0x1b9)] = p;
                        const w = {};
                        w[Q(0x1b9)] = o, w[P(0x1a2)] = p;
                        const x = {
                                [sequelize_1['Op']['or']]: [
                                    v,
                                    w
                                ]
                            }, y = {};
                        y[Q(0x19d)] = User_1[P(0x1aa)], y['as'] = s[P(0x1b1)], y[Q(0x199)] = [
                            'id',
                            s[P(0x191)]
                        ];
                        const z = {};
                        z[P(0x19d)] = User_1[P(0x1aa)], z['as'] = s[Q(0x1a9)], z[Q(0x199)] = [
                            'id',
                            s[P(0x191)]
                        ];
                        const A = {};
                        A[P(0x1a6)] = x, A[Q(0x18d)] = [
                            y,
                            z
                        ], A[Q(0x1c7)] = [s[P(0x1b7)]], A[Q(0x1c0)] = 0x1f4, u = await InternalMessage_1[P(0x1aa)][Q(0x18a)](A);
                    } else
                        throw d;
                } else {
                    if (s[P(0x198)](s[P(0x1d0)], s[Q(0x1d0)]))
                        throw d;
                    else {
                        const D = {};
                        D[P(0x197)] = p;
                        const E = {};
                        E[Q(0x19d)] = User_1[P(0x1aa)], E['as'] = s[Q(0x1b1)], E[P(0x199)] = [
                            'id',
                            s[P(0x191)]
                        ];
                        const F = {};
                        F[Q(0x19d)] = User_1[Q(0x1aa)], F['as'] = s[Q(0x1a9)], F[Q(0x199)] = [
                            'id',
                            s[Q(0x191)]
                        ];
                        const G = {};
                        G[P(0x1a6)] = D, G[Q(0x18d)] = [
                            E,
                            F
                        ], G[P(0x1c7)] = [s[P(0x1b7)]], G[P(0x1c0)] = 0x1f4, u = await InternalMessage_1[P(0x1aa)][Q(0x18a)](G);
                    }
                }
                return u;
            }
        } catch (H) {
            if (s[P(0x188)](s[P(0x1b6)], s[Q(0x1c1)])) {
                const J = {};
                return J[Q(0x1aa)] = j, g && h[Q(0x1cf)] ? i : J;
            } else
                throw H;
        }
    }
    static async [N(0x1ce) + M(0x194)](d) {
        const R = N, S = N, e = {};
        e[R(0x1d4)] = function (g, h) {
            return g !== h;
        }, e[R(0x1ae)] = S(0x1bd), e[R(0x1be)] = R(0x1cc);
        const f = e;
        try {
            return await InternalMessage_1[S(0x1aa)][R(0x1a3)](d);
        } catch (g) {
            if (f[S(0x1d4)](f[S(0x1ae)], f[R(0x1be)]))
                throw g;
            else
                throw d;
        }
    }
    static async [N(0x19e) + M(0x18c) + 'a'](e) {
        const T = N, U = M, f = {};
        f[T(0x1b0)] = U(0x1a4) + T(0x1a0) + T(0x1ba);
        const g = f;
        try {
            const h = await InternalMessage_1[T(0x1aa)][T(0x192)](e);
            if (!h)
                throw new Error(g[U(0x1b0)]);
            const i = {};
            i[T(0x1d1)] = !![], await h[U(0x1c2)](i);
        } catch (j) {
            throw j;
        }
    }
}
function a() {
    const V = [
        'attributes',
        'receiver',
        'oEZCN',
        'false',
        'model',
        'marcarMens',
        'zjzCz',
        'ão\x20encontr',
        'jBoLG',
        'senderId',
        'create',
        'Mensagem\x20n',
        'ls/Interna',
        'where',
        'erty',
        'PORVR',
        'LspFh',
        'default',
        'zORiK',
        '2715260hbvTrM',
        'YizlV',
        'ahUQo',
        'zmlHF',
        'tUOVT',
        'rVAIq',
        'sequelize',
        '2542729gwHcKb',
        '13077675OhBxOb',
        'timestamp',
        'WaTHc',
        'YYeZA',
        'VfjDf',
        'receiverId',
        'ada.',
        'agens',
        '1640000ewjkIj',
        'wtMKb',
        'wnKJD',
        'fault',
        'limit',
        'ioVPV',
        'update',
        'listarMens',
        'ZBlgf',
        '264588zgBsWF',
        '../../mode',
        'order',
        'sender',
        '6KmLnsA',
        'name',
        '__importDe',
        'DptrU',
        'value',
        'criarMensa',
        '__esModule',
        'xghKS',
        'isUnread',
        'IikJj',
        'defineProp',
        'OMRKY',
        'nGPNj',
        'ls/User',
        'findAll',
        '398586ChOVsh',
        'agemNaoLid',
        'include',
        'DcjxL',
        '143811ccWZMO',
        '12NsTRFN',
        'yfurG',
        'findByPk',
        'lMessage',
        'gem',
        'kLMqq',
        'LBVpr',
        'groupId',
        'nXbRx'
    ];
    a = function () {
        return V;
    };
    return a();
}
exports[M(0x1aa)] = MessageService;