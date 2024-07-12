'use strict';
const k = b, l = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x737 + -0x40e * 0x1 + 0xc72);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(i(0x13c)) / (0x655 * -0x1 + 0xe99 + -0x843) * (-parseInt(j(0x134)) / (-0x1c03 + 0x1d33 * 0x1 + -0x12e)) + parseInt(j(0x141)) / (0x2084 + 0x1f7 * 0xe + -0x1b * 0x239) * (parseInt(i(0x144)) / (0x8c2 * -0x4 + -0x409 * -0x1 + 0x11 * 0x1d3)) + -parseInt(j(0x146)) / (0x1c2 * -0x13 + 0x532 + 0x11 * 0x1a9) * (-parseInt(j(0x148)) / (-0x1e88 + -0x22a4 + 0x2 * 0x2099)) + parseInt(j(0x132)) / (0x20b9 * 0x1 + 0x1468 + -0x351a) * (-parseInt(j(0x13f)) / (-0x4 * -0x2aa + -0x13f7 * -0x1 + 0xbf * -0x29)) + parseInt(j(0x13a)) / (-0xf9 * -0xf + -0x61 * -0x39 + -0x2427) * (-parseInt(j(0x12f)) / (-0x7f5 + 0x1bbd + -0x13be)) + parseInt(j(0x13d)) / (-0x9f3 + -0x3 * 0xc61 + 0x2f21) + parseInt(j(0x149)) / (0x1306 + -0x201c + 0xd22) * (parseInt(j(0x12d)) / (-0x5 * 0x202 + 0x2 * -0x3c2 + 0x119b));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, -0x243f0 + -0xf31 * 0x2 + 0x44f48));
const g = {};
function a() {
    const q = [
        'erty',
        'jPFle',
        '55393LEvdJb',
        'Contacts',
        '26930JmZPmg',
        'JvYek',
        'JguJq',
        '21pMHWRI',
        'defineProp',
        '2482emKURs',
        'DataTypes',
        'exports',
        '__esModule',
        'removeColu',
        'contactId',
        '414DNoGXI',
        'gUqID',
        '165KCamEv',
        '1928542QBrQCC',
        'Messages',
        '489576PFRdsk',
        'EdqCH',
        '24117wodutD',
        'value',
        'CASCADE',
        '72CpnurQ',
        'pYrfI',
        '5VgngkY',
        'sequelize',
        '44130DnnKjV',
        '876LeHgIv',
        'addColumn',
        'INTEGER'
    ];
    a = function () {
        return q;
    };
    return a();
}
g[k(0x142)] = !![], Object[l(0x133) + k(0x14c)](exports, k(0x137), g);
const sequelize_1 = require(k(0x147));
module[k(0x136)] = {
    'up': d => {
        const m = k, n = l, e = {};
        e[m(0x14d)] = n(0x13e), e[m(0x131)] = n(0x139), e[m(0x140)] = n(0x12e), e[m(0x13b)] = m(0x143);
        const f = e;
        return d[m(0x14a)](f[m(0x14d)], f[n(0x131)], {
            'type': sequelize_1[m(0x135)][m(0x14b)],
            'references': {
                'model': f[n(0x140)],
                'key': 'id'
            },
            'onUpdate': f[n(0x13b)],
            'onDelete': f[n(0x13b)]
        });
    },
    'down': d => {
        const o = k, p = l, e = {};
        e[o(0x130)] = o(0x13e), e[o(0x145)] = o(0x139);
        const f = e;
        return d[o(0x138) + 'mn'](f[p(0x130)], f[p(0x145)]);
    }
};