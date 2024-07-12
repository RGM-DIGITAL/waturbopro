'use strict';
const q = b, r = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x284 + -0x1 * 0x15fe + 0x1952);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0xdc)) / (0x1 * -0x21f5 + -0x210c + 0x3b9 * 0x12) + parseInt(o(0xe5)) / (0x89a + -0x1 * -0xf94 + -0x182c) * (parseInt(p(0xee)) / (-0x76 * 0x1c + -0x1274 + 0x1f5f)) + -parseInt(o(0xd0)) / (0x1 * 0x1556 + 0x170d + -0x25 * 0x133) * (-parseInt(p(0xdf)) / (-0x977 * 0x1 + -0x1 * -0x24b1 + -0x1b35)) + parseInt(p(0xe4)) / (0x1 * 0x239 + -0x190d + 0x27 * 0x96) * (-parseInt(o(0xda)) / (-0x2 * 0xc5e + -0x1f38 + 0x11 * 0x34b)) + parseInt(o(0xeb)) / (0x239e + -0x2 * -0x14c + -0x43e * 0x9) + parseInt(o(0xf5)) / (0x4b0 + 0x1ddb * 0x1 + -0x2282) * (parseInt(p(0xe2)) / (0x1fdd + -0x2 * -0x443 + -0x2859)) + parseInt(p(0xf2)) / (0x256d + -0x1189 * -0x1 + 0x11 * -0x33b) * (-parseInt(o(0xe6)) / (0x5 * -0x565 + -0xb5 * -0x22 + 0x2fb * 0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x43a0b * -0x1 + 0x22 * 0x1feb + 0x1 * -0x45581));
function a() {
    const v = [
        '55MbSayW',
        '__importDe',
        '../../mode',
        '2678910tueOlY',
        'findOne',
        '66zkfEqf',
        '10DyWbzL',
        '16073916ogUbHr',
        'NtYDd',
        'attributes',
        'fault',
        '__esModule',
        '3181472WjLREU',
        'email',
        'defineProp',
        '236838UFrDWT',
        'ERR_NO_USE',
        'configs',
        'value',
        '11YTJCie',
        'ls/User',
        'rs/AppErro',
        '9Lqowkc',
        'erty',
        '143876PTFJBm',
        'R_FOUND',
        'CVbiy',
        'update',
        'tenantId',
        'default',
        'lENPa',
        'where',
        'profile',
        '../../erro',
        '166348tmlDlp',
        'name',
        '415717oZxOtM',
        'FonCV',
        'EIJzI'
    ];
    a = function () {
        return v;
    };
    return a();
}
var __importDefault = this && this[q(0xe0) + q(0xe9)] || function (c) {
    const s = q;
    return c && c[s(0xea)] ? c : { 'default': c };
};
const k = {};
k[q(0xf1)] = !![], Object[r(0xed) + r(0xf6)](exports, q(0xea), k);
const AppError_1 = __importDefault(require(r(0xd9) + r(0xf4) + 'r')), User_1 = __importDefault(require(r(0xe1) + q(0xf3))), UpdateUserConfigsService = async ({
        userConfigs: f,
        userId: g,
        tenantId: h
    }) => {
        const t = q, u = q, i = {};
        i[t(0xd6)] = u(0xdb), i[u(0xdd)] = u(0xec), i[t(0xde)] = t(0xd8), i[u(0xe7)] = u(0xf0), i[u(0xd2)] = t(0xef) + u(0xd1);
        const j = i, l = {};
        l['id'] = g, l[u(0xd4)] = h;
        const m = {};
        m[t(0xd7)] = l, m[u(0xe8)] = [
            j[t(0xd6)],
            'id',
            j[t(0xdd)],
            j[u(0xde)],
            j[u(0xe7)]
        ];
        const n = await User_1[t(0xd5)][t(0xe3)](m);
        if (!n)
            throw new AppError_1[(u(0xd5))](j[u(0xd2)], -0x2021 + -0x22e7 + 0x1 * 0x449c);
        await n[t(0xd3)]({
            'configs': {
                ...n[u(0xf0)],
                ...f
            }
        });
    };
exports[r(0xd5)] = UpdateUserConfigsService;