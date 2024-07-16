'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xbda + 0x65f + -0x1053);
        let h = e[f];
        return h;
    }, b(c, d);
}
const H = b, I = b;
(function (c, d) {
    const F = b, G = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(F(0x1e7)) / (0xb * -0x1a5 + 0xad6 + 0x742) * (parseInt(G(0x214)) / (0x24b4 * 0x1 + -0x10b9 + -0x13f9)) + -parseInt(F(0x210)) / (0xdbe * 0x2 + 0xb00 + 0x93 * -0x43) * (-parseInt(F(0x1fe)) / (-0x10a9 * -0x1 + 0x1b7 * -0x15 + 0x135e)) + parseInt(G(0x1f9)) / (0x1f89 * -0x1 + 0x1ae * 0x16 + -0x566) * (parseInt(F(0x1fc)) / (-0x2 * -0x3c2 + 0x2 * -0x9ff + 0xc80)) + parseInt(F(0x204)) / (-0x12b6 + 0x1d6b + 0x1 * -0xaae) * (-parseInt(F(0x20c)) / (-0x471 * -0x7 + -0x371 * 0x5 + 0x12 * -0xc5)) + -parseInt(F(0x20f)) / (-0x1d * -0xff + -0x1e5f + 0x185) * (parseInt(F(0x1e8)) / (-0x2494 + -0x2c1 * 0x5 + 0x1 * 0x3263)) + parseInt(G(0x20d)) / (-0x19a2 + 0x6e * -0x33 + -0x5d * -0x83) * (-parseInt(G(0x1f4)) / (-0x50f * -0x2 + -0x17ea + -0x6ec * -0x2)) + parseInt(F(0x1ea)) / (0x2 * 0x10b7 + -0x10ad + 0x2 * -0x85a) * (parseInt(F(0x1fb)) / (0x5d9 + 0x271 * 0xb + 0x15 * -0x18e));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x108cb * 0x19 + 0xb9ff8 + 0x1ce6c5));
var __importDefault = this && this[H(0x203) + H(0x1f0)] || function (c) {
    const J = I;
    return c && c[J(0x1fa)] ? c : { 'default': c };
};
const k = {};
k[I(0x20e)] = !![], Object[I(0x1ee) + H(0x1f1)](exports, I(0x1fa), k);
function a() {
    const O = [
        'WqpWX',
        'update',
        './../../mo',
        '__importDe',
        '7wHuMQn',
        'read',
        'receiverId',
        'findOne',
        'forEach',
        'lMessage',
        'userGroupI',
        'userId',
        '5842072cYYCBu',
        '6127tSYVTX',
        'value',
        '27HQhqCr',
        '3YNnyYu',
        'sKELE',
        'length',
        '../../mode',
        '79996lmSLjt',
        'dels/Users',
        'Groups',
        'ls/ReadMes',
        'internalMe',
        'rs/AppErro',
        '29EeCqqX',
        '2501860jkBRIZ',
        'sageGroups',
        '6364501EFHqtn',
        'ssageId',
        'create',
        '_NOT_FOUND',
        'defineProp',
        'where',
        'fault',
        'erty',
        'gzcYR',
        'USER_GROUP',
        '10284ftjmNG',
        '../../erro',
        'groupId',
        'ls/Interna',
        'default',
        '35590EhGIbs',
        '__esModule',
        '56AAcmQj',
        '852mNsXWp',
        'senderId',
        '4441208BrOPjP',
        'findAll'
    ];
    a = function () {
        return O;
    };
    return a();
}
const AppError_1 = __importDefault(require(H(0x1f5) + H(0x1e6) + 'r')), InternalMessage_1 = __importDefault(require(H(0x213) + I(0x1f7) + H(0x209))), ReadMessageGroups_1 = __importDefault(require(H(0x213) + I(0x217) + H(0x1e9))), UsersGroups_1 = __importDefault(require(I(0x202) + H(0x215) + H(0x216))), ReadMessageService = async ({
        senderId: l,
        userId: m,
        isGroup: n
    }) => {
        const K = H, L = I, o = {};
        o[K(0x200)] = function (q, r) {
            return q <= r;
        }, o[L(0x1f2)] = function (q, r) {
            return q === r;
        }, o[L(0x211)] = K(0x1f3) + L(0x1ed);
        const p = o;
        if (p[K(0x1f2)](n, ![])) {
            const q = {};
            q[K(0x205)] = !![];
            const r = {};
            r[K(0x1fd)] = l, r[K(0x206)] = m;
            const s = {};
            s[K(0x1ef)] = r, await InternalMessage_1[K(0x1f8)][L(0x201)](q, s);
        } else {
            const t = {};
            t[K(0x1f6)] = l, t[K(0x20b)] = m;
            const u = {};
            u[L(0x1ef)] = t;
            const v = await UsersGroups_1[L(0x1f8)][L(0x207)](u);
            !v && new AppError_1[(K(0x1f8))](p[K(0x211)], 0x5d3 + -0x2 * 0x128b + 0x20d7);
            const w = {};
            w[K(0x1f6)] = v[L(0x1f6)];
            const x = {};
            x[K(0x1ef)] = w;
            const y = await InternalMessage_1[L(0x1f8)][K(0x1ff)](x);
            y[K(0x208)](async z => {
                const M = L, N = K, A = {};
                A[M(0x218) + N(0x1eb)] = z['id'], A[M(0x20a) + 'd'] = v['id'];
                const B = {};
                B[N(0x1ef)] = A;
                const C = await ReadMessageGroups_1[M(0x1f8)][M(0x1ff)](B);
                if (p[N(0x200)](C[M(0x212)], 0x1 * 0xade + 0x73a + 0x1218 * -0x1)) {
                    const D = {};
                    D[N(0x218) + N(0x1eb)] = z['id'], D[N(0x20a) + 'd'] = v['id'];
                    const E = D;
                    await ReadMessageGroups_1[N(0x1f8)][N(0x1ec)](E);
                }
            });
        }
    };
exports[H(0x1f8)] = ReadMessageService;