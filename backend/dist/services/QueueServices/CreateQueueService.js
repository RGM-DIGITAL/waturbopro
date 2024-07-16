'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x5 * 0x3e8 + -0x24 * 0x58 + 0x207d);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const t = [
        'tenantId',
        '../../mode',
        'isActive',
        '11673153wEdbXP',
        '199362cWycdj',
        'value',
        'create',
        '__importDe',
        '4WfvKYm',
        'color',
        'fault',
        '10rxNCQs',
        '1370856KoUDlt',
        '1928392fMXXtP',
        'defineProp',
        'from_ia',
        '358112ayaqeo',
        'erty',
        'ls/Queue',
        '934731ScJoig',
        'userId',
        'queue',
        '__esModule',
        '1325541TJXYZj',
        'default'
    ];
    a = function () {
        return t;
    };
    return a();
}
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(m(0xa6)) / (-0x204b * -0x1 + 0xe57 * 0x1 + 0x1 * -0x2ea1) + parseInt(n(0xa0)) / (0xee2 + -0x28d + -0xc53) + parseInt(m(0x9f)) / (0x1f10 + 0x13aa + -0x32b7) * (-parseInt(n(0x9b)) / (-0x21 * -0x43 + 0x25b8 + -0x2e57 * 0x1)) + -parseInt(n(0x9e)) / (0x123b + 0x1 * -0x15ae + 0x2 * 0x1bc) * (parseInt(m(0x97)) / (0x1972 + -0xbd5 + -0xd97)) + parseInt(n(0xaa)) / (-0x1af0 + 0x25 * -0xad + 0x33f8) + -parseInt(n(0xa3)) / (-0x1a16 + 0xf2d + -0xaf1 * -0x1) + parseInt(n(0x96)) / (0xb25 + -0x9d6 + 0x1 * -0x146);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xa5f43 * -0x1 + -0x1 * -0x5e9fe + 0x12eb20));
var __importDefault = this && this[o(0x9a) + o(0x9d)] || function (c) {
    const q = p;
    return c && c[q(0xa9)] ? c : { 'default': c };
};
const k = {};
k[p(0x98)] = !![], Object[p(0xa1) + p(0xa4)](exports, p(0xa9), k);
const Queue_1 = __importDefault(require(p(0xad) + o(0xa5))), CreateQueueService = async ({
        queue: d,
        isActive: e,
        userId: f,
        from_ia: g,
        color: h,
        tenantId: i
    }) => {
        const r = o, s = p, j = {};
        j[r(0xa8)] = d, j[r(0x95)] = e, j[r(0xa7)] = f, j[s(0xa2)] = g, j[s(0x9c)] = h, j[r(0xac)] = i;
        const l = await Queue_1[r(0xab)][s(0x99)](j);
        return l;
    };
exports[o(0xab)] = CreateQueueService;