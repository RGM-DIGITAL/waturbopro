'use strict';
const q = b, r = b;
function a() {
    const v = [
        '255894dWATqY',
        'default',
        'where',
        '5JBjjMF',
        'erty',
        'fault',
        '16Nsngxx',
        '23457jAZOtC',
        '__importDe',
        'apis',
        '1676euhWtR',
        'ls/ApiConf',
        '55tIVCna',
        'defineProp',
        '12852876XtCteF',
        'value',
        '__esModule',
        '1174356OQoLIf',
        'name',
        'findAll',
        'sioSE',
        '485710XoKiIp',
        'ASC',
        '199896sKkDNw',
        'wlnTD',
        'tenantId',
        '../../mode',
        '313PfKmXE',
        '48BnpGsW',
        'order'
    ];
    a = function () {
        return v;
    };
    return a();
}
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(o(0x91)) / (0xcee * 0x3 + -0x20b8 + 0x1 * -0x611) * (parseInt(o(0x9e)) / (-0x25 * -0xcd + -0x181 + -0xe0f * 0x2)) + -parseInt(p(0x8d)) / (-0x681 + -0x1c8a + 0x7 * 0x502) * (parseInt(p(0x9a)) / (0xb10 + 0x391 + -0xe9d)) + parseInt(o(0x97)) / (-0x23f2 + 0x2 * 0x1d7 + 0x2049) * (parseInt(p(0x94)) / (0x1200 + 0x946 * -0x2 + 0x92)) + parseInt(o(0x9b)) / (0x9 * -0x13a + -0x196d + 0x247e) * (-parseInt(o(0x92)) / (-0x1fb1 + -0x26 * -0xd4 + 0x41)) + -parseInt(o(0x87)) / (-0xe67 + -0x7b2 * -0x4 + -0x1 * 0x1058) + parseInt(p(0x8b)) / (0xbb * -0x23 + 0x23bd * -0x1 + 0xf56 * 0x4) * (-parseInt(p(0xa0)) / (0x9c5 * -0x1 + -0x1aac + 0x74c * 0x5)) + parseInt(p(0xa2)) / (0x1b25 + 0x1ae5 + -0x2 * 0x1aff);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x3a363 + 0x475a * -0x1 + 0x31 * -0x24a));
var __importDefault = this && this[q(0x9c) + r(0x99)] || function (c) {
    const s = r;
    return c && c[s(0xa4)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2 * 0x38f + 0x25c4 + -0x1e1f);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[r(0xa3)] = !![], Object[r(0xa1) + r(0x98)](exports, r(0xa4), k);
const ApiConfig_1 = __importDefault(require(r(0x90) + q(0x9f) + 'ig')), ListApiConfigService = async ({tenantId: g}) => {
        const t = q, u = r, h = {};
        h[t(0x8a)] = u(0x88), h[t(0x8e)] = t(0x8c);
        const i = h, j = {};
        j[t(0x8f)] = g;
        const l = {};
        l[t(0x96)] = j, l[t(0x93)] = [[
                i[u(0x8a)],
                i[u(0x8e)]
            ]];
        const m = await ApiConfig_1[u(0x95)][t(0x89)](l), n = {};
        return n[t(0x9d)] = m, n;
    };
exports[r(0x95)] = ListApiConfigService;