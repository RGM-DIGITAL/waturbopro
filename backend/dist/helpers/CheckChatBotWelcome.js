'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x12ee * -0x1 + -0x8 * -0xb8 + -0x175b);
        let h = e[f];
        return h;
    }, b(c, d);
}
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0x15e)) / (0x687 + 0x1 * -0x7cf + 0x149) * (parseInt(r(0x153)) / (-0x1 * 0x1a73 + -0x1bd9 * 0x1 + -0x1b27 * -0x2)) + -parseInt(r(0x163)) / (-0x1b31 + -0x53 * -0xd + 0x6b * 0x37) * (-parseInt(r(0x172)) / (-0x1 * 0x3a1 + -0x62e + 0x9d3)) + -parseInt(r(0x171)) / (-0xf96 + -0x195b + 0x28f6) + -parseInt(s(0x162)) / (-0x1403 * -0x1 + -0x24c9 + 0x64 * 0x2b) * (-parseInt(r(0x180)) / (0x2018 + -0x2043 + -0x2 * -0x19)) + parseInt(r(0x15f)) / (0x1 * -0x261b + -0x2 * -0x38f + 0x1f05) + -parseInt(s(0x16c)) / (0x2 * -0x7ea + 0x3 * 0x8fa + 0x1 * -0xb11) + parseInt(r(0x17f)) / (-0x2573 * 0x1 + -0xd15 * -0x1 + 0x1868) * (parseInt(s(0x165)) / (-0x11c2 + 0xf97 + 0x236));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x82ccf + 0xa69c * 0x17 + -0x9ae78));
var __importDefault = this && this[t(0x156) + u(0x164)] || function (c) {
    const v = u;
    return c && c[v(0x157)] ? c : { 'default': c };
};
function a() {
    const y = [
        'indexOf',
        'ticketId',
        's/TicketSe',
        'plyId',
        '10iygLsi',
        '17941HWONsT',
        'autoReply',
        'ateLogTick',
        'substr',
        'toReplyMes',
        'ShowStepAu',
        'yServices/',
        '6TAAdbP',
        'rvices/Cre',
        'sageServic',
        '__importDe',
        '__esModule',
        'qGgCQ',
        'etService',
        'update',
        'contactId',
        'type',
        'Contact',
        '341031TsAeWA',
        '4637144SBjpwU',
        'number',
        'LohOt',
        '1038ucDzgN',
        '246UmHoEt',
        'fault',
        '26666233ZbdDWB',
        'userId',
        'defineProp',
        'default',
        'erty',
        'findByPk',
        'channel',
        '15154047HBxzRV',
        'tenantId',
        '../models/',
        'stepAutoRe',
        's/AutoRepl',
        '5713980ulLtvE',
        '62668YwuChS',
        'telegram',
        'value',
        'BSfOf',
        'chatBot',
        'Dphus',
        'isGroup',
        'autoReplyI',
        '../service'
    ];
    a = function () {
        return y;
    };
    return a();
}
const k = {};
k[u(0x174)] = !![], Object[u(0x167) + u(0x169)](exports, t(0x157), k);
const Contact_1 = __importDefault(require(t(0x16e) + t(0x15d))), ShowStepAutoReplyMessageService_1 = __importDefault(require(t(0x17a) + u(0x170) + u(0x186) + u(0x185) + u(0x184) + t(0x155) + 'e')), CreateLogTicketService_1 = __importDefault(require(t(0x17a) + u(0x17d) + t(0x154) + t(0x182) + t(0x159))), AutoReplyWelcome = async f => {
        const w = t, x = u, g = {};
        g[w(0x158)] = function (p, q) {
            return p === q;
        }, g[w(0x175)] = function (p, q) {
            return p !== q;
        }, g[x(0x177)] = w(0x173), g[x(0x161)] = w(0x176);
        const h = g;
        if (f[x(0x166)] || f[x(0x178)])
            return;
        const i = await (0x175e + -0x105e + -0x700 * 0x1, ShowStepAutoReplyMessageService_1[w(0x168)])(0xd * 0x1e2 + -0x220f + 0x995, 0x17 * -0x25 + -0x8c * -0xf + -0x4e1, -0x29d * 0x1 + -0x18da + 0x1b77, !![], f[w(0x16d)]);
        if (!i)
            return;
        const j = await Contact_1[x(0x168)][x(0x16a)](f[x(0x15b)]), {celularTeste: l} = i[w(0x181)], m = j?.[w(0x160)];
        if (l && h[x(0x158)](m?.[x(0x17b)](l[w(0x183)](-0x16f0 + 0x4 * -0x23b + 0xa9f * 0x3)), -(0x1 * -0x1597 + -0x7 * -0x376 + -0x2a2)) || !m) {
            if (h[w(0x175)](f[x(0x16b)], h[w(0x177)]))
                return;
        }
        const n = {};
        n[x(0x179) + 'd'] = i[w(0x181)]['id'], n[w(0x16f) + w(0x17e)] = i['id'], await f[w(0x15a)](n);
        const o = {};
        o[x(0x17c)] = f['id'], o[w(0x15c)] = h[w(0x161)], await (-0xdbc + 0xbf6 * 0x2 + 0x28c * -0x4, CreateLogTicketService_1[w(0x168)])(o);
    };
exports[u(0x168)] = AutoReplyWelcome;