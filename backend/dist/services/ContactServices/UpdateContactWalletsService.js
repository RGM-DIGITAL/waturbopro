'use strict';
const x = b, y = b;
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(v(0x194)) / (-0x7a * -0x22 + 0x198c + -0x29bf) * (parseInt(v(0x1c2)) / (-0x202 * -0x6 + 0x1fa5 + 0xd3 * -0x35)) + parseInt(v(0x1b1)) / (-0x701 * -0x5 + -0x7 * -0x1a6 + -0x296 * 0x12) + parseInt(v(0x19d)) / (-0x118d + 0x6f + -0x891 * -0x2) * (-parseInt(w(0x1b0)) / (-0x4a3 * -0x7 + 0x2f * 0x11 + -0x238f)) + -parseInt(w(0x197)) / (0x2 * 0x12f8 + -0xa3e + -0x1bac) * (parseInt(w(0x1af)) / (0xfb5 + 0x26 * 0x26 + 0xaa9 * -0x2)) + parseInt(v(0x1b5)) / (0x3 * 0x23 + -0x25b5 * -0x1 + -0x4b * 0x82) + parseInt(w(0x1bb)) / (-0x1ddb + 0x731 + 0x791 * 0x3) * (-parseInt(w(0x1a9)) / (0x4 * 0x20 + 0xb47 + -0xbbd * 0x1)) + -parseInt(v(0x190)) / (-0x850 + -0x1866 + -0x5 * -0x68d) * (-parseInt(v(0x18f)) / (0x2 * -0x8a0 + -0x325 * -0x5 + 0x193));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x7e1b + -0x1f99 + 0x32ae2));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x60d + -0x1f87 + 0x1b09);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[x(0x198) + x(0x1b9)] || function (c) {
    const z = y;
    return c && c[z(0x196)] ? c : { 'default': c };
};
const o = {};
o[x(0x1bf)] = !![], Object[x(0x199) + x(0x193)](exports, x(0x196), o);
const AppError_1 = __importDefault(require(y(0x1bc) + y(0x1c0) + 'r')), Contact_1 = __importDefault(require(y(0x19f) + x(0x1b2))), ContactWallet_1 = __importDefault(require(x(0x19f) + x(0x1b2) + y(0x1a0))), UpdateContactWalletsService = async ({
        wallets: h,
        contactId: i,
        tenantId: j
    }) => {
        const A = x, B = y, k = {};
        k[A(0x1a8)] = A(0x1b8), k[A(0x19a)] = B(0x1a1), k[A(0x1b3)] = A(0x1ab), k[B(0x1a4)] = A(0x1a7) + B(0x1a3), k[B(0x1c3)] = A(0x1a6), k[B(0x1bd)] = B(0x19b), k[B(0x195)] = A(0x1a2), k[A(0x1b4)] = A(0x1b6) + B(0x1b7);
        const l = k, m = {};
        m[A(0x1ac)] = j, m[B(0x1ba)] = i;
        const n = {};
        n[A(0x191)] = m, await ContactWallet_1[A(0x1a5)][B(0x19c)](n);
        const p = [];
        h[B(0x1ad)](t => {
            const C = B, D = B, u = {};
            u[C(0x1ae)] = !t['id'] ? t : t['id'], u[D(0x1ba)] = i, u[C(0x1ac)] = j, p[C(0x19e)](u);
        }), await ContactWallet_1[A(0x1a5)][A(0x1be)](p);
        const q = {};
        q['id'] = i, q[B(0x1ac)] = j;
        const r = {};
        r[A(0x191)] = q, r[B(0x192)] = [
            'id',
            l[B(0x1a8)],
            l[B(0x19a)],
            l[B(0x1b3)],
            l[B(0x1a4)]
        ], r[B(0x1c1)] = [
            l[A(0x1c3)],
            l[B(0x1bd)],
            {
                'association': l[A(0x195)],
                'attributes': [
                    'id',
                    l[B(0x1a8)]
                ]
            }
        ];
        const s = await Contact_1[A(0x1a5)][B(0x1aa)](r);
        if (!s)
            throw new AppError_1[(A(0x1a5))](l[B(0x1b4)], 0x196a + 0x39 + -0x805 * 0x3);
        return s;
    };
function a() {
    const E = [
        'tenantId',
        'forEach',
        'walletId',
        '3091522RbZZAe',
        '205UagptC',
        '1150443UkHMXl',
        'ls/Contact',
        'xWQBW',
        'WdLXx',
        '1687024eYNqce',
        'ERR_NO_CON',
        'TACT_FOUND',
        'name',
        'fault',
        'contactId',
        '3572109wSyAfJ',
        '../../erro',
        'fyKut',
        'bulkCreate',
        'value',
        'rs/AppErro',
        'include',
        '2FRazBR',
        'rkLZe',
        '60dErdhU',
        '728101MTKogC',
        'where',
        'attributes',
        'erty',
        '171376nIFOxK',
        'GISvk',
        '__esModule',
        '6ZoOiLy',
        '__importDe',
        'defineProp',
        'Dmqtw',
        'tags',
        'destroy',
        '2572erUKft',
        'push',
        '../../mode',
        'Wallet',
        'number',
        'wallets',
        'Url',
        'JGRvp',
        'default',
        'extraInfo',
        'profilePic',
        'ubPhW',
        '10DcqsNH',
        'findOne',
        'email'
    ];
    a = function () {
        return E;
    };
    return a();
}
exports[x(0x1a5)] = UpdateContactWalletsService;