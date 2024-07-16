'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0x153)) / (0x1a5c + -0xd2a + -0xd31) * (-parseInt(o(0x154)) / (0x347 * 0x1 + 0xe8b + -0x11d0)) + parseInt(n(0x16e)) / (0x2fa + -0x261c + 0x2325) * (-parseInt(n(0x143)) / (-0x1185 + 0x14e3 * -0x1 + 0x266c)) + parseInt(o(0x163)) / (-0xe35 + -0x257f * -0x1 + -0x1745) * (-parseInt(n(0x16c)) / (-0x3b * 0x2b + 0x2 * 0x209 + 0x5dd)) + parseInt(o(0x157)) / (0x1 * -0x4c + 0xeb5 + -0xe62) + parseInt(n(0x155)) / (0x2 * 0xb3b + 0x1b55 + -0x31c3) * (-parseInt(o(0x14e)) / (0x163c + -0x26a1 + -0x3 * -0x57a)) + -parseInt(o(0x16a)) / (0xdbb + 0x897 * 0x2 + -0x1edf) * (-parseInt(o(0x146)) / (0x1 * 0x2647 + -0x70a + 0x21 * -0xf2)) + -parseInt(o(0x168)) / (0xbb2 + -0x20 * 0xe + -0x9e6);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x163 * -0xbbc + 0x9340c + 0x3514e * -0x5));
var __importDefault = this && this[p(0x14c) + p(0x151)] || function (c) {
    const r = p;
    return c && c[r(0x152)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x322 + -0xcf7 + 0xb16);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[q(0x167)] = !![], Object[q(0x149) + p(0x15d)](exports, p(0x152), k);
function a() {
    const u = [
        'NHCoK',
        'value',
        '5379456hCfqbW',
        'axios',
        '10tqjBcv',
        'tOZDv',
        '222aBgQCC',
        '../../util',
        '8994XVrJXP',
        'post',
        'contacts',
        'D360-API-K',
        '516ulRtoT',
        'wait',
        'error',
        '5647015NTnFHo',
        'T_CONTACTS',
        'url',
        'defineProp',
        'blocking',
        'applicatio',
        '__importDe',
        'logger',
        '5124258XRbTQY',
        'rs/AppErro',
        'force_chec',
        'fault',
        '__esModule',
        '15279oLipEX',
        '122svdFCf',
        '16sZYrZe',
        '360_NOT_GE',
        '7955024rUhAiK',
        'n/json',
        'method',
        'Content-Ty',
        'data',
        '/v1/contac',
        'erty',
        'vqhHQ',
        'headers',
        '../../erro',
        's/logger',
        'default',
        '3460XYlPZZ',
        'API_URL_36',
        'env'
    ];
    a = function () {
        return u;
    };
    return a();
}
const axios_1 = __importDefault(require(p(0x169))), AppError_1 = __importDefault(require(p(0x160) + q(0x14f) + 'r')), logger_1 = require(q(0x16d) + q(0x161)), CheckContact = async ({
        contacts: e,
        apiKey: f
    }) => {
        const s = q, t = p, g = {};
        g[s(0x16b)] = s(0x16f), g[t(0x166)] = t(0x144), g[s(0x15e)] = s(0x14b) + t(0x158);
        const h = g, i = process[t(0x165)][t(0x164) + '0'] + (t(0x15c) + 'ts');
        try {
            const j = {};
            j[s(0x159)] = h[s(0x16b)], j[t(0x148)] = i, j[s(0x15b)] = {}, j[s(0x15f)] = {}, j[s(0x15b)][s(0x14a)] = h[s(0x166)], j[s(0x15b)][s(0x150) + 'k'] = !![], j[s(0x15b)][t(0x141)] = e, j[s(0x15f)][t(0x142) + 'EY'] = f, j[s(0x15f)][t(0x15a) + 'pe'] = h[s(0x15e)];
            const l = await (-0x3dd + -0xa66 + 0xe43, axios_1[s(0x162)])(j);
            return l[s(0x15b)];
        } catch (m) {
            logger_1[t(0x14d)][t(0x145)](m);
            throw new AppError_1[(t(0x162))](t(0x156) + t(0x147) + ':\x20' + m);
        }
    };
exports[q(0x162)] = CheckContact;