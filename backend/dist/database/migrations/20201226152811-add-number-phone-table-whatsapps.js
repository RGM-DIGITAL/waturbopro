'use strict';
const p = b, q = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2 * 0x823 + 0x1950 + -0x1 * 0x27e9);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0x1c2)) / (0xd2f + -0x2bf * -0x7 + -0x7 * 0x4a1) + parseInt(o(0x1ca)) / (0x1 * 0xab + 0x41b + -0x2 * 0x262) * (-parseInt(o(0x1b3)) / (0x21f7 + 0x556 * -0x5 + 0x3a3 * -0x2)) + -parseInt(n(0x1c7)) / (-0xc * -0x281 + -0xbfa * 0x3 + 0x5e6) + parseInt(o(0x1b1)) / (0x1f * -0xf1 + -0x1031 * 0x1 + 0x2d65 * 0x1) * (-parseInt(n(0x1b4)) / (-0xfdb + -0x22d2 + 0x32b3)) + -parseInt(o(0x1ad)) / (0x1ce6 + -0x1d99 * 0x1 + 0xba) * (parseInt(n(0x1c9)) / (-0x1 * 0x1091 + 0x875 * -0x3 + -0x8 * -0x53f)) + -parseInt(o(0x1ce)) / (-0xb3f + 0x135d + -0x815) + -parseInt(o(0x1c8)) / (-0x19b + -0xba9 + 0xd4e) * (-parseInt(o(0x1c5)) / (-0x343 * -0x1 + -0x1ec9 + 0x1b91 * 0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x75aca + -0x1 * -0xdbfbc + -0xc11cc));
function a() {
    const v = [
        'value',
        'vSnXT',
        '715286akBqbm',
        'Whatsapps',
        'lDuZC',
        '110EwRtGr',
        'removeColu',
        '1641580ShRVMS',
        '4207520Ggzhmb',
        '2034808dFxMpq',
        '207308OJmNVU',
        'all',
        'JSONB',
        'number',
        '5046957yTEiKy',
        'EpDkj',
        '21DBINZN',
        'sequelize',
        'exports',
        'IeUie',
        '2720155hSkzBZ',
        'DataTypes',
        '18xiVcVx',
        '6qnINug',
        'type',
        'defineProp',
        'allowNull',
        'STRING',
        'phone',
        'ppiAU',
        'defaultVal',
        '__esModule',
        'yzKhS',
        'erty',
        'addColumn'
    ];
    a = function () {
        return v;
    };
    return a();
}
const m = {};
m[p(0x1c0)] = !![], Object[q(0x1b6) + p(0x1be)](exports, p(0x1bc), m);
const sequelize_1 = require(q(0x1ae));
module[p(0x1af)] = {
    'up': f => {
        const r = p, s = q, g = {};
        g[r(0x1c4)] = s(0x1c3), g[r(0x1c1)] = s(0x1cd), g[s(0x1ba)] = s(0x1b9);
        const h = g, i = {};
        i[r(0x1b5)] = sequelize_1[s(0x1b2)][r(0x1b8)], i[r(0x1b7)] = !![], i[r(0x1bb) + 'ue'] = null;
        const j = {};
        return j[r(0x1b5)] = sequelize_1[r(0x1b2)][s(0x1cc)], j[r(0x1b7)] = !![], j[r(0x1bb) + 'ue'] = null, Promise[r(0x1cb)]([
            f[s(0x1bf)](h[s(0x1c4)], h[r(0x1c1)], i),
            f[r(0x1bf)](h[s(0x1c4)], h[r(0x1ba)], j)
        ]);
    },
    'down': d => {
        const t = q, u = p, e = {};
        e[t(0x1b0)] = u(0x1c3), e[u(0x1cf)] = u(0x1cd), e[u(0x1bd)] = u(0x1b9);
        const f = e;
        return Promise[u(0x1cb)]([d[t(0x1c6) + 'mn'](f[u(0x1b0)], f[t(0x1cf)])]);
        return Promise[u(0x1cb)]([d[u(0x1c6) + 'mn'](f[u(0x1b0)], f[t(0x1bd)])]);
    }
};