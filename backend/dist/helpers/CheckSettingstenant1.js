'use strict';
function a() {
    const w = [
        'findOne',
        'TING_FOUND',
        'bGzIh',
        '__importDe',
        'AppError',
        'key',
        'where',
        '2hhrocc',
        '__esModule',
        '31913387OUeoRq',
        '10BVHbob',
        'jFGoJ',
        '2398112KrwHcb',
        '1159796EufSAT',
        '../models/',
        'tenantId',
        'Setting',
        '7455532Mkphzg',
        'erty',
        '5375475GDIiRq',
        'ERR_NO_SET',
        '3hszEMd',
        'fault',
        'defineProp',
        'value',
        'default',
        '../errors/',
        '957792NQkJws',
        '6yjkRwc',
        '6161373htGtMG',
        '12jfDzZA'
    ];
    a = function () {
        return w;
    };
    return a();
}
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x74)) / (0x1 * 0x1099 + 0xa11 + -0x1aa9) * (-parseInt(p(0x7a)) / (-0x1 * 0x1395 + -0x3 * 0x5f2 + -0x367 * -0xb)) + parseInt(q(0x82)) / (-0x1 * 0xb92 + 0x190f + -0xd7a) * (-parseInt(p(0x79)) / (-0x1d * -0xc3 + -0x2 * -0x75a + -0x5 * 0x75b)) + parseInt(p(0x80)) / (0x1645 * 0x1 + -0x1a3 * 0x2 + -0x12fa) + parseInt(q(0x89)) / (0xc04 * -0x3 + 0x5d5 + 0x1e3d) * (-parseInt(q(0x7e)) / (0x48b * 0x2 + -0x1 * 0x1537 + 0xc28)) + parseInt(q(0x88)) / (0x25d1 + 0xee3 * -0x1 + -0x6 * 0x3d1) + -parseInt(q(0x8a)) / (-0x2f * -0x61 + -0x687 * 0x3 + 0x1cf) * (parseInt(q(0x77)) / (0xb * 0x4a + -0x55e + 0xa * 0x39)) + -parseInt(p(0x76)) / (-0x10f9 + 0x100 + -0x1 * -0x1004) * (-parseInt(p(0x8b)) / (0x56 * 0x27 + 0x1d90 + -0x886 * 0x5));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x29737 + -0x958 * -0x143 + -0x1ed9 * 0x2));
var __importDefault = this && this[r(0x70) + s(0x83)] || function (c) {
    const t = r;
    return c && c[t(0x75)] ? c : { 'default': c };
};
const k = {};
k[r(0x85)] = !![], Object[s(0x84) + r(0x7f)](exports, s(0x75), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xf66 + -0xe80 + -0x79);
        let h = e[f];
        return h;
    }, b(c, d);
}
const Setting_1 = __importDefault(require(r(0x7b) + r(0x7d))), AppError_1 = __importDefault(require(s(0x87) + r(0x71))), CheckSettingstenant1 = async (f, g = null) => {
        const u = s, v = s, h = {};
        h[u(0x78)] = function (n, o) {
            return n && o;
        }, h[v(0x6f)] = v(0x81) + v(0x6e);
        const i = h, j = {};
        j[u(0x7c)] = 0x1, j[u(0x72)] = f;
        const l = {};
        l[v(0x73)] = j;
        const m = await Setting_1[v(0x86)][v(0x6d)](l);
        if (i[u(0x78)](!m, !g))
            throw new AppError_1[(v(0x86))](i[v(0x6f)], 0x1 * 0x1bf + -0x1884 + 0x1859);
        return m?.[u(0x85)] || g;
    };
exports[s(0x86)] = CheckSettingstenant1;