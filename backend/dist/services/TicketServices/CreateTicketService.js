'use strict';
function a() {
    const G = [
        'Services/S',
        'aultWhatsA',
        '53110qmiVVd',
        '__esModule',
        'Tickets',
        'defineProp',
        './CreateLo',
        'howContact',
        'ticket',
        'telegram',
        'gTicketSer',
        'ERR_CREATI',
        'mand',
        'vice',
        'status',
        'NG_TICKET',
        '5181822cbHKSp',
        'channel',
        'Bpbml',
        'Emit',
        'isGroup',
        'type',
        '78061QalwZm',
        'whatsapp',
        'UexWm',
        '2aLyQhV',
        'tenantId',
        '../../erro',
        'Zzopq',
        'create',
        'contactId',
        'ontactOpen',
        'ticketId',
        'ate',
        'erty',
        'ticket:upd',
        '8253826gapXta',
        './ShowTick',
        'xJpRC',
        'ers/GetDef',
        'fault',
        'cOcXS',
        'value',
        'flKwV',
        'iaVvN',
        '4921617WKoYSh',
        'ers/CheckC',
        'includes',
        'rs/AppErro',
        '12414368tKbRkf',
        'instagram',
        '../../help',
        '../Contact',
        'Service',
        'ers/socket',
        '4782024QSnGpX',
        'etService',
        '196BUosSC',
        'default',
        '__importDe',
        '$create',
        'payload',
        'isActiveDe',
        'userId'
    ];
    a = function () {
        return G;
    };
    return a();
}
const B = b, C = b;
(function (c, d) {
    const z = b, A = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(z(0xf5)) / (-0x1ed7 + -0x1f3 * -0x13 + -0x631) + -parseInt(z(0xf8)) / (0x773 * -0x5 + -0x1666 + -0x1 * -0x3ba7) * (parseInt(A(0x10c)) / (0x1db + -0x1f7d + 0x1da5)) + parseInt(A(0x118)) / (-0x8ae + 0x1971 + -0x10bf) * (-parseInt(z(0xe1)) / (-0x800 * 0x2 + -0x35 * -0x79 + -0x88 * 0x11)) + parseInt(A(0xef)) / (-0x4 * 0x11e + -0x6ef * -0x1 + 0x5 * -0x7d) + parseInt(z(0x103)) / (-0x13e6 + -0x20d8 * -0x1 + -0x1 * 0xceb) + parseInt(z(0x110)) / (-0x11f7 + -0x6b0 + 0x18af) + -parseInt(z(0x116)) / (0x2 * -0x10e2 + 0x16a * -0x10 + 0x386d * 0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x31 * -0x73d6 + -0x7f1c2 * -0x2 + 0x2285 * -0xbd));
var __importDefault = this && this[B(0x11a) + C(0x107)] || function (c) {
    const D = B;
    return c && c[D(0xe2)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2 * -0xee + 0x416 + -0x1 * 0x513);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[C(0x109)] = !![], Object[C(0xe4) + B(0x101)](exports, C(0xe2), k);
const AppError_1 = __importDefault(require(B(0xfa) + B(0x10f) + 'r')), CheckContactOpenTickets_1 = __importDefault(require(B(0x112) + B(0x10d) + C(0xfe) + C(0xe3))), GetDefaultWhatsApp_1 = __importDefault(require(C(0x112) + C(0x106) + C(0xe0) + 'pp')), socketEmit_1 = __importDefault(require(B(0x112) + B(0x115) + C(0xf2))), ShowContactService_1 = __importDefault(require(B(0x113) + B(0xdf) + B(0xe6) + C(0x114))), CreateLogTicketService_1 = __importDefault(require(C(0xe5) + C(0xe9) + B(0xec))), ShowTicketService_1 = __importDefault(require(C(0x104) + C(0x117))), CreateTicketService = async ({
        contactId: i,
        status: j,
        userId: l,
        tenantId: m,
        channel: n,
        channelId: channelId = undefined
    }) => {
        const E = C, F = B, o = {};
        o[E(0xf7)] = E(0x111), o[E(0x105)] = F(0xe8), o[E(0x10a)] = E(0xf6), o[F(0xf1)] = E(0xea) + E(0xee), o[E(0xfb)] = F(0xe7), o[F(0x108)] = F(0xfc), o[E(0x10b)] = F(0x102) + E(0x100);
        const p = o, q = await (-0x1 * -0x100e + -0x5 * -0xbf + 0x1 * -0x13c9, GetDefaultWhatsApp_1[E(0x119)])(m, channelId);
        if (!n || ![
                p[F(0xf7)],
                p[E(0x105)],
                p[E(0x10a)]
            ][E(0x10e)](n))
            throw new AppError_1[(E(0x119))](p[E(0xf1)]);
        await (-0x149c + 0x644 * -0x1 + 0x1ae0, CheckContactOpenTickets_1[E(0x119)])(i);
        const r = {};
        r['id'] = i, r[E(0xf9)] = m;
        const {isGroup: s} = await (0x4 * -0x260 + 0x24f * 0x1 + 0x731 * 0x1, ShowContactService_1[F(0x119)])(r), t = {};
        t[F(0xfd)] = i, t[E(0xed)] = j, t[F(0xf3)] = s, t[F(0x11e)] = l, t[F(0x11d) + F(0xeb)] = !![], t[E(0xf0)] = n, t[E(0xf9)] = m;
        const {id: u} = await q[E(0x11b)](p[F(0xfb)], t), v = {};
        v['id'] = u, v[F(0xf9)] = m;
        const w = await (-0x1 * 0x1733 + -0x1b8f + -0xb2 * -0x49, ShowTicketService_1[E(0x119)])(v);
        if (!w)
            throw new AppError_1[(F(0x119))](p[F(0xf1)]);
        const x = {};
        x[E(0x11e)] = l, x[F(0xff)] = w['id'], x[E(0xf4)] = p[F(0x108)], await (-0x2464 + 0x1 * 0xbc0 + -0x13 * -0x14c, CreateLogTicketService_1[E(0x119)])(x);
        const y = {};
        return y[E(0xf9)] = m, y[E(0xf4)] = p[E(0x10b)], y[F(0x11c)] = w, (-0x1 * 0x80a + -0x262c + 0x46 * 0xa9, socketEmit_1[E(0x119)])(y), w;
    };
exports[C(0x119)] = CreateTicketService;