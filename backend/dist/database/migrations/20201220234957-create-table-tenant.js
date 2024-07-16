'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x1c8)) / (0x23c1 + -0x1ac0 + -0x900) * (-parseInt(q(0x1c6)) / (-0x6f * -0x1 + -0xcca + 0xc5d * 0x1)) + -parseInt(q(0x1c7)) / (0x3e * 0x52 + 0x1 * -0xacb + -0x1 * 0x90e) + -parseInt(p(0x1d4)) / (-0x174c + 0x18f4 + -0x15 * 0x14) * (parseInt(q(0x1e1)) / (-0x5e2 + 0x1143 + -0xb5c)) + -parseInt(q(0x1ca)) / (-0xa5e + 0x1 * -0x1663 + -0x1 * -0x20c7) * (-parseInt(p(0x1d5)) / (0x1 * -0x2047 + 0x1d7a + 0x2d4 * 0x1)) + -parseInt(p(0x1d0)) / (-0x13ff + -0x1969 + 0xb5c * 0x4) + parseInt(q(0x1cd)) / (0xce1 + -0x2047 + 0x136f) + -parseInt(q(0x1cf)) / (0x5e6 + 0x31 + -0x1 * 0x60d) * (-parseInt(q(0x1e2)) / (-0x214c * 0x1 + 0x2680 + -0x529));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x18d8d4 + -0xe6637 + 0x1093f * 0x3));
const o = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2007 + -0x20 * 0xad + 0x1 * 0x376b);
        let h = e[f];
        return h;
    }, b(c, d);
}
o[r(0x1ea)] = !![], Object[s(0x1cb) + s(0x1d8)](exports, r(0x1c4), o);
function a() {
    const x = [
        '822034DxtqQr',
        '1257867hOBsjl',
        '1akpkFK',
        'BJvln',
        '12ebqYxv',
        'defineProp',
        'createTabl',
        '10001448OYqJNQ',
        'UJyUv',
        '5150GePtEu',
        '5166648XypNDf',
        'INTEGER',
        'primaryKey',
        'allowNull',
        '330236TDATMK',
        '3265332QXBUOB',
        'dropTable',
        'ent',
        'erty',
        'type',
        'STRING',
        'JNwrT',
        'restrict',
        'BqtKY',
        'autoIncrem',
        'exports',
        'DataTypes',
        '65pkJYnx',
        '29766hjMeOd',
        'Users',
        'DATE',
        'ZZcEx',
        'Tenants',
        'sequelize',
        'active',
        'CASCADE',
        'value',
        '__esModule',
        'tvZAE'
    ];
    a = function () {
        return x;
    };
    return a();
}
const sequelize_1 = require(r(0x1e7));
module[s(0x1df)] = {
    'up': e => {
        const t = r, u = r, f = {};
        f[t(0x1e5)] = u(0x1e6), f[u(0x1c5)] = t(0x1e8), f[t(0x1c9)] = u(0x1e3), f[t(0x1ce)] = t(0x1e9), f[t(0x1dd)] = t(0x1dc);
        const g = f, h = {};
        return h[t(0x1d9)] = sequelize_1[u(0x1e0)][u(0x1d1)], h[t(0x1de) + t(0x1d7)] = !![], h[t(0x1d2)] = !![], h[t(0x1d3)] = ![], e[t(0x1cc) + 'e'](g[t(0x1e5)], {
            'id': h,
            'status': {
                'type': sequelize_1[u(0x1e0)][u(0x1da)],
                'defaultValue': g[u(0x1c5)],
                'allowNull': ![]
            },
            'ownerId': {
                'type': sequelize_1[t(0x1e0)][u(0x1d1)],
                'references': {
                    'model': g[t(0x1c9)],
                    'key': 'id'
                },
                'onUpdate': g[u(0x1ce)],
                'onDelete': g[t(0x1dd)]
            },
            'createdAt': {
                'type': sequelize_1[t(0x1e0)][u(0x1e4)](0xbae * 0x1 + 0x8b7 * 0x3 + -0x25cd),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[u(0x1e0)][t(0x1e4)](0x6d9 * -0x2 + 0x1070 + -0x2b8),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const v = r, w = r, e = {};
        e[v(0x1db)] = v(0x1e6);
        const f = e;
        return d[v(0x1d6)](f[w(0x1db)]);
    }
};