'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x103)) / (0x3ef * -0x9 + -0x1 * -0x130d + -0x105b * -0x1) * (-parseInt(q(0xf9)) / (0x15f3 + 0x62 * -0x44 + 0x417)) + -parseInt(q(0x100)) / (0x2064 + -0xba6 + -0x14bb) * (-parseInt(p(0xe9)) / (-0x15ef + -0x1e77 + 0x2 * 0x1a35)) + parseInt(p(0xf8)) / (-0x212a * -0x1 + 0x256f + -0x4694 * 0x1) + -parseInt(q(0xfe)) / (0x2ef * -0x3 + 0xfde + 0x70b * -0x1) + parseInt(q(0xff)) / (-0x28e + -0x20ca + 0x235f) * (parseInt(q(0xee)) / (-0x8e * 0x2 + -0x1 * 0x1e2e + 0x1f52)) + -parseInt(p(0x101)) / (0x1a87 * -0x1 + -0x21b5 * -0x1 + -0x725 * 0x1) * (-parseInt(p(0x108)) / (-0x1 * 0x1561 + -0x1 * 0xa9a + 0x2005 * 0x1)) + -parseInt(q(0xf4)) / (-0x1 * -0x1466 + -0xc0 + 0x689 * -0x3);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * -0x1a639 + -0xc9b4e + 0x71 * 0x32f9));
var __importDefault = this && this[r(0xf0) + r(0xfb)] || function (c) {
    const t = s;
    return c && c[t(0xe4)] ? c : { 'default': c };
};
const o = {};
o[s(0xf2)] = !![], Object[r(0x107) + s(0xf5)](exports, r(0xe4), o);
const jsonwebtoken_1 = require(r(0xea) + 'en'), rabbitmq_server_1 = __importDefault(require(s(0xe5) + s(0xe1) + s(0xfc))), auth_1 = __importDefault(require(s(0xef) + s(0xe6))), HandleMessage360_1 = __importDefault(require(s(0xfd) + s(0xeb))), Consumer360 = async () => {
        const u = r, v = s, d = {};
        d[u(0xf6)] = u(0x105);
        const e = d, f = new rabbitmq_server_1[(u(0xec))](process[v(0x104)][v(0x106)] || '');
        await f[u(0xe3)](), f[u(0xe2)](e[u(0xf6)], g => {
            const w = v, x = v, h = JSON[w(0xf7)](g[w(0xfa)][x(0xf3)]()), i = (-0x2318 + -0x29 * 0x1d + 0x27bd, jsonwebtoken_1[x(0xf1)])(h[w(0xe8)], auth_1[x(0xec)][w(0x102)]);
            (-0x667 + 0x285 * 0x3 + -0x128, HandleMessage360_1[w(0xec)])(h[w(0xe7)], i[x(0xed)]);
        });
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1be * 0x14 + 0xc5a + -0x2e51);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[r(0xec)] = Consumer360;
function a() {
    const y = [
        'messages',
        'token',
        '412DWVLLE',
        'jsonwebtok',
        'ssage360',
        'default',
        'whatsappId',
        '6723512WhwOEp',
        '../../conf',
        '__importDe',
        'verify',
        'value',
        'toString',
        '11951951GBjuHx',
        'erty',
        'vNnAP',
        'parse',
        '1864380kVkMGv',
        '434328sXmFHo',
        'content',
        'fault',
        'server',
        './HandleMe',
        '493530FwEvCy',
        '7uWENvo',
        '15999lmWiIw',
        '2934BVrvnt',
        'secret',
        '2mXpOJN',
        'env',
        'waba360',
        'AMQP_URL',
        'defineProp',
        '11680kCKddg',
        '/rabbitmq-',
        'consume',
        'start',
        '__esModule',
        '../../libs',
        'ig/auth'
    ];
    a = function () {
        return y;
    };
    return a();
}