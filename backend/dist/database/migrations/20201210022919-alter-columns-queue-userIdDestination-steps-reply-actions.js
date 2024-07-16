'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0x152)) / (0xc2f + 0xc7 + -0x1 * 0xcf5) + -parseInt(r(0x161)) / (-0x4 * -0x66e + -0x121a + -0x79c) * (-parseInt(r(0x171)) / (-0x2576 + -0x1 * -0x99 + -0x20 * -0x127)) + -parseInt(s(0x14e)) / (0x1 * 0x2f5 + 0x1557 + -0x1848) * (parseInt(r(0x175)) / (0x1 * -0x1685 + -0x6a * -0x23 + 0x80c)) + parseInt(s(0x158)) / (0x1 * 0x2203 + -0x12 * 0xe5 + -0x11e3) * (-parseInt(s(0x149)) / (0x2f9 + -0x1 * 0x6a3 + 0x3b1)) + -parseInt(r(0x16e)) / (0x2b5 * 0xb + 0x18cc + 0x1 * -0x368b) * (-parseInt(r(0x162)) / (-0x38 * 0x9 + -0x1e83 + -0x1 * -0x2084)) + parseInt(r(0x14c)) / (-0x12d3 + 0x3 * -0x9fd + 0x30d4) + parseInt(r(0x173)) / (-0x243a + 0x170c + 0xd39);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xd8a46 + 0x3f5b * 0x31 + 0xb4fed));
const q = {};
function a() {
    const z = [
        'INTEGER',
        '1550904BXZfDe',
        'userIdDest',
        'vzyHM',
        'SUHjH',
        'defaultVal',
        'allowNull',
        'addColumn',
        'Queues',
        'RcuwP',
        '530TTlIAa',
        '5877MGuftQ',
        'queue',
        'sequelize',
        'exports',
        'TroIR',
        'erty',
        'DataTypes',
        'NWjmk',
        'defineProp',
        'all',
        'loeOy',
        'CASCADE',
        '11960fSYrJB',
        'MqXiq',
        '__esModule',
        '5685nsFWsS',
        'mjRdh',
        '3694427RLFOrI',
        'gODLl',
        '514615hUBgOY',
        'type',
        'Actions',
        '35vNCGru',
        'Users',
        'YbWTI',
        '321810qvoPUZ',
        'ination',
        '44iEcAuu',
        'restrict',
        'queueId',
        'uRaTb',
        '1226847wJoLyk',
        'value',
        'ihVhx',
        'removeColu',
        'StepsReply'
    ];
    a = function () {
        return z;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1ddb * 0x1 + 0x3b * 0x94 + -0x1 * 0x2f9);
        let h = e[f];
        return h;
    }, b(c, d);
}
q[t(0x153)] = !![], Object[u(0x16a) + t(0x167)](exports, u(0x170), q);
const sequelize_1 = require(u(0x164));
module[t(0x165)] = {
    'up': d => {
        const v = t, w = t, e = {};
        e[v(0x15a)] = v(0x156) + w(0x148), e[w(0x14b)] = v(0x163), e[w(0x154)] = w(0x150), e[w(0x166)] = w(0x15f), e[w(0x151)] = w(0x16d), e[w(0x169)] = w(0x14f), e[v(0x16f)] = w(0x159) + v(0x14d), e[v(0x15b)] = w(0x14a);
        const f = e;
        return Promise[w(0x16b)]([
            d[v(0x155) + 'mn'](f[v(0x15a)], f[v(0x14b)]),
            d[w(0x15e)](f[w(0x15a)], f[v(0x154)], {
                'type': sequelize_1[v(0x168)][w(0x157)],
                'references': {
                    'model': f[v(0x166)],
                    'key': 'id'
                },
                'onUpdate': f[w(0x151)],
                'onDelete': f[v(0x169)],
                'defaultValue': null,
                'allowNull': !![]
            }),
            d[v(0x155) + 'mn'](f[v(0x15a)], f[w(0x16f)]),
            d[w(0x15e)](f[v(0x15a)], f[v(0x16f)], {
                'type': sequelize_1[v(0x168)][v(0x157)],
                'references': {
                    'model': f[v(0x15b)],
                    'key': 'id'
                },
                'onUpdate': f[v(0x151)],
                'onDelete': f[v(0x169)],
                'defaultValue': null,
                'allowNull': !![]
            })
        ]);
    },
    'down': f => {
        const x = t, y = t, g = {};
        g[x(0x174)] = x(0x156) + x(0x148), g[y(0x172)] = y(0x150), g[x(0x160)] = x(0x163), g[x(0x16c)] = y(0x159) + x(0x14d);
        const h = g, i = {};
        i[y(0x176)] = sequelize_1[x(0x168)][y(0x157)], i[y(0x15c) + 'ue'] = null, i[x(0x15d)] = !![];
        const j = {};
        return j[x(0x176)] = sequelize_1[y(0x168)][x(0x157)], j[y(0x15c) + 'ue'] = null, j[x(0x15d)] = !![], Promise[x(0x16b)]([
            f[x(0x155) + 'mn'](h[x(0x174)], h[x(0x172)]),
            f[y(0x15e)](h[y(0x174)], h[y(0x160)], i),
            f[x(0x155) + 'mn'](h[x(0x174)], h[y(0x16c)]),
            f[x(0x15e)](h[x(0x174)], h[x(0x16c)], j)
        ]);
    }
};