'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(t(0x1a7)) / (0x1 * -0x187d + -0x1fd + 0x1a7b) * (parseInt(t(0x1a0)) / (0x28d + -0x21 * -0xc5 + 0x6fc * -0x4)) + -parseInt(t(0x1ba)) / (0x2c8 + 0x1577 + -0x183c) + parseInt(t(0x19b)) / (0x3bb * 0x5 + -0x16 * -0x1b1 + -0x349 * 0x11) + parseInt(u(0x1b7)) / (0x115f * -0x1 + -0x4ca * -0x1 + -0xc9a * -0x1) + parseInt(t(0x1bc)) / (0x6 * -0x50d + -0x2652 + 0x44a6) + -parseInt(u(0x19c)) / (0x1e6a + -0x3 * -0x1db + -0xb1 * 0x34) + parseInt(u(0x1b3)) / (0x1 * -0x1226 + 0xec9 * 0x1 + 0x365) * (parseInt(u(0x1ad)) / (0x127d + 0x7e6 + 0x1 * -0x1a5a));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x126 * 0x907 + 0xb271 * 0xc + 0x8041f));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xfe + 0x1 * 0x807 + -0x570);
        let h = e[f];
        return h;
    }, b(c, d);
}
const s = {};
s[v(0x1b8)] = !![], Object[w(0x1bb) + w(0x19a)](exports, v(0x1a8), s);
function a() {
    const B = [
        'allowNull',
        'defaultVal',
        '62874dZfSQS',
        'primaryKey',
        'wjOBO',
        'STRING',
        'AutoReply',
        'INTEGER',
        '432wvAKSj',
        'autoIncrem',
        'ent',
        'cPTuA',
        '3694460xXmyuu',
        'value',
        'fzfwA',
        '1721214exbJCD',
        'defineProp',
        '114006vtYeMG',
        'lMpab',
        'erty',
        '2581064WmPxcU',
        '3259389ANfmxu',
        'createTabl',
        'type',
        'tlpct',
        '2gQMkKl',
        'DATE',
        'DataTypes',
        'SET\x20NULL',
        'Users',
        'exports',
        'dropTable',
        '346957yEoldO',
        '__esModule',
        'sequelize',
        'CASCADE'
    ];
    a = function () {
        return B;
    };
    return a();
}
const sequelize_1 = require(v(0x1a9));
module[w(0x1a5)] = {
    'up': h => {
        const x = w, y = v, i = {};
        i[x(0x1b9)] = x(0x1b1), i[y(0x1af)] = x(0x1a4), i[x(0x1b6)] = y(0x1aa), i[x(0x19f)] = y(0x1a3);
        const j = i, k = {};
        k[x(0x19e)] = sequelize_1[x(0x1a2)][x(0x1b2)], k[y(0x1b4) + x(0x1b5)] = !![], k[x(0x1ae)] = !![], k[y(0x1ab)] = ![];
        const l = {};
        l[x(0x19e)] = sequelize_1[x(0x1a2)][x(0x1b0)], l[y(0x1ab)] = ![];
        const m = {};
        m[x(0x19e)] = sequelize_1[y(0x1a2)][y(0x1b0)], m[x(0x1ab)] = ![];
        const n = {};
        return n[y(0x19e)] = sequelize_1[y(0x1a2)][y(0x1b2)], n[x(0x1ab)] = ![], n[y(0x1ac) + 'ue'] = 0x0, h[x(0x19d) + 'e'](j[y(0x1b9)], {
            'id': k,
            'reply': l,
            'words': m,
            'action': n,
            'userId': {
                'type': sequelize_1[x(0x1a2)][x(0x1b2)],
                'references': {
                    'model': j[x(0x1af)],
                    'key': 'id'
                },
                'onUpdate': j[x(0x1b6)],
                'onDelete': j[x(0x19f)]
            },
            'createdAt': {
                'type': sequelize_1[y(0x1a2)][x(0x1a1)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[y(0x1a2)][y(0x1a1)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const z = w, A = v, e = {};
        e[z(0x199)] = A(0x1b1);
        const f = e;
        return d[A(0x1a6)](f[A(0x199)]);
    }
};