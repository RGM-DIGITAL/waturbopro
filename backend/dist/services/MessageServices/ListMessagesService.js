'use strict';
function a() {
    const I = [
        'OffLine',
        'queueId',
        '../../erro',
        'whatsappId',
        '../TicketS',
        'order',
        '1639KRcxqB',
        'contact',
        '50410eOUHAv',
        'IQNxy',
        '74GjFutI',
        'findAndCou',
        'DESC',
        '__importDe',
        '6EKwOgC',
        'where',
        '7477687iHTwtn',
        '../../mode',
        'rs/AppErro',
        'fkQhZ',
        'length',
        'default',
        'AZljf',
        'include',
        'ervices/Sh',
        '__esModule',
        '78461808URHMnM',
        '490184Oywxtu',
        'ls/Ticket',
        '234Iqyryw',
        'jjPzg',
        'owTicketSe',
        'ls/Message',
        'required',
        'qmwKv',
        'KET_FOUND',
        'hqrZt',
        'ERR_NO_TIC',
        'GeEOU',
        'reverse',
        'createdAt',
        '83061nKEALY',
        'fault',
        'contactId',
        'quotedMsg',
        '4527530OIpqFo',
        'model',
        'value',
        '37491GoZASx',
        'tjpzi',
        'JKDCi',
        'ticketId',
        'IlWff',
        'tenantId',
        '4InAJYv',
        'erty',
        'rvice',
        'defineProp',
        'ntAll'
    ];
    a = function () {
        return I;
    };
    return a();
}
const D = b, E = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1249 * 0x1 + -0x2 * 0xc5d + -0x219 * -0x4);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const B = b, C = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(B(0x205)) / (-0x117f + 0x742 + 0xa3e) * (-parseInt(B(0x21a)) / (0x1 * 0x1d18 + 0x1982 + -0x3698)) + -parseInt(B(0x1fe)) / (0x134f + -0x14c8 + 0x4c * 0x5) * (-parseInt(B(0x20b)) / (0x1fd4 + 0x68f * -0x2 + -0x12b2)) + -parseInt(C(0x202)) / (0x1e1a * -0x1 + -0x1 * -0xcc + 0x1d53) * (parseInt(B(0x21e)) / (-0x540 + -0xfb4 + 0x14fa)) + -parseInt(B(0x220)) / (0x1 * -0x610 + 0x245a + -0x1 * 0x1e43) + -parseInt(B(0x22b)) / (0x19d * 0xd + 0x5 * 0x7ac + -0x2f * 0x143) * (parseInt(C(0x22d)) / (-0x5fb + 0x1 * 0x907 + 0x3 * -0x101)) + -parseInt(B(0x218)) / (-0xf9c + 0x1c69 * 0x1 + -0xcc3) * (parseInt(C(0x216)) / (0x24d5 + 0x1 * -0x143b + -0x1 * 0x108f)) + parseInt(C(0x22a)) / (0x17 * -0xa3 + 0x98d + 0x149 * 0x4);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * -0x3dc1 + -0x3b * 0x705f + 0x26cb9e));
var __importDefault = this && this[D(0x21d) + E(0x1ff)] || function (c) {
    const F = E;
    return c && c[F(0x229)] ? c : { 'default': c };
};
const k = {};
k[E(0x204)] = !![], Object[D(0x20e) + D(0x20c)](exports, E(0x229), k);
const AppError_1 = __importDefault(require(E(0x212) + D(0x222) + 'r')), Message_1 = __importDefault(require(E(0x221) + D(0x1f5))), MessageOffLine_1 = __importDefault(require(D(0x221) + E(0x1f5) + E(0x210))), Ticket_1 = __importDefault(require(E(0x221) + D(0x22c))), ShowTicketService_1 = __importDefault(require(D(0x214) + E(0x228) + D(0x1f4) + E(0x20d))), ListMessagesService = async ({
        pageNumber: pageNumber = '1',
        ticketId: i,
        tenantId: j
    }) => {
        const G = D, H = E, l = {};
        l[G(0x1f3)] = G(0x1fa) + H(0x1f8), l[G(0x226)] = function (z, A) {
            return z * A;
        }, l[G(0x209)] = function (z, A) {
            return z - A;
        }, l[H(0x1f7)] = H(0x217), l[G(0x223)] = G(0x201), l[H(0x206)] = G(0x1fd), l[G(0x207)] = G(0x21c), l[G(0x219)] = function (z, A) {
            return z === A;
        }, l[H(0x1f9)] = function (z, A) {
            return z > A;
        }, l[H(0x1fb)] = function (z, A) {
            return z + A;
        };
        const m = l, n = {};
        n['id'] = i, n[G(0x20a)] = j;
        const o = await (0x3 * 0x18d + 0x91 * -0x18 + 0x8f1, ShowTicketService_1[H(0x225)])(n);
        if (!o)
            throw new AppError_1[(H(0x225))](m[G(0x1f3)], 0x1 * 0x20ea + 0x24f0 + -0x4446);
        const p = 0x256a + 0xaf1 + -0x1 * 0x303d, q = m[G(0x226)](p, m[H(0x209)](+pageNumber, -0x208a + -0xcc1 * 0x1 + 0xb53 * 0x4)), r = {};
        r[H(0x211)] = o[G(0x211)], r[G(0x200)] = o[H(0x200)], r[H(0x213)] = o[G(0x213)], r['id'] = o['id'];
        const s = {};
        s[H(0x203)] = Ticket_1[G(0x225)], s[G(0x21f)] = r, s[H(0x1f6)] = !![];
        const {
            count: t,
            rows: u
        } = await Message_1[H(0x225)][G(0x21b) + G(0x20f)]({
            'limit': p,
            'include': [
                m[G(0x1f7)],
                {
                    'model': Message_1[H(0x225)],
                    'as': m[H(0x223)],
                    'include': [m[H(0x1f7)]]
                },
                s
            ],
            'offset': q,
            'order': [[
                    m[H(0x206)],
                    m[H(0x207)]
                ]]
        });
        let v = [];
        if (m[G(0x219)](+pageNumber, -0x928 + -0x13f7 + 0x1d20 * 0x1)) {
            const x = {};
            x[G(0x208)] = i;
            const y = {};
            y[H(0x21f)] = x, y[G(0x227)] = [
                m[H(0x1f7)],
                {
                    'model': Message_1[H(0x225)],
                    'as': m[G(0x223)],
                    'include': [m[H(0x1f7)]]
                }
            ], y[H(0x215)] = [[
                    m[G(0x206)],
                    m[H(0x207)]
                ]];
            const {rows: z} = await MessageOffLine_1[G(0x225)][G(0x21b) + H(0x20f)](y);
            v = z;
        }
        const w = m[G(0x1f9)](t, m[G(0x1fb)](q, u[G(0x224)]));
        return {
            'messages': u[G(0x1fc)](),
            'messagesOffLine': v,
            'ticket': o,
            'count': t,
            'hasMore': w
        };
    };
exports[D(0x225)] = ListMessagesService;