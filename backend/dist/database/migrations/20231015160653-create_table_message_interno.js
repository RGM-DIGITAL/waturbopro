'use strict';
function a() {
    const L = [
        'yMpuL',
        'InternalMe',
        'bnXXQ',
        '7RsYZxo',
        '18783qDxMLK',
        'allowNull',
        'createTabl',
        'Users',
        'erty',
        'odcuQ',
        '1240ZzhEKh',
        'value',
        'defaultVal',
        'SET\x20NULL',
        'INTEGER',
        'STRING',
        '5436252RKqxQV',
        '4vyjZva',
        'KxZyv',
        'DMZvV',
        'TEXT',
        'ssage',
        '1208890GETgKT',
        'DataTypes',
        'sequelize',
        'defineProp',
        'exports',
        '__esModule',
        '1684651ujPPNq',
        'ent',
        '1327593pZYiJC',
        'OXCEn',
        '8820480YHpVmd',
        'type',
        'primaryKey',
        'BOOLEAN',
        'Tenants',
        '231SjDNdf',
        'autoIncrem',
        'Groups',
        'CASCADE',
        'BIGINT',
        'GiTmg',
        'DATE',
        'dropTable',
        '298120HINKyh'
    ];
    a = function () {
        return L;
    };
    return a();
}
const F = b, G = b;
(function (c, d) {
    const D = b, E = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(D(0x12b)) / (-0xf * -0x168 + 0x2156 + 0x1 * -0x366d) + -parseInt(E(0x14e)) / (-0x11d9 + 0xb3d + -0x34f * -0x2) * (parseInt(D(0x12d)) / (0x17b * 0x1a + -0x2 * -0x90b + -0x3891)) + -parseInt(E(0x13c)) / (0x1db3 + -0x903 + -0x14ac) + -parseInt(E(0x12f)) / (0x4e3 * -0x5 + -0x1b85 + 0xa65 * 0x5) + parseInt(D(0x14d)) / (-0x2 * 0x1358 + 0x66a * 0x4 + -0x45a * -0x3) * (-parseInt(E(0x140)) / (-0x246b + 0x166a + 0x1 * 0xe08)) + parseInt(D(0x147)) / (-0x233e + 0x1e61 + 0x7 * 0xb3) * (parseInt(E(0x141)) / (-0x91e + -0x17cf + 0x107b * 0x2)) + parseInt(D(0x125)) / (-0xc8f + 0x219d + 0x2 * -0xa82) * (parseInt(E(0x134)) / (0x7bd + 0x1c * 0x15b + 0x1 * -0x2da6));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xb3aff * -0x2 + -0xa150d + 0x19d62));
const C = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x49 * 0x61 + -0x9 * -0x2b6 + -0x3a3 * 0xe);
        let h = e[f];
        return h;
    }, b(c, d);
}
C[F(0x148)] = !![], Object[F(0x128) + G(0x145)](exports, F(0x12a), C);
const sequelize_1 = require(G(0x127));
module[F(0x129)] = {
    'up': i => {
        const H = G, I = G, j = {};
        j[H(0x13d)] = I(0x13e) + H(0x152), j[H(0x139)] = H(0x144), j[I(0x12e)] = I(0x137), j[I(0x13f)] = I(0x14a), j[H(0x150)] = I(0x136), j[I(0x146)] = H(0x133);
        const k = j, l = {};
        l[I(0x130)] = sequelize_1[H(0x126)][H(0x138)], l[I(0x131)] = !![], l[H(0x135) + H(0x12c)] = !![], l[I(0x142)] = ![];
        const m = {};
        m[I(0x130)] = sequelize_1[I(0x126)][H(0x151)], m[I(0x142)] = ![];
        const n = {};
        n[I(0x130)] = sequelize_1[I(0x126)][I(0x132)], n[I(0x142)] = ![], n[I(0x149) + 'ue'] = ![];
        const o = {};
        o[I(0x130)] = sequelize_1[I(0x126)][I(0x14c)];
        const p = {};
        return p[H(0x130)] = sequelize_1[I(0x126)][I(0x14c)], i[H(0x143) + 'e'](k[H(0x13d)], {
            'id': l,
            'text': m,
            'read': n,
            'mediaType': o,
            'mediaUrl': p,
            'senderId': {
                'type': sequelize_1[H(0x126)][I(0x14b)],
                'references': {
                    'model': k[H(0x139)],
                    'key': 'id'
                },
                'onUpdate': k[I(0x12e)],
                'onDelete': k[I(0x13f)]
            },
            'receiverId': {
                'type': sequelize_1[I(0x126)][H(0x14b)],
                'references': {
                    'model': k[I(0x139)],
                    'key': 'id'
                },
                'onUpdate': k[I(0x12e)],
                'onDelete': k[H(0x13f)]
            },
            'groupId': {
                'type': sequelize_1[I(0x126)][I(0x14b)],
                'references': {
                    'model': k[H(0x150)],
                    'key': 'id'
                },
                'onUpdate': k[I(0x12e)],
                'onDelete': k[I(0x12e)]
            },
            'tenantId': {
                'type': sequelize_1[H(0x126)][H(0x14b)],
                'references': {
                    'model': k[I(0x146)],
                    'key': 'id'
                },
                'onUpdate': k[H(0x12e)],
                'onDelete': k[I(0x12e)],
                'allowNull': ![],
                'defaultValue': 0x1
            },
            'timestamp': {
                'type': sequelize_1[H(0x126)][H(0x138)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[I(0x126)][I(0x13a)](0x2dc + -0x3 * -0x235 + 0x3 * -0x327),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[H(0x126)][I(0x13a)](-0xb50 + -0xfbe + 0x1b14),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const J = G, K = G, e = {};
        e[J(0x14f)] = K(0x13e) + K(0x152);
        const f = e;
        return d[J(0x13b)](f[K(0x14f)]);
    }
};