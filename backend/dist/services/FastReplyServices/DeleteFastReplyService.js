'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(o(0xd7)) / (-0x8ae + 0x34d + 0x562) + -parseInt(o(0xc9)) / (0x1979 + -0x21 * 0x37 + -0x1260) + -parseInt(o(0xd4)) / (0x1ce5 * -0x1 + -0x49 * 0x2f + -0x1 * -0x2a4f) * (parseInt(p(0xcd)) / (0xc7b * -0x1 + -0x4e8 * -0x7 + -0x15d9)) + -parseInt(o(0xdb)) / (-0x52a + -0xd * -0x1bf + -0x2 * 0x8c2) * (parseInt(o(0xc7)) / (0x21df * -0x1 + 0x5eb + 0xdfd * 0x2)) + parseInt(o(0xcb)) / (0xb22 + 0x5b2 + 0xfd * -0x11) * (-parseInt(o(0xd3)) / (0x85 * 0x26 + -0x268a + 0x12d4)) + parseInt(o(0xca)) / (0x9b + 0x2681 * -0x1 + 0x25ef) * (parseInt(o(0xd9)) / (0x2452 + -0x9bb + -0x1a8d)) + parseInt(p(0xd2)) / (0x20d + -0xe33 + 0xc31);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * 0x81b5 + 0x340ff * -0x2 + 0xa1101));
var __importDefault = this && this[q(0xe3) + r(0xda)] || function (c) {
    const s = q;
    return c && c[s(0xd5)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x56d * -0x1 + -0x3b * -0x53 + -0x296 * 0x5);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
function a() {
    const v = [
        'EPLY_EXIST',
        'T_REPLY_FO',
        '18vtESaX',
        'rs/AppErro',
        '201416enufoB',
        '2270439TcCxQP',
        '313852AFcdld',
        'destroy',
        '8WwfdqN',
        'findOne',
        'UND',
        'erty',
        'ls/FastRep',
        '18213316BwTTAU',
        '32ZyGyHH',
        '636591ajmKOu',
        '__esModule',
        'UsYrE',
        '425798duDbLE',
        '../../mode',
        '10JkTDEa',
        'fault',
        '852265YalEIu',
        'default',
        '../../erro',
        'where',
        'tenantId',
        'ERR_FAST_R',
        'PdtwB',
        'ERR_NO_FAS',
        '__importDe',
        'value',
        'defineProp'
    ];
    a = function () {
        return v;
    };
    return a();
}
k[q(0xe4)] = !![], Object[q(0xe5) + r(0xd0)](exports, q(0xd5), k);
const AppError_1 = __importDefault(require(q(0xdd) + r(0xc8) + 'r')), FastReply_1 = __importDefault(require(r(0xd8) + r(0xd1) + 'ly')), DeleteFastReplyService = async ({
        id: f,
        tenantId: g
    }) => {
        const t = r, u = r, h = {};
        h[t(0xe1)] = u(0xe2) + u(0xc6) + u(0xcf), h[u(0xd6)] = t(0xe0) + u(0xe6) + 'S';
        const i = h, j = {};
        j['id'] = f, j[t(0xdf)] = g;
        const l = {};
        l[u(0xde)] = j;
        const m = await FastReply_1[t(0xdc)][u(0xce)](l);
        if (!m)
            throw new AppError_1[(t(0xdc))](i[t(0xe1)], 0x410 + -0x2c9 + 0x4d);
        try {
            await m[t(0xcc)]();
        } catch (n) {
            throw new AppError_1[(u(0xdc))](i[t(0xd6)], 0x10ce + -0x109 * 0x1 + -0xe31);
        }
    };
exports[r(0xdc)] = DeleteFastReplyService;