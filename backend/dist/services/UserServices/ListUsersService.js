'use strict';
const x = b, y = b;
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(v(0xe9)) / (0x1564 + 0x24ad + -0x3a10) * (-parseInt(v(0xc0)) / (0x12c9 + 0x20c1 + 0x88 * -0x61)) + parseInt(v(0xe8)) / (0x5 * -0xba + 0x2 * 0x1369 + -0x709 * 0x5) + parseInt(v(0xf0)) / (0x2062 + -0x2486 + 0x428) + parseInt(w(0xe0)) / (-0x2583 + 0x132 * -0x18 + 0x4238) * (parseInt(w(0xc4)) / (-0x1bab + -0x174d + 0x1 * 0x32fe)) + -parseInt(v(0xc2)) / (0x1 * 0x1296 + 0x17eb + -0x2a7a) + parseInt(w(0xd1)) / (0x1fd * -0x8 + -0x39c + 0x9c6 * 0x2) * (parseInt(w(0xe4)) / (0x1efd + 0x0 + -0xe * 0x236)) + -parseInt(v(0xc5)) / (0x1352 + 0x1ca9 + -0xffb * 0x3);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xad * 0x8ed + 0xd047b + 0x1 * 0xbd73));
var __importDefault = this && this[x(0xed) + x(0xda)] || function (c) {
    const z = y;
    return c && c[z(0xc1)] ? c : { 'default': c };
};
function a() {
    const C = [
        'zNZdY',
        'default',
        'BfWuO',
        'order',
        'fault',
        'email',
        'sKFlU',
        'Gvsne',
        'users',
        'Cbeca',
        '332705yIcvQH',
        'KUSmW',
        'name',
        'value',
        '2570985aIolPZ',
        'erty',
        'model',
        'ntAll',
        '1712163AqiAQt',
        '1006uCaCYy',
        'where',
        'col',
        'ASC',
        '__importDe',
        'offset',
        'include',
        '2381436vTcwJJ',
        'findAndCou',
        'limit',
        '../../mode',
        'LFjBY',
        'hasMore',
        'LOWER',
        'like',
        'rZBIN',
        '1916QQMubA',
        '__esModule',
        '899514tMJNIl',
        'toLowerCas',
        '12TicGyL',
        '19137640WRGqVM',
        'rjRwW',
        'xUyib',
        'Sequelize',
        'ls/User',
        'queue',
        'profile',
        'distinct',
        'attributes',
        'sequelize',
        'count',
        'LIKE',
        '8djYyYL',
        'length',
        'ls/Queue',
        'defineProp',
        'kybfh'
    ];
    a = function () {
        return C;
    };
    return a();
}
const k = {};
k[y(0xe3)] = !![], Object[y(0xd4) + x(0xe5)](exports, x(0xc1), k);
const sequelize_1 = require(y(0xce)), Queue_1 = __importDefault(require(y(0xf3) + y(0xd3))), User_1 = __importDefault(require(x(0xf3) + x(0xc9))), ListUsersService = async ({
        searchParam: searchParam = '',
        pageNumber: pageNumber = '1',
        tenantId: g
    }) => {
        const A = y, B = y, h = {};
        h[A(0xdd)] = A(0xf6), h[A(0xc7)] = A(0xe2), h[A(0xc6)] = B(0xd0), h[B(0xf4)] = function (t, u) {
            return t * u;
        }, h[A(0xe1)] = function (t, u) {
            return t - u;
        }, h[A(0xd6)] = B(0xca), h[B(0xdc)] = B(0xdb), h[B(0xd8)] = A(0xcb), h[B(0xd5)] = A(0xec), h[A(0xdf)] = function (t, u) {
            return t > u;
        }, h[A(0xf8)] = function (t, u) {
            return t + u;
        };
        const i = h, j = {
                'tenantId': g,
                [sequelize_1['Op']['or']]: [
                    { 'name': sequelize_1[A(0xc8)][B(0xea)](sequelize_1[A(0xc8)]['fn'](i[A(0xdd)], sequelize_1[A(0xc8)][B(0xeb)](i[B(0xc7)])), i[A(0xc6)], '%' + searchParam[B(0xc3) + 'e']() + '%') },
                    { 'email': { [sequelize_1['Op'][B(0xf7)]]: '%' + searchParam[A(0xc3) + 'e']() + '%' } }
                ]
            }, l = -0x71c + -0x1c60 + 0x4 * 0x8e9, m = i[B(0xf4)](l, i[B(0xe1)](+pageNumber, 0xf38 + 0x1163 * 0x1 + 0x209a * -0x1)), n = {};
        n[B(0xe6)] = Queue_1[B(0xd7)], n[B(0xcd)] = [
            'id',
            i[B(0xd6)]
        ];
        const o = {};
        o[B(0xea)] = j, o[A(0xef)] = [n], o[B(0xcd)] = [
            i[A(0xc7)],
            'id',
            i[B(0xdc)],
            i[B(0xd8)]
        ], o[B(0xf2)] = l, o[A(0xee)] = m, o[B(0xcc)] = !![], o[A(0xd9)] = [[
                i[B(0xc7)],
                i[A(0xd5)]
            ]];
        const {
                count: p,
                rows: q
            } = await User_1[A(0xd7)][B(0xf1) + B(0xe7)](o), r = i[A(0xdf)](p, i[B(0xf8)](m, q[A(0xd2)])), s = {};
        return s[B(0xde)] = q, s[B(0xcf)] = p, s[B(0xf5)] = r, s;
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xea6 + -0x6f * -0x43 + -0x2bb * 0x5);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[y(0xd7)] = ListUsersService;