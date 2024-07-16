'use strict';
const S = b, T = b;
(function (c, d) {
    const Q = b, R = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(Q(0x1d0)) / (0x113b + -0x145a + 0x320) + -parseInt(R(0x1ca)) / (0x18a * -0xf + -0x3a4 * 0x4 + 0x96a * 0x4) * (parseInt(Q(0x1f3)) / (-0xc21 + -0x21f7 + 0x2e1b * 0x1)) + -parseInt(R(0x1d3)) / (-0x1 * -0x2605 + 0x629 + 0x1615 * -0x2) + -parseInt(Q(0x1ce)) / (-0x7d2 + 0x15a9 + -0xdd2) + parseInt(Q(0x1d5)) / (-0x1fd2 + 0x3 * -0xabd + -0x400f * -0x1) * (parseInt(R(0x1c2)) / (-0x2 * 0x97d + -0x198e + 0x2c8f)) + parseInt(Q(0x1eb)) / (0x67 * -0x50 + 0x1 * -0x1d71 + 0x3da9) + parseInt(Q(0x1f6)) / (0x217 * -0x6 + -0x4 * -0x506 + 0x181 * -0x5) * (parseInt(Q(0x1bd)) / (0x4 * -0xb + 0x2340 + 0x73 * -0x4e));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1fd * 0x1af + -0x3767 + 0x2 * -0x16a2));
function a() {
    const X = [
        'email',
        '58272hkxynH',
        '__importDe',
        '__esModule',
        '153PQAAkt',
        '267930tMAcPx',
        'instagram',
        'Emit',
        'type',
        'ScMHX',
        '103313NxSVMk',
        'pushname',
        'where',
        'isWAContac',
        'contact:up',
        'OfaBk',
        'tUUGT',
        'WPygS',
        '14PhlUoF',
        'date',
        'payload',
        'instagramP',
        '1705540mYZSKX',
        'Url',
        '130930MGUdMi',
        'defineProp',
        'ZyGrj',
        '757976soAuNT',
        'name',
        '108vnVNPl',
        'whatsapp',
        'findOne',
        'messenger',
        'number',
        'telegramId',
        'profilePic',
        'create',
        'default',
        'extraInfo',
        'erty',
        'ls/Contact',
        'fault',
        'ers/socket',
        'BPFPc',
        '../../mode',
        'fqtAc',
        'lRbfb',
        'update',
        'MfxFK',
        'replace',
        'isGroup',
        '2159720GewJAR',
        'tenantId',
        '../../help',
        'value',
        'messengerI',
        'telegram',
        'isUser'
    ];
    a = function () {
        return X;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x325 * -0x1 + 0x5 * -0x767 + 0x5 * 0x71f);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[S(0x1f4) + T(0x1e1)] || function (c) {
    const U = S;
    return c && c[U(0x1f5)] ? c : { 'default': c };
};
const D = {};
D[T(0x1ee)] = !![], Object[S(0x1d1) + S(0x1df)](exports, T(0x1f5), D);
const socketEmit_1 = __importDefault(require(T(0x1ed) + T(0x1e2) + S(0x1bf))), Contact_1 = __importDefault(require(S(0x1e4) + T(0x1e0))), CreateOrUpdateContactService = async ({
        name: o,
        number: p,
        profilePicUrl: q,
        isGroup: r,
        tenantId: s,
        pushname: t,
        isUser: u,
        isWAContact: v,
        email: email = '',
        telegramId: w,
        instagramPK: x,
        messengerId: y,
        extraInfo: extraInfo = [],
        origem: origem = S(0x1d6)
    }) => {
        const V = T, W = T, z = {};
        z[V(0x1e5)] = function (F, G) {
            return F === G;
        }, z[W(0x1e8)] = W(0x1d6), z[V(0x1c8)] = function (F, G) {
            return F === G;
        }, z[V(0x1e6)] = V(0x1f0), z[V(0x1d2)] = V(0x1be), z[V(0x1c7)] = function (F, G) {
            return F === G;
        }, z[V(0x1c1)] = W(0x1d8), z[W(0x1e3)] = function (F, G) {
            return F == G;
        }, z[V(0x1c9)] = V(0x1c6) + W(0x1cb);
        const A = z, B = r ? p : p[W(0x1e9)](/[^0-9]/g, '');
        let C = null;
        if (A[W(0x1e5)](origem, A[W(0x1e8)])) {
            const F = {};
            F[W(0x1d9)] = B, F[W(0x1ec)] = s;
            const G = {};
            G[W(0x1c4)] = F, C = await Contact_1[W(0x1dd)][W(0x1d7)](G);
        }
        if (A[W(0x1c8)](origem, A[V(0x1e6)]) && w) {
            const H = {};
            H[V(0x1da)] = w, H[V(0x1ec)] = s;
            const I = {};
            I[W(0x1c4)] = H, C = await Contact_1[V(0x1dd)][W(0x1d7)](I);
        }
        if (A[W(0x1c8)](origem, A[V(0x1d2)]) && x) {
            const J = {};
            J[V(0x1cd) + 'K'] = x, J[V(0x1ec)] = s;
            const K = {};
            K[V(0x1c4)] = J, C = await Contact_1[V(0x1dd)][V(0x1d7)](K);
        }
        if (A[W(0x1c7)](origem, A[V(0x1c1)]) && y) {
            const L = {};
            L[V(0x1ef) + 'd'] = y, L[W(0x1ec)] = s;
            const M = {};
            M[W(0x1c4)] = L, C = await Contact_1[V(0x1dd)][V(0x1d7)](M);
        }
        if (C) {
            let N;
            A[W(0x1e3)](C[W(0x1d4)], C[V(0x1d9)]) ? N = o : N = C[W(0x1d4)];
            const O = {};
            O[W(0x1d4)] = N, O[W(0x1db) + W(0x1cf)] = q, O[V(0x1c3)] = t, O[W(0x1f1)] = u, O[V(0x1c5) + 't'] = v, O[W(0x1da)] = w, O[V(0x1cd) + 'K'] = x, O[W(0x1ef) + 'd'] = y, C[W(0x1e7)](O);
        } else {
            const P = {};
            P[W(0x1d4)] = o, P[W(0x1d9)] = B, P[W(0x1db) + V(0x1cf)] = q, P[W(0x1f2)] = email, P[V(0x1ea)] = r, P[W(0x1c3)] = t, P[W(0x1f1)] = u, P[V(0x1c5) + 't'] = v, P[W(0x1ec)] = s, P[W(0x1de)] = extraInfo, P[W(0x1da)] = w, P[V(0x1cd) + 'K'] = x, P[V(0x1ef) + 'd'] = y, C = await Contact_1[W(0x1dd)][V(0x1dc)](P);
        }
        const E = {};
        return E[W(0x1ec)] = s, E[W(0x1c0)] = A[W(0x1c9)], E[W(0x1cc)] = C, (-0x1f1f * 0x1 + 0x1801 + 0x1 * 0x71e, socketEmit_1[W(0x1dd)])(E), C;
    };
exports[S(0x1dd)] = CreateOrUpdateContactService;