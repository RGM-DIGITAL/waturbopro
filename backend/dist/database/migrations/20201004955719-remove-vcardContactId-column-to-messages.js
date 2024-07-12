'use strict';
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(i(0x17f)) / (-0x8 * -0x24c + -0xad * -0x2 + -0x13b9) * (parseInt(j(0x16c)) / (-0x1 * 0x1cb8 + 0x14b4 + 0x806)) + -parseInt(j(0x171)) / (0x20cc + 0x168f + -0x3758) * (parseInt(j(0x184)) / (-0x91 * -0x25 + -0x199d + 0x4ac)) + parseInt(i(0x178)) / (-0x8c7 + -0x11 * 0x18b + 0x2307) * (parseInt(j(0x17b)) / (0x2f6 * -0xa + -0xcfa + 0x25e * 0x12)) + -parseInt(j(0x174)) / (0x788 + -0x106c + 0x8eb) * (parseInt(j(0x16d)) / (0x1 * -0x11eb + 0x1ca9 + -0xab6)) + parseInt(i(0x166)) / (-0x731 + 0x27a * -0x2 + 0xc2e) * (parseInt(j(0x168)) / (0x17 * 0xb3 + -0xa9 * 0xd + -0x776)) + parseInt(i(0x186)) / (-0xd1a + 0x2c5 + -0x14c * -0x8) + -parseInt(j(0x17d)) / (0x1 * -0x1a5a + 0x6 * -0x242 + 0x27f2 * 0x1) * (parseInt(i(0x16a)) / (-0xb24 + 0xeec + -0x3bb));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, 0x2a9f * -0x5c + -0xfd10c + -0x1 * -0x2c6b19));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x259c + -0x1135 + -0x1301);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const q = [
        'erty',
        '50KdtNfC',
        'exports',
        '3765437ifvEzf',
        'DataTypes',
        '536846wPceGy',
        '104088OkDGqA',
        'INTEGER',
        'addColumn',
        'KnvZo',
        '3188193ipMjWU',
        'hdBsK',
        'defineProp',
        '203PAcSyC',
        'Contacts',
        'DkCqw',
        'sequelize',
        '175065UOgVew',
        'removeColu',
        'value',
        '210WCMbhT',
        'ctId',
        '48tJgMle',
        '__esModule',
        '1dzsVts',
        'Messages',
        'CASCADE',
        'ZIXpv',
        'gdOsR',
        '4HKYCCZ',
        'vcardConta',
        '13062522kCPUub',
        'UGGrq',
        '2384541vxNRsO'
    ];
    a = function () {
        return q;
    };
    return a();
}
const g = {};
g[k(0x17a)] = !![], Object[l(0x173) + l(0x167)](exports, l(0x17e), g);
const sequelize_1 = require(l(0x177));
module[l(0x169)] = {
    'up': d => {
        const m = l, n = k, e = {};
        e[m(0x176)] = m(0x180), e[n(0x172)] = n(0x185) + m(0x17c);
        const f = e;
        return d[n(0x179) + 'mn'](f[n(0x176)], f[m(0x172)]);
    },
    'down': d => {
        const o = k, p = k, e = {};
        e[o(0x183)] = p(0x180), e[p(0x187)] = p(0x185) + p(0x17c), e[o(0x170)] = p(0x175), e[o(0x182)] = p(0x181);
        const f = e;
        return d[o(0x16f)](f[o(0x183)], f[p(0x187)], {
            'type': sequelize_1[o(0x16b)][p(0x16e)],
            'references': {
                'model': f[o(0x170)],
                'key': 'id'
            },
            'onUpdate': f[o(0x182)],
            'onDelete': f[p(0x182)]
        });
    }
};