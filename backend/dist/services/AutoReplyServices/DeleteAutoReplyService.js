'use strict';
const u = b, v = b;
(function (c, d) {
    const s = b, t = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(s(0x142)) / (0x69c + -0x872 + 0x1d7) + parseInt(t(0x137)) / (-0x15f + -0x6a5 + 0x806) * (parseInt(s(0x151)) / (0x7d * 0x5 + -0xe * 0x253 + 0x1e1c)) + -parseInt(t(0x138)) / (0x30 * -0x61 + 0x2086 + 0xe52 * -0x1) * (parseInt(s(0x12d)) / (-0x18da + 0x1c * 0xb + 0x17ab)) + -parseInt(t(0x14a)) / (0x212a + 0x10f3 * 0x1 + -0x3217) * (-parseInt(t(0x13a)) / (0x965 + 0xcf9 * -0x2 + 0x1 * 0x1094)) + parseInt(s(0x144)) / (0x19 * 0xc3 + 0x125 * -0x1 + -0x8ef * 0x2) + -parseInt(s(0x13b)) / (0x25ae + 0x21f + 0x2 * -0x13e2) * (parseInt(t(0x13e)) / (-0x1cf + 0xcc3 + -0xaea)) + -parseInt(t(0x13d)) / (-0xd84 + 0x1b7c + -0xded) * (-parseInt(t(0x14e)) / (-0x184 * 0xd + -0x305 * -0x1 + 0x10bb));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x5cd8a + -0x3d6a3 + -0x15913 * -0x2));
var __importDefault = this && this[u(0x14d) + u(0x140)] || function (c) {
    const w = v;
    return c && c[w(0x148)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x10c7 + 0x53 + 0x11a1);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[v(0x135)] = !![], Object[u(0x12f) + u(0x13f)](exports, v(0x148), k);
const AutoReply_1 = __importDefault(require(v(0x145) + u(0x131) + 'ly')), AppError_1 = __importDefault(require(u(0x14b) + u(0x133) + 'r')), Ticket_1 = __importDefault(require(v(0x145) + u(0x136))), DeleteAutoReplyService = async ({
        id: h,
        tenantId: i
    }) => {
        const x = v, y = u, j = {};
        j[x(0x146)] = x(0x134) + x(0x130) + y(0x141) + 'ET', j[x(0x12e)] = y(0x150) + y(0x13c) + y(0x143);
        const l = j, m = {};
        m['id'] = h, m[y(0x147)] = i;
        const n = {};
        n[y(0x14f)] = m;
        const o = await AutoReply_1[y(0x139)][y(0x149)](n), p = {};
        p[x(0x14c) + 'd'] = h;
        const q = {};
        q[y(0x14f)] = p;
        const r = await Ticket_1[y(0x139)][x(0x149)](q);
        if (r)
            throw new AppError_1[(y(0x139))](l[x(0x146)], -0x2479 + -0x1d5a + 0x4367);
        if (!o)
            throw new AppError_1[(y(0x139))](l[x(0x12e)], -0xb65 + 0x15 * -0x3d + -0x27 * -0x76);
        await o[y(0x132)]();
    };
exports[u(0x139)] = DeleteAutoReplyService;
function a() {
    const z = [
        'O_REPLY_FO',
        '2227599veBRHB',
        '10AeVdXj',
        'erty',
        'fault',
        'IONED_TICK',
        '77826qKOjSd',
        'UND',
        '631208RtGdBT',
        '../../mode',
        'UCSdg',
        'tenantId',
        '__esModule',
        'findOne',
        '6474DlOUfG',
        '../../erro',
        'autoReplyI',
        '__importDe',
        '24pGqSVV',
        'where',
        'ERR_NO_AUT',
        '159708Tuqlqi',
        '55bRuRPj',
        'JdReV',
        'defineProp',
        'EPLY_RELAT',
        'ls/AutoRep',
        'destroy',
        'rs/AppErro',
        'ERR_AUTO_R',
        'value',
        'ls/Ticket',
        '10JFaqfh',
        '146612HqgZfO',
        'default',
        '2541aCJDXK',
        '3198114nCZbrE'
    ];
    a = function () {
        return z;
    };
    return a();
}