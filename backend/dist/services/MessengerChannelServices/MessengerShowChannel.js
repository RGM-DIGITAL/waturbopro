'use strict';
function a() {
    const u = [
        '84ybLbyY',
        '../../erro',
        'CzbYn',
        '8azdFFZ',
        'tenantId',
        'instagramK',
        'tokenAPI',
        'JRJCZ',
        'pvrrU',
        'value',
        '5izuiNO',
        '66687oFaAfs',
        'default',
        'rs/AppErro',
        '../../mode',
        'where',
        'attributes',
        'HaYNi',
        'Qcbhu',
        '25533kMFBFW',
        'fault',
        'FqAks',
        'tIFvU',
        'yHuoM',
        'psUhQ',
        'ERR_NO_CHA',
        'NNEL_FOUND',
        '24917508ipcial',
        'fbPageId',
        '__importDe',
        'fbObject',
        'type',
        '6722310dQdlPE',
        'erty',
        'name',
        'updatedAt',
        'defineProp',
        'findOne',
        'mxjTw',
        '1896ADrbSY',
        '684382EjNrzq',
        'createdAt',
        '1600808HejiRQ',
        'ls/Whatsap',
        '__esModule',
        '164255CNZpfC',
        'status',
        'QFRVD'
    ];
    a = function () {
        return u;
    };
    return a();
}
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0x20c)) / (-0xb * -0xa + 0x1aa + -0x1 * 0x217) + parseInt(o(0x217)) / (-0x6ac + 0x23d7 + -0x1d29) * (parseInt(n(0x1ef)) / (0x1b13 + 0x853 * -0x1 + 0x7b * -0x27)) + -parseInt(n(0x20e)) / (0xa7 * 0x2 + -0x4ce + 0x384) * (-parseInt(n(0x21e)) / (0xb47 + 0x13c9 + -0x1 * 0x1f0b)) + parseInt(o(0x214)) / (-0x47 * -0x1e + -0x31 * -0x77 + 0x5 * -0x637) * (-parseInt(o(0x211)) / (-0x44b + 0x2 * 0x506 + 0x2dd * -0x2)) + -parseInt(o(0x20b)) / (0x25a0 + -0x3a1 * 0x9 + -0x4ef) * (parseInt(o(0x1f7)) / (-0x169c + -0x15b5 * 0x1 + -0xe * -0x32b)) + -parseInt(o(0x204)) / (0xcb9 + 0x1 * -0x13d2 + 0x7 * 0x105) + parseInt(n(0x1ff)) / (0x14a4 + 0x1a * -0x109 + 0x7 * 0xe7);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * 0x5b42e + -0x2e9f * -0x7 + 0x1 * -0xec51));
var __importDefault = this && this[p(0x201) + q(0x1f8)] || function (c) {
    const r = q;
    return c && c[r(0x210)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1c37 + -0x7af + 0x25d5);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[q(0x21d)] = !![], Object[p(0x208) + q(0x205)](exports, q(0x210), k);
const Whatsapp_1 = __importDefault(require(p(0x1f2) + p(0x20f) + 'p')), AppError_1 = __importDefault(require(p(0x215) + p(0x1f1) + 'r')), MessengerShowChannel = async ({fbPageId: f}) => {
        const s = p, t = q, g = {};
        g[s(0x1f5)] = s(0x206), g[s(0x21b)] = s(0x212), g[s(0x20a)] = t(0x203), g[t(0x1f6)] = s(0x20d), g[s(0x1fa)] = t(0x207), g[s(0x21c)] = s(0x218), g[s(0x1f9)] = s(0x21a), g[t(0x213)] = s(0x200), g[s(0x216)] = t(0x202), g[t(0x1fb)] = t(0x219) + 'ey', g[s(0x1fc)] = s(0x1fd) + t(0x1fe);
        const h = g, i = [
                'id',
                h[t(0x1f5)],
                h[s(0x21b)],
                h[s(0x20a)],
                h[t(0x1f6)],
                h[s(0x1fa)],
                h[t(0x21c)],
                h[s(0x1f9)],
                h[t(0x213)],
                h[t(0x216)],
                h[s(0x1fb)]
            ], j = {};
        j[s(0x200)] = f;
        const l = {};
        l[t(0x1f3)] = j, l[s(0x1f4)] = i;
        const m = await Whatsapp_1[s(0x1f0)][s(0x209)](l);
        if (!m)
            throw new AppError_1[(t(0x1f0))](h[t(0x1fc)], -0x349 + 0xb * 0x359 + 0x2 * -0xffb);
        return m;
    };
exports[q(0x1f0)] = MessengerShowChannel;