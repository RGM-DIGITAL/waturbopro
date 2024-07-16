'use strict';
const E = b, F = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * 0xaab + 0x1f5 * -0xb + 0x215a);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const C = b, D = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(C(0x181)) / (-0xd8e + 0x23e + 0xb51) * (-parseInt(C(0x188)) / (0x169d + -0xf86 * 0x2 + -0x1 * -0x871)) + parseInt(C(0x12e)) / (0x1f89 * 0x1 + 0x253d * -0x1 + 0x5b7) * (parseInt(D(0x13d)) / (0x1e53 + -0x1b15 + -0x33a)) + -parseInt(D(0x191)) / (0x6 * 0x57a + 0x70d + 0xde * -0x2e) + -parseInt(D(0x17f)) / (0x110f + 0x5 * -0x2e + -0x1023) + parseInt(C(0x198)) / (0xab * -0x25 + 0x5 * 0x479 + 0x261) * (parseInt(C(0x13b)) / (-0x8d1 + 0xa81 * -0x1 + 0x135a)) + -parseInt(C(0x169)) / (0xb * 0xe + 0x2 * 0x8e1 + -0x1253) + parseInt(C(0x12b)) / (-0x1 * 0x5e1 + 0x1933 + -0x1348);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x45455 + -0x31b34 + 0x3fccb * 0x1));
var __importDefault = this && this[E(0x174) + F(0x162)] || function (c) {
    const G = E;
    return c && c[G(0x140)] ? c : { 'default': c };
};
const u = {};
u[E(0x149)] = !![], Object[E(0x16c) + F(0x130)](exports, F(0x140), u);
const path_1 = require(E(0x184)), util_1 = require(E(0x164)), fs_1 = require('fs'), axios_1 = __importDefault(require(F(0x14c))), CreateMessageService_1 = __importDefault(require(F(0x145) + F(0x137) + E(0x156) + F(0x192))), logger_1 = require(F(0x16a) + E(0x16b)), getQuotedForMessageId_1 = __importDefault(require(F(0x1a0) + E(0x18b) + E(0x186) + E(0x17e))), writeFileAsync = (-0x1543 * 0x1 + 0x5e7 * -0x4 + -0x669 * -0x7, util_1[E(0x168)])(fs_1[E(0x16f)]), getMediaInfo = j => {
        const H = E, I = F, k = {};
        k[H(0x15c)] = H(0x199), k[H(0x18f)] = I(0x143), k[H(0x196)] = H(0x193), k[H(0x154)] = H(0x166), k[H(0x16d)] = I(0x14a), k[H(0x159)] = I(0x176), k[H(0x182)] = function (w, z) {
            return w - z;
        }, k[H(0x153)] = function (w, z) {
            return w == z;
        }, k[H(0x179)] = I(0x189), k[I(0x17b)] = H(0x135);
        const l = k, m = j[I(0x199)] ? l[H(0x15c)] : j[I(0x143)] ? l[H(0x18f)] : j[I(0x193)] ? l[I(0x196)] : j[H(0x166)] ? l[H(0x154)] : j[H(0x14a)] && !j[I(0x14a)][I(0x151) + 'd'] ? l[H(0x16d)] : l[H(0x159)], n = j[m], [o, p, q, r, s, t, v] = [
                m,
                n[H(0x13c)] ? n[H(0x13c)] : '',
                ![],
                null,
                n[I(0x152)] ? n[I(0x152)] : n[l[I(0x182)](n[H(0x17a)], 0x81 * 0x21 + -0xf * -0x49 + -0x14e7)][H(0x152)],
                j[H(0x129)] ? j[I(0x129)] : '',
                l[H(0x153)](m, l[I(0x154)])
            ];
        switch (m) {
        case l[H(0x15c)]:
            const w = {};
            w[I(0x167)] = o, w[H(0x13f)] = l[I(0x179)], w[H(0x165)] = q, w[I(0x185)] = r, w[I(0x160)] = s, w[I(0x129)] = t, w[H(0x13a)] = v;
            return w;
            break;
        case l[H(0x18f)]:
            const x = {};
            x[I(0x167)] = o, x[H(0x13f)] = p, x[I(0x165)] = q, x[H(0x185)] = r, x[I(0x160)] = s, x[H(0x129)] = t, x[I(0x13a)] = v;
            return x;
            break;
        case l[I(0x196)]:
            const y = {};
            y[H(0x167)] = o, y[H(0x13f)] = p, y[I(0x165)] = q, y[I(0x185)] = r, y[H(0x160)] = s, y[I(0x129)] = t, y[I(0x13a)] = v;
            return y;
            break;
        case l[I(0x154)]:
            const z = {};
            z[I(0x167)] = o, z[H(0x13f)] = p, z[I(0x165)] = q, z[I(0x185)] = r, z[H(0x160)] = s, z[I(0x129)] = t, z[H(0x13a)] = v;
            return z;
            break;
        case l[I(0x16d)]:
            const A = {};
            A[H(0x167)] = o, A[H(0x13f)] = l[I(0x17b)], A[I(0x165)] = q, A[I(0x185)] = r, A[H(0x160)] = s, A[H(0x129)] = t, A[H(0x13a)] = v, A[H(0x138)] = !![];
            return A;
            break;
        default:
            const B = {};
            B[I(0x167)] = o, B[H(0x13f)] = p, B[I(0x165)] = !![], B[H(0x185)] = n[I(0x15d)] ? n[H(0x15d)] : null, B[I(0x160)] = s, B[I(0x129)] = t, B[I(0x13a)] = v;
            return B;
            break;
        }
    }, downloadFile = async (c, d) => {
        const J = F, K = E, e = {
                'CTcJW': J(0x148) + K(0x133),
                'odBff': function (g, h) {
                    return g(h);
                },
                'JTSMw': K(0x157),
                'OIkqQ': J(0x134),
                'GpUpK': J(0x194),
                'lAnkk': K(0x12c)
            }, f = await (-0x23af + 0x3 * 0x9c7 + 0x1 * 0x65a, axios_1[J(0x141)])({
                'url': c[K(0x128)](),
                'method': e[J(0x17c)],
                'responseType': e[K(0x15e)]
            });
        await new Promise((g, h) => {
            const L = K, N = J, i = {
                    'iwIHN': e[L(0x1a1)],
                    'BTpwA': function (j, k) {
                        const M = L;
                        return e[M(0x19a)](j, k);
                    }
                };
            f[N(0x19d)][N(0x19c)]((-0x1a3 * 0xc + -0x3 * -0x5a6 + 0x2b2, fs_1[L(0x142) + L(0x14d)])(d))['on'](e[L(0x161)], async () => g(!![]))['on'](e[L(0x163)], j => {
                const O = N, P = L;
                console[O(0x134)](i[P(0x139)], j), i[P(0x14e)](h, new Error(j));
            });
        });
    }, VerifyMediaMessage = async (d, e, f, g) => {
        const Q = F, R = F, h = {
                'WAhws': function (v, w) {
                    return v && w;
                },
                'ZfUgy': function (v, w) {
                    return v(w);
                },
                'LvgSJ': function (v, w) {
                    return v !== w;
                },
                'OeXWx': Q(0x14b),
                'KKScy': Q(0x19e),
                'NpljN': function (v, w, x) {
                    return v(w, x);
                },
                'XncXM': function (v, w) {
                    return v !== w;
                },
                'jCMQn': R(0x170),
                'aNmkU': R(0x178),
                'mtAkr': function (v, w) {
                    return v * w;
                },
                'gOMtq': R(0x180),
                'EmLGO': R(0x19b),
                'WPrCk': function (v, w) {
                    return v || w;
                }
            };
        let i, j = {};
        i = d?.[R(0x132)], j = d?.[R(0x173)];
        h[Q(0x147)](!i, j) && (i = j?.[Q(0x13e) + Q(0x175)]);
        const k = await h[R(0x15f)](getMediaInfo, i), l = await d[Q(0x16e)][Q(0x177)](k[Q(0x160)]);
        if (!l) {
            if (h[Q(0x18e)](h[R(0x150)], h[Q(0x150)])) {
                e[Q(0x18c)][R(0x134)](Q(0x155) + Q(0x144) + Q(0x17d) + f[R(0x197)]);
                return;
            } else {
                logger_1[R(0x18c)][Q(0x134)](Q(0x155) + R(0x144) + Q(0x17d) + i[R(0x197)]);
                return;
            }
        }
        const m = k[Q(0x13f)][R(0x14f)]('/')[0x2 * -0x7cf + 0x238e + -0x13ef][Q(0x14f)](';')[0x1afc + 0x202a + -0x3b26], n = l[Q(0x152)] + '_' + new Date()[R(0x183)]() + '.' + m, o = (-0x49e + -0x4 * 0x85d + -0x1bb * -0x16, path_1[Q(0x15a)])(__dirname, '..', '..', '..', h[Q(0x12f)], n), p = await d[Q(0x16e)][Q(0x195) + 'k'](k[R(0x160)]);
        await h[Q(0x131)](downloadFile, p, o);
        let q;
        if (i?.[Q(0x19f) + R(0x171)]?.[R(0x197)]) {
            if (h[R(0x136)](h[Q(0x187)], h[Q(0x190)])) {
                const w = await (-0x1401 * 0x1 + 0x18 * -0x79 + 0x1f59, getQuotedForMessageId_1[R(0x141)])(i[R(0x19f) + Q(0x171)][Q(0x197)], f[Q(0x18a)]);
                q = w?.['id'] || undefined;
            } else
                e = f?.[R(0x13e) + Q(0x175)];
        }
        const r = {
            'messageId': h[R(0x15f)](String, i?.[R(0x197)]),
            'ticketId': f['id'],
            'contactId': e ? undefined : g['id'],
            'body': i[R(0x15b)] || i[Q(0x129)] || n,
            'fromMe': e,
            'read': e,
            'mediaUrl': n,
            'mediaType': k[R(0x13f)][R(0x14f)]('/')[-0xa52 + -0x1f04 + 0x197 * 0x1a],
            'quotedMsgId': q,
            'timestamp': h[Q(0x12a)](+i[Q(0x146)], -0x15cb * -0x1 + 0x1ecf * -0x1 + 0xcec),
            'status': e ? h[Q(0x172)] : h[R(0x158)]
        };
        await f[R(0x173)]({
            'lastMessage': i[R(0x15b)] || i[Q(0x129)] || n,
            'lastMessageAt': new Date()[Q(0x183)](),
            'answered': h[R(0x18d)](e, ![])
        });
        const s = {};
        s[R(0x12d) + 'a'] = r, s[R(0x18a)] = f[R(0x18a)];
        const t = await (0x6e2 + 0x1 * 0x2bc + -0x99e * 0x1, CreateMessageService_1[Q(0x141)])(s);
        return t;
    };
exports[F(0x141)] = VerifyMediaMessage;
function a() {
    const S = [
        'lAnkk',
        'ZfUgy',
        'fileId',
        'JTSMw',
        'fault',
        'OIkqQ',
        'util',
        'SAD',
        'voice',
        'type',
        'promisify',
        '4632408NDxqhq',
        '../../util',
        's/logger',
        'defineProp',
        'xRDJo',
        'telegram',
        'writeFile',
        'qIvuY',
        'essage',
        'gOMtq',
        'update',
        '__importDe',
        'sage',
        'document',
        'getFile',
        'tUnAK',
        'MmzcJ',
        'length',
        'qLXaT',
        'GpUpK',
        '\x20ID:\x20',
        'ageId',
        '2495328maFGsU',
        'sended',
        '37306oDVyfy',
        'VNRxB',
        'getTime',
        'path',
        'fileName',
        'tedForMess',
        'jCMQn',
        '4PCWwFt',
        'image/png',
        'tenantId',
        'ers/getQuo',
        'logger',
        'WPrCk',
        'LvgSJ',
        'QVcMA',
        'aNmkU',
        '2650385JvvlQc',
        'geService',
        'audio',
        'GET',
        'getFileLin',
        'AjvCQ',
        'message_id',
        '39991yfouCK',
        'photo',
        'odBff',
        'received',
        'pipe',
        'data',
        'public',
        'reply_to_m',
        '../../help',
        'CTcJW',
        'toString',
        'caption',
        'mtAkr',
        '14732690vobVPh',
        'stream',
        'messageDat',
        '21FUbDhE',
        'KKScy',
        'erty',
        'NpljN',
        'message',
        'LOAD',
        'error',
        'image/webp',
        'XncXM',
        'Services/C',
        'SAS',
        'iwIHN',
        'SAV',
        '304uTdbxy',
        'mime_type',
        '106520YQDZlK',
        'edited_mes',
        'mimeType',
        '__esModule',
        'default',
        'createWrit',
        'video',
        'AD_MEDIA::',
        '../Message',
        'date',
        'WAhws',
        'ERROR\x20DONW',
        'value',
        'sticker',
        'uefjR',
        'axios',
        'eStream',
        'BTpwA',
        'split',
        'OeXWx',
        'is_animate',
        'file_id',
        'RkJJi',
        'MVDQw',
        'ERR_DOWNLO',
        'reateMessa',
        'finish',
        'EmLGO',
        'mGcQD',
        'join',
        'text',
        'mvQoV',
        'file_name'
    ];
    a = function () {
        return S;
    };
    return a();
}