'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * -0x1b69 + 0x8 * -0x113 + 0x25cd);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const x = [
        '1436415mDnrQE',
        '494904vdaTQj',
        '__esModule',
        'where',
        'sHKMK',
        '1088361XrpJkh',
        '28752eTwQvk',
        '_WAPP_FOUN',
        '__importDe',
        'Whatsapp',
        'CONNECTED',
        'fault',
        'value',
        '../models/',
        'defineProp',
        'findOne',
        '54xtRUmk',
        '141sPITiN',
        'ERR_NO_DEF',
        'uyviI',
        'default',
        'AppError',
        'status',
        'tenantId',
        'erty',
        '../errors/',
        '995078NkdNeg',
        'OcuFO',
        '35917pdSTqg',
        'type',
        'LuhYk',
        '78911spPLGs',
        'whatsapp'
    ];
    a = function () {
        return x;
    };
    return a();
}
const s = b, t = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(q(0x1dc)) / (-0x18e0 + -0x8b5 * 0x1 + 0x2196) + -parseInt(r(0x1da)) / (-0xc4 * 0x15 + 0xda + 0xf3c) + -parseInt(q(0x1d1)) / (-0x2f * 0x2f + -0x201e + 0x28c2) * (-parseInt(q(0x1e7)) / (0xa08 + 0x1e8 + 0x6d * -0x1c)) + parseInt(r(0x1e1)) / (-0x1 * -0xfe + 0x17b + 0x274 * -0x1) + -parseInt(r(0x1d0)) / (-0x1 * 0x24bf + -0x1 * -0xc7a + 0x184b) * (-parseInt(q(0x1df)) / (0x652 + -0x10b * -0xd + -0x13da)) + -parseInt(q(0x1e2)) / (0xa47 + 0x1 * 0x1059 + -0x1a98) + parseInt(q(0x1e6)) / (0x1725 + -0x1414 + -0x308);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x7895b * -0x1 + -0x14fcc * -0x3 + 0x1 * -0x79fa5));
var __importDefault = this && this[s(0x1e9) + s(0x1ec)] || function (c) {
    const u = s;
    return c && c[u(0x1e3)] ? c : { 'default': c };
};
const k = {};
k[s(0x1cc)] = !![], Object[s(0x1ce) + s(0x1d8)](exports, s(0x1e3), k);
const AppError_1 = __importDefault(require(s(0x1d9) + s(0x1d5))), Whatsapp_1 = __importDefault(require(s(0x1cd) + s(0x1ea))), GetDefaultWhatsApp = async (f, g) => {
        const v = s, w = s, h = {};
        h[v(0x1e5)] = v(0x1eb), h[v(0x1de)] = v(0x1e0), h[v(0x1d3)] = function (o, p) {
            return o || p;
        }, h[v(0x1db)] = v(0x1d2) + w(0x1e8) + 'D';
        const i = h, j = {};
        j[w(0x1d7)] = f, j[w(0x1d6)] = i[v(0x1e5)];
        const l = j;
        g ? l['id'] = g : l[w(0x1dd)] = i[v(0x1de)];
        const m = {};
        m[w(0x1e4)] = l;
        const n = await Whatsapp_1[v(0x1d4)][w(0x1cf)](m);
        if (i[w(0x1d3)](!n, !f))
            throw new AppError_1[(w(0x1d4))](i[v(0x1db)]);
        return n;
    };
exports[t(0x1d4)] = GetDefaultWhatsApp;