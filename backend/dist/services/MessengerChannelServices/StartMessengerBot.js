'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x1e2)) / (0x4 * -0x340 + 0x57e * -0x4 + -0x7 * -0x4ff) * (parseInt(q(0x216)) / (-0x1 * 0xf38 + -0x8bd * 0x4 + 0x322e)) + parseInt(p(0x1f3)) / (0x2c8 + -0x190f + -0x2 * -0xb25) * (parseInt(q(0x211)) / (0x660 * -0x6 + 0x3 * 0x7b3 + -0x1 * -0xf2b)) + -parseInt(q(0x1ea)) / (0x574 + -0x597 + -0x4 * -0xa) * (-parseInt(p(0x1f0)) / (-0x155d + -0xd * -0x107 + 0x2 * 0x404)) + -parseInt(p(0x1db)) / (-0x6a * 0x35 + -0x1b8e + 0x3187) * (parseInt(q(0x1d8)) / (0x1679 * 0x1 + 0xd45 * 0x1 + -0x23b6)) + -parseInt(q(0x1e0)) / (-0x2558 + 0xe89 + 0x16d8) + parseInt(q(0x1eb)) / (0x126f + 0x1e6b * 0x1 + 0xb0 * -0x47) + -parseInt(p(0x20e)) / (0x5c0 + 0x1e23 + -0x8f6 * 0x4) * (parseInt(p(0x20d)) / (0x17c8 + -0x265 * 0x7 + 0x77 * -0xf));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1714b * 0x8 + 0x142376 + -0x1433a7));
var __importDefault = this && this[r(0x1d7) + s(0x209)] || function (c) {
    const t = r;
    return c && c[t(0x1ec)] ? c : { 'default': c };
};
const k = {};
function a() {
    const y = [
        'gesSystem',
        '../../util',
        'ECT_WABA_3',
        'Error:\x20',
        'SetWebHook',
        'ijzeZ',
        'info',
        'SNXeF',
        'fault',
        '../../libs',
        'number',
        'iciada\x20|\x20E',
        '1548wLWjhI',
        '25311CgxRef',
        '/messenger',
        'ckMessages',
        '4PPEvbz',
        'defineProp',
        'update',
        's/logger',
        'env',
        '1268mNpbGx',
        'CHECK_INTE',
        'default',
        'CONNECTED',
        'ssenger\x20in',
        'error',
        'emit',
        '__importDe',
        '19176TnbHhj',
        'ERROR_CONN',
        'value',
        '3101bcFsmc',
        ':whatsappS',
        'Bot',
        'RVAL',
        'ession',
        '6628914CXBdRF',
        'PdJCe',
        '437pkMkbE',
        '/socket',
        'rSendMessa',
        'LUAag',
        'mpresa:\x20',
        'ERROR\x20Mess',
        'enger:\x20che',
        'xCpOi',
        '27260NZqvZo',
        '5827220EJpzuE',
        '__esModule',
        'gerBot',
        '\x20Tenant:\x20',
        'getIO',
        '1230mLgrpM',
        'initMessen',
        'tenantId',
        '4272267pQkqop',
        'status',
        'OPENING',
        'erty',
        'Conexão\x20Me',
        './Messenge',
        'logger',
        '60:\x20',
        'StartMesse',
        'Url\x20360\x20|\x20',
        'ngerBot',
        'rs/AppErro',
        '../../erro',
        'DISCONNECT'
    ];
    a = function () {
        return y;
    };
    return a();
}
k[s(0x1da)] = !![], Object[r(0x212) + s(0x1f6)](exports, r(0x1ec), k), exports[s(0x1fb) + r(0x1fd)] = void (0xf94 * -0x1 + 0xe6 * 0x5 + 0xb16);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xd * 0x2 + -0x181a + 0x1f * 0xd7);
        let h = e[f];
        return h;
    }, b(c, d);
}
const AppError_1 = __importDefault(require(s(0x1ff) + s(0x1fe) + 'r')), messengerBot_1 = require(r(0x20a) + s(0x20f) + s(0x1dd)), socket_1 = require(r(0x20a) + s(0x1e3)), logger_1 = require(s(0x202) + r(0x214)), MessengerSendMessagesSystem_1 = __importDefault(require(r(0x1f8) + r(0x1e4) + s(0x201))), checkingMessenger = {}, messengerCheckMessages = async (c, d) => {
        const u = r, v = s;
        if (checkingMessenger[d])
            return;
        checkingMessenger[d] = !![];
        try {
            await (0x165 + 0x1 * -0x356 + -0x1 * -0x1f1, MessengerSendMessagesSystem_1[u(0x218)])(c, d);
        } catch (e) {
            logger_1[u(0x1f9)][v(0x1d5)](v(0x1e7) + u(0x1e8) + v(0x210) + v(0x1ee) + d + '::', e);
        }
        checkingMessenger[d] = ![];
    }, StartMessengerBot = async f => {
        const w = s, x = r, g = {
                'SNXeF': w(0x1f5),
                'xCpOi': w(0x213),
                'PdJCe': x(0x219),
                'LUAag': function (j, l, m, n, o) {
                    return j(l, m, n, o);
                },
                'ijzeZ': w(0x200) + 'ED'
            }, h = (-0x1baf + 0xa90 + 0x1e7 * 0x9, socket_1[w(0x1ef)])(), i = {};
        i[x(0x1f4)] = g[x(0x208)], await f[w(0x213)](i), h[x(0x1d6)](f[w(0x1f2)] + (w(0x1dc) + x(0x1df)), {
            'action': g[x(0x1e9)],
            'session': f
        });
        try {
            const j = '';
            logger_1[x(0x1f9)][w(0x207)](x(0x1f7) + x(0x21a) + w(0x20c) + w(0x1e6) + f[x(0x1f2)]);
            const l = await (0x1 * 0x209 + -0x43 * -0x8b + -0x16 * 0x1bf, messengerBot_1[x(0x1f1) + x(0x1ed)])(f), m = {};
            m[w(0x1f4)] = g[w(0x1e1)], m[w(0x20b)] = j, await f[x(0x213)](m), g[w(0x1e5)](setInterval, messengerCheckMessages, +(process[w(0x215)][w(0x217) + w(0x1de)] || -0x1bb1 + -0x2396 * 0x1 + 0x52cf), l, f[w(0x1f2)]), h[w(0x1d6)](f[x(0x1f2)] + (x(0x1dc) + x(0x1df)), {
                'action': g[w(0x1e9)],
                'session': f
            });
        } catch (n) {
            logger_1[w(0x1f9)][w(0x1d5)](w(0x205) + w(0x1fc) + w(0x204) + n);
            const o = {};
            o[w(0x1f4)] = g[w(0x206)], await f[w(0x213)](o), h[x(0x1d6)](f[w(0x1f2)] + (x(0x1dc) + x(0x1df)), {
                'action': g[x(0x1e9)],
                'session': f
            });
            throw new AppError_1[(x(0x218))](x(0x1d9) + w(0x203) + w(0x1fa) + n, 0xca6 + -0x1c39 + 0x1 * 0x1127);
        }
    };
exports[s(0x1fb) + r(0x1fd)] = StartMessengerBot;