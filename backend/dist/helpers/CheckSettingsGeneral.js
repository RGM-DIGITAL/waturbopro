'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x1fc)) / (-0x14f + 0x2 * 0xff8 + -0x1ea0) + parseInt(q(0x1f1)) / (0x19ab * 0x1 + 0x1d6d + -0x3716) * (-parseInt(q(0x1ef)) / (0x1083 * -0x2 + 0x8e6 + -0x1823 * -0x1)) + parseInt(q(0x1ed)) / (0xe96 + -0x1 * 0x13f9 + 0x567) * (-parseInt(p(0x1e5)) / (-0x3 * -0xb8b + 0x3b * 0x6b + -0x1 * 0x3b45)) + -parseInt(p(0x1e7)) / (0x8f3 * 0x2 + 0x72f * -0x2 + -0x2 * 0x1c1) + parseInt(p(0x1fa)) / (0x11eb * -0x2 + -0x1d28 + -0x5 * -0xd01) + -parseInt(q(0x1eb)) / (0x1f11 + 0x176e + -0x3677) + -parseInt(p(0x1e3)) / (0x13 * -0x2f + 0x1e12 + -0x1a8c) * (-parseInt(p(0x1f6)) / (-0x9b9 + 0x248 + 0x77b));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x5aeb7 + 0x36 * 0xc22 + 0x116a4 * 0xa));
var __importDefault = this && this[r(0x1e8) + s(0x1ec)] || function (c) {
    const t = s;
    return c && c[t(0x1e2)] ? c : { 'default': c };
};
function a() {
    const w = [
        '../errors/',
        '__esModule',
        '9YlEgus',
        'erty',
        '5lTpgFe',
        'SettingsGe',
        '4633968USJHLm',
        '__importDe',
        'neral',
        '../models/',
        '1526712wwuNOz',
        'fault',
        '507644kjoIkM',
        'pmrPT',
        '73992mJBJjl',
        'key',
        '14UvPKrc',
        'where',
        'AppError',
        'ERR_NO_SET',
        'default',
        '14961010SDTOoS',
        'OqhdW',
        'TING_FOUND',
        'defineProp',
        '6729730XbnfoT',
        'value',
        '686128mGLPMG',
        'findOne'
    ];
    a = function () {
        return w;
    };
    return a();
}
const k = {};
k[s(0x1fb)] = !![], Object[r(0x1f9) + r(0x1e4)](exports, s(0x1e2), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * 0x155e + 0x1b23 * -0x1 + -0x1 * -0x3263);
        let h = e[f];
        return h;
    }, b(c, d);
}
const SettingsGeneral_1 = __importDefault(require(s(0x1ea) + s(0x1e6) + r(0x1e9))), AppError_1 = __importDefault(require(r(0x1fe) + s(0x1f3))), CheckSettingsGeneral = async (f, g = null) => {
        const u = s, v = r, h = {};
        h[u(0x1ee)] = function (n, o) {
            return n && o;
        }, h[u(0x1f7)] = u(0x1f4) + u(0x1f8);
        const i = h, j = {};
        j[u(0x1f0)] = f;
        const l = {};
        l[u(0x1f2)] = j;
        const m = await SettingsGeneral_1[v(0x1f5)][u(0x1fd)](l);
        if (i[u(0x1ee)](!m, !g))
            throw new AppError_1[(v(0x1f5))](i[u(0x1f7)], 0x2 * 0x337 + 0x243d + -0x2917);
        return m?.[v(0x1fb)] || g;
    };
exports[r(0x1f5)] = CheckSettingsGeneral;