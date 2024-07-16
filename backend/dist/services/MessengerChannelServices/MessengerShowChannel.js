'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0xd0)) / (0x1a98 + -0x22f3 * 0x1 + 0x1ac * 0x5) * (parseInt(n(0xd2)) / (0x1ba5 + -0xe1a + -0xd89)) + -parseInt(n(0xca)) / (0x1e * 0x72 + -0x9f0 + -0x123 * 0x3) * (-parseInt(n(0xf6)) / (0x21f5 + -0x5 * -0x1f6 + -0x3 * 0xe95)) + parseInt(o(0xe1)) / (0xe53 * 0x2 + -0x1e9 + -0x1ab8) + -parseInt(n(0xd9)) / (0x1d8 + 0x1b5d + -0x1 * 0x1d2f) * (-parseInt(n(0xde)) / (-0x1 * -0x1253 + 0x1 * -0x347 + 0xf05 * -0x1)) + -parseInt(n(0xc9)) / (0x1 * 0x473 + -0x23af + 0x1f44) + parseInt(o(0xed)) / (0x2 * 0x205 + -0x1a80 + 0x167f * 0x1) + -parseInt(o(0xd1)) / (-0x3 * -0x4ff + 0x1 * -0x1b7f + 0xc8c);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x514e * 0x4 + -0x5ae2a + -0x10a11 * -0xa));
function a() {
    const u = [
        'defineProp',
        'fbObject',
        'value',
        'GUkZp',
        'default',
        'fbPageId',
        'fault',
        '4omwTsy',
        'MzENg',
        '3190616wsEImn',
        '147552LqIvHi',
        '__esModule',
        'NNEL_FOUND',
        'SkLJh',
        '__importDe',
        'tokenAPI',
        '7Rnrkek',
        '2257020SRvskn',
        '82894DXpSBm',
        'findOne',
        'gHoMk',
        'EDYXi',
        'createdAt',
        'zLoMr',
        'attributes',
        '54GcowIi',
        'qFnHN',
        'where',
        'updatedAt',
        'srJLT',
        '268597VxByyw',
        'EJENk',
        'tenantId',
        '1520690CXEROw',
        'wCjpi',
        '../../erro',
        'instagramK',
        'name',
        'status',
        'UJtpl',
        '../../mode',
        'ls/Whatsap',
        'type',
        'rs/AppErro',
        'erty',
        '3974445rwNVEl',
        'ERR_NO_CHA'
    ];
    a = function () {
        return u;
    };
    return a();
}
var __importDefault = this && this[p(0xce) + p(0xf5)] || function (c) {
    const r = p;
    return c && c[r(0xcb)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1cd * -0x1 + -0x23b1 + -0x29 * -0xef);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[p(0xf1)] = !![], Object[q(0xef) + q(0xec)](exports, p(0xcb), k);
const Whatsapp_1 = __importDefault(require(q(0xe8) + q(0xe9) + 'p')), AppError_1 = __importDefault(require(q(0xe3) + p(0xeb) + 'r')), MessengerShowChannel = async ({fbPageId: f}) => {
        const s = q, t = p, g = {};
        g[s(0xe2)] = t(0xe5), g[s(0xf2)] = s(0xe6), g[s(0xda)] = s(0xea), g[t(0xd7)] = s(0xd6), g[s(0xd4)] = t(0xdc), g[s(0xd5)] = t(0xe0), g[s(0xdf)] = t(0xcf), g[t(0xf7)] = s(0xf4), g[s(0xdd)] = s(0xf0), g[t(0xcd)] = s(0xe4) + 'ey', g[t(0xe7)] = s(0xee) + s(0xcc);
        const h = g, i = [
                'id',
                h[t(0xe2)],
                h[s(0xf2)],
                h[t(0xda)],
                h[t(0xd7)],
                h[t(0xd4)],
                h[t(0xd5)],
                h[s(0xdf)],
                h[s(0xf7)],
                h[t(0xdd)],
                h[t(0xcd)]
            ], j = {};
        j[s(0xf4)] = f;
        const l = {};
        l[s(0xdb)] = j, l[t(0xd8)] = i;
        const m = await Whatsapp_1[t(0xf3)][s(0xd3)](l);
        if (!m)
            throw new AppError_1[(t(0xf3))](h[t(0xe7)], -0x1 * -0x391 + 0xa * 0x26e + -0x1a49);
        return m;
    };
exports[q(0xf3)] = MessengerShowChannel;