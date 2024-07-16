'use strict';
const r = b, s = b;
function a() {
    const w = [
        'data',
        'headers',
        '23993865JsbERL',
        'applicatio',
        '1031594TrMxch',
        '/v1/messag',
        '9480880Ukepdh',
        'fault',
        '10805592SYGdpV',
        'Klnia',
        's/logger',
        'method',
        'default',
        'post',
        'D360-API-K',
        'NT_MESSAGE',
        '../../util',
        'env',
        '5239430rpQLyl',
        '842439NPHzOz',
        '360_NOT_SE',
        '__importDe',
        '3IIaulH',
        'Mmglt',
        'n/json',
        '20JZknTc',
        'error',
        'API_URL_36',
        '2891964QyeqyW',
        'defineProp',
        'axios',
        'erty',
        'value',
        'url',
        '__esModule',
        'logger',
        'rs/AppErro',
        'Content-Ty',
        '../../erro'
    ];
    a = function () {
        return w;
    };
    return a();
}
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0xbe)) / (-0x230c + 0x1 * 0x1fd1 + 0x33c) * (-parseInt(p(0xd3)) / (0x172c * -0x1 + -0xdf9 + 0x2527)) + -parseInt(p(0xbb)) / (-0x266a + -0x4c8 + -0x9 * -0x4cd) * (-parseInt(p(0xc1)) / (0x10b * -0xe + 0x11a0 + -0x302)) + -parseInt(q(0xd5)) / (0x33b * 0x1 + 0x1375 + 0x16ab * -0x1) + parseInt(q(0xc4)) / (-0x4 * -0x4c0 + -0x1d2 * 0x2 + -0x1 * 0xf56) + parseInt(p(0xba)) / (-0x803 + -0x210d + 0x2917 * 0x1) + parseInt(q(0xb0)) / (-0xf97 + 0xbbb + 0x4 * 0xf9) + -parseInt(q(0xd1)) / (-0x18e3 * 0x1 + 0x19b9 + -0xcd);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1b7990 + 0x186d58 + -0x2517fa));
var __importDefault = this && this[r(0xbd) + r(0xd6)] || function (c) {
    const t = s;
    return c && c[t(0xca)] ? c : { 'default': c };
};
const k = {};
k[r(0xc8)] = !![], Object[r(0xc5) + r(0xc7)](exports, r(0xca), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x381 + 0x715 + -0x2e4);
        let h = e[f];
        return h;
    }, b(c, d);
}
const axios_1 = __importDefault(require(s(0xc6))), AppError_1 = __importDefault(require(r(0xce) + r(0xcc) + 'r')), logger_1 = require(r(0xb8) + r(0xb2)), SentMessage = async ({
        message: f,
        apiKey: g
    }) => {
        const u = r, v = s, h = {};
        h[u(0xb1)] = v(0xb5), h[u(0xbf)] = u(0xd2) + v(0xc0);
        const i = h, j = process[v(0xb9)][u(0xc3) + '0'] + (u(0xd4) + 'es');
        try {
            const l = { ...f }, m = {};
            m[u(0xb3)] = i[u(0xb1)], m[v(0xc9)] = j, m[v(0xcf)] = l, m[v(0xd0)] = {}, m[v(0xd0)][v(0xb6) + 'EY'] = g, m[v(0xd0)][v(0xcd) + 'pe'] = i[u(0xbf)];
            const n = await (-0x13aa + 0x631 + 0x1 * 0xd79, axios_1[u(0xb4)])(m);
            return n[v(0xcf)];
        } catch (o) {
            logger_1[u(0xcb)][u(0xc2)](o);
            throw new AppError_1[(v(0xb4))](u(0xbc) + v(0xb7) + ':\x20' + o);
        }
    };
exports[s(0xb4)] = SentMessage;