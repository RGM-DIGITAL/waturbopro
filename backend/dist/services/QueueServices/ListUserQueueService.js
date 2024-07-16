'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0x10c)) / (-0x76 * -0x3 + -0x1 * -0x72 + -0x1d3) * (-parseInt(l(0x111)) / (0x11d5 + 0x13e8 * 0x1 + -0x25bb)) + -parseInt(m(0x10a)) / (0x1 * -0x3f9 + 0xa7b * 0x2 + -0x10fa) + parseInt(m(0x102)) / (0x3 * -0x4e1 + -0xb9c * 0x1 + -0x8c1 * -0x3) * (-parseInt(m(0x108)) / (-0x25f7 * -0x1 + 0x4c * 0x52 + -0x3aa * 0x11)) + parseInt(l(0xf1)) / (0x35a + -0x26c3 * 0x1 + -0x236f * -0x1) + parseInt(m(0x112)) / (-0x19 * -0x17b + -0x10 * -0x235 + -0x484c * 0x1) + parseInt(l(0x10d)) / (-0x3d * -0x77 + -0x56b + -0x16e8) + parseInt(l(0xfe)) / (0x1 * -0x289 + 0x987 * -0x3 + -0x2d5 * -0xb) * (-parseInt(l(0xf8)) / (-0x6ca * 0x2 + 0x1d93 + -0xff5));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x5 * 0x327eb + -0x40caa + -0x3 * -0xb9994));
function a() {
    const s = [
        '4cmEImK',
        'tenantId',
        '\x22UsersQueu',
        'ls/Queue',
        '../../mode',
        '\x20=\x20q.id\x20\x0a\x20',
        '4440545rATotr',
        '__esModule',
        '5789592cbMuBL',
        'nest',
        '17hqojNW',
        '5362240gsXyyD',
        '\x20u\x20\x0a\x20\x20\x20\x20,\x20',
        '=\x20:userId\x20',
        'es\x22\x20uq\x20\x0a\x20\x20',
        '178610rcCvep',
        '11007654UJeoGU',
        'tId\x0a\x20\x20\x20\x20',
        'query',
        '\x22\x20=\x20:tenan',
        '\x20\x20where\x20uq',
        'ues\x22\x20q\x0a\x20\x20\x20',
        'QueryTypes',
        'value',
        '\x20\x20\x20and\x20uq.',
        'fault',
        '.\x22queueId\x22',
        '\x20u.id\x20\x0a\x20\x20\x20',
        'replacemen',
        '\x0a\x20\x20\x20\x20and\x20q',
        'erty',
        '3700950TVEcLC',
        'userId',
        '\x20and\x20u.id\x20',
        '.\x22tenantId',
        'default',
        '\x20from\x20\x22Que',
        't\x20q.*\x20\x0a\x20\x20\x20',
        '3480azljUQ',
        '__importDe',
        '\x20,\x20\x22Users\x22',
        '\x0a\x20\x20\x20\x20selec',
        'sequelize',
        'SELECT',
        '14967BrnVtY',
        'type',
        'defineProp',
        '\x22userId\x22\x20='
    ];
    a = function () {
        return s;
    };
    return a();
}
var __importDefault = this && this[n(0xf9) + o(0x11b)] || function (c) {
    const p = o;
    return c && c[p(0x109)] ? c : { 'default': c };
};
const k = {};
k[o(0x119)] = !![], Object[o(0x100) + o(0xf0)](exports, n(0x109), k);
const sequelize_1 = require(o(0xfc)), Queue_1 = __importDefault(require(n(0x106) + o(0x105))), ListUserQueueService = async ({
        tenantId: e,
        userId: f
    }) => {
        const q = o, r = n, g = q(0xfb) + q(0xf7) + r(0xf6) + r(0x117) + r(0xfa) + r(0x10e) + q(0x104) + r(0x110) + r(0x116) + q(0xec) + q(0x107) + r(0x11a) + r(0x101) + q(0xed) + r(0xf3) + q(0x10f) + q(0xef) + r(0xf4) + r(0x115) + q(0x113), h = {};
        h[q(0x103)] = e, h[r(0xf2)] = f;
        const i = {};
        i[r(0xee) + 'ts'] = h, i[r(0xff)] = sequelize_1[q(0x118)][q(0xfd)], i[q(0x10b)] = !![];
        const j = await Queue_1[r(0xf5)][r(0xfc)]?.[r(0x114)](g, i);
        return j;
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1358 + 0x1ff3 * -0x1 + 0xd87 * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[n(0xf5)] = ListUserQueueService;