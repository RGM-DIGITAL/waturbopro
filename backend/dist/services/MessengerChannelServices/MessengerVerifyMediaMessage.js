'use strict';
function a() {
    const S = [
        'ERROR\x20DONW',
        'ers/getQuo',
        'lfsCy',
        'tenantId',
        '1895220gnqdxv',
        'value',
        'parameters',
        'map',
        'defineProp',
        'type',
        'content-ty',
        '../../help',
        'odWWc',
        'parse',
        'public',
        '../Message',
        'ohIEA',
        'message',
        'CstJc',
        'mid',
        'VqdET',
        'tedForMess',
        'fromMe',
        'url',
        'reply_to',
        'error',
        '2111277MucIvf',
        'eStream',
        'WfIAN',
        'headers',
        'Services/C',
        'ZTpoW',
        'VwQrU',
        'axios',
        'message_id',
        'wTDjf',
        '5EWOBGt',
        'hkZMG',
        '562058VyxKYO',
        '__importDe',
        'fault',
        'stream',
        'szBkm',
        '1522980YaVsbr',
        'payload',
        'XkTdN',
        'content-di',
        'reateMessa',
        'method',
        'swgAv',
        'messageDat',
        'createWrit',
        '2224BgWycR',
        'VNTQj',
        '2tVSOZu',
        'join',
        'split',
        'sposition',
        '20565UHTFXn',
        'update',
        'all',
        'timestamp',
        'default',
        'WVbme',
        'received',
        '309921fGLjyS',
        'finish',
        'zwOzm',
        'ageId',
        '__esModule',
        'getTime',
        'LOAD',
        'text',
        'BVCEH',
        'responseTy',
        'GET',
        '5168372bFGNKd',
        'geService',
        'pipe',
        'filename',
        'uTmnZ',
        'path',
        'data',
        'VoLeL',
        '6uuTmTC',
        'erty',
        'attachment'
    ];
    a = function () {
        return S;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x3f0 + -0x196c * -0x1 + -0x96f * 0x3);
        let h = e[f];
        return h;
    }, b(c, d);
}
const B = b, C = b;
(function (c, d) {
    const z = b, A = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(z(0x14c)) / (-0x1ee1 + -0x12a1 + 0x3183) + -parseInt(z(0x15c)) / (-0x1ad1 + -0x14 * -0xf + 0x19a7) * (-parseInt(z(0x110)) / (-0x1a65 + -0x2702 + -0x3 * -0x15ce)) + -parseInt(z(0x12a)) / (-0x10ee + 0x249b + -0x13a9) * (-parseInt(z(0x14a)) / (-0x117 + 0x2089 * 0x1 + -0x649 * 0x5)) + -parseInt(z(0x123)) / (-0x17 * 0xd + 0x1 * -0xe83 + -0x6 * -0x29e) * (-parseInt(z(0x140)) / (-0x4f2 * 0x7 + 0x2 * -0xad5 + 0x5d * 0x9b)) + -parseInt(z(0x15a)) / (0x77e + 0xd6 * -0x28 + 0x19fa) * (-parseInt(z(0x160)) / (0x139e + 0x2 * -0x937 + -0x127)) + -parseInt(z(0x151)) / (0x2 * -0x1a + 0x1679 + -0x163b) + -parseInt(z(0x11b)) / (0x1 * 0x303 + -0x1d * 0x11 + -0x10b);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x3463 * 0x22 + -0xa526 + 0xca25d));
var __importDefault = this && this[B(0x14d) + B(0x14e)] || function (c) {
    const D = B;
    return c && c[D(0x114)] ? c : { 'default': c };
};
const w = {};
w[C(0x12b)] = !![], Object[C(0x12e) + B(0x124)](exports, B(0x114), w);
const path_1 = require(B(0x120)), axios_1 = __importDefault(require(B(0x147))), fs_1 = require('fs'), content_disposition_1 = __importDefault(require(B(0x154) + B(0x15f))), CreateMessageService_1 = __importDefault(require(B(0x135) + B(0x144) + B(0x155) + C(0x11c))), getQuotedForMessageId_1 = __importDefault(require(B(0x131) + C(0x127) + B(0x13b) + B(0x113))), downloadFile = async (e, f) => {
        const E = B, F = B, g = {
                'odWWc': E(0x126) + F(0x116),
                'VNTQj': function (o, p) {
                    return o(p);
                },
                'swgAv': E(0x111),
                'CstJc': F(0x13f),
                'szBkm': function (o, p) {
                    return o !== p;
                },
                'WVbme': E(0x118),
                'VqdET': E(0x11a),
                'VwQrU': E(0x14f),
                'uTmnZ': E(0x154) + E(0x15f),
                'VoLeL': F(0x130) + 'pe',
                'hkZMG': E(0x134)
            }, h = {};
        h[E(0x13d)] = e, h[F(0x156)] = g[F(0x13a)], h[E(0x119) + 'pe'] = g[F(0x146)];
        const i = await (0x2b * -0x8f + 0x22c0 + 0x43 * -0x29, axios_1[F(0x164)])(h), j = {};
        j[E(0x12c)] = {};
        const k = i[E(0x143)][g[E(0x11f)]] ? content_disposition_1[F(0x164)][F(0x133)](i[F(0x143)][g[E(0x11f)]] || '') : j;
        let l = '';
        const m = k?.[E(0x12c)]?.[E(0x11e)];
        if (m) {
            const o = k[E(0x12c)][F(0x11e)];
            l = new Date()[E(0x115)]() + '-' + o;
        } else {
            const p = i[F(0x143)][g[F(0x122)]], q = p[F(0x15e)]('/')[-0x1 * 0x6e5 + -0x920 + 0x7 * 0x24a];
            l = f + '-' + new Date()[F(0x115)]() + '.' + q;
        }
        const n = (-0xc * 0x237 + 0x1 * 0xd0a + 0xd8a, path_1[F(0x15d)])(__dirname, '..', '..', '..', g[F(0x14b)], l);
        return await new Promise((r, s) => {
            const G = F, I = F, t = {
                    'zwOzm': g[G(0x132)],
                    'XkTdN': function (u, v) {
                        const H = G;
                        return g[H(0x15b)](u, v);
                    }
                };
            if (g[I(0x150)](g[G(0x165)], g[G(0x165)])) {
                const v = {
                    'WfIAN': g[I(0x132)],
                    'wTDjf': function (x, y) {
                        const J = G;
                        return g[J(0x15b)](x, y);
                    }
                };
                k[G(0x121)][I(0x11d)]((0x1d09 + -0x1ed4 + 0x1cb, l[I(0x159) + G(0x141)])(m))['on'](g[I(0x157)], async () => s(t))['on'](g[G(0x138)], x => {
                    const K = G, L = G;
                    s[K(0x13f)](v[L(0x142)], x), v[K(0x149)](t, new u(x));
                });
            } else
                i[G(0x121)][G(0x11d)]((-0x133b * -0x1 + 0x164 + -0x1 * 0x149f, fs_1[G(0x159) + I(0x141)])(n))['on'](g[G(0x157)], async () => r(l))['on'](g[I(0x138)], v => {
                    const M = I, N = I;
                    console[M(0x13f)](t[N(0x112)], v), t[M(0x153)](s, new Error(v));
                });
        }), l;
    }, MessengerVerifyMediaMessage = async (c, d, e, f) => {
        const O = B, P = B, g = {
                'lfsCy': function (i, j, k) {
                    return i(j, k);
                },
                'ohIEA': function (i, j) {
                    return i > j;
                },
                'ZTpoW': O(0x10f)
            };
        let h;
        await Promise[P(0x162)](d[P(0x137)][O(0x125) + 's'][P(0x12d)](async (i, j) => {
            const Q = O, R = P, k = e['id'] + '_' + d[Q(0x148)];
            h = await g[R(0x128)](downloadFile, i[R(0x152)][R(0x13d)], k);
            let l;
            if (d?.[Q(0x137)]?.[R(0x13e)]?.[R(0x139)]) {
                const o = await (-0x18ac + 0x2 * 0x2ef + 0x12ce, getQuotedForMessageId_1[R(0x164)])(d[Q(0x137)][R(0x13e)][Q(0x139)], e[R(0x129)]);
                l = o?.['id'] || undefined;
            }
            const m = {
                'messageId': g[Q(0x136)](j, -0x1e * 0xdb + -0x1f33 + 0x38dd) ? d[R(0x148)] + '__' + j : d[Q(0x148)] || '',
                'ticketId': e['id'],
                'contactId': f['id'],
                'body': d[Q(0x137)]?.[R(0x117)] || '',
                'fromMe': d[Q(0x13c)],
                'read': ![],
                'mediaUrl': h,
                'mediaType': d[Q(0x12f)],
                'quotedMsgId': l,
                'timestamp': +d[R(0x163)],
                'status': g[R(0x145)]
            };
            await e[Q(0x161)]({
                'lastMessage': d[R(0x137)]?.[R(0x117)] || h || '',
                'lastMessageAt': new Date()[Q(0x115)](),
                'answered': ![]
            });
            const n = {};
            n[R(0x158) + 'a'] = m, n[R(0x129)] = e[Q(0x129)], await (-0x665 + 0x7 * 0x2ad + 0x1 * -0xc56, CreateMessageService_1[Q(0x164)])(n);
        }));
    };
exports[C(0x164)] = MessengerVerifyMediaMessage;