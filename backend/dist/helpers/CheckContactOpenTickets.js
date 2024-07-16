'use strict';
const q = b, r = b;
function a() {
    const v = [
        '1215510JWesFc',
        'bhNgs',
        'open',
        'value',
        '4672314iOewEA',
        'defineProp',
        'where',
        'contactId',
        '__esModule',
        '542316vSJUek',
        '6dkgOGL',
        'default',
        '../errors/',
        '1130192hGgGjP',
        'status',
        'stringify',
        'fault',
        '2240777McjAbe',
        'AppError',
        'Ticket',
        '381055UUOJyP',
        'pending',
        'findOne',
        'sequelize',
        '../models/',
        'flIKw',
        '2118830SxfouI',
        '__importDe',
        '20aPemVY',
        'erty'
    ];
    a = function () {
        return v;
    };
    return a();
}
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0x8e)) / (0x19f6 * 0x1 + 0x8a1 * 0x4 + -0x3c79) + -parseInt(p(0x8a)) / (0x1376 + -0x1 * 0x1672 + 0x2fe) + parseInt(p(0x97)) / (-0x155d * -0x1 + -0x1 * 0x755 + -0xe05) + -parseInt(p(0x8c)) / (0x1055 + -0x3 * -0x22f + 0x1 * -0x16de) * (parseInt(p(0x84)) / (-0x1 * 0x332 + -0x36 * -0x63 + -0x11ab)) + parseInt(p(0x98)) / (-0xa85 * 0x1 + 0xc7 * -0xe + 0x156d) * (parseInt(o(0x9f)) / (0x18c7 + 0x5 * -0x207 + 0x57 * -0x2b)) + -parseInt(p(0x9b)) / (0x6b7 + -0x47 * 0x6f + 0x181a) + parseInt(o(0x92)) / (-0xa2c + -0xb56 + -0x44f * -0x5);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x65 * -0x17f7 + -0x56739 + 0x18d58f));
var __importDefault = this && this[q(0x8b) + q(0x9e)] || function (c) {
    const s = r;
    return c && c[s(0x96)] ? c : { 'default': c };
};
const k = {};
k[q(0x91)] = !![], Object[q(0x93) + r(0x8d)](exports, q(0x96), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xe9e + -0xc61 * 0x1 + 0x1b81);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(q(0x87)), AppError_1 = __importDefault(require(q(0x9a) + r(0x82))), Ticket_1 = __importDefault(require(q(0x88) + q(0x83))), CheckContactOpenTickets = async g => {
        const t = q, u = q, h = {};
        h[t(0x8f)] = u(0x90), h[t(0x89)] = u(0x85);
        const i = h, j = {
                [sequelize_1['Op']['or']]: [
                    i[t(0x8f)],
                    i[u(0x89)]
                ]
            }, l = {};
        l[u(0x95)] = g, l[u(0x9c)] = j;
        const m = {};
        m[t(0x94)] = l;
        const n = await Ticket_1[u(0x99)][u(0x86)](m);
        if (n)
            throw new AppError_1[(u(0x99))](JSON[t(0x9d)](n), 0x9 * 0x1bb + 0x2061 + -0x2e5b);
    };
exports[r(0x99)] = CheckContactOpenTickets;