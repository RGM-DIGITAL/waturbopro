'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xdba + 0x53c + -0x125c);
        let h = e[f];
        return h;
    }, b(c, d);
}
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0xa8)) / (0x15 * 0x2b + 0x246e + -0x2 * 0x13fa) + -parseInt(q(0xa2)) / (-0x97 + -0x1b4a + -0xb * -0x289) + -parseInt(q(0xa1)) / (0x114 * -0x18 + 0xa3 + -0x4 * -0x650) * (parseInt(q(0xb6)) / (-0x256e + -0x1c58 + 0x322 * 0x15)) + -parseInt(q(0xb3)) / (0xa6a + -0x1c5f + 0x11fa) * (-parseInt(q(0xa9)) / (-0x23f * -0x6 + -0x4b * -0x2 + -0xe0a)) + -parseInt(q(0xb4)) / (0x1b37 + 0x4 * 0x81c + -0x3ba0) + parseInt(q(0x9b)) / (-0x1b78 + -0xea * -0x1f + -0x6b * 0x2) * (-parseInt(q(0x9a)) / (0x5 * -0x10f + -0x35 * 0xa6 + 0x13d9 * 0x2)) + parseInt(q(0xa3)) / (0x1193 + -0x1a00 + -0x877 * -0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x7bf3a + -0x584 * 0x5d + -0x269 * -0x8e1));
function a() {
    const w = [
        '1703174Fxzekx',
        '58757460FKqRsn',
        'Mesie',
        'findOne',
        'P_FOUND',
        'fault',
        '1431264OUToIe',
        '2955636vrzYPf',
        'update',
        'rs/AppErro',
        'default',
        '__importDe',
        'ls/Whatsap',
        'erty',
        'defineProp',
        'status',
        'tzKjn',
        '10hWBdvY',
        '7332563wpCALG',
        'isDeleted',
        '5779352SLnKDq',
        '__esModule',
        'where',
        'DISCONNECT',
        '11901069LVnLyi',
        '8YfNaYi',
        'tenantId',
        'ERR_NO_WAP',
        '../../erro',
        'value',
        '../../mode',
        '3AXhoDQ'
    ];
    a = function () {
        return w;
    };
    return a();
}
var __importDefault = this && this[r(0xad) + r(0xa7)] || function (c) {
    const t = s;
    return c && c[t(0xb7)] ? c : { 'default': c };
};
const k = {};
k[s(0x9f)] = !![], Object[r(0xb0) + r(0xaf)](exports, s(0xb7), k);
const Whatsapp_1 = __importDefault(require(r(0xa0) + s(0xae) + 'p')), AppError_1 = __importDefault(require(r(0x9e) + s(0xab) + 'r')), DeleteWhatsApprService = async (g, h) => {
        const u = s, v = r, i = {};
        i[u(0xb2)] = u(0x9d) + v(0xa6), i[u(0xa4)] = u(0xb9) + 'ED';
        const j = i, l = {};
        l['id'] = g, l[v(0x9c)] = h;
        const m = {};
        m[v(0xb8)] = l;
        const n = await Whatsapp_1[v(0xac)][u(0xa5)](m);
        if (!n)
            throw new AppError_1[(v(0xac))](j[u(0xb2)], -0x1fee + -0xf9 * -0x11 + -0xb * -0x18b);
        const o = {};
        o[u(0xb5)] = !![], o[v(0xb1)] = j[v(0xa4)], await n[v(0xaa)](o);
    };
exports[s(0xac)] = DeleteWhatsApprService;