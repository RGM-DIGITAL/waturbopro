'use strict';
const J = b, K = b;
(function (c, d) {
    const H = b, I = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(H(0x13a)) / (0xfd * 0x17 + 0x9c7 + -0x2081 * 0x1) + -parseInt(H(0x148)) / (-0x25c4 + -0x4f * 0x35 + -0x120b * -0x3) + parseInt(H(0x15b)) / (0x1 * -0x1086 + -0x95 * -0x29 + -0x754) + parseInt(I(0x163)) / (-0x1bb * -0x13 + -0xb0 * 0xd + -0x17ed) * (-parseInt(I(0x12b)) / (-0x53 * -0x25 + 0x8 * -0x4c1 + 0xe6 * 0x1d)) + -parseInt(H(0x15a)) / (-0x7 * -0x2bf + -0x1 * -0x3f9 + -0x172c) * (-parseInt(I(0x140)) / (0xb57 * -0x1 + -0x596 + 0x10f4 * 0x1)) + parseInt(H(0x14c)) / (-0x9a4 + -0x21e2 * -0x1 + -0x3 * 0x812) * (parseInt(I(0x11e)) / (0xaaf + 0xdd + -0xb83 * 0x1)) + parseInt(H(0x158)) / (-0x68 + -0x1dcd * 0x1 + 0x1e3f) * (parseInt(I(0x14b)) / (0x5 * 0xab + -0x212f + -0x1de3 * -0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xf590c + -0x403 * 0x4a2 + -0x950 * -0x16d));
var __importDefault = this && this[J(0x13c) + K(0x14e)] || function (c) {
    const L = J;
    return c && c[L(0x138)] ? c : { 'default': c };
};
const k = {};
k[J(0x151)] = !![], Object[J(0x132) + J(0x143)](exports, J(0x138), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x18 * -0x20 + 0x22dd + -0x1ebf);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(J(0x123)), InternalMessage_1 = __importDefault(require(K(0x159) + J(0x14f) + J(0x141))), User_1 = __importDefault(require(K(0x159) + K(0x164)));
class MessageService {
    static async [K(0x127) + J(0x129)](o, p, q) {
        const M = K, N = K, r = {};
        r[M(0x13d)] = function (t, u) {
            return t == u;
        }, r[N(0x13e)] = M(0x160), r[M(0x13f)] = M(0x152), r[N(0x12f)] = N(0x154), r[N(0x146)] = N(0x15c), r[N(0x150)] = M(0x122), r[M(0x162)] = function (t, u) {
            return t === u;
        }, r[N(0x12c)] = N(0x156), r[M(0x15f)] = function (t, u) {
            return t === u;
        }, r[M(0x165)] = N(0x12e), r[M(0x147)] = M(0x121);
        const s = r;
        try {
            let t;
            if (s[N(0x13d)](q, s[M(0x13e)])) {
                const u = {};
                u[N(0x12d)] = o, u[M(0x15d)] = p;
                const v = {};
                v[N(0x15d)] = o, v[N(0x12d)] = p;
                const w = {
                        [sequelize_1['Op']['or']]: [
                            u,
                            v
                        ]
                    }, x = {};
                x[M(0x15e)] = User_1[N(0x128)], x['as'] = s[M(0x13f)], x[M(0x142)] = [
                    'id',
                    s[M(0x12f)]
                ];
                const y = {};
                y[M(0x15e)] = User_1[M(0x128)], y['as'] = s[M(0x146)], y[N(0x142)] = [
                    'id',
                    s[M(0x12f)]
                ];
                const z = {};
                z[M(0x137)] = w, z[M(0x135)] = [
                    x,
                    y
                ], z[N(0x145)] = [s[M(0x150)]], z[N(0x133)] = 0x1f4, t = await InternalMessage_1[M(0x128)][N(0x157)](z);
            } else {
                if (s[M(0x162)](s[M(0x12c)], s[M(0x12c)])) {
                    const A = {};
                    A[N(0x130)] = p;
                    const B = {};
                    B[N(0x15e)] = User_1[M(0x128)], B['as'] = s[M(0x13f)], B[N(0x142)] = [
                        'id',
                        s[N(0x12f)]
                    ];
                    const C = {};
                    C[N(0x15e)] = User_1[M(0x128)], C['as'] = s[N(0x146)], C[M(0x142)] = [
                        'id',
                        s[N(0x12f)]
                    ];
                    const D = {};
                    D[M(0x137)] = A, D[M(0x135)] = [
                        B,
                        C
                    ], D[N(0x145)] = [s[M(0x150)]], D[M(0x133)] = 0x1f4, t = await InternalMessage_1[N(0x128)][N(0x157)](D);
                } else {
                    const F = {};
                    return F[N(0x128)] = j, g && h[M(0x138)] ? i : F;
                }
            }
            return t;
        } catch (F) {
            if (s[M(0x15f)](s[M(0x165)], s[N(0x147)]))
                throw d;
            else
                throw F;
        }
    }
    static async [K(0x13b) + J(0x131)](d) {
        const O = K, P = J, e = {};
        e[O(0x14a)] = function (g, h) {
            return g === h;
        }, e[O(0x14d)] = P(0x134);
        const f = e;
        try {
            if (f[P(0x14a)](f[O(0x14d)], f[P(0x14d)]))
                return await InternalMessage_1[P(0x128)][P(0x124)](d);
            else
                throw d;
        } catch (h) {
            throw h;
        }
    }
    static async [K(0x126) + J(0x144) + 'a'](e) {
        const Q = J, R = K, f = {};
        f[Q(0x120)] = R(0x125) + Q(0x153) + Q(0x139), f[R(0x11f)] = function (h, i) {
            return h !== i;
        }, f[R(0x149)] = Q(0x12a);
        const g = f;
        try {
            if (g[Q(0x11f)](g[R(0x149)], g[R(0x149)]))
                throw new d(g[R(0x120)]);
            else {
                const i = await InternalMessage_1[Q(0x128)][Q(0x136)](e);
                if (!i)
                    throw new Error(g[Q(0x120)]);
                const j = {};
                j[Q(0x155)] = !![], await i[Q(0x161)](j);
            }
        } catch (l) {
            throw l;
        }
    }
}
exports[K(0x128)] = MessageService;
function a() {
    const S = [
        'fault',
        'ls/Interna',
        'kNDWb',
        'value',
        'sender',
        'ão\x20encontr',
        'name',
        'isUnread',
        'cMPEx',
        'findAll',
        '4910IfvHRF',
        '../../mode',
        '3312hbOEEj',
        '3015129KMGWdk',
        'receiver',
        'receiverId',
        'model',
        'UOHKN',
        'false',
        'update',
        'HumTA',
        '428sjjvlL',
        'ls/User',
        'LXviX',
        '2097AaRrtq',
        'KTiwp',
        'SlHZB',
        'zqOcT',
        'timestamp',
        'sequelize',
        'create',
        'Mensagem\x20n',
        'marcarMens',
        'listarMens',
        'default',
        'agens',
        'uEEVC',
        '11885fqDIxH',
        'QwMFR',
        'senderId',
        'EblMV',
        'LuIKG',
        'groupId',
        'gem',
        'defineProp',
        'limit',
        'ukXyP',
        'include',
        'findByPk',
        'where',
        '__esModule',
        'ada.',
        '990749kbaeNe',
        'criarMensa',
        '__importDe',
        'uHZEA',
        'juHoD',
        'UJuNM',
        '3563GRjllv',
        'lMessage',
        'attributes',
        'erty',
        'agemNaoLid',
        'order',
        'wnnXS',
        'KAoqi',
        '545690maWtXf',
        'DqsZI',
        'OymIC',
        '18689XHOvqL',
        '1912fnestO',
        'TnVKT'
    ];
    a = function () {
        return S;
    };
    return a();
}