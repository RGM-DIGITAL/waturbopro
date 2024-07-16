'use strict';
const s = b, t = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(q(0x144)) / (0x91d * 0x3 + -0x1adb + -0x3 * 0x29) * (-parseInt(r(0x139)) / (-0xd * 0xa9 + 0x1 * 0x2359 + -0x1ac2)) + -parseInt(q(0x142)) / (-0x1388 + -0x8f * 0x31 + -0x1 * -0x2eea) * (parseInt(q(0x14d)) / (-0x2348 + -0x2 * -0x6fa + 0x1558)) + parseInt(q(0x140)) / (-0x153 * -0x1d + -0x16eb + -0x25 * 0x6b) + parseInt(r(0x13d)) / (-0x1d * 0x92 + 0xcf1 * 0x2 + 0x4a9 * -0x2) * (parseInt(r(0x14e)) / (-0x20d7 * -0x1 + -0x11bd + 0x1 * -0xf13)) + -parseInt(r(0x13b)) / (-0x166d + -0x23 * -0xe1 + 0x2 * -0x427) + parseInt(r(0x146)) / (-0x1a9c + -0x6ea + 0x218f) * (parseInt(r(0x14f)) / (-0x5f3 * 0x3 + -0x1 * -0x1a77 + -0x894)) + -parseInt(r(0x130)) / (0x4b * -0x4e + 0x136c + 0x379 * 0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x163fdf * 0x1 + -0x97f72 + 0x13517));
var __importDefault = this && this[s(0x14c) + t(0x131)] || function (c) {
    const u = s;
    return c && c[u(0x12b)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1a67 + 0x3cb * 0x3 + 0x102b * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[s(0x151)] = !![], Object[s(0x132) + s(0x133)](exports, t(0x12b), k);
const getQuotedForMessageId_1 = __importDefault(require(s(0x126) + s(0x137) + s(0x147) + t(0x136))), CreateMessageService_1 = __importDefault(require(s(0x14a) + s(0x13c) + s(0x12d) + s(0x149))), VerifyMessage = async (d, e, f, g) => {
        const v = t, w = t, h = {
                'DuGQb': function (o, p) {
                    return o && p;
                },
                'lexVm': function (o, p) {
                    return o(p);
                },
                'qXJUU': v(0x135),
                'lmRXF': function (o, p) {
                    return o * p;
                },
                'mUUiA': v(0x12c),
                'oISVC': function (o, p) {
                    return o || p;
                }
            };
        let i, j = {};
        i = d?.[w(0x128)], j = d?.[v(0x143)];
        h[v(0x134)](!i, j) && (i = j?.[w(0x129) + w(0x14b)]);
        let l;
        if (i?.[w(0x150) + w(0x13e)]?.[w(0x145)]) {
            const o = await (-0x264b + -0x122c * -0x2 + 0x1f3, getQuotedForMessageId_1[w(0x141)])(i[w(0x150) + w(0x13e)][w(0x145)], f[w(0x12a)]);
            l = o?.['id'] || undefined;
        }
        const m = {
            'messageId': h[w(0x125)](String, i?.[v(0x145)]),
            'ticketId': f['id'],
            'contactId': e ? undefined : g['id'],
            'body': i[v(0x12e)],
            'fromMe': e,
            'read': e,
            'mediaType': h[v(0x148)],
            'quotedMsgId': l,
            'timestamp': h[w(0x127)](+i[w(0x13f)], 0x15ca + 0xab5 + -0x1c97),
            'status': h[v(0x12f)]
        };
        await f[w(0x143)]({
            'lastMessage': i[v(0x12e)],
            'lastMessageAt': new Date()[v(0x138)](),
            'answered': h[v(0x152)](e, ![])
        });
        const n = {};
        n[w(0x13a) + 'a'] = m, n[v(0x12a)] = f[w(0x12a)], await (-0x1 * -0x1669 + 0x26ca + -0x3d33, CreateMessageService_1[v(0x141)])(n);
    };
exports[t(0x141)] = VerifyMessage;
function a() {
    const x = [
        'reateMessa',
        'text',
        'mUUiA',
        '3396690NkitLk',
        'fault',
        'defineProp',
        'erty',
        'DuGQb',
        'chat',
        'ageId',
        'ers/getQuo',
        'getTime',
        '2716822WsMTXS',
        'messageDat',
        '10362536NQlxke',
        'Services/C',
        '1787250NfINiZ',
        'essage',
        'date',
        '3361855IfmXgf',
        'default',
        '3ZuzVHk',
        'update',
        '1xObNaC',
        'message_id',
        '27xNnpDZ',
        'tedForMess',
        'qXJUU',
        'geService',
        '../Message',
        'sage',
        '__importDe',
        '257276DXsJqp',
        '7HkvUsK',
        '848630BIhnMv',
        'reply_to_m',
        'value',
        'oISVC',
        'lexVm',
        '../../help',
        'lmRXF',
        'message',
        'edited_mes',
        'tenantId',
        '__esModule',
        'received'
    ];
    a = function () {
        return x;
    };
    return a();
}