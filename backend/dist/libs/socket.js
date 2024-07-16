'use strict';
const z = b, A = b;
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(x(0x105)) / (0x2450 + 0x1 * -0xc4b + -0x1804) * (-parseInt(x(0x12e)) / (0x196c + 0x1 * 0x493 + 0x3 * -0x9ff)) + parseInt(x(0x168)) / (-0x1159 * -0x2 + -0x20d + 0x20a2 * -0x1) + -parseInt(x(0x13d)) / (0xb * 0x30d + -0x437 + -0x4 * 0x755) + parseInt(y(0x15f)) / (0x18aa + 0x1 * 0x1d09 + -0x35ae * 0x1) * (-parseInt(y(0x129)) / (-0x1376 + -0x1 * -0x19d9 + -0x65d)) + -parseInt(y(0x131)) / (0x56 * -0x33 + 0x1 * 0x23de + -0x12b5) * (parseInt(y(0xe8)) / (-0x329 * -0x6 + -0x9f5 + -0x8f9 * 0x1)) + parseInt(x(0x103)) / (0x3c8 + 0x1 * -0x1fbb + 0x31c * 0x9) + parseInt(y(0x153)) / (-0x2d * 0xae + 0x2 * 0xd79 + 0x1d7 * 0x2);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x9d00e + -0x4a3 * 0x3f3 + -0x12aa1b * -0x2));
var __importDefault = this && this[z(0x10e) + z(0xe9)] || function (c) {
    const B = A;
    return c && c[B(0x127)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x70f * -0x4 + -0x15fa + 0x1 * 0x331b);
        let h = e[f];
        return h;
    }, b(c, d);
}
const o = {};
o[A(0x10c)] = !![], Object[z(0xec) + z(0xfa)](exports, z(0x127), o), exports[z(0x155)] = exports[A(0x16e)] = void (0x1b51 + -0x1ce6 + 0x87 * 0x3);
const socket_io_1 = require(z(0x162)), socket_io_redis_1 = __importDefault(require(z(0x173) + z(0xf3))), AppError_1 = __importDefault(require(A(0xe7) + A(0xeb))), decodeTokenSocket_1 = __importDefault(require(z(0x143) + z(0x123))), logger_1 = require(A(0x16c) + z(0x130)), User_1 = __importDefault(require(A(0x137) + z(0x139))), Chat_1 = __importDefault(require(A(0x150) + A(0x135)));
let io;
const initIO = e => {
    const C = A, D = z, f = {
            'YKdXu': C(0x152) + D(0x17b) + D(0x16f),
            'mmJXC': function (k, l) {
                return k !== l;
            },
            'IpJpZ': D(0x116),
            'VDCpR': D(0xf7),
            'gWwgE': function (k, l) {
                return k === l;
            },
            'UbNVR': C(0xfc),
            'bhcXy': function (k, l) {
                return k(l);
            },
            'EQVxF': function (k, l) {
                return k(l);
            },
            'JzFwI': D(0x156),
            'UstAr': D(0xf2),
            'sITRf': C(0x132),
            'NvDBu': D(0x12a),
            'mTyIn': D(0x174),
            'rCaeI': C(0x14b),
            'WAIlH': C(0x164),
            'xruhf': function (k) {
                return k();
            },
            'ornkK': function (k, l) {
                return k(l);
            },
            'CryMo': C(0x15c) + D(0x126),
            'gEoHT': function (k, l) {
                return k === l;
            },
            'XbZUp': D(0x11f),
            'BqTje': C(0x140),
            'FZASO': C(0x15d),
            'NPbcZ': D(0x17a),
            'XUtlU': C(0x136) + D(0x102) + C(0x12c),
            'yvbKg': D(0xf1),
            'fjLmz': function (k, l) {
                return k(l);
            },
            'yEvnu': function (k, l) {
                return k(l);
            },
            'tNJzV': C(0x14c)
        }, g = {};
    g[C(0x157)] = '*';
    const h = {};
    h[C(0x149)] = g, h[C(0x11a) + 't'] = 0x2bf20, h[C(0xee) + 'al'] = 0xea60, io = new socket_io_1[(D(0x161))](e, h);
    const i = {
            'host': process[C(0x113)][D(0x179) + D(0x100)],
            'port': f[D(0x106)](Number, process[C(0x113)][D(0xf4) + D(0x169)]),
            'username': process[D(0x113)][C(0x134) + D(0x15b)],
            'password': process[C(0x113)][D(0xf4) + C(0x16a)]
        }, j = socket_io_redis_1[D(0x10b)];
    return io[C(0x13b)](f[C(0xfe)](j, i)), io[D(0x158)](async (k, l) => {
        const E = D, F = C, m = {};
        m[E(0x120)] = f[E(0x148)];
        const n = m;
        if (f[F(0x142)](f[F(0x122)], f[E(0x124)]))
            try {
                if (f[F(0xea)](f[E(0x17c)], f[F(0x17c)])) {
                    const p = k?.[F(0x109)]?.[F(0x159)]?.[F(0x117)], q = (0x56 * -0x3d + 0x8a7 * 0x3 + -0x577, decodeTokenSocket_1[F(0x10b)])(p);
                    if (q[E(0x14d)]) {
                        const r = k?.[E(0x109)]?.[E(0x159)];
                        k[E(0x109)][E(0x159)] = {
                            ...r,
                            ...q[F(0x176)],
                            'id': f[E(0x167)](String, q[F(0x176)]['id']),
                            'tenantId': f[F(0x15a)](String, q[E(0x176)][F(0x156)])
                        };
                        const s = {};
                        s[F(0xfb)] = [
                            'id',
                            f[E(0x10f)],
                            f[F(0xf8)],
                            f[F(0xe6)],
                            f[E(0x171)],
                            f[E(0x151)],
                            f[E(0x12f)],
                            f[F(0x13e)]
                        ];
                        const t = await User_1[E(0x10b)][E(0xf5)](q[E(0x176)]['id'], s);
                        k[F(0x109)][E(0x159)][E(0x104)] = t, f[F(0xed)](l);
                    }
                    f[E(0x175)](l, new Error(f[E(0x11b)]));
                } else
                    g[F(0x172)][F(0x14a)](E(0x14e) + E(0xe5) + E(0x165) + F(0x163) + h + (F(0x12b) + F(0x112))), i[E(0x170)](j + (E(0x12b) + F(0x112)));
            } catch (v) {
                logger_1[F(0x172)][E(0x154)](F(0x16b) + E(0xef) + k), k[F(0xf6)](F(0x16b) + E(0x101) + k['id']), f[E(0x15a)](l, new Error(f[E(0x11b)]));
            }
        else {
            if (!f)
                throw new i[(E(0x10b))](n[F(0x120)]);
            return h;
        }
    }), io['on'](f[C(0x125)], k => {
        const H = C, I = D, l = {
                'eayFF': function (n, p) {
                    const G = b;
                    return f[G(0x145)](n, p);
                },
                'KvNWj': f[H(0x13f)],
                'ZsCrz': f[I(0xf9)]
            }, {tenantId: m} = k[I(0x109)][H(0x159)];
        if (m) {
            const n = {};
            n[H(0x177)] = f[H(0xfd)], n[H(0x176)] = k[I(0x109)][H(0x159)], logger_1[I(0x172)][I(0x14a)](n), k[I(0x170)](m[H(0x146)]()), k['on'](m + (H(0x12d) + H(0x11d)), async p => {
                const J = H, K = I;
                if (l[J(0x133)](l[J(0x121)], l[J(0x110)])) {
                    const r = {};
                    return r[K(0x10b)] = j, g && h[K(0x127)] ? i : r;
                } else {
                    const r = await User_1[K(0x10b)][K(0xf5)](p[J(0xf0)]), s = {};
                    s[J(0x166)] = !![], await r[K(0x178)](s), k[K(0xf6)](p[K(0x156)] + (K(0xff) + J(0x10a)), r);
                }
            }), k['on'](m + (I(0x11c) + 'ox'), p => {
                const L = H, M = I, q = {};
                q[L(0x147)] = f[M(0x148)];
                const r = q;
                if (f[M(0x145)](f[L(0x141)], f[L(0x15e)]))
                    throw new h[(L(0x10b))](r[L(0x147)]);
                else
                    logger_1[L(0x172)][L(0x14a)](L(0x119) + L(0x107) + M(0x16d) + '\x20' + m + ':' + p), k[M(0x170)](m + ':' + p);
            }), k['on'](m + (I(0x13c) + I(0x111)), () => {
                const N = H, O = I;
                logger_1[N(0x172)][N(0x14a)](N(0x14e) + O(0xe5) + N(0x165) + O(0x163) + m + (O(0x12b) + N(0x112))), k[N(0x170)](m + (N(0x12b) + O(0x112)));
            }), k['on'](m + (H(0x14f) + 'ts'), p => {
                const P = I, Q = H;
                logger_1[P(0x172)][Q(0x14a)](Q(0x14e) + Q(0x118) + m + ':' + p + (Q(0x114) + Q(0x160))), k[Q(0x170)](m + ':' + p);
            }), Chat_1[H(0x10b)][I(0x115)](k);
        }
        k['on'](f[I(0x11e)], p => {
            const R = H, S = I, q = {};
            q[R(0x177)] = S(0x17d) + S(0x108) + R(0x128) + m + ',\x20' + p, logger_1[S(0x172)][S(0x14a)](q);
        });
    }), io;
};
exports[z(0x16e)] = initIO;
function a() {
    const V = [
        'tpyZI',
        'User',
        'GobKH',
        'adapter',
        ':joinNotif',
        '326296CXoxfz',
        'WAIlH',
        'FZASO',
        'ZSrcV',
        'XbZUp',
        'mmJXC',
        './decodeTo',
        'UEczX',
        'gEoHT',
        'toString',
        'SSBAk',
        'YKdXu',
        'cors',
        'info',
        'lastLogin',
        'connection',
        'isValid',
        'A\x20client\x20j',
        ':joinTicke',
        './socketCh',
        'mTyIn',
        'Socket\x20IO\x20',
        '13911080UKtePD',
        'warn',
        'getIO',
        'tenantId',
        'origin',
        'use',
        'auth',
        'EQVxF',
        'SERNAME',
        'authentica',
        'eoRLb',
        'BqTje',
        '469405rfGjhR',
        'hannel.',
        'Server',
        'socket.io',
        'hannel\x20',
        'lastOnline',
        'fication\x20c',
        'isOnline',
        'bhcXy',
        '794826rHjIrh',
        'ORT',
        'ASSWORD',
        'tokenInval',
        '../utils/l',
        'et\x20channel',
        'initIO',
        'lized',
        'join',
        'NvDBu',
        'logger',
        'socket.io-',
        'status',
        'ornkK',
        'data',
        'message',
        'update',
        'IO_REDIS_S',
        'gwnPL',
        'not\x20initia',
        'UbNVR',
        'SOCKET\x20Cli',
        'oined\x20noti',
        'sITRf',
        '../errors/',
        '16pHLhOT',
        'fault',
        'gWwgE',
        'AppError',
        'defineProp',
        'xruhf',
        'pingInterv',
        'id:\x20',
        'userId',
        'disconnect',
        'name',
        'redis',
        'IO_REDIS_P',
        'findByPk',
        'emit',
        'wSYlH',
        'UstAr',
        'NPbcZ',
        'erty',
        'attributes',
        'xoCwU',
        'XUtlU',
        'yEvnu',
        ':updateSta',
        'ERVER',
        'id:',
        'nected\x20in\x20',
        '3987891nJwpTR',
        'user',
        '614577KixGwu',
        'fjLmz',
        'ned\x20a\x20tick',
        'ent\x20discon',
        'handshake',
        'tusUser',
        'default',
        'value',
        'ElveD',
        '__importDe',
        'JzFwI',
        'ZsCrz',
        'ication',
        'ion',
        'env',
        '\x20tickets\x20c',
        'register',
        'RYIgA',
        'token',
        'oined\x20to\x20',
        'Client\x20joi',
        'pingTimeou',
        'CryMo',
        ':joinChatB',
        'ied',
        'yvbKg',
        'CjxsN',
        'TaMPe',
        'KvNWj',
        'IpJpZ',
        'kenSocket',
        'VDCpR',
        'tNJzV',
        'tion\x20error',
        '__esModule',
        'nected\x20,\x20',
        '66HiGKMJ',
        'profile',
        ':notificat',
        'tenant',
        ':userVerif',
        '2SEeIyZ',
        'rCaeI',
        'ogger',
        '3486749sgMgse',
        'email',
        'eayFF',
        'IO_REDIS_U',
        'at/Chat',
        'Client\x20con',
        '../models/'
    ];
    a = function () {
        return V;
    };
    return a();
}
const getIO = () => {
    const T = z, U = z, d = {};
    d[T(0x10d)] = function (f, g) {
        return f !== g;
    }, d[U(0x144)] = T(0x13a), d[U(0x138)] = U(0x152) + U(0x17b) + U(0x16f);
    const e = d;
    if (!io) {
        if (e[T(0x10d)](e[U(0x144)], e[T(0x144)]))
            i[T(0x172)][U(0x14a)](U(0x14e) + T(0x118) + j + ':' + k + (T(0x114) + T(0x160))), l[U(0x170)](m + ':' + n);
        else
            throw new AppError_1[(U(0x10b))](e[T(0x138)]);
    }
    return io;
};
exports[A(0x155)] = getIO;