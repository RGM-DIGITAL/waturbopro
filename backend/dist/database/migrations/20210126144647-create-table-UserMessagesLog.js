'use strict';
const t = b, u = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x5fc + 0x6 * 0x49e + -0x1ff5 * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0x1df)) / (0x8ee * 0x3 + 0x1 * -0x13b8 + 0x711 * -0x1) + -parseInt(s(0x1e0)) / (-0x7a4 + -0x1935 + -0x287 * -0xd) + parseInt(r(0x1c0)) / (0x2163 + -0x266 * -0x10 + -0xa40 * 0x7) * (-parseInt(r(0x1d8)) / (-0x34c * 0xa + -0x2 * -0xa53 + 0xc56)) + -parseInt(s(0x1c7)) / (0x1281 + 0x285 * 0xf + -0x3847) * (-parseInt(s(0x1d9)) / (0x24e * 0x5 + -0x1ae + 0x1a3 * -0x6)) + -parseInt(r(0x1c9)) / (-0x1360 + -0x1265 + 0xa4 * 0x3b) * (-parseInt(r(0x1dd)) / (-0xb * -0x16b + -0x1 * -0x26e6 + -0x3677)) + -parseInt(r(0x1be)) / (0x878 + -0x120b + 0x3 * 0x334) + -parseInt(r(0x1e5)) / (0x1758 + 0x8e * 0x1d + 0x2 * -0x13b2) * (-parseInt(s(0x1c1)) / (-0x6b * -0x3e + -0x33d * 0x1 + -0xb51 * 0x2));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x14b * -0x24d + -0x193f1 + 0x1183c7));
const q = {};
q[t(0x1ce)] = !![], Object[t(0x1db) + t(0x1cf)](exports, u(0x1d3), q);
function a() {
    const z = [
        '236753YBOmOU',
        'rlNlT',
        'Tickets',
        'DataTypes',
        'esLog',
        'xAHDJ',
        '5IWuwYw',
        'sequelize',
        '161KLpcKp',
        'UserMessag',
        'SET\x20NULL',
        'CASCADE',
        'ent',
        'value',
        'erty',
        'autoIncrem',
        'createTabl',
        'QnMyH',
        '__esModule',
        'xMYkG',
        'STRING',
        'exports',
        'dropTable',
        '27332lTNWWT',
        '1632954qXsXqu',
        'RESTRICT',
        'defineProp',
        'saigJ',
        '213384vtOmwA',
        'Users',
        '649255FcHLnY',
        '656478EZmhvO',
        'primaryKey',
        'kHtBZ',
        'allowNull',
        'defaultVal',
        '710XxqJYf',
        'KFUfd',
        'type',
        'DATE',
        '4789206ykZpDS',
        'INTEGER',
        '24qXkeuN'
    ];
    a = function () {
        return z;
    };
    return a();
}
const sequelize_1 = require(t(0x1c8));
module[u(0x1d6)] = {
    'up': f => {
        const v = t, w = t, g = {};
        g[v(0x1bb)] = w(0x1ca) + w(0x1c5), g[v(0x1d2)] = w(0x1de), g[v(0x1d4)] = v(0x1cc), g[v(0x1dc)] = w(0x1da), g[w(0x1c6)] = v(0x1c3), g[w(0x1e2)] = v(0x1cb);
        const h = g, i = {};
        i[w(0x1bc)] = sequelize_1[v(0x1c4)][w(0x1bf)], i[v(0x1d0) + v(0x1cd)] = !![], i[w(0x1e1)] = !![], i[v(0x1e3)] = ![];
        const j = {};
        return j[v(0x1bc)] = sequelize_1[w(0x1c4)][w(0x1d5)], j[v(0x1e3)] = !![], j[w(0x1e4) + 'ue'] = null, f[v(0x1d1) + 'e'](h[w(0x1bb)], {
            'id': i,
            'messageId': j,
            'userId': {
                'type': sequelize_1[v(0x1c4)][v(0x1bf)],
                'references': {
                    'model': h[v(0x1d2)],
                    'key': 'id'
                },
                'onUpdate': h[v(0x1d4)],
                'onDelete': h[w(0x1dc)]
            },
            'ticketId': {
                'type': sequelize_1[w(0x1c4)][w(0x1bf)],
                'references': {
                    'model': h[w(0x1c6)],
                    'key': 'id'
                },
                'onUpdate': h[w(0x1d4)],
                'onDelete': h[v(0x1e2)],
                'allowNull': !![]
            },
            'createdAt': {
                'type': sequelize_1[w(0x1c4)][w(0x1bd)](-0x151 * -0x17 + -0x8be + 0x1583 * -0x1),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[w(0x1c4)][v(0x1bd)](0x22ce + 0x14dd + -0x37a5),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const x = u, y = u, e = {};
        e[x(0x1c2)] = y(0x1ca) + x(0x1c5);
        const f = e;
        return d[y(0x1d7)](f[x(0x1c2)]);
    }
};