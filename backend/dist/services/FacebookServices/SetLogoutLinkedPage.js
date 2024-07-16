'use strict';
const w = b, x = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x8 * 0x355 + -0x264f * -0x1 + 0xa1f * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const u = b, v = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(u(0x19d)) / (-0xa * 0x209 + 0x1f9a + 0xb3f * -0x1) + -parseInt(v(0x196)) / (0xbf2 + -0x3 * 0x54 + -0xaf4) + parseInt(v(0x19b)) / (0x530 + -0x1aa6 + 0x1579) * (-parseInt(v(0x189)) / (0x1045 * -0x2 + -0x3a * 0x15 + 0x2550)) + -parseInt(v(0x18f)) / (-0x3 * 0x789 + 0xdf + -0x15c1 * -0x1) + parseInt(u(0x1a6)) / (-0xa44 + 0x18c6 + -0xe7c * 0x1) * (parseInt(u(0x197)) / (-0x1 * 0x18b + -0x2220 + 0x23b2)) + parseInt(v(0x18e)) / (-0x1353 + -0x25 * -0xf + 0x1130) * (parseInt(u(0x1a8)) / (-0x8b * 0x16 + 0xe13 + -0x218)) + parseInt(v(0x18c)) / (0x1fe1 + 0xce7 + -0x2cbe) * (parseInt(u(0x1a2)) / (0x244f + 0x3b * -0x5d + -0xed5 * 0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x144921 + 0x1b328 + 0x43 * 0x74dd));
function a() {
    const B = [
        '../../mode',
        'ession',
        'default',
        'tenantId',
        'update',
        'defineProp',
        '28hqtiLV',
        ':whatsappS',
        '../../libs',
        '25480CTMnfx',
        'emit',
        '1608guoTUc',
        '1358445ZpwKoR',
        'erty',
        'status',
        'pCkEi',
        'fSuRn',
        '__importDe',
        'fault',
        '2861238wQjyxb',
        '70DDnnGE',
        'where',
        'value',
        'fbObject',
        '430644OeWecb',
        'tokenAPI',
        '58644btiPlg',
        'ls/Whatsap',
        'fbPageId',
        'session',
        'getIO',
        '10230loOMNt',
        '__esModule',
        '/socket',
        'DISCONNECT',
        '232434eJaeLg',
        'action',
        '35604lzRXec'
    ];
    a = function () {
        return B;
    };
    return a();
}
var __importDefault = this && this[w(0x194) + x(0x195)] || function (c) {
    const y = w;
    return c && c[y(0x1a3)] ? c : { 'default': c };
};
const q = {};
q[x(0x199)] = !![], Object[x(0x188) + w(0x190)](exports, x(0x1a3), q);
const socket_1 = require(w(0x18b) + x(0x1a4)), Whatsapp_1 = __importDefault(require(x(0x1a9) + x(0x19e) + 'p')), SetLogoutLinkedPage = async ({
        whatsapp: i,
        tenantId: j
    }) => {
        const z = w, A = w, k = {};
        k[z(0x192)] = A(0x1a5) + 'ED', k[A(0x193)] = A(0x1ad);
        const l = k, m = (-0x757 + 0xcf5 * -0x3 + -0x46 * -0xa9, socket_1[z(0x1a1)])(), n = {};
        n[z(0x19f)] = null, n[z(0x19a)] = {}, n[z(0x19c)] = null, n[z(0x191)] = l[A(0x192)];
        const o = n, p = {};
        p['id'] = i['id'], p[A(0x1ac)] = j;
        const r = {};
        r[A(0x198)] = p, Whatsapp_1[A(0x1ab)][A(0x1ad)](o, r);
        const s = {
                ...i,
                ...o
            }, t = {};
        t[z(0x1a7)] = l[z(0x193)], t[z(0x1a0)] = s, m[A(0x18d)](j + (z(0x18a) + z(0x1aa)), t);
    };
exports[w(0x1ab)] = SetLogoutLinkedPage;