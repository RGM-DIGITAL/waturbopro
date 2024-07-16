'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x815 * 0x4 + 0x25da + -0x1 * 0x455c);
        let h = e[f];
        return h;
    }, b(c, d);
}
const E = b, F = b;
(function (c, d) {
    const C = b, D = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(C(0xe5)) / (0x13 * 0xba + -0x1ac6 + 0xcf9) + -parseInt(C(0xee)) / (0x253 * -0x3 + 0x1551 + 0x1 * -0xe56) + parseInt(D(0xe6)) / (-0x3b4 + 0x13 * 0x101 + -0xf5c) + parseInt(C(0xfb)) / (-0x1215 + -0x1ea1 + -0x1 * -0x30ba) * (parseInt(D(0xda)) / (0xac5 * 0x3 + 0x2680 + 0x42a * -0x11)) + parseInt(C(0xe0)) / (0x1cd2 + -0x1c48 + -0x84) * (-parseInt(D(0xf8)) / (-0x26e + -0x1095 + 0x130a)) + parseInt(D(0xf0)) / (0xad6 + 0x2e + -0xafc) + parseInt(D(0xe8)) / (-0x837 + 0x62 * 0x35 + 0x2e * -0x43) * (parseInt(D(0xf1)) / (-0x53 * -0x1b + -0x84e + -0x1 * 0x69));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xa * -0x5d0d + -0x98df * 0x1 + -0xb351));
function a() {
    const J = [
        'from',
        '327872NFDTYA',
        'isActive',
        '520032fHVYqb',
        '10ppgGhw',
        'fault',
        'erty',
        'findOne',
        'default',
        'type',
        'userId',
        '765079WCErZS',
        'chatFlowId',
        'value',
        '56JlKuws',
        's/Whatsapp',
        'etService',
        'start',
        '../service',
        'owWhatsApp',
        's/TicketSe',
        'Services/I',
        '../models/',
        'chatBot',
        'ateLogTick',
        'ctive',
        'ChatFlow',
        'whatsappId',
        's/ChatFlow',
        'findByPk',
        'ZMkJL',
        'where',
        'tenantId',
        'contactId',
        'Service',
        'UYHmC',
        'Service/Sh',
        'Setting',
        '__importDe',
        'update',
        'number',
        '50GAxwVr',
        'defineProp',
        'sContactTe',
        'botTicketA',
        '__esModule',
        'Contact',
        '6amsKgr',
        'key',
        'ticketId',
        'flow',
        'lineList',
        '264647pkiGqt',
        '721299ntWJrv',
        'find',
        '3469257qcYMTL',
        'isDeleted',
        'channel',
        'rvices/Cre',
        'isGroup'
    ];
    a = function () {
        return J;
    };
    return a();
}
var __importDefault = this && this[E(0xd7) + F(0xf2)] || function (c) {
    const G = F;
    return c && c[G(0xde)] ? c : { 'default': c };
};
const k = {};
k[E(0xfa)] = !![], Object[E(0xdb) + E(0xf3)](exports, F(0xde), k);
const Contact_1 = __importDefault(require(E(0x103) + F(0xdf))), Setting_1 = __importDefault(require(E(0x103) + E(0xd6))), ChatFlow_1 = __importDefault(require(E(0x103) + F(0x107))), CreateLogTicketService_1 = __importDefault(require(F(0xff) + E(0x101) + E(0xeb) + E(0x105) + F(0xfd))), IsContactTest_1 = __importDefault(require(E(0xff) + F(0x109) + E(0x102) + F(0xdc) + 'st')), ShowWhatsAppService_1 = __importDefault(require(E(0xff) + E(0xfc) + F(0xd5) + F(0x100) + E(0xd3))), CheckChatBotFlowWelcome = async j => {
        const H = F, I = E, l = {};
        l[H(0xd4)] = H(0xdd) + H(0x106), l[H(0x10b)] = I(0x104);
        const m = l;
        if (j[H(0xf7)] || j[I(0xec)])
            return;
        const n = {};
        n[I(0xe1)] = m[I(0xd4)], n[H(0x10d)] = j[I(0x10d)];
        const o = {};
        o[I(0x10c)] = n;
        const p = await Setting_1[I(0xf5)][I(0xf4)](o), q = {};
        q['id'] = j[I(0x108)], q[H(0x10d)] = j[H(0x10d)];
        const r = await (-0x2221 + 0x115f + -0x2 * -0x861, ShowWhatsAppService_1[H(0xf5)])(q), s = r?.[I(0xf9)] || p?.[I(0xfa)];
        if (!s)
            return;
        const t = {};
        t['id'] = +s, t[H(0x10d)] = j[I(0x10d)], t[I(0xef)] = !![], t[H(0xe9)] = ![];
        const u = {};
        u[I(0x10c)] = t;
        const v = await ChatFlow_1[I(0xf5)][H(0xf4)](u);
        if (!v)
            return;
        const w = await Contact_1[H(0xf5)][H(0x10a)](j[I(0xd2)]), {celularTeste: x} = v, y = w?.[I(0xd9)];
        if (await (0x1fd3 * 0x1 + -0x1d58 + -0x1 * 0x27b, IsContactTest_1[I(0xf5)])(y, x, j[H(0xea)]))
            return;
        const z = v[I(0xe3)][H(0xe4)][H(0xe7)](B => B[I(0xed)] === H(0xfe));
        await j[H(0xd8)]({
            'chatFlowId': v['id'],
            'stepChatFlow': z['to'],
            'lastInteractionBot': new Date()
        });
        const A = {};
        A[I(0xe2)] = j['id'], A[I(0xf6)] = m[I(0x10b)], await (-0x6d3 * 0x1 + -0x1fbd + -0x269 * -0x10, CreateLogTicketService_1[I(0xf5)])(A);
    };
exports[F(0xf5)] = CheckChatBotFlowWelcome;