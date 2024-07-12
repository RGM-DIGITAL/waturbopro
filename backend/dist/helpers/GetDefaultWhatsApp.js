'use strict';
const s = b, t = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(q(0xd7)) / (0x14a0 + 0x32 * -0x17 + -0x1021) + -parseInt(r(0xc2)) / (0x13ca + 0x97e + -0x1d46) + -parseInt(r(0xd8)) / (-0x2 * -0x125f + -0x7a6 + -0x1d15) + parseInt(q(0xcf)) / (0x158f * 0x1 + -0x9 * 0x3d1 + -0x95 * -0x16) * (-parseInt(q(0xc8)) / (0xe21 + 0xe2f + -0x1c4b)) + -parseInt(q(0xc4)) / (-0x123c + -0x200d + 0x324f) + -parseInt(q(0xbf)) / (-0x79d * 0x3 + 0x133 * -0x19 + 0x34d9) + parseInt(q(0xc7)) / (0x80 * -0x40 + 0x1 * -0x20d9 + 0x40e1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2 * 0x46942 + -0xe * -0x9c71 + 0xdd2e2));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xfde + 0x1 * -0x47 + 0x10e3);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[s(0xd9) + s(0xd2)] || function (c) {
    const u = t;
    return c && c[u(0xdb)] ? c : { 'default': c };
};
const k = {};
k[s(0xcc)] = !![], Object[t(0xcd) + s(0xd0)](exports, t(0xdb), k);
function a() {
    const x = [
        'fault',
        'type',
        'CONNECTED',
        '../errors/',
        'whatsapp',
        '131666KvtFXb',
        '2853225CnpbjE',
        '__importDe',
        'Whatsapp',
        '__esModule',
        '../models/',
        'where',
        'ZRJPH',
        '3501190NSsuHs',
        'SMcaB',
        'AppError',
        '1058522paUQZw',
        'tenantId',
        '7571682DBKmeH',
        'oGmoZ',
        '_WAPP_FOUN',
        '45449648gSSNIC',
        '15qDNotr',
        'default',
        'sDgav',
        'status',
        'value',
        'defineProp',
        'findOne',
        '2242612fqcpfi',
        'erty',
        'ERR_NO_DEF'
    ];
    a = function () {
        return x;
    };
    return a();
}
const AppError_1 = __importDefault(require(s(0xd5) + s(0xc1))), Whatsapp_1 = __importDefault(require(t(0xdc) + s(0xda))), GetDefaultWhatsApp = async (f, g) => {
        const v = s, w = s, h = {};
        h[v(0xbe)] = v(0xd4), h[w(0xc0)] = w(0xd6), h[v(0xca)] = function (o, p) {
            return o || p;
        }, h[w(0xc5)] = v(0xd1) + v(0xc6) + 'D';
        const i = h, j = {};
        j[w(0xc3)] = f, j[v(0xcb)] = i[w(0xbe)];
        const l = j;
        g ? l['id'] = g : l[v(0xd3)] = i[w(0xc0)];
        const m = {};
        m[v(0xdd)] = l;
        const n = await Whatsapp_1[w(0xc9)][w(0xce)](m);
        if (i[w(0xca)](!n, !f))
            throw new AppError_1[(w(0xc9))](i[w(0xc5)]);
        return n;
    };
exports[t(0xc9)] = GetDefaultWhatsApp;