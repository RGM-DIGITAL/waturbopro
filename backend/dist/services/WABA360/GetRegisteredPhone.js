'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(m(0x128)) / (0x1 * -0x219 + -0x1 * 0x1733 + 0x86f * 0x3) + parseInt(m(0x12f)) / (0x1 * -0x142e + 0x18 * -0xc + 0x10 * 0x155) + -parseInt(m(0x12b)) / (0x12f5 + -0x12a1 + -0x51) * (-parseInt(n(0x10b)) / (0x123 * -0xc + -0x14cf + 0x2277)) + parseInt(n(0x119)) / (-0x91f + -0x1 * -0x24e1 + -0x1bbd) + -parseInt(n(0x113)) / (0x1 * 0x11e8 + 0x1 * -0x1079 + -0x13 * 0x13) * (-parseInt(n(0x10d)) / (-0x321 * 0x7 + -0xa6 * 0x8 + 0x1 * 0x1b1e)) + parseInt(m(0x11b)) / (-0xa9b + -0x95b + 0x13fe) + -parseInt(n(0x131)) / (-0x1dc5 * 0x1 + -0x123 * -0x18 + 0x22 * 0x13) * (parseInt(n(0x118)) / (-0x801 * -0x1 + -0x371 * 0x7 + 0x204 * 0x8));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x10d3 * 0x43 + -0x37acb + 0x1 * 0x1587e));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1669 + 0x14ef + -0x1 * -0x283);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[o(0x12a) + p(0x11c)] || function (c) {
    const q = p;
    return c && c[q(0x12d)] ? c : { 'default': c };
};
const k = {};
function a() {
    const t = [
        '36354tAPmDk',
        'axios',
        '/v1/config',
        'env',
        'method',
        '10GFFKNN',
        '209935sfSTpS',
        'value',
        '2146048KTTzsq',
        'fault',
        'Content-Ty',
        's/logger',
        '360_NOT_GE',
        'headers',
        'erty',
        'API_URL_36',
        'n/json',
        'applicatio',
        'TERED:\x20',
        'url',
        'MBER_REGIS',
        '76859wmYSWo',
        '../../erro',
        '__importDe',
        '20307ArgrhQ',
        'logger',
        '__esModule',
        '../../util',
        '409438KIGrQw',
        'MbCqk',
        '7612119LXqkhD',
        'D360-API-K',
        'WNxDO',
        'rs/AppErro',
        'error',
        'T_PHONE_NU',
        '84gglNyb',
        's/phone_nu',
        '301vjbzFt',
        'get',
        'data',
        'defineProp',
        'default',
        'mber'
    ];
    a = function () {
        return t;
    };
    return a();
}
k[p(0x11a)] = !![], Object[p(0x110) + p(0x121)](exports, p(0x12d), k);
const axios_1 = __importDefault(require(p(0x114))), AppError_1 = __importDefault(require(p(0x129) + p(0x134) + 'r')), logger_1 = require(p(0x12e) + o(0x11e)), GetRegisteredPhone = async e => {
        const r = o, s = o, f = {};
        f[r(0x130)] = r(0x10e), f[s(0x133)] = r(0x124) + r(0x123);
        const g = f, h = process[s(0x116)][r(0x122) + '0'] + (s(0x115) + r(0x10c) + r(0x112));
        try {
            const i = {};
            i[s(0x117)] = g[s(0x130)], i[r(0x126)] = h, i[s(0x120)] = {}, i[s(0x120)][s(0x132) + 'EY'] = e, i[s(0x120)][r(0x11d) + 'pe'] = g[r(0x133)];
            const j = await (-0x431 * 0x9 + -0x2b7 * -0x1 + -0x2 * -0x1181, axios_1[s(0x111)])(i);
            return j[s(0x10f)];
        } catch (l) {
            logger_1[r(0x12c)][r(0x109)](l);
            throw new AppError_1[(s(0x111))](r(0x11f) + s(0x10a) + r(0x127) + s(0x125) + l);
        }
    };
exports[o(0x111)] = GetRegisteredPhone;