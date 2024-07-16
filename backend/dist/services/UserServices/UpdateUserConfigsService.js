'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2287 + 0x1a86 + 0x1 * -0x3b39);
        let h = e[f];
        return h;
    }, b(c, d);
}
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(o(0x1e2)) / (0x1f8a + 0x1c25 + 0x1 * -0x3bae) * (-parseInt(p(0x1e1)) / (-0x20d5 + 0x27 * 0x9 + 0x1f78)) + -parseInt(p(0x1f7)) / (-0xca6 + 0x13 * -0x157 + -0xe * -0x2b9) + -parseInt(p(0x1f0)) / (-0x1437 + 0x1ff0 * 0x1 + 0x51 * -0x25) * (-parseInt(p(0x1e4)) / (0x3 * -0xafb + 0x6d * -0x7 + 0x23f1 * 0x1)) + parseInt(p(0x1f2)) / (-0x2503 * -0x1 + 0xba8 + -0x30a5) + parseInt(o(0x1db)) / (0x14b6 + -0x1be3 + 0x1cd * 0x4) + -parseInt(o(0x1f4)) / (0x2351 + 0x204b * -0x1 + -0x2fe) * (-parseInt(o(0x1dd)) / (-0x6ea + -0x1c41 + 0x119a * 0x2)) + parseInt(p(0x1e7)) / (-0xd9d + 0x24d6 + -0x4a3 * 0x5) * (-parseInt(o(0x1f1)) / (-0x449 * -0x6 + 0x1 * 0xf16 + 0x28c1 * -0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * 0x63e0b + -0x5b7a0 + -0x1 * -0x55978));
var __importDefault = this && this[q(0x1e0) + q(0x1e5)] || function (c) {
    const s = r;
    return c && c[s(0x1da)] ? c : { 'default': c };
};
const k = {};
function a() {
    const v = [
        'WfejB',
        'defineProp',
        '__esModule',
        '1144941CLcYFu',
        'email',
        '24759bIAfRu',
        '../../erro',
        'attributes',
        '__importDe',
        '1770WFpKAa',
        '477BgrHaO',
        'value',
        '115QBNtSs',
        'fault',
        'R_FOUND',
        '220FwPWFe',
        'IRDwe',
        'rs/AppErro',
        'findOne',
        'erty',
        'where',
        'name',
        'configs',
        'tenantId',
        '25836jxpcvO',
        '443113dCMxaL',
        '4597620eDyEdx',
        '../../mode',
        '1192BJDJzJ',
        'bgOOu',
        'ERR_NO_USE',
        '1917639sDgRxP',
        'profile',
        'ls/User',
        'vgSOT',
        'default',
        'update',
        'BvjYC'
    ];
    a = function () {
        return v;
    };
    return a();
}
k[r(0x1e3)] = !![], Object[r(0x1d9) + q(0x1eb)](exports, q(0x1da), k);
const AppError_1 = __importDefault(require(r(0x1de) + r(0x1e9) + 'r')), User_1 = __importDefault(require(q(0x1f3) + r(0x1f9))), UpdateUserConfigsService = async ({
        userConfigs: f,
        userId: g,
        tenantId: h
    }) => {
        const t = q, u = r, i = {};
        i[t(0x1d8)] = t(0x1ed), i[t(0x1e8)] = t(0x1dc), i[t(0x1d4)] = t(0x1f8), i[u(0x1f5)] = t(0x1ee), i[t(0x1d7)] = t(0x1f6) + u(0x1e6);
        const j = i, l = {};
        l['id'] = g, l[u(0x1ef)] = h;
        const m = {};
        m[t(0x1ec)] = l, m[t(0x1df)] = [
            j[u(0x1d8)],
            'id',
            j[t(0x1e8)],
            j[u(0x1d4)],
            j[u(0x1f5)]
        ];
        const n = await User_1[t(0x1d5)][u(0x1ea)](m);
        if (!n)
            throw new AppError_1[(u(0x1d5))](j[t(0x1d7)], -0x230 + -0x2 * 0x17e + 0x6c0);
        await n[u(0x1d6)]({
            'configs': {
                ...n[u(0x1ee)],
                ...f
            }
        });
    };
exports[q(0x1d5)] = UpdateUserConfigsService;