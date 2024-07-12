'use strict';
const I = b, J = b;
(function (c, d) {
    const G = b, H = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(G(0x141)) / (-0x65 * -0x5 + -0x2 * 0x1028 + 0x1e58) + parseInt(G(0x144)) / (0x30b * 0x1 + 0x1 * 0x254e + 0x1 * -0x2857) + parseInt(H(0x138)) / (-0x15e3 + -0x17d * 0x6 + -0x2 * -0xf6a) + parseInt(H(0x13b)) / (-0x107 * 0x11 + 0x19c9 * -0x1 + 0x2b44) + -parseInt(H(0x148)) / (0x1093 * 0x2 + -0xbae + -0x1573) + -parseInt(H(0x16d)) / (-0x25f6 + 0x2292 + 0x36a) * (-parseInt(H(0x151)) / (0x1423 + 0x225f + -0x3 * 0x1229)) + -parseInt(H(0x161)) / (0x1c * -0x71 + 0x3de + 0x443 * 0x2);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x103e3b * -0x1 + -0xded69 * -0x1 + 0x1 * -0xfb79f));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * -0x7ff + -0x1739 + 0x106e);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[I(0x152) + I(0x172)] || function (c) {
    const K = J;
    return c && c[K(0x150)] ? c : { 'default': c };
};
function a() {
    const T = [
        'contact:up',
        'forEach',
        'lLaJP',
        'erty',
        'oZqpc',
        'ThrXG',
        'iShkU',
        'include',
        'number',
        'where',
        'attributes',
        'ERR_NO_CON',
        'payload',
        'ivlpL',
        '9127152EGhezg',
        'date',
        'tUrPe',
        'bulkCreate',
        'rs/AppErro',
        '../../help',
        'reload',
        'TACT_FOUND',
        'defineProp',
        'update',
        'type',
        'cEgdx',
        '13086GPeHFa',
        'all',
        'default',
        'DZUhm',
        'profilePic',
        'fault',
        '../../erro',
        'name',
        'ers/socket',
        'wallets',
        'xYyMT',
        'Url',
        '5126925VZEUjt',
        '../../mode',
        'findIndex',
        '2714816nQEmTz',
        'findOne',
        'tenantId',
        'push',
        'value',
        'extraInfo',
        '1278561VrPWvH',
        'map',
        'ls/Contact',
        '12228iogrDb',
        'email',
        'walletId',
        'Emit',
        '4001430caewgq',
        'VWpUi',
        'upsert',
        'tags',
        'Wallet',
        'CustomFiel',
        'destroy',
        'contactId',
        '__esModule',
        '5691heAoig',
        '__importDe'
    ];
    a = function () {
        return T;
    };
    return a();
}
const o = {};
o[J(0x13f)] = !![], Object[I(0x169) + J(0x156)](exports, J(0x150), o);
const AppError_1 = __importDefault(require(I(0x173) + I(0x165) + 'r')), socketEmit_1 = __importDefault(require(J(0x166) + J(0x134) + J(0x147))), Contact_1 = __importDefault(require(J(0x139) + J(0x143))), ContactCustomField_1 = __importDefault(require(J(0x139) + J(0x143) + J(0x14d) + 'd')), ContactWallet_1 = __importDefault(require(I(0x139) + I(0x143) + J(0x14c))), UpdateContactService = async ({
        contactData: k,
        contactId: l,
        tenantId: m
    }) => {
        const L = I, M = J, n = {};
        n[L(0x16c)] = function (B, C) {
            return B === C;
        }, n[M(0x160)] = L(0x174), n[L(0x136)] = L(0x15b), n[L(0x159)] = L(0x145), n[M(0x157)] = M(0x171) + L(0x137), n[M(0x155)] = M(0x140), n[M(0x158)] = L(0x14b), n[L(0x170)] = M(0x135), n[L(0x149)] = M(0x15e) + M(0x168), n[M(0x163)] = M(0x153) + M(0x162);
        const p = n, {
                email: q,
                name: r,
                number: s,
                extraInfo: t,
                wallets: u
            } = k, v = {};
        v['id'] = l, v[M(0x13d)] = m;
        const w = {};
        w[L(0x15c)] = v, w[M(0x15d)] = [
            'id',
            p[M(0x160)],
            p[L(0x136)],
            p[L(0x159)],
            p[M(0x157)]
        ], w[L(0x15a)] = [
            p[M(0x155)],
            p[L(0x158)],
            {
                'association': p[M(0x170)],
                'attributes': [
                    'id',
                    p[M(0x160)]
                ]
            }
        ];
        const x = await Contact_1[L(0x16f)][M(0x13c)](w);
        if (!x)
            throw new AppError_1[(M(0x16f))](p[L(0x149)], -0x10bb * -0x1 + 0x145 + 0x41b * -0x4);
        t && (await Promise[L(0x16e)](t[M(0x142)](async B => {
            const N = M, O = L, C = { ...B };
            C[N(0x14f)] = x['id'], await ContactCustomField_1[O(0x16f)][O(0x14a)](C);
        })), await Promise[M(0x16e)](x[L(0x140)][M(0x142)](async B => {
            const P = L, Q = L, C = t[P(0x13a)](D => D['id'] === B['id']);
            if (p[Q(0x16c)](C, -(0x224f * 0x1 + -0x251c + -0x2 * -0x167))) {
                const D = {};
                D['id'] = B['id'];
                const E = {};
                E[Q(0x15c)] = D, await ContactCustomField_1[Q(0x16f)][Q(0x14e)](E);
            }
        })));
        if (u) {
            const B = {};
            B[M(0x13d)] = m, B[L(0x14f)] = l;
            const C = {};
            C[M(0x15c)] = B, await ContactWallet_1[L(0x16f)][M(0x14e)](C);
            const D = [];
            u[L(0x154)](E => {
                const R = L, S = L, F = {};
                F[R(0x146)] = !E['id'] ? E : E['id'], F[S(0x14f)] = l, F[S(0x13d)] = m, D[S(0x13e)](F);
            }), await ContactWallet_1[L(0x16f)][M(0x164)](D);
        }
        const y = {};
        y[L(0x174)] = r, y[M(0x15b)] = s, y[M(0x145)] = q, await x[L(0x16a)](y);
        const z = {};
        z[M(0x15d)] = [
            'id',
            p[M(0x160)],
            p[M(0x136)],
            p[L(0x159)],
            p[M(0x157)]
        ], z[M(0x15a)] = [
            p[L(0x155)],
            p[M(0x158)],
            {
                'association': p[L(0x170)],
                'attributes': [
                    'id',
                    p[L(0x160)]
                ]
            }
        ], await x[M(0x167)](z);
        const A = {};
        return A[M(0x13d)] = m, A[M(0x16b)] = p[L(0x163)], A[L(0x15f)] = x, (0x4ed * 0x7 + -0x3b2 * 0x6 + 0x17 * -0x89, socketEmit_1[L(0x16f)])(A), x;
    };
exports[J(0x16f)] = UpdateContactService;