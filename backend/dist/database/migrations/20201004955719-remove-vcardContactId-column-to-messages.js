'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x17f0 + -0x2 * -0xcb8 + -0x30b9);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(i(0xac)) / (0x21c + -0x67 * -0x1a + -0x1 * 0xc91) * (parseInt(i(0xa8)) / (-0x2 * -0x134b + -0x832 + -0x1e62)) + -parseInt(j(0xbc)) / (-0xefc + 0x2 * 0x58f + 0x1 * 0x3e1) + parseInt(i(0xab)) / (-0x8 * 0x18d + -0x440 + 0x2c * 0x61) + parseInt(j(0xc1)) / (-0xb2d + 0x145c * -0x1 + 0x1f8e) + parseInt(j(0xc2)) / (-0x1 * -0x1a4d + -0x264 + -0x17e3) + parseInt(i(0xbf)) / (-0x2 * -0x767 + -0x6 * -0x3fa + -0x26a3) + -parseInt(j(0xb3)) / (-0xa * -0x1f + 0x1 * 0xa1d + -0xb4b * 0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, 0xf9eb3 + 0x4ef * -0x199 + 0x5ebff));
const g = {};
g[k(0xc0)] = !![], Object[k(0xb0) + k(0xaf)](exports, l(0xb1), g);
function a() {
    const q = [
        'defineProp',
        '__esModule',
        'OdCwz',
        '22567680KXvpRD',
        'Contacts',
        'INTEGER',
        'exports',
        'CASCADE',
        'addColumn',
        'RZDag',
        'vcardConta',
        'ctId',
        '4475082tEffGA',
        'Messages',
        'DataTypes',
        '10877454gnNwvP',
        'value',
        '1605015NMqMft',
        '7004946akACpg',
        'sequelize',
        'removeColu',
        '223150nupBgQ',
        'FlueN',
        'BhYFa',
        '5537632LRpUcJ',
        '7UoRZnI',
        'csdnE',
        'RFBzc',
        'erty'
    ];
    a = function () {
        return q;
    };
    return a();
}
const sequelize_1 = require(k(0xc3));
module[l(0xb6)] = {
    'up': d => {
        const m = k, n = l, e = {};
        e[m(0xad)] = m(0xbd), e[n(0xb2)] = n(0xba) + n(0xbb);
        const f = e;
        return d[m(0xa7) + 'mn'](f[n(0xad)], f[m(0xb2)]);
    },
    'down': d => {
        const o = l, p = l, e = {};
        e[o(0xae)] = o(0xbd), e[p(0xaa)] = p(0xba) + p(0xbb), e[p(0xa9)] = o(0xb4), e[o(0xb9)] = o(0xb7);
        const f = e;
        return d[p(0xb8)](f[p(0xae)], f[p(0xaa)], {
            'type': sequelize_1[o(0xbe)][o(0xb5)],
            'references': {
                'model': f[p(0xa9)],
                'key': 'id'
            },
            'onUpdate': f[p(0xb9)],
            'onDelete': f[o(0xb9)]
        });
    }
};