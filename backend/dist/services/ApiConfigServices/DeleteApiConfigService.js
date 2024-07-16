'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0x12a)) / (-0x23ec + 0x1 * 0x170e + 0xcdf) * (parseInt(o(0x123)) / (0x9bd + 0x1150 * -0x2 + -0x1 * -0x18e5)) + parseInt(n(0x12e)) / (0x2b * -0x10 + 0x20 * 0x11c + -0x20cd) * (-parseInt(n(0x134)) / (-0x186e * -0x1 + -0x872 + -0x7 * 0x248)) + parseInt(n(0x13c)) / (0x39e * 0x7 + 0x1 * -0x13e6 + -0x3 * 0x1cd) * (parseInt(o(0x13a)) / (-0x19ba + 0xe3b + 0x3 * 0x3d7)) + parseInt(o(0x136)) / (0x7b * 0x2f + 0x1 * 0x1ee3 + 0x1 * -0x3571) + parseInt(n(0x12b)) / (-0x884 + -0x1 * -0x1472 + 0x1 * -0xbe6) * (parseInt(n(0x133)) / (0x375 + 0xdfe + 0x6 * -0x2e7)) + parseInt(n(0x11f)) / (-0x1aea + 0xcf2 * 0x1 + 0x2 * 0x701) + parseInt(n(0x127)) / (0x26aa + -0x1 * 0x147d + -0x1222) * (-parseInt(o(0x128)) / (0x1a96 + 0xb6e + 0x48 * -0x87));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x2c5 * -0x6 + -0x1615b7 * -0x1 + -0xa4be1));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x103 + -0x2b1 + 0x2cd);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[p(0x131) + q(0x124)] || function (c) {
    const r = q;
    return c && c[r(0x12f)] ? c : { 'default': c };
};
const k = {};
function a() {
    const u = [
        '1006cjTnjc',
        'fault',
        'findOne',
        'ls/ApiConf',
        '2299825vMEHvW',
        '24XzSEMI',
        'destroy',
        '3052KMgsfd',
        '15000UAlUrN',
        'OUND',
        '../../mode',
        '4737QebYgu',
        '__esModule',
        'jhKQj',
        '__importDe',
        'erty',
        '2637plxGkO',
        '2284pdqvBe',
        'ERR_API_CO',
        '9830765VnSyYe',
        '../../erro',
        'tenantId',
        'value',
        '1500xwUpMH',
        'default',
        '24730llSaYd',
        'where',
        '4329570xNIvFR',
        'rs/AppErro',
        'defineProp',
        'NFIG_NOT_F'
    ];
    a = function () {
        return u;
    };
    return a();
}
k[p(0x139)] = !![], Object[q(0x121) + q(0x132)](exports, q(0x12f), k);
const AppError_1 = __importDefault(require(q(0x137) + q(0x120) + 'r')), ApiConfig_1 = __importDefault(require(p(0x12d) + p(0x126) + 'ig')), DeleteApiConfigService = async ({
        apiId: f,
        tenantId: g
    }) => {
        const s = q, t = q, h = {};
        h[s(0x130)] = t(0x135) + s(0x122) + s(0x12c);
        const i = h, j = {};
        j['id'] = f, j[t(0x138)] = g;
        const l = {};
        l[s(0x13d)] = j;
        const m = await ApiConfig_1[t(0x13b)][t(0x125)](l);
        if (!m)
            throw new AppError_1[(t(0x13b))](i[t(0x130)], -0x1eae + -0x17e9 + 0x3 * 0x12b9);
        await m[t(0x129)]();
    };
exports[q(0x13b)] = DeleteApiConfigService;