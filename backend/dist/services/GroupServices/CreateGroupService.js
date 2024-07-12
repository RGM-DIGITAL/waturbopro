'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2705 + -0x1022 + 0x1bd2 * 0x2);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const s = [
        '109137uXPsJQ',
        '1299177FtQkoS',
        'default',
        'ls/Group',
        '77IKEJlz',
        '__esModule',
        '6160453ZBzROw',
        'defineProp',
        '16RGztwg',
        'create',
        '45PAzJqm',
        '11990850SzjpHu',
        '12cSMcbA',
        'value',
        'tenantId',
        'userId',
        '../../mode',
        'isActive',
        '5884415thWByt',
        'fault',
        'group',
        'erty',
        '11QBhNoL',
        '22Qctsgx',
        '772158wVDUDW',
        '__importDe',
        '303460EWjTfu'
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
            const f = -parseInt(l(0x86)) / (-0x1 * -0x5da + -0x1 * 0xe45 + -0x134 * -0x7) * (-parseInt(l(0x82)) / (-0x1 * -0x12ae + 0x3 * 0x739 + -0x2857)) + -parseInt(m(0x90)) / (0x279 + 0xe * 0x1c9 + -0x1b74) * (parseInt(l(0x85)) / (0x1620 + 0x17d5 + -0x2df1)) + -parseInt(l(0x7d)) / (0x2088 + 0x1501 + -0x32 * 0x112) + parseInt(m(0x83)) / (-0x118d + -0x1b3 + 0x1346) * (parseInt(m(0x8a)) / (-0xa20 + -0x1a99 * -0x1 + -0x839 * 0x2)) + -parseInt(m(0x8e)) / (0x1d77 * -0x1 + -0xa98 + -0x21 * -0x137) * (parseInt(l(0x87)) / (0xa * -0x365 + 0x13ca + -0x4bb * -0x3)) + -parseInt(m(0x91)) / (-0x2f1 * -0x5 + 0x153b + -0x11f3 * 0x2) * (-parseInt(l(0x81)) / (-0x2 * 0x869 + -0x1 * -0x18d0 + -0x7f3)) + parseInt(m(0x92)) / (0x17e5 * -0x1 + 0x44c + 0x1 * 0x13a5) * (-parseInt(m(0x8c)) / (0xcc * 0x1a + 0xa + 0x117 * -0x13));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xd446d + 0x5ff9b + -0x8021e * 0x1));
var __importDefault = this && this[n(0x84) + n(0x7e)] || function (c) {
    const p = o;
    return c && c[p(0x8b)] ? c : { 'default': c };
};
const k = {};
k[n(0x93)] = !![], Object[o(0x8d) + n(0x80)](exports, n(0x8b), k);
const Group_1 = __importDefault(require(o(0x96) + o(0x89))), CreateGruopService = async ({
        group: d,
        isActive: e,
        userId: f,
        tenantId: g
    }) => {
        const q = n, r = o, h = {};
        h[q(0x7f)] = d, h[r(0x97)] = e, h[q(0x95)] = f, h[q(0x94)] = g;
        const i = await Group_1[r(0x88)][q(0x8f)](h);
        return i;
    };
exports[n(0x88)] = CreateGruopService;