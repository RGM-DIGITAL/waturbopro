'use strict';
function a() {
    const D = [
        '2hQlZvQ',
        'expiresIn',
        'authToken',
        'default',
        '11tyuiWo',
        '5330lJLyMW',
        '222uXDElE',
        'fault',
        '3NKlBBJ',
        'erty',
        'create',
        'ls/ApiConf',
        'defineProp',
        '__importDe',
        '1125gWJXII',
        '../../conf',
        '7Vtqpxb',
        'profile',
        'jsonwebtok',
        '18516FrcZVk',
        'Status',
        '243392fKKAjz',
        'urlService',
        'sQVoV',
        '../../mode',
        'ggyFv',
        'tenantId',
        'token',
        'admin',
        '6938555bzPOHd',
        'name',
        '1789796IiynQO',
        'sign',
        '730d',
        '12175ryAvlL',
        'value',
        '__esModule',
        'ig/auth',
        'sessionId',
        'urlMessage',
        'userId',
        '3522032HGiKFw'
    ];
    a = function () {
        return D;
    };
    return a();
}
const y = b, z = b;
(function (c, d) {
    const w = b, x = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(w(0x112)) / (-0x1af5 + -0x1faf + -0x3aa5 * -0x1) * (parseInt(x(0xfd)) / (0x6a5 + 0x174a + -0x1ded * 0x1)) + -parseInt(x(0x11a)) / (0x6 * -0x5bf + 0x20dd + 0x1a0) * (-parseInt(x(0x107)) / (0x1691 * 0x1 + 0x1d * -0x115 + 0x8d4)) + -parseInt(x(0x10a)) / (0x41c + 0x382 + -0x799) * (-parseInt(x(0x118)) / (0x15ff + 0x120d + -0x2806 * 0x1)) + -parseInt(x(0xf8)) / (0x128f * -0x1 + 0x1606 + -0x370) * (-parseInt(x(0x111)) / (-0x110e + -0x236c + 0x3482)) + -parseInt(w(0x120)) / (0x647 * 0x3 + -0x2192 + 0xec6) * (-parseInt(x(0x117)) / (0x6e * 0x52 + 0x171e * 0x1 + -0x1d28 * 0x2)) + -parseInt(x(0x116)) / (0x1e0b + 0x270f + -0x1 * 0x450f) * (-parseInt(x(0xfb)) / (0x444 * 0x2 + 0x1fb4 + -0x1418 * 0x2)) + -parseInt(x(0x105)) / (0x2398 + 0x7d * 0x47 + 0x331 * -0x16);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x45d * 0x180 + -0x23ea5 * -0x1 + 0x86702));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x5b2 * 0x3 + 0x320 + -0x133f);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[y(0x11f) + y(0x119)] || function (c) {
    const A = z;
    return c && c[A(0x10c)] ? c : { 'default': c };
};
const k = {};
k[z(0x10b)] = !![], Object[z(0x11e) + z(0x11b)](exports, y(0x10c), k);
const jsonwebtoken_1 = require(z(0xfa) + 'en'), ApiConfig_1 = __importDefault(require(y(0x100) + z(0x11d) + 'ig')), auth_1 = __importDefault(require(z(0xf7) + z(0x10d))), CreateApiConfigService = async ({
        name: g,
        sessionId: h,
        urlServiceStatus: i,
        urlMessageStatus: j,
        userId: l,
        authToken: m,
        tenantId: n
    }) => {
        const B = z, C = y, o = {};
        o[B(0x101)] = B(0x104), o[C(0xff)] = B(0x109);
        const p = o, {secret: q} = auth_1[C(0x115)], r = {};
        r[C(0x102)] = n, r[B(0xf9)] = p[C(0x101)], r[B(0x10e)] = h;
        const s = {};
        s[B(0x113)] = p[C(0xff)];
        const t = (0x1e1d + -0x1bd9 + 0x91 * -0x4, jsonwebtoken_1[C(0x108)])(r, q, s), u = {};
        u[C(0x106)] = g, u[B(0x10e)] = h, u[B(0x103)] = t, u[B(0x114)] = m, u[C(0xfe) + B(0xfc)] = i, u[B(0x10f) + C(0xfc)] = j, u[B(0x110)] = l, u[C(0x102)] = n;
        const v = await ApiConfig_1[B(0x115)][C(0x11c)](u);
        return v;
    };
exports[y(0x115)] = CreateApiConfigService;