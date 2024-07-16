'use strict';
const l = b, m = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x19a3 + 0x125f * -0x1 + 0x1 * -0x5a2);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const j = b, k = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(j(0x1bb)) / (-0x6f3 * -0x4 + 0x127b + 0x2 * -0x1723) * (-parseInt(j(0x1be)) / (0x268b + 0x1f8c + -0x4615)) + -parseInt(j(0x1a4)) / (0x29b + -0x182f + 0x1597 * 0x1) + parseInt(j(0x1b8)) / (-0x145d + 0x25ca + -0x1169) * (-parseInt(k(0x1a7)) / (-0x7 * 0x2dd + -0x5a8 + 0x19b8)) + parseInt(k(0x1a5)) / (0x1d82 + 0x18ec + -0x3668) + -parseInt(j(0x1bd)) / (-0x3 * 0x4d5 + 0x2463 + -0x15dd) * (-parseInt(j(0x1ab)) / (-0xa3f * 0x1 + 0x2 * -0x70d + -0x1861 * -0x1)) + -parseInt(j(0x1af)) / (0x1923 + 0x1 * -0x1a7b + -0x161 * -0x1) + -parseInt(j(0x1bf)) / (-0x1b5f + -0x39 * -0x60 + -0x1 * -0x609) * (-parseInt(k(0x1aa)) / (-0x1 * 0xfde + -0x228e + -0x3277 * -0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x4f505 + 0xa0e6b + 0x8 * -0xd7e1));
const i = {};
function a() {
    const r = [
        'NjPJJ',
        'STRING',
        '1395waIWpG',
        'sequelize',
        '469mIDHnP',
        '850GUBbwl',
        '90NeTYVs',
        'all',
        'erty',
        '673281GzOyaL',
        '2692572UTPlnw',
        'channel',
        '15hYGSsq',
        'defineProp',
        'value',
        '1492601AaZYWi',
        '105928JpySzb',
        'DataTypes',
        'removeColu',
        '__esModule',
        '7330041tJqqUy',
        'ttrYP',
        'IczxW',
        'exports',
        'CaSVH',
        'whatsapp',
        'DYkGr',
        'addColumn',
        'Tickets',
        '511436mLDDeX'
    ];
    a = function () {
        return r;
    };
    return a();
}
i[l(0x1a9)] = !![], Object[l(0x1a8) + m(0x1a3)](exports, l(0x1ae), i);
const sequelize_1 = require(l(0x1bc));
module[l(0x1b2)] = {
    'up': d => {
        const n = m, o = l, e = {};
        e[n(0x1b3)] = n(0x1b7), e[n(0x1b9)] = o(0x1a6), e[o(0x1b1)] = o(0x1b4);
        const f = e;
        return Promise[n(0x1a2)]([d[n(0x1b6)](f[o(0x1b3)], f[n(0x1b9)], {
                'type': sequelize_1[o(0x1ac)][n(0x1ba)],
                'allowNull': !![],
                'defaultValue': f[o(0x1b1)]
            })]);
    },
    'down': d => {
        const p = m, q = l, e = {};
        e[p(0x1b0)] = q(0x1b7), e[p(0x1b5)] = q(0x1a6);
        const f = e;
        return Promise[q(0x1a2)]([d[q(0x1ad) + 'mn'](f[q(0x1b0)], f[p(0x1b5)])]);
    }
};