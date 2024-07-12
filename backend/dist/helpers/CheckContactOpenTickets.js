'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(o(0x86)) / (-0x16c8 + -0x1d4 + 0x189d) * (-parseInt(o(0x92)) / (0xf42 * 0x1 + 0x21d * -0x7 + -0x1 * 0x75)) + parseInt(p(0x7a)) / (0x122a + -0x1 * -0x16d9 + 0x80 * -0x52) * (parseInt(p(0x85)) / (0x902 * 0x4 + -0xd * 0x257 + -0x599)) + -parseInt(o(0x8a)) / (-0x10d5 * -0x1 + 0x453 + -0x7 * 0x305) + parseInt(o(0x96)) / (-0x13 * -0x199 + 0xd1f * -0x1 + 0x2 * -0x89b) * (parseInt(o(0x8e)) / (-0x12a0 + 0x1 * -0x845 + 0x4 * 0x6bb)) + -parseInt(o(0x7d)) / (-0x1 * 0xc73 + -0x5 * 0x243 + 0x17ca) + -parseInt(o(0x8b)) / (-0x2 * 0x877 + -0x19e6 + 0x2add) + parseInt(p(0x8d)) / (-0x2033 + -0x2 * -0x1f + 0x1fff);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * 0x9d5a1 + 0x29 * 0xd3 + 0x1 * 0x15cbfc));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * 0x21d7 + -0x2e7 * -0x9 + 0x1 * -0x3b7e);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[q(0x93) + q(0x7b)] || function (c) {
    const s = r;
    return c && c[s(0x79)] ? c : { 'default': c };
};
const k = {};
function a() {
    const v = [
        'status',
        'Ticket',
        'open',
        'stringify',
        '8LEkmdt',
        '60618NropPc',
        'default',
        'findOne',
        '../models/',
        '521685ROHkRG',
        '5355432cIndbf',
        'sequelize',
        '5957530mJfyII',
        '133wmgsrT',
        'where',
        'QSGYX',
        'defineProp',
        '24uYKwyb',
        '__importDe',
        'ccIgj',
        'contactId',
        '216408qoADPD',
        '../errors/',
        '__esModule',
        '319377CuJemA',
        'fault',
        'pending',
        '5835040zWqnCd',
        'erty',
        'AppError',
        'value'
    ];
    a = function () {
        return v;
    };
    return a();
}
k[r(0x80)] = !![], Object[q(0x91) + r(0x7e)](exports, r(0x79), k);
const sequelize_1 = require(r(0x8c)), AppError_1 = __importDefault(require(q(0x78) + r(0x7f))), Ticket_1 = __importDefault(require(r(0x89) + r(0x82))), CheckContactOpenTickets = async g => {
        const t = q, u = r, h = {};
        h[t(0x94)] = t(0x83), h[t(0x90)] = t(0x7c);
        const i = h, j = {
                [sequelize_1['Op']['or']]: [
                    i[t(0x94)],
                    i[u(0x90)]
                ]
            }, l = {};
        l[t(0x95)] = g, l[u(0x81)] = j;
        const m = {};
        m[t(0x8f)] = l;
        const n = await Ticket_1[t(0x87)][u(0x88)](m);
        if (n)
            throw new AppError_1[(u(0x87))](JSON[u(0x84)](n), 0x1 * -0x1eb9 + -0x2332 + -0x2 * -0x21c2);
    };
exports[r(0x87)] = CheckContactOpenTickets;