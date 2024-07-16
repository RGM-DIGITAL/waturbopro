'use strict';
const Y = b, Z = b;
(function (c, d) {
    const W = b, X = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(W(0xcd)) / (0x3af + 0x2456 * 0x1 + -0x2804) + parseInt(X(0xe6)) / (0x1a89 + -0x4be + -0x15c9) * (-parseInt(X(0xd7)) / (0x19d * 0x1 + 0x1360 + -0x14fa)) + parseInt(X(0xd4)) / (0x115 * -0x10 + 0x1740 + -0x5ec * 0x1) * (-parseInt(X(0xe4)) / (0xc9 + -0x256c + 0x24a8)) + parseInt(X(0xda)) / (0x11 * -0x21d + -0x9e2 + 0xf47 * 0x3) + parseInt(X(0xfa)) / (-0x2d * -0xc1 + 0x25fe * -0x1 + 0x418) * (parseInt(W(0xae)) / (-0x843 + 0x1ed2 + -0x1687)) + parseInt(W(0xb9)) / (0x19ce + -0x1175 + 0x7 * -0x130) + -parseInt(W(0xcb)) / (-0x943 * 0x3 + 0xde0 * -0x2 + 0x3793);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x358bf + -0x6677 + 0x358eb));
const V = {};
function a() {
    const a9 = [
        '\x20|\x20checkSt',
        'emit',
        'qoIGF',
        'Error\x20star',
        'CONNECTED',
        'once',
        'initWbot\x20e',
        '2431548UdZCVX',
        'value',
        'error',
        'OXaEP',
        'findIndex',
        'erty',
        'ram\x20sessio',
        'SIGINT',
        'defineProp',
        'ndGNe',
        'launch',
        'retries',
        'mRzVr',
        'splice',
        'ession',
        'ram',
        'DISCONNECT',
        'KMXtG',
        '1081510LhKRAs',
        'SeccM',
        '386014HtTpcj',
        'rror\x20|\x20Err',
        'YoqHF',
        'ogger',
        'tokenTeleg',
        'DwcTg',
        '\x20-\x20READY\x20',
        '2603288aqDnmc',
        'Telegraf',
        'stop',
        '559509UhfbpP',
        'VmZqm',
        'telegraf',
        '4084038RXxNDU',
        '../utils/l',
        'logger',
        'ZVSLX',
        './socket',
        'UcCou',
        'FjzAU',
        'xCHAe',
        'leihU',
        'or:\x20',
        '5eNKPGq',
        'removeTbot',
        '2wxYOZO',
        'getTbot',
        'XYlqT',
        'name',
        'update',
        'action',
        ':whatsappS',
        'jhKzw',
        'whatsappId',
        'uTDUO',
        'uhePx',
        'SIGTERM',
        'info',
        'getIO',
        'session',
        'Session\x20TE',
        'status',
        'KBtsM',
        'qrcode',
        'LEGRAM:\x20',
        '588cRHTFS',
        'QlzQL',
        'initTbot',
        'gmAyT',
        'ting\x20teleg',
        'yHlbL',
        '__esModule',
        '2008WPZkvk',
        'ate:\x20',
        '\x20|\x20Error:\x20',
        'push'
    ];
    a = function () {
        return a9;
    };
    return a();
}
V[Y(0xba)] = !![], Object[Z(0xc1) + Y(0xbe)](exports, Y(0xad), V), exports[Z(0xe5)] = exports[Z(0xe7)] = exports[Z(0xa9)] = void (-0x917 + 0x2e9 + 0x62e);
const telegraf_1 = require(Y(0xd9)), socket_1 = require(Y(0xde)), logger_1 = require(Z(0xdb) + Z(0xd0)), TelegramSessions = [], initTbot = async c => {
        const a0 = Y, a1 = Z, d = {
                'YoqHF': function (e, f) {
                    return e !== f;
                },
                'qoIGF': a0(0xc0),
                'mRzVr': a1(0xf1),
                'KMXtG': function (e, f) {
                    return e === f;
                },
                'jhKzw': function (e, f) {
                    return e === f;
                },
                'gmAyT': a1(0xf0),
                'uTDUO': a1(0xb6),
                'DwcTg': a0(0xea),
                'ZVSLX': function (e, f) {
                    return e(f);
                },
                'ndGNe': a1(0xc9) + 'ED',
                'KBtsM': a0(0xb5) + a0(0xab) + a1(0xbf) + 'n.'
            };
        return new Promise((f, g) => {
            const a3 = a0, a4 = a0, h = {
                    'leihU': function (i, j) {
                        const a2 = b;
                        return d[a2(0xcf)](i, j);
                    },
                    'VmZqm': d[a3(0xb4)],
                    'XYlqT': d[a4(0xc5)]
                };
            try {
                const i = (-0x1eac + 0x11f4 * 0x1 + 0xcb8, socket_1[a3(0xf3)])(), j = c[a3(0xe9)], {tenantId: k} = c, l = new telegraf_1[(a3(0xd5))](c[a4(0xd1) + a3(0xc8)], {});
                l['id'] = c['id'];
                const m = TelegramSessions[a3(0xbd)](p => p['id'] === c['id']);
                if (d[a3(0xca)](m, -(0x3 * -0xc7 + -0x6 * -0x1df + -0x8e4))) {
                    if (d[a4(0xed)](d[a3(0xaa)], d[a4(0xaa)]))
                        l['id'] = c['id'], TelegramSessions[a3(0xb1)](l);
                    else {
                        const q = i[a4(0xbd)](u => u['id'] === o), t = k[q];
                        h[a4(0xe2)](q, -(0x13e0 + -0x2 * -0xd8e + -0x2efb)) && (o[a4(0xb7)](h[a4(0xd8)], () => t[a4(0xd6)](a3(0xc0))), p[a3(0xb7)](h[a3(0xe8)], () => t[a4(0xd6)](a4(0xf1))), q[a4(0xc6)](q, -0xf7c + 0x2c * -0x33 + -0x1 * -0x1841));
                    }
                } else
                    l['id'] = c['id'], TelegramSessions[m] = l;
                l[a3(0xc3)]();
                const n = {};
                n[a4(0xf6)] = d[a3(0xef)], n[a3(0xf8)] = '', n[a3(0xc4)] = 0x0, c[a3(0xea)](n);
                const o = {};
                o[a4(0xeb)] = d[a3(0xd2)], o[a4(0xf4)] = c, i[a3(0xb3)](k + (a4(0xec) + a4(0xc7)), o), logger_1[a4(0xdc)][a3(0xf2)](a4(0xf5) + a3(0xf9) + j + a4(0xd3)), process[a4(0xb7)](d[a4(0xb4)], () => l[a3(0xd6)](a3(0xc0))), process[a3(0xb7)](d[a4(0xc5)], () => l[a4(0xd6)](a4(0xf1))), d[a3(0xdd)](f, l);
            } catch (q) {
                const r = {};
                r[a3(0xf6)] = d[a3(0xc2)], r[a4(0xf8)] = '', r[a3(0xc4)] = 0x0, c[a3(0xea)](r), logger_1[a3(0xdc)][a3(0xbb)](a4(0xb8) + a3(0xce) + a3(0xe3) + q), d[a4(0xdd)](g, new Error(d[a4(0xf7)]));
            }
        });
    };
exports[Y(0xa9)] = initTbot;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2f * 0x7 + 0x1c * -0x6 + -0x1 * -0x8);
        let h = e[f];
        return h;
    }, b(c, d);
}
const getTbot = (c, d = !![]) => {
    const a5 = Y, a6 = Y;
    logger_1[a5(0xdc)][a5(0xf2)](a5(0xee) + ':\x20' + c + (a5(0xb2) + a5(0xaf)) + d);
    const e = TelegramSessions[a5(0xbd)](f => f['id'] === c);
    return TelegramSessions[e];
};
exports[Z(0xe7)] = getTbot;
const removeTbot = d => {
    const a7 = Y, a8 = Z, e = {};
    e[a7(0xfb)] = a8(0xc0), e[a8(0xe1)] = a8(0xf1), e[a7(0xdf)] = function (g, h) {
        return g !== h;
    }, e[a8(0xac)] = a7(0xcc), e[a8(0xbc)] = a7(0xe0);
    const f = e;
    try {
        const g = TelegramSessions[a8(0xbd)](i => i['id'] === d), h = TelegramSessions[g];
        f[a8(0xdf)](g, -(0x144d + -0x1904 + 0x4b8)) && (process[a8(0xb7)](f[a8(0xfb)], () => h[a8(0xd6)](a7(0xc0))), process[a8(0xb7)](f[a7(0xe1)], () => h[a8(0xd6)](a7(0xf1))), TelegramSessions[a8(0xc6)](g, -0x353 * 0x6 + -0x69d * -0x1 + 0xd56));
    } catch (i) {
        f[a8(0xdf)](f[a7(0xac)], f[a8(0xbc)]) ? logger_1[a8(0xdc)][a7(0xbb)](a7(0xe5) + a8(0xb0) + i) : (i[a8(0xb7)](f[a8(0xfb)], () => o[a8(0xd6)](a8(0xc0))), k[a7(0xb7)](f[a7(0xe1)], () => o[a8(0xd6)](a8(0xf1))), m[a7(0xc6)](n, 0x12c5 + -0x301 * 0xa + -0x4e * -0x25));
    }
};
exports[Y(0xe5)] = removeTbot;