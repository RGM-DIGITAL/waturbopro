'use strict';
const s = b, t = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(q(0x201)) / (0x8 * 0x4be + 0x23b7 + 0x2 * -0x24d3) + parseInt(q(0x20c)) / (0x1ca1 + -0x27 + -0x1c78) + -parseInt(q(0x200)) / (-0x115 * 0xa + -0x1e09 + -0x28de * -0x1) + parseInt(q(0x210)) / (-0x1f77 + -0xa65 * -0x3 + 0x4c) + parseInt(q(0x1ed)) / (0x2 * 0x10 + -0x4 * 0x5cd + 0x49 * 0x51) + -parseInt(q(0x202)) / (-0x1345 * 0x1 + -0x20d8 + 0x3 * 0x1161) * (parseInt(r(0x1ef)) / (-0x1b78 + -0x1 * 0x2c + -0x939 * -0x3)) + -parseInt(q(0x209)) / (-0x66d + -0xf41 + -0xadb * -0x2) * (parseInt(r(0x20b)) / (0x2 * 0xbd7 + -0x4 * 0x5d1 + 0x61 * -0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2622 * -0x32 + 0x3 * -0x4cb9 + -0x25816));
function a() {
    const x = [
        'tPflV',
        'ers/getQuo',
        '../Message',
        'default',
        'tenantId',
        '2239990iofriD',
        '__importDe',
        '970879rvoJDN',
        'iNvbR',
        'bOqnN',
        'erty',
        'reply_to_m',
        'defineProp',
        'Services/C',
        'tedForMess',
        'text',
        'messageDat',
        'reateMessa',
        'message_id',
        'message',
        'edited_mes',
        'essage',
        'received',
        'myPlo',
        '650172vHHbRP',
        '535592sGECcx',
        '12HClwci',
        'chat',
        'update',
        'date',
        'getTime',
        'geService',
        '__esModule',
        '752808IqOJvZ',
        'sage',
        '99VbLaQi',
        '816592HrRYXH',
        'fault',
        '../../help',
        'value',
        '1651592qIrYRG',
        'RrDqB',
        'ZnxzM',
        'ageId'
    ];
    a = function () {
        return x;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xca * 0x13 + 0x16d2 + -0x5ea);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[s(0x1ee) + t(0x20d)] || function (c) {
    const u = t;
    return c && c[u(0x208)] ? c : { 'default': c };
};
const k = {};
k[s(0x20f)] = !![], Object[s(0x1f4) + t(0x1f2)](exports, t(0x208), k);
const getQuotedForMessageId_1 = __importDefault(require(t(0x20e) + t(0x215) + t(0x1f6) + s(0x213))), CreateMessageService_1 = __importDefault(require(s(0x1ea) + t(0x1f5) + t(0x1f9) + s(0x207))), VerifyMessage = async (d, e, f, g) => {
        const v = s, w = s, h = {
                'myPlo': function (o, p) {
                    return o && p;
                },
                'bOqnN': function (o, p) {
                    return o(p);
                },
                'RrDqB': v(0x203),
                'iNvbR': function (o, p) {
                    return o * p;
                },
                'ZnxzM': w(0x1fe),
                'tPflV': function (o, p) {
                    return o || p;
                }
            };
        let i, j = {};
        i = d?.[v(0x1fb)], j = d?.[w(0x204)];
        h[v(0x1ff)](!i, j) && (i = j?.[w(0x1fc) + w(0x20a)]);
        let l;
        if (i?.[w(0x1f3) + w(0x1fd)]?.[v(0x1fa)]) {
            const o = await (-0x38b + -0x181c + 0x1 * 0x1ba7, getQuotedForMessageId_1[v(0x1eb)])(i[w(0x1f3) + w(0x1fd)][v(0x1fa)], f[w(0x1ec)]);
            l = o?.['id'] || undefined;
        }
        const m = {
            'messageId': h[v(0x1f1)](String, i?.[v(0x1fa)]),
            'ticketId': f['id'],
            'contactId': e ? undefined : g['id'],
            'body': i[v(0x1f7)],
            'fromMe': e,
            'read': e,
            'mediaType': h[v(0x211)],
            'quotedMsgId': l,
            'timestamp': h[w(0x1f0)](+i[w(0x205)], -0x251b + 0x2465 + 0x49e),
            'status': h[v(0x212)]
        };
        await f[v(0x204)]({
            'lastMessage': i[w(0x1f7)],
            'lastMessageAt': new Date()[w(0x206)](),
            'answered': h[w(0x214)](e, ![])
        });
        const n = {};
        n[v(0x1f8) + 'a'] = m, n[v(0x1ec)] = f[v(0x1ec)], await (0x48 + -0x2165 + 0x211d, CreateMessageService_1[w(0x1eb)])(n);
    };
exports[t(0x1eb)] = VerifyMessage;