'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0x1c9)) / (-0x16f4 * -0x1 + -0x132 * -0x7 + -0x1f51) + parseInt(m(0x1c2)) / (-0x1655 * 0x1 + -0x626 * 0x2 + 0x1 * 0x22a3) * (-parseInt(m(0x1c5)) / (-0x1f * 0x13f + 0x223a + -0xa * -0x71)) + parseInt(l(0x1be)) / (-0xce5 * -0x1 + -0x1 * -0xce3 + -0x19c4) * (parseInt(m(0x1c8)) / (0x25 + 0x1 * 0x38f + 0x3af * -0x1)) + -parseInt(m(0x1bb)) / (-0x221f * -0x1 + -0xbef + -0x162a * 0x1) * (-parseInt(l(0x1cb)) / (-0x2 * 0x29b + 0x1df2 + -0x5 * 0x4f1)) + parseInt(l(0x1c0)) / (-0x8df + 0x3 * 0x515 + -0xcb * 0x8) + parseInt(m(0x1cc)) / (0x1 * -0x1303 + 0x1181 * 0x1 + 0x5 * 0x4f) + -parseInt(m(0x1c3)) / (0x2226 + 0x1087 + -0x32a3);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x737 * -0x16b + -0x131e89 + -0x6074 * -0x3b));
var __importDefault = this && this[n(0x1ce) + n(0x1bc)] || function (c) {
    const p = n;
    return c && c[p(0x1b8)] ? c : { 'default': c };
};
const k = {};
function a() {
    const s = [
        'findByPk',
        '77704TlcOvp',
        'erty',
        '13873488qUKSPD',
        'update',
        '2akhEnI',
        '12567260JqSTQR',
        'ownerId',
        '1927497kQCgDI',
        'ls/Tenant',
        'default',
        '75NTLOfJ',
        '680476zEKzjB',
        'cnpj',
        '7gVBCpn',
        '3566448bGZhRT',
        'name',
        '__importDe',
        'defineProp',
        'value',
        '__esModule',
        'status',
        '../../mode',
        '6192846YCnUbI',
        'fault'
    ];
    a = function () {
        return s;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x80 * -0x1e + 0x143 * -0x1b + 0x3 * 0x10ed);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[n(0x1b7)] = !![], Object[o(0x1b6) + n(0x1bf)](exports, o(0x1b8), k);
const Tenant_1 = __importDefault(require(o(0x1ba) + n(0x1c6))), AdminStatusTenant = async ({
        id: e,
        status: f
    }) => {
        const q = n, r = n, g = await Tenant_1[q(0x1c7)][q(0x1bd)](e), h = {};
        h[r(0x1b9)] = f, await g[q(0x1c1)](h);
        const i = {};
        i['id'] = g['id'], i[r(0x1cd)] = g[q(0x1cd)], i[r(0x1ca)] = g[q(0x1ca)], i[q(0x1b9)] = f, i[r(0x1c4)] = g[r(0x1c4)];
        const j = i;
        return j;
    };
exports[o(0x1c7)] = AdminStatusTenant;