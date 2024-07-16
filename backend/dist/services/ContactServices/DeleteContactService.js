'use strict';
const w = b, x = b;
(function (c, d) {
    const u = b, v = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(u(0x169)) / (-0x7 * -0x509 + -0x23e5 + 0xa7) * (parseInt(u(0x187)) / (-0xd * -0x283 + 0x1f7 * 0x2 + 0xc31 * -0x3)) + parseInt(v(0x16e)) / (-0x1c6 * -0x1 + 0x96f + 0x2 * -0x599) + parseInt(u(0x168)) / (-0x803 + 0x74 * -0x22 + 0x359 * 0x7) + parseInt(u(0x183)) / (-0x395 * 0x7 + -0x5 * -0x241 + -0x1 * -0xdd3) + parseInt(v(0x186)) / (-0x1fcc + -0x280 + -0x2252 * -0x1) + parseInt(u(0x167)) / (-0x178d + 0xfa4 + 0x7f0 * 0x1) * (parseInt(u(0x16a)) / (0x1 * 0x228e + -0x1 * -0x4ab + -0x2731)) + -parseInt(u(0x178)) / (0x1c63 + -0x625 + -0x1635);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x2 * 0x7f0d8 + -0x8 * 0x652d + 0x1 * -0x497cf));
function a() {
    const B = [
        '../../erro',
        'RJQzC',
        '2409294sWFFFG',
        'where',
        'tenantId',
        'rs/AppErro',
        'ERR_NO_CON',
        'mvMiA',
        'destroy',
        '__esModule',
        'contactId',
        'lete',
        '24230466BlWgOk',
        'defineProp',
        'type',
        'ls/Ticket',
        'value',
        'REGISTERED',
        'T_TICKETS_',
        '../../help',
        'findOne',
        'ls/Contact',
        'TACT_FOUND',
        '2532380AoCzct',
        'ers/socket',
        '__importDe',
        '1225344wtlSxB',
        '2194Jpkduk',
        'default',
        'erty',
        'count',
        'Emit',
        '../../mode',
        'ERR_CONTAC',
        'fault',
        'payload',
        'UFWEc',
        '3325uPCYlv',
        '678984OimeqJ',
        '898CdXIVj',
        '9368RIQfqU',
        'contact:de'
    ];
    a = function () {
        return B;
    };
    return a();
}
var __importDefault = this && this[w(0x185) + x(0x18e)] || function (c) {
    const y = x;
    return c && c[y(0x175)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x8c7 * -0x2 + -0x1 * -0x1e17 + 0x1 * -0x2e3f);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[w(0x17c)] = !![], Object[w(0x179) + x(0x189)](exports, x(0x175), k);
const Contact_1 = __importDefault(require(x(0x18c) + w(0x181))), AppError_1 = __importDefault(require(w(0x16c) + x(0x171) + 'r')), Ticket_1 = __importDefault(require(w(0x18c) + x(0x17b))), socketEmit_1 = __importDefault(require(x(0x17f) + w(0x184) + w(0x18b))), DeleteContactService = async ({
        id: i,
        tenantId: j
    }) => {
        const z = w, A = x, l = {};
        l[z(0x16d)] = A(0x172) + A(0x182), l[A(0x173)] = A(0x18d) + z(0x17e) + A(0x17d), l[A(0x166)] = A(0x16b) + A(0x177);
        const m = l, n = {};
        n['id'] = i, n[z(0x170)] = j;
        const o = {};
        o[A(0x16f)] = n;
        const p = await Contact_1[z(0x188)][A(0x180)](o);
        if (!p)
            throw new AppError_1[(A(0x188))](m[z(0x16d)], 0xc * -0x9c + 0x1 * 0x37d + -0x1cd * -0x3);
        const q = {};
        q[A(0x176)] = i;
        const r = {};
        r[A(0x16f)] = q;
        const s = await Ticket_1[z(0x188)][z(0x18a)](r);
        if (s)
            throw new AppError_1[(A(0x188))](m[z(0x173)], 0x1 * 0x1521 + -0x1 * -0x1f4d + 0x2e * -0x11b);
        await p[A(0x174)]();
        const t = {};
        t[A(0x170)] = j, t[z(0x17a)] = m[A(0x166)], t[z(0x18f)] = p, (0x1dc7 + -0x1 * 0x509 + -0x18be, socketEmit_1[z(0x188)])(t);
    };
exports[x(0x188)] = DeleteContactService;