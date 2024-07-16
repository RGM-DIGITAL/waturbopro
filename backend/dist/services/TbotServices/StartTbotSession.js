'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0x1b5)) / (0x23dd + 0x1 * 0x634 + 0x4 * -0xa84) * (-parseInt(n(0x1b4)) / (0x380 + -0xde1 + 0x1 * 0xa63)) + parseInt(n(0x1bd)) / (-0x79d * -0x3 + 0x66 * 0x30 + -0x1 * 0x29f4) * (parseInt(n(0x19f)) / (-0x1 * -0xf76 + 0x26 * -0x13 + -0xca0)) + parseInt(o(0x199)) / (0x15df * -0x1 + -0x58 * -0x1a + 0x1 * 0xcf4) * (-parseInt(n(0x1af)) / (0x1 * 0x1df + 0x130 * 0x13 + -0x1869 * 0x1)) + parseInt(n(0x1c6)) / (-0x1e39 + 0x16 * -0x2f + 0x42 * 0x85) + parseInt(n(0x1aa)) / (-0x1b3e + -0x23b * 0x7 + -0x2ae3 * -0x1) + -parseInt(n(0x1bc)) / (0x44d * -0x9 + -0x8a * 0x13 + 0x5f * 0x84) + parseInt(n(0x1b7)) / (-0xdcc + 0x39c + 0xa3a);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xf6ea + 0x1 * 0x13f8be + 0x134 * -0x6cc));
var __importDefault = this && this[p(0x1a8) + p(0x1b3)] || function (c) {
    const r = q;
    return c && c[r(0x19e)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2 * 0x2b1 + -0x1 * -0x19c6 + -0x1d91);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[p(0x1b6)] = !![], Object[q(0x1c7) + p(0x1c0)](exports, p(0x19e), k), exports[q(0x1a5) + p(0x1a2)] = void (0x1 * 0x48b + -0x1084 * 0x2 + -0x97f * -0x3);
const socket_1 = require(q(0x1c3) + p(0x1a3)), tbot_1 = require(p(0x1c3) + q(0x197)), logger_1 = require(p(0x1ae) + q(0x1b2)), tbotMessageListener_1 = require(p(0x1a7) + q(0x1c9) + 'r'), TelegramSendMessagesSystem_1 = __importDefault(require(q(0x1b8) + q(0x1c1) + p(0x1b0))), checkingTelegram = {}, checkMessages = async (c, d) => {
        const s = p, t = q;
        if (checkingTelegram[d])
            return;
        checkingTelegram[d] = !![];
        try {
            await (0x24dd + 0xa7a + -0x2f57, TelegramSendMessagesSystem_1[s(0x1a6)])(c, d);
        } catch (e) {
            logger_1[s(0x1a9)][t(0x1c4)](t(0x1ab) + t(0x1ac) + t(0x1a0) + d + '::', e);
        }
        checkingTelegram[d] = ![];
    }, StartTbotSession = async d => {
        const u = q, v = q, e = {
                'hUqyV': u(0x1c8),
                'sEiBx': v(0x1a1),
                'egHxq': function (h, i, j, l, m) {
                    return h(i, j, l, m);
                }
            }, f = (0x1 * -0x136e + 0x5 * 0xcd + -0x1 * -0xf6d, socket_1[u(0x1c5)])(), g = {};
        g[v(0x1ba)] = e[v(0x1c2)], await d[u(0x1a1)](g), f[v(0x1b1)](d[u(0x1ca)] + (v(0x198) + u(0x1a2)), {
            'action': e[u(0x1b9)],
            'session': d
        });
        try {
            const h = await (0x1 * -0x261a + -0x1ef3 + -0x647 * -0xb, tbot_1[u(0x1a4)])(d);
            (-0x26f * -0x4 + -0x930 + 0x1 * -0x8c, tbotMessageListener_1[v(0x19d) + v(0x1be)])(h), e[u(0x19a)](setInterval, checkMessages, +(process[u(0x19c)][v(0x19b) + v(0x1bf)] || 0x268f + 0x1a4c + -0x1 * 0x2d53), h, d[v(0x1ca)]);
        } catch (i) {
            logger_1[u(0x1a9)][v(0x1c4)](u(0x1a5) + v(0x1bb) + u(0x1ad) + i);
        }
    };
exports[q(0x1a5) + q(0x1a2)] = StartTbotSession;
function a() {
    const w = [
        'logger',
        '3075040DrAXWn',
        'ERROR:\x20che',
        'ckMessages',
        'rror:\x20',
        '../../util',
        '6GnGZpx',
        'esSystem',
        'emit',
        's/logger',
        'fault',
        '16BUeyZz',
        '96935uxTccb',
        'value',
        '6280040OEWcqX',
        './Telegram',
        'sEiBx',
        'status',
        'ession\x20|\x20E',
        '11130174BAuFGr',
        '33cqxvzr',
        'eListener',
        'RVAL',
        'erty',
        'SendMessag',
        'hUqyV',
        '../../libs',
        'error',
        'getIO',
        '5013344CAygcV',
        'defineProp',
        'OPENING',
        'ageListene',
        'tenantId',
        '/tbot',
        ':whatsappS',
        '4873075sWDGrV',
        'egHxq',
        'CHECK_INTE',
        'env',
        'tbotMessag',
        '__esModule',
        '151628xgjZap',
        '\x20Tenant:\x20',
        'update',
        'ession',
        '/socket',
        'initTbot',
        'StartTbotS',
        'default',
        './tbotMess',
        '__importDe'
    ];
    a = function () {
        return w;
    };
    return a();
}