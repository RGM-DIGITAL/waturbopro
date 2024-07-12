'use strict';
const J = b, K = b;
(function (c, d) {
    const H = b, I = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(H(0x169)) / (-0x5ce + -0x10b0 + 0xd * 0x1bb) * (parseInt(I(0x15f)) / (0x6b7 + 0x14df + 0x5 * -0x584)) + -parseInt(H(0x163)) / (-0x1 * -0x1cb7 + -0x18e4 + -0x3d * 0x10) * (parseInt(H(0x17d)) / (0x628 * -0x3 + 0x313 * -0xb + 0x344d)) + -parseInt(H(0x184)) / (0x671 + 0x1 * 0x128c + -0x63e * 0x4) * (-parseInt(H(0x168)) / (0x14 * -0x8f + 0x1 * 0x793 + 0x1 * 0x39f)) + parseInt(I(0x16c)) / (-0xeb6 + -0x26b7 + 0xd5d * 0x4) + -parseInt(I(0x186)) / (0x766 + -0x3b8 * 0x3 + 0x3ca) + -parseInt(I(0x18a)) / (0x1c49 + 0x2e * 0x3d + -0x2736) + parseInt(H(0x182)) / (0x25 * -0x18 + 0x27a * 0xb + -0x17bc) * (parseInt(H(0x16f)) / (-0x12e5 + -0x1 * 0x15dc + 0x28cc));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x9d1b3 + -0x2 * -0x88ca5 + 0x279f5));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x5a1 + 0x25d + 0x49b);
        let h = e[f];
        return h;
    }, b(c, d);
}
const G = {};
G[J(0x177)] = !![], Object[K(0x188) + J(0x158)](exports, J(0x165), G);
function a() {
    const P = [
        'sequelize',
        'Queues',
        'qipEk',
        'addColumn',
        'Whatsapps',
        'Settings',
        '79852voqIuq',
        'CASCADE',
        'eIckF',
        'mKZUK',
        '36471tdHiRM',
        'kZjML',
        '__esModule',
        'xtAor',
        'exports',
        '84myCxkW',
        '6MqxlFQ',
        'Tickets',
        'zwkVQ',
        '6077106qxfTzT',
        'Tenants',
        'EHzhJ',
        '11bYejEv',
        'lBVGP',
        'GhVYm',
        'tenantId',
        'YpPdE',
        'INTEGER',
        'DataTypes',
        'Unmpj',
        'value',
        'Users',
        'bOQWe',
        'UTJYm',
        'zQHEm',
        'IVrQH',
        '20GpQkRM',
        'restrict',
        'GUAoc',
        'all',
        'yjpFY',
        '204450yDyIsV',
        'Contacts',
        '229115mDEUIq',
        'removeColu',
        '548496tqNzFv',
        'PdvXM',
        'defineProp',
        'AutoReply',
        '4696650DpsqVO',
        'wcJyV',
        'erty'
    ];
    a = function () {
        return P;
    };
    return a();
}
const sequelize_1 = require(J(0x159));
module[K(0x167)] = {
    'up': d => {
        const L = K, M = K, e = {};
        e[L(0x179)] = L(0x16a), e[M(0x170)] = M(0x172), e[M(0x17b)] = L(0x16d), e[M(0x164)] = L(0x160), e[M(0x15b)] = L(0x17e), e[M(0x17a)] = L(0x183), e[L(0x171)] = M(0x15a), e[M(0x161)] = M(0x15e), e[L(0x166)] = L(0x189), e[M(0x16e)] = M(0x178), e[L(0x17c)] = M(0x15d);
        const f = e;
        return Promise[L(0x180)]([
            d[L(0x15c)](f[L(0x179)], f[L(0x170)], {
                'type': sequelize_1[M(0x175)][L(0x174)],
                'references': {
                    'model': f[M(0x17b)],
                    'key': 'id'
                },
                'onUpdate': f[L(0x164)],
                'onDelete': f[M(0x15b)],
                'allowNull': ![],
                'defaultValue': 0x1
            }),
            d[M(0x15c)](f[M(0x17a)], f[M(0x170)], {
                'type': sequelize_1[M(0x175)][L(0x174)],
                'references': {
                    'model': f[M(0x17b)],
                    'key': 'id'
                },
                'onUpdate': f[L(0x164)],
                'onDelete': f[L(0x15b)],
                'allowNull': ![],
                'defaultValue': 0x1
            }),
            d[M(0x15c)](f[L(0x171)], f[L(0x170)], {
                'type': sequelize_1[M(0x175)][L(0x174)],
                'references': {
                    'model': f[L(0x17b)],
                    'key': 'id'
                },
                'onUpdate': f[L(0x164)],
                'onDelete': f[M(0x15b)],
                'allowNull': ![],
                'defaultValue': 0x1
            }),
            d[L(0x15c)](f[L(0x161)], f[M(0x170)], {
                'type': sequelize_1[L(0x175)][M(0x174)],
                'references': {
                    'model': f[M(0x17b)],
                    'key': 'id'
                },
                'onUpdate': f[M(0x164)],
                'onDelete': f[L(0x15b)],
                'allowNull': ![],
                'defaultValue': 0x1
            }),
            d[L(0x15c)](f[L(0x166)], f[L(0x170)], {
                'type': sequelize_1[L(0x175)][L(0x174)],
                'references': {
                    'model': f[L(0x17b)],
                    'key': 'id'
                },
                'onUpdate': f[L(0x164)],
                'onDelete': f[L(0x15b)],
                'allowNull': ![],
                'defaultValue': 0x1
            }),
            d[L(0x15c)](f[M(0x16e)], f[M(0x170)], {
                'type': sequelize_1[L(0x175)][L(0x174)],
                'references': {
                    'model': f[L(0x17b)],
                    'key': 'id'
                },
                'onUpdate': f[M(0x164)],
                'onDelete': f[L(0x15b)],
                'allowNull': ![],
                'defaultValue': 0x1
            }),
            d[L(0x15c)](f[M(0x17c)], f[L(0x170)], {
                'type': sequelize_1[L(0x175)][M(0x174)],
                'references': {
                    'model': f[M(0x17b)],
                    'key': 'id'
                },
                'onUpdate': f[M(0x164)],
                'onDelete': f[M(0x15b)],
                'allowNull': ![],
                'defaultValue': 0x1
            })
        ]);
    },
    'down': d => {
        const N = K, O = K, e = {};
        e[N(0x17f)] = N(0x16a), e[N(0x176)] = N(0x172), e[O(0x173)] = N(0x183), e[N(0x187)] = O(0x15a), e[N(0x16b)] = N(0x15e), e[N(0x157)] = O(0x189), e[N(0x162)] = N(0x178), e[N(0x181)] = O(0x15d);
        const f = e;
        return Promise[O(0x180)]([
            d[O(0x185) + 'mn'](f[O(0x17f)], f[N(0x176)]),
            d[O(0x185) + 'mn'](f[O(0x173)], f[O(0x176)]),
            d[O(0x185) + 'mn'](f[N(0x187)], f[O(0x176)]),
            d[O(0x185) + 'mn'](f[O(0x16b)], f[N(0x176)]),
            d[O(0x185) + 'mn'](f[N(0x157)], f[O(0x176)]),
            d[O(0x185) + 'mn'](f[N(0x162)], f[O(0x176)]),
            d[N(0x185) + 'mn'](f[O(0x181)], f[N(0x176)])
        ]);
    }
};