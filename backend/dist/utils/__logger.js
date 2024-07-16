'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x19e)) / (-0x50d + 0x1b44 + -0x2 * 0xb1b) + -parseInt(p(0x1b9)) / (-0x11a7 + 0x1395 + 0x1 * -0x1ec) * (parseInt(p(0x1ac)) / (0xb69 * 0x1 + -0x64e + 0x28c * -0x2)) + parseInt(q(0x1a4)) / (-0xdeb + 0xb0d + 0x6 * 0x7b) * (parseInt(q(0x1a6)) / (0x164f + 0x1 * 0x90d + 0x47 * -0x71)) + -parseInt(q(0x1a0)) / (0x1d39 + -0xe55 + -0xede) + parseInt(p(0x1b2)) / (0x1 * 0x8fa + -0x1871 + 0x295 * 0x6) * (-parseInt(p(0x1ba)) / (0x90d + 0x1d2d + 0x2632 * -0x1)) + -parseInt(q(0x1aa)) / (-0x1 * -0x1661 + -0x1656 + -0x2) + -parseInt(p(0x1a9)) / (0x11 * 0xa3 + 0x2302 * 0x1 + 0x269 * -0x13) * (-parseInt(q(0x1ae)) / (0x18c3 + -0x95 * 0x19 + -0xa2b));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xa7f5b + 0x96e2 + 0x227 * -0x2ab));
var __importDefault = this && this[r(0x1a8) + s(0x1b0)] || function (c) {
    const t = s;
    return c && c[t(0x1ad)] ? c : { 'default': c };
};
const k = {};
k[r(0x1b6)] = !![], Object[s(0x1bb) + s(0x1a2)](exports, s(0x1ad), k), exports[s(0x1b7)] = void (0x1c0e + 0x1c7 + 0x1 * -0x1dd5);
const pino_1 = __importDefault(require(r(0x1a1))), l = {};
l[s(0x1b4)] = !![], l[r(0x1b5)] = s(0x19f);
const m = {};
m[r(0x1b3)] = r(0x1b1) + 'me';
const n = {};
function a() {
    const u = [
        'dev',
        '167345btouQE',
        'NODE_ENV',
        '__importDe',
        '730PoZHhE',
        '5756940egUtiF',
        'prettyPrin',
        '1662357LIpeAl',
        '__esModule',
        '457589whUKLy',
        'default',
        'fault',
        'pid,hostna',
        '21PyNqBw',
        'ignore',
        'enabled',
        'level',
        'value',
        'logger',
        'prod',
        '2bNYZFj',
        '1674024AMOJCY',
        'defineProp',
        '264470PCCxMk',
        'info',
        '3803592brnRKq',
        'pino',
        'erty',
        'env',
        '4cEViNo'
    ];
    a = function () {
        return u;
    };
    return a();
}
n[r(0x1b4)] = !![], n[r(0x1b5)] = s(0x19f), n[s(0x1ab) + 't'] = m;
const o = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x6 * -0x4de + 0x27 * 0x2 + 0x364 * 0x9);
        let h = e[f];
        return h;
    }, b(c, d);
}
o[r(0x1a5)] = l, o[s(0x1b8)] = n;
const configPino = o;
let env = r(0x1b8);
process[r(0x1a3)]?.[r(0x1a7)] && (env = process[s(0x1a3)][s(0x1a7)]);
const logger = (-0x10 * 0x128 + -0x1 * 0x15f6 + 0x2876 * 0x1, pino_1[s(0x1af)])(env === r(0x1b8) ? configPino[s(0x1b8)] : configPino[r(0x1a5)]);
exports[s(0x1b7)] = logger;