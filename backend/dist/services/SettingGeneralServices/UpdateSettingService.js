'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x14e)) / (-0x1d2a + -0x6 * -0xc7 + 0x2b9 * 0x9) * (-parseInt(q(0x14c)) / (0x1134 + -0x18e2 + 0x7b0)) + parseInt(p(0x154)) / (-0xa * -0x1f7 + -0x464 * 0x4 + -0x3 * 0xb1) + parseInt(q(0x145)) / (0x64a + 0x1 * -0x2301 + 0x1 * 0x1cbb) + parseInt(p(0x156)) / (0x4d4 + -0x1269 + 0xd9a) + -parseInt(q(0x143)) / (0x22f8 + 0x8 * -0x3d9 + -0x42a) * (parseInt(q(0x159)) / (0x275 + -0x254a + -0x1 * -0x22dc)) + -parseInt(p(0x149)) / (0x2 * -0x3ca + -0x2 * 0x1181 + 0x2a9e) + -parseInt(q(0x14f)) / (-0x41d * -0x1 + 0x684 + -0xa98) * (-parseInt(p(0x150)) / (-0x1 * 0xbb6 + -0xce + -0x647 * -0x2));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x15d480 + -0x303 * -0x295 + 0x36c8 * 0x7c));
function a() {
    const w = [
        'sGeneral',
        '__esModule',
        '38VMOSPM',
        'ERR_NO_SET',
        '19957BMHCov',
        '88029QfMEmn',
        '430OePywH',
        'default',
        'defineProp',
        '../../mode',
        '3337023HrwwJV',
        'AGlHi',
        '2379645dVsCrs',
        'update',
        '../../erro',
        '9485049VEZBCp',
        'ls/Setting',
        'key',
        'findOne',
        'where',
        'TING_FOUND',
        'value',
        '6yYHevW',
        'rs/AppErro',
        '4402300vrgeND',
        'fault',
        'erty',
        '__importDe',
        '10525224TWPFrV'
    ];
    a = function () {
        return w;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x153f + -0x5d2 + -0xe2e);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[r(0x148) + s(0x146)] || function (c) {
    const t = r;
    return c && c[t(0x14b)] ? c : { 'default': c };
};
const k = {};
k[s(0x142)] = !![], Object[r(0x152) + s(0x147)](exports, s(0x14b), k);
const AppError_1 = __importDefault(require(r(0x158) + s(0x144) + 'r')), SettingsGeneral_1 = __importDefault(require(s(0x153) + s(0x15a) + r(0x14a))), UpdateSettingService = async ({
        key: g,
        value: h
    }) => {
        const u = s, v = r, i = {};
        i[u(0x155)] = v(0x14d) + v(0x141);
        const j = i, l = {};
        l[u(0x15b)] = g;
        const m = {};
        m[u(0x140)] = l;
        const n = await SettingsGeneral_1[v(0x151)][u(0x13f)](m);
        if (!n)
            throw new AppError_1[(u(0x151))](j[v(0x155)], 0x1279 * 0x2 + -0x1598 + -0x52 * 0x2b);
        const o = {};
        return o[u(0x142)] = h, await n[v(0x157)](o), n;
    };
exports[s(0x151)] = UpdateSettingService;