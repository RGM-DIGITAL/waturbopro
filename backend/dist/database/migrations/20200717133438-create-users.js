'use strict';
const x = b, y = b;
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(v(0x1c0)) / (0x1ac + -0x1 * 0x4b + 0x8 * -0x2c) + -parseInt(v(0x1d7)) / (-0xc * -0x295 + -0x4c * -0x68 + -0x3dda) * (parseInt(w(0x1c4)) / (0xdcf + 0x185 * 0xc + -0x2008)) + parseInt(v(0x1d6)) / (-0xd8b * 0x2 + 0x1a6f + 0xab) * (parseInt(v(0x1ce)) / (0x202d * 0x1 + -0x1a * -0xd6 + -0x35e4)) + parseInt(w(0x1c8)) / (0x1 * 0x1d68 + 0x1139 * -0x1 + -0xc29) * (-parseInt(w(0x1ca)) / (0x113b * -0x1 + -0x4b1 * -0x1 + 0xc91)) + parseInt(v(0x1da)) / (-0xe21 * 0x1 + -0x13b * -0xf + -0x44c) * (parseInt(v(0x1e3)) / (-0xd97 + -0x1 * -0x18f3 + 0x1 * -0xb53)) + -parseInt(v(0x1c1)) / (0x1fae + -0xc * 0x329 + 0x18 * 0x43) + parseInt(w(0x1c3)) / (0x68b + 0x1c35 + -0x22b5);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * -0x6c405 + -0x5c8e6 + -0x2 * -0x54462));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x16b5 + 0xe03 + -0x1 * 0x22f9);
        let h = e[f];
        return h;
    }, b(c, d);
}
const q = {};
function a() {
    const D = [
        'unique',
        'qcRjE',
        '4NrLcbp',
        '258134fvmnLV',
        'ent',
        'updatedAt',
        '24536WIGEZk',
        'createdAt',
        'name',
        'sequelize',
        'email',
        'erty',
        'defineProp',
        'Users',
        'dropTable',
        '126GcSxnB',
        'DATE',
        '618692xTgKhI',
        '5255400kgkeJP',
        'autoIncrem',
        '22543642fbqajQ',
        '6parurq',
        'createTabl',
        'bLfxz',
        'exports',
        '8621472uUIivr',
        'allowNull',
        '7nLDCoq',
        'passwordHa',
        'STRING',
        'type',
        '1320965keccnU',
        'DataTypes',
        'INTEGER',
        'value',
        'primaryKey',
        '__esModule'
    ];
    a = function () {
        return D;
    };
    return a();
}
q[x(0x1d1)] = !![], Object[x(0x1e0) + x(0x1df)](exports, y(0x1d3), q);
const sequelize_1 = require(x(0x1dd));
module[y(0x1c7)] = {
    'up': k => {
        const z = y, A = y, l = {};
        l[z(0x1d5)] = z(0x1e1);
        const m = l, n = {};
        n[A(0x1cd)] = sequelize_1[A(0x1cf)][A(0x1d0)], n[z(0x1c2) + z(0x1d8)] = !![], n[z(0x1d2)] = !![], n[z(0x1c9)] = ![];
        const o = {};
        o[A(0x1cd)] = sequelize_1[z(0x1cf)][z(0x1cc)], o[A(0x1c9)] = ![];
        const p = {};
        p[z(0x1cd)] = sequelize_1[A(0x1cf)][A(0x1cc)], p[z(0x1c9)] = ![], p[A(0x1d4)] = !![];
        const r = {};
        r[z(0x1cd)] = sequelize_1[z(0x1cf)][z(0x1cc)], r[z(0x1c9)] = ![];
        const s = {};
        s[z(0x1cd)] = sequelize_1[A(0x1cf)][A(0x1bf)], s[z(0x1c9)] = ![];
        const t = {};
        t[z(0x1cd)] = sequelize_1[z(0x1cf)][A(0x1bf)], t[A(0x1c9)] = ![];
        const u = {};
        return u['id'] = n, u[z(0x1dc)] = o, u[z(0x1de)] = p, u[z(0x1cb) + 'sh'] = r, u[z(0x1db)] = s, u[A(0x1d9)] = t, k[z(0x1c5) + 'e'](m[A(0x1d5)], u);
    },
    'down': d => {
        const B = x, C = y, e = {};
        e[B(0x1c6)] = C(0x1e1);
        const f = e;
        return d[B(0x1e2)](f[C(0x1c6)]);
    }
};