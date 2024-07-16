'use strict';
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(i(0xde)) / (0x1 * -0x230e + -0x88c * 0x1 + 0x2b9b) + -parseInt(i(0xd5)) / (0x16c * 0x17 + -0x1d9 * -0x8 + -0x2f7a) + -parseInt(i(0xc8)) / (-0x1 * -0x1a75 + -0xfca + -0xaa8) + parseInt(j(0xe2)) / (-0x22b7 + 0x3 * -0x8e9 + 0x2 * 0x1ebb) * (parseInt(j(0xc5)) / (0x2 * -0x6ee + 0x460 * -0x8 + -0x81 * -0x61)) + -parseInt(j(0xda)) / (0x87d + -0x1017 + -0x1 * -0x7a0) + -parseInt(j(0xc3)) / (0x154 + 0x62 * 0x5f + -0x25ab * 0x1) * (parseInt(i(0xd4)) / (-0x22f6 + -0x24e9 + 0x47e7)) + parseInt(j(0xcc)) / (0x8b1 + -0x2589 + 0x1ce1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, 0x11680b + -0xa129f + 0x26b90));
function a() {
    const q = [
        'all',
        '2260857tcyrcU',
        'addColumn',
        'defineProp',
        'OUFkx',
        '39153231MxArKx',
        'StepsReply',
        'ExWPm',
        'oldStepAut',
        'exports',
        'CASCADE',
        'hhPne',
        'lTSxO',
        '8XxUROH',
        '2507170QIZAqc',
        'SET\x20NULL',
        'EWrYm',
        'INTEGER',
        'DataTypes',
        '3638214KCpqAF',
        'Tickets',
        '__esModule',
        'zwnIW',
        '1124896tICSZZ',
        'sequelize',
        'fBHcQ',
        'value',
        '4jaRAvE',
        'removeColu',
        '8725437DZxRSF',
        'oReplyId',
        '6369145fThTMH',
        'erty'
    ];
    a = function () {
        return q;
    };
    return a();
}
const g = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xd2d * -0x2 + -0x1d * 0x71 + 0x259 * 0x11);
        let h = e[f];
        return h;
    }, b(c, d);
}
g[k(0xe1)] = !![], Object[l(0xca) + l(0xc6)](exports, l(0xdc), g);
const sequelize_1 = require(l(0xdf));
module[k(0xd0)] = {
    'up': d => {
        const m = k, n = l, e = {};
        e[m(0xd2)] = n(0xdb), e[n(0xdd)] = m(0xcf) + m(0xc4);
        const f = e;
        return Promise[n(0xc7)]([d[n(0xc2) + 'mn'](f[n(0xd2)], f[m(0xdd)])]);
    },
    'down': d => {
        const o = l, p = k, e = {};
        e[o(0xce)] = o(0xdb), e[o(0xcb)] = o(0xcf) + p(0xc4), e[o(0xd7)] = o(0xcd), e[p(0xe0)] = p(0xd1), e[p(0xd3)] = o(0xd6);
        const f = e;
        return d[o(0xc9)](f[o(0xce)], f[p(0xcb)], {
            'type': sequelize_1[o(0xd9)][p(0xd8)],
            'references': {
                'model': f[p(0xd7)],
                'key': 'id'
            },
            'onUpdate': f[p(0xe0)],
            'onDelete': f[p(0xd3)],
            'allowNull': !![],
            'defaultValue': null
        });
    }
};