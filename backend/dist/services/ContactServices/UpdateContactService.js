'use strict';
const I = b, J = b;
(function (c, d) {
    const G = b, H = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(G(0x120)) / (0x14a0 + 0x1 * -0x533 + -0xf6c) * (parseInt(H(0x121)) / (0x1 * 0x1a15 + -0x4 * -0x115 + 0x1e67 * -0x1)) + -parseInt(G(0x14e)) / (0x1 * 0x20fb + 0x200f + -0x4107) * (-parseInt(G(0x123)) / (-0xa40 + -0x2 * -0xffb + -0x15b2)) + parseInt(H(0x139)) / (-0x1 * 0xbaa + 0xd0c + -0x15d) + parseInt(G(0x12c)) / (0x1501 + -0x357 * -0x1 + -0x1852 * 0x1) * (-parseInt(H(0x135)) / (-0x7 * 0x202 + -0x1 * 0x3c1 + -0x5f2 * -0x3)) + -parseInt(G(0x15b)) / (-0xf * 0x208 + -0x161c + 0x349c) * (-parseInt(G(0x13b)) / (-0x1 * -0xb83 + 0x3b * 0x35 + -0x5 * 0x4bd)) + parseInt(H(0x12e)) / (-0x9d8 + -0x1654 + 0x2036) * (-parseInt(H(0x15e)) / (-0x3 * 0x67 + 0x464 + -0x324)) + -parseInt(G(0x13a)) / (-0x1e06 + -0x1507 + 0x3319) * (parseInt(G(0x157)) / (-0x1581 + 0x1fb9 + -0xa2b * 0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x50b7d + -0x2 * 0x204d9 + 0x26973));
var __importDefault = this && this[I(0x13e) + J(0x15a)] || function (c) {
    const K = J;
    return c && c[K(0x137)] ? c : { 'default': c };
};
const o = {};
o[J(0x147)] = !![], Object[J(0x11f) + J(0x133)](exports, I(0x137), o);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x191a + -0x1205 * 0x1 + 0x2c3b);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const T = [
        '12dSLnMn',
        'push',
        'findOne',
        'extraInfo',
        'forEach',
        'ers/socket',
        'date',
        'CustomFiel',
        'Lsxcf',
        '13tEYBDJ',
        'Emit',
        'ls/Contact',
        'fault',
        '56kEsXxA',
        '../../help',
        'number',
        '93313gzcwof',
        'tags',
        'Url',
        'type',
        'Hahft',
        'ERR_NO_CON',
        'ZwgHx',
        'defineProp',
        '19kKtoVZ',
        '12086UQfHZZ',
        'destroy',
        '352220uMDhFn',
        'walletId',
        'default',
        'contactId',
        'name',
        'contact:up',
        'ZRWej',
        'EQePQ',
        'rs/AppErro',
        '876skFYZc',
        'JzeJv',
        '120aIkxdI',
        'findIndex',
        'email',
        '../../mode',
        'tenantId',
        'erty',
        'wallets',
        '13566hEMSTz',
        'xHxRT',
        '__esModule',
        'update',
        '1497980EToOYz',
        '2271012vDUmPs',
        '335646tLBmuP',
        'NSPJa',
        'reload',
        '__importDe',
        'all',
        'YnKOi',
        'map',
        'profilePic',
        'Wallet',
        'payload',
        'TACT_FOUND',
        'LMwiW',
        'value',
        'include',
        'attributes',
        '../../erro',
        'upsert',
        'where',
        'bulkCreate'
    ];
    a = function () {
        return T;
    };
    return a();
}
const AppError_1 = __importDefault(require(I(0x14a) + J(0x12b) + 'r')), socketEmit_1 = __importDefault(require(J(0x15c) + I(0x153) + I(0x158))), Contact_1 = __importDefault(require(I(0x131) + I(0x159))), ContactCustomField_1 = __importDefault(require(I(0x131) + I(0x159) + I(0x155) + 'd')), ContactWallet_1 = __importDefault(require(I(0x131) + J(0x159) + I(0x143))), UpdateContactService = async ({
        contactData: k,
        contactId: l,
        tenantId: m
    }) => {
        const L = I, M = J, n = {};
        n[L(0x12a)] = function (B, C) {
            return B === C;
        }, n[L(0x129)] = M(0x127), n[L(0x12d)] = L(0x15d), n[M(0x146)] = M(0x130), n[M(0x13c)] = L(0x142) + M(0x160), n[L(0x11c)] = M(0x151), n[L(0x156)] = M(0x15f), n[L(0x11e)] = M(0x134), n[L(0x140)] = L(0x11d) + L(0x145), n[M(0x136)] = L(0x128) + M(0x154);
        const p = n, {
                email: q,
                name: r,
                number: s,
                extraInfo: t,
                wallets: u
            } = k, v = {};
        v['id'] = l, v[L(0x132)] = m;
        const w = {};
        w[M(0x14c)] = v, w[L(0x149)] = [
            'id',
            p[M(0x129)],
            p[M(0x12d)],
            p[L(0x146)],
            p[L(0x13c)]
        ], w[L(0x148)] = [
            p[L(0x11c)],
            p[M(0x156)],
            {
                'association': p[M(0x11e)],
                'attributes': [
                    'id',
                    p[M(0x129)]
                ]
            }
        ];
        const x = await Contact_1[L(0x125)][M(0x150)](w);
        if (!x)
            throw new AppError_1[(L(0x125))](p[L(0x140)], 0x5 * -0x128 + 0x17d9 + 0x107d * -0x1);
        t && (await Promise[L(0x13f)](t[L(0x141)](async B => {
            const N = L, O = L, C = { ...B };
            C[N(0x126)] = x['id'], await ContactCustomField_1[O(0x125)][N(0x14b)](C);
        })), await Promise[M(0x13f)](x[M(0x151)][L(0x141)](async B => {
            const P = L, Q = M, C = t[P(0x12f)](D => D['id'] === B['id']);
            if (p[P(0x12a)](C, -(-0x3f * -0x5d + -0x1f3 * 0xc + 0x41 * 0x2))) {
                const D = {};
                D['id'] = B['id'];
                const E = {};
                E[P(0x14c)] = D, await ContactCustomField_1[Q(0x125)][P(0x122)](E);
            }
        })));
        if (u) {
            const B = {};
            B[M(0x132)] = m, B[M(0x126)] = l;
            const C = {};
            C[M(0x14c)] = B, await ContactWallet_1[L(0x125)][M(0x122)](C);
            const D = [];
            u[M(0x152)](E => {
                const R = L, S = M, F = {};
                F[R(0x124)] = !E['id'] ? E : E['id'], F[R(0x126)] = l, F[R(0x132)] = m, D[R(0x14f)](F);
            }), await ContactWallet_1[M(0x125)][L(0x14d)](D);
        }
        const y = {};
        y[L(0x127)] = r, y[L(0x15d)] = s, y[L(0x130)] = q, await x[L(0x138)](y);
        const z = {};
        z[L(0x149)] = [
            'id',
            p[M(0x129)],
            p[M(0x12d)],
            p[L(0x146)],
            p[L(0x13c)]
        ], z[M(0x148)] = [
            p[M(0x11c)],
            p[M(0x156)],
            {
                'association': p[L(0x11e)],
                'attributes': [
                    'id',
                    p[M(0x129)]
                ]
            }
        ], await x[M(0x13d)](z);
        const A = {};
        return A[M(0x132)] = m, A[L(0x161)] = p[L(0x136)], A[L(0x144)] = x, (-0x15 * 0x1bf + -0x73c * -0x2 + 0x1633, socketEmit_1[M(0x125)])(A), x;
    };
exports[I(0x125)] = UpdateContactService;