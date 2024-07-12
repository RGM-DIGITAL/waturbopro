'use strict';
const k = b, l = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x4 * 0x509 + -0x157f + -0x30 * -0xe2);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(i(0xd0)) / (0x42b + -0x1 * 0x1fa3 + 0x1b79) * (-parseInt(i(0xda)) / (0x1c * 0x150 + 0x2513 * -0x1 + 0x55)) + parseInt(i(0xc8)) / (-0x11 * 0x220 + 0xd2f + 0x16f4 * 0x1) + -parseInt(j(0xcd)) / (-0x21f4 * -0x1 + -0x92 + 0x10af * -0x2) + parseInt(i(0xd9)) / (-0x1095 + -0x21e7 + 0x3281) * (parseInt(i(0xc5)) / (0x1106 + -0x1000 * 0x1 + 0x80 * -0x2)) + -parseInt(i(0xd8)) / (-0x2652 + -0xf6 * 0x1 + 0x274f) * (parseInt(i(0xdc)) / (-0x611 * -0x6 + 0x93 * 0x38 + -0xb3 * 0x62)) + -parseInt(j(0xbe)) / (-0x1 * -0x1cd7 + -0x113b + 0x1 * -0xb93) * (parseInt(i(0xca)) / (0x1de7 + 0x142 * -0x1 + -0x1c9b * 0x1)) + parseInt(j(0xbd)) / (-0x1 * 0xb3d + -0x1cca + 0x2812);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, -0x17a533 + 0xf6bb8 + 0x1 * 0x15b281));
const g = {};
g[k(0xce)] = !![], Object[k(0xbf) + l(0xc3)](exports, k(0xd4), g);
const sequelize_1 = require(l(0xcf));
function a() {
    const q = [
        'KVXZR',
        '1279360oFpoAm',
        'value',
        'sequelize',
        '1rXdGUY',
        'removeColu',
        'ReRDC',
        'peRph',
        '__esModule',
        'INTEGER',
        'SGjlj',
        'HhsPh',
        '7TcSXET',
        '40sGuJhs',
        '2169638fsVlcY',
        'Messages',
        '8877112zlruKc',
        '38030630UzCTgE',
        '9kDAboY',
        'defineProp',
        'ctId',
        'exports',
        'Contacts',
        'erty',
        'zkXJg',
        '1108956bCDKnh',
        'DataTypes',
        'addColumn',
        '269337YTZbGl',
        'CASCADE',
        '16284690GRamZR',
        'vcardConta'
    ];
    a = function () {
        return q;
    };
    return a();
}
module[l(0xc1)] = {
    'up': d => {
        const m = l, n = k, e = {};
        e[m(0xd2)] = m(0xdb), e[n(0xcc)] = n(0xcb) + m(0xc0), e[n(0xc4)] = m(0xc2), e[n(0xd6)] = n(0xc9);
        const f = e;
        return d[n(0xc7)](f[m(0xd2)], f[m(0xcc)], {
            'type': sequelize_1[m(0xc6)][m(0xd5)],
            'references': {
                'model': f[m(0xc4)],
                'key': 'id'
            },
            'onUpdate': f[n(0xd6)],
            'onDelete': f[n(0xd6)]
        });
    },
    'down': d => {
        const o = k, p = l, e = {};
        e[o(0xd3)] = o(0xdb), e[o(0xd7)] = p(0xcb) + o(0xc0);
        const f = e;
        return d[p(0xd1) + 'mn'](f[o(0xd3)], f[o(0xd7)]);
    }
};