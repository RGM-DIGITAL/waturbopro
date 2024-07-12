'use strict';
const r = b, s = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x23ff + -0x25c9 + -0xe0 * -0x4);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x1d5)) / (0x301 + 0x10 * 0x188 + -0x1 * 0x1b80) * (-parseInt(p(0x1c6)) / (-0x181e + 0xf2e + 0x8f2)) + -parseInt(p(0x1cc)) / (0x4a8 + -0x7e1 + 0x33c) * (parseInt(p(0x1da)) / (-0x1946 * -0x1 + 0x14ba + -0x2dfc)) + -parseInt(q(0x1c5)) / (0xb7b * -0x2 + 0x1fb0 + -0x8b5 * 0x1) + parseInt(p(0x1ba)) / (-0x11bc + 0x10 * -0x1b1 + 0x2cd2) * (-parseInt(q(0x1bf)) / (-0x1d2b + 0xe0 + 0x122 * 0x19)) + parseInt(p(0x1c1)) / (-0xe * 0x22d + 0x2b * 0x21 + 0x851 * 0x3) * (parseInt(q(0x1b8)) / (-0x135 + 0x1505 * -0x1 + 0x1643)) + parseInt(q(0x1bc)) / (0x1e4d * 0x1 + 0x18b6 * 0x1 + -0x1253 * 0x3) * (-parseInt(q(0x1ca)) / (0x33 * 0x4a + -0xab6 + 0x1 * -0x3fd)) + parseInt(q(0x1cd)) / (0x2 * -0x382 + 0xee0 + -0x3e8 * 0x2) * (parseInt(q(0x1d4)) / (-0x23ec + -0x10f6 + 0x11a5 * 0x3));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x183ae * -0x2 + -0x2875 * 0x2b + 0xa1b48));
var __importDefault = this && this[r(0x1c2) + s(0x1c7)] || function (c) {
    const t = r;
    return c && c[t(0x1d8)] ? c : { 'default': c };
};
const o = {};
o[s(0x1b7)] = !![], Object[s(0x1be) + s(0x1d1)](exports, s(0x1d8), o);
const jsonwebtoken_1 = require(r(0x1b9) + 'en'), rabbitmq_server_1 = __importDefault(require(s(0x1de) + r(0x1d0) + s(0x1d9))), auth_1 = __importDefault(require(r(0x1d3) + r(0x1d2))), HandleMessage360_1 = __importDefault(require(r(0x1bd) + r(0x1bb))), Consumer360 = async () => {
        const u = s, v = r, d = {};
        d[u(0x1db)] = u(0x1cb);
        const e = d, f = new rabbitmq_server_1[(v(0x1d6))](process[u(0x1dd)][u(0x1ce)] || '');
        await f[u(0x1c8)](), f[u(0x1c3)](e[u(0x1db)], g => {
            const w = v, x = v, h = JSON[w(0x1cf)](g[w(0x1dc)][x(0x1c9)]()), i = (0x5cd + 0xc6c + -0xf * 0x137, jsonwebtoken_1[w(0x1c0)])(h[x(0x1d7)], auth_1[w(0x1d6)][x(0x1df)]);
            (0x2 * -0xe6b + -0x13da + 0x30b0, HandleMessage360_1[w(0x1d6)])(h[w(0x1b6)], i[w(0x1c4)]);
        });
    };
function a() {
    const y = [
        'token',
        '__esModule',
        'server',
        '12UwMzeA',
        'BhELd',
        'content',
        'env',
        '../../libs',
        'secret',
        'messages',
        'value',
        '3219714jsTnmP',
        'jsonwebtok',
        '505662ewRGBt',
        'ssage360',
        '4060270RTJOZj',
        './HandleMe',
        'defineProp',
        '63OoavoD',
        'verify',
        '8HMzYja',
        '__importDe',
        'consume',
        'whatsappId',
        '3407440egTmsX',
        '7354itgbVM',
        'fault',
        'start',
        'toString',
        '11QatWgx',
        'waba360',
        '677937NawQQT',
        '2647956igVLgp',
        'AMQP_URL',
        'parse',
        '/rabbitmq-',
        'erty',
        'ig/auth',
        '../../conf',
        '130lwPuWN',
        '102vpDQQJ',
        'default'
    ];
    a = function () {
        return y;
    };
    return a();
}
exports[r(0x1d6)] = Consumer360;