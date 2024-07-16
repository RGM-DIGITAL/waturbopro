'use strict';
const x = b, y = b;
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(v(0x18d)) / (0x1ef4 + -0x214e + 0x25b) * (parseInt(w(0x199)) / (0x2197 * -0x1 + 0x18df + -0x2 * -0x45d)) + parseInt(w(0x189)) / (0x6cb * 0x5 + -0x15b7 + -0xc3d) * (parseInt(v(0x174)) / (0x21ff + -0x331 + -0xf65 * 0x2)) + -parseInt(v(0x18a)) / (0x2032 * 0x1 + -0xf * -0x3a + 0x2393 * -0x1) * (parseInt(v(0x196)) / (0x14a9 * 0x1 + 0x1af + -0x1 * 0x1652)) + parseInt(v(0x184)) / (-0xfeb + 0x8e7 + 0x70b * 0x1) + -parseInt(v(0x194)) / (-0x90d + 0x7f * 0x13 + -0x58) + parseInt(w(0x175)) / (0xe * 0x96 + 0x1 * 0x1727 + -0x1f52 * 0x1) * (parseInt(w(0x197)) / (-0x79b + 0x2116 + 0x27 * -0xa7)) + parseInt(v(0x17f)) / (0x1eb * 0x4 + -0x38a * 0xa + -0x17 * -0x135) * (-parseInt(w(0x19f)) / (-0xb7e + -0x3d2 + 0xf5c));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * -0x13f99 + 0x9aee5 * 0x1 + -0xb * 0x3597));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * -0x1d0a + -0x7 * -0x207 + 0x1047);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[x(0x183) + x(0x18f)] || function (c) {
    const z = x;
    return c && c[z(0x18b)] ? c : { 'default': c };
};
const o = {};
o[y(0x176)] = !![], Object[x(0x1a1) + y(0x1a2)](exports, x(0x18b), o);
function a() {
    const E = [
        'rs/AppErro',
        'destroy',
        'BjfGf',
        'include',
        'default',
        'profilePic',
        '4hlAiId',
        '7641hODaeV',
        'value',
        'TACT_FOUND',
        'yWMMr',
        'bulkCreate',
        'email',
        '../../erro',
        'ZaPhh',
        'name',
        'tags',
        '462EIbHtZ',
        'extraInfo',
        'Wallet',
        'push',
        '__importDe',
        '4029522HfikbX',
        'istJk',
        'walletId',
        'wallets',
        'where',
        '729849Ypojbw',
        '355065IxIeDw',
        '__esModule',
        'ls/Contact',
        '3569NKycwP',
        'YWvKZ',
        'fault',
        'number',
        'findOne',
        '../../mode',
        'iQYRo',
        '4098160zjTYwV',
        'Url',
        '30QdjYdH',
        '8410OYKVaj',
        'tenantId',
        '196QGacHl',
        'attributes',
        'oYSVs',
        'forEach',
        'contactId',
        'ERR_NO_CON',
        '175284yMRYOo',
        'eeoJE',
        'defineProp',
        'erty'
    ];
    a = function () {
        return E;
    };
    return a();
}
const AppError_1 = __importDefault(require(x(0x17b) + y(0x16e) + 'r')), Contact_1 = __importDefault(require(x(0x192) + y(0x18c))), ContactWallet_1 = __importDefault(require(y(0x192) + x(0x18c) + x(0x181))), UpdateContactWalletsService = async ({
        wallets: h,
        contactId: i,
        tenantId: j
    }) => {
        const A = y, B = y, k = {};
        k[A(0x17c)] = B(0x17d), k[B(0x193)] = B(0x190), k[A(0x170)] = B(0x17a), k[A(0x178)] = B(0x173) + B(0x195), k[A(0x19b)] = B(0x180), k[A(0x1a0)] = B(0x17e), k[A(0x18e)] = A(0x187), k[B(0x185)] = A(0x19e) + B(0x177);
        const l = k, m = {};
        m[B(0x198)] = j, m[B(0x19d)] = i;
        const n = {};
        n[A(0x188)] = m, await ContactWallet_1[A(0x172)][A(0x16f)](n);
        const p = [];
        h[A(0x19c)](t => {
            const C = A, D = B, u = {};
            u[C(0x186)] = !t['id'] ? t : t['id'], u[C(0x19d)] = i, u[C(0x198)] = j, p[D(0x182)](u);
        }), await ContactWallet_1[A(0x172)][B(0x179)](p);
        const q = {};
        q['id'] = i, q[A(0x198)] = j;
        const r = {};
        r[B(0x188)] = q, r[A(0x19a)] = [
            'id',
            l[B(0x17c)],
            l[B(0x193)],
            l[A(0x170)],
            l[B(0x178)]
        ], r[B(0x171)] = [
            l[B(0x19b)],
            l[B(0x1a0)],
            {
                'association': l[A(0x18e)],
                'attributes': [
                    'id',
                    l[A(0x17c)]
                ]
            }
        ];
        const s = await Contact_1[B(0x172)][A(0x191)](r);
        if (!s)
            throw new AppError_1[(A(0x172))](l[A(0x185)], -0x1e6b + -0x2 * 0x42b + 0x127 * 0x23);
        return s;
    };
exports[y(0x172)] = UpdateContactWalletsService;