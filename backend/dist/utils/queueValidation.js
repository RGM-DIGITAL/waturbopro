'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0xf4)) / (-0x73e + -0x14c3 + 0x6 * 0x4ab) + -parseInt(o(0xd8)) / (0x7e7 * -0x1 + -0x120b + 0x19f4) + parseInt(o(0xef)) / (0x56 * -0x16 + 0xbc * -0x1b + 0x1b3b) + -parseInt(p(0xd9)) / (0x1 * -0xeac + 0x547 + 0x3 * 0x323) * (parseInt(o(0xde)) / (-0x2325 + -0xfd2 + 0x32fc * 0x1)) + -parseInt(o(0xed)) / (-0x1262 + 0x5c4 + 0xca4) + parseInt(p(0xea)) / (-0xef5 + 0xbd4 + 0x65 * 0x8) * (parseInt(o(0xec)) / (0x12f9 * -0x2 + -0x2278 + -0x1826 * -0x3)) + parseInt(p(0xe1)) / (-0x12c1 * 0x1 + 0x1 * 0x1a3f + -0x53 * 0x17) * (parseInt(p(0xe2)) / (0x1 * -0x295 + 0x1a82 + -0x17e3));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x582a + -0x5284 * 0x1 + 0x82632));
var __importDefault = this && this[q(0xe6) + q(0xdc)] || function (c) {
    const s = q;
    return c && c[s(0xe7)] ? c : { 'default': c };
};
function a() {
    const v = [
        'sendMessag',
        'value',
        '__importDe',
        '__esModule',
        'Aaxat',
        '../jobs/Se',
        '84ZtXoiM',
        'Service',
        '252664xhuJoB',
        '2724696qnLGYx',
        'whatsapp',
        '3061848wOIxVn',
        'default',
        'owWhatsApp',
        'defineProp',
        'type',
        '305561WboZxi',
        'yUFib',
        '1434356QoWMYF',
        '24ikmLCb',
        'ndMessages',
        's/Whatsapp',
        'fault',
        '../service',
        '126265TTMrrN',
        'Service/Sh',
        'erty',
        '1378359DTxbMK',
        '10zJAbfg',
        'eBaileys'
    ];
    a = function () {
        return v;
    };
    return a();
}
const k = {};
k[q(0xe5)] = !![], Object[q(0xf2) + r(0xe0)](exports, r(0xe7), k);
const SendMessages_1 = require(q(0xe9) + q(0xda)), ShowWhatsAppService_1 = __importDefault(require(r(0xdd) + q(0xdb) + q(0xdf) + r(0xf1) + q(0xeb)));
async function queueValidation(e, f, g = undefined) {
    const t = r, u = r, h = {};
    h[t(0xd7)] = function (m, n) {
        return m === n;
    }, h[t(0xe8)] = u(0xee);
    const i = h, j = {};
    j['id'] = e;
    const l = await (0xaf8 + 0x2b * -0xa1 + 0x1013 * 0x1, ShowWhatsAppService_1[t(0xf0)])(j);
    i[u(0xd7)](l[t(0xf3)], i[u(0xe8)]) && await (-0x1bcb + -0x98 + -0xd * -0x22f, SendMessages_1[u(0xe4) + u(0xe3)])(e, f, g);
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xea5 + 0x2077 + 0x203 * -0x17);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[q(0xf0)] = queueValidation;