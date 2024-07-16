'use strict';
function a() {
    const P = [
        '21zIiAZi',
        'erty',
        '1031121shHnGs',
        'defineProp',
        'TEXT',
        'createTabl',
        'primaryKey',
        'sequelize',
        '4461552vnsERw',
        '1271wfWQGU',
        'rXQVT',
        'fLine',
        'exports',
        '5tpIoIu',
        'liEmd',
        'CASCADE',
        '234pgwQpP',
        '2037928oelcoW',
        '__esModule',
        '22385lDoJBe',
        '12396leMsov',
        'swkbS',
        'HjWJG',
        'dropTable',
        'SET\x20NULL',
        '35240eiZWXK',
        'DataTypes',
        'Contacts',
        'DATE',
        'INTEGER',
        'ent',
        '873MGbKOv',
        'Users',
        'type',
        'BOOLEAN',
        'allowNull',
        'defaultVal',
        'MessagesOf',
        'Tickets',
        'SvVuW',
        'autoIncrem',
        'STRING',
        'gmJBO',
        '1606952FmhBTv',
        'PWuwj',
        'Messages',
        'fkGHO',
        'value'
    ];
    a = function () {
        return P;
    };
    return a();
}
const J = b, K = b;
(function (c, d) {
    const H = b, I = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(H(0x174)) / (0x5 * -0x2af + 0x1cf7 + -0xf8b) * (-parseInt(I(0x17b)) / (0x3 * 0x3b + 0x61 * -0x2 + -0x13 * -0x1)) + -parseInt(H(0x19d)) / (-0x1 * -0x351 + -0x491 * 0x5 + 0x1387) + -parseInt(I(0x17c)) / (0x4 * -0x5c7 + 0x219b + -0xa7b * 0x1) * (parseInt(H(0x178)) / (-0x1d2d + 0xdf + 0x1c53)) + -parseInt(H(0x173)) / (0x988 + 0x14c0 + -0x1e42) + -parseInt(H(0x19b)) / (-0x132d * 0x1 + -0x21b * -0xb + -0x1 * 0x3f5) * (parseInt(H(0x196)) / (0xd * 0x2d8 + 0x2121 + -0x4611 * 0x1)) + parseInt(I(0x18a)) / (0x2c * 0x42 + -0x2d4 + -0x1 * 0x87b) * (parseInt(H(0x184)) / (0xd06 * -0x1 + -0x5a6 + 0x12b6)) + -parseInt(H(0x17e)) / (0x345 + -0x248f + 0x2155) * (-parseInt(I(0x17f)) / (-0x81f + -0x3 * 0xcd2 + 0x2ea1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x285 * 0x45b + 0x16 * -0x476f + 0x12a99));
const G = {};
G[J(0x19a)] = !![], Object[J(0x19e) + J(0x19c)](exports, K(0x17d), G);
const sequelize_1 = require(K(0x172));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x55 * -0x1a + 0x53 * 0x40 + -0x1 * 0xaaf);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[J(0x177)] = {
    'up': j => {
        const L = J, M = K, k = {};
        k[L(0x175)] = M(0x190) + L(0x176), k[M(0x180)] = L(0x18b), k[M(0x192)] = M(0x17a), k[L(0x197)] = L(0x183), k[L(0x179)] = L(0x191), k[M(0x199)] = L(0x186), k[L(0x181)] = M(0x198);
        const l = k, m = {};
        m[M(0x18c)] = sequelize_1[L(0x185)][L(0x188)], m[L(0x193) + L(0x189)] = !![], m[M(0x171)] = !![], m[M(0x18e)] = ![];
        const n = {};
        n[M(0x18c)] = sequelize_1[M(0x185)][L(0x16f)], n[M(0x18e)] = ![];
        const o = {};
        o[M(0x18c)] = sequelize_1[L(0x185)][L(0x188)], o[L(0x18e)] = ![], o[L(0x18f) + 'ue'] = 0x0;
        const p = {};
        p[L(0x18c)] = sequelize_1[L(0x185)][L(0x18d)], p[M(0x18e)] = ![], p[L(0x18f) + 'ue'] = ![];
        const q = {};
        q[M(0x18c)] = sequelize_1[L(0x185)][M(0x194)];
        const r = {};
        return r[M(0x18c)] = sequelize_1[M(0x185)][L(0x194)], j[L(0x170) + 'e'](l[M(0x175)], {
            'id': m,
            'body': n,
            'ack': o,
            'read': p,
            'mediaType': q,
            'mediaUrl': r,
            'userId': {
                'type': sequelize_1[M(0x185)][M(0x188)],
                'references': {
                    'model': l[M(0x180)],
                    'key': 'id'
                },
                'onUpdate': l[L(0x192)],
                'onDelete': l[M(0x197)]
            },
            'ticketId': {
                'type': sequelize_1[L(0x185)][M(0x188)],
                'references': {
                    'model': l[M(0x179)],
                    'key': 'id'
                },
                'onUpdate': l[M(0x192)],
                'onDelete': l[M(0x192)],
                'allowNull': ![]
            },
            'fromMe': {
                'type': sequelize_1[M(0x185)][M(0x18d)],
                'allowNull': ![],
                'defaultValue': ![]
            },
            'isDeleted': {
                'type': sequelize_1[M(0x185)][M(0x18d)],
                'allowNull': ![],
                'defaultValue': ![]
            },
            'contactId': {
                'type': sequelize_1[L(0x185)][M(0x188)],
                'references': {
                    'model': l[L(0x199)],
                    'key': 'id'
                },
                'onUpdate': l[L(0x192)],
                'onDelete': l[M(0x192)]
            },
            'quotedMsgId': {
                'type': sequelize_1[M(0x185)][M(0x194)],
                'references': {
                    'model': l[M(0x181)],
                    'key': 'id'
                },
                'onUpdate': l[M(0x192)],
                'onDelete': l[M(0x197)]
            },
            'createdAt': {
                'type': sequelize_1[M(0x185)][M(0x187)](0x2ed + -0x5db * -0x2 + 0x4df * -0x3),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[M(0x185)][M(0x187)](0x23b1 + -0x1018 + 0x1393 * -0x1),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const N = J, O = K, e = {};
        e[N(0x195)] = O(0x190) + O(0x176);
        const f = e;
        return d[O(0x182)](f[N(0x195)]);
    }
};