'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x19df + 0x4a5 + 0x15ba);
        let h = e[f];
        return h;
    }, b(c, d);
}
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0x86)) / (-0x17 * 0x3 + 0x18 * -0x160 + -0x10a3 * -0x2) * (-parseInt(m(0x93)) / (-0xaff + -0xc * 0x283 + 0x2925)) + -parseInt(l(0x94)) / (-0x1a5 * 0x15 + -0xc79 * -0x1 + 0x1613 * 0x1) * (-parseInt(m(0x83)) / (0x1980 + 0x943 * -0x2 + 0x1 * -0x6f6)) + parseInt(l(0x8c)) / (0x95d + -0x18a6 + 0xf4e) + -parseInt(m(0x84)) / (-0x4b6 + 0x2511 * -0x1 + 0x29cd * 0x1) + parseInt(m(0x97)) / (-0x1 * 0x1b6 + -0x3e6 + -0x3 * -0x1e1) + parseInt(m(0x80)) / (-0x1251 * -0x2 + 0x20a2 + -0x3 * 0x1714) + parseInt(l(0x8f)) / (0x1c * -0x4f + -0x3 * 0xd01 + 0x2fb0) * (-parseInt(m(0x88)) / (0x253c + 0x593 * 0x2 + -0x3058));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x846f * 0x25 + 0x2 * -0x9499 + 0x20a33e));
function a() {
    const s = [
        '553512roBzhG',
        'erty',
        '57IdhmEU',
        'defineProp',
        '20DIkiUy',
        'action',
        'ls/AutoRep',
        '__esModule',
        '865395HxKzbw',
        'create',
        'userId',
        '11074086JDcbhZ',
        'value',
        'default',
        'name',
        '23436Glsouo',
        '291mBrAJL',
        '../../mode',
        'tenantId',
        '1694525YqPMuY',
        '6987872lcipGB',
        '__importDe',
        'fault',
        '57940UAiceA'
    ];
    a = function () {
        return s;
    };
    return a();
}
var __importDefault = this && this[n(0x81) + o(0x82)] || function (c) {
    const p = n;
    return c && c[p(0x8b)] ? c : { 'default': c };
};
const k = {};
k[n(0x90)] = !![], Object[n(0x87) + o(0x85)](exports, o(0x8b), k);
const AutoReply_1 = __importDefault(require(o(0x95) + o(0x8a) + 'ly')), CreateAutoReplyService = async ({
        name: d,
        action: e,
        userId: f,
        tenantId: g
    }) => {
        const q = o, r = o, h = {};
        h[q(0x92)] = d, h[r(0x89)] = e, h[q(0x8e)] = f, h[r(0x96)] = g;
        const i = await AutoReply_1[r(0x91)][r(0x8d)](h);
        return i;
    };
exports[n(0x91)] = CreateAutoReplyService;