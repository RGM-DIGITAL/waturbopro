'use strict';
const s = b, t = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x118d + 0x2001 * -0x1 + 0x4 * 0xc7d);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(q(0xac)) / (0x13d * -0xb + -0x1d01 + 0x7 * 0x617) * (-parseInt(r(0xa0)) / (-0x375 * 0x5 + -0x10de + -0x5 * -0x6d5)) + -parseInt(r(0x89)) / (-0x1b56 + 0x109 * 0x1 + 0x1a50) * (parseInt(q(0x91)) / (0x20c3 + -0xced * -0x3 + -0x4786 * 0x1)) + parseInt(q(0x6e)) / (0x309 * 0x1 + -0x1017 + -0xd13 * -0x1) * (parseInt(r(0x8c)) / (-0x1 * -0xd63 + -0x18a * -0x3 + -0x11fb * 0x1)) + -parseInt(r(0x87)) / (0x7c9 + -0x3ef * -0x5 + -0x1 * 0x1b6d) + parseInt(q(0xab)) / (-0x1849 + 0x2 * 0x65f + 0xb93 * 0x1) * (parseInt(r(0x96)) / (-0x1333 + -0x2a2 + 0x15de)) + parseInt(r(0x66)) / (0xc1d + 0x14a4 + -0x19 * 0x14f) * (-parseInt(q(0x82)) / (0x1c05 + -0x12cb * -0x2 + -0x4190)) + parseInt(q(0x72)) / (0x1 * 0x1a87 + -0x10a3 * -0x1 + -0x2b1e);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x4eabd * 0x1 + 0x58d5b + -0x375de));
function a() {
    const z = [
        'error',
        'UrlWabaWeb',
        '1254JvUJhU',
        'okUrl',
        'StartWaba3',
        'RVAL',
        '/socket',
        '4384975kMmQKI',
        'uMKXr',
        '246vhaMoG',
        's/logger',
        'ERROR:\x20che',
        '223602itAxCp',
        'Conexão\x20Wa',
        'CONNECTED',
        'ba\x20360\x20ini',
        'Hook',
        '14988fRlMwC',
        'DNAPE',
        './SetWebHo',
        'number',
        '../../util',
        '9702SNsctC',
        'ECT_WABA_3',
        'fault',
        'url',
        'Url\x20360\x20|\x20',
        '__esModule',
        '60:\x20',
        '../../erro',
        'ession',
        '__importDe',
        '2aPgSsv',
        'getIO',
        'presa:\x20',
        'rs/AppErro',
        ':whatsappS',
        'WEvSB',
        '../../libs',
        'ZWjVb',
        'Error:\x20',
        'defineProp',
        'update',
        '4720aQmdet',
        '527117XOAvoi',
        '56310JrzsBr',
        'tenantId',
        'logger',
        'tokenAPI',
        './Waba360S',
        'OPENING',
        'sSystem',
        'status',
        '5wsncBC',
        'value',
        'OBMDf',
        'ERROR_CONN',
        '22665180gcbWcZ',
        'ciada\x20|\x20Em',
        'env',
        'default',
        'ckMessages',
        'SetWebHook',
        'emit',
        'apiKey',
        'erty',
        'DISCONNECT',
        'CHECK_INTE',
        'endMessage',
        'info',
        '\x20Tenant:\x20'
    ];
    a = function () {
        return z;
    };
    return a();
}
var __importDefault = this && this[s(0x9f) + s(0x98)] || function (c) {
    const u = t;
    return c && c[u(0x9b)] ? c : { 'default': c };
};
const k = {};
k[t(0x6f)] = !![], Object[t(0xa9) + t(0x7a)](exports, s(0x9b), k), exports[s(0x84) + '60'] = void (0x1b6d + -0x5 * -0x7a7 + -0x41b0);
const AppError_1 = __importDefault(require(s(0x9d) + t(0xa3) + 'r')), socket_1 = require(s(0xa6) + s(0x86)), logger_1 = require(s(0x95) + s(0x8a)), SetWebHookUrl_1 = __importDefault(require(s(0x93) + s(0x83))), Waba360SendMessagesSystem_1 = __importDefault(require(s(0x6a) + t(0x7d) + t(0x6c))), checkingWaba360 = {}, checkMessagesWaba360 = async c => {
        const v = t, w = s;
        if (checkingWaba360[c[v(0x67)]])
            return;
        checkingWaba360[c[v(0x67)]] = !![];
        try {
            await (-0x2047 + -0xa2b + 0x1 * 0x2a72, Waba360SendMessagesSystem_1[w(0x75)])(c);
        } catch (d) {
            logger_1[v(0x68)][v(0x80)](v(0x8b) + v(0x76) + w(0x7f) + c[v(0x67)] + '::', d);
        }
        checkingWaba360[c[w(0x67)]] = ![];
    }, StartWaba360 = async g => {
        const x = t, y = s, h = {
                'DNAPE': x(0x6b),
                'OBMDf': x(0xaa),
                'uMKXr': x(0x8e),
                'ZWjVb': function (l, m, n, o) {
                    return l(m, n, o);
                },
                'WEvSB': y(0x7b) + 'ED'
            }, i = (0xc73 * -0x2 + -0x517 + -0x1 * -0x1dfd, socket_1[x(0xa1)])(), j = {};
        j[y(0x6d)] = h[y(0x92)], await g[x(0xaa)](j), i[y(0x78)](g[x(0x67)] + (y(0xa4) + y(0x9e)), {
            'action': h[y(0x70)],
            'session': g
        });
        try {
            const l = {};
            l[x(0x99)] = g[y(0x81) + x(0x90)] || '', l[y(0x79)] = g[y(0x69)], await (0x1108 + -0xf6e * -0x1 + -0x1e * 0x115, SetWebHookUrl_1[x(0x75)])(l);
            const m = '';
            logger_1[x(0x68)][y(0x7e)](y(0x8d) + y(0x8f) + y(0x73) + x(0xa2) + g[y(0x67)]);
            const n = {};
            n[x(0x6d)] = h[y(0x88)], n[x(0x94)] = m, await g[y(0xaa)](n), h[y(0xa7)](setInterval, checkMessagesWaba360, +(process[x(0x74)][x(0x7c) + x(0x85)] || -0x726 + 0x36 * -0x95 + 0x2 * 0x1d0e), g), i[y(0x78)](g[y(0x67)] + (y(0xa4) + x(0x9e)), {
                'action': h[y(0x70)],
                'session': g
            });
        } catch (o) {
            logger_1[y(0x68)][y(0x80)](x(0x77) + y(0x9a) + y(0xa8) + o);
            const p = {};
            p[x(0x6d)] = h[x(0xa5)], await g[y(0xaa)](p), i[y(0x78)](g[x(0x67)] + (y(0xa4) + y(0x9e)), {
                'action': h[y(0x70)],
                'session': g
            });
            throw new AppError_1[(y(0x75))](y(0x71) + y(0x97) + x(0x9c) + o, -0xc41 + -0x1 * 0x15ca + 0x239f);
        }
    };
exports[s(0x84) + '60'] = StartWaba360;