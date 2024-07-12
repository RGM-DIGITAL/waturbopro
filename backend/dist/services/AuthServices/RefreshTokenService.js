'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0x15b)) / (0x1493 + 0x44d * -0x6 + 0x5 * 0x10c) + parseInt(r(0x15e)) / (-0x190d + 0x1 * 0x26dd + -0xdce) + -parseInt(r(0x162)) / (0x1 * -0xa1f + 0x371 + -0x6b1 * -0x1) * (parseInt(r(0x148)) / (0x212a + -0x1d10 + -0x416)) + parseInt(s(0x166)) / (0x1d39 + -0x29 * -0x8e + -0x33f2) * (-parseInt(r(0x143)) / (0x9e0 + 0x1feb + 0x1 * -0x29c5)) + -parseInt(s(0x156)) / (-0x17c6 + 0x47 * 0x64 + 0x35 * -0x13) * (parseInt(r(0x153)) / (-0x4 * 0x27a + 0x226c + 0x61f * -0x4)) + parseInt(r(0x15d)) / (0x1 * 0x14f3 + -0x6 * 0x5b1 + 0x4d * 0x2c) + parseInt(r(0x15a)) / (-0x3 * 0x7d9 + -0xb95 + 0x2 * 0x1195);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x14a6a * -0x3 + 0x3e249 + -0x1 * -0x2cc96));
function a() {
    const y = [
        'refreshTok',
        '19909750BuEFIu',
        '347983tXggWd',
        'tokenVersi',
        '5719446icqBNQ',
        '1637444Bjgkpu',
        'createRefr',
        '../../erro',
        'eshToken',
        '489NKUXYe',
        'verify',
        'ERR_SESSIO',
        'rs/AppErro',
        '265mrsXEC',
        'defineProp',
        'newToken',
        '__esModule',
        'enService',
        'pBUZY',
        'ret',
        'value',
        'erty',
        '106170FMHiwe',
        'ssToken',
        'N_EXPIRED',
        'Tokens',
        'ig/auth',
        '29132rTbeIP',
        'KiXNz',
        'default',
        'vices/Show',
        'ers/Create',
        'UserServic',
        'jsonwebtok',
        '../../help',
        '../UserSer',
        'refreshSec',
        '../../conf',
        '251992rIfESC',
        '__importDe',
        'createAcce',
        '217mdALKw',
        'fault',
        'RefreshTok'
    ];
    a = function () {
        return y;
    };
    return a();
}
var __importDefault = this && this[t(0x154) + t(0x157)] || function (c) {
    const v = u;
    return c && c[v(0x169)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x7 * 0x455 + 0x10f9 + -0x2e0d);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[t(0x141)] = !![], Object[t(0x167) + t(0x142)](exports, t(0x169), k), exports[u(0x158) + t(0x16a)] = void (-0x1a33 + 0x6 * 0x29a + 0xa97);
const jsonwebtoken_1 = require(t(0x14e) + 'en'), AppError_1 = __importDefault(require(u(0x160) + u(0x165) + 'r')), ShowUserService_1 = __importDefault(require(u(0x150) + u(0x14b) + u(0x14d) + 'e')), auth_1 = __importDefault(require(u(0x152) + t(0x147))), CreateTokens_1 = require(t(0x14f) + t(0x14c) + u(0x146)), RefreshTokenService = async e => {
        const w = u, x = t, f = {};
        f[w(0x13f)] = x(0x164) + w(0x145), f[x(0x149)] = function (p, q) {
            return p !== q;
        };
        const g = f;
        let h;
        try {
            h = (-0x1c3d * 0x1 + -0x17 * 0x107 + -0x3 * -0x114a, jsonwebtoken_1[x(0x163)])(e, auth_1[x(0x14a)][x(0x151) + w(0x140)]);
        } catch (p) {
            throw new AppError_1[(w(0x14a))](g[w(0x13f)], -0x1 * 0xe9f + -0x31 * 0x73 + -0x1 * -0x2633);
        }
        const {
                id: i,
                tokenVersion: j
            } = h, l = await (-0x437 + -0x11 * -0x17 + -0x8 * -0x56, ShowUserService_1[w(0x14a)])(i, -0xb05 + 0x10ce + -0x5c8);
        if (g[x(0x149)](l[x(0x15c) + 'on'], j))
            throw new AppError_1[(w(0x14a))](g[w(0x13f)], 0x11fe + -0x1979 + 0x90c);
        const m = (-0x5fb * 0x5 + 0x2585 + -0xd * 0x96, CreateTokens_1[w(0x155) + x(0x144)])(l), n = (0x54a * -0x1 + -0x1276 + -0x17c * -0x10, CreateTokens_1[x(0x15f) + w(0x161)])(l), o = {};
        return o[w(0x168)] = m, o[x(0x159) + 'en'] = n, o;
    };
exports[u(0x158) + u(0x16a)] = RefreshTokenService;