'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0x1cf)) / (-0x1 * -0x12d + 0x2 * 0x506 + -0xb38) * (-parseInt(m(0x1c6)) / (0x61b + 0x4f4 + -0xb0d)) + parseInt(l(0x1da)) / (-0x17 * 0x1a7 + -0xc3d + 0x3241) * (-parseInt(l(0x1ce)) / (-0x1783 + -0x1c60 + 0x33e7)) + -parseInt(m(0x1e2)) / (-0x12a6 + -0x1 * 0x1801 + -0x1556 * -0x2) + -parseInt(l(0x1d1)) / (0x715 * -0x2 + 0x1 * 0x21af + -0x7 * 0x2c9) + -parseInt(l(0x1e3)) / (-0x25 * -0x4d + 0x3b3 * 0x7 + 0x35d * -0xb) + parseInt(m(0x1cc)) / (-0xe0a + -0x907 + 0x1719) + parseInt(l(0x1cd)) / (0x728 + 0x11b * 0x1d + -0x272e) * (parseInt(m(0x1d9)) / (0x2512 + -0x1454 + -0x10b4));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x3321 * -0x27 + -0x39499 * -0x2 + -0xa2f83));
var __importDefault = this && this[n(0x1e1) + o(0x1c2)] || function (c) {
    const p = o;
    return c && c[p(0x1ef)] ? c : { 'default': c };
};
const k = {};
k[o(0x1e7)] = !![], Object[n(0x1e5) + o(0x1e9)](exports, n(0x1ef), k);
const sequelize_1 = require(o(0x1dc)), Queue_1 = __importDefault(require(o(0x1d6) + n(0x1d3))), ListUserQueueService = async ({
        tenantId: e,
        userId: f
    }) => {
        const q = n, r = n, g = q(0x1eb) + r(0x1cb) + q(0x1e6) + q(0x1ea) + r(0x1d2) + q(0x1df) + q(0x1e8) + r(0x1d5) + q(0x1d4) + r(0x1de) + r(0x1e4) + r(0x1c5) + q(0x1ed) + r(0x1d0) + q(0x1d8) + q(0x1d7) + q(0x1c3) + q(0x1c4) + q(0x1e0) + r(0x1db), h = {};
        h[q(0x1c8)] = e, h[q(0x1dd)] = f;
        const i = {};
        i[q(0x1c7) + 'ts'] = h, i[q(0x1c1)] = sequelize_1[q(0x1ee)][r(0x1ec)], i[r(0x1c9)] = !![];
        const j = await Queue_1[r(0x1f0)][r(0x1dc)]?.[q(0x1ca)](g, i);
        return j;
    };
function a() {
    const s = [
        'es\x22\x20uq\x20\x0a\x20\x20',
        '../../mode',
        '=\x20:userId\x20',
        '\x20and\x20u.id\x20',
        '10bnoCnv',
        '32049ToxCcK',
        'tId\x0a\x20\x20\x20\x20',
        'sequelize',
        'userId',
        '.\x22queueId\x22',
        '\x20u\x20\x0a\x20\x20\x20\x20,\x20',
        '\x22\x20=\x20:tenan',
        '__importDe',
        '2531715jVOVty',
        '3356122Bzlocl',
        '\x20=\x20q.id\x20\x0a\x20',
        'defineProp',
        '\x20from\x20\x22Que',
        'value',
        '\x22UsersQueu',
        'erty',
        'ues\x22\x20q\x0a\x20\x20\x20',
        '\x0a\x20\x20\x20\x20selec',
        'SELECT',
        '\x22userId\x22\x20=',
        'QueryTypes',
        '__esModule',
        'default',
        'type',
        'fault',
        '\x0a\x20\x20\x20\x20and\x20q',
        '.\x22tenantId',
        '\x20\x20\x20and\x20uq.',
        '2eEJMZw',
        'replacemen',
        'tenantId',
        'nest',
        'query',
        't\x20q.*\x20\x0a\x20\x20\x20',
        '3444992oiOCfZ',
        '14824395NKLmxF',
        '68GymXAz',
        '8299WPlOxl',
        '\x20u.id\x20\x0a\x20\x20\x20',
        '3539004YiJvFf',
        '\x20,\x20\x22Users\x22',
        'ls/Queue',
        '\x20\x20where\x20uq'
    ];
    a = function () {
        return s;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x640 + 0xae4 + -0x2e3);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[n(0x1f0)] = ListUserQueueService;