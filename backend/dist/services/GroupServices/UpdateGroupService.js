'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xca3 + -0xc2d + 0x24);
        let h = e[f];
        return h;
    }, b(c, d);
}
const x = b, y = b;
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(v(0xb6)) / (-0x105c + -0x4b0 + 0x150d) + -parseInt(v(0xb1)) / (-0x184e + 0x18c8 + -0x78) * (parseInt(v(0xbb)) / (0x2205 + -0xc65 + -0x159d)) + -parseInt(w(0xa5)) / (-0x47 * 0x36 + 0x11cc + 0x1 * -0x2ce) + -parseInt(v(0x9a)) / (-0x217b + -0x2151 + 0x42d1) * (parseInt(w(0xac)) / (-0x241c + 0x22e0 + 0x2e * 0x7)) + parseInt(v(0xb0)) / (-0x14a7 + 0x1d8a + -0x8dc) + parseInt(v(0xae)) / (0xad * 0x24 + -0x2 * -0x1041 + -0x38ce) + parseInt(w(0xa0)) / (-0x5 * -0x399 + -0x8ae + 0x2 * -0x4a3) * (parseInt(w(0xa3)) / (0x7 * 0x7a + 0x5e8 + -0x934));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xc14aa + 0x874e0 + -0x59db2));
var __importDefault = this && this[x(0xbc) + x(0xb5)] || function (c) {
    const z = x;
    return c && c[z(0xaf)] ? c : { 'default': c };
};
const k = {};
k[x(0xb2)] = !![], Object[y(0xa8) + y(0xab)](exports, x(0xaf), k);
const AppError_1 = __importDefault(require(x(0xb3) + y(0x9e) + 'r')), Group_1 = __importDefault(require(x(0x9f) + y(0xa2))), UpdateGroupService = async ({
        groupData: h,
        groupId: i
    }) => {
        const A = x, B = x, j = {};
        j[A(0xa4)] = A(0xa1), j[A(0xaa)] = B(0xbd), j[B(0xb8)] = B(0xba), j[A(0xb7)] = A(0x9c) + B(0xb9);
        const l = j, {
                group: m,
                isActive: n,
                userId: o,
                tenantId: p
            } = h, q = {};
        q['id'] = i, q[A(0xa7)] = p;
        const r = {};
        r[B(0x9b)] = q, r[B(0xa6)] = [
            'id',
            l[B(0xa4)],
            l[A(0xaa)],
            l[A(0xb8)]
        ];
        const s = await Group_1[B(0xb4)][A(0xad)](r);
        if (!s)
            throw new AppError_1[(B(0xb4))](l[B(0xb7)], 0x208b + 0x6bb + -0x2 * 0x12d9);
        const t = {};
        t[A(0xa1)] = m, t[A(0xbd)] = n, t[A(0xba)] = o, await s[B(0xa9)](t);
        const u = {};
        return u[B(0xa6)] = [
            'id',
            l[B(0xa4)],
            l[B(0xaa)],
            l[A(0xb8)]
        ], await s[A(0x9d)](u), s;
    };
function a() {
    const C = [
        '3679095SAGKBL',
        '466RGNLIw',
        'value',
        '../../erro',
        'default',
        'fault',
        '1461655PTeEpb',
        'rSzdJ',
        'FSuGR',
        'UP_FOUND',
        'userId',
        '10626jWjCeU',
        '__importDe',
        'isActive',
        '135AZIHiD',
        'where',
        'ERR_NO_GRO',
        'reload',
        'rs/AppErro',
        '../../mode',
        '21456243kvGMlC',
        'group',
        'ls/Group',
        '20slPTLe',
        'BYjfM',
        '5044780lFbFUs',
        'attributes',
        'tenantId',
        'defineProp',
        'update',
        'RAkPk',
        'erty',
        '369882JKhsNk',
        'findOne',
        '7174768lAukNk',
        '__esModule'
    ];
    a = function () {
        return C;
    };
    return a();
}
exports[y(0xb4)] = UpdateGroupService;