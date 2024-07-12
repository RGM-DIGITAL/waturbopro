'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x186)) / (0x2 * 0x137a + 0x2 * 0x4eb + -0xb5 * 0x45) + parseInt(p(0x17a)) / (-0x2 * 0xecd + 0x412 * -0x8 + 0x3e2c) + parseInt(p(0x18b)) / (-0xdfd * -0x2 + 0x21f7 + -0x3dee) + parseInt(q(0x185)) / (-0x1b83 + -0x20eb + 0x3c72) + parseInt(q(0x1a1)) / (-0x23e6 + -0x19eb * 0x1 + -0xa * -0x62f) + parseInt(q(0x1a4)) / (-0x66 * -0x2 + 0xc5e * 0x1 + -0x349 * 0x4) + -parseInt(p(0x18f)) / (0x1fe7 + -0xbe4 * -0x1 + -0x15e2 * 0x2);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x561 * 0xef + 0xcc5b * -0x1 + 0xe48b * 0x11));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x190e + -0x2508 + 0xd70);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[r(0x18e) + s(0x17c)] || function (c) {
    const t = s;
    return c && c[t(0x17e)] ? c : { 'default': c };
};
function a() {
    const y = [
        '439128xYwNGi',
        'MessageLis',
        'fault',
        'ECT_INSTAG',
        '__esModule',
        'mpresa:\x20',
        'emit',
        'mSendMessa',
        'rs/AppErro',
        'pdYWJ',
        '/InstaBot',
        '1734348NmzdRn',
        '88938jPxHYi',
        '\x20|\x20Error:\x20',
        '\x20Tenant:\x20',
        'iciada\x20|\x20E',
        'logger',
        '2438445wKUUFP',
        'tenantId',
        '../../util',
        '__importDe',
        '16340156RgFYUm',
        'stagram\x20in',
        'SzmOl',
        '../../libs',
        's/logger',
        'getIO',
        './Instagra',
        '../../erro',
        '/socket',
        'DISCONNECT',
        'CONNECTED',
        ':whatsappS',
        'tPxMP',
        'env',
        'gesSystem',
        'ckMessages',
        'initInstaB',
        'RVAL',
        '4330495KLNFxg',
        'Conexão\x20In',
        'status',
        '3159036WBsXOY',
        'info',
        'ession',
        'default',
        'tener',
        'error',
        'ERROR_CONN',
        'ner',
        'value',
        './InstaBot',
        'CHECK_INTE',
        'GOOZh',
        'ERROR:\x20che',
        'OPENING',
        'InstaBotMe',
        'defineProp',
        'StartInsta',
        'RAM:\x20',
        'ssageListe',
        'xFMeh',
        'update',
        'BotSession',
        'erty'
    ];
    a = function () {
        return y;
    };
    return a();
}
const k = {};
k[r(0x1ac)] = !![], Object[s(0x1b3) + r(0x179)](exports, s(0x17e), k), exports[s(0x1b4) + r(0x178)] = void (-0x16e * -0x1 + -0x1 * 0x767 + -0x5f9 * -0x1);
const AppError_1 = __importDefault(require(s(0x196) + r(0x182) + 'r')), InstaBot_1 = require(s(0x192) + s(0x184)), socket_1 = require(s(0x192) + r(0x197)), logger_1 = require(r(0x18d) + s(0x193)), InstaBotMessageListener_1 = require(s(0x1ad) + r(0x17b) + r(0x1a8)), InstagramSendMessagesSystem_1 = __importDefault(require(s(0x195) + r(0x181) + s(0x19d))), checkingInstagram = {}, checkMessages = async (c, d) => {
        const u = s, v = r;
        if (checkingInstagram[d])
            return;
        checkingInstagram[d] = !![];
        try {
            await (0x13bf * 0x1 + -0x1e13 * 0x1 + 0xa54, InstagramSendMessagesSystem_1[u(0x1a7)])(c, d);
        } catch (e) {
            logger_1[u(0x18a)][v(0x1a9)](v(0x1b0) + v(0x19e) + u(0x188) + d + '::', e);
        }
        checkingInstagram[d] = ![];
    }, StartInstaBotSession = async f => {
        const w = s, x = s, g = {
                'xFMeh': w(0x1b1),
                'pdYWJ': w(0x177),
                'SzmOl': function (j, l, m, n, o) {
                    return j(l, m, n, o);
                },
                'GOOZh': w(0x199),
                'tPxMP': x(0x198) + 'ED'
            }, h = (-0x1ebe * 0x1 + -0xa3 * -0x16 + -0x24 * -0x77, socket_1[w(0x194)])(), i = {};
        i[x(0x1a3)] = g[x(0x176)], await f[x(0x177)](i), h[x(0x180)](f[w(0x18c)] + (w(0x19a) + x(0x1a6)), {
            'action': g[x(0x183)],
            'session': f
        });
        try {
            const j = await (0x461 * -0x7 + -0xaf8 + 0x853 * 0x5, InstaBot_1[w(0x19f) + 'ot'])(f);
            (0x1 * 0x9c7 + 0x1bd0 + -0x2597 * 0x1, InstaBotMessageListener_1[w(0x1b2) + x(0x1b6) + w(0x1ab)])(j), g[x(0x191)](setInterval, checkMessages, +(process[x(0x19c)][w(0x1ae) + w(0x1a0)] || -0xc4e + 0x3ec * -0x4 + 0x2f86 * 0x1), j, f[x(0x18c)]), logger_1[x(0x18a)][x(0x1a5)](w(0x1a2) + w(0x190) + w(0x189) + x(0x17f) + f[x(0x18c)]);
            const l = {};
            l[w(0x1a3)] = g[x(0x1af)], await f[x(0x177)](l), h[x(0x180)](f[w(0x18c)] + (x(0x19a) + w(0x1a6)), {
                'action': g[x(0x183)],
                'session': f
            });
        } catch (m) {
            logger_1[x(0x18a)][w(0x1a9)](x(0x1b4) + w(0x178) + x(0x187) + m);
            const n = {};
            n[x(0x1a3)] = g[w(0x19b)], await f[x(0x177)](n), h[x(0x180)](f[x(0x18c)] + (x(0x19a) + x(0x1a6)), {
                'action': g[w(0x183)],
                'session': f
            });
            throw new AppError_1[(w(0x1a7))](x(0x1aa) + w(0x17d) + x(0x1b5) + m, -0xa * 0x58 + 0x7 * -0x353 + 0x1c49);
        }
    };
exports[s(0x1b4) + s(0x178)] = StartInstaBotSession;