'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * 0x12cc + 0x22c2 + -0x3455);
        let h = e[f];
        return h;
    }, b(c, d);
}
const r = b, s = b;
function a() {
    const w = [
        '229806kQfJRk',
        'value',
        'erty',
        'logger',
        '123FrHXkt',
        '17966NLQOhI',
        'headers',
        'file',
        'multipart/',
        'fault',
        '472388NJByfs',
        'LOAD_MEDIA',
        '1451754Lghdgq',
        'error',
        '360_NOT_UP',
        's/logger',
        'D360-API-K',
        '__esModule',
        'env',
        '7vWRAUa',
        'default',
        'rs/AppErro',
        'axios',
        '2197255XQhixS',
        'gyGDp',
        'API_URL_36',
        'method',
        'data',
        'Content-Ty',
        '__importDe',
        '../../erro',
        'defineProp',
        'form-data',
        '1145560wIRIKr',
        'post',
        'url',
        'XjEjt',
        '629600nNrQYy',
        '../../util',
        '/v1/media'
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
            const f = -parseInt(p(0x157)) / (0x985 + -0x212d + 0x17a9) + -parseInt(q(0x152)) / (-0x162b + 0x1 * 0x447 + -0x4f * -0x3a) * (-parseInt(q(0x151)) / (-0x6f0 + 0x1 * 0x861 + -0xb7 * 0x2)) + parseInt(p(0x14a)) / (-0x1 * -0x12f4 + -0x21 * 0xdd + 0x98d) + parseInt(q(0x13c)) / (0xe36 + 0x82 * -0x5 + -0x9d * 0x13) + -parseInt(p(0x14d)) / (-0x85 + -0x53a + 0x5c5) + parseInt(p(0x160)) / (0x1ff + -0x61 * -0x6 + -0x43e) * (parseInt(q(0x146)) / (-0x419 + -0x432 * 0x8 + 0x25b1)) + -parseInt(q(0x159)) / (0x41f + -0x1ec5 + -0xfd * -0x1b);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x3 * 0x1571e + 0xa32a0 + 0x7b3c));
var __importDefault = this && this[r(0x142) + r(0x156)] || function (c) {
    const t = s;
    return c && c[t(0x15e)] ? c : { 'default': c };
};
const k = {};
k[r(0x14e)] = !![], Object[r(0x144) + r(0x14f)](exports, s(0x15e), k);
const axios_1 = __importDefault(require(r(0x13b))), AppError_1 = __importDefault(require(r(0x143) + r(0x13a) + 'r')), logger_1 = require(s(0x14b) + s(0x15c)), UploadMedia = async ({
        file: f,
        apiKey: g
    }) => {
        const u = s, v = s, h = {};
        h[u(0x13d)] = v(0x147), h[u(0x149)] = u(0x155) + u(0x145);
        const i = h, j = process[u(0x15f)][v(0x13e) + '0'] + u(0x14c);
        try {
            const l = {};
            l[v(0x154)] = f;
            const m = {};
            m[u(0x13f)] = i[u(0x13d)], m[u(0x148)] = j, m[u(0x140)] = l, m[v(0x153)] = {}, m[v(0x153)][u(0x15d) + 'EY'] = g, m[v(0x153)][v(0x141) + 'pe'] = i[v(0x149)];
            const n = await (0x96a + -0x1247 + 0x8dd, axios_1[v(0x139)])(m);
            return n[v(0x140)];
        } catch (o) {
            logger_1[v(0x150)][u(0x15a)](o);
            throw new AppError_1[(u(0x139))](v(0x15b) + v(0x158) + ':\x20' + o);
        }
    };
exports[s(0x139)] = UploadMedia;