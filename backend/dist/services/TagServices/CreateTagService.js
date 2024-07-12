'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0x7b)) / (0x1 * 0x21fb + 0xad * -0x15 + -0x13c9) + -parseInt(l(0x74)) / (-0xf2e + -0x76 * -0x4c + -0xa * 0x1fc) + parseInt(l(0x88)) / (-0x1ec5 + -0x10b1 + 0x2f79) * (parseInt(l(0x78)) / (0x22a2 + 0xd1c + -0x2fba)) + parseInt(m(0x83)) / (-0x19e4 + -0x10 * 0x1c + 0x1ba9 * 0x1) + -parseInt(l(0x84)) / (-0x7a5 + -0x1875 + 0x2020) + parseInt(l(0x80)) / (0x2451 + 0x21e4 + -0x462e) * (-parseInt(m(0x85)) / (0x23c5 + -0x2489 * -0x1 + -0x4846)) + parseInt(m(0x81)) / (-0x7 * -0x229 + 0x245 * 0xe + 0x1 * -0x2edc);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xaf * 0x1f3 + -0x29956 + 0x7571c));
var __importDefault = this && this[n(0x89) + n(0x79)] || function (c) {
    const p = n;
    return c && c[p(0x7a)] ? c : { 'default': c };
};
const k = {};
function a() {
    const s = [
        'ls/Tag',
        'erty',
        '1062064mDZTUl',
        'default',
        '../../mode',
        'value',
        '28rxCIfJ',
        'fault',
        '__esModule',
        '108370rKHCpZ',
        'isActive',
        'tenantId',
        'defineProp',
        'userId',
        '7DQUhNS',
        '11305152zJobQn',
        'tag',
        '1234990xcNNFo',
        '3430254aOfGIf',
        '4551952IMvgYq',
        'create',
        'color',
        '196410pYeaqg',
        '__importDe'
    ];
    a = function () {
        return s;
    };
    return a();
}
k[n(0x77)] = !![], Object[n(0x7e) + o(0x73)](exports, o(0x7a), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * 0x6ad + -0xfca + 0x346 * 0x7);
        let h = e[f];
        return h;
    }, b(c, d);
}
const Tag_1 = __importDefault(require(o(0x76) + o(0x8a))), CreateTagService = async ({
        tag: d,
        color: e,
        isActive: f,
        userId: g,
        tenantId: h
    }) => {
        const q = o, r = n, i = {};
        i[q(0x82)] = d, i[r(0x87)] = e, i[r(0x7c)] = f, i[q(0x7f)] = g, i[q(0x7d)] = h;
        const j = await Tag_1[q(0x75)][r(0x86)](i);
        return j;
    };
exports[o(0x75)] = CreateTagService;