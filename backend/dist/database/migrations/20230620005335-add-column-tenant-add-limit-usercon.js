'use strict';
const o = b, p = b;
(function (d, e) {
    const m = b, n = b, f = d();
    while (!![]) {
        try {
            const g = -parseInt(m(0x138)) / (0x2 * -0x558 + -0x26d9 + 0x2 * 0x18c5) + -parseInt(n(0x11d)) / (-0x2c7 * 0xb + -0x2 * 0x813 + 0x2eb5) * (-parseInt(m(0x121)) / (0x1 * -0xe65 + -0x1 * 0xe4d + 0x1cb5)) + parseInt(n(0x12d)) / (0x742 + -0x209c * -0x1 + -0x27da) + parseInt(m(0x13a)) / (0x10d8 + -0x17a4 * -0x1 + -0x2877) * (parseInt(n(0x123)) / (0x3fb + -0x22df + 0x527 * 0x6)) + -parseInt(m(0x137)) / (0x4e0 * 0x1 + 0x1 * -0x15f7 + 0x111e) * (-parseInt(m(0x12f)) / (0x1 * 0x629 + 0x63 * 0x19 + -0x7e6 * 0x2)) + -parseInt(n(0x128)) / (0x1183 + -0x2342 + 0x11c8) + -parseInt(n(0x12e)) / (-0x2023 + -0x8 * -0x8b + 0x1bd5) * (-parseInt(m(0x11f)) / (-0x1ef2 + 0x1e70 + 0x2f * 0x3));
            if (g === e)
                break;
            else
                f['push'](f['shift']());
        } catch (h) {
            f['push'](f['shift']());
        }
    }
}(a, 0x2b6c * 0x4 + -0x3 * -0x49875 + -0x65f2f));
function a() {
    const u = [
        '5Qxrche',
        '__esModule',
        'describeTa',
        'INTEGER',
        'addColumn',
        'ions',
        '1206BTJSKA',
        'xeFOO',
        '22CFwlHU',
        'defineProp',
        '483HqTYuA',
        'sequelize',
        '6034638SntLWu',
        'DataTypes',
        'maxUsers',
        'exports',
        'removeColu',
        '7819209jCMsRN',
        'ble',
        'allowNull',
        'Namdl',
        'xAprw',
        '444136maTIad',
        '1446420yALGlz',
        '3608urvomc',
        'value',
        'erty',
        'type',
        'TLbwH',
        'Tenants',
        'HZqaK',
        'maxConnect',
        '9240VwKioB',
        '699293VLTtPO',
        'xcaDO'
    ];
    a = function () {
        return u;
    };
    return a();
}
const c = {};
c[o(0x130)] = !![], Object[o(0x120) + p(0x131)](exports, o(0x13b), c);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x9c5 + 0x362 + -0xc0d);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(o(0x122));
module[o(0x126)] = {
    'up': async g => {
        const q = p, r = p, h = {};
        h[q(0x11e)] = q(0x134), h[r(0x12c)] = q(0x125), h[r(0x139)] = r(0x136) + q(0x11c);
        const i = h, j = await g[r(0x13c) + r(0x129)](i[r(0x11e)]);
        if (!j || !j[i[q(0x12c)]]) {
            const k = {};
            k[r(0x132)] = sequelize_1[q(0x124)][q(0x11a)], k[q(0x12a)] = !![], await g[q(0x11b)](i[q(0x11e)], i[r(0x12c)], k);
        }
        if (!j || !j[i[r(0x139)]]) {
            const l = {};
            l[q(0x132)] = sequelize_1[q(0x124)][r(0x11a)], l[q(0x12a)] = !![], await g[q(0x11b)](i[r(0x11e)], i[r(0x139)], l);
        }
    },
    'down': async e => {
        const s = p, t = o, f = {};
        f[s(0x135)] = t(0x134), f[s(0x12b)] = s(0x125), f[s(0x133)] = t(0x136) + t(0x11c);
        const g = f;
        await e[s(0x127) + 'mn'](g[s(0x135)], g[s(0x12b)]), await e[s(0x127) + 'mn'](g[s(0x135)], g[t(0x133)]);
    }
};