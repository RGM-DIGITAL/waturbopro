'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x395 + 0x89 * -0x1 + -0x1 * 0x13f);
        let h = e[f];
        return h;
    }, b(c, d);
}
const B = b, C = b;
function a() {
    const G = [
        'Options',
        'update',
        'ices/SendM',
        'where',
        'ot-baileys',
        '__esModule',
        'removeOnCo',
        '__importDe',
        '235080iUHEmF',
        'mediaName',
        'messageTim',
        'ar\x20message',
        '914598gWpPhF',
        'ampaign',
        'estamp',
        '\x20campaign:',
        '6531RbpIQp',
        'getWbot',
        'public',
        'ogger',
        'whatsappId',
        'leys',
        'SendMessag',
        '148DfHIFW',
        'value',
        'body',
        '4502890CXYUpo',
        'message',
        '../service',
        'ntact',
        'campaignCo',
        'timestamp',
        'messageId',
        '645662wQiwdS',
        'delay',
        'eWhatsappC',
        'getMessage',
        '55985hYFKmi',
        'CampaignCo',
        'jobId',
        'p.net',
        's/WbotServ',
        'default',
        'fault',
        'essagesSys',
        'text',
        'defineProp',
        'sendMessag',
        'attempts',
        'mediaUrl',
        '../libs/wb',
        'temWbotBai',
        'erty',
        'mplete',
        '../models/',
        'path',
        '@s.whatsap',
        'BXDHM',
        'Error\x20envi',
        'messageRan',
        'logger',
        'join',
        '238WaMsnQ',
        'ntacts',
        'number',
        'dom',
        'key',
        '70sYRfia',
        'error',
        '4191952adlXfm',
        '../utils/l'
    ];
    a = function () {
        return G;
    };
    return a();
}
(function (c, d) {
    const z = b, A = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(z(0x1cf)) / (-0x5e8 + 0x1608 + -0x101f) + -parseInt(z(0x1ec)) / (-0xb2a * 0x1 + -0x1b * -0x61 + 0xf1) * (parseInt(A(0x205)) / (0x123c + -0x5 * 0x635 + 0xcd0)) + -parseInt(z(0x20c)) / (0x8 * -0x200 + -0x1596 + 0x259a * 0x1) * (parseInt(A(0x1d3)) / (-0x16fc + -0x6 * 0x112 + -0x1b * -0x117)) + -parseInt(A(0x1fd)) / (-0x1 * -0x1d95 + 0x178 * 0x17 + -0x2f * 0x159) + parseInt(A(0x20f)) / (0x1 * -0x1e7c + -0x1 * 0x269f + 0x4522) + parseInt(A(0x1f3)) / (0x1414 + 0x2 * 0x740 + -0x2c * 0xc9) + -parseInt(z(0x201)) / (-0x1eb3 + 0x19 * -0x161 + 0x4135) * (parseInt(z(0x1f1)) / (0x11b3 + 0x8d1 * -0x2 + -0x7));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x4442f + -0xa1a15 + 0x144df4));
var __importDefault = this && this[B(0x1fc) + C(0x1d9)] || function (c) {
    const D = C;
    return c && c[D(0x1fa)] ? c : { 'default': c };
};
const k = {};
k[C(0x20d)] = !![], Object[C(0x1dc) + C(0x1e2)](exports, C(0x1fa), k);
const path_1 = require(C(0x1e5)), logger_1 = require(C(0x1f4) + C(0x208)), CampaignContacts_1 = __importDefault(require(B(0x1e4) + C(0x1d4) + B(0x1ed))), wbot_baileys_1 = require(C(0x1e0) + B(0x1f9)), SendMessagesSystemWbotBaileys_1 = require(B(0x211) + B(0x1d7) + C(0x1f7) + C(0x1da) + B(0x1e1) + C(0x20a)), l = {};
l[B(0x1d0)] = 0x3a98, l[C(0x1de)] = 0x2, l[B(0x1fb) + B(0x1e3)] = !![], exports[B(0x1d8)] = {
    'key': B(0x20b) + C(0x1d1) + B(0x202),
    'options': l,
    async 'handle'({data: i}) {
        const E = B, F = C, j = {};
        j[E(0x1e7)] = E(0x207);
        const m = j;
        try {
            const n = (-0x304 * -0x5 + -0x3 + -0xf11, wbot_baileys_1[F(0x206)])(i[F(0x209)]);
            let o = {};
            const p = i[E(0x1ee)] + (F(0x1e6) + E(0x1d6));
            if (i[E(0x1df)]) {
                const t = (-0x3a * 0x4b + -0x2 * -0xeca + 0x432 * -0x3, path_1[F(0x1eb)])(__dirname, '..', '..', m[E(0x1e7)]), u = (-0x1 * -0x14bd + 0xc8d + -0x1 * 0x214a, path_1[E(0x1eb)])(t, i[F(0x1fe)]), v = await (-0x7 * 0x1cf + -0xe * 0xfb + 0x1a63, SendMessagesSystemWbotBaileys_1[F(0x1d2) + F(0x1f5)])(i[E(0x1fe)], u, i[F(0x210)]);
                if (v) {
                    const w = { ...v };
                    o = await n[E(0x1dd) + 'e'](p, w);
                }
            } else {
                const x = {};
                x[E(0x1db)] = i[F(0x210)], o = await n[F(0x1dd) + 'e'](p, x);
            }
            const q = {};
            q[F(0x1ce)] = o?.[F(0x1f0)]['id'], q[F(0x1e9) + E(0x1ef)] = i[F(0x1e9) + F(0x1ef)], q[E(0x20e)] = i[F(0x210)], q[F(0x1fe)] = i[F(0x1fe)], q[E(0x1cd)] = o?.[E(0x1ff) + F(0x203)], q[E(0x1d5)] = i[F(0x1d5)];
            const r = {};
            r['id'] = i[F(0x213) + E(0x212)]['id'];
            const s = {};
            return s[E(0x1f8)] = r, await CampaignContacts_1[F(0x1d8)][E(0x1f6)](q, s), o;
        } catch (y) {
            logger_1[E(0x1ea)][E(0x1f2)](F(0x1e8) + F(0x200) + E(0x204) + '\x20' + y);
            throw new Error(y);
        }
    }
};