'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(t(0xe2)) / (-0x5d * -0x40 + -0x5 * -0xe3 + -0x1bae) * (parseInt(u(0xf1)) / (-0xa * -0x4f + -0x1aa5 * -0x1 + -0x7 * 0x43f)) + parseInt(t(0xd1)) / (-0xd * 0x28d + -0x2431 + 0x455d) * (parseInt(t(0xd6)) / (-0x25e0 + 0x130 * -0x8 + -0x24 * -0x151)) + parseInt(t(0xf5)) / (0x1 * -0x1069 + 0x241 * -0xd + -0x17 * -0x1fd) * (parseInt(t(0xf4)) / (-0x1999 * -0x1 + -0x1dd4 + -0x79 * -0x9)) + -parseInt(t(0xcb)) / (0x22e1 * 0x1 + -0x1e5d + -0x47d) + -parseInt(u(0xcc)) / (-0x6e * 0x2b + 0x16a7 * 0x1 + -0x425) + -parseInt(t(0xdc)) / (0xee6 + -0x81 * 0x1b + -0xa1 * 0x2) * (parseInt(t(0x10a)) / (-0x11 * -0x209 + 0xa * 0x232 + -0x3883)) + -parseInt(t(0xee)) / (0x26be + -0x108e + -0x1625 * 0x1) * (-parseInt(u(0xf0)) / (-0x1d * -0x106 + 0x26 * -0x4 + 0x6 * -0x4d7));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1a953 * 0x1 + 0x250c6 + 0x125be));
var __importDefault = this && this[v(0x107) + v(0xe0)] || function (c) {
    const x = w;
    return c && c[x(0xfa)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x296 * -0xd + 0x1a37 + -0x3b0c);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[v(0x101)] = !![], Object[w(0xe9) + w(0xf7)](exports, v(0xfa), k), exports[w(0x104)] = exports[v(0x103) + w(0xeb)] = exports[v(0xd7)] = exports[w(0xec)] = void (0x19 * 0x21 + -0xb9 * -0x2 + -0x1 * 0x4ab);
const socket_1 = require(v(0xd0) + w(0xef)), AppError_1 = __importDefault(require(w(0xd4) + w(0x10c))), UpdateSettingService_1 = __importDefault(require(v(0xf2) + w(0xce) + w(0xcf) + v(0xd8) + v(0xe8))), UpdateSettingService_2 = __importDefault(require(w(0xf2) + v(0xd5) + w(0xe6) + w(0xd9) + v(0xda) + v(0x106))), ListSettingsService_1 = __importDefault(require(v(0xf2) + v(0xce) + v(0x108) + w(0xdf) + v(0xdb))), index = async (c, d) => {
        const y = v, z = w, {tenantId: e} = c[y(0xf8)], f = await (-0xf0e + 0x1 * -0x17f2 + 0x2700, ListSettingsService_1[y(0xe5)])(e);
        return d[y(0xfc)](0x107 * -0x17 + 0x315 * 0x9 + -0x354)[z(0xea)](f);
    };
exports[w(0xec)] = index;
const update = async (f, g) => {
    const A = w, B = w, h = {};
    h[A(0xf3)] = function (r, s) {
        return r !== s;
    }, h[A(0xed)] = B(0x10d), h[A(0xcd)] = B(0xf6) + B(0xff), h[B(0x10b)] = A(0xd7);
    const i = h;
    if (i[B(0xf3)](f[A(0xf8)][A(0xfd)], i[B(0xed)]))
        throw new AppError_1[(A(0xe5))](i[A(0xcd)], 0x1931 + -0x17 * -0x7 + 0x815 * -0x3);
    const {tenantId: j} = f[B(0xf8)], {
            value: l,
            key: m
        } = f[B(0xca)], n = {};
    n[A(0xd2)] = m, n[A(0x101)] = l, n[B(0x102)] = j;
    const o = await (-0x2014 * -0x1 + -0x1044 + -0xfd0, UpdateSettingService_1[A(0xe5)])(n), p = (-0x1 * -0x193b + 0x85 * 0x45 + -0x3d14, socket_1[A(0xf9)])(), q = {};
    return q[A(0x109)] = i[A(0x10b)], q[A(0xe1)] = o, p[A(0xd3)](j + B(0xdd), q), g[B(0xfc)](0x2 * 0x1126 + -0xe9 * 0x14 + 0x46 * -0x38)[A(0xea)](o);
};
exports[v(0xd7)] = update;
const storePrivateFile = async (e, f) => {
    const C = v, D = v, g = {};
    g[C(0xc9)] = C(0xde) + 'e';
    const h = g, i = e[D(0xe7)], {tenantId: j} = e[C(0xf8)], l = {};
    l[D(0xd2)] = h[D(0xc9)], l[D(0x101)] = i[D(0x100)];
    const m = await (-0x88 * -0xf + 0x1137 + -0x1 * 0x192f, UpdateSettingService_2[C(0xe5)])(l);
    return f[C(0xfc)](-0x104a + 0x6cd + 0xa45)[D(0xea)](m[C(0x101)]);
};
exports[w(0x103) + w(0xeb)] = storePrivateFile;
function a() {
    const G = [
        'Service',
        '1566bYFOxI',
        ':settings',
        'efiCertFil',
        'stSettings',
        'fault',
        'setting',
        '689wslPgb',
        'image/',
        'cCvWV',
        'default',
        'eneralServ',
        'file',
        'gService',
        'defineProp',
        'json',
        'teFile',
        'index',
        'ZReAs',
        '11tKUhTp',
        'cket',
        '5025552rggLPE',
        '436tAkpGJ',
        '../service',
        'ayQzk',
        '6KpbKKn',
        '1143665agzQER',
        'ERR_NO_PER',
        'erty',
        'user',
        'getIO',
        '__esModule',
        'mimetype',
        'status',
        'profile',
        'startsWith',
        'MISSION',
        'filename',
        'value',
        'tenantId',
        'storePriva',
        'storeLogo',
        'LOGO',
        'rvice',
        '__importDe',
        'ervices/Li',
        'action',
        '8310dXrtXe',
        'LJAxU',
        'AppError',
        'admin',
        'nrGUI',
        'body',
        '1020999xIwBoV',
        '1359416fxJBYK',
        'boTgO',
        's/SettingS',
        'ervices/Up',
        '../libs/so',
        '42NzmJFR',
        'key',
        'emit',
        '../errors/',
        's/SettingG',
        '23176gCTKlw',
        'update',
        'dateSettin',
        'ices/Updat',
        'eSettingSe'
    ];
    a = function () {
        return G;
    };
    return a();
}
const storeLogo = async (e, f) => {
    const E = v, F = w, g = {};
    g[E(0xe4)] = E(0xe3);
    const h = g, i = e[E(0xe7)], {tenantId: j} = e[E(0xf8)];
    if (i && i[E(0xfb)][F(0xfe)](h[F(0xe4)])) {
        const l = {};
        l[F(0xd2)] = E(0x105), l[F(0x101)] = i[E(0x100)], l[E(0x102)] = j;
        const m = await (0x983 + 0xc20 + -0xbf * 0x1d, UpdateSettingService_1[E(0xe5)])(l);
        return f[E(0xfc)](0xa58 + -0xd31 + 0x1 * 0x3a1)[E(0xea)](m[F(0x101)]);
    }
    return f[E(0xfc)](-0x2da * 0xc + -0x1701 * -0x1 + 0xccd);
};
exports[v(0x104)] = storeLogo;