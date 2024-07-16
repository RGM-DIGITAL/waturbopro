'use strict';
const s = b, t = b;
function a() {
    const z = [
        'store',
        '10HnldYI',
        'ce/ResetPa',
        '2856689Nehlkm',
        '39198QGqoMf',
        'ssword',
        'VWpmF',
        '2136438OmdqMA',
        'resetPassw',
        'value',
        '5932RncWTe',
        'iado\x20com\x20s',
        '966ISyzgN',
        'finida\x20com',
        'error',
        'erty',
        'Ebtns',
        's/ForgotPa',
        'E-mail\x20env',
        'ssWordServ',
        'defineProp',
        'ords',
        'status',
        '1478zCvWky',
        'zwKqg',
        'fault',
        '__esModule',
        'message',
        's/ResetPas',
        'Verifique\x20',
        'uuid',
        'swordServi',
        '16GviUDT',
        'Senha\x20rede',
        'ucesso',
        'ices/SendM',
        'formado',
        '\x20sucesso',
        'default',
        '185jsQSxc',
        'params',
        '__importDe',
        '415sBQCbA',
        '../service',
        '1693872wKAjrp',
        'ail',
        '3725603YYdKLy',
        'json',
        'o\x20Token\x20in'
    ];
    a = function () {
        return z;
    };
    return a();
}
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(q(0x1e5)) / (-0x137b * -0x1 + -0x1363 + -0x1 * 0x17) * (parseInt(q(0x1d5)) / (0x1e2e + 0x4c8 + -0x22f4)) + parseInt(q(0x1ca)) / (-0x1 * 0x958 + -0x22b9 + 0x2c14) * (parseInt(q(0x1c8)) / (0x1c * -0x149 + -0x12d + 0x252d * 0x1)) + -parseInt(r(0x1e8)) / (0x16ba + 0x1b8f * 0x1 + -0x1922 * 0x2) * (-parseInt(q(0x1f3)) / (0x485 * 0x8 + -0x9d * -0x7 + 0x286d * -0x1)) + -parseInt(q(0x1ec)) / (-0x1624 + 0x1 * -0x2579 + 0x3ba4) + -parseInt(q(0x1de)) / (-0x1a0d + 0x8 * -0x85 + 0x1e3d * 0x1) * (parseInt(q(0x1c5)) / (0x1b70 * -0x1 + -0x6c7 * 0x1 + 0x89 * 0x40)) + -parseInt(r(0x1f0)) / (-0x2608 + 0x1 * 0x12cd + 0x1345) * (-parseInt(q(0x1f2)) / (0x1029 * 0x1 + -0x265a + 0x163c)) + parseInt(r(0x1ea)) / (-0x273 + -0x26c1 + 0x2940);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x5f67 * -0xb + -0x3162a * 0x1 + 0x4c1 * 0xad));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xa40 + -0x36a * 0x1 + -0x512);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[s(0x1e7) + s(0x1d7)] || function (c) {
    const u = t;
    return c && c[u(0x1d8)] ? c : { 'default': c };
};
const k = {};
k[s(0x1c7)] = !![], Object[s(0x1d2) + s(0x1cd)](exports, s(0x1d8), k), exports[t(0x1c6) + t(0x1d3)] = exports[s(0x1ef)] = void (-0x7de + -0x43 * -0x36 + -0x644);
const uuid_1 = require(t(0x1dc)), SendMail_1 = __importDefault(require(t(0x1e9) + s(0x1cf) + s(0x1d1) + t(0x1e1) + t(0x1eb))), ResetPassword_1 = __importDefault(require(t(0x1e9) + t(0x1da) + s(0x1dd) + t(0x1f1) + t(0x1f4))), store = async (f, g) => {
        const v = t, w = t, h = {};
        h[v(0x1c4)] = w(0x1d0) + v(0x1c9) + w(0x1e0);
        const i = h, {email: j} = f[v(0x1e6)], l = (-0x24e8 + 0xb * 0x209 + 0xe85, uuid_1['v4'])(), m = await (0x1514 + 0xe55 + 0x1 * -0x2369, SendMail_1[w(0x1e4)])(j, l);
        if (!m) {
            const o = {};
            return o[v(0x1d9)] = i[w(0x1c4)], g[w(0x1d4)](-0xa45 + -0xc2b + 0x5ce * 0x4)[w(0x1ed)](o);
        }
        const n = {};
        return n[v(0x1cc)] = i[v(0x1c4)], g[w(0x1d4)](-0xd31 + 0x649 * 0x3 + -0x1 * 0x416)[v(0x1ed)](n);
    };
exports[s(0x1ef)] = store;
const resetPasswords = async (f, g) => {
    const x = s, y = t, h = {};
    h[x(0x1ce)] = x(0x1df) + x(0x1cb) + y(0x1e3), h[y(0x1d6)] = y(0x1db) + x(0x1ee) + x(0x1e2);
    const i = h, {
            email: j,
            token: l,
            password: m
        } = f[y(0x1e6)], n = await (0x6df + 0x11e9 + -0x3d * 0x68, ResetPassword_1[y(0x1e4)])(j, l, m);
    if (!n) {
        const p = {};
        return p[x(0x1d9)] = i[y(0x1ce)], g[y(0x1d4)](-0xcb * -0x7 + 0x3 * 0x57a + -0x1533)[x(0x1ed)](p);
    }
    const o = {};
    return o[x(0x1cc)] = i[y(0x1d6)], g[x(0x1d4)](0x26 * 0xa1 + -0x1e9d + 0xc1 * 0xb)[y(0x1ed)](o);
};
exports[t(0x1c6) + t(0x1d3)] = resetPasswords;