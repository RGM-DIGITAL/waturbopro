'use strict';
const a0 = b, a1 = b;
(function (c, d) {
    const Y = b, Z = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(Y(0x1a0)) / (-0x1c32 + -0xff6 + 0x2c29) + parseInt(Z(0x1aa)) / (0xbaa + 0xa80 + 0x58a * -0x4) * (parseInt(Y(0x1bd)) / (0x22d2 + 0x1579 * 0x1 + 0x1c24 * -0x2)) + parseInt(Y(0x1dc)) / (-0x1441 + 0x64d * -0x3 + -0x17 * -0x1b4) + -parseInt(Y(0x1ed)) / (0xc09 + 0x58f + -0x1193) + -parseInt(Z(0x1cb)) / (0x107e + 0x251 * 0x5 + -0x1c0d) * (-parseInt(Y(0x1a4)) / (0xfc6 * -0x1 + 0xa93 * 0x2 + 0x1 * -0x559)) + -parseInt(Z(0x1a8)) / (-0x16b4 + -0x461 * -0x5 + -0xd7 * -0x1) * (parseInt(Y(0x19e)) / (-0x2630 + 0xcb2 + -0x5 * -0x51b)) + parseInt(Z(0x19f)) / (0xe1a + -0x482 + 0x98e * -0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xa * 0xae2b + 0x76a0 + -0x1 * 0x14ede));
var __importDefault = this && this[a0(0x1bf) + a0(0x1c6)] || function (c) {
    const a2 = a1;
    return c && c[a2(0x1d8)] ? c : { 'default': c };
};
const o = {};
function a() {
    const a7 = [
        '../../help',
        'editedMess',
        'ERR_CREATI',
        '2846886VQNazF',
        'hfuKv',
        'Emit',
        'CFCHi',
        'tenantId',
        'message',
        'bFsrZ',
        'dtIvu',
        'protocolMe',
        'jrWoN',
        'xllKo',
        'myXsq',
        'key',
        '__esModule',
        'chat:updat',
        '../../mode',
        'ageId\x20do\x20d',
        '1861428eiRxoz',
        'update',
        'FIqvb',
        'contactId',
        'FTSBl',
        'defineProp',
        'default',
        'GOaTL',
        'NZDSS',
        'BXhrr',
        'jJGum',
        'trair\x20mess',
        'ls/Ticket',
        'gaKQP',
        'HQKAh',
        'QlWoU',
        'ticket',
        '3276590ZUmcHM',
        'parse',
        'uOxAZ',
        'erty',
        'o\x20encontra',
        'edited',
        'ers/socket',
        'eKDgf',
        'messageId',
        'quotedMsg',
        '6101577RSzjgo',
        '3270120ZZEQWU',
        '122713fOKcWP',
        'DRUib',
        'joUec',
        'Erro\x20ao\x20ex',
        '7xpYeYu',
        'where',
        'create',
        'ls/Message',
        '8IGbbsl',
        'JdPDu',
        '92NjqjEq',
        'Mensagem\x20o',
        'DETYX',
        'NG_MESSAGE',
        'dWdwW',
        'ataJson',
        'model',
        'hkJjF',
        'nOHGH',
        'include',
        'chat:creat',
        'fromMe',
        'age',
        'type',
        'ssage',
        'payload',
        'body',
        'value',
        'riginal\x20nã',
        '37803tTQMkc',
        'mediaType',
        '__importDe',
        'BsoeM',
        'findOne',
        'ls/Contact',
        'dataJson',
        'FlaQW',
        'eJSya',
        'fault',
        'contact'
    ];
    a = function () {
        return a7;
    };
    return a();
}
o[a0(0x1bb)] = !![], Object[a0(0x1e1) + a1(0x1f0)](exports, a0(0x1d8), o);
const Message_1 = __importDefault(require(a0(0x1da) + a0(0x1a7))), Ticket_1 = __importDefault(require(a1(0x1da) + a0(0x1e8))), socketEmit_1 = __importDefault(require(a0(0x1c8) + a0(0x19a) + a0(0x1cd))), Contact_1 = __importDefault(require(a0(0x1da) + a1(0x1c2)));
function extractMessageId(d) {
    const a3 = a1, a4 = a0, e = {};
    e[a3(0x1e4)] = a3(0x1ca) + a3(0x1ad), e[a3(0x1ea)] = a4(0x1a3) + a3(0x1e7) + a3(0x1db) + a3(0x1af), e[a4(0x1eb)] = function (g, h) {
        return g === h;
    }, e[a4(0x1e9)] = a3(0x1d1), e[a4(0x1e6)] = a4(0x1b1), e[a3(0x1b2)] = a4(0x1ce);
    const f = e;
    try {
        if (f[a3(0x1eb)](f[a3(0x1e9)], f[a4(0x1e6)]))
            throw new d(f[a4(0x1e4)]);
        else {
            const h = JSON[a3(0x1ee)](d);
            return h[a3(0x1d0)][a4(0x1c9) + a3(0x1b6)][a4(0x1d0)][a3(0x1d3) + a4(0x1b8)][a4(0x1d7)]['id'];
        }
    } catch (i) {
        if (f[a4(0x1eb)](f[a3(0x1b2)], f[a3(0x1b2)]))
            throw new Error(f[a4(0x1ea)]);
        else
            throw new d(f[a3(0x1ea)]);
    }
}
const CreateMessageService = async ({
    messageData: v,
    tenantId: w
}) => {
    const a5 = a1, a6 = a1, x = {
            'BsoeM': a5(0x1ec),
            'uOxAZ': a5(0x1c7),
            'FlaQW': a6(0x19d),
            'myXsq': function (G, H) {
                return G === H;
            },
            'jrWoN': a5(0x1c9) + a6(0x1b6),
            'BXhrr': function (G, H) {
                return G(H);
            },
            'DETYX': a6(0x1c5),
            'eKDgf': a6(0x1e0),
            'joUec': a5(0x1d9) + 'e',
            'xllKo': a6(0x1ab) + a5(0x1bc) + a6(0x198) + 'da',
            'dtIvu': function (G, H) {
                return G !== H;
            },
            'GOaTL': a5(0x1cc),
            'FIqvb': a5(0x1a1),
            'JdPDu': a5(0x1ca) + a5(0x1ad),
            'dWdwW': a6(0x1b4) + 'e'
        };
    if (x[a5(0x1d6)](v[a6(0x1be)], x[a6(0x1d4)]) && v[a5(0x1c3)]) {
        const G = v[a5(0x1c3)], H = x[a6(0x1e5)](extractMessageId, G), I = {};
        I[a6(0x19c)] = H, I[a6(0x1cf)] = w;
        const J = {};
        J[a6(0x1a5)] = I;
        const K = await Message_1[a6(0x1e2)][a5(0x1c1)](J);
        if (K) {
            if (x[a6(0x1d6)](x[a5(0x1ac)], x[a5(0x19b)])) {
                const M = {};
                M[a6(0x1cf)] = i;
                const N = {};
                N[a6(0x1b0)] = z[a6(0x1e2)], N['as'] = x[a6(0x1c0)], N[a5(0x1a5)] = M, N[a6(0x1b3)] = [x[a6(0x1ef)]];
                const O = {};
                O[a6(0x1b0)] = j[a6(0x1e2)], O['as'] = x[a5(0x1c4)], O[a6(0x1b3)] = [x[a6(0x1ef)]], O = [
                    N,
                    O
                ];
            } else {
                const M = {};
                M[a5(0x199)] = v[a5(0x1ba)], await K[a6(0x1dd)](M);
                const N = {};
                return N[a5(0x1cf)] = w, N[a6(0x1b7)] = x[a5(0x1a2)], N[a6(0x1b9)] = K, (0xfd * 0xf + 0xe5 + 0xfb8 * -0x1, socketEmit_1[a5(0x1e2)])(N), K;
            }
        } else
            throw new Error(x[a6(0x1d5)]);
    }
    const y = {};
    y[a5(0x19c)] = v[a6(0x19c)], y[a6(0x1cf)] = w;
    const z = {};
    z[a6(0x1a5)] = y;
    let A = await Message_1[a5(0x1e2)][a6(0x1c1)](z);
    if (!A) {
        const O = { ...v };
        O[a5(0x1cf)] = w, A = await Message_1[a6(0x1e2)][a5(0x1a6)](O);
    } else {
        if (x[a5(0x1d2)](x[a5(0x1e3)], x[a5(0x1de)]))
            await A[a5(0x1dd)](v);
        else {
            const Q = {};
            return Q[a6(0x1e2)] = Q, y && z[a6(0x1d8)] ? i : Q;
        }
    }
    let B;
    if (!v[a6(0x1b5)]) {
        const Q = {};
        Q[a5(0x1cf)] = w;
        const R = {};
        R[a5(0x1b0)] = Ticket_1[a6(0x1e2)], R['as'] = x[a6(0x1c0)], R[a6(0x1a5)] = Q, R[a6(0x1b3)] = [x[a5(0x1ef)]];
        const S = {};
        S[a6(0x1b0)] = Message_1[a6(0x1e2)], S['as'] = x[a5(0x1c4)], S[a5(0x1b3)] = [x[a6(0x1ef)]];
        const T = {};
        T['id'] = v[a5(0x1df)];
        const U = {};
        U[a6(0x1b0)] = Contact_1[a6(0x1e2)], U['as'] = x[a6(0x1ef)], U[a6(0x1a5)] = T, B = [
            R,
            S,
            U
        ];
    } else {
        const V = {};
        V[a6(0x1cf)] = w;
        const W = {};
        W[a5(0x1b0)] = Ticket_1[a5(0x1e2)], W['as'] = x[a6(0x1c0)], W[a5(0x1a5)] = V, W[a6(0x1b3)] = [x[a5(0x1ef)]];
        const X = {};
        X[a6(0x1b0)] = Message_1[a6(0x1e2)], X['as'] = x[a6(0x1c4)], X[a5(0x1b3)] = [x[a6(0x1ef)]], B = [
            W,
            X
        ];
    }
    const C = {};
    C[a5(0x19c)] = v[a6(0x19c)], C[a5(0x1cf)] = w;
    const D = {};
    D[a6(0x1a5)] = C, D[a5(0x1b3)] = B;
    const E = await Message_1[a5(0x1e2)][a6(0x1c1)](D);
    if (!E)
        throw new Error(x[a6(0x1a9)]);
    const F = {};
    return F[a6(0x1cf)] = w, F[a6(0x1b7)] = x[a6(0x1ae)], F[a5(0x1b9)] = E, (-0x31 * 0x9d + 0x11ac + 0xc61, socketEmit_1[a6(0x1e2)])(F), A;
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * 0xaf1 + -0xe81 + 0x528);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[a0(0x1e2)] = CreateMessageService;