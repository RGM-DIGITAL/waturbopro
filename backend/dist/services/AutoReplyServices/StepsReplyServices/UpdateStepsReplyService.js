'use strict';
const w = b, x = b;
function a() {
    const B = [
        'where',
        'rror',
        'rrors/AppE',
        '4807594ZstHRp',
        '67880pxPNSn',
        'reply',
        '__importDe',
        '3ZseOeq',
        'odels/Step',
        'kEyVQ',
        '../../../e',
        'findOne',
        '4504355qyErVp',
        '../../../m',
        'fgJmd',
        'update',
        'sReply',
        'value',
        '395674xaJGFo',
        '3143NtRAvX',
        '__esModule',
        '1146SNgcrm',
        'reload',
        'default',
        'initialSte',
        'attributes',
        '35921hXKkxX',
        'erty',
        'ERR_NO_STE',
        '4jKDZpZ',
        'defineProp',
        'P_AUTO_REP',
        'userId',
        'rYUpo',
        '9686840VipeUU',
        'fault',
        'LY_FOUND',
        '837ZOoxkF',
        'xRMnE'
    ];
    a = function () {
        return B;
    };
    return a();
}
(function (c, d) {
    const u = b, v = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(u(0x16b)) / (-0x1377 + 0x2e * 0x35 + 0x86 * 0x13) + parseInt(u(0x163)) / (0x28 * 0x6c + -0x4b7 + -0x40d * 0x3) * (parseInt(u(0x158)) / (-0xe33 + 0x1c5 + -0x1c7 * -0x7)) + -parseInt(v(0x16e)) / (0x1bff + -0x53b + -0x16c0) * (parseInt(u(0x15d)) / (0x23b7 + -0x1287 + -0x112b)) + -parseInt(u(0x166)) / (-0x208 + 0x2311 + -0x139 * 0x1b) * (parseInt(u(0x164)) / (-0x95f * -0x3 + -0x1 * -0xbc9 + -0x27df)) + -parseInt(u(0x155)) / (0x14 * 0x131 + 0x5b9 * 0x5 + -0x3469 * 0x1) * (-parseInt(u(0x176)) / (-0x1e43 + -0x1716 + 0x3562)) + parseInt(v(0x173)) / (-0xbe9 * -0x1 + -0xce1 * 0x3 + 0x1ac4) + -parseInt(u(0x154)) / (0x7 * -0x1ba + 0x5e7 * 0x2 + 0x1 * 0x53);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xfec28 + -0x216b3 * -0x2 + -0xb6f57));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1370 + -0x1b69 + -0x4a5 * -0x2);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[w(0x157) + w(0x174)] || function (c) {
    const y = w;
    return c && c[y(0x165)] ? c : { 'default': c };
};
const k = {};
k[x(0x162)] = !![], Object[w(0x16f) + x(0x16c)](exports, x(0x165), k);
const AppError_1 = __importDefault(require(x(0x15b) + w(0x153) + x(0x152))), StepsReply_1 = __importDefault(require(w(0x15e) + w(0x159) + x(0x161))), UpdateStepsReplyService = async ({
        stepsReplyData: h,
        stepsReplyId: i
    }) => {
        const z = x, A = x, j = {};
        j[z(0x177)] = A(0x156), j[A(0x15a)] = A(0x171), j[A(0x15f)] = z(0x169) + 'p', j[z(0x172)] = A(0x16d) + A(0x170) + z(0x175);
        const l = j, {
                reply: m,
                userId: n,
                initialStep: o
            } = h, p = {};
        p['id'] = i;
        const q = {};
        q[z(0x151)] = p, q[z(0x16a)] = [
            'id',
            l[z(0x177)],
            l[z(0x15a)],
            l[A(0x15f)]
        ];
        const r = await StepsReply_1[z(0x168)][A(0x15c)](q);
        if (!r)
            throw new AppError_1[(A(0x168))](l[A(0x172)], -0x9fe + -0x71 * -0x21 + -0x2ff);
        const s = {};
        s[z(0x156)] = m, s[z(0x171)] = n, s[z(0x169) + 'p'] = o, await r[z(0x160)](s);
        const t = {};
        return t[A(0x16a)] = [
            'id',
            l[A(0x177)],
            l[A(0x15a)],
            l[A(0x15f)]
        ], await r[z(0x167)](t), r;
    };
exports[w(0x168)] = UpdateStepsReplyService;