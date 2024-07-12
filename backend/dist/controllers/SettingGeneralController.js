'use strict';
const u = b, v = b;
(function (c, d) {
    const s = b, t = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(s(0x209)) / (-0x1 * -0x25a3 + -0x1681 * 0x1 + 0x50b * -0x3) + parseInt(t(0x1ed)) / (-0x193e * -0x1 + 0x1ff9 + 0x1d * -0x1f9) * (-parseInt(t(0x1e6)) / (0x12f + -0xc6b + 0xb3f * 0x1)) + parseInt(t(0x1fd)) / (0x2 * 0x18a + 0x57f * -0x1 + 0x26f) + -parseInt(t(0x20e)) / (0xd85 + -0x1 * -0x1811 + -0x2591) * (parseInt(t(0x1eb)) / (-0x2 * -0xdb4 + 0x2471 + -0x3fd3)) + -parseInt(s(0x1e2)) / (0x1fcb + -0x885 * 0x1 + -0x1 * 0x173f) + -parseInt(s(0x1f4)) / (-0x11 * -0x1bd + 0x21bd + -0x3f42 * 0x1) * (-parseInt(t(0x207)) / (-0x11d4 + -0x5 * 0x281 + 0x1 * 0x1e62)) + -parseInt(s(0x1e5)) / (0x19 * 0x4f + 0x17ed + -0x1f9a) * (-parseInt(s(0x1df)) / (0x1d28 + -0x1 * -0x1862 + -0x1 * 0x357f));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x44 * -0x3955 + 0xe7c8d + -0x10e4f6));
function a() {
    const B = [
        'otdJM',
        '228hwBIHE',
        '1:settings',
        '2369408fwJbhZ',
        'body',
        'value',
        'update',
        'ERR_NO_PER',
        'oHNud',
        'IxZfd',
        '5456120UxHsRx',
        'mMPHI',
        'MISSION',
        '__importDe',
        'eSettingSe',
        '../errors/',
        'ices/ListS',
        'erty',
        'json',
        '680212WXadPl',
        'emit',
        '../libs/so',
        'status',
        'AppError',
        'user',
        'setting',
        'index',
        'rvice',
        '__esModule',
        '9OwuWYt',
        'key',
        '1283371ULvKTC',
        's/SettingG',
        'default',
        'profile',
        'getIO',
        '173275JizltI',
        'admin',
        'eneralServ',
        'cket',
        '11kTCnAX',
        'fault',
        'ices/Updat',
        '5224807CFBODi',
        'defineProp',
        'action',
        '19527910baBTwC',
        '3PzZFpV',
        'vice',
        'ettingsSer',
        '../service'
    ];
    a = function () {
        return B;
    };
    return a();
}
var __importDefault = this && this[u(0x1f7) + v(0x1e0)] || function (c) {
    const w = u;
    return c && c[w(0x206)] ? c : { 'default': c };
};
const k = {};
k[v(0x1ef)] = !![], Object[u(0x1e3) + v(0x1fb)](exports, u(0x206), k), exports[u(0x1f0)] = exports[u(0x204)] = void (0x1d6e + -0x1d75 + 0x7 * 0x1);
const socket_1 = require(u(0x1ff) + u(0x211)), AppError_1 = __importDefault(require(u(0x1f9) + u(0x201))), UpdateSettingService_1 = __importDefault(require(u(0x1e9) + v(0x20a) + u(0x210) + v(0x1e1) + u(0x1f8) + u(0x205))), ListSettingsService_1 = __importDefault(require(v(0x1e9) + u(0x20a) + u(0x210) + v(0x1fa) + u(0x1e8) + u(0x1e7))), index = async (c, d) => {
        const x = v, y = v, e = await (0x109d + -0x431 + -0x636 * 0x2, ListSettingsService_1[x(0x20b)])();
        return d[y(0x200)](0x32d + 0x4fd * 0x7 + -0x12a8 * 0x2)[x(0x1fc)](e);
    };
exports[v(0x204)] = index;
const update = async (f, g) => {
    const z = v, A = u, h = {};
    h[z(0x1f2)] = function (q, r) {
        return q !== r;
    }, h[A(0x1f5)] = A(0x20f), h[A(0x1ea)] = A(0x1f1) + A(0x1f6), h[A(0x1f3)] = A(0x1f0);
    const i = h;
    if (i[z(0x1f2)](f[z(0x202)][z(0x20c)], i[z(0x1f5)]))
        throw new AppError_1[(z(0x20b))](i[z(0x1ea)], 0x17a * 0x3 + -0xb88 + 0x8ad);
    const {
            value: j,
            key: l
        } = f[z(0x1ee)], m = {};
    m[z(0x208)] = l, m[z(0x1ef)] = j;
    const n = await (0x96 * -0x12 + -0x1 * 0x1999 + -0x13 * -0x1e7, UpdateSettingService_1[z(0x20b)])(m), o = (-0x660 + 0x2 * 0xe6b + 0x73 * -0x32, socket_1[z(0x20d)])(), p = {};
    return p[A(0x1e4)] = i[z(0x1f3)], p[A(0x203)] = n, o[z(0x1fe)](A(0x1ec), p), g[z(0x200)](0x3 * 0x9a3 + -0x25a * 0xd + 0x5 * 0x7d)[A(0x1fc)](n);
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xe5 * 0xe + -0xc * -0x248 + -0xcfb * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[v(0x1f0)] = update;