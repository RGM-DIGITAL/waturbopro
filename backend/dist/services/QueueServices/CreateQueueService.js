'use strict';
const o = b, p = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * 0x12e5 + 0x5c4 + 0xe52);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(m(0x144)) / (0x17 * 0x1a3 + 0x15 * 0x5e + -0x2d5a) + parseInt(m(0x14a)) / (-0x104c * 0x2 + -0x23f + 0x22d9) * (-parseInt(n(0x148)) / (-0x1 * 0x69b + -0x1 * -0x134f + 0x1 * -0xcb1)) + -parseInt(m(0x140)) / (-0xebb + -0x473 * -0x1 + 0x4 * 0x293) * (parseInt(n(0x145)) / (0x656 + 0x2191 + -0x27e2)) + -parseInt(n(0x141)) / (0x8 * -0x430 + -0x21c + 0x2 * 0x11d1) + parseInt(m(0x13a)) / (0x1 * 0x179f + 0x178c + -0x2f24) + parseInt(n(0x134)) / (0x6b * -0xf + -0xd14 + -0x1c3 * -0xb) * (parseInt(n(0x138)) / (-0x1 * 0x712 + 0x1fbb + -0x18a0)) + parseInt(m(0x131)) / (0x94b + -0x1541 + -0xc00 * -0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x3bf0c + 0x21f * 0x1a1 + -0x3a248));
var __importDefault = this && this[o(0x13f) + p(0x142)] || function (c) {
    const q = p;
    return c && c[q(0x13b)] ? c : { 'default': c };
};
function a() {
    const t = [
        '220550GVQQis',
        'default',
        'userId',
        '101901LIvDrm',
        'isActive',
        '2zAjCRj',
        '3408890xEWRSL',
        'defineProp',
        'color',
        '3028008fYjbDB',
        'tenantId',
        'value',
        '../../mode',
        '9YWOObf',
        'erty',
        '2842735LuMLzB',
        '__esModule',
        'from_ia',
        'queue',
        'create',
        '__importDe',
        '28RWYacv',
        '726192NUgMWG',
        'fault',
        'ls/Queue',
        '427931gubfkS'
    ];
    a = function () {
        return t;
    };
    return a();
}
const k = {};
k[p(0x136)] = !![], Object[p(0x132) + o(0x139)](exports, p(0x13b), k);
const Queue_1 = __importDefault(require(o(0x137) + p(0x143))), CreateQueueService = async ({
        queue: d,
        isActive: e,
        userId: f,
        from_ia: g,
        color: h,
        tenantId: i
    }) => {
        const r = o, s = p, j = {};
        j[r(0x13d)] = d, j[s(0x149)] = e, j[r(0x147)] = f, j[s(0x13c)] = g, j[s(0x133)] = h, j[r(0x135)] = i;
        const l = await Queue_1[r(0x146)][r(0x13e)](j);
        return l;
    };
exports[o(0x146)] = CreateQueueService;