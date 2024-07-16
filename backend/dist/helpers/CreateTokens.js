'use strict';
function a() {
    const y = [
        'ssToken',
        '__importDe',
        'profile',
        'erty',
        'createRefr',
        'name',
        '26775vFHUVw',
        'sign',
        '2787720gdwWog',
        '4VtSdCn',
        'expiresIn',
        'auth',
        'value',
        '../config/',
        'tokenVersi',
        '47394FoQJxx',
        '63RQTiTG',
        '3724566bgjZmM',
        'defineProp',
        '__esModule',
        'default',
        '708856vHHYyc',
        'usarname',
        'eshToken',
        'fault',
        'createAcce',
        '11510TDMDaT',
        '1737735HqGRqZ',
        'jsonwebtok',
        '949720wQBQcv',
        'tenantId'
    ];
    a = function () {
        return y;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * -0x245f + 0x1e92 + 0x71e * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x169)) / (0x4d * -0x42 + -0x3 * 0xcd7 + 0x3a60) + -parseInt(p(0x15c)) / (0x1419 + -0x1e53 + 0xa3c) + -parseInt(p(0x163)) / (0x22af + 0x130e + 0xd * -0x422) * (-parseInt(p(0x15d)) / (-0x1738 + 0x2ea * -0x3 + 0x1ffa)) + -parseInt(p(0x16f)) / (0x3cf + 0x64f * -0x1 + -0x5 * -0x81) + -parseInt(p(0x165)) / (-0x1f0f * -0x1 + -0x279 * 0xe + 0x7 * 0x83) + parseInt(q(0x164)) / (-0xe50 * 0x1 + -0xa5 + 0xe * 0x112) * (-parseInt(q(0x152)) / (-0x10f * -0x17 + 0x5d * -0x31 + 0x3 * -0x22c)) + parseInt(q(0x15a)) / (-0x2 * 0x287 + 0x418 + 0xff) * (parseInt(p(0x16e)) / (-0x1 * 0x246a + 0x1c85 + 0x7ef * 0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * -0xfa169 + -0x8c1 * -0x172 + 0x3 * 0x4a569));
var __importDefault = this && this[r(0x155) + s(0x16c)] || function (c) {
    const t = r;
    return c && c[t(0x167)] ? c : { 'default': c };
};
const o = {};
o[r(0x160)] = !![], Object[s(0x166) + s(0x157)](exports, s(0x167), o), exports[r(0x158) + s(0x16b)] = exports[s(0x16d) + r(0x154)] = void (0xc78 + 0x125 * -0x1f + 0x1703);
const jsonwebtoken_1 = require(s(0x151) + 'en'), auth_1 = __importDefault(require(r(0x161) + s(0x15f))), createAccessToken = e => {
        const u = s, v = r, {
                secret: f,
                expiresIn: g
            } = auth_1[u(0x168)], h = {};
        h[u(0x16a)] = e[u(0x159)], h[u(0x153)] = e[v(0x153)], h[v(0x156)] = e[v(0x156)], h['id'] = e['id'];
        const i = {};
        return i[v(0x15e)] = g, (0x21d * 0x11 + 0xa41 + -0x2e2e, jsonwebtoken_1[u(0x15b)])(h, f, i);
    };
exports[r(0x16d) + s(0x154)] = createAccessToken;
const createRefreshToken = e => {
    const w = s, x = s, {
            refreshSecret: f,
            refreshExpiresIn: g
        } = auth_1[w(0x168)], h = {};
    h['id'] = e['id'], h[x(0x162) + 'on'] = e[w(0x162) + 'on'];
    const i = {};
    return i[x(0x15e)] = g, (0x1 * -0x1b44 + 0x1a10 + 0x134, jsonwebtoken_1[w(0x15b)])(h, f, i);
};
exports[s(0x158) + r(0x16b)] = createRefreshToken;