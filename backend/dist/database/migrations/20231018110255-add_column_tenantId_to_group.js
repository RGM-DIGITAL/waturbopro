'use strict';
const m = b, n = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * -0x1ef4 + 0x2a6 * 0x8 + -0x529 * -0x2);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const s = [
        'Tenants',
        'YWwFs',
        'value',
        '12COssSx',
        'isActive',
        'removeColu',
        'addColumn',
        'nKiNj',
        'restrict',
        'defaultVal',
        'bCowE',
        'wHdFx',
        'defineProp',
        'mUfwA',
        '1073018uqsEsO',
        'type',
        '20xAQcCQ',
        '265XiVtAO',
        '1676807baiLoo',
        'gmGsg',
        'Groups',
        '62184IPmBNF',
        'ooIvh',
        'erty',
        'BOOLEAN',
        'DataTypes',
        '837462UgvvKx',
        'xCRgw',
        'allowNull',
        '280QbztzX',
        'INTEGER',
        '__esModule',
        '76608ZBvQnO',
        '388956wvnXbU',
        'ywLdC',
        'sequelize',
        '4917136QiuVhU',
        'ble',
        'describeTa',
        'exports',
        'tenantId',
        'CASCADE'
    ];
    a = function () {
        return s;
    };
    return a();
}
(function (d, e) {
    const k = b, l = b, f = d();
    while (!![]) {
        try {
            const g = parseInt(k(0xaf)) / (-0xd * -0xed + -0x1875 + 0x1 * 0xc6d) + parseInt(k(0xa3)) / (-0x2b * -0xc1 + 0x1ffa + 0x4063 * -0x1) + -parseInt(l(0xb6)) / (-0x139e + -0x338 + 0x16d9 * 0x1) * (-parseInt(l(0x98)) / (-0x1882 * -0x1 + -0x1a54 + 0x1 * 0x1d6)) + parseInt(k(0xa6)) / (-0x2bc * 0x5 + 0x1 * 0x74b + 0x2 * 0x333) * (-parseInt(k(0xaa)) / (-0x1b4c + 0x219c + -0x7 * 0xe6)) + -parseInt(l(0x8f)) / (0x1826 + 0xeb5 + -0x7 * 0x58c) + -parseInt(k(0xb2)) / (-0x8b * -0x1 + 0xe47 + -0xeca) * (-parseInt(l(0xb5)) / (-0x23b2 * 0x1 + -0x1 * 0x2329 + -0x11b9 * -0x4)) + -parseInt(l(0xa5)) / (-0x1359 * -0x2 + 0x25 * 0x99 + 0x14b * -0x2f) * (parseInt(k(0xa7)) / (0x141 * 0x1b + 0xc82 + 0x4d * -0x9a));
            if (g === e)
                break;
            else
                f['push'](f['shift']());
        } catch (h) {
            f['push'](f['shift']());
        }
    }
}(a, 0x27fe * -0x2 + 0x182 * 0xea + 0x25b5 * 0x2d));
const c = {};
c[m(0x97)] = !![], Object[m(0xa1) + n(0xac)](exports, n(0xb4), c);
const sequelize_1 = require(m(0x8e));
module[m(0x92)] = {
    'up': async f => {
        const o = n, p = m, g = {};
        g[o(0xb0)] = o(0xa9), g[p(0x9c)] = o(0x93), g[p(0x9f)] = o(0x95), g[o(0xa0)] = p(0x94), g[o(0xa8)] = p(0x9d), g[p(0xab)] = p(0x99);
        const h = g, i = await f[o(0x91) + o(0x90)](h[p(0xb0)]);
        (!i || !i[h[o(0x9c)]]) && await f[p(0x9b)](h[p(0xb0)], h[p(0x9c)], {
            'type': sequelize_1[o(0xae)][p(0xb3)],
            'references': {
                'model': h[p(0x9f)],
                'key': 'id'
            },
            'onUpdate': h[o(0xa0)],
            'onDelete': h[p(0xa8)],
            'allowNull': ![],
            'defaultValue': 0x1
        });
        if (!i || !i[h[p(0xab)]]) {
            const j = {};
            j[o(0xa4)] = sequelize_1[o(0xae)][p(0xad)], j[p(0xb1)] = ![], j[o(0x9e) + 'ue'] = !![], await f[p(0x9b)](h[o(0xb0)], h[o(0xab)], j);
        }
    },
    'down': async e => {
        const q = n, r = n, f = {};
        f[q(0x96)] = r(0xa9), f[q(0xa2)] = q(0x93), f[q(0xb7)] = q(0x99);
        const g = f;
        await e[q(0x9a) + 'mn'](g[r(0x96)], g[r(0xa2)]), await e[r(0x9a) + 'mn'](g[r(0x96)], g[q(0xb7)]);
    }
};