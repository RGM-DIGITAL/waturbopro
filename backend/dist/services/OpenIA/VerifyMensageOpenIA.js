'use strict';
const z = b, A = b;
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(x(0x17b)) / (0x230e + 0x2216 + -0x4523) + parseInt(x(0x159)) / (-0x23 * -0x119 + -0x2 * -0x832 + -0x1 * 0x36cd) + -parseInt(x(0x16b)) / (-0xde2 + 0x26cb * -0x1 + 0x34b0) * (-parseInt(y(0x178)) / (-0xb * 0x100 + -0x1caa + -0x27ae * -0x1)) + parseInt(x(0x18e)) / (-0x1e4a + 0x5a0 * -0x5 + -0x3a6f * -0x1) + parseInt(x(0x188)) / (0x855 + -0x209a + -0x184b * -0x1) * (parseInt(y(0x16e)) / (0x763 * -0x1 + -0x199d + -0x1 * -0x2107)) + parseInt(y(0x170)) / (0x1fd1 + 0x91 * -0x43 + 0x62a) + parseInt(y(0x15a)) / (-0x265e + -0x12e * 0x13 + -0x1 * -0x3cd1) * (-parseInt(y(0x193)) / (-0x18c0 + 0x20e + -0xb5e * -0x2));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xb * -0x136c2 + 0x1513b0 + -0x1202 * -0x57));
var __importDefault = this && this[z(0x169) + A(0x179)] || function (c) {
    const B = A;
    return c && c[B(0x171)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x20c1 + -0x195c + -0x55 * -0xb3);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
function a() {
    const E = [
        'PebhD',
        'ticket',
        'whatsappId',
        'number',
        'erty',
        'enIARestCl',
        'reateMessa',
        'ls/Contact',
        'parse',
        'bot',
        'ticket_id',
        '2249826WOfaIZ',
        'isGroup',
        'tenantId',
        'eToIA',
        'dateQueueI',
        '../Message',
        '8721075pyEEva',
        'message',
        '../../rest',
        'TGmpV',
        '../../mode',
        '33260vKPkfu',
        'umber',
        'sendType',
        'contact_na',
        'Transfer',
        'RWBTm',
        'queue_tran',
        'ls/Whatsap',
        'read',
        'status',
        'YBDvj',
        'ATicket',
        'sender_num',
        '2765550bzrWAx',
        '11979hCDiHz',
        'Services/C',
        'Clients/op',
        'typeMessag',
        'is_chat_ia',
        'ber',
        'sendMessag',
        'body',
        'default',
        'answer',
        'ervices/Up',
        'name',
        '../TicketS',
        'pending',
        'findByPk',
        '__importDe',
        'log',
        '454203dDkRta',
        'ient',
        'answered',
        '14xzFdQN',
        'rvice',
        '7834104AFzwJc',
        '__esModule',
        'fromMe',
        'contactId',
        'msg',
        'defineProp',
        'ydOlk',
        'value',
        '28WTJzdk',
        'fault',
        'geSystemSe',
        '581824QIqOhv',
        'receiver_n'
    ];
    a = function () {
        return E;
    };
    return a();
}
k[A(0x177)] = !![], Object[A(0x175) + z(0x181)](exports, A(0x171), k);
const Contact_1 = __importDefault(require(A(0x192) + z(0x184))), openIARestClient_1 = require(z(0x190) + z(0x15c) + A(0x182) + z(0x16c)), CreateMessageSystemService_1 = __importDefault(require(A(0x18d) + A(0x15b) + z(0x183) + A(0x17a) + z(0x16f))), Whatsapp_1 = __importDefault(require(A(0x192) + A(0x153) + 'p')), UpdateQueueIATicket_1 = __importDefault(require(z(0x166) + z(0x164) + z(0x18c) + A(0x157))), VerifyMensageOpenIA = async (h, i, j, l) => {
        const C = A, D = z, m = {};
        m[C(0x191)] = function (o, p) {
            return o === p;
        }, m[D(0x176)] = D(0x167), m[D(0x17d)] = C(0x186), m[C(0x156)] = function (o, p) {
            return o == p;
        }, m[D(0x198)] = D(0x197);
        const n = m;
        if (n[C(0x191)](j[D(0x155)], n[C(0x176)]) && !i[C(0x172)] && !j[C(0x189)] && !j[D(0x16d)] && j[C(0x15e)])
            try {
                const o = await Contact_1[C(0x162)][D(0x168)](j[D(0x173)]), p = await Whatsapp_1[D(0x162)][C(0x168)](j[D(0x17f)]), q = {};
                q['id'] = h['id'], q[C(0x196) + 'me'] = o[D(0x165)], q[D(0x187)] = j['id'], q[D(0x161)] = i[D(0x161)], q[C(0x158) + C(0x15f)] = p[C(0x180)], q[C(0x17c) + C(0x194)] = o[C(0x180)];
                const r = {};
                r[D(0x18f)] = q;
                let s = await (0x4cb + 0x2011 + -0x24dc, openIARestClient_1[D(0x160) + D(0x18b)])(r);
                s = JSON[D(0x185)](s);
                const t = {};
                t[C(0x161)] = s[D(0x18f)][C(0x163)], t[D(0x172)] = !![], t[D(0x154)] = !![], t[D(0x195)] = n[D(0x17d)];
                const u = t, v = {};
                v[D(0x174)] = u, v[C(0x18a)] = j[D(0x18a)], v[D(0x17e)] = j, v[C(0x195)] = u[D(0x195)], v[D(0x155)] = n[D(0x176)], await (0x2 * 0xa03 + -0x2472 + -0x41b * -0x4, CreateMessageSystemService_1[C(0x162)])(v), n[D(0x156)](s[C(0x18f)][D(0x15d) + 'e'], n[D(0x198)]) && await (0x986 + 0x1a7b * 0x1 + -0x2401 * 0x1, UpdateQueueIATicket_1[D(0x162)])(p[D(0x152) + 'sf'], j);
            } catch (w) {
                console[D(0x16a)](w);
            }
    };
exports[z(0x162)] = VerifyMensageOpenIA;