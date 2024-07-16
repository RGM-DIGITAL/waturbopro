'use strict';
const C = b, D = b;
(function (c, d) {
    const A = b, B = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(A(0x199)) / (0x3 * 0x9c1 + 0x1fea + 0x1e96 * -0x2) * (parseInt(A(0x1b0)) / (0x8f9 + 0x1ade + -0x23d5)) + -parseInt(B(0x1a5)) / (0x24d8 + -0x680 + -0x611 * 0x5) + parseInt(A(0x1a0)) / (-0x21d4 + 0x2460 + -0x1 * 0x288) * (parseInt(A(0x190)) / (0x908 + 0x1739 + 0x2 * -0x101e)) + parseInt(A(0x18e)) / (0x1e2c * -0x1 + -0x23bc + 0x41ee) + parseInt(B(0x1a1)) / (-0x1733 + 0x829 * 0x2 + 0x1 * 0x6e8) + -parseInt(A(0x196)) / (0x2 * -0x9a9 + -0x1cea + 0x3044 * 0x1) * (-parseInt(A(0x1ae)) / (-0x1ba * 0x6 + -0x3 * -0x322 + 0xff)) + -parseInt(A(0x195)) / (0x2482 * -0x1 + 0x1c92 + 0x7fa) * (parseInt(B(0x198)) / (-0x1204 * -0x1 + 0x1383 + -0x257c));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x8 * -0x287eb + -0x29cf0 * -0x5 + 0xf4fd * -0x17));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xf52 * -0x1 + -0x6c5 * -0x5 + -0x2fa1);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[C(0x19e) + C(0x1aa)] || function (c) {
    const E = D;
    return c && c[E(0x1a9)] ? c : { 'default': c };
};
const w = {};
w[D(0x1ba)] = !![], Object[D(0x1a2) + C(0x18c)](exports, C(0x1a9), w), exports[C(0x1b9)] = void (0x20d * 0xe + 0x185 * -0x17 + 0x63d * 0x1);
const winston_1 = __importDefault(require(C(0x19f))), x = {};
x[D(0x18f)] = !![];
const jsonLogFileFormat = winston_1[C(0x1a7)][C(0x1b7)][C(0x19c)](winston_1[D(0x1a7)][C(0x1b7)][C(0x18b)](x), winston_1[C(0x1a7)][D(0x1b7)][D(0x19b)](), winston_1[C(0x1a7)][D(0x1b7)][D(0x18d) + 't']());
let env = C(0x1b3);
process[C(0x1b4)]?.[D(0x1ad)] && (env = process[D(0x1b4)][C(0x1ad)]);
const level = env === D(0x1b3) ? D(0x1b1) : D(0x1af), y = {};
y[D(0x18f)] = !![];
const z = {};
z[C(0x19a)] = D(0x1b5) + C(0x19d), z[C(0x192)] = D(0x197), z[D(0x1bb) + C(0x1a4)] = !![], z[C(0x1a8)] = 0xa00000, z[C(0x1ab)] = 0xa;
function a() {
    const G = [
        'NODE_ENV',
        '56727hrxmIB',
        'debug',
        '251422EDFWam',
        'info',
        'colorize',
        'prod',
        'env',
        './logs/app',
        'transports',
        'format',
        'Http',
        'logger',
        'value',
        'handleExce',
        'json',
        'errors',
        'erty',
        'prettyPrin',
        '5706888Ivvorx',
        'stack',
        '844495oxZAwV',
        'warn',
        'level',
        'printf',
        'Console',
        '330qVlMOT',
        '808cGVsRv',
        'error',
        '325633lpURuM',
        '7dQymgl',
        'filename',
        'timestamp',
        'combine',
        '.logg',
        '__importDe',
        'winston',
        '28NcTXxq',
        '1150457qYndPr',
        'defineProp',
        'File',
        'ptions',
        '1010502hCpNvw',
        'createLogg',
        'default',
        'maxsize',
        '__esModule',
        'fault',
        'maxFiles',
        '\x20-\x20'
    ];
    a = function () {
        return G;
    };
    return a();
}
const logger = winston_1[C(0x1a7)][C(0x1a6) + 'er']({
    'level': level,
    'format': jsonLogFileFormat,
    'transports': [
        new winston_1[(C(0x1a7))][(D(0x1b6))][(D(0x194))]({
            'format': winston_1[D(0x1a7)][D(0x1b7)][C(0x19c)](winston_1[D(0x1a7)][D(0x1b7)][C(0x18b)](y), winston_1[D(0x1a7)][C(0x1b7)][D(0x1b2)](), winston_1[C(0x1a7)][C(0x1b7)][C(0x193)](({
                level: c,
                message: d,
                timestamp: e,
                stack: f
            }) => {
                const F = C;
                if (f)
                    return c + ':\x20' + e + '\x20' + d + F(0x1ac) + f;
                return c + ':\x20' + e + '\x20' + d;
            }))
        }),
        new winston_1[(C(0x1a7))][(D(0x1b6))][(C(0x1a3))](z),
        new winston_1[(D(0x1a7))][(C(0x1b6))][(D(0x1b8))]({
            'level': D(0x191),
            'format': winston_1[D(0x1a7)][C(0x1b7)][D(0x18a)]()
        })
    ]
});
exports[C(0x1b9)] = logger;