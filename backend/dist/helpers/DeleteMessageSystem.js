'use strict';
const E = b, F = b;
(function (c, d) {
    const C = b, D = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(C(0x174)) / (0x11 * -0x1d7 + 0x73 * -0x25 + 0x1 * 0x2fe7) * (parseInt(D(0x141)) / (-0xe * 0xe3 + -0x2fe * 0xa + 0x2a58)) + parseInt(C(0x16a)) / (0x25 * 0xa7 + 0x6bb * 0x1 + -0x1 * 0x1edb) + parseInt(D(0x12c)) / (-0xe2 * 0x10 + -0x936 + 0x175a) + -parseInt(D(0x135)) / (0x26d * 0xa + 0x35 * 0x97 + -0x3780) + -parseInt(D(0x168)) / (0x1 * 0x2173 + 0x2171 + 0x76e * -0x9) + -parseInt(C(0x152)) / (0x192a * -0x1 + -0x1 * -0x231a + 0x3b * -0x2b) + parseInt(D(0x15d)) / (0x25c0 + 0x112d * 0x2 + 0x5a * -0xcd);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1769e + -0x405f7 + 0x4b300));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xa3 * 0x10 + 0x61a * 0x5 + 0x1331 * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[E(0x15c) + F(0x15e)] || function (c) {
    const G = E;
    return c && c[G(0x13a)] ? c : { 'default': c };
};
const o = {};
o[F(0x124)] = !![], Object[E(0x13c) + F(0x13b)](exports, E(0x13a), o);
const date_fns_1 = require(E(0x138)), Message_1 = __importDefault(require(E(0x16d) + E(0x14e))), Ticket_1 = __importDefault(require(F(0x16d) + E(0x121))), tbot_1 = require(E(0x125) + 'ot'), AppError_1 = __importDefault(require(E(0x166) + E(0x143))), socket_1 = require(F(0x130) + F(0x16e)), wbot_baileys_1 = require(F(0x14c) + E(0x16f)), DeleteMessageSystem = async (i, j, k) => {
        const H = F, I = F, l = {};
        l[H(0x13f)] = H(0x15a) + H(0x163) + H(0x132), l[I(0x16b)] = I(0x128), l[I(0x139)] = I(0x131), l[I(0x149)] = function (w, z) {
            return w > z;
        }, l[H(0x144)] = H(0x158) + I(0x14f) + H(0x175) + H(0x12f), l[I(0x127)] = function (w, z) {
            return w === z;
        }, l[H(0x13d)] = H(0x123), l[H(0x164)] = I(0x162), l[I(0x160)] = H(0x167), l[H(0x12b)] = I(0x14b), l[H(0x13e)] = H(0x14a), l[H(0x16c)] = I(0x14d), l[H(0x146)] = function (w, z) {
            return w === z;
        }, l[H(0x15f)] = I(0x161), l[I(0x12d)] = I(0x151);
        const m = l, n = {};
        n['id'] = i;
        const p = {};
        p[I(0x15b)] = k;
        const q = {};
        q[H(0x153)] = Ticket_1[H(0x136)], q['as'] = m[H(0x16b)], q[I(0x154)] = [m[H(0x139)]], q[H(0x137)] = p;
        const r = {};
        r[I(0x137)] = n, r[H(0x154)] = [q];
        const s = await Message_1[I(0x136)][I(0x134)](r);
        if (s) {
            const w = (-0x2235 + 0x6a * -0x13 + 0x2a13, date_fns_1[H(0x142) + I(0x12a)])(new Date(), (0x16 * -0x10f + -0x97 * 0x26 + 0x2db4, date_fns_1[I(0x126)])(s?.[H(0x169)]));
            if (m[H(0x149)](w, 0x1d42 + 0x2 * 0x90f + 0x17af * -0x2))
                throw new AppError_1[(I(0x136))](m[H(0x144)]);
        }
        if (!s) {
            if (m[I(0x127)](m[I(0x13d)], m[H(0x164)]))
                return;
            else
                throw new AppError_1[(I(0x136))](m[H(0x13f)]);
        }
        const {ticket: t} = s;
        if (m[H(0x127)](t[H(0x129)], m[I(0x160)])) {
            const y = await (0x1cf3 + 0xb6 * 0x1 + -0x1da9 * 0x1, wbot_baileys_1[H(0x165)])(t[H(0x155)]), z = JSON[I(0x159)](s[I(0x157)]);
            await y[H(0x170) + 'e'](z[I(0x150)][H(0x133)], { 'delete': z[I(0x150)] });
        }
        if (m[H(0x127)](t[H(0x129)], m[I(0x12b)])) {
            const A = await (0x2208 + 0x1919 + 0x1 * -0x3b21, tbot_1[H(0x156)])(t[I(0x155)]);
            await A[H(0x14b)][H(0x122) + H(0x172)](t[I(0x131)][H(0x147)], +s[I(0x12e)]);
        }
        if (m[H(0x127)](t[I(0x129)], m[I(0x13e)])) {
            if (m[I(0x127)](m[H(0x16c)], m[I(0x16c)]))
                return;
            else
                throw new n[(H(0x136))](m[I(0x13f)]);
        }
        if (m[H(0x146)](t[H(0x129)], m[H(0x15f)]))
            return;
        const u = {};
        u[H(0x145)] = !![], await s[H(0x151)](u);
        const v = (-0xe2 * 0x25 + -0x878 + -0x6db * -0x6, socket_1[I(0x171)])();
        v['to'](H(0x148) + k + ':' + t['id'])[I(0x140)](I(0x148) + k + (I(0x173) + 'e'), {
            'action': m[H(0x12d)],
            'message': s,
            'ticket': t,
            'contact': t[H(0x131)]
        });
    };
function a() {
    const J = [
        'xbZeI',
        'instagram',
        'telegram',
        '../libs/wb',
        'Vmoid',
        'Message',
        'message\x20af',
        'key',
        'update',
        '80549kxHqrn',
        'model',
        'include',
        'whatsappId',
        'getTbot',
        'dataJson',
        'No\x20delete\x20',
        'parse',
        'No\x20message',
        'tenantId',
        '__importDe',
        '1337376lgELDe',
        'fault',
        'QCitU',
        'loKYG',
        'messenger',
        'Xzwce',
        '\x20found\x20wit',
        'HImkN',
        'getWbot',
        '../errors/',
        'whatsapp',
        '1138500uzavwD',
        'createdAt',
        '768810tQHHAY',
        'IMBCS',
        'GgreZ',
        '../models/',
        'cket',
        'ot-baileys',
        'sendMessag',
        'getIO',
        'age',
        ':appMessag',
        '26539ESqNeQ',
        'eter\x202h\x20se',
        'Ticket',
        'deleteMess',
        'iPzUf',
        'value',
        '../libs/tb',
        'parseJSON',
        'ugqxJ',
        'ticket',
        'channel',
        'InHours',
        'itBcs',
        '898656UIjWJI',
        'ZlhTn',
        'messageId',
        'nded',
        '../libs/so',
        'contact',
        'h\x20this\x20ID.',
        'remoteJid',
        'findOne',
        '1002470dngEyI',
        'default',
        'where',
        'date-fns',
        'icITJ',
        '__esModule',
        'erty',
        'defineProp',
        'ycCJe',
        'cmJUE',
        'QoKVk',
        'emit',
        '8FRoGan',
        'difference',
        'AppError',
        'KbfsD',
        'isDeleted',
        'jBJAp',
        'telegramId',
        'tenant:'
    ];
    a = function () {
        return J;
    };
    return a();
}
exports[E(0x136)] = DeleteMessageSystem;