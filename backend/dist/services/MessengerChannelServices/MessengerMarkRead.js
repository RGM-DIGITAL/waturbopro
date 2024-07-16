'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(m(0x12f)) / (-0x2 * 0x1027 + -0x10 * -0x1c3 + -0x1 * -0x41f) + parseInt(n(0x106)) / (0x2596 + -0x6d6 + -0x1ebe) * (parseInt(m(0x130)) / (-0xd51 + -0x2172 + 0x2ec6)) + parseInt(m(0x112)) / (0x3 * -0x845 + 0xa + 0x18c9) * (-parseInt(n(0x125)) / (0x167 * 0xd + -0x587 + -0xcaf)) + parseInt(n(0x122)) / (-0x17c2 + 0x1 * -0xd97 + -0x3 * -0xc75) + parseInt(n(0x113)) / (-0x79d + -0x20bb + -0x1 * -0x285f) + parseInt(m(0x10b)) / (0xdb7 * -0x2 + 0x1 * -0x238d + 0x3f03) * (-parseInt(m(0x11f)) / (-0x61a + 0x248 * 0x11 + -0x89 * 0x3d)) + parseInt(m(0x12c)) / (-0xf21 + -0x10 * 0x115 + 0x207b) * (parseInt(m(0x12e)) / (-0xd79 + -0xcc * 0x19 + -0x14 * -0x1ac));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xf7060 + -0x2 * -0x6ab1a + -0xca74e * -0x1));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1285 * 0x1 + 0x1 * -0x10c3 + -0x60d * -0x6);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const v = [
        'erty',
        'ls/Contact',
        'ls/Message',
        'GlCse',
        'chat:ack',
        '1197788PiVBvD',
        '4802112PaTeRJ',
        'timestamp',
        'read',
        'sended',
        'messageId',
        'sequelize',
        'map',
        'defineProp',
        'Emit',
        'ers/socket',
        'HOweB',
        'mediaUrl',
        '996309OcDLjm',
        'watermark',
        'payload',
        '2514960Tiopnj',
        'value',
        '__esModule',
        '10ouTcKr',
        'ack',
        '../../mode',
        'lte',
        'default',
        'all',
        'update',
        '122770bNLMcx',
        'findAll',
        '341QytVTv',
        '269495OUuGAh',
        '3ljhDtX',
        'dataValues',
        'ls/Ticket',
        'type',
        'fault',
        '1062870dMUtMW',
        'tenantId',
        'status',
        '__importDe',
        '../../help',
        '72sEtpGz',
        'sender'
    ];
    a = function () {
        return v;
    };
    return a();
}
var __importDefault = this && this[o(0x109) + o(0x134)] || function (c) {
    const q = o;
    return c && c[q(0x124)] ? c : { 'default': c };
};
const k = {};
k[p(0x123)] = !![], Object[o(0x11a) + o(0x10d)](exports, o(0x124), k);
const sequelize_1 = require(o(0x118)), socketEmit_1 = __importDefault(require(p(0x10a) + o(0x11c) + o(0x11b))), Contact_1 = __importDefault(require(p(0x127) + p(0x10e))), Message_1 = __importDefault(require(p(0x127) + o(0x10f))), Ticket_1 = __importDefault(require(p(0x127) + p(0x132))), MessengerMarkRead = async (d, e) => {
        const r = p, s = o, f = {};
        f[r(0x110)] = s(0x111), f[r(0x11d)] = s(0x116);
        const g = f, h = await Message_1[r(0x129)][s(0x12d)]({
                'where': {
                    'tenantId': e,
                    'createdAt': { [sequelize_1['Op'][r(0x128)]]: new Date(d[s(0x115)][s(0x120)]) },
                    'fromMe': !![],
                    'ack': {
                        [sequelize_1['Op']['in']]: [
                            0xec * -0x10 + -0x247d + 0x752 * 0x7,
                            -0x1472 + -0x1 * -0xff1 + 0x483
                        ]
                    }
                },
                'include': [{
                        'model': Ticket_1[r(0x129)],
                        'where': { 'tenantId': e },
                        'include': [{
                                'model': Contact_1[s(0x129)],
                                'where': {
                                    'tenantId': e,
                                    'messengerId': d[r(0x10c)]['id']
                                }
                            }]
                    }]
            });
        await Promise[r(0x12a)](h[s(0x119)](async i => {
            const t = s, u = r, j = {};
            j[t(0x126)] = 0x3, await i[t(0x12b)](j);
            const l = {};
            l[u(0x107)] = e, l[t(0x133)] = g[t(0x110)], l[t(0x121)] = { ...i[t(0x131)] }, l[t(0x121)][u(0x11e)] = i[t(0x11e)], l[t(0x121)]['id'] = i['id'], l[t(0x121)][t(0x114)] = i[t(0x114)], l[t(0x121)][u(0x117)] = i[t(0x117)], l[t(0x121)][u(0x108)] = g[u(0x11d)], l[t(0x121)][u(0x126)] = 0x3, (0x2 * -0xaab + 0x188d + -0x337 * 0x1, socketEmit_1[u(0x129)])(l);
        }));
    };
exports[o(0x129)] = MessengerMarkRead;