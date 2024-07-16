'use strict';
const L = b, M = b;
(function (c, d) {
    const J = b, K = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(J(0xee)) / (-0x1 * 0x17b4 + 0x15a * 0x9 + 0xb8b) + -parseInt(J(0xaa)) / (-0x1 * -0x2631 + -0x2342 + 0x6b * -0x7) + -parseInt(K(0xdf)) / (0x15d * 0xd + 0x1 * -0xe75 + -0x7 * 0x77) + -parseInt(K(0xfb)) / (-0x164b + -0x1c09 * 0x1 + 0x48 * 0xb3) * (parseInt(K(0xa0)) / (0x26be * -0x1 + 0xb * -0xb0 + 0x2e53)) + parseInt(K(0xf1)) / (0xa * -0x176 + 0x20f + -0x25 * -0x57) * (parseInt(K(0xa5)) / (-0x1 * 0x1fe9 + -0x2612 + -0x2 * -0x2301)) + -parseInt(K(0xb1)) / (-0x1195 + -0xe6a + -0x9 * -0x38f) * (parseInt(J(0xd7)) / (0x47 * 0x21 + -0x15a1 + 0xc83 * 0x1)) + parseInt(J(0xb3)) / (-0x78b + 0x9a9 + -0x1c * 0x13);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x16815 * -0x1 + -0x28585 + -0x13d9 * -0x33));
var __importDefault = this && this[L(0xb2) + L(0x119)] || function (c) {
    const N = M;
    return c && c[N(0xd3)] ? c : { 'default': c };
};
const k = {};
k[L(0x112)] = !![], Object[M(0x9d) + M(0x100)](exports, M(0xd3), k);
const sequelize_1 = require(L(0xd6)), Message_1 = __importDefault(require(M(0xa2) + M(0x9b))), logger_1 = require(M(0xa8) + M(0xbd)), wbot_baileys_1 = require(M(0xef) + M(0xfa) + L(0xaf)), path_1 = require(M(0xcb)), SendMessagesSystemWbotBaileys_1 = require(M(0xb4) + L(0xa4) + M(0xd5) + 's'), sleepRandomTime_1 = require(M(0xa8) + M(0xc1) + M(0x10c)), Ticket_1 = __importDefault(require(L(0xa2) + L(0xbb))), SendMessagesSchenduleWbot = async () => {
        const O = M, P = M, g = {
                'mLYEq': function (p, q) {
                    return p <= q;
                },
                'VyLcl': O(0xb8),
                'tIvoZ': P(0xac) + P(0x115),
                'eqlqP': function (p, q) {
                    return p !== q;
                },
                'RqYCy': O(0xd8),
                'UDDgx': O(0xad),
                'qFHEe': O(0xcc) + O(0x101) + O(0xb6),
                'GUroF': O(0xcc) + O(0x118) + P(0xa1),
                'eDyrw': O(0xd0),
                'OtXfO': P(0x104) + P(0xbe) + P(0xa7),
                'FPAJA': function (p, q) {
                    return p(q);
                },
                'ERBse': function (p, q) {
                    return p(q);
                },
                'oSptI': O(0xcc) + O(0xec) + 'e',
                'CEaZK': function (p, q) {
                    return p === q;
                },
                'FVVbM': P(0x111),
                'pLYMo': O(0xc2),
                'nkWcH': O(0xab),
                'vaxnj': P(0xc8),
                'PibGP': P(0x109),
                'vObIX': P(0xe5),
                'XmuyI': P(0xfe),
                'bWBGa': P(0x103)
            }, h = { [sequelize_1['Op']['is']]: null }, i = {};
        i[P(0xe0)] = !![], i[O(0xfc)] = h, i[O(0xa6)] = g[O(0xf6)];
        const j = i, l = {};
        l[O(0xc5)] = Ticket_1[O(0xd4)], l['as'] = g[O(0x110)], l[P(0xa9)] = {
            [sequelize_1['Op']['or']]: {
                'status': { [sequelize_1['Op']['ne']]: g[P(0xe6)] },
                'isFarewellMessage': !![]
            }
        }, l[O(0xbc)] = [g[O(0xe3)]], l[P(0xa9)][P(0xca)] = g[O(0xc9)];
        const m = {};
        m[O(0xa9)] = j, m[P(0xbc)] = [l], m[O(0xbf)] = [[
                g[O(0x10f)],
                g[P(0xe1)]
            ]];
        const n = await Message_1[P(0xd4)][P(0xf8)](m);
        let o;
        n[O(0xfd)](async p => {
            const Q = O, R = P;
            if (p[Q(0xba) + 'te'] && g[Q(0x10d)](p[Q(0xba) + 'te'][R(0x9e)](), new Date()[R(0x9e)]())) {
                logger_1[R(0xea)][Q(0xed)](R(0xf5) + R(0xf9) + R(0xc3) + p['id'] + (Q(0xeb) + '\x20') + p[Q(0xe2)]);
                const q = (-0x2 * -0xba7 + -0x4 * 0x8da + 0xc1a, wbot_baileys_1[R(0xdc)])(p[R(0xab)][Q(0x9c)]), r = p[R(0xab)][R(0xe5)][Q(0xe7)], s = p[Q(0xab)][R(0xc6)] ? g[Q(0x10b)] : g[Q(0x105)], t = r + '@' + s;
                try {
                    if (g[Q(0xf2)](p[R(0xdd)], g[R(0xf4)]) && p[R(0xff)]) {
                        const z = (-0xf25 * -0x1 + 0x705 + -0x162a, path_1[Q(0xe9)])(__dirname, '..', '..', '..', g[Q(0xd2)]), A = (-0x2185 + 0x1051 * -0x1 + 0x31d6, path_1[Q(0xe9)])(z, p[Q(0xff)]), B = await (0x5 * 0x71c + -0x1470 + 0x1 * -0xf1c, SendMessagesSystemWbotBaileys_1[Q(0xde) + R(0x106)])(p[R(0xff)], A);
                        if (B) {
                            const C = { ...B };
                            o = await q[R(0xcc) + 'e'](t, C);
                        }
                        logger_1[Q(0xea)][R(0xed)](g[R(0xce)]);
                    } else {
                        const D = {};
                        D[Q(0x113)] = p[R(0x116)], o = await q[R(0xcc) + 'e'](t, D), logger_1[R(0xea)][Q(0xed)](g[Q(0xf3)]);
                    }
                    const u = {};
                    u[Q(0xfc)] = o[Q(0xf7)]['id'], u[Q(0xa6)] = g[Q(0x10e)];
                    const v = u, w = { ...v }, x = {};
                    x['id'] = p['id'];
                    const y = {};
                    y[R(0xa9)] = x, await Message_1[Q(0xd4)][Q(0xd9)](w, y), logger_1[Q(0xea)][Q(0xed)](g[R(0x102)]), await (-0x17d3 + 0x224f + -0xa7c, sleepRandomTime_1[Q(0xe8) + R(0x114)])({
                        'minMilliseconds': g[Q(0xb7)](Number, process[Q(0x10a)][Q(0xc0) + R(0xb9)] || 0x120b + -0x1fc * -0x3 + -0xd1 * 0x1b),
                        'maxMilliseconds': g[Q(0xd1)](Number, process[Q(0x10a)][R(0xda) + R(0xb9)] || 0x34 * 0x9a + -0x4 * 0x5f8 + -0x1a * -0x4)
                    }), logger_1[Q(0xea)][Q(0xed)](g[R(0xb5)]);
                } catch (E) {
                    const F = p['id'], G = p[R(0xdb)];
                    if (g[Q(0xc4)](E[R(0xcf)], g[R(0xae)])) {
                        const H = {};
                        H['id'] = p['id'];
                        const I = {};
                        I[Q(0xa9)] = H, await Message_1[Q(0xd4)][Q(0xcd)](I);
                    }
                    logger_1[R(0xea)][Q(0xc7)](R(0x107) + Q(0xb0) + Q(0xf0) + p[Q(0xe2)] + (R(0xe4) + '\x20') + G + ')'), logger_1[Q(0xea)][R(0xc7)](R(0x108) + Q(0x117) + R(0x9f) + F + Q(0xa3) + E);
                }
            }
        });
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x968 + -0x235 * 0x5 + -0xd * -0x2c);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[L(0xd4)] = SendMessagesSchenduleWbot;
function a() {
    const S = [
        'model',
        'isGroup',
        'error',
        'closed',
        'PibGP',
        'channel',
        'path',
        'sendMessag',
        'destroy',
        'qFHEe',
        'code',
        'sended',
        'ERBse',
        'UDDgx',
        '__esModule',
        'default',
        'WbotBailey',
        'sequelize',
        '81PEEplb',
        'chat',
        'update',
        'MAX_SLEEP_',
        'ticketId',
        'getWbot',
        'mediaType',
        'getMessage',
        '902475AJaoHA',
        'fromMe',
        'bWBGa',
        'tenantId',
        'vObIX',
        '\x20|\x20Ticket:',
        'contact',
        'vaxnj',
        'number',
        'sleepRando',
        'join',
        'logger',
        '\x20|\x20Tenant:',
        'e\x20Schendul',
        'info',
        '369568KmAska',
        '../../libs',
        'nant:\x20',
        '6kOSEDt',
        'eqlqP',
        'GUroF',
        'RqYCy',
        'Message\x20Sc',
        'pLYMo',
        'key',
        'findAll',
        'hendule\x20Qu',
        '/wbot-bail',
        '4RWOmBA',
        'messageId',
        'forEach',
        'createdAt',
        'mediaName',
        'erty',
        'e\x20media\x20Sc',
        'OtXfO',
        'ASC',
        'Message\x20Up',
        'tIvoZ',
        'Options',
        'Error\x20mess',
        'Error\x20send',
        'whatsapp',
        'env',
        'VyLcl',
        'domTime',
        'mLYEq',
        'eDyrw',
        'XmuyI',
        'nkWcH',
        'ENOENT',
        'value',
        'text',
        'mTime',
        '.net',
        'body',
        '\x20message\x20(',
        'e\x20text\x20Sch',
        'fault',
        'ls/Message',
        'whatsappId',
        'defineProp',
        'getTime',
        'id:\x20',
        '1284565uQBRfl',
        'endule',
        '../../mode',
        ')::',
        'agesSystem',
        '1416569xioMEC',
        'status',
        'dule',
        '../../util',
        'where',
        '17712UTxFfD',
        'ticket',
        's.whatsapp',
        'public',
        'FVVbM',
        'eys',
        'age\x20is\x20(te',
        '136128DsiHvp',
        '__importDe',
        '3338620NnlEJy',
        './SendMess',
        'oSptI',
        'hendule',
        'FPAJA',
        'g.us',
        'INTERVAL',
        'scheduleDa',
        'ls/Ticket',
        'include',
        's/logger',
        'date\x20Schen',
        'order',
        'MIN_SLEEP_',
        's/sleepRan',
        'pending',
        'eue:\x20',
        'CEaZK'
    ];
    a = function () {
        return S;
    };
    return a();
}