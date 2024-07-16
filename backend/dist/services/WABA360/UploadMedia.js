'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x1e7)) / (0x43 * 0x59 + 0x1 * 0xba9 + -0x22f3) + parseInt(p(0x1d4)) / (0xd42 * 0x2 + -0x1fde + 0x55c) * (parseInt(q(0x1c8)) / (-0x24b7 * -0x1 + -0x220f + -0x2a5)) + parseInt(q(0x1cf)) / (-0x17f * -0x3 + 0x199 + -0x612) * (-parseInt(p(0x1d1)) / (-0x1bd1 + -0x35b + 0x63d * 0x5)) + -parseInt(q(0x1cb)) / (0x3e * 0x11 + -0xaef + -0x67 * -0x11) + -parseInt(q(0x1d9)) / (0x1 * 0x142f + 0xdf1 + -0x2219) * (-parseInt(q(0x1da)) / (0x11fa + -0xa36 * 0x1 + -0x7bc)) + parseInt(q(0x1dd)) / (-0x1 * -0x208a + -0xeef * -0x2 + 0x8e9 * -0x7) + parseInt(q(0x1e9)) / (-0x2ef + 0x757 * -0x2 + 0x11a7) * (parseInt(p(0x1ec)) / (-0x1 * -0x24e9 + -0x171 * -0xc + -0x362a));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xe47 * -0x27 + -0x30 * 0x189b + 0x10e5ba));
var __importDefault = this && this[r(0x1eb) + s(0x1d3)] || function (c) {
    const t = s;
    return c && c[t(0x1e4)] ? c : { 'default': c };
};
function a() {
    const w = [
        '../../erro',
        'url',
        'method',
        'value',
        '../../util',
        'env',
        '__esModule',
        'default',
        'axios',
        '213694ydmJfr',
        'RufVR',
        '74650ZPUsbc',
        'rs/AppErro',
        '__importDe',
        '781HvQFiw',
        's/logger',
        'API_URL_36',
        'headers',
        'post',
        'form-data',
        '19806jBngul',
        'multipart/',
        'UnDmn',
        '9965214EoWsHE',
        'erty',
        'error',
        'data',
        '1884340vRkyuP',
        'Content-Ty',
        '15KWrvcQ',
        'D360-API-K',
        'fault',
        '242CbJDdU',
        'file',
        'logger',
        '/v1/media',
        'LOAD_MEDIA',
        '12842893JHsGKC',
        '8QkJrcZ',
        'defineProp',
        '360_NOT_UP',
        '9646569bAELdK'
    ];
    a = function () {
        return w;
    };
    return a();
}
const k = {};
k[r(0x1e1)] = !![], Object[s(0x1db) + s(0x1cc)](exports, s(0x1e4), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * -0x23a7 + 0xcb9 + 0x18b2);
        let h = e[f];
        return h;
    }, b(c, d);
}
const axios_1 = __importDefault(require(s(0x1e6))), AppError_1 = __importDefault(require(r(0x1de) + s(0x1ea) + 'r')), logger_1 = require(r(0x1e2) + r(0x1ed)), UploadMedia = async ({
        file: f,
        apiKey: g
    }) => {
        const u = r, v = r, h = {};
        h[u(0x1ca)] = v(0x1c6), h[u(0x1e8)] = v(0x1c9) + u(0x1c7);
        const i = h, j = process[v(0x1e3)][u(0x1c4) + '0'] + u(0x1d7);
        try {
            const l = {};
            l[v(0x1d5)] = f;
            const m = {};
            m[v(0x1e0)] = i[v(0x1ca)], m[v(0x1df)] = j, m[u(0x1ce)] = l, m[v(0x1c5)] = {}, m[v(0x1c5)][u(0x1d2) + 'EY'] = g, m[v(0x1c5)][v(0x1d0) + 'pe'] = i[u(0x1e8)];
            const n = await (0x2 * -0x791 + -0x24cb * -0x1 + -0x1 * 0x15a9, axios_1[u(0x1e5)])(m);
            return n[u(0x1ce)];
        } catch (o) {
            logger_1[v(0x1d6)][u(0x1cd)](o);
            throw new AppError_1[(u(0x1e5))](u(0x1dc) + u(0x1d8) + ':\x20' + o);
        }
    };
exports[s(0x1e5)] = UploadMedia;