'use strict';
const G = b, H = b;
(function (c, d) {
    const E = b, F = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(E(0x1ab)) / (0x1ab1 + -0x233 * 0x3 + -0x1417) + parseInt(F(0x1c8)) / (0xeb9 + -0x25f7 * 0x1 + 0x1740) + parseInt(E(0x1af)) / (-0x1 * 0x2bf + -0x252f + -0x19 * -0x199) + parseInt(E(0x1d1)) / (-0xbf5 * -0x2 + 0xb74 + -0x11ad * 0x2) + parseInt(E(0x1b6)) / (0xd2e + -0x4f7 * 0x7 + -0xacc * -0x2) + parseInt(F(0x1c9)) / (-0x8 * 0x2c2 + 0x3 * 0x4db + 0x785) + parseInt(F(0x1b7)) / (0x1 * 0xafd + 0x538 + -0x102e) * (-parseInt(E(0x1cc)) / (0x28 * -0xa4 + 0x303 + 0x1 * 0x16a5));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2af79 * -0x1 + -0x1784d + 0x58306 * 0x2));
var __importDefault = this && this[G(0x1ba) + G(0x1c2)] || function (c) {
    const I = G;
    return c && c[I(0x1cd)] ? c : { 'default': c };
};
function a() {
    const N = [
        'erty',
        'indexOf',
        '../../util',
        'date-fns',
        'userId',
        '5153615lnAxkD',
        '10163006RtwdNZ',
        'error',
        '../../mode',
        '__importDe',
        'SwAFz',
        'split',
        'sessionId',
        'map',
        'uqlIG',
        'message2',
        'message1',
        'fault',
        'value',
        'Xvsde',
        'ls/Campaig',
        'qdcOs',
        'default',
        '1174388Ffzfhi',
        '720096tsTLIZ',
        'getTime',
        'defineProp',
        '8QXQmGl',
        '__esModule',
        'cmtVD',
        'substr',
        'parseISO',
        '2479324jtJWVk',
        'tenantId',
        'delay',
        'start',
        'name',
        'QuABC',
        'create',
        's/logger',
        'aDFhe',
        'mimetype',
        'filename',
        '135001DxJxfU',
        'Amptb',
        'all',
        'message3',
        '93597drQmgh',
        'logger'
    ];
    a = function () {
        return N;
    };
    return a();
}
const D = {};
D[G(0x1c3)] = !![], Object[H(0x1cb) + G(0x1b1)](exports, H(0x1cd), D);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x295 + -0x625 + 0x3 * 0x1bc);
        let h = e[f];
        return h;
    }, b(c, d);
}
const date_fns_1 = require(G(0x1b4)), logger_1 = require(G(0x1b3) + H(0x1a7)), Campaign_1 = __importDefault(require(G(0x1b9) + G(0x1c5) + 'n')), CreateCampaignService = async ({
        campaign: d,
        medias: e
    }) => {
        const J = G, K = G, f = {};
        f[J(0x1bf)] = function (k, l) {
            return k === l;
        }, f[K(0x1c4)] = K(0x1bb), f[K(0x1ce)] = K(0x1c6), f[J(0x1a8)] = function (k, l) {
            return k !== l;
        }, f[J(0x1ac)] = J(0x1a5);
        const g = f;
        let h;
        if (e) {
            if (g[J(0x1a8)](g[K(0x1ac)], g[J(0x1ac)])) {
                const l = f[K(0x1a9)][J(0x1bc)]('/')[-0x543 * 0x5 + -0x13d6 + 0x2e26][K(0x1bc)](';')[0x1 * 0x24a3 + -0x608 * 0x2 + -0x1893];
                g[K(0x1aa)] = new h()[J(0x1ca)]() + '.' + l;
            } else
                await Promise[K(0x1ad)](e[J(0x1be)](async l => {
                    const L = J, M = J;
                    try {
                        if (g[L(0x1bf)](g[L(0x1c4)], g[M(0x1ce)])) {
                            if (!i[L(0x1aa)]) {
                                const n = o[L(0x1a9)][L(0x1bc)]('/')[0x1 * 0x185c + 0x6 * -0x1fa + -0xc7f][M(0x1bc)](';')[0x1994 + -0x1 * -0x2636 + -0xcc2 * 0x5];
                                p[M(0x1aa)] = new q()[M(0x1ca)]() + '.' + n;
                            }
                            m = n;
                        } else {
                            if (!l[L(0x1aa)]) {
                                const n = l[M(0x1a9)][L(0x1bc)]('/')[-0x101 * -0x1d + -0x1ef6 + 0x1da][M(0x1bc)](';')[-0x4e8 + 0x2564 + -0x207c];
                                l[L(0x1aa)] = new Date()[L(0x1ca)]() + '.' + n;
                            }
                            h = l;
                        }
                    } catch (o) {
                        logger_1[L(0x1b0)][M(0x1b8)](o);
                    }
                }));
        }
        const i = {
                'name': d[K(0x1a4)],
                'start': (0x293 * -0x7 + 0x1 * 0xc1 + 0x1144, date_fns_1[J(0x1d0)])(d[J(0x1d4)]),
                'message1': d[J(0x1c1)],
                'message2': d[K(0x1c0)],
                'message3': d[J(0x1ae)],
                'userId': d[K(0x1b5)],
                'delay': d[J(0x1d3)],
                'mediaUrl': h?.[J(0x1aa)],
                'mediaType': h?.[J(0x1a9)][K(0x1cf)](-0xcab + -0x195 * 0x10 + 0x25fb, h[K(0x1a9)][K(0x1b2)]('/')),
                'sessionId': d[K(0x1bd)],
                'tenantId': d[K(0x1d2)]
            }, j = await Campaign_1[J(0x1c7)][K(0x1a6)](i);
        return j;
    };
exports[H(0x1c7)] = CreateCampaignService;