'use strict';
const s = b, t = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(q(0xa7)) / (-0x7ba * 0x3 + 0x2a * 0x4d + -0x49 * -0x25) * (parseInt(r(0x98)) / (-0x257 * 0x1 + 0x14a3 + -0x2 * 0x925)) + -parseInt(q(0xae)) / (-0x1101 + 0x92 * 0xd + -0x4cd * -0x2) * (-parseInt(r(0x94)) / (-0xc * 0x236 + -0xdd9 + 0x2865)) + parseInt(q(0x9e)) / (0x71a + -0xde5 + 0x6d0) * (-parseInt(q(0x9c)) / (-0x1ca1 * -0x1 + -0x171a * 0x1 + -0x581)) + parseInt(q(0xb3)) / (0x25bb + 0x2e9 * 0x1 + -0x25 * 0x119) + -parseInt(q(0x8d)) / (-0x6fa + -0x1939 + 0x203b) + parseInt(r(0xb7)) / (-0x135b + 0x64 * -0x42 + 0x2d2c) * (-parseInt(q(0xaf)) / (-0x149a + -0x2b * 0x5 + -0x263 * -0x9)) + parseInt(q(0xa5)) / (0x1 * -0xaa8 + 0x293 + 0x820);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * -0x11b5f + 0x15f79 + -0x2 * -0x16673));
var __importDefault = this && this[s(0x9d) + t(0x93)] || function (c) {
    const u = s;
    return c && c[u(0xac)] ? c : { 'default': c };
};
const k = {};
k[s(0xab)] = !![], Object[t(0xbc) + t(0xaa)](exports, s(0xac), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * -0x505 + 0x2167 * -0x1 + 0x1cef);
        let h = e[f];
        return h;
    }, b(c, d);
}
const getQuotedForMessageId_1 = __importDefault(require(s(0xa9) + s(0x8e) + t(0x90) + t(0xb8))), CreateMessageService_1 = __importDefault(require(s(0xb5) + s(0xb2) + s(0xb1) + t(0xbb))), MessengerVerifyMessage = async (f, g, h) => {
        const v = s, w = t, i = {};
        i[v(0xb0)] = v(0x95);
        const j = i;
        let l;
        if (f?.[v(0xba)]?.[w(0xa4)]?.[w(0xa0)]) {
            const p = await (0x12f8 + 0x1d84 + -0x307c, getQuotedForMessageId_1[w(0x96)])(f[v(0xba)][v(0xa4)][v(0xa0)], g[w(0x9f)]);
            l = p?.['id'] || undefined;
        }
        const m = {};
        m[w(0xa2)] = f[v(0xa6)] || '', m[v(0xb6)] = g['id'], m[w(0xa8)] = h['id'], m[w(0x91)] = f[v(0xba)][v(0xa3)] || '', m[v(0x8f)] = ![], m[v(0xb9)] = f[v(0xa1)], m[v(0x97)] = ![], m[v(0x9a) + 'd'] = l, m[w(0xad)] = f[w(0xad)], m[v(0x92)] = j[v(0xb0)];
        const n = m;
        await g[w(0xb4)]({
            'lastMessage': n[w(0x91)],
            'lastMessageAt': new Date()[v(0x9b)](),
            'answered': ![]
        });
        const o = {};
        o[v(0x99) + 'a'] = n, o[w(0x9f)] = g[v(0x9f)], await (-0x1730 + 0x82 * -0x3b + 0x3526, CreateMessageService_1[w(0x96)])(o);
    };
exports[s(0x96)] = MessengerVerifyMessage;
function a() {
    const x = [
        'fault',
        '4mloWdE',
        'received',
        'default',
        'read',
        '6OzQTCr',
        'messageDat',
        'quotedMsgI',
        'getTime',
        '686712IUdbaS',
        '__importDe',
        '10ZEhpar',
        'tenantId',
        'mid',
        'type',
        'messageId',
        'text',
        'reply_to',
        '4291914vqDRsq',
        'message_id',
        '98409VjytLo',
        'contactId',
        '../../help',
        'erty',
        'value',
        '__esModule',
        'timestamp',
        '1982697CzFdgJ',
        '130CEhJml',
        'HWxGg',
        'reateMessa',
        'Services/C',
        '2904055IywYoh',
        'update',
        '../Message',
        'ticketId',
        '409068ciwPeL',
        'ageId',
        'mediaType',
        'message',
        'geService',
        'defineProp',
        '4762712jsVdgO',
        'ers/getQuo',
        'fromMe',
        'tedForMess',
        'body',
        'status'
    ];
    a = function () {
        return x;
    };
    return a();
}