'use strict';
const E = b, F = b;
(function (c, d) {
    const C = b, D = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(C(0x1d5)) / (0x1 * 0xe5a + 0x1b3e + -0x2997) + -parseInt(D(0x1ca)) / (-0x3 * -0x979 + 0x1066 + -0x2ccf) * (parseInt(D(0x1c9)) / (-0x1363 + 0x46c * -0x4 + -0x2f * -0xca)) + parseInt(C(0x1d3)) / (0x2064 + -0xa5 * 0x9 + -0x1a93) + -parseInt(D(0x1d9)) / (-0xbdb + 0x1 * -0x2187 + 0x3b * 0xc5) * (-parseInt(C(0x1d6)) / (0x1 * -0x1ba6 + -0x2 * -0x7f7 + 0xbbe)) + parseInt(C(0x1df)) / (0xba + -0x1c9c + -0x5 * -0x595) + -parseInt(C(0x1d7)) / (-0x1 * 0x1909 + 0xa5 + 0x186c) * (-parseInt(D(0x1c5)) / (-0x355 * 0x3 + 0x3 * 0x94d + -0x5f5 * 0x3)) + -parseInt(D(0x1d2)) / (0x1 * 0x129f + 0x941 + -0x1bd6) * (-parseInt(D(0x1e8)) / (-0x5db + 0x1a26 * 0x1 + -0x1440));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * 0x69381 + -0x18 * -0xc688 + 0x5 * 0x3d1));
var __importDefault = this && this[E(0x1dd) + E(0x1c7)] || function (c) {
    const G = E;
    return c && c[G(0x1eb)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1869 + 0x8f * 0x2b + 0x228);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const J = [
        '3029499ZYeQJt',
        'messageId',
        'fault',
        'where',
        '7137YrvVSm',
        '834aRDMYa',
        'defineProp',
        'mediaUrl',
        'default',
        'messageWA',
        'tenantId',
        'update',
        'body',
        '949710ooTsFM',
        '425684NXnjRw',
        'age',
        '203695KIDMUq',
        '1081560TqOIyW',
        '8wMPNOn',
        'NG_MESSAGE',
        '10iJmBaJ',
        'externalKe',
        'create',
        'value',
        '__importDe',
        'sessionId',
        '3647511mRVTKw',
        'ls/ApiMess',
        'reload',
        '../../mode',
        'ERR_CREATI',
        'apiConfig',
        'findOne',
        'mediaName',
        'timestamp',
        '77AYfmGV',
        'EMmoR',
        'number',
        '__esModule',
        'erty',
        'ack'
    ];
    a = function () {
        return J;
    };
    return a();
}
k[E(0x1dc)] = !![], Object[E(0x1cb) + F(0x1ec)](exports, E(0x1eb), k);
const ApiMessage_1 = __importDefault(require(F(0x1e2) + E(0x1e0) + E(0x1d4))), UpsertMessageAPIService = async ({
        sessionId: h,
        messageId: i,
        body: j,
        ack: l,
        number: m,
        mediaName: n,
        mediaUrl: o,
        timestamp: p,
        externalKey: q,
        messageWA: r,
        apiConfig: s,
        tenantId: t
    }) => {
        const H = F, I = E, u = {};
        u[H(0x1e9)] = I(0x1e3) + H(0x1d8);
        const v = u;
        let w;
        const x = {};
        x[H(0x1c6)] = i, x[I(0x1cf)] = t;
        const y = {};
        y[H(0x1c8)] = x;
        const z = await ApiMessage_1[H(0x1cd)][I(0x1e5)](y);
        if (z) {
            const A = {};
            A[H(0x1de)] = h, A[H(0x1c6)] = i, A[I(0x1d1)] = j, A[H(0x1c4)] = l, A[H(0x1ea)] = m, A[H(0x1e6)] = n, A[I(0x1cc)] = o, A[H(0x1e7)] = p, A[I(0x1da) + 'y'] = q, A[H(0x1ce)] = r, A[I(0x1e4)] = s, A[H(0x1cf)] = t, await z[I(0x1d0)](A), w = await z[I(0x1e1)]();
        } else {
            const B = {};
            B[I(0x1de)] = h, B[H(0x1c6)] = i, B[H(0x1d1)] = j, B[H(0x1c4)] = l, B[I(0x1ea)] = m, B[I(0x1e6)] = n, B[H(0x1cc)] = o, B[H(0x1e7)] = p, B[I(0x1da) + 'y'] = q, B[I(0x1ce)] = r, B[H(0x1e4)] = s, B[I(0x1cf)] = t, w = await ApiMessage_1[I(0x1cd)][I(0x1db)](B);
        }
        if (!w)
            throw new Error(v[I(0x1e9)]);
        return w;
    };
exports[F(0x1cd)] = UpsertMessageAPIService;