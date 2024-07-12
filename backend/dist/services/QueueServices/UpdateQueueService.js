'use strict';
const z = b, A = b;
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(x(0x9b)) / (-0x2361 + 0xd21 + 0x1 * 0x1641) * (-parseInt(x(0xb6)) / (-0x1 * -0x1ced + -0x338 + 0x2db * -0x9)) + parseInt(y(0x97)) / (-0x8d3 + 0x18e0 + 0x2 * -0x805) * (-parseInt(y(0xa8)) / (-0x1d * -0x2f + 0x2200 + -0x274f * 0x1)) + parseInt(x(0xa7)) / (0xdfa + 0x4e8 + -0x12dd) + -parseInt(y(0xaa)) / (-0x1886 + 0x1644 + 0x248) + parseInt(y(0x9c)) / (0x1eb8 + 0x8b0 + -0x2761 * 0x1) + parseInt(x(0xba)) / (0xd8a + 0x2b + -0x48f * 0x3) + parseInt(x(0x9d)) / (-0x52 * 0x65 + -0x2 * 0x45 + 0x20ed * 0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x3ef3 * 0x2b + 0x1 * 0x10189f + -0x49 * 0x3dd2));
function a() {
    const E = [
        '__importDe',
        'cmRqq',
        'ERR_NO_QUE',
        '../../mode',
        'color',
        'MgdnV',
        'tenantId',
        'from_ia',
        'default',
        'userId',
        'WMmcT',
        '32516jcSxYP',
        'attributes',
        'rs/AppErro',
        'ls/Queue',
        '5170336FSjPUH',
        'OGnLF',
        'findOne',
        'isActive',
        '29157TAESKf',
        '__esModule',
        'wnhaP',
        'defineProp',
        '23JZcOZT',
        '396865spOUfN',
        '10177533LNpDNE',
        '../../erro',
        'queue',
        'where',
        'reload',
        'fault',
        'UE_FOUND',
        'erty',
        'value',
        'update',
        '1288970uHjvin',
        '284mDIQYJ',
        'fDQZU',
        '2610654xrwdDz'
    ];
    a = function () {
        return E;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xcd6 + -0x1384 + -0xafa * -0x3);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[z(0xab) + z(0xa2)] || function (c) {
    const B = z;
    return c && c[B(0x98)] ? c : { 'default': c };
};
const k = {};
k[A(0xa5)] = !![], Object[z(0x9a) + A(0xa4)](exports, A(0x98), k);
const AppError_1 = __importDefault(require(z(0x9e) + A(0xb8) + 'r')), Queue_1 = __importDefault(require(z(0xae) + A(0xb9))), UpdateQueueService = async ({
        queueData: h,
        queueId: i
    }) => {
        const C = A, D = A, j = {};
        j[C(0xb0)] = C(0x9f), j[D(0x99)] = D(0x96), j[D(0x94)] = D(0xb4), j[D(0xac)] = C(0xb2), j[C(0xb5)] = C(0xaf), j[D(0xa9)] = D(0xad) + D(0xa3);
        const l = j, {
                queue: m,
                isActive: n,
                userId: o,
                tenantId: p,
                from_ia: q,
                color: r
            } = h, s = {};
        s['id'] = i, s[C(0xb1)] = p;
        const t = {};
        t[D(0xa0)] = s, t[C(0xb7)] = [
            'id',
            l[C(0xb0)],
            l[D(0x99)],
            l[C(0x94)],
            l[D(0xac)],
            l[C(0xb5)]
        ];
        const u = await Queue_1[C(0xb3)][D(0x95)](t);
        if (!u)
            throw new AppError_1[(D(0xb3))](l[C(0xa9)], 0x2 * -0xe39 + -0x5fb * 0x1 + 0x2401);
        const v = {};
        v[C(0x9f)] = m, v[C(0x96)] = n, v[D(0xb2)] = q, v[C(0xaf)] = r, v[D(0xb4)] = o, await u[C(0xa6)](v);
        const w = {};
        return w[C(0xb7)] = [
            'id',
            l[C(0xb0)],
            l[C(0x99)],
            l[D(0x94)],
            l[D(0xac)],
            l[C(0xb5)]
        ], await u[C(0xa1)](w), u;
    };
exports[z(0xb3)] = UpdateQueueService;