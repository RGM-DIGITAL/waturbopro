'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x69)) / (0x131d + -0x1cf7 + -0x349 * -0x3) * (-parseInt(q(0x91)) / (0x152b * 0x1 + -0x22e6 + 0xdbd)) + parseInt(p(0x68)) / (0x19e6 + -0xf2 * 0x11 + 0x1 * -0x9d1) * (parseInt(p(0x75)) / (-0x27e * -0x5 + -0x822 + -0x4 * 0x114)) + parseInt(q(0x82)) / (0xc17 + 0xe2 * -0xc + -0x17a) * (parseInt(p(0x90)) / (0xa1b + 0x763 * 0x1 + 0x1178 * -0x1)) + parseInt(q(0x6c)) / (-0x303 * -0x1 + 0x2047 + -0xbc1 * 0x3) * (-parseInt(p(0x7c)) / (-0x15 * -0x133 + -0x8f3 + 0x22 * -0x7a)) + parseInt(q(0x7b)) / (-0x1ae + 0x1fc2 + -0x1e0b) * (parseInt(q(0x7e)) / (0x1df * -0xe + 0x1b64 + -0x128)) + -parseInt(q(0x76)) / (-0x1 * 0x445 + -0x16bf * -0x1 + -0x126f * 0x1) + parseInt(p(0x92)) / (0xf6d + -0x237f * -0x1 + -0x32e0) * (parseInt(q(0x89)) / (-0x2229 + 0x393 * 0xa + -0x188));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xbfa0e + -0x5 * 0x1ae99 + 0x47d * 0x18b));
function a() {
    const w = [
        'NT_MESSAGE',
        'defineProp',
        '../../util',
        'n/json',
        's/logger',
        'erty',
        '1206064meTJGp',
        '274648mPiYkB',
        'axios',
        'applicatio',
        '__importDe',
        'headers',
        '45drkfTM',
        '5912pJtznO',
        'rs/AppErro',
        '1072820WHqIBy',
        'url',
        '__esModule',
        'logger',
        '1004790BKzoaa',
        'qnPaP',
        'error',
        'post',
        'Content-Ty',
        '/v1/messag',
        'method',
        '78559tNGMzd',
        'env',
        'MXiry',
        'data',
        '360_NOT_SE',
        'API_URL_36',
        '../../erro',
        '6HmmUbT',
        '214946ligKmJ',
        '1200iDEqKZ',
        '3kfulgy',
        '3nLdMEa',
        'fault',
        'default',
        '5761IoQdCB',
        'value',
        'D360-API-K'
    ];
    a = function () {
        return w;
    };
    return a();
}
var __importDefault = this && this[r(0x79) + r(0x6a)] || function (c) {
    const t = r;
    return c && c[t(0x80)] ? c : { 'default': c };
};
const k = {};
k[r(0x6d)] = !![], Object[s(0x70) + s(0x74)](exports, s(0x80), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1d6f + -0x109b + 0x19a * 0x1d);
        let h = e[f];
        return h;
    }, b(c, d);
}
const axios_1 = __importDefault(require(s(0x77))), AppError_1 = __importDefault(require(s(0x8f) + r(0x7d) + 'r')), logger_1 = require(s(0x71) + s(0x73)), SentMessage = async ({
        message: f,
        apiKey: g
    }) => {
        const u = s, v = r, h = {};
        h[u(0x8b)] = v(0x85), h[u(0x83)] = u(0x78) + u(0x72);
        const i = h, j = process[v(0x8a)][u(0x8e) + '0'] + (u(0x87) + 'es');
        try {
            const l = { ...f }, m = {};
            m[v(0x88)] = i[u(0x8b)], m[u(0x7f)] = j, m[v(0x8c)] = l, m[u(0x7a)] = {}, m[u(0x7a)][v(0x6e) + 'EY'] = g, m[u(0x7a)][v(0x86) + 'pe'] = i[v(0x83)];
            const n = await (0x185e * -0x1 + -0x4 * -0x9c + 0x15ee, axios_1[v(0x6b)])(m);
            return n[v(0x8c)];
        } catch (o) {
            logger_1[u(0x81)][v(0x84)](o);
            throw new AppError_1[(v(0x6b))](v(0x8d) + v(0x6f) + ':\x20' + o);
        }
    };
exports[r(0x6b)] = SentMessage;