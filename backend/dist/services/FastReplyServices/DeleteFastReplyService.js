'use strict';
function a() {
    const v = [
        'where',
        '373944redRDL',
        'value',
        '1NvzykO',
        '../../erro',
        '30mbYPef',
        'WKFXv',
        '506540uICueT',
        'UND',
        '192wAjsQA',
        'tenantId',
        'rs/AppErro',
        'ERR_FAST_R',
        'ERR_NO_FAS',
        'ls/FastRep',
        'destroy',
        '__esModule',
        '198170nMKbzM',
        'findOne',
        'T_REPLY_FO',
        'EPLY_EXIST',
        '52SHSXWX',
        'nmmYg',
        'default',
        'defineProp',
        '../../mode',
        'fault',
        '4742144pmAdIS',
        '23855XYsIUP',
        '__importDe',
        '258822YOtGXi',
        'erty',
        '31446UHQhGW'
    ];
    a = function () {
        return v;
    };
    return a();
}
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(o(0x1c2)) / (0x1 * -0xc7b + 0xb26 + 0x156) * (parseInt(o(0x1bc)) / (-0x2513 + 0x130d + 0x2 * 0x904)) + -parseInt(o(0x1c0)) / (0x30c + 0xa * -0x373 + 0x1f75 * 0x1) + parseInt(o(0x1d4)) / (0xd72 * -0x2 + -0x1951 * 0x1 + 0x1cd * 0x1d) * (-parseInt(o(0x1ba)) / (0x26b + -0x7e4 + 0x2 * 0x2bf)) + parseInt(o(0x1c4)) / (-0x4 * 0x503 + -0x1cb * 0x3 + 0x1973) * (parseInt(p(0x1d0)) / (-0xef9 + -0x1852 + 0x2 * 0x13a9)) + parseInt(p(0x1c8)) / (-0x26d5 + -0x2f * -0x86 + 0xe43) * (-parseInt(o(0x1be)) / (-0x2f3 + 0x240 + 0x1 * 0xbc)) + -parseInt(p(0x1c6)) / (0x22 * 0xea + 0x8f9 * 0x3 + -0x39f5) + parseInt(p(0x1b9)) / (-0x9 * 0x3d5 + -0x283 * 0x9 + 0x1 * 0x3923);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x34576 + -0x11c2 * 0xd + 0x6091e));
var __importDefault = this && this[q(0x1bb) + q(0x1b8)] || function (c) {
    const s = q;
    return c && c[s(0x1cf)] ? c : { 'default': c };
};
const k = {};
k[q(0x1c1)] = !![], Object[r(0x1d7) + r(0x1bd)](exports, r(0x1cf), k);
const AppError_1 = __importDefault(require(r(0x1c3) + q(0x1ca) + 'r')), FastReply_1 = __importDefault(require(r(0x1d8) + r(0x1cd) + 'ly')), DeleteFastReplyService = async ({
        id: f,
        tenantId: g
    }) => {
        const t = q, u = r, h = {};
        h[t(0x1c5)] = t(0x1cc) + t(0x1d2) + t(0x1c7), h[u(0x1d5)] = t(0x1cb) + t(0x1d3) + 'S';
        const i = h, j = {};
        j['id'] = f, j[t(0x1c9)] = g;
        const l = {};
        l[t(0x1bf)] = j;
        const m = await FastReply_1[u(0x1d6)][t(0x1d1)](l);
        if (!m)
            throw new AppError_1[(t(0x1d6))](i[t(0x1c5)], -0x629 + 0x1d29 + -0x156c);
        try {
            await m[u(0x1ce)]();
        } catch (n) {
            throw new AppError_1[(u(0x1d6))](i[t(0x1d5)], 0x6a * -0x4 + -0x43e + -0x42 * -0x1d);
        }
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x6dc + 0x1149 + -0x8b5);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[r(0x1d6)] = DeleteFastReplyService;