'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1175 + 0x1286 + -0x2386);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const H = [
        '427312KMsBof',
        'value',
        '24Raegcx',
        'dropTable',
        '77ILlJyj',
        'umOIQ',
        '69597mpBURY',
        'erty',
        'Users',
        'JKvhj',
        'defaultVal',
        'PjjHX',
        'DATE',
        'allowNull',
        'TEXT',
        'NPzOh',
        '10iZLjUY',
        'createTabl',
        'primaryKey',
        'BOOLEAN',
        'Messages',
        'DataTypes',
        'Tickets',
        'aHPRH',
        'PqSSa',
        'STRING',
        '621732EFmZbx',
        '73833rAmGSL',
        'defineProp',
        'SET\x20NULL',
        'exports',
        '2685316tfpVkU',
        'type',
        '52rBuexZ',
        '__esModule',
        '263865sNBMmn',
        'INTEGER',
        '2095764xxGSma',
        '210IVJmhq',
        'sequelize',
        'CASCADE'
    ];
    a = function () {
        return H;
    };
    return a();
}
const B = b, C = b;
(function (c, d) {
    const z = b, A = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(z(0x84)) / (-0x1 * 0x211d + -0xad6 * 0x1 + -0x3a * -0xc2) + parseInt(z(0x82)) / (0x2 * 0xf4f + 0x28b + -0x2127) * (parseInt(z(0x7c)) / (0x1210 * -0x2 + 0x4df * 0x1 + 0x114 * 0x1d)) + -parseInt(A(0x80)) / (0xe9d + 0x1 * -0x3b + -0xe5e) + -parseInt(A(0x9a)) / (0x1 * -0x1557 + -0x151 + 0x16ad) * (-parseInt(A(0x7b)) / (-0xb51 * 0x3 + -0x267e + 0x4877)) + -parseInt(z(0x8e)) / (0xc59 * 0x2 + 0x1d0f + -0x35ba) * (parseInt(A(0x8a)) / (0x2349 * -0x1 + 0x4c9 * -0x4 + 0x3675)) + -parseInt(z(0x90)) / (0x229e + -0x42e * 0x1 + -0x1e67) * (-parseInt(z(0x87)) / (0x3d * 0x6a + 0x1ed3 * 0x1 + -0x380b)) + parseInt(z(0x86)) / (0x199d + 0x35 * 0x89 + -0x35ef * 0x1) * (parseInt(z(0x8c)) / (0x1 * -0x1dd7 + 0x27c + 0x1b67));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1af * -0x727 + -0x3f19e + 0x160568));
const y = {};
y[B(0x8b)] = !![], Object[B(0x7d) + C(0x91)](exports, B(0x83), y);
const sequelize_1 = require(C(0x88));
module[C(0x7f)] = {
    'up': j => {
        const D = B, E = B, k = {};
        k[D(0x93)] = D(0x75), k[D(0x79)] = D(0x92), k[D(0x99)] = E(0x89), k[D(0x95)] = E(0x7e), k[E(0x8f)] = E(0x77);
        const l = k, m = {};
        m[D(0x81)] = sequelize_1[E(0x76)][D(0x7a)], m[D(0x9c)] = !![], m[E(0x97)] = ![];
        const n = {};
        n[E(0x81)] = sequelize_1[D(0x76)][E(0x98)], n[E(0x97)] = ![];
        const o = {};
        o[E(0x81)] = sequelize_1[D(0x76)][D(0x85)], o[E(0x97)] = ![], o[E(0x94) + 'ue'] = 0x0;
        const p = {};
        p[E(0x81)] = sequelize_1[E(0x76)][E(0x9d)], p[E(0x97)] = ![], p[E(0x94) + 'ue'] = ![];
        const q = {};
        q[E(0x81)] = sequelize_1[E(0x76)][D(0x7a)];
        const r = {};
        return r[D(0x81)] = sequelize_1[E(0x76)][D(0x7a)], j[D(0x9b) + 'e'](l[D(0x93)], {
            'id': m,
            'body': n,
            'ack': o,
            'read': p,
            'mediaType': q,
            'mediaUrl': r,
            'userId': {
                'type': sequelize_1[D(0x76)][D(0x85)],
                'references': {
                    'model': l[D(0x79)],
                    'key': 'id'
                },
                'onUpdate': l[E(0x99)],
                'onDelete': l[E(0x95)]
            },
            'ticketId': {
                'type': sequelize_1[E(0x76)][D(0x85)],
                'references': {
                    'model': l[E(0x8f)],
                    'key': 'id'
                },
                'onUpdate': l[E(0x99)],
                'onDelete': l[E(0x99)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[D(0x76)][E(0x96)](0x23c7 + -0x7a5 + -0x404 * 0x7),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[D(0x76)][E(0x96)](-0x951 + -0x2254 + 0x1 * 0x2bab),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const F = B, G = B, e = {};
        e[F(0x78)] = F(0x75);
        const f = e;
        return d[G(0x8d)](f[F(0x78)]);
    }
};