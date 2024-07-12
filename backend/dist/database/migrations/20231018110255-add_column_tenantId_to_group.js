'use strict';
const m = b, n = b;
function a() {
    const s = [
        'pEXyp',
        'restrict',
        'jIWLj',
        'type',
        'qQNJf',
        '9kRXIFE',
        '4091610vddcne',
        'CASCADE',
        'sequelize',
        'ePqJK',
        '2997071ctrimc',
        'value',
        '1441636LYTtMr',
        '357749SPXcTo',
        'WpkWZ',
        'yQcLP',
        '6AdtdWM',
        '1394815fdTxHy',
        'exports',
        'Tenants',
        'allowNull',
        'BOOLEAN',
        'KSdYk',
        'defaultVal',
        '24KPntRq',
        'defineProp',
        'addColumn',
        'DataTypes',
        'tenantId',
        'INTEGER',
        '34302EyyPuz',
        '__esModule',
        'gaAEi',
        'IPsHy',
        'describeTa',
        '22SUlvUo',
        'erty',
        'Groups',
        '771720yOZxxV',
        'isActive',
        'ble',
        'removeColu'
    ];
    a = function () {
        return s;
    };
    return a();
}
(function (d, e) {
    const k = b, l = b, f = d();
    while (!![]) {
        try {
            const g = parseInt(k(0x215)) / (-0xf22 + -0x32 * -0x1b + -0x65 * -0x19) * (-parseInt(k(0x210)) / (-0x15 * 0x1 + -0xf61 + 0xf78)) + parseInt(k(0x218)) / (0x2d4 + 0x1dd2 + 0x22d * -0xf) + parseInt(l(0x1fe)) / (-0x1e91 + -0x2f3 * -0xa + -0x9 * -0x1f) + -parseInt(k(0x203)) / (0x2270 + 0xcc1 * -0x3 + 0x3d8) * (-parseInt(l(0x202)) / (-0x27 * 0x15 + -0x25 * -0x7c + -0xeb3)) + parseInt(l(0x1ff)) / (0x18c4 + -0x1 * 0xf8f + -0x5e * 0x19) * (-parseInt(k(0x20a)) / (0x6 * -0xc6 + -0x15 * 0xd + 0x5bd)) + parseInt(k(0x1f7)) / (-0xe3b + 0xf * 0x1d + -0xc91 * -0x1) * (-parseInt(k(0x1f8)) / (-0x3 * -0x668 + -0x1a31 + 0x703)) + parseInt(l(0x1fc)) / (0x811 * -0x2 + -0xc92 + 0x1cbf);
            if (g === e)
                break;
            else
                f['push'](f['shift']());
        } catch (h) {
            f['push'](f['shift']());
        }
    }
}(a, -0xfbe8 + 0x1 * 0x6bba9 + -0x2402c));
const c = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x5 * -0x10b + -0x1ad + -0x8 * -0x11b);
        let h = e[f];
        return h;
    }, b(c, d);
}
c[m(0x1fd)] = !![], Object[m(0x20b) + m(0x216)](exports, n(0x211), c);
const sequelize_1 = require(n(0x1fa));
module[m(0x204)] = {
    'up': async f => {
        const o = n, p = n, g = {};
        g[o(0x1f6)] = p(0x217), g[o(0x1fb)] = o(0x20e), g[p(0x208)] = p(0x205), g[p(0x212)] = o(0x1f9), g[p(0x21c)] = p(0x21d), g[p(0x200)] = p(0x219);
        const h = g, i = await f[p(0x214) + o(0x21a)](h[o(0x1f6)]);
        (!i || !i[h[o(0x1fb)]]) && await f[o(0x20c)](h[o(0x1f6)], h[p(0x1fb)], {
            'type': sequelize_1[o(0x20d)][p(0x20f)],
            'references': {
                'model': h[p(0x208)],
                'key': 'id'
            },
            'onUpdate': h[o(0x212)],
            'onDelete': h[o(0x21c)],
            'allowNull': ![],
            'defaultValue': 0x1
        });
        if (!i || !i[h[o(0x200)]]) {
            const j = {};
            j[o(0x1f5)] = sequelize_1[o(0x20d)][p(0x207)], j[p(0x206)] = ![], j[p(0x209) + 'ue'] = !![], await f[p(0x20c)](h[p(0x1f6)], h[p(0x200)], j);
        }
    },
    'down': async e => {
        const q = m, r = n, f = {};
        f[q(0x213)] = q(0x217), f[r(0x201)] = r(0x20e), f[q(0x1f4)] = q(0x219);
        const g = f;
        await e[r(0x21b) + 'mn'](g[r(0x213)], g[r(0x201)]), await e[r(0x21b) + 'mn'](g[q(0x213)], g[q(0x1f4)]);
    }
};