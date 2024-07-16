'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0x11c)) / (0xab5 + 0x1bda + -0x268e) + -parseInt(m(0x112)) / (-0xb * 0x1b1 + -0x1821 + 0x2abe) * (parseInt(l(0x10d)) / (0xbd * 0x2d + -0x158 + -0x1 * 0x1fde)) + -parseInt(m(0x11e)) / (0x1945 + 0x8a2 * 0x2 + -0x2a85) * (parseInt(l(0x121)) / (-0x169b + -0xab8 + 0x4 * 0x856)) + -parseInt(l(0x115)) / (-0x1175 + -0x301 * -0x1 + 0x22 * 0x6d) + -parseInt(m(0x10e)) / (0x1f * -0x125 + -0xc53 + 0x2fd5) + -parseInt(l(0x114)) / (-0x1cee + -0x217e + 0x1 * 0x3e74) + parseInt(m(0x117)) / (-0x4 * -0x61f + -0xfc7 * 0x1 + 0x6 * -0x172);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x9d3d7 + 0x1 * -0x29c8f + 0x22a5));
function a() {
    const s = [
        'json',
        '3714888WYubAy',
        '2605476ubdlBO',
        'tenantId',
        '25137432EOlFhd',
        'default',
        'query',
        '../../serv',
        'isticsPerU',
        '634473lOmENz',
        'value',
        '2222776vupSQv',
        '__esModule',
        'sers',
        '5rRGHit',
        'startDate',
        'index',
        'user',
        'fault',
        '__importDe',
        'erty',
        'stics/Stat',
        '111VuikwW',
        '6208328aKeUYs',
        'ices/Stati',
        'defineProp',
        'endDate',
        '32678tnZqnh'
    ];
    a = function () {
        return s;
    };
    return a();
}
var __importDefault = this && this[n(0x10a) + n(0x109)] || function (c) {
    const p = o;
    return c && c[p(0x11f)] ? c : { 'default': c };
};
const k = {};
k[o(0x11d)] = !![], Object[o(0x110) + n(0x10b)](exports, n(0x11f), k), exports[n(0x123)] = void (0x4 * -0x23b + 0x1abc + -0x11d0);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xe * 0x100 + 0x1 * -0xecc + -0x43 * -0x7);
        let h = e[f];
        return h;
    }, b(c, d);
}
const StatisticsPerUsers_1 = __importDefault(require(n(0x11a) + n(0x10f) + n(0x10c) + o(0x11b) + n(0x120))), index = async (d, e) => {
        const q = o, r = n, {tenantId: f} = d[q(0x124)], {
                startDate: g,
                endDate: h
            } = d[r(0x119)], i = {};
        i[q(0x122)] = g, i[r(0x111)] = h, i[r(0x116)] = f;
        const j = await (-0x1353 + 0x9 * 0x33d + -0x4e9 * 0x2, StatisticsPerUsers_1[r(0x118)])(i);
        return e[r(0x113)](j);
    };
exports[o(0x123)] = index;