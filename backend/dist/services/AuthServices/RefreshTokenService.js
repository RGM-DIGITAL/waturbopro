'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0x130)) / (-0x64 * 0x14 + 0x1a5a + -0x1289) * (-parseInt(r(0x155)) / (0x1ed2 + 0x1346 * -0x1 + -0xb8a)) + -parseInt(r(0x134)) / (0xd6e + -0x173c + 0x7 * 0x167) * (parseInt(r(0x139)) / (-0x19e5 + 0x20c9 + -0x6e0)) + -parseInt(s(0x138)) / (0x1a0b + -0xd02 + -0xd04) * (parseInt(s(0x133)) / (0x2511 + 0x39 * 0x4f + -0x36a2)) + -parseInt(s(0x142)) / (-0x4b * -0x67 + 0x2097 + -0x3ebd) * (-parseInt(r(0x14d)) / (-0x1c * 0x126 + -0x197 * -0xb + -0x47 * -0x35)) + parseInt(s(0x153)) / (0xd80 + 0x53 * 0x3b + -0xe * 0x254) + parseInt(r(0x12d)) / (-0x1b0e + 0x1 * 0xfe + 0x1a * 0x101) * (parseInt(r(0x127)) / (-0x1801 + 0x24be + 0xcb2 * -0x1)) + -parseInt(r(0x128)) / (-0x64d + -0x21 * -0xda + -0x15c1) * (parseInt(r(0x14f)) / (0xb31 + 0xa77 + -0x1 * 0x159b));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xe20c8 + 0x11c95d + -0xf3d * 0x16f));
var __importDefault = this && this[t(0x13b) + u(0x143)] || function (c) {
    const v = t;
    return c && c[v(0x13c)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1470 + -0x5c6 * 0x2 + 0x2123);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[u(0x147)] = !![], Object[t(0x150) + t(0x12a)](exports, t(0x13c), k), exports[t(0x13d) + u(0x152)] = void (-0xd99 * -0x1 + 0x74 * 0x23 + 0x1 * -0x1d75);
function a() {
    const y = [
        'fault',
        'createRefr',
        'rs/AppErro',
        'Tokens',
        'value',
        'vices/Show',
        '../../erro',
        '../../help',
        '../../conf',
        'default',
        '16jBfgHj',
        'newToken',
        '637KERhKh',
        'defineProp',
        'UcjgV',
        'enService',
        '6480630JaOleA',
        'refreshTok',
        '766qfOklM',
        '2049377SgwTUz',
        '47964foqKTz',
        'refreshSec',
        'erty',
        'UserServic',
        'ers/Create',
        '20dIsRdv',
        'ig/auth',
        'FDUcL',
        '2023Wtuked',
        'tokenVersi',
        'ret',
        '498ZSmkVJ',
        '186OuXCRb',
        'jsonwebtok',
        'ERR_SESSIO',
        '../UserSer',
        '76870wBKvif',
        '26160IBwmfL',
        'eshToken',
        '__importDe',
        '__esModule',
        'RefreshTok',
        'N_EXPIRED',
        'ssToken',
        'verify',
        'createAcce',
        '2344202olEZxA'
    ];
    a = function () {
        return y;
    };
    return a();
}
const jsonwebtoken_1 = require(u(0x135) + 'en'), AppError_1 = __importDefault(require(t(0x149) + t(0x145) + 'r')), ShowUserService_1 = __importDefault(require(t(0x137) + t(0x148) + t(0x12b) + 'e')), auth_1 = __importDefault(require(u(0x14b) + u(0x12e))), CreateTokens_1 = require(t(0x14a) + u(0x12c) + u(0x146)), RefreshTokenService = async e => {
        const w = u, x = t, f = {};
        f[w(0x151)] = w(0x136) + x(0x13e), f[w(0x12f)] = function (p, q) {
            return p !== q;
        };
        const g = f;
        let h;
        try {
            h = (0x1f7 + -0x1612 + 0x141b * 0x1, jsonwebtoken_1[w(0x140)])(e, auth_1[w(0x14c)][x(0x129) + x(0x132)]);
        } catch (p) {
            throw new AppError_1[(x(0x14c))](g[x(0x151)], 0x2310 + 0x2 * -0xf02 + -0x37b);
        }
        const {
                id: i,
                tokenVersion: j
            } = h, l = await (0x7b4 + 0xe89 * -0x1 + 0x6d5, ShowUserService_1[x(0x14c)])(i, 0xb2e * -0x2 + -0x31 * -0x63 + 0x36a);
        if (g[w(0x12f)](l[x(0x131) + 'on'], j))
            throw new AppError_1[(w(0x14c))](g[w(0x151)], -0xae * -0xd + -0x204a + 0x1905);
        const m = (-0xbc3 * 0x3 + 0x2 * -0x1341 + -0x1 * -0x49cb, CreateTokens_1[w(0x141) + w(0x13f)])(l), n = (-0xf74 + 0x1c6 * -0x2 + -0x1300 * -0x1, CreateTokens_1[w(0x144) + x(0x13a)])(l), o = {};
        return o[w(0x14e)] = m, o[x(0x154) + 'en'] = n, o;
    };
exports[u(0x13d) + t(0x152)] = RefreshTokenService;