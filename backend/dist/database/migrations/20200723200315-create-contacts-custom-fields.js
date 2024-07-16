'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * 0x196f + 0x1720 + -0x2f06);
        let h = e[f];
        return h;
    }, b(c, d);
}
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0x1a0)) / (0x4e1 * -0x3 + 0x1a8f * 0x1 + -0x71 * 0x1b) + parseInt(s(0x192)) / (0x1a3 + 0x2390 + -0x2531) * (parseInt(s(0x1a5)) / (-0x2321 + -0x1412 * -0x1 + 0x6 * 0x283)) + parseInt(s(0x193)) / (0x1 * -0x2063 + -0x4f9 + 0x34 * 0xb8) + -parseInt(s(0x1a3)) / (0x1973 + -0x2cc * 0xb + -0x1 * -0x556) * (-parseInt(r(0x19f)) / (-0x783 * -0x2 + -0x2644 + 0x1744)) + parseInt(s(0x1a7)) / (-0x1278 * -0x2 + -0xd36 + -0x17b3) * (parseInt(r(0x1a1)) / (-0x173c + 0x840 + 0xf04)) + -parseInt(s(0x19b)) / (-0x5d8 + 0x4 * -0x156 + -0xa9 * -0x11) * (parseInt(s(0x1a4)) / (0x2324 * 0x1 + -0xfbb * -0x1 + -0x8f * 0x5b)) + parseInt(s(0x1a9)) / (-0x167e * 0x1 + 0x4 * -0x5b3 + 0x37 * 0xd3);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xe6cd7 + -0x1bbdc8 + 0x1b5830));
function a() {
    const z = [
        'sequelize',
        '207845jJIyzT',
        '10wFXRgA',
        '3911445qAIbJA',
        'DataTypes',
        '5912326jxlpdI',
        'EouCj',
        '6841747bEuxMt',
        'HRVvu',
        'UosaP',
        'value',
        'primaryKey',
        'LFMDk',
        'INTEGER',
        'type',
        'exports',
        'CASCADE',
        'STRING',
        'defineProp',
        'erty',
        '2xZOulM',
        '1489624dUhphL',
        'Contacts',
        'ContactCus',
        'dropTable',
        'DATE',
        '__esModule',
        'autoIncrem',
        'tomFields',
        '14796405BFupDc',
        'ent',
        'createTabl',
        'allowNull',
        '12cxRUYH',
        '662550gWhXWK',
        '8pBMAhQ'
    ];
    a = function () {
        return z;
    };
    return a();
}
const q = {};
q[t(0x1ac)] = !![], Object[t(0x190) + t(0x191)](exports, u(0x198), q);
const sequelize_1 = require(u(0x1a2));
module[u(0x18d)] = {
    'up': g => {
        const v = u, w = u, h = {};
        h[v(0x1aa)] = v(0x195) + w(0x19a), h[w(0x1ab)] = v(0x194), h[w(0x1a8)] = w(0x18e);
        const i = h, j = {};
        j[v(0x18c)] = sequelize_1[v(0x1a6)][w(0x18b)], j[v(0x199) + v(0x19c)] = !![], j[v(0x189)] = !![], j[v(0x19e)] = ![];
        const k = {};
        k[v(0x18c)] = sequelize_1[w(0x1a6)][w(0x18f)], k[w(0x19e)] = ![];
        const l = {};
        return l[w(0x18c)] = sequelize_1[w(0x1a6)][v(0x18f)], l[v(0x19e)] = ![], g[v(0x19d) + 'e'](i[w(0x1aa)], {
            'id': j,
            'name': k,
            'value': l,
            'contactId': {
                'type': sequelize_1[w(0x1a6)][v(0x18b)],
                'references': {
                    'model': i[v(0x1ab)],
                    'key': 'id'
                },
                'onUpdate': i[v(0x1a8)],
                'onDelete': i[v(0x1a8)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[w(0x1a6)][v(0x197)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[w(0x1a6)][v(0x197)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const x = t, y = u, e = {};
        e[x(0x18a)] = x(0x195) + y(0x19a);
        const f = e;
        return d[y(0x196)](f[x(0x18a)]);
    }
};