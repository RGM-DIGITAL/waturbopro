'use strict';
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(i(0xed)) / (0x86 * -0x35 + -0x8c * 0x14 + 0x26af) + parseInt(i(0xeb)) / (0xa4 + 0x3a * 0x6a + -0x4ee * 0x5) + parseInt(j(0xe8)) / (0x9a1 + -0x1 * 0x566 + -0x1 * 0x438) + parseInt(i(0xe1)) / (-0x46 * -0x83 + 0x18f * 0x1 + -0x1 * 0x255d) + -parseInt(i(0xe5)) / (0x29 * -0xb1 + 0x4ea + 0x1774) * (parseInt(j(0xe9)) / (-0x13cd + -0x3 * 0x6da + 0x2861)) + -parseInt(j(0xde)) / (-0x2f3 + 0x9 * 0x315 + -0x18c3) + parseInt(j(0xf0)) / (0x611 * -0x4 + 0x31 * 0xad + -0x8d1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, -0x4fb9 * 0xc + 0x68867 + 0xb1aa));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x30a + -0x13 * -0x9b + -0xdaf);
        let h = e[f];
        return h;
    }, b(c, d);
}
const g = {};
function a() {
    const q = [
        'BpsCL',
        'rJyRN',
        'Messages',
        'erty',
        'INTEGER',
        'hGFvY',
        'CASCADE',
        'oSPqF',
        '2870231tpNQTs',
        'exports',
        'Contacts',
        '682300aqChTX',
        'contactId',
        'irHSz',
        '__esModule',
        '947645UgUpUU',
        'value',
        'defineProp',
        '199203vfRuVR',
        '6kZNGHQ',
        'sequelize',
        '691348RHiyHl',
        'DataTypes',
        '180149aQTPvY',
        'removeColu',
        'addColumn',
        '523776gkXMam',
        'nfdze'
    ];
    a = function () {
        return q;
    };
    return a();
}
g[k(0xe6)] = !![], Object[k(0xe7) + k(0xf5)](exports, l(0xe4), g);
const sequelize_1 = require(k(0xea));
module[k(0xdf)] = {
    'up': d => {
        const m = l, n = l, e = {};
        e[m(0xe3)] = m(0xf4), e[m(0xf2)] = n(0xe2), e[m(0xf1)] = m(0xe0), e[n(0xf3)] = m(0xdc);
        const f = e;
        return d[m(0xef)](f[n(0xe3)], f[n(0xf2)], {
            'type': sequelize_1[m(0xec)][n(0xf6)],
            'references': {
                'model': f[m(0xf1)],
                'key': 'id'
            },
            'onUpdate': f[n(0xf3)],
            'onDelete': f[n(0xf3)]
        });
    },
    'down': d => {
        const o = k, p = l, e = {};
        e[o(0xf7)] = o(0xf4), e[p(0xdd)] = o(0xe2);
        const f = e;
        return d[o(0xee) + 'mn'](f[o(0xf7)], f[p(0xdd)]);
    }
};