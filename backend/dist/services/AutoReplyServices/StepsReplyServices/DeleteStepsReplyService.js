'use strict';
function a() {
    const t = [
        'default',
        'LY_FOUND',
        '747860lTaGlz',
        'value',
        'erty',
        'defineProp',
        'rror',
        '40283jIeiuT',
        '8HTQnzb',
        'findOne',
        '../../../m',
        '654252tOsLoa',
        '__esModule',
        '__importDe',
        'ERR_NO_STE',
        '5214cLNatq',
        '2660yYOEjC',
        'BYJyh',
        'fault',
        '../../../e',
        '318900hkngRF',
        '394947ULohmn',
        'rrors/AppE',
        '10AyQttm',
        'where',
        'sReply',
        '2388TIsblD',
        'destroy',
        'P_AUTO_REP',
        'odels/Step',
        '1778WNXzBu'
    ];
    a = function () {
        return t;
    };
    return a();
}
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(m(0x13d)) / (-0xe96 + 0xe23 + 0x74) * (parseInt(n(0x12e)) / (-0x1cf7 + 0x2398 + 0x5 * -0x153)) + parseInt(n(0x12b)) / (-0x2 * -0xe3b + -0x96b * 0x2 + 0x17 * -0x6b) + -parseInt(m(0x141)) / (-0x9f2 + 0x1fa9 + -0x5 * 0x457) + parseInt(m(0x138)) / (0x2 * 0x44c + -0x26e * 0x9 + 0xd4b) + parseInt(m(0x131)) / (-0x1ff9 + 0x1412 + 0x47 * 0x2b) * (-parseInt(n(0x135)) / (-0x18ae + -0xb * -0x16a + 0xd5 * 0xb)) + parseInt(n(0x13e)) / (0x1 * -0x342 + -0x1f * 0x117 + 0x2513) * (parseInt(m(0x12c)) / (-0x1 * 0x1627 + -0xf76 + 0x25a6)) + parseInt(m(0x146)) / (-0x1cd1 + -0x1ea3 + 0x3b7e) * (-parseInt(n(0x145)) / (0x22db + -0x93 * -0x2f + -0xd * 0x4c1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x31a76 + -0x4a58 + -0x10409 * -0x5));
var __importDefault = this && this[o(0x143) + p(0x129)] || function (c) {
    const q = p;
    return c && c[q(0x142)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x242 + 0xcf1 + -0x1 * 0x987);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[o(0x139)] = !![], Object[p(0x13b) + o(0x13a)](exports, o(0x142), k);
const StepsReply_1 = __importDefault(require(o(0x140) + p(0x134) + p(0x130))), AppError_1 = __importDefault(require(p(0x12a) + o(0x12d) + p(0x13c))), DeleteStepsReplyService = async f => {
        const r = o, s = o, g = {};
        g[r(0x128)] = r(0x144) + r(0x133) + s(0x137);
        const h = g, i = {};
        i['id'] = f;
        const j = {};
        j[r(0x12f)] = i;
        const l = await StepsReply_1[r(0x136)][s(0x13f)](j);
        if (!l)
            throw new AppError_1[(s(0x136))](h[r(0x128)], -0x441 * 0x9 + 0x2550 + 0x28d);
        await l[s(0x132)]();
    };
exports[p(0x136)] = DeleteStepsReplyService;