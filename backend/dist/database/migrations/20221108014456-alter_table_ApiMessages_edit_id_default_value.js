'use strict';
function a() {
    const t = [
        '3veTMCi',
        '1hKZbYp',
        '_uuid()',
        '891110SGbGdm',
        'HZPnE',
        '6001836JcqrNt',
        'literal',
        '919008yOlsOI',
        'UUID',
        '12887220ZzFAaN',
        'all',
        'ApiMessage',
        '5207052FYwgwA',
        'sequelize',
        'WOFWR',
        '2193415miGcnv',
        '1997162EFOcZK',
        'exports',
        'changeColu',
        'whFGp',
        'Sequelize',
        'DataTypes',
        '32WJxOiC',
        'value',
        'sZpEB',
        'defineProp',
        'gen_random',
        '__esModule',
        'erty'
    ];
    a = function () {
        return t;
    };
    return a();
}
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0x12f)) / (-0x4ac * 0x1 + -0x1210 + 0x16bd) * (-parseInt(m(0x13e)) / (0x3 * -0x5db + -0xf * 0x22 + -0x1391 * -0x1)) + parseInt(m(0x12e)) / (-0x1d57 * -0x1 + -0x13ec + -0x968) * (-parseInt(m(0x13a)) / (0x1 * 0x100f + 0x2b * -0xba + 0x511 * 0x3)) + -parseInt(l(0x131)) / (0x463 * -0x4 + -0x11 * 0x1b + 0x135c) + parseInt(l(0x133)) / (0x1355 + -0x1444 + -0xf5 * -0x1) + -parseInt(m(0x13d)) / (-0x5 * 0x3fd + 0x1eff + 0x1 * -0xb07) * (-parseInt(l(0x144)) / (0x39a + -0x259c + -0x2 * -0x1105)) + -parseInt(l(0x135)) / (0x3fd * 0x7 + -0x5ab * -0x4 + 0x59e * -0x9) + parseInt(m(0x137)) / (0x9f1 + 0xf50 + 0x1937 * -0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x164d2c + -0x281 * -0x37 + 0x247037));
const k = {};
k[n(0x145)] = !![], Object[n(0x147) + n(0x12d)](exports, o(0x149), k);
const sequelize_1 = require(n(0x13b));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1513 * 0x1 + -0xe53 + 0x3 * 0xc31);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[n(0x13f)] = {
    'up': d => {
        const p = o, q = n, e = {};
        e[p(0x141)] = q(0x139) + 's', e[p(0x132)] = q(0x148) + p(0x130);
        const f = e;
        return Promise[q(0x138)]([d[p(0x140) + 'mn'](f[q(0x141)], 'id', {
                'allowNull': ![],
                'primaryKey': !![],
                'type': sequelize_1[p(0x143)][q(0x136)],
                'defaultValue': sequelize_1[p(0x142)][p(0x134)](f[q(0x132)])
            })]);
    },
    'down': d => {
        const r = o, s = n, e = {};
        e[r(0x13c)] = s(0x139) + 's', e[r(0x146)] = s(0x148) + s(0x130);
        const f = e;
        return Promise[r(0x138)]([d[r(0x140) + 'mn'](f[s(0x13c)], 'id', {
                'allowNull': ![],
                'primaryKey': !![],
                'type': sequelize_1[s(0x143)][r(0x136)],
                'defaultValue': sequelize_1[s(0x142)][r(0x134)](f[r(0x146)])
            })]);
    }
};