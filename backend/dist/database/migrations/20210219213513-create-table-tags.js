'use strict';
const z = b, A = b;
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(x(0x1ea)) / (-0x49c + -0x245f * 0x1 + 0x28fc) + parseInt(y(0x1f4)) / (-0x1690 + -0x1 * -0x1f29 + 0x3 * -0x2dd) + parseInt(x(0x1da)) / (-0x710 + -0x7f * -0x3 + 0x11e * 0x5) + parseInt(x(0x1e0)) / (0x1 * -0x2446 + -0x2 * 0x1273 + -0x2498 * -0x2) + parseInt(y(0x1e2)) / (-0xfd9 + 0x3 * -0x251 + 0x16d1) + parseInt(y(0x1fa)) / (-0x1 * 0x12d1 + -0x2 * -0xe0b + -0x93f) + -parseInt(y(0x1fc)) / (0x4e4 + -0x1 * -0x192a + -0x1e07) * (parseInt(x(0x1de)) / (-0x91 * 0xd + 0xdcd + -0xcd * 0x8));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1f372 * -0x1 + -0x1 * 0xe00e9 + 0x16e301));
const w = {};
function a() {
    const F = [
        'CASCADE',
        'ent',
        'xCsSA',
        'qnLre',
        'SET\x20NULL',
        'all',
        '2176132efqrus',
        'type',
        'Users',
        'autoIncrem',
        'erty',
        'defaultVal',
        '4775868QIsLOG',
        'sOHQK',
        '1567454oDmjTA',
        'BOOLEAN',
        'dropTable',
        'primaryKey',
        'allowNull',
        '1958988GSXICR',
        'value',
        'dYXyy',
        'INTEGER',
        '144FbQCaW',
        'DATE',
        '3268164kKyIzV',
        'sequelize',
        '2999065qGxoxz',
        'hToAp',
        'Tags',
        'DataTypes',
        'defineProp',
        'STRING',
        'Tenants',
        '__esModule',
        '786728IfZpth',
        'wxkYJ',
        'createTabl',
        'exports'
    ];
    a = function () {
        return F;
    };
    return a();
}
w[z(0x1db)] = !![], Object[z(0x1e6) + z(0x1f8)](exports, A(0x1e9), w);
const sequelize_1 = require(z(0x1e1));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x5 * -0x6c5 + -0xce9 + 0x309c);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[A(0x1ed)] = {
    'up': h => {
        const B = A, C = A, i = {};
        i[B(0x1f0)] = C(0x1e4), i[C(0x1fb)] = C(0x1f6), i[B(0x1eb)] = B(0x1ee), i[C(0x1e3)] = C(0x1f2), i[C(0x1dc)] = B(0x1e8);
        const j = i, k = {};
        k[B(0x1f5)] = sequelize_1[C(0x1e5)][B(0x1dd)], k[B(0x1ff)] = !![], k[B(0x1f7) + B(0x1ef)] = !![], k[C(0x200)] = ![];
        const l = {};
        l[B(0x1f5)] = sequelize_1[C(0x1e5)][B(0x1e7)], l[C(0x200)] = ![];
        const m = {};
        m[C(0x1f5)] = sequelize_1[C(0x1e5)][B(0x1fd)], m[C(0x1f9) + 'ue'] = !![], m[C(0x200)] = ![];
        const n = {};
        return n[B(0x1f5)] = sequelize_1[C(0x1e5)][C(0x1e7)], n[C(0x200)] = ![], Promise[B(0x1f3)]([h[C(0x1ec) + 'e'](j[B(0x1f0)], {
                'id': k,
                'tag': l,
                'isActive': m,
                'color': n,
                'userId': {
                    'type': sequelize_1[B(0x1e5)][B(0x1dd)],
                    'references': {
                        'model': j[B(0x1fb)],
                        'key': 'id'
                    },
                    'onUpdate': j[C(0x1eb)],
                    'onDelete': j[B(0x1e3)]
                },
                'tenantId': {
                    'type': sequelize_1[B(0x1e5)][C(0x1dd)],
                    'references': {
                        'model': j[B(0x1dc)],
                        'key': 'id'
                    },
                    'onUpdate': j[C(0x1eb)],
                    'onDelete': j[B(0x1eb)],
                    'allowNull': ![],
                    'defaultValue': 0x1
                },
                'createdAt': {
                    'type': sequelize_1[B(0x1e5)][C(0x1df)],
                    'allowNull': ![]
                },
                'updatedAt': {
                    'type': sequelize_1[B(0x1e5)][C(0x1df)],
                    'allowNull': ![]
                }
            })]);
    },
    'down': d => {
        const D = A, E = A, e = {};
        e[D(0x1f1)] = D(0x1e4);
        const f = e;
        return Promise[D(0x1f3)]([d[D(0x1fe)](f[D(0x1f1)])]);
    }
};