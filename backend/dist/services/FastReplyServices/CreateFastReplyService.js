'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0x92)) / (0x14 * 0x4f + 0x25 * -0x39 + -0x6a * -0x5) + -parseInt(m(0x8f)) / (0x2263 + 0xd6f + -0x2fd0) * (parseInt(m(0x8a)) / (-0xd * -0x12f + -0x312 * -0x3 + -0x1896)) + parseInt(l(0x91)) / (-0x1c69 + 0x12d5 + 0x8 * 0x133) * (-parseInt(m(0x99)) / (-0x1 * -0xc1f + -0x70 * -0xf + -0x12aa)) + -parseInt(l(0x98)) / (-0x4e9 * 0x5 + 0x2061 + -0x7ce * 0x1) + -parseInt(m(0x8e)) / (-0x1 * -0x80b + -0x7e8 * 0x2 + 0x7cc) * (-parseInt(m(0x94)) / (0xd * 0x40 + -0x29a + -0x9e)) + -parseInt(m(0x97)) / (0xca1 * 0x2 + 0x1 * 0x1ae8 + -0x311 * 0x11) + parseInt(l(0x83)) / (-0xa89 * -0x3 + -0x24b0 * 0x1 + 0x1b5 * 0x3);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x38208 + -0x1d185 * 0x8 + -0x76 * -0x2eb7));
function a() {
    const s = [
        'message',
        'fault',
        'tenantId',
        '__importDe',
        'userId',
        'key',
        '15KWfbtc',
        'create',
        'defineProp',
        'ls/FastRep',
        '56eFpbmW',
        '97894qcRUIe',
        '__esModule',
        '5495956KOUOuz',
        '231103vSWniG',
        'erty',
        '534064yOBBKy',
        '../../mode',
        'value',
        '11079603ukqoYJ',
        '815220dUKfcA',
        '5mswIIQ',
        'default',
        '29081680unYaDB'
    ];
    a = function () {
        return s;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xe09 * -0x1 + -0x1 * 0x76a + -0x61d);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[n(0x87) + o(0x85)] || function (c) {
    const p = n;
    return c && c[p(0x90)] ? c : { 'default': c };
};
const k = {};
k[o(0x96)] = !![], Object[o(0x8c) + n(0x93)](exports, o(0x90), k);
const FastReply_1 = __importDefault(require(o(0x95) + o(0x8d) + 'ly')), CreateFastReplyService = async ({
        key: d,
        message: e,
        userId: f,
        tenantId: g
    }) => {
        const q = o, r = n, h = {};
        h[q(0x89)] = d, h[r(0x84)] = e, h[q(0x88)] = f, h[q(0x86)] = g;
        const i = await FastReply_1[q(0x82)][q(0x8b)](h);
        return i;
    };
exports[o(0x82)] = CreateFastReplyService;