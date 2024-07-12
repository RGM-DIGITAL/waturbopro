'use strict';
const s = b, t = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(q(0x14f)) / (0x80 * 0x14 + 0x11 * 0x139 + -0x4 * 0x7b2) * (-parseInt(r(0x161)) / (0x36c * -0x5 + -0xa54 + 0x1b72)) + -parseInt(r(0x14e)) / (0x304 * 0x7 + 0x5aa + -0x1ac3) * (parseInt(q(0x159)) / (-0x1a24 + 0x2148 + -0x720)) + -parseInt(q(0x172)) / (-0x4a * 0x7a + -0x1d1a + 0x35 * 0x137) * (-parseInt(q(0x15d)) / (-0xdfc + 0x887 + -0x1 * -0x57b)) + parseInt(q(0x16a)) / (0x84c + -0x1f81 + 0x173c) * (-parseInt(q(0x174)) / (0xe90 * -0x1 + 0x1b97 + -0x1 * 0xcff)) + -parseInt(q(0x164)) / (0xab * 0x9 + -0x522 + -0xd8) * (parseInt(r(0x156)) / (-0x203a + -0xe01 + 0x73 * 0x67)) + -parseInt(r(0x141)) / (0x9c1 + -0x1 * -0x21fb + -0x2bb1) * (-parseInt(q(0x14c)) / (0x1 * 0x7b4 + -0x2062 * -0x1 + -0x280a)) + parseInt(q(0x176)) / (0x1716 + 0xa21 + 0x212a * -0x1) * (parseInt(r(0x15c)) / (-0x4 * -0x356 + 0x1 * -0x1607 + 0x8bd * 0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x25feb + -0xa683c + 0xed768));
function a() {
    const z = [
        'DISCONNECT',
        './SetWebHo',
        '../../erro',
        '13882jrKyrS',
        'ERROR_CONN',
        'Hook',
        '9SWaYoy',
        'defineProp',
        'fault',
        'ession',
        'rs/AppErro',
        'IGuxS',
        '329tLRjxB',
        'erty',
        '/socket',
        'value',
        'tenantId',
        '60:\x20',
        'ckMessages',
        'url',
        '256235UXeSvK',
        '__importDe',
        '144512hkHGvl',
        'Error:\x20',
        '11565814vLFFWa',
        'tokenAPI',
        'vNWmG',
        'StartWaba3',
        'sSystem',
        'OVSOe',
        'ciada\x20|\x20Em',
        'ERROR:\x20che',
        'update',
        'CONNECTED',
        'apiKey',
        'env',
        'getIO',
        'number',
        'gZgoA',
        'UrlWabaWeb',
        'okUrl',
        'Conexão\x20Wa',
        'endMessage',
        'status',
        '4957183yZIqQa',
        '__esModule',
        's/logger',
        'eJfnr',
        'CHECK_INTE',
        'RVAL',
        'Url\x20360\x20|\x20',
        'emit',
        'ba\x20360\x20ini',
        'ECT_WABA_3',
        'error',
        '12MKjzHw',
        '\x20Tenant:\x20',
        '6582bhmVQO',
        '20PaIfvl',
        'presa:\x20',
        '../../util',
        'info',
        'logger',
        '../../libs',
        'OPENING',
        '2433110mAaLyN',
        './Waba360S',
        'SetWebHook',
        '172GLQixU',
        'default',
        ':whatsappS',
        '14vafaCW',
        '18OqTiTM'
    ];
    a = function () {
        return z;
    };
    return a();
}
var __importDefault = this && this[s(0x173) + s(0x166)] || function (c) {
    const u = s;
    return c && c[u(0x142)] ? c : { 'default': c };
};
const k = {};
k[s(0x16d)] = !![], Object[t(0x165) + t(0x16b)](exports, s(0x142), k), exports[t(0x130) + '60'] = void (-0x1 * -0xaf4 + -0x192b + 0xe37);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2392 * 0x1 + 0xa0b + 0x1ab6);
        let h = e[f];
        return h;
    }, b(c, d);
}
const AppError_1 = __importDefault(require(s(0x160) + t(0x168) + 'r')), socket_1 = require(t(0x154) + s(0x16c)), logger_1 = require(t(0x151) + s(0x143)), SetWebHookUrl_1 = __importDefault(require(s(0x15f) + s(0x13d))), Waba360SendMessagesSystem_1 = __importDefault(require(t(0x157) + s(0x13f) + t(0x131))), checkingWaba360 = {}, checkMessagesWaba360 = async c => {
        const v = t, w = s;
        if (checkingWaba360[c[v(0x16e)]])
            return;
        checkingWaba360[c[v(0x16e)]] = !![];
        try {
            await (-0xb1d + 0x79 * 0x18 + -0x3b, Waba360SendMessagesSystem_1[w(0x15a)])(c);
        } catch (d) {
            logger_1[w(0x153)][v(0x14b)](w(0x134) + w(0x170) + w(0x14d) + c[v(0x16e)] + '::', d);
        }
        checkingWaba360[c[v(0x16e)]] = ![];
    }, StartWaba360 = async g => {
        const x = t, y = s, h = {
                'OVSOe': x(0x155),
                'IGuxS': y(0x135),
                'vNWmG': y(0x136),
                'eJfnr': function (l, m, n, o) {
                    return l(m, n, o);
                },
                'gZgoA': y(0x15e) + 'ED'
            }, i = (-0x2074 + 0x8c + 0x1fe8, socket_1[y(0x139)])(), j = {};
        j[x(0x140)] = h[x(0x132)], await g[y(0x135)](j), i[x(0x148)](g[x(0x16e)] + (x(0x15b) + y(0x167)), {
            'action': h[x(0x169)],
            'session': g
        });
        try {
            const l = {};
            l[y(0x171)] = g[y(0x13c) + x(0x163)] || '', l[y(0x137)] = g[x(0x177)], await (-0x1ebd + 0x683 + -0x376 * -0x7, SetWebHookUrl_1[y(0x15a)])(l);
            const m = '';
            logger_1[x(0x153)][y(0x152)](y(0x13e) + x(0x149) + y(0x133) + x(0x150) + g[y(0x16e)]);
            const n = {};
            n[y(0x140)] = h[x(0x12f)], n[x(0x13a)] = m, await g[y(0x135)](n), h[x(0x144)](setInterval, checkMessagesWaba360, +(process[x(0x138)][x(0x145) + y(0x146)] || 0x1 * -0xc23 + -0x16 * 0x112 + -0x5 * -0xb0b), g), i[x(0x148)](g[y(0x16e)] + (x(0x15b) + x(0x167)), {
                'action': h[x(0x169)],
                'session': g
            });
        } catch (o) {
            logger_1[x(0x153)][y(0x14b)](x(0x158) + y(0x147) + x(0x175) + o);
            const p = {};
            p[x(0x140)] = h[x(0x13b)], await g[y(0x135)](p), i[x(0x148)](g[y(0x16e)] + (y(0x15b) + y(0x167)), {
                'action': h[y(0x169)],
                'session': g
            });
            throw new AppError_1[(x(0x15a))](y(0x162) + y(0x14a) + y(0x16f) + o, 0x1 * -0x4c9 + 0x10c4 * 0x1 + 0x1 * -0xa67);
        }
    };
exports[s(0x130) + '60'] = StartWaba360;