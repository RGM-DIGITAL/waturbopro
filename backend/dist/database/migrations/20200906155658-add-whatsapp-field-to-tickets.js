'use strict';
const k = b, l = b;
function a() {
    const q = [
        'WqMEN',
        'erty',
        'LehUF',
        '__esModule',
        'CASCADE',
        '60055LIUFWl',
        'Tickets',
        'NSVaC',
        'SET\x20NULL',
        '9830emICrR',
        'addColumn',
        '45QXbEGu',
        '270OQiSio',
        '741896aYixEZ',
        'removeColu',
        'VjMjp',
        'whatsappId',
        'DataTypes',
        'ipGOz',
        '1091168APCPnJ',
        '498556mbEkqw',
        'value',
        'Whatsapps',
        '226717zQoMrr',
        '234843CpXHhL',
        '3UyQqzf',
        'sequelize',
        'exports',
        'fthdF',
        '275CaODNh',
        'BABSZ',
        'INTEGER',
        'defineProp'
    ];
    a = function () {
        return q;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * -0x25f + 0x106 * -0x7 + 0x3ca * 0x3);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(i(0x1ed)) / (-0x1290 + 0x301 * -0x1 + 0x1592) + parseInt(i(0x1ea)) / (0x3b * 0x26 + -0x2ad * -0x1 + -0xb6d) * (-parseInt(i(0x1ef)) / (-0x1b0d + 0x2253 + -0x743)) + parseInt(j(0x1e9)) / (-0xbe8 + 0x1 * -0x172a + 0x118b * 0x2) + parseInt(i(0x1db)) / (-0x10d + 0x8da + 0x18 * -0x53) * (parseInt(j(0x1e2)) / (0x15f * -0xf + 0x4 * 0x587 + -0x185)) + parseInt(i(0x1ee)) / (0x1 * 0x22f7 + -0xfe9 + -0x1307) + parseInt(i(0x1e3)) / (-0x18ae + -0x11d * -0x3 + 0x1 * 0x155f) * (-parseInt(i(0x1e1)) / (0x197a + -0x19ee + -0x7d * -0x1)) + parseInt(j(0x1df)) / (0x1 * 0x30e + 0x132f + -0x1633 * 0x1) * (-parseInt(j(0x1f3)) / (-0x2185 * 0x1 + -0x1344 + 0x62 * 0x8a));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, -0xe * 0xb143 + 0x59 * 0xdff + 0x2 * 0x4fa49));
const g = {};
g[k(0x1eb)] = !![], Object[l(0x1d5) + k(0x1d7)](exports, l(0x1d9), g);
const sequelize_1 = require(k(0x1f0));
module[l(0x1f1)] = {
    'up': d => {
        const m = l, n = l, e = {};
        e[m(0x1dd)] = m(0x1dc), e[m(0x1f2)] = m(0x1e6), e[n(0x1e8)] = m(0x1ec), e[m(0x1f4)] = n(0x1da), e[m(0x1d8)] = m(0x1de);
        const f = e;
        return d[n(0x1e0)](f[m(0x1dd)], f[n(0x1f2)], {
            'type': sequelize_1[n(0x1e7)][n(0x1f5)],
            'references': {
                'model': f[n(0x1e8)],
                'key': 'id'
            },
            'onUpdate': f[m(0x1f4)],
            'onDelete': f[n(0x1d8)]
        });
    },
    'down': d => {
        const o = k, p = l, e = {};
        e[o(0x1e5)] = p(0x1dc), e[o(0x1d6)] = p(0x1e6);
        const f = e;
        return d[o(0x1e4) + 'mn'](f[o(0x1e5)], f[o(0x1d6)]);
    }
};