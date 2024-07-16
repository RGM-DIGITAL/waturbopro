'use strict';
const s = b, t = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(q(0x87)) / (-0x15f6 + 0x7b * 0x1b + 0x8fe) + -parseInt(q(0x72)) / (0x16fa + -0x39 * 0x45 + 0xb1 * -0xb) * (-parseInt(r(0x84)) / (-0x32 + 0x313 * 0x2 + -0x5f1)) + parseInt(r(0x7a)) / (0x1cb9 + 0x25d1 + -0x4286) * (-parseInt(r(0x82)) / (-0x1805 + -0x38 * 0x3b + 0x24f2)) + parseInt(q(0x79)) / (0x2326 + -0x11 * -0x7f + -0x2b8f * 0x1) + -parseInt(r(0x90)) / (0x7d + 0x3b * 0x20 + -0x7d6) * (-parseInt(r(0x76)) / (-0xb * -0x2c9 + 0x1426 + 0xb7 * -0x47)) + -parseInt(r(0x86)) / (-0x2222 + -0xdf1 * -0x1 + -0x6 * -0x35f) * (parseInt(r(0x69)) / (0x17 * -0x197 + -0xb7 * 0x32 + 0x4859)) + -parseInt(q(0x7e)) / (0x13ee + -0x1c3d + 0x85a);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x412c9 + -0x1 * 0x9c0c + 0x6c78a));
var __importDefault = this && this[s(0x93) + t(0x67)] || function (c) {
    const u = t;
    return c && c[u(0x7b)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * 0x117d + -0x2 * -0x10f6 + 0x201 * -0x8);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[t(0x7c)] = !![], Object[s(0x96) + s(0x91)](exports, t(0x7b), k);
const getQuotedForMessageId_1 = __importDefault(require(t(0x6a) + s(0x70) + t(0x8e) + s(0x68))), CreateMessageService_1 = __importDefault(require(s(0x6d) + t(0x6b) + t(0x8f) + s(0x7d))), MessengerVerifyMessage = async (f, g, h) => {
        const v = s, w = t, i = {};
        i[v(0x85)] = v(0x73);
        const j = i;
        let l;
        if (f?.[v(0x6f)]?.[v(0x7f)]?.[w(0x78)]) {
            const p = await (-0x1 * 0x706 + 0x14f5 + -0xdef, getQuotedForMessageId_1[v(0x71)])(f[v(0x6f)][w(0x7f)][w(0x78)], g[w(0x75)]);
            l = p?.['id'] || undefined;
        }
        const m = {};
        m[v(0x92)] = f[w(0x95)] || '', m[v(0x6e)] = g['id'], m[v(0x8b)] = h['id'], m[v(0x8a)] = f[w(0x6f)][v(0x83)] || '', m[v(0x89)] = ![], m[v(0x74)] = f[w(0x80)], m[w(0x8d)] = ![], m[v(0x77) + 'd'] = l, m[w(0x8c)] = f[w(0x8c)], m[w(0x6c)] = j[w(0x85)];
        const n = m;
        await g[w(0x81)]({
            'lastMessage': n[w(0x8a)],
            'lastMessageAt': new Date()[w(0x94)](),
            'answered': ![]
        });
        const o = {};
        o[v(0x88) + 'a'] = n, o[w(0x75)] = g[w(0x75)], await (0x1 * 0x24f2 + 0x8 * 0x1e6 + 0x1a11 * -0x2, CreateMessageService_1[w(0x71)])(o);
    };
function a() {
    const x = [
        'defineProp',
        'fault',
        'ageId',
        '4860330gJuTtZ',
        '../../help',
        'Services/C',
        'status',
        '../Message',
        'ticketId',
        'message',
        'ers/getQuo',
        'default',
        '10218bptEam',
        'received',
        'mediaType',
        'tenantId',
        '24bSPyQw',
        'quotedMsgI',
        'mid',
        '6466962XdaNMz',
        '428zfgmYh',
        '__esModule',
        'value',
        'geService',
        '5751042OMqeBB',
        'reply_to',
        'type',
        'update',
        '23705ScSWWa',
        'text',
        '201XlEEdx',
        'oQgXI',
        '9OTDMbD',
        '403529AImUmT',
        'messageDat',
        'fromMe',
        'body',
        'contactId',
        'timestamp',
        'read',
        'tedForMess',
        'reateMessa',
        '848834yRjlRF',
        'erty',
        'messageId',
        '__importDe',
        'getTime',
        'message_id'
    ];
    a = function () {
        return x;
    };
    return a();
}
exports[t(0x71)] = MessengerVerifyMessage;