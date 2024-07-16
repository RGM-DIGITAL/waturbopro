'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x11d)) / (-0x17dc + -0x10dc + 0x28b9) * (-parseInt(p(0x109)) / (-0xfa0 + -0x2 * 0x1d3 + 0x1348)) + -parseInt(p(0x10c)) / (0x455 + 0x6d * 0x1 + -0x5 * 0xf3) + parseInt(p(0x106)) / (0x1128 + -0x1677 + 0x553) + -parseInt(p(0x102)) / (-0x363 + 0x749 * -0x5 + 0x9 * 0x46d) * (-parseInt(q(0x114)) / (-0x19b6 + 0x1259 + 0x763)) + parseInt(q(0x11a)) / (-0x6d0 + 0x2 * 0xf17 + -0x19 * 0xef) + -parseInt(p(0x110)) / (-0x1bc7 + 0x5 * 0x6fa + -0x1 * 0x713) * (-parseInt(q(0x117)) / (0x1 * 0x1c8b + 0x242e * -0x1 + 0x7ac)) + parseInt(q(0x108)) / (0x63 * -0x47 + 0x1f35 + 0x5 * -0xbe) * (-parseInt(q(0x112)) / (0x1e3b * 0x1 + -0x12a * 0x20 + -0x1 * -0x710));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x2f92c + -0x68 * 0x7b + -0xc314));
var __importDefault = this && this[r(0x101) + s(0x11b)] || function (c) {
    const t = s;
    return c && c[t(0x107)] ? c : { 'default': c };
};
function a() {
    const w = [
        '__importDe',
        '295aPiZap',
        'default',
        'Setting',
        'value',
        '888476jgjoSo',
        '__esModule',
        '10spRHtK',
        '12QFYbxz',
        'findOne',
        'AppError',
        '474159DCtJWh',
        'where',
        'TING_FOUND',
        'tenantId',
        '16520akXbaC',
        'key',
        '6051881akUxZk',
        '../errors/',
        '25566LLxyBB',
        'defineProp',
        'erty',
        '1143cBgZhG',
        'ERR_NO_SET',
        '../models/',
        '1367555PbOuZi',
        'fault',
        'iazWV',
        '15131OPBNIV',
        'QgrUH'
    ];
    a = function () {
        return w;
    };
    return a();
}
const k = {};
k[r(0x105)] = !![], Object[r(0x115) + r(0x116)](exports, s(0x107), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x644 * 0x1 + 0xa9a + -0xfde);
        let h = e[f];
        return h;
    }, b(c, d);
}
const Setting_1 = __importDefault(require(r(0x119) + r(0x104))), AppError_1 = __importDefault(require(s(0x113) + s(0x10b))), CheckSettingstenant1 = async (f, g = null) => {
        const u = r, v = r, h = {};
        h[u(0x100)] = function (n, o) {
            return n && o;
        }, h[u(0x11c)] = u(0x118) + u(0x10e);
        const i = h, j = {};
        j[u(0x10f)] = 0x1, j[u(0x111)] = f;
        const l = {};
        l[v(0x10d)] = j;
        const m = await Setting_1[u(0x103)][v(0x10a)](l);
        if (i[v(0x100)](!m, !g))
            throw new AppError_1[(u(0x103))](i[u(0x11c)], 0x754 * -0x2 + 0x13ac + -0x370 * 0x1);
        return m?.[v(0x105)] || g;
    };
exports[s(0x103)] = CheckSettingstenant1;