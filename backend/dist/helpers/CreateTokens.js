'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0xee)) / (-0xa12 + 0x1368 + -0x955) + -parseInt(q(0xe5)) / (0x140d + -0xa1 * -0x33 + -0xe * 0x3b9) + -parseInt(q(0xd4)) / (0x2 * -0x1203 + 0x89 * 0x42 + 0x1 * 0xb7) + -parseInt(q(0xe4)) / (-0x6 * 0x26e + -0x20e * 0xe + 0x2b5c) + parseInt(p(0xd6)) / (-0xe54 + 0x27 * -0x11 + -0x21e * -0x8) + parseInt(p(0xd9)) / (-0x2159 * 0x1 + 0x66e * 0x1 + 0x1af1) * (-parseInt(q(0xda)) / (0xd61 + 0x10 * -0xee + -0x1 * -0x186)) + parseInt(p(0xd8)) / (-0x1c59 + -0x1593 + 0x31f4);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xb * 0x2571b + -0x9ce3 * -0x29 + 0x78932 * 0x2));
function a() {
    const y = [
        'ssToken',
        'name',
        'tenantId',
        'auth',
        '1361048tltksV',
        'eshToken',
        'createRefr',
        '3706323obccsN',
        'defineProp',
        '5448495VxwwNO',
        'default',
        '35793848OqEsJK',
        '126NDJUyr',
        '161063zQUgqU',
        '__importDe',
        '__esModule',
        'usarname',
        'createAcce',
        'sign',
        'jsonwebtok',
        'value',
        'expiresIn',
        'fault',
        '4883852Kbccle',
        '631878mcKFtU',
        'erty',
        'tokenVersi',
        'profile',
        '../config/'
    ];
    a = function () {
        return y;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x4d1 * -0x1 + -0xad4 + 0x6d6 * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[r(0xdb) + s(0xe3)] || function (c) {
    const t = s;
    return c && c[t(0xdc)] ? c : { 'default': c };
};
const o = {};
o[s(0xe1)] = !![], Object[r(0xd5) + s(0xe6)](exports, r(0xdc), o), exports[r(0xd3) + r(0xef)] = exports[r(0xde) + r(0xea)] = void (0x1891 + 0xfd7 + -0xd78 * 0x3);
const jsonwebtoken_1 = require(s(0xe0) + 'en'), auth_1 = __importDefault(require(s(0xe9) + r(0xed))), createAccessToken = e => {
        const u = r, v = s, {
                secret: f,
                expiresIn: g
            } = auth_1[u(0xd7)], h = {};
        h[v(0xdd)] = e[v(0xeb)], h[v(0xec)] = e[v(0xec)], h[u(0xe8)] = e[v(0xe8)], h['id'] = e['id'];
        const i = {};
        return i[u(0xe2)] = g, (0x1da1 + -0x3a2 + -0x1 * 0x19ff, jsonwebtoken_1[u(0xdf)])(h, f, i);
    };
exports[s(0xde) + s(0xea)] = createAccessToken;
const createRefreshToken = e => {
    const w = s, x = s, {
            refreshSecret: f,
            refreshExpiresIn: g
        } = auth_1[w(0xd7)], h = {};
    h['id'] = e['id'], h[w(0xe7) + 'on'] = e[w(0xe7) + 'on'];
    const i = {};
    return i[w(0xe2)] = g, (-0xb * -0x19 + 0x4 * -0x819 + -0x1f51 * -0x1, jsonwebtoken_1[w(0xdf)])(h, f, i);
};
exports[r(0xd3) + r(0xef)] = createRefreshToken;