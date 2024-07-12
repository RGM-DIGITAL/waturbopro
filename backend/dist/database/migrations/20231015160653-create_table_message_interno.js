'use strict';
const F = b, G = b;
(function (c, d) {
    const D = b, E = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(D(0xaa)) / (-0x17db + -0x19ac + 0x3188) + parseInt(E(0xbf)) / (0x3b * 0x6 + -0x57c * 0x7 + -0x1 * -0x2504) + parseInt(D(0xb8)) / (0x23c1 + 0x1247 * 0x1 + 0x1 * -0x3605) + -parseInt(D(0xc3)) / (-0x2528 + 0x10b9 + 0x1473) * (-parseInt(E(0xb1)) / (-0xac2 + 0x5ec + 0x4db)) + parseInt(D(0x9c)) / (0x1 * 0xeb7 + -0xd63 + -0x14e) + -parseInt(D(0xa0)) / (-0x243 * 0x5 + -0x10fe + 0x1c54) + -parseInt(E(0xb7)) / (0x18bb * 0x1 + 0x170f * -0x1 + 0xa * -0x2a) * (parseInt(E(0x9a)) / (-0xb95 + 0x824 + -0x5 * -0xb2));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xc4b8f + 0x7 * 0xdda1 + 0xe9436));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x4cc + -0x14dd + 0x51 * 0x53);
        let h = e[f];
        return h;
    }, b(c, d);
}
const C = {};
C[F(0xc2)] = !![], Object[F(0xb2) + F(0xa5)](exports, G(0xb3), C);
function a() {
    const L = [
        'Tenants',
        'defaultVal',
        '232RAodbu',
        '1405059qlcuRS',
        'allowNull',
        'TEXT',
        'GcgeX',
        'autoIncrem',
        'primaryKey',
        'BOOLEAN',
        '2080824uYLYkI',
        'INTEGER',
        'InternalMe',
        'value',
        '28WPtMmF',
        'createTabl',
        'Users',
        '1086867zLiumv',
        'Groups',
        '5614080eRBQXt',
        'exports',
        'type',
        'CASCADE',
        '1744407iURiqI',
        'eMSCT',
        'sequelize',
        'cZUvJ',
        'ent',
        'erty',
        'SET\x20NULL',
        'DataTypes',
        'HUEKL',
        'JfhAt',
        '866832ntctMm',
        'BIGINT',
        'DATE',
        'uYxaP',
        'tbdsU',
        'dropTable',
        'STRING',
        '704915hRHsQY',
        'defineProp',
        '__esModule',
        'ssage'
    ];
    a = function () {
        return L;
    };
    return a();
}
const sequelize_1 = require(G(0xa2));
module[F(0x9d)] = {
    'up': i => {
        const H = F, I = F, j = {};
        j[H(0xae)] = I(0xc1) + H(0xb4), j[I(0xa1)] = I(0xc5), j[I(0xbb)] = I(0x9f), j[H(0xa9)] = H(0xa6), j[I(0xa8)] = H(0x9b), j[I(0xa3)] = H(0xb5);
        const k = j, l = {};
        l[H(0x9e)] = sequelize_1[I(0xa7)][H(0xab)], l[I(0xbd)] = !![], l[I(0xbc) + H(0xa4)] = !![], l[H(0xb9)] = ![];
        const m = {};
        m[I(0x9e)] = sequelize_1[H(0xa7)][H(0xba)], m[I(0xb9)] = ![];
        const n = {};
        n[H(0x9e)] = sequelize_1[H(0xa7)][H(0xbe)], n[H(0xb9)] = ![], n[H(0xb6) + 'ue'] = ![];
        const o = {};
        o[I(0x9e)] = sequelize_1[I(0xa7)][I(0xb0)];
        const p = {};
        return p[I(0x9e)] = sequelize_1[I(0xa7)][I(0xb0)], i[I(0xc4) + 'e'](k[H(0xae)], {
            'id': l,
            'text': m,
            'read': n,
            'mediaType': o,
            'mediaUrl': p,
            'senderId': {
                'type': sequelize_1[H(0xa7)][I(0xc0)],
                'references': {
                    'model': k[H(0xa1)],
                    'key': 'id'
                },
                'onUpdate': k[H(0xbb)],
                'onDelete': k[H(0xa9)]
            },
            'receiverId': {
                'type': sequelize_1[H(0xa7)][I(0xc0)],
                'references': {
                    'model': k[H(0xa1)],
                    'key': 'id'
                },
                'onUpdate': k[I(0xbb)],
                'onDelete': k[I(0xa9)]
            },
            'groupId': {
                'type': sequelize_1[I(0xa7)][I(0xc0)],
                'references': {
                    'model': k[H(0xa8)],
                    'key': 'id'
                },
                'onUpdate': k[H(0xbb)],
                'onDelete': k[H(0xbb)]
            },
            'tenantId': {
                'type': sequelize_1[H(0xa7)][I(0xc0)],
                'references': {
                    'model': k[H(0xa3)],
                    'key': 'id'
                },
                'onUpdate': k[H(0xbb)],
                'onDelete': k[I(0xbb)],
                'allowNull': ![],
                'defaultValue': 0x1
            },
            'timestamp': {
                'type': sequelize_1[H(0xa7)][I(0xab)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[H(0xa7)][I(0xac)](0x2 * 0xcea + -0x222 * -0xe + -0xfa * 0x39),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[H(0xa7)][H(0xac)](0x1 * 0x1da9 + -0x8 * -0x3c5 + -0x3bcb * 0x1),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const J = F, K = F, e = {};
        e[J(0xad)] = K(0xc1) + J(0xb4);
        const f = e;
        return d[K(0xaf)](f[K(0xad)]);
    }
};