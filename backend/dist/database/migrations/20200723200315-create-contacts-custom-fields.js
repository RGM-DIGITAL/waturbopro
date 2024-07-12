'use strict';
const t = b, u = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x17be + -0x1877 * 0x1 + -0x3 * -0x84);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0xda)) / (0x8b * 0x39 + 0x1eae + -0x1d0 * 0x22) * (-parseInt(s(0xed)) / (0x11fd + 0x2fc * -0x5 + 0x1 * -0x30f)) + parseInt(s(0xdb)) / (-0x16 * -0x89 + 0x267b + -0x323e) + -parseInt(s(0xd8)) / (-0x5ba + -0x2b7 * 0x5 + 0x3dd * 0x5) * (parseInt(s(0xde)) / (-0x26ff * 0x1 + -0x2 * -0xdff + 0xb06)) + parseInt(r(0xeb)) / (-0xa61 * -0x2 + 0xbb3 + -0x206f) + parseInt(r(0xea)) / (0xb29 * 0x1 + 0x2d * -0x81 + 0xb8b) * (-parseInt(r(0xdc)) / (-0x1f * 0x2e + -0xb * 0x106 + 0x1a * 0xa6)) + parseInt(s(0xf4)) / (0x1 * 0x22e1 + 0x1bf7 + -0x1 * 0x3ecf) * (-parseInt(r(0xe6)) / (-0x2 * -0x133 + -0x11 * -0xdf + -0x112b)) + parseInt(r(0xf0)) / (-0x399 + -0x1c31 + 0x1d * 0x119);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2b4bf + -0x105c2 * 0x1 + 0x4700 * 0x17));
function a() {
    const z = [
        'tomFields',
        'CASCADE',
        'DataTypes',
        '42kJbIbN',
        '1162734ZhoOyO',
        'value',
        '2boEqPi',
        '__esModule',
        'XkDCc',
        '6500560HPjUfI',
        'oQfWz',
        'INTEGER',
        'type',
        '185382AdPraU',
        'ContactCus',
        'DATE',
        'ent',
        'Contacts',
        'defineProp',
        'createTabl',
        'STRING',
        '340988jHTNPy',
        'exports',
        '280773OxjKGg',
        '488244rtnswm',
        '69208rZtMMX',
        'primaryKey',
        '15Yfpqqo',
        'allowNull',
        'dropTable',
        'yGoYS',
        'erty',
        'autoIncrem',
        'sequelize',
        'TwNzg',
        '90zHRcxZ'
    ];
    a = function () {
        return z;
    };
    return a();
}
const q = {};
q[t(0xec)] = !![], Object[u(0xd5) + u(0xe2)](exports, u(0xee), q);
const sequelize_1 = require(t(0xe4));
module[t(0xd9)] = {
    'up': g => {
        const v = u, w = t, h = {};
        h[v(0xef)] = w(0xf5) + w(0xe7), h[v(0xe1)] = v(0xd4), h[v(0xf1)] = v(0xe8);
        const i = h, j = {};
        j[v(0xf3)] = sequelize_1[v(0xe9)][w(0xf2)], j[v(0xe3) + w(0xd3)] = !![], j[v(0xdd)] = !![], j[v(0xdf)] = ![];
        const k = {};
        k[w(0xf3)] = sequelize_1[w(0xe9)][v(0xd7)], k[w(0xdf)] = ![];
        const l = {};
        return l[v(0xf3)] = sequelize_1[w(0xe9)][v(0xd7)], l[v(0xdf)] = ![], g[v(0xd6) + 'e'](i[v(0xef)], {
            'id': j,
            'name': k,
            'value': l,
            'contactId': {
                'type': sequelize_1[v(0xe9)][w(0xf2)],
                'references': {
                    'model': i[v(0xe1)],
                    'key': 'id'
                },
                'onUpdate': i[w(0xf1)],
                'onDelete': i[v(0xf1)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[v(0xe9)][v(0xf6)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[w(0xe9)][w(0xf6)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const x = t, y = u, e = {};
        e[x(0xe5)] = y(0xf5) + y(0xe7);
        const f = e;
        return d[x(0xe0)](f[x(0xe5)]);
    }
};