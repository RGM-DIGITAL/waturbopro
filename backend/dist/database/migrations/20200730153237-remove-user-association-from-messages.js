'use strict';
const k = b, l = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * 0x19b5 + -0x1215 + 0x1648 * 0x2);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(i(0xde)) / (-0x8ce * 0x1 + -0x6fb * 0x1 + 0xfca) + parseInt(j(0xd5)) / (-0x2630 + -0x544 * 0x1 + -0x1 * -0x2b76) + parseInt(j(0xcd)) / (-0x724 * 0x2 + -0x1 * 0xcb9 + 0x1a * 0x10a) + parseInt(i(0xca)) / (-0x25c5 + -0x1bf * 0x3 + 0x2b06) + parseInt(j(0xd3)) / (0x7a2 * 0x2 + -0x1 * -0x1cdf + -0x2c1e) * (parseInt(i(0xd1)) / (0x26f5 + -0xdf5 + -0x18fa)) + parseInt(j(0xc7)) / (0x7c8 + 0x1cb5 + -0x2476) + -parseInt(j(0xd0)) / (0x2e1 + -0x1 * 0x20b + -0xce) * (parseInt(i(0xc6)) / (0x1 * 0x165f + 0x1ea2 + 0x1e * -0x1c4));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, 0x10 * 0x18b0 + -0x100985 + -0x37 * -0x6dcf));
function a() {
    const q = [
        '2084607AJLPSu',
        'RkmLA',
        'value',
        '4579308vBkDVB',
        'zpQGJ',
        'INTEGER',
        '1406694NVayHF',
        'jjFAH',
        'Users',
        '56TxQjGx',
        '5067078lFaPoT',
        'Messages',
        '5EaOXtr',
        'wPGGV',
        '520746nazopz',
        '__esModule',
        'userId',
        'ciSkZ',
        'erty',
        'SET\x20NULL',
        'sequelize',
        'ojYED',
        'defineProp',
        '184773AMYbws',
        'exports',
        'removeColu',
        'xBgqu',
        'addColumn',
        'CASCADE',
        'DataTypes',
        '3349251CgmBsC'
    ];
    a = function () {
        return q;
    };
    return a();
}
const g = {};
g[k(0xc9)] = !![], Object[l(0xdd) + k(0xd9)](exports, k(0xd6), g);
const sequelize_1 = require(l(0xdb));
module[k(0xdf)] = {
    'up': d => {
        const m = k, n = l, e = {};
        e[m(0xcb)] = m(0xd2), e[m(0xce)] = n(0xd7);
        const f = e;
        return d[m(0xe0) + 'mn'](f[m(0xcb)], f[n(0xce)]);
    },
    'down': d => {
        const o = l, p = l, e = {};
        e[o(0xc8)] = p(0xd2), e[o(0xdc)] = o(0xd7), e[o(0xd8)] = p(0xcf), e[p(0xe1)] = o(0xe3), e[p(0xd4)] = o(0xda);
        const f = e;
        return d[p(0xe2)](f[p(0xc8)], f[o(0xdc)], {
            'type': sequelize_1[p(0xe4)][p(0xcc)],
            'references': {
                'model': f[o(0xd8)],
                'key': 'id'
            },
            'onUpdate': f[o(0xe1)],
            'onDelete': f[o(0xd4)]
        });
    }
};