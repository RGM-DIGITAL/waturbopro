'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xf * -0x26b + -0x2 * 0xe96 + -0x25a * -0x1c);
        let h = e[f];
        return h;
    }, b(c, d);
}
const B = b, C = b;
(function (c, d) {
    const z = b, A = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(z(0x74)) / (0x5f6 + 0xe75 + -0x146a) + parseInt(z(0x6e)) / (0x141e + 0x2123 + -0x1 * 0x353f) * (parseInt(A(0x8a)) / (0x6 * 0x1b8 + 0x59 * -0x11 + -0x464)) + parseInt(z(0x88)) / (0xde4 * 0x1 + 0x1 * -0x1969 + -0xb89 * -0x1) * (parseInt(A(0x81)) / (-0x3a + -0x1b7 * -0x8 + -0xd79)) + parseInt(z(0x75)) / (-0x2167 + -0x1303 * 0x1 + 0x2 * 0x1a38) * (-parseInt(z(0x6d)) / (-0xe05 + -0xeef + 0x1cfb)) + parseInt(A(0x78)) / (-0x7 * 0x3a9 + -0x113f + 0x2ae6) + parseInt(A(0x86)) / (0x61 * 0x4f + 0x1 * 0x22aa + -0x2048 * 0x2) + parseInt(A(0x84)) / (-0xd64 + 0x113 * 0xb + 0x19d) * (parseInt(A(0x73)) / (-0x1fcb * 0x1 + -0xa67 * -0x1 + 0xb1 * 0x1f));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x6f017 * -0x1 + 0x75c63 + 0x9c61 * -0xd));
function a() {
    const H = [
        '11EBTrgu',
        '540920iziyAQ',
        '45516qdbskx',
        'exports',
        'STRING',
        '1402280ZNkTWW',
        'dropTable',
        'INTEGER',
        'Users',
        'SET\x20NULL',
        'qbgGg',
        'Tickets',
        'VvxpH',
        'erty',
        '4945IwAHJi',
        'defineProp',
        'DataTypes',
        '4293490jyxABV',
        'BOOLEAN',
        '3253986ZLTmGV',
        'nPspZ',
        '844cFiZvQ',
        'ahbyK',
        '6uYGkPE',
        'ckjUF',
        'Messages',
        'DATE',
        'ZDtjH',
        'primaryKey',
        'createTabl',
        'sequelize',
        'CASCADE',
        'defaultVal',
        'value',
        '301OOitDL',
        '108904WBXXXw',
        'type',
        'TEXT',
        '__esModule',
        'allowNull'
    ];
    a = function () {
        return H;
    };
    return a();
}
const y = {};
y[B(0x6c)] = !![], Object[C(0x82) + B(0x80)](exports, C(0x71), y);
const sequelize_1 = require(B(0x69));
module[B(0x76)] = {
    'up': j => {
        const D = B, E = B, k = {};
        k[D(0x8e)] = D(0x8c), k[D(0x87)] = E(0x7b), k[D(0x89)] = D(0x6a), k[E(0x7d)] = E(0x7c), k[E(0x8b)] = D(0x7e);
        const l = k, m = {};
        m[D(0x6f)] = sequelize_1[D(0x83)][D(0x77)], m[E(0x67)] = !![], m[D(0x72)] = ![];
        const n = {};
        n[D(0x6f)] = sequelize_1[E(0x83)][E(0x70)], n[E(0x72)] = ![];
        const o = {};
        o[D(0x6f)] = sequelize_1[E(0x83)][E(0x7a)], o[E(0x72)] = ![], o[E(0x6b) + 'ue'] = 0x0;
        const p = {};
        p[E(0x6f)] = sequelize_1[D(0x83)][E(0x85)], p[E(0x72)] = ![], p[D(0x6b) + 'ue'] = ![];
        const q = {};
        q[E(0x6f)] = sequelize_1[D(0x83)][E(0x77)];
        const r = {};
        return r[D(0x6f)] = sequelize_1[D(0x83)][D(0x77)], j[D(0x68) + 'e'](l[D(0x8e)], {
            'id': m,
            'body': n,
            'ack': o,
            'read': p,
            'mediaType': q,
            'mediaUrl': r,
            'userId': {
                'type': sequelize_1[D(0x83)][E(0x7a)],
                'references': {
                    'model': l[E(0x87)],
                    'key': 'id'
                },
                'onUpdate': l[E(0x89)],
                'onDelete': l[E(0x7d)]
            },
            'ticketId': {
                'type': sequelize_1[E(0x83)][D(0x7a)],
                'references': {
                    'model': l[D(0x8b)],
                    'key': 'id'
                },
                'onUpdate': l[E(0x89)],
                'onDelete': l[D(0x89)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[E(0x83)][D(0x8d)](-0x39 * 0x2d + -0x1 * 0x4a5 + 0xeb0),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[D(0x83)][D(0x8d)](0x2377 + -0xd * 0x91 + -0x1c14),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const F = B, G = B, e = {};
        e[F(0x7f)] = G(0x8c);
        const f = e;
        return d[F(0x79)](f[F(0x7f)]);
    }
};