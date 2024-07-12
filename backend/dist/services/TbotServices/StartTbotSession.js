'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(n(0x1d6)) / (0x1 * 0x109d + 0xc * 0x24d + -0x587 * 0x8) + -parseInt(o(0x1cc)) / (0x4 * -0x962 + -0x23b3 + 0x493d) + parseInt(n(0x1d3)) / (-0x10c9 * 0x1 + 0x19 * -0x9f + -0x14b * -0x19) + parseInt(o(0x1db)) / (-0xa7 * 0x9 + -0x2 * -0xf0b + -0x1833) + parseInt(n(0x1df)) / (-0x1 * 0x2595 + 0x32e * -0x5 + 0x3580) * (-parseInt(o(0x1e4)) / (0x3db * -0xa + 0xde7 + 0x18ad * 0x1)) + parseInt(n(0x1f4)) / (-0x1 * 0xf7a + -0xaab + 0x1a2c) * (-parseInt(o(0x1c7)) / (-0x118c * -0x2 + -0x3 * 0x4 + -0x2304)) + -parseInt(o(0x1cd)) / (-0xcf9 + 0x1824 + 0x39 * -0x32) * (-parseInt(o(0x1f0)) / (0x4d5 + 0x4 * -0x5a9 + 0x5f3 * 0x3));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x167717 + 0xa966 + 0x21c82a * 0x1));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x373 * -0x7 + -0x407 + 0x1dee);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[p(0x1dc) + p(0x1e2)] || function (c) {
    const r = p;
    return c && c[r(0x1e8)] ? c : { 'default': c };
};
const k = {};
k[q(0x1e9)] = !![], Object[q(0x1d9) + q(0x1ea)](exports, q(0x1e8), k), exports[p(0x1e6) + p(0x1cb)] = void (0x8bf + -0x6 * 0x5cb + 0x1a03);
const socket_1 = require(q(0x1ec) + q(0x1cf)), tbot_1 = require(q(0x1ec) + p(0x1f5)), logger_1 = require(p(0x1d2) + q(0x1ef)), tbotMessageListener_1 = require(q(0x1c5) + q(0x1e5) + 'r'), TelegramSendMessagesSystem_1 = __importDefault(require(q(0x1c3) + p(0x1e1) + p(0x1c4))), checkingTelegram = {}, checkMessages = async (c, d) => {
        const s = q, t = q;
        if (checkingTelegram[d])
            return;
        checkingTelegram[d] = !![];
        try {
            await (0x1 * -0xc73 + -0x251b + 0x318e, TelegramSendMessagesSystem_1[s(0x1f1)])(c, d);
        } catch (e) {
            logger_1[t(0x1d4)][s(0x1ca)](s(0x1da) + s(0x1c6) + t(0x1d1) + d + '::', e);
        }
        checkingTelegram[d] = ![];
    }, StartTbotSession = async d => {
        const u = q, v = p, e = {
                'YuaFD': u(0x1d8),
                'mXrnI': v(0x1e7),
                'TupBM': function (h, i, j, l, m) {
                    return h(i, j, l, m);
                }
            }, f = (-0x3fa + 0xf9d * -0x1 + 0x1397, socket_1[u(0x1c2)])(), g = {};
        g[v(0x1ed)] = e[u(0x1f3)], await d[v(0x1e7)](g), f[v(0x1dd)](d[v(0x1c8)] + (u(0x1ee) + v(0x1cb)), {
            'action': e[u(0x1e0)],
            'session': d
        });
        try {
            const h = await (0x19b1 + -0x1641 + -0x370, tbot_1[u(0x1c9)])(d);
            (0xd35 + 0xb26 + -0x185b, tbotMessageListener_1[u(0x1d0) + u(0x1e3)])(h), e[v(0x1de)](setInterval, checkMessages, +(process[u(0x1d7)][u(0x1f2) + v(0x1d5)] || -0x1575 + -0x1697 + 0x3f94), h, d[u(0x1c8)]);
        } catch (i) {
            logger_1[u(0x1d4)][v(0x1ca)](v(0x1e6) + v(0x1eb) + u(0x1ce) + i);
        }
    };
function a() {
    const w = [
        'ckMessages',
        '2936eToweG',
        'tenantId',
        'initTbot',
        'error',
        'ession',
        '555048GPUfYp',
        '24363ygsSqq',
        'rror:\x20',
        '/socket',
        'tbotMessag',
        '\x20Tenant:\x20',
        '../../util',
        '4601256pGOZUB',
        'logger',
        'RVAL',
        '299068kMPKTc',
        'env',
        'OPENING',
        'defineProp',
        'ERROR:\x20che',
        '2186628bqsWxV',
        '__importDe',
        'emit',
        'TupBM',
        '12885TQJGMg',
        'mXrnI',
        'SendMessag',
        'fault',
        'eListener',
        '3306cAjOdC',
        'ageListene',
        'StartTbotS',
        'update',
        '__esModule',
        'value',
        'erty',
        'ession\x20|\x20E',
        '../../libs',
        'status',
        ':whatsappS',
        's/logger',
        '2490eGWyAf',
        'default',
        'CHECK_INTE',
        'YuaFD',
        '10892sbjGJg',
        '/tbot',
        'getIO',
        './Telegram',
        'esSystem',
        './tbotMess'
    ];
    a = function () {
        return w;
    };
    return a();
}
exports[q(0x1e6) + p(0x1cb)] = StartTbotSession;