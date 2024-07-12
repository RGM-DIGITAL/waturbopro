'use strict';
const x = b, y = b;
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(v(0x1aa)) / (-0x12cd * 0x1 + -0x2 * 0x50b + 0x1ce4) + -parseInt(v(0x19c)) / (-0x24de + -0x2 * 0x5ba + 0x3054) + -parseInt(w(0x1c8)) / (0x1d28 + 0x1368 + 0x9 * -0x565) + parseInt(v(0x198)) / (0x1 * 0xc06 + -0x16d0 + 0xace) * (-parseInt(w(0x1af)) / (-0x13 * -0x1b9 + -0x3e + 0x1 * -0x2078)) + -parseInt(w(0x18f)) / (0x26 * -0x107 + 0x11a5 * 0x1 + 0x156b) + parseInt(v(0x1c1)) / (-0x2000 + -0x1d2 * 0x4 + 0x274f) * (parseInt(v(0x1b1)) / (0x18b6 + -0x9cc + 0x6 * -0x27b)) + -parseInt(w(0x1b7)) / (-0x25 * -0x11 + -0x153a + 0x12ce * 0x1) * (-parseInt(w(0x1a2)) / (-0x499 * 0x6 + -0x18 * -0x6b + 0x1198 * 0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x8c657 * -0x2 + 0x10da4 + -0x93606));
function a() {
    const C = [
        '90198OlTDld',
        'initialSte',
        'ZjIex',
        'Bdgsz',
        'Action',
        'ls/StepsRe',
        'HHWdY',
        'glduY',
        'fault',
        'where',
        '65177huoVkT',
        'order',
        'action',
        'nextStepId',
        '../../mode',
        'WohMA',
        'UzRNg',
        '3394587QjFnkp',
        'erty',
        'idAutoRepl',
        '1754502qPkGGL',
        'CxbUR',
        'default',
        'ination',
        'defineProp',
        '__esModule',
        'userId',
        'findAll',
        'model',
        '3991256Epqmym',
        'HvCez',
        'replyDefin',
        '__importDe',
        '2334810gQJxSW',
        'DXizz',
        'words',
        'reply',
        'JmZmD',
        'stepsReply',
        '4570DPtUDx',
        'attributes',
        'include',
        'vVJOL',
        'plyAction',
        'KejEk',
        'ition',
        'queueId',
        '440566kIBmni',
        'ls/AutoRep',
        'userIdDest',
        'autoReply',
        'ply',
        '5idRbpJ',
        'ASC',
        '56IPNANN',
        'tenantId',
        'FSjpz',
        'stepReplyI',
        'value',
        'pIkqF'
    ];
    a = function () {
        return C;
    };
    return a();
}
var __importDefault = this && this[x(0x19b) + y(0x1bf)] || function (c) {
    const z = x;
    return c && c[z(0x194)] ? c : { 'default': c };
};
const k = {};
k[y(0x1b5)] = !![], Object[y(0x193) + x(0x1c9)](exports, x(0x194), k);
const AutoReply_1 = __importDefault(require(y(0x1c5) + x(0x1ab) + 'ly')), StepsReply_1 = __importDefault(require(x(0x1c5) + x(0x1bc) + x(0x1ae))), StepsReplyAction_1 = __importDefault(require(y(0x1c5) + x(0x1bc) + y(0x1a6))), ListAutoReplyService = async ({tenantId: j}) => {
        const A = y, B = y, l = {};
        l[A(0x1ba)] = A(0x1a1) + B(0x1bb), l[B(0x1b9)] = B(0x1b4) + 'd', l[B(0x1a5)] = A(0x19e), l[B(0x1a0)] = B(0x1c3), l[B(0x199)] = A(0x1a9), l[A(0x19d)] = B(0x1ac) + B(0x192), l[A(0x1be)] = A(0x1c4), l[B(0x1b6)] = B(0x19a) + B(0x1a8), l[B(0x1c7)] = A(0x1a1), l[A(0x1bd)] = A(0x19f), l[A(0x190)] = B(0x18e) + 'y', l[B(0x1c6)] = A(0x195), l[B(0x1a7)] = A(0x1b8) + 'p', l[A(0x1b3)] = B(0x1b0);
        const m = l;
        let n;
        const o = {};
        o[A(0x197)] = StepsReplyAction_1[A(0x191)], o['as'] = m[A(0x1ba)], o[A(0x1a3)] = [
            'id',
            m[B(0x1b9)],
            m[B(0x1a5)],
            m[A(0x1a0)],
            m[A(0x199)],
            m[B(0x19d)],
            m[A(0x1be)],
            m[B(0x1b6)]
        ];
        const p = {};
        p[A(0x197)] = StepsReply_1[B(0x191)], p[B(0x1a4)] = [o], p['as'] = m[A(0x1c7)], p[A(0x1a3)] = [
            'id',
            m[B(0x1bd)],
            m[A(0x190)],
            m[A(0x1c6)],
            m[B(0x1a7)]
        ], n = [p];
        const q = {};
        q[B(0x1b2)] = j;
        const r = {};
        r[B(0x197)] = StepsReply_1[B(0x191)], r['as'] = m[B(0x1c7)];
        const s = {};
        s[B(0x1a4)] = n, s[B(0x1c0)] = q, s[A(0x1c2)] = [[
                r,
                'id',
                m[B(0x1b3)]
            ]];
        const t = await AutoReply_1[A(0x191)][A(0x196)](s), u = {};
        return u[B(0x1ad)] = t, u;
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xc26 + 0xf5b + -0x1a7);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[y(0x191)] = ListAutoReplyService;