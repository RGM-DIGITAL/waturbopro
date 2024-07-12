'use strict';
const W = b, X = b;
(function (c, d) {
    const U = b, V = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(U(0xf2)) / (-0xf3 * 0x29 + 0x12e1 + 0x140b) * (parseInt(V(0x106)) / (-0x1110 + 0x1853 + 0x741 * -0x1)) + -parseInt(V(0x129)) / (-0x19e2 + -0x18e * 0x6 + 0x2339) * (parseInt(V(0x115)) / (0x4 + 0x2276 + 0x113b * -0x2)) + -parseInt(V(0x146)) / (-0x1511 * 0x1 + -0xa7 * -0xf + 0x107 * 0xb) * (-parseInt(V(0xfc)) / (0x31 * -0x56 + 0x5 * -0x3 + 0xb * 0x181)) + -parseInt(U(0x10d)) / (0x87 * -0x2d + 0x24aa + -0x8 * 0x19d) + -parseInt(V(0x125)) / (-0x79f + -0xb4b * 0x1 + -0x32 * -0x61) * (parseInt(V(0x163)) / (0xb23 + 0xac5 + 0x15df * -0x1)) + -parseInt(V(0x132)) / (-0x1762 + 0x13 * -0x116 + 0x2c0e) + -parseInt(U(0xf9)) / (-0x39a * 0x7 + 0x24f0 + -0xbaf) * (-parseInt(U(0xe5)) / (0x1627 * -0x1 + 0x5 * -0x51b + -0x2fba * -0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xf * -0x6c6f + -0x1 * 0x66de9 + 0x191277));
var __importDefault = this && this[W(0x12c) + X(0x154)] || function (c) {
    const Y = X;
    return c && c[Y(0x10b)] ? c : { 'default': c };
};
const q = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x7fc * -0x3 + 0x4e4 * -0x4 + -0x1b * -0x1a5);
        let h = e[f];
        return h;
    }, b(c, d);
}
q[X(0x13f)] = !![], Object[X(0xe8) + X(0x13e)](exports, W(0x10b), q), exports[X(0xfa) + W(0xf5) + X(0xee)] = void (0x21d3 * -0x1 + 0x694 * 0x3 + 0xe17);
const lodash_1 = require(W(0x12a)), xlsx_1 = __importDefault(require(W(0x15f))), Contact_1 = __importDefault(require(X(0xf8) + W(0x143))), Whatsapp_1 = __importDefault(require(W(0xf8) + W(0x11b) + 'p')), AppError_1 = __importDefault(require(X(0xf3) + W(0x12e) + 'r')), wbot_baileys_1 = require(X(0xeb) + X(0x12d) + W(0x10c));
async function ImportFileContactsService(m, n, o, p) {
    const Z = W, a0 = W, r = {};
    r[Z(0x159)] = Z(0x136), r[Z(0x123)] = Z(0x150), r[Z(0x119)] = a0(0x152) + Z(0x14f) + Z(0x162), r[a0(0x11a)] = function (z, A) {
        return z !== A;
    }, r[Z(0xf7)] = a0(0x10a), r[a0(0x139)] = Z(0x113), r[a0(0x160)] = a0(0x126), r[Z(0x127)] = Z(0xfe), r[a0(0x10e)] = Z(0x121), r[Z(0x11e)] = Z(0x116), r[Z(0x12f)] = function (z, A) {
        return z === A;
    }, r[Z(0x10f)] = a0(0x157), r[Z(0x128)] = Z(0x12b), r[Z(0x131)] = a0(0x120), r[Z(0x14d)] = a0(0x108), r[Z(0xe4)] = Z(0x153), r[a0(0x104)] = function (z, A) {
        return z !== A;
    }, r[Z(0xef)] = a0(0x15d), r[a0(0x151)] = function (z, A) {
        return z || A;
    }, r[a0(0x145)] = function (z, A) {
        return z && A;
    }, r[a0(0x110)] = function (z, A) {
        return z >= A;
    }, r[a0(0x11d)] = Z(0x134), r[a0(0x114)] = a0(0x14a), r[Z(0xe9)] = Z(0x149), r[Z(0x11c)] = function (z, A) {
        return z == A;
    }, r[Z(0x14c)] = function (z, A) {
        return z !== A;
    }, r[a0(0x164)] = Z(0x112), r[a0(0x140)] = a0(0x13d) + Z(0x147), r[Z(0xfd)] = function (z, A) {
        return z !== A;
    }, r[a0(0x117)] = Z(0x138), r[a0(0x100)] = a0(0x142), r[Z(0xf1)] = a0(0x11f), r[Z(0x148)] = Z(0xea);
    const s = r, t = xlsx_1[a0(0x111)][Z(0x135)](n?.[Z(0x14b)]), u = (-0x155d + 0x1 * -0x985 + -0x3b * -0x86, lodash_1[Z(0x13b)])(Object[Z(0x161)](t[a0(0x13c)])), v = {};
    v[Z(0x137)] = 0x0;
    const w = xlsx_1[Z(0x111)][a0(0x14e)][a0(0x102) + a0(0x109)](u, v), x = [];
    w[Z(0x15e)](z => {
        const a1 = a0, a2 = a0, A = {};
        A[a1(0x101)] = s[a1(0x119)];
        const B = A;
        if (s[a1(0x11a)](s[a2(0xf7)], s[a1(0x139)])) {
            let C = '', D = '', E = '';
            ((0x10d5 + -0x14b2 + 0x3dd, lodash_1[a2(0x15a)])(z, s[a2(0x160)]) || (-0xa3 * -0x3 + -0xb3a + 0x951, lodash_1[a1(0x15a)])(z, s[a2(0x127)])) && (C = z[a2(0x126)] || z[a2(0xfe)]);
            ((0x1dfb * 0x1 + -0x265 * -0x3 + 0x252a * -0x1, lodash_1[a1(0x15a)])(z, s[a1(0x10e)]) || (-0x1 * 0x10cc + -0x4 * -0x9d + 0x4c8 * 0x3, lodash_1[a2(0x15a)])(z, s[a1(0x159)]) || (0x4 * 0x22f + -0x1 * 0x1fe2 + 0x2 * 0xb93, lodash_1[a2(0x15a)])(z, s[a2(0x11e)]) || (0x1bc0 + 0x19 * -0xfe + -0x2f2, lodash_1[a1(0x15a)])(z, s[a2(0x123)])) && (s[a1(0x12f)](s[a1(0x10f)], s[a1(0x10f)]) ? (D = z[a1(0x121)] || z[s[a2(0x159)]] || z[a2(0x116)] || z[s[a2(0x123)]], D = ('' + D)[a1(0x15b)](/\D/g, '')) : (j = k[a2(0x121)] || l[s[a2(0x159)]] || m[a2(0x116)] || n[s[a1(0x123)]], o = ('' + p)[a2(0x15b)](/\D/g, '')));
            if ((0x2 * 0x3aa + 0x1f8d + 0x10d * -0x25, lodash_1[a2(0x15a)])(z, s[a2(0x128)]) || (0x22e7 * 0x1 + 0x1d * 0x41 + -0x2a44, lodash_1[a1(0x15a)])(z, s[a1(0x131)]) || (-0x1f6f + 0x1519 * 0x1 + 0x6 * 0x1b9, lodash_1[a1(0x15a)])(z, s[a1(0x14d)]) || (-0xc * 0x22d + -0x2c6 + 0xe71 * 0x2, lodash_1[a1(0x15a)])(z, s[a1(0xe4)])) {
                if (s[a2(0x104)](s[a2(0xef)], s[a2(0xef)]))
                    throw new v[(a1(0x111))](B[a1(0x101)], 0x760 + -0x3b * 0x1 + -0x591);
                else
                    E = z[a2(0x12b)] || z[s[a1(0x131)]] || z[a1(0x108)] || z[s[a2(0xe4)]];
            }
            C = s[a1(0x151)](C, D);
            if (s[a1(0x145)](C, D) && s[a2(0x110)](D[a1(0x144)], -0x314 + 0x5 * -0x315 + -0x1287 * -0x1)) {
                const H = {};
                H[a2(0x122)] = C, H[a2(0x103)] = D, H[a2(0x12b)] = E, H[a2(0x141)] = m, x[a2(0xf4)](H);
            }
        } else
            A[a1(0xf4)](f);
    });
    const y = [];
    for (const z of x) {
        if (s[a0(0x12f)](s[a0(0x11d)], s[a0(0x11d)]))
            try {
                z[a0(0x103)] = z[a0(0x103)][Z(0x15b)]('-', '')[a0(0x15b)]('\x20', '')[Z(0x15b)]('(', '')[a0(0x15b)](')', '');
                const A = {};
                A[a0(0x15c)] = s[a0(0x114)], A[a0(0x141)] = m, A[a0(0x107)] = s[a0(0xe9)];
                const B = {};
                B[Z(0x130)] = A;
                const C = await Whatsapp_1[Z(0x111)][a0(0xed)](B);
                if (!C)
                    throw new AppError_1[(Z(0x111))](s[a0(0x119)], 0xb2e + 0x1 * 0x2653 + 0x2fed * -0x1);
                const D = (0xa60 + -0x333 + -0x72d * 0x1, wbot_baileys_1[a0(0x156)])(C['id']), E = z[Z(0x103)] + (Z(0x13a) + Z(0xfb)), F = await D[Z(0x118)](E);
                if (s[Z(0x11c)](F[-0x1555 + -0xbad + 0xa9 * 0x32][a0(0xe7)], ![])) {
                    if (s[Z(0x14c)](s[Z(0x164)], s[a0(0x164)])) {
                        const M = {};
                        return M[Z(0x111)] = j, M && H[Z(0x10b)] ? i : M;
                    } else
                        throw new AppError_1[(a0(0x111))](s[a0(0x140)], 0x1c7f + -0x1b3d + 0x1 * 0x52);
                }
                z[Z(0x103)] = F[-0xb1d + -0x20e * 0x1 + 0xd2b][a0(0x158)][Z(0xf6)]('@')[-0x174f + -0x536 + 0x1c85];
                const G = {};
                G[a0(0x103)] = z[Z(0x103)], G[a0(0x141)] = z[Z(0x141)];
                const H = {};
                H[Z(0x130)] = G, H[a0(0x155)] = z;
                const [I, J] = await Contact_1[a0(0x111)][a0(0x105) + 'te'](H), K = I;
                J && y[Z(0xf4)](I);
                if (o?.[Z(0x144)]) {
                    if (s[a0(0xfd)](s[Z(0x117)], s[Z(0x100)])) {
                        const M = {};
                        M[Z(0x141)] = m;
                        const N = {};
                        N[Z(0x133)] = M, await K[a0(0xec)](o, N);
                    } else
                        B = G[Z(0x126)] || H[a0(0xfe)];
                }
                if (p?.[Z(0x144)]) {
                    const P = {};
                    P[a0(0x141)] = m;
                    const Q = {};
                    Q[Z(0x133)] = P, await K[a0(0xff)](p, Q);
                }
            } catch (R) {
                if (s[a0(0x12f)](s[a0(0xf1)], s[Z(0x148)])) {
                    const T = {};
                    T[Z(0x122)] = i, T[Z(0x103)] = j, T[Z(0x12b)] = k, T[Z(0x141)] = l, h[a0(0xf4)](T);
                } else
                    console[Z(0xf0)](a0(0xe6) + Z(0xe3) + a0(0x124) + z[a0(0x103)]);
            }
        else
            h = i[a0(0x12b)] || j[s[a0(0x131)]] || k[Z(0x108)] || l[s[a0(0xe4)]];
    }
    return y;
}
function a() {
    const a3 = [
        'lLGNw',
        'gZlPf',
        'default',
        'heoQT',
        'wxhPL',
        'eaUzh',
        '488uCTHHp',
        'Numero',
        'ZDFGF',
        'onWhatsApp',
        'ICvGX',
        'fqceK',
        'ls/Whatsap',
        'piIuu',
        'bvIKV',
        'wXfrD',
        'xGByU',
        'e-mail',
        'numero',
        'name',
        'NcfDC',
        'ta\x20válida\x20',
        '10544TfczWj',
        'nome',
        'tdcqp',
        'jEOKQ',
        '23592KeISJi',
        'lodash',
        'email',
        '__importDe',
        '/wbot-bail',
        'rs/AppErro',
        'LLkKd',
        'where',
        'VZPEq',
        '3065080ErlKHk',
        'through',
        'JSGGX',
        'readFile',
        'número',
        'header',
        'DfhYD',
        'WhXKz',
        '@$s.whatsa',
        'head',
        'Sheets',
        'CONTACT_NO',
        'erty',
        'value',
        'lsrat',
        'tenantId',
        'ttQIN',
        'ls/Contact',
        'length',
        'CliaU',
        '828260ODjVsr',
        'T_FOUND',
        'XJHqe',
        'whatsapp',
        'CONNECTED',
        'path',
        'gzCfF',
        'cLuDw',
        'utils',
        'WHATSAPP_C',
        'Número',
        'KCsom',
        'NOT_FOUND_',
        'E-mail',
        'fault',
        'defaults',
        'getWbot',
        'oTOXA',
        'jid',
        'emkgL',
        'has',
        'replace',
        'status',
        'donoS',
        'forEach',
        'xlsx',
        'lfCWB',
        'values',
        'ONNECTED',
        '4230wMlFzX',
        'VyRUv',
        '\x20é\x20uma\x20con',
        'COvjS',
        '17780604mClCPy',
        'Número\x20não',
        'exists',
        'defineProp',
        'vJcdw',
        'Cfjxp',
        '../../libs',
        'setTags',
        'findOne',
        'rvice',
        'sZjBR',
        'error',
        'SGJdn',
        '5NnhnpT',
        '../../erro',
        'push',
        'ContactsSe',
        'split',
        'QcyUg',
        '../../mode',
        '33EJlLhm',
        'ImportFile',
        'pp.net',
        '18tRZued',
        'VGIvx',
        'Nome',
        'setWallets',
        'WKTiM',
        'uJwZI',
        'sheet_to_j',
        'number',
        'Zatsp',
        'findOrCrea',
        '544658ipwQVZ',
        'type',
        'Email',
        'son',
        'wAWTn',
        '__esModule',
        'eys',
        '6227879ePBiEK',
        'znYiM'
    ];
    a = function () {
        return a3;
    };
    return a();
}
exports[X(0xfa) + X(0xf5) + W(0xee)] = ImportFileContactsService;