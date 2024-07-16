'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x3ea * -0x5 + 0x25ff + 0xf * -0x133);
        let h = e[f];
        return h;
    }, b(c, d);
}
const a0 = b, a1 = b;
(function (c, d) {
    const Y = b, Z = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(Y(0x10c)) / (-0x385 + 0x1 * -0xe9f + 0x1225) + -parseInt(Z(0xf8)) / (-0x5 * -0x413 + 0x70 * -0x23 + -0x50d) * (-parseInt(Z(0x9b)) / (0x8b3 + 0xbde + -0x148e)) + parseInt(Y(0xfb)) / (0x8 * 0x333 + -0x7f * 0x3d + 0x4af * 0x1) * (-parseInt(Z(0xf0)) / (0x1 * 0xa7f + 0x1da8 + -0x2822)) + parseInt(Z(0xe8)) / (-0xc * 0x19 + -0x2567 + 0x2699) * (-parseInt(Y(0xa6)) / (0x1 * -0xd45 + 0x25c1 + -0x1875)) + -parseInt(Y(0x99)) / (-0x5 * -0x3d3 + -0x2217 + 0x3c0 * 0x4) * (parseInt(Y(0x109)) / (0x1fcc + -0x795 * -0x1 + -0x2758)) + -parseInt(Y(0x88)) / (0x2360 + 0x91b * 0x2 + -0x358c) * (-parseInt(Y(0xc7)) / (-0x29 * -0x76 + 0xc0a + -0x1ee5)) + parseInt(Y(0xd8)) / (-0x25cb + 0x1b93 + 0xa44) * (parseInt(Z(0xa0)) / (0x3bb * 0x7 + 0x4d2 + -0x1ee2));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x137e77 * -0x1 + 0x9e0e8 + -0x1 * 0xfe0ff));
var __importDefault = this && this[a0(0xeb) + a0(0xc0)] || function (c) {
    const a2 = a1;
    return c && c[a2(0xa1)] ? c : { 'default': c };
};
const o = {};
o[a1(0xdd)] = !![], Object[a1(0xf2) + a1(0x98)](exports, a0(0xa1), o), exports[a1(0xc5) + a1(0xe9) + 'ge'] = exports[a1(0xd6) + a0(0xc1) + 'a'] = exports[a0(0x100) + a0(0xcd)] = exports[a1(0x9d) + a0(0x111)] = void (-0x7 * 0xe + 0x16ae * 0x1 + -0x164c);
const socket_1 = require(a0(0xb6) + a0(0x84)), InternalMessage_1 = __importDefault(require(a0(0xaa) + a0(0x112) + a1(0x10a))), User_1 = __importDefault(require(a0(0xaa) + a1(0xe5))), ListCountUnreadMessage_1 = __importDefault(require(a1(0xdc) + a0(0xb9) + a1(0x80) + a0(0x8a) + a1(0xc3))), MessageService_1 = __importDefault(require(a1(0xdc) + a1(0xb9) + a0(0x110) + a0(0x9a) + 'ce')), ReadMessageService_1 = __importDefault(require(a0(0xdc) + a1(0xb9) + a0(0x94) + a0(0xec) + a1(0x89))), logger_1 = require(a0(0x10f) + a1(0xed)), listarMensagens = async (f, g) => {
        const a3 = a0, a4 = a1, h = {};
        h[a3(0xbe)] = a3(0x7d) + a4(0xe4) + a3(0xd1) + a4(0x108);
        const i = h;
        try {
            const {id: j} = f[a4(0x90)], {userId: k} = f[a4(0xe6)], {isGroup: l} = f[a3(0x9f)], m = await MessageService_1[a4(0xd9)][a3(0x9d) + a4(0x111)](j, k, l), n = {};
            return n[a4(0x74)] = m, g[a4(0x93)](-0x1926 + 0x3ad + 0xd3 * 0x1b)[a4(0xbc)](n);
        } catch (p) {
            console[a3(0xf3)](p);
            const q = {};
            return q[a3(0xf3)] = i[a3(0xbe)], g[a4(0x93)](0x1 * -0xbed + -0x1cb8 + 0x2a99)[a3(0xbc)](q);
        }
    };
exports[a1(0x9d) + a0(0x111)] = listarMensagens;
const criarMensagem = async (n, p) => {
    const a5 = a1, a6 = a1, q = {};
    q[a5(0xb2)] = a5(0x7d) + a5(0x86) + a6(0xe7) + a6(0x8b) + a5(0xe2), q[a5(0xd4)] = a6(0x7d) + a5(0x82) + a5(0xce) + a6(0x75) + a6(0xcc), q[a5(0xba)] = a5(0x7d) + a5(0xe4) + a6(0xd1) + a5(0x108), q[a6(0x71)] = function (s, t) {
        return s !== t;
    }, q[a5(0xbb)] = a6(0x10e), q[a5(0xd2)] = function (s, t) {
        return s !== t;
    }, q[a5(0x7e)] = a6(0xef), q[a6(0xb8)] = a6(0xd7), q[a6(0x96)] = a5(0xb7) + a6(0x85) + a6(0xcf), q[a5(0xbd)] = a6(0x78), q[a6(0x114)] = function (s, t) {
        return s === t;
    }, q[a5(0xf9)] = function (s, t) {
        return s === t;
    }, q[a5(0x8e)] = a6(0xff), q[a5(0x102)] = a6(0x81), q[a6(0xfa)] = a6(0xf5), q[a6(0x91)] = function (s, t) {
        return s > t;
    }, q[a5(0xc6)] = a6(0x7a), q[a5(0x103)] = a5(0xa3), q[a5(0xa9)] = a5(0x10d), q[a6(0xb3)] = a5(0x115), q[a5(0xa2)] = a5(0x7c), q[a5(0xb4)] = a6(0x8f), q[a5(0xd0)] = function (s, t) {
        return s !== t;
    }, q[a5(0x95)] = a6(0xc2), q[a5(0x8d)] = a5(0x7d) + a6(0x82) + a5(0x10b) + a5(0xa7);
    const r = q;
    try {
        const {
                text: s,
                timestamp: t,
                receiverId: u,
                isGroup: v
            } = n[a6(0x106)], {
                id: w,
                tenantId: x
            } = n[a6(0x90)], y = n[a5(0xaf)], z = (-0x5e * -0x4c + -0x1bc + 0x29e * -0xa, socket_1[a5(0xf6)])(), A = {
                'text': s,
                'timestamp': t,
                'receiverId': u,
                'senderId': w,
                'tenantId': x,
                'groupId': null,
                'mediaType': r[a5(0xbd)],
                'mediaUrl': undefined,
                'createdAt': new Date(),
                'updatedAt': new Date()
            };
        if (r[a6(0x114)](v, !![]) || r[a6(0xf9)](v, r[a5(0x8e)])) {
            if (r[a6(0x114)](r[a5(0x102)], r[a6(0xfa)])) {
                E[a5(0xf3)](F);
                const N = {};
                return N[a6(0xf3)] = r[a6(0xb2)], H[a5(0x93)](0xb * -0x95 + -0x203b + 0x2896)[a5(0xbc)](N);
            } else
                A[a5(0x76)] = undefined, A[a6(0xc9)] = u;
        }
        let B = {};
        y && r[a5(0x91)](y[a5(0xee)], 0x93d + 0x1 * -0x17ea + 0xd * 0x121) ? r[a5(0xf9)](r[a6(0xc6)], r[a5(0x103)]) ? D[a6(0xfe)][a6(0xf3)](E) : await Promise[a5(0x101)](y[a6(0x70)](async O => {
            const a7 = a5, a8 = a6, P = {};
            P[a7(0x77)] = r[a8(0xba)];
            const Q = P;
            try {
                if (!O[a7(0xde)]) {
                    if (r[a8(0x71)](r[a8(0xbb)], r[a7(0xbb)])) {
                        E[a7(0xf3)](F);
                        const U = {};
                        return U[a7(0xf3)] = r[a7(0xd4)], H[a8(0x93)](-0x2596 + 0xc65 * 0x3 + 0x3 * 0xc9)[a8(0xbc)](U);
                    } else {
                        const U = O[a7(0xcb)][a7(0x72)]('/')[0x813 + -0x2405 + -0x951 * -0x3][a7(0x72)](';')[0x24a8 + 0x1 * 0x1951 + 0xc65 * -0x5];
                        O[a7(0xde)] = new Date()[a8(0x105)]() + '.' + U;
                    }
                }
            } catch (V) {
                logger_1[a8(0xfe)][a8(0xf3)](V);
            }
            const R = {
                    ...A,
                    'text': O[a7(0xb5) + 'me'],
                    'mediaUrl': O[a8(0xde)],
                    'mediaType': O[a8(0xc4)] || O[a8(0xcb)][a8(0x104)](0x2 * 0x1eb + 0xd86 + -0x115c, O[a8(0xcb)][a7(0x107)]('/'))
                }, S = await MessageService_1[a7(0xd9)][a8(0x100) + a8(0xcd)](R);
            B = await InternalMessage_1[a7(0xd9)][a7(0xe0)](S['id']);
            if (!B) {
                if (r[a7(0xd2)](r[a7(0x7e)], r[a7(0xb8)]))
                    throw new Error(r[a8(0x96)]);
                else {
                    E[a7(0xf3)](F);
                    const X = {};
                    return X[a7(0xf3)] = Q[a8(0x77)], H[a7(0x93)](-0x476 + -0x1 * 0x20d3 + -0x273d * -0x1)[a7(0xbc)](X);
                }
            }
        })) : B = await MessageService_1[a6(0xd9)][a6(0x100) + a5(0xcd)](A);
        const C = {};
        C['id'] = B['id'];
        const D = {};
        D[a5(0xc8)] = User_1[a5(0xd9)], D['as'] = r[a6(0xa9)], D[a6(0x7b)] = [
            'id',
            r[a5(0xb3)]
        ];
        const E = {};
        E[a6(0xc8)] = User_1[a5(0xd9)], E['as'] = r[a5(0xa2)], E[a6(0x7b)] = [
            'id',
            r[a5(0xb3)]
        ];
        const F = {};
        F[a6(0x79)] = C, F[a6(0x7f)] = [
            D,
            E
        ];
        const G = await InternalMessage_1[a6(0xd9)][a6(0xb1)](F), H = {};
        H['id'] = G['id'], H[a6(0x76)] = G[a5(0x76)], H[a5(0xc4)] = G[a6(0xc4)], H[a5(0xac)] = G[a5(0xac)], H[a6(0xf4)] = G[a5(0xf4)], H[a6(0x9e)] = w, H[a6(0x117)] = G[a6(0x117)], H[a6(0x10d)] = G[a6(0x10d)], H[a5(0xc9)] = G[a5(0xc9)], H[a5(0x7c)] = G[a6(0x7c)], H[a5(0xfd)] = s;
        const I = {};
        I[a6(0xfc)] = r[a6(0xb4)], I[a5(0xdb)] = H, z[a5(0xda)](x + (a6(0xf1) + a5(0x9c) + 'no'), I);
        const J = {};
        J['id'] = G['id'], J[a6(0x76)] = u, J[a5(0x9e)] = w, J[a6(0xc4)] = G[a5(0xc4)], J[a6(0x117)] = G[a6(0x117)], J[a6(0x10d)] = G[a5(0x10d)], J[a6(0xc9)] = G[a6(0xc9)], J[a5(0x7c)] = G[a6(0x7c)], J[a5(0xfd)] = s;
        const K = {};
        K[a6(0xfc)] = r[a6(0xb4)], K[a6(0xdb)] = J, z[a5(0xda)](x + (a5(0xf1) + a5(0x9c) + a5(0xa5) + a6(0xa8)), K);
        const L = {};
        return L[a5(0xe1)] = G, p[a6(0x93)](-0xd6 + -0x1 * 0x1265 + -0xf4 * -0x15)[a5(0xbc)](L);
    } catch (O) {
        if (r[a6(0xd0)](r[a5(0x95)], r[a5(0x95)])) {
            if (!g[a5(0xde)]) {
                const Q = k[a5(0xcb)][a5(0x72)]('/')[-0x195f * -0x1 + 0x1dcb + -0x3729][a6(0x72)](';')[-0x3 * -0x2d7 + 0x7 * 0x15b + -0x39a * 0x5];
                l[a6(0xde)] = new m()[a6(0x105)]() + '.' + Q;
            }
        } else {
            console[a6(0xf3)](O);
            const Q = {};
            return Q[a6(0xf3)] = r[a5(0x8d)], p[a5(0x93)](-0x615 + -0x509 * -0x7 + -0x9 * 0x306)[a6(0xbc)](Q);
        }
    }
};
exports[a0(0x100) + a0(0xcd)] = criarMensagem;
const marcarMensagemNaoLida = async (f, g) => {
    const a9 = a0, aa = a0, h = {
            'zkRHm': a9(0x7d) + aa(0x82) + a9(0x10b) + a9(0xa7),
            'WXcgv': function (i, j) {
                return i === j;
            },
            'CepGJ': a9(0xf7),
            'mzlri': aa(0xad),
            'Loheb': aa(0x8f),
            'OeZdI': function (i, j) {
                return i(j);
            },
            'wIKee': aa(0xbf) + aa(0xdf) + aa(0xae),
            'PJCXL': aa(0x7d) + aa(0x86) + a9(0xe7) + aa(0x8b) + a9(0xe2)
        };
    try {
        if (h[a9(0xe3)](h[a9(0x113)], h[aa(0x116)])) {
            f[aa(0xf3)](g);
            const j = {};
            return j[aa(0xf3)] = h[aa(0xd3)], h[a9(0x93)](-0x13cf + -0x17 * 0xa3 + 0x8 * 0x48d)[a9(0xbc)](j);
        } else {
            const {contactId: j} = f[aa(0xe6)], {
                    id: k,
                    tenantId: l
                } = f[a9(0x90)], {isGroup: m} = f[aa(0x106)], n = (-0x1560 + 0x14c1 + 0x9f, socket_1[a9(0xf6)])(), p = {};
            p[aa(0xb0)] = k, p[aa(0x9e)] = j, p[aa(0xab)] = m, await (0x472 + -0x13 * 0x182 + -0x2 * -0xc1a, ReadMessageService_1[a9(0xd9)])(p), n[aa(0xda)](l + (aa(0x97) + aa(0x8c) + a9(0xd5)), {
                'action': h[a9(0xca)],
                'data': {
                    'receiverId': k,
                    'isGroup': m,
                    'senderId': h[aa(0x87)](Number, j)
                }
            });
            const q = {};
            return q[a9(0xa4)] = h[aa(0x83)], g[aa(0x93)](-0x2571 + 0x1122 + 0x1 * 0x1517)[a9(0xbc)](q);
        }
    } catch (r) {
        console[aa(0xf3)](r);
        const s = {};
        return s[aa(0xf3)] = h[aa(0x73)], g[a9(0x93)](-0xd * 0x17e + 0x1 * 0xa72 + 0x2 * 0x574)[a9(0xbc)](s);
    }
};
exports[a0(0xd6) + a1(0xc1) + 'a'] = marcarMensagemNaoLida;
function a() {
    const ad = [
        'defineProp',
        'error',
        'mediaUrl',
        'mlCvJ',
        'getIO',
        'XtxhM',
        '2kUGnXs',
        'CJaao',
        'SIDXv',
        '68EYgyJm',
        'action',
        'text',
        'logger',
        'true',
        'criarMensa',
        'all',
        'rIQlU',
        'ThUTt',
        'substr',
        'getTime',
        'body',
        'indexOf',
        'ensagens.',
        '1237806VUYhvG',
        'ssage',
        'riar\x20a\x20men',
        '149592SuauPJ',
        'sender',
        'raFng',
        '../utils/l',
        'Message/Me',
        'agens',
        'InternalMe',
        'CepGJ',
        'FbWOd',
        'name',
        'mzlri',
        'timestamp',
        'map',
        'lHaBa',
        'split',
        'PJCXL',
        'mensagens',
        'ensagens\x20n',
        'receiverId',
        'PxKKH',
        'chat',
        'where',
        'jLHPt',
        'attributes',
        'receiver',
        'Ocorreu\x20um',
        'OWgyA',
        'include',
        'Message/Li',
        'qvrGD',
        '\x20erro\x20ao\x20c',
        'wIKee',
        'cket',
        'NG_MESSAGE',
        '\x20erro\x20ao\x20m',
        'OeZdI',
        '14444330hVIcuO',
        'ervice',
        'stCountUnr',
        'nsagens\x20co',
        'nsagem-cha',
        'tkAlN',
        'IoywZ',
        'update',
        'user',
        'UkjpR',
        'xifjS',
        'status',
        'Message/Re',
        'JmZFX',
        'MyoIl',
        ':unread-me',
        'erty',
        '40CvEuSJ',
        'ssageServi',
        '3691089OiiTul',
        'chat-inter',
        'listarMens',
        'senderId',
        'query',
        '7143448AGQEZG',
        '__esModule',
        'vaWux',
        'sFTaR',
        'message',
        'no-notific',
        '862337ZCynXj',
        'sagem.',
        'acao',
        'Wuwsv',
        '../models/',
        'isGroup',
        'mediaName',
        'LJdOR',
        'omo\x20lida.',
        'files',
        'userId',
        'findOne',
        'Aaxuh',
        'ddLnR',
        'IaFqs',
        'originalna',
        '../libs/so',
        'ERR_CREATI',
        'RMyGY',
        's/Internal',
        'zmIBp',
        'posWX',
        'json',
        'EBJQn',
        'QmkEC',
        'Mensagems\x20',
        'fault',
        'agemNaoLid',
        'nwgpI',
        'eadMessage',
        'mediaType',
        'listCountU',
        'nqFni',
        '11BzvzYj',
        'model',
        'groupId',
        'Loheb',
        'mimetype',
        'ão\x20lidas.',
        'gem',
        'ontar\x20as\x20m',
        '_SYSTEM',
        'CVwXB',
        'istar\x20as\x20m',
        'DlVKz',
        'zkRHm',
        'aBrWK',
        't-interno',
        'marcarMens',
        'IMLhD',
        '12VuEppN',
        'default',
        'emit',
        'data',
        '../service',
        'value',
        'filename',
        'marcadas\x20c',
        'findByPk',
        'mensagem',
        'mo\x20lida.',
        'WXcgv',
        '\x20erro\x20ao\x20l',
        'User',
        'params',
        'arcar\x20a\x20me',
        '42XctWCO',
        'nreadMessa',
        'count',
        '__importDe',
        'adMessageS',
        'ogger',
        'length',
        'ThHqI',
        '188345pwckEI',
        ':mensagem-'
    ];
    a = function () {
        return ad;
    };
    return a();
}
const listCountUnreadMessage = async (f, g) => {
    const ab = a1, ac = a0, h = {};
    h[ab(0x92)] = ab(0x7d) + ab(0x82) + ac(0xce) + ab(0x75) + ac(0xcc);
    const i = h;
    try {
        const {id: j} = f[ab(0x90)], k = await (-0x392 * -0x4 + 0x8 * -0x401 + -0x4 * -0x470, ListCountUnreadMessage_1[ac(0xd9)])(j), l = {};
        return l[ab(0xea)] = k, g[ab(0x93)](-0x469 * -0x3 + -0x26b3 + 0x1a40)[ab(0xbc)](l);
    } catch (m) {
        console[ac(0xf3)](m);
        const n = {};
        return n[ac(0xf3)] = i[ab(0x92)], g[ab(0x93)](0x1a35 + -0x59 * 0x4c + -0x1 * -0x22b)[ab(0xbc)](n);
    }
};
exports[a0(0xc5) + a0(0xe9) + 'ge'] = listCountUnreadMessage;