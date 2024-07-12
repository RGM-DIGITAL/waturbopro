'use strict';
function a() {
    const y = [
        '188432JMKRLd',
        'erty',
        'value',
        'messageBus',
        'rs/AppErro',
        '459165LIenpj',
        'ERR_NO_TEN',
        '6651sxgehm',
        'ls/Tenant',
        '__importDe',
        '222790CcqxWc',
        '55040lsDFHL',
        '6KxDKXo',
        'NKhka',
        'ANT_FOUND',
        '../../mode',
        '__esModule',
        'defineProp',
        'fault',
        '7556VdLpUa',
        'findOne',
        'attributes',
        'default',
        'mLuPO',
        '235TEvnOT',
        'hzSnu',
        '870FISwqO',
        'where',
        'update',
        'businessHo',
        'inessHours',
        'urs',
        '../../erro',
        '1696681hqMXNS',
        'reload'
    ];
    a = function () {
        return y;
    };
    return a();
}
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0x158)) / (0x50b * 0x4 + -0x1f6f + -0x2 * -0x5a2) + -parseInt(r(0x162)) / (0x2 * 0x1104 + 0xe * -0x2e + -0x1f82) + parseInt(s(0x15d)) / (0x667 + 0x1bed + -0x2251) + parseInt(s(0x148)) / (0x1bc8 + 0x1ee8 + -0x3aac) * (parseInt(s(0x14d)) / (0x39e * 0x7 + -0xe9 + 0x1c * -0xdf)) + -parseInt(s(0x164)) / (-0x502 * 0x4 + 0x2223 + -0xe15) * (-parseInt(s(0x156)) / (0x2 * -0x2bd + -0x20a2 + -0xd * -0x2ef)) + parseInt(r(0x163)) / (-0x14c2 + 0x2670 + -0x11a6) + parseInt(r(0x15f)) / (0x1491 + 0x20f0 + -0x3578) * (-parseInt(s(0x14f)) / (0x8dc + 0xc1c + -0x14ee));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1c01a + 0x25ab7 * 0x1 + -0x1 * 0x22acc));
var __importDefault = this && this[t(0x161) + u(0x147)] || function (c) {
    const v = u;
    return c && c[v(0x145)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x84d + -0x1eef * -0x1 + -0x155f * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[u(0x15a)] = !![], Object[t(0x146) + u(0x159)](exports, t(0x145), k);
const AppError_1 = __importDefault(require(t(0x155) + u(0x15c) + 'r')), Tenant_1 = __importDefault(require(u(0x144) + u(0x160))), UpdateMessageBusinessHoursService = async ({
        messageBusinessHours: h,
        tenantId: i
    }) => {
        const w = t, x = u, j = {};
        j[w(0x14e)] = x(0x15e) + w(0x143), j[w(0x165)] = x(0x152) + w(0x154), j[w(0x14c)] = w(0x15b) + w(0x153);
        const l = j, m = {};
        m['id'] = i;
        const n = {};
        n[x(0x150)] = m;
        const o = await Tenant_1[x(0x14b)][x(0x149)](n);
        if (!o)
            throw new AppError_1[(w(0x14b))](l[w(0x14e)], -0x5 * -0x385 + 0x1 * -0x2340 + 0x133b);
        const p = {};
        p[w(0x15b) + x(0x153)] = h, await o[w(0x151)](p);
        const q = {};
        return q[x(0x14a)] = [
            l[x(0x165)],
            l[x(0x14c)]
        ], await o[w(0x157)](q), o;
    };
exports[u(0x14b)] = UpdateMessageBusinessHoursService;