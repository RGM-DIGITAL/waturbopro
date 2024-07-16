'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(o(0x199)) / (0x1795 * -0x1 + 0x47a + 0x131c) + parseInt(o(0x19a)) / (0x5 * -0x565 + 0x81 * 0x29 + 0x652) + parseInt(p(0x19b)) / (0x49 * 0x49 + -0x13cd * 0x1 + -0x101) * (parseInt(o(0x194)) / (-0xa1f * -0x1 + -0x17de + 0xdc3)) + parseInt(o(0x198)) / (0x93d + -0x197 * -0x4 + 0x4 * -0x3e5) * (parseInt(p(0x196)) / (-0xa73 + 0x1 * -0x731 + 0x11aa)) + -parseInt(p(0x193)) / (-0x1327 + -0xe12 + 0x10 * 0x214) * (-parseInt(p(0x1a9)) / (0x47d * -0x1 + -0x1b33 + 0x1c * 0x122)) + -parseInt(o(0x1a7)) / (-0x2407 + 0x2 * -0xf3d + -0x3 * -0x162e) * (parseInt(o(0x1a5)) / (0xf * 0xfe + 0x249d + -0x3375)) + -parseInt(o(0x19c)) / (-0x14e5 + 0x23d + 0x12b3) * (-parseInt(p(0x18e)) / (0x28c * 0xb + 0x1247 + -0x2e3f));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x3052c * 0x6 + 0xfdb09 * 0x1 + -0x1684c6));
var __importDefault = this && this[q(0x1a8) + r(0x190)] || function (c) {
    const s = q;
    return c && c[s(0x18b)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xdcd + -0x16a5 + 0x376 * 0x3);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const v = [
        '923390YvhMJW',
        'findOne',
        '90okzIKS',
        '__importDe',
        '416zhHNQz',
        'ls/Tag',
        'ERR_NO_TAG',
        'ERR_TAG_CO',
        '__esModule',
        'where',
        'value',
        '4195068hJnRKl',
        'IFwsX',
        'fault',
        'NTACTS_EXI',
        'rs/AppErro',
        '55307smXCZP',
        '4RviOMu',
        'default',
        '18294ZmNQhy',
        'STS',
        '1135RygdNf',
        '1338161mlwODC',
        '1511966AksYYY',
        '2411781CKESpP',
        '11HiTvvV',
        'defineProp',
        'erty',
        'tenantId',
        'destroy',
        '../../erro',
        '../../mode',
        '_FOUND',
        'hHgMK'
    ];
    a = function () {
        return v;
    };
    return a();
}
k[r(0x18d)] = !![], Object[r(0x19d) + q(0x19e)](exports, q(0x18b), k);
const Tag_1 = __importDefault(require(r(0x1a2) + r(0x1aa))), AppError_1 = __importDefault(require(q(0x1a1) + r(0x192) + 'r')), DeleteTagService = async ({
        id: f,
        tenantId: g
    }) => {
        const t = r, u = q, h = {};
        h[t(0x1a4)] = t(0x1ab) + u(0x1a3), h[t(0x18f)] = t(0x18a) + u(0x191) + u(0x197);
        const i = h, j = {};
        j['id'] = f, j[t(0x19f)] = g;
        const l = {};
        l[u(0x18c)] = j;
        const m = await Tag_1[t(0x195)][u(0x1a6)](l);
        if (!m)
            throw new AppError_1[(u(0x195))](i[t(0x1a4)], -0x119 * 0x1d + -0x826 + -0x298f * -0x1);
        try {
            await m[u(0x1a0)]();
        } catch (n) {
            throw new AppError_1[(u(0x195))](i[u(0x18f)], -0x4c3 * 0x8 + 0x7d3 * 0x3 + 0x1d * 0x8f);
        }
    };
exports[q(0x195)] = DeleteTagService;