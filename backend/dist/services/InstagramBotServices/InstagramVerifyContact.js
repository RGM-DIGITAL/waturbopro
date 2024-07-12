'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0x1a5)) / (-0x1d * 0x101 + 0x1532 + -0x3 * -0x2a4) + -parseInt(o(0x1b6)) / (-0x1fc2 + 0x340 + 0x1c84) + parseInt(o(0x1b2)) / (0x2614 + -0x63d * -0x1 + 0x35 * -0xd6) + -parseInt(n(0x1a7)) / (-0xae5 * -0x2 + -0x228e + 0xcc8) + -parseInt(n(0x1a6)) / (-0xc30 + 0x571 * 0x5 + -0xf00) + -parseInt(n(0x1a9)) / (0xf * 0x4d + -0x14c3 * 0x1 + 0x1046) + parseInt(o(0x1ad)) / (0xa13 * 0x1 + 0xa * -0x2cf + 0x120a * 0x1) * (parseInt(n(0x1b4)) / (-0x10c * -0x15 + 0x1d8c + -0x2 * 0x19c0));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x6a860 + -0x2e19 * 0x2b + 0x60df3));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x9ef + -0x1 * 0x12ad + 0xa63);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[p(0x1bc) + p(0x1c1)] || function (c) {
    const r = p;
    return c && c[r(0x1c0)] ? c : { 'default': c };
};
function a() {
    const u = [
        '20178otsPgj',
        'full_name',
        'rFDFe',
        'Service',
        'value',
        'c_url',
        '__importDe',
        'uuVOX',
        'thread',
        'defineProp',
        '__esModule',
        'fault',
        '280601FPgMXC',
        '2061340YnLRtY',
        '2298600nKnUot',
        '../Contact',
        '3458682Lzbqyk',
        'default',
        'erty',
        'Services/C',
        '1198351ewgpiR',
        'reateOrUpd',
        'username',
        'profile_pi',
        'users',
        '889788RElwRd',
        'ateContact',
        '88ALQqBf',
        'instagram'
    ];
    a = function () {
        return u;
    };
    return a();
}
const k = {};
k[p(0x1ba)] = !![], Object[q(0x1bf) + q(0x1ab)](exports, q(0x1c0), k);
const CreateOrUpdateContactService_1 = __importDefault(require(q(0x1a8) + q(0x1ac) + p(0x1ae) + q(0x1b3) + p(0x1b9))), InstagramVerifyContact = async (c, d, e) => {
        const s = q, t = q, f = {
                'rFDFe': function (l, m) {
                    return l(m);
                },
                'uuVOX': s(0x1b5)
            };
        let g, h;
        try {
            h = c[t(0x1be)]?.[t(0x1b1)][0x32 * 0x71 + -0x3b * -0x64 + -0x2d1e], g = h[s(0x1b0) + s(0x1bb)];
        } catch (l) {
            g = undefined;
        }
        const i = {
                'name': h?.[s(0x1b7)] || h[s(0x1af)] || '',
                'number': '',
                'profilePicUrl': g ? f[s(0x1b8)](String, g) : undefined,
                'tenantId': e,
                'pushname': h[t(0x1af)] || '',
                'isUser': !![],
                'isWAContact': ![],
                'isGroup': ![],
                'origem': f[t(0x1bd)],
                'instagramPK': h['pk']
            }, j = await (0x948 + 0x2 * 0x2f + -0x26 * 0x41, CreateOrUpdateContactService_1[s(0x1aa)])(i);
        return j;
    };
exports[p(0x1aa)] = InstagramVerifyContact;