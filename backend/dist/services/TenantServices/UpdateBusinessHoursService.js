'use strict';
const t = b, u = b;
function a() {
    const y = [
        'update',
        'HZtci',
        '6741785lKBArm',
        'where',
        '../../erro',
        'attributes',
        'ANT_FOUND',
        'defineProp',
        '2473302lxMiWa',
        '__importDe',
        'ERR_NO_TEN',
        '6169541pMalYK',
        'value',
        'reload',
        'inessHours',
        '__esModule',
        'urs',
        'TYtbB',
        '7238604IzXXst',
        '2439996CiCDpL',
        '4cCyENj',
        'messageBus',
        'businessHo',
        'fault',
        'findOne',
        '78234vEaeyR',
        '../../mode',
        'HzvwA',
        'ls/Tenant',
        'rs/AppErro',
        '10080904DlscQy',
        'erty',
        'default'
    ];
    a = function () {
        return y;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1772 * 0x1 + 0x13f9 + 0x445);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0xe4)) / (0x1 * -0x200e + -0x13 * 0x125 + 0x35ce) + parseInt(r(0xd3)) / (0x2 * -0xb23 + -0xd25 + 0x236d) + -parseInt(r(0xde)) / (0x490 + -0x19f0 + 0x19 * 0xdb) + parseInt(r(0xdf)) / (-0xc * 0x33 + -0x207 * -0x3 + -0x3ad) * (parseInt(s(0xcd)) / (0x81 * -0x39 + 0xd4 * 0xc + 0x1d * 0xa6)) + parseInt(s(0xdd)) / (0x199b + 0x186c + -0x3201) + -parseInt(r(0xd6)) / (0x3 * -0xbf + -0x2 * 0x12c0 + 0x27c4) + -parseInt(r(0xe9)) / (0x2001 + 0x53e + -0x1 * 0x2537);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x149a2 * 0xc + 0x1 * -0xda96 + -0x30682));
var __importDefault = this && this[t(0xd4) + u(0xe2)] || function (c) {
    const v = u;
    return c && c[v(0xda)] ? c : { 'default': c };
};
const k = {};
k[t(0xd7)] = !![], Object[t(0xd2) + u(0xea)](exports, u(0xda), k);
const AppError_1 = __importDefault(require(u(0xcf) + u(0xe8) + 'r')), Tenant_1 = __importDefault(require(u(0xe5) + u(0xe7))), UpdateBusinessHoursService = async ({
        businessHours: h,
        tenantId: i
    }) => {
        const w = u, x = u, j = {};
        j[w(0xdc)] = x(0xd5) + w(0xd1), j[x(0xcc)] = x(0xe1) + x(0xdb), j[x(0xe6)] = w(0xe0) + x(0xd9);
        const l = j, m = {};
        m['id'] = i;
        const n = {};
        n[x(0xce)] = m;
        const o = await Tenant_1[x(0xeb)][x(0xe3)](n);
        if (!o)
            throw new AppError_1[(x(0xeb))](l[w(0xdc)], 0x630 + 0x1 * -0x16d9 + -0x7 * -0x29b);
        const p = {};
        p[x(0xe1) + w(0xdb)] = h, await o[w(0xec)](p);
        const q = {};
        return q[w(0xd0)] = [
            l[x(0xcc)],
            l[x(0xe6)]
        ], await o[x(0xd8)](q), o;
    };
exports[t(0xeb)] = UpdateBusinessHoursService;