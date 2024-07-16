'use strict';
const a8 = b, a9 = b;
(function (c, d) {
    const a6 = b, a7 = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(a6(0x1c3)) / (-0x665 * 0x2 + -0x1 * 0x92f + -0x61 * -0x3a) + -parseInt(a6(0x213)) / (-0xac * 0x11 + -0x2441 + 0x3ab * 0xd) + parseInt(a6(0x19f)) / (0x17 * 0x18a + -0x2692 + -0x1 * -0x32f) + -parseInt(a7(0x145)) / (0xb * 0x10d + 0x269d + -0x3228) * (-parseInt(a6(0x169)) / (-0x1e3e + 0x487 + 0x19bc)) + parseInt(a6(0x204)) / (0x1f * -0x1d + -0x168b + -0xd0a * -0x2) + -parseInt(a6(0x1ee)) / (-0x25b2 + -0x16f9 + 0x3cb2) + parseInt(a7(0x1e2)) / (-0x9a7 + 0x2702 + 0x1d53 * -0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xdde12 + -0x857bb + 0x653 * 0xdf));
var __importDefault = this && this[a8(0x1f4) + a9(0x203)] || function (c) {
    const aa = a8;
    return c && c[aa(0x19e)] ? c : { 'default': c };
};
const a4 = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x67 * 0x44 + 0x2290 + -0x3cce);
        let h = e[f];
        return h;
    }, b(c, d);
}
a4[a8(0x125)] = !![], Object[a9(0x170) + a8(0x192)](exports, a8(0x19e), a4);
const lodash_1 = require(a9(0x198)), Utils_1 = require(a9(0x152)), Index_1 = require(a9(0x1f9)), User_1 = __importDefault(require(a8(0x122) + a8(0x206))), logger_1 = require(a9(0x18e) + a8(0x1aa)), events = {}, JoinChatServer = d => {
        const ab = a9, ac = a9, e = {
                'SDWgF': function (j, k) {
                    return j(k);
                },
                'lAsPg': function (j, k) {
                    return j(k);
                },
                'UXNMQ': function (j, k) {
                    return j !== k;
                },
                'sODiD': ab(0x1ed),
                'jLVsv': ab(0x18c) + ab(0x193),
                'mZJSO': ac(0x168)
            }, {user: f} = d[ab(0x208)][ac(0x146)];
        logger_1[ac(0x1e4)][ab(0x14c)](ac(0x137) + ac(0x212) + f[ac(0x173)]);
        const {tenantId: g} = f, h = ab(0x161) + '_' + g;
        let i;
        i = Index_1[ac(0x15d)][h];
        i && (e[ac(0x19b)](e[ab(0x1a1)], e[ab(0x1a1)]) ? (e[ac(0x15a)](g, h), e[ab(0x131)](i, j)) : (i[ab(0x1d0) + 'e'][f['id']] = {
            'sockets': [d['id']],
            'user': f
        }, i[ac(0x16c)][ab(0x1dc)](d), (0xf * -0x187 + 0x245b * 0x1 + -0x1 * 0xd72, Utils_1[ac(0x207)])(d, e[ac(0x1cd)])));
        if (!i) {
            const k = e[ab(0x13d)][ab(0x17a)]('|');
            let l = 0x13 * 0xd7 + -0x1fb0 + 0xfbb;
            while (!![]) {
                switch (k[l++]) {
                case '0':
                    i[ac(0x16c)][ab(0x1dc)](d);
                    continue;
                case '1':
                    i[ac(0x1d0) + 'e'][f['id']] = {
                        'sockets': [d['id']],
                        'user': f
                    };
                    continue;
                case '2':
                    const m = {};
                    m[ab(0x16c)] = [], m[ac(0x1d0) + 'e'] = {}, m[ab(0x183)] = {}, Index_1[ac(0x15d)][h] = m;
                    continue;
                case '3':
                    i = Index_1[ab(0x15d)][h];
                    continue;
                case '4':
                    (-0x2310 + -0x1 * -0x13c9 + 0xf47, Utils_1[ac(0x207)])(d, f[ac(0x142)] + (ab(0x1e7) + ac(0x191)));
                    continue;
                }
                break;
            }
        }
    }, UpdateUsers = c => {
        const ad = a8, ae = a9, d = {
                'BZxww': function (i, j) {
                    return i(j);
                },
                'gdpYq': function (i, j) {
                    return i === j;
                },
                'BKuKb': ad(0x186),
                'yhQjW': ad(0x1c5),
                'qxsnB': function (i, j) {
                    return i !== j;
                },
                'rLeNL': ad(0x1ce),
                'DvQva': function (i, j) {
                    return i === j;
                },
                'iOIOK': ad(0x11e),
                'NRuzb': ad(0x1f2) + 's',
                'xvjno': ae(0x159),
                'LNoIY': function (i, j) {
                    return i > j;
                }
            }, {user: e} = c[ae(0x208)][ad(0x146)], f = ad(0x161) + '_' + e[ad(0x142)], g = Index_1[ad(0x15d)][f], h = (-0x3 * -0x72e + -0x1c91 + -0x707 * -0x1, Utils_1[ae(0x1ab)])(g[ae(0x1d0) + 'e']);
        (-0x107f + -0xc5 + 0x2 * 0x8a2, lodash_1[ad(0x1a2)])(h, i => {
            const af = ad, ag = ae;
            if (d[af(0x1ea)](d[ag(0x167)], d[af(0x167)]))
                e = f[af(0x20b)];
            else {
                const k = i[af(0x20b)], {sockets: l} = i;
                k && d[af(0x1fc)](l[ag(0x1e0)], -0x1b * -0x6c + 0x1824 + -0x2388) && (-0x186b + 0xc8 + 0x17a3, lodash_1[af(0x1a2)])(l, m => {
                    const aj = af, ak = ag, n = {
                            'ZGFDB': function (o, p) {
                                const ah = b;
                                return d[ah(0x160)](o, p);
                            },
                            'MKFub': function (o, p) {
                                const ai = b;
                                return d[ai(0x196)](o, p);
                            },
                            'GXvdm': d[aj(0x1e6)],
                            'RNJte': d[ak(0x174)],
                            'GpLeD': function (o, p) {
                                const al = aj;
                                return d[al(0x196)](o, p);
                            }
                        };
                    if (d[ak(0x1ea)](d[ak(0x1bd)], d[ak(0x1bd)]))
                        delete e?.[ak(0x1d0) + 'e'][f['id']];
                    else {
                        const p = (-0x2b * -0xa4 + -0x1 * 0x337 + -0x1855, lodash_1[aj(0x1f7)])(g[aj(0x16c)], q => {
                            const an = ak, ao = ak, r = {
                                    'jEtjT': function (t, u) {
                                        const am = b;
                                        return n[am(0x1b4)](t, u);
                                    }
                                };
                            if (n[an(0x1eb)](n[an(0x1fb)], n[an(0x136)])) {
                                const u = {
                                        'TVxyy': function (x, y) {
                                            const ap = ao;
                                            return r[ap(0x1c6)](x, y);
                                        }
                                    }, {user: w} = f[an(0x208)][ao(0x146)];
                                g['on'](w[ao(0x142)] + (an(0x1bb) + an(0x133) + ao(0x156)), () => {
                                    const aq = ao, ar = an;
                                    u[aq(0x19c)](i, w[ar(0x142)]);
                                });
                            } else
                                return n[an(0x184)](q['id'], m);
                        });
                        p && (d[aj(0x162)](d[aj(0x1e9)], d[ak(0x1e9)]) ? (k[aj(0x199)][aj(0x201)] || k[ak(0x199)][ak(0x1bf)]) && p[aj(0x1b3)](d[aj(0x16b)], h) : delete e[ak(0x1d0) + 'e'][f['id']]);
                    }
                });
            }
        });
    }, UpdateOnlineBubbles = d => {
        const as = a8, at = a9, {user: e} = d[as(0x208)][as(0x146)], f = as(0x161) + '_' + e[as(0x142)], g = Index_1[at(0x15d)][f], h = (-0x16e8 + -0x2d6 * 0x2 + 0x1c94, lodash_1[as(0x11f)])((-0x268a + 0xc65 + 0x17 * 0x123, lodash_1[as(0x166)])((-0x972 + -0x427 * -0x3 + -0x101 * 0x3, lodash_1[at(0x1d4)])(g[as(0x1d0) + 'e']), k => {
                return k[0x8 * -0x3ee + 0xa3a + 0x389 * 0x6];
            })), i = (0x1059 + 0x664 + 0x1 * -0x16bd, lodash_1[as(0x11f)])((0x12 * -0x13d + 0x26e6 + -0x109c * 0x1, lodash_1[at(0x166)])((0xa9 * 0x1 + 0x96b * -0x1 + 0x8c2, lodash_1[at(0x1d4)])(g[as(0x183)]), k => {
                return k[-0xfd7 + 0x1bb9 + -0xbe2];
            })), j = {};
        j[as(0x18f) + at(0x1c8)] = h, j[at(0x12a) + as(0x1c8)] = i, (-0xc46 + 0x782 + 0x7a * 0xa, Utils_1[as(0x1ca) + as(0x1b9) + at(0x1fd)])(d, e[as(0x142)] + (as(0x1bb) + as(0x133) + as(0x156)), j);
    }, SpawnOpenChatWindows = d => {
        const au = a8, av = a8, e = {};
        e[au(0x15e)] = av(0x128) + av(0x1c2);
        const f = e, {user: g} = d[av(0x208)][au(0x146)], h = User_1[au(0x12c)][av(0x17d)](g['id']);
        (-0x28c * -0x7 + 0x19a7 + -0x2b7b, Utils_1[au(0x207)])(d, f[au(0x15e)], h);
    }, spawnChatWindow = d => {
        const aw = a9, ax = a9, e = {};
        e[aw(0x1c7)] = ax(0x173), e[aw(0x189)] = aw(0x150), e[aw(0x126)] = aw(0x127), e[ax(0x1bc)] = ax(0x128) + ax(0x1c2);
        const f = e;
        d['on'](f[aw(0x1bc)], async g => {
            const ay = ax, az = aw, h = {};
            h[ay(0x171)] = [
                'id',
                f[ay(0x1c7)],
                f[ay(0x189)],
                f[ay(0x126)]
            ];
            const i = await User_1[ay(0x12c)][ay(0x17d)](g, h);
            (0x2 * -0x89b + -0x20f8 + 0x3 * 0x10ba, Utils_1[ay(0x207)])(d, f[az(0x1bc)], i);
        });
    }, onSetUserIdle = c => {
        const aA = a9, aB = a8, d = {
                'ivbhd': function (g, h) {
                    return g !== h;
                },
                'yRaOF': aA(0x147),
                'ITkus': aB(0x1dd),
                'rjKgs': aA(0x15f),
                'OuUUZ': aB(0x1a0),
                'TCYwL': function (g, h) {
                    return g(h);
                }
            }, {user: e} = c[aB(0x208)][aA(0x146)], f = aA(0x161) + '_' + e[aB(0x142)];
        c['on'](e[aB(0x142)] + (aA(0x20d) + 'le'), () => {
            const aC = aA, aD = aA;
            let g;
            g = Index_1[aC(0x15d)][f];
            if (g) {
                if (d[aC(0x20a)](d[aC(0x1f3)], d[aD(0x1c1)]))
                    g[aD(0x183)][e['id']] = {
                        'sockets': [c['id']],
                        'user': e
                    };
                else
                    return d[0x1 * 0xedb + -0x16 * 0x31 + -0x6d * 0x19];
            }
            if (!g) {
                if (d[aC(0x20a)](d[aC(0x17b)], d[aD(0x1f1)])) {
                    const i = {};
                    i[aD(0x16c)] = [], i[aD(0x1d0) + 'e'] = {}, i[aD(0x183)] = {}, Index_1[aC(0x15d)][f] = i, g = Index_1[aC(0x15d)][f], g[aC(0x183)][aD(0x1dc)](c['id']);
                } else
                    e = f[aD(0x20b)];
            }
            g?.[aD(0x1d0) + 'e'][e['id']] && delete g?.[aD(0x1d0) + 'e'][e['id']], d[aD(0x12d)](UpdateOnlineBubbles, c);
        });
    }, onSetUserActive = c => {
        const aE = a8, aF = a8, d = {
                'ildZX': function (g, h) {
                    return g !== h;
                },
                'xoWnA': aE(0x1ec),
                'QkTph': aF(0x157),
                'vLwNu': function (g, h) {
                    return g(h);
                }
            }, {user: e} = c[aE(0x208)][aE(0x146)], f = aF(0x161) + '_' + e[aE(0x142)];
        c['on'](e[aE(0x142)] + (aE(0x17e) + aF(0x172)), () => {
            const aG = aE, aH = aE;
            let g = Index_1[aG(0x15d)][f];
            g?.[aH(0x183)][e['id']] && delete g?.[aG(0x183)][e['id']];
            if (!g) {
                if (d[aG(0x1ad)](d[aH(0x1e3)], d[aG(0x14d)])) {
                    const h = {};
                    h[aG(0x16c)] = [], h[aH(0x1d0) + 'e'] = {}, h[aH(0x183)] = {}, Index_1[aH(0x15d)][f] = h, g = Index_1[aH(0x15d)][f], g[aG(0x1d0) + 'e'][aH(0x1dc)](c['id']);
                } else
                    return;
            }
            g?.[aH(0x1d0) + 'e'] && (g[aH(0x1d0) + 'e'][e['id']] = {
                'sockets': [c['id']],
                'user': e
            }), d[aH(0x211)](UpdateOnlineBubbles, c);
        });
    }, onUpdateUsers = d => {
        const aI = a9, aJ = a8, e = {};
        e[aI(0x15c)] = aJ(0x1f2) + 's';
        const f = e;
        d['on'](f[aJ(0x15c)], UpdateUsers);
    }, onChatMessage = c => {
        const aK = a8, aL = a9, d = {
                'boGuX': function (h, i) {
                    return h(i);
                },
                'JUQGZ': function (h, i) {
                    return h !== i;
                },
                'PMwtn': aK(0x120),
                'ZpZsM': function (h, i) {
                    return h !== i;
                },
                'hqqEO': aL(0x144),
                'YqXui': aK(0x1a6),
                'zVZJR': aK(0x1df),
                'PdJCo': function (h, i) {
                    return h === i;
                },
                'PINOB': aK(0x1cb) + 'e'
            }, {user: e} = c[aK(0x208)][aL(0x146)], {tenantId: f} = e, g = aK(0x161) + '_' + f;
        c['on'](d[aK(0x185)], function (h) {
            const aN = aK, aO = aK, i = {
                    'ezWNx': function (j, k) {
                        const aM = b;
                        return d[aM(0x1b2)](j, k);
                    }
                };
            if (d[aN(0x1e8)](d[aO(0x1b6)], d[aN(0x1b6)])) {
                const {user: k} = m[aO(0x208)][aO(0x146)], l = aO(0x161) + '_' + k[aO(0x142)], m = n[aO(0x15d)][l], n = (-0x4f * 0x47 + 0x1 * 0x9d9 + 0xc10, o[aN(0x11f)])((0x1051 + -0x2fe * -0x2 + -0x164d, p[aO(0x166)])((0x1c * -0xad + 0x837 + 0xab5, q[aN(0x1d4)])(m[aO(0x1d0) + 'e']), B => {
                        return B[0x1 * -0x1899 + -0xd * 0x189 + -0x6 * -0x76d];
                    })), o = (-0x1e4d * 0x1 + 0x1 * -0x244 + 0xadb * 0x3, r[aN(0x11f)])((0x822 * 0x2 + 0x2063 + -0x30a7, s[aN(0x166)])((0x1111 * 0x2 + 0x7ed + -0x61 * 0x6f, t[aN(0x1d4)])(m[aN(0x183)]), B => {
                        return B[0x1709 + -0x3a3 * -0x3 + -0x1 * 0x21f2];
                    })), p = {};
                p[aO(0x18f) + aN(0x1c8)] = n, p[aN(0x12a) + aN(0x1c8)] = o, (0x17ab + 0xafa * -0x1 + -0xcb1 * 0x1, u[aN(0x1ca) + aO(0x1b9) + aO(0x1fd)])(v, k[aN(0x142)] + (aO(0x1bb) + aN(0x133) + aN(0x156)), p);
            } else {
                const k = Index_1[aO(0x15d)][g];
                if (k) {
                    if (d[aO(0x134)](d[aO(0x1de)], d[aO(0x194)])) {
                        const {to: l} = h, {from: m} = h;
                        console[aN(0x1ac)]('TO', l), console[aO(0x1ac)](d[aN(0x1f6)], m);
                        const n = h[aO(0x12b)];
                        d[aN(0x1ef)](h[aN(0x12b)], 's') ? h[aN(0x12b)] = 'r' : h[aO(0x12b)] = 's', (-0x152a + 0x4 * -0x7cf + -0x161 * -0x26, Utils_1[aO(0x14a)])(k[aO(0x16c)], k[aO(0x1d0) + 'e'], h[aO(0x163)][aN(0x123)], d[aN(0x185)], h), h[aN(0x12b)] = n, (0x1cbb + -0x1d25 + 0x6a, Utils_1[aN(0x14a)])(k[aN(0x16c)], k[aN(0x1d0) + 'e'], h[aO(0x205)][aN(0x123)], d[aO(0x185)], h);
                    } else
                        i[aN(0x1d6)](e, f);
                }
            }
        });
    }, onChatTyping = c => {
        const aP = a9, aQ = a8, d = {
                'RosUH': function (h, i) {
                    return h === i;
                },
                'kwiSR': function (h, i) {
                    return h(i);
                },
                'eCivJ': function (h, i) {
                    return h(i);
                },
                'OhvUb': function (h, i) {
                    return h === i;
                },
                'JWdbj': function (h, i) {
                    return h !== i;
                },
                'LkYtn': aP(0x1cf),
                'bIsrB': aP(0x165),
                'AXEkK': aP(0x13b)
            }, {user: e} = c[aP(0x208)][aP(0x146)], {tenantId: f} = e, g = aP(0x161) + '_' + f;
        c['on'](d[aP(0x187)], h => {
            const aV = aP, aW = aP, i = {
                    'ARIAD': function (k, l) {
                        const aR = b;
                        return d[aR(0x1be)](k, l);
                    },
                    'uJFxK': function (k, l) {
                        const aS = b;
                        return d[aS(0x1b8)](k, l);
                    },
                    'BoPMm': function (k, l) {
                        const aT = b;
                        return d[aT(0x17f)](k, l);
                    },
                    'rMWEC': function (k, l) {
                        const aU = b;
                        return d[aU(0x1b7)](k, l);
                    }
                }, j = Index_1[aV(0x15d)][g];
            if (j) {
                if (d[aV(0x121)](d[aV(0x1c0)], d[aW(0x151)])) {
                    const {to: k} = h, {from: l} = h;
                    let m = null, n = null;
                    (-0x23b0 + -0x4 * 0x7a6 + 0x4248, lodash_1[aV(0x1f7)])(j[aV(0x1d0) + 'e'], function (o) {
                        const aX = aW, aY = aW;
                        i[aX(0x178)](i[aX(0x1a9)](String, o[aX(0x20b)]['id']), i[aX(0x1fa)](String, k)) && (m = o[aY(0x20b)]), i[aY(0x1fe)](i[aX(0x1fa)](String, o[aY(0x20b)]['id']), i[aX(0x1a9)](String, l)) && (n = o[aX(0x20b)]);
                    });
                    if ((-0x1 * -0x2294 + 0xd31 * 0x2 + -0x3cf6, lodash_1[aW(0x18d)])(m) || (-0x8 * 0x28d + -0xb1b + 0x1f83, lodash_1[aV(0x18d)])(n))
                        return;
                    h[aV(0x163)] = m, h[aV(0x205)] = n, (0x11f9 + 0x76 * -0x14 + -0x2eb * 0x3, Utils_1[aW(0x14a)])(j[aW(0x16c)], j[aV(0x1d0) + 'e'], m[aV(0x173)], d[aW(0x187)], h);
                } else
                    d[aV(0x12b)] = 'r';
            }
        });
    }, onChatStopTyping = c => {
        const aZ = a9, b0 = a9, d = {
                'rPIDW': aZ(0x1f2) + 's',
                'EqTzU': function (h, i) {
                    return h === i;
                },
                'kFpuw': function (h, i) {
                    return h(i);
                },
                'rCfhB': function (h, i) {
                    return h(i);
                },
                'rpPgO': function (h, i) {
                    return h !== i;
                },
                'qhdiq': b0(0x12e),
                'jSyBv': b0(0x139),
                'tWzJv': aZ(0x158) + b0(0x1a4)
            }, {user: e} = c[aZ(0x208)][aZ(0x146)], {tenantId: f} = e, g = aZ(0x161) + '_' + f;
        c['on'](d[aZ(0x1d2)], h => {
            const b4 = b0, b5 = b0, i = {
                    'QCuoH': function (k, l) {
                        const b1 = b;
                        return d[b1(0x1e5)](k, l);
                    },
                    'ViYVw': function (k, l) {
                        const b2 = b;
                        return d[b2(0x1d7)](k, l);
                    },
                    'SbQmB': function (k, l) {
                        const b3 = b;
                        return d[b3(0x1b0)](k, l);
                    }
                }, j = Index_1[b4(0x15d)][g];
            if (j) {
                if (d[b4(0x1ae)](d[b4(0x180)], d[b5(0x1b5)])) {
                    const {to: k} = h;
                    let l = null;
                    (0x21b9 * 0x1 + 0x5 * 0x4cf + -0x39c4, lodash_1[b5(0x1f7)])(j[b5(0x1d0) + 'e'], m => {
                        const b6 = b5, b7 = b5;
                        i[b6(0x190)](i[b6(0x13e)](String, m[b6(0x20b)]['id']), i[b7(0x1ba)](String, k)) && (l = m[b6(0x20b)]);
                    });
                    if ((0xf6a + 0x2b1 * -0xa + 0xb80, lodash_1[b4(0x18d)])(l))
                        return;
                    h[b5(0x163)] = l, (-0xf8a + 0x825 + 0x765, Utils_1[b5(0x14a)])(j[b5(0x16c)], j[b4(0x1d0) + 'e'], l[b4(0x173)], d[b5(0x1d2)], h);
                } else
                    (g[b4(0x199)][b4(0x201)] || h[b4(0x199)][b5(0x1bf)]) && k[b4(0x1b3)](d[b4(0x14e)], l);
            }
        });
    }, saveChatWindow = d => {
        const b8 = a9, b9 = a8, e = {};
        e[b8(0x140)] = b9(0x1a3) + b8(0x16f);
        const f = e;
        d['on'](f[b8(0x140)], async g => {
            const ba = b8, bb = b8, {userId: h} = g, {remove: i} = g, j = await User_1[ba(0x12c)][bb(0x17d)](h);
            if (j) {
                if (i) {
                } else {
                }
            }
        });
    }, onDisconnect = c => {
        const bc = a9, bd = a9, d = {
                'idXZE': bc(0x18c) + bd(0x193),
                'eSYls': function (e, f) {
                    return e !== f;
                },
                'yCWMt': bc(0x1d8),
                'VaUNa': bd(0x19d),
                'GZggS': function (e, f) {
                    return e < f;
                },
                'rWRMX': bc(0x17c),
                'gGxfZ': function (e, f) {
                    return e(f);
                },
                'jjUEF': function (e, f) {
                    return e === f;
                },
                'AGTnG': bc(0x1b1) + bd(0x130),
                'LhRmJ': function (e, f) {
                    return e !== f;
                },
                'nTbyG': bd(0x1af),
                'mTSmz': bc(0x210),
                'tQOeC': bc(0x20c) + bd(0x200),
                'MnswS': bd(0x154)
            };
        c['on'](d[bc(0x1a8)], async e => {
            const be = bc, bf = bd, {user: f} = c[be(0x208)][bf(0x146)], {tenantId: g} = f, h = be(0x161) + '_' + g, j = Index_1[be(0x15d)][h];
            if (j?.[be(0x1d0) + 'e']) {
                if (d[be(0x1f8)](d[be(0x16e)], d[bf(0x16e)])) {
                    const m = {};
                    return m[bf(0x12c)] = j, g && h[be(0x19e)] ? i : m;
                } else {
                    if (j[be(0x1d0) + 'e'][f['id']]) {
                        if (d[bf(0x1f8)](d[be(0x1a5)], d[be(0x1a5)]))
                            delete e?.[bf(0x183)][f['id']];
                        else {
                            const q = j[be(0x1d0) + 'e'][f['id']][bf(0x16c)];
                            d[bf(0x1f0)]((-0x10aa + -0x1ff2 + 0x44 * 0xb7, lodash_1[be(0x177)])(q), 0x1e * -0x127 + 0x76f + 0x1b25) ? delete j[bf(0x1d0) + 'e'][f['id']] : j[be(0x1d0) + 'e'][f['id']][be(0x16c)] = (0x502 + -0x237f + 0x1e7d, lodash_1[bf(0x148)])(q, c['id']);
                        }
                    }
                    const m = {};
                    m['id'] = c['id'];
                    const n = (-0x130c + -0xfd0 * 0x1 + 0x22dc, lodash_1[bf(0x1a7)])(j[be(0x16c)], m);
                    j[bf(0x16c)] = (0x5d7 * 0x4 + -0x2af * 0x1 + 0x1 * -0x14ad, lodash_1[be(0x148)])(j[bf(0x16c)], n);
                }
            }
            if (j?.[be(0x183)]) {
                if (j[be(0x183)][f['id']]) {
                    const t = j[bf(0x183)][f['id']][be(0x16c)];
                    d[bf(0x1f0)]((0x83 * 0x2e + 0xc45 * 0x3 + -0x3c59, lodash_1[be(0x177)])(t), 0xa8e + 0x1eb5 + -0x2941) ? delete j[be(0x183)][f['id']] : j[be(0x183)][f['id']][be(0x16c)] = (0x22c1 + -0x83a + -0x1a87, lodash_1[be(0x148)])(t, c['id']);
                }
                const r = {};
                r['id'] = c['id'];
                const s = (0x14d5 * 0x1 + -0x2360 + 0xe8b, lodash_1[bf(0x1a7)])(j[be(0x16c)], r);
                j[bf(0x16c)] = (0x2353 * -0x1 + -0x1 * 0x1215 + 0x3568, lodash_1[bf(0x148)])(j[bf(0x16c)], s);
            }
            const k = await User_1[bf(0x12c)][be(0x17d)](f['id']);
            k?.[bf(0x197)]({
                'status': d[be(0x1da)],
                'lastOnline': new Date()
            }), d[bf(0x202)](UpdateOnlineBubbles, c);
            if (d[be(0x1e1)](e, d[bf(0x1c9)])) {
                if (d[bf(0x209)](d[be(0x13c)], d[bf(0x129)]))
                    e = d[bf(0x1db)];
                else {
                    const v = {};
                    v[bf(0x16c)] = [m['id']], v[be(0x20b)] = n, k[be(0x1d0) + 'e'][l['id']] = v, o[be(0x16c)][be(0x1dc)](p), (0x15c9 + 0x2 * 0x9ad + -0x2923, q[bf(0x207)])(r, d[bf(0x175)]);
                }
            }
            logger_1[bf(0x1e4)][be(0x138)](be(0x182) + be(0x20e) + e + bf(0x14f) + f[bf(0x173)] + bf(0x1f5) + c['id']);
        });
    };
events[a9(0x12f) + a8(0x188)] = onSetUserIdle, events[a9(0x16d) + a8(0x16a)] = onSetUserActive, events[a9(0x143) + a8(0x1c4)] = onUpdateUsers, events[a9(0x128) + a8(0x1c2)] = spawnChatWindow, events[a9(0x1ff) + a9(0x19a)] = onChatMessage, events[a8(0x1d5) + 'ng'] = onChatTyping, events[a8(0x132) + a9(0x15b)] = onChatStopTyping, events[a8(0x1a3) + a8(0x16f)] = saveChatWindow, events[a9(0x1d3) + 'ct'] = onDisconnect, events[a9(0x214) + a9(0x155)] = c => {
    const bg = a8, bh = a8, d = {
            'vgcZR': function (f, g) {
                return f(g);
            }
        }, {user: e} = c[bg(0x208)][bh(0x146)];
    c['on'](e[bh(0x142)] + (bh(0x1bb) + bh(0x133) + bh(0x156)), () => {
        const bi = bh, bj = bg;
        d[bi(0x124)](UpdateOnlineBubbles, e[bi(0x142)]);
    });
}, events[a9(0x141) + a8(0x176)] = c => {
    const bk = a8, bl = a8, d = {
            'pleii': function (e, f) {
                return e(f);
            },
            'sioxp': function (e, f) {
                return e === f;
            },
            'czqCs': bk(0x20f),
            'BBRME': function (e, f) {
                return e(f);
            },
            'tSYUg': bl(0x141) + bl(0x176)
        };
    c['on'](d[bk(0x149)], () => {
        const bn = bk, bo = bk, e = {
                'oABqn': function (f, g) {
                    const bm = b;
                    return d[bm(0x18a)](f, g);
                }
            };
        d[bn(0x153)](d[bn(0x18b)], d[bn(0x18b)]) ? d[bn(0x1d1)](SpawnOpenChatWindows, c) : e[bn(0x14b)](e, f);
    });
};
function register(c) {
    const bp = a8, bq = a8, d = {
            'ysIES': bp(0x1cc) + bp(0x135) + bq(0x13f),
            'LtweP': function (g, h) {
                return g(h);
            }
        }, e = d[bq(0x164)][bp(0x17a)]('|');
    let f = 0x5ba + -0x2215 + 0x1c5b;
    while (!![]) {
        switch (e[f++]) {
        case '0':
            events[bp(0x1a3) + bq(0x16f)](c);
            continue;
        case '1':
            events[bq(0x132) + bq(0x15b)](c);
            continue;
        case '2':
            events[bp(0x214) + bp(0x155)](c);
            continue;
        case '3':
            events[bp(0x1d5) + 'ng'](c);
            continue;
        case '4':
            c[bp(0x208)][bq(0x146)][bq(0x20b)]['id'] && d[bp(0x181)](JoinChatServer, c);
            continue;
        case '5':
            events[bq(0x128) + bp(0x1c2)](c);
            continue;
        case '6':
            events[bp(0x143) + bq(0x1c4)](c);
            continue;
        case '7':
            events[bq(0x1ff) + bq(0x19a)](c);
            continue;
        case '8':
            events[bq(0x16d) + bq(0x16a)](c);
            continue;
        case '9':
            if (!c[bp(0x208)]?.[bp(0x146)]?.[bp(0x142)])
                return;
            continue;
        case '10':
            events[bq(0x1d3) + 'ct'](c);
            continue;
        case '11':
            events[bp(0x12f) + bp(0x188)](c);
            continue;
        case '12':
            events[bq(0x141) + bq(0x176)](c);
            continue;
        }
        break;
    }
}
function a() {
    const bt = [
        'email',
        'bIsrB',
        './Utils',
        'sioxp',
        'disconnect',
        'neBubbles',
        'bbles',
        'BLRnr',
        'chatStopTy',
        'TPXkG',
        'SDWgF',
        'Typing',
        'AMuSu',
        'shared',
        'IWBuN',
        'GZdxU',
        'BZxww',
        'socketData',
        'DvQva',
        'toUser',
        'ysIES',
        'zKLqs',
        'sortBy',
        'xvjno',
        '2|3|1|0|4',
        '5sqpFKu',
        'ctive',
        'NRuzb',
        'sockets',
        'onSetUserA',
        'yCWMt',
        'ndow',
        'defineProp',
        'attributes',
        'tive',
        'name',
        'yhQjW',
        'idXZE',
        'tWindows',
        'size',
        'ARIAD',
        'eventLoop',
        'split',
        'rjKgs',
        'offline',
        'findByPk',
        ':setUserAc',
        'eCivJ',
        'qhdiq',
        'LtweP',
        'User\x20disco',
        'idleUsers',
        'GpLeD',
        'PINOB',
        'TZZCX',
        'AXEkK',
        'dle',
        'nVdIn',
        'pleii',
        'czqCs',
        'joinSucces',
        'isNull',
        '../../util',
        'sortedUser',
        'QCuoH',
        'ssfully',
        'erty',
        'sfully',
        'YqXui',
        'UtTuW',
        'gdpYq',
        'update',
        'lodash',
        'role',
        'age',
        'UXNMQ',
        'TVxyy',
        'jSXQK',
        '__esModule',
        '1059264aoMYTp',
        'XVgnm',
        'sODiD',
        'forEach',
        'saveChatWi',
        'ping',
        'VaUNa',
        'jbmxl',
        'findKey',
        'MnswS',
        'uJFxK',
        's/logger',
        'sortByKeys',
        'log',
        'ildZX',
        'rpPgO',
        'Tpbxf',
        'rCfhB',
        'transport\x20',
        'boGuX',
        'emit',
        'ZGFDB',
        'jSyBv',
        'PMwtn',
        'OhvUb',
        'kwiSR',
        'onnectedCl',
        'SbQmB',
        ':chat:upda',
        'OmUDs',
        'rLeNL',
        'RosUH',
        'isAgent',
        'LkYtn',
        'ITkus',
        'indow',
        '904095IhicEA',
        'ers',
        'AAdaG',
        'jEtjT',
        'pvUuj',
        'List',
        'AGTnG',
        'sendToAllC',
        'chatMessag',
        '9|11|8|6|2',
        'jLVsv',
        'FMkcg',
        'gUnSu',
        'usersOnlin',
        'BBRME',
        'tWzJv',
        'onDisconne',
        'toPairs',
        'onChatTypi',
        'ezWNx',
        'kFpuw',
        'PFZRu',
        'events',
        'rWRMX',
        'tQOeC',
        'push',
        'WvXDV',
        'hqqEO',
        'FROM',
        'length',
        'jjUEF',
        '23266056bUvMQz',
        'xoWnA',
        'logger',
        'EqTzU',
        'BKuKb',
        ':joinSucce',
        'JUQGZ',
        'iOIOK',
        'qxsnB',
        'MKFub',
        'yFLwi',
        'IQVjE',
        '7984074nlbNzr',
        'PdJCo',
        'GZggS',
        'OuUUZ',
        'updateUser',
        'yRaOF',
        '__importDe',
        '\x20-\x20',
        'zVZJR',
        'find',
        'eSYls',
        './Index',
        'BoPMm',
        'GXvdm',
        'LNoIY',
        'ients',
        'rMWEC',
        'onChatMess',
        'minated',
        'isAdmin',
        'gGxfZ',
        'fault',
        '797418kkrzpK',
        'fromUser',
        'ls/User',
        'sendToSelf',
        'handshake',
        'LhRmJ',
        'ivbhd',
        'user',
        'client\x20ter',
        ':setUserId',
        'nnected\x20(',
        'qUFqW',
        'sFHhA',
        'vLwNu',
        'rver\x20USER\x20',
        '2789078JlmFdf',
        'updateOnli',
        'jMFDz',
        'fromPairs',
        'uuryz',
        'JWdbj',
        '../../mode',
        'username',
        'vgcZR',
        'value',
        'MPDpK',
        'profile',
        'spawnChatW',
        'mTSmz',
        'sortedIdle',
        'type',
        'default',
        'TCYwL',
        'NhVjZ',
        'onSetUserI',
        'error',
        'lAsPg',
        'onChatStop',
        'teOnlineBu',
        'ZpZsM',
        '|5|12|7|3|',
        'RNJte',
        'joinChatSe',
        'debug',
        'vlryA',
        'register',
        'chatTyping',
        'nTbyG',
        'mZJSO',
        'ViYVw',
        '1|0|10|4',
        'Odbpg',
        'getOpenCha',
        'tenantId',
        'onUpdateUs',
        'ZEYOx',
        '3072304InMMHQ',
        'auth',
        'pfbjT',
        'without',
        'tSYUg',
        'sendToUser',
        'oABqn',
        'info',
        'QkTph',
        'rPIDW',
        '):\x20'
    ];
    a = function () {
        return bt;
    };
    return a();
}
const eventLoop = c => {
        const br = a8, bs = a9, d = {
                'UtTuW': function (e, f) {
                    return e(f);
                }
            };
        d[br(0x195)](UpdateUsers, c), d[bs(0x195)](UpdateOnlineBubbles, c);
    }, a5 = {};
a5[a8(0x1d9)] = events, a5[a9(0x179)] = eventLoop, a5[a8(0x13a)] = register;
const chat = a5;
exports[a9(0x12c)] = chat;