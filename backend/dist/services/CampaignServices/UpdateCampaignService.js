'use strict';
const G = b, H = b;
(function (c, d) {
    const E = b, F = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(E(0xdb)) / (-0x21eb + 0x29 * -0x7a + 0x8e9 * 0x6) * (parseInt(F(0xde)) / (0x1677 + 0x677 + -0x1cec)) + parseInt(E(0xbd)) / (0x18c1 + 0x6df * 0x2 + 0x1 * -0x267c) * (-parseInt(E(0xa6)) / (-0x1f89 + -0x97 * 0x35 + 0x3ed0)) + parseInt(F(0xb6)) / (-0x19 * -0xa4 + -0x5d * -0xb + -0x13fe) * (-parseInt(E(0xa3)) / (0x5a7 + -0x1b4a + 0x15a9)) + parseInt(E(0xe5)) / (0x1 * 0x121d + -0x141 * 0x5 + 0x5 * -0x25d) * (parseInt(F(0xb3)) / (0x906 + -0x1629 + 0x1 * 0xd2b)) + -parseInt(F(0xdf)) / (-0x1 * 0xe09 + -0x1505 + 0x2317 * 0x1) * (parseInt(F(0xa8)) / (0x282 * 0xe + 0x73a + -0x2a4c)) + -parseInt(F(0xd1)) / (0x6 * -0x43d + 0x1147 * 0x2 + -0x915) + -parseInt(E(0xaf)) / (0xe9e + 0x2547 * 0x1 + -0x33d9) * (-parseInt(F(0xdc)) / (-0x5e3 + -0x6b * 0x3 + -0x1 * -0x731));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xda * 0x1790 + 0x137cf * -0x7 + -0xd511 * -0x2f));
function a() {
    const P = [
        '26UgFTQm',
        '9CoOCuB',
        'reload',
        'GN_NOT_IN_',
        'ls/Campaig',
        'ATE_CAMPAI',
        'length',
        '217ieVwzh',
        'VPsLq',
        'CANCELED_P',
        'substr',
        'erty',
        'PAIGN_FOUN',
        'canceled',
        'tenantId',
        'ERR_NO_CAM',
        'ERR_NO_UPD',
        'map',
        'getTime',
        '__importDe',
        'error',
        'defineProp',
        'xDbDO',
        '6cceEeC',
        'ewKig',
        '__esModule',
        '20lsgSwr',
        'xBFSW',
        '1303270hHPjjj',
        's/logger',
        'fault',
        'start',
        'all',
        'where',
        'filename',
        '1477572vYyeRA',
        'findOne',
        'split',
        'gtWhm',
        '292064ctuVrp',
        'pending',
        'Kxwyr',
        '1578965rYiTpr',
        'PjHGi',
        'vvzMt',
        'null',
        'wBDys',
        'mimetype',
        'status',
        '418896crHcMB',
        'value',
        'mZlEF',
        'ENDING',
        'default',
        'naWrj',
        'indexOf',
        'phfFR',
        'VaSan',
        'mediaType',
        'nLSSn',
        'jMoEy',
        'mediaUrl',
        'QEBlo',
        'xaKOu',
        'ZBrDf',
        'mRojI',
        'JTjCo',
        'update',
        '../../util',
        '6291725duVbuq',
        'NJBlu',
        'uPwoj',
        '../../mode',
        '../../erro',
        'logger',
        'KcFFK',
        'gSZWt',
        'isArray',
        'rs/AppErro',
        '88558iBDoHk',
        '13TOtypj',
        'LqJXh'
    ];
    a = function () {
        return P;
    };
    return a();
}
var __importDefault = this && this[G(0x9f) + H(0xaa)] || function (c) {
    const I = G;
    return c && c[I(0xa5)] ? c : { 'default': c };
};
const D = {};
D[G(0xbe)] = !![], Object[H(0xa1) + G(0x97)](exports, G(0xa5), D);
const AppError_1 = __importDefault(require(H(0xd5) + G(0xda) + 'r')), Campaign_1 = __importDefault(require(G(0xd4) + G(0xe2) + 'n')), logger_1 = require(H(0xd0) + G(0xa9)), cArquivoName = d => {
        const J = G, K = H, e = {};
        e[J(0xd7)] = function (i, j) {
            return i - j;
        };
        const f = e;
        if (!d)
            return '';
        const g = d[J(0xb1)]('/'), h = g[f[J(0xd7)](g[K(0xe4)], 0x131f * 0x1 + -0x680 + -0x22 * 0x5f)];
        return h;
    }, UpdateCampaignService = async ({
        campaignData: f,
        medias: g,
        campaignId: h,
        tenantId: i
    }) => {
        const L = H, M = H, j = {
                'xaKOu': function (p, q) {
                    return p - q;
                },
                'vvzMt': function (p, q) {
                    return p !== q;
                },
                'jMoEy': L(0xb5),
                'PjHGi': function (p, q) {
                    return p === q;
                },
                'mZlEF': M(0xa7),
                'uPwoj': L(0xd8),
                'VPsLq': function (p, q) {
                    return p(q);
                },
                'xDbDO': M(0xb4),
                'LqJXh': M(0x99),
                'ZBrDf': L(0x9c) + M(0xe3) + L(0xe1) + M(0x95) + M(0xc0),
                'ewKig': L(0xb9),
                'gtWhm': M(0xba),
                'QEBlo': L(0xc2),
                'nLSSn': function (p, q) {
                    return p !== q;
                },
                'JTjCo': M(0xc4),
                'VaSan': M(0xd2),
                'mRojI': M(0x9b) + L(0x98) + 'D'
            };
        let k, l = {
                ...f,
                'mediaUrl': j[L(0xe6)](cArquivoName, f[M(0xc9)]),
                'start': f[L(0xab)]
            };
        const m = {};
        m['id'] = h, m[M(0x9a)] = i;
        const n = {};
        n[L(0xad)] = m;
        const o = await Campaign_1[M(0xc1)][L(0xb0)](n);
        if (j[M(0xb8)](o?.[M(0xbc)], j[L(0xa2)]) && j[M(0xb8)](o?.[M(0xbc)], j[L(0xdd)]))
            throw new AppError_1[(M(0xc1))](j[M(0xcc)], 0x19e + 0x5 * -0x13d + 0x627);
        if (g && Array[L(0xd9)](g) && g[L(0xe4)])
            await Promise[L(0xac)](g[M(0x9d)](async p => {
                const N = M, O = L;
                try {
                    if (!p[N(0xae)]) {
                        if (j[O(0xb8)](j[O(0xc8)], j[O(0xc8)]))
                            try {
                                if (!q[O(0xae)]) {
                                    const r = w[O(0xbb)][N(0xb1)]('/')[-0x1176 + -0x7 * -0x50a + -0x11cf][O(0xb1)](';')[-0x29 * 0x12 + -0x2 * -0x9ed + 0x2 * -0x87c];
                                    x[N(0xae)] = new y()[N(0x9e)]() + '.' + r;
                                }
                                u = v;
                            } catch (s) {
                                A[O(0xd6)][O(0xa0)](s);
                            }
                        else {
                            const r = p[O(0xbb)][N(0xb1)]('/')[-0x1 * -0x1b61 + -0x1c9a + 0x13a][O(0xb1)](';')[-0x19d6 * 0x1 + -0x4d * 0x29 + 0x262b];
                            p[N(0xae)] = new Date()[O(0x9e)]() + '.' + r;
                        }
                    }
                    k = p;
                } catch (s) {
                    if (j[N(0xb7)](j[O(0xbf)], j[N(0xd3)])) {
                        if (!e)
                            return '';
                        const u = f[N(0xb1)]('/'), v = u[j[N(0xcb)](u[O(0xe4)], 0x27 + -0x24bc + 0x6 * 0x619)];
                        return v;
                    } else
                        logger_1[N(0xd6)][N(0xa0)](s);
                }
            })), l = {
                ...f,
                'mediaUrl': k?.[M(0xae)],
                'mediaType': k?.[L(0xbb)][M(0x96)](-0x866 + 0x1 * -0x13a0 + -0x2 * -0xe03, k[L(0xbb)][M(0xc3)]('/'))
            };
        else {
            if (j[L(0xb7)](f[M(0xc9)], j[M(0xa4)])) {
                if (j[L(0xb7)](j[L(0xb2)], j[M(0xca)])) {
                    const q = {};
                    return q[L(0xc1)] = j, g && h[M(0xa5)] ? i : q;
                } else {
                    const q = { ...f };
                    q[M(0xc9)] = '', q[L(0xc6)] = '', l = q;
                }
            }
        }
        if (!o) {
            if (j[M(0xc7)](j[M(0xce)], j[M(0xc5)]))
                throw new AppError_1[(M(0xc1))](j[M(0xcd)], -0x4c4 + 0x5b * 0xa + -0x1 * -0x2ca);
            else {
                if (!i[L(0xae)]) {
                    const s = o[M(0xbb)][M(0xb1)]('/')[0x98f + -0x7f * 0x47 + 0x1 * 0x19ab][M(0xb1)](';')[-0x2441 * -0x1 + -0x6a * 0x7 + 0x1 * -0x215b];
                    p[M(0xae)] = new q()[L(0x9e)]() + '.' + s;
                }
                m = n;
            }
        }
        return await o[M(0xcf)](l), await o[M(0xe0)](), o;
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1147 * 0x1 + 0x265b * 0x1 + -0x35 * 0x63);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[H(0xc1)] = UpdateCampaignService;