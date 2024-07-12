'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xa3 * -0x8 + 0x2216 * 0x1 + 0x2669 * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const S = b, T = b;
(function (c, d) {
    const Q = b, R = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(Q(0xcb)) / (-0x2151 + -0xcb3 * 0x1 + 0x2e05) * (parseInt(R(0xf2)) / (0x21a + -0xcc1 * 0x2 + 0x176a)) + -parseInt(Q(0xd4)) / (0xd27 * -0x1 + -0x1aa5 + 0x27cf) * (-parseInt(R(0xcd)) / (-0x1c21 + -0x4 * -0x4c + -0x1 * -0x1af5)) + -parseInt(Q(0xc8)) / (-0x229e + -0x1fef + -0x4292 * -0x1) * (-parseInt(R(0xc9)) / (0x1d7b + 0xa * 0x1d3 + -0x2fb3 * 0x1)) + parseInt(Q(0xea)) / (0x2498 + -0x1aa6 + -0x9eb) + parseInt(Q(0xca)) / (0x2311 + 0x36e + -0x2677) * (-parseInt(R(0xe1)) / (0x17aa + -0x1 * 0x1e11 + 0x670)) + parseInt(Q(0xd6)) / (0x138 * 0x6 + -0x337 * 0x2 + -0xd8) + -parseInt(R(0xdd)) / (-0x1690 + -0x24ea + 0x3b85) * (parseInt(R(0xc7)) / (-0xc7e + -0x232 + -0x52 * -0x2e));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x19e79 + -0x53805 + 0x9048e));
var __importDefault = this && this[S(0xf6) + S(0xd2)] || function (c) {
    const U = T;
    return c && c[U(0xe7)] ? c : { 'default': c };
};
const D = {};
D[S(0xd7)] = !![], Object[S(0xff) + S(0xe0)](exports, S(0xe7), D);
function a() {
    const X = [
        'ajyBl',
        'Emit',
        '__esModule',
        'payload',
        'update',
        '166537tNsdca',
        'telegram',
        'isGroup',
        'tenantId',
        'name',
        'APBBs',
        'QMqCw',
        'extraInfo',
        '24TtqhNe',
        'RceMI',
        '../../help',
        'number',
        '__importDe',
        'telegramId',
        'pushname',
        'create',
        'where',
        'isUser',
        'lFpWr',
        'contact:up',
        'replace',
        'defineProp',
        'findOne',
        'date',
        'email',
        '259764mvEiWB',
        '1717385CkFiRT',
        '6omjPie',
        '8mBWPCu',
        '7998rHZlCy',
        'instagram',
        '121820CmqtGz',
        'isWAContac',
        '../../mode',
        'messenger',
        'ers/socket',
        'fault',
        'instagramP',
        '39qbaTQp',
        'GnAUe',
        '7300FcHpYp',
        'value',
        'olzFy',
        'ls/Contact',
        'hbpSw',
        'YmLqR',
        'type',
        '77OnVTLV',
        'Url',
        'whatsapp',
        'erty',
        '1452006TCtVAc',
        'profilePic',
        'messengerI',
        'default'
    ];
    a = function () {
        return X;
    };
    return a();
}
const socketEmit_1 = __importDefault(require(S(0xf4) + S(0xd1) + S(0xe6))), Contact_1 = __importDefault(require(S(0xcf) + T(0xd9))), CreateOrUpdateContactService = async ({
        name: o,
        number: p,
        profilePicUrl: q,
        isGroup: r,
        tenantId: s,
        pushname: t,
        isUser: u,
        isWAContact: v,
        email: email = '',
        telegramId: w,
        instagramPK: x,
        messengerId: y,
        extraInfo: extraInfo = [],
        origem: origem = T(0xdf)
    }) => {
        const V = S, W = S, z = {};
        z[V(0xef)] = function (F, G) {
            return F === G;
        }, z[V(0xfc)] = W(0xdf), z[V(0xe5)] = function (F, G) {
            return F === G;
        }, z[W(0xd8)] = V(0xeb), z[V(0xd5)] = V(0xcc), z[W(0xdb)] = function (F, G) {
            return F === G;
        }, z[W(0xf0)] = V(0xd0), z[W(0xf3)] = function (F, G) {
            return F == G;
        }, z[V(0xda)] = V(0xfd) + W(0xc5);
        const A = z, B = r ? p : p[W(0xfe)](/[^0-9]/g, '');
        let C = null;
        if (A[V(0xef)](origem, A[V(0xfc)])) {
            const F = {};
            F[V(0xf5)] = B, F[W(0xed)] = s;
            const G = {};
            G[W(0xfa)] = F, C = await Contact_1[W(0xe4)][W(0x100)](G);
        }
        if (A[V(0xe5)](origem, A[V(0xd8)]) && w) {
            const H = {};
            H[V(0xf7)] = w, H[V(0xed)] = s;
            const I = {};
            I[V(0xfa)] = H, C = await Contact_1[W(0xe4)][W(0x100)](I);
        }
        if (A[W(0xef)](origem, A[V(0xd5)]) && x) {
            const J = {};
            J[W(0xd3) + 'K'] = x, J[W(0xed)] = s;
            const K = {};
            K[W(0xfa)] = J, C = await Contact_1[V(0xe4)][V(0x100)](K);
        }
        if (A[W(0xdb)](origem, A[W(0xf0)]) && y) {
            const L = {};
            L[W(0xe3) + 'd'] = y, L[V(0xed)] = s;
            const M = {};
            M[W(0xfa)] = L, C = await Contact_1[V(0xe4)][V(0x100)](M);
        }
        if (C) {
            let N;
            A[W(0xf3)](C[V(0xee)], C[V(0xf5)]) ? N = o : N = C[V(0xee)];
            const O = {};
            O[W(0xee)] = N, O[W(0xe2) + V(0xde)] = q, O[W(0xf8)] = t, O[V(0xfb)] = u, O[V(0xce) + 't'] = v, O[W(0xf7)] = w, O[V(0xd3) + 'K'] = x, O[W(0xe3) + 'd'] = y, C[V(0xe9)](O);
        } else {
            const P = {};
            P[W(0xee)] = o, P[V(0xf5)] = B, P[V(0xe2) + V(0xde)] = q, P[V(0xc6)] = email, P[V(0xec)] = r, P[W(0xf8)] = t, P[V(0xfb)] = u, P[W(0xce) + 't'] = v, P[W(0xed)] = s, P[V(0xf1)] = extraInfo, P[V(0xf7)] = w, P[V(0xd3) + 'K'] = x, P[V(0xe3) + 'd'] = y, C = await Contact_1[W(0xe4)][W(0xf9)](P);
        }
        const E = {};
        return E[V(0xed)] = s, E[W(0xdc)] = A[W(0xda)], E[W(0xe8)] = C, (0xc90 * 0x2 + 0x1c63 + -0x3583, socketEmit_1[V(0xe4)])(E), C;
    };
exports[S(0xe4)] = CreateOrUpdateContactService;