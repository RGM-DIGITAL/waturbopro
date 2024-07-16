'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0x176)) / (0xab5 + 0x942 + -0x13f6) * (parseInt(l(0x174)) / (-0x5a * -0x11 + 0x1fd2 + 0x2b3 * -0xe)) + parseInt(m(0x173)) / (-0x1489 * -0x1 + -0x1 * 0x188c + 0x406) * (parseInt(l(0x18e)) / (-0xde8 + -0x24e * -0xf + -0x14a6)) + parseInt(l(0x18a)) / (-0x1446 + -0x2 * -0x1336 + -0x1221) * (parseInt(m(0x188)) / (-0x38f * 0xa + -0x3d * -0x37 + 0x1681 * 0x1)) + -parseInt(l(0x171)) / (0x1 * 0x1c73 + -0xbcc + -0x10a0) * (parseInt(m(0x182)) / (0x303 * 0x6 + -0xc71 + -0x599 * 0x1)) + -parseInt(l(0x17c)) / (0xd17 + 0x35b * -0x3 + -0x2fd) * (parseInt(m(0x17f)) / (-0xda2 + 0x381 * 0xb + 0x18df * -0x1)) + parseInt(l(0x189)) / (-0x1 * 0x60d + -0x9 * -0x196 + -0x82e) + -parseInt(l(0x181)) / (-0x1 * 0x8b3 + 0xa6b + 0x4 * -0x6b);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x17a90f + -0x75737 * -0x3 + -0x6 * -0x2b4e7));
function a() {
    const t = [
        'DataTypes',
        'literal',
        'defineProp',
        'all',
        '2367HiQZfr',
        'erty',
        'gen_random',
        '15670XfwAML',
        'changeColu',
        '4040100MVxizm',
        '8ugzQoI',
        'ApiConfigs',
        'bUlTK',
        'Sequelize',
        'sequelize',
        'YHqIf',
        '977538TmQhBT',
        '2793857zGvaLX',
        '10YgmKQe',
        'value',
        '_uuid()',
        'UUID',
        '13636bpwtyu',
        '__esModule',
        '1415771KhvOTD',
        'exports',
        '357GzyXeB',
        '2uNPsTs',
        'fGHeA',
        '922473GzFbKx',
        'yIVYn'
    ];
    a = function () {
        return t;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x52a + -0x1c * -0x11b + 0x22ae * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[n(0x18b)] = !![], Object[n(0x17a) + o(0x17d)](exports, o(0x170), k);
const sequelize_1 = require(n(0x186));
module[o(0x172)] = {
    'up': d => {
        const p = n, q = n, e = {};
        e[p(0x177)] = q(0x183), e[q(0x187)] = p(0x17e) + q(0x18c);
        const f = e;
        return Promise[q(0x17b)]([d[q(0x180) + 'mn'](f[p(0x177)], 'id', {
                'allowNull': ![],
                'primaryKey': !![],
                'type': sequelize_1[q(0x178)][p(0x18d)],
                'defaultValue': sequelize_1[q(0x185)][p(0x179)](f[p(0x187)])
            })]);
    },
    'down': d => {
        const r = o, s = n, e = {};
        e[r(0x184)] = s(0x183), e[r(0x175)] = s(0x17e) + r(0x18c);
        const f = e;
        return Promise[s(0x17b)]([d[r(0x180) + 'mn'](f[s(0x184)], 'id', {
                'allowNull': ![],
                'primaryKey': !![],
                'type': sequelize_1[r(0x178)][r(0x18d)],
                'defaultValue': sequelize_1[s(0x185)][r(0x179)](f[r(0x175)])
            })]);
    }
};