'use strict';
const n = b, o = b;
function a() {
    const v = [
        '23431VmsWGc',
        'log',
        'default',
        '4950640iNtBXX',
        'eToIA',
        'value',
        '100816VOumYO',
        '396uQiEMf',
        'axios',
        'OPEN_IA_UR',
        'rwAaG',
        '__importDe',
        '3657850TSsIsI',
        '__esModule',
        'defineProp',
        '13701842FfWelh',
        '60OhEZKp',
        '66LWkeSJ',
        'isnetsul',
        '8tOgVYZ',
        'data',
        'response',
        '71815rwvvfF',
        'erty',
        'env',
        'sendMessag',
        'fault',
        '/message_s',
        '56180VAISYN',
        'post'
    ];
    a = function () {
        return v;
    };
    return a();
}
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0xf1)) / (0x2523 + -0xcd4 * -0x2 + -0x72 * 0x8d) * (-parseInt(m(0xe6)) / (-0x4f9 * -0x3 + -0x20e5 + 0x11fc)) + parseInt(l(0xe3)) / (-0xb6 * 0x7 + 0x1597 + -0x2 * 0x84d) * (-parseInt(l(0xef)) / (-0x16 * 0x176 + -0x1b43 + 0x3b6b)) + parseInt(m(0xe9)) / (-0x410 + 0xf6f * -0x1 + -0x1 * -0x1384) * (parseInt(m(0xe4)) / (-0x1 * -0x13d5 + -0x15 * -0x12d + 0x2c8 * -0x10)) + parseInt(m(0xdf)) / (-0x19a0 + -0x50e * -0x6 + 0x1 * -0x4ad) + -parseInt(l(0xf7)) / (-0x2218 + 0xd7d + 0x14a3) * (parseInt(l(0xf8)) / (0xf2 + -0x1960 + 0x1877)) + -parseInt(m(0xf4)) / (-0x1fa2 + -0x1 * -0x1aa9 + -0x1 * -0x503) + parseInt(m(0xe2)) / (-0x1e02 + -0xfbd + 0x2dca);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * 0x1337d + -0xd77 * 0x4f + 0xb * 0xf703));
var __importDefault = this && this[n(0xfc) + n(0xed)] || function (c) {
    const p = n;
    return c && c[p(0xe0)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x6f + 0x3 * 0x3a9 + -0x9ad);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[o(0xf6)] = !![], Object[n(0xe1) + o(0xea)](exports, o(0xe0), k), exports[n(0xec) + n(0xf5)] = void (-0x1e89 + -0x2271 + 0x40fa);
const axios_1 = __importDefault(require(n(0xf9))), sendMessageToIA = async d => {
        const q = o, r = o, e = {
                'rwAaG': function (f, g) {
                    return f(g);
                }
            };
        try {
            const f = { ...d }, g = await axios_1[q(0xf3)][r(0xf0)](process[r(0xeb)][q(0xfa) + 'L'] + (r(0xee) + q(0xe5)), f);
            return e[q(0xfb)](handleSucces, g);
        } catch (h) {
            return e[r(0xfb)](handleError, h);
        }
    };
exports[o(0xec) + o(0xf5)] = sendMessageToIA;
const handleError = c => {
        const s = o, t = n;
        console[s(0xf2)](c[t(0xe8)]);
    }, handleSucces = c => {
        const u = n;
        return c[u(0xe7)];
    };