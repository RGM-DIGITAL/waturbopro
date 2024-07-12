'use strict';
const w = b, x = b;
(function (c, d) {
    const u = b, v = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(u(0x209)) / (0x1655 + -0x184d + -0x5 * -0x65) + parseInt(u(0x20b)) / (0x1f7 * -0xb + 0x2 * -0x4eb + -0x1 * -0x1f75) * (-parseInt(u(0x1f1)) / (0xe93 + 0x99b * -0x3 + 0xe41 * 0x1)) + parseInt(v(0x208)) / (0x1289 + 0x4 * 0x30f + -0x1ec1) + -parseInt(u(0x1ee)) / (-0x1 * 0xef7 + -0x85f + 0x175b) * (-parseInt(u(0x1fa)) / (-0x1443 + 0x9 * -0x2f1 + -0x1 * -0x2ec2)) + -parseInt(u(0x1fd)) / (0x84 * -0x29 + 0x3 * -0x3b3 + 0x2044) * (-parseInt(u(0x210)) / (-0x2021 + -0x23af + 0x21ec * 0x2)) + -parseInt(u(0x205)) / (0x1792 + -0x402 + 0x1 * -0x1387) + parseInt(v(0x1fc)) / (-0xd84 + 0x1be6 + -0xe58);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x439b2 + -0x16bdf6 + 0x1edd72));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x268e + -0x137a + 0x3bf5);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[w(0x1fb) + w(0x1ff)] || function (c) {
    const y = x;
    return c && c[y(0x20e)] ? c : { 'default': c };
};
const q = {};
function a() {
    const B = [
        'action',
        'tenantId',
        'erty',
        '11982420YGllxl',
        'fbObject',
        'status',
        '4304880qeFnUX',
        '1178580WGXEmC',
        'emit',
        '3316LvvOYA',
        '../../mode',
        'OhlWX',
        '__esModule',
        'OShQp',
        '216FExxuP',
        'ession',
        '/socket',
        '1253955nklnMT',
        'getIO',
        'tokenAPI',
        '114QaRBqb',
        'defineProp',
        'ls/Whatsap',
        'fbPageId',
        ':whatsappS',
        'default',
        'DISCONNECT',
        '../../libs',
        'value',
        '12Nvyjmn',
        '__importDe',
        '14871470NhbvXZ',
        '82257tOUWuk',
        'update',
        'fault',
        'session',
        'where'
    ];
    a = function () {
        return B;
    };
    return a();
}
q[w(0x1f9)] = !![], Object[x(0x1f2) + x(0x204)](exports, x(0x20e), q);
const socket_1 = require(x(0x1f8) + x(0x1ed)), Whatsapp_1 = __importDefault(require(x(0x20c) + x(0x1f3) + 'p')), SetLogoutLinkedPage = async ({
        whatsapp: i,
        tenantId: j
    }) => {
        const z = x, A = x, k = {};
        k[z(0x20d)] = z(0x1f7) + 'ED', k[z(0x20f)] = A(0x1fe);
        const l = k, m = (0xa9 + 0x1e14 + -0x1ebd, socket_1[A(0x1ef)])(), n = {};
        n[A(0x1f4)] = null, n[A(0x206)] = {}, n[A(0x1f0)] = null, n[A(0x207)] = l[z(0x20d)];
        const o = n, p = {};
        p['id'] = i['id'], p[A(0x203)] = j;
        const r = {};
        r[z(0x201)] = p, Whatsapp_1[A(0x1f6)][z(0x1fe)](o, r);
        const s = {
                ...i,
                ...o
            }, t = {};
        t[z(0x202)] = l[A(0x20f)], t[z(0x200)] = s, m[z(0x20a)](j + (A(0x1f5) + z(0x211)), t);
    };
exports[w(0x1f6)] = SetLogoutLinkedPage;