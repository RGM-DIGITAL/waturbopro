'use strict';
const s = b, t = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(q(0x195)) / (-0x1 * 0x1a17 + 0x254f * 0x1 + 0x1 * -0xb37) * (-parseInt(q(0x1a0)) / (0x9af * 0x4 + 0x7f1 + 0x397 * -0xd)) + parseInt(q(0x1b4)) / (-0x1166 * 0x2 + 0x6 * 0x52a + 0x3d3) * (parseInt(r(0x1b8)) / (-0x96a + -0x21bb + 0x2b29)) + -parseInt(q(0x1ac)) / (0x17 * 0xfd + -0xe35 + -0x881) + parseInt(q(0x1a9)) / (-0x16d2 + -0x261b + -0x2e7 * -0x15) * (parseInt(r(0x1ab)) / (0x1f48 + 0x1fa2 + -0x3ee3)) + parseInt(q(0x190)) / (0x244d + -0x9e6 + -0x9d * 0x2b) * (-parseInt(q(0x1b3)) / (0x2149 + -0x17b * 0xc + -0x7be * 0x2)) + -parseInt(r(0x1b7)) / (0x1ab * -0x17 + 0xe21 + 0xef * 0x1a) + parseInt(q(0x1a4)) / (-0x1735 + -0x1 * -0xd94 + 0x9ac);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xb2c77 + -0xab926 + 0x1c7309));
var __importDefault = this && this[s(0x1ad) + t(0x198)] || function (c) {
    const u = s;
    return c && c[u(0x1a2)] ? c : { 'default': c };
};
const k = {};
k[s(0x193)] = !![], Object[t(0x1aa) + s(0x1b6)](exports, s(0x1a2), k);
const util_1 = require(s(0x18d)), path_1 = require(t(0x19e)), fs_1 = require('fs'), ChatFlow_1 = __importDefault(require(s(0x18f) + s(0x196) + 'w')), writeFileAsync = (-0x4f * 0x7e + -0xe55 + 0x39 * 0xef, util_1[t(0x1bd)])(fs_1[s(0x1b9)]), CreateChatFlowService = async ({
        flow: d,
        userId: e,
        tenantId: f,
        name: g,
        isActive: h
    }) => {
        const v = t, w = s, i = {
                'xhxgu': function (m, n) {
                    return m === n;
                },
                'hzOmn': v(0x1af),
                'mcrzG': w(0x1b5),
                'SZzLF': function (m, n, o, p) {
                    return m(n, o, p);
                },
                'rYoHg': w(0x1ba),
                'qaaKY': v(0x199)
            };
        for await (const m of d[v(0x192)]) {
            if (i[w(0x19c)](m[w(0x19d)], i[w(0x1b1)]))
                for await (const n of m[v(0x19f) + 'ns']) {
                    if (i[v(0x19c)](n[v(0x19d)], i[w(0x1a5)]) && n[w(0x1a7)][w(0x1b2)]) {
                        const o = new Date()[v(0x1a8)]() + '-' + n[w(0x1a7)][v(0x194)];
                        await i[w(0x197)](writeFileAsync, (-0x1bc2 + -0x7eb + -0x23ad * -0x1, path_1[v(0x1a6)])(__dirname, '..', '..', '..', i[v(0x1a1)], o), n[v(0x1a7)][w(0x1b2)][v(0x191)](i[v(0x19b)])[-0x9a0 + 0x2472 + -0x1 * 0x1ad1], i[w(0x19b)]), delete n[w(0x1a7)][w(0x1b2)], n[v(0x1a7)][w(0x1b0)] = n[w(0x1a7)][v(0x194)], n[v(0x1a7)][v(0x18c)] = o;
                    }
                }
        }
        const j = {};
        j[w(0x1bb)] = d, j[w(0x18e)] = e, j[w(0x19a)] = f, j[v(0x194)] = g, j[v(0x1ae)] = h;
        const l = await ChatFlow_1[w(0x1a3)][w(0x1bc)](j);
        return l;
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1370 + 0x1 * 0x1f8d + 0x1 * -0xa91);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const x = [
        'writeFile',
        'public',
        'flow',
        'create',
        'promisify',
        'mediaUrl',
        'util',
        'userId',
        '../../mode',
        '107280GhQKjd',
        'split',
        'nodeList',
        'value',
        'name',
        '2mkmCMh',
        'ls/ChatFlo',
        'SZzLF',
        'fault',
        'base64',
        'tenantId',
        'qaaKY',
        'xhxgu',
        'type',
        'path',
        'interactio',
        '470416hEGubN',
        'rYoHg',
        '__esModule',
        'default',
        '10307990ghYLNH',
        'mcrzG',
        'join',
        'data',
        'getTime',
        '582PfWYzS',
        'defineProp',
        '18102PeMEGN',
        '3302730EhOlRJ',
        '__importDe',
        'isActive',
        'node',
        'fileName',
        'hzOmn',
        'media',
        '387DeFJEv',
        '27ZdGGsd',
        'MediaField',
        'erty',
        '3223310rWEUKy',
        '146924NCBrUz'
    ];
    a = function () {
        return x;
    };
    return a();
}
exports[t(0x1a3)] = CreateChatFlowService;