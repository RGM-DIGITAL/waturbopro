'use strict';
const B = b, C = b;
(function (c, d) {
    const z = b, A = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(z(0xa9)) / (0x396 * 0x5 + -0x789 + 0xa64 * -0x1) * (-parseInt(A(0xe3)) / (-0x1653 + 0x1b8 + -0x1 * -0x149d)) + -parseInt(A(0xd5)) / (-0x1733 + 0xa5b + 0xcdb) + -parseInt(z(0xd7)) / (0x354 + -0x1 * 0x1fb9 + 0x1c69) * (-parseInt(z(0xeb)) / (0x1c46 * 0x1 + -0x5ea * 0x5 + -0x151 * -0x1)) + -parseInt(z(0xee)) / (-0x2539 + -0x1a * 0x5b + -0x2e7d * -0x1) + parseInt(z(0xd2)) / (-0x6d0 * -0x4 + 0x29 * 0x6b + -0x2c5c) + -parseInt(z(0xe8)) / (0x5 * -0x4ff + 0x120c + 0x6f7) + parseInt(z(0xb2)) / (-0x2 * -0xf47 + -0x1e0d + -0x78);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1b4b1c + 0x179524 + 0x12f5db));
function a() {
    const I = [
        'status',
        'ls/Message',
        '13305LWCEzQ',
        'mimetype',
        'map',
        '7854960tnKuNJ',
        'getTime',
        'ticket',
        'chat',
        'fault',
        'tKSsM',
        'default',
        'promisify',
        'tKWEE',
        'create',
        'getIO',
        'update',
        'ticketId',
        'join',
        'eaHbn',
        '__esModule',
        'emit',
        'erty',
        'fromMe',
        'wFmLr',
        'yBJJr',
        '1XbCgOc',
        'ZVNdI',
        'body',
        'UyART',
        'defineProp',
        'qhXWK',
        'contact',
        'path',
        'findByPk',
        '187668vxesAc',
        'writeFile',
        'toString',
        'userId',
        's/logger',
        'oKPvb',
        'value',
        '../../libs',
        'aZGaV',
        'timestamp',
        'filename',
        '__importDe',
        'dPiEa',
        'read',
        'gfRnh',
        '-notificat',
        'CreateMess',
        '-appMessag',
        '../../util',
        'buffer',
        'include',
        'split',
        'base64',
        'substr',
        'mediaUrl',
        '../../mode',
        'public',
        'trAvz',
        'fIYMS',
        'Service',
        '/socket',
        'eHXps',
        '11624221uFzHPP',
        'logger',
        'indexOf',
        '890565hEeogv',
        'NG_MESSAGE',
        '1108JiCmoS',
        'JWQep',
        'ion',
        'ls/Ticket',
        'mediaType',
        'tenantId',
        'wId',
        'error',
        'OffLine',
        'all',
        'ERR_CREATI',
        'util',
        '2808578QapkTQ',
        'ageOffLine',
        'quotedMsg',
        'uxGjA',
        'contactId',
        '9739448aajdNe'
    ];
    a = function () {
        return I;
    };
    return a();
}
var __importDefault = this && this[B(0xbd) + B(0xf2)] || function (c) {
    const D = B;
    return c && c[D(0xa3)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x21a * 0xe + 0x1850 * 0x1 + 0x5b6);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[B(0xb8)] = !![], Object[C(0xad) + C(0xa5)](exports, C(0xa3), k);
const fs_1 = require('fs'), util_1 = require(C(0xe2)), path_1 = require(C(0xb0)), logger_1 = require(C(0xc4) + C(0xb6)), MessageOffLine_1 = __importDefault(require(B(0xcb) + B(0xea) + B(0xdf))), socket_1 = require(C(0xb9) + B(0xd0)), Ticket_1 = __importDefault(require(C(0xcb) + B(0xda))), Message_1 = __importDefault(require(C(0xcb) + C(0xea))), writeFileAsync = (0x5 * 0x5d5 + 0x13b4 + -0x30dd, util_1[B(0x9b)])(fs_1[C(0xb3)]), CreateMessageOffilineService = async ({
        msg: g,
        tenantId: h,
        medias: i,
        ticket: j,
        userId: l
    }) => {
        const E = B, F = B, m = {
                'gfRnh': function (q, r) {
                    return q !== r;
                },
                'UyART': E(0xce),
                'trAvz': function (q, r, s, t) {
                    return q(r, s, t);
                },
                'ZVNdI': E(0xcc),
                'eHXps': F(0xc8),
                'wFmLr': E(0xaf),
                'yBJJr': F(0xf0),
                'oKPvb': E(0xe5),
                'tKSsM': F(0xe1) + E(0xd6),
                'eaHbn': E(0x9d),
                'aZGaV': E(0xf1),
                'qhXWK': F(0x9c),
                'uxGjA': F(0xbe),
                'JWQep': E(0xc2) + E(0xe4) + E(0xcf)
            }, n = (-0xe77 + -0x1753 * 0x1 + 0x25ca, socket_1[E(0x9e)])(), o = {};
        o[E(0xdd)] = undefined, o[E(0xa0)] = j['id'], o[E(0xab)] = g[E(0xab)], o[F(0xe7)] = j[F(0xe7)], o[F(0xa6)] = g[E(0xa6)], o[F(0xbf)] = !![], o[E(0xdb)] = m[E(0xba)], o[E(0xca)] = undefined, o[E(0xbb)] = undefined, o[E(0xb5)] = l;
        const p = o;
        try {
            if (i) {
                if (m[F(0xc0)](m[E(0xae)], m[F(0xe6)]))
                    await Promise[F(0xe0)](i[E(0xed)](async q => {
                        const G = E, H = F;
                        try {
                            if (!q[G(0xbc)]) {
                                if (m[G(0xc0)](m[G(0xac)], m[H(0xac)])) {
                                    const x = {};
                                    return x[G(0x9a)] = j, g && h[G(0xa3)] ? i : x;
                                } else {
                                    const x = q[H(0xec)][H(0xc7)]('/')[0x1bb5 * 0x1 + 0x1 * 0x8c3 + -0x2477][H(0xc7)](';')[0x3 * -0xb57 + -0x350 + 0x1f7 * 0x13];
                                    q[G(0xbc)] = new Date()[H(0xef)]() + '.' + x;
                                }
                            }
                            await m[G(0xcd)](writeFileAsync, (-0x1b1b + -0xfe6 + 0x65 * 0x6d, path_1[G(0xa1)])(__dirname, '..', '..', '..', '..', m[G(0xaa)], q[H(0xbc)]), q[H(0xc5)], m[G(0xd1)]);
                        } catch (y) {
                            logger_1[G(0xd3)][H(0xde)](y);
                        }
                        const r = {
                                ...p,
                                'mediaUrl': q[G(0xbc)],
                                'mediaType': q[G(0xec)][G(0xc9)](-0xc62 * -0x1 + 0x1869 + -0x1 * 0x24cb, q[H(0xec)][H(0xd4)]('/'))
                            }, s = await MessageOffLine_1[G(0x9a)][H(0x9d)](r), t = {};
                        t[H(0xdc)] = h;
                        const u = {};
                        u[G(0xc6)] = [
                            m[H(0xa7)],
                            {
                                'model': Ticket_1[G(0x9a)],
                                'as': m[H(0xa8)],
                                'where': t,
                                'include': [m[G(0xa7)]]
                            },
                            {
                                'model': Message_1[G(0x9a)],
                                'as': m[G(0xb7)],
                                'include': [m[H(0xa7)]]
                            }
                        ];
                        const v = await MessageOffLine_1[H(0x9a)][G(0xb1)](s['id'], u);
                        if (!v)
                            throw new Error(m[G(0xf3)]);
                        n['to'](h + '-' + v[G(0xa0)][H(0xb4)]())['to'](h + '-' + v[G(0xf0)][G(0xe9)])['to'](h + (G(0xc1) + G(0xd9)))[H(0xa4)](h + (H(0xc3) + 'e'), {
                            'action': m[G(0xa2)],
                            'message': v,
                            'ticket': v[G(0xf0)],
                            'contact': v[G(0xf0)][G(0xaf)]
                        }), await j[G(0x9f)]({
                            'lastMessage': v[G(0xab)],
                            'lastMessageAt': new Date()[G(0xef)]()
                        });
                    }));
                else {
                    const r = f[F(0xec)][E(0xc7)]('/')[0x2 * 0x982 + -0x1812 + -0x23 * -0x25][F(0xc7)](';')[0x2 * 0x1215 + -0x1 * 0xb7 + -0x25d * 0xf];
                    g[F(0xbc)] = new h()[E(0xef)]() + '.' + r;
                }
            } else {
                const r = { ...p };
                r[E(0xdb)] = m[F(0xba)];
                const s = await MessageOffLine_1[E(0x9a)][E(0x9d)](r), t = {};
                t[F(0xdc)] = h;
                const u = {};
                u[E(0xc6)] = [
                    m[E(0xa7)],
                    {
                        'model': Ticket_1[E(0x9a)],
                        'as': m[F(0xa8)],
                        'where': t,
                        'include': [m[F(0xa7)]]
                    },
                    {
                        'model': Message_1[F(0x9a)],
                        'as': m[E(0xb7)],
                        'include': [m[F(0xa7)]]
                    }
                ];
                const v = await MessageOffLine_1[F(0x9a)][F(0xb1)](s['id'], u);
                if (!v)
                    throw new Error(m[F(0xf3)]);
                await j[F(0x9f)]({
                    'lastMessage': v[E(0xab)],
                    'lastMessageAt': new Date()[F(0xef)]()
                }), n['to'](h + '-' + v[F(0xa0)][E(0xb4)]())['to'](h + '-' + v[E(0xf0)][E(0xe9)])['to'](h + (E(0xc1) + F(0xd9)))[E(0xa4)](h + (F(0xc3) + 'e'), {
                    'action': m[F(0xa2)],
                    'message': v,
                    'ticket': v[F(0xf0)],
                    'contact': v[F(0xf0)][F(0xaf)]
                });
            }
        } catch (w) {
            logger_1[E(0xd3)][F(0xde)](m[F(0xd8)], w);
        }
    };
exports[B(0x9a)] = CreateMessageOffilineService;