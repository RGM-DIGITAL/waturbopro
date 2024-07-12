'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(t(0x97)) / (0xbe3 + 0x1a45 + -0x2627) * (-parseInt(t(0xd9)) / (-0x2247 + 0xcba + -0x1 * -0x158f)) + parseInt(u(0xcf)) / (0x1 * 0x353 + 0xc23 * 0x1 + 0x1 * -0xf73) + parseInt(t(0xd0)) / (-0x9 * -0xd9 + -0x1ddb + 0x163e) + -parseInt(u(0x93)) / (-0x16bb + 0xb * -0x1e6 + 0x2ba2) * (-parseInt(u(0x99)) / (-0x1 * 0x1e4d + -0x16da + -0x352d * -0x1)) + -parseInt(t(0xcb)) / (-0x75d + -0x1075 * -0x1 + -0x1 * 0x911) + parseInt(u(0xc9)) / (-0x1cad + 0x32f * 0x2 + -0x2b * -0x85) * (parseInt(t(0xa9)) / (0x19 * 0xd6 + -0x1d9 + 0x4 * -0x4c1)) + -parseInt(t(0x8a)) / (-0x51 * 0x53 + -0x161f + 0x306c);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * 0x25e8 + -0x1 * -0x328cd + -0x2 * 0x7b58));
var __importDefault = this && this[v(0xa6) + w(0xcc)] || function (c) {
    const x = w;
    return c && c[x(0xd5)] ? c : { 'default': c };
};
const k = {};
k[w(0xdf)] = !![], Object[w(0xce) + v(0xb3)](exports, w(0xd5), k), exports[v(0xa0)] = exports[w(0x90)] = exports[w(0xb4)] = exports[w(0x89)] = exports[w(0xb1)] = void (0x1 * -0x25aa + -0xc0b + 0x31b5);
const socket_1 = require(w(0xa5) + v(0x85)), AppError_1 = __importDefault(require(v(0xd6) + v(0xb5))), DeleteWhatsAppService_1 = __importDefault(require(w(0xd8) + w(0x8b) + v(0x9b) + v(0xa3) + w(0x84))), ListWhatsAppsService_1 = __importDefault(require(v(0xd8) + v(0x8b) + w(0xd2) + w(0xb0) + w(0x87))), ShowWhatsAppService_1 = __importDefault(require(w(0xd8) + v(0x8b) + v(0xb9) + v(0xab) + w(0xdb))), UpdateWhatsAppService_1 = __importDefault(require(v(0xd8) + w(0x8b) + v(0xdc) + w(0xaf) + v(0x84))), CreateWhatsAppService_1 = __importDefault(require(w(0xd8) + v(0x8b) + w(0xc1) + w(0xbd) + v(0x84))), Tenant_1 = __importDefault(require(w(0xd4) + w(0xbf))), wbot_baileys_1 = require(w(0xa4) + w(0xda)), CheckSettingstenant1_1 = __importDefault(require(v(0x9d) + v(0xca) + w(0x8f) + '1')), ListTotalWhatsAppService_1 = __importDefault(require(v(0xd8) + w(0x8b) + w(0xd2) + v(0xc4) + w(0xad) + 'ce')), index = async (d, e) => {
        const y = w, z = w, f = {};
        f[y(0xa1)] = z(0xba) + 'on', f[z(0x9c)] = function (l, m) {
            return l !== m;
        }, f[z(0xd3)] = y(0xc2), f[z(0x86)] = z(0xde) + y(0x98), f[z(0xdd)] = function (l, m) {
            return l >= m;
        }, f[y(0x9a)] = z(0x91) + y(0x8c) + z(0x82) + z(0xd7);
        const g = f, h = await (-0x4 * -0x49c + 0x1586 + -0x14a * 0x1f, CheckSettingstenant1_1[z(0xc0)])(g[y(0xa1)]);
        if (g[y(0x9c)](h, g[z(0xd3)])) {
            const l = await (0x1672 + -0x1672 * -0x1 + -0x374 * 0xd, ListTotalWhatsAppService_1[z(0xc0)])();
            console[z(0x96)](g[z(0x86)], l);
            if (g[y(0xdd)](l, -0x518 * -0x1 + 0x2 * 0x43f + 0x1 * -0xd93))
                throw new AppError_1[(y(0xc0))](g[y(0x9a)], 0x1 * 0x1362 + -0x970 + -0x862);
        }
        const {tenantId: i} = d[y(0xaa)], j = await (-0x22cc + -0xa12 * 0x2 + 0x36f0, ListWhatsAppsService_1[y(0xc0)])(i);
        return e[y(0x83)](0xe2 * 0x1d + 0x28c * 0x4 + -0x2302)[z(0xb7)](j);
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1d79 + 0x446 * 0x5 + -0x3255);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[v(0xb1)] = index;
const show = async (d, e) => {
    const A = v, B = v, {whatsappId: f} = d[A(0xa7)], {tenantId: g} = d[B(0xaa)], h = {};
    h['id'] = f, h[B(0x8d)] = g;
    const i = await (-0x1fc1 + 0x24a9 + -0x4e8, ShowWhatsAppService_1[A(0xc0)])(h);
    return e[B(0x83)](0x3a * 0x98 + -0x9b9 + -0x17ef)[A(0xb7)](i);
};
exports[v(0x89)] = show;
const store = async (e, f) => {
    const C = w, D = w, g = {};
    g[C(0xc7)] = C(0xba) + 'on', g[D(0xbb)] = function (r, s) {
        return r !== s;
    }, g[D(0xc8)] = D(0xc2), g[C(0xd1)] = C(0xde) + D(0x98), g[D(0x88)] = function (r, s) {
        return r >= s;
    }, g[C(0xbe)] = D(0x91) + D(0x8c) + D(0x82) + D(0xd7);
    const h = g, i = await (-0x1 * 0x1ea3 + -0x19b8 * -0x1 + 0x4eb * 0x1, CheckSettingstenant1_1[C(0xc0)])(h[D(0xc7)]);
    if (h[C(0xbb)](i, h[D(0xc8)])) {
        const r = await (-0x775 + -0x1 * -0x1ac5 + 0x1 * -0x1350, ListTotalWhatsAppService_1[D(0xc0)])();
        console[D(0x96)](h[D(0xd1)], r);
        if (h[C(0x88)](r, -0x1589 + 0x739 * 0x3 + -0x20))
            throw new AppError_1[(C(0xc0))](h[D(0xbe)], -0x3b2 + -0x1194 + -0x4f * -0x4a);
    }
    const {whatsappId: j} = e[C(0xa7)], l = e[D(0xa2)], {tenantId: m} = e[C(0xaa)], n = await (-0xf4d * -0x1 + -0x5ef + -0x95e, ListWhatsAppsService_1[D(0xc0)])(m), o = await Tenant_1[C(0xc0)][C(0xac)](m);
    if (h[C(0x88)](n[D(0xc5)], o?.[C(0x95) + D(0xb6)]))
        throw new AppError_1[(D(0xc0))](h[D(0xbe)], 0x123b + -0x1e0 + -0xecb);
    const p = { ...l };
    p[D(0x8e)] = j, p[D(0x8d)] = m;
    const {whatsapp: q} = await (0x5 * 0x481 + -0x1ff2 + -0x1 * -0x96d, CreateWhatsAppService_1[C(0xc0)])(p);
    return f[C(0x83)](0x73c + -0x4f4 + -0x180)[D(0xb7)](q);
};
function a() {
    const I = [
        'disabled',
        'message',
        'stTotalWha',
        'length',
        'emit',
        'mbvPg',
        'gcRmq',
        '8xkEeZb',
        '/CheckSett',
        '188594DHGXpg',
        'fault',
        ':whatsapp',
        'defineProp',
        '453720SfHxkT',
        '361272pZByrA',
        'mAqnU',
        'Service/Li',
        'THOHi',
        '../models/',
        '__esModule',
        '../errors/',
        'LIMIT',
        '../service',
        '342LXqQdq',
        'ot-baileys',
        'Service',
        'Service/Up',
        'pboNC',
        'Retrieved\x20',
        'value',
        'NNECTIONS_',
        'status',
        'ppService',
        'cket',
        'soaAR',
        'sService',
        'qTOYo',
        'show',
        '912220cwZzFR',
        's/Whatsapp',
        'MISSION_CO',
        'tenantId',
        'whatsappId',
        'ingstenant',
        'update',
        'ERR_NO_PER',
        'Whatsapp\x20d',
        '641885CYqfmt',
        'action',
        'maxConnect',
        'log',
        '1653KkQFHT',
        'plans:',
        '6IiscCG',
        'WwepW',
        'Service/De',
        'uEzVe',
        '../helpers',
        'getIO',
        'VtVEr',
        'remove',
        'eAqXE',
        'body',
        'leteWhatsA',
        '../libs/wb',
        '../libs/so',
        '__importDe',
        'params',
        'YPVeZ',
        '1660473DmzNjr',
        'user',
        'owWhatsApp',
        'findByPk',
        'tsAppServi',
        'whatsappDa',
        'dateWhatsA',
        'stWhatsApp',
        'index',
        'removeWbot',
        'erty',
        'store',
        'AppError',
        'ions',
        'json',
        'delete',
        'Service/Sh',
        'userCreati',
        'PvYkT',
        'eleted.',
        'eateWhatsA',
        'vdlDR',
        'Tenant',
        'default',
        'Service/Cr'
    ];
    a = function () {
        return I;
    };
    return a();
}
exports[w(0xb4)] = store;
const update = async (d, e) => {
    const E = v, F = v, {whatsappId: f} = d[E(0xa7)], g = d[E(0xa2)], {tenantId: h} = d[F(0xaa)], i = {};
    i[F(0xae) + 'ta'] = g, i[F(0x8e)] = f, i[F(0x8d)] = h;
    const {whatsapp: j} = await (-0x528 + -0x929 * 0x1 + 0xe51, UpdateWhatsAppService_1[F(0xc0)])(i);
    return e[E(0x83)](0x13 * -0x4f + 0x12cf + -0xc2a)[E(0xb7)](j);
};
exports[w(0x90)] = update;
const remove = async (f, g) => {
    const G = w, H = v, h = {};
    h[G(0xa8)] = H(0xb8), h[G(0x9f)] = G(0x92) + H(0xbc);
    const i = h, {whatsappId: j} = f[G(0xa7)], {tenantId: l} = f[G(0xaa)];
    await (0x536 * 0x2 + 0x9c0 + 0x50b * -0x4, DeleteWhatsAppService_1[G(0xc0)])(j, l), (0x2 * -0x12fd + -0xeb7 * -0x1 + 0x1743, wbot_baileys_1[G(0xb2)])(+j);
    const m = (0x185f + 0x1ab * 0x5 + 0x9e * -0x35, socket_1[H(0x9e)])(), n = {};
    n[G(0x94)] = i[G(0xa8)], n[G(0x8e)] = +j, m[H(0xc6)](l + H(0xcd), n);
    const o = {};
    return o[H(0xc3)] = i[H(0x9f)], g[G(0x83)](-0x1 * 0x15c7 + 0x735 + -0xf5a * -0x1)[G(0xb7)](o);
};
exports[v(0xa0)] = remove;