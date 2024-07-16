'use strict';
const t = b, u = b;
function a() {
    const y = [
        'findOne',
        '1471078PliVXM',
        '8570okZZQN',
        '../../erro',
        'default',
        '4857744rbJwUu',
        'isActive',
        '__importDe',
        'promisify',
        '../../mode',
        'value',
        'wWnEA',
        'tenantId',
        'isDeleted',
        '170hqColV',
        '2304VtHTuo',
        'where',
        'reload',
        'ERR_NO_CHA',
        'ls/ChatFlo',
        '__esModule',
        '7893XWHFmk',
        'fault',
        'erty',
        'update',
        'T_FLOW_FOU',
        'rs/AppErro',
        'iOJEl',
        '1294686cvTrzD',
        '6sMiNcw',
        '28979OyyTCK',
        'attributes',
        'writeFile',
        'defineProp',
        'UcFVv',
        'util',
        '42652jrvyMH'
    ];
    a = function () {
        return y;
    };
    return a();
}
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0xc9)) / (0x36e + 0x247c + -0x27e9) * (-parseInt(s(0xc8)) / (-0x9da + 0x1efe + 0x1 * -0x1522)) + -parseInt(r(0xc0)) / (0x1 * 0x1aff + -0x1f72 + -0x1 * -0x476) + parseInt(r(0xcf)) / (-0x287 * 0x7 + -0x1a * -0x13a + -0xe2f) * (parseInt(s(0xb9)) / (-0x1e92 + 0x26ba * 0x1 + -0x823 * 0x1)) + parseInt(s(0xc7)) / (-0x7cb + -0xd80 + 0x1551) + parseInt(s(0xd1)) / (0x15a0 + 0x1 * -0x1a03 + 0xe2 * 0x5) + -parseInt(r(0xd5)) / (-0x21c9 + 0x1bca + -0x607 * -0x1) + parseInt(r(0xba)) / (-0x7 * 0x12d + 0x383 + 0x4c1) * (parseInt(r(0xd2)) / (-0xb * -0x14f + -0x1812 + 0x9b7));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2637b + 0x31e4b + 0x7243 * 0x9));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2af * -0x9 + 0x2a * 0xe3 + -0xc5e);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[t(0xd7) + t(0xc1)] || function (c) {
    const v = t;
    return c && c[v(0xbf)] ? c : { 'default': c };
};
const k = {};
k[t(0xda)] = !![], Object[t(0xcc) + t(0xc2)](exports, u(0xbf), k);
const util_1 = require(u(0xce)), fs_1 = require('fs'), ChatFlow_1 = __importDefault(require(u(0xd9) + t(0xbe) + 'w')), AppError_1 = __importDefault(require(t(0xd3) + t(0xc5) + 'r')), writeFileAsync = (-0x764 + -0x2679 + 0x2ddd, util_1[t(0xd8)])(fs_1[t(0xcb)]), DeleteChatFlowService = async ({
        id: h,
        tenantId: i
    }) => {
        const w = t, x = u, j = {};
        j[w(0xdb)] = x(0xbd) + w(0xc4) + 'ND', j[x(0xc6)] = x(0xd6), j[w(0xcd)] = x(0xdd);
        const l = j, m = {};
        m['id'] = h, m[x(0xdc)] = i;
        const n = {};
        n[x(0xbb)] = m;
        const o = await ChatFlow_1[w(0xd4)][x(0xd0)](n);
        if (!o)
            throw new AppError_1[(w(0xd4))](l[w(0xdb)], 0x80 * 0x7 + 0xdd6 + -0xfc2);
        const p = {};
        p[w(0xd6)] = ![], p[w(0xdd)] = !![], await o[x(0xc3)](p);
        const q = {};
        q[x(0xca)] = [
            l[w(0xc6)],
            l[x(0xcd)]
        ], await o[w(0xbc)](q);
    };
exports[t(0xd4)] = DeleteChatFlowService;