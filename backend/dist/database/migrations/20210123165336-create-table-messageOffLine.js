'use strict';
const J = b, K = b;
(function (c, d) {
    const H = b, I = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(H(0x9e)) / (-0x88a + 0xcb3 * 0x1 + -0x428) + -parseInt(I(0xa0)) / (-0x1 * 0x1a35 + -0x1f6d + 0x1 * 0x39a4) + -parseInt(I(0x9d)) / (0x2 * -0x106f + -0x2235 + 0x4316 * 0x1) + parseInt(I(0xb1)) / (-0x1 * -0x75c + 0xeee + -0x1646) + parseInt(I(0x9a)) / (-0x793 + -0xacf * -0x2 + -0xe06) + -parseInt(I(0x8f)) / (0x21b1 + 0x2 * -0xa13 + -0xd85) * (parseInt(I(0xa5)) / (-0x1e98 + 0x20a4 * 0x1 + -0x205)) + parseInt(H(0xa8)) / (-0x506 * -0x2 + -0x1766 + 0xd62) * (parseInt(I(0x8c)) / (0x7e8 + 0xfd * -0x1f + 0x16c4));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xe515 + -0x11044 * -0x1 + -0x1 * -0xa961));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xf * -0xac + 0x8 * 0x376 + -0x1114 * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const G = {};
G[J(0xad)] = !![], Object[J(0x8d) + J(0xa4)](exports, K(0x88), G);
const sequelize_1 = require(J(0xab));
module[J(0x91)] = {
    'up': j => {
        const L = J, M = J, k = {};
        k[L(0x94)] = M(0xa2) + M(0xa6), k[M(0xb0)] = M(0x98), k[M(0x9c)] = L(0x9b), k[M(0x97)] = L(0x90), k[L(0xb4)] = L(0xa9), k[M(0x8b)] = M(0x9f), k[L(0x92)] = L(0xa7);
        const l = k, m = {};
        m[M(0x96)] = sequelize_1[M(0xb3)][L(0xa1)], m[L(0xaa) + M(0x8a)] = !![], m[L(0xae)] = !![], m[L(0x89)] = ![];
        const n = {};
        n[M(0x96)] = sequelize_1[L(0xb3)][M(0xb2)], n[L(0x89)] = ![];
        const o = {};
        o[M(0x96)] = sequelize_1[L(0xb3)][L(0xa1)], o[M(0x89)] = ![], o[L(0x95) + 'ue'] = 0x0;
        const p = {};
        p[L(0x96)] = sequelize_1[M(0xb3)][M(0x8e)], p[L(0x89)] = ![], p[L(0x95) + 'ue'] = ![];
        const q = {};
        q[M(0x96)] = sequelize_1[M(0xb3)][M(0xa3)];
        const r = {};
        return r[M(0x96)] = sequelize_1[M(0xb3)][L(0xa3)], j[M(0x93) + 'e'](l[M(0x94)], {
            'id': m,
            'body': n,
            'ack': o,
            'read': p,
            'mediaType': q,
            'mediaUrl': r,
            'userId': {
                'type': sequelize_1[L(0xb3)][M(0xa1)],
                'references': {
                    'model': l[L(0xb0)],
                    'key': 'id'
                },
                'onUpdate': l[M(0x9c)],
                'onDelete': l[L(0x97)]
            },
            'ticketId': {
                'type': sequelize_1[M(0xb3)][L(0xa1)],
                'references': {
                    'model': l[M(0xb4)],
                    'key': 'id'
                },
                'onUpdate': l[M(0x9c)],
                'onDelete': l[M(0x9c)],
                'allowNull': ![]
            },
            'fromMe': {
                'type': sequelize_1[M(0xb3)][M(0x8e)],
                'allowNull': ![],
                'defaultValue': ![]
            },
            'isDeleted': {
                'type': sequelize_1[M(0xb3)][L(0x8e)],
                'allowNull': ![],
                'defaultValue': ![]
            },
            'contactId': {
                'type': sequelize_1[M(0xb3)][L(0xa1)],
                'references': {
                    'model': l[L(0x8b)],
                    'key': 'id'
                },
                'onUpdate': l[L(0x9c)],
                'onDelete': l[L(0x9c)]
            },
            'quotedMsgId': {
                'type': sequelize_1[L(0xb3)][M(0xa3)],
                'references': {
                    'model': l[L(0x92)],
                    'key': 'id'
                },
                'onUpdate': l[M(0x9c)],
                'onDelete': l[L(0x97)]
            },
            'createdAt': {
                'type': sequelize_1[L(0xb3)][M(0x99)](0x3 * 0x1f + 0x10f4 + -0x114b * 0x1),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[M(0xb3)][M(0x99)](0x6f1 * -0x1 + 0x17e8 + -0x10f1),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const N = K, O = J, e = {};
        e[N(0xac)] = N(0xa2) + O(0xa6);
        const f = e;
        return d[N(0xaf)](f[O(0xac)]);
    }
};
function a() {
    const P = [
        'exports',
        'aCeVT',
        'createTabl',
        'QrWNr',
        'defaultVal',
        'type',
        'kWZiB',
        'Users',
        'DATE',
        '802685aGoTWQ',
        'CASCADE',
        'Bfbdc',
        '320304VSQIob',
        '166902VwBSSd',
        'Contacts',
        '681334QcUSuL',
        'INTEGER',
        'MessagesOf',
        'STRING',
        'erty',
        '326074bebfoj',
        'fLine',
        'Messages',
        '8QUJUvm',
        'Tickets',
        'autoIncrem',
        'sequelize',
        'gWbsP',
        'value',
        'primaryKey',
        'dropTable',
        'CvAgn',
        '555996hFQGEi',
        'TEXT',
        'DataTypes',
        'HpKNx',
        '__esModule',
        'allowNull',
        'ent',
        'DWiFE',
        '4797801YOsmdy',
        'defineProp',
        'BOOLEAN',
        '6IzVYfB',
        'SET\x20NULL'
    ];
    a = function () {
        return P;
    };
    return a();
}