'use strict';
const z = b, A = b;
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(x(0x189)) / (-0x220 * 0xa + 0x1778 + -0x51 * 0x7) * (parseInt(x(0x182)) / (0x41 * 0x2f + 0x13c1 + -0x1fae)) + -parseInt(y(0x16e)) / (0x1bf1 * 0x1 + -0x74d + -0x14a1) * (parseInt(y(0x16b)) / (-0x45 * 0x6 + 0x9cc + -0x82a)) + parseInt(y(0x15b)) / (-0x1b1e + -0x1a38 + 0x355b) * (parseInt(x(0x177)) / (0x26b4 + -0x2 * 0x639 + -0x1a3c)) + parseInt(y(0x156)) / (0xd07 * 0x1 + 0x1d57 + 0x2a57 * -0x1) * (-parseInt(y(0x164)) / (-0x1fed + 0x35 + -0x3f8 * -0x8)) + -parseInt(y(0x157)) / (-0x1 * 0x117d + 0x6 * 0x13e + 0x1 * 0xa12) * (-parseInt(x(0x161)) / (-0x12f * -0xa + -0x5 * -0x306 + -0x35 * 0x82)) + parseInt(x(0x15c)) / (-0x5 * 0x713 + -0xb * 0x2e7 + -0x1 * -0x4357) * (-parseInt(x(0x15a)) / (0x3 * -0x3 + -0x3c1 * 0x3 + 0xb58)) + parseInt(x(0x163)) / (-0x2489 * 0x1 + -0xad * 0x39 + 0x179 * 0x33);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x7079 * 0x7 + -0x3 * -0x4492d + 0x105d9 * -0x1));
const w = {};
w[z(0x179)] = !![], Object[A(0x17b) + z(0x15e)](exports, A(0x188), w), exports[z(0x162) + z(0x17d)] = exports[A(0x153) + A(0x172)] = exports[A(0x173)] = exports[z(0x154) + A(0x159) + 'om'] = exports[z(0x154) + A(0x152) + z(0x167)] = exports[z(0x184) + 'f'] = exports[A(0x16d)] = exports[z(0x16f)] = void (-0xa * -0x2ba + 0x7f * 0x22 + -0xe * 0x327);
const lodash_1 = require(A(0x15d)), sortByKeys = d => {
        const B = A, C = A, e = {};
        e[B(0x175)] = function (i, j) {
            return i !== j;
        }, e[B(0x168)] = B(0x160), e[B(0x17a)] = C(0x174);
        const f = e, g = Object[B(0x176)](d), h = (0xc06 + 0x58f * 0x2 + -0x1724, lodash_1[B(0x178)])(g);
        return (-0x21 * 0x8 + -0x2 * 0xeb1 + 0x11 * 0x1ca, lodash_1[C(0x17e)])((0x3 * 0x76a + 0x1c67 * 0x1 + -0x32a5, lodash_1[B(0x16a)])(h, i => {
            const D = B, E = B;
            if (f[D(0x175)](f[D(0x168)], f[E(0x17a)]))
                return [
                    i,
                    d[i]
                ];
            else {
                const k = i[D(0x176)](j), l = (0x13e + -0x15b8 + 0x147a, k[D(0x178)])(k);
                return (-0x46f + -0xff7 + 0x1466, l[D(0x17e)])((0x3e2 + -0x642 + 0x260, m[D(0x16a)])(l, r => {
                    return [
                        r,
                        k[r]
                    ];
                }));
            }
        }));
    };
exports[A(0x16f)] = sortByKeys;
const sendToSelf = (c, d, e = {}) => {
    const F = A;
    c[F(0x183)](d, e);
};
exports[z(0x16d)] = sendToSelf;
const _sendToSelf = (d, e, f, g) => {
    const G = A, H = A, h = {};
    h[G(0x155)] = function (j, k) {
        return j === k;
    };
    const i = h;
    (0x2647 + -0x280 + -0x23c7, lodash_1[G(0x165)])(d[H(0x185)][G(0x185)], j => {
        const I = G, J = H;
        i[I(0x155)](j['id'], e) && j[I(0x183)](f, g);
    });
};
exports[z(0x184) + 'f'] = _sendToSelf;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x4 * -0x72d + -0x1227 + -0x93b);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sendToAllConnectedClients = (c, d, e) => {
    const K = A;
    c[K(0x183)](d, e);
};
exports[z(0x154) + z(0x152) + A(0x167)] = sendToAllConnectedClients;
const sendToAllClientsInRoom = (c, d, e, f) => {
    const L = z, M = A;
    c[L(0x185)]['in'](d)[M(0x183)](e, f);
};
exports[A(0x154) + z(0x159) + 'om'] = sendToAllClientsInRoom;
function a() {
    const a1 = [
        'disconnect',
        '29108976QaBtWp',
        '8nDTrQB',
        'each',
        'LVNzZ',
        'ients',
        'KHYKA',
        'eHWbD',
        'map',
        '213292CerOAN',
        'soyTq',
        'sendToSelf',
        '15JlxVVC',
        'sortByKeys',
        'isNull',
        'toLowerCas',
        'xcept',
        'sendToUser',
        'NBdMc',
        'nBdVt',
        'keys',
        '5142PBNigO',
        'sortBy',
        'value',
        'TrrkG',
        'defineProp',
        'isUndefine',
        'AllClients',
        'fromPairs',
        'KIoRt',
        'findKey',
        'vIYie',
        '272xaNBIi',
        'emit',
        '_sendToSel',
        'sockets',
        'kqdLL',
        'hlSbg',
        '__esModule',
        '3701aWAasm',
        'onnectedCl',
        'sendToAllE',
        'sendToAllC',
        'lroPW',
        '6665519dTefuH',
        '88731ThcaMb',
        'yPheW',
        'lientsInRo',
        '644412yDdLDG',
        '295wGihaD',
        '33ngzrbU',
        'lodash',
        'erty',
        'forEach',
        'bPYCl',
        '170gYBWsE'
    ];
    a = function () {
        return a1;
    };
    return a();
}
const sendToUser = (d, e, f, g, h) => {
    const N = A, O = z, i = {};
    i[N(0x158)] = function (l, m) {
        return l === m;
    };
    const j = i;
    let k = null;
    (-0x481 + 0xaaf + -0x62e, lodash_1[O(0x15f)])(e, (l, m) => {
        const P = N, Q = O;
        if (j[P(0x158)](m[P(0x171) + 'e'](), f[Q(0x171) + 'e']()))
            return k = l, !![];
    });
    if ((0x82f * 0x4 + 0x1311 + -0x33cd, lodash_1[N(0x170)])(k))
        return !![];
    (0xdd0 + 0xad9 + 0x6b * -0x3b, lodash_1[N(0x15f)])(k?.[N(0x185)], l => {
        const R = N, S = N, m = {};
        m['id'] = l;
        const n = (-0x4a2 + 0x1a7b + -0x15d9, lodash_1[R(0x180)])(d, m);
        if (n) {
            const p = n ? d[n] : null;
            if ((-0x1 * 0x20ff + -0x2191 + -0xc * -0x58c, lodash_1[S(0x17c) + 'd'])(p))
                return !![];
            p[R(0x183)](g, h);
        }
    });
};
exports[z(0x173)] = sendToUser;
const sendToAllExcept = (d, e, f, g) => {
    const T = z, U = z, h = {};
    h[T(0x181)] = function (j, k) {
        return j === k;
    }, h[T(0x186)] = U(0x187), h[U(0x169)] = function (j, k) {
        return j !== k;
    }, h[T(0x17f)] = function (j, k) {
        return j !== k;
    }, h[T(0x166)] = T(0x16c);
    const i = h;
    (0x123b * -0x1 + 0x7cf * 0x3 + -0x532, lodash_1[U(0x165)])(d[U(0x185)][T(0x185)], j => {
        const V = T, W = U;
        i[V(0x181)](i[W(0x186)], i[W(0x186)]) ? i[V(0x169)](j['id'], e) && (i[V(0x17f)](i[V(0x166)], i[W(0x166)]) ? f[W(0x183)](g, h) : j[V(0x183)](f, g)) : e[V(0x185)][W(0x185)][f][V(0x162)](!![]);
    });
};
exports[z(0x153) + A(0x172)] = sendToAllExcept;
const disconnectAllClients = c => {
    const X = z, Y = z;
    Object[X(0x176)](c[Y(0x185)][X(0x185)])[X(0x15f)](d => {
        const Z = Y, a0 = Y;
        c[Z(0x185)][a0(0x185)][d][Z(0x162)](!![]);
    });
};
exports[A(0x162) + z(0x17d)] = disconnectAllClients;