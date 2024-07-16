'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1ca9 + 0x222f + -0x3d3d);
        let h = e[f];
        return h;
    }, b(c, d);
}
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(o(0x1a3)) / (-0x10f3 + -0x1745 + 0x1 * 0x2839) + parseInt(p(0x1b2)) / (-0x4 * 0x53 + 0x43 * 0x22 + -0x798) * (-parseInt(p(0x1a9)) / (-0x7c7 * 0x1 + -0xe4 * 0x3 + 0xa76)) + parseInt(p(0x1c4)) / (-0x257f + -0x7f6 * -0x4 + -0x5ab * -0x1) + parseInt(o(0x1bf)) / (-0x1404 + -0x1b68 + 0x2f71) + parseInt(o(0x1b5)) / (0x2cf * 0x2 + -0x5fe + 0x66) * (parseInt(p(0x1a2)) / (0x1aaa + -0x1787 + -0x31c)) + parseInt(p(0x1b0)) / (0xb * -0x1a8 + 0x12d * 0x15 + -0x61 * 0x11) * (-parseInt(p(0x1b3)) / (0x60 * 0x3d + 0x59b * -0x3 + -0x606 * 0x1)) + -parseInt(p(0x1aa)) / (-0xb * 0x2f + -0x5dd * 0x4 + 0x1983 * 0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x15fdc + 0x2eacb + 0x37697));
var __importDefault = this && this[q(0x1b6) + q(0x1bd)] || function (c) {
    const s = r;
    return c && c[s(0x1c0)] ? c : { 'default': c };
};
const k = {};
function a() {
    const v = [
        '2212600MFHBUQ',
        '__esModule',
        '/about',
        'default',
        '/v1/settin',
        '2565696uzsViL',
        'gs/profile',
        'logger',
        'headers',
        'T_ABOUT:\x20',
        'url',
        'env',
        'Content-Ty',
        'erty',
        '581ZOVtzp',
        '255319sqYUMs',
        'D360-API-K',
        'axios',
        'rs/AppErro',
        'API_URL_36',
        'patch',
        '12HTQTmY',
        '2087730JyopHV',
        'n/json',
        'value',
        'wonME',
        'error',
        'defineProp',
        '16UrrvFl',
        '../../erro',
        '149882WUtzcK',
        '2883357QjKfNL',
        'applicatio',
        '46896dfpmyo',
        '__importDe',
        '360_NOT_SE',
        'method',
        'text',
        'ZvldH',
        'data',
        's/logger',
        'fault',
        '../../util'
    ];
    a = function () {
        return v;
    };
    return a();
}
k[q(0x1ac)] = !![], Object[q(0x1af) + r(0x1a1)](exports, q(0x1c0), k);
const axios_1 = __importDefault(require(q(0x1a5))), AppError_1 = __importDefault(require(q(0x1b1) + r(0x1a6) + 'r')), logger_1 = require(q(0x1be) + r(0x1bc)), SetAboutProfileInfo = async ({
        text: f,
        apiKey: g
    }) => {
        const t = q, u = q, h = {};
        h[t(0x1ba)] = t(0x1a8), h[u(0x1ad)] = t(0x1b4) + u(0x1ab);
        const i = h, j = process[t(0x19f)][t(0x1a7) + '0'] + (t(0x1c3) + u(0x1c5) + t(0x1c1));
        try {
            const l = {};
            l[t(0x1b9)] = f;
            const m = {};
            return m[t(0x1b8)] = i[u(0x1ba)], m[u(0x19e)] = j, m[t(0x1bb)] = l, m[t(0x19c)] = {}, m[t(0x19c)][t(0x1a4) + 'EY'] = g, m[t(0x19c)][t(0x1a0) + 'pe'] = i[t(0x1ad)], await (-0x1 * 0x1ebb + -0x1a8 + 0x2063, axios_1[t(0x1c2)])(m), !![];
        } catch (n) {
            logger_1[u(0x19b)][u(0x1ae)](n);
            throw new AppError_1[(u(0x1c2))](u(0x1b7) + t(0x19d) + n);
        }
    };
exports[q(0x1c2)] = SetAboutProfileInfo;