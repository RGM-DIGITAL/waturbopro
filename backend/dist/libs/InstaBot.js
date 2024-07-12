'use strict';
const L = b, M = b;
(function (c, d) {
    const J = b, K = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(J(0x93)) / (0x3c8 + 0x56 + -0x15f * 0x3) + parseInt(J(0x89)) / (-0x1b40 + -0x206d + -0x3 * -0x13e5) + parseInt(K(0xbd)) / (-0x1e94 + -0x1 * -0x2467 + -0x5d0) * (parseInt(K(0xbe)) / (-0x7 * 0x456 + -0x1 * 0xca0 + -0x2 * -0x157f)) + -parseInt(J(0xcc)) / (-0x235a + 0x16ce + 0xc91 * 0x1) + parseInt(K(0xc4)) / (0x1d7 * 0x12 + -0x4bb + -0x1c5d) * (parseInt(K(0xb4)) / (0x10bd + -0xee8 + -0x1ce)) + parseInt(K(0xdb)) / (0xf * 0x23 + 0x206e + 0x2273 * -0x1) + -parseInt(J(0xb8)) / (0x4bd + 0x116e + -0xb11 * 0x2) * (-parseInt(K(0xda)) / (0x191b + -0x121 + 0x17f * -0x10));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1e9c7 + 0x1aac8 + -0x2 * -0x2c22b));
var __importDefault = this && this[L(0xd2) + M(0xc9)] || function (c) {
    const N = L;
    return c && c[N(0xc1)] ? c : { 'default': c };
};
const H = {};
H[M(0xe7)] = !![], Object[M(0x90) + M(0xc8)](exports, M(0xc1), H), exports[L(0x8e) + M(0x8b)] = exports[M(0xcd) + 't'] = exports[L(0xc2) + 'ot'] = void (-0x20 + -0x26bd + -0x26dd * -0x1);
const instagram_private_api_1 = require(L(0xe3) + M(0xe6) + 'i'), instagram_mqtt_1 = require(L(0x84) + L(0xe1)), AppError_1 = __importDefault(require(L(0xd0) + L(0xd6))), logger_1 = require(L(0xd5) + L(0x81)), sessions = [], initInstaBot = async (f, g = 0x157f * 0x1 + 0x1f95 + 0x31f * -0x11) => {
        const O = L, P = L, h = {};
        h[O(0x94)] = O(0xe4) + O(0xab), h[P(0xce)] = function (k, l) {
            return k < l;
        }, h[O(0xa5)] = function (k, l) {
            return k !== l;
        }, h[P(0x95)] = O(0xd7), h[O(0xac)] = P(0x8f), h[O(0x8d)] = function (k, l) {
            return k || l;
        }, h[O(0xb2)] = function (k, l) {
            return k === l;
        }, h[P(0x91)] = function (k, l) {
            return k === l;
        }, h[O(0x8c)] = P(0xd1), h[O(0xb1)] = function (k, l) {
            return k === l;
        }, h[O(0xb0)] = P(0x86), h[P(0x8a)] = P(0x9c), h[P(0xdd)] = function (k, l) {
            return k === l;
        }, h[O(0xdf)] = P(0x88), h[O(0xbc)] = O(0x85) + O(0xc6) + O(0xa1) + O(0xa4) + P(0xa8) + '.';
        const i = h;
        let j = -0x3 * 0x7f7 + 0x9 * 0x38d + 0x102 * -0x8;
        while (i[O(0xce)](j, g)) {
            try {
                if (i[P(0xa5)](i[O(0x95)], i[O(0xac)])) {
                    let k, l;
                    const m = '@' + f[P(0xc5) + O(0xde)], n = f[P(0xae) + 'ey'];
                    if (i[P(0x8d)](!m, !n))
                        throw new Error(i[P(0x94)]);
                    f && f[O(0xa0)] && (k = JSON[P(0x9e)](f[P(0xa0)]));
                    const o = (-0x3 * -0x5d5 + 0xa6 * 0x33 + 0x35f * -0xf, instagram_mqtt_1[O(0xbb) + P(0xe5)])(new instagram_private_api_1[(P(0x96)) + 't']());
                    o['id'] = f['id'], o[O(0xe0)][P(0xa6) + P(0x97)](m), l = await o[P(0xb9)][O(0xb3)](m, n), o[P(0xe2) + 'in'] = l, process[P(0xd8)](async () => {
                        const Q = P, R = O;
                        await o[Q(0x98)][R(0xa2) + R(0xa3)]();
                    }), k = await o[P(0x9b) + 'e']();
                    const p = {};
                    p[P(0xa0)] = k, await f[P(0xcb)](p), await o[P(0xaa)][O(0xc0)]({ 'irisData': await o[O(0xb6)][O(0xb5) + 'x']()[O(0xc7)]() });
                    const q = {};
                    q[O(0x82) + P(0xbf)] = !![], await o[O(0xa7)][P(0xc0)](q);
                    const r = sessions[O(0xdc)](t => t['id'] === f['id']);
                    if (i[O(0xb2)](r, -(0xfdd * 0x1 + 0x14f7 + -0x24d3))) {
                        if (i[O(0x91)](i[P(0x8c)], i[O(0x8c)]))
                            o['id'] = f['id'], !o[P(0xe2) + 'in'] && (i[P(0xb1)](i[P(0xb0)], i[P(0x8a)]) ? f = g[P(0x9e)](h[P(0xa0)]) : o[O(0xe2) + 'in'] = await o[P(0xb9)][O(0xca) + 'r']()), sessions[P(0xd4)](o);
                        else {
                            const u = f[O(0xdc)](v => v['id'] === u);
                            return h[u];
                        }
                    } else
                        o['id'] = f['id'], !o[O(0xe2) + 'in'] && (o[O(0xe2) + 'in'] = await o[O(0xb9)][P(0xca) + 'r']()), sessions[r] = o;
                    return o;
                } else
                    k[l][P(0xb9)][P(0xc3)](), m[n][O(0xaa)][P(0x9d)](), o[p][O(0xa7)][P(0x9d)](), q[O(0xa9)](r, 0x1152 + -0x6 * -0x66f + -0x37eb);
            } catch (v) {
                if (i[P(0xdd)](i[O(0xdf)], i[O(0xdf)]))
                    logger_1[O(0xb7)][P(0x92)](O(0xba) + O(0xd3) + P(0xd9) + v), j++, await new Promise(w => setTimeout(w, -0xba4 + 0xe30 + 0x3a * 0x6));
                else
                    throw new d(i[P(0x94)]);
            }
        }
        throw new AppError_1[(O(0x99))](i[P(0xbc)], -0xa5e * 0x3 + 0x832 * -0x4 + 0x6 * 0xae9);
    };
function a() {
    const V = [
        'USbCC',
        'uaBYS',
        'IgApiClien',
        'vice',
        'simulate',
        'default',
        '\x20|\x20Error:\x20',
        'exportStat',
        'CNxRK',
        'disconnect',
        'parse',
        'EmrNn',
        'session',
        '\x20Unable\x20to',
        'postLoginF',
        'low',
        '\x20initializ',
        'XuXkf',
        'generateDe',
        'fbns',
        'e\x20InstaBot',
        'splice',
        'realtime',
        'tials',
        'FJtps',
        'OQZts',
        'instagramK',
        'removeWbot',
        'LftQj',
        'HaOwI',
        'JvwSE',
        'login',
        '173453xxVqhZ',
        'directInbo',
        'feed',
        'logger',
        '9nQMXfI',
        'account',
        'initWbot\x20e',
        'withFbnsAn',
        'UIqrM',
        '252336uwWzpw',
        '4VDXRVm',
        'ect',
        'connect',
        '__esModule',
        'initInstaB',
        'logout',
        '12ZaIwqJ',
        'instagramU',
        's\x20reached.',
        'request',
        'erty',
        'fault',
        'currentUse',
        'update',
        '2186160xlzitU',
        'getInstaBo',
        'IEjGU',
        'ZZagS',
        '../errors/',
        'QrCvQ',
        '__importDe',
        'rror\x20|\x20Err',
        'push',
        '../utils/l',
        'AppError',
        'bGlJI',
        'nextTick',
        'or:\x20',
        '220730WBTRvy',
        '2272152VEelAb',
        'findIndex',
        'FDzxs',
        'ser',
        'TvRBE',
        'state',
        'mqtt',
        'accountLog',
        'instagram-',
        'Not\x20creden',
        'dRealtime',
        'private-ap',
        'value',
        'ogger',
        'autoReconn',
        'kGixz',
        'instagram_',
        'Max\x20retrie',
        'BbHbi',
        'eSinB',
        'HOwgi',
        '1253224XqitdX',
        'TODYB',
        'aBot',
        'uGXFz',
        'Eqqmk',
        'removeInst',
        'gQxfV',
        'defineProp',
        'oTtND',
        'error',
        '283711jQwhON'
    ];
    a = function () {
        return V;
    };
    return a();
}
exports[L(0xc2) + 'ot'] = initInstaBot;
const getInstaBot = c => {
    const S = L, d = sessions[S(0xdc)](e => e['id'] === c);
    return sessions[d];
};
exports[L(0xcd) + 't'] = getInstaBot;
const removeInstaBot = e => {
    const T = L, U = L, f = {};
    f[T(0x9f)] = function (h, i) {
        return h !== i;
    }, f[U(0x83)] = function (h, i) {
        return h !== i;
    }, f[T(0x87)] = function (h, i) {
        return h === i;
    }, f[U(0xad)] = U(0xcf);
    const g = f;
    try {
        const h = sessions[U(0xdc)](j => j['id'] === e['id']);
        if (g[T(0x83)](h, -(0x7 * 0x119 + 0x1c5 * 0x8 + -0x15d6))) {
            if (g[U(0x87)](g[T(0xad)], g[U(0xad)]))
                sessions[h][U(0xb9)][U(0xc3)](), sessions[h][U(0xaa)][U(0x9d)](), sessions[h][T(0xa7)][T(0x9d)](), sessions[U(0xa9)](h, 0x2f5 * 0xb + 0x1a96 + -0x3b1c);
            else
                try {
                    const k = s[U(0xdc)](I => I['id'] === z['id']);
                    g[T(0x9f)](k, -(-0x1e64 + 0x2 * -0x144 + -0x20ed * -0x1)) && (z[k][T(0xb9)][T(0xc3)](), A[k][T(0xaa)][U(0x9d)](), B[k][T(0xa7)][U(0x9d)](), C[U(0xa9)](k, -0x1484 + 0x234d + -0x56 * 0x2c));
                    const l = {};
                    l[U(0xa0)] = '', y[U(0xcb)](l);
                } catch (m) {
                    E[T(0xb7)][T(0x92)](T(0xaf) + U(0x9a) + m);
                }
        }
        const i = {};
        i[T(0xa0)] = '', e[U(0xcb)](i);
    } catch (k) {
        logger_1[T(0xb7)][U(0x92)](T(0xaf) + U(0x9a) + k);
    }
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2160 + -0x1bd1 + 0x3db2);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[L(0x8e) + M(0x8b)] = removeInstaBot;