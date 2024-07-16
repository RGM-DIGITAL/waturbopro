'use strict';
const u = b, v = b;
(function (c, d) {
    const s = b, t = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(s(0x1be)) / (-0x2d9 * -0x1 + 0x3b * -0x7b + 0x1981) + parseInt(t(0x1c3)) / (0x1 * 0x24cd + -0x103e + -0x148d) * (parseInt(s(0x1a6)) / (-0x619 + 0x1dbb + 0x1 * -0x179f)) + parseInt(s(0x199)) / (0x1de5 + -0x1 * 0x43f + -0x19a2) * (parseInt(s(0x1b9)) / (0x151d + -0x2cd * -0x1 + -0x17e5)) + -parseInt(s(0x1ab)) / (0xd5b + 0xf82 + 0x1 * -0x1cd7) + parseInt(s(0x1c2)) / (-0x7 * 0x2d9 + 0x1d * 0x14f + -0x11fd) + parseInt(s(0x1bd)) / (-0x1 * -0x1d27 + 0x981 + 0x19c * -0x18) * (-parseInt(s(0x19a)) / (-0x4cd * -0x7 + -0x1d4d + 0x445 * -0x1)) + -parseInt(t(0x1c1)) / (0xaef + 0x1737 + -0x221c);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x861bb + -0x262a2 + 0x7d3 * 0x249));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x80 + -0xf2f + 0x1145);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[u(0x1a2) + v(0x1a7)] || function (c) {
    const w = v;
    return c && c[w(0x1aa)] ? c : { 'default': c };
};
const k = {};
k[v(0x19c)] = !![], Object[u(0x1b5) + v(0x1a8)](exports, v(0x1aa), k), exports[v(0x1c5)] = exports[v(0x19e)] = void (-0x5 * -0x67f + 0x19c6 + -0x3a41);
const socket_1 = require(v(0x198) + v(0x19b)), AppError_1 = __importDefault(require(u(0x1bf) + u(0x1ae))), UpdateSettingService_1 = __importDefault(require(v(0x1c6) + u(0x1a1) + u(0x1bb) + v(0x1c7) + u(0x1c0) + v(0x1ad))), ListSettingsService_1 = __importDefault(require(v(0x1c6) + v(0x1a1) + u(0x1bb) + u(0x1b6) + u(0x19f) + v(0x19d))), index = async (c, d) => {
        const x = v, y = v, e = await (-0x1 * -0xb24 + 0x1b85 + -0x26a9, ListSettingsService_1[x(0x1af)])();
        return d[y(0x1ac)](-0x1 * 0x8e7 + 0x8 * 0x257 + -0x9 * 0x101)[y(0x1bc)](e);
    };
exports[u(0x19e)] = index;
const update = async (f, g) => {
    const z = v, A = u, h = {};
    h[z(0x197)] = function (q, r) {
        return q !== r;
    }, h[z(0x1b2)] = A(0x1a0), h[A(0x1b4)] = z(0x1a4) + z(0x1a3), h[A(0x1b7)] = A(0x1c5);
    const i = h;
    if (i[z(0x197)](f[A(0x196)][A(0x1b3)], i[z(0x1b2)]))
        throw new AppError_1[(A(0x1af))](i[z(0x1b4)], 0x1910 + 0x1 * 0xd4b + -0x58 * 0x6b);
    const {
            value: j,
            key: l
        } = f[A(0x1b8)], m = {};
    m[A(0x1b1)] = l, m[z(0x19c)] = j;
    const n = await (0x242 + -0x1e * 0x1 + -0x224, UpdateSettingService_1[z(0x1af)])(m), o = (-0x4f2 + -0xa82 + 0xf74, socket_1[A(0x1a5)])(), p = {};
    return p[A(0x1b0)] = i[A(0x1b7)], p[A(0x1c4)] = n, o[z(0x1a9)](A(0x1ba), p), g[A(0x1ac)](0x1633 * -0x1 + 0x20d2 + -0x9d7)[z(0x1bc)](n);
};
exports[v(0x1c5)] = update;
function a() {
    const B = [
        'key',
        'JwldQ',
        'profile',
        'rSObW',
        'defineProp',
        'ices/ListS',
        'iJNvJ',
        'body',
        '4370395GOyGEZ',
        '1:settings',
        'eneralServ',
        'json',
        '24952FTxcmV',
        '687262dHVVlX',
        '../errors/',
        'eSettingSe',
        '56410JSooMB',
        '5383035SEwIZo',
        '346238VMSWfK',
        'setting',
        'update',
        '../service',
        'ices/Updat',
        'user',
        'ygPYF',
        '../libs/so',
        '4VMqmza',
        '819PIYBlu',
        'cket',
        'value',
        'vice',
        'index',
        'ettingsSer',
        'admin',
        's/SettingG',
        '__importDe',
        'MISSION',
        'ERR_NO_PER',
        'getIO',
        '12eCCVGm',
        'fault',
        'erty',
        'emit',
        '__esModule',
        '5356212YlmCXH',
        'status',
        'rvice',
        'AppError',
        'default',
        'action'
    ];
    a = function () {
        return B;
    };
    return a();
}