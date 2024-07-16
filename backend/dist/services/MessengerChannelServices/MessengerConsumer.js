'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x1a1)) / (-0xeae + -0x1aa4 + 0x2953) * (parseInt(p(0x19b)) / (0x4c * -0x57 + 0x2c * 0x5e + 0x9ae)) + parseInt(p(0x1a0)) / (-0x1fc9 + 0x239b + -0x3cf) * (-parseInt(p(0x1a6)) / (0x1 * 0x10f0 + -0x28a * 0x9 + 0x5ee)) + parseInt(p(0x1b2)) / (-0x1abf + -0x12b * 0x1d + 0x331 * 0x13) + parseInt(q(0x18f)) / (0xda1 * -0x1 + -0x1c6a + 0x2a11) * (parseInt(q(0x196)) / (0x1b26 + -0x24e * -0x7 + 0x1 * -0x2b41)) + -parseInt(p(0x1af)) / (-0x23a4 * -0x1 + -0x1720 + -0xc7c) + parseInt(p(0x195)) / (-0x3 * 0xa75 + -0x4f * 0x3a + 0x314e) + -parseInt(q(0x1b6)) / (0x1664 + -0x21d + 0x9d * -0x21) * (-parseInt(p(0x19d)) / (-0x149 * -0x11 + -0x18e5 + -0x71 * -0x7));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x4afc + 0x65e0 + -0x1 * -0x15f79));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xb76 + -0x1e21 + 0x2b26);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[r(0x192) + s(0x193)] || function (c) {
    const t = s;
    return c && c[t(0x1ac)] ? c : { 'default': c };
};
const o = {};
function a() {
    const y = [
        '73293giUEbL',
        'NCrmL',
        'token',
        '9621eDkRIQ',
        '1NIKKed',
        'defineProp',
        'value',
        '../../libs',
        'jsonwebtok',
        '268ldqzGg',
        'erty',
        'AMQP_URL',
        './Messenge',
        'default',
        '../../conf',
        '__esModule',
        'consume',
        'messenger',
        '1261616zBNFec',
        'rHandleMes',
        'env',
        '996970yqcvbG',
        'verify',
        'ig/auth',
        '/rabbitmq-',
        '620mKQLWh',
        '868254ZZYdPb',
        'toString',
        'sage',
        '__importDe',
        'fault',
        'messages',
        '84573ncXErK',
        '7gnXZvk',
        'content',
        'secret',
        'start',
        'parse',
        '517564JmNXhr',
        'server'
    ];
    a = function () {
        return y;
    };
    return a();
}
o[r(0x1a3)] = !![], Object[r(0x1a2) + s(0x1a7)](exports, r(0x1ac), o);
const jsonwebtoken_1 = require(s(0x1a5) + 'en'), rabbitmq_server_1 = __importDefault(require(r(0x1a4) + r(0x1b5) + r(0x19c))), auth_1 = __importDefault(require(r(0x1ab) + r(0x1b4))), MessengerHandleMessage_1 = __importDefault(require(s(0x1a9) + r(0x1b0) + s(0x191))), MessengerConsumer = async () => {
        const u = s, v = r, d = {};
        d[u(0x19e)] = v(0x1ae);
        const e = d, f = new rabbitmq_server_1[(v(0x1aa))](process[u(0x1b1)][u(0x1a8)] || '');
        await f[v(0x199)](), f[u(0x1ad)](e[u(0x19e)], g => {
            const w = u, x = v, h = JSON[w(0x19a)](g[x(0x197)][x(0x190)]()), i = (-0x130a * -0x1 + 0x226c + 0x6 * -0x8e9, jsonwebtoken_1[x(0x1b3)])(h[x(0x19f)], auth_1[w(0x1aa)][x(0x198)]);
            if (!i)
                return;
            (-0x1e05 + 0x1d83 + 0x82, MessengerHandleMessage_1[x(0x1aa)])(h[x(0x194)]);
        });
    };
exports[s(0x1aa)] = MessengerConsumer;