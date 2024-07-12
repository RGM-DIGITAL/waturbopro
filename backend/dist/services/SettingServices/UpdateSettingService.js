'use strict';
const s = b, t = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(q(0x121)) / (0x1 * 0x1727 + -0x1 * 0x13d + 0x15e9 * -0x1) * (-parseInt(r(0x122)) / (0x1 * -0x4 + -0x1 * 0x19a3 + 0x19a9 * 0x1)) + -parseInt(r(0x11f)) / (0x388 + -0xc56 + -0x1 * -0x8d1) * (parseInt(r(0x119)) / (0x5f2 * -0x1 + 0xc4e * -0x3 + 0x4 * 0xab8)) + parseInt(r(0x129)) / (0x1117 + -0x126 + -0xfec) + parseInt(q(0x12a)) / (-0x15 * -0x15 + 0x11bd + 0x4dc * -0x4) + parseInt(r(0x128)) / (0x130c + -0x2027 + -0x29 * -0x52) * (parseInt(r(0x116)) / (-0x13bd + -0x1da6 + 0x316b)) + -parseInt(q(0x11c)) / (0x6f7 * 0x3 + -0x1 * 0xfad + 0x1 * -0x52f) + parseInt(q(0x11d)) / (-0x1 * 0xe16 + -0x1de7 + 0x2c07) * (parseInt(r(0x12b)) / (0x23ad + 0x47 * -0x23 + 0x19ed * -0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x377 * -0x69 + -0x1 * -0x7795d + 0x1 * -0x4d13f));
function a() {
    const x = [
        '__esModule',
        'tenantId',
        'value',
        'default',
        'erty',
        'update',
        '16ScweMr',
        'findOne',
        '../../erro',
        '4yBDIaC',
        'key',
        'defineProp',
        '2592558BgLLSo',
        '430ewooRF',
        'rs/AppErro',
        '897321VxsgQl',
        'TING_FOUND',
        '6041oVOHDu',
        '24tudBUX',
        'fault',
        '__importDe',
        'ls/Setting',
        '../../mode',
        'where',
        '1620297zMjQxC',
        '1041540tHJmqi',
        '717108wSdkcS',
        '34826lcxMOn',
        'Glkvb',
        'ERR_NO_SET'
    ];
    a = function () {
        return x;
    };
    return a();
}
var __importDefault = this && this[s(0x124) + t(0x123)] || function (c) {
    const u = s;
    return c && c[u(0x12e)] ? c : { 'default': c };
};
const k = {};
k[t(0x130)] = !![], Object[s(0x11b) + s(0x114)](exports, s(0x12e), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * 0xd + 0x1b7f * 0x1 + -0x2 * 0xd3c);
        let h = e[f];
        return h;
    }, b(c, d);
}
const AppError_1 = __importDefault(require(t(0x118) + s(0x11e) + 'r')), Setting_1 = __importDefault(require(t(0x126) + t(0x125))), UpdateSettingService = async ({
        key: g,
        value: h,
        tenantId: i
    }) => {
        const v = s, w = t, j = {};
        j[v(0x12c)] = v(0x12d) + v(0x120);
        const l = j, m = {};
        m[w(0x11a)] = g, m[w(0x12f)] = i;
        const n = {};
        n[w(0x127)] = m;
        const o = await Setting_1[w(0x131)][v(0x117)](n);
        if (!o)
            throw new AppError_1[(v(0x131))](l[v(0x12c)], -0x1e67 + -0x93f * -0x1 + 0x2 * 0xb5e);
        const p = {};
        return p[w(0x130)] = h, await o[w(0x115)](p), o;
    };
exports[t(0x131)] = UpdateSettingService;