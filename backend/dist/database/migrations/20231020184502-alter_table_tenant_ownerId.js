'use strict';
function a() {
    const t = [
        'sequelize',
        'SVVjl',
        '4660112mtNzBW',
        'changeColu',
        'INTEGER',
        'erty',
        'UYQUG',
        'exports',
        'removeCons',
        'Tenants',
        '10eYjpoh',
        'GvuIo',
        'nlxwq',
        '95AbJJiY',
        'nerId_fkey',
        'xUfPw',
        '293USWigc',
        '7wtTNqm',
        'DataTypes',
        '11474573BTGhXW',
        'defineProp',
        'all',
        'value',
        '3998xJrtOt',
        '3124017KDYGyy',
        '2522886jjWKjF',
        'CASCADE',
        'Tenants_ow',
        'bqiKq',
        'traint',
        'SdSLr',
        '226416AymZeW',
        '57472ivRyrG',
        'ownerId',
        '__esModule'
    ];
    a = function () {
        return t;
    };
    return a();
}
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0x12c)) / (0xe05 + 0x1896 + -0x269a) * (parseInt(l(0x133)) / (-0x1 * -0xad + -0x3 * -0x964 + 0x1 * -0x1cd7)) + parseInt(m(0x13b)) / (-0x1a52 + -0x1b1 + 0x1c06) + parseInt(l(0x13c)) / (-0x7d5 * -0x1 + -0x230a + 0x1b39) * (parseInt(m(0x129)) / (-0x1af * 0x4 + -0x66 * 0x3 + 0x7f3)) + -parseInt(m(0x135)) / (-0x2dd + -0x1d * -0xa4 + -0xfb1) * (parseInt(l(0x12d)) / (-0xce3 * 0x1 + -0x1a0e + -0x2 * -0x137c)) + parseInt(m(0x141)) / (0x1 * -0xd8d + -0x212f * -0x1 + -0x139a) + -parseInt(l(0x134)) / (0x667 + 0x1d75 * 0x1 + -0x3fb * 0x9) * (-parseInt(l(0x126)) / (0x1 * -0x26cf + 0x1 * -0xd7e + 0x1 * 0x3457)) + -parseInt(m(0x12f)) / (0x6b1 + -0x1d67 + 0xe9 * 0x19);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x96046 * 0x1 + -0x8c45b + 0x57f43));
const k = {};
k[n(0x132)] = !![], Object[n(0x130) + o(0x121)](exports, n(0x13e), k);
const sequelize_1 = require(o(0x13f));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x434 * 0x5 + 0xa33 * -0x1 + 0x9b1 * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[n(0x123)] = {
    'up': d => {
        const p = o, q = o, e = {};
        e[p(0x138)] = p(0x125), e[p(0x127)] = p(0x137) + q(0x12a), e[q(0x13a)] = p(0x13d), e[q(0x12b)] = p(0x136);
        const f = e;
        return Promise[p(0x131)]([
            d[q(0x124) + q(0x139)](f[p(0x138)], f[q(0x127)]),
            d[q(0x142) + 'mn'](f[q(0x138)], f[p(0x13a)], {
                'type': sequelize_1[q(0x12e)][p(0x120)],
                'references': {
                    'model': f[p(0x138)],
                    'key': 'id'
                },
                'onUpdate': f[p(0x12b)],
                'onDelete': f[q(0x12b)],
                'allowNull': !![]
            })
        ]);
    },
    'down': d => {
        const r = n, s = n, e = {};
        e[r(0x140)] = r(0x125), e[r(0x128)] = r(0x13d), e[r(0x122)] = s(0x136);
        const f = e;
        return Promise[r(0x131)]([d[r(0x142) + 'mn'](f[r(0x140)], f[r(0x128)], {
                'type': sequelize_1[r(0x12e)][s(0x120)],
                'references': {
                    'model': f[r(0x140)],
                    'key': 'id'
                },
                'onUpdate': f[s(0x122)],
                'onDelete': f[s(0x122)],
                'allowNull': !![]
            })]);
    }
};