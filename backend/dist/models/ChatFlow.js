'use strict';
const a4 = b, a7 = b;
(function (c, d) {
    const a2 = b, a3 = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(a2(0x21f)) / (0x2501 * 0x1 + -0x7 * 0x1d5 + -0x182d) + parseInt(a2(0x1d8)) / (0x1 * 0xed1 + -0x312 + -0xbbd) + -parseInt(a2(0x22e)) / (0x6bf * 0x1 + -0xd39 * 0x2 + 0x13b6) * (parseInt(a2(0x22a)) / (0xf0d * 0x1 + 0xc5f * 0x2 + -0x1 * 0x27c7)) + parseInt(a3(0x211)) / (-0x218f + -0x7 * -0x377 + -0x1 * -0x953) * (parseInt(a2(0x218)) / (0x216d + 0xd * 0x26 + 0x1b * -0x14f)) + parseInt(a3(0x1ef)) / (-0x13 * -0x47 + -0x209 * 0x9 + -0x1 * -0xd13) * (-parseInt(a3(0x227)) / (-0xb1 * -0x32 + 0x1ed3 * 0x1 + -0x415d)) + parseInt(a3(0x1c2)) / (-0x4f * 0x74 + -0x4d1 + 0x28a6) * (-parseInt(a3(0x1fa)) / (-0x1f0b + 0x1012 + 0xf03)) + parseInt(a2(0x20c)) / (0x1302 + -0x1ebd + 0xbc6);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * -0x3e44d + -0x4 * -0x2f169 + -0x30e7d));
var __decorate = this && this[a4(0x22d)] || function (e, f, g, h) {
        const a5 = a4, a6 = a4, j = {
                'LrZbl': function (o, p) {
                    return o < p;
                },
                'GIBzR': function (o, p) {
                    return o === p;
                },
                'iHjpO': a5(0x1d1),
                'GEvPQ': function (o, p) {
                    return o === p;
                },
                'ETqrT': a6(0x1de),
                'urDWK': function (o, p) {
                    return o - p;
                },
                'pIJev': function (o, p) {
                    return o >= p;
                },
                'WwuqS': function (o, p) {
                    return o < p;
                },
                'KPOra': function (o, p) {
                    return o(p);
                },
                'ZpsPW': function (o, p) {
                    return o > p;
                },
                'haPHM': function (o, p, q, s) {
                    return o(p, q, s);
                },
                'knvUG': function (o, p, q) {
                    return o(p, q);
                }
            };
        var k = arguments[a6(0x1d6)], l = j[a5(0x225)](k, 0x8dd + -0x1e0a + 0x1530) ? f : j[a6(0x1e7)](h, null) ? h = Object[a6(0x21c) + a5(0x1d4) + a5(0x1dd)](f, g) : h, m;
        if (j[a6(0x1e7)](typeof Reflect, j[a6(0x1ce)]) && j[a6(0x1e1)](typeof Reflect[a6(0x1e5)], j[a5(0x20b)]))
            l = Reflect[a6(0x1e5)](e, f, g, h);
        else {
            for (var n = j[a6(0x1bc)](e[a6(0x1d6)], -0x35 * 0xac + 0x1 * 0xbb5 + 0x5 * 0x4c8); j[a6(0x1f2)](n, -0x1adb + -0x2bf * -0x2 + 0x155d); n--)
                if (m = e[n])
                    l = (j[a6(0x1fe)](k, -0x20 * -0xd + -0xed2 * -0x1 + -0x1 * 0x106f) ? j[a5(0x22c)](m, l) : j[a6(0x1c3)](k, -0x1007 + -0x1abf + 0x2ac9) ? j[a6(0x209)](m, f, g, l) : j[a6(0x1e2)](m, f, g)) || l;
        }
        return j[a5(0x1c3)](k, 0x1 * -0x187d + 0x21fd + -0x97d) && l && Object[a5(0x1cf) + a5(0x220)](f, g, l), l;
    }, __metadata = this && this[a7(0x233)] || function (d, e) {
        const a8 = a4, a9 = a7, f = {};
        f[a8(0x1bb)] = function (h, i) {
            return h === i;
        }, f[a9(0x207)] = a8(0x1d1), f[a9(0x1cb)] = a8(0x1de);
        const g = f;
        if (g[a8(0x1bb)](typeof Reflect, g[a9(0x207)]) && g[a8(0x1bb)](typeof Reflect[a9(0x1c1)], g[a9(0x1cb)]))
            return Reflect[a9(0x1c1)](d, e);
    }, __importDefault = this && this[a4(0x1bd) + a7(0x1c9)] || function (c) {
        const aa = a4;
        return c && c[aa(0x1f7)] ? c : { 'default': c };
    };
const a0 = {};
a0[a7(0x216)] = !![], Object[a4(0x1cf) + a7(0x220)](exports, a4(0x1f7), a0);
const sequelize_typescript_1 = require(a4(0x232) + a4(0x1d0)), User_1 = __importDefault(require(a7(0x204))), Tenant_1 = __importDefault(require(a7(0x1c8)));
let ChatFlow = class ChatFlow extends sequelize_typescript_1[a7(0x229)] {
    get [a4(0x1f5)]() {
        const ab = a7, ac = a7, c = {
                'OiViQ': function (e, f) {
                    return e === f;
                },
                'dpYHf': ab(0x1d1),
                'iqApw': ab(0x1de),
                'ozpBt': function (e, f) {
                    return e === f;
                },
                'GGiAe': ac(0x20e),
                'KqZri': function (e, f) {
                    return e < f;
                },
                'iblbN': function (e, f) {
                    return e === f;
                },
                'tQtWe': function (e, f) {
                    return e === f;
                },
                'XeLEf': function (e, f) {
                    return e === f;
                },
                'AdznD': function (e, f) {
                    return e - f;
                },
                'FXHsK': function (e, f) {
                    return e >= f;
                },
                'rgGJx': function (e, f) {
                    return e < f;
                },
                'ATqpO': function (e, f) {
                    return e(f);
                },
                'Exios': function (e, f) {
                    return e > f;
                },
                'hgElj': function (e, f, g, h) {
                    return e(f, g, h);
                },
                'cdTKP': function (e, f, g) {
                    return e(f, g);
                },
                'PHnwP': ab(0x1f5),
                'LanoR': function (e, f) {
                    return e === f;
                },
                'KiZIt': ac(0x20f),
                'bxuBX': ab(0x230),
                'OUHRE': function (e, f) {
                    return e !== f;
                },
                'uoARY': ac(0x1ee),
                'DVFJN': ab(0x1be),
                'iTWXd': ab(0x21e),
                'qphVW': function (e, f) {
                    return e === f;
                },
                'PhBwC': ab(0x1fc),
                'rZeis': ab(0x215)
            }, d = this[ac(0x1d7) + 'ue'](c[ac(0x1fb)]);
        if (d) {
            if (c[ac(0x219)](c[ac(0x1df)], c[ab(0x21a)])) {
                if (c[ab(0x1bf)](typeof h, c[ac(0x208)]) && c[ab(0x1bf)](typeof i[ac(0x1c1)], c[ab(0x1ca)]))
                    return j[ab(0x1c1)](k, l);
            } else {
                for (const f of d[ab(0x1e8)]) {
                    if (c[ab(0x1ea)](c[ac(0x1ba)], c[ab(0x1ba)])) {
                        if (c[ab(0x1e3)](i[ab(0x1c0)], c[ab(0x1f0)]) && j[ac(0x224)][ac(0x222)]) {
                            const {
                                    BACKEND_URL: h,
                                    PROXY_PORT: i
                                } = o[ac(0x1c4)], j = p[ab(0x224)][ac(0x222)];
                            q[ac(0x224)][ab(0x1dc)] = j, r[ab(0x224)][ab(0x222)] = h + ':' + i + ab(0x21b) + j;
                        }
                    } else {
                        if (c[ab(0x1eb)](f[ab(0x1c0)], c[ac(0x231)]))
                            for (const h of f[ab(0x202) + 'ns']) {
                                if (c[ac(0x212)](c[ab(0x1f1)], c[ab(0x1f1)])) {
                                    if (c[ab(0x210)](h[ac(0x1c0)], c[ab(0x1f0)]) && h[ac(0x224)][ac(0x222)]) {
                                        if (c[ab(0x1ea)](c[ab(0x201)], c[ab(0x1b9)])) {
                                            const {
                                                    BACKEND_URL: i,
                                                    PROXY_PORT: j
                                                } = process[ac(0x1c4)], k = h[ac(0x224)][ab(0x222)];
                                            h[ac(0x224)][ac(0x1dc)] = k, h[ab(0x224)][ac(0x222)] = i + ':' + j + ab(0x21b) + k;
                                        } else {
                                            const {
                                                    BACKEND_URL: m,
                                                    PROXY_PORT: n
                                                } = g[ac(0x1c4)], o = h[ab(0x224)][ab(0x222)];
                                            i[ac(0x224)][ab(0x1dc)] = o, j[ab(0x224)][ac(0x222)] = m + ':' + n + ac(0x21b) + o;
                                        }
                                    }
                                } else {
                                    var n = arguments[ab(0x1d6)], o = c[ac(0x1cc)](n, 0xf2e * 0x2 + 0x2211 + -0x406a) ? z : c[ab(0x212)](A, null) ? B = C[ac(0x21c) + ab(0x1d4) + ab(0x1dd)](D, E) : F, p;
                                    if (c[ac(0x200)](typeof G, c[ac(0x208)]) && c[ac(0x1eb)](typeof H[ac(0x1e5)], c[ab(0x1ca)]))
                                        o = I[ab(0x1e5)](J, K, L, M);
                                    else {
                                        for (var q = c[ab(0x1f4)](N[ab(0x1d6)], 0x1f14 + -0x4b8 + -0x1a5b); c[ac(0x1db)](q, 0x1a85 + -0x18ec + -0x199); q--)
                                            if (p = O[q])
                                                o = (c[ac(0x1f3)](n, -0x1ac8 + -0x14d1 + 0x2f9c) ? c[ac(0x1d3)](p, o) : c[ab(0x1c5)](n, 0x1 * -0x67 + -0x3d1 * 0x1 + 0x43b) ? c[ac(0x21d)](p, P, Q, o) : c[ac(0x20a)](p, R, S)) || o;
                                    }
                                    return c[ac(0x1c5)](n, 0x1d0 + 0x1c8 + 0x83 * -0x7) && o && T[ac(0x1cf) + ac(0x220)](U, V, o), o;
                                }
                            }
                    }
                }
                return d;
            }
        }
        return {};
    }
};
__decorate([
    sequelize_typescript_1[a7(0x206)],
    sequelize_typescript_1[a7(0x214) + a4(0x1e9)],
    sequelize_typescript_1[a7(0x20d)],
    __metadata(a4(0x1e0) + 'e', String)
], ChatFlow[a4(0x1c6)], 'id', void (-0x844 + -0x6 * 0xc5 + 0x671 * 0x2)), __decorate([
    (0xe4 * -0xa + 0x145 + 0x7a3, sequelize_typescript_1[a4(0x20d)])(sequelize_typescript_1[a7(0x1d5)][a4(0x1f6)]),
    __metadata(a7(0x1e0) + 'e', String)
], ChatFlow[a4(0x1c6)], a7(0x1f8), void (-0x266c * -0x1 + -0xed7 + -0x1795)), __decorate([
    (-0x3 * 0xc61 + 0x276 * -0x1 + 0x3 * 0xd33, sequelize_typescript_1[a4(0x22b)])({}),
    sequelize_typescript_1[a4(0x1d2)],
    (-0x1927 * 0x1 + -0x1 * 0x1a78 + 0xf * 0x371, sequelize_typescript_1[a4(0x20d)])(sequelize_typescript_1[a4(0x1d5)][a7(0x203)]),
    __metadata(a7(0x1e0) + 'e', Object),
    __metadata(a7(0x217) + a7(0x1e6), [])
], ChatFlow[a4(0x1c6)], a4(0x1f5), null), __decorate([
    (0x2e2 + -0x35 * -0x25 + -0xa8b, sequelize_typescript_1[a4(0x22b)])(!![]),
    sequelize_typescript_1[a4(0x20d)],
    __metadata(a4(0x1e0) + 'e', Boolean)
], ChatFlow[a7(0x1c6)], a4(0x1c7), void (-0xdd5 + -0x1 * 0xe99 + 0x1c6e)), __decorate([
    (0x16ca + 0x1 * -0x14f3 + -0x9d * 0x3, sequelize_typescript_1[a7(0x22b)])(![]),
    sequelize_typescript_1[a4(0x20d)],
    __metadata(a7(0x1e0) + 'e', Boolean)
], ChatFlow[a7(0x1c6)], a4(0x1ed), void (-0x5 * 0x535 + -0x805 + 0x220e)), __decorate([
    (0x11 * 0x189 + 0x26dd + -0x40f6 * 0x1, sequelize_typescript_1[a4(0x22b)])(null),
    (0x1b37 * 0x1 + -0x2 * -0x8d7 + -0x2ce5, sequelize_typescript_1[a7(0x20d)])(sequelize_typescript_1[a4(0x1d5)][a7(0x1f6)]),
    __metadata(a4(0x1e0) + 'e', String)
], ChatFlow[a4(0x1c6)], a7(0x213) + 'te', void (-0x1cf6 + 0x60c + 0x16ea)), __decorate([
    (-0x15fa + 0x7 * -0x29 + 0x1719, sequelize_typescript_1[a4(0x228)])(() => User_1[a4(0x205)]),
    sequelize_typescript_1[a4(0x20d)],
    __metadata(a4(0x1e0) + 'e', Number)
], ChatFlow[a7(0x1c6)], a4(0x22f), void (0x4a7 * 0x1 + -0x16a6 + 0x11ff * 0x1)), __decorate([
    (-0x4 * -0x1d2 + 0x1 * -0x233f + -0x1bf7 * -0x1, sequelize_typescript_1[a7(0x1fd)])(() => User_1[a4(0x205)]),
    __metadata(a4(0x1e0) + 'e', User_1[a4(0x205)])
], ChatFlow[a4(0x1c6)], a7(0x1cd), void (0xe * 0x139 + 0x811 + 0x1 * -0x192f)), __decorate([
    (-0x964 + 0x1 * -0x65f + 0x541 * 0x3, sequelize_typescript_1[a7(0x228)])(() => Tenant_1[a4(0x205)]),
    sequelize_typescript_1[a4(0x20d)],
    __metadata(a7(0x1e0) + 'e', Number)
], ChatFlow[a4(0x1c6)], a4(0x1b8), void (0x567 * -0x1 + -0x15df * 0x1 + -0x1 * -0x1b46)), __decorate([
    (0x535 * 0x2 + -0x2357 + -0x1 * -0x18ed, sequelize_typescript_1[a4(0x1fd)])(() => Tenant_1[a4(0x205)]),
    __metadata(a4(0x1e0) + 'e', Tenant_1[a7(0x205)])
], ChatFlow[a7(0x1c6)], a4(0x1da), void (0x1 * -0x247d + -0x2 * 0x943 + 0x1 * 0x3703)), __decorate([
    sequelize_typescript_1[a4(0x1ec)],
    (0x1203 + 0x2196 + -0x103 * 0x33, sequelize_typescript_1[a4(0x20d)])(sequelize_typescript_1[a4(0x1d5)][a4(0x1ff)](0x2 * 0xb1 + 0x5 * 0x68f + -0x1 * 0x2227)),
    __metadata(a4(0x1e0) + 'e', Date)
], ChatFlow[a4(0x1c6)], a7(0x223), void (-0x1 * -0x19cf + 0x53f + -0x1f0e)), __decorate([
    sequelize_typescript_1[a4(0x1d9)],
    (-0xac5 * -0x1 + -0x20d6 + 0x1611, sequelize_typescript_1[a4(0x20d)])(sequelize_typescript_1[a7(0x1d5)][a7(0x1ff)](0x3f * -0x3 + -0x6ed + 0x7b0)),
    __metadata(a4(0x1e0) + 'e', Date)
], ChatFlow[a4(0x1c6)], a4(0x221), void (0x1326 + -0x1 * -0xf47 + 0x4eb * -0x7));
const a1 = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1658 * -0x1 + 0x1775 * -0x1 + 0xf * 0x32b);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const ad = [
        'object',
        'AllowNull',
        'ATqpO',
        'ertyDescri',
        'DataType',
        'length',
        'getDataVal',
        '270028XPpJTL',
        'UpdatedAt',
        'tenant',
        'FXHsK',
        'fileName',
        'ptor',
        'function',
        'KiZIt',
        'design:typ',
        'GEvPQ',
        'knvUG',
        'ozpBt',
        'Table',
        'decorate',
        'amtypes',
        'GIBzR',
        'nodeList',
        'ent',
        'OUHRE',
        'XeLEf',
        'CreatedAt',
        'isDeleted',
        'ZJsDy',
        '3602081zyzqtM',
        'GGiAe',
        'iTWXd',
        'pIJev',
        'rgGJx',
        'AdznD',
        'flow',
        'TEXT',
        '__esModule',
        'name',
        'freezeTabl',
        '10RKSidF',
        'PHnwP',
        'WmCcE',
        'BelongsTo',
        'WwuqS',
        'DATE',
        'tQtWe',
        'PhBwC',
        'interactio',
        'JSON',
        './User',
        'default',
        'PrimaryKey',
        'eeyJe',
        'dpYHf',
        'haPHM',
        'cdTKP',
        'ETqrT',
        '47887246KvMYGs',
        'Column',
        'MediaField',
        'Yiqed',
        'qphVW',
        '130FqrdLO',
        'iblbN',
        'celularTes',
        'AutoIncrem',
        'HgvtL',
        'value',
        'design:par',
        '57810zTMHvH',
        'LanoR',
        'bxuBX',
        '/public/',
        'getOwnProp',
        'hgElj',
        'DPBnL',
        '882920lITSog',
        'erty',
        'updatedAt',
        'mediaUrl',
        'createdAt',
        'data',
        'LrZbl',
        'eName',
        '8CONewd',
        'ForeignKey',
        'Model',
        '4052NeXvKs',
        'Default',
        'KPOra',
        '__decorate',
        '3345CgRBPx',
        'userId',
        'FeFWi',
        'DVFJN',
        'sequelize-',
        '__metadata',
        'tenantId',
        'rZeis',
        'uoARY',
        'vtGif',
        'urDWK',
        '__importDe',
        'node',
        'OiViQ',
        'type',
        'metadata',
        '12471156opKiWn',
        'ZpsPW',
        'env',
        'Exios',
        'prototype',
        'isActive',
        './Tenant',
        'fault',
        'iqApw',
        'EOvMj',
        'KqZri',
        'user',
        'iHjpO',
        'defineProp',
        'typescript'
    ];
    a = function () {
        return ad;
    };
    return a();
}
a1[a7(0x1f9) + a7(0x226)] = !![], ChatFlow = __decorate([(0x569 + -0x1cda + 0x1771, sequelize_typescript_1[a7(0x1e4)])(a1)], ChatFlow), exports[a7(0x205)] = ChatFlow;