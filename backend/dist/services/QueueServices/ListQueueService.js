'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(m(0x8e)) / (0x5ba + 0x1 * -0x9 + -0x5b0) * (parseInt(m(0x7f)) / (-0xcc9 + 0xc5f * -0x1 + 0x192a)) + parseInt(m(0x80)) / (-0x5 * 0x712 + 0x38c * -0x3 + 0x2e01) * (parseInt(m(0x76)) / (-0x2b4 + 0x79 * 0x2b + 0x119b * -0x1)) + -parseInt(m(0x88)) / (0x8c7 + 0x20e1 + -0x29a3) + parseInt(m(0x77)) / (-0x1 * 0xbdd + -0x1651 * -0x1 + 0x5 * -0x216) * (-parseInt(n(0x7a)) / (-0xf5e + 0x265c + 0x16f7 * -0x1)) + -parseInt(m(0x8f)) / (-0x1 * -0x1c82 + 0x94a + 0x4 * -0x971) * (-parseInt(n(0x8c)) / (0x15bc + -0x2329 * 0x1 + 0x6bb * 0x2)) + -parseInt(n(0x7b)) / (-0x1abe + -0x2069 + -0x3b31 * -0x1) + parseInt(m(0x90)) / (0x3 * 0xbdd + 0xf0e + -0x11 * 0x2fa);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x5aaa8 + -0x1d2fd * -0x3 + 0xc633 * -0x8));
function a() {
    const t = [
        '__importDe',
        'SeHhK',
        'fault',
        '../../mode',
        '2458740uFYxuV',
        'queue',
        'ls/Queue',
        'PCWZn',
        '1220823kXLUnJ',
        'defineProp',
        '2413jnsvga',
        '24hJAiaP',
        '13287362SZXnAB',
        'value',
        '317216ILTToQ',
        '2035374YJhBUz',
        'ASC',
        'where',
        '7uxIEyr',
        '5836540bHCZUe',
        'erty',
        'default',
        'tenantId',
        '226rtttZI',
        '15jGygcf',
        'findAll',
        '__esModule',
        'order'
    ];
    a = function () {
        return t;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x234 + 0x1f3b + 0x9f * -0x2e);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[o(0x84) + o(0x86)] || function (c) {
    const q = o;
    return c && c[q(0x82)] ? c : { 'default': c };
};
const k = {};
k[p(0x75)] = !![], Object[p(0x8d) + o(0x7c)](exports, p(0x82), k);
const Queue_1 = __importDefault(require(p(0x87) + p(0x8a))), ListQueueService = async ({tenantId: f}) => {
        const r = p, s = o, g = {};
        g[r(0x85)] = s(0x89), g[r(0x8b)] = s(0x78);
        const h = g, i = {};
        i[r(0x7e)] = f;
        const j = {};
        j[r(0x79)] = i, j[r(0x83)] = [[
                h[r(0x85)],
                h[s(0x8b)]
            ]];
        const l = await Queue_1[s(0x7d)][r(0x81)](j);
        return l;
    };
exports[p(0x7d)] = ListQueueService;