'use strict';
const z = b, A = b;
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(x(0x181)) / (-0x5 * -0x3fa + 0x4d8 + -0x18b9) * (parseInt(x(0x18b)) / (-0xa6 * -0x1 + 0x25cd * -0x1 + -0x7 * -0x54f)) + -parseInt(x(0x194)) / (0x59e * -0x1 + -0x77 * -0x49 + -0xe27 * 0x2) * (parseInt(y(0x197)) / (0x16 * -0xd3 + -0x1e98 + 0x30be)) + -parseInt(y(0x19c)) / (-0x2242 + 0xe4 * -0x27 + -0xd * -0x54f) * (parseInt(x(0x17e)) / (-0x2 * 0xf1d + 0xece + -0x2 * -0x7b9)) + -parseInt(y(0x178)) / (-0x5 * 0x31d + 0xaad * -0x2 + 0x24f2) + -parseInt(x(0x173)) / (-0x6fe * -0x1 + 0x1 * -0x18a9 + 0x1 * 0x11b3) + parseInt(x(0x183)) / (0x966 + -0x1 * 0x6de + 0x1 * -0x27f) * (-parseInt(y(0x175)) / (0x1 * 0x1373 + 0x5f * -0x40 + -0x457 * -0x1)) + -parseInt(x(0x186)) / (-0x17f3 * -0x1 + 0x7cb + -0x1fb3) * (-parseInt(x(0x182)) / (0x54a * -0x7 + 0x137 + 0x89 * 0x43));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x3029 * 0x17 + -0x1 * 0x11dfc + 0x8cf67));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x22d1 + 0x1 * -0x1e32 + -0x7 * 0x74);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const F = [
        'CQwEy',
        'BOOLEAN',
        'allowNull',
        '24PlONsS',
        '__esModule',
        'CwxfM',
        'value',
        'dropTable',
        'DataTypes',
        'fcGIC',
        'sequelize',
        'type',
        '114ZEbbKK',
        'exports',
        'DATE',
        '7388YtPZwQ',
        'ent',
        'Tenants',
        'defaultVal',
        'defineProp',
        '465DYFfwW',
        'erty',
        '2467864lfhpTS',
        'nKaSY',
        '230EHWNzU',
        'obkvg',
        'CASCADE',
        '2090333PWZEmr',
        'Tags',
        'all',
        'createTabl',
        'autoIncrem',
        'INTEGER',
        '2502gDwMXZ',
        'gvZOb',
        'primaryKey',
        '22119tLvVfh',
        '12prSorU',
        '38952NlQwoo',
        'SET\x20NULL',
        'STRING',
        '8478679myqRKn',
        'Users'
    ];
    a = function () {
        return F;
    };
    return a();
}
const w = {};
w[z(0x18e)] = !![], Object[A(0x19b) + z(0x19d)](exports, z(0x18c), w);
const sequelize_1 = require(z(0x192));
module[A(0x195)] = {
    'up': h => {
        const B = z, C = z, i = {};
        i[B(0x18d)] = B(0x179), i[B(0x17f)] = C(0x187), i[B(0x188)] = B(0x177), i[B(0x191)] = C(0x184), i[C(0x176)] = B(0x199);
        const j = i, k = {};
        k[B(0x193)] = sequelize_1[B(0x190)][C(0x17d)], k[B(0x180)] = !![], k[C(0x17c) + B(0x198)] = !![], k[C(0x18a)] = ![];
        const l = {};
        l[B(0x193)] = sequelize_1[C(0x190)][B(0x185)], l[B(0x18a)] = ![];
        const m = {};
        m[C(0x193)] = sequelize_1[C(0x190)][C(0x189)], m[B(0x19a) + 'ue'] = !![], m[C(0x18a)] = ![];
        const n = {};
        return n[B(0x193)] = sequelize_1[C(0x190)][B(0x185)], n[C(0x18a)] = ![], Promise[B(0x17a)]([h[B(0x17b) + 'e'](j[C(0x18d)], {
                'id': k,
                'tag': l,
                'isActive': m,
                'color': n,
                'userId': {
                    'type': sequelize_1[C(0x190)][B(0x17d)],
                    'references': {
                        'model': j[C(0x17f)],
                        'key': 'id'
                    },
                    'onUpdate': j[C(0x188)],
                    'onDelete': j[B(0x191)]
                },
                'tenantId': {
                    'type': sequelize_1[B(0x190)][B(0x17d)],
                    'references': {
                        'model': j[C(0x176)],
                        'key': 'id'
                    },
                    'onUpdate': j[C(0x188)],
                    'onDelete': j[B(0x188)],
                    'allowNull': ![],
                    'defaultValue': 0x1
                },
                'createdAt': {
                    'type': sequelize_1[B(0x190)][C(0x196)],
                    'allowNull': ![]
                },
                'updatedAt': {
                    'type': sequelize_1[C(0x190)][B(0x196)],
                    'allowNull': ![]
                }
            })]);
    },
    'down': d => {
        const D = A, E = z, e = {};
        e[D(0x174)] = E(0x179);
        const f = e;
        return Promise[D(0x17a)]([d[D(0x18f)](f[E(0x174)])]);
    }
};