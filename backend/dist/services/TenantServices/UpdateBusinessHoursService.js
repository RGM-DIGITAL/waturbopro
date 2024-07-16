'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0x151)) / (0x2 * 0x12fb + 0x1687 + -0x3c7c) * (parseInt(r(0x14a)) / (-0x1 * 0x2551 + 0x853 + -0x74 * -0x40)) + -parseInt(r(0x14d)) / (0x2315 + 0x195 * -0x7 + -0x17ff) * (parseInt(s(0x145)) / (-0x14f6 + 0x1239 + 0x2c1)) + parseInt(s(0x137)) / (-0x157b + 0x1687 + -0x107) * (parseInt(s(0x13c)) / (-0x1984 * 0x1 + 0x93 * -0x8 + 0x1e22)) + parseInt(s(0x140)) / (-0xf26 + 0x9d * -0xd + 0x1 * 0x1726) * (parseInt(s(0x144)) / (-0x98 * 0x6 + 0x178d + 0x27 * -0x83)) + -parseInt(r(0x147)) / (0x440 * 0x7 + -0x4f6 + -0x1 * 0x18c1) * (parseInt(s(0x141)) / (-0x1 * -0x1ab + 0x1 * -0xc1 + -0xe0)) + parseInt(s(0x13d)) / (0x209d + 0x1db5 + -0x3e47) + -parseInt(r(0x136)) / (-0x2282 + 0x1 * -0x17e3 + 0x3a71) * (parseInt(s(0x134)) / (-0x20c5 * -0x1 + -0x1fff + -0xb9));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x16876f * -0x1 + -0xcc7b + -0x2 * 0x4e1d2));
function a() {
    const y = [
        '__importDe',
        '178507zUanGP',
        '2056470Squysf',
        'messageBus',
        'findOne',
        '408ZMDWEs',
        '4JUcdTV',
        'update',
        '9ZgiLBm',
        'value',
        'kjyGb',
        '2ILUHOP',
        'rnPfp',
        'ERR_NO_TEN',
        '1945743cFGMLW',
        'rs/AppErro',
        'urs',
        '__esModule',
        '1227461rDkaYC',
        'reload',
        'fault',
        'erty',
        '../../erro',
        'ls/Tenant',
        'DTUrJ',
        '../../mode',
        'ANT_FOUND',
        '559XNAKlX',
        'inessHours',
        '724548gGBAjG',
        '12690ZVgeON',
        'where',
        'defineProp',
        'businessHo',
        'default',
        '2232KlZqiK',
        '8388435GBsdFj',
        'attributes'
    ];
    a = function () {
        return y;
    };
    return a();
}
var __importDefault = this && this[t(0x13f) + u(0x12d)] || function (c) {
    const v = u;
    return c && c[v(0x150)] ? c : { 'default': c };
};
const k = {};
k[u(0x148)] = !![], Object[u(0x139) + t(0x12e)](exports, u(0x150), k);
const AppError_1 = __importDefault(require(u(0x12f) + t(0x14e) + 'r')), Tenant_1 = __importDefault(require(u(0x132) + u(0x130))), UpdateBusinessHoursService = async ({
        businessHours: h,
        tenantId: i
    }) => {
        const w = u, x = u, j = {};
        j[w(0x149)] = x(0x14c) + x(0x133), j[x(0x14b)] = x(0x13a) + x(0x14f), j[w(0x131)] = x(0x142) + x(0x135);
        const l = j, m = {};
        m['id'] = i;
        const n = {};
        n[w(0x138)] = m;
        const o = await Tenant_1[x(0x13b)][w(0x143)](n);
        if (!o)
            throw new AppError_1[(w(0x13b))](l[x(0x149)], 0x2 * -0x715 + 0x28 * 0xef + -0xa * 0x229);
        const p = {};
        p[x(0x13a) + w(0x14f)] = h, await o[w(0x146)](p);
        const q = {};
        return q[x(0x13e)] = [
            l[x(0x14b)],
            l[w(0x131)]
        ], await o[x(0x12c)](q), o;
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x8 * 0x3b7 + -0xb5f * 0x1 + -0x15d * -0x1f);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[t(0x13b)] = UpdateBusinessHoursService;