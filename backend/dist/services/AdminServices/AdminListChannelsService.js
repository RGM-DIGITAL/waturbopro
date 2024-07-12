'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x209)) / (-0x1 * -0xbef + -0x65 * 0x4f + -0x19 * -0xc5) + -parseInt(p(0x206)) / (0x14ae + -0x3 * 0x8bb + -0x1d7 * -0x3) + parseInt(p(0x1f5)) / (-0x184b + 0x6 * 0x1f2 + -0x21 * -0x62) + parseInt(q(0x1f1)) / (0x3 * -0x323 + 0xf05 + -0x598) + -parseInt(q(0x207)) / (-0x193a + -0x1 * -0x83f + 0x40 * 0x44) * (-parseInt(p(0x200)) / (-0x1 * -0x225d + -0x1cd1 + 0x2 * -0x2c3)) + parseInt(q(0x204)) / (-0x6d4 + 0xa * 0x18a + -0x889) + -parseInt(q(0x1f6)) / (0x2556 + -0xff7 + -0x1557);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x13 * -0x26dd + -0x2a6d2 + 0xda01f));
function a() {
    const w = [
        '51612BMAEMj',
        '14913448ShzOQw',
        'ls/Whatsap',
        'default',
        'fault',
        'isDeleted',
        'erty',
        'ls/Tenant',
        'name',
        '__importDe',
        'model',
        '78nSXIzu',
        'xgLCw',
        'defineProp',
        'xeCkf',
        '2359812kUgEjf',
        '__esModule',
        '1349934GQGEWZ',
        '302470iPYvdA',
        'findAll',
        '1010361rPfYHQ',
        '../../mode',
        'tenant',
        'tenantId',
        'value',
        '3672780cWeRYa',
        'attributes',
        'include',
        'where'
    ];
    a = function () {
        return w;
    };
    return a();
}
var __importDefault = this && this[r(0x1fe) + s(0x1f9)] || function (c) {
    const t = s;
    return c && c[t(0x205)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x26df + -0x1fa4 + -0x54a);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[r(0x20d)] = !![], Object[r(0x202) + s(0x1fb)](exports, s(0x205), k);
const Tenant_1 = __importDefault(require(s(0x20a) + r(0x1fc))), Whatsapp_1 = __importDefault(require(r(0x20a) + r(0x1f7) + 'p')), AdminListChannelsService = async ({tenantId: g}) => {
        const u = r, v = r, h = {};
        h[u(0x201)] = v(0x20b), h[u(0x203)] = v(0x1fd);
        const i = h, j = {};
        j[v(0x1fa)] = ![];
        const l = j;
        g && (l[u(0x20c)] = g);
        const m = {};
        m[v(0x1ff)] = Tenant_1[u(0x1f8)], m['as'] = i[u(0x201)], m[u(0x1f2)] = [
            'id',
            i[u(0x203)]
        ];
        const n = {};
        n[v(0x1f4)] = l, n[u(0x1f3)] = [m];
        const o = await Whatsapp_1[u(0x1f8)][u(0x208)](n);
        return o;
    };
exports[r(0x1f8)] = AdminListChannelsService;