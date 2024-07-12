'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(n(0x185)) / (-0x3 * -0x8b + 0x65 * -0x16 + 0x70e) * (-parseInt(o(0x184)) / (0x34e + 0x44f * 0x9 + -0x2a13)) + -parseInt(o(0x183)) / (0x1 * 0x1750 + -0x98f * -0x1 + 0x106e * -0x2) * (parseInt(n(0x181)) / (0x5a4 * -0x2 + 0xe46 + -0x2fa)) + -parseInt(n(0x17f)) / (0x8 * 0x489 + 0x255 * 0x8 + -0x11 * 0x33b) * (-parseInt(o(0x179)) / (0x10 * 0x127 + -0x11b7 * 0x2 + 0x1104)) + parseInt(n(0x182)) / (-0x5 * 0x24f + -0x2316 + 0x2ea8) * (parseInt(n(0x18b)) / (-0x22f * -0x1 + 0x5c9 * 0x2 + 0x493 * -0x3)) + parseInt(o(0x17b)) / (-0x1a2c + 0x12dd + 0x2 * 0x3ac) + -parseInt(n(0x17a)) / (-0x1d2f * 0x1 + 0x2 * -0x3e6 + 0x41d * 0x9) + parseInt(n(0x17d)) / (0xc7 * -0x2f + -0x16d0 + 0x3b64);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x5e4ce + 0x2 * -0x7c212 + -0xd * -0x17f1d));
var __importDefault = this && this[p(0x173) + p(0x18a)] || function (c) {
    const r = p;
    return c && c[r(0x180)] ? c : { 'default': c };
};
const k = {};
function a() {
    const u = [
        'erty',
        'tenantId',
        'ERR_API_CO',
        'where',
        'ls/ApiConf',
        '336URsoMT',
        '7123970zeyWrV',
        '9575892jEIPNy',
        'PAYgr',
        '1429681tJnizw',
        'default',
        '31660ELDGoX',
        '__esModule',
        '2888fdehcN',
        '1691011gdDPDH',
        '108FWGlsM',
        '8HtEQjr',
        '101837mtfDXb',
        'rs/AppErro',
        'OUND',
        'value',
        'destroy',
        'fault',
        '8BGMGFL',
        'NFIG_NOT_F',
        'defineProp',
        '../../erro',
        'findOne',
        '../../mode',
        '__importDe'
    ];
    a = function () {
        return u;
    };
    return a();
}
k[q(0x188)] = !![], Object[p(0x18d) + q(0x174)](exports, p(0x180), k);
const AppError_1 = __importDefault(require(p(0x18e) + q(0x186) + 'r')), ApiConfig_1 = __importDefault(require(q(0x172) + q(0x178) + 'ig')), DeleteApiConfigService = async ({
        apiId: f,
        tenantId: g
    }) => {
        const s = q, t = p, h = {};
        h[s(0x17c)] = s(0x176) + s(0x18c) + s(0x187);
        const i = h, j = {};
        j['id'] = f, j[t(0x175)] = g;
        const l = {};
        l[s(0x177)] = j;
        const m = await ApiConfig_1[s(0x17e)][s(0x171)](l);
        if (!m)
            throw new AppError_1[(s(0x17e))](i[t(0x17c)], 0x12fe + 0xff2 + -0x215c);
        await m[s(0x189)]();
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * 0x16af + 0x16c + -0x4 * -0x5ad);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[q(0x17e)] = DeleteApiConfigService;