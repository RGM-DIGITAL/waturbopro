'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0x116)) / (0x1597 + 0x1 * 0x21b9 + -0x374f) + parseInt(o(0xfa)) / (0xc27 + -0x477 + 0x1 * -0x7ae) + parseInt(o(0x105)) / (0xc47 * -0x1 + -0x1 * -0x8c9 + -0x3 * -0x12b) * (-parseInt(n(0x111)) / (0xbc * -0x18 + -0x931 + 0x1ad5)) + parseInt(o(0x118)) / (0x1 * 0x11bd + -0x189e + 0x373 * 0x2) + -parseInt(n(0x117)) / (-0x149c + 0x773 * 0x1 + 0xd2f) + -parseInt(n(0x114)) / (-0x1 * -0x250a + -0x1175 * -0x1 + -0x38 * 0xf9) + -parseInt(n(0x104)) / (-0x9af + 0x19 * -0x35 + -0x3b9 * -0x4) * (-parseInt(o(0xfd)) / (0x1d7a * -0x1 + -0x188b + -0x176 * -0x25));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x86e9 * -0xc + 0xe8697 * 0x1 + -0xe * -0x2e5b));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xe7 * -0x9 + -0x794 + 0x10ad);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[p(0x10d) + p(0x110)] || function (c) {
    const r = q;
    return c && c[r(0xfc)] ? c : { 'default': c };
};
function a() {
    const u = [
        'geService',
        'HQAix',
        'item_id',
        'received',
        'update',
        'message',
        'erty',
        '__importDe',
        'text',
        'nxjTl',
        'fault',
        '818364JFJcSe',
        'messageDat',
        'reateMessa',
        '4755142FzSuba',
        'getTime',
        '825659PnZFtM',
        '1119708tyCyXm',
        '1334415WBJKLY',
        'umLjl',
        'FsRcY',
        '1787866spUdmr',
        'tenantId',
        '__esModule',
        '16633737jiZFiL',
        'Services/C',
        'defineProp',
        'default',
        'value',
        'chat',
        '../Message',
        '8qFpjPP',
        '9CECKAY'
    ];
    a = function () {
        return u;
    };
    return a();
}
const k = {};
k[p(0x101)] = !![], Object[q(0xff) + q(0x10c)](exports, q(0xfc), k);
const CreateMessageService_1 = __importDefault(require(q(0x103) + q(0xfe) + q(0x113) + q(0x106))), VerifyMessage = async (d, e, f, g) => {
        const s = q, t = p, h = {
                'HQAix': function (l, m) {
                    return l(m);
                },
                'nxjTl': s(0x102),
                'FsRcY': t(0x109),
                'umLjl': function (l, m) {
                    return l || m;
                }
            }, i = {
                'messageId': h[s(0x107)](String, d[t(0x10b)][t(0x108)]),
                'ticketId': f['id'],
                'contactId': e ? undefined : g['id'],
                'body': d[s(0x10b)][s(0x10e)],
                'fromMe': e,
                'read': e,
                'mediaType': h[s(0x10f)],
                'quotedMsgId': '',
                'timestamp': new Date()[s(0x115)](),
                'status': h[t(0x11a)]
            };
        await f[t(0x10a)]({
            'lastMessage': d[t(0x10b)][s(0x10e)],
            'lastMessageAt': new Date()[t(0x115)](),
            'answered': h[s(0x119)](e, ![])
        });
        const j = {};
        j[t(0x112) + 'a'] = i, j[t(0xfb)] = f[t(0xfb)], await (-0x1ba6 + -0x1c99 + -0x383f * -0x1, CreateMessageService_1[s(0x100)])(j);
    };
exports[q(0x100)] = VerifyMessage;