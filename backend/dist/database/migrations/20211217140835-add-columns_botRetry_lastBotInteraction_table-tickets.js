'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0x17f)) / (0x1bb0 + -0x192b + -0x1c * 0x17) * (parseInt(o(0x17c)) / (-0x2620 + 0x11f6 + 0x142c)) + -parseInt(o(0x178)) / (-0x76 * 0x3b + -0x1 * -0x1411 + 0x2 * 0x392) + -parseInt(o(0x175)) / (0x290 * -0xc + 0x1 * 0x6bb + -0x1 * -0x1809) + parseInt(o(0x190)) / (0x48c + -0x3d2 * 0x2 + 0x1 * 0x31d) + parseInt(n(0x173)) / (0x244f + 0x1 * 0x281 + -0x26ca) * (parseInt(o(0x18f)) / (0x1d7f + -0x8a7 * 0x3 + -0x383)) + parseInt(o(0x187)) / (0xa2b + -0x26cd + 0xe55 * 0x2) + parseInt(n(0x171)) / (-0x1 * -0x360 + -0xc * -0x32d + 0x49b * -0x9) * (parseInt(o(0x186)) / (0x1927 + 0x48b * -0x7 + 0x2 * 0x358));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x4f * 0x1c12 + 0x29023 + -0x10a9 * 0x65));
const m = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * 0x1816 + 0x2 * -0x62 + -0x1 * 0x15e1);
        let h = e[f];
        return h;
    }, b(c, d);
}
m[p(0x17a)] = !![], Object[p(0x177) + p(0x17d)](exports, p(0x189), m);
const sequelize_1 = require(p(0x185));
function a() {
    const v = [
        'addColumn',
        '76022jImmVH',
        'erty',
        'allowNull',
        '2fXYCRc',
        'knsjC',
        'cXwSd',
        'all',
        'dBFil',
        'ctionBot',
        'sequelize',
        '974150XCVwQX',
        '178808SkplRt',
        'INTEGER',
        '__esModule',
        'DataTypes',
        'DATE',
        'defaultVal',
        'type',
        'removeColu',
        '819eOSevs',
        '652235pzeAbX',
        'exports',
        'Tickets',
        'lastIntera',
        '45LXWCpF',
        'gvkXt',
        '4290rMvFng',
        'botRetries',
        '43924oMTkyN',
        'TiYeO',
        'defineProp',
        '994875PRrTXa',
        'LLkHA',
        'value'
    ];
    a = function () {
        return v;
    };
    return a();
}
module[q(0x191)] = {
    'up': f => {
        const r = q, s = q, g = {};
        g[r(0x180)] = r(0x192), g[s(0x172)] = s(0x174), g[s(0x181)] = s(0x193) + s(0x184);
        const h = g, i = {};
        i[s(0x18d)] = sequelize_1[r(0x18a)][s(0x188)], i[s(0x17e)] = ![], i[s(0x18c) + 'ue'] = 0x0;
        const j = {};
        return j[s(0x18d)] = sequelize_1[s(0x18a)][s(0x18b)], j[s(0x17e)] = !![], j[r(0x18c) + 'ue'] = null, Promise[s(0x182)]([
            f[s(0x17b)](h[s(0x180)], h[r(0x172)], i),
            f[s(0x17b)](h[r(0x180)], h[r(0x181)], j)
        ]);
    },
    'down': d => {
        const t = q, u = q, e = {};
        e[t(0x179)] = t(0x192), e[u(0x183)] = u(0x174), e[u(0x176)] = t(0x193) + u(0x184);
        const f = e;
        return Promise[t(0x182)]([
            d[t(0x18e) + 'mn'](f[u(0x179)], f[u(0x183)]),
            d[u(0x18e) + 'mn'](f[t(0x179)], f[u(0x176)])
        ]);
    }
};