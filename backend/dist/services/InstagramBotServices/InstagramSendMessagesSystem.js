'use strict';
const T = b, U = b;
(function (c, d) {
    const R = b, S = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(R(0x1d1)) / (0x3a * 0x6a + -0x1 * -0x16bf + -0x7e * 0x5f) * (parseInt(S(0x1b2)) / (0x14d8 + 0x271 + 0x1 * -0x1747)) + -parseInt(S(0x159)) / (-0x14f7 + 0x1ecb + -0x9d1) + -parseInt(S(0x1ba)) / (0x95 * -0x12 + -0x1e7 * 0xd + 0x2339) + parseInt(R(0x1a6)) / (-0x484 + 0x6d1 + -0x248) * (parseInt(S(0x158)) / (0xe49 * 0x2 + 0x190 * -0x11 + -0x1fc)) + parseInt(S(0x18e)) / (0x12 * 0x1eb + 0x1 * -0x1cbd + -0xb * 0x86) + -parseInt(S(0x178)) / (-0x1 * 0x2366 + -0x1 * 0x2506 + 0x4874) * (-parseInt(S(0x1c5)) / (0x6 * 0x235 + 0xe37 + -0x1b6c)) + parseInt(R(0x1ac)) / (-0x1 * -0x2395 + 0x225 + 0x12d8 * -0x2);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xd * -0x167b7 + 0xa5e8d * -0x1 + 0x2181b));
var __importDefault = this && this[T(0x162) + U(0x1c9)] || function (c) {
    const V = U;
    return c && c[V(0x1bc)] ? c : { 'default': c };
};
const q = {};
q[U(0x1be)] = !![], Object[U(0x192) + U(0x167)](exports, T(0x1bc), q);
const promises_1 = require(T(0x18a) + 's'), fluent_ffmpeg_1 = __importDefault(require(T(0x1b3) + U(0x165))), path_1 = require(U(0x19f)), sequelize_1 = require(U(0x189)), sharp_1 = __importDefault(require(U(0x1d7))), socketEmit_1 = __importDefault(require(T(0x183) + T(0x184) + U(0x1b9))), Message_1 = __importDefault(require(T(0x181) + T(0x16e))), Ticket_1 = __importDefault(require(U(0x181) + T(0x19d))), logger_1 = require(T(0x188) + T(0x1bf)), sleepRandomTime_1 = require(U(0x188) + U(0x1c4) + T(0x1d6)), SendMessagesSystemWbot = async (l, m) => {
        const W = U, X = U, n = {
                'rSmJe': W(0x18b),
                'UOiWI': X(0x169),
                'FAzlu': X(0x1da),
                'ekwJG': X(0x1c8),
                'EfeWp': W(0x16b),
                'JnwaZ': W(0x1d9),
                'Qrvtj': W(0x1b6),
                'egnBd': W(0x1b8),
                'ZXVaP': X(0x15d),
                'BWDZc': W(0x1a7),
                'RVCKu': X(0x1d3),
                'WcBhm': W(0x19b),
                'wsvtd': X(0x16a),
                'hkzcw': X(0x168),
                'zMAvc': function (t, u) {
                    return t === u;
                },
                'SmZyz': W(0x1ca),
                'Ojxfb': function (t, u) {
                    return t === u;
                },
                'EUWkK': X(0x193),
                'jdRQH': function (t, u) {
                    return t === u;
                },
                'bSYtl': W(0x171),
                'bIzCD': function (t, u) {
                    return t === u;
                },
                'tEtDM': W(0x1b7),
                'cfpCT': X(0x18f) + X(0x1ae),
                'YtXXc': X(0x18f) + W(0x17a),
                'qNVoJ': X(0x15f),
                'CnkJG': W(0x1d2),
                'khgcG': W(0x1d0) + W(0x1a5),
                'bYGGa': function (t, u) {
                    return t(u);
                },
                'vRweu': function (t, u) {
                    return t(u);
                }
            }, o = { [sequelize_1['Op']['is']]: null }, p = {
                'fromMe': !![],
                'messageId': o,
                'status': n[W(0x1b1)],
                [sequelize_1['Op']['or']]: [
                    { 'scheduleDate': { [sequelize_1['Op'][X(0x197)]]: new Date() } },
                    { 'scheduleDate': { [sequelize_1['Op']['is']]: null } }
                ]
            }, r = await Message_1[X(0x154)][X(0x176)]({
                'where': p,
                'include': [
                    n[W(0x170)],
                    {
                        'model': Ticket_1[X(0x154)],
                        'as': n[W(0x1c6)],
                        'where': {
                            'tenantId': m,
                            [sequelize_1['Op']['or']]: {
                                'status': { [sequelize_1['Op']['ne']]: n[X(0x17d)] },
                                'isFarewellMessage': !![]
                            },
                            'channel': n[X(0x18c)],
                            'whatsappId': l['id']
                        },
                        'include': [n[X(0x170)]]
                    },
                    {
                        'model': Message_1[W(0x154)],
                        'as': n[X(0x163)],
                        'include': [n[X(0x170)]]
                    }
                ],
                'order': [[
                        n[W(0x1bb)],
                        n[W(0x1ce)]
                    ]]
            });
        let s;
        for (const t of r) {
            const u = t, {ticket: v} = u, w = v[X(0x16b)][X(0x1a8) + 'K'], x = await l[X(0x1a9)][W(0x16f) + 'ad']([w]);
            try {
                if (![
                        n[W(0x19a)],
                        n[X(0x160)]
                    ][X(0x1cf)](u[X(0x187)]) && u[W(0x1c3)]) {
                    const E = (0x1c6 + -0x1629 + -0x133 * -0x11, path_1[W(0x1cd)])(__dirname, '..', '..', '..', n[W(0x152)]), F = (-0xc55 + -0x7 * -0x4a3 + -0x1420, path_1[W(0x1cd)])(E, u[X(0x1c3)]), G = await (-0x25 * -0x18 + -0x9d4 + 0x65c, promises_1[X(0x174)])(F);
                    console[X(0x194)](F);
                    if (n[W(0x173)](u[X(0x187)], n[W(0x164)]) || n[W(0x1aa)](u[W(0x187)], n[W(0x15a)])) {
                        const H = u[X(0x1c3)][X(0x19e)]('.'), I = (-0x1f56 + 0x71b * -0x5 + 0x42dd, path_1[X(0x1cd)])(E, H[-0x719 + 0x23dc + -0x1 * 0x1cc3] + W(0x196));
                        await new Promise((L, M) => {
                            const Y = W, Z = X;
                            (-0x38a * 0x5 + 0x1 * -0x56 + 0x1208, fluent_ffmpeg_1[Y(0x154)])(F)[Y(0x1a2)](n[Z(0x1c2)])['on'](n[Z(0x15c)], N => M(N))['on'](n[Y(0x1a4)], () => L(!![]))[Y(0x1d8)](I);
                        });
                        const J = await (0xba1 + 0x228c + -0x2e2d * 0x1, promises_1[W(0x174)])(I), K = {};
                        K[W(0x1d5)] = J, s = await x[X(0x1cb) + W(0x1b5)](K);
                    }
                    if (n[X(0x16c)](u[W(0x187)], n[W(0x185)])) {
                        const L = await (0x159f + 0x246e + -0x3a0d, sharp_1[X(0x154)])(G)[X(0x15b)]()[X(0x155)](), M = {};
                        M[X(0x1d5)] = L, s = await x[W(0x18d) + X(0x17e)](M);
                    }
                    if (n[X(0x1d4)](u[X(0x187)], n[W(0x177)])) {
                        const N = {};
                        N[X(0x1b7)] = G, s = await x[W(0x1cb) + X(0x19c)](N);
                    }
                    logger_1[X(0x179)][X(0x199)](n[X(0x17b)]);
                }
                [
                    n[W(0x19a)],
                    n[X(0x160)]
                ][X(0x1cf)](u[X(0x187)]) && !u[X(0x1c3)] && (s = await x[W(0x17f) + X(0x1af)](u[X(0x1a3)]), logger_1[W(0x179)][W(0x199)](n[X(0x1c7)]));
                const y = {
                    ...u,
                    ...s
                };
                y['id'] = u['id'], y[X(0x1a0)] = u[X(0x1a0)], y[W(0x198)] = s[W(0x1a1)], y[X(0x190)] = n[X(0x1b4)], y[W(0x186)] = 0x2;
                const z = y, A = { ...z }, B = {};
                B['id'] = u['id'];
                const C = {};
                C[W(0x156)] = B, await Message_1[X(0x154)][W(0x1ab)](A, C);
                const D = {};
                D[X(0x182)] = v[W(0x182)], D[W(0x16d)] = n[X(0x1cc)], D[X(0x1ad)] = { ...u[X(0x166)] }, D[X(0x1ad)][W(0x161)] = u[W(0x161)], D[X(0x1ad)]['id'] = u['id'], D[X(0x1ad)][X(0x1a0)] = u[W(0x1a0)], D[X(0x1ad)][W(0x198)] = s[W(0x1a1)], D[X(0x1ad)][X(0x190)] = n[X(0x1b4)], D[X(0x1ad)][X(0x186)] = 0x2, (0x1798 + -0x1b69 + 0x1 * 0x3d1, socketEmit_1[W(0x154)])(D), logger_1[W(0x179)][W(0x199)](n[X(0x157)]), await (-0x2 * -0x5b3 + -0x4d6 * -0x6 + 0xe * -0x2e3, sleepRandomTime_1[X(0x1b0) + W(0x15e)])({
                    'minMilliseconds': n[W(0x175)](Number, 0x2233 + -0x25ae + 0xb4b),
                    'maxMilliseconds': n[X(0x17c)](Number, 0x1 * -0xe81 + 0x1e8 * 0x5 + -0x10b1 * -0x1)
                });
            } catch (O) {
                const P = u['id'], Q = u[W(0x1d9)]['id'];
                logger_1[W(0x179)][W(0x169)](W(0x1bd) + X(0x172) + X(0x1c1) + m + (X(0x1c0) + '\x20') + Q + ')'), logger_1[X(0x179)][X(0x169)](W(0x153) + X(0x191) + X(0x195) + P + X(0x180) + O);
            }
        }
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xdfa * 0x1 + -0x1435 + 0x2381);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[T(0x154)] = SendMessagesSystemWbot;
function a() {
    const a0 = [
        'lte',
        'messageId',
        'info',
        'WcBhm',
        'chat',
        'ideo',
        'ls/Ticket',
        'split',
        'path',
        'timestamp',
        'item_id',
        'toFormat',
        'body',
        'FAzlu',
        'date\x20ok',
        '30xMNJVL',
        'createdAt',
        'instagramP',
        'entity',
        'Ojxfb',
        'update',
        '11417740apwssP',
        'payload',
        'e\x20media',
        'ext',
        'sleepRando',
        'ekwJG',
        '1942678AHWmyr',
        'fluent-ffm',
        'qNVoJ',
        'oice',
        'closed',
        'video',
        'instagram',
        'Emit',
        '3980492nBBmwB',
        'BWDZc',
        '__esModule',
        'Error\x20mess',
        'value',
        's/logger',
        '\x20|\x20Ticket:',
        'nant:\x20',
        'rSmJe',
        'mediaName',
        's/sleepRan',
        '10292571itlqVy',
        'JnwaZ',
        'YtXXc',
        'pending',
        'fault',
        'audio',
        'broadcastV',
        'CnkJG',
        'join',
        'RVCKu',
        'includes',
        'Message\x20Up',
        '1dYpJwz',
        'chat:ack',
        'ASC',
        'bIzCD',
        'file',
        'domTime',
        'sharp',
        'saveToFile',
        'ticket',
        'end',
        'hkzcw',
        'Error\x20send',
        'default',
        'toBuffer',
        'where',
        'khgcG',
        '581238FntUXe',
        '2359047TcbsRq',
        'EUWkK',
        'jpeg',
        'UOiWI',
        'quotedMsg',
        'mTime',
        'sended',
        'wsvtd',
        'mediaUrl',
        '__importDe',
        'ZXVaP',
        'SmZyz',
        'peg',
        'dataValues',
        'erty',
        'public',
        'error',
        'text',
        'contact',
        'jdRQH',
        'type',
        'ls/Message',
        'directThre',
        'EfeWp',
        'image',
        'age\x20is\x20(te',
        'zMAvc',
        'readFile',
        'bYGGa',
        'findAll',
        'tEtDM',
        '8vFdYen',
        'logger',
        'e\x20text',
        'cfpCT',
        'vRweu',
        'Qrvtj',
        'hoto',
        'broadcastT',
        ')::\x20',
        '../../mode',
        'tenantId',
        '../../help',
        'ers/socket',
        'bSYtl',
        'ack',
        'mediaType',
        '../../util',
        'sequelize',
        'fs/promise',
        'mp4',
        'egnBd',
        'broadcastP',
        '3786923QLXsQP',
        'sendMessag',
        'status',
        '\x20message\x20(',
        'defineProp',
        'ptt',
        'log',
        'id:\x20',
        '.mp4'
    ];
    a = function () {
        return a0;
    };
    return a();
}