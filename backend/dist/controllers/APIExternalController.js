'use strict';
const J = b, K = b;
(function (c, d) {
    const H = b, I = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(H(0x1db)) / (-0x1c * -0x11f + 0x6b5 * -0x1 + -0x18ae) + -parseInt(I(0x1b6)) / (0x2 * -0x391 + -0x36e * 0x1 + 0xa92) + parseInt(I(0x1cb)) / (0xe * 0x1dd + 0x1 * -0x1ba3 + 0x190) + -parseInt(I(0x1d2)) / (-0x3 * 0xde + 0x1 * 0x15bb + -0x131d) * (parseInt(H(0x1cc)) / (0x38 * 0x8f + 0x1 * -0x5db + -0x43c * 0x6)) + parseInt(H(0x1a6)) / (0x157e + 0x212b * 0x1 + -0x36a3) * (parseInt(H(0x1e9)) / (0x11c3 + -0x944 + -0x2 * 0x43c)) + -parseInt(I(0x1ec)) / (-0x15ce + -0x1f * 0x135 + 0xc5 * 0x4d) * (-parseInt(H(0x1b5)) / (0x85 + 0x2179 + -0x21f5)) + parseInt(I(0x19f)) / (0x212c + 0x2a1 + -0x23c3);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x83d62 * 0x2 + 0x106194 + -0x132fa4));
var __createBinding = this && this[J(0x1d5) + K(0x1f5)] || (Object[J(0x1a9)] ? function (e, f, g, h) {
        const L = J, M = J, i = {};
        i[L(0x1e0)] = function (n, p) {
            return n === p;
        }, i[L(0x1b0)] = function (n, p) {
            return n in p;
        }, i[L(0x1af)] = M(0x1d0);
        const j = i;
        if (j[L(0x1e0)](h, undefined))
            h = g;
        var l = Object[M(0x19b) + L(0x1c8) + L(0x1c0)](f, g);
        if (!l || (j[M(0x1b0)](j[M(0x1af)], l) ? !f[M(0x1e5)] : l[M(0x1c7)] || l[L(0x1a4) + 'le'])) {
            const n = {};
            n[M(0x1ed)] = !![], n[L(0x1d0)] = function () {
                return f[g];
            }, l = n;
        }
        Object[M(0x1aa) + M(0x1f3)](e, h, l);
    } : function (d, e, f, g) {
        const N = J, O = J, h = {};
        h[N(0x1ae)] = function (j, l) {
            return j === l;
        };
        const i = h;
        if (i[N(0x1ae)](g, undefined))
            g = f;
        d[g] = e[f];
    }), __setModuleDefault = this && this[K(0x1ab) + K(0x1ef)] || (Object[J(0x1a9)] ? function (e, f) {
        const P = J, Q = J, g = {};
        g[P(0x1b2)] = Q(0x19e);
        const h = g, i = {};
        i[P(0x1ed)] = !![], i[P(0x1e2)] = f, Object[P(0x1aa) + Q(0x1f3)](e, h[P(0x1b2)], i);
    } : function (d, e) {
        const R = K, S = J, f = {};
        f[R(0x1b3)] = R(0x19e);
        const g = f;
        d[g[S(0x1b3)]] = e;
    }), __importStar = this && this[J(0x1dd) + 'ar'] || function (c) {
        const T = J, U = J, d = {
                'mvmBs': T(0x1b4),
                'LFcFA': function (i, j, l) {
                    return i(j, l);
                },
                'FCADG': function (i, j) {
                    return i != j;
                },
                'RqsRG': function (i, j) {
                    return i !== j;
                },
                'SoMGR': U(0x19e),
                'mrEgv': function (i, j, l, m) {
                    return i(j, l, m);
                }
            }, e = d[U(0x19a)][T(0x1c2)]('|');
        let f = 0x1 * 0x2425 + -0x877 * -0x3 + -0x1ec5 * 0x2;
        while (!![]) {
            switch (e[f++]) {
            case '0':
                var g = {};
                continue;
            case '1':
                return g;
            case '2':
                d[T(0x1a5)](__setModuleDefault, g, c);
                continue;
            case '3':
                if (d[U(0x1b8)](c, null)) {
                    for (var h in c)
                        if (d[U(0x1e7)](h, d[T(0x1e4)]) && Object[T(0x1f2)][T(0x1eb) + U(0x1f3)][T(0x1bf)](c, h))
                            d[U(0x1f0)](__createBinding, g, c, h);
                }
                continue;
            case '4':
                if (c && c[U(0x1e5)])
                    return c;
                continue;
            }
            break;
        }
    }, __importDefault = this && this[K(0x1b1) + J(0x1d3)] || function (c) {
        const V = J;
        return c && c[V(0x1e5)] ? c : { 'default': c };
    };
const G = {};
G[K(0x1e2)] = !![], Object[K(0x1aa) + J(0x1f3)](exports, J(0x1e5), G), exports[J(0x1e3) + J(0x19c)] = void (-0x121 * -0xd + 0x1bb + -0x1068);
const Yup = __importStar(require(J(0x1c9))), AppError_1 = __importDefault(require(K(0x1b7) + J(0x1f4))), ApiConfig_1 = __importDefault(require(K(0x1bd) + J(0x1d8))), Queue_1 = __importDefault(require(K(0x19d) + J(0x1c1))), sendMessageAPI = async (h, i) => {
        const W = J, X = J, j = {};
        j[W(0x1c3)] = W(0x19e), j[W(0x1a1)] = function (w, z) {
            return w !== z;
        }, j[W(0x1d4)] = X(0x1a8) + X(0x1d9) + W(0x1e1), j[W(0x1d7)] = function (w, z) {
            return w !== z;
        }, j[W(0x1f6)] = W(0x1ac), j[W(0x1da)] = X(0x1e8) + W(0x19c), j[X(0x1bb)] = X(0x1ea) + X(0x1b9);
        const k = j, {
                tenantId: l,
                sessionId: m
            } = h[X(0x1ce)], {apiId: n} = h[W(0x1ca)], o = h[W(0x1ee)], p = {};
        p['id'] = n, p[X(0x1be)] = l;
        const q = {};
        q[W(0x1c5)] = p;
        const r = await ApiConfig_1[W(0x19e)][W(0x1ba)](q);
        if (k[W(0x1a1)](r?.[W(0x1a2)], m))
            throw new AppError_1[(W(0x19e))](k[X(0x1d4)], 0x23f * -0xd + 0x2585 + -0x6bf);
        const s = { ...h[W(0x1d1)] };
        s[X(0x1bc)] = n, s[X(0x1a2)] = m, s[W(0x1be)] = l, s[X(0x1df)] = r, s[X(0x1de)] = o;
        const t = s, u = Yup[X(0x1e6)]()[X(0x1ad)]({
                'apiId': Yup[W(0x1d6)](),
                'sessionId': Yup[W(0x1f1)](),
                'body': Yup[X(0x1d6)]()[W(0x1a0)](),
                'number': Yup[X(0x1d6)]()[W(0x1a0)](),
                'mediaUrl': Yup[X(0x1d6)]()[W(0x1cd)]()[X(0x1dc)]() || Yup[W(0x1e6)]()[X(0x1ad)]({
                    'destination': Yup[W(0x1d6)]()[X(0x1a0)](),
                    'encoding': Yup[W(0x1d6)]()[W(0x1a0)](),
                    'fieldname': Yup[W(0x1d6)]()[W(0x1a0)](),
                    'filename': Yup[X(0x1d6)]()[W(0x1a0)](),
                    'mimetype': Yup[W(0x1d6)]()[X(0x1a0)](),
                    'originalname': Yup[X(0x1d6)]()[W(0x1a0)](),
                    'path': Yup[W(0x1d6)]()[W(0x1a0)](),
                    'size': Yup[X(0x1f1)]()[W(0x1a0)]()
                }),
                'externalKey': Yup[X(0x1d6)]()[W(0x1a0)](),
                'tenantId': Yup[W(0x1f1)]()[W(0x1a0)]()
            });
        try {
            await u[W(0x1a7)](t);
        } catch (w) {
            if (k[X(0x1d7)](k[W(0x1f6)], k[X(0x1f6)])) {
                const y = {};
                y[W(0x1ed)] = !![], y[X(0x1e2)] = h, s[X(0x1aa) + W(0x1f3)](y, k[X(0x1c3)], y);
            } else
                throw new AppError_1[(W(0x19e))](w[W(0x1c4)]);
        }
        Queue_1[W(0x19e)][W(0x1c6)](k[W(0x1da)], t);
        const v = {};
        return v[X(0x1c4)] = k[W(0x1bb)], i[X(0x1a3)](0x527 * 0x5 + 0x1684 + 0x243 * -0x15)[W(0x1cf)](v);
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x15 * 0x139 + -0x8c * 0x5 + -0x9 * 0x25f);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const Y = [
        'mvmBs',
        'getOwnProp',
        'eAPI',
        '../libs/Qu',
        'default',
        '5593440lOsaGO',
        'required',
        'EbjVl',
        'sessionId',
        'status',
        'configurab',
        'LFcFA',
        '393864rFQBCx',
        'validate',
        'ERR_SESSIO',
        'create',
        'defineProp',
        '__setModul',
        'jGQiW',
        'shape',
        'pdwet',
        'zkFRZ',
        'CDRmU',
        '__importDe',
        'VInim',
        'lUYZf',
        '4|0|3|2|1',
        '486198ldpVzX',
        '3103720vknKUR',
        '../errors/',
        'FCADG',
        'd\x20queue',
        'findOne',
        'UMDvM',
        'apiId',
        '../models/',
        'tenantId',
        'call',
        'ptor',
        'eue',
        'split',
        'duNtJ',
        'message',
        'where',
        'add',
        'writable',
        'ertyDescri',
        'yup',
        'params',
        '3851523aTIMun',
        '5TKlYbc',
        'url',
        'APIAuth',
        'json',
        'get',
        'body',
        '5369656kyOVLB',
        'fault',
        'eybfe',
        '__createBi',
        'string',
        'vNjsA',
        'ApiConfig',
        'N_NOT_AUTH',
        'CXQWv',
        '630943LWODfz',
        'nullable',
        '__importSt',
        'media',
        'apiConfig',
        'NOpSs',
        '_TOKEN',
        'value',
        'sendMessag',
        'SoMGR',
        '__esModule',
        'object',
        'RqsRG',
        'SendMessag',
        '77RKGZAh',
        'Message\x20ad',
        'hasOwnProp',
        '88vTbcaR',
        'enumerable',
        'file',
        'eDefault',
        'mrEgv',
        'number',
        'prototype',
        'erty',
        'AppError',
        'nding',
        'mUtkm'
    ];
    a = function () {
        return Y;
    };
    return a();
}
exports[J(0x1e3) + K(0x19c)] = sendMessageAPI;