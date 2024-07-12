'use strict';
function a() {
    const v = [
        'words',
        '__importDe',
        'create',
        'sReplyActi',
        'ination',
        'erty',
        'userIdDest',
        'fault',
        '../../../m',
        'odels/Step',
        '__esModule',
        'default',
        '5LSdhQc',
        '10158HmIVVA',
        '557048ooRmiu',
        'nextStepId',
        '346228coqGJu',
        'queueId',
        '505654hglHOK',
        'stepReplyI',
        'replyDefin',
        'ition',
        'userId',
        'action',
        'defineProp',
        '2491264fAhIuF',
        '4056486fDGIgL',
        '6jGhpyP',
        'value',
        '8228025JogQOV'
    ];
    a = function () {
        return v;
    };
    return a();
}
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0xc1)) / (-0x19af + -0x1 * -0x123b + 0x775) + -parseInt(o(0xbd)) / (0xe * -0x129 + 0x88 * -0x6 + 0x1370) + parseInt(o(0xca)) / (-0xe91 + 0xaeb + 0x3a9 * 0x1) * (parseInt(p(0xbf)) / (0xc7d + -0x949 + -0x330)) + -parseInt(o(0xd9)) / (0x3d5 + 0x1b56 + -0x3 * 0xa62) * (parseInt(o(0xda)) / (0x7e0 + -0x22c3 + 0x53 * 0x53)) + -parseInt(p(0xc9)) / (0x66c * 0x5 + -0x31 * -0x4 + 0xaf3 * -0x3) + -parseInt(o(0xc8)) / (0x2 * -0xf95 + 0x836 * -0x1 + 0x2768) + parseInt(p(0xcc)) / (0x1877 + -0x1553 * 0x1 + -0x31b);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x11 * 0xa12 + 0xba4d3 + 0x125 * -0x3f7));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x321 * -0x7 + -0x256f + -0x5 * -0x341);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[q(0xce) + q(0xd4)] || function (c) {
    const s = r;
    return c && c[s(0xd7)] ? c : { 'default': c };
};
const k = {};
k[r(0xcb)] = !![], Object[r(0xc7) + q(0xd2)](exports, q(0xd7), k);
const StepsReplyAction_1 = __importDefault(require(r(0xd5) + r(0xd6) + q(0xd0) + 'on')), CreateStepsReplyActionService = async ({
        stepReplyId: d,
        words: e,
        action: f,
        userId: g,
        queueId: h,
        userIdDestination: i,
        nextStepId: j,
        replyDefinition: l
    }) => {
        const t = r, u = r, m = {};
        m[t(0xc2) + 'd'] = d, m[u(0xcd)] = e, m[t(0xc6)] = f, m[t(0xc5)] = g, m[t(0xc0)] = h, m[u(0xd3) + u(0xd1)] = i, m[u(0xbe)] = j, m[t(0xc3) + t(0xc4)] = l;
        const n = await StepsReplyAction_1[t(0xd8)][t(0xcf)](m);
        return n;
    };
exports[r(0xd8)] = CreateStepsReplyActionService;