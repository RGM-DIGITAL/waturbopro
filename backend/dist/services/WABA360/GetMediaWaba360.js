'use strict';
function a() {
    const I = [
        '../../util',
        'default',
        'join',
        'defineProp',
        '/v1/media/',
        'split',
        '4567600QSOlpV',
        'image',
        '32304753tIcQDN',
        '786348IYuPHH',
        'url',
        'IA:\x20',
        'ypaoe',
        'voice',
        'WNLOAD_MED',
        'FPrfI',
        'document',
        '__importDe',
        'erty',
        'filename',
        'EwURz',
        'axios',
        'method',
        '../../erro',
        'stream',
        'ERROR\x20DONW',
        'mime_type',
        'pcjtS',
        'rIXej',
        'XlqGj',
        '__esModule',
        'logger',
        'erqRE',
        'pipe',
        '82864kfgKhZ',
        'API_URL_36',
        'rxNxj',
        '4987199fXegnu',
        '280566YtfZpo',
        'jFSvs',
        's/logger',
        'getTime',
        '2GQBFnW',
        'fyZTc',
        'finish',
        'value',
        '1188818bKPwkt',
        'createWrit',
        'bcvhY',
        'responseTy',
        'nJAjW',
        'tokenAPI',
        'WepaN',
        'rs/AppErro',
        'audio',
        'pKbTG',
        'LOAD',
        'sGaAH',
        'error',
        'env',
        'dgucl',
        'length',
        '360_NOT_DO',
        'GET',
        'eStream',
        'D360-API-K',
        'headers',
        'fault',
        'gzZYf',
        'YmVBH',
        'path',
        'video',
        'DWtqG',
        'data',
        'wZzqh',
        'public',
        '350bsEpVX'
    ];
    a = function () {
        return I;
    };
    return a();
}
const x = b, y = b;
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(v(0x1ca)) / (-0x22db + 0x1 * 0x3a8 + 0x2 * 0xf9a) * (-parseInt(v(0x1ce)) / (-0x2 * -0x511 + 0x1789 * 0x1 + -0x21a9)) + -parseInt(v(0x1f6)) / (-0x138b + -0x1 * 0xefc + 0x228a) + parseInt(v(0x1c2)) / (-0x7a7 * 0x1 + -0x1 * -0x1f8e + -0x17e3) * (-parseInt(v(0x1ec)) / (0x1335 * -0x2 + 0x1eb3 + 0x7bc)) + -parseInt(v(0x1c6)) / (0x1 * 0x1ff6 + 0xee4 * -0x2 + -0x228) + parseInt(v(0x1c5)) / (-0xbfd + 0x2 * 0x1195 + -0x1726) + -parseInt(v(0x1f3)) / (-0x22a0 * -0x1 + 0x3 * 0xd + 0x251 * -0xf) + parseInt(w(0x1f5)) / (0x1 * 0xe1b + 0x5a9 + -0x13bb);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x5cd36 + 0x1 * 0xf9584 + 0x22ab7));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x13d0 + -0x123f + 0x20);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[x(0x1b1) + y(0x1e3)] || function (c) {
    const z = x;
    return c && c[z(0x1be)] ? c : { 'default': c };
};
const u = {};
u[x(0x1cd)] = !![], Object[x(0x1f0) + x(0x1b2)](exports, y(0x1be), u);
const axios_1 = __importDefault(require(x(0x1b5))), fs_1 = require('fs'), path_1 = require(y(0x1e6)), AppError_1 = __importDefault(require(x(0x1b7) + y(0x1d5) + 'r')), logger_1 = require(y(0x1ed) + x(0x1c8)), downloadFile = async (e, f, g) => {
        const A = x, B = x, h = {
                'WepaN': A(0x1b9) + A(0x1d8),
                'fyZTc': function (n, o) {
                    return n(o);
                },
                'DWtqG': A(0x1cc),
                'EwURz': A(0x1da),
                'XlqGj': B(0x1eb),
                'pKbTG': B(0x1df),
                'gzZYf': B(0x1b8)
            }, i = process[B(0x1db)][B(0x1c3) + '0'] + A(0x1f1) + f, j = (-0xe19 + -0xbe4 * 0x1 + 0x19fd, path_1[A(0x1ef)])(__dirname, '..', '..', h[B(0x1bd)], g), k = {};
        k[A(0x1e1) + 'EY'] = e;
        const l = {};
        l[A(0x1f7)] = i, l[A(0x1b6)] = h[B(0x1d7)], l[B(0x1d1) + 'pe'] = h[A(0x1e4)], l[A(0x1e2)] = k;
        const m = await (-0x94f + -0x3fb + -0x3 * -0x46e, axios_1[A(0x1ee)])(l);
        await new Promise((n, o) => {
            const C = B, D = B;
            m[C(0x1e9)][C(0x1c1)]((-0x1280 + -0x11db + -0x1 * -0x245b, fs_1[C(0x1cf) + D(0x1e0)])(j))['on'](h[C(0x1e8)], async () => n(!![]))['on'](h[C(0x1b4)], p => {
                const E = D, F = C;
                console[E(0x1da)](h[F(0x1d4)], p), h[E(0x1cb)](o, new Error(p));
            });
        });
    }, GetMediaWaba360 = async ({
        channel: c,
        msg: d,
        ticket: e
    }) => {
        const G = x, H = y, f = {
                'dgucl': function (g, h) {
                    return g !== h;
                },
                'rIXej': G(0x1c4),
                'nJAjW': function (g, h) {
                    return g > h;
                },
                'erqRE': G(0x1e5),
                'ypaoe': H(0x1bb),
                'bcvhY': function (g, h, i, j) {
                    return g(h, i, j);
                },
                'sGaAH': H(0x1c7),
                'wZzqh': H(0x1fc)
            };
        try {
            let g = '', h, i;
            d?.[H(0x1fd)] && (g = d[H(0x1fd)]['id'] || '', h = d[H(0x1fd)][H(0x1b3)], i = d[G(0x1fd)][H(0x1ba)]);
            d?.[G(0x1f4)] && (g = d[G(0x1f4)]['id'] || '', i = d[H(0x1f4)][H(0x1ba)]);
            d?.[G(0x1e7)] && (g = d[G(0x1e7)]['id'] || '', i = d[H(0x1e7)][H(0x1ba)]);
            if (d?.[G(0x1fa)]) {
                if (f[G(0x1dc)](f[H(0x1bc)], f[H(0x1bc)])) {
                    const n = {};
                    return n[G(0x1ee)] = j, g && h[G(0x1be)] ? i : n;
                } else {
                    g = d[G(0x1fa)]['id'] || '';
                    const n = d[H(0x1fa)][G(0x1ba)] || '', o = n[H(0x1f2)](';');
                    i = f[H(0x1d2)](o[G(0x1dd)], 0xab2 * -0x3 + 0x109b + -0x7be * -0x2) ? o[-0x3 * 0xe4 + -0xb20 + 0x373 * 0x4] : d[G(0x1fa)][H(0x1ba)];
                }
            }
            d?.[G(0x1d6)] && (f[G(0x1dc)](f[G(0x1c0)], f[H(0x1f9)]) ? (g = d[G(0x1d6)]['id'] || '', i = d[H(0x1d6)][H(0x1ba)]) : (g = h[H(0x1f4)]['id'] || '', i = j[G(0x1f4)][H(0x1ba)]));
            const j = i?.[G(0x1f2)]('/')[0xa38 + -0x2358 + -0x1921 * -0x1][G(0x1f2)](';')[0x1 * -0x1229 + -0x10e * 0xb + 0x1dc3], k = new Date()[H(0x1c9)](), l = h ? h + '_' + e['id'] + '_' + g + '_' + k + '.' + j : e['id'] + '_' + g + '_' + k + '.' + j;
            return await f[G(0x1d0)](downloadFile, c[H(0x1d3)], g, l), l;
        } catch (q) {
            if (f[G(0x1dc)](f[H(0x1d9)], f[G(0x1ea)])) {
                logger_1[G(0x1bf)][H(0x1da)](q);
                throw new AppError_1[(G(0x1ee))](H(0x1de) + H(0x1fb) + H(0x1f8) + q);
            } else
                g = h[G(0x1e7)]['id'] || '', i = j[H(0x1e7)][H(0x1ba)];
        }
    };
exports[x(0x1ee)] = GetMediaWaba360;