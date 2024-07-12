'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x184)) / (0xc05 * -0x2 + 0x2 * 0x494 + -0x25 * -0x67) + -parseInt(q(0x181)) / (-0x1e83 + -0x1b6f + -0x1 * -0x39f4) + -parseInt(q(0x192)) / (-0x12a0 + 0x5e4 + 0xfb * 0xd) + -parseInt(p(0x183)) / (-0x338 + 0x1 * -0x249b + 0x1 * 0x27d7) * (-parseInt(p(0x190)) / (-0x7 * 0x4fd + -0x1fe + 0x24ee)) + -parseInt(q(0x194)) / (0xc9 * -0x19 + -0x1c9b + 0x3042) + -parseInt(q(0x18d)) / (-0xc7d * 0x1 + -0x2550 + 0x6 * 0x84e) * (parseInt(q(0x19b)) / (-0x63 * 0x5b + -0x91 * 0x2b + 0x3b94)) + parseInt(p(0x18f)) / (-0xc07 * 0x3 + -0x1 * 0x1b82 + 0x3fa0);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x14af9 + 0x65a8 * 0x9 + -0x8 * -0xa060));
const o = {};
o[r(0x17d)] = !![], Object[s(0x189) + r(0x198)](exports, r(0x17e), o);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x3 * 0x17 + 0x115e + -0x1028);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(r(0x193));
function a() {
    const x = [
        'allowNull',
        '764356HVxwMJ',
        'ffYDz',
        '174996ARzOHJ',
        '955380waguBQ',
        'jTNgp',
        'PnAYg',
        'type',
        'UsersGroup',
        'defineProp',
        'autoIncrem',
        'DataTypes',
        'ent',
        '7jZWDgQ',
        'LXgnJ',
        '7413012xcIpNg',
        '85PZndSC',
        'exports',
        '1249551CwWGAs',
        'sequelize',
        '1773252ZbmjtN',
        'Groups',
        'dropTable',
        'createTabl',
        'erty',
        'primaryKey',
        'mtMAf',
        '7604872kSnaGG',
        'INTEGER',
        'DATE',
        'Users',
        'CASCADE',
        'value',
        '__esModule',
        'UsersQueue'
    ];
    a = function () {
        return x;
    };
    return a();
}
module[r(0x191)] = {
    'up': e => {
        const t = s, u = s, f = {};
        f[t(0x182)] = t(0x188) + 's', f[t(0x18e)] = t(0x195), f[u(0x185)] = u(0x17c), f[u(0x19a)] = u(0x17b);
        const g = f, h = {};
        return h[u(0x187)] = sequelize_1[t(0x18b)][t(0x19c)], h[u(0x199)] = !![], h[u(0x18a) + u(0x18c)] = !![], h[t(0x180)] = ![], e[t(0x197) + 'e'](g[u(0x182)], {
            'id': h,
            'groupId': {
                'type': sequelize_1[u(0x18b)][t(0x19c)],
                'references': {
                    'model': g[u(0x18e)],
                    'key': 'id'
                },
                'onUpdate': g[u(0x185)],
                'onDelete': g[u(0x185)],
                'allowNull': ![]
            },
            'userId': {
                'type': sequelize_1[t(0x18b)][t(0x19c)],
                'references': {
                    'model': g[u(0x19a)],
                    'key': 'id'
                },
                'onUpdate': g[u(0x185)],
                'onDelete': g[t(0x185)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[u(0x18b)][u(0x19d)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[t(0x18b)][u(0x19d)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const v = s, w = r, e = {};
        e[v(0x186)] = w(0x17f) + 's';
        const f = e;
        return d[w(0x196)](f[v(0x186)]);
    }
};