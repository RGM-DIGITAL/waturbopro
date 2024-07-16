'use strict';
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(i(0xa4)) / (0x84e * 0x4 + 0x1 * 0x17e2 + 0x137 * -0x2f) * (parseInt(j(0xb7)) / (-0xb * -0x137 + 0x13c * -0x2 + 0x3a1 * -0x3)) + -parseInt(j(0xa9)) / (-0x3fe * 0x4 + 0x111a + 0x29 * -0x7) + -parseInt(j(0xab)) / (0x1 * -0x457 + -0x1 * -0x1f5f + -0x1c * 0xf7) + -parseInt(i(0xa5)) / (0x5f3 + 0x1dd4 + 0x23c2 * -0x1) * (parseInt(i(0xbe)) / (0x152f + -0x2137 + 0xc0e)) + -parseInt(j(0xae)) / (-0x48 * 0x48 + 0x481 * -0x7 + -0x2ba * -0x13) + -parseInt(i(0xbf)) / (0xae4 + -0x1483 + -0x161 * -0x7) + -parseInt(i(0xb2)) / (-0x1ec6 + 0xb8f + 0x1c * 0xb0) * (-parseInt(i(0xb4)) / (-0x5a * -0x39 + -0x1805 + 0x15 * 0x31));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, -0x3ce * -0x4f + 0x86be8 + 0x1 * -0x4d706));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xe * 0x2a0 + 0xf01 + 0x1661);
        let h = e[f];
        return h;
    }, b(c, d);
}
const g = {};
function a() {
    const q = [
        'CASCADE',
        'ufxpl',
        'HiCSk',
        'sequelize',
        'rygep',
        '13470oMIwrQ',
        '1852776KnuztA',
        'addColumn',
        'UAqkM',
        'value',
        'removeColu',
        '241849CQwWgA',
        '315QFcBRa',
        'Plans',
        'INTEGER',
        'DataTypes',
        '4086SnHuwT',
        'AWBVM',
        '1587320XieUfp',
        '__esModule',
        'exports',
        '1059072ftzptN',
        'SET\x20NULL',
        'erty',
        'Tenants',
        '9TrWOrX',
        'ZMWJg',
        '14760370cNFUga',
        'CHQRu',
        'planId',
        '2KQzuAZ',
        'defineProp'
    ];
    a = function () {
        return q;
    };
    return a();
}
g[k(0xa2)] = !![], Object[k(0xb8) + l(0xb0)](exports, k(0xac), g);
const sequelize_1 = require(l(0xbc));
module[l(0xad)] = {
    'up': d => {
        const m = k, n = l, e = {};
        e[m(0xc1)] = m(0xb1), e[n(0xbb)] = n(0xb6), e[n(0xaa)] = m(0xa6), e[m(0xb3)] = m(0xb9), e[n(0xb5)] = n(0xaf);
        const f = e;
        return d[n(0xc0)](f[m(0xc1)], f[n(0xbb)], {
            'type': sequelize_1[m(0xa8)][m(0xa7)],
            'references': {
                'model': f[n(0xaa)],
                'key': 'id'
            },
            'onUpdate': f[m(0xb3)],
            'onDelete': f[m(0xb5)]
        });
    },
    'down': d => {
        const o = k, p = k, e = {};
        e[o(0xba)] = p(0xb1), e[p(0xbd)] = o(0xb6);
        const f = e;
        return d[o(0xa3) + 'mn'](f[p(0xba)], f[o(0xbd)]);
    }
};