'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0x152)) / (-0x2 * -0x25 + -0xd2b * 0x1 + -0x61 * -0x22) * (parseInt(s(0x14d)) / (0x13fd + 0x1 * -0x1011 + -0x3ea)) + -parseInt(r(0x14a)) / (-0xb5e + -0x25 * -0x4b + 0x8a) + parseInt(s(0x14f)) / (-0x9b5 * 0x2 + -0x20eb * -0x1 + 0x3 * -0x47f) + -parseInt(s(0x144)) / (-0x130c + 0x25d2 + 0x1 * -0x12c1) * (parseInt(r(0x13a)) / (-0x4 * -0x5d7 + 0x1d * -0xd5 + -0x1d * -0x7)) + -parseInt(r(0x149)) / (0xb * -0x23c + 0x4bc + 0x13df) + -parseInt(r(0x133)) / (0x65b + -0x1bfc + 0x15a9) * (-parseInt(r(0x132)) / (0x1eb4 + -0x20e7 + 0x4 * 0x8f)) + parseInt(s(0x155)) / (0x1121 + 0x17b8 + 0x151 * -0x1f);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x7489b * -0x1 + -0xa02 * -0x2a5 + -0x1318f2));
const q = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xb7 + -0x15c7 + 0x1641);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const z = [
        'YorAP',
        '1741734vRMrsh',
        '8CtilEk',
        'DataTypes',
        'utwCu',
        'pushname',
        'addColumn',
        'BOOLEAN',
        'xuQWP',
        '2796weGFeb',
        'STRING',
        'YUurD',
        'isUser',
        'type',
        'removeColu',
        'all',
        'value',
        'defineProp',
        'exports',
        '3145zECHOf',
        'NNUrI',
        'isWAContac',
        'ekKhb',
        'erty',
        '8932756sSXHxL',
        '3195807stBDli',
        'defaultVal',
        'allowNull',
        '103578CMJrSJ',
        '__esModule',
        '6194460APkyyv',
        'yeDrp',
        'EGEbV',
        '1mpVYDm',
        'Contacts',
        'sequelize',
        '18008040nQoHfP'
    ];
    a = function () {
        return z;
    };
    return a();
}
q[t(0x141)] = !![], Object[u(0x142) + u(0x148)](exports, t(0x14e), q);
const sequelize_1 = require(u(0x154));
module[u(0x143)] = {
    'up': g => {
        const v = u, w = u, h = {};
        h[v(0x139)] = v(0x153), h[w(0x145)] = w(0x136), h[v(0x151)] = w(0x13d), h[v(0x135)] = v(0x146) + 't';
        const i = h, j = {};
        j[w(0x13e)] = sequelize_1[w(0x134)][v(0x13b)], j[w(0x14c)] = !![], j[v(0x14b) + 'ue'] = null;
        const k = {};
        k[w(0x13e)] = sequelize_1[v(0x134)][w(0x138)], k[v(0x14c)] = !![], k[v(0x14b) + 'ue'] = null;
        const l = {};
        return l[v(0x13e)] = sequelize_1[v(0x134)][w(0x138)], l[v(0x14c)] = !![], l[w(0x14b) + 'ue'] = null, Promise[w(0x140)]([
            g[v(0x137)](i[w(0x139)], i[w(0x145)], j),
            g[v(0x137)](i[v(0x139)], i[v(0x151)], k),
            g[v(0x137)](i[w(0x139)], i[v(0x135)], l)
        ]);
    },
    'down': d => {
        const x = u, y = t, e = {};
        e[x(0x13c)] = x(0x153), e[x(0x150)] = x(0x136), e[x(0x147)] = x(0x13d), e[y(0x131)] = y(0x146) + 't';
        const f = e;
        return Promise[y(0x140)]([
            d[x(0x13f) + 'mn'](f[y(0x13c)], f[x(0x150)]),
            d[x(0x13f) + 'mn'](f[y(0x13c)], f[y(0x147)]),
            d[y(0x13f) + 'mn'](f[x(0x13c)], f[x(0x131)])
        ]);
    }
};