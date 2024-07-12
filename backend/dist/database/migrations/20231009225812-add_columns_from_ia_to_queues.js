'use strict';
const m = b, n = b;
(function (d, e) {
    const k = b, l = b, f = d();
    while (!![]) {
        try {
            const g = -parseInt(k(0x1d2)) / (-0x19fe * -0x1 + 0x1b04 + -0x3501) + -parseInt(l(0x1b7)) / (-0xa * 0x267 + 0x3a1 * -0x2 + 0x3 * 0xa6e) + parseInt(k(0x1c6)) / (-0x1 * 0x18b4 + -0x3a * -0x5 + 0x1795 * 0x1) + -parseInt(k(0x1ce)) / (0x167e + 0x15fe + -0x2c78) * (parseInt(l(0x1ba)) / (0x1eeb + -0x410 + 0x479 * -0x6)) + -parseInt(k(0x1b6)) / (-0x188 * -0x17 + 0x138f + 0x83 * -0x6b) + -parseInt(k(0x1c3)) / (-0xca4 * 0x3 + 0xff9 * -0x1 + -0x22 * -0x196) * (-parseInt(k(0x1be)) / (0x2266 + 0x1a5c + 0x6 * -0xa1f)) + -parseInt(k(0x1c1)) / (0x244f + -0x15af + 0x4dd * -0x3) * (-parseInt(l(0x1cc)) / (0x188c + -0xb1 * -0x15 + -0x61 * 0x67));
            if (g === e)
                break;
            else
                f['push'](f['shift']());
        } catch (h) {
            f['push'](f['shift']());
        }
    }
}(a, 0x1 * -0x804a2 + 0xc61cd + 0x24fb * 0x13));
const c = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * 0x263f + -0x18de * -0x1 + -0x3d6b);
        let h = e[f];
        return h;
    }, b(c, d);
}
c[m(0x1b2)] = !![], Object[m(0x1c8) + n(0x1bc)](exports, m(0x1b5), c);
function a() {
    const s = [
        '91176KKweQO',
        'nLLuJ',
        'defineProp',
        'exports',
        'defaultVal',
        'BOOLEAN',
        '25905010nfjGZV',
        'cnpj',
        '4MOaXBJ',
        'LMfEH',
        'allowNull',
        'ble',
        '707275eVgnxh',
        'value',
        'sequelize',
        'from_ia',
        '__esModule',
        '4984644QLKVUY',
        '1284840djxxbl',
        'removeColu',
        'FAFCl',
        '2161980VnUhnl',
        'DataTypes',
        'erty',
        'wDTSq',
        '160qLpklP',
        'describeTa',
        'type',
        '9ooXntZ',
        'Queues',
        '160244rdVMqf',
        'addColumn',
        'ymoTy'
    ];
    a = function () {
        return s;
    };
    return a();
}
const sequelize_1 = require(m(0x1b3));
module[n(0x1c9)] = {
    'up': async f => {
        const o = n, p = m, g = {};
        g[o(0x1c5)] = p(0x1c2), g[o(0x1bd)] = p(0x1cd), g[o(0x1c7)] = o(0x1b4);
        const h = g, i = await f[o(0x1bf) + o(0x1d1)](h[o(0x1c5)]);
        if (!i || !i[h[p(0x1bd)]]) {
            const j = {};
            j[p(0x1c0)] = sequelize_1[o(0x1bb)][p(0x1cb)], j[p(0x1ca) + 'ue'] = ![], j[o(0x1d0)] = !![], await f[o(0x1c4)](h[p(0x1c5)], h[o(0x1c7)], j);
        }
    },
    'down': async e => {
        const q = n, r = m, f = {};
        f[q(0x1b9)] = q(0x1c2), f[r(0x1cf)] = r(0x1b4);
        const g = f;
        await e[r(0x1b8) + 'mn'](g[r(0x1b9)], g[r(0x1cf)]);
    }
};