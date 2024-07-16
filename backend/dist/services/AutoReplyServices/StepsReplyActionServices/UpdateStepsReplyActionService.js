'use strict';
const B = b, C = b;
(function (c, d) {
    const z = b, A = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(z(0x1a7)) / (0x2188 + -0x22c0 + 0x139) * (parseInt(A(0x198)) / (0x1a24 + -0xb1d + 0x301 * -0x5)) + -parseInt(A(0x199)) / (0x25 * 0x1 + -0x2e9 + 0x9 * 0x4f) + parseInt(z(0x19c)) / (0xb99 * 0x2 + 0x1ab8 + -0x2 * 0x18f3) + -parseInt(z(0x195)) / (0x220 * 0x6 + 0x160a + -0x9 * 0x3dd) * (-parseInt(A(0x1b4)) / (-0x2 * -0x566 + 0xf68 + -0x1a2e)) + -parseInt(z(0x197)) / (-0x1c3b + -0xdb8 + 0x29fa) * (parseInt(A(0x194)) / (-0x509 * 0x1 + 0x2b8 + 0x259)) + parseInt(z(0x1ab)) / (0x8ea + -0xbb + -0x826) * (parseInt(z(0x1a1)) / (-0x15ed + 0x1d13 + -0x71c)) + -parseInt(A(0x18d)) / (-0x3 * 0x87f + 0x997 + 0xff1) * (parseInt(A(0x18b)) / (-0x23d * -0x10 + 0x115d + -0x1d * 0x1d5));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x79aba + 0x455 * -0x1d + -0x45 * -0x3fa7));
function a() {
    const G = [
        'ERR_NO_STE',
        'ition',
        'where',
        '9STMtrR',
        'rror',
        'userIdDest',
        'userId',
        'reload',
        'rpUlp',
        'LY_FOUND',
        'attributes',
        'KbaeU',
        '18PiUAgD',
        'defineProp',
        '../../../m',
        'sReplyActi',
        'odFhW',
        'rrors/AppE',
        'P_AUTO_REP',
        '__esModule',
        'ination',
        'YHYPF',
        'words',
        '1020gkmolC',
        'EfWyT',
        '101893rwfQSB',
        'default',
        '__importDe',
        'erty',
        'replyDefin',
        '../../../e',
        'action',
        '1248boiRru',
        '1528705DaDKmX',
        'value',
        '19691IuieQZ',
        '43172sEqqxz',
        '469266eacMAj',
        'JJeDw',
        'queueId',
        '1631804vQPKle',
        'stepReplyI',
        'aJPWj',
        'odels/Step',
        'update',
        '6296770nnfcAU',
        'mWtWG',
        'findOne',
        'fault',
        'gzMMl',
        'nextStepId',
        '1CEjvdi'
    ];
    a = function () {
        return G;
    };
    return a();
}
var __importDefault = this && this[B(0x18f) + B(0x1a4)] || function (c) {
    const D = C;
    return c && c[D(0x187)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x304 + 0x1904 * -0x1 + 0xd * 0x1cf);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[B(0x196)] = !![], Object[B(0x1b5) + C(0x190)](exports, C(0x187), k);
const AppError_1 = __importDefault(require(B(0x192) + B(0x185) + C(0x1ac))), StepsReplyAction_1 = __importDefault(require(C(0x1b6) + B(0x19f) + C(0x183) + 'on')), UpdateStepsReplyActionService = async ({
        stepsReplyActionData: h,
        stepsReplyActionId: i
    }) => {
        const E = B, F = B, j = {};
        j[E(0x19a)] = F(0x19d) + 'd', j[E(0x18c)] = F(0x18a), j[F(0x1a2)] = E(0x193), j[F(0x184)] = E(0x1ae), j[E(0x1a5)] = F(0x19b), j[E(0x1b0)] = E(0x1ad) + F(0x188), j[E(0x189)] = F(0x1a6), j[E(0x1b3)] = F(0x191) + F(0x1a9), j[E(0x19e)] = F(0x1a8) + E(0x186) + E(0x1b1);
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
        v[F(0x1aa)] = u, v[F(0x1b2)] = [
            'id',
            l[F(0x19a)],
            l[F(0x18c)],
            l[E(0x1a2)],
            l[F(0x184)],
            l[E(0x1a5)],
            l[F(0x1b0)],
            l[F(0x189)],
            l[F(0x1b3)]
        ];
        const w = await StepsReplyAction_1[F(0x18e)][F(0x1a3)](v);
        if (!w)
            throw new AppError_1[(E(0x18e))](l[F(0x19e)], -0x58 * -0x62 + 0x1 * -0x24c4 + 0x4a8);
        const x = {};
        x[E(0x19d) + 'd'] = m, x[E(0x18a)] = n, x[E(0x193)] = o, x[F(0x1ae)] = p, x[F(0x19b)] = q, x[F(0x1ad) + F(0x188)] = r, x[F(0x1a6)] = s, x[F(0x191) + E(0x1a9)] = t, await w[F(0x1a0)](x);
        const y = {};
        return y[F(0x1b2)] = [
            'id',
            l[E(0x19a)],
            l[E(0x18c)],
            l[F(0x1a2)],
            l[E(0x184)],
            l[E(0x1a5)],
            l[F(0x1b0)],
            l[E(0x189)],
            l[F(0x1b3)]
        ], await w[E(0x1af)](y), w;
    };
exports[B(0x18e)] = UpdateStepsReplyActionService;