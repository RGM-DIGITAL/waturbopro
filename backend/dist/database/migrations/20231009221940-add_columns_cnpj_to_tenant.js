'use strict';
function a() {
    const s = [
        '263034DAqCEB',
        '54778UEeSlW',
        'defineProp',
        '217NeZyEH',
        'FFmhq',
        'sequelize',
        'type',
        'allowNull',
        '1181124cKvhDd',
        '5416FgZNAZ',
        'STRING',
        '772830fkWYJX',
        'exports',
        'removeColu',
        'addColumn',
        'describeTa',
        'DataTypes',
        'cnpj',
        'Gpzqf',
        'value',
        'orUPI',
        'KIuKO',
        '622002SnySUw',
        'erty',
        'Tenants',
        '__esModule',
        'ble',
        '435832DvBtcj'
    ];
    a = function () {
        return s;
    };
    return a();
}
const m = b, n = b;
(function (d, e) {
    const k = b, l = b, f = d();
    while (!![]) {
        try {
            const g = parseInt(k(0xaf)) / (0x2 * -0xbe + 0x19a5 + -0x1828) + parseInt(k(0xae)) / (-0x1dae + -0x4b * 0x7b + 0x41b9) + -parseInt(k(0xa8)) / (-0x47 * -0x41 + -0x1 * 0x13c9 + 0x1c5) + parseInt(l(0xad)) / (-0x12b6 + -0xe * 0x2aa + 0x1c03 * 0x2) + -parseInt(k(0xb9)) / (0x1a9f + 0x2f0 + -0x1d8a * 0x1) + parseInt(k(0xb6)) / (-0x12d2 + -0xb * -0x2d7 + -0xc65) + -parseInt(k(0xb1)) / (-0x1cad + -0x1 * -0x388 + 0x192c) * (parseInt(k(0xb7)) / (0x2e * -0x5 + 0x216d + -0x207f));
            if (g === e)
                break;
            else
                f['push'](f['shift']());
        } catch (h) {
            f['push'](f['shift']());
        }
    }
}(a, -0x8e72 * 0x2 + 0x14c93 * -0x1 + -0x11 * -0x3d6b));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x17e3 + 0x2f * -0x33 + 0x21e0);
        let h = e[f];
        return h;
    }, b(c, d);
}
const c = {};
c[m(0xa5)] = !![], Object[m(0xb0) + m(0xa9)](exports, m(0xab), c);
const sequelize_1 = require(n(0xb3));
module[n(0xba)] = {
    'up': async f => {
        const o = n, p = n, g = {};
        g[o(0xa4)] = p(0xaa), g[o(0xa7)] = p(0xa3);
        const h = g, i = await f[o(0xa1) + o(0xac)](h[o(0xa4)]);
        if (!i || !i[h[o(0xa7)]]) {
            const j = {};
            j[o(0xb4)] = sequelize_1[p(0xa2)][o(0xb8)], j[p(0xb5)] = ![], await f[o(0xa0)](h[p(0xa4)], h[p(0xa7)], j);
        }
    },
    'down': async e => {
        const q = n, r = n, f = {};
        f[q(0xa6)] = r(0xaa), f[r(0xb2)] = r(0xa3);
        const g = f;
        await e[q(0xbb) + 'mn'](g[r(0xa6)], g[r(0xb2)]);
    }
};