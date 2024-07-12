'use strict';
const x = b, y = b;
function a() {
    const D = [
        'DATE',
        'StepsReply',
        'ILFRu',
        '9ezQAPY',
        '5861896VCtrEZ',
        '5YnHKiM',
        'allowNull',
        'tomSQ',
        '6541160dccccm',
        '9904244CBdftQ',
        '__esModule',
        'DataTypes',
        'autoIncrem',
        '437422mblTvR',
        'NiFgl',
        '3917526wjDKmw',
        'Users',
        'STRING',
        'primaryKey',
        'Actions',
        'CASCADE',
        'ijVRH',
        'INTEGER',
        'exports',
        '8244940ntGoRT',
        'dfwsI',
        'createTabl',
        'erty',
        '24UnFBZW',
        '508696BazMXe',
        'sequelize',
        'defineProp',
        'qEUqj',
        'value',
        'SET\x20NULL',
        'type',
        'ent',
        'dropTable'
    ];
    a = function () {
        return D;
    };
    return a();
}
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(v(0xd2)) / (0x9b5 + 0x2cc + -0xc80) * (-parseInt(w(0xda)) / (0x1b * 0xb5 + 0x1327 * 0x1 + -0x263c)) + -parseInt(w(0xe9)) / (0x1233 + 0xc07 + -0x1e37) * (-parseInt(w(0xea)) / (0x16ee + 0x1fd5 * -0x1 + 0x8eb * 0x1)) + parseInt(w(0xe5)) / (0xfe4 + 0x146b + -0x3a1 * 0xa) + -parseInt(v(0xdc)) / (-0x1 * 0x22d + -0x2413 + 0x2646) + -parseInt(v(0xd6)) / (-0x467 + -0x320 + 0x78e * 0x1) + -parseInt(w(0xd1)) / (-0x1586 + 0x3fc + 0x1192) * (-parseInt(v(0xd0)) / (-0xfda * 0x1 + 0x1a6e + -0xa8b)) + parseInt(w(0xd5)) / (-0x1 * -0x19e2 + -0x74 * 0x49 + 0x2 * 0x39e);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x403de + -0x16faf * 0x10 + 0x17 * 0x1c3f1));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1f2 + 0x330 * 0x2 + -0x788);
        let h = e[f];
        return h;
    }, b(c, d);
}
const u = {};
u[x(0xee)] = !![], Object[x(0xec) + x(0xe8)](exports, x(0xd7), u);
const sequelize_1 = require(x(0xeb));
module[y(0xe4)] = {
    'up': e => {
        const z = y, A = x, f = {};
        f[z(0xe2)] = z(0xce) + z(0xe0), f[A(0xcf)] = z(0xce), f[z(0xdb)] = z(0xe1), f[z(0xed)] = z(0xdd), f[z(0xe6)] = A(0xef);
        const g = f, h = {};
        return h[A(0xca)] = sequelize_1[A(0xd8)][z(0xe3)], h[z(0xd9) + z(0xcb)] = !![], h[A(0xdf)] = !![], h[z(0xd3)] = ![], e[z(0xe7) + 'e'](g[A(0xe2)], {
            'id': h,
            'stepReplyId': {
                'type': sequelize_1[A(0xd8)][A(0xe3)],
                'references': {
                    'model': g[A(0xcf)],
                    'key': 'id'
                },
                'onUpdate': g[A(0xdb)],
                'onDelete': g[z(0xdb)]
            },
            'words': {
                'type': sequelize_1[A(0xd8)][A(0xde)],
                'allowNull': ![]
            },
            'action': {
                'type': sequelize_1[z(0xd8)][A(0xe3)],
                'allowNull': ![],
                'defaultValue': 0x0
            },
            'reply': {
                'type': sequelize_1[z(0xd8)][z(0xde)],
                'allowNull': ![]
            },
            'userId': {
                'type': sequelize_1[A(0xd8)][z(0xe3)],
                'references': {
                    'model': g[z(0xed)],
                    'key': 'id'
                },
                'onUpdate': g[A(0xdb)],
                'onDelete': g[z(0xe6)]
            },
            'createdAt': {
                'type': sequelize_1[A(0xd8)][z(0xcd)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[z(0xd8)][A(0xcd)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const B = y, C = x, e = {};
        e[B(0xd4)] = B(0xce) + B(0xe0);
        const f = e;
        return d[C(0xcc)](f[C(0xd4)]);
    }
};