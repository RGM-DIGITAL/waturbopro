'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0x144)) / (-0x5 * -0x272 + -0xbe4 + -0x55) + parseInt(l(0x137)) / (0x2512 + -0x49 * 0x5 + 0x1 * -0x23a3) + parseInt(l(0x134)) / (0x257d + -0x5db * 0x1 + -0x1f9f) * (-parseInt(m(0x145)) / (-0x1 * -0x1af + -0x20e1 + 0x1f36)) + parseInt(l(0x14e)) / (0x8 * -0xcc + 0x5 * 0xc3 + 0x296) + parseInt(m(0x154)) / (0x9bf + 0x1 * -0x110b + 0x2 * 0x3a9) * (-parseInt(m(0x148)) / (-0x60a + 0x2 * 0x351 + 0x1d * -0x5)) + parseInt(m(0x13d)) / (0x1bc9 + 0x1 * -0x10bd + 0xb04 * -0x1) * (-parseInt(m(0x155)) / (0x285 + 0x479 + 0x6f5 * -0x1)) + parseInt(l(0x141)) / (-0x106 * 0x1b + -0x17b0 + 0x335c) * (parseInt(m(0x13a)) / (0x2463 + 0x2 * -0xb73 + -0x6b9 * 0x2));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x20dc6 + 0x14164 + -0x9b * -0x89e));
function a() {
    const u = [
        '8553nbJKbH',
        's/Facebook',
        'user',
        '1436620dgNyoU',
        'facebookLo',
        'etTokenAnd',
        '110jsJZUY',
        '__esModule',
        'Services/G',
        '568MQabUY',
        'body',
        'status',
        'whatsapp',
        '1331740PMSrdJ',
        'json',
        'value',
        '480052dLOkvP',
        '1084iXMXgC',
        'erty',
        'nkedPage',
        '2415035JyKvhb',
        'LinkedPage',
        '__importDe',
        'Services/S',
        'defineProp',
        'gout',
        '1218375AqMasJ',
        'userToken',
        'fault',
        'default',
        'tenantId',
        '../service',
        '6NPynIh',
        '17397wetDhU',
        'etLogoutLi',
        'store',
        'accountId'
    ];
    a = function () {
        return u;
    };
    return a();
}
var __importDefault = this && this[n(0x14a) + n(0x150)] || function (c) {
    const p = o;
    return c && c[p(0x13b)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x821 * -0x1 + -0x1851 + 0x1163);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[o(0x143)] = !![], Object[n(0x14c) + o(0x146)](exports, n(0x13b), k), exports[o(0x138) + o(0x14d)] = exports[n(0x157)] = void (-0xa * 0x341 + -0x3f + 0x20c9);
const GetTokenAndLinkedPage_1 = __importDefault(require(n(0x153) + n(0x135) + o(0x13c) + n(0x139) + n(0x149))), SetLogoutLinkedPage_1 = __importDefault(require(o(0x153) + o(0x135) + n(0x14b) + n(0x156) + o(0x147))), store = async (d, e) => {
        const q = n, r = o, {
                whatsapp: f,
                accountId: g,
                userToken: h
            } = d[q(0x13e)], i = {};
        return i[q(0x140)] = f, i[q(0x133)] = g, i[q(0x14f)] = h, i[q(0x152)] = d[r(0x136)][r(0x152)], await (0x1aa9 + -0x5d * -0x5d + -0x3c72, GetTokenAndLinkedPage_1[r(0x151)])(i), e[r(0x13f)](-0x21a4 + 0x1 * -0x634 + 0x5 * 0x820)[q(0x142)]();
    };
exports[o(0x157)] = store;
const facebookLogout = async (d, e) => {
    const s = o, t = n, f = d[s(0x13e)], g = {};
    return g[t(0x140)] = f, g[s(0x152)] = d[t(0x136)][t(0x152)], await (0x1a3c + 0x9 * -0x442 + 0xc16, SetLogoutLinkedPage_1[t(0x151)])(g), e[t(0x13f)](-0x1 * 0x158a + 0x3ad * -0x3 + 0x2159)[s(0x142)]();
};
exports[o(0x138) + n(0x14d)] = facebookLogout;