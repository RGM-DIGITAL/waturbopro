'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x15ef + 0x22b7 * -0x1 + 0x39e0);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(i(0x140)) / (-0x22b * 0x2 + -0x73 * 0x1b + 0x41e * 0x4) * (parseInt(i(0x142)) / (0x136b + 0xb * 0x269 + 0x2dec * -0x1)) + parseInt(i(0x154)) / (0x263 + 0x8da + -0xb3a * 0x1) + parseInt(j(0x14e)) / (0x1 * 0x1775 + -0x2683 * -0x1 + -0x3df4) + parseInt(i(0x13a)) / (0xce9 + 0x1141 + -0x1e25) * (-parseInt(j(0x149)) / (0x1 * 0x13d6 + -0x4 * 0x551 + 0x174)) + parseInt(i(0x146)) / (0x7d * -0x1 + -0x1c33 + 0x1cb7) + parseInt(j(0x13b)) / (0x661 + 0x7ff + 0x11 * -0xd8) + parseInt(i(0x155)) / (0x31 * -0x2a + -0x155a + -0x3 * -0x9cf);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, -0x12390 + 0x2032b * -0x4 + 0xdb83a));
const g = {};
g[k(0x13e)] = !![], Object[k(0x141) + k(0x147)](exports, k(0x14c), g);
function a() {
    const q = [
        'qhROH',
        'kcCKH',
        '5vgVHEe',
        '377912XPsxPK',
        'SwCOn',
        'addColumn',
        'value',
        'CASCADE',
        '5399SmSKaE',
        'defineProp',
        '194tlZoYV',
        'DataTypes',
        'SET\x20NULL',
        'exports',
        '3113852ZmQdpQ',
        'erty',
        'zdgxd',
        '1854066ZZhaNM',
        'sequelize',
        'Plans',
        '__esModule',
        'UfeBN',
        '1651600qxQnzQ',
        'planId',
        'INTEGER',
        'vMtJS',
        'MOdfl',
        'Tenants',
        '14754WyCLyW',
        '1978011klpFfx',
        'removeColu'
    ];
    a = function () {
        return q;
    };
    return a();
}
const sequelize_1 = require(l(0x14a));
module[k(0x145)] = {
    'up': d => {
        const m = k, n = k, e = {};
        e[m(0x152)] = m(0x153), e[m(0x148)] = m(0x14f), e[n(0x158)] = n(0x14b), e[m(0x14d)] = m(0x13f), e[n(0x151)] = n(0x144);
        const f = e;
        return d[n(0x13d)](f[n(0x152)], f[n(0x148)], {
            'type': sequelize_1[m(0x143)][n(0x150)],
            'references': {
                'model': f[m(0x158)],
                'key': 'id'
            },
            'onUpdate': f[n(0x14d)],
            'onDelete': f[n(0x151)]
        });
    },
    'down': d => {
        const o = l, p = l, e = {};
        e[o(0x13c)] = p(0x153), e[p(0x157)] = p(0x14f);
        const f = e;
        return d[o(0x156) + 'mn'](f[o(0x13c)], f[o(0x157)]);
    }
};