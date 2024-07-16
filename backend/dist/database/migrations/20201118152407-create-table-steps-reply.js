'use strict';
const x = b, y = b;
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(v(0x84)) / (-0x4 * -0x7bb + 0x1 * -0x24f8 + -0x1 * -0x60d) * (parseInt(v(0x90)) / (0x798 + 0x1ff5 + -0x278b)) + parseInt(w(0x82)) / (0x58d + 0x3a * 0x7e + 0x2 * -0x110b) + -parseInt(v(0x7a)) / (-0x182b + 0x9ae + 0x4f * 0x2f) + parseInt(w(0x7f)) / (-0x10f4 + -0x9d * -0x11 + 0x68c) * (parseInt(w(0x8a)) / (0xd6e + 0x1 * -0x2407 + -0x1 * -0x169f)) + -parseInt(w(0x86)) / (0x1 * 0x41b + 0x1512 + -0x2 * 0xc93) + parseInt(v(0x7c)) / (0x1f4e + -0x22c4 + 0x37e) + -parseInt(v(0x92)) / (0x933 + 0x1b28 + -0x2452) * (-parseInt(v(0x83)) / (-0x2187 + 0x206d + 0x124 * 0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1443 * -0x53 + 0x29637 + -0x86dd1 * -0x1));
function a() {
    const D = [
        'AutoReply',
        'type',
        '10rnrerS',
        'SET\x20NULL',
        'autoIncrem',
        '1637370cptiiQ',
        '11060ecqxce',
        '7YSUunD',
        'CASCADE',
        '35490cKvcDM',
        'AVeTh',
        '__esModule',
        'sequelize',
        '69576DVbgxY',
        'HUvZQ',
        'INTEGER',
        'dropTable',
        'allowNull',
        'ent',
        '133784cMsRhX',
        'StepsReply',
        '3447JRYVut',
        'CRTbp',
        'value',
        'DATE',
        'STRING',
        'bIHxc',
        'Users',
        'defineProp',
        'qlWDZ',
        'exports',
        'erty',
        'DataTypes',
        'primaryKey',
        'PeeRl',
        '1159468nsBFco',
        'createTabl',
        '496064NzCTXn'
    ];
    a = function () {
        return D;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x125e * 0x2 + 0x1ecf + -0x4312);
        let h = e[f];
        return h;
    }, b(c, d);
}
const u = {};
u[x(0x94)] = !![], Object[y(0x99) + y(0x9c)](exports, y(0x88), u);
const sequelize_1 = require(y(0x89));
module[y(0x9b)] = {
    'up': g => {
        const z = y, A = y, h = {};
        h[z(0x93)] = z(0x91), h[z(0x87)] = A(0x7d), h[z(0x97)] = z(0x85), h[A(0x8b)] = A(0x98), h[A(0x79)] = z(0x80);
        const i = h, j = {};
        j[z(0x7e)] = sequelize_1[z(0x9d)][A(0x8c)], j[z(0x81) + z(0x8f)] = !![], j[z(0x9e)] = !![], j[z(0x8e)] = ![];
        const k = {};
        k[A(0x7e)] = sequelize_1[z(0x9d)][z(0x96)], k[z(0x8e)] = ![];
        const l = {};
        return l[A(0x7e)] = sequelize_1[z(0x9d)][A(0x8c)], l[z(0x8e)] = ![], g[A(0x7b) + 'e'](i[z(0x93)], {
            'id': j,
            'reply': k,
            'stepOrder': l,
            'idAutoReply': {
                'type': sequelize_1[z(0x9d)][z(0x8c)],
                'references': {
                    'model': i[z(0x87)],
                    'key': 'id'
                },
                'onUpdate': i[z(0x97)],
                'onDelete': i[A(0x97)]
            },
            'action': {
                'type': sequelize_1[A(0x9d)][A(0x8c)],
                'allowNull': ![],
                'defaultValue': 0x0
            },
            'userId': {
                'type': sequelize_1[A(0x9d)][z(0x8c)],
                'references': {
                    'model': i[A(0x8b)],
                    'key': 'id'
                },
                'onUpdate': i[z(0x97)],
                'onDelete': i[z(0x79)]
            },
            'createdAt': {
                'type': sequelize_1[z(0x9d)][A(0x95)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[A(0x9d)][A(0x95)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const B = x, C = y, e = {};
        e[B(0x9a)] = C(0x91);
        const f = e;
        return d[C(0x8d)](f[C(0x9a)]);
    }
};