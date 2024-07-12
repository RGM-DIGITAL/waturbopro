'use strict';
const w = b, x = b;
(function (c, d) {
    const u = b, v = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(u(0x187)) / (-0x1 * -0x3b3 + 0x1758 + -0x1 * 0x1b0a) * (parseInt(u(0x169)) / (-0x1345 + 0x2690 + -0x1349)) + parseInt(u(0x182)) / (-0x83 + -0xd44 + 0xa * 0x161) + -parseInt(u(0x192)) / (-0x1b6 + -0x301 * 0x1 + -0xad * -0x7) + -parseInt(u(0x174)) / (-0x47 * -0x4b + -0x2 * -0x10e2 + -0x1b46 * 0x2) + -parseInt(u(0x190)) / (-0x1b * -0x71 + -0x1946 * 0x1 + 0x1 * 0xd61) + -parseInt(v(0x193)) / (-0x22a * 0xf + 0x4 * -0x30a + -0x40f * -0xb) + parseInt(u(0x1ac)) / (0x1 * 0x167 + -0xdd9 * -0x1 + -0x2 * 0x79c);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1c3302 + 0xfe0b * 0x13 + -0x200687 * 0x1));
var __importDefault = this && this[w(0x18b) + x(0x172)] || function (c) {
    const y = x;
    return c && c[y(0x18c)] ? c : { 'default': c };
};
const k = {};
k[w(0x1ab)] = !![], Object[w(0x17a) + x(0x181)](exports, x(0x18c), k), exports[x(0x1aa)] = exports[w(0x18f)] = exports[x(0x1a4)] = void (-0x596 + -0x2f * 0x29 + -0x45f * -0x3);
const AppError_1 = __importDefault(require(x(0x199) + x(0x173))), AuthUserSerice_1 = __importDefault(require(x(0x19c) + x(0x17e) + x(0x17b) + w(0x171))), SendRefreshToken_1 = require(x(0x1a6) + x(0x1a7) + w(0x188)), RefreshTokenService_1 = require(w(0x19c) + x(0x19d) + w(0x19b) + x(0x170) + w(0x189)), socket_1 = require(x(0x1a3) + w(0x1a5)), User_1 = __importDefault(require(w(0x196) + w(0x1a2))), store = async (f, g) => {
        const z = x, A = w, h = {};
        h[z(0x194)] = z(0x18f);
        const i = h, j = (-0x1 * -0x1511 + -0x20 + -0x14f1, socket_1[z(0x19a)])(), {
                email: l,
                password: m
            } = f[z(0x180)], n = {};
        n[z(0x191)] = l, n[A(0x16c)] = m;
        const {
            token: o,
            user: p,
            refreshToken: q,
            usuariosOnline: r
        } = await (-0xb57 * -0x1 + 0xe7f * -0x2 + 0x11a7, AuthUserSerice_1[z(0x19f)])(n);
        (-0x228 + 0x2154 + -0x1f2c, SendRefreshToken_1[A(0x18a) + A(0x168)])(g, q);
        const s = {};
        s[z(0x16d)] = o, s[z(0x16b)] = p[z(0x176)], s[z(0x191)] = p[z(0x191)], s[z(0x183)] = p[A(0x183)], s[A(0x16e)] = p[A(0x16e)], s[A(0x18e)] = p['id'], s[A(0x195)] = p[z(0x195)], s[z(0x1a9)] = p[A(0x1a9)], s[z(0x184) + z(0x179)] = r, s[A(0x178)] = p[A(0x178)];
        const t = s;
        return j[A(0x17c)](t[A(0x195)] + A(0x1ad), {
            'action': i[z(0x194)],
            'data': {
                'username': t[z(0x16b)],
                'email': t[A(0x191)],
                'isOnline': !![],
                'lastLogin': new Date()
            }
        }), g[A(0x16e)](-0x3 * -0x5f5 + -0x2 * -0x1337 + -0x3d * 0xe9)[z(0x186)](t);
    };
exports[x(0x1a4)] = store;
function a() {
    const F = [
        'logout',
        'value',
        '15105856XGVvbw',
        ':users',
        'RefreshTok',
        'hToken',
        '22HGqCGQ',
        'OT_FOUND',
        'username',
        'password',
        'token',
        'status',
        'ERR_USER_N',
        'shTokenSer',
        'serSerice',
        'fault',
        'AppError',
        '961750JCanjm',
        'ERR_SESSIO',
        'name',
        'USER_LOGOU',
        'configs',
        'line',
        'defineProp',
        'ices/AuthU',
        'emit',
        'DQtGE',
        's/UserServ',
        'jrt',
        'body',
        'erty',
        '3506001CIctIZ',
        'profile',
        'usuariosOn',
        'cookies',
        'json',
        '76249lqKKiQ',
        'shToken',
        'vice',
        'SendRefres',
        '__importDe',
        '__esModule',
        'Odwhk',
        'userId',
        'update',
        '295404LPAbnb',
        'email',
        '5913068zxPeML',
        '8336153oQltdu',
        'KyjGf',
        'tenantId',
        '../models/',
        'message',
        'enService',
        '../errors/',
        'getIO',
        'ices/Refre',
        '../service',
        's/AuthServ',
        'N_EXPIRED',
        'default',
        'tpZgZ',
        'LhlHn',
        'User',
        '../libs/so',
        'store',
        'cket',
        '../helpers',
        '/SendRefre',
        'findByPk',
        'queues'
    ];
    a = function () {
        return F;
    };
    return a();
}
const update = async (e, f) => {
    const B = w, C = x, g = {};
    g[B(0x1a0)] = C(0x175) + B(0x19e);
    const h = g, i = e[C(0x185)][C(0x17f)];
    if (!i)
        throw new AppError_1[(B(0x19f))](h[C(0x1a0)], 0x1b89 * 0x1 + 0x193a * 0x1 + -0x3332);
    const {
        newToken: j,
        refreshToken: l
    } = await (0x2167 + 0x2 * 0x6aa + -0x2ebb, RefreshTokenService_1[B(0x167) + B(0x198)])(i);
    (-0x596 + 0x22fb + 0xaf * -0x2b, SendRefreshToken_1[C(0x18a) + C(0x168)])(f, l);
    const m = {};
    return m[C(0x16d)] = j, f[C(0x186)](m);
};
exports[x(0x18f)] = update;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1756 + 0xb3 * -0x1 + -0x58 * -0x4a);
        let h = e[f];
        return h;
    }, b(c, d);
}
const logout = async (e, f) => {
    const D = x, E = x, g = {};
    g[D(0x18d)] = D(0x16f) + D(0x16a), g[D(0x1a1)] = D(0x18f), g[D(0x17d)] = E(0x177) + 'T';
    const h = g, {userId: i} = e[E(0x180)];
    if (!i)
        throw new AppError_1[(D(0x19f))](h[E(0x18d)], -0x1bb3 * 0x1 + -0x1dca + 0x3b11);
    const j = (0x1 * -0x210a + -0x2574 + 0x2 * 0x233f, socket_1[E(0x19a)])(), l = await User_1[E(0x19f)][D(0x1a8)](i);
    l && l[E(0x18f)]({
        'isOnline': ![],
        'lastLogout': new Date()
    });
    j[D(0x17c)](l?.[E(0x195)] + E(0x1ad), {
        'action': h[D(0x1a1)],
        'data': {
            'username': l?.[E(0x176)],
            'email': l?.[D(0x191)],
            'isOnline': ![],
            'lastLogout': new Date()
        }
    });
    const m = {};
    return m[E(0x197)] = h[D(0x17d)], f[E(0x186)](m);
};
exports[w(0x1aa)] = logout;