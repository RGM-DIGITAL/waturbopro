'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(t(0xf3)) / (0x21a * -0x6 + 0x24e9 + -0x184c) + -parseInt(t(0xe2)) / (0xf2c + 0x13a * -0x15 + 0xa98) * (parseInt(u(0xfc)) / (-0x5 * -0x503 + 0x5fb + 0x1f07 * -0x1)) + parseInt(u(0xfe)) / (0xcd5 * 0x2 + -0x183d + 0x169 * -0x1) + -parseInt(t(0xf4)) / (0x2539 + 0x25ff + -0x4b33) + parseInt(u(0xf1)) / (0x7 * 0x2a1 + -0x1536 + 0x2d5) + parseInt(t(0xf7)) / (0x107f + 0x1c67 * 0x1 + 0x7 * -0x669) + parseInt(u(0xfa)) / (0x361 * 0xb + -0x30 * 0x28 + -0x1da3) * (parseInt(t(0xe0)) / (-0x3b * 0x74 + -0x861 * 0x4 + 0x3c49 * 0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x42265 * 0x1 + -0x1fbda + 0x1 * 0x9784f));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x196e + 0x1 * 0x1ad5 + -0x8c);
        let h = e[f];
        return h;
    }, b(c, d);
}
const s = {};
s[v(0xdf)] = !![], Object[w(0xf0) + v(0xde)](exports, v(0xdb), s);
const sequelize_1 = require(w(0xf9));
function a() {
    const B = [
        'Queues',
        '1062698AOjaqr',
        'pdhqI',
        'sequelize',
        '4456qZvfvh',
        'DataTypes',
        '1146ATMuMy',
        'type',
        '673632rLUBGU',
        'Tickets',
        '__esModule',
        'primaryKey',
        'autoIncrem',
        'erty',
        'value',
        '6228UGLqkT',
        'mUxyd',
        '2126IxVZeX',
        'dropTable',
        'INTEGER',
        'DATE',
        'CASCADE',
        'LogTickets',
        'Users',
        'ent',
        'allowNull',
        'wtSiL',
        'RQZfe',
        'FniUt',
        'exports',
        'TVKRT',
        'defineProp',
        '301512hPBxMs',
        'createTabl',
        '52667HYuJsm',
        '387605HrIGHz',
        'STRING'
    ];
    a = function () {
        return B;
    };
    return a();
}
module[v(0xee)] = {
    'up': e => {
        const x = v, y = w, f = {};
        f[x(0xe1)] = x(0xe7), f[x(0xf8)] = y(0xe8), f[x(0xef)] = y(0xe6), f[x(0xed)] = y(0xff), f[y(0xeb)] = y(0xf6);
        const g = f, h = {};
        return h[x(0xfd)] = sequelize_1[x(0xfb)][y(0xe4)], h[y(0xdd) + x(0xe9)] = !![], h[y(0xdc)] = !![], h[y(0xea)] = ![], e[y(0xf2) + 'e'](g[x(0xe1)], {
            'id': h,
            'userId': {
                'type': sequelize_1[x(0xfb)][x(0xe4)],
                'references': {
                    'model': g[x(0xf8)],
                    'key': 'id'
                },
                'onUpdate': g[y(0xef)],
                'onDelete': g[x(0xef)],
                'allowNull': !![],
                'defaultValue': null
            },
            'ticketId': {
                'type': sequelize_1[y(0xfb)][y(0xe4)],
                'references': {
                    'model': g[x(0xed)],
                    'key': 'id'
                },
                'onUpdate': g[y(0xef)],
                'onDelete': g[x(0xef)],
                'allowNull': ![]
            },
            'queueId': {
                'type': sequelize_1[y(0xfb)][y(0xe4)],
                'references': {
                    'model': g[x(0xeb)],
                    'key': 'id'
                },
                'onUpdate': g[y(0xef)],
                'onDelete': g[x(0xef)],
                'defaultValue': null,
                'allowNull': !![]
            },
            'type': {
                'type': sequelize_1[y(0xfb)][x(0xf5)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[x(0xfb)][y(0xe5)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[x(0xfb)][x(0xe5)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const z = w, A = w, e = {};
        e[z(0xec)] = A(0xe7);
        const f = e;
        return d[z(0xe3)](f[z(0xec)]);
    }
};