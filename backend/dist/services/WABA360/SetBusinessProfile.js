'use strict';
const o = b, p = b;
function a() {
    const t = [
        'applicatio',
        'default',
        '__importDe',
        'T_BUSINESS',
        'env',
        'axios',
        '369576gzMdFB',
        'error',
        '8VAwkyG',
        '492192lSvTLl',
        '478958CdhwwH',
        'n/json',
        'value',
        'BiHOV',
        's/logger',
        'Content-Ty',
        '72815oLouVu',
        'defineProp',
        'fault',
        '54GNbnIe',
        'headers',
        'post',
        '../../util',
        'tavFF',
        'rs/AppErro',
        '360_NOT_SE',
        '24CYneHN',
        '6156788DFceMg',
        '80vgpSRy',
        'data',
        '../../erro',
        '341883gTEIjl',
        '__esModule',
        'logger',
        's/profile',
        'url',
        'D360-API-K',
        'gs/busines',
        'erty',
        '/v1/settin',
        'method',
        '2364859GolWsH',
        'API_URL_36'
    ];
    a = function () {
        return t;
    };
    return a();
}
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(m(0xb8)) / (-0x1 * -0xcb3 + -0xcbb + 0x9) + parseInt(m(0xb7)) / (-0x4 * -0x73f + 0x102b + -0x2d25) + parseInt(m(0xb4)) / (0xed * 0x10 + -0xff * 0x3 + -0xbd0) * (parseInt(n(0x9d)) / (0x14ae + 0x1442 + -0x28ec)) + -parseInt(n(0xbe)) / (0x1 * 0x249 + -0x23 * 0x35 + 0x4fb) * (parseInt(m(0x96)) / (-0x5f2 * -0x3 + 0x1025 + -0x21f5)) + parseInt(m(0xac)) / (0x3d7 + 0x1 * -0x1c21 + -0x19 * -0xf9) * (parseInt(m(0xb6)) / (-0x15b7 + 0x1c2b + -0x66c)) + parseInt(m(0xa2)) / (-0x25 + -0x757 + -0xaf * -0xb) * (parseInt(n(0x9f)) / (0x204f + -0x479 + -0x6 * 0x4a2)) + -parseInt(m(0x9e)) / (-0x1ca1 + -0x2 * 0x755 + 0x2b56);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x70206 + -0x2 * -0x4dda9 + -0x11035 * -0x4));
var __importDefault = this && this[o(0xb0) + p(0x95)] || function (c) {
    const q = o;
    return c && c[q(0xa3)] ? c : { 'default': c };
};
const k = {};
k[o(0xba)] = !![], Object[o(0x94) + p(0xa9)](exports, o(0xa3), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x96a + 0x8ec + 0x112);
        let h = e[f];
        return h;
    }, b(c, d);
}
const axios_1 = __importDefault(require(p(0xb3))), AppError_1 = __importDefault(require(p(0xa1) + o(0x9b) + 'r')), logger_1 = require(p(0x99) + p(0xbc)), SetBusinessProfile = async ({
        data: e,
        apiKey: f
    }) => {
        const r = p, s = o, g = {};
        g[r(0xbb)] = s(0x98), g[r(0x9a)] = s(0xae) + r(0xb9);
        const h = g, i = process[r(0xb2)][r(0xad) + '0'] + (r(0xaa) + r(0xa8) + r(0xa5));
        try {
            const j = {};
            return j[r(0xab)] = h[r(0xbb)], j[s(0xa6)] = i, j[s(0xa0)] = e, j[s(0x97)] = {}, j[s(0x97)][r(0xa7) + 'EY'] = f, j[s(0x97)][r(0xbd) + 'pe'] = h[r(0x9a)], await (-0x112 * 0x2 + -0x1 * 0xa0 + 0x2c4, axios_1[s(0xaf)])(j), !![];
        } catch (l) {
            logger_1[s(0xa4)][s(0xb5)](l);
            throw new AppError_1[(r(0xaf))](s(0x9c) + r(0xb1) + ':\x20' + l);
        }
    };
exports[p(0xaf)] = SetBusinessProfile;