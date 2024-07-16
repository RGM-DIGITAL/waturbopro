'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0x71)) / (-0x2318 + 0x6de * 0x2 + 0x155d) + parseInt(m(0x82)) / (0x1c31 * -0x1 + -0x3 * 0x137 + 0xfec * 0x2) * (parseInt(m(0x8f)) / (0x29 * 0xf1 + 0x1dc + -0x2872)) + -parseInt(l(0x7c)) / (0xb15 + 0x13 * -0xde + 0x569) * (-parseInt(m(0x6e)) / (0x1 * 0x13e7 + 0x2cc + -0x16ae)) + -parseInt(l(0x8a)) / (0x2a1 * 0xb + -0x4a8 + -0x183d) + parseInt(l(0x6d)) / (-0x15dc + 0x443 * -0x1 + 0x1 * 0x1a26) + -parseInt(l(0x75)) / (0x4cf * -0x7 + 0x28 * -0x67 + 0x31c9) + -parseInt(l(0x86)) / (-0x1386 + 0x1678 + -0x2e9) * (parseInt(l(0x7b)) / (0x1b83 + -0xe51 + -0xd28));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x7 * 0x1d87 + 0x1 * 0x8001 + 0x27dfb));
var __importDefault = this && this[n(0x81) + n(0x7f)] || function (c) {
    const p = o;
    return c && c[p(0x7e)] ? c : { 'default': c };
};
function a() {
    const u = [
        'nd\x20message',
        'sages',
        'findByPk',
        '9SUyRDZ',
        'adUuf',
        'tWbotBaile',
        '3102617fJXNBK',
        '800455DNeJky',
        'WAPP_MSG',
        's/Message',
        '87170SrEDyO',
        'sage',
        'default',
        '0\x20last\x20mes',
        '3750056CCxReX',
        'ORKHS',
        'log',
        './GetTicke',
        'ERR_FETCH_',
        'Cannot\x20fou',
        '10Elhgii',
        '12megJmF',
        'value',
        '__esModule',
        'fault',
        './../model',
        '__importDe',
        '102806ajKzaY',
        '../errors/',
        'GetWbotMes',
        'erty',
        '130275mtcXmv',
        'GBviS',
        '\x20within\x2010',
        'AppError',
        '2595876PjfqTY',
        'defineProp'
    ];
    a = function () {
        return u;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x798 + 0x1a0e + -0x213b);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[o(0x7d)] = !![], Object[n(0x8b) + n(0x85)](exports, n(0x7e), k), exports[n(0x84) + o(0x72)] = void (-0x626 * 0x4 + -0x142c + -0x776 * -0x6);
const AppError_1 = __importDefault(require(o(0x83) + n(0x89))), GetTicketWbotBaileys_1 = __importDefault(require(n(0x78) + n(0x6c) + 'ys')), Message_1 = __importDefault(require(o(0x80) + n(0x70))), GetWbotMessage = async (c, d) => {
        const q = n, r = o, e = {
                'GBviS': function (i) {
                    return i();
                },
                'ORKHS': q(0x7a) + r(0x8c) + r(0x88) + r(0x74) + q(0x8d),
                'adUuf': q(0x79) + q(0x6f)
            }, f = await (0x2601 + 0x988 + 0x1 * -0x2f89, GetTicketWbotBaileys_1[q(0x73)])(c);
        let g = 0x5 * -0x31d + -0x11 * 0x88 + 0x1 * 0x18ad;
        const h = async () => {
            const s = q, t = r, i = await Message_1[s(0x73)][t(0x8e)](d);
            return i;
        };
        try {
            const i = await e[r(0x87)](h);
            if (!i)
                throw new Error(e[r(0x76)]);
            return i;
        } catch (j) {
            console[r(0x77)](j);
            throw new AppError_1[(q(0x73))](e[r(0x6b)]);
        }
    };
exports[o(0x84) + o(0x72)] = GetWbotMessage, exports[n(0x73)] = exports[n(0x84) + o(0x72)];