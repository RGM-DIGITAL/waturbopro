'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xf9 * -0x25 + -0xfbd * -0x2 + 0x2 * 0x2a5);
        let h = e[f];
        return h;
    }, b(c, d);
}
const A = b, B = b;
function a() {
    const F = [
        'ers/GetTic',
        '3155000DjBVzt',
        '__importDe',
        '10KpKfTt',
        '314097ziEgCi',
        '400077qOhLHo',
        'dataJson',
        '../../help',
        '96muAXHo',
        'pmEzE',
        'h\x20this\x20ID.',
        'fault',
        '.net',
        'ls/Ticket',
        's.whatsapp',
        'key',
        'ls/Message',
        '189xFyjTx',
        'delete',
        '4858Ijqawr',
        'rs/AppErro',
        'where',
        'ileys',
        'contact',
        'No\x20message',
        '1082900JVnfxc',
        'XhKah',
        'include',
        '3FRNlwj',
        '../../erro',
        'FsSEV',
        'ZDvHE',
        'LqJxq',
        'update',
        'ticket',
        'number',
        '_WAPP_MSG',
        'value',
        'tMessageBa',
        'log',
        'isGroup',
        'g.us',
        'ERR_DELETE',
        'model',
        'leys',
        'findOne',
        'defineProp',
        'wxMlP',
        '../../mode',
        'erty',
        '136gKuSnL',
        'ketWbotBai',
        'parse',
        '\x20found\x20wit',
        '2861441ciZcmT',
        'ers/GetWbo',
        '16258788lcKtVI',
        'isDeleted',
        'default',
        '__esModule',
        'sendMessag'
    ];
    a = function () {
        return F;
    };
    return a();
}
(function (c, d) {
    const y = b, z = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(y(0xe5)) / (0x26a + 0x11cf + 0x50e * -0x4) * (parseInt(z(0xe7)) / (-0xe3 * 0x5 + 0x4 * 0x1a0 + 0x1f * -0x11)) + parseInt(y(0xf0)) / (0x13 * 0xf9 + 0xe26 + -0x32 * 0xa7) * (parseInt(z(0xd5)) / (0x3 * -0x57d + -0x71 * -0x26 + 0x19 * -0x3)) + parseInt(y(0xed)) / (0x931 * 0x2 + 0x1364 + -0x25c1) + parseInt(z(0xdc)) / (0x15f4 + -0x1e36 + 0x848) * (-parseInt(z(0xd8)) / (0x1cf5 + -0x8e8 + -0x1406)) + -parseInt(z(0xc9)) / (0x1 * 0x6c7 + 0x95 * 0x2d + -0x110 * 0x1f) * (-parseInt(z(0xd9)) / (-0x10fb + -0x1879 + 0x297d)) + parseInt(y(0xd7)) / (0x179c + -0x1531 + -0xcb * 0x3) * (parseInt(z(0xcd)) / (0x2 * -0x622 + -0x1d72 * 0x1 + -0x15 * -0x1fd)) + -parseInt(y(0xcf)) / (0x1f32 + 0x22 * -0x9 + 0x9fc * -0x3);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x3e692 + 0x1 * -0xc2eaf + 0x164cb1));
var __importDefault = this && this[A(0xd6) + A(0xdf)] || function (c) {
    const C = B;
    return c && c[C(0xd2)] ? c : { 'default': c };
};
const k = {};
k[B(0xf9)] = !![], Object[B(0x102) + B(0xc8)](exports, B(0xd2), k);
const AppError_1 = __importDefault(require(B(0xf1) + B(0xe8) + 'r')), Message_1 = __importDefault(require(B(0xc7) + A(0xe4))), Ticket_1 = __importDefault(require(A(0xc7) + A(0xe1))), GetTicketWbotBaileys_1 = __importDefault(require(A(0xdb) + B(0xd4) + A(0xca) + B(0x100))), GetWbotMessageBaileys_1 = __importDefault(require(A(0xdb) + B(0xce) + A(0xfa) + A(0xea))), DeleteWhatsAppMessage = async i => {
        const D = B, E = A, j = {};
        j[D(0xf4)] = D(0xf6), j[D(0x103)] = E(0xeb), j[E(0xee)] = D(0xec) + D(0xcc) + D(0xde), j[E(0xf2)] = D(0xfd), j[E(0xdd)] = D(0xe2) + E(0xe0), j[D(0xf3)] = D(0xfe) + D(0xf8);
        const l = j, m = {};
        m['id'] = i;
        const n = {};
        n[E(0xff)] = Ticket_1[D(0xd1)], n['as'] = l[D(0xf4)], n[D(0xef)] = [l[D(0x103)]];
        const o = {};
        o[D(0xe9)] = m, o[D(0xef)] = [n];
        const p = await Message_1[E(0xd1)][E(0x101)](o);
        if (!p)
            throw new AppError_1[(E(0xd1))](l[D(0xee)]);
        const {ticket: q} = p, r = await (-0x1 * -0x12c3 + -0x18aa + -0x1 * -0x5e7, GetWbotMessageBaileys_1[D(0xd1)])(q, i);
        try {
            const t = await (0x1f72 + 0x44f * -0x2 + -0x16d4, GetTicketWbotBaileys_1[D(0xd1)])(q), u = r, v = JSON[E(0xcb)](u[E(0xda)]), w = {};
            w[D(0xe6)] = v[D(0xe3)], await t[D(0xd3) + 'e'](q[E(0xeb)][D(0xf7)] + '@' + (q[E(0xfc)] ? l[E(0xf2)] : l[E(0xdd)]), w);
        } catch (x) {
            console[D(0xfb)](x);
            throw new AppError_1[(D(0xd1))](l[D(0xf3)]);
        }
        const s = {};
        return s[E(0xd0)] = !![], await p[D(0xf5)](s), p;
    };
exports[B(0xd1)] = DeleteWhatsAppMessage;