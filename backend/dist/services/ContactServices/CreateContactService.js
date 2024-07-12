'use strict';
const I = b, J = b;
(function (c, d) {
    const G = b, H = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(G(0x194)) / (-0x600 + 0x30 * 0x4a + -0x7df) * (-parseInt(G(0x168)) / (-0x527 * -0x1 + -0x786 * 0x5 + -0x3 * -0xad3)) + parseInt(G(0x18f)) / (-0x243b + 0x1c3 + 0x61 * 0x5b) * (parseInt(H(0x178)) / (-0x2a5 * -0x3 + 0x16c4 + -0x1eaf)) + -parseInt(G(0x161)) / (0x3d * 0x30 + -0x15 * -0x10b + -0x1 * 0x2152) * (parseInt(G(0x191)) / (-0x2c * -0x19 + -0x6 * -0x54d + -0x2414)) + -parseInt(H(0x18b)) / (0x8 * -0x436 + 0x1 * 0x13b7 + 0xe00) * (parseInt(G(0x15d)) / (0x586 * -0x4 + 0x24eb + -0x7 * 0x21d)) + parseInt(G(0x189)) / (0x127a + -0x21be + 0xf4d) * (-parseInt(G(0x18d)) / (0x28b + -0xa4 * -0x29 + -0x1cc5)) + -parseInt(H(0x160)) / (0x4 * -0x290 + 0x628 * 0x2 + -0x205) + -parseInt(H(0x188)) / (0x2678 + 0x1 * -0x1427 + 0x1245 * -0x1) * (-parseInt(G(0x176)) / (0x86e + -0x5b * -0x67 + -0x1bb * 0x1a));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x17 * 0x25f9 + -0x8f9 * 0x51 + 0x1423b));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x22b2 + -0x2 * 0x155 + -0x1eb2 * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[I(0x164) + I(0x179)] || function (c) {
    const K = I;
    return c && c[K(0x16c)] ? c : { 'default': c };
};
const o = {};
o[J(0x15f)] = !![], Object[I(0x16b) + I(0x18e)](exports, J(0x16c), o);
const AppError_1 = __importDefault(require(J(0x159) + I(0x187) + 'r')), socketEmit_1 = __importDefault(require(I(0x185) + I(0x156) + I(0x170))), Contact_1 = __importDefault(require(I(0x167) + J(0x18a))), ContactWallet_1 = __importDefault(require(J(0x167) + J(0x18a) + I(0x171))), CreateContactService = async ({
        name: l,
        number: m,
        email: email = '',
        extraInfo: extraInfo = [],
        profilePicUrl: n,
        tenantId: p,
        wallets: q
    }) => {
        const L = J, M = J, r = {};
        r[L(0x183)] = M(0x17a) + L(0x18c) + 'CT', r[M(0x181)] = M(0x182), r[M(0x184)] = L(0x165), r[M(0x186)] = L(0x16a), r[L(0x172)] = L(0x175), r[M(0x195)] = M(0x15b), r[M(0x163)] = M(0x174), r[L(0x158)] = L(0x17b) + M(0x157), r[M(0x15c)] = L(0x15e) + M(0x17f);
        const s = r, t = {};
        t[L(0x15b)] = m, t[M(0x162)] = p;
        const u = {};
        u[L(0x177)] = t;
        const v = await Contact_1[L(0x192)][M(0x190)](u);
        if (v)
            throw new AppError_1[(L(0x192))](s[M(0x183)]);
        const w = {};
        w[M(0x175)] = l, w[L(0x15b)] = m, w[M(0x174)] = email, w[L(0x182)] = extraInfo, w[L(0x17b) + L(0x157)] = n, w[M(0x162)] = p;
        const x = {};
        x[L(0x17e)] = [
            s[M(0x181)],
            s[M(0x184)],
            {
                'association': s[L(0x186)],
                'attributes': [
                    'id',
                    s[L(0x172)]
                ]
            }
        ];
        const y = await Contact_1[M(0x192)][L(0x166)](w, x);
        if (q) {
            const B = {};
            B[M(0x162)] = p, B[M(0x169)] = y['id'];
            const C = {};
            C[L(0x177)] = B, await ContactWallet_1[L(0x192)][M(0x16d)](C);
            const D = [];
            q[M(0x16f)](E => {
                const N = L, O = L, F = {};
                F[N(0x193)] = !E['id'] ? E : E['id'], F[N(0x169)] = y['id'], F[O(0x162)] = p, D[O(0x15a)](F);
            }), await ContactWallet_1[L(0x192)][M(0x173)](D);
        }
        const z = {};
        z[M(0x180)] = [
            'id',
            s[M(0x172)],
            s[L(0x195)],
            s[L(0x163)],
            s[L(0x158)]
        ], z[L(0x17e)] = [
            s[M(0x181)],
            s[M(0x184)],
            {
                'association': s[L(0x186)],
                'attributes': [
                    'id',
                    s[M(0x172)]
                ]
            }
        ], await y[L(0x17c)](z);
        const A = {};
        return A[L(0x162)] = p, A[L(0x16e)] = s[L(0x15c)], A[M(0x17d)] = y, (-0x1fff + -0x81c + -0x281b * -0x1, socketEmit_1[L(0x192)])(A), y;
    };
function a() {
    const P = [
        'ers/socket',
        'Url',
        'FaLUE',
        '../../erro',
        'push',
        'number',
        'ZxKhs',
        '16EHYwdQ',
        'contact:up',
        'value',
        '1288210QPlNLo',
        '5pAhLfw',
        'tenantId',
        'HkRZc',
        '__importDe',
        'tags',
        'create',
        '../../mode',
        '12yfgGMZ',
        'contactId',
        'wallets',
        'defineProp',
        '__esModule',
        'destroy',
        'type',
        'forEach',
        'Emit',
        'Wallet',
        'mgftS',
        'bulkCreate',
        'email',
        'name',
        '884637AfPgbn',
        'where',
        '520oXtIUm',
        'fault',
        'ERR_DUPLIC',
        'profilePic',
        'reload',
        'payload',
        'include',
        'date',
        'attributes',
        'sMwtP',
        'extraInfo',
        'rXkqb',
        'pWvAw',
        '../../help',
        'hadXL',
        'rs/AppErro',
        '108yuFfAG',
        '9WgSZvG',
        'ls/Contact',
        '695233rlLtBz',
        'ATED_CONTA',
        '899950ReLTYy',
        'erty',
        '2220xvxRgR',
        'findOne',
        '884886MnutbQ',
        'default',
        'walletId',
        '5900sDiFjI',
        'aaHlb'
    ];
    a = function () {
        return P;
    };
    return a();
}
exports[J(0x192)] = CreateContactService;