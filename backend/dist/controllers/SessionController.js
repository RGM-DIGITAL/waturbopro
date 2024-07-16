'use strict';
function a() {
    const F = [
        'shToken',
        'USER_LOGOU',
        'enService',
        'username',
        '4835804STotat',
        '6467568gsNtjs',
        'default',
        'User',
        'email',
        'defineProp',
        'serSerice',
        'N_EXPIRED',
        'token',
        'value',
        '9FBBTLR',
        'ERR_SESSIO',
        'queues',
        '/SendRefre',
        '../helpers',
        'json',
        '__esModule',
        'IkAZP',
        'RefreshTok',
        'hToken',
        'ices/Refre',
        'jrt',
        'getIO',
        '7039900ikUPpg',
        'update',
        'OT_FOUND',
        ':users',
        '10CeCOqW',
        '122940EoapLJ',
        'findByPk',
        '../libs/so',
        'tenantId',
        '70WmDjYP',
        '38784213ENkmWz',
        'gTjuN',
        'cket',
        's/AuthServ',
        '../errors/',
        'fault',
        'line',
        'configs',
        'ices/AuthU',
        'dbYdL',
        'mgVQh',
        'AppError',
        'erty',
        'body',
        '741072qHvpFh',
        'logout',
        'userId',
        '__importDe',
        '../models/',
        '../service',
        '204794bVjjvy',
        'vice',
        'status',
        'name',
        'ERR_USER_N',
        'shTokenSer',
        'profile',
        'emit',
        'SendRefres',
        'password',
        'cookies',
        'usuariosOn',
        'store',
        's/UserServ',
        'message',
        'hPlRR'
    ];
    a = function () {
        return F;
    };
    return a();
}
const w = b, x = b;
(function (c, d) {
    const u = b, v = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(u(0x156)) / (0x32 * 0x28 + 0x3df * 0x7 + 0x2 * -0x1174) * (-parseInt(u(0x138)) / (0x43 * -0x67 + -0x1 * -0x167c + 0x47b)) + -parseInt(u(0x11f)) / (0x1 * -0x1e7f + 0x12ad + 0xbd5) + -parseInt(v(0x14c)) / (0x1f17 + -0xbdb + -0x1338) + -parseInt(u(0x11a)) / (0xa * -0x31d + -0x47 * -0xb + -0xda * -0x21) + parseInt(v(0x14d)) / (0xb73 + 0x1 * 0x1683 + -0x10f8 * 0x2) + parseInt(u(0x123)) / (-0x208 + -0x1edf + 0x20ee) * (-parseInt(u(0x132)) / (-0x4d * -0x3f + -0x3d * -0x77 + -0x17a3 * 0x2)) + -parseInt(u(0x124)) / (-0x1 * -0xa01 + -0xd7f + 0x387) * (-parseInt(u(0x11e)) / (0x192a + -0x55f * -0x6 + -0x395a));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * 0x166b61 + 0xfe44f + 0x13fa47 * 0x1));
var __importDefault = this && this[w(0x135) + x(0x129)] || function (c) {
    const y = w;
    return c && c[y(0x15c)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x4cf + -0x1128 + 0x1711);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[w(0x155)] = !![], Object[w(0x151) + w(0x130)](exports, x(0x15c), k), exports[x(0x133)] = exports[w(0x11b)] = exports[w(0x144)] = void (-0x5 * 0x32d + -0x1eb3 + -0x43c * -0xb);
const AppError_1 = __importDefault(require(x(0x128) + x(0x12f))), AuthUserSerice_1 = __importDefault(require(x(0x137) + w(0x145) + w(0x12c) + w(0x152))), SendRefreshToken_1 = require(w(0x15a) + w(0x159) + w(0x148)), RefreshTokenService_1 = require(w(0x137) + w(0x127) + w(0x160) + w(0x13d) + x(0x139)), socket_1 = require(x(0x121) + w(0x126)), User_1 = __importDefault(require(x(0x136) + w(0x14f))), store = async (f, g) => {
        const z = w, A = x, h = {};
        h[z(0x15d)] = A(0x11b);
        const i = h, j = (0x2 * -0x5b + 0x12be + -0x4 * 0x482, socket_1[z(0x162)])(), {
                email: l,
                password: m
            } = f[z(0x131)], n = {};
        n[A(0x150)] = l, n[z(0x141)] = m;
        const {
            token: o,
            user: p,
            refreshToken: q,
            usuariosOnline: r
        } = await (0x1389 + -0x1630 + 0x2a7, AuthUserSerice_1[z(0x14e)])(n);
        (-0x6 * 0x469 + 0x8 * 0x75 + 0x16ce, SendRefreshToken_1[A(0x140) + A(0x15f)])(g, q);
        const s = {};
        s[A(0x154)] = o, s[A(0x14b)] = p[z(0x13b)], s[A(0x150)] = p[A(0x150)], s[A(0x13e)] = p[z(0x13e)], s[z(0x13a)] = p[z(0x13a)], s[z(0x134)] = p['id'], s[z(0x122)] = p[z(0x122)], s[A(0x158)] = p[z(0x158)], s[z(0x143) + z(0x12a)] = r, s[A(0x12b)] = p[A(0x12b)];
        const t = s;
        return j[z(0x13f)](t[z(0x122)] + z(0x11d), {
            'action': i[z(0x15d)],
            'data': {
                'username': t[A(0x14b)],
                'email': t[A(0x150)],
                'isOnline': !![],
                'lastLogin': new Date()
            }
        }), g[A(0x13a)](0x253 * -0x1 + -0x13 * -0x169 + -0x17b0)[z(0x15b)](t);
    };
exports[w(0x144)] = store;
const update = async (e, f) => {
    const B = w, C = w, g = {};
    g[B(0x12d)] = B(0x157) + B(0x153);
    const h = g, i = e[B(0x142)][C(0x161)];
    if (!i)
        throw new AppError_1[(B(0x14e))](h[B(0x12d)], 0x168e + 0x1c54 + 0x19 * -0x1f9);
    const {
        newToken: j,
        refreshToken: l
    } = await (-0x1f08 + 0xf61 + 0xfa7, RefreshTokenService_1[C(0x15e) + C(0x14a)])(i);
    (0x1b09 + -0x184a * -0x1 + -0x3353, SendRefreshToken_1[B(0x140) + B(0x15f)])(f, l);
    const m = {};
    return m[B(0x154)] = j, f[B(0x15b)](m);
};
exports[w(0x11b)] = update;
const logout = async (e, f) => {
    const D = w, E = x, g = {};
    g[D(0x12e)] = D(0x13c) + E(0x11c), g[D(0x125)] = E(0x11b), g[D(0x147)] = D(0x149) + 'T';
    const h = g, {userId: i} = e[D(0x131)];
    if (!i)
        throw new AppError_1[(E(0x14e))](h[D(0x12e)], -0x1b1 * -0xb + 0x1390 + -0x2497);
    const j = (-0x2 * -0x11ef + -0x86b * 0x1 + -0x1 * 0x1b73, socket_1[E(0x162)])(), l = await User_1[E(0x14e)][D(0x120)](i);
    l && l[E(0x11b)]({
        'isOnline': ![],
        'lastLogout': new Date()
    });
    j[E(0x13f)](l?.[D(0x122)] + D(0x11d), {
        'action': h[D(0x125)],
        'data': {
            'username': l?.[E(0x13b)],
            'email': l?.[D(0x150)],
            'isOnline': ![],
            'lastLogout': new Date()
        }
    });
    const m = {};
    return m[D(0x146)] = h[D(0x147)], f[D(0x15b)](m);
};
exports[w(0x133)] = logout;