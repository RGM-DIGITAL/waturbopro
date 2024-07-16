'use strict';
const C = b, D = b;
(function (c, d) {
    const A = b, B = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(A(0xcf)) / (-0x1dff + -0x3fd * 0x7 + -0x1 * -0x39eb) * (-parseInt(B(0xba)) / (0x235 * -0x3 + -0x13 * -0x5b + -0x20)) + -parseInt(B(0xd3)) / (-0x133c + 0x1 * -0x5d3 + 0x1912) + -parseInt(B(0xcc)) / (0x155 * -0x17 + -0x7 * -0x282 + -0x1df * -0x7) + -parseInt(A(0xb1)) / (-0x1 * -0xc31 + -0x365 * -0x5 + -0x1d25) + parseInt(A(0xb7)) / (-0xb * -0xfd + -0x175 * -0x5 + -0x1222) * (parseInt(A(0xc9)) / (-0x1 * -0x18ad + -0x1350 + -0x556)) + -parseInt(B(0xbc)) / (0x10c3 * 0x1 + -0x16b + -0xf50 * 0x1) * (-parseInt(A(0xc4)) / (0x119 * -0x11 + 0x18a8 + -0x5f6)) + parseInt(A(0xc6)) / (0x1983 + -0x1 * -0x79a + 0x2113 * -0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x11b * 0x241 + -0x3e357 + -0xe2 * -0x5b9));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x656 + 0x1 * -0x4fa + -0x1 * 0xad);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[C(0xd0) + D(0xd2)] || function (c) {
    const E = D;
    return c && c[E(0xbb)] ? c : { 'default': c };
};
function a() {
    const H = [
        'mmssSSS',
        'replace',
        '736825NtwUsu',
        'originalna',
        'pLQRL',
        'value',
        'format',
        'orfrF',
        '71766qpQDkM',
        'toLocaleLo',
        'multer',
        '14cSjpSJ',
        '__esModule',
        '440KhCWtN',
        'defineProp',
        'ddMMyyyyHH',
        'tWEUD',
        'public',
        'extname',
        'mimetype',
        'xml',
        '60795cyQnNZ',
        'resolve',
        '8728420DcZwjn',
        'endsWith',
        'default',
        '77AEWJPX',
        'erty',
        'path',
        '1604248cxKFvi',
        'werCase',
        'date-fns',
        '62440WtFawF',
        '__importDe',
        'diskStorag',
        'fault',
        '452571unfTmT'
    ];
    a = function () {
        return H;
    };
    return a();
}
const z = {};
z[D(0xb4)] = !![], Object[C(0xbd) + D(0xca)](exports, D(0xbb), z);
const path_1 = __importDefault(require(D(0xcb))), multer_1 = __importDefault(require(C(0xb9))), date_fns_1 = require(D(0xce)), publicFolder = path_1[D(0xc8)][C(0xc5)](__dirname, '..', '..', C(0xc0));
exports[D(0xc8)] = {
    'directory': publicFolder,
    'storage': multer_1[D(0xc8)][C(0xd1) + 'e']({
        'destination': publicFolder,
        'filename'(c, d, e) {
            const F = C, G = D, f = {
                    'orfrF': F(0xc3),
                    'tWEUD': F(0xbe) + F(0xaf),
                    'pLQRL': function (h, i, j) {
                        return h(i, j);
                    }
                };
            let g;
            if (d[F(0xc2)]?.[G(0xb8) + G(0xcd)]()[G(0xc7)](f[G(0xb6)]))
                g = d[F(0xb2) + 'me'];
            else {
                const {originalname: h} = d, i = path_1[F(0xc8)][F(0xc1)](h), j = h[F(0xb0)](i, '')[F(0xb0)]('#', '')[F(0xb0)]('&', ''), k = (-0x5e3 + -0x331 * 0x1 + 0x914, date_fns_1[F(0xb5)])(new Date(), f[F(0xbf)]);
                g = j + '_' + k + i;
            }
            return f[G(0xb3)](e, null, g);
        }
    })
};