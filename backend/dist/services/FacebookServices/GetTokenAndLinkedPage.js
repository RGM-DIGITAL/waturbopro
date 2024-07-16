'use strict';
const C = b, D = b;
(function (c, d) {
    const A = b, B = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(A(0x1c0)) / (0x254d + -0x163d * -0x1 + -0x3b89) + -parseInt(B(0x1ea)) / (0x97 * 0x3b + -0x1 * -0x1c50 + -0x3f1b) * (-parseInt(A(0x21c)) / (0x4 * -0x2d7 + -0x3 * -0x713 + 0x4ed * -0x2)) + parseInt(A(0x206)) / (-0x1a68 + -0x192 + 0xdff * 0x2) * (parseInt(B(0x202)) / (-0x89f * -0x3 + -0x255b + 0x7 * 0x1a5)) + -parseInt(B(0x1d2)) / (-0x4df + -0x1c13 * 0x1 + 0x20f8 * 0x1) + -parseInt(A(0x1d1)) / (0x1 * 0x1ca8 + -0x2 * -0x1334 + -0x4309) + parseInt(B(0x1e1)) / (-0x559 * -0x7 + -0x1 * 0x2203 + 0xe * -0x3e) * (parseInt(B(0x1c6)) / (0x5d * 0xb + -0xbc2 + 0x3e6 * 0x2)) + parseInt(A(0x1c5)) / (0x1af * 0x9 + -0x9aa + -0x573);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xb42c0 + -0x4db90 + -0xe2bfd * -0x2));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x985 * 0x3 + 0x1cdc + 0x172);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const N = [
        'emit',
        'ge_token&c',
        'whatsapp',
        '&client_se',
        '/accounts?',
        's/logger',
        'CONNECTED',
        '../../mode',
        '893180jCPAhr',
        '/socket',
        'HFUgy',
        'ok.com/',
        '12SSCCgq',
        'ls/Whatsap',
        'PP_ID',
        'enas\x201\x20pág',
        '__esModule',
        'YNauK',
        '/oauth/acc',
        'fbObject',
        'get',
        'KEY',
        'ken',
        'Escolha\x20ap',
        'update',
        'fault',
        'ess_token?',
        'length',
        '../../libs',
        '=fb_exchan',
        'where',
        'fbPageId',
        'eDHII',
        'status',
        '294lrPqfZ',
        'https://gr',
        '1391723iCkXhN',
        'env',
        'accountId',
        'FACEBOOK_A',
        'default',
        '17069690BNTgma',
        '2718342OrIbty',
        's\x201\x20página',
        'access_tok',
        '&fb_exchan',
        'EeyeJ',
        'long_lived',
        'session',
        'defineProp',
        'so\x20e\x20selec',
        'ina.\x20Refaç',
        'tokenAPI',
        '8156540jZdgrk',
        '2561268uITNXh',
        ':whatsappS',
        'action',
        '../../util',
        'getIO',
        'rs/AppErro',
        'tenantId',
        'sHOzJ',
        'method',
        './SetLogou',
        'aph.facebo',
        'PP_SECRET_',
        'SeGQJ',
        'tLinkedPag',
        '../../erro',
        '40dbLoLz',
        'a\x20o\x20proces',
        'lient_id=',
        'ession',
        'logger',
        '_access_to',
        'grant_type',
        'qdERr',
        'ccess_toke',
        '652ykAbMV',
        'error',
        '__importDe',
        'KPyZM',
        'erty',
        'qVsac',
        'axios',
        'en=',
        'limit=25&a',
        'url',
        'cret=',
        'value',
        'v16.0',
        'GET',
        'ione\x20apena',
        'ge_token='
    ];
    a = function () {
        return N;
    };
    return a();
}
var __importDefault = this && this[C(0x1ec) + C(0x213)] || function (c) {
    const E = C;
    return c && c[E(0x20a)] ? c : { 'default': c };
};
const k = {};
k[C(0x1f5)] = !![], Object[C(0x1cd) + C(0x1ee)](exports, D(0x20a), k);
const axios_1 = __importDefault(require(D(0x1f0))), AppError_1 = __importDefault(require(D(0x1e0) + C(0x1d7) + 'r')), Whatsapp_1 = __importDefault(require(D(0x201) + D(0x207) + 'p')), SetLogoutLinkedPage_1 = __importDefault(require(C(0x1db) + D(0x1df) + 'e')), socket_1 = require(C(0x216) + C(0x203)), logger_1 = require(D(0x1d5) + D(0x1ff)), api_version = D(0x1f6), baseUrl = C(0x1bf) + D(0x1dc) + D(0x205) + api_version, app_id = process[D(0x1c1)][C(0x1c3) + C(0x208)], app_secret = process[C(0x1c1)][C(0x1c3) + C(0x1dd) + C(0x20f)], getLongLivedAccessToken = async c => {
        const F = D, G = D, {data: d} = await axios_1[F(0x1c4)][F(0x20e)](baseUrl + (F(0x20c) + F(0x214) + G(0x1e7) + G(0x217) + F(0x1fb) + F(0x1e3)) + app_id + (F(0x1fd) + G(0x1f4)) + app_secret + (G(0x1c9) + F(0x1f9)) + c);
        return d[G(0x1c8) + 'en'];
    }, getPermanentPageAccessToken = async (c, d) => {
        const H = D, I = C, {
                data: {data: e}
            } = await axios_1[H(0x1c4)][I(0x20e)](baseUrl + '/' + d + (H(0x1fe) + H(0x1c8) + H(0x1f1)) + c);
        return e[H(0x215)] && e[-0x1b51 + -0x1bf5 + 0xb0e * 0x5];
    }, getPageInfo = async (e, f) => {
        const J = C, K = C, g = {};
        g[J(0x204)] = K(0x1f7);
        const h = g, i = baseUrl + '/' + e + (J(0x1fe) + K(0x1f2) + J(0x1e9) + 'n=') + f, j = {};
        j[K(0x1da)] = h[J(0x204)], j[K(0x1f3)] = i;
        const {
            data: {data: l}
        } = await (0x5 * -0x105 + -0x331 + 0x84a, axios_1[J(0x1c4)])(j);
        return l;
    }, GetTokenAndLinkedPage = async ({
        whatsapp: i,
        accountId: j,
        userToken: l,
        tenantId: m
    }) => {
        const L = C, M = D, n = {
                'KPyZM': function (o, p, q) {
                    return o(p, q);
                },
                'EeyeJ': function (o, p) {
                    return o > p;
                },
                'eDHII': L(0x211) + M(0x209) + L(0x1cf) + L(0x1e2) + L(0x1ce) + M(0x1f8) + M(0x1c7) + '.',
                'sHOzJ': function (o, p) {
                    return o === p;
                },
                'SeGQJ': function (o, p) {
                    return o(p);
                },
                'qdERr': function (o, p, q) {
                    return o(p, q);
                },
                'YNauK': L(0x200),
                'qVsac': M(0x212)
            };
        try {
            const o = (0x179d + -0x2a * -0x67 + 0xd81 * -0x3, socket_1[M(0x1d6)])(), p = await n[M(0x1ed)](getPageInfo, j, l);
            if (n[L(0x1ca)](p[L(0x215)], 0x104 * -0x25 + -0x2326 + 0x48bb))
                throw new AppError_1[(M(0x1c4))](n[L(0x21a)], -0x11 * 0x231 + -0x1147 * -0x1 + 0x158a);
            if (n[L(0x1d9)](p[M(0x215)], -0x1a69 * -0x1 + -0x1 * 0x35f + 0x1 * -0x170a)) {
                const y = {};
                y[M(0x1fc)] = i, y[M(0x1d8)] = m, await (-0xe9b + -0x26b3 + -0x2 * -0x1aa7, SetLogoutLinkedPage_1[M(0x1c4)])(y);
                return;
            }
            const q = await n[L(0x1de)](getLongLivedAccessToken, l), r = await n[M(0x1e8)](getPermanentPageAccessToken, q, j), s = {};
            s[M(0x21b)] = n[M(0x20b)], s[L(0x219)] = r['id'], s[M(0x20d)] = { ...r }, s[M(0x1d0)] = r[M(0x1c8) + 'en'], s[M(0x20d)][M(0x1c2)] = j, s[M(0x20d)][M(0x1cb) + M(0x1e6) + M(0x210)] = q;
            const t = s, u = {};
            u['id'] = i['id'], u[L(0x1d8)] = m;
            const v = {};
            v[L(0x218)] = u, Whatsapp_1[L(0x1c4)][M(0x212)](t, v);
            const w = {
                    ...i,
                    ...t
                }, x = {};
            x[L(0x1d4)] = n[L(0x1ef)], x[M(0x1cc)] = w, o[L(0x1fa)](m + (M(0x1d3) + M(0x1e4)), x);
        } catch (z) {
            logger_1[L(0x1e5)][M(0x1eb)](z);
            throw new AppError_1[(L(0x1c4))](z, 0xd3d * 0x1 + -0x559 + 0x2d * -0x24);
        }
    };
exports[C(0x1c4)] = GetTokenAndLinkedPage;