'use strict';
const z = b, A = b;
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(x(0x188)) / (0x381 + -0x1ae4 + 0x6 * 0x3e6) * (-parseInt(y(0x19f)) / (-0xa * -0x2e3 + -0x177f + -0x55d)) + parseInt(x(0x198)) / (0x1f2a * 0x1 + 0x2122 + -0x4049) + parseInt(x(0x1a1)) / (0x1 * -0x7f + 0x346 + -0x2c3) * (parseInt(y(0x18c)) / (0x3 * 0x5b2 + 0x2409 + -0x351a)) + parseInt(x(0x191)) / (0xdf1 + -0x611 * 0x4 + 0xa59 * 0x1) * (-parseInt(x(0x187)) / (-0xd65 + 0x39e + 0x9ce)) + -parseInt(y(0x190)) / (-0x22a2 + 0x35 * -0x55 + -0x3443 * -0x1) * (parseInt(y(0x19e)) / (0x25ab + 0x18b7 + 0xb * -0x5ab)) + -parseInt(x(0x183)) / (0x106f + -0x935 + -0x1cc * 0x4) + parseInt(y(0x185)) / (0x2ab * 0x6 + 0x19cd + 0x1 * -0x29c4) * (parseInt(y(0x181)) / (0x1885 + -0x1c9f + -0x3b * -0x12));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x5f09a + -0x9c80 * 0x9 + 0xee901));
function a() {
    const E = [
        '__importDe',
        '1647349iwwxZb',
        '__esModule',
        '7dHSgcG',
        '436629mioBhY',
        'Status',
        'urlMessage',
        'urlService',
        '3845IqmqWn',
        'update',
        'rs/AppErro',
        'erty',
        '407792LkwcxQ',
        '682062nlyStM',
        'name',
        'reload',
        'defineProp',
        'where',
        'ERR_API_CO',
        'sessionId',
        '576486JenHFy',
        'findOne',
        'value',
        'userId',
        'ls/ApiConf',
        'isActive',
        '18FQJLOG',
        '2CEmzAD',
        '../../erro',
        '1180BenEOk',
        'ywEDS',
        'OUND',
        'NFIG_NOT_F',
        'authToken',
        'fault',
        'default',
        'tenantId',
        '48nwUAmH',
        '../../mode',
        '1384960IVIalj'
    ];
    a = function () {
        return E;
    };
    return a();
}
var __importDefault = this && this[z(0x184) + A(0x17e)] || function (c) {
    const B = A;
    return c && c[B(0x186)] ? c : { 'default': c };
};
const k = {};
k[A(0x19a)] = !![], Object[A(0x194) + A(0x18f)](exports, A(0x186), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x7d7 + -0xe47 + -0x39 * -0x6a);
        let h = e[f];
        return h;
    }, b(c, d);
}
const AppError_1 = __importDefault(require(A(0x1a0) + z(0x18e) + 'r')), ApiConfig_1 = __importDefault(require(z(0x182) + A(0x19c) + 'ig')), UpdateApiConfigService = async ({
        apiData: g,
        apiId: h,
        tenantId: i
    }) => {
        const C = A, D = A, j = {};
        j[C(0x1a2)] = C(0x196) + D(0x17c) + D(0x1a3);
        const l = j, m = {};
        m['id'] = h, m[C(0x180)] = i;
        const n = {};
        n[C(0x195)] = m;
        const o = await ApiConfig_1[C(0x17f)][C(0x199)](n);
        if (!o)
            throw new AppError_1[(D(0x17f))](l[D(0x1a2)], -0x1d60 + -0x2 * -0x9b6 + 0x4 * 0x2e2);
        const {
                name: p,
                sessionId: q,
                urlServiceStatus: r,
                urlMessageStatus: s,
                userId: t,
                authToken: u,
                isActive: v
            } = g, w = {};
        return w[C(0x192)] = p, w[D(0x197)] = q, w[C(0x18b) + D(0x189)] = r, w[C(0x18a) + D(0x189)] = s, w[C(0x19b)] = t, w[C(0x17d)] = u, w[C(0x19d)] = v, await o[D(0x18d)](w), await o[C(0x193)](), o;
    };
exports[A(0x17f)] = UpdateApiConfigService;