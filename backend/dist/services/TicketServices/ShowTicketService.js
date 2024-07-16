'use strict';
const v = b, w = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x14c0 + -0x17 * -0x137 + -0x2fbb * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(t(0x100)) / (0x4a0 + 0x2096 + 0x771 * -0x5) + -parseInt(t(0x105)) / (-0x1 * -0x69b + 0x1 * -0xc2f + 0x596) * (-parseInt(u(0x10f)) / (-0x3 * -0x638 + -0x2 * -0xed1 + -0x3047)) + parseInt(t(0x101)) / (0x19c9 + -0xea2 * -0x2 + -0x3709) * (parseInt(t(0x120)) / (-0x8b6 * -0x3 + -0xaac + -0xf71)) + parseInt(t(0x107)) / (-0x1b + 0x680 + -0x65f) * (-parseInt(t(0x10d)) / (-0x2a4 + -0xb8a * -0x1 + -0x2f5 * 0x3)) + parseInt(t(0x11a)) / (-0x4b3 + -0x1683 + 0x1b3e * 0x1) + -parseInt(u(0x119)) / (-0xc * 0x1d6 + 0x702 + 0x303 * 0x5) + -parseInt(t(0x117)) / (-0x1 * -0x167 + 0xadb * 0x3 + -0x65 * 0x56);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x33b58 + -0x118 * -0xe5 + -0x40fc));
function a() {
    const A = [
        'KET_FOUND',
        '22FQBOeb',
        'default',
        '33114yjveSE',
        'CagHx',
        'zSeHY',
        'BaCel',
        'ls/Contact',
        'contact',
        '217nZvtmI',
        'tags',
        '137337ibSpMe',
        'TTIUZ',
        '__importDe',
        'iSWdS',
        'name',
        'GfTuz',
        'findByPk',
        'fault',
        '7819230UNtqvF',
        'ERYQT',
        '1466064GogHgY',
        '2223408kiINYd',
        'rs/AppErro',
        'tenantId',
        'uvUUZ',
        'WjPag',
        'whatsapp',
        '17615RnEhxL',
        'ls/User',
        'attributes',
        'value',
        'wallets',
        'associatio',
        '__esModule',
        'user',
        'include',
        'NJHws',
        'ERR_NO_TIC',
        'defineProp',
        'ls/Ticket',
        '../../mode',
        '../../erro',
        'isDeleted',
        'erty',
        '111046TQJYoH',
        '548MjkEXK',
        'extraInfo',
        'model'
    ];
    a = function () {
        return A;
    };
    return a();
}
var __importDefault = this && this[v(0x111) + v(0x116)] || function (c) {
    const x = v;
    return c && c[x(0x126)] ? c : { 'default': c };
};
const k = {};
k[v(0x123)] = !![], Object[v(0xfa) + w(0xff)](exports, w(0x126), k);
const Ticket_1 = __importDefault(require(w(0xfc) + v(0xfb))), AppError_1 = __importDefault(require(w(0xfd) + w(0x11b) + 'r')), Contact_1 = __importDefault(require(v(0xfc) + w(0x10b))), User_1 = __importDefault(require(v(0xfc) + v(0x121))), ShowTicketService = async ({
        id: h,
        tenantId: i
    }) => {
        const y = w, z = v, j = {};
        j[y(0x118)] = z(0x10c), j[y(0x110)] = z(0x102), j[y(0x11e)] = y(0x10e), j[y(0x112)] = y(0x124), j[z(0x109)] = y(0x113), j[y(0x114)] = y(0xf6), j[z(0x108)] = y(0x11f), j[y(0x10a)] = z(0xfe), j[z(0xf8)] = function (r, s) {
            return r !== s;
        }, j[z(0x11d)] = z(0xf9) + y(0x104);
        const l = j, m = {};
        m[y(0x103)] = Contact_1[y(0x106)], m['as'] = l[y(0x118)], m[y(0xf7)] = [
            l[z(0x110)],
            l[y(0x11e)],
            {
                'association': l[y(0x112)],
                'attributes': [
                    'id',
                    l[z(0x109)]
                ]
            }
        ];
        const n = {};
        n[y(0x103)] = User_1[y(0x106)], n['as'] = l[z(0x114)], n[z(0x122)] = [
            'id',
            l[z(0x109)]
        ];
        const o = {};
        o[y(0x125) + 'n'] = l[z(0x108)], o[y(0x122)] = [
            'id',
            l[y(0x109)],
            l[z(0x10a)]
        ];
        const p = {};
        p[y(0xf7)] = [
            m,
            n,
            o
        ];
        const q = await Ticket_1[y(0x106)][y(0x115)](h, p);
        if (!q || l[y(0xf8)](q[y(0x11c)], i))
            throw new AppError_1[(y(0x106))](l[y(0x11d)], 0x61e + -0x24b6 + -0x11c * -0x1d);
        return q;
    };
exports[w(0x106)] = ShowTicketService;