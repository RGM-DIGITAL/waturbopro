'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0x90)) / (0x1e35 + 0x203c + -0x1 * 0x3e70) + -parseInt(l(0x93)) / (-0x3bb * -0x5 + 0xa * 0x333 + -0x1d * 0x1bf) + -parseInt(l(0x96)) / (0xf97 + -0x695 + -0x31 * 0x2f) + -parseInt(m(0xa0)) / (-0xaf4 + 0xb8 * -0x28 + 0x27b8) * (-parseInt(m(0x98)) / (-0x1112 + -0x991 * -0x1 + 0x3 * 0x282)) + parseInt(m(0x8b)) / (-0x4 * 0x2c9 + -0x55c + 0x1086) + parseInt(m(0x81)) / (-0x97a + -0x1 * 0x85d + 0x11de) * (-parseInt(m(0x89)) / (-0xb * -0x12 + -0x1cf9 + 0x63 * 0x49)) + parseInt(m(0x8a)) / (-0x2 * -0x10cf + 0xa * -0x3dc + 0x503);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x22df5 * 0x5 + -0x11 * 0xc55a + 0x20e0fb));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x986 + 0xd7d + -0x379);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const u = [
        '__importDe',
        'gout',
        'userToken',
        'whatsapp',
        'Services/S',
        'LinkedPage',
        '9052EAkZao',
        'fault',
        'tenantId',
        'Services/G',
        '14nVcSeK',
        'status',
        'accountId',
        'value',
        'etLogoutLi',
        'store',
        's/Facebook',
        'facebookLo',
        '1855232bMvKbl',
        '6450840kCqfYe',
        '3947496NcoExo',
        'json',
        'etTokenAnd',
        '../service',
        'default',
        '217650tCUDJu',
        'user',
        'defineProp',
        '628200fVlYDX',
        'erty',
        '__esModule',
        '1680183kgyxDl',
        'body',
        '1685uLxTgv',
        'nkedPage'
    ];
    a = function () {
        return u;
    };
    return a();
}
var __importDefault = this && this[n(0x9a) + n(0x7e)] || function (c) {
    const p = n;
    return c && c[p(0x95)] ? c : { 'default': c };
};
const k = {};
k[o(0x84)] = !![], Object[o(0x92) + n(0x94)](exports, o(0x95), k), exports[o(0x88) + n(0x9b)] = exports[o(0x86)] = void (0x238a + 0x767 + -0x2af1);
const GetTokenAndLinkedPage_1 = __importDefault(require(n(0x8e) + o(0x87) + n(0x80) + o(0x8d) + o(0x9f))), SetLogoutLinkedPage_1 = __importDefault(require(n(0x8e) + n(0x87) + o(0x9e) + o(0x85) + n(0x99))), store = async (d, e) => {
        const q = n, r = n, {
                whatsapp: f,
                accountId: g,
                userToken: h
            } = d[q(0x97)], i = {};
        return i[q(0x9d)] = f, i[r(0x83)] = g, i[r(0x9c)] = h, i[r(0x7f)] = d[r(0x91)][q(0x7f)], await (-0x230b + -0x404 + 0x270f, GetTokenAndLinkedPage_1[q(0x8f)])(i), e[q(0x82)](-0xd31 + 0x711 * 0x1 + 0x6e8)[q(0x8c)]();
    };
exports[o(0x86)] = store;
const facebookLogout = async (d, e) => {
    const s = o, t = o, f = d[s(0x97)], g = {};
    return g[t(0x9d)] = f, g[s(0x7f)] = d[s(0x91)][t(0x7f)], await (0x1 * 0x2245 + -0xf57 + -0x12ee, SetLogoutLinkedPage_1[s(0x8f)])(g), e[s(0x82)](0x3eb + -0x18b3 * -0x1 + -0x1bd6 * 0x1)[s(0x8c)]();
};
exports[o(0x88) + o(0x9b)] = facebookLogout;