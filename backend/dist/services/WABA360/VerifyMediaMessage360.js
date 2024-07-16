'use strict';
const y = b, z = b;
(function (c, d) {
    const w = b, x = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(w(0xb3)) / (-0xac7 + 0x1d15 * 0x1 + 0x5 * -0x3a9) * (parseInt(w(0xd1)) / (0x92b + 0x162b + -0x7d5 * 0x4)) + parseInt(w(0xb6)) / (0x1280 + -0x1 * 0x17c5 + 0x548 * 0x1) * (-parseInt(x(0xc1)) / (0xfe6 + 0x1 * 0x410 + 0x353 * -0x6)) + -parseInt(x(0xcc)) / (-0x3e6 * -0x2 + 0x2058 + -0x281f) + parseInt(x(0xbb)) / (0x1195 + 0x24e9 + -0x3678) + -parseInt(w(0xb4)) / (0xbfe + 0x2b * 0x8 + -0xd4f) * (-parseInt(w(0xd4)) / (0xb7 * -0x29 + -0x1 * -0xa3 + 0x1cb4)) + parseInt(w(0xaf)) / (0x83 * 0x23 + -0x1b * -0x154 + -0x35bc) + parseInt(w(0xc9)) / (0x338 + -0x257 + 0x5 * -0x2b) * (parseInt(x(0xdb)) / (-0xec2 + -0x2 * -0xe59 + -0xde5));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x2c76a * 0x1 + 0x1 * 0xc05c5 + 0x5c * -0x69e));
var __importDefault = this && this[y(0xd3) + y(0xc5)] || function (c) {
    const A = z;
    return c && c[A(0xb8)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xc23 * 0x2 + 0xd75 + 0xb79);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[z(0xad)] = !![], Object[y(0xc4) + y(0xac)](exports, z(0xb8), k);
function a() {
    const D = [
        '574126jcVyPO',
        'Services/C',
        '17964RPdPxD',
        'wabaMediaI',
        '__esModule',
        'mediaUrl',
        'tenantId',
        '8540760TQzzgj',
        'reateMessa',
        './GetMedia',
        'type',
        'fromMe',
        'body',
        '320cvvNYZ',
        'messageDat',
        'getTime',
        'defineProp',
        'fault',
        'BezXV',
        'status',
        'default',
        '1945330WwpAbR',
        'read',
        'mediaType',
        '3509660DnOwBn',
        'sended',
        'text',
        'messageId',
        'geService',
        '2AZIwCC',
        '../Message',
        '__importDe',
        '16NcYSda',
        'chat',
        'RAdEW',
        'contactId',
        'template',
        'update',
        'qKgFp',
        '44fGvCzO',
        'ticket',
        'includes',
        'MZmfC',
        'timestamp',
        'Waba360',
        'ticketId',
        'erty',
        'value',
        'channel',
        '10214136oURwpT',
        'tgTXE',
        'received',
        'msg',
        '1505377TTtVJa'
    ];
    a = function () {
        return D;
    };
    return a();
}
const CreateMessageService_1 = __importDefault(require(z(0xd2) + z(0xb5) + z(0xbc) + y(0xd0))), GetMediaWaba360_1 = __importDefault(require(z(0xbd) + z(0xaa))), VerifyMediaMessage = async (g, h, i, j) => {
        const B = y, C = y, l = {};
        l[B(0xc6)] = B(0xce), l[C(0xb0)] = C(0xd5), l[C(0xd6)] = B(0xd8), l[B(0xda)] = B(0xcd), l[C(0xa8)] = C(0xb1);
        const m = l;
        let n;
        try {
            const t = {};
            t[B(0xae)] = g, t[B(0xb2)] = h, t[B(0xdc)] = i, n = await (-0x1 * -0x10cf + 0x2467 + -0x3536, GetMediaWaba360_1[B(0xc8)])(t);
        } catch (u) {
        }
        let o;
        if (![
                m[B(0xc6)],
                m[C(0xb0)],
                m[B(0xd6)]
            ][B(0xdd)](h[B(0xbe)])) {
            const v = h;
            o = v[h[B(0xbe)]]['id'];
        }
        const p = {};
        p[B(0xcf)] = h['id'] || '', p[C(0xab)] = i['id'], p[B(0xd7)] = h[B(0xbf)] ? undefined : j['id'], p[B(0xc0)] = h?.[B(0xce)]?.[C(0xc0)] || n || '', p[C(0xbf)] = h[B(0xbf)], p[B(0xca)] = h[C(0xbf)], p[C(0xb9)] = n, p[B(0xcb)] = h[B(0xbe)], p[B(0xa9)] = +h[B(0xa9)], p[B(0xb7) + 'd'] = o, p[C(0xc7)] = h[B(0xbf)] ? m[B(0xda)] : m[B(0xa8)];
        const q = p;
        await i[C(0xd9)]({
            'lastMessage': h?.[B(0xce)]?.[B(0xc0)] || n,
            'lastMessageAt': new Date()[B(0xc3)](),
            'answered': h[C(0xbf)] || ![]
        });
        const r = {};
        r[C(0xc2) + 'a'] = q, r[C(0xba)] = i[B(0xba)];
        const s = await (0x2 * 0x128d + -0xb2 * 0x21 + -0xe28, CreateMessageService_1[C(0xc8)])(r);
        return s;
    };
exports[y(0xc8)] = VerifyMediaMessage;