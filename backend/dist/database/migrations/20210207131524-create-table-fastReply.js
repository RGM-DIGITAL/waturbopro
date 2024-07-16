'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(t(0x198)) / (-0x3 * 0x351 + -0x257a + 0x17b7 * 0x2) + -parseInt(t(0x1a7)) / (-0x4c6 + 0x1 * 0xfd7 + -0xb0f) * (-parseInt(t(0x19f)) / (0xe76 + 0x23 * 0xf1 + -0x2f66)) + parseInt(u(0x1b4)) / (0x36 + -0x2 * 0x2b3 + 0xde * 0x6) * (-parseInt(u(0x1a3)) / (-0xbc7 + -0x893 * 0x4 + 0x2e18)) + -parseInt(t(0x1a4)) / (0x17 * 0x149 + 0x1 * 0x22fc + 0xc7 * -0x53) + -parseInt(t(0x1b6)) / (0x129 + 0x119 * -0x14 + -0xa * -0x215) + parseInt(u(0x199)) / (0x1 * -0x2b + 0x7e6 + -0x7b3) * (parseInt(t(0x1a9)) / (0x2479 + 0x23d0 + -0x4840)) + parseInt(u(0x1a5)) / (0xb * 0x5c + -0x15c5 + 0x11db);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x17517 + 0x5e0a * 0x6 + -0x15 * 0x35b));
function a() {
    const B = [
        'INTEGER',
        '770DYpYjy',
        'vlHpx',
        '45DipnAn',
        'Tenants',
        'jZHnf',
        'jfEfJ',
        'createTabl',
        'value',
        'TEXT',
        'exports',
        'ent',
        'defineProp',
        'SET\x20NULL',
        '15472VhzPkG',
        'allowNull',
        '1563261ZnxHYV',
        'FastReply',
        'CASCADE',
        'KSyfh',
        'autoIncrem',
        'erty',
        'MMuYK',
        'sequelize',
        'dropTable',
        '367051bkLSya',
        '619288wJKYpc',
        'DATE',
        'DataTypes',
        'SWuOF',
        'STRING',
        '__esModule',
        '2703xPMtTt',
        'type',
        'Users',
        'primaryKey',
        '280uDRVCu',
        '1925034XZdzgL',
        '6157970recQRV'
    ];
    a = function () {
        return B;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x16d9 + 0x1275 + -0x27b9);
        let h = e[f];
        return h;
    }, b(c, d);
}
const s = {};
s[v(0x1ae)] = !![], Object[v(0x1b2) + w(0x1bb)](exports, w(0x19e), s);
const sequelize_1 = require(v(0x196));
module[w(0x1b0)] = {
    'up': g => {
        const x = v, y = w, h = {};
        h[x(0x1ab)] = x(0x1b7), h[y(0x1a8)] = y(0x1a1), h[y(0x19c)] = y(0x1b8), h[x(0x195)] = y(0x1b3), h[y(0x1ac)] = y(0x1aa);
        const i = h, j = {};
        j[x(0x1a0)] = sequelize_1[x(0x19b)][x(0x1a6)], j[y(0x1ba) + y(0x1b1)] = !![], j[x(0x1a2)] = !![], j[y(0x1b5)] = ![];
        const k = {};
        k[y(0x1a0)] = sequelize_1[x(0x19b)][y(0x19d)], k[y(0x1b5)] = ![];
        const l = {};
        return l[x(0x1a0)] = sequelize_1[x(0x19b)][y(0x1af)], l[y(0x1b5)] = ![], g[x(0x1ad) + 'e'](i[y(0x1ab)], {
            'id': j,
            'key': k,
            'message': l,
            'userId': {
                'type': sequelize_1[y(0x19b)][y(0x1a6)],
                'references': {
                    'model': i[x(0x1a8)],
                    'key': 'id'
                },
                'onUpdate': i[y(0x19c)],
                'onDelete': i[y(0x195)]
            },
            'tenantId': {
                'type': sequelize_1[x(0x19b)][y(0x1a6)],
                'references': {
                    'model': i[x(0x1ac)],
                    'key': 'id'
                },
                'onUpdate': i[x(0x19c)],
                'onDelete': i[x(0x19c)],
                'allowNull': ![],
                'defaultValue': 0x1
            },
            'createdAt': {
                'type': sequelize_1[x(0x19b)][x(0x19a)](0xc7a + 0x13e * -0x16 + 0xee0),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[y(0x19b)][y(0x19a)](-0x1425 * 0x1 + -0xc5 * 0x29 + 0x14b * 0x28),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const z = w, A = w, e = {};
        e[z(0x1b9)] = A(0x1b7);
        const f = e;
        return d[z(0x197)](f[z(0x1b9)]);
    }
};