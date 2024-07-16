'use strict';
const s = b, t = b;
function a() {
    const x = [
        '1818520aFLauP',
        '321384LUtXvs',
        '4421421HshLhX',
        'ls/Setting',
        '5gwTDXr',
        'rs/AppErro',
        '94206mibCij',
        '2444982YzBRkx',
        '../../erro',
        '4647730xmuwcm',
        'TING_FOUND',
        '../../mode',
        'key',
        '__esModule',
        'update',
        'wQBFu',
        'ERR_NO_SET',
        '21avrsxy',
        'value',
        'default',
        '__importDe',
        'tenantId',
        'defineProp',
        '90NkboaX',
        'where',
        'findOne',
        'erty',
        'fault',
        '6200nCGheg'
    ];
    a = function () {
        return x;
    };
    return a();
}
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(q(0xe6)) / (-0x5b5 * -0x5 + 0x1a5 * -0x7 + -0x1105) + parseInt(r(0xfc)) / (0x653 * -0x1 + -0x9 * -0x385 + -0x656 * 0x4) * (-parseInt(q(0xf7)) / (-0xbe8 * -0x1 + 0x1 * -0x2016 + 0x1431)) + parseInt(r(0xe1)) / (0x2 * -0x11c8 + -0x215e + -0x19 * -0x2c2) + -parseInt(r(0xe4)) / (0x351 + 0x4 * 0x746 + -0x2064) * (parseInt(r(0xe7)) / (-0xed2 * -0x1 + -0x9b8 + -0x514)) + parseInt(r(0xf1)) / (-0x264f + -0xfd3 * 0x2 + 0x45fc) * (parseInt(q(0xe0)) / (0x14f7 + 0x13fc * 0x1 + -0x28eb)) + parseInt(r(0xe2)) / (0x1 * -0x7ca + 0x1 * -0x21f5 + -0x2fc * -0xe) + -parseInt(q(0xe9)) / (-0x25be + 0x4a1 + 0xcf * 0x29);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x48c9 + 0x78a45 + -0x16b5c));
var __importDefault = this && this[s(0xf4) + t(0xfb)] || function (c) {
    const u = t;
    return c && c[u(0xed)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xf1c + -0x7 * 0x3e1 + 0xceb);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[t(0xf2)] = !![], Object[s(0xf6) + t(0xfa)](exports, s(0xed), k);
const AppError_1 = __importDefault(require(t(0xe8) + t(0xe5) + 'r')), Setting_1 = __importDefault(require(t(0xeb) + s(0xe3))), UpdateSettingService = async ({
        key: g,
        value: h,
        tenantId: i
    }) => {
        const v = t, w = s, j = {};
        j[v(0xef)] = v(0xf0) + w(0xea);
        const l = j, m = {};
        m[v(0xec)] = g, m[v(0xf5)] = i;
        const n = {};
        n[v(0xf8)] = m;
        const o = await Setting_1[w(0xf3)][w(0xf9)](n);
        if (!o)
            throw new AppError_1[(v(0xf3))](l[w(0xef)], 0x95 * -0x4 + -0x2535 + -0x5 * -0x839);
        const p = {};
        return p[v(0xf2)] = h, await o[w(0xee)](p), o;
    };
exports[t(0xf3)] = UpdateSettingService;