'use strict';
const E = b, F = b;
(function (c, d) {
    const C = b, D = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(C(0x1bb)) / (-0x1b6f * -0x1 + -0x455 * -0x4 + -0x2cc2) * (parseInt(D(0x1e3)) / (0x1 * -0x1152 + -0x1 * 0xbeb + 0x1d3f)) + -parseInt(C(0x18d)) / (0xb2e + 0x336 + -0xe61) * (parseInt(D(0x1a7)) / (0x660 + -0x5 * -0x6fc + -0x2948)) + -parseInt(D(0x186)) / (-0x2d * -0x7c + -0x1 * -0x22aa + -0x1 * 0x3871) * (parseInt(D(0x189)) / (-0xfb6 + 0x71 * -0x36 + 0x7ea * 0x5)) + -parseInt(D(0x1a5)) / (0x23a8 + -0x16ea + -0xcb7) + -parseInt(D(0x182)) / (-0x2438 + -0x141e + 0x4a * 0xc3) + -parseInt(C(0x1d8)) / (-0x27 * 0x3 + -0x10 * -0x208 + 0x2002 * -0x1) + parseInt(D(0x1b9)) / (-0x19f1 * 0x1 + 0x240a + -0xa0f);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xf2d3 * -0x4 + 0x6728f + -0x5ff33));
var __importDefault = this && this[E(0x1ab) + E(0x1e0)] || function (c) {
    const G = F;
    return c && c[G(0x1dc)] ? c : { 'default': c };
};
const k = {};
k[F(0x18a)] = !![], Object[E(0x185) + E(0x1c6)](exports, E(0x1dc), k), exports[E(0x1dd) + E(0x1af) + 'on'] = exports[F(0x1c3) + 'k'] = void (-0x48 * 0x68 + -0x1411 + 0x3151);
const axios_1 = __importDefault(require(F(0x1d3))), CheckSettingsGeneral_1 = __importDefault(require(F(0x196) + F(0x19b) + F(0x1ce) + F(0x1cc))), logger_1 = require(F(0x1a0) + E(0x1e1)), socket_1 = require(E(0x1c4) + E(0x1cf)), Invoices_1 = __importDefault(require(E(0x1d2) + F(0x183) + 's')), Tenant_1 = __importDefault(require(F(0x1d2) + F(0x1a8))), AppError_1 = __importDefault(require(F(0x197) + F(0x193) + 'r')), owenBaseURL = E(0x1da) + E(0x1a9) + E(0x1a3), owenWebhook = async (l, m) => {
        const H = F, I = F, n = {};
        n[H(0x1ae)] = function (r, s) {
            return r === s;
        }, n[I(0x1df)] = H(0x1c8), n[H(0x1d4)] = H(0x190), n[H(0x19f)] = H(0x18c), n[H(0x1d1)] = function (r, s) {
            return r < s;
        }, n[I(0x187)] = function (r, s) {
            return r + s;
        }, n[H(0x194)] = H(0x1ad), n[H(0x18b)] = I(0x195), n[I(0x1bc)] = I(0x19a);
        const o = n, {data: p} = l[H(0x1d7)];
        if (o[I(0x1ae)](p[H(0x1a4)], o[H(0x1df)])) {
            const {qrcodeId: r} = p, s = {};
            s[I(0x1a1)] = r, s[I(0x1a4)] = o[H(0x1d4)];
            const t = {};
            t[I(0x1ba)] = Tenant_1[I(0x1a6)], t['as'] = o[H(0x19f)];
            const u = {};
            u[H(0x1b1)] = s, u[I(0x1e9)] = [t];
            const v = await Invoices_1[I(0x1a6)][I(0x1ca)](u);
            if (!v || o[I(0x1d1)](p[I(0x1d5)], v[I(0x18a)])) {
                const B = {};
                return B['ok'] = !![], m[H(0x1e7)](B);
            }
            const w = new Date(v[H(0x18c)][H(0x1e4)]);
            w[H(0x1b0)](o[H(0x187)](w[I(0x1b8)](), -0xe89 + 0x2 * 0x9ff + -0x557 * 0x1));
            const x = w[H(0x192) + 'g']()[I(0x1db)]('T')[0x1848 + 0x11 * 0x1b8 + -0x3580], y = {};
            y[I(0x1e4)] = x, await v[I(0x18c)][H(0x19e)](y);
            const z = {};
            z[H(0x1a4)] = o[H(0x194)], await v[I(0x19e)](z), await v[H(0x18c)][I(0x1bf)]();
            const A = (-0x60c + 0x3 * -0x8a5 + 0x1ffb, socket_1[I(0x1c9)])();
            A['to'](I(0x191) + v[H(0x1bd)] + (I(0x1e5) + 'el'))['to'](o[I(0x18b)])[I(0x1ea)](I(0x191) + v[H(0x1bd)] + H(0x1aa), {
                'action': o[I(0x1bc)],
                'tenant': v[I(0x18c)],
                'invoiceId': v['id']
            });
        }
        const q = {};
        return q['ok'] = !![], m[I(0x1e7)](q);
    };
exports[E(0x1c3) + 'k'] = owenWebhook;
const owenCreateSubscription = async (g, h) => {
    const J = F, K = F, i = {};
    i[J(0x1e6)] = J(0x1c7), i[K(0x188)] = J(0x1c2), i[J(0x1a2)] = K(0x1de) + J(0x1b7), i[J(0x1e2)] = J(0x1b6) + K(0x199), i[K(0x1cd)] = K(0x1e8), i[J(0x184)] = J(0x1d0) + K(0x1cb) + J(0x1d6) + J(0x1b5) + K(0x18e) + 'e!';
    const j = i, {
            price: l,
            invoiceId: m
        } = g[J(0x1d7)], n = {
            'params': {
                'valor': l[K(0x1d9)]([-0xa3 * 0x17 + 0xba * -0x11 + 0xdf * 0x1f]),
                'minutos': 0x5,
                'mensagem': J(0x1b4) + m,
                'user': await (-0x5 * -0x40d + 0x2 * -0x704 + -0x9 * 0xb1, CheckSettingsGeneral_1[J(0x1a6)])(j[J(0x1e6)]),
                'password': await (-0x35f * 0x2 + 0x1 * 0x808 + -0x14a, CheckSettingsGeneral_1[K(0x1a6)])(j[K(0x188)]),
                'secretkey': await (0x1fe * -0x10 + -0x2429 * -0x1 + -0x449, CheckSettingsGeneral_1[K(0x1a6)])(j[K(0x1a2)])
            }
        };
    try {
        const o = await Invoices_1[J(0x1a6)][K(0x1be)](m);
        if (!o)
            throw new Error(j[K(0x1e2)]);
        const p = await axios_1[J(0x1a6)][K(0x1b2)](owenBaseURL + (K(0x18f) + K(0x1b3)), n);
        o[J(0x19e)]({
            'txId': p[J(0x1ac)][K(0x1ac)][J(0x1c0)],
            'payGw': j[K(0x1cd)],
            'payGwData': JSON[K(0x181)](p[J(0x1ac)][K(0x1ac)])
        });
        const q = {};
        q[J(0x198)] = p[J(0x1ac)][J(0x1ac)][K(0x198)];
        const r = {};
        r[K(0x19d)] = l;
        const s = {};
        return s[J(0x198)] = q, s[K(0x1d5)] = r, h[J(0x1e7)](s);
    } catch (t) {
        logger_1[J(0x19c)][K(0x1c5)](J(0x1dd) + K(0x1af) + K(0x1c1) + t);
        throw new AppError_1[(J(0x1a6))](j[K(0x184)], -0x7 * 0x3f3 + -0x10d5 * -0x1 + 0xc60);
    }
};
exports[F(0x1dd) + F(0x1af) + 'on'] = owenCreateSubscription;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xe7 + -0x5c4 + 0x82c);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const L = [
        'getDate',
        '14630900lekuDm',
        'model',
        '570ZHcjyS',
        'EbWtO',
        'tenantId',
        'findByPk',
        'reload',
        'qrcodeId',
        'on\x20error:\x20',
        'owenToken',
        'owenWebhoo',
        '../../libs',
        'error',
        'erty',
        'owenCnpj',
        'APPROVED',
        'getIO',
        'findOne',
        'ncontrado,',
        'eral',
        'PgCGW',
        'ettingsGen',
        '/socket',
        'Problema\x20e',
        'WPhyh',
        '../../mode',
        'axios',
        'tsoqi',
        'valor',
        '\x20entre\x20em\x20',
        'body',
        '1132200kzDgTv',
        'toFixed',
        'https://pi',
        'split',
        '__esModule',
        'owenCreate',
        'owenSecret',
        'jNdxK',
        'fault',
        's/logger',
        'MGOpa',
        '866OGYEkP',
        'dueDate',
        '-mainchann',
        'WXtjW',
        'json',
        'owen',
        'include',
        'emit',
        'stringify',
        '13848fWAAKf',
        'ls/Invoice',
        'Hrhcx',
        'defineProp',
        '1442915VCgDBv',
        'SZaef',
        'dGtDp',
        '6krCLlA',
        'value',
        'flkhK',
        'tenant',
        '73059LqPFQr',
        'm\x20o\x20suport',
        '/api/v1/qr',
        'open',
        'tenant-',
        'toISOStrin',
        'rs/AppErro',
        'LfIjh',
        'super',
        '../../help',
        '../../erro',
        'qrcode',
        't\x20found',
        'CONCLUIDA',
        'ers/CheckS',
        'logger',
        'original',
        'update',
        'xObks',
        '../../util',
        'txId',
        'PNutn',
        'il.com.br',
        'status',
        '1608222oEhTqT',
        'default',
        '48SAKHnE',
        'ls/Tenant',
        'x.owenbras',
        '-payment',
        '__importDe',
        'data',
        'paid',
        'dludR',
        'Subscripti',
        'setDate',
        'where',
        'get',
        'dinamico',
        '#Fatura:',
        'contato\x20co',
        'Invoice\x20no',
        'Key'
    ];
    a = function () {
        return L;
    };
    return a();
}