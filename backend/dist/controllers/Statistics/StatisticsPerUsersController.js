'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x20c * -0xd + 0x21d4 + -0x3b77);
        let h = e[f];
        return h;
    }, b(c, d);
}
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0x109)) / (0x1 * -0x21b3 + -0x215 + 0x23c9) * (-parseInt(l(0x100)) / (0x3 * 0xba3 + 0x268a * 0x1 + -0x4971)) + parseInt(l(0x114)) / (-0xc2 * -0x7 + 0x1 * 0x5f1 + -0xb3c) * (-parseInt(m(0x116)) / (-0x1001 + 0x235f + -0x135a * 0x1)) + -parseInt(l(0x101)) / (-0xa * -0x169 + 0x1 * -0x251a + 0x1705) * (parseInt(l(0xfd)) / (0x1f13 + 0x1c2d + -0x3b3a)) + -parseInt(l(0xfa)) / (0x10a5 + -0xc7 + 0x32b * -0x5) + parseInt(l(0x111)) / (0x21 * 0x79 + 0x1 * -0x2069 + -0x16 * -0xc4) * (-parseInt(l(0x10a)) / (-0x1 * -0x2d2 + 0x1 * -0x1757 + -0x148e * -0x1)) + -parseInt(m(0xfe)) / (-0x70c + -0x15dd + 0x1cf3) + parseInt(l(0x104)) / (-0x1579 + 0x1d4d + 0x7c9 * -0x1) * (parseInt(l(0x112)) / (0xcd * 0x2c + 0x1836 + -0x3b66));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x161ebd + -0xb367d + 0x3277f));
function a() {
    const s = [
        'endDate',
        'defineProp',
        'sers',
        'index',
        'startDate',
        '230608nYsxrB',
        '102107868XNrezP',
        '../../serv',
        '6BKMMDl',
        'json',
        '3530444nsshCH',
        'erty',
        'isticsPerU',
        '10356969iGLqgZ',
        'query',
        'user',
        '6mazqGy',
        '18280920oohtNE',
        '__esModule',
        '988354wRycom',
        '4727820CEPHAE',
        'ices/Stati',
        'default',
        '11WFsYIc',
        'tenantId',
        'fault',
        'stics/Stat',
        'value',
        '3bcpjNz',
        '27RCCEzd',
        '__importDe'
    ];
    a = function () {
        return s;
    };
    return a();
}
var __importDefault = this && this[n(0x10b) + n(0x106)] || function (c) {
    const p = o;
    return c && c[p(0xff)] ? c : { 'default': c };
};
const k = {};
k[o(0x108)] = !![], Object[o(0x10d) + o(0x117)](exports, o(0xff), k), exports[n(0x10f)] = void (0x166 * 0x3 + 0x2d7 * 0x7 + 0x1 * -0x1813);
const StatisticsPerUsers_1 = __importDefault(require(n(0x113) + o(0x102) + o(0x107) + n(0xf9) + o(0x10e))), index = async (d, e) => {
        const q = n, r = o, {tenantId: f} = d[q(0xfc)], {
                startDate: g,
                endDate: h
            } = d[r(0xfb)], i = {};
        i[q(0x110)] = g, i[r(0x10c)] = h, i[r(0x105)] = f;
        const j = await (0x760 + -0xb68 + 0x158 * 0x3, StatisticsPerUsers_1[r(0x103)])(i);
        return e[r(0x115)](j);
    };
exports[n(0x10f)] = index;