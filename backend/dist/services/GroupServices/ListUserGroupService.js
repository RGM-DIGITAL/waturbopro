'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0x95)) / (0x2262 + -0x22 * 0x17 + -0x1f53) + parseInt(l(0x9f)) / (0x448 + -0x220e + 0x1dc8 * 0x1) * (parseInt(l(0x97)) / (0x179 * 0x4 + -0x15 * 0x4c + -0x7 * -0xd)) + parseInt(m(0x8e)) / (0x401 + -0x61d + 0x220) * (-parseInt(m(0x9b)) / (-0xaac * 0x2 + 0x302 * -0x2 + -0x1 * -0x1b61)) + parseInt(m(0xa6)) / (-0x80d + -0x7 * 0x18a + 0x12d9) * (parseInt(m(0x91)) / (-0x47 * 0x4f + -0x47 * -0x88 + -0xfc8)) + -parseInt(l(0x8c)) / (-0x6af + 0x942 + 0x1f * -0x15) + -parseInt(l(0xb0)) / (0x11dd * 0x1 + 0x1 * 0x90a + -0x1ade) * (-parseInt(m(0xa2)) / (0x2563 + -0x1d29 + -0x830)) + -parseInt(l(0xb8)) / (0x1562 + -0x17 * -0x2d + -0x1962);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xf1 * -0x1580 + 0xaa0bb + 0x15b15a));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x117 * 0x1b + 0x1a8c + 0x369);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[n(0x99) + o(0x94)] || function (c) {
    const p = n;
    return c && c[p(0x90)] ? c : { 'default': c };
};
const k = {};
k[o(0xa8)] = !![], Object[o(0x9a) + o(0xa9)](exports, n(0x90), k);
const sequelize_1 = require(n(0x96)), Group_1 = __importDefault(require(n(0xb6) + o(0xaa))), ListUserGroupService = async ({
        tenantId: e,
        userId: f
    }) => {
        const q = o, r = n, g = q(0xb4) + r(0x9c) + q(0x9d) + q(0x8d) + q(0xad) + r(0x88) + r(0x93) + q(0x8a) + r(0xaf) + q(0xb5) + r(0xb2) + q(0xb1) + r(0xa1) + r(0x98) + q(0xa3) + q(0xac) + r(0x9e) + q(0xae) + q(0xab) + r(0xa0), h = {};
        h[r(0xa7)] = e, h[r(0xb7)] = f;
        const i = {};
        i[r(0x92) + 'ts'] = h, i[q(0xa4)] = sequelize_1[q(0x89)][r(0xa5)], i[r(0x8f)] = !![];
        const j = await Group_1[r(0x8b)][q(0x96)]?.[q(0xb3)](g, i);
        return j;
    };
function a() {
    const s = [
        '\x20\x20\x20and\x20uq.',
        '\x20=\x20q.id\x20\x0a\x20',
        'query',
        '\x0a\x20\x20\x20\x20selec',
        '.\x22groupId\x22',
        '../../mode',
        'userId',
        '27657443nPZFvA',
        '\x20u\x20\x0a\x20\x20\x20\x20,\x20',
        'QueryTypes',
        'ps\x22\x20uq\x20\x0a\x20\x20',
        'default',
        '1008624fACOAG',
        'ups\x22\x20q\x0a\x20\x20\x20',
        '93580PGlbmH',
        'nest',
        '__esModule',
        '20461PtSBaZ',
        'replacemen',
        '\x22UsersGrou',
        'fault',
        '1528312UYZhYh',
        'sequelize',
        '121515DJpbpU',
        '\x20u.id\x20\x0a\x20\x20\x20',
        '__importDe',
        'defineProp',
        '190fAfOue',
        't\x20q.*\x20\x0a\x20\x20\x20',
        '\x20from\x20\x22Gro',
        '\x0a\x20\x20\x20\x20and\x20q',
        '34evYEFv',
        'tId\x0a\x20\x20\x20\x20',
        '\x22userId\x22\x20=',
        '1055490ThlNAu',
        '\x20and\x20u.id\x20',
        'type',
        'SELECT',
        '2586ifjobz',
        'tenantId',
        'value',
        'erty',
        'ls/Group',
        '\x22\x20=\x20:tenan',
        '=\x20:userId\x20',
        '\x20,\x20\x22Users\x22',
        '.\x22tenantId',
        '\x20\x20where\x20uq',
        '72rgXHxI'
    ];
    a = function () {
        return s;
    };
    return a();
}
exports[o(0x8b)] = ListUserGroupService;