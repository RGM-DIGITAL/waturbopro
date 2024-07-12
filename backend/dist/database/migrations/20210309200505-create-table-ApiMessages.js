'use strict';
const N = b, O = b;
(function (c, d) {
    const L = b, M = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(L(0x13a)) / (-0x13 * 0x1e7 + 0x742 * -0x4 + 0x412e) * (-parseInt(L(0x131)) / (0x1d9e + -0x97f + -0x141d)) + -parseInt(M(0x14d)) / (0x387 + 0x3 * -0x2e7 + 0x531) * (-parseInt(L(0x150)) / (0x2067 + -0x17e0 + 0x883 * -0x1)) + parseInt(L(0x143)) / (-0xb65 * 0x3 + 0x1183 * 0x1 + 0x10b1) + -parseInt(L(0x157)) / (-0x9eb + -0x1350 + 0x1 * 0x1d41) * (parseInt(L(0x152)) / (-0x2 * -0xa68 + 0x1 * -0x2209 + 0xd40)) + parseInt(M(0x138)) / (-0x13a9 + 0x23d3 + 0x1 * -0x1022) * (-parseInt(M(0x133)) / (0x814 * -0x1 + -0x1f1a + 0x2737)) + -parseInt(M(0x13d)) / (-0x1b72 + 0xdb * 0x2a + -0x872) + parseInt(M(0x142)) / (0x64a + 0x1b * -0x52 + 0x267);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x17 * 0x23e5 + 0x428e1 * -0x1 + -0x454 * -0x3fe));
function a() {
    const T = [
        'STRING',
        'DATE',
        'vfiuW',
        'value',
        'ApiMessage',
        '3fLswvP',
        'sequelize',
        'SET\x20NULL',
        '2231624nZnIWH',
        'all',
        '2405809frWjFf',
        'SmMyn',
        'literal',
        'DataTypes',
        'TBojO',
        '18fiAMyq',
        'defineProp',
        'erty',
        'exports',
        '_uuid()',
        'gen_random',
        'TEXT',
        '241466PMbQpJ',
        'createTabl',
        '40473zvRQlj',
        'INTEGER',
        'obHEe',
        'UUID',
        'notEmpty',
        '376GXelob',
        'JSONB',
        '5poIXHd',
        'Whatsapps',
        'dropTable',
        '7765360TRlUeK',
        'Sequelize',
        'CASCADE',
        'vDcvP',
        '__esModule',
        '20989980IZtYoV',
        '4024775LitEUO',
        'len',
        'Tenants',
        'dAhUL',
        'KSZrC'
    ];
    a = function () {
        return T;
    };
    return a();
}
const K = {};
K[N(0x14b)] = !![], Object[O(0x158) + O(0x159)](exports, N(0x141), K);
const sequelize_1 = require(O(0x14e));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x251 + -0x75a * 0x1 + 0x639);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[O(0x15a)] = {
    'up': f => {
        const P = O, Q = O, g = {};
        g[P(0x14a)] = P(0x14c) + 's', g[Q(0x156)] = P(0x15c) + Q(0x15b), g[Q(0x147)] = P(0x13b), g[P(0x135)] = P(0x13f), g[Q(0x153)] = Q(0x14f), g[Q(0x140)] = P(0x145);
        const h = g, i = {};
        i[P(0x137)] = !![];
        const j = {};
        return j[P(0x137)] = !![], j[P(0x144)] = [
            -0x8 * 0xc2 + -0x2f * 0x7 + 0x765,
            -0x2497 + 0xeab + 0x61 * 0x3a
        ], Promise[P(0x151)]([f[Q(0x132) + 'e'](h[Q(0x14a)], {
                'id': {
                    'allowNull': ![],
                    'primaryKey': !![],
                    'type': sequelize_1[P(0x155)][Q(0x136)],
                    'defaultValue': sequelize_1[Q(0x13e)][Q(0x154)](h[P(0x156)])
                },
                'messageId': {
                    'type': sequelize_1[P(0x155)][Q(0x148)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'externalKey': {
                    'type': sequelize_1[P(0x155)][Q(0x148)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'body': {
                    'type': sequelize_1[P(0x155)][Q(0x130)],
                    'allowNull': ![],
                    'validate': i
                },
                'ack': {
                    'type': sequelize_1[Q(0x155)][Q(0x134)],
                    'allowNull': ![],
                    'defaultValue': 0x0
                },
                'number': {
                    'type': sequelize_1[Q(0x155)][P(0x148)],
                    'allowNull': ![],
                    'validate': j
                },
                'mediaName': {
                    'type': sequelize_1[P(0x155)][P(0x130)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'timestamp': {
                    'type': sequelize_1[Q(0x155)][P(0x134)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'sessionId': {
                    'type': sequelize_1[P(0x155)][Q(0x134)],
                    'references': {
                        'model': h[Q(0x147)],
                        'key': 'id'
                    },
                    'onUpdate': h[Q(0x135)],
                    'onDelete': h[P(0x153)]
                },
                'tenantId': {
                    'type': sequelize_1[Q(0x155)][Q(0x134)],
                    'references': {
                        'model': h[Q(0x140)],
                        'key': 'id'
                    },
                    'onUpdate': h[Q(0x135)],
                    'onDelete': h[Q(0x135)],
                    'allowNull': ![],
                    'defaultValue': 0x1
                },
                'messageWA': {
                    'type': sequelize_1[P(0x155)][P(0x139)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'apiConfig': {
                    'type': sequelize_1[P(0x155)][P(0x139)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'createdAt': {
                    'type': sequelize_1[P(0x155)][P(0x149)],
                    'allowNull': ![]
                },
                'updatedAt': {
                    'type': sequelize_1[P(0x155)][P(0x149)],
                    'allowNull': ![]
                }
            })]);
    },
    'down': d => {
        const R = O, S = N, e = {};
        e[R(0x146)] = S(0x14c) + 's';
        const f = e;
        return Promise[R(0x151)]([d[R(0x13c)](f[S(0x146)])]);
    }
};