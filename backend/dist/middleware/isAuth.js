'use strict';
const D = b, E = b;
(function (c, d) {
    const B = b, C = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(B(0xea)) / (0x832 * 0x1 + 0x1 * -0x307 + -0x52a) + parseInt(C(0xd4)) / (-0x1420 + -0xb30 + 0x1f52) + -parseInt(C(0xdf)) / (0x1821 + -0x12c + -0x21 * 0xb2) * (-parseInt(B(0xe2)) / (-0x1811 + 0xd69 + 0xaac)) + parseInt(B(0xf3)) / (0x1d * -0xa1 + 0x1abe + -0x87c) + -parseInt(C(0xeb)) / (-0x2538 + 0x162d + 0xf11) * (-parseInt(C(0xdc)) / (0x12f1 + 0xfe4 + -0x9 * 0x3de)) + -parseInt(B(0xca)) / (0xc67 + 0x1 * 0x729 + 0xfa * -0x14) * (parseInt(B(0xee)) / (0x2 * 0xed7 + 0x8 * -0x487 + 0x693)) + -parseInt(B(0xd3)) / (-0x1200 + 0x77c + 0xa8e);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x2d121 * -0x3 + 0xa5ffa + 0x3b4bd));
function a() {
    const I = [
        'tenantId',
        'hPbCS',
        '44xVaNiP',
        'profile',
        'defineProp',
        '__importDe',
        'split',
        'value',
        'ed.',
        'auth',
        '152189cyispt',
        '626538YGRtpa',
        'AppError',
        'authorizat',
        '36jymNwS',
        'ion',
        'JQPat',
        'ken.',
        'Token\x20was\x20',
        '2923285pWZwHu',
        'dmMHR',
        '623064bPsThL',
        'jsonwebtok',
        'user',
        '../errors/',
        'Lefig',
        'RLWPh',
        'IIVAV',
        'headers',
        'fault',
        '11771700YGwlkl',
        '759004zcMXHw',
        'erty',
        'default',
        '../config/',
        'secret',
        'verify',
        'cBnAH',
        'not\x20provid',
        '7tfYtvr',
        '__esModule',
        'Invalid\x20to',
        '173703zGdrPQ'
    ];
    a = function () {
        return I;
    };
    return a();
}
var __importDefault = this && this[D(0xe5) + E(0xd2)] || function (c) {
    const F = E;
    return c && c[F(0xdd)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x52a * -0x1 + 0x206f + -0x1a7b);
        let h = e[f];
        return h;
    }, b(c, d);
}
const A = {};
A[D(0xe7)] = !![], Object[E(0xe4) + E(0xd5)](exports, D(0xdd), A);
const jsonwebtoken_1 = require(E(0xcb) + 'en'), AppError_1 = __importDefault(require(D(0xcd) + E(0xec))), auth_1 = __importDefault(require(D(0xd7) + E(0xe9))), isAuth = (d, e, f) => {
        const G = E, H = E, g = {
                'RLWPh': G(0xf2) + H(0xdb) + H(0xe8),
                'JQPat': H(0xde) + G(0xf1),
                'Lefig': function (j) {
                    return j();
                },
                'dmMHR': function (j, k) {
                    return j !== k;
                },
                'hPbCS': H(0xda),
                'IIVAV': function (j) {
                    return j();
                }
            }, h = d[G(0xd1)][G(0xed) + H(0xef)];
        if (!h)
            throw new AppError_1[(G(0xd6))](g[G(0xcf)], -0x2 * 0x47 + -0x238f * -0x1 + -0xb * 0x30a);
        const [, i] = h[G(0xe6)]('\x20');
        try {
            if (g[H(0xf4)](g[G(0xe1)], g[G(0xe1)])) {
                const k = j[H(0xd1)][G(0xed) + G(0xef)];
                if (!k)
                    throw new q[(G(0xd6))](g[H(0xcf)], 0x1 * 0x1f1a + -0x1 * 0x234a + -0x3b * -0x19);
                const [, l] = k[G(0xe6)]('\x20');
                try {
                    const m = (-0x1be5 + 0x354 + -0x1 * -0x1891, r[H(0xd9)])(l, s[G(0xd6)][G(0xd8)]), {
                            id: n,
                            profile: o,
                            tenantId: p
                        } = m, q = {};
                    q['id'] = n, q[H(0xe3)] = o, q[G(0xe0)] = p, t[H(0xcc)] = q;
                } catch (r) {
                    throw new v[(H(0xd6))](g[G(0xf0)], -0x1069 * -0x2 + 0x268 * 0x9 + -0x34e7);
                }
                return g[H(0xce)](p);
            } else {
                const k = (-0xe36 + -0x1389 * -0x1 + -0x553, jsonwebtoken_1[H(0xd9)])(i, auth_1[H(0xd6)][H(0xd8)]), {
                        id: l,
                        profile: m,
                        tenantId: n
                    } = k, o = {};
                o['id'] = l, o[H(0xe3)] = m, o[H(0xe0)] = n, d[G(0xcc)] = o;
            }
        } catch (p) {
            throw new AppError_1[(G(0xd6))](g[G(0xf0)], -0x3 * 0x7f7 + -0x1 * 0x187d + 0x31f5);
        }
        return g[H(0xd0)](f);
    };
exports[E(0xd6)] = isAuth;