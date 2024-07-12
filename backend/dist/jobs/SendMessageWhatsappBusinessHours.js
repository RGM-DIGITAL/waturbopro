'use strict';
function a() {
    const y = [
        'SendMessag',
        '7ObIUTw',
        'defineProp',
        'getWbot',
        '6rxjyfh',
        'hours:\x20',
        'ar\x20message',
        '5xlgiCD',
        'erty',
        '__esModule',
        '601490UJcNxg',
        'Nbrft',
        'mplete',
        'removeOnFa',
        's.whatsapp',
        'LGOqp',
        '../utils/l',
        '11EEHNvx',
        '435104kIDZIJ',
        'logger',
        'eWhatsappB',
        'messageBus',
        'sendMessag',
        'tenant',
        '1050230dHNDqI',
        'number',
        '\x20business\x20',
        'ogger',
        '../libs/wb',
        'isGroup',
        'text',
        'inessHours',
        'usinessHou',
        '13650111EtkKLr',
        'contact',
        '5781430SFXdqk',
        'delay',
        'ot-baileys',
        '3346480SLNYOc',
        'attempts',
        'message',
        'removeOnCo',
        '1738692lGseut',
        'default',
        '.net',
        'ticket',
        'error',
        'g.us',
        'value',
        'Error\x20envi',
        'whatsappId'
    ];
    a = function () {
        return y;
    };
    return a();
}
const u = b, v = b;
(function (c, d) {
    const s = b, t = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(s(0x111)) / (0xe13 + 0x529 * 0x1 + 0x3 * -0x669) * (-parseInt(t(0x114)) / (0xe35 * 0x2 + -0x1c4f * 0x1 + -0x19)) + -parseInt(s(0x134)) / (0x1d6b + -0x48 * 0x86 + 0x848) + parseInt(s(0x130)) / (0x2 * -0x79c + -0x1 * -0x6e3 + -0x1 * -0x859) + parseInt(t(0x122)) / (-0x26bb + 0x1859 + 0xe67) * (parseInt(s(0x10e)) / (0xa5f + -0x8 * 0x371 + 0x112f)) + parseInt(s(0x10b)) / (-0xdcc + 0x15d3 * -0x1 + 0x75 * 0x4e) * (-parseInt(t(0x11c)) / (-0x3 * 0x139 + -0x13af + 0x1 * 0x1762)) + -parseInt(t(0x12b)) / (0x321 + -0x2a3 * 0xb + 0x21 * 0xc9) + -parseInt(s(0x12d)) / (0x1352 + -0x196c + -0xc * -0x83) * (-parseInt(t(0x11b)) / (-0x1 * -0x1921 + 0x13eb + -0x119 * 0x29));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x7bff3 + 0x14fc6e + 0x1af74));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x121f + 0x1c83 + -0x33 * 0xe5);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[u(0x107)] = !![], Object[v(0x10c) + v(0x112)](exports, v(0x113), k);
const wbot_baileys_1 = require(v(0x126) + v(0x12f)), logger_1 = require(u(0x11a) + v(0x125)), l = {};
l[v(0x12e)] = 0x1f4, l[v(0x131)] = 0x32, l[u(0x133) + v(0x116)] = !![], l[u(0x117) + 'il'] = ![], exports[v(0x135)] = {
    'key': u(0x10a) + v(0x11e) + u(0x12a) + 'rs',
    'options': l,
    async 'handle'({data: f}) {
        const w = v, x = u, g = {};
        g[w(0x115)] = w(0x106), g[w(0x119)] = w(0x118) + x(0x103);
        const h = g;
        try {
            const i = (-0x2486 + 0x3d9 + -0x5 * -0x689, wbot_baileys_1[x(0x10d)])(f[x(0x104)][w(0x109)]), j = f[x(0x104)]?.[w(0x127)] ? h[x(0x115)] : h[w(0x119)], m = f[x(0x104)][w(0x12c)][x(0x123)] + '@' + j, n = {};
            n[w(0x128)] = f[w(0x121)][w(0x11f) + w(0x129)];
            const o = await i[x(0x120) + 'e'](m, n), p = {};
            p[w(0x132)] = o, p[w(0x11f) + w(0x129)] = f[x(0x121)][w(0x11f) + w(0x129)], p[w(0x104)] = f[w(0x104)];
            const q = p;
            return q;
        } catch (r) {
            logger_1[x(0x11d)][x(0x105)](w(0x108) + x(0x110) + w(0x124) + x(0x10f) + r);
            throw new Error(r);
        }
    }
};