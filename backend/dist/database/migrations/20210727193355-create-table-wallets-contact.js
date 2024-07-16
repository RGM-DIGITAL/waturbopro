'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0xd9)) / (0xfc6 + 0xf7 * 0x19 + -0x27e4) * (-parseInt(s(0xcf)) / (0x1 * 0x2663 + 0x21e7 + -0xc * 0x606)) + parseInt(r(0xd7)) / (0x421 + 0x33 * 0x95 + -0x21cd) + -parseInt(r(0xe6)) / (0xf60 + 0x1044 * 0x2 + -0x2fe4) + parseInt(s(0xdd)) / (0x1aa * -0x2 + -0x32b + -0x4 * -0x1a1) + parseInt(s(0xdb)) / (-0x1f09 + 0x183 * -0x7 + 0x29a4) + parseInt(r(0xe1)) / (-0x7 * -0x4d4 + 0x1c52 + -0x3e17) + parseInt(r(0xd3)) / (-0x1 * -0x7bb + -0x13 * -0x11 + -0x25 * 0x3e) * (-parseInt(r(0xcc)) / (-0xf7 * -0x15 + -0x2030 * 0x1 + 0xbf6));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2f * -0x20ef + 0x28dce + -0x1 * 0x33031));
const q = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * -0x265 + -0x1 * -0x16a2 + -0x1371);
        let h = e[f];
        return h;
    }, b(c, d);
}
q[t(0xe2)] = !![], Object[t(0xe8) + u(0xea)](exports, u(0xd2), q);
const sequelize_1 = require(u(0xed));
module[u(0xce)] = {
    'up': e => {
        const v = u, w = t, f = {};
        f[v(0xef)] = v(0xe7) + w(0xd8), f[v(0xd6)] = w(0xf0), f[w(0xec)] = w(0xe5), f[w(0xeb)] = v(0xe4), f[w(0xd5)] = w(0xe9);
        const g = f, h = {};
        return h[v(0xd0)] = sequelize_1[v(0xdf)][w(0xee)], h[w(0xd4) + w(0xcd)] = !![], h[v(0xd1)] = !![], h[w(0xe0)] = ![], e[v(0xdc) + 'e'](g[w(0xef)], {
            'id': h,
            'walletId': {
                'type': sequelize_1[v(0xdf)][v(0xee)],
                'references': {
                    'model': g[v(0xd6)],
                    'key': 'id'
                },
                'onUpdate': g[v(0xec)],
                'onDelete': g[w(0xec)],
                'allowNull': ![]
            },
            'contactId': {
                'type': sequelize_1[w(0xdf)][w(0xee)],
                'references': {
                    'model': g[w(0xeb)],
                    'key': 'id'
                },
                'onUpdate': g[w(0xec)],
                'onDelete': g[w(0xec)],
                'allowNull': ![]
            },
            'tenantId': {
                'type': sequelize_1[v(0xdf)][w(0xee)],
                'references': {
                    'model': g[w(0xd5)],
                    'key': 'id'
                },
                'onUpdate': g[w(0xec)],
                'onDelete': g[w(0xec)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[v(0xdf)][v(0xda)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[v(0xdf)][w(0xda)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const x = u, y = t, e = {};
        e[x(0xe3)] = x(0xe7) + x(0xd8);
        const f = e;
        return d[x(0xde)](f[y(0xe3)]);
    }
};
function a() {
    const z = [
        '4020114HVcjqc',
        'value',
        'qKNCV',
        'Contacts',
        'CASCADE',
        '2066084jDqWIN',
        'ContactWal',
        'defineProp',
        'Tenants',
        'erty',
        'hNDid',
        'vCnRG',
        'sequelize',
        'INTEGER',
        'HnfDW',
        'Users',
        '85869MEiRax',
        'ent',
        'exports',
        '2kijBZT',
        'type',
        'primaryKey',
        '__esModule',
        '568YgBwTf',
        'autoIncrem',
        'toASG',
        'InRkr',
        '691557JBFzAG',
        'lets',
        '422293DIjxtX',
        'DATE',
        '1680174RnBmma',
        'createTabl',
        '207375nURtSh',
        'dropTable',
        'DataTypes',
        'allowNull'
    ];
    a = function () {
        return z;
    };
    return a();
}