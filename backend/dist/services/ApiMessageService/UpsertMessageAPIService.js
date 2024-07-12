'use strict';
const E = b, F = b;
(function (c, d) {
    const C = b, D = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(C(0x1ea)) / (0x1eef + 0x1 * -0x1e63 + -0x8b) + -parseInt(D(0x1df)) / (-0x7e0 + -0x1fa7 + 0x2789) * (-parseInt(D(0x1ef)) / (-0x1edd + -0x14ef + 0x33cf)) + -parseInt(D(0x207)) / (0xd5 * -0xd + -0xcc1 + 0x1796) * (parseInt(C(0x203)) / (-0x25fa * -0x1 + 0x1 * 0x22ba + -0x17 * 0x329)) + -parseInt(D(0x1fc)) / (-0x1c4 * -0x5 + 0x1033 + 0x1 * -0x1901) + parseInt(D(0x201)) / (-0x2358 + -0x5 * -0x62e + 0x5 * 0xe5) * (-parseInt(D(0x1f9)) / (-0x13ee + -0x5c1 * -0x5 + -0x8cf)) + parseInt(C(0x1e1)) / (-0xf11 + -0x1 * 0x146b + -0x15 * -0x1b1) * (-parseInt(D(0x205)) / (-0x3 * -0x153 + -0x1203 * 0x1 + 0x6a * 0x22)) + parseInt(D(0x1fd)) / (0x1 * 0x1fa7 + 0x9b3 * -0x4 + 0x730) * (parseInt(D(0x1ff)) / (-0xd * 0x2a8 + 0xf02 + 0x1392));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x95179 + 0xd3f1d + 0x3 * 0x23967));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2f5 * 0x8 + -0x2062 + -0x153 * -0x8);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[E(0x1e5) + E(0x206)] || function (c) {
    const G = F;
    return c && c[G(0x1f4)] ? c : { 'default': c };
};
const k = {};
k[E(0x1f6)] = !![], Object[E(0x1e4) + E(0x1e9)](exports, F(0x1f4), k);
const ApiMessage_1 = __importDefault(require(F(0x1e8) + E(0x1fb) + F(0x202))), UpsertMessageAPIService = async ({
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
        const H = E, I = E, u = {};
        u[H(0x1f7)] = I(0x1f2) + H(0x1ec);
        const v = u;
        let w;
        const x = {};
        x[H(0x1f5)] = i, x[H(0x1e3)] = t;
        const y = {};
        y[I(0x1eb)] = x;
        const z = await ApiMessage_1[H(0x1f1)][H(0x1f3)](y);
        if (z) {
            const A = {};
            A[H(0x1fa)] = h, A[H(0x1f5)] = i, A[I(0x1f0)] = j, A[H(0x1e0)] = l, A[H(0x1fe)] = m, A[I(0x1de)] = n, A[H(0x204)] = o, A[H(0x1e6)] = p, A[H(0x1ed) + 'y'] = q, A[H(0x1e2)] = r, A[I(0x1ee)] = s, A[I(0x1e3)] = t, await z[H(0x200)](A), w = await z[I(0x1e7)]();
        } else {
            const B = {};
            B[H(0x1fa)] = h, B[H(0x1f5)] = i, B[I(0x1f0)] = j, B[H(0x1e0)] = l, B[I(0x1fe)] = m, B[H(0x1de)] = n, B[H(0x204)] = o, B[H(0x1e6)] = p, B[H(0x1ed) + 'y'] = q, B[H(0x1e2)] = r, B[H(0x1ee)] = s, B[H(0x1e3)] = t, w = await ApiMessage_1[H(0x1f1)][H(0x1f8)](B);
        }
        if (!w)
            throw new Error(v[I(0x1f7)]);
        return w;
    };
function a() {
    const J = [
        'body',
        'default',
        'ERR_CREATI',
        'findOne',
        '__esModule',
        'messageId',
        'value',
        'DbOBZ',
        'create',
        '456GLpNqW',
        'sessionId',
        'ls/ApiMess',
        '4973574TkuJCN',
        '319VBHnjG',
        'number',
        '1192068RUoVKg',
        'update',
        '105483galpGX',
        'age',
        '5PPhxsM',
        'mediaUrl',
        '630EIPkCC',
        'fault',
        '5000284OOGbSO',
        'mediaName',
        '16pgHtUO',
        'ack',
        '81099GKkOpE',
        'messageWA',
        'tenantId',
        'defineProp',
        '__importDe',
        'timestamp',
        'reload',
        '../../mode',
        'erty',
        '854748xyqcOm',
        'where',
        'NG_MESSAGE',
        'externalKe',
        'apiConfig',
        '174297wUdlit'
    ];
    a = function () {
        return J;
    };
    return a();
}
exports[F(0x1f1)] = UpsertMessageAPIService;