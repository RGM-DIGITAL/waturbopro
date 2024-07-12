'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(m(0x196)) / (0x230 + 0x2171 + -0x23a0) + parseInt(n(0x198)) / (0xdb8 + -0x26a1 + 0x18eb * 0x1) + parseInt(m(0x18d)) / (-0x9c5 * -0x3 + -0x246f + 0x57 * 0x15) + parseInt(n(0x19a)) / (0x16cd * 0x1 + 0x1f57 + -0xd88 * 0x4) * (parseInt(m(0x18c)) / (-0x5ed + 0x6d * 0x20 + -0x7ae)) + -parseInt(n(0x1a2)) / (-0x2321 + 0x67c + 0x1cab) + parseInt(m(0x195)) / (0x269 * 0xc + 0x1 * -0x183b + -0x2 * 0x255) + -parseInt(m(0x192)) / (0x1c16 + 0x1 * 0x24c8 + -0x40d6 * 0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x22ba7 + -0x30ef * -0x11 + -0xe * -0xbdf));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x21f * -0x6 + -0x82e + 0x1673);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[o(0x1a0) + o(0x193)] || function (c) {
    const q = p;
    return c && c[q(0x199)] ? c : { 'default': c };
};
const k = {};
k[o(0x190)] = !![], Object[o(0x197) + p(0x19d)](exports, o(0x199), k);
function a() {
    const t = [
        'fault',
        'Vqkna',
        '1424241rfLifF',
        '200682BkhmiS',
        'defineProp',
        '281258JPiImS',
        '__esModule',
        '56QQWVXu',
        '../../mode',
        'ls/Queue',
        'erty',
        'queue',
        'where',
        '__importDe',
        'tenantId',
        '184152wsmjpM',
        'findAll',
        'tMYlK',
        '10RzHCdm',
        '373359UcPhFa',
        'order',
        'default',
        'value',
        'ASC',
        '991528lfvZbf'
    ];
    a = function () {
        return t;
    };
    return a();
}
const Queue_1 = __importDefault(require(o(0x19b) + p(0x19c))), ListQueueService = async ({tenantId: f}) => {
        const r = o, s = o, g = {};
        g[r(0x18b)] = s(0x19e), g[r(0x194)] = r(0x191);
        const h = g, i = {};
        i[r(0x1a1)] = f;
        const j = {};
        j[s(0x19f)] = i, j[s(0x18e)] = [[
                h[r(0x18b)],
                h[s(0x194)]
            ]];
        const l = await Queue_1[r(0x18f)][r(0x1a3)](j);
        return l;
    };
exports[o(0x18f)] = ListQueueService;