'use strict';
const a3 = b, a4 = b;
(function (c, d) {
    const a1 = b, a2 = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(a1(0x203)) / (-0x1 * 0x102a + 0x1c51 + 0x1 * -0xc26) + -parseInt(a2(0x1fa)) / (-0x16f8 + -0x1 * 0x23f9 + 0x1 * 0x3af3) + -parseInt(a2(0x20a)) / (-0xa4 * -0x3 + 0xb * 0x2bc + -0x1ffd) * (parseInt(a2(0x263)) / (0xe7d * -0x1 + -0x184 * -0x2 + 0xb79)) + parseInt(a2(0x233)) / (0xfb3 * -0x1 + -0x853 + 0x180b) * (-parseInt(a2(0x262)) / (-0x893 * -0x3 + -0x2123 + 0x770)) + parseInt(a2(0x25a)) / (-0x717 + 0x1af2 + 0x3 * -0x69c) + -parseInt(a2(0x231)) / (-0x208 + -0x2 * 0xb66 + 0x18dc) + parseInt(a2(0x254)) / (0x664 * 0x1 + 0x1 * -0xd3b + 0x2 * 0x370);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x52af1 + -0x8269f + 0x1 * 0x12274d));
var __importDefault = this && this[a3(0x20f) + a4(0x24d)] || function (c) {
    const a5 = a4;
    return c && c[a5(0x265)] ? c : { 'default': c };
};
function a() {
    const a8 = [
        'mOSmH',
        'ers/socket',
        'value',
        '647616dpNpLJ',
        'queueId',
        'where',
        'rScNN',
        'sAsRead',
        'UoStN',
        '../../help',
        'default',
        'HwcBp',
        '169189EUMAvC',
        'tags',
        'XmAny',
        'xDkfC',
        'findOne',
        'model',
        'plyId',
        '87MqEiGR',
        'WMhSV',
        'ls/Ticket',
        'jWtsc',
        'notificati',
        '__importDe',
        'FaOpp',
        'QghET',
        'TNmHW',
        'mFeSR',
        'associatio',
        'ansfer',
        'setDataVal',
        'stepAutoRe',
        'PiUVv',
        'lInlB',
        'autoReplyI',
        'reload',
        'WVDbg',
        'ls/User',
        'SIpxf',
        'vice',
        'status',
        'gHDKU',
        'ticket:upd',
        'update',
        'Xqgdu',
        'ticketId',
        'Tickets',
        'tenantId',
        'rs/AppErro',
        'pending',
        'UicMW',
        'oAbCd',
        'RBqtG',
        'ls/Contact',
        'pzMFe',
        'zKuSQ',
        'IHqsk',
        '960160UVHLXQ',
        'KbWUe',
        '4495oIdslp',
        'oldUserId',
        'whatsapp',
        'tzfIc',
        'qjNov',
        'WQmfM',
        'ence',
        'evnrz',
        'userId',
        'gTicketSer',
        'startedAtt',
        'extraInfo',
        'ketMessage',
        'type',
        'open',
        'closed',
        'close',
        'erty',
        'rtszT',
        'wallets',
        'getTime',
        'endanceAt',
        'RJGGP',
        'cTSPz',
        'receivedTr',
        'attributes',
        'fault',
        'defineProp',
        'yrPRU',
        'isDeleted',
        'include',
        'VciQZ',
        'ticket',
        '8117946vYDoXE',
        'OkSUA',
        'transfered',
        'user',
        './CreateLo',
        'closedAt',
        '3139094zLPHfS',
        'ate',
        'efqqa',
        'ers/CheckC',
        '../../erro',
        'ers/SetTic',
        'WzFVu',
        'ontactOpen',
        '516iBcVds',
        '47344tFmeFu',
        'HFJtq',
        '__esModule',
        'isTransfer',
        'contact',
        'Emit',
        'name',
        'ERR_NO_TIC',
        'XPSnV',
        'ROHtm',
        'ZmjOj',
        'VYFDr',
        'oldStatus',
        'payload',
        'on:new',
        'KET_FOUND',
        '../../mode'
    ];
    a = function () {
        return a8;
    };
    return a();
}
const k = {};
k[a3(0x1f9)] = !![], Object[a3(0x24e) + a4(0x244)](exports, a4(0x265), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x133d * -0x2 + 0x2383 + 0x2 * -0x2405);
        let h = e[f];
        return h;
    }, b(c, d);
}
const AppError_1 = __importDefault(require(a3(0x25e) + a3(0x228) + 'r')), CheckContactOpenTickets_1 = __importDefault(require(a4(0x200) + a4(0x25d) + a3(0x261) + a3(0x226))), SetTicketMessagesAsRead_1 = __importDefault(require(a3(0x200) + a4(0x25f) + a3(0x23f) + a4(0x1fe))), Contact_1 = __importDefault(require(a3(0x1f6) + a3(0x22d))), Ticket_1 = __importDefault(require(a4(0x1f6) + a3(0x20c))), User_1 = __importDefault(require(a3(0x1f6) + a4(0x21d))), socketEmit_1 = __importDefault(require(a3(0x200) + a4(0x1f8) + a3(0x268))), CreateLogTicketService_1 = __importDefault(require(a3(0x258) + a4(0x23c) + a4(0x21f))), UpdateTicketService = async ({
        ticketData: s,
        ticketId: t,
        isTransference: u,
        userIdRequest: v
    }) => {
        const a6 = a3, a7 = a3, w = {};
        w[a6(0x1f7)] = a6(0x20e) + a7(0x1f4), w[a6(0x23a)] = a6(0x26a) + a6(0x1f5), w[a6(0x205)] = a7(0x267), w[a6(0x219)] = a6(0x23e), w[a6(0x213)] = a7(0x204), w[a6(0x232)] = a7(0x246), w[a7(0x210)] = a6(0x269), w[a6(0x24a)] = a6(0x257), w[a6(0x26b)] = a7(0x235), w[a6(0x245)] = a6(0x250), w[a7(0x1fd)] = function (Q, R) {
            return Q !== R;
        }, w[a7(0x255)] = a7(0x229), w[a6(0x21e)] = function (Q, R) {
            return Q === R;
        }, w[a6(0x21c)] = function (Q, R) {
            return Q === R;
        }, w[a6(0x237)] = a6(0x242), w[a7(0x224)] = a6(0x22b), w[a6(0x26e)] = function (Q, R) {
            return Q === R;
        }, w[a6(0x238)] = a7(0x243), w[a7(0x221)] = a7(0x241), w[a7(0x230)] = a6(0x25c), w[a6(0x22a)] = function (Q, R) {
            return Q === R;
        }, w[a7(0x22e)] = a6(0x218), w[a7(0x1ff)] = a6(0x249), w[a6(0x211)] = function (Q, R) {
            return Q === R;
        }, w[a6(0x20b)] = function (Q, R) {
            return Q === R;
        }, w[a6(0x252)] = a6(0x26d), w[a7(0x202)] = a6(0x212), w[a7(0x26c)] = a6(0x256), w[a7(0x22c)] = a6(0x24b) + a6(0x215), w[a6(0x20d)] = function (Q, R) {
            return Q !== R;
        }, w[a7(0x236)] = a7(0x24f), w[a7(0x22f)] = a7(0x260), w[a7(0x264)] = a6(0x266) + a6(0x239), w[a6(0x206)] = a7(0x222) + a6(0x25b);
        const x = w, {
                status: y,
                userId: z,
                tenantId: A,
                queueId: B
            } = s, C = {};
        C['id'] = t, C[a7(0x227)] = A;
        const D = {};
        D[a6(0x208)] = Contact_1[a6(0x201)], D['as'] = x[a6(0x205)], D[a6(0x251)] = [
            x[a7(0x219)],
            x[a6(0x213)],
            {
                'association': x[a7(0x232)],
                'attributes': [
                    'id',
                    x[a7(0x210)]
                ]
            }
        ];
        const E = {};
        E[a6(0x208)] = User_1[a7(0x201)], E['as'] = x[a6(0x24a)], E[a7(0x24c)] = [
            'id',
            x[a6(0x210)]
        ];
        const F = {};
        F[a6(0x214) + 'n'] = x[a6(0x26b)], F[a7(0x24c)] = [
            'id',
            x[a6(0x210)],
            x[a7(0x245)]
        ];
        const G = {};
        G[a7(0x1fc)] = C, G[a7(0x251)] = [
            D,
            E,
            F
        ];
        const H = await Ticket_1[a7(0x201)][a7(0x207)](G);
        if (!H)
            throw new AppError_1[(a6(0x201))](x[a7(0x23a)], 0xd2f + 0x2d * 0x5 + -0xc7c);
        await (-0x1 * 0xfd9 + 0xce9 * -0x3 + 0xe * 0x3e6, SetTicketMessagesAsRead_1[a7(0x201)])(H);
        const I = x[a6(0x1fd)](H[a7(0x220)], x[a6(0x255)]) && x[a7(0x21e)](s[a7(0x220)], x[a6(0x255)]), J = H[a7(0x220)], K = H[a7(0x257)]?.['id'];
        x[a6(0x21c)](J, x[a6(0x237)]) && (x[a6(0x1fd)](x[a7(0x224)], x[a7(0x224)]) ? D[a6(0x259)] = new E()[a7(0x247)]() : await (-0x1b4e + -0x15 * 0x7f + 0x1d * 0x14d, CheckContactOpenTickets_1[a6(0x201)])(H[a7(0x267)]['id']));
        const L = x[a6(0x26e)](y, x[a7(0x238)]) ? x[a6(0x237)] : y, M = {};
        M[a6(0x220)] = L, M[a7(0x1fb)] = B, M[a7(0x23b)] = z;
        const N = M;
        x[a7(0x21c)](L, x[a6(0x237)]) && (N[a6(0x259)] = new Date()[a7(0x247)]());
        if (x[a7(0x26e)](J, x[a6(0x255)]) && x[a7(0x21c)](L, x[a7(0x221)])) {
            if (x[a7(0x26e)](x[a6(0x230)], x[a6(0x230)]))
                N[a6(0x21a) + 'd'] = null, N[a7(0x217) + a6(0x209)] = null, N[a7(0x23d) + a7(0x248)] = new Date()[a7(0x247)]();
            else {
                const S = {};
                S[a7(0x227)] = F, S[a7(0x240)] = x[a6(0x1f7)], S[a6(0x1f3)] = G, (0x1 * -0x166f + -0x1 * 0x542 + 0x1bb1, E[a7(0x201)])(S);
            }
        }
        await H[a7(0x223)](N);
        if (x[a7(0x22a)](J, x[a7(0x255)]) && x[a6(0x21e)](L, x[a7(0x221)])) {
            if (x[a6(0x1fd)](x[a7(0x22e)], x[a6(0x1ff)])) {
                const S = {};
                S[a6(0x23b)] = v, S[a6(0x225)] = t, S[a7(0x240)] = x[a7(0x221)], await (-0xf1 * -0x1 + 0x747 * -0x2 + 0xd9d, CreateLogTicketService_1[a6(0x201)])(S);
            } else {
                const U = {};
                return U[a7(0x201)] = j, F && G[a7(0x265)] ? M : U;
            }
        }
        if (x[a7(0x211)](L, x[a6(0x237)])) {
            if (x[a7(0x20b)](x[a6(0x252)], x[a6(0x202)]))
                F[a6(0x21a) + 'd'] = null, G[a7(0x217) + a7(0x209)] = null, M[a7(0x23d) + a6(0x248)] = new j()[a7(0x247)]();
            else {
                const V = {};
                V[a7(0x23b)] = v, V[a7(0x225)] = t, V[a6(0x240)] = x[a6(0x237)], await (-0x1 * -0x227e + 0x21 * 0xd + -0x1 * 0x242b, CreateLogTicketService_1[a7(0x201)])(V);
            }
        }
        if (x[a7(0x26e)](J, x[a7(0x221)]) && x[a6(0x26e)](L, x[a6(0x255)])) {
            const W = {};
            W[a6(0x23b)] = v, W[a7(0x225)] = t, W[a7(0x240)] = x[a6(0x255)], await (-0x11 * -0xf5 + 0xe2f + 0x79d * -0x4, CreateLogTicketService_1[a7(0x201)])(W);
        }
        if (u) {
            const X = {};
            X[a7(0x23b)] = v, X[a6(0x225)] = t, X[a6(0x240)] = x[a6(0x26c)], await (0x4a * -0x15 + -0x571 * -0x2 + -0x4d0, CreateLogTicketService_1[a7(0x201)])(X);
            if (z) {
                const Y = {};
                Y[a6(0x23b)] = z, Y[a6(0x225)] = t, Y[a7(0x240)] = x[a7(0x22c)], await (-0x1781 + 0x2605 * -0x1 + -0xe * -0x465, CreateLogTicketService_1[a7(0x201)])(Y);
            }
        }
        await H[a6(0x21b)]();
        if (u) {
            if (x[a6(0x20d)](x[a6(0x236)], x[a7(0x22f)]))
                await H[a6(0x216) + 'ue'](x[a6(0x264)], !![]);
            else
                throw new C[(a7(0x201))](x[a7(0x23a)], 0xbf * -0x29 + 0x7 * 0x43 + 0x2c2 * 0xb);
        }
        if (I) {
            const a0 = {};
            a0[a7(0x227)] = A, a0[a7(0x240)] = x[a6(0x1f7)], a0[a6(0x1f3)] = H, (-0x20ad + -0x1 * -0x1c1 + -0x7bb * -0x4, socketEmit_1[a7(0x201)])(a0);
        }
        const O = {};
        O[a7(0x227)] = A, O[a7(0x240)] = x[a6(0x206)], O[a6(0x1f3)] = H, (-0x11c * -0x6 + -0xa * -0x17 + -0x78e, socketEmit_1[a7(0x201)])(O);
        const P = {};
        return P[a6(0x253)] = H, P[a7(0x26f)] = J, P[a6(0x234)] = K, P;
    };
exports[a4(0x201)] = UpdateTicketService;