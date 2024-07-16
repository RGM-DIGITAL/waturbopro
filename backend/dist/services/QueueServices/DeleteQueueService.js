'use strict';
function a() {
    const v = [
        '119280NyrNJl',
        'QRsDw',
        'TICKET_EXI',
        'where',
        'findOne',
        'ls/Queue',
        'fault',
        'xbmRU',
        'destroy',
        '366708Dngqln',
        'UE_FOUND',
        '6PDYgaW',
        'value',
        'tenantId',
        '../../mode',
        '66406JCWmud',
        '__esModule',
        '2124888rrKPbO',
        '10KzTcVg',
        '__importDe',
        'ERR_QUEUE_',
        '3517892jsYyQk',
        'rs/AppErro',
        'ERR_NO_QUE',
        'default',
        '../../erro',
        'erty',
        '6GdxBJY',
        'STS',
        '24039895ozlSSs',
        'defineProp',
        '18RbOxxZ',
        '3727680gNsXps'
    ];
    a = function () {
        return v;
    };
    return a();
}
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0x14e)) / (-0x1 * 0x241 + -0x1 * -0x535 + -0x2f3) + parseInt(p(0x154)) / (0x1 * 0x2658 + -0x3c3 + -0x2293 * 0x1) * (-parseInt(o(0x160)) / (-0x172c + 0x20c8 + -0x999)) + -parseInt(p(0x165)) / (0xc7 * 0x1d + -0x9c7 * 0x1 + -0xcc0) + -parseInt(p(0x166)) / (-0x115a + -0x1d4a + 0x2ea9) + parseInt(o(0x150)) / (-0x2570 + -0xc49 + 0x31bf) * (-parseInt(p(0x15a)) / (-0x202c + 0x1da6 + 0x28d)) + -parseInt(p(0x156)) / (0x2414 + 0x2274 + 0x4680 * -0x1) * (parseInt(p(0x164)) / (0x1 * -0x24 + 0x2 * -0x344 + 0x65 * 0x11)) + parseInt(p(0x157)) / (-0x629 * 0x5 + -0x54a + -0xc0b * -0x3) * (parseInt(o(0x162)) / (0x535 + -0x2a2 * 0x8 + -0x37 * -0x4a));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x5cf78 + -0x17937 + 0x33c00));
var __importDefault = this && this[q(0x158) + q(0x16c)] || function (c) {
    const s = q;
    return c && c[s(0x155)] ? c : { 'default': c };
};
const k = {};
k[r(0x151)] = !![], Object[q(0x163) + q(0x15f)](exports, r(0x155), k);
const Queue_1 = __importDefault(require(q(0x153) + r(0x16b))), AppError_1 = __importDefault(require(q(0x15e) + q(0x15b) + 'r')), DeleteQueueService = async ({
        id: f,
        tenantId: g
    }) => {
        const t = q, u = q, h = {};
        h[t(0x16d)] = t(0x15c) + u(0x14f), h[t(0x167)] = t(0x159) + t(0x168) + u(0x161);
        const i = h, j = {};
        j['id'] = f, j[t(0x152)] = g;
        const l = {};
        l[t(0x169)] = j;
        const m = await Queue_1[t(0x15d)][t(0x16a)](l);
        if (!m)
            throw new AppError_1[(u(0x15d))](i[t(0x16d)], -0xab4 + -0x5 * 0x2a5 + 0x1981);
        try {
            await m[u(0x14d)]();
        } catch (n) {
            throw new AppError_1[(u(0x15d))](i[t(0x167)], 0x11ab + -0x1 * 0x1b7 + 0x170 * -0xa);
        }
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x264b + -0xb27 + 0xf5 * -0x1b);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[r(0x15d)] = DeleteQueueService;