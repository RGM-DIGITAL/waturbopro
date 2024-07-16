'use strict';
function a() {
    const y = [
        '329870GgCOrJ',
        'CONNECTED',
        'iciada\x20|\x20E',
        'info',
        'kzfbz',
        '627648znlFxf',
        ':whatsappS',
        'RAM:\x20',
        'ERROR_CONN',
        'fault',
        'erty',
        'OPENING',
        './Instagra',
        'ession',
        'DISCONNECT',
        'initInstaB',
        'ERROR:\x20che',
        '2czCQjA',
        '61116hyegkV',
        '4015lVqbAs',
        'default',
        'ECT_INSTAG',
        'logger',
        '10557dKspSq',
        '15170OWsFVw',
        './InstaBot',
        'rs/AppErro',
        'StartInsta',
        'InstaBotMe',
        'BotSession',
        'gesSystem',
        'CHECK_INTE',
        '2171jjTwKJ',
        'value',
        '\x20Tenant:\x20',
        'mSendMessa',
        'ckMessages',
        '16lSLFHj',
        'qNZGE',
        '1760SuuJTi',
        '3720HArScx',
        'Conexão\x20In',
        'env',
        'qzHgt',
        'ner',
        '__importDe',
        'RVAL',
        '/InstaBot',
        '5316OFtQOf',
        '/socket',
        'tenantId',
        '\x20|\x20Error:\x20',
        'update',
        'error',
        'XORub',
        '50628CZtCYv',
        'stagram\x20in',
        'defineProp',
        's/logger',
        '__esModule',
        'status',
        '../../util',
        'emit',
        'ssageListe',
        '../../libs',
        'getIO',
        'MessageLis',
        'mpresa:\x20',
        '../../erro',
        'tener',
        'pscHi'
    ];
    a = function () {
        return y;
    };
    return a();
}
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x18f)) / (0x12e6 + -0xdc9 * 0x1 + -0x51c) * (parseInt(p(0x17e)) / (-0x1363 + 0x1571 + -0x106 * 0x2)) + -parseInt(q(0x190)) / (-0x1de8 + 0x1464 + 0x987) * (parseInt(p(0x1a3)) / (-0x1 * -0x1dd1 + 0x3 * -0x98f + -0x120)) + parseInt(p(0x1a5)) / (0x466 * 0x8 + -0x998 + -0x1993 * 0x1) * (parseInt(p(0x1ae)) / (0x6d5 + 0x1 * -0x24fb + 0x1e2c)) + parseInt(q(0x183)) / (0x1 * -0xf1a + -0x162b + 0x254c) + -parseInt(p(0x1a6)) / (-0x1c2e + 0x2 * -0xee4 + 0x39fe) * (-parseInt(q(0x195)) / (0x2390 + 0x255 + -0x1 * 0x25dc)) + -parseInt(q(0x196)) / (0x6b * 0x45 + 0x12ff + -0x2fcc) * (-parseInt(p(0x191)) / (0x13 * -0x8e + -0x1c2e + 0x26c3)) + -parseInt(p(0x1b5)) / (0x1d76 + 0x1 * 0x564 + -0xa * 0x37b) * (parseInt(q(0x19e)) / (-0x2419 * 0x1 + 0x68b + 0x1d9b));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x3d15 * -0x13 + -0x94b8 + 0xafc3a));
var __importDefault = this && this[r(0x1ab) + r(0x187)] || function (c) {
    const t = r;
    return c && c[t(0x1b9)] ? c : { 'default': c };
};
const k = {};
k[r(0x19f)] = !![], Object[s(0x1b7) + r(0x188)](exports, r(0x1b9), k), exports[s(0x199) + r(0x19b)] = void (0x697 * -0x1 + -0xf45 + 0x15dc);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x224e + -0x1b56 + -0x583);
        let h = e[f];
        return h;
    }, b(c, d);
}
const AppError_1 = __importDefault(require(s(0x17b) + s(0x198) + 'r')), InstaBot_1 = require(r(0x177) + r(0x1ad)), socket_1 = require(s(0x177) + s(0x1af)), logger_1 = require(r(0x1bb) + s(0x1b8)), InstaBotMessageListener_1 = require(r(0x197) + s(0x179) + s(0x17c)), InstagramSendMessagesSystem_1 = __importDefault(require(r(0x18a) + s(0x1a1) + s(0x19c))), checkingInstagram = {}, checkMessages = async (c, d) => {
        const u = r, v = s;
        if (checkingInstagram[d])
            return;
        checkingInstagram[d] = !![];
        try {
            await (0x19b8 + 0xa * 0x76 + 0x6 * -0x50e, InstagramSendMessagesSystem_1[u(0x192)])(c, d);
        } catch (e) {
            logger_1[u(0x194)][v(0x1b3)](v(0x18e) + v(0x1a2) + v(0x1a0) + d + '::', e);
        }
        checkingInstagram[d] = ![];
    }, StartInstaBotSession = async f => {
        const w = s, x = r, g = {
                'kzfbz': w(0x189),
                'pscHi': x(0x1b2),
                'qzHgt': function (j, l, m, n, o) {
                    return j(l, m, n, o);
                },
                'qNZGE': x(0x17f),
                'XORub': x(0x18c) + 'ED'
            }, h = (0x1133 + 0x2fc * 0xa + -0x2f0b, socket_1[w(0x178)])(), i = {};
        i[w(0x1ba)] = g[w(0x182)], await f[x(0x1b2)](i), h[x(0x175)](f[x(0x1b0)] + (x(0x184) + x(0x18b)), {
            'action': g[x(0x17d)],
            'session': f
        });
        try {
            const j = await (-0x1f03 + 0x245c + -0x559, InstaBot_1[x(0x18d) + 'ot'])(f);
            (0x1 * -0x212f + 0x2414 + 0xf7 * -0x3, InstaBotMessageListener_1[x(0x19a) + x(0x176) + w(0x1aa)])(j), g[w(0x1a9)](setInterval, checkMessages, +(process[w(0x1a8)][w(0x19d) + w(0x1ac)] || -0x15d9 + -0x4 * -0x455 + 0x83 * 0x2f), j, f[x(0x1b0)]), logger_1[w(0x194)][x(0x181)](w(0x1a7) + w(0x1b6) + w(0x180) + w(0x17a) + f[x(0x1b0)]);
            const l = {};
            l[x(0x1ba)] = g[x(0x1a4)], await f[w(0x1b2)](l), h[w(0x175)](f[w(0x1b0)] + (w(0x184) + x(0x18b)), {
                'action': g[w(0x17d)],
                'session': f
            });
        } catch (m) {
            logger_1[x(0x194)][w(0x1b3)](x(0x199) + w(0x19b) + x(0x1b1) + m);
            const n = {};
            n[x(0x1ba)] = g[w(0x1b4)], await f[x(0x1b2)](n), h[x(0x175)](f[x(0x1b0)] + (x(0x184) + w(0x18b)), {
                'action': g[x(0x17d)],
                'session': f
            });
            throw new AppError_1[(x(0x192))](w(0x186) + w(0x193) + x(0x185) + m, 0x1 * 0x134f + 0x463 + -0x161e);
        }
    };
exports[s(0x199) + r(0x19b)] = StartInstaBotSession;