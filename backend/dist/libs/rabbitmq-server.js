'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0x176)) / (0x25 * 0xc0 + -0x1167 + -0xa58) + -parseInt(s(0x156)) / (-0x1e5e + -0x1 * -0x1367 + -0x1 * -0xaf9) * (-parseInt(s(0x161)) / (-0x129d + 0xf98 + 0x308)) + -parseInt(r(0x14f)) / (-0x5a7 * 0x1 + 0x110d + 0x2 * -0x5b1) + -parseInt(s(0x16f)) / (0x3 * 0x97c + 0x46 * 0x2e + 0x1 * -0x2903) + parseInt(s(0x16b)) / (0x2ab * -0x9 + 0x1 * -0xb2 + 0x18bb) + parseInt(s(0x141)) / (-0x10 * 0x127 + -0x2093 + 0x330a) * (parseInt(s(0x168)) / (0xd * -0x296 + -0x8f6 * -0x4 + -0x232)) + parseInt(r(0x146)) / (0x1937 + -0x4fd * 0x2 + 0x1 * -0xf34);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xe358 + -0x574e6 + 0x91567));
const q = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xfaa + 0x1217 + -0x2084);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const K = [
        '132365iKwqqu',
        'nack',
        'dmoDb',
        'INTERVAL',
        'consume',
        '../utils/l',
        'Time',
        '1848BVtBKT',
        'lPNHl',
        'leepRandom',
        'sendToQueu',
        'EgSjj',
        '712944CtZnJl',
        'erty',
        'tsapp',
        'persistent',
        'prefetch',
        '__esModule',
        'ChXNo',
        'MAX_SLEEP_',
        '../utils/s',
        '1307860qiIkZp',
        'amqplib',
        'defineProp',
        'publish',
        'ueue',
        'ack',
        'logger',
        '20aeKTjM',
        'MIN_SLEEP_',
        'chTyj',
        'sleepRando',
        'nel',
        'publishInQ',
        'start',
        'durable',
        'channel',
        'from',
        'uri',
        '6282dzGpvn',
        'default',
        'KAHtv',
        'env',
        'connect',
        'conn',
        'consumeWha',
        '5992xstlvO',
        'assertQueu',
        'error',
        '1061106DpFGwM',
        'vukDB',
        'mTime',
        'createChan',
        '503230pjNpWi',
        'publishInE',
        'xchange',
        'value',
        'waba360',
        'ogger',
        'messenger'
    ];
    a = function () {
        return K;
    };
    return a();
}
q[t(0x172)] = !![], Object[t(0x151) + u(0x147)](exports, t(0x14b), q);
const amqplib_1 = require(u(0x150)), logger_1 = require(u(0x13f) + t(0x174)), sleepRandomTime_1 = require(u(0x14e) + u(0x143) + t(0x140));
class RabbitmqServer {
    constructor(c) {
        const v = u;
        this[v(0x160)] = c;
    }
    async [u(0x15c)]() {
        const w = t, x = t, f = {};
        f[w(0x145)] = x(0x173), f[x(0x142)] = w(0x175);
        const g = f;
        this[x(0x166)] = await (-0xdf * 0x1d + 0xe24 + 0xb1f, amqplib_1[w(0x165)])(this[w(0x160)]), this[x(0x15e)] = await this[x(0x166)][w(0x16e) + w(0x15a)]();
        const h = {};
        h[w(0x15d)] = !![], await this[w(0x15e)][w(0x169) + 'e'](g[w(0x145)], h);
        const i = {};
        i[w(0x15d)] = !![], await this[w(0x15e)][w(0x169) + 'e'](g[x(0x142)], i);
    }
    async [t(0x15b) + t(0x153)](e, f) {
        const y = u, z = t, g = {};
        g[y(0x15d)] = !![], await this[z(0x15e)][z(0x169) + 'e'](e, g);
        const h = {};
        return h[y(0x149)] = !![], this[y(0x15e)][y(0x144) + 'e'](e, Buffer[z(0x15f)](f), h);
    }
    async [u(0x170) + u(0x171)](d, e, f) {
        const A = u, B = u, g = {};
        return g[A(0x149)] = !![], this[A(0x15e)][A(0x152)](d, e, Buffer[B(0x15f)](f), g);
    }
    async [u(0x167) + u(0x148)](d, e) {
        const C = u, D = u, f = {
                'dmoDb': function (h, i) {
                    return h(i);
                },
                'vukDB': function (h, i) {
                    return h(i);
                },
                'chTyj': function (h, i) {
                    return h(i);
                },
                'ChXNo': C(0x167) + C(0x148)
            };
        this[C(0x15e)][D(0x14a)](-0x9 * 0x5a + -0x1ab3 + -0x5 * -0x5fb, ![]);
        const g = {};
        g[D(0x15d)] = !![], await this[C(0x15e)][C(0x169) + 'e'](d, g), this[C(0x15e)][D(0x13e)](d, async h => {
            const E = C, F = C;
            try {
                await f[E(0x178)](e, h), await (-0x1d35 * -0x1 + -0x89c * -0x4 + -0x3fa5, sleepRandomTime_1[F(0x159) + E(0x16d)])({
                    'minMilliseconds': f[F(0x16c)](Number, process[E(0x164)][F(0x157) + E(0x13d)] || -0x10db + 0xeb5 + -0x4b * -0xe),
                    'maxMilliseconds': f[F(0x158)](Number, process[E(0x164)][E(0x14d) + F(0x13d)] || -0x4 * 0x239 + -0x355 * -0x2 + -0x5 * -0x202)
                }), this[E(0x15e)][F(0x154)](h);
                return;
            } catch (i) {
                this[F(0x15e)][E(0x177)](h), logger_1[E(0x155)][F(0x16a)](f[E(0x14c)], i);
            }
        });
    }
    async [u(0x13e)](c, d) {
        const G = t, H = u, e = {
                'KAHtv': function (f, g) {
                    return f(g);
                }
            };
        return this[G(0x15e)][G(0x13e)](c, f => {
            const I = H, J = H;
            try {
                e[I(0x163)](d, f), this[J(0x15e)][I(0x154)](f);
                return;
            } catch (g) {
                logger_1[J(0x155)][J(0x16a)](g);
            }
        });
    }
}
exports[t(0x162)] = RabbitmqServer;