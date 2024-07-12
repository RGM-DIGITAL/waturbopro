'use strict';
const H = b, I = b;
(function (c, d) {
    const F = b, G = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(F(0x108)) / (0x21b0 + 0xcdd + -0x2e8c) + -parseInt(F(0x122)) / (-0x1 * 0x665 + 0xb29 + -0x4c2) + -parseInt(G(0x105)) / (0x7f6 + 0xa59 + -0x2 * 0x926) + -parseInt(G(0x11c)) / (0x1efb + 0x986 * 0x1 + 0x287d * -0x1) * (-parseInt(G(0x114)) / (-0x2619 + 0xc61 + 0x19bd)) + -parseInt(F(0x113)) / (0x1bc7 + -0x1 * -0x1e80 + -0x3a41) * (parseInt(F(0x11d)) / (0x9 * 0xe + 0x1 * -0x24e3 + 0x246c)) + parseInt(G(0x115)) / (0x17fb + 0x241a + -0x3c0d) * (-parseInt(G(0x117)) / (0x24e7 + 0x1f9c + -0x447a)) + parseInt(F(0x123)) / (0x265 * 0x2 + 0x10d * -0x1c + 0x2 * 0xc56);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x7a70a + 0x5b5 * 0xaf + -0x774ef));
const E = {};
function a() {
    const N = [
        '944vwtiRi',
        '__esModule',
        '34470LGqsLc',
        'ent',
        'ZODwK',
        'INTEGER',
        'sequelize',
        '1009764wzjyhx',
        '42637vDUUBL',
        'Contacts',
        'OJvEt',
        'PLFcN',
        'CampaignCo',
        '280026QgWhVF',
        '9174970thzmzb',
        'autoIncrem',
        'primaryKey',
        'defineProp',
        'DataTypes',
        'all',
        'ntacts',
        'CASCADE',
        'allowNull',
        'PDuAy',
        '1057362fMasHt',
        'Campaigns',
        'erty',
        '292702Awmmpu',
        'DATE',
        'type',
        'value',
        'exports',
        'STRING',
        'createTabl',
        'defaultVal',
        'dropTable',
        'gbfpJ',
        'TEXT',
        '246TwtzlV',
        '5mXqoVq'
    ];
    a = function () {
        return N;
    };
    return a();
}
E[H(0x10b)] = !![], Object[I(0x126) + H(0x107)](exports, I(0x116), E);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x53f * -0x6 + 0x1 * -0x637 + 0x1 * -0x1841);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(I(0x11b));
module[H(0x10c)] = {
    'up': l => {
        const J = I, K = H, m = {};
        m[J(0x120)] = J(0x121) + K(0x129), m[K(0x119)] = J(0x11e), m[K(0x104)] = K(0x102), m[J(0x111)] = J(0x106);
        const n = m, o = {};
        o[J(0x10a)] = sequelize_1[J(0x127)][J(0x11a)], o[J(0x125)] = !![], o[J(0x124) + K(0x118)] = !![], o[K(0x103)] = ![];
        const p = {};
        p[K(0x10a)] = sequelize_1[K(0x127)][K(0x10d)], p[K(0x103)] = ![];
        const q = {};
        q[J(0x10a)] = sequelize_1[K(0x127)][J(0x112)], q[J(0x103)] = !![], q[J(0x10f) + 'ue'] = null;
        const r = {};
        r[J(0x10a)] = sequelize_1[K(0x127)][J(0x10d)], r[K(0x103)] = !![], r[J(0x10f) + 'ue'] = null;
        const s = {};
        s[J(0x10a)] = sequelize_1[K(0x127)][K(0x10d)], s[K(0x103)] = !![], s[K(0x10f) + 'ue'] = null;
        const t = {};
        t[K(0x10a)] = sequelize_1[J(0x127)][K(0x10d)], t[J(0x103)] = !![], t[J(0x10f) + 'ue'] = null;
        const u = {};
        u[K(0x10a)] = sequelize_1[J(0x127)][K(0x11a)], u[J(0x103)] = ![], u[K(0x10f) + 'ue'] = 0x0;
        const v = {};
        return v[J(0x10a)] = sequelize_1[K(0x127)][J(0x11a)], v[J(0x103)] = !![], v[J(0x10f) + 'ue'] = null, Promise[J(0x128)]([l[J(0x10e) + 'e'](n[J(0x120)], {
                'id': o,
                'messageRandom': p,
                'body': q,
                'mediaName': r,
                'messageId': s,
                'jobId': t,
                'ack': u,
                'timestamp': v,
                'contactId': {
                    'type': sequelize_1[K(0x127)][J(0x11a)],
                    'references': {
                        'model': n[K(0x119)],
                        'key': 'id'
                    },
                    'onUpdate': n[K(0x104)],
                    'onDelete': n[J(0x104)]
                },
                'campaignId': {
                    'type': sequelize_1[K(0x127)][J(0x11a)],
                    'references': {
                        'model': n[J(0x111)],
                        'key': 'id'
                    },
                    'onUpdate': n[K(0x104)],
                    'onDelete': n[J(0x104)],
                    'allowNull': ![],
                    'defaultValue': 0x0
                },
                'createdAt': {
                    'type': sequelize_1[K(0x127)][K(0x109)],
                    'allowNull': ![]
                },
                'updatedAt': {
                    'type': sequelize_1[J(0x127)][K(0x109)],
                    'allowNull': ![]
                }
            })]);
    },
    'down': d => {
        const L = H, M = I, e = {};
        e[L(0x11f)] = L(0x121) + L(0x129);
        const f = e;
        return Promise[M(0x128)]([d[M(0x110)](f[M(0x11f)])]);
    }
};