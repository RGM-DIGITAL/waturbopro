'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(m(0xf8)) / (0x23 * 0xef + 0x86 * 0x3d + -0x409a) + parseInt(n(0x110)) / (-0x24a1 * -0x1 + -0x1629 + -0xe76) * (parseInt(m(0x118)) / (-0x1b92 + -0x4 * -0x2a9 + 0x10f1)) + -parseInt(n(0xff)) / (-0xe91 * 0x1 + 0x1 * 0x2d + 0xe68) * (-parseInt(m(0x115)) / (-0x13cd * 0x1 + 0xa26 + 0x1 * 0x9ac)) + parseInt(m(0x114)) / (-0x1 * 0x760 + 0x1 * -0x18fd + 0x1 * 0x2063) + parseInt(n(0x112)) / (-0x1 * -0xfa7 + -0xc0 * 0xa + 0x1 * -0x820) + parseInt(n(0x11b)) / (-0xcb8 + -0x12d2 + 0x1f92) + -parseInt(m(0x11e)) / (0x1fc7 * -0x1 + 0x4 * -0x2c2 + 0x2ad8);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x7b14f * 0x1 + -0x878f0 + 0x1534f7));
function a() {
    const t = [
        '3776874bMwSRS',
        '78655mCFBbb',
        'get',
        '/v1/config',
        '3GWVFRe',
        'method',
        '../../util',
        '4782376EuxsmA',
        'mber',
        'Content-Ty',
        '19483011xGcrzA',
        'rs/AppErro',
        '__esModule',
        'FVlTp',
        'T_PHONE_NU',
        '327471vIIQBM',
        'headers',
        's/phone_nu',
        'n/json',
        'axios',
        'env',
        'default',
        '92NCESOa',
        'url',
        's/logger',
        'value',
        'error',
        'fault',
        '../../erro',
        '360_NOT_GE',
        '__importDe',
        'D360-API-K',
        'TERED:\x20',
        'GvEub',
        'applicatio',
        'MBER_REGIS',
        'erty',
        'defineProp',
        'logger',
        '1294682HMFRyX',
        'API_URL_36',
        '4103708evIGZi',
        'data'
    ];
    a = function () {
        return t;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x208f + -0x5e2 + 0x2766);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[o(0x107) + o(0x104)] || function (c) {
    const q = p;
    return c && c[q(0xf5)] ? c : { 'default': c };
};
const k = {};
k[p(0x102)] = !![], Object[p(0x10e) + p(0x10d)](exports, p(0xf5), k);
const axios_1 = __importDefault(require(p(0xfc))), AppError_1 = __importDefault(require(o(0x105) + p(0x11f) + 'r')), logger_1 = require(p(0x11a) + p(0x101)), GetRegisteredPhone = async e => {
        const r = p, s = o, f = {};
        f[r(0xf6)] = s(0x116), f[s(0x10a)] = r(0x10b) + r(0xfb);
        const g = f, h = process[r(0xfd)][s(0x111) + '0'] + (r(0x117) + r(0xfa) + r(0x11c));
        try {
            const i = {};
            i[s(0x119)] = g[s(0xf6)], i[s(0x100)] = h, i[s(0xf9)] = {}, i[s(0xf9)][s(0x108) + 'EY'] = e, i[s(0xf9)][r(0x11d) + 'pe'] = g[s(0x10a)];
            const j = await (0x1f27 + -0x1 * -0x225 + 0x10a6 * -0x2, axios_1[s(0xfe)])(i);
            return j[r(0x113)];
        } catch (l) {
            logger_1[r(0x10f)][r(0x103)](l);
            throw new AppError_1[(s(0xfe))](s(0x106) + r(0xf7) + r(0x10c) + r(0x109) + l);
        }
    };
exports[p(0xfe)] = GetRegisteredPhone;