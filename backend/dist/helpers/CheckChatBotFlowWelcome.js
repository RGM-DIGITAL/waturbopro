'use strict';
const E = b, F = b;
(function (c, d) {
    const C = b, D = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(C(0x164)) / (-0x264e * 0x1 + 0x1e12 + 0x83d) * (-parseInt(C(0x150)) / (0x876 + -0x1 * 0xf2c + 0x6b8)) + parseInt(D(0x15d)) / (-0xe83 * 0x2 + 0x30 * 0xe + -0x1a69 * -0x1) * (-parseInt(D(0x174)) / (0x17b * 0x15 + 0x982 * -0x2 + -0xc0f)) + parseInt(C(0x162)) / (-0x18a0 + 0xfd * 0x3 + 0x15ae) + parseInt(D(0x169)) / (-0x9 * -0x295 + 0x1cf4 + -0xa6f * 0x5) + parseInt(C(0x17f)) / (-0x1703 + -0x2b * 0x13 + 0x1a3b) * (-parseInt(C(0x151)) / (0x13b2 + 0x207f + -0x3429)) + parseInt(D(0x155)) / (0x331 * 0x7 + -0x795 + -0xeb9) * (parseInt(C(0x172)) / (-0xc5d * 0x1 + 0x1eb6 + -0x124f * 0x1)) + parseInt(C(0x161)) / (-0x3c * 0x24 + 0xb73 + -0x2f8);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xaed2 * 0x5 + 0x2c8f4 + -0x46db8));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x62a + 0x1 * -0x98b + 0x4ad);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[E(0x16a) + E(0x16c)] || function (c) {
    const G = F;
    return c && c[G(0x183)] ? c : { 'default': c };
};
const k = {};
k[E(0x187)] = !![], Object[E(0x17c) + E(0x16e)](exports, E(0x183), k);
function a() {
    const J = [
        'owWhatsApp',
        'isGroup',
        'wLLgs',
        's/ChatFlow',
        'Services/I',
        'number',
        'defineProp',
        'findByPk',
        'start',
        '707ToDves',
        'ctive',
        'tenantId',
        'from',
        '__esModule',
        'Service',
        's/TicketSe',
        'chatBot',
        'value',
        'Service/Sh',
        '../models/',
        'key',
        's/Whatsapp',
        'channel',
        '18jmiCgQ',
        '8392iDnbGP',
        'Setting',
        'isActive',
        'contactId',
        '74169zsTFrA',
        'isDeleted',
        'find',
        'ateLogTick',
        'where',
        'rvices/Cre',
        'default',
        'botTicketA',
        '604668SmJwfX',
        'userId',
        'flow',
        'ticketId',
        '3055019EkQEdQ',
        '490000CdZgek',
        'type',
        '22939ewOlWl',
        'whatsappId',
        'update',
        'lineList',
        'sContactTe',
        '833442TAulik',
        '__importDe',
        'etService',
        'fault',
        'ChatFlow',
        'erty',
        'chatFlowId',
        '../service',
        'Contact',
        '140EYHWYI',
        'findOne',
        '4NUTOcm',
        'FUUfS'
    ];
    a = function () {
        return J;
    };
    return a();
}
const Contact_1 = __importDefault(require(F(0x14c) + E(0x171))), Setting_1 = __importDefault(require(F(0x14c) + F(0x152))), ChatFlow_1 = __importDefault(require(F(0x14c) + F(0x16d))), CreateLogTicketService_1 = __importDefault(require(E(0x170) + F(0x185) + E(0x15a) + E(0x158) + F(0x16b))), IsContactTest_1 = __importDefault(require(E(0x170) + F(0x179) + F(0x17a) + E(0x168) + 'st')), ShowWhatsAppService_1 = __importDefault(require(F(0x170) + F(0x14e) + E(0x188) + E(0x176) + F(0x184))), CheckChatBotFlowWelcome = async j => {
        const H = F, I = F, l = {};
        l[H(0x178)] = H(0x15c) + I(0x180), l[H(0x175)] = H(0x186);
        const m = l;
        if (j[H(0x15e)] || j[H(0x177)])
            return;
        const n = {};
        n[H(0x14d)] = m[H(0x178)], n[I(0x181)] = j[H(0x181)];
        const o = {};
        o[H(0x159)] = n;
        const p = await Setting_1[I(0x15b)][H(0x173)](o), q = {};
        q['id'] = j[I(0x165)], q[I(0x181)] = j[I(0x181)];
        const r = await (0x2111 + -0x4 * 0x2bc + 0x1 * -0x1621, ShowWhatsAppService_1[H(0x15b)])(q), s = r?.[I(0x16f)] || p?.[I(0x187)];
        if (!s)
            return;
        const t = {};
        t['id'] = +s, t[H(0x181)] = j[I(0x181)], t[I(0x153)] = !![], t[H(0x156)] = ![];
        const u = {};
        u[I(0x159)] = t;
        const v = await ChatFlow_1[H(0x15b)][H(0x173)](u);
        if (!v)
            return;
        const w = await Contact_1[I(0x15b)][I(0x17d)](j[I(0x154)]), {celularTeste: x} = v, y = w?.[I(0x17b)];
        if (await (0xbb4 + -0xf09 * 0x2 + 0x125e, IsContactTest_1[H(0x15b)])(y, x, j[I(0x14f)]))
            return;
        const z = v[H(0x15f)][H(0x167)][H(0x157)](B => B[H(0x182)] === H(0x17e));
        await j[H(0x166)]({
            'chatFlowId': v['id'],
            'stepChatFlow': z['to'],
            'lastInteractionBot': new Date()
        });
        const A = {};
        A[H(0x160)] = j['id'], A[I(0x163)] = m[H(0x175)], await (0x25fb + -0x21 * 0x2 + -0x9 * 0x431, CreateLogTicketService_1[H(0x15b)])(A);
    };
exports[E(0x15b)] = CheckChatBotFlowWelcome;