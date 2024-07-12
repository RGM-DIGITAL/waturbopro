'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xb1f + 0x2376 + -0x2d89);
        let h = e[f];
        return h;
    }, b(c, d);
}
const z = b, A = b;
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(x(0x11a)) / (-0xca7 + 0x2631 + 0x883 * -0x3) + parseInt(x(0x11c)) / (0x11 * -0x95 + 0x3 * -0x6dd + 0x1e7e) + -parseInt(x(0x118)) / (-0x1c2c * -0x1 + 0x1e23 + -0x3a4c * 0x1) * (-parseInt(x(0x117)) / (-0x49d + 0x819 + -0x378)) + -parseInt(x(0x12e)) / (-0x75a + 0x1 * 0x1c8e + -0x13f * 0x11) * (-parseInt(x(0x12d)) / (0x5 * -0x45d + -0x1019 + 0x25f0)) + -parseInt(x(0x126)) / (0x24c1 * -0x1 + 0x1 * -0x5a2 + -0xb2 * -0x3d) + -parseInt(x(0x128)) / (0x10c5 + -0x1 * 0xa1 + -0x2 * 0x80e) * (parseInt(y(0x113)) / (0x3 * 0xa63 + -0xdb + -0x1e45)) + parseInt(x(0x123)) / (-0x1989 + 0x1 * 0x24f7 + 0x4 * -0x2d9);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x572d2 * -0x1 + -0x4a948 + 0x1754b6));
function a() {
    const E = [
        'userId',
        'sessionId',
        'urlMessage',
        '36884NIuOXw',
        '111utuZln',
        'where',
        '1190647EHrMlr',
        'zJUFw',
        '385172EqWhYO',
        'ERR_API_CO',
        'OUND',
        'findOne',
        'tenantId',
        'update',
        'ls/ApiConf',
        '17100550FqAHOQ',
        'rs/AppErro',
        '../../erro',
        '7834533EoyYSd',
        'value',
        '12359896PmnKaY',
        '__importDe',
        '../../mode',
        'name',
        'reload',
        '6BnLmSb',
        '481005cqXHNr',
        'defineProp',
        'erty',
        '__esModule',
        'default',
        'urlService',
        'NFIG_NOT_F',
        'Status',
        'fault',
        'isActive',
        'authToken',
        '9AjeIiW'
    ];
    a = function () {
        return E;
    };
    return a();
}
var __importDefault = this && this[z(0x129) + z(0x110)] || function (c) {
    const B = z;
    return c && c[B(0x131)] ? c : { 'default': c };
};
const k = {};
k[z(0x127)] = !![], Object[z(0x12f) + z(0x130)](exports, A(0x131), k);
const AppError_1 = __importDefault(require(A(0x125) + A(0x124) + 'r')), ApiConfig_1 = __importDefault(require(A(0x12a) + z(0x122) + 'ig')), UpdateApiConfigService = async ({
        apiData: g,
        apiId: h,
        tenantId: i
    }) => {
        const C = z, D = z, j = {};
        j[C(0x11b)] = C(0x11d) + C(0x10e) + C(0x11e);
        const l = j, m = {};
        m['id'] = h, m[C(0x120)] = i;
        const n = {};
        n[C(0x119)] = m;
        const o = await ApiConfig_1[C(0x10c)][D(0x11f)](n);
        if (!o)
            throw new AppError_1[(D(0x10c))](l[C(0x11b)], 0x14e + 0xa * 0x201 + -0x13c4);
        const {
                name: p,
                sessionId: q,
                urlServiceStatus: r,
                urlMessageStatus: s,
                userId: t,
                authToken: u,
                isActive: v
            } = g, w = {};
        return w[D(0x12b)] = p, w[C(0x115)] = q, w[C(0x10d) + D(0x10f)] = r, w[D(0x116) + C(0x10f)] = s, w[D(0x114)] = t, w[D(0x112)] = u, w[D(0x111)] = v, await o[C(0x121)](w), await o[D(0x12c)](), o;
    };
exports[A(0x10c)] = UpdateApiConfigService;