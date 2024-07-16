'use strict';
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(i(0x1b9)) / (-0x162d * 0x1 + 0x2074 + 0x1 * -0xa46) + parseInt(j(0x1c0)) / (0x1 * -0x1e6a + 0x109f * -0x2 + 0x119 * 0x3a) + -parseInt(i(0x1b2)) / (0x2 * 0x1df + -0x1ac1 + 0xb83 * 0x2) * (parseInt(j(0x1c4)) / (0x2513 * 0x1 + 0x2f9 + -0x2808)) + parseInt(i(0x1aa)) / (-0x981 * 0x1 + -0x69 * 0xc + 0xe72) * (-parseInt(j(0x1bc)) / (0x4 * -0x4be + -0x306 + 0x1604 * 0x1)) + parseInt(j(0x1b6)) / (0x1 * 0x24f5 + 0x98e + 0x173e * -0x2) * (-parseInt(j(0x1b8)) / (0x1b17 + 0x1 * -0xd0f + -0xe00)) + -parseInt(j(0x1c3)) / (-0x26d4 + -0x4 * 0x463 + -0x1 * -0x3869) + parseInt(i(0x1af)) / (0x2c5 * 0x1 + 0x1b6a + -0x1e25) * (parseInt(i(0x1c7)) / (0x7 * -0x1b7 + 0x2559 + -0x7f * 0x33));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, 0x4bae + 0x11f78 + 0x2ba05 * 0x1));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1d8 * 0xa + -0x142 * 0x1 + 0x1f1 * 0xb);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const q = [
        'exports',
        '725680LhKMLm',
        'qUVjf',
        'sBFzS',
        '1001394FMwPFh',
        '558364LmNAYP',
        'CASCADE',
        'SOiVD',
        '159269oupVDd',
        'defineProp',
        '155wyKfpq',
        'addColumn',
        'NXxOO',
        'value',
        'STRING',
        '950OmYEKd',
        'DataTypes',
        'ibAwG',
        '6KRZmOH',
        '__esModule',
        'quotedMsgI',
        'erty',
        '244573uPIHMX',
        'removeColu',
        '80inJimV',
        '237451grjNPH',
        'cgkap',
        'sequelize',
        '94722sElaVc',
        'Messages',
        'SET\x20NULL'
    ];
    a = function () {
        return q;
    };
    return a();
}
const g = {};
g[k(0x1ad)] = !![], Object[k(0x1a9) + l(0x1b5)](exports, k(0x1b3), g);
const sequelize_1 = require(k(0x1bb));
module[l(0x1bf)] = {
    'up': d => {
        const m = k, n = k, e = {};
        e[m(0x1c6)] = m(0x1bd), e[n(0x1ac)] = n(0x1b4) + 'd', e[m(0x1c2)] = m(0x1c5), e[m(0x1c1)] = m(0x1be);
        const f = e;
        return d[n(0x1ab)](f[m(0x1c6)], f[n(0x1ac)], {
            'type': sequelize_1[n(0x1b0)][m(0x1ae)],
            'references': {
                'model': f[n(0x1c6)],
                'key': 'id'
            },
            'onUpdate': f[m(0x1c2)],
            'onDelete': f[m(0x1c1)]
        });
    },
    'down': d => {
        const o = l, p = k, e = {};
        e[o(0x1ba)] = p(0x1bd), e[p(0x1b1)] = p(0x1b4) + 'd';
        const f = e;
        return d[p(0x1b7) + 'mn'](f[p(0x1ba)], f[o(0x1b1)]);
    }
};