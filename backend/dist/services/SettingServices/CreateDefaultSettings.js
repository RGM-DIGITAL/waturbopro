'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x5 * -0x20e + 0x9ff + -0x135e);
        let h = e[f];
        return h;
    }, b(c, d);
}
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0xed)) / (-0x7b3 + -0x1 * -0xa52 + -0x29e) + -parseInt(l(0x134)) / (-0xa9f + -0xc1 * -0x4 + -0x79d * -0x1) + parseInt(m(0xea)) / (0xf99 + -0x1317 + 0x381) + parseInt(m(0x113)) / (-0x25ec + -0x1b80 + 0x4170) * (parseInt(m(0x10a)) / (-0x9 * 0x3bb + -0x29 * 0x3f + 0x2baf)) + -parseInt(m(0xee)) / (0x10d3 * -0x2 + -0x4a3 * 0x6 + 0x1 * 0x3d7e) * (parseInt(m(0x10b)) / (0x22b0 + 0x4ab + 0x13aa * -0x2)) + parseInt(l(0x108)) / (-0x6 * -0x3cb + 0x1b96 + 0x2 * -0x1928) * (-parseInt(l(0x114)) / (0x1476 + 0x1285 + 0x3e5 * -0xa)) + parseInt(l(0x115)) / (-0x1 * -0x1643 + 0x7a2 * 0x5 + 0x3c63 * -0x1) * (parseInt(m(0xef)) / (0x1 * 0x110e + -0x2b4 + -0xe4f));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x77b4 + 0xb * -0x5fe3 + 0x128b72 * 0x1));
var __importDefault = this && this[n(0x13f) + n(0x135)] || function (c) {
    const p = n;
    return c && c[p(0x137)] ? c : { 'default': c };
};
const k = {};
k[n(0xf4)] = !![], Object[o(0x14b) + n(0x126)](exports, n(0x137), k);
const Setting_1 = __importDefault(require(n(0xfb) + n(0x11e))), createSetting = async (c, d, e) => {
        const q = n, r = n, f = {
                'oYiyt': function (h, i) {
                    return h(i);
                },
                'HTaXU': function (h, i) {
                    return h(i);
                },
                'nuXyY': q(0x10f) + r(0x13b) + q(0x12a)
            }, g = await Setting_1[q(0x11f)][q(0x123)]({
                'where': {
                    'tenantId': f[r(0xe8)](Number, c),
                    'key': d
                }
            });
        if (g)
            return console[r(0x11d)](r(0xff) + r(0x149) + r(0x103) + d + (q(0x138) + q(0x131) + r(0x147)) + c + '.'), g;
        try {
            const h = await Setting_1[r(0x11f)][q(0x12b)]({
                'key': d,
                'value': e,
                'createdAt': new Date(),
                'updatedAt': new Date(),
                'tenantId': f[r(0xf2)](Number, c)
            });
            return h;
        } catch (i) {
            console[r(0x100)](f[q(0x11a)], i);
            throw i;
        }
    }, CreateDefaultSettings = async c => {
        const s = o, t = o, d = {
                'COpQs': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'QZrvT': s(0x129) + 'on',
                'ExLWd': s(0xf9),
                'kFUBT': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'DvmyB': s(0x13a) + s(0x12c) + t(0x111),
                'TlpGp': t(0x13d),
                'kAccd': s(0x13a) + t(0xfa) + 't',
                'nwzLK': t(0xfe) + s(0x125) + 'ts',
                'iMYME': s(0x144) + t(0x140) + 'ts',
                'bEDDd': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'uODRF': t(0xf5) + s(0xfd),
                'CQPnb': t(0x143) + 's',
                'fJOGR': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'GKmlw': t(0xe7) + t(0x132),
                'qwtsI': t(0x112) + s(0x102) + s(0xf7) + s(0x10e) + t(0x118) + s(0xe9) + t(0x148) + t(0x139) + s(0x146) + t(0xeb),
                'lKcrO': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'BhPVr': t(0x12d) + s(0x11b),
                'ixpML': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'pTsKt': s(0x12f) + s(0x127),
                'yvsIc': t(0x122) + t(0xec),
                'WAxdi': t(0x14a) + s(0x121),
                'dKwKo': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'GWcdn': s(0x107),
                'vskkC': s(0x104) + t(0xf0),
                'Rcymv': t(0x10f) + s(0x13b) + s(0xf6) + t(0x105)
            }, e = [
                d[s(0x142)](createSetting, c, d[t(0x119)], d[s(0x141)]),
                d[t(0xf8)](createSetting, c, d[t(0x130)], d[t(0x12e)]),
                d[t(0xf8)](createSetting, c, d[t(0x145)], d[s(0x12e)]),
                d[t(0xf8)](createSetting, c, d[t(0x10c)], d[t(0x12e)]),
                d[s(0xf8)](createSetting, c, d[s(0x133)], d[t(0x12e)]),
                d[t(0x10d)](createSetting, c, d[t(0x106)], ''),
                d[s(0xf8)](createSetting, c, d[s(0xfc)], d[s(0x12e)]),
                d[t(0x101)](createSetting, c, d[s(0x109)], d[s(0x13e)]),
                d[t(0x128)](createSetting, c, d[t(0xf1)], d[t(0x141)]),
                d[t(0x117)](createSetting, c, d[s(0x11c)], d[s(0x12e)]),
                d[t(0x142)](createSetting, c, d[s(0x13c)], d[t(0x12e)]),
                d[t(0x117)](createSetting, c, d[t(0xf3)], d[t(0x141)]),
                d[t(0x110)](createSetting, c, d[s(0x116)], d[t(0x12e)]),
                d[t(0x10d)](createSetting, c, d[s(0x120)], d[t(0x141)])
            ];
        try {
            const f = await Promise[t(0x124)](e);
            return f;
        } catch (g) {
            console[t(0x100)](d[s(0x136)], g);
            throw g;
        }
    };
function a() {
    const u = [
        'nsfTicket',
        'BhPVr',
        'HTaXU',
        'WAxdi',
        'value',
        'botTicketA',
        'urações\x20pa',
        '\x20vídeo\x20est',
        'kFUBT',
        'enabled',
        'ketsChatBo',
        '../../mode',
        'CQPnb',
        'ctive',
        'NotViewAss',
        'Configuraç',
        'error',
        'fJOGR',
        's\x20de\x20voz\x20e',
        'have\x20',
        'sendMsgTra',
        'drão:',
        'uODRF',
        'spyticket',
        '144aZewRJ',
        'GKmlw',
        '55jDFsqx',
        '302099GWKgat',
        'nwzLK',
        'bEDDd',
        'ão\x20desabil',
        'Erro\x20ao\x20cr',
        'dKwKo',
        'ndefined',
        'As\x20chamada',
        '594848GpnHnx',
        '429453jaOZCw',
        '10XaqGkZ',
        'GWcdn',
        'ixpML',
        'itas\x20para\x20',
        'QZrvT',
        'nuXyY',
        'eSignature',
        'pTsKt',
        'log',
        'ls/Setting',
        'default',
        'vskkC',
        'ngAccepted',
        'userContac',
        'findOne',
        'all',
        'ignedTicke',
        'erty',
        'pMsg',
        'lKcrO',
        'userCreati',
        'uração:',
        'create',
        'ketsQueueU',
        'userDisabl',
        'TlpGp',
        'ignoreGrou',
        'DvmyB',
        '\x20para\x20o\x20te',
        'Message',
        'iMYME',
        '2225656sfAiHC',
        'fault',
        'Rcymv',
        '__esModule',
        '\x20já\x20existe',
        '\x20enviar\x20um',
        'NotViewTic',
        'iar\x20config',
        'yvsIc',
        'disabled',
        'qwtsI',
        '__importDe',
        'etsToWalle',
        'ExLWd',
        'COpQs',
        'rejectCall',
        'DirectTick',
        'kAccd',
        'a\x20mensagem',
        'nantId\x20',
        'App,\x20favor',
        'ão\x20com\x20a\x20c',
        'sendGreeti',
        'defineProp',
        'callReject',
        'oYiyt',
        'esse\x20Whats',
        '4790910bWbcAh',
        '\x20de\x20texto',
        'tWallet',
        '482280viItay',
        '6UASbbN',
        '1969594zRcAdO'
    ];
    a = function () {
        return u;
    };
    return a();
}
exports[o(0x11f)] = CreateDefaultSettings;