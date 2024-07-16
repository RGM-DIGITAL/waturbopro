'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0x9e)) / (0x5b3 * 0x6 + -0x265c + 0xb * 0x61) + parseInt(n(0xa0)) / (-0x112b + 0x3d * -0x79 + -0x1c5 * -0x1a) * (-parseInt(o(0xa7)) / (-0x1d63 + 0x9e + 0x6 * 0x4cc)) + -parseInt(o(0x8d)) / (-0x1b91 + 0x1cad + -0x118) + parseInt(o(0xab)) / (-0x1 * -0x182a + 0x1d10 + -0x3535) * (-parseInt(n(0x90)) / (-0x2 * -0x556 + 0x1835 + 0x22db * -0x1)) + parseInt(n(0xa8)) / (0x24ed * 0x1 + 0xa21 + -0x2f07) * (-parseInt(n(0x93)) / (-0xb8e + -0x1181 + 0x1 * 0x1d17)) + parseInt(o(0xa1)) / (-0x3eb + 0x11 * 0xa7 + -0x723) + parseInt(n(0x8e)) / (0x131a + -0x33b + -0xfd5) * (parseInt(n(0x91)) / (-0x1b * -0xca + 0x1f7 * 0xd + -0x6 * 0x7cd));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xab34f + -0x8575b + 0x1c9 * 0x24e));
var __importDefault = this && this[p(0x8c) + p(0x98)] || function (c) {
    const r = p;
    return c && c[r(0x8f)] ? c : { 'default': c };
};
const k = {};
k[p(0x9c)] = !![], Object[p(0x92) + q(0x96)](exports, q(0x8f), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x18a9 * 0x1 + 0x1094 + -0x1 * 0x28b3);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const u = [
        '394gfKwzX',
        '2392083AsGMmw',
        'update',
        'tenantId',
        'reateMessa',
        'getTime',
        'WKCUw',
        '10194PhBklJ',
        '7GvAJgC',
        'Services/C',
        'geService',
        '5tytTKg',
        'messageDat',
        'default',
        'chat',
        '__importDe',
        '115816lMOxuK',
        '10RRNQwY',
        '__esModule',
        '4677186VZMaGa',
        '30079841QwoJTU',
        'defineProp',
        '4407216fvZdqe',
        'received',
        'LRQtp',
        'erty',
        'text',
        'fault',
        '../Message',
        'EKEIy',
        'xYgsX',
        'value',
        'message',
        '547283uBZeMI',
        'item_id'
    ];
    a = function () {
        return u;
    };
    return a();
}
const CreateMessageService_1 = __importDefault(require(p(0x99) + p(0xa9) + p(0xa4) + q(0xaa))), VerifyMessage = async (d, e, f, g) => {
        const s = q, t = q, h = {
                'LRQtp': function (l, m) {
                    return l(m);
                },
                'xYgsX': s(0x8b),
                'EKEIy': s(0x94),
                'WKCUw': function (l, m) {
                    return l || m;
                }
            }, i = {
                'messageId': h[t(0x95)](String, d[s(0x9d)][s(0x9f)]),
                'ticketId': f['id'],
                'contactId': e ? undefined : g['id'],
                'body': d[t(0x9d)][s(0x97)],
                'fromMe': e,
                'read': e,
                'mediaType': h[t(0x9b)],
                'quotedMsgId': '',
                'timestamp': new Date()[s(0xa5)](),
                'status': h[t(0x9a)]
            };
        await f[s(0xa2)]({
            'lastMessage': d[t(0x9d)][s(0x97)],
            'lastMessageAt': new Date()[s(0xa5)](),
            'answered': h[s(0xa6)](e, ![])
        });
        const j = {};
        j[t(0xac) + 'a'] = i, j[s(0xa3)] = f[t(0xa3)], await (-0x2455 * 0x1 + -0xa3 * -0x8 + -0x1f3d * -0x1, CreateMessageService_1[t(0x8a)])(j);
    };
exports[p(0x8a)] = VerifyMessage;