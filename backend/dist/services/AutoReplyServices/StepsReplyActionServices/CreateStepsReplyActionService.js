'use strict';
function a() {
    const v = [
        'userId',
        'defineProp',
        '307675MWenhQ',
        'stepReplyI',
        'replyDefin',
        '1904178fUHKuJ',
        'action',
        '1187006oqsuHH',
        '5edxlGV',
        'default',
        'value',
        '3GByRpi',
        '__importDe',
        'odels/Step',
        'ition',
        'ination',
        'words',
        'create',
        '__esModule',
        '1385757okKUAJ',
        '../../../m',
        '16FJtoyd',
        'userIdDest',
        'erty',
        '21028910DPTSRV',
        '3503092myWzkH',
        '3130344lAliGY',
        'queueId',
        'nextStepId',
        'fault',
        'sReplyActi'
    ];
    a = function () {
        return v;
    };
    return a();
}
const q = b, r = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xeac + -0x285 * -0x1 + -0x1 * 0x10bb);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(o(0x78)) / (0x1 * -0x5fb + -0x2 * 0xcc1 + 0x1f7e) + parseInt(o(0x7d)) / (-0x2 * -0xd6b + -0x88f * 0x2 + 0x4db * -0x2) * (parseInt(o(0x81)) / (-0x27 * -0xda + 0x24f9 + -0x462c)) + parseInt(o(0x8f)) / (0x4a8 + -0x1 * 0x95d + -0x27 * -0x1f) * (-parseInt(p(0x7e)) / (0x185d + -0x1300 + -0x558 * 0x1)) + -parseInt(p(0x7b)) / (-0x26e2 + 0x1f73 + 0x53 * 0x17) + -parseInt(p(0x90)) / (0x65d * -0x1 + 0x1fe8 + -0x1984) + parseInt(p(0x8b)) / (-0x1 * 0x1705 + 0x833 * -0x1 + 0x1f40) * (-parseInt(p(0x89)) / (0x26ad + -0xae * 0x1b + -0x144a)) + parseInt(o(0x8e)) / (-0x95 * -0x10 + -0x240f + 0x1 * 0x1ac9);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * -0x631e3 + 0x40d49 + 0x8dd17));
var __importDefault = this && this[q(0x82) + r(0x93)] || function (c) {
    const s = q;
    return c && c[s(0x88)] ? c : { 'default': c };
};
const k = {};
k[r(0x80)] = !![], Object[q(0x77) + r(0x8d)](exports, q(0x88), k);
const StepsReplyAction_1 = __importDefault(require(r(0x8a) + r(0x83) + q(0x94) + 'on')), CreateStepsReplyActionService = async ({
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
        m[t(0x79) + 'd'] = d, m[u(0x86)] = e, m[t(0x7c)] = f, m[u(0x76)] = g, m[t(0x91)] = h, m[u(0x8c) + u(0x85)] = i, m[u(0x92)] = j, m[u(0x7a) + t(0x84)] = l;
        const n = await StepsReplyAction_1[u(0x7f)][u(0x87)](m);
        return n;
    };
exports[r(0x7f)] = CreateStepsReplyActionService;