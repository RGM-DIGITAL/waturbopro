'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1d0d * -0x1 + -0x17b * -0xb + 0xe5a);
        let h = e[f];
        return h;
    }, b(c, d);
}
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(n(0x19a)) / (0x287 * -0x3 + 0x1 * 0x24af + 0x23d * -0xd) + parseInt(n(0x1ae)) / (-0x4 * 0x354 + -0x1b4b * 0x1 + 0x289d) * (-parseInt(n(0x1b2)) / (-0x1f2a + 0x18d5 + 0x658)) + -parseInt(n(0x1ab)) / (0x3c * -0x98 + -0xa9 * -0x1c + 0x1128) + parseInt(o(0x197)) / (-0xa19 + 0x1e32 * -0x1 + 0x2850) + parseInt(n(0x19e)) / (-0x6 * -0x64b + 0x2647 * -0x1 + 0x1 * 0x8b) + -parseInt(n(0x19d)) / (0xa6e + 0x14f * 0xf + 0xf8 * -0x1f) * (parseInt(o(0x19f)) / (0xd * 0x1e9 + 0x1b67 + -0x3434)) + parseInt(o(0x1a5)) / (0x92 * -0x33 + 0x1e77 + -0x158) * (parseInt(n(0x1af)) / (-0x1 * -0x19be + 0x4c * 0xa + -0x1cac));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x5b153 * -0x3 + 0x58ef3 + 0x181973));
var __importDefault = this && this[p(0x1a9) + q(0x1a0)] || function (c) {
    const r = q;
    return c && c[r(0x1b3)] ? c : { 'default': c };
};
const k = {};
k[q(0x1aa)] = !![], Object[q(0x1a7) + p(0x19b)](exports, p(0x1b3), k);
function a() {
    const u = [
        'defineProp',
        'reateOrUpd',
        '__importDe',
        'value',
        '1139756PXmShk',
        'thread',
        'users',
        '1423460jChCGS',
        '4998410NLGvKB',
        'profile_pi',
        'username',
        '6dZLmMQ',
        '__esModule',
        'ateContact',
        'c_url',
        '5241880qWrZHi',
        'default',
        'Services/C',
        '178161WDLeDB',
        'erty',
        'full_name',
        '7BmtAaX',
        '2843226VaKasB',
        '5336824UfclCg',
        'fault',
        'WqOKc',
        'instagram',
        '../Contact',
        'DRDKv',
        '27kuORsJ',
        'Service'
    ];
    a = function () {
        return u;
    };
    return a();
}
const CreateOrUpdateContactService_1 = __importDefault(require(q(0x1a3) + q(0x199) + p(0x1a8) + p(0x1b4) + p(0x1a6))), InstagramVerifyContact = async (c, d, e) => {
        const s = p, t = p, f = {
                'DRDKv': function (l, m) {
                    return l(m);
                },
                'WqOKc': s(0x1a2)
            };
        let g, h;
        try {
            h = c[t(0x1ac)]?.[t(0x1ad)][0xbbc + -0x1982 * -0x1 + -0x253e], g = h[t(0x1b0) + s(0x196)];
        } catch (l) {
            g = undefined;
        }
        const i = {
                'name': h?.[s(0x19c)] || h[t(0x1b1)] || '',
                'number': '',
                'profilePicUrl': g ? f[s(0x1a4)](String, g) : undefined,
                'tenantId': e,
                'pushname': h[s(0x1b1)] || '',
                'isUser': !![],
                'isWAContact': ![],
                'isGroup': ![],
                'origem': f[t(0x1a1)],
                'instagramPK': h['pk']
            }, j = await (-0x1702 + -0x5f3 + -0x15 * -0x161, CreateOrUpdateContactService_1[t(0x198)])(i);
        return j;
    };
exports[q(0x198)] = InstagramVerifyContact;