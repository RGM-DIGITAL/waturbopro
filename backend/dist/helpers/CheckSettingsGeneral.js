'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0xb2)) / (0x1b8f + -0x2108 + 0x2bd * 0x2) + parseInt(q(0xc9)) / (-0x535 + -0x5 * -0x5ae + -0x172f) * (parseInt(q(0xb5)) / (-0x1 * -0x1353 + 0x24b7 + 0x7 * -0x801)) + -parseInt(p(0xb8)) / (0xae8 * -0x1 + 0x1849 + -0xd5d) * (-parseInt(p(0xcd)) / (-0xc4f * -0x3 + 0x9e4 + -0x2ecc)) + -parseInt(q(0xbb)) / (-0x1 * 0x24a7 + 0x184c + 0xc61 * 0x1) * (parseInt(p(0xbd)) / (-0x22fe + -0x1501 + -0x2 * -0x1c03)) + parseInt(q(0xb0)) / (0x6d3 * 0x5 + -0x1f6 * -0x4 + -0x13 * 0x235) + parseInt(p(0xc8)) / (-0x1325 + -0x1328 * 0x1 + -0x57a * -0x7) * (parseInt(q(0xb3)) / (0x9 * 0x7a + -0x30 * -0xa1 + -0x2270)) + parseInt(q(0xc4)) / (-0x5d4 + 0x4 * -0x2e7 + 0x117b) * (-parseInt(p(0xc6)) / (0x5a + -0x27 * 0xc1 + 0x23d * 0xd));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x20ca0 + 0x9 * -0x3bfa + 0xe662 * 0x2));
var __importDefault = this && this[r(0xb4) + s(0xbc)] || function (c) {
    const t = s;
    return c && c[t(0xc0)] ? c : { 'default': c };
};
const k = {};
function a() {
    const w = [
        'defineProp',
        'findOne',
        '__esModule',
        '../errors/',
        'default',
        'TING_FOUND',
        '4021996fqoDFO',
        'value',
        '12IacFAS',
        'uLCTi',
        '9ROODVZ',
        '3506VkHljY',
        'neral',
        '../models/',
        'uJMes',
        '85NDKFBy',
        'erty',
        '1349560QDjnUY',
        'SettingsGe',
        '143012pajJJJ',
        '1284450FiNKsb',
        '__importDe',
        '123WixoLk',
        'key',
        'ERR_NO_SET',
        '9516kKFhQL',
        'where',
        'AppError',
        '84ERoIGL',
        'fault',
        '36379shSOaE'
    ];
    a = function () {
        return w;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x6 * -0x5 + -0x208e + -0x1 * -0x215b);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[s(0xc5)] = !![], Object[s(0xbe) + r(0xaf)](exports, s(0xc0), k);
const SettingsGeneral_1 = __importDefault(require(s(0xcb) + r(0xb1) + r(0xca))), AppError_1 = __importDefault(require(s(0xc1) + r(0xba))), CheckSettingsGeneral = async (f, g = null) => {
        const u = s, v = r, h = {};
        h[u(0xc7)] = function (n, o) {
            return n && o;
        }, h[v(0xcc)] = v(0xb7) + v(0xc3);
        const i = h, j = {};
        j[v(0xb6)] = f;
        const l = {};
        l[v(0xb9)] = j;
        const m = await SettingsGeneral_1[v(0xc2)][v(0xbf)](l);
        if (i[u(0xc7)](!m, !g))
            throw new AppError_1[(v(0xc2))](i[u(0xcc)], -0x373 * 0x2 + -0x2 * -0xfca + -0x171a);
        return m?.[v(0xc5)] || g;
    };
exports[s(0xc2)] = CheckSettingsGeneral;