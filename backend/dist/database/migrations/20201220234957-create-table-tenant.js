'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x83)) / (-0x2e3 * 0x5 + -0x1da7 + 0x2c17) * (parseInt(q(0x68)) / (-0x1d8c + -0xba8 + 0x2936)) + parseInt(q(0x7b)) / (0x1c70 + -0x24a2 + 0xbf * 0xb) * (-parseInt(p(0x74)) / (-0x227 * 0xa + -0x200a + 0x5f4 * 0x9)) + parseInt(q(0x6f)) / (-0x1 * 0x300 + -0x157e + 0x19 * 0xfb) * (parseInt(q(0x8d)) / (-0xf74 + 0x3d6 * 0x6 + 0x3c5 * -0x2)) + parseInt(p(0x84)) / (-0x3 * 0xb9b + 0x1 * -0x144d + 0x3725) + -parseInt(p(0x77)) / (-0xb25 + -0x76e + 0x129b) * (-parseInt(q(0x78)) / (0xf31 * 0x1 + 0xb49 + -0x3c7 * 0x7)) + parseInt(q(0x8e)) / (0x1 * -0x6aa + 0x1 * -0x8e6 + 0x7cd * 0x2) * (parseInt(p(0x6d)) / (-0x1 * 0x195f + -0x30a + 0x1c74)) + -parseInt(q(0x76)) / (0x16b6 + 0x1041 + -0x26eb);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x205e + 0x493d + 0x1d8c6));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x758 + 0x6 * 0xdd + 0x6b * -0x1d);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const x = [
        'CASCADE',
        'sequelize',
        'DataTypes',
        'restrict',
        'value',
        '1ixytpP',
        '1338316QppVTr',
        'ent',
        'exports',
        'LpgRj',
        'Tenants',
        'DATE',
        'uWQBs',
        'allowNull',
        'dropTable',
        '70740smgmox',
        '4890tHIFgl',
        '__esModule',
        '322444YTyCsf',
        'defineProp',
        'active',
        'INTEGER',
        'autoIncrem',
        '583kkpJDq',
        'primaryKey',
        '50sdMhXU',
        'STRING',
        'ZMZht',
        'type',
        'rQtcG',
        '260TweTaa',
        'erty',
        '4747572byBKsS',
        '1677176vMnmpC',
        '9LZuHtU',
        'rhDUG',
        'createTabl',
        '8250IgMnVd',
        'Users',
        'NzOND'
    ];
    a = function () {
        return x;
    };
    return a();
}
const o = {};
o[r(0x82)] = !![], Object[r(0x69) + s(0x75)](exports, r(0x67), o);
const sequelize_1 = require(r(0x7f));
module[r(0x86)] = {
    'up': e => {
        const t = s, u = s, f = {};
        f[t(0x87)] = t(0x88), f[u(0x79)] = u(0x6a), f[u(0x71)] = t(0x7c), f[t(0x8a)] = u(0x7e), f[t(0x7d)] = t(0x81);
        const g = f, h = {};
        return h[u(0x72)] = sequelize_1[u(0x80)][t(0x6b)], h[u(0x6c) + t(0x85)] = !![], h[u(0x6e)] = !![], h[u(0x8b)] = ![], e[u(0x7a) + 'e'](g[t(0x87)], {
            'id': h,
            'status': {
                'type': sequelize_1[u(0x80)][u(0x70)],
                'defaultValue': g[t(0x79)],
                'allowNull': ![]
            },
            'ownerId': {
                'type': sequelize_1[t(0x80)][t(0x6b)],
                'references': {
                    'model': g[t(0x71)],
                    'key': 'id'
                },
                'onUpdate': g[t(0x8a)],
                'onDelete': g[u(0x7d)]
            },
            'createdAt': {
                'type': sequelize_1[t(0x80)][u(0x89)](-0x231d * -0x1 + -0xe1f + -0x14f8),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[u(0x80)][u(0x89)](0xf41 + 0x1a5c + 0x27 * -0x111),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const v = r, w = s, e = {};
        e[v(0x73)] = v(0x88);
        const f = e;
        return d[v(0x8c)](f[v(0x73)]);
    }
};