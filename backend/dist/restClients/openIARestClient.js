'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0x82)) / (0xf4d + -0x20fb + 0x11af) * (parseInt(l(0x8c)) / (0x172f + -0x1 * 0x1aa7 + 0xa * 0x59)) + parseInt(l(0x80)) / (-0x39d + 0x25f * -0x6 + -0x5 * -0x392) * (-parseInt(m(0x8f)) / (0x8 * -0x48d + 0xf04 + 0x1568)) + -parseInt(m(0x85)) / (-0x4a8 + 0x1d2c + 0x1 * -0x187f) * (-parseInt(l(0x76)) / (-0x166c + 0xd3 * 0x2b + -0xcff * 0x1)) + -parseInt(m(0x89)) / (0xa * -0x8a + -0x2416 + -0x2981 * -0x1) + parseInt(l(0x8b)) / (-0x85 * -0x2c + -0x1 * 0x908 + -0x373 * 0x4) + parseInt(m(0x8e)) / (-0x86 * -0x22 + -0x22 * 0xb8 + 0x1 * 0x6ad) + parseInt(m(0x78)) / (-0x1 * 0x803 + -0x208d + -0x2 * -0x144d) * (parseInt(m(0x84)) / (-0x2 * -0xaba + -0xdf1 + 0x778 * -0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x9288b * -0x1 + -0x1 * -0x51856 + 0xbf8c7));
var __importDefault = this && this[n(0x7b) + n(0x8d)] || function (c) {
    const p = o;
    return c && c[p(0x7e)] ? c : { 'default': c };
};
const k = {};
k[o(0x88)] = !![], Object[n(0x90) + o(0x77)](exports, n(0x7e), k), exports[o(0x75) + n(0x83)] = void (0xe1 * 0xe + -0x119 * 0xb + -0x3b);
function a() {
    const v = [
        '18eRbUFc',
        'erty',
        '3297830qzYJuK',
        'SmtvH',
        'data',
        '__importDe',
        'response',
        'log',
        '__esModule',
        '/message_s',
        '3jChuiK',
        'OPEN_IA_UR',
        '27346tLZkfm',
        'eToIA',
        '11kbknCD',
        '1276595fptsXH',
        'axios',
        'default',
        'value',
        '5380284TkhHKG',
        'post',
        '4981096IViHlZ',
        '20AKrEie',
        'fault',
        '4930794AHPsiy',
        '2823524LTcQgY',
        'defineProp',
        'env',
        'isnetsul',
        'sendMessag'
    ];
    a = function () {
        return v;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x956 + 0x10f4 + -0x19d5);
        let h = e[f];
        return h;
    }, b(c, d);
}
const axios_1 = __importDefault(require(o(0x86))), sendMessageToIA = async d => {
        const q = n, r = o, e = {
                'SmtvH': function (f, g) {
                    return f(g);
                }
            };
        try {
            const f = { ...d }, g = await axios_1[q(0x87)][q(0x8a)](process[r(0x91)][q(0x81) + 'L'] + (r(0x7f) + r(0x92)), f);
            return e[r(0x79)](handleSucces, g);
        } catch (h) {
            return e[r(0x79)](handleError, h);
        }
    };
exports[o(0x75) + n(0x83)] = sendMessageToIA;
const handleError = c => {
        const s = o, t = n;
        console[s(0x7d)](c[t(0x7c)]);
    }, handleSucces = c => {
        const u = n;
        return c[u(0x7a)];
    };