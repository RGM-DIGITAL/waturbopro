'use strict';
const F = b, G = b;
function a() {
    const K = [
        'Token\x20was\x20',
        'defineProp',
        '../config/',
        '8862948HxyebL',
        '7978883oUoqrt',
        'jsonwebtok',
        'authorizat',
        'split',
        'erty',
        'default',
        '404MOLSop',
        'dLsxK',
        'sessionId',
        'not\x20provid',
        '12oYaGaa',
        '1976478mKzFlh',
        '3HapPqA',
        'tenantId',
        'secret',
        'txDih',
        'crgEA',
        'headers',
        '__esModule',
        'fault',
        'ken.',
        'mzdYU',
        '10EWFQhT',
        'apiId',
        'AppError',
        '6566LPFTnk',
        '10794792LMKHam',
        'ion',
        '190lfIeVO',
        'Invalid\x20to',
        'APIAuth',
        'ed.',
        'auth',
        'value',
        'zmWJd',
        'vyADp',
        '../errors/',
        'verify',
        'iqhrE',
        '7124772XDvFav',
        '__importDe',
        '12072DshOrx'
    ];
    a = function () {
        return K;
    };
    return a();
}
(function (c, d) {
    const D = b, E = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(D(0x118)) / (-0x2556 + -0x29 * -0x43 + 0x1a9c) * (parseInt(E(0x133)) / (-0x4 * -0x5a4 + 0x299 * 0xd + -0x3853 * 0x1)) + parseInt(D(0x10b)) / (0xf15 + -0x3a4 + -0xb6e) * (-parseInt(E(0x126)) / (-0x1fc * -0x6 + -0x1a7 * 0x7 + -0x1 * 0x53)) + -parseInt(E(0x11b)) / (0x1376 + -0x548 + 0x2d5 * -0x5) * (-parseInt(E(0x128)) / (-0x1a63 + -0x2 * -0x1a6 + 0x3d * 0x61)) + -parseInt(E(0x10a)) / (-0x19f6 + -0x1c * 0x164 + 0x40ed * 0x1) + parseInt(E(0x119)) / (-0x2431 + -0x1f12 + 0x434b) + parseInt(D(0x12c)) / (-0xd84 + 0x509 * 0x5 + -0x4 * 0x2e8) * (parseInt(E(0x115)) / (0xad * 0x7 + -0x2 * 0x272 + -0x1 * -0x33)) + parseInt(E(0x12d)) / (-0x1d6b + -0x248e + 0x4204) * (-parseInt(E(0x109)) / (-0x16a2 + 0xe63 + 0xb * 0xc1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x122861 + 0x126435 + 0x1421 * 0xb5));
var __importDefault = this && this[F(0x127) + G(0x112)] || function (c) {
    const H = G;
    return c && c[H(0x111)] ? c : { 'default': c };
};
const A = {};
A[F(0x120)] = !![], Object[F(0x12a) + G(0x131)](exports, F(0x111), A);
const jsonwebtoken_1 = require(G(0x12e) + 'en'), AppError_1 = __importDefault(require(F(0x123) + F(0x117))), auth_1 = __importDefault(require(G(0x12b) + G(0x11f))), isAPIAuth = (d, e, f) => {
        const I = G, J = F, g = {
                'crgEA': I(0x129) + I(0x136) + J(0x11e),
                'zmWJd': J(0x11c) + I(0x113),
                'vyADp': function (j) {
                    return j();
                },
                'txDih': function (j, k) {
                    return j !== k;
                },
                'dLsxK': I(0x114),
                'iqhrE': function (j) {
                    return j();
                }
            }, h = d[J(0x110)][J(0x12f) + J(0x11a)];
        if (!h)
            throw new AppError_1[(J(0x132))](g[I(0x10f)], -0x2 * -0x163 + 0x15 * 0x1c9 + 0x4 * -0x9ac);
        const [, i] = h[J(0x130)]('\x20');
        try {
            const j = (0x1 * -0xa85 + -0x22a + 0xcaf, jsonwebtoken_1[J(0x124)])(i, auth_1[J(0x132)][I(0x10d)]), {
                    apiId: k,
                    sessionId: l,
                    tenantId: m
                } = j, n = {};
            n[I(0x116)] = k, n[I(0x135)] = l, n[J(0x10c)] = m, d[I(0x11d)] = n;
        } catch (o) {
            if (g[J(0x10e)](g[J(0x134)], g[I(0x134)])) {
                const q = j[I(0x110)][I(0x12f) + I(0x11a)];
                if (!q)
                    throw new q[(I(0x132))](g[I(0x10f)], 0xe39 * 0x1 + -0x19b1 + -0x3f * -0x35);
                const [, r] = q[J(0x130)]('\x20');
                try {
                    const s = (0x7 * 0x395 + -0x31 * 0x20 + 0x2b5 * -0x7, r[I(0x124)])(r, s[J(0x132)][I(0x10d)]), {
                            apiId: t,
                            sessionId: u,
                            tenantId: v
                        } = s, B = {};
                    B[J(0x116)] = t, B[J(0x135)] = u, B[I(0x10c)] = v, t[I(0x11d)] = B;
                } catch (C) {
                    throw new v[(I(0x132))](g[J(0x121)], -0x900 + 0xfc6 + -0x533);
                }
                return g[J(0x122)](p);
            } else
                throw new AppError_1[(J(0x132))](g[I(0x121)], -0x19fb + 0x1 * 0x39 + 0x1b55);
        }
        return g[I(0x125)](f);
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x6dc + 0x1 * -0xd73 + 0x1558);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[F(0x132)] = isAPIAuth;