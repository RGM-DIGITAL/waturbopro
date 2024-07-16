'use strict';
const V = b, W = b;
(function (c, d) {
    const T = b, U = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(T(0x188)) / (-0x174 * -0x9 + 0x168f + 0x11d1 * -0x2) * (-parseInt(T(0x189)) / (0x379 * -0x7 + -0x1259 + 0x2aaa)) + -parseInt(U(0x177)) / (-0x1d43 + -0xddd + -0xe61 * -0x3) + -parseInt(T(0x160)) / (0x104a + 0x44b + 0x1 * -0x1491) * (parseInt(T(0x18c)) / (-0x1f55 * -0x1 + -0x3 * -0x7eb + -0x3711)) + parseInt(T(0x173)) / (0x8a * -0x3b + -0x2 * -0x56b + -0x2 * -0xa7f) + parseInt(T(0x152)) / (-0x1 * -0x1381 + 0x106b + 0x9 * -0x3fd) * (parseInt(T(0x14f)) / (0x23e3 + 0x2ac + -0x2687)) + -parseInt(T(0x142)) / (0x12ba + 0x1518 + -0x27c9) * (parseInt(T(0x153)) / (-0x859 * -0x1 + 0x2c * -0x42 + -0x309 * -0x1)) + -parseInt(U(0x13f)) / (0x283 * -0x3 + -0x1 * 0x326 + 0xaba) * (-parseInt(T(0x171)) / (-0x123 * -0x5 + 0x4f * -0x49 + 0x10e4));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x277fc + 0x625db + -0x3e33 * 0x15));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x10ea + -0x7 * 0x161 + -0x71 * -0x3f);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[V(0x17c) + W(0x17f)] || function (c) {
    const X = V;
    return c && c[X(0x143)] ? c : { 'default': c };
};
const u = {};
function a() {
    const a2 = [
        'xgIac',
        'count',
        '970959FjqFjv',
        'jJqeH',
        'Url',
        'endOfDay',
        'eues',
        '__importDe',
        'profile',
        'bLTLV',
        'fault',
        'ls/Queue',
        'indexOf',
        'dPCLr',
        'Rukgw',
        'DESC',
        'include',
        'updatedAt',
        'JhQGn',
        '31CirOpE',
        '29598hZTrbu',
        'qEsWe',
        'ls/Ticket',
        '5gVXghy',
        'ls/Contact',
        'alPqG',
        'xrYdg',
        'startOfDay',
        'ndGVR',
        'user',
        'ls/User',
        'erty',
        'number',
        'pending',
        'cvkxy',
        '12419BVgBOl',
        'GbDZL',
        'whatsapp',
        '45DwcCwR',
        '__esModule',
        'tenantId',
        'contact',
        'EuKRG',
        'PUnVB',
        'tsxXR',
        'value',
        'EkPHn',
        'NQRJx',
        'date-fns',
        'status',
        '../../mode',
        '11344lQcdMf',
        'findAll',
        'userId',
        '756uIQtfl',
        '169520EQETnk',
        'mycDH',
        'uvvWP',
        'order',
        'fBSOS',
        'where',
        'cWTyk',
        'true',
        'name',
        'profilePic',
        'defineProp',
        'forEach',
        'associatio',
        '899908fgNeDB',
        'pDFZg',
        'open',
        'parseISO',
        'between',
        'FbUTz',
        'attributes',
        'sequelize',
        'default',
        'model',
        'push',
        'queueId',
        'UetoJ',
        'map',
        'ls/UsersQu',
        'gSGBl',
        'BLvHo',
        '10548GllOLP',
        'Nvuta',
        '1061616pfsQLz',
        'oXbFs'
    ];
    a = function () {
        return a2;
    };
    return a();
}
u[V(0x149)] = !![], Object[V(0x15d) + W(0x194)](exports, W(0x143), u);
const sequelize_1 = require(V(0x167)), date_fns_1 = require(W(0x14c)), Ticket_1 = __importDefault(require(W(0x14e) + V(0x18b))), UsersQueues_1 = __importDefault(require(W(0x14e) + W(0x16e) + W(0x17b))), User_1 = __importDefault(require(W(0x14e) + V(0x193))), Contact_1 = __importDefault(require(W(0x14e) + V(0x18d))), Queue_1 = __importDefault(require(V(0x14e) + W(0x180))), TicketsQueuesService = async ({
        dateStart: n,
        dateEnd: o,
        status: p,
        userId: q,
        queuesIds: r,
        tenantId: s,
        showAll: t
    }) => {
        const Y = V, Z = W, v = {};
        v[Y(0x17e)] = function (I, J) {
            return I !== J;
        }, v[Y(0x172)] = Y(0x147), v[Y(0x182)] = Z(0x146), v[Z(0x175)] = Z(0x145), v[Z(0x157)] = Z(0x15b), v[Y(0x148)] = Z(0x195), v[Z(0x140)] = Z(0x15c) + Y(0x179), v[Z(0x16c)] = Z(0x141), v[Y(0x187)] = Y(0x192), v[Z(0x154)] = Y(0x17d), v[Y(0x18f)] = function (I, J) {
            return I === J;
        }, v[Z(0x178)] = Z(0x174), v[Y(0x155)] = Z(0x16f), v[Z(0x18a)] = function (I, J) {
            return I == J;
        }, v[Y(0x18e)] = Z(0x15a), v[Z(0x170)] = Z(0x162), v[Y(0x161)] = Y(0x196), v[Z(0x191)] = function (I, J) {
            return I && J;
        }, v[Y(0x165)] = Z(0x14a), v[Y(0x14b)] = Z(0x159), v[Z(0x183)] = Z(0x186), v[Z(0x13e)] = Z(0x184);
        const w = v;
        let x = {};
        const y = {};
        y[Z(0x169)] = Contact_1[Y(0x168)], y['as'] = w[Y(0x175)], y[Y(0x166)] = [
            'id',
            w[Y(0x157)],
            w[Z(0x148)],
            w[Y(0x140)]
        ];
        const z = {};
        z[Y(0x15f) + 'n'] = w[Y(0x16c)], z[Y(0x166)] = [
            'id',
            w[Y(0x157)]
        ];
        const A = {};
        A[Z(0x169)] = User_1[Z(0x168)], A['as'] = w[Y(0x187)], A[Z(0x166)] = [
            'id',
            w[Z(0x157)],
            w[Y(0x154)]
        ];
        const B = [
                y,
                z,
                A
            ], C = {};
        C[Z(0x144)] = s;
        const D = {};
        D[Y(0x158)] = C;
        const E = await Queue_1[Z(0x168)][Z(0x176)](D);
        if (E) {
            const I = {};
            I[Z(0x151)] = q;
            const J = {};
            J[Z(0x158)] = I;
            const K = await UsersQueues_1[Y(0x168)][Z(0x150)](J);
            let L = K[Z(0x16d)](N => N[Z(0x16b)]);
            if (r) {
                if (w[Z(0x18f)](w[Z(0x178)], w[Y(0x155)]))
                    z[Y(0x16a)](+A);
                else {
                    const O = [];
                    r[Z(0x15e)](P => {
                        const a0 = Z, a1 = Y;
                        if (w[a0(0x17e)](w[a0(0x172)], w[a0(0x182)])) {
                            const Q = L[a1(0x181)](+P);
                            Q && O[a1(0x16a)](+P);
                        } else {
                            const S = { ...C };
                            S[a0(0x14d)] = D, A = S;
                        }
                    }), L = O;
                }
            }
            const M = { [sequelize_1['Op']['in']]: L };
            x = {
                ...x,
                'queueId': M
            };
        }
        w[Y(0x18a)](t, w[Y(0x18e)]) && (x = {});
        p ? x = {
            ...x,
            'status': p
        } : p = [
            w[Z(0x170)],
            w[Y(0x161)]
        ];
        if (w[Z(0x191)](n, o)) {
            if (w[Z(0x18f)](w[Y(0x165)], w[Z(0x14b)])) {
                const Q = {};
                return Q[Z(0x168)] = j, C && D[Z(0x143)] ? i : Q;
            } else
                x = {
                    ...x,
                    'createdAt': {
                        [sequelize_1['Op'][Z(0x164)]]: [
                            +(0x1889 + -0x244d * 0x1 + 0xc * 0xfb, date_fns_1[Y(0x190)])((-0xf5b + 0x4f3 + 0xa68, date_fns_1[Y(0x163)])(n)),
                            +(-0x623 * 0x4 + 0x573 * -0x7 + -0x3eb1 * -0x1, date_fns_1[Z(0x17a)])((-0xe33 + -0x19e3 + 0x2816, date_fns_1[Z(0x163)])(o))
                        ]
                    }
                };
        }
        const F = { ...x };
        F[Y(0x144)] = s;
        const G = {};
        G[Y(0x158)] = F, G[Z(0x185)] = B, G[Z(0x156)] = [[
                w[Y(0x183)],
                w[Z(0x13e)]
            ]];
        const H = await Ticket_1[Y(0x168)][Y(0x150)](G);
        return H;
    };
exports[W(0x168)] = TicketsQueuesService;