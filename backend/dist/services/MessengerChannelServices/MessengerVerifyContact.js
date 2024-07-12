'use strict';
function a() {
    const x = [
        'value',
        'default',
        'getPersona',
        '7cmqrYW',
        '../Contact',
        'Services/C',
        'Url',
        'reateOrUpd',
        '206277PPeEdz',
        '2791192vKMFgM',
        'messengerI',
        'lastName',
        'name',
        '4068196XdZxlc',
        '__esModule',
        '4rbsqjn',
        'profilePic',
        'messenger',
        '272875AQZqae',
        '7ZqQUbT',
        '__importDe',
        '42ghAJvM',
        'erty',
        'defineProp',
        'Service',
        'isWAContac',
        'tenantId',
        '562130hZDQRh',
        'pushname',
        'glWUq',
        'tureUrl',
        'firstName',
        'fault',
        'number',
        'origem',
        'isGroup',
        '1086219GUzyoa',
        'ateContact',
        'isUser',
        '243964kAuNOJ'
    ];
    a = function () {
        return x;
    };
    return a();
}
const s = b, t = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(q(0x206)) / (-0x514 + -0x1 * -0x1693 + 0x8bf * -0x2) * (-parseInt(q(0x1f2)) / (-0x1983 + -0x1 * -0x24c5 + 0x24 * -0x50)) + -parseInt(q(0x1fb)) / (-0x1af3 + 0x1df6 + 0x300 * -0x1) * (parseInt(q(0x202)) / (-0x1a6c + -0x7f * 0xd + 0x20e3)) + -parseInt(q(0x205)) / (0xa8d + -0x1 * 0xc4c + 0x1c4) * (-parseInt(r(0x208)) / (0x2a2 * 0x4 + -0x2294 + 0x1812)) + -parseInt(r(0x1f6)) / (-0x35 * 0x62 + 0x1e0f + -0x9be * 0x1) * (parseInt(r(0x1fc)) / (-0x4 * 0x15e + -0x1918 + 0x1e98)) + parseInt(r(0x1ef)) / (0x1077 + -0xf75 + -0xf9) + -parseInt(q(0x1e6)) / (-0x25 * 0xb8 + -0x1418 * 0x1 + -0x2 * -0x175d) + -parseInt(q(0x200)) / (0xe61 + 0xfb7 + -0x1e0d);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x69d90 + 0x11 * -0x12e9 + -0x7d93e * -0x2));
var __importDefault = this && this[s(0x207) + t(0x1eb)] || function (c) {
    const u = s;
    return c && c[u(0x201)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x17e7 + -0x17e7 + 0x31b0);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[t(0x1f3)] = !![], Object[t(0x1e2) + t(0x209)](exports, s(0x201), k);
const CreateOrUpdateContactService_1 = __importDefault(require(s(0x1f7) + s(0x1f8) + s(0x1fa) + s(0x1f0) + t(0x1e3))), MessengerVerifyContact = async (e, f, g) => {
        const v = t, w = s, h = {};
        h[v(0x1e8)] = v(0x204);
        const i = h, j = await f[w(0x1f5)](e['id']), l = j?.[v(0x203) + w(0x1e9)] || j?.[w(0x203)] || undefined, m = j[v(0x1ff)] || j[v(0x1ea)] + '\x20' + j[w(0x1fe)] || '', n = {};
        n[v(0x1ff)] = m, n[w(0x1ec)] = j['id'], n[v(0x1fd) + 'd'] = j['id'], n[v(0x203) + v(0x1f9)] = l, n[w(0x1e5)] = g, n[w(0x1e7)] = m, n[v(0x1f1)] = ![], n[w(0x1e4) + 't'] = !![], n[v(0x1ee)] = ![], n[v(0x1ed)] = i[w(0x1e8)];
        const o = n, p = await (0x1496 + -0x14 * -0xe8 + -0x26b6, CreateOrUpdateContactService_1[w(0x1f4)])(o);
        return p;
    };
exports[s(0x1f4)] = MessengerVerifyContact;