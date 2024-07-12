'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2bf * 0xb + 0x17b6 + 0xe2 * -0x3b);
        let h = e[f];
        return h;
    }, b(c, d);
}
const B = b, C = b;
(function (c, d) {
    const z = b, A = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(z(0x200)) / (-0x964 * 0x4 + -0xf11 + 0x34a2) * (parseInt(z(0x1e5)) / (0x1f * -0x107 + -0x113c + 0x3117)) + parseInt(A(0x1fb)) / (-0x1e30 + 0xb5a + -0x12d9 * -0x1) * (parseInt(z(0x1dc)) / (-0x1247 + -0x123f + 0x248a)) + parseInt(z(0x1d7)) / (-0x5a + 0x2509 * -0x1 + 0xfc * 0x26) * (parseInt(A(0x206)) / (0x167c + -0x24bc + 0xe46)) + parseInt(A(0x20e)) / (-0x239 * -0xd + 0xdc4 + 0x141 * -0x22) * (parseInt(z(0x1e9)) / (0xbd + -0x1817 * 0x1 + 0x1762 * 0x1)) + parseInt(A(0x213)) / (-0x1c46 + 0x1f53 + 0x1 * -0x304) + parseInt(A(0x1f2)) / (0x74f + -0x22c5 + 0x28 * 0xb0) * (parseInt(z(0x1f1)) / (0x152e + 0x1612 + -0x9 * 0x4cd)) + -parseInt(z(0x1e7)) / (0x83 * -0x45 + 0x96 + 0x22c5) * (parseInt(z(0x1da)) / (0x1dc + 0x1361 + -0x71 * 0x30));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x3 * -0x5764e + 0x1 * 0x107b9f + -0x168e5d));
var __importDefault = this && this[B(0x1f0) + C(0x201)] || function (c) {
    const D = B;
    return c && c[D(0x20d)] ? c : { 'default': c };
};
const k = {};
k[C(0x1f6)] = !![], Object[C(0x1ea) + C(0x1d8)](exports, C(0x20d), k);
const AppError_1 = __importDefault(require(B(0x1ef) + B(0x1e3) + 'r')), CheckContactOpenTickets_1 = __importDefault(require(C(0x218) + C(0x1f7) + B(0x20f) + B(0x1fa))), GetDefaultWhatsApp_1 = __importDefault(require(B(0x218) + C(0x1ff) + B(0x1f5) + 'pp')), socketEmit_1 = __importDefault(require(C(0x218) + C(0x1ee) + C(0x1fc))), ShowContactService_1 = __importDefault(require(B(0x210) + C(0x1db) + B(0x1de) + B(0x203))), CreateLogTicketService_1 = __importDefault(require(C(0x1f3) + B(0x1e0) + B(0x1df))), ShowTicketService_1 = __importDefault(require(B(0x1dd) + B(0x209))), CreateTicketService = async ({
        contactId: i,
        status: j,
        userId: l,
        tenantId: m,
        channel: n,
        channelId: channelId = undefined
    }) => {
        const E = B, F = B, o = {};
        o[E(0x207)] = E(0x1ec), o[F(0x1ed)] = F(0x215), o[E(0x20b)] = E(0x204), o[E(0x1fe)] = F(0x211) + F(0x1d5), o[F(0x1d9)] = F(0x1e1), o[F(0x1e4)] = E(0x214), o[F(0x205)] = F(0x216) + F(0x1f4);
        const p = o, q = await (-0x11cb + 0x2697 + -0x14cc * 0x1, GetDefaultWhatsApp_1[F(0x1f9)])(m, channelId);
        if (!n || ![
                p[E(0x207)],
                p[E(0x1ed)],
                p[E(0x20b)]
            ][F(0x212)](n))
            throw new AppError_1[(E(0x1f9))](p[F(0x1fe)]);
        await (-0x4 * -0x6a3 + 0xf6f + -0x29fb, CheckContactOpenTickets_1[F(0x1f9)])(i);
        const r = {};
        r['id'] = i, r[E(0x1f8)] = m;
        const {isGroup: s} = await (0xe9 * 0x10 + 0x6ee * 0x4 + -0xa92 * 0x4, ShowContactService_1[E(0x1f9)])(r), t = {};
        t[F(0x20c)] = i, t[F(0x1e2)] = j, t[E(0x1fd)] = s, t[F(0x1e6)] = l, t[E(0x1eb) + F(0x20a)] = !![], t[F(0x1e8)] = n, t[F(0x1f8)] = m;
        const {id: u} = await q[F(0x208)](p[F(0x1d9)], t), v = {};
        v['id'] = u, v[E(0x1f8)] = m;
        const w = await (0x116d + -0x1 * -0x61f + 0xbc6 * -0x2, ShowTicketService_1[E(0x1f9)])(v);
        if (!w)
            throw new AppError_1[(E(0x1f9))](p[E(0x1fe)]);
        const x = {};
        x[E(0x1e6)] = l, x[F(0x1d6)] = w['id'], x[E(0x217)] = p[F(0x1e4)], await (0xea9 + -0xb * -0x5f + -0x12be, CreateLogTicketService_1[F(0x1f9)])(x);
        const y = {};
        return y[F(0x1f8)] = m, y[F(0x217)] = p[F(0x205)], y[E(0x202)] = w, (-0x7 * 0x2a1 + 0x95e + 0x909, socketEmit_1[F(0x1f9)])(y), w;
    };
exports[B(0x1f9)] = CreateTicketService;
function a() {
    const G = [
        'Tickets',
        '832947csRjfL',
        'Emit',
        'isGroup',
        'oERon',
        'ers/GetDef',
        '61546BhPmcL',
        'fault',
        'payload',
        'Service',
        'whatsapp',
        'hQHwb',
        '68682ZtyEcB',
        'jfnwU',
        '$create',
        'etService',
        'mand',
        'CUJSo',
        'contactId',
        '__esModule',
        '7ERAEGj',
        'ontactOpen',
        '../Contact',
        'ERR_CREATI',
        'includes',
        '1043352nnFfXr',
        'create',
        'telegram',
        'ticket:upd',
        'type',
        '../../help',
        'NG_TICKET',
        'ticketId',
        '490AIdTIM',
        'erty',
        'AIKuk',
        '433615uxVcoH',
        'Services/S',
        '12ovcIHS',
        './ShowTick',
        'howContact',
        'vice',
        'gTicketSer',
        'ticket',
        'status',
        'rs/AppErro',
        'LNxnd',
        '40MvstlP',
        'userId',
        '672PNrQXy',
        'channel',
        '8036880hbzLKW',
        'defineProp',
        'isActiveDe',
        'instagram',
        'UOAny',
        'ers/socket',
        '../../erro',
        '__importDe',
        '88429PGBGtX',
        '870ESrvpe',
        './CreateLo',
        'ate',
        'aultWhatsA',
        'value',
        'ers/CheckC',
        'tenantId',
        'default'
    ];
    a = function () {
        return G;
    };
    return a();
}