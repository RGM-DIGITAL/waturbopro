'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1228 + -0x61 * 0x3 + -0x1049);
        let h = e[f];
        return h;
    }, b(c, d);
}
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(m(0xc1)) / (0x955 * 0x1 + -0x7d9 + -0x17b) + -parseInt(n(0xc0)) / (0x2 * -0xc95 + -0x2607 + 0x3 * 0x1511) + -parseInt(m(0xc3)) / (0xdb7 * 0x2 + 0x1611 + 0x2 * -0x18be) + parseInt(m(0xd0)) / (-0x21f1 + -0x160f + 0x3804) + parseInt(n(0xce)) / (0x1 * -0x10a + 0x1d06 + -0x1bf7) * (-parseInt(n(0xc7)) / (0x25f0 + 0x116f + 0x1 * -0x3759)) + -parseInt(n(0xc8)) / (-0x17f + -0x1ab8 + 0x6 * 0x4b5) * (-parseInt(n(0xd8)) / (0x1b49 + -0xf68 + -0xbd9)) + parseInt(n(0xbc)) / (-0x615 + -0x365 + 0x983) * (parseInt(m(0xcc)) / (-0x5 * -0x303 + -0xeb6 + -0x4f * 0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x390af + -0x2496a + 0xa5 * 0xff3));
var __importDefault = this && this[o(0xd1) + p(0xbd)] || function (c) {
    const q = o;
    return c && c[q(0xcd)] ? c : { 'default': c };
};
function a() {
    const t = [
        '51292vPQGsa',
        'erty',
        '576102BLfyFr',
        'LY_FOUND',
        'destroy',
        'findOne',
        '978tPHhLX',
        '1790929XWYCsC',
        'rror',
        'P_AUTO_REP',
        'sReply',
        '20wwxVFV',
        '__esModule',
        '15765mZcUxs',
        '../../../e',
        '2058876idbJmB',
        '__importDe',
        'defineProp',
        'where',
        'rrors/AppE',
        'default',
        'value',
        'UOikD',
        '8ZlmsLt',
        'odels/Step',
        '2895786lLEkeO',
        'fault',
        '../../../m',
        'ERR_NO_STE',
        '733254eKJWUO'
    ];
    a = function () {
        return t;
    };
    return a();
}
const k = {};
k[o(0xd6)] = !![], Object[p(0xd2) + o(0xc2)](exports, p(0xcd), k);
const StepsReply_1 = __importDefault(require(p(0xbe) + o(0xd9) + o(0xcb))), AppError_1 = __importDefault(require(o(0xcf) + p(0xd4) + p(0xc9))), DeleteStepsReplyService = async f => {
        const r = o, s = p, g = {};
        g[r(0xd7)] = s(0xbf) + s(0xca) + s(0xc4);
        const h = g, i = {};
        i['id'] = f;
        const j = {};
        j[r(0xd3)] = i;
        const l = await StepsReply_1[s(0xd5)][r(0xc6)](j);
        if (!l)
            throw new AppError_1[(r(0xd5))](h[r(0xd7)], 0x218 + 0x1788 + -0x180c);
        await l[s(0xc5)]();
    };
exports[p(0xd5)] = DeleteStepsReplyService;