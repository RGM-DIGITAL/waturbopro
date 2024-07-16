'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(t(0x12f)) / (-0x1069 * 0x1 + -0x2 * -0xc92 + 0x8ba * -0x1) * (parseInt(u(0x142)) / (-0x247e + -0x1ce6 + 0x4166 * 0x1)) + parseInt(u(0x149)) / (0x1b20 + 0xf3b * 0x1 + -0x2a58) + parseInt(u(0x167)) / (0x1 * 0x24be + -0x1657 + 0x1d * -0x7f) + parseInt(u(0x14a)) / (0x533 + 0xb9 * -0x1 + 0xa3 * -0x7) * (-parseInt(u(0x14b)) / (-0xa4a + -0x1230 + 0x1c80)) + parseInt(t(0x15b)) / (0x373 * -0x6 + 0xe8b + 0x62e * 0x1) * (-parseInt(u(0x146)) / (0x1d2e + 0x76 * -0x5 + -0x1ad8)) + -parseInt(t(0x134)) / (-0xddb * 0x1 + -0x1 * 0xb69 + 0x194d) + -parseInt(u(0x156)) / (-0x23b9 + -0x3a6 + 0x2769) * (-parseInt(u(0x15e)) / (-0x9 * -0x427 + 0x127b + 0x7 * -0x7f9));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * -0xd76b1 + -0x85816 + 0x34e8a));
var __importDefault = this && this[v(0x133) + w(0x138)] || function (c) {
    const x = w;
    return c && c[x(0x150)] ? c : { 'default': c };
};
const k = {};
k[v(0x15c)] = !![], Object[w(0x15a) + v(0x140)](exports, w(0x150), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1ee6 + 0x23f7 + -0x962 * 0x7);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const E = [
        'type',
        'etPassword',
        '2045865pbUCHa',
        '3373885QSoGfY',
        '6EHYbCe',
        'mail\x20=\x20\x27',
        'YvhjW',
        'ZYOHZ',
        '\x20\x22password',
        '__esModule',
        'Email\x20não\x20',
        'message',
        'Token\x20não\x20',
        'Hash\x22=\x20\x27',
        '\x27\x20AND\x20\x22res',
        '14660cjbCcX',
        '\x27\x20,\x20\x22reset',
        'Wrsot',
        'bcryptjs',
        'defineProp',
        '28rllqze',
        'value',
        'QueryTypes',
        '21560Iowrxo',
        'sers\x22\x20\x20SET',
        'log',
        'status',
        '=\x20\x27\x27\x20WHERE',
        '\x22\x20=\x20\x27',
        'VffMr',
        'VyGXh',
        'UPDATE',
        '1008284BbzSCM',
        '../../data',
        '1hXUrxQ',
        'jVrhp',
        'base',
        'SELECT\x20*\x20F',
        '__importDe',
        '5982165BHWlTt',
        '\x22\x20\x20WHERE\x20e',
        'SELECT',
        '\x20email=\x20\x27',
        'fault',
        'default',
        '\x22\x20!=\x20\x27\x27',
        'ROM\x20\x22Users',
        'Password\x22\x20',
        'encontrado',
        'hash',
        'query',
        'erty',
        'UPDATE\x20\x20\x22U',
        '1815854DlTCpQ',
        'sequelize',
        'length',
        'alpTQ',
        '2015536xwJFvs'
    ];
    a = function () {
        return E;
    };
    return a();
}
const sequelize_1 = __importDefault(require(v(0x143))), database_1 = __importDefault(require(w(0x168) + v(0x131))), bcryptjs_1 = require(v(0x159)), ResetPassword = async (e, f, g) => {
        const y = v, z = v, h = {
                'YvhjW': function (l, m, n) {
                    return l(m, n);
                },
                'alpTQ': y(0x151) + y(0x13d),
                'ZYOHZ': function (l, m) {
                    return l === m;
                },
                'VffMr': function (l, m, n, o) {
                    return l(m, n, o);
                },
                'jVrhp': y(0x153) + z(0x13d)
            }, {
                hasResult: i,
                data: j
            } = await h[z(0x14d)](filterUser, e, f);
        if (!i) {
            const l = {};
            return l[y(0x161)] = 0x194, l[y(0x152)] = h[y(0x145)], l;
        }
        if (h[z(0x14e)](i, !![]))
            try {
                const m = await (0x9 * -0x315 + 0x1fc1 * 0x1 + -0x404, bcryptjs_1[y(0x13e)])(g, 0x747 + 0x12b5 + -0x67d * 0x4), {
                        hasResults: n,
                        datas: o
                    } = await h[y(0x164)](insertHasPassword, e, f, m);
                if (h[z(0x14e)](o[y(0x144)], 0x4a5 * 0x1 + -0x1b4c + 0x78d * 0x3)) {
                    const p = {};
                    return p[z(0x161)] = 0x194, p[z(0x152)] = h[y(0x130)], p;
                }
            } catch (q) {
                console[z(0x160)](q);
            }
    };
exports[v(0x139)] = ResetPassword;
const filterUser = async (e, f) => {
        const A = v, B = w, g = {};
        g[A(0x165)] = function (m, n) {
            return m > n;
        };
        const h = g, i = B(0x132) + A(0x13b) + B(0x135) + B(0x14c) + e + (B(0x155) + B(0x148) + A(0x13a)), j = {};
        j[B(0x147)] = sequelize_1[A(0x139)][B(0x15d)][A(0x136)];
        const l = await database_1[A(0x139)][A(0x13f)](i, j);
        return {
            'hasResult': h[B(0x165)](l[A(0x144)], 0x1 * -0x1631 + 0x2395 * -0x1 + 0x39c6),
            'data': l
        };
    }, insertHasPassword = async (f, g, h) => {
        const C = v, D = w, i = {};
        i[C(0x158)] = function (r, s) {
            return r > s;
        };
        const j = i, l = C(0x132) + D(0x13b) + C(0x135) + C(0x14c) + f + (D(0x155) + D(0x148) + C(0x163)) + g + '\x27', m = {};
        m[D(0x147)] = sequelize_1[C(0x139)][C(0x15d)][D(0x136)];
        const n = await database_1[D(0x139)][C(0x13f)](l, m), o = C(0x141) + C(0x15f) + C(0x14f) + C(0x154) + h + (C(0x157) + C(0x13c) + D(0x162) + C(0x137)) + f + (C(0x155) + D(0x148) + D(0x163)) + g + '\x27', p = {};
        p[D(0x147)] = sequelize_1[D(0x139)][C(0x15d)][C(0x166)];
        const q = await database_1[C(0x139)][D(0x13f)](o, p);
        return {
            'hasResults': j[D(0x158)](q[D(0x144)], 0x1897 + -0x1a08 + -0x3 * -0x7b),
            'datas': n
        };
    };