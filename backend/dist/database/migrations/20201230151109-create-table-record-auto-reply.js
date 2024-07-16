'use strict';
const B = b, C = b;
function a() {
    const H = [
        'primaryKey',
        '2632220xHwbPc',
        'RjSGN',
        'ent',
        'defineProp',
        '278fBBQNB',
        'value',
        'dropTable',
        'erty',
        'allowNull',
        'YJABv',
        '9iyoyGT',
        '756OXCXnR',
        'INTEGER',
        'LqKPX',
        '__esModule',
        'CASCADE',
        'AutoReplyL',
        '4939896kBmhai',
        'autoIncrem',
        'dFrZI',
        'type',
        'vKgTz',
        '20XoWTCO',
        '2679501Xdktnx',
        'sequelize',
        '2866647rKRZAn',
        '56940yTFAwF',
        'ogs',
        'DATE',
        'SMfTo',
        '3594AsXkrd',
        'STRING',
        'Tickets',
        'Contacts',
        '168NdsBYu',
        'DataTypes',
        'createTabl',
        '985970gYhgMn',
        'restrict',
        'exports'
    ];
    a = function () {
        return H;
    };
    return a();
}
(function (c, d) {
    const z = b, A = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(z(0xe7)) / (-0x1ba1 * 0x1 + 0x1e13 + 0x19 * -0x19) * (-parseInt(A(0xcd)) / (-0x1 * 0x5f2 + 0x3 * -0xc0e + 0x2a1e)) + -parseInt(A(0xe2)) / (-0x154f * -0x1 + 0x43 * -0x1 + -0x703 * 0x3) + parseInt(A(0xdf)) / (0x1 * -0x477 + 0x7 * -0x3a0 + 0x1ddb) * (-parseInt(A(0xc5)) / (-0x194 + 0x1aab + -0xc89 * 0x2)) + parseInt(z(0xe3)) / (-0x1cc4 + 0x243 + 0x1a87) * (-parseInt(z(0xd4)) / (-0x2541 * -0x1 + 0x33c * 0x1 + 0x1 * -0x2876)) + -parseInt(A(0xda)) / (-0xfe9 * -0x2 + -0x621 + -0x19a9) + parseInt(A(0xd3)) / (-0x9c5 * 0x1 + 0x148 * -0x12 + 0x7 * 0x4b2) * (parseInt(z(0xc9)) / (-0x22ad + -0x23a3 + 0xa * 0x709)) + -parseInt(z(0xe0)) / (-0xdf9 + -0x1b8c + 0x2990) * (-parseInt(A(0xc2)) / (0x4 * 0x807 + 0x16f * 0x6 + -0x28aa));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x39a6d + -0x9106c + 0x15a829));
const y = {};
y[B(0xce)] = !![], Object[C(0xcc) + C(0xd0)](exports, C(0xd7), y);
const sequelize_1 = require(C(0xe1));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2ea * 0xc + -0x10a7 + -0x1190);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[C(0xc7)] = {
    'up': j => {
        const D = B, E = B, k = {};
        k[D(0xdc)] = D(0xd9) + D(0xe4), k[D(0xd2)] = D(0xc1), k[E(0xe6)] = D(0xd8), k[D(0xde)] = E(0xc6), k[E(0xca)] = D(0xe9);
        const l = k, m = {};
        m[D(0xdd)] = sequelize_1[D(0xc3)][E(0xd5)], m[D(0xdb) + D(0xcb)] = !![], m[D(0xc8)] = !![], m[E(0xd1)] = ![];
        const n = {};
        n[E(0xdd)] = sequelize_1[E(0xc3)][E(0xd5)], n[E(0xd1)] = ![];
        const o = {};
        o[D(0xdd)] = sequelize_1[E(0xc3)][D(0xe8)], o[E(0xd1)] = ![];
        const p = {};
        p[D(0xdd)] = sequelize_1[E(0xc3)][D(0xd5)], p[D(0xd1)] = ![];
        const q = {};
        q[D(0xdd)] = sequelize_1[E(0xc3)][D(0xe8)], q[E(0xd1)] = ![];
        const r = {};
        return r[E(0xdd)] = sequelize_1[E(0xc3)][D(0xe8)], r[D(0xd1)] = ![], j[E(0xc4) + 'e'](l[D(0xdc)], {
            'id': m,
            'autoReplyId': n,
            'autoReplyName': o,
            'stepsReplyId': p,
            'stepsReplyMessage': q,
            'wordsReply': r,
            'contactId': {
                'type': sequelize_1[D(0xc3)][D(0xd5)],
                'references': {
                    'model': l[D(0xd2)],
                    'key': 'id'
                },
                'onUpdate': l[D(0xe6)],
                'onDelete': l[D(0xde)]
            },
            'ticketId': {
                'type': sequelize_1[D(0xc3)][D(0xd5)],
                'references': {
                    'model': l[D(0xca)],
                    'key': 'id'
                },
                'onUpdate': l[E(0xe6)],
                'onDelete': l[E(0xde)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[D(0xc3)][E(0xe5)](0x18ab + 0x1169 + -0x2a0e),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[E(0xc3)][E(0xe5)](0x2549 + 0x109 * 0x4 + -0x2967),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const F = B, G = C, e = {};
        e[F(0xd6)] = F(0xd9) + F(0xe4);
        const f = e;
        return d[F(0xcf)](f[G(0xd6)]);
    }
};