'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x216)) / (0x1 * 0x7b5 + -0x84e * 0x1 + -0x4d * -0x2) * (parseInt(q(0x1e5)) / (0x17 * -0xf1 + 0x4f0 * -0x1 + 0x1 * 0x1a99)) + -parseInt(q(0x1f5)) / (0x6 * -0x5bb + -0xd3 * 0x7 + -0x1415 * -0x2) + parseInt(q(0x211)) / (-0x3f * 0x2b + 0x3 * -0x622 + 0xd * 0x23b) * (parseInt(p(0x21d)) / (-0xf79 + -0x10c1 * 0x2 + 0x7 * 0x700)) + -parseInt(p(0x212)) / (-0x1c0d + 0x46 * -0x41 + -0x61 * -0x79) * (-parseInt(p(0x217)) / (-0xdf * 0x24 + -0x23f1 + -0x8b * -0x7c)) + -parseInt(p(0x1fe)) / (-0x2040 + -0x1b87 + 0x3bcf) * (-parseInt(p(0x20c)) / (-0x3b9 + 0x1072 + 0xe8 * -0xe)) + -parseInt(q(0x1ee)) / (0x9a3 * -0x2 + 0x24e9 + -0x1199) * (parseInt(q(0x1f6)) / (-0xb69 + 0x1223 * -0x1 + 0x1f9 * 0xf)) + -parseInt(q(0x1f3)) / (0x4a0 + 0x33f * 0x4 + -0x1190) * (-parseInt(q(0x20e)) / (0x1b4f + 0x22a4 + -0x26 * 0x1a1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xe6b15 + -0x47e2 * -0x51 + 0x5f976));
var __importDefault = this && this[r(0x1f1) + s(0x1f4)] || function (c) {
    const t = s;
    return c && c[t(0x1e7)] ? c : { 'default': c };
};
const k = {};
k[r(0x1ed)] = !![], Object[r(0x209) + r(0x1ff)](exports, r(0x1e7), k), exports[r(0x220) + s(0x1e8)] = void (-0x1 * 0x59c + -0x31 * 0x97 + -0x1 * -0x2283);
function a() {
    const y = [
        './Messenge',
        'mpresa:\x20',
        'DISCONNECT',
        '238849lqMbaP',
        '105KeYCcI',
        'ession',
        '\x20Tenant:\x20',
        'qKKeq',
        'CHECK_INTE',
        'TYZth',
        '41570umEzyV',
        '/socket',
        'OPENING',
        'StartMesse',
        'nRDum',
        'rs/AppErro',
        'rSendMessa',
        'emit',
        '/messenger',
        'SetWebHook',
        '60:\x20',
        'Conexão\x20Me',
        'ckMessages',
        'gerBot',
        'iciada\x20|\x20E',
        '14ZWPGKV',
        'update',
        '__esModule',
        'ngerBot',
        'tenantId',
        'error',
        'ECT_WABA_3',
        '../../erro',
        'value',
        '10mtMMmh',
        'CONNECTED',
        '../../libs',
        '__importDe',
        'ssenger\x20in',
        '1085808xcGOzV',
        'fault',
        '4467309aoklEX',
        '5117585wLEFFD',
        'Url\x20360\x20|\x20',
        'RVAL',
        'gesSystem',
        'info',
        'default',
        'ERROR\x20Mess',
        'OMQhB',
        '8nUFSDR',
        'erty',
        's/logger',
        'enger:\x20che',
        'initMessen',
        'env',
        '../../util',
        'number',
        'ERROR_CONN',
        'YDbSH',
        'getIO',
        'defineProp',
        'Error:\x20',
        ':whatsappS',
        '11584827kBssUG',
        'Bot',
        '169pODVUl',
        'status',
        'logger',
        '708apnjhI',
        '251358WTrgEc'
    ];
    a = function () {
        return y;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x177 * -0x9 + 0x24 * -0x6f + 0x3 * 0xa38);
        let h = e[f];
        return h;
    }, b(c, d);
}
const AppError_1 = __importDefault(require(s(0x1ec) + r(0x222) + 'r')), messengerBot_1 = require(s(0x1f0) + s(0x1de) + s(0x20d)), socket_1 = require(s(0x1f0) + s(0x21e)), logger_1 = require(r(0x204) + r(0x200)), MessengerSendMessagesSystem_1 = __importDefault(require(r(0x213) + s(0x223) + r(0x1f9))), checkingMessenger = {}, messengerCheckMessages = async (c, d) => {
        const u = r, v = r;
        if (checkingMessenger[d])
            return;
        checkingMessenger[d] = !![];
        try {
            await (0x3 * -0x246 + 0x1777 + -0x10a5, MessengerSendMessagesSystem_1[u(0x1fb)])(c, d);
        } catch (e) {
            logger_1[v(0x210)][u(0x1ea)](v(0x1fc) + u(0x201) + u(0x1e2) + v(0x219) + d + '::', e);
        }
        checkingMessenger[d] = ![];
    }, StartMessengerBot = async f => {
        const w = s, x = s, g = {
                'OMQhB': w(0x21f),
                'TYZth': w(0x1e6),
                'YDbSH': w(0x1ef),
                'qKKeq': function (j, l, m, n, o) {
                    return j(l, m, n, o);
                },
                'nRDum': x(0x215) + 'ED'
            }, h = (-0x652 + -0xb5a + -0x46b * -0x4, socket_1[x(0x208)])(), i = {};
        i[w(0x20f)] = g[x(0x1fd)], await f[x(0x1e6)](i), h[w(0x1dd)](f[w(0x1e9)] + (x(0x20b) + x(0x218)), {
            'action': g[x(0x21c)],
            'session': f
        });
        try {
            const j = '';
            logger_1[x(0x210)][w(0x1fa)](x(0x1e1) + w(0x1f2) + w(0x1e4) + w(0x214) + f[x(0x1e9)]);
            const l = await (0x36e * 0x6 + -0x1ee7 + 0xa53, messengerBot_1[w(0x202) + w(0x1e3)])(f), m = {};
            m[x(0x20f)] = g[w(0x207)], m[w(0x205)] = j, await f[x(0x1e6)](m), g[w(0x21a)](setInterval, messengerCheckMessages, +(process[x(0x203)][x(0x21b) + w(0x1f8)] || -0x1bb * -0x9 + -0x79c + -0x9 * -0x149), l, f[w(0x1e9)]), h[x(0x1dd)](f[w(0x1e9)] + (w(0x20b) + x(0x218)), {
                'action': g[x(0x21c)],
                'session': f
            });
        } catch (n) {
            logger_1[w(0x210)][x(0x1ea)](x(0x1df) + x(0x1f7) + w(0x20a) + n);
            const o = {};
            o[x(0x20f)] = g[w(0x221)], await f[w(0x1e6)](o), h[x(0x1dd)](f[w(0x1e9)] + (w(0x20b) + x(0x218)), {
                'action': g[x(0x21c)],
                'session': f
            });
            throw new AppError_1[(w(0x1fb))](x(0x206) + w(0x1eb) + x(0x1e0) + n, -0x1055 + -0xee2 + 0x20cb);
        }
    };
exports[s(0x220) + r(0x1e8)] = StartMessengerBot;