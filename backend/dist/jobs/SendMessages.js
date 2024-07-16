'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0x190)) / (0x1 * -0x10e4 + 0x74d + 0x998) + parseInt(o(0x188)) / (-0x1 * -0x137b + 0x11ae + 0x1 * -0x2527) + parseInt(o(0x17f)) / (-0x20dd + 0x1090 + 0x1050) * (parseInt(n(0x187)) / (0x1 * -0x18a7 + -0x179d + 0x3048)) + parseInt(o(0x186)) / (-0x14ff + -0xa3 * 0x1f + 0x1 * 0x28c1) * (parseInt(o(0x179)) / (0x245c + -0x78f + -0x1cc7)) + -parseInt(o(0x173)) / (-0x199b + -0x16cf + 0x1 * 0x3071) * (-parseInt(o(0x16e)) / (-0x2ee + 0x1dd8 + -0x1ae2)) + parseInt(n(0x18b)) / (0x13 * -0x8e + 0x1200 + 0x1 * -0x76d) + parseInt(n(0x18a)) / (0x1367 + 0x1f59 + 0x2 * -0x195b) * (-parseInt(o(0x191)) / (0x199 * 0x11 + 0x2 * 0x12e1 + 0x20 * -0x207));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x594d7 + 0xfc6b + -0x3647f));
function a() {
    const u = [
        '180FzmFME',
        '../utils/l',
        '\x20messages',
        'ogger',
        'erty',
        'ot-baileys',
        '3lumqkj',
        'value',
        '__esModule',
        'ices/SendM',
        'default',
        'temWbotBai',
        'fault',
        '34040lurwVE',
        '353964EOOeeh',
        '70180HiosVh',
        '../service',
        '195150lfZkWU',
        '2731131kRdrFK',
        'leys',
        's/WbotServ',
        'BfPpR',
        'logger',
        '369532KfQPCJ',
        '143RLeSAY',
        'message',
        '16pihPEr',
        '../libs/wb',
        'Error\x20send',
        'sendMessag',
        'essagesSys',
        '700049WZkxrj',
        'defineProp',
        'getWbot',
        '__importDe',
        'error',
        'eBaileys'
    ];
    a = function () {
        return u;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1123 + 0x440 + 0xe51);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[p(0x176) + p(0x185)] || function (c) {
    const r = p;
    return c && c[r(0x181)] ? c : { 'default': c };
};
const k = {};
k[p(0x180)] = !![], Object[p(0x174) + p(0x17d)](exports, p(0x181), k), exports[q(0x171) + p(0x178)] = void (0x3 * -0x8e4 + -0x280 + 0x1d2c);
const wbot_baileys_1 = require(q(0x16f) + p(0x17e)), SendMessagesSystemWbotBaileys_1 = __importDefault(require(q(0x189) + q(0x18d) + q(0x182) + p(0x172) + p(0x184) + p(0x18c))), logger_1 = require(p(0x17a) + q(0x17c)), sendMessageBaileys = async (e, f, g = undefined) => {
        const s = p, t = q, h = {};
        h[s(0x18e)] = t(0x170) + t(0x17b);
        const i = h;
        try {
            const j = (0x23a * -0x9 + -0x1d64 + 0x316e, wbot_baileys_1[t(0x175)])(e);
            await (-0x41 * -0xd + 0x5e6 * -0x2 + -0x3 * -0x2d5, SendMessagesSystemWbotBaileys_1[t(0x183)])(j, f, g);
        } catch (l) {
            const m = {};
            m[s(0x192)] = i[s(0x18e)], m[t(0x177)] = l, logger_1[t(0x18f)][t(0x177)](m);
            throw new Error(l);
        }
    };
exports[p(0x171) + q(0x178)] = sendMessageBaileys;