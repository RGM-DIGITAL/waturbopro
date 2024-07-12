'use strict';
const Y = b, Z = b;
(function (c, d) {
    const W = b, X = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(W(0xe2)) / (-0x1f60 + -0x6c * -0x26 + 0xf59 * 0x1) * (-parseInt(W(0xb4)) / (0x45f * -0x3 + -0x2514 + 0x47 * 0xb5)) + parseInt(X(0x99)) / (0x2 * 0x8e3 + 0x227b + -0x5ce * 0x9) + -parseInt(W(0xc0)) / (0xdf2 + -0x892 + -0x55c) + parseInt(X(0x8f)) / (-0x1 * -0x2207 + -0x1f09 + -0x2f9 * 0x1) + -parseInt(X(0xe0)) / (0xa * -0x2c5 + -0x20 * -0x3a + -0x28f * -0x8) + parseInt(W(0x8a)) / (0xb * 0x2d + -0xf7 * 0x5 + 0x2eb) + -parseInt(X(0xcb)) / (0x1f4 + 0xd39 * -0x2 + -0x49 * -0x56) * (-parseInt(W(0xb5)) / (-0xaed + 0x19 * -0x13f + 0x2a1d));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1f * -0x14b7 + 0x48128 + -0x144ad * -0x3));
const V = {};
V[Y(0xa6)] = !![], Object[Z(0xd6) + Z(0xde)](exports, Z(0xb1), V), exports[Y(0x90)] = exports[Y(0xb2)] = exports[Z(0x95)] = void (-0x6be + 0x1 * -0xccf + 0x2cb * 0x7);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2377 + 0x170b * -0x1 + -0xbe3);
        let h = e[f];
        return h;
    }, b(c, d);
}
const telegraf_1 = require(Y(0xc4)), socket_1 = require(Y(0xb9)), logger_1 = require(Z(0xd0) + Z(0xca)), TelegramSessions = [], initTbot = async c => {
        const a0 = Y, a1 = Z, d = {
                'uQUIN': function (e, f) {
                    return e !== f;
                },
                'vvLkI': a0(0xa4),
                'OmJma': a1(0xc1),
                'FOgqb': function (e, f) {
                    return e !== f;
                },
                'RfSnQ': a1(0x89),
                'omzFi': a0(0x93),
                'RHFcM': function (e, f) {
                    return e === f;
                },
                'TRqvL': function (e, f) {
                    return e === f;
                },
                'dfFSY': a1(0x9b),
                'juFFw': a0(0xcc),
                'pyguf': a0(0xbc),
                'gHxgz': a1(0xab),
                'RWKPW': function (e, f) {
                    return e(f);
                },
                'zZGSY': a0(0xbd),
                'lTbFR': a1(0xba),
                'nBDJm': a1(0xd7) + 'ED',
                'jtKFY': a1(0x96) + a0(0xa9) + a0(0x91) + 'n.'
            };
        return new Promise((f, g) => {
            const a2 = a1, a3 = a1;
            if (d[a2(0xbb)](d[a3(0xbe)], d[a3(0xd9)]))
                try {
                    const h = (0x4cf * -0x7 + 0x945 + 0x1864, socket_1[a3(0xdd)])(), i = c[a3(0xb3)], {tenantId: j} = c, k = new telegraf_1[(a2(0xdb))](c[a3(0x8b) + a3(0x98)], {});
                    k['id'] = c['id'];
                    const l = TelegramSessions[a2(0xa5)](o => o['id'] === c['id']);
                    d[a3(0x8d)](l, -(0x25a + 0x1917 * -0x1 + 0x16be * 0x1)) ? (k['id'] = c['id'], TelegramSessions[a3(0x8c)](k)) : d[a3(0xb0)](d[a2(0xa2)], d[a3(0x97)]) ? e[a3(0xc7)][a2(0x9f)](a3(0x90) + a3(0xce) + f) : (k['id'] = c['id'], TelegramSessions[l] = k);
                    k[a3(0xbf)]();
                    const m = {};
                    m[a3(0xcf)] = d[a2(0xae)], m[a2(0xdf)] = '', m[a2(0xa7)] = 0x0, c[a3(0xab)](m);
                    const n = {};
                    n[a2(0xd2)] = d[a3(0xdc)], n[a2(0xb7)] = c, h[a3(0xc8)](j + (a3(0x9d) + a3(0xaf)), n), logger_1[a3(0xc7)][a2(0xaa)](a3(0xa8) + a3(0xda) + i + a2(0xc2)), process[a2(0xa1)](d[a3(0xe1)], () => k[a2(0xcd)](a2(0xa4))), process[a2(0xa1)](d[a3(0x8e)], () => k[a3(0xcd)](a2(0xc1))), d[a3(0x94)](f, k);
                } catch (p) {
                    if (d[a2(0xb8)](d[a2(0x9c)], d[a3(0xc3)])) {
                        const q = {};
                        q[a2(0xcf)] = d[a2(0xd5)], q[a2(0xdf)] = '', q[a3(0xa7)] = 0x0, c[a2(0xab)](q), logger_1[a3(0xc7)][a3(0x9f)](a2(0xe3) + a3(0x9e) + a2(0xc5) + p), d[a3(0x94)](g, new Error(d[a2(0x9a)]));
                    } else
                        try {
                            const s = q[a3(0xa5)](E => E['id'] === w), t = s[s];
                            d[a2(0xb8)](s, -(0x362 + -0x1 * -0x903 + -0xf4 * 0xd)) && (w[a2(0xa1)](d[a3(0xe1)], () => t[a2(0xcd)](a3(0xa4))), x[a3(0xa1)](d[a2(0x8e)], () => t[a3(0xcd)](a3(0xc1))), y[a3(0xd1)](s, 0x1db0 + 0x89e + -0x35 * 0xb9));
                        } catch (u) {
                            A[a3(0xc7)][a3(0x9f)](a3(0x90) + a3(0xce) + u);
                        }
                }
            else {
                i[a3(0xc7)][a3(0xaa)](a2(0xad) + ':\x20' + j + (a3(0xb6) + a3(0xc9)) + k);
                const t = l[a2(0xa5)](u => u['id'] === t);
                return n[t];
            }
        });
    };
exports[Y(0x95)] = initTbot;
const getTbot = (c, d = !![]) => {
    const a4 = Y, a5 = Y;
    logger_1[a4(0xc7)][a5(0xaa)](a5(0xad) + ':\x20' + c + (a4(0xb6) + a4(0xc9)) + d);
    const e = TelegramSessions[a5(0xa5)](f => f['id'] === c);
    return TelegramSessions[e];
};
exports[Z(0xb2)] = getTbot;
const removeTbot = d => {
    const a6 = Y, a7 = Y, e = {};
    e[a6(0xd3)] = function (g, h) {
        return g !== h;
    }, e[a6(0xa0)] = a7(0xa3), e[a7(0xd8)] = a6(0xac), e[a7(0x92)] = function (g, h) {
        return g !== h;
    }, e[a6(0xc6)] = a6(0xa4), e[a6(0xd4)] = a7(0xc1);
    const f = e;
    try {
        if (f[a6(0xd3)](f[a6(0xa0)], f[a6(0xd8)])) {
            const g = TelegramSessions[a7(0xa5)](i => i['id'] === d), h = TelegramSessions[g];
            f[a6(0x92)](g, -(-0x1f5 + -0x1 * 0x128b + 0x1481)) && (process[a6(0xa1)](f[a6(0xc6)], () => h[a6(0xcd)](a6(0xa4))), process[a6(0xa1)](f[a6(0xd4)], () => h[a7(0xcd)](a6(0xc1))), TelegramSessions[a7(0xd1)](g, 0x175 + 0x1686 + 0x117 * -0x16));
        } else
            h['id'] = i['id'], j[k] = l;
    } catch (j) {
        logger_1[a6(0xc7)][a6(0x9f)](a7(0x90) + a6(0xce) + j);
    }
};
exports[Z(0x90)] = removeTbot;
function a() {
    const a8 = [
        'LEGRAM:\x20',
        'Telegraf',
        'gHxgz',
        'getIO',
        'erty',
        'qrcode',
        '3283308EWCQGa',
        'vvLkI',
        '11828mRISRZ',
        'initWbot\x20e',
        'PFoDB',
        '2972886VnNvxF',
        'tokenTeleg',
        'push',
        'RHFcM',
        'OmJma',
        '55165uGZnZA',
        'removeTbot',
        'ram\x20sessio',
        'cAZlO',
        'VOVHZ',
        'RWKPW',
        'initTbot',
        'Error\x20star',
        'juFFw',
        'ram',
        '683712ZApgNd',
        'jtKFY',
        'MBLSy',
        'zZGSY',
        ':whatsappS',
        'rror\x20|\x20Err',
        'error',
        'xClVp',
        'once',
        'dfFSY',
        'QfTrv',
        'SIGINT',
        'findIndex',
        'value',
        'retries',
        'Session\x20TE',
        'ting\x20teleg',
        'info',
        'update',
        'PvCVT',
        'whatsappId',
        'pyguf',
        'ession',
        'TRqvL',
        '__esModule',
        'getTbot',
        'name',
        '54QjeiDc',
        '9brIOek',
        '\x20|\x20checkSt',
        'session',
        'uQUIN',
        './socket',
        'PhHCc',
        'FOgqb',
        'CONNECTED',
        'gbfnN',
        'RfSnQ',
        'launch',
        '799720DyIhqg',
        'SIGTERM',
        '\x20-\x20READY\x20',
        'lTbFR',
        'telegraf',
        'or:\x20',
        'HxShJ',
        'logger',
        'emit',
        'ate:\x20',
        'ogger',
        '1154584efZkZo',
        'DIcjy',
        'stop',
        '\x20|\x20Error:\x20',
        'status',
        '../utils/l',
        'splice',
        'action',
        'RAIba',
        'wDVNP',
        'nBDJm',
        'defineProp',
        'DISCONNECT',
        'JfQin',
        'omzFi'
    ];
    a = function () {
        return a8;
    };
    return a();
}