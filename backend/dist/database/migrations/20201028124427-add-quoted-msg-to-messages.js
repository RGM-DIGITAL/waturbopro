'use strict';
const k = b, l = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1d16 + -0x1 * -0x407 + 0x19ef);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(i(0xe5)) / (0x2 * 0x118e + -0xbff + -0x66 * 0x3a) + -parseInt(j(0xf8)) / (0x17 * 0x6e + -0xb * 0x13f + 0x3d5) + -parseInt(i(0xe0)) / (-0xab7 * 0x1 + -0x3 * 0x661 + 0x1ddd) + -parseInt(i(0xfa)) / (0x81 * -0x2f + 0xf0b + 0x8a8) * (parseInt(i(0xed)) / (-0x10a1 + 0x39 * 0x40 + -0x133 * -0x2)) + parseInt(j(0xec)) / (-0xd10 + -0xe2f + 0x1b45) * (parseInt(i(0xef)) / (0x25d7 + 0xca7 + -0x3277)) + -parseInt(j(0xe8)) / (-0xd * 0x17b + -0x1ef * 0xa + 0x269d) * (parseInt(i(0xe7)) / (0x175b + 0x2 + -0x1754)) + parseInt(j(0xfc)) / (-0x124 * 0x11 + 0x32 * -0x7f + 0x26 * 0x12a) * (parseInt(i(0xf6)) / (0x1 * 0x1609 + 0xe * 0x3f + -0x65c * 0x4));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * -0x79889 + -0x25a6 + 0xe4a9b));
function a() {
    const q = [
        'XKLKN',
        '8243390jnYlAl',
        'DataTypes',
        'addColumn',
        '418326qPhozM',
        'quotedMsgI',
        'Messages',
        'CASCADE',
        'GKMyu',
        '548022LASgDl',
        'removeColu',
        '9HZyKJu',
        '3757736HddIvJ',
        'erty',
        'SET\x20NULL',
        'sequelize',
        '6nrtoXa',
        '864935NcJjms',
        'STRING',
        '3944633lcWCkp',
        'UzrIC',
        'TKxMA',
        '__esModule',
        'defineProp',
        'tZzaj',
        'ZnUgk',
        '11vytolB',
        'exports',
        '757192CgUnKd',
        'value',
        '12acqTYe'
    ];
    a = function () {
        return q;
    };
    return a();
}
const g = {};
g[k(0xf9)] = !![], Object[k(0xf3) + k(0xe9)](exports, k(0xf2), g);
const sequelize_1 = require(k(0xeb));
module[k(0xf7)] = {
    'up': d => {
        const m = k, n = k, e = {};
        e[m(0xf1)] = n(0xe2), e[m(0xf4)] = m(0xe1) + 'd', e[m(0xfb)] = n(0xe3), e[n(0xf5)] = n(0xea);
        const f = e;
        return d[n(0xfe)](f[m(0xf1)], f[n(0xf4)], {
            'type': sequelize_1[m(0xfd)][m(0xee)],
            'references': {
                'model': f[m(0xf1)],
                'key': 'id'
            },
            'onUpdate': f[n(0xfb)],
            'onDelete': f[n(0xf5)]
        });
    },
    'down': d => {
        const o = k, p = k, e = {};
        e[o(0xe4)] = p(0xe2), e[o(0xf0)] = p(0xe1) + 'd';
        const f = e;
        return d[o(0xe6) + 'mn'](f[o(0xe4)], f[o(0xf0)]);
    }
};