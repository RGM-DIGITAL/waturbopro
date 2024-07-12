'use strict';
const y = b, z = b;
(function (c, d) {
    const w = b, x = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(w(0x181)) / (0x2119 + -0x10c8 + -0x3a * 0x48) * (parseInt(w(0x17e)) / (0x2 * 0x373 + -0xa1 * -0x16 + -0x14ba)) + -parseInt(x(0x17a)) / (-0x1ccb + 0x71f * 0x3 + 0x3 * 0x27b) * (-parseInt(w(0x196)) / (-0x1 * 0x90e + 0x77 * 0x21 + 0x1 * -0x645)) + parseInt(x(0x18c)) / (-0x175 * 0x4 + -0x2402 + 0x85f * 0x5) * (parseInt(w(0x1a9)) / (-0x633 + 0xeab + -0x2 * 0x439)) + parseInt(w(0x17b)) / (-0x1a88 + 0x3 * -0x6b6 + 0x1 * 0x2eb1) * (parseInt(w(0x180)) / (-0x449 * -0x6 + 0x7 * -0x4d + -0x1793)) + -parseInt(w(0x184)) / (0x4 * 0x101 + 0x2b * 0xe5 + -0x2a72) + parseInt(w(0x1a8)) / (0x17c3 + -0x585 + -0x1234) + parseInt(w(0x1a4)) / (-0x9 * 0x8 + -0x4ea * -0x2 + 0x981 * -0x1) * (-parseInt(w(0x1a0)) / (-0xf * 0x282 + -0x1c5 * 0xd + 0x3cab * 0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x14c60 + 0x79edf * 0x1 + -0x7aa1e * -0x1));
var __importDefault = this && this[y(0x1ad) + y(0x1aa)] || function (c) {
    const A = y;
    return c && c[A(0x19e)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2426 + -0x4aa * -0x5 + 0xe4b);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const D = [
        'read',
        'YgSWq',
        '12kZKHsU',
        'TiAXV',
        '323688TTldro',
        '162389WAhZVo',
        'Services/C',
        'tenantId',
        '924993IKXGzX',
        'status',
        'wabaMediaI',
        'msg',
        'mediaUrl',
        'chat',
        'ticketId',
        'template',
        '99905akmehk',
        'geService',
        'value',
        'getTime',
        'default',
        'type',
        'contactId',
        'update',
        'defineProp',
        'timestamp',
        '916628CJGWwv',
        'messageId',
        'messageDat',
        'sended',
        'reateMessa',
        'fromMe',
        'received',
        'kTKKm',
        '__esModule',
        'includes',
        '7357356wBWYLO',
        'body',
        '../Message',
        'erty',
        '11cAfsFn',
        './GetMedia',
        'bLSzg',
        'text',
        '8636600jiZgmU',
        '78XxALjY',
        'fault',
        'channel',
        'mediaType',
        '__importDe',
        'ticket',
        'ftVpm',
        'Waba360',
        '3OKxRrg',
        '217kbzZJr'
    ];
    a = function () {
        return D;
    };
    return a();
}
const k = {};
k[z(0x18e)] = !![], Object[y(0x194) + z(0x1a3)](exports, z(0x19e), k);
const CreateMessageService_1 = __importDefault(require(z(0x1a2) + y(0x182) + y(0x19a) + z(0x18d))), GetMediaWaba360_1 = __importDefault(require(z(0x1a5) + z(0x179))), VerifyMediaMessage = async (g, h, i, j) => {
        const B = y, C = y, l = {};
        l[B(0x1a6)] = B(0x1a7), l[C(0x19d)] = B(0x189), l[B(0x17d)] = C(0x18b), l[B(0x178)] = B(0x199), l[B(0x17f)] = C(0x19c);
        const m = l;
        let n;
        try {
            const t = {};
            t[C(0x1ab)] = g, t[B(0x187)] = h, t[C(0x177)] = i, n = await (0x93c + -0x287 * -0xd + 0x86b * -0x5, GetMediaWaba360_1[C(0x190)])(t);
        } catch (u) {
        }
        let o;
        if (![
                m[B(0x1a6)],
                m[C(0x19d)],
                m[C(0x17d)]
            ][C(0x19f)](h[C(0x191)])) {
            const v = h;
            o = v[h[C(0x191)]]['id'];
        }
        const p = {};
        p[B(0x197)] = h['id'] || '', p[B(0x18a)] = i['id'], p[B(0x192)] = h[B(0x19b)] ? undefined : j['id'], p[C(0x1a1)] = h?.[C(0x1a7)]?.[B(0x1a1)] || n || '', p[B(0x19b)] = h[C(0x19b)], p[C(0x17c)] = h[B(0x19b)], p[B(0x188)] = n, p[B(0x1ac)] = h[C(0x191)], p[B(0x195)] = +h[B(0x195)], p[C(0x186) + 'd'] = o, p[B(0x185)] = h[C(0x19b)] ? m[C(0x178)] : m[C(0x17f)];
        const q = p;
        await i[B(0x193)]({
            'lastMessage': h?.[B(0x1a7)]?.[C(0x1a1)] || n,
            'lastMessageAt': new Date()[C(0x18f)](),
            'answered': h[B(0x19b)] || ![]
        });
        const r = {};
        r[C(0x198) + 'a'] = q, r[B(0x183)] = i[B(0x183)];
        const s = await (0x173 * -0x15 + -0x6a * -0x37 + 0x7a9, CreateMessageService_1[C(0x190)])(r);
        return s;
    };
exports[z(0x190)] = VerifyMediaMessage;