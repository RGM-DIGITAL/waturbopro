'use strict';
function a() {
    const O = [
        'ls/Interna',
        '16FwZSnw',
        '__importDe',
        '6374vLFQYA',
        'rs/AppErro',
        'sageGroups',
        'senderId',
        'create',
        '30MtAOUK',
        'LEPGR',
        'lMessage',
        '_NOT_FOUND',
        'userGroupI',
        'groupId',
        'defineProp',
        'fault',
        '2494562YDLvyO',
        '1261032zqaVZY',
        'ucjPX',
        './../../mo',
        'Groups',
        '5lvVFAP',
        'ksoRl',
        'length',
        '../../erro',
        'where',
        'USER_GROUP',
        '78hlmlnj',
        'default',
        'read',
        'ssageId',
        '__esModule',
        '../../mode',
        '3861693ovGcuN',
        'receiverId',
        'findAll',
        '5008128AheEwg',
        'userId',
        'erty',
        '3208732KnndKs',
        '32655117luJfhH',
        'ls/ReadMes',
        'dels/Users',
        'forEach',
        'findOne',
        'update',
        'value',
        'internalMe'
    ];
    a = function () {
        return O;
    };
    return a();
}
const H = b, I = b;
(function (c, d) {
    const F = b, G = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(F(0xd6)) / (0xf2b + -0x1083 * 0x1 + 0x159 * 0x1) * (-parseInt(F(0xbe)) / (-0x114 * 0xc + 0x2010 + -0x131e)) + -parseInt(G(0xb4)) / (-0x3 * 0x64d + 0x1ad1 * 0x1 + 0x121 * -0x7) + parseInt(G(0xca)) / (0x9fa + -0x1e7 + 0x80f * -0x1) * (-parseInt(G(0xb8)) / (-0x1904 + 0x1a75 * 0x1 + -0xd * 0x1c)) + parseInt(G(0xc7)) / (-0x19ef + 0x1826 + -0x1cf * -0x1) + parseInt(F(0xb3)) / (0x2 * 0x12 + -0x10ae * -0x1 + 0x599 * -0x3) * (-parseInt(G(0xd4)) / (0x1 * 0x1565 + -0x4 * -0x8ba + -0xd7 * 0x43)) + parseInt(G(0xc4)) / (-0x82b + 0xa53 + -0x21f) * (-parseInt(G(0xdb)) / (0x1b3d + -0x1f5a + -0x1 * -0x427)) + parseInt(F(0xcb)) / (0x1 * -0xd8d + 0x1079 * 0x2 + -0x135a);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x15af48 + -0x3d288 + -0x1 * -0x2629c7));
var __importDefault = this && this[H(0xd5) + H(0xb2)] || function (c) {
    const J = H;
    return c && c[J(0xc2)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x838 + 0x1bb * 0x3 + 0x1 * 0x3b3);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[H(0xd1)] = !![], Object[H(0xb1) + I(0xc9)](exports, H(0xc2), k);
const AppError_1 = __importDefault(require(I(0xbb) + H(0xd7) + 'r')), InternalMessage_1 = __importDefault(require(I(0xc3) + I(0xd3) + H(0xad))), ReadMessageGroups_1 = __importDefault(require(H(0xc3) + H(0xcc) + I(0xd8))), UsersGroups_1 = __importDefault(require(I(0xb6) + I(0xcd) + H(0xb7))), ReadMessageService = async ({
        senderId: l,
        userId: m,
        isGroup: n
    }) => {
        const K = I, L = I, o = {};
        o[K(0xb5)] = function (q, r) {
            return q <= r;
        }, o[L(0xac)] = function (q, r) {
            return q === r;
        }, o[K(0xb9)] = L(0xbd) + K(0xae);
        const p = o;
        if (p[L(0xac)](n, ![])) {
            const q = {};
            q[L(0xc0)] = !![];
            const r = {};
            r[K(0xd9)] = l, r[K(0xc5)] = m;
            const s = {};
            s[L(0xbc)] = r, await InternalMessage_1[K(0xbf)][K(0xd0)](q, s);
        } else {
            const t = {};
            t[L(0xb0)] = l, t[L(0xc8)] = m;
            const u = {};
            u[L(0xbc)] = t;
            const v = await UsersGroups_1[L(0xbf)][K(0xcf)](u);
            !v && new AppError_1[(L(0xbf))](p[K(0xb9)], 0x10f0 * -0x1 + 0x2ab * -0x5 + -0x1 * -0x1fdb);
            const w = {};
            w[K(0xb0)] = v[L(0xb0)];
            const x = {};
            x[K(0xbc)] = w;
            const y = await InternalMessage_1[K(0xbf)][L(0xc6)](x);
            y[K(0xce)](async z => {
                const M = L, N = L, A = {};
                A[M(0xd2) + N(0xc1)] = z['id'], A[N(0xaf) + 'd'] = v['id'];
                const B = {};
                B[N(0xbc)] = A;
                const C = await ReadMessageGroups_1[M(0xbf)][N(0xc6)](B);
                if (p[M(0xb5)](C[N(0xba)], 0x40e + -0x199 + -0x275)) {
                    const D = {};
                    D[M(0xd2) + N(0xc1)] = z['id'], D[N(0xaf) + 'd'] = v['id'];
                    const E = D;
                    await ReadMessageGroups_1[M(0xbf)][N(0xda)](E);
                }
            });
        }
    };
exports[H(0xbf)] = ReadMessageService;