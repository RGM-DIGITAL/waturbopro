'use strict';
const C = b, D = b;
(function (c, d) {
    const A = b, B = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(A(0x104)) / (0x387 + 0x19a1 + 0x1 * -0x1d27) * (parseInt(B(0xad)) / (0x1f43 * 0x1 + 0x1a11 + -0x3952)) + -parseInt(B(0x107)) / (-0x2 * 0xd5d + 0x1e16 * 0x1 + 0x359 * -0x1) * (-parseInt(B(0x96)) / (-0x3 * -0xb3f + -0x97a + -0x183f)) + -parseInt(B(0xab)) / (-0x225b * 0x1 + 0x1529 + -0xc7 * -0x11) * (-parseInt(B(0x102)) / (0x17 * -0xdb + -0x6f7 + -0x1aaa * -0x1)) + -parseInt(A(0xa8)) / (-0xf76 + 0x268f + -0x1 * 0x1712) * (parseInt(A(0x103)) / (-0x249a + -0x182 + 0x2624)) + -parseInt(A(0xc8)) / (-0x109 * 0x2 + -0x9 * 0x27a + -0x4e1 * -0x5) * (parseInt(A(0x109)) / (-0x29 * 0x45 + 0x4 * 0x786 + -0x1301)) + -parseInt(A(0x99)) / (-0x14 * -0xea + -0x11 * -0x74 + -0x19f1) + -parseInt(A(0x117)) / (-0x2352 + -0x1d61 * 0x1 + -0xcf3 * -0x5) * (-parseInt(B(0xb3)) / (0x7 * 0x22d + 0x37 * -0x29 + -0x65f));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x77d8f + 0x70e7e + 0x508db * 0x1));
var __importDefault = this && this[C(0x9e) + D(0xf9)] || function (c) {
    const E = C;
    return c && c[E(0x97)] ? c : { 'default': c };
};
const q = {};
q[D(0xb0)] = !![], Object[D(0xd8) + D(0x112)](exports, D(0x97), q), exports[C(0xaa)] = exports[C(0x11f)] = exports[D(0xc7)] = exports[C(0xe5)] = exports[D(0xf7) + D(0x10b)] = exports[D(0x100)] = void (-0x1e4f * -0x1 + -0xf55 * -0x2 + -0x2b * 0x16b);
const AppError_1 = __importDefault(require(D(0x108) + D(0xa9))), DeleteMessageSystem_1 = __importDefault(require(D(0xa4) + C(0xdc) + C(0xa1))), SetTicketMessagesAsRead_1 = __importDefault(require(C(0xa4) + D(0x9d) + C(0xc5) + D(0xe0))), Message_1 = __importDefault(require(D(0xf2) + D(0xff))), CreateForwardMessageService_1 = __importDefault(require(D(0xec) + C(0x113) + D(0x11d) + C(0xe2) + C(0xf0) + C(0xa2))), CreateMessageSystemService_1 = __importDefault(require(C(0xec) + D(0x113) + C(0x11d) + D(0xe7) + D(0xcb) + C(0xd6))), ListMessagesService_1 = __importDefault(require(D(0xec) + D(0x113) + D(0x11b) + D(0xf4) + C(0xd2))), ShowTicketService_1 = __importDefault(require(D(0xec) + C(0x10a) + C(0xdf) + D(0xc2) + C(0xd6))), logger_1 = require(C(0x118) + D(0x10e)), EditWhatsAppMessage_1 = __importDefault(require(C(0xec) + D(0xe8) + C(0xe3) + C(0x95) + D(0xc1))), index = async (e, f) => {
        const F = D, G = C, {ticketId: g} = e[F(0x105)], {pageNumber: h} = e[F(0xb7)], {tenantId: i} = e[F(0xb2)], j = {};
        j[G(0x110)] = h, j[G(0x9c)] = g, j[G(0x124)] = i;
        const {
            count: k,
            messages: l,
            messagesOffLine: m,
            ticket: n,
            hasMore: o
        } = await (0x185 * 0xb + -0x16d * -0x13 + -0x2bce, ListMessagesService_1[F(0xb1)])(j);
        (-0xea * 0xb + -0x268d * -0x1 + -0x5 * 0x5b3, SetTicketMessagesAsRead_1[G(0xb1)])(n);
        const p = {};
        return p[F(0xfb)] = k, p[F(0x115)] = l, p[G(0xfa) + G(0x9a)] = m, p[G(0xeb)] = n, p[F(0x9f)] = o, f[G(0xcc)](p);
    };
exports[D(0x100)] = index;
const ListCountMensagens = async (f, g) => {
    const H = D, I = D, h = {};
    h[H(0xaf)] = function (j, k) {
        return j !== k;
    }, h[I(0xf6)] = I(0xfd), h[H(0xea)] = H(0x11c), h[I(0xd7)] = H(0xce) + H(0xbd) + H(0xd5) + I(0xc0);
    const i = h;
    try {
        if (i[I(0xaf)](i[H(0xf6)], i[H(0xf6)])) {
            const k = {};
            return k[H(0xf5)] = f[H(0x101)], e[H(0xc4)](0x2578 + 0xf15 + -0x3 * 0x10ff)[H(0xcc)](k);
        } else {
            const k = await Message_1[I(0xb1)][H(0xfb)](), l = {};
            return l[I(0xfb)] = k, g[I(0xcc)](l);
        }
    } catch (m) {
        if (i[I(0xaf)](i[I(0xea)], i[I(0xea)])) {
            const o = {};
            return o[H(0xb1)] = j, g && h[H(0x97)] ? i : o;
        } else {
            const o = {};
            return o[H(0xf5)] = i[I(0xd7)], g[I(0xc4)](0x93c + -0x2546 + 0x1dfe)[H(0xcc)](o);
        }
    }
};
exports[C(0xf7) + C(0x10b)] = ListCountMensagens;
const store = async (f, g) => {
    const J = C, K = C, h = {};
    h[J(0x122)] = K(0xbe) + K(0xee) + 'G', h[J(0xdd)] = K(0xce) + J(0xbd) + K(0xd5) + J(0xc0), h[K(0xd0)] = K(0xd1) + K(0xc3) + K(0x116), h[K(0xa6)] = function (r, s) {
        return r === s;
    }, h[J(0xcd)] = K(0xe6), h[K(0x114)] = K(0x121), h[J(0xf8)] = J(0xfc), h[K(0x120)] = J(0xa7), h[J(0xe1)] = K(0x9b) + K(0x10c) + K(0x123), h[J(0xba)] = K(0xbf), h[J(0xef)] = K(0xbb), h[K(0xb9)] = function (r, s) {
        return r === s;
    }, h[K(0x10d)] = K(0xe4);
    const i = h, {ticketId: j} = f[J(0x105)], {
            tenantId: k,
            id: l
        } = f[K(0xb2)], m = f[J(0xe9)], n = f[J(0xde)], o = {};
    o['id'] = j, o[K(0x124)] = k;
    const p = await (-0x3 * 0x10f + -0x19d * -0x6 + -0x22b * 0x3, ShowTicketService_1[K(0xb1)])(o);
    try {
        if (i[K(0xa6)](i[K(0xba)], i[J(0xba)]))
            await (-0x1 * 0x2449 + -0x33 * -0x3b + 0xa * 0x274, SetTicketMessagesAsRead_1[J(0xb1)])(p);
        else {
            f[J(0xa0)][K(0xf5)](K(0xbe) + J(0xee) + J(0xd4) + g);
            throw new h[(J(0xb1))](i[K(0x122)]);
        }
    } catch (s) {
        if (i[J(0xa6)](i[J(0xef)], i[J(0xef)]))
            console[J(0x119)](i[K(0xd0)], s);
        else {
            const u = {};
            return u[J(0xf5)] = i[J(0xdd)], o[K(0xc4)](0x1355 + -0x3f9 + -0xd68)[J(0xcc)](u);
        }
    }
    try {
        if (n)
            n[K(0x11e)](async (u, v) => {
                const L = K, M = J, w = {};
                w[L(0xf1)] = i[M(0xd0)];
                const x = w;
                if (i[M(0xa6)](i[L(0xcd)], i[M(0x114)]))
                    w[L(0x119)](x[L(0xf1)], f);
                else {
                    const z = {
                        'fromMe': m[M(0x98)],
                        'body': Array[M(0xca)](m[M(0xe9)]) ? m[M(0xe9)][v] : m[M(0xe9)],
                        'idFront': Array[M(0xca)](m[L(0x106)]) ? m[M(0x106)][v] : m[M(0x106)],
                        'read': ![]
                    };
                    await (0x1a0e + -0xd * -0xcb + -0xc1f * 0x3, CreateMessageSystemService_1[L(0xb1)])({
                        'msg': z,
                        'tenantId': k,
                        'medias': [u],
                        'ticket': p,
                        'userId': l,
                        'scheduleDate': m[L(0xa3) + 'te'] ? new Date(Array[M(0xca)](m[M(0xa3) + 'te']) ? m[M(0xa3) + 'te'][v] : m[M(0xa3) + 'te']) : undefined,
                        'sendType': m[M(0xb6)] || i[L(0xf8)],
                        'status': i[L(0x120)],
                        'idFront': Array[L(0xca)](m[L(0x106)]) ? m[L(0x106)][v] : m[L(0x106)]
                    });
                }
            });
        else {
            if (i[J(0xb9)](i[J(0x10d)], i[K(0x10d)])) {
                const u = {};
                u[J(0xb4)] = m, u[K(0x124)] = k, u[J(0xc9)] = n, u[J(0xeb)] = p, u[K(0xbc)] = l, u[J(0xa3) + 'te'] = m[J(0xa3) + 'te'], u[K(0xb6)] = m[J(0xb6)] || i[K(0xf8)], u[J(0xc4)] = i[K(0x120)], u[J(0x106)] = m[K(0x106)], await (-0x7d + -0x22c2 + 0x233f, CreateMessageSystemService_1[J(0xb1)])(u);
            } else
                e[K(0x119)](i[J(0xe1)], f);
        }
    } catch (w) {
        console[K(0x119)](i[J(0xe1)], w);
    }
    return g[K(0xda)]();
};
exports[D(0xe5)] = store;
const edit = async (f, g) => {
    const N = C, O = C, h = {};
    h[N(0xfe)] = function (n, o) {
        return n instanceof o;
    }, h[O(0xd9)] = function (n, o) {
        return n === o;
    }, h[O(0x10f)] = N(0xb8) + N(0xd3), h[O(0xa5)] = function (n, o) {
        return n !== o;
    }, h[O(0x11a)] = O(0x111), h[O(0xae)] = N(0xc6), h[O(0xed)] = function (n, o) {
        return n instanceof o;
    };
    const i = h, {messageId: j} = f[N(0x105)], {tenantId: k} = f[O(0xb2)], l = +k, {body: m} = f[N(0xe9)];
    try {
        const n = {};
        n[N(0xdb)] = j, n[N(0x124)] = l, n[N(0xe9)] = m;
        const {
            ticketId: o,
            message: p
        } = await (-0x7db + -0x1 * -0x164 + 0x677, EditWhatsAppMessage_1[N(0xb1)])(n);
    } catch (r) {
        if (i[O(0xa5)](i[N(0x11a)], i[O(0xae)])) {
            if (i[N(0xed)](r, AppError_1[N(0xb1)]) && i[N(0xd9)](r[O(0x101)], i[N(0x10f)])) {
                const s = {};
                return s[O(0xf5)] = r[N(0x101)], g[O(0xc4)](0xf2 + 0x8d * 0x2 + -0x7c)[N(0xcc)](s);
            }
            throw r;
        } else {
            if (i[O(0xfe)](i, j[O(0xb1)]) && i[O(0xd9)](k[N(0x101)], i[O(0x10f)])) {
                const u = {};
                return u[O(0xf5)] = p[O(0x101)], o[O(0xc4)](-0x24ba + -0x5bb * 0x1 + -0x1 * -0x2c05)[N(0xcc)](u);
            }
            throw n;
        }
    }
    return g[N(0xda)]();
};
exports[C(0xc7)] = edit;
const remove = async (d, e) => {
    const P = D, Q = C, f = {};
    f[P(0xcf)] = P(0xbe) + Q(0xee) + 'G';
    const g = f, {messageId: h} = d[Q(0x105)], {tenantId: i} = d[Q(0xb2)];
    try {
        await (-0xd5e * 0x1 + 0x764 + 0x5fa, DeleteMessageSystem_1[Q(0xb1)])(d[P(0xe9)]['id'], h, i);
    } catch (j) {
        logger_1[P(0xa0)][P(0xf5)](Q(0xbe) + P(0xee) + Q(0xd4) + j);
        throw new AppError_1[(P(0xb1))](g[Q(0xcf)]);
    }
    return e[P(0xda)]();
};
exports[C(0x11f)] = remove;
const forward = async (d, e) => {
    const R = C, S = D, f = d[R(0xe9)], {user: g} = d;
    for (const h of f[R(0x115)]) {
        const i = {};
        i[S(0xbc)] = g['id'], i[R(0x124)] = g[R(0x124)], i[R(0x101)] = h, i[S(0xb5)] = f[R(0xb5)], i[S(0xac) + S(0xf3)] = h[S(0x9c)], await (0x1f8b + -0x1 * -0xa1d + 0x4 * -0xa6a, CreateForwardMessageService_1[S(0xb1)])(i);
    }
    return e[R(0xda)]();
};
function a() {
    const T = [
        '../models/',
        'igin',
        'stMessages',
        'error',
        'jmxbT',
        'ListCountM',
        'UPUjq',
        'fault',
        'messagesOf',
        'count',
        'chat',
        'Ttaqk',
        'hWZVb',
        'Message',
        'index',
        'message',
        '48QNGnHk',
        '16sRmUyT',
        '3pjSZwH',
        'params',
        'idFront',
        '111495rBOUiU',
        '../errors/',
        '485340DCoKaK',
        's/TicketSe',
        'ensagens',
        'MessageSys',
        'EznTa',
        'ogger',
        'ktprK',
        'pageNumber',
        'FdszV',
        'erty',
        's/MessageS',
        'JIPUp',
        'messages',
        'ead',
        '589092LbyWaG',
        '../utils/l',
        'log',
        'qbRHo',
        'ervices/Li',
        'RvfRF',
        'ervices/Cr',
        'forEach',
        'remove',
        'SWgBt',
        'oROOP',
        'XSwBY',
        'temService',
        'tenantId',
        'hatsAppMes',
        '40HwOCka',
        '__esModule',
        'fromMe',
        '3783769oTXWsh',
        'fLine',
        'try\x20Create',
        'ticketId',
        '/SetTicket',
        '__importDe',
        'hasMore',
        'logger',
        'sageSystem',
        'rvice',
        'scheduleDa',
        '../helpers',
        'xcyDz',
        'mlnKg',
        'pending',
        '1684361wCHiwe',
        'AppError',
        'forward',
        '116405tukNfJ',
        'ticketIdOr',
        '213734yJiGjC',
        'FczqK',
        'Mxvmg',
        'value',
        'default',
        'user',
        '130WxOkqH',
        'msg',
        'contact',
        'sendType',
        'query',
        'ERR_EDITIN',
        'YQlfn',
        'KiZkR',
        'uCzfB',
        'userId',
        '\x20erro\x20ao\x20c',
        'ERR_DELETE',
        'yocVt',
        'ensagens.',
        'sage',
        'wTicketSer',
        'essagesAsR',
        'status',
        'MessagesAs',
        'gWBwF',
        'edit',
        '45mSlWMZ',
        'medias',
        'isArray',
        'eSystemSer',
        'json',
        'WGSfX',
        'Ocorreu\x20um',
        'fhlVB',
        'LdXZj',
        'SetTicketM',
        'Service',
        'G_WAPP_MSG',
        'G:\x20',
        'ontar\x20as\x20m',
        'vice',
        'OJQSW',
        'defineProp',
        'BIJkW',
        'send',
        'messageId',
        '/DeleteMes',
        'OsXSm',
        'files',
        'rvices/Sho',
        'Read',
        'LeeyV',
        'eateForwar',
        'ices/EditW',
        'NNfTn',
        'store',
        'xdpSs',
        'eateMessag',
        's/WbotServ',
        'body',
        'TtrAv',
        'ticket',
        '../service',
        'mOYMA',
        '_SYSTEM_MS',
        'giCYj',
        'dMessageSe',
        'eQOuA'
    ];
    a = function () {
        return T;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x14 * -0x1bb + -0xfd7 * -0x1 + 0x135a);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[D(0xaa)] = forward;