'use strict';
const J = b, K = b;
(function (c, d) {
    const H = b, I = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(H(0xda)) / (0xad * -0x35 + 0xb * -0xa6 + 0x2af4) * (-parseInt(H(0xd1)) / (-0x1 * 0xad8 + -0x1 * -0x16f6 + 0x4 * -0x307)) + -parseInt(I(0xf5)) / (0x8d1 + -0xe9b + 0x87 * 0xb) + parseInt(H(0xf2)) / (-0x1 * -0x211b + -0x46c * 0x3 + -0x13d3) * (-parseInt(H(0xe9)) / (0x1b7f * -0x1 + 0x1afc * -0x1 + 0x1b4 * 0x20)) + -parseInt(H(0xf6)) / (-0x1 * 0x230f + -0x1 * -0xb71 + 0x17a4) + -parseInt(H(0xd9)) / (0x1b63 + -0xe6b + -0xcf1) * (parseInt(H(0xf4)) / (0xa04 * -0x2 + -0x13d2 + 0x13f1 * 0x2)) + -parseInt(I(0xfb)) / (-0xa * -0x356 + -0xce2 + -0x1471) * (-parseInt(H(0xeb)) / (-0xb * -0x3 + -0xb88 + -0x1 * -0xb71)) + parseInt(I(0xe1)) / (0x17ff + 0x890 + -0x2 * 0x1042);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x7eb9 * -0xe + -0x147e3 * 0x5 + -0x15d7 * -0x29));
const G = {};
G[J(0xe6)] = !![], Object[J(0xdc) + J(0xef)](exports, J(0xea), G);
const sequelize_1 = require(K(0xf1));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xe1 * -0xc + 0x43a * 0x5 + -0x39 * 0x2c);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[K(0xdd)] = {
    'up': d => {
        const L = K, M = K, e = {};
        e[L(0xd4)] = M(0xe3), e[L(0xcf)] = M(0xec), e[L(0xf3)] = M(0xe7), e[M(0xe8)] = M(0xca), e[L(0xcc)] = L(0xd0), e[L(0xf0)] = M(0xcb), e[M(0xfc)] = M(0xf8), e[L(0xd8)] = L(0xde), e[M(0xfa)] = M(0xce), e[L(0xd5)] = M(0xed), e[L(0xdb)] = M(0xcd);
        const f = e;
        return Promise[M(0xe2)]([
            d[M(0xfd)](f[M(0xd4)], f[L(0xcf)], {
                'type': sequelize_1[M(0xf7)][L(0xd7)],
                'references': {
                    'model': f[M(0xf3)],
                    'key': 'id'
                },
                'onUpdate': f[L(0xe8)],
                'onDelete': f[L(0xcc)],
                'allowNull': ![],
                'defaultValue': 0x1
            }),
            d[L(0xfd)](f[M(0xf0)], f[M(0xcf)], {
                'type': sequelize_1[L(0xf7)][M(0xd7)],
                'references': {
                    'model': f[L(0xf3)],
                    'key': 'id'
                },
                'onUpdate': f[M(0xe8)],
                'onDelete': f[L(0xcc)],
                'allowNull': ![],
                'defaultValue': 0x1
            }),
            d[M(0xfd)](f[L(0xfc)], f[L(0xcf)], {
                'type': sequelize_1[L(0xf7)][L(0xd7)],
                'references': {
                    'model': f[M(0xf3)],
                    'key': 'id'
                },
                'onUpdate': f[L(0xe8)],
                'onDelete': f[M(0xcc)],
                'allowNull': ![],
                'defaultValue': 0x1
            }),
            d[L(0xfd)](f[M(0xd8)], f[L(0xcf)], {
                'type': sequelize_1[M(0xf7)][M(0xd7)],
                'references': {
                    'model': f[L(0xf3)],
                    'key': 'id'
                },
                'onUpdate': f[M(0xe8)],
                'onDelete': f[L(0xcc)],
                'allowNull': ![],
                'defaultValue': 0x1
            }),
            d[L(0xfd)](f[M(0xfa)], f[L(0xcf)], {
                'type': sequelize_1[M(0xf7)][L(0xd7)],
                'references': {
                    'model': f[M(0xf3)],
                    'key': 'id'
                },
                'onUpdate': f[L(0xe8)],
                'onDelete': f[L(0xcc)],
                'allowNull': ![],
                'defaultValue': 0x1
            }),
            d[L(0xfd)](f[M(0xd5)], f[L(0xcf)], {
                'type': sequelize_1[L(0xf7)][M(0xd7)],
                'references': {
                    'model': f[M(0xf3)],
                    'key': 'id'
                },
                'onUpdate': f[L(0xe8)],
                'onDelete': f[M(0xcc)],
                'allowNull': ![],
                'defaultValue': 0x1
            }),
            d[M(0xfd)](f[L(0xdb)], f[M(0xcf)], {
                'type': sequelize_1[M(0xf7)][L(0xd7)],
                'references': {
                    'model': f[L(0xf3)],
                    'key': 'id'
                },
                'onUpdate': f[L(0xe8)],
                'onDelete': f[M(0xcc)],
                'allowNull': ![],
                'defaultValue': 0x1
            })
        ]);
    },
    'down': d => {
        const N = J, O = K, e = {};
        e[N(0xd3)] = N(0xe3), e[O(0xf9)] = O(0xec), e[N(0xe5)] = N(0xcb), e[N(0xee)] = N(0xf8), e[O(0xe4)] = O(0xde), e[O(0xd6)] = N(0xce), e[O(0xe0)] = O(0xed), e[N(0xd2)] = N(0xcd);
        const f = e;
        return Promise[O(0xe2)]([
            d[N(0xdf) + 'mn'](f[N(0xd3)], f[O(0xf9)]),
            d[O(0xdf) + 'mn'](f[O(0xe5)], f[N(0xf9)]),
            d[N(0xdf) + 'mn'](f[O(0xee)], f[N(0xf9)]),
            d[O(0xdf) + 'mn'](f[O(0xe4)], f[N(0xf9)]),
            d[O(0xdf) + 'mn'](f[N(0xd6)], f[N(0xf9)]),
            d[O(0xdf) + 'mn'](f[N(0xe0)], f[O(0xf9)]),
            d[N(0xdf) + 'mn'](f[N(0xd2)], f[O(0xf9)])
        ]);
    }
};
function a() {
    const P = [
        'cbbXa',
        'OvUed',
        '2395746TyzUaa',
        'kwvbc',
        'addColumn',
        'CASCADE',
        'Contacts',
        'gUdCD',
        'Whatsapps',
        'AutoReply',
        'spXeQ',
        'restrict',
        '2bqQuxs',
        'novaP',
        'JyIpF',
        'eJWhu',
        'QRIma',
        'vdRnZ',
        'INTEGER',
        'MtjSW',
        '1446928jgavdP',
        '190201PMBexE',
        'TXjcM',
        'defineProp',
        'exports',
        'Settings',
        'removeColu',
        'PZxNN',
        '13475462RSKBEi',
        'all',
        'Tickets',
        'WNOao',
        'DpxFv',
        'value',
        'Tenants',
        'sGTGp',
        '5ZVkxNV',
        '__esModule',
        '10mLqHyx',
        'tenantId',
        'Users',
        'XfJmX',
        'erty',
        'uKiHi',
        'sequelize',
        '1706596IfqDUJ',
        'tMYOf',
        '8WGdkCi',
        '636771hCiLQw',
        '1150290BkhlFc',
        'DataTypes',
        'Queues'
    ];
    a = function () {
        return P;
    };
    return a();
}