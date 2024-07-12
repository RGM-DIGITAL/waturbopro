'use strict';
const l = b, m = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * -0x581 + -0x1dd3 + 0x1921);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (d, e) {
    const j = b, k = b, f = d();
    while (!![]) {
        try {
            const g = -parseInt(j(0xf1)) / (0x583 * 0x1 + -0x10f * -0xe + 0x1454 * -0x1) + parseInt(k(0xea)) / (-0x18bc + -0x1b * -0x143 + -0x953) * (-parseInt(j(0xe5)) / (0x1d8e + -0x90 + -0x1cfb)) + parseInt(k(0xe3)) / (0x71d + 0xddc * -0x1 + 0x6c3) * (parseInt(k(0xdb)) / (-0x1a3d + 0x1415 + -0x33 * -0x1f)) + parseInt(j(0xda)) / (0x1 * 0x17b7 + -0x1b1 + 0x58 * -0x40) * (parseInt(j(0xe4)) / (0x463 * -0x7 + -0x252c + 0x29 * 0x1a8)) + parseInt(k(0xd4)) / (-0xd4 * 0x8 + 0x1 * -0x1e1 + 0x889) * (-parseInt(j(0xdd)) / (0x1 * 0x2285 + -0x18ab + 0x1 * -0x9d1)) + -parseInt(k(0xf0)) / (0x3f5 + 0x22d6 + 0xceb * -0x3) * (-parseInt(j(0xd3)) / (0x1b36 + -0x873 * 0x1 + -0x12b8)) + parseInt(k(0xd9)) / (-0x1393 * -0x1 + 0x40f * 0x2 + 0x151 * -0x15);
            if (g === e)
                break;
            else
                f['push'](f['shift']());
        } catch (h) {
            f['push'](f['shift']());
        }
    }
}(a, 0xe5696 + -0x8c2df + 0x1 * 0x6a2ab));
const c = {};
c[l(0xf3)] = !![], Object[m(0xd5) + l(0xeb)](exports, m(0xe8), c);
function a() {
    const r = [
        'removeColu',
        'addColumn',
        '21462180bIEReJ',
        '5448rtQjDf',
        '5cfuznM',
        'TqYZq',
        '153GglGJa',
        'allowNull',
        'etrId',
        'Queues',
        'CASCADE',
        'restrict',
        '1329268FQMJwJ',
        '1946aKvzNX',
        '54681pHdEVh',
        'iNssV',
        'DataTypes',
        '__esModule',
        'exports',
        '78kCAQxM',
        'erty',
        'INTEGER',
        'yrRmY',
        'defaultVal',
        'sequelize',
        '285020yOkdaJ',
        '832128pyySoN',
        'YeozN',
        'value',
        'Tickets',
        'TWiQi',
        'type',
        'ESJTT',
        '429VXRjfL',
        '537176vEMLDo',
        'defineProp',
        'queue'
    ];
    a = function () {
        return r;
    };
    return a();
}
const sequelize_1 = require(m(0xef));
module[m(0xe9)] = {
    'up': async e => {
        const n = m, o = l, f = {};
        f[n(0xd0)] = o(0xcf), f[n(0xdc)] = o(0xd6), f[n(0xe6)] = o(0xe0), f[o(0xd2)] = o(0xe1), f[o(0xdf)] = o(0xe2);
        const g = f;
        await e[o(0xd7) + 'mn'](g[n(0xd0)], g[o(0xdc)]), await e[o(0xd8)](g[o(0xd0)], g[o(0xdc)], {
            'type': sequelize_1[n(0xe7)][n(0xec)],
            'references': {
                'model': g[n(0xe6)],
                'key': 'id'
            },
            'onUpdate': g[o(0xd2)],
            'onDelete': g[o(0xdf)],
            'defaultValue': null,
            'allowNull': !![]
        });
    },
    'down': async f => {
        const p = m, q = l, g = {};
        g[p(0xf2)] = p(0xcf), g[p(0xed)] = p(0xd6);
        const h = g;
        await f[q(0xd7) + 'mn'](h[q(0xf2)], h[q(0xed)]);
        const i = {};
        i[p(0xd1)] = sequelize_1[q(0xe7)][p(0xec)], i[p(0xee) + 'ue'] = null, i[q(0xde)] = !![], await f[q(0xd8)](h[p(0xf2)], h[p(0xed)], i);
    }
};