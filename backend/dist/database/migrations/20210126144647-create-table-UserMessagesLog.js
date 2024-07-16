'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0x156)) / (-0xd4b + -0x252c + -0x64f * -0x8) + -parseInt(s(0x150)) / (0x1b79 + 0xb * 0x1f9 + -0x312a) * (-parseInt(r(0x15e)) / (0x2 * -0x802 + -0x6b * 0x1d + 0x1c26)) + -parseInt(r(0x157)) / (-0x3 * -0x9c7 + -0xb * -0xec + 0x2775 * -0x1) + parseInt(s(0x13c)) / (-0x4e9 + -0x19cc + 0x1 * 0x1eba) * (parseInt(s(0x13f)) / (0x71 * -0x4c + 0xed6 + 0x12bc)) + parseInt(r(0x149)) / (-0x754 + -0x1727 * -0x1 + -0xfcc) * (parseInt(s(0x145)) / (-0x126d * -0x1 + -0x20 * 0x7c + -0x2e5)) + parseInt(r(0x15a)) / (0x24f4 + -0x4 * -0x197 + -0xe6d * 0x3) * (-parseInt(r(0x15c)) / (-0x4 * -0x593 + 0x22a6 + -0x38e8)) + parseInt(s(0x161)) / (0x1 * 0x7f + -0x11f1 + 0x117d) * (-parseInt(s(0x14a)) / (0x42 + -0xb17 + 0xae1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xba7c + -0x20 * -0x4ee + 0x45afc));
const q = {};
function a() {
    const z = [
        'TGEvy',
        'dropTable',
        '33ERTjHw',
        'autoIncrem',
        'value',
        'exports',
        'DATE',
        'erty',
        'CASCADE',
        '1433815rcjCJM',
        'createTabl',
        'XeDdZ',
        '6uqMEnL',
        'primaryKey',
        'XoFWp',
        'Tickets',
        'defaultVal',
        'INTEGER',
        '27728VgpmJC',
        'UserMessag',
        'RESTRICT',
        'hbcIz',
        '1134ynkUtw',
        '813312PqVuqT',
        'allowNull',
        'QMGmm',
        'SET\x20NULL',
        'ent',
        'Users',
        '4796RntMgN',
        'type',
        'sequelize',
        'DataTypes',
        '__esModule',
        'jmVpq',
        '113614YyfviP',
        '555236VFKJwo',
        'STRING',
        'jeQit',
        '12996MHHNao',
        'defineProp',
        '4150PUWIre',
        'esLog',
        '726DnYHHJ'
    ];
    a = function () {
        return z;
    };
    return a();
}
q[t(0x137)] = !![], Object[u(0x15b) + u(0x13a)](exports, u(0x154), q);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x7ce + 0x7 * 0x1ea + -0x462);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(t(0x152));
module[t(0x138)] = {
    'up': f => {
        const v = t, w = t, g = {};
        g[v(0x14c)] = v(0x146) + w(0x15d), g[w(0x15f)] = w(0x14f), g[w(0x13e)] = v(0x13b), g[v(0x155)] = v(0x147), g[w(0x148)] = v(0x142), g[v(0x159)] = v(0x14d);
        const h = g, i = {};
        i[v(0x151)] = sequelize_1[w(0x153)][v(0x144)], i[w(0x136) + w(0x14e)] = !![], i[w(0x140)] = !![], i[v(0x14b)] = ![];
        const j = {};
        return j[w(0x151)] = sequelize_1[v(0x153)][v(0x158)], j[v(0x14b)] = !![], j[v(0x143) + 'ue'] = null, f[w(0x13d) + 'e'](h[v(0x14c)], {
            'id': i,
            'messageId': j,
            'userId': {
                'type': sequelize_1[v(0x153)][v(0x144)],
                'references': {
                    'model': h[v(0x15f)],
                    'key': 'id'
                },
                'onUpdate': h[v(0x13e)],
                'onDelete': h[v(0x155)]
            },
            'ticketId': {
                'type': sequelize_1[w(0x153)][v(0x144)],
                'references': {
                    'model': h[w(0x148)],
                    'key': 'id'
                },
                'onUpdate': h[v(0x13e)],
                'onDelete': h[v(0x159)],
                'allowNull': !![]
            },
            'createdAt': {
                'type': sequelize_1[w(0x153)][v(0x139)](0x1db * 0x3 + 0x1015 + -0x15a0),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[w(0x153)][w(0x139)](0x94b + -0xcec + -0x5 * -0xbb),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const x = t, y = t, e = {};
        e[x(0x141)] = x(0x146) + x(0x15d);
        const f = e;
        return d[x(0x160)](f[y(0x141)]);
    }
};