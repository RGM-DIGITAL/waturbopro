'use strict';
const B = b, C = b;
(function (c, d) {
    const z = b, A = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(z(0x1c6)) / (-0x1ee5 + -0x2 * 0xc25 + -0x8 * -0x6e6) * (-parseInt(z(0x1cf)) / (-0x8c9 + -0x1bb3 + 0x247e)) + parseInt(z(0x1ce)) / (0xc4f * -0x3 + 0x2422 + 0x2 * 0x67) * (-parseInt(z(0x1ae)) / (0x4 * -0x4fd + -0x25be + 0x39b6)) + parseInt(z(0x1b1)) / (-0x4b9 + 0x1ae5 + -0x1627) + parseInt(z(0x1b4)) / (-0xe4d + 0x100a + 0x1 * -0x1b7) + parseInt(A(0x1af)) / (-0x21dd + -0x70d + -0x28f1 * -0x1) + parseInt(A(0x1c4)) / (0x1 * -0x239d + 0x117 + 0x228e) * (-parseInt(z(0x1bb)) / (-0x7 * -0x21d + -0x17c * 0x1 + -0xd46)) + parseInt(A(0x1ca)) / (-0x1f7 * -0x13 + 0x59 * -0x37 + -0x122c) * (parseInt(A(0x1cc)) / (0xb * -0x24a + 0x17e3 * -0x1 + -0x311c * -0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x3b * -0x224 + -0x19d30 + -0x1d * -0x21e3));
var __importDefault = this && this[B(0x1a9) + C(0x1a6)] || function (c) {
    const D = C;
    return c && c[D(0x1b6)] ? c : { 'default': c };
};
const k = {};
k[B(0x1c5)] = !![], Object[C(0x1cb) + C(0x1ba)](exports, B(0x1b6), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xd * 0x11b + 0x19 * -0x116 + 0x1 * 0x2b22);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const G = [
        'TSClk',
        'nextStepId',
        'where',
        'stepReplyI',
        'rror',
        'ERR_NO_STE',
        'userIdDest',
        'words',
        'UznRX',
        'fault',
        'action',
        'lytjg',
        '__importDe',
        'reload',
        'findOne',
        'update',
        'replyDefin',
        '6904gBHogO',
        '137928fvETQH',
        '../../../e',
        '474900LUkyvX',
        'ition',
        'attributes',
        '968028NrwRhr',
        'MlvLe',
        '__esModule',
        'ination',
        'default',
        'SjYyj',
        'erty',
        '22932GVqZCT',
        'MigEJ',
        'iSYRo',
        'rrors/AppE',
        'userId',
        'sReplyActi',
        'P_AUTO_REP',
        '../../../m',
        'LY_FOUND',
        '664ulHCgO',
        'value',
        '31543tDPjZN',
        'wGFDO',
        'OqCOc',
        'odels/Step',
        '150alAUao',
        'defineProp',
        '23793FQAewW',
        'queueId',
        '81SqHDNS',
        '4bmDGTw'
    ];
    a = function () {
        return G;
    };
    return a();
}
const AppError_1 = __importDefault(require(C(0x1b0) + B(0x1be) + C(0x1a1))), StepsReplyAction_1 = __importDefault(require(C(0x1c2) + C(0x1c9) + B(0x1c0) + 'on')), UpdateStepsReplyActionService = async ({
        stepsReplyActionData: h,
        stepsReplyActionId: i
    }) => {
        const E = B, F = B, j = {};
        j[E(0x1c7)] = E(0x1a0) + 'd', j[E(0x1bd)] = E(0x1a4), j[F(0x1bc)] = E(0x1a7), j[E(0x1b5)] = E(0x1bf), j[E(0x1a5)] = E(0x1cd), j[F(0x1b9)] = E(0x1a3) + F(0x1b7), j[F(0x1a8)] = F(0x19e), j[E(0x1c8)] = F(0x1ad) + F(0x1b2), j[F(0x19d)] = E(0x1a2) + E(0x1c1) + E(0x1c3);
        const l = j, {
                stepReplyId: m,
                words: n,
                action: o,
                userId: p,
                queueId: q,
                userIdDestination: r,
                nextStepId: s,
                replyDefinition: t
            } = h, u = {};
        u['id'] = i;
        const v = {};
        v[E(0x19f)] = u, v[F(0x1b3)] = [
            'id',
            l[F(0x1c7)],
            l[E(0x1bd)],
            l[E(0x1bc)],
            l[F(0x1b5)],
            l[F(0x1a5)],
            l[E(0x1b9)],
            l[F(0x1a8)],
            l[E(0x1c8)]
        ];
        const w = await StepsReplyAction_1[F(0x1b8)][F(0x1ab)](v);
        if (!w)
            throw new AppError_1[(E(0x1b8))](l[E(0x19d)], 0x1f60 + 0x3f * -0x32 + -0x2 * 0x8bf);
        const x = {};
        x[F(0x1a0) + 'd'] = m, x[E(0x1a4)] = n, x[E(0x1a7)] = o, x[F(0x1bf)] = p, x[E(0x1cd)] = q, x[F(0x1a3) + F(0x1b7)] = r, x[F(0x19e)] = s, x[F(0x1ad) + E(0x1b2)] = t, await w[E(0x1ac)](x);
        const y = {};
        return y[F(0x1b3)] = [
            'id',
            l[E(0x1c7)],
            l[E(0x1bd)],
            l[E(0x1bc)],
            l[E(0x1b5)],
            l[F(0x1a5)],
            l[E(0x1b9)],
            l[E(0x1a8)],
            l[E(0x1c8)]
        ], await w[E(0x1aa)](y), w;
    };
exports[C(0x1b8)] = UpdateStepsReplyActionService;