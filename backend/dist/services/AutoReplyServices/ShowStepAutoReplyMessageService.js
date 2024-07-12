'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(t(0xe2)) / (0x6e4 + 0xa61 * 0x2 + 0x151 * -0x15) + parseInt(u(0xe1)) / (0x4 * 0x314 + 0xe4d * -0x1 + -0x1ff * -0x1) * (parseInt(t(0xd4)) / (0xb9c + 0x5e7 * 0x1 + -0x8c * 0x20)) + parseInt(t(0xe7)) / (-0x14e9 + -0x1 * -0x5b3 + 0xf3a) * (parseInt(t(0xd2)) / (-0x1883 + 0x1165 + 0x723)) + parseInt(t(0xca)) / (0x59 * 0x11 + 0x31 * -0x88 + 0x3 * 0x6b7) * (-parseInt(t(0xc8)) / (0xeac + 0x33 * 0x35 + -0x1934)) + parseInt(u(0xd8)) / (-0x9be + -0x31 * -0x84 + -0xf7e) + parseInt(u(0xda)) / (-0x22ca + 0x13eb + 0xee8) * (-parseInt(u(0xd5)) / (-0x1478 + 0xbb + 0x3d * 0x53)) + -parseInt(t(0xd7)) / (-0x1492 * -0x1 + -0x47e + -0x1009);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x540d * -0x2e + 0x47 * 0x952 + -0x2b972 * 0x2));
function a() {
    const A = [
        'rs/AppErro',
        'initialSte',
        'ls/StepsRe',
        'ERR_NO_STE',
        '898236QsaHcz',
        '1084788YqKhea',
        'action',
        'iVgqY',
        'fault',
        '../../mode',
        '4TLLBun',
        'tenantId',
        'where',
        'default',
        '../../erro',
        '9944137QOgJGr',
        'defineProp',
        '6VSbyui',
        'findOne',
        'LY_FOUND',
        'value',
        '__importDe',
        'P_AUTO_REP',
        'model',
        'idAutoRepl',
        '7542295foMgPF',
        '__esModule',
        '3HbemjW',
        '832530vXulwr',
        'ply',
        '10345885EfvfdS',
        '8293120TpQsnQ',
        'include',
        '99VmyPGj',
        'ls/AutoRep',
        'erty'
    ];
    a = function () {
        return A;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x4 * 0x22 + 0x693 + -0x547);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[v(0xce) + v(0xe5)] || function (c) {
    const x = w;
    return c && c[x(0xd3)] ? c : { 'default': c };
};
const k = {};
k[w(0xcd)] = !![], Object[v(0xc9) + w(0xdc)](exports, v(0xd3), k);
const AutoReply_1 = __importDefault(require(v(0xe6) + w(0xdb) + 'ly')), StepsReply_1 = __importDefault(require(v(0xe6) + v(0xdf) + w(0xd6))), AppError_1 = __importDefault(require(v(0xc7) + v(0xdd) + 'r')), ShowStepAutoReplyMessageService = async (g, h, i, j = ![], l) => {
        const y = w, z = w, m = {};
        m[y(0xe4)] = y(0xe0) + z(0xcf) + z(0xcc);
        const n = m, o = {};
        j ? o[y(0xde) + 'p'] = j : (o[z(0xd1) + 'y'] = h, o['id'] = i);
        const p = {};
        p[y(0xe3)] = g, p[z(0xc4)] = l;
        const q = {};
        q[y(0xd0)] = AutoReply_1[z(0xc6)], q[z(0xc5)] = p;
        const r = {};
        r[y(0xc5)] = o, r[z(0xd9)] = [q];
        const s = await StepsReply_1[z(0xc6)][z(0xcb)](r);
        if (!s)
            throw new AppError_1[(z(0xc6))](n[y(0xe4)], 0x1ff5 + 0xd4b + -0x1a * 0x1ae);
        return s;
    };
exports[w(0xc6)] = ShowStepAutoReplyMessageService;