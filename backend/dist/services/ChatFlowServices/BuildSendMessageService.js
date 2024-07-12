'use strict';
const K = b, L = b;
(function (c, d) {
    const I = b, J = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(I(0x1cf)) / (0x1c4 + -0x23db + -0x443 * -0x8) * (parseInt(I(0x1b7)) / (0xbc3 * 0x2 + 0x3 * -0x435 + -0xae5 * 0x1)) + parseInt(J(0x1b9)) / (0xd * 0x15b + 0x2 * 0x2f5 + -0x1786) * (-parseInt(I(0x191)) / (-0x68e * 0x3 + 0x4 * -0x4a3 + 0x263a)) + -parseInt(J(0x19b)) / (0x85 * 0x45 + 0x2a7 + -0x267b) * (-parseInt(I(0x1b0)) / (-0xda * 0x8 + 0x24cc + -0x1df6)) + -parseInt(I(0x1cb)) / (0x1d0 + -0x146f + 0x12a6) + parseInt(I(0x1a4)) / (0x171d * -0x1 + -0x1 * 0x18e6 + 0x31 * 0xfb) * (-parseInt(J(0x1bd)) / (0x2051 + -0x1450 + 0x8 * -0x17f)) + -parseInt(I(0x18a)) / (-0x9 * 0xff + 0xe03 + -0x502) + -parseInt(I(0x197)) / (0x215f + -0x761 * 0x5 + 0x391) * (-parseInt(J(0x1c0)) / (0x16ab + -0x56 * 0x73 + 0x1003));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x152c81 + -0x466cd * -0x4 + -0x193623));
var __importDefault = this && this[K(0x198) + L(0x1b5)] || function (c) {
    const M = L;
    return c && c[M(0x1cd)] ? c : { 'default': c };
};
function a() {
    const P = [
        'findByPk',
        '_SYSTEM',
        'nEskb',
        'idation',
        'pupa',
        '2118795avurce',
        'ls/Ticket',
        '__esModule',
        'contactId',
        '132XJjawq',
        '../../help',
        'message',
        'contact',
        'yngaC',
        'jTTnm',
        '../../mode',
        'mediaUrl',
        'UxdwA',
        'ticket',
        'erty',
        'ERR_CREATI',
        'tenantId',
        '8540560mDkOsR',
        'quotedMsg',
        'update',
        'BuildSendM',
        'MediaField',
        'Emit',
        'chat',
        '5336eRlTzt',
        'length',
        'payload',
        'logger',
        'create',
        'getTime',
        '11LQHAqW',
        '__importDe',
        'WNGcW',
        'include',
        '205935cceNtv',
        'where',
        'IaNrT',
        'essageServ',
        'substr',
        'body',
        'split',
        'data',
        's/queueVal',
        '8eCjecI',
        'ls/Message',
        'JkcFy',
        'chat:creat',
        'XSbMi',
        'LQldW',
        'protocol',
        'default',
        'ers/socket',
        'pending',
        'indexOf',
        'name',
        '180qdSpeH',
        'whatsappId',
        'GyLWy',
        'NG_MESSAGE',
        'mediaType',
        'fault',
        'defineProp',
        '22004iunuGG',
        's/pupa',
        '3489hFgYtf',
        'bot',
        'type',
        'model',
        '10674621wUvxCB',
        'Sofan',
        'value',
        '25147344TwxXzV',
        'error',
        '../../util',
        'yBxjG',
        's/logger',
        'ice'
    ];
    a = function () {
        return P;
    };
    return a();
}
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x3e2 + -0x1 * -0x1fd8 + -0x1a6d);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[K(0x1bf)] = !![], Object[K(0x1b6) + K(0x1d9)](exports, L(0x1cd), k);
const pupa_1 = require(K(0x1c2) + L(0x1b8)), logger_1 = require(K(0x1c2) + K(0x1c4)), Ticket_1 = __importDefault(require(L(0x1d5) + K(0x1cc))), Message_1 = __importDefault(require(K(0x1d5) + K(0x1a5))), socketEmit_1 = __importDefault(require(L(0x1d0) + K(0x1ac) + K(0x18f))), queueValidation_1 = __importDefault(require(K(0x1c2) + K(0x1a3) + L(0x1c9))), BuildSendMessageService = async ({
        msg: m,
        tenantId: n,
        ticket: o,
        userId: p
    }) => {
        const N = L, O = L, q = {};
        q[N(0x1b2)] = O(0x190), q[N(0x1d3)] = O(0x1ba), q[N(0x199)] = N(0x1ad), q[N(0x1a6)] = function (t, u) {
            return t === u;
        }, q[N(0x1a8)] = N(0x18e), q[N(0x1c8)] = function (t, u) {
            return t - u;
        }, q[O(0x1d7)] = N(0x1d8), q[O(0x1d4)] = O(0x1d2), q[N(0x1a9)] = O(0x18b), q[N(0x1be)] = N(0x1da) + O(0x1b3) + N(0x1c7), q[O(0x19d)] = N(0x1a7) + 'e', q[O(0x1c3)] = O(0x18d) + N(0x19e) + O(0x1c5);
        const r = q, s = {
                'ticketId': o['id'],
                'body': '',
                'contactId': o[O(0x1ce)],
                'fromMe': !![],
                'read': !![],
                'mediaType': r[O(0x1b2)],
                'mediaUrl': undefined,
                'timestamp': new Date()[O(0x196)](),
                'quotedMsgId': undefined,
                'userId': p,
                'scheduleDate': undefined,
                'sendType': r[N(0x1d3)],
                'status': r[O(0x199)],
                'tenantId': n
            };
        try {
            if (r[O(0x1a6)](m[N(0x1bb)], r[O(0x1a8)]) && m[N(0x1a2)][N(0x1d6)]) {
                const t = m[N(0x1a2)][O(0x1d6)][N(0x1a1)]('/'), u = {
                        ...s,
                        'body': m[O(0x1a2)][O(0x1af)],
                        'mediaUrl': t[r[O(0x1c8)](t[O(0x192)], 0xf * 0x245 + 0x1889 + -0x5 * 0xbb7)],
                        'mediaType': m[N(0x1a2)][N(0x1bb)] ? m[O(0x1a2)]?.[N(0x1bb)][O(0x19f)](0x1 * 0x2135 + -0xcc5 + -0x1 * 0x1470, m[N(0x1a2)][O(0x1bb)][N(0x1ae)]('/')) : r[N(0x1b2)]
                    }, v = await Message_1[N(0x1ab)][O(0x195)](u), w = {};
                w[N(0x189)] = n;
                const x = {};
                x[O(0x1bc)] = Ticket_1[O(0x1ab)], x['as'] = r[N(0x1d7)], x[N(0x19c)] = w, x[O(0x19a)] = [r[N(0x1d4)]];
                const y = await Message_1[O(0x1ab)][N(0x1c6)](v['id'], {
                    'include': [
                        x,
                        {
                            'model': Message_1[O(0x1ab)],
                            'as': r[N(0x1a9)],
                            'include': [r[O(0x1d4)]]
                        }
                    ]
                });
                if (!y)
                    throw new Error(r[O(0x1be)]);
                await o[N(0x18c)]({
                    'lastMessage': y[O(0x1a0)],
                    'lastMessageAt': new Date()[N(0x196)]()
                }), await (-0xdac + -0x5 * -0x1bb + -0x5 * -0x101, queueValidation_1[O(0x1ab)])(o[N(0x1b1)], o[N(0x189)], [y]);
                const z = {};
                z[O(0x189)] = n, z[N(0x1bb)] = r[N(0x19d)], z[N(0x193)] = y, (-0x1d8d + 0x2579 * -0x1 + 0x4306, socketEmit_1[O(0x1ab)])(z);
            } else {
                const A = {};
                A[N(0x1aa)] = o[N(0x1aa)], A[O(0x1af)] = o[N(0x1d2)][N(0x1af)], m[O(0x1a2)][N(0x1d1)] = (0x1173 + 0x2505 + -0x2 * 0x1b3c, pupa_1[O(0x1ca)])(m[O(0x1a2)][O(0x1d1)] || '', A);
                const B = { ...s };
                B[N(0x1a0)] = m[O(0x1a2)][O(0x1d1)], B[N(0x1b4)] = r[O(0x1b2)];
                const C = await Message_1[N(0x1ab)][O(0x195)](B), D = {};
                D[N(0x189)] = n;
                const E = {};
                E[O(0x1bc)] = Ticket_1[O(0x1ab)], E['as'] = r[N(0x1d7)], E[N(0x19c)] = D, E[N(0x19a)] = [r[N(0x1d4)]];
                const F = await Message_1[O(0x1ab)][N(0x1c6)](C['id'], {
                    'include': [
                        E,
                        {
                            'model': Message_1[O(0x1ab)],
                            'as': r[O(0x1a9)],
                            'include': [r[N(0x1d4)]]
                        }
                    ]
                });
                if (!F)
                    throw new Error(r[O(0x1be)]);
                await o[O(0x18c)]({
                    'lastMessage': F[N(0x1a0)],
                    'lastMessageAt': new Date()[O(0x196)](),
                    'answered': !![]
                }), await (0x2 * 0x310 + 0x3 * -0xa57 + 0x1 * 0x18e5, queueValidation_1[O(0x1ab)])(o[O(0x1b1)], o[N(0x189)], [F]);
                const G = {};
                G[N(0x189)] = n, G[O(0x1bb)] = r[O(0x19d)], G[N(0x193)] = F, (0x1967 + 0x145 * 0xf + -0x2c72, socketEmit_1[N(0x1ab)])(G);
            }
        } catch (H) {
            logger_1[O(0x194)][N(0x1c1)](r[O(0x1c3)], H);
        }
    };
exports[L(0x1ab)] = BuildSendMessageService;