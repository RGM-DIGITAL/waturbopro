'use strict';
function a() {
    const q = [
        'value',
        'removeColu',
        '44WZksXn',
        'ChatFlow',
        '329133otElWb',
        'SET\x20NULL',
        '2480605CBaJMG',
        '1317297VBMnHP',
        'DataTypes',
        'mFmoJ',
        'exports',
        '1965220UqVWiv',
        'KErCg',
        'jdnpT',
        '6PjDqSm',
        'defineProp',
        '__esModule',
        'CASCADE',
        'XmFkH',
        'sequelize',
        'zvSAj',
        '1242567TPkMGy',
        'chatFlowId',
        '2631216jLoKSu',
        'INTEGER',
        'cqPFo',
        'Whatsapps',
        '30RVGFNz',
        '2487CFeRFN',
        'erty',
        'addColumn',
        'wGYlr'
    ];
    a = function () {
        return q;
    };
    return a();
}
const k = b, l = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1b90 + 0x476 * -0x7 + 0x1c * 0x30);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(i(0x1a8)) / (0xb * -0x272 + -0x147 * 0x4 + 0x2003) * (-parseInt(i(0x1ae)) / (0x3f1 + -0x751 + 0x362)) + parseInt(i(0x1b3)) / (0x2537 + -0x263b * -0x1 + 0x1925 * -0x3) + -parseInt(j(0x197)) / (0x1 * -0x1fa9 + 0x1926 + -0x687 * -0x1) + parseInt(i(0x1b2)) / (0x8 * 0x475 + 0x1ee5 * 0x1 + -0x4288) * (-parseInt(i(0x19a)) / (0x19c7 + -0x1 * -0x2413 + -0x4 * 0xf75)) + parseInt(i(0x1b0)) / (0x2f6 * 0x8 + -0x19a6 + 0x1fd) + parseInt(j(0x1a3)) / (0x1 * 0x8d7 + 0x10dc + 0x1 * -0x19ab) + parseInt(j(0x1a1)) / (0xf * 0xcd + -0x1 * 0x4fd + -0x6fd) * (parseInt(i(0x1a7)) / (0x220e + -0x15ed + -0xc17));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * -0x4c20c + -0x5 * -0x1bbe1 + -0x8e740));
const g = {};
g[k(0x1ac)] = !![], Object[k(0x19b) + l(0x1a9)](exports, k(0x19c), g);
const sequelize_1 = require(l(0x19f));
module[k(0x196)] = {
    'up': d => {
        const m = k, n = k, e = {};
        e[m(0x199)] = n(0x1a6), e[m(0x19e)] = n(0x1a2), e[n(0x1a5)] = n(0x1af), e[n(0x1b5)] = m(0x19d), e[m(0x1ab)] = n(0x1b1);
        const f = e;
        return d[m(0x1aa)](f[n(0x199)], f[n(0x19e)], {
            'type': sequelize_1[n(0x1b4)][n(0x1a4)],
            'references': {
                'model': f[n(0x1a5)],
                'key': 'id'
            },
            'onUpdate': f[n(0x1b5)],
            'onDelete': f[m(0x1ab)],
            'allowNull': !![],
            'defaultValue': null
        });
    },
    'down': d => {
        const o = k, p = k, e = {};
        e[o(0x198)] = o(0x1a6), e[o(0x1a0)] = p(0x1a2);
        const f = e;
        return d[o(0x1ad) + 'mn'](f[o(0x198)], f[o(0x1a0)]);
    }
};