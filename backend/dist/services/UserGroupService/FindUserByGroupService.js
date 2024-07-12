'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0xa4)) / (0x20 * 0x42 + -0x2073 + -0x60d * -0x4) * (-parseInt(o(0x9b)) / (0x902 * 0x4 + -0xda5 * -0x1 + -0x31ab)) + parseInt(o(0x88)) / (0xf85 + -0x2b6 * 0xd + 0x13bc) * (parseInt(o(0x93)) / (0x184d + 0x120e + -0x2a57)) + -parseInt(n(0x92)) / (0x1d69 + 0x2130 + -0xc * 0x537) + -parseInt(n(0x8e)) / (-0x9c1 + 0x1e24 + -0x145d) + parseInt(o(0x8f)) / (0x1046 + -0x26d3 + -0x11 * -0x154) * (-parseInt(o(0x98)) / (0xe77 * 0x2 + 0x18c9 + -0x35af)) + -parseInt(o(0xa3)) / (-0x1 * -0x1cf9 + 0x5 * -0xb6 + 0x12 * -0x169) * (-parseInt(o(0xa0)) / (-0x171 + 0x1e3d + -0x1cc2)) + parseInt(o(0xa2)) / (0x336 + -0x12b * -0x1 + 0x172 * -0x3) * (-parseInt(o(0x89)) / (0x7 * -0x463 + 0x2 * 0x3e2 + -0x6b * -0x37));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x11921f + 0x8f * 0x2b8 + 0x1fd53 * -0x5));
function a() {
    const u = [
        'defineProp',
        'where',
        '9002410xSllDx',
        'include',
        '33WODlGc',
        '9YuhHCC',
        '1534vNgGJc',
        'XeVva',
        '4479RkpiMW',
        '2305740lwdTpV',
        'groupId',
        'findAll',
        'fault',
        'ls/UsersGr',
        '1977528kXpAhE',
        '8141QXvhtR',
        'value',
        '../../mode',
        '3580105FVapCZ',
        '3148MvemXe',
        '__esModule',
        '__importDe',
        'ls/User',
        'user',
        '3312crmfEW',
        'default',
        'erty',
        '818fHRCHc',
        'model',
        'oups'
    ];
    a = function () {
        return u;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * 0x3fe + 0x2 * 0xdd9 + -0x1f28);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[p(0x95) + p(0x8c)] || function (c) {
    const r = p;
    return c && c[r(0x94)] ? c : { 'default': c };
};
const k = {};
k[p(0x90)] = !![], Object[p(0x9e) + q(0x9a)](exports, p(0x94), k);
const User_1 = __importDefault(require(p(0x91) + q(0x96))), UsersGroups_1 = __importDefault(require(q(0x91) + p(0x8d) + q(0x9d))), FindUserByGroupService = async g => {
        const s = q, t = q, h = {};
        h[s(0xa5)] = t(0x97);
        const i = h, j = {};
        j[t(0x8a)] = g;
        const l = {};
        l[s(0x9c)] = User_1[t(0x99)], l['as'] = i[t(0xa5)];
        const m = {};
        return m[t(0x9f)] = j, m[s(0xa1)] = [l], await UsersGroups_1[s(0x99)][s(0x8b)](m);
    };
exports[q(0x99)] = FindUserByGroupService;