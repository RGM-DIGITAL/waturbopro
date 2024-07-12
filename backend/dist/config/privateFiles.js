'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(m(0xe5)) / (0x1c9 * 0x7 + 0x25a * -0x2 + -0x2 * 0x3e5) * (parseInt(m(0xdd)) / (-0x16df + -0x24d2 + 0x20f * 0x1d)) + -parseInt(n(0xce)) / (-0x2346 + -0x1722 + 0x3a6b) * (parseInt(n(0xe2)) / (0x484 + 0x21ee + -0x1 * 0x266e)) + -parseInt(m(0xe3)) / (0x6 * -0x5e9 + 0x4f5 * 0x7 + 0xc8) + parseInt(n(0xd9)) / (0x2ad * 0xe + 0x2 * -0x908 + -0x1360) + parseInt(m(0xd1)) / (-0x1969 + -0x2 * -0x435 + 0x883 * 0x2) + parseInt(n(0xd6)) / (0x2554 * 0x1 + 0xb18 + -0x1 * 0x3064) * (-parseInt(m(0xd0)) / (0x4b * -0x55 + -0x1f * 0x11b + 0x3b35)) + -parseInt(n(0xd8)) / (0x1a1 * 0x3 + -0xa6 * -0x8 + 0xa09 * -0x1) * (-parseInt(m(0xd3)) / (-0x1192 * -0x2 + -0x92 * -0x2e + -0x3d55));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * -0x14eb79 + 0x1cd79 * 0x6 + -0x11975b));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x64 * -0x3a + 0x1c84 + -0x3260);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[o(0xe0) + o(0xe6)] || function (c) {
    const q = p;
    return c && c[q(0xcd)] ? c : { 'default': c };
};
const l = {};
l[o(0xe1)] = !![], Object[o(0xe7) + p(0xde)](exports, o(0xcd), l);
function a() {
    const t = [
        '__importDe',
        'value',
        '8SDiFyx',
        '8144380DACDAI',
        'path',
        '1819761wIsrZS',
        'fault',
        'defineProp',
        'originalna',
        '__esModule',
        '1661859ZIJMpl',
        'Mtgjj',
        '9DXxNPl',
        '266147kCnQQj',
        'multer',
        '11QbQgoa',
        'resolve',
        'private',
        '1965336LvGdZN',
        'diskStorag',
        '17745170kNQpAw',
        '1662684fGKRIu',
        'getTime',
        'pdbft',
        'extname',
        '2OALrBb',
        'erty',
        'default'
    ];
    a = function () {
        return t;
    };
    return a();
}
const path_1 = __importDefault(require(o(0xe4))), multer_1 = __importDefault(require(p(0xd2))), privateFolder = path_1[p(0xdf)][o(0xd4)](__dirname, '..', '..', o(0xd5));
exports[p(0xdf)] = {
    'directory': privateFolder,
    'storage': multer_1[p(0xdf)][o(0xd7) + 'e']({
        'destination': privateFolder,
        'filename'(c, d, e) {
            const r = p, s = o, f = {
                    'pdbft': function (h, i) {
                        return h + i;
                    },
                    'Mtgjj': function (h, i, j) {
                        return h(i, j);
                    }
                }, g = f[r(0xdb)](new Date()[s(0xda)](), path_1[r(0xdf)][r(0xdc)](d[s(0xcc) + 'me']));
            return f[r(0xcf)](e, null, g);
        }
    })
};