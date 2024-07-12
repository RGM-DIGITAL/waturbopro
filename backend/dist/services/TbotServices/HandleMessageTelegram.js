'use strict';
const D = b, E = b;
(function (c, d) {
    const B = b, C = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(B(0x13a)) / (-0x1f69 + -0x1aae + 0x8 * 0x743) + -parseInt(B(0x14a)) / (0x119 * 0xb + -0xf * 0x116 + 0x439) * (parseInt(B(0x121)) / (0x2 * 0x1a3 + 0x6b7 * -0x2 + -0x1 * -0xa2b)) + -parseInt(B(0x133)) / (0x1 * -0x51d + -0x1ec4 * 0x1 + 0x23e5 * 0x1) * (parseInt(B(0x160)) / (-0xd * 0x272 + -0x1f9f + -0x3f6e * -0x1)) + parseInt(C(0x15a)) / (-0x58c + 0x1f55 + -0x1 * 0x19c3) * (parseInt(C(0x14b)) / (-0x2 * -0x13a + -0x2212 + 0x1fa5)) + parseInt(C(0x12c)) / (-0x1e5 + -0x2 * 0x7e6 + 0x11b9) + -parseInt(C(0x15e)) / (0x68f + -0x3 * -0x1f5 + -0xc65) + parseInt(C(0x134)) / (0x13cc + -0x1b8e + -0x7cc * -0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x419 * -0x69 + 0x4 * 0x13de + 0x2f134));
var __importDefault = this && this[D(0x14f) + D(0x15f)] || function (c) {
    const F = E;
    return c && c[F(0x137)] ? c : { 'default': c };
};
const k = {};
k[E(0x11e)] = !![], Object[D(0x151) + D(0x156)](exports, E(0x137), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x17b5 + -0x1081 + 0x2952);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const I = [
        'defineProp',
        'tenantId',
        'pService',
        'timestamp',
        'VerifyMess',
        'erty',
        'getMe',
        'contact',
        'whatsappId',
        '12PSRDXq',
        'date',
        'default',
        'update',
        '3674232JyBhsi',
        'fault',
        '140OhdYqc',
        'fromMe',
        'body',
        'value',
        'ers/Verify',
        'chat',
        '471jCNLYM',
        'sChatFlowT',
        'wServices/',
        'Message',
        'ages',
        'icket',
        'TicketServ',
        'vices/help',
        'nNLUw',
        'ndOrCreate',
        '../Whatsap',
        '1675784jTgCKQ',
        '../TicketS',
        'from',
        'howWhatsAp',
        '../ChatFlo',
        'mbsfT',
        '../WbotSer',
        '44024XBrBrA',
        '9223160fKKvIL',
        'age',
        'pService/S',
        '__esModule',
        'urs',
        'BusinessHo',
        '68113yqipqI',
        'aMessage',
        'ZIrDB',
        'isFarewell',
        'msg',
        'unreadMess',
        'ice',
        'act',
        'VerifyMedi',
        'sage',
        'VerifyCont',
        'channel',
        'telegram',
        'ervices/Fi',
        'VerifyStep',
        'hSMYl',
        '618ZiFfGI',
        '85967TaidAR',
        'message',
        './Telegram',
        'text',
        '__importDe',
        'edited_mes'
    ];
    a = function () {
        return I;
    };
    return a();
}
const ShowWhatsAppService_1 = __importDefault(require(D(0x12b) + D(0x136) + D(0x12f) + D(0x153))), TelegramVerifyContact_1 = __importDefault(require(E(0x14d) + E(0x144) + D(0x141))), FindOrCreateTicketService_1 = __importDefault(require(E(0x12d) + D(0x147) + D(0x12a) + D(0x127) + E(0x140))), TelegramVerifyMediaMessage_1 = __importDefault(require(E(0x14d) + E(0x142) + E(0x13b))), TelegramVerifyMessage_1 = __importDefault(require(D(0x14d) + E(0x155) + E(0x135))), VerifyBusinessHours_1 = __importDefault(require(D(0x132) + D(0x128) + E(0x11f) + E(0x139) + D(0x138))), VerifyStepsChatFlowTicket_1 = __importDefault(require(E(0x130) + D(0x123) + D(0x148) + D(0x122) + D(0x126))), HandleMessage = async (h, i) => {
        const G = D, H = E, j = {};
        j[G(0x149)] = function (z, A) {
            return z && A;
        }, j[H(0x13c)] = function (z, A) {
            return z === A;
        }, j[H(0x129)] = function (z, A) {
            return z * A;
        }, j[H(0x131)] = H(0x146);
        const l = j, m = {};
        m['id'] = i['id'];
        const n = await (0x36d * -0x5 + -0x1167 + 0x2288, ShowWhatsAppService_1[G(0x15c)])(m);
        let o, p = {};
        o = h?.[G(0x14c)], p = h?.[H(0x15d)];
        l[H(0x149)](!o, p) && (o = p?.[H(0x150) + G(0x143)]);
        const q = o?.[H(0x120)], r = await h[G(0x146)][G(0x157)](), s = l[H(0x13c)](r['id'], h[G(0x14c)]?.[G(0x12e)]['id']), t = {
                ...o,
                'timestamp': l[G(0x129)](+o[H(0x15b)], 0x95 * 0x1b + 0x3 * -0x789 + 0xacc)
            }, u = await (0x1989 + -0x1675 * 0x1 + 0x1 * -0x314, TelegramVerifyContact_1[H(0x15c)])(h, n[H(0x152)]), v = {};
        v[G(0x158)] = u, v[G(0x159)] = i['id'], v[H(0x13f) + H(0x125)] = s ? -0x4c5 + 0x1a0 * -0xd + 0x19e5 : 0x636 + 0x12c + -0x761, v[G(0x152)] = n[H(0x152)], v[G(0x13e)] = { ...t }, v[H(0x145)] = l[G(0x131)], v[G(0x13e)][G(0x11c)] = s;
        const w = await (0x33 * -0x49 + 0x2a * -0x6b + 0x2019, FindOrCreateTicketService_1[G(0x15c)])(v);
        if (w?.[G(0x13d) + H(0x124)])
            return;
        !t?.[G(0x14e)] && q?.['id'] ? await (-0x1dcb + -0x4 * -0x6e3 + 0x23f, TelegramVerifyMediaMessage_1[G(0x15c)])(h, s, w, u) : await (-0x1105 + -0x1f70 + 0x3075, TelegramVerifyMessage_1[H(0x15c)])(h, s, w, u);
        const x = {};
        x[G(0x11c)] = s, x[G(0x11d)] = o[G(0x14e)] || '', await (0x38 * -0x9d + -0x2348 * -0x1 + 0x78 * -0x2, VerifyStepsChatFlowTicket_1[H(0x15c)])(x, w);
        const y = {};
        y[G(0x11c)] = s, y[G(0x154)] = t[G(0x154)], await (-0x3 * 0x8bb + -0x69a + -0x16d * -0x17, VerifyBusinessHours_1[H(0x15c)])(y, w);
    };
exports[E(0x15c)] = HandleMessage;