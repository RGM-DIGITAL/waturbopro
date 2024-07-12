'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(t(0x140)) / (-0x267e + 0x14fe + -0x1181 * -0x1) + -parseInt(t(0x155)) / (-0x1c9 * -0x11 + -0xb93 * 0x1 + -0x12c4) * (parseInt(t(0x141)) / (0x11c7 + -0x19b3 + 0x7ef)) + -parseInt(u(0x137)) / (-0x5c4 + -0xb31 + 0x10f9 * 0x1) + parseInt(t(0x146)) / (0xdcd * -0x1 + -0x1a9d + 0x286f) + -parseInt(u(0x144)) / (-0x1 * 0x767 + -0x1d40 + 0x24ad) + parseInt(t(0x13e)) / (0x19ce + 0x1327 + -0x2cee) + parseInt(u(0x13b)) / (-0x2 * 0x89b + 0xff4 + 0x21 * 0xa);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xc5a61 * 0x1 + 0x16356b * 0x1 + 0x5aecb * -0x4));
const s = {};
s[v(0x142)] = !![], Object[w(0x14e) + w(0x14c)](exports, w(0x150), s);
function a() {
    const B = [
        'INTEGER',
        'rkWOb',
        'SET\x20NULL',
        '12LuRQYa',
        'MaGgy',
        'Users',
        'exports',
        'defaultVal',
        '4791892Szhqyf',
        'createTabl',
        'STRING',
        'AutoReply',
        '4039904CnllRo',
        'autoIncrem',
        'DataTypes',
        '3982279eJbXxA',
        'allowNull',
        '1117007rXireM',
        '343599xrriXl',
        'value',
        'sequelize',
        '4338426kawupy',
        'Vjvve',
        '5963390fyGOzW',
        'type',
        'dropTable',
        'DATE',
        'ent',
        'CASCADE',
        'erty',
        'CBIan',
        'defineProp',
        'primaryKey',
        '__esModule',
        'ssTfP'
    ];
    a = function () {
        return B;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * -0x1dee + -0x40 * -0x22 + -0x2537);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(w(0x143));
module[v(0x158)] = {
    'up': h => {
        const x = v, y = w, i = {};
        i[x(0x151)] = x(0x13a), i[x(0x14d)] = y(0x157), i[x(0x156)] = y(0x14b), i[x(0x145)] = y(0x154);
        const j = i, k = {};
        k[x(0x147)] = sequelize_1[y(0x13d)][x(0x152)], k[x(0x13c) + x(0x14a)] = !![], k[y(0x14f)] = !![], k[x(0x13f)] = ![];
        const l = {};
        l[y(0x147)] = sequelize_1[x(0x13d)][x(0x139)], l[x(0x13f)] = ![];
        const m = {};
        m[y(0x147)] = sequelize_1[x(0x13d)][x(0x139)], m[y(0x13f)] = ![];
        const n = {};
        return n[y(0x147)] = sequelize_1[x(0x13d)][x(0x152)], n[y(0x13f)] = ![], n[y(0x159) + 'ue'] = 0x0, h[y(0x138) + 'e'](j[y(0x151)], {
            'id': k,
            'reply': l,
            'words': m,
            'action': n,
            'userId': {
                'type': sequelize_1[x(0x13d)][y(0x152)],
                'references': {
                    'model': j[y(0x14d)],
                    'key': 'id'
                },
                'onUpdate': j[y(0x156)],
                'onDelete': j[x(0x145)]
            },
            'createdAt': {
                'type': sequelize_1[y(0x13d)][x(0x149)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[x(0x13d)][x(0x149)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const z = w, A = v, e = {};
        e[z(0x153)] = z(0x13a);
        const f = e;
        return d[A(0x148)](f[A(0x153)]);
    }
};