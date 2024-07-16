'use strict';
const G = b, H = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x4b * 0x49 + 0x10dc + 0x656);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const E = b, F = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(E(0x1ff)) / (-0x1d * -0x3b + 0x1 * -0xf8f + -0x1 * -0x8e1) * (-parseInt(E(0x20d)) / (-0x25e0 + 0x154 * -0x11 + 0x3c76)) + parseInt(F(0x1d3)) / (-0x5f8 + 0x9df + -0x3e4) * (parseInt(F(0x1df)) / (-0x1f56 + 0x1547 + 0xa13 * 0x1)) + parseInt(F(0x1ea)) / (-0x1fc4 + -0xd7a * 0x1 + 0x2d43 * 0x1) * (parseInt(F(0x1fd)) / (-0x21 * -0x38 + -0xd81 + -0x1 * -0x64f)) + -parseInt(F(0x1dc)) / (0x4 * 0x694 + 0x5e * -0x35 + -0x6d3) + -parseInt(F(0x1dd)) / (0x3da + 0x1266 + -0x1638) * (-parseInt(F(0x1f8)) / (-0x1 * 0x22e7 + 0x5 * -0x2f1 + 0x31a5)) + -parseInt(E(0x1e1)) / (-0x21d2 + 0x1482 + 0x1 * 0xd5a) + parseInt(F(0x1d7)) / (0x1904 + 0x1801 + -0x30fa);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2dc70 + 0x59d9a + 0x33f2));
function a() {
    const L = [
        '952655HmjLSr',
        'tenantId',
        '../../util',
        'status',
        '_SYSTEM',
        '1783670NJQerx',
        '568SgHKqN',
        'include',
        '84DkjafF',
        'default',
        '1434350pHWmdJ',
        'where',
        'type',
        'erty',
        'KTLVl',
        'cGdlN',
        'pending',
        '../TicketS',
        'getTime',
        '6555XFbfFx',
        'ers/socket',
        'mediaName',
        'findOne',
        'yCyHG',
        'rvice',
        'ls/Message',
        'value',
        'update',
        'owTicketSe',
        'ervices/Sh',
        'chat',
        'create',
        '../../mode',
        '17217uGguXM',
        'body',
        'quotedMsg',
        'model',
        'VFdzF',
        '1614edtToa',
        'idation',
        '172253GmuMtv',
        'whatsappId',
        'contactId',
        'XemkA',
        'kXMBj',
        '../../help',
        'chat:creat',
        'sequelize',
        '__esModule',
        'open',
        'ls/Ticket',
        's/queueVal',
        'payload',
        'ERR_CREATI',
        '2yVmSTM',
        'mediaType',
        'dypdn',
        'isGroup',
        'Emit',
        'ticket',
        'fault',
        '__importDe',
        'NG_MESSAGE',
        'qFTqT',
        '27033fOcIlh',
        'findByPk',
        'defineProp',
        'contact'
    ];
    a = function () {
        return L;
    };
    return a();
}
var __importDefault = this && this[G(0x1d0) + G(0x1cf)] || function (c) {
    const I = H;
    return c && c[I(0x207)] ? c : { 'default': c };
};
const k = {};
k[G(0x1f1)] = !![], Object[G(0x1d5) + G(0x1e4)](exports, G(0x207), k);
const sequelize_1 = require(G(0x206)), socketEmit_1 = __importDefault(require(H(0x204) + H(0x1eb) + G(0x211))), Message_1 = __importDefault(require(H(0x1f7) + H(0x1f0))), Ticket_1 = __importDefault(require(H(0x1f7) + G(0x209))), ShowTicketService_1 = __importDefault(require(G(0x1e8) + G(0x1f4) + H(0x1f3) + G(0x1ef))), queueValidation_1 = __importDefault(require(G(0x1d9) + G(0x20a) + H(0x1fe))), CreateForwardMessageService = async ({
        userId: l,
        tenantId: m,
        message: n,
        contact: o,
        ticketIdOrigin: p
    }) => {
        const J = H, K = H, q = {};
        q[J(0x203)] = K(0x208), q[K(0x20f)] = J(0x1e7), q[K(0x1e5)] = J(0x1f5), q[K(0x1fc)] = K(0x212), q[K(0x202)] = J(0x1d6), q[J(0x1d2)] = J(0x1fa), q[J(0x1ee)] = J(0x20c) + J(0x1d1) + J(0x1db), q[K(0x1e6)] = K(0x205) + 'e';
        const r = q, s = {};
        s['id'] = p, s[J(0x1d8)] = m;
        const t = await (0x4e1 + 0x5c7 + -0x1 * 0xaa8, ShowTicketService_1[J(0x1e0)])(s);
        let u;
        const v = {
                [sequelize_1['Op']['or']]: [
                    r[J(0x203)],
                    r[J(0x20f)]
                ]
            }, w = {};
        w[J(0x1da)] = v, w[J(0x1d8)] = m, w[J(0x201)] = o['id'];
        const x = {};
        x[K(0x1e2)] = w, u = await Ticket_1[J(0x1e0)][K(0x1ed)](x);
        !u && (u = await Ticket_1[J(0x1e0)][K(0x1f6)]({
            'contactId': o['id'],
            'status': r[K(0x203)],
            'isGroup': o[K(0x210)],
            'userId': l,
            'tenantId': m,
            'unreadMessages': 0x0,
            'whatsappId': t[J(0x200)],
            'lastMessage': n[K(0x1f9)],
            'lastMessageAt': new Date()[K(0x1e9)](),
            'answered': !![]
        }));
        const y = {
                'body': n[K(0x1f9)],
                'contactId': o['id'],
                'fromMe': !![],
                'read': !![],
                'mediaType': n?.[K(0x20e)],
                'mediaUrl': n?.[K(0x1ec)],
                'mediaName': n?.[J(0x1ec)],
                'timestamp': new Date()[K(0x1e9)](),
                'userId': l,
                'scheduleDate': null,
                'sendType': r[J(0x1e5)],
                'status': r[K(0x20f)],
                'ticketId': u['id'],
                'tenantId': m
            }, z = await Message_1[J(0x1e0)][K(0x1f6)](y), A = {};
        A[K(0x1d8)] = m;
        const B = {};
        B[K(0x1fb)] = Ticket_1[J(0x1e0)], B['as'] = r[K(0x1fc)], B[J(0x1e2)] = A, B[J(0x1de)] = [r[K(0x202)]];
        const C = await Message_1[J(0x1e0)][K(0x1d4)](z['id'], {
            'include': [
                B,
                {
                    'model': Message_1[K(0x1e0)],
                    'as': r[J(0x1d2)],
                    'include': [r[J(0x202)]]
                }
            ]
        });
        if (!C)
            throw new Error(r[J(0x1ee)]);
        await u[K(0x1f2)]({
            'lastMessage': C[K(0x1f9)],
            'lastMessageAt': new Date()[J(0x1e9)](),
            'answered': !![]
        }), await (0x149b + 0xc0 * -0x20 + 0x365, queueValidation_1[J(0x1e0)])(u[K(0x200)], u[J(0x1d8)], [C]);
        const D = {};
        D[J(0x1d8)] = m, D[J(0x1e3)] = r[J(0x1e6)], D[K(0x20b)] = C, (0x530 + 0xc * -0x5b + -0xec, socketEmit_1[J(0x1e0)])(D);
    };
exports[H(0x1e0)] = CreateForwardMessageService;