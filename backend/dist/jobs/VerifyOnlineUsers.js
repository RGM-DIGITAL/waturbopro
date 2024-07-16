'use strict';
function a() {
    const w = [
        '54DwAhVA',
        '36yYpghS',
        '__esModule',
        '23396dtaszs',
        'findAll',
        '../utils/l',
        '133445pyfOgn',
        '1940vPEokK',
        'neUsers',
        '93348AZOezg',
        'removeOnCo',
        'defineProp',
        '10836ZxzKIU',
        'Obdam',
        '../models/',
        'itiated',
        'erty',
        'FKySn',
        'default',
        'fyOnlineUs',
        'WpBMf',
        '7412031tItyXH',
        'removeOnFa',
        'ogger',
        'verifyOnli',
        'Error\x20Veri',
        'fault',
        '../libs/so',
        '1346XXLKgG',
        'repeat',
        'User',
        'update',
        'every',
        'message',
        'ers',
        'nGGpQ',
        'jobId',
        '577sVaUaM',
        'VerifyOnli',
        'cket',
        'neUsers\x20In',
        'value',
        '152sbBIfv',
        'Finalized\x20',
        'logger',
        'info',
        'error',
        'forEach',
        'getIO',
        'isOnline',
        '__importDe',
        '273LagDGd',
        'mplete',
        'emit',
        '211043YuYRqg'
    ];
    a = function () {
        return w;
    };
    return a();
}
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0x150)) / (0x311 * -0x6 + -0x768 + 0x19cf * 0x1) * (-parseInt(o(0x147)) / (-0x117e + -0x1 * 0x56f + 0x16ef)) + parseInt(n(0x163)) / (-0x12ce + -0xfb * 0x15 + 0x2768) * (-parseInt(o(0x165)) / (0xd85 + 0x493 * 0x6 + -0x28f3)) + -parseInt(n(0x168)) / (0x34 * 0x4e + 0x3 * 0xa86 + -0x2f65) * (parseInt(o(0x162)) / (0x8 * -0x337 + 0x4cf + -0x14ef * -0x1)) + parseInt(n(0x161)) / (0x6e5 * 0x4 + 0x2537 + -0x5 * 0xcf4) * (parseInt(n(0x155)) / (0x1b5 * -0x1 + 0xc2d + -0xa70)) + parseInt(n(0x137)) / (-0x1077 * 0x1 + 0x12ea + -0x26a) * (parseInt(n(0x169)) / (0xa16 + -0x1190 + 0x25 * 0x34)) + -parseInt(n(0x140)) / (-0x6 * 0x5c + 0x1349 * -0x2 + 0x28c5) + -parseInt(o(0x134)) / (-0x1de * 0x14 + -0xd * -0x197 + 0x10b9) * (-parseInt(o(0x15e)) / (-0x2108 + 0x666 + -0x1aaf * -0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * -0x16367 + -0x77ae6 + 0x1c * 0x6bdb));
var __importDefault = this && this[p(0x15d) + q(0x145)] || function (c) {
    const r = q;
    return c && c[r(0x164)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * 0x2446 + -0x14a1 + -0xe72);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[q(0x154)] = !![], Object[q(0x136) + q(0x13b)](exports, p(0x164), k);
const User_1 = __importDefault(require(p(0x139) + q(0x149))), logger_1 = require(q(0x167) + q(0x142)), socket_1 = require(q(0x146) + p(0x152)), l = {};
l[q(0x14b)] = (0x1479 * 0x1 + -0x3aa * 0x1 + 0x1093 * -0x1) * (0x222 + 0x194 * 0xb + -0xf96);
const m = {};
m[q(0x135) + p(0x15f)] = !![], m[p(0x141) + 'il'] = ![], m[p(0x14f)] = p(0x151) + p(0x133), m[p(0x148)] = l, exports[q(0x13d)] = {
    'key': q(0x151) + q(0x133),
    'options': m,
    async 'handle'() {
        const s = q, t = p, e = {};
        e[s(0x14e)] = t(0x151) + s(0x153) + t(0x13a), e[s(0x13f)] = s(0x143) + s(0x133), e[s(0x138)] = s(0x156) + s(0x151) + t(0x133), e[s(0x13c)] = t(0x144) + t(0x13e) + s(0x14d);
        const f = e;
        try {
            logger_1[s(0x157)][s(0x158)](f[t(0x14e)]);
            const g = await User_1[t(0x13d)][s(0x166)]();
            g[t(0x15a)](async i => {
                const u = t, v = s, j = {};
                j[u(0x15c)] = ![], await i[v(0x14a)](j);
            });
            const h = (-0x812 * -0x1 + 0x1d * 0xb + -0x951, socket_1[t(0x15b)])();
            h[s(0x160)](f[s(0x13f)]), logger_1[t(0x157)][s(0x158)](f[t(0x138)]);
        } catch (i) {
            const j = {};
            j[t(0x14c)] = f[s(0x13c)], j[s(0x159)] = i, logger_1[s(0x157)][t(0x159)](j);
            throw new Error(i);
        }
    }
};