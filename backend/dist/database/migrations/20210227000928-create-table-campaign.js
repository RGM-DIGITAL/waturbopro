'use strict';
const L = b, M = b;
(function (c, d) {
    const J = b, K = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(J(0x10f)) / (-0xab6 + -0x1358 + 0xab * 0x2d) * (parseInt(K(0x10a)) / (-0x1116 * -0x1 + 0x36b + -0x147f)) + parseInt(J(0x102)) / (-0xad1 + -0x459 * 0x2 + -0x1 * -0x1386) * (parseInt(K(0x104)) / (-0x1fdd + -0xacf * 0x1 + 0x2ab0)) + parseInt(J(0x105)) / (-0x26cc + 0x1918 + 0xdb9) + parseInt(J(0xef)) / (-0x11bf + -0x1 * 0xa13 + 0x21 * 0xd8) * (parseInt(K(0xea)) / (0x21d6 + 0x14 * -0x188 + -0x32f)) + -parseInt(K(0xf8)) / (0x1950 + -0x1 * -0x20b1 + 0x369 * -0x11) * (parseInt(K(0xff)) / (-0x267f + 0x1 * 0x527 + 0x6ad * 0x5)) + -parseInt(J(0xfe)) / (-0x120 * 0x1c + -0x1fd8 + 0x3f62 * 0x1) + -parseInt(K(0xfc)) / (0x21e + 0x2 * -0x115a + 0x20a1) * (parseInt(K(0x113)) / (0x1 * -0x26e9 + 0x9f7 + 0x1cfe));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * -0x7691a + 0x4fe7 * 0x2 + 0xfb17c));
function a() {
    const R = [
        'STRING',
        '3lBzilk',
        'allowNull',
        '4529764cRocrW',
        '4111240pgxOWK',
        'TEXT',
        'INTEGER',
        'sxzYH',
        'SET\x20NULL',
        '882686btiucN',
        'CASCADE',
        'primaryKey',
        'exports',
        'value',
        '2PbYPzK',
        'VSqha',
        'ent',
        '__esModule',
        '617460tVCiCn',
        'dropTable',
        'all',
        'erty',
        'type',
        '1344IZEvfK',
        'autoIncrem',
        'DataTypes',
        'eYGcT',
        'createTabl',
        '3114cOAeXW',
        'sequelize',
        'ObvXo',
        'Tenants',
        'DATE',
        'siXMh',
        'Users',
        'wdlxG',
        'Whatsapps',
        '424EqWmBe',
        'Campaigns',
        'pending',
        'defineProp',
        '121QTvHlk',
        'PbTOq',
        '6285510eTbYKk',
        '196767cNXTqi',
        'vAvFY'
    ];
    a = function () {
        return R;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x5ce * 0x6 + -0xa2 * 0x30 + 0x1 * -0x38c);
        let h = e[f];
        return h;
    }, b(c, d);
}
const I = {};
I[L(0x10e)] = !![], Object[L(0xfb) + M(0xe8)](exports, M(0x112), I);
const sequelize_1 = require(L(0xf0));
module[L(0x10d)] = {
    'up': g => {
        const N = M, O = M, h = {};
        h[N(0x100)] = O(0xf9), h[O(0x108)] = N(0xfa), h[O(0xed)] = N(0xf7), h[O(0xfd)] = O(0x10b), h[O(0xf4)] = O(0x109), h[O(0xf6)] = O(0xf5), h[O(0x110)] = O(0xf2);
        const i = h, j = {};
        j[O(0xe9)] = sequelize_1[N(0xec)][N(0x107)], j[N(0x10c)] = !![], j[N(0xeb) + N(0x111)] = !![], j[N(0x103)] = ![];
        const k = {};
        k[O(0xe9)] = sequelize_1[O(0xec)][N(0x101)], k[N(0x103)] = ![];
        const l = {};
        return l[N(0xe9)] = sequelize_1[O(0xec)][N(0xf3)], l[N(0x103)] = ![], Promise[O(0x115)]([g[N(0xee) + 'e'](i[O(0x100)], {
                'id': j,
                'name': k,
                'start': l,
                'status': {
                    'type': sequelize_1[O(0xec)][N(0x101)],
                    'allowNull': ![],
                    'defaultValue': i[O(0x108)]
                },
                'sessionId': {
                    'type': sequelize_1[N(0xec)][N(0x107)],
                    'references': {
                        'model': i[N(0xed)],
                        'key': 'id'
                    },
                    'onUpdate': i[O(0xfd)],
                    'onDelete': i[N(0xf4)]
                },
                'message1': {
                    'type': sequelize_1[N(0xec)][N(0x106)],
                    'allowNull': ![]
                },
                'message2': {
                    'type': sequelize_1[O(0xec)][O(0x106)],
                    'allowNull': ![]
                },
                'message3': {
                    'type': sequelize_1[O(0xec)][O(0x106)],
                    'allowNull': ![]
                },
                'mediaUrl': {
                    'type': sequelize_1[N(0xec)][N(0x101)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'mediaType': {
                    'type': sequelize_1[O(0xec)][N(0x101)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'userId': {
                    'type': sequelize_1[N(0xec)][N(0x107)],
                    'references': {
                        'model': i[N(0xf6)],
                        'key': 'id'
                    },
                    'onUpdate': i[O(0xfd)],
                    'onDelete': i[N(0xf4)]
                },
                'tenantId': {
                    'type': sequelize_1[O(0xec)][O(0x107)],
                    'references': {
                        'model': i[O(0x110)],
                        'key': 'id'
                    },
                    'onUpdate': i[N(0xfd)],
                    'onDelete': i[N(0xfd)],
                    'allowNull': ![],
                    'defaultValue': 0x1
                },
                'createdAt': {
                    'type': sequelize_1[N(0xec)][N(0xf3)],
                    'allowNull': ![]
                },
                'updatedAt': {
                    'type': sequelize_1[N(0xec)][O(0xf3)],
                    'allowNull': ![]
                }
            })]);
    },
    'down': d => {
        const P = L, Q = M, e = {};
        e[P(0xf1)] = P(0xf9);
        const f = e;
        return Promise[P(0x115)]([d[Q(0x114)](f[Q(0xf1)])]);
    }
};