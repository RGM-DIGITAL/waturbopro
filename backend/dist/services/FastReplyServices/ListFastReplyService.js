'use strict';
const o = b, p = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xc48 + -0x1937 * 0x1 + -0x9ac * -0x4);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(m(0x131)) / (-0x4 * -0x53f + -0x185 * -0x10 + -0x2d4b) + parseInt(m(0x137)) / (0x201b + 0x17ed * -0x1 + -0x82c * 0x1) + -parseInt(m(0x147)) / (0x1a62 * 0x1 + -0x1 * 0x25e1 + -0x1 * -0xb82) + parseInt(m(0x149)) / (-0x22cd + -0x249f + 0x4770) * (-parseInt(m(0x14a)) / (0x99b + -0x7 * -0x51b + -0x2d53)) + parseInt(m(0x144)) / (-0x1d + 0x15 + 0xe) * (-parseInt(m(0x146)) / (0xcba + -0xd * 0x2f2 + 0x1997)) + parseInt(n(0x136)) / (-0x22b5 * -0x1 + 0x9a5 * -0x3 + 0x1e * -0x31) + parseInt(n(0x148)) / (-0x1be6 + -0x43 * -0x65 + 0x180);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x12 * -0xacbd + -0x5 * 0x1e107 + 0x36169));
function a() {
    const t = [
        '../../mode',
        'default',
        'ISbaw',
        'value',
        'findAll',
        'order',
        '__importDe',
        'fault',
        '3848304nSGPwg',
        'ls/FastRep',
        '7zDmMVk',
        '1410672bWZzsT',
        '12804921etglWg',
        '1502328OeNeOi',
        '10CjhWlU',
        '192143uzoVSU',
        '__esModule',
        'key',
        'defineProp',
        'jETqk',
        '4085968pwTDTd',
        '277844BCoihl',
        'ASC',
        'tenantId',
        'where',
        'erty'
    ];
    a = function () {
        return t;
    };
    return a();
}
var __importDefault = this && this[o(0x142) + o(0x143)] || function (c) {
    const q = o;
    return c && c[q(0x132)] ? c : { 'default': c };
};
const k = {};
k[o(0x13f)] = !![], Object[p(0x134) + o(0x13b)](exports, o(0x132), k);
const FastReply_1 = __importDefault(require(o(0x13c) + p(0x145) + 'ly')), ListFastReplyService = async ({tenantId: f}) => {
        const r = p, s = p, g = {};
        g[r(0x135)] = r(0x133), g[s(0x13e)] = s(0x138);
        const h = g, i = {};
        i[s(0x139)] = f;
        const j = {};
        j[r(0x13a)] = i, j[s(0x141)] = [[
                h[s(0x135)],
                h[s(0x13e)]
            ]];
        const l = await FastReply_1[r(0x13d)][r(0x140)](j);
        return l;
    };
exports[o(0x13d)] = ListFastReplyService;