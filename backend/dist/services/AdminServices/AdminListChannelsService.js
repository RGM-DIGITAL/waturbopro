'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x159e + 0x313 * -0x3 + -0x1 * -0x2062);
        let h = e[f];
        return h;
    }, b(c, d);
}
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x1a8)) / (-0x5 * 0x7a6 + 0x2a2 * -0x1 + -0x5d7 * -0x7) * (parseInt(q(0x19e)) / (0x1d27 + 0x8a2 + -0x25c7)) + parseInt(q(0x1a0)) / (-0x1 * 0xcb5 + 0xb57 * -0x2 + 0x17 * 0x18a) * (parseInt(p(0x196)) / (0x3ec + 0x651 + -0xa39)) + -parseInt(q(0x18d)) / (-0x10ff + 0xd6 * 0x6 + 0x100 * 0xc) + parseInt(q(0x199)) / (0x1 * 0x244c + 0x3dc + 0x3a6 * -0xb) + parseInt(p(0x18c)) / (-0x2a5 * -0x7 + 0x3 * -0x9fb + -0x7 * -0x1a3) + parseInt(q(0x191)) / (-0x1d72 + -0x1316 + 0x3090) + -parseInt(q(0x1a3)) / (-0x2022 + -0x2fa + 0x3 * 0xbb7);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2a19e + -0x76f5d + 0x264d * 0x62));
var __importDefault = this && this[r(0x19a) + s(0x18b)] || function (c) {
    const t = r;
    return c && c[t(0x1a4)] ? c : { 'default': c };
};
function a() {
    const w = [
        '1713418OgnVeq',
        '2558545ZFdWBh',
        'defineProp',
        'ls/Tenant',
        'findAll',
        '2789392WaueWR',
        'model',
        'default',
        'tenantId',
        'attributes',
        '200156XvqstU',
        'name',
        'isDeleted',
        '2951808LwRocb',
        '__importDe',
        '../../mode',
        'include',
        'where',
        '4SBSqjF',
        'DWQOd',
        '15XozlIl',
        'erty',
        'ls/Whatsap',
        '1019313vRUWQG',
        '__esModule',
        'fkUHZ',
        'value',
        'tenant',
        '204731ifFEuY',
        'fault'
    ];
    a = function () {
        return w;
    };
    return a();
}
const k = {};
k[s(0x1a6)] = !![], Object[r(0x18e) + s(0x1a1)](exports, r(0x1a4), k);
const Tenant_1 = __importDefault(require(r(0x19b) + r(0x18f))), Whatsapp_1 = __importDefault(require(s(0x19b) + r(0x1a2) + 'p')), AdminListChannelsService = async ({tenantId: g}) => {
        const u = r, v = s, h = {};
        h[u(0x1a5)] = u(0x1a7), h[u(0x19f)] = v(0x197);
        const i = h, j = {};
        j[v(0x198)] = ![];
        const l = j;
        g && (l[u(0x194)] = g);
        const m = {};
        m[v(0x192)] = Tenant_1[u(0x193)], m['as'] = i[v(0x1a5)], m[v(0x195)] = [
            'id',
            i[v(0x19f)]
        ];
        const n = {};
        n[v(0x19d)] = l, n[v(0x19c)] = [m];
        const o = await Whatsapp_1[v(0x193)][v(0x190)](n);
        return o;
    };
exports[s(0x193)] = AdminListChannelsService;