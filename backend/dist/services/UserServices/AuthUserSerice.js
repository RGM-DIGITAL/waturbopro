'use strict';
const C = b, D = b;
(function (c, d) {
    const A = b, B = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(A(0x16c)) / (-0x18b4 + -0xcb9 + 0x256e) * (-parseInt(B(0x15e)) / (-0x17 * 0xe3 + -0x1e8d * 0x1 + 0xcbd * 0x4)) + parseInt(B(0x16d)) / (0xe83 * 0x2 + 0x1bd * -0x13 + 0x404 * 0x1) * (-parseInt(B(0x14d)) / (-0x44 * -0x91 + -0x7f * 0x1c + 0x7e * -0x32)) + parseInt(A(0x131)) / (0x1079 + 0x19fb + 0x2a6f * -0x1) * (parseInt(B(0x140)) / (0x13d4 + -0x30d * -0x1 + -0x16db)) + parseInt(A(0x144)) / (-0x1 * -0x1e90 + -0x45 * -0x7 + 0x81b * -0x4) * (-parseInt(A(0x14b)) / (-0x2292 + 0x1 * -0x1eb + -0x2485 * -0x1)) + parseInt(B(0x15b)) / (-0x9 * 0x10b + -0x6 * -0x185 + 0x2 * 0x27) + parseInt(A(0x13d)) / (0x2377 + -0x87 + -0x22e6) + -parseInt(B(0x15d)) / (0x916 * -0x4 + -0x9a1 + 0x24d * 0x14);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x58897 + 0x489f4 + 0x2a7d * 0x2));
function a() {
    const H = [
        '305284gjyxJS',
        'findOne',
        'createRefr',
        'line',
        'MCOhL',
        'vQNMn',
        'where',
        'Tokens',
        'update',
        'queues',
        'model',
        'createAcce',
        'fault',
        '../../erro',
        '3RPinhh',
        '3qXMYHR',
        'ers/Create',
        '__esModule',
        '../../help',
        'bipmO',
        'user',
        'D_CREDENTI',
        'default',
        'ssToken',
        '65haHAIS',
        'email',
        '__importDe',
        'include',
        'attributes',
        'ERR_INVALI',
        'ls/Tenant',
        'active',
        'token',
        'tenantId',
        'defineProp',
        'dudyy',
        '9458800UIvLxB',
        'ls/User',
        'erty',
        '264840nsUElR',
        'NnrqJ',
        'name',
        'TaNiU',
        '987sCqVqt',
        'refreshTok',
        'online',
        'usuariosOn',
        'checkPassw',
        'ALS',
        'ord',
        '43096ikiZPn',
        'ihDvA',
        '1172036cOjZMB',
        'tenant',
        'eshToken',
        'rs/AppErro',
        'isOnline',
        'value',
        'lastLogin',
        'findAll',
        'lastOnline',
        'status',
        'JAopV',
        'ls/Queue',
        'nHGcG',
        'mSAvt',
        '8415576OZRJCu',
        '../../mode',
        '2886411wipkfC'
    ];
    a = function () {
        return H;
    };
    return a();
}
var __importDefault = this && this[C(0x133) + D(0x16a)] || function (c) {
    const E = D;
    return c && c[E(0x16f)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x130f + -0xfe * 0x13 + 0xf8);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[C(0x152)] = !![], Object[D(0x13b) + D(0x13f)](exports, C(0x16f), k);
const User_1 = __importDefault(require(C(0x15c) + C(0x13e))), AppError_1 = __importDefault(require(D(0x16b) + C(0x150) + 'r')), CreateTokens_1 = require(C(0x170) + D(0x16e) + D(0x165)), Queue_1 = __importDefault(require(D(0x15c) + D(0x158))), Tenant_1 = __importDefault(require(C(0x15c) + C(0x137))), AuthUserService = async ({
        email: l,
        password: m
    }) => {
        const F = C, G = D, n = {};
        n[F(0x157)] = G(0x167), n[G(0x163)] = G(0x14e), n[G(0x143)] = G(0x138), n[G(0x15a)] = G(0x136) + G(0x12e) + F(0x149), n[G(0x159)] = F(0x146), n[F(0x14c)] = G(0x132), n[F(0x141)] = G(0x156), n[G(0x162)] = G(0x155), n[G(0x13c)] = F(0x142), n[G(0x171)] = F(0x153);
        const o = n, p = {};
        p[F(0x132)] = l;
        const q = {};
        q[F(0x168)] = Queue_1[F(0x12f)], q['as'] = o[F(0x157)];
        const r = {};
        r[F(0x168)] = Tenant_1[F(0x12f)], r['as'] = o[F(0x163)], r[F(0x164)] = {}, r[F(0x164)][G(0x156)] = o[G(0x143)];
        const s = {};
        s[F(0x164)] = p, s[G(0x134)] = [
            q,
            r
        ];
        const t = await User_1[G(0x12f)][F(0x15f)](s);
        if (!t)
            throw new AppError_1[(G(0x12f))](o[G(0x15a)], -0x1dcd + 0x5a4 * -0x2 + 0x2aa6);
        if (!await t[F(0x148) + F(0x14a)](m))
            throw new AppError_1[(G(0x12f))](o[G(0x15a)], -0xe17 * 0x2 + 0x2017 + -0x4b * 0x8);
        const u = (-0xb * -0x209 + -0x1cc5 + 0x2 * 0x331, CreateTokens_1[G(0x169) + F(0x130)])(t), v = (-0x43f * -0x3 + 0xe04 + 0x2f9 * -0x9, CreateTokens_1[F(0x160) + F(0x14f)])(t);
        await t[G(0x166)]({
            'isOnline': !![],
            'status': o[F(0x159)],
            'lastLogin': new Date()
        });
        const w = {};
        w[G(0x13a)] = t[G(0x13a)], w[G(0x151)] = !![];
        const x = {};
        x[F(0x164)] = w, x[G(0x135)] = [
            'id',
            o[F(0x14c)],
            o[G(0x141)],
            o[G(0x162)],
            o[G(0x13c)],
            o[G(0x171)]
        ];
        const y = await User_1[G(0x12f)][F(0x154)](x), z = {};
        return z[G(0x12d)] = t, z[G(0x139)] = u, z[F(0x145) + 'en'] = v, z[G(0x147) + F(0x161)] = y, z;
    };
exports[C(0x12f)] = AuthUserService;