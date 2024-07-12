'use strict';
const x = b, y = b;
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(v(0x86)) / (-0x1da6 + 0x17f9 + 0x5ae) + -parseInt(w(0x8b)) / (-0x4af + -0x2 * -0x60d + -0x769) + -parseInt(w(0x87)) / (-0x1039 + 0x1bef * 0x1 + -0xbb3) + -parseInt(v(0x91)) / (-0x110a + 0x1951 * -0x1 + 0x2a5f * 0x1) + parseInt(v(0x9a)) / (-0xd3 * 0x17 + -0x1 * -0x1026 + -0xb5 * -0x4) + -parseInt(w(0x93)) / (0x25 * -0xc3 + 0x1 * 0x1433 + 0x802) * (-parseInt(w(0x99)) / (0xc9a + -0x1ac3 * 0x1 + 0x1 * 0xe30)) + -parseInt(w(0x89)) / (0x4e4 * 0x7 + -0x10ee + -0x1146) * (-parseInt(w(0xa3)) / (0x1577 * 0x1 + 0x107d * -0x1 + -0x4f1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x107 * -0x6a1 + -0x8ce09 * -0x1 + -0x59e * 0xdf));
const u = {};
u[x(0xa6)] = !![], Object[y(0x9e) + x(0xa1)](exports, y(0x92), u);
function a() {
    const D = [
        'type',
        'StepsReply',
        '4663421nyvKOG',
        '6010530lqswRR',
        'SET\x20NULL',
        'CASCADE',
        'createTabl',
        'defineProp',
        'allowNull',
        'autoIncrem',
        'erty',
        'ZCjVm',
        '62487iQVYAI',
        'LgjQS',
        'OaYGo',
        'value',
        'VqANK',
        'AutoReply',
        'mdjtT',
        'INTEGER',
        '414475YKqIFq',
        '1805649ItaqeK',
        'dropTable',
        '696palzRe',
        'DATE',
        '2528918PShMFZ',
        'DataTypes',
        'ent',
        'STRING',
        'sequelize',
        'Users',
        '1271252ijUjYx',
        '__esModule',
        '6MqfoRB',
        'exports',
        'BsNGD',
        'primaryKey'
    ];
    a = function () {
        return D;
    };
    return a();
}
const sequelize_1 = require(x(0x8f));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x71 * 0x33 + -0x752 * -0x3 + -0x21 * 0x155);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[y(0x94)] = {
    'up': g => {
        const z = y, A = x, h = {};
        h[z(0x95)] = A(0x98), h[z(0x84)] = z(0xa8), h[z(0xa5)] = z(0x9c), h[z(0xa2)] = A(0x90), h[z(0xa7)] = A(0x9b);
        const i = h, j = {};
        j[A(0x97)] = sequelize_1[z(0x8c)][A(0x85)], j[A(0xa0) + z(0x8d)] = !![], j[A(0x96)] = !![], j[A(0x9f)] = ![];
        const k = {};
        k[z(0x97)] = sequelize_1[A(0x8c)][z(0x8e)], k[z(0x9f)] = ![];
        const l = {};
        return l[z(0x97)] = sequelize_1[z(0x8c)][z(0x85)], l[z(0x9f)] = ![], g[A(0x9d) + 'e'](i[z(0x95)], {
            'id': j,
            'reply': k,
            'stepOrder': l,
            'idAutoReply': {
                'type': sequelize_1[A(0x8c)][z(0x85)],
                'references': {
                    'model': i[z(0x84)],
                    'key': 'id'
                },
                'onUpdate': i[A(0xa5)],
                'onDelete': i[z(0xa5)]
            },
            'action': {
                'type': sequelize_1[z(0x8c)][A(0x85)],
                'allowNull': ![],
                'defaultValue': 0x0
            },
            'userId': {
                'type': sequelize_1[A(0x8c)][z(0x85)],
                'references': {
                    'model': i[A(0xa2)],
                    'key': 'id'
                },
                'onUpdate': i[z(0xa5)],
                'onDelete': i[A(0xa7)]
            },
            'createdAt': {
                'type': sequelize_1[A(0x8c)][z(0x8a)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[A(0x8c)][A(0x8a)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const B = x, C = x, e = {};
        e[B(0xa4)] = B(0x98);
        const f = e;
        return d[C(0x88)](f[C(0xa4)]);
    }
};