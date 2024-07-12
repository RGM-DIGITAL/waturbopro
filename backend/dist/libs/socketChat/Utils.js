'use strict';
const z = b, A = b;
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(x(0xb7)) / (-0x23b3 + -0x21c3 + -0x1 * -0x4577) * (parseInt(y(0xb0)) / (-0xd47 + -0x269f + 0x33e8)) + -parseInt(x(0x8e)) / (0x7 * 0x48c + 0x25f9 + -0x45ca) * (-parseInt(x(0xaf)) / (0x46c + 0x1 * -0x5c5 + -0x1 * -0x15d)) + -parseInt(x(0x9f)) / (0xa0b + -0x2 * -0x1fc + -0xdfe) + -parseInt(x(0x86)) / (0xc05 + -0x1 * -0x9cd + -0x15cc) + parseInt(x(0xc1)) / (0xc7 + -0x26b1 + 0x25f1) * (-parseInt(x(0x8b)) / (-0x2 * 0xe74 + 0xdb9 + 0xf37)) + parseInt(x(0xb6)) / (0x1cee + -0xe2d + -0xeb8) + parseInt(y(0xb5)) / (-0x1e8f + 0x1bbd + 0x2dc) * (parseInt(y(0xab)) / (0x2216 + -0x245b + -0x128 * -0x2));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x178ee * 0x4 + 0x6e893 + -0x6a999));
const w = {};
w[z(0xbb)] = !![], Object[A(0xad) + z(0xa8)](exports, z(0xbf), w), exports[z(0x93) + A(0xa4)] = exports[A(0xa6) + A(0x94)] = exports[z(0x85)] = exports[z(0xaa) + z(0x90) + 'om'] = exports[z(0xaa) + A(0x84) + z(0xbd)] = exports[A(0x9d) + 'f'] = exports[z(0x95)] = exports[A(0x89)] = void (-0x2 * 0x75b + -0x57d * -0x3 + -0x1c1);
const lodash_1 = require(A(0x9b)), sortByKeys = c => {
        const B = z, C = z, d = Object[B(0x91)](c), e = (0x635 * -0x1 + 0x1d9e + -0xd * 0x1cd, lodash_1[B(0xb2)])(d);
        return (-0x229 * -0xd + -0x164 + 0x1 * -0x1ab1, lodash_1[B(0xa9)])((0xe0 + 0xf0 * -0x9 + 0x790, lodash_1[B(0xc3)])(e, f => {
            return [
                f,
                c[f]
            ];
        }));
    };
exports[A(0x89)] = sortByKeys;
const sendToSelf = (c, d, e = {}) => {
    const D = z;
    c[D(0x8a)](d, e);
};
exports[z(0x95)] = sendToSelf;
const _sendToSelf = (d, e, f, g) => {
    const E = A, F = z, h = {};
    h[E(0x96)] = function (j, k) {
        return j === k;
    }, h[E(0x9e)] = F(0xa5), h[E(0xba)] = E(0xb9);
    const i = h;
    (-0x5a2 * -0x3 + 0x1c * 0x77 + 0x1dea * -0x1, lodash_1[E(0xa1)])(d[F(0x8f)][F(0x8f)], j => {
        const G = E, H = F;
        i[G(0x96)](j['id'], e) && (i[H(0x96)](i[G(0x9e)], i[H(0xba)]) ? f[H(0x8a)](g, h) : j[G(0x8a)](f, g));
    });
};
exports[A(0x9d) + 'f'] = _sendToSelf;
const sendToAllConnectedClients = (c, d, e) => {
    const I = z;
    c[I(0x8a)](d, e);
};
exports[A(0xaa) + z(0x84) + z(0xbd)] = sendToAllConnectedClients;
const sendToAllClientsInRoom = (c, d, e, f) => {
    const J = A, K = A;
    c[J(0x8f)]['in'](d)[K(0x8a)](e, f);
};
exports[z(0xaa) + A(0x90) + 'om'] = sendToAllClientsInRoom;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x6d4 + -0x11a4 + 0xb54);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sendToUser = (d, e, f, g, h) => {
    const L = A, M = z, i = {};
    i[L(0xc2)] = function (l, m) {
        return l === m;
    }, i[L(0x9c)] = function (l, m) {
        return l !== m;
    }, i[M(0xbe)] = M(0xb1), i[L(0xa3)] = M(0x97), i[M(0xb4)] = function (l, m) {
        return l !== m;
    }, i[L(0xbc)] = M(0x8d), i[L(0x92)] = function (l, m) {
        return l === m;
    }, i[M(0xb8)] = L(0xa2), i[L(0x98)] = M(0xa0);
    const j = i;
    let k = null;
    (0x1 * -0xfb + 0x10ce + -0xfd3, lodash_1[M(0x9a)])(e, (l, m) => {
        const O = L, P = L, n = {
                'zPruv': function (o, p) {
                    const N = b;
                    return j[N(0xc2)](o, p);
                }
            };
        if (j[O(0x9c)](j[O(0xbe)], j[P(0xa3)])) {
            if (j[P(0xc2)](m[P(0xc0) + 'e'](), f[P(0xc0) + 'e']())) {
                if (j[P(0xb4)](j[P(0xbc)], j[O(0xbc)]))
                    j[P(0xc2)](h['id'], i) && m[O(0x8a)](n, o);
                else
                    return k = l, !![];
            }
        } else
            (-0x4a9 * -0x2 + -0x191 * 0x1 + -0x7c1 * 0x1, h[P(0xa1)])(i[P(0x8f)][O(0x8f)], s => {
                const Q = O, R = O;
                n[Q(0xb3)](s['id'], m) && s[Q(0x8a)](p, q);
            });
    });
    if ((-0x105d + 0x218e + 0x1b * -0xa3, lodash_1[L(0xac)])(k))
        return !![];
    (-0x11de + 0x19 * 0x15c + -0x101e, lodash_1[L(0x9a)])(k?.[M(0x8f)], l => {
        const S = M, T = L;
        if (j[S(0x92)](j[S(0xb8)], j[T(0x98)]))
            e[T(0x8f)][S(0x8f)][f][T(0x93)](!![]);
        else {
            const n = {};
            n['id'] = l;
            const p = (-0x3 * 0xae2 + 0x1f * -0x81 + -0x55d * -0x9, lodash_1[T(0xae)])(d, n);
            if (p) {
                const q = p ? d[p] : null;
                if ((0x1 * 0x1a8 + -0x5f * 0x65 + 0x23d3, lodash_1[T(0x88) + 'd'])(q))
                    return !![];
                q[T(0x8a)](g, h);
            }
        }
    });
};
exports[A(0x85)] = sendToUser;
const sendToAllExcept = (d, e, f, g) => {
    const U = z, V = A, h = {};
    h[U(0x87)] = function (j, k) {
        return j !== k;
    }, h[V(0x8c)] = function (j, k) {
        return j !== k;
    }, h[U(0x99)] = V(0xa7);
    const i = h;
    (-0x1570 * 0x1 + -0x10 * 0x1fd + 0x3540, lodash_1[U(0xa1)])(d[U(0x8f)][U(0x8f)], j => {
        const W = U, X = U;
        if (i[W(0x87)](j['id'], e)) {
            if (i[W(0x8c)](i[X(0x99)], i[X(0x99)])) {
                const l = l ? j[k] : null;
                if ((-0x9c * 0x1b + 0xcc5 * -0x2 + 0x29fe, l[X(0x88) + 'd'])(l))
                    return !![];
                l[X(0x8a)](m, n);
            } else
                j[X(0x8a)](f, g);
        }
    });
};
exports[A(0xa6) + A(0x94)] = sendToAllExcept;
function a() {
    const a2 = [
        'findKey',
        '120STnjuB',
        '4Xkcnuv',
        'ZSrXz',
        'sortBy',
        'zPruv',
        'miZKq',
        '4005380xiwJQR',
        '5486625Bbiorr',
        '336899KTWbEc',
        'uyoxm',
        'TPBvx',
        'oWoVl',
        'value',
        'VormI',
        'ients',
        'zLPbc',
        '__esModule',
        'toLowerCas',
        '10731tCozxT',
        'owRaW',
        'map',
        'onnectedCl',
        'sendToUser',
        '1246758RrNTNa',
        'Czdax',
        'isUndefine',
        'sortByKeys',
        'emit',
        '264oAuQbz',
        'lMLSw',
        'Phvpe',
        '45222SyFGhK',
        'sockets',
        'lientsInRo',
        'keys',
        'cMYep',
        'disconnect',
        'xcept',
        'sendToSelf',
        'ewqmT',
        'iyrLM',
        'gFdpZ',
        'vnMBp',
        'forEach',
        'lodash',
        'swzXP',
        '_sendToSel',
        'eWpcL',
        '2643215aKOlJn',
        'mjuSp',
        'each',
        'wkibI',
        'gRjtb',
        'AllClients',
        'nTdnN',
        'sendToAllE',
        'OqWlo',
        'erty',
        'fromPairs',
        'sendToAllC',
        '22gEUfkW',
        'isNull',
        'defineProp'
    ];
    a = function () {
        return a2;
    };
    return a();
}
const disconnectAllClients = c => {
    const Y = z, Z = A;
    Object[Y(0x91)](c[Z(0x8f)][Z(0x8f)])[Y(0x9a)](d => {
        const a0 = Y, a1 = Z;
        c[a0(0x8f)][a0(0x8f)][d][a0(0x93)](!![]);
    });
};
exports[A(0x93) + z(0xa4)] = disconnectAllClients;