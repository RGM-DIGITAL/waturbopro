'use strict';
const o = b, p = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x25 * 0xc1 + -0x263f * 0x1 + 0x436f);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(m(0x161)) / (0x1 * -0x23ce + -0xaf * 0x31 + -0x3 * -0x171a) + -parseInt(n(0x15f)) / (-0x1957 + -0x17b4 + 0x1 * 0x310d) + parseInt(n(0x14b)) / (0x445 * -0x9 + 0x1 * 0x1e11 + 0x85f) * (parseInt(m(0x15b)) / (0x23e8 + 0x1 * 0x159d + -0x3981)) + parseInt(n(0x160)) / (0xa6 * -0x25 + -0x8e1 + 0x1072 * 0x2) + parseInt(n(0x155)) / (0xffd * -0x1 + 0x20e9 + -0x2 * 0x873) + parseInt(n(0x158)) / (0x2171 + -0x355 * -0x1 + 0x199 * -0x17) * (parseInt(n(0x154)) / (-0xea5 * 0x1 + 0x124 * 0xe + -0x14b)) + -parseInt(n(0x14c)) / (-0x22b4 + 0x1c26 + 0x697) * (parseInt(m(0x157)) / (0x16a7 + 0x2678 + -0x3d15));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * -0x8afc5 + -0x5c9 * 0x3e + 0x115e76));
var __importDefault = this && this[o(0x15a) + p(0x14f)] || function (c) {
    const q = p;
    return c && c[q(0x14e)] ? c : { 'default': c };
};
const k = {};
function a() {
    const t = [
        'TING_FOUND',
        '__importDe',
        '2356028JopwSN',
        'ZTCAi',
        'findOne',
        'default',
        '921688bSlIGa',
        '1956170MQqugJ',
        '98754jCibuV',
        '../models/',
        'key',
        'Setting',
        'AppError',
        '3iZOOBC',
        '1211751wowLEV',
        'ERR_NO_SET',
        '__esModule',
        'fault',
        '../errors/',
        'value',
        'defineProp',
        'erty',
        '8gOmXDQ',
        '3061692AKbVTT',
        'where',
        '80GjarNO',
        '4363618GEIcyM'
    ];
    a = function () {
        return t;
    };
    return a();
}
k[p(0x151)] = !![], Object[p(0x152) + o(0x153)](exports, o(0x14e), k);
const Setting_1 = __importDefault(require(p(0x162) + p(0x164))), AppError_1 = __importDefault(require(o(0x150) + o(0x165))), CheckSettings = async f => {
        const r = p, s = p, g = {};
        g[r(0x15c)] = r(0x14d) + r(0x159);
        const h = g, i = {};
        i[s(0x163)] = f;
        const j = {};
        j[r(0x156)] = i;
        const l = await Setting_1[r(0x15e)][r(0x15d)](j);
        if (!l)
            throw new AppError_1[(r(0x15e))](h[s(0x15c)], -0x23e7 + -0x1 * 0x30e + -0x9 * -0x481);
        return l[s(0x151)];
    };
exports[o(0x15e)] = CheckSettings;