'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(t(0x181)) / (-0x7eb * -0x1 + -0x2eb + 0x1 * -0x4ff) + parseInt(t(0x1ac)) / (0x10 * 0x121 + 0x10 * -0x161 + -0x1b * -0x26) * (parseInt(u(0x199)) / (0x16e + -0x1749 + 0x15de)) + parseInt(u(0x1a5)) / (-0x356 + -0x2 * 0x1107 + 0x2568) + parseInt(u(0x191)) / (-0x3de + 0x2081 * 0x1 + -0x1c9e) * (parseInt(u(0x195)) / (0x38b + -0x673 + 0x96 * 0x5)) + -parseInt(u(0x1a6)) / (-0x6 * 0x343 + -0x1713 + 0x2aac) + -parseInt(u(0x1a7)) / (0x1 * -0x63c + -0x143a + 0x1a7e) * (-parseInt(u(0x196)) / (-0x24b6 * -0x1 + -0x313 * -0x9 + 0x11c * -0x3a)) + parseInt(u(0x19b)) / (0x4 * 0x63f + 0x3 * 0x693 + -0x2cab) * (-parseInt(u(0x1a4)) / (-0x1061 * -0x1 + 0x3b9 * 0x1 + -0x1 * 0x140f));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x58e0f + -0x4289 * 0x10 + 0x41b9 * 0x7));
function a() {
    const C = [
        'userId',
        'fault',
        'ice',
        '325uKFuVn',
        's/Statisti',
        '__importDe',
        'cs/Contact',
        '32070foMsYv',
        '18XZIOhk',
        'searchPara',
        'user',
        '61548POTlHJ',
        'ContactsRe',
        '180vQSTft',
        'value',
        'startDate',
        'ddds',
        'vice',
        'endDate',
        'sQueues',
        'erty',
        'sReportSer',
        '297121IhkoyG',
        '622172oFioKU',
        '2694965YxXaiu',
        '527928AoxwjH',
        'yMOag',
        'port',
        'DashTicket',
        'profile',
        '28vZqswm',
        'tenantId',
        'wallets',
        '158313tKdDhX',
        'default',
        'cs/Tickets',
        'admin',
        '../service',
        'tags',
        'status',
        'query',
        '__esModule',
        'json',
        'QueuesServ',
        'NJugk',
        'defineProp'
    ];
    a = function () {
        return C;
    };
    return a();
}
var __importDefault = this && this[v(0x193) + v(0x18f)] || function (c) {
    const x = w;
    return c && c[x(0x189)] ? c : { 'default': c };
};
const k = {};
k[w(0x19c)] = !![], Object[v(0x18d) + v(0x1a2)](exports, v(0x189), k), exports[w(0x19a) + w(0x1a9)] = exports[v(0x1aa) + v(0x1a1)] = void (0xe8b + 0x5 * -0x2d7 + -0x4 * 0x16);
const TicketsQueuesService_1 = __importDefault(require(w(0x185) + v(0x192) + w(0x183) + w(0x18b) + v(0x190))), ContactsReportService_1 = __importDefault(require(v(0x185) + v(0x192) + v(0x194) + v(0x1a3) + w(0x19f))), DashTicketsQueues = async (d, e) => {
        const y = v, z = v, f = {};
        f[y(0x1a8)] = function (r, s) {
            return r === s;
        }, f[y(0x18c)] = y(0x184);
        const g = f, {
                tenantId: h,
                profile: i,
                id: j
            } = d[y(0x198)], {
                dateStart: l,
                dateEnd: m,
                status: n,
                queuesIds: o,
                showAll: p
            } = d[y(0x188)], q = await (0x1afa + -0x119 * -0x3 + -0x7b * 0x3f, TicketsQueuesService_1[y(0x182)])({
                'showAll': g[y(0x1a8)](i, g[y(0x18c)]) ? p : ![],
                'dateStart': l,
                'dateEnd': m,
                'status': n,
                'queuesIds': o,
                'userId': j,
                'tenantId': h
            });
        return e[y(0x187)](0x3a * -0x60 + -0x3e5 + 0x267 * 0xb)[z(0x18a)](q);
    };
exports[v(0x1aa) + v(0x1a1)] = DashTicketsQueues;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x43a * -0x4 + -0xa7 * 0x38 + 0x36f0);
        let h = e[f];
        return h;
    }, b(c, d);
}
const ContactsReport = async (d, e) => {
    const A = v, B = w, {tenantId: f} = d[A(0x198)], {
            startDate: g,
            endDate: h,
            tags: i,
            ddds: j,
            searchParam: l,
            wallets: m
        } = d[A(0x188)], n = {};
    n[B(0x19d)] = g, n[B(0x1a0)] = h, n[B(0x186)] = i, n[A(0x19e)] = j, n[B(0x180)] = m, n[A(0x1ad)] = f, n[B(0x1ab)] = d[A(0x198)][B(0x1ab)], n[A(0x18e)] = +d[A(0x198)]['id'], n[B(0x197) + 'm'] = l;
    const o = await (0xb9e * 0x1 + -0x4 * -0x7f0 + -0x2b5e, ContactsReportService_1[B(0x182)])(n);
    return e[B(0x187)](0x1f0 + 0x9d7 + -0xaff)[A(0x18a)](o);
};
exports[v(0x19a) + v(0x1a9)] = ContactsReport;