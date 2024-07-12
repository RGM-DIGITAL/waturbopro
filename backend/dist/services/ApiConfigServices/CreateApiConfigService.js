'use strict';
const y = b, z = b;
(function (c, d) {
    const w = b, x = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(w(0x10f)) / (0x22ce + -0x1633 + -0x64d * 0x2) + parseInt(x(0x101)) / (-0x124 + -0x2 * -0x70 + 0x2 * 0x23) * (parseInt(x(0x115)) / (-0x1 * -0x99b + 0x2e3 * 0x5 + 0x1807 * -0x1)) + -parseInt(w(0xfe)) / (0x1375 + 0x1f93 * -0x1 + 0xc22) + parseInt(x(0x104)) / (0xcda * -0x1 + -0x1265 + 0x5c * 0x57) * (-parseInt(w(0xf9)) / (-0x127a + -0xa8c + -0x11e * -0x1a)) + parseInt(x(0x117)) / (-0x1ec5 + 0x28 * 0x9e + 0x61c) + parseInt(w(0xfd)) / (-0x1d * 0xad + -0x2 * -0xf53 + 0x193 * -0x7) + -parseInt(w(0x106)) / (0x106c + 0x34 * -0x7c + -0x8cd * -0x1) * (-parseInt(w(0x103)) / (-0x42 * -0x45 + -0x1 * 0xc4b + -0x575));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x5325 * -0x2a + 0x128b * 0x50 + 0x1123d4));
var __importDefault = this && this[y(0x105) + y(0x112)] || function (c) {
    const A = y;
    return c && c[A(0xff)] ? c : { 'default': c };
};
const k = {};
k[y(0x10d)] = !![], Object[z(0x11c) + y(0xf8)](exports, y(0xff), k);
const jsonwebtoken_1 = require(y(0x11a) + 'en'), ApiConfig_1 = __importDefault(require(z(0x119) + z(0x11e) + 'ig')), auth_1 = __importDefault(require(y(0x11b) + z(0x109))), CreateApiConfigService = async ({
        name: g,
        sessionId: h,
        urlServiceStatus: i,
        urlMessageStatus: j,
        userId: l,
        authToken: m,
        tenantId: n
    }) => {
        const B = y, C = z, o = {};
        o[B(0x110)] = C(0x108), o[B(0x118)] = B(0x10a);
        const p = o, {secret: q} = auth_1[C(0x113)], r = {};
        r[C(0xfc)] = n, r[C(0x116)] = p[B(0x110)], r[C(0xfa)] = h;
        const s = {};
        s[B(0x11d)] = p[C(0x118)];
        const t = (-0x1e60 + -0x1 * 0x22cd + 0x412d, jsonwebtoken_1[B(0x10b)])(r, q, s), u = {};
        u[C(0x10e)] = g, u[C(0xfa)] = h, u[C(0x114)] = t, u[B(0x100)] = m, u[B(0x107) + C(0xfb)] = i, u[C(0x102) + C(0xfb)] = j, u[C(0x111)] = l, u[C(0xfc)] = n;
        const v = await ApiConfig_1[B(0x113)][B(0x10c)](u);
        return v;
    };
function a() {
    const D = [
        '2YfGTqW',
        'urlMessage',
        '5985410JryqYU',
        '230GksGlw',
        '__importDe',
        '36qpEgVR',
        'urlService',
        'admin',
        'ig/auth',
        '730d',
        'sign',
        'create',
        'value',
        'name',
        '657239kERmjs',
        'EPSzy',
        'userId',
        'fault',
        'default',
        'token',
        '1655442WHQaim',
        'profile',
        '1877134HfavxE',
        'Uepto',
        '../../mode',
        'jsonwebtok',
        '../../conf',
        'defineProp',
        'expiresIn',
        'ls/ApiConf',
        'erty',
        '138342KZsGNr',
        'sessionId',
        'Status',
        'tenantId',
        '1685632sWTlBX',
        '4391636qxhScg',
        '__esModule',
        'authToken'
    ];
    a = function () {
        return D;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1db7 + 0x21bd + -0x30e);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[z(0x113)] = CreateApiConfigService;