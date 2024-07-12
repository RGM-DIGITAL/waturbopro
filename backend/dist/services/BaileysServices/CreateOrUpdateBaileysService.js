'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x137 * -0x20 + -0x3c * 0x82 + -0xe * 0x8f);
        let h = e[f];
        return h;
    }, b(c, d);
}
const w = b, x = b;
(function (c, d) {
    const u = b, v = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(u(0xa5)) / (-0x1a46 + -0x20a * -0x13 + -0xc77) + parseInt(v(0x98)) / (0x9cc + 0x745 + -0x110f) + -parseInt(v(0xa6)) / (-0x2553 + 0x8de + 0x1c78) + parseInt(v(0xa9)) / (0x1096 + -0x284 + 0x1 * -0xe0e) * (parseInt(v(0x96)) / (0x7 * -0x581 + 0x2179 + 0x513)) + parseInt(v(0x9e)) / (-0x1 * 0x2386 + 0x150a * -0x1 + 0x3896 * 0x1) * (-parseInt(u(0xb3)) / (0x1542 + 0x232c + -0x1 * 0x3867)) + parseInt(u(0xa3)) / (-0xe58 + -0x103e + -0x1 * -0x1e9e) + -parseInt(v(0xb4)) / (-0x113b + -0x10e3 + 0x4e1 * 0x7);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x9b17 * 0x1 + 0x350 * -0x5ab + 0x2 * 0xe8504));
var __importDefault = this && this[w(0xa0) + x(0x99)] || function (c) {
    const y = w;
    return c && c[y(0xa4)] ? c : { 'default': c };
};
const k = {};
k[x(0xac)] = !![], Object[w(0x9d) + x(0x9a)](exports, x(0xa4), k);
const Baileys_1 = __importDefault(require(w(0x9b) + w(0xad))), createOrUpdateBaileysService = async ({
        whatsappId: e,
        contacts: f,
        chats: g
    }) => {
        const z = x, A = w;
        try {
            const h = {};
            h[z(0x97)] = e;
            const i = {};
            i[A(0xae)] = h;
            const j = await Baileys_1[A(0xa1)][A(0x9c)](i);
            if (j) {
                const m = j[A(0xb5)] ? JSON[A(0xab)](j[A(0xb5)]) : [], n = j[A(0xa2)] ? JSON[A(0xab)](j[A(0xa2)]) : [];
                if (g) {
                    m[z(0xaf)](...g), m[z(0xb2)]();
                    const o = m[z(0xaa)]((p, q, r) => r[z(0xb0)](s => s['id'] === p['id']) === q);
                    return await j[A(0x9f)]({ 'chats': JSON[z(0xb1)](o) });
                }
                if (f) {
                    n[A(0xaf)](...f), n[A(0xb2)]();
                    const p = n[z(0xaa)]((q, r, s) => s[z(0xb0)](t => t['id'] === q['id']) === r);
                    return await j[z(0x9f)]({ 'contacts': JSON[z(0xb1)](p) });
                }
            }
            const l = await Baileys_1[z(0xa1)][z(0xa8)]({
                'whatsappId': e,
                'contacts': JSON[A(0xb1)](f),
                'chats': JSON[A(0xb1)](g)
            });
            return await new Promise(q => setTimeout(q, -0xd8f + -0x1a6f + 0x2be6)), l;
        } catch (q) {
            console[z(0xa7)](q);
            throw new Error(q);
        }
    };
exports[w(0xa1)] = createOrUpdateBaileysService;
function a() {
    const B = [
        'default',
        'contacts',
        '4541888YzaZlL',
        '__esModule',
        '531907eQHFtu',
        '1564773ODlGML',
        'log',
        'create',
        '20KVxEku',
        'filter',
        'parse',
        'value',
        'ls/Baileys',
        'where',
        'push',
        'findIndex',
        'stringify',
        'sort',
        '7287fWfRKm',
        '2038680ZcOuVk',
        'chats',
        '48890OXLVMY',
        'whatsappId',
        '1181286FDJvfB',
        'fault',
        'erty',
        '../../mode',
        'findOne',
        'defineProp',
        '2064nqSyui',
        'update',
        '__importDe'
    ];
    a = function () {
        return B;
    };
    return a();
}