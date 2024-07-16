'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0x10c)) / (0x8cb * -0x1 + 0x60a + 0x2c2) * (parseInt(o(0x119)) / (0x995 + -0x3d5 * 0x7 + 0x114 * 0x10)) + parseInt(o(0x10d)) / (-0x2f * -0xd0 + -0x1 * -0xceb + -0x3318) + parseInt(n(0x11a)) / (-0x2 * -0x8f9 + -0xee7 + -0x307 * 0x1) + -parseInt(n(0x124)) / (0x111a * -0x1 + -0x25b2 + 0x36d1 * 0x1) + parseInt(n(0x12e)) / (-0x25b * -0x2 + -0x1d97 + 0x18e7) + -parseInt(n(0x126)) / (-0xb * -0x31c + 0x1562 + 0x3 * -0x1285) + -parseInt(o(0x127)) / (-0x9d5 + 0x141 + 0x89c);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x2e * -0x653 + 0x1aba0 + 0x80 * 0x661));
function a() {
    const u = [
        'ls/Queue',
        'ZyJUh',
        '../../erro',
        '../../mode',
        '2GOAwGH',
        '815088fxGXnV',
        'profile',
        'wvepC',
        'hiHNG',
        'exCCR',
        'findByPk',
        'defineProp',
        'name',
        'queues',
        'rs/AppErro',
        '1388735TpqiMU',
        'value',
        '2489193aVDUWp',
        '775536syTnTE',
        'vfqvo',
        'VFzPW',
        'OSeRE',
        'tenantId',
        'ls/User',
        'SvvNF',
        '2006508dwHCSN',
        'include',
        'default',
        '__esModule',
        'erty',
        '49219vgpVax',
        '1456017WaRqzL',
        'attributes',
        'fault',
        'email',
        'ERR_NO_USE',
        '__importDe',
        'tokenVersi',
        'R_FOUND'
    ];
    a = function () {
        return u;
    };
    return a();
}
var __importDefault = this && this[p(0x112) + p(0x10f)] || function (c) {
    const r = p;
    return c && c[r(0x10a)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1b * 0xb7 + 0x1f4f + -0xaf9);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[q(0x125)] = !![], Object[q(0x120) + q(0x10b)](exports, q(0x10a), k);
const User_1 = __importDefault(require(q(0x118) + p(0x12c))), AppError_1 = __importDefault(require(p(0x117) + q(0x123) + 'r')), Queue_1 = __importDefault(require(q(0x118) + p(0x115))), ShowUserService = async (e, f) => {
        const s = p, t = p, g = {};
        g[s(0x116)] = s(0x121), g[s(0x11c)] = s(0x110), g[t(0x12a)] = s(0x11b), g[s(0x128)] = s(0x113) + 'on', g[t(0x129)] = s(0x12b), g[t(0x11e)] = s(0x122), g[s(0x12d)] = function (l, m) {
            return l !== m;
        }, g[s(0x11d)] = t(0x111) + t(0x114);
        const h = g, i = {};
        i[s(0x10e)] = [
            h[s(0x116)],
            'id',
            h[t(0x11c)],
            h[t(0x12a)],
            h[t(0x128)],
            h[s(0x129)]
        ], i[s(0x12f)] = [{
                'model': Queue_1[t(0x109)],
                'as': h[s(0x11e)]
            }];
        const j = await User_1[t(0x109)][t(0x11f)](e, i);
        if (!j || h[s(0x12d)](j[t(0x12b)], f))
            throw new AppError_1[(t(0x109))](h[t(0x11d)], 0x80e * -0x3 + 0x59e + 0x142 * 0x10);
        return j;
    };
exports[p(0x109)] = ShowUserService;