'use strict';
const q = b, r = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x215a + -0xb65 * -0x3 + -0x5 * -0x1c);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(o(0x17a)) / (0x1 * 0x1633 + 0x6b1 + -0x1ce3) + parseInt(p(0x173)) / (-0x1 * -0xccd + -0xfb * 0x23 + -0xac3 * -0x2) * (-parseInt(p(0x180)) / (-0xa2a * 0x2 + 0x1 * -0x105a + 0x24b1)) + parseInt(p(0x168)) / (-0x112f + 0x2565 + -0x1432) + parseInt(o(0x171)) / (-0x1300 + 0xf * -0x10a + 0x229b) + parseInt(p(0x17f)) / (0x1 * -0x57b + -0xa * 0x260 + 0x1d41) + parseInt(o(0x16a)) / (0x855 + 0x8 * -0x2d4 + -0x2f * -0x4e) * (parseInt(o(0x182)) / (0x657 + 0x1bdb + 0x1 * -0x222a)) + parseInt(o(0x188)) / (0x307 * -0x1 + -0x57d + 0xc7 * 0xb);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x562 * 0x12c + -0x60740 * 0x2 + -0x7 * -0x1d843));
function a() {
    const v = [
        's/logger',
        'value',
        'multipart/',
        'method',
        'UreLq',
        '253213cWEugi',
        'form-data',
        'Content-Ty',
        'fault',
        'gs/profile',
        '2522706kIxbJW',
        '3yePjVc',
        '/photo',
        '87760mowkyC',
        'axios',
        '__importDe',
        'error',
        '360_NOT_SE',
        'logger',
        '4262589eXJsxi',
        'rs/AppErro',
        'file',
        'T_PHOTO:\x20',
        'D360-API-K',
        'data',
        'erty',
        '/v1/settin',
        'API_URL_36',
        'url',
        '85992QBJdcD',
        'DhhkB',
        '7GEFlJn',
        '../../erro',
        'default',
        'post',
        '__esModule',
        'env',
        '../../util',
        '531380favutR',
        'defineProp',
        '620108VYnBdy',
        'headers'
    ];
    a = function () {
        return v;
    };
    return a();
}
var __importDefault = this && this[q(0x184) + r(0x17d)] || function (c) {
    const s = q;
    return c && c[s(0x16e)] ? c : { 'default': c };
};
const k = {};
k[q(0x176)] = !![], Object[q(0x172) + q(0x164)](exports, q(0x16e), k);
const axios_1 = __importDefault(require(r(0x183))), AppError_1 = __importDefault(require(r(0x16b) + r(0x189) + 'r')), logger_1 = require(q(0x170) + q(0x175)), SetPhotoProfileInfo = async ({
        file: f,
        apiKey: g
    }) => {
        const t = q, u = r, h = {};
        h[t(0x169)] = t(0x16d), h[t(0x179)] = u(0x177) + t(0x17b);
        const i = h, j = process[u(0x16f)][u(0x166) + '0'] + (t(0x165) + t(0x17e) + t(0x181));
        try {
            const l = {};
            l[t(0x18a)] = f;
            const m = {};
            return m[t(0x178)] = i[u(0x169)], m[u(0x167)] = j, m[t(0x163)] = l, m[u(0x174)] = {}, m[u(0x174)][t(0x162) + 'EY'] = g, m[u(0x174)][u(0x17c) + 'pe'] = i[t(0x179)], await (0x10b3 + 0x6b * 0x3d + -0x2a32, axios_1[t(0x16c)])(m), !![];
        } catch (n) {
            logger_1[u(0x187)][u(0x185)](n);
            throw new AppError_1[(u(0x16c))](t(0x186) + u(0x161) + n);
        }
    };
exports[q(0x16c)] = SetPhotoProfileInfo;