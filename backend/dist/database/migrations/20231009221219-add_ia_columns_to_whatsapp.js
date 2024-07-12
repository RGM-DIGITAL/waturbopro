'use strict';
const o = b, p = b;
(function (d, e) {
    const m = b, n = b, f = d();
    while (!![]) {
        try {
            const g = -parseInt(m(0xc5)) / (-0x11 * 0x1b1 + -0x10d5 + 0x2d97) + -parseInt(m(0xaf)) / (-0x1d6f + -0x81b + 0x258c) + parseInt(m(0xbe)) / (-0x1c43 + -0x1 * 0x1ca2 + 0x38e8) + -parseInt(m(0xb2)) / (0x11e * 0xc + 0x3 * -0xc5e + 0x17b6) + parseInt(m(0xb8)) / (-0x161 * 0x15 + -0x1 * 0x1655 + 0x334f) + -parseInt(m(0xab)) / (0x1 * 0x2158 + 0x971 * 0x1 + 0x2ac3 * -0x1) * (parseInt(m(0xb0)) / (0x5 * 0x40a + 0x1de2 + 0x3 * -0x10af)) + -parseInt(m(0xb9)) / (-0x202b + -0x659 + 0x4 * 0x9a3) * (-parseInt(m(0xb3)) / (0x1 * -0xa7b + -0x1957 + 0x89 * 0x43));
            if (g === e)
                break;
            else
                f['push'](f['shift']());
        } catch (h) {
            f['push'](f['shift']());
        }
    }
}(a, 0xd673f + 0xf * -0x72b3 + 0x81b0));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x222d + -0x1 * 0x16d + -0x5 * 0x66b);
        let h = e[f];
        return h;
    }, b(c, d);
}
const c = {};
c[o(0xad)] = !![], Object[o(0xc1) + p(0xbb)](exports, p(0xb7), c);
const sequelize_1 = require(o(0xb4));
function a() {
    const u = [
        'HcPOo',
        'defineProp',
        'ble',
        'type',
        'INTEGER',
        '189541yvSfJL',
        'XnlOG',
        'DataTypes',
        'addColumn',
        'RFAvJ',
        'is_open_ia',
        'removeColu',
        'allowNull',
        '122754RWMVwj',
        'defaultVal',
        'value',
        'Whatsapps',
        '971438KulkKK',
        '7hZcQOU',
        'describeTa',
        '1999056GBgfhw',
        '1514745BDcVEz',
        'sequelize',
        'XlJKp',
        'Bedup',
        '__esModule',
        '2830120fNYfrD',
        '40ytCoKW',
        'queue_tran',
        'erty',
        'jxqVI',
        'exports',
        '777264ahKwwr',
        'BOOLEAN'
    ];
    a = function () {
        return u;
    };
    return a();
}
module[p(0xbd)] = {
    'up': async g => {
        const q = o, r = o, h = {};
        h[q(0xc0)] = q(0xae), h[q(0xb6)] = q(0xca), h[r(0xb5)] = q(0xba) + 'sf';
        const i = h, j = await g[q(0xb1) + q(0xc2)](i[r(0xc0)]);
        if (!j || !j[i[r(0xb6)]]) {
            const k = {};
            k[q(0xc3)] = sequelize_1[r(0xc7)][r(0xbf)], k[r(0xac) + 'ue'] = ![], k[q(0xaa)] = !![], await g[q(0xc8)](i[q(0xc0)], i[r(0xb6)], k);
        }
        if (!j || !j[i[r(0xb5)]]) {
            const l = {};
            l[q(0xc3)] = sequelize_1[r(0xc7)][q(0xc4)], l[q(0xaa)] = !![], await g[q(0xc8)](i[q(0xc0)], i[r(0xb5)], l);
        }
    },
    'down': async e => {
        const s = o, t = o, f = {};
        f[s(0xc6)] = t(0xae), f[t(0xc9)] = s(0xca), f[t(0xbc)] = s(0xba) + 'sf';
        const g = f;
        await e[s(0xa9) + 'mn'](g[s(0xc6)], g[t(0xc9)]), await e[s(0xa9) + 'mn'](g[s(0xc6)], g[s(0xbc)]);
    }
};