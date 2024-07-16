'use strict';
const u = b, v = b;
(function (c, d) {
    const s = b, t = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(s(0x180)) / (-0x1 * 0x2075 + -0x187e + -0x5a * -0xa2) * (-parseInt(s(0x1ac)) / (-0x20e8 + 0x2 * -0xcf8 + -0x9 * -0x68a)) + parseInt(s(0x17e)) / (0x48d + -0x1e01 * 0x1 + -0x1 * -0x1977) + -parseInt(s(0x199)) / (-0x927 * -0x1 + 0xf18 + -0x183b) * (-parseInt(t(0x19f)) / (0x18f9 + 0xcc4 + -0x11c * 0x22)) + -parseInt(t(0x1bb)) / (-0x7 * 0x443 + -0x1 * 0x1a09 + 0x37e4) + parseInt(t(0x1bc)) / (-0x103 * 0x1e + 0x20df + -0x27e) + -parseInt(t(0x1a4)) / (-0x1bed + 0x1 * 0x11b + 0x1ada) + -parseInt(s(0x191)) / (0xe1 * -0x15 + -0x8 * 0x125 + 0x1ba6) * (parseInt(t(0x1ba)) / (0xf86 * -0x2 + 0x879 + 0x7 * 0x33b));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x3d205 + 0xc6e2 + -0x6cfe));
var __importDefault = this && this[u(0x195) + u(0x1ad)] || function (c) {
    const w = v;
    return c && c[w(0x1aa)] ? c : { 'default': c };
};
const k = {};
k[v(0x181)] = !![], Object[v(0x1b4) + u(0x18f)](exports, v(0x1aa), k);
const sequelize_1 = require(u(0x18d)), database_1 = __importDefault(require(u(0x179) + v(0x1b1))), queryAdmin = v(0x198) + u(0x173) + u(0x1a9) + v(0x192) + v(0x1a3) + u(0x1b0) + u(0x189) + v(0x1b8) + u(0x178) + v(0x177) + v(0x17b) + u(0x174) + v(0x188) + u(0x184) + v(0x190) + u(0x18e) + u(0x182) + u(0x1a8) + u(0x19d) + v(0x175) + v(0x19c) + v(0x185) + u(0x1a1) + u(0x1ae) + v(0x187) + u(0x196) + u(0x19b) + v(0x1ab) + v(0x1a2) + v(0x1a7), query = v(0x198) + v(0x173) + u(0x1a9) + u(0x192) + v(0x1a3) + u(0x1b0) + v(0x189) + u(0x1b8) + v(0x178) + u(0x177) + u(0x17b) + u(0x174) + v(0x188) + v(0x184) + v(0x190) + v(0x18e) + v(0x182) + u(0x1a8) + u(0x1a0) + v(0x19a) + u(0x1b5) + v(0x17f) + u(0x172) + u(0x18c) + u(0x197) + v(0x1b7) + v(0x194) + u(0x1b9) + v(0x1a5) + u(0x1b3) + u(0x18a) + u(0x1af) + 'c\x0a', DashTicketsChannels = async ({
        startDate: f,
        endDate: g,
        tenantId: h,
        userId: i,
        userProfile: j
    }) => {
        const x = v, y = v, l = {};
        l[x(0x17d)] = function (q, r) {
            return q == r;
        }, l[y(0x19e)] = x(0x1b2);
        const m = l, n = {};
        n[y(0x1a6)] = h, n[y(0x193)] = f, n[x(0x183)] = g, n[y(0x176)] = i;
        const o = {};
        o[x(0x17a) + 'ts'] = n, o[x(0x186)] = sequelize_1[y(0x171)][x(0x17c)];
        const p = await database_1[x(0x18b)][y(0x1b6)](m[y(0x17d)](j, m[x(0x19e)]) ? queryAdmin : query, o);
        return p;
    };
function a() {
    const z = [
        'en\x20:startD',
        'l\x20\x20from\x20(\x0a',
        'ndDate\x0a\x20\x20g',
        '1370LdKGza',
        '517524lCloRI',
        '3275629FmNaSY',
        'QueryTypes',
        'nc(\x27day\x27,\x20',
        'label,\x20qtd',
        '\x0a\x20\x20count(1',
        'e_trunc(\x27d',
        'userId',
        '\x20t.channel',
        '\x20\x20select\x0a\x20',
        '../../data',
        'replacemen',
        '\x20as\x20label,',
        'SELECT',
        'NHAAQ',
        '805599LZrviU',
        'd\x20date_tru',
        '9199kVtEzf',
        'value',
        'enantId\x22\x20=',
        'endDate',
        '\x20from\x20\x22Tic',
        'eatedAt\x22)\x20',
        'type',
        'nd\x20:endDat',
        ')\x20as\x20qtd\x0a\x20',
        '\x20pertentua',
        ')\x20a\x0a\x20\x20orde',
        'default',
        't.\x22created',
        'sequelize',
        'where\x20t.\x22t',
        'erty',
        'kets\x22\x20t\x0a\x20\x20',
        '54675Pjzgqy',
        '0.0*(qtd/s',
        'startDate',
        'ate\x20and\x20:e',
        '__importDe',
        'e\x0a\x20\x20group\x20',
        'At\x22)\x20betwe',
        '\x0a\x20\x20select\x20',
        '68Eqktkv',
        'erId\x22\x20=\x20:u',
        'by\x20t.chann',
        'ay\x27,\x20t.\x22cr',
        '\x0a\x20\x20and\x20dat',
        'zouOr',
        '95075dcThAs',
        '\x20AND\x20t.\x22us',
        'between\x20:s',
        '\x20order\x20by\x20',
        'um(qtd)\x20ov',
        '488000SFwBus',
        'roup\x20by\x20t.',
        'tenantId',
        '2\x20Desc\x0a',
        '\x20:tenantId',
        ',\x20ROUND(10',
        '__esModule',
        'el\x0a\x20\x20)\x20a\x0a\x20',
        '42nKiKVF',
        'fault',
        'tartDate\x20a',
        'r\x20by\x202\x20Des',
        'er\x20()),\x202)',
        'base',
        'admin',
        'channel\x0a\x20\x20',
        'defineProp',
        'serId\x0a\x20\x20an',
        'query'
    ];
    a = function () {
        return z;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x397 * -0x9 + 0x1 * 0xcb + 0x20f5);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[u(0x18b)] = DashTicketsChannels;