'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1d26 + 0x85c + -0x1 * -0x15db);
        let h = e[f];
        return h;
    }, b(c, d);
}
const aC = b, aD = b;
(function (c, d) {
    const aA = b, aB = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(aA(0x255)) / (0x1c38 + 0x21fb * -0x1 + 0xc * 0x7b) * (-parseInt(aA(0x11b)) / (-0x10f * 0x6 + 0x18ea + -0x128e * 0x1)) + parseInt(aB(0x12f)) / (0x5b7 + 0x663 + 0x26b * -0x5) * (-parseInt(aA(0x215)) / (0x52c + 0xfd8 + -0x100 * 0x15)) + parseInt(aB(0x1d1)) / (0x1563 * 0x1 + -0x65e * -0x1 + -0x1bbc) + -parseInt(aB(0x137)) / (-0x1175 + 0x509 + 0xc72) + parseInt(aB(0x139)) / (0x101f + 0x1986 + -0xe * 0x2f9) + parseInt(aA(0x259)) / (-0x1 * -0x685 + 0x2582 + -0x2bff) + -parseInt(aA(0x230)) / (0x4d5 * 0x5 + -0xd * -0x213 + -0x3317);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x4f4 * 0xb2 + 0x37 * 0xef + -0x29510 * -0x2));
var __importDefault = this && this[aC(0x18c) + aD(0x172)] || function (c) {
    const aE = aC;
    return c && c[aE(0x135)] ? c : { 'default': c };
};
const az = {};
az[aD(0x1ad)] = !![], Object[aD(0x23d) + aD(0x170)](exports, aC(0x135), az), exports[aC(0x218) + aD(0x233)] = exports[aC(0x1e0) + aD(0x143)] = exports[aC(0x1cc) + aC(0x155)] = exports[aD(0x262) + aD(0x1a5) + aD(0x1e1)] = exports[aD(0x13b) + aC(0x232)] = exports[aC(0x11d) + aC(0x1bb)] = void (-0x1006 * 0x1 + 0x1 * 0x235b + 0x2c3 * -0x7);
const CreateOrUpdateContactService_1 = __importDefault(require(aC(0x1c8) + aD(0x25e) + aD(0x1aa) + aD(0x115) + aC(0x25e))), baileys_1 = require(aC(0x257) + aC(0x1c0) + aC(0x252)), CreateMessageService_1 = __importDefault(require(aC(0x1f6) + aC(0x1a4) + aC(0x165) + aD(0x192) + 'ce')), util_1 = require(aD(0x1be)), fs_1 = require('fs'), path_1 = require(aC(0x11e)), logger_1 = require(aC(0x148) + aD(0x15c) + 'r'), Message_1 = __importDefault(require(aC(0x117) + aC(0x166) + aC(0x242))), MakeRandomId_1 = require(aD(0x12c) + aC(0x1f9) + aD(0x1e4)), writeFileAsync = (-0x332 * 0x2 + -0x1d3b + 0x239f, util_1[aD(0x216)])(fs_1[aC(0x152)]), VerifyContactBaileys = async (c, d, e, f = ![], g = undefined) => {
        const aF = aC, aG = aC, h = {
                'XCLAR': aF(0x22c) + aG(0x1b5) + aG(0x182),
                'WLiCI': function (n, o) {
                    return n === o;
                },
                'JhppK': aG(0x24d),
                'pDsQe': aF(0x15b),
                'SAGZx': function (n, o) {
                    return n(o);
                }
            };
        let i = '', j = '', k = '';
        if (f)
            i = g[aF(0x173)], k = g[aF(0x173)], j = g['id'][aG(0x1e7)]('@')[-0x11b8 + 0x3 * -0x6f3 + 0x2691];
        else {
            c[aG(0x16f)][aG(0x1c1) + 't'] ? j = c[aF(0x16f)][aF(0x1c1) + 't']?.[aG(0x1e7)]('@')[0x17 * 0x18b + -0x1132 + -0x124b] : j = c[aF(0x16f)][aG(0x127)]?.[aG(0x1e7)]('@')[-0x3 * -0x9bd + -0x25 * -0x9a + -0x3379];
            if (c[aG(0x16f)][aG(0x1a7)]) {
                if (h[aG(0x162)](h[aF(0x221)], h[aG(0x121)]))
                    throw new d(h[aF(0x185)]);
                else
                    i = j, k = j;
            } else
                i = c[aG(0x1b3)], k = c[aG(0x1b3)];
        }
        const l = {
                'name': i,
                'number': j,
                'profilePicUrl': e,
                'tenantId': h[aG(0x124)](Number, d),
                'pushname': k,
                'isUser': ![],
                'isWAContact': ![],
                'isGroup': f
            }, m = await (-0x1 * 0x2fb + -0x19 * -0x13d + -0x1bfa, CreateOrUpdateContactService_1[aF(0x1ea)])(l);
        return m;
    };
exports[aC(0x11d) + aC(0x1bb)] = VerifyContactBaileys;
const VerifyMessageBaileys = async (d, e, f, g) => {
    const aH = aD, aI = aC, h = {
            'SuTOp': function (m, n) {
                return m(n);
            },
            'pLOLw': function (m, n) {
                return m(n);
            },
            'uZQLe': aH(0x119),
            'zZAJU': function (m, n) {
                return m || n;
            }
        }, i = await (0x147d * -0x1 + -0x861 + 0x1 * 0x1cde, exports[aI(0x1cc) + aH(0x155)])(d), j = await (0x1a * 0xca + -0x16d8 + 0x254, exports[aH(0x1e0) + aH(0x143)])(d), k = {
            'messageId': h[aI(0x13a)](String, d[aI(0x16f)]['id']),
            'ticketId': f['id'],
            'contactId': e ? undefined : g['id'],
            'body': h[aH(0x13a)](String, j),
            'fromMe': e,
            'read': e,
            'mediaType': h[aH(0x1da)](getTypeMessage, d),
            'quotedMsgId': i?.['id'],
            'timestamp': new Date()[aI(0x151)](),
            'status': h[aH(0x241)],
            'dataJson': JSON[aH(0x190)](d)
        };
    await f[aI(0x251)]({
        'lastMessage': h[aI(0x13a)](String, j),
        'lastMessageAt': new Date()[aH(0x151)](),
        'answered': h[aI(0x145)](e, ![])
    });
    const l = {};
    l[aH(0x239) + 'a'] = k, l[aH(0x1a2)] = f[aH(0x1a2)], await (0x99a + -0x2575 + 0x1bdb, CreateMessageService_1[aH(0x1ea)])(l);
};
exports[aC(0x13b) + aD(0x232)] = VerifyMessageBaileys;
const VerifyMediaMessageBaileys = async (e, f, g) => {
    const aJ = aC, aK = aC, h = {
            'hnjxL': function (j, k) {
                return j + k;
            },
            'mmwPj': aJ(0x238) + aJ(0x174),
            'nlfXE': function (j, k) {
                return j(k);
            },
            'imTJH': function (j, k) {
                return j === k;
            },
            'wmvxQ': aK(0x20c),
            'frbrQ': aK(0x22c) + aK(0x1b5) + aK(0x182),
            'oETUp': function (j, k) {
                return j !== k;
            },
            'XBgEg': aK(0x201),
            'fpbCC': aJ(0x13c),
            'mhdyf': function (j, k, l, m) {
                return j(k, l, m);
            },
            'ArLFP': aK(0x17d),
            'GBZfz': aJ(0x210),
            'EZyzi': function (j, k) {
                return j(k);
            }
        }, i = await (0x250c + -0x1152 + -0x13ba, exports[aJ(0x1cc) + aJ(0x155)])(e);
    try {
        const j = await h[aJ(0x203)](downloadMedia, e);
        if (h[aK(0x206)](j[aJ(0x138)], h[aK(0x146)]))
            throw new Error(h[aJ(0x176)]);
        if (!j)
            throw new Error(h[aJ(0x176)]);
        if (!j[aJ(0x150)]) {
            if (h[aJ(0x19b)](h[aJ(0x24e)], h[aK(0x24e)]))
                e[aK(0x16c)][aJ(0x20c)](h[aJ(0x21a)](h[aJ(0x16e)], f));
            else {
                const p = j[aK(0x18e)][aJ(0x1e7)]('/')[0x53f + -0x1 * 0x11e1 + 0xca3 * 0x1][aK(0x1e7)](';')[0xe04 + -0x1df9 + -0x5 * -0x331];
                j[aJ(0x150)] = new Date()[aJ(0x151)]() + '.' + p;
            }
        } else {
            const q = j[aJ(0x150)][aJ(0x1e7)]('.')[aK(0x1de)](), r = j[aK(0x150)][aJ(0x1e7)]('.')[aK(0x142)](-0x1ed + -0x59a + 0x787, -(-0x109d * -0x2 + -0x1666 + -0xa3 * 0x11))[aK(0x1c9)]('.')[aK(0x246)](/\s/g, '_')[aJ(0x1ff)](h[aJ(0x1ae)])[aK(0x246)](/[\u0300-\u036f]/g, '');
            j[aJ(0x150)] = r[aJ(0x1bd)]() + '_' + new Date()[aK(0x151)]() + '.' + q;
        }
        try {
            await h[aJ(0x1ac)](writeFileAsync, (-0x1 * 0x106c + -0x1b3f + 0x2bab, path_1[aK(0x1c9)])(__dirname, '..', '..', '..', '..', h[aJ(0x240)], j[aK(0x150)]), j[aJ(0x138)], h[aJ(0x111)]);
        } catch (s) {
            logger_1[aK(0x16c)][aJ(0x20c)](s);
        }
        const k = await (-0xb0c + -0x10b3 + 0x1bbf, exports[aJ(0x1e0) + aK(0x143)])(e), l = {
                'messageId': h[aK(0x17f)](String, e[aJ(0x16f)]['id']),
                'ticketId': f['id'],
                'contactId': e[aK(0x16f)][aK(0x1a7)] ? undefined : g['id'],
                'body': k || j[aJ(0x150)],
                'fromMe': !!e[aK(0x16f)][aJ(0x1a7)],
                'read': !!e[aJ(0x16f)][aJ(0x1a7)],
                'quotedMsgId': i?.['id'],
                'ack': e[aJ(0x17e)],
                'mediaUrl': j[aJ(0x150)],
                'dataJson': JSON[aK(0x190)](e),
                'mediaType': j[aJ(0x18e)][aJ(0x1e7)]('/')[0x2473 + 0x1ec9 + -0x4 * 0x10cf]
            }, m = {};
        m[aK(0x154) + 'e'] = k || j[aJ(0x150)], await f[aK(0x251)](m);
        const n = {};
        n[aJ(0x239) + 'a'] = l, n[aK(0x1a2)] = f[aJ(0x1a2)], await (-0x1c45 + -0x23b8 + 0x3ffd, CreateMessageService_1[aJ(0x1ea)])(n);
    } catch (t) {
        logger_1[aJ(0x16c)][aJ(0x20c)](t);
    }
};
exports[aD(0x262) + aD(0x1a5) + aD(0x1e1)] = VerifyMediaMessageBaileys;
const verifyQuotedMessage = async e => {
    const aL = aC, aM = aC;
    if (!e)
        return null;
    const f = (-0xf4 * -0x16 + 0x9df + -0x1ed7 * 0x1, exports[aL(0x218) + aM(0x233)])(e);
    if (!f)
        return null;
    const g = {};
    g[aM(0x256)] = f;
    const h = {};
    h[aM(0x126)] = g;
    const i = await Message_1[aM(0x1ea)][aM(0x20e)](h);
    if (!i)
        return null;
    return i;
};
exports[aC(0x1cc) + aD(0x155)] = verifyQuotedMessage;
function a() {
    const aZ = [
        'le.com/map',
        'urRowTempl',
        'VerifyMedi',
        'plate',
        'GBZfz',
        'Chegou\x20Aqu',
        'degreesLat',
        'XHvcf',
        'UpdateCont',
        'GUUAQ',
        '../../../m',
        'cgmil',
        'received',
        'xJQsT',
        '2JqxGNl',
        'video',
        'VerifyCont',
        'path',
        'binfG',
        'ktpWJ',
        'pDsQe',
        'ttonId',
        'stickerMes',
        'SAGZx',
        'xcCAg',
        'where',
        'remoteJid',
        '>>>>\x20erro\x20',
        'jpegThumbn',
        'DAyWr',
        't-BR|',
        '../../../h',
        '4,\x20',
        'JqbMP',
        '1743xEECbD',
        'mziWG',
        'AXDBB',
        'listRespon',
        'EuFFO',
        'sageConten',
        '__esModule',
        'displayTex',
        '370362WLJoRB',
        'data',
        '692538PqgWyj',
        'SuTOp',
        'VerifyMess',
        'NFD',
        'ail',
        'rUeeR',
        'applicatio',
        'SQMzw',
        'cWqTR',
        'slice',
        'sage',
        'TQvAf',
        'zZAJU',
        'wmvxQ',
        'conversati',
        '../../../u',
        'AcuAC',
        'keys',
        'QugqT',
        'vDuGo',
        'sticker',
        'hcuKb',
        'toString',
        'filename',
        'getTime',
        'writeFile',
        'CzmbX',
        'lastMessag',
        'edMessage',
        'smOWM',
        'yRntE',
        'warn',
        'WMdKi',
        'ObVqT',
        'KVZbG',
        'tils/logge',
        'HCazl',
        'getContent',
        'listMessag',
        'descriptio',
        'buttonText',
        'WLiCI',
        'mplate',
        'QPpEG',
        's/CreateMe',
        'odels/Mess',
        'splayText',
        'YUiKx',
        'values',
        'HdCeb',
        'EIHZU',
        'logger',
        'ntentFromM',
        'mmwPj',
        'key',
        'erty',
        'Não\x20encont',
        'fault',
        'subject',
        'essage\x20->\x20',
        'ZbBQV',
        'frbrQ',
        'interactiv',
        'essage',
        'GRdHZ',
        'rLUla',
        'KNWiy',
        'ncahM',
        'public',
        'status',
        'EZyzi',
        'FYHRJ',
        'text',
        'DIA',
        '/png;base6',
        'selectedBu',
        'XCLAR',
        'ponseMessa',
        'YTJbc',
        'RomRJ',
        'hfRBw',
        '&z=17&hl=p',
        'fvoXf',
        '__importDe',
        'essage\x20-->',
        'mimetype',
        'cfPYg',
        'stringify',
        'locationMe',
        'ssageServi',
        'zDwVK',
        'contextInf',
        '%2C',
        'editedMess',
        'VJepa',
        'pSNZx',
        'selectedDi',
        'Uquep',
        'oETUp',
        'gitude',
        'kvTpb',
        'templateMe',
        'oRhYg',
        'yiyEb',
        'protocolMe',
        'tenantId',
        'sections',
        'ageService',
        'aMessageBa',
        '/maps.goog',
        'fromMe',
        'gxNvU',
        'rNulY',
        's/CreateOr',
        'dHHRJ',
        'mhdyf',
        'value',
        'fpbCC',
        'type',
        'header',
        'ZYiTO',
        'HACfQ',
        'pushName',
        'UuEJd',
        'OWNLOAD_ME',
        'nEHwe',
        'nEXyo',
        'dBRfA',
        'ADvtB',
        'rbLXs',
        'actBaileys',
        'buttons',
        'trim',
        'util',
        'GVbzc',
        'ckets/bail',
        'participan',
        'buttonsMes',
        'contentTex',
        'UWYPH',
        'eMessage',
        'fileName',
        'ephemeralM',
        '../../Cont',
        'join',
        'CwNtD',
        'ssage',
        'verifyQuot',
        'rou\x20o\x20tipo',
        'makeRandom',
        'xtMessage',
        's?q=',
        '209240kVYRVg',
        'Tentativa\x20',
        'hydratedFo',
        'fVjlV',
        'QYbpA',
        'degreesLon',
        'ywQCU',
        'AjpwX',
        'uwFQn',
        'pLOLw',
        'itude',
        'NSkIP',
        'JqUcl',
        'pop',
        'vcard',
        'getBodyMes',
        'ileys',
        'Get\x20Body\x20M',
        'ate',
        'eRandomId',
        'WXkDO',
        'OkCDp',
        'split',
        'ZEIVE',
        'kGHuA',
        'default',
        'reactionMe',
        'JtKOl',
        'tatos',
        'thCaptionM',
        'buttonsRes',
        'djrIx',
        'EABjF',
        'xYgTt',
        'find',
        'bpwTg',
        'gPgpV',
        '../../Mess',
        'yMessage:\x20',
        'SNRGt',
        'elpers/Mak',
        'oZyoI',
        'templateBu',
        'MGNec',
        'fourRowTem',
        'contactMes',
        'normalize',
        'downloadCo',
        'fpPIi',
        'selectedId',
        'nlfXE',
        'JlQbp',
        'DbuCP',
        'imTJH',
        'GqFkr',
        'seMessage',
        'ttonReplyM',
        'wEvhF',
        'concat',
        'error',
        'caption',
        'findOne',
        'log',
        'base64',
        'FjgFt',
        'hOBZX',
        'stanzaId',
        'bgxyS',
        '208ZWoUCe',
        'promisify',
        'FanWo',
        'getQuotedM',
        'AcgVZ',
        'hnjxL',
        'MlMsq',
        'data:image',
        'extractMes',
        'next',
        'image',
        'videoMessa',
        'JhppK',
        'hgMFH',
        'Type',
        'hydratedTe',
        'title',
        '\x20em\x20getBod',
        'JIsuG',
        'xcGSH',
        'beRAu',
        '\x20|\x20https:/',
        'from',
        'ERR_WAPP_D',
        'FtJHR',
        'viewOnceMe',
        'Áudio',
        '566082hitQnk',
        'message',
        'ageBaileys',
        'essageId',
        'MZSGe',
        'XfIBA',
        'varios\x20con',
        'hzvLZ',
        'Get\x20Type\x20M',
        'messageDat',
        'ziGwl',
        'quotedMess',
        'audioMessa',
        'defineProp',
        'document',
        'ovKBm',
        'ArLFP',
        'uZQLe',
        'age',
        'QjvwD',
        'UUEVl',
        'documentWi',
        'replace',
        'documentMe',
        'liveLocati',
        'imageMessa',
        'iKewI',
        '\x20-\x20',
        'onMessage',
        'RmZiT',
        'XBgEg',
        '\x20de\x20baixar',
        'MvkCI',
        'update',
        'eys',
        'uoZSW',
        'rNaDr',
        '87623BLKMiY',
        'messageId',
        '@whiskeyso',
        '\x20o\x20arquivo',
        '418696gnfeMy',
        'extendedTe',
        'DBmSa',
        'AUEsf',
        'rows',
        'actService',
        'EcQKo'
    ];
    a = function () {
        return aZ;
    };
    return a();
}
const downloadMedia = async f => {
        const aN = aD, aO = aD, g = {};
        g[aN(0x1f5)] = aO(0x23c) + 'ge', g[aN(0x12e)] = aN(0x13f) + 'n', g[aN(0x153)] = aO(0x23e), g[aN(0x1c4)] = function (q, r) {
            return q < r;
        }, g[aO(0x14b)] = function (q, r) {
            return q !== r;
        }, g[aO(0x1fa)] = aO(0x1b8), g[aO(0x16a)] = aN(0x1ab), g[aO(0x156)] = function (q, r) {
            return q > r;
        }, g[aO(0x1dc)] = function (q, r) {
            return q === r;
        }, g[aO(0x187)] = aN(0x1b1), g[aN(0x14e)] = aO(0x1d4), g[aO(0x140)] = function (q, r) {
            return q === r;
        }, g[aN(0x212)] = aO(0x11f), g[aN(0x193)] = aO(0x17b), g[aO(0x114)] = aN(0x20c), g[aN(0x229)] = aN(0x141), g[aN(0x1fc)] = aO(0x198), g[aN(0x18b)] = aN(0x22c) + aN(0x1b5) + aN(0x182), g[aO(0x159)] = function (q, r) {
            return q === r;
        }, g[aN(0x207)] = aO(0x211);
        const h = g, i = f[aO(0x231)]?.[aO(0x249) + 'ge'] || f[aO(0x231)]?.[aN(0x23c) + 'ge'] || f[aO(0x231)]?.[aO(0x220) + 'ge'] || f[aO(0x231)]?.[aO(0x123) + aO(0x143)] || f[aN(0x231)]?.[aO(0x247) + aO(0x1cb)] || f[aO(0x231)]?.[aN(0x245) + aO(0x1ee) + aN(0x178)]?.[aO(0x231)]?.[aO(0x247) + aN(0x1cb)] || f[aN(0x231)]?.[aO(0x25a) + aN(0x1cf)]?.[aN(0x194) + 'o']?.[aN(0x23b) + aN(0x242)]?.[aO(0x249) + 'ge'] || f[aO(0x231)]?.[aO(0x25a) + aN(0x1cf)]?.[aO(0x194) + 'o']?.[aO(0x23b) + aN(0x242)]?.[aN(0x220) + 'ge'];
        let j = i[aN(0x18e)][aO(0x1e7)]('/')[-0xc84 + -0x23 * 0x59 + 0x1 * 0x18af][aN(0x246)](h[aO(0x12e)], h[aO(0x153)]) ? i[aN(0x18e)][aN(0x1e7)]('/')[-0x152c + -0x12fe + -0xc2 * -0x35][aN(0x246)](h[aO(0x12e)], h[aO(0x153)]) : i[aO(0x18e)][aN(0x1e7)]('/')[0x65 * -0x51 + -0x1 * -0x62f + -0x1 * -0x19c6], k, l = -0x123 * 0x12 + -0xa5f + 0x1ed5;
        (f[aO(0x231)]?.[aN(0x247) + aO(0x1cb)] || f[aO(0x231)]?.[aN(0x245) + aO(0x1ee) + aN(0x178)]) && (j = h[aN(0x153)]);
        while (h[aO(0x1c4)](l, 0x3dd * -0x1 + -0x10ec + -0x6f1 * -0x3) && !k) {
            if (h[aO(0x14b)](h[aN(0x1fa)], h[aN(0x16a)]))
                try {
                    h[aN(0x156)](l, -0x2222 + 0xe79 + 0x13aa) ? logger_1[aO(0x16c)][aN(0x158)](aO(0x1d2) + l + (aO(0x24f) + aN(0x258))) : '', k = await (0xb38 + 0x569 + -0x10a1, baileys_1[aO(0x200) + aO(0x16d) + aO(0x178)])(f[aO(0x231)]?.[aN(0x23c) + 'ge'] || f[aO(0x231)]?.[aN(0x220) + 'ge'] || f[aN(0x231)]?.[aN(0x247) + aO(0x1cb)] || f[aN(0x231)]?.[aN(0x245) + aN(0x1ee) + aN(0x178)]?.[aN(0x231)]?.[aN(0x247) + aO(0x1cb)] || f[aN(0x231)]?.[aN(0x249) + 'ge'] || f[aN(0x231)]?.[aO(0x123) + aN(0x143)] || f[aO(0x231)]?.[aO(0x25a) + aN(0x1cf)]?.[aN(0x194) + 'o'][aN(0x23b) + aN(0x242)]?.[aN(0x249) + 'ge'] || f[aN(0x231)]?.[aN(0x25a) + aO(0x1cf)]?.[aO(0x194) + 'o'][aO(0x23b) + aN(0x242)]?.[aO(0x220) + 'ge'] || f[aN(0x231)]?.[aO(0x1c2) + aN(0x143)]?.[aO(0x249) + 'ge'] || f[aN(0x231)]?.[aO(0x19e) + aN(0x1cb)]?.[aO(0x1fd) + aN(0x263)]?.[aO(0x249) + 'ge'] || f[aO(0x231)]?.[aO(0x19e) + aO(0x1cb)]?.[aN(0x224) + aN(0x163)]?.[aO(0x249) + 'ge'] || f[aN(0x231)]?.[aO(0x19e) + aO(0x1cb)]?.[aO(0x1d3) + aN(0x261) + aN(0x1e3)]?.[aO(0x249) + 'ge'] || f[aO(0x231)]?.[aN(0x177) + aN(0x1c5)]?.[aO(0x1b0)]?.[aO(0x249) + 'ge'], j);
                } catch (q) {
                    if (h[aO(0x1dc)](h[aN(0x187)], h[aN(0x14e)])) {
                        const s = (0x21d3 + 0x1 * 0x1915 + 0x122 * -0x34, i[aO(0x21d) + aO(0x134) + 't'])(j[aN(0x231)])[k[aN(0x14a)](l?.[aO(0x231)])[aN(0x169)]()[aO(0x21e)]()[aO(0x1ad)]];
                        let t = m?.[aN(0x231)]?.[aO(0x1eb) + aO(0x1cb)] ? n?.[aN(0x231)]?.[aN(0x1eb) + aO(0x1cb)]?.[aO(0x16f)]?.['id'] : '';
                        return t ? t : s?.[aO(0x194) + 'o']?.[aO(0x213)];
                    } else
                        l++, await new Promise(s => setTimeout(s, (-0x1211 + 0x1541 + -0x2 * -0x5c) * l * (0x143a + 0x24a1 + -0x38d9))), logger_1[aO(0x16c)][aO(0x158)](aN(0x128) + l + (aN(0x24f) + aN(0x258)));
                }
            else
                g[aN(0x16c)][aO(0x158)](aO(0x171) + aO(0x1cd) + aN(0x226) + aN(0x1f7) + h + aO(0x24b) + i[aO(0x190)](j?.[aO(0x231)]));
        }
        let m = Buffer[aN(0x22b)]([]);
        try {
            if (h[aO(0x140)](h[aO(0x212)], h[aN(0x193)]))
                d = h[aN(0x1f5)];
            else
                for await (const u of k) {
                    m = Buffer[aN(0x20b)]([
                        m,
                        u
                    ]);
                }
        } catch (v) {
            const w = {};
            return w[aN(0x138)] = h[aN(0x114)], w[aO(0x18e)] = '', w[aN(0x150)] = '', w;
        }
        if (!m) {
            if (h[aN(0x14b)](h[aN(0x229)], h[aO(0x1fc)]))
                throw new Error(h[aN(0x18b)]);
            else
                o += '\x0a\x0a' + f[aN(0x161)][aN(0x136) + 't'];
        }
        let n = f[aO(0x231)]?.[aN(0x247) + aO(0x1cb)]?.[aN(0x1c6)] || f[aO(0x231)]?.[aO(0x245) + aO(0x1ee) + aN(0x178)]?.[aO(0x231)]?.[aN(0x247) + aN(0x1cb)]?.[aO(0x1c6)] || '';
        if (!n) {
            const y = i[aO(0x18e)][aO(0x1e7)]('/')[0x116d * -0x1 + 0x525 * -0x7 + 0x3571][aO(0x1e7)](';')[0x1 * 0x9d5 + -0x5f2 * -0x3 + -0x1bab];
            n = (-0x67f * -0x1 + -0x1 * -0x21fa + -0xd * 0x31d, MakeRandomId_1[aN(0x1ce) + 'Id'])(0x1 * 0x470 + -0x7f * -0x41 + 0xf7 * -0x26) + '-' + new Date()[aN(0x151)]() + '.' + y;
        } else {
            if (h[aN(0x159)](h[aO(0x207)], h[aO(0x207)]))
                n = n[aN(0x1e7)]('.')[aN(0x142)](0xce3 + -0xb * -0xce + -0x15bd * 0x1, -(-0x10d * -0x14 + 0x1fda + -0x34dd))[aO(0x1c9)]('.') + '.' + (-0x1 * 0x1bd9 + -0x136 * 0x7 + 0x2453, MakeRandomId_1[aN(0x1ce) + 'Id'])(0x988 + 0x7 * 0x3d3 + -0x36 * 0xac) + '.' + n[aO(0x1e7)]('.')[aN(0x142)](-(0x2b * 0x2b + -0x1 * -0x15bb + 0x1 * -0x1cf3));
            else
                return d?.[aN(0x231)]?.[aN(0x196) + aN(0x242)]?.[aO(0x231)]?.[aO(0x1a1) + aO(0x1cb)]?.[aN(0x196) + aO(0x242)]?.[aN(0x147) + 'on'];
        }
        const o = {};
        o[aO(0x138)] = m, o[aN(0x18e)] = i[aO(0x18e)], o[aN(0x150)] = n;
        const p = o;
        return p;
    }, msgLocation = (d, e, f) => {
        const aP = aD, aQ = aD, g = {};
        g[aP(0x125)] = aP(0x210);
        const h = g;
        if (d) {
            var i = Buffer[aP(0x22b)](d)[aP(0x14f)](h[aQ(0x125)]);
            let j = aP(0x21c) + aP(0x183) + aQ(0x12d) + i + (aQ(0x22a) + aQ(0x1a6) + aQ(0x260) + aP(0x1d0)) + e + aQ(0x195) + f + (aQ(0x18a) + aP(0x12b)) + e + ',\x20' + f + '\x20';
            return j;
        }
    }, getBodyMessage = async c => {
        const aR = aC, aS = aC, d = {
                'wEvhF': aR(0x15f) + 'e',
                'UuEJd': function (f, g) {
                    return f !== g;
                },
                'VJepa': aS(0x1d9),
                'AcuAC': aR(0x1ca),
                'JIsuG': function (f, g) {
                    return f !== g;
                },
                'MlMsq': aS(0x1d8),
                'cfPYg': function (f, g) {
                    return f === g;
                },
                'nEXyo': aS(0x130),
                'yiyEb': aR(0x19f),
                'EABjF': function (f, g) {
                    return f(g);
                },
                'xJQsT': aR(0x21f),
                'bpwTg': aR(0x11c),
                'uoZSW': aS(0x112) + 'i',
                'bgxyS': aR(0x14d),
                'HACfQ': aR(0x236) + aS(0x1ed),
                'DbuCP': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'hgMFH': aR(0x22f),
                'rNaDr': function (f, g) {
                    return f(g);
                },
                'ywQCU': aR(0x12a),
                'ktpWJ': aS(0x234),
                'AcgVZ': function (f, g) {
                    return f === g;
                },
                'kGHuA': aR(0x25b),
                'HCazl': function (f, g) {
                    return f + g;
                },
                'FYHRJ': aS(0x1e2) + aR(0x18d) + '\x20'
            };
        let e;
        try {
            if (c?.[aR(0x231)]?.[aR(0x1c2) + aS(0x143)]?.[aR(0x1c3) + 't']) {
                e = '*' + c?.[aR(0x231)]?.[aS(0x1c2) + aR(0x143)]?.[aS(0x1c3) + 't'] + '*';
                for (const f of c[aS(0x231)]?.[aS(0x1c2) + aR(0x143)]?.[aR(0x1bc)]) {
                    e += '\x0a\x0a' + f[aS(0x161)][aR(0x136) + 't'];
                }
                return e;
            } else {
                if (c?.[aS(0x231)]?.[aS(0x15f) + 'e']) {
                    e = '*' + c?.[aR(0x231)]?.[aS(0x15f) + 'e']?.[aR(0x160) + 'n'] + '*';
                    for (const g of c[aS(0x231)]?.[aR(0x15f) + 'e']?.[aR(0x1a3)][0x1 * -0x151 + 0x684 + 0x79 * -0xb]?.[aS(0x25d)]) {
                        e += '\x0a\x0a' + g[aR(0x225)];
                    }
                    return e;
                }
            }
            if (c[aR(0x231)]?.[aS(0x22e) + aS(0x1cb)]?.[aS(0x231)]?.[aS(0x15f) + 'e']) {
                let h = c[aS(0x231)]?.[aR(0x22e) + aS(0x1cb)]?.[aS(0x231)][aS(0x15f) + 'e'];
                e = '*' + h[aR(0x160) + 'n'] + '*';
                for (const i of h?.[aR(0x1a3)][0x1049 * 0x1 + -0x11 * -0x97 + -0xd28 * 0x2]?.[aS(0x25d)]) {
                    if (d[aS(0x1b4)](d[aR(0x197)], d[aR(0x149)]))
                        e += '\x0a\x0a' + i[aS(0x225)];
                    else {
                        const k = f[aS(0x18e)][aS(0x1e7)]('/')[-0x9d6 + 0x48f + -0x8 * -0xa9][aS(0x1e7)](';')[-0xaed * 0x1 + 0x1 * 0x3c7 + 0x726];
                        g[aS(0x150)] = new h()[aR(0x151)]() + '.' + k;
                    }
                }
                return e;
            }
            if (c[aR(0x231)]?.[aS(0x22e) + aR(0x1cb)]?.[aS(0x231)]?.[aS(0x1c2) + aS(0x143)]) {
                let k = c[aR(0x231)]?.[aR(0x22e) + aR(0x1cb)]?.[aR(0x231)][aR(0x1c2) + aR(0x143)];
                e = '*' + k[aR(0x1c3) + 't'] + '*';
                for (const l of k?.[aS(0x1bc)]) {
                    d[aR(0x227)](d[aS(0x21b)], d[aR(0x21b)]) ? d = d[aS(0x20a)] : e += '\x0a\x0a' + l[aR(0x161)][aS(0x136) + 't'];
                }
                return e;
            }
        } catch (n) {
            logger_1[aR(0x16c)][aS(0x20c)](n);
        }
        try {
            if (d[aS(0x18f)](d[aR(0x1b7)], d[aS(0x1a0)])) {
                const p = {};
                return p[aS(0x1ea)] = j, g && h[aS(0x135)] ? i : p;
            } else {
                const p = d[aS(0x1f1)](getTypeMessage, c);
                if (!p)
                    return;
                const q = {
                        'conversation': c[aS(0x231)][aS(0x147) + 'on'],
                        'imageMessage': c[aR(0x231)][aS(0x249) + 'ge']?.[aR(0x20d)] || d[aR(0x11a)],
                        'videoMessage': c[aR(0x231)][aS(0x220) + 'ge']?.[aR(0x20d)] || d[aR(0x1f4)],
                        'extendedTextMessage': e || c[aS(0x231)][aS(0x25a) + aR(0x1cf)]?.[aR(0x181)] || c[aR(0x231)]?.[aR(0x15f) + 'e']?.[aS(0x160) + 'n'],
                        'buttonsResponseMessage': c[aS(0x231)][aR(0x1ef) + aR(0x186) + 'ge']?.[aR(0x199) + aR(0x167)],
                        'listResponseMessage': c?.[aS(0x231)]?.[aS(0x132) + aR(0x208)]?.[aR(0x225)] || d[aR(0x253)],
                        'templateButtonReplyMessage': c[aR(0x231)]?.[aS(0x1fb) + aS(0x209) + aR(0x178)]?.[aR(0x202)],
                        'messageContextInfo': c[aR(0x231)][aS(0x1ef) + aR(0x186) + 'ge']?.[aS(0x184) + aS(0x122)] || c[aS(0x231)][aR(0x132) + aS(0x208)]?.[aS(0x225)],
                        'buttonsMessage': e || c[aS(0x231)][aS(0x132) + aS(0x208)]?.[aS(0x225)],
                        'stickerMessage': d[aR(0x214)],
                        'contactMessage': c[aR(0x231)][aR(0x1fe) + aS(0x143)]?.[aS(0x1df)],
                        'contactsArrayMessage': d[aS(0x1b2)],
                        'locationMessage': d[aR(0x205)](msgLocation, c[aR(0x231)]?.[aR(0x191) + aR(0x1cb)]?.[aR(0x129) + aR(0x13d)], c[aR(0x231)]?.[aS(0x191) + aR(0x1cb)]?.[aR(0x113) + aR(0x1db)], c[aR(0x231)]?.[aS(0x191) + aR(0x1cb)]?.[aR(0x1d6) + aS(0x19c)]),
                        'liveLocationMessage': d[aS(0x205)](msgLocation, c[aS(0x231)]?.[aS(0x248) + aR(0x24c)]?.[aR(0x129) + aS(0x13d)], c[aR(0x231)]?.[aR(0x248) + aS(0x24c)]?.[aS(0x113) + aR(0x1db)], c[aR(0x231)]?.[aS(0x248) + aR(0x24c)]?.[aR(0x1d6) + aS(0x19c)]),
                        'documentMessage': c[aS(0x231)][aR(0x247) + aR(0x1cb)]?.[aS(0x225)],
                        'audioMessage': d[aS(0x222)],
                        'reactionMessage': c[aR(0x231)]?.[aS(0x1eb) + aR(0x1cb)]?.[aR(0x181)],
                        'ephemeralMessage': c[aS(0x231)]?.[aS(0x1c7) + aR(0x178)]?.[aR(0x231)]?.[aS(0x25a) + aR(0x1cf)]?.[aS(0x181)],
                        'protocolMessage': c[aR(0x231)]?.[aS(0x1a1) + aR(0x1cb)]?.[aR(0x1af)] || c[aR(0x231)]?.[aR(0x1c7) + aR(0x178)]?.[aR(0x231)]?.[aR(0x1a1) + aS(0x1cb)]?.[aS(0x1af)],
                        'listMessage': e || c[aS(0x231)]?.[aR(0x15f) + 'e']?.[aS(0x160) + 'n'],
                        'viewOnceMessage': e,
                        'documentWithCaptionMessage': c[aS(0x231)]?.[aR(0x245) + aS(0x1ee) + aS(0x178)]?.[aR(0x231)]?.[aR(0x247) + aR(0x1cb)]?.[aR(0x20d)],
                        'editedMessage': d[aS(0x254)](extractEditedMessage, c)
                    }, r = Object[aS(0x14a)](q)[aR(0x1f3)](s => s === p);
                if (!r) {
                    if (d[aS(0x1b4)](d[aR(0x1d7)], d[aR(0x120)]))
                        logger_1[aS(0x16c)][aS(0x158)](aS(0x171) + aS(0x1cd) + aS(0x226) + aR(0x1f7) + p + aS(0x24b) + JSON[aS(0x190)](c?.[aR(0x231)]));
                    else {
                        let t = g[aR(0x231)]?.[aS(0x22e) + aS(0x1cb)]?.[aR(0x231)][aR(0x1c2) + aR(0x143)];
                        h = '*' + t[aS(0x1c3) + 't'] + '*';
                        for (const u of t?.[aR(0x1bc)]) {
                            l += '\x0a\x0a' + u[aR(0x161)][aS(0x136) + 't'];
                        }
                        return j;
                    }
                } else {
                }
                return q[p];
            }
        } catch (t) {
            if (d[aS(0x219)](d[aS(0x1e9)], d[aR(0x1e9)]))
                console[aR(0x20f)](d[aR(0x15d)](d[aR(0x180)], t));
            else {
                if (h?.[aR(0x231)]?.[aS(0x196) + aR(0x242)]?.[aS(0x231)]?.[aR(0x1a1) + aS(0x1cb)]?.[aR(0x196) + aR(0x242)]?.[aS(0x147) + 'on'])
                    return m?.[aR(0x231)]?.[aS(0x196) + aR(0x242)]?.[aS(0x231)]?.[aS(0x1a1) + aS(0x1cb)]?.[aS(0x196) + aR(0x242)]?.[aS(0x147) + 'on'];
                else {
                    if (j?.[aR(0x231)]?.[aR(0x196) + aR(0x242)]?.[aR(0x231)]?.[aS(0x1a1) + aR(0x1cb)]?.[aR(0x196) + aS(0x242)]?.[aS(0x25a) + aR(0x1cf)]?.[aR(0x181)])
                        return n?.[aR(0x231)]?.[aR(0x196) + aS(0x242)]?.[aR(0x231)]?.[aR(0x1a1) + aS(0x1cb)]?.[aR(0x196) + aS(0x242)]?.[aS(0x25a) + aR(0x1cf)]?.[aS(0x181)];
                }
                return l;
            }
        }
    };
exports[aC(0x1e0) + aC(0x143)] = getBodyMessage;
const extractEditedMessage = d => {
        const aT = aD, aU = aC, e = {};
        e[aT(0x118)] = function (g, h) {
            return g === h;
        }, e[aT(0x1ba)] = aT(0x17a), e[aU(0x116)] = aU(0x250);
        const f = e;
        if (d?.[aT(0x231)]?.[aT(0x196) + aU(0x242)]?.[aU(0x231)]?.[aU(0x1a1) + aT(0x1cb)]?.[aU(0x196) + aU(0x242)]?.[aT(0x147) + 'on'])
            return d?.[aT(0x231)]?.[aT(0x196) + aT(0x242)]?.[aT(0x231)]?.[aT(0x1a1) + aT(0x1cb)]?.[aT(0x196) + aU(0x242)]?.[aU(0x147) + 'on'];
        else {
            if (d?.[aT(0x231)]?.[aU(0x196) + aU(0x242)]?.[aU(0x231)]?.[aU(0x1a1) + aT(0x1cb)]?.[aU(0x196) + aT(0x242)]?.[aT(0x25a) + aT(0x1cf)]?.[aU(0x181)]) {
                if (f[aT(0x118)](f[aU(0x1ba)], f[aT(0x116)])) {
                    h = '*' + i?.[aT(0x231)]?.[aU(0x1c2) + aU(0x143)]?.[aU(0x1c3) + 't'] + '*';
                    for (const h of m[aT(0x231)]?.[aT(0x1c2) + aT(0x143)]?.[aU(0x1bc)]) {
                        o += '\x0a\x0a' + h[aU(0x161)][aT(0x136) + 't'];
                    }
                    return l;
                } else
                    return d?.[aU(0x231)]?.[aU(0x196) + aU(0x242)]?.[aU(0x231)]?.[aT(0x1a1) + aT(0x1cb)]?.[aU(0x196) + aT(0x242)]?.[aT(0x25a) + aU(0x1cf)]?.[aT(0x181)];
            }
        }
        return undefined;
    }, getTypeMessage = d => {
        const aV = aD, aW = aD, e = {};
        e[aV(0x1f0)] = aW(0x20c), e[aW(0x23f)] = aV(0x15f) + 'e', e[aW(0x243)] = aW(0x1c2) + aW(0x143), e[aV(0x144)] = aW(0x22c) + aV(0x1b5) + aW(0x182), e[aV(0x131)] = aW(0x220) + 'ge', e[aV(0x168)] = function (g, h) {
            return g === h;
        }, e[aV(0x189)] = aV(0x22e) + aW(0x1cb), e[aW(0x188)] = function (g, h) {
            return g === h;
        }, e[aW(0x164)] = aV(0x13e), e[aW(0x1a8)] = aW(0x1bf), e[aW(0x1ec)] = function (g, h) {
            return g === h;
        }, e[aV(0x16b)] = aW(0x1c7) + aV(0x178), e[aW(0x244)] = function (g, h) {
            return g !== h;
        }, e[aW(0x1d5)] = aW(0x228), e[aW(0x157)] = aV(0x249) + 'ge', e[aV(0x1a9)] = aW(0x23c) + 'ge', e[aV(0x1e8)] = function (g, h) {
            return g === h;
        }, e[aW(0x25f)] = aV(0x1f8), e[aW(0x1e6)] = aV(0x23a), e[aW(0x235)] = function (g, h) {
            return g !== h;
        }, e[aV(0x217)] = aV(0x14c), e[aV(0x22d)] = aW(0x247) + aW(0x1cb), e[aV(0x15a)] = aW(0x123) + aW(0x143), e[aV(0x204)] = aV(0x1fe) + aV(0x143), e[aV(0x19d)] = aW(0x237), e[aV(0x24a)] = aV(0x1e5), e[aW(0x1b9)] = aV(0x191) + aV(0x1cb), e[aV(0x25c)] = aV(0x19a), e[aW(0x179)] = aW(0x1a1) + aW(0x1cb), e[aV(0x1f2)] = aW(0x1dd), e[aV(0x175)] = aW(0x17c), e[aW(0x133)] = function (g, h) {
            return g + h;
        }, e[aW(0x1b6)] = aW(0x238) + aW(0x174);
        const f = e;
        try {
            let g = (0x29 * -0xa1 + 0xf75 * -0x2 + 0x38b3, baileys_1[aV(0x15e) + aV(0x223)])(d?.[aW(0x231)]);
            if (f[aV(0x168)](g, f[aW(0x189)])) {
                d?.[aW(0x231)]?.[aV(0x22e) + aW(0x1cb)]?.[aV(0x231)]?.[aW(0x15f) + 'e'] && (g = f[aV(0x23f)]);
                if (d?.[aV(0x231)]?.[aV(0x22e) + aW(0x1cb)]?.[aW(0x231)]?.[aV(0x1c2) + aV(0x143)]) {
                    if (f[aW(0x188)](f[aV(0x164)], f[aW(0x1a8)])) {
                        const i = {};
                        return i[aW(0x138)] = f[aW(0x1f0)], i[aV(0x18e)] = '', i[aV(0x150)] = '', i;
                    } else
                        g = f[aV(0x243)];
                }
                d?.[aW(0x231)]?.[aW(0x22e) + aW(0x1cb)]?.[aV(0x231)] && (g = (0x7e5 + -0x1972 + 0x1 * 0x118d, baileys_1[aW(0x15e) + aV(0x223)])(d?.[aW(0x231)]?.[aW(0x22e) + aV(0x1cb)]?.[aV(0x231)]));
            }
            if (f[aW(0x1ec)](g, f[aW(0x16b)])) {
                if (f[aW(0x244)](f[aW(0x1d5)], f[aW(0x1d5)]))
                    k?.[aV(0x231)]?.[aW(0x22e) + aV(0x1cb)]?.[aV(0x231)]?.[aV(0x15f) + 'e'] && (s = f[aW(0x23f)]), m?.[aV(0x231)]?.[aV(0x22e) + aV(0x1cb)]?.[aW(0x231)]?.[aV(0x1c2) + aW(0x143)] && (t = f[aW(0x243)]), o?.[aV(0x231)]?.[aW(0x22e) + aW(0x1cb)]?.[aW(0x231)] && (u = (-0x2 * -0x12c7 + 0x1 * -0x865 + 0x5d5 * -0x5, v[aV(0x15e) + aV(0x223)])(w?.[aW(0x231)]?.[aV(0x22e) + aW(0x1cb)]?.[aW(0x231)]));
                else {
                    d?.[aV(0x231)]?.[aV(0x1c7) + aV(0x178)]?.[aV(0x231)]?.[aW(0x15f) + 'e'] && (g = f[aW(0x23f)]);
                    d?.[aV(0x231)]?.[aW(0x1c7) + aV(0x178)]?.[aV(0x231)]?.[aW(0x1c2) + aV(0x143)] && (g = f[aV(0x243)]);
                    d?.[aW(0x231)]?.[aW(0x1c7) + aW(0x178)]?.[aW(0x231)]?.[aV(0x249) + 'ge'] && (g = f[aW(0x157)]);
                    d?.[aV(0x231)]?.[aV(0x1c7) + aW(0x178)]?.[aV(0x231)]?.[aW(0x23c) + 'ge'] && (g = f[aV(0x1a9)]);
                    d?.[aV(0x231)]?.[aV(0x1c7) + aV(0x178)]?.[aV(0x231)]?.[aV(0x23c) + 'ge'] && (f[aW(0x1e8)](f[aV(0x25f)], f[aV(0x1e6)]) ? e = f[aW(0x16f)][aW(0x1c1) + 't']?.[aV(0x1e7)]('@')[0x4d6 * -0x6 + 0x3b * -0x7e + 0x3a0e] : g = f[aW(0x131)]);
                    d?.[aW(0x231)]?.[aV(0x1c7) + aW(0x178)]?.[aW(0x231)]?.[aW(0x247) + aV(0x1cb)] && (f[aV(0x235)](f[aW(0x217)], f[aV(0x217)]) ? f = (-0x665 * 0x1 + -0x22db + 0x1 * 0x2940, g[aW(0x15e) + aV(0x223)])(h?.[aV(0x231)]?.[aW(0x1c7) + aV(0x178)]?.[aV(0x231)]?.[aV(0x22e) + aV(0x1cb)]?.[aV(0x231)]) : g = f[aV(0x22d)]);
                    d?.[aV(0x231)]?.[aW(0x1c7) + aW(0x178)]?.[aV(0x231)]?.[aV(0x123) + aW(0x143)] && (g = f[aW(0x15a)]);
                    d?.[aV(0x231)]?.[aW(0x1c7) + aV(0x178)]?.[aV(0x231)]?.[aV(0x1fe) + aV(0x143)] && (g = f[aV(0x204)]);
                    if (d?.[aV(0x231)]?.[aW(0x1c7) + aV(0x178)]?.[aW(0x231)]?.[aV(0x191) + aV(0x1cb)]) {
                        if (f[aW(0x244)](f[aV(0x19d)], f[aV(0x24a)]))
                            g = f[aV(0x1b9)];
                        else
                            throw new d(f[aV(0x144)]);
                    }
                    d?.[aW(0x231)]?.[aV(0x1c7) + aV(0x178)]?.[aV(0x231)]?.[aW(0x1a1) + aV(0x1cb)] && (f[aW(0x235)](f[aV(0x25c)], f[aV(0x25c)]) ? d = f[aW(0x131)] : g = f[aW(0x179)]), d?.[aW(0x231)]?.[aV(0x1c7) + aV(0x178)]?.[aV(0x231)]?.[aW(0x22e) + aV(0x1cb)] && (f[aV(0x188)](f[aW(0x1f2)], f[aV(0x175)]) ? d = f[aW(0x243)] : g = (-0x1 * -0x6c3 + -0x1c8a + 0xdf * 0x19, baileys_1[aV(0x15e) + aV(0x223)])(d?.[aW(0x231)]?.[aV(0x1c7) + aW(0x178)]?.[aV(0x231)]?.[aV(0x22e) + aV(0x1cb)]?.[aW(0x231)]));
                }
            }
            return g;
        } catch (o) {
            logger_1[aW(0x16c)][aW(0x20c)](f[aW(0x133)](f[aV(0x1b6)], o));
        }
    }, getQuotedMessageId = c => {
        const aX = aD, aY = aD, d = (-0x6 * -0x1bd + 0x7 * 0x102 + -0x6 * 0x2ea, baileys_1[aX(0x21d) + aY(0x134) + 't'])(c[aX(0x231)])[Object[aX(0x14a)](c?.[aY(0x231)])[aX(0x169)]()[aY(0x21e)]()[aX(0x1ad)]];
        let e = c?.[aY(0x231)]?.[aX(0x1eb) + aY(0x1cb)] ? c?.[aX(0x231)]?.[aX(0x1eb) + aX(0x1cb)]?.[aX(0x16f)]?.['id'] : '';
        return e ? e : d?.[aX(0x194) + 'o']?.[aY(0x213)];
    };
exports[aC(0x218) + aC(0x233)] = getQuotedMessageId;