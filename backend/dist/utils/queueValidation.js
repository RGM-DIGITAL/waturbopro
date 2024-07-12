'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(o(0xc6)) / (-0x3 * 0x909 + -0x1 * 0x4c1 + -0x1 * -0x1fdd) + parseInt(p(0xc9)) / (0x1072 + 0x454 * 0x4 + 0xf * -0x240) + parseInt(p(0xd9)) / (-0x1aa8 + -0x516 + 0xb * 0x2e3) * (parseInt(p(0xdd)) / (-0x164 * 0xb + -0x16 * 0x112 + 0x26dc)) + -parseInt(p(0xc5)) / (-0xb04 + -0xc11 * 0x1 + -0x1 * -0x171a) + -parseInt(p(0xd0)) / (0x22b1 + -0x60a * 0x1 + -0x1ca1) * (-parseInt(p(0xc7)) / (0xd5e * 0x1 + 0x22ac + -0xf1 * 0x33)) + -parseInt(o(0xd3)) / (0x130e + -0x5e2 + -0xd24) * (-parseInt(p(0xcc)) / (-0x265 * -0x2 + -0x4 * 0x55b + 0xfb * 0x11)) + parseInt(o(0xd5)) / (-0x12b * -0x9 + -0xea5 + -0x216 * -0x2) * (-parseInt(p(0xd4)) / (-0x4 * -0x98f + -0x2 * -0xf34 + 0x4499 * -0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xd7bb5 + -0x9761f * 0x1 + -0xe * -0x6103));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xd * -0x1f9 + 0x2b9 + -0x1 * -0x17ae);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[q(0xcd) + q(0xcb)] || function (c) {
    const s = q;
    return c && c[s(0xc4)] ? c : { 'default': c };
};
function a() {
    const v = [
        'sendMessag',
        'type',
        'Service/Sh',
        'defineProp',
        '__esModule',
        '4403540cukcTm',
        '891905dblnQR',
        '7tEglpV',
        'eBaileys',
        '1521846uERZyp',
        'value',
        'fault',
        '9548109SFArLi',
        '__importDe',
        'qIvau',
        'ndMessages',
        '3959400ntcXRU',
        '../service',
        'erty',
        '8lSHLvq',
        '2992mBEEJE',
        '19780JZSCMJ',
        'Service',
        'owWhatsApp',
        's/Whatsapp',
        '42597sIJUoj',
        'default',
        '../jobs/Se',
        'whatsapp',
        '124iSxyIT',
        'wbKYb'
    ];
    a = function () {
        return v;
    };
    return a();
}
const k = {};
k[r(0xca)] = !![], Object[q(0xc3) + q(0xd2)](exports, q(0xc4), k);
const SendMessages_1 = require(q(0xdb) + r(0xcf)), ShowWhatsAppService_1 = __importDefault(require(q(0xd1) + r(0xd8) + r(0xc2) + r(0xd7) + r(0xd6)));
async function queueValidation(e, f, g = undefined) {
    const t = q, u = r, h = {};
    h[t(0xde)] = function (m, n) {
        return m === n;
    }, h[u(0xce)] = t(0xdc);
    const i = h, j = {};
    j['id'] = e;
    const l = await (-0x2 * -0x4d5 + -0x12c2 + 0x918, ShowWhatsAppService_1[u(0xda)])(j);
    i[u(0xde)](l[t(0xe0)], i[u(0xce)]) && await (0x6d2 + -0x1b54 + 0x1482, SendMessages_1[t(0xdf) + t(0xc8)])(e, f, g);
}
exports[r(0xda)] = queueValidation;