'use strict';
const D = b, E = b;
(function (c, d) {
    const B = b, C = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(B(0x136)) / (-0x7 * -0x470 + -0xb5 * -0x1 + 0x26 * -0xd6) * (parseInt(B(0x142)) / (-0x1949 + -0x71e * 0x5 + -0xc2d * -0x5)) + -parseInt(C(0x12f)) / (-0x26ea + 0x709 * 0x4 + 0xac9) * (-parseInt(B(0x13d)) / (-0x21e8 + 0xf67 + -0x1af * -0xb)) + parseInt(C(0x130)) / (-0x1cb1 * 0x1 + 0x1a * 0x13d + 0xdf * -0x4) * (-parseInt(B(0x11f)) / (0xd2f + -0x12d9 + 0x5b0)) + -parseInt(C(0x123)) / (-0x1f82 * -0x1 + 0x20f3 + -0x406e) * (-parseInt(C(0x11b)) / (-0x1163 + 0x22c3 + -0x1158)) + -parseInt(C(0x11d)) / (-0xfa + 0x76d * -0x3 + 0x174a) + parseInt(C(0x13a)) / (0x165 + 0xd27 + -0xe82) + parseInt(B(0x11c)) / (-0x4 * 0x248 + -0xa * 0x223 + 0x1 * 0x1e89);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xf3 * -0xe1f + -0x58a42 + 0x3 * 0x8c389));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x49f + -0x75 * 0x3e + 0x18d1);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[D(0x11a) + E(0x143)] || function (c) {
    const F = D;
    return c && c[F(0x133)] ? c : { 'default': c };
};
function a() {
    const I = [
        'value',
        'headers',
        'not\x20provid',
        '2562490uKgZBi',
        'auth',
        'Token\x20was\x20',
        '51512NUzdDg',
        'UCvlE',
        'authorizat',
        'KmXdQ',
        'ed.',
        '830050Onjudk',
        'fault',
        'split',
        '__importDe',
        '598736FjdmgZ',
        '7568286brfwkt',
        '1426914NCmWQX',
        'AppError',
        '13278pyEiPo',
        'default',
        'ion',
        'verify',
        '63vqajzK',
        '../errors/',
        'jsonwebtok',
        'defineProp',
        'profile',
        'user',
        'secret',
        'XXXTM',
        '../config/',
        'tkqqt',
        'tenantId',
        'oqhmF',
        '162BjfXZb',
        '1905wMCequ',
        'saiXM',
        'ken.',
        '__esModule',
        'Invalid\x20to',
        'erty',
        '2nILXFd'
    ];
    a = function () {
        return I;
    };
    return a();
}
const A = {};
A[E(0x137)] = !![], Object[E(0x126) + D(0x135)](exports, D(0x133), A);
const jsonwebtoken_1 = require(D(0x125) + 'en'), AppError_1 = __importDefault(require(E(0x124) + D(0x11e))), auth_1 = __importDefault(require(D(0x12b) + D(0x13b))), isAuth = (d, e, f) => {
        const G = D, H = D, g = {
                'KmXdQ': G(0x13c) + H(0x139) + G(0x141),
                'saiXM': function (j, k) {
                    return j === k;
                },
                'XXXTM': H(0x13e),
                'oqhmF': G(0x134) + G(0x132),
                'tkqqt': function (j) {
                    return j();
                }
            }, h = d[H(0x138)][G(0x13f) + G(0x121)];
        if (!h)
            throw new AppError_1[(H(0x120))](g[G(0x140)], 0xe03 + 0x1 * -0x13ee + 0x77e);
        const [, i] = h[G(0x144)]('\x20');
        try {
            const j = (0x727 * -0x2 + -0xd06 + 0x1b54, jsonwebtoken_1[H(0x122)])(i, auth_1[H(0x120)][H(0x129)]), {
                    id: k,
                    profile: l,
                    tenantId: m
                } = j, n = {};
            n['id'] = k, n[H(0x127)] = l, n[H(0x12d)] = m, d[H(0x128)] = n;
        } catch (o) {
            if (g[H(0x131)](g[H(0x12a)], g[H(0x12a)]))
                throw new AppError_1[(G(0x120))](g[G(0x12e)], 0x24c + -0x1fb1 + 0x1ef8);
            else {
                const q = (-0x207 * 0xa + 0x1c23 + 0xb7 * -0xb, g[H(0x122)])(h, i[H(0x120)][G(0x129)]), {
                        id: r,
                        profile: s,
                        tenantId: t
                    } = q, u = {};
                u['id'] = r, u[G(0x127)] = s, u[H(0x12d)] = t, j[G(0x128)] = u;
            }
        }
        return g[H(0x12c)](f);
    };
exports[D(0x120)] = isAuth;