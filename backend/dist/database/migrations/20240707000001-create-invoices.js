'use strict';
const F = b, G = b;
(function (c, d) {
    const D = b, E = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(D(0x13a)) / (-0xa5e + -0x1e * -0x83 + -0x4fb) + -parseInt(D(0x142)) / (-0x14bc + -0xa8d + 0x1f4b * 0x1) + parseInt(E(0x132)) / (0x1 * -0x2d9 + 0x10af + -0xdd3 * 0x1) + parseInt(E(0x12f)) / (-0x5eb * 0x2 + -0x9 * 0x77 + 0x1009) + parseInt(E(0x148)) / (0x1058 + -0x723 + -0x930) + -parseInt(E(0x14d)) / (0x98e + 0x18f1 + 0x1 * -0x2279) + parseInt(E(0x13d)) / (-0x9b3 + 0x966 + 0x54);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2 * 0x6cc5 + 0xeff36 + -0x51388));
function a() {
    const L = [
        'DataTypes',
        'BdpQn',
        'sequelize',
        'TEXT',
        '6223062HJStBG',
        'dropTable',
        'allowNull',
        'autoIncrem',
        'uauEs',
        'DATE',
        'idx_txid',
        'FLOAT',
        '355396TnMOkg',
        'erty',
        'exports',
        '1996077zKaqdp',
        'CASCADE',
        'KRsHG',
        'value',
        'wSvtG',
        'primaryKey',
        'Invoices',
        'Tenants',
        '112658dKIGsz',
        'txId',
        'PElMl',
        '7978131WNiVHY',
        'defineProp',
        'ZsRuH',
        'type',
        'ent',
        '1691182qolCfg',
        'createTabl',
        'addIndex',
        'INTEGER',
        'STRING',
        '__esModule',
        '3479765kkDcwe'
    ];
    a = function () {
        return L;
    };
    return a();
}
const C = {};
C[F(0x135)] = !![], Object[G(0x13e) + F(0x130)](exports, G(0x147), C);
const sequelize_1 = require(G(0x14b));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x4 * -0x5f3 + -0x1095 + -0x298d * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[F(0x131)] = {
    'up': k => {
        const H = F, I = G, l = {};
        l[H(0x13c)] = I(0x138), l[I(0x134)] = H(0x139), l[H(0x151)] = H(0x133), l[H(0x136)] = I(0x13b), l[H(0x13f)] = I(0x12d);
        const m = l, n = {};
        n[I(0x140)] = sequelize_1[I(0x149)][I(0x145)], n[I(0x150) + H(0x141)] = !![], n[I(0x137)] = !![], n[H(0x14f)] = ![];
        const o = {};
        o[I(0x140)] = sequelize_1[I(0x149)][H(0x146)];
        const p = {};
        p[I(0x140)] = sequelize_1[I(0x149)][I(0x146)];
        const q = {};
        q[I(0x140)] = sequelize_1[I(0x149)][H(0x12e)];
        const r = {};
        r[I(0x140)] = sequelize_1[I(0x149)][H(0x12c)], r[I(0x14f)] = ![];
        const s = {};
        s[H(0x140)] = sequelize_1[H(0x149)][H(0x12c)], s[H(0x14f)] = ![];
        const t = {};
        t[H(0x140)] = sequelize_1[H(0x149)][I(0x146)];
        return k[I(0x143) + 'e'](m[I(0x13c)], {
            'id': n,
            'detail': o,
            'status': p,
            'value': q,
            'createdAt': r,
            'updatedAt': s,
            'dueDate': t,
            'tenantId': {
                'type': sequelize_1[H(0x149)][I(0x145)],
                'references': {
                    'model': m[I(0x134)],
                    'key': 'id'
                },
                'onUpdate': m[I(0x151)],
                'onDelete': m[I(0x151)]
            },
            'txId': { 'type': sequelize_1[H(0x149)][H(0x146)] },
            'payGw': { 'type': sequelize_1[H(0x149)][H(0x146)] },
            'payGwData': { 'type': sequelize_1[I(0x149)][H(0x14c)] }
        });
        k[I(0x144)](m[H(0x13c)], [m[H(0x136)]], {
            'name': m[H(0x13f)],
            'unique': ![]
        });
    },
    'down': d => {
        const J = F, K = G, e = {};
        e[J(0x14a)] = J(0x138);
        const f = e;
        return d[J(0x14e)](f[J(0x14a)]);
    }
};