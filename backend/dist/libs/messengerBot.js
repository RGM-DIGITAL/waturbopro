'use strict';
const M = b, N = b;
(function (c, d) {
    const K = b, L = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(K(0x155)) / (0x6 * 0x467 + 0x1e * -0x129 + 0x133 * 0x7) * (-parseInt(L(0x16b)) / (-0x20dd + 0x1 * 0x245b + -0x37c)) + parseInt(K(0x182)) / (0xbf5 + 0x1f4c + -0x2b3e) + -parseInt(K(0x15b)) / (-0x441 + -0x4f * -0x63 + -0xd24 * 0x2) + parseInt(L(0x15e)) / (0x2109 + -0xc25 * 0x1 + -0x14df) + parseInt(K(0x162)) / (-0x11 * -0x16d + 0x1ed * -0x2 + -0x145d * 0x1) + parseInt(K(0x17e)) / (-0x1 * 0xcd0 + -0x2597 * -0x1 + -0x9 * 0x2c0) * (-parseInt(L(0x17b)) / (-0x1934 + 0x2 * -0x1079 + -0x3a2e * -0x1)) + -parseInt(L(0x16a)) / (-0x5cf + -0x6a6 + 0x52 * 0x27) * (-parseInt(K(0x17c)) / (0x2e * 0x6c + -0x38b * -0x7 + 0x2c2b * -0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x78f3e + 0x183 * -0x8bd + 0x1dab72 * 0x1));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x7f4 + -0xa * -0x70 + 0x2 * -0x581);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[M(0x172) + N(0x15a)] || function (c) {
    const O = N;
    return c && c[O(0x173)] ? c : { 'default': c };
};
const I = {};
I[M(0x152)] = !![], Object[M(0x181) + N(0x175)](exports, M(0x173), I), exports[N(0x154) + N(0x17a)] = exports[N(0x15d) + N(0x156)] = void (-0x21a * 0x9 + -0xd4b + 0x2035);
function a() {
    const S = [
        'gerBot',
        'env',
        '../errors/',
        'appId',
        'fault',
        '3668092yJQsRc',
        'process',
        'initMessen',
        '2858705pIazFs',
        'PP_ID',
        'Not\x20token\x20',
        'configured',
        '4336152XNbpVe',
        'VVtQX',
        'egxJb',
        'api-messen',
        'XBIsd',
        'lLpaE',
        'FACEBOOK_A',
        'findIndex',
        '63FxsAji',
        '2htqoUx',
        'or\x20|\x20Error',
        'error',
        'ger',
        'tokenAPI',
        'accessToke',
        'logger',
        '__importDe',
        '__esModule',
        'oEGyO',
        'erty',
        'lient',
        'GceBf',
        'gerBot\x20err',
        'default',
        'erBot',
        '8iiTuJV',
        '1192130DWnWRA',
        'sQaHE',
        '4232879UakvsA',
        'push',
        '../utils/l',
        'defineProp',
        '2153088txQdJX',
        'MessengerC',
        'AppError',
        'ogger',
        'value',
        'messaging-',
        'getMesseng',
        '741607NJKPfk'
    ];
    a = function () {
        return S;
    };
    return a();
}
const messaging_api_messenger_1 = require(N(0x153) + M(0x165) + M(0x16e)), process_1 = __importDefault(require(N(0x15c))), AppError_1 = __importDefault(require(N(0x158) + M(0x184))), logger_1 = require(M(0x180) + N(0x185)), sessionsMessenger = [], initMessengerBot = async e => {
        const P = N, Q = M, f = {};
        f[P(0x167)] = P(0x160) + Q(0x161), f[P(0x17d)] = function (h, i) {
            return h === i;
        }, f[Q(0x164)] = function (h, i) {
            return h === i;
        }, f[P(0x166)] = Q(0x174), f[P(0x177)] = P(0x163);
        const g = f;
        try {
            if (g[P(0x164)](g[Q(0x166)], g[P(0x166)])) {
                const h = e[Q(0x16f)], i = process_1[P(0x179)][Q(0x157)][Q(0x168) + Q(0x15f)];
                if (!h)
                    throw new Error(g[Q(0x167)]);
                const j = {};
                j[Q(0x170) + 'n'] = h, j[Q(0x159)] = i;
                const k = new messaging_api_messenger_1[(Q(0x183)) + (Q(0x176))](j);
                k['id'] = e['id'];
                const l = sessionsMessenger[P(0x169)](m => m['id'] === e['id']);
                return g[P(0x164)](l, -(-0xb40 + -0xd * 0x96 + 0x12df)) ? (k['id'] = e['id'], sessionsMessenger[Q(0x17f)](k)) : (k['id'] = e['id'], sessionsMessenger[l] = k), k;
            } else {
                const n = {};
                return n[Q(0x179)] = j, g && h[P(0x173)] ? i : n;
            }
        } catch (n) {
            if (g[P(0x17d)](g[P(0x177)], g[Q(0x177)])) {
                logger_1[Q(0x171)][Q(0x16d)](P(0x15d) + P(0x178) + P(0x16c) + ':\x20' + n);
                throw new AppError_1[(Q(0x179))]('' + n, -0x1c80 + 0x1f * 0x67 + -0x1 * -0x119b);
            } else {
                const p = n[Q(0x16f)], q = o[Q(0x179)][Q(0x157)][P(0x168) + Q(0x15f)];
                if (!p)
                    throw new y(g[P(0x167)]);
                const r = {};
                r[P(0x170) + 'n'] = p, r[Q(0x159)] = q;
                const s = new q[(Q(0x183)) + (Q(0x176))](r);
                s['id'] = r['id'];
                const t = s[P(0x169)](J => J['id'] === z['id']);
                return g[Q(0x17d)](t, -(-0x1509 + 0xc4a + 0x8c0)) ? (s['id'] = z['id'], A[Q(0x17f)](s)) : (s['id'] = B['id'], C[t] = s), s;
            }
        }
    };
exports[M(0x15d) + M(0x156)] = initMessengerBot;
const getMessengerBot = c => {
    const R = M, d = sessionsMessenger[R(0x169)](e => e['id'] == c);
    return sessionsMessenger[d];
};
exports[M(0x154) + M(0x17a)] = getMessengerBot;