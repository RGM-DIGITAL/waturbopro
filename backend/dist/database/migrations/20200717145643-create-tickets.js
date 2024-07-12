'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(t(0x17d)) / (0x793 * 0x1 + 0x2 * -0x1111 + -0x5 * -0x550) * (parseInt(t(0x18e)) / (-0xe * 0x251 + -0x4 * -0x45 + 0x1f5c)) + parseInt(u(0x184)) / (0x9 * 0x205 + 0x1 * 0x2122 + -0x334c) * (-parseInt(u(0x16d)) / (-0x1 * -0x1baa + 0x7cc + -0x1a * 0x15d)) + parseInt(t(0x174)) / (-0x1 * -0x1e12 + -0xf70 + -0x1d * 0x81) + -parseInt(u(0x187)) / (0x1028 + 0x18e0 + 0x16a * -0x1d) + -parseInt(t(0x17f)) / (0x1df * 0x13 + -0x1ac7 + 0x1 * -0x8bf) + parseInt(u(0x17a)) / (-0x176d + -0x515 * 0x7 + -0x2 * -0x1d84) + parseInt(t(0x17c)) / (0x1ba + -0x1f49 + 0x8 * 0x3b3) * (parseInt(t(0x177)) / (0x5ef * 0x1 + 0x2ed + -0x8d2));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xecc2b + -0x1810 + 0x5e36d * -0x1));
function a() {
    const B = [
        'CASCADE',
        'value',
        'autoIncrem',
        '358GPmKaL',
        'RxsGf',
        'allowNull',
        'ABjQD',
        'erty',
        'exUfg',
        'DATE',
        '4DfxyqK',
        'INTEGER',
        'exports',
        'pending',
        'type',
        'SET\x20NULL',
        'dropTable',
        '5587460SRNXCx',
        'sequelize',
        'lTJUs',
        '2410EpxPQw',
        'createTabl',
        'yPvyo',
        '7735672aDSiYn',
        'Contacts',
        '25236nlvWDQ',
        '129FZODJB',
        'defineProp',
        '6700694JigqFh',
        '__esModule',
        'IPybj',
        'ent',
        'primaryKey',
        '400236mGUYdU',
        'DataTypes',
        'Tglgo',
        '6689652swrOLR',
        'Tickets',
        'Users',
        'STRING'
    ];
    a = function () {
        return B;
    };
    return a();
}
const s = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x214c + 0x22ac + 0x9);
        let h = e[f];
        return h;
    }, b(c, d);
}
s[v(0x18c)] = !![], Object[w(0x17e) + w(0x16a)](exports, w(0x180), s);
const sequelize_1 = require(w(0x175));
module[w(0x16f)] = {
    'up': e => {
        const x = v, y = v, f = {};
        f[x(0x169)] = x(0x188), f[x(0x18f)] = x(0x170), f[y(0x186)] = y(0x17b), f[y(0x16b)] = x(0x18b), f[y(0x179)] = x(0x189), f[x(0x181)] = x(0x172);
        const g = f, h = {};
        return h[y(0x171)] = sequelize_1[y(0x185)][y(0x16e)], h[x(0x18d) + y(0x182)] = !![], h[y(0x183)] = !![], h[y(0x190)] = ![], e[x(0x178) + 'e'](g[y(0x169)], {
            'id': h,
            'status': {
                'type': sequelize_1[x(0x185)][y(0x18a)],
                'defaultValue': g[y(0x18f)],
                'allowNull': ![]
            },
            'lastMessage': { 'type': sequelize_1[x(0x185)][y(0x18a)] },
            'contactId': {
                'type': sequelize_1[y(0x185)][y(0x16e)],
                'references': {
                    'model': g[y(0x186)],
                    'key': 'id'
                },
                'onUpdate': g[x(0x16b)],
                'onDelete': g[x(0x16b)]
            },
            'userId': {
                'type': sequelize_1[x(0x185)][x(0x16e)],
                'references': {
                    'model': g[y(0x179)],
                    'key': 'id'
                },
                'onUpdate': g[y(0x16b)],
                'onDelete': g[y(0x181)]
            },
            'createdAt': {
                'type': sequelize_1[x(0x185)][x(0x16c)](-0x14d * -0xb + -0xfad + -0x4 * -0x59),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[y(0x185)][x(0x16c)](0x1401 + -0xba1 * 0x1 + -0x2 * 0x42d),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const z = w, A = w, e = {};
        e[z(0x176)] = A(0x188);
        const f = e;
        return d[z(0x173)](f[z(0x176)]);
    }
};