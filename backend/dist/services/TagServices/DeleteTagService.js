'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0x133)) / (-0x1527 + 0x5f5 + 0xf33) * (-parseInt(o(0x138)) / (0x1ea8 + 0x88b * -0x3 + 0x5 * -0x101)) + -parseInt(o(0x129)) / (0x1 * 0x136b + -0x1e95 * -0x1 + -0x31fd) + -parseInt(o(0x136)) / (-0x2e2 + -0x1487 * -0x1 + -0x11a1) + parseInt(o(0x122)) / (-0x66 * -0x54 + -0x15cb + -0x5d4 * 0x2) * (parseInt(o(0x12d)) / (-0x5 * -0x623 + -0x3 * -0x837 + 0x2 * -0x1ba7)) + parseInt(o(0x126)) / (0x11ae + 0x1c9a + -0x2e41 * 0x1) * (parseInt(p(0x139)) / (-0x2001 + -0x249 + 0x2252)) + parseInt(p(0x125)) / (0x4 * -0x392 + 0x2361 * -0x1 + 0x31b2) * (parseInt(o(0x124)) / (-0x9b * 0x1d + -0x3 * -0x33b + -0x17 * -0x58)) + parseInt(o(0x134)) / (0x7ef * -0x1 + -0x68d + 0xe87);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x16 * 0xcb9f + 0x1 * -0xdbb16 + 0x50fde));
var __importDefault = this && this[q(0x135) + q(0x12c)] || function (c) {
    const s = q;
    return c && c[s(0x11f)] ? c : { 'default': c };
};
const k = {};
k[r(0x12f)] = !![], Object[r(0x123) + r(0x121)](exports, r(0x11f), k);
const Tag_1 = __importDefault(require(r(0x131) + r(0x137))), AppError_1 = __importDefault(require(q(0x128) + r(0x13f) + 'r')), DeleteTagService = async ({
        id: f,
        tenantId: g
    }) => {
        const t = r, u = q, h = {};
        h[t(0x130)] = t(0x12e) + u(0x13a), h[t(0x120)] = u(0x12a) + t(0x127) + t(0x13b);
        const i = h, j = {};
        j['id'] = f, j[u(0x132)] = g;
        const l = {};
        l[t(0x13e)] = j;
        const m = await Tag_1[u(0x13d)][t(0x12b)](l);
        if (!m)
            throw new AppError_1[(u(0x13d))](i[u(0x130)], 0xb * 0x17d + -0x230a + 0x143f);
        try {
            await m[u(0x13c)]();
        } catch (n) {
            throw new AppError_1[(u(0x13d))](i[t(0x120)], 0x53 * -0x74 + 0x122 * -0x1b + -0xba1 * -0x6);
        }
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x124b + -0x56 * -0x3 + -0xd * 0x166);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const v = [
        '17470057ZZaBuB',
        '__importDe',
        '3972768fyGSbG',
        'ls/Tag',
        '2LsoKDa',
        '8MvLOUA',
        '_FOUND',
        'STS',
        'destroy',
        'default',
        'where',
        'rs/AppErro',
        '__esModule',
        'nkOwi',
        'erty',
        '45735KQUKBk',
        'defineProp',
        '7330QbyYRe',
        '12636lufOLm',
        '638141lyMbxk',
        'NTACTS_EXI',
        '../../erro',
        '2627715ZiFEEt',
        'ERR_TAG_CO',
        'findOne',
        'fault',
        '474UUgPox',
        'ERR_NO_TAG',
        'value',
        'gzkoT',
        '../../mode',
        'tenantId',
        '983324jrGwYZ'
    ];
    a = function () {
        return v;
    };
    return a();
}
exports[q(0x13d)] = DeleteTagService;