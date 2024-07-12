'use strict';
const Y = b, Z = b;
(function (c, d) {
    const W = b, X = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(W(0x114)) / (0xd5 + -0x19f8 + -0x2 * -0xc92) + -parseInt(W(0x14b)) / (0x35f * -0x1 + 0x12 * 0x1fc + -0x2057) * (parseInt(W(0x10a)) / (0x3 * -0x12e + 0x1 * -0x1d37 + 0x20c4)) + parseInt(W(0x152)) / (-0xe35 + -0x943 * 0x2 + 0x20bf) + parseInt(X(0x12c)) / (0x1f5 * -0x13 + 0x16 * 0x16a + 0x618) + parseInt(W(0x10b)) / (0xf13 + 0x9f * -0xa + -0x49 * 0x1f) + parseInt(W(0x11b)) / (-0x19ae + 0x19a9 * 0x1 + 0x1 * 0xc) + -parseInt(W(0x127)) / (0xd * 0x22b + -0x4 * 0xbb + -0x193b);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x74a97 + 0x185ef * -0x5 + -0x42d * -0x537));
var __importDefault = this && this[Y(0x162) + Y(0x117)] || function (c) {
    const a0 = Y;
    return c && c[a0(0x104)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1c69 + -0x2f9 * 0x1 + 0x2064);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const a7 = [
        'open',
        'hoOui',
        'pending',
        'sequelize',
        'count',
        'profilePic',
        'queueId',
        'erty',
        'WdSZV',
        'attributes',
        'defineProp',
        '102160dRkqyN',
        'number',
        'findAll',
        'DESC',
        'contact',
        'cXdDC',
        'parseISO',
        '3160436JHSIeZ',
        'uQyMs',
        'kJQzG',
        'HlUgI',
        'wCJAL',
        'true',
        'CnlGB',
        'ATyDQ',
        'yHdVO',
        'qBKDP',
        'ZkJtL',
        'userId',
        'tenantId',
        'PEVBo',
        'OFXMe',
        '../../mode',
        '__importDe',
        'ls/Contact',
        'updatedAt',
        'argRK',
        '__esModule',
        'yIdkT',
        'between',
        'CqLmR',
        'ZNLHu',
        'WfpmJ',
        '33pEkkNV',
        '4386054wQEJDQ',
        'date-fns',
        'XBWOK',
        'user',
        'KLkNP',
        'vAsZs',
        'associatio',
        'waUNH',
        'UgSZE',
        '286601jjeZUw',
        'ls/UsersQu',
        'whatsapp',
        'fault',
        'bMaAZ',
        'PhUxL',
        'ciWnm',
        '411257XEdQWs',
        'order',
        'ls/User',
        'where',
        'nWCeP',
        'KavZi',
        'dceVR',
        'fntxX',
        'push',
        'aRkza',
        'default',
        'yCEjN',
        '4348160vUjoBv',
        'mBqOI',
        'ls/Queue',
        'ZFxiG',
        'Url',
        '1311425PCqsgh',
        'ls/Ticket',
        'YKAGT',
        'value',
        'auPdB',
        'forEach',
        'endOfDay',
        'map',
        'cYHrE',
        'kISZw',
        'profile',
        'Uomhb',
        'include',
        'indexOf',
        'startOfDay',
        'eues',
        'model',
        'mcsPO',
        'name',
        'status'
    ];
    a = function () {
        return a7;
    };
    return a();
}
const u = {};
u[Z(0x12f)] = !![], Object[Z(0x14a) + Y(0x147)](exports, Y(0x104), u);
const sequelize_1 = require(Z(0x143)), date_fns_1 = require(Y(0x10c)), Ticket_1 = __importDefault(require(Z(0x161) + Y(0x12d))), UsersQueues_1 = __importDefault(require(Y(0x161) + Y(0x115) + Z(0x13b))), User_1 = __importDefault(require(Z(0x161) + Z(0x11d))), Contact_1 = __importDefault(require(Y(0x161) + Y(0x163))), Queue_1 = __importDefault(require(Y(0x161) + Y(0x129))), TicketsQueuesService = async ({
        dateStart: n,
        dateEnd: o,
        status: p,
        userId: q,
        queuesIds: r,
        tenantId: s,
        showAll: t
    }) => {
        const a1 = Y, a2 = Y, v = {};
        v[a1(0x159)] = a1(0x140), v[a1(0x154)] = a1(0x142), v[a1(0x112)] = function (I, J) {
            return I === J;
        }, v[a2(0x150)] = a2(0x160), v[a2(0x119)] = function (I, J) {
            return I !== J;
        }, v[a2(0x135)] = a1(0x10d), v[a2(0x158)] = a2(0x14f), v[a1(0x10f)] = a1(0x13e), v[a1(0x107)] = a1(0x14c), v[a2(0x12a)] = a2(0x145) + a2(0x12b), v[a2(0x148)] = a1(0x116), v[a1(0x128)] = a1(0x10e), v[a2(0x110)] = a1(0x136), v[a1(0x134)] = a1(0x155), v[a1(0x130)] = a1(0x13d), v[a1(0x124)] = function (I, J) {
            return I !== J;
        }, v[a2(0x118)] = a2(0x12e), v[a1(0x11f)] = function (I, J) {
            return I == J;
        }, v[a2(0x15f)] = a2(0x157), v[a2(0x141)] = function (I, J) {
            return I !== J;
        }, v[a1(0x109)] = a2(0x121), v[a2(0x15a)] = function (I, J) {
            return I === J;
        }, v[a2(0x122)] = a1(0x153), v[a2(0x15b)] = a1(0x113), v[a2(0x11a)] = function (I, J) {
            return I && J;
        }, v[a2(0x156)] = a1(0x103), v[a1(0x15c)] = a1(0x120), v[a2(0x126)] = a1(0x102), v[a1(0x105)] = a2(0x14e);
        const w = v;
        let x = {};
        const y = {};
        y[a2(0x13c)] = Contact_1[a1(0x125)], y['as'] = w[a1(0x158)], y[a1(0x149)] = [
            'id',
            w[a2(0x10f)],
            w[a1(0x107)],
            w[a1(0x12a)]
        ];
        const z = {};
        z[a2(0x111) + 'n'] = w[a2(0x148)], z[a2(0x149)] = [
            'id',
            w[a2(0x10f)]
        ];
        const A = {};
        A[a2(0x13c)] = User_1[a1(0x125)], A['as'] = w[a1(0x128)], A[a2(0x149)] = [
            'id',
            w[a1(0x10f)],
            w[a2(0x110)]
        ];
        const B = [
                y,
                z,
                A
            ], C = {};
        C[a2(0x15e)] = s;
        const D = {};
        D[a2(0x11e)] = C;
        const E = await Queue_1[a1(0x125)][a1(0x144)](D);
        if (E) {
            if (w[a1(0x119)](w[a2(0x134)], w[a2(0x130)])) {
                const I = {};
                I[a2(0x15d)] = q;
                const J = {};
                J[a1(0x11e)] = I;
                const K = await UsersQueues_1[a1(0x125)][a2(0x14d)](J);
                let L = K[a1(0x133)](N => N[a2(0x146)]);
                if (r) {
                    if (w[a2(0x124)](w[a2(0x118)], w[a2(0x118)]))
                        F = {
                            ...G,
                            'createdAt': {
                                [n['Op'][a1(0x106)]]: [
                                    +(0x1d89 + 0x1 * -0x25dd + 0x854, o[a2(0x13a)])((-0xeec + -0x26e1 + 0x3 * 0x11ef, p[a1(0x151)])(q)),
                                    +(-0x1fa3 + -0x1619 + 0x35bc * 0x1, r[a1(0x132)])((0x1b * -0x15d + 0xb * 0x67 + 0x2062, s[a2(0x151)])(t))
                                ]
                            }
                        };
                    else {
                        const O = [];
                        r[a2(0x131)](P => {
                            const a3 = a1, a4 = a1, Q = {};
                            Q[a3(0x108)] = w[a3(0x159)], Q[a4(0x137)] = w[a3(0x154)];
                            const R = Q;
                            if (w[a3(0x112)](w[a4(0x150)], w[a3(0x150)])) {
                                const S = L[a4(0x139)](+P);
                                S && (w[a3(0x119)](w[a3(0x135)], w[a4(0x135)]) ? y = [
                                    R[a3(0x108)],
                                    R[a3(0x137)]
                                ] : O[a3(0x123)](+P));
                            } else {
                                const V = C[a3(0x139)](+D);
                                V && Q[a4(0x123)](+F);
                            }
                        }), L = O;
                    }
                }
                const M = { [sequelize_1['Op']['in']]: L };
                x = {
                    ...x,
                    'queueId': M
                };
            } else {
                const Q = [];
                A[a1(0x131)](R => {
                    const a5 = a2, a6 = a1, S = R[a5(0x139)](+R);
                    S && Q[a5(0x123)](+R);
                }), D = Q;
            }
        }
        w[a2(0x11f)](t, w[a2(0x15f)]) && (x = {});
        if (p) {
            if (w[a1(0x141)](w[a2(0x109)], w[a2(0x109)])) {
                const R = { ...C };
                R[a2(0x13f)] = D, A = R;
            } else
                x = {
                    ...x,
                    'status': p
                };
        } else {
            if (w[a2(0x15a)](w[a2(0x122)], w[a2(0x15b)])) {
                const S = {};
                return S[a1(0x125)] = j, C && D[a2(0x104)] ? i : S;
            } else
                p = [
                    w[a2(0x159)],
                    w[a2(0x154)]
                ];
        }
        w[a1(0x11a)](n, o) && (w[a2(0x15a)](w[a1(0x156)], w[a2(0x15c)]) ? y = {} : x = {
            ...x,
            'createdAt': {
                [sequelize_1['Op'][a2(0x106)]]: [
                    +(-0x187f + -0x1 * 0x23a7 + 0x3c26, date_fns_1[a2(0x13a)])((-0x9c8 + 0x195d + -0xf95, date_fns_1[a1(0x151)])(n)),
                    +(0xa * -0x24e + 0xc56 * 0x3 + 0x2 * -0x6fb, date_fns_1[a1(0x132)])((-0x12 * 0x21 + -0x1034 + 0x943 * 0x2, date_fns_1[a1(0x151)])(o))
                ]
            }
        });
        const F = { ...x };
        F[a1(0x15e)] = s;
        const G = {};
        G[a2(0x11e)] = F, G[a2(0x138)] = B, G[a1(0x11c)] = [[
                w[a1(0x126)],
                w[a1(0x105)]
            ]];
        const H = await Ticket_1[a2(0x125)][a2(0x14d)](G);
        return H;
    };
exports[Z(0x125)] = TicketsQueuesService;