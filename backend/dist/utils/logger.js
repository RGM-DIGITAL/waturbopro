'use strict';
const C = b, D = b;
(function (c, d) {
    const A = b, B = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(A(0x1da)) / (0x1a3 + 0x1 * 0x91d + 0x7 * -0x189) * (-parseInt(B(0x1e7)) / (0x1926 + 0xb5c * 0x1 + -0x2480)) + parseInt(B(0x1f6)) / (0x1607 + 0x11 * -0x23f + 0x1 * 0x102b) + parseInt(A(0x1e6)) / (0x1fb3 + -0x1 * -0xac7 + -0x2a76) + -parseInt(A(0x1d6)) / (0x35 * 0x39 + 0x3 * 0x257 + -0x12cd * 0x1) * (-parseInt(B(0x1f5)) / (-0x1a1c + 0x1973 + 0xaf)) + parseInt(A(0x1df)) / (-0x1ba2 + -0x1 * -0x2199 + 0x4 * -0x17c) * (-parseInt(A(0x1dd)) / (-0xe39 * 0x1 + 0xb * -0x31d + 0x3080)) + parseInt(A(0x1f4)) / (0x8 * -0x4d + -0x1590 + -0x5 * -0x4cd) + -parseInt(B(0x1e1)) / (0x2487 + 0x11 * 0x119 + -0x1b93 * 0x2) * (parseInt(A(0x1f1)) / (-0xf61 + 0x208f + 0x29 * -0x6b));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * -0xdbdf7 + -0xccac + 0x3 * -0x20127));
var __importDefault = this && this[C(0x201) + C(0x202)] || function (c) {
    const E = C;
    return c && c[E(0x1d5)] ? c : { 'default': c };
};
const w = {};
w[D(0x205)] = !![], Object[C(0x1fb) + C(0x1e0)](exports, C(0x1d5), w), exports[D(0x1e5)] = void (0x9c8 + -0xcb1 * -0x1 + 0x1679 * -0x1);
const winston_1 = __importDefault(require(D(0x1fe))), x = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x102 * -0x2 + -0x1768 + 0x1b41);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const G = [
        'NODE_ENV',
        'filename',
        'printf',
        'debug',
        'level',
        'transports',
        'maxsize',
        'info',
        '121mTioIh',
        './logs/app',
        'format',
        '3320604FqGtST',
        '5424294BiCcxJ',
        '2129742MuuPij',
        'colorize',
        'env',
        'stack',
        'Http',
        'defineProp',
        'warn',
        '\x20-\x20',
        'winston',
        'ptions',
        'timestamp',
        '__importDe',
        'fault',
        'prettyPrin',
        'createLogg',
        'value',
        'errors',
        '__esModule',
        '5FyNWcw',
        'handleExce',
        'combine',
        'prod',
        '67WXZrho',
        'error',
        'default',
        '280USJyCS',
        'File',
        '179522DOftNv',
        'erty',
        '1472420BjXAWf',
        'maxFiles',
        'json',
        '.logg',
        'logger',
        '1011984AUomim',
        '21954yzLzSH',
        'Console'
    ];
    a = function () {
        return G;
    };
    return a();
}
x[D(0x1f9)] = !![];
const jsonLogFileFormat = winston_1[D(0x1dc)][C(0x1f3)][C(0x1d8)](winston_1[C(0x1dc)][D(0x1f3)][C(0x206)](x), winston_1[C(0x1dc)][D(0x1f3)][C(0x200)](), winston_1[D(0x1dc)][D(0x1f3)][C(0x203) + 't']());
let env = C(0x1d9);
process[D(0x1f8)]?.[C(0x1e9)] && (env = process[D(0x1f8)][C(0x1e9)]);
const level = env === D(0x1d9) ? D(0x1f0) : D(0x1ec), y = {};
y[D(0x1f9)] = !![];
const z = {};
z[D(0x1ea)] = C(0x1f2) + C(0x1e4), z[C(0x1ed)] = C(0x1db), z[D(0x1d7) + C(0x1ff)] = !![], z[C(0x1ef)] = 0xa00000, z[D(0x1e2)] = 0xa;
const logger = winston_1[C(0x1dc)][C(0x204) + 'er']({
    'level': level,
    'format': jsonLogFileFormat,
    'transports': [
        new winston_1[(D(0x1dc))][(D(0x1ee))][(C(0x1e8))]({
            'format': winston_1[C(0x1dc)][D(0x1f3)][C(0x1d8)](winston_1[C(0x1dc)][C(0x1f3)][D(0x206)](y), winston_1[C(0x1dc)][D(0x1f3)][C(0x1f7)](), winston_1[D(0x1dc)][C(0x1f3)][D(0x1eb)](({
                level: c,
                message: d,
                timestamp: e,
                stack: f
            }) => {
                const F = D;
                if (f)
                    return c + ':\x20' + e + '\x20' + d + F(0x1fd) + f;
                return c + ':\x20' + e + '\x20' + d;
            }))
        }),
        new winston_1[(D(0x1dc))][(D(0x1ee))][(C(0x1de))](z),
        new winston_1[(D(0x1dc))][(C(0x1ee))][(C(0x1fa))]({
            'level': D(0x1fc),
            'format': winston_1[D(0x1dc)][D(0x1f3)][D(0x1e3)]()
        })
    ]
});
exports[D(0x1e5)] = logger;