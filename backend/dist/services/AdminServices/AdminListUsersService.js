'use strict';
const y = b, z = b;
function a() {
    const D = [
        'OFxqI',
        'toLowerCas',
        'MVQKY',
        'ls/Queue',
        '../../mode',
        'users',
        'PSjSh',
        'User.name',
        '257233QNBvsT',
        '__esModule',
        'LOWER',
        'JKWMk',
        '3000270Ypoisg',
        'findAndCou',
        'profile',
        'VEydU',
        'LIKE',
        'offset',
        'length',
        'MeYLo',
        'aAStO',
        'email',
        'queue',
        'order',
        'sequelize',
        'ls/User',
        'value',
        '607746TfpSHA',
        'model',
        'VItBz',
        '315308ZSrVOq',
        'sobuP',
        '19098uGfdxP',
        'limit',
        'defineProp',
        'name',
        'where',
        'default',
        '120392wHdGyR',
        '__importDe',
        'Sequelize',
        'ASC',
        'include',
        'col',
        'distinct',
        'hasMore',
        '489556fdFnmw',
        'ntAll',
        'LJvlg',
        '511ssWuGY',
        'erty',
        'UyOlL',
        'Ozykg',
        'ls/Tenant',
        'count',
        'attributes',
        'fault',
        '50mjJuLb',
        'like',
        '3050kGpmTI'
    ];
    a = function () {
        return D;
    };
    return a();
}
(function (c, d) {
    const w = b, x = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(w(0x1d3)) / (-0x16a2 + -0x26 * 0x49 + 0x2179) + -parseInt(w(0x1e9)) / (-0x1 * -0x1e8a + -0x100b + -0xe7d) + -parseInt(w(0x1d7)) / (-0x22ea + -0x1a88 + 0x3d75 * 0x1) + -parseInt(w(0x1bd)) / (-0x13ef + 0x1e7 + 0x120c) * (-parseInt(x(0x1c8)) / (-0x19bd + 0x1b4f + -0x1 * 0x18d)) + -parseInt(x(0x1e6)) / (0x1 * -0x2339 + 0x82f + 0x1b10) + parseInt(x(0x1c0)) / (-0xfdd * -0x1 + -0x1a43 + 0xa6d) * (parseInt(x(0x1b5)) / (-0x16e + -0x105c * 0x1 + 0x11d2)) + parseInt(w(0x1af)) / (0x298 * 0xb + -0x7 * 0x10d + -0x1524) * (-parseInt(x(0x1ca)) / (0xfe7 * 0x1 + -0xf * -0x25f + 0x1c6 * -0x1d));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x3b84a + 0x133173 + -0x5327a));
var __importDefault = this && this[y(0x1b6) + y(0x1c7)] || function (c) {
    const A = y;
    return c && c[A(0x1d4)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x89 * 0x11 + -0x19c3 + 0x248a);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[z(0x1e5)] = !![], Object[y(0x1b1) + z(0x1c1)](exports, z(0x1d4), k);
const sequelize_1 = require(z(0x1e3)), Queue_1 = __importDefault(require(y(0x1cf) + y(0x1ce))), Tenant_1 = __importDefault(require(z(0x1cf) + z(0x1c4))), User_1 = __importDefault(require(z(0x1cf) + y(0x1e4))), AdminListUsersService = async ({
        searchParam: searchParam = '',
        pageNumber: pageNumber = '1'
    }) => {
        const B = y, C = y, h = {};
        h[B(0x1cd)] = C(0x1d5), h[B(0x1ae)] = B(0x1d2), h[C(0x1d6)] = C(0x1db), h[B(0x1de)] = function (u, v) {
            return u * v;
        }, h[B(0x1bf)] = function (u, v) {
            return u - v;
        }, h[C(0x1e8)] = B(0x1e1), h[B(0x1c2)] = B(0x1b2), h[B(0x1cb)] = C(0x1e0), h[C(0x1da)] = B(0x1d9), h[C(0x1df)] = B(0x1b8), h[C(0x1c3)] = function (u, v) {
            return u > v;
        }, h[B(0x1d1)] = function (u, v) {
            return u + v;
        };
        const i = h, j = {
                [sequelize_1['Op']['or']]: [
                    { 'name': sequelize_1[B(0x1b7)][C(0x1b3)](sequelize_1[B(0x1b7)]['fn'](i[C(0x1cd)], sequelize_1[C(0x1b7)][B(0x1ba)](i[B(0x1ae)])), i[C(0x1d6)], '%' + searchParam[C(0x1cc) + 'e']() + '%') },
                    { 'email': { [sequelize_1['Op'][C(0x1c9)]]: '%' + searchParam[B(0x1cc) + 'e']() + '%' } }
                ]
            }, l = 0x7cb + -0x2201 + 0x1a5e, m = i[B(0x1de)](l, i[B(0x1bf)](+pageNumber, -0xc * -0x1eb + -0x141f + -0x2e4)), n = {};
        n[B(0x1e7)] = Queue_1[B(0x1b4)], n[B(0x1c6)] = [
            'id',
            i[B(0x1e8)]
        ];
        const o = {};
        o[B(0x1e7)] = Tenant_1[C(0x1b4)], o[C(0x1c6)] = [
            'id',
            i[B(0x1c2)]
        ];
        const p = {};
        p[B(0x1b3)] = j, p[B(0x1b9)] = [
            n,
            o
        ], p[B(0x1c6)] = [
            i[B(0x1c2)],
            'id',
            i[B(0x1cb)],
            i[C(0x1da)]
        ], p[C(0x1b0)] = l, p[C(0x1dc)] = m, p[B(0x1bb)] = !![], p[B(0x1e2)] = [[
                i[B(0x1c2)],
                i[C(0x1df)]
            ]];
        const {
                count: q,
                rows: r
            } = await User_1[B(0x1b4)][C(0x1d8) + B(0x1be)](p), s = i[C(0x1c3)](q, i[B(0x1d1)](m, r[C(0x1dd)])), t = {};
        return t[C(0x1d0)] = r, t[C(0x1c5)] = q, t[B(0x1bc)] = s, t;
    };
exports[z(0x1b4)] = AdminListUsersService;