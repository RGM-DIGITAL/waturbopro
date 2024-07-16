'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x9e)) / (-0x1213 + 0x3 * 0x593 + -0x1 * -0x15b) * (parseInt(p(0xaa)) / (-0x132 + 0x5ad + -0x479 * 0x1)) + -parseInt(p(0xa0)) / (0x5 * 0x229 + -0x181f + 0xd55 * 0x1) + -parseInt(p(0xa1)) / (-0xbb9 + -0x21e9 * 0x1 + 0x1 * 0x2da6) + -parseInt(q(0xac)) / (-0x1a6e + -0x2353 + -0x2 * -0x1ee3) * (parseInt(p(0x91)) / (0x20fe * 0x1 + 0x22 * 0x119 + -0x2325 * 0x2)) + parseInt(p(0x99)) / (-0x1e0a + -0xa47 + 0x2858) * (-parseInt(q(0xa7)) / (-0x2629 * -0x1 + -0x1 * -0x40c + 0xb1 * -0x3d)) + parseInt(q(0x9b)) / (-0x24cd + 0x50b + 0x1fcb * 0x1) + parseInt(p(0xab)) / (0xba3 + -0x2559 + 0x19c0);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xeb * 0x61d + -0x71 * -0x1d3f + -0x9865d * 0x1));
function a() {
    const w = [
        'key',
        '3jEPdXH',
        'default',
        '328884JTNVmR',
        '1865460ndXEaV',
        'ls/Setting',
        'jmxyj',
        'findOne',
        'where',
        'TING_FOUND',
        '64YbGFJJ',
        '../../mode',
        'fault',
        '628282lMtqsE',
        '10024800NWHYAP',
        '360980cMriJf',
        'update',
        '42oANLct',
        '__esModule',
        'erty',
        '__importDe',
        '../../erro',
        'ERR_NO_SET',
        'value',
        'rs/AppErro',
        '828702CHGQLj',
        'sGeneral',
        '6058215cpgBgR',
        'defineProp'
    ];
    a = function () {
        return w;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x655 * 0x1 + 0x1350 + -0x1914);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[r(0x94) + r(0xa9)] || function (c) {
    const t = s;
    return c && c[t(0x92)] ? c : { 'default': c };
};
const k = {};
k[r(0x97)] = !![], Object[s(0x9c) + s(0x93)](exports, s(0x92), k);
const AppError_1 = __importDefault(require(r(0x95) + s(0x98) + 'r')), SettingsGeneral_1 = __importDefault(require(r(0xa8) + r(0xa2) + s(0x9a))), UpdateSettingService = async ({
        key: g,
        value: h
    }) => {
        const u = s, v = r, i = {};
        i[u(0xa3)] = u(0x96) + u(0xa6);
        const j = i, l = {};
        l[v(0x9d)] = g;
        const m = {};
        m[v(0xa5)] = l;
        const n = await SettingsGeneral_1[v(0x9f)][v(0xa4)](m);
        if (!n)
            throw new AppError_1[(v(0x9f))](j[v(0xa3)], -0x19 * -0x15b + 0x3b7 * -0x2 + -0x18e1);
        const o = {};
        return o[v(0x97)] = h, await n[u(0xad)](o), n;
    };
exports[s(0x9f)] = UpdateSettingService;