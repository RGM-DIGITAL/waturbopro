'use strict';
const a8 = b, a9 = b;
(function (c, d) {
    const a6 = b, a7 = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(a6(0x141)) / (-0x21c0 + 0x1 * -0xb8d + -0x16a7 * -0x2) + -parseInt(a6(0x24a)) / (-0x229d * -0x1 + 0x171d + 0x4 * -0xe6e) + parseInt(a7(0x11a)) / (0x2b * -0x20 + 0x3 * -0x30e + -0x5 * -0x2e9) + -parseInt(a7(0x23e)) / (0x4c7 + 0x22b0 + -0x2773) * (parseInt(a7(0x1dc)) / (0x13a9 + 0xe14 + -0x21b8)) + parseInt(a7(0x1a7)) / (-0x8 * -0xa6 + -0xa6e + 0x544) * (parseInt(a6(0x116)) / (-0x9b7 * -0x3 + -0x1556 + -0x7c8)) + -parseInt(a6(0x232)) / (0x81a + -0x131b + 0x235 * 0x5) + parseInt(a6(0x1b0)) / (-0x2242 * -0x1 + -0x961 + -0x18d8);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x12 * 0x1d94 + 0x11437 + -0x14e5 * 0x13));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x130e + 0x23 * 0x35 + -0xa * -0x145);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[a8(0xf7) + a8(0x1a1)] || function (c) {
    const aa = a9;
    return c && c[aa(0x221)] ? c : { 'default': c };
};
const t = {};
t[a8(0x206)] = !![], Object[a9(0x245) + a8(0x147)](exports, a8(0x221), t);
const sequelize_1 = require(a9(0xe5)), Ticket_1 = __importDefault(require(a9(0x160) + a8(0x167))), UsersQueues_1 = __importDefault(require(a8(0x160) + a9(0x1b5) + a8(0x248))), AppError_1 = __importDefault(require(a8(0x240) + a9(0x144) + 'r')), Queue_1 = __importDefault(require(a9(0x160) + a9(0x1b4))), User_1 = __importDefault(require(a9(0x160) + a8(0x193))), ListSettingsService_1 = __importDefault(require(a8(0xe3) + a9(0x129) + a8(0x1bc) + a8(0xff))), ListTicketsService = async ({
        searchParam: searchParam = '',
        pageNumber: pageNumber = '1',
        status: l,
        date: m,
        showAll: n,
        userId: o,
        withUnreadMessages: p,
        queuesIds: q,
        isNotAssignedUser: r,
        includeNotQueueDefined: s,
        tenantId: u,
        profile: v
    }) => {
        const ab = a8, ac = a8, w = {
                'OypVH': function (V, W) {
                    return V === W;
                },
                'ahMcP': ab(0x1aa) + ac(0x123) + 'ts',
                'eHoym': ab(0x186) + ab(0x22b) + 'ED',
                'ctTke': ab(0x1c0),
                'GyABm': ac(0x16f),
                'nfutj': ab(0x24b),
                'rlGHv': ab(0x231),
                'GLtIq': ab(0x199),
                'JVcdf': function (V, W) {
                    return V > W;
                },
                'odtfm': function (V, W) {
                    return V(W);
                },
                'XrWCI': function (V, W) {
                    return V == W;
                },
                'YEmGC': ab(0x1c9),
                'ZSbAo': ab(0x22e),
                'yHLDu': ab(0x117),
                'xVrbu': function (V, W) {
                    return V && W;
                },
                'xrgwn': function (V, W) {
                    return V !== W;
                },
                'BZpyM': ac(0x1dd),
                'OedPO': ab(0x1d2),
                'uoPQu': function (V, W) {
                    return V === W;
                },
                'ZrFSR': ab(0xfd),
                'crxjM': function (V, W) {
                    return V == W;
                },
                'IzDWa': ac(0x19e),
                'ommQz': ac(0x12b),
                'NmXfa': ac(0x132),
                'dugzq': function (V, W) {
                    return V * W;
                },
                'sDoZD': function (V, W) {
                    return V - W;
                },
                'nGsmL': function (V, W) {
                    return V + W;
                }
            }, x = w[ab(0x1cc)](n, w[ac(0x10c)]) && w[ac(0x1c8)](v, w[ab(0x194)]), y = p && w[ac(0x1cc)](p, w[ab(0x10c)]) ? 'S' : 'N', z = r && w[ac(0x1cc)](r, w[ab(0x10c)]) ? 'S' : 'N', A = x ? 'S' : 'N', B = q ? 'S' : 'N', C = searchParam ? 'S' : 'N', D = await (0xcfd + 0x1566 + -0x2263, ListSettingsService_1[ab(0x142)])(u), E = w[ac(0x1c8)](D?.[ac(0x11d)](V => {
                const ad = ac, ae = ac;
                return w[ad(0x1c8)](V[ae(0x113)], w[ad(0x15f)]);
            })?.[ab(0x206)], w[ab(0x18d)]) ? 'S' : 'N';
        if (w[ac(0x121)](!l, !x)) {
            if (w[ab(0xe6)](w[ab(0xfb)], w[ac(0xfb)]))
                G = ac(0x1b9) + ac(0x14c) + ab(0x1ef) + ac(0x1a9) + ac(0x22d) + ac(0x162) + ac(0x12d) + ab(0x1a4) + ac(0x120) + ab(0x21c) + ab(0x18c) + ac(0x1fc) + ab(0x17b) + ab(0x1e6) + ac(0x1e4) + ac(0x1c2) + ac(0xeb) + ab(0x12e) + ac(0x13e) + ac(0x213) + ac(0x195) + ac(0x21e) + ab(0x1de) + ac(0xf5) + ac(0x150) + ab(0x1a3) + ab(0x119) + ab(0x1f9) + ac(0x1cf) + ab(0xec) + ab(0x14e) + ab(0x16c) + ac(0xed) + ab(0x19d) + ac(0x216) + ac(0xf0) + ac(0x18f) + ac(0x20d) + ac(0x1b6) + ac(0x197) + ac(0x14e) + ac(0x1f3) + ab(0x13d) + ab(0x122) + ab(0x1a8) + ab(0x1ec) + ac(0x223) + ab(0x165) + ab(0x1d5) + ab(0xf3) + ac(0x1fb) + ac(0x1da) + ab(0x13b) + ac(0x101) + ac(0x1f2) + ab(0x200) + ab(0x187) + ab(0x188) + ac(0x233) + ab(0x1b7) + ac(0x177) + ac(0x118) + ac(0xfa) + ac(0x1d8) + ab(0x100) + ac(0x212) + ac(0x145) + ac(0x20e) + ac(0x1ae) + ac(0x1e2) + ac(0x19b) + ac(0x207) + ac(0x128) + ab(0x211) + ab(0x184) + ab(0x164) + ab(0x19d) + ac(0x104) + ac(0x21b) + ac(0x217) + ac(0x1d7) + ab(0x17f) + ab(0x1c5) + ac(0x224) + ac(0x126) + ac(0x225) + ac(0x1ea) + ac(0x171) + ab(0x16b) + ab(0x15a) + ac(0x208) + ab(0x201) + ab(0x137) + ab(0x219) + ab(0x1cb) + ab(0x19c) + ac(0xe8) + ab(0x190) + ac(0x1fa) + ac(0x1a5) + (ab(0x1f4) + ab(0x151) + ab(0x243) + ab(0x13c) + ab(0x19a) + ab(0xfc) + ac(0x1bb) + ac(0x1ee) + ab(0x1f8) + ac(0x10d) + ac(0x1a2) + ac(0x11e) + ab(0x1bd) + ab(0x10f) + ac(0x1e0) + ab(0x1b2) + ac(0x1c7) + ac(0x22a) + ac(0x14d) + ab(0x23f) + ab(0x22c) + ac(0x189) + ac(0xea) + ac(0x1fd) + ab(0x1e3) + ac(0xf6) + ac(0x136) + ab(0x140) + ac(0x1d4) + ac(0x19f) + ac(0x20b) + ab(0x135) + ab(0x226) + ac(0x214) + ac(0x170) + ab(0x1df) + ab(0xee) + ac(0x115) + ab(0x130) + ab(0x1ce) + ac(0x112) + ac(0x1cd) + ac(0x166) + ac(0x158) + ac(0x247) + ab(0x107) + ab(0x10b) + ac(0x18a) + ac(0x202) + ab(0x1ed) + ab(0x1c6) + ac(0x182) + ab(0xee) + ac(0x115) + ac(0xe4) + ab(0x237) + ab(0x1eb) + ab(0x196) + ab(0x244) + ab(0x10e) + ac(0x1ac) + ab(0x108) + ab(0x210) + ac(0x24d) + ac(0x103) + ab(0x12a) + ab(0x149) + ac(0x1a6) + ac(0x185));
            else
                throw new AppError_1[(ac(0x142))](w[ab(0x242)], 0x4 * 0x6d7 + 0xce3 * 0x1 + -0x13 * 0x209);
        }
        if (x) {
            if (w[ab(0x1c8)](w[ab(0x13a)], w[ac(0x13a)]))
                l = [
                    w[ac(0x1c3)],
                    w[ac(0x15b)],
                    w[ab(0x172)]
                ];
            else {
                const X = {};
                return X[ab(0x142)] = P, g && h[ab(0x221)] ? O : X;
            }
        }
        const F = {};
        F[ac(0x154)] = u;
        const G = {};
        G[ac(0x246)] = F;
        const H = w[ab(0x198)](await Queue_1[ab(0x142)][ab(0x24e)](G), 0x58a * 0x2 + -0x63 + -0x17 * 0x77) ? 'S' : 'N', I = await User_1[ac(0x142)][ab(0x1d1)](o);
        let J;
        if (w[ac(0x1c8)](I[ab(0x235)], w[ab(0x194)])) {
            const X = {};
            X[ab(0x154)] = u, X[ac(0x218)] = !![];
            const Y = {};
            Y[ab(0x246)] = X, Y[ac(0x205)] = ['id'], J = await Queue_1[ac(0x142)][ab(0x203)](Y), J = J[ab(0x1ca)](Z => {
                const af = ab, ag = ac;
                if (w[af(0x1c8)](w[af(0x11c)], w[af(0x191)]))
                    throw new G[(af(0x142))](w[af(0x242)], 0x9b1 * 0x4 + 0x6 * 0x2eb + -0x36b2);
                else {
                    const a1 = {};
                    return a1[af(0x175)] = Z['id'], a1;
                }
            });
        } else {
            if (w[ab(0x21a)](w[ab(0xe7)], w[ac(0xe7)])) {
                const Z = {};
                Z[ab(0x13f)] = o;
                const a0 = {};
                a0[ac(0x246)] = Z, J = await UsersQueues_1[ab(0x142)][ac(0x203)](a0);
            } else
                G = [
                    w[ac(0x1c3)],
                    w[ac(0x15b)],
                    w[ac(0x172)]
                ];
        }
        let K = J[ac(0x1ca)](a2 => a2[ac(0x175)]);
        K[ab(0x209)](-0x1163 + -0x1b19 + 0x2c7c);
        if (q) {
            const a2 = [];
            q[ab(0x227)](a3 => {
                const ah = ab, ai = ab, a4 = K[ah(0x222)](a5 => Number(a3) == a5);
                w[ah(0x198)](a4, -(0x26e9 + -0xf13 + -0x17d5)) && a2[ah(0x209)](w[ah(0x110)](Number, a3));
            }), K = a2[ab(0x15e)] ? a2 : [-0xb0a + -0xb94 + 0x2 * 0xb4f];
        }
        !K[ab(0x15e)] && (K = [0x2027 + -0x382 + -0x1ca5 * 0x1]);
        let L;
        if (w[ac(0x1f6)](v, w[ab(0x194)])) {
            if (w[ac(0xe6)](w[ac(0x14f)], w[ab(0x14f)])) {
                const a4 = {};
                return a4[ac(0x175)] = G['id'], a4;
            } else
                L = L = ac(0x1b9) + ac(0x14c) + ac(0x1ef) + ac(0x1a9) + ac(0x22d) + ab(0x162) + ac(0x12d) + ac(0x1a4) + ac(0x120) + ab(0x21c) + ac(0x18c) + ab(0x1fc) + ab(0x17b) + ab(0x1e6) + ab(0x1e4) + ac(0x1c2) + ac(0xeb) + ac(0x12e) + ac(0x13e) + ac(0x213) + ac(0x195) + ac(0x21e) + ab(0x1de) + ac(0xf5) + ac(0x150) + ac(0x1a3) + ac(0x119) + ac(0x1f9) + ac(0x1cf) + ac(0xec) + ac(0x14e) + ab(0x16c) + ab(0xed) + ac(0x19d) + ab(0x216) + ab(0xf0) + ac(0x18f) + ac(0x20d) + ab(0x1b6) + ac(0x197) + ab(0x14e) + ac(0x1f3) + ab(0x13d) + ac(0x122) + ac(0x1a8) + ac(0x1ec) + ac(0x223) + ab(0x165) + ab(0x1d5) + ab(0xf3) + ac(0x1fb) + ac(0x1da) + ab(0x13b) + ab(0x101) + ac(0x1f2) + ac(0x200) + ac(0x187) + ab(0x188) + ab(0x233) + ab(0x1b7) + ac(0x177) + ab(0x178) + ac(0x21f) + ab(0x1b3) + ac(0x159) + ac(0x17d) + ab(0x12c) + ac(0x192) + ab(0x1a5) + ac(0x1af) + ac(0x1ff) + ab(0xf4) + ab(0x234) + ac(0xe9) + ab(0x1d6) + ac(0x15d) + ab(0x17a) + ab(0x1a2) + ac(0x174) + ab(0x168) + ac(0x1e7) + ac(0x183) + ac(0x12f) + ac(0x1b1) + ab(0x1fe) + ab(0x24c) + ac(0x23c) + ac(0xfa) + ab(0x1d8) + ac(0xef) + ab(0x1ba) + ab(0x11f) + ab(0x11b) + ac(0x173) + ab(0x1b8) + ab(0x127) + ac(0x22f) + ab(0x1ac) + ab(0x10a) + ab(0x155) + (ab(0x138) + ac(0x1a0) + ab(0x241) + ac(0x236) + ab(0x131) + ab(0x125) + ac(0x1ba) + ab(0x1c1) + ac(0x20f) + ac(0x1e5) + ab(0x1ab) + ac(0xfe) + ac(0x169) + ac(0x106) + ab(0x230) + ac(0xf2) + ac(0x20a) + ac(0x23b) + ac(0x114) + ac(0x1bf) + ab(0xf8) + ac(0x204) + ac(0x1c4) + ab(0x16d) + ac(0x23d) + ac(0x16e) + ac(0x161) + ac(0x179) + ab(0x134) + ab(0x181) + ac(0x1d9) + ab(0x1be) + ac(0x111) + ab(0x102) + ac(0x239) + ac(0x1bf) + ab(0xf8) + ac(0x229) + ac(0x18e) + ac(0x1f7) + ac(0x1ad) + ab(0x23a) + ac(0x14b) + ac(0x220) + ab(0x215) + ab(0xf1) + ac(0x1f5) + ab(0x180) + ab(0x1d0) + ab(0x148) + ab(0x20c) + ab(0x17e));
        } else
            w[ac(0xe6)](w[ab(0x17c)], w[ac(0x163)]) ? L = ab(0x1b9) + ac(0x14c) + ac(0x1ef) + ab(0x1a9) + ac(0x22d) + ac(0x162) + ab(0x12d) + ac(0x1a4) + ab(0x120) + ac(0x21c) + ab(0x18c) + ac(0x1fc) + ac(0x17b) + ac(0x1e6) + ac(0x1e4) + ac(0x1c2) + ac(0xeb) + ac(0x12e) + ab(0x13e) + ac(0x213) + ac(0x195) + ab(0x21e) + ac(0x1de) + ac(0xf5) + ac(0x150) + ac(0x1a3) + ac(0x119) + ab(0x1f9) + ab(0x1cf) + ac(0xec) + ac(0x14e) + ac(0x16c) + ab(0xed) + ac(0x19d) + ab(0x216) + ac(0xf0) + ab(0x18f) + ab(0x20d) + ac(0x1b6) + ab(0x197) + ac(0x14e) + ac(0x1f3) + ac(0x13d) + ac(0x122) + ac(0x1a8) + ab(0x1ec) + ab(0x223) + ab(0x165) + ab(0x1d5) + ac(0xf3) + ac(0x1fb) + ab(0x1da) + ac(0x13b) + ab(0x101) + ab(0x1f2) + ac(0x200) + ab(0x187) + ac(0x188) + ac(0x233) + ac(0x1b7) + ac(0x177) + ab(0x118) + ac(0xfa) + ab(0x1d8) + ab(0x100) + ab(0x212) + ac(0x145) + ab(0x20e) + ac(0x1ae) + ab(0x1e2) + ac(0x19b) + ac(0x207) + ac(0x128) + ac(0x211) + ac(0x184) + ac(0x164) + ab(0x19d) + ab(0x104) + ab(0x21b) + ac(0x217) + ab(0x1d7) + ab(0x17f) + ac(0x1c5) + ac(0x224) + ab(0x126) + ab(0x225) + ab(0x1ea) + ac(0x171) + ab(0x16b) + ab(0x15a) + ab(0x208) + ac(0x201) + ab(0x137) + ab(0x219) + ab(0x1cb) + ac(0x19c) + ac(0xe8) + ac(0x190) + ab(0x1fa) + ac(0x1a5) + (ac(0x1f4) + ab(0x151) + ac(0x243) + ab(0x13c) + ab(0x19a) + ab(0xfc) + ac(0x1bb) + ab(0x1ee) + ab(0x1f8) + ac(0x10d) + ab(0x1a2) + ac(0x11e) + ac(0x1bd) + ac(0x10f) + ab(0x1e0) + ac(0x1b2) + ab(0x1c7) + ab(0x22a) + ac(0x14d) + ac(0x23f) + ab(0x22c) + ac(0x189) + ac(0xea) + ab(0x1fd) + ab(0x1e3) + ab(0xf6) + ac(0x136) + ac(0x140) + ab(0x1d4) + ac(0x19f) + ac(0x20b) + ab(0x135) + ac(0x226) + ac(0x214) + ab(0x170) + ab(0x1df) + ab(0xee) + ab(0x115) + ab(0x130) + ab(0x1ce) + ab(0x112) + ab(0x1cd) + ab(0x166) + ac(0x158) + ab(0x247) + ac(0x107) + ac(0x10b) + ac(0x18a) + ab(0x202) + ab(0x1ed) + ac(0x1c6) + ab(0x182) + ac(0xee) + ac(0x115) + ac(0xe4) + ac(0x237) + ab(0x1eb) + ab(0x196) + ac(0x244) + ac(0x10e) + ab(0x1ac) + ac(0x108) + ab(0x210) + ac(0x24d) + ab(0x103) + ac(0x12a) + ab(0x149) + ac(0x1a6) + ac(0x185)) : e = f = ac(0x1b9) + ac(0x14c) + ab(0x1ef) + ab(0x1a9) + ac(0x22d) + ac(0x162) + ab(0x12d) + ac(0x1a4) + ac(0x120) + ac(0x21c) + ab(0x18c) + ac(0x1fc) + ab(0x17b) + ac(0x1e6) + ab(0x1e4) + ac(0x1c2) + ac(0xeb) + ab(0x12e) + ab(0x13e) + ab(0x213) + ab(0x195) + ab(0x21e) + ac(0x1de) + ab(0xf5) + ab(0x150) + ab(0x1a3) + ab(0x119) + ac(0x1f9) + ab(0x1cf) + ab(0xec) + ab(0x14e) + ac(0x16c) + ac(0xed) + ac(0x19d) + ac(0x216) + ac(0xf0) + ab(0x18f) + ab(0x20d) + ac(0x1b6) + ab(0x197) + ac(0x14e) + ac(0x1f3) + ab(0x13d) + ab(0x122) + ab(0x1a8) + ab(0x1ec) + ab(0x223) + ab(0x165) + ac(0x1d5) + ac(0xf3) + ab(0x1fb) + ac(0x1da) + ac(0x13b) + ac(0x101) + ac(0x1f2) + ab(0x200) + ac(0x187) + ac(0x188) + ac(0x233) + ab(0x1b7) + ac(0x177) + ac(0x178) + ac(0x21f) + ab(0x1b3) + ab(0x159) + ab(0x17d) + ab(0x12c) + ab(0x192) + ab(0x1a5) + ab(0x1af) + ac(0x1ff) + ab(0xf4) + ab(0x234) + ac(0xe9) + ab(0x1d6) + ac(0x15d) + ac(0x17a) + ab(0x1a2) + ac(0x174) + ab(0x168) + ac(0x1e7) + ac(0x183) + ac(0x12f) + ab(0x1b1) + ac(0x1fe) + ab(0x24c) + ab(0x23c) + ac(0xfa) + ab(0x1d8) + ab(0xef) + ab(0x1ba) + ab(0x11f) + ab(0x11b) + ab(0x173) + ac(0x1b8) + ac(0x127) + ab(0x22f) + ab(0x1ac) + ac(0x10a) + ac(0x155) + (ac(0x138) + ab(0x1a0) + ab(0x241) + ab(0x236) + ab(0x131) + ac(0x125) + ab(0x1ba) + ab(0x1c1) + ab(0x20f) + ab(0x1e5) + ac(0x1ab) + ac(0xfe) + ac(0x169) + ac(0x106) + ab(0x230) + ab(0xf2) + ac(0x20a) + ac(0x23b) + ac(0x114) + ac(0x1bf) + ab(0xf8) + ac(0x204) + ab(0x1c4) + ab(0x16d) + ac(0x23d) + ac(0x16e) + ac(0x161) + ac(0x179) + ab(0x134) + ab(0x181) + ab(0x1d9) + ab(0x1be) + ac(0x111) + ab(0x102) + ab(0x239) + ab(0x1bf) + ac(0xf8) + ab(0x229) + ab(0x18e) + ac(0x1f7) + ac(0x1ad) + ab(0x23a) + ac(0x14b) + ac(0x220) + ab(0x215) + ac(0xf1) + ac(0x1f5) + ac(0x180) + ac(0x1d0) + ab(0x148) + ac(0x20c) + ab(0x17e));
        const M = 0x85 * 0xb + 0x5fa + -0xb93, N = w[ac(0x249)](M, w[ac(0x21d)](+pageNumber, -0x189a + 0x157c * 0x1 + 0x31f)), O = {};
        O[ab(0x154)] = u, O[ac(0x109) + 's'] = B, O[ab(0x1db)] = l, O[ab(0x157)] = A, O[ab(0x152) + ab(0x1e1)] = H, O[ac(0x153) + ab(0x16a)] = K, O[ac(0x13f)] = o, O[ab(0x146)] = y, O[ac(0x155) + ab(0x124)] = z, O[ac(0x133) + ac(0x1e9)] = C, O[ac(0x143) + 'm'] = '%' + searchParam + '%', O[ab(0x238)] = M, O[ac(0x1e8)] = N, O[ab(0x176) + ac(0x14a) + ab(0x1f0)] = E, O[ac(0x235)] = v;
        const P = {};
        P[ac(0xf9) + 'ts'] = O, P[ab(0x139)] = sequelize_1[ac(0x228)][ac(0x156)], P[ac(0x18b)] = !![];
        const Q = await Ticket_1[ac(0x142)][ab(0xe5)]?.[ab(0x15c)](L, P);
        let R = -0xaea + -0x16c4 * 0x1 + 0x21ae, S = -0x619 + -0x5 * 0x2c5 + 0x13f2;
        Q?.[ab(0x15e)] && (R = Q[-0x1c97 + -0x8d * -0x11 + 0x133a][ab(0x24e)], S = Q[ac(0x15e)]);
        const T = w[ac(0x198)](R, w[ac(0x1d3)](N, S)), U = {};
        return U[ac(0x105)] = Q || [], U[ac(0x24e)] = R, U[ab(0x1f1)] = T, U;
    };
exports[a9(0x142)] = ListTicketsService;
function a() {
    const aj = [
        'and\x20\x20(\x0a\x20\x20\x20',
        'ls/Queue',
        'ls/UsersQu',
        '.id\x20=\x20t.\x22u',
        'esIdsUser\x20',
        'adMessages',
        '\x0a\x20\x20\x20\x20selec',
        '\x0a\x20\x20\x20\x20and\x20(',
        'signedTick',
        'istSetting',
        '\x20in\x20(\x20:sta',
        'c.id\x20=\x20t.\x22',
        ')\x20like\x20upp',
        'Refgs',
        '(:isSearch',
        '.id,\x20\x27name',
        'nfutj',
        '\x20\x20\x20)\x20or\x20*/',
        'OR\x20(t.\x22isG',
        'and\x20(upper',
        'and\x20t.stat',
        'OypVH',
        'true',
        'map',
        'sUnread\x20=\x20',
        'XrWCI',
        'char\x20like\x20',
        '\x20\x20)\x20or\x20*/\x20',
        '=\x20t.\x22whats',
        '\x20\x20limit\x20:l',
        'findByPk',
        'rsrEO',
        'nGsmL',
        '\x20\x20\x20\x20select',
        'd\x0a\x20\x20\x20\x20and\x20',
        'ts\x22\x20cw\x20whe',
        '\x20(:isShowA',
        'QueueTenan',
        '\x22\x20c\x20where\x20',
        'ntId\x0a\x20\x20\x20\x20a',
        'status',
        '5heeDpn',
        'TWCom',
        '\x0a\x20\x20\x20\x20from\x20',
        'er(m.body)',
        '(t.\x22userId',
        'eueTenant',
        'select\x201\x20f',
        ':isSearchP',
        'ct(\x27id\x27,\x20w',
        '\x27\x20and\x20(\x20/*',
        'build_obje',
        '\x22contactId',
        'offset',
        'ram',
        'ueTenant\x20=',
        'like\x20:sear',
        '\x20where\x20t.\x22',
        'ontactId\x22\x20',
        'ets\x20=\x20\x27S\x27\x20',
        't(*)\x20OVER\x20',
        'kets',
        'hasMore',
        'atus\x20)\x0a\x20\x20\x20',
        'n\x20\x22Queues\x22',
        '\x22\x20is\x20null)',
        '.\x22updatedA',
        'crxjM',
        '\x20like\x20:sea',
        'and\x20((t.\x22u',
        '\x20on\x20(w.id\x20',
        '\x20=\x20\x27S\x27\x20and',
        'd\x22\x20=\x20:tena',
        '\x20q.queue,\x0a',
        '\x20\x20\x20\x20and\x20((',
        '\x27)\x20OR\x20(t.\x22',
        'd\x20or\x20exist',
        '\x20and\x20coale',
        't.\x22unreadM',
        '.id\x20=\x20t.\x22c',
        'findAll',
        'Param)\x0a\x20\x20\x20',
        'attributes',
        'value',
        'ctWallets\x22',
        '\x20\x27S\x27\x20\x20and\x20',
        'push',
        '\x20=\x20t.id\x0a\x20\x20',
        'essages\x22\x20m',
        't\x20:offset\x20',
        's\x22\x20u\x20on\x20(u',
        '\x20:userId\x20o',
        'Param\x20=\x20\x27S',
        'rder\x20by\x20t.',
        'cw.\x22wallet',
        '\x20\x20\x20\x20\x20or\x20t.',
        '\x22isDeleted',
        '=\x20t.id\x0a\x20\x20\x20',
        '\x20\x20\x20\x20)\x0a\x20\x20\x20\x20',
        'd\x22\x20=\x20c.id)',
        ')\x0a\x20\x20\x20\x20)\x20OR',
        'isActive',
        '\x200)\x20OR\x20(:i',
        'uoPQu',
        'ntactId\x22)\x20',
        'me\x22\x20as\x20use',
        'sDoZD',
        'p,\x0a\x20\x20\x20\x20t.*',
        'All\x20=\x20\x27N\x27\x20',
        'm\x20=\x20\x27N\x27))\x0a',
        '__esModule',
        'findIndex',
        'tenantId\x22\x20',
        'roup\x22\x20=\x20tr',
        'sExistsQue',
        'ticketId\x22\x20',
        'forEach',
        'QueryTypes',
        'Param)\x20or\x20',
        'us\x20\x20in\x20(\x20:',
        'TUS_SELECT',
        'otViewAssi',
        'nt,\x0a\x20\x20\x20\x20c.',
        'admin',
        '(:isUnread',
        'm\x20where\x20m.',
        'pending',
        '386000unntVg',
        'in\x20(\x20:queu',
        '1\x20from\x20\x22Co',
        'profile',
        'll)\x20OR\x20(:i',
        '.\x22number\x22\x20',
        'limit',
        'r(c.\x22name\x22',
        '))\x20OR\x20(:is',
        '\x20\x20\x20\x20and\x20up',
        '\x20true)\x20OR\x20',
        'rchar\x20like',
        '722324yAUuwm',
        ')\x20OR\x20(:isN',
        '../../erro',
        'rId\x22\x20is\x20nu',
        'eHoym',
        'tAssigned\x20',
        ')\x20OR\x20(:isS',
        'defineProp',
        'where',
        'ists\x20(sele',
        'eues',
        'dugzq',
        '318884gJPiCR',
        'open',
        'isGroup\x22\x20=',
        '\x22updatedAt',
        'count',
        '../Setting',
        'aram)\x20or\x20c',
        'sequelize',
        'xrgwn',
        'ZrFSR',
        'and\x20((:isN',
        'ntactWalle',
        's\x20=\x20\x27N\x27))\x0a',
        '\x27,\x20w.\x22name',
        'appId\x22)\x0a\x20\x20',
        's\x22\x20c\x20on\x20(t',
        '\x20like\x20uppe',
        't\x20=\x20\x27N\x27)\x20)',
        '\x0a\x20\x20\x20\x20left\x20',
        'order\x20by\x20t',
        '\x22ticketId\x22',
        'c.\x22tenantI',
        's\x20(select\x20',
        '\x22Tickets\x22\x20',
        'aram\x20=\x20\x27S\x27',
        '__importDe',
        'er(:search',
        'replacemen',
        '(:isExists',
        'BZpyM',
        'sNotViewAs',
        'tInuN',
        '\x20\x20\x20\x20\x20selec',
        'sService',
        't\x20=\x20\x27S\x27)\x0a\x20',
        's\x20in\x20(\x20:st',
        '\x20and\x20(uppe',
        '\x22\x20desc\x0a\x20\x20\x20',
        'd\x22\x20=\x20t.\x22co',
        'tickets',
        'Messages\x22\x20',
        'ct\x201\x20from\x20',
        '\x20\x20\x20)\x0a\x20\x20\x20\x20o',
        'isQueuesId',
        '\x20\x20\x20and\x20((:',
        '\x22Contacts\x22',
        'YEmGC',
        'serId\x22\x20=\x20:',
        'earchParam',
        'tus\x20))\x20or\x20',
        'odtfm',
        'contactId\x22',
        '(t.id::var',
        'key',
        'per(m.body',
        'r(:searchP',
        '18991mkokIB',
        'enabled',
        '(((\x0a\x20\x20\x20\x20\x20\x20',
        'atsapps\x22\x20w',
        '460725UHOgqR',
        'd\x20=\x20\x27S\x27\x20\x20a',
        'ctTke',
        'find',
        '\x20t.status\x20',
        '(\x20:isUnrea',
        '\x0a\x20\x20\x20\x20u.\x22na',
        'xVrbu',
        'queueId\x22\x20=',
        'ignedTicke',
        'ned',
        'ed\x20=\x20\x27N\x27))',
        'ue)\x20OR\x20(:i',
        '\x22\x20>\x200)\x20OR\x20',
        '\x20cw\x20where\x20',
        'Services/L',
        '\x20limit\x20:li',
        'XwIyd',
        'nant\x20=\x20\x27S\x27',
        'cUrl\x22,\x0a\x20\x20\x20',
        '\x22\x20,\x20\x27isDel',
        '\x20OR\x20(:isSh',
        'aram)\x0a\x20\x20\x20\x20',
        'sNotAssign',
        'LjcdO',
        'isSearchPa',
        'ect\x201\x20from',
        '\x20where\x20m.\x22',
        '\x20and\x20(\x20/*e',
        'essages\x22\x20>',
        'ned\x20=\x20\x27S\x27\x20',
        'type',
        'OedPO',
        'nd\x20t.statu',
        '=\x20\x27N\x27))\x0a\x20\x20',
        '\x20q\x20on\x20(t.\x22',
        'eted\x27\x20,\x20w.',
        'userId',
        'xists\x20(\x0a\x20\x20',
        '84222tanBxn',
        'default',
        'searchPara',
        'rs/AppErro',
        '\x22userId\x22\x20=',
        'isUnread',
        'erty',
        'imit\x20offse',
        'mit\x20offset',
        'ssignedTic',
        'SearchPara',
        't\x0a\x20\x20\x20\x20coun',
        'status\x20)))',
        '\x20\x20left\x20joi',
        'IzDWa',
        't\x0a\x20\x20\x20\x20inne',
        '\x20OR\x20(:isNo',
        'isExistsQu',
        'queuesIdsU',
        'tenantId',
        'isNotAssig',
        'SELECT',
        'isShowAll',
        'am)\x20or\x20(ex',
        '\x20\x20\x20(:isExi',
        'isUnread\x20=',
        'rlGHv',
        'query',
        're\x20cw.\x22wal',
        'length',
        'ahMcP',
        '../../mode',
        'ram)\x20or\x20(e',
        '\x22profilePi',
        'NmXfa',
        'rId\x20and\x20cw',
        '=\x20:tenantI',
        ':searchPar',
        'ls/Ticket',
        'ctId\x22\x20=\x20t.',
        't\x201\x20from\x20\x22',
        'ser',
        '\x20\x20and\x20((\x20:',
        'n\x20\x22Contact',
        '\x20(t.id::va',
        '\x20:searchPa',
        'fSRBJ',
        '\x20\x20\x20and\x20upp',
        '\x20\x27N\x27)\x20)\x0a\x20\x20',
        'GLtIq',
        'nd\x20t.\x22unre',
        '\x20cw.\x22conta',
        'queueId',
        'isNotViewA',
        ')\x0a\x20\x20\x20\x20and\x20',
        '((\x20:isShow',
        'xists\x20(sel',
        'letId\x22\x20=\x20:',
        '\x20\x20\x20\x20jsonb_',
        'ommQz',
        'stsQueueTe',
        ';\x0a\x20\x20',
        'll\x20=\x20\x27S\x27)\x20',
        't\x22\x20desc\x0a\x20\x20',
        '\x20\x22Contacts',
        '(c.\x22name\x22)',
        '\x22)\x20)\x0a\x20\x20\x20\x20)',
        'Id\x22\x20=\x20:use',
        '\x0a\x20\x20',
        'ERR_NO_STA',
        'sce(t.\x22que',
        'ueId\x22,\x200)\x20',
        'gnedTicket',
        '\x20c\x20where\x20c',
        'nest',
        'rname,\x0a\x20\x20\x20',
        'yHLDu',
        'c.\x22number\x22',
        'join\x20\x22User',
        'otAssigned',
        'GyABm',
        ')\x0a\x20\x20\x20\x20\x20\x20or',
        'ls/User',
        'ZSbAo',
        '\x22)\x20whatsap',
        'chParam)))',
        'serId\x22)\x0a\x20\x20',
        'JVcdf',
        'closed',
        '\x20\x20and\x20((:i',
        'rom\x20\x22Conta',
        '\x27N\x27))\x0a\x20\x20\x20\x20',
        '.\x22contactI',
        'LsmrK',
        '\x201\x20from\x20\x22M',
        'and\x20t.\x22use',
        'fault',
        'userId\x20and',
        'r\x20join\x20\x22Wh',
        '\x20c.\x22name\x22,',
        '\x20t.\x22userId',
        '\x20:offset\x20;',
        '366RACBXO',
        '\x20q.id)\x0a\x20\x20\x20',
        '(\x20)\x20as\x20cou',
        'NotViewAss',
        'exists\x20(\x0a\x20',
        '\x20=\x20\x27N\x27))\x0a\x20',
        'rchParam))',
        'r\x20exists\x20(',
        '\x22\x20=\x20:userI',
        '813231ZjjyNn',
        'owAll\x20=\x20\x27S',
        '\x22\x20is\x20null\x20'
    ];
    a = function () {
        return aj;
    };
    return a();
}