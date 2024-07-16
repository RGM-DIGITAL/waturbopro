'use strict';
const q = b, r = b;
function a() {
    const v = [
        'default',
        '1887276xQKesC',
        'post',
        'iLWSs',
        'D360-API-K',
        'n/json',
        '14202scRTiS',
        '../../util',
        'url',
        '__esModule',
        'method',
        '8324952UPwaiy',
        '88056sPopNH',
        'data',
        '30eBklMM',
        '/v1/config',
        'error',
        'defineProp',
        'rs/AppErro',
        '360_NOT_SE',
        '50pCKGVV',
        'Content-Ty',
        '464357dgIQaZ',
        'env',
        'T_WEBHOOK:',
        'value',
        'rCtus',
        '600dhGYyl',
        's/webhook',
        '1841AfvvlL',
        '../../erro',
        'applicatio',
        'headers',
        'erty',
        'fault',
        '2NMTAoU',
        'API_URL_36',
        'axios',
        'logger',
        '39zpGAyZ',
        '844129nOiywM',
        's/logger',
        '34263cPkGbp',
        '__importDe'
    ];
    a = function () {
        return v;
    };
    return a();
}
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(o(0xe8)) / (0x3a7 + -0x580 + 0x1 * 0x1da) + parseInt(p(0xf5)) / (-0x606 + 0x26 * -0x61 + 0x146e) * (-parseInt(p(0xff)) / (0x836 + -0x24bd + 0x1c8a)) + -parseInt(p(0xde)) / (-0x1 * -0x1825 + 0x45 * 0x7a + -0x3903) * (-parseInt(o(0xe0)) / (-0xf55 + 0x25ff + -0x1 * 0x16a5)) + parseInt(p(0x104)) / (-0xa42 + 0xaf8 + 0x4 * -0x2c) * (-parseInt(p(0xef)) / (0xc9e * 0x2 + -0x5 * -0x3e3 + -0x1 * 0x2ca4)) + parseInt(o(0xed)) / (0x115b + -0x17f7 + 0x6a4) * (parseInt(p(0xfc)) / (-0x122 * -0x19 + -0x152b + -0x71e)) + -parseInt(p(0xe6)) / (-0x1e8 + 0x4a * -0xf + 0xc * 0x86) * (parseInt(o(0xfa)) / (0x2706 + 0x1f8b + -0x99 * 0x76)) + parseInt(p(0xdd)) / (0x136b + -0xfd * 0x1 + -0x1 * 0x1262) * (parseInt(p(0xf9)) / (-0x1 * -0x17e5 + 0x37a * 0xa + -0x1f * 0x1e4));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x335d1 + -0xa8db5 + 0xd6f32));
var __importDefault = this && this[q(0xfd) + q(0xf4)] || function (c) {
    const s = q;
    return c && c[s(0xdb)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2b * 0x95 + -0x1ab6 + 0x231 * 0x18);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[r(0xeb)] = !![], Object[r(0xe3) + r(0xf3)](exports, q(0xdb), k);
const axios_1 = __importDefault(require(q(0xf7))), AppError_1 = __importDefault(require(r(0xf0) + q(0xe4) + 'r')), logger_1 = require(r(0x105) + q(0xfb)), SetWebHookUrl = async ({
        url: f,
        apiKey: g
    }) => {
        const t = r, u = q, h = {};
        h[t(0x101)] = t(0x100), h[u(0xec)] = t(0xf1) + t(0x103);
        const i = h, j = process[u(0xe9)][u(0xf6) + '0'] + (t(0xe1) + t(0xee));
        try {
            const l = {};
            l[t(0x106)] = f;
            const m = {};
            return m[t(0xdc)] = i[t(0x101)], m[u(0x106)] = j, m[t(0xdf)] = l, m[t(0xf2)] = {}, m[t(0xf2)][t(0x102) + 'EY'] = g, m[t(0xf2)][u(0xe7) + 'pe'] = i[u(0xec)], await (-0x2644 + -0x683 * -0x5 + 0x5b5, axios_1[t(0xfe)])(m), !![];
        } catch (n) {
            logger_1[t(0xf8)][t(0xe2)](n);
            throw new AppError_1[(t(0xfe))](t(0xe5) + u(0xea) + '\x20' + n);
        }
    };
exports[r(0xfe)] = SetWebHookUrl;