'use strict';
const x = b, y = b;
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(v(0x125)) / (-0x1cb9 + 0x1bb8 + 0x102) * (-parseInt(v(0x134)) / (0x1 * -0x1d0b + 0x1a14 + 0x2f9)) + parseInt(w(0x11b)) / (-0x1a87 * -0x1 + 0x2 * 0x64d + -0x271e * 0x1) + -parseInt(v(0x10f)) / (-0xbb0 + 0x2f6 * 0x1 + 0x8be) + -parseInt(w(0x117)) / (-0x2 * 0xcd0 + 0x1 * 0x11ef + 0x7b6) + parseInt(w(0x151)) / (-0x10d5 + 0x25f * 0xb + -0x49d * 0x2) * (-parseInt(v(0x115)) / (0x3b * -0x35 + 0x1852 + 0x1 * -0xc14)) + parseInt(v(0x13d)) / (-0x4 * -0x985 + 0x1bc3 + 0x41cf * -0x1) * (parseInt(w(0x119)) / (0xf89 + 0xb70 * 0x3 + 0xc74 * -0x4)) + parseInt(w(0x124)) / (0x10e + 0x7 * -0x32 + 0x12 * 0x5);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x5cbf + 0x7fc4e + 0x40754));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1b * 0x114 + -0x1 * 0x1e8f + 0x9 * 0x47);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const I = [
        'env',
        'qFGVl',
        'data',
        '22246tEJucu',
        'SLpSZ',
        '1029700MfieBN',
        'FtVQe',
        '9rRgyBp',
        'logger',
        '2798613YRqIUY',
        'tokenAPI',
        'createWrit',
        'getTime',
        '../../util',
        'AWisk',
        '/v1/media/',
        'default',
        'API_URL_36',
        '1660140phMjsp',
        '8SaHsdA',
        'ieLzp',
        'kjbfv',
        'mime_type',
        'WNLOAD_MED',
        'GET',
        'path',
        'dbnrd',
        'filename',
        'length',
        'stream',
        'document',
        'audio',
        '__esModule',
        'error',
        '160480zTBNZj',
        'split',
        'hDOru',
        '../../erro',
        'rs/AppErro',
        'join',
        '__importDe',
        'fault',
        'voice',
        '12033248ybmBFz',
        'cSrzV',
        'headers',
        'ERROR\x20DONW',
        'method',
        'eStream',
        'finish',
        'bnJuR',
        'responseTy',
        'SygvV',
        '360_NOT_DO',
        'D360-API-K',
        'video',
        'OJuvw',
        'IA:\x20',
        'defineProp',
        's/logger',
        'public',
        'image',
        'erty',
        '2226BJuUXv',
        'UGJIE',
        'axios',
        'LOAD',
        'url',
        'rbnAq',
        '4195512sXNEML',
        'pipe',
        'value'
    ];
    a = function () {
        return I;
    };
    return a();
}
var __importDefault = this && this[x(0x13a) + x(0x13b)] || function (c) {
    const z = y;
    return c && c[z(0x132)] ? c : { 'default': c };
};
const u = {};
u[y(0x111)] = !![], Object[y(0x14c) + x(0x150)](exports, x(0x132), u);
const axios_1 = __importDefault(require(y(0x153))), fs_1 = require('fs'), path_1 = require(y(0x12b)), AppError_1 = __importDefault(require(y(0x137) + y(0x138) + 'r')), logger_1 = require(y(0x11f) + y(0x14d)), downloadFile = async (e, f, g) => {
        const A = y, B = x, h = {
                'AWisk': A(0x140) + B(0x10c),
                'cSrzV': function (n, o) {
                    return n(o);
                },
                'SygvV': B(0x143),
                'kjbfv': A(0x133),
                'hDOru': A(0x14e),
                'ieLzp': A(0x12a),
                'rbnAq': B(0x12f)
            }, i = process[B(0x112)][A(0x123) + '0'] + B(0x121) + f, j = (0x3 * -0xf2 + -0x5 * 0x765 + 0x81 * 0x4f, path_1[B(0x139)])(__dirname, '..', '..', h[A(0x136)], g), k = {};
        k[A(0x148) + 'EY'] = e;
        const l = {};
        l[B(0x10d)] = i, l[B(0x141)] = h[A(0x126)], l[A(0x145) + 'pe'] = h[B(0x10e)], l[B(0x13f)] = k;
        const m = await (-0x72 * -0x7 + -0x157 * 0x1 + 0x5 * -0x5b, axios_1[A(0x122)])(l);
        await new Promise((n, o) => {
            const C = B, D = B;
            m[C(0x114)][D(0x110)]((-0x80 + -0x511 + 0x591, fs_1[C(0x11d) + C(0x142)])(j))['on'](h[C(0x146)], async () => n(!![]))['on'](h[C(0x127)], p => {
                const E = C, F = D;
                console[E(0x133)](h[F(0x120)], p), h[E(0x13e)](o, new Error(p));
            });
        });
    }, GetMediaWaba360 = async ({
        channel: c,
        msg: d,
        ticket: e
    }) => {
        const G = x, H = x, f = {
                'dbnrd': function (g, h) {
                    return g !== h;
                },
                'qFGVl': G(0x118),
                'UGJIE': H(0x14a),
                'SLpSZ': function (g, h) {
                    return g > h;
                },
                'bnJuR': function (g, h, i, j) {
                    return g(h, i, j);
                }
            };
        try {
            let g = '', h, i;
            d?.[H(0x130)] && (f[H(0x12c)](f[G(0x113)], f[G(0x152)]) ? (g = d[H(0x130)]['id'] || '', h = d[H(0x130)][G(0x12d)], i = d[G(0x130)][H(0x128)]) : (i = j[G(0x130)]['id'] || '', k = l[G(0x130)][H(0x12d)], m = n[H(0x130)][G(0x128)]));
            d?.[H(0x14f)] && (g = d[G(0x14f)]['id'] || '', i = d[H(0x14f)][G(0x128)]);
            d?.[H(0x149)] && (g = d[H(0x149)]['id'] || '', i = d[G(0x149)][H(0x128)]);
            if (d?.[G(0x13c)]) {
                g = d[H(0x13c)]['id'] || '';
                const n = d[G(0x13c)][H(0x128)] || '', o = n[H(0x135)](';');
                i = f[H(0x116)](o[H(0x12e)], -0x166c + 0xdd0 + -0x89d * -0x1) ? o[-0x1eb2 + -0x2 * -0x652 + 0x120e] : d[H(0x13c)][G(0x128)];
            }
            d?.[G(0x131)] && (g = d[G(0x131)]['id'] || '', i = d[G(0x131)][G(0x128)]);
            const j = i?.[H(0x135)]('/')[0x1 * 0x227a + -0x1dad + -0x4cc][H(0x135)](';')[0x1296 + 0x1 * -0x1567 + 0x2d1], k = new Date()[H(0x11e)](), l = h ? h + '_' + e['id'] + '_' + g + '_' + k + '.' + j : e['id'] + '_' + g + '_' + k + '.' + j;
            return await f[G(0x144)](downloadFile, c[H(0x11c)], g, l), l;
        } catch (p) {
            logger_1[H(0x11a)][G(0x133)](p);
            throw new AppError_1[(H(0x122))](G(0x147) + H(0x129) + G(0x14b) + p);
        }
    };
exports[x(0x122)] = GetMediaWaba360;