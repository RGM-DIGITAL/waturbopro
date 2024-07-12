'use strict';
function a() {
    const G = [
        'DVxZB',
        '8533827bKWIrl',
        'type',
        'update',
        'node',
        'default',
        'getTime',
        '924900zGbOGb',
        'erty',
        'isActive',
        'base64',
        'rs/AppErro',
        'tenantId',
        '../../mode',
        '2547905EFSdLX',
        'promisify',
        'public',
        '266053hGXqAk',
        'attributes',
        'defineProp',
        'name',
        'interactio',
        'findOne',
        '8kSXCQY',
        'path',
        'boVts',
        'reload',
        'ls/ChatFlo',
        'MediaField',
        'userId',
        '717288xgYQEZ',
        'ZMyIt',
        'media',
        'jlPfA',
        '__esModule',
        'flow',
        '917799paIGpn',
        '../../erro',
        'length',
        'GfhMP',
        'celularTes',
        'nodeList',
        'value',
        'BkJqz',
        'data',
        'bBsiM',
        'T_FLOW_FOU',
        'jobHX',
        'split',
        'fault',
        'mediaUrl',
        'jFbup',
        '352877wokFvq',
        'ERR_NO_CHA',
        'join',
        'aOdnZ',
        '__importDe',
        'writeFile',
        'GPFbA',
        '6DxOVUF',
        'where',
        'util',
        'PkTNp',
        'FDvaS',
        'vtkzU'
    ];
    a = function () {
        return G;
    };
    return a();
}
const B = b, C = b;
(function (c, d) {
    const z = b, A = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(z(0xf5)) / (0x868 + 0x3 * -0x175 + 0x204 * -0x2) + -parseInt(z(0xeb)) / (-0x1047 + 0x1b4d + -0xb04) + -parseInt(A(0x108)) / (0x225 * -0x11 + 0x709 * 0x4 + 0x854) + -parseInt(z(0x102)) / (-0x91d * -0x2 + 0xb54 + -0x1d8a) + parseInt(z(0xf2)) / (-0x1 * 0x215b + 0x1183 + 0x83 * 0x1f) * (parseInt(z(0x11f)) / (0x125 + -0xa5 * -0xb + -0x836)) + parseInt(z(0x118)) / (0x1e39 + -0x158d + -0x8a5) * (parseInt(A(0xfb)) / (0x46b + 0x1429 * -0x1 + 0x1 * 0xfc6)) + parseInt(A(0x126)) / (-0xd0f * 0x1 + -0x1337 + -0x9 * -0x397);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x3 * 0x1dfc1 + 0x17518 + 0x8a850));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * -0x71 + 0x1bce + -0x1a74);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[B(0x11c) + C(0x115)] || function (c) {
    const D = C;
    return c && c[D(0x106)] ? c : { 'default': c };
};
const k = {};
k[C(0x10e)] = !![], Object[C(0xf7) + B(0xec)](exports, C(0x106), k);
const util_1 = require(C(0x121)), path_1 = require(C(0xfc)), fs_1 = require('fs'), ChatFlow_1 = __importDefault(require(C(0xf1) + B(0xff) + 'w')), AppError_1 = __importDefault(require(B(0x109) + B(0xef) + 'r')), writeFileAsync = (-0x13c2 + -0x1 * -0x2525 + 0x1 * -0x1163, util_1[C(0xf3)])(fs_1[C(0x11d)]), UpdateChatFlowService = async ({
        chatFlowData: g,
        chatFlowId: h,
        tenantId: i
    }) => {
        const E = B, F = B, j = {
                'vtkzU': E(0xf8),
                'ZMyIt': E(0x107),
                'PkTNp': E(0x101),
                'jlPfA': F(0xed),
                'DVxZB': F(0x10c) + 'te',
                'GfhMP': F(0x119) + E(0x112) + 'ND',
                'BkJqz': function (v, w) {
                    return v === w;
                },
                'jobHX': E(0x129),
                'boVts': function (v, w) {
                    return v === w;
                },
                'FDvaS': E(0x100),
                'bBsiM': function (v, w, x, y) {
                    return v(w, x, y);
                },
                'jFbup': F(0xf4),
                'GPFbA': F(0xee),
                'aOdnZ': function (v, w) {
                    return v - w;
                }
            }, {
                name: l,
                flow: m,
                userId: n,
                isActive: o,
                celularTeste: p
            } = g, q = {};
        q['id'] = h, q[F(0xf0)] = i;
        const r = {};
        r[F(0x120)] = q, r[F(0xf6)] = [
            'id',
            j[F(0x124)],
            j[F(0x103)],
            j[E(0x122)],
            j[F(0x105)],
            j[F(0x125)]
        ];
        const s = await ChatFlow_1[F(0xe9)][F(0xfa)](r);
        if (!s)
            throw new AppError_1[(E(0xe9))](j[E(0x10b)], 0x2318 + 0x1054 + 0xa * -0x4fc);
        for await (const v of m[F(0x107)][E(0x10d)]) {
            if (j[F(0x10f)](v[F(0x127)], j[E(0x113)]))
                for await (const w of v[E(0xf9) + 'ns']) {
                    if (j[E(0xfd)](w[F(0x127)], j[E(0x123)]) && w[F(0x110)][E(0x104)]) {
                        const x = new Date()[F(0xea)]() + '-' + w[F(0x110)][F(0xf8)];
                        await j[F(0x111)](writeFileAsync, (0x1ca7 + -0x6 * 0x8a + -0x196b * 0x1, path_1[E(0x11a)])(__dirname, '..', '..', '..', j[E(0x117)], x), w[F(0x110)][E(0x104)][F(0x114)](j[E(0x11e)])[0xb68 + -0x1b11 + 0xfaa], j[F(0x11e)]), delete w[E(0x110)][F(0x104)], w[E(0x110)][E(0x116)] = x;
                    }
                    if (j[F(0xfd)](w[E(0x127)], j[E(0x123)]) && w[E(0x110)][F(0x116)]) {
                        const y = w[E(0x110)][E(0x116)][F(0x114)]('/');
                        w[F(0x110)][F(0x116)] = y[j[E(0x11b)](y[E(0x10a)], 0x1b * 0xf4 + 0x6 * 0x7f + -0x1cb5)];
                    }
                }
        }
        const t = {};
        t[F(0xf8)] = l, t[F(0x107)] = m[F(0x107)], t[E(0x101)] = n, t[F(0xed)] = m[F(0xed)], t[F(0x10c) + 'te'] = m[F(0x10c) + 'te'], await s[E(0x128)](t);
        const u = {};
        return u[F(0xf6)] = [
            'id',
            j[E(0x124)],
            j[E(0x103)],
            j[F(0x122)],
            j[E(0x105)],
            j[E(0x125)]
        ], await s[E(0xfe)](u), s;
    };
exports[C(0xe9)] = UpdateChatFlowService;