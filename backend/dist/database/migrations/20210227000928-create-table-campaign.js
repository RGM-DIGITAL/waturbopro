'use strict';
const L = b, M = b;
(function (c, d) {
    const J = b, K = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(J(0xe9)) / (-0x170a + -0x85b + 0x1f66) * (parseInt(K(0xed)) / (0x2d * -0xad + 0x1 * 0x1db3 + 0xb8)) + -parseInt(J(0x111)) / (0xa39 + 0x786 + -0x11bc) + parseInt(J(0xfc)) / (-0x3b * -0x7 + 0x16f6 + -0x188f) + parseInt(J(0xef)) / (0x2468 + -0x504 + -0x1f5f) + -parseInt(J(0xfe)) / (0x1 * 0x1f34 + -0x1 * -0x1c0f + -0x3b3d) * (-parseInt(K(0xe7)) / (0x1455 + 0x25a * 0x3 + -0x1b5c)) + parseInt(K(0xf5)) / (-0x3c0 + -0x3ad + 0x775) + -parseInt(J(0x10e)) / (0x71 * 0x1b + -0x148e + 0x8ac);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x4e104 + -0x2f5df * 0x1 + 0xadc4b));
const I = {};
I[L(0x108)] = !![], Object[L(0xfd) + L(0x110)](exports, M(0xf7), I);
function a() {
    const R = [
        '69585MgeqGg',
        '7pLebWF',
        'DATE',
        '933strNmi',
        'SET\x20NULL',
        'primaryKey',
        'INTEGER',
        '46MKBvxE',
        'sequelize',
        '69725jdtxLB',
        'type',
        'STRING',
        'createTabl',
        'exports',
        'TvUMz',
        '2875056FfjlfZ',
        'Users',
        '__esModule',
        'Whatsapps',
        'pnIhJ',
        'dropTable',
        'DataTypes',
        '298124LMMArZ',
        'defineProp',
        '520680Udnlgs',
        'ckWzM',
        'fqBGV',
        'all',
        'allowNull',
        'Tenants',
        'CASCADE',
        'TtZgw',
        'kwzHG',
        'pending',
        'value',
        'rtvtz',
        'TEXT',
        'ent',
        'eRHib',
        'autoIncrem',
        '2627928wpDScM',
        'Campaigns',
        'erty'
    ];
    a = function () {
        return R;
    };
    return a();
}
const sequelize_1 = require(L(0xee));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1f50 + 0x16bf * -0x1 + 0x36f6);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[L(0xf3)] = {
    'up': g => {
        const N = M, O = M, h = {};
        h[N(0x109)] = O(0x10f), h[N(0x100)] = N(0x107), h[N(0xff)] = N(0xf8), h[N(0xf4)] = N(0x104), h[N(0x10c)] = O(0xea), h[N(0xf9)] = O(0xf6), h[O(0x105)] = O(0x103);
        const i = h, j = {};
        j[O(0xf0)] = sequelize_1[O(0xfb)][O(0xec)], j[N(0xeb)] = !![], j[O(0x10d) + N(0x10b)] = !![], j[N(0x102)] = ![];
        const k = {};
        k[N(0xf0)] = sequelize_1[O(0xfb)][N(0xf1)], k[O(0x102)] = ![];
        const l = {};
        return l[N(0xf0)] = sequelize_1[N(0xfb)][N(0xe8)], l[O(0x102)] = ![], Promise[O(0x101)]([g[N(0xf2) + 'e'](i[O(0x109)], {
                'id': j,
                'name': k,
                'start': l,
                'status': {
                    'type': sequelize_1[O(0xfb)][O(0xf1)],
                    'allowNull': ![],
                    'defaultValue': i[O(0x100)]
                },
                'sessionId': {
                    'type': sequelize_1[O(0xfb)][O(0xec)],
                    'references': {
                        'model': i[O(0xff)],
                        'key': 'id'
                    },
                    'onUpdate': i[N(0xf4)],
                    'onDelete': i[O(0x10c)]
                },
                'message1': {
                    'type': sequelize_1[O(0xfb)][N(0x10a)],
                    'allowNull': ![]
                },
                'message2': {
                    'type': sequelize_1[O(0xfb)][N(0x10a)],
                    'allowNull': ![]
                },
                'message3': {
                    'type': sequelize_1[N(0xfb)][N(0x10a)],
                    'allowNull': ![]
                },
                'mediaUrl': {
                    'type': sequelize_1[O(0xfb)][N(0xf1)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'mediaType': {
                    'type': sequelize_1[N(0xfb)][O(0xf1)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'userId': {
                    'type': sequelize_1[O(0xfb)][O(0xec)],
                    'references': {
                        'model': i[O(0xf9)],
                        'key': 'id'
                    },
                    'onUpdate': i[O(0xf4)],
                    'onDelete': i[N(0x10c)]
                },
                'tenantId': {
                    'type': sequelize_1[N(0xfb)][N(0xec)],
                    'references': {
                        'model': i[N(0x105)],
                        'key': 'id'
                    },
                    'onUpdate': i[O(0xf4)],
                    'onDelete': i[O(0xf4)],
                    'allowNull': ![],
                    'defaultValue': 0x1
                },
                'createdAt': {
                    'type': sequelize_1[N(0xfb)][O(0xe8)],
                    'allowNull': ![]
                },
                'updatedAt': {
                    'type': sequelize_1[O(0xfb)][N(0xe8)],
                    'allowNull': ![]
                }
            })]);
    },
    'down': d => {
        const P = L, Q = M, e = {};
        e[P(0x106)] = P(0x10f);
        const f = e;
        return Promise[Q(0x101)]([d[Q(0xfa)](f[P(0x106)])]);
    }
};