'use strict';
const z = b, A = b;
function a() {
    const E = [
        '105XFliaI',
        'userId',
        '3461070iwEAhw',
        '318306TgModD',
        'rs/AppErro',
        'reload',
        'yLkug',
        '2098136FmyKkk',
        'wBbef',
        'erty',
        'QRuFV',
        '2455220TvPvCu',
        'EgonB',
        'ERR_NO_AUT',
        'where',
        'findOne',
        'value',
        'UND',
        '60776gszTNI',
        'attributes',
        '33138CFZFjJ',
        '../../erro',
        '__importDe',
        'defineProp',
        'celularTes',
        '16YgTWwR',
        'tenantId',
        'fault',
        '__esModule',
        'O_REPLY_FO',
        'name',
        'update',
        'default',
        'isActive',
        '12429eeWFwz',
        '../../mode',
        'avZAT',
        '2370Wrgcig',
        'ls/AutoRep',
        'action',
        'qwhGb'
    ];
    a = function () {
        return E;
    };
    return a();
}
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(x(0x84)) / (0xdbc + -0x270b + 0x1950) * (parseInt(x(0x89)) / (-0x484 + 0x1ecc + -0x1a46)) + -parseInt(x(0x9c)) / (0x129 * 0xb + 0x1 * 0x255e + -0xa * 0x503) + parseInt(x(0x77)) / (-0xf31 + -0x1 * -0x22b1 + 0x2 * -0x9be) + parseInt(y(0x7b)) / (-0x1613 + 0x489 * 0x6 + -0x51e) + -parseInt(x(0x9b)) / (0x759 + 0x386 * -0x4 + -0x1 * -0x6c5) + parseInt(x(0x99)) / (0x1 * -0x115 + -0x1 * 0x22b4 + -0xc * -0x2fc) * (parseInt(x(0x82)) / (0x213f + 0xdb2 + -0x2ee9)) + parseInt(y(0x92)) / (-0x4f2 + 0x2 * -0xf5 + 0x6e5) * (-parseInt(x(0x95)) / (-0x1beb * -0x1 + -0x197e + -0x263 * 0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x3 * -0x3647e + -0xbd08 + -0x392e9));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x22d * -0x5 + 0x1d * 0xf1 + -0xff5);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[z(0x86) + z(0x8b)] || function (c) {
    const B = A;
    return c && c[B(0x8c)] ? c : { 'default': c };
};
const k = {};
k[A(0x80)] = !![], Object[z(0x87) + A(0x79)](exports, A(0x8c), k);
const AppError_1 = __importDefault(require(z(0x85) + A(0x9d) + 'r')), AutoReply_1 = __importDefault(require(A(0x93) + z(0x96) + 'ly')), UpdateAutoReplyService = async ({
        autoReplyData: h,
        autoReplyId: i,
        tenantId: j
    }) => {
        const C = A, D = A, l = {};
        l[C(0x7a)] = D(0x8e), l[C(0x94)] = D(0x97), l[D(0x98)] = C(0x9a), l[D(0x9f)] = C(0x91), l[C(0x78)] = C(0x88) + 'te', l[C(0x7c)] = C(0x7d) + C(0x8d) + D(0x81);
        const m = l, {
                name: n,
                action: o,
                userId: p,
                isActive: q,
                celularTeste: r
            } = h, s = {};
        s['id'] = i, s[C(0x8a)] = j;
        const t = {};
        t[D(0x7e)] = s, t[C(0x83)] = [
            'id',
            m[D(0x7a)],
            m[C(0x94)],
            m[D(0x98)],
            m[C(0x9f)],
            m[C(0x78)]
        ];
        const u = await AutoReply_1[D(0x90)][D(0x7f)](t);
        if (!u)
            throw new AppError_1[(C(0x90))](m[D(0x7c)], -0x3 * 0xa82 + 0x106b + -0x1 * -0x10af);
        const v = {};
        v[C(0x8e)] = n, v[C(0x97)] = o, v[C(0x9a)] = p, v[D(0x91)] = q, v[C(0x88) + 'te'] = r, await u[D(0x8f)](v);
        const w = {};
        return w[C(0x83)] = [
            'id',
            m[D(0x7a)],
            m[D(0x94)],
            m[C(0x98)],
            m[D(0x9f)],
            m[D(0x78)]
        ], await u[D(0x9e)](w), u;
    };
exports[z(0x90)] = UpdateAutoReplyService;