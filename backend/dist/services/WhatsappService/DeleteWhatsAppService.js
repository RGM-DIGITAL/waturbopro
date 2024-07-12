'use strict';
const r = b, s = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x10fe + 0x102d + -0x1faf * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x192)) / (-0x7 * 0x305 + 0x3 * 0x2d5 + -0x53 * -0x27) * (parseInt(q(0x195)) / (-0x1460 + -0x7ad * -0x1 + -0xcb5 * -0x1)) + parseInt(p(0x189)) / (0xf8 * 0x1f + 0x1d5e + -0x3b63) + parseInt(q(0x190)) / (0x1d70 + 0x286 + 0xaa6 * -0x3) + -parseInt(q(0x17c)) / (0x1568 + -0xa39 + 0x595 * -0x2) + parseInt(p(0x198)) / (0x2053 + 0x1 * 0x1fb7 + -0x4004) * (-parseInt(q(0x187)) / (0x63e + -0x65d * -0x5 + -0x2608)) + parseInt(p(0x18c)) / (-0x20e5 + -0x293 * -0xf + -0x1c * 0x34) + -parseInt(q(0x183)) / (-0x22e + 0x3 * -0x1b6 + 0x273 * 0x3);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x7 * 0xb3dd + 0x76d1b + -0x5c1c4));
var __importDefault = this && this[r(0x18e) + s(0x17e)] || function (c) {
    const t = s;
    return c && c[t(0x185)] ? c : { 'default': c };
};
function a() {
    const w = [
        'zpiut',
        'isDeleted',
        '565065QLtThe',
        '../../mode',
        '__esModule',
        'update',
        '307937PbSjLf',
        'value',
        '2142456gnXYyS',
        'DISCONNECT',
        'status',
        '531472bhJGvm',
        '../../erro',
        '__importDe',
        'tenantId',
        '930220DAWBkh',
        'findOne',
        '1vnNZPb',
        'default',
        'defineProp',
        '1021354WDghCR',
        'erty',
        'P_FOUND',
        '114YlxJkD',
        'ZJBPe',
        'where',
        '967450MzEPZN',
        'rs/AppErro',
        'fault',
        'ls/Whatsap',
        'ERR_NO_WAP'
    ];
    a = function () {
        return w;
    };
    return a();
}
const k = {};
k[r(0x188)] = !![], Object[r(0x194) + r(0x196)](exports, r(0x185), k);
const Whatsapp_1 = __importDefault(require(r(0x184) + s(0x17f) + 'p')), AppError_1 = __importDefault(require(s(0x18d) + s(0x17d) + 'r')), DeleteWhatsApprService = async (g, h) => {
        const u = r, v = s, i = {};
        i[u(0x199)] = u(0x180) + u(0x197), i[v(0x181)] = u(0x18a) + 'ED';
        const j = i, l = {};
        l['id'] = g, l[v(0x18f)] = h;
        const m = {};
        m[u(0x19a)] = l;
        const n = await Whatsapp_1[v(0x193)][u(0x191)](m);
        if (!n)
            throw new AppError_1[(u(0x193))](j[u(0x199)], -0x1 * -0x47a + 0x16ad + -0x1993);
        const o = {};
        o[v(0x182)] = !![], o[u(0x18b)] = j[u(0x181)], await n[u(0x186)](o);
    };
exports[s(0x193)] = DeleteWhatsApprService;