'use strict';
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(i(0x1e7)) / (0xcd * -0x2a + -0x1 * -0x1ec1 + 0x12 * 0x29) * (-parseInt(j(0x1ed)) / (0x1db + 0x610 + -0x7e9)) + -parseInt(j(0x1f2)) / (0x13 * 0x49 + -0x15fe + 0x1096) + parseInt(i(0x1e8)) / (-0xa39 * -0x2 + 0x2345 * 0x1 + -0x37b3) + -parseInt(i(0x1e6)) / (0x5 * 0x125 + -0x15a1 + 0xfed) * (parseInt(i(0x1ea)) / (0x921 + -0x1f1 * 0x14 + 0x1db9)) + parseInt(i(0x1e4)) / (-0xc * -0x1df + 0x1085 + 0x1379 * -0x2) * (parseInt(i(0x1dc)) / (-0x1537 + 0x252a * 0x1 + 0x1 * -0xfeb)) + parseInt(j(0x1d7)) / (-0x86 * -0x4 + 0x1958 * -0x1 + -0x3 * -0x7c3) + -parseInt(i(0x1df)) / (-0xd * -0x107 + -0x26da + -0x1 * -0x1989) * (-parseInt(i(0x1ec)) / (-0xad * -0x1 + 0x23e9 + -0x248b));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, 0x9 * -0xb147 + 0xacf02 + 0x1 * 0x31cc3));
function a() {
    const q = [
        'hULtX',
        'Users',
        '5695362LlzoAR',
        'sequelize',
        'CASCADE',
        'SET\x20NULL',
        'tkEOf',
        '520wjOihF',
        'dlZnd',
        'MZFNY',
        '30iUZkKO',
        'DataTypes',
        'INTEGER',
        'userId',
        'defineProp',
        '87773PuRQIZ',
        'tJjpe',
        '10EdIGiK',
        '2857LdIbiC',
        '3624344CZOZCf',
        'addColumn',
        '2494716VqkurE',
        'exports',
        '1430451ipJxPp',
        '502lNrKsA',
        'removeColu',
        'value',
        '__esModule',
        'lEZFM',
        '2074515yEysVO',
        'mHdJi',
        'erty',
        'Messages'
    ];
    a = function () {
        return q;
    };
    return a();
}
const g = {};
g[k(0x1ef)] = !![], Object[k(0x1e3) + l(0x1f4)](exports, l(0x1f0), g);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x355 + -0x224 * -0xa + -0x16e7);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(k(0x1d8));
module[k(0x1eb)] = {
    'up': d => {
        const m = k, n = l, e = {};
        e[m(0x1f3)] = m(0x1f5), e[n(0x1f1)] = m(0x1e2), e[n(0x1de)] = m(0x1d6), e[m(0x1f6)] = n(0x1d9), e[n(0x1dd)] = n(0x1da);
        const f = e;
        return d[m(0x1e9)](f[n(0x1f3)], f[m(0x1f1)], {
            'type': sequelize_1[n(0x1e0)][n(0x1e1)],
            'references': {
                'model': f[n(0x1de)],
                'key': 'id'
            },
            'onUpdate': f[n(0x1f6)],
            'onDelete': f[m(0x1dd)],
            'allowNull': !![],
            'defaultValue': null
        });
    },
    'down': d => {
        const o = k, p = l, e = {};
        e[o(0x1e5)] = p(0x1f5), e[o(0x1db)] = p(0x1e2);
        const f = e;
        return d[o(0x1ee) + 'mn'](f[o(0x1e5)], f[p(0x1db)]);
    }
};