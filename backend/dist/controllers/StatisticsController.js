'use strict';
function a() {
    const C = [
        'ZELBx',
        '10BhcpdP',
        'query',
        'cs/Tickets',
        'profile',
        '553sKKxIm',
        '../service',
        '__importDe',
        'startDate',
        'cs/Contact',
        'searchPara',
        'ice',
        'wallets',
        's/Statisti',
        'status',
        'QueuesServ',
        'fault',
        'userId',
        '3ToHPbM',
        'vice',
        'sQueues',
        'endDate',
        '32144gXUxto',
        'default',
        '7412625kgMLtY',
        'port',
        '2335201QwVweS',
        'json',
        'DashTicket',
        'sReportSer',
        '9368DnTznK',
        '6832596MQrSgq',
        '3334544wGOJKu',
        'cysmb',
        'value',
        'ContactsRe',
        'admin',
        '__esModule',
        'tenantId',
        '23142KGgRRH',
        'defineProp',
        'erty',
        '65SvkMOO',
        'ddds',
        '149oNCTpj',
        'tags',
        'user'
    ];
    a = function () {
        return C;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x557 * 0x1 + 0x2e1 + 0x32c);
        let h = e[f];
        return h;
    }, b(c, d);
}
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(t(0xca)) / (-0x1d3 * -0x11 + -0x1ea6 + -0x2 * 0x2e) * (-parseInt(u(0xbc)) / (-0x1d58 + 0x2 * -0x1270 + 0x423a)) + parseInt(u(0xdf)) / (0x17 * 0xd5 + 0x4d3 * 0x1 + 0x17f3 * -0x1) * (parseInt(t(0xbe)) / (0x1 * -0x30e + 0x11 * 0x67 + 0xc1 * -0x5)) + -parseInt(u(0xc8)) / (0x88b + -0x1b9b + 0x1315) * (-parseInt(t(0xc5)) / (-0x225f + -0x4b7 * -0x5 + 0xad2)) + parseInt(u(0xd2)) / (-0xb61 + 0x2323 + -0x195 * 0xf) * (parseInt(u(0xe3)) / (0x773 + 0x545 + -0xcb0)) + -parseInt(u(0xb6)) / (-0x230c + 0x1 * -0x12b6 + 0x35cb) + parseInt(u(0xce)) / (0x10 * -0x98 + 0x16fd + -0x139 * 0xb) * (parseInt(u(0xb8)) / (-0x480 + -0x2429 * -0x1 + -0x8e * 0x39)) + parseInt(u(0xbd)) / (0xeb * 0x3 + 0x677 + 0x2 * -0x496);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1492 * 0x77 + 0xb921f + 0x507d3 * 0x1));
var __importDefault = this && this[v(0xd4) + w(0xdd)] || function (c) {
    const x = v;
    return c && c[x(0xc3)] ? c : { 'default': c };
};
const k = {};
k[v(0xc0)] = !![], Object[v(0xc6) + w(0xc7)](exports, w(0xc3), k), exports[w(0xc1) + v(0xb7)] = exports[v(0xba) + w(0xe1)] = void (0x2 * -0xb7d + 0x80e + -0x776 * -0x2);
const TicketsQueuesService_1 = __importDefault(require(w(0xd3) + w(0xda) + v(0xd0) + w(0xdc) + w(0xd8))), ContactsReportService_1 = __importDefault(require(v(0xd3) + w(0xda) + w(0xd6) + w(0xbb) + w(0xe0))), DashTicketsQueues = async (d, e) => {
        const y = v, z = w, f = {};
        f[y(0xbf)] = function (r, s) {
            return r === s;
        }, f[y(0xcd)] = z(0xc2);
        const g = f, {
                tenantId: h,
                profile: i,
                id: j
            } = d[z(0xcc)], {
                dateStart: l,
                dateEnd: m,
                status: n,
                queuesIds: o,
                showAll: p
            } = d[y(0xcf)], q = await (0xab8 + -0x7 * 0x7b + -0x75b, TicketsQueuesService_1[z(0xe4)])({
                'showAll': g[z(0xbf)](i, g[y(0xcd)]) ? p : ![],
                'dateStart': l,
                'dateEnd': m,
                'status': n,
                'queuesIds': o,
                'userId': j,
                'tenantId': h
            });
        return e[y(0xdb)](0x67 * -0x2d + -0xf53 * -0x1 + 0x3 * 0x130)[z(0xb9)](q);
    };
exports[v(0xba) + w(0xe1)] = DashTicketsQueues;
const ContactsReport = async (d, e) => {
    const A = w, B = w, {tenantId: f} = d[A(0xcc)], {
            startDate: g,
            endDate: h,
            tags: i,
            ddds: j,
            searchParam: l,
            wallets: m
        } = d[B(0xcf)], n = {};
    n[A(0xd5)] = g, n[B(0xe2)] = h, n[B(0xcb)] = i, n[B(0xc9)] = j, n[A(0xd9)] = m, n[B(0xc4)] = f, n[B(0xd1)] = d[B(0xcc)][A(0xd1)], n[A(0xde)] = +d[B(0xcc)]['id'], n[A(0xd7) + 'm'] = l;
    const o = await (0x1212 + -0x3 * -0x118 + -0x155a, ContactsReportService_1[B(0xe4)])(n);
    return e[B(0xdb)](0x1616 * 0x1 + -0x18a0 + 0x352)[B(0xb9)](o);
};
exports[w(0xc1) + w(0xb7)] = ContactsReport;