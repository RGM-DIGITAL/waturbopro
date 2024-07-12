'use strict';
const y = b, z = b;
(function (c, d) {
    const w = b, x = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(w(0x107)) / (-0x21e5 + -0xdf3 + -0x1 * -0x2fd9) * (parseInt(x(0xfb)) / (0x5f2 + -0x981 + -0x391 * -0x1)) + parseInt(x(0xfe)) / (-0x17 * 0x7b + 0x1 * -0x5b9 + 0x10c9) * (parseInt(x(0xf1)) / (0x1453 + -0x26c9 * -0x1 + 0x8 * -0x763)) + parseInt(w(0xec)) / (-0x1b8b * 0x1 + 0x1 * -0x159b + 0x133 * 0x29) * (parseInt(w(0x104)) / (-0x1272 + -0x1 * -0xc8b + 0x29 * 0x25)) + parseInt(x(0x10d)) / (-0x2 * 0x2a5 + -0x23b8 + 0x2909) + parseInt(x(0xe9)) / (0x1 * -0xda6 + 0x18f9 + -0x7 * 0x19d) * (-parseInt(w(0xf7)) / (-0x3 * 0x812 + 0x2539 + -0xcfa)) + parseInt(x(0xea)) / (-0x18b + -0x156 * 0x1c + -0x3 * -0xcff) * (-parseInt(x(0xf0)) / (-0xd * 0x143 + 0x661 * -0x6 + 0x36b8)) + parseInt(w(0xf4)) / (0x1c33 * -0x1 + -0x35 * -0x7f + 0x1f4) * (-parseInt(x(0xfd)) / (0x7c * 0xe + 0x1c2d + -0x1174 * 0x2));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x50b54 + -0x1c0c + 0xb * -0x284d));
var __importDefault = this && this[y(0xed) + z(0xeb)] || function (c) {
    const A = y;
    return c && c[A(0xfc)] ? c : { 'default': c };
};
const k = {};
k[y(0x10e)] = !![], Object[z(0x100) + z(0xf8)](exports, y(0xfc), k);
function a() {
    const D = [
        '../../erro',
        '11vtGSqt',
        '64EFHsnE',
        'attributes',
        'ls/Tag',
        '36qbFCqD',
        'ERR_NO_TAG',
        'jnNpm',
        '18ZHUhrC',
        'erty',
        'tenantId',
        'rs/AppErro',
        '22880vMoWrQ',
        '__esModule',
        '253591sZDRcz',
        '65283MdTxSh',
        'reload',
        'defineProp',
        'findOne',
        'color',
        'FkWiD',
        '6ymTBTh',
        'where',
        'userId',
        '3TJBvkO',
        'OPXjh',
        'default',
        'isActive',
        'MPccJ',
        'kSjfm',
        '1645980UQPeNw',
        'value',
        '_FOUND',
        'update',
        '../../mode',
        '1168352LAmDaa',
        '127640frHwNj',
        'fault',
        '121450CAbQJa',
        '__importDe',
        'tag'
    ];
    a = function () {
        return D;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2697 + -0xff7 + -0x15ba);
        let h = e[f];
        return h;
    }, b(c, d);
}
const AppError_1 = __importDefault(require(z(0xef) + z(0xfa) + 'r')), Tag_1 = __importDefault(require(y(0xe8) + z(0xf3))), UpdateTagService = async ({
        tagData: h,
        tagId: i
    }) => {
        const B = y, C = z, j = {};
        j[B(0x108)] = C(0xee), j[B(0x10b)] = C(0x102), j[C(0x10c)] = C(0x10a), j[B(0x103)] = C(0x106), j[B(0xf6)] = C(0xf5) + C(0xe6);
        const l = j, {
                tag: m,
                color: n,
                isActive: o,
                userId: p,
                tenantId: q
            } = h, r = {};
        r['id'] = i, r[C(0xf9)] = q;
        const s = {};
        s[B(0x105)] = r, s[B(0xf2)] = [
            'id',
            l[B(0x108)],
            l[B(0x10b)],
            l[B(0x10c)],
            l[C(0x103)]
        ];
        const t = await Tag_1[C(0x109)][C(0x101)](s);
        if (!t)
            throw new AppError_1[(C(0x109))](l[C(0xf6)], -0xb8a + 0x1c45 + -0x3 * 0x50d);
        const u = {};
        u[B(0xee)] = m, u[B(0x102)] = n, u[C(0x10a)] = o, u[C(0x106)] = p, await t[C(0xe7)](u);
        const v = {};
        return v[C(0xf2)] = [
            'id',
            l[B(0x108)],
            l[C(0x10b)],
            l[B(0x10c)],
            l[B(0x103)]
        ], await t[C(0xff)](v), t;
    };
exports[z(0x109)] = UpdateTagService;