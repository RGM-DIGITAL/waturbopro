'use strict';
function a() {
    const z = [
        'MvXkv',
        'title',
        'length',
        'ls/Help',
        'IfaYM',
        'HtuMl',
        '../../mode',
        'limit',
        'value',
        'where',
        '10lOcLQb',
        'Sequelize',
        '8qRYmhH',
        'hasMore',
        '203146fbufPM',
        'offset',
        '8WvQYaS',
        'fault',
        'default',
        '1966594FLtRSo',
        'LOWER',
        'WCMxO',
        'col',
        '132UidTBB',
        'erty',
        'ntAll',
        'LIKE',
        '3900853rKNmCr',
        'sequelize',
        'PEFkv',
        '1150881MQmEeY',
        'trim',
        'ASC',
        '__importDe',
        'QUNsC',
        'order',
        '8614584cqcVNF',
        '2bzNBoA',
        'defineProp',
        '2113813dreBeu',
        'toLowerCas',
        '__esModule',
        'count',
        'zEKwA',
        '970NQqThz',
        'records',
        'DrFlK',
        '25278ZoTnzE',
        'findAndCou'
    ];
    a = function () {
        return z;
    };
    return a();
}
const u = b, v = b;
(function (c, d) {
    const s = b, t = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(s(0xba)) / (0x22dd + -0xa9 * 0x29 + -0x39 * 0x23) * (parseInt(s(0xa0)) / (0x23da + 0x1aa5 + -0x3e7d)) + parseInt(s(0x99)) / (0x9 * 0x29d + 0x1d4e + -0x34d0) * (parseInt(s(0xbc)) / (0x2 * 0x10a3 + -0x705 + -0x1a3d * 0x1)) + -parseInt(s(0xa7)) / (-0x11f3 + 0xa64 * 0x1 + 0x794 * 0x1) * (parseInt(s(0xaa)) / (0x821 * -0x1 + -0x162e + -0x5 * -0x611)) + -parseInt(t(0xbf)) / (0x4fd + -0x2157 + 0x1c61) * (-parseInt(s(0xb8)) / (-0x1b36 + 0x735 + -0x1 * -0x1409)) + -parseInt(t(0x9f)) / (-0x5c0 + -0xe * 0x26 + 0x7dd) + parseInt(t(0xb6)) / (0x18fb + 0x1 * -0x2349 + 0xa58) * (-parseInt(s(0x96)) / (0x1bde + 0xfb7 + -0x2b8a)) + -parseInt(t(0x92)) / (0x63b + -0xaf0 + -0x4c1 * -0x1) * (-parseInt(s(0xa2)) / (0x1b6d + 0x1 * 0xd87 + -0x28e7));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x8d546 + 0x144cf + 0xf4353));
var __importDefault = this && this[u(0x9c) + u(0xbd)] || function (c) {
    const w = u;
    return c && c[w(0xa4)] ? c : { 'default': c };
};
const k = {};
k[u(0xb4)] = !![], Object[u(0xa1) + u(0x93)](exports, v(0xa4), k);
const sequelize_1 = require(u(0x97)), Help_1 = __importDefault(require(u(0xb2) + v(0xaf))), ListService = async ({
        searchParam: searchParam = '',
        pageNumber: pageNumber = '1'
    }) => {
        const x = u, y = u, f = {};
        f[x(0xb1)] = x(0x8f), f[y(0xac)] = y(0xad), f[x(0x98)] = y(0x95), f[y(0xb0)] = function (q, r) {
            return q * r;
        }, f[x(0x9d)] = function (q, r) {
            return q - r;
        }, f[y(0xa9)] = y(0x9b), f[y(0x90)] = function (q, r) {
            return q > r;
        }, f[y(0xa6)] = function (q, r) {
            return q + r;
        };
        const g = f, h = { [sequelize_1['Op']['or']]: [{ 'title': sequelize_1[y(0xb7)][x(0xb5)](sequelize_1[y(0xb7)]['fn'](g[x(0xb1)], sequelize_1[y(0xb7)][x(0x91)](g[y(0xac)])), g[y(0x98)], '%' + searchParam[x(0xa3) + 'e']()[y(0x9a)]() + '%') }] }, i = 0x1268 + -0x2e * 0x42 + 0x17 * -0x48, j = g[x(0xb0)](i, g[y(0x9d)](+pageNumber, 0x1718 + 0x229 + -0x1940)), l = {};
        l[x(0xb5)] = h, l[y(0xb3)] = i, l[x(0xbb)] = j, l[y(0x9e)] = [[
                g[y(0xac)],
                g[x(0xa9)]
            ]];
        const {
                count: m,
                rows: n
            } = await Help_1[y(0xbe)][y(0xab) + x(0x94)](l), o = g[y(0x90)](m, g[x(0xa6)](j, n[x(0xae)])), p = {};
        return p[x(0xa8)] = n, p[y(0xa5)] = m, p[y(0xb9)] = o, p;
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x99 * 0x1 + 0x1ede + 0xedb * -0x2);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[v(0xbe)] = ListService;