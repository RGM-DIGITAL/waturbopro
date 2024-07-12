'use strict';
const w = b, x = b;
(function (c, d) {
    const u = b, v = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(u(0x105)) / (-0x2 * -0x5bd + 0x169a + 0x29f * -0xd) + parseInt(u(0x11c)) / (-0x2 * -0x11ce + 0x826 + 0x20 * -0x15e) * (-parseInt(u(0x118)) / (0x1ca + -0x71d + 0x556)) + -parseInt(u(0x103)) / (0x97f * -0x1 + 0x21e3 + -0x1860) + -parseInt(u(0x106)) / (-0x5 * 0x24d + 0x57 * 0x16 + 0x40c * 0x1) + parseInt(u(0x11a)) / (-0x5e * -0x5d + 0x7 * -0x511 + 0x157) + -parseInt(u(0x10f)) / (-0xc73 * 0x2 + -0x22a8 + 0x1 * 0x3b95) + parseInt(v(0x100)) / (0x120 + -0x1a * 0x12e + 0x1d94);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xf8f94 + 0x1 * 0xa02c5 + -0x106d62));
var __importDefault = this && this[w(0x110) + x(0x122)] || function (c) {
    const y = x;
    return c && c[y(0x111)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1b5c + -0x1106 + -0x956);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
function a() {
    const B = [
        'userId',
        'LY_FOUND',
        'rrors/AppE',
        'reload',
        'sReply',
        '3RkPHLE',
        'MRYmX',
        '3336870UCQbVZ',
        '../../../m',
        '641108fvHctY',
        'rror',
        'default',
        'update',
        'initialSte',
        'erty',
        'fault',
        'ERR_NO_STE',
        '12938368KnaxEJ',
        'P_AUTO_REP',
        'where',
        '959704hjHQBf',
        'jFtZT',
        '301647buXJFe',
        '4497550BXNmPV',
        'attributes',
        'SlsjH',
        'odels/Step',
        'value',
        'reply',
        'yzjhJ',
        '../../../e',
        'findOne',
        '2910677LyhqPE',
        '__importDe',
        '__esModule',
        'defineProp'
    ];
    a = function () {
        return B;
    };
    return a();
}
k[x(0x10a)] = !![], Object[x(0x112) + w(0x121)](exports, x(0x111), k);
const AppError_1 = __importDefault(require(w(0x10d) + x(0x115) + w(0x11d))), StepsReply_1 = __importDefault(require(x(0x11b) + x(0x109) + x(0x117))), UpdateStepsReplyService = async ({
        stepsReplyData: h,
        stepsReplyId: i
    }) => {
        const z = w, A = x, j = {};
        j[z(0x119)] = A(0x10b), j[A(0x10c)] = z(0x113), j[z(0x104)] = A(0x120) + 'p', j[z(0x108)] = z(0x123) + A(0x101) + A(0x114);
        const l = j, {
                reply: m,
                userId: n,
                initialStep: o
            } = h, p = {};
        p['id'] = i;
        const q = {};
        q[A(0x102)] = p, q[z(0x107)] = [
            'id',
            l[A(0x119)],
            l[z(0x10c)],
            l[A(0x104)]
        ];
        const r = await StepsReply_1[A(0x11e)][A(0x10e)](q);
        if (!r)
            throw new AppError_1[(z(0x11e))](l[A(0x108)], 0x923 + 0x1f12 + 0x13f * -0x1f);
        const s = {};
        s[A(0x10b)] = m, s[z(0x113)] = n, s[z(0x120) + 'p'] = o, await r[A(0x11f)](s);
        const t = {};
        return t[A(0x107)] = [
            'id',
            l[z(0x119)],
            l[z(0x10c)],
            l[z(0x104)]
        ], await r[z(0x116)](t), r;
    };
exports[x(0x11e)] = UpdateStepsReplyService;