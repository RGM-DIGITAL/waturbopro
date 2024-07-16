'use strict';
const z = b, A = b;
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(x(0x196)) / (-0xcd9 + 0x5 * -0x5fe + 0x2ad0) + parseInt(x(0x18d)) / (0x17dd * 0x1 + -0x1f3a + -0x11 * -0x6f) + parseInt(x(0x17a)) / (-0x5da + -0x2495 * -0x1 + 0x8 * -0x3d7) + parseInt(x(0x189)) / (-0x2134 + -0x1c2b + 0x3d63) + parseInt(y(0x18a)) / (-0x2 * -0x98f + -0xdd * 0x1d + 0x5f0) + parseInt(x(0x175)) / (0x22 * -0x5 + -0x173d + -0xf5 * -0x19) * (parseInt(y(0x17f)) / (-0xb19 * -0x3 + 0x8b0 * -0x1 + 0x79 * -0x34)) + -parseInt(y(0x179)) / (-0x1 * -0x1abb + 0xad3 + 0x641 * -0x6) * (parseInt(x(0x18c)) / (0x234b + -0xf18 * 0x1 + -0x142a));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1025f8 * 0x1 + -0x47503 * -0x2 + 0x337d5 * -0x5));
function a() {
    const E = [
        '30bkEekK',
        'fault',
        '__esModule',
        'where',
        '22984NuPdQY',
        '714435eETzao',
        'ETLBe',
        'defineProp',
        'userId',
        'oGskO',
        '1051085hfMJvA',
        'color',
        'rs/AppErro',
        'fNftO',
        '__importDe',
        'attributes',
        'queue',
        'findOne',
        'update',
        'UNSWn',
        '3177012DzAgkX',
        '1771800dIhDHy',
        'ERR_NO_QUE',
        '9117JzACui',
        '1866228KAyxeq',
        'erty',
        '../../erro',
        'ls/Queue',
        'isActive',
        'default',
        'from_ia',
        'UE_FOUND',
        'reload',
        '427691VdmnBM',
        'tenantId',
        '../../mode',
        'RKlbc',
        'tUzWa',
        'value'
    ];
    a = function () {
        return E;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x5 * 0x1c4 + 0x167c * -0x1 + 0x20c5 * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[z(0x183) + A(0x176)] || function (c) {
    const B = A;
    return c && c[B(0x177)] ? c : { 'default': c };
};
const k = {};
k[z(0x19b)] = !![], Object[z(0x17c) + z(0x18e)](exports, A(0x177), k);
const AppError_1 = __importDefault(require(A(0x18f) + z(0x181) + 'r')), Queue_1 = __importDefault(require(z(0x198) + z(0x190))), UpdateQueueService = async ({
        queueData: h,
        queueId: i
    }) => {
        const C = A, D = A, j = {};
        j[C(0x17e)] = D(0x185), j[D(0x19a)] = C(0x191), j[C(0x17b)] = C(0x17d), j[C(0x182)] = D(0x193), j[C(0x188)] = C(0x180), j[D(0x199)] = D(0x18b) + D(0x194);
        const l = j, {
                queue: m,
                isActive: n,
                userId: o,
                tenantId: p,
                from_ia: q,
                color: r
            } = h, s = {};
        s['id'] = i, s[D(0x197)] = p;
        const t = {};
        t[C(0x178)] = s, t[D(0x184)] = [
            'id',
            l[D(0x17e)],
            l[D(0x19a)],
            l[C(0x17b)],
            l[C(0x182)],
            l[D(0x188)]
        ];
        const u = await Queue_1[C(0x192)][C(0x186)](t);
        if (!u)
            throw new AppError_1[(C(0x192))](l[C(0x199)], -0x675 * -0x1 + -0x14c8 + 0xfe7);
        const v = {};
        v[C(0x185)] = m, v[C(0x191)] = n, v[C(0x193)] = q, v[C(0x180)] = r, v[C(0x17d)] = o, await u[C(0x187)](v);
        const w = {};
        return w[D(0x184)] = [
            'id',
            l[D(0x17e)],
            l[C(0x19a)],
            l[D(0x17b)],
            l[D(0x182)],
            l[C(0x188)]
        ], await u[C(0x195)](w), u;
    };
exports[A(0x192)] = UpdateQueueService;