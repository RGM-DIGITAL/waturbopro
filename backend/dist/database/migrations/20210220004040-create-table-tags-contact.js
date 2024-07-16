'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0x1e3)) / (-0x139d + 0x2016 + -0xc78) + -parseInt(s(0x1cf)) / (-0x9c7 + -0x5 * 0x617 + 0x283c) * (parseInt(r(0x1ec)) / (0xe26 + 0x1 * -0x25cf + 0xc * 0x1f9)) + -parseInt(r(0x1e2)) / (0x1c11 + 0x2d4 + -0x62d * 0x5) + -parseInt(r(0x1d0)) / (0x14b * -0xd + 0x1df1 + -0xd1d) * (-parseInt(s(0x1e6)) / (-0x351 * 0x7 + 0x1 * -0x2e9 + 0x1a26)) + parseInt(s(0x1d7)) / (-0xb80 + -0x3 * 0x827 + 0xc4 * 0x2f) + -parseInt(r(0x1f1)) / (0x1949 * -0x1 + 0xfcb + 0x986) * (parseInt(s(0x1e7)) / (-0x10 * -0x116 + 0x9 * 0xd3 + -0x18c2)) + parseInt(r(0x1d5)) / (-0x1 * 0x232b + 0x969 + 0x19cc * 0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x55 * -0x90e + -0x21603 + 0x6a0c4));
const q = {};
q[t(0x1dc)] = !![], Object[t(0x1e0) + u(0x1cb)](exports, t(0x1ed), q);
const sequelize_1 = require(u(0x1d6));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xb0f + -0x1 * -0x19ca + -0xe * 0x281);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[u(0x1e5)] = {
    'up': e => {
        const v = t, w = u, f = {};
        f[v(0x1eb)] = v(0x1e1) + 's', f[v(0x1ea)] = v(0x1df), f[v(0x1cd)] = v(0x1de), f[w(0x1d3)] = w(0x1db), f[w(0x1d2)] = v(0x1e4), f[w(0x1e8)] = w(0x1ef);
        const g = f, h = {};
        return h[w(0x1cc)] = sequelize_1[v(0x1da)][v(0x1ce)], h[v(0x1d1) + v(0x1f0)] = !![], h[v(0x1d4)] = !![], h[v(0x1ee)] = ![], e[v(0x1e9) + 'e'](g[w(0x1eb)], {
            'id': h,
            'tagId': {
                'type': sequelize_1[v(0x1da)][v(0x1ce)],
                'references': {
                    'model': g[w(0x1ea)],
                    'key': 'id'
                },
                'onUpdate': g[w(0x1cd)],
                'onDelete': g[v(0x1d3)],
                'allowNull': ![]
            },
            'contactId': {
                'type': sequelize_1[v(0x1da)][v(0x1ce)],
                'references': {
                    'model': g[w(0x1d2)],
                    'key': 'id'
                },
                'onUpdate': g[w(0x1cd)],
                'onDelete': g[w(0x1cd)],
                'allowNull': ![]
            },
            'tenantId': {
                'type': sequelize_1[w(0x1da)][v(0x1ce)],
                'references': {
                    'model': g[v(0x1e8)],
                    'key': 'id'
                },
                'onUpdate': g[w(0x1cd)],
                'onDelete': g[v(0x1cd)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[w(0x1da)][w(0x1d8)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[v(0x1da)][v(0x1d8)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const x = u, y = u, e = {};
        e[x(0x1d9)] = y(0x1e1) + 's';
        const f = e;
        return d[y(0x1dd)](f[x(0x1d9)]);
    }
};
function a() {
    const z = [
        '187311QsNZMX',
        'Contacts',
        'exports',
        '6rJfEtD',
        '43839EXxuvS',
        'keFAS',
        'createTabl',
        'Aknpb',
        'ZAjWL',
        '123852xwevGL',
        '__esModule',
        'allowNull',
        'Tenants',
        'ent',
        '240MIFmsB',
        'erty',
        'type',
        'jvPlm',
        'INTEGER',
        '4cxTOKs',
        '490305tplDRn',
        'autoIncrem',
        'DHfRy',
        'wxVEu',
        'primaryKey',
        '4446630xMfnvP',
        'sequelize',
        '130312rvOmdc',
        'DATE',
        'Zmcfh',
        'DataTypes',
        'RESTRICT',
        'value',
        'dropTable',
        'CASCADE',
        'Tags',
        'defineProp',
        'ContactTag',
        '178784AcMZtO'
    ];
    a = function () {
        return z;
    };
    return a();
}