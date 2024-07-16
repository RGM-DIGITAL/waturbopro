'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0xdc)) / (-0x1882 * -0x1 + -0x1132 + -0x74f) + -parseInt(m(0xde)) / (-0x24eb * 0x1 + 0xe71 * 0x2 + -0x80b * -0x1) + parseInt(m(0xe4)) / (0x1ee3 + 0x8b * -0x4 + -0x1 * 0x1cb4) * (parseInt(l(0xd8)) / (-0x10 * 0xb2 + 0x1 * 0xd8d + -0x269)) + -parseInt(m(0xd3)) / (0x19 * -0x77 + -0x1 * 0x205f + 0x2c03) + parseInt(l(0xda)) / (-0x2 * 0xc5 + -0x63f + -0x1 * -0x7cf) + parseInt(m(0xe2)) / (-0x968 + -0x25cf + 0x1 * 0x2f3e) * (-parseInt(m(0xdd)) / (0xf1 + -0x32 * -0x14 + -0x1 * 0x4d1)) + -parseInt(m(0xdf)) / (0x78b * -0x4 + 0xf12 + 0xf23) * (-parseInt(m(0xe3)) / (0x8fc + 0x2287 + 0x2b79 * -0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1168e + 0x1127c + -0x1 * 0x3224));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xf51 * -0x1 + -0x123a + 0xd * 0x49);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[n(0xcf)] = !![], Object[o(0xeb) + n(0xd2)](exports, n(0xdb), k);
function a() {
    const t = [
        'nerId_fkey',
        '246000FXtnAi',
        '__esModule',
        '182635heVYhv',
        '1071664aVbuDk',
        '119502oVXbKA',
        '66762HqMNmd',
        'traint',
        'aPURq',
        '7IORZIK',
        '420xytbEL',
        '220137lxYorg',
        'zuHhC',
        'Tenants',
        'INTEGER',
        'CASCADE',
        'removeCons',
        'IBhIh',
        'defineProp',
        'sequelize',
        'changeColu',
        'DataTypes',
        'all',
        'fxKqo',
        'value',
        'ownerId',
        'QlgIs',
        'erty',
        '338035guwYaL',
        'pLpom',
        'jAUel',
        'Tenants_ow',
        'exports',
        '12PUoGom'
    ];
    a = function () {
        return t;
    };
    return a();
}
const sequelize_1 = require(n(0xec));
module[n(0xd7)] = {
    'up': d => {
        const p = o, q = o, e = {};
        e[p(0xea)] = p(0xe6), e[p(0xd1)] = q(0xd6) + p(0xd9), e[q(0xd4)] = q(0xd0), e[q(0xe5)] = q(0xe8);
        const f = e;
        return Promise[p(0xcd)]([
            d[p(0xe9) + q(0xe0)](f[p(0xea)], f[q(0xd1)]),
            d[q(0xed) + 'mn'](f[q(0xea)], f[q(0xd4)], {
                'type': sequelize_1[p(0xcc)][q(0xe7)],
                'references': {
                    'model': f[q(0xea)],
                    'key': 'id'
                },
                'onUpdate': f[q(0xe5)],
                'onDelete': f[p(0xe5)],
                'allowNull': !![]
            })
        ]);
    },
    'down': d => {
        const r = n, s = n, e = {};
        e[r(0xe1)] = r(0xe6), e[s(0xce)] = s(0xd0), e[r(0xd5)] = r(0xe8);
        const f = e;
        return Promise[s(0xcd)]([d[r(0xed) + 'mn'](f[r(0xe1)], f[r(0xce)], {
                'type': sequelize_1[s(0xcc)][s(0xe7)],
                'references': {
                    'model': f[r(0xe1)],
                    'key': 'id'
                },
                'onUpdate': f[r(0xd5)],
                'onDelete': f[s(0xd5)],
                'allowNull': !![]
            })]);
    }
};