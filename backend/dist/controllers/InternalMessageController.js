'use strict';
const Y = b, Z = b;
(function (c, d) {
    const W = b, X = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(W(0x1a7)) / (-0x9e3 + -0x73f + 0x1123) + parseInt(W(0x1e1)) / (-0x157a * 0x1 + 0x2703 * 0x1 + -0x1187) + parseInt(X(0x191)) / (-0x21fa + 0x13 * 0xa2 + 0x15f7) * (parseInt(W(0x22b)) / (0xa + 0x711 * -0x1 + -0x259 * -0x3)) + parseInt(X(0x20b)) / (-0x17e1 * 0x1 + -0x6d5 + 0x1ebb) * (parseInt(X(0x1f2)) / (-0x1de1 * -0x1 + -0x2132 + 0x5f * 0x9)) + -parseInt(W(0x1f4)) / (-0x18 * -0x94 + 0x7f4 + -0x15cd) * (-parseInt(W(0x1ab)) / (-0x486 + 0x4be * -0x4 + -0xbc3 * -0x2)) + parseInt(X(0x231)) / (-0x1a3 + -0x2130 + 0x22dc * 0x1) * (-parseInt(W(0x21b)) / (-0x2 * 0xaf4 + -0x3e * -0x9e + -0x1052)) + parseInt(W(0x195)) / (-0x772 + 0x832 + -0xb5) * (-parseInt(X(0x1c4)) / (-0x33 * -0x92 + 0x11 * -0x23 + -0x1ab7));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xa18cd + -0x36bf9 * 0x2 + 0x7 * 0x39381));
var __importDefault = this && this[Y(0x233) + Y(0x223)] || function (c) {
    const a0 = Z;
    return c && c[a0(0x1ce)] ? c : { 'default': c };
};
const o = {};
o[Y(0x22f)] = !![], Object[Z(0x1dd) + Z(0x212)](exports, Z(0x1ce), o), exports[Y(0x1b9) + Z(0x1ac) + 'ge'] = exports[Z(0x1e4) + Y(0x1aa) + 'a'] = exports[Y(0x1d2) + Z(0x192)] = exports[Z(0x18f) + Z(0x193)] = void (0x9 * 0x347 + -0x1870 + 0x23 * -0x25);
const socket_1 = require(Y(0x1f5) + Z(0x208)), InternalMessage_1 = __importDefault(require(Z(0x1b6) + Z(0x215) + Y(0x19a))), User_1 = __importDefault(require(Z(0x1b6) + Z(0x229))), ListCountUnreadMessage_1 = __importDefault(require(Z(0x1a4) + Z(0x1ca) + Y(0x1a5) + Y(0x1f9) + Y(0x1a0))), MessageService_1 = __importDefault(require(Y(0x1a4) + Z(0x1ca) + Y(0x1a6) + Z(0x217) + 'ce')), ReadMessageService_1 = __importDefault(require(Y(0x1a4) + Y(0x1ca) + Y(0x21a) + Y(0x21f) + Z(0x20c))), logger_1 = require(Y(0x22a) + Y(0x201)), listarMensagens = async (f, g) => {
        const a1 = Z, a2 = Z, h = {};
        h[a1(0x1e5)] = function (j, k) {
            return j !== k;
        }, h[a1(0x1c6)] = a2(0x1d0), h[a2(0x1a8)] = a1(0x194), h[a2(0x19f)] = function (j, k) {
            return j === k;
        }, h[a1(0x203)] = a2(0x1c5), h[a1(0x222)] = a1(0x1ee), h[a2(0x1d5)] = a2(0x1b4) + a1(0x202) + a2(0x1f7) + a2(0x210);
        const i = h;
        try {
            if (i[a1(0x1e5)](i[a2(0x1c6)], i[a1(0x1a8)])) {
                const {id: j} = f[a1(0x1cd)], {userId: k} = f[a2(0x1be)], {isGroup: l} = f[a2(0x19d)], m = await MessageService_1[a2(0x1fd)][a1(0x18f) + a2(0x193)](j, k, l), n = {};
                return n[a1(0x1bb)] = m, g[a1(0x1e3)](-0x1 * 0x1cdf + -0x2 * -0x1128 + -0x4a9)[a2(0x20f)](n);
            } else {
                const q = {};
                return q[a2(0x1fd)] = j, g && h[a1(0x1ce)] ? i : q;
            }
        } catch (q) {
            if (i[a2(0x19f)](i[a1(0x203)], i[a2(0x222)])) {
                const s = f[a2(0x1f3)][a2(0x1bd)]('/')[0x2118 + -0x67c + 0x3cd * -0x7][a2(0x1bd)](';')[-0x288 + -0xd5f * -0x1 + 0xf * -0xb9];
                g[a1(0x1a1)] = new h()[a2(0x1fa)]() + '.' + s;
            } else {
                console[a1(0x214)](q);
                const s = {};
                return s[a2(0x214)] = i[a1(0x1d5)], g[a1(0x1e3)](0x2066 + -0x83 * 0x4 + -0x1c66)[a2(0x20f)](s);
            }
        }
    };
exports[Z(0x18f) + Z(0x193)] = listarMensagens;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x610 + -0x1323 + 0xe9d);
        let h = e[f];
        return h;
    }, b(c, d);
}
const criarMensagem = async (n, p) => {
    const a3 = Z, a4 = Z, q = {};
    q[a3(0x216)] = a3(0x1b4) + a3(0x1cb) + a4(0x1e2) + a3(0x205), q[a3(0x227)] = function (s, t) {
        return s !== t;
    }, q[a3(0x1a2)] = a3(0x18b), q[a4(0x20e)] = a4(0x1f6), q[a4(0x1c7)] = function (s, t) {
        return s === t;
    }, q[a4(0x1f8)] = a4(0x18e), q[a3(0x1de)] = a3(0x19c), q[a3(0x1da)] = a4(0x1ba), q[a4(0x1c9)] = a3(0x1b0), q[a3(0x207)] = a3(0x1ea) + a3(0x232) + a4(0x218), q[a3(0x1c0)] = a4(0x21c), q[a4(0x1b1)] = function (s, t) {
        return s === t;
    }, q[a4(0x18c)] = a4(0x22c), q[a3(0x198)] = function (s, t) {
        return s > t;
    }, q[a3(0x1ec)] = a3(0x220), q[a3(0x1cf)] = a4(0x1a3), q[a3(0x1ae)] = a3(0x224), q[a3(0x1eb)] = a3(0x1c8);
    const r = q;
    try {
        const {
                text: s,
                timestamp: t,
                receiverId: u,
                isGroup: v
            } = n[a3(0x1d3)], {
                id: w,
                tenantId: x
            } = n[a3(0x1cd)], y = n[a4(0x1a9)], z = (0x509 * 0x6 + 0xe5a + -0x2c90, socket_1[a3(0x1c2)])(), A = {
                'text': s,
                'timestamp': t,
                'receiverId': u,
                'senderId': w,
                'tenantId': x,
                'groupId': null,
                'mediaType': r[a4(0x1c0)],
                'mediaUrl': undefined,
                'createdAt': new Date(),
                'updatedAt': new Date()
            };
        (r[a4(0x1b1)](v, !![]) || r[a3(0x1b1)](v, r[a3(0x18c)])) && (A[a3(0x20a)] = undefined, A[a4(0x1db)] = u);
        let B = {};
        y && r[a3(0x198)](y[a3(0x1f0)], 0x1 * 0x135 + 0x253d + -0x85 * 0x4a) ? await Promise[a3(0x1d6)](y[a3(0x18d)](async M => {
            const a5 = a4, a6 = a3, N = {};
            N[a5(0x1e9)] = r[a5(0x216)];
            const O = N;
            if (r[a6(0x227)](r[a5(0x1a2)], r[a5(0x20e)])) {
                try {
                    if (r[a5(0x1c7)](r[a5(0x1f8)], r[a6(0x1de)])) {
                        E[a6(0x214)](F);
                        const S = {};
                        return S[a6(0x214)] = O[a6(0x1e9)], H[a6(0x1e3)](-0x1a * -0x1e + -0x175a + 0x1642)[a6(0x20f)](S);
                    } else {
                        if (!M[a6(0x1a1)]) {
                            if (r[a5(0x1c7)](r[a6(0x1da)], r[a6(0x1c9)]))
                                D[a6(0x1d4)][a6(0x214)](E);
                            else {
                                const T = M[a5(0x1f3)][a5(0x1bd)]('/')[0x21ef + 0x146 + -0x119a * 0x2][a6(0x1bd)](';')[-0x1 * -0x1edb + -0x1c4 * 0xa + -0x1f * 0x6d];
                                M[a5(0x1a1)] = new Date()[a6(0x1fa)]() + '.' + T;
                            }
                        }
                    }
                } catch (U) {
                    logger_1[a5(0x1d4)][a5(0x214)](U);
                }
                const P = {
                        ...A,
                        'text': M[a5(0x200) + 'me'],
                        'mediaUrl': M[a5(0x1a1)],
                        'mediaType': M[a6(0x228)] || M[a5(0x1f3)][a5(0x197)](-0x1c99 + 0x3fb + 0x189e, M[a6(0x1f3)][a6(0x206)]('/'))
                    }, Q = await MessageService_1[a6(0x1fd)][a6(0x1d2) + a6(0x192)](P);
                B = await InternalMessage_1[a5(0x1fd)][a5(0x196)](Q['id']);
                if (!B)
                    throw new Error(r[a6(0x207)]);
            } else
                F[a5(0x20a)] = H, I[a5(0x1db)] = J;
        })) : B = await MessageService_1[a3(0x1fd)][a4(0x1d2) + a4(0x192)](A);
        const C = {};
        C['id'] = B['id'];
        const D = {};
        D[a3(0x211)] = User_1[a3(0x1fd)], D['as'] = r[a3(0x1ec)], D[a3(0x22e)] = [
            'id',
            r[a3(0x1cf)]
        ];
        const E = {};
        E[a4(0x211)] = User_1[a3(0x1fd)], E['as'] = r[a4(0x1ae)], E[a4(0x22e)] = [
            'id',
            r[a3(0x1cf)]
        ];
        const F = {};
        F[a4(0x1ad)] = C, F[a3(0x1d7)] = [
            D,
            E
        ];
        const G = await InternalMessage_1[a4(0x1fd)][a3(0x213)](F), H = {};
        H['id'] = G['id'], H[a4(0x20a)] = G[a4(0x20a)], H[a4(0x228)] = G[a3(0x228)], H[a3(0x20d)] = G[a4(0x20d)], H[a3(0x1e7)] = G[a3(0x1e7)], H[a4(0x221)] = w, H[a3(0x1bc)] = G[a3(0x1bc)], H[a3(0x220)] = G[a4(0x220)], H[a4(0x1db)] = G[a4(0x1db)], H[a4(0x224)] = G[a4(0x224)], H[a4(0x19b)] = s;
        const I = {};
        I[a4(0x1b8)] = r[a3(0x1eb)], I[a4(0x1d8)] = H, z[a3(0x1c1)](x + (a4(0x1ff) + a3(0x1ef) + 'no'), I);
        const J = {};
        J['id'] = G['id'], J[a3(0x20a)] = u, J[a3(0x221)] = w, J[a3(0x228)] = G[a4(0x228)], J[a4(0x1bc)] = G[a3(0x1bc)], J[a3(0x220)] = G[a3(0x220)], J[a4(0x1db)] = G[a3(0x1db)], J[a4(0x224)] = G[a3(0x224)], J[a3(0x19b)] = s;
        const K = {};
        K[a4(0x1b8)] = r[a3(0x1eb)], K[a4(0x1d8)] = J, z[a3(0x1c1)](x + (a3(0x1ff) + a4(0x1ef) + a3(0x1f1) + a3(0x1e0)), K);
        const L = {};
        return L[a4(0x22d)] = G, p[a4(0x1e3)](-0x1e74 + 0x1 * -0x1969 + 0x971 * 0x6)[a3(0x20f)](L);
    } catch (M) {
        console[a4(0x214)](M);
        const N = {};
        return N[a3(0x214)] = r[a4(0x216)], p[a3(0x1e3)](-0x1912 + 0x2585 + 0xa7f * -0x1)[a3(0x20f)](N);
    }
};
exports[Y(0x1d2) + Z(0x192)] = criarMensagem;
const marcarMensagemNaoLida = async (f, g) => {
    const a7 = Y, a8 = Z, h = {
            'aiHUF': a7(0x1c8),
            'IxrrT': function (i, j) {
                return i(j);
            },
            'JVPKs': a8(0x1df) + a8(0x1e6) + a8(0x209),
            'eFweF': a8(0x1b4) + a8(0x1b5) + a7(0x1e8) + a7(0x199) + a8(0x19e)
        };
    try {
        const {contactId: i} = f[a7(0x1be)], {
                id: j,
                tenantId: k
            } = f[a7(0x1cd)], {isGroup: l} = f[a7(0x1d3)], m = (-0x2410 * -0x1 + 0x137 * 0x2 + -0x267e, socket_1[a7(0x1c2)])(), n = {};
        n[a8(0x1d9)] = j, n[a7(0x221)] = i, n[a8(0x1fb)] = l, await (0x1 * 0x1a43 + -0xc7 * 0x25 + 0x5 * 0x80, ReadMessageService_1[a7(0x1fd)])(n), m[a8(0x1c1)](k + (a7(0x1b7) + a8(0x18a) + a7(0x21d)), {
            'action': h[a8(0x1bf)],
            'data': {
                'receiverId': j,
                'isGroup': l,
                'senderId': h[a7(0x1b3)](Number, i)
            }
        });
        const p = {};
        return p[a7(0x1fe)] = h[a7(0x1d1)], g[a7(0x1e3)](0x2a * -0xbd + -0x2521 + 0x44eb)[a7(0x20f)](p);
    } catch (q) {
        console[a8(0x214)](q);
        const r = {};
        return r[a8(0x214)] = h[a7(0x225)], g[a8(0x1e3)](0x20b * -0xe + 0x3df * 0x3 + 0x12f1)[a7(0x20f)](r);
    }
};
exports[Y(0x1e4) + Z(0x1aa) + 'a'] = marcarMensagemNaoLida;
const listCountUnreadMessage = async (f, g) => {
    const a9 = Y, aa = Z, h = {};
    h[a9(0x1cc)] = aa(0x1b4) + aa(0x1cb) + aa(0x1fc) + a9(0x226) + aa(0x1c3), h[a9(0x1b2)] = function (j, k) {
        return j !== k;
    }, h[aa(0x204)] = a9(0x1dc), h[a9(0x21e)] = a9(0x190), h[a9(0x230)] = function (j, k) {
        return j !== k;
    }, h[a9(0x219)] = aa(0x1af);
    const i = h;
    try {
        if (i[aa(0x1b2)](i[aa(0x204)], i[a9(0x21e)])) {
            const {id: j} = f[a9(0x1cd)], k = await (0xd70 * -0x1 + 0x25 * 0x73 + -0x32f * 0x1, ListCountUnreadMessage_1[a9(0x1fd)])(j), l = {};
            return l[aa(0x1ed)] = k, g[a9(0x1e3)](-0x1c0a + 0xc7 * 0x25 + 0xf)[aa(0x20f)](l);
        } else {
            if (!g[aa(0x1a1)]) {
                const p = k[a9(0x1f3)][a9(0x1bd)]('/')[-0x13 * -0x170 + -0x1 * -0x2693 + -0x1 * 0x41e2][a9(0x1bd)](';')[0x8c + 0x197 * 0x8 + 0x46c * -0x3];
                l[aa(0x1a1)] = new m()[aa(0x1fa)]() + '.' + p;
            }
        }
    } catch (n) {
        if (i[a9(0x230)](i[a9(0x219)], i[a9(0x219)])) {
            f[a9(0x214)](g);
            const q = {};
            return q[a9(0x214)] = i[a9(0x1cc)], h[a9(0x1e3)](-0x1e08 + -0x59f + -0xc89 * -0x3)[a9(0x20f)](q);
        } else {
            console[aa(0x214)](n);
            const q = {};
            return q[aa(0x214)] = i[aa(0x1cc)], g[a9(0x1e3)](0x72c + 0x39f + -0x8d7 * 0x1)[a9(0x20f)](q);
        }
    }
};
exports[Y(0x1b9) + Y(0x1ac) + 'ge'] = listCountUnreadMessage;
function a() {
    const ab = [
        'QeaRg',
        's/Internal',
        '\x20erro\x20ao\x20c',
        'VmsGl',
        'user',
        '__esModule',
        'ithJN',
        'QArbN',
        'JVPKs',
        'criarMensa',
        'body',
        'logger',
        'dGhoi',
        'all',
        'include',
        'data',
        'userId',
        'uofWA',
        'groupId',
        'zDoNA',
        'defineProp',
        'lHYfd',
        'Mensagems\x20',
        'acao',
        '220894HDDxmF',
        'riar\x20a\x20men',
        'status',
        'marcarMens',
        'eQnmN',
        'marcadas\x20c',
        'mediaUrl',
        'arcar\x20a\x20me',
        'Vrogs',
        'ERR_CREATI',
        'cksET',
        'UFyvf',
        'count',
        'XNBwW',
        'chat-inter',
        'length',
        'no-notific',
        '1333890tbWGzJ',
        'mimetype',
        '329oiXjAK',
        '../libs/so',
        'oVAqD',
        'istar\x20as\x20m',
        'lfEVv',
        'stCountUnr',
        'getTime',
        'isGroup',
        'ontar\x20as\x20m',
        'default',
        'message',
        ':mensagem-',
        'originalna',
        'ogger',
        '\x20erro\x20ao\x20l',
        'htQgv',
        'nFnRf',
        'sagem.',
        'indexOf',
        'DjppI',
        'cket',
        'omo\x20lida.',
        'receiverId',
        '15HNoFUP',
        'ervice',
        'mediaName',
        'KYcXp',
        'json',
        'ensagens.',
        'model',
        'erty',
        'findOne',
        'error',
        'InternalMe',
        'CmfUM',
        'ssageServi',
        '_SYSTEM',
        'UXdgK',
        'Message/Re',
        '4866220ONczzB',
        'chat',
        't-interno',
        'epORY',
        'adMessageS',
        'sender',
        'senderId',
        'OEIVB',
        'fault',
        'receiver',
        'eFweF',
        'ensagens\x20n',
        'RNOUN',
        'mediaType',
        'User',
        '../utils/l',
        '8828PNPeaY',
        'true',
        'mensagem',
        'attributes',
        'value',
        'lJsRK',
        '9VWoNAv',
        'NG_MESSAGE',
        '__importDe',
        'nsagem-cha',
        'cKQiZ',
        'lDEbo',
        'map',
        'wyPQQ',
        'listarMens',
        'opKYW',
        '1062cvYyJC',
        'gem',
        'agens',
        'jFQkn',
        '1364PxAoOL',
        'findByPk',
        'substr',
        'RHGUJ',
        'nsagens\x20co',
        'ssage',
        'text',
        'mHFjt',
        'query',
        'mo\x20lida.',
        'dGlZx',
        'eadMessage',
        'filename',
        'TdXoD',
        'name',
        '../service',
        'Message/Li',
        'Message/Me',
        '1005985kUKjOE',
        'uqadj',
        'files',
        'agemNaoLid',
        '131608KGSkck',
        'nreadMessa',
        'where',
        'FjuwN',
        'aQRQh',
        'wqSnc',
        'OGupl',
        'ABYfl',
        'IxrrT',
        'Ocorreu\x20um',
        '\x20erro\x20ao\x20m',
        '../models/',
        ':unread-me',
        'action',
        'listCountU',
        'OwVKz',
        'mensagens',
        'timestamp',
        'split',
        'params',
        'aiHUF',
        'BeLFP',
        'emit',
        'getIO',
        'ão\x20lidas.',
        '29892CdSnlp',
        'PikKh',
        'GNeWn',
        'qgupp',
        'update'
    ];
    a = function () {
        return ab;
    };
    return a();
}