'use strict';
const x = b, y = b;
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(v(0x1c4)) / (0x109 + 0xd2f * 0x2 + -0x1b66) * (-parseInt(v(0x1d0)) / (0x161f + -0x1de8 + 0x7cb)) + parseInt(v(0x1ca)) / (-0x2546 + 0x1964 + 0x57 * 0x23) + -parseInt(v(0x1d5)) / (0x1721 + 0x6 * 0x303 + 0x32b * -0xd) * (parseInt(v(0x1c1)) / (0x49 * 0x17 + -0x277 * 0x5 + 0x5c9)) + -parseInt(v(0x1c9)) / (-0x1 * 0x10f7 + -0x2c5 * -0xb + -0xd7a) * (-parseInt(w(0x1be)) / (-0x6a0 + -0x1be8 + 0x9 * 0x3d7)) + -parseInt(w(0x1c8)) / (0x1771 + 0xf94 + -0x26fd) * (parseInt(v(0x1c3)) / (-0x20c * -0x7 + -0x157 * -0xc + -0x1e5f)) + -parseInt(w(0x1d4)) / (-0xdc5 + 0x61 * -0x32 + 0x20c1) * (-parseInt(w(0x1d1)) / (0x4 * 0x5bf + -0x1ca * -0x5 + -0x1fe3 * 0x1)) + -parseInt(v(0x1b6)) / (-0x41 * 0x25 + 0xa0 * -0x25 + -0x3 * -0xadb);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x6e3 * 0x351 + 0x3870f + 0x38d * 0x8c4));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x124 * -0x21 + 0x1e * 0x12f + 0x3d8);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[x(0x1b7) + x(0x1d7)] || function (c) {
    const z = x;
    return c && c[z(0x1c5)] ? c : { 'default': c };
};
const k = {};
k[x(0x1dc)] = !![], Object[y(0x1d2) + x(0x1b8)](exports, x(0x1c5), k);
function a() {
    const C = [
        '540tUdepA',
        '28276ejmKdZ',
        '__esModule',
        'JYpuv',
        'userId',
        '35000OnHmSm',
        '994098WrlXIb',
        '570597ROhuqs',
        'xNGia',
        'update',
        'ERR_NO_FAS',
        '../../mode',
        '../../erro',
        '34IHionJ',
        '15204365zAJZyA',
        'defineProp',
        'PYjRc',
        '10MpTUbM',
        '6220sKZzeK',
        'findOne',
        'fault',
        'czyFS',
        'attributes',
        'reload',
        'key',
        'value',
        '12142800HZKHRi',
        '__importDe',
        'erty',
        'rs/AppErro',
        'tenantId',
        'message',
        'default',
        'T_REPLY_FO',
        '14qitSSa',
        'where',
        'UND',
        '1080MHioRC',
        'ls/FastRep'
    ];
    a = function () {
        return C;
    };
    return a();
}
const AppError_1 = __importDefault(require(x(0x1cf) + x(0x1b9) + 'r')), FastReply_1 = __importDefault(require(x(0x1ce) + x(0x1c2) + 'ly')), UpdateFastReplyService = async ({
        fastReplyData: h,
        fastReplyId: i
    }) => {
        const A = x, B = x, j = {};
        j[A(0x1d3)] = A(0x1db), j[B(0x1c6)] = A(0x1bb), j[B(0x1d8)] = A(0x1c7), j[B(0x1cb)] = A(0x1cd) + B(0x1bd) + B(0x1c0);
        const l = j, {
                key: m,
                message: n,
                userId: o,
                tenantId: p
            } = h, q = {};
        q['id'] = i, q[A(0x1ba)] = p;
        const r = {};
        r[B(0x1bf)] = q, r[B(0x1d9)] = [
            'id',
            l[A(0x1d3)],
            l[A(0x1c6)],
            l[A(0x1d8)]
        ];
        const s = await FastReply_1[A(0x1bc)][B(0x1d6)](r);
        if (!s)
            throw new AppError_1[(B(0x1bc))](l[A(0x1cb)], -0x1 * -0x8cd + -0x20dd + 0x19a4);
        const t = {};
        t[A(0x1db)] = m, t[B(0x1bb)] = n, t[B(0x1c7)] = o, await s[A(0x1cc)](t);
        const u = {};
        return u[B(0x1d9)] = [
            'id',
            l[A(0x1d3)],
            l[A(0x1c6)],
            l[A(0x1d8)]
        ], await s[A(0x1da)](u), s;
    };
exports[y(0x1bc)] = UpdateFastReplyService;