'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x71c + -0x65 * 0x61 + 0x5cb * 0x8);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const x = [
        'type',
        'Queues',
        'defineProp',
        'sequelize',
        'createTabl',
        '2567208rXirHf',
        'value',
        'allowNull',
        'DataTypes',
        '431922kcgfeh',
        '20tJNHqz',
        '3dMeukv',
        'Users',
        '578278XtOqmN',
        '13204224cljEhJ',
        '__esModule',
        'DATE',
        'eeaoM',
        '2511546JrmfTh',
        'CASCADE',
        '8766awGwQz',
        'autoIncrem',
        'JJYJL',
        'exports',
        'UsersQueue',
        '746864pdBYnx',
        'INTEGER',
        'ent',
        'DfJSr',
        'JxAKk',
        'primaryKey',
        'erty',
        'jhNxg',
        '14780dNvcBb',
        '28xgnejc',
        'dropTable'
    ];
    a = function () {
        return x;
    };
    return a();
}
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x112)) / (0x25 * -0xe3 + 0x7 * -0xad + 0x258b) + -parseInt(p(0x10e)) / (-0x3 * -0x97 + -0x11 * 0x107 + 0x3 * 0x53c) * (parseInt(p(0x110)) / (0xf9f + 0x1 * -0x436 + 0x5b3 * -0x2)) + parseInt(q(0xfa)) / (-0x1 * -0xb0f + 0x412 + 0x1 * -0xf1d) * (-parseInt(p(0x10f)) / (0x7 * 0x1db + 0x3a0 * 0x1 + -0x1098)) + -parseInt(q(0x117)) / (0x776 + -0xb * 0x23f + -0x1 * -0x1145) * (parseInt(p(0x103)) / (0x5db * 0x2 + -0x22e9 + 0xb9d * 0x2)) + parseInt(p(0x10a)) / (-0x231b + -0x1cc1 * -0x1 + -0x1 * -0x662) + parseInt(q(0x119)) / (-0x11a7 * 0x1 + -0x23 * 0xdf + -0x1 * -0x302d) * (parseInt(q(0x102)) / (0x663 + -0x17 * 0x18d + 0x1d52)) + parseInt(p(0x113)) / (-0xe5 * -0x1 + 0x49 * 0x41 + -0x2c5 * 0x7);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1a4fab + 0x2 * 0x793a8 + 0x18eb95));
const o = {};
o[r(0x10b)] = !![], Object[s(0x107) + s(0x100)](exports, s(0x114), o);
const sequelize_1 = require(r(0x108));
module[s(0xf8)] = {
    'up': e => {
        const t = s, u = r, f = {};
        f[t(0xfe)] = u(0xf9) + 's', f[t(0xfd)] = u(0x106), f[t(0x116)] = u(0x118), f[t(0xf7)] = t(0x111);
        const g = f, h = {};
        return h[t(0x105)] = sequelize_1[t(0x10d)][t(0xfb)], h[u(0xff)] = !![], h[t(0x11a) + u(0xfc)] = !![], h[t(0x10c)] = ![], e[u(0x109) + 'e'](g[u(0xfe)], {
            'id': h,
            'queueId': {
                'type': sequelize_1[t(0x10d)][u(0xfb)],
                'references': {
                    'model': g[t(0xfd)],
                    'key': 'id'
                },
                'onUpdate': g[t(0x116)],
                'onDelete': g[t(0x116)],
                'allowNull': ![]
            },
            'userId': {
                'type': sequelize_1[t(0x10d)][t(0xfb)],
                'references': {
                    'model': g[u(0xf7)],
                    'key': 'id'
                },
                'onUpdate': g[u(0x116)],
                'onDelete': g[t(0x116)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[t(0x10d)][u(0x115)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[t(0x10d)][u(0x115)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const v = r, w = s, e = {};
        e[v(0x101)] = v(0xf9) + 's';
        const f = e;
        return d[w(0x104)](f[v(0x101)]);
    }
};