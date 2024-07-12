'use strict';
const u = b, v = b;
(function (c, d) {
    const s = b, t = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(s(0xac)) / (0x26ae + 0x1 * -0x21e5 + -0x44 * 0x12) * (parseInt(t(0xae)) / (-0x2045 + -0x13cf + 0x3416)) + parseInt(s(0xbb)) / (0x3 * -0xc1a + -0x24ec + 0x493d) * (-parseInt(t(0x9a)) / (-0x1f * -0xb8 + 0x1665 + -0xee3 * 0x3)) + -parseInt(t(0xb3)) / (0x553 + 0x1 * 0x11fc + -0xb * 0x21e) + -parseInt(s(0xb8)) / (-0x20ac + 0x1 * -0x1e0e + 0x4 * 0xfb0) + -parseInt(t(0x9f)) / (0x756 + -0x3 * 0x990 + 0x1561) + parseInt(s(0xa9)) / (0x204b + -0x1 * -0x1740 + -0x3783) + parseInt(s(0xb5)) / (-0x25c1 * 0x1 + 0x1dfc + 0x7ce) * (parseInt(s(0x9d)) / (-0x22 * -0x112 + -0x895 + -0x1 * 0x1bc5));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xc86e3 + 0x43 * 0x2027 + 0x1161cb));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1e9b * 0x1 + 0x1930 + 0x5ff * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const z = [
        'jsonwebtok',
        'admin',
        'ig/auth',
        'OUND',
        'default',
        'erty',
        'ls/ApiConf',
        'update',
        '6726016lGoMQE',
        'dAjIU',
        'findByPk',
        '27tYyemk',
        'sign',
        '58218pNYCqm',
        'sessionId',
        'value',
        '730d',
        'reload',
        '7855875KoujrQ',
        '../../conf',
        '7983MTdQUK',
        'rs/AppErro',
        '__esModule',
        '10283160SXJXUU',
        'profile',
        'tenantId',
        '3ekLEQF',
        'fault',
        'expiresIn',
        'dbjen',
        '../../erro',
        'NFIG_NOT_F',
        'ERR_API_CO',
        'token',
        '6825508nETOcn',
        '__importDe',
        'defineProp',
        '49390kGLmRR',
        '../../mode',
        '1025605vvhzhW',
        'qEDay'
    ];
    a = function () {
        return z;
    };
    return a();
}
var __importDefault = this && this[u(0x9b) + u(0xbc)] || function (c) {
    const w = u;
    return c && c[w(0xb7)] ? c : { 'default': c };
};
const k = {};
k[u(0xb0)] = !![], Object[u(0x9c) + u(0xa6)](exports, u(0xb7), k);
const jsonwebtoken_1 = require(u(0xa1) + 'en'), ApiConfig_1 = __importDefault(require(u(0x9e) + u(0xa7) + 'ig')), auth_1 = __importDefault(require(v(0xb4) + v(0xa3))), AppError_1 = __importDefault(require(v(0x96) + v(0xb6) + 'r')), RenewApiConfigTokenService = async ({
        apiId: g,
        sessionId: h,
        tenantId: i
    }) => {
        const x = v, y = v, j = {};
        j[x(0xaa)] = y(0x98) + x(0x97) + x(0xa4), j[y(0x95)] = y(0xa2), j[x(0xa0)] = y(0xb1);
        const l = j, {secret: m} = auth_1[y(0xa5)], n = await ApiConfig_1[y(0xa5)][y(0xab)](g);
        if (!n)
            throw new AppError_1[(y(0xa5))](l[x(0xaa)], -0x9a8 + -0x1 * 0x11eb + -0x11 * -0x1b7);
        const o = {};
        o[y(0xba)] = i, o[y(0xb9)] = l[x(0x95)], o[y(0xaf)] = h;
        const p = {};
        p[x(0x94)] = l[x(0xa0)];
        const q = (0xa79 + -0xd2d * -0x2 + -0x1 * 0x24d3, jsonwebtoken_1[y(0xad)])(o, m, p), r = {};
        return r[y(0x99)] = q, n[x(0xa8)](r), n[y(0xb2)](), n;
    };
exports[v(0xa5)] = RenewApiConfigTokenService;