'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0x1f3)) / (-0x262c + -0x1 * 0x18e3 + -0x3f10 * -0x1) * (parseInt(m(0x1f2)) / (-0x23b * 0x11 + -0x510 + -0x9b * -0x47)) + -parseInt(m(0x1f7)) / (-0x432 + -0xd2 * 0xb + 0x1 * 0xd3b) + -parseInt(m(0x1fb)) / (0x117e + -0x942 + -0x838) + -parseInt(l(0x1ed)) / (0x129e + 0xf36 * -0x1 + -0x363) + parseInt(m(0x1e9)) / (-0xc8 + 0x14cc + -0x6 * 0x355) + -parseInt(l(0x1fa)) / (0xa77 + 0x1f * 0x4d + -0x13c3) * (-parseInt(m(0x1ea)) / (0x3 * 0x65d + -0x3aa + -0xf65 * 0x1)) + parseInt(l(0x1ec)) / (0x1 * -0x22 + 0x17 * -0x137 + 0x1c1c);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x13760 + 0x1993 * -0x19 + 0xb * 0xb2fe));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x25 * -0x105 + 0x2 * -0x5d1 + 0x81 * -0x30);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[n(0x1f9) + o(0x1f8)] || function (c) {
    const p = n;
    return c && c[p(0x1f5)] ? c : { 'default': c };
};
const k = {};
k[o(0x1fc)] = !![], Object[o(0x1f0) + o(0x1eb)](exports, o(0x1f5), k);
function a() {
    const s = [
        'tenantId',
        '__esModule',
        'isActive',
        '539292DXLZRk',
        'fault',
        '__importDe',
        '2944249QKSFHu',
        '314284WUOUHN',
        'value',
        'default',
        'ls/Group',
        '../../mode',
        '3105792LTYSLk',
        '8fZSqro',
        'erty',
        '478143UUpymy',
        '1706345hroFpe',
        'userId',
        'create',
        'defineProp',
        'group',
        '262214GedmCZ',
        '1bsahnA'
    ];
    a = function () {
        return s;
    };
    return a();
}
const Group_1 = __importDefault(require(n(0x1e8) + o(0x1e7))), CreateGruopService = async ({
        group: d,
        isActive: e,
        userId: f,
        tenantId: g
    }) => {
        const q = n, r = o, h = {};
        h[q(0x1f1)] = d, h[q(0x1f6)] = e, h[q(0x1ee)] = f, h[r(0x1f4)] = g;
        const i = await Group_1[r(0x1fd)][q(0x1ef)](h);
        return i;
    };
exports[n(0x1fd)] = CreateGruopService;