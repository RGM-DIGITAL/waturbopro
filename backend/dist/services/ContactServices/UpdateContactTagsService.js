'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x26da + -0x3d9 + -0x2186);
        let h = e[f];
        return h;
    }, b(c, d);
}
const x = b, y = b;
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(v(0x19f)) / (-0x1adf + 0x23a6 + -0x8c6) * (parseInt(w(0x18d)) / (-0x22 * 0x43 + -0x1 * 0x1f7e + 0x1433 * 0x2)) + parseInt(v(0x18b)) / (-0x388 + 0x831 + -0x7 * 0xaa) * (parseInt(w(0x1a0)) / (0x6a4 * 0x2 + 0xb0b * -0x1 + -0x239)) + parseInt(v(0x191)) / (0x1619 + -0x355 * -0x5 + -0xd3 * 0x2f) * (parseInt(w(0x186)) / (0xe9b * -0x2 + -0x9 * 0x2b3 + 0x3587)) + parseInt(w(0x18e)) / (0x3 * 0xb60 + 0x67e + 0x2897 * -0x1) + -parseInt(w(0x1a8)) / (-0x25eb + 0xf5e + 0x2f * 0x7b) + -parseInt(v(0x17c)) / (-0x478 + 0x3b1 + 0x8 * 0x1a) * (parseInt(v(0x1ad)) / (-0x1895 * 0x1 + 0x4 * -0x787 + 0x36bb)) + -parseInt(w(0x195)) / (0xcdd * 0x2 + 0x1647 + 0x6da * -0x7);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x3b * -0x1bd + -0x22a3 * 0x17 + 0x4455c));
var __importDefault = this && this[x(0x1a2) + y(0x18f)] || function (c) {
    const z = x;
    return c && c[z(0x182)] ? c : { 'default': c };
};
const o = {};
o[y(0x188)] = !![], Object[y(0x19c) + x(0x17d)](exports, x(0x182), o);
const AppError_1 = __importDefault(require(y(0x1a9) + y(0x19e) + 'r')), Contact_1 = __importDefault(require(x(0x18a) + x(0x199))), ContactTag_1 = __importDefault(require(x(0x18a) + y(0x199) + x(0x180))), UpdateContactService = async ({
        tags: h,
        contactId: i,
        tenantId: j
    }) => {
        const A = y, B = y, k = {};
        k[A(0x196)] = A(0x17e), k[A(0x18c)] = A(0x1a6), k[B(0x194)] = A(0x183), k[B(0x190)] = B(0x1a4) + A(0x189), k[A(0x1ab)] = B(0x181), k[A(0x17b)] = A(0x197), k[B(0x193)] = B(0x185), k[A(0x187)] = B(0x1a3) + A(0x1ae);
        const l = k, m = {};
        m[B(0x19b)] = j, m[B(0x1a1)] = i;
        const n = {};
        n[A(0x1a5)] = m, await ContactTag_1[A(0x17f)][A(0x192)](n);
        const p = [];
        h[B(0x19d)](t => {
            const C = B, D = A, u = {};
            u[C(0x184)] = !t['id'] ? t : t['id'], u[C(0x1a1)] = i, u[C(0x19b)] = j, p[C(0x198)](u);
        }), await ContactTag_1[B(0x17f)][A(0x1aa)](p);
        const q = {};
        q['id'] = i, q[B(0x19b)] = j;
        const r = {};
        r[A(0x1a5)] = q, r[A(0x19a)] = [
            'id',
            l[A(0x196)],
            l[B(0x18c)],
            l[A(0x194)],
            l[A(0x190)]
        ], r[B(0x1ac)] = [
            l[B(0x1ab)],
            l[A(0x17b)],
            {
                'association': l[A(0x193)],
                'attributes': [
                    'id',
                    l[B(0x196)]
                ]
            }
        ];
        const s = await Contact_1[B(0x17f)][B(0x1a7)](r);
        if (!s)
            throw new AppError_1[(A(0x17f))](l[A(0x187)], -0x1cf8 + -0x1b73 + 0x39ff);
        return s;
    };
exports[y(0x17f)] = UpdateContactService;
function a() {
    const E = [
        'contactId',
        '__importDe',
        'ERR_NO_CON',
        'profilePic',
        'where',
        'number',
        'findOne',
        '658752vPexGD',
        '../../erro',
        'bulkCreate',
        'WFAVl',
        'include',
        '4870PUkbyH',
        'TACT_FOUND',
        'UsCoB',
        '2907KRoGGh',
        'erty',
        'name',
        'default',
        'Tag',
        'extraInfo',
        '__esModule',
        'email',
        'tagId',
        'wallets',
        '3744SQyVWp',
        'NRYLI',
        'value',
        'Url',
        '../../mode',
        '153522DPleyX',
        'TlbCL',
        '8210qbeAZi',
        '999845DszDwE',
        'fault',
        'JwJUi',
        '635SIdrGO',
        'destroy',
        'zpQxZ',
        'zAPlP',
        '461516lCQdHU',
        'FSrsC',
        'tags',
        'push',
        'ls/Contact',
        'attributes',
        'tenantId',
        'defineProp',
        'forEach',
        'rs/AppErro',
        '2BfaMrw',
        '12MhYTgg'
    ];
    a = function () {
        return E;
    };
    return a();
}