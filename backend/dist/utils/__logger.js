'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x128)) / (0x175f + -0x1 * 0x1b9a + 0x43c) * (parseInt(q(0x127)) / (-0x1fcb + 0x198e + 0x63f * 0x1)) + parseInt(p(0x13d)) / (-0x2226 + -0x1b87 + 0x3db0) * (-parseInt(q(0x130)) / (0x660 + -0x21e7 + 0x281 * 0xb)) + -parseInt(q(0x133)) / (-0x9da + 0x1f53 + -0x1574) + parseInt(q(0x12e)) / (0x23f * 0x1 + -0x13e6 * -0x1 + -0x1 * 0x161f) * (parseInt(p(0x13c)) / (0x9 * 0x277 + 0x9f * -0x29 + 0x79 * 0x7)) + -parseInt(p(0x131)) / (0x7 * -0x390 + 0xb * -0x24b + 0x3231 * 0x1) + -parseInt(p(0x12d)) / (0x7c7 + 0xf35 + 0xeb * -0x19) + parseInt(q(0x123)) / (0x6e6 * -0x4 + -0x8c1 + 0x747 * 0x5);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x39e3 * 0xd + -0x89585 * -0x1 + 0x12efa));
var __importDefault = this && this[r(0x125) + s(0x139)] || function (c) {
    const t = r;
    return c && c[t(0x122)] ? c : { 'default': c };
};
const k = {};
k[r(0x12a)] = !![], Object[s(0x126) + r(0x138)](exports, s(0x122), k), exports[r(0x13e)] = void (0xaa6 + 0x2431 + -0x2ed7);
const pino_1 = __importDefault(require(r(0x134))), l = {};
l[s(0x12f)] = !![], l[s(0x136)] = r(0x13a);
const m = {};
m[r(0x135)] = r(0x137) + 'me';
const n = {};
n[r(0x12f)] = !![], n[r(0x136)] = r(0x13a), n[s(0x124) + 't'] = m;
const o = {};
o[r(0x12c)] = l, o[s(0x12b)] = n;
const configPino = o;
let env = s(0x12b);
process[r(0x132)]?.[s(0x13b)] && (env = process[r(0x132)][r(0x13b)]);
function a() {
    const u = [
        'env',
        '4109955JACrzo',
        'pino',
        'ignore',
        'level',
        'pid,hostna',
        'erty',
        'fault',
        'info',
        'NODE_ENV',
        '7fwrMqs',
        '12cVhXsw',
        'logger',
        '__esModule',
        '24774530vbzLLY',
        'prettyPrin',
        '__importDe',
        'defineProp',
        '36GiTbaW',
        '27706UvnPeo',
        'default',
        'value',
        'prod',
        'dev',
        '7309287cOvrVY',
        '5346966EiIVCJ',
        'enabled',
        '404468GOihhT',
        '3070592mRaUac'
    ];
    a = function () {
        return u;
    };
    return a();
}
const logger = (0x54b * 0x3 + 0xead + -0x1 * 0x1e8e, pino_1[s(0x129)])(env === s(0x12b) ? configPino[s(0x12b)] : configPino[s(0x12c)]);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x21b4 + 0x234a + -0x74 * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[r(0x13e)] = logger;