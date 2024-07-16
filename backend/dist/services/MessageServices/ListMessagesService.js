'use strict';
const D = b, E = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1348 + 0x1794 + -0x378);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const B = b, C = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(B(0xe1)) / (-0x3 * 0x4c7 + -0x51 * -0x17 + -0x1 * -0x70f) * (parseInt(B(0x10d)) / (-0x18a6 + 0xc5 * -0x12 + 0x2682)) + parseInt(B(0xee)) / (-0x9ed + 0x1be4 + -0x11f4) + parseInt(C(0xd9)) / (0x1 * 0x619 + -0xd43 + 0x72e) * (parseInt(C(0xf8)) / (0x15 * 0xc1 + 0x1 * -0x6fb + -0x8d5)) + parseInt(C(0x104)) / (0x1 * -0x66c + -0x1224 + -0x1896 * -0x1) * (-parseInt(B(0xe3)) / (-0x2 * -0x97f + 0x29 * -0xae + 0x8e7)) + parseInt(C(0xf1)) / (-0x1718 + 0x1568 + 0x1 * 0x1b8) + parseInt(C(0xde)) / (0x1 * -0x196a + 0x87e + 0x10f5) * (-parseInt(B(0xfa)) / (-0x156d + -0x1e8a + 0x3401 * 0x1)) + parseInt(C(0xe7)) / (0x171f + 0x14 * -0x82 + -0xcec);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x8f299 * 0x1 + -0x183b * -0xd4 + -0x10373c));
var __importDefault = this && this[D(0xe6) + E(0x102)] || function (c) {
    const F = D;
    return c && c[F(0xeb)] ? c : { 'default': c };
};
const k = {};
function a() {
    const I = [
        'StWSc',
        'kdiYh',
        'fault',
        'vMUBT',
        '18eUAdSW',
        'default',
        'erty',
        'whatsappId',
        '../../mode',
        'length',
        'owTicketSe',
        'yfwry',
        'createdAt',
        '159754krBroQ',
        'defineProp',
        'hAJOi',
        'rs/AppErro',
        '../../erro',
        'model',
        '85748outBZK',
        'quotedMsg',
        'ticketId',
        'order',
        'ERR_NO_TIC',
        '400959eqhmQl',
        'oTitA',
        'feJwv',
        '21EcCPIw',
        'findAndCou',
        '528073WYpMVt',
        'ervices/Sh',
        'ls/Message',
        '__importDe',
        '3988358TXryzk',
        'rvice',
        'where',
        'ntAll',
        '__esModule',
        'ls/Ticket',
        'qpnhr',
        '2937657tlppKW',
        'value',
        'iJWkA',
        '7226368TxqYrv',
        'include',
        'contactId',
        'reverse',
        'tenantId',
        'DESC',
        '../TicketS',
        '355jnHGmO',
        'kvhJU',
        '230HSElsV',
        'contact',
        'KET_FOUND',
        'queueId',
        'required',
        'OffLine'
    ];
    a = function () {
        return I;
    };
    return a();
}
k[E(0xef)] = !![], Object[E(0xd4) + E(0x106)](exports, E(0xeb), k);
const AppError_1 = __importDefault(require(E(0xd7) + E(0xd6) + 'r')), Message_1 = __importDefault(require(D(0x108) + D(0xe5))), MessageOffLine_1 = __importDefault(require(D(0x108) + E(0xe5) + D(0xff))), Ticket_1 = __importDefault(require(E(0x108) + D(0xec))), ShowTicketService_1 = __importDefault(require(D(0xf7) + E(0xe4) + E(0x10a) + D(0xe8))), ListMessagesService = async ({
        pageNumber: pageNumber = '1',
        ticketId: i,
        tenantId: j
    }) => {
        const G = E, H = E, l = {};
        l[G(0x100)] = G(0xdd) + G(0xfc), l[G(0x10b)] = function (z, A) {
            return z * A;
        }, l[G(0xf0)] = function (z, A) {
            return z - A;
        }, l[G(0xd5)] = G(0xfb), l[G(0xdf)] = G(0xda), l[H(0xe0)] = H(0x10c), l[H(0x103)] = H(0xf6), l[G(0xf9)] = function (z, A) {
            return z === A;
        }, l[H(0x101)] = function (z, A) {
            return z > A;
        }, l[H(0xed)] = function (z, A) {
            return z + A;
        };
        const m = l, n = {};
        n['id'] = i, n[G(0xf5)] = j;
        const o = await (-0xa * 0x51 + -0x6d9 * -0x5 + 0x1f13 * -0x1, ShowTicketService_1[G(0x105)])(n);
        if (!o)
            throw new AppError_1[(G(0x105))](m[H(0x100)], -0x95b * 0x3 + -0x1 * 0x1d4b + -0x290 * -0x17);
        const p = 0x40 * -0x7e + -0x2208 + 0x41a6, q = m[H(0x10b)](p, m[H(0xf0)](+pageNumber, 0x1 * 0x1273 + 0x2 * 0x585 + -0x1d7c)), r = {};
        r[G(0xfd)] = o[G(0xfd)], r[G(0xf3)] = o[G(0xf3)], r[H(0x107)] = o[G(0x107)], r['id'] = o['id'];
        const s = {};
        s[G(0xd8)] = Ticket_1[G(0x105)], s[H(0xe9)] = r, s[H(0xfe)] = !![];
        const {
            count: t,
            rows: u
        } = await Message_1[H(0x105)][H(0xe2) + G(0xea)]({
            'limit': p,
            'include': [
                m[H(0xd5)],
                {
                    'model': Message_1[G(0x105)],
                    'as': m[G(0xdf)],
                    'include': [m[H(0xd5)]]
                },
                s
            ],
            'offset': q,
            'order': [[
                    m[G(0xe0)],
                    m[G(0x103)]
                ]]
        });
        let v = [];
        if (m[H(0xf9)](+pageNumber, -0x1 * -0xfa6 + -0x1a51 + 0xaac)) {
            const x = {};
            x[G(0xdb)] = i;
            const y = {};
            y[G(0xe9)] = x, y[H(0xf2)] = [
                m[G(0xd5)],
                {
                    'model': Message_1[G(0x105)],
                    'as': m[H(0xdf)],
                    'include': [m[H(0xd5)]]
                }
            ], y[G(0xdc)] = [[
                    m[G(0xe0)],
                    m[G(0x103)]
                ]];
            const {rows: z} = await MessageOffLine_1[H(0x105)][H(0xe2) + H(0xea)](y);
            v = z;
        }
        const w = m[G(0x101)](t, m[G(0xed)](q, u[G(0x109)]));
        return {
            'messages': u[H(0xf4)](),
            'messagesOffLine': v,
            'ticket': o,
            'count': t,
            'hasMore': w
        };
    };
exports[E(0x105)] = ListMessagesService;