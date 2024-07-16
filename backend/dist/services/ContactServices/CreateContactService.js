'use strict';
function a() {
    const P = [
        'default',
        'rs/AppErro',
        'bulkCreate',
        'profilePic',
        'forEach',
        'erty',
        '630442IqUULo',
        'nxwNC',
        'UhCFD',
        '5185216jZlsqR',
        'ATED_CONTA',
        'fault',
        'destroy',
        'number',
        'reload',
        'value',
        'walletId',
        '3009048RodhQr',
        'create',
        '351HDiRPx',
        'NSeQV',
        '8292abueHc',
        '2610785QGRSxI',
        'extraInfo',
        'ers/socket',
        'Url',
        'Wallet',
        'contactId',
        '__esModule',
        'type',
        '7OTkxgP',
        'lpkwx',
        'tags',
        '../../mode',
        'payload',
        'date',
        'ERR_DUPLIC',
        'contact:up',
        'tenantId',
        '9268551keErUW',
        'ayzCP',
        'eoAAf',
        '../../help',
        'attributes',
        'ExNul',
        '../../erro',
        'QHHLO',
        'defineProp',
        'wallets',
        '1235656behzxq',
        'push',
        'include',
        'email',
        '__importDe',
        'findOne',
        'kjwaR',
        'Emit',
        'where',
        '10QJZSUC',
        'ls/Contact',
        'name'
    ];
    a = function () {
        return P;
    };
    return a();
}
const I = b, J = b;
(function (c, d) {
    const G = b, H = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(G(0xfb)) / (0x1 * -0x2284 + 0x2 * -0xce3 + 0x1419 * 0x3) + parseInt(G(0x10a)) / (-0x5 * 0x782 + 0x23e7 + 0x1a5 * 0x1) * (parseInt(H(0x108)) / (-0x1d * 0xaf + 0x83c + 0xb9a)) + parseInt(G(0x126)) / (0x13a4 * 0x1 + -0x2583 + 0x11e3) + -parseInt(G(0x10b)) / (-0x5cf * -0x1 + -0xf83 + -0x13 * -0x83) + parseInt(H(0x106)) / (0x16b0 + -0x14cd + 0x9 * -0x35) + parseInt(G(0x113)) / (0x38a + -0x68c * 0x1 + 0x309) * (-parseInt(G(0xfe)) / (-0x3 * -0x773 + 0x1 * 0xbdd + -0x222e)) + parseInt(G(0x11c)) / (0x57 * 0x15 + -0x1 * -0xb51 + -0x126b) * (parseInt(G(0xf2)) / (-0x422 + 0x1e18 + -0x19ec));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x9c3d6 + 0xfb13e + -0x84 * 0x21d9));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x8d2 + 0x1 * -0x8b + 0xa4a);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[I(0xed) + J(0x100)] || function (c) {
    const K = I;
    return c && c[K(0x111)] ? c : { 'default': c };
};
const o = {};
o[J(0x104)] = !![], Object[J(0x124) + I(0xfa)](exports, I(0x111), o);
const AppError_1 = __importDefault(require(J(0x122) + J(0xf6) + 'r')), socketEmit_1 = __importDefault(require(J(0x11f) + J(0x10d) + J(0xf0))), Contact_1 = __importDefault(require(J(0x116) + I(0xf3))), ContactWallet_1 = __importDefault(require(I(0x116) + I(0xf3) + I(0x10f))), CreateContactService = async ({
        name: l,
        number: m,
        email: email = '',
        extraInfo: extraInfo = [],
        profilePicUrl: n,
        tenantId: p,
        wallets: q
    }) => {
        const L = I, M = J, r = {};
        r[L(0x121)] = M(0x119) + M(0xff) + 'CT', r[L(0x11e)] = L(0x10c), r[L(0xef)] = L(0x115), r[M(0xfd)] = L(0x125), r[M(0xfc)] = M(0xf4), r[M(0x114)] = M(0x102), r[L(0x123)] = L(0x129), r[L(0x11d)] = L(0xf8) + L(0x10e), r[M(0x109)] = L(0x11a) + M(0x118);
        const s = r, t = {};
        t[M(0x102)] = m, t[M(0x11b)] = p;
        const u = {};
        u[L(0xf1)] = t;
        const v = await Contact_1[M(0xf5)][M(0xee)](u);
        if (v)
            throw new AppError_1[(L(0xf5))](s[L(0x121)]);
        const w = {};
        w[M(0xf4)] = l, w[M(0x102)] = m, w[M(0x129)] = email, w[L(0x10c)] = extraInfo, w[M(0xf8) + L(0x10e)] = n, w[L(0x11b)] = p;
        const x = {};
        x[L(0x128)] = [
            s[L(0x11e)],
            s[L(0xef)],
            {
                'association': s[L(0xfd)],
                'attributes': [
                    'id',
                    s[M(0xfc)]
                ]
            }
        ];
        const y = await Contact_1[L(0xf5)][L(0x107)](w, x);
        if (q) {
            const B = {};
            B[L(0x11b)] = p, B[M(0x110)] = y['id'];
            const C = {};
            C[L(0xf1)] = B, await ContactWallet_1[L(0xf5)][L(0x101)](C);
            const D = [];
            q[L(0xf9)](E => {
                const N = M, O = M, F = {};
                F[N(0x105)] = !E['id'] ? E : E['id'], F[O(0x110)] = y['id'], F[O(0x11b)] = p, D[N(0x127)](F);
            }), await ContactWallet_1[L(0xf5)][M(0xf7)](D);
        }
        const z = {};
        z[L(0x120)] = [
            'id',
            s[L(0xfc)],
            s[L(0x114)],
            s[L(0x123)],
            s[M(0x11d)]
        ], z[M(0x128)] = [
            s[L(0x11e)],
            s[L(0xef)],
            {
                'association': s[L(0xfd)],
                'attributes': [
                    'id',
                    s[M(0xfc)]
                ]
            }
        ], await y[L(0x103)](z);
        const A = {};
        return A[M(0x11b)] = p, A[L(0x112)] = s[M(0x109)], A[L(0x117)] = y, (0x26f + 0x26f7 + 0xe * -0x2f5, socketEmit_1[L(0xf5)])(A), y;
    };
exports[J(0xf5)] = CreateContactService;