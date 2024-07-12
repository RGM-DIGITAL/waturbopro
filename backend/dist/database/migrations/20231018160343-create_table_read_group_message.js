'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0xee)) / (-0x1d33 + 0x1 * 0x8ab + -0x7 * -0x2ef) * (parseInt(q(0xd7)) / (0x1273 * -0x1 + -0x1805 * -0x1 + -0x590)) + -parseInt(q(0xd6)) / (0xced + -0x606 * -0x6 + -0x310e) * (parseInt(p(0xd9)) / (-0x2 * 0x1159 + 0x1a * -0x12f + 0x417c)) + -parseInt(p(0xed)) / (0x74b * 0x2 + 0x1977 + 0x1ab * -0x18) * (-parseInt(q(0xdd)) / (-0x19ff + -0x1144 + -0x2b49 * -0x1)) + parseInt(p(0xcf)) / (0x2316 + 0x1baf + -0x3ebe) * (parseInt(q(0xf0)) / (-0x8a1 * -0x4 + -0x8bd + -0x27 * 0xa9)) + parseInt(p(0xe9)) / (0xc26 + -0x2479 + 0x185c) + -parseInt(q(0xd1)) / (-0x49 * 0x4d + 0x10ed + 0x512 * 0x1) + parseInt(p(0xe4)) / (-0x23d * -0x5 + -0x2180 * 0x1 + -0x165a * -0x1) * (-parseInt(q(0xd4)) / (-0x6a2 * 0x2 + -0x1440 + -0x10c8 * -0x2));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1f * 0xa0fd + 0x607ea * -0x2 + 0x6d441));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1f01 + 0xf6e + -0x2da5 * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const o = {};
function a() {
    const x = [
        'type',
        'DataTypes',
        '9749131JQlyZo',
        'dreER',
        '16668950ywSSqG',
        'value',
        'mnraC',
        '12zUYglo',
        'INTEGER',
        '70458CNnGOt',
        '3132MrdZDo',
        'DuKzr',
        '88meItLS',
        'ReadMessag',
        'InternalMe',
        'eGroups',
        '835398rpIJDQ',
        'erty',
        'defineProp',
        'dUBif',
        'sequelize',
        'oEava',
        'ssage',
        '27905933tpINLv',
        'DATE',
        'createTabl',
        'BIGINT',
        'autoIncrem',
        '14432652BHiUda',
        'CASCADE',
        'dropTable',
        '__esModule',
        '65mzLnqC',
        '542IOmIoi',
        'UsersGroup',
        '8tmXhzo',
        'ent',
        'allowNull',
        'NyyaX',
        'SET\x20NULL',
        'primaryKey',
        'exports'
    ];
    a = function () {
        return x;
    };
    return a();
}
o[r(0xd2)] = !![], Object[s(0xdf) + r(0xde)](exports, s(0xec), o);
const sequelize_1 = require(r(0xe1));
module[r(0xcc)] = {
    'up': e => {
        const t = s, u = r, f = {};
        f[t(0xe0)] = u(0xda) + u(0xdc), f[t(0xf3)] = t(0xdb) + u(0xe3), f[t(0xe2)] = t(0xea), f[u(0xd8)] = u(0xca), f[t(0xd0)] = t(0xef) + 's';
        const g = f, h = {};
        return h[u(0xcd)] = sequelize_1[t(0xce)][t(0xd5)], h[u(0xcb)] = !![], h[t(0xe8) + t(0xf1)] = !![], h[t(0xf2)] = ![], e[t(0xe6) + 'e'](g[u(0xe0)], {
            'id': h,
            'internalMessageId': {
                'type': sequelize_1[u(0xce)][u(0xe7)],
                'references': {
                    'model': g[t(0xf3)],
                    'key': 'id'
                },
                'onUpdate': g[t(0xe2)],
                'onDelete': g[u(0xd8)]
            },
            'userGroupId': {
                'type': sequelize_1[t(0xce)][u(0xd5)],
                'references': {
                    'model': g[t(0xd0)],
                    'key': 'id'
                },
                'onUpdate': g[u(0xe2)],
                'onDelete': g[t(0xe2)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[t(0xce)][t(0xe5)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[u(0xce)][u(0xe5)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const v = r, w = r, e = {};
        e[v(0xd3)] = w(0xda) + v(0xdc);
        const f = e;
        return d[v(0xeb)](f[v(0xd3)]);
    }
};