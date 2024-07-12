'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * -0x787 + -0x1578 + 0xf1c);
        let h = e[f];
        return h;
    }, b(c, d);
}
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0x143)) / (-0x77 * -0x7 + -0x10 * 0x1ef + 0x1bb0) + parseInt(m(0x12b)) / (0xddf + 0x178 * -0x3 + -0x975) * (-parseInt(l(0x13f)) / (-0x2b * -0xce + 0x1 * -0x493 + -0x1 * 0x1e04)) + parseInt(m(0x135)) / (0x1 * -0xfd9 + -0xe66 * -0x1 + 0x177) * (parseInt(l(0x136)) / (0x1 * 0x2605 + 0xfa4 + -0x1ad2 * 0x2)) + -parseInt(l(0x131)) / (0x7 * 0x517 + -0x8e8 + -0x557 * 0x5) + -parseInt(l(0x138)) / (-0x72 * 0x11 + -0x24c9 + 0x2 * 0x1631) * (parseInt(l(0x12c)) / (0x43b * 0x4 + 0xb83 + -0x1c67)) + parseInt(m(0x132)) / (0x20f7 + 0x140b + 0x1 * -0x34f9) * (-parseInt(m(0x12d)) / (-0x10dd + -0x12 * -0x13d + -0x563)) + parseInt(l(0x12e)) / (-0x1e8 * -0xa + -0x26fa + 0x13f5);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x32a2e + 0xef9 * 0xc1 + -0x1f76 * 0x47));
function a() {
    const t = [
        '816ilxkLO',
        'Sequelize',
        'UUID',
        'erty',
        '214012JGotPm',
        'gen_random',
        'all',
        'changeColu',
        'exports',
        'value',
        '3770XnstrU',
        '5305192OpGIrq',
        '20RymSfK',
        '21811614OHzmQj',
        'defineProp',
        'ApiConfigs',
        '1830168uEBqGe',
        '3265182GrdlOY',
        'literal',
        '_uuid()',
        '72lbLmqY',
        '106930JBYsPr',
        'DataTypes',
        '7tgKaJb',
        'MQlBV',
        'QDPuL',
        '__esModule',
        'DxRCF',
        'YQkaW',
        'sequelize'
    ];
    a = function () {
        return t;
    };
    return a();
}
const k = {};
k[n(0x148)] = !![], Object[o(0x12f) + o(0x142)](exports, n(0x13b), k);
const sequelize_1 = require(n(0x13e));
module[o(0x147)] = {
    'up': d => {
        const p = o, q = n, e = {};
        e[p(0x13d)] = p(0x130), e[q(0x13c)] = q(0x144) + q(0x134);
        const f = e;
        return Promise[p(0x145)]([d[q(0x146) + 'mn'](f[q(0x13d)], 'id', {
                'allowNull': ![],
                'primaryKey': !![],
                'type': sequelize_1[p(0x137)][q(0x141)],
                'defaultValue': sequelize_1[q(0x140)][p(0x133)](f[p(0x13c)])
            })]);
    },
    'down': d => {
        const r = n, s = o, e = {};
        e[r(0x13a)] = r(0x130), e[s(0x139)] = s(0x144) + s(0x134);
        const f = e;
        return Promise[s(0x145)]([d[r(0x146) + 'mn'](f[r(0x13a)], 'id', {
                'allowNull': ![],
                'primaryKey': !![],
                'type': sequelize_1[s(0x137)][r(0x141)],
                'defaultValue': sequelize_1[s(0x140)][r(0x133)](f[s(0x139)])
            })]);
    }
};