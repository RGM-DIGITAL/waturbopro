'use strict';
const B = b, C = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1ea2 + -0x74e + -0x68c * -0x6);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const z = b, A = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(z(0x172)) / (-0x93b * 0x2 + 0x77 * -0x4f + 0x10 * 0x373) * (parseInt(z(0x17d)) / (-0x1b84 + -0xfd * 0x27 + 0x4211)) + -parseInt(z(0x198)) / (-0x2703 + -0x1b2f + 0x4235 * 0x1) + parseInt(z(0x194)) / (0x1 * -0x1257 + -0x695 + -0x2 * -0xc78) + parseInt(z(0x174)) / (0x2552 + -0x4 * 0x805 + -0x7 * 0xbf) + parseInt(A(0x192)) / (-0x7 * 0xe3 + -0x23a6 + 0x97 * 0x47) * (-parseInt(A(0x193)) / (-0x58 * 0x2a + -0x2f * 0xc1 + 0x31e6)) + parseInt(A(0x16c)) / (0x38e + 0x4 * -0x4c5 + 0xf8e) * (-parseInt(z(0x15b)) / (0x1afd + 0x1 * 0x1b25 + -0x3619 * 0x1)) + parseInt(A(0x196)) / (0x2 * -0xfe9 + -0x1 * -0x21fd + -0x221);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x2017e + 0x1 * -0x6f5b + 0x581e));
function a() {
    const G = [
        'XNYVB',
        'nodeList',
        'iepnL',
        'mediaUrl',
        'hgXpM',
        'JTXuD',
        'isActive',
        'flow',
        'UJMTv',
        'getTime',
        '885282nXgDad',
        '7AlKvug',
        '710736XPyMho',
        'writeFile',
        '1659770OzrPNN',
        'MediaField',
        '317661NupZIn',
        'reload',
        '__importDe',
        'eJokH',
        '2853UBTVEO',
        'defineProp',
        'type',
        'name',
        'interactio',
        'FleUQ',
        'public',
        'fault',
        'ERR_NO_CHA',
        'length',
        'node',
        'celularTes',
        'util',
        'promisify',
        'VLqcC',
        '__esModule',
        'update',
        '4432fLfBvo',
        'tenantId',
        'erty',
        'value',
        'gdjQs',
        '../../mode',
        '244qQXogT',
        'T_FLOW_FOU',
        '967860mCOUDN',
        'dsyXx',
        'findOne',
        'data',
        'userId',
        'rs/AppErro',
        'where',
        'join',
        'split',
        '142dvECmD',
        'media',
        'afObF',
        'path',
        'attributes',
        '../../erro',
        'ls/ChatFlo',
        'base64',
        'AscgR',
        'default',
        'uuMcd'
    ];
    a = function () {
        return G;
    };
    return a();
}
var __importDefault = this && this[B(0x159) + C(0x162)] || function (c) {
    const D = C;
    return c && c[D(0x16a)] ? c : { 'default': c };
};
const k = {};
k[C(0x16f)] = !![], Object[C(0x15c) + B(0x16e)](exports, C(0x16a), k);
const util_1 = require(B(0x167)), path_1 = require(B(0x180)), fs_1 = require('fs'), ChatFlow_1 = __importDefault(require(C(0x171) + B(0x183) + 'w')), AppError_1 = __importDefault(require(C(0x182) + B(0x179) + 'r')), writeFileAsync = (0xc2 * -0x4 + -0x2b6 + -0xf * -0x62, util_1[B(0x168)])(fs_1[B(0x195)]), UpdateChatFlowService = async ({
        chatFlowData: g,
        chatFlowId: h,
        tenantId: i
    }) => {
        const E = B, F = C, j = {
                'VLqcC': E(0x15e),
                'AscgR': E(0x18f),
                'uuMcd': F(0x178),
                'hgXpM': E(0x18e),
                'iepnL': F(0x166) + 'te',
                'JTXuD': F(0x163) + F(0x173) + 'ND',
                'UJMTv': function (v, w) {
                    return v === w;
                },
                'FleUQ': F(0x165),
                'eJokH': E(0x197),
                'XNYVB': function (v, w, x, y) {
                    return v(w, x, y);
                },
                'gdjQs': E(0x161),
                'afObF': F(0x184),
                'dsyXx': function (v, w) {
                    return v - w;
                }
            }, {
                name: l,
                flow: m,
                userId: n,
                isActive: o,
                celularTeste: p
            } = g, q = {};
        q['id'] = h, q[F(0x16d)] = i;
        const r = {};
        r[E(0x17a)] = q, r[F(0x181)] = [
            'id',
            j[F(0x169)],
            j[E(0x185)],
            j[F(0x187)],
            j[E(0x18c)],
            j[E(0x18a)]
        ];
        const s = await ChatFlow_1[F(0x186)][E(0x176)](r);
        if (!s)
            throw new AppError_1[(E(0x186))](j[E(0x18d)], 0x76f + 0x177 + 0x752 * -0x1);
        for await (const v of m[E(0x18f)][E(0x189)]) {
            if (j[F(0x190)](v[E(0x15d)], j[E(0x160)]))
                for await (const w of v[E(0x15f) + 'ns']) {
                    if (j[E(0x190)](w[E(0x15d)], j[F(0x15a)]) && w[E(0x177)][E(0x17e)]) {
                        const x = new Date()[E(0x191)]() + '-' + w[F(0x177)][F(0x15e)];
                        await j[F(0x188)](writeFileAsync, (0x1c32 + -0x214f + 0x51d, path_1[F(0x17b)])(__dirname, '..', '..', '..', j[F(0x170)], x), w[E(0x177)][F(0x17e)][F(0x17c)](j[F(0x17f)])[0x79f + 0xc45 + -0x13e3], j[E(0x17f)]), delete w[E(0x177)][F(0x17e)], w[F(0x177)][F(0x18b)] = x;
                    }
                    if (j[F(0x190)](w[F(0x15d)], j[E(0x15a)]) && w[F(0x177)][E(0x18b)]) {
                        const y = w[E(0x177)][F(0x18b)][F(0x17c)]('/');
                        w[E(0x177)][F(0x18b)] = y[j[F(0x175)](y[E(0x164)], -0xd * 0x17 + 0x98 + -0x1 * -0x94)];
                    }
                }
        }
        const t = {};
        t[E(0x15e)] = l, t[F(0x18f)] = m[E(0x18f)], t[F(0x178)] = n, t[E(0x18e)] = m[E(0x18e)], t[F(0x166) + 'te'] = m[F(0x166) + 'te'], await s[E(0x16b)](t);
        const u = {};
        return u[F(0x181)] = [
            'id',
            j[F(0x169)],
            j[E(0x185)],
            j[F(0x187)],
            j[E(0x18c)],
            j[F(0x18a)]
        ], await s[E(0x158)](u), s;
    };
exports[B(0x186)] = UpdateChatFlowService;