'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x4a9 * -0x2 + -0x119d + -0x8fe * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const m = b, n = b;
(function (d, e) {
    const k = b, l = b, f = d();
    while (!![]) {
        try {
            const g = -parseInt(k(0xb6)) / (-0x1007 * -0x1 + -0x173d + 0x1 * 0x737) + parseInt(k(0xc3)) / (-0x209 * 0x13 + -0x8b * 0x4 + 0x28d9) + -parseInt(k(0xca)) / (-0xf5d * -0x1 + 0x977 + -0x18d1 * 0x1) * (parseInt(k(0xbb)) / (0x38e + -0x5 * 0x282 + 0x900)) + -parseInt(l(0xcc)) / (0x1692 + 0x1 * -0x1b65 + 0x14 * 0x3e) * (parseInt(l(0xb8)) / (0x1df1 + -0x2 * -0xeb3 + -0x3b51)) + parseInt(l(0xc7)) / (0x85c + -0x241 * 0x2 + -0x3d3) * (-parseInt(l(0xd1)) / (0x1 * 0x377 + -0x142 * -0x5 + -0x9b9)) + parseInt(l(0xd2)) / (0xd * 0x24d + -0x585 + -0x185b * 0x1) * (parseInt(k(0xbc)) / (0x2417 + 0x1d0f * 0x1 + -0x411c)) + parseInt(l(0xb4)) / (0x23cf + 0x1464 + -0x3828) * (parseInt(k(0xc5)) / (0x7 * 0x35 + -0x6bb * -0x1 + -0x822));
            if (g === e)
                break;
            else
                f['push'](f['shift']());
        } catch (h) {
            f['push'](f['shift']());
        }
    }
}(a, 0x7 * 0x2b003 + 0x95f10 + -0x11b298));
const c = {};
c[m(0xc8)] = !![], Object[n(0xb5) + m(0xd0)](exports, n(0xb7), c);
const sequelize_1 = require(m(0xbf));
function a() {
    const s = [
        'sequelize',
        'ble',
        'removeColu',
        'DataTypes',
        '480198oRQIja',
        'eHJhD',
        '1356otqqqY',
        'exports',
        '115598HwtBCM',
        'value',
        'Tenants',
        '30Xdabra',
        'rjKAd',
        '35mhqGKt',
        'addColumn',
        'cnpj',
        'describeTa',
        'erty',
        '40DOunIR',
        '27WStAbk',
        'allowNull',
        '288893bfwDNf',
        'defineProp',
        '1123463LMIAdo',
        '__esModule',
        '285006mCSmJp',
        'STRING',
        'fXscY',
        '408496dNtMHQ',
        '130690AzMQzO',
        'fxGNK',
        'type'
    ];
    a = function () {
        return s;
    };
    return a();
}
module[m(0xc6)] = {
    'up': async f => {
        const o = m, p = m, g = {};
        g[o(0xba)] = p(0xc9), g[p(0xcb)] = p(0xce);
        const h = g, i = await f[p(0xcf) + o(0xc0)](h[o(0xba)]);
        if (!i || !i[h[o(0xcb)]]) {
            const j = {};
            j[o(0xbe)] = sequelize_1[o(0xc2)][p(0xb9)], j[p(0xb3)] = ![], await f[o(0xcd)](h[o(0xba)], h[p(0xcb)], j);
        }
    },
    'down': async e => {
        const q = n, r = m, f = {};
        f[q(0xc4)] = r(0xc9), f[q(0xbd)] = q(0xce);
        const g = f;
        await e[q(0xc1) + 'mn'](g[q(0xc4)], g[r(0xbd)]);
    }
};