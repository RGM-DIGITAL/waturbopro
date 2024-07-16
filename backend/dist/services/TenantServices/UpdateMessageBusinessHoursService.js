'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0x10e)) / (-0xa1 * -0x15 + -0x1827 * -0x1 + -0x1 * 0x255b) + parseInt(s(0xef)) / (0x150d + 0x681 + -0x1b8c) + -parseInt(r(0x108)) / (-0x1f93 + 0x4 * 0x53 + -0x1e4a * -0x1) * (-parseInt(r(0x105)) / (0x12f6 + -0x286 + 0x4 * -0x41b)) + -parseInt(s(0xed)) / (0x1f * 0x11 + 0x5d5 * 0x5 + -0x1f33) + -parseInt(r(0x10a)) / (-0x10 * -0x6b + 0x14e7 * 0x1 + -0x1b91) * (parseInt(s(0xf6)) / (0x4fa * 0x7 + -0x242b + 0x15c)) + parseInt(r(0x103)) / (0x2694 + -0x1f21 + -0x76b) * (-parseInt(s(0x109)) / (0x17f7 + -0x24 * 0x78 + -0x70e)) + parseInt(s(0xf4)) / (0x3d2 * 0x7 + 0x3 * 0x5d5 + 0x1 * -0x2c33);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x9a69 * 0x1 + 0x7 * 0xff09 + -0x31094));
var __importDefault = this && this[t(0xf2) + t(0xf8)] || function (c) {
    const v = t;
    return c && c[v(0xf3)] ? c : { 'default': c };
};
const k = {};
function a() {
    const y = [
        'value',
        'defineProp',
        'ANT_FOUND',
        'where',
        'attributes',
        'businessHo',
        'default',
        'rs/AppErro',
        'inessHours',
        'CRJcJ',
        '418352NgakIp',
        'messageBus',
        '96JUHyQM',
        '../../mode',
        'tJCLl',
        '53979Ounydt',
        '45UTLqwM',
        '6VGilLj',
        'ls/Tenant',
        'ERR_NO_TEN',
        'findOne',
        '126844MiwgPi',
        'gLkRC',
        '2153000SSydIc',
        'urs',
        '44408JolKSR',
        'update',
        'erty',
        '__importDe',
        '__esModule',
        '7241640hgGaBh',
        '../../erro',
        '445102jwLzIl',
        'reload',
        'fault'
    ];
    a = function () {
        return y;
    };
    return a();
}
k[u(0xf9)] = !![], Object[u(0xfa) + u(0xf1)](exports, t(0xf3), k);
const AppError_1 = __importDefault(require(t(0xf5) + u(0x100) + 'r')), Tenant_1 = __importDefault(require(t(0x106) + t(0x10b))), UpdateMessageBusinessHoursService = async ({
        messageBusinessHours: h,
        tenantId: i
    }) => {
        const w = t, x = u, j = {};
        j[w(0xec)] = x(0x10c) + x(0xfb), j[x(0x102)] = w(0xfe) + w(0xee), j[x(0x107)] = w(0x104) + w(0x101);
        const l = j, m = {};
        m['id'] = i;
        const n = {};
        n[x(0xfc)] = m;
        const o = await Tenant_1[w(0xff)][w(0x10d)](n);
        if (!o)
            throw new AppError_1[(w(0xff))](l[w(0xec)], -0xaee + 0xb6 + 0x2 * 0x5e6);
        const p = {};
        p[w(0x104) + x(0x101)] = h, await o[x(0xf0)](p);
        const q = {};
        return q[w(0xfd)] = [
            l[x(0x102)],
            l[w(0x107)]
        ], await o[w(0xf7)](q), o;
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1270 + 0xd37 + -0x1ebb * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[t(0xff)] = UpdateMessageBusinessHoursService;