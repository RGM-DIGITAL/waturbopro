'use strict';
const k = b, l = b;
function a() {
    const q = [
        '5230128EnHUoV',
        'userId',
        'YkrVC',
        'zZcBT',
        'FumBR',
        '241551tKBQjT',
        '1003230REtlGI',
        'addColumn',
        'sequelize',
        'Users',
        'erty',
        'Messages',
        '73018epTUTB',
        'value',
        'Bocmt',
        'pzfmB',
        'exports',
        '2477490RvifxY',
        'defineProp',
        'INTEGER',
        '__esModule',
        'removeColu',
        'SET\x20NULL',
        '49mXEVKs',
        'EFuLW',
        '2356482FvLAPf',
        'Yxtaq',
        'DataTypes',
        '20445420xyazRK',
        '23EXOQTy',
        '16yxifKt',
        'CASCADE'
    ];
    a = function () {
        return q;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x156b + 0x1ec4 + -0xf * 0x362);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(i(0x18f)) / (-0xfff + 0xec3 * 0x1 + 0x13d) * (parseInt(j(0x17e)) / (0x254f * -0x1 + -0x621 + 0x1 * 0x2b72)) + -parseInt(i(0x18b)) / (0x81f + 0x1945 * -0x1 + -0x17 * -0xbf) + parseInt(j(0x172)) / (-0x5 * -0x2a9 + 0x20c4 + -0x1 * 0x2e0d) + parseInt(i(0x183)) / (-0x1713 + -0x19b9 + 0x30d1) + -parseInt(j(0x178)) / (-0x61a * 0x1 + 0x26b4 + -0x2094) * (-parseInt(i(0x189)) / (0x2a1 + -0x187a + 0x190 * 0xe)) + -parseInt(j(0x190)) / (-0x112a + 0x500 + 0xe * 0xdf) * (parseInt(i(0x177)) / (0x72e * -0x2 + -0x1077 + 0x1edc)) + -parseInt(j(0x18e)) / (0x25ca + -0x2d3 + -0x22ed);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, -0x156e09 + 0x14489a + 0xf5421));
const g = {};
g[k(0x17f)] = !![], Object[k(0x184) + l(0x17c)](exports, l(0x186), g);
const sequelize_1 = require(k(0x17a));
module[k(0x182)] = {
    'up': d => {
        const m = k, n = l, e = {};
        e[m(0x18a)] = n(0x17d), e[n(0x180)] = m(0x173), e[m(0x181)] = n(0x17b), e[m(0x18c)] = m(0x171), e[m(0x175)] = n(0x188);
        const f = e;
        return d[m(0x179)](f[m(0x18a)], f[n(0x180)], {
            'type': sequelize_1[n(0x18d)][m(0x185)],
            'references': {
                'model': f[m(0x181)],
                'key': 'id'
            },
            'onUpdate': f[n(0x18c)],
            'onDelete': f[n(0x175)],
            'allowNull': !![],
            'defaultValue': null
        });
    },
    'down': d => {
        const o = k, p = k, e = {};
        e[o(0x176)] = p(0x17d), e[p(0x174)] = p(0x173);
        const f = e;
        return d[o(0x187) + 'mn'](f[o(0x176)], f[o(0x174)]);
    }
};