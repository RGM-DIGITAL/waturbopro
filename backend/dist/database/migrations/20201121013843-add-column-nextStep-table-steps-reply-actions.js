'use strict';
function a() {
    const q = [
        'cTuii',
        'addColumn',
        'NsMIs',
        'defineProp',
        '96stmqls',
        'StepsReply',
        'DataTypes',
        '5812848yLNiGh',
        'removeColu',
        'yqMsA',
        'INTEGER',
        '18exQYrs',
        'exports',
        '20289wcAgHg',
        '6721032BSmQpE',
        'erty',
        '1391980MMLsxr',
        'IYlIo',
        'bdiRI',
        'CASCADE',
        'LylQc',
        'Actions',
        'nextStep',
        'sequelize',
        '205870VUOiiz',
        '454JJPMSi',
        '2853200iUHJod',
        '__esModule',
        'value',
        '24872110TDqnwG'
    ];
    a = function () {
        return q;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * 0x9fd + -0x2 * 0x852 + 0x1b09);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(i(0x6c)) / (0xbc * -0x10 + 0x1 * 0x1b9d + -0xfdc) + -parseInt(i(0x75)) / (0x943 + 0xb * 0x339 + 0x165a * -0x2) * (parseInt(j(0x69)) / (-0x1356 + -0x19b + 0x14f4)) + -parseInt(j(0x81)) / (-0xa36 * 0x3 + -0x2fb + 0x1 * 0x21a1) + parseInt(j(0x74)) / (-0x40 * -0x4c + -0x43 * -0x6a + -0x9 * 0x531) * (parseInt(i(0x7e)) / (-0x1 * -0x3c1 + 0x1 * -0x50d + 0x152)) + parseInt(i(0x76)) / (0x11ab + 0xc99 + -0x1 * 0x1e3d) + -parseInt(j(0x6a)) / (-0x1c86 + -0x4bf * -0x4 + 0x992 * 0x1) + parseInt(i(0x85)) / (-0x12 * 0x1df + -0x1a74 + 0xd3 * 0x49) * (parseInt(j(0x79)) / (0x57d * 0x1 + -0x1052 * -0x2 + -0x2617));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * -0x16c393 + -0xc9b93 + 0x25c3c));
const g = {};
g[k(0x78)] = !![], Object[k(0x7d) + k(0x6b)](exports, l(0x77), g);
const sequelize_1 = require(l(0x73));
module[l(0x68)] = {
    'up': d => {
        const m = l, n = k, e = {};
        e[m(0x70)] = n(0x7f) + n(0x71), e[m(0x7a)] = m(0x72), e[m(0x83)] = n(0x7f), e[m(0x7c)] = m(0x6f);
        const f = e;
        return d[n(0x7b)](f[n(0x70)], f[m(0x7a)], {
            'type': sequelize_1[m(0x80)][n(0x84)],
            'references': {
                'model': f[m(0x83)],
                'key': 'id'
            },
            'onUpdate': f[n(0x7c)],
            'onDelete': f[n(0x7c)],
            'defaultValue': null,
            'allowNull': !![]
        });
    },
    'down': d => {
        const o = l, p = k, e = {};
        e[o(0x6e)] = p(0x7f) + p(0x71), e[o(0x6d)] = p(0x72);
        const f = e;
        return d[p(0x82) + 'mn'](f[o(0x6e)], f[p(0x6d)]);
    }
};