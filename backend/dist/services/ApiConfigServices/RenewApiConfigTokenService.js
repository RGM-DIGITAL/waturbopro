'use strict';
const u = b, v = b;
(function (c, d) {
    const s = b, t = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(s(0x12e)) / (0x19f5 + 0x2 * 0x135b + -0x1 * 0x40aa) * (-parseInt(s(0x116)) / (-0x1fc4 + 0x1eb4 + 0x112)) + -parseInt(s(0x10b)) / (-0x3d * 0x43 + 0xadd + 0x51d) + parseInt(s(0x12c)) / (-0x1 * -0x2185 + 0x579 + -0x26fa) * (parseInt(t(0x10a)) / (-0xe35 + 0x863 + 0x5d7)) + parseInt(s(0x120)) / (-0x27 * -0xfe + -0x14d * -0xc + -0x3648) * (parseInt(t(0x127)) / (0x241c + 0x1fbd + -0x2 * 0x21e9)) + parseInt(t(0x118)) / (-0x989 + 0x140 + 0x851) + parseInt(s(0x11d)) / (-0x5 * 0x2fc + -0x1e50 + 0x2d45) * (parseInt(s(0x115)) / (0x1 * 0x2375 + -0x15 * 0xf3 + -0xf7c)) + -parseInt(s(0x114)) / (-0x20f5 + -0x73 * -0x3a + -0xfe * -0x7);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x6d499 + -0x85702 + -0x3b * -0x238f));
var __importDefault = this && this[u(0x112) + u(0x11e)] || function (c) {
    const w = v;
    return c && c[w(0x119)] ? c : { 'default': c };
};
const k = {};
k[v(0x10f)] = !![], Object[u(0x110) + u(0x12a)](exports, v(0x119), k);
function a() {
    const z = [
        'update',
        '1oMcmDI',
        'NFIG_NOT_F',
        'default',
        'findByPk',
        '../../conf',
        'wrGMy',
        '410WqTGIB',
        '1283718hmQpRI',
        'ERR_API_CO',
        '730d',
        'profile',
        'value',
        'defineProp',
        'token',
        '__importDe',
        'reload',
        '12387804pouDDy',
        '340970FzPWEL',
        '1038842phfWSz',
        '../../erro',
        '2255176TTricT',
        '__esModule',
        'sessionId',
        'jsonwebtok',
        'admin',
        '135uemBih',
        'fault',
        'sjkzh',
        '1098smZmCJ',
        'zkVob',
        'ls/ApiConf',
        'ig/auth',
        'tenantId',
        'OUND',
        'sign',
        '5257YMRJQk',
        'rs/AppErro',
        'expiresIn',
        'erty',
        '../../mode',
        '26440pEOIlU'
    ];
    a = function () {
        return z;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xfa * -0x8 + -0xc3d + 0x1512);
        let h = e[f];
        return h;
    }, b(c, d);
}
const jsonwebtoken_1 = require(v(0x11b) + 'en'), ApiConfig_1 = __importDefault(require(v(0x12b) + u(0x122) + 'ig')), auth_1 = __importDefault(require(u(0x108) + u(0x123))), AppError_1 = __importDefault(require(v(0x117) + u(0x128) + 'r')), RenewApiConfigTokenService = async ({
        apiId: g,
        sessionId: h,
        tenantId: i
    }) => {
        const x = u, y = u, j = {};
        j[x(0x109)] = y(0x10c) + y(0x105) + x(0x125), j[x(0x121)] = y(0x11c), j[x(0x11f)] = y(0x10d);
        const l = j, {secret: m} = auth_1[y(0x106)], n = await ApiConfig_1[y(0x106)][x(0x107)](g);
        if (!n)
            throw new AppError_1[(x(0x106))](l[y(0x109)], 0x848 + -0x1765 + -0x10b1 * -0x1);
        const o = {};
        o[y(0x124)] = i, o[y(0x10e)] = l[y(0x121)], o[x(0x11a)] = h;
        const p = {};
        p[x(0x129)] = l[x(0x11f)];
        const q = (-0x1bbc + -0x1fd4 + 0x3b90 * 0x1, jsonwebtoken_1[x(0x126)])(o, m, p), r = {};
        return r[x(0x111)] = q, n[y(0x12d)](r), n[y(0x113)](), n;
    };
exports[u(0x106)] = RenewApiConfigTokenService;