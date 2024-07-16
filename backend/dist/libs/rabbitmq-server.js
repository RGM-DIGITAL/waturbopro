'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0xe3)) / (-0x3 * 0x374 + -0x2f * -0x96 + -0x112d) * (parseInt(s(0xcb)) / (0xd * 0x119 + 0x195c + -0x279f)) + parseInt(r(0xb5)) / (0x46a * -0x4 + 0xbd3 + 0xb * 0x88) * (-parseInt(s(0xe0)) / (-0x1030 + -0x1 * -0xd85 + 0x1 * 0x2af)) + parseInt(s(0xf6)) / (0x323 * -0xa + 0x277 * 0x1 + -0x3 * -0x9a4) * (-parseInt(r(0xcd)) / (-0x1965 + -0x16b3 + 0x301e)) + parseInt(r(0xc5)) / (0xb00 + -0x14f * -0x7 + -0x1422) + -parseInt(r(0xf4)) / (-0xf5 * 0x17 + 0xa9a + -0x1 * -0xb71) * (parseInt(r(0xb6)) / (-0x6 * -0x3d2 + 0x1834 + -0x96b * 0x5)) + parseInt(s(0xc9)) / (0x35 * -0x5b + 0x19ca + -0x6e9) * (-parseInt(r(0xd5)) / (-0x2 * 0xf3f + 0x477 + 0x1a12)) + parseInt(r(0xb3)) / (-0x1fb9 + -0x1b47 + 0x3b0c);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x136868 + 0x292c1 + -0x2b827 * -0xa));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1869 + 0x214e + -0x832);
        let h = e[f];
        return h;
    }, b(c, d);
}
const q = {};
q[t(0xe8)] = !![], Object[u(0xe2) + t(0xef)](exports, t(0xee), q);
function a() {
    const K = [
        '27aGQreY',
        'start',
        '../utils/s',
        'ueue',
        'tsapp',
        'value',
        'waDVi',
        'nzoPS',
        'publishInQ',
        'from',
        'xchange',
        '__esModule',
        'erty',
        'durable',
        'VZIHv',
        'ack',
        '../utils/l',
        '1815304SGivFC',
        'jnJHc',
        '500170fPoFJK',
        '34327644tRmIiv',
        'nel',
        '3smVBlM',
        '45EqtHIs',
        'connect',
        'default',
        'sendToQueu',
        'amqplib',
        'wFsxE',
        'uri',
        'mTime',
        'logger',
        'error',
        'consumeWha',
        'HezPc',
        'leepRandom',
        'sleepRando',
        'BhXaS',
        '8364874awErCk',
        'nack',
        'LFbng',
        'prefetch',
        '906470xTLNXz',
        'MAX_SLEEP_',
        '4924bySiUz',
        'persistent',
        '66FLZrYt',
        'conn',
        'MIN_SLEEP_',
        'createChan',
        'waba360',
        'channel',
        'consume',
        'acOea',
        '11mFULcj',
        'publish',
        'ZvWut',
        'publishInE',
        'messenger',
        'env',
        'aObNk',
        'assertQueu',
        'EErxF',
        'ogger',
        'INTERVAL',
        '4470512VPIyrO',
        'Time',
        'defineProp'
    ];
    a = function () {
        return K;
    };
    return a();
}
const amqplib_1 = require(t(0xba)), logger_1 = require(t(0xf3) + u(0xde)), sleepRandomTime_1 = require(u(0xe5) + t(0xc2) + t(0xe1));
class RabbitmqServer {
    constructor(c) {
        const v = u;
        this[v(0xbc)] = c;
    }
    async [t(0xe4)]() {
        const w = u, x = t, f = {};
        f[w(0xe9)] = x(0xd1), f[w(0xdd)] = w(0xd9);
        const g = f;
        this[w(0xce)] = await (-0x97d * 0x2 + 0x26bb + -0xd * 0x185, amqplib_1[x(0xb7)])(this[x(0xbc)]), this[x(0xd2)] = await this[w(0xce)][x(0xd0) + w(0xb4)]();
        const h = {};
        h[w(0xf0)] = !![], await this[w(0xd2)][w(0xdc) + 'e'](g[x(0xe9)], h);
        const i = {};
        i[x(0xf0)] = !![], await this[w(0xd2)][w(0xdc) + 'e'](g[w(0xdd)], i);
    }
    async [t(0xeb) + t(0xe6)](e, f) {
        const y = u, z = t, g = {};
        g[y(0xf0)] = !![], await this[y(0xd2)][y(0xdc) + 'e'](e, g);
        const h = {};
        return h[y(0xcc)] = !![], this[y(0xd2)][y(0xb9) + 'e'](e, Buffer[y(0xec)](f), h);
    }
    async [u(0xd8) + u(0xed)](d, e, f) {
        const A = u, B = t, g = {};
        return g[A(0xcc)] = !![], this[B(0xd2)][B(0xd6)](d, e, Buffer[B(0xec)](f), g);
    }
    async [u(0xc0) + t(0xe7)](d, e) {
        const C = u, D = t, f = {
                'HezPc': function (h, i) {
                    return h(i);
                },
                'acOea': function (h, i) {
                    return h(i);
                },
                'nzoPS': function (h, i) {
                    return h(i);
                },
                'aObNk': C(0xc0) + D(0xe7)
            };
        this[D(0xd2)][D(0xc8)](-0x1a75 + -0x3b1 + -0x15 * -0x170, ![]);
        const g = {};
        g[D(0xf0)] = !![], await this[C(0xd2)][C(0xdc) + 'e'](d, g), this[D(0xd2)][C(0xd3)](d, async h => {
            const E = D, F = D;
            try {
                await f[E(0xc1)](e, h), await (-0x257 * 0x7 + -0x1378 + 0x13 * 0x1e3, sleepRandomTime_1[E(0xc3) + F(0xbd)])({
                    'minMilliseconds': f[E(0xd4)](Number, process[E(0xda)][E(0xcf) + E(0xdf)] || 0x1cec + -0x1608 + -0x8 * 0x9e),
                    'maxMilliseconds': f[E(0xea)](Number, process[E(0xda)][E(0xca) + F(0xdf)] || 0x7 * -0x3ef + -0x1f9b + 0x10bd * 0x4)
                }), this[F(0xd2)][F(0xf2)](h);
                return;
            } catch (i) {
                this[E(0xd2)][E(0xc6)](h), logger_1[F(0xbe)][E(0xbf)](f[F(0xdb)], i);
            }
        });
    }
    async [t(0xd3)](c, d) {
        const G = u, H = u, e = {
                'LFbng': function (f, g) {
                    return f === g;
                },
                'ZvWut': G(0xf1),
                'wFsxE': H(0xc4),
                'jnJHc': function (f, g) {
                    return f(g);
                }
            };
        return this[H(0xd2)][H(0xd3)](c, f => {
            const I = G, J = H;
            try {
                if (e[I(0xc7)](e[I(0xd7)], e[I(0xbb)]))
                    this[J(0xbc)] = d;
                else {
                    e[I(0xf5)](d, f), this[I(0xd2)][I(0xf2)](f);
                    return;
                }
            } catch (h) {
                logger_1[J(0xbe)][J(0xbf)](h);
            }
        });
    }
}
exports[u(0xb8)] = RabbitmqServer;