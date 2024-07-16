'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(m(0x205)) / (0x1917 + -0x265 * -0x5 + -0x1 * 0x250f) + -parseInt(m(0x1f5)) / (0x1f6f + -0x1467 + -0x2 * 0x583) * (-parseInt(n(0x208)) / (-0x26a3 + -0x1c5 * 0x12 + 0x4680)) + parseInt(m(0x1ff)) / (0x1 * 0x1f91 + -0x18c2 * 0x1 + -0x1 * 0x6cb) + parseInt(m(0x206)) / (-0x55 * 0x21 + 0xcc7 + -0x1 * 0x1cd) * (-parseInt(n(0x201)) / (-0x1 * 0xc37 + -0x1015 + 0x1c52)) + parseInt(m(0x1f1)) / (0x99d + -0xd4d * 0x2 + 0x1104) * (parseInt(n(0x1f9)) / (0x6b * -0x7 + -0x34 * -0x2e + -0x663)) + parseInt(m(0x1f6)) / (0x7a3 + 0x1 * 0x1479 + 0x1c13 * -0x1) + -parseInt(n(0x20a)) / (-0x1bb0 + 0x2 * 0x1049 + 0x14 * -0x3e);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x24a * 0x15b + -0x4601 * 0x11 + 0x16e489));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x28e * 0x7 + 0x2453 + -0x3445);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const t = [
        '12131658tRKwsa',
        'findByPk',
        '../../mode',
        '69672OscCXN',
        'status',
        '__importDe',
        'isXBO',
        'ERR_NO_PLA',
        '__esModule',
        '7862316nkKiCc',
        'fault',
        '96rHWhqs',
        'update',
        'default',
        'ls/Invoice',
        '305777oGayQf',
        '141745rkuatv',
        'rs/AppErro',
        '7617oXqONk',
        'N_FOUND',
        '32164440sOUuAF',
        '../../erro',
        '371xNTSfN',
        'erty',
        'value',
        'defineProp',
        '458dpYOur'
    ];
    a = function () {
        return t;
    };
    return a();
}
var __importDefault = this && this[o(0x1fb) + p(0x200)] || function (c) {
    const q = o;
    return c && c[q(0x1fe)] ? c : { 'default': c };
};
const k = {};
k[o(0x1f3)] = !![], Object[o(0x1f4) + p(0x1f2)](exports, p(0x1fe), k);
const AppError_1 = __importDefault(require(p(0x1f0) + o(0x207) + 'r')), Invoices_1 = __importDefault(require(o(0x1f8) + p(0x204) + 's')), UpdateInvoiceService = async e => {
        const r = o, s = p, f = {};
        f[r(0x1fc)] = s(0x1fd) + s(0x209);
        const g = f, {
                id: h,
                status: i
            } = e, j = await Invoices_1[s(0x203)][r(0x1f7)](h);
        if (!j)
            throw new AppError_1[(s(0x203))](g[r(0x1fc)], -0x78f + 0x9d * 0x13 + 0x5c * -0x7);
        const l = {};
        return l[r(0x1fa)] = i, await j[s(0x202)](l), j;
    };
exports[o(0x203)] = UpdateInvoiceService;