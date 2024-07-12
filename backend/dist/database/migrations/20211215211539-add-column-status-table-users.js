'use strict';
const l = b, m = b;
(function (c, d) {
    const j = b, k = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(j(0xf3)) / (0x8 * -0x5b + 0x2c7 * -0x2 + 0x9 * 0xef) * (parseInt(j(0xe7)) / (-0x2633 + 0xfd3 + 0xa * 0x23d)) + -parseInt(k(0xf5)) / (0x10c5 + -0x6b * 0x3f + -0x81 * -0x13) * (parseInt(j(0xff)) / (0xce9 * -0x3 + 0x11cb * 0x2 + -0x1 * -0x329)) + -parseInt(j(0xee)) / (-0x3c * 0x68 + -0x120d + -0x6 * -0x713) * (parseInt(k(0xe6)) / (0x1ce * 0x1 + -0x13ad + 0x1fd * 0x9)) + parseInt(j(0x101)) / (-0x7 * 0x26b + 0x4f5 * 0x6 + -0x1 * 0xcca) + -parseInt(k(0xfa)) / (-0x2551 * -0x1 + -0x81c + -0x1 * 0x1d2d) * (-parseInt(k(0xe5)) / (0x1c4c + -0x6b * 0x3a + -0x31 * 0x15)) + -parseInt(k(0xf7)) / (0x1 * 0x24fb + -0x31 * -0x33 + -0x6ac * 0x7) * (parseInt(k(0xfc)) / (-0x8fc + -0x1 * -0x1b9d + 0x1a * -0xb7)) + parseInt(k(0xfd)) / (0x939 + -0x1 * -0xe0f + -0x173c);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x8b * 0x75 + 0xae062 + 0x1ebe * -0x27));
const i = {};
function a() {
    const r = [
        '1024226epTsVU',
        'value',
        'STRING',
        '40707fQOsbK',
        '2706fIhRJR',
        '58KuOUrt',
        'tDlXi',
        'erty',
        'offline',
        'defineProp',
        'Users',
        'PKipZ',
        '5970Quykvo',
        'UELLt',
        'AmjYW',
        'daIrG',
        'exports',
        '20806riCqlB',
        'sequelize',
        '144iikNMG',
        'all',
        '20qGlsEw',
        'addColumn',
        'status',
        '128tqXBzn',
        'removeColu',
        '4159001QzTPJF',
        '35014020pXBKzd',
        '__esModule',
        '68028utbVhb',
        'DataTypes'
    ];
    a = function () {
        return r;
    };
    return a();
}
i[l(0xe3)] = !![], Object[l(0xeb) + l(0xe9)](exports, l(0xfe), i);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xa * 0x5e + -0x1 * -0x227f + -0x2548);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(l(0xf4));
module[m(0xf2)] = {
    'up': d => {
        const n = m, o = l, e = {};
        e[n(0xed)] = n(0xec), e[n(0xf0)] = o(0xf9), e[n(0xef)] = n(0xea);
        const f = e;
        return Promise[o(0xf6)]([d[n(0xf8)](f[n(0xed)], f[n(0xf0)], {
                'type': sequelize_1[o(0x100)][o(0xe4)],
                'allowNull': ![],
                'defaultValue': f[o(0xef)]
            })]);
    },
    'down': d => {
        const p = m, q = m, e = {};
        e[p(0xe8)] = q(0xec), e[q(0xf1)] = p(0xf9);
        const f = e;
        return Promise[p(0xf6)]([d[p(0xfb) + 'mn'](f[q(0xe8)], f[q(0xf1)])]);
    }
};