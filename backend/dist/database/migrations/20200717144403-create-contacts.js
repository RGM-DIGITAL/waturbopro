'use strict';
const x = b, y = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xa79 + 0xaab * -0x1 + 0x99);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(v(0x7b)) / (-0x1a3d + 0x7ff * 0x3 + 0x241) * (parseInt(w(0x6b)) / (0x14 * -0xf9 + 0x22e3 + -0xf6d)) + parseInt(v(0x83)) / (-0x2 * -0x4d9 + 0x1a * 0xb2 + -0x1bc3 * 0x1) * (-parseInt(w(0x89)) / (-0x7 * -0x3d1 + 0x7e3 + -0x2296)) + -parseInt(v(0x8a)) / (-0x3 * 0x2b7 + 0x1faa + -0x20 * 0xbc) * (parseInt(v(0x70)) / (0xab7 + 0x647 + 0x8 * -0x21f)) + parseInt(w(0x82)) / (0x1e8e + -0x6 * 0x5ae + -0x1 * -0x38d) * (-parseInt(w(0x72)) / (0x2657 + -0x143 + 0x250c * -0x1)) + -parseInt(v(0x68)) / (-0x237 + 0x4 * -0x946 + 0x2 * 0x13ac) * (parseInt(v(0x73)) / (-0x2368 + 0x2068 + 0x30a)) + -parseInt(w(0x87)) / (0x31e + -0x223 * 0x12 + 0x2363) * (-parseInt(w(0x79)) / (0x24f5 + -0x2 * 0x7d3 + -0x1543)) + parseInt(v(0x6a)) / (-0x156d + -0x2581 * 0x1 + 0x3afb) * (parseInt(w(0x7d)) / (-0x554 + 0x71 * -0xa + -0xe4 * -0xb));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x4f842 + -0x48cec + 0x10a19c));
function a() {
    const D = [
        'defineProp',
        '6EosvWq',
        'primaryKey',
        '9000NpXrOg',
        '40KyVMYF',
        'ent',
        'dropTable',
        'STRING',
        'number',
        'autoIncrem',
        '12ZSGeju',
        'Contacts',
        '172583KYZOfn',
        'DataTypes',
        '27000092kbWhRD',
        'sequelize',
        '__esModule',
        'INTEGER',
        'unique',
        '2359MgekbM',
        '68109eSZAcr',
        'allowNull',
        'profilePic',
        'Url',
        '8710702LVRnid',
        'DATE',
        '92MlosXF',
        '3649795UvtdLq',
        'value',
        'type',
        'createTabl',
        'createdAt',
        'exports',
        'erty',
        '237213kegFKJ',
        'TrSiS',
        '13JAVRoa',
        '6jTbIdR',
        'name',
        'iUfbp',
        'updatedAt'
    ];
    a = function () {
        return D;
    };
    return a();
}
const q = {};
q[x(0x8b)] = !![], Object[y(0x6f) + y(0x67)](exports, y(0x7f), q);
const sequelize_1 = require(x(0x7e));
module[x(0x8f)] = {
    'up': k => {
        const z = x, A = x, l = {};
        l[z(0x69)] = z(0x7a);
        const m = l, n = {};
        n[A(0x8c)] = sequelize_1[A(0x7c)][A(0x80)], n[A(0x78) + z(0x74)] = !![], n[A(0x71)] = !![], n[A(0x84)] = ![];
        const o = {};
        o[A(0x8c)] = sequelize_1[A(0x7c)][A(0x76)], o[z(0x84)] = ![];
        const p = {};
        p[A(0x8c)] = sequelize_1[z(0x7c)][z(0x76)], p[A(0x84)] = ![], p[A(0x81)] = !![];
        const r = {};
        r[z(0x8c)] = sequelize_1[A(0x7c)][A(0x76)];
        const s = {};
        s[z(0x8c)] = sequelize_1[z(0x7c)][z(0x88)], s[z(0x84)] = ![];
        const t = {};
        t[A(0x8c)] = sequelize_1[z(0x7c)][A(0x88)], t[z(0x84)] = ![];
        const u = {};
        return u['id'] = n, u[A(0x6c)] = o, u[A(0x77)] = p, u[z(0x85) + z(0x86)] = r, u[z(0x8e)] = s, u[z(0x6e)] = t, k[A(0x8d) + 'e'](m[A(0x69)], u);
    },
    'down': d => {
        const B = y, C = y, e = {};
        e[B(0x6d)] = B(0x7a);
        const f = e;
        return d[C(0x75)](f[C(0x6d)]);
    }
};