'use strict';
const C = b, D = b;
(function (c, d) {
    const A = b, B = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(A(0xdb)) / (0xf8a + 0xc14 + 0x1b9d * -0x1) + parseInt(A(0xf0)) / (-0x1 * 0x20b6 + 0x29 + 0x208f * 0x1) + -parseInt(B(0xb4)) / (-0xf37 + -0x237b + 0x32b5) * (-parseInt(B(0xc8)) / (-0x1 * -0x9e1 + 0x7c8 + -0x11a5)) + parseInt(A(0xed)) / (-0x18b * -0x14 + -0xa * -0x11a + -0x29db) * (-parseInt(B(0xe5)) / (0x1fe4 + 0x1 * -0x13ca + 0x60a * -0x2)) + parseInt(A(0xb1)) / (-0x1 * 0x10ab + 0x137a + -0x2c8) * (-parseInt(B(0xbd)) / (0x1eeb + 0xa64 + -0x2947 * 0x1)) + -parseInt(B(0xbf)) / (0x562 + 0x2494 + -0x29ed * 0x1) + -parseInt(B(0xde)) / (-0x1 * -0xb23 + 0xa4d + 0x391 * -0x6) * (-parseInt(A(0xcf)) / (0x1aeb + -0x1d84 + 0x2a4));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x30fb9 + 0x1a328 + -0x63 * -0x907));
var __importDefault = this && this[C(0xe0) + C(0xd1)] || function (c) {
    const E = C;
    return c && c[E(0xc5)] ? c : { 'default': c };
};
const k = {};
k[D(0xe4)] = !![], Object[C(0xe8) + C(0xba)](exports, D(0xc5), k);
function a() {
    const H = [
        'cGlzo',
        '14AjJBFz',
        'ERR_INVALI',
        'user',
        '57522KMqQsP',
        'findOne',
        'usuariosOn',
        'attributes',
        'findAll',
        'lastOnline',
        'erty',
        'isOnline',
        'rs/AppErro',
        '625912UmjBRC',
        'createRefr',
        '1451772FCGPVp',
        'tenantId',
        'active',
        'online',
        'tenant',
        'WQXwS',
        '__esModule',
        'Tokens',
        'line',
        '4IiRTJK',
        'update',
        'D_CREDENTI',
        'ssToken',
        'PMZPu',
        'DaznR',
        'ls/User',
        '66blrPVT',
        'ALS',
        'fault',
        'ord',
        '../../mode',
        'ers/Create',
        'lastLogin',
        'name',
        '../../erro',
        'YoHzX',
        'refreshTok',
        'duuhH',
        '11678kYvTdv',
        'UsfBP',
        'ETMIh',
        '695190ozEMtO',
        '../../help',
        '__importDe',
        'SSBmD',
        'status',
        'default',
        'value',
        '6768GhNVLr',
        'dDOKm',
        'checkPassw',
        'defineProp',
        'queues',
        'ls/Queue',
        'createAcce',
        'eshToken',
        '85WVqkpr',
        'ls/Tenant',
        'email',
        '95624JhMfqc',
        'include',
        'token',
        'model',
        'where'
    ];
    a = function () {
        return H;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x26d5 * 0x1 + 0x7ea + 0x1f97);
        let h = e[f];
        return h;
    }, b(c, d);
}
const User_1 = __importDefault(require(C(0xd3) + D(0xce))), AppError_1 = __importDefault(require(C(0xd7) + D(0xbc) + 'r')), CreateTokens_1 = require(D(0xdf) + D(0xd4) + C(0xc6)), Queue_1 = __importDefault(require(D(0xd3) + C(0xea))), Tenant_1 = __importDefault(require(D(0xd3) + C(0xee))), AuthUserService = async ({
        email: l,
        password: m
    }) => {
        const F = C, G = D, n = {};
        n[F(0xb0)] = G(0xe9), n[G(0xe6)] = G(0xc3), n[G(0xe1)] = F(0xc1), n[F(0xd8)] = F(0xb2) + G(0xca) + F(0xd0), n[F(0xcd)] = F(0xc2), n[G(0xdc)] = G(0xef), n[G(0xda)] = G(0xe2), n[F(0xc4)] = G(0xb9), n[G(0xcc)] = F(0xd6), n[G(0xdd)] = F(0xd5);
        const o = n, p = {};
        p[G(0xef)] = l;
        const q = {};
        q[F(0xae)] = Queue_1[G(0xe3)], q['as'] = o[F(0xb0)];
        const r = {};
        r[G(0xae)] = Tenant_1[F(0xe3)], r['as'] = o[F(0xe6)], r[F(0xaf)] = {}, r[F(0xaf)][F(0xe2)] = o[F(0xe1)];
        const s = {};
        s[F(0xaf)] = p, s[G(0xac)] = [
            q,
            r
        ];
        const t = await User_1[F(0xe3)][F(0xb5)](s);
        if (!t)
            throw new AppError_1[(G(0xe3))](o[G(0xd8)], -0xc * -0x2f5 + 0x757 + -0x2942);
        if (!await t[G(0xe7) + G(0xd2)](m))
            throw new AppError_1[(G(0xe3))](o[F(0xd8)], 0x1 * -0x22a8 + -0x65e * -0x6 + 0xa9 * -0x3);
        const u = (-0x79 * -0x7 + 0xcd * -0x22 + 0x17eb, CreateTokens_1[F(0xeb) + G(0xcb)])(t), v = (0x1eb2 * 0x1 + 0x22e3 + -0x67 * 0xa3, CreateTokens_1[G(0xbe) + G(0xec)])(t);
        await t[G(0xc9)]({
            'isOnline': !![],
            'status': o[G(0xcd)],
            'lastLogin': new Date()
        });
        const w = {};
        w[F(0xc0)] = t[F(0xc0)], w[G(0xbb)] = !![];
        const x = {};
        x[F(0xaf)] = w, x[F(0xb7)] = [
            'id',
            o[F(0xdc)],
            o[F(0xda)],
            o[G(0xc4)],
            o[F(0xcc)],
            o[G(0xdd)]
        ];
        const y = await User_1[G(0xe3)][F(0xb8)](x), z = {};
        return z[G(0xb3)] = t, z[G(0xad)] = u, z[G(0xd9) + 'en'] = v, z[G(0xb6) + F(0xc7)] = y, z;
    };
exports[D(0xe3)] = AuthUserService;