'use strict';
const p = b, q = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xd1 * -0x2f + -0x1599 * 0x1 + -0x1 * 0xf5b);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0x175)) / (0x28 * 0x55 + 0x1795 + -0x2 * 0x126e) + -parseInt(o(0x176)) / (-0x3 * 0x164 + -0x7dc * -0x4 + 0xda1 * -0x2) * (-parseInt(n(0x17c)) / (-0x1cdf * 0x1 + 0xd3 * -0x5 + 0x2101)) + parseInt(n(0x172)) / (0x1be0 + 0xf5b * 0x1 + -0x2b37) + -parseInt(n(0x186)) / (-0x113d + 0x1 * -0xa17 + -0x1b59 * -0x1) * (parseInt(o(0x181)) / (0x1788 + -0x26fe + 0xf7c)) + -parseInt(n(0x189)) / (0x8bd + 0x1 * 0x529 + 0x43 * -0x35) * (parseInt(n(0x18c)) / (-0x104 + -0x544 * -0x7 + 0x2fc * -0xc)) + -parseInt(o(0x171)) / (0x151a + -0x28 * 0xdf + -0x1 * -0xdc7) * (parseInt(o(0x18a)) / (0x268 + 0x1 * 0x1a7f + -0x1cdd)) + parseInt(n(0x16f)) / (-0x25e6 + -0xb6 + 0x5 * 0x7bb);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xd617 + 0xff013 * -0x1 + 0x8 * 0x334ed));
const m = {};
function a() {
    const v = [
        'value',
        'words',
        'QuYIn',
        'NvwPR',
        'exports',
        'name',
        '16547366NkptpI',
        'removeColu',
        '18RkIxbg',
        '194992iMSoSW',
        'sequelize',
        'bVBNB',
        '160324MnTtFX',
        '14SFoOzx',
        'STRING',
        '__esModule',
        'renameColu',
        'tCxEE',
        'pgnfm',
        '241248oxpXLH',
        'erty',
        'UuGKm',
        'aAyPC',
        'AutoReply',
        '276coxkex',
        'ARRAY',
        'all',
        'defineProp',
        'nZgoC',
        '114135fppdHb',
        'DataTypes',
        'addColumn',
        '13881zIcoGF',
        '131000OxHSKf',
        'reply',
        '1200hxDeRZ'
    ];
    a = function () {
        return v;
    };
    return a();
}
m[p(0x18d)] = !![], Object[q(0x184) + p(0x17d)](exports, q(0x178), m);
const sequelize_1 = require(p(0x173));
module[p(0x16d)] = {
    'up': d => {
        const r = p, s = p, e = {};
        e[r(0x17a)] = s(0x180), e[r(0x16b)] = r(0x18b), e[s(0x174)] = r(0x16e), e[r(0x17e)] = s(0x18e);
        const f = e;
        return Promise[s(0x183)]([
            d[r(0x179) + 'mn'](f[r(0x17a)], f[s(0x16b)], f[s(0x174)]),
            d[s(0x170) + 'mn'](f[r(0x17a)], f[r(0x17e)])
        ]);
    },
    'down': d => {
        const t = p, u = p, e = {};
        e[t(0x17f)] = t(0x180), e[u(0x16c)] = t(0x16e), e[u(0x185)] = t(0x18b), e[t(0x17b)] = u(0x18e);
        const f = e;
        return Promise[t(0x183)]([
            d[t(0x179) + 'mn'](f[u(0x17f)], f[t(0x16c)], f[t(0x185)]),
            d[u(0x188)](f[u(0x17f)], f[u(0x17b)], { 'type': sequelize_1[t(0x187)][t(0x182)](sequelize_1[t(0x187)][u(0x177)]) })
        ]);
    }
};