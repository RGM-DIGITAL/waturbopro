'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(t(0xa2)) / (-0x1 * -0x24a9 + -0x1aef + -0x83 * 0x13) + -parseInt(t(0x89)) / (-0x1530 * 0x1 + 0x26d5 + -0x11a3) + -parseInt(u(0x81)) / (0x8bd * -0x1 + 0x12d2 + -0x1 * 0xa12) + parseInt(t(0x8a)) / (0x1d3f + -0xf4d + -0xdee) + parseInt(u(0x73)) / (0x1bd5 + -0x1 * 0x21bc + 0x1 * 0x5ec) + parseInt(t(0x9b)) / (-0x4b6 + -0x2 * -0x1163 + -0xf05 * 0x2) + -parseInt(u(0xa1)) / (-0x18df + 0xb * 0x305 + -0x851 * 0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x142f * 0x17 + -0xe * 0x76b2 + -0x2 * -0x9229c));
var __importDefault = this && this[v(0x9d) + v(0x7a)] || function (c) {
    const x = w;
    return c && c[x(0x7b)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x54d + -0x56 * -0x3d + -0xec0);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[w(0x83)] = !![], Object[v(0x94) + w(0x8c)](exports, w(0x7b), k), exports[v(0x7f)] = exports[v(0x88) + v(0x9f)] = exports[v(0x8b)] = exports[w(0x71)] = void (0x5df + 0x1571 + -0x26 * 0xb8);
const socket_1 = require(v(0x92) + v(0xab)), AppError_1 = __importDefault(require(v(0x77) + w(0x90))), UpdateSettingService_1 = __importDefault(require(w(0x86) + v(0xaa) + v(0xaf) + w(0xa6) + v(0x8d))), UpdateSettingService_2 = __importDefault(require(w(0x86) + w(0x84) + v(0xa5) + v(0x74) + w(0xa7) + w(0xa9))), ListSettingsService_1 = __importDefault(require(v(0x86) + w(0xaa) + v(0xae) + v(0x78) + w(0xa8))), index = async (c, d) => {
        const y = w, z = w, {tenantId: e} = c[y(0xb0)], f = await (0x23 * -0xb3 + 0x3 * -0x2a + 0x18f7, ListSettingsService_1[y(0x91)])(e);
        return d[y(0x96)](0x1dea * 0x1 + -0x18dc + 0x1 * -0x446)[y(0x80)](f);
    };
exports[v(0x71)] = index;
const update = async (f, g) => {
    const A = v, B = w, h = {};
    h[A(0x7c)] = function (r, s) {
        return r !== s;
    }, h[B(0x7e)] = A(0x87), h[B(0xa3)] = A(0x9c) + A(0x93), h[B(0xac)] = A(0x8b);
    const i = h;
    if (i[B(0x7c)](f[A(0xb0)][B(0x79)], i[A(0x7e)]))
        throw new AppError_1[(A(0x91))](i[A(0xa3)], 0xc20 * -0x1 + 0x27e * 0xa + 0xd * -0xdd);
    const {tenantId: j} = f[A(0xb0)], {
            value: l,
            key: m
        } = f[B(0x9a)], n = {};
    n[B(0x82)] = m, n[A(0x83)] = l, n[B(0x7d)] = j;
    const o = await (0x1c4f + 0x1 * 0x3d + -0x1c8c, UpdateSettingService_1[B(0x91)])(n), p = (0x77 * -0x20 + 0xe31 + 0xaf, socket_1[B(0xa0)])(), q = {};
    return q[A(0x85)] = i[B(0xac)], q[A(0x9e)] = o, p[A(0x76)](j + B(0x99), q), g[B(0x96)](-0xfe6 + 0xacd * 0x3 + -0xfb9)[B(0x80)](o);
};
function a() {
    const G = [
        '1894291OBlFQF',
        '224712PkvLWm',
        'Nbvkr',
        'fQRQZ',
        'eneralServ',
        'dateSettin',
        'eSettingSe',
        'Service',
        'rvice',
        's/SettingS',
        'cket',
        'yZgMR',
        'file',
        'ervices/Li',
        'ervices/Up',
        'user',
        'index',
        'filename',
        '4273450fxOvAS',
        'ices/Updat',
        'mimetype',
        'emit',
        '../errors/',
        'stSettings',
        'profile',
        'fault',
        '__esModule',
        'aejGF',
        'tenantId',
        'OueHb',
        'storeLogo',
        'json',
        '2604237VvFUPq',
        'key',
        'value',
        's/SettingG',
        'action',
        '../service',
        'admin',
        'storePriva',
        '1165894IjMzfo',
        '326912rlKVJK',
        'update',
        'erty',
        'gService',
        'yFXIO',
        'efiCertFil',
        'AppError',
        'default',
        '../libs/so',
        'MISSION',
        'defineProp',
        'startsWith',
        'status',
        'LOGO',
        'image/',
        ':settings',
        'body',
        '7281792UsGISP',
        'ERR_NO_PER',
        '__importDe',
        'setting',
        'teFile',
        'getIO'
    ];
    a = function () {
        return G;
    };
    return a();
}
exports[v(0x8b)] = update;
const storePrivateFile = async (e, f) => {
    const C = w, D = v, g = {};
    g[C(0xa4)] = D(0x8f) + 'e';
    const h = g, i = e[D(0xad)], {tenantId: j} = e[C(0xb0)], l = {};
    l[D(0x82)] = h[D(0xa4)], l[D(0x83)] = i[D(0x72)];
    const m = await (0x21 * -0x72 + -0x2037 + -0x1 * -0x2ee9, UpdateSettingService_2[D(0x91)])(l);
    return f[D(0x96)](0x53 * -0x6b + 0x1134 + 0x1245)[C(0x80)](m[D(0x83)]);
};
exports[v(0x88) + v(0x9f)] = storePrivateFile;
const storeLogo = async (e, f) => {
    const E = w, F = w, g = {};
    g[E(0x8e)] = F(0x98);
    const h = g, i = e[F(0xad)], {tenantId: j} = e[F(0xb0)];
    if (i && i[F(0x75)][F(0x95)](h[F(0x8e)])) {
        const l = {};
        l[E(0x82)] = F(0x97), l[F(0x83)] = i[E(0x72)], l[F(0x7d)] = j;
        const m = await (0x2210 + -0x3d * -0x37 + -0x2f2b, UpdateSettingService_1[F(0x91)])(l);
        return f[E(0x96)](-0x4 * -0x539 + -0x18c7 * -0x1 + -0x2ce3 * 0x1)[F(0x80)](m[E(0x83)]);
    }
    return f[F(0x96)](0x1632 + -0x1ffc + 0xb60);
};
exports[w(0x7f)] = storeLogo;