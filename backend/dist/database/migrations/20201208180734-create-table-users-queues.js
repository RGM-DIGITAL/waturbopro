'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x15b)) / (0xf85 + -0x178f * -0x1 + -0x2713) + parseInt(p(0x158)) / (0x387 * -0x6 + 0x1 * -0xe3b + 0x2367) + -parseInt(p(0x15a)) / (0x1a29 + -0x11f + -0x1907) * (-parseInt(p(0x16b)) / (0x8 * -0x35f + 0xe19 + 0xce3 * 0x1)) + parseInt(q(0x153)) / (-0x2e7 * -0x2 + -0xc62 + 0x699) + -parseInt(q(0x161)) / (-0x1407 + 0x25 * 0xd1 + -0xa28 * 0x1) + parseInt(p(0x167)) / (-0x7c0 + 0x1e21 * 0x1 + -0x165a) + -parseInt(q(0x168)) / (0x33 * -0xa3 + 0x26ab + -0x62a) * (parseInt(p(0x169)) / (0xb01 * 0x1 + -0x80c + 0x4 * -0xbb));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x883f + -0xd * 0x4c37 + 0x2dd30 * 0x2));
function a() {
    const x = [
        'value',
        '22519GVzutH',
        '4184wryXvD',
        '7596fnwMHB',
        'type',
        '1852SxaPAk',
        'primaryKey',
        'Queues',
        'Users',
        'GIdEM',
        'createTabl',
        'jGGOF',
        'allowNull',
        'autoIncrem',
        'gofLK',
        '1490335ZfiGgh',
        'erty',
        'sequelize',
        'CASCADE',
        'whjHL',
        '461180NRGXIH',
        'exports',
        '543uRlPRl',
        '14899XXkIiQ',
        'ent',
        'defineProp',
        'dropTable',
        'DATE',
        'IaXYl',
        '195216YHjHSU',
        'INTEGER',
        'DataTypes',
        '__esModule',
        'UsersQueue'
    ];
    a = function () {
        return x;
    };
    return a();
}
const o = {};
o[r(0x166)] = !![], Object[s(0x15d) + s(0x154)](exports, r(0x164), o);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * -0x240b + 0x1 * 0x869 + 0x1cec);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(r(0x155));
module[r(0x159)] = {
    'up': e => {
        const t = s, u = s, f = {};
        f[t(0x157)] = t(0x165) + 's', f[u(0x14d)] = u(0x14b), f[u(0x14f)] = u(0x156), f[t(0x152)] = t(0x14c);
        const g = f, h = {};
        return h[t(0x16a)] = sequelize_1[t(0x163)][t(0x162)], h[u(0x14a)] = !![], h[t(0x151) + t(0x15c)] = !![], h[u(0x150)] = ![], e[u(0x14e) + 'e'](g[u(0x157)], {
            'id': h,
            'queueId': {
                'type': sequelize_1[t(0x163)][u(0x162)],
                'references': {
                    'model': g[t(0x14d)],
                    'key': 'id'
                },
                'onUpdate': g[t(0x14f)],
                'onDelete': g[t(0x14f)],
                'allowNull': ![]
            },
            'userId': {
                'type': sequelize_1[u(0x163)][t(0x162)],
                'references': {
                    'model': g[t(0x152)],
                    'key': 'id'
                },
                'onUpdate': g[u(0x14f)],
                'onDelete': g[u(0x14f)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[t(0x163)][u(0x15f)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[t(0x163)][t(0x15f)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const v = r, w = r, e = {};
        e[v(0x160)] = v(0x165) + 's';
        const f = e;
        return d[w(0x15e)](f[v(0x160)]);
    }
};