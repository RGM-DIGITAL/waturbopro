'use strict';
const A = b, B = b;
(function (c, d) {
    const y = b, z = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(y(0x1d7)) / (-0x42d * -0x3 + -0x5 * -0x5cf + 0xddb * -0x3) + parseInt(z(0x1ca)) / (0x100d + 0x1345 * -0x1 + 0x33a) * (-parseInt(y(0x1c2)) / (-0xffb * 0x2 + 0x2d7 * 0x9 + -0x1 * -0x66a)) + -parseInt(z(0x1bf)) / (-0xce1 * -0x2 + 0x25de + -0x3f9c) + parseInt(y(0x1b9)) / (0x1c4e + 0x499 * 0x2 + -0x257b * 0x1) + parseInt(y(0x1c0)) / (-0x997 + -0x29 + 0x9c6) * (-parseInt(z(0x1b8)) / (0x735 + 0x1cf * 0xd + -0x1eb1)) + parseInt(z(0x1c3)) / (0x1194 + -0x13ac + 0x88 * 0x4) + -parseInt(y(0x1cc)) / (0x514 + 0xb0f + -0xe5 * 0x12) * (-parseInt(z(0x1bd)) / (0x1 * 0x11bf + -0xb * 0x1af + -0x34 * -0x4));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * 0xc2617 + -0x523c4 + 0x1a5833));
var __importDefault = this && this[A(0x1c6) + A(0x1c9)] || function (c) {
    const C = A;
    return c && c[C(0x1cd)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1946 + -0xf45 + -0x2a41 * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const x = {};
function a() {
    const F = [
        'KBeAQ',
        'data',
        'profile',
        'logger',
        'verify',
        '279174DnIROS',
        'KQZNw',
        'default',
        'zMsLv',
        'Aezdk',
        'zZOMt',
        'jsonwebtok',
        '7Mocrmr',
        '2942805vyjFqx',
        'secret',
        '../config/',
        'provided',
        '10gVsvAz',
        'defineProp',
        '2338372LWYXwk',
        '980214dAWUdQ',
        'ogger',
        '18nzOaox',
        '4393952pFrAXn',
        'Token\x20not\x20',
        '../utils/l',
        '__importDe',
        'auth',
        'value',
        'fault',
        '381754aSuWva',
        'error',
        '9627669bbtYuH',
        '__esModule',
        'isValid',
        'erty',
        'tenantId',
        'ZzovN'
    ];
    a = function () {
        return F;
    };
    return a();
}
x[B(0x1c8)] = !![], Object[A(0x1be) + A(0x1cf)](exports, B(0x1cd), x);
const jsonwebtoken_1 = require(B(0x1b7) + 'en'), auth_1 = __importDefault(require(B(0x1bb) + A(0x1c7))), logger_1 = require(B(0x1c5) + A(0x1c1)), decode = g => {
        const D = A, E = B, h = {};
        h[D(0x1d1)] = function (m, n) {
            return m === n;
        }, h[D(0x1db)] = E(0x1b6), h[D(0x1d2)] = E(0x1d8), h[D(0x1da)] = D(0x1c4) + D(0x1bc);
        const i = h, j = {};
        j['id'] = '', j[D(0x1d4)] = '', j[D(0x1d0)] = 0x0;
        const k = {};
        k[D(0x1ce)] = ![], k[D(0x1d3)] = j;
        const l = k;
        if (!g) {
            if (i[D(0x1d1)](i[E(0x1db)], i[E(0x1d2)]))
                k[E(0x1d5)][E(0x1cb)](f);
            else
                return logger_1[D(0x1d5)][E(0x1cb)](i[E(0x1da)]), l;
        }
        try {
            const n = (-0x2039 + 0x11f1 + 0xe48 * 0x1, jsonwebtoken_1[D(0x1d6)])(g, auth_1[E(0x1d9)][E(0x1ba)]), {
                    id: o,
                    profile: p,
                    tenantId: q
                } = n;
            l[D(0x1ce)] = !![];
            const r = {};
            r['id'] = o, r[E(0x1d4)] = p, r[D(0x1d0)] = q, l[D(0x1d3)] = r;
        } catch (s) {
            logger_1[D(0x1d5)][E(0x1cb)](s);
        }
        return l;
    };
exports[B(0x1d9)] = decode;