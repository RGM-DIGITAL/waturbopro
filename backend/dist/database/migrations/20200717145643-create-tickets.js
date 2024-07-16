'use strict';
const v = b, w = b;
function a() {
    const B = [
        'Tickets',
        '6682168CYhdDr',
        '5BksdPD',
        'sequelize',
        'erty',
        '__esModule',
        'ent',
        '6345560OozdNX',
        'createTabl',
        '1QTzIZE',
        '1413377vZQxUG',
        'primaryKey',
        'CWzne',
        'pending',
        'type',
        'SYRzB',
        'SET\x20NULL',
        'DataTypes',
        'DATE',
        'value',
        '1580714YnWwdm',
        'QOFtj',
        '13112244RBDFXm',
        'mlhWm',
        'Users',
        'exports',
        'autoIncrem',
        'Contacts',
        'defineProp',
        '630252kvWHYv',
        'cnxBI',
        'INTEGER',
        'TklXf',
        'allowNull',
        'VVFSS',
        '6AdJasI',
        'dropTable',
        'CASCADE',
        '14896870YbUtaI',
        'STRING'
    ];
    a = function () {
        return B;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xd * -0x2de + -0x5a1 + -0x1f30);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(t(0x7d)) / (0x7 * -0x430 + 0x1e7b + 0x1 * -0x12a) * (parseInt(u(0x88)) / (-0x713 + -0xe44 + 0x1559)) + -parseInt(u(0x91)) / (-0x2 * -0xa8e + -0x1b7f * -0x1 + 0x14 * -0x26e) + parseInt(t(0x75)) / (-0x1911 + 0x180c + 0x109 * 0x1) * (-parseInt(t(0x76)) / (0x23 * 0x72 + -0x1e2 + -0xdaf)) + -parseInt(t(0x97)) / (-0x2 * 0x5ab + 0x16b4 + -0x84 * 0x16) * (parseInt(t(0x7e)) / (0x8de * -0x1 + -0x12d * -0x8 + 0x1 * -0x83)) + parseInt(u(0x7b)) / (0x1 * 0x22c1 + 0x1 * 0x281 + 0x2 * -0x129d) + parseInt(t(0x8a)) / (-0x9d7 + -0x15d9 + 0x1fb9 * 0x1) + parseInt(u(0x9a)) / (-0x102b + -0x26c * 0x2 + 0x150d * 0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x3 * 0x14549 + -0x4fe9 * -0x36 + -0x9 * 0xd3a1));
const s = {};
s[v(0x87)] = !![], Object[w(0x90) + w(0x78)](exports, w(0x79), s);
const sequelize_1 = require(v(0x77));
module[v(0x8d)] = {
    'up': e => {
        const x = v, y = w, f = {};
        f[x(0x80)] = x(0x9c), f[x(0x8b)] = x(0x81), f[y(0x94)] = x(0x8f), f[x(0x92)] = y(0x99), f[y(0x96)] = y(0x8c), f[y(0x83)] = y(0x84);
        const g = f, h = {};
        return h[x(0x82)] = sequelize_1[y(0x85)][x(0x93)], h[y(0x8e) + y(0x7a)] = !![], h[y(0x7f)] = !![], h[x(0x95)] = ![], e[y(0x7c) + 'e'](g[x(0x80)], {
            'id': h,
            'status': {
                'type': sequelize_1[y(0x85)][y(0x9b)],
                'defaultValue': g[x(0x8b)],
                'allowNull': ![]
            },
            'lastMessage': { 'type': sequelize_1[y(0x85)][y(0x9b)] },
            'contactId': {
                'type': sequelize_1[y(0x85)][x(0x93)],
                'references': {
                    'model': g[y(0x94)],
                    'key': 'id'
                },
                'onUpdate': g[y(0x92)],
                'onDelete': g[y(0x92)]
            },
            'userId': {
                'type': sequelize_1[y(0x85)][y(0x93)],
                'references': {
                    'model': g[y(0x96)],
                    'key': 'id'
                },
                'onUpdate': g[y(0x92)],
                'onDelete': g[y(0x83)]
            },
            'createdAt': {
                'type': sequelize_1[x(0x85)][x(0x86)](-0xce * 0x3 + -0x238 * -0x3 + -0x4 * 0x10e),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[x(0x85)][y(0x86)](-0x7e2 + 0x176c + -0xf84),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const z = v, A = w, e = {};
        e[z(0x89)] = A(0x9c);
        const f = e;
        return d[A(0x98)](f[z(0x89)]);
    }
};