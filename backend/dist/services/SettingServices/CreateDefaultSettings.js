'use strict';
const n = b, o = b;
function a() {
    const u = [
        'userContac',
        'DirectTick',
        '__importDe',
        '../../mode',
        'eSignature',
        'userCreati',
        'Erro\x20ao\x20cr',
        'skHRs',
        'default',
        'ngAccepted',
        'log',
        'botTicketA',
        's\x20de\x20voz\x20e',
        '4kkhbex',
        'TamzG',
        'JQZOr',
        'error',
        'have\x20',
        'ignedTicke',
        'pMsg',
        '\x20de\x20texto',
        'etsToWalle',
        'disabled',
        'fault',
        'VtGwI',
        'OSSrN',
        'Configuraç',
        'rejectCall',
        'iar\x20config',
        'XTiFT',
        '350577ReASrZ',
        'nsfTicket',
        'defineProp',
        'ZVipY',
        '14KgOQow',
        'lkfWs',
        'ão\x20com\x20a\x20c',
        'LKTMw',
        'nantId\x20',
        'userDisabl',
        'OLkxh',
        'ketsQueueU',
        'HTRwT',
        'gVlua',
        'all',
        'sendMsgTra',
        'iLaQK',
        '3751254DtvDCc',
        'drão:',
        'Ltvhj',
        'App,\x20favor',
        'PdYoI',
        '__esModule',
        'create',
        '\x20já\x20existe',
        'uUXcD',
        'NotViewTic',
        'JMWes',
        'esse\x20Whats',
        'As\x20chamada',
        'ignoreGrou',
        '\x20vídeo\x20est',
        'TGpAW',
        'findOne',
        '359695Owlkfh',
        '583984ssxPaa',
        'enabled',
        'GZtVT',
        'pvthI',
        'NotViewAss',
        'PzgJv',
        'UjuYI',
        'ZSQLd',
        'callReject',
        'Message',
        '5808240ClRFBv',
        '1397744fZZEYT',
        'HcVdP',
        'aURzH',
        'sendGreeti',
        'dItMJ',
        'value',
        'itas\x20para\x20',
        '\x20enviar\x20um',
        'ls/Setting',
        'ketsChatBo',
        'spyticket',
        'ndefined',
        'uração:',
        'urações\x20pa',
        'rKxGJ',
        'ctive',
        'tWallet',
        'erty',
        '1485652kNnRkU',
        'a\x20mensagem',
        'ão\x20desabil',
        '\x20para\x20o\x20te'
    ];
    a = function () {
        return u;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2 * 0xc77 + 0x1340 + 0x6ce);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0x126)) / (0xfcf + 0x22cb * -0x1 + 0x12fd * 0x1) + -parseInt(m(0x154)) / (0x1d31 + -0x242c + 0x1 * 0x6fd) * (-parseInt(m(0x165)) / (0x15b4 + -0x2236 + -0x281 * -0x5)) + parseInt(m(0x143)) / (-0x258a + 0x58c + 0x2002) + parseInt(m(0x125)) / (0x66 * -0x11 + 0x11a5 + 0x3 * -0x39e) + parseInt(m(0x176)) / (-0x193d + -0x27d + -0xc * -0x250) + parseInt(l(0x169)) / (0x35 * 0x6e + 0x90c + -0x1fcb) * (parseInt(m(0x131)) / (0x2e * -0x78 + -0x223c + 0x3 * 0x129c)) + -parseInt(m(0x130)) / (0x251 * 0x2 + 0x11a1 + -0x163a);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x12985 + -0x93f4c + 0x743d5 * 0x2));
var __importDefault = this && this[n(0x149) + o(0x15e)] || function (c) {
    const p = n;
    return c && c[p(0x17b)] ? c : { 'default': c };
};
const k = {};
k[n(0x136)] = !![], Object[o(0x167) + n(0x142)](exports, n(0x17b), k);
const Setting_1 = __importDefault(require(n(0x14a) + o(0x139))), createSetting = async (c, d, e) => {
        const q = n, r = n, f = {
                'dItMJ': function (h, i) {
                    return h(i);
                },
                'skHRs': function (h, i) {
                    return h(i);
                },
                'HcVdP': q(0x14d) + q(0x163) + r(0x13d)
            }, g = await Setting_1[q(0x14f)][q(0x124)]({
                'where': {
                    'tenantId': f[r(0x135)](Number, c),
                    'key': d
                }
            });
        if (g)
            return console[q(0x151)](q(0x161) + r(0x16b) + r(0x158) + d + (r(0x17d) + r(0x146) + q(0x16d)) + c + '.'), g;
        try {
            const h = await Setting_1[q(0x14f)][r(0x17c)]({
                'key': d,
                'value': e,
                'createdAt': new Date(),
                'updatedAt': new Date(),
                'tenantId': f[q(0x14e)](Number, c)
            });
            return h;
        } catch (i) {
            console[q(0x157)](f[q(0x132)], i);
            throw i;
        }
    }, CreateDefaultSettings = async c => {
        const s = o, t = n, d = {
                'GZtVT': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'LKTMw': s(0x14c) + 'on',
                'lkfWs': s(0x127),
                'HTRwT': t(0x17f) + s(0x170) + t(0x13c),
                'TGpAW': s(0x15d),
                'aURzH': s(0x17f) + s(0x13a) + 't',
                'PzgJv': t(0x12a) + s(0x159) + 'ts',
                'UjuYI': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'iLaQK': t(0x148) + s(0x15c) + 'ts',
                'Ltvhj': t(0x152) + s(0x140),
                'uUXcD': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'JQZOr': s(0x162) + 's',
                'XTiFT': s(0x12e) + t(0x12f),
                'PdYoI': s(0x120) + s(0x153) + s(0x122) + t(0x145) + t(0x137) + t(0x181) + s(0x179) + t(0x138) + t(0x144) + t(0x15b),
                'rKxGJ': t(0x16e) + t(0x14b),
                'gVlua': t(0x121) + s(0x15a),
                'OLkxh': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'TamzG': s(0x147) + t(0x141),
                'pvthI': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'ZVipY': s(0x134) + s(0x150),
                'OSSrN': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'VtGwI': t(0x13b),
                'ZSQLd': t(0x174) + t(0x166),
                'JMWes': s(0x14d) + t(0x163) + s(0x13e) + t(0x177)
            }, e = [
                d[t(0x128)](createSetting, c, d[t(0x16c)], d[s(0x16a)]),
                d[t(0x128)](createSetting, c, d[s(0x171)], d[t(0x123)]),
                d[s(0x128)](createSetting, c, d[t(0x133)], d[s(0x123)]),
                d[s(0x128)](createSetting, c, d[t(0x12b)], d[t(0x123)]),
                d[s(0x12c)](createSetting, c, d[t(0x175)], d[t(0x123)]),
                d[t(0x128)](createSetting, c, d[s(0x178)], ''),
                d[s(0x17e)](createSetting, c, d[s(0x156)], d[t(0x123)]),
                d[t(0x12c)](createSetting, c, d[s(0x164)], d[t(0x17a)]),
                d[s(0x12c)](createSetting, c, d[t(0x13f)], d[t(0x16a)]),
                d[s(0x128)](createSetting, c, d[t(0x172)], d[t(0x123)]),
                d[s(0x16f)](createSetting, c, d[s(0x155)], d[s(0x123)]),
                d[t(0x129)](createSetting, c, d[s(0x168)], d[t(0x16a)]),
                d[t(0x160)](createSetting, c, d[t(0x15f)], d[s(0x123)]),
                d[s(0x128)](createSetting, c, d[t(0x12d)], d[t(0x16a)])
            ];
        try {
            const f = await Promise[t(0x173)](e);
            return f;
        } catch (g) {
            console[s(0x157)](d[t(0x180)], g);
            throw g;
        }
    };
exports[o(0x14f)] = CreateDefaultSettings;