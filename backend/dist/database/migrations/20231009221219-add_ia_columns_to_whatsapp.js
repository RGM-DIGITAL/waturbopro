'use strict';
const o = b, p = b;
(function (d, e) {
    const m = b, n = b, f = d();
    while (!![]) {
        try {
            const g = -parseInt(m(0x178)) / (0x1 * 0x8d1 + -0x531 + -0x39f) + -parseInt(m(0x183)) / (-0x13d8 + -0x1e36 + 0x3210) + -parseInt(n(0x182)) / (0x5e * -0x1b + 0x5 * 0x64c + -0x158f) * (-parseInt(n(0x174)) / (-0x1 * 0xcc5 + 0x87b + 0x44e)) + -parseInt(n(0x180)) / (-0xa8e + -0x58 + 0xaeb) * (parseInt(m(0x189)) / (0xc * -0x27d + 0x1 * -0x25ca + 0x43ac)) + parseInt(m(0x18b)) / (0xb7 * 0x5 + 0xe12 + -0x52 * 0x37) * (parseInt(n(0x17f)) / (0x223 * 0x7 + -0x1 * 0x1987 + 0x54d * 0x2)) + parseInt(n(0x184)) / (-0x85d * 0x1 + -0x1c08 + 0x246e) * (-parseInt(n(0x17b)) / (0x1ac9 * -0x1 + -0x99 * -0xa + -0x6f3 * -0x3)) + parseInt(n(0x18a)) / (-0x40f * -0x4 + -0x63f * -0x1 + -0x1670);
            if (g === e)
                break;
            else
                f['push'](f['shift']());
        } catch (h) {
            f['push'](f['shift']());
        }
    }
}(a, -0xfa71a * -0x1 + 0x82e63 + 0xe1242 * -0x1));
function a() {
    const u = [
        'sequelize',
        'addColumn',
        'DataTypes',
        'CwIbE',
        'EOmWS',
        'EcdZC',
        'TBhIB',
        'removeColu',
        'queue_tran',
        '185396XwMqoo',
        'is_open_ia',
        'describeTa',
        'allowNull',
        '1276708WfYnyY',
        'BOOLEAN',
        'defineProp',
        '440jmQBOS',
        'UFUVH',
        'type',
        'value',
        '16LjAicm',
        '1442690SJuAHt',
        'INTEGER',
        '24jwriUy',
        '2495126KBTlYh',
        '186273jNjzuR',
        'defaultVal',
        'vqkyh',
        'Whatsapps',
        'erty',
        '6fpavIT',
        '36912722mvoLbY',
        '2228751vVihfy',
        '__esModule',
        'ble',
        'exports'
    ];
    a = function () {
        return u;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1c6a + -0x2 * -0x550 + 0x1334);
        let h = e[f];
        return h;
    }, b(c, d);
}
const c = {};
c[o(0x17e)] = !![], Object[o(0x17a) + o(0x188)](exports, o(0x18c), c);
const sequelize_1 = require(o(0x16b));
module[o(0x16a)] = {
    'up': async g => {
        const q = o, r = p, h = {};
        h[q(0x170)] = q(0x187), h[r(0x16e)] = q(0x175), h[r(0x186)] = q(0x173) + 'sf';
        const i = h, j = await g[r(0x176) + r(0x18d)](i[q(0x170)]);
        if (!j || !j[i[r(0x16e)]]) {
            const k = {};
            k[r(0x17d)] = sequelize_1[r(0x16d)][q(0x179)], k[q(0x185) + 'ue'] = ![], k[q(0x177)] = !![], await g[q(0x16c)](i[r(0x170)], i[r(0x16e)], k);
        }
        if (!j || !j[i[r(0x186)]]) {
            const l = {};
            l[r(0x17d)] = sequelize_1[r(0x16d)][r(0x181)], l[r(0x177)] = !![], await g[q(0x16c)](i[r(0x170)], i[r(0x186)], l);
        }
    },
    'down': async e => {
        const s = p, t = o, f = {};
        f[s(0x17c)] = t(0x187), f[t(0x171)] = t(0x175), f[t(0x16f)] = s(0x173) + 'sf';
        const g = f;
        await e[t(0x172) + 'mn'](g[s(0x17c)], g[s(0x171)]), await e[s(0x172) + 'mn'](g[t(0x17c)], g[s(0x16f)]);
    }
};