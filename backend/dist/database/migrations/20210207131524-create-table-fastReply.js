'use strict';
function a() {
    const B = [
        '2iAlNUl',
        'Tenants',
        'DataTypes',
        'ent',
        'allowNull',
        '__esModule',
        'erty',
        '4745136LvncOr',
        '1602149xlRHDu',
        'value',
        'TEXT',
        'sequelize',
        'DATE',
        'dropTable',
        'LkNmO',
        'Cesru',
        'STRING',
        'autoIncrem',
        '4gWAPJC',
        '3048rGMASO',
        '8sXEluB',
        '8057145uPOrlC',
        'SET\x20NULL',
        'hkVjw',
        'FastReply',
        'defineProp',
        'uWHcA',
        'createTabl',
        '12333770oTAoPm',
        '7ZXOBxk',
        'WYIjx',
        'CASCADE',
        '9650457HnyUGK',
        'OOPVY',
        'exports',
        '118911pdXYhb',
        '10494738XXQKwk',
        'type',
        'Users',
        'primaryKey',
        '11WVCBVw',
        'INTEGER'
    ];
    a = function () {
        return B;
    };
    return a();
}
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(t(0x1b9)) / (-0x1c21 + 0x729 + 0x7 * 0x2ff) * (-parseInt(t(0x1b1)) / (0x17 * -0x83 + -0x1aac + -0x3 * -0xcd1)) + parseInt(t(0x1b8)) / (-0x4c * 0x4c + -0x8 * -0x3 + -0x47f * -0x5) + parseInt(u(0x1c3)) / (0x8ef * -0x3 + -0x21bf * -0x1 + -0x6ee) * (parseInt(u(0x1c6)) / (0x49e + -0x3af * -0x2 + 0x3fd * -0x3)) + -parseInt(t(0x1ab)) / (0x1a * 0xb + -0x1 * 0xc8b + -0x1 * -0xb73) * (parseInt(u(0x1a4)) / (0x17bd + 0x194e + 0x3104 * -0x1)) + -parseInt(t(0x1c5)) / (-0x7 * 0x58b + 0xcb * 0xd + -0x1 * -0x1c86) * (parseInt(t(0x1a7)) / (-0x6 * -0x5d + -0x87 + 0x3 * -0x8a)) + parseInt(t(0x1a3)) / (0x1c56 + -0x1 * -0x11dd + 0x27 * -0x12f) * (parseInt(t(0x1af)) / (0x1855 * -0x1 + 0xc5 * 0x1a + 0x45e)) + parseInt(t(0x1c4)) / (-0x725 * -0x1 + -0xaf7 + -0x63 * -0xa) * (-parseInt(t(0x1aa)) / (-0x4bd * -0x4 + 0x633 * 0x3 + -0x2580));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x64d * -0x1ed + -0x13b7fa + -0x2 * -0xa8947));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xcc * 0x2e + -0x888 + 0x2ed2);
        let h = e[f];
        return h;
    }, b(c, d);
}
const s = {};
s[v(0x1ba)] = !![], Object[v(0x1ca) + w(0x1b7)](exports, v(0x1b6), s);
const sequelize_1 = require(w(0x1bc));
module[v(0x1a9)] = {
    'up': g => {
        const x = w, y = w, h = {};
        h[x(0x1cb)] = x(0x1c9), h[y(0x1a8)] = y(0x1ad), h[y(0x1c8)] = y(0x1a6), h[x(0x1a5)] = x(0x1c7), h[y(0x1c0)] = x(0x1b2);
        const i = h, j = {};
        j[y(0x1ac)] = sequelize_1[y(0x1b3)][y(0x1b0)], j[x(0x1c2) + x(0x1b4)] = !![], j[x(0x1ae)] = !![], j[x(0x1b5)] = ![];
        const k = {};
        k[x(0x1ac)] = sequelize_1[y(0x1b3)][y(0x1c1)], k[y(0x1b5)] = ![];
        const l = {};
        return l[x(0x1ac)] = sequelize_1[y(0x1b3)][x(0x1bb)], l[y(0x1b5)] = ![], g[x(0x1a2) + 'e'](i[x(0x1cb)], {
            'id': j,
            'key': k,
            'message': l,
            'userId': {
                'type': sequelize_1[y(0x1b3)][y(0x1b0)],
                'references': {
                    'model': i[y(0x1a8)],
                    'key': 'id'
                },
                'onUpdate': i[x(0x1c8)],
                'onDelete': i[y(0x1a5)]
            },
            'tenantId': {
                'type': sequelize_1[y(0x1b3)][x(0x1b0)],
                'references': {
                    'model': i[y(0x1c0)],
                    'key': 'id'
                },
                'onUpdate': i[y(0x1c8)],
                'onDelete': i[y(0x1c8)],
                'allowNull': ![],
                'defaultValue': 0x1
            },
            'createdAt': {
                'type': sequelize_1[x(0x1b3)][y(0x1bd)](-0x18e6 + -0x2c * -0x2 + 0x11e * 0x16),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[y(0x1b3)][y(0x1bd)](-0xad1 + 0x25 * -0x26 + 0x1 * 0x1055),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const z = w, A = w, e = {};
        e[z(0x1bf)] = z(0x1c9);
        const f = e;
        return d[A(0x1be)](f[z(0x1bf)]);
    }
};