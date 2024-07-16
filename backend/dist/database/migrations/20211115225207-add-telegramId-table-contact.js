'use strict';
function a() {
    const x = [
        'DataTypes',
        '__esModule',
        'wOTVC',
        '424CMRINg',
        'value',
        'DyGDk',
        'ClTLQ',
        'BIGINT',
        'IFFyU',
        '3GPlCHn',
        'int',
        '4QKOyTU',
        'unique',
        'tenantId',
        '50boBfdr',
        'straint_co',
        'unique_con',
        'removeColu',
        'erty',
        'MWrhf',
        'ntact_numb',
        'telegramId',
        '2313124AfhePL',
        'PFJAl',
        '4452786FSpsBu',
        '2605805cTPnpR',
        'DsCjt',
        'defineProp',
        'all',
        'changeColu',
        'ScLPR',
        '2889369GXiosf',
        '1259542kTGkFp',
        'er_tenant',
        'exports',
        'ENAVN',
        'sequelize',
        'number',
        'traint',
        'allowNull',
        'type',
        'Contacts',
        '87871TWfiAT',
        'STRING',
        'addConstra',
        'addColumn',
        '536941ymsSCh',
        'defaultVal',
        'IOwwJ',
        'removeCons'
    ];
    a = function () {
        return x;
    };
    return a();
}
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x113)) / (0x22ff + 0x1779 + 0x67f * -0x9) + parseInt(q(0x105)) / (0x9bc + -0x13d + -0x1 * 0x87d) * (-parseInt(q(0x120)) / (0x2311 * -0x1 + -0x1 * 0x18e5 + 0x3bf9)) + -parseInt(q(0x122)) / (0x26 * -0x9e + -0x609 + 0x1d81) * (-parseInt(p(0xfe)) / (0x12e3 + 0x4a * -0x34 + -0x3d6)) + parseInt(p(0xfd)) / (-0x1fdd + -0x93c + 0x291f) + parseInt(p(0x10f)) / (-0x1e18 * 0x1 + 0x42 * 0x77 + -0xd * 0xb) * (parseInt(p(0x11a)) / (0x226a + -0x12de + -0xf84)) + -parseInt(p(0x104)) / (0xb * -0xe2 + -0x24fa + 0x2eb9) + -parseInt(p(0xf3)) / (0x3 * 0x3d7 + -0xaf8 + -0x83) * (parseInt(p(0xfb)) / (-0x2 * 0x9f + -0x1 * 0x1cd7 + 0x2 * 0xf10));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xb2b57 + -0xdb154 + 0x1fee79));
const o = {};
o[r(0x11b)] = !![], Object[s(0x100) + r(0xf7)](exports, r(0x118), o);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1f01 * -0x1 + 0x1 * -0x2275 + 0x4268);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(s(0x109));
module[r(0x107)] = {
    'up': f => {
        const t = r, u = r, g = {};
        g[t(0x108)] = t(0x10e), g[t(0x11c)] = t(0xfa), g[t(0x11f)] = u(0xf5) + u(0xf4) + u(0xf9) + u(0x106), g[u(0x115)] = t(0x10a);
        const h = g, i = {};
        i[t(0x10d)] = sequelize_1[t(0x117)][u(0x11e)], i[u(0x114) + 'ue'] = null, i[u(0x10c)] = !![];
        const j = {};
        return j[t(0x10d)] = sequelize_1[t(0x117)][u(0x110)], j[u(0x10c)] = !![], j[t(0x123)] = ![], j[t(0x114) + 'ue'] = null, Promise[u(0x101)]([
            f[u(0x112)](h[u(0x108)], h[t(0x11c)], i),
            f[u(0x116) + t(0x10b)](h[t(0x108)], h[u(0x11f)]),
            f[t(0x102) + 'mn'](h[u(0x108)], h[t(0x115)], j)
        ]);
    },
    'down': e => {
        const v = s, w = s, f = {};
        f[v(0xff)] = w(0x10e), f[v(0x103)] = v(0xfa), f[v(0x119)] = v(0x10a), f[w(0xfc)] = w(0xf2), f[v(0x11d)] = w(0x123), f[w(0xf8)] = v(0xf5) + v(0xf4) + v(0xf9) + w(0x106);
        const g = f, h = {};
        return h[w(0x10d)] = sequelize_1[w(0x117)][v(0x110)], h[v(0x10c)] = ![], h[w(0x123)] = !![], Promise[v(0x101)]([
            e[v(0xf6) + 'mn'](g[v(0xff)], g[w(0x103)]),
            e[w(0x102) + 'mn'](g[w(0xff)], g[w(0x119)], h),
            e[v(0x111) + v(0x121)](g[v(0xff)], [
                g[v(0x119)],
                g[w(0xfc)]
            ], {
                'type': g[v(0x11d)],
                'name': g[v(0xf8)]
            })
        ]);
    }
};