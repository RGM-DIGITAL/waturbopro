'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xc2 * 0x1d + 0x1 * 0x22ae + -0x3722);
        let h = e[f];
        return h;
    }, b(c, d);
}
const z = b, A = b;
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(x(0x187)) / (-0x1330 + 0x1 * 0x22e5 + -0xfb4) + -parseInt(y(0x1c3)) / (0x8d3 * -0x1 + -0x3b3 + -0x8 * -0x191) + parseInt(x(0x1ba)) / (-0x1c27 + -0x31 * 0x8e + -0x8 * -0x6eb) * (-parseInt(y(0x1ac)) / (-0x142a * 0x1 + 0x18cc + -0x49e)) + parseInt(x(0x1b0)) / (-0x53 * -0x47 + -0x5e5 + -0x111b) + parseInt(x(0x1aa)) / (0x2648 + -0x46 * -0x80 + -0x4942) * (-parseInt(y(0x1a2)) / (0x1a80 + 0x1 * 0x158f + -0x3008)) + -parseInt(x(0x190)) / (-0xc3e + -0x1f5a + 0x2ba * 0x10) + parseInt(x(0x1a1)) / (0x1 * 0x23cd + -0x9d * -0x20 + 0x5 * -0xb14);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x62d7 * -0x25 + -0xfac7 + -0x1 * -0x1e79a));
var __importDefault = this && this[z(0x19d) + z(0x192)] || function (c) {
    const B = z;
    return c && c[B(0x1b6)] ? c : { 'default': c };
};
const k = {};
k[z(0x188)] = !![], Object[A(0x1bb) + z(0x1b8)](exports, A(0x1b6), k);
function a() {
    const E = [
        'value',
        'geSystemSe',
        'umber',
        'BfPNs',
        'receiver_n',
        'contactId',
        'JRwlz',
        'whatsappId',
        '4041544YKEDvN',
        'sender_num',
        'fault',
        'ticket',
        'log',
        'rvice',
        'ticket_id',
        'answered',
        'Clients/op',
        'eToIA',
        'sendMessag',
        'findByPk',
        'pending',
        '__importDe',
        'contact_na',
        'fromMe',
        'HPjJm',
        '45667755ypIwsx',
        '84SvxTqL',
        'read',
        'dateQueueI',
        'ber',
        'ls/Contact',
        'ervices/Up',
        'body',
        'typeMessag',
        '980946QiamAu',
        'is_chat_ia',
        '4720RivXhG',
        '../../mode',
        'msg',
        'bot',
        '2509295TeBUoe',
        'message',
        'reateMessa',
        'NVpyq',
        'default',
        '../TicketS',
        '__esModule',
        'isGroup',
        'erty',
        'answer',
        '1380abehlC',
        'defineProp',
        'ls/Whatsap',
        'number',
        'queue_tran',
        'enIARestCl',
        'ATicket',
        '../../rest',
        'parse',
        '3028522LEpGAa',
        'status',
        'LUnSE',
        'name',
        'tenantId',
        'sendType',
        'ient',
        'Transfer',
        '../Message',
        'Services/C',
        '55070DEtthe'
    ];
    a = function () {
        return E;
    };
    return a();
}
const Contact_1 = __importDefault(require(z(0x1ad) + A(0x1a6))), openIARestClient_1 = require(z(0x1c1) + A(0x198) + A(0x1bf) + A(0x1c9)), CreateMessageSystemService_1 = __importDefault(require(z(0x1cb) + z(0x186) + A(0x1b2) + A(0x189) + z(0x195))), Whatsapp_1 = __importDefault(require(z(0x1ad) + A(0x1bc) + 'p')), UpdateQueueIATicket_1 = __importDefault(require(z(0x1b5) + z(0x1a7) + A(0x1a4) + z(0x1c0))), VerifyMensageOpenIA = async (h, i, j, l) => {
        const C = A, D = z, m = {};
        m[C(0x1a0)] = function (o, p) {
            return o === p;
        }, m[C(0x1b3)] = D(0x19c), m[D(0x18e)] = C(0x1af), m[D(0x1c5)] = function (o, p) {
            return o == p;
        }, m[C(0x18b)] = C(0x1ca);
        const n = m;
        if (n[C(0x1a0)](j[D(0x1c4)], n[C(0x1b3)]) && !i[C(0x19f)] && !j[D(0x1b7)] && !j[D(0x197)] && j[D(0x1ab)])
            try {
                const o = await Contact_1[C(0x1b4)][D(0x19b)](j[D(0x18d)]), p = await Whatsapp_1[D(0x1b4)][C(0x19b)](j[C(0x18f)]), q = {};
                q['id'] = h['id'], q[C(0x19e) + 'me'] = o[C(0x1c6)], q[C(0x196)] = j['id'], q[C(0x1a8)] = i[C(0x1a8)], q[C(0x191) + D(0x1a5)] = p[C(0x1bd)], q[D(0x18c) + D(0x18a)] = o[C(0x1bd)];
                const r = {};
                r[C(0x1b1)] = q;
                let s = await (0x1009 * -0x2 + 0x124e + 0xdc4, openIARestClient_1[D(0x19a) + C(0x199)])(r);
                s = JSON[D(0x1c2)](s);
                const t = {};
                t[D(0x1a8)] = s[D(0x1b1)][C(0x1b9)], t[C(0x19f)] = !![], t[D(0x1a3)] = !![], t[D(0x1c8)] = n[D(0x18e)];
                const u = t, v = {};
                v[C(0x1ae)] = u, v[D(0x1c7)] = j[C(0x1c7)], v[D(0x193)] = j, v[C(0x1c8)] = u[C(0x1c8)], v[D(0x1c4)] = n[C(0x1b3)], await (0x1ced + 0x77b * 0x3 + -0x335e, CreateMessageSystemService_1[C(0x1b4)])(v), n[C(0x1c5)](s[D(0x1b1)][D(0x1a9) + 'e'], n[C(0x18b)]) && await (0x762 + -0x89c + -0x2 * -0x9d, UpdateQueueIATicket_1[D(0x1b4)])(p[C(0x1be) + 'sf'], j);
            } catch (w) {
                console[C(0x194)](w);
            }
    };
exports[A(0x1b4)] = VerifyMensageOpenIA;