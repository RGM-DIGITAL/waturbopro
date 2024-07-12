'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x8bc + -0x2550 + 0x1e85);
        let h = e[f];
        return h;
    }, b(c, d);
}
const l = b, m = b;
function a() {
    const r = [
        '31eXyruz',
        '93890LewwfM',
        'removeColu',
        'Tickets',
        'STRING',
        'addColumn',
        '1676772nEqtBh',
        'exports',
        'wRwkc',
        '1965723wRsBSd',
        '__esModule',
        'DataTypes',
        '185ibJIFW',
        'VZwWr',
        'channel',
        'all',
        '5846115DuCYGZ',
        '40OrMuQG',
        'whatsapp',
        '331219fPuAfR',
        '10295604UtqXus',
        '164556OuzBYg',
        'tBpgG',
        'erty',
        '232pOfMKy',
        '4qMEAFu',
        'defineProp',
        'value',
        'LUcVd',
        'sequelize',
        'PvyfA'
    ];
    a = function () {
        return r;
    };
    return a();
}
(function (c, d) {
    const j = b, k = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(j(0x1f6)) / (0x2ab * -0xd + -0x1023 + 0x32d3) * (parseInt(j(0x1f7)) / (-0x1 * 0x191b + 0x43 * 0x42 + 0x7d7)) + -parseInt(k(0x1ff)) / (0x226f + 0x26f4 * 0x1 + -0x4960) * (parseInt(j(0x20f)) / (-0x45 + 0x24bb + 0x613 * -0x6)) + parseInt(k(0x202)) / (-0x1 * 0x19fd + -0x117d + 0x2b7f) * (-parseInt(j(0x20b)) / (-0x4 * -0x283 + 0x95 * 0x35 + -0x28df)) + -parseInt(k(0x209)) / (0x26d3 + -0x1 * 0x101 + -0x19 * 0x183) * (-parseInt(j(0x20e)) / (-0x26ea + -0x1206 + 0x38f8)) + parseInt(j(0x1fc)) / (0xec7 + -0x165b + 0x79d * 0x1) * (-parseInt(k(0x207)) / (0x61a + 0x1055 * 0x2 + 0x26ba * -0x1)) + -parseInt(j(0x206)) / (0x3d3 * -0x1 + 0x1d8 + 0x2 * 0x103) + parseInt(k(0x20a)) / (-0x25ea + 0x1ca0 + 0xef * 0xa);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x2 * 0xa7f21 + -0x146ddc + 0xab55d));
const i = {};
i[l(0x1f2)] = !![], Object[l(0x1f1) + l(0x20d)](exports, m(0x200), i);
const sequelize_1 = require(l(0x1f4));
module[m(0x1fd)] = {
    'up': d => {
        const n = l, o = l, e = {};
        e[n(0x20c)] = n(0x1f9), e[o(0x1fe)] = o(0x204), e[n(0x1f5)] = n(0x208);
        const f = e;
        return Promise[n(0x205)]([d[n(0x1fb)](f[o(0x20c)], f[n(0x1fe)], {
                'type': sequelize_1[o(0x201)][n(0x1fa)],
                'allowNull': !![],
                'defaultValue': f[n(0x1f5)]
            })]);
    },
    'down': d => {
        const p = l, q = l, e = {};
        e[p(0x1f3)] = q(0x1f9), e[p(0x203)] = p(0x204);
        const f = e;
        return Promise[p(0x205)]([d[p(0x1f8) + 'mn'](f[q(0x1f3)], f[q(0x203)])]);
    }
};