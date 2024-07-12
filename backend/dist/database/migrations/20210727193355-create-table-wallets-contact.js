'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0x15a)) / (0x1722 + 0xb2b * 0x2 + 0x2d77 * -0x1) + parseInt(s(0x179)) / (0x1862 + -0x4ed + -0x1373) * (-parseInt(s(0x167)) / (0x1 * -0x1fe5 + -0x6 * -0x1fd + 0x13fa)) + parseInt(r(0x16c)) / (-0x1c1b + -0x2016 + 0x1 * 0x3c35) + -parseInt(r(0x15e)) / (0x3be * 0x2 + 0x20c8 + -0x1 * 0x283f) * (-parseInt(s(0x16e)) / (0x15f6 + 0x13cf + 0x29bf * -0x1)) + -parseInt(s(0x16b)) / (-0xad * -0x2b + 0xe9 * 0x11 + -0x2c81) * (-parseInt(s(0x164)) / (-0x2 * 0x80e + -0x1ac9 * -0x1 + -0xaa5)) + parseInt(s(0x15c)) / (-0x1f85 + 0x160b + 0x1 * 0x983) * (-parseInt(s(0x168)) / (0x1bd0 * 0x1 + 0x1b8a + -0x3750)) + parseInt(r(0x15f)) / (0xb * 0x248 + 0x41 * 0x95 + -0x3ee2) * (-parseInt(s(0x158)) / (-0x9 * -0x115 + -0x237d * 0x1 + 0x19cc));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x2b28f * 0x5 + -0x13642 + 0x1 * -0x4f8b));
const q = {};
q[t(0x177)] = !![], Object[u(0x16d) + u(0x169)](exports, u(0x159), q);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2 * 0x715 + -0xb * 0x35f + 0x1843);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(u(0x17b));
function a() {
    const z = [
        '59724cqmmsg',
        '__esModule',
        '203436jIzNch',
        'lets',
        '3606669XpYarz',
        'autoIncrem',
        '410eRPpTA',
        '1749uyRCso',
        'INTEGER',
        'type',
        'exports',
        'WOKwz',
        '47664mCKWft',
        'allowNull',
        'CASCADE',
        '381693WYWajH',
        '10odDNAh',
        'erty',
        'oPrXR',
        '1575skkKIc',
        '5194472wrmrxg',
        'defineProp',
        '11082MWxhum',
        'Users',
        'OKqOt',
        'Contacts',
        'createTabl',
        'primaryKey',
        'ent',
        'DATE',
        'EXzvw',
        'value',
        'dropTable',
        '16GVqGHS',
        'DlJNC',
        'sequelize',
        'NsgBh',
        'Tenants',
        'DataTypes',
        'ContactWal'
    ];
    a = function () {
        return z;
    };
    return a();
}
module[t(0x162)] = {
    'up': e => {
        const v = t, w = t, f = {};
        f[v(0x170)] = w(0x17f) + w(0x15b), f[v(0x17c)] = w(0x16f), f[v(0x163)] = v(0x166), f[v(0x17a)] = v(0x171), f[v(0x16a)] = w(0x17d);
        const g = f, h = {};
        return h[w(0x161)] = sequelize_1[v(0x17e)][v(0x160)], h[v(0x15d) + w(0x174)] = !![], h[w(0x173)] = !![], h[v(0x165)] = ![], e[v(0x172) + 'e'](g[v(0x170)], {
            'id': h,
            'walletId': {
                'type': sequelize_1[w(0x17e)][w(0x160)],
                'references': {
                    'model': g[v(0x17c)],
                    'key': 'id'
                },
                'onUpdate': g[w(0x163)],
                'onDelete': g[v(0x163)],
                'allowNull': ![]
            },
            'contactId': {
                'type': sequelize_1[v(0x17e)][v(0x160)],
                'references': {
                    'model': g[v(0x17a)],
                    'key': 'id'
                },
                'onUpdate': g[v(0x163)],
                'onDelete': g[w(0x163)],
                'allowNull': ![]
            },
            'tenantId': {
                'type': sequelize_1[v(0x17e)][v(0x160)],
                'references': {
                    'model': g[w(0x16a)],
                    'key': 'id'
                },
                'onUpdate': g[v(0x163)],
                'onDelete': g[v(0x163)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[w(0x17e)][w(0x175)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[w(0x17e)][v(0x175)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const x = t, y = t, e = {};
        e[x(0x176)] = x(0x17f) + y(0x15b);
        const f = e;
        return d[x(0x178)](f[x(0x176)]);
    }
};