'use strict';
function a() {
    const N = [
        '_uuid()',
        'all',
        'ApiConfigs',
        '8306824TBCmyN',
        'VZlEo',
        '8lcSvdG',
        'DATE',
        'Users',
        'CASCADE',
        '__esModule',
        'DataTypes',
        'erty',
        '24nmDAOp',
        'dropTable',
        '197481hHwqqc',
        'YMoGQ',
        'STRING',
        'Whatsapps',
        'TEXT',
        'isipi',
        'SET\x20NULL',
        'exports',
        'UUID',
        '3110648fRtnrs',
        '1632129nLZHhg',
        '951858CtEOIV',
        'Sequelize',
        'isUrl',
        'literal',
        '2909760zXvlUB',
        'defineProp',
        'VCrPa',
        'INTEGER',
        'NeYmO',
        'wQuXm',
        'value',
        '387255vpGWpK',
        'xTpVX',
        'gen_random',
        'Tenants',
        'createTabl',
        'hXGPE',
        'sequelize',
        '20HiKXeG',
        'BOOLEAN'
    ];
    a = function () {
        return N;
    };
    return a();
}
const H = b, I = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x4 * -0x556 + 0x8 * 0xbc + 0x1 * 0x10f5);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const F = b, G = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(F(0x196)) / (-0x1843 + 0x217b + -0x151 * 0x7) * (parseInt(F(0x18d)) / (-0x781 + 0x1dc6 * -0x1 + 0x2549)) + -parseInt(F(0x1a0)) / (0x2593 + -0x2f * 0x7c + -0x2 * 0x766) + -parseInt(F(0x19f)) / (0x2595 + 0x11 * -0xa1 + -0x1ae0) + parseInt(F(0x17f)) / (0xda * -0x21 + 0x12fb + 0x924 * 0x1) * (-parseInt(F(0x194)) / (0x1c6 + 0x25c6 + 0x1 * -0x2786)) + parseInt(G(0x1a5)) / (0x265d + 0x12d + -0x2783) + parseInt(G(0x18b)) / (-0x1c72 + -0x79d + 0x2417) + parseInt(F(0x1a1)) / (0xf2 + -0x55 * -0x2e + -0x102f) * (parseInt(F(0x186)) / (0x1dc5 + -0x1 * 0x930 + 0x3 * -0x6d9));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xbc849 + 0x9cf14 * 0x1 + -0x904b9));
const E = {};
E[H(0x17e)] = !![], Object[H(0x1a6) + H(0x193)](exports, I(0x191), E);
const sequelize_1 = require(I(0x185));
module[H(0x19d)] = {
    'up': f => {
        const J = I, K = H, g = {};
        g[J(0x18c)] = J(0x18a), g[K(0x19b)] = J(0x181) + J(0x188), g[J(0x17d)] = K(0x199), g[J(0x184)] = K(0x190), g[K(0x1a9)] = K(0x19c), g[K(0x197)] = K(0x18f), g[J(0x1a7)] = J(0x182);
        const h = g, i = {};
        i[K(0x1a3)] = !![];
        const j = {};
        return j[J(0x1a3)] = !![], Promise[K(0x189)]([f[K(0x183) + 'e'](h[J(0x18c)], {
                'id': {
                    'allowNull': ![],
                    'primaryKey': !![],
                    'type': sequelize_1[K(0x192)][K(0x19e)],
                    'defaultValue': sequelize_1[J(0x1a2)][K(0x1a4)](h[J(0x19b)])
                },
                'sessionId': {
                    'type': sequelize_1[K(0x192)][K(0x1a8)],
                    'references': {
                        'model': h[J(0x17d)],
                        'key': 'id'
                    },
                    'onUpdate': h[K(0x184)],
                    'onDelete': h[J(0x1a9)]
                },
                'name': {
                    'type': sequelize_1[K(0x192)][J(0x198)],
                    'allowNull': ![],
                    'defaultValue': ''
                },
                'isActive': {
                    'type': sequelize_1[J(0x192)][J(0x187)],
                    'allowNull': ![],
                    'defaultValue': !![]
                },
                'token': {
                    'type': sequelize_1[J(0x192)][K(0x198)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'userId': {
                    'type': sequelize_1[J(0x192)][K(0x1a8)],
                    'references': {
                        'model': h[K(0x197)],
                        'key': 'id'
                    },
                    'onUpdate': h[K(0x184)],
                    'onDelete': h[J(0x1a9)]
                },
                'tenantId': {
                    'type': sequelize_1[J(0x192)][J(0x1a8)],
                    'references': {
                        'model': h[J(0x1a7)],
                        'key': 'id'
                    },
                    'onUpdate': h[K(0x184)],
                    'onDelete': h[J(0x184)],
                    'allowNull': ![],
                    'defaultValue': 0x1
                },
                'urlServiceStatus': {
                    'type': sequelize_1[K(0x192)][K(0x19a)],
                    'allowNull': !![],
                    'defaultValue': null,
                    'validate': i
                },
                'urlMessageStatus': {
                    'type': sequelize_1[K(0x192)][K(0x19a)],
                    'allowNull': !![],
                    'defaultValue': null,
                    'validate': j
                },
                'createdAt': {
                    'type': sequelize_1[K(0x192)][K(0x18e)],
                    'allowNull': ![]
                },
                'updatedAt': {
                    'type': sequelize_1[J(0x192)][K(0x18e)],
                    'allowNull': ![]
                }
            })]);
    },
    'down': d => {
        const L = I, M = I, e = {};
        e[L(0x180)] = M(0x18a);
        const f = e;
        return Promise[M(0x189)]([d[M(0x195)](f[M(0x180)])]);
    }
};