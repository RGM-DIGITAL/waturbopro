'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(m(0x1e0)) / (0x2333 + -0x1fea + -0x348) + -parseInt(n(0x1d4)) / (0x25cb + -0x1ab6 + -0xb13) * (parseInt(m(0x1e6)) / (-0xde2 + 0x2099 * -0x1 + 0x2e7e)) + parseInt(n(0x1cf)) / (-0x8 * -0x304 + 0x228 + 0x1 * -0x1a44) + -parseInt(m(0x1ea)) / (0x1 * -0x21e + -0x5 * -0xfe + -0x2d3) * (-parseInt(n(0x1d7)) / (-0x13be + 0xb7 * -0x22 + 0x2c12)) + parseInt(m(0x1ec)) / (0x7 * 0x385 + 0x1cd5 + -0x1 * 0x3571) * (-parseInt(n(0x1d2)) / (-0x1 * 0x233b + -0x2 * -0xc28 + 0xaf3)) + -parseInt(n(0x1f0)) / (-0x1 * 0x1cde + 0x2526 + 0x83f * -0x1) + -parseInt(m(0x1da)) / (-0x3a6 + -0x9dc * 0x1 + 0xd8c) * (-parseInt(m(0x1d9)) / (-0x1 * 0x2559 + -0x11f6 + 0x375a));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xa * 0x12f83 + 0x33a46 + 0x1 * 0x13a837));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x138e + 0x412 + 0x114b);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[o(0x1ed) + p(0x1ef)] || function (c) {
    const q = p;
    return c && c[q(0x1e9)] ? c : { 'default': c };
};
function a() {
    const t = [
        '550sHLZoD',
        'col',
        '21QNrgrf',
        '__importDe',
        'wSbQh',
        'fault',
        '12418425BydYko',
        'uTRvQ',
        'stepsReply',
        '1369096MadYLF',
        'words',
        'findOne',
        '2498072GdZZDN',
        'plyAction',
        '6962dXBIuW',
        'ls/AutoRep',
        'ls/StepsRe',
        '51438Uoueua',
        'autoReply',
        '3406601kbFlZM',
        '80dOqaZU',
        'ply',
        '../../mode',
        'XTSRj',
        'jbNwy',
        'sequelize',
        '706042yZczTB',
        'tenantId',
        'where',
        'defineProp',
        'value',
        'lower',
        '15xwFJND',
        'erty',
        'default',
        '__esModule'
    ];
    a = function () {
        return t;
    };
    return a();
}
const k = {};
k[o(0x1e4)] = !![], Object[o(0x1e3) + p(0x1e7)](exports, p(0x1e9), k);
const sequelize_1 = require(o(0x1df)), AutoReply_1 = __importDefault(require(p(0x1dc) + p(0x1d5) + 'ly')), StepsReply_1 = __importDefault(require(p(0x1dc) + o(0x1d6) + o(0x1db))), StepsReplyAction_1 = __importDefault(require(p(0x1dc) + p(0x1d6) + p(0x1d3))), VerifyActionStepAutoReplyService = async (e, f, g) => {
        const r = o, s = o, h = {};
        h[r(0x1ee)] = r(0x1e5), h[s(0x1de)] = s(0x1d0), h[r(0x1dd)] = r(0x1f2), h[s(0x1f1)] = s(0x1d8);
        const i = h;
        if (!f)
            return null;
        const j = {};
        j[s(0x1e1)] = g;
        const l = await StepsReplyAction_1[r(0x1e8)][s(0x1d1)]({
            'where': {
                'stepReplyId': e,
                'words': (-0xfba + 0x38d * 0x3 + -0x513 * -0x1, sequelize_1[s(0x1e2)])((-0x1eb * -0x3 + -0x13b2 + 0x2b * 0x53, sequelize_1['fn'])(i[s(0x1ee)], (0x1253 * 0x1 + 0xab * 0x35 + -0xd * 0x422, sequelize_1[s(0x1eb)])(i[r(0x1de)])), (0x1d * 0x85 + 0x5 * -0x47d + -0x760 * -0x1, sequelize_1['fn'])(i[s(0x1ee)], f))
            },
            'include': [{
                    'model': StepsReply_1[s(0x1e8)],
                    'as': i[r(0x1dd)],
                    'include': [{
                            'model': AutoReply_1[r(0x1e8)],
                            'as': i[r(0x1f1)],
                            'where': j
                        }]
                }]
        });
        return l;
    };
exports[o(0x1e8)] = VerifyActionStepAutoReplyService;