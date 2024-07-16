'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0x162)) / (0x2107 + -0x1c45 + -0x1 * 0x4c1) * (-parseInt(n(0x167)) / (0x13 * 0x23 + 0x63 * -0x5 + -0x7 * 0x18)) + parseInt(o(0x15c)) / (0xb * -0x38 + -0x13 * -0x14e + -0x165f) * (parseInt(n(0x16d)) / (0xce * 0x12 + -0x25e * 0x7 + 0x21a)) + parseInt(o(0x16b)) / (0x7 * 0x48b + -0xccb + -0x12fd) + -parseInt(n(0x166)) / (-0xafb + 0x131c * 0x1 + -0x53 * 0x19) + -parseInt(o(0x165)) / (-0x50a + -0xd2d + 0x5 * 0x3a6) * (-parseInt(n(0x15f)) / (0x8b9 * 0x2 + 0x3e7 + -0x1 * 0x1551)) + parseInt(o(0x15d)) / (0x1ae * 0xb + -0x255a + 0x12e9) + parseInt(o(0x163)) / (-0x19db * -0x1 + -0x25b8 + 0xbe7) * (-parseInt(n(0x154)) / (-0x2b * -0x97 + -0x12e6 + -0x89 * 0xc));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x2d82b * -0x3 + -0x693d * -0xa + 0xacf5f));
function a() {
    const u = [
        '11kurRBz',
        '../../mode',
        'ls/User',
        '__importDe',
        'model',
        '__esModule',
        'ls/UsersGr',
        'fault',
        '1285059pxZroi',
        '3271914wSnNgI',
        'findAll',
        '15928qInSQj',
        'groupId',
        'include',
        '1bFPtpo',
        '17233430YefNxs',
        'value',
        '924iUvrMC',
        '250830EbcIGz',
        '704138DTEfLJ',
        'oups',
        'Mdrnp',
        'defineProp',
        '3884960RkvSbM',
        'default',
        '4xOjLyE',
        'erty',
        'where',
        'user'
    ];
    a = function () {
        return u;
    };
    return a();
}
var __importDefault = this && this[p(0x157) + p(0x15b)] || function (c) {
    const r = q;
    return c && c[r(0x159)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1fb0 + -0x2246 + 0x869 * 0x8);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[p(0x164)] = !![], Object[p(0x16a) + p(0x16e)](exports, p(0x159), k);
const User_1 = __importDefault(require(p(0x155) + p(0x156))), UsersGroups_1 = __importDefault(require(q(0x155) + q(0x15a) + q(0x168))), FindUserByGroupService = async g => {
        const s = q, t = p, h = {};
        h[s(0x169)] = s(0x153);
        const i = h, j = {};
        j[t(0x160)] = g;
        const l = {};
        l[s(0x158)] = User_1[s(0x16c)], l['as'] = i[t(0x169)];
        const m = {};
        return m[t(0x152)] = j, m[t(0x161)] = [l], await UsersGroups_1[s(0x16c)][t(0x15e)](m);
    };
exports[p(0x16c)] = FindUserByGroupService;