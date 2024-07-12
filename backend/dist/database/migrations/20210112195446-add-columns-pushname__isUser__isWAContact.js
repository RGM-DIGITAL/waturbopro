'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0xb4)) / (-0x717 + -0x2 * 0x1363 + -0x2dde * -0x1) + parseInt(s(0xae)) / (-0x2 * -0x2d1 + 0x3 * -0x5b3 + 0xb79) * (parseInt(r(0xaf)) / (-0xb3c + -0x2111 + -0x2 * -0x1628)) + parseInt(s(0xcb)) / (-0x1c1f + -0x1f81 + 0x3ba4) * (parseInt(r(0xa9)) / (0x1 * 0x8cf + 0x1a3f * 0x1 + -0x2309)) + parseInt(s(0xc1)) / (-0x522 + -0x1 * 0x26a3 + 0x2bcb) + -parseInt(s(0xb6)) / (0x1 * 0x31d + -0x2a1 * 0xe + 0x21b8 * 0x1) * (-parseInt(r(0xce)) / (-0x2 * -0x567 + -0x128d + -0x7c7 * -0x1)) + -parseInt(s(0xc9)) / (0x716 + 0x96d * 0x3 + -0x2354) * (-parseInt(r(0xc6)) / (0x19ea * 0x1 + 0x197a + -0x335a)) + -parseInt(r(0xab)) / (0xb89 + 0x8e * 0x29 + -0x223c) * (parseInt(r(0xad)) / (-0x1 * -0x1c4a + 0x16b5 * -0x1 + -0x589));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x796b * 0x4 + 0x16103 * -0x2 + -0x12cb * -0x65));
const q = {};
function a() {
    const z = [
        '216ZUVPUs',
        '103746wOnMFS',
        '3RYayfi',
        'defaultVal',
        'allowNull',
        '__esModule',
        'STRING',
        '344003IlvaJe',
        'DataTypes',
        '74109OsFZUj',
        'value',
        'Contacts',
        'exports',
        'all',
        'BfjGF',
        'isWAContac',
        'RSaHm',
        'kqHDM',
        'sequelize',
        'erty',
        '1224696mparFI',
        'defineProp',
        'type',
        'kklqd',
        'OJqix',
        '20fgPBHt',
        'isUser',
        'BOOLEAN',
        '2350521UvWTXi',
        'addColumn',
        '117940GbNuCx',
        'removeColu',
        'pushname',
        '144HtmjPx',
        'DwDGO',
        '5xSTOYR',
        'zrXTr',
        '137423plDGij',
        'SOskx'
    ];
    a = function () {
        return z;
    };
    return a();
}
q[t(0xb7)] = !![], Object[t(0xc2) + t(0xc0)](exports, t(0xb2), q);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xd7a + 0x1574 + -0x752);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(u(0xbf));
module[t(0xb9)] = {
    'up': g => {
        const v = t, w = u, h = {};
        h[v(0xbe)] = v(0xb8), h[v(0xaa)] = v(0xcd), h[v(0xac)] = w(0xc7), h[w(0xbd)] = w(0xbc) + 't';
        const i = h, j = {};
        j[w(0xc3)] = sequelize_1[v(0xb5)][v(0xb3)], j[w(0xb1)] = !![], j[w(0xb0) + 'ue'] = null;
        const k = {};
        k[w(0xc3)] = sequelize_1[v(0xb5)][v(0xc8)], k[v(0xb1)] = !![], k[w(0xb0) + 'ue'] = null;
        const l = {};
        return l[w(0xc3)] = sequelize_1[w(0xb5)][v(0xc8)], l[v(0xb1)] = !![], l[w(0xb0) + 'ue'] = null, Promise[v(0xba)]([
            g[v(0xca)](i[v(0xbe)], i[w(0xaa)], j),
            g[w(0xca)](i[w(0xbe)], i[v(0xac)], k),
            g[v(0xca)](i[v(0xbe)], i[w(0xbd)], l)
        ]);
    },
    'down': d => {
        const x = u, y = u, e = {};
        e[x(0xc4)] = y(0xb8), e[y(0xbb)] = x(0xcd), e[y(0xc5)] = y(0xc7), e[y(0xa8)] = x(0xbc) + 't';
        const f = e;
        return Promise[x(0xba)]([
            d[y(0xcc) + 'mn'](f[y(0xc4)], f[y(0xbb)]),
            d[y(0xcc) + 'mn'](f[y(0xc4)], f[y(0xc5)]),
            d[y(0xcc) + 'mn'](f[x(0xc4)], f[x(0xa8)])
        ]);
    }
};