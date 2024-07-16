'use strict';
function a() {
    const x = [
        'TWLlO',
        '5389955lpJRAw',
        '5907cbvPtR',
        '227118tAQMJv',
        'allowNull',
        'autoIncrem',
        'Users',
        '987189ifRMyE',
        '234DfYWbW',
        'flvEO',
        'type',
        'ent',
        'primaryKey',
        'SET\x20NULL',
        '5030024zBrAHx',
        'CASCADE',
        'erty',
        'defineProp',
        'sequelize',
        'KqvUA',
        'cAcow',
        'STRING',
        'exports',
        'oqSjh',
        '__esModule',
        '12NEtofU',
        'value',
        'DataTypes',
        'dropTable',
        '14hBtWjY',
        'INTEGER',
        'DATE',
        'createTabl',
        '17790aXfVhn',
        '3079866LRvpcd',
        'Groups',
        '46712yFYcpH'
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
            const f = parseInt(p(0xbf)) / (-0x2b3 + -0x1 * 0x1a83 + -0x115 * -0x1b) * (-parseInt(p(0xa9)) / (-0x1d85 + 0x1de2 + 0x5b * -0x1)) + -parseInt(q(0xad)) / (0x408 + 0x1 * 0x81d + -0xc22 * 0x1) + parseInt(p(0xb4)) / (-0x4 * 0xeb + -0x42 * 0x53 + 0x1916) + parseInt(p(0xcc)) / (0x2 * 0xcb5 + 0x7e9 + -0x10a7 * 0x2) + -parseInt(q(0xc8)) / (0xa4f + -0x5 * -0x1af + 0x13 * -0xfc) * (parseInt(p(0xc3)) / (-0x226b + -0xa50 + 0x2cc2)) + -parseInt(q(0xca)) / (-0x2f * -0xb3 + 0x9 * -0x425 + 0x478) * (-parseInt(p(0xae)) / (-0x1f24 + 0xaa0 + 0x148d * 0x1)) + -parseInt(p(0xc7)) / (-0x65b * -0x1 + 0xfce + -0x161f) * (-parseInt(q(0xa8)) / (0xeda + 0x5ad * -0x5 + 0xd92));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x6fd92 + 0x88f * 0x270 + 0xef * -0x11ff));
const o = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xa62 + 0x1968 + -0xe5e);
        let h = e[f];
        return h;
    }, b(c, d);
}
o[r(0xc0)] = !![], Object[r(0xb7) + s(0xb6)](exports, s(0xbe), o);
const sequelize_1 = require(r(0xb8));
module[r(0xbc)] = {
    'up': f => {
        const t = s, u = s, g = {};
        g[t(0xb9)] = t(0xc9), g[t(0xba)] = t(0xac), g[u(0xbd)] = u(0xb5), g[t(0xcb)] = u(0xb3);
        const h = g, i = {};
        i[t(0xb0)] = sequelize_1[t(0xc1)][u(0xc4)], i[u(0xb2)] = !![], i[u(0xab) + u(0xb1)] = !![], i[t(0xaa)] = ![];
        const j = {};
        return j[u(0xb0)] = sequelize_1[u(0xc1)][t(0xbb)], j[u(0xaa)] = ![], f[t(0xc6) + 'e'](h[u(0xb9)], {
            'id': i,
            'group': j,
            'userId': {
                'type': sequelize_1[t(0xc1)][u(0xc4)],
                'references': {
                    'model': h[u(0xba)],
                    'key': 'id'
                },
                'onUpdate': h[u(0xbd)],
                'onDelete': h[u(0xcb)]
            },
            'createdAt': {
                'type': sequelize_1[t(0xc1)][t(0xc5)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[u(0xc1)][u(0xc5)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const v = r, w = s, e = {};
        e[v(0xaf)] = v(0xc9);
        const f = e;
        return d[w(0xc2)](f[w(0xaf)]);
    }
};