'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0xc6)) / (-0x1 * 0x12e5 + -0x13 * -0x153 + -0x1 * 0x643) + -parseInt(s(0xb8)) / (-0xb9 * 0x24 + 0x1e5c + 0x1e * -0x25) * (-parseInt(s(0xbb)) / (0x1016 + -0x56 * 0x26 + -0x34f)) + parseInt(s(0xcc)) / (-0x1a55 + -0x852 + 0x22ab) + -parseInt(s(0xbe)) / (-0x10a7 + 0x1 * 0x1565 + -0x4b9) + parseInt(s(0xca)) / (-0x1 * 0x70b + -0xa94 + 0x11a5) + parseInt(s(0xbc)) / (0x1927 + -0x1b * -0x8d + -0x27ff) + parseInt(s(0xc8)) / (0x101f + -0x4f9 * -0x1 + 0x1 * -0x1510) * (-parseInt(r(0xc5)) / (-0x1bd7 + -0x1435 + 0x3015));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x213f0 + -0xe782 + -0x137b3 * -0x4));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xbaa + 0x4a * -0x73 + -0x9 * -0x279);
        let h = e[f];
        return h;
    }, b(c, d);
}
const q = {};
function a() {
    const z = [
        'type',
        'exports',
        '__esModule',
        '359242RrHZjO',
        'erty',
        'BOOLEAN',
        '3wFHBVj',
        '501942CodTJB',
        'DATE',
        '580940RwzMpJ',
        'nKYWV',
        'addColumn',
        'defineProp',
        'value',
        'lastLogin',
        'DmdLu',
        '1805598bwRvfk',
        '159864RBbgWP',
        'ZdUdC',
        '8BsLjnY',
        'lastLogout',
        '1377756AvkRdu',
        'kByAz',
        '477836OHiXoV',
        'sequelize',
        'removeColu',
        'all',
        'dyHQz',
        'IdLgp',
        'defaultVal',
        'hlLYZ',
        'qPngO',
        'DataTypes',
        'Users',
        'isOnline'
    ];
    a = function () {
        return z;
    };
    return a();
}
q[t(0xc2)] = !![], Object[u(0xc1) + u(0xb9)](exports, t(0xb7), q);
const sequelize_1 = require(t(0xcd));
module[u(0xb6)] = {
    'up': g => {
        const v = t, w = u, h = {};
        h[v(0xbf)] = v(0xb3), h[w(0xcb)] = w(0xc3), h[v(0xad)] = w(0xc9), h[v(0xc7)] = v(0xb4);
        const i = h, j = {};
        j[v(0xb5)] = sequelize_1[w(0xb2)][v(0xbd)], j[w(0xaf) + 'ue'] = null;
        const k = {};
        k[v(0xb5)] = sequelize_1[w(0xb2)][w(0xbd)], k[v(0xaf) + 'ue'] = null;
        const l = {};
        return l[w(0xb5)] = sequelize_1[w(0xb2)][v(0xba)], l[w(0xaf) + 'ue'] = ![], Promise[w(0xcf)]([
            g[v(0xc0)](i[v(0xbf)], i[w(0xcb)], j),
            g[w(0xc0)](i[v(0xbf)], i[v(0xad)], k),
            g[v(0xc0)](i[w(0xbf)], i[w(0xc7)], l)
        ]);
    },
    'down': d => {
        const x = u, y = t, e = {};
        e[x(0xb0)] = x(0xb3), e[x(0xc4)] = x(0xc3), e[x(0xb1)] = y(0xc9), e[y(0xae)] = x(0xb4);
        const f = e;
        return Promise[x(0xcf)]([
            d[x(0xce) + 'mn'](f[y(0xb0)], f[y(0xc4)]),
            d[y(0xce) + 'mn'](f[y(0xb0)], f[x(0xb1)]),
            d[x(0xce) + 'mn'](f[y(0xb0)], f[x(0xae)])
        ]);
    }
};