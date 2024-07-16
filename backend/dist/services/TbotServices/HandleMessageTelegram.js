'use strict';
const D = b, E = b;
(function (c, d) {
    const B = b, C = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(B(0x175)) / (0xe6 * -0x22 + -0x1 * -0x1552 + 0x93b) + parseInt(C(0x182)) / (0x1f71 + 0x2273 + 0x12 * -0x3a9) * (-parseInt(C(0x18f)) / (0x743 * 0x5 + -0x10ff + -0x3 * 0x66f)) + -parseInt(B(0x17e)) / (-0x112d + 0x6d4 * 0x5 + 0x10f3 * -0x1) * (-parseInt(B(0x173)) / (-0xe4b * -0x2 + -0x23ad + 0xa * 0xb6)) + -parseInt(B(0x15d)) / (0x78 * -0x1c + -0x227 * 0x2 + 0x1174) * (-parseInt(B(0x186)) / (-0x1c9a + -0xdd8 * 0x2 + 0x3851)) + -parseInt(C(0x185)) / (-0x1e49 * -0x1 + -0x101 * 0x23 + 0x4e2) * (-parseInt(B(0x16a)) / (0x24eb + -0x42e * 0x2 + -0x1c86)) + parseInt(B(0x18d)) / (0x2 * -0x5d7 + 0x140c + 0x1 * -0x854) * (parseInt(B(0x181)) / (-0x1 * -0x238e + 0x1 * 0x151a + -0x389d)) + -parseInt(C(0x153)) / (0xa8 * 0x1f + 0x1 * -0x9c5 + 0x7 * -0x181);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2eb3 + -0x1 * -0xfc28 + 0x48db * 0x13));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x61 * -0x2c + -0x6 * 0x1b2 + 0x531 * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[D(0x179) + D(0x161)] || function (c) {
    const F = D;
    return c && c[F(0x16d)] ? c : { 'default': c };
};
const k = {};
function a() {
    const I = [
        'icket',
        '336iPsrKi',
        'unreadMess',
        '../TicketS',
        'vices/help',
        'fault',
        './Telegram',
        'value',
        '../ChatFlo',
        'telegram',
        'VerifyStep',
        'VerifyMedi',
        'VerifyCont',
        'DpDjF',
        '124929fuVrqy',
        'aMessage',
        'timestamp',
        '__esModule',
        'wServices/',
        'pService/S',
        'whatsappId',
        'sChatFlowT',
        'fromMe',
        '360XrLSBM',
        'ervices/Fi',
        '557782LLOEPp',
        'urs',
        'text',
        'ndOrCreate',
        '__importDe',
        'default',
        'TicketServ',
        'channel',
        'act',
        '19576NggbGd',
        'tenantId',
        'erty',
        '11KeOCiU',
        '156MLSrLg',
        'bAgiw',
        'isFarewell',
        '456QRAmRm',
        '8589akIJTF',
        '../WbotSer',
        'bxhVw',
        'ice',
        'yNhZc',
        'pService',
        'date',
        '1892840ydZzQY',
        'ages',
        '13458UYHtTi',
        'contact',
        'chat',
        'age',
        'sage',
        'Message',
        'howWhatsAp',
        '../Whatsap',
        'update',
        'defineProp',
        'getMe',
        '1043100lwQYBM',
        'ers/Verify',
        'body',
        'edited_mes',
        'VerifyMess',
        'BusinessHo',
        'msg',
        'message',
        'from'
    ];
    a = function () {
        return I;
    };
    return a();
}
k[E(0x163)] = !![], Object[E(0x151) + D(0x180)](exports, E(0x16d), k);
const ShowWhatsAppService_1 = __importDefault(require(E(0x14f) + D(0x16f) + E(0x195) + D(0x18b))), TelegramVerifyContact_1 = __importDefault(require(E(0x162) + D(0x168) + D(0x17d))), FindOrCreateTicketService_1 = __importDefault(require(E(0x15f) + D(0x174) + E(0x178) + D(0x17b) + D(0x189))), TelegramVerifyMediaMessage_1 = __importDefault(require(E(0x162) + D(0x167) + E(0x16b))), TelegramVerifyMessage_1 = __importDefault(require(D(0x162) + D(0x157) + D(0x192))), VerifyBusinessHours_1 = __importDefault(require(E(0x187) + D(0x160) + D(0x154) + D(0x158) + D(0x176))), VerifyStepsChatFlowTicket_1 = __importDefault(require(E(0x164) + E(0x16e) + E(0x166) + E(0x171) + D(0x15c))), HandleMessage = async (h, i) => {
        const G = E, H = E, j = {};
        j[G(0x188)] = function (z, A) {
            return z && A;
        }, j[H(0x169)] = function (z, A) {
            return z === A;
        }, j[H(0x183)] = function (z, A) {
            return z * A;
        }, j[G(0x18a)] = G(0x165);
        const l = j, m = {};
        m['id'] = i['id'];
        const n = await (0xefa + -0x258d + 0x1693 * 0x1, ShowWhatsAppService_1[G(0x17a)])(m);
        let o, p = {};
        o = h?.[H(0x15a)], p = h?.[G(0x150)];
        l[H(0x188)](!o, p) && (o = p?.[G(0x156) + H(0x193)]);
        const q = o?.[H(0x191)], r = await h[G(0x165)][H(0x152)](), s = l[G(0x169)](r['id'], h[H(0x15a)]?.[H(0x15b)]['id']), t = {
                ...o,
                'timestamp': l[H(0x183)](+o[G(0x18c)], -0x238c + 0x1 * 0x24b7 + 0x2bd)
            }, u = await (-0x29 * 0xbf + 0x2592 + -0x1 * 0x6fb, TelegramVerifyContact_1[H(0x17a)])(h, n[G(0x17f)]), v = {};
        v[H(0x190)] = u, v[H(0x170)] = i['id'], v[H(0x15e) + G(0x18e)] = s ? -0x20b + -0x1fa6 + 0x21b1 : -0xb * 0x2c5 + 0x24d3 + -0x1 * 0x65b, v[H(0x17f)] = n[H(0x17f)], v[G(0x159)] = { ...t }, v[G(0x17c)] = l[H(0x18a)], v[G(0x159)][H(0x172)] = s;
        const w = await (-0xb3 * 0xe + 0x527 + 0x4a3 * 0x1, FindOrCreateTicketService_1[G(0x17a)])(v);
        if (w?.[H(0x184) + H(0x194)])
            return;
        !t?.[G(0x177)] && q?.['id'] ? await (0x46f * 0x3 + 0x5 * 0x6f4 + 0x1 * -0x3011, TelegramVerifyMediaMessage_1[H(0x17a)])(h, s, w, u) : await (0x525 + -0x661 + -0x13c * -0x1, TelegramVerifyMessage_1[G(0x17a)])(h, s, w, u);
        const x = {};
        x[G(0x172)] = s, x[G(0x155)] = o[G(0x177)] || '', await (0x1cc6 + -0x10bf + 0x1 * -0xc07, VerifyStepsChatFlowTicket_1[G(0x17a)])(x, w);
        const y = {};
        y[G(0x172)] = s, y[H(0x16c)] = t[H(0x16c)], await (0x1dbd + 0xb7e + -0x293b, VerifyBusinessHours_1[G(0x17a)])(y, w);
    };
exports[E(0x17a)] = HandleMessage;