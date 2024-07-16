'use strict';
const N = b, O = b;
(function (c, d) {
    const L = b, M = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(L(0x127)) / (0xd7 * 0xb + 0xab9 + 0x3 * -0x6a7) * (-parseInt(M(0x129)) / (-0x26de + -0x1b35 + 0x1607 * 0x3)) + -parseInt(L(0x12f)) / (0x11e1 + 0x26ff + -0x38dd) * (-parseInt(L(0x11e)) / (0x2 * 0x7a7 + -0x2 * 0x105b + 0x116c)) + -parseInt(M(0x126)) / (0x1bca * -0x1 + -0x123d + 0x1c * 0x1a5) + -parseInt(L(0x141)) / (-0xa5e + 0x36 * -0x9e + 0x1 * 0x2bb8) * (parseInt(L(0x140)) / (-0x4bd + 0x32b + -0x199 * -0x1)) + -parseInt(L(0x134)) / (0x1dd4 + 0x4 * -0x3f9 + -0xde8) + parseInt(M(0x136)) / (-0x17 * 0x18e + 0x50b * 0x7 + 0x7e) * (-parseInt(L(0x120)) / (-0xca3 + 0x17bb + -0x2 * 0x587)) + -parseInt(M(0x13d)) / (0xe94 * -0x1 + 0x5 * -0x48b + 0x3b * 0xa2) * (-parseInt(L(0x139)) / (0x1 * 0x772 + 0xb * 0x172 + -0x174c));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x14 * -0x4f1e + 0xb4983 + -0x1 * 0x291ee));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * 0x1bf + -0x558 + 0x1 * 0x82d);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const T = [
        'CASCADE',
        'STRING',
        'JSONB',
        'sbLDc',
        'len',
        'UwTPJ',
        'gen_random',
        'all',
        '1441656jZYfIU',
        'notEmpty',
        '267160RUxvlQ',
        'DataTypes',
        '_uuid()',
        'UUID',
        'literal',
        'Sequelize',
        '6118755TvDuos',
        '23DJkhlw',
        'value',
        '150958evhoIq',
        'crhHS',
        'TEXT',
        'MzhAY',
        'Whatsapps',
        'erty',
        '6saxHus',
        'ouqZY',
        'LQhfB',
        'ApiMessage',
        'wbhwa',
        '1266408PqJNbU',
        'SET\x20NULL',
        '9vKAmiv',
        'INTEGER',
        'exports',
        '12BCSArA',
        'Tenants',
        'sequelize',
        'dropTable',
        '18856167JhJafr',
        'createTabl',
        'DATE',
        '12501363rGvIvG',
        '6wYhsAq',
        '__esModule',
        'defineProp'
    ];
    a = function () {
        return T;
    };
    return a();
}
const K = {};
K[N(0x128)] = !![], Object[O(0x143) + N(0x12e)](exports, O(0x142), K);
const sequelize_1 = require(O(0x13b));
module[N(0x138)] = {
    'up': f => {
        const P = N, Q = N, g = {};
        g[P(0x12a)] = P(0x132) + 's', g[P(0x119)] = P(0x11c) + P(0x122), g[Q(0x11b)] = P(0x12d), g[P(0x130)] = P(0x116), g[P(0x12c)] = Q(0x135), g[Q(0x131)] = P(0x13a);
        const h = g, i = {};
        i[Q(0x11f)] = !![];
        const j = {};
        return j[Q(0x11f)] = !![], j[Q(0x11a)] = [
            0x13 * -0x4 + 0x510 + -0x4b8,
            -0xaf1 * -0x3 + 0x105 + 0x21ca * -0x1
        ], Promise[Q(0x11d)]([f[Q(0x13e) + 'e'](h[P(0x12a)], {
                'id': {
                    'allowNull': ![],
                    'primaryKey': !![],
                    'type': sequelize_1[Q(0x121)][Q(0x123)],
                    'defaultValue': sequelize_1[P(0x125)][Q(0x124)](h[Q(0x119)])
                },
                'messageId': {
                    'type': sequelize_1[Q(0x121)][P(0x117)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'externalKey': {
                    'type': sequelize_1[Q(0x121)][P(0x117)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'body': {
                    'type': sequelize_1[Q(0x121)][P(0x12b)],
                    'allowNull': ![],
                    'validate': i
                },
                'ack': {
                    'type': sequelize_1[Q(0x121)][P(0x137)],
                    'allowNull': ![],
                    'defaultValue': 0x0
                },
                'number': {
                    'type': sequelize_1[P(0x121)][Q(0x117)],
                    'allowNull': ![],
                    'validate': j
                },
                'mediaName': {
                    'type': sequelize_1[Q(0x121)][Q(0x12b)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'timestamp': {
                    'type': sequelize_1[P(0x121)][P(0x137)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'sessionId': {
                    'type': sequelize_1[P(0x121)][Q(0x137)],
                    'references': {
                        'model': h[P(0x11b)],
                        'key': 'id'
                    },
                    'onUpdate': h[P(0x130)],
                    'onDelete': h[P(0x12c)]
                },
                'tenantId': {
                    'type': sequelize_1[P(0x121)][P(0x137)],
                    'references': {
                        'model': h[Q(0x131)],
                        'key': 'id'
                    },
                    'onUpdate': h[Q(0x130)],
                    'onDelete': h[P(0x130)],
                    'allowNull': ![],
                    'defaultValue': 0x1
                },
                'messageWA': {
                    'type': sequelize_1[Q(0x121)][P(0x118)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'apiConfig': {
                    'type': sequelize_1[Q(0x121)][Q(0x118)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'createdAt': {
                    'type': sequelize_1[Q(0x121)][P(0x13f)],
                    'allowNull': ![]
                },
                'updatedAt': {
                    'type': sequelize_1[Q(0x121)][P(0x13f)],
                    'allowNull': ![]
                }
            })]);
    },
    'down': d => {
        const R = O, S = O, e = {};
        e[R(0x133)] = R(0x132) + 's';
        const f = e;
        return Promise[S(0x11d)]([d[R(0x13c)](f[R(0x133)])]);
    }
};