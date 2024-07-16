'use strict';
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(i(0x153)) / (0xd * -0xf7 + -0x10ff * -0x1 + -0x11 * 0x43) + -parseInt(j(0x154)) / (0x5f2 + -0x1b1 + -0x1 * 0x43f) + parseInt(j(0x156)) / (-0x155b + 0x490 + -0x59a * -0x3) + -parseInt(j(0x14f)) / (0x1 * -0x57d + 0x1902 + -0x1381) * (-parseInt(j(0x151)) / (0xee + -0x1f6b + 0x1e82)) + parseInt(j(0x14a)) / (-0x26 * -0x1e + 0x2 * 0x203 + -0x874) * (-parseInt(j(0x161)) / (0x2415 + -0x1 * 0x50d + -0x1f01)) + parseInt(i(0x147)) / (0x3cd * 0x1 + 0x1 * -0x1a3 + -0x222) * (-parseInt(i(0x152)) / (-0x129a * -0x1 + -0x283 * 0x1 + -0x2ad * 0x6)) + parseInt(j(0x148)) / (0x3a1 * 0x9 + 0x1346 + -0x1 * 0x33e5);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, 0x18b0b2 + -0x17260b + 0x30d1 * 0x43));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x25ce * 0x1 + 0x21e7 + 0x1 * -0x4672);
        let h = e[f];
        return h;
    }, b(c, d);
}
const g = {};
g[k(0x149)] = !![], Object[l(0x145) + k(0x160)](exports, l(0x15f), g);
function a() {
    const q = [
        '1859702rKuMNM',
        'vcardConta',
        '766242kKNEdc',
        'ZyFXa',
        'addColumn',
        'SCrDZ',
        'CASCADE',
        'HqldJ',
        'QGHlm',
        'INTEGER',
        'KxGZW',
        '__esModule',
        'erty',
        '118762skORkn',
        'removeColu',
        'Messages',
        'defineProp',
        'cLrCl',
        '1145208yyJtDm',
        '22882840GuEOTA',
        'value',
        '12AhhiLS',
        'ctId',
        'DataTypes',
        'sequelize',
        'Contacts',
        '28UHUZQU',
        'exports',
        '152155pLYlzC',
        '81YhbmVC',
        '433757GJHuBU'
    ];
    a = function () {
        return q;
    };
    return a();
}
const sequelize_1 = require(k(0x14d));
module[k(0x150)] = {
    'up': d => {
        const m = k, n = k, e = {};
        e[m(0x157)] = n(0x144), e[n(0x146)] = m(0x155) + n(0x14b), e[m(0x15b)] = n(0x14e), e[m(0x159)] = n(0x15a);
        const f = e;
        return d[m(0x158)](f[m(0x157)], f[n(0x146)], {
            'type': sequelize_1[n(0x14c)][n(0x15d)],
            'references': {
                'model': f[n(0x15b)],
                'key': 'id'
            },
            'onUpdate': f[m(0x159)],
            'onDelete': f[m(0x159)]
        });
    },
    'down': d => {
        const o = l, p = l, e = {};
        e[o(0x15e)] = p(0x144), e[o(0x15c)] = p(0x155) + p(0x14b);
        const f = e;
        return d[o(0x143) + 'mn'](f[o(0x15e)], f[o(0x15c)]);
    }
};