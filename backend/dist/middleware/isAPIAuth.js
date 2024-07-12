'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x20e3 * 0x1 + -0x544 * 0x1 + -0x1af7);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const I = [
        '../config/',
        'verify',
        '63214686hRmxZj',
        '3138scXNYG',
        '1138FWFtCY',
        'jsonwebtok',
        '__importDe',
        'ed.',
        'sessionId',
        '../errors/',
        'pdtwO',
        '1562284YcXmRo',
        '1900128RihUAx',
        'defineProp',
        'not\x20provid',
        'auth',
        'ion',
        'value',
        'ken.',
        'Invalid\x20to',
        'erty',
        'YxSEi',
        '__esModule',
        'secret',
        '42XeYKXy',
        'default',
        '2305812DCGqJn',
        'apiId',
        'headers',
        'AppError',
        'Token\x20was\x20',
        '4763920udLDHA',
        'authorizat',
        'tenantId',
        'split',
        'fault',
        'APIAuth',
        'AzHJE',
        '8111320pIUdwz'
    ];
    a = function () {
        return I;
    };
    return a();
}
const D = b, E = b;
(function (c, d) {
    const B = b, C = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(B(0xcc)) / (-0x5 * -0x5f2 + -0x723 + -0x1696) * (-parseInt(B(0xcd)) / (-0x23e + 0xc42 * 0x1 + -0xa02)) + -parseInt(C(0xbc)) / (0x1fce + 0x556 * 0x1 + -0x2521) + parseInt(B(0xad)) / (-0x21 * 0x71 + 0x74e + -0x9 * -0xcf) + -parseInt(C(0xc1)) / (0x1f5 * -0xc + 0x303 + -0x3d * -0x56) + -parseInt(B(0xae)) / (0x41f * 0x8 + -0x66 * 0x33 + -0xca0) * (parseInt(B(0xba)) / (-0x1fd4 + -0x3 * -0xc43 + -0x4ee * 0x1)) + -parseInt(B(0xc8)) / (0x5 * -0x6f9 + 0x3d * 0x37 + 0x15ca * 0x1) + parseInt(B(0xcb)) / (-0x11af * -0x1 + -0x1be0 + 0xa3a);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xa7 * -0x923 + 0x150edf + -0x7db * -0x2));
var __importDefault = this && this[D(0xa8) + D(0xc5)] || function (c) {
    const F = E;
    return c && c[F(0xb8)] ? c : { 'default': c };
};
const A = {};
A[E(0xb3)] = !![], Object[E(0xaf) + E(0xb6)](exports, D(0xb8), A);
const jsonwebtoken_1 = require(E(0xce) + 'en'), AppError_1 = __importDefault(require(E(0xab) + E(0xbf))), auth_1 = __importDefault(require(E(0xc9) + D(0xb1))), isAPIAuth = (d, e, f) => {
        const G = D, H = D, g = {
                'pdtwO': G(0xc0) + G(0xb0) + G(0xa9),
                'YxSEi': G(0xb5) + H(0xb4),
                'AzHJE': function (j) {
                    return j();
                }
            }, h = d[H(0xbe)][H(0xc2) + G(0xb2)];
        if (!h)
            throw new AppError_1[(H(0xbb))](g[G(0xac)], 0xc10 + -0x1f89 + 0x150c);
        const [, i] = h[G(0xc4)]('\x20');
        try {
            const j = (0x358 * -0xb + -0x1d0f + 0x5 * 0xd2b, jsonwebtoken_1[G(0xca)])(i, auth_1[H(0xbb)][G(0xb9)]), {
                    apiId: k,
                    sessionId: l,
                    tenantId: m
                } = j, n = {};
            n[G(0xbd)] = k, n[G(0xaa)] = l, n[H(0xc3)] = m, d[G(0xc6)] = n;
        } catch (o) {
            throw new AppError_1[(H(0xbb))](g[G(0xb7)], 0x17da + 0x2 * 0x926 + -0xdd * 0x2f);
        }
        return g[G(0xc7)](f);
    };
exports[E(0xbb)] = isAPIAuth;