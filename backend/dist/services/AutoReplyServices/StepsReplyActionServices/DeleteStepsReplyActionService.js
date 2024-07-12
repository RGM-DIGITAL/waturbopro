'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2020 + 0xd6 * 0x2e + -0x5 * 0xff);
        let h = e[f];
        return h;
    }, b(c, d);
}
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(m(0x15c)) / (0x45 + 0x7 * 0x3d2 + -0x1b02) + -parseInt(n(0x161)) / (-0x1cda + 0xbff + 0x10dd * 0x1) + parseInt(n(0x16f)) / (-0x7dd + 0x7cc + 0x14) + -parseInt(m(0x167)) / (0x1af1 + -0xebf + -0x1 * 0xc2e) + -parseInt(n(0x16e)) / (-0x83f + -0x111b + 0x1 * 0x195f) + parseInt(n(0x16c)) / (0x452 * -0x9 + -0x8 * -0x464 + 0x3c8) + parseInt(m(0x173)) / (0xc07 + -0x7 * 0x569 + 0x19df);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x30fd * -0x1 + 0xb1067 + -0x1633d * 0x3));
function a() {
    const t = [
        'ERR_NO_STE',
        'fault',
        '266923hPpIZv',
        'PS_REPLY_F',
        'value',
        'default',
        '../../../m',
        '1098794retPvt',
        'sReplyActi',
        'rror',
        'erty',
        'defineProp',
        '__esModule',
        '3021392hrxReY',
        'destroy',
        '__importDe',
        'rrors/AppE',
        'OUND',
        '5475570YzGGMN',
        'where',
        '3201280MCoEwG',
        '1931025kNCzAT',
        '../../../e',
        'odels/Step',
        'findOne',
        '4106347AmeMYa',
        'lLxLv'
    ];
    a = function () {
        return t;
    };
    return a();
}
var __importDefault = this && this[o(0x169) + p(0x15b)] || function (c) {
    const q = p;
    return c && c[q(0x166)] ? c : { 'default': c };
};
const k = {};
k[p(0x15e)] = !![], Object[o(0x165) + p(0x164)](exports, o(0x166), k);
const StepsReplyAction_1 = __importDefault(require(o(0x160) + p(0x171) + p(0x162) + 'on')), AppError_1 = __importDefault(require(o(0x170) + o(0x16a) + o(0x163))), DeleteStepsReplyActionService = async f => {
        const r = o, s = p, g = {};
        g[r(0x159)] = s(0x15a) + r(0x15d) + s(0x16b);
        const h = g, i = {};
        i['id'] = f;
        const j = {};
        j[s(0x16d)] = i;
        const l = await StepsReplyAction_1[r(0x15f)][s(0x172)](j);
        if (!l)
            throw new AppError_1[(r(0x15f))](h[s(0x159)], -0x293 * 0x3 + 0xc04 + -0x1 * 0x2b7);
        await l[r(0x168)]();
    };
exports[p(0x15f)] = DeleteStepsReplyActionService;