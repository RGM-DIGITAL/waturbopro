'use strict';
function a() {
    const r = [
        '807594gifEag',
        'status',
        '2310580fpjSQD',
        'offline',
        'sfCuN',
        'all',
        'vFJmY',
        'defineProp',
        '3556511VqkbcZ',
        'value',
        'vSiDV',
        'erty',
        'DataTypes',
        '909708jYzReH',
        'xLRED',
        '__esModule',
        'STRING',
        'Users',
        'exports',
        'sequelize',
        'fELtv',
        '110850LzjGvA',
        'addColumn',
        '12983800gtJLCU',
        'removeColu',
        '36CRiljI',
        '264324AESjEQ'
    ];
    a = function () {
        return r;
    };
    return a();
}
const l = b, m = b;
(function (c, d) {
    const j = b, k = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(j(0x138)) / (0x1031 + -0x1 * 0xa + -0x9f * 0x1a) + -parseInt(j(0x152)) / (0x1bb4 + -0xfb2 + -0xc00) + -parseInt(j(0x145)) / (0x1a96 + -0xb * -0xb + -0x1b0c) + -parseInt(k(0x13a)) / (0x1e7 * -0x7 + -0x4ee * 0x1 + -0x37 * -0x55) + -parseInt(k(0x14d)) / (-0x3 * -0x609 + 0x26ba + -0x38d0) * (-parseInt(k(0x151)) / (0x4 * 0x2d5 + 0xc0c + -0x175a)) + parseInt(k(0x140)) / (0x19f6 + -0x6 * -0x337 + -0x2d39) + parseInt(j(0x14f)) / (0x71 * 0xa + 0x243f + -0x28a1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xcad39 + -0x2 * 0x2e769 + -0xca019 * -0x2));
const i = {};
i[l(0x141)] = !![], Object[m(0x13f) + l(0x143)](exports, m(0x147), i);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x429 * -0x1 + -0x1 * 0x22f9 + 0x2008);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(l(0x14b));
module[m(0x14a)] = {
    'up': d => {
        const n = m, o = m, e = {};
        e[n(0x13e)] = o(0x149), e[o(0x146)] = n(0x139), e[n(0x13c)] = o(0x13b);
        const f = e;
        return Promise[n(0x13d)]([d[n(0x14e)](f[o(0x13e)], f[n(0x146)], {
                'type': sequelize_1[o(0x144)][o(0x148)],
                'allowNull': ![],
                'defaultValue': f[n(0x13c)]
            })]);
    },
    'down': d => {
        const p = l, q = l, e = {};
        e[p(0x14c)] = q(0x149), e[q(0x142)] = q(0x139);
        const f = e;
        return Promise[p(0x13d)]([d[p(0x150) + 'mn'](f[p(0x14c)], f[p(0x142)])]);
    }
};