'use strict';
const l = b, m = b;
(function (d, e) {
    const j = b, k = b, f = d();
    while (!![]) {
        try {
            const g = parseInt(j(0x172)) / (-0x2228 + -0x10a * -0x24 + 0x33f * -0x1) + parseInt(k(0x16d)) / (0x14f3 + 0x8cd + -0x1dbe) * (-parseInt(j(0x17d)) / (0xc * 0x31c + 0x19f9 * -0x1 + -0xb54)) + parseInt(j(0x170)) / (-0x26bd + -0x2517 + 0x4bd8) * (parseInt(k(0x183)) / (-0x1108 + -0x2db * 0x1 + 0x13e8)) + -parseInt(k(0x17b)) / (-0x1337 + -0x15e5 + 0x2922) + -parseInt(j(0x181)) / (-0x4ff * 0x3 + 0x1707 + 0x7 * -0x125) + parseInt(k(0x175)) / (0x20d7 + 0x6b9 * -0x3 + 0x1 * -0xca4) + parseInt(k(0x17a)) / (-0x915 * -0x3 + -0x8 * -0x4ae + 0x32 * -0x14b);
            if (g === e)
                break;
            else
                f['push'](f['shift']());
        } catch (h) {
            f['push'](f['shift']());
        }
    }
}(a, -0x298f4 + 0x1 * -0x1640f2 + 0x27b99f * 0x1));
function a() {
    const r = [
        '7269732qyRmHu',
        '4029840xQewsa',
        'DataTypes',
        '8133qruKfJ',
        'izfUT',
        'INTEGER',
        'defineProp',
        '11671212WOQLNs',
        'exports',
        '3013385yiJgBX',
        'Queues',
        'LuVHT',
        'sequelize',
        '__esModule',
        'value',
        'erty',
        'type',
        'PpFsb',
        'PgzNm',
        'queue',
        'defaultVal',
        '542MAYZtO',
        'CASCADE',
        'Tickets',
        '4FGyLNx',
        'allowNull',
        '1691228zUpLmH',
        'restrict',
        'removeColu',
        '7574088MsxzTe',
        'OOTno',
        'yTAor',
        'addColumn',
        'XuCOF'
    ];
    a = function () {
        return r;
    };
    return a();
}
const c = {};
c[l(0x166)] = !![], Object[l(0x180) + l(0x167)](exports, l(0x165), c);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1cd7 * -0x1 + -0x4 * 0x336 + 0x2b14);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(m(0x186));
module[m(0x182)] = {
    'up': async e => {
        const n = l, o = l, f = {};
        f[n(0x16a)] = n(0x16f), f[o(0x185)] = o(0x16b), f[o(0x169)] = n(0x184), f[n(0x17e)] = o(0x16e), f[n(0x179)] = o(0x173);
        const g = f;
        await e[n(0x174) + 'mn'](g[o(0x16a)], g[n(0x185)]), await e[n(0x178)](g[o(0x16a)], g[o(0x185)], {
            'type': sequelize_1[o(0x17c)][n(0x17f)],
            'references': {
                'model': g[o(0x169)],
                'key': 'id'
            },
            'onUpdate': g[o(0x17e)],
            'onDelete': g[n(0x179)],
            'defaultValue': null,
            'allowNull': !![]
        });
    },
    'down': async f => {
        const p = l, q = l, g = {};
        g[p(0x176)] = p(0x16f), g[q(0x177)] = p(0x16b);
        const h = g;
        await f[q(0x174) + 'mn'](h[q(0x176)], h[q(0x177)]);
        const i = {};
        i[q(0x168)] = sequelize_1[p(0x17c)][p(0x17f)], i[p(0x16c) + 'ue'] = null, i[p(0x171)] = !![], await f[q(0x178)](h[q(0x176)], h[q(0x177)], i);
    }
};