'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0x1c3)) / (-0x1 * -0xa59 + 0x1 * 0x2414 + -0x2e6c) * (parseInt(s(0x1b9)) / (0x5aa + -0x3f7 + 0x1b1 * -0x1)) + -parseInt(r(0x1b8)) / (0x2e7 * 0xd + 0x1e04 + -0x43bc) * (-parseInt(s(0x1d4)) / (-0x1 * 0x17c2 + 0xee9 * 0x1 + -0x8dd * -0x1)) + parseInt(s(0x1cd)) / (-0x196 * 0xd + 0x1f36 + -0xa93) * (-parseInt(r(0x1cb)) / (0x253a + -0x2011 * 0x1 + 0x1 * -0x523)) + -parseInt(r(0x1b1)) / (0x314 * 0x1 + -0x71f * 0x1 + 0x412) + parseInt(s(0x1d2)) / (0xd5 * 0x26 + 0x1368 + 0x1 * -0x32fe) + parseInt(s(0x1c9)) / (0x3b6 + -0x1afb + 0x174e) * (-parseInt(r(0x1b5)) / (-0x1c4 * 0x7 + 0x2 * 0xd5e + -0xe56)) + parseInt(s(0x1c8)) / (0x1883 + 0x1 * -0x20b6 + -0x83e * -0x1) * (parseInt(r(0x1c1)) / (0x239 * 0x2 + 0x2ed + -0x3 * 0x271));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x30b * -0x67a + -0x1de45 + -0x5 * -0x6bd6d));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x229 * 0x5 + 0x2645 + 0x42 * -0x64);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[t(0x1bc) + t(0x1c6)] || function (c) {
    const v = u;
    return c && c[v(0x1bf)] ? c : { 'default': c };
};
const k = {};
k[t(0x1b2)] = !![], Object[t(0x1d0) + u(0x1c2)](exports, u(0x1bf), k);
function a() {
    const y = [
        'isDeleted',
        'update',
        '__esModule',
        'cJBlM',
        '3393336LPnrgw',
        'erty',
        '1WXlMBH',
        'where',
        'isActive',
        'fault',
        'ls/ChatFlo',
        '55WmVQEH',
        '7739406asckMB',
        'writeFile',
        '426sSvgFD',
        'tenantId',
        '10645gwUrYA',
        'reload',
        'zfMxd',
        'defineProp',
        'T_FLOW_FOU',
        '216792KudujE',
        'findOne',
        '4gzhyBG',
        'ERR_NO_CHA',
        'default',
        '../../mode',
        '3776486DYeJsK',
        'value',
        'rs/AppErro',
        'promisify',
        '10duIYSw',
        'attributes',
        '../../erro',
        '3694839SiXykz',
        '654970daEYBV',
        'util',
        'jUYmJ',
        '__importDe'
    ];
    a = function () {
        return y;
    };
    return a();
}
const util_1 = require(t(0x1ba)), fs_1 = require('fs'), ChatFlow_1 = __importDefault(require(t(0x1b0) + t(0x1c7) + 'w')), AppError_1 = __importDefault(require(t(0x1b7) + u(0x1b3) + 'r')), writeFileAsync = (-0x5 * -0x522 + 0x1 * -0x5f3 + -0x13b7, util_1[u(0x1b4)])(fs_1[u(0x1ca)]), DeleteChatFlowService = async ({
        id: h,
        tenantId: i
    }) => {
        const w = u, x = u, j = {};
        j[w(0x1bb)] = w(0x1d5) + w(0x1d1) + 'ND', j[x(0x1c0)] = w(0x1c5), j[x(0x1cf)] = x(0x1bd);
        const l = j, m = {};
        m['id'] = h, m[w(0x1cc)] = i;
        const n = {};
        n[w(0x1c4)] = m;
        const o = await ChatFlow_1[x(0x1d6)][w(0x1d3)](n);
        if (!o)
            throw new AppError_1[(x(0x1d6))](l[x(0x1bb)], 0x11b2 + 0x1953 + -0x1 * 0x2971);
        const p = {};
        p[x(0x1c5)] = ![], p[x(0x1bd)] = !![], await o[w(0x1be)](p);
        const q = {};
        q[x(0x1b6)] = [
            l[w(0x1c0)],
            l[x(0x1cf)]
        ], await o[x(0x1ce)](q);
    };
exports[t(0x1d6)] = DeleteChatFlowService;