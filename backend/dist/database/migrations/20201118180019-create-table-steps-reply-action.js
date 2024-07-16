'use strict';
const x = b, y = b;
function a() {
    const D = [
        'DATE',
        'exports',
        '791aiSEQy',
        '20oYLxvl',
        '__esModule',
        'Actions',
        '253870JBwJqB',
        'VWfhL',
        'BXcev',
        '883047mkyyWW',
        '2362968XNtzta',
        'erty',
        'sequelize',
        'allowNull',
        'CASCADE',
        '235082iSvVuu',
        'PPxiA',
        '36pxdjwL',
        'StepsReply',
        'Users',
        '30264hfOGbl',
        'type',
        'ent',
        'DataTypes',
        'INTEGER',
        'jZpek',
        'createTabl',
        '2242638ZwdzLl',
        'STRING',
        'primaryKey',
        'dropTable',
        'SET\x20NULL',
        'value',
        '122670CJXFiT',
        'defineProp',
        'yWkGC',
        'OEamZ',
        '4hGBFXH',
        'autoIncrem'
    ];
    a = function () {
        return D;
    };
    return a();
}
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(v(0xe9)) / (-0xb6 * -0x34 + -0x11a3 + 0x9aa * -0x2) * (parseInt(w(0xd3)) / (-0x17a3 + 0x207 + 0x159e)) + -parseInt(v(0xe5)) / (0x35 * -0xa3 + -0xd93 + -0x2f55 * -0x1) + -parseInt(v(0xd5)) / (0x1ef7 + -0x18ae + 0xf * -0x6b) * (parseInt(v(0xca)) / (0x1f7 * 0x1 + 0xf7b + -0x5cf * 0x3)) + parseInt(w(0xdf)) / (-0x2594 + 0x1 * 0x2476 + -0x1 * -0x124) + -parseInt(v(0xed)) / (0xfd * -0xa + 0x3 * -0xb9c + 0x2cbd) * (-parseInt(v(0xd8)) / (-0x3a9 * 0x2 + 0x3 * -0x5ea + -0xb * -0x248)) + -parseInt(w(0xce)) / (-0x24e1 + -0x198f + 0x3e79) + -parseInt(v(0xc7)) / (0xe1e + -0x10 * 0x1 + -0xe04) * (parseInt(v(0xcd)) / (-0x476 * 0x3 + 0x1267 * 0x1 + -0x5b * 0xe));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x29334 + -0x19778 + 0x983a2));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xf84 + 0xf8e * -0x1 + 0x13 * 0xb);
        let h = e[f];
        return h;
    }, b(c, d);
}
const u = {};
u[x(0xe4)] = !![], Object[y(0xe6) + y(0xcf)](exports, y(0xc8), u);
const sequelize_1 = require(x(0xd0));
module[y(0xec)] = {
    'up': e => {
        const z = y, A = y, f = {};
        f[z(0xcc)] = A(0xd6) + A(0xc9), f[A(0xcb)] = A(0xd6), f[z(0xe8)] = A(0xd2), f[A(0xdd)] = A(0xd7), f[A(0xd4)] = z(0xe3);
        const g = f, h = {};
        return h[z(0xd9)] = sequelize_1[z(0xdb)][A(0xdc)], h[A(0xea) + z(0xda)] = !![], h[A(0xe1)] = !![], h[z(0xd1)] = ![], e[z(0xde) + 'e'](g[z(0xcc)], {
            'id': h,
            'stepReplyId': {
                'type': sequelize_1[A(0xdb)][A(0xdc)],
                'references': {
                    'model': g[z(0xcb)],
                    'key': 'id'
                },
                'onUpdate': g[z(0xe8)],
                'onDelete': g[z(0xe8)]
            },
            'words': {
                'type': sequelize_1[z(0xdb)][A(0xe0)],
                'allowNull': ![]
            },
            'action': {
                'type': sequelize_1[z(0xdb)][z(0xdc)],
                'allowNull': ![],
                'defaultValue': 0x0
            },
            'reply': {
                'type': sequelize_1[A(0xdb)][z(0xe0)],
                'allowNull': ![]
            },
            'userId': {
                'type': sequelize_1[z(0xdb)][z(0xdc)],
                'references': {
                    'model': g[A(0xdd)],
                    'key': 'id'
                },
                'onUpdate': g[A(0xe8)],
                'onDelete': g[A(0xd4)]
            },
            'createdAt': {
                'type': sequelize_1[z(0xdb)][z(0xeb)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[A(0xdb)][z(0xeb)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const B = y, C = x, e = {};
        e[B(0xe7)] = C(0xd6) + B(0xc9);
        const f = e;
        return d[C(0xe2)](f[C(0xe7)]);
    }
};