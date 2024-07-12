'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x665 * -0x1 + -0x8cf + 0x10a8);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const z = [
        'erty',
        'endanceAt',
        'all',
        'exports',
        'defaultVal',
        '3753470titNwR',
        'QFHdp',
        'APmpN',
        '4566ZYJGvN',
        'Tickets',
        '6365736mVHizk',
        '10NldrDX',
        'value',
        '4617448IrkVUJ',
        'lastMessag',
        '11OxaBZs',
        '__esModule',
        '693444MwDeYF',
        'eMgXJ',
        'defineProp',
        'startedAtt',
        'UGWmk',
        'allowNull',
        'cwLvq',
        'EcDHc',
        '9GIADOB',
        '2585tGlZoZ',
        'DataTypes',
        '31054QMKdQY',
        'closedAt',
        '339168lKsyWS',
        'removeColu',
        'addColumn',
        'type',
        'ijuSf',
        'eAt',
        'BIGINT',
        'nTrER',
        'sequelize'
    ];
    a = function () {
        return z;
    };
    return a();
}
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0x190)) / (0x1 * 0xd7f + -0xc5 * -0x14 + -0x1ce2) * (parseInt(s(0x176)) / (0x33 * -0x47 + 0x18 * 0x8 + 0x1 * 0xd67)) + -parseInt(s(0x178)) / (-0x43d + -0x267 + 0xd * 0x83) + -parseInt(r(0x192)) / (-0x1 * 0x1411 + -0x16e3 + 0x19 * 0x1b8) + -parseInt(r(0x174)) / (0x7e * 0x3f + 0x28 * 0x34 + 0x143 * -0x1f) * (parseInt(r(0x189)) / (0x6 * -0x33b + -0x190 + 0x16 * 0xf4)) + parseInt(s(0x186)) / (0x637 + -0x1300 + 0xcd0) + -parseInt(r(0x18b)) / (0x1 * -0x1a65 + -0x367 + 0x1dd4) * (-parseInt(s(0x19a)) / (0x19f1 + 0x1 * -0x1145 + -0x21 * 0x43)) + parseInt(s(0x18c)) / (-0x2667 + 0x1a * -0x10e + 0x41dd * 0x1) * (-parseInt(s(0x18e)) / (-0x1510 + -0x1453 + 0x296e));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xaea67 + 0x1 * 0x1f87a + 0xf188b));
const q = {};
q[t(0x18d)] = !![], Object[t(0x194) + u(0x181)](exports, u(0x191), q);
const sequelize_1 = require(t(0x180));
module[t(0x184)] = {
    'up': g => {
        const v = t, w = u, h = {};
        h[v(0x199)] = v(0x18a), h[v(0x196)] = w(0x18f) + w(0x17d), h[w(0x17c)] = w(0x195) + w(0x182), h[v(0x188)] = w(0x177);
        const i = h, j = {};
        j[v(0x17b)] = sequelize_1[v(0x175)][v(0x17e)], j[v(0x197)] = !![], j[w(0x185) + 'ue'] = null;
        const k = {};
        k[v(0x17b)] = sequelize_1[w(0x175)][w(0x17e)], k[v(0x197)] = !![], k[w(0x185) + 'ue'] = null;
        const l = {};
        return l[v(0x17b)] = sequelize_1[w(0x175)][w(0x17e)], l[v(0x197)] = !![], l[v(0x185) + 'ue'] = null, Promise[v(0x183)]([
            g[w(0x17a)](i[v(0x199)], i[w(0x196)], j),
            g[w(0x17a)](i[v(0x199)], i[v(0x17c)], k),
            g[v(0x17a)](i[v(0x199)], i[v(0x188)], l)
        ]);
    },
    'down': d => {
        const x = u, y = u, e = {};
        e[x(0x187)] = y(0x18a), e[y(0x17f)] = x(0x18f) + y(0x17d), e[x(0x198)] = y(0x195) + x(0x182), e[x(0x193)] = x(0x177);
        const f = e;
        return Promise[x(0x183)]([
            d[x(0x179) + 'mn'](f[y(0x187)], f[x(0x17f)]),
            d[x(0x179) + 'mn'](f[x(0x187)], f[y(0x198)]),
            d[x(0x179) + 'mn'](f[y(0x187)], f[x(0x193)])
        ]);
    }
};