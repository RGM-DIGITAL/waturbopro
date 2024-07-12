'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1c86 + 0x7e * 0x31 + 0x4db);
        let h = e[f];
        return h;
    }, b(c, d);
}
const aw = b, ax = b;
(function (c, d) {
    const au = b, av = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(au(0x7f)) / (0x14db + 0x53 * -0xd + -0x10a3) * (parseInt(av(0x78)) / (-0x1faf + 0x1659 + 0x958)) + parseInt(au(0x8c)) / (-0x5 * 0xee + 0x2bb + 0x1ee) + parseInt(av(0xc6)) / (-0x1436 + -0x77b + 0x1 * 0x1bb5) + parseInt(av(0x97)) / (0x3 * 0x4af + -0x408 + 0x50 * -0x20) * (-parseInt(av(0xfe)) / (0x265 * -0x7 + -0x18e3 * -0x1 + 0x40d * -0x2)) + -parseInt(au(0x113)) / (-0x1 * -0x20db + -0xe9 * 0x2 + -0x1f02) * (-parseInt(av(0xc3)) / (-0xf * 0x126 + 0x10c3 + 0x7f)) + parseInt(av(0xcc)) / (-0x560 * 0x6 + 0x7 * -0x4c7 + -0x2 * -0x20dd) * (-parseInt(au(0xc9)) / (0x7d1 + -0x19b3 + 0x11ec)) + parseInt(av(0xab)) / (0x185c + 0x17d * -0x1 + -0x2 * 0xb6a);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xa7d16 * 0x1 + 0xc7cb2 + 0xa969 * -0xf));
var __importDefault = this && this[aw(0xfd) + ax(0x9a)] || function (c) {
    const ay = ax;
    return c && c[ay(0x87)] ? c : { 'default': c };
};
const m = {};
m[ax(0x76)] = !![], Object[ax(0xe2) + aw(0x115)](exports, aw(0x87), m);
const sequelize_1 = require(aw(0x107)), Contact_1 = __importDefault(require(ax(0xcd) + ax(0xbe))), Ticket_1 = __importDefault(require(ax(0xcd) + ax(0xba))), User_1 = __importDefault(require(ax(0xcd) + ax(0xbf))), ShowTicketService_1 = __importDefault(require(aw(0xaf) + aw(0x10b))), CampaignContacts_1 = __importDefault(require(aw(0xcd) + ax(0xa4) + ax(0x90))), socketEmit_1 = __importDefault(require(aw(0xbd) + aw(0xe8) + aw(0x7c))), CheckChatBotFlowWelcome_1 = __importDefault(require(aw(0xbd) + ax(0x112) + aw(0x10d) + ax(0x9c))), CreateLogTicketService_1 = __importDefault(require(ax(0x92) + aw(0x75) + aw(0xb0))), Message_1 = __importDefault(require(aw(0xcd) + ax(0x99))), ListSettingsService_1 = __importDefault(require(aw(0xcb) + ax(0x102) + ax(0xad) + ax(0x9b))), VerifyContactBaileys_1 = require(ax(0xb7) + aw(0xca) + aw(0x96) + ax(0xd5) + ax(0xb8)), FindOrCreateTicketService = async ({
        contact: E,
        whatsappId: F,
        unreadMessages: G,
        tenantId: H,
        groupContact: I,
        msg: J,
        isSync: K,
        channel: L
    }) => {
        const az = ax, aA = ax, M = {};
        M[az(0x9e)] = az(0xdc), M[az(0xb3)] = function (a3, a4) {
            return a3 === a4;
        }, M[az(0xb1)] = az(0xec), M[aA(0x104)] = function (a3, a4) {
            return a3 !== a4;
        }, M[az(0xa2)] = az(0xf1), M[az(0xbc)] = az(0x8a), M[az(0xeb)] = function (a3, a4) {
            return a3 === a4;
        }, M[aA(0x103)] = aA(0x105), M[az(0xb4)] = function (a3, a4) {
            return a3 === a4;
        }, M[aA(0x74)] = aA(0x83), M[az(0x91)] = az(0x93), M[az(0x80)] = function (a3, a4) {
            return a3 === a4;
        }, M[aA(0xc7)] = aA(0xe1), M[az(0xde)] = function (a3, a4) {
            return a3 !== a4;
        }, M[az(0xb2)] = aA(0x116), M[az(0x88)] = aA(0xa5), M[aA(0xe7)] = aA(0xcf), M[az(0xae)] = az(0xc5), M[az(0xed)] = az(0xe5), M[az(0xa3)] = az(0xc2), M[aA(0xe0)] = az(0xfc), M[az(0x98)] = aA(0x111), M[aA(0x10c)] = az(0x10e), M[aA(0x9f)] = az(0xb5), M[az(0xd3)] = function (a3, a4) {
            return a3 === a4;
        }, M[az(0x100)] = az(0x81), M[az(0x10a)] = aA(0xc1), M[az(0xd4)] = aA(0xa7), M[az(0x114)] = az(0xdb), M[az(0xac)] = aA(0xef), M[aA(0xdd)] = function (a3, a4) {
            return a3 > a4;
        }, M[az(0x106)] = az(0x7b) + az(0x7d), M[az(0x8d)] = function (a3, a4) {
            return a3 !== a4;
        }, M[az(0x82)] = az(0xf8), M[az(0xff)] = az(0xd7), M[aA(0x84)] = az(0xe6), M[az(0x9d)] = az(0xa1), M[aA(0xce)] = function (a3, a4) {
            return a3 !== a4;
        }, M[az(0x10f)] = az(0xd1), M[az(0xd8)] = aA(0xf4), M[az(0xe9)] = function (a3, a4) {
            return a3 === a4;
        }, M[aA(0xc4)] = aA(0xc8), M[az(0xea)] = aA(0xee), M[aA(0xd9)] = function (a3, a4) {
            return a3 && a4;
        }, M[az(0xb6)] = az(0x8b);
        const N = M;
        let O;
        if (N[az(0xb3)](L, N[aA(0xb1)])) {
            if (N[az(0x104)](N[aA(0xa2)], N[aA(0xbc)]))
                O = J[az(0xf0)];
            else {
                const a4 = {};
                return a4[az(0x95) + az(0xfa)] = !![], a4;
            }
        } else
            O = J[aA(0xda)][az(0xf0)];
        if (N[aA(0xeb)](L, N[aA(0x103)]) && J && O) {
            const a4 = {};
            a4[az(0xc0)] = E['id'], a4[az(0x77)] = J[az(0xda)]?.['id'];
            const a5 = {};
            a5[aA(0x110)] = a4;
            const a6 = await CampaignContacts_1[aA(0x8e)][aA(0xa8)](a5);
            if (a6?.['id']) {
                if (N[aA(0xb4)](N[aA(0x74)], N[aA(0x74)])) {
                    const a7 = {};
                    return a7[aA(0x95) + az(0xfa)] = !![], a7;
                } else
                    a5 = f[aA(0xda)][aA(0xf0)];
            }
        }
        if (J && J[az(0xf0)]) {
            const a9 = {};
            a9[aA(0x77)] = J[aA(0xda)]?.['id'];
            const aa = {};
            aa[aA(0x110)] = a9, aa[aA(0xa0)] = [N[az(0x91)]];
            const ab = await Message_1[az(0x8e)][az(0xa8)](aa);
            if (N[aA(0x80)](ab?.[az(0x93)]?.[az(0x7a)], N[aA(0xc7)]) && N[aA(0xb3)](ab?.[az(0x93)][aA(0x94) + 'e'], J[az(0x101)])) {
                if (N[az(0xde)](N[az(0xb2)], N[az(0x88)])) {
                    const ac = ab[az(0x93)];
                    return ac[az(0xe3) + az(0xfa)] = !![], ac;
                } else
                    e = f[aA(0xf0)];
            }
        }
        const P = {
                [sequelize_1['Op']['or']]: [
                    N[aA(0x9e)],
                    N[az(0xe7)]
                ]
            }, Q = {};
        Q[az(0x7a)] = P, Q[aA(0xa6)] = H, Q[az(0xfb)] = F, Q[az(0xc0)] = I ? I['id'] : E['id'];
        const R = {};
        R[az(0xbb)] = Contact_1[aA(0x8e)], R['as'] = N[az(0xae)], R[az(0xa0)] = [
            N[az(0xed)],
            N[az(0xa3)],
            {
                'association': N[az(0xe0)],
                'attributes': [
                    'id',
                    N[az(0x98)]
                ]
            }
        ];
        const S = {};
        S[az(0xbb)] = User_1[aA(0x8e)], S['as'] = N[aA(0x10c)], S[aA(0xd2)] = [
            'id',
            N[aA(0x98)]
        ];
        const T = {};
        T[aA(0xe4) + 'n'] = N[az(0x103)], T[aA(0xd2)] = [
            'id',
            N[az(0x98)],
            N[aA(0x9f)]
        ];
        const U = {};
        U[aA(0x110)] = Q, U[az(0xa0)] = [
            R,
            S,
            T
        ];
        let V = await Ticket_1[az(0x8e)][aA(0xa8)](U);
        if (V) {
            if (N[az(0xd3)](N[aA(0x100)], N[aA(0x10a)]))
                h[az(0x7a)] = N[az(0x9e)], P[aA(0x79)] = Q[0x29f + -0x77b + -0x1 * -0x4dc]['id'], R[az(0xf2) + az(0xf9)] = new S()[az(0x109)]();
            else {
                G = [
                    N[aA(0xd4)],
                    N[aA(0x114)],
                    N[az(0xb1)],
                    N[aA(0xac)]
                ][aA(0x86)](L) && N[aA(0xdd)](G, 0xd35 * 0x1 + -0x1 * 0x623 + 0x1 * -0x712) ? G += V[aA(0xf5) + aA(0xd0)] : G;
                const af = {};
                af[aA(0xf5) + aA(0xd0)] = G, await V[az(0x73)](af);
                const ag = {};
                return ag[az(0xa6)] = H, ag[az(0xdf)] = N[az(0x106)], ag[aA(0xf7)] = V, (0x8ba * -0x1 + -0x1 * 0x565 + 0xe1f, socketEmit_1[aA(0x8e)])(ag), V;
            }
        }
        if (I) {
            if (N[az(0x8d)](N[aA(0x82)], N[aA(0xff)])) {
                const ah = {};
                ah[az(0xc0)] = I['id'], ah[az(0xa6)] = H, ah[az(0xfb)] = F;
                const ai = {};
                ai[aA(0x110)] = ah, ai[aA(0xa9)] = [[
                        N[aA(0x84)],
                        N[aA(0x9d)]
                    ]], ai[az(0xa0)] = [
                    {
                        'model': Contact_1[aA(0x8e)],
                        'as': N[az(0xae)],
                        'include': [
                            N[aA(0xed)],
                            N[aA(0xa3)],
                            {
                                'association': N[aA(0xe0)],
                                'attributes': [
                                    'id',
                                    N[az(0x98)]
                                ]
                            }
                        ]
                    },
                    {
                        'model': User_1[az(0x8e)],
                        'as': N[aA(0x10c)],
                        'attributes': [
                            'id',
                            N[az(0x98)]
                        ]
                    },
                    {
                        'association': N[az(0x103)],
                        'attributes': [
                            'id',
                            N[aA(0x98)],
                            N[az(0x9f)]
                        ]
                    }
                ], V = await Ticket_1[az(0x8e)][aA(0xa8)](ai);
                if (V) {
                    if (N[aA(0xce)](N[aA(0x10f)], N[aA(0xd8)])) {
                        const aj = {};
                        aj[aA(0x7a)] = N[az(0xe7)], aj[aA(0x79)] = null, aj[aA(0xf5) + az(0xd0)] = G, await V[az(0x73)](aj);
                        const ak = {};
                        return ak[aA(0xa6)] = H, ak[aA(0xdf)] = N[aA(0x106)], ak[aA(0xf7)] = V, (-0x1ef2 + 0x105f + 0xe93, socketEmit_1[aA(0x8e)])(ak), V;
                    } else {
                        const am = {};
                        return am[aA(0x8e)] = Q, g && h[aA(0x87)] ? P : am;
                    }
                }
            } else {
                const an = d[aA(0x93)];
                return an[aA(0xe3) + aA(0xfa)] = !![], an;
            }
        } else {
            const an = {
                    [sequelize_1['Op']['in']]: [
                        N[az(0x9e)],
                        N[az(0xe7)]
                    ]
                }, ao = {};
            ao[aA(0x7a)] = an, ao[aA(0xa6)] = H, ao[az(0xfb)] = F, ao[az(0xc0)] = E['id'];
            const ap = {};
            ap[aA(0x110)] = ao, ap[aA(0xa9)] = [[
                    N[az(0x84)],
                    N[az(0x9d)]
                ]], ap[aA(0xa0)] = [
                {
                    'model': Contact_1[az(0x8e)],
                    'as': N[az(0xae)],
                    'include': [
                        N[aA(0xed)],
                        N[az(0xa3)],
                        {
                            'association': N[az(0xe0)],
                            'attributes': [
                                'id',
                                N[az(0x98)]
                            ]
                        }
                    ]
                },
                {
                    'model': User_1[aA(0x8e)],
                    'as': N[az(0x10c)],
                    'attributes': [
                        'id',
                        N[aA(0x98)]
                    ]
                },
                {
                    'association': N[aA(0x103)],
                    'attributes': [
                        'id',
                        N[az(0x98)],
                        N[az(0x9f)]
                    ]
                }
            ], V = await Ticket_1[aA(0x8e)][az(0xa8)](ap);
            if (V) {
                const aq = {};
                aq[az(0x7a)] = N[aA(0xe7)], aq[aA(0x79)] = null, aq[az(0xf5) + aA(0xd0)] = G, await V[az(0x73)](aq);
                const ar = {};
                return ar[aA(0xa6)] = H, ar[az(0xdf)] = N[aA(0x106)], ar[az(0xf7)] = V, (-0x52 * 0x63 + 0x1ceb + -0xd * -0x37, socketEmit_1[az(0x8e)])(ar), V;
            }
        }
        const W = N[aA(0xe9)]((await (-0x8ea + 0x13 * -0xae + 0x15d4, ListSettingsService_1[az(0x8e)])(H))?.[aA(0xd6)](as => as[aA(0xda)] === aA(0x108) + aA(0xaa) + 'ts')?.[aA(0x76)], N[az(0xc4)]) || ![], X = {};
        X[az(0xc0)] = I ? I['id'] : E['id'], X[az(0x7a)] = N[az(0xe7)], X[az(0x89)] = !!I, X[aA(0xf5) + aA(0xd0)] = G, X[aA(0xfb)] = F, X[aA(0xa6)] = H, X[az(0xf3)] = L;
        const Y = X;
        if (W && E['id']) {
            const as = E, at = await as[az(0x85)]();
            at && at[-0x5a0 + 0x7 * 0x2c2 + -0xdae]?.['id'] && (Y[aA(0x7a)] = N[az(0x9e)], Y[az(0x79)] = at[-0x1561 + 0x42 * -0x65 + -0x1 * -0x2f6b]['id'], Y[az(0xf2) + az(0xf9)] = new Date()[aA(0x109)]());
        }
        J && (Y[az(0x94) + 'e'] = await (-0x1511 + -0x1c50 + 0x3161, VerifyContactBaileys_1[az(0xb9) + aA(0xf6)])(J));
        const Z = await Ticket_1[az(0x8e)][az(0xee)](Y), a0 = {};
        a0[az(0x8f)] = Z['id'], a0[az(0xdf)] = N[aA(0xea)], await (-0xc52 * -0x2 + -0xf90 + -0xe * 0xa6, CreateLogTicketService_1[aA(0x8e)])(a0);
        (N[aA(0xd9)](J, !O) || !Z[az(0x79)] || K) && await (0x33 * 0xc1 + 0x45 * -0x84 + 0x1 * -0x2df, CheckChatBotFlowWelcome_1[aA(0x8e)])(Z);
        const a1 = {};
        a1['id'] = Z['id'], a1[aA(0xa6)] = H, V = await (0x1 * 0x202b + -0x1 * -0x13d2 + -0x33fd * 0x1, ShowTicketService_1[az(0x8e)])(a1), V[aA(0x7e) + 'ue'](N[az(0xb6)], !![]);
        const a2 = {};
        return a2[aA(0xa6)] = H, a2[az(0xdf)] = N[aA(0x106)], a2[az(0xf7)] = V, (0x148b + -0x1057 + -0x10d * 0x4, socketEmit_1[az(0x8e)])(a2), V;
    };
function a() {
    const aB = [
        'isGroup',
        'gjItJ',
        'isCreated',
        '3282171JxQELo',
        'DnruI',
        'default',
        'ticketId',
        'nContacts',
        'ahEKY',
        './CreateLo',
        'ticket',
        'lastMessag',
        'isCampaign',
        'ers/Verify',
        '1457805uBfVFc',
        'NkjeW',
        'ls/Message',
        'fault',
        'sService',
        'Welcome',
        'KXdJZ',
        'xIpSt',
        'TlTPX',
        'include',
        'DESC',
        'EEycZ',
        'fHZPI',
        'ls/Campaig',
        'boWCy',
        'tenantId',
        'telegram',
        'findOne',
        'order',
        'etsToWalle',
        '22131395kNUgmj',
        'zsPEe',
        'istSetting',
        'HMIBG',
        './ShowTick',
        'vice',
        'UnPQH',
        'fqPfF',
        'fWMWd',
        'kCfbc',
        'isDeleted',
        'pPDsQ',
        '../WbotSer',
        'leys',
        'getBodyMes',
        'ls/Ticket',
        'model',
        'pFCBh',
        '../../help',
        'ls/Contact',
        'ls/User',
        'contactId',
        'wOJcd',
        'tags',
        '50760AJJkJr',
        'kEuvp',
        'contact',
        '3566356YUEDJT',
        'niVAi',
        'enabled',
        '9857830FKUskQ',
        'vices/help',
        '../Setting',
        '9QTfAyr',
        '../../mode',
        'TPyUd',
        'pending',
        'ages',
        'UwapK',
        'attributes',
        'APKuj',
        'pkPKK',
        'ContactBai',
        'find',
        'MeBjE',
        'kOiXr',
        'JrvGj',
        'key',
        'waba',
        'open',
        'DVLbd',
        'HBHDe',
        'type',
        'xbRUv',
        'closed',
        'defineProp',
        'isFarewell',
        'associatio',
        'extraInfo',
        'updatedAt',
        'hhUpg',
        'ers/socket',
        'kmPVg',
        'bRdtW',
        'StXcA',
        'instagram',
        'PrWob',
        'create',
        'messenger',
        'fromMe',
        'rMktm',
        'startedAtt',
        'channel',
        'vLnBV',
        'unreadMess',
        'sage',
        'payload',
        'JkXMb',
        'endanceAt',
        'Message',
        'whatsappId',
        'wallets',
        '__importDe',
        '30ULRBTj',
        'nlbRb',
        'wXLsA',
        'body',
        'Services/L',
        'RpbIu',
        'kVrVQ',
        'whatsapp',
        'kmLdH',
        'sequelize',
        'DirectTick',
        'getTime',
        'IAfRP',
        'etService',
        'NTChH',
        'hatBotFlow',
        'user',
        'VTlsg',
        'where',
        'name',
        'ers/CheckC',
        '1050SvYiIZ',
        'NUrbc',
        'erty',
        'dElzU',
        'update',
        'AtbcS',
        'gTicketSer',
        'value',
        'messageId',
        '4656VIPBpu',
        'userId',
        'status',
        'ticket:upd',
        'Emit',
        'ate',
        'setDataVal',
        '709nuuhQw',
        'hagrI',
        'jdkhA',
        'EinQS',
        'kmZnq',
        'JZQAD',
        'getWallets',
        'includes',
        '__esModule',
        'DkNoU'
    ];
    a = function () {
        return aB;
    };
    return a();
}
exports[ax(0x8e)] = FindOrCreateTicketService;