'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(m(0xa0)) / (-0x2ce * 0x2 + -0x493 * 0x1 + 0x2 * 0x518) + parseInt(n(0x9b)) / (-0x954 + -0x156 * -0x6 + 0x152) + parseInt(m(0x9d)) / (-0xc04 + 0x1 * 0x23b7 + -0x17b0) * (parseInt(m(0x96)) / (0x5a6 + 0x651 + -0xbf3)) + -parseInt(m(0x9c)) / (-0xca3 * -0x2 + -0x19e5 + 0xa4) + parseInt(n(0x97)) / (-0x5cb * 0x2 + 0xa4 * -0xa + 0x1204) * (parseInt(n(0x95)) / (-0x2 * -0x1064 + 0x1 * 0x281 + -0x2342)) + -parseInt(m(0x9a)) / (-0x1c * 0x63 + 0x137 + 0x9a5) * (-parseInt(n(0x8d)) / (0x2470 + -0x6c * -0x27 + -0x34db)) + -parseInt(n(0x94)) / (-0x10 * -0xdf + -0x245f * -0x1 + -0x2f5 * 0x11);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x9d358 + 0x11 * 0x20dd + -0xa0e1));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x550 + 0x53a * 0x2 + -0x49d);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[o(0x9f) + o(0x89)] || function (c) {
    const q = o;
    return c && c[q(0x91)] ? c : { 'default': c };
};
const k = {};
k[p(0x88)] = !![], Object[p(0x99) + p(0x87)](exports, p(0x91), k);
function a() {
    const t = [
        '869578dwbzed',
        '4958135BqZqtr',
        '2657769BwZwYR',
        'N_FOUND',
        '__importDe',
        '279931zYuAHl',
        'findByPk',
        'erty',
        'value',
        'fault',
        '../../mode',
        'rs/AppErro',
        '../../erro',
        '36OApLNR',
        'ls/Invoice',
        'ERR_NO_PLA',
        'wSlVa',
        '__esModule',
        'status',
        'update',
        '877290ZLbxSd',
        '7EiWeRd',
        '4iwCrpi',
        '145014VavzpT',
        'default',
        'defineProp',
        '400616bfhxit'
    ];
    a = function () {
        return t;
    };
    return a();
}
const AppError_1 = __importDefault(require(o(0x8c) + p(0x8b) + 'r')), Invoices_1 = __importDefault(require(o(0x8a) + p(0x8e) + 's')), UpdateInvoiceService = async e => {
        const r = o, s = o, f = {};
        f[r(0x90)] = s(0x8f) + r(0x9e);
        const g = f, {
                id: h,
                status: i
            } = e, j = await Invoices_1[s(0x98)][s(0xa1)](h);
        if (!j)
            throw new AppError_1[(s(0x98))](g[s(0x90)], 0x221e + 0x179d + -0x3827);
        const l = {};
        return l[s(0x92)] = i, await j[s(0x93)](l), j;
    };
exports[p(0x98)] = UpdateInvoiceService;