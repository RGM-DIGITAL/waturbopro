'use strict';
function a() {
    const D = [
        'count',
        'model',
        '6uGmAuC',
        'value',
        'LIKE',
        'length',
        'uamUT',
        '../../mode',
        'profile',
        'users',
        '4311uCGLTG',
        'User.name',
        'findAndCou',
        'attributes',
        'email',
        'limit',
        'vNKXm',
        'VvCeE',
        'wseGC',
        '1237750Aeanxx',
        'gDCCl',
        '416588TLvMUN',
        '__importDe',
        'GeMov',
        'ntAll',
        'toLowerCas',
        'like',
        'default',
        'name',
        'fjyte',
        'ls/Queue',
        'include',
        'Vwszj',
        'erty',
        '6608vZTVPw',
        'fault',
        'ls/Tenant',
        'ls/User',
        'kuXXU',
        'dRRDU',
        '129717aQBVTK',
        'tQvTY',
        'where',
        'col',
        'UIHSM',
        'defineProp',
        'queue',
        'Sequelize',
        '344036JXHGEm',
        'LOWER',
        'sequelize',
        'ASC',
        '249076BhxDMx',
        'offset',
        '117680xviNxQ',
        'hasMore',
        'distinct',
        '__esModule',
        'order'
    ];
    a = function () {
        return D;
    };
    return a();
}
const y = b, z = b;
(function (c, d) {
    const w = b, x = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(w(0xed)) / (0xd06 + -0x1c3a + 0xe5 * 0x11) + -parseInt(x(0xef)) / (-0x2602 + 0x5b1 + -0x14b * -0x19) + parseInt(w(0xe1)) / (0x14a7 + 0xe60 + -0x2304) + parseInt(x(0x109)) / (0xa2 * 0x7 + -0x1 * -0x171f + -0x1 * 0x1b89) + parseInt(w(0x107)) / (-0x1301 + 0x2253 + -0xf4d) + -parseInt(x(0xf6)) / (0x2611 + 0x2496 + -0x4aa1) * (parseInt(x(0xe9)) / (-0x2127 + -0x1 * 0x1e71 + 0x3f9f * 0x1)) + parseInt(w(0xdb)) / (0x20 * 0xb + 0x565 * 0x1 + 0xf * -0x73) * (-parseInt(w(0xfe)) / (0xcf * 0x12 + -0x1 * 0x1e17 + 0xf92 * 0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * -0x2620b + 0xa6cf * 0x1 + -0x19c * 0x8e));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x411 * -0x3 + -0x3b * -0x83 + -0x1 * 0x298c);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[y(0x10a) + z(0xdc)] || function (c) {
    const A = z;
    return c && c[A(0xf2)] ? c : { 'default': c };
};
const k = {};
k[y(0xf7)] = !![], Object[y(0xe6) + y(0xda)](exports, z(0xf2), k);
const sequelize_1 = require(y(0xeb)), Queue_1 = __importDefault(require(z(0xfb) + y(0x112))), Tenant_1 = __importDefault(require(z(0xfb) + y(0xdd))), User_1 = __importDefault(require(z(0xfb) + z(0xde))), AdminListUsersService = async ({
        searchParam: searchParam = '',
        pageNumber: pageNumber = '1'
    }) => {
        const B = z, C = y, h = {};
        h[B(0xfa)] = C(0xea), h[C(0x104)] = C(0xff), h[C(0xdf)] = C(0xf8), h[B(0x105)] = function (u, v) {
            return u * v;
        }, h[C(0x108)] = function (u, v) {
            return u - v;
        }, h[B(0xe0)] = B(0xe7), h[B(0xe2)] = B(0x110), h[C(0x10b)] = B(0x102), h[B(0x111)] = C(0xfc), h[C(0xe5)] = C(0xec), h[C(0xd9)] = function (u, v) {
            return u > v;
        }, h[B(0x106)] = function (u, v) {
            return u + v;
        };
        const i = h, j = {
                [sequelize_1['Op']['or']]: [
                    { 'name': sequelize_1[C(0xe8)][B(0xe3)](sequelize_1[B(0xe8)]['fn'](i[B(0xfa)], sequelize_1[C(0xe8)][B(0xe4)](i[C(0x104)])), i[C(0xdf)], '%' + searchParam[B(0x10d) + 'e']() + '%') },
                    { 'email': { [sequelize_1['Op'][B(0x10e)]]: '%' + searchParam[C(0x10d) + 'e']() + '%' } }
                ]
            }, l = 0x17c * -0xb + 0xd4f + 0x32d, m = i[B(0x105)](l, i[C(0x108)](+pageNumber, 0x499 + 0x2221 + -0x17 * 0x1af)), n = {};
        n[B(0xf5)] = Queue_1[C(0x10f)], n[B(0x101)] = [
            'id',
            i[C(0xe0)]
        ];
        const o = {};
        o[B(0xf5)] = Tenant_1[C(0x10f)], o[B(0x101)] = [
            'id',
            i[B(0xe2)]
        ];
        const p = {};
        p[C(0xe3)] = j, p[B(0xd8)] = [
            n,
            o
        ], p[C(0x101)] = [
            i[B(0xe2)],
            'id',
            i[B(0x10b)],
            i[C(0x111)]
        ], p[C(0x103)] = l, p[C(0xee)] = m, p[B(0xf1)] = !![], p[B(0xf3)] = [[
                i[C(0xe2)],
                i[B(0xe5)]
            ]];
        const {
                count: q,
                rows: r
            } = await User_1[B(0x10f)][B(0x100) + C(0x10c)](p), s = i[B(0xd9)](q, i[B(0x106)](m, r[C(0xf9)])), t = {};
        return t[C(0xfd)] = r, t[B(0xf4)] = q, t[C(0xf0)] = s, t;
    };
exports[y(0x10f)] = AdminListUsersService;