'use strict';
const H = b, I = b;
(function (c, d) {
    const F = b, G = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(F(0x200)) / (0x1b * 0x3b + 0x18dc + -0x1f14) + -parseInt(G(0x206)) / (-0x1958 + 0x1b84 + -0x22a) + parseInt(F(0x20c)) / (0x2332 + 0x13 * -0x13d + -0xba8) * (-parseInt(F(0x20d)) / (0x95 * -0x1a + 0x1fba + -0x1094)) + parseInt(G(0x209)) / (-0x19ab * 0x1 + 0xc3 * -0x7 + 0x1f05) + -parseInt(F(0x1f8)) / (-0x209 * 0x10 + -0x103 * -0x3 + 0x1d8d) * (-parseInt(G(0x215)) / (0x1 * -0x1d17 + 0x960 + 0x7 * 0x2d2)) + -parseInt(G(0x1f4)) / (-0x1eba + -0x1bbe + -0x4e * -0xc0) + parseInt(G(0x207)) / (-0x14ad + -0x93 * 0x31 + -0x3d * -0xcd);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1a02 * 0x3d + -0x61ba3 * 0x1 + -0x2 * -0x53cff));
const E = {};
E[H(0x1fe)] = !![], Object[I(0x20b) + H(0x1fa)](exports, I(0x1f9), E);
const sequelize_1 = require(I(0x208));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2472 + 0x9 * -0x2c5 + 0x3f4f);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const N = [
        '529082bverko',
        'TEXT',
        'INTEGER',
        'type',
        'ntacts',
        'Pgica',
        '2173074gVlwiX',
        '5524353mjkxbp',
        'sequelize',
        '6346585HLHtLr',
        'CampaignCo',
        'defineProp',
        '8982SiYBrH',
        '108kVmQRg',
        'ent',
        'arHnC',
        'createTabl',
        'CpKSA',
        'exports',
        'Campaigns',
        'all',
        '2041865UMTEQd',
        'dropTable',
        'DataTypes',
        'STRING',
        'tVdhP',
        'autoIncrem',
        '9086352cJZHSD',
        'Contacts',
        'pBhZC',
        'DATE',
        '12GJAUMs',
        '__esModule',
        'erty',
        'primaryKey',
        'CASCADE',
        'allowNull',
        'value',
        'defaultVal'
    ];
    a = function () {
        return N;
    };
    return a();
}
module[H(0x212)] = {
    'up': l => {
        const J = I, K = I, m = {};
        m[J(0x1f2)] = K(0x20a) + J(0x204), m[J(0x1f6)] = J(0x1f5), m[K(0x20f)] = J(0x1fc), m[K(0x205)] = J(0x213);
        const n = m, o = {};
        o[K(0x203)] = sequelize_1[J(0x1f0)][K(0x202)], o[J(0x1fb)] = !![], o[J(0x1f3) + K(0x20e)] = !![], o[K(0x1fd)] = ![];
        const p = {};
        p[J(0x203)] = sequelize_1[K(0x1f0)][K(0x1f1)], p[J(0x1fd)] = ![];
        const q = {};
        q[K(0x203)] = sequelize_1[J(0x1f0)][J(0x201)], q[J(0x1fd)] = !![], q[K(0x1ff) + 'ue'] = null;
        const r = {};
        r[J(0x203)] = sequelize_1[J(0x1f0)][J(0x1f1)], r[J(0x1fd)] = !![], r[K(0x1ff) + 'ue'] = null;
        const s = {};
        s[K(0x203)] = sequelize_1[J(0x1f0)][K(0x1f1)], s[J(0x1fd)] = !![], s[K(0x1ff) + 'ue'] = null;
        const t = {};
        t[J(0x203)] = sequelize_1[J(0x1f0)][J(0x1f1)], t[K(0x1fd)] = !![], t[K(0x1ff) + 'ue'] = null;
        const u = {};
        u[K(0x203)] = sequelize_1[J(0x1f0)][J(0x202)], u[K(0x1fd)] = ![], u[J(0x1ff) + 'ue'] = 0x0;
        const v = {};
        return v[K(0x203)] = sequelize_1[K(0x1f0)][K(0x202)], v[K(0x1fd)] = !![], v[K(0x1ff) + 'ue'] = null, Promise[J(0x214)]([l[J(0x210) + 'e'](n[J(0x1f2)], {
                'id': o,
                'messageRandom': p,
                'body': q,
                'mediaName': r,
                'messageId': s,
                'jobId': t,
                'ack': u,
                'timestamp': v,
                'contactId': {
                    'type': sequelize_1[J(0x1f0)][K(0x202)],
                    'references': {
                        'model': n[K(0x1f6)],
                        'key': 'id'
                    },
                    'onUpdate': n[J(0x20f)],
                    'onDelete': n[J(0x20f)]
                },
                'campaignId': {
                    'type': sequelize_1[K(0x1f0)][K(0x202)],
                    'references': {
                        'model': n[J(0x205)],
                        'key': 'id'
                    },
                    'onUpdate': n[J(0x20f)],
                    'onDelete': n[K(0x20f)],
                    'allowNull': ![],
                    'defaultValue': 0x0
                },
                'createdAt': {
                    'type': sequelize_1[K(0x1f0)][J(0x1f7)],
                    'allowNull': ![]
                },
                'updatedAt': {
                    'type': sequelize_1[J(0x1f0)][K(0x1f7)],
                    'allowNull': ![]
                }
            })]);
    },
    'down': d => {
        const L = I, M = H, e = {};
        e[L(0x211)] = M(0x20a) + M(0x204);
        const f = e;
        return Promise[L(0x214)]([d[M(0x216)](f[M(0x211)])]);
    }
};