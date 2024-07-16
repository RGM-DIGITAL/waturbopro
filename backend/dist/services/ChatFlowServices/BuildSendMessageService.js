'use strict';
const K = b, L = b;
(function (c, d) {
    const I = b, J = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(I(0x17f)) / (-0x2520 + 0x1040 + 0x14e1) + -parseInt(J(0x196)) / (0x1579 + 0xa4 * 0x2e + 0x32ef * -0x1) + -parseInt(I(0x1b9)) / (-0x1a5d * 0x1 + -0x4 * -0xe5 + -0xb66 * -0x2) + parseInt(I(0x1bb)) / (-0x301 + -0x36c + 0x671) + -parseInt(J(0x190)) / (-0x82a + 0xa * -0x13d + -0x41 * -0x51) * (-parseInt(J(0x183)) / (-0x2603 + 0x49c * -0x8 + -0x1 * -0x4ae9)) + -parseInt(J(0x1b1)) / (-0x2 * -0xbd9 + 0x2 * -0x66e + 0xacf * -0x1) * (-parseInt(J(0x181)) / (-0x915 + 0x22 * 0x9b + -0x3 * 0x3d3)) + -parseInt(I(0x1b5)) / (-0x1eb * 0x4 + -0x318 + 0xacd);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x10ed30 + -0x1535a + -0x4d9fb));
var __importDefault = this && this[K(0x193) + L(0x18d)] || function (c) {
    const M = L;
    return c && c[M(0x17b)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x926 + 0x5a * 0x33 + 0x272 * -0x3);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[K(0x188)] = !![], Object[L(0x17c) + L(0x179)](exports, L(0x17b), k);
function a() {
    const P = [
        'findByPk',
        'BRFFR',
        '../../help',
        'NImqd',
        'essageServ',
        'create',
        'error',
        'NG_MESSAGE',
        '14cfKyPe',
        'protocol',
        'payload',
        'mediaType',
        '492750kmVQee',
        '_SYSTEM',
        's/logger',
        'data',
        '3832491LnlkEx',
        'indexOf',
        '2659684TumgAO',
        'ERR_CREATI',
        'model',
        '../../mode',
        'mediaUrl',
        'ers/socket',
        'contact',
        'split',
        'ticket',
        's/pupa',
        'default',
        'update',
        'body',
        'erty',
        'chat',
        '__esModule',
        'defineProp',
        'CMGNP',
        'ZDHrr',
        '340735whTOKd',
        'message',
        '246728sUkdEX',
        'contactId',
        '3710598NkoUOL',
        'ls/Message',
        'juwKH',
        'PNDGJ',
        'bot',
        'value',
        'tenantId',
        'xuACq',
        'length',
        'include',
        'fault',
        'chat:creat',
        'type',
        '10ARxEKK',
        'ls/Ticket',
        'Emit',
        '__importDe',
        'MediaField',
        'nBzxM',
        '534964UZmJye',
        'ice',
        'quotedMsg',
        'pending',
        'BuildSendM',
        'pupa',
        'AskJR',
        'ZFhJV',
        'glkCr',
        'idation',
        '../../util',
        's/queueVal',
        'getTime',
        'whatsappId',
        'where',
        'name',
        'logger',
        'lxFWr',
        'substr'
    ];
    a = function () {
        return P;
    };
    return a();
}
const pupa_1 = require(K(0x1a0) + L(0x175)), logger_1 = require(L(0x1a0) + L(0x1b7)), Ticket_1 = __importDefault(require(L(0x1be) + L(0x191))), Message_1 = __importDefault(require(K(0x1be) + L(0x184))), socketEmit_1 = __importDefault(require(K(0x1ab) + L(0x1c0) + L(0x192))), queueValidation_1 = __importDefault(require(L(0x1a0) + K(0x1a1) + L(0x19f))), BuildSendMessageService = async ({
        msg: m,
        tenantId: n,
        ticket: o,
        userId: p
    }) => {
        const N = L, O = L, q = {};
        q[N(0x1aa)] = O(0x17a), q[N(0x186)] = O(0x187), q[N(0x17e)] = O(0x199), q[O(0x19d)] = function (t, u) {
            return t === u;
        }, q[N(0x1ac)] = N(0x194), q[O(0x19e)] = function (t, u) {
            return t - u;
        }, q[O(0x17d)] = N(0x174), q[N(0x18a)] = O(0x172), q[O(0x1a7)] = N(0x198), q[N(0x195)] = O(0x1bc) + O(0x1b0) + N(0x1b6), q[O(0x19c)] = O(0x18e) + 'e', q[N(0x185)] = N(0x19a) + N(0x1ad) + O(0x197);
        const r = q, s = {
                'ticketId': o['id'],
                'body': '',
                'contactId': o[N(0x182)],
                'fromMe': !![],
                'read': !![],
                'mediaType': r[N(0x1aa)],
                'mediaUrl': undefined,
                'timestamp': new Date()[O(0x1a2)](),
                'quotedMsgId': undefined,
                'userId': p,
                'scheduleDate': undefined,
                'sendType': r[N(0x186)],
                'status': r[O(0x17e)],
                'tenantId': n
            };
        try {
            if (r[N(0x19d)](m[O(0x18f)], r[O(0x1ac)]) && m[O(0x1b8)][O(0x1bf)]) {
                const t = m[N(0x1b8)][N(0x1bf)][O(0x173)]('/'), u = {
                        ...s,
                        'body': m[O(0x1b8)][N(0x1a5)],
                        'mediaUrl': t[r[N(0x19e)](t[O(0x18b)], -0xd5b + 0x1171 + -0x415)],
                        'mediaType': m[N(0x1b8)][N(0x18f)] ? m[N(0x1b8)]?.[N(0x18f)][N(0x1a8)](-0xde1 + 0xce7 + -0xa * -0x19, m[O(0x1b8)][O(0x18f)][O(0x1ba)]('/')) : r[O(0x1aa)]
                    }, v = await Message_1[N(0x176)][O(0x1ae)](u), w = {};
                w[O(0x189)] = n;
                const x = {};
                x[O(0x1bd)] = Ticket_1[N(0x176)], x['as'] = r[O(0x17d)], x[O(0x1a4)] = w, x[N(0x18c)] = [r[N(0x18a)]];
                const y = await Message_1[N(0x176)][O(0x1a9)](v['id'], {
                    'include': [
                        x,
                        {
                            'model': Message_1[O(0x176)],
                            'as': r[N(0x1a7)],
                            'include': [r[O(0x18a)]]
                        }
                    ]
                });
                if (!y)
                    throw new Error(r[O(0x195)]);
                await o[O(0x177)]({
                    'lastMessage': y[N(0x178)],
                    'lastMessageAt': new Date()[N(0x1a2)]()
                }), await (0x1167 + -0x69 + -0x10fe, queueValidation_1[O(0x176)])(o[N(0x1a3)], o[O(0x189)], [y]);
                const z = {};
                z[N(0x189)] = n, z[O(0x18f)] = r[O(0x19c)], z[O(0x1b3)] = y, (0x183d + 0x68 * 0x34 + 0xf1f * -0x3, socketEmit_1[N(0x176)])(z);
            } else {
                const A = {};
                A[N(0x1b2)] = o[N(0x1b2)], A[O(0x1a5)] = o[N(0x172)][O(0x1a5)], m[O(0x1b8)][N(0x180)] = (-0xe1e * 0x1 + 0x1b3 + 0xc6b, pupa_1[N(0x19b)])(m[O(0x1b8)][N(0x180)] || '', A);
                const B = { ...s };
                B[O(0x178)] = m[O(0x1b8)][N(0x180)], B[O(0x1b4)] = r[N(0x1aa)];
                const C = await Message_1[O(0x176)][N(0x1ae)](B), D = {};
                D[O(0x189)] = n;
                const E = {};
                E[N(0x1bd)] = Ticket_1[O(0x176)], E['as'] = r[O(0x17d)], E[N(0x1a4)] = D, E[N(0x18c)] = [r[O(0x18a)]];
                const F = await Message_1[N(0x176)][O(0x1a9)](C['id'], {
                    'include': [
                        E,
                        {
                            'model': Message_1[O(0x176)],
                            'as': r[O(0x1a7)],
                            'include': [r[N(0x18a)]]
                        }
                    ]
                });
                if (!F)
                    throw new Error(r[O(0x195)]);
                await o[O(0x177)]({
                    'lastMessage': F[N(0x178)],
                    'lastMessageAt': new Date()[N(0x1a2)](),
                    'answered': !![]
                }), await (-0x1949 + -0x1 * -0x107b + -0x467 * -0x2, queueValidation_1[O(0x176)])(o[O(0x1a3)], o[N(0x189)], [F]);
                const G = {};
                G[O(0x189)] = n, G[N(0x18f)] = r[N(0x19c)], G[N(0x1b3)] = F, (-0x26ad * -0x1 + 0x2677 * 0x1 + -0x4d24, socketEmit_1[N(0x176)])(G);
            }
        } catch (H) {
            logger_1[N(0x1a6)][O(0x1af)](r[N(0x185)], H);
        }
    };
exports[L(0x176)] = BuildSendMessageService;