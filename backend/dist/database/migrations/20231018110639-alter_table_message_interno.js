'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x24bf * -0x1 + -0x26cb + 0x318 * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(n(0x12d)) / (-0x1cd3 + -0x1 * 0x1b83 + 0x1 * 0x3857) + -parseInt(n(0x124)) / (-0x1b * 0x147 + 0x7fa * -0x1 + 0x2a79) * (-parseInt(n(0x132)) / (0x18fc + 0xf34 + -0x5 * 0x809)) + parseInt(n(0x121)) / (0x21a * 0x4 + -0x1bbf * 0x1 + -0x1 * -0x135b) + parseInt(n(0x12c)) / (-0x190b + -0x21e0 + -0x1d78 * -0x2) * (parseInt(n(0x118)) / (0x2 * 0x1159 + 0x2266 + 0x2 * -0x2289)) + parseInt(n(0x117)) / (-0x2393 + 0xb15 + 0x1885 * 0x1) * (-parseInt(o(0x10c)) / (0x2 * -0xce3 + 0x1cc7 + -0x2f9)) + -parseInt(o(0x10e)) / (0x4d * -0x5f + -0x8 * 0x117 + 0x2554) * (parseInt(n(0x115)) / (-0x21a6 + -0x1417 * 0x1 + 0x35c7)) + -parseInt(n(0x12f)) / (0x14 * 0xb0 + 0x959 * -0x1 + 0x2 * -0x22e) * (parseInt(n(0x129)) / (0x15b * 0x5 + -0x753 + 0x98));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xb * -0x9b1d + -0x115f9 * -0x1 + -0x42260));
const m = {};
m[p(0x114)] = !![], Object[q(0x137) + p(0x135)](exports, p(0x113), m);
const sequelize_1 = require(q(0x11c));
function a() {
    const v = [
        'value',
        '1300pjFxuz',
        'wWkmM',
        '315GNONof',
        '612gHehXl',
        'INTEGER',
        'plaua',
        'fZLuC',
        'sequelize',
        'Users',
        'ssage',
        'grRfn',
        'receiverId',
        '424356Gttldy',
        'Groups',
        'InternalMe',
        '22342VlrJrm',
        'SwXGR',
        'exports',
        'groupId',
        'CASCADE',
        '1074312wwQtYz',
        'PGmCA',
        'changeColu',
        '2665jLtGLK',
        '421450eEHeOB',
        'VbPKd',
        '55JbWozI',
        'KqYZU',
        'encwQ',
        '33MgSELZ',
        'SET\x20NULL',
        'JOQvT',
        'erty',
        'bKwWA',
        'defineProp',
        '368mWMkwM',
        'DataTypes',
        '1251AvGugu',
        'JTQGH',
        'fUNcs',
        'all',
        'vuUaO',
        '__esModule'
    ];
    a = function () {
        return v;
    };
    return a();
}
module[p(0x126)] = {
    'up': d => {
        const r = p, s = p, e = {};
        e[r(0x10f)] = r(0x123) + s(0x11e), e[s(0x110)] = s(0x127), e[s(0x136)] = s(0x122), e[s(0x130)] = s(0x128), e[s(0x12a)] = r(0x120), e[r(0x131)] = s(0x11d), e[s(0x11f)] = r(0x133);
        const f = e;
        return Promise[r(0x111)]([
            d[r(0x12b) + 'mn'](f[s(0x10f)], f[s(0x110)], {
                'type': sequelize_1[s(0x10d)][r(0x119)],
                'references': {
                    'model': f[r(0x136)],
                    'key': 'id'
                },
                'onUpdate': f[r(0x130)],
                'onDelete': f[s(0x130)],
                'allowNull': !![]
            }),
            d[s(0x12b) + 'mn'](f[s(0x10f)], f[r(0x12a)], {
                'type': sequelize_1[s(0x10d)][r(0x119)],
                'references': {
                    'model': f[s(0x131)],
                    'key': 'id'
                },
                'onUpdate': f[s(0x130)],
                'onDelete': f[s(0x11f)],
                'allowNull': !![]
            })
        ]);
    },
    'down': d => {
        const t = p, u = q, e = {};
        e[t(0x112)] = u(0x123) + t(0x11e), e[t(0x134)] = t(0x127), e[t(0x11a)] = t(0x122), e[u(0x116)] = t(0x128), e[u(0x125)] = t(0x120), e[u(0x11b)] = u(0x11d), e[t(0x12e)] = u(0x133);
        const f = e;
        return Promise[t(0x111)]([
            d[u(0x12b) + 'mn'](f[u(0x112)], f[u(0x134)], {
                'type': sequelize_1[t(0x10d)][t(0x119)],
                'references': {
                    'model': f[u(0x11a)],
                    'key': 'id'
                },
                'onUpdate': f[u(0x116)],
                'onDelete': f[t(0x116)],
                'allowNull': !![]
            }),
            d[u(0x12b) + 'mn'](f[t(0x112)], f[t(0x125)], {
                'type': sequelize_1[u(0x10d)][t(0x119)],
                'references': {
                    'model': f[t(0x11b)],
                    'key': 'id'
                },
                'onUpdate': f[t(0x116)],
                'onDelete': f[t(0x12e)],
                'allowNull': !![]
            })
        ]);
    }
};