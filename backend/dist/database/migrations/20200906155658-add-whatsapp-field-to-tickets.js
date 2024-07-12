'use strict';
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(i(0xe6)) / (0x20ff + 0x1 * -0x2431 + 0x333) * (parseInt(j(0xee)) / (0x2095 + 0x2661 * -0x1 + 0x5ce)) + parseInt(i(0xec)) / (-0x1bf9 + -0x1 * -0x1ee9 + 0x7 * -0x6b) + parseInt(i(0xd6)) / (-0x1380 + -0x1ccd + 0x15 * 0x24d) * (parseInt(j(0xe4)) / (-0x133d + -0x2525 + 0x3867)) + parseInt(i(0xea)) / (0x241 + 0x1 * -0xc68 + 0xa2d) + parseInt(j(0xd4)) / (0xb4 * -0xb + 0x2653 + -0x1 * 0x1e90) + -parseInt(i(0xd9)) / (0x2018 + 0x2247 * -0x1 + 0x237) * (-parseInt(i(0xed)) / (-0x10a9 + -0xdd1 + 0x1e83)) + -parseInt(i(0xdf)) / (0x1 * -0xf1a + -0x1068 + -0x7e3 * -0x4) * (parseInt(j(0xdb)) / (0x1 * 0x1bf4 + 0xa * -0x245 + -0x537 * 0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, 0x49a89 + 0x4a45f + 0x14cba * -0x3));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1ac6 + 0x2c * 0x80 + -0x2cb * -0x2);
        let h = e[f];
        return h;
    }, b(c, d);
}
const g = {};
function a() {
    const q = [
        'addColumn',
        '5FTxzds',
        'fzZzJ',
        '8492WqSUEz',
        'INTEGER',
        '__esModule',
        'DataTypes',
        '1094076mOhdhA',
        'defineProp',
        '17643vHnEYy',
        '65043rbRHbF',
        '142zDhTVt',
        'erty',
        'vaarR',
        'btsuk',
        'Tickets',
        'CASCADE',
        'whatsappId',
        '431830lRQCyq',
        'wZPei',
        '2322476udkWqZ',
        'BLyhX',
        'sequelize',
        '416TJeABu',
        'value',
        '16047658xyQHQj',
        'removeColu',
        'LppSU',
        'Whatsapps',
        '10PHyNzK',
        'egANV',
        'exports',
        'SET\x20NULL'
    ];
    a = function () {
        return q;
    };
    return a();
}
g[k(0xda)] = !![], Object[l(0xeb) + l(0xef)](exports, k(0xe8), g);
const sequelize_1 = require(k(0xd8));
module[k(0xe1)] = {
    'up': d => {
        const m = k, n = l, e = {};
        e[m(0xe5)] = n(0xd1), e[n(0xd5)] = n(0xd3), e[m(0xe0)] = m(0xde), e[n(0xd7)] = n(0xd2), e[m(0xdd)] = n(0xe2);
        const f = e;
        return d[m(0xe3)](f[n(0xe5)], f[m(0xd5)], {
            'type': sequelize_1[n(0xe9)][n(0xe7)],
            'references': {
                'model': f[n(0xe0)],
                'key': 'id'
            },
            'onUpdate': f[m(0xd7)],
            'onDelete': f[m(0xdd)]
        });
    },
    'down': d => {
        const o = l, p = l, e = {};
        e[o(0xf0)] = o(0xd1), e[o(0xd0)] = o(0xd3);
        const f = e;
        return d[o(0xdc) + 'mn'](f[p(0xf0)], f[p(0xd0)]);
    }
};