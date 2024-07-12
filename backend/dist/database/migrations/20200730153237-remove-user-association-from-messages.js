'use strict';
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(i(0x180)) / (0x808 + -0x1194 + 0xf * 0xa3) * (parseInt(j(0x173)) / (-0x22fc * 0x1 + -0xc91 + 0x2f8f)) + parseInt(i(0x17c)) / (0xeab + -0x1b * 0x3d + -0x839 * 0x1) + -parseInt(j(0x184)) / (0xfb * 0x25 + 0x1 * -0x7c7 + -0x1c7c) + -parseInt(j(0x17d)) / (-0x1 * -0x24c5 + 0x24b7 + -0x4977) + parseInt(i(0x178)) / (-0x19dd + 0x22e + 0x77 * 0x33) + -parseInt(j(0x17b)) / (0x530 + 0x160b + 0xd9a * -0x2) + parseInt(i(0x183)) / (0x22bf + 0x1e8b + -0x4142) * (parseInt(j(0x16f)) / (-0x961 * -0x1 + -0xa78 + 0x120));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, 0x36a8e + -0x7e5ed + -0x4 * -0x263db));
const g = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x43 * -0x77 + -0x3 * -0x685 + 0xd00);
        let h = e[f];
        return h;
    }, b(c, d);
}
g[k(0x185)] = !![], Object[k(0x17f) + l(0x175)](exports, k(0x171), g);
const sequelize_1 = require(k(0x16b));
function a() {
    const q = [
        'Messages',
        '8azdDUA',
        '1316836epXucN',
        'value',
        'CASCADE',
        'XFzvU',
        'INTEGER',
        'DataTypes',
        'sequelize',
        'SET\x20NULL',
        'dHoeS',
        'addColumn',
        '11390679owQmog',
        'yNUcb',
        '__esModule',
        'VvtnR',
        '37108PmkWvi',
        'cjErq',
        'erty',
        'removeColu',
        'userId',
        '98508wtuomH',
        'JpLmB',
        'nWmqO',
        '3053246JTugtA',
        '1345044THLvux',
        '285115BcfPIU',
        'Users',
        'defineProp',
        '31scnFsH',
        'exports'
    ];
    a = function () {
        return q;
    };
    return a();
}
module[k(0x181)] = {
    'up': d => {
        const m = k, n = l, e = {};
        e[m(0x17a)] = n(0x182), e[n(0x16d)] = n(0x177);
        const f = e;
        return d[n(0x176) + 'mn'](f[m(0x17a)], f[n(0x16d)]);
    },
    'down': d => {
        const o = l, p = k, e = {};
        e[o(0x170)] = p(0x182), e[o(0x187)] = p(0x177), e[p(0x179)] = o(0x17e), e[p(0x174)] = p(0x186), e[p(0x172)] = p(0x16c);
        const f = e;
        return d[p(0x16e)](f[o(0x170)], f[o(0x187)], {
            'type': sequelize_1[o(0x16a)][p(0x188)],
            'references': {
                'model': f[o(0x179)],
                'key': 'id'
            },
            'onUpdate': f[o(0x174)],
            'onDelete': f[o(0x172)]
        });
    }
};