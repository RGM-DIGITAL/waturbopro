'use strict';
const F = b, G = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xaac + -0x54d * -0x2 + -0x1453);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const D = b, E = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(D(0x103)) / (0x1726 + -0x5 * 0x621 + 0x28 * 0x30) + -parseInt(D(0xfa)) / (0x1d57 + 0x1e4 + 0x1f39 * -0x1) * (-parseInt(E(0x10e)) / (-0xd * 0x1a1 + 0x1 * 0xb7e + 0x9b2)) + -parseInt(E(0xf5)) / (0x6c7 + -0x29f + -0x424) * (parseInt(E(0x10a)) / (-0x1 * -0xd33 + 0x707 + -0x2e3 * 0x7)) + -parseInt(E(0x11c)) / (0x28c + -0x790 + 0x50a) * (parseInt(E(0x102)) / (-0x122 + 0xcbc + 0x1 * -0xb93)) + parseInt(E(0x111)) / (-0x26b1 + 0x174a + -0x9 * -0x1b7) * (-parseInt(D(0xf6)) / (-0x7 * 0x80 + -0xa2c + -0x1 * -0xdb5)) + -parseInt(D(0x107)) / (0x1 * -0xe8f + 0x19fc + 0x5 * -0x247) * (-parseInt(E(0x104)) / (0x1af5 + 0x1a37 + -0x7 * 0x797)) + parseInt(D(0x114)) / (-0x1c40 + 0x563 * 0x1 + 0x17 * 0xff);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x6eec1 + 0x1 * 0xc59f9 + -0xc2156));
const C = {};
C[F(0xf8)] = !![], Object[F(0xfd) + G(0x109)](exports, G(0x112), C);
function a() {
    const L = [
        'dropTable',
        'ykayA',
        'WATFy',
        'allowNull',
        'idx_txid',
        'ent',
        'Invoices',
        '1038CwkEWs',
        'primaryKey',
        'UNmTB',
        'kKOUD',
        '1687004JjeFyj',
        '9ovlEqJ',
        'exports',
        'value',
        'DataTypes',
        '202ZVqajA',
        'createTabl',
        'addIndex',
        'defineProp',
        'uXOXD',
        'type',
        'sequelize',
        'Tenants',
        '30254DPGORd',
        '48432kqicjL',
        '7051847RrWqJp',
        'TEXT',
        'INTEGER',
        '10YTuWQg',
        'STRING',
        'erty',
        '5WsgLEE',
        'DATE',
        'SqqvF',
        'CASCADE',
        '8658rmGQqa',
        'txId',
        'FLOAT',
        '6762776olRnzx',
        '__esModule',
        'autoIncrem',
        '19194108uggccw'
    ];
    a = function () {
        return L;
    };
    return a();
}
const sequelize_1 = require(F(0x100));
module[F(0xf7)] = {
    'up': k => {
        const H = G, I = G, l = {};
        l[H(0xfe)] = H(0x11b), l[I(0xf3)] = I(0x101), l[I(0x116)] = I(0x10d), l[H(0x10c)] = H(0x10f), l[I(0x117)] = I(0x119);
        const m = l, n = {};
        n[I(0xff)] = sequelize_1[I(0xf9)][I(0x106)], n[H(0x113) + H(0x11a)] = !![], n[I(0x11d)] = !![], n[I(0x118)] = ![];
        const o = {};
        o[I(0xff)] = sequelize_1[H(0xf9)][H(0x108)];
        const p = {};
        p[I(0xff)] = sequelize_1[H(0xf9)][H(0x108)];
        const q = {};
        q[I(0xff)] = sequelize_1[I(0xf9)][I(0x110)];
        const r = {};
        r[H(0xff)] = sequelize_1[I(0xf9)][H(0x10b)], r[I(0x118)] = ![];
        const s = {};
        s[H(0xff)] = sequelize_1[H(0xf9)][I(0x10b)], s[I(0x118)] = ![];
        const t = {};
        t[H(0xff)] = sequelize_1[I(0xf9)][H(0x108)];
        return k[I(0xfb) + 'e'](m[H(0xfe)], {
            'id': n,
            'detail': o,
            'status': p,
            'value': q,
            'createdAt': r,
            'updatedAt': s,
            'dueDate': t,
            'tenantId': {
                'type': sequelize_1[I(0xf9)][I(0x106)],
                'references': {
                    'model': m[H(0xf3)],
                    'key': 'id'
                },
                'onUpdate': m[H(0x116)],
                'onDelete': m[I(0x116)]
            },
            'txId': { 'type': sequelize_1[H(0xf9)][I(0x108)] },
            'payGw': { 'type': sequelize_1[H(0xf9)][H(0x108)] },
            'payGwData': { 'type': sequelize_1[H(0xf9)][I(0x105)] }
        });
        k[I(0xfc)](m[H(0xfe)], [m[H(0x10c)]], {
            'name': m[H(0x117)],
            'unique': ![]
        });
    },
    'down': d => {
        const J = F, K = F, e = {};
        e[J(0xf4)] = K(0x11b);
        const f = e;
        return d[K(0x115)](f[K(0xf4)]);
    }
};