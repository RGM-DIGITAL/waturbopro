'use strict';
const D = b, E = b;
(function (c, d) {
    const B = b, C = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(B(0x1c5)) / (-0x201f + 0x24fb + -0x4db) + -parseInt(B(0x1bf)) / (-0x2 * -0xa24 + 0x2004 + 0x2e * -0x123) + -parseInt(C(0x1c4)) / (0x83 * 0x1e + 0x77f * -0x2 + -0x59 * 0x1) + parseInt(C(0x1a9)) / (-0x1d6e * 0x1 + 0x1021 + 0x7 * 0x1e7) * (parseInt(B(0x1a2)) / (0x1370 + -0x1d9f * 0x1 + 0xa34)) + parseInt(C(0x199)) / (-0x1 * -0x1c1b + -0x13b8 + -0x85d) * (parseInt(B(0x1a1)) / (-0x1 * 0xcdc + 0x207b + -0x84 * 0x26)) + parseInt(C(0x19e)) / (0x527 * 0x7 + -0x1 * 0x1adc + -0x57 * 0x1b) + parseInt(C(0x1b8)) / (0x25e2 * -0x1 + 0x1ef3 + 0x6f8) * (parseInt(B(0x196)) / (-0x12f7 + 0x1e20 + 0x49 * -0x27));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x293 * 0x76 + 0x2 * 0x1ea1 + 0x465fb));
var __importDefault = this && this[D(0x1b0) + E(0x1d1)] || function (c) {
    const F = D;
    return c && c[F(0x1d7)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * -0x13a4 + 0x260b + -0x382a);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[D(0x186)] = !![], Object[E(0x1d6) + D(0x1ae)](exports, D(0x1d7), k);
const cache_1 = require(E(0x1c3) + E(0x1d5)), Message_1 = __importDefault(require(D(0x1c0) + D(0x192))), logger_1 = require(D(0x1c7) + D(0x1c9)), GetTicketWbotBaileys_1 = __importDefault(require(E(0x1aa) + D(0x1ba) + 'ys')), socketEmit_1 = __importDefault(require(E(0x1a8) + 'it')), SetTicketMessagesAsRead = async m => {
        const G = D, H = E, n = {};
        n[G(0x1da)] = function (p, q) {
            return p === q;
        }, n[H(0x1b9)] = function (p, q) {
            return p === q;
        }, n[G(0x1a3)] = G(0x18d), n[H(0x1d9)] = H(0x1b1), n[H(0x1d3)] = G(0x1b6), n[H(0x1b3)] = function (p, q) {
            return p > q;
        }, n[G(0x1cc)] = function (p, q) {
            return p === q;
        }, n[H(0x1d4)] = G(0x19a), n[H(0x1ce)] = H(0x198) + H(0x1a5), n[G(0x194)] = H(0x1bb) + G(0x1cf);
        const o = n;
        try {
            const p = {};
            p[H(0x19d) + G(0x1a4)] = 0x0, await m[G(0x185)](p), await cache_1[G(0x1c8)][H(0x1a6)](H(0x190) + m[H(0x187)] + G(0x1d0), '0');
            if (o[H(0x1b9)](m[H(0x195)], o[H(0x1a3)])) {
                const q = await (0x18a0 + -0x905 * 0x1 + -0xf9b, GetTicketWbotBaileys_1[H(0x189)])(m), r = {};
                r[H(0x18f)] = m['id'], r[H(0x1ab)] = ![], r[H(0x1ac)] = ![];
                const s = {};
                s[G(0x1a7)] = r, s[H(0x1c2)] = [[
                        o[H(0x1d9)],
                        o[G(0x1d3)]
                    ]];
                const t = await Message_1[G(0x189)][H(0x188)](s);
                t[G(0x1a0)](async y => {
                    const I = H, J = G, z = JSON[I(0x1d8)](y[J(0x1be)]);
                    z[J(0x1af)] && o[I(0x1da)](z[J(0x1af)][J(0x1ab)], ![]) && await q[J(0x1b4) + 'es']([z[I(0x1af)]]);
                });
                if (o[H(0x1b3)](t[H(0x1c1)], -0xda * -0x3 + -0x201 * -0xb + -0x1899)) {
                    const y = JSON[G(0x1d8)](JSON[G(0x19c)](t[-0x104c + -0x2d7 + 0xd5 * 0x17][G(0x1be)]));
                    if (y[G(0x1af)] && o[G(0x1cc)](y[H(0x1af)][G(0x1ab)], ![])) {
                        const z = {};
                        z[H(0x1b5)] = !![], z[H(0x1bc) + 'es'] = [y], await q[H(0x1d2)](z, m[H(0x19b)][G(0x18a)] + '@' + (m[G(0x197)] ? o[G(0x1d4)] : o[G(0x1ce)]));
                    }
                }
                const u = {};
                u[G(0x1ac)] = !![];
                const v = {};
                v[G(0x18f)] = m['id'], v[G(0x1ac)] = ![];
                const w = {};
                w[G(0x1a7)] = v, await Message_1[H(0x189)][G(0x185)](u, w);
                const x = {};
                x[G(0x1ad)] = m[G(0x1ad)], x[G(0x1c6)] = o[H(0x194)], x[H(0x191)] = m, (-0x17d * 0xe + -0x750 + 0xe13 * 0x2, socketEmit_1[G(0x189)])(x);
            }
        } catch (A) {
            console[G(0x193)](A), logger_1[G(0x1b7)][H(0x1cb)](G(0x18c) + H(0x1b2) + H(0x18b) + G(0x1bd) + G(0x18e) + G(0x1ca) + G(0x19f) + H(0x1cd) + A);
        }
    };
function a() {
    const K = [
        'isGroup',
        's.whatsapp',
        '846546XmsdTs',
        'g.us',
        'contact',
        'stringify',
        'unreadMess',
        '1088600uzSGFN',
        'onnected?\x20',
        'forEach',
        '21xbRcFC',
        '2015KHZwkm',
        'JOxOF',
        'ages',
        '.net',
        'set',
        'where',
        './socketEm',
        '76pNoYKl',
        './GetTicke',
        'fromMe',
        'read',
        'tenantId',
        'erty',
        'key',
        '__importDe',
        'createdAt',
        'mark\x20messa',
        'kslcN',
        'readMessag',
        'markRead',
        'DESC',
        'logger',
        '851337TFBfzu',
        'vyWFk',
        'tWbotBaile',
        'ticket:upd',
        'lastMessag',
        'd.\x20Maybe\x20W',
        'dataJson',
        '866436CvUkTh',
        '../models/',
        'length',
        'order',
        '../libs/ca',
        '1216302rgpryB',
        '403225cdbELV',
        'type',
        '../utils/l',
        'cacheLayer',
        'ogger',
        'ssion\x20disc',
        'warn',
        'VgubJ',
        'Err:\x20',
        'LAQDP',
        'ate',
        ':unreads',
        'fault',
        'chatModify',
        'GZZcJ',
        'sNeuw',
        'che',
        'defineProp',
        '__esModule',
        'parse',
        'HDYTU',
        'AyjNZ',
        'update',
        'value',
        'contactId',
        'findAll',
        'default',
        'number',
        'ges\x20as\x20rea',
        'Could\x20not\x20',
        'whatsapp',
        'hatsApp\x20se',
        'ticketId',
        'contacts:',
        'payload',
        'Message',
        'log',
        'gTNdG',
        'channel',
        '10XXHGSV'
    ];
    a = function () {
        return K;
    };
    return a();
}
exports[E(0x189)] = SetTicketMessagesAsRead;