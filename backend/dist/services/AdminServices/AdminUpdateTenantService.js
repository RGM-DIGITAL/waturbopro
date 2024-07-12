'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(t(0x11d)) / (-0x2 * -0x1286 + -0x1ce7 + -0x824) + parseInt(u(0x125)) / (0x1de + 0x680 + -0x14 * 0x6b) * (-parseInt(u(0x13a)) / (0x2454 + 0x17e * 0x6 + -0x2d45)) + -parseInt(u(0x11f)) / (-0xbec + -0x14ea * -0x1 + -0x8fa) + parseInt(t(0x11c)) / (-0x1260 + 0x1052 * 0x1 + 0x213 * 0x1) * (parseInt(t(0x121)) / (-0x90a + 0x1297 * -0x1 + 0x1 * 0x1ba7)) + parseInt(t(0x12d)) / (-0x49c * -0x4 + -0x1d * 0x10b + 0xbd6) + -parseInt(t(0x131)) / (-0x264e + -0x991 * -0x1 + 0x5 * 0x5c1) + -parseInt(u(0x128)) / (0x11a1 + 0x16f8 + -0x76 * 0x58) * (-parseInt(t(0x130)) / (0x2702 + 0x14d3 + -0x3bcb));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x7ce15 + -0x12d * -0xe9 + 0xaf703));
function a() {
    const A = [
        'phone',
        '25RNqMpR',
        '245126WdnydJ',
        'planId',
        '550532gaRfek',
        'maxUsers',
        '576966sBVUWr',
        '../../mode',
        'dueDate',
        'findByPk',
        '238ubzYRO',
        'name',
        'ions',
        '9TUkMmD',
        'value',
        '__importDe',
        'cnpj',
        'recurrence',
        '3809092XKavEZ',
        'status',
        'maxConnect',
        '2347990iBuXLM',
        '538056rtYmeH',
        'ownerId',
        'update',
        'erty',
        'fault',
        'email',
        '__esModule',
        'defineProp',
        'default',
        '13425WJExNz',
        'ls/Tenant'
    ];
    a = function () {
        return A;
    };
    return a();
}
var __importDefault = this && this[v(0x12a) + v(0x135)] || function (c) {
    const x = v;
    return c && c[x(0x137)] ? c : { 'default': c };
};
const k = {};
k[v(0x129)] = !![], Object[v(0x138) + w(0x134)](exports, w(0x137), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x3d * -0x35 + 0x153e * 0x1 + -0x782);
        let h = e[f];
        return h;
    }, b(c, d);
}
const Tenant_1 = __importDefault(require(v(0x122) + w(0x13b))), AdminUpdateTenantService = async ({
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
        const y = w, z = w, p = await Tenant_1[y(0x139)][z(0x124)](e), q = {};
        q[y(0x126)] = f, q[y(0x12b)] = g, q[y(0x120)] = h, q[y(0x12f) + y(0x127)] = i, q[y(0x11e)] = j, q[y(0x11b)] = l, q[y(0x136)] = m, q[z(0x123)] = n, q[y(0x12c)] = o, await p[z(0x133)](q);
        const r = {};
        r['id'] = p['id'], r[y(0x126)] = p[y(0x126)], r[y(0x12b)] = p[z(0x12b)], r[z(0x12e)] = p[z(0x12e)], r[z(0x132)] = p[y(0x132)], r[y(0x120)] = p[z(0x120)], r[z(0x12f) + z(0x127)] = p[y(0x12f) + z(0x127)], r[y(0x11e)] = p[y(0x11e)], r[y(0x11b)] = p[z(0x11b)], r[z(0x136)] = p[z(0x136)], r[z(0x123)] = p[y(0x123)], r[y(0x12c)] = p[z(0x12c)];
        const s = r;
        return s;
    };
exports[w(0x139)] = AdminUpdateTenantService;