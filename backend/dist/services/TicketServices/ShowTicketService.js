'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(t(0x1ed)) / (0x8ca + -0xc4e + -0x11 * -0x35) + -parseInt(u(0x208)) / (-0x3 * 0xd6 + -0x99a * -0x2 + -0x10b0) + parseInt(t(0x1e9)) / (0x39 + -0x1 * -0xbf7 + -0xc2d) + parseInt(t(0x205)) / (-0x20e4 + -0x91 + 0x2179) * (-parseInt(t(0x211)) / (-0x4 * -0x32b + -0x1f * -0x7d + -0x1bca)) + -parseInt(t(0x1e7)) / (-0xbb * 0x17 + -0x567 + 0xa * 0x239) + parseInt(u(0x201)) / (-0x2 * 0x9ab + 0xf83 * -0x1 + 0x4 * 0x8b8) * (-parseInt(u(0x202)) / (-0x17c4 + -0x6d0 + 0x1 * 0x1e9c)) + parseInt(t(0x1ff)) / (-0x56 * 0x1f + -0x12 * 0x19f + 0x5 * 0x7ed);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x8a17c + -0x2 * 0x1ac22 + 0x5 * 0x190));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x327 * -0xc + 0x1013 + -0x3400);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[v(0x1f4) + v(0x203)] || function (c) {
    const x = v;
    return c && c[x(0x200)] ? c : { 'default': c };
};
const k = {};
function a() {
    const A = [
        '418800tCftJZ',
        'tags',
        'tenantId',
        'isDeleted',
        'arXci',
        'ERR_NO_TIC',
        'whatsapp',
        'mtvaj',
        'ls/User',
        '5ezHEVE',
        'klQBB',
        'sgFmW',
        'defineProp',
        '../../erro',
        'iYAJl',
        '583188tKLBYP',
        'inurH',
        '384771blHxtl',
        'user',
        'KET_FOUND',
        'erty',
        '183324VyaULW',
        'elpER',
        'ls/Contact',
        'OYKaA',
        'value',
        'attributes',
        'ls/Ticket',
        '__importDe',
        'extraInfo',
        'wallets',
        'name',
        'model',
        'fmRZN',
        'cahFg',
        'include',
        'associatio',
        'contact',
        'findByPk',
        '13723803jHWFTb',
        '__esModule',
        '70yXfYsT',
        '475680VEIjkC',
        'fault',
        'default',
        '2347304odSsAS',
        'rs/AppErro',
        '../../mode'
    ];
    a = function () {
        return A;
    };
    return a();
}
k[w(0x1f1)] = !![], Object[w(0x214) + v(0x1ec)](exports, w(0x200), k);
const Ticket_1 = __importDefault(require(v(0x207) + w(0x1f3))), AppError_1 = __importDefault(require(v(0x215) + w(0x206) + 'r')), Contact_1 = __importDefault(require(v(0x207) + v(0x1ef))), User_1 = __importDefault(require(v(0x207) + v(0x210))), ShowTicketService = async ({
        id: h,
        tenantId: i
    }) => {
        const y = w, z = w, j = {};
        j[y(0x1ee)] = y(0x1fd), j[y(0x1f0)] = y(0x1f5), j[y(0x216)] = z(0x209), j[z(0x212)] = z(0x1f6), j[z(0x1f9)] = z(0x1f7), j[y(0x1fa)] = y(0x1ea), j[z(0x20f)] = y(0x20e), j[z(0x20c)] = z(0x20b), j[z(0x213)] = function (r, s) {
            return r !== s;
        }, j[z(0x1e8)] = z(0x20d) + y(0x1eb);
        const l = j, m = {};
        m[z(0x1f8)] = Contact_1[z(0x204)], m['as'] = l[z(0x1ee)], m[z(0x1fb)] = [
            l[z(0x1f0)],
            l[y(0x216)],
            {
                'association': l[y(0x212)],
                'attributes': [
                    'id',
                    l[y(0x1f9)]
                ]
            }
        ];
        const n = {};
        n[z(0x1f8)] = User_1[z(0x204)], n['as'] = l[z(0x1fa)], n[z(0x1f2)] = [
            'id',
            l[z(0x1f9)]
        ];
        const o = {};
        o[y(0x1fc) + 'n'] = l[z(0x20f)], o[y(0x1f2)] = [
            'id',
            l[z(0x1f9)],
            l[z(0x20c)]
        ];
        const p = {};
        p[z(0x1fb)] = [
            m,
            n,
            o
        ];
        const q = await Ticket_1[y(0x204)][y(0x1fe)](h, p);
        if (!q || l[z(0x213)](q[y(0x20a)], i))
            throw new AppError_1[(y(0x204))](l[z(0x1e8)], -0x734 * 0x5 + -0x18e2 + -0xb * -0x5ae);
        return q;
    };
exports[w(0x204)] = ShowTicketService;