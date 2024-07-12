'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x23e7 + 0x10b4 + 0x14b3);
        let h = e[f];
        return h;
    }, b(c, d);
}
const x = b, y = b;
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(v(0x197)) / (-0xe06 + -0x31 * 0x19 + 0xe * 0x158) + parseInt(w(0x1a5)) / (-0x2049 + -0xf47 * -0x1 + 0x1104) + parseInt(v(0x18e)) / (0x1812 + 0x2647 + -0x3e56) * (-parseInt(v(0x1af)) / (-0xb1e * 0x1 + 0x108 * -0xd + 0x188a)) + -parseInt(w(0x181)) / (0x4ad + 0x19aa + -0x1e52) + parseInt(w(0x196)) / (0x1c9d + -0x169 * 0x17 + 0x18 * 0x29) + -parseInt(v(0x1ac)) / (0x1ac8 + 0xc38 + -0x26f9 * 0x1) + parseInt(v(0x186)) / (-0x1e92 + -0x16bc + 0x3556);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1c3fa9 + -0x39494 + -0xa52fa));
var __importDefault = this && this[x(0x198) + y(0x1a1)] || function (c) {
    const z = x;
    return c && c[z(0x191)] ? c : { 'default': c };
};
const k = {};
k[y(0x1a4)] = !![], Object[x(0x189) + y(0x19e)](exports, y(0x191), k);
const sequelize_1 = require(y(0x195)), Queue_1 = __importDefault(require(x(0x19a) + y(0x188))), User_1 = __importDefault(require(y(0x19a) + y(0x1a3))), ListUsersService = async ({
        searchParam: searchParam = '',
        pageNumber: pageNumber = '1',
        tenantId: g
    }) => {
        const A = x, B = y, h = {};
        h[A(0x192)] = B(0x18d), h[B(0x185)] = B(0x1ad), h[B(0x19d)] = B(0x180), h[B(0x19b)] = function (t, u) {
            return t * u;
        }, h[A(0x182)] = function (t, u) {
            return t - u;
        }, h[B(0x1b2)] = B(0x190), h[B(0x1a2)] = A(0x184), h[B(0x19f)] = B(0x18f), h[A(0x194)] = B(0x1aa), h[B(0x199)] = function (t, u) {
            return t > u;
        }, h[A(0x1b5)] = function (t, u) {
            return t + u;
        };
        const i = h, j = {
                'tenantId': g,
                [sequelize_1['Op']['or']]: [
                    { 'name': sequelize_1[A(0x18b)][A(0x18a)](sequelize_1[B(0x18b)]['fn'](i[B(0x192)], sequelize_1[B(0x18b)][B(0x187)](i[A(0x185)])), i[B(0x19d)], '%' + searchParam[B(0x1b6) + 'e']() + '%') },
                    { 'email': { [sequelize_1['Op'][A(0x1a7)]]: '%' + searchParam[A(0x1b6) + 'e']() + '%' } }
                ]
            }, l = -0xf2d + 0x24d9 + 0x11 * -0x144, m = i[B(0x19b)](l, i[B(0x182)](+pageNumber, -0x26e6 + -0xfef * 0x2 + 0x46c5)), n = {};
        n[A(0x1b1)] = Queue_1[B(0x1b4)], n[A(0x1a8)] = [
            'id',
            i[A(0x1b2)]
        ];
        const o = {};
        o[A(0x18a)] = j, o[A(0x1ae)] = [n], o[B(0x1a8)] = [
            i[B(0x185)],
            'id',
            i[B(0x1a2)],
            i[B(0x19f)]
        ], o[A(0x1a6)] = l, o[B(0x1b3)] = m, o[B(0x183)] = !![], o[B(0x193)] = [[
                i[B(0x185)],
                i[B(0x194)]
            ]];
        const {
                count: p,
                rows: q
            } = await User_1[A(0x1b4)][A(0x1b0) + A(0x1ab)](o), r = i[B(0x199)](p, i[B(0x1b5)](m, q[B(0x1a0)])), s = {};
        return s[A(0x1a9)] = q, s[B(0x19c)] = p, s[B(0x18c)] = r, s;
    };
exports[y(0x1b4)] = ListUsersService;
function a() {
    const C = [
        'LOWER',
        '54321KizIuZ',
        'profile',
        'queue',
        '__esModule',
        'JfzfG',
        'order',
        'OEPFW',
        'sequelize',
        '2150754XmhwVe',
        '321598JAYAXY',
        '__importDe',
        'UQwht',
        '../../mode',
        'DKkOD',
        'count',
        'qbqqG',
        'erty',
        'ABXMW',
        'length',
        'fault',
        'rxDhr',
        'ls/User',
        'value',
        '2369142eAUaBd',
        'limit',
        'like',
        'attributes',
        'users',
        'ASC',
        'ntAll',
        '5643162zVPgiF',
        'name',
        'include',
        '232JnAKxD',
        'findAndCou',
        'model',
        'RwOei',
        'offset',
        'default',
        'CEhOa',
        'toLowerCas',
        'LIKE',
        '4102515qIvcah',
        'FJbOu',
        'distinct',
        'email',
        'kgWlv',
        '14018448IxPewl',
        'col',
        'ls/Queue',
        'defineProp',
        'where',
        'Sequelize',
        'hasMore'
    ];
    a = function () {
        return C;
    };
    return a();
}