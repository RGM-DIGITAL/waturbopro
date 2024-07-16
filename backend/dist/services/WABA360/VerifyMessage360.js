'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0x11b)) / (0x8 * -0x79 + 0x20b * -0x3 + 0x9ea) + parseInt(o(0x121)) / (-0x2283 + -0xb4d + 0x2dd2) * (-parseInt(o(0x11d)) / (-0x1f09 + 0x1b7e + 0x38e)) + -parseInt(o(0x128)) / (-0x22ae + -0x68 * 0x5f + 0x494a) + -parseInt(o(0x117)) / (-0x13 + 0x26ee + -0x26d6) * (-parseInt(o(0x109)) / (-0x242d + -0x1a00 + 0x3e33)) + -parseInt(o(0x11f)) / (0x2 * -0x151 + -0x2 * 0xda0 + 0x1de9) * (-parseInt(o(0x118)) / (0x77 * 0x37 + -0x1ab9 + 0x130)) + parseInt(p(0x124)) / (0x8a4 * 0x1 + 0x2184 + 0x29 * -0x107) + parseInt(p(0x111)) / (-0x8c9 + 0x16d * -0x11 + 0x2110) * (-parseInt(o(0x119)) / (-0x146c + -0x807 + 0x1c7e));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * 0x14ce55 + 0x3 * -0x1c7b1 + 0x24db1d));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x83 * 0x39 + 0x870 + 0x15c0);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[q(0x129) + q(0x10c)] || function (c) {
    const s = q;
    return c && c[s(0x10a)] ? c : { 'default': c };
};
const k = {};
function a() {
    const v = [
        'geService',
        '1868058JLQezJ',
        'default',
        'mediaType',
        'contactId',
        '2936972SepLxR',
        '__importDe',
        'read',
        'tenantId',
        'value',
        'text',
        'ticketId',
        'body',
        '6NCNNtH',
        '__esModule',
        'messageDat',
        'fault',
        'getTime',
        'Services/C',
        '../Message',
        'received',
        '3421850uUOHcW',
        'reateMessa',
        'rwruK',
        'messageId',
        'erty',
        'status',
        '4731275QxQkzu',
        '1846264PMcCcS',
        '11CCskGk',
        'type',
        '1008628CvFegg',
        'fromMe',
        '980454SRCsHi',
        'timestamp',
        '28BMNWqn',
        'update',
        '8unxIwM',
        'defineProp'
    ];
    a = function () {
        return v;
    };
    return a();
}
k[q(0x105)] = !![], Object[q(0x122) + q(0x115)](exports, r(0x10a), k);
const CreateMessageService_1 = __importDefault(require(r(0x10f) + q(0x10e) + q(0x112) + q(0x123))), VerifyMessage360 = async (f, g, h) => {
        const t = r, u = r, i = {};
        i[t(0x113)] = t(0x110);
        const j = i, l = {};
        l[t(0x114)] = f['id'] || '', l[t(0x107)] = g['id'], l[u(0x127)] = f[u(0x11c)] ? undefined : h['id'], l[u(0x108)] = f[t(0x106)]?.[t(0x108)] || '', l[t(0x11c)] = f[u(0x11c)], l[t(0x126)] = f[u(0x11a)], l[t(0x12a)] = f[t(0x11c)], l[u(0x11e)] = +f[t(0x11e)], l[t(0x116)] = j[u(0x113)];
        const m = l;
        await g[u(0x120)]({
            'lastMessage': m[t(0x108)],
            'lastMessageAt': new Date()[u(0x10d)](),
            'answered': f[t(0x11c)] || ![]
        });
        const n = {};
        n[u(0x10b) + 'a'] = m, n[u(0x12b)] = g[u(0x12b)], await (-0xb1 * 0x28 + -0x17f * -0x12 + 0xba, CreateMessageService_1[t(0x125)])(n);
    };
exports[r(0x125)] = VerifyMessage360;