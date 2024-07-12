'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0x172)) / (-0x1a9e * 0x1 + -0x3 * -0x703 + 0x596) + -parseInt(p(0x179)) / (0x1ce1 + -0xc0b * -0x3 + -0x1a * 0x280) + -parseInt(o(0x185)) / (0x2640 + 0xfae + -0x35eb) * (parseInt(o(0x174)) / (-0x1e2 * -0xd + -0x2474 + 0xbfe)) + -parseInt(p(0x181)) / (0x1fa + -0x41a + 0x225) + -parseInt(p(0x188)) / (-0xc54 * -0x2 + 0x26a0 + -0x3f42 * 0x1) * (-parseInt(o(0x176)) / (0x1 * -0x2ac + 0x5cf * 0x3 + -0x75d * 0x2)) + parseInt(o(0x170)) / (0x2b * 0xa3 + -0x4b0 + 0x16a9 * -0x1) + parseInt(o(0x186)) / (-0x1060 + -0x9a2 + 0x1a0b);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x10b871 + 0x4 * 0x35206 + -0x14ce8e));
function a() {
    const v = [
        '__esModule',
        '4aGfbTi',
        'destroy',
        '119fvmBlM',
        'tenantId',
        'findOne',
        '1308222QBdqBT',
        'NetYG',
        '../../mode',
        'default',
        'ERR_QUEUE_',
        'bZqJK',
        'STS',
        'erty',
        '3410745HKxZja',
        'ls/Queue',
        'fault',
        '__importDe',
        '3199008IgAKmn',
        '8327538PcVIaq',
        'defineProp',
        '276414jgZudg',
        'value',
        'TICKET_EXI',
        'where',
        'ERR_NO_QUE',
        'UE_FOUND',
        '../../erro',
        '1698064daAjDh',
        'rs/AppErro',
        '1084502DYoQff'
    ];
    a = function () {
        return v;
    };
    return a();
}
var __importDefault = this && this[q(0x184) + r(0x183)] || function (c) {
    const s = q;
    return c && c[s(0x173)] ? c : { 'default': c };
};
const k = {};
k[q(0x189)] = !![], Object[r(0x187) + r(0x180)](exports, q(0x173), k);
const Queue_1 = __importDefault(require(q(0x17b) + q(0x182))), AppError_1 = __importDefault(require(r(0x16f) + r(0x171) + 'r')), DeleteQueueService = async ({
        id: f,
        tenantId: g
    }) => {
        const t = r, u = q, h = {};
        h[t(0x17a)] = t(0x16d) + t(0x16e), h[u(0x17e)] = t(0x17d) + t(0x18a) + u(0x17f);
        const i = h, j = {};
        j['id'] = f, j[u(0x177)] = g;
        const l = {};
        l[u(0x18b)] = j;
        const m = await Queue_1[t(0x17c)][t(0x178)](l);
        if (!m)
            throw new AppError_1[(u(0x17c))](i[t(0x17a)], 0x1394 * -0x1 + -0x1a10 * -0x1 + -0x4e8);
        try {
            await m[u(0x175)]();
        } catch (n) {
            throw new AppError_1[(u(0x17c))](i[u(0x17e)], -0x125f * -0x1 + 0x1b3c + -0x2c07);
        }
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xff4 + 0x1 * -0xf35 + 0xae);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[r(0x17c)] = DeleteQueueService;