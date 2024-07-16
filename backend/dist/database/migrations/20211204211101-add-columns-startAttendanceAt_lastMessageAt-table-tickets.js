'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0x114)) / (0x154f + 0x155 * -0x19 + -0x25 * -0x53) * (-parseInt(s(0x10f)) / (0x7c0 + -0x1379 + 0xbbb)) + -parseInt(s(0x121)) / (-0x2 * 0x53f + 0x10aa + 0x53 * -0x13) * (parseInt(s(0x130)) / (0x1c16 + 0x7 * -0x1d5 + -0xf3f)) + parseInt(s(0x10e)) / (-0x80 + -0x1ab + 0xe * 0x28) * (parseInt(s(0x12f)) / (0x25ef + -0x130d + -0x11c * 0x11)) + -parseInt(s(0x112)) / (-0x3 * -0x183 + 0x14f8 + 0x3 * -0x87e) + parseInt(s(0x117)) / (-0x1522 + -0x2551 * 0x1 + 0x3a7b) * (-parseInt(s(0x128)) / (-0x22e8 * 0x1 + 0x1ea5 + 0xb * 0x64)) + parseInt(r(0x10c)) / (-0xbd7 + 0xd6 * -0x4 + 0xf39) * (-parseInt(s(0x11d)) / (-0x2ff + 0x40f * 0x5 + -0x1141)) + parseInt(s(0x115)) / (-0x1 * 0x69d + 0x2b3 * -0xe + 0x3 * 0xed1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1f2 * 0x184 + -0x113f4e + -0x1 * -0x1e87ad));
function a() {
    const z = [
        'EgtRj',
        '8JCbvLl',
        'type',
        'value',
        'pvWqC',
        'defaultVal',
        'allowNull',
        '11LTpBZU',
        'Tickets',
        'all',
        'DataTypes',
        '2527392JBNOqb',
        'erty',
        'defineProp',
        'eQvuj',
        'lastMessag',
        'closedAt',
        'addColumn',
        '4417587sAfBXb',
        'SbmNr',
        'ucONb',
        'BIGINT',
        'sequelize',
        'removeColu',
        'eAt',
        '66otKIUa',
        '4rmconp',
        'startedAtt',
        'endanceAt',
        'SYrZK',
        '13142990tnLvUY',
        'exports',
        '492850HXMwNr',
        '6YWRjgT',
        '__esModule',
        'nwtKG',
        '8061060pEkcZR',
        'IUGUo',
        '175103dfAnDe',
        '47009952wZwvEU'
    ];
    a = function () {
        return z;
    };
    return a();
}
const q = {};
q[t(0x119)] = !![], Object[u(0x123) + u(0x122)](exports, t(0x110), q);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1088 * -0x2 + 0x2d7 * -0x4 + 0x3 * 0xf27);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(t(0x12c));
module[u(0x10d)] = {
    'up': g => {
        const v = t, w = u, h = {};
        h[v(0x111)] = w(0x11e), h[w(0x10b)] = w(0x125) + w(0x12e), h[w(0x12a)] = v(0x109) + v(0x10a), h[v(0x116)] = w(0x126);
        const i = h, j = {};
        j[v(0x118)] = sequelize_1[v(0x120)][v(0x12b)], j[w(0x11c)] = !![], j[w(0x11b) + 'ue'] = null;
        const k = {};
        k[w(0x118)] = sequelize_1[w(0x120)][w(0x12b)], k[w(0x11c)] = !![], k[v(0x11b) + 'ue'] = null;
        const l = {};
        return l[v(0x118)] = sequelize_1[v(0x120)][v(0x12b)], l[v(0x11c)] = !![], l[w(0x11b) + 'ue'] = null, Promise[w(0x11f)]([
            g[w(0x127)](i[w(0x111)], i[v(0x10b)], j),
            g[v(0x127)](i[w(0x111)], i[w(0x12a)], k),
            g[v(0x127)](i[w(0x111)], i[w(0x116)], l)
        ]);
    },
    'down': d => {
        const x = u, y = u, e = {};
        e[x(0x129)] = x(0x11e), e[x(0x11a)] = x(0x125) + y(0x12e), e[x(0x113)] = y(0x109) + x(0x10a), e[y(0x124)] = y(0x126);
        const f = e;
        return Promise[x(0x11f)]([
            d[x(0x12d) + 'mn'](f[x(0x129)], f[y(0x11a)]),
            d[x(0x12d) + 'mn'](f[y(0x129)], f[x(0x113)]),
            d[x(0x12d) + 'mn'](f[x(0x129)], f[x(0x124)])
        ]);
    }
};