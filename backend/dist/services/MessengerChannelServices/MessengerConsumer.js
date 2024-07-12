'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x18d)) / (0xf75 * -0x1 + -0x5 * 0x717 + 0x32e9) * (parseInt(q(0x180)) / (0x1 * 0x1f91 + -0x2589 + 0xff * 0x6)) + parseInt(p(0x17c)) / (-0x17cc + -0x1 * 0x939 + 0x97 * 0x38) * (-parseInt(q(0x181)) / (-0x2 * -0x880 + -0x1446 + 0x34a)) + parseInt(p(0x170)) / (-0x1 * -0x1717 + -0x41 * -0x7e + -0x3710) * (parseInt(q(0x174)) / (0x225b + -0x36e * 0x4 + -0x149d)) + -parseInt(p(0x178)) / (-0x392 * -0x7 + 0x930 + -0x2227 * 0x1) + -parseInt(p(0x182)) / (-0x143c + 0x29 + 0x141b) * (parseInt(p(0x172)) / (0x248f + 0xf4 * 0x3 + -0x2762)) + -parseInt(q(0x176)) / (-0x1c66 + 0x1a1 + 0x1acf * 0x1) * (parseInt(q(0x179)) / (-0x1459 + -0x36c + 0x7f0 * 0x3)) + -parseInt(p(0x17d)) / (-0x6fe + 0x7 * -0x475 + 0x1 * 0x263d) * (-parseInt(q(0x187)) / (0x14d9 + 0xfa8 * 0x1 + -0x2474));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x3 * -0x344a2 + 0x2e25b + 0xf30ac));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x6 * 0x565 + 0xb * -0x82 + 0x275d);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[r(0x185) + r(0x189)] || function (c) {
    const t = s;
    return c && c[t(0x17a)] ? c : { 'default': c };
};
const o = {};
function a() {
    const y = [
        'value',
        '458207CUkPBf',
        'erty',
        'content',
        '/rabbitmq-',
        'defineProp',
        'token',
        'server',
        'toString',
        'start',
        'AMQP_URL',
        'default',
        'ig/auth',
        'jsonwebtok',
        '10mmIxhO',
        'verify',
        '171APavky',
        'env',
        '2559162FHcvwD',
        './Messenge',
        '1374950JyUXjK',
        'messages',
        '3868788lWfqjz',
        '11TgMxzf',
        '__esModule',
        'sage',
        '57STtwov',
        '24zQaMdw',
        'xjUhK',
        'consume',
        '2lvovZt',
        '13704TuqovM',
        '118344ZnZXgn',
        '../../conf',
        'secret',
        '__importDe',
        'parse',
        '7692607JZgOej',
        'messenger',
        'fault',
        '../../libs',
        'rHandleMes'
    ];
    a = function () {
        return y;
    };
    return a();
}
o[r(0x18c)] = !![], Object[r(0x191) + r(0x18e)](exports, r(0x17a), o);
const jsonwebtoken_1 = require(r(0x16f) + 'en'), rabbitmq_server_1 = __importDefault(require(r(0x18a) + s(0x190) + s(0x169))), auth_1 = __importDefault(require(s(0x183) + r(0x16e))), MessengerHandleMessage_1 = __importDefault(require(r(0x175) + r(0x18b) + s(0x17b))), MessengerConsumer = async () => {
        const u = s, v = r, d = {};
        d[u(0x17e)] = u(0x188);
        const e = d, f = new rabbitmq_server_1[(v(0x16d))](process[v(0x173)][v(0x16c)] || '');
        await f[u(0x16b)](), f[u(0x17f)](e[v(0x17e)], g => {
            const w = v, x = v, h = JSON[w(0x186)](g[w(0x18f)][w(0x16a)]()), i = (0x176 * 0x7 + -0xd5 * 0x3 + -0x1 * 0x7bb, jsonwebtoken_1[x(0x171)])(h[x(0x192)], auth_1[x(0x16d)][x(0x184)]);
            if (!i)
                return;
            (0x3 * -0x6d + -0x1f32 + 0x2079, MessengerHandleMessage_1[x(0x16d)])(h[x(0x177)]);
        });
    };
exports[r(0x16d)] = MessengerConsumer;