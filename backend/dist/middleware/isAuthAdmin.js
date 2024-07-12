'use strict';
const w = b, x = b;
(function (c, d) {
    const u = b, v = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(u(0xcc)) / (-0x20a6 + 0x7 * 0x85 + 0x6 * 0x4d6) * (-parseInt(u(0xb8)) / (-0x855 * -0x3 + -0x653 + -0x12aa)) + -parseInt(u(0xc7)) / (-0x24 * -0xfb + -0x2236 + 0x37 * -0x5) * (-parseInt(u(0xaf)) / (-0x3a * 0xb + 0xcf * 0x2 + 0x3 * 0x4c)) + parseInt(v(0xda)) / (-0x4 * -0x950 + 0x24 * 0xe4 + -0x454b) + parseInt(v(0xe2)) / (-0x40b + -0x2 * -0x58f + -0x70d * 0x1) * (parseInt(u(0xe0)) / (-0x1f3a + 0x1127 + 0xe1a)) + -parseInt(v(0xa9)) / (-0x8e * 0x3e + 0x1f50 + 0x4 * 0xc7) + parseInt(u(0xc8)) / (0x1cf1 + 0x2ab + -0x1 * 0x1f93) * (-parseInt(v(0xdc)) / (-0xe84 + -0x994 + 0x1822)) + parseInt(u(0xdb)) / (-0x23ad + -0xeb9 * -0x2 + -0x646 * -0x1) * (parseInt(u(0xd1)) / (0x7a + -0x639 + 0x5cb));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xf8841 + 0x330b7 + 0xc1775 * 0x2));
var __importDefault = this && this[w(0xc9) + w(0xd6)] || function (c) {
    const y = w;
    return c && c[y(0xb7)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2de + -0x1d9f * 0x1 + 0x1b67);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[w(0xc5)] = !![], Object[x(0xdd) + x(0xba)](exports, x(0xb7), k);
function a() {
    const B = [
        '6wqMrKP',
        'split',
        'verify',
        'not\x20provid',
        'ains\x20defin',
        '8313784cNltRM',
        'profile',
        'ADMIN_DOMA',
        'indexOf',
        'Not\x20admin\x20',
        'authorizat',
        '36Ghtvny',
        'asxgR',
        '../models/',
        'VeMWS',
        'DDlrp',
        'ken\x20or\x20not',
        'jsonwebtok',
        'env',
        '__esModule',
        '4McMoTU',
        '\x20admin\x20dom',
        'erty',
        'AppError',
        'hdAYs',
        '\x20Admin',
        'default',
        'igkGs',
        'mVuWc',
        'PfiKO',
        'user',
        'email',
        'ed.',
        'value',
        'User',
        '374913vPlvEe',
        '1505286uxOUAO',
        '__importDe',
        'oDott',
        'tenantId',
        '507223IcuRKt',
        'secret',
        'Not\x20exists',
        'headers',
        'ion',
        '24MrJffF',
        'RdPdV',
        'saknf',
        'Token\x20was\x20',
        '../config/',
        'fault',
        'Invalid\x20to',
        'permission',
        '../errors/',
        '2571535fjpazZ',
        '4884473ObRPuI',
        '50QuLSPG',
        'defineProp',
        'SicQj',
        'auth',
        '7971873AOqSdX',
        'findByPk'
    ];
    a = function () {
        return B;
    };
    return a();
}
const jsonwebtoken_1 = require(x(0xb5) + 'en'), AppError_1 = __importDefault(require(x(0xd9) + w(0xbb))), auth_1 = __importDefault(require(w(0xd5) + x(0xdf))), User_1 = __importDefault(require(w(0xb1) + w(0xc6))), isAuthAdmin = async (d, e, f) => {
        const z = w, A = w, g = {
                'VeMWS': z(0xd7) + z(0xb4) + A(0xbd),
                'RdPdV': z(0xad) + z(0xd8),
                'hdAYs': z(0xd4) + A(0xa7) + z(0xc4),
                'SicQj': z(0xce) + A(0xb9) + A(0xa8) + z(0xc4),
                'mVuWc': function (l, m) {
                    return l === m;
                },
                'oDott': function (l, m) {
                    return l !== m;
                },
                'asxgR': A(0xb3),
                'saknf': z(0xc1),
                'igkGs': function (l) {
                    return l();
                }
            }, h = d[A(0xcf)][A(0xae) + A(0xd0)], i = process[A(0xb6)][A(0xab) + 'IN'];
        if (!h)
            throw new AppError_1[(A(0xbe))](g[A(0xbc)], 0x2504 + -0x17b * -0x16 + 0x4403 * -0x1);
        if (!i)
            throw new AppError_1[(z(0xbe))](g[A(0xde)], 0x3d * -0x5b + -0x1474 + 0x2bb6);
        const [, j] = h[z(0xe3)]('\x20');
        try {
            const l = (-0x1add + 0x3 * -0x274 + 0x2239, jsonwebtoken_1[A(0xa6)])(j, auth_1[z(0xbe)][z(0xcd)]), {
                    id: m,
                    profile: n,
                    tenantId: o
                } = l, p = await User_1[A(0xbe)][z(0xe1)](m);
            if (!p || g[A(0xc0)](p[z(0xc3)][A(0xac)](i), -0x20c6 + -0x175e + 0x3825)) {
                if (g[z(0xca)](g[A(0xb0)], g[z(0xb0)]))
                    throw new d[(z(0xbe))](g[z(0xb2)], 0x1f39 + 0x1ceb + -0x3a91);
                else
                    throw new AppError_1[(z(0xbe))](g[z(0xd2)], 0x8ad + 0x3 * 0x658 + 0x1be * -0xf);
            }
            const q = {};
            q['id'] = m, q[A(0xaa)] = n, q[A(0xcb)] = o, d[A(0xc2)] = q;
        } catch (s) {
            if (g[z(0xca)](g[A(0xd3)], g[A(0xd3)]))
                throw new d[(A(0xbe))](g[A(0xd2)], 0x11dd * 0x1 + 0x1 * -0x1a3f + 0x9f5 * 0x1);
            else
                throw new AppError_1[(A(0xbe))](g[z(0xb2)], -0x1a * -0x113 + -0x2166 + 0x70b);
        }
        return g[A(0xbf)](f);
    };
exports[x(0xbe)] = isAuthAdmin;