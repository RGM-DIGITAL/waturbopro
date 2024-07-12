'use strict';
const s = b, t = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x84d + -0x1452 + 0x1e0c);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(q(0x17c)) / (0x191 * 0x8 + -0x24b * -0x3 + 0x24 * -0x8a) + -parseInt(r(0x18b)) / (0xc5c + 0xd5a * 0x2 + -0x1387 * 0x2) * (-parseInt(r(0x191)) / (-0xb22 + 0x11 * 0x11 + -0x4 * -0x281)) + -parseInt(r(0x182)) / (-0x4f * 0x66 + -0xa * 0x7e + -0x246a * -0x1) + -parseInt(q(0x175)) / (-0xc15 + -0x18c2 + -0x1 * -0x24dc) * (-parseInt(r(0x173)) / (0x191e + 0x1 * 0x925 + -0x223d)) + parseInt(r(0x192)) / (0xbe2 + -0x158 + 0x75 * -0x17) * (parseInt(r(0x187)) / (0x1da3 + -0x45a * -0x7 + 0x3c11 * -0x1)) + parseInt(q(0x17e)) / (0x8 * 0x296 + -0x149 * -0x11 + -0x2a80) + -parseInt(q(0x172)) / (-0x688 + 0xb * 0x323 + -0x1bef);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x5ceb3 + -0x22 * 0xb81 + 0x1 * 0xe39fc));
function a() {
    const x = [
        'ticketId',
        '3784905bMNjKZ',
        'user',
        'ls/LogTick',
        'gewqR',
        '1587120vwKfrN',
        'attributes',
        'model',
        'include',
        'DESC',
        '250312wLxebj',
        'uuDyl',
        'value',
        'ls/User',
        '5254KiZSFq',
        'fault',
        'default',
        '../../mode',
        'where',
        'ls/Queue',
        '813LBnUjP',
        '119CJUXxK',
        'findAll',
        'createdAt',
        'name',
        '__esModule',
        'erty',
        '16557100sZrGgx',
        '6moKPOs',
        '__importDe',
        '2445580IZYQtc',
        'pkIFI',
        'defineProp',
        'fpBGm',
        'queue',
        'order',
        'TijsZ',
        '350622XaXQuW'
    ];
    a = function () {
        return x;
    };
    return a();
}
var __importDefault = this && this[s(0x174) + s(0x18c)] || function (c) {
    const u = s;
    return c && c[u(0x170)] ? c : { 'default': c };
};
const k = {};
k[s(0x189)] = !![], Object[t(0x177) + t(0x171)](exports, s(0x170), k);
const LogTicket_1 = __importDefault(require(t(0x18e) + t(0x180) + 'et')), User_1 = __importDefault(require(t(0x18e) + t(0x18a))), Queue_1 = __importDefault(require(t(0x18e) + s(0x190))), ShowLogTicketService = async ({ticketId: h}) => {
        const v = t, w = t, i = {};
        i[v(0x176)] = w(0x17f), i[v(0x178)] = w(0x16f), i[w(0x17b)] = v(0x179), i[v(0x181)] = w(0x16e), i[w(0x188)] = v(0x186);
        const j = i, l = {};
        l[w(0x17d)] = h;
        const m = {};
        m[w(0x184)] = User_1[v(0x18d)], m['as'] = j[v(0x176)], m[w(0x183)] = [
            'id',
            j[w(0x178)]
        ];
        const n = {};
        n[v(0x184)] = Queue_1[w(0x18d)], n['as'] = j[v(0x17b)], n[v(0x183)] = [
            'id',
            j[w(0x17b)]
        ];
        const o = {};
        o[w(0x18f)] = l, o[v(0x185)] = [
            m,
            n
        ], o[v(0x17a)] = [[
                j[w(0x181)],
                j[w(0x188)]
            ]];
        const p = await LogTicket_1[v(0x18d)][w(0x16d)](o);
        return p;
    };
exports[t(0x18d)] = ShowLogTicketService;