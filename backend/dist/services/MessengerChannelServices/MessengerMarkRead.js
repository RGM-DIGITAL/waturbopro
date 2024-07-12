'use strict';
const o = b, p = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x7ea + 0x31 * -0x43 + 0x6b6);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(m(0x1d0)) / (-0x134e * -0x2 + -0x23d5 + -0x2c6) + -parseInt(m(0x1f0)) / (0x26fd + 0x1 * 0x158c + -0x5 * 0xc1b) * (-parseInt(m(0x1dd)) / (-0x24c7 + 0x2677 + 0xd * -0x21)) + parseInt(n(0x1ec)) / (0x101f * -0x1 + -0x1031 + 0x2054) * (-parseInt(n(0x1cd)) / (-0x11 * -0x1a6 + -0x80 * -0xc + -0x2201)) + parseInt(n(0x1d1)) / (-0xaf0 + -0x2292 + -0x2f * -0xf8) + -parseInt(m(0x1ee)) / (-0x827 + -0x30 * 0x7b + -0x3 * -0xa6a) * (-parseInt(n(0x1dc)) / (0xa4e * -0x1 + -0x2 * 0x8f + -0x2dd * -0x4)) + -parseInt(n(0x1ef)) / (0x1b * -0x2a + 0xca * 0x25 + -0x18bb) + -parseInt(m(0x1ea)) / (-0x41d + 0x1f58 + -0x1 * 0x1b31);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1113 * -0x16 + 0x1 * -0x97629 + 0xde75d));
function a() {
    const v = [
        '1745690lRFRwk',
        'chat:ack',
        'sended',
        '366347DJRMyh',
        '453426VHmEBg',
        'map',
        'status',
        'findAll',
        'ls/Ticket',
        'tenantId',
        'ls/Message',
        'type',
        'all',
        'messageId',
        '../../mode',
        '6084088gIGPuL',
        '764826cITnpL',
        '../../help',
        'ls/Contact',
        'dataValues',
        'Emit',
        'payload',
        'eBlvf',
        'dVTGM',
        'sequelize',
        'fault',
        'lte',
        'read',
        'ack',
        '2447390qaQpul',
        'erty',
        '8xrXQdB',
        '__esModule',
        '7YcbnXa',
        '5732586niTEYY',
        '6krMsec',
        'default',
        'sender',
        '__importDe',
        'timestamp',
        'mediaUrl',
        'watermark',
        'defineProp',
        'ers/socket',
        'value',
        'update'
    ];
    a = function () {
        return v;
    };
    return a();
}
var __importDefault = this && this[o(0x1f3) + p(0x1e6)] || function (c) {
    const q = o;
    return c && c[q(0x1ed)] ? c : { 'default': c };
};
const k = {};
k[o(0x1f9)] = !![], Object[p(0x1f7) + o(0x1eb)](exports, o(0x1ed), k);
const sequelize_1 = require(o(0x1e5)), socketEmit_1 = __importDefault(require(p(0x1de) + p(0x1f8) + p(0x1e1))), Contact_1 = __importDefault(require(o(0x1db) + p(0x1df))), Message_1 = __importDefault(require(o(0x1db) + o(0x1d7))), Ticket_1 = __importDefault(require(p(0x1db) + p(0x1d5))), MessengerMarkRead = async (d, e) => {
        const r = p, s = p, f = {};
        f[r(0x1e4)] = s(0x1ce), f[s(0x1e3)] = r(0x1cf);
        const g = f, h = await Message_1[s(0x1f1)][r(0x1d4)]({
                'where': {
                    'tenantId': e,
                    'createdAt': { [sequelize_1['Op'][s(0x1e7)]]: new Date(d[r(0x1e8)][r(0x1f6)]) },
                    'fromMe': !![],
                    'ack': {
                        [sequelize_1['Op']['in']]: [
                            0x1 * 0x1e2e + 0x2 * -0xadd + -0x873,
                            0x16 * -0x14 + 0xd54 + -0xb9a
                        ]
                    }
                },
                'include': [{
                        'model': Ticket_1[r(0x1f1)],
                        'where': { 'tenantId': e },
                        'include': [{
                                'model': Contact_1[r(0x1f1)],
                                'where': {
                                    'tenantId': e,
                                    'messengerId': d[s(0x1f2)]['id']
                                }
                            }]
                    }]
            });
        await Promise[s(0x1d9)](h[r(0x1d2)](async i => {
            const t = r, u = s, j = {};
            j[t(0x1e9)] = 0x3, await i[u(0x1fa)](j);
            const l = {};
            l[u(0x1d6)] = e, l[t(0x1d8)] = g[u(0x1e4)], l[u(0x1e2)] = { ...i[t(0x1e0)] }, l[u(0x1e2)][u(0x1f5)] = i[u(0x1f5)], l[u(0x1e2)]['id'] = i['id'], l[u(0x1e2)][u(0x1f4)] = i[t(0x1f4)], l[u(0x1e2)][t(0x1da)] = i[u(0x1da)], l[u(0x1e2)][u(0x1d3)] = g[t(0x1e3)], l[u(0x1e2)][t(0x1e9)] = 0x3, (-0x1 * -0x83 + -0x945 + 0x2 * 0x461, socketEmit_1[u(0x1f1)])(l);
        }));
    };
exports[p(0x1f1)] = MessengerMarkRead;