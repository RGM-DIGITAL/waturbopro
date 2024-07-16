'use strict';
const y = b, z = b;
(function (c, d) {
    const w = b, x = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(w(0x1ab)) / (-0x19 * -0x14a + 0x3aa + 0x23e3 * -0x1) * (-parseInt(x(0x18b)) / (-0x1ab1 + 0xa9 * 0x37 + -0xcd * 0xc)) + parseInt(x(0x1a7)) / (-0xa4e + -0x240f + -0x35 * -0xe0) + -parseInt(x(0x1cd)) / (0x25 * 0x9 + 0x2f * -0xb7 + 0x2050) + parseInt(w(0x1af)) / (-0x93b + -0xefd + 0x5 * 0x4d9) * (parseInt(w(0x1a0)) / (0xd4e + -0xaaa + 0x43 * -0xa)) + -parseInt(x(0x1d0)) / (0x1c1a + -0x16cd + -0x546) * (-parseInt(x(0x1aa)) / (0x5e9 * 0x5 + 0x436 + 0x37 * -0x9d)) + parseInt(x(0x1c5)) / (-0xa51 * 0x3 + -0x1 * 0x874 + 0x2770) + -parseInt(x(0x1c0)) / (0x3 * -0x683 + 0x6d5 + 0xcbe) * (parseInt(x(0x1c6)) / (0xe96 + 0x241a + 0x1 * -0x32a5));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1877b + -0x81ce3 + 0xb8e30));
var __importDefault = this && this[y(0x1b8) + z(0x1a3)] || function (c) {
    const A = y;
    return c && c[A(0x19e)] ? c : { 'default': c };
};
const k = {};
k[y(0x1cf)] = !![], Object[z(0x19a) + z(0x1ae)](exports, y(0x19e), k);
const jsonwebtoken_1 = require(y(0x1b1) + 'en'), AppError_1 = __importDefault(require(z(0x1cc) + y(0x1a1))), auth_1 = __importDefault(require(z(0x196) + y(0x1bd))), User_1 = __importDefault(require(z(0x1c3) + z(0x1b5))), isAuthAdmin = async (d, e, f) => {
        const B = y, C = z, g = {
                'wJRFZ': B(0x1c2) + C(0x1c9) + B(0x197),
                'bvbqx': B(0x19f) + B(0x19d) + C(0x1c1),
                'PekeN': C(0x1b4) + B(0x1b9) + B(0x1a4) + C(0x1c1),
                'AqqjM': function (l, m) {
                    return l !== m;
                },
                'lgjCF': B(0x1ac),
                'FOBdN': C(0x1a5),
                'XQZPK': C(0x191),
                'oRAFZ': function (l, m) {
                    return l === m;
                },
                'uCHpx': B(0x194),
                'VMfIt': B(0x19b),
                'FcFnd': C(0x1b6) + B(0x1bc),
                'jVyLj': function (l, m) {
                    return l !== m;
                },
                'NgdSI': B(0x19c),
                'IEIwG': B(0x1a2),
                'naRqb': function (l) {
                    return l();
                }
            }, h = d[B(0x1be)][B(0x199) + C(0x1cb)], i = process[B(0x1b0)][C(0x192) + 'IN'];
        if (!h) {
            if (g[B(0x1c7)](g[B(0x1b7)], g[C(0x1bb)]))
                throw new AppError_1[(C(0x18e))](g[B(0x1b2)], 0x13 * 0x1c1 + -0x10f + 0x9 * -0x369);
            else {
                const m = {};
                return m[B(0x18e)] = j, g && h[C(0x19e)] ? i : m;
            }
        }
        if (!i) {
            if (g[C(0x1c7)](g[B(0x190)], g[B(0x190)]))
                throw new d[(B(0x18e))](g[C(0x1a6)], -0x1 * 0x9d4 + -0x2050 + -0x1f * -0x169);
            else
                throw new AppError_1[(C(0x18e))](g[C(0x1c8)], 0x3 * 0x25f + -0x18c6 + -0x4cf * -0x4);
        }
        const [, j] = h[C(0x1ce)]('\x20');
        try {
            if (g[C(0x18a)](g[B(0x1d1)], g[C(0x195)]))
                throw new d[(B(0x18e))](g[B(0x1b2)], 0x14d9 * -0x1 + -0x1d3e + 0x33aa);
            else {
                const o = (0xc26 + 0x1f1 + -0x1 * 0xe17, jsonwebtoken_1[C(0x1c4)])(j, auth_1[B(0x18e)][C(0x1b3)]), {
                        id: p,
                        profile: q,
                        tenantId: r
                    } = o, s = await User_1[B(0x18e)][B(0x18d)](p);
                if (!s || g[C(0x18a)](s[C(0x18c)][B(0x198)](i), -0x1 * -0x186d + 0x1ddd + -0x3649))
                    throw new AppError_1[(C(0x18e))](g[C(0x193)], -0x1b96 * -0x1 + -0x217c * -0x1 + 0x3b7f * -0x1);
                const t = {};
                t['id'] = p, t[B(0x1a9)] = q, t[C(0x1a8)] = r, d[C(0x1ca)] = t;
            }
        } catch (u) {
            if (g[B(0x1ad)](g[C(0x1bf)], g[C(0x18f)]))
                throw new AppError_1[(C(0x18e))](g[C(0x1a6)], 0x1b15 + 0x1275 + -0x2bf7);
            else
                throw new d[(C(0x18e))](g[C(0x1c8)], -0x3 * -0xa1c + -0xf24 + 0x11 * -0xcd);
        }
        return g[B(0x1ba)](f);
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2038 + 0xaab * 0x2 + 0xa * 0x13e);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const D = [
        'authorizat',
        'defineProp',
        'OKBpQ',
        'FaLEK',
        'not\x20provid',
        '__esModule',
        'Token\x20was\x20',
        '2976kEWVFY',
        'AppError',
        'rIQeg',
        'fault',
        'ains\x20defin',
        'rUIka',
        'wJRFZ',
        '820026mugQiz',
        'tenantId',
        'profile',
        '648ndcJrh',
        '4tjYCMK',
        'pntOO',
        'jVyLj',
        'erty',
        '935EpdAjH',
        'env',
        'jsonwebtok',
        'bvbqx',
        'secret',
        'Not\x20exists',
        'User',
        'Not\x20admin\x20',
        'lgjCF',
        '__importDe',
        '\x20admin\x20dom',
        'naRqb',
        'FOBdN',
        'permission',
        'auth',
        'headers',
        'NgdSI',
        '2657020TgwEfG',
        'ed.',
        'Invalid\x20to',
        '../models/',
        'verify',
        '2467431avdQmO',
        '22WngJyQ',
        'AqqjM',
        'PekeN',
        'ken\x20or\x20not',
        'user',
        'ion',
        '../errors/',
        '908048sONVbU',
        'split',
        'value',
        '4501DUWVWL',
        'uCHpx',
        'oRAFZ',
        '195956vXFWYw',
        'email',
        'findByPk',
        'default',
        'IEIwG',
        'XQZPK',
        'KxsSP',
        'ADMIN_DOMA',
        'FcFnd',
        'sLZwM',
        'VMfIt',
        '../config/',
        '\x20Admin',
        'indexOf'
    ];
    a = function () {
        return D;
    };
    return a();
}
exports[z(0x18e)] = isAuthAdmin;