'use strict';
const x = b, y = b;
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(v(0x1cb)) / (-0xc75 + 0x170e + -0x1 * 0xa98) * (parseInt(w(0x1cd)) / (-0x101 * 0x15 + 0x1da2 + -0x1 * 0x88b)) + -parseInt(w(0x1ca)) / (0x164b + 0x1 * 0x3cb + 0x3 * -0x8b1) * (parseInt(v(0x1b0)) / (-0x118f + -0x1c33 + 0x2dc6)) + -parseInt(v(0x1bb)) / (-0xaa8 + -0x11 * -0x237 + -0x1afa) + parseInt(v(0x1be)) / (0xd * 0x26b + 0x20b5 + 0x236 * -0x1d) + parseInt(w(0x1b3)) / (-0x1d9 * -0x1 + -0x1 * 0x2569 + 0x2397 * 0x1) * (parseInt(w(0x1b9)) / (-0x89e * -0x4 + -0xdfd * -0x1 + 0xb * -0x467)) + -parseInt(w(0x1b1)) / (0x1 * 0x240b + 0x20f0 + 0x6e5 * -0xa) * (-parseInt(v(0x1ce)) / (-0x1754 + 0x15ad * -0x1 + 0x2d0b)) + -parseInt(v(0x1c3)) / (0x1c9d + -0x32 * 0x1e + -0x16b6);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x50afc + 0x8d1b1 + -0x6d3f9));
var __importDefault = this && this[x(0x1c1) + y(0x1ab)] || function (c) {
    const z = y;
    return c && c[z(0x1c6)] ? c : { 'default': c };
};
function a() {
    const C = [
        'T_REPLY_FO',
        '137482cxJxxP',
        '10dlOKxN',
        'rs/AppErro',
        'ERR_NO_FAS',
        'fault',
        'tenantId',
        'message',
        'Jgjxt',
        'xpMxL',
        '348qflQlN',
        '8017731nUxrqg',
        'ls/FastRep',
        '1620227cBODcJ',
        'findOne',
        'defineProp',
        'AFYuS',
        'update',
        '../../mode',
        '24dzkrlX',
        'erty',
        '2076635MtEpBU',
        'where',
        'UND',
        '5330658vTdauB',
        'userId',
        '../../erro',
        '__importDe',
        'attributes',
        '7962746UBZKtl',
        'default',
        'value',
        '__esModule',
        'key',
        'reload',
        'wNiJs',
        '8787aoXeQJ',
        '9YcFTWQ'
    ];
    a = function () {
        return C;
    };
    return a();
}
const k = {};
k[y(0x1c5)] = !![], Object[y(0x1b5) + y(0x1ba)](exports, y(0x1c6), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x18cf + 0x2134 + 0xb45 * -0x5);
        let h = e[f];
        return h;
    }, b(c, d);
}
const AppError_1 = __importDefault(require(x(0x1c0) + x(0x1cf) + 'r')), FastReply_1 = __importDefault(require(x(0x1b8) + y(0x1b2) + 'ly')), UpdateFastReplyService = async ({
        fastReplyData: h,
        fastReplyId: i
    }) => {
        const A = y, B = y, j = {};
        j[A(0x1c9)] = A(0x1c7), j[B(0x1af)] = B(0x1ad), j[A(0x1ae)] = A(0x1bf), j[A(0x1b6)] = A(0x1aa) + B(0x1cc) + B(0x1bd);
        const l = j, {
                key: m,
                message: n,
                userId: o,
                tenantId: p
            } = h, q = {};
        q['id'] = i, q[A(0x1ac)] = p;
        const r = {};
        r[A(0x1bc)] = q, r[B(0x1c2)] = [
            'id',
            l[B(0x1c9)],
            l[B(0x1af)],
            l[A(0x1ae)]
        ];
        const s = await FastReply_1[B(0x1c4)][B(0x1b4)](r);
        if (!s)
            throw new AppError_1[(A(0x1c4))](l[A(0x1b6)], 0x59 + -0x47a + 0x5b5);
        const t = {};
        t[A(0x1c7)] = m, t[B(0x1ad)] = n, t[A(0x1bf)] = o, await s[B(0x1b7)](t);
        const u = {};
        return u[B(0x1c2)] = [
            'id',
            l[A(0x1c9)],
            l[A(0x1af)],
            l[A(0x1ae)]
        ], await s[A(0x1c8)](u), s;
    };
exports[x(0x1c4)] = UpdateFastReplyService;