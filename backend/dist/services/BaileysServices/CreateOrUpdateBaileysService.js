'use strict';
const w = b, x = b;
function a() {
    const B = [
        'create',
        'push',
        'findOne',
        'findIndex',
        '400mELjyD',
        'defineProp',
        '__esModule',
        '2860983bpzEGJ',
        'filter',
        '24spwFFB',
        'update',
        '4FuZSWB',
        '__importDe',
        'whatsappId',
        'contacts',
        'value',
        'parse',
        'stringify',
        'log',
        '94765RGwTRd',
        '5zkkvbm',
        '459072eEiAwT',
        'default',
        '../../mode',
        'ls/Baileys',
        '804123bIBAhZ',
        '182070vowicD',
        'where',
        '7722282OZgvGq',
        'sort',
        'erty',
        'chats',
        '8096053rcCCiz',
        'fault'
    ];
    a = function () {
        return B;
    };
    return a();
}
(function (c, d) {
    const u = b, v = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(u(0xd2)) / (-0x1 * 0x19c6 + 0x3 * -0xc0e + 0x3df1) + -parseInt(u(0xd3)) / (-0xb * 0x1bb + 0xa27 + 0x8e4) + parseInt(u(0xce)) / (-0x1753 + -0x1b4a + 0x3 * 0x10e0) * (parseInt(v(0xc4)) / (-0x137f + -0x53 * 0x19 + 0xdcf * 0x2)) + -parseInt(v(0xcd)) / (-0x1092 + 0xd85 * 0x2 + -0xa73) * (-parseInt(v(0xd5)) / (-0xa00 + -0x1341 + -0x1 * -0x1d47)) + -parseInt(u(0xd9)) / (-0xfd6 + -0x7 * 0x48b + 0x2faa) + parseInt(v(0xc2)) / (-0x1b0 + -0x7 * -0x577 + 0x2f * -0xc7) * (parseInt(v(0xc0)) / (-0xb24 + 0x2d3 * 0x1 + 0x1 * 0x85a)) + -parseInt(u(0xdf)) / (0x71f + -0x2 * 0x3a7 + -0x1 * -0x39) * (-parseInt(v(0xcc)) / (-0x76d * 0x2 + 0x111f + -0x23a));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x13181d + 0x33bfb + -0x17 * -0x12523));
var __importDefault = this && this[w(0xc5) + x(0xda)] || function (c) {
    const y = x;
    return c && c[y(0xbf)] ? c : { 'default': c };
};
const k = {};
k[w(0xc8)] = !![], Object[w(0xe0) + w(0xd7)](exports, x(0xbf), k);
const Baileys_1 = __importDefault(require(w(0xd0) + x(0xd1))), createOrUpdateBaileysService = async ({
        whatsappId: e,
        contacts: f,
        chats: g
    }) => {
        const z = w, A = w;
        try {
            const h = {};
            h[z(0xc6)] = e;
            const i = {};
            i[A(0xd4)] = h;
            const j = await Baileys_1[z(0xcf)][z(0xdd)](i);
            if (j) {
                const m = j[A(0xd8)] ? JSON[A(0xc9)](j[z(0xd8)]) : [], n = j[z(0xc7)] ? JSON[z(0xc9)](j[A(0xc7)]) : [];
                if (g) {
                    m[A(0xdc)](...g), m[z(0xd6)]();
                    const o = m[A(0xc1)]((p, q, r) => r[A(0xde)](s => s['id'] === p['id']) === q);
                    return await j[A(0xc3)]({ 'chats': JSON[z(0xca)](o) });
                }
                if (f) {
                    n[z(0xdc)](...f), n[z(0xd6)]();
                    const p = n[z(0xc1)]((q, r, s) => s[A(0xde)](t => t['id'] === q['id']) === r);
                    return await j[A(0xc3)]({ 'contacts': JSON[z(0xca)](p) });
                }
            }
            const l = await Baileys_1[A(0xcf)][z(0xdb)]({
                'whatsappId': e,
                'contacts': JSON[A(0xca)](f),
                'chats': JSON[A(0xca)](g)
            });
            return await new Promise(q => setTimeout(q, 0x19 * -0x5 + -0x502 + 0x53 * 0x1d)), l;
        } catch (q) {
            console[z(0xcb)](q);
            throw new Error(q);
        }
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xc * 0x20b + 0x78 + 0x18cb);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[w(0xcf)] = createOrUpdateBaileysService;