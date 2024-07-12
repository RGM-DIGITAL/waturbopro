'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(t(0x70)) / (0xd * -0x26b + -0x2 * -0x177 + 0x59 * 0x52) + -parseInt(u(0x74)) / (0x1b2f + 0xa6 * -0x4 + -0x1 * 0x1895) * (parseInt(u(0x6d)) / (-0x231b + 0x6 * 0x12e + 0x1c0a)) + parseInt(t(0x71)) / (-0xf04 * -0x2 + -0x214c + 0x46 * 0xc) + -parseInt(u(0x6c)) / (0x20f4 + -0x1e9a + -0x255) * (-parseInt(t(0x6f)) / (-0x27 * 0x83 + -0x1148 + -0x2543 * -0x1)) + parseInt(t(0x8a)) / (-0x189 * -0x2 + -0x1494 + 0x1189 * 0x1) * (-parseInt(u(0x7b)) / (-0x24d + 0x4f * -0x4f + 0x20e * 0xd)) + parseInt(t(0x7f)) / (0x540 + 0x1 * -0x15cf + 0x1098) + parseInt(u(0x75)) / (0x1257 + -0x11 * -0x15a + 0x1 * -0x2947);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x235 * 0x8f + 0x1 * -0x1d5726 + 0x2d9cd4));
function a() {
    const B = [
        'autoIncrem',
        '__esModule',
        'DATE',
        '20025sGNSkn',
        '3DTptvm',
        'allowNull',
        '2682vLNGjX',
        '1123470OdjCkl',
        '663312coIDkI',
        'INTEGER',
        'DataTypes',
        '470978oLGBlo',
        '7778610FjvvIb',
        'MDBPx',
        'LogTickets',
        'erty',
        'primaryKey',
        'syIRN',
        '17672LfBHxC',
        'wKflP',
        'value',
        'type',
        '11784375tcuWJn',
        'defineProp',
        'STRING',
        'Jbubm',
        'Users',
        'dvooi',
        'createTabl',
        'ent',
        'TRdEy',
        'Queues',
        'Tickets',
        '5383HJczZC',
        'exports',
        'sequelize',
        'dropTable',
        'CASCADE'
    ];
    a = function () {
        return B;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x839 + 0xb35 + -0x292);
        let h = e[f];
        return h;
    }, b(c, d);
}
const s = {};
s[v(0x7d)] = !![], Object[v(0x80) + v(0x78)](exports, w(0x6a), s);
const sequelize_1 = require(v(0x8c));
module[w(0x8b)] = {
    'up': e => {
        const x = v, y = v, f = {};
        f[x(0x87)] = x(0x77), f[y(0x76)] = x(0x83), f[y(0x7a)] = x(0x8e), f[y(0x7c)] = x(0x89), f[y(0x84)] = x(0x88);
        const g = f, h = {};
        return h[x(0x7e)] = sequelize_1[y(0x73)][y(0x72)], h[y(0x8f) + y(0x86)] = !![], h[x(0x79)] = !![], h[x(0x6e)] = ![], e[y(0x85) + 'e'](g[x(0x87)], {
            'id': h,
            'userId': {
                'type': sequelize_1[y(0x73)][x(0x72)],
                'references': {
                    'model': g[y(0x76)],
                    'key': 'id'
                },
                'onUpdate': g[x(0x7a)],
                'onDelete': g[y(0x7a)],
                'allowNull': !![],
                'defaultValue': null
            },
            'ticketId': {
                'type': sequelize_1[x(0x73)][y(0x72)],
                'references': {
                    'model': g[y(0x7c)],
                    'key': 'id'
                },
                'onUpdate': g[y(0x7a)],
                'onDelete': g[y(0x7a)],
                'allowNull': ![]
            },
            'queueId': {
                'type': sequelize_1[x(0x73)][y(0x72)],
                'references': {
                    'model': g[y(0x84)],
                    'key': 'id'
                },
                'onUpdate': g[y(0x7a)],
                'onDelete': g[y(0x7a)],
                'defaultValue': null,
                'allowNull': !![]
            },
            'type': {
                'type': sequelize_1[x(0x73)][y(0x81)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[x(0x73)][x(0x6b)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[y(0x73)][y(0x6b)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const z = v, A = v, e = {};
        e[z(0x82)] = A(0x77);
        const f = e;
        return d[A(0x8d)](f[z(0x82)]);
    }
};