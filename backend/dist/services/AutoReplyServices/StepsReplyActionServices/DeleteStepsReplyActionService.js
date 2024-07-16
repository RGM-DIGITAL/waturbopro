'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xb47 * 0x1 + 0x2285 + -0x2d2b * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(m(0xb1)) / (-0xf * 0x20e + -0x1 * -0x22d2 + -0x3ff) * (parseInt(m(0xa7)) / (-0x1273 + 0x11d7 + 0x9e)) + parseInt(m(0xac)) / (-0x795 + -0x3b8 + 0xb50) * (parseInt(n(0xa1)) / (-0x44 * 0x25 + 0x360 + 0x678)) + -parseInt(n(0xb0)) / (0x127c + 0x1 * -0x1931 + 0x7b * 0xe) + -parseInt(n(0xa6)) / (0xf8a + -0x1d0f + -0xd8b * -0x1) + -parseInt(m(0xba)) / (0x4 * -0x92 + 0x4ea + -0x29b) + parseInt(n(0xb4)) / (-0x20db + -0x2 * -0x209 + 0x1 * 0x1cd1) + parseInt(n(0xa5)) / (0x2 * 0x7b1 + -0x1 * -0x223e + 0x1 * -0x3197);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x4a * 0x5348 + -0x1a03af + -0x6 * -0xa9f13));
var __importDefault = this && this[o(0xb3) + p(0xbb)] || function (c) {
    const q = o;
    return c && c[q(0xaa)] ? c : { 'default': c };
};
function a() {
    const t = [
        'destroy',
        '__esModule',
        'sReplyActi',
        '3intzTe',
        'erty',
        'rror',
        'findOne',
        '4135285Obznsz',
        '1JgmAlA',
        'odels/Step',
        '__importDe',
        '1074976DDLOWA',
        'ERR_NO_STE',
        '../../../e',
        'defineProp',
        'rrors/AppE',
        'PS_REPLY_F',
        '7258482fFEdLW',
        'fault',
        '../../../m',
        'default',
        '154132DRGKcR',
        'qnVta',
        'value',
        'OUND',
        '37521828yXmKlV',
        '10049832MmssKs',
        '181794jjvfkM',
        'where'
    ];
    a = function () {
        return t;
    };
    return a();
}
const k = {};
k[p(0xa3)] = !![], Object[p(0xb7) + o(0xad)](exports, o(0xaa), k);
const StepsReplyAction_1 = __importDefault(require(p(0xbc) + p(0xb2) + p(0xab) + 'on')), AppError_1 = __importDefault(require(p(0xb6) + o(0xb8) + p(0xae))), DeleteStepsReplyActionService = async f => {
        const r = p, s = p, g = {};
        g[r(0xa2)] = r(0xb5) + r(0xb9) + s(0xa4);
        const h = g, i = {};
        i['id'] = f;
        const j = {};
        j[s(0xa8)] = i;
        const l = await StepsReplyAction_1[r(0xbd)][r(0xaf)](j);
        if (!l)
            throw new AppError_1[(s(0xbd))](h[s(0xa2)], -0x2426 + 0x18f3 + -0x1 * -0xcc7);
        await l[r(0xa9)]();
    };
exports[p(0xbd)] = DeleteStepsReplyActionService;