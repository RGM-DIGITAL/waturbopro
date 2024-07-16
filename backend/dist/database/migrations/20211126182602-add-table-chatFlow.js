'use strict';
const z = b, A = b;
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(x(0x19d)) / (0x816 + 0x763 + -0xf78) + parseInt(y(0x179)) / (-0x235a + -0x162e + 0x398a) + -parseInt(y(0x19f)) / (0x441 + 0xe57 + 0x1295 * -0x1) + -parseInt(x(0x193)) / (-0x112b + -0x6ca + 0x17f9) * (parseInt(y(0x188)) / (0xa8f + -0x24b2 + 0x1a28)) + -parseInt(x(0x17a)) / (0x3 * 0x449 + 0x1260 + -0x1f35) + parseInt(y(0x184)) / (-0x90b * 0x3 + -0xa34 * 0x1 + 0x255c) * (parseInt(x(0x191)) / (0x1 * 0x1dc9 + 0x1 * -0x1309 + -0xab8)) + parseInt(x(0x19a)) / (-0x2308 + -0xa46 + 0x2d57);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x72873 + -0x1ce * 0x279 + 0x9d2ad));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1b11 + -0x1 * 0xfaa + -0x9ef * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const w = {};
w[z(0x199)] = !![], Object[z(0x17e) + z(0x18a)](exports, z(0x18d), w);
const sequelize_1 = require(A(0x192));
module[z(0x17b)] = {
    'up': i => {
        const B = A, C = A, j = {};
        j[B(0x197)] = C(0x17f), j[C(0x185)] = C(0x182), j[B(0x183)] = B(0x17d), j[B(0x178)] = C(0x180), j[B(0x18c)] = B(0x19c);
        const k = j, l = {};
        l[C(0x186)] = sequelize_1[C(0x19b)][B(0x19e)], l[C(0x187) + C(0x195)] = !![], l[B(0x181)] = !![], l[C(0x18b)] = ![];
        const m = {};
        m[C(0x186)] = sequelize_1[C(0x19b)][B(0x18e)], m[B(0x18b)] = ![], m[C(0x189) + 'ue'] = '';
        const n = {};
        n[C(0x186)] = sequelize_1[C(0x19b)][B(0x198)], n[B(0x18b)] = ![], n[C(0x189) + 'ue'] = {};
        const o = {};
        o[C(0x186)] = sequelize_1[B(0x19b)][B(0x190)], o[C(0x18b)] = ![], o[B(0x189) + 'ue'] = !![];
        const p = {};
        return p[B(0x186)] = sequelize_1[B(0x19b)][C(0x18e)], p[C(0x18b)] = !![], p[C(0x189) + 'ue'] = null, i[B(0x194) + 'e'](k[C(0x197)], {
            'id': l,
            'name': m,
            'flow': n,
            'isActive': o,
            'celularTeste': p,
            'userId': {
                'type': sequelize_1[B(0x19b)][C(0x19e)],
                'references': {
                    'model': k[C(0x185)],
                    'key': 'id'
                },
                'onUpdate': k[C(0x183)],
                'onDelete': k[B(0x183)],
                'allowNull': !![],
                'defaultValue': null
            },
            'tenantId': {
                'type': sequelize_1[B(0x19b)][C(0x19e)],
                'references': {
                    'model': k[B(0x178)],
                    'key': 'id'
                },
                'onUpdate': k[C(0x183)],
                'onDelete': k[C(0x18c)],
                'allowNull': ![],
                'defaultValue': 0x1
            },
            'createdAt': {
                'type': sequelize_1[B(0x19b)][C(0x18f)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[B(0x19b)][C(0x18f)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const D = z, E = z, e = {};
        e[D(0x17c)] = E(0x17f);
        const f = e;
        return d[D(0x196)](f[E(0x17c)]);
    }
};
function a() {
    const F = [
        'ChatFlow',
        'Tenants',
        'primaryKey',
        'Users',
        'jXobD',
        '1546601NpMCyn',
        'eBluX',
        'type',
        'autoIncrem',
        '95vtTQgO',
        'defaultVal',
        'erty',
        'allowNull',
        'MPhIw',
        '__esModule',
        'STRING',
        'DATE',
        'BOOLEAN',
        '8BzEVMO',
        'sequelize',
        '172836OJZrNl',
        'createTabl',
        'ent',
        'dropTable',
        'uZPfL',
        'JSON',
        'value',
        '33483510uqVaBJ',
        'DataTypes',
        'restrict',
        '1584632nkjIem',
        'INTEGER',
        '4052331EkubrS',
        'yRaAf',
        '3171874YiTixW',
        '5702832HBQyIx',
        'exports',
        'fudpI',
        'CASCADE',
        'defineProp'
    ];
    a = function () {
        return F;
    };
    return a();
}