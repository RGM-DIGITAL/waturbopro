'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xdab + -0x2 * -0x7ea + 0x92 * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0x1c2)) / (0x37 * 0xb1 + 0x89 * -0x9 + -0x2135 * 0x1) + parseInt(s(0x1ae)) / (0x34 * -0x4 + 0x1fa8 * -0x1 + 0x207a * 0x1) * (-parseInt(r(0x1a6)) / (-0x223f + 0x2 * 0x119 + -0x72 * -0x48)) + parseInt(r(0x1a7)) / (-0x1c06 + 0x137a + 0x112 * 0x8) + parseInt(s(0x19e)) / (0x99d * 0x1 + 0x6c6 + -0x5 * 0x346) + -parseInt(r(0x1ba)) / (0xb * 0x16b + -0x56 + 0x1 * -0xf3d) + -parseInt(r(0x1ac)) / (-0x1016 + 0x1629 + -0x60c) + parseInt(s(0x1b8)) / (-0x152d + 0x1 * -0x16dd + 0x1 * 0x2c12) * (parseInt(s(0x19f)) / (0x1c6 + -0x1c29 * -0x1 + -0xef3 * 0x2));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * -0x11c6bf + -0x56e98 * 0x1 + 0x131c75 * 0x2));
function a() {
    const z = [
        'sequelize',
        'ination',
        'restrict',
        'exports',
        'Users',
        'userIdDest',
        '11409jeJwzc',
        '3605152KSYmnf',
        'Queues',
        'CASCADE',
        'queue',
        'ihmPd',
        '1869021GIwqKC',
        'allowNull',
        '974CcUGvp',
        'defaultVal',
        'removeColu',
        'octTz',
        'bJPAL',
        'zmnql',
        'lazdi',
        'qjdqH',
        'tkMwr',
        'queueId',
        '96VOiawS',
        'defineProp',
        '10037700wBgGZk',
        'type',
        'SyYNP',
        'value',
        'KelAF',
        'BuIgZ',
        '__esModule',
        'addColumn',
        '286401RHLayu',
        'BmKjw',
        'erty',
        'all',
        'Actions',
        'INTEGER',
        'StepsReply',
        'DataTypes',
        'ZJefO',
        '6345140cdHcdR',
        '1739439TKjkZH'
    ];
    a = function () {
        return z;
    };
    return a();
}
const q = {};
q[t(0x1bd)] = !![], Object[t(0x1b9) + t(0x197)](exports, u(0x1c0), q);
const sequelize_1 = require(u(0x1a0));
module[t(0x1a3)] = {
    'up': d => {
        const v = t, w = u, e = {};
        e[v(0x1b5)] = w(0x19b) + v(0x199), e[v(0x1b3)] = v(0x1aa), e[w(0x19d)] = w(0x1b7), e[w(0x1ab)] = v(0x1a8), e[v(0x1c3)] = w(0x1a9), e[w(0x1b1)] = w(0x1a2), e[w(0x1b2)] = v(0x1a5) + w(0x1a1), e[v(0x1b6)] = w(0x1a4);
        const f = e;
        return Promise[w(0x198)]([
            d[v(0x1b0) + 'mn'](f[w(0x1b5)], f[v(0x1b3)]),
            d[w(0x1c1)](f[v(0x1b5)], f[w(0x19d)], {
                'type': sequelize_1[v(0x19c)][w(0x19a)],
                'references': {
                    'model': f[w(0x1ab)],
                    'key': 'id'
                },
                'onUpdate': f[v(0x1c3)],
                'onDelete': f[w(0x1b1)],
                'defaultValue': null,
                'allowNull': !![]
            }),
            d[w(0x1b0) + 'mn'](f[v(0x1b5)], f[v(0x1b2)]),
            d[v(0x1c1)](f[w(0x1b5)], f[v(0x1b2)], {
                'type': sequelize_1[w(0x19c)][v(0x19a)],
                'references': {
                    'model': f[w(0x1b6)],
                    'key': 'id'
                },
                'onUpdate': f[v(0x1c3)],
                'onDelete': f[v(0x1b1)],
                'defaultValue': null,
                'allowNull': !![]
            })
        ]);
    },
    'down': f => {
        const x = t, y = u, g = {};
        g[x(0x1be)] = x(0x19b) + x(0x199), g[y(0x1bc)] = x(0x1b7), g[x(0x1bf)] = y(0x1aa), g[y(0x1b4)] = x(0x1a5) + x(0x1a1);
        const h = g, i = {};
        i[y(0x1bb)] = sequelize_1[y(0x19c)][x(0x19a)], i[x(0x1af) + 'ue'] = null, i[x(0x1ad)] = !![];
        const j = {};
        return j[y(0x1bb)] = sequelize_1[y(0x19c)][y(0x19a)], j[x(0x1af) + 'ue'] = null, j[x(0x1ad)] = !![], Promise[x(0x198)]([
            f[y(0x1b0) + 'mn'](h[y(0x1be)], h[y(0x1bc)]),
            f[y(0x1c1)](h[y(0x1be)], h[y(0x1bf)], i),
            f[y(0x1b0) + 'mn'](h[y(0x1be)], h[y(0x1b4)]),
            f[y(0x1c1)](h[x(0x1be)], h[x(0x1b4)], j)
        ]);
    }
};