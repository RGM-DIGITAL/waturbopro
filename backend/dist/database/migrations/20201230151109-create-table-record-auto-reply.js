'use strict';
const B = b, C = b;
(function (c, d) {
    const z = b, A = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(z(0x13d)) / (-0x9 * 0x2a9 + 0x242e + -0xc3c) + -parseInt(A(0x146)) / (-0x1547 + -0x24c2 * 0x1 + 0x3a0b) + -parseInt(z(0x132)) / (-0x1c * 0xcb + -0x3e1 + 0x1a18) + -parseInt(A(0x134)) / (0x2051 + -0x250a + 0x1 * 0x4bd) * (-parseInt(z(0x124)) / (-0x4b * -0x37 + -0x24f7 + 0x14df)) + -parseInt(z(0x143)) / (0xd * 0x1fd + -0x1 * -0x76b + -0x213e) * (-parseInt(z(0x12a)) / (-0x1 * 0x849 + -0x804 + -0xa * -0x1a2)) + parseInt(z(0x141)) / (0x11ef + -0x1 * 0x358 + -0xe8f) + -parseInt(A(0x13e)) / (0x386 + 0x1352 * 0x2 + 0x5 * -0x86d);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x76 * 0x5f5 + -0x1090a + 0x5e51a));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x21e6 + -0xbf7 * 0x3 + -0x1 * -0x321);
        let h = e[f];
        return h;
    }, b(c, d);
}
const y = {};
function a() {
    const H = [
        'allowNull',
        'ent',
        'STRING',
        '1785819DRqoOU',
        'Kxltm',
        'value',
        'DataTypes',
        'dropTable',
        'CASCADE',
        'GQnrO',
        'createTabl',
        '121143eqyUiE',
        'lejcP',
        '4MzoNPk',
        'AutoReplyL',
        'Contacts',
        'ogs',
        'INTEGER',
        'WpExC',
        'erty',
        'DATE',
        'Tickets',
        '107675iHKMTr',
        '1863927RECeiW',
        'primaryKey',
        'exports',
        '412072lyZKfl',
        'opnXs',
        '6CgetaP',
        'autoIncrem',
        'defineProp',
        '364802MREcjK',
        'sequelize',
        'vWFCd',
        'type',
        '770570lBlCjg',
        '__esModule',
        'restrict'
    ];
    a = function () {
        return H;
    };
    return a();
}
y[B(0x12c)] = !![], Object[C(0x145) + C(0x13a)](exports, B(0x125), y);
const sequelize_1 = require(B(0x147));
module[C(0x140)] = {
    'up': j => {
        const D = C, E = B, k = {};
        k[D(0x122)] = E(0x135) + D(0x137), k[D(0x142)] = D(0x136), k[E(0x130)] = E(0x12f), k[E(0x133)] = D(0x126), k[D(0x12b)] = D(0x13c);
        const l = k, m = {};
        m[E(0x123)] = sequelize_1[E(0x12d)][D(0x138)], m[E(0x144) + E(0x128)] = !![], m[E(0x13f)] = !![], m[E(0x127)] = ![];
        const n = {};
        n[D(0x123)] = sequelize_1[D(0x12d)][D(0x138)], n[E(0x127)] = ![];
        const o = {};
        o[E(0x123)] = sequelize_1[D(0x12d)][D(0x129)], o[E(0x127)] = ![];
        const p = {};
        p[D(0x123)] = sequelize_1[D(0x12d)][D(0x138)], p[E(0x127)] = ![];
        const q = {};
        q[E(0x123)] = sequelize_1[D(0x12d)][E(0x129)], q[D(0x127)] = ![];
        const r = {};
        return r[D(0x123)] = sequelize_1[E(0x12d)][E(0x129)], r[E(0x127)] = ![], j[E(0x131) + 'e'](l[D(0x122)], {
            'id': m,
            'autoReplyId': n,
            'autoReplyName': o,
            'stepsReplyId': p,
            'stepsReplyMessage': q,
            'wordsReply': r,
            'contactId': {
                'type': sequelize_1[D(0x12d)][D(0x138)],
                'references': {
                    'model': l[E(0x142)],
                    'key': 'id'
                },
                'onUpdate': l[D(0x130)],
                'onDelete': l[E(0x133)]
            },
            'ticketId': {
                'type': sequelize_1[E(0x12d)][D(0x138)],
                'references': {
                    'model': l[D(0x12b)],
                    'key': 'id'
                },
                'onUpdate': l[E(0x130)],
                'onDelete': l[D(0x133)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[D(0x12d)][D(0x13b)](0xa * -0xb5 + -0xafa * -0x1 + -0x3e2),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[E(0x12d)][E(0x13b)](0x7 * -0x3d5 + 0x1c30 + -0x157),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const F = C, G = B, e = {};
        e[F(0x139)] = F(0x135) + G(0x137);
        const f = e;
        return d[G(0x12e)](f[F(0x139)]);
    }
};