'use strict';
const t = b, u = b;
function a() {
    const z = [
        '687DUKiDc',
        'BOOLEAN',
        '8fVTSJb',
        'all',
        'ZVFTT',
        'orqvT',
        'xlIhd',
        '1001182zqphGr',
        'value',
        '8552457wMKmFv',
        'Users',
        '464565JObBXb',
        'isOnline',
        'DATE',
        'jkZgo',
        '__esModule',
        'TRoTz',
        '503000SmHPSv',
        'exports',
        'defaultVal',
        'sequelize',
        'DataTypes',
        'lastLogout',
        '766txDdkJ',
        '3031344PmRYtr',
        '3635598dRwRbG',
        'erty',
        'CQDcr',
        'addColumn',
        'removeColu',
        'Mokbs',
        'defineProp',
        'lastLogin',
        'SlDvo',
        'type'
    ];
    a = function () {
        return z;
    };
    return a();
}
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0xce)) / (0x14 * 0x8a + -0x6 * -0x48 + -0xc77) + -parseInt(s(0xd4)) / (0x5 * -0x2bd + 0x6fa + 0x1 * 0x6b9) * (parseInt(r(0xbd)) / (-0x1 * 0x3b3 + -0x14e2 + 0x1898)) + parseInt(s(0xbf)) / (0x1b4e + -0x6 * 0x33d + -0x1f7 * 0x4) * (-parseInt(s(0xc8)) / (0xf2e + -0x2063 + 0x113a)) + -parseInt(r(0xb3)) / (0x554 + 0x285 * 0x5 + -0x11e7) + parseInt(r(0xc4)) / (-0xe * 0x18a + 0xfea + 0x5a9) + -parseInt(s(0xb2)) / (-0x19 * 0x42 + 0x3bc + -0x4e * -0x9) + parseInt(s(0xc6)) / (0x17b4 + 0x7 * 0x3af + -0x3174);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * -0x8ae4d + 0x3791e + -0x6ff70 * 0x1));
const q = {};
q[t(0xc5)] = !![], Object[u(0xb9) + u(0xb4)](exports, u(0xcc), q);
const sequelize_1 = require(t(0xd1));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x17 * -0x197 + -0x107f + -0x1360);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[t(0xcf)] = {
    'up': g => {
        const v = t, w = u, h = {};
        h[v(0xc3)] = v(0xc7), h[v(0xbb)] = v(0xba), h[v(0xc2)] = v(0xd3), h[v(0xb5)] = v(0xc9);
        const i = h, j = {};
        j[v(0xbc)] = sequelize_1[v(0xd2)][w(0xca)], j[w(0xd0) + 'ue'] = null;
        const k = {};
        k[v(0xbc)] = sequelize_1[w(0xd2)][v(0xca)], k[w(0xd0) + 'ue'] = null;
        const l = {};
        return l[w(0xbc)] = sequelize_1[w(0xd2)][v(0xbe)], l[w(0xd0) + 'ue'] = ![], Promise[v(0xc0)]([
            g[v(0xb6)](i[v(0xc3)], i[v(0xbb)], j),
            g[w(0xb6)](i[w(0xc3)], i[w(0xc2)], k),
            g[w(0xb6)](i[w(0xc3)], i[w(0xb5)], l)
        ]);
    },
    'down': d => {
        const x = t, y = u, e = {};
        e[x(0xc1)] = x(0xc7), e[y(0xcd)] = x(0xba), e[x(0xcb)] = x(0xd3), e[y(0xb8)] = y(0xc9);
        const f = e;
        return Promise[y(0xc0)]([
            d[x(0xb7) + 'mn'](f[y(0xc1)], f[y(0xcd)]),
            d[y(0xb7) + 'mn'](f[y(0xc1)], f[y(0xcb)]),
            d[y(0xb7) + 'mn'](f[y(0xc1)], f[x(0xb8)])
        ]);
    }
};