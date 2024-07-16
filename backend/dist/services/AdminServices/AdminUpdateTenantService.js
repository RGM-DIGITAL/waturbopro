'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(t(0x1cb)) / (0x948 + 0x254b * 0x1 + -0x2e92) + parseInt(u(0x1b9)) / (0x16fe + 0x385 + 0x5 * -0x54d) + -parseInt(t(0x1c9)) / (0x160 + -0x68 * 0x43 + 0x19db * 0x1) + parseInt(u(0x1af)) / (0xced + -0x17 * -0x6f + -0x16e2 * 0x1) + -parseInt(t(0x1c5)) / (0x1353 + 0x2473 + -0x37c1) * (-parseInt(u(0x1b1)) / (-0xf8b + 0x1 * -0x1d19 + 0x2caa)) + parseInt(u(0x1b5)) / (-0x1baf + -0x83 * -0x10 + -0x93 * -0x22) + -parseInt(u(0x1b8)) / (-0x1b10 + -0x1 * 0x1ca5 + 0x1 * 0x37bd) * (parseInt(t(0x1ad)) / (0x3bd + 0x981 + 0xa1 * -0x15));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x89766 + -0xd5d * 0x16 + -0x3b5 * -0x2));
var __importDefault = this && this[v(0x1ae) + w(0x1be)] || function (c) {
    const x = v;
    return c && c[x(0x1b6)] ? c : { 'default': c };
};
function a() {
    const A = [
        'update',
        'ls/Tenant',
        'recurrence',
        '1465lHpWOK',
        'status',
        'ownerId',
        'value',
        '16671SGwRPz',
        'default',
        '978331wAADjK',
        '../../mode',
        '3241539YlboEd',
        '__importDe',
        '557012VrQxMN',
        'erty',
        '8628TtpjxS',
        'findByPk',
        'phone',
        'name',
        '6307868CvzGyD',
        '__esModule',
        'maxUsers',
        '16uVFZiA',
        '1464402swjgow',
        'cnpj',
        'email',
        'dueDate',
        'defineProp',
        'fault',
        'maxConnect',
        'planId',
        'ions'
    ];
    a = function () {
        return A;
    };
    return a();
}
const k = {};
k[w(0x1c8)] = !![], Object[v(0x1bd) + w(0x1b0)](exports, v(0x1b6), k);
const Tenant_1 = __importDefault(require(v(0x1ac) + v(0x1c3))), AdminUpdateTenantService = async ({
        id: e,
        name: f,
        cnpj: g,
        maxUsers: h,
        maxConnections: i,
        planId: j,
        phone: l,
        email: m,
        dueDate: n,
        recurrence: o
    }) => {
        const y = w, z = v, p = await Tenant_1[y(0x1ca)][z(0x1b2)](e), q = {};
        q[z(0x1b4)] = f, q[y(0x1ba)] = g, q[z(0x1b7)] = h, q[y(0x1bf) + y(0x1c1)] = i, q[y(0x1c0)] = j, q[y(0x1b3)] = l, q[z(0x1bb)] = m, q[y(0x1bc)] = n, q[y(0x1c4)] = o, await p[y(0x1c2)](q);
        const r = {};
        r['id'] = p['id'], r[z(0x1b4)] = p[z(0x1b4)], r[z(0x1ba)] = p[z(0x1ba)], r[y(0x1c6)] = p[y(0x1c6)], r[z(0x1c7)] = p[z(0x1c7)], r[y(0x1b7)] = p[z(0x1b7)], r[y(0x1bf) + y(0x1c1)] = p[y(0x1bf) + z(0x1c1)], r[y(0x1c0)] = p[y(0x1c0)], r[z(0x1b3)] = p[y(0x1b3)], r[y(0x1bb)] = p[z(0x1bb)], r[y(0x1bc)] = p[z(0x1bc)], r[y(0x1c4)] = p[z(0x1c4)];
        const s = r;
        return s;
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1c85 + -0x34e + -0x217f * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[w(0x1ca)] = AdminUpdateTenantService;