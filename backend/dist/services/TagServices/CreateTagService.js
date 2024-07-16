'use strict';
function a() {
    const s = [
        '7ONCFtF',
        '3rzlRGD',
        'isActive',
        '3217218loVJNP',
        '__importDe',
        'ls/Tag',
        '__esModule',
        '11550520xoLCbK',
        'default',
        'create',
        '1106928KQCHHn',
        'fault',
        'userId',
        '916724kXwdpB',
        'defineProp',
        '5faXQzD',
        '779400vGUkHx',
        '3977154voVYFc',
        'erty',
        'tag',
        'tenantId',
        'color',
        '../../mode',
        'value',
        '202298NEcnze'
    ];
    a = function () {
        return s;
    };
    return a();
}
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0x96)) / (-0x19a5 + -0x1848 + 0x31ee) * (-parseInt(m(0x94)) / (0x1e35 + -0x2 * 0x109 + -0x1c21)) + parseInt(m(0x8c)) / (0x205 + 0xd5b + 0x1 * -0xf5d) + -parseInt(l(0xa2)) / (-0x3 * 0x577 + -0x1711 + -0x2 * -0x13bd) * (parseInt(m(0xa4)) / (-0xfc8 + 0x39 * -0xa3 + 0x3418)) + -parseInt(l(0x98)) / (0x49 * 0x62 + 0x230b + -0x3ef7) * (-parseInt(m(0x95)) / (0x155 * -0x13 + -0xd90 * -0x1 + 0xbc6)) + parseInt(m(0x9f)) / (-0x1377 + -0x1b2b * -0x1 + -0x7ac) + parseInt(m(0x8d)) / (-0xe3d + 0xae * -0xb + 0x15c0) + -parseInt(l(0x9c)) / (0x1a * 0xee + 0x11 * -0x1cb + -0x19 * -0x41);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x3fb * -0x1f6 + 0x61e42 + 0x96a33 * -0x1));
var __importDefault = this && this[n(0x99) + n(0xa0)] || function (c) {
    const p = o;
    return c && c[p(0x9b)] ? c : { 'default': c };
};
const k = {};
k[n(0x93)] = !![], Object[n(0xa3) + o(0x8e)](exports, n(0x9b), k);
const Tag_1 = __importDefault(require(n(0x92) + n(0x9a))), CreateTagService = async ({
        tag: d,
        color: e,
        isActive: f,
        userId: g,
        tenantId: h
    }) => {
        const q = n, r = o, i = {};
        i[q(0x8f)] = d, i[q(0x91)] = e, i[q(0x97)] = f, i[q(0xa1)] = g, i[r(0x90)] = h;
        const j = await Tag_1[q(0x9d)][q(0x9e)](i);
        return j;
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x22d0 + 0x26ed + -0x29 * 0x1c9);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[o(0x9d)] = CreateTagService;