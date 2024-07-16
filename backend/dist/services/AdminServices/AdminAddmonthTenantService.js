'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x1e0)) / (-0x421 + 0x1f43 * 0x1 + -0x1cf * 0xf) * (-parseInt(q(0x1c6)) / (0x1a64 + -0x1d39 + 0x1 * 0x2d7)) + parseInt(p(0x1ca)) / (-0x250b + 0xf76 + 0x1598) * (-parseInt(p(0x1e6)) / (-0x1f03 + 0x7e4 + -0x1723 * -0x1)) + parseInt(p(0x1bc)) / (0xe11 + -0xc3 + -0xd49) * (-parseInt(q(0x1e7)) / (0x1542 + 0x1adf + -0x301b)) + -parseInt(q(0x1bf)) / (0x22a + -0xeb * 0x9 + -0x1c * -0x38) * (-parseInt(q(0x1c0)) / (0xf73 + -0x1f28 + 0xfbd)) + parseInt(p(0x1d6)) / (0xd0a * 0x1 + 0x729 + -0x142a) + parseInt(p(0x1c1)) / (0xb * -0x1cd + -0x161e + 0x3 * 0xdfd) + parseInt(q(0x1d4)) / (-0x19e0 + 0x17b6 + 0x235) * (parseInt(p(0x1cc)) / (0x224e * 0x1 + 0xb13 + -0x1 * 0x2d55));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x68953 * 0x2 + 0x110332 + -0x7 * -0x12d69));
function a() {
    const w = [
        'findByPk',
        '../../mode',
        '4lufMKH',
        '102150ibzIfG',
        'cnpj',
        'maxUsers',
        'defineProp',
        'Invalid\x20du',
        'tPMCz',
        '__importDe',
        'planId',
        '175OBSlkt',
        '\x20HH:mm:ss.',
        'add',
        '1254603MrsIWw',
        '24vZFmFF',
        '11302780GJVPBc',
        'YfnUH',
        'Tenant\x20not',
        '\x20found',
        'default',
        '1223248mLciXz',
        'toISOStrin',
        'name',
        '__esModule',
        '961830JboScC',
        'YYYY-MM-DD',
        '19284hbzmbg',
        'value',
        'moment',
        'eDate\x20form',
        'months',
        'ions',
        'maxConnect',
        'whXLv',
        '11gFmlQP',
        'email',
        '5911668kGeurx',
        'fault',
        'isValid',
        'ls/Tenant',
        'status',
        'recurrence',
        'SSS\x20Z',
        'zTrAf',
        'erty',
        'ownerId',
        '1TnMhuz',
        'phone',
        'update',
        'dueDate'
    ];
    a = function () {
        return w;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x28b * -0xa + 0x1e9 * 0xb + -0x2cb7 * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[r(0x1ba) + r(0x1d7)] || function (c) {
    const t = r;
    return c && c[t(0x1c9)] ? c : { 'default': c };
};
const k = {};
k[s(0x1cd)] = !![], Object[r(0x1ea) + r(0x1de)](exports, r(0x1c9), k);
const Tenant_1 = __importDefault(require(r(0x1e5) + r(0x1d9))), moment_1 = __importDefault(require(s(0x1ce))), AdminAddmonthTenantService = async ({tenantId: f}) => {
        const u = s, v = r, g = {};
        g[u(0x1dd)] = v(0x1c3) + u(0x1c4), g[v(0x1c2)] = v(0x1cb) + v(0x1bd) + u(0x1dc), g[u(0x1ec)] = u(0x1eb) + u(0x1cf) + 'at', g[u(0x1d3)] = v(0x1d0);
        const h = g, i = await Tenant_1[v(0x1c5)][u(0x1e4)](f);
        if (!i)
            throw new Error(h[v(0x1dd)]);
        const j = (-0x1c55 * 0x1 + -0x83f * 0x1 + -0x4 * -0x925, moment_1[u(0x1c5)])(i[u(0x1e3)], h[v(0x1c2)]);
        if (!j[v(0x1d8)]())
            throw new Error(h[v(0x1ec)]);
        const l = j[u(0x1be)](-0x136d * 0x1 + 0x997 + 0xe5 * 0xb, h[v(0x1d3)])[v(0x1c7) + 'g'](), m = {};
        m[v(0x1e3)] = l, await i[v(0x1e2)](m);
        const n = {};
        n['id'] = i['id'], n[v(0x1c8)] = i[v(0x1c8)], n[u(0x1e8)] = i[u(0x1e8)], n[u(0x1e9)] = i[v(0x1e9)], n[u(0x1d2) + u(0x1d1)] = i[v(0x1d2) + v(0x1d1)], n[u(0x1bb)] = i[u(0x1bb)], n[v(0x1e1)] = i[v(0x1e1)], n[u(0x1d5)] = i[u(0x1d5)], n[v(0x1e3)] = i[v(0x1e3)], n[v(0x1db)] = i[u(0x1db)], n[u(0x1da)] = i[u(0x1da)], n[v(0x1df)] = i[v(0x1df)];
        const o = n;
        return o;
    };
exports[r(0x1c5)] = AdminAddmonthTenantService;