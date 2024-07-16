'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x16e2 + 0xc39 + -0x222c);
        let h = e[f];
        return h;
    }, b(c, d);
}
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0xfe)) / (-0x1 * 0x183 + -0x189b + -0x3 * -0x8b5) * (parseInt(p(0x10a)) / (-0x198f + 0x1 * 0x1ec7 + 0x1 * -0x536)) + -parseInt(p(0xf4)) / (0x990 + -0x760 * -0x1 + -0x10ed) + -parseInt(p(0xf5)) / (-0x1 * -0x1762 + 0x19df + -0x313d) * (-parseInt(o(0xf0)) / (0x252e + 0x1e85 + -0x43ae)) + parseInt(p(0x10c)) / (-0x3e * -0x19 + -0x43e + 0x1 * -0x1ca) * (parseInt(p(0x105)) / (0x14cb + 0x224f + -0x265 * 0x17)) + parseInt(p(0xf1)) / (-0x2056 + -0x67 * -0x11 + 0x1987) * (parseInt(o(0xfc)) / (-0x658 + 0x22ed * 0x1 + -0x1c8c)) + parseInt(o(0x100)) / (-0x9f7 + 0x19b9 + -0x1f7 * 0x8) + -parseInt(o(0xf7)) / (0x48 * 0x42 + -0x2138 + 0xeb3) * (parseInt(p(0x109)) / (0x2485 + 0x1f54 + -0x43cd));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x2 * -0x67fbd + 0x1 * 0xb05e2 + 0xdf * 0xb27));
function a() {
    const v = [
        'ASC',
        '1389zWEmzK',
        'where',
        '2461760btBHld',
        'isActive',
        'fault',
        'findAll',
        'defineProp',
        '91756fzVKEf',
        'tag',
        'default',
        'pErmW',
        '228HdGpUs',
        '894aAXoIw',
        '__esModule',
        '426FjaUtl',
        '__importDe',
        '2163575cyFevk',
        '2424CitgLz',
        'ls/Tag',
        'erty',
        '988467VQdFuS',
        '4JVSYcR',
        'order',
        '995819HVvOdZ',
        'value',
        'frmYm',
        '../../mode',
        'tenantId',
        '9693lmTfxY'
    ];
    a = function () {
        return v;
    };
    return a();
}
var __importDefault = this && this[q(0xef) + q(0x102)] || function (c) {
    const s = r;
    return c && c[s(0x10b)] ? c : { 'default': c };
};
const k = {};
k[q(0xf8)] = !![], Object[q(0x104) + r(0xf3)](exports, q(0x10b), k);
const Tag_1 = __importDefault(require(q(0xfa) + q(0xf2))), ListTagService = async ({
        tenantId: f,
        isActive: g
    }) => {
        const t = q, u = q, h = {};
        h[t(0x108)] = t(0x106), h[u(0xf9)] = t(0xfd);
        const i = h, j = {};
        j[t(0xfb)] = f;
        const l = j;
        g && (l[t(0x101)] = g);
        const m = {};
        m[t(0xff)] = l, m[t(0xf6)] = [[
                i[t(0x108)],
                i[u(0xf9)]
            ]];
        const n = await Tag_1[t(0x107)][t(0x103)](m);
        return n;
    };
exports[r(0x107)] = ListTagService;