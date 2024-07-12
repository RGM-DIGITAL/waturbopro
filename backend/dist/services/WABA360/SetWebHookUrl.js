'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(o(0x106)) / (0x1311 + -0x1ce6 + 0x9d6) * (-parseInt(p(0xf9)) / (0x548 + 0x1bff + -0x2145)) + -parseInt(o(0xe9)) / (-0x29 * -0x12 + 0x243a + -0x2719) * (-parseInt(p(0x104)) / (-0x13 * -0xb7 + 0x1923 + 0x4 * -0x9ad)) + -parseInt(o(0xe6)) / (-0x1208 + -0x1 * -0x1b02 + -0x8f5) + -parseInt(p(0x108)) / (-0x3d * 0x1d + 0x23a2 * -0x1 + 0x2a91 * 0x1) + -parseInt(p(0x10d)) / (0x26 * -0xb3 + -0x114 * 0x1 + 0x1bad) * (parseInt(p(0xec)) / (0x13e6 + -0x8a * 0x10 + -0xb3e)) + -parseInt(o(0x10a)) / (-0x270f + 0x2 * 0x2fe + 0x211c) * (-parseInt(o(0xff)) / (0x220e + -0x1 * 0xd87 + -0x147d)) + parseInt(o(0xf6)) / (-0x2391 * -0x1 + 0x1deb + -0x4171) * (-parseInt(o(0x102)) / (-0x2 * 0x1387 + -0x5d * -0x29 + 0x1835));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x75187 + 0x1 * -0x57253 + 0x50da9));
var __importDefault = this && this[q(0xf1) + q(0xee)] || function (c) {
    const s = r;
    return c && c[s(0xe5)] ? c : { 'default': c };
};
function a() {
    const v = [
        'KhmHY',
        '52bVaTAW',
        'n/json',
        '50693VgCXyB',
        'env',
        '3187104lgltoB',
        's/logger',
        '9QhMcuF',
        'API_URL_36',
        'Content-Ty',
        '2051Tdhxrj',
        'rs/AppErro',
        '/v1/config',
        '__esModule',
        '585020VZCnAw',
        'applicatio',
        'logger',
        '65799fCloEh',
        'D360-API-K',
        'method',
        '2392DSSxxh',
        '../../erro',
        'fault',
        'EzuWI',
        'T_WEBHOOK:',
        '__importDe',
        'defineProp',
        'erty',
        'error',
        '../../util',
        '7634BiEaND',
        'post',
        'default',
        '20YqWPEv',
        'data',
        's/webhook',
        'headers',
        '360_NOT_SE',
        'axios',
        '4343710OluhqQ',
        'value',
        'url',
        '636HyOqGY'
    ];
    a = function () {
        return v;
    };
    return a();
}
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x11b3 * 0x2 + 0x1871 + -0x3af3);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[r(0x100)] = !![], Object[q(0xf2) + q(0xf3)](exports, q(0xe5), k);
const axios_1 = __importDefault(require(q(0xfe))), AppError_1 = __importDefault(require(r(0xed) + q(0x10e) + 'r')), logger_1 = require(q(0xf5) + r(0x109)), SetWebHookUrl = async ({
        url: f,
        apiKey: g
    }) => {
        const t = r, u = q, h = {};
        h[t(0xef)] = t(0xf7), h[t(0x103)] = t(0xe7) + u(0x105);
        const i = h, j = process[t(0x107)][u(0x10b) + '0'] + (t(0xe4) + t(0xfb));
        try {
            const l = {};
            l[u(0x101)] = f;
            const m = {};
            return m[t(0xeb)] = i[t(0xef)], m[t(0x101)] = j, m[u(0xfa)] = l, m[t(0xfc)] = {}, m[t(0xfc)][u(0xea) + 'EY'] = g, m[t(0xfc)][t(0x10c) + 'pe'] = i[t(0x103)], await (-0x95a + 0x235a + -0x1a00, axios_1[u(0xf8)])(m), !![];
        } catch (n) {
            logger_1[t(0xe8)][t(0xf4)](n);
            throw new AppError_1[(u(0xf8))](u(0xfd) + u(0xf0) + '\x20' + n);
        }
    };
exports[q(0xf8)] = SetWebHookUrl;