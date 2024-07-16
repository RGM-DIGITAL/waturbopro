'use strict';
const y = b, z = b;
(function (c, d) {
    const w = b, x = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(w(0x15c)) / (-0x1 * 0x1f39 + 0x51 * 0x1 + 0x1ee9) + -parseInt(w(0x169)) / (0x46 * 0x59 + 0x176f * 0x1 + -0x1 * 0x2fc3) + parseInt(x(0x16e)) / (-0x4ff * 0x2 + -0x209f + -0x8 * -0x554) * (-parseInt(x(0x173)) / (0x60 * -0x24 + 0x5 * -0x2ba + 0x1b26)) + -parseInt(w(0x17b)) / (0x1f * 0xb5 + -0x2599 + -0xfb3 * -0x1) + -parseInt(w(0x16a)) / (0x3 * -0x34f + 0x6f * 0x3 + 0x8a6) + -parseInt(x(0x15b)) / (0x5 * -0x241 + -0x14db + 0x1 * 0x2027) * (parseInt(x(0x15f)) / (-0x1fb7 + 0x1d55 + -0x2 * -0x135)) + parseInt(x(0x162)) / (0xb * -0x1cf + 0x1696 + -0x2a8) * (parseInt(x(0x16f)) / (0x2 * 0x545 + 0x1257 + -0x99d * 0x3));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xb9fe9 + 0x1258c2 + -0x2 * -0x412f5));
function a() {
    const D = [
        '3mUvJCm',
        '5487270CSdTHP',
        'nxiaf',
        'tenantId',
        'tag',
        '7276784hWNxfT',
        '__importDe',
        'fault',
        '_FOUND',
        'defineProp',
        'update',
        '../../erro',
        'isActive',
        '1361485QXPplf',
        'default',
        'GJibG',
        'ls/Tag',
        'fwLbF',
        'wfCpM',
        '7ugxmCf',
        '1900727thmuLu',
        'QoiMt',
        'findOne',
        '14405896ezPsih',
        '__esModule',
        'reload',
        '81NklBVC',
        'erty',
        '../../mode',
        'userId',
        'color',
        'rs/AppErro',
        'attributes',
        '3037460ASKwnW',
        '2722674CZpcJh',
        'where',
        'value',
        'ERR_NO_TAG'
    ];
    a = function () {
        return D;
    };
    return a();
}
var __importDefault = this && this[y(0x174) + z(0x175)] || function (c) {
    const A = z;
    return c && c[A(0x160)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xb6f + 0xc6b + 0x5a * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[y(0x16c)] = !![], Object[y(0x177) + y(0x163)](exports, z(0x160), k);
const AppError_1 = __importDefault(require(z(0x179) + z(0x167) + 'r')), Tag_1 = __importDefault(require(z(0x164) + z(0x158))), UpdateTagService = async ({
        tagData: h,
        tagId: i
    }) => {
        const B = z, C = y, j = {};
        j[B(0x15d)] = C(0x172), j[B(0x15a)] = B(0x166), j[B(0x170)] = B(0x17a), j[C(0x159)] = C(0x165), j[C(0x157)] = C(0x16d) + C(0x176);
        const l = j, {
                tag: m,
                color: n,
                isActive: o,
                userId: p,
                tenantId: q
            } = h, r = {};
        r['id'] = i, r[C(0x171)] = q;
        const s = {};
        s[C(0x16b)] = r, s[B(0x168)] = [
            'id',
            l[C(0x15d)],
            l[C(0x15a)],
            l[C(0x170)],
            l[C(0x159)]
        ];
        const t = await Tag_1[B(0x156)][B(0x15e)](s);
        if (!t)
            throw new AppError_1[(C(0x156))](l[C(0x157)], 0x8fd + -0x1 * -0x259 + -0x9c2);
        const u = {};
        u[C(0x172)] = m, u[B(0x166)] = n, u[C(0x17a)] = o, u[C(0x165)] = p, await t[C(0x178)](u);
        const v = {};
        return v[B(0x168)] = [
            'id',
            l[C(0x15d)],
            l[C(0x15a)],
            l[B(0x170)],
            l[C(0x159)]
        ], await t[B(0x161)](v), t;
    };
exports[z(0x156)] = UpdateTagService;