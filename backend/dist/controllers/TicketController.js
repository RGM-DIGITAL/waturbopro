'use strict';
const K = b, L = b;
(function (c, d) {
    const I = b, J = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(I(0x19c)) / (-0x3 * -0x6e9 + 0x103c + -0x24f6) * (parseInt(J(0x188)) / (-0x46 * 0x6c + 0x11 * -0x2b + -0x2065 * -0x1)) + parseInt(J(0x196)) / (0x1495 + -0x218b + 0xcf9) + -parseInt(I(0x17b)) / (0x1209 + -0xdc2 + -0x443) * (-parseInt(I(0x177)) / (0x567 + -0x113c + 0xbda)) + -parseInt(I(0x122)) / (0x1256 * 0x1 + 0x2 * 0x1a0 + -0x1590) + -parseInt(J(0x189)) / (0x1664 + -0x663 + 0x5 * -0x332) + parseInt(I(0x133)) / (0x20a9 + -0x1ae1 + -0x5c0) + parseInt(I(0x12d)) / (-0xbfb + -0x928 + 0x152c) * (-parseInt(I(0x124)) / (-0x314 + -0xfb1 + 0x12cf));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x3d713 + 0x1b8 * 0x235 + 0xbd225));
var __importDefault = this && this[K(0x11f) + K(0x148)] || function (c) {
    const M = L;
    return c && c[M(0x149)] ? c : { 'default': c };
};
const n = {};
n[L(0x12f)] = !![], Object[L(0x193) + L(0x187)](exports, K(0x149), n), exports[L(0x15e) + K(0x17e)] = exports[K(0x194)] = exports[L(0x111)] = exports[L(0x170)] = exports[L(0x104)] = exports[K(0x108)] = void (-0x693 * 0x3 + -0x1db1 + 0xe6 * 0x37);
const sequelize_1 = require(K(0x182)), socket_1 = require(K(0x19d) + K(0x17e)), Message_1 = __importDefault(require(K(0xfa) + K(0x16a))), CreateLogTicketService_1 = __importDefault(require(K(0x14c) + K(0x150) + L(0x171) + K(0x179) + L(0x173))), CreateTicketService_1 = __importDefault(require(L(0x14c) + K(0x150) + L(0x171) + L(0x199) + L(0xfd))), DeleteTicketService_1 = __importDefault(require(L(0x14c) + K(0x150) + K(0x11e) + K(0x17c) + K(0xfd))), ListTicketsService_1 = __importDefault(require(L(0x14c) + L(0x150) + L(0x18e) + K(0xfe) + L(0x174))), ShowLogTicketService_1 = __importDefault(require(L(0x14c) + L(0x150) + L(0x155) + L(0x184) + K(0x105))), ShowTicketService_1 = __importDefault(require(K(0x14c) + K(0x150) + K(0x155) + L(0x109) + K(0x10a))), UpdateTicketService_1 = __importDefault(require(K(0x14c) + L(0x150) + K(0x17a) + K(0x199) + L(0xfd))), Whatsapp_1 = __importDefault(require(K(0xfa) + L(0x172))), AppError_1 = __importDefault(require(L(0x131) + L(0x123))), CreateMessageSystemService_1 = __importDefault(require(K(0x14c) + K(0x157) + L(0x128) + L(0x195) + L(0x175) + K(0x10a))), pupa_1 = require(L(0xfb) + K(0x141)), Ticket_1 = __importDefault(require(L(0xfa) + L(0x167))), ListSettingsService_1 = __importDefault(require(K(0x14c) + L(0x119) + K(0x143) + L(0x163) + K(0x105))), index = async (e, f) => {
        const N = L, O = K, {
                tenantId: g,
                profile: h
            } = e[N(0x125)], {
                searchParam: i,
                pageNumber: j,
                status: k,
                date: l,
                showAll: m,
                withUnreadMessages: o,
                queuesIds: p,
                isNotAssignedUser: q,
                includeNotQueueDefined: r
            } = e[O(0x13a)], s = e[O(0x125)]['id'], t = {};
        t[O(0x15f) + 'm'] = i, t[N(0x162)] = j, t[O(0x169)] = k, t[N(0x126)] = l, t[N(0x101)] = m, t[N(0x13f)] = s, t[O(0x10d) + N(0x15b)] = o, t[O(0x118)] = p, t[O(0x132) + N(0x10b)] = q, t[O(0x11b) + O(0x17d) + 'ed'] = r, t[N(0x186)] = g, t[O(0x181)] = h;
        const {
                tickets: u,
                count: v,
                hasMore: w
            } = await (0x45c + 0x1fd6 + 0x1 * -0x2432, ListTicketsService_1[O(0x10f)])(t), x = {};
        return x[O(0x147)] = u, x[N(0x135)] = v, x[N(0x107)] = w, f[O(0x169)](-0xea6 + -0xc76 + -0x1c * -0xff)[O(0x11d)](x);
    };
exports[K(0x108)] = index;
const store = async (i, j) => {
    const P = L, Q = L, k = {};
    k[P(0x129)] = function (C, D) {
        return C === D;
    }, k[Q(0x164)] = P(0x13e) + Q(0x10c) + 'ts', k[Q(0x15d)] = P(0x10e) + P(0x191) + Q(0x14f) + P(0x197), k[Q(0x12c)] = P(0x198), k[P(0x112)] = Q(0x110), k[Q(0x134)] = P(0x156), k[P(0x140)] = function (C, D) {
        return C != D;
    }, k[Q(0x138)] = function (C, D) {
        return C == D;
    }, k[P(0x146)] = function (C, D) {
        return C !== D;
    }, k[P(0x130)] = Q(0x165), k[Q(0x116)] = P(0x121), k[Q(0x152)] = P(0x137), k[Q(0x11a)] = P(0x14e);
    const l = k, {tenantId: m} = i[P(0x125)], {
            contactId: o,
            status: p,
            userId: q,
            channel: r,
            channelId: s
        } = i[P(0x144)], t = {};
    t[P(0x169)] = l[P(0x12c)];
    const u = {};
    u[Q(0x169)] = l[P(0x112)];
    const v = {
        [sequelize_1['Op']['or']]: [
            t,
            u
        ]
    };
    v[Q(0x15a)] = o, v[Q(0x186)] = m, v[Q(0x16b)] = r;
    const w = {};
    w[Q(0x127)] = v;
    const x = await Ticket_1[P(0x10f)][P(0x13b)](w), y = await (-0xbf * -0x2f + 0x1289 + -0x359a, ListSettingsService_1[P(0x10f)])(m), z = l[Q(0x129)](y?.[P(0x15c)](C => {
            const R = Q, S = P;
            return l[R(0x129)](C[S(0x113)], l[S(0x164)]);
        })?.[Q(0x12f)], l[P(0x134)]) ? 'S' : 'N';
    if (x && !!x[Q(0x13f)] && l[P(0x140)](x[Q(0x13f)], q) && l[Q(0x138)](z, 'S'))
        throw new AppError_1[(Q(0x10f))](l[P(0x15d)]);
    if (x)
        return l[Q(0x146)](l[P(0x130)], l[Q(0x116)]) ? j[Q(0x169)](0x8c * 0x46 + 0xa8 * 0x2 + -0x26d0)[P(0x11d)](x) : l[Q(0x129)](t[Q(0x113)], l[P(0x164)]);
    const A = {};
    A[Q(0x15a)] = o, A[Q(0x169)] = p, A[Q(0x13f)] = q, A[Q(0x186)] = m, A[Q(0x16b)] = r, A[Q(0x18d)] = s;
    const B = await (-0x52 * -0x38 + 0x7b + -0x126b, CreateTicketService_1[P(0x10f)])(A);
    if (!q) {
        if (l[Q(0x129)](l[Q(0x152)], l[Q(0x152)])) {
            const D = (0x404 + -0x12 * -0xe0 + -0x14 * 0xfd, socket_1[P(0x100)])();
            D['to'](m + ':' + B[Q(0x169)])[Q(0x19b)](m + Q(0x154), {
                'action': l[Q(0x11a)],
                'ticket': B
            });
        } else
            throw new t[(P(0x10f))](l[Q(0x15d)]);
    }
    return j[P(0x169)](0x1c * 0x47 + 0x1aad + 0x21a9 * -0x1)[P(0x11d)](B);
};
exports[L(0x104)] = store;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xff8 + -0x20bb + 0x31ab * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const show = async (i, j) => {
    const T = K, U = K, k = {};
    k[T(0x17f)] = T(0x110), k[T(0xff)] = T(0x183) + T(0x103), k[T(0x11c)] = T(0x18b);
    const l = k, {ticketId: m} = i[T(0x19a)], {tenantId: o} = i[T(0x125)], p = i[U(0x125)]['id'], q = {};
    q['id'] = m, q[U(0x186)] = o;
    const r = await (-0x1a * 0x9d + 0x2cd + 0xd25, ShowTicketService_1[U(0x10f)])(q), s = { [sequelize_1['Op'][U(0x106)]]: null }, t = {};
    t[U(0x15a)] = r[U(0x15a)], t[U(0x180) + 'te'] = s, t[U(0x169)] = l[U(0x17f)];
    const u = t, v = {};
    v[U(0x127)] = u;
    const w = await Message_1[T(0x10f)][T(0x153)](v);
    r[U(0x176) + 'ue'](l[U(0xff)], w);
    const x = {};
    return x[T(0x13f)] = p, x[U(0x161)] = m, x[T(0x166)] = l[T(0x11c)], await (-0xa * 0x19 + -0x9be + 0x2 * 0x55c, CreateLogTicketService_1[U(0x10f)])(x), j[T(0x169)](-0x1475 + -0x245d + 0x399a)[U(0x11d)](r);
};
exports[L(0x170)] = show;
const update = async (l, m) => {
    const V = K, W = L, o = {};
    o[V(0x16e)] = function (z, A) {
        return z === A;
    }, o[W(0x14a)] = W(0x145), o[W(0x14d)] = function (z, A) {
        return z !== A;
    }, o[V(0xf8)] = V(0x102), o[V(0x115)] = V(0x12e), o[V(0x168)] = W(0x110);
    const p = o, {ticketId: q} = l[V(0x19a)], {tenantId: r} = l[W(0x125)], s = l[V(0x125)]['id'], {isTransference: t} = l[W(0x144)], u = { ...l[W(0x144)] };
    u[W(0x186)] = r;
    const v = u, w = {};
    w[W(0x18a)] = v, w[W(0x161)] = q, w[W(0x16c) + W(0x158)] = t, w[W(0x185) + W(0x190)] = s;
    const {ticket: x} = await (-0x50f + 0x8 * 0x1b5 + 0x899 * -0x1, UpdateTicketService_1[V(0x10f)])(w);
    if (p[V(0x16e)](v[W(0x169)], p[W(0x14a)])) {
        if (p[V(0x14d)](p[V(0xf8)], p[V(0xf8)]))
            return w[V(0x169)](-0x2 * -0x126a + -0x2029 * -0x1 + -0x4435)[W(0x11d)](f);
        else {
            const z = {};
            z['id'] = x[V(0x136)], z[W(0x186)] = r;
            const A = {};
            A[V(0x127)] = z;
            const B = await Whatsapp_1[V(0x10f)][W(0x13b)](A);
            if (B?.[W(0x114) + W(0x120)]) {
                const C = {};
                C[W(0xf9)] = x[V(0xf9)], C[W(0x18f)] = x[V(0x14b)][V(0x18f)];
                const D = (-0xc80 + 0x815 * 0x3 + -0xbbf, pupa_1[W(0x13c)])(B[V(0x114) + W(0x120)] || '', C), E = {};
                E[V(0x144)] = D, E[W(0x160)] = !![], E[V(0x117)] = !![];
                const F = {};
                F[V(0x16d)] = E, F[W(0x186)] = r, F[W(0x13d)] = x, F[W(0x13f)] = l[W(0x125)]['id'], F[W(0x178)] = p[V(0x115)], F[V(0x169)] = p[V(0x168)], F[W(0x16c)] = ![], F[V(0x151)] = ![];
                const G = F;
                await (-0x7a * 0x8 + -0x19d + 0x56d, CreateMessageSystemService_1[W(0x10f)])(G);
                const H = {};
                H[W(0x159) + V(0x16a)] = !![], await x[V(0x111)](H);
            }
        }
    }
    return m[W(0x169)](0x19dc + 0x1069 * 0x1 + -0x297d)[V(0x11d)](x);
};
exports[L(0x111)] = update;
function a() {
    const a1 = [
        'fyJfG',
        'read',
        'queuesIds',
        's/SettingS',
        'sASrF',
        'includeNot',
        'pUFWJ',
        'json',
        'rvices/Del',
        '__importDe',
        'ssage',
        'YUvIl',
        '9207768gHcBiU',
        'AppError',
        '20KeoVlm',
        'user',
        'date',
        'where',
        'ervices/Cr',
        'OBYAo',
        'ticket\x20del',
        'eted',
        'TJefw',
        '4111362CPSphA',
        'bot',
        'value',
        'CzjgK',
        '../errors/',
        'isNotAssig',
        '1910928KhVpDE',
        'OEagO',
        'count',
        'whatsappId',
        'TtkMm',
        'RsJqP',
        'message',
        'query',
        'findOne',
        'pupa',
        'ticket',
        'NotViewAss',
        'userId',
        'EUNtV',
        'upa',
        'ZcUoR',
        'ervices/Li',
        'body',
        'closed',
        'nBkAP',
        'tickets',
        'fault',
        '__esModule',
        'rpLyA',
        'contact',
        '../service',
        'GOkaz',
        'create',
        'para\x20outro',
        's/TicketSe',
        'note',
        'kQfQn',
        'findAll',
        ':ticket',
        'rvices/Sho',
        'enabled',
        's/MessageS',
        'ence',
        'isFarewell',
        'contactId',
        'Messages',
        'find',
        'nxqgr',
        'showLogsTi',
        'searchPara',
        'fromMe',
        'ticketId',
        'pageNumber',
        'stSettings',
        'fmhOD',
        'ofSqT',
        'type',
        'Ticket',
        'QyunL',
        'status',
        'Message',
        'channel',
        'isTransfer',
        'msg',
        'mjzkl',
        'delete',
        'show',
        'rvices/Cre',
        'Whatsapp',
        'etService',
        'rvice',
        'eSystemSer',
        'setDataVal',
        '163935mftioA',
        'sendType',
        'ateLogTick',
        'rvices/Upd',
        '164dIRnJu',
        'eteTicketS',
        'QueueDefin',
        'cket',
        'rNScF',
        'scheduleDa',
        'profile',
        'sequelize',
        'scheduledM',
        'wLogTicket',
        'userIdRequ',
        'tenantId',
        'erty',
        '2eUCZHT',
        '3071803oTcCnC',
        'ticketData',
        'access',
        ':notificat',
        'channelId',
        'rvices/Lis',
        'name',
        'est',
        'atribuido\x20',
        'ion',
        'defineProp',
        'remove',
        'eateMessag',
        '2267403MQPqzE',
        '\x20usuário',
        'open',
        'ateTicketS',
        'params',
        'emit',
        '1319785pgoZwD',
        '../libs/so',
        'ZMVXc',
        'protocol',
        '../models/',
        '../utils/p',
        'GulFB',
        'ervice',
        'tTicketsSe',
        'jXIdi',
        'getIO',
        'showAll',
        'CHQeE',
        'essages',
        'store',
        'Service',
        'not',
        'hasMore',
        'index',
        'wTicketSer',
        'vice',
        'nedUser',
        'ignedTicke',
        'withUnread',
        'Ticket\x20já\x20',
        'default',
        'pending',
        'update',
        'SrQmC',
        'key',
        'farewellMe',
        'bFpAz'
    ];
    a = function () {
        return a1;
    };
    return a();
}
const remove = async (f, g) => {
    const X = K, Y = K, h = {};
    h[X(0xfc)] = Y(0x16f), h[Y(0x142)] = X(0x12a) + X(0x12b);
    const i = h, {ticketId: j} = f[X(0x19a)], {tenantId: k} = f[Y(0x125)], l = f[X(0x125)]['id'], m = {};
    m['id'] = j, m[X(0x186)] = k, m[Y(0x13f)] = l;
    const o = await (0x12e * 0x1d + 0x3 * -0xc13 + -0x67 * -0x5, DeleteTicketService_1[X(0x10f)])(m), p = (-0x1da9 + 0xcd3 + 0x10d6, socket_1[Y(0x100)])();
    p['to'](k + ':' + o[X(0x169)])['to'](k + ':' + j)['to'](k + (Y(0x18c) + Y(0x192)))[Y(0x19b)](k + X(0x154), {
        'action': i[X(0xfc)],
        'ticketId': +j
    });
    const q = {};
    return q[Y(0x139)] = i[X(0x142)], g[X(0x169)](-0x2178 + -0xdd2 + -0x15 * -0x24a)[X(0x11d)](q);
};
exports[L(0x194)] = remove;
const showLogsTicket = async (d, e) => {
    const Z = K, a0 = L, {ticketId: f} = d[Z(0x19a)], g = {};
    g[a0(0x161)] = f;
    const h = await (0xc * -0x19b + -0x7f * -0x7 + -0x137 * -0xd, ShowLogTicketService_1[a0(0x10f)])(g);
    return e[Z(0x169)](-0x1787 + 0x1 * 0x17b1 + -0x4f * -0x2)[a0(0x11d)](h);
};
exports[K(0x15e) + L(0x17e)] = showLogsTicket;