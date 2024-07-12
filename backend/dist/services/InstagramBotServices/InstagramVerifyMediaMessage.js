'use strict';
const E = b, F = b;
(function (c, d) {
    const C = b, D = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(C(0x218)) / (0xfc5 + -0x13b4 + 0x3f * 0x10) * (parseInt(C(0x1e4)) / (-0x4b4 + -0x1eb5 + 0x236b)) + parseInt(D(0x1fb)) / (-0x1 * -0x164 + 0x8f4 + 0x73 * -0x17) + -parseInt(C(0x202)) / (0x1de * 0xd + -0xace + -0x52 * 0x2a) + parseInt(D(0x1c3)) / (0x33 * -0x57 + -0x1f8f * 0x1 + 0x30e9) + -parseInt(C(0x1ca)) / (0x1 * 0x13b3 + -0x2f * 0xba + 0xf7 * 0xf) * (parseInt(C(0x1e3)) / (-0x19a1 + -0x2589 + 0x1 * 0x3f31)) + parseInt(C(0x211)) / (-0xdd * 0x1d + 0x9 * -0x426 + 0x14cd * 0x3) * (-parseInt(D(0x1d0)) / (-0x1 * 0x2248 + 0x2 * 0x3e1 + 0x1 * 0x1a8f)) + -parseInt(D(0x1cd)) / (0x1590 + -0xaa5 + 0x22d * -0x5);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * 0x8e532 + 0x1 * 0x12c0e2 + 0x9 * 0x66eb));
var __importDefault = this && this[E(0x1e6) + E(0x1c9)] || function (c) {
    const G = F;
    return c && c[G(0x204)] ? c : { 'default': c };
};
const u = {};
u[E(0x1f7)] = !![], Object[E(0x1ff) + F(0x1dd)](exports, E(0x204), u);
const path_1 = require(E(0x1ba)), fs_1 = require('fs'), axios_1 = __importDefault(require(F(0x1d1))), CreateMessageService_1 = __importDefault(require(F(0x1f8) + E(0x1e8) + E(0x1ea) + F(0x1c2))), getExt = d => {
        const H = F, I = E, e = {};
        e[H(0x1ed)] = function (j, k) {
            return j - k;
        };
        const f = e, g = d[I(0x1b8)]('?'), h = g[-0x1945 * 0x1 + -0x6af * -0x1 + 0xd * 0x16e][I(0x1b8)]('/'), i = h[f[H(0x1ed)](h[H(0x1b7)], 0x16a2 + 0x35 * 0x11 + -0x1a26)][I(0x1b8)]('.');
        return i[-0x44e + -0x329 * -0x4 + -0x855];
    }, downloadFile = async (c, d) => {
        const J = E, K = F, e = {
                'jhupQ': J(0x215) + K(0x213),
                'YkYte': function (g, h) {
                    return g(h);
                },
                'SEVBX': J(0x1e5),
                'yLUPp': K(0x206),
                'bUfvv': K(0x1f5),
                'WfSKg': J(0x1c6)
            }, f = await (0x1a96 + -0x608 + -0x6 * 0x36d, axios_1[J(0x1c1)])({
                'url': c[K(0x1c5)](),
                'method': e[J(0x207)],
                'responseType': e[J(0x1d7)]
            });
        await new Promise((g, h) => {
            const L = K, N = J, i = {
                    'jPoPF': e[L(0x1b9)],
                    'pcxQy': function (j, k) {
                        const M = L;
                        return e[M(0x1db)](j, k);
                    }
                };
            f[L(0x1e2)][N(0x1cb)]((0xb40 + -0x93e + -0x202, fs_1[N(0x1f4) + N(0x1cf)])(d))['on'](e[N(0x1bf)], async () => g(!![]))['on'](e[N(0x1e1)], j => {
                const O = N, P = L;
                console[O(0x206)](i[P(0x1cc)], j), i[P(0x21f)](h, new Error(j));
            });
        });
    }, VerifyMediaMessage = async (d, e, f, g) => {
        const Q = E, R = E, h = {
                'cBXNP': function (t, v) {
                    return t - v;
                },
                'YXuAR': Q(0x21c) + 'n',
                'aAbRf': Q(0x21e),
                'CwroZ': function (t, v) {
                    return t === v;
                },
                'aJzqI': function (t, v) {
                    return t !== v;
                },
                'XAjmR': Q(0x20e),
                'IZSNs': R(0x21b),
                'jItMB': R(0x216),
                'RkfUa': function (t, v) {
                    return t(v);
                },
                'SEMKl': Q(0x1e9),
                'hvfwL': function (t, v) {
                    return t === v;
                },
                'EbHHM': Q(0x20a),
                'QQBEW': Q(0x1bc),
                'ZhZgx': R(0x1c7),
                'GyTGl': Q(0x1f0),
                'KArNy': function (t, v) {
                    return t(v);
                },
                'zABNN': Q(0x20c) + 'a',
                'OPmqt': R(0x1c4),
                'ZuhoF': R(0x21a),
                'JNQOc': Q(0x1c0),
                'xMaGn': R(0x1eb),
                'FMyqA': function (t, v) {
                    return t === v;
                },
                'UjWvs': function (t, v, w) {
                    return t(v, w);
                },
                'aIJgw': R(0x1fe),
                'KvmiU': Q(0x20b),
                'aIBYg': function (t, v) {
                    return t || v;
                }
            };
        let i, j, k, l = h[Q(0x1bb)], m = h[R(0x1f6)];
        if (h[Q(0x1d4)](d[R(0x1f2)]?.[R(0x1bd)]?.[Q(0x1d8)], -0x3f7 + -0x4f * -0x22 + -0x686 * 0x1)) {
            if (h[Q(0x212)](h[Q(0x1f3)], h[R(0x1f3)])) {
                const v = d[R(0x1b8)]('?'), w = v[0x2159 * -0x1 + 0x2533 + -0x1ed * 0x2][Q(0x1b8)]('/'), x = w[h[Q(0x219)](w[R(0x1b7)], 0x14ba + -0x1c * 0x64 + -0x5 * 0x1f5)][R(0x1b8)]('.');
                return x[-0x745 * 0x3 + 0x1 * -0x513 + 0x1ae3];
            } else {
                const v = h[Q(0x217)][Q(0x1b8)]('|');
                let w = -0x224 * -0x4 + -0x146b * -0x1 + -0x1cfb;
                while (!![]) {
                    switch (v[w++]) {
                    case '0':
                        l = h[Q(0x205)];
                        continue;
                    case '1':
                        [i] = d[R(0x1f2)][Q(0x1bd)][R(0x20f) + Q(0x203)][Q(0x214)];
                        continue;
                    case '2':
                        k = h[R(0x1fa)](getExt, i[R(0x1d2)]);
                        continue;
                    case '3':
                        m = h[Q(0x1d3)];
                        continue;
                    case '4':
                        j = d[R(0x1f2)][Q(0x1bd)];
                        continue;
                    }
                    break;
                }
            }
        }
        if (h[R(0x1b5)](d[R(0x1f2)]?.[R(0x1bd)]?.[Q(0x1d8)], -0x236f * -0x1 + -0xf09 * -0x1 + -0x3 * 0x10d2)) {
            if (h[R(0x212)](h[R(0x1d5)], h[R(0x1d5)])) {
                const y = {};
                return y[Q(0x1c1)] = j, g && h[R(0x204)] ? i : y;
            } else {
                const y = h[R(0x1dc)][R(0x1b8)]('|');
                let z = -0x4 * -0x28e + -0x7a9 * -0x5 + 0x1 * -0x3085;
                while (!![]) {
                    switch (y[z++]) {
                    case '0':
                        [i] = d[Q(0x1f2)][Q(0x1bd)][R(0x1fc) + R(0x1e7)];
                        continue;
                    case '1':
                        m = h[R(0x20d)];
                        continue;
                    case '2':
                        j = d[R(0x1f2)][R(0x1bd)];
                        continue;
                    case '3':
                        l = h[Q(0x1ce)];
                        continue;
                    case '4':
                        k = h[Q(0x1f9)](getExt, i[R(0x1d2)]);
                        continue;
                    }
                    break;
                }
            }
        }
        if (h[Q(0x1d4)](d[R(0x1f2)]?.[Q(0x210)], h[Q(0x1c8)])) {
            const A = h[Q(0x1be)][R(0x1b8)]('|');
            let B = 0x1c16 + -0x1 * 0x2a9 + -0x196d * 0x1;
            while (!![]) {
                switch (A[B++]) {
                case '0':
                    k = h[R(0x1f9)](getExt, i[Q(0x1ef)]);
                    continue;
                case '1':
                    j = d[Q(0x1f2)][Q(0x20c) + 'a'][R(0x1bd)];
                    continue;
                case '2':
                    m = h[Q(0x1f1)];
                    continue;
                case '3':
                    l = h[R(0x201)];
                    continue;
                case '4':
                    i = d[R(0x1f2)][R(0x20c) + 'a'][Q(0x1bd)][R(0x1c0)];
                    continue;
                }
                break;
            }
        }
        const n = f['id'] + '_' + j['id'] + '_' + new Date()[R(0x21d)]() + '.' + k, o = (-0x2 * -0x85 + -0x1 * -0xf72 + -0x41f * 0x4, path_1[R(0x1e0)])(__dirname, '..', '..', '..', h[Q(0x1df)], n), p = h[Q(0x1fd)](d[R(0x1f2)][R(0x210)], h[Q(0x1c8)]) ? i[Q(0x1ef)] : i[R(0x1d2)];
        await h[R(0x200)](downloadFile, p, o);
        const q = {
            'messageId': h[R(0x1fa)](String, d[R(0x1f2)]?.[R(0x1ec)]),
            'ticketId': f['id'],
            'contactId': e ? undefined : g['id'],
            'body': d[R(0x1f2)]?.[Q(0x1de)] || d[R(0x1f2)]?.[Q(0x209)] || m,
            'fromMe': e,
            'read': e,
            'mediaUrl': n,
            'mediaType': l,
            'quotedMsgId': '',
            'timestamp': new Date()[Q(0x21d)](),
            'status': e ? h[R(0x1da)] : h[R(0x208)]
        };
        await f[Q(0x1ee)]({
            'lastMessage': d[Q(0x1f2)]?.[R(0x1de)] || d[Q(0x1f2)]?.[Q(0x209)] || m,
            'lastMessageAt': new Date()[R(0x21d)](),
            'answered': h[Q(0x1d9)](e, ![])
        });
        const r = {};
        r[Q(0x1b6) + 'a'] = q, r[Q(0x1d6)] = f[R(0x1d6)];
        const s = await (0x3a9 + 0x1 * -0x22a3 + 0x1efa, CreateMessageService_1[Q(0x1c1)])(r);
        return s;
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1304 + 0x17ce * 0x1 + -0x19 * 0x1a5);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[F(0x1c1)] = VerifyMediaMessage;
function a() {
    const S = [
        'imagem',
        'reateMessa',
        'public',
        'item_id',
        'ptEqu',
        'update',
        'audio_src',
        'video',
        'ZuhoF',
        'message',
        'XAjmR',
        'createWrit',
        'GET',
        'aAbRf',
        'value',
        '../Message',
        'KArNy',
        'RkfUa',
        '1829880YNuxZi',
        'video_vers',
        'FMyqA',
        'sended',
        'defineProp',
        'UjWvs',
        'JNQOc',
        '4453764BYMyqt',
        'ions2',
        '__esModule',
        'jItMB',
        'error',
        'bUfvv',
        'KvmiU',
        'caption',
        'JOrza',
        'received',
        'voice_medi',
        'ZhZgx',
        'YlYZl',
        'image_vers',
        'item_type',
        '618328Agoiay',
        'aJzqI',
        'LOAD',
        'candidates',
        'ERROR\x20DONW',
        'image',
        'IZSNs',
        '18201COOblc',
        'cBXNP',
        'áudio',
        '4|1|2|0|3',
        'applicatio',
        'getTime',
        'arquivo',
        'pcxQy',
        'hvfwL',
        'messageDat',
        'length',
        'split',
        'jhupQ',
        'path',
        'YXuAR',
        '2|0|4|3|1',
        'media',
        'OPmqt',
        'SEVBX',
        'audio',
        'default',
        'geService',
        '3033260IyQUWZ',
        '1|4|0|3|2',
        'toString',
        'stream',
        'vídeo',
        'zABNN',
        'fault',
        '6IzMAQk',
        'pipe',
        'jPoPF',
        '921540IpMMhG',
        'GyTGl',
        'eStream',
        '18mTEuLD',
        'axios',
        'url',
        'SEMKl',
        'CwroZ',
        'EbHHM',
        'tenantId',
        'WfSKg',
        'media_type',
        'aIBYg',
        'aIJgw',
        'YkYte',
        'QQBEW',
        'erty',
        'text',
        'xMaGn',
        'join',
        'yLUPp',
        'data',
        '1349005ZGSCEy',
        '134aCTCov',
        'finish',
        '__importDe',
        'ions',
        'Services/C'
    ];
    a = function () {
        return S;
    };
    return a();
}