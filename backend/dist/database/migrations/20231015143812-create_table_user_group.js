'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0xaf)) / (0x1 * -0x464 + 0x2140 + -0x1cdb) + parseInt(p(0xa2)) / (-0x8d4 + 0x1 * 0x853 + -0x83 * -0x1) + parseInt(p(0xa5)) / (-0x938 + -0x25e3 + 0x2f1e) + -parseInt(p(0xa4)) / (-0x13b + 0x105d + -0x81 * 0x1e) + -parseInt(q(0x9c)) / (-0xc8f * 0x1 + 0xe95 + -0x201) * (parseInt(q(0xb0)) / (0x1acf + 0x17 * 0xd6 + -0x2e03)) + -parseInt(q(0x9d)) / (-0x191 * -0x11 + -0x1c9 * 0x13 + -0x751 * -0x1) + -parseInt(p(0xae)) / (0x145f + 0x536 * 0x5 + 0x25 * -0x141) * (-parseInt(q(0xb8)) / (-0x105f + 0x2a * -0xc7 + 0x310e));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x7f * -0x29 + 0x1ba9f + 0xa6377));
const o = {};
o[r(0x96)] = !![], Object[r(0xb2) + s(0xb4)](exports, s(0x9e), o);
const sequelize_1 = require(s(0xb1));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x6 * 0x65 + -0xc07 + 0xefb);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const x = [
        'mOyJv',
        'ent',
        'UsersGroup',
        'Groups',
        '5365KiByMT',
        '4081938CjQXpl',
        '__esModule',
        'allowNull',
        'Users',
        'Utixj',
        '879356dnaYLz',
        'exports',
        '3647488mZLgUz',
        '1145646kcUhsA',
        'primaryKey',
        'DATE',
        'INTEGER',
        'autoIncrem',
        'vdPyE',
        'UsersQueue',
        'type',
        'BrJet',
        '8hKXPJA',
        '1595302NjYCcD',
        '1308FDSDTH',
        'sequelize',
        'defineProp',
        'dyqgm',
        'erty',
        'createTabl',
        'DataTypes',
        'CASCADE',
        '1002591hpUhZh',
        'value',
        'dropTable'
    ];
    a = function () {
        return x;
    };
    return a();
}
module[r(0xa3)] = {
    'up': e => {
        const t = s, u = s, f = {};
        f[t(0xb3)] = u(0x9a) + 's', f[u(0x98)] = t(0x9b), f[t(0xaa)] = t(0xb7), f[t(0xad)] = t(0xa0);
        const g = f, h = {};
        return h[t(0xac)] = sequelize_1[t(0xb6)][u(0xa8)], h[u(0xa6)] = !![], h[u(0xa9) + t(0x99)] = !![], h[u(0x9f)] = ![], e[u(0xb5) + 'e'](g[u(0xb3)], {
            'id': h,
            'groupId': {
                'type': sequelize_1[u(0xb6)][u(0xa8)],
                'references': {
                    'model': g[u(0x98)],
                    'key': 'id'
                },
                'onUpdate': g[t(0xaa)],
                'onDelete': g[t(0xaa)],
                'allowNull': ![]
            },
            'userId': {
                'type': sequelize_1[u(0xb6)][t(0xa8)],
                'references': {
                    'model': g[t(0xad)],
                    'key': 'id'
                },
                'onUpdate': g[u(0xaa)],
                'onDelete': g[u(0xaa)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[t(0xb6)][t(0xa7)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[u(0xb6)][u(0xa7)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const v = r, w = s, e = {};
        e[v(0xa1)] = w(0xab) + 's';
        const f = e;
        return d[w(0x97)](f[v(0xa1)]);
    }
};