'use strict';
function a() {
    const N = [
        '../../mode',
        'GET',
        'tokenAPI',
        'long_lived',
        './SetLogou',
        'defineProp',
        'lient_id=',
        'emit',
        '11PEJfaV',
        'https://gr',
        'fbObject',
        '2660784nhIFGi',
        '1982jqUWvo',
        '_access_to',
        'XSphd',
        'action',
        'vBRyC',
        'getIO',
        '5702090AABqKo',
        'limit=25&a',
        'ione\x20apena',
        'accountId',
        'PP_SECRET_',
        'grant_type',
        'ina.\x20Refaç',
        '5yCYsLz',
        'ccess_toke',
        'whatsapp',
        'PTxRB',
        'ge_token&c',
        'ls/Whatsap',
        'tLinkedPag',
        '36RZmNki',
        'ge_token=',
        's/logger',
        'so\x20e\x20selec',
        'ess_token?',
        '44536bBTcOq',
        '__importDe',
        'length',
        'url',
        '=fb_exchan',
        'cret=',
        'Escolha\x20ap',
        'evxWi',
        'where',
        'ok.com/',
        'PP_ID',
        'session',
        '__esModule',
        '../../erro',
        '1813743VIrkhu',
        'a\x20o\x20proces',
        '/accounts?',
        'hmCwh',
        '../../libs',
        'update',
        'logger',
        '8cyqLSr',
        'KEY',
        'oUvjB',
        'status',
        'default',
        'enas\x201\x20pág',
        '28476qjeaGZ',
        'error',
        'access_tok',
        '/socket',
        'fault',
        'env',
        'FACEBOOK_A',
        's\x201\x20página',
        'CONNECTED',
        'tenantId',
        'method',
        'v16.0',
        'value',
        'en=',
        'jKRxv',
        'ession',
        '&client_se',
        '/oauth/acc',
        'get',
        'ken',
        'axios',
        'erty',
        'uwVpT',
        '&fb_exchan',
        '297NElIHM',
        'aph.facebo',
        '92577MQMGLp',
        ':whatsappS',
        '../../util',
        'rs/AppErro',
        'fbPageId'
    ];
    a = function () {
        return N;
    };
    return a();
}
const C = b, D = b;
(function (c, d) {
    const A = b, B = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(A(0x1a7)) / (-0x64 + 0x1082 * 0x2 + -0x209f) + parseInt(B(0x1b8)) / (0xcaa * 0x3 + 0x1f6 * 0x4 + -0x2dd4) * (parseInt(A(0x1a5)) / (0x1 * 0x1fa6 + 0x115 * 0x15 + -0x47 * 0xc4)) + -parseInt(B(0x1d1)) / (0x132 * -0x3 + 0x931 + -0x597) * (-parseInt(B(0x1c5)) / (-0x1d06 + -0x83e * 0x1 + 0x2549)) + parseInt(B(0x1cc)) / (0x118d + 0x1 * 0x656 + -0x17dd) * (parseInt(A(0x18d)) / (-0x1e05 * -0x1 + 0x1 * 0xab + -0x1ea9)) + parseInt(B(0x187)) / (0x201 * 0x8 + -0xb04 * -0x2 + -0x1304 * 0x2) * (-parseInt(B(0x1df)) / (0x3 * -0x313 + -0x3c1 * -0x4 + 0x5c2 * -0x1)) + -parseInt(A(0x1be)) / (-0x2b * -0x61 + -0x6 * 0x228 + 0x11b * -0x3) * (-parseInt(A(0x1b4)) / (-0x18a + 0x21d0 * 0x1 + -0x1 * 0x203b)) + -parseInt(B(0x1b7)) / (-0x268e + -0x2528 + 0x4bc2);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xa77d * -0x1 + -0x4140c + 0x91e49 * 0x1));
var __importDefault = this && this[C(0x1d2) + C(0x191)] || function (c) {
    const E = C;
    return c && c[E(0x1dd)] ? c : { 'default': c };
};
const k = {};
k[C(0x199)] = !![], Object[C(0x1b1) + C(0x1a2)](exports, C(0x1dd), k);
const axios_1 = __importDefault(require(D(0x1a1))), AppError_1 = __importDefault(require(C(0x1de) + C(0x1aa) + 'r')), Whatsapp_1 = __importDefault(require(C(0x1ac) + D(0x1ca) + 'p')), SetLogoutLinkedPage_1 = __importDefault(require(D(0x1b0) + D(0x1cb) + 'e')), socket_1 = require(C(0x184) + C(0x190)), logger_1 = require(C(0x1a9) + C(0x1ce)), api_version = D(0x198), baseUrl = D(0x1b5) + D(0x1a6) + C(0x1da) + api_version, app_id = process[D(0x192)][C(0x193) + D(0x1db)], app_secret = process[D(0x192)][C(0x193) + D(0x1c2) + D(0x188)], getLongLivedAccessToken = async c => {
        const F = C, G = D, {data: d} = await axios_1[F(0x18b)][G(0x19f)](baseUrl + (F(0x19e) + F(0x1d0) + G(0x1c3) + F(0x1d5) + G(0x1c9) + F(0x1b2)) + app_id + (G(0x19d) + G(0x1d6)) + app_secret + (G(0x1a4) + F(0x1cd)) + c);
        return d[F(0x18f) + 'en'];
    }, getPermanentPageAccessToken = async (c, d) => {
        const H = D, I = C, {
                data: {data: e}
            } = await axios_1[H(0x18b)][I(0x19f)](baseUrl + '/' + d + (H(0x1e1) + H(0x18f) + H(0x19a)) + c);
        return e[I(0x1d3)] && e[-0xf27 + 0x247c + -0x1555];
    }, getPageInfo = async (e, f) => {
        const J = C, K = D, g = {};
        g[J(0x1c8)] = K(0x1ad);
        const h = g, i = baseUrl + '/' + e + (J(0x1e1) + J(0x1bf) + J(0x1c6) + 'n=') + f, j = {};
        j[J(0x197)] = h[J(0x1c8)], j[K(0x1d4)] = i;
        const {
            data: {data: l}
        } = await (0x1c67 * -0x1 + 0x2074 + 0x11 * -0x3d, axios_1[K(0x18b)])(j);
        return l;
    }, GetTokenAndLinkedPage = async ({
        whatsapp: i,
        accountId: j,
        userToken: l,
        tenantId: m
    }) => {
        const L = D, M = D, n = {
                'XSphd': function (o, p, q) {
                    return o(p, q);
                },
                'hmCwh': function (o, p) {
                    return o > p;
                },
                'jKRxv': L(0x1d7) + M(0x18c) + L(0x1c4) + M(0x1e0) + L(0x1cf) + M(0x1c0) + L(0x194) + '.',
                'vBRyC': function (o, p) {
                    return o === p;
                },
                'oUvjB': function (o, p) {
                    return o(p);
                },
                'uwVpT': L(0x195),
                'evxWi': L(0x185)
            };
        try {
            const o = (-0x86f + -0x1f * -0x3 + 0x2 * 0x409, socket_1[M(0x1bd)])(), p = await n[M(0x1ba)](getPageInfo, j, l);
            if (n[M(0x1e2)](p[M(0x1d3)], 0xced + 0x6b1 + 0x1 * -0x139d))
                throw new AppError_1[(M(0x18b))](n[M(0x19b)], 0xf07 + 0x2619 + -0x2c * 0x12c);
            if (n[M(0x1bc)](p[L(0x1d3)], 0x1a90 + -0x1780 + 0xc4 * -0x4)) {
                const y = {};
                y[L(0x1c7)] = i, y[M(0x196)] = m, await (-0x1 * -0x14a4 + 0xd88 + -0x222c, SetLogoutLinkedPage_1[M(0x18b)])(y);
                return;
            }
            const q = await n[L(0x189)](getLongLivedAccessToken, l), r = await n[M(0x1ba)](getPermanentPageAccessToken, q, j), s = {};
            s[L(0x18a)] = n[M(0x1a3)], s[L(0x1ab)] = r['id'], s[L(0x1b6)] = { ...r }, s[L(0x1ae)] = r[M(0x18f) + 'en'], s[L(0x1b6)][M(0x1c1)] = j, s[L(0x1b6)][L(0x1af) + M(0x1b9) + L(0x1a0)] = q;
            const t = s, u = {};
            u['id'] = i['id'], u[M(0x196)] = m;
            const v = {};
            v[L(0x1d9)] = u, Whatsapp_1[L(0x18b)][L(0x185)](t, v);
            const w = {
                    ...i,
                    ...t
                }, x = {};
            x[L(0x1bb)] = n[L(0x1d8)], x[M(0x1dc)] = w, o[M(0x1b3)](m + (L(0x1a8) + M(0x19c)), x);
        } catch (z) {
            logger_1[L(0x186)][L(0x18e)](z);
            throw new AppError_1[(L(0x18b))](z, 0x1439 + -0x5 * 0x4ba + 0x4f9);
        }
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x22fc + -0xa21 + 0x2ea1);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[D(0x18b)] = GetTokenAndLinkedPage;