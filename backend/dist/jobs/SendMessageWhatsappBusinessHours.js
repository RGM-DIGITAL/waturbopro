'use strict';
const u = b, v = b;
function a() {
    const y = [
        'inessHours',
        'text',
        'error',
        'contact',
        'removeOnCo',
        '2590568KCleFJ',
        'whatsappId',
        '8356290bsNRuO',
        'SendMessag',
        'delay',
        'ticket',
        'g.us',
        'mplete',
        '7UoCXJn',
        '../libs/wb',
        '673302OtzoHG',
        'ATwIG',
        'number',
        '8KljAiS',
        '70885BoSDHr',
        'ot-baileys',
        '\x20business\x20',
        'defineProp',
        'erty',
        '630621lWWHMQ',
        'message',
        'default',
        'ogger',
        'sendMessag',
        '1143402oJxFsn',
        'Error\x20envi',
        'removeOnFa',
        'tenant',
        'isGroup',
        'hours:\x20',
        '8296oADxZk',
        'messageBus',
        'IJzon',
        'logger',
        'value',
        'getWbot',
        '36hXpqJf',
        's.whatsapp',
        'eWhatsappB',
        '.net',
        'attempts',
        '../utils/l',
        '__esModule',
        'usinessHou',
        'ar\x20message'
    ];
    a = function () {
        return y;
    };
    return a();
}
(function (c, d) {
    const s = b, t = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(s(0x181)) / (-0x22 * 0x52 + 0x50d * 0x1 + 0x5d8) * (parseInt(s(0x170)) / (0x1 * 0x1b0a + -0x7d6 + -0xea * 0x15)) + -parseInt(s(0x16d)) / (-0x1 * 0x647 + 0x2 * 0xd60 + 0x12 * -0x123) + -parseInt(s(0x187)) / (0x223 * -0xb + -0x1 * 0x2ef + 0xd3a * 0x2) * (-parseInt(s(0x171)) / (-0x1 * -0x229 + -0x13 * -0x131 + -0x18c7)) + -parseInt(s(0x17b)) / (-0x985 * -0x1 + -0x454 * -0x6 + -0x7 * 0x511) + parseInt(s(0x19d)) / (-0x113 + -0x249a + -0xfe * -0x26) * (-parseInt(t(0x195)) / (0x3 * -0x376 + 0x10b7 + -0x1 * 0x64d)) + -parseInt(t(0x176)) / (-0x22fb + -0x15a * 0x1a + 0x382 * 0x14) + parseInt(s(0x197)) / (0x67a * -0x3 + -0xd95 + 0x210d);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * 0x2deea + -0x349fa + 0x1 * 0x9055f));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x683 * 0x1 + -0x9cc + -0x8de * -0x2);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[u(0x185)] = !![], Object[u(0x174) + u(0x175)](exports, u(0x18d), k);
const wbot_baileys_1 = require(v(0x19e) + u(0x172)), logger_1 = require(v(0x18c) + v(0x179)), l = {};
l[u(0x199)] = 0x1f4, l[v(0x18b)] = 0x32, l[u(0x194) + v(0x19c)] = !![], l[u(0x17d) + 'il'] = ![], exports[u(0x178)] = {
    'key': v(0x198) + u(0x189) + u(0x18e) + 'rs',
    'options': l,
    async 'handle'({data: f}) {
        const w = v, x = u, g = {};
        g[w(0x16e)] = w(0x19b), g[w(0x183)] = x(0x188) + x(0x18a);
        const h = g;
        try {
            const i = (0x1044 + -0x1095 + 0x51, wbot_baileys_1[x(0x186)])(f[x(0x19a)][x(0x196)]), j = f[x(0x19a)]?.[w(0x17f)] ? h[w(0x16e)] : h[x(0x183)], m = f[x(0x19a)][x(0x193)][w(0x16f)] + '@' + j, n = {};
            n[x(0x191)] = f[x(0x17e)][x(0x182) + x(0x190)];
            const o = await i[w(0x17a) + 'e'](m, n), p = {};
            p[x(0x177)] = o, p[w(0x182) + x(0x190)] = f[w(0x17e)][w(0x182) + w(0x190)], p[x(0x19a)] = f[x(0x19a)];
            const q = p;
            return q;
        } catch (r) {
            logger_1[w(0x184)][w(0x192)](x(0x17c) + w(0x18f) + x(0x173) + x(0x180) + r);
            throw new Error(r);
        }
    }
};