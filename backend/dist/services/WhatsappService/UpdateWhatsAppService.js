'use strict';
const a1 = b, a2 = b;
(function (c, d) {
    const Z = b, a0 = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(Z(0x192)) / (-0xbba + -0x3 * 0x3d + 0x76 * 0x1b) + -parseInt(a0(0x198)) / (0x5 * 0x699 + 0x1 * 0xeaa + 0x2fa5 * -0x1) + -parseInt(Z(0x169)) / (0x1c57 + 0x1424 + -0x58 * 0x8d) + parseInt(Z(0x16f)) / (0x26ad * -0x1 + 0x38 * 0x6b + -0x5b * -0x2b) + parseInt(Z(0x19b)) / (0x57a * -0x1 + 0x1c6 * 0x2 + 0x1f3) * (-parseInt(Z(0x17b)) / (0x1459 + -0xa * 0x152 + -0x71f)) + -parseInt(Z(0x13e)) / (-0x241 * 0x5 + 0x1336 * -0x2 + 0x31b8) + parseInt(Z(0x177)) / (-0x152 * 0x11 + 0x3e9 * 0x2 + 0xe * 0x10c);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x17add * 0x1 + 0x4bf98 + 0x1be93));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x58a + 0x1f0d + -0x32 * 0xb5);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __createBinding = this && this[a1(0x171) + a2(0x18b)] || (Object[a1(0x188)] ? function (e, f, g, h) {
        const a3 = a1, a4 = a2, i = {};
        i[a3(0x17e)] = function (n, p) {
            return n === p;
        }, i[a3(0x170)] = function (n, p) {
            return n in p;
        }, i[a4(0x155)] = a4(0x195);
        const j = i;
        if (j[a4(0x17e)](h, undefined))
            h = g;
        var l = Object[a3(0x180) + a4(0x1a1) + a4(0x147)](f, g);
        if (!l || (j[a3(0x170)](j[a3(0x155)], l) ? !f[a3(0x19e)] : l[a4(0x173)] || l[a4(0x14f) + 'le'])) {
            const n = {};
            n[a3(0x146)] = !![], n[a3(0x195)] = function () {
                return f[g];
            }, l = n;
        }
        Object[a4(0x19f) + a4(0x149)](e, h, l);
    } : function (d, e, f, g) {
        const a5 = a2, a6 = a1, h = {};
        h[a5(0x18f)] = function (j, l) {
            return j === l;
        };
        const i = h;
        if (i[a6(0x18f)](g, undefined))
            g = f;
        d[g] = e[f];
    }), __setModuleDefault = this && this[a2(0x19c) + a2(0x156)] || (Object[a2(0x188)] ? function (e, f) {
        const a7 = a2, a8 = a2, g = {};
        g[a7(0x14e)] = a8(0x15d);
        const h = g, i = {};
        i[a7(0x146)] = !![], i[a7(0x196)] = f, Object[a8(0x19f) + a7(0x149)](e, h[a8(0x14e)], i);
    } : function (d, e) {
        const a9 = a2, aa = a2, f = {};
        f[a9(0x148)] = a9(0x15d);
        const g = f;
        d[g[aa(0x148)]] = e;
    }), __importStar = this && this[a2(0x183) + 'ar'] || function (c) {
        const ab = a2, ac = a2, d = {
                'kAOvw': ab(0x1a0),
                'SJatv': function (i, j) {
                    return i != j;
                },
                'nyhPc': function (i, j) {
                    return i !== j;
                },
                'JTqiv': ab(0x15d),
                'cdSfw': function (i, j, l, m) {
                    return i(j, l, m);
                },
                'GwPZT': function (i, j, l) {
                    return i(j, l);
                }
            }, e = d[ab(0x153)][ac(0x194)]('|');
        let f = 0x3d * -0x6 + 0x1 * -0x21bc + 0x232a;
        while (!![]) {
            switch (e[f++]) {
            case '0':
                var g = {};
                continue;
            case '1':
                if (d[ac(0x178)](c, null)) {
                    for (var h in c)
                        if (d[ac(0x152)](h, d[ac(0x13d)]) && Object[ac(0x140)][ac(0x15e) + ab(0x149)][ac(0x181)](c, h))
                            d[ac(0x16a)](__createBinding, g, c, h);
                }
                continue;
            case '2':
                return g;
            case '3':
                d[ab(0x182)](__setModuleDefault, g, c);
                continue;
            case '4':
                if (c && c[ac(0x19e)])
                    return c;
                continue;
            }
            break;
        }
    }, __importDefault = this && this[a1(0x14a) + a2(0x16c)] || function (c) {
        const ad = a1;
        return c && c[ad(0x19e)] ? c : { 'default': c };
    };
const G = {};
G[a1(0x196)] = !![], Object[a2(0x19f) + a2(0x149)](exports, a1(0x19e), G);
const Yup = __importStar(require(a1(0x13f))), sequelize_1 = require(a2(0x166)), AppError_1 = __importDefault(require(a1(0x17c) + a2(0x163) + 'r')), Whatsapp_1 = __importDefault(require(a2(0x16d) + a1(0x18a) + 'p')), UpdateWhatsAppService = async ({
        whatsappData: m,
        whatsappId: n,
        tenantId: o
    }) => {
        const ae = a1, af = a1, p = {};
        p[ae(0x197)] = function (J, K) {
            return J === K;
        }, p[af(0x142)] = ae(0x15d), p[af(0x141)] = function (J, K) {
            return J !== K;
        }, p[af(0x158)] = af(0x186), p[ae(0x17f)] = af(0x17a), p[ae(0x150)] = function (J, K) {
            return J === K;
        }, p[af(0x14b)] = af(0x164), p[af(0x19d)] = function (J, K) {
            return J !== K;
        }, p[ae(0x16e)] = af(0x191), p[af(0x15b)] = ae(0x193) + ae(0x18e);
        const q = p, r = Yup[af(0x190)]()[ae(0x174)]({
                'name': Yup[ae(0x161)]()[ae(0x189)](-0x1 * 0x202e + -0x2517 + 0xddb * 0x5),
                'isDefault': Yup[ae(0x187)]()
            }), {
                name: s,
                status: t,
                isDefault: u,
                session: v,
                tokenTelegram: w,
                instagramUser: x,
                instagramKey: y,
                isActive: z,
                type: A,
                wabaBSP: B,
                tokenAPI: C,
                fbPageId: D,
                farewellMessage: E,
                chatFlowId: F,
                is_open_ia: H,
                queue_transf: I
            } = m;
        try {
            const J = {};
            J[ae(0x162)] = s, J[af(0x160)] = t, J[ae(0x143)] = u, await r[ae(0x144)](J);
            let K = null;
            if (u) {
                if (q[af(0x141)](q[ae(0x158)], q[ae(0x17f)])) {
                    const R = { [sequelize_1['Op'][af(0x16b)]]: n }, S = {};
                    S[af(0x143)] = !![], S[ae(0x165)] = o, S['id'] = R;
                    const T = {};
                    T[af(0x18c)] = S, K = await Whatsapp_1[af(0x15d)][ae(0x14c)](T);
                    if (K) {
                        if (q[af(0x150)](q[af(0x14b)], q[ae(0x14b)])) {
                            const U = {};
                            U[ae(0x143)] = ![], await K[ae(0x172)](U);
                        } else
                            R[af(0x18d) + 'ey'] = S;
                    }
                } else {
                    if (q[af(0x197)](O, Q))
                        m = n;
                    o[p] = q[r];
                }
            }
            const L = {};
            L['id'] = n, L[af(0x165)] = o;
            const M = {};
            M[ae(0x18c)] = L;
            const N = await Whatsapp_1[ae(0x15d)][ae(0x14c)](M);
            if (!N) {
                if (q[ae(0x19d)](q[af(0x16e)], q[af(0x16e)])) {
                    const Y = {};
                    Y[ae(0x146)] = !![], Y[ae(0x196)] = h, f[ae(0x19f) + ae(0x149)](g, q[af(0x142)], Y);
                } else
                    throw new AppError_1[(af(0x15d))](q[af(0x15b)], 0x4 * 0x1de + -0x767 + -0x81 * -0x3);
            }
            const O = {};
            O[af(0x162)] = s, O[af(0x160)] = t, O[ae(0x168)] = v, O[af(0x143)] = u, O[ae(0x176) + af(0x157)] = w, O[af(0x199) + af(0x14d)] = x, O[af(0x159)] = z, O[ae(0x167)] = A, O[ae(0x15a)] = B, O[af(0x179)] = C, O[ae(0x154)] = D, O[ae(0x17d) + ae(0x175)] = E, O[ae(0x185)] = F, O[af(0x15c)] = H, O[af(0x15f) + 'sf'] = I;
            const P = O;
            y && (P[af(0x18d) + 'ey'] = y);
            await N[af(0x172)](P);
            const Q = {};
            return Q[ae(0x184)] = N, Q[ae(0x151) + af(0x145)] = K, Q;
        } catch (Y) {
            throw new AppError_1[(ae(0x15d))](Y[af(0x19a)]);
        }
    };
exports[a2(0x15d)] = UpdateWhatsAppService;
function a() {
    const ag = [
        'session',
        '1836282vLbGYR',
        'cdSfw',
        'not',
        'fault',
        '../../mode',
        'KFOUP',
        '1493100YNjJAK',
        'FTdwK',
        '__createBi',
        'update',
        'writable',
        'shape',
        'ssage',
        'tokenTeleg',
        '14265704SFlJmP',
        'SJatv',
        'tokenAPI',
        'LkQMJ',
        '12JzbBYi',
        '../../erro',
        'farewellMe',
        'KDror',
        'mPtIs',
        'getOwnProp',
        'call',
        'GwPZT',
        '__importSt',
        'whatsapp',
        'chatFlowId',
        'CBUYJ',
        'boolean',
        'create',
        'min',
        'ls/Whatsap',
        'nding',
        'where',
        'instagramK',
        'P_FOUND',
        'tPrnY',
        'object',
        'JaVRJ',
        '52212faIkNn',
        'ERR_NO_WAP',
        'split',
        'get',
        'value',
        'WRsRh',
        '401638wyDMeR',
        'instagramU',
        'message',
        '1523315RbsKts',
        '__setModul',
        'SAaow',
        '__esModule',
        'defineProp',
        '4|0|1|3|2',
        'ertyDescri',
        'JTqiv',
        '3205545SorTSM',
        'yup',
        'prototype',
        'uttum',
        'GEIpF',
        'isDefault',
        'validate',
        'Whatsapp',
        'enumerable',
        'ptor',
        'BHAPb',
        'erty',
        '__importDe',
        'VrngU',
        'findOne',
        'ser',
        'XFHYk',
        'configurab',
        'bMxwT',
        'oldDefault',
        'nyhPc',
        'kAOvw',
        'fbPageId',
        'wIPxQ',
        'eDefault',
        'ram',
        'OJIci',
        'isActive',
        'wabaBSP',
        'svcKO',
        'is_open_ia',
        'default',
        'hasOwnProp',
        'queue_tran',
        'status',
        'string',
        'name',
        'rs/AppErro',
        'BAONM',
        'tenantId',
        'sequelize',
        'type'
    ];
    a = function () {
        return ag;
    };
    return a();
}