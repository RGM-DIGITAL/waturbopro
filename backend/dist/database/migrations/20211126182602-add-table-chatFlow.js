'use strict';
const z = b, A = b;
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(x(0x129)) / (0xf7f + 0x1b51 + -0x2acf) * (-parseInt(y(0x126)) / (0xd6e + 0x1ca7 + 0x2a13 * -0x1)) + parseInt(y(0x11a)) / (-0x7 * -0x4be + 0x26d2 + -0x4801) + parseInt(y(0x117)) / (0xd9d + 0x5b5 * -0x4 + -0x11 * -0x8b) + parseInt(x(0x11e)) / (0xa * 0x365 + 0x832 * -0x4 + 0x125 * -0x1) + parseInt(x(0x119)) / (-0x1 * -0x826 + -0xa62 + 0x242) * (parseInt(x(0x12a)) / (-0x25af + -0x1 * -0xd3d + 0x7 * 0x37f)) + -parseInt(y(0x131)) / (-0x107 * 0x16 + -0x173 * -0x11 + -0x201) + -parseInt(x(0x124)) / (-0x1834 + -0x1b0 + 0x19ed);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x46d8e + 0x1 * -0x7c50f + 0x1 * 0x976cd));
const w = {};
function a() {
    const F = [
        '1XutjXq',
        '1043TXbBtf',
        'allowNull',
        'BOOLEAN',
        'TMWyz',
        'Users',
        'vijuh',
        'autoIncrem',
        '709400GyvvOQ',
        'type',
        'STRING',
        'ahGHg',
        'sUfSr',
        'ent',
        'DATE',
        'value',
        'primaryKey',
        'DataTypes',
        'JSON',
        'createTabl',
        'Tenants',
        '__esModule',
        '2110320dtYVKI',
        'sequelize',
        '5790DmFRiy',
        '1881213iBDygG',
        'INTEGER',
        'CASCADE',
        'restrict',
        '801650msEPJj',
        'ppKaT',
        'dropTable',
        'exports',
        'ooZpd',
        'defineProp',
        '7425117APNdpE',
        'ChatFlow',
        '287700ulxUVf',
        'erty',
        'defaultVal'
    ];
    a = function () {
        return F;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1967 + 0x793 + -0x3d * 0x86);
        let h = e[f];
        return h;
    }, b(c, d);
}
w[z(0x110)] = !![], Object[z(0x123) + z(0x127)](exports, z(0x116), w);
const sequelize_1 = require(A(0x118));
module[z(0x121)] = {
    'up': i => {
        const B = A, C = z, j = {};
        j[B(0x122)] = C(0x125), j[B(0x10d)] = B(0x12e), j[C(0x10c)] = B(0x11c), j[B(0x12f)] = C(0x115), j[C(0x12d)] = C(0x11d);
        const k = j, l = {};
        l[C(0x132)] = sequelize_1[B(0x112)][B(0x11b)], l[B(0x130) + C(0x10e)] = !![], l[C(0x111)] = !![], l[C(0x12b)] = ![];
        const m = {};
        m[B(0x132)] = sequelize_1[B(0x112)][B(0x133)], m[B(0x12b)] = ![], m[B(0x128) + 'ue'] = '';
        const n = {};
        n[C(0x132)] = sequelize_1[C(0x112)][B(0x113)], n[B(0x12b)] = ![], n[B(0x128) + 'ue'] = {};
        const o = {};
        o[C(0x132)] = sequelize_1[C(0x112)][B(0x12c)], o[C(0x12b)] = ![], o[B(0x128) + 'ue'] = !![];
        const p = {};
        return p[C(0x132)] = sequelize_1[C(0x112)][B(0x133)], p[B(0x12b)] = !![], p[C(0x128) + 'ue'] = null, i[B(0x114) + 'e'](k[B(0x122)], {
            'id': l,
            'name': m,
            'flow': n,
            'isActive': o,
            'celularTeste': p,
            'userId': {
                'type': sequelize_1[B(0x112)][B(0x11b)],
                'references': {
                    'model': k[B(0x10d)],
                    'key': 'id'
                },
                'onUpdate': k[C(0x10c)],
                'onDelete': k[C(0x10c)],
                'allowNull': !![],
                'defaultValue': null
            },
            'tenantId': {
                'type': sequelize_1[B(0x112)][B(0x11b)],
                'references': {
                    'model': k[B(0x12f)],
                    'key': 'id'
                },
                'onUpdate': k[B(0x10c)],
                'onDelete': k[C(0x12d)],
                'allowNull': ![],
                'defaultValue': 0x1
            },
            'createdAt': {
                'type': sequelize_1[B(0x112)][C(0x10f)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[C(0x112)][B(0x10f)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const D = z, E = z, e = {};
        e[D(0x11f)] = D(0x125);
        const f = e;
        return d[D(0x120)](f[D(0x11f)]);
    }
};