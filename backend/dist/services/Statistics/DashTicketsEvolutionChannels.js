'use strict';
const u = b, v = b;
(function (c, d) {
    const s = b, t = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(s(0xdb)) / (0x2fb + -0x258e + -0x2294 * -0x1) * (-parseInt(s(0xb0)) / (-0x60c + 0xc04 * -0x2 + 0x1e16)) + -parseInt(s(0xd1)) / (0xb09 + 0x46 * -0x3d + 0x5a8) * (parseInt(s(0x88)) / (0xa3 * -0x16 + -0xa1e + 0x1824)) + parseInt(t(0xb2)) / (0x1731 + 0x1 * 0xdcd + -0x24f9) * (parseInt(t(0xcd)) / (-0x210e * 0x1 + -0xc5 * 0x1d + 0x3765)) + -parseInt(s(0xe3)) / (-0x11a * 0x3 + 0x1993 * -0x1 + -0x5 * -0x5c8) * (parseInt(t(0xab)) / (-0x1 * 0x264e + 0x2190 + -0xd * -0x5e)) + -parseInt(t(0xd0)) / (0x28 * 0x3c + -0xd0d + 0x3b6) + -parseInt(t(0x8a)) / (-0x1801 + -0x2577 + 0x3d82) * (parseInt(s(0xb5)) / (-0x25a2 + -0x112b + 0xd * 0x438)) + -parseInt(t(0xaf)) / (-0x1f * 0x124 + 0xd54 + 0x1614) * (-parseInt(t(0xc0)) / (0x1 * 0x188d + 0x2 * -0x13c + -0x1608));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x58218 + 0x2 * -0x6a783 + 0x16ff27));
var __importDefault = this && this[u(0xeb) + u(0x96)] || function (c) {
    const w = u;
    return c && c[w(0x84)] ? c : { 'default': c };
};
const k = {};
k[u(0xe1)] = !![], Object[u(0x98) + v(0xf4)](exports, v(0x84), k);
const sequelize_1 = require(u(0xb6)), database_1 = __importDefault(require(v(0xc7) + v(0x9e))), query = v(0xcc) + u(0xcb) + v(0xbb) + v(0x8b) + u(0x93) + v(0xce) + v(0xf1) + v(0xc9) + u(0xb4) + v(0xde) + v(0xd8) + u(0x9f) + u(0xb7) + u(0xc5) + u(0xa2) + v(0x8c) + u(0x90) + v(0xe4) + v(0xf5) + u(0xf6) + u(0xdc) + v(0xb1) + v(0xf3) + v(0xbf) + u(0xa9) + v(0xc3) + u(0xac) + u(0xee) + u(0x8d) + u(0x83) + v(0x8e) + u(0x9c) + v(0xa7) + u(0xea) + u(0xb3) + u(0xdf) + u(0x86) + v(0xad) + u(0xd3) + u(0x99) + u(0xbe) + u(0xe9) + u(0xf0) + v(0xef) + u(0xc8) + u(0xc6) + v(0xba) + u(0xbd) + u(0xda) + v(0x95) + v(0x8c) + u(0x90) + v(0x89) + u(0xc4) + u(0xa4) + v(0x94) + v(0xcf) + u(0xd6) + v(0xa3) + u(0xc1) + u(0x87) + v(0xd7) + v(0xd9) + u(0xf2), queryAdmin = u(0xcc) + u(0xcb) + v(0xbb) + v(0x8b) + v(0x93) + u(0xce) + u(0xf1) + u(0xc9) + u(0xb4) + v(0xde) + u(0xd8) + u(0x9f) + v(0xb7) + u(0xc5) + u(0xa2) + v(0x8c) + u(0x90) + v(0xe4) + u(0xf5) + v(0xf6) + u(0xdc) + u(0xb1) + v(0xf3) + u(0xbf) + u(0xa9) + u(0xc3) + v(0xac) + u(0xee) + v(0x8d) + u(0x83) + u(0x8e) + v(0x9c) + v(0xa7) + u(0xea) + v(0xb3) + u(0xdf) + v(0x86) + v(0xad) + v(0xd3) + u(0xa8) + v(0x9b) + v(0x85) + v(0xa5) + v(0xae) + v(0xd4) + u(0xdd) + v(0xa6) + v(0xdc) + u(0xb1) + u(0xf3) + v(0xec) + u(0xca) + v(0xed) + v(0xc2) + u(0xb9) + u(0xb8) + u(0x9a) + u(0x97) + u(0xa1) + u(0x9d) + v(0x8f), DashTicketsEvolutionChannels = async ({
        startDate: f,
        endDate: g,
        tenantId: h,
        userId: i,
        userProfile: j
    }) => {
        const x = v, y = u, l = {};
        l[x(0xe0)] = function (q, r) {
            return q == r;
        }, l[y(0x92)] = y(0xa0);
        const m = l, n = {};
        n[y(0xd2)] = h, n[x(0x91)] = f, n[x(0xe5)] = g, n[x(0xe7)] = i;
        const o = {};
        o[x(0xd5) + 'ts'] = n, o[y(0xe6)] = sequelize_1[x(0xaa)][x(0xe2)];
        const p = await database_1[y(0xe8)][x(0xbc)](m[y(0xe0)](j, m[y(0x92)]) ? queryAdmin : query, o);
        return p;
    };
exports[v(0xe8)] = DashTicketsEvolutionChannels;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1d02 + 0x111b * 0x1 + -0x2d9a);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const z = [
        'receivedTr',
        'lt.\x22userId',
        ',\x20\x27DD/MM/Y',
        '58083727vjtFfa',
        '.\x22createdA',
        'te\x0a\x20\x20group',
        't.channel\x20',
        'tween\x20:sta',
        'm\x20(\x0a\x20\x20sele',
        '\x20OR\x20lt.\x22ty',
        '../../data',
        'IKE\x20\x27open\x27',
        '\x20qtd,\x20ROUN',
        'startDate\x20',
        'dt_ref,\x20to',
        '\x0a\x20\x20select\x20',
        '1682466xlluiJ',
        '_referenci',
        '\x20\x20group\x20by',
        '3553587fXBtGs',
        '2938407sgIhYr',
        'tenantId',
        'd\x22\x20=\x20:tena',
        'E\x20\x27receive',
        'replacemen',
        '\x20date_trun',
        'nnel\x0a\x20\x20)\x20a',
        ')\x20over\x20())',
        '\x0a\x20\x20order\x20b',
        'ansfer\x27)\x0a\x20',
        '7769QTQHae',
        'te_trunc(\x27',
        'dTransfer\x27',
        'td/sum(qtd',
        'd\x22\x20=\x20t.\x22id',
        'leqLX',
        'value',
        'SELECT',
        '105lBPaKL',
        'tedAt\x22)\x20dt',
        'endDate',
        'type',
        'userId',
        'default',
        '\x22\x20=\x20:userI',
        's\x22\x20lt\x20ON\x20l',
        '__importDe',
        '\x20between\x20:',
        'and\x20:endDa',
        '\x20\x20count(1)',
        't.\x22type\x22\x20L',
        'd\x0a\x20\x20and\x20(l',
        'a\x20,\x20label,',
        'y\x201\x0a',
        'reatedAt\x22)',
        'erty',
        '_ref,\x0a\x20\x20--',
        'to_char(da',
        'from\x20\x22Tick',
        '__esModule',
        '\x22\x20LIKE\x20\x27op',
        '\x22\x0a\x20\x20where\x20',
        't\x22),\x20t.cha',
        '4nyBCRZ',
        'tedAt\x22)\x20be',
        '7721780IUtOnY',
        'ef,\x20\x27DD/MM',
        'trunc(\x27day',
        '\x20as\x20qtd\x0a\x20\x20',
        'ets\x22\x20t\x0a\x20\x20I',
        'r\x20by\x201\x0a',
        '\x27,\x20t.\x22crea',
        'startDate',
        'uXgJQ',
        '/YYYY\x27)\x20dt',
        '\x20:endDate\x0a',
        '\x20and\x20date_',
        'fault',
        'edAt\x22),\x20t.',
        'defineProp',
        'ntId\x20\x20AND\x20',
        ',\x20t.\x22creat',
        '\x20(lt.\x22type',
        'NNER\x20JOIN\x20',
        ')\x20a\x0a\x20\x20orde',
        'base',
        ',\x202)\x20perte',
        'admin',
        'channel\x0a\x20\x20',
        'ct\x0a\x20\x20date_',
        'c(\x27day\x27,\x20t',
        'rtDate\x20and',
        'en\x27\x20OR\x20lt.',
        ')\x0a\x20\x20and\x20da',
        '\x22LogTicket',
        'ntId\x0a\x20\x20and',
        'YYY\x27)\x20,\x0a\x20\x20',
        'QueryTypes',
        '848248NfOoHc',
        'as\x20label,\x0a',
        't.\x22tenantI',
        '\x22type\x22\x20LIK',
        '12OautDW',
        '4zVYMAd',
        'day\x27,\x20t.\x22c',
        '5twUluB',
        't.\x22ticketI',
        'D(100.0*(q',
        '11fNIwVV',
        'sequelize',
        'ntual\x20\x20fro',
        'runc(\x27day\x27',
        '\x20by\x20date_t',
        'pe\x22\x20LIKE\x20\x27',
        '_char(dt_r',
        'query'
    ];
    a = function () {
        return z;
    };
    return a();
}