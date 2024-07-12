'use strict';
const aC = b, aD = b;
(function (c, d) {
    const aA = b, aB = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(aA(0x1e1)) / (-0x2d4 + 0x1 * -0x13c9 + 0xc1 * 0x1e) + -parseInt(aB(0x198)) / (-0x12 * 0x184 + -0x1bc5 + 0x370f) * (parseInt(aB(0x181)) / (0x4 * -0x1a7 + -0x1eb8 + -0xb * -0x365)) + -parseInt(aB(0x1f3)) / (-0x1cd7 + 0x11aa + 0xb31) * (parseInt(aA(0x217)) / (-0x1 * 0x99e + -0x89 * -0x35 + -0x12ba)) + -parseInt(aA(0x168)) / (-0x10 + 0x2298 + 0x1 * -0x2282) + parseInt(aA(0x28b)) / (-0x11eb * -0x2 + 0x1708 + -0x3ad7) + -parseInt(aA(0x188)) / (0x1 * -0x3f + 0x59f * -0x2 + 0xb85) * (-parseInt(aB(0x278)) / (-0x29d + -0x1 * -0x92 + 0x214)) + parseInt(aB(0x272)) / (0x80e + -0x4 * -0x6f6 + -0x23dc) * (parseInt(aA(0x21b)) / (-0xc68 + 0x4c9 + 0x7aa));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x10 * 0x1df5 + -0x160d85 + -0x15 * -0x18232));
var __importDefault = this && this[aC(0x1aa) + aC(0x186)] || function (c) {
    const aE = aD;
    return c && c[aE(0x1b7)] ? c : { 'default': c };
};
const az = {};
az[aC(0x1de)] = !![], Object[aD(0x276) + aD(0x25a)](exports, aD(0x1b7), az), exports[aC(0x282) + aD(0x26b)] = exports[aD(0x1cc) + aD(0x153)] = exports[aD(0x17a) + aD(0x200)] = exports[aC(0x1c4) + aD(0x19a) + aC(0x212)] = exports[aD(0x21f) + aD(0x1e2)] = exports[aD(0x251) + aD(0x1e5)] = void (-0x1 * 0xa71 + 0xbf1 * -0x1 + 0x1662);
const CreateOrUpdateContactService_1 = __importDefault(require(aC(0x201) + aD(0x27d) + aC(0x185) + aD(0x1fc) + aD(0x27d))), baileys_1 = require(aC(0x18a) + aD(0x18f) + aC(0x288)), CreateMessageService_1 = __importDefault(require(aC(0x173) + aD(0x14a) + aC(0x15f) + aC(0x1c3) + 'ce')), util_1 = require(aD(0x20d)), fs_1 = require('fs'), path_1 = require(aC(0x239)), logger_1 = require(aC(0x196) + aC(0x144) + 'r'), Message_1 = __importDefault(require(aC(0x220) + aD(0x1b9) + aD(0x155))), MakeRandomId_1 = require(aD(0x19b) + aC(0x242) + aD(0x1cb)), writeFileAsync = (0x125 * 0x11 + -0x975 + -0x200 * 0x5, util_1[aD(0x1df)])(fs_1[aC(0x24c)]), VerifyContactBaileys = async (c, d, e, f = ![], g = undefined) => {
        const aF = aD, aG = aD, h = {
                'GLgaH': aF(0x232) + 'e',
                'LZWYU': function (n, o) {
                    return n !== o;
                },
                'WsMIH': aG(0x1b3),
                'GxqMT': function (n, o) {
                    return n === o;
                },
                'raEhw': aG(0x22c),
                'qztXe': function (n, o) {
                    return n(o);
                }
            };
        let i = '', j = '', k = '';
        if (f) {
            if (h[aF(0x1ab)](h[aF(0x20f)], h[aG(0x20f)])) {
                const o = f[aF(0x156)][aF(0x245)]('/')[0x4 * 0x626 + 0x836 + -0x9 * 0x3a5][aF(0x245)](';')[0x3 * -0x8d8 + 0x1 * -0xeb + -0x1b73 * -0x1];
                g[aF(0x275)] = new h()[aF(0x249)]() + '.' + o;
            } else
                i = g[aG(0x159)], k = g[aG(0x159)], j = g['id'][aG(0x245)]('@')[0x2 * 0x137c + -0xf8d + -0x176b];
        } else
            c[aG(0x1f7)][aF(0x1c9) + 't'] ? h[aG(0x145)](h[aG(0x244)], h[aF(0x244)]) ? j = c[aG(0x1f7)][aG(0x1c9) + 't']?.[aG(0x245)]('@')[-0xa6b + 0x3eb + 0x680] : d = h[aG(0x237)] : j = c[aG(0x1f7)][aF(0x148)]?.[aG(0x245)]('@')[0x92e + -0x19fc + -0x2cd * -0x6], c[aG(0x1f7)][aF(0x16f)] ? (i = j, k = j) : (i = c[aG(0x15b)], k = c[aF(0x15b)]);
        const l = {
                'name': i,
                'number': j,
                'profilePicUrl': e,
                'tenantId': h[aG(0x163)](Number, d),
                'pushname': k,
                'isUser': ![],
                'isWAContact': ![],
                'isGroup': f
            }, m = await (-0x26c9 + 0x862 + 0x1 * 0x1e67, CreateOrUpdateContactService_1[aG(0x23e)])(l);
        return m;
    };
exports[aC(0x251) + aD(0x1e5)] = VerifyContactBaileys;
const VerifyMessageBaileys = async (d, e, f, g) => {
    const aH = aD, aI = aD, h = {
            'nmpou': function (m, n) {
                return m(n);
            },
            'rjBJa': function (m, n) {
                return m(n);
            },
            'VfcZN': function (m, n) {
                return m(n);
            },
            'AIYaG': aH(0x1ff),
            'BuPnQ': function (m, n) {
                return m(n);
            },
            'fhRrh': function (m, n) {
                return m || n;
            }
        }, i = await (-0x1ae9 * 0x1 + -0x7 * -0x112 + 0x136b, exports[aH(0x17a) + aH(0x200)])(d), j = await (0x1d80 + -0x33 + 0xd * -0x241, exports[aH(0x1cc) + aH(0x153)])(d), k = {
            'messageId': h[aI(0x17f)](String, d[aI(0x1f7)]['id']),
            'ticketId': f['id'],
            'contactId': e ? undefined : g['id'],
            'body': h[aH(0x1b6)](String, j),
            'fromMe': e,
            'read': e,
            'mediaType': h[aI(0x250)](getTypeMessage, d),
            'quotedMsgId': i?.['id'],
            'timestamp': new Date()[aH(0x249)](),
            'status': h[aI(0x175)],
            'dataJson': JSON[aH(0x1f2)](d)
        };
    await f[aH(0x1ee)]({
        'lastMessage': h[aH(0x179)](String, j),
        'lastMessageAt': new Date()[aI(0x249)](),
        'answered': h[aH(0x248)](e, ![])
    });
    const l = {};
    l[aH(0x141) + 'a'] = k, l[aH(0x215)] = f[aI(0x215)], await (-0x8 * -0x2bb + 0x1147 + 0x5 * -0x7d3, CreateMessageService_1[aH(0x23e)])(l);
};
exports[aC(0x21f) + aC(0x1e2)] = VerifyMessageBaileys;
const VerifyMediaMessageBaileys = async (e, f, g) => {
    const aJ = aD, aK = aD, h = {
            'DPxLS': aJ(0x232) + 'e',
            'IVvkt': aK(0x170) + aJ(0x153),
            'KvSZz': function (j, k) {
                return j(k);
            },
            'ZOYBV': function (j, k) {
                return j === k;
            },
            'xIqLA': aK(0x261),
            'pLyJP': aJ(0x1e0),
            'sXiIg': aJ(0x1ba) + aK(0x27e) + aK(0x166),
            'crblb': aJ(0x253),
            'eXQfn': function (j, k, l, m) {
                return j(k, l, m);
            },
            'CEkFY': aK(0x28d),
            'WkRaU': aK(0x13a),
            'ziqQV': function (j, k) {
                return j !== k;
            },
            'PodDu': aJ(0x152),
            'MhMex': aJ(0x255)
        }, i = await (-0xe3e + 0x1 * -0x107f + 0x1ebd, exports[aK(0x17a) + aK(0x200)])(e);
    try {
        const j = await h[aK(0x209)](downloadMedia, e);
        if (h[aJ(0x1b5)](j[aK(0x182)], h[aJ(0x25e)])) {
            if (h[aK(0x1b5)](h[aK(0x218)], h[aJ(0x218)]))
                throw new Error(h[aJ(0x289)]);
            else
                k?.[aJ(0x164)]?.[aJ(0x1d7) + aK(0x1dd)]?.[aJ(0x164)]?.[aJ(0x232) + 'e'] && (s = h[aJ(0x23a)]), m?.[aJ(0x164)]?.[aK(0x1d7) + aJ(0x1dd)]?.[aK(0x164)]?.[aK(0x170) + aK(0x153)] && (t = h[aK(0x1bd)]), o?.[aK(0x164)]?.[aK(0x1d7) + aK(0x1dd)]?.[aK(0x164)] && (u = (-0x1 * -0x1fe7 + 0x944 + 0xdb9 * -0x3, v[aK(0x262) + aK(0x139)])(w?.[aK(0x164)]?.[aK(0x1d7) + aJ(0x1dd)]?.[aK(0x164)]));
        }
        if (!j)
            throw new Error(h[aK(0x289)]);
        if (!j[aK(0x275)]) {
            const p = j[aK(0x156)][aK(0x245)]('/')[0x2b * -0x6 + -0x105d * -0x1 + -0x1e * 0x83][aJ(0x245)](';')[0xdd3 + 0x41 * 0x97 + 0x2 * -0x1a15];
            j[aJ(0x275)] = new Date()[aJ(0x249)]() + '.' + p;
        } else {
            const q = j[aJ(0x275)][aJ(0x245)]('.')[aJ(0x223)](), r = j[aJ(0x275)][aK(0x245)]('.')[aK(0x16c)](0x5ce + 0x1d3c + -0x8a * 0x41, -(-0xd62 + 0x17 * 0x92 + 0x45))[aJ(0x240)]('.')[aK(0x284)](/\s/g, '_')[aJ(0x15a)](h[aJ(0x1da)])[aK(0x284)](/[\u0300-\u036f]/g, '');
            j[aK(0x275)] = r[aJ(0x26e)]() + '_' + new Date()[aK(0x249)]() + '.' + q;
        }
        try {
            await h[aK(0x258)](writeFileAsync, (-0x1081 + -0xe9c + 0x87 * 0x3b, path_1[aK(0x240)])(__dirname, '..', '..', '..', '..', h[aJ(0x252)], j[aJ(0x275)]), j[aK(0x182)], h[aK(0x171)]);
        } catch (s) {
            if (h[aJ(0x281)](h[aK(0x1a9)], h[aJ(0x259)]))
                logger_1[aK(0x1e6)][aK(0x261)](s);
            else {
                const u = g[aK(0x156)][aJ(0x245)]('/')[-0x839 * -0x2 + 0x29c + 0x130d * -0x1][aK(0x245)](';')[0x15b * 0x1a + -0x79f * -0x5 + -0x4959 * 0x1];
                h = (-0x3 * -0x159 + 0x7 * -0x568 + 0x21cd * 0x1, i[aK(0x194) + 'Id'])(0x36 * -0xb + -0xc10 + -0xe67 * -0x1) + '-' + new j()[aJ(0x249)]() + '.' + u;
            }
        }
        const k = await (0x1df * 0x6 + 0x1 * -0xecc + 0x1c9 * 0x2, exports[aK(0x1cc) + aJ(0x153)])(e), l = {
                'messageId': h[aK(0x209)](String, e[aJ(0x1f7)]['id']),
                'ticketId': f['id'],
                'contactId': e[aJ(0x1f7)][aK(0x16f)] ? undefined : g['id'],
                'body': k || j[aK(0x275)],
                'fromMe': !!e[aJ(0x1f7)][aK(0x16f)],
                'read': !!e[aJ(0x1f7)][aJ(0x16f)],
                'quotedMsgId': i?.['id'],
                'ack': e[aK(0x193)],
                'mediaUrl': j[aK(0x275)],
                'dataJson': JSON[aJ(0x1f2)](e),
                'mediaType': j[aK(0x156)][aK(0x245)]('/')[-0x1 * -0x105d + 0x1 * -0x1483 + -0x426 * -0x1]
            }, m = {};
        m[aJ(0x1f6) + 'e'] = k || j[aK(0x275)], await f[aJ(0x1ee)](m);
        const n = {};
        n[aK(0x141) + 'a'] = l, n[aJ(0x215)] = f[aJ(0x215)], await (-0x1 * 0x1dfc + 0x197e + 0xe6 * 0x5, CreateMessageService_1[aK(0x23e)])(n);
    } catch (u) {
        logger_1[aK(0x1e6)][aJ(0x261)](u);
    }
};
exports[aD(0x1c4) + aC(0x19a) + aC(0x212)] = VerifyMediaMessageBaileys;
const verifyQuotedMessage = async e => {
    const aL = aC, aM = aD;
    if (!e)
        return null;
    const f = (-0x1564 + 0x1321 + 0x243, exports[aL(0x282) + aL(0x26b)])(e);
    if (!f)
        return null;
    const g = {};
    g[aL(0x225)] = f;
    const h = {};
    h[aM(0x1d4)] = g;
    const i = await Message_1[aL(0x23e)][aL(0x25d)](h);
    if (!i)
        return null;
    return i;
};
exports[aC(0x17a) + aC(0x200)] = verifyQuotedMessage;
const downloadMedia = async f => {
        const aN = aD, aO = aC, g = {};
        g[aN(0x19d)] = aO(0x13a), g[aO(0x176)] = aN(0x170) + aN(0x153), g[aN(0x183)] = aN(0x21c) + aO(0x1dd), g[aO(0x28c)] = aO(0x286) + 'n', g[aO(0x226)] = aO(0x18c), g[aN(0x25f)] = function (q, r) {
            return q < r;
        }, g[aO(0x234)] = function (q, r) {
            return q !== r;
        }, g[aN(0x1db)] = aO(0x243), g[aN(0x13e)] = aO(0x138), g[aN(0x203)] = function (q, r) {
            return q > r;
        }, g[aO(0x1d5)] = function (q, r) {
            return q === r;
        }, g[aO(0x206)] = aN(0x20c), g[aN(0x1ea)] = aN(0x1d3), g[aN(0x23d)] = aO(0x14c), g[aO(0x210)] = aO(0x1d9), g[aO(0x147)] = function (q, r) {
            return q === r;
        }, g[aO(0x1d1)] = aN(0x16e), g[aN(0x154)] = aN(0x261), g[aO(0x1c2)] = aO(0x1ba) + aO(0x27e) + aO(0x166), g[aN(0x142)] = aO(0x1a0), g[aN(0x1b1)] = aO(0x165);
        const h = g, i = f[aO(0x164)]?.[aO(0x1ac) + 'ge'] || f[aO(0x164)]?.[aO(0x235) + 'ge'] || f[aO(0x164)]?.[aN(0x268) + 'ge'] || f[aN(0x164)]?.[aO(0x17b) + aN(0x153)] || f[aN(0x164)]?.[aO(0x21c) + aO(0x1dd)] || f[aO(0x164)]?.[aO(0x211) + aO(0x13c) + aN(0x1e7)]?.[aN(0x164)]?.[aN(0x21c) + aO(0x1dd)] || f[aO(0x164)]?.[aO(0x184) + aO(0x1fe)]?.[aN(0x1e9) + 'o']?.[aN(0x178) + aN(0x155)]?.[aN(0x1ac) + 'ge'] || f[aN(0x164)]?.[aN(0x184) + aO(0x1fe)]?.[aO(0x1e9) + 'o']?.[aO(0x178) + aO(0x155)]?.[aO(0x268) + 'ge'];
        let j = i[aO(0x156)][aN(0x245)]('/')[0x7b1 * -0x5 + -0x1b05 + 0x417a][aN(0x284)](h[aO(0x28c)], h[aO(0x226)]) ? i[aO(0x156)][aN(0x245)]('/')[0x17 * 0x173 + 0x17db + 0xf * -0x3d0][aO(0x284)](h[aO(0x28c)], h[aO(0x226)]) : i[aO(0x156)][aN(0x245)]('/')[0x2 * 0xf93 + -0x1eaf + -0x77], k, l = -0x117 + -0x2 * 0x914 + 0x1 * 0x133f;
        (f[aO(0x164)]?.[aN(0x21c) + aN(0x1dd)] || f[aO(0x164)]?.[aN(0x211) + aN(0x13c) + aO(0x1e7)]) && (j = h[aN(0x226)]);
        while (h[aN(0x25f)](l, 0x1dff + 0x913 + -0x2708) && !k) {
            try {
                if (h[aO(0x234)](h[aO(0x1db)], h[aN(0x13e)]))
                    h[aO(0x203)](l, 0x7 * -0x3a9 + -0x239 * 0x5 + 0x13 * 0x1ef) ? logger_1[aO(0x1e6)][aO(0x1ec)](aO(0x23f) + l + (aO(0x1ef) + aO(0x23c))) : '', k = await (-0x779 + 0x1487 + 0x687 * -0x2, baileys_1[aN(0x146) + aN(0x213) + aN(0x1e7)])(f[aO(0x164)]?.[aO(0x235) + 'ge'] || f[aO(0x164)]?.[aO(0x268) + 'ge'] || f[aO(0x164)]?.[aO(0x21c) + aN(0x1dd)] || f[aN(0x164)]?.[aN(0x211) + aN(0x13c) + aN(0x1e7)]?.[aN(0x164)]?.[aO(0x21c) + aO(0x1dd)] || f[aN(0x164)]?.[aN(0x1ac) + 'ge'] || f[aN(0x164)]?.[aN(0x17b) + aN(0x153)] || f[aN(0x164)]?.[aN(0x184) + aO(0x1fe)]?.[aO(0x1e9) + 'o'][aN(0x178) + aN(0x155)]?.[aO(0x1ac) + 'ge'] || f[aO(0x164)]?.[aO(0x184) + aN(0x1fe)]?.[aN(0x1e9) + 'o'][aN(0x178) + aN(0x155)]?.[aO(0x268) + 'ge'] || f[aO(0x164)]?.[aO(0x170) + aN(0x153)]?.[aN(0x1ac) + 'ge'] || f[aN(0x164)]?.[aN(0x25c) + aN(0x1dd)]?.[aO(0x172) + aN(0x137)]?.[aO(0x1ac) + 'ge'] || f[aN(0x164)]?.[aN(0x25c) + aN(0x1dd)]?.[aN(0x177) + aN(0x216)]?.[aN(0x1ac) + 'ge'] || f[aO(0x164)]?.[aN(0x25c) + aO(0x1dd)]?.[aO(0x22a) + aN(0x265) + aN(0x246)]?.[aO(0x1ac) + 'ge'] || f[aO(0x164)]?.[aO(0x1f8) + aO(0x287)]?.[aO(0x26d)]?.[aN(0x1ac) + 'ge'], j);
                else {
                    var r = i[aN(0x13f)](j)[aO(0x27f)](h[aO(0x19d)]);
                    let s = aO(0x1a6) + aO(0x24f) + aN(0x1b0) + r + (aO(0x205) + aO(0x266) + aN(0x16d) + aO(0x283)) + k + aN(0x233) + l + (aN(0x1a1) + aN(0x229)) + m + ',\x20' + n + '\x20';
                    return s;
                }
            } catch (r) {
                h[aN(0x1d5)](h[aO(0x206)], h[aO(0x206)]) ? (l++, await new Promise(s => setTimeout(s, (0x2451 + 0x1 * 0x1674 + -0x36dd) * l * (-0x1e3 + 0x9ae + -0x7c9 * 0x1))), logger_1[aO(0x1e6)][aO(0x1ec)](aN(0x1c7) + l + (aN(0x1ef) + aN(0x23c)))) : d = h[aN(0x176)];
            }
        }
        let m = Buffer[aN(0x13f)]([]);
        try {
            if (h[aO(0x234)](h[aN(0x1ea)], h[aN(0x23d)]))
                for await (const t of k) {
                    h[aO(0x1d5)](h[aO(0x210)], h[aO(0x210)]) ? m = Buffer[aN(0x26a)]([
                        m,
                        t
                    ]) : (i = j[aN(0x159)], k = l[aO(0x159)], m = n['id'][aN(0x245)]('@')[-0x2a * 0xe6 + 0x1 * -0x1ea9 + 0x4465]);
                }
            else
                o = f[aN(0x1f7)][aO(0x1c9) + 't']?.[aN(0x245)]('@')[-0x5 * -0x10b + 0x1bfb + -0x2132];
        } catch (w) {
            if (h[aO(0x147)](h[aN(0x1d1)], h[aO(0x1d1)])) {
                const x = {};
                return x[aO(0x182)] = h[aN(0x154)], x[aO(0x156)] = '', x[aN(0x275)] = '', x;
            } else {
                const z = (0x2670 + -0x4af + -0x21c1, i[aN(0x169) + aO(0x28e) + 't'])(j[aN(0x164)])[k[aO(0x21d)](l?.[aN(0x164)])[aO(0x28a)]()[aN(0x17d)]()[aO(0x1de)]];
                let A = m?.[aO(0x164)]?.[aN(0x1f4) + aN(0x1dd)] ? n?.[aN(0x164)]?.[aO(0x1f4) + aO(0x1dd)]?.[aN(0x1f7)]?.['id'] : '';
                return A ? A : z?.[aN(0x1e9) + 'o']?.[aN(0x1e8)];
            }
        }
        if (!m)
            throw new Error(h[aN(0x1c2)]);
        let n = f[aN(0x164)]?.[aN(0x21c) + aN(0x1dd)]?.[aN(0x161)] || f[aN(0x164)]?.[aO(0x211) + aO(0x13c) + aO(0x1e7)]?.[aO(0x164)]?.[aN(0x21c) + aN(0x1dd)]?.[aN(0x161)] || '';
        if (!n) {
            if (h[aO(0x234)](h[aN(0x142)], h[aN(0x1b1)])) {
                const z = i[aN(0x156)][aO(0x245)]('/')[-0x19b5 * -0x1 + 0x2b4 + -0x18 * 0x12f][aN(0x245)](';')[0x18 * -0x45 + -0x991 + 0x1009];
                n = (0x2a2 * 0x3 + -0xb3 * 0xb + -0x35, MakeRandomId_1[aN(0x194) + 'Id'])(0x7fb + 0x106b + 0x1861 * -0x1) + '-' + new Date()[aN(0x249)]() + '.' + z;
            } else
                d = h[aN(0x183)];
        } else
            n = n[aN(0x245)]('.')[aO(0x16c)](-0x129d * -0x1 + -0xf6 + 0x11a7 * -0x1, -(0x3a + 0x791 + -0x7ca))[aO(0x240)]('.') + '.' + (0x1709 + 0x1209 + 0x5de * -0x7, MakeRandomId_1[aO(0x194) + 'Id'])(-0x1 * -0x4f4 + -0x8d5 + -0x2 * -0x1f3) + '.' + n[aO(0x245)]('.')[aN(0x16c)](-(0x1a3e * 0x1 + -0x2051 + 0x614));
        const o = {};
        o[aN(0x182)] = m, o[aO(0x156)] = i[aO(0x156)], o[aO(0x275)] = n;
        const p = o;
        return p;
    }, msgLocation = (d, e, f) => {
        const aP = aD, aQ = aD, g = {};
        g[aP(0x26f)] = aP(0x235) + 'ge', g[aP(0x1ca)] = function (j, k) {
            return j !== k;
        }, g[aP(0x27c)] = aQ(0x20e), g[aP(0x23b)] = aQ(0x13a);
        const h = g;
        if (d) {
            if (h[aP(0x1ca)](h[aQ(0x27c)], h[aP(0x27c)]))
                d = h[aQ(0x26f)];
            else {
                var i = Buffer[aP(0x13f)](d)[aP(0x27f)](h[aP(0x23b)]);
                let k = aQ(0x1a6) + aP(0x24f) + aP(0x1b0) + i + (aP(0x205) + aQ(0x266) + aP(0x16d) + aP(0x283)) + e + aP(0x233) + f + (aP(0x1a1) + aQ(0x229)) + e + ',\x20' + f + '\x20';
                return k;
            }
        }
    }, getBodyMessage = async c => {
        const aR = aC, aS = aD, d = {
                'ExuVj': aR(0x261),
                'vpWYe': aS(0x174) + aR(0x153),
                'wYrXt': function (f, g) {
                    return f === g;
                },
                'aIqsY': aS(0x15e),
                'kihFz': function (f, g) {
                    return f !== g;
                },
                'xSWYL': aR(0x28f),
                'rdzVw': aR(0x157),
                'NIcyp': function (f, g) {
                    return f !== g;
                },
                'rQmvG': aR(0x1f9),
                'WaSXJ': function (f, g) {
                    return f(g);
                },
                'WnMSZ': function (f, g) {
                    return f !== g;
                },
                'gMsiz': aR(0x207),
                'TQFkt': aS(0x269),
                'NEtjV': aS(0x214),
                'RNXyB': aR(0x1cd),
                'WeuhK': aR(0x18d) + 'i',
                'iAxLh': aR(0x254),
                'ksJkR': aR(0x14d) + aS(0x16b),
                'aEDmd': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'GhYcF': aS(0x238),
                'BkHqt': function (f, g) {
                    return f + g;
                },
                'QcQrS': aR(0x1ed) + aR(0x1d0) + '\x20'
            };
        let e;
        try {
            if (c?.[aS(0x164)]?.[aR(0x170) + aS(0x153)]?.[aS(0x204) + 't']) {
                e = '*' + c?.[aR(0x164)]?.[aR(0x170) + aS(0x153)]?.[aS(0x204) + 't'] + '*';
                for (const f of c[aS(0x164)]?.[aR(0x170) + aS(0x153)]?.[aS(0x247)]) {
                    if (d[aS(0x18e)](d[aR(0x192)], d[aR(0x192)]))
                        e += '\x0a\x0a' + f[aR(0x263)][aR(0x18b) + 't'];
                    else {
                        const h = {};
                        return h[aS(0x182)] = d[aR(0x264)], h[aR(0x156)] = '', h[aR(0x275)] = '', h;
                    }
                }
                return e;
            } else {
                if (c?.[aR(0x164)]?.[aS(0x232) + 'e']) {
                    e = '*' + c?.[aS(0x164)]?.[aR(0x232) + 'e']?.[aS(0x140) + 'n'] + '*';
                    for (const h of c[aS(0x164)]?.[aS(0x232) + 'e']?.[aR(0x20a)][0x367 + 0x1c36 + -0x1f9d]?.[aR(0x1f0)]) {
                        e += '\x0a\x0a' + h[aR(0x1bc)];
                    }
                    return e;
                }
            }
            if (c[aR(0x164)]?.[aR(0x1d7) + aR(0x1dd)]?.[aR(0x164)]?.[aS(0x232) + 'e']) {
                if (d[aS(0x16a)](d[aS(0x150)], d[aS(0x1e4)])) {
                    let i = c[aS(0x164)]?.[aR(0x1d7) + aS(0x1dd)]?.[aS(0x164)][aS(0x232) + 'e'];
                    e = '*' + i[aR(0x140) + 'n'] + '*';
                    for (const j of i?.[aS(0x20a)][-0x9a1 + -0x199a + 0x233b]?.[aR(0x1f0)]) {
                        e += '\x0a\x0a' + j[aR(0x1bc)];
                    }
                    return e;
                } else
                    d = d[aS(0x22d)];
            }
            if (c[aR(0x164)]?.[aS(0x1d7) + aS(0x1dd)]?.[aS(0x164)]?.[aS(0x170) + aR(0x153)]) {
                let l = c[aR(0x164)]?.[aS(0x1d7) + aR(0x1dd)]?.[aS(0x164)][aS(0x170) + aS(0x153)];
                e = '*' + l[aS(0x204) + 't'] + '*';
                for (const m of l?.[aR(0x247)]) {
                    d[aS(0x1c5)](d[aR(0x1e3)], d[aR(0x1e3)]) ? g = h[aS(0x26a)]([
                        i,
                        j
                    ]) : e += '\x0a\x0a' + m[aS(0x263)][aS(0x18b) + 't'];
                }
                return e;
            }
        } catch (o) {
            logger_1[aR(0x1e6)][aR(0x261)](o);
        }
        try {
            const p = d[aR(0x14f)](getTypeMessage, c);
            if (!p) {
                if (d[aR(0x267)](d[aS(0x1a4)], d[aR(0x19c)]))
                    return;
                else
                    f = (-0x6b * 0x22 + -0x1 * -0x12fc + -0x4c6, g[aS(0x262) + aR(0x139)])(h?.[aS(0x164)]?.[aS(0x279) + aS(0x1e7)]?.[aR(0x164)]?.[aR(0x1d7) + aR(0x1dd)]?.[aS(0x164)]);
            }
            const q = {
                    'conversation': c[aR(0x164)][aS(0x180) + 'on'],
                    'imageMessage': c[aR(0x164)][aS(0x1ac) + 'ge']?.[aR(0x24e)] || d[aS(0x285)],
                    'videoMessage': c[aR(0x164)][aS(0x268) + 'ge']?.[aS(0x24e)] || d[aS(0x26c)],
                    'extendedTextMessage': e || c[aR(0x164)][aR(0x184) + aS(0x1fe)]?.[aS(0x236)] || c[aR(0x164)]?.[aR(0x232) + 'e']?.[aR(0x140) + 'n'],
                    'buttonsResponseMessage': c[aS(0x164)][aR(0x271) + aR(0x1fd) + 'ge']?.[aS(0x1fb) + aR(0x14e)],
                    'listResponseMessage': c?.[aS(0x164)]?.[aR(0x231) + aR(0x15c)]?.[aR(0x1bc)] || d[aS(0x1a3)],
                    'templateButtonReplyMessage': c[aS(0x164)]?.[aS(0x1c6) + aR(0x230) + aS(0x1e7)]?.[aS(0x19e)],
                    'messageContextInfo': c[aS(0x164)][aS(0x271) + aR(0x1fd) + 'ge']?.[aR(0x1ae) + aS(0x1cf)] || c[aR(0x164)][aR(0x231) + aS(0x15c)]?.[aS(0x1bc)],
                    'buttonsMessage': e || c[aR(0x164)][aS(0x231) + aS(0x15c)]?.[aS(0x1bc)],
                    'stickerMessage': d[aS(0x219)],
                    'contactMessage': c[aS(0x164)][aS(0x174) + aR(0x153)]?.[aS(0x256)],
                    'contactsArrayMessage': d[aR(0x1b2)],
                    'locationMessage': d[aR(0x1be)](msgLocation, c[aS(0x164)]?.[aS(0x17c) + aR(0x1dd)]?.[aS(0x25b) + aS(0x151)], c[aS(0x164)]?.[aR(0x17c) + aR(0x1dd)]?.[aS(0x1a2) + aS(0x136)], c[aR(0x164)]?.[aS(0x17c) + aR(0x1dd)]?.[aR(0x27b) + aS(0x22b)]),
                    'liveLocationMessage': d[aR(0x1be)](msgLocation, c[aS(0x164)]?.[aS(0x270) + aS(0x149)]?.[aR(0x25b) + aS(0x151)], c[aR(0x164)]?.[aR(0x270) + aS(0x149)]?.[aS(0x1a2) + aR(0x136)], c[aR(0x164)]?.[aS(0x270) + aS(0x149)]?.[aR(0x27b) + aS(0x22b)]),
                    'documentMessage': c[aS(0x164)][aR(0x21c) + aR(0x1dd)]?.[aS(0x1bc)],
                    'audioMessage': d[aR(0x274)],
                    'reactionMessage': c[aR(0x164)]?.[aS(0x1f4) + aR(0x1dd)]?.[aS(0x236)],
                    'ephemeralMessage': c[aS(0x164)]?.[aS(0x279) + aR(0x1e7)]?.[aR(0x164)]?.[aR(0x184) + aR(0x1fe)]?.[aS(0x236)],
                    'protocolMessage': c[aR(0x164)]?.[aR(0x1c8) + aS(0x1dd)]?.[aS(0x13d)] || c[aS(0x164)]?.[aR(0x279) + aR(0x1e7)]?.[aS(0x164)]?.[aR(0x1c8) + aR(0x1dd)]?.[aS(0x13d)],
                    'listMessage': e || c[aS(0x164)]?.[aR(0x232) + 'e']?.[aR(0x140) + 'n'],
                    'viewOnceMessage': e,
                    'documentWithCaptionMessage': c[aS(0x164)]?.[aS(0x211) + aS(0x13c) + aR(0x1e7)]?.[aR(0x164)]?.[aS(0x21c) + aS(0x1dd)]?.[aR(0x24e)],
                    'editedMessage': d[aR(0x14f)](extractEditedMessage, c)
                }, r = Object[aS(0x21d)](q)[aS(0x24b)](t => t === p);
            if (!r)
                logger_1[aR(0x1e6)][aS(0x1ec)](aR(0x1d2) + aR(0x1eb) + aR(0x1ce) + aS(0x257) + p + aR(0x20b) + JSON[aS(0x1f2)](c?.[aS(0x164)]));
            else {
            }
            return q[p];
        } catch (t) {
            console[aS(0x227)](d[aR(0x21a)](d[aR(0x221)], t));
        }
    };
function a() {
    const aZ = [
        'next',
        'gAqOQ',
        'nmpou',
        'conversati',
        '171474wwjQWV',
        'data',
        'MBJtc',
        'extendedTe',
        's/CreateOr',
        'fault',
        'Get\x20Type\x20M',
        '88Ysyfej',
        'VydFJ',
        '@whiskeyso',
        'displayTex',
        'document',
        'Chegou\x20Aqu',
        'wYrXt',
        'ckets/bail',
        'PJxKB',
        'vHaAV',
        'aIqsY',
        'status',
        'makeRandom',
        'gSbFR',
        '../../../u',
        'EmEpr',
        '38zgZNgY',
        'pfyPG',
        'aMessageBa',
        '../../../h',
        'TQFkt',
        'cIScB',
        'selectedId',
        'XCzwn',
        'mjKwV',
        '&z=17&hl=p',
        'degreesLat',
        'WeuhK',
        'gMsiz',
        'pmzFq',
        'data:image',
        'IJfrD',
        'VQXzi',
        'PodDu',
        '__importDe',
        'LZWYU',
        'imageMessa',
        'axAos',
        'selectedBu',
        'CApPu',
        '4,\x20',
        'HskhE',
        'ksJkR',
        'OJsol',
        'KEoGl',
        'ZOYBV',
        'rjBJa',
        '__esModule',
        'COqYW',
        'odels/Mess',
        'ERR_WAPP_D',
        'rDHzR',
        'title',
        'IVvkt',
        'aEDmd',
        'Ydycu',
        'AQfLy',
        'likwk',
        'xcFVG',
        'ssageServi',
        'VerifyMedi',
        'NIcyp',
        'templateBu',
        '>>>>\x20erro\x20',
        'protocolMe',
        'participan',
        'QBvNI',
        'eRandomId',
        'getBodyMes',
        'video',
        '\x20em\x20getBod',
        'ttonId',
        'essage\x20-->',
        'dBlFR',
        'Não\x20encont',
        'IfPBN',
        'where',
        'gYpdW',
        'iYLLO',
        'viewOnceMe',
        'lTqVk',
        'OCdXK',
        'crblb',
        'RUJUt',
        'csmCk',
        'ssage',
        'value',
        'promisify',
        'dALvf',
        '366633hVFoaS',
        'ageBaileys',
        'rQmvG',
        'rdzVw',
        'actBaileys',
        'logger',
        'essage',
        'stanzaId',
        'contextInf',
        'PnFkx',
        'rou\x20o\x20tipo',
        'warn',
        'Get\x20Body\x20M',
        'update',
        '\x20de\x20baixar',
        'rows',
        'RFuLM',
        'stringify',
        '4545668pdNhxZ',
        'reactionMe',
        'lkcIa',
        'lastMessag',
        'key',
        'interactiv',
        'zkhUZ',
        'tkZMx',
        'selectedDi',
        'UpdateCont',
        'ponseMessa',
        'xtMessage',
        'received',
        'edMessage',
        '../../Cont',
        'GYqdm',
        'JeOWk',
        'contentTex',
        '\x20|\x20https:/',
        'EBKTL',
        'yRVsY',
        'WsWAI',
        'KvSZz',
        'sections',
        '\x20-\x20',
        'EHnPS',
        'util',
        'WCpGP',
        'WsMIH',
        'sYeqt',
        'documentWi',
        'ileys',
        'ntentFromM',
        'image',
        'tenantId',
        'mplate',
        '5CRRuwp',
        'pLyJP',
        'iAxLh',
        'BkHqt',
        '16847501QkheCr',
        'documentMe',
        'keys',
        'PVLiW',
        'VerifyMess',
        '../../../m',
        'QcQrS',
        'cwxeF',
        'pop',
        'gWpXl',
        'messageId',
        'egeQk',
        'log',
        'essage\x20->\x20',
        't-BR|',
        'hydratedFo',
        'gitude',
        'TWOiI',
        'vpWYe',
        'abUIU',
        'MhNwT',
        'ttonReplyM',
        'listRespon',
        'listMessag',
        '%2C',
        'cSJJS',
        'audioMessa',
        'text',
        'GLgaH',
        'Áudio',
        'path',
        'DPxLS',
        'cGHEj',
        '\x20o\x20arquivo',
        'OYJPe',
        'default',
        'Tentativa\x20',
        'join',
        'usfuH',
        'elpers/Mak',
        'HThWy',
        'raEhw',
        'split',
        'ate',
        'buttons',
        'fhRrh',
        'getTime',
        'bpVsf',
        'find',
        'writeFile',
        'YSILT',
        'caption',
        '/png;base6',
        'VfcZN',
        'VerifyCont',
        'CEkFY',
        'NFD',
        'sticker',
        'aLJGE',
        'vcard',
        'yMessage:\x20',
        'eXQfn',
        'MhMex',
        'erty',
        'jpegThumbn',
        'templateMe',
        'findOne',
        'xIqLA',
        'oIceG',
        'PFQjk',
        'error',
        'getContent',
        'buttonText',
        'ExuVj',
        'urRowTempl',
        '/maps.goog',
        'WnMSZ',
        'videoMessa',
        'ISYJS',
        'concat',
        'essageId',
        'RNXyB',
        'header',
        'trim',
        'dMVlH',
        'liveLocati',
        'buttonsRes',
        '20fHQdLA',
        'editedMess',
        'GhYcF',
        'filename',
        'defineProp',
        'JTaOY',
        '321741WInVSk',
        'ephemeralM',
        'vWuje',
        'degreesLon',
        'MQQTW',
        'actService',
        'OWNLOAD_ME',
        'toString',
        'UMZvt',
        'ziqQV',
        'getQuotedM',
        's?q=',
        'replace',
        'NEtjV',
        'applicatio',
        'eMessage',
        'eys',
        'sXiIg',
        'values',
        '7569632vgjyhF',
        'zbMyP',
        'public',
        'sageConten',
        'urcGE',
        'itude',
        'plate',
        'Syhyi',
        'Type',
        'base64',
        'HPkCn',
        'thCaptionM',
        'type',
        'EfkpU',
        'from',
        'descriptio',
        'messageDat',
        'KojAQ',
        'WvqOi',
        'tils/logge',
        'GxqMT',
        'downloadCo',
        'ACxWi',
        'remoteJid',
        'onMessage',
        'ageService',
        'pEsyu',
        'MqCMS',
        'varios\x20con',
        'splayText',
        'WaSXJ',
        'xSWYL',
        'ail',
        'SmKiv',
        'sage',
        'AiWin',
        'age',
        'mimetype',
        'yeNFR',
        'ZxnWG',
        'subject',
        'normalize',
        'pushName',
        'seMessage',
        'bOIMU',
        'DIzFZ',
        's/CreateMe',
        'rkQFi',
        'fileName',
        'nBeEB',
        'qztXe',
        'message',
        'jOZvq',
        'DIA',
        'aKIiQ',
        '7170648yDmOtE',
        'extractMes',
        'kihFz',
        'tatos',
        'slice',
        'le.com/map',
        'eIMJZ',
        'fromMe',
        'buttonsMes',
        'WkRaU',
        'fourRowTem',
        '../../Mess',
        'contactMes',
        'AIYaG',
        'cxsYc',
        'hydratedTe',
        'quotedMess',
        'BuPnQ',
        'verifyQuot',
        'stickerMes',
        'locationMe'
    ];
    a = function () {
        return aZ;
    };
    return a();
}
exports[aD(0x1cc) + aC(0x153)] = getBodyMessage;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xe * 0x172 + -0x1 * 0x23ef + 0x5a3 * 0x3);
        let h = e[f];
        return h;
    }, b(c, d);
}
const extractEditedMessage = d => {
        const aT = aD, aU = aD, e = {};
        e[aT(0x222)] = function (g, h) {
            return g === h;
        }, e[aT(0x280)] = aU(0x241), e[aT(0x162)] = aT(0x1dc);
        const f = e;
        if (d?.[aU(0x164)]?.[aT(0x273) + aU(0x155)]?.[aT(0x164)]?.[aU(0x1c8) + aT(0x1dd)]?.[aU(0x273) + aT(0x155)]?.[aT(0x180) + 'on'])
            return d?.[aU(0x164)]?.[aU(0x273) + aU(0x155)]?.[aT(0x164)]?.[aU(0x1c8) + aU(0x1dd)]?.[aU(0x273) + aU(0x155)]?.[aT(0x180) + 'on'];
        else {
            if (d?.[aU(0x164)]?.[aT(0x273) + aU(0x155)]?.[aT(0x164)]?.[aT(0x1c8) + aU(0x1dd)]?.[aU(0x273) + aT(0x155)]?.[aT(0x184) + aU(0x1fe)]?.[aU(0x236)]) {
                if (f[aT(0x222)](f[aT(0x280)], f[aT(0x162)]))
                    g = h, i = j;
                else
                    return d?.[aT(0x164)]?.[aT(0x273) + aU(0x155)]?.[aT(0x164)]?.[aT(0x1c8) + aT(0x1dd)]?.[aU(0x273) + aT(0x155)]?.[aU(0x184) + aU(0x1fe)]?.[aT(0x236)];
            }
        }
        return undefined;
    }, getTypeMessage = d => {
        const aV = aD, aW = aD, e = {};
        e[aV(0x17e)] = aW(0x232) + 'e', e[aW(0x1a7)] = aV(0x268) + 'ge', e[aV(0x277)] = function (g, h) {
            return g === h;
        }, e[aW(0x191)] = aV(0x1a8), e[aW(0x1bb)] = aV(0x1d7) + aV(0x1dd), e[aW(0x1d8)] = function (g, h) {
            return g === h;
        }, e[aW(0x1b4)] = aW(0x1d6), e[aW(0x190)] = aV(0x22e), e[aW(0x24a)] = function (g, h) {
            return g === h;
        }, e[aW(0x1af)] = aW(0x158), e[aV(0x1c1)] = aW(0x1b8), e[aV(0x195)] = aV(0x170) + aW(0x153), e[aW(0x14b)] = aW(0x279) + aV(0x1e7), e[aW(0x19f)] = function (g, h) {
            return g !== h;
        }, e[aV(0x13b)] = aV(0x202), e[aV(0x1bf)] = aV(0x1ac) + 'ge', e[aW(0x1f5)] = aW(0x235) + 'ge', e[aV(0x199)] = aV(0x21c) + aV(0x1dd), e[aW(0x260)] = aW(0x17b) + aV(0x153), e[aW(0x27a)] = function (g, h) {
            return g === h;
        }, e[aV(0x224)] = aW(0x1f1), e[aV(0x1c0)] = aV(0x189), e[aV(0x208)] = aV(0x174) + aW(0x153), e[aW(0x1ad)] = function (g, h) {
            return g !== h;
        }, e[aW(0x15d)] = aV(0x24d), e[aV(0x167)] = aV(0x17c) + aV(0x1dd), e[aV(0x22f)] = aW(0x1c8) + aV(0x1dd), e[aW(0x160)] = aW(0x21e), e[aW(0x197)] = aW(0x143), e[aW(0x1fa)] = function (g, h) {
            return g + h;
        }, e[aV(0x1a5)] = aW(0x187) + aV(0x228);
        const f = e;
        try {
            if (f[aV(0x277)](f[aV(0x191)], f[aW(0x191)])) {
                let g = (-0x191 * 0x11 + 0x3 * -0xe6 + 0x1 * 0x1d53, baileys_1[aV(0x262) + aV(0x139)])(d?.[aV(0x164)]);
                if (f[aV(0x277)](g, f[aW(0x1bb)])) {
                    if (d?.[aW(0x164)]?.[aV(0x1d7) + aV(0x1dd)]?.[aW(0x164)]?.[aV(0x232) + 'e']) {
                        if (f[aW(0x1d8)](f[aW(0x1b4)], f[aV(0x190)])) {
                            h = '*' + i?.[aW(0x164)]?.[aV(0x232) + 'e']?.[aW(0x140) + 'n'] + '*';
                            for (const i of m[aW(0x164)]?.[aW(0x232) + 'e']?.[aV(0x20a)][-0x23a9 + 0x35 * 0x59 + 0x4 * 0x44f]?.[aV(0x1f0)]) {
                                o += '\x0a\x0a' + i[aW(0x1bc)];
                            }
                            return l;
                        } else
                            g = f[aW(0x17e)];
                    }
                    d?.[aW(0x164)]?.[aV(0x1d7) + aW(0x1dd)]?.[aV(0x164)]?.[aW(0x170) + aV(0x153)] && (f[aW(0x24a)](f[aV(0x1af)], f[aW(0x1c1)]) ? e += '\x0a\x0a' + f[aV(0x263)][aV(0x18b) + 't'] : g = f[aW(0x195)]), d?.[aW(0x164)]?.[aV(0x1d7) + aW(0x1dd)]?.[aV(0x164)] && (g = (-0x11d9 + 0x2532 + 0x3 * -0x673, baileys_1[aV(0x262) + aV(0x139)])(d?.[aW(0x164)]?.[aV(0x1d7) + aW(0x1dd)]?.[aV(0x164)]));
                }
                return f[aW(0x277)](g, f[aV(0x14b)]) && (d?.[aV(0x164)]?.[aV(0x279) + aW(0x1e7)]?.[aW(0x164)]?.[aV(0x232) + 'e'] && (g = f[aV(0x17e)]), d?.[aV(0x164)]?.[aV(0x279) + aW(0x1e7)]?.[aW(0x164)]?.[aV(0x170) + aV(0x153)] && (f[aV(0x19f)](f[aW(0x13b)], f[aV(0x13b)]) ? d = f[aV(0x17e)] : g = f[aW(0x195)]), d?.[aV(0x164)]?.[aV(0x279) + aV(0x1e7)]?.[aV(0x164)]?.[aW(0x1ac) + 'ge'] && (g = f[aW(0x1bf)]), d?.[aW(0x164)]?.[aW(0x279) + aW(0x1e7)]?.[aV(0x164)]?.[aV(0x235) + 'ge'] && (g = f[aW(0x1f5)]), d?.[aW(0x164)]?.[aV(0x279) + aV(0x1e7)]?.[aW(0x164)]?.[aW(0x235) + 'ge'] && (g = f[aW(0x1a7)]), d?.[aW(0x164)]?.[aW(0x279) + aW(0x1e7)]?.[aW(0x164)]?.[aW(0x21c) + aV(0x1dd)] && (g = f[aV(0x199)]), d?.[aV(0x164)]?.[aV(0x279) + aV(0x1e7)]?.[aW(0x164)]?.[aV(0x17b) + aW(0x153)] && (g = f[aV(0x260)]), d?.[aV(0x164)]?.[aV(0x279) + aV(0x1e7)]?.[aW(0x164)]?.[aW(0x174) + aV(0x153)] && (f[aW(0x27a)](f[aV(0x224)], f[aW(0x1c0)]) ? g[aW(0x1e6)][aW(0x1ec)](aV(0x1d2) + aW(0x1eb) + aV(0x1ce) + aW(0x257) + h + aV(0x20b) + i[aW(0x1f2)](j?.[aW(0x164)])) : g = f[aV(0x208)]), d?.[aV(0x164)]?.[aW(0x279) + aW(0x1e7)]?.[aW(0x164)]?.[aV(0x17c) + aW(0x1dd)] && (f[aV(0x1ad)](f[aV(0x15d)], f[aV(0x15d)]) ? (g = h[aV(0x15b)], i = j[aW(0x15b)]) : g = f[aV(0x167)]), d?.[aV(0x164)]?.[aW(0x279) + aW(0x1e7)]?.[aW(0x164)]?.[aV(0x1c8) + aV(0x1dd)] && (g = f[aV(0x22f)]), d?.[aW(0x164)]?.[aW(0x279) + aW(0x1e7)]?.[aV(0x164)]?.[aV(0x1d7) + aV(0x1dd)] && (g = (-0x5 * -0x4a9 + -0xdc * -0x10 + -0x250d, baileys_1[aV(0x262) + aV(0x139)])(d?.[aV(0x164)]?.[aV(0x279) + aW(0x1e7)]?.[aW(0x164)]?.[aW(0x1d7) + aW(0x1dd)]?.[aW(0x164)]))), g;
            } else
                d = f[aV(0x1a7)];
        } catch (n) {
            if (f[aV(0x19f)](f[aW(0x160)], f[aV(0x197)]))
                logger_1[aW(0x1e6)][aW(0x261)](f[aW(0x1fa)](f[aW(0x1a5)], n));
            else {
                const p = {};
                return p[aW(0x23e)] = j, g && h[aV(0x1b7)] ? i : p;
            }
        }
    }, getQuotedMessageId = c => {
        const aX = aC, aY = aD, d = (0x140f + -0x1009 + -0x406, baileys_1[aX(0x169) + aX(0x28e) + 't'])(c[aY(0x164)])[Object[aY(0x21d)](c?.[aY(0x164)])[aY(0x28a)]()[aX(0x17d)]()[aX(0x1de)]];
        let e = c?.[aX(0x164)]?.[aX(0x1f4) + aX(0x1dd)] ? c?.[aX(0x164)]?.[aX(0x1f4) + aY(0x1dd)]?.[aY(0x1f7)]?.['id'] : '';
        return e ? e : d?.[aY(0x1e9) + 'o']?.[aY(0x1e8)];
    };
exports[aD(0x282) + aD(0x26b)] = getQuotedMessageId;