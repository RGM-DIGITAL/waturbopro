'use strict';
const C = b, D = b;
(function (c, d) {
    const A = b, B = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(A(0x9a)) / (0xf1 * -0xd + -0x18fd * -0x1 + -0xd * 0xfb) + -parseInt(A(0x92)) / (0x1 * -0x1d21 + -0x773 * -0x4 + 0xa9 * -0x1) + -parseInt(A(0x8f)) / (-0x1 * -0x1633 + 0x95f + -0x1f8f) + -parseInt(A(0xa3)) / (0xe14 + -0xb3e * -0x3 + -0x2fca) + -parseInt(B(0x95)) / (0xc64 + -0x7 * 0x127 + -0x44e) * (-parseInt(B(0x8d)) / (0x193 * 0x18 + -0x4b8 * -0x5 + -0x3d5a)) + parseInt(A(0x9e)) / (-0x985 * 0x2 + 0x2 * -0xe30 + 0x2f71) + parseInt(A(0xa0)) / (0xac * 0x2b + 0xaae + -0x278a * 0x1) * (parseInt(A(0x99)) / (-0x1 * 0x50e + 0xa9 * -0x19 + 0x1 * 0x1598));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x39d0a + -0x7ffab * 0x1 + 0x146 * 0xce5));
function a() {
    const H = [
        'format',
        'defineProp',
        '228VEbGFU',
        'originalna',
        '898902NYvfOh',
        'diskStorag',
        'fault',
        '1211232oHibzX',
        'MDoHr',
        'TsjWJ',
        '36310FunvPb',
        'replace',
        'werCase',
        'ddMMyyyyHH',
        '474327hGeEop',
        '22942dWUdJy',
        'default',
        'resolve',
        'path',
        '3129511NPfAiK',
        'mmssSSS',
        '136QPpjRM',
        'WjWtQ',
        '__esModule',
        '1502700ftpPFE',
        'multer',
        'toLocaleLo',
        'date-fns',
        'erty',
        'public',
        '__importDe',
        'value',
        'endsWith',
        'extname',
        'mimetype',
        'xml'
    ];
    a = function () {
        return H;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x99 * -0xe + 0x2c3 + -0xa95);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[C(0xa9) + C(0x91)] || function (c) {
    const E = C;
    return c && c[E(0xa2)] ? c : { 'default': c };
};
const z = {};
z[D(0xaa)] = !![], Object[D(0x8c) + C(0xa7)](exports, D(0xa2), z);
const path_1 = __importDefault(require(C(0x9d))), multer_1 = __importDefault(require(C(0xa4))), date_fns_1 = require(C(0xa6)), publicFolder = path_1[D(0x9b)][C(0x9c)](__dirname, '..', '..', C(0xa8));
exports[C(0x9b)] = {
    'directory': publicFolder,
    'storage': multer_1[C(0x9b)][D(0x90) + 'e']({
        'destination': publicFolder,
        'filename'(c, d, e) {
            const F = D, G = C, f = {
                    'TsjWJ': F(0xae),
                    'WjWtQ': F(0x98) + F(0x9f),
                    'MDoHr': function (h, i, j) {
                        return h(i, j);
                    }
                };
            let g;
            if (d[G(0xad)]?.[F(0xa5) + G(0x97)]()[F(0xab)](f[G(0x94)]))
                g = d[F(0x8e) + 'me'];
            else {
                const {originalname: h} = d, i = path_1[F(0x9b)][F(0xac)](h), j = h[F(0x96)](i, '')[G(0x96)]('#', '')[G(0x96)]('&', ''), k = (0x251c + 0x1029 + -0x3545, date_fns_1[F(0xaf)])(new Date(), f[F(0xa1)]);
                g = j + '_' + k + i;
            }
            return f[F(0x93)](e, null, g);
        }
    })
};