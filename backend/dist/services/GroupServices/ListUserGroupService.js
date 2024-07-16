'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * 0xc5b + 0x2109 + -0x13a7);
        let h = e[f];
        return h;
    }, b(c, d);
}
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0x118)) / (-0x14b * -0x3 + -0x1 * 0x1085 + 0xca5) + parseInt(l(0x131)) / (-0xdde + -0xac3 + 0x18a3) * (-parseInt(m(0x12c)) / (0x13 * -0x112 + -0x289 + 0x65 * 0x3a)) + parseInt(m(0x123)) / (-0x2475 + 0x251f + 0xa6 * -0x1) + -parseInt(l(0x126)) / (0x1 * -0x635 + 0x19d8 + 0x345 * -0x6) + parseInt(l(0x122)) / (0x11c5 + 0x172a + -0x28e9) * (parseInt(m(0x115)) / (-0x2cf * 0x8 + -0xa * -0x1 + 0x1 * 0x1675)) + parseInt(m(0x11f)) / (0x15e0 + 0x3 * 0x4cd + 0x1 * -0x243f) + -parseInt(l(0x108)) / (0x49 * 0x65 + -0x25c4 + 0x100 * 0x9) * (-parseInt(m(0x129)) / (0x2378 + 0x2591 + -0x48ff));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x3b4e9 + 0x10b * -0x526 + 0xbe244));
function a() {
    const s = [
        '\x0a\x20\x20\x20\x20and\x20q',
        '.\x22tenantId',
        '154504RSTvEL',
        '=\x20:userId\x20',
        'ps\x22\x20uq\x20\x0a\x20\x20',
        '__importDe',
        't\x20q.*\x20\x0a\x20\x20\x20',
        '\x20u\x20\x0a\x20\x20\x20\x20,\x20',
        '.\x22groupId\x22',
        '1890600mtrhHa',
        'tId\x0a\x20\x20\x20\x20',
        '\x20,\x20\x22Users\x22',
        '1605228OphPMe',
        '796020eaovDE',
        'sequelize',
        '\x20from\x20\x22Gro',
        '1367550yYiQDE',
        'nest',
        'QueryTypes',
        '2630csiBCP',
        'erty',
        '\x22\x20=\x20:tenan',
        '375753obfWff',
        '\x22UsersGrou',
        'query',
        '\x0a\x20\x20\x20\x20selec',
        'default',
        '4PysBCl',
        'SELECT',
        '\x20and\x20u.id\x20',
        '\x22userId\x22\x20=',
        'fault',
        'tenantId',
        '\x20\x20\x20and\x20uq.',
        '5463DCaGio',
        'userId',
        'defineProp',
        '\x20\x20where\x20uq',
        'ls/Group',
        'replacemen',
        'ups\x22\x20q\x0a\x20\x20\x20',
        'type',
        'value',
        '\x20=\x20q.id\x20\x0a\x20',
        '__esModule',
        '\x20u.id\x20\x0a\x20\x20\x20',
        '../../mode',
        '7VAzhjK'
    ];
    a = function () {
        return s;
    };
    return a();
}
var __importDefault = this && this[n(0x11b) + o(0x135)] || function (c) {
    const p = n;
    return c && c[p(0x112)] ? c : { 'default': c };
};
const k = {};
k[o(0x110)] = !![], Object[n(0x10a) + n(0x12a)](exports, n(0x112), k);
const sequelize_1 = require(o(0x124)), Group_1 = __importDefault(require(n(0x114) + o(0x10c))), ListUserGroupService = async ({
        tenantId: e,
        userId: f
    }) => {
        const q = o, r = n, g = q(0x12f) + r(0x11c) + q(0x125) + r(0x10e) + q(0x121) + r(0x11d) + q(0x12d) + r(0x11a) + r(0x10b) + q(0x11e) + r(0x111) + r(0x107) + r(0x134) + q(0x113) + r(0x133) + q(0x119) + q(0x116) + q(0x117) + r(0x12b) + q(0x120), h = {};
        h[r(0x136)] = e, h[r(0x109)] = f;
        const i = {};
        i[r(0x10d) + 'ts'] = h, i[r(0x10f)] = sequelize_1[r(0x128)][q(0x132)], i[q(0x127)] = !![];
        const j = await Group_1[q(0x130)][r(0x124)]?.[r(0x12e)](g, i);
        return j;
    };
exports[n(0x130)] = ListUserGroupService;