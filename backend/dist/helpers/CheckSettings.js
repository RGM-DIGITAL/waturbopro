'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(m(0x1b5)) / (0x1 * -0xa6 + 0x3 * -0xfb + 0x398) + -parseInt(m(0x1ac)) / (0x11a0 + -0x19ac + -0x2 * -0x407) * (-parseInt(m(0x19d)) / (-0x8d5 + 0x251c + -0x2 * 0xe22)) + -parseInt(n(0x1b3)) / (-0x12b1 + 0x127b + 0x1 * 0x3a) + -parseInt(m(0x1b2)) / (-0x4f * -0x59 + 0x51b + -0x208d) + parseInt(n(0x19e)) / (0xa08 + -0x235e + -0x3 * -0x874) + -parseInt(n(0x1b0)) / (0xb57 * 0x2 + -0x362 * 0x4 + -0x5 * 0x1d3) * (parseInt(m(0x1a6)) / (0xce * 0x2 + 0xdc5 + -0xf59)) + parseInt(m(0x1ae)) / (0x1be7 + -0x856 + -0x1388) * (parseInt(n(0x1a1)) / (0x15 * 0x13f + 0x2474 * 0x1 + 0x25 * -0x1b1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xedc86 + 0x11c6ea + -0x177d41));
var __importDefault = this && this[o(0x1b1) + o(0x1ad)] || function (c) {
    const q = p;
    return c && c[q(0x19f)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1630 + 0xb7 * -0x33 + 0xfe1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
function a() {
    const t = [
        '14695407ZjwTUh',
        'Setting',
        '4578721mCKbmE',
        '__importDe',
        '4240825Hptrsl',
        '4535144bneNBi',
        '../errors/',
        '551281nlMctp',
        '../models/',
        'default',
        '54867AjPtOU',
        '6199560fqXoHf',
        '__esModule',
        'AppError',
        '10sHzCTD',
        'findOne',
        'NnHrF',
        'defineProp',
        'TING_FOUND',
        '8shlYrT',
        'erty',
        'key',
        'ERR_NO_SET',
        'value',
        'where',
        '2nCeOUs',
        'fault'
    ];
    a = function () {
        return t;
    };
    return a();
}
k[p(0x1aa)] = !![], Object[p(0x1a4) + o(0x1a7)](exports, o(0x19f), k);
const Setting_1 = __importDefault(require(p(0x1b6) + p(0x1af))), AppError_1 = __importDefault(require(p(0x1b4) + p(0x1a0))), CheckSettings = async f => {
        const r = p, s = p, g = {};
        g[r(0x1a3)] = r(0x1a9) + r(0x1a5);
        const h = g, i = {};
        i[r(0x1a8)] = f;
        const j = {};
        j[r(0x1ab)] = i;
        const l = await Setting_1[r(0x19c)][r(0x1a2)](j);
        if (!l)
            throw new AppError_1[(s(0x19c))](h[s(0x1a3)], -0x1cee + -0x1f * -0x37 + 0x17d9);
        return l[s(0x1aa)];
    };
exports[o(0x19c)] = CheckSettings;