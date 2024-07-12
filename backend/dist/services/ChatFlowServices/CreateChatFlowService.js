'use strict';
const s = b, t = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(q(0x13d)) / (-0x9d5 + 0x27 * 0xd3 + 0x164f * -0x1) + parseInt(r(0x144)) / (-0x453 + -0x1 * -0x529 + -0xd4) * (-parseInt(q(0x14b)) / (-0x1a2c + 0x1544 + 0x4eb)) + -parseInt(q(0x120)) / (-0x23cb + -0x235 * -0x1 + -0x1 * -0x219a) + parseInt(q(0x12c)) / (0xc5f * -0x3 + 0x1483 * -0x1 + -0x1337 * -0x3) + -parseInt(q(0x150)) / (0x11fe + -0x1 * 0x210b + -0x11 * -0xe3) * (parseInt(q(0x125)) / (0x909 + -0x21e8 + 0x2 * 0xc73)) + parseInt(q(0x138)) / (-0x33f * -0x3 + -0xf21 + -0x1 * -0x56c) + -parseInt(q(0x149)) / (0x1a * 0x149 + -0x18bf * 0x1 + 0x41 * -0x22) * (-parseInt(q(0x121)) / (-0x1af1 + 0x6 * 0x101 + -0x1d * -0xb9));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1ffa8 + -0x5c2d4 + 0xc1cf1));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x14b * 0x10 + -0x1 * -0x13f4 + -0x2785);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[s(0x130) + t(0x135)] || function (c) {
    const u = s;
    return c && c[u(0x123)] ? c : { 'default': c };
};
function a() {
    const x = [
        'type',
        'POsoc',
        'fileName',
        'OZhJF',
        '171RdTAxg',
        'util',
        '124038oWVnsu',
        'erty',
        'laRyH',
        'media',
        'userId',
        '6kiwjLB',
        'getTime',
        '775360ZWRmii',
        '399710kUtsGS',
        'base64',
        '__esModule',
        'value',
        '1404781AxJLDF',
        'path',
        'SAlQE',
        'default',
        'isActive',
        '../../mode',
        'ls/ChatFlo',
        '2244000KScCSE',
        'MediaField',
        'FFqzT',
        'nodeList',
        '__importDe',
        'public',
        'tenantId',
        'flow',
        'mediaUrl',
        'fault',
        'name',
        'promisify',
        '1875112mvlvqM',
        'OCoAb',
        'writeFile',
        'interactio',
        'join',
        '308008ztUdaK',
        'create',
        'node',
        'GOgcD',
        'data',
        'split',
        'defineProp',
        '22tXCIgH'
    ];
    a = function () {
        return x;
    };
    return a();
}
const k = {};
k[s(0x124)] = !![], Object[t(0x143) + t(0x14c)](exports, t(0x123), k);
const util_1 = require(s(0x14a)), path_1 = require(t(0x126)), fs_1 = require('fs'), ChatFlow_1 = __importDefault(require(t(0x12a) + s(0x12b) + 'w')), writeFileAsync = (0x463 * 0x2 + -0x1d * 0xa + -0xc * 0xa3, util_1[s(0x137)])(fs_1[t(0x13a)]), CreateChatFlowService = async ({
        flow: d,
        userId: e,
        tenantId: f,
        name: g,
        isActive: h
    }) => {
        const v = t, w = t, i = {
                'POsoc': function (m, n) {
                    return m === n;
                },
                'SAlQE': v(0x13f),
                'OCoAb': function (m, n) {
                    return m === n;
                },
                'laRyH': w(0x12d),
                'OZhJF': function (m, n, o, p) {
                    return m(n, o, p);
                },
                'GOgcD': v(0x131),
                'FFqzT': w(0x122)
            };
        for await (const m of d[w(0x12f)]) {
            if (i[v(0x146)](m[v(0x145)], i[v(0x127)]))
                for await (const n of m[v(0x13b) + 'ns']) {
                    if (i[v(0x139)](n[v(0x145)], i[v(0x14d)]) && n[w(0x141)][w(0x14e)]) {
                        const o = new Date()[v(0x11f)]() + '-' + n[w(0x141)][v(0x136)];
                        await i[v(0x148)](writeFileAsync, (-0xb23 + 0xb03 * -0x1 + -0x87 * -0x2a, path_1[w(0x13c)])(__dirname, '..', '..', '..', i[w(0x140)], o), n[w(0x141)][v(0x14e)][w(0x142)](i[w(0x12e)])[0x35 * -0x12 + 0x205a + -0x1c9f], i[w(0x12e)]), delete n[w(0x141)][v(0x14e)], n[v(0x141)][v(0x147)] = n[w(0x141)][w(0x136)], n[v(0x141)][w(0x134)] = o;
                    }
                }
        }
        const j = {};
        j[v(0x133)] = d, j[v(0x14f)] = e, j[w(0x132)] = f, j[w(0x136)] = g, j[v(0x129)] = h;
        const l = await ChatFlow_1[w(0x128)][v(0x13e)](j);
        return l;
    };
exports[t(0x128)] = CreateChatFlowService;