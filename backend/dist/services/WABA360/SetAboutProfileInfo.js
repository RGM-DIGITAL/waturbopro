'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0x1e6)) / (-0x77d * -0x4 + -0x65b + -0x12e * 0x14) + -parseInt(p(0x1e1)) / (-0x1 * -0x1119 + 0x394 + -0x14ab * 0x1) * (parseInt(o(0x1c7)) / (0xa77 * -0x2 + 0x2038 + -0xb47)) + parseInt(o(0x1c4)) / (-0xb22 + -0x248 * -0x11 + -0x1ba2) * (parseInt(o(0x1d4)) / (-0x1b * 0xdf + 0xcbe * 0x2 + -0x1f2)) + parseInt(p(0x1d3)) / (0x1725 + 0x1791 * -0x1 + 0x72) + parseInt(o(0x1e4)) / (0xc87 * -0x1 + 0x1 * 0x210b + -0x147d) + parseInt(o(0x1cd)) / (-0x1919 + -0xa7f * 0x3 + 0x1c4f * 0x2) + parseInt(p(0x1c5)) / (-0x1 * -0x162a + 0x1 * 0x22a7 + -0x38c8) * (-parseInt(o(0x1ea)) / (-0x1082 + 0x617 * 0x6 + 0x3 * -0x6aa));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x43457 * -0x1 + 0x54089 * -0x2 + 0x41ecf * 0x5));
function a() {
    const v = [
        'D360-API-K',
        'env',
        'error',
        '2532850cjAPYs',
        'SQKUv',
        'method',
        '/about',
        'url',
        '40644LEZCvt',
        '99fDGzEM',
        'axios',
        '6kCdWwT',
        'API_URL_36',
        'patch',
        '__esModule',
        'urwaM',
        'logger',
        '10407792dNFmZg',
        '/v1/settin',
        '../../util',
        'data',
        'defineProp',
        'Content-Ty',
        '2669250cajSTm',
        '45SiJfCY',
        'headers',
        'T_ABOUT:\x20',
        '__importDe',
        'rs/AppErro',
        'text',
        'gs/profile',
        's/logger',
        'erty',
        'n/json',
        'default',
        'applicatio',
        '../../erro',
        '727060aGTFsQ',
        'fault',
        'value',
        '8642844YuLRKt',
        '360_NOT_SE',
        '1378501APbQdm'
    ];
    a = function () {
        return v;
    };
    return a();
}
var __importDefault = this && this[q(0x1d7) + r(0x1e2)] || function (c) {
    const s = r;
    return c && c[s(0x1ca)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * -0x1655 + -0x100 * -0x1c + -0x3eb);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[q(0x1e3)] = !![], Object[r(0x1d1) + r(0x1dc)](exports, q(0x1ca), k);
const axios_1 = __importDefault(require(q(0x1c6))), AppError_1 = __importDefault(require(q(0x1e0) + q(0x1d8) + 'r')), logger_1 = require(r(0x1cf) + r(0x1db)), SetAboutProfileInfo = async ({
        text: f,
        apiKey: g
    }) => {
        const t = q, u = r, h = {};
        h[t(0x1cb)] = u(0x1c9), h[t(0x1c0)] = u(0x1df) + t(0x1dd);
        const i = h, j = process[u(0x1e8)][t(0x1c8) + '0'] + (t(0x1ce) + u(0x1da) + u(0x1c2));
        try {
            const l = {};
            l[u(0x1d9)] = f;
            const m = {};
            return m[t(0x1c1)] = i[u(0x1cb)], m[t(0x1c3)] = j, m[u(0x1d0)] = l, m[u(0x1d5)] = {}, m[u(0x1d5)][t(0x1e7) + 'EY'] = g, m[u(0x1d5)][u(0x1d2) + 'pe'] = i[u(0x1c0)], await (0x1826 + 0x466 * 0x1 + -0x1c8c, axios_1[t(0x1de)])(m), !![];
        } catch (n) {
            logger_1[u(0x1cc)][u(0x1e9)](n);
            throw new AppError_1[(u(0x1de))](u(0x1e5) + u(0x1d6) + n);
        }
    };
exports[r(0x1de)] = SetAboutProfileInfo;