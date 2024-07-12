'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x7a * 0x4b + -0xd5a * -0x2 + 0xace);
        let h = e[f];
        return h;
    }, b(c, d);
}
const w = b, x = b;
(function (c, d) {
    const u = b, v = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(u(0x1ce)) / (-0x20c5 + -0x2 * 0x94d + -0x18 * -0x224) * (-parseInt(u(0x1d1)) / (0x25c2 + -0x2 * -0x71d + -0x33fa)) + parseInt(u(0x1ea)) / (-0xc3c + 0x87b * -0x2 + 0x1d35) + parseInt(v(0x1eb)) / (-0x6f8 + 0x17a0 + -0x2c6 * 0x6) + -parseInt(u(0x1e3)) / (-0x160d + 0x1 * -0x21 + 0x1633) + -parseInt(v(0x1e2)) / (-0x2 * 0x1013 + -0x1621 + 0x1 * 0x364d) + parseInt(u(0x1d0)) / (0x2574 + 0x1c2 + -0x272f) * (-parseInt(u(0x1ed)) / (0x11ab * 0x1 + 0x25f1 + -0x3794)) + parseInt(v(0x1e1)) / (-0x2 * -0x97 + 0x3ce + -0xb5 * 0x7);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x9cb31 + 0x371c0 + -0x62aa7));
var __importDefault = this && this[w(0x1cb) + w(0x1ec)] || function (c) {
    const y = x;
    return c && c[y(0x1dc)] ? c : { 'default': c };
};
const k = {};
k[x(0x1e4)] = !![], Object[x(0x1e6) + x(0x1c7)](exports, w(0x1dc), k);
const Contact_1 = __importDefault(require(w(0x1db) + w(0x1d5))), AppError_1 = __importDefault(require(w(0x1d3) + w(0x1e9) + 'r')), Ticket_1 = __importDefault(require(w(0x1db) + w(0x1d7))), socketEmit_1 = __importDefault(require(w(0x1de) + w(0x1c5) + x(0x1e5))), DeleteContactService = async ({
        id: i,
        tenantId: j
    }) => {
        const z = w, A = x, l = {};
        l[z(0x1d6)] = A(0x1d2) + z(0x1c9), l[A(0x1e7)] = z(0x1cc) + A(0x1c6) + A(0x1c4), l[z(0x1e8)] = A(0x1e0) + z(0x1da);
        const m = l, n = {};
        n['id'] = i, n[A(0x1dd)] = j;
        const o = {};
        o[z(0x1df)] = n;
        const p = await Contact_1[z(0x1cd)][z(0x1d9)](o);
        if (!p)
            throw new AppError_1[(z(0x1cd))](m[A(0x1d6)], -0x2225 + 0x53 * 0x19 + 0x1b9e);
        const q = {};
        q[A(0x1d4)] = i;
        const r = {};
        r[z(0x1df)] = q;
        const s = await Ticket_1[z(0x1cd)][z(0x1d8)](r);
        if (s)
            throw new AppError_1[(z(0x1cd))](m[A(0x1e7)], -0xaa4 + -0xf42 + -0x2 * -0xdbd);
        await p[A(0x1c8)]();
        const t = {};
        t[A(0x1dd)] = j, t[z(0x1ca)] = m[z(0x1e8)], t[A(0x1cf)] = p, (0x4 * -0x24a + -0x4 * 0xcb + 0x107 * 0xc, socketEmit_1[z(0x1cd)])(t);
    };
function a() {
    const B = [
        'Emit',
        'defineProp',
        'JuCbb',
        'CKAcu',
        'rs/AppErro',
        '2152659nOziyW',
        '1921080tqMBmB',
        'fault',
        '256TPcGaF',
        'REGISTERED',
        'ers/socket',
        'T_TICKETS_',
        'erty',
        'destroy',
        'TACT_FOUND',
        'type',
        '__importDe',
        'ERR_CONTAC',
        'default',
        '32077QWXpFX',
        'payload',
        '14315bxfSOS',
        '20fXFybH',
        'ERR_NO_CON',
        '../../erro',
        'contactId',
        'ls/Contact',
        'hHPLS',
        'ls/Ticket',
        'count',
        'findOne',
        'lete',
        '../../mode',
        '__esModule',
        'tenantId',
        '../../help',
        'where',
        'contact:de',
        '8014023sBsZUL',
        '4106772cAYxgf',
        '2770820iWjGTY',
        'value'
    ];
    a = function () {
        return B;
    };
    return a();
}
exports[w(0x1cd)] = DeleteContactService;