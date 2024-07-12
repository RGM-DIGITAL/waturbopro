'use strict';
const G = b, H = b;
(function (c, d) {
    const E = b, F = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(E(0xb6)) / (-0xf8d + 0xfaa + -0x1c) * (parseInt(E(0xce)) / (0x3 * -0x7be + 0x16a2 + 0xe * 0xb)) + -parseInt(F(0xa7)) / (0x18 * -0x2e + 0x32a * 0x8 + -0x14fd) * (parseInt(F(0xd4)) / (-0x680 + -0x17f * -0xd + -0x12d * 0xb)) + -parseInt(E(0xa1)) / (-0x32 * 0x1 + 0x2e * -0x10 + 0x317) + -parseInt(F(0xba)) / (0x7cb * -0x1 + -0x2187 + 0x2958) * (-parseInt(E(0xcd)) / (-0x9ba * 0x3 + 0x92d + -0x2 * -0xa04)) + parseInt(F(0xd7)) / (-0x4 * -0x8 + 0xce * 0x18 + -0x1368) + -parseInt(E(0xd8)) / (-0x852 + -0x4a1 * -0x4 + 0x33 * -0x33) + parseInt(F(0xab)) / (-0x108e + 0x1e40 + 0x5c * -0x26);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xb54f1 + -0xabd * -0x67 + -0x59ff1));
var __importDefault = this && this[G(0xd3) + H(0xc1)] || function (c) {
    const I = G;
    return c && c[I(0xcf)] ? c : { 'default': c };
};
function a() {
    const L = [
        'value',
        'YBSxB',
        '2453400CxdnKA',
        'ofDOn',
        'nzlDx',
        'owTicketSe',
        'eajCt',
        'sequelize',
        'ls/Message',
        'include',
        'model',
        'findOne',
        'quotedMsg',
        '47001VIEIyc',
        's/queueVal',
        'open',
        'contactId',
        '20100VriAKg',
        'whatsappId',
        '../TicketS',
        'default',
        'type',
        'ticket',
        'getTime',
        'fault',
        '../../mode',
        'ls/Ticket',
        'contact',
        'eaRGe',
        'create',
        '../../util',
        'ERR_CREATI',
        'nkBQj',
        'rvice',
        'chat:creat',
        '../../help',
        '1883DSXtMI',
        '26zIfEvE',
        '__esModule',
        'mediaName',
        'body',
        'ervices/Sh',
        '__importDe',
        '604EGMQlG',
        'pending',
        'findByPk',
        '1154400dqDQLL',
        '850734qmnPHF',
        'mediaType',
        'status',
        'chat',
        'where',
        'update',
        '_SYSTEM',
        'defineProp',
        'NG_MESSAGE',
        'erty',
        'idation',
        'payload',
        '4275300UXUwhS',
        'ers/socket',
        'Emit',
        'YTQUU',
        'isGroup',
        'tenantId',
        '5862UQxLbh',
        'PgMoi'
    ];
    a = function () {
        return L;
    };
    return a();
}
const k = {};
k[G(0xa9)] = !![], Object[G(0xdf) + G(0xe1)](exports, G(0xcf), k);
const sequelize_1 = require(G(0xb0)), socketEmit_1 = __importDefault(require(G(0xcc) + H(0xa2) + H(0xa3))), Message_1 = __importDefault(require(H(0xc2) + G(0xb1))), Ticket_1 = __importDefault(require(G(0xc2) + H(0xc3))), ShowTicketService_1 = __importDefault(require(G(0xbc) + H(0xd2) + H(0xae) + H(0xca))), queueValidation_1 = __importDefault(require(G(0xc7) + H(0xb7) + H(0xe2))), CreateForwardMessageService = async ({
        userId: l,
        tenantId: m,
        message: n,
        contact: o,
        ticketIdOrigin: p
    }) => {
        const J = H, K = G, q = {};
        q[J(0xc5)] = K(0xb8), q[K(0xac)] = K(0xd5), q[J(0xa8)] = J(0xdb), q[K(0xa4)] = K(0xbf), q[K(0xad)] = K(0xc4), q[J(0xaf)] = J(0xb5), q[K(0xaa)] = J(0xc8) + J(0xe0) + K(0xde), q[J(0xc9)] = J(0xcb) + 'e';
        const r = q, s = {};
        s['id'] = p, s[K(0xa6)] = m;
        const t = await (0x17c * -0xa + 0x19 * -0xe3 + 0x2503, ShowTicketService_1[J(0xbd)])(s);
        let u;
        const v = {
                [sequelize_1['Op']['or']]: [
                    r[J(0xc5)],
                    r[J(0xac)]
                ]
            }, w = {};
        w[K(0xda)] = v, w[K(0xa6)] = m, w[J(0xb9)] = o['id'];
        const x = {};
        x[J(0xdc)] = w, u = await Ticket_1[J(0xbd)][K(0xb4)](x);
        !u && (u = await Ticket_1[J(0xbd)][J(0xc6)]({
            'contactId': o['id'],
            'status': r[J(0xc5)],
            'isGroup': o[K(0xa5)],
            'userId': l,
            'tenantId': m,
            'unreadMessages': 0x0,
            'whatsappId': t[J(0xbb)],
            'lastMessage': n[K(0xd1)],
            'lastMessageAt': new Date()[J(0xc0)](),
            'answered': !![]
        }));
        const y = {
                'body': n[K(0xd1)],
                'contactId': o['id'],
                'fromMe': !![],
                'read': !![],
                'mediaType': n?.[J(0xd9)],
                'mediaUrl': n?.[K(0xd0)],
                'mediaName': n?.[K(0xd0)],
                'timestamp': new Date()[J(0xc0)](),
                'userId': l,
                'scheduleDate': null,
                'sendType': r[K(0xa8)],
                'status': r[K(0xac)],
                'ticketId': u['id'],
                'tenantId': m
            }, z = await Message_1[K(0xbd)][J(0xc6)](y), A = {};
        A[J(0xa6)] = m;
        const B = {};
        B[K(0xb3)] = Ticket_1[K(0xbd)], B['as'] = r[K(0xa4)], B[K(0xdc)] = A, B[J(0xb2)] = [r[K(0xad)]];
        const C = await Message_1[J(0xbd)][J(0xd6)](z['id'], {
            'include': [
                B,
                {
                    'model': Message_1[J(0xbd)],
                    'as': r[K(0xaf)],
                    'include': [r[J(0xad)]]
                }
            ]
        });
        if (!C)
            throw new Error(r[J(0xaa)]);
        await u[K(0xdd)]({
            'lastMessage': C[K(0xd1)],
            'lastMessageAt': new Date()[K(0xc0)](),
            'answered': !![]
        }), await (-0x7 * -0x4b1 + 0x504 * 0x7 + -0x43f3, queueValidation_1[J(0xbd)])(u[K(0xbb)], u[K(0xa6)], [C]);
        const D = {};
        D[J(0xa6)] = m, D[K(0xbe)] = r[J(0xc9)], D[K(0xa0)] = C, (-0xde8 + -0x49 * -0x74 + -0x132c, socketEmit_1[J(0xbd)])(D);
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x193f + -0x10 * 0x146 + 0x2e3f);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[G(0xbd)] = CreateForwardMessageService;