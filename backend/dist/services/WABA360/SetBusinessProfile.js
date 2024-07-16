'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(m(0xb8)) / (-0x16c + 0x837 + -0x6ca) * (parseInt(n(0xab)) / (0xf4 * 0x11 + -0x4d9 * 0x4 + -0x332 * -0x1)) + -parseInt(m(0xc7)) / (0x1 * 0x5f + -0x2 * -0xae7 + 0x162a * -0x1) + -parseInt(m(0xc2)) / (-0x5c8 + -0x2 * -0x102a + -0x1a88) * (parseInt(n(0xad)) / (0x1 * 0xb80 + 0x149 * 0x18 + -0x2a53)) + -parseInt(m(0xbf)) / (-0x1e7 * 0x13 + -0x124 * 0x16 + 0x1 * 0x3d43) + -parseInt(m(0xa4)) / (0x57 * -0x4 + 0x2 * 0xf59 + -0x7b * 0x3d) + parseInt(m(0xb1)) / (0x8 * 0x8b + -0x1 * 0x10 + 0x220 * -0x2) + parseInt(n(0xca)) / (0x1 * 0x1d4b + 0x1655 + -0x2f * 0x119) * (parseInt(n(0xb4)) / (-0x1676 + 0x1 * 0xf4f + 0x731));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x10d8a5 * 0x1 + -0xb95d3 + -0x7e16 * -0x9));
var __importDefault = this && this[o(0xaa) + p(0xa6)] || function (c) {
    const q = p;
    return c && c[q(0xc6)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1ea * 0x11 + 0x157b + -0x1ab1 * 0x2);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[p(0xa9)] = !![], Object[p(0xa8) + o(0xc8)](exports, p(0xc6), k);
const axios_1 = __importDefault(require(o(0xa7))), AppError_1 = __importDefault(require(p(0xb0) + o(0xaf) + 'r')), logger_1 = require(o(0xa3) + o(0xc0)), SetBusinessProfile = async ({
        data: e,
        apiKey: f
    }) => {
        const r = p, s = o, g = {};
        g[r(0xba)] = s(0xbe), g[r(0xb9)] = r(0xc3) + r(0xcb);
        const h = g, i = process[s(0xa5)][r(0xb2) + '0'] + (s(0xae) + s(0xb5) + s(0xc1));
        try {
            const j = {};
            return j[s(0xb3)] = h[r(0xba)], j[s(0xb6)] = i, j[s(0xac)] = e, j[s(0xc4)] = {}, j[s(0xc4)][s(0xc5) + 'EY'] = f, j[s(0xc4)][s(0xcc) + 'pe'] = h[r(0xb9)], await (0x1da * 0x11 + -0x19f8 + -0x582 * 0x1, axios_1[s(0xbd)])(j), !![];
        } catch (l) {
            logger_1[r(0xb7)][s(0xbc)](l);
            throw new AppError_1[(r(0xbd))](r(0xbb) + s(0xc9) + ':\x20' + l);
        }
    };
function a() {
    const t = [
        'gs/busines',
        'url',
        'logger',
        '26309mamOOp',
        'nXayd',
        'NeCBf',
        '360_NOT_SE',
        'error',
        'default',
        'post',
        '5437788VWrjqz',
        's/logger',
        's/profile',
        '4HiWjip',
        'applicatio',
        'headers',
        'D360-API-K',
        '__esModule',
        '917352TgaDdS',
        'erty',
        'T_BUSINESS',
        '10851858BfjwVO',
        'n/json',
        'Content-Ty',
        '../../util',
        '981036oHcXfg',
        'env',
        'fault',
        'axios',
        'defineProp',
        'value',
        '__importDe',
        '66DhvtWc',
        'data',
        '4591945ZBAmHX',
        '/v1/settin',
        'rs/AppErro',
        '../../erro',
        '6655584tDzFjX',
        'API_URL_36',
        'method',
        '10rAqMks'
    ];
    a = function () {
        return t;
    };
    return a();
}
exports[o(0xbd)] = SetBusinessProfile;