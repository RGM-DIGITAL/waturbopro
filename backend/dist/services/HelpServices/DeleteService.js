'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(m(0x12b)) / (0x1d07 + -0x161 * 0x3 + -0x18e3) * (parseInt(n(0x11d)) / (0x1 * -0x1399 + -0x1fb7 + 0x3352)) + parseInt(n(0x119)) / (0x1958 + -0x143e + -0x517) + -parseInt(m(0x130)) / (-0x3 * 0xa53 + 0x1161 + 0xd9c) * (parseInt(m(0x12f)) / (0x1ac4 + 0x1118 + -0x2bd7)) + parseInt(m(0x11a)) / (-0x14bb * -0x1 + -0x1ffd + -0x1 * -0xb48) + -parseInt(m(0x124)) / (0xf * 0xbf + -0x128 * -0x4 + -0x5e * 0x2b) + parseInt(n(0x11b)) / (0x99c + 0x16a9 + 0x3f * -0x83) + -parseInt(m(0x120)) / (0x11e2 + 0x43 * -0x3 + -0x4 * 0x444) * (-parseInt(m(0x12a)) / (0xc73 * -0x1 + 0x1c6f * 0x1 + -0xff2));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x70d12 + 0x2b * -0x2abf + 0x43519));
var __importDefault = this && this[o(0x127) + o(0x11f)] || function (c) {
    const q = p;
    return c && c[q(0x122)] ? c : { 'default': c };
};
const k = {};
k[o(0x125)] = !![], Object[p(0x12d) + p(0x11e)](exports, p(0x122), k);
function a() {
    const t = [
        '../../mode',
        '2568958ahJPVc',
        'value',
        'ls/Help',
        '__importDe',
        'ERR_NO_HEL',
        'default',
        '25370BpRSrd',
        '1diPCJq',
        'PhxMa',
        'defineProp',
        'P_FOUND',
        '195GznEyq',
        '48572vhzKzA',
        'where',
        'rs/AppErro',
        '../../erro',
        '997302yXITKJ',
        '241362BJneno',
        '169848piBevh',
        'findOne',
        '388562VNeHnK',
        'erty',
        'fault',
        '3222nqdpLQ',
        'destroy',
        '__esModule'
    ];
    a = function () {
        return t;
    };
    return a();
}
const Help_1 = __importDefault(require(p(0x123) + o(0x126))), AppError_1 = __importDefault(require(p(0x118) + o(0x117) + 'r')), DeleteService = async f => {
        const r = o, s = p, g = {};
        g[r(0x12c)] = r(0x128) + r(0x12e);
        const h = g, i = {};
        i['id'] = f;
        const j = {};
        j[r(0x131)] = i;
        const l = await Help_1[s(0x129)][r(0x11c)](j);
        if (!l)
            throw new AppError_1[(r(0x129))](h[s(0x12c)], 0x2 * -0x3 + -0x471 + -0x77 * -0xd);
        await l[r(0x121)]();
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x44 * 0x4e + -0x8ae + 0xdf * 0x23);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[o(0x129)] = DeleteService;