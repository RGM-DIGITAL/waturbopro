'use strict';
const r = b, s = b;
function a() {
    const x = [
        'sequelize',
        'ent',
        'WoxIb',
        '4fwKpNe',
        'lmEjt',
        'autoIncrem',
        'InternalMe',
        'CASCADE',
        '__esModule',
        '2106384ZQrJZY',
        'INTEGER',
        'createTabl',
        'allowNull',
        'lLfmV',
        'SET\x20NULL',
        '44AUsCCi',
        'ReadMessag',
        'eGroups',
        'UsersGroup',
        'type',
        'uUYPS',
        'exports',
        'erty',
        'DataTypes',
        'BIGINT',
        'RouTU',
        '4100440LaIUyj',
        '29523uAqITY',
        'xDxWq',
        'ssage',
        '2206036sBmyNV',
        'primaryKey',
        '1112835IqbakW',
        'defineProp',
        '18qfvahA',
        'value',
        '23382300QTOCfC',
        'DATE',
        'dropTable',
        '23906KsXVFY'
    ];
    a = function () {
        return x;
    };
    return a();
}
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x14c)) / (0x2 * -0xc47 + 0x1 * 0x1747 + -0x2 * -0xa4) * (-parseInt(q(0x164)) / (-0x4ca * 0x7 + 0x1f * 0x94 + 0xf9c)) + parseInt(q(0x158)) / (-0x26de + 0xd7 * -0x18 + 0x3b09) + parseInt(p(0x140)) / (-0x596 + -0xb * -0x2e3 + -0x1a27) * (-parseInt(p(0x15d)) / (-0x4 * 0x6c4 + -0x1b89 + 0x369e)) + -parseInt(q(0x146)) / (0x1de0 + -0x90a + -0xc * 0x1bc) + parseInt(q(0x15b)) / (-0xa * 0x32f + -0x1b5e + -0x1 * -0x3b3b) + parseInt(q(0x157)) / (-0x1a7d + 0x1007 + 0xa7e) * (-parseInt(p(0x15f)) / (0x1a0d + 0x8dd * -0x1 + 0x1 * -0x1127)) + parseInt(q(0x161)) / (-0x24f1 + -0x1010 + -0x25 * -0x16f);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xfb048 + -0xb5d50 + 0x7ba * 0x81));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x6c5 + 0x1acb + -0x12c6);
        let h = e[f];
        return h;
    }, b(c, d);
}
const o = {};
o[r(0x160)] = !![], Object[s(0x15e) + r(0x153)](exports, r(0x145), o);
const sequelize_1 = require(r(0x165));
module[r(0x152)] = {
    'up': e => {
        const t = r, u = s, f = {};
        f[t(0x151)] = u(0x14d) + u(0x14e), f[t(0x156)] = u(0x143) + t(0x15a), f[u(0x167)] = t(0x144), f[u(0x141)] = t(0x14b), f[u(0x14a)] = t(0x14f) + 's';
        const g = f, h = {};
        return h[u(0x150)] = sequelize_1[u(0x154)][t(0x147)], h[u(0x15c)] = !![], h[u(0x142) + u(0x166)] = !![], h[t(0x149)] = ![], e[u(0x148) + 'e'](g[u(0x151)], {
            'id': h,
            'internalMessageId': {
                'type': sequelize_1[u(0x154)][u(0x155)],
                'references': {
                    'model': g[t(0x156)],
                    'key': 'id'
                },
                'onUpdate': g[t(0x167)],
                'onDelete': g[u(0x141)]
            },
            'userGroupId': {
                'type': sequelize_1[t(0x154)][u(0x147)],
                'references': {
                    'model': g[u(0x14a)],
                    'key': 'id'
                },
                'onUpdate': g[u(0x167)],
                'onDelete': g[t(0x167)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[t(0x154)][u(0x162)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[t(0x154)][u(0x162)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const v = s, w = r, e = {};
        e[v(0x159)] = w(0x14d) + v(0x14e);
        const f = e;
        return d[v(0x163)](f[v(0x159)]);
    }
};