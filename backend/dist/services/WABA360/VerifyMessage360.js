'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x446 * -0x5 + 0x19e + -0x157d);
        let h = e[f];
        return h;
    }, b(c, d);
}
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0x19c)) / (0x6 * -0x139 + 0x1b60 + -0x1409) + -parseInt(p(0x183)) / (0xfa * -0x10 + 0x1 * -0x1427 + 0x1 * 0x23c9) + -parseInt(o(0x1a1)) / (-0x1 * 0x827 + -0x1c * -0x5b + -0x1ca) * (-parseInt(p(0x192)) / (0x1786 * 0x1 + -0x207a * 0x1 + 0x8f8)) + -parseInt(o(0x182)) / (-0x19e4 * -0x1 + 0x2558 + 0x1 * -0x3f37) * (parseInt(o(0x17f)) / (0x4 * 0x365 + 0x75a * -0x1 + -0x634)) + -parseInt(o(0x191)) / (0x706 * -0x1 + -0xd * 0x10d + -0x1e2 * -0xb) + -parseInt(p(0x188)) / (-0x1897 * -0x1 + 0x2f * 0xa9 + -0x3796) * (-parseInt(o(0x18c)) / (-0xb * 0x283 + -0x10 * -0x190 + 0x2aa * 0x1)) + parseInt(p(0x1a4)) / (-0x59 * -0x2e + 0x5 * 0x1a3 + -0x1823 * 0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x2b3a6 + 0x1 * -0x8913b + -0xfc0b * -0xb));
function a() {
    const v = [
        '3929898LePwOw',
        '140znyGir',
        'update',
        'QlunJ',
        'fromMe',
        'defineProp',
        'messageDat',
        'status',
        'received',
        'Services/C',
        'read',
        '473602yivkTC',
        'getTime',
        '__esModule',
        '__importDe',
        '../Message',
        '51087tvRWHy',
        'tenantId',
        'erty',
        '3597150dZgNfi',
        '58056NIDGdY',
        'mediaType',
        'fault',
        '145vEmQhr',
        '1178122vbVHli',
        'type',
        'body',
        'contactId',
        'text',
        '523352SfnSyO',
        'ticketId',
        'default',
        'reateMessa',
        '45yHHwcN',
        'geService',
        'timestamp',
        'messageId',
        'value'
    ];
    a = function () {
        return v;
    };
    return a();
}
var __importDefault = this && this[q(0x19f) + q(0x181)] || function (c) {
    const s = q;
    return c && c[s(0x19e)] ? c : { 'default': c };
};
const k = {};
k[q(0x190)] = !![], Object[r(0x196) + r(0x1a3)](exports, q(0x19e), k);
const CreateMessageService_1 = __importDefault(require(q(0x1a0) + r(0x19a) + r(0x18b) + q(0x18d))), VerifyMessage360 = async (f, g, h) => {
        const t = r, u = r, i = {};
        i[t(0x194)] = u(0x199);
        const j = i, l = {};
        l[t(0x18f)] = f['id'] || '', l[u(0x189)] = g['id'], l[t(0x186)] = f[t(0x195)] ? undefined : h['id'], l[u(0x185)] = f[t(0x187)]?.[t(0x185)] || '', l[u(0x195)] = f[u(0x195)], l[t(0x180)] = f[t(0x184)], l[t(0x19b)] = f[u(0x195)], l[u(0x18e)] = +f[u(0x18e)], l[t(0x198)] = j[u(0x194)];
        const m = l;
        await g[t(0x193)]({
            'lastMessage': m[t(0x185)],
            'lastMessageAt': new Date()[t(0x19d)](),
            'answered': f[u(0x195)] || ![]
        });
        const n = {};
        n[u(0x197) + 'a'] = m, n[u(0x1a2)] = g[u(0x1a2)], await (0x12c * -0x11 + -0x6 * 0x4aa + 0x2fe8, CreateMessageService_1[u(0x18a)])(n);
    };
exports[q(0x18a)] = VerifyMessage360;