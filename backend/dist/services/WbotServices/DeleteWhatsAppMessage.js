'use strict';
function a() {
    const F = [
        '721671jKsyfd',
        'log',
        'ileys',
        '136EfsfvU',
        'ls/Message',
        '.net',
        '../../help',
        'khysX',
        'include',
        'isDeleted',
        '34280JIGFIf',
        'No\x20message',
        'delete',
        '155020oUWkoJ',
        'leys',
        'erty',
        's.whatsapp',
        'parse',
        '354aVhvyx',
        '8alslmO',
        'ls/Ticket',
        'g.us',
        '1025232KtnPSA',
        'contact',
        'rs/AppErro',
        'ERR_DELETE',
        '11411980WZzGqy',
        'key',
        'update',
        'value',
        '../../erro',
        '248437xqbmKt',
        'nLLZt',
        'ers/GetTic',
        'tMessageBa',
        'defineProp',
        '__importDe',
        '../../mode',
        'ketWbotBai',
        'h\x20this\x20ID.',
        'vYvao',
        '__esModule',
        'sendMessag',
        'number',
        '10182969QyEwRx',
        '_WAPP_MSG',
        'ers/GetWbo',
        'model',
        'isGroup',
        'dataJson',
        'fault',
        'where',
        'gARTx',
        'Chbpp',
        'MPwsb',
        'ticket',
        'findOne',
        'default',
        '\x20found\x20wit'
    ];
    a = function () {
        return F;
    };
    return a();
}
const A = b, B = b;
(function (c, d) {
    const y = b, z = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(y(0xfa)) / (0x4f7 + 0x153f + 0x1 * -0x1a35) * (parseInt(z(0x100)) / (0x1fd6 * 0x1 + 0x1a76 + -0x3a4a)) + -parseInt(y(0xed)) / (-0xa3 * 0x1 + 0x1 * -0x14d7 + -0x157d * -0x1) + parseInt(z(0x103)) / (0x6 * -0x4e5 + 0x6e3 + 0x167f) + parseInt(y(0xf7)) / (0x4e3 * 0x7 + 0x1e90 + -0x40c0) * (-parseInt(y(0xff)) / (-0x51 + 0x93d + -0x43 * 0x22)) + parseInt(y(0x10c)) / (-0x1 * -0x4b4 + -0x26d2 + 0x2225) * (parseInt(y(0xf0)) / (0xb11 * -0x3 + -0x8 * 0x307 + -0xb * -0x539)) + -parseInt(z(0xde)) / (-0xe92 + 0x1 * -0xe87 + 0x3 * 0x9b6) + parseInt(z(0x107)) / (-0x2146 + -0x4d + -0x219d * -0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1673 * 0x11b + -0xbe04 * -0xf + 0x1a9174));
var __importDefault = this && this[A(0x111) + B(0xe4)] || function (c) {
    const C = A;
    return c && c[C(0xdb)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x58d + 0x2e5 * 0x3 + -0x95 * 0x17);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[B(0x10a)] = !![], Object[A(0x110) + A(0xfc)](exports, B(0xdb), k);
const AppError_1 = __importDefault(require(A(0x10b) + B(0x105) + 'r')), Message_1 = __importDefault(require(A(0x112) + B(0xf1))), Ticket_1 = __importDefault(require(B(0x112) + A(0x101))), GetTicketWbotBaileys_1 = __importDefault(require(B(0xf3) + A(0x10e) + B(0x113) + B(0xfb))), GetWbotMessageBaileys_1 = __importDefault(require(A(0xf3) + A(0xe0) + A(0x10f) + B(0xef))), DeleteWhatsAppMessage = async i => {
        const D = A, E = A, j = {};
        j[D(0xf4)] = D(0xe9), j[E(0xe8)] = D(0x104), j[D(0xe6)] = E(0xf8) + E(0xec) + D(0xd9), j[E(0xda)] = D(0x102), j[D(0x10d)] = E(0xfd) + D(0xf2), j[E(0xe7)] = D(0x106) + D(0xdf);
        const l = j, m = {};
        m['id'] = i;
        const n = {};
        n[E(0xe1)] = Ticket_1[D(0xeb)], n['as'] = l[E(0xf4)], n[D(0xf5)] = [l[D(0xe8)]];
        const o = {};
        o[E(0xe5)] = m, o[E(0xf5)] = [n];
        const p = await Message_1[D(0xeb)][E(0xea)](o);
        if (!p)
            throw new AppError_1[(D(0xeb))](l[E(0xe6)]);
        const {ticket: q} = p, r = await (0x146d + -0x216 + -0x1 * 0x1257, GetWbotMessageBaileys_1[E(0xeb)])(q, i);
        try {
            const t = await (0x5f5 * -0x1 + -0x22d7 + 0x28cc, GetTicketWbotBaileys_1[D(0xeb)])(q), u = r, v = JSON[D(0xfe)](u[E(0xe3)]), w = {};
            w[D(0xf9)] = v[E(0x108)], await t[E(0xdc) + 'e'](q[D(0x104)][E(0xdd)] + '@' + (q[E(0xe2)] ? l[D(0xda)] : l[D(0x10d)]), w);
        } catch (x) {
            console[E(0xee)](x);
            throw new AppError_1[(D(0xeb))](l[D(0xe7)]);
        }
        const s = {};
        return s[E(0xf6)] = !![], await p[E(0x109)](s), p;
    };
exports[A(0xeb)] = DeleteWhatsAppMessage;