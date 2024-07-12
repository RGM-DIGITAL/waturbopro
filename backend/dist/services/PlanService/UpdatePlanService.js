'use strict';
const s = b, t = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(q(0x12c)) / (0x1a27 * -0x1 + 0xd5a * 0x1 + 0x95 * 0x16) + parseInt(q(0x130)) / (0x1 * 0xd76 + 0x223 * -0x11 + 0x16df) * (-parseInt(q(0x126)) / (0x95 + -0x16 * -0x65 + -0x940)) + parseInt(r(0x132)) / (0x7 * 0x50 + 0x26f * -0xe + 0x1fe6) + parseInt(r(0x131)) / (0xcc3 + -0x4fc * -0x5 + -0x25aa) + parseInt(r(0x128)) / (-0x1beb * -0x1 + 0x1 * 0x18c5 + 0x6 * -0x8c7) + parseInt(q(0x11f)) / (0x25f * -0x8 + 0x1a83 + -0x784) + -parseInt(q(0x124)) / (0xa22 + 0x311 * 0x7 + -0x1f91 * 0x1) * (parseInt(q(0x133)) / (0x572 + -0x42d * -0x4 + -0x161d));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x644 * 0x7d + 0x1cfe8 + 0x3b18c));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x3 * 0x59d + 0x3 * -0xc9 + 0x1449);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const x = [
        'isPublic',
        '2fKVJvt',
        '907445TKkuTt',
        '1241800kVSYRi',
        '6855102lXysRv',
        'ions',
        'N_FOUND',
        'findByPk',
        'update',
        'ERR_NO_PLA',
        'erty',
        'ls/Plan',
        'default',
        '../../erro',
        '716527lPqDYm',
        'name',
        'defineProp',
        '__esModule',
        'value',
        '8FBynvG',
        '../../mode',
        '454089ErjrEk',
        'rs/AppErro',
        '1120980aSWGzF',
        'maxConnect',
        'GXCNa',
        '__importDe',
        '292231ReLNwS',
        'fault',
        'maxUsers'
    ];
    a = function () {
        return x;
    };
    return a();
}
var __importDefault = this && this[s(0x12b) + t(0x12d)] || function (c) {
    const u = s;
    return c && c[u(0x122)] ? c : { 'default': c };
};
const k = {};
k[s(0x123)] = !![], Object[s(0x121) + t(0x11b)](exports, t(0x122), k);
const AppError_1 = __importDefault(require(s(0x11e) + t(0x127) + 'r')), Plan_1 = __importDefault(require(s(0x125) + s(0x11c))), UpdatePlanService = async e => {
        const v = t, w = t, f = {};
        f[v(0x12a)] = w(0x11a) + v(0x117);
        const g = f, {
                id: h,
                name: i,
                maxUsers: j,
                maxConnections: l,
                value: m,
                isPublic: n
            } = e, o = await Plan_1[v(0x11d)][w(0x118)](h);
        if (!o)
            throw new AppError_1[(w(0x11d))](g[v(0x12a)], 0x19ac + 0x175d + -0x1 * 0x2f75);
        const p = {};
        return p[v(0x120)] = i, p[v(0x12e)] = j, p[w(0x129) + v(0x134)] = l, p[v(0x123)] = m, p[v(0x12f)] = n, await o[v(0x119)](p), o;
    };
exports[t(0x11d)] = UpdatePlanService;