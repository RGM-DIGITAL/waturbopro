'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0x1fa)) / (-0x183 * -0xf + -0xe5c * 0x1 + -0x850) * (-parseInt(p(0x1f0)) / (-0x431 + 0x1 * 0x20ad + -0x87 * 0x36)) + parseInt(p(0x1f6)) / (-0x141b + -0x1182 + 0x25a0) + parseInt(p(0x1de)) / (0x29 * 0xad + 0x756 + -0x2307) * (-parseInt(p(0x1eb)) / (-0x82 * -0x3b + 0x5 * 0x60 + -0x1fd1)) + parseInt(p(0x1e2)) / (0xfa7 * -0x2 + -0x2 * -0x611 + 0x1332) * (-parseInt(p(0x1df)) / (-0x39f + 0x4 * -0x179 + 0x4c5 * 0x2)) + -parseInt(p(0x1e3)) / (-0x157 * -0x1d + 0x13e1 + -0x3ab4) + -parseInt(p(0x1f2)) / (0x2 * -0xc19 + -0x6 * -0x4ac + -0x1 * 0x3cd) + parseInt(p(0x1f4)) / (-0x2282 + -0x183e + 0x3aca);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xf944b + 0x5bd57 + -0x391 * -0x5bf));
function a() {
    const v = [
        'fault',
        '3327222DxdOkx',
        'destroy',
        'erty',
        'defineProp',
        '17kkIWyh',
        '__esModule',
        'ERR_GRUOP_',
        '436fZyBAo',
        '7ZJvXYU',
        'NO_EXISTS',
        'uaPLu',
        '5569854FKetSH',
        '1399872dWgtCk',
        'where',
        '../../mode',
        'ERR_NO_GRO',
        'default',
        '__importDe',
        'UP_FOUND',
        '../../erro',
        '50390Vmecfh',
        'findOne',
        'rs/AppErro',
        'VzYOb',
        'ls/Group',
        '145822aaeayd',
        'value',
        '4701348uYRnLp',
        'tenantId',
        '35527510YTJYZI'
    ];
    a = function () {
        return v;
    };
    return a();
}
var __importDefault = this && this[q(0x1e8) + r(0x1f5)] || function (c) {
    const s = r;
    return c && c[s(0x1fb)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x245d + 0xe64 + 0x71 * 0x36);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[q(0x1f1)] = !![], Object[q(0x1f9) + r(0x1f8)](exports, q(0x1fb), k);
const AppError_1 = __importDefault(require(r(0x1ea) + q(0x1ed) + 'r')), Group_1 = __importDefault(require(q(0x1e5) + q(0x1ef))), DeleteGroupService = async ({
        id: f,
        tenantId: g
    }) => {
        const t = q, u = r, h = {};
        h[t(0x1e1)] = t(0x1e6) + u(0x1e9), h[u(0x1ee)] = u(0x1dd) + u(0x1e0);
        const i = h, j = {};
        j['id'] = f, j[t(0x1f3)] = g;
        const l = {};
        l[u(0x1e4)] = j;
        const m = await Group_1[u(0x1e7)][u(0x1ec)](l);
        if (!m)
            throw new AppError_1[(u(0x1e7))](i[t(0x1e1)], 0x1c11 + 0x1f * -0x7f + -0x58e * 0x2);
        try {
            await m[t(0x1f7)]();
        } catch (n) {
            throw new AppError_1[(t(0x1e7))](i[t(0x1ee)], -0x1 * -0x88d + 0x258d + 0x1643 * -0x2);
        }
    };
exports[r(0x1e7)] = DeleteGroupService;